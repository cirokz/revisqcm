const VERSION = "2026-09-23-v8";
const CACHE = "revisqcm-" + VERSION;

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
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
  "./data/micro-ch2.js",
  "./data/calculs.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k.startsWith("revisqcm-") && k !== CACHE)
            .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);
  if(req.method !== "GET" || url.origin !== location.origin) return;

  const isFresh = url.pathname.endsWith(".html") ||
                  url.pathname.endsWith(".js") ||
                  url.pathname.endsWith(".json") ||
                  url.pathname === "/" ||
                  url.pathname.endsWith("/");

  if(isFresh){
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  e.respondWith(caches.match(req).then(cached => cached || fetch(req)));
});

self.addEventListener("message", e => {
  if(e.data === "SKIP_WAITING") self.skipWaiting();
});
