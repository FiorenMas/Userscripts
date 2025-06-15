// ==UserScript==
// @name         Twitter image viewing enhancement
// @icon         https://twitter.com/favicon.ico
// @namespace    https://moe.best/
// @version      1.4.0
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
(()=>{"use strict";let i=GM_getValue("enableDragToSwitch",!1);GM_registerMenuCommand("Drag to switch images",()=>{i=confirm(`Do you want to enable drag to switch images?
Current: ${i?"Enabled":"Disabled"}

Please refresh to take effect after modification.`),GM_setValue("enableDragToSwitch",i)}),i&&GM_addStyle("img{-webkit-user-drag:none}");const a={},u=e=>{const t=(e||"").split(",");t.length===3&&(a.close=t[0],a.prev=t[1],a.next=t[2])};if(u(GM_getValue("labels_v1","")),GM_registerMenuCommand("Set aria-label",()=>{let e,t,s=!1;do{const r=GM_getValue("labels_v1","");if(e=prompt(`Please input the aria-label of Close, Previous, Next button and join them by commas(,). Submit an empty string will disable it.${s?`

INPUT ERROR`:""}`,e||r),e===null)return;if(e=e.trim(),e.length===0){GM_setValue("labels_v1","");return}else t=e.split(",").map(c=>c.trim());s=t.length!==3}while(s);const n=t.join(",");u(n),GM_setValue("labels_v1",n)}),!Object.values(a).length)try{const e={af8fa2ad:"close",af8fa2ae:"close",c4d53ba2:"prev",d70740d9:"next",d70740da:"next"},t=webpackChunk_twitter_responsive_web.find(([[s]])=>s.startsWith("i18n"));Object.values(t[1]).forEach(s=>{if(!(s.length<3))try{s(void 0,void 0,()=>({_register:()=>(n,r)=>{n in e&&(a[e[n]]=r)}}))}catch{}})}catch(e){console.error(e)}const w=e=>document.querySelector(`[aria-label="${e}"]`),l=e=>{const t=w(a[e]);return t?(t.click(),!0):!1},d=()=>l("close"),f=()=>l("prev"),m=()=>l("next"),o=e=>e.tagName=="IMG"&&e.baseURI.includes("/photo/");if(window.addEventListener("wheel",({deltaY:e,target:t})=>{(o(t)||t.dataset.testid==="swipe-to-dismiss")&&(e<0?f():e>0&&m())},{passive:!0}),i){let e=0,t=0;window.addEventListener("mousedown",({clientX:s,clientY:n})=>{e=s,t=n}),window.addEventListener("mouseup",({button:s,clientX:n,clientY:r,target:c})=>{if(s!==0||!o(c))return;const[b,g]=[n-e,r-t].map(Math.abs),p=n-e;b<=10&&g<=10&&d(),g<=b&&(p>0?f():p<0&&m())},{passive:!0})}else document.addEventListener("click",e=>{o(e.target)&&(d(),e.stopPropagation())},{capture:!0,passive:!0})})();
