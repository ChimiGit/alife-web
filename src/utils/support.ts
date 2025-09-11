import { getCollection } from 'astro:content';

export interface SupportCategory {
  title: string;
  slug: string;
  order: number;
  description: string;
  content: string;
}

export interface SupportContent {
  title: string;
  slug: string;
  content: string;
}

export interface SupportTeamMember {
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
  order: number;
}

export async function getAllSupportCategories(): Promise<SupportCategory[]> {
  try {
    const supportCategories = await getCollection('support-categories');

    return supportCategories
      .map(category => ({
        title: category.data.title,
        slug: category.id.replace('.md', ''), // Remove .md extension
        order: category.data.order,
        description: category.data.description,
        content: category.body || '',
      }))
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    return [];
  }
}

export async function getSupportContentBySlug(
  slug: string
): Promise<SupportContent | null> {
  try {
    const supportContent = await getCollection('support-content');
    const content = supportContent.find(item => item.id === slug);

    if (!content) {
      return null;
    }

    return {
      title: content.data.title,
      slug: content.id,
      content: content.body || '',
    };
  } catch (error) {
    return null;
  }
}

export async function getAllSupportContent(): Promise<SupportContent[]> {
  try {
    const supportContent = await getCollection('support-content');
    return supportContent.map(content => ({
      title: content.data.title,
      slug: content.id,
      content: content.body || '',
    }));
  } catch (error) {
    return [];
  }
}

export async function getAllSupportTeamMembers(): Promise<SupportTeamMember[]> {
  try {
    const supportContent = await getCollection('support-content');

    return supportContent.map(member => ({
      name: member.data.name,
      title: member.data.title,
      bio: member.data.bio,
      location: member.data.location,
      image: member.data.image,
      category: member.data.category,
      slug: member.id.replace('.md', ''), // Remove .md extension
      order: member.data.order,
      linkedin: member.data.linkedin,
      twitter: member.data.twitter,
      email: member.data.email,
    }));
  } catch (error) {
    return [];
  }
}
