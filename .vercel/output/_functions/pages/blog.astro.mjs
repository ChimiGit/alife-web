import { c as createComponent, a as createAstro, m as maybeRenderHead, f as renderScript, e as renderTemplate, d as renderComponent, r as renderHead, b as addAttribute } from '../chunks/astro/server_D85hp0mG.mjs';
/* empty css                                 */
import { l as loadMarkdownTranslations, $ as $$Header } from '../chunks/Header_DpfppVyu.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogLoading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLoading;
  const { lang = "en" } = Astro2.props;
  const translations = await loadMarkdownTranslations(lang);
  return renderTemplate`<!-- Blog Loading Page -->${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/assets/loader/blog-loading.png');" data-astro-cid-nucm2xom> <!-- Animated Background Pattern --> <div class="absolute inset-0 opacity-30" data-astro-cid-nucm2xom> <div class="dots-pattern animate-pulse" data-astro-cid-nucm2xom></div> </div> <!-- Content --> <div class="relative z-10 text-center" data-astro-cid-nucm2xom> <h1 class="text-200px text-primary mb-8 animate-fade-in opacity-0 transition-opacity duration-1000 ease-out" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-nucm2xom> ${translations.Blog || "Blog"} </h1> </div> </div>  ${renderScript($$result, "/Users/chimitshering/Documents/alife-web/src/components/loaders/BlogLoading.astro?astro&type=script&index=0&lang.ts")}`;
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
  const contentData = {
    overview: {
      posts: [
        {
          id: 1,
          title: "Welcome to ALIFE Research",
          excerpt: "Discover our mission to advance artificial life through cutting-edge research, innovative technologies, and collaborative exploration of emergent systems.",
          category: "Overview"
        },
        {
          id: 2,
          title: "Latest Research Highlights",
          excerpt: "Our recent breakthroughs in evolutionary algorithms and digital organisms are opening new frontiers in artificial life and emergent behavior studies.",
          category: "Overview"
        },
        {
          id: 3,
          title: "Community & Collaboration",
          excerpt: "Join our growing community of researchers, developers, and enthusiasts working together to push the boundaries of artificial life research.",
          category: "Overview"
        }
      ]},
    research: {
      posts: [
        {
          id: 4,
          title: "Evolutionary Algorithm Optimization",
          excerpt: "New approaches to genetic algorithms and evolutionary programming that demonstrate improved convergence rates and solution quality in complex problem spaces.",
          category: "Research"
        },
        {
          id: 5,
          title: "Digital Organism Emergence Studies",
          excerpt: "Investigating how complex behaviors emerge from simple rules in digital ecosystems, providing insights into the fundamental principles of life and evolution.",
          category: "Research"
        },
        {
          id: 6,
          title: "Open-Ended Evolution Systems",
          excerpt: "Developing computational frameworks that support indefinite evolutionary growth and novelty, mimicking the open-ended nature of biological evolution.",
          category: "Research"
        }
      ]},
    events: {
      posts: [
        {
          id: 7,
          title: "ALIFE 2024 International Conference",
          excerpt: "Join us at the premier artificial life conference featuring cutting-edge research presentations, workshops, and networking opportunities with leading researchers.",
          category: "Events"
        },
        {
          id: 8,
          title: "Workshop: Introduction to Digital Evolution",
          excerpt: "Hands-on workshop covering the fundamentals of digital evolution, simulation environments, and practical applications in research and industry.",
          category: "Events"
        },
        {
          id: 9,
          title: "Research Symposium: Emergent Behaviors",
          excerpt: "A symposium dedicated to exploring emergent behaviors in artificial systems, featuring keynote speakers and collaborative research sessions.",
          category: "Events"
        }
      ]},
    news: {
      posts: [
        {
          id: 10,
          title: "New Grant Funding for Artificial Life Research",
          excerpt: "ALIFE receives significant funding to advance research in computational evolution and artificial life systems, enabling expanded research programs.",
          category: "News"
        },
        {
          id: 11,
          title: "Partnership with Leading Tech Companies",
          excerpt: "Strategic partnerships formed with industry leaders to translate artificial life research into practical applications and real-world solutions.",
          category: "News"
        },
        {
          id: 12,
          title: "Publication in Nature: Breakthrough Discovery",
          excerpt: "Our latest research on emergent intelligence in artificial systems has been published in Nature, marking a significant milestone for the field.",
          category: "News"
        }
      ]}
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/assets/logo/thumbnail-logo.png"><meta name="viewport" content="width=device-width"><meta name="generator"', '><title>Blog - ALIFE</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">', '</head> <body class="min-h-screen bg-gray-50"> <div id="loading-screen" class="fixed inset-0 z-50 transition-all duration-700 ease-in-out"> ', ' </div> <div id="main-content" class="opacity-0 transition-opacity duration-500 ease-in hidden"> ', ` <main class="max-w-7xl mx-auto px-4 pt-24 pb-12" style="font-family: 'Inter', sans-serif;"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">Sharing Our Journey</h1> <p class="text-20px text-gray-600 max-w-4xl mx-auto">
Research breakthroughs, upcoming events, and latest news from the frontier of evolutionary AI
</p> </div> <div class="flex justify-center mb-8"> <div class="flex bg-gray-100 rounded-full p-1"> <button id="overview-tab" class="active-tab px-6 py-2 rounded-full bg-primary text-white font-medium transition-all duration-200">
Overview
</button> <button id="research-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200">
Research
</button> <button id="events-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200">
Events
</button> <button id="news-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200">
News
</button> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <div class="lg:col-span-1"> <div class="rounded-xl p-6"> <h3 id="sidebar-title" class="text-3xl font-bold text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">Latest Updates</h3> <div id="sidebar-content" class="space-y-3"> <div class="text-gray-600 text-sm">Latest Updates</div> <div class="text-gray-600 text-sm">Featured Research</div> <div class="text-gray-600 text-sm">Community Highlights</div> <div class="text-gray-600 text-sm">Getting Started</div> <div class="text-gray-600 text-sm">Research Overview</div> </div> </div> </div> <div class="lg:col-span-3"> <div id="tab-content" class="space-y-8"> <!-- Overview content (default) --> <div id="overview-content" class="tab-content"> `, ' </div> <div id="research-content" class="tab-content hidden"> ', ' </div> <!-- Events content --> <div id="events-content" class="tab-content hidden"> ', ' </div> <!-- News content --> <div id="news-content" class="tab-content hidden"> ', " </div> </div> </div> </div> </main> </div> <script>\n      document.addEventListener('DOMContentLoaded', () => {\n        const loadingScreen = document.getElementById('loading-screen');\n        const mainContent = document.getElementById('main-content');\n\n        if (loadingScreen && mainContent) {\n          setTimeout(() => {\n            loadingScreen.style.transform = 'translateY(-100%)';\n            setTimeout(() => {\n              loadingScreen.style.display = 'none';\n              mainContent.classList.remove('hidden');\n              setTimeout(() => {\n                mainContent.classList.remove('opacity-0');\n              }, 50);\n            }, 700);\n          }, 2000);\n        }\n\n        // Sidebar content data\n        const sidebarData = {\n          overview: {\n            title: 'Latest Updates',\n            items: ['Latest Updates', 'Featured Research', 'Community Highlights', 'Getting Started', 'Research Overview']\n          },\n          research: {\n            title: 'Research Teams',\n            items: ['Evolutionary Algorithms', 'Digital Organisms', 'Emergence Studies', 'Open-Ended Evolution', 'Artificial Life Systems']\n          },\n          events: {\n            title: 'Event Categories',\n            items: ['Upcoming Events', 'Conferences', 'Workshops', 'Symposiums', 'Webinars']\n          },\n          news: {\n            title: 'News Categories',\n            items: ['Latest News', 'Press Releases', 'Publications', 'Announcements', 'Media Coverage']\n          }\n        };\n\n        // Tab functionality\n        const tabs = document.querySelectorAll('.tab, .active-tab');\n        const tabContents = document.querySelectorAll('.tab-content');\n        const sidebarTitle = document.getElementById('sidebar-title');\n        const sidebarContent = document.getElementById('sidebar-content');\n\n        function showTab(tabName) {\n          // Hide all tab contents\n          tabContents.forEach((content) => {\n            content.classList.add('hidden');\n          });\n\n          // Show selected tab content\n          const selectedContent = document.getElementById(`${tabName}-content`);\n          if (selectedContent) {\n            selectedContent.classList.remove('hidden');\n          }\n\n          // Update sidebar\n          const sidebarInfo = sidebarData[tabName];\n          if (sidebarInfo && sidebarTitle && sidebarContent) {\n            sidebarTitle.textContent = sidebarInfo.title;\n            sidebarContent.innerHTML = sidebarInfo.items.map(item => `<div class=\"text-gray-600 text-sm\">${item}</div>`).join('');\n          }\n        }\n\n        tabs.forEach((tab) => {\n          tab.addEventListener('click', function () {\n            // Update tab styling\n            tabs.forEach((t) => {\n              t.classList.remove('active-tab', 'bg-primary', 'text-white');\n              t.classList.add('tab', 'text-primary');\n            });\n\n            this.classList.remove('tab', 'text-primary');\n            this.classList.add('active-tab', 'bg-primary', 'text-white');\n\n            // Get tab name from ID\n            const tabName = this.id.replace('-tab', '');\n            showTab(tabName);\n          });\n        });\n\n        // Initialize with overview tab\n        showTab('overview');\n      });\n    <\/script> </body> </html>"], ['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/assets/logo/thumbnail-logo.png"><meta name="viewport" content="width=device-width"><meta name="generator"', '><title>Blog - ALIFE</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">', '</head> <body class="min-h-screen bg-gray-50"> <div id="loading-screen" class="fixed inset-0 z-50 transition-all duration-700 ease-in-out"> ', ' </div> <div id="main-content" class="opacity-0 transition-opacity duration-500 ease-in hidden"> ', ` <main class="max-w-7xl mx-auto px-4 pt-24 pb-12" style="font-family: 'Inter', sans-serif;"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">Sharing Our Journey</h1> <p class="text-20px text-gray-600 max-w-4xl mx-auto">
Research breakthroughs, upcoming events, and latest news from the frontier of evolutionary AI
</p> </div> <div class="flex justify-center mb-8"> <div class="flex bg-gray-100 rounded-full p-1"> <button id="overview-tab" class="active-tab px-6 py-2 rounded-full bg-primary text-white font-medium transition-all duration-200">
Overview
</button> <button id="research-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200">
Research
</button> <button id="events-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200">
Events
</button> <button id="news-tab" class="tab px-6 py-2 rounded-full text-primary hover:bg-gray-200 font-medium transition-all duration-200">
News
</button> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <div class="lg:col-span-1"> <div class="rounded-xl p-6"> <h3 id="sidebar-title" class="text-3xl font-bold text-primary mb-4" style="font-family: 'GT Alpina Fine', serif;">Latest Updates</h3> <div id="sidebar-content" class="space-y-3"> <div class="text-gray-600 text-sm">Latest Updates</div> <div class="text-gray-600 text-sm">Featured Research</div> <div class="text-gray-600 text-sm">Community Highlights</div> <div class="text-gray-600 text-sm">Getting Started</div> <div class="text-gray-600 text-sm">Research Overview</div> </div> </div> </div> <div class="lg:col-span-3"> <div id="tab-content" class="space-y-8"> <!-- Overview content (default) --> <div id="overview-content" class="tab-content"> `, ' </div> <div id="research-content" class="tab-content hidden"> ', ' </div> <!-- Events content --> <div id="events-content" class="tab-content hidden"> ', ' </div> <!-- News content --> <div id="news-content" class="tab-content hidden"> ', " </div> </div> </div> </div> </main> </div> <script>\n      document.addEventListener('DOMContentLoaded', () => {\n        const loadingScreen = document.getElementById('loading-screen');\n        const mainContent = document.getElementById('main-content');\n\n        if (loadingScreen && mainContent) {\n          setTimeout(() => {\n            loadingScreen.style.transform = 'translateY(-100%)';\n            setTimeout(() => {\n              loadingScreen.style.display = 'none';\n              mainContent.classList.remove('hidden');\n              setTimeout(() => {\n                mainContent.classList.remove('opacity-0');\n              }, 50);\n            }, 700);\n          }, 2000);\n        }\n\n        // Sidebar content data\n        const sidebarData = {\n          overview: {\n            title: 'Latest Updates',\n            items: ['Latest Updates', 'Featured Research', 'Community Highlights', 'Getting Started', 'Research Overview']\n          },\n          research: {\n            title: 'Research Teams',\n            items: ['Evolutionary Algorithms', 'Digital Organisms', 'Emergence Studies', 'Open-Ended Evolution', 'Artificial Life Systems']\n          },\n          events: {\n            title: 'Event Categories',\n            items: ['Upcoming Events', 'Conferences', 'Workshops', 'Symposiums', 'Webinars']\n          },\n          news: {\n            title: 'News Categories',\n            items: ['Latest News', 'Press Releases', 'Publications', 'Announcements', 'Media Coverage']\n          }\n        };\n\n        // Tab functionality\n        const tabs = document.querySelectorAll('.tab, .active-tab');\n        const tabContents = document.querySelectorAll('.tab-content');\n        const sidebarTitle = document.getElementById('sidebar-title');\n        const sidebarContent = document.getElementById('sidebar-content');\n\n        function showTab(tabName) {\n          // Hide all tab contents\n          tabContents.forEach((content) => {\n            content.classList.add('hidden');\n          });\n\n          // Show selected tab content\n          const selectedContent = document.getElementById(\\`\\${tabName}-content\\`);\n          if (selectedContent) {\n            selectedContent.classList.remove('hidden');\n          }\n\n          // Update sidebar\n          const sidebarInfo = sidebarData[tabName];\n          if (sidebarInfo && sidebarTitle && sidebarContent) {\n            sidebarTitle.textContent = sidebarInfo.title;\n            sidebarContent.innerHTML = sidebarInfo.items.map(item => \\`<div class=\"text-gray-600 text-sm\">\\${item}</div>\\`).join('');\n          }\n        }\n\n        tabs.forEach((tab) => {\n          tab.addEventListener('click', function () {\n            // Update tab styling\n            tabs.forEach((t) => {\n              t.classList.remove('active-tab', 'bg-primary', 'text-white');\n              t.classList.add('tab', 'text-primary');\n            });\n\n            this.classList.remove('tab', 'text-primary');\n            this.classList.add('active-tab', 'bg-primary', 'text-white');\n\n            // Get tab name from ID\n            const tabName = this.id.replace('-tab', '');\n            showTab(tabName);\n          });\n        });\n\n        // Initialize with overview tab\n        showTab('overview');\n      });\n    <\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "BlogLoading", $$BlogLoading, { "lang": lang }), renderComponent($$result, "Header", $$Header, { "lang": lang }), contentData.overview.posts.map((post) => renderTemplate`<article class="py-6 border-b border-gray-200 last:border-b-0"> <h2 class="text-2xl font-bold text-primary mb-4 leading-tight" style="font-family: 'GT Alpina Fine', serif;"> ${post.title} </h2> <p class="text-gray-600 leading-relaxed mb-6 text-20px"> ${post.excerpt} </p> <button class="px-6 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-200">
Explore
</button> </article>`), contentData.research.posts.map((post) => renderTemplate`<article class="py-6 border-b border-gray-200 last:border-b-0"> <h2 class="text-2xl font-bold text-primary mb-4 leading-tight" style="font-family: 'GT Alpina Fine', serif;"> ${post.title} </h2> <p class="text-gray-600 leading-relaxed mb-6 text-20px"> ${post.excerpt} </p> <button class="px-6 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-200">
Explore
</button> </article>`), contentData.events.posts.map((post) => renderTemplate`<article class="py-6 border-b border-gray-200 last:border-b-0"> <h2 class="text-2xl font-bold text-primary mb-4 leading-tight" style="font-family: 'GT Alpina Fine', serif;"> ${post.title} </h2> <p class="text-gray-600 leading-relaxed mb-6 text-20px"> ${post.excerpt} </p> <button class="px-6 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-200">
Explore
</button> </article>`), contentData.news.posts.map((post) => renderTemplate`<article class="py-6 border-b border-gray-200 last:border-b-0"> <h2 class="text-2xl font-bold text-primary mb-4 leading-tight" style="font-family: 'GT Alpina Fine', serif;"> ${post.title} </h2> <p class="text-gray-600 leading-relaxed mb-6 text-20px"> ${post.excerpt} </p> <button class="px-6 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-200">
Explore
</button> </article>`));
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
