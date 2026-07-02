#!/usr/bin/env node
// Generate a minimal index.html linking to the Marp-built slide decks.
//
// Usage: node scripts/build-index.mjs <slidesSrcDir> <siteOutDir>
//   slidesSrcDir  directory of *.md decks (default: docs/slides)
//   siteOutDir    directory holding the built site + slides/ (default: _site)
//
// Titles/descriptions are read from each deck's YAML frontmatter. The built
// HTML is expected at <siteOutDir>/slides/<name>.html (Marp's default when
// converting an input directory).

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";

const [srcDir = "docs/slides", siteDir = "_site"] = process.argv.slice(2);

// Pedagogical order. Decks not listed here are appended alphabetically.
const ORDER = ["preliminaries", "00-getting-started", "epilogue"];

const escapeHtml = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

function frontmatter(md) {
  if (!md.startsWith("---")) return {};
  const end = md.indexOf("\n---", 3);
  if (end === -1) return {};
  const fm = {};
  for (const line of md.slice(3, end).split("\n")) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (m) fm[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
  return fm;
}

const decks = readdirSync(srcDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const name = basename(f, ".md");
    const fm = frontmatter(readFileSync(join(srcDir, f), "utf8"));
    return { name, title: fm.title || name, description: fm.description || "" };
  })
  .sort((a, b) => {
    const rank = (n) => (ORDER.indexOf(n) === -1 ? 99 : ORDER.indexOf(n));
    return rank(a.name) - rank(b.name) || a.name.localeCompare(b.name);
  });

if (decks.length === 0) {
  console.error(`No *.md decks found in ${srcDir}`);
  process.exit(1);
}

const items = decks
  .map(
    (d) => `      <li>
        <a href="slides/${escapeHtml(d.name)}.html">${escapeHtml(d.title)}</a>
        ${d.description ? `<p>${escapeHtml(d.description)}</p>` : ""}
      </li>`,
  )
  .join("\n");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Agentic Coding Workshop — Slides</title>
  <style>
    :root { color-scheme: light; }
    body { margin: 0; background: #fbfbfd; color: #1d1d1f;
           font: 17px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    main { max-width: 720px; margin: 0 auto; padding: 4rem 1.5rem; }
    h1 { font-size: 2rem; margin: 0 0 .25rem; }
    .sub { color: #6e6e73; margin: 0 0 2.5rem; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { padding: 1.25rem 0; border-top: 1px solid #e5e5ea; }
    a { font-size: 1.2rem; font-weight: 600; color: #0066cc; text-decoration: none; }
    a:hover { text-decoration: underline; }
    p { margin: .35rem 0 0; color: #6e6e73; }
    footer { margin-top: 3rem; color: #a1a1a6; font-size: .85rem; }
    code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
  </style>
</head>
<body>
  <main>
    <h1>Agentic Coding Workshop</h1>
    <p class="sub">Slide decks · BU Bioinformatics MS</p>
    <ul>
${items}
    </ul>
    <footer>Built from <code>docs/slides/</code> with Marp.</footer>
  </main>
</body>
</html>
`;

writeFileSync(join(siteDir, "index.html"), html);
console.log(`Wrote ${join(siteDir, "index.html")} — ${decks.length} deck(s):`);
for (const d of decks) console.log(`  - slides/${d.name}.html  (${d.title})`);
