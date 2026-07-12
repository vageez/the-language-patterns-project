# The Language Patterns Project

This repository contains the canonical Markdown, research scaffolding, validation tools, generated indexes, relationship graph, and Astro Starlight documentation application for The Language Patterns Project.

## Requirements

- Node.js 20 or newer (Node.js 22 is used in CI)
- npm

## Development

```sh
npm install
npm run dev
```

The default local base path matches GitHub Pages, so the site is available at `http://localhost:4321/the-language-patterns-project/`. Set `BASE_PATH=/` when testing a root-domain deployment.

Useful commands:

- `npm run validate` checks canonical metadata, IDs, controlled values, aliases, dates, and relationships.
- `npm run generate:indexes` builds derived JSON and catalog pages.
- `npm run generate:graph` builds the machine-readable relationship graph.
- `npm run test` validates content and runs Astro’s type/content checks.
- `npm run build` validates, generates derived artifacts, and creates the static site.

Canonical website content lives in `src/content/docs/`. Generated artifacts under `generated/` and generated pages under `src/content/docs/explore/` are projections and must not be edited as independent sources.

Do not add ontology, primitives, patterns, or research conclusions as scaffolding. New canonical content must follow the contribution process and use a permanent ID.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy-pages.yml` and publish the static site to:

`https://vageez.github.io/the-language-patterns-project/`

In the repository’s **Settings → Pages** screen, set **Source** to **GitHub Actions** if it is not selected automatically. When moving to a dedicated domain, set `SITE_URL` and `BASE_PATH` in the deployment workflow and configure the domain in GitHub Pages.
