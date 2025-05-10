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
(function(){"use strict";function t(e){console.log(`[YouTube Bypass]: ${e}`)}(function(){const o=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(a,s){return s.includes("/youtubei/v1/player")&&(t("Intercepted request to /youtubei/v1/player"),this.addEventListener("load",function(){const i=JSON.parse(this.responseText);i.playabilityStatus.status==="restricted"&&(i.playabilityStatus.status="OK",t("Bypassed age restriction!"))})),o.apply(this,arguments)}})(),new MutationObserver(()=>{document.querySelector("ytd-watch-flexy[is-restricted]")&&(t("Detected restricted video player. Attempting bypass..."),setTimeout(r,1e3))}).observe(document.body,{childList:!0,subtree:!0});function r(){const e=document.createElement("script");e.innerHTML=`(function() {
      const originalPlayer = window.ytPlayerConfig;
      if (originalPlayer && originalPlayer.args) {
        originalPlayer.args.raw_player_response.playabilityStatus.status = 'OK';
        console.log('[YouTube Bypass]: Player configuration modified.');
      }
    })();`,document.body.appendChild(e)}})();
