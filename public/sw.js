// Importation de workbox depuis un CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

// Ajout de code personnalisé
console.log('this is my custom service worker');

// Routing
workbox.routing.registerRoute(
  new RegExp('/css|fonts|img|js/'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('/index.html/'),
  new workbox.strategies.NetworkFirst()
);

//Ajout d'un placeholder 
workbox.precaching.precacheAndRoute([
  {
    "url": "css/positioning-temporaire.css",
    "revision": "f6379e11c6c87052d140d46140aebb52"
  },
  {
    "url": "css/styles.css",
    "revision": "1f068bbf388375ba993aab05d92c720e"
  },
  {
    "url": "css/styling-temporaire.css",
    "revision": "0081b993d86189953e85622f735e129a"
  },
  {
    "url": "fonts/weblysleekuisb.eot",
    "revision": "38ffd2907201879ca3bc66c6fe945580"
  },
  {
    "url": "fonts/weblysleekuisb.svg",
    "revision": "1fe2037dc4c6dd4c35e9d594a5780fed"
  },
  {
    "url": "fonts/weblysleekuisb.ttf",
    "revision": "66d969d6da145590fe002a0f873ad6b9"
  },
  {
    "url": "fonts/weblysleekuisb.woff",
    "revision": "de632f8df355e385370443ae7f24e812"
  },
  {
    "url": "img/arrow.png",
    "revision": "2ed9ca6f0d4ec926ca15f5236ba784de"
  },
  {
    "url": "img/dark-mode/arrow.png",
    "revision": "0cb5d2189374a2bf0f16a749097e0c69"
  },
  {
    "url": "img/dark-mode/picto-station.png",
    "revision": "e632421c1429ee02dee4c84bb90ff7e6"
  },
  {
    "url": "img/logo_small.png",
    "revision": "6170dd9ec092d023172ff4de872189b1"
  },
  {
    "url": "img/logo.png",
    "revision": "2cc6c24f6e3d141ea9b60fcc1fd4c224"
  },
  {
    "url": "img/picto-favoris.png",
    "revision": "0419e0285ad3a8b5347142b7281bf3b9"
  },
  {
    "url": "img/picto-liste.png",
    "revision": "1f275a6f90239c9ee08d052569d7156d"
  },
  {
    "url": "img/picto-map.png",
    "revision": "e2166c52646b0f1b99335f20950ff317"
  },
  {
    "url": "img/picto-station.png",
    "revision": "5f5be1f4bc7e1f64d4fe8c9e0f245712"
  },
  {
    "url": "index.html",
    "revision": "9d59e4f034c5bf4f7261847e72cd6118"
  },
  {
    "url": "js/dark-mode.js",
    "revision": "5d97434b873a004abee8d1f8fea18f13"
  },
  {
    "url": "js/scripts.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
]);