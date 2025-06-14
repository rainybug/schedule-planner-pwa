// public/service-worker.js

// 필수: 등록 후 즉시 활성화
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', () => {
  self.clients.claim();
});

// 필수: fetch 핸들러 없으면 설치 불가!
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});