// eslint-disable-next-line import/no-unresolved
import { defineCollection, z } from 'astro:content';

// Define the schema for jobs
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

// Define the schema for team members
const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
    bio: z.string(),
    location: z.string(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    email: z.string().optional(),
    order: z.number(),
    category: z.string().default('executives'),
  }),
});

// Define the schema for team categories
const teamCategoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

// Export the collections
const collections = {
  jobs: jobsCollection,
  team: teamCollection,
  'team-categories': teamCategoriesCollection,
};

export default collections;
