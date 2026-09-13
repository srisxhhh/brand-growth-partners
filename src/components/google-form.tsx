import { GOOGLE_FORM_EMBED_URL } from "@/lib/site";

/** Embeds the enquiry Google Form once its link is set in src/lib/site.ts. */
export function GoogleFormEmbed({ title = "Enquiry form" }: { title?: string }) {
  if (!GOOGLE_FORM_EMBED_URL) {
    return (
      <div className="border border-dashed border-border bg-card p-7 text-center sm:p-10">
        <span className="eyebrow">Enquiry form</span>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
          The Google Form will appear here as soon as its link is added. Until then, the form above
          and WhatsApp both reach us.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border bg-card p-2 sm:p-4">
      <iframe
        src={GOOGLE_FORM_EMBED_URL}
        title={title}
        loading="lazy"
        className="h-[900px] w-full border-0"
      >
        Loading…
      </iframe>
    </div>
  );
}
