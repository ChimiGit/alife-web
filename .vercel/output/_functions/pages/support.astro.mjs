import { c as createComponent, a as createAstro, m as maybeRenderHead, f as renderScript, e as renderTemplate, b as addAttribute, r as renderHead, d as renderComponent } from '../chunks/astro/server_BcM0bjOt.mjs';
import { l as loadMarkdownTranslations, $ as $$Header } from '../chunks/Header_VkMvDEAR.mjs';
/* empty css                                 */
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SupportLoading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SupportLoading;
  const { lang = "en" } = Astro2.props;
  const translations = await loadMarkdownTranslations(lang);
  return renderTemplate`<!-- Support Loading Page -->${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/assets/loader/support-loading.png');" data-astro-cid-jmfnqbd5> <!-- Animated Background Pattern --> <div class="absolute inset-0 opacity-30" data-astro-cid-jmfnqbd5> <div class="dots-pattern animate-pulse" data-astro-cid-jmfnqbd5></div> </div> <!-- Content --> <div class="relative z-10 text-center" data-astro-cid-jmfnqbd5> <h1 class="text-200px text-primary mb-8 animate-fade-in opacity-0 transition-opacity duration-1000 ease-out" style="font-family: 'GT Alpina Fine', serif;" data-astro-cid-jmfnqbd5> ${translations["Support Us"] || "Support Us"} </h1> </div> </div>  ${renderScript($$result, "/Users/chimitshering/Documents/alife-web/src/components/loaders/SupportLoading.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chimitshering/Documents/alife-web/src/components/loaders/SupportLoading.astro", void 0);

const $$Astro = createAstro();
const $$Support = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Support;
  const urlParams = new URLSearchParams(Astro2.url.search);
  const lang = urlParams.get("lang") || "en";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/assets/logo/thumbnail-logo.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Support Us - ALIFE</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gray-50"> <!-- Loading Screen --> <div id="loading-screen" class="fixed inset-0 z-50 transition-all duration-700 ease-in-out"> ${renderComponent($$result, "SupportLoading", $$SupportLoading, { "lang": lang })} </div> <!-- Main Content (Hidden Initially) --> <div id="main-content" class="opacity-0 transition-opacity duration-500 ease-in hidden"> ${renderComponent($$result, "Header", $$Header, { "lang": lang })} <!-- Main content --> <main class="pt-24" style="font-family: 'Inter', sans-serif;"> <!-- Hero Section --> <section class="bg-white py-20"> <div class="max-w-6xl mx-auto px-4 text-center"> <h1 class="text-5xl md:text-6xl text-primary mb-8 leading-tight" style="font-family: 'GT Alpina Fine', serif;">
Join the Evolution
</h1> </div> <p class="text-20px text-gray-700 max-w-5xl mx-auto leading-relaxed" style="line-height: 2">
Science advances through community support. Your contribution helps fund breakthrough research that
                    wouldn't be possible within traditional academic or corporate constraints. Our diverse team of world-class
                    researchers and visionaries are exploring uncharted territory—and that requires resources, patience, and
                    believers in long-term vision.
</p> </section> <!-- Contact Section --> <section class="bg-gray-50 py-20"> <div class="max-w-6xl mx-auto px-4"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> <!-- Contact Information --> <div class="space-y-8"> <!-- Email --> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <p class="text-20px text-primary font-medium">example@teamwebflow.com</p> </div> </div> <!-- Location --> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <p class="text-20px text-primary font-medium">Kyoto HQ, Japan</p> </div> </div> <!-- Phone --> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <p class="text-20px text-primary font-medium">+44 123 654 7890</p> </div> </div> </div> <!-- Contact Form --> <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200"> <form class="space-y-6"> <!-- Name Field --> <div> <label for="name" class="block text-20px font-medium text-gray-700 mb-2">
Name <span class="text-red-500">*</span> </label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 text-gray-900 placeholder-gray-500" placeholder="Your name"> </div> <!-- Email Field --> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
Email <span class="text-red-500">*</span> </label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 text-gray-900 placeholder-gray-500" placeholder="your.email@example.com"> </div> <!-- Message Field --> <div> <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
Message
</label> <textarea id="message" name="message" rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 text-gray-900 placeholder-gray-500 resize-vertical" placeholder="Tell us about your interest in supporting our research..."></textarea> </div> <!-- Submit Button --> <div class="flex justify-end"> <button type="submit" class="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-accent-cyan transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
Submit
</button> </div> </form> </div> </div> </div> </section> </main> </div> <!-- Loading screen script --> ${renderScript($$result, "/Users/chimitshering/Documents/alife-web/src/pages/support.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/chimitshering/Documents/alife-web/src/pages/support.astro", void 0);

const $$file = "/Users/chimitshering/Documents/alife-web/src/pages/support.astro";
const $$url = "/support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Support,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
