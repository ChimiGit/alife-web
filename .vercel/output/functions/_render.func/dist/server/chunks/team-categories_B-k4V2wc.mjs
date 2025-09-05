import { g as getCollection } from './_astro_content_BITFDy2J.mjs';

async function getAllTeamCategories() {
  try {
    const categories = await getCollection("team-categories");
    return categories.map((category) => ({
      ...category.data,
      slug: category.slug
    }));
  } catch (error) {
    return [];
  }
}
async function getTeamCategoryBySlug(slug) {
  try {
    const categories = await getCollection("team-categories");
    const category = categories.find(
      (categoryItem) => categoryItem.slug === slug
    );
    if (!category) {
      return null;
    }
    return {
      ...category.data,
      slug: category.slug
    };
  } catch (error) {
    return null;
  }
}

export { getAllTeamCategories as a, getTeamCategoryBySlug as g };
