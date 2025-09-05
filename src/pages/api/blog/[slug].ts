import { marked } from 'marked';
import type { APIRoute } from 'astro';
import { getBlogBySlug } from '../../../utils/blog.ts';

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

    const blog = getBlogBySlug(slug);

    if (!blog) {
      return new Response(JSON.stringify({ error: 'Blog not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Convert markdown to HTML
    const htmlContent = marked(blog.content);

    return new Response(
      JSON.stringify({
        title: blog.title,
        description: blog.description,
        pubDate: blog.pubDate,
        author: blog.author,
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
