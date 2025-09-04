import { e as createComponent, l as renderHead, r as renderTemplate } from '../chunks/astro/server_Rd5E_EmL.mjs';
import 'clsx';
import { a as getAllTeamMembers } from '../chunks/team_dq6RpL0U.mjs';
import { a as getAllTeamCategories } from '../chunks/team-categories_C7okxDUP.mjs';
export { renderers } from '../renderers.mjs';

const $$Debug = createComponent(async ($$result, $$props, $$slots) => {
  const teamMembers = await getAllTeamMembers();
  const teamCategories = await getAllTeamCategories();
  return renderTemplate`<html> <head><title>Debug Content Collections</title>${renderHead()}</head> <body> <h1>Debug Content Collections</h1> <h2>Team Categories (${teamCategories?.length || 0})</h2> <pre>${JSON.stringify(teamCategories, null, 2)}</pre> <h2>Team Members (${teamMembers?.length || 0})</h2> <pre>${JSON.stringify(teamMembers, null, 2)}</pre> </body></html>`;
}, "/Users/chimitshering/Documents/alife/src/pages/debug.astro", void 0);

const $$file = "/Users/chimitshering/Documents/alife/src/pages/debug.astro";
const $$url = "/debug";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Debug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
