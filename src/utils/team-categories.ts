import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface TeamCategory {
  slug: string;
  title: string;
  description: string;
  order: number;
  content: string;
}

export function getAllTeamCategories(): TeamCategory[] {
  const categoriesDirectory = path.join(
    process.cwd(),
    'src/content/team-categories'
  );

  if (!fs.existsSync(categoriesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(categoriesDirectory);
  const categories = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(categoriesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        order: data.order || 999,
        content: content.trim(),
      };
    })
    .sort((a, b) => a.order - b.order);

  return categories;
}

export function getTeamCategoryBySlug(slug: string): TeamCategory | null {
  try {
    const fullPath = path.join(
      process.cwd(),
      'src/content/team-categories',
      `${slug}.md`
    );

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      order: data.order || 999,
      content: content.trim(),
    };
  } catch (error) {
    console.error(`Error reading team category ${slug}:`, error);
    return null;
  }
}
