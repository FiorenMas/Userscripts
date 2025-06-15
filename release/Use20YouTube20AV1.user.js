// ==UserScript==
// @name                Use YouTube AV1
// @namespace           http://tampermonkey.net/
// @version             2.4.3
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @exclude             https://www.youtube.com/live_chat*
// @exclude             https://www.youtube.com/live_chat_replay*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant               none
// @run-at              document-start
// @license             MIT
//
// @compatible          firefox Violentmonkey
// @compatible          firefox Tampermonkey
// @compatible          firefox FireMonkey
// @compatible          chrome Violentmonkey
// @compatible          chrome Tampermonkey
// @compatible          opera Violentmonkey
// @compatible          opera Tampermonkey
// @compatible          safari Stay
// @compatible          edge Violentmonkey
// @compatible          edge Tampermonkey
// @compatible          brave Violentmonkey
// @compatible          brave Tampermonkey
//
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Use20YouTube20AV1.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Use20YouTube20AV1.meta.js
// ==/UserScript==
(function(y){"use strict";const d=(async()=>{})().constructor;console.debug("force-youtube-av1","injected");const b=()=>{let e=!0,r=0;const{setInterval:n,clearInterval:i,setTimeout:t}=window,c=()=>{const s=window.ytcfg&&window.ytcfg.data_?window.ytcfg.data_:null;if(!s)return;const o=e;e=!1;for(const a of[s.EXPERIMENT_FLAGS,s.EXPERIMENTS_FORCED_FLAGS]);if(o){let a=new MutationObserver(()=>{a.disconnect(),a.takeRecords(),a=null,t(()=>{r&&i.call(window,r),r=0,c()})});a.observe(document,{subtree:!0,childList:!0})}};r=n.call(window,c)},f=()=>{function e(t){if(typeof t=="string"&&t.startsWith("video/")){if(t.includes("av01")){if(/codecs[\x20-\x7F]+\bav01\b/.test(t))return!0}else if(t.includes("av1")&&/codecs[\x20-\x7F]+\bav1\b/.test(t))return!0}}function r(t,c){return function(s){let o;return s===void 0?o=!1:o=e(s),o===void 0?o=t.apply(this,arguments):o=c?o?"probably":"":o,o}}const n=(HTMLVideoElement||0).prototype;n&&typeof n.canPlayType=="function"&&(n.canPlayType=r(n.canPlayType,!0));const i=window.MediaSource;i&&typeof i.isTypeSupported=="function"&&(i.isTypeSupported=r(i.isTypeSupported))};function p(){try{Object.defineProperty(localStorage.constructor.prototype,"yt-player-av1-pref",{get(){return this===localStorage?"8192":this.getItem("yt-player-av1-pref")},set(e){return this.setItem("yt-player-av1-pref",e),!0},enumerable:!0,configurable:!0})}catch{}if(localStorage["yt-player-av1-pref"]!=="8192"){console.warn("Use YouTube AV1 is not supported in your browser.");return}console.debug("force-youtube-av1","AV1 enabled"),f()}let u=null;try{u=navigator.mediaCapabilities.decodingInfo({type:"file",video:{contentType:"video/mp4; codecs=av01.0.05M.08.0.110.05.01.06.0",height:1080,width:1920,framerate:30,bitrate:2826848},audio:{contentType:"audio/webm; codecs=opus",channels:"2.1",samplerate:44100,bitrate:255236}})}catch{u=null}const l=e=>{e&&e.supported&&e.smooth?p():console.warn("force-youtube-av1","Your browser does not support AV1. You might conside to use the latest version of Google Chrome or Mozilla FireFox.")};(u||d.resolve(0)).catch(l).then(l)})(Promise);
