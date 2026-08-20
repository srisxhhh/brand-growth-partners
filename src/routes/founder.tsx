import { createFileRoute, Link } from "@tanstack/react-router";
import srishAsset from "@/assets/srish.jpeg.asset.json";

const WHATSAPP_NUMBER = "9511202129";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I came across Well Handled and would like to discuss working with you."
);

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — Well Handled" },
      {
        name: "description",
        content:
          "Meet the founder behind Well Handled. Get in touch directly via WhatsApp.",
      },
      { property: "og:title", content: "Founder — Well Handled" },
      {
        property: "og:description",
        content:
          "Meet the founder behind Well Handled. Get in touch directly via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Founder,
});

function Founder() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="font-display text-xl tracking-tight sm:text-2xl">
            Well Handled
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background"
            >
              Message
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_1.25fr] md:items-start md:gap-16">
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden border border-border bg-muted">
                <img
                  src={srishAsset.url}
                  alt="Founder of Well Handled"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow">Founder</p>
              <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                Srish
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Founder & Managing Partner
              </p>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  I started Well Handled because most founders I knew were buried
                  in production calendars, vendor messages and small decisions that
                  pulled them away from the business itself.
                </p>
                <p>
                  Our model is simple: we act as the in-house execution layer for the
                  brands we work with. Websites, apps, content, design, paid ads and
                  founder branding — planned, produced and maintained by one team.
                </p>
                <p>
                  You stay focused on the direction and the big calls. We bring you
                  the work, you give your opinion and approval, and we ship it.
                  Every week, you get a clear picture of what happened, what is next
                  and what we need from you.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  WhatsApp +91 95112 02129
                </a>
                <a
                  href="mailto:hello@wellhandled.co"
                  className="inline-flex items-center justify-center border border-foreground px-7 py-3.5 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
                >
                  hello@wellhandled.co
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl">
              One point of contact, one clear cadence.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "We propose",
                  body: "Direction, scope and creative come to you already thought through.",
                },
                {
                  title: "You approve",
                  body: "One decision from you, not a project to run. We only move after your go-ahead.",
                },
                {
                  title: "We execute",
                  body: "Built, shipped, hosted, maintained and reported on every week.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-border p-6">
                  <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
            <p className="eyebrow">Ready to talk?</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              Message me directly on WhatsApp.
            </h2>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              Start a WhatsApp chat
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="font-display text-base tracking-tight text-foreground">
            Well Handled
          </span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
