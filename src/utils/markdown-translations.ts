// JSON-based translation utility for ALIFE website
import translationsData from '../translations/translations.json';

interface TranslationMap {
  [key: string]: string;
}

export async function loadMarkdownTranslations(
  lang: string
): Promise<TranslationMap> {
  try {
    const langData = translationsData[lang as keyof typeof translationsData];
    if (langData) {
      return langData as TranslationMap;
    }
  } catch (error) {
    // console.warn(`Failed to load translations:`, error);
  }

  // Fallback to English if language not found
  return translationsData.en as TranslationMap;
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
