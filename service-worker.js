const PRECACHE = 'precache-v9';
const RUNTIME = 'runtime-v8';

const PRECACHE_URLS = [
  '/',
  '/404.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', function(event) {
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
		return;
	}
	if (event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
			caches.open('RUNTIME').then(function(cache) {
				return cache.match(event.request).then(function(response) {
					var fetchPromise = fetch(event.request).then(function(networkResponse) {
						cache.put(event.request, networkResponse.clone());
						return networkResponse;
					})
					return response || fetchPromise;
				})
			})
		);
	}
});