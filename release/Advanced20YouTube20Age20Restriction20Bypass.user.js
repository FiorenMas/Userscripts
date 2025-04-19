// ==UserScript==
// @name         Advanced YouTube Age Restriction Bypass
// @namespace    http://tampermonkey.net/
// @version      3.0
// @author       Your Name
// @match        *://www.youtube.com/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Advanced20YouTube20Age20Restriction20Bypass.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Advanced20YouTube20Age20Restriction20Bypass.meta.js
// ==/UserScript==
!function(){"use strict";function t(t){console.log(`[YouTube Bypass]: ${t}`)}!function(){const e=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(n,o){return o.includes("/youtubei/v1/player")&&(t("Intercepted request to /youtubei/v1/player"),this.addEventListener("load",(function(){const e=JSON.parse(this.responseText);"restricted"===e.playabilityStatus.status&&(e.playabilityStatus.status="OK",t("Bypassed age restriction!"))}))),e.apply(this,arguments)}}();function e(){const t=document.createElement("script");t.innerHTML="(function() {\n      const originalPlayer = window.ytPlayerConfig;\n      if (originalPlayer && originalPlayer.args) {\n        originalPlayer.args.raw_player_response.playabilityStatus.status = 'OK';\n        console.log('[YouTube Bypass]: Player configuration modified.');\n      }\n    })();",document.body.appendChild(t)}new MutationObserver((()=>{document.querySelector("ytd-watch-flexy[is-restricted]")&&(t("Detected restricted video player. Attempting bypass..."),setTimeout(e,1e3))})).observe(document.body,{childList:!0,subtree:!0})}();