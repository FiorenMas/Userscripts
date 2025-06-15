// ==UserScript==
// @name                Unhold YouTube Resource Locks
// @name:en             Unhold YouTube Resource Locks
// @namespace           http://tampermonkey.net/
// @version             2024.03.27.0
// @license             MIT License
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @exclude             https://www.youtube.com/live_chat*
// @exclude             https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @match               https://m.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-unlock-indexedDB.png
// @supportURL          https://github.com/cyfung1031/userscript-supports

// @compatible          edge
// @compatible          chrome
// @compatible          firefox
// @compatible          opera

// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Unhold20YouTube20Resource20Locks.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Unhold20YouTube20Resource20Locks.meta.js
// ==/UserScript==
(function(D){"use strict";const v=(async()=>{})().constructor,s=!1,m=[];let u=0;const d=new Set,x=typeof WeakRef=="function"?t=>t?new WeakRef(t):null:t=>t||null,B=t=>t&&t.deref?t.deref():t,O=function(t,G){"use strict";let k;try{k=new Function("return [window];")()[0]}catch{}const c=k||D;typeof(((c||0).navigator||0).locks||0).request=="function"&&(c.navigator.locks.query=function(){return t.log(arguments),new v(l=>{})},c.navigator.locks.request=function(){return t.log(arguments),new v(l=>{})});const w=(((c||0).indexedDB||0).constructor||0).name==="IDBFactory";if(w){let I=function(n,e,o,r){u>0&&clearTimeout(u),m.push([x(n),e,o,r]),u=setTimeout(N,18*1e3)},S=function(n,e,o){return function(r){s&&t.log(32,"addEventListener",e,o,r.type),n.call(this,arguments);const a=(r||0).target;d.delete(a)&&(I(a.result,e,o,r.type),t.log("releaseOnIdle",m.length,e)),s&&t.log(441,"addEventListener",e,o,r.type)}},A=function(n){return s&&t.log("makeAddEventListener1",n),function(e,o){if(s&&t.log("makeAddEventListener2",n),arguments.length===2&&e==="error"||e==="success"){s&&t.log(31,n,e);let r=p.get(o);return r||(r=S(o,n,e),p.set(o,r)),this[l](e,r)}return this[l](...arguments)}},C=function(n){return function(e,o){if(arguments.length===2&&e==="error"||e==="success"){const r=p.get(o);s&&t.log(30,"removeEventListener",n,e);const a=this[L](e,r||o);return s&&t.log(442,"removeEventListener",n,e),a}return this[L](...arguments)}},R=function(){return function(n){const e=this[y](n);return e[l]=e.addEventListener,e.addEventListener=A(n),e[L]=e.removeEventListener,e.removeEventListener=C(n),i++,d.add(e),u>0&&clearTimeout(u),u=setTimeout(N,18*1e3),h({databaseId:n,action:"open",time:Date.now()}),e}};const l=Symbol(),L=Symbol(),y=Symbol(),p=new WeakMap;let i=0;const f=[];let g=0;const h=n=>{f.push(n)};async function N(){if(u){u=0,s&&t.log("CLEANING - 01 - BEGIN",i);for(const n of[...d.values()])try{let e=n.result,o=e.name;s&&t.log(e,o),e.close(),e=null,i--,h({databaseId:o,action:"close",time:Date.now()})}catch{}d.clear(),s&&t.log("CLEANING - 01 - END",i),s&&t.log("CLEANING - 02 - BEGIN",i);for(const n of m){let[e,o,r,a]=n;n.length=0;let E=B(e);e=null,s&&t.log(E,o,r,a),E.close(),E=null,i--,h({databaseId:o,action:"close",time:Date.now()})}m.length=0,s&&t.log("CLEANING - 02 - END",i),i===0&&f.length>0&&(g>0&&(clearTimeout(g),g=0),g=setTimeout(()=>{if(g=0,i===0&&f.length>0){let n=[...f];f.length=0,n.sort((e,o)=>e.databaseId.localeCompare(o.databaseId)||e.time-o.time),G.dir(n)}},300))}}c.indexedDB.constructor.prototype[y]=c.indexedDB.constructor.prototype.open,c.indexedDB.constructor.prototype.open=R()}return w}(s?console:Object.assign({},console,{log:function(){}}),console)})(this instanceof Window?this:self instanceof Window?self:window);
