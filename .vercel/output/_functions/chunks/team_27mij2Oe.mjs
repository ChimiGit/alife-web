import { g as getCollection } from './_astro_content_DTPmOkcd.mjs';

async function getAllTeamMembers() {
  try {
    const teamCollection = await getCollection("team");
    const teamMembers = teamCollection.map((member) => ({
      name: member.data.name,
      title: member.data.title,
      image: member.data.image,
      bio: member.data.bio,
      location: member.data.location,
      linkedin: member.data.linkedin,
      twitter: member.data.twitter,
      email: member.data.email,
      order: member.data.order,
      content: member.body || "",
      slug: member.id,
      category: member.data.category || "executives"
    }));
    return teamMembers.sort((a, b) => a.order - b.order);
  } catch (error) {
    return [];
  }
}
async function getTeamMemberBySlug(slug) {
  try {
    const teamCollection = await getCollection("team");
    const memberEntry = teamCollection.find((member) => member.id === slug);
    if (!memberEntry) {
      return null;
    }
    return {
      name: memberEntry.data.name,
      title: memberEntry.data.title,
      image: memberEntry.data.image,
      bio: memberEntry.data.bio,
      location: memberEntry.data.location,
      linkedin: memberEntry.data.linkedin,
      twitter: memberEntry.data.twitter,
      email: memberEntry.data.email,
      order: memberEntry.data.order,
      content: memberEntry.body || "",
      slug: memberEntry.id,
      category: memberEntry.data.category || "executives"
    };
  } catch (error) {
    return null;
  }
}

export { getAllTeamMembers as a, getTeamMemberBySlug as g };
