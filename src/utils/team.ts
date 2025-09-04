import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  location: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  order: number;
  content: string;
  slug: string;
  category: string;
}

export function getAllTeamMembers(): TeamMember[] {
  const teamDirectory = join(process.cwd(), 'src/content/team');
  const teamFiles = readdirSync(teamDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
    .map(dirent => dirent.name);

  const teamMembers: TeamMember[] = [];

  teamFiles.forEach((filename) => {
    const filePath = join(teamDirectory, filename);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const slug = filename.replace(/\.md$/, '');

    teamMembers.push({
      name: data.name,
      title: data.title,
      image: data.image,
      bio: data.bio,
      location: data.location,
      linkedin: data.linkedin,
      twitter: data.twitter,
      email: data.email,
      order: data.order,
      content,
      slug,
      category: data.category || 'executives'
    });
  });

  // Sort by order field
  return teamMembers.sort((a, b) => a.order - b.order);
}

export function getTeamMemberBySlug(slug: string): TeamMember | null {
  try {
    const filePath = join(process.cwd(), 'src/content/team', `${slug}.md`);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      name: data.name,
      title: data.title,
      image: data.image,
      bio: data.bio,
      location: data.location,
      linkedin: data.linkedin,
      twitter: data.twitter,
      email: data.email,
      order: data.order,
      content,
      slug,
      category: data.category || 'executives'
    };
  } catch (error) {
    return null;
  }
}
