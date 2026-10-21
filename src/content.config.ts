import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const categories = defineCollection({
  loader: glob({ base: "./src/content/categories", pattern: "*.json" }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().nonnegative(),
  }),
});

const items = defineCollection({
  loader: glob({ base: "./src/content/items", pattern: "**/*.json" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    content: z.string().min(1),
    category: reference("categories"),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = { categories, items };
