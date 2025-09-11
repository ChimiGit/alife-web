// Language preference handling script
document.addEventListener('DOMContentLoaded', () => {
  const storedLocale = localStorage.getItem('alife-locale');
  const currentPath = window.location.pathname;

  // If user has a stored preference and is on a non-localized path, redirect
  if (
    storedLocale &&
    storedLocale !== 'en' &&
    !currentPath.startsWith('/ja/')
  ) {
    // Only redirect if not already on a localized path and not on a Japanese page
    if (
      currentPath === '/' ||
      (!currentPath.startsWith('/ja/') && !currentPath.includes('/ja/'))
    ) {
      window.location.href = `/ja${currentPath}`;
    }
  }

  // If user has English preference stored but is on Japanese page, redirect to English
  if (storedLocale === 'en' && currentPath.startsWith('/ja/')) {
    const englishPath = currentPath.replace('/ja', '');
    window.location.href = englishPath || '/';
  }
});
