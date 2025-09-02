// Translation utility for ALIFE website
export async function loadTranslations(lang: string) {
  try {
    const response = await fetch(`/${lang}.json`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    // Failed to load translations
  }

  // Fallback to English
  try {
    const response = await fetch('/en.json');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    // Failed to load English translations
  }

  return {};
}

export function getTranslation(
  translations: any,
  key: string,
  fallback: string = key
): string {
  return translations[key] || fallback;
}
