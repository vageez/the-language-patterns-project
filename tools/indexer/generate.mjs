import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadDocuments, groupBy } from '../lib/content.mjs';

const documents = await loadDocuments();
const generatedDir = path.resolve('generated/indexes');
const exploreDir = path.resolve('src/content/docs/explore');
await mkdir(generatedDir, { recursive: true });
await mkdir(exploreDir, { recursive: true });

const normalized = documents.map(({ body, ...document }) => document);
const aliases = documents.flatMap((document) => (document.aliases || []).map((alias) => ({ alias, id: document.id, title: document.title })));
const tags = Object.entries(groupBy(documents.flatMap((document) => (document.tags || []).map((tag) => ({ tag, id: document.id, title: document.title }))), 'tag'))
  .map(([tag, entries]) => ({ tag, documents: entries.map(({ id, title }) => ({ id, title })) }));

await Promise.all([
  writeJson('documents.json', normalized),
  writeJson('aliases.json', aliases),
  writeJson('tags.json', tags)
]);

await Promise.all([
  writePage('all-documents.md', 'All canonical documents', 'Generated from canonical front matter.', renderDocuments(documents)),
  writePage('by-status.md', 'Documents by status', 'Lifecycle state across the canonical collection.', renderGroups(groupBy(documents, 'status'))),
  writePage('by-maturity.md', 'Documents by maturity', 'Evidential maturity across the canonical collection.', renderGroups(groupBy(documents, 'maturity'))),
  writePage('recently-updated.md', 'Recently updated', 'Canonical documents ordered by their declared update date.', renderDocuments([...documents].sort((a, b) => b.updated.localeCompare(a.updated))))
]);

console.log(`Generated indexes for ${documents.length} canonical documents.`);

async function writeJson(filename, value) {
  await writeFile(path.join(generatedDir, filename), `${JSON.stringify(value, null, 2)}\n`);
}

async function writePage(filename, title, description, body) {
  const source = `---\ntitle: ${title}\ndescription: ${description}\ngenerated: true\n---\n\n> This page is generated from canonical Markdown metadata. Edit the source documents, not this page.\n\n${body}\n`;
  await writeFile(path.join(exploreDir, filename), source);
}

function renderGroups(groups) {
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b)).map(([group, entries]) => `## ${titleCase(group)}\n\n${renderDocuments(entries)}`).join('\n\n');
}

function renderDocuments(entries) {
  return entries.map((document) => `- [**${document.title}**](../../${document.slug}/) — \`${document.id}\` · ${document.document_type.replaceAll('_', ' ')} · ${document.status}`).join('\n') || '_No documents._';
}

function titleCase(value) {
  return value.replaceAll('_', ' ').replace(/\b\w/g, (character) => character.toUpperCase());
}
