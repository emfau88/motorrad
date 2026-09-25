import type { Post } from "../types/content";

const placeholderImage = (label: string) => ({
  src: "",
  alt: `${label} – Vereinsbild wird ergänzt`,
  width: 1600,
  height: 1100,
  focalPoint: "50% 50%" as const,
});

export const posts: Post[] = [
  {
    slug: "gemeinsam-unterwegs",
    title: "Gemeinsam unterwegs",
    publishedAt: "2026-08-01",
    category: "touren",
    excerpt:
      "Hier wird künftig von gemeinsamen Ausfahrten, großen Touren und besonderen Kilometern erzählt.",
    body: [],
    coverImage: placeholderImage("Gemeinsame Ausfahrt"),
    featured: true,
    placeholder: true,
  },
  {
    slug: "leben-rund-ums-clubhaus",
    title: "Leben rund ums Clubhaus",
    publishedAt: "2026-07-01",
    category: "verein",
    excerpt:
      "Ein Platz für Neuigkeiten aus dem Vereinsleben, vom Stammtisch und aus der Gemeinschaft.",
    body: [],
    coverImage: placeholderImage("Vereinsleben am Clubhaus"),
    featured: true,
    placeholder: true,
  },
  {
    slug: "veranstaltungen-in-ottenau",
    title: "Veranstaltungen in Ottenau",
    publishedAt: "2026-06-01",
    category: "veranstaltungen",
    excerpt:
      "Maihock, Ausstellung oder Jubiläum: An dieser Stelle erscheinen später aktuelle Rückblicke.",
    body: [],
    coverImage: placeholderImage("Veranstaltung der OMF"),
    featured: true,
    placeholder: true,
  },
];

export function getLatestPosts(limit = 3): Post[] {
  return [...posts]
    .sort(
      (first, second) =>
        new Date(second.publishedAt).getTime() -
        new Date(first.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function getPostsByCategory(category?: Post["category"]): Post[] {
  const orderedPosts = getLatestPosts(posts.length);
  return category
    ? orderedPosts.filter((post) => post.category === category)
    : orderedPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
