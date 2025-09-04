import { getCollection } from 'astro:content';

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
    const jobs = await getCollection('jobs');
    return jobs.map((job) => ({
      ...job.data,
      content: job.body,
      slug: job.slug,
    }));
  } catch (error) {
    console.error('Error loading jobs:', error);
    return [];
  }
}

export async function getJobBySlug(slug: string): Promise<JobPosting | null> {
  try {
    const jobs = await getCollection('jobs');
    const job = jobs.find((job) => job.slug === slug);
    
    if (!job) {
      return null;
    }

    return {
      ...job.data,
      content: job.body,
      slug: job.slug,
    };
  } catch (error) {
    console.error('Error loading job:', error);
    return null;
  }
}
