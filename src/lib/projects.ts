/**
 * Placeholder project records. Replace the copy with real client work —
 * the page layouts stay the same.
 */
export type Project = {
  slug: string;
  client: string;
  service: string;
  year: string;
  summary: string;
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "sample-dtc-skincare",
    client: "Sample Client — DTC Skincare",
    service: "Tech + Meta Ads",
    year: "2025",
    summary:
      "Placeholder entry. A direct-to-consumer skincare label handed over its storefront, hosting and paid media to one team.",
    results: ["Site rebuilt and hosted", "Weekly ad reporting", "Creative refreshed monthly"],
  },
  {
    slug: "sample-fitness-app",
    client: "Sample Client — Fitness App",
    service: "Tech",
    year: "2025",
    summary:
      "Placeholder entry. A mobile app shipped to both stores, then maintained and updated on a fixed cadence.",
    results: ["Android and iOS release", "Ongoing maintenance", "Founder freed from vendor calls"],
  },
  {
    slug: "sample-founder-brand",
    client: "Sample Client — Founder Brand",
    service: "Personal & Commercial Branding",
    year: "2024",
    summary:
      "Placeholder entry. A founder's story turned into a consistent publishing rhythm across short form and long form.",
    results: ["Narrative and positioning", "Monthly content slate", "Inbound enquiries from content"],
  },
  {
    slug: "sample-food-brand",
    client: "Sample Client — Food Brand",
    service: "Personalised UGC",
    year: "2024",
    summary:
      "Placeholder entry. Creator-led ads produced end to end, from brief and casting through to final approval.",
    results: ["Creator roster built", "Scripts and edits handled", "Ad-ready library each month"],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  service: string;
  challenge: string;
  before: string[];
  after: string[];
  quote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sample-storefront-rebuild",
    client: "Sample Client — Storefront Rebuild",
    service: "Tech",
    challenge:
      "Placeholder case study. The site was slow, hard to update, and split across three freelancers.",
    before: [
      "Pages took seconds to load on phones",
      "Every change needed a freelancer",
      "No reporting on what was working",
    ],
    after: [
      "Fast, single codebase we host and maintain",
      "Changes shipped the same week",
      "A weekly summary of what shipped and what is next",
    ],
    quote: "Replace this with a real client line.",
  },
  {
    slug: "sample-ad-account-reset",
    client: "Sample Client — Ad Account Reset",
    service: "Meta Ads",
    challenge:
      "Placeholder case study. Spend was rising while the creative stayed the same for months.",
    before: ["One creative running for months", "No testing rhythm", "Unclear reporting"],
    after: [
      "Fresh creator-led creative every cycle",
      "A structured testing plan",
      "Plain-language weekly numbers",
    ],
  },
  {
    slug: "sample-founder-presence",
    client: "Sample Client — Founder Presence",
    service: "Personal & Commercial Branding",
    challenge:
      "Placeholder case study. The founder had a strong story but posted rarely and inconsistently.",
    before: ["Occasional posts", "No consistent look", "Story told differently every time"],
    after: ["A steady publishing rhythm", "One recognisable look", "One clear story, repeated well"],
  },
];
