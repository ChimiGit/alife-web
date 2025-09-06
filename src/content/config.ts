import { defineCollection, z } from 'astro:content';

const jobsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    type: z.string(),
    deadline: z.string(),
    department: z.string(),
    experience: z.string(),
  }),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    location: z.string(),
    image: z.string(),
    category: z.string(),
    order: z.number(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    email: z.string().optional(),
  }),
});

const teamCategoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const collections = {
  jobs: jobsCollection,
  team: teamCollection,
  'team-categories': teamCategoriesCollection,
  blog: blogCollection,
};

export default collections;
