import assert from "node:assert/strict";
import { readFile, access, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = path.join(root, "dist");
const home = await readFile(path.join(dist, "index.html"), "utf8");
const removed = [
  "nachwuchs-presseausschnitt",
  "erste-hilfe-gruppenfoto",
  "veranstaltung.webp",
  "jubilaeum-hero.webp",
];

async function inspect(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await inspect(file);
    else if (/\.(html|css)$/.test(entry.name)) {
      const body = await readFile(file, "utf8");
      for (const name of removed)
        assert(!body.includes(name), `${file} still references ${name}`);
    }
  }
}
await inspect(dist);
for (const route of ["impressum", "datenschutz"]) {
  assert(
    home.includes(`href="/motorrad/${route}/"`),
    `${route} missing from homepage footer`,
  );
  const html = await readFile(path.join(dist, route, "index.html"), "utf8");
  assert(html.includes("VR 520321") || route === "datenschutz");
  assert(html.includes("Dorfstraße 139"));
  assert(html.includes("legal-document"));
  assert(!html.includes("Dokumentenplatzhalter"));
  assert(!html.includes("Vereinsbestätigung noch offen"));
  assert(!html.includes("Hinweis zum Prüfstand"));
}
assert(home.includes("Das ist unser Verein"));
assert(home.includes("Rückblick: 40 Jahre OMF"));
assert(home.includes("vereinsgeschichte-1280.webp"));
assert(home.includes('data-count="seconds"'));
assert(home.includes('id="photo-viewer"'));
assert.equal([...home.matchAll(/anniversary-seal__branch--/g)].length, 2);
assert(home.includes("anniversary-seal__glint"));
const sealStyles = await readFile(
  path.join(dist, "v9/styles/main.css"),
  "utf8",
);
assert(
  !sealStyles.includes(".anniversary-seal__logo-frame::after"),
  "Logo must remain free of shine effects",
);
assert(sealStyles.includes("@keyframes seal-shine"));
assert(sealStyles.includes("@keyframes seal-glint"));
assert(sealStyles.includes("transform: translate(-65%, 65%)"));
assert(sealStyles.includes("transform: translate(65%, -65%)"));
assert(sealStyles.includes("top: 13.2%"));
assert(sealStyles.includes("left: 82%"));
assert(sealStyles.includes("prefers-reduced-motion: reduce"));
const instagramLinks = [
  ...home.matchAll(
    /<a\b[^>]*href="https:\/\/www\.instagram\.com\/omf19762026\/"[^>]*>/g,
  ),
];
assert.equal(
  instagramLinks.length,
  2,
  "Instagram missing from contact area or footer",
);
for (const [link] of instagramLinks) {
  assert(link.includes('target="_blank"'));
  assert(link.includes('rel="noopener noreferrer"'));
  assert(link.includes("neuem Tab"));
}
assert(!home.includes("instagram.com/embed"));
assert.equal([...home.matchAll(/data-photo-caption=/g)].length, 5);
assert(
  home.includes(
    "https://www.google.com/maps/dir/?api=1&amp;destination=Merkurhalle",
  ),
);
for (const sourceSet of home.matchAll(/srcset="([^"]+)"/g)) {
  for (const entry of sourceSet[1].split(",")) {
    const [url, width] = entry.trim().split(/\s+/);
    const local = path.join(dist, url.replace(/^\/motorrad\//, ""));
    await access(local);
    const metadata = await sharp(local).metadata();
    assert.equal(
      metadata.width,
      parseInt(width),
      `Wrong srcset width for ${url}`,
    );
  }
}
for (const url of home.matchAll(
  /(?:src|href)="(\/motorrad\/v9\/[^"?]+)(?:\?[^" ]*)?"/g,
)) {
  await access(path.join(dist, url[1].replace(/^\/motorrad\//, "")));
}
assert(!/<iframe|<form\b/.test(home), "Unexpected embedded service or form");
console.log(
  "Site checks passed: photos, responsive image widths, removed assets, legal routes and footer links.",
);
