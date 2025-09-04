// eslint-disable-next-line import/no-unresolved
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
    const jobsCollection = await getCollection('jobs');

    const jobs: JobPosting[] = jobsCollection.map(job => ({
      title: job.data.title,
      location: job.data.location,
      type: job.data.type,
      deadline: job.data.deadline,
      department: job.data.department,
      experience: job.data.experience,
      content: job.body || '',
      slug: job.id,
    }));

    // Sort by deadline (earliest first)
    return jobs.sort(
      (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
    );
  } catch (error) {
    // Error loading jobs
    return [];
  }
}

export async function getJobBySlug(slug: string): Promise<JobPosting | null> {
  try {
    const jobsCollection = await getCollection('jobs');
    const jobEntry = jobsCollection.find(job => job.id === slug);

    if (!jobEntry) {
      return null;
    }

    return {
      title: jobEntry.data.title,
      location: jobEntry.data.location,
      type: jobEntry.data.type,
      deadline: jobEntry.data.deadline,
      department: jobEntry.data.department,
      experience: jobEntry.data.experience,
      content: jobEntry.body || '',
      slug: jobEntry.id,
    };
  } catch (error) {
    // Error loading job
    return null;
  }
}
