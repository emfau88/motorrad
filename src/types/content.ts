export type ImageReference = {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: `${number}% ${number}%`;
  caption?: string;
};

export type PostCategory = "touren" | "verein" | "veranstaltungen";

export type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  category: PostCategory;
  excerpt: string;
  body: string[];
  coverImage: ImageReference;
  gallery?: ImageReference[];
  featured?: boolean;
};

export type Event = {
  slug: string;
  title: string;
  startDate: string;
  endDate?: string;
  timeLabel?: string;
  location: string;
  description: string;
  image?: ImageReference;
  link?: string;
  featured?: boolean;
};

export type GalleryAlbum = {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: ImageReference;
  images: ImageReference[];
};

export type HistoryEntry = {
  year: number;
  title: string;
  description: string;
  images?: ImageReference[];
};

export type BoardRole = {
  role: string;
  name?: string;
};
