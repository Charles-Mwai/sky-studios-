import sharp from "sharp";
import { stat, mkdir } from "fs/promises";
import { join, basename, extname } from "path";

const INPUT_DIR = "./public/footer";
const OUTPUT_DIR = "./public/optimised/footer";
const FILES = ["DSC_15.jpg", "DSC_21.jpg", "DSC_2031.jpg", "DSC_9562.jpg", "DSC05174.JPG", "DSC05820.jpg"];

await mkdir(OUTPUT_DIR, { recursive: true });

for (const f of FILES) {
  const input = join(INPUT_DIR, f);
  const name = basename(f, extname(f));
  const output = join(OUTPUT_DIR, `${name}.webp`);
  const before = (await stat(input)).size;
  await sharp(input).resize({ width: 600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(output);
  const after = (await stat(output)).size;
  console.log(`✓ ${name}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (${(((before-after)/before)*100).toFixed(1)}% smaller)`);
}
console.log("\nDone. Saved to", OUTPUT_DIR);
