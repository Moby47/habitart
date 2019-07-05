var staticCacheName = "pwa-H" + new Date().getTime();
var filesToCache = [
    '/',
    '/static/offline.html',
    '/static/css/style.css',
    '/static/css/owl.carousel.css',
    'https://cdn.jsdelivr.net/gh/shakrmedia/tuesday@v1.1.0/build/tuesday.min.css',
    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    

    '/static/js/jquery.min.js',
    '/static/js/bootstrap.js',
    '/static/js/lightbox.js',
    '/static/js/owl.carousel.js',

    '/static/images/icons/app-icon-48x48.png',
    '/static/images/icons/app-icon-96x96.png',
    '/static/images/icons/app-icon-144x144.png',
    '/static/images/icons/app-icon-256x256.png',


    '/static/images/home.png',
    '/static/images/close.png',
    '/static/images/lazy.gif',
    '/static/images/next.png',
    '/static/images/prev.png',
    /*'https://firebasestorage.googleapis.com/v0/b/habitart-60df0.appspot.com/o/1.jpg?alt=media&token=7dd4de02-f27d-4662-9e1f-f4f8a6602102',
    'https://firebasestorage.googleapis.com/v0/b/habitart-60df0.appspot.com/o/12.jpg?alt=media&token=5375c155-1779-460d-ae3b-55943a017b4c',
    'https://firebasestorage.googleapis.com/v0/b/habitart-60df0.appspot.com/o/10.jpg?alt=media&token=f777d345-be47-4fa6-b46d-3424c38d2c7f',
    'https://firebasestorage.googleapis.com/v0/b/habitart-60df0.appspot.com/o/7.jpg?alt=media&token=70fd2660-2230-44b2-b374-7d42e4d79e43',
    'https://firebasestorage.googleapis.com/v0/b/habitart-60df0.appspot.com/o/8.jpg?alt=media&token=3212969e-817d-4695-abda-141709141b4f',
    'https://firebasestorage.googleapis.com/v0/b/habitart-60df0.appspot.com/o/3.jpg?alt=media&token=3e65c18f-e4d6-466e-9c59-7ea435cbc9ce',*/
];

// Cache on install
self.addEventListener("install", event => {
    console.log('[Service Worker] Installing Service Worker ...', event);
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating Service Worker ....', event);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("pwa-H")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
               // return caches.match(event.request);
                return caches.match('/static/offline.html');
            })
    )
});