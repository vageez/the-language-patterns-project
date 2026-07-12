import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadDocuments } from '../lib/content.mjs';

const documents = await loadDocuments();
const edges = [];
const mappings = {
  dependencies: 'depends_on',
  related: 'related_to',
  supersedes: 'supersedes',
  superseded_by: 'superseded_by'
};

for (const document of documents) {
  for (const [field, type] of Object.entries(mappings)) {
    for (const target of document[field] || []) edges.push({ source: document.id, target, type });
  }
}

const graph = {
  generated_at: new Date().toISOString(),
  nodes: documents.map((document) => ({ id: document.id, title: document.title, document_type: document.document_type, status: document.status, maturity: document.maturity, confidence: document.confidence, path: `/${document.slug}/` })),
  edges
};

const outputDir = path.resolve('generated/graph');
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, 'relationships.json'), `${JSON.stringify(graph, null, 2)}\n`);
console.log(`Generated relationship graph with ${graph.nodes.length} nodes and ${edges.length} edges.`);
