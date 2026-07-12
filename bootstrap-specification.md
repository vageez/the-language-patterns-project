# Bootstrap Specification

## The Language Patterns Project

Version: 0.1
Status: Canonical
Audience: Repository Bootstrap / Codex

---

# Objective

Scaffold the repository architecture for **The Language Patterns Project**.

This task is **architectural only**.

Do **not** create ontology, primitives, language patterns, or research content.

The goal is to build the research system, not populate it.

---

# Guiding Principles

The repository is a living specification.

Documentation is generated from canonical specifications.

Research is evidence-driven.

Discoveries are preserved.

Current state is mutable.

Specifications are versioned.

---

# Required Repository Structure

```text
language-patterns/

CURRENT_STATE.md
README.md
LICENSE
CONTRIBUTING.md
CODE_OF_CONDUCT.md

docs/

specification/
    manifesto.md
    constitution.md
    governance.md
    collaboration-model.md
    methodology.md
    design-philosophy.md
    ontology.md
    glossary.md
    terminology.md
    versioning.md
    contributing.md

discoveries/
    README.md
    templates/

primitives/
    nodes/
    relationships/
    modifiers/
    constraints/

patterns/

compositions/

corpus/

validation/

research/

website/

tools/
```

---

# Create Templates

Create templates for:

Discovery

Primitive

Pattern

Composition

Specification

Validation Report

Research Proposal

Do not populate them with project content.

Only define reusable structure.

---

# Create CURRENT_STATE.md

Populate CURRENT_STATE.md with placeholder sections only.

Include:

Current Phase

Current Milestone

Accepted Decisions

Active Hypotheses

Open Questions

Research Threads

Blockers

Next Steps

Recently Completed

Last Updated

---

# Front Matter

Every specification should begin with YAML.

Example

```yaml
title:
id:
version:
status:
created:
updated:
authors:
dependencies:
related:
```

---

Every discovery should begin with

```yaml
title:
id:
date:
status:
confidence:
question:
```

---

# IDs

Reserve prefixes.

D-

Discovery

SPEC-

Specification

N-

Node

R-

Relationship

M-

Modifier

C-

Constraint

LP-

Language Pattern

CP-

Composition Pattern

VAL-

Validation

EXP-

Experiment

---

# Documentation Rules

Do not duplicate information.

Every document has one responsibility.

Every document links to related specifications.

No document should become excessively long.

---

# Website

Scaffold a documentation website.

Choose a documentation framework that:

Supports Markdown.

Supports versioning.

Supports search.

Supports diagrams.

Supports automatic navigation.

Do not create project content.

---

# Future Automation

Organize the repository so future tooling can:

Generate the website.

Generate indexes.

Generate relationship graphs.

Generate cross references.

Generate PDFs.

Generate books.

Generate APIs.

---

# Explicitly Do Not Do

Do not create ontology.

Do not define primitives.

Do not invent language patterns.

Do not generate philosophical content.

Do not infer missing research.

Do not create examples beyond placeholders.

---

# Success Criteria

When complete:

The repository structure exists.

Templates exist.

Documentation builds successfully.

Navigation works.

No research content has been invented.

The project is ready for research.
