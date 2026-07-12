import { readFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { glob } from 'glob';

export const contentRoot = path.resolve('src/content/docs');

export async function loadDocuments() {
  const files = await glob('**/*.{md,mdx}', { cwd: contentRoot, nodir: true });
  const documents = [];

  for (const relativePath of files.sort()) {
    const source = await readFile(path.join(contentRoot, relativePath), 'utf8');
    const { data, content } = matter(source);
    if (!data.id) continue;
    documents.push({
      ...data,
      version: String(data.version),
      created: normalizeDate(data.created),
      updated: normalizeDate(data.updated),
      path: relativePath,
      slug: relativePath.replace(/\.(md|mdx)$/, '').replace(/\/index$/, ''),
      body: content.trim()
    });
  }

  return documents;
}

export function normalizeDate(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return typeof value === 'string' ? value : '';
}

export function pageLink(document) {
  return `/${document.slug}/`;
}

export function groupBy(documents, field) {
  return documents.reduce((groups, document) => {
    const key = document[field] || 'not specified';
    (groups[key] ||= []).push(document);
    return groups;
  }, {});
}
