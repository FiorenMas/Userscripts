// ==UserScript==
// @name                Use YouTube AV1
// @namespace           http://tampermonkey.net/
// @version             2.4.5
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @match               https://m.youtube.com/*
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
(function(f){"use strict";const c=(async()=>{})().constructor;console.debug("use-youtube-av1","injected");const l=()=>{function e(t){if(typeof t=="string"&&t.startsWith("video/")){if(t.includes("av01")){if(/codecs[\x20-\x7F]+\bav01\b/.test(t))return!0}else if(t.includes("av1")&&/codecs[\x20-\x7F]+\bav1\b/.test(t))return!0}}function a(t,d){return function(u){let o;return u===void 0?o=!1:o=e(u),o===void 0?o=t.apply(this,arguments):o=d?o?"probably":"":o,o}}const r=(HTMLVideoElement||0).prototype;r&&typeof r.canPlayType=="function"&&(r.canPlayType=a(r.canPlayType,!0));const n=window.MediaSource;n&&typeof n.isTypeSupported=="function"&&(n.isTypeSupported=a(n.isTypeSupported))};function p(){try{Object.defineProperty(localStorage.constructor.prototype,"yt-player-av1-pref",{get(){return this===localStorage?"8192":this.getItem("yt-player-av1-pref")},set(e){return this.setItem("yt-player-av1-pref",e),!0},enumerable:!0,configurable:!0})}catch{}if(localStorage["yt-player-av1-pref"]!=="8192"){console.warn("use-youtube-av1","Use YouTube AV1 is not supported in your browser.");return}console.debug("use-youtube-av1","AV1 enabled"),l()}let i=null;try{i=navigator.mediaCapabilities.decodingInfo({type:"file",video:{contentType:"video/mp4; codecs=av01.0.05M.08.0.110.05.01.06.0",height:1080,width:1920,framerate:30,bitrate:2826848},audio:{contentType:"audio/webm; codecs=opus",channels:"2.1",samplerate:44100,bitrate:255236}})}catch{i=null}const s=e=>{e&&e.supported&&e.smooth?p():console.warn("force-youtube-av1","Your browser does not support AV1. You might conside to use the latest version of Google Chrome or Mozilla FireFox.")};(i||c.resolve(0)).catch(s).then(s)})(Promise);
