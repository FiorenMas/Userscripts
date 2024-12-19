// ==UserScript==
// @name         Twitter image viewing enhancement
// @name:zh-CN   Twitter 图片查看增强
// @name:zh-TW   Twitter 圖像查看增強
// @icon         https://twitter.com/favicon.ico
// @namespace    https://moe.best/
// @version      1.4.0
// @description        Make Twitter photo viewing more humane
// @description:zh-CN  让推特图片浏览更加人性化
// @description:zh-TW  讓 Twitter 照片瀏覽更人性化
// @author       Jindai Kirin
// @include      https://x.com/*
// @include      https://twitter.com/*
// @license      MIT
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @run-at       document-end
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Twitter20image20viewing20enhancement.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Twitter20image20viewing20enhancement.meta.js
// ==/UserScript==
(()=>{"use strict";let e=GM_getValue("enableDragToSwitch",!1);GM_registerMenuCommand("Drag to switch images",(()=>{e=confirm(`Do you want to enable drag to switch images?\nCurrent: ${e?"Enabled":"Disabled"}\n\nPlease refresh to take effect after modification.`),GM_setValue("enableDragToSwitch",e)})),e&&GM_addStyle("img{-webkit-user-drag:none}");const t={},a=e=>{const a=(e||"").split(",");3===a.length&&(t.close=a[0],t.prev=a[1],t.next=a[2])};if(a(GM_getValue("labels_v1","")),GM_registerMenuCommand("Set aria-label",(()=>{let e,t,n=!1;do{const a=GM_getValue("labels_v1","");if(e=prompt("Please input the aria-label of Close, Previous, Next button and join them by commas(,). Submit an empty string will disable it."+(n?"\n\nINPUT ERROR":""),e||a),null===e)return;if(e=e.trim(),0===e.length)return void GM_setValue("labels_v1","");t=e.split(",").map((e=>e.trim())),n=3!==t.length}while(n);const i=t.join(",");a(i),GM_setValue("labels_v1",i)})),!Object.values(t).length)try{const e={af8fa2ad:"close",af8fa2ae:"close",c4d53ba2:"prev",d70740d9:"next",d70740da:"next"},a=webpackChunk_twitter_responsive_web.find((([[e]])=>e.startsWith("i18n")));Object.values(a[1]).forEach((a=>{if(!(a.length<3))try{a(void 0,void 0,(()=>({_register:()=>(a,n)=>{a in e&&(t[e[a]]=n)}})))}catch(e){}}))}catch(e){console.error(e)}const n=e=>{const a=(n=t[e],document.querySelector(`[aria-label="${n}"]`));var n;return!!a&&(a.click(),!0)},i=()=>n("close"),s=()=>n("prev"),l=()=>n("next"),o=e=>"IMG"==e.tagName&&e.baseURI.includes("/photo/");if(window.addEventListener("wheel",(({deltaY:e,target:t})=>{(o(t)||"swipe-to-dismiss"===t.dataset.testid)&&(e<0?s():e>0&&l())}),{passive:!0}),e){let e=0,t=0;window.addEventListener("mousedown",(({clientX:a,clientY:n})=>{e=a,t=n})),window.addEventListener("mouseup",(({button:a,clientX:n,clientY:r,target:c})=>{if(0!==a||!o(c))return;const[d,u]=[n-e,r-t].map(Math.abs),b=n-e;d<=10&&u<=10&&i(),u<=d&&(b>0?s():b<0&&l())}),{passive:!0})}else document.addEventListener("click",(e=>{o(e.target)&&(i(),e.stopPropagation())}),{capture:!0,passive:!0})})();