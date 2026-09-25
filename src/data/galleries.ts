import type { GalleryAlbum } from "../types/content";

const placeholderImage = (label: string) => ({
  src: "",
  alt: `${label} – Vereinsbild wird ergänzt`,
  width: 1600,
  height: 1100,
  focalPoint: "50% 50%" as const,
});

export const galleries: GalleryAlbum[] = [
  {
    slug: "gemeinsame-ausfahrten",
    title: "Gemeinsame Ausfahrten",
    date: "",
    description:
      "Beispielalbum: Hier erscheinen künftig Eindrücke gemeinsamer Touren.",
    coverImage: placeholderImage("Gemeinsame Ausfahrt"),
    images: [],
    placeholder: true,
  },
  {
    slug: "unterwegs-im-schwarzwald",
    title: "Unterwegs im Schwarzwald",
    date: "",
    description:
      "Beispielalbum: Bildmaterial und genaue Tourinformationen folgen.",
    coverImage: placeholderImage("Motorräder im Schwarzwald"),
    images: [],
    placeholder: true,
  },
  {
    slug: "vereinsleben",
    title: "Vereinsleben",
    date: "",
    description:
      "Beispielalbum: Fotos vom Clubhaus und von Veranstaltungen werden ergänzt.",
    coverImage: placeholderImage("Vereinsleben der OMF"),
    images: [],
    placeholder: true,
  },
];
