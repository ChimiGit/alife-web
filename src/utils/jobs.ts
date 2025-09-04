// Temporarily disable content collections
// eslint-disable-next-line import/no-unresolved
// import { getCollection } from 'astro:content';

export interface JobPosting {
  title: string;
  location: string;
  type: string;
  deadline: string;
  department: string;
  experience: string;
  content: string;
  slug: string;
}

export async function getAllJobs(): Promise<JobPosting[]> {
  try {
    // Temporarily return empty array
    return [];
  } catch (error) {
    // Error loading jobs
    return [];
  }
}

export async function getJobBySlug(_slug: string): Promise<JobPosting | null> {
  try {
    // Temporarily return null
    return null;
  } catch (error) {
    // Error loading job
    return null;
  }
}
