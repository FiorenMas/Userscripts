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
!function(){"use strict";function e(e){console.log(`[YouTube Bypass]: ${e}`)}!function(){const t=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(i,n){return n.includes("/youtubei/v1/player")&&(e("Intercepted YouTube player API request"),this.addEventListener("readystatechange",(function(){if(4===this.readyState&&200===this.status)try{const t=JSON.parse(this.responseText);"AGE_RESTRICTED"===t.playabilityStatus?.status&&(e("Detected age-restricted video. Modifying response..."),t.playabilityStatus.status="OK",t.playabilityStatus.reason="",Object.defineProperty(this,"responseText",{value:JSON.stringify(t)}))}catch(t){e("Error modifying API response: "+t.message)}}))),t.apply(this,arguments)}}();new MutationObserver((()=>{document.querySelector("ytd-watch-flexy[is-restricted]")&&(e("Detected restricted video player. Attempting bypass..."),function(){const e=document.createElement("script");e.innerHTML="\n            (function() {\n                const originalPlayer = window.ytPlayerConfig;\n                if (originalPlayer && originalPlayer.args) {\n                    originalPlayer.args.raw_player_response.playabilityStatus.status = 'OK';\n                    console.log('[YouTube Bypass]: Player configuration modified.');\n                }\n            })();\n        ",document.body.appendChild(e),e.remove()}())})).observe(document.body,{childList:!0,subtree:!0}),e("Script initialized. Watching for restricted videos...")}();