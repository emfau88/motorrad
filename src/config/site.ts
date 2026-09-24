export const siteConfig = {
  name: "Ottenauer Motorradfreunde e. V.",
  shortName: "OMF",
  foundingYear: 1976,
  location: "Gaggenau-Ottenau",
  region: "Murgtal",
  claim: "Gemeinsam unterwegs. Seit 1976.",
  description:
    "Motorräder, gemeinsame Touren und eine Gemeinschaft, die seit 1976 verbindet. Zuhause in Ottenau. Unterwegs weit darüber hinaus.",
  contact: {
    email: undefined,
    phone: undefined,
    address: undefined,
  },
  regularsTable: {
    schedule: "Jeden zweiten Donnerstag",
    time: "ab ca. 19 Uhr",
    location: "im Clubhaus",
    confirmationRequired: true,
  },
  anniversary: {
    label: "50 Jahre OMF",
    startDate: "2026-10-17",
    endDate: "2026-10-18",
    location: "Merkurhalle Ottenau",
  },
} as const;

export const mainNavigation = [
  { label: "Start", href: "/" },
  { label: "Aktuelles", href: "/aktuelles" },
  { label: "Termine", href: "/termine" },
  { label: "Touren & Galerie", href: "/touren-galerie" },
  { label: "50 Jahre OMF", href: "/50-jahre" },
  { label: "Verein", href: "/verein" },
  { label: "Mitmachen", href: "/mitmachen" },
] as const;

export const footerNavigation = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Anfahrt", href: "/anfahrt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;
