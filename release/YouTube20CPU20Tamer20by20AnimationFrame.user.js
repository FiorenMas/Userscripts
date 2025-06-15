// ==UserScript==
// @name                YouTube CPU Tamer by AnimationFrame
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


// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20AnimationFrame.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20AnimationFrame.meta.js
// ==/UserScript==
(R=>{"use strict";const s=this instanceof Window?this:window,E="nzsxclvflluv";if(s[E])throw new Error("Duplicated Userscript Calling");s[E]=!0;const y=(async()=>{})().constructor,_=((n,p)=>{const m=(u,o)=>{n=u,p=o};return class extends y{constructor(o=m){super(o),o===m&&(this.resolve=n,this.reject=p)}}})();if(!(()=>{try{const n=document.createElement("canvas");return!!(n.getContext("webgl")||n.getContext("experimental-webgl"))}catch{return!1}})())throw new Error("Your browser does not support GPU Acceleration. YouTube CPU Tamer by AnimationFrame is skipped.");const I=(()=>{window.__j6YiAc__=1,document.addEventListener("timeupdate",()=>{window.__j6YiAc__=Date.now()},!0);let n=-1;try{n=top.__j6YiAc__}catch{}return n>=1?()=>top.__j6YiAc__:()=>window.__j6YiAc__})();(async n=>{const p=requestAnimationFrame;try{let m=16;const u="vanillajs-iframe-v1";let o=document.getElementById(u),f=null;if(!o){o=document.createElement("iframe"),o.id=u;const g=typeof webkitCancelAnimationFrame=="function"&&typeof kagi>"u"?o.src=URL.createObjectURL(new Blob([],{type:"text/html"})):null;o.sandbox="allow-same-origin";let v=document.createElement("noscript");for(v.appendChild(o);!document.documentElement&&m-- >0;)await new y(p);document.documentElement.appendChild(v),g&&y.resolve().then(()=>URL.revokeObjectURL(g)),f=r=>{const a=e=>{e&&n.removeEventListener("DOMContentLoaded",a,!1),e=v,v=n=f=0,r?r(()=>e.remove(),200):e.remove()};!r||document.readyState!=="loading"?a():n.addEventListener("DOMContentLoaded",a,!1)}}for(;!o.contentWindow&&m-- >0;)await new y(p);const w=o.contentWindow;if(!w)throw"window is not found.";try{const{requestAnimationFrame:g,setInterval:v,setTimeout:h,clearInterval:r,clearTimeout:a}=w,e={requestAnimationFrame:g,setInterval:v,setTimeout:h,clearInterval:r,clearTimeout:a};for(let x in e)e[x]=e[x].bind(n);return f&&y.resolve(e.setTimeout).then(f),e}catch{return f&&f(),null}}catch(m){return console.warn(m),null}})(s).then(n=>{if(!n)return null;const{requestAnimationFrame:p,setTimeout:m,setInterval:u,clearTimeout:o,clearInterval:f}=n;let w=null;const v=(()=>{const r=document.createElement("a-f");if(!("onanimationiteration"in r))return e=>p(w=e);r.id="a-f";let a=null;if(r.onanimationiteration=function(){a!==null&&(a=(a(),null))},!document.getElementById("afscript")){const e=document.createElement("style");e.id="afscript",e.textContent=`
          @keyFrames aF1 {
            0% {
              order: 0;
            }
            100% {
              order: 1;
            }
          }
          #a-f[id] {
            visibility: collapse !important;
            position: fixed !important;
            display: block !important;
            top: -100px !important;
            left: -100px !important;
            margin:0 !important;
            padding:0 !important;
            outline:0 !important;
            border:0 !important;
            z-index:-1 !important;
            width: 0px !important;
            height: 0px !important;
            contain: strict !important;
            pointer-events: none !important;
            animation: 1ms steps(2, jump-none) 0ms infinite alternate forwards running aF1 !important;
          }
        `,(document.head||document.documentElement).appendChild(e)}return document.documentElement.insertBefore(r,document.documentElement.firstChild),e=>a=w=e})();(()=>{let r,a;r=a={resolved:!0};let e=0;const x=async i=>{await new y(v),i.resolved=!0;const t=e=(e&1073741823)+1;return i.resolve(t),t},C=async()=>{const i=r.resolved?null:r,t=a.resolved?null:a;let l=0;if(i&&t){const c=await i,d=await t;l=(c-d&536870912)===0?c:d}else{const c=i?null:r=new _,d=t?null:a=new _;t?await t:i&&await i,c&&(l=await x(c)),d&&(l=await x(d))}return l},b=new Set,P=async(i,t)=>{try{const l=Date.now();if(l-I()<800&&l-t.dt<800){const c=t.cid;b.add(c);const d=await C();if(!b.delete(c)||d===t.lastExecution)return;t.lastExecution=d}t.dt=l,i()}catch(l){throw console.error(l),l}},A=i=>(t,l=0,...c)=>{if(typeof t=="function"){const d={dt:Date.now()};return d.cid=i(P,l,c.length>0?t.bind(null,...c):t,d)}else return i(t,l,...c)};s.setTimeout=A(m),s.setInterval=A(u);const F=i=>t=>{t&&(b.delete(t)||i(t))};s.clearTimeout=F(o),s.clearInterval=F(f);try{s.setTimeout.toString=m.toString.bind(m),s.setInterval.toString=u.toString.bind(u),s.clearTimeout.toString=o.toString.bind(o),s.clearInterval.toString=f.toString.bind(f)}catch(i){console.warn(i)}})();let h=null;u(()=>{h===w?h!==null&&(w=h=(h(),null)):h=w},125)})})(null);
