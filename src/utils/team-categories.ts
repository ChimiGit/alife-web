export interface TeamCategory {
  slug: string;
  title: string;
  description: string;
  order: number;
  content: string;
}

export async function getAllTeamCategories(): Promise<TeamCategory[]> {
  try {
    // Temporarily return empty array while content collections are disabled
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
    // Temporarily return null while content collections are disabled
    return null;
  } catch (error) {
    // Error loading team category
    return null;
  }
}
