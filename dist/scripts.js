!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",(async function(e){document.getElementById("dark-mode-switcher").addEventListener("click",(function(){t.hasAttribute("dark-mode")?(t.removeAttribute("dark-mode"),Array.from(document.getElementsByClassName("liste-fleche")).forEach(e=>{e.setAttribute("src","img/arrow.png")}),Array.from(document.getElementsByClassName("picto-station")).forEach(e=>{e.setAttribute("src","img/picto-station.png")})):(t.setAttribute("dark-mode","true"),Array.from(document.getElementsByClassName("liste-fleche")).forEach(e=>{e.setAttribute("src","img/dark-mode/arrow.png")}),Array.from(document.getElementsByClassName("picto-station")).forEach(e=>{e.setAttribute("src","img/dark-mode/picto-station.png")}))}),!1);const t=document.documentElement;let r=await async function(){let e=await fetch("https://data.mulhouse-alsace.fr/api/records/1.0/search/?dataset=68224_stationsvelocite_jcdecaux_tempsreel&rows=40&facet=status&facet=contract_name&facet=name&timezone=Europe%2FBerlin");return await e.json()}();console.log(r)}))}]);