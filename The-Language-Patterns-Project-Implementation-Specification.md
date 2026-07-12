# The Language Patterns Project

# Implementation Specification
**Version:** 0.1  
**Status:** Draft  
**Audience:** Builder / Codex / Engineering Contributors

## 1. Objective

Implement the initial repository and documentation application for **The Language Patterns Project**.

The implementation must:

- Preserve Markdown as the canonical source of truth.
- Support the project’s research and specification lifecycle.
- Publish the documentation as a searchable website.
- Establish stable metadata and identifiers from the beginning.
- Allow a future custom Explorer to support filtering, graph traversal, and semantic discovery without restructuring existing content.
- Avoid inventing ontology, primitives, patterns, or research conclusions.

## 2. Recommended Framework

Use **Astro Starlight** for the initial documentation website.

Reasons:

- Markdown-first architecture.
- Strong documentation navigation.
- Built-in or easily integrated full-text search.
- Fast static output.
- Flexible Astro foundation for future custom views.
- Supports component-enhanced Markdown.
- Allows a custom Explorer later without replacing Markdown.

Alternatives considered:

- **Docusaurus:** mature ecosystem and strong versioning, but heavier and more opinionated.
- **VitePress:** minimal and fast, but less complete for the long-term documentation experience.

The content model must remain framework-independent.

## 3. Architectural Principles

1. Markdown is the canonical source of truth.
2. The website is a projection of canonical content.
3. Stable IDs are more important than file paths.
4. Metadata must support human navigation and machine processing.
5. Search should influence the schema now, while advanced search can come later.
6. Generated indexes must never become an independent content source.
7. Discoveries, specifications, validation evidence, and current state remain distinct.
8. Scaffolding must not invent research content.
9. Relationships between documents must be explicit and machine-readable.
10. The initial architecture must support a future Explorer without migration.

## 4. Repository Structure

```text
language-patterns/
├── CURRENT_STATE.md
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── package.json
├── astro.config.mjs
├── tsconfig.json
│
├── specification/
│   ├── manifesto.md
│   ├── constitution.md
│   ├── governance.md
│   ├── collaboration-model.md
│   ├── methodology.md
│   ├── design-philosophy.md
│   ├── ontology.md
│   ├── glossary.md
│   ├── terminology.md
│   ├── versioning.md
│   └── contributing.md
│
├── discoveries/
│   ├── README.md
│   └── templates/
│       └── discovery-template.md
│
├── primitives/
│   ├── nodes/
│   ├── relationships/
│   ├── modifiers/
│   └── constraints/
│
├── patterns/
├── compositions/
├── corpus/
├── validation/
├── research/
│   ├── proposals/
│   ├── open-questions/
│   └── meeting-notes/
│
├── templates/
│   ├── specification-template.md
│   ├── primitive-template.md
│   ├── pattern-template.md
│   ├── composition-template.md
│   ├── validation-report-template.md
│   └── research-proposal-template.md
│
├── website/
│   ├── src/
│   ├── public/
│   └── README.md
│
├── tools/
│   ├── indexer/
│   ├── validator/
│   └── graph/
│
└── generated/
    ├── indexes/
    ├── graph/
    └── search/
```

The exact Astro placement may vary, but canonical research content should remain outside tightly coupled UI folders whenever practical.

## 5. Memory Model

### 5.1 Working Memory

**File:** `CURRENT_STATE.md`

Contains:

- Current phase
- Current milestone
- Current focus
- Accepted decisions
- Active hypotheses
- Open questions
- Competing models
- Active research threads
- Blockers
- Immediate next steps
- Recently completed work
- Last updated date

This is the primary mutable project-state document.

### 5.2 Episodic Memory

**Directory:** `discoveries/`

Contains chronological records of observations, questions, hypotheses, evidence, counterexamples, refinements, and outcomes.

Discovery records are historical and should not be silently rewritten to match later conclusions.

### 5.3 Semantic Memory

**Directory:** `specification/`

Contains the project’s current best canonical understanding.

Specifications are versioned and may be revised or superseded.

## 6. Canonical Identifier System

| Prefix | Type |
|---|---|
| `D-` | Discovery |
| `SPEC-` | Specification |
| `ONT-` | Ontology proposal or specification |
| `N-` | Node primitive |
| `R-` | Relationship primitive |
| `M-` | Modifier primitive |
| `C-` | Constraint primitive |
| `LP-` | Language Pattern |
| `CP-` | Composition Pattern |
| `H-` | Hypothesis |
| `VAL-` | Validation report |
| `EXP-` | Experiment |
| `RQ-` | Research question |

Identifiers must:

- Be permanent after publication.
- Never encode file paths.
- Use zero-padded numeric values where practical, such as `LP-0001`.
- Remain valid if titles change.
- Be referenced explicitly in metadata.

## 7. Canonical Metadata Schema

Every canonical content file must contain YAML front matter.

```yaml
title:
id:
document_type:
version:
status:
maturity:
confidence:
created:
updated:
authors:
summary:
aliases: []
tags: []
dependencies: []
related: []
supersedes: []
superseded_by: []
```

Required fields:

- `title`
- `id`
- `document_type`
- `version`
- `status`
- `created`
- `updated`
- `summary`

Type-specific metadata may include:

```yaml
question:
observation:
outcome:
academic_name:
engineering_name:
plain_language_name:
intent:
semantic_form:
target_id:
result:
evidence_strength:
claim:
falsification_criteria:
```

## 8. Three-Name Model

Every Language Pattern should support:

1. Academic name
2. Engineering name
3. Plain-language name

Example:

```yaml
id: LP-0001
academic_name: Reference Resolution Pattern
engineering_name: Pointer Resolution Pattern
plain_language_name: Explaining What "This" Means
aliases:
  - Referential Resolution
  - Deictic Resolution
```

Search must treat official names and aliases as searchable surfaces while preserving their distinct roles.

## 9. Navigation Requirements

The application must provide:

- Global sidebar navigation.
- Breadcrumbs.
- Previous and next links where appropriate.
- Generated indexes by document type.
- Generated indexes by status.
- Generated indexes by maturity.
- Direct links between related IDs.
- A visible canonical ID on every page.
- A generated “Referenced by” section.
- A related-content section.

Navigation should prioritize conceptual relationships over folder depth.

## 10. Search Capability Roadmap

Capabilities are ranked in this order:

1. Canonical IDs and cross-linking
2. Good navigation and generated indexes
3. Basic full-text search
4. Structured filtering and relationship exploration
5. Semantic search

### Release 1: Foundational Retrieval

Implement:

- Search by title.
- Search by phrase.
- Search by canonical ID.
- Search across aliases.
- Search result snippets.
- Document-type labels.
- Generated index pages.

### Release 2: Structured Retrieval

Add filters for:

- Status
- Maturity
- Document type
- Confidence
- Tags
- Author
- Date
- Related primitive or pattern ID

Support queries such as:

- Find every document that references `LP-0001`.
- Find discoveries related to `R-0004`.
- Find counterexamples connected to a hypothesis.
- Find validation reports for a pattern.
- Find all Candidate-status primitives.
- Find High-confidence discoveries.

### Release 3: Relationship Exploration

Implement:

- Forward references.
- Reverse references.
- Related discoveries.
- Counterexamples.
- Validation reports.
- Dependencies.
- Supersession history.
- Graph traversal.

### Release 4: Semantic Search

Semantic retrieval must:

- Supplement, not replace, canonical ID and metadata search.
- Return source documents.
- Preserve status and confidence indicators.
- Avoid presenting superseded or low-confidence content as canonical without labels.

## 11. Generated Indexes

Generate indexes automatically from front matter:

- All documents
- Specifications
- Discoveries
- Hypotheses
- Primitives
- Patterns
- Compositions
- Validation reports
- Open research questions
- Documents by status
- Documents by maturity
- Documents by confidence
- Recently updated
- Deprecated and superseded documents

Generated output belongs in `generated/` or should be built in memory. It must not become manually maintained truth.

## 12. Relationship Graph

Create a machine-readable graph from metadata.

Each canonical document is a node.

Possible edge types:

- `depends_on`
- `related_to`
- `references`
- `validates`
- `challenges`
- `provides_counterexample_to`
- `supersedes`
- `derived_from`
- `implements`
- `composes`
- `uses_primitive`

Initial export:

- JSON

Future exports:

- Graphviz DOT
- Mermaid
- RDF or JSON-LD

## 13. Validation

Create a validation script that checks:

- Required front matter.
- Unique IDs.
- Valid identifier format.
- Valid status, maturity, and confidence values.
- Broken internal ID references.
- Missing related documents.
- Circular supersession relationships.
- Harmful duplicate aliases.
- Unknown document types.
- Invalid dates.
- Missing summaries.

Validation runs locally, in CI, and before deployment.

## 14. Controlled Values

### Status

- `draft`
- `active`
- `accepted`
- `superseded`
- `historical`
- `deprecated`

### Maturity

- `observation`
- `hypothesis`
- `candidate`
- `validated`
- `core`
- `deprecated`

### Confidence

- `low`
- `medium`
- `high`
- `not_applicable`

## 15. Website Requirements

The initial site must:

- Build as a static site.
- Render Markdown and MDX.
- Support dark and light themes.
- Provide responsive navigation.
- Provide basic full-text search.
- Display canonical metadata.
- Generate index pages.
- Clearly label status, maturity, and confidence.
- Support Mermaid diagrams.
- Provide permanent URLs.
- Avoid duplicating canonical content.

## 16. Future Explorer Compatibility

The content architecture must support a future custom Explorer that can:

- Filter documents by metadata.
- Traverse graph relationships.
- Display related discoveries, counterexamples, and validation reports.
- Search aliases and official names.
- Show document evolution.
- Compare competing hypotheses.
- Distinguish canonical, historical, experimental, and deprecated knowledge.
- Support semantic search.
- Visualize patterns, primitives, and compositions.
- Generate cross-reference maps.

No Explorer feature should require migrating content out of Markdown.

## 17. Templates

Create reusable templates for:

- Discovery
- Specification
- Hypothesis
- Primitive
- Language Pattern
- Composition Pattern
- Research Question
- Validation Report
- Experiment
- Counterexample Record

Templates define structure only and must not invent content.

## 18. Automation and CI

Recommended scripts:

```text
npm run dev
npm run build
npm run validate
npm run generate:indexes
npm run generate:graph
npm run test
```

CI should:

1. Install dependencies.
2. Validate metadata.
3. Validate internal references.
4. Generate indexes.
5. Generate graph data.
6. Build the website.
7. Fail on structural errors.

## 19. Explicit Non-Goals

Do not:

- Define the ontology.
- Define primitives.
- Invent language patterns.
- Populate philosophical conclusions.
- Implement semantic search now.
- Implement a graph database now.
- Add a backend unless required.
- Generate large amounts of placeholder prose.
- Treat AI-generated content as accepted research.
- Resolve unanswered research questions.

## 20. Initial Success Criteria

The scaffold is complete when:

- The repository structure exists.
- Astro Starlight builds successfully.
- Canonical Markdown remains portable.
- Templates exist.
- `CURRENT_STATE.md` exists.
- Front-matter validation works.
- IDs are checked for uniqueness.
- Generated indexes work.
- Basic search works.
- Internal cross-links resolve.
- CI validates and builds.
- No ontology, primitives, or patterns have been invented.

## 21. Builder Instruction

Assume the role of **Builder**.

Implement the repository, tooling, and publication architecture exactly as specified.

Do not contribute to the research itself.

When ambiguous:

1. Prefer the simplest reversible implementation.
2. Preserve Markdown portability.
3. Document the decision.
4. Avoid inventing domain content.
