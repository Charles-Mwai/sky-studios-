import sharp from "sharp";
import { readdir, stat, mkdir } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = "./public";
const OUTPUT_DIR = "./public/optimised";
const MAX_WIDTH = 1400;
const QUALITY = 82;
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"];

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "optimised") {
      const nested = await getFiles(fullPath);
      files.push(...nested);
    } else if (entry.isFile() && EXTENSIONS.includes(extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

async function compress() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const files = await getFiles(INPUT_DIR);

  console.log(`Found ${files.length} images to compress...\n`);

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

  console.log(`\nDone. Optimised images saved to ${OUTPUT_DIR}`);
}

compress().catch(console.error);
