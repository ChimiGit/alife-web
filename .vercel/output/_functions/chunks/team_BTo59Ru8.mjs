import { g as getCollection } from './_astro_content_DwzcOGpN.mjs';

async function getAllTeamMembers() {
  try {
    const team = await getCollection("team");
    return team.map((member) => ({
      ...member.data,
      slug: member.slug
    }));
  } catch (error) {
    return [];
  }
}
async function getTeamMemberBySlug(slug) {
  try {
    const team = await getCollection("team");
    const member = team.find((memberItem) => memberItem.slug === slug);
    if (!member) {
      return null;
    }
    return {
      ...member.data,
      slug: member.slug
    };
  } catch (error) {
    return null;
  }
}

export { getAllTeamMembers as a, getTeamMemberBySlug as g };
