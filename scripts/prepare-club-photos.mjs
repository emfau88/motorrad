// Non-generative, reproducible preparation of the club's original photographs.
// Originals at the repository root are never changed. No face reconstruction.
import { mkdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "public/v9/assets");
const temporary = path.join(root, "tmp/club-photos");
await mkdir(temporary, { recursive: true });

async function savePhoto(input, name, crop, corrections = {}) {
  let photo = sharp(input).rotate();
  if (crop) photo = photo.extract(crop);
  if (corrections.gamma) photo = photo.gamma(corrections.gamma);
  if (corrections.colour) photo = photo.modulate(corrections.colour);
  const prepared = await photo.toBuffer();
  for (const width of [640, 1280, 1920]) {
    await sharp(prepared)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 88, effort: 6 })
      .toFile(path.join(output, `${name}-${width}.webp`));
  }
}

await savePhoto(
  path.join(root, "IMG-20261001-WA0004.jpg"),
  "gemeinschaft-2016",
  { left: 0, top: 85, width: 2048, height: 920 },
  { colour: { brightness: 0.99, saturation: 0.96 } },
);

// Blur every readable plate in the full original before making web derivatives.
const tourOriginal = path.join(root, "IMG-20261001-WA0005.jpg");
const plates = [
  { left: 188, top: 805, width: 72, height: 76 },
  { left: 550, top: 709, width: 53, height: 49 },
  { left: 648, top: 790, width: 52, height: 61 },
  { left: 1077, top: 773, width: 48, height: 60 },
  { left: 1415, top: 708, width: 48, height: 50 },
  { left: 1653, top: 711, width: 48, height: 44 },
  { left: 1865, top: 689, width: 90, height: 40 },
];
const overlays = await Promise.all(
  plates.map(async (rect) => ({
    input: await sharp(tourOriginal).extract(rect).blur(12).png().toBuffer(),
    left: rect.left,
    top: rect.top,
  })),
);
const tour = await sharp(tourOriginal).composite(overlays).toBuffer();
await savePhoto(
  tour,
  "gemeinsame-touren",
  { left: 0, top: 250, width: 1840, height: 1035 },
  { colour: { brightness: 1.02, saturation: 0.97 } },
);

await savePhoto(
  path.join(root, "IMG-20261001-WA0006.jpg"),
  "clubhaus",
  { left: 0, top: 420, width: 1148, height: 780 },
  { gamma: 1.08, colour: { saturation: 0.97 } },
);

// This phone HEIC contains 40 HEVC tiles. Assemble the actual tile offsets,
// rather than mistakenly exporting just the first 512px tile.
const heic = path.join(root, "IMG20261001190910.heic");
const probe = JSON.parse(
  execFileSync(
    "ffprobe",
    ["-v", "error", "-show_stream_groups", "-of", "json", heic],
    { maxBuffer: 2 * 1024 * 1024 },
  ),
);
const grid = probe.stream_groups[0].components[0];
const tiles = grid.subcomponents;
const inputs = tiles.map((tile) => `[0:${tile.stream_index}]`).join("");
const layout = tiles
  .map((tile) => `${tile.tile_horizontal_offset}_${tile.tile_vertical_offset}`)
  .join("|");
const decoded = path.join(temporary, "historical-original.png");
execFileSync("ffmpeg", [
  "-hide_banner",
  "-loglevel",
  "error",
  "-y",
  "-i",
  heic,
  "-filter_complex",
  `${inputs}xstack=inputs=${tiles.length}:layout=${layout},crop=${grid.width}:${grid.height}`,
  "-frames:v",
  "1",
  decoded,
]);

// Correct the slight perspective of the photographed print, retaining its age
// and authentic detail. Glare/scratches are deliberately not painted over.
const straightened = path.join(temporary, "historical-straightened.png");
execFileSync("ffmpeg", [
  "-hide_banner",
  "-loglevel",
  "error",
  "-y",
  "-i",
  decoded,
  "-vf",
  "perspective=x0=0:y0=0:x1=3670:y1=0:x2=0:y2=2176:x3=3600:y3=2176:sense=source",
  "-frames:v",
  "1",
  straightened,
]);
await savePhoto(
  straightened,
  "vereinsgeschichte",
  { left: 24, top: 330, width: 4020, height: 1690 },
  { gamma: 1.08, colour: { saturation: 0.92 } },
);
console.log("Prepared four authentic club photographs in public/v9/assets.");
