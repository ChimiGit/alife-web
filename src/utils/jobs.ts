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
    // Temporarily return empty array while content collections are disabled
    return [];
  } catch (error) {
    // Error loading jobs
    return [];
  }
}

export async function getJobBySlug(_slug: string): Promise<JobPosting | null> {
  try {
    // Temporarily return null while content collections are disabled
    return null;
  } catch (error) {
    // Error loading job
    return null;
  }
}
