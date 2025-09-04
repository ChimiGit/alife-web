import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

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

export function getAllJobs(): JobPosting[] {
  const jobsDirectory = join(process.cwd(), 'src/content/jobs');
  const jobFiles = readdirSync(jobsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
    .map(dirent => dirent.name);

  const jobs: JobPosting[] = [];

  jobFiles.forEach(filename => {
    const filePath = join(jobsDirectory, filename);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const slug = filename.replace(/\.md$/, '');

    jobs.push({
      title: data.title,
      location: data.location,
      type: data.type,
      deadline: data.deadline,
      department: data.department,
      experience: data.experience,
      content,
      slug,
    });
  });

  // Sort by deadline (earliest first)
  return jobs.sort(
    (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );
}

export function getJobBySlug(slug: string): JobPosting | null {
  try {
    const filePath = join(process.cwd(), 'src/content/jobs', `${slug}.md`);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      location: data.location,
      type: data.type,
      deadline: data.deadline,
      department: data.department,
      experience: data.experience,
      content,
      slug,
    };
  } catch (error) {
    return null;
  }
}
