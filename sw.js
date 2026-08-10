// Service worker minimo: permette l'installazione come app (PWA).
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // passa semplicemente le richieste, nessuna cache offline complessa
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
