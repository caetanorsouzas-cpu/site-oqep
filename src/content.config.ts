import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { topics } from './lib/topics';

// Posts do blog: uma pasta por post em src/content/blog/<endereço>/ com index.md e a capa.
const blog = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/blog', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      topics: z.array(z.enum(topics)).default([]),
      readingMinutes: z.number().int().positive(),
      wordpressUrl: z.string().url().optional(),
    }),
});

export const collections = { blog };
