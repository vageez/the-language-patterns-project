---
title: Research protocol
description: The lifecycle, evidence rules, confidence model, and promotion criteria used by the project.
---

The research protocol keeps provisional work separate from accepted specification while making the full evidence chain navigable.

## Lifecycle

| Stage | Canonical prefix | Purpose | Promotion test |
| --- | --- | --- | --- |
| Observation | `O-0001` | Record an empirical or personal signal without claiming an explanation. | The observation raises a clear, researchable uncertainty. |
| Question | `RQ-0001` | State an unresolved question precisely. | A falsifiable answer can be proposed. |
| Hypothesis | `H-0001` | Propose an explanation and predictions. | Evidence and counterevidence can be collected. |
| Experiment | `EXP-0001` | Test a hypothesis against a documented method and corpus. | Results are reproducible and limitations are explicit. |
| Discovery | `D-0001` | Record a validated finding. | Review confirms sufficient evidence and counterexample handling. |
| Specification | Type-specific | Publish stable accepted knowledge. | One or more accepted discoveries support the change. |

Promotion never erases the earlier artifact. Each stage remains available as provenance.

## Evidence requirements

Research artifacts must distinguish supporting evidence, counterevidence, interpretation, and unresolved limitations. Hypotheses and experiments should cite entries in the [Corpus](../corpus/) rather than embedding an undocumented sample.

## Counterexample requirements

A hypothesis must state what would falsify or materially weaken it. Experiments and discoveries must report counterexamples even when they do not overturn the current conclusion.

## Confidence

New research artifacts use a five-point confidence score:

1. Initial signal
2. Plausible
3. Supported
4. Strongly supported
5. Repeatedly validated

Confidence describes the current evidence, not the importance of the idea. Existing documents using the legacy labels `low`, `medium`, `high`, or `not_applicable` remain valid during migration.

## Required global metadata

Every canonical artifact includes an ID, document type, status, confidence, creation date, update date, summary, and typed relationships. Specification artifacts additionally list their supporting discoveries, experiments, and hypotheses.

Use the repository's `templates/` files when opening a new canonical artifact.
