import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDirectory = "assets";
const outputDirectory = path.join(sourceDirectory, "gallery");
const sourceFiles = [
  "WhatsApp Image 2026-09-14 at 20.53.29.jpeg",
  "WhatsApp Image 2026-09-14 at 20.53.42.jpeg",
  "WhatsApp Image 2026-09-14 at 20.53.44.jpeg",
  "WhatsApp Image 2026-09-14 at 20.53.47.jpeg",
  "WhatsApp Image 2026-09-14 at 20.53.48.jpeg",
  "WhatsApp Image 2026-09-14 at 20.53.50.jpeg",
];

await mkdir(outputDirectory, { recursive: true });

await Promise.all(
  sourceFiles.map(async (sourceFile, index) => {
    const outputFile = path.join(outputDirectory, `photo-${String(index + 1).padStart(2, "0")}.webp`);

    await sharp(path.join(sourceDirectory, sourceFile))
      .rotate()
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 78, effort: 4 })
      .toFile(outputFile);

    console.log(`Created ${outputFile}`);
  })
);