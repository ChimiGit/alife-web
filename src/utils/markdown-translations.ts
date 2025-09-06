// Language utility for ALIFE website (translations removed, language switching preserved)

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
