import type { APIRoute } from 'astro';
import { marked } from 'marked';
import { getTeamCategoryBySlug } from '../../../utils/team-categories.ts';

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

    const category = await getTeamCategoryBySlug(slug);

    if (!category) {
      return new Response(
        JSON.stringify({ error: 'Team category not found' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const htmlContent = marked(category.content);

    return new Response(
      JSON.stringify({
        title: category.title,
        description: category.description,
        order: category.order,
        htmlContent,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
