// ==UserScript==
// @name         Twitter image viewing enhancement
// @icon         https://twitter.com/favicon.ico
// @namespace    https://moe.best/
// @version      1.6.1
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
(async()=>{"use strict";const h=(e=0)=>new Promise(t=>setTimeout(t,e));let c=GM_getValue("enableDragToSwitch",!1);GM_registerMenuCommand("Drag to switch images",()=>{c=confirm(`Do you want to enable drag to switch images?
Current: ${c?"Enabled":"Disabled"}

Please refresh to take effect after modification.`),GM_setValue("enableDragToSwitch",c)}),c&&GM_addStyle("img{-webkit-user-drag:none}");const o={},w=e=>{const t=(e||"").split(",");t.length===3&&(o.close=t[0],o.prev=t[1],o.next=t[2])};if(w(GM_getValue("labels_v1","")),GM_registerMenuCommand("Set aria-label",()=>{let e,t,r=!1;do{const a=GM_getValue("labels_v1","");if(e=prompt(`Please input the aria-label of Close, Previous, Next button and join them by commas(,). Submit an empty string will disable it.${r?`

INPUT ERROR`:""}`,e||a),e===null)return;if(e=e.trim(),e.length===0){GM_setValue("labels_v1","");return}else t=e.split(",").map(l=>l.trim());r=t.length!==3}while(r);const i=t.join(",");w(i),GM_setValue("labels_v1",i)}),!Object.values(o).length)try{const e={af8fa2ad:"close",af8fa2ae:"close",c4d53ba2:"prev",d70740d9:"next",d70740da:"next"},t=[...document.querySelectorAll("script")],r=t.find(n=>n.src.includes("/i18n/"))?.src;if(!r)throw new Error("i18n script not found");const i=r.match(/\/(i18n\/[^.]+)/)?.[1];if(!i)throw new Error("i18n key not found");const a=t.find(n=>n.textContent.includes("window.__SCRIPTS_LOADED__"))?.textContent;if(!a)throw new Error("init script not found");const l=Number(a.match(new RegExp(`(\\d+):"${i}"`))?.[1]);if(!l)throw new Error("i18n module id not found");const u=await(async()=>{for(let n=0;n<100;n++){const s=webpackChunk_twitter_responsive_web.find(([[m]])=>m===l);if(s)return s;await h(100)}throw new Error("i18n module not found")})();Object.values(u[1]).forEach(n=>{if(!(n.length<3))try{n(void 0,void 0,()=>({_register:()=>(s,m)=>{s in e&&(o[e[s]]=m)}}))}catch{}})}catch(e){console.error(e)}const v=e=>document.querySelector(`[aria-label="${e}"]`),d=e=>{const t=v(o[e]);return t?(t.click(),!0):!1},p=()=>d("close"),b=()=>d("prev"),g=()=>d("next"),f=e=>e.tagName=="IMG"&&e.baseURI.includes("/photo/");if(window.addEventListener("wheel",({deltaY:e,target:t})=>{(f(t)||t.dataset.testid==="swipe-to-dismiss")&&(e<0?b():e>0&&g())},{capture:!0,passive:!0}),c){let e=0,t=0;window.addEventListener("mousedown",({clientX:r,clientY:i})=>{e=r,t=i},{capture:!0,passive:!0}),window.addEventListener("mouseup",({button:r,clientX:i,clientY:a,target:l})=>{if(r!==0||!f(l))return;const[u,n]=[i-e,a-t].map(Math.abs),s=i-e;u<=10&&n<=10&&p(),n<=u&&(s>0?b():s<0&&g())},{capture:!0,passive:!0})}else document.addEventListener("click",e=>{f(e.target)&&(p(),e.stopPropagation())},{capture:!0,passive:!0})})();
