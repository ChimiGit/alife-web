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
    // Temporarily return empty array while content collections are disabled
    return [];
  } catch (error) {
    // Error loading team members
    return [];
  }
}

export async function getTeamMemberBySlug(
  _slug: string
): Promise<TeamMember | null> {
  try {
    // Temporarily return null while content collections are disabled
    return null;
  } catch (error) {
    // Error loading team member
    return null;
  }
}
