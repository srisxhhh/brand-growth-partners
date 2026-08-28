import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { serviceBySlug, services } from "@/lib/services";
import { Reveal, RevealGroup, RisingText, fadeUp, pageTransition } from "@/components/reveal";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — Well Handled" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} — Well Handled`;
    const description = `${service.tagline} ${service.intro}`.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicePage,
});

function ServiceNotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-4xl tracking-tight">We don't handle that one</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        That service page doesn't exist. Here's everything we do.
      </p>
      <Link
        to="/"
        className="mt-8 border border-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
      >
        Back to services
      </Link>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="font-display text-xl tracking-tight sm:text-2xl">
          Well Handled
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/founder"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Founder
          </Link>
          <Link
            to="/"
            hash="contact"
            className="border border-foreground px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background"
          >
            Enquire
          </Link>
        </div>
      </div>
    </header>
  );
}

function ServicePage() {
  const { service } = Route.useLoaderData();
  const index = services.findIndex((s) => s.slug === service.slug);
  const next = services[(index + 1) % services.length] ?? services[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <motion.main initial={pageTransition.initial} animate={pageTransition.animate}>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-14 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Link
              to="/"
              hash="services"
              className="eyebrow transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <span className="h-px w-8 bg-border" />
            <span className="eyebrow">{service.n}</span>
          </motion.div>

          <h1 className="mt-6 max-w-4xl font-display text-[2.5rem] leading-[1.03] tracking-tight sm:text-7xl">
            <RisingText text={service.title} delay={0.1} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-2xl font-display text-2xl italic leading-snug text-muted-foreground sm:text-3xl"
          >
            {service.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {service.intro}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="mt-12 h-px w-full bg-border"
          />
        </section>

        {/* What you get */}
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <h2 className="font-display text-3xl font-medium italic leading-[1.1] tracking-tight sm:text-4xl">
                What you get
              </h2>

            </Reveal>
            <RevealGroup>
              {service.deliverables.map((d) => (
                <motion.div
                  key={d}
                  variants={fadeUp}
                  className="group flex gap-5 border-t border-border py-5 first:border-t-0"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-150" />
                  <p className="text-base leading-relaxed">{d}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* How it runs */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">How it runs</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                You give opinions and approvals. Everything between those two moments is ours.
              </p>
            </Reveal>

            <RevealGroup className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
              {service.process.map((p, i) => (
                <motion.article key={p.step} variants={fadeUp} className="bento-cell group">
                  <div className="flex items-start gap-5">
                    <span className="block h-20 w-20 shrink-0 overflow-hidden border border-border sm:h-24 sm:w-24">
                      <img
                        src={p.image}
                        alt={`${p.step} — ${service.title}`}
                        loading="lazy"
                        width={640}
                        height={640}
                        className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                      />
                    </span>
                    <div>
                      <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 font-display text-3xl font-medium italic tracking-tight">
                        {p.step}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground">
                    {p.detail}
                  </p>
                </motion.article>
              ))}
            </RevealGroup>


            <Reveal className="mt-px" delay={0.1}>
              <div className="border border-border border-t-0 bg-foreground p-7 text-background sm:p-10">
                <span className="eyebrow text-background/60">The outcome</span>
                <p className="mt-4 max-w-2xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                  {service.outcome}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA + next */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal className="text-center">
              <p className="eyebrow">Ready when you are</p>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl">
                Hand {service.title.toLowerCase()} over.
              </h2>
              <a
                href="mailto:hello@wellhandled.co"
                className="mt-9 inline-block border border-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
              >
                hello@wellhandled.co
              </a>
            </Reveal>

            <Reveal className="mt-16">
              <Link
                to="/services/$slug"
                params={{ slug: next.slug }}
                className="group block border border-border bg-card p-7 transition-colors hover:bg-secondary sm:p-10"
              >
                <span className="eyebrow">Next service</span>
                <div className="mt-4 flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-3xl tracking-tight sm:text-5xl">
                    {next.title}
                  </h3>
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                    &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      </motion.main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Link to="/" className="font-display text-base tracking-tight text-foreground">
            Well Handled
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
