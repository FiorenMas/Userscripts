// ==UserScript==
// @name         YouTube Age Restriction Bypass (Stealth Version)
// @namespace    http://tampermonkey.net/
// @version      5.0
// @author       
// @match        *://www.youtube.com/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Advanced20YouTube20Age20Restriction20Bypass.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Advanced20YouTube20Age20Restriction20Bypass.meta.js
// ==/UserScript==
(function(){"use strict";const a=t=>!1;function c(t){if(!t?.playabilityStatus)return t;const i=t.playabilityStatus.status;return["AGE_VERIFICATION_REQUIRED","LOGIN_REQUIRED","UNPLAYABLE","RESTRICTED"].includes(i)&&(t.playabilityStatus.status="OK",delete t.playabilityStatus.errorScreen,delete t.playabilityStatus.messages,a("Patched playability status.")),t}const u=window.fetch;window.fetch=new Proxy(u,{apply(t,i,e){return Reflect.apply(t,i,e).then(async s=>{const r=s.clone();if((typeof e[0]=="string"?e[0]:e[0].url||"").includes("/youtubei/v1/player"))try{const n=await r.json(),o=c(JSON.parse(JSON.stringify(n))),d=new Blob([JSON.stringify(o)],{type:"application/json"});return new Response(d,{status:s.status,statusText:s.statusText,headers:s.headers})}catch(n){return a(`Fetch patch failed: ${n.message}`),s}return s})}});const y=XMLHttpRequest;window.XMLHttpRequest=new Proxy(y,{construct(t,i){const e=new t(...i);let s=!1;const r=e.open;e.open=function(n,o){return s=o.includes("/youtubei/v1/player"),r.apply(this,arguments)};const l=e.send;return e.send=function(){return s&&e.addEventListener("readystatechange",function(){if(e.readyState===4&&e.responseType===""&&e.responseText)try{const n=JSON.parse(e.responseText);c(n)}catch{a("XHR patch failed")}}),l.apply(this,arguments)},e}});function p(){const t=document.createElement("script");t.textContent=`
      (function() {
        try {
          const patch = (res) => {
            if (!res?.playabilityStatus) return;
            const status = res.playabilityStatus.status;
            if (['AGE_VERIFICATION_REQUIRED','RESTRICTED','LOGIN_REQUIRED'].includes(status)) {
              res.playabilityStatus.status = 'OK';
              delete res.playabilityStatus.errorScreen;
              console.log('[YTBypass] ytInitialPlayerResponse patched.');
            }
          };
          if (window.ytInitialPlayerResponse) patch(window.ytInitialPlayerResponse);
          if (window.ytplayer?.config?.args?.player_response) {
            const res = JSON.parse(window.ytplayer.config.args.player_response);
            patch(res);
            window.ytplayer.config.args.player_response = JSON.stringify(res);
          }
        } catch (_) {}
      })();
    `,document.documentElement.appendChild(t),t.remove()}new MutationObserver(()=>{document.querySelector("ytd-watch-flexy[is-restricted]")&&(a("Restricted video detected."),setTimeout(p,1e3))}).observe(document.body,{childList:!0,subtree:!0})})();
