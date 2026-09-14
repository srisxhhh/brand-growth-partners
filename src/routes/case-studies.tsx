import { createFileRoute, Link } from "@tanstack/react-router";
import { caseStudies } from "@/lib/projects";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Before & After | Well Handled" },
      {
        name: "description",
        content:
          "Real projects handled by Well Handled, shown as before and after: what was broken, what we changed, and what it looks like now.",
      },
      { property: "og:title", content: "Case Studies — Before & After | Well Handled" },
      {
        property: "og:description",
        content: "Before and after snapshots of brands Well Handled took over end to end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <span className="eyebrow">Case studies</span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          Before, and after we took it over
        </h1>
        <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
          Each study shows the state we inherited and the state we left it in. These are samples for
          now — real client stories replace them as approvals come through.
        </p>

        <div className="mt-12 space-y-10">
          {caseStudies.map((c) => (
            <article key={c.slug} className="border border-border bg-card p-6 sm:p-10">
              <span className="eyebrow">{c.service}</span>
              <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">{c.client}</h2>
              <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
                {c.challenge}
              </p>

              <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
                <div className="bg-background p-5 sm:p-7">
                  <span className="eyebrow">Before</span>
                  <ul className="mt-4 space-y-3">
                    {c.before.map((b) => (
                      <li key={b} className="font-sans text-sm leading-relaxed text-muted-foreground">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-foreground p-5 text-background sm:p-7">
                  <span className="eyebrow text-background/60">After</span>
                  <ul className="mt-4 space-y-3">
                    {c.after.map((a) => (
                      <li key={a} className="font-sans text-sm leading-relaxed text-background/80">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {c.quote ? (
                <p className="mt-7 max-w-2xl font-display text-xl italic leading-snug sm:text-2xl">
                  “{c.quote}”
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/portfolio"
            className="border border-foreground px-7 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background"
          >
            See the portfolio
          </Link>
          <Link
            to="/"
            hash="contact"
            className="bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background"
          >
            Start a conversation
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
