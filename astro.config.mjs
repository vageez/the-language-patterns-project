import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

const site = process.env.SITE_URL ?? 'https://vageez.github.io';
const base = process.env.BASE_PATH ?? '/the-language-patterns-project';

export default defineConfig({
  site,
  base,
  integrations: [
    mermaid({
      autoTheme: true,
      enableLog: false,
      mermaidConfig: { securityLevel: 'strict' }
    }),
    starlight({
      title: 'The Language Patterns Project',
      description: 'A living, evidence-driven specification for understanding recurring structures in language.',
      favicon: '/favicon.svg',
      logo: { src: './src/assets/logo.svg', replacesTitle: true },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/vageez/the-language-patterns-project' }],
      editLink: {
        baseUrl: 'https://github.com/vageez/the-language-patterns-project/edit/main/'
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro'
      },
      expressiveCode: { themes: ['github-light', 'github-dark'] },
      sidebar: [
        { label: 'Start Here', items: [
          { label: 'Introduction', slug: 'index' },
          { label: 'How to read this project', slug: 'start-here/how-to-read' },
          { label: 'Status & maturity', slug: 'start-here/status-and-maturity' }
        ]},
        { label: 'Project', items: [{ autogenerate: { directory: 'specification' } }] },
        { label: 'Current State', items: [{ label: 'Project state', slug: 'current-state' }] },
        { label: 'Discoveries', items: [{ autogenerate: { directory: 'discoveries' } }] },
        { label: 'Primitives', items: [{ autogenerate: { directory: 'primitives' } }] },
        { label: 'Patterns', items: [{ autogenerate: { directory: 'patterns' } }] },
        { label: 'Compositions', items: [{ autogenerate: { directory: 'compositions' } }] },
        { label: 'Validation', items: [{ autogenerate: { directory: 'validation' } }] },
        { label: 'Research', items: [{ autogenerate: { directory: 'research' } }] },
        { label: 'Explore', items: [{ autogenerate: { directory: 'explore' } }] },
        { label: 'Glossary', items: [{ label: 'Glossary', slug: 'specification/glossary' }] }
      ]
    })
  ]
});
