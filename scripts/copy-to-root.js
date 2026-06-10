#!/usr/bin/env node
// After every build, copy compiled output to repo root so GitHub Pages
// can serve the real bundle from main branch without any settings change.
import { readdirSync, copyFileSync, rmSync, statSync } from 'fs'
import { join } from 'path'

// Remove previous hashed JS/CSS at root to avoid stale files accumulating
readdirSync('assets')
  .filter(f => statSync(join('assets', f)).isFile() && /^index-[A-Za-z0-9]+\.(js|css)$/.test(f))
  .forEach(f => rmSync(join('assets', f)))

// Overwrite root index.html with the compiled version
copyFileSync('docs/index.html', 'index.html')

// Copy compiled JS and CSS from docs/assets/ into root assets/
for (const file of readdirSync('docs/assets')) {
  if (file.endsWith('.js') || file.endsWith('.css')) {
    copyFileSync(join('docs/assets', file), join('assets', file))
  }
}

console.log('✓ Compiled output copied to project root for GitHub Pages')
