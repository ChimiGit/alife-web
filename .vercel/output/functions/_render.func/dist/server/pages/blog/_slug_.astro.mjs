import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderComponent, u as unescapeHTML, e as renderTemplate } from '../../chunks/astro/server_CFq5tQmY.mjs';
/* empty css                                    */
import { d } from '../../chunks/marked.esm_CxOeIXbN.mjs';
import { $ as $$Header } from '../../chunks/Header_BwH-5tJO.mjs';
import { g as getBlogBySlug } from '../../chunks/blog_D2yDjRq0.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
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
      backToBlog: "Back to Blog",
      publishedOn: "Published on",
      by: "By"
    },
    jp: {
      navigation: {
        about: "\u6982\u8981",
        career: "\u30AD\u30E3\u30EA\u30A2",
        blog: "\u30D6\u30ED\u30B0",
        support: "\u30B5\u30DD\u30FC\u30C8"
      },
      backToBlog: "\u30D6\u30ED\u30B0\u306B\u623B\u308B",
      publishedOn: "\u516C\u958B\u65E5",
      by: "\u8457\u8005"
    }
  };
  const t = translations[lang] || translations.en;
  const { slug } = Astro2.params;
  const blog = getBlogBySlug(slug || "");
  if (!blog) {
    return Astro2.redirect("/blog");
  }
  const htmlContent = d(blog.content);
  return renderTemplate`<html lang="en" data-astro-cid-4sn4zg3r> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${blog.title} - ALIFE Blog</title><meta name="description"${addAttribute(blog.description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gray-50" data-astro-cid-4sn4zg3r> ${renderComponent($$result, "Header", $$Header, { "lang": lang, "data-astro-cid-4sn4zg3r": true })} <main class="max-w-4xl mx-auto px-4 py-16" style="font-family: 'Inter', sans-serif;" data-astro-cid-4sn4zg3r> <!-- Breadcrumb --> <nav class="mb-8" data-astro-cid-4sn4zg3r> <a href="/blog" class="inline-flex items-center text-gray-500 hover:text-primary transition-colors duration-200 text-sm" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-4sn4zg3r></path> </svg> ${t.backToBlog} </a> </nav> <!-- Article Header --> <header class="mb-12" data-astro-cid-4sn4zg3r> <!-- Category --> <div class="mb-4" data-astro-cid-4sn4zg3r> <span class="inline-block text-sm text-primary bg-primary/10 px-3 py-1 rounded-full font-medium" data-astro-cid-4sn4zg3r> ${blog.category} </span> </div> <!-- Title --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-4sn4zg3r> ${blog.title} </h1> <!-- Meta Information --> <div class="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8" data-astro-cid-4sn4zg3r> <div class="flex items-center gap-2" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-4sn4zg3r></path> </svg> <span data-astro-cid-4sn4zg3r>${blog.author}</span> </div> <div class="flex items-center gap-2" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-4sn4zg3r></path> </svg> <span data-astro-cid-4sn4zg3r>${new Date(blog.pubDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span> </div> <div class="flex items-center gap-2" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-4sn4zg3r></path> </svg> <span data-astro-cid-4sn4zg3r>5 min read</span> </div> </div> <!-- Excerpt --> <div class="text-xl text-gray-600 leading-relaxed mb-8 font-light" data-astro-cid-4sn4zg3r> ${blog.description} </div> <!-- Tags --> ${blog.tags && blog.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-8" data-astro-cid-4sn4zg3r> ${blog.tags.map((tag) => renderTemplate`<span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200" data-astro-cid-4sn4zg3r>
#${tag} </span>`)} </div>`} </header> <!-- Featured Image --> <div class="mb-12" data-astro-cid-4sn4zg3r> <img src="/assets/images/image.png"${addAttribute(blog.title, "alt")} class="w-full h-96 md:h-[500px] object-cover rounded-lg" data-astro-cid-4sn4zg3r> </div> <!-- Article Content --> <article class="prose prose-lg prose-gray max-w-none" data-astro-cid-4sn4zg3r> <div data-astro-cid-4sn4zg3r>${unescapeHTML(htmlContent)}</div> </article> <!-- Article Footer --> <footer class="mt-16 pt-8 border-t border-gray-200" data-astro-cid-4sn4zg3r> <div class="flex items-center justify-between" data-astro-cid-4sn4zg3r> <div class="flex items-center gap-4" data-astro-cid-4sn4zg3r> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center" data-astro-cid-4sn4zg3r> <span class="text-primary font-semibold text-lg" data-astro-cid-4sn4zg3r> ${blog.author.split(" ").map((n) => n[0]).join("")} </span> </div> <div data-astro-cid-4sn4zg3r> <p class="font-semibold text-gray-900" data-astro-cid-4sn4zg3r>${blog.author}</p> <p class="text-sm text-gray-500" data-astro-cid-4sn4zg3r>${blog.category} Expert</p> </div> </div> <a href="/blog" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200" data-astro-cid-4sn4zg3r> <span class="mr-2" data-astro-cid-4sn4zg3r>Back to Blog</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-4sn4zg3r></path> </svg> </a> </div> </footer> </main>  </body> </html>`;
}, "/Users/chimitshering/Documents/alife-web/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/chimitshering/Documents/alife-web/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
