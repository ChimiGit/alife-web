import { marked } from 'marked';
import { g as getJobBySlug } from '../../../chunks/jobs_LBJzzek6.mjs';
import '../../../chunks/index_t2PvLSUE.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ params }) => {
  try {
    const { slug } = params;
    if (!slug) {
      return new Response(JSON.stringify({ error: "Slug is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const job = await getJobBySlug(slug);
    if (!job) {
      return new Response(JSON.stringify({ error: "Job not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const htmlContent = job.content ? marked(job.content) : "";
    return new Response(
      JSON.stringify({
        title: job.title,
        location: job.location,
        type: job.type,
        deadline: job.deadline,
        department: job.department,
        experience: job.experience,
        htmlContent
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
