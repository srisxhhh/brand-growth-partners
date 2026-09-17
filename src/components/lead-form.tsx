import { useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import { checkRateLimit, recordSubmission, MIN_FILL_MS } from "@/lib/anti-spam";
import { trackLeadSubmit, trackSpamBlocked, trackWhatsAppClick } from "@/lib/analytics";
import { attributionSummary, getAttribution } from "@/lib/attribution";
import { supabase } from "@/integrations/supabase/client";
import { whatsappLink } from "@/lib/site";

type Field = {
  key: string;
  label: string;
  placeholder?: string;
  type?: "text" | "textarea" | "select" | "url";
  options?: string[];
};

const briefFields: Record<string, Field[]> = {
  tech: [
    { key: "buildType", label: "What do you want to build?", type: "select", options: ["Website", "Mobile app", "Landing page", "E-commerce store", "Web app", "Other"] },
    { key: "idea", label: "Explain your idea", type: "textarea", placeholder: "What should it do, who is it for, and what would success look like?" },
  ],
  "personalised-ugc": [
    { key: "brandName", label: "Brand name" },
    { key: "designation", label: "Your designation", placeholder: "Owner, founder, manager…" },
    { key: "referenceLinks", label: "Video reference links", type: "textarea", placeholder: "Paste one or more links to videos you want to target or recreate" },
    { key: "brandWebsite", label: "Brand website", type: "url", placeholder: "https://" },
  ],
  "personal-commercial-branding": [
    { key: "brandName", label: "Brand name" },
    { key: "designation", label: "Your designation", placeholder: "Owner, founder, manager…" },
    { key: "referenceLinks", label: "Video reference links", type: "textarea", placeholder: "Paste one or more links to videos you want to target or recreate" },
    { key: "brandWebsite", label: "Brand website", type: "url", placeholder: "https://" },
  ],
  "design-editing": [
    { key: "referenceLink", label: "Reference page or video link", type: "url", placeholder: "https://" },
    { key: "brandName", label: "Brand or channel name" },
    { key: "contentLength", label: "Content format", type: "select", options: ["Short-form content", "Long-form content", "Both"] },
  ],
  "meta-ads": [
    { key: "monthlyBudget", label: "Average monthly ad-spend budget", placeholder: "For example, ₹50,000" },
    { key: "targetLocations", label: "Target cities or locations", type: "textarea", placeholder: "List the cities, regions or countries you want to reach" },
  ],
  "ai-automation": [
    { key: "workflow", label: "Explain the workflow automation in brief", type: "textarea", placeholder: "What happens today, which tools are involved, and what should happen automatically?" },
  ],
};

const baseSchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100, "Name must be under 100 characters"),
  contact: z.string().trim().min(5, "Please add a phone number or email").max(255, "Contact details must be under 255 characters").refine((value) => z.string().email().safeParse(value).success || /^[+\d][\d\s()-]{4,}$/.test(value), "Enter a valid phone number or email"),
});

const cleanUrl = (value: string) => {
  if (!value.trim()) return false;
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export function LeadForm({ serviceTitle, serviceSlug }: { serviceTitle: string; serviceSlug: string }) {
  const fields = briefFields[serviceSlug] ?? [];
  const initialValues = Object.fromEntries(["name", "contact", ...fields.map((field) => field.key)].map((key) => [key, ""]));
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [blocked, setBlocked] = useState<string | null>(null);
  const honeypot = useRef("");
  const mountedAt = useRef(Date.now());
  const lastLink = useRef("");

  const set = (key: string) => (event: { target: { value: string } }) => setValues((current) => ({ ...current, [key]: event.target.value }));

  const validate = () => {
    const parsed = baseSchema.safeParse(values);
    const next: Record<string, string> = {};
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0] ?? "");
        if (key && !next[key]) next[key] = issue.message;
      });
    }
    fields.forEach((field) => {
      const value = values[field.key]?.trim() ?? "";
      if (!value) next[field.key] = `Please add ${field.label.toLowerCase()}`;
      else if (value.length > 2000) next[field.key] = "Please keep this under 2000 characters";
      else if (field.type === "url" && !cleanUrl(value)) next[field.key] = "Please enter a full link beginning with http:// or https://";
      else if (field.key === "referenceLinks") {
        const links = value.split(/[\n,]+/).map((link) => link.trim()).filter(Boolean);
        if (!links.every(cleanUrl)) next[field.key] = "Every reference must be a full link beginning with http:// or https://";
      }
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setBlocked(null);
    if (honeypot.current.trim()) {
      trackSpamBlocked(serviceTitle, "honeypot");
      setSent(true);
      return;
    }
    if (Date.now() - mountedAt.current < MIN_FILL_MS) {
      trackSpamBlocked(serviceTitle, "too_fast");
      setBlocked("That was quick — take a second and send it again.");
      return;
    }
    const verdict = checkRateLimit();
    if (!verdict.ok) {
      trackSpamBlocked(serviceTitle, verdict.reason);
      setBlocked(verdict.message);
      return;
    }
    if (!validate()) return;

    const attribution = getAttribution();
    const page = window.location.pathname;
    const campaign = attributionSummary(attribution);
    const answers = fields.map((field) => `${field.label}: ${(values[field.key] ?? "").trim()}`);
    const notes = answers.join("\n");
    const message = [`New enquiry — ${serviceTitle}`, `Name: ${(values["name"] ?? "").trim()}`, `Contact: ${(values["contact"] ?? "").trim()}`, ...answers, `Page: ${page}`, `Campaign: ${campaign}`].join("\n");
    const link = whatsappLink(message);
    lastLink.current = link;

    recordSubmission();
    trackLeadSubmit(serviceTitle);
    trackWhatsAppClick(serviceTitle, "lead_form");
    void supabase.from("leads").insert({
      service: serviceTitle,
      name: (values["name"] ?? "").trim(),
      email: (values["contact"] ?? "").trim(),
      notes,
      page,
      campaign,
      whatsapp_clicked_at: new Date().toISOString(),
    });
    window.open(link, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const fieldClass = "mt-2 w-full border border-border bg-background px-4 py-3 font-sans text-sm outline-none focus:border-foreground";

  if (sent) return (
    <div className="fade-in border border-border bg-card p-7 text-center sm:p-12">
      <span className="eyebrow">Enquiry sent</span>
      <h3 className="mt-4 font-display text-3xl font-medium italic tracking-tight sm:text-4xl">Thank you — it's with us now.</h3>
      <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">Your {serviceTitle} brief has been handed to our WhatsApp. We reply the same working day.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href={lastLink.current} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(serviceTitle, "thank_you_reopen")} className="inline-flex items-center justify-center bg-agree px-8 py-4 text-xs uppercase tracking-[0.2em] text-agree-foreground">Open WhatsApp again</a>
        <button type="button" onClick={() => { setValues(initialValues); setErrors({}); honeypot.current = ""; mountedAt.current = Date.now(); setSent(false); }} className="inline-flex items-center justify-center border border-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background">Send another brief</button>
      </div>
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="border border-border bg-card p-7 sm:p-10" noValidate>
      <span className="eyebrow">Tell us what you need</span>
      <h3 className="mt-3 font-display text-3xl font-medium italic tracking-tight sm:text-4xl">Send your {serviceTitle} brief</h3>
      <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">Complete the brief and it lands in our WhatsApp, ready for a useful first conversation.</p>
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0"><label>Company website<input type="text" tabIndex={-1} autoComplete="off" onChange={(event) => { honeypot.current = event.target.value; }} /></label></div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <BriefField field={{ key: "name", label: "Name", placeholder: "Your name" }} value={values["name"] ?? ""} error={errors["name"]} onChange={set("name")} className={fieldClass} />
        <BriefField field={{ key: "contact", label: "Phone or email", placeholder: "+91… or you@company.com" }} value={values["contact"] ?? ""} error={errors["contact"]} onChange={set("contact")} className={fieldClass} />
        {fields.map((field) => <BriefField key={field.key} field={field} value={values[field.key] ?? ""} error={errors[field.key]} onChange={set(field.key)} className={fieldClass} />)}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button type="submit" className="inline-flex items-center justify-center bg-agree px-8 py-4 text-xs uppercase tracking-[0.2em] text-agree-foreground">Send to WhatsApp</button>
        {blocked ? <span className="font-sans text-sm text-destructive" role="status">{blocked}</span> : null}
      </div>
    </form>
  );
}

function BriefField({ field, value, error, onChange, className }: { field: Field; value: string; error: string | undefined; onChange: (event: { target: { value: string } }) => void; className: string }) {
  const wide = field.type === "textarea" ? " sm:col-span-2" : "";
  return (
    <label className={`block${wide}`}>
      <span className="eyebrow">{field.label}</span>
      {field.type === "textarea" ? <textarea value={value} onChange={onChange} maxLength={2000} rows={4} className={`${className} resize-y`} placeholder={field.placeholder} /> : field.type === "select" ? <select value={value} onChange={onChange} className={className}><option value="">Select one</option>{field.options?.map((option) => <option key={option} value={option}>{option}</option>)}</select> : <input type={field.type === "url" ? "url" : "text"} value={value} onChange={onChange} maxLength={field.type === "url" ? 1000 : 255} autoComplete={field.key === "name" ? "name" : field.key === "contact" ? "email" : "off"} className={className} placeholder={field.placeholder} />}
      {error ? <span className="mt-2 block font-sans text-xs text-destructive">{error}</span> : null}
    </label>
  );
}