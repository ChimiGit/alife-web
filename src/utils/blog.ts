import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface Blog {
  title: string;
  description: string;
  pubDate: string;
  author: string;
  content: string;
  slug: string;
  category: string;
  tags?: string[];
  featuredImage?: string;
}

function getAllBlogs(): Blog[] {
  const blogsDirectory = join(process.cwd(), 'src/content/blog');
  const blogFiles = readdirSync(blogsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
    .map(dirent => dirent.name);

  const blogs: Blog[] = blogFiles.map(filename => {
    const filePath = join(blogsDirectory, filename);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const slug = filename.replace(/\.md$/, '');

    return {
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      author: data.author,
      content,
      slug,
      category: data.category || 'General',
      tags: data.tags || [],
      featuredImage: data.featuredImage || '/assets/images/Blog Loading.png',
    };
  });

  // Sort by publication date (earliest first)
  return blogs.sort(
    (a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime()
  );
}

export function getBlogBySlug(slug: string): Blog | null {
  try {
    const filePath = join(process.cwd(), 'src/content/blog', `${slug}.md`);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      author: data.author,
      content,
      slug,
      category: data.category || 'General',
      tags: data.tags || [],
      featuredImage: data.featuredImage || '/assets/images/Blog Loading.png',
    };
  } catch (error) {
    return null;
  }
}

export function getBlogsByCategory(category: string): Blog[] {
  const allBlogs = getAllBlogs();
  return allBlogs.filter(
    blog => blog.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const allBlogs = getAllBlogs();
  const categories = [...new Set(allBlogs.map(blog => blog.category))];
  return categories.sort();
}

export default getAllBlogs;
