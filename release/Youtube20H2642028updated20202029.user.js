// ==UserScript==
// @name         Youtube H.264 (updated 2020)
// @namespace    http://www.youtube.com
// @version      1.1.2
// @description  originally https://greasyfork.org/en/scripts/8128-youtube-h-264 (https://github.com/erkserkserks/h264ify) and https://github.com/Shimmermare/NotYetAV1
// @match        *://youtube.com/*
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20H2642028updated20202029.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20H2642028updated20202029.meta.js
// ==/UserScript==
var h264ify=function(){var e=document.createElement("video"),n=e.canPlayType.bind(e);e.__proto__.canPlayType=function(e){return void 0===e||-1!=e.indexOf("webm")||-1!=e.indexOf("vp8")||-1!=e.indexOf("vp9")||-1!==e.indexOf("av01")?"":n(e)};var i=window.MediaSource,d=i.isTypeSupported.bind(i);i.isTypeSupported=function(e){return void 0===e||-1!=e.indexOf("webm")||-1!=e.indexOf("vp8")||-1!=e.indexOf("vp9")||-1!==e.indexOf("av01")?"":d(e)}};h264ify();