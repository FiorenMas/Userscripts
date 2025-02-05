// ==UserScript==
// @name                YouTube CPU Tamer by DOMMutation
// @namespace           http://tampermonkey.net/
// @version             2024.11.02.0
// @license             MIT License
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @match               https://www.youtube.com/live_chat*
// @match               https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-cpu-tamper-by-animationframe.webp
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page


// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20DOMMutation.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20DOMMutation.meta.js
// ==/UserScript==
(()=>{"use strict";const t=this instanceof Window?this:window,e="nzsxclvflluv";if(t[e])throw new Error("Duplicated Userscript Calling");t[e]=!0;const n=(async()=>{})().constructor,r=((t,e)=>{const r=(n,r)=>{t=n,e=r};return class extends n{constructor(n=r){super(n),n===r&&(this.resolve=t,this.reject=e)}}})(),{_setAttribute:o,_insertBefore:i,_hasAttribute:a}=(()=>{let t=Element.prototype.setAttribute;try{t=ShadyDOM.nativeMethods.setAttribute||t}catch(t){}let e=Element.prototype.hasAttribute;try{e=ShadyDOM.nativeMethods.hasAttribute||e}catch(t){}let n=Node.prototype.insertBefore;try{n=ShadyDOM.nativeMethods.insertBefore||n}catch(t){}return{_setAttribute:t,_insertBefore:n,_hasAttribute:e}})();(async t=>{const e=requestAnimationFrame;try{let r=16;const o="vanillajs-iframe-v1";let i=document.getElementById(o),a=null;if(!i){i=document.createElement("iframe"),i.id=o;const l="function"==typeof webkitCancelAnimationFrame&&"undefined"==typeof kagi?i.src=URL.createObjectURL(new Blob([],{type:"text/html"})):null;i.sandbox="allow-same-origin";let s=document.createElement("noscript");for(s.appendChild(i);!document.documentElement&&r-- >0;)await new n(e);document.documentElement.appendChild(s),l&&n.resolve().then((()=>URL.revokeObjectURL(l))),a=e=>{const n=r=>{r&&t.removeEventListener("DOMContentLoaded",n,!1),r=s,s=t=a=0,e?e((()=>r.remove()),200):r.remove()};e&&"loading"===document.readyState?t.addEventListener("DOMContentLoaded",n,!1):n()}}for(;!i.contentWindow&&r-- >0;)await new n(e);const l=i.contentWindow;if(!l)throw"window is not found.";try{const{requestAnimationFrame:e,setInterval:r,setTimeout:o,clearInterval:i,clearTimeout:s}=l,c={requestAnimationFrame:e,setInterval:r,setTimeout:o,clearInterval:i,clearTimeout:s};for(let e in c)c[e]=c[e].bind(t);return a&&n.resolve(c.setTimeout).then(a),c}catch(t){return a&&a(),null}}catch(t){return console.warn(t),null}})(t).then((e=>{if(!e)return null;const{setTimeout:n,setInterval:l,clearTimeout:s,clearInterval:c}=e,u=(()=>{let t=document.getElementById("d-m");t||(t=document.createElementNS("http://www.w3.org/2000/svg","defs"),t.id="d-m",i.call(document.documentElement,t,document.documentElement.firstChild));const e=t;e._setAttribute=o,e._hasAttribute=a;let n,l=0;for(;e._hasAttribute(n=`dm-${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`););const s=n;let c=null;return new MutationObserver((()=>{const t=c;null!==t&&(c=null,l>8&&(l=0),t.resolve())})).observe(document,{childList:!0,subtree:!0,attributes:!0}),()=>c||(e._setAttribute(s,++l),c=new r)})();(()=>{let e,o;e=o={resolved:!0};let i=0;const a=async t=>{await u(),t.resolved=!0;const e=++i;return e>9e9&&(i=9),t.resolve(e),e},d=new Set,m=async(t,n)=>{try{const i=Date.now();if(i-n.dt<800){const t=n.cid;d.add(t);const i=await(async()=>{const t=e.resolved?null:e,n=o.resolved?null:o;let i=0;if(t&&n){const e=await t,r=await n;i=e>r&&e-r<8e9?e:r}else{const l=t?null:e=new r,s=n?null:o=new r;n?await n:t&&await t,l&&(i=await a(l)),s&&(i=await a(s))}return i})();if(!d.delete(t)||i===n.lastExecution)return;n.lastExecution=i}n.dt=i,t()}catch(t){throw console.error(t),t}},w=t=>(e,n=0,...r)=>{if("function"==typeof e){const o={dt:Date.now()};return o.cid=t(m,n,r.length>0?e.bind(null,...r):e,o)}return t(e,n,...r)};t.setTimeout=w(n),t.setInterval=w(l);const h=t=>e=>{e&&(d.delete(e)||t(e))};t.clearTimeout=h(s),t.clearInterval=h(c);try{t.setTimeout.toString=n.toString.bind(n),t.setInterval.toString=l.toString.bind(l),t.clearTimeout.toString=s.toString.bind(s),t.clearInterval.toString=c.toString.bind(c)}catch(t){console.warn(t)}})()}))})();