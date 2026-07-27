/**
 * Live business hours from the Yes Crew CRM.
 *
 * Source of truth: provider_availability, edited by the provider in their
 * portal (Availability page). Rendered via <HoursLines/> and hoursToSchema().
 * FALLBACK_HOURS (last known hours) render only if the API is unreachable,
 * so the site never shows an empty hours section.
 */

const HOURS_API = "https://yescrew-dashboard.vercel.app/api/hours";

export const SITE_DOMAIN = "venturabarber.com";

export interface HoursWindow {
  day: number; // 0=Sunday ... 6=Saturday
  opens: string; // "HH:MM" 24h
  closes: string;
}

export const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const FALLBACK_HOURS: HoursWindow[] = [
  { day: 0, opens: "10:00", closes: "18:00" },
  { day: 1, opens: "10:00", closes: "18:00" },
  { day: 2, opens: "10:00", closes: "18:00" },
  { day: 3, opens: "10:00", closes: "18:00" },
  { day: 4, opens: "10:00", closes: "18:00" },
  { day: 5, opens: "10:00", closes: "18:00" },
  { day: 6, opens: "10:00", closes: "18:00" },
];

export async function getHours(siteDomain: string = SITE_DOMAIN): Promise<HoursWindow[]> {
  try {
    const res = await fetch(`${HOURS_API}?site=${encodeURIComponent(siteDomain)}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return FALLBACK_HOURS;
    const data = await res.json();
    if (!Array.isArray(data.hours) || data.hours.length === 0) return FALLBACK_HOURS;
    return data.hours as HoursWindow[];
  } catch {
    return FALLBACK_HOURS;
  }
}

/** "10:30" -> "10:30am", "18:00" -> "6pm" */
export function formatTime(t: string): string {
  const [hStr, mStr] = t.split(":");
  let h = Number(hStr);
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12;
  if (h === 0) h = 12;
  return mStr === "00" ? `${h}${ampm}` : `${h}:${mStr}${ampm}`;
}

export interface HoursLine {
  label: string;
  value: string; // "10:30am – 6pm" | "Closed"
}

/** Group consecutive days (Monday-first) sharing identical hours. */
export function hoursToLines(hours: HoursWindow[]): HoursLine[] {
  const byDay = new Map<number, string>();
  for (const w of hours) {
    const s = `${formatTime(w.opens)} – ${formatTime(w.closes)}`;
    byDay.set(w.day, byDay.has(w.day) ? `${byDay.get(w.day)}, ${s}` : s);
  }
  const order = [1, 2, 3, 4, 5, 6, 0];
  const lines: HoursLine[] = [];
  let run: number[] = [];
  let runValue: string | null = null;

  const flush = () => {
    if (run.length === 0 || runValue === null) return;
    const label =
      run.length === 1
        ? DAY_NAMES[run[0]]
        : `${DAY_NAMES[run[0]]} – ${DAY_NAMES[run[run.length - 1]]}`;
    lines.push({ label, value: runValue });
    run = [];
    runValue = null;
  };

  for (const day of order) {
    const value = byDay.get(day) ?? "Closed";
    if (value === runValue) {
      run.push(day);
    } else {
      flush();
      run = [day];
      runValue = value;
    }
  }
  flush();
  return lines;
}

/** schema.org OpeningHoursSpecification array for LocalBusiness JSON-LD. */
export function hoursToSchema(hours: HoursWindow[]): object[] {
  const byWindow = new Map<string, number[]>();
  for (const w of hours) {
    const key = `${w.opens}|${w.closes}`;
    const list = byWindow.get(key) ?? [];
    list.push(w.day);
    byWindow.set(key, list);
  }
  return Array.from(byWindow.entries()).map(([key, days]) => {
    const [opens, closes] = key.split("|");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days.sort().map((d) => DAY_NAMES[d]),
      opens,
      closes,
    };
  });
}
