// Service Worker for ALIFE website
const CACHE_NAME = 'alife-v1';
const STATIC_ASSETS = [
  '/',
  '/about',
  '/career',
  '/blog',
  '/support',
  '/assets/logo/logo.png',
  '/assets/logo/thumbnail-logo.png',
  '/fonts/gt-alpina-fine/GT-Alpina-Fine-Standard-Medium.woff2',
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(response => {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    })
  );
});
