// eslint-disable-next-line import/no-unresolved
import { getCollection } from 'astro:content';

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  location: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  order: number;
  content: string;
  slug: string;
  category: string;
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  try {
    const teamCollection = await getCollection('team');

    const teamMembers: TeamMember[] = teamCollection.map(member => ({
      name: member.data.name,
      title: member.data.title,
      image: member.data.image,
      bio: member.data.bio,
      location: member.data.location,
      linkedin: member.data.linkedin,
      twitter: member.data.twitter,
      email: member.data.email,
      order: member.data.order,
      content: member.body || '',
      slug: member.id,
      category: member.data.category || 'executives',
    }));

    // Sort by order field
    return teamMembers.sort((a, b) => a.order - b.order);
  } catch (error) {
    // Error loading team members
    return [];
  }
}

export async function getTeamMemberBySlug(
  slug: string
): Promise<TeamMember | null> {
  try {
    const teamCollection = await getCollection('team');
    const memberEntry = teamCollection.find(member => member.id === slug);

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
      content: memberEntry.body || '',
      slug: memberEntry.id,
      category: memberEntry.data.category || 'executives',
    };
  } catch (error) {
    // Error loading team member
    return null;
  }
}
