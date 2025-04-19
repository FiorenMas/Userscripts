// ==UserScript==
// @name                Web CPU Tamer
// @namespace           http://tampermonkey.net/
// @version             2025.101.5
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
(e=>{"use strict";const[t,n,o,r,i,a]=e,c=queueMicrotask,s="object"==typeof window.wrappedJSObject?window.wrappedJSObject:"object"==typeof unsafeWindow?unsafeWindow:this instanceof Window?this:window,u="nzsxclvflluv";if(s[u])throw new Error("Duplicated Userscript Calling");s[u]=!0;const l=(async()=>{})().constructor;let m,f=()=>{};const p=()=>m=new l((e=>{f=e}));p();const w=document.createComment("--WebCPUTamer--");let d,b=0,y=null;function T(){y!==m&&(y=m,b=1+(7&b),w.data=1&b?"++WebCPUTamer++":"--WebCPUTamer--")}if("function"==typeof DocumentTimeline)d=new DocumentTimeline;else if("function"==typeof Animation){let e=Animation,t=document.documentElement;t&&(t=t.animate(null),"object"==typeof(t||0)&&"_animation"in t&&t.constructor===Object&&(t=t._animation),"object"==typeof(t||0)&&"timeline"in t&&"function"==typeof t.constructor&&(e=t.constructor));d=(new e).timeline}d&&Number.isFinite(d.currentTime||null)||(d=new class{constructor(){this.startTime=performance.timeOrigin||performance.now()}get currentTime(){return performance.now()-this.startTime}});const j=d;new MutationObserver((()=>{f(),p()})).observe(w,{characterData:!0});const v=new Set,h=new Set,A=async e=>(v.add(e),y!==m&&c(T),await m,y!==m&&c(T),await m,v.delete(e)),O=e=>{c((()=>{throw e}))},g=2**-26;if(setTimeout=function(e,n=void 0,...o){let r;return n>=1&&(n-=g),r=t(((...t)=>{A(r).then((n=>{n&&e(...t)})).catch(O)}),n,...o),r},setInterval=function(e,t=void 0,...o){let r;return t>=1&&(t-=g),r=n(((...t)=>{A(r).then((n=>{n&&e(...t)})).catch(O)}),t,...o),r},clearTimeout=function(e){return v.delete(e),r(e)},clearInterval=function(e){return v.delete(e),i(e)},requestAnimationFrame=function(e){let t;const n=m;return y!==m&&c(T),t=o((o=>{const r=j.currentTime;(async(e,t)=>(h.add(e),await t,h.delete(e)))(t,n).then((t=>{t&&e(o+(j.currentTime-r))})).catch(O)})),t},cancelAnimationFrame=function(e){return h.delete(e),a(e)},"function"==typeof webkitRequestAnimationFrame&&"object"==typeof navigator&&"object"==typeof navigator.userAgentData){const e=location?.hostname?.endsWith("youtube.com");if(e)try{if(e&&navigator?.userAgentData?.brands?.some((e=>"Brave"===e?.brand))){let e;try{t.call(1)}catch(t){e=t}if(!`${e?.stack||"Object.apply"}`.includes("Object.apply")){let e;e=Object.getOwnPropertyDescriptor(self,"setTimeout"),Object.defineProperty(self,"setTimeout",{...e,writable:!1}),e=Object.getOwnPropertyDescriptor(self,"setInterval"),Object.defineProperty(self,"setInterval",{...e,writable:!1})}}}catch(e){}}if("object"==typeof window.wrappedJSObject&&"object"==typeof unsafeWindow&&"function"==typeof exportFunction||"object"==typeof GM&&"content"===((GM||0).info||0).injectInto){const e=(e,t)=>{"function"==typeof exportFunction?exportFunction(e,s,{defineAs:t,allowCrossOriginArguments:!0}):s[t]=e};e(setTimeout,"setTimeout"),e(setInterval,"setInterval"),e(requestAnimationFrame,"requestAnimationFrame"),e(clearTimeout,"clearTimeout"),e(clearInterval,"clearInterval"),e(cancelAnimationFrame,"cancelAnimationFrame"),e((()=>1),`webCPUTamer_${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`)}})([setTimeout,setInterval,requestAnimationFrame,clearTimeout,clearInterval,cancelAnimationFrame]);