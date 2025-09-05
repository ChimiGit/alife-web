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
    return jobs.map(job => ({
      ...job.data,
      content: job.body,
      slug: job.slug,
    }));
  } catch (error) {
    return [];
  }
}

export async function getJobBySlug(slug: string): Promise<JobPosting | null> {
  try {
    const jobs = await getCollection('jobs');
    const job = jobs.find(jobItem => jobItem.slug === slug);

    if (!job) {
      return null;
    }

    return {
      ...job.data,
      content: job.body,
      slug: job.slug,
    };
  } catch (error) {
    return null;
  }
}
