self.addEventListener('install', e => {
  console.log('✅ Service Worker installed');
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});