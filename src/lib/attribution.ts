const KEY = "wh_attribution";

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  landing_page?: string;
  first_seen?: string;
};

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

function read(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

/** Records first-touch campaign data. Call once per page load. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const existing = read();
  const params = new URLSearchParams(window.location.search);
  const fresh: Attribution = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) fresh[key] = value.slice(0, 200);
  }

  const hasFresh = Object.keys(fresh).length > 0;
  if (!hasFresh && existing.first_seen) return existing;

  const referrer =
    typeof document !== "undefined" && document.referrer && !document.referrer.includes(window.location.host)
      ? document.referrer
      : existing.referrer;

  const next: Attribution = {
    ...existing,
    ...fresh,
    referrer: referrer || "direct",
    landing_page: existing.landing_page ?? window.location.pathname,
    first_seen: existing.first_seen ?? new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  return next;
}

export function getAttribution(): Attribution {
  const stored = read();
  return Object.keys(stored).length ? stored : captureAttribution();
}

/** Compact single-line summary for WhatsApp messages. */
export function attributionSummary(a: Attribution): string {
  const parts = [
    a.utm_source && `source: ${a.utm_source}`,
    a.utm_medium && `medium: ${a.utm_medium}`,
    a.utm_campaign && `campaign: ${a.utm_campaign}`,
    a.utm_content && `content: ${a.utm_content}`,
    a.utm_term && `term: ${a.utm_term}`,
    a.gclid && `gclid: ${a.gclid}`,
    a.fbclid && `fbclid: ${a.fbclid}`,
    a.referrer && `referrer: ${a.referrer}`,
    a.landing_page && `landing: ${a.landing_page}`,
  ].filter(Boolean);
  return parts.length ? parts.join(" | ") : "direct visit";
}
