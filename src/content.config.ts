import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const canonicalFields = z.object({
  id: z.string().optional(),
  document_type: z.string().optional(),
  version: z.union([z.string(), z.number()]).optional(),
  status: z.enum(['draft', 'active', 'accepted', 'superseded', 'historical', 'deprecated']).optional(),
  maturity: z.enum(['observation', 'hypothesis', 'candidate', 'validated', 'core', 'deprecated']).optional(),
  confidence: z.union([
    z.number().int().min(1).max(5),
    z.enum(['low', 'medium', 'high', 'not_applicable'])
  ]).optional(),
  created: z.coerce.date().optional(),
  updated: z.coerce.date().optional(),
  authors: z.array(z.string()).default([]),
  summary: z.string().optional(),
  aliases: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  dependencies: z.array(z.string()).default([]),
  related: z.array(z.string()).default([]),
  supporting_discoveries: z.array(z.string()).default([]),
  supporting_experiments: z.array(z.string()).default([]),
  supporting_hypotheses: z.array(z.string()).default([]),
  supersedes: z.array(z.string()).default([]),
  superseded_by: z.array(z.string()).default([])
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: canonicalFields })
  })
};
