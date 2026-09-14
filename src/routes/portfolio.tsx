import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Work Well Handled" },
      {
        name: "description",
        content:
          "Selected work from Well Handled: websites and apps, creator-led ads, founder branding and paid media, run end to end.",
      },
      { property: "og:title", content: "Portfolio — Work Well Handled" },
      {
        property: "og:description",
        content: "Selected projects Well Handled has built, produced and maintained for brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <span className="eyebrow">Portfolio</span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          Work we've handled
        </h1>
        <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
          A selection of projects run end to end. These entries are samples for now — real client
          work replaces them as it clears approval.
        </p>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.slug} className="bg-card p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow">{p.service}</span>
                <span className="eyebrow">{p.year}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">{p.client}</h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <ul className="mt-5 space-y-2">
                {p.results.map((r) => (
                  <li key={r} className="flex gap-3 font-sans text-sm">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    {r}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/case-studies"
            className="border border-foreground px-7 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background"
          >
            See case studies
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
