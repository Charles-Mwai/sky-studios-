import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname } from "path";

const WILDLIFE_DIR = "./public/optimised/wildlife";
const MAX_WIDTH = 1400;
const QUALITY = 82;

async function optimiseWildlife() {
  const entries = await readdir(WILDLIFE_DIR, { withFileTypes: true });
  const jpgFiles = entries
    .filter(entry => entry.isFile() && [".jpg", ".jpeg", ".JPG", ".JPEG"].includes(extname(entry.name)))
    .map(entry => entry.name);

  console.log(`Found ${jpgFiles.length} raw wildlife JPEG files to optimize...\n`);

  for (const filename of jpgFiles) {
    const inPath = join(WILDLIFE_DIR, filename);
    const outPath = join(WILDLIFE_DIR, filename.replace(/\.(jpg|jpeg|JPG|JPEG)$/, ".webp"));

    const before = (await stat(inPath)).size;

    console.log(`Compressing ${filename}...`);
    await sharp(inPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    const after = (await stat(outPath)).size;
    const saving = (((before - after) / before) * 100).toFixed(1);

    console.log(`✓ Optimized ${filename} → ${filename.replace(/\.(jpg|jpeg|JPG|JPEG)$/, ".webp")}`);
    console.log(`  Size: ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024).toFixed(0)}KB (${saving}% smaller)\n`);

    // Delete the original massive JPEG to save disk space (handled gracefully on Windows)
    try {
      await unlink(inPath);
      console.log(`  Deleted raw JPEG: ${filename}`);
    } catch (err) {
      console.warn(`  ⚠️ Could not delete raw JPEG (file lock): ${filename}`);
    }
  }

  console.log("Wildlife optimization completed!");
}

optimiseWildlife().catch(console.error);
