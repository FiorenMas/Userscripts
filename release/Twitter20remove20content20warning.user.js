// ==UserScript==
// @name         Twitter remove content warning
// @icon         https://twitter.com/favicon.ico
// @namespace    https://github.com/Tsuk1ko
// @version      1.0.2
// @author       神代綺凛
// @include      https://x.com/*
// @include      https://twitter.com/*
// @include      https://mobile.twitter.com/*
// @license      MIT
// @grant        GM_addStyle
// @run-at       document-end
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Twitter20remove20content20warning.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Twitter20remove20content20warning.meta.js
// ==/UserScript==
(async()=>{"use strict";const c=(e,...t)=>GM_addStyle(String.raw({raw:e},...t)),s=await((e,t=1e4)=>new Promise((n,i)=>{const r=e();if(r){n(r);return}const a=setTimeout(()=>{clearInterval(o),i()},t),o=setInterval(()=>{const l=e();l&&(clearTimeout(a),clearInterval(o),n(l))},500)}))(()=>{for(const e of document.styleSheets)for(const t of e.cssRules)if(t instanceof CSSStyleRule&&t.style.filter==="blur(30px)")return t});if(!s){console.warn("[trcw] css rule not found");return}c`
    ${s.selectorText} {
      filter: none !important;
    }
    ${s.selectorText} + div {
      display: none !important;
    }
  `,console.log("[trcw] done",s.selectorText)})();
