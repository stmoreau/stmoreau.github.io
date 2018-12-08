var CACHE_NAME = 'stephane-site-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/files/MOREAU_Stephane_CV.pdf',
  '/img/me.png',
  '/img/github-48.png',
  '/img/instagram-48.png',
  '/img/linkedin-48.png',
  '/img/twitter-48.png',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
  );
});
