// Importation de workbox depuis un CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

// Ajout de code personnalisé
console.log('this is my custom service worker');

// Routing
workbox.routing.registerRoute(
  new RegExp('/css|fonts|img/'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('/scripts.js/'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('/index.html/'),
  new workbox.strategies.NetworkFirst()
);

//Ajout d'un placeholder 
workbox.precaching.precacheAndRoute([]);