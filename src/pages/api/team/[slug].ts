import type { APIRoute } from 'astro';
import { getTeamMemberBySlug } from '../../../utils/team.ts';
// Ensure kleur is bundled
import 'kleur';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const { slug } = params;

    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const member = await getTeamMemberBySlug(slug);

    if (!member) {
      return new Response(JSON.stringify({ error: 'Team member not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(
      JSON.stringify({
        name: member.name,
        title: member.title,
        image: member.image,
        location: member.location,
        bio: member.bio,
        linkedin: member.linkedin,
        twitter: member.twitter,
        email: member.email,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
