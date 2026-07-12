# The Language Patterns Project

# Application Design Specification
**Version:** 0.1  
**Status:** Draft  
**Application:** Documentation Website and Future Language Patterns Explorer

## 1. Product Vision

The application is the public and working interface to **The Language Patterns Project**.

It should allow a visitor to:

- Understand the project.
- Navigate the canonical specification.
- Discover patterns, primitives, hypotheses, and research.
- See how concepts relate.
- Distinguish accepted knowledge from active investigation.
- Follow the history of a concept.
- Search using formal names, technical names, plain-language names, aliases, phrases, or canonical IDs.

The initial application is a documentation website.

The long-term application is a **Language Patterns Explorer** built on the same canonical Markdown content.

## 2. Design Principle

> The website is a view of the knowledge system, not the knowledge system itself.

The application must never become the only place where structure or relationships exist.

All canonical data must remain recoverable from Markdown and metadata.

## 3. Primary Users

### New Visitor

Needs to understand:

- What the project is.
- Why it exists.
- How to begin.
- Which concepts are established versus experimental.

### Research Contributor

Needs to:

- Find active hypotheses.
- Review related discoveries.
- Locate counterexamples.
- Understand validation status.
- Follow contribution and methodology rules.

### Technical Implementer

Needs to:

- Locate canonical IDs.
- Inspect machine-readable metadata.
- Understand dependencies.
- Use generated indexes and graph data.

### Educator or General Reader

Needs:

- Plain-language names.
- Accessible explanations.
- Examples.
- Progressive disclosure of complexity.

## 4. Information Architecture

Primary navigation:

1. Start Here
2. Project
3. Current State
4. Specifications
5. Discoveries
6. Primitives
7. Patterns
8. Compositions
9. Validation
10. Research
11. Explore
12. Glossary

### Start Here

- Introduction
- Project vision
- How to read the specification
- Status and maturity legend
- Current milestone

### Project

- Manifesto
- Constitution
- Governance
- Collaboration Model
- Methodology
- Design Philosophy
- Contributing
- Versioning

### Explore

Initial release:

- Generated indexes
- Search
- Browse by type
- Browse by status
- Browse by maturity

Future:

- Filtered catalog
- Relationship graph
- Hypothesis comparison
- Semantic discovery

## 5. Page Types

### Specification Page

Displays:

- Title
- Canonical ID
- Version
- Status
- Summary
- Dependencies
- Related documents
- Main content
- Referenced by
- Change history

### Discovery Page

Displays:

- Discovery ID
- Date
- Question
- Observation
- Hypothesis
- Evidence
- Counterexamples
- Outcome
- Confidence
- Related specifications

### Primitive Page

Displays:

- Three names where applicable
- Definition
- Primitive status
- Semantic role
- Allowed relationships
- Examples
- Counterexamples
- Dependencies
- Used by patterns
- Validation history

### Pattern Page

Displays:

- Academic name
- Engineering name
- Plain-language name
- Canonical ID
- Intent
- Semantic form
- Graph form
- Grammar realizations
- Examples
- Counterexamples
- Related primitives
- Related patterns
- Validation status
- Discovery history

### Validation Page

Displays:

- Target concept
- Method
- Evidence
- Counterexamples
- Result
- Confidence
- Limitations
- Related experiments

### Current State Page

Displays:

- Current phase
- Current milestone
- Current focus
- Active threads
- Blockers
- Next steps
- Recently completed
- Last updated

## 6. Search Experience

### Search Inputs

A user may search by:

- Concept name
- Phrase
- Canonical ID
- Academic name
- Engineering name
- Plain-language name
- Alias
- Tag
- Related concept ID

### Search Result Card

Each result should display:

- Title
- Canonical ID
- Document type
- Summary or snippet
- Status
- Maturity
- Confidence
- Matching alias when relevant
- Updated date

### Search Behaviors

- Exact canonical ID matches appear first.
- Exact title matches rank highly.
- Official names rank above aliases.
- Aliases remain searchable.
- Deprecated and superseded content is clearly labeled.
- Search results may be filtered without rerunning the query.
- Active and accepted content should not be visually conflated.

### Structured Filters

Future Explorer filters:

- Document type
- Status
- Maturity
- Confidence
- Tag
- Created date
- Updated date
- Related primitive
- Related pattern
- Has counterexamples
- Has validation reports
- Superseded or current

## 7. Relationship Exploration

A concept page should support relationship exploration.

### Initial View

Display textual sections:

- Depends on
- Related to
- Referenced by
- Validated by
- Challenged by
- Counterexamples
- Supersedes
- Superseded by
- Used by

### Future Graph View

Graph interactions should allow:

- Pan and zoom.
- Expand one relationship level at a time.
- Filter edge types.
- Select a node to open its detail panel.
- Distinguish document types visually.
- Distinguish maturity or status.
- Avoid overwhelming users with the full graph by default.

The graph should be a navigation aid, not a replacement for readable content.

## 8. Visual Design Principles

### Tone

- Scholarly but approachable.
- Precise but not sterile.
- Calm, spacious, and readable.
- More like a technical standard or research journal than a marketing website.

### Typography

- Prioritize long-form readability.
- Use a clear sans-serif for navigation and metadata.
- Use a highly readable body typeface.
- Use monospaced typography for IDs, schemas, and machine forms.

### Layout

- Persistent or easily accessible sidebar.
- Main reading column with controlled width.
- Optional right-side table of contents on wide screens.
- Metadata grouped near the title.
- Related content shown after the main body.
- Mobile navigation must remain simple.

### Status Indicators

Status, maturity, and confidence must be visible but not dominant.

Use consistent badges or labels.

Do not rely on color alone.

### Diagrams

Support:

- Mermaid
- Relationship diagrams
- Pattern graphs
- Architecture diagrams

Diagrams must have textual equivalents or descriptions.

## 9. Content Presentation

### Progressive Disclosure

Pages should present information in layers:

1. Plain-language summary
2. Canonical definition
3. Formal representation
4. Examples
5. Evidence and validation
6. History and related research

### Three-Name Presentation

Pattern pages should show all three names together:

```text
Academic: Reference Resolution Pattern
Engineering: Pointer Resolution Pattern
Plain Language: Explaining What "This" Means
```

The page title may use the academic name, with the other two immediately visible.

## 10. Homepage Design

The homepage should answer:

1. What is this?
2. Why does it exist?
3. What phase is it in?
4. How should I begin?
5. What can I explore?

Suggested sections:

- Hero statement
- Project mission
- Current project status
- Core research question
- Start here links
- Recently updated documents
- Active hypotheses
- Browse by content type

Avoid presenting unvalidated hypotheses as established facts.

## 11. Accessibility

The application must:

- Use semantic HTML.
- Support keyboard navigation.
- Provide visible focus indicators.
- Maintain sufficient contrast.
- Label search and filter controls clearly.
- Announce result count changes.
- Ensure graph exploration has a non-graph alternative.
- Avoid conveying status by color alone.
- Support reduced motion.
- Preserve heading hierarchy.

## 12. Responsive Behavior

### Desktop

- Sidebar navigation.
- Main content.
- Optional right table of contents.
- Rich metadata and related panels.

### Tablet

- Collapsible sidebar.
- Main content.
- Reduced secondary panels.

### Mobile

- Single-column reading.
- Drawer navigation.
- Compact metadata.
- Filters in a modal or drawer.
- Graph view optional; list view required.

## 13. Application Phases

### Phase A — Documentation Foundation

- Astro Starlight
- Markdown rendering
- Sidebar navigation
- Basic search
- Metadata display
- Generated indexes
- Dark and light themes

### Phase B — Structured Catalog

- Filterable catalogs
- Reverse references
- Related content
- Status and maturity browsing
- Alias-aware search

### Phase C — Explorer

- Relationship graph
- Concept comparison
- Validation and counterexample views
- Research thread views
- Document evolution timeline

### Phase D — Semantic Discovery

- Semantic search
- Natural-language queries
- Suggested related concepts
- Machine-assisted retrieval with explicit source grounding

## 14. Non-Goals for Initial Application

The first release should not:

- Become a full knowledge graph editor.
- Require a database.
- Include authentication.
- Include collaborative editing.
- Implement AI-generated summaries as canonical content.
- Hide canonical Markdown behind a proprietary CMS.
- Treat graph visualization as primary navigation.
- Implement semantic search prematurely.

## 15. Design Consistency Rules

1. Every canonical page shows its ID.
2. Every status-bearing page shows status.
3. Every hypothesis shows confidence.
4. Every page distinguishes canonical content from historical discussion.
5. Every related-content panel is generated from metadata.
6. Search, filters, indexes, and graph views use the same metadata source.
7. Aliases are searchable but do not replace official names.
8. Superseded content remains accessible and visibly labeled.
9. Plain-language explanations appear before highly formal representations.
10. The application never hides uncertainty.

## 16. Future Explorer Architecture

Suggested flow:

```text
Markdown
→ Front-matter parser
→ Validation
→ Normalized content index
→ Relationship graph
→ Documentation site
→ Explorer
→ Semantic search index
```

Potential generated artifacts:

```text
generated/indexes/documents.json
generated/indexes/aliases.json
generated/indexes/tags.json
generated/graph/relationships.json
generated/search/full-text.json
generated/search/semantic.json
```

The Explorer should be an additional application layer, not a replacement for the documentation site.

## 17. Success Criteria

The application design is successful when:

- A first-time visitor understands the project.
- A contributor can find active work.
- A researcher can trace a concept to discoveries and validation.
- A technical user can find content by canonical ID.
- Search works across official names and aliases.
- Status and uncertainty are always visible.
- The site can evolve into a graph and semantic Explorer without migrating canonical content.
