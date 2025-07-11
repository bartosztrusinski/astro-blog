import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      cover: image().optional(),
    }),
});

export const collections = {
  blog,
};
