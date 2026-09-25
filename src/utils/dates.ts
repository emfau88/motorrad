import type { Event } from "../types/content";

const fullDateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Berlin",
});

const monthYearFormatter = new Intl.DateTimeFormat("de-DE", {
  month: "long",
  year: "numeric",
  timeZone: "Europe/Berlin",
});

function dateParts(date: string): [number, number, number] {
  const [year, month, day] = date.split("-").map(Number);
  return [year, month, day];
}

function utcDate(date: string): Date {
  const [year, month, day] = dateParts(date);
  return new Date(Date.UTC(year, month - 1, day));
}

export function formatFullDate(date: string): string {
  return fullDateFormatter.format(utcDate(date));
}

export function formatEventDate(
  event: Pick<Event, "startDate" | "endDate">,
): string {
  if (!event.endDate || event.endDate === event.startDate) {
    return formatFullDate(event.startDate);
  }

  const [startYear, startMonth, startDay] = dateParts(event.startDate);
  const [endYear, endMonth, endDay] = dateParts(event.endDate);

  if (startYear === endYear && startMonth === endMonth) {
    return `${startDay}.–${endDay}. ${monthYearFormatter.format(utcDate(event.endDate))}`;
  }

  return `${formatFullDate(event.startDate)} – ${formatFullDate(event.endDate)}`;
}
