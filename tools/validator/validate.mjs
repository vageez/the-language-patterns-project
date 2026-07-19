import { loadDocuments } from '../lib/content.mjs';

const required = ['title', 'id', 'document_type', 'version', 'status', 'created', 'updated', 'summary'];
const statuses = new Set(['draft', 'active', 'accepted', 'superseded', 'historical', 'deprecated']);
const maturities = new Set(['observation', 'hypothesis', 'candidate', 'validated', 'core', 'deprecated']);
const confidences = new Set(['low', 'medium', 'high', 'not_applicable']);
const documentTypes = new Set(['project_state', 'specification', 'ontology', 'glossary', 'observation', 'discovery', 'hypothesis', 'primitive', 'primitive_node', 'primitive_relationship', 'primitive_modifier', 'pattern', 'composition', 'validation_report', 'experiment', 'research_question', 'research_proposal', 'research_journal', 'corpus_entry', 'counterexample']);
const idPattern = /^(?:D|SPEC|ONT|O|N|R|M|C|CE|LP|CP|H|VAL|EXP|RQ|J)-\d{4}$/;
const referenceFields = ['dependencies', 'related', 'supporting_discoveries', 'supporting_experiments', 'supporting_hypotheses', 'supersedes', 'superseded_by'];
const errors = [];
const warnings = [];
const documents = await loadDocuments();
const byId = new Map();
const aliases = new Map();

for (const document of documents) {
  for (const field of required) {
    if (document[field] === undefined || document[field] === null || document[field] === '') {
      errors.push(`${document.path}: missing required field “${field}”`);
    }
  }
  if (!idPattern.test(document.id)) errors.push(`${document.path}: invalid canonical ID “${document.id}”`);
  if (byId.has(document.id)) errors.push(`${document.path}: duplicate ID “${document.id}” also used by ${byId.get(document.id).path}`);
  byId.set(document.id, document);
  if (!statuses.has(document.status)) errors.push(`${document.path}: unknown status “${document.status}”`);
  if (document.maturity && !maturities.has(document.maturity)) errors.push(`${document.path}: unknown maturity “${document.maturity}”`);
  if (
    document.confidence !== undefined &&
    !confidences.has(document.confidence) &&
    !(Number.isInteger(document.confidence) && document.confidence >= 1 && document.confidence <= 5)
  ) errors.push(`${document.path}: confidence must be 1-5 or a supported legacy value, received “${document.confidence}”`);
  if (!documentTypes.has(document.document_type)) errors.push(`${document.path}: unknown document type “${document.document_type}”`);
  for (const field of ['created', 'updated']) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(document[field]) || Number.isNaN(Date.parse(document[field]))) errors.push(`${document.path}: invalid ${field} date “${document[field]}”`);
  }
  for (const alias of document.aliases || []) {
    const key = alias.trim().toLocaleLowerCase();
    if (!key) continue;
    if (aliases.has(key) && aliases.get(key) !== document.id) errors.push(`${document.path}: alias “${alias}” is also used by ${aliases.get(key)}`);
    aliases.set(key, document.id);
  }
}

for (const document of documents) {
  for (const field of referenceFields) {
    if (document[field] !== undefined && !Array.isArray(document[field])) errors.push(`${document.path}: “${field}” must be an array`);
    for (const reference of document[field] || []) {
      if (!byId.has(reference)) errors.push(`${document.path}: ${field} references missing ID “${reference}”`);
    }
  }
  for (const superseded of document.supersedes || []) {
    if ((byId.get(superseded)?.supersedes || []).includes(document.id)) errors.push(`${document.path}: circular supersession with “${superseded}”`);
  }
  if (!document.maturity) warnings.push(`${document.path}: maturity is not specified`);
  if (!document.confidence) warnings.push(`${document.path}: confidence is not specified`);
}

for (const warning of warnings) console.warn(`warning: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`error: ${error}`);
  console.error(`\nValidation failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log(`Validated ${documents.length} canonical documents (${warnings.length} warnings).`);
