import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

function getAllJobs() {
  const jobsDirectory = join(process.cwd(), "src/content/jobs");
  const jobFiles = readdirSync(jobsDirectory, { withFileTypes: true }).filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md")).map((dirent) => dirent.name);
  const jobs = [];
  jobFiles.forEach((filename) => {
    const filePath = join(jobsDirectory, filename);
    const fileContents = readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const slug = filename.replace(/\.md$/, "");
    jobs.push({
      title: data.title,
      location: data.location,
      type: data.type,
      deadline: data.deadline,
      department: data.department,
      experience: data.experience,
      content,
      slug
    });
  });
  return jobs.sort(
    (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );
}
function getJobBySlug(slug) {
  try {
    const filePath = join(process.cwd(), "src/content/jobs", `${slug}.md`);
    const fileContents = readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      title: data.title,
      location: data.location,
      type: data.type,
      deadline: data.deadline,
      department: data.department,
      experience: data.experience,
      content,
      slug
    };
  } catch (error) {
    return null;
  }
}

export { getAllJobs as a, getJobBySlug as g };
