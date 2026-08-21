export type Service = {
  slug: string;
  n: string;
  title: string;
  tagline: string;
  intro: string;
  span: string;
  deliverables: string[];
  process: { step: string; detail: string }[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "websites",
    n: "01",
    title: "Websites",
    tagline: "Designed, developed, hosted, maintained.",
    intro:
      "Your website is the first room your customer walks into. We design it, build it, put it live and keep it that way — fast, current and never your problem.",
    span: "md:col-span-2 md:row-span-1",
    deliverables: [
      "Bespoke design direction, not a template",
      "Development with performance and SEO built in",
      "Hosting, domains, SSL and uptime monitoring",
      "Ongoing copy, page and content updates",
      "Analytics and conversion tracking wired up",
    ],
    process: [
      { step: "Direction", detail: "We propose structure, tone and visual language for approval." },
      { step: "Build", detail: "Design and development run together, reviewed as it takes shape." },
      { step: "Launch", detail: "We ship, monitor and hand you nothing but the link." },
      { step: "Maintain", detail: "Updates, fixes and improvements continue without briefs." },
    ],
    outcome: "A site that stays fast, accurate and online — permanently.",
  },
  {
    slug: "mobile-apps",
    n: "02",
    title: "Mobile Apps",
    tagline: "Android and iOS, end to end.",
    intro:
      "From first screen to store listing to the update three months from now. We handle builds, releases and upkeep on both platforms the same way we handle your site.",
    span: "",
    deliverables: [
      "Product and interface design for iOS and Android",
      "Development, testing and store submission",
      "Release management and version updates",
      "Crash monitoring and performance upkeep",
      "Store listing copy and creative",
    ],
    process: [
      { step: "Scope", detail: "We define the smallest version that actually earns its keep." },
      { step: "Design", detail: "Screens and flows come to you resolved, not as wireframe homework." },
      { step: "Ship", detail: "Builds, review submissions and launch handled by us." },
      { step: "Iterate", detail: "Updates shipped on a rhythm, reported weekly." },
    ],
    outcome: "An app that ships, updates and stays healthy without you managing it.",
  },
  {
    slug: "personalised-ugc",
    n: "03",
    title: "Personalised UGC",
    tagline: "Creator-style footage built to perform.",
    intro:
      "Ads that don't look like ads. We produce creator-style footage around your actual product, shaped for the platforms and tested against real spend.",
    span: "",
    deliverables: [
      "Creator casting matched to your audience",
      "Scripting and hook variations per concept",
      "Full production and post, platform-native",
      "Multiple cuts and aspect ratios per shoot",
      "Performance read-back on what won",
    ],
    process: [
      { step: "Angle", detail: "We pick the claims and hooks worth testing first." },
      { step: "Produce", detail: "Creators, scripts and shoots organised entirely by us." },
      { step: "Test", detail: "Variants go live and get judged on numbers, not taste." },
      { step: "Scale", detail: "Winners get iterated; losers get retired quietly." },
    ],
    outcome: "A steady supply of creative that keeps acquisition costs honest.",
  },
  {
    slug: "founder-branding",
    n: "04",
    title: "Founder Branding",
    tagline: "Your story, told the way it happened.",
    intro:
      "People buy from people. We build a founder presence that reads genuine because it is — your real story, structured, filmed and published consistently.",
    span: "md:col-span-2",
    deliverables: [
      "Narrative and positioning built from interviews",
      "Content pillars and a publishing calendar",
      "Filming days and repurposing into short form",
      "Profile design across LinkedIn, Instagram and X",
      "Ghost-drafted posts in your own voice for approval",
    ],
    process: [
      { step: "Listen", detail: "We interview you properly before writing a single line." },
      { step: "Shape", detail: "Your story becomes a small set of things worth saying often." },
      { step: "Publish", detail: "Drafted, scheduled and posted after your approval." },
      { step: "Compound", detail: "The presence builds while your attention stays elsewhere." },
    ],
    outcome: "A public presence that sounds like you and opens doors on its own.",
  },
  {
    slug: "video-editing",
    n: "05",
    title: "Video Editing",
    tagline: "Ads, reels, long-form — on schedule.",
    intro:
      "Cut, graded, captioned and delivered when we said it would be. One editing pipeline for everything your brand puts out.",
    span: "",
    deliverables: [
      "Performance ad edits with hook variants",
      "Short-form reels and clips from long footage",
      "Long-form edits with grading and sound",
      "Captions, motion graphics and end cards",
      "Organised asset library you actually own",
    ],
    process: [
      { step: "Intake", detail: "Footage comes to us; nothing sits in your drive." },
      { step: "Edit", detail: "First cut arrives close, not as a rough guess." },
      { step: "Notes", detail: "One round of your opinions, applied properly." },
      { step: "Deliver", detail: "Every format and ratio exported and filed." },
    ],
    outcome: "Video that lands on time, every week, without chasing.",
  },
  {
    slug: "graphic-design",
    n: "06",
    title: "Graphic Design",
    tagline: "Systems, not one-off files.",
    intro:
      "Identity, campaign and social design that holds together everywhere it appears — because it's built as a system with rules, not as separate artwork.",
    span: "",
    deliverables: [
      "Identity work: marks, type and colour systems",
      "Campaign key visuals and adaptations",
      "Social templates for repeatable output",
      "Packaging, decks and print collateral",
      "Brand guidelines your future team can follow",
    ],
    process: [
      { step: "Audit", detail: "We look at what exists before replacing anything." },
      { step: "Direction", detail: "Two considered routes, not twelve mood boards." },
      { step: "Systemise", detail: "The chosen route becomes rules and templates." },
      { step: "Apply", detail: "Everything new gets made inside the system." },
    ],
    outcome: "A brand that looks deliberate on every surface it touches.",
  },
  {
    slug: "meta-ads",
    n: "07",
    title: "Meta Ads",
    tagline: "Structure, testing and spend, managed.",
    intro:
      "Account structure, creative testing and budget managed against your numbers — not vanity metrics. You see what it costs and what it returned.",
    span: "",
    deliverables: [
      "Account and campaign structure built properly",
      "Pixel, events and conversion tracking checked",
      "Creative testing cadence tied to production",
      "Audience, placement and budget management",
      "Weekly reporting in plain numbers",
    ],
    process: [
      { step: "Diagnose", detail: "Tracking and structure get fixed before spend scales." },
      { step: "Test", detail: "Creative and audiences tested in a disciplined order." },
      { step: "Scale", detail: "Budget moves toward what proves itself." },
      { step: "Report", detail: "Spend, CPA and return reviewed with you weekly." },
    ],
    outcome: "Spend you can explain, with a cost per customer you can plan around.",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
