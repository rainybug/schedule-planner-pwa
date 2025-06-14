self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// 이 부분이 반드시 필요해요!
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});