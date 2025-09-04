import type { APIRoute } from 'astro';
import { marked } from 'marked';
import { getJobBySlug } from '../../../utils/jobs.ts';
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

    const job = await getJobBySlug(slug);

    if (!job) {
      return new Response(JSON.stringify({ error: 'Job not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Convert markdown to HTML (handle empty content)
    const htmlContent = job.content ? marked(job.content) : '';

    return new Response(
      JSON.stringify({
        title: job.title,
        location: job.location,
        type: job.type,
        deadline: job.deadline,
        department: job.department,
        experience: job.experience,
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
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
