---
title: Contributing
id: SPEC-0011
document_type: specification
version: 0.1
status: draft
maturity: observation
confidence: not_applicable
created: 2026-07-12
updated: 2026-07-19
authors: []
summary: The interim research, proposal, review, and pull request workflow for contributing to the project.
aliases: []
tags: [project, contributing]
dependencies: []
related: [SPEC-0004, SPEC-0006]
supersedes: []
superseded_by: []
---

This process is provisional while the governance model is being adopted. It governs current contributions without turning workflow decisions into research conclusions.

## Choose the right artifact

Begin with the earliest honest stage in the [research lifecycle](../../research/protocol/). Record a signal as an observation, an uncertainty as a question, and an explanatory claim as a hypothesis. Do not open a specification change when the supporting research does not yet exist.

## Proposal lifecycle

1. Create the artifact from the matching file in `templates/`.
2. Reserve a permanent, zero-padded canonical ID.
3. Add the required metadata and typed references.
4. Separate evidence, counterevidence, interpretation, and limitations.
5. Request review.
6. Promote the artifact only when the review criteria for its next stage are met.

## Pull request workflow

Keep canonical content in portable Markdown or MDX under `src/content/docs/`. Before opening a pull request, run:

```sh
npm run validate
npm run generate
npm run build
```

Generated indexes and relationship graphs are derived from front matter. Change source metadata instead of editing generated data by hand.

## Evidence and review

Reviewers should verify that claims cite inspectable corpus evidence, counterexamples are preserved, confidence matches the evidence, relationships resolve to canonical IDs, and promotion does not erase the historical research record.

A review may improve wording or metadata without endorsing the claim. Acceptance and promotion must be explicit.
