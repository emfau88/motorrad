import type { Event } from "../types/content";

export const events: Event[] = [
  {
    slug: "50-jahre-omf",
    title: "50 Jahre OMF",
    startDate: "2026-10-17",
    endDate: "2026-10-18",
    location: "Merkurhalle Ottenau",
    description:
      "2026 feiern die Ottenauer Motorradfreunde ihr 50-jähriges Bestehen. Weitere Informationen zum Ablauf folgen nach Bestätigung durch den Verein.",
    featured: true,
  },
];

export function getUpcomingEvents(now = new Date()): Event[] {
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  return events
    .filter(
      (event) => new Date(event.endDate ?? event.startDate) >= startOfToday,
    )
    .sort(
      (first, second) =>
        new Date(first.startDate).getTime() -
        new Date(second.startDate).getTime(),
    );
}

export function getNextEvent(now = new Date()): Event | undefined {
  return getUpcomingEvents(now)[0];
}
