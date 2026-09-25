const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\f77c1236-edd2-4612-87ba-4f6b96120b92`;
const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Find all media__ files in brain directory sorted by creation time
const files = fs.readdirSync(brainDir)
  .filter(f => f.startsWith('media__') && (f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg')))
  .map(f => {
    const fullPath = path.join(brainDir, f);
    const stat = fs.statSync(fullPath);
    return { name: f, mtime: stat.mtimeMs, size: stat.size };
  })
  .sort((a, b) => a.mtime - b.mtime);

console.log(`Found ${files.length} media files:`);
files.forEach((f, idx) => console.log(`${idx + 1}: ${f.name} (${(f.size/1024).toFixed(1)} KB)`));

const customNames = [
  'makeup.webp',
  'skincare.webp',
  'nails.webp',
  'hairwash-1.webp',
  'hairwash-2.webp',
  'bridal-1.webp',
  'bridal-2.webp',
  'hair-color.webp',
  'hand-care.webp',
  'hair-styling.webp',
];

async function compressAll() {
  console.log('\n--- Starting Compression ---');
  const results = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const outName = customNames[i] || `image-${i + 1}.webp`;
    const inputPath = path.join(brainDir, file.name);
    const outputPath = path.join(targetDir, outName);

    await sharp(inputPath)
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    console.log(`[${i + 1}] ${file.name} (${(file.size / 1024).toFixed(1)} KB) -> ${outName} (${(newSize / 1024).toFixed(1)} KB)`);
    results.push(`/images/${outName}`);
  }

  console.log('\nGenerated image paths:');
  console.log(JSON.stringify(results, null, 2));
}

compressAll();
