!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",(async function(e){document.getElementById("dark-mode-switcher").addEventListener("click",(function(){t.hasAttribute("dark-mode")?(t.removeAttribute("dark-mode"),r("arrow",0),r("picto-station",0),r("picto-arceau",0),r("picto-velo",0)):(t.setAttribute("dark-mode","true"),r("arrow",1),r("picto-station",1),r("picto-arceau",1),r("picto-velo",1))}),!1);const t=document.documentElement;var n;navigator.onLine?(n=await async function(){let e=await fetch("https://data.mulhouse-alsace.fr/api/records/1.0/search/?dataset=68224_stationsvelocite_jcdecaux_tempsreel&rows=40&sort=-number&facet=status&facet=contract_name&facet=name&timezone=Europe%2FBerlin");return await e.json()}(),localStorage.setItem("etatStations",JSON.stringify(n)),document.getElementById("last-update").innerHTML="Données mises à jour en temps réel",console.log("Call API réussi, résultat :")):(n=localStorage.getItem("etatStations"),n=JSON.parse(n),document.getElementById("last-update").innerHTML="Vous êtes hors ligne : affichage des données en cache",console.log("Appareil hors ligne, affichage des données en cache :")),console.log(n);for(var o=0;o<12;o++){let e=n.records[o].fields;s(o+1,a(e.name),e.available_bike_stands,e.available_bikes)}function r(e,t){t?Array.from(document.getElementsByClassName(e)).forEach(t=>{t.setAttribute("src","img/dark-mode/"+e+".png")}):Array.from(document.getElementsByClassName(e)).forEach(t=>{t.setAttribute("src","img/"+e+".png")})}function a(e){let t=e.split("-")[1].trim(),n=t.split(" "),o=["DE","LA","DU","DES"];for(var r=0;r<n.length;r++)o.includes(n[r])?n[r]=n[r].toLowerCase():"'"==n[r][1]?(n[r]=n[r].toLowerCase(),n[r]=n[r][0]+n[r][1]+n[r][2].toUpperCase()+n[r].slice(3)):n[r]=n[r][0]+n[r].slice(1).toLowerCase();return t=n.join(" ")}function s(e,t,n,o){console.log(e);let r=document.getElementById("station-"+e);r.getElementsByTagName("h2")[0].innerHTML=t,r.getElementsByClassName("arceaux-compteur")[0].innerHTML=n,r.getElementsByClassName("velos-compteur")[0].innerHTML=o}}))}]);