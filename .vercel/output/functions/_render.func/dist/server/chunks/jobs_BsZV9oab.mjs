import { g as getCollection } from './_astro_content_DwzcOGpN.mjs';

async function getAllJobs() {
  try {
    const jobs = await getCollection("jobs");
    return jobs.map((job) => ({
      ...job.data,
      content: job.body,
      slug: job.slug
    }));
  } catch (error) {
    console.error("Error loading jobs:", error);
    return [];
  }
}
async function getJobBySlug(slug) {
  try {
    const jobs = await getCollection("jobs");
    const job = jobs.find((job2) => job2.slug === slug);
    if (!job) {
      return null;
    }
    return {
      ...job.data,
      content: job.body,
      slug: job.slug
    };
  } catch (error) {
    console.error("Error loading job:", error);
    return null;
  }
}

export { getAllJobs as a, getJobBySlug as g };
