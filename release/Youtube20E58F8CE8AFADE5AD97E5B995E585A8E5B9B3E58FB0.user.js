// ==UserScript==
// @name                Youtube dual subtitle
// @version             2.1
// @author              Coink & jk278
// @namespace           https://github.com/jk278/youtube-dual-subtitle
// @match               *://www.youtube.com/*
// @match               *://m.youtube.com/*
// @require             https://unpkg.com/ajax-hook@latest/dist/ajaxhook.min.js
// @grant               none
// @run-at              document-start
// @icon                https://www.youtube.com/s/desktop/b9bfb983/img/favicon_32x32.png
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20E58F8CE8AFADE5AD97E5B995E585A8E5B9B3E58FB0.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20E58F8CE8AFADE5AD97E5B995E585A8E5B9B3E58FB0.meta.js
// ==/UserScript==
(function(){"use strict";const S=navigator.language.split("-")[0]||"en";function c(){ah.proxy({onRequest:(s,r)=>{r.next(s)},onResponse:(s,r)=>{if(s.config.url.includes("/api/timedtext")&&!s.config.url.includes("&translate_h00ked")){let a=new XMLHttpRequest,i=s.config.url.replace(/(^|[&?])tlang=[^&]*/g,"");i=`${i}&tlang=${S}&translate_h00ked`,a.open("GET",i,!1),a.send();let n=null;if(s.response){const e=JSON.parse(s.response);e.events&&(n=e)}const g=JSON.parse(a.response);let d=!0;for(const e of n.events)if(e.segs&&e.segs.length>1){d=!1;break}if(d){for(let e=0,t=n.events.length;e<t;e++){const l=n.events[e];if(!l.segs)continue;const f=g.events[e];`${l.segs[0].utf8}`.trim()!==`${f.segs[0].utf8}`.trim()&&(l.segs[0].utf8+=`
`+f.segs[0].utf8)}s.response=JSON.stringify(n)}else{let e=g.events.filter(t=>t.aAppend!==1&&t.segs);for(const t of n.events){if(!t.segs)continue;let l=t.tStartMs,f=l+t.dDurationMs,p=e.filter(o=>l<=o.tStartMs&&o.tStartMs<f),u="";for(const o of p){for(const E of o.segs)u+=E.utf8;u+="\uFEFF"}let v="";for(const o of t.segs)v+=o.utf8;t.segs[0].utf8=v+`
`+u,t.segs=[t.segs[0]]}s.response=JSON.stringify(n)}}r.resolve(s)}})}document.readyState==="complete"?c():window.addEventListener("load",c)})();
