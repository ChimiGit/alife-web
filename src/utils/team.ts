// Temporarily disable content collections
// eslint-disable-next-line import/no-unresolved
// import { getCollection } from 'astro:content';

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  location: string;
  image: string;
  category: string;
  slug: string;
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  try {
    // Temporarily return empty array
    return [];
  } catch (error) {
    // Error loading team members
    return [];
  }
}

export async function getTeamMemberBySlug(_slug: string): Promise<TeamMember | null> {
  try {
    // Temporarily return null
    return null;
  } catch (error) {
    // Error loading team member
    return null;
  }
}
