self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Modo online padrão para garantir que os dados funcionem sem erros
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
