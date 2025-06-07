// ==UserScript==
// @name                Web CPU Tamer
// @namespace           http://tampermonkey.net/
// @version             2025.101.7
// @license             MIT License
// @author              CY Fung
// @match               https://*/*
// @match               http://*/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/7b34986ad9cdf3af8766e54b0aecb394b036e970/icons/web-cpu-tamer.svg
// @supportURL          https://github.com/cyfung1031/userscript-supports

// @run-at              document-start
// @inject-into         auto
// @grant               none
// @allFrames           true


// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Web20CPU20Tamer.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Web20CPU20Tamer.meta.js
// ==/UserScript==
(S=>{"use strict";const[g,h,y,C,q,j]=S,m=queueMicrotask,s=typeof window.wrappedJSObject=="object"?window.wrappedJSObject:typeof unsafeWindow=="object"?unsafeWindow:this instanceof Window?this:window,w="nzsxclvflluv";if(s[w])throw new Error("Duplicated Userscript Calling");s[w]=!0;const P=(async()=>{})().constructor;let A=()=>{},n;const b=()=>n=new P(e=>{A=e});b();const v=document.createComment("--WebCPUTamer--");let _=0,a=null;function T(){a!==n&&(a=n,_=(_&7)+1,_&1?v.data="++WebCPUTamer++":v.data="--WebCPUTamer--")}class M{constructor(){this.startTime=performance.timeOrigin||performance.now()}get currentTime(){return performance.now()-this.startTime}}let o;if(typeof DocumentTimeline=="function")o=new DocumentTimeline;else if(typeof Animation=="function"){let e=Animation,t=document.documentElement;t&&(t=t.animate(null),typeof(t||0)=="object"&&"_animation"in t&&t.constructor===Object&&(t=t._animation),typeof(t||0)=="object"&&"timeline"in t&&typeof t.constructor=="function"&&(e=t.constructor)),o=new e().timeline}(!o||!Number.isFinite(o.currentTime||null))&&(o=new M);const F=o;new MutationObserver(()=>{A(),b()}).observe(v,{characterData:!0});const f=new Set,d=new Set,I=async e=>(f.add(e),a!==n&&m(T),await n,a!==n&&m(T),await n,f.delete(e)),U=async(e,t)=>(d.add(e),await t,d.delete(e)),p=e=>{m(()=>{throw e})},O=2**-26;if(setTimeout=function(e,t=void 0,...i){let r;const c=typeof e=="function"?(...l)=>{I(r).then(u=>{u&&e(...l)}).catch(p)}:e;return t>=1&&(t-=O),r=g(c,t,...i),r},setInterval=function(e,t=void 0,...i){let r;const c=typeof e=="function"?(...l)=>{I(r).then(u=>{u&&e(...l)}).catch(p)}:e;return t>=1&&(t-=O),r=h(c,t,...i),r},clearTimeout=function(e){return f.delete(e),C(e)},clearInterval=function(e){return f.delete(e),q(e)},requestAnimationFrame=function(e){let t;const i=n,r=c=>{const l=F.currentTime;U(t,i).then(u=>{u&&e(c+(F.currentTime-l))}).catch(p)};return a!==n&&m(T),t=y(r),t},cancelAnimationFrame=function(e){return d.delete(e),j(e)},typeof window.wrappedJSObject=="object"&&typeof unsafeWindow=="object"&&typeof exportFunction=="function"||typeof GM=="object"&&((GM||0).info||0).injectInto==="content"){const e=(t,i)=>{typeof exportFunction=="function"?exportFunction(t,s,{defineAs:i,allowCrossOriginArguments:!0}):s[i]=t};e(setTimeout,"setTimeout"),e(setInterval,"setInterval"),e(requestAnimationFrame,"requestAnimationFrame"),e(clearTimeout,"clearTimeout"),e(clearInterval,"clearInterval"),e(cancelAnimationFrame,"cancelAnimationFrame"),e(()=>1,`webCPUTamer_${Math.floor(Math.random()*314159265359+314159265359).toString(36)}`)}})([setTimeout,setInterval,requestAnimationFrame,clearTimeout,clearInterval,cancelAnimationFrame]);
