import { g as getCollection } from './_astro_content_I-OF-3KV.mjs';

async function getAllTeamCategories() {
  try {
    const categories = await getCollection("team-categories");
    return categories.map((category) => ({
      ...category.data,
      slug: category.slug
    }));
  } catch (error) {
    console.error("Error loading team categories:", error);
    return [];
  }
}
async function getTeamCategoryBySlug(slug) {
  try {
    const categories = await getCollection("team-categories");
    const category = categories.find((category2) => category2.slug === slug);
    if (!category) {
      return null;
    }
    return {
      ...category.data,
      slug: category.slug
    };
  } catch (error) {
    console.error("Error loading team category:", error);
    return null;
  }
}

export { getAllTeamCategories as a, getTeamCategoryBySlug as g };
