// ==UserScript==
// @name                Youtube dual subtitle
// @name:zh-CN          Youtube 双语字幕全平台
// @name:zh-TW          Youtube 雙語字幕全平臺
// @version             2.1
// @author              Coink & jk278
// @namespace           https://github.com/jk278/youtube-dual-subtitle
// @description         Fix for mobile devices on YouTube bilingual captions. It works on both mobile and desktop, and supports the Via browser.
// @description:zh-CN   Youtube 双语字幕，支持 PC、移动端 Tampermonkey，及 Via 等轻量浏览器。
// @description:zh-TW   Youtube 雙語字幕。移動端（mobile）修復，雙端適用，而且支持 Via 瀏覽器。
// @match               *://www.youtube.com/*
// @match               *://m.youtube.com/*
// @require             https://unpkg.com/ajax-hook@latest/dist/ajaxhook.min.js
// @grant               none
// @run-at              document-start
// @icon                https://www.youtube.com/s/desktop/b9bfb983/img/favicon_32x32.png
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20E58F8CE8AFADE5AD97E5B995E585A8E5B9B3E58FB0.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20E58F8CE8AFADE5AD97E5B995E585A8E5B9B3E58FB0.meta.js
// ==/UserScript==
!function(){"use strict";const e=navigator.language.split("-")[0]||"en";function s(){ah.proxy({onRequest:(e,s)=>{s.next(e)},onResponse:(s,t)=>{if(s.config.url.includes("/api/timedtext")&&!s.config.url.includes("&translate_h00ked")){let t=new XMLHttpRequest,n=s.config.url.replace(/(^|[&?])tlang=[^&]*/g,"");n=`${n}&tlang=${e}&translate_h00ked`,t.open("GET",n,!1),t.send();let o=null;if(s.response){const e=JSON.parse(s.response);e.events&&(o=e)}const f=JSON.parse(t.response);let r=!0;for(const e of o.events)if(e.segs&&e.segs.length>1){r=!1;break}if(r){for(let e=0,s=o.events.length;e<s;e++){const s=o.events[e];if(!s.segs)continue;const t=f.events[e];`${s.segs[0].utf8}`.trim()!==`${t.segs[0].utf8}`.trim()&&(s.segs[0].utf8+="\n"+t.segs[0].utf8)}s.response=JSON.stringify(o)}else{let e=f.events.filter((e=>1!==e.aAppend&&e.segs));for(const s of o.events){if(!s.segs)continue;let t=s.tStartMs,n=t+s.dDurationMs,o=e.filter((e=>t<=e.tStartMs&&e.tStartMs<n)),f="";for(const e of o){for(const s of e.segs)f+=s.utf8;f+="\ufeff"}let r="";for(const e of s.segs)r+=e.utf8;s.segs[0].utf8=r+"\n"+f,s.segs=[s.segs[0]]}s.response=JSON.stringify(o)}}t.resolve(s)}})}"complete"===document.readyState?s():window.addEventListener("load",s)}();