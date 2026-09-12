const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const publicSeqDir = path.join(rootDir, 'public', 'sequence');

if (!fs.existsSync(publicSeqDir)) {
  fs.mkdirSync(publicSeqDir, { recursive: true });
}

// Find all frame files in root
const files = fs.readdirSync(rootDir)
  .filter(f => f.startsWith('frame_') && f.endsWith('.png'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/frame_(\d+)/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/frame_(\d+)/)?.[1] || '0', 10);
    return numA - numB;
  });

console.log(`Found ${files.length} frames to process...`);

const manifest = [];

files.forEach((file, index) => {
  const srcPath = path.join(rootDir, file);
  // Target webp name: frame_00_delay-0.083s.webp
  const baseName = file.replace(/\.png$/, '');
  const webpName = `${baseName}.webp`;
  const destWebpPath = path.join(publicSeqDir, webpName);
  const destPngPath = path.join(publicSeqDir, file);

  // Convert to WebP using cwebp with quality 88 (crisp detail, very low file size ~40kb)
  if (!fs.existsSync(destWebpPath)) {
    try {
      execSync(`cwebp -q 88 "${srcPath}" -o "${destWebpPath}"`, { stdio: 'ignore' });
    } catch (err) {
      console.warn(`cwebp failed for ${file}, falling back to copy:`, err.message);
    }
  }

  // Also copy PNG as fallback
  if (!fs.existsSync(destPngPath)) {
    fs.copyFileSync(srcPath, destPngPath);
  }

  manifest.push({
    index,
    webp: `/sequence/${webpName}`,
    png: `/sequence/${file}`,
    filename: webpName
  });
});

const manifestPath = path.join(publicSeqDir, 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log(`Successfully processed ${manifest.length} frames into ${publicSeqDir}`);
