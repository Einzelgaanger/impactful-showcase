const VERSION = 'v3';
const RUNTIME_CACHE = `runtime-${VERSION}`;
const ASSETS_CACHE = `assets-${VERSION}`;

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/favicon.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(RUNTIME_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((name) => ![RUNTIME_CACHE, ASSETS_CACHE].includes(name))
          .map((name) => caches.delete(name))
      );
      await self.clients.claim();
    })()
  );
});

function isSameOrigin(requestUrl) {
  try {
    const url = new URL(requestUrl);
    return url.origin === self.location.origin;
  } catch {
    return false;
  }
}

function isViteAsset(requestUrl) {
  try {
    const { pathname } = new URL(requestUrl);
    return pathname.startsWith('/assets/');
  } catch {
    return false;
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return; // bypass non-GET

  // Avoid touching cross-origin requests
  if (!isSameOrigin(request.url)) return;

  // App shell navigation: network-first with cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch('/index.html', { cache: 'no-cache' });
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put('/index.html', fresh.clone());
          return fresh;
        } catch {
          const cached = await caches.match('/index.html');
          return cached || new Response('Offline', { status: 503 });
        }
      })()
    );
    return;
  }

  // Vite hashed assets: stale-while-revalidate
  if (isViteAsset(request.url)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(ASSETS_CACHE);
        const cached = await cache.match(request);
        const networkFetch = fetch(request)
          .then((response) => {
            if (response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => undefined);
        return cached || (await networkFetch) || new Response('Offline', { status: 503 });
      })()
    );
    return;
  }

  // Other same-origin GET: cache-first then network
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        const cache = await caches.open(RUNTIME_CACHE);
        if (response.ok) cache.put(request, response.clone());
        return response;
      } catch {
        return new Response('Offline', { status: 503 });
      }
    })()
  );
});
