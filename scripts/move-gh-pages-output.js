/*
 * Post-build helper for GitHub Pages deploy.
 *
 * Angular 18 builds to docs/browser/ by default when outputPath is set to docs/.
 * GitHub Pages (when set to use the docs/ folder) serves docs/index.html, so we
 * move the contents up one level and delete the browser/ folder.
 */

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const docsDir = path.join(repoRoot, 'docs');
const browserDir = path.join(docsDir, 'browser');

if (!fs.existsSync(browserDir)) {
  console.log('No browser/ folder found. Run `npm run build` first.');
  process.exit(0);
}

console.log('Moving build output from docs/browser/ -> docs/');

// Node 16+ has fs.cp
fs.cpSync(browserDir, docsDir, { recursive: true, force: true });

console.log('Removing docs/browser/');
fs.rmSync(browserDir, { recursive: true, force: true });

console.log('Done.');
