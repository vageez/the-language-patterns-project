# Contributing

The research process is still being formalized. Until the canonical contributing specification is accepted:

1. Keep canonical content in portable Markdown or MDX under `src/content/docs/`.
2. Use a template and reserve a permanent, zero-padded canonical ID.
3. Distinguish observations, hypotheses, evidence, counterexamples, and accepted specifications.
4. Do not silently rewrite historical discovery records.
5. Run `npm run validate`, `npm run generate`, and `npm run build` before opening a change.

Generated indexes and graph files are derived from front matter. Change their source metadata instead of editing them by hand.
