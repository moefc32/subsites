import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({
        pattern: '**/[^_]*.{md,mdx}',
        base: './src/content',
    }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        hook: z.string().optional(),
        image: z.string().optional(),
    }),
});

export const collections = { blog };
