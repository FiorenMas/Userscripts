// ==UserScript==
// @name                YouTube CPU Tamer by AnimationFrame
// @namespace           http://tampermonkey.net/
// @version             2026.10.05.0
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


// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20AnimationFrame.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20AnimationFrame.meta.js
// ==/UserScript==
(()=>{"use strict";const s=this instanceof Window?this:window,S="nzsxclvflluv";if(s[S])throw new Error("Duplicated Userscript Calling");s[S]=!0;const b=(async()=>{})().constructor,I=((i,v)=>{const d=(u,e)=>{i=u,v=e};return class extends b{constructor(e=d){super(e),e===d&&(this.resolve=i,this.reject=v)}}})();if(!(()=>{try{const i=document.createElement("canvas");return!!(i.getContext("webgl")||i.getContext("experimental-webgl"))}catch{return!1}})())throw new Error("Your browser does not support GPU Acceleration. YouTube CPU Tamer by AnimationFrame is skipped.");let A=window;window.__j6YiAc__=1,document.addEventListener("timeupdate",()=>{window.__j6YiAc__=Date.now()},!0);let C=-1;try{C=top.__j6YiAc__,C>=1&&(A=top)}catch{}(async i=>{const v=requestAnimationFrame;try{let d=16;const u="vanillajs-iframe-v1";let e=document.getElementById(u),f=null;if(!e){e=document.createElement("iframe"),e.id=u;const w=typeof webkitCancelAnimationFrame=="function"&&typeof kagi>"u"?e.src=URL.createObjectURL(new Blob([],{type:"text/html"})):null;e.sandbox="allow-same-origin";let l=document.createElement("noscript");for(l.appendChild(e);!document.documentElement&&d-- >0;)await new b(v);document.documentElement.appendChild(l),w&&b.resolve().then(()=>URL.revokeObjectURL(w)),f=h=>{const y=o=>{o&&i.removeEventListener("DOMContentLoaded",y,!1),o=l,l=i=f=0,h?h(()=>o.remove(),200):o.remove()};!h||document.readyState!=="loading"?y():i.addEventListener("DOMContentLoaded",y,!1)}}for(;!e.contentWindow&&d-- >0;)await new b(v);const p=e.contentWindow;if(!p)throw"window is not found.";try{const{requestAnimationFrame:w,setInterval:l,setTimeout:x,clearInterval:h,clearTimeout:y}=p,o={requestAnimationFrame:w,setInterval:l,setTimeout:x,clearInterval:h,clearTimeout:y};for(let r in o)o[r]=o[r].bind(i);return f&&b.resolve(o.setTimeout).then(f),o}catch{return f&&f(),null}}catch(d){return console.warn(d),null}})(s).then(i=>{if(!i)return null;const{requestAnimationFrame:v,setTimeout:d,setInterval:u,clearTimeout:e,clearInterval:f}=i;let p=null,w=null;const l=document.createElementNS("http://www.w3.org/2000/svg","axxframe"),x=function(){w!==null&&(l.onanimationiteration=w=(w(),null))},h=`
      @keyframes aF1{0%{order:0}100%{order:1}}
      #a-f[id]{
        visibility:collapse!important;position:fixed!important;display:block!important;top:-100px!important;
        left:-100px!important;margin:0!important;padding:0!important;outline:0!important;border:0!important;
        z-index:-1!important;width:0!important;height:0!important;contain:strict!important;pointer-events:none!important;
        animation:1ms steps(2,jump-none) 0ms infinite alternate forwards running aF1!important
      }
    `,y=(()=>{if(!("onanimationiteration"in l))return r=>v(p=r);if(l.id="a-f",l.onanimationiteration=null,!document.getElementById("a-f")){const r=new CSSStyleSheet;r.replaceSync(h),document.adoptedStyleSheets=[...document.adoptedStyleSheets,r]}return document.documentElement.insertBefore(l,document.documentElement.firstChild),r=>{w=p=r,l.onanimationiteration=x}})();(()=>{let r,E;r=E={resolved:!0};let P=0;const F=async n=>{await new b(y),n.resolved=!0;const t=P=(P&1073741823)+1;return n.resolve(t),t},T=async()=>{const n=r.resolved?null:r,t=E.resolved?null:E;let a=0;if(n&&t){const c=await n,m=await t;a=(c-m&536870912)===0?c:m}else{const c=n?null:r=new I,m=t?null:E=new I;t?await t:n&&await n,c&&(a=await F(c)),m&&(a=await F(m))}return a},g=new Set;g.delete=g.delete,g.add=g.add;const U=async(n,t)=>{try{const a=Date.now();if(a-A.__j6YiAc__<800&&a-t.dt<800){const c=t.cid;g.add(c);const m=await T();if(!g.delete(c)||m===t.lastExecution)return;t.lastExecution=m}t.dt=a,n()}catch(a){throw console.error(a),a}},_=n=>(t,a=0,...c)=>{if(typeof t=="function"){const m={dt:Date.now()};return m.cid=n(U,a,c.length>0?t.bind(null,...c):t,m)}else return n(t,a,...c)};s.setTimeout=_(d),s.setInterval=_(u);const L=n=>t=>{t&&(g.delete(t)||n(t))};s.clearTimeout=L(e),s.clearInterval=L(f);try{s.setTimeout.toString=d.toString.bind(d),s.setInterval.toString=u.toString.bind(u),s.clearTimeout.toString=e.toString.bind(e),s.clearInterval.toString=f.toString.bind(f)}catch(n){console.warn(n)}})();let o=null;u(()=>{o===p?o!==null&&(p=o=(o(),null)):o=p},125)})})();
