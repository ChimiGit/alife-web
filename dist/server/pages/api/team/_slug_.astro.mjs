import { marked } from 'marked';
import { g as getTeamMemberBySlug } from '../../../chunks/team_27mij2Oe.mjs';
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
    const member = await getTeamMemberBySlug(slug);
    if (!member) {
      return new Response(JSON.stringify({ error: "Team member not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const htmlContent = marked(member.content);
    return new Response(
      JSON.stringify({
        name: member.name,
        title: member.title,
        image: member.image,
        location: member.location,
        linkedin: member.linkedin,
        twitter: member.twitter,
        email: member.email,
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
