// ==UserScript==
// @name YouTube H.264 + FPS
// @namespace https://www.youtube.com
// @version 2023.11.20.2
// @match *://*.youtube.com/*
// @match *://*.youtube-nocookie.com/*
// @match *://*.youtubekids.com/*
// @license MIT
// @grant none
// @run-at document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20H264202B20FPS.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20H264202B20FPS.meta.js
// ==/UserScript==
const BLOCK_HIGH_FPS=!0,DISALLOWED_TYPES_REGEX=/webm|vp8|vp9|av01/i,FRAME_RATE_REGEX=/framerate=(\d+)/;(function(){const e=window.MediaSource;if(!e)return;const n=e.isTypeSupported.bind(e);e.isTypeSupported=r=>{if(typeof r!="string"||DISALLOWED_TYPES_REGEX.test(r))return!1;const t=FRAME_RATE_REGEX.exec(r);return t&&t[1]>30?!1:n(r)}})();
