import sharp from "sharp";
import { readdir, stat, mkdir } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = "./public/weddings";
const OUTPUT_DIR = "./public/optimised/weddings";
const MAX_WIDTH = 1400;
const QUALITY = 82;
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"];

async function compress() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const entries = await readdir(INPUT_DIR, { withFileTypes: true });
  const files = entries
    .filter(e => e.isFile() && EXTENSIONS.includes(extname(e.name)))
    .map(e => join(INPUT_DIR, e.name));

  console.log(`Found ${files.length} wedding images...\n`);

  for (const file of files) {
    const name = basename(file, extname(file));
    const outPath = join(OUTPUT_DIR, `${name}.webp`);
    const before = (await stat(file)).size;

    await sharp(file)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    const after = (await stat(outPath)).size;
    const saving = (((before - after) / before) * 100).toFixed(1);
    console.log(`✓ ${name} — ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${saving}% smaller)`);
  }

  console.log(`\nDone. Saved to ${OUTPUT_DIR}`);
}

compress().catch(console.error);
