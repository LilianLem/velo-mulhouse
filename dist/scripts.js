!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",(async function(e){document.getElementById("dark-mode-switcher").addEventListener("click",(function(){t.hasAttribute("dark-mode")?(t.removeAttribute("dark-mode"),Array.from(document.getElementsByClassName("liste-fleche")).forEach(e=>{e.setAttribute("src","img/arrow.png")}),Array.from(document.getElementsByClassName("picto-station")).forEach(e=>{e.setAttribute("src","img/picto-station.png")})):(t.setAttribute("dark-mode","true"),Array.from(document.getElementsByClassName("liste-fleche")).forEach(e=>{e.setAttribute("src","img/dark-mode/arrow.png")}),Array.from(document.getElementsByClassName("picto-station")).forEach(e=>{e.setAttribute("src","img/dark-mode/picto-station.png")}))}),!1);const t=document.documentElement;let r=await async function(){let e=await fetch("https://data.mulhouse-alsace.fr/api/records/1.0/search/?dataset=68224_stationsvelocite_jcdecaux_tempsreel&rows=40&sort=-number&facet=status&facet=contract_name&facet=name&timezone=Europe%2FBerlin");return await e.json()}();localStorage.setItem("etatStations",JSON.stringify(r)),etatStationsCached=localStorage.getItem("etatStations"),console.log(r),console.log(JSON.parse(etatStationsCached));let o=r.records[0].fields;console.log(o);for(var n=0;n<12;n++){let e=r.records[n].fields;s(n+1,a(e.name),e.available_bike_stands,e.available_bikes)}function a(e){let t=e.split("-")[1].trim(),r=t.split(" "),o=["DE","LA","DU","DES"];for(var n=0;n<r.length;n++)o.includes(r[n])?r[n]=r[n].toLowerCase():"'"==r[n][1]?(r[n]=r[n].toLowerCase(),r[n]=r[n][0]+r[n][1]+r[n][2].toUpperCase()+r[n].slice(3)):r[n]=r[n][0]+r[n].slice(1).toLowerCase();return t=r.join(" ")}function s(e,t,r,o){let n=document.getElementById("station-"+e);n.getElementsByTagName("h2")[0].innerHTML=t,n.getElementsByClassName("arceaux-compteur")[0].innerHTML=r,n.getElementsByClassName("velos-compteur")[0].innerHTML=o,console.log(n)}}))}]);