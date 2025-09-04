// eslint-disable-next-line import/no-unresolved
import { getCollection } from 'astro:content';

export interface TeamCategory {
  slug: string;
  title: string;
  description: string;
  order: number;
  content: string;
}

export async function getAllTeamCategories(): Promise<TeamCategory[]> {
  try {
    const categoriesCollection = await getCollection('team-categories');

    const categories: TeamCategory[] = categoriesCollection.map(category => ({
      slug: category.id,
      title: category.data.title || '',
      description: category.data.description || '',
      order: category.data.order || 999,
      content: category.body?.trim() || '',
    }));

    return categories.sort((a, b) => a.order - b.order);
  } catch (error) {
    // Error loading team categories
    return [];
  }
}

export async function getTeamCategoryBySlug(
  slug: string
): Promise<TeamCategory | null> {
  try {
    const categoriesCollection = await getCollection('team-categories');
    const categoryEntry = categoriesCollection.find(
      category => category.id === slug
    );

    if (!categoryEntry) {
      return null;
    }

    return {
      slug: categoryEntry.id,
      title: categoryEntry.data.title || '',
      description: categoryEntry.data.description || '',
      order: categoryEntry.data.order || 999,
      content: categoryEntry.body?.trim() || '',
    };
  } catch (error) {
    // Error loading team category
    return null;
  }
}
