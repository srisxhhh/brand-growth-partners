import { createFileRoute } from "@tanstack/react-router";
import heroDesk from "@/assets/hero-desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Well Handled — Everything Behind Your Brand, Handled" },
      {
        name: "description",
        content:
          "Well Handled manages websites, apps, UGC ads, personal branding, video, design and Meta ads for founders. You approve, we execute.",
      },
      { property: "og:title", content: "Well Handled — Everything Behind Your Brand, Handled" },
      {
        property: "og:description",
        content:
          "A management firm for businesses and ventures. Websites, apps, content, ads and founder branding — run end to end.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Websites",
    body: "Designed, developed, hosted and maintained. Your site stays fast, current and online — permanently.",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    n: "02",
    title: "Mobile Apps",
    body: "Android and iOS builds, releases and upkeep handled the same way.",
    span: "",
  },
  {
    n: "03",
    title: "Personalised UGC",
    body: "Creator-style ad footage produced around your product and shaped for performance marketing.",
    span: "",
  },
  {
    n: "04",
    title: "Founder Branding",
    body: "Your story, told the way it actually happened — a presence that reads genuine because it is.",
    span: "md:col-span-2",
  },
  {
    n: "05",
    title: "Video Editing",
    body: "Ads, reels, long-form. Cut, graded and delivered on schedule.",
    span: "",
  },
  {
    n: "06",
    title: "Graphic Design",
    body: "Identity, campaign and social systems that hold together everywhere.",
    span: "",
  },
  {
    n: "07",
    title: "Meta Ads",
    body: "Structure, creative testing and spend managed against your numbers.",
    span: "",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="font-display text-xl tracking-tight sm:text-2xl">
            Well Handled
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/founder"
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Founder
            </Link>
            <a
              href="#contact"
              className="border border-foreground px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background"
            >
              Enquire
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
          <p className="eyebrow">Management firm for businesses &amp; ventures</p>
          <h1 className="mt-6 max-w-4xl font-display text-[2.75rem] leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            Everything behind your brand,{" "}
            <em className="italic text-muted-foreground">well handled.</em>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We run the websites, apps, content, ads and founder presence for the businesses we
            work with. You stay on the business itself — and give your opinion and approval.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              Start a conversation
            </a>
          </div>

          <img
            src={heroDesk}
            alt="Founder's desk with paper and pen, styled in black and white"
            width={1408}
            height={1008}
            className="mt-14 w-full border border-border object-cover sm:mt-20"
          />
        </section>

        {/* Bento services */}
        <section id="services" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">What we handle</h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                One firm across every surface your brand touches, so nothing gets briefed twice.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
              {services.map((s) => (
                <article key={s.n} className={`bento-cell ${s.span}`}>
                  <span className="eyebrow">{s.n}</span>
                  <h3 className="mt-5 font-display text-2xl tracking-tight sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              ))}
              <article className="bento-cell flex flex-col justify-between bg-foreground text-background">
                <span className="eyebrow text-background/60">Included</span>
                <div className="mt-8">
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                    Weekly update &amp; feedback calls
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/70">
                    Every week, a clear picture of what shipped, what's next and what we need from
                    you.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* The arrangement */}
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[1fr_1.1fr]">
            <h2 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              You don't manage any of it
            </h2>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                No vendor list, no freelancer chasing, no production calendar to hold in your head.
                We plan, produce, publish and maintain. Your part is judgement: opinion and
                approval.
              </p>
              <dl className="mt-10">
                {[
                  ["We propose", "Direction, scope and creative come to you already thought through."],
                  ["You approve", "One decision from you, not a project to run."],
                  ["We execute", "Built, shipped, hosted, maintained and reported on weekly."],
                ].map(([t, d]) => (
                  <div key={t} className="border-t border-border py-5 sm:flex sm:gap-8">
                    <dt className="font-display text-xl tracking-tight sm:w-40 sm:shrink-0">
                      {t}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground sm:mt-1.5">
                      {d}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
            <p className="eyebrow">Now taking a small number of brands</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              Tell us what you're building.
            </h2>
            <a
              href="mailto:hello@wellhandled.co"
              className="mt-10 inline-block border border-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
            >
              hello@wellhandled.co
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
