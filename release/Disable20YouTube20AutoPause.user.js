// ==UserScript==
// @name                Disable YouTube AutoPause
// @name:en             Disable YouTube AutoPause
// @namespace           http://tampermonkey.net/
// @version             2024.02.21.0
// @license             MIT License
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
(function(T){"use strict";const y=(async()=>{})().constructor,d=new WeakMap,M=new WeakMap,P=new WeakMap,u="YouTube";let h=0;const p=e=>e?e.polymerController||e.inst||e||0:e||0,_=e=>p(e).$||e.$||0;function b(...e){Date.now()<h||(h=Date.now()+280,console.log(...e))}function m(e,a,r,o,s,l,n){Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get(){y.resolve(new Date).then(s).catch(console.warn);const t=o;return r===2?`${t}`:t},set(t){const c=n.get(this);return y.resolve([c,t,new Date]).then(l).catch(console.warn),n.set(this,t),!0}})}function v(e,a,r){Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get(){const o=this[r];return(o||0).length>=1&&(o.length=0),o},set(o){return!0}})}function w(e){if(!e||d.has(e))return;const a=e.playbackPauseDelayMs,r=e.promptDelaySec,o=e.lactThresholdMs,s=Math.floor(Number.MAX_SAFE_INTEGER*.1),l=Math.floor(s/1e3);if("playbackPauseDelayMs"in e&&a>=0&&a<4*s){d.set(e,a);const n=typeof a=="string"?2:+(typeof a=="number");n>=1&&m(e,"playbackPauseDelayMs",n,5*s,t=>{b(`${u} is trying to pause video...`,t.toLocaleTimeString())},t=>{const[c,i,g]=t;console.log(`${u} is trying to change value 'playbackPauseDelayMs' from ${c} to ${i} ...`,g.toLocaleTimeString())},d),typeof(e.showPausedActions||0).length=="number"&&!e.tvTyh&&(e.tvTyh=[],v(e,"showPausedActions","tvTyh"))}if("promptDelaySec"in e&&r>=0&&r<4*l){M.set(e,r);const n=typeof r=="string"?2:+(typeof r=="number");n>=1&&m(e,"promptDelaySec",n,5*l,t=>{b(`${u} is trying to pause video...`,t.toLocaleTimeString())},t=>{const[c,i,g]=t;console.log(`${u} is trying to change value 'promptDelaySec' from ${c} to ${i} ...`,g.toLocaleTimeString())},M)}if("lactThresholdMs"in e&&o>=0&&o<4*s){P.set(e,o);const n=typeof o=="string"?2:+(typeof o=="number");n>=1&&m(e,"lactThresholdMs",n,5*s,t=>{},t=>{const[c,i,g]=t;console.log(`${u} is trying to change value 'lactThresholdMs' from ${c} to ${i} ...`,g.toLocaleTimeString())},P)}}function f(){arguments.length===1&&(h=Date.now()+3400),y.resolve(0).then(()=>{let e=null;const a=document.querySelector("#page-manager")||0,r=p(a);try{e=r.data.playerResponse.messages}catch{}if(e&&e.length>0){for(const l of e)if((l||0).youThereRenderer){let n=null;try{n=l.youThereRenderer.configData.youThereData}catch{}n&&w(n),n=null;break}}const o=document.querySelector("ytd-watch-flexy")||0,s=p(o);if(s){const n=(s.youThereManager_||o.youThereManager_||0||0).youThereData_||0;n&&w(n);const t=s.youthereDataChanged_;typeof t=="function"&&!t.lq2S7&&(s.youthereDataChanged_=function(c){return function(){console.log("youthereDataChanged_()");const i=c.apply(this,arguments);return f(),i}}(t),s.youthereDataChanged_.lq2S7=1)}}).catch(console.warn)}document.addEventListener("yt-page-data-updated",f,!1),document.addEventListener("yt-navigate-finish",f,!1),document.addEventListener("spfdone",f,!1)})(Promise);
