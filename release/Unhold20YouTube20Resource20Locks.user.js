// ==UserScript==
// @name                Unhold YouTube Resource Locks
// @name:en             Unhold YouTube Resource Locks
// @namespace           http://tampermonkey.net/
// @version             2026.05.09.0
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
(function(D){"use strict";const k=(async()=>{})().constructor,r=!1,m=[];let c=0;const E=new Set,x=typeof WeakRef=="function"?(n=>n?new WeakRef(n):null):(n=>n||null),B=(n=>n&&n.deref?n.deref():n),O=(function(n,G){"use strict";let v;try{v=document.documentElement.getRootNode().defaultView}catch{}const l=v||D;typeof(((l||0).navigator||0).locks||0).request=="function"&&(l.navigator.locks.query=function(){return n.log(arguments),new k(a=>{})},l.navigator.locks.request=function(){return n.log(arguments),new k(a=>{})});const N=(((l||0).indexedDB||0).constructor||0).name==="IDBFactory";if(N){let I=function(o,e,t,s){c>0&&clearTimeout(c),m.push([x(o),e,t,s]),c=setTimeout(y,18*1e3)},R=function(o,e,t){return function(s){r&&n.log(32,"addEventListener",e,t,s.type),o.call(this,arguments);const i=(s||0).target;E.delete(i)&&(I(i.result,e,t,s.type),n.log("releaseOnIdle",m.length,e)),r&&n.log(441,"addEventListener",e,t,s.type)}},S=function(o){return r&&n.log("makeAddEventListener1",o),function(e,t,...s){if(r&&n.log("makeAddEventListener2",o),arguments.length===2&&(e==="error"||e==="success")){r&&n.log(31,o,e);let i=p.get(t);return i||(i=R(t,o,e),p.set(t,i)),this[a](e,i)}return this[a](e,t,...s)}},A=function(o){return function(e,t){if(arguments.length===2&&(e==="error"||e==="success")){const s=p.get(t);r&&n.log(30,"removeEventListener",o,e);const i=this[L](e,s||t);return r&&n.log(442,"removeEventListener",o,e),i}return this[L](...arguments)}},C=function(){return function(o,e=void 0){const t=this[w](o,e);return t[a]=t.addEventListener,t.addEventListener=S(o),t[L]=t.removeEventListener,t.removeEventListener=A(o),u++,E.add(t),c>0&&clearTimeout(c),c=setTimeout(y,18*1e3),h({databaseId:o,action:"open",time:Date.now()}),t}};const a=Symbol(),L=Symbol(),w=Symbol(),p=new WeakMap;let u=0;const f=[];let d=0;const h=o=>{f.push(o)};async function y(){if(c){c=0,r&&n.log("CLEANING - 01 - BEGIN",u);for(const o of[...E.values()])try{let e=o.result,t=e.name;r&&n.log(e,t),e.close(),e=null,u--,h({databaseId:t,action:"close",time:Date.now()})}catch{}E.clear(),r&&n.log("CLEANING - 01 - END",u),r&&n.log("CLEANING - 02 - BEGIN",u);for(const o of m){let[e,t,s,i]=o;o.length=0;let g=B(e);e=null,g&&(r&&n.log(g,t,s,i),g.close(),g=null),u--,h({databaseId:t,action:"close",time:Date.now()})}m.length=0,r&&n.log("CLEANING - 02 - END",u),u===0&&f.length>0&&(d>0&&(clearTimeout(d),d=0),d=setTimeout(()=>{if(d=0,u===0&&f.length>0){let o=[...f];f.length=0,o.sort((e,t)=>e.databaseId.localeCompare(t.databaseId)||e.time-t.time),G.dir(o)}},300))}}l.indexedDB.constructor.prototype[w]=l.indexedDB.constructor.prototype.open,l.indexedDB.constructor.prototype.open=C()}return N})(r?console:Object.assign({},console,{log:function(){}}),console)})(this instanceof Window?this:self instanceof Window?self:window);
