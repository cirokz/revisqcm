const CACHE = "revisqcm-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./data/macro-ch1.js",
  "./data/macro-ch2.js",
  "./data/macro-ch3.js",
  "./data/macro-ch4.js",
  "./data/math-ch1.js",
  "./data/math-ch2.js",
  "./data/math-ch3.js",
  "./data/math-ch4.js",
  "./data/math-ch5.js",
  "./data/socio-ch1.js",
  "./data/compta-ch1.js",
  "./data/compta-ch2.js",
  "./data/org-ch1.js",
  "./data/droit-ch1.js",
  "./data/micro-ch1.js",
  "./data/micro-ch2.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});