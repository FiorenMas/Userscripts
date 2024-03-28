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
!function(e){"use strict";const t=(async()=>{})().constructor,n=new WeakMap,o=new WeakMap,a=new WeakMap,r="YouTube Music";let s=0;const l=e=>e?e.polymerController||e.inst||e||0:e||0;function c(...e){Date.now()<s||(s=Date.now()+280,console.log(...e))}function i(e,n,o,a,r,s,l){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get(){t.resolve(new Date).then(r).catch(console.warn);return 2===o?`${a}`:a},set(e){let n=l.get(this);return t.resolve([n,e,new Date]).then(s).catch(console.warn),l.set(this,e),!0}})}function u(e){if(!e||n.has(e))return;const t=e.playbackPauseDelayMs,s=e.promptDelaySec,l=e.lactThresholdMs,u=Math.floor(.1*Number.MAX_SAFE_INTEGER),y=Math.floor(u/1e3);if("playbackPauseDelayMs"in e&&t>=0&&t<4*u){n.set(e,t);const o="string"==typeof t?2:+("number"==typeof t);o>=1&&i(e,"playbackPauseDelayMs",o,5*u,(e=>{c(`${r} is trying to pause video...`,e.toLocaleTimeString())}),(e=>{const[t,n,o]=e;console.log(`${r} is trying to change value 'playbackPauseDelayMs' from ${t} to ${n} ...`,o.toLocaleTimeString())}),n),"number"!=typeof(e.showPausedActions||0).length||e.tvTyh||(e.tvTyh=[],function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get(){const e=this[n];return(e||0).length>=1&&(e.length=0),e},set:e=>!0})}(e,"showPausedActions","tvTyh"))}if("promptDelaySec"in e&&s>=0&&s<4*y){o.set(e,s);const t="string"==typeof s?2:+("number"==typeof s);t>=1&&i(e,"promptDelaySec",t,5*y,(e=>{c(`${r} is trying to pause video...`,e.toLocaleTimeString())}),(e=>{const[t,n,o]=e;console.log(`${r} is trying to change value 'promptDelaySec' from ${t} to ${n} ...`,o.toLocaleTimeString())}),o)}if("lactThresholdMs"in e&&l>=0&&l<4*u){a.set(e,l);const t="string"==typeof l?2:+("number"==typeof l);t>=1&&i(e,"lactThresholdMs",t,5*u,(e=>{}),(e=>{const[t,n,o]=e;console.log(`${r} is trying to change value 'lactThresholdMs' from ${t} to ${n} ...`,o.toLocaleTimeString())}),a)}}let y=Symbol(),p=0;function f(e){if(1==e||3==e){p>1e9&&(p=9);let e=p;requestAnimationFrame((()=>{e===p&&h()}))}}function h(){let e=null;const t=document.querySelector("#player")||0;try{e=(l(t).__data||t.__data||0).playerResponse_.messages}catch(e){}if(e&&e.length>0)for(const t of e)if(t.youThereRenderer){let e=null;try{e=t.youThereRenderer.configData.youThereData}catch(e){}e&&u(e),e=null;break}}let g=0;function m(){h();const e=document.querySelector("#player")||0,t=l(e).playerApi_||e.playerApi_||l(e).playerApi||e.playerApi||0;"object"==typeof t&&(void 0===t[y]&&"function"==typeof t.getPlayerState&&(t[y]=t.getPlayerState,t.getPlayerState=function(){let e=this[y](...arguments);if(1==e||3==e)try{h()}catch(e){}return e}),"removeEventListener"in t&&"addEventListener"in t&&(t.removeEventListener("onStateChange",f,!1),t.addEventListener("onStateChange",f,!1)))}document.addEventListener("canplay",(function(e){"VIDEO"==e.target.nodeName&&e.target.closest("#player")&&async function(){s=Date.now()+3400,g++;let e=g;g>1e9&&(g=9),await t.resolve(0),e===g&&(m(),await new t((e=>setTimeout(e,3200))),e===g&&(m(),await new t((e=>setTimeout(e,5400))),e===g&&m()))}()}),!0)}();