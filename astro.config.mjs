import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

const site = process.env.SITE_URL ?? 'https://vageez.github.io';
const base = process.env.BASE_PATH ?? '/the-language-patterns-project';
const socialImage = new URL(`${base.replace(/\/$/, '')}/og.png`, site).toString();

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
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: socialImage } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'The Language Patterns Project — a living, evidence-driven specification for recurring structures in language.' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: socialImage } }
      ],
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
        { label: 'Home', slug: 'index' },
        { label: 'Vision', slug: 'vision' },
        {
          label: 'Research',
          items: [
            { label: 'Research overview', slug: 'research' },
            { label: 'Research protocol', slug: 'research/protocol' },
            { label: 'Observations', slug: 'research/observations' },
            { label: 'Questions', slug: 'research/questions' },
            { label: 'Hypotheses', slug: 'research/hypotheses' },
            { label: 'Experiments', slug: 'research/experiments' },
            { label: 'Discoveries', slug: 'discoveries' },
            { label: 'Research journal', slug: 'research/journal' }
          ]
        },
        {
          label: 'Specification',
          items: [
            { label: 'Specification overview', slug: 'specification' },
            {
              label: 'Foundations',
              items: [
                { label: 'Foundations overview', slug: 'specification/foundations' },
                { label: 'Manifesto', slug: 'specification/manifesto' },
                { label: 'Constitution', slug: 'specification/constitution' },
                { label: 'Design philosophy', slug: 'specification/design-philosophy' },
                { label: 'Methodology', slug: 'specification/methodology' },
                { label: 'Governance', slug: 'specification/governance' },
                { label: 'Versioning', slug: 'specification/versioning' }
              ]
            },
            { label: 'Ontology', slug: 'specification/ontology' },
            { label: 'Primitive nodes', slug: 'specification/primitive-nodes' },
            { label: 'Primitive relationships', slug: 'specification/primitive-relationships' },
            { label: 'Primitive modifiers', slug: 'specification/primitive-modifiers' },
            { label: 'Language patterns', slug: 'patterns' }
          ]
        },
        { label: 'Corpus', slug: 'corpus' },
        { label: 'Glossary', slug: 'specification/glossary' },
        { label: 'Contribute', slug: 'specification/contributing' },
        { label: 'About', slug: 'about' }
      ]
    })
  ]
});
