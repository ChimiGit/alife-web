import { g as getCollection } from './_astro_content_DTPmOkcd.mjs';

async function getAllTeamCategories() {
  try {
    const categoriesCollection = await getCollection("team-categories");
    const categories = categoriesCollection.map((category) => ({
      slug: category.id,
      title: category.data.title || "",
      description: category.data.description || "",
      order: category.data.order || 999,
      content: category.body?.trim() || ""
    }));
    return categories.sort((a, b) => a.order - b.order);
  } catch (error) {
    return [];
  }
}
async function getTeamCategoryBySlug(slug) {
  try {
    const categoriesCollection = await getCollection("team-categories");
    const categoryEntry = categoriesCollection.find(
      (category) => category.id === slug
    );
    if (!categoryEntry) {
      return null;
    }
    return {
      slug: categoryEntry.id,
      title: categoryEntry.data.title || "",
      description: categoryEntry.data.description || "",
      order: categoryEntry.data.order || 999,
      content: categoryEntry.body?.trim() || ""
    };
  } catch (error) {
    return null;
  }
}

export { getAllTeamCategories as a, getTeamCategoryBySlug as g };
