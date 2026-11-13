// ==UserScript==
// @name                Web CPU Tamer
// @namespace           http://tampermonkey.net/
// @version             2026.100.0
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
// @unwrap
// @allFrames           true


// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Web20CPU20Tamer.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Web20CPU20Tamer.meta.js
// ==/UserScript==
(P=>{"use strict";const[b,h,F,U,W,x]=P,d=queueMicrotask,p=typeof window.wrappedJSObject=="object"?window.wrappedJSObject:typeof unsafeWindow=="object"?unsafeWindow:this instanceof Window?this:window,I="nzsxclvflluv";if(p[I])throw new Error("Duplicated Userscript Calling");p[I]=!0;const D=(async()=>{})().constructor;let y=()=>{},r;const S=()=>r=new D(e=>{y=e});S();const v=document.createComment("--WebCPUTamer--");let T=0,u=null;function A(){u!==r&&(u=r,T=(T&7)+1,T&1?v.data="++WebCPUTamer++":v.data="--WebCPUTamer--")}class E{constructor(){this.startTime=performance.timeOrigin||performance.now()}get currentTime(){return performance.now()-this.startTime}}let s;if(typeof DocumentTimeline=="function")s=new DocumentTimeline;else if(typeof Animation=="function"){let e=Animation,t=document.documentElement;try{t&&(t=t.animate(null),typeof(t||0)=="object"&&"_animation"in t&&t.constructor===Object&&(t=t._animation),typeof(t||0)=="object"&&"timeline"in t&&typeof t.constructor=="function"&&(e=t.constructor)),s=new e().timeline}catch{}}(!s||!Number.isFinite(s.currentTime||null))&&(s=new E);const O=s;let{port1:C,port2:g}=new MessageChannel;C.onmessage=()=>{y(),S()};const G=g.postMessage.bind(g);C=g=null;let q=new MutationObserver(()=>G(!0));q.observe(v,{characterData:!0}),q=null;const c=new Set,m=new Set;c.add=m.add=Set.prototype.add,c.delete=m.delete=Set.prototype.delete;const j=async e=>{c.add(e),u!==r&&d(A),await r,u!==r&&d(A),await r},H=async(e,t)=>{m.add(e),await t},w=e=>{d(()=>{throw e})},M=2**-26,l=Reflect.apply;if(setTimeout=function(e,t=void 0,...i){if(typeof e!="function")return l(b,this,arguments);let n;const _=function(...a){const f=this;j(n).then(()=>{c.delete(n)&&l(e,f,a)}).catch(w)};let o=+t;return o>=1&&(o-=-M),n=b(_,o,...i),n},setInterval=function(e,t=void 0,...i){if(typeof e!="function")return l(h,this,arguments);let n;const _=function(...a){const f=this;j(n).then(()=>{c.delete(n)&&l(e,f,a)}).catch(w)};let o=+t;return o>=1&&(o-=-M),n=h(_,o,...i),n},clearTimeout=function(e){return c.delete(e),U(e)},clearInterval=function(e){return c.delete(e),W(e)},requestAnimationFrame=function(e){if(typeof e!="function")return l(F,this,arguments);let t;const i=r,n=function(_,...o){const a=arguments,f=this,K=O.currentTime;H(t,i).then(()=>{a[0]=a[0]-(K-O.currentTime)||a[0],m.delete(t)&&l(e,f,a)}).catch(w)};return u!==r&&d(A),t=F(n),t},cancelAnimationFrame=function(e){return m.delete(e),x(e)},typeof window.wrappedJSObject=="object"&&typeof unsafeWindow=="object"&&typeof exportFunction=="function"||typeof GM=="object"&&((GM||0).info||0).injectInto==="content"){const e=(t,i)=>{typeof exportFunction=="function"?exportFunction(t,p,{defineAs:i,allowCrossOriginArguments:!0}):p[i]=t};e(setTimeout,"setTimeout"),e(setInterval,"setInterval"),e(requestAnimationFrame,"requestAnimationFrame"),e(clearTimeout,"clearTimeout"),e(clearInterval,"clearInterval"),e(cancelAnimationFrame,"cancelAnimationFrame"),e(()=>1,`webCPUTamer_${Math.floor(Math.random()*314159265359+314159265359).toString(36)}`)}})([setTimeout,setInterval,requestAnimationFrame,clearTimeout,clearInterval,cancelAnimationFrame]);
