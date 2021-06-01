const CACHE_NAME = 'version-1';
const self = this;

//Service Worker Installation
//Logic
const cacheResources = async () => {
	const urlsToCache = ['index.html', 'offline.html'];
	try {
		const cache = await caches.open(CACHE_NAME);
		console.log('Cache Opened');
		return cache.addAll(urlsToCache);
	} catch (err) {
		console.log('Failed to cache data');
	}
};
//Call
self.addEventListener('install', (event) => event.waitUntil(cacheResources()));
//SW request Listener
//Logic

const cachedResource = async (req) => {
	try {
		const cache = await caches.open(CACHE_NAME);
		await cache.match(req);
		return fetch(req);
	} catch (err) {
		console.log('Failed to connect to internet');
		await caches.match('offline.html');
		return fetch('offline.html');
	}
};
//Call
self.addEventListener('fetch', (event) =>
	event.respondWith(cachedResource(event.request))
);

// //Service Worker Activation
//Logic
const cacheWhitelist = [];
cacheWhitelist.push(CACHE_NAME);
const cacheMap = async (cacheNames) => {
	try {
		await caches.keys();
		Promise.all(
			cacheNames.map((cacheName) => {
				if (!cacheWhitelist.includes(cacheName)) {
					console.log('Cache Refreshed');
					return caches.delete(cacheName);
				}
				return cacheWhitelist;
			})
		);
	} catch (err) {
		console.log('Whitelist has failed to update');
	}
};
//Call
self.addEventListener('activate', (event) =>
	event.waitUntil(cacheMap(cacheWhitelist))
);

// self.addEventListener('activate', (event) => {});

//Service Worker installation

// self.addEventListener('install', (event) => {
// 	event.waitUntil(
// 		caches.open(CACHE_NAME).then((cache) => {
// 			console.log('Opened Cache');
// 			return cache.addAll(urlsToCache);
// 		})
// 	);
// });

//Request listener
// self.addEventListener('fetch', (event) => {
// 	event.respondWith(
// 		caches.match(event.request).then(() => {
// 			return fetch(event.request).catch(() => caches.match('offline.html'));
// 		})
// 	);
// });
//SW Activation
// 	cacheWhitelist.push(CACHE_NAME);
// 	event.waitUntil(
// 		caches.keys().then((cacheNames) =>
// 			Promise.all(
// 				cacheNames.map((cacheName) => {
// 					if (!cacheWhitelist.includes(cacheName)) {
// 						return caches.delete(cacheName);
// 					}
// 					return cacheWhitelist;
// 				})
// 			)
// 		)
// 	);
// });
