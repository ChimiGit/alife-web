import { c as createComponent, a as createAstro, m as maybeRenderHead, f as renderScript, e as renderTemplate, b as addAttribute, d as renderComponent, r as renderHead } from '../chunks/astro/server_CFq5tQmY.mjs';
/* empty css                                 */
import { l as loadMarkdownTranslations, $ as $$Header } from '../chunks/Header_BwH-5tJO.mjs';
/* empty css                                */
import { a as getAllBlogs, b as getBlogsByCategory } from '../chunks/blog_D2yDjRq0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogLoading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLoading;
  const { lang = "en" } = Astro2.props;
  const translations = await loadMarkdownTranslations(lang);
  return renderTemplate`<!-- Blog Loading Page -->${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/assets/loader/blog-loading.png');" data-astro-cid-nucm2xom> <!-- Animated Background Pattern --> <div class="absolute inset-0 opacity-30" data-astro-cid-nucm2xom> <div class="dots-pattern animate-pulse" data-astro-cid-nucm2xom></div> </div> <!-- Content --> <div class="relative z-10 text-center px-4 sm:px-6" data-astro-cid-nucm2xom> <h1 class="loader-title text-primary mb-4 sm:mb-6 md:mb-8 animate-fade-in opacity-0 transition-opacity duration-1000 ease-out" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-nucm2xom> ${translations.Blog || "Blog"} </h1> </div> </div>  ${renderScript($$result, "/Users/chimitshering/Documents/alife-web/src/components/loaders/BlogLoading.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chimitshering/Documents/alife-web/src/components/loaders/BlogLoading.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const urlParams = new URLSearchParams(Astro2.url.search);
  const lang = urlParams.get("lang") || "en";
  const allBlogs = getAllBlogs();
  const contentData = {
    overview: {
      posts: allBlogs.map((blog, index) => ({
        id: index + 1,
        title: blog.title,
        excerpt: blog.description,
        category: blog.category,
        slug: blog.slug,
        pubDate: blog.pubDate,
        author: blog.author,
        tags: blog.tags || []
      }))
    },
    research: {
      posts: getBlogsByCategory("Research").map((blog, index) => ({
        id: index + 1,
        title: blog.title,
        excerpt: blog.description,
        category: blog.category,
        slug: blog.slug,
        pubDate: blog.pubDate,
        author: blog.author,
        tags: blog.tags || []
      }))
    },
    events: {
      posts: getBlogsByCategory("Events").map((blog, index) => ({
        id: index + 1,
        title: blog.title,
        excerpt: blog.description,
        category: blog.category,
        slug: blog.slug,
        pubDate: blog.pubDate,
        author: blog.author,
        tags: blog.tags || []
      }))
    },
    news: {
      posts: getBlogsByCategory("News").map((blog, index) => ({
        id: index + 1,
        title: blog.title,
        excerpt: blog.description,
        category: blog.category,
        slug: blog.slug,
        pubDate: blog.pubDate,
        author: blog.author,
        tags: blog.tags || []
      }))
    }
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-ijnerlr2> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><title>Blog - ALIFE</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">', '</head> <body class="min-h-screen bg-gray-50" data-astro-cid-ijnerlr2> <div id="loading-screen" class="fixed inset-0 z-50 transition-all duration-700 ease-in-out" data-astro-cid-ijnerlr2> ', ' </div> <div id="main-content" class="opacity-0 transition-opacity duration-500 ease-in hidden" data-astro-cid-ijnerlr2> ', ` <main class="max-w-7xl mx-auto px-4 py-12" style="font-family: 'Inter', sans-serif;" data-astro-cid-ijnerlr2> <div class="text-center mb-12" data-astro-cid-ijnerlr2> <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ijnerlr2>Sharing Our Journey</h1> <p class="text-lg text-gray-600 max-w-3xl mx-auto" data-astro-cid-ijnerlr2>
Research breakthroughs, upcoming events, and latest news from the frontier of evolutionary AI
</p> </div> <div class="flex justify-center mb-8" data-astro-cid-ijnerlr2> <div class="flex bg-gray-100 rounded-full p-1" data-astro-cid-ijnerlr2> <button id="overview-tab" class="active-tab px-6 py-2 rounded-full bg-primary text-white font-medium transition-all duration-200" data-astro-cid-ijnerlr2>
Overview
</button> <button id="research-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200" data-astro-cid-ijnerlr2>
Research
</button> <button id="events-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200" data-astro-cid-ijnerlr2>
Events
</button> <button id="news-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200" data-astro-cid-ijnerlr2>
News
</button> </div> </div> <!-- Separator line --> <div class="border-b border-gray-200 mb-8" data-astro-cid-ijnerlr2></div> <div class="w-full" data-astro-cid-ijnerlr2> <div id="tab-content" class="w-full" data-astro-cid-ijnerlr2> <!-- Overview content (default) --> <div id="overview-content" class="tab-content" data-astro-cid-ijnerlr2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-ijnerlr2> `, " ", ' </div> </div> <!-- Research content --> <div id="research-content" class="tab-content hidden" data-astro-cid-ijnerlr2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-ijnerlr2> ', ' </div> </div> <!-- Events content --> <div id="events-content" class="tab-content hidden" data-astro-cid-ijnerlr2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-ijnerlr2> ', ' </div> </div> <!-- News content --> <div id="news-content" class="tab-content hidden" data-astro-cid-ijnerlr2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-ijnerlr2> ', " </div> </div> </div> </div> </main> </div>  <script>\n      document.addEventListener('DOMContentLoaded', () => {\n        const loadingScreen = document.getElementById('loading-screen');\n        const mainContent = document.getElementById('main-content');\n\n        if (loadingScreen && mainContent) {\n          setTimeout(() => {\n            loadingScreen.style.transform = 'translateY(-100%)';\n            setTimeout(() => {\n              loadingScreen.style.display = 'none';\n              mainContent.classList.remove('hidden');\n              setTimeout(() => {\n                mainContent.classList.remove('opacity-0');\n              }, 50);\n            }, 700);\n          }, 2000);\n        }\n\n        // Tab functionality\n        const tabs = document.querySelectorAll('.tab, .active-tab');\n        const tabContents = document.querySelectorAll('.tab-content');\n\n        function showTab(tabName) {\n          // Hide all tab contents\n          tabContents.forEach((content) => {\n            content.classList.add('hidden');\n          });\n\n          // Show selected tab content\n          const selectedContent = document.getElementById(`${tabName}-content`);\n          if (selectedContent) {\n            selectedContent.classList.remove('hidden');\n          }\n        }\n\n        tabs.forEach((tab) => {\n          tab.addEventListener('click', function () {\n            // Update tab styling\n            tabs.forEach((t) => {\n              t.classList.remove('active-tab', 'bg-primary', 'text-white');\n              t.classList.add('tab', 'text-primary');\n            });\n\n            this.classList.remove('tab', 'text-primary');\n            this.classList.add('active-tab', 'bg-primary', 'text-white');\n\n            // Get tab name from ID\n            const tabName = this.id.replace('-tab', '');\n            showTab(tabName);\n          });\n        });\n\n        // Initialize with overview tab\n        showTab('overview');\n      });\n    <\/script> </body> </html>"], ['<html lang="en" data-astro-cid-ijnerlr2> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><title>Blog - ALIFE</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">', '</head> <body class="min-h-screen bg-gray-50" data-astro-cid-ijnerlr2> <div id="loading-screen" class="fixed inset-0 z-50 transition-all duration-700 ease-in-out" data-astro-cid-ijnerlr2> ', ' </div> <div id="main-content" class="opacity-0 transition-opacity duration-500 ease-in hidden" data-astro-cid-ijnerlr2> ', ` <main class="max-w-7xl mx-auto px-4 py-12" style="font-family: 'Inter', sans-serif;" data-astro-cid-ijnerlr2> <div class="text-center mb-12" data-astro-cid-ijnerlr2> <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ijnerlr2>Sharing Our Journey</h1> <p class="text-lg text-gray-600 max-w-3xl mx-auto" data-astro-cid-ijnerlr2>
Research breakthroughs, upcoming events, and latest news from the frontier of evolutionary AI
</p> </div> <div class="flex justify-center mb-8" data-astro-cid-ijnerlr2> <div class="flex bg-gray-100 rounded-full p-1" data-astro-cid-ijnerlr2> <button id="overview-tab" class="active-tab px-6 py-2 rounded-full bg-primary text-white font-medium transition-all duration-200" data-astro-cid-ijnerlr2>
Overview
</button> <button id="research-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200" data-astro-cid-ijnerlr2>
Research
</button> <button id="events-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200" data-astro-cid-ijnerlr2>
Events
</button> <button id="news-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200" data-astro-cid-ijnerlr2>
News
</button> </div> </div> <!-- Separator line --> <div class="border-b border-gray-200 mb-8" data-astro-cid-ijnerlr2></div> <div class="w-full" data-astro-cid-ijnerlr2> <div id="tab-content" class="w-full" data-astro-cid-ijnerlr2> <!-- Overview content (default) --> <div id="overview-content" class="tab-content" data-astro-cid-ijnerlr2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-ijnerlr2> `, " ", ' </div> </div> <!-- Research content --> <div id="research-content" class="tab-content hidden" data-astro-cid-ijnerlr2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-ijnerlr2> ', ' </div> </div> <!-- Events content --> <div id="events-content" class="tab-content hidden" data-astro-cid-ijnerlr2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-ijnerlr2> ', ' </div> </div> <!-- News content --> <div id="news-content" class="tab-content hidden" data-astro-cid-ijnerlr2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-ijnerlr2> ', " </div> </div> </div> </div> </main> </div>  <script>\n      document.addEventListener('DOMContentLoaded', () => {\n        const loadingScreen = document.getElementById('loading-screen');\n        const mainContent = document.getElementById('main-content');\n\n        if (loadingScreen && mainContent) {\n          setTimeout(() => {\n            loadingScreen.style.transform = 'translateY(-100%)';\n            setTimeout(() => {\n              loadingScreen.style.display = 'none';\n              mainContent.classList.remove('hidden');\n              setTimeout(() => {\n                mainContent.classList.remove('opacity-0');\n              }, 50);\n            }, 700);\n          }, 2000);\n        }\n\n        // Tab functionality\n        const tabs = document.querySelectorAll('.tab, .active-tab');\n        const tabContents = document.querySelectorAll('.tab-content');\n\n        function showTab(tabName) {\n          // Hide all tab contents\n          tabContents.forEach((content) => {\n            content.classList.add('hidden');\n          });\n\n          // Show selected tab content\n          const selectedContent = document.getElementById(\\`\\${tabName}-content\\`);\n          if (selectedContent) {\n            selectedContent.classList.remove('hidden');\n          }\n        }\n\n        tabs.forEach((tab) => {\n          tab.addEventListener('click', function () {\n            // Update tab styling\n            tabs.forEach((t) => {\n              t.classList.remove('active-tab', 'bg-primary', 'text-white');\n              t.classList.add('tab', 'text-primary');\n            });\n\n            this.classList.remove('tab', 'text-primary');\n            this.classList.add('active-tab', 'bg-primary', 'text-white');\n\n            // Get tab name from ID\n            const tabName = this.id.replace('-tab', '');\n            showTab(tabName);\n          });\n        });\n\n        // Initialize with overview tab\n        showTab('overview');\n      });\n    <\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "BlogLoading", $$BlogLoading, { "data-astro-cid-ijnerlr2": true }), renderComponent($$result, "Header", $$Header, { "lang": lang, "data-astro-cid-ijnerlr2": true }), contentData.overview.posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="block group" data-astro-cid-ijnerlr2> <div class="mb-6" data-astro-cid-ijnerlr2> <img src="/assets/images/image.png"${addAttribute(post.title, "alt")} class="w-full h-48 object-cover rounded-lg" data-astro-cid-ijnerlr2> </div> <div class="space-y-3" data-astro-cid-ijnerlr2> <h2 class="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors duration-200" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ijnerlr2> ${post.title} </h2> <p class="text-gray-600 text-sm leading-relaxed line-clamp-3" data-astro-cid-ijnerlr2> ${post.excerpt} </p> </div> </a>`), contentData.overview.posts.length === 0 && renderTemplate`<div class="col-span-full text-center py-12" data-astro-cid-ijnerlr2> <p class="text-gray-500 text-lg" data-astro-cid-ijnerlr2>No blog posts available yet.</p> <p class="text-gray-400 text-sm mt-2" data-astro-cid-ijnerlr2>Check back soon for updates!</p> </div>`, contentData.research.posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="block group" data-astro-cid-ijnerlr2> <div class="mb-6" data-astro-cid-ijnerlr2> <img src="/assets/images/image.png"${addAttribute(post.title, "alt")} class="w-full h-48 object-cover rounded-lg" data-astro-cid-ijnerlr2> </div> <div class="space-y-3" data-astro-cid-ijnerlr2> <h2 class="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors duration-200" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ijnerlr2> ${post.title} </h2> <p class="text-gray-600 text-sm leading-relaxed line-clamp-3" data-astro-cid-ijnerlr2> ${post.excerpt} </p> </div> </a>`), contentData.events.posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="block group" data-astro-cid-ijnerlr2> <div class="mb-6" data-astro-cid-ijnerlr2> <img src="/assets/images/image.png"${addAttribute(post.title, "alt")} class="w-full h-48 object-cover rounded-lg" data-astro-cid-ijnerlr2> </div> <div class="space-y-3" data-astro-cid-ijnerlr2> <h2 class="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors duration-200" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ijnerlr2> ${post.title} </h2> <p class="text-gray-600 text-sm leading-relaxed line-clamp-3" data-astro-cid-ijnerlr2> ${post.excerpt} </p> </div> </a>`), contentData.news.posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="block group" data-astro-cid-ijnerlr2> <div class="mb-6" data-astro-cid-ijnerlr2> <img src="/assets/images/image.png"${addAttribute(post.title, "alt")} class="w-full h-48 object-cover rounded-lg" data-astro-cid-ijnerlr2> </div> <div class="space-y-3" data-astro-cid-ijnerlr2> <h2 class="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors duration-200" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-ijnerlr2> ${post.title} </h2> <p class="text-gray-600 text-sm leading-relaxed line-clamp-3" data-astro-cid-ijnerlr2> ${post.excerpt} </p> </div> </a>`));
}, "/Users/chimitshering/Documents/alife-web/src/pages/blog.astro", void 0);

const $$file = "/Users/chimitshering/Documents/alife-web/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
