import svcTech from "@/assets/svc-websites.jpg";
import svcUgc from "@/assets/svc-ugc.jpg";
import svcBranding from "@/assets/svc-branding.jpg";
import svcDesign from "@/assets/svc-design.jpg";
import svcAds from "@/assets/svc-ads.jpg";

import web1 from "@/assets/steps/websites-1.jpg";
import web2 from "@/assets/steps/websites-2.jpg";
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
    slug: "tech",
    image: svcTech,
    n: "01",
    title: "TECH",
    tagline: "Websites and apps, built and managed as one system.",
    intro: "From the first browser tab to the app in your customer's hand, we design, engineer, launch, host and maintain the entire digital product. One team owns the experience across web, Android and iOS.",
    span: "md:col-span-2",
    deliverables: [
      "Web strategy, UX and bespoke interface design",
      "Website and mobile app development",
      "Android and iOS testing and store submission",
      "Hosting, domains, SSL and uptime monitoring",
      "Ongoing releases, content changes and performance upkeep",
    ],
    process: [
      { step: "Architect", detail: "We interrogate the proposition, user journeys and commercial priorities before a single screen is composed. The result is a coherent product architecture built around what customers need to do, not a collection of fashionable features.", image: web1 },
      { step: "Design", detail: "Web and mobile interfaces are resolved as one visual system, with every state, breakpoint and interaction considered. You approve an experience that already feels tangible rather than trying to imagine it from skeletal wireframes.", image: web2 },
      { step: "Engineer", detail: "Performance, accessibility, analytics and search fundamentals are built into the product from the beginning. The same engineering discipline follows every screen across browsers, Android and iOS.", image: app3 },
      { step: "Operate", detail: "We orchestrate hosting, domains, certificates, store submissions and releases without handing you an operational checklist. After launch, monitoring and regular improvements keep the whole system fast, secure and current.", image: app4 },
    ],
    outcome: "One digital system that launches cleanly and stays healthy without becoming your second job.",
    faq: [
      { q: "Can you handle both our website and mobile app?", a: "Yes. TECH combines both under one product team, so identity, data, releases and customer journeys remain consistent across every screen." },
      { q: "Do you manage hosting and app-store releases?", a: "Yes. Hosting, domains, certificates, Apple and Google submissions, review responses and release management are handled end to end." },
      { q: "Can you take over an existing product?", a: "Usually. We first audit the current design, code and infrastructure, then recommend whether to improve, restructure or rebuild it." },
      { q: "What happens after launch?", a: "We monitor performance, crashes and uptime, ship updates, and cover progress in your weekly update and feedback call." },
    ],
  },
  {
    slug: "personalised-ugc",
    image: svcUgc,
    n: "02",
    title: "Personalised UGC",
    tagline: "Creator-led advertising shaped around your actual customer.",
    intro: "We turn the right commercial angle into credible creator content, then manage every handoff from brief to approved final cut. You review the decisions; we handle the production machinery.",
    span: "",
    deliverables: ["Campaign brief and performance angles", "Creator discovery, screening and coordination", "Scripts, hooks and platform-native variations", "Raw-footage editing and multiple aspect ratios", "Final approval workflow and organised delivery"],
    process: [
      { step: "Taking the brief", detail: "We excavate the real commercial objective, audience tension and product proof behind the request. The brief becomes a decisive creative mandate rather than a loose collection of references.", image: ugc1 },
      { step: "Finding creators", detail: "Creators are sourced for audience resonance, delivery and category credibility—not follower count alone. We shortlist, negotiate and coordinate the right voices while you retain final visibility.", image: ugc2 },
      { step: "Confirming the script", detail: "Hooks, claims and narrative beats are refined into scripts that sound native in a creator's voice. Nothing enters production until the message, compliance and performance intent are aligned.", image: ugc3 },
      { step: "Editing the raw files", detail: "Raw footage becomes deliberate, high-retention advertising through pacing, captions, sound and visual emphasis. Multiple openings and formats create genuinely useful testing variables.", image: ugc4 },
      { step: "Final approval", detail: "Polished cuts arrive organised by concept, platform and ratio for one focused review. Your final opinion is applied precisely, then every approved asset is packaged for immediate launch.", image: svcUgc },
    ],
    outcome: "A repeatable creator pipeline that produces credible ads without consuming your calendar.",
    faq: [
      { q: "Do you find and manage the creators?", a: "Yes. We source, screen, brief, negotiate with and coordinate creators suited to your audience and category." },
      { q: "Do we approve scripts before filming?", a: "Always. Scripts and hooks are confirmed with you before production, and final edits return for approval before launch." },
      { q: "Who owns the footage?", a: "You do. Approved cuts and the agreed raw footage are organised for your future use across channels." },
      { q: "Can you produce multiple ad variations?", a: "Yes. We create structured hook, opening and format variations so media testing can reveal what actually performs." },
    ],
  },
  {
    slug: "personal-commercial-branding",
    image: svcBranding,
    n: "03",
    title: "Personal & Commercial Branding",
    tagline: "Scroll-stopping ideas before production starts.",
    intro: "The biggest value is not simply producing more content. It is knowing what should be created in the first place. We develop the positioning, concepts and ads that make both founders and businesses impossible to scroll past.",
    span: "md:col-span-2",
    deliverables: ["Founder and commercial positioning", "Scroll-stopping campaign concepts and ad angles", "Narrative systems grounded in real stories", "Content pillars, scripts and publishing direction", "Campaign, social and identity applications"],
    process: [
      { step: "Discover", detail: "We listen for the convictions, customer truths and overlooked tensions that competitors cannot credibly imitate. This gives the brand an intellectual territory of its own before visual production begins.", image: brand1 },
      { step: "Position", detail: "Personal credibility and commercial ambition are distilled into a precise narrative system. Every idea can then reinforce the same memorable point of view without becoming repetitive.", image: brand2 },
      { step: "Concept", detail: "We devise arresting ads, formats and story angles engineered to interrupt passive scrolling. The objective is not decoration; it is earning attention with an idea strong enough to deserve it.", image: brand3 },
      { step: "Activate", detail: "Approved concepts become campaigns, founder content and repeatable brand assets across the right channels. We manage the production cadence while performance and audience response sharpen what comes next.", image: brand4 },
    ],
    outcome: "A brand that knows what to say, why it matters and how to stop the scroll.",
    faq: [
      { q: "Is this only for founder-led content?", a: "No. We connect the founder's credibility with the commercial brand, then create distinct formats for each where that separation is useful." },
      { q: "Do you make the ads as well as the strategy?", a: "Yes. We originate the positioning and concepts, then carry approved ideas through scripting, design, editing and delivery." },
      { q: "Will the founder content still feel genuine?", a: "Yes. The voice comes from interviews and your real decisions, language and experiences—not borrowed internet opinions." },
      { q: "Which channels do you cover?", a: "We select channels around the audience and objective, commonly spanning Instagram, LinkedIn, Meta campaigns, YouTube and X." },
    ],
  },
  {
    slug: "design-editing",
    image: svcDesign,
    n: "04",
    title: "DESIGN & EDITING",
    tagline: "Every frame and format, held to one visual standard.",
    intro: "Graphic design and video editing belong in the same visual system. We turn campaigns, raw footage and daily requests into a consistent stream of polished work built for the channel where it will live.",
    span: "",
    deliverables: ["Campaign and social graphic design", "Performance ad and short-form video edits", "Long-form editing, grading, sound and captions", "Templates, decks, print and motion graphics", "Organised source files and brand asset library"],
    process: [
      { step: "Ingest", detail: "Raw footage, brand files, references and campaign requirements are catalogued into one dependable production system. Nothing remains stranded in a drive waiting for somebody to make sense of it.", image: vid1 },
      { step: "Direct", detail: "We establish the visual hierarchy, pacing and format logic before production expands. This keeps a deck, reel, ad and campaign key visual recognisably part of the same brand.", image: vid2 },
      { step: "Craft", detail: "Editing and design advance together through typography, composition, sound, grade and motion. Each asset is finished for its actual context rather than mechanically resized at the end.", image: des3 },
      { step: "Deliver", detail: "Approved work is exported to every required ratio and specification, then named and filed into an asset library you own. Retrieval and reuse stay effortless as output grows.", image: des4 },
    ],
    outcome: "A continuous creative output that looks considered, coherent and ready to publish.",
    faq: [
      { q: "What types of design and editing do you cover?", a: "We cover ads, social content, reels, long-form video, decks, campaign visuals, packaging, print and the supporting templates around them." },
      { q: "Can you work within our existing brand?", a: "Yes. We can extend a strong existing system or tighten it first when inconsistency is slowing production down." },
      { q: "What turnaround can we expect?", a: "Most focused day-to-day requests return within two to three working days, with larger campaigns scheduled transparently." },
      { q: "Do we receive editable source files?", a: "Always. Final exports and organised working files remain yours and are kept current throughout the engagement." },
    ],
  },
  {
    slug: "meta-ads",
    image: svcAds,
    n: "05",
    title: "Meta Ads",
    tagline: "Structure, creative testing and spend, managed.",
    intro: "We manage account architecture, creative testing and budget against commercial outcomes—not vanity metrics. You see what was spent, what it returned and what we are changing next.",
    span: "",
    deliverables: ["Account and campaign structure", "Pixel, events and conversion tracking", "Creative testing cadence tied to production", "Audience, placement and budget management", "Weekly reporting in plain numbers"],
    process: [
      { step: "Diagnose", detail: "Pixel integrity, event mapping and account architecture are audited before budget moves. Scaling on broken measurement is expensive guesswork, so we correct the foundation first.", image: ads1 },
      { step: "Test", detail: "Creative, audiences and placements are examined in a deliberate sequence with controlled variables. Conclusions come from attributable signal rather than instinct dressed up as strategy.", image: ads2 },
      { step: "Scale", detail: "Budget migrates steadily toward what has demonstrably proven itself. Increases are paced to preserve learning and protect efficiency as volume grows.", image: ads3 },
      { step: "Report", detail: "Spend, acquisition cost and return are reviewed with you every week in plain figures. You always know what changed, what it cost and what happens next.", image: ads4 },
    ],
    outcome: "Spend you can explain, with a cost per customer you can plan around.",
    faq: [
      { q: "What ad spend do you work with?", a: "We work best with brands spending consistently each month, and will say plainly when a budget is too thin for meaningful testing." },
      { q: "Do you make the creative too?", a: "Yes. UGC, branding, design and editing sit alongside media buying, allowing account learnings to shape the next creative quickly." },
      { q: "How is performance reported?", a: "A weekly call and concise report cover spend, cost per outcome, creative findings and the decisions being made next." },
      { q: "How soon do results show?", a: "Early signal often appears within two weeks, while stable and planable acquisition performance usually needs a longer testing window." },
    ],
  },
];

const legacySlugs: Record<string, string> = {
  websites: "tech",
  "mobile-apps": "tech",
  "founder-branding": "personal-commercial-branding",
  "video-editing": "design-editing",
  "graphic-design": "design-editing",
};

export const canonicalServiceSlug = (slug: string) => legacySlugs[slug] ?? slug;
export const serviceBySlug = (slug: string) =>
  services.find((service) => service.slug === canonicalServiceSlug(slug));
