// ==UserScript==
// @name         Twitter remove content warning
// @name:zh-CN   Twitter 移除内容警告
// @name:zh-TW   Twitter 移除内容警告
// @icon         https://twitter.com/favicon.ico
// @namespace    https://github.com/Tsuk1ko
// @version      1.0.2
// @description        Remove twitter content warning
// @description:zh-CN  移除 twitter 的敏感内容警告
// @description:zh-TW  移除 twitter 的敏感内容警告
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
(async()=>{"use strict";const e=await((e,t=1e4)=>new Promise(((o,n)=>{const r=e();if(r)return void o(r);const s=setTimeout((()=>{clearInterval(l),n()}),t),l=setInterval((()=>{const t=e();t&&(clearTimeout(s),clearInterval(l),o(t))}),500)})))((()=>{for(const e of document.styleSheets)for(const t of e.cssRules)if(t instanceof CSSStyleRule&&"blur(30px)"===t.style.filter)return t}));e?(((e,...t)=>GM_addStyle(String.raw({raw:e},...t)))`
    ${e.selectorText} {
      filter: none !important;
    }
    ${e.selectorText} + div {
      display: none !important;
    }
  `,console.log("[trcw] done",e.selectorText)):console.warn("[trcw] css rule not found")})();