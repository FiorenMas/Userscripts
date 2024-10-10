// ==UserScript==
// @name                Disable YouTube Music AutoPause
// @name:en             Disable YouTube Music AutoPause
// @name:ja             Disable YouTube Music AutoPause
// @name:zh-TW          Disable YouTube Music AutoPause
// @name:zh-CN          Disable YouTube Music AutoPause
// @namespace           http://tampermonkey.net/
// @version             2023.12.01.0
// @license             MIT License
// @description         "Video paused. Continue watching?" and "Still watching? Video will pause soon" will not appear anymore.
// @description:en      "Video paused. Continue watching?" and "Still watching? Video will pause soon" will not appear anymore.
// @description:ja      「動画が一時停止されました。続きを視聴しますか？」と「視聴を続けていますか？動画がまもなく一時停止されます」は二度と起こりません。
// @description:zh-TW   「影片已暫停，要繼續觀賞嗎？」和「你還在螢幕前嗎？影片即將暫停播放」不再顯示。
// @description:zh-CN   「视频已暂停。是否继续观看？」和「仍在观看？视频即将暂停」不再显示。
// @author              CY Fung
// @match               https://music.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/disable-youtube-autopause.svg
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Disable20YouTube20Music20AutoPause.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Disable20YouTube20Music20AutoPause.meta.js
// ==/UserScript==
!function(){"use strict";const e=(async()=>{})().constructor,t=new WeakMap,n=new WeakMap,o=new WeakMap,a="YouTube Music";let r=0;const s=e=>e?e.polymerController||e.inst||e||0:e||0;function l(...e){Date.now()<r||(r=Date.now()+280,console.log(...e))}function c(t,n,o,a,r,s,l){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get(){e.resolve(new Date).then(r).catch(console.warn);return 2===o?`${a}`:a},set(t){let n=l.get(this);return e.resolve([n,t,new Date]).then(s).catch(console.warn),l.set(this,t),!0}})}function i(e){if(!e||t.has(e))return;const r=e.playbackPauseDelayMs,s=e.promptDelaySec,i=e.lactThresholdMs,u=Math.floor(.1*Number.MAX_SAFE_INTEGER),y=Math.floor(u/1e3);if("playbackPauseDelayMs"in e&&r>=0&&r<4*u){t.set(e,r);const n="string"==typeof r?2:+("number"==typeof r);n>=1&&c(e,"playbackPauseDelayMs",n,5*u,(e=>{l(`${a} is trying to pause video...`,e.toLocaleTimeString())}),(e=>{const[t,n,o]=e;console.log(`${a} is trying to change value 'playbackPauseDelayMs' from ${t} to ${n} ...`,o.toLocaleTimeString())}),t),"number"!=typeof(e.showPausedActions||0).length||e.tvTyh||(e.tvTyh=[],function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get(){const e=this[n];return(e||0).length>=1&&(e.length=0),e},set:e=>!0})}(e,"showPausedActions","tvTyh"))}if("promptDelaySec"in e&&s>=0&&s<4*y){n.set(e,s);const t="string"==typeof s?2:+("number"==typeof s);t>=1&&c(e,"promptDelaySec",t,5*y,(e=>{l(`${a} is trying to pause video...`,e.toLocaleTimeString())}),(e=>{const[t,n,o]=e;console.log(`${a} is trying to change value 'promptDelaySec' from ${t} to ${n} ...`,o.toLocaleTimeString())}),n)}if("lactThresholdMs"in e&&i>=0&&i<4*u){o.set(e,i);const t="string"==typeof i?2:+("number"==typeof i);t>=1&&c(e,"lactThresholdMs",t,5*u,(e=>{}),(e=>{const[t,n,o]=e;console.log(`${a} is trying to change value 'lactThresholdMs' from ${t} to ${n} ...`,o.toLocaleTimeString())}),o)}}let u=Symbol(),y=0;function p(e){if(1==e||3==e){y>1e9&&(y=9);let e=y;requestAnimationFrame((()=>{e===y&&f()}))}}function f(){let e=null;const t=document.querySelector("#player")||0;try{e=(s(t).__data||t.__data||0).playerResponse_.messages}catch(e){}if(e&&e.length>0)for(const t of e)if(t.youThereRenderer){let e=null;try{e=t.youThereRenderer.configData.youThereData}catch(e){}e&&i(e),e=null;break}}let h=0;function g(){f();const e=document.querySelector("#player")||0,t=s(e).playerApi_||e.playerApi_||s(e).playerApi||e.playerApi||0;"object"==typeof t&&(void 0===t[u]&&"function"==typeof t.getPlayerState&&(t[u]=t.getPlayerState,t.getPlayerState=function(){let e=this[u](...arguments);if(1==e||3==e)try{f()}catch(e){}return e}),"removeEventListener"in t&&"addEventListener"in t&&(t.removeEventListener("onStateChange",p,!1),t.addEventListener("onStateChange",p,!1)))}document.addEventListener("canplay",(function(t){"VIDEO"==t.target.nodeName&&t.target.closest("#player")&&async function(){r=Date.now()+3400,h++;let t=h;h>1e9&&(h=9),await e.resolve(0),t===h&&(g(),await new e((e=>setTimeout(e,3200))),t===h&&(g(),await new e((e=>setTimeout(e,5400))),t===h&&g()))}()}),!0)}();