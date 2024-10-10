// ==UserScript==
// @name YouTube H.264 + FPS
// @name:ru YouTube H.264 + FPS
// @namespace https://www.youtube.com
// @version 2023.11.20.2
// @description Clone of h264ify with optional limit up to 30 FPS.
// @description:ru Клон h264ify с опциональным ограничением до 30 FPS.
// @match *://*.youtube.com/*
// @match *://*.youtube-nocookie.com/*
// @match *://*.youtubekids.com/*
// @license MIT
// @grant none
// @run-at document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20H264202B20FPS.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20H264202B20FPS.meta.js
// ==/UserScript==
const BLOCK_HIGH_FPS=!0,DISALLOWED_TYPES_REGEX=/webm|vp8|vp9|av01/i,FRAME_RATE_REGEX=/framerate=(\d+)/;!function(){const e=window.MediaSource;if(!e)return;const t=e.isTypeSupported.bind(e);e.isTypeSupported=e=>{if("string"!=typeof e)return!1;if(DISALLOWED_TYPES_REGEX.test(e))return!1;const E=FRAME_RATE_REGEX.exec(e);return!(E&&E[1]>30)&&t(e)}}();