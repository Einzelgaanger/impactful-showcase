// Kill-switch Service Worker
// Purpose: immediately unregister any existing SW and clear caches so users never see a blank page.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
      } catch {}

      try {
        const allClients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
        // Trigger a hard reload on all tabs so they bypass SW
        for (const client of allClients) {
          try {
            client.navigate(client.url);
          } catch {}
        }
      } catch {}

      try {
        await self.registration.unregister();
      } catch {}

      await self.clients.claim();
    })()
  );
});

// Do not intercept any fetches
self.addEventListener('fetch', () => {});
