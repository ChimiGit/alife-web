import { getCollection } from 'astro:content';

export async function getBlogCategories() {
  const blogCategories = await getCollection('blog-categories');

  // Sort by order
  return blogCategories.sort((a, b) => a.data.order - b.data.order);
}

export async function getBlogCategoryByTitle(title: string) {
  const blogCategories = await getCollection('blog-categories');
  return blogCategories.find(category => category.data.title === title);
}
