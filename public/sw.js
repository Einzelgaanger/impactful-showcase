const VERSION = 'v4';
const CACHE_NAME = `elite-advisory-${VERSION}`;

// Simple service worker that only handles navigation
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Only cache the main page
      return cache.addAll(['/']);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle navigation requests (page loads)
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Try to fetch fresh content
          const response = await fetch(request);
          if (response.ok) {
            // Cache successful responses
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
          }
          return response;
        } catch (error) {
          // If network fails, try cache
          const cached = await caches.match('/');
          if (cached) {
            return cached;
          }
          // If no cache, return offline page
          return new Response('Offline - Please check your connection', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        }
      })()
    );
  }
  // For all other requests (assets, API calls, etc.), let the browser handle them normally
  // This prevents the service worker from interfering with asset loading
});
