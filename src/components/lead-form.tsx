import { useRef, useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { checkRateLimit, recordSubmission, MIN_FILL_MS } from "@/lib/anti-spam";
import { trackLeadSubmit, trackSpamBlocked, trackWhatsAppClick } from "@/lib/analytics";

const WHATSAPP_NUMBER = "919511202129";

const leadSchema = z.object({
  name: z.string().trim().min(1, { message: "Please add your name" }).max(100, {
    message: "Name must be under 100 characters",
  }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255, { message: "Email must be under 255 characters" }),
  notes: z
    .string()
    .trim()
    .max(1000, { message: "Notes must be under 1000 characters" })
    .optional()
    .or(z.literal("")),
});

type Errors = Partial<Record<"name" | "email" | "notes", string>>;

export function LeadForm({ serviceTitle }: { serviceTitle: string }) {
  const [values, setValues] = useState({ name: "", email: "", notes: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [blocked, setBlocked] = useState<string | null>(null);
  const honeypot = useRef("");
  const mountedAt = useRef(Date.now());
  const lastLink = useRef<string>("");

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBlocked(null);

    // Honeypot: only bots fill a hidden field.
    if (honeypot.current.trim() !== "") {
      trackSpamBlocked(serviceTitle, "honeypot");
      setSent(true); // silent success for bots
      return;
    }

    // Too fast to be human.
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

    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const { name, email, notes } = parsed.data;
    const message = [
      `New enquiry — ${serviceTitle}`,
      `Name: ${name}`,
      `Email: ${email}`,
      notes ? `Notes: ${notes}` : "Notes: —",
    ].join("\n");
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    lastLink.current = link;

    recordSubmission();
    trackLeadSubmit(serviceTitle);
    trackWhatsAppClick(serviceTitle, "lead_form");

    window.open(link, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field =
    "mt-2 w-full border border-border bg-background px-4 py-3 font-sans text-sm outline-none transition-colors focus:border-foreground";

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border border-border bg-card p-7 text-center sm:p-12"
      >
        <span className="eyebrow">Enquiry sent</span>
        <h3 className="mt-4 font-display text-3xl font-medium italic tracking-tight sm:text-4xl">
          Thank you — it's with us now.
        </h3>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
          Your brief for {serviceTitle} has been handed to our WhatsApp. We reply the same working
          day — usually within a couple of hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {lastLink.current ? (
            <a
              href={lastLink.current}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(serviceTitle, "thank_you_reopen")}
              className="inline-flex items-center justify-center bg-agree px-8 py-4 text-xs uppercase tracking-[0.2em] text-agree-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Open WhatsApp again
            </a>
          ) : null}
          <button
            type="button"
            onClick={() => {
              setValues({ name: "", email: "", notes: "" });
              honeypot.current = "";
              mountedAt.current = Date.now();
              setSent(false);
            }}
            className="inline-flex items-center justify-center border border-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
          >
            Send another brief
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border border-border bg-card p-7 sm:p-10"
      noValidate
    >
      <span className="eyebrow">Tell us what you need</span>
      <h3 className="mt-3 font-display text-3xl font-medium italic tracking-tight sm:text-4xl">
        Send a brief for {serviceTitle}
      </h3>
      <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
        Fill this in and it lands straight in our WhatsApp. We reply the same working day.
      </p>

      {/* Honeypot — hidden from humans, irresistible to bots */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Company website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            onChange={(e) => {
              honeypot.current = e.target.value;
            }}
          />
        </label>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input
            type="text"
            value={values.name}
            onChange={set("name")}
            maxLength={100}
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
          {errors.name ? (
            <span className="mt-2 block font-sans text-xs text-destructive">{errors.name}</span>
          ) : null}
        </label>

        <label className="block">
          <span className="eyebrow">Email</span>
          <input
            type="email"
            value={values.email}
            onChange={set("email")}
            maxLength={255}
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
          />
          {errors.email ? (
            <span className="mt-2 block font-sans text-xs text-destructive">{errors.email}</span>
          ) : null}
        </label>
      </div>

      <label className="mt-6 block">
        <span className="eyebrow">Notes</span>
        <textarea
          value={values.notes}
          onChange={set("notes")}
          maxLength={1000}
          rows={4}
          className={`${field} resize-y`}
          placeholder={`What do you want handled with ${serviceTitle.toLowerCase()}?`}
        />
        {errors.notes ? (
          <span className="mt-2 block font-sans text-xs text-destructive">{errors.notes}</span>
        ) : null}
      </label>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-agree px-8 py-4 text-xs uppercase tracking-[0.2em] text-agree-foreground transition-transform duration-300 hover:-translate-y-0.5"
        >
          Send to WhatsApp
        </button>
        {blocked ? (
          <span className="font-sans text-sm text-destructive" role="status">
            {blocked}
          </span>
        ) : null}
      </div>
    </motion.form>
  );
}
