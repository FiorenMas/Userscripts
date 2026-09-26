// ==UserScript==
// @name         Youtube H.264 (updated 2020)
// @namespace    http://www.youtube.com
// @version      1.1.2
// @match        *://youtube.com/*
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20H2642028updated20202029.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20H2642028updated20202029.meta.js
// ==/UserScript==
var h264ify=function(){var e=document.createElement("video"),r=e.canPlayType.bind(e);e.__proto__.canPlayType=function(n){return n===void 0||n.indexOf("webm")!=-1||n.indexOf("vp8")!=-1||n.indexOf("vp9")!=-1||n.indexOf("av01")!==-1?"":r(n)};var i=window.MediaSource,d=i.isTypeSupported.bind(i);i.isTypeSupported=function(n){return n===void 0||n.indexOf("webm")!=-1||n.indexOf("vp8")!=-1||n.indexOf("vp9")!=-1||n.indexOf("av01")!==-1?"":d(n)}};h264ify();
