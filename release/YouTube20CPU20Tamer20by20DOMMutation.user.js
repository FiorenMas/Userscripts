// ==UserScript==
// @name                YouTube CPU Tamer by DOMMutation
// @namespace           http://tampermonkey.net/
// @version             2025.02.24.0
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
(L=>{"use strict";const m=this instanceof Window?this:window,I="nzsxclvflluv";if(m[I])throw new Error("Duplicated Userscript Calling");m[I]=!0;const y=(async()=>{})().constructor,A=((l,c)=>{const s=(u,n)=>{l=u,c=n};return class extends y{constructor(n=s){super(n),n===s&&(this.resolve=l,this.reject=c)}}})(),S=async l=>{const c=requestAnimationFrame;try{let s=16;const u="vanillajs-iframe-v1";let n=document.getElementById(u),b=null;if(!n){n=document.createElement("iframe"),n.id=u;const r=typeof webkitCancelAnimationFrame=="function"&&typeof kagi>"u"?n.src=URL.createObjectURL(new Blob([],{type:"text/html"})):null;n.sandbox="allow-same-origin";let i=document.createElement("noscript");for(i.appendChild(n);!document.documentElement&&s-- >0;)await new y(c);document.documentElement.appendChild(i),r&&y.resolve().then(()=>URL.revokeObjectURL(r)),b=f=>{const w=e=>{e&&l.removeEventListener("DOMContentLoaded",w,!1),e=i,i=l=b=0,f?f(()=>e.remove(),200):e.remove()};!f||document.readyState!=="loading"?w():l.addEventListener("DOMContentLoaded",w,!1)}}for(;!n.contentWindow&&s-- >0;)await new y(c);const g=n.contentWindow;if(!g)throw"window is not found.";try{const{requestAnimationFrame:r,setInterval:i,setTimeout:v,clearInterval:f,clearTimeout:w}=g,e={requestAnimationFrame:r,setInterval:i,setTimeout:v,clearInterval:f,clearTimeout:w};for(let p in e)e[p]=e[p].bind(l);return b&&y.resolve(e.setTimeout).then(b),e}catch{return b&&b(),null}}catch(s){return console.warn(s),null}},{_setAttribute:x,_insertBefore:_,_hasAttribute:D}=(()=>{let l=Element.prototype.setAttribute;try{l=ShadyDOM.nativeMethods.setAttribute||l}catch{}let c=Element.prototype.hasAttribute;try{c=ShadyDOM.nativeMethods.hasAttribute||c}catch{}let s=Node.prototype.insertBefore;try{s=ShadyDOM.nativeMethods.insertBefore||s}catch{}return{_setAttribute:l,_insertBefore:s,_hasAttribute:c}})();S(m).then(l=>{if(!l)return null;const{setTimeout:c,setInterval:s,clearTimeout:u,clearInterval:n}=l,g=(()=>{let r=document.getElementById("d-m");r||(r=document.createElementNS("http://www.w3.org/2000/svg","defs"),r.id="d-m",_.call(document.documentElement,r,document.documentElement.firstChild));const i=r;i._setAttribute=x,i._hasAttribute=D;let v=0,f;for(;i._hasAttribute(f=`dm-${Math.floor(Math.random()*314159265359+314159265359).toString(36)}`););const w=f;let e=null;return new MutationObserver(()=>{const E=e;E!==null&&(e=null,v>8&&(v=0),E.resolve())}).observe(document,{childList:!0,subtree:!0,attributes:!0}),()=>e||(e=(i._setAttribute(w,++v),new A))})();(()=>{let r,i;r=i={resolved:!0};let v=0;const f=async o=>{await g(),o.resolved=!0;const t=v=(v&1073741823)+1;return o.resolve(t),t},w=async()=>{const o=r.resolved?null:r,t=i.resolved?null:i;let a=0;if(o&&t){const d=await o,h=await t;a=(d-h&536870912)===0?d:h}else{const d=o?null:r=new A,h=t?null:i=new A;t?await t:o&&await o,d&&(a=await f(d)),h&&(a=await f(h))}return a},e=new Set,p=async(o,t)=>{try{const a=Date.now();if(a-t.dt<800){const d=t.cid;e.add(d);const h=await w();if(!e.delete(d)||h===t.lastExecution)return;t.lastExecution=h}t.dt=a,o()}catch(a){throw console.error(a),a}},E=o=>(t,a=0,...d)=>{if(typeof t=="function"){const h={dt:Date.now()};return h.cid=o(p,a,d.length>0?t.bind(null,...d):t,h)}else return o(t,a,...d)};m.setTimeout=E(c),m.setInterval=E(s);const M=o=>t=>{t&&(e.delete(t)||o(t))};m.clearTimeout=M(u),m.clearInterval=M(n);try{m.setTimeout.toString=c.toString.bind(c),m.setInterval.toString=s.toString.bind(s),m.clearTimeout.toString=u.toString.bind(u),m.clearInterval.toString=n.toString.bind(n)}catch(o){console.warn(o)}})()})})(null);
