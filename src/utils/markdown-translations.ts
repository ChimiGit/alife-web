// Markdown-based translation utility for ALIFE website
import fs from 'fs';
import path from 'path';

interface TranslationMap {
  [key: string]: string;
}

export async function loadMarkdownTranslations(
  lang: string
): Promise<TranslationMap> {
  try {
    const filePath = path.join(
      process.cwd(),
      'src',
      'translations',
      'translations.md'
    );
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return parseMarkdownTranslations(fileContent, lang);
    }
  } catch (error) {
    // console.warn(`Failed to load markdown translations:`, error);
  }

  return {};
}

function parseMarkdownTranslations(
  content: string,
  lang: string
): TranslationMap {
  const translations: TranslationMap = {};
  const lines = content.split('\n');

  lines.forEach(line => {
    const trimmedLine = line.trim();

    // Skip empty lines, headers, and section markers
    if (
      !trimmedLine ||
      trimmedLine.startsWith('#') ||
      trimmedLine.startsWith('##')
    ) {
      return;
    }

    // Look for translation pattern: "English = Japanese"
    const equalIndex = trimmedLine.indexOf(' = ');
    if (equalIndex !== -1) {
      const english = trimmedLine.substring(0, equalIndex).trim();
      const japanese = trimmedLine.substring(equalIndex + 3).trim();

      if (lang === 'jp') {
        translations[english] = japanese;
      } else {
        // For English, use the English text as both key and value
        translations[english] = english;
      }
    }
  });

  return translations;
}

export function getTranslation(
  translations: TranslationMap,
  key: string,
  fallback: string = key
): string {
  if (!translations) return fallback;
  return translations[key] || fallback;
}

// Helper function to get current language from URL
export function getCurrentLanguage(): string {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'en';
  }
  return 'en';
}

// Helper function to switch language
export function switchLanguage(newLang: string): void {
  if (typeof window !== 'undefined') {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', newLang);
    window.location.href = currentUrl.toString();
  }
}
