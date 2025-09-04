import { getCollection } from 'astro:content';

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  location: string;
  image: string;
  category: string;
  slug: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  try {
    const team = await getCollection('team');
    return team.map((member) => ({
      ...member.data,
      slug: member.slug,
    }));
  } catch (error) {
    console.error('Error loading team members:', error);
    return [];
  }
}

export async function getTeamMemberBySlug(
  slug: string
): Promise<TeamMember | null> {
  try {
    const team = await getCollection('team');
    const member = team.find((member) => member.slug === slug);
    
    if (!member) {
      return null;
    }

    return {
      ...member.data,
      slug: member.slug,
    };
  } catch (error) {
    console.error('Error loading team member:', error);
    return null;
  }
}
