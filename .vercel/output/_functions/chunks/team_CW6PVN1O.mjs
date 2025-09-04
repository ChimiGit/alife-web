import { g as getCollection } from './_astro_content_D8G9zQUF.mjs';

async function getAllTeamMembers() {
  try {
    const team = await getCollection("team");
    return team.map((member) => ({
      ...member.data,
      slug: member.slug
    }));
  } catch (error) {
    console.error("Error loading team members:", error);
    return [];
  }
}
async function getTeamMemberBySlug(slug) {
  try {
    const team = await getCollection("team");
    const member = team.find((member2) => member2.slug === slug);
    if (!member) {
      return null;
    }
    return {
      ...member.data,
      slug: member.slug
    };
  } catch (error) {
    console.error("Error loading team member:", error);
    return null;
  }
}

export { getAllTeamMembers as a, getTeamMemberBySlug as g };
