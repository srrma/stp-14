// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    displayImage: z.string().optional(),
    thumbnailImage: z.string(),
    isFeatured: z.boolean().optional(), 
    softwareUsed: z.string(),
    imageCredit: z.string().optional(),
    date: z.date(),
    pdfFile: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};