import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderScript, r as renderTemplate, h as addAttribute, l as renderHead, n as renderComponent } from '../chunks/astro/server_Dt7KTtva.mjs';
import 'kleur/colors';
import { l as loadMarkdownTranslations, $ as $$Header } from '../chunks/Header_BvgYAMh7.mjs';
import 'clsx';
/* empty css                                 */
/* empty css                                  */
import { a as getAllJobs } from '../chunks/jobs_Uvz6tZVG.mjs';
import { a as getAllTeamMembers } from '../chunks/team_dq6RpL0U.mjs';
import { a as getAllTeamCategories } from '../chunks/team-categories_C7okxDUP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CareerLoading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CareerLoading;
  const { lang = "en" } = Astro2.props;
  const translations = await loadMarkdownTranslations(lang);
  return renderTemplate`<!-- Career Loading Page -->${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/assets/loader/career-loading.png');" data-astro-cid-ao5cb7ax> <!-- Animated Background Pattern --> <div class="absolute inset-0 opacity-30" data-astro-cid-ao5cb7ax> <div class="dots-pattern animate-pulse" data-astro-cid-ao5cb7ax></div> </div> <!-- Content --> <div class="relative z-10 text-center" data-astro-cid-ao5cb7ax> <h1 class="text-200px text-primary mb-8 animate-fade-in opacity-0 transition-opacity duration-1000 ease-out" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ao5cb7ax> ${translations.Career || "Career"} </h1> </div> </div>  ${renderScript($$result, "/Users/chimitshering/Documents/alife-web/src/components/loaders/CareerLoading.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chimitshering/Documents/alife-web/src/components/loaders/CareerLoading.astro", void 0);

const $$Jobs = createComponent(async ($$result, $$props, $$slots) => {
  const jobs = await getAllJobs();
  return renderTemplate`<!-- Jobs Content -->${maybeRenderHead()}<div class="space-y-8" data-astro-cid-r3n6b353> ${jobs && jobs.length > 0 ? jobs.map((job) => renderTemplate`<div class="border-b border-gray-200 pb-8 last:border-b-0" data-astro-cid-r3n6b353> <div class="flex justify-between items-start mb-4" data-astro-cid-r3n6b353> <div class="flex-1" data-astro-cid-r3n6b353> <h3 class="text-2xl font-bold text-primary mb-2" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-r3n6b353> ${job.title} </h3> <p class="text-primary font-medium mb-1" data-astro-cid-r3n6b353>${job.location}</p> <p class="text-gray-600 text-sm mb-2" data-astro-cid-r3n6b353> <span class="font-medium" data-astro-cid-r3n6b353>${job.department}</span> • ${job.experience} experience
</p> </div> <div class="flex flex-col items-end space-y-2" data-astro-cid-r3n6b353> <button class="bg-primary text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-accent-cyan transition-colors duration-200"${addAttribute(`showJobDetails('${job.slug}')`, "onclick")} data-astro-cid-r3n6b353>
View Details
</button> <div class="text-right text-sm" data-astro-cid-r3n6b353> <p class="text-gray-600" data-astro-cid-r3n6b353>
Deadline: <span class="font-medium" data-astro-cid-r3n6b353>${new Date(job.deadline).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })}</span> </p> <p class="text-gray-600" data-astro-cid-r3n6b353>
Type: <span class="font-medium" data-astro-cid-r3n6b353>${job.type}</span> </p> </div> </div> </div> </div>`) : renderTemplate`<div class="text-center text-gray-500 py-8" data-astro-cid-r3n6b353> <h3 class="text-xl font-semibold mb-4" data-astro-cid-r3n6b353>Job Openings Coming Soon</h3> <p data-astro-cid-r3n6b353>We're currently updating our job listings. Please check back later for new opportunities.</p> </div>`} </div> <!-- Job Details Modal --> <div id="job-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden" data-astro-cid-r3n6b353> <div class="flex items-center justify-center min-h-screen p-4" data-astro-cid-r3n6b353> <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" data-astro-cid-r3n6b353> <div class="p-6" data-astro-cid-r3n6b353> <div class="flex justify-between items-start mb-6" data-astro-cid-r3n6b353> <div data-astro-cid-r3n6b353> <h2 id="modal-title" class="text-3xl font-bold text-primary mb-2" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-r3n6b353></h2> <p id="modal-location" class="text-primary font-medium" data-astro-cid-r3n6b353></p> </div> <button onclick="closeJobModal()" class="text-gray-500 hover:text-gray-700 text-2xl font-bold" data-astro-cid-r3n6b353>
×
</button> </div> <div id="modal-content" class="prose prose-lg max-w-none text-primary" data-astro-cid-r3n6b353> <!-- Markdown content will be inserted here --> </div> <div class="mt-8 flex justify-end space-x-4" data-astro-cid-r3n6b353> <button onclick="closeJobModal()" class="px-6 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-200" data-astro-cid-r3n6b353>
Close
</button> <button class="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-accent-cyan transition-colors duration-200" data-astro-cid-r3n6b353>
Apply Now
</button> </div> </div> </div> </div> </div>  ${renderScript($$result, "/Users/chimitshering/Documents/alife-web/src/components/sections/career/Jobs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chimitshering/Documents/alife-web/src/components/sections/career/Jobs.astro", void 0);

const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const teamMembers = await getAllTeamMembers();
  const teamCategories = await getAllTeamCategories();
  console.log("Team Members:", teamMembers);
  console.log("Team Categories:", teamCategories);
  return renderTemplate`<!-- Team Section with Enhanced Layout -->${maybeRenderHead()}<section class="mb-20"> <div class="flex flex-col lg:flex-row"> <!-- Left Sidebar with Tabs --> <div class="w-full lg:w-1/4 lg:pr-8 mb-8 lg:mb-0"> <h3 class="text-2xl font-bold text-gray-400 mb-8 flex justify-start">The Team</h3> <nav class="space-y-2" role="tablist" aria-orientation="vertical"> ${teamCategories && teamCategories.length > 0 ? teamCategories.map((category, index) => renderTemplate`<button type="button"${addAttribute(`team-tab w-full text-left py-3 px-4 text-lg border-l-4 hover:text-primary ${index === 0 ? "active font-semibold text-primary border-primary bg-gray-100" : "text-gray-500 border-transparent"}`, "class")}${addAttribute(`${category.slug}-tab`, "id")}${addAttribute(index === 0 ? "true" : "false", "aria-selected")}${addAttribute(`#${category.slug}-panel`, "data-target")} role="tab"> ${category.title} </button>`) : renderTemplate`<div class="text-gray-500 text-sm">No team categories available</div>`} </nav> </div> <!-- Right Content Area --> <div class="w-full lg:w-3/4"> ${teamCategories && teamCategories.length > 0 ? teamCategories.map((category, index) => renderTemplate`<div${addAttribute(`${category.slug}-panel`, "id")}${addAttribute(`team-panel ${index === 0 ? "" : "hidden"}`, "class")} role="tabpanel"${addAttribute(`${category.slug}-tab`, "aria-labelledby")}> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${teamMembers && teamMembers.filter((member) => member.category === category.slug).length > 0 ? teamMembers.filter((member) => member.category === category.slug).map((member) => renderTemplate`<div class="text-center group cursor-pointer"${addAttribute(`showTeamMemberDetails('${member.slug}')`, "onclick")}> <div class="w-48 h-48 mx-auto mb-4 rounded-medium overflow-hidden bg-gray-200 group-hover:shadow-lg transition-all duration-300"> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"> </div> <h4 class="text-xl font-bold text-primary mb-1" style="font-family: 'GT Alpina Fine', serif;">${member.name}</h4> <p class="text-primary font-medium mb-1">${member.title}</p> <p class="text-xs text-gray-600 mb-2">${member.bio}</p> <p class="text-xs text-gray-500">${member.location}</p> </div>`) : renderTemplate`<div class="col-span-full text-center text-gray-500 py-8">
No team members found in this category
</div>`} </div> </div>`) : renderTemplate`<div class="text-center text-gray-500 py-8"> <h3 class="text-xl font-semibold mb-4">Team Information Coming Soon</h3> <p>Our team profiles are being updated. Please check back later.</p> </div>`} </div> </div> </section> <!-- Team Member Details Modal --> <div id="team-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden"> <div class="flex items-center justify-center min-h-screen p-4"> <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"> <div class="p-6"> <div class="flex justify-between items-start mb-6"> <div class="flex items-start space-x-6"> <div class="w-32 h-32 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0"> <img id="modal-image" src="" alt="" class="w-full h-full object-cover"> </div> <div> <h2 id="modal-name" class="text-3xl font-bold text-primary mb-2" style="font-family: 'GT Alpina Fine', serif;"></h2> <p id="modal-title" class="text-xl text-primary font-medium mb-1"></p> <p id="modal-location" class="text-gray-600 mb-3"></p> <div id="modal-social" class="flex space-x-4"> <!-- Social links will be inserted here --> </div> </div> </div> <button onclick="closeTeamModal()" class="text-gray-500 hover:text-gray-700 text-2xl font-bold">
×
</button> </div> <div id="modal-content" class="text-primary space-y-6"> <!-- Markdown content will be inserted here --> </div> <div class="mt-8 flex justify-end"> <button onclick="closeTeamModal()" class="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-accent-cyan transition-colors duration-200">
Close
</button> </div> </div> </div> </div> </div> ${renderScript($$result, "/Users/chimitshering/Documents/alife-web/src/components/sections/career/Team.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chimitshering/Documents/alife-web/src/components/sections/career/Team.astro", void 0);

const $$Astro = createAstro();
const $$Career = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Career;
  const urlParams = new URLSearchParams(Astro2.url.search);
  const lang = urlParams.get("lang") || "en";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/assets/logo/thumbnail-logo.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Career - ALIFE</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gray-50"> <!-- Loading Screen --> <div id="loading-screen" class="fixed inset-0 z-50 transition-all duration-700 ease-in-out"> ${renderComponent($$result, "CareerLoading", $$CareerLoading, { "lang": lang })} </div> <!-- Main Content (Hidden Initially) --> <div id="main-content" class="opacity-0 transition-opacity duration-500 ease-in hidden"> ${renderComponent($$result, "Header", $$Header, { "lang": lang })} <!-- Main content --> <main class="max-w-6xl mx-auto px-4 pt-24 pb-12" style="font-family: 'Inter', sans-serif;"> <!-- Hero Section --> <section class="text-center mb-10"> <h1 class="text-64px text-primary mb-8 leading-tight" style="font-family: 'GT Alpina Fine', serif;">
Where Brilliant<br>
Minds Explore Together
</h1> </section> <p class="text-sm text-gray-700 max-w-4xl mx-auto leading-relaxed mb-20" style="line-height: 2">
Discover what happens at the intersection of nature and computation, where we're creating something
        unprecedented. Our team combines world-class researchers and innovative engineers united by a shared
        fascination with emergence and open-ended discovery. Here, your expertise contributes to projects that
        grow organically, surprising even their creators.
</p> <!-- Join Us Section with Tabs --> <section class="text-center mb-20"> <h2 class="text-4xl font-bold text-primary mb-8" style="font-family: 'GT Alpina Fine', serif;">
Join Us!
</h2> <div class="flex justify-center gap-4 mb-12"> <button id="our-team-tab" class="main-tab active bg-primary text-white px-6 py-2 rounded-full font-medium text-sm transition-colors duration-200" data-target="#our-team-content">
Our Team
</button> <button id="jobs-tab" class="main-tab border border-primary text-primary px-6 py-2 rounded-full font-medium text-sm transition-colors duration-200" data-target="#jobs-content">
Jobs
</button> </div> <!-- Tab Content --> <div class="max-w-6xl mx-auto"> <!-- Our Team Content --> <div id="our-team-content" class="main-tab-content"> ${renderComponent($$result, "Team", $$Team, {})} </div> <!-- Jobs Content --> <div id="jobs-content" class="main-tab-content hidden"> <div class="text-left"> ${renderComponent($$result, "Jobs", $$Jobs, {})} </div> </div> </div> </section> </main> </div> <!-- Tab functionality script --> ${renderScript($$result, "/Users/chimitshering/Documents/alife-web/src/pages/career.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/chimitshering/Documents/alife-web/src/pages/career.astro", void 0);

const $$file = "/Users/chimitshering/Documents/alife-web/src/pages/career.astro";
const $$url = "/career";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Career,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
