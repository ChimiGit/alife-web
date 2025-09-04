import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderScript, r as renderTemplate } from './astro/server_Rd5E_EmL.mjs';
import 'clsx';
import fs from 'fs';
import path from 'path';
/* empty css                         */

async function loadMarkdownTranslations(lang) {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "translations",
      "translations.md"
    );
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      return parseMarkdownTranslations(fileContent, lang);
    }
  } catch (error) {
  }
  return {};
}
function parseMarkdownTranslations(content, lang) {
  const translations = {};
  const lines = content.split("\n");
  lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith("#") || trimmedLine.startsWith("##")) {
      return;
    }
    const equalIndex = trimmedLine.indexOf(" = ");
    if (equalIndex !== -1) {
      const english = trimmedLine.substring(0, equalIndex).trim();
      const japanese = trimmedLine.substring(equalIndex + 3).trim();
      if (lang === "jp") {
        translations[english] = japanese;
      } else {
        translations[english] = english;
      }
    }
  });
  return translations;
}

const $$Astro = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang = "en" } = Astro2.props;
  const translations = await loadMarkdownTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<header class="font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] sticky top-0 z-50" data-astro-cid-3ef6ksr2> <!-- Main  header content --> <div class="bg-white/20 backdrop-blur-md border-b border-white/30 shadow-sm" data-astro-cid-3ef6ksr2> <div class="max-w-6xl mx-auto px-4 flex justify-between items-center min-h-20" data-astro-cid-3ef6ksr2> <!-- Logo section --> <div class="flex items-center" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center" aria-label="ALIFE - Artificial Life Institute" data-astro-cid-3ef6ksr2> <img src="/assets/logo/logo.png" alt="ALIFE Logo" class="h-8 w-32" data-astro-cid-3ef6ksr2> </a> </div> <!-- Navigation section --> <nav class="flex items-center gap-8" role="navigation" aria-label="Main navigation" data-astro-cid-3ef6ksr2> <ul class="flex list-none m-0 p-0 gap-8" data-astro-cid-3ef6ksr2> <li class="m-0" data-astro-cid-3ef6ksr2> <a${addAttribute(`/?lang=${lang}`, "href")} class="nav-link no-underline text-primary font-normal text-sm transition-all duration-200 hover:text-accent-cyan relative" data-page="home" data-astro-cid-3ef6ksr2>${translations.Home || "Home"}</a> </li> <li class="m-0" data-astro-cid-3ef6ksr2> <a${addAttribute(`/about?lang=${lang}`, "href")} class="nav-link no-underline text-primary font-normal text-sm transition-all duration-200 hover:text-accent-cyan relative" data-page="about" data-astro-cid-3ef6ksr2>${translations["About Us"] || "About Us"}</a> </li> <li class="m-0" data-astro-cid-3ef6ksr2> <a${addAttribute(`/career?lang=${lang}`, "href")} class="nav-link no-underline text-primary font-normal text-sm transition-all duration-200 hover:text-accent-cyan relative" data-page="career" data-astro-cid-3ef6ksr2>${translations.Career || "Career"}</a> </li> <li class="m-0" data-astro-cid-3ef6ksr2> <a${addAttribute(`/blog?lang=${lang}`, "href")} class="nav-link no-underline text-primary font-normal text-sm transition-all duration-200 hover:text-accent-cyan relative" data-page="blog" data-astro-cid-3ef6ksr2>${translations.Blog || "Blog"}</a> </li> <li class="m-0" data-astro-cid-3ef6ksr2> <a${addAttribute(`/support?lang=${lang}`, "href")} class="nav-link no-underline text-primary font-normal text-sm transition-all duration-200 hover:text-accent-cyan relative" data-page="support" data-astro-cid-3ef6ksr2>${translations["Support Us"] || "Support Us"}</a> </li> </ul> <!-- Language selector --> <div class="flex items-center gap-2" id="language-selector" data-astro-cid-3ef6ksr2> <span class="w-px h-4 bg-gray-300" data-astro-cid-3ef6ksr2></span> <a href="?lang=en" class="no-underline font-medium text-xs transition-colors duration-200 hover:text-accent-cyan text-primary" aria-label="English" data-lang="en" data-astro-cid-3ef6ksr2>EN</a> <span class="w-px h-4 bg-gray-300" data-astro-cid-3ef6ksr2></span> <a href="?lang=jp" class="no-underline font-medium text-xs transition-colors duration-200 hover:text-accent-cyan text-primary" aria-label="Japanese" data-lang="jp" data-astro-cid-3ef6ksr2>JP</a> </div> </nav> </div> </div> </header>  ${renderScript($$result, "/Users/chimitshering/Documents/alife/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chimitshering/Documents/alife/src/components/Header.astro", void 0);

export { $$Header as $, loadMarkdownTranslations as l };
