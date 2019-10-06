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
workbox.precaching.precacheAndRoute([
  {
    "url": "css/positioning-temporaire.css",
    "revision": "eb606a83fe01a2ad69b327069d72f322"
  },
  {
    "url": "css/styles.css",
    "revision": "b9c8eeb0d71ec6078660ff7dbe61a67f"
  },
  {
    "url": "css/styling-temporaire.css",
    "revision": "f3a025d2dd5a4d1cc6e8fa01d347745d"
  },
  {
    "url": "fonts/weblysleekuisb.eot",
    "revision": "38ffd2907201879ca3bc66c6fe945580"
  },
  {
    "url": "fonts/weblysleekuisb.svg",
    "revision": "7065a02e13237285681a6a87ab0a8020"
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
    "url": "img/dark-mode/picto-arceau.png",
    "revision": "724e22c15378357b0d543b85c1fcdf7c"
  },
  {
    "url": "img/dark-mode/picto-station.png",
    "revision": "e632421c1429ee02dee4c84bb90ff7e6"
  },
  {
    "url": "img/dark-mode/picto-velo.png",
    "revision": "3503a565b7e6d3b67c87ba3dab5c40ef"
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
    "url": "img/picto-arceau.png",
    "revision": "c00f59e17c2f784c473dd133c1e265e7"
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
    "url": "img/picto-velo.png",
    "revision": "9b7a6ce9fdcf8e8b22a1c8d93cc83413"
  },
  {
    "url": "index.html",
    "revision": "3edd292870bdea1d6bce082bee691930"
  },
  {
    "url": "scripts.js",
    "revision": "d206aa231a3879b40f95ac6485f337be"
  }
]);