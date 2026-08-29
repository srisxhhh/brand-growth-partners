import svcWebsites from "@/assets/svc-websites.jpg";
import svcApps from "@/assets/svc-apps.jpg";
import svcUgc from "@/assets/svc-ugc.jpg";
import svcBranding from "@/assets/svc-branding.jpg";
import svcVideo from "@/assets/svc-video.jpg";
import svcDesign from "@/assets/svc-design.jpg";
import svcAds from "@/assets/svc-ads.jpg";

import web1 from "@/assets/steps/websites-1.jpg";
import web2 from "@/assets/steps/websites-2.jpg";
import web3 from "@/assets/steps/websites-3.jpg";
import web4 from "@/assets/steps/websites-4.jpg";
import app1 from "@/assets/steps/mobile-apps-1.jpg";
import app2 from "@/assets/steps/mobile-apps-2.jpg";
import app3 from "@/assets/steps/mobile-apps-3.jpg";
import app4 from "@/assets/steps/mobile-apps-4.jpg";
import ugc1 from "@/assets/steps/personalised-ugc-1.jpg";
import ugc2 from "@/assets/steps/personalised-ugc-2.jpg";
import ugc3 from "@/assets/steps/personalised-ugc-3.jpg";
import ugc4 from "@/assets/steps/personalised-ugc-4.jpg";
import brand1 from "@/assets/steps/founder-branding-1.jpg";
import brand2 from "@/assets/steps/founder-branding-2.jpg";
import brand3 from "@/assets/steps/founder-branding-3.jpg";
import brand4 from "@/assets/steps/founder-branding-4.jpg";
import vid1 from "@/assets/steps/video-editing-1.jpg";
import vid2 from "@/assets/steps/video-editing-2.jpg";
import vid3 from "@/assets/steps/video-editing-3.jpg";
import vid4 from "@/assets/steps/video-editing-4.jpg";
import des1 from "@/assets/steps/graphic-design-1.jpg";
import des2 from "@/assets/steps/graphic-design-2.jpg";
import des3 from "@/assets/steps/graphic-design-3.jpg";
import des4 from "@/assets/steps/graphic-design-4.jpg";
import ads1 from "@/assets/steps/meta-ads-1.jpg";
import ads2 from "@/assets/steps/meta-ads-2.jpg";
import ads3 from "@/assets/steps/meta-ads-3.jpg";
import ads4 from "@/assets/steps/meta-ads-4.jpg";

export type FaqItem = { q: string; a: string };

export type ProcessStep = { step: string; detail: string; image: string };

export type Service = {
  slug: string;
  n: string;
  title: string;
  tagline: string;
  image: string;
  intro: string;
  span: string;
  deliverables: string[];
  process: ProcessStep[];
  outcome: string;
  faq: FaqItem[];
};

export const services: Service[] = [
  {
    slug: "websites",
    image: svcWebsites,
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
      {
        step: "Direction",
        detail:
          "We interrogate the proposition before a single pixel is drawn — audience, objection, hierarchy, tone. What returns to you is a considered architecture and visual language, articulated well enough to approve in one sitting.",
        image: web1,
      },
      {
        step: "Build",
        detail:
          "Design and engineering advance in tandem, not in relay. Semantic markup, deliberate performance budgets and search fundamentals are written in from the first commit rather than retrofitted at the end.",
        image: web2,
      },
      {
        step: "Launch",
        detail:
          "Migration, DNS, certificates, redirects and analytics are orchestrated quietly on our side. You receive a link and a working site, not a checklist and a deadline.",
        image: web3,
      },
      {
        step: "Maintain",
        detail:
          "Uptime, speed and content stay under continuous supervision. Fixes, refinements and new pages ship on a standing rhythm — no briefs, no invoices for every small ask.",
        image: web4,
      },
    ],
    outcome: "A site that stays fast, accurate and online — permanently.",
    faq: [
      {
        q: "How long does a website take?",
        a:
          "Most builds go live in three to five weeks, depending on page count and how quickly approvals come back. You'll see the design direction inside the first week.",
      },
      {
        q: "Is hosting and maintenance included?",
        a:
          "Yes. Hosting, domains, SSL, uptime monitoring and ongoing content updates are all handled by us \u2014 there is no separate vendor to chase.",
      },
      {
        q: "Can you update copy or pages after launch?",
        a:
          "Send a message and it's done. Routine copy, page and image changes ship on a standing rhythm without a new brief or invoice each time.",
      },
      {
        q: "Will it work well on phones?",
        a:
          "Every build is designed mobile-first and tested across Android and iOS, so it feels the same on a phone as it does on a laptop.",
      },
    ],
  },
  {
    slug: "mobile-apps",
    image: svcApps,
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
      {
        step: "Scope",
        detail:
          "We reduce the ambition to the version that genuinely earns its keep. Every feature is weighed against effort and adoption, so the first release is deliberate rather than diluted.",
        image: app1,
      },
      {
        step: "Design",
        detail:
          "Screens arrive resolved — states, edge cases and gestures accounted for on both platforms. You review finished interface work, not wireframe homework that needs imagination to read.",
        image: app2,
      },
      {
        step: "Ship",
        detail:
          "Builds, provisioning, review submissions and store assets are handled entirely by us. We absorb the bureaucracy of Apple and Google so your launch date holds.",
        image: app3,
      },
      {
        step: "Iterate",
        detail:
          "Crash traces, retention and usage inform a standing update cadence. Improvements land on schedule and are reported in plain language every week.",
        image: app4,
      },
    ],
    outcome: "An app that ships, updates and stays healthy without you managing it.",
    faq: [
      {
        q: "Do you build for both Android and iOS?",
        a:
          "Yes. One codebase ships to both stores, so features and fixes land on Android and iOS at the same time.",
      },
      {
        q: "Do you handle the App Store and Play Store submissions?",
        a:
          "We handle store listings, review responses, screenshots and release management end to end. You only approve the final build.",
      },
      {
        q: "What happens after launch?",
        a:
          "We monitor crashes, performance and reviews, then ship updates on a regular cadence as part of the retainer.",
      },
      {
        q: "Can you take over an existing app?",
        a:
          "Usually yes. We audit the current codebase first and tell you honestly whether to continue it or rebuild.",
      },
    ],
  },
  {
    slug: "personalised-ugc",
    image: svcUgc,
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
      {
        step: "Angle",
        detail:
          "We isolate the claims, frictions and hooks worth spending money against. Each concept is written to a specific objection, so the test proves something instead of merely producing content.",
        image: ugc1,
      },
      {
        step: "Produce",
        detail:
          "Casting, scripting, shoot logistics and post are organised end to end by us. Creators are matched to your audience rather than to whoever is available.",
        image: ugc2,
      },
      {
        step: "Test",
        detail:
          "Variants go live in disciplined cohorts and are judged on cost per outcome, not on taste. Hooks, openings and formats are isolated so the winner is attributable.",
        image: ugc3,
      },
      {
        step: "Scale",
        detail:
          "Proven concepts are iterated into families of assets while fatigued ones retire quietly. Production volume is tied to what the numbers justify.",
        image: ugc4,
      },
    ],
    outcome: "A steady supply of creative that keeps acquisition costs honest.",
    faq: [
      {
        q: "Do you provide the creators?",
        a:
          "Yes. We cast, brief and direct creators who fit your category, so you never source or negotiate talent yourself.",
      },
      {
        q: "How many ad creatives do we get each month?",
        a:
          "Volume is set to your spend, but most brands run a steady batch of fresh hooks and edits every month so testing never stalls.",
      },
      {
        q: "Do you also run the ads?",
        a:
          "We can. Creative and Meta ads work together well, and most clients pair them so learnings feed straight back into the next batch.",
      },
      {
        q: "Who owns the footage?",
        a:
          "You do. All raw footage and finished cuts are yours to reuse across any channel.",
      },
    ],
  },
  {
    slug: "founder-branding",
    image: svcBranding,
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
      {
        step: "Listen",
        detail:
          "We interview you at length before a line is written — the decisions, the failures, the convictions. The material is yours; our work is to find the parts worth repeating.",
        image: brand1,
      },
      {
        step: "Shape",
        detail:
          "That raw history is distilled into a handful of durable narratives and content pillars. Everything published afterwards is a variation on themes you already believe.",
        image: brand2,
      },
      {
        step: "Publish",
        detail:
          "Drafting, filming, scheduling and posting run on a calendar we maintain. You approve in batches; nothing goes out in a voice that isn't recognisably yours.",
        image: brand3,
      },
      {
        step: "Compound",
        detail:
          "Consistency does the heavy lifting. The presence accumulates reach, inbound conversations and credibility while your attention stays on the business.",
        image: brand4,
      },
    ],
    outcome: "A public presence that sounds like you and opens doors on its own.",
    faq: [
      {
        q: "Do I have to write the posts myself?",
        a:
          "No. We shape your point of view through short interviews, then write and schedule everything. You approve before anything goes live.",
      },
      {
        q: "Will it still sound like me?",
        a:
          "That's the whole point. Voice is built from your own words and reviewed with you until posts read as though you typed them.",
      },
      {
        q: "Which platforms do you cover?",
        a:
          "Usually LinkedIn and Instagram, with X or YouTube added when your audience actually lives there.",
      },
      {
        q: "How much of my time does this take?",
        a:
          "Roughly an hour a fortnight for a recorded conversation, plus quick approvals.",
      },
    ],
  },
  {
    slug: "video-editing",
    image: svcVideo,
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
      {
        step: "Intake",
        detail:
          "Footage, audio and references are ingested, catalogued and backed up on our side. Nothing lingers half-organised in your drive waiting for a decision.",
        image: vid1,
      },
      {
        step: "Edit",
        detail:
          "The first cut arrives close to final — pacing, sound design, grade and captions already considered. You react to a finished argument, not a rough assembly.",
        image: vid2,
      },
      {
        step: "Notes",
        detail:
          "One consolidated round of your opinions, applied precisely and without negotiation. Ambiguity is resolved by us before it becomes another revision cycle.",
        image: vid3,
      },
      {
        step: "Deliver",
        detail:
          "Every ratio, platform spec and thumbnail is exported, named and filed into a library you own outright. Retrieval takes seconds, not a message to us.",
        image: vid4,
      },
    ],
    outcome: "Video that lands on time, every week, without chasing.",
    faq: [
      {
        q: "What turnaround can we expect?",
        a:
          "Standard edits return within two to three working days, with same-week turnaround on priority cuts.",
      },
      {
        q: "Do you handle subtitles and formats?",
        a:
          "Yes. Every video is delivered in the aspect ratios and caption styles each platform needs.",
      },
      {
        q: "How do we send footage?",
        a:
          "Drop raw files into a shared folder. We take it from there \u2014 no naming conventions or file wrangling required.",
      },
      {
        q: "How many revisions are included?",
        a:
          "Revisions are unlimited within the agreed direction; we'd rather get it right than count rounds.",
      },
    ],
  },
  {
    slug: "graphic-design",
    image: svcDesign,
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
      {
        step: "Audit",
        detail:
          "We examine everything currently in circulation before proposing replacements. Equity worth keeping is identified; incoherence is documented rather than assumed.",
        image: des1,
      },
      {
        step: "Direction",
        detail:
          "Two fully resolved routes, each defensible on its own terms — not twelve mood boards demanding your interpretation. You choose a direction, not a homework assignment.",
        image: des2,
      },
      {
        step: "Systemise",
        detail:
          "The chosen route becomes grids, type scales, colour rules and templates. Consistency stops depending on whoever happens to open the file next.",
        image: des3,
      },
      {
        step: "Apply",
        detail:
          "Every subsequent asset — campaign, packaging, deck, social — is produced inside that system. The brand looks deliberate at volume and at speed.",
        image: des4,
      },
    ],
    outcome: "A brand that looks deliberate on every surface it touches.",
    faq: [
      {
        q: "Do you work from an existing brand?",
        a:
          "Yes. We can extend the identity you already have, or rebuild the system if it's holding you back.",
      },
      {
        q: "What kind of assets do you cover?",
        a:
          "Ad creative, decks, packaging, social templates, print and anything else the brand touches.",
      },
      {
        q: "How fast are day-to-day requests?",
        a:
          "Most single-asset requests come back within 48 hours through a standing request queue.",
      },
      {
        q: "Do we get editable source files?",
        a:
          "Always. Source files and a documented brand system are handed over and kept current.",
      },
    ],
  },
  {
    slug: "meta-ads",
    image: svcAds,
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
      {
        step: "Diagnose",
        detail:
          "Pixel integrity, event mapping and account architecture are audited before budget moves. Scaling on broken measurement is expensive guesswork, so we fix the foundation first.",
        image: ads1,
      },
      {
        step: "Test",
        detail:
          "Creative, audiences and placements are examined in a deliberate sequence with one variable at a time. Conclusions are statistical, not anecdotal.",
        image: ads2,
      },
      {
        step: "Scale",
        detail:
          "Budget migrates steadily toward what has demonstrably proven itself. Increases are paced so learning phases aren't reset and efficiency isn't sacrificed for volume.",
        image: ads3,
      },
      {
        step: "Report",
        detail:
          "Spend, cost per acquisition and return are reviewed with you weekly in plain figures. You always know what the account cost and what it produced.",
        image: ads4,
      },
    ],
    outcome: "Spend you can explain, with a cost per customer you can plan around.",
    faq: [
      {
        q: "What ad spend do you work with?",
        a:
          "We work best with brands spending consistently each month, and we'll tell you upfront if spend is too thin for testing to be meaningful.",
      },
      {
        q: "Do you make the creative too?",
        a:
          "Yes. Creative, UGC and media buying sit under one roof, which is why testing moves faster.",
      },
      {
        q: "How is performance reported?",
        a:
          "A weekly call plus a plain-English report covering spend, cost per outcome and what changes next.",
      },
      {
        q: "How soon do results show?",
        a:
          "Early signal usually appears within two weeks; stable, planable cost per customer typically takes four to six.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
