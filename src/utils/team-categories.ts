import { getCollection } from 'astro:content';

export interface TeamCategory {
  title: string;
  description: string;
  order: number;
  slug: string;
}

export async function getAllTeamCategories(): Promise<TeamCategory[]> {
  try {
    const categories = await getCollection('team-categories');
    return categories.map((category) => ({
      ...category.data,
      slug: category.slug,
    }));
  } catch (error) {
    console.error('Error loading team categories:', error);
    return [];
  }
}

export async function getTeamCategoryBySlug(
  slug: string
): Promise<TeamCategory | null> {
  try {
    const categories = await getCollection('team-categories');
    const category = categories.find((category) => category.slug === slug);
    
    if (!category) {
      return null;
    }

    return {
      ...category.data,
      slug: category.slug,
    };
  } catch (error) {
    console.error('Error loading team category:', error);
    return null;
  }
}
