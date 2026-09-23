/* =========================================================
   Service Worker RévisQCM
   - Network-first pour HTML et JS  → toujours à jour en ligne
   - Cache-first pour le reste      → rapide et hors ligne
   - Auto-skipWaiting                → nouvelle version active tout de suite
   ========================================================= */

const VERSION = "20260923-1";  // ← change à chaque déploiement
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

/* --- Installation : on met tout en cache --- */
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  // Active immédiatement la nouvelle version sans attendre
  self.skipWaiting();
});

/* --- Activation : on vire les anciens caches --- */
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

/* --- Interception des requêtes --- */
self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);

  // Ne pas intercepter les requêtes non-GET ou cross-origin
  if(req.method !== "GET" || url.origin !== location.origin){
    return;
  }

  // Network-first pour HTML et JS → on récupère la version fraîche
  const isFresh = url.pathname.endsWith(".html") ||
                  url.pathname.endsWith(".js") ||
                  url.pathname.endsWith(".json") ||
                  url.pathname === "/" ||
                  url.pathname.endsWith("/");

  if(isFresh){
    e.respondWith(
      fetch(req)
        .then(res => {
          // Met à jour le cache au passage
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req))  // offline : utilise le cache
    );
    return;
  }

  // Cache-first pour les images, polices, etc.
  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});

/* --- Message depuis la page pour forcer l'activation --- */
self.addEventListener("message", e => {
  if(e.data === "SKIP_WAITING"){
    self.skipWaiting();
  }
});
