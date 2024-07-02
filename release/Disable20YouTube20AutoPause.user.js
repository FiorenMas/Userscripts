// ==UserScript==
// @name                Disable YouTube AutoPause
// @name:en             Disable YouTube AutoPause
// @name:ja             Disable YouTube AutoPause
// @name:zh-TW          Disable YouTube AutoPause
// @name:zh-CN          Disable YouTube AutoPause
// @namespace           http://tampermonkey.net/
// @version             2024.02.21.0
// @license             MIT License
// @description         "Video paused. Continue watching?" and "Still watching? Video will pause soon" will not appear anymore.
// @description:en      "Video paused. Continue watching?" and "Still watching? Video will pause soon" will not appear anymore.
// @description:ja      「動画が一時停止されました。続きを視聴しますか？」と「視聴を続けていますか？動画がまもなく一時停止されます」は二度と起こりません。
// @description:zh-TW   「影片已暫停，要繼續觀賞嗎？」和「你還在螢幕前嗎？影片即將暫停播放」不再顯示。
// @description:zh-CN   「视频已暂停。是否继续观看？」和「仍在观看？视频即将暂停」不再显示。
// @author              CY Fung
// @match               https://www.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/disable-youtube-autopause.svg
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Disable20YouTube20AutoPause.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Disable20YouTube20AutoPause.meta.js
// ==/UserScript==
!function(e){"use strict";const t=(async()=>{})().constructor,o=new WeakMap,n=new WeakMap,a=new WeakMap,r="YouTube";let s=0;const c=e=>e?e.polymerController||e.inst||e||0:e||0;function l(...e){Date.now()<s||(s=Date.now()+280,console.log(...e))}function i(e,o,n,a,r,s,c){Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get(){t.resolve(new Date).then(r).catch(console.warn);return 2===n?`${a}`:a},set(e){const o=c.get(this);return t.resolve([o,e,new Date]).then(s).catch(console.warn),c.set(this,e),!0}})}function u(e){if(!e||o.has(e))return;const t=e.playbackPauseDelayMs,s=e.promptDelaySec,c=e.lactThresholdMs,u=Math.floor(.1*Number.MAX_SAFE_INTEGER),h=Math.floor(u/1e3);if("playbackPauseDelayMs"in e&&t>=0&&t<4*u){o.set(e,t);const n="string"==typeof t?2:+("number"==typeof t);n>=1&&i(e,"playbackPauseDelayMs",n,5*u,(e=>{l(`${r} is trying to pause video...`,e.toLocaleTimeString())}),(e=>{const[t,o,n]=e;console.log(`${r} is trying to change value 'playbackPauseDelayMs' from ${t} to ${o} ...`,n.toLocaleTimeString())}),o),"number"!=typeof(e.showPausedActions||0).length||e.tvTyh||(e.tvTyh=[],function(e,t,o){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get(){const e=this[o];return(e||0).length>=1&&(e.length=0),e},set:e=>!0})}(e,"showPausedActions","tvTyh"))}if("promptDelaySec"in e&&s>=0&&s<4*h){n.set(e,s);const t="string"==typeof s?2:+("number"==typeof s);t>=1&&i(e,"promptDelaySec",t,5*h,(e=>{l(`${r} is trying to pause video...`,e.toLocaleTimeString())}),(e=>{const[t,o,n]=e;console.log(`${r} is trying to change value 'promptDelaySec' from ${t} to ${o} ...`,n.toLocaleTimeString())}),n)}if("lactThresholdMs"in e&&c>=0&&c<4*u){a.set(e,c);const t="string"==typeof c?2:+("number"==typeof c);t>=1&&i(e,"lactThresholdMs",t,5*u,(e=>{}),(e=>{const[t,o,n]=e;console.log(`${r} is trying to change value 'lactThresholdMs' from ${t} to ${o} ...`,n.toLocaleTimeString())}),a)}}function h(){1===arguments.length&&(s=Date.now()+3400),t.resolve(0).then((()=>{let e=null;const t=document.querySelector("#page-manager")||0,o=c(t);try{e=o.data.playerResponse.messages}catch(e){}if(e&&e.length>0)for(const t of e)if((t||0).youThereRenderer){let e=null;try{e=t.youThereRenderer.configData.youThereData}catch(e){}e&&u(e),e=null;break}const n=document.querySelector("ytd-watch-flexy")||0,a=c(n);if(a){const e=(a.youThereManager_||n.youThereManager_||0||0).youThereData_||0;e&&u(e);const t=a.youthereDataChanged_;"function"!=typeof t||t.lq2S7||(a.youthereDataChanged_=function(e){return function(){console.log("youthereDataChanged_()");const t=e.apply(this,arguments);return h(),t}}(t),a.youthereDataChanged_.lq2S7=1)}})).catch(console.warn)}document.addEventListener("yt-page-data-updated",h,!1),document.addEventListener("yt-navigate-finish",h,!1),document.addEventListener("spfdone",h,!1)}();