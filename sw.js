const CACHE_NAME = 'portfolio-pwa-v1.4';

const PRECACHE_ASSETS = [
    './',
    './index.html',
    './core/css/style.css',
    './core/js/script.js',
    './manifest.json',
    './core/pages/dokumentasi.html',
    './core/pages/keahlian.html',
    './core/pages/kontak.html',
    './core/pages/pengalaman.html',
    './core/pages/proyek.html',
    './core/pages/sertifikat.html',
    './resume/index.html',
    './assets/images/profile/profile.webp',
    './assets/images/icons/icon-192.webp',
    './assets/images/icons/icon-512.webp'
];

// Install Event — Precaching core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[PWA SW] Pre-caching offline assets');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(() => self.skipWaiting())
            .catch((err) => console.error('[PWA SW] Pre-cache failed:', err))
    );
});

// Activate Event — Cleaning up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[PWA SW] Removing old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event — Network First for navigation, Cache First / Stale-while-revalidate for static assets
self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Skip cross-origin non-http(s) requests
    if (!url.protocol.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // If asset exists in cache, return cached version and fetch fresh version in background
            if (cachedResponse) {
                fetch(event.request)
                    .then((networkResponse) => {
                        if (networkResponse && networkResponse.status === 200) {
                            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
                        }
                    })
                    .catch(() => { /* Offline fallback */ });
                return cachedResponse;
            }

            // Otherwise fetch from network and cache for offline use
            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
                return networkResponse;
            }).catch(() => {
                // If network fails and request is HTML navigation, fallback to cached index.html
                if (event.request.headers.get('accept')?.includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
