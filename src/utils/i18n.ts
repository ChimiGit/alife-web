import enTranslations from '../i18n/en.json';
import jpTranslations from '../i18n/jp.json';

export type Locale = 'en' | 'ja';

export const locales: Locale[] = ['en', 'ja'];

export const defaultLocale: Locale = 'en';

export function getTranslations(locale: Locale) {
  switch (locale) {
    case 'ja':
      return jpTranslations;
    case 'en':
    default:
      return enTranslations;
  }
}

export function t(locale: Locale, key: string): string {
  const translations = getTranslations(locale);
  const keys = key.split('.');
  let value: any = translations;

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if key not found
      const enTranslationsFallback = getTranslations('en');
      let enValue: any = enTranslationsFallback;
      for (let j = 0; j < keys.length; j++) {
        const enKey = keys[j];
        if (enValue && typeof enValue === 'object' && enKey in enValue) {
          enValue = enValue[enKey];
        } else {
          return key; // Return the key itself if not found anywhere
        }
      }
      return typeof enValue === 'string' ? enValue : key;
    }
  }

  return typeof value === 'string' ? value : key;
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  return defaultLocale;
}

export function getStoredLocale(): Locale | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('alife-locale') as Locale | null;
  }
  return null;
}

export function setStoredLocale(locale: Locale): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('alife-locale', locale);
  }
}

export function getEffectiveLocale(pathname: string): Locale {
  // First check if there's a stored preference
  const storedLocale = getStoredLocale();
  if (storedLocale && locales.includes(storedLocale)) {
    return storedLocale;
  }

  // Fall back to path-based detection
  return getLocaleFromPath(pathname);
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  // Clean the pathname - remove any existing locale prefixes
  let cleanPath = pathname;

  // Remove any locale prefix
  if (cleanPath.startsWith('/ja/')) {
    cleanPath = cleanPath.replace('/ja/', '/');
  } else if (cleanPath === '/ja') {
    cleanPath = '/';
  } else if (cleanPath.startsWith('/en/')) {
    cleanPath = cleanPath.replace('/en/', '/');
  } else if (cleanPath === '/en') {
    cleanPath = '/';
  }

  // Handle root path
  if (cleanPath === '/') {
    return locale === 'ja' ? '/ja' : '/';
  }

  // Add locale prefix if switching to Japanese
  if (locale === 'ja') {
    return `/ja${cleanPath}`;
  }

  // For English (default), return clean path
  return cleanPath;
}
