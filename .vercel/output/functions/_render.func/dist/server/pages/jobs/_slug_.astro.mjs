import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderComponent, u as unescapeHTML, e as renderTemplate } from '../../chunks/astro/server_CFq5tQmY.mjs';
/* empty css                                    */
import { d } from '../../chunks/marked.esm_CxOeIXbN.mjs';
import { $ as $$Header } from '../../chunks/Header_CWiQ39rs.mjs';
import { g as getJobBySlug } from '../../chunks/jobs_C5upJJjY.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const urlParams = new URLSearchParams(Astro2.url.search);
  const lang = urlParams.get("lang") || "en";
  const translations = {
    en: {
      navigation: {
        about: "About",
        career: "Career",
        blog: "Blog",
        support: "Support Us"
      },
      backToJobs: "Back to Jobs",
      postedOn: "Posted on",
      deadline: "Application Deadline",
      location: "Location",
      department: "Department",
      experience: "Experience Required",
      jobType: "Job Type",
      applyNow: "Apply Now"
    },
    jp: {
      navigation: {
        about: "\u6982\u8981",
        career: "\u30AD\u30E3\u30EA\u30A2",
        blog: "\u30D6\u30ED\u30B0",
        support: "\u30B5\u30DD\u30FC\u30C8"
      },
      backToJobs: "\u6C42\u4EBA\u306B\u623B\u308B",
      postedOn: "\u6295\u7A3F\u65E5",
      deadline: "\u5FDC\u52DF\u7DE0\u5207",
      location: "\u52E4\u52D9\u5730",
      department: "\u90E8\u7F72",
      experience: "\u5FC5\u8981\u7D4C\u9A13",
      jobType: "\u96C7\u7528\u5F62\u614B",
      applyNow: "\u4ECA\u3059\u3050\u5FDC\u52DF"
    }
  };
  const t = translations[lang] || translations.en;
  const { slug } = Astro2.params;
  const job = await getJobBySlug(slug || "");
  if (!job) {
    return Astro2.redirect("/career");
  }
  const htmlContent = d(job.content);
  return renderTemplate`<html lang="en" data-astro-cid-ldq6vt3r> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${job.title} - ALIFE Careers</title><meta name="description"${addAttribute(`Join our team as a ${job.title} at ${job.location}. ${job.department} position.`, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gray-50" data-astro-cid-ldq6vt3r> ${renderComponent($$result, "Header", $$Header, { "lang": lang, "data-astro-cid-ldq6vt3r": true })} <main class="max-w-4xl mx-auto px-4 py-16" style="font-family: 'Inter', sans-serif;" data-astro-cid-ldq6vt3r> <!-- Breadcrumb --> <nav class="mb-8" data-astro-cid-ldq6vt3r> <a href="/career" class="text-primary hover:text-accent-cyan transition-colors duration-200 flex items-center" data-astro-cid-ldq6vt3r> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldq6vt3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-ldq6vt3r></path> </svg> ${t.backToJobs} </a> </nav> <!-- Job Header --> <header class="mb-12" data-astro-cid-ldq6vt3r> <!-- Category and Meta Info --> <div class="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600" data-astro-cid-ldq6vt3r> <span class="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium" data-astro-cid-ldq6vt3r> ${job.department} </span> <span class="flex items-center" data-astro-cid-ldq6vt3r> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldq6vt3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-ldq6vt3r></path> </svg> ${t.postedOn} ${new Date(job.pubDate || Date.now()).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </span> </div> <!-- Job Title --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ldq6vt3r> ${job.title} </h1> <!-- Job Meta Information --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" data-astro-cid-ldq6vt3r> <div class="space-y-4" data-astro-cid-ldq6vt3r> <div class="flex items-center" data-astro-cid-ldq6vt3r> <svg class="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldq6vt3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-ldq6vt3r></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-ldq6vt3r></path> </svg> <div data-astro-cid-ldq6vt3r> <span class="text-sm text-gray-600" data-astro-cid-ldq6vt3r>${t.location}</span> <p class="font-medium text-primary" data-astro-cid-ldq6vt3r>${job.location}</p> </div> </div> <div class="flex items-center" data-astro-cid-ldq6vt3r> <svg class="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldq6vt3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-ldq6vt3r></path> </svg> <div data-astro-cid-ldq6vt3r> <span class="text-sm text-gray-600" data-astro-cid-ldq6vt3r>${t.department}</span> <p class="font-medium text-primary" data-astro-cid-ldq6vt3r>${job.department}</p> </div> </div> </div> <div class="space-y-4" data-astro-cid-ldq6vt3r> <div class="flex items-center" data-astro-cid-ldq6vt3r> <svg class="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldq6vt3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ldq6vt3r></path> </svg> <div data-astro-cid-ldq6vt3r> <span class="text-sm text-gray-600" data-astro-cid-ldq6vt3r>${t.experience}</span> <p class="font-medium text-primary" data-astro-cid-ldq6vt3r>${job.experience}</p> </div> </div> <div class="flex items-center" data-astro-cid-ldq6vt3r> <svg class="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldq6vt3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" data-astro-cid-ldq6vt3r></path> </svg> <div data-astro-cid-ldq6vt3r> <span class="text-sm text-gray-600" data-astro-cid-ldq6vt3r>${t.jobType}</span> <p class="font-medium text-primary" data-astro-cid-ldq6vt3r>${job.type}</p> </div> </div> </div> </div> <!-- Application Deadline --> <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-8" data-astro-cid-ldq6vt3r> <div class="flex items-center" data-astro-cid-ldq6vt3r> <svg class="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldq6vt3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" data-astro-cid-ldq6vt3r></path> </svg> <div data-astro-cid-ldq6vt3r> <p class="text-red-800 font-medium" data-astro-cid-ldq6vt3r>${t.deadline}</p> <p class="text-red-700" data-astro-cid-ldq6vt3r>${new Date(job.deadline).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</p> </div> </div> </div> </header> <!-- Job Content --> <article class="prose prose-lg max-w-none text-primary mb-12" data-astro-cid-ldq6vt3r> <div data-astro-cid-ldq6vt3r>${unescapeHTML(htmlContent)}</div> </article> <!-- Apply Now Section --> <div class="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center" data-astro-cid-ldq6vt3r> <h3 class="text-2xl font-bold text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ldq6vt3r>
Ready to Join Our Team?
</h3> <p class="text-gray-700 mb-6 max-w-2xl mx-auto" data-astro-cid-ldq6vt3r>
We're looking for passionate individuals who want to make a difference in the field of artificial life. 
          If this role excites you, we'd love to hear from you.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-ldq6vt3r> <a${addAttribute(`mailto:careers@alife.ai?subject=Application for ${job.title}&body=Hello,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.%0D%0A%0D%0APlease find my application details below:%0D%0A%0D%0AThank you for your consideration.`, "href")} class="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-accent-cyan transition-colors duration-200 inline-flex items-center justify-center" data-astro-cid-ldq6vt3r> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldq6vt3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" data-astro-cid-ldq6vt3r></path> </svg> ${t.applyNow} </a> <a href="/career" class="border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-200 inline-flex items-center justify-center" data-astro-cid-ldq6vt3r> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldq6vt3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-ldq6vt3r></path> </svg> ${t.backToJobs} </a> </div> </div> </main>  </body> </html>`;
}, "/Users/chimitshering/Documents/alife-web/src/pages/jobs/[slug].astro", void 0);

const $$file = "/Users/chimitshering/Documents/alife-web/src/pages/jobs/[slug].astro";
const $$url = "/jobs/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
