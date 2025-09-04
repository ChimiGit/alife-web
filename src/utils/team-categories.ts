// Temporarily disable content collections
// eslint-disable-next-line import/no-unresolved
// import { getCollection } from 'astro:content';

export interface TeamCategory {
  title: string;
  description: string;
  slug: string;
}

export async function getAllTeamCategories(): Promise<TeamCategory[]> {
  try {
    // Temporarily return empty array
    return [];
  } catch (error) {
    // Error loading team categories
    return [];
  }
}

export async function getTeamCategoryBySlug(
  _slug: string
): Promise<TeamCategory | null> {
  try {
    // Temporarily return null
    return null;
  } catch (error) {
    // Error loading team category
    return null;
  }
}
