import { g as getCollection } from './_astro_content_DTPmOkcd.mjs';

async function getAllJobs() {
  try {
    const jobsCollection = await getCollection("jobs");
    const jobs = jobsCollection.map((job) => ({
      title: job.data.title,
      location: job.data.location,
      type: job.data.type,
      deadline: job.data.deadline,
      department: job.data.department,
      experience: job.data.experience,
      content: job.body || "",
      slug: job.id
    }));
    return jobs.sort(
      (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
    );
  } catch (error) {
    return [];
  }
}
async function getJobBySlug(slug) {
  try {
    const jobsCollection = await getCollection("jobs");
    const jobEntry = jobsCollection.find((job) => job.id === slug);
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
      content: jobEntry.body || "",
      slug: jobEntry.id
    };
  } catch (error) {
    return null;
  }
}

export { getAllJobs as a, getJobBySlug as g };
