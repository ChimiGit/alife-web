import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

function getAllTeamMembers() {
  const teamDirectory = join(process.cwd(), "src/content/team");
  const teamFiles = readdirSync(teamDirectory, { withFileTypes: true }).filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md")).map((dirent) => dirent.name);
  const teamMembers = [];
  teamFiles.forEach((filename) => {
    const filePath = join(teamDirectory, filename);
    const fileContents = readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const slug = filename.replace(/\.md$/, "");
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
      category: data.category || "executives"
    });
  });
  return teamMembers.sort((a, b) => a.order - b.order);
}
function getTeamMemberBySlug(slug) {
  try {
    const filePath = join(process.cwd(), "src/content/team", `${slug}.md`);
    const fileContents = readFileSync(filePath, "utf8");
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
      category: data.category || "executives"
    };
  } catch (error) {
    return null;
  }
}

export { getAllTeamMembers as a, getTeamMemberBySlug as g };
