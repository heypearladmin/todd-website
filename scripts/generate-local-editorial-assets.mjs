/**
 * Generates warm editorial gradient plates under public/images (replace with real photography later).
 * Run: npm run gen:images
 */
import { existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, "..", "public");

function gradientRGB(w, h, rgbTop, rgbBottom, rgbXBias = [0, 0, 0]) {
  const buf = Buffer.alloc(w * h * 3);
  for (let y = 0; y < h; y++) {
    const ky = h > 1 ? y / (h - 1) : 0;
    for (let x = 0; x < w; x++) {
      const kx = w > 1 ? x / (w - 1) : 0;
      const i = (y * w + x) * 3;
      const wx = (kx - 0.5) * 0.2;
      let r = rgbTop[0] * (1 - ky) + rgbBottom[0] * ky + rgbXBias[0] * wx;
      let g = rgbTop[1] * (1 - ky) + rgbBottom[1] * ky + rgbXBias[1] * wx;
      let b = rgbTop[2] * (1 - ky) + rgbBottom[2] * ky + rgbXBias[2] * wx;
      buf[i] = Math.max(0, Math.min(255, Math.round(r)));
      buf[i + 1] = Math.max(0, Math.min(255, Math.round(g)));
      buf[i + 2] = Math.max(0, Math.min(255, Math.round(b)));
    }
  }
  return buf;
}

async function webp(relPath, w, h, top, bottom, xBias = [0, 0, 0], quality = 82) {
  const buf = gradientRGB(w, h, top, bottom, xBias);
  const abs = join(pub, relPath);
  mkdirSync(dirname(abs), { recursive: true });
  await sharp(buf, { raw: { width: w, height: h, channels: 3 } })
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(abs);
  console.log("wrote", relPath);
}

async function jpeg(relPath, w, h, top, bottom, quality = 88) {
  const buf = gradientRGB(w, h, top, bottom, [6, 3, 1]);
  const abs = join(pub, relPath);
  mkdirSync(dirname(abs), { recursive: true });
  await sharp(buf, { raw: { width: w, height: h, channels: 3 } })
    .jpeg({ quality, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(abs);
  console.log("wrote", relPath);
}

async function pngPhones(relPath) {
  const w = 1600;
  const bg = { r: 32, g: 26, b: 22 };
  const base = sharp({ create: { width: w, height: w, channels: 3, background: bg } });
  const make = (pw, ph, shade) =>
    sharp({ create: { width: pw, height: ph, channels: 3, background: shade } }).png();

  const [p1, p2, p3] = await Promise.all([
    make(260, 520, { r: 52, g: 48, b: 44 }).toBuffer(),
    make(220, 480, { r: 58, g: 52, b: 46 }).toBuffer(),
    make(240, 500, { r: 48, g: 44, b: 40 }).toBuffer(),
  ]);

  const abs = join(pub, relPath);
  mkdirSync(dirname(abs), { recursive: true });
  await base
    .composite([
      { input: p1, left: 220, top: 520 },
      { input: p2, left: 700, top: 560 },
      { input: p3, left: 1120, top: 540 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(abs);
  console.log("wrote", relPath);
}

const DUSK_TOP = [28, 34, 52];
const DUSK_BOTTOM = [112, 72, 48];
const PAPER_TOP = [252, 248, 240];
const PAPER_BOTTOM = [236, 224, 206];

const expected = [
  "images/hero/nb-hero-dusk-river.webp",
  "images/hero/nb-hero-dusk-river-portrait.webp",
  "images/textures/trust-paper-fiber-warm.webp",
  "images/lifestyle/todd-spencer-editorial-portrait.jpg",
  "images/explore/gruene-street-golden-hour.webp",
  "images/explore/comal-float-tranquil.webp",
  "images/explore/farmers-market-baskets.webp",
  "images/explore/hill-country-trail-oaks.webp",
  "images/explore/porch-rocking-late-day.webp",
  "images/social/instagram-reels-mockup.png",
  "images/editorial/authority-supporting-wide.webp",
  "images/editorial/og-share-1200.webp",
  "images/neighborhoods/canyon-lake-hills-aerial-dawn.webp",
  "images/neighborhoods/gruene-historic-limestone-close.webp",
  "images/neighborhoods/vintage-oaks-canopy-drive.webp",
  "images/cta/hill-country-twilight-horizon.webp",
  "images/cta/hill-country-twilight-horizon-mobile.webp",
];

await pngPhones("images/social/instagram-reels-mockup.png");

await Promise.all([
  webp("images/hero/nb-hero-dusk-river.webp", 2560, 1440, DUSK_TOP, DUSK_BOTTOM, [18, -4, -8]),
  webp("images/hero/nb-hero-dusk-river-portrait.webp", 1600, 2000, DUSK_TOP, DUSK_BOTTOM, [12, -2, -6]),
  webp("images/textures/trust-paper-fiber-warm.webp", 1920, 1080, PAPER_TOP, PAPER_BOTTOM, [4, 1, 0]),
  jpeg("images/lifestyle/todd-spencer-editorial-portrait.jpg", 1920, 1280, [38, 42, 52], [118, 82, 62]),
  webp("images/explore/gruene-street-golden-hour.webp", 1600, 1200, [62, 48, 38], [142, 96, 58], [22, 8, 2]),
  webp("images/explore/comal-float-tranquil.webp", 1600, 1067, [32, 72, 88], [180, 210, 198], [10, 4, 2]),
  webp("images/explore/farmers-market-baskets.webp", 1280, 1600, [88, 52, 38], [210, 168, 112], [8, 4, 0]),
  webp("images/explore/hill-country-trail-oaks.webp", 1920, 1080, [24, 36, 28], [88, 108, 74], [6, 3, 1]),
  webp("images/explore/porch-rocking-late-day.webp", 1800, 1200, [48, 36, 28], [118, 72, 42], [8, 2, 0]),
  webp("images/editorial/authority-supporting-wide.webp", 1920, 1080, [30, 38, 44], [96, 76, 52], [12, 6, 2]),
  webp("images/editorial/og-share-1200.webp", 1200, 630, DUSK_TOP, DUSK_BOTTOM, [14, -4, -6]),
  webp("images/neighborhoods/canyon-lake-hills-aerial-dawn.webp", 2000, 1600, [72, 88, 118], [220, 188, 168], [6, 4, 2]),
  webp("images/neighborhoods/gruene-historic-limestone-close.webp", 1440, 1920, [58, 52, 46], [132, 118, 98], [6, 2, 0]),
  webp("images/neighborhoods/vintage-oaks-canopy-drive.webp", 1920, 1080, [28, 40, 30], [74, 92, 62], [5, 3, 1]),
  webp("images/cta/hill-country-twilight-horizon.webp", 2560, 1100, [18, 22, 36], [92, 62, 88], [8, 2, 4]),
  webp("images/cta/hill-country-twilight-horizon-mobile.webp", 1080, 1920, [20, 26, 40], [78, 54, 72], [6, 2, 3]),
]);

let missing = false;
for (const p of expected) {
  if (!existsSync(join(pub, p))) {
    console.error("MISSING", p);
    missing = true;
  }
}
if (missing) process.exit(1);
console.log("Verified:", expected.length, "local image paths under public/images");
