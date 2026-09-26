// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewer.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @version       2026.08.28.build-2003
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/2281/2281832.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_addValueChangeListener
// @noframes      on
// @connect       *
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.7.1/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/lodash@4.18.1/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@4.0.7/dist/hotkeys-js.min.js
// @require       https://cdn.jsdelivr.net/npm/bowser@2.14.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @include       /https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/
// @include       /https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/
// @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/
// @include       /https?:\/\/(www\.)?comick.io\/.+/
// @include       /https?:\/\/comix\.to\/(title|comic)\/.+\/.+/
// @include       /https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/
// @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/
// @include       /https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/
// @include       /https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/
// @include       /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/
// @include       /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/
// @include       /https?:\/\/(www\.)?lectorxd\.com\/.+\/leer\/.+/
// @include       /https?:\/\/(www\.)?lhtranslation.net\/read.+/
// @include       /(file:\/\/\/.+(index)?.html)/
// @include       /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/
// @include       /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?mangadex.org/
// @include       /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/
// @include       /https?:\/\/mangaball\.net\/chapter-detail\/.+/
// @include       /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/
// @include       /https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/
// @include       /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/
// @include       /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/
// @include       /https?:\/\/(www\.)?nineanime.com\/chapter\/.+/
// @include       /https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/
// @include       /https?:\/\/(www\.)?qimanga\.com\/series\/[^/]+\/chapter-.+/
// @include       /https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?reimanga\.com\/manga\/[^/]+-\d+\/\d+/
// @include       /https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/
// @include       /https?:\/\/(www\.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/
// @include       /https?:\/\/(www\.)?weebdex\.org\/.+/
// @include       /https?:\/\/(www.)?(vortexscans).(org)\/.+/
// @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/
// @include       /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/
// @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www\.)?pururin.io\/.+/
// ==/UserScript==
(function(){var co=Object.defineProperty,we=(t,e)=>()=>(e||(t((e={exports:{}}).exports,e),t=null),e.exports),ho=(t,e)=>{let o={};for(var n in t)co(o,n,{get:t[n],enumerable:!0});return e||co(o,Symbol.toStringTag,{value:"Module"}),o};function Nn(t,e){typeof unsafeWindow<"u"&&(unsafeWindow[t]=e),typeof window<"u"&&(window[t]=e)}function w(...t){return console.log("MangaOnlineViewer-main: ",...t),t}function G(...t){return["dev","development"].includes("main")&&console.info("MangaOnlineViewer: ",...t),t}function uo(t){typeof GM_deleteValue<"u"?GM_deleteValue(t):G("Fake Removing: ",t)}var Tt=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function Rn(t,e){return typeof GM_getValue<"u"?GM_getValue(t,e):(G("Fake Getting: ",t," = ",e),e)}function po(t,e){const o=Rn(t,e);if(typeof o=="string"&&o.trim()!=="")try{return JSON.parse(o)}catch(n){return w("Failed to parse JSON from storage",t,n),e}return o}function Pn(t){return po("settings",t)}function zn(t){return po(window.location.hostname,t)}function mo(t,e){return typeof GM_setValue<"u"?(GM_setValue(t,e),w("Setting: ",t," = ",e),e.toString()):(G("Fake Setting: ",t," = ",e),String(e))}function Bn(t){return mo("settings",t)}function go(t){return mo(window.location.hostname,t)}function Hn(){const t=bowser.getParser(window.navigator.userAgent).getBrowser();return`${t.name} ${t.version}`}function Gn(){return Tt.scriptHandler??"Greasemonkey"}var et=()=>{const t=bowser.getParser(window.navigator.userAgent).getPlatformType(!0);return t==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":t==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},Vn=()=>et()==="mobile"||et()==="tablet",$t=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),vo=(t,e="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(e,(o,n,r,i)=>{i&&t(r)})}catch(o){w("Failed to add settings listener",o)}};function Lt(t){return _.isEmpty(t)||_.isNil(t)}function K(t){return Lt(t)||t===!1||t===0}function Fn(t,e=document.body){return new Promise(o=>{const n=document.querySelector(t);if(n){o(n);return}const r=new MutationObserver(()=>{const i=document.querySelector(t);i&&(o(i),r.disconnect())});r.observe(e,{childList:!0,subtree:!0,attributes:!0})})}function Dt(t,e=250){return new Promise(o=>{const n=setInterval(()=>{t()&&(clearInterval(n),o(!0))},e)})}function Wn(t,e,o=document.body){return new Promise(n=>{const r=o.querySelector(t);if(r?.getAttribute(e)){n(r.getAttribute(e)??"");return}const i=new MutationObserver(()=>{const a=o.querySelector(t);a?.getAttribute(e)&&(n(a.getAttribute(e)??""),i.disconnect())});i.observe(o,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[e]})})}function Un(t,e=document.body){return new Promise(o=>{if(!K(unsafeWindow[t])){o(unsafeWindow[t]);return}const n=new MutationObserver(()=>{K(unsafeWindow[t])||(o(unsafeWindow[t]),n.disconnect())});n.observe(e,{childList:!0,subtree:!0,attributes:!0})})}async function Zn(t,e=5e3){const o=new Promise((n,r)=>{setTimeout(()=>r(new Error(`Timeout after ${e} ms`)),e)});return Promise.race([t,o])}async function Be(t,e,o,n){t!==void 0&&(w(o),w(n,await e(t)))}async function jn(t){await Be(t.waitAttr,e=>Wn(e?.[0],e?.[1]),`Waiting for Attribute ${t.waitAttr?.[1]} of ${t.waitAttr?.[0]}`,`Found Attribute ${t.waitAttr?.[1]} of ${t.waitAttr?.[0]} =`),await Be(t.waitEle,Fn,`Waiting for Element ${t.waitEle}`,"Found Element"),await Be(t.waitVar,Un,`Waiting for Variable ${t.waitVar}`,"Found Variable"),await Be(t.waitFunc,Dt,`Waiting to pass Function check ${t.waitFunc}`,"Found Function check"),await Be(t.waitTime,e=>new Promise(o=>setTimeout(o,e)),`Waiting for ${t.waitTime} milliseconds`,"Continuing after timer")}var te=[],le=0,tt=null,ot=4,nt=globalThis.nanostoresGlobal||={epoch:0},qn=()=>{let t;for(le=0;le<te.length;le+=ot)try{te[le](te[le+1].value,te[le+2],te[le+3])}catch(e){t=e}if(te.length=0,t)throw t},fo=t=>{let e=[],o={eq:Object.is,get(){return o.lc||o.listen(()=>{})(),o.value},init:t,lc:0,listen(n){return o.lc=e.push(n),()=>{for(let i=le+ot;i<te.length;)te[i]===n?te.splice(i,ot):i+=ot;let r=e.indexOf(n);~r&&(e.splice(r,1),--o.lc||o.off())}},notify(n,r){nt.epoch++;let i=!te.length&&!tt;for(let a of e)tt?.has(a)||(tt?.add(a),te.push(a,o,n,tt?void 0:r));i&&qn()},off(){},set(n){let r=o.value;o.eq(r,n)||(o.value=n,o.notify(r))},subscribe(n){let r=o.listen(n);return n(o.value),r},value:t};return o},Qn=5,rt=6,it=10,Yn=(t,e,o,n)=>(t.events=t.events||{},t.events[o+it]||(t.events[o+it]=n(r=>{t.events[o].reduceRight((i,a)=>(a(i),i),{shared:{},...r})})),t.events[o]=t.events[o]||[],t.events[o].push(e),()=>{let r=t.events[o],i=r.indexOf(e);r.splice(i,1),r.length||(delete t.events[o],t.events[o+it](),delete t.events[o+it])}),Xn=1e3,Kn=(t,e)=>Yn(t,n=>{let r=e(n);r&&t.events[rt].push(r)},Qn,n=>{let r=t.listen;t.listen=(...a)=>(!t.lc&&!t.active&&(t.active=!0,n()),r(...a));let i=t.off;return t.events[rt]=[],t.off=()=>{i(),setTimeout(()=>{if(t.active&&!t.lc){t.active=!1;for(let a of t.events[rt])a();t.events[rt]=[]}},Xn)},()=>{t.listen=r,t.off=i}}),Jn=(t,e,o)=>{Array.isArray(t)||(t=[t]);let n,r,i=()=>{if(r===nt.epoch)return;r=nt.epoch;let g=t.map(b=>b.get());if(!n||g.some((b,y)=>b!==n[y])){n=g;let b=e(...g);b&&b.then&&b.t?b.then(y=>{n===g&&a.set(y)}):(a.set(b),r=nt.epoch)}},a=fo(void 0),s=a.get;a.get=()=>(i(),s());let c,v=o?()=>{clearTimeout(c),c=setTimeout(i)}:i;return Kn(a,()=>{let g=t.map(b=>b.listen(v));return i(),()=>{for(let b of g)b()}}),a},er=(t,e)=>Jn(t,e),bo=(t={})=>{let e=fo(t);return e.eqKey=Object.is,e.setKey=function(o,n){let r=e.value;typeof n>"u"&&o in e.value?(e.value={...e.value},delete e.value[o],e.notify(r,o)):e.eqKey(e.value[o],n,o)||(e.value={...e.value,[o]:n},e.notify(r,o))},e};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Nt=globalThis,wo=t=>t,at=Nt.trustedTypes,ko=at?at.createPolicy("lit-html",{createHTML:t=>t}):void 0,Rt="$lit$",ae=`lit$${Math.random().toFixed(9).slice(2)}$`,Pt="?"+ae,tr=`<${Pt}>`,ke=document,He=()=>ke.createComment(""),Ge=t=>t===null||typeof t!="object"&&typeof t!="function",zt=Array.isArray,yo=t=>zt(t)||typeof t?.[Symbol.iterator]=="function",Bt=`[ 	
\f\r]`,Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Eo=/-->/g,Io=/>/g,ye=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_o=/'/g,Ao=/"/g,So=/^(?:script|style|textarea|title)$/i,or=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),m=or(1),se=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),xo=new WeakMap,Ee=ke.createTreeWalker(ke,129);function Mo(t,e){if(!zt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ko!==void 0?ko.createHTML(e):e}var Co=(t,e)=>{const o=t.length-1,n=[];let r,i=e===2?"<svg>":e===3?"<math>":"",a=Ve;for(let s=0;s<o;s++){const c=t[s];let v,g,b=-1,y=0;for(;y<c.length&&(a.lastIndex=y,g=a.exec(c),g!==null);)y=a.lastIndex,a===Ve?g[1]==="!--"?a=Eo:g[1]!==void 0?a=Io:g[2]!==void 0?(So.test(g[2])&&(r=RegExp("</"+g[2],"g")),a=ye):g[3]!==void 0&&(a=ye):a===ye?g[0]===">"?(a=r??Ve,b=-1):g[1]===void 0?b=-2:(b=a.lastIndex-g[2].length,v=g[1],a=g[3]===void 0?ye:g[3]==='"'?Ao:_o):a===Ao||a===_o?a=ye:a===Eo||a===Io?a=Ve:(a=ye,r=void 0);const E=a===ye&&t[s+1].startsWith("/>")?" ":"";i+=a===Ve?c+tr:b>=0?(n.push(v),c.slice(0,b)+Rt+c.slice(b)+ae+E):c+ae+(b===-2?s:E)}return[Mo(t,i+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ht=class $n{constructor({strings:e,_$litType$:o},n){let r;this.parts=[];let i=0,a=0;const s=e.length-1,c=this.parts,[v,g]=Co(e,o);if(this.el=$n.createElement(v,n),Ee.currentNode=this.el.content,o===2||o===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(r=Ee.nextNode())!==null&&c.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(const b of r.getAttributeNames())if(b.endsWith(Rt)){const y=g[a++],E=r.getAttribute(b).split(ae),M=/([.?@])?(.*)/.exec(y);c.push({type:1,index:i,name:M[2],strings:E,ctor:M[1]==="."?To:M[1]==="?"?$o:M[1]==="@"?Lo:Fe}),r.removeAttribute(b)}else b.startsWith(ae)&&(c.push({type:6,index:i}),r.removeAttribute(b));if(So.test(r.tagName)){const b=r.textContent.split(ae),y=b.length-1;if(y>0){r.textContent=at?at.emptyScript:"";for(let E=0;E<y;E++)r.append(b[E],He()),Ee.nextNode(),c.push({type:2,index:++i});r.append(b[y],He())}}}else if(r.nodeType===8)if(r.data===Pt)c.push({type:2,index:i});else{let b=-1;for(;(b=r.data.indexOf(ae,b+1))!==-1;)c.push({type:7,index:i}),b+=ae.length-1}i++}}static createElement(e,o){const n=ke.createElement("template");return n.innerHTML=e,n}};function Ie(t,e,o=t,n){if(e===se)return e;let r=n!==void 0?o._$Co?.[n]:o._$Cl;const i=Ge(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(t),r._$AT(t,o,n)),n!==void 0?(o._$Co??=[])[n]=r:o._$Cl=r),r!==void 0&&(e=Ie(t,r._$AS(t,e.values),r,n)),e}var Oo=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,n=(t?.creationScope??ke).importNode(e,!0);Ee.currentNode=n;let r=Ee.nextNode(),i=0,a=0,s=o[0];for(;s!==void 0;){if(i===s.index){let c;s.type===2?c=new st(r,r.nextSibling,this,t):s.type===1?c=new s.ctor(r,s.name,s.strings,this,t):s.type===6&&(c=new Do(r,this,t)),this._$AV.push(c),s=o[++a]}i!==s?.index&&(r=Ee.nextNode(),i++)}return Ee.currentNode=ke,n}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},st=class Ln{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,n,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Ie(this,e,o),Ge(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==se&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(ke.createTextNode(e)),this._$AH=e}$(e){const{values:o,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ht.createElement(Mo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(o);else{const i=new Oo(r,this),a=i.u(this.options);i.p(o),this.T(a),this._$AH=i}}_$AC(e){let o=xo.get(e.strings);return o===void 0&&xo.set(e.strings,o=new Ht(e)),o}k(e){zt(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let n,r=0;for(const i of e)r===o.length?o.push(n=new Ln(this.O(He()),this.O(He()),this,this.options)):n=o[r],n._$AI(i),r++;r<o.length&&(this._$AR(n&&n._$AB.nextSibling,r),o.length=r)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e!==this._$AB;){const n=wo(e).nextSibling;wo(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Fe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,n,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=x}_$AI(t,e=this,o,n){const r=this.strings;let i=!1;if(r===void 0)t=Ie(this,t,e,0),i=!Ge(t)||t!==this._$AH&&t!==se,i&&(this._$AH=t);else{const a=t;let s,c;for(t=r[0],s=0;s<r.length-1;s++)c=Ie(this,a[o+s],e,s),c===se&&(c=this._$AH[s]),i||=!Ge(c)||c!==this._$AH[s],c===x?t=x:t!==x&&(t+=(c??"")+r[s+1]),this._$AH[s]=c}i&&!n&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},To=class extends Fe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},$o=class extends Fe{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},Lo=class extends Fe{constructor(t,e,o,n,r){super(t,e,o,n,r),this.type=5}_$AI(t,e=this){if((t=Ie(this,t,e,0)??x)===se)return;const o=this._$AH,n=t===x&&o!==x||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==x&&(o===x||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Do=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Ie(this,t)}},nr={M:Rt,P:ae,A:Pt,C:1,L:Co,R:Oo,D:yo,V:Ie,I:st,H:Fe,N:$o,U:Lo,B:To,F:Do},rr=Nt.litHtmlPolyfillSupport;rr?.(Ht,st),(Nt.litHtmlVersions??=[]).push("3.3.3");var ir=(t,e,o)=>{const n=o?.renderBefore??e;let r=n._$litPart$;if(r===void 0){const i=o?.renderBefore??null;n._$litPart$=r=new st(e.insertBefore(He(),i),i,void 0,o??{})}return r._$AI(t),r},{I:a1}=nr,ar=t=>t.strings===void 0;/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*//**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=t=>(...e)=>({_$litDirective$:t,values:e}),ct=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Ue=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),Ue(n,e);return!0},dt=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},No=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),cr(e)}};function sr(t){this._$AN!==void 0?(dt(this),this._$AM=t,No(this)):this._$AM=t}function lr(t,e=!1,o=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let i=o;i<n.length;i++)Ue(n[i],!1),dt(n[i]);else n!=null&&(Ue(n,!1),dt(n));else Ue(this,t)}var cr=t=>{t.type==lt.CHILD&&(t._$AP??=lr,t._$AQ??=sr)},dr=class extends ct{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),No(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Ue(this,t),dt(this))}setValue(t){if(ar(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Gt=()=>new hr,hr=class{},Vt=new WeakMap,Ft=We(class extends dr{render(t){return x}update(t,[e]){const o=e!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),x}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=Vt.get(e);o===void 0&&(o=new WeakMap,Vt.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Vt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ce=[{ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",DEVICE_MODE:"Device Mode",DEVICE_MODE_AUTO:"Auto",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},{ID:"es_ES",NAME:"Espa\xF1ol (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la P\xE1gina ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la p\xE1gina en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturaci\xF3n del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",DEVICE_MODE:"Modo de dispositivo",DEVICE_MODE_AUTO:"Autom\xE1tico",DEVICE_MODE_DESKTOP:"Escritorio",DEVICE_MODE_TABLET:"Tableta",DEVICE_MODE_MOBILE:"M\xF3vil",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom m\xEDnimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualizaci\xF3n por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galer\xEDa",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar im\xE1genes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas p\xE1ginas no se pudieron descargar y se saltaron. Se ha a\xF1adido una lista de p\xE1ginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente cap\xEDtulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Cap\xEDtulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La pr\xF3xima vez que abra este cap\xEDtulo, continuar\xE1 desde la p\xE1gina ##num## (S\xF3lo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenci\xF3n",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la p\xE1gina para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la p\xE1gina para que surta efecto",AUTO_DOWNLOAD:"La pr\xF3xima vez que termine de cargarse un cap\xEDtulo, se le pedir\xE1 que guarde autom\xE1ticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podr\xE1 descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de im\xE1genes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la p\xE1gina (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de cap\xEDtulos",PAGES_LOADED:"P\xE1ginas cargadas",GO_TO_PAGE:"Ir a p\xE1gina",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de p\xE1gina",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"R\xE1pido",EXTREME:"Extremo",ALL_PAGES:"Todas las p\xE1ginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede da\xF1ar algunos servidores o marcar su IP como atacante DDoS.<br/> \xA1Util\xEDcelo con precauci\xF3n!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vac\xEDa",SCROLL_START:"Alternar desplazamiento autom\xE1tico",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento autom\xE1tico en p\xEDxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegaci\xF3n",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginaci\xF3n",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Men\xFA principal",VIEW_MENU:"Ver men\xFA",ZOOM_MENU:"Men\xFA Zoom",DOUBLE_PAGE:"Alternar P\xE1gina Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},{ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde come\xE7ar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configura\xE7\xF5es",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Satura\xE7\xE3o da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padr\xE3o",DEVICE_MODE:"Modo de Dispositivo",DEVICE_MODE_AUTO:"Autom\xE1tico",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Celular",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padr\xE3o (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padr\xE3o",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precis\xE3o da Mudan\xE7a do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualiza\xE7\xE3o Padr\xE3o",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mang\xE1 - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabe\xE7alho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas p\xE1ginas falharam ao baixar e foram puladas. Uma lista de p\xE1ginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuar\xE1 a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Aten\xE7\xE3o",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configura\xE7\xF5es(Reset Settings)",SETTINGS_RESET:"Configura\xE7\xF5es foram limpas, recarregue o site para efetivar a altera\xE7\xE3o",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a altera\xE7\xE3o",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento pregui\xE7oso n\xE3o \xE9 compativel com download de zip, n\xE3o conseguira com essa configura\xE7\xE3o ativa.<br/> Sugest\xE3o: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens pregui\xE7oso",LAZY_LOAD_IMAGES:"Carregamento de paginas pregui\xE7oso come\xE7a a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade n\xE3o \xE9 recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navega\xE7\xE3o",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Pagina\xE7\xE3o",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualiza\xE7\xF5es",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar P\xE1gina Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},{ID:"zh_CN",NAME:"\u4E2D\u6587 (\u7B80\u4F53)",STARTING:"\u6B63\u5728\u542F\u52A8 Manga OnlineViewer",RESUME:"\u4ECE\u9875\u9762\u7EE7\u7EED\u9605\u8BFB ",WAITING:"\u8BF7\u7B49\u5F853\u79D2\u949F...",CHOOSE_BEGINNING:"\u9009\u62E9\u8981\u5F00\u59CB\u7684\u9875\u6570:",BUTTON_START:"\u542F\u52A8Manga OnlineViewer",SETTINGS:"\u8BBE\u7F6E",LANGUAGE:"\u8BED\u8A00",COLOR_SCHEME:"\u914D\u8272\u65B9\u6848",THEME:"\u4E3B\u9898",THEME_COLOR:"\u989C\u8272",THEME_HUE:"\u8272\u76F8",THEME_SHADE:"\u8272\u5EA6",DEFAULT_LOAD_MODE:"\u9ED8\u8BA4\u52A0\u8F7D\u6A21\u5F0F",DEVICE_MODE:"\u8BBE\u5907\u6A21\u5F0F",DEVICE_MODE_AUTO:"\u81EA\u52A8",DEVICE_MODE_DESKTOP:"\u684C\u9762",DEVICE_MODE_TABLET:"\u5E73\u677F",DEVICE_MODE_MOBILE:"\u624B\u673A",LOAD_MODE_NORMAL:"\u7B49\u5F85\u6A21\u5F0F(\u7B49\u5F853\u79D2\u81EA\u52A8\u52A0\u8F7D )",LOAD_MODE_ALWAYS:"\u81EA\u52A8\u6A21\u5F0F(\u65E0\u9700\u7B49\u5F85)",LOAD_MODE_NEVER:"\u624B\u52A8\u6A21\u5F0F(\u70B9\u51FB\u542F\u52A8)",LOAD_SPEED:"\u52A0\u8F7D\u901F\u5EA6",DEFAULT_ZOOM:"\u9ED8\u8BA4\u7F29\u653E (\u6700\u5C0F 5 \u6700\u5927 200)",DEFAULT_ZOOM_MODE:"\u9ED8\u8BA4\u7F29\u653E\u6A21\u5F0F",MINIMUM_ZOOM:"\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u5BBD\u5EA6\u7684\u6700\u5C0F\u7F29\u653E (\u6700\u5C0F 30 \u6700\u5927 100)",ZOOM_STEP:"\u7F29\u653E\u7EA7\u522B (\u6700\u5C0F 5 \u6700\u5927 50)",DEFAULT_VIEW_MODE:"\u9ED8\u8BA4\u89C6\u56FE\u6A21\u5F0F",VIEW_MODE_VERTICAL:"\u5782\u76F4\u6709\u7F1D",VIEW_MODE_LEFT:"\u6A2A\u5411 - \u4ECE\u5DE6\u5230\u53F3",VIEW_MODE_RIGHT:"\u6A2A\u5411 - \u4ECE\u53F3\u5230\u5DE6",VIEW_MODE_WEBCOMIC:"\u5782\u76F4\u65E0\u7F1D",VIEW_MODE_BOOK:"\u4E66\u7C4D - \u4ECE\u5DE6\u5230\u53F3",VIEW_MODE_MANGA:"\u6F2B\u753B - \u4ECE\u53F3\u5230\u5DE6",VIEW_MODE_GALLERY:"\u56FE\u5E93",FIT_WIDTH_OVERSIZED:"\u5982\u679C\u5C3A\u5BF8\u8FC7\u5927\u3001\u5219\u9002\u5408\u5BBD\u5EA6",SHOW_THUMBNAILS:"\u663E\u793A\u7F29\u7565\u56FE",HIDE_CONTROLS:"\u59CB\u7EC8\u9690\u85CF\u9875\u9762\u63A7\u4EF6",HEADER_TYPE:"\u66F4\u6539\u6807\u9898\u663E\u793A\u65B9\u5F0F",HEADER_HOVER:"\u60AC\u505C",HEADER_SCROLL:"\u6EDA\u52A8",HEADER_CLICK:"\u70B9\u51FB",HEADER_FIXED:"\u56FA\u5B9A",HEADER_SIMPLE:"\u7B80\u5355",BUTTON_DOWNLOAD:"\u4E0B\u8F7D",DOWNLOAD_ZIP:"\u4E0B\u8F7D\u538B\u7F29\u6587\u4EF6",DOWNLOAD_IMAGES:"\u81EA\u52A8\u5C06\u56FE\u7247\u4E0B\u8F7D\u6210ZIP",DOWNLOAD_PROGRESS:"\u6B63\u5728\u4E0B\u8F7D\uFF1A\u7B2C ##num## \u9875\uFF0C\u5171 ##total## \u9875",GENERATING_ZIP:"\u6B63\u5728\u751F\u6210 Zip \u6587\u4EF6...",DOWNLOAD_INCOMPLETE:"\u4E0B\u8F7D\u4E0D\u5B8C\u6574",DOWNLOAD_INCOMPLETE_MESSAGE:"\u90E8\u5206\u9875\u9762\u4E0B\u8F7D\u5931\u8D25\u5E76\u5DF2\u8DF3\u8FC7\u3002\u5931\u8D25\u9875\u9762\u5217\u8868\u5DF2\u6DFB\u52A0\u5230 ZIP \u6587\u4EF6\u4E2D\u3002",BUTTON_NEXT:"\u4E0B\u4E00\u9875",NEXT_CHAPTER:"\u4E0B\u4E00\u7AE0",BUTTON_PREVIOUS:"\u4E0A\u4E00\u9875",PREVIOUS_CHAPTER:"\u4E0A\u4E00\u7AE0",BOOKMARKS:"\u4E66\u7B7E",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"\u5220\u9664\u4E66\u7B7E",BOOKMARK_SAVED:"\u4FDD\u5B58\u4E66\u7B7E",BOOKMARK_MESSAGE:"\u4E0B\u6B21\u6253\u5F00\u672C\u7AE0\u65F6\uFF0C\u5C06\u4ECE: \u9875\u7801 ##num## (\u4EC5\u4E00\u6B21 \u6BCF\u4E2A\u4E66\u7B7E)",KEYBINDINGS:"\u5FEB\u6377\u952E",EDIT_KEYBINDS:"\u7F16\u8F91\u952E\u7ED1\u5B9A",SAVE_KEYBINDS:"\u4FDD\u5B58\u952E\u7ED1\u5B9A",BUTTON_EDIT:"\u7F16\u8F91",BUTTON_SAVE:"\u6551",KEYBIND_RULES:`
    <h3>\u652F\u6301\u7684\u5BC6\u94A5</h3>
    \u5141\u8BB8\u7684\u4FEE\u9970\u7B26: shift, option, alt, ctrl, control, command. <br/>
    \u7279\u6B8A\u952E: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    \u4F8B\u5B50: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"\u6CE8\u610F",WARNING:"\u8B66\u544A",BUTTON_RESET_SETTINGS:"\u91CD\u7F6E\u8BBE\u7F6E(Reset Settings)",SETTINGS_RESET:"\u8BBE\u7F6E\u5DF2\u91CD\u7F6E\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",LANGUAGE_CHANGED:"\u8BED\u8A00\u5DF2\u66F4\u6539\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",AUTO_DOWNLOAD:"\u4E0B\u6B21\u7AE0\u8282\u52A0\u8F7D\u5B8C\u6210\u65F6\u3001\u7CFB\u7EDF\u5C06\u63D0\u793A\u60A8\u81EA\u52A8\u4FDD\u5B58",LAZY_LOAD:"\u5EF6\u8FDF\u52A0\u8F7D\u4E0Ezip\u4E0B\u8F7D\u4E0D\u517C\u5BB9\u3001\u60A8\u5C06\u65E0\u6CD5\u4F7F\u7528\u6B64\u8BBE\u7F6E\u4E0B\u8F7D.<br/> \u5EFA\u8BAE: <span style='color:red;font-weight:bold'>\u7981\u7528\u7F29\u7565\u56FE</span> \u4EE5\u8282\u7701\u6D41\u91CF\u548C\u5185\u5B58.",LAZY_LOAD_IMAGES_ENABLE:"\u542F\u7528\u5EF6\u8FDF\u52A0\u8F7D\u56FE\u50CF",LAZY_LOAD_IMAGES:"\u60F0\u6027\u52A0\u8F7D\u4ECE\u9875\u9762 (\u6700\u5C0F 5 \u6700\u5927 100)",RETURN_CHAPTER_LIST:"\u8FD4\u56DE\u7AE0\u8282\u5217\u8868",PAGES_LOADED:"\u5DF2\u52A0\u8F7D\u7684\u9875\u6570",GO_TO_PAGE:"\u8F6C\u5230\u9875\u6570",ENLARGE:"\u653E\u5927",RESTORE:"\u8FD8\u539F",REDUCE:"\u7F29\u5C0F",FIT_WIDTH:"\u9002\u5408\u5BBD\u5EA6",FIT_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",PERCENT:"\u767E\u5206\u4E4B",TOGGLE_CONTROLS:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",ZOOM_IN:"\u653E\u5927",ZOOM_OUT:"\u7F29\u5C0F",ZOOM_RESET:"\u8FD8\u539F",ZOOM_WIDTH:"\u9002\u5408\u5BBD\u5EA6",ZOOM_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",HIDE:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",RELOAD:"\u91CD\u65B0\u52A0\u8F7D",SLOWLY:"\u6162\u901F",NORMAL:"\u6B63\u5E38",FAST:"\u5FEB\u901F",EXTREME:"\u6781\u7AEF",ALL_PAGES:"\u6240\u6709\u9875\u9762",SPEED_WARNING:"\u52A0\u8F7D\u901F\u5EA6\u8FC7\u9AD8",SPEED_WARNING_MESSAGE:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u6B64\u901F\u5EA6.<br/>\u5B83\u53EF\u80FD\u4F1A\u4F24\u5BB3\u67D0\u4E9B\u670D\u52A1\u5668\u6216\u5C06\u60A8\u7684 IP \u6807\u8BB0\u4E3A DDoS \u653B\u51FB\u8005.<br/>\u8BF7\u8C28\u614E\u4F7F\u7528!",SCROLL_UP:"\u5411\u4E0A\u6EDA\u52A8",SCROLL_DOWN:"\u5411\u4E0B\u6EDA\u52A8",CLOSE:"\u5173\u95ED",CANCEL:"\u53D6\u6D88",LIST_EMPTY:"\u6CA1\u6709\u6536\u85CF\u4E66\u7B7E",SCROLL_START:"\u5207\u6362\u81EA\u52A8\u6EDA\u52A8",INCREASE_SPEED:"\u589E\u52A0\u6EDA\u52A8\u901F\u5EA6",DECREASE_SPEED:"\u964D\u4F4E\u6EDA\u52A8\u901F\u5EA6",AUTO_SCROLL_HEIGHT:"\u81EA\u52A8\u6EDA\u52A8\u901F\u5EA6\uFF08\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\uFF09",VERTICAL_SEPARATOR:"\u663E\u793A\u5782\u76F4\u5206\u9694\u7B26",END:"\u7ED3\u5C3E",SCOPE:"\u8303\u56F4",GLOBAL:"\u5168\u7403",GENERAL:"\u5E38\u89C4",LOADING:"\u88C5\u8F7D",ZOOM:"\u7F29\u653E",OTHERS:"\u522B\u4EBA",NAVBAR_TYPE:"\u66F4\u6539\u5BFC\u822A\u680F\u7C7B\u578B",NAVBAR_BOTTOM:"\u5E95\u90E8",NAVBAR_LEFT:"\u5DE6\u8FB9",NAVBAR_RIGHT:"\u6B63\u786E\u7684",NAVBAR_DISABLED:"\u5DF2\u7981\u7528",PAGINATION_TYPE:"\u5206\u9875\u7C7B\u578B",PAGINATION_DISABLED:"\u5DF2\u7981\u7528",PAGINATION_SLIDER:"\u6ED1\u5757",PAGINATION_ARROWS:"\u4FA7\u8FB9\u7BAD\u5934",PAGINATION_BOTH:"\u4E24\u8005",FILE_MENU:"\u4E3B\u83DC\u5355",VIEW_MENU:"\u67E5\u770B\u83DC\u5355",ZOOM_MENU:"\u7F29\u653E\u83DC\u5355",DOUBLE_PAGE:"\u5207\u6362\u53CC\u9875",CHOOSE_FILE:"\u9009\u62E9\u6587\u4EF6",NO_FILES_SELECTED:"\u672A\u9009\u62E9\u4EFB\u4F55\u6587\u4EF6"},{ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"W\xE4hle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",DEVICE_MODE:"Ger\xE4temodus",DEVICE_MODE_AUTO:"Automatisch",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobil",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgr\xF6\xDFe (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei \xDCbergr\xF6\xDFe",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp \xE4ndern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollst\xE4ndig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden \xFCbersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugef\xFCgt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"N\xE4chstes Kapitel",BUTTON_PREVIOUS:"Zur\xFCck",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim n\xE4chsten \xD6ffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenk\xFCrzel",EDIT_KEYBINDS:"Tastenk\xFCrzel bearbeiten",SAVE_KEYBINDS:"Tastenk\xFCrzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterst\xFCtzte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zur\xFCcksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zur\xFCckgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde ge\xE4ndert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim n\xE4chsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern m\xF6chtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitel\xFCbersicht zur\xFCckkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergr\xF6\xDFern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"H\xF6he anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zur\xFCcksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf H\xF6he zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server \xFCberlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schlie\xDFen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erh\xF6hen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"L\xE4dt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp \xE4ndern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmen\xFC",VIEW_MENU:"Men\xFC \u201EAnsicht\u201C",ZOOM_MENU:"Zoom-Men\xFC",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei ausw\xE4hlen",NO_FILES_SELECTED:"Keine Dateien ausgew\xE4hlt"},{ID:"fr_FR",NAME:"Fran\xE7ais (FR)",STARTING:"D\xE9marrage Manga OnlineViewer",RESUME:"Reprise de la lecture \xE0 partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"D\xE9marrer Manga OnlineViewer",SETTINGS:"Param\xE8tres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Th\xE8me",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par d\xE9faut",DEVICE_MODE:"Mode d'appareil",DEVICE_MODE_AUTO:"Automatique",DEVICE_MODE_DESKTOP:"Bureau",DEVICE_MODE_TABLET:"Tablette",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (imm\xE9diatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par d\xE9faut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par d\xE9faut",MINIMUM_ZOOM:"Zoom minimum par rapport \xE0 la largeur de l'\xE9cran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par d\xE9faut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche \xE0 droite",VIEW_MODE_RIGHT:"Horizontal - De droite \xE0 gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche \xE0 droite",VIEW_MODE_MANGA:"Manga - De droite \xE0 gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster \xE0 la largeur si surdimensionn\xE9",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contr\xF4les de page",HEADER_TYPE:"Changer le type d'en-t\xEAte",HEADER_HOVER:"Survol",HEADER_SCROLL:"D\xE9filement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"T\xE9l\xE9charger",DOWNLOAD_ZIP:"T\xE9l\xE9charger le fichier Zip",DOWNLOAD_IMAGES:"T\xE9l\xE9charger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"T\xE9l\xE9chargement : ##num## sur ##total##",GENERATING_ZIP:"G\xE9n\xE9ration du fichier Zip...",DOWNLOAD_INCOMPLETE:"T\xE9l\xE9chargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu \xEAtre t\xE9l\xE9charg\xE9es et ont \xE9t\xE9 ignor\xE9es. Une liste des pages concern\xE9es a \xE9t\xE9 ajout\xE9e au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Pr\xE9c\xE9dent",PREVIOUS_CHAPTER:"Chapitre pr\xE9c\xE9dent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprim\xE9",BOOKMARK_SAVED:"Favori enregistr\xE9",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra \xE0 partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autoris\xE9s : shift, option, alt, ctrl, control, command. <br/>
    Touches sp\xE9ciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"R\xE9initialiser les param\xE8tres",SETTINGS_RESET:"Les param\xE8tres ont \xE9t\xE9 r\xE9initialis\xE9s, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a \xE9t\xE9 modifi\xE9e, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera propos\xE9 de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le t\xE9l\xE9chargement zip, vous ne pourrez pas t\xE9l\xE9charger avec ce param\xE8tre activ\xE9.<br/> Suggestion : <span style='color:red;font-weight:bold'>D\xE9sactivez les vignettes</span> pour \xE9conomiser de la bande passante/m\xE9moire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"D\xE9but du chargement paresseux \xE0 partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour \xE0 la liste des chapitres",PAGES_LOADED:"Pages charg\xE9es",GO_TO_PAGE:"Aller \xE0 la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"R\xE9duire",FIT_WIDTH:"Ajuster \xE0 la largeur",FIT_HEIGHT:"Ajuster \xE0 la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contr\xF4les de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arri\xE8re",ZOOM_RESET:"R\xE9initialiser le zoom",ZOOM_WIDTH:"Zoomer \xE0 la largeur",ZOOM_HEIGHT:"Zoomer \xE0 la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extr\xEAme",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop \xE9lev\xE9e",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommand\xE9e.<br/> Elle peut nuire \xE0 certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire d\xE9filer vers le haut",SCROLL_DOWN:"Faire d\xE9filer vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le d\xE9filement automatique",INCREASE_SPEED:"Augmenter la vitesse de d\xE9filement",DECREASE_SPEED:"Diminuer la vitesse de d\xE9filement",AUTO_SCROLL_HEIGHT:"Vitesse de d\xE9filement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les s\xE9parateurs verticaux",END:"Fin",SCOPE:"Port\xE9e",GLOBAL:"Global",GENERAL:"G\xE9n\xE9ral",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"D\xE9sactiv\xE9",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"D\xE9sactiv\xE9",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Fl\xE8ches lat\xE9rales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier s\xE9lectionn\xE9"}];function Ro(t){return"listImages"in t&&!K(t.listImages)}function Po(t){return"listPages"in t&&!K(t.listPages)}function ur(t){return"bruteForce"in t&&!K(t.bruteForce)}var I=(function(t){return t.ENGLISH="English",t.SPANISH="Spanish",t.PORTUGUESE="Portuguese",t.CHINESE="Chinese",t.RAW="Raw",t})({}),A=(function(t){return t.MANGA="manga",t.COMIC="comic",t.HENTAI="hentai",t})({});function pr(t,e){return e in t}/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var ht=globalThis,Wt=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol(),zo=new WeakMap,Bo=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Wt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=zo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&zo.set(e,t))}return t}toString(){return this.cssText}},k=t=>new Bo(typeof t=="string"?t:t+"",void 0,Ut),D=(t,...e)=>new Bo(t.length===1?t[0]:e.reduce((o,n,r)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1],t[0]),t,Ut),mr=(t,e)=>{if(Wt)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const n=document.createElement("style"),r=ht.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=o.cssText,t.appendChild(n)}},Ho=Wt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const n of e.cssRules)o+=n.cssText;return k(o)})(t):t;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var{is:gr,defineProperty:vr,getOwnPropertyDescriptor:fr,getOwnPropertyNames:br,getOwnPropertySymbols:wr,getPrototypeOf:kr}=Object,ut=globalThis,Go=ut.trustedTypes,yr=Go?Go.emptyScript:"",Er=ut.reactiveElementPolyfillSupport,Ze=(t,e)=>t,pt={toAttribute(t,e){switch(e){case Boolean:t=t?yr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},Zt=(t,e)=>!gr(t,e),Vo={attribute:!0,type:String,converter:pt,reflect:!1,useDefault:!1,hasChanged:Zt};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;var Oe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Vo){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(t,o,e);n!==void 0&&vr(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){const{get:n,set:r}=fr(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:n,set(i){const a=n?.call(this);r?.call(this,i),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vo}static _$Ei(){if(this.hasOwnProperty(Ze("elementProperties")))return;const t=kr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ze("properties"))){const e=this.properties,o=[...br(e),...wr(e)];for(const n of o)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,n]of e)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const n=this._$Eu(e,o);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)e.unshift(Ho(n))}else t!==void 0&&e.push(Ho(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(n!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:pt).toAttribute(e,o.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){const o=this.constructor,n=o._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const r=o.getPropertyOptions(n),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:pt;this._$Em=n;const a=i.fromAttribute(e,r.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,o,n=!1,r){if(t!==void 0){const i=this.constructor;if(n===!1&&(r=this[t]),o??=i.getPropertyOptions(t),!((o.hasChanged??Zt)(r,e)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:n,wrapped:r},i){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),r!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,r]of o){const{wrapped:i}=r,a=this[n];i!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,r,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Oe.elementStyles=[],Oe.shadowRootOptions={mode:"open"},Oe[Ze("elementProperties")]=new Map,Oe[Ze("finalized")]=new Map,Er?.({ReactiveElement:Oe}),(ut.reactiveElementVersions??=[]).push("2.1.2");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var jt=globalThis,C=class extends Oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ir(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return se}};C._$litElement$=!0,C.finalized=!0,jt.litElementHydrateSupport?.({LitElement:C});var Ir=jt.litElementPolyfillSupport;Ir?.({LitElement:C}),(jt.litElementVersions??=[]).push("4.2.2");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var O=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var _r={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:Zt},Ar=(t=_r,e,o)=>{const{kind:n,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(o.name,t),n==="accessor"){const{name:a}=o;return{set(s){const c=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,c,t,!0,s)},init(s){return s!==void 0&&this.C(a,void 0,t,s),s}}}if(n==="setter"){const{name:a}=o;return function(s){const c=this[a];e.call(this,s),this.requestUpdate(a,c,t,!0,s)}}throw Error("Unsupported decorator location: "+n)};function u(t){return(e,o)=>typeof o=="object"?Ar(t,e,o):((n,r,i)=>{const a=r.hasOwnProperty(i);return r.constructor.createProperty(i,n),a?Object.getOwnPropertyDescriptor(r,i):void 0})(t,e,o)}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function B(t){return u({...t,state:!0,attribute:!1})}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Fo=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ce(t,e){return(o,n,r)=>{const i=a=>a.renderRoot?.querySelector(t)??null;if(e){const{get:a,set:s}=typeof n=="object"?o:r??(()=>{const c=Symbol();return{get(){return this[c]},set(v){this[c]=v}}})();return Fo(o,n,{get(){let c=a.call(this);return c===void 0&&(c=i(this),(c!==null||this.hasUpdated)&&s.call(this,c)),c}})}return Fo(o,n,{get(){return i(this)}})}}/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var N=We(class extends ct{constructor(t){if(super(t),t.type!==lt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}const o=t.element.classList;for(const n of this.st)n in e||(o.remove(n),this.st.delete(n));for(const n in e){const r=!!e[n];r===this.st.has(n)||this.nt?.has(n)||(r?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return se}});/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var mt=class extends ct{constructor(t){if(super(t),this.it=x,t.type!==lt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===x||t==null)return this._t=void 0,this.it=t;if(t===se)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};mt.directiveName="unsafeHTML",mt.resultType=1;var Wo=We(mt);/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var qt=class extends mt{};qt.directiveName="unsafeSVG",qt.resultType=2;var Uo=We(qt);function Zo(t){if(t.startsWith("Icon")&&!t.includes("-")&&!t.includes("_"))return t;const e=t.startsWith("Icon")?t.substring(4):t;return`Icon${_.upperFirst(_.camelCase(e))}`}var Sr=`.icon-tabler-file-download > :nth-child(n + 4) {\r
  color: gold;\r
}\r
\r
.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\r
  color: yellow;\r
}\r
\r
.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\r
  color: yellow;\r
}\r
\r
.icon-tabler-zoom-in-area > :nth-child(2),\r
.icon-tabler-zoom-in-area > :nth-child(3) {\r
  color: lime;\r
}\r
\r
.icon-tabler-zoom-out-area > :nth-child(2) {\r
  color: red;\r
}\r
\r
.icon-tabler-zoom-pan > :nth-child(n + 4) {\r
  color: #9966ff;\r
}\r
\r
.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\r
  color: #28ffbf;\r
}\r
\r
.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\r
  color: #28ffbf;\r
}\r
\r
.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\r
  color: #28ffbf;\r
}\r
\r
.icon-tabler-spacing-vertical > :nth-child(4) {\r
  color: fuchsia;\r
}\r
\r
.icon-tabler-spacing-horizontal > :nth-child(4) {\r
  color: fuchsia;\r
}\r
\r
.icon-tabler-list-numbers > :nth-child(n + 5) {\r
  color: #e48900;\r
}\r
\r
.icon-tabler-bookmarks > :nth-child(n + 2) {\r
  color: orange;\r
}\r
\r
.icon-tabler-bookmark > :nth-child(2) {\r
  color: orange;\r
}\r
\r
.icon-tabler-bookmark-off > :nth-child(2) {\r
  color: orange;\r
}\r
\r
.icon-tabler-bookmark-off > :nth-child(3) {\r
  color: red;\r
}\r
\r
.icon-tabler-eye-off > :nth-child(4) {\r
  color: red;\r
}\r
\r
.icon-tabler-zoom-cancel > :nth-child(3),\r
.icon-tabler-zoom-cancel > :nth-child(4) {\r
  color: #9966ff;\r
}\r
\r
.icon-tabler-zoom-in > :nth-child(3),\r
.icon-tabler-zoom-in > :nth-child(4) {\r
  color: lime;\r
}\r
\r
.icon-tabler-zoom-out > :nth-child(3) {\r
  color: red;\r
}\r
\r
.icon-tabler-refresh > :nth-child(n + 2) {\r
  color: cyan;\r
}\r
\r
.icon-tabler-photo > :nth-child(n + 2) {\r
  color: silver;\r
}\r
\r
.icon-tabler-photo-off > :nth-child(n + 2) {\r
  color: silver;\r
}\r
\r
.icon-tabler-photo-off > :nth-child(6) {\r
  color: orange;\r
}\r
\r
.icon-tabler-message > :nth-child(2),\r
.icon-tabler-message > :nth-child(3) {\r
  color: greenyellow;\r
}\r
\r
.icon-tabler-book-arrow-left > :nth-child(7),\r
.icon-tabler-book-arrow-left > :nth-child(8),\r
.icon-tabler-book-arrow-right > :nth-child(7),\r
.icon-tabler-book-arrow-right > :nth-child(8),\r
.icon-tabler-books-return > :nth-child(8),\r
.icon-tabler-books-return > :nth-child(9) {\r
  color: greenyellow;\r
}\r
\r
.icon-tabler-file-percent > :nth-child(2),\r
.icon-tabler-file-percent > :nth-child(5),\r
.icon-tabler-file-percent > :nth-child(6) {\r
  color: yellow;\r
}\r
\r
.icon-tabler-settings-off > :nth-child(4) {\r
  color: red;\r
}\r
\r
.icon-tabler-book-off > :nth-child(7) {\r
  color: red;\r
}\r
`,xr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',Mr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',Cr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Or='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',Tr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',$r='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',Lr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',Dr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',Nr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',Rr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',Pr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',zr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',Br='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Hr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Gr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',Vr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',Fr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Wr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',Ur='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',Zr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',jr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',qr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',Qr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',Yr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Xr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',Kr='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',Jr=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"/></g><g><path style="fill: #3ad1e0" d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"/><path style="fill: #22c7db" d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"/><path style="fill: #fb33a8" d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"/><path style="fill: #ee2d9a" d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"/><path style="fill: #fcb44d" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"/><path style="fill: #fb9927" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"/><g><path style="fill: #ae6ad8" d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"/><path style="fill: #975bbb" d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"/><g><circle style="fill: #f2eff2" cx="317.179" cy="125.438" r="25.456"/><circle style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " cx="317.179" cy="125.438" r="25.456"/></g></g><path style="fill: #23f1a8" d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"/><path style="fill: #27e19d" d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"/><path style="fill: #23f1a8" d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"/><path style="fill: #27e19d" d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"/></g><g><path style="fill: #fdef63" d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/><path style="fill: #f3d730" d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/></g><g><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="230.156" y1="339.714" x2="230.156" y2="311.299"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="230.156" y1="364.644" x2="230.156" y2="366.646"/></g><g><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="240.429" y1="83.83" x2="258.124" y2="83.83"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,ei=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3446"/></g><g id="g3448" transform="translate(309.1625,123.7057)"><path d="M 0,0 V -10.216" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3450"/></g><g id="g3452" transform="translate(241.984,113.7942)"><path d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,ti=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5063"/></g><g id="g5065" transform="translate(307.605,127.5815)"><path d="M 0,0 V -9.916" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5067"/></g><g id="g5069" transform="translate(242.3946,117.9604)"><path d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5071"/></g><g id="g5073" transform="translate(153.1665,442.2645)"><path d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5075"/></g><g id="g5077" transform="translate(86,427.4996)"><path d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5079"/></g><g id="g5081" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5083"/></g><g id="g5085" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5087"/></g><g id="g5089" transform="translate(426,346.167)"><path d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5091"/></g><g id="g5093" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5095"/></g><g id="g5097" transform="translate(154.0172,159.8334)"><path d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5099"/></g><g id="g5101" transform="translate(86,307.9314)"><path d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5103"/></g><g id="g5105" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5107"/></g></g></g></g></svg>`,oi='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',ni=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"/></g><path style="fill: #3ad1e0" d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"/><path style="fill: #20bfd5" d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"/><path style="fill: #26d192" d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"/><line style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " x1="280.6" y1="141.49" x2="280.6" y2="47.5"/><path style="fill: #23f1a8" d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><g><path style="fill: #ae6ad8" d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"/><path style="fill: #975bbb" d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"/></g><path style="fill: #27e19d" d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"/><path style="fill: #ae6ad8" d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"/><path style="fill: #975bbb" d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"/><g><path style="fill: #3ad1e0" d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"/><path style="fill: #20bfd5" d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"/></g><g><path style="fill: #fb54b6" d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"/></g><path style="fill: #fb9927" d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"/><path style="fill: #f98824" d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"/><g><path style="fill: #fb33a8" d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"/></g><g><g><path style="fill: #fdef63" d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"/><g><line id="XMLID_00000127012381744132405410000009872483291948348836_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="279.433" y1="224.908" x2="279.433" y2="224.805"/><line id="XMLID_00000080918978500845250090000017315552773041050031_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="256.002" y1="224.908" x2="256.002" y2="224.805"/><line id="XMLID_00000140711681861242238370000008769002181148908969_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="232.572" y1="224.908" x2="232.572" y2="224.805"/></g><path style="fill: #f3d730" d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"/></g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"/></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"/></g><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"/><g><g><g><circle style="fill: #d8b2ec" cx="189.8" cy="381.497" r="24.709"/><circle style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " cx="189.8" cy="381.497" r="24.709"/></g></g></g><g><line id="XMLID_00000028301319025648580530000009457246182494066313_" style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="314.674" y1="108.185" x2="354.689" y2="108.075"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,ri='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',ii='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',ai='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',si='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',li='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',ci='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',di=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></svg>\r
`,hi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',ui=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/><path d="M11 4h2"/><path d="M12 17v.01"/></svg>\r
`,pi=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/></svg>\r
`,mi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',gi='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',vi=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="176" y1="281.01" x2="336" y2="281.01"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="176" y1="321.01" x2="336" y2="321.01"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="256" y1="115.517" x2="256" y2="229.706"/><g><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="193.551" y1="362.07" x2="193.551" y2="374.07"/><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="318.449" y1="362.07" x2="318.449" y2="374.07"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,fi='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',bi=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"/><g><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="133.2" y1="310.695" x2="133.2" y2="322.695"/><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="258.098" y1="310.695" x2="258.098" y2="322.695"/><g><path style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            " d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/><path style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,wi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',ki='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',yi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',Ei='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',Ii='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',_i='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',Ai='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',Si='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',xi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',Mi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',Ci='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',Oi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',Ti='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',$i='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',Li='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',Di='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',Ni='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',Ri='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',Pi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',zi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Bi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',Hi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',Gi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',Vi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',Fi='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',Wi=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="264.641" y1="367.54" x2="327.14" y2="324.275"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="335.24" y1="420" x2="317.58" y2="458.04"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="365.42" y1="354.99" x2="349.98" y2="388.25"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"/><g><g><g><path style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              " d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/><path style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              " d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/></g></g><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,Ui='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Zi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',ji='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',qi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',Qi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',Yi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',Xi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',Ki='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',Ji='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',ea='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',ta='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',oa='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',na='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',ra='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',ia='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',aa='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',sa='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',la='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',ca='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',da='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',ha='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',ua='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',pa='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',ma='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',ga=ho({IconAdjustmentsHorizontal:()=>xr,IconAlertCircle:()=>Mr,IconApiBook:()=>Cr,IconArrowAutofitDown:()=>Or,IconArrowAutofitHeight:()=>Tr,IconArrowAutofitLeft:()=>$r,IconArrowAutofitRight:()=>Lr,IconArrowAutofitWidth:()=>Dr,IconArrowBigLeft:()=>Nr,IconArrowBigRight:()=>Rr,IconArrowsHorizontal:()=>Pr,IconArrowsLeftRight:()=>zr,IconArrowsMove:()=>Br,IconArrowsMoveVertical:()=>Hr,IconArrowsVertical:()=>Gr,IconBook:()=>Vr,IconBookArrowLeft:()=>Fr,IconBookArrowRight:()=>Wr,IconBookOff:()=>Ur,IconBookUpload:()=>Zr,IconBookmark:()=>jr,IconBookmarkOff:()=>qr,IconBookmarks:()=>Qr,IconBooksReturn:()=>Yr,IconBoxAlignTop:()=>Xr,IconCategory:()=>ri,IconCheck:()=>ii,IconChevronLeft:()=>ai,IconChevronRight:()=>si,IconCircleCheck:()=>li,IconCircleX:()=>ci,IconComic1:()=>Jr,IconComic1Flat:()=>Kr,IconComic2:()=>ti,IconComic2Flat:()=>ei,IconComic3:()=>ni,IconComic3Flat:()=>oi,IconDeviceDesktop:()=>di,IconDeviceFloppy:()=>hi,IconDeviceMobile:()=>ui,IconDeviceTablet:()=>pi,IconDotsVertical:()=>mi,IconEReader1:()=>vi,IconEReader1Flat:()=>gi,IconEReader2:()=>bi,IconEReader2Flat:()=>fi,IconExternalLink:()=>wi,IconEye:()=>ki,IconEyeOff:()=>yi,IconFileDownload:()=>Ei,IconFilePercent:()=>Ii,IconFolderOpen:()=>_i,IconHandClick:()=>Ai,IconHelp:()=>Si,IconInfoCircle:()=>xi,IconKeyboard:()=>Mi,IconLayoutBottombar:()=>Ci,IconLayoutBottombarInactive:()=>Oi,IconLayoutDashboard:()=>Ti,IconLayoutSidebar:()=>$i,IconLayoutSidebarInactive:()=>Li,IconLayoutSidebarRight:()=>Di,IconLayoutSidebarRightInactive:()=>Ni,IconListNumbers:()=>Ri,IconLoader2:()=>Pi,IconLocationCog:()=>zi,IconMenu2:()=>Bi,IconMenuDeep:()=>Hi,IconMessage:()=>Gi,IconMoon:()=>Vi,IconPage:()=>Wi,IconPageFlat:()=>Fi,IconPalette:()=>Ui,IconPencil:()=>Zi,IconPencilCog:()=>ji,IconPhoto:()=>qi,IconPhotoOff:()=>Qi,IconPin:()=>Yi,IconPlayerPause:()=>Xi,IconPlayerPlay:()=>Ki,IconRefresh:()=>Ji,IconSettings:()=>ea,IconSettingsOff:()=>ta,IconSpacingHorizontal:()=>oa,IconSpacingVertical:()=>na,IconSun:()=>ra,IconTrash:()=>ia,IconWorldCog:()=>aa,IconX:()=>sa,IconZoom:()=>la,IconZoomCancel:()=>ca,IconZoomIn:()=>da,IconZoomInArea:()=>ha,IconZoomOut:()=>ua,IconZoomOutArea:()=>pa,IconZoomPan:()=>ma}),Qt=ho({IconAdjustmentsHorizontal:()=>ya,IconAlertCircle:()=>Qa,IconApiBook:()=>Ea,IconArrowAutofitDown:()=>Aa,IconArrowAutofitHeight:()=>Sa,IconArrowAutofitLeft:()=>xa,IconArrowAutofitRight:()=>Ma,IconArrowAutofitWidth:()=>Ca,IconArrowBigLeft:()=>Oa,IconArrowBigRight:()=>Ta,IconArrowsHorizontal:()=>Ia,IconArrowsLeftRight:()=>_a,IconArrowsMove:()=>$a,IconArrowsMoveVertical:()=>La,IconArrowsVertical:()=>Da,IconBook:()=>Na,IconBookArrowLeft:()=>Pa,IconBookArrowRight:()=>za,IconBookOff:()=>Ra,IconBookUpload:()=>Ha,IconBookmark:()=>Ga,IconBookmarkOff:()=>Va,IconBookmarks:()=>Fa,IconBooksReturn:()=>Ba,IconBoxAlignTop:()=>Wa,IconCategory:()=>Ua,IconCheck:()=>Za,IconChevronLeft:()=>ja,IconChevronRight:()=>qa,IconCircleCheck:()=>Ya,IconCircleX:()=>Xa,IconComic1:()=>es,IconComic1Flat:()=>ts,IconComic2:()=>os,IconComic2Flat:()=>ns,IconComic3:()=>rs,IconComic3Flat:()=>is,IconDeviceDesktop:()=>as,IconDeviceFloppy:()=>ss,IconDeviceMobile:()=>ls,IconDeviceTablet:()=>cs,IconDotsVertical:()=>ds,IconEReader1:()=>hs,IconEReader1Flat:()=>us,IconEReader2:()=>ps,IconEReader2Flat:()=>ms,IconExternalLink:()=>gs,IconEye:()=>vs,IconEyeOff:()=>fs,IconFileDownload:()=>bs,IconFilePercent:()=>ws,IconFolderOpen:()=>ks,IconHandClick:()=>ys,IconHelp:()=>Ka,IconInfoCircle:()=>Ja,IconKeyboard:()=>Es,IconLayoutBottombar:()=>_s,IconLayoutBottombarInactive:()=>As,IconLayoutDashboard:()=>Is,IconLayoutSidebar:()=>Ss,IconLayoutSidebarInactive:()=>xs,IconLayoutSidebarRight:()=>Ms,IconLayoutSidebarRightInactive:()=>Cs,IconListNumbers:()=>Os,IconLoader2:()=>Ts,IconLocationCog:()=>$s,IconMenu2:()=>Ls,IconMenuDeep:()=>Ds,IconMessage:()=>Ns,IconMoon:()=>Rs,IconPage:()=>Ps,IconPageFlat:()=>zs,IconPalette:()=>Bs,IconPencil:()=>Hs,IconPencilCog:()=>Gs,IconPhoto:()=>Yt,IconPhotoOff:()=>Xt,IconPin:()=>Vs,IconPlayerPause:()=>Fs,IconPlayerPlay:()=>Ws,IconRefresh:()=>Us,IconSettings:()=>Zs,IconSettingsOff:()=>js,IconSpacingHorizontal:()=>qs,IconSpacingVertical:()=>Qs,IconSun:()=>Ys,IconTrash:()=>Xs,IconWorldCog:()=>Ks,IconX:()=>Js,IconZoom:()=>el,IconZoomCancel:()=>tl,IconZoomIn:()=>ol,IconZoomInArea:()=>nl,IconZoomOut:()=>rl,IconZoomOutArea:()=>il,IconZoomPan:()=>al});function va(t){return[...t.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(e=>{const o=e[1].trim(),n=e[2],r=/color:\s*([^;]+)/.exec(n);if(r){const i=r[1].trim();return{selectors:o.split(",").map(a=>a.trim().replace(/\s\s+/g," ")),color:i}}return null}).filter(e=>e!==null)}var fa=va(Sr),gt=new Map;for(const t of fa)for(const e of t.selectors){const o=e.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!o)continue;const[,n,r]=o;let i=r.trim();i.startsWith(">")&&(i=i.substring(1).trim()),i===""&&(i="*"),gt.has(n)||gt.set(n,[]),gt.get(n)?.push({subSelector:i,color:t.color})}var ba=new DOMParser,wa=new XMLSerializer;function ka(t,e){const o=gt.get(e);if(!o?.length)return t;const n=ba.parseFromString(t,"image/svg+xml").documentElement;if(n.querySelector("parsererror"))return console.error(`Error parsing SVG for ${e}`),t;for(const{subSelector:r,color:i}of o)try{n.querySelectorAll(r).forEach(a=>{a.setAttribute("stroke",i)})}catch(a){console.error(`Invalid selector "${r}" for ${e}`,a)}return wa.serializeToString(n)}var{IconAdjustmentsHorizontal:ya,IconApiBook:Ea,IconArrowsHorizontal:Ia,IconArrowsLeftRight:_a,IconArrowAutofitDown:Aa,IconArrowAutofitHeight:Sa,IconArrowAutofitLeft:xa,IconArrowAutofitRight:Ma,IconArrowAutofitWidth:Ca,IconArrowBigLeft:Oa,IconArrowBigRight:Ta,IconArrowsMove:$a,IconArrowsMoveVertical:La,IconArrowsVertical:Da,IconBook:Na,IconBookOff:Ra,IconBookArrowLeft:Pa,IconBookArrowRight:za,IconBooksReturn:Ba,IconBookUpload:Ha,IconBookmark:Ga,IconBookmarkOff:Va,IconBookmarks:Fa,IconBoxAlignTop:Wa,IconCategory:Ua,IconCheck:Za,IconChevronLeft:ja,IconChevronRight:qa,IconAlertCircle:Qa,IconCircleCheck:Ya,IconCircleX:Xa,IconHelp:Ka,IconInfoCircle:Ja,IconComic1:es,IconComic1Flat:ts,IconComic2:os,IconComic2Flat:ns,IconComic3:rs,IconComic3Flat:is,IconDeviceDesktop:as,IconDeviceFloppy:ss,IconDeviceMobile:ls,IconDeviceTablet:cs,IconDotsVertical:ds,IconEReader1:hs,IconEReader1Flat:us,IconEReader2:ps,IconEReader2Flat:ms,IconExternalLink:gs,IconEye:vs,IconEyeOff:fs,IconFileDownload:bs,IconFilePercent:ws,IconFolderOpen:ks,IconHandClick:ys,IconKeyboard:Es,IconLayoutDashboard:Is,IconLayoutBottombar:_s,IconLayoutBottombarInactive:As,IconLayoutSidebar:Ss,IconLayoutSidebarInactive:xs,IconLayoutSidebarRight:Ms,IconLayoutSidebarRightInactive:Cs,IconListNumbers:Os,IconLoader2:Ts,IconLocationCog:$s,IconMenu2:Ls,IconMenuDeep:Ds,IconMessage:Ns,IconMoon:Rs,IconPage:Ps,IconPageFlat:zs,IconPalette:Bs,IconPencil:Hs,IconPencilCog:Gs,IconPhoto:Yt,IconPhotoOff:Xt,IconPin:Vs,IconPlayerPause:Fs,IconPlayerPlay:Ws,IconRefresh:Us,IconSettings:Zs,IconSettingsOff:js,IconSpacingHorizontal:qs,IconSpacingVertical:Qs,IconSun:Ys,IconTrash:Xs,IconWorldCog:Ks,IconX:Js,IconZoom:el,IconZoomCancel:tl,IconZoomIn:ol,IconZoomInArea:nl,IconZoomOut:rl,IconZoomOutArea:il,IconZoomPan:al}=_.mapValues(ga,(t,e)=>ka(t,`icon-tabler-${_.kebabCase(e.replace(/^Icon/,""))}`));function l(t,e,o,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,o,i):a(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i}var _e=class extends C{constructor(...e){super(...e),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=D`
    :host {
      --mov-icon-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    :host([hidden]) {
      display: none;
    }
    svg {
      width: var(--mov-icon-size, 1rem);
      height: var(--mov-icon-size, 1rem);
      display: block;
      color: inherit; /* This will inherit from the host element */
    }
  `}updated(e){super.updated(e),e.has("name")&&(Qt[Zo(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const e=Qt[Zo(this.name)];if(!e)return x;const o=this.size?`--mov-icon-size: ${this.size};`:"";return m`<span
      role=${this.label?"img":x}
      aria-label=${this.label||x}
      aria-hidden=${this.label?x:"true"}
      style=${o}
      >${Uo(e)}</span
    >`}};l([u({type:String})],_e.prototype,"name",void 0),l([u({type:String,reflect:!0})],_e.prototype,"variant",void 0),l([u({type:String,reflect:!0})],_e.prototype,"family",void 0),l([u({type:String})],_e.prototype,"label",void 0),l([u({type:String})],_e.prototype,"size",void 0),_e=l([O("mov-icon")],_e);var sl=(t,...e)=>e.length===0?t[0]:String.raw({raw:t},...e),Te=sl;function ll(t,e){const o=document.createElement("style");return o.id=t,o.appendChild(document.createTextNode(e)),o}function jo(t,e){document.querySelector(`#${t}`)||(document.head??document.querySelector("head")).appendChild(ll(t,e))}function cl(t){document.querySelectorAll(`style[id="${t}"]`).forEach(e=>{e.remove()})}function dl(t,e){cl(t),jo(t,e)}function hl(t,e){return Te`
    <style id="${t}">
      ${e}
    </style>
  `}var vt=`.mov-toast-stack {\r
  position: fixed;\r
  z-index: 2000;\r
  width: 350px;\r
  max-width: 100vw;\r
  max-height: 100vh;\r
  padding: 1rem;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.5rem;\r
  pointer-events: none;\r
  overflow: hidden;\r
}\r
\r
/* Placements */\r
.mov-toast-stack-top-start {\r
  top: 0;\r
  left: 0;\r
}\r
.mov-toast-stack-top-center {\r
  top: 0;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  align-items: center;\r
}\r
.mov-toast-stack-top-end {\r
  top: 0;\r
  right: 0;\r
}\r
.mov-toast-stack-bottom-start {\r
  bottom: 0;\r
  left: 0;\r
  flex-direction: column-reverse;\r
}\r
.mov-toast-stack-bottom-center {\r
  bottom: 0;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  align-items: center;\r
  flex-direction: column-reverse;\r
}\r
.mov-toast-stack-bottom-end {\r
  bottom: 0;\r
  right: 0;\r
  flex-direction: column-reverse;\r
}\r
\r
:host {\r
  display: block;\r
  width: 100%;\r
}\r
\r
.mov-toast {\r
  pointer-events: auto;\r
  display: flex;\r
  flex-direction: column;\r
  background-color: var(--theme-background-color);\r
  color: var(--theme-text-color);\r
  border: 1px solid var(--theme-border-color);\r
  border-radius: 0.5rem;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r
  overflow: hidden;\r
  transition:\r
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),\r
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),\r
    visibility 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r
  opacity: 0;\r
  visibility: hidden;\r
  width: 100%;\r
}\r
\r
/* Animation directions based on placement property */\r
:host([placement$="-end"]) .mov-toast {\r
  transform: translateX(110%);\r
}\r
\r
:host([placement$="-start"]) .mov-toast {\r
  transform: translateX(-110%);\r
}\r
\r
:host([placement="top-center"]) .mov-toast {\r
  transform: translateY(-110%);\r
}\r
\r
:host([placement="bottom-center"]) .mov-toast {\r
  transform: translateY(110%);\r
}\r
\r
:host([open]) .mov-toast {\r
  transform: translate(0, 0);\r
  opacity: 1;\r
  visibility: visible;\r
}\r
\r
.mov-toast-body {\r
  display: flex;\r
  padding: 0.75rem 1rem;\r
  gap: 0.75rem;\r
  align-items: flex-start;\r
}\r
\r
.mov-toast-icon {\r
  flex-shrink: 0;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-size: 20px;\r
  margin-top: 0.125rem;\r
}\r
\r
.mov-toast-icon mov-icon {\r
  --mov-icon-size: 1.25rem;\r
}\r
\r
.mov-toast-content {\r
  flex-grow: 1;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.125rem;\r
}\r
\r
.mov-toast-title {\r
  font-weight: 600;\r
  font-size: 14px;\r
  line-height: 1.25;\r
}\r
\r
.mov-toast-description {\r
  font-size: 13px;\r
  opacity: 0.8;\r
  line-height: 1.4;\r
}\r
\r
.mov-toast-close {\r
  flex-shrink: 0;\r
  background: none;\r
  border: none;\r
  cursor: pointer;\r
  padding: 0.25rem;\r
  color: inherit;\r
  opacity: 0.5;\r
  transition: opacity 0.2s;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  margin-right: -0.25rem;\r
}\r
\r
.mov-toast-close:hover {\r
  opacity: 1;\r
}\r
\r
/* Variants */\r
.mov-toast-variant-primary .mov-toast-icon {\r
  color: var(--mov-color-fill-loud);\r
}\r
.mov-toast-variant-success .mov-toast-icon {\r
  color: #28a745;\r
}\r
.mov-toast-variant-warning .mov-toast-icon {\r
  color: #ffc107;\r
}\r
.mov-toast-variant-danger .mov-toast-icon {\r
  color: #dc3545;\r
}\r
.mov-toast-variant-neutral .mov-toast-icon {\r
  color: var(--theme-text-color);\r
}\r
\r
.mov-toast-variant-primary {\r
  border-left: 4px solid var(--mov-color-fill-loud);\r
}\r
.mov-toast-variant-success {\r
  border-left: 4px solid #28a745;\r
}\r
.mov-toast-variant-warning {\r
  border-left: 4px solid #ffc107;\r
}\r
.mov-toast-variant-danger {\r
  border-left: 4px solid #dc3545;\r
}\r
.mov-toast-variant-neutral {\r
  border-left: 4px solid var(--theme-border-color);\r
}\r
`,ne=class extends C{constructor(...e){super(...e),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[k(vt)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(e=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),e()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(e=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),e()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return m`
      <div
        part="base"
        class=${N({"mov-toast":!0,[`mov-toast-variant-${this.variant}`]:!0})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
      >
        <div class="mov-toast-body" part="body">
          <div class="mov-toast-icon" part="icon">
            <slot name="icon">
              <mov-icon name=${this.getDefaultIcon()}></mov-icon>
            </slot>
          </div>

          <div class="mov-toast-content" part="content">
            ${this.title?m`<div class="mov-toast-title" part="title">${this.title}</div>`:""}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${this.closable?m`
                <button
                  type="button"
                  class="mov-toast-close"
                  part="close-button"
                  @click=${this.handleCloseClick}
                  aria-label="Close"
                >
                  <mov-icon name="IconX"></mov-icon>
                </button>
              `:""}
        </div>
      </div>
    `}};l([u({type:Boolean,reflect:!0})],ne.prototype,"open",void 0),l([u({reflect:!0})],ne.prototype,"variant",void 0),l([u({type:Number})],ne.prototype,"duration",void 0),l([u({type:Boolean})],ne.prototype,"closable",void 0),l([u()],ne.prototype,"title",void 0),l([u()],ne.prototype,"description",void 0),l([u()],ne.prototype,"icon",void 0),l([u({reflect:!0})],ne.prototype,"placement",void 0),ne=l([O("mov-toast")],ne);var j=t=>{const e=t.placement||"bottom-end",o=`mov-toast-stack-${e}`;let n=document.querySelector(`.mov-toast-stack.${o}`);const r=vt.indexOf(":host");jo("mov-toast-stack-styles",r>-1?vt.substring(0,r).trim():vt),n||(n=document.createElement("div"),n.className=`mov-toast-stack ${o}`,document.body.appendChild(n));const i=document.createElement("mov-toast");let a=t.variant||"primary";return a==="info"&&(a="primary"),a==="error"&&(a="danger"),i.variant=a,i.title=t.title||"",i.description=t.description||t.message||"",i.duration=t.duration??3e3,i.closable=t.closable??!0,i.placement=e,t.icon&&(i.icon=t.icon),n.appendChild(i),requestAnimationFrame(()=>{i.show()}),i};j.info=t=>j({...t,variant:"primary"}),j.success=t=>j({...t,variant:"success"}),j.warning=t=>j({...t,variant:"warning"}),j.error=t=>j({...t,variant:"danger"});var je=(t,e)=>{const o=(n,r)=>_.transform(n,(i,a,s)=>{_.isEqual(a,r[s])||(_.isObject(a)&&_.isObject(r[s])&&!_.isArray(a)?i[s]=o(a,r[s]):i[s]=a)});return o(t,e)},ul={bookmarks:[],colorScheme:"dark",deviceMode:"auto",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","],TOGGLE_CONTROLS:["L"]}},pl={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},ml={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function oe(t=!0){const e={...ul,theme:t?"#29487D":"#004526"};let o=Vn()?_.defaultsDeep(pl,e):e;return $t()&&(o=_.defaultsDeep(ml,o)),o}function gl(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;const o=i=>`${i.url}-${i.date}`,n=[...t].sort((i,a)=>o(i).localeCompare(o(a))),r=[...e].sort((i,a)=>o(i).localeCompare(o(a)));return _.isEqual(n,r)}}function vl(t,e){if(t&&typeof t=="object"&&e&&typeof e=="object"){const o=t,n=e,r=_.keys(o).sort((a,s)=>a.localeCompare(s)),i=_.keys(n).sort((a,s)=>a.localeCompare(s));if(!_.isEqual(r,i))return!1;for(const a of r){const s=o[a]?[...o[a]].sort((v,g)=>v.localeCompare(g)):[],c=n[a]?[...n[a]].sort((v,g)=>v.localeCompare(g)):[];if(!_.isEqual(s,c))return!1}return!0}}function qo(t,e,o){if(o==="bookmarks")return gl(t,e);if(o==="keybinds")return vl(t,e)}function ft(t,e,o){if(t===e)return!1;if(o){const n={[o]:t},r={[o]:e};return!_.isEqualWith(n,r,qo)}return!_.isEqualWith(t,e,qo)}var F=_.defaultsDeep(Pn(oe()),oe()),W=_.defaultsDeep(zn(oe(!1)),oe(!1)),Ae=()=>W?.enabled===!0,Kt=t=>Ae()&&!["locale","bookmarks","keybinds"].includes(t),z=bo(Ae()?{...W,locale:F.locale,keybinds:F.keybinds,bookmarks:F.bookmarks}:F),$e=er(z,t=>Ce.find(e=>e.ID===t.locale)??Ce[1]);function Jt(t=p("deviceMode")){return t==="auto"?et():t}var U=bo({autoScroll:!1,chapter:Gt(),currentPage:0,device:Jt(),manga:void 0,panel:"none",scrollToPage:void 0});function Se(t){if(t){const e=Kt(t)?W[t]:F[t],o=z.get()?.[t];ft(o,e,t)&&(z.setKey(t,e),w("Refreshed Settings",t,e));return}for(const e in z.get()){const o=z.get()[e],n=Kt(e)?W[e]:F[e];ft(o,n)&&z.setKey(e,n)}w("Refreshed All Settings")}function fl(t){const e=_.defaultsDeep(t,oe()),o=F?je(e,F):e;if(!K(o)){w("Imported Global Settings",o),F=e;for(const n in o)Se(n)}}vo(_.debounce(fl,300),"settings");function bl(t){const e=_.defaultsDeep(t,oe(!1)),o=W?je(e,W):e;if(!K(o)){w("Imported Local Settings",o),W=e;for(const n in o)Se(n)}}vo(_.debounce(bl,300),location.hostname);function p(t){return z.get()?.[t]}function Le(t,e){const o=z.get()?.[t];ft(o,e,t)&&z.setKey(t,e)}function R(t,e){ft(p(t),e,t)&&(z.setKey(t,e),Kt(t)?(W[t]=e,go(je(W,oe(!1)))):(F[t]=e,Bn(je(F,oe()))))}function De(t,e){Le(t,e(p(t)))}function f(t){return U.get()[t]}function S(t,e){const o=U.get()[t];_.isEqual(o,e)||U.setKey(t,e)}function Qo(t,e){const o=U.get()[t],n=e(o);_.isEqual(o,n)||U.setKey(t,n)}function q(t,e){Qo("images",o=>({...o,[t]:{...o?.[t],...e(o?.[t]??{})}}))}function h(t){const e=Ce.find(o=>o.ID===p("locale"))??Ce[1];return pr(e,t)?e?.[t]??Ce[1]?.[t]:`##MISSING_STRING_${t}##`}function Yo(t=!1){return W.enabled=t,go(je(W,oe(!1))),w("Local Settings ",t?"Enabled":"Disabled"),j.info({title:"Changed Settings to",description:Ae()?"Local":"Global",duration:2e3}),Ae()}function wl(){Ae()?(uo(location.hostname),W=oe(!1),Yo(!1)):(uo("settings"),F=oe(),Se()),w("Settings Reset")}function Ne(t=location.href){return p("bookmarks").find(e=>e.url===t)?.page}function kl(t=null){G("Current Settings (Local:",Ae(),") ",t?z.get()[t]:z.get(),`
Global Settings`,t?F[t]:F,`
Local Settings`,t?W[t]:W,`
AppState`,U.get())}Nn("MOVSettings",kl);var yl=(t,e,o)=>{if(o&&!["bookmarks","zoomValue"].includes(o)){const n=e[o],r=t[o];j.info({title:`${o} Changed`,description:`from ${JSON.stringify(n)} to ${JSON.stringify(r)}`,duration:2e3})}};z.listen(_.debounce(yl,300));/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Q=t=>t??x,El=`:host {\r
  display: inline-block;\r
  --mov-font-size-scale: 1;\r
  --mov-font-size-m: calc(16px * var(--mov-font-size-scale));\r
  --mov-font-size-s: round(calc(var(--mov-font-size-m) / 1.125), 1px);\r
  --mov-font-size-l: round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);\r
  --mov-border-width-s: 0.0625rem;\r
  --mov-border-radius-pill: 9999px;\r
  --mov-transition-fast: 75ms;\r
  --mov-font-weight-action: 500;\r
  --mov-focus-ring: solid 0.1875rem var(--mov-color-fill-loud);\r
  --mov-focus-ring-offset: 0.0625rem;\r
  --mov-line-height-condensed: 1.2;\r
  --mov-form-control-padding-block: 0.75em;\r
  --mov-form-control-padding-inline: 1em;\r
  --mov-form-control-height: round(\r
    calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)),\r
    1px\r
  );\r
}\r
\r
:host([size="small"]) {\r
  font-size: var(--mov-font-size-s);\r
}\r
:host([size="medium"]) {\r
  font-size: var(--mov-font-size-m);\r
}\r
:host([size="large"]) {\r
  font-size: var(--mov-font-size-l);\r
}\r
\r
.button {\r
  box-sizing: border-box;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  text-decoration: none;\r
  user-select: none;\r
  white-space: nowrap;\r
  vertical-align: middle;\r
  transition-property: background, border, box-shadow, color;\r
  transition-duration: var(--mov-transition-fast);\r
  cursor: pointer;\r
  padding: 0 var(--mov-form-control-padding-inline);\r
  font-family: inherit;\r
  font-size: inherit;\r
  font-weight: var(--mov-font-weight-action);\r
  line-height: calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);\r
  height: var(--mov-form-control-height);\r
  border-radius: var(--mov-border-radius-m, 0.375rem);\r
  border-style: solid;\r
  border-width: var(--mov-border-width-s);\r
  background-color: var(--mov-color-fill-loud);\r
  color: var(--mov-color-on-loud);\r
  border-color: transparent;\r
}\r
\r
/* Appearance modifiers */\r
:host([appearance~="plain"]) {\r
  .button {\r
    color: var(--mov-color-on-quiet);\r
    background-color: transparent;\r
    border-color: transparent;\r
  }\r
  @media (hover: hover) {\r
    .button:not(.disabled):not(.loading):hover {\r
      color: var(--mov-color-on-quiet);\r
      background-color: var(--mov-color-fill-quiet);\r
    }\r
  }\r
  .button:not(.disabled):not(.loading):active {\r
    color: var(--mov-color-on-quiet);\r
    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\r
  }\r
}\r
\r
:host([appearance~="outlined"]) {\r
  .button {\r
    color: var(--mov-color-on-quiet);\r
    background-color: transparent;\r
    border-color: var(--mov-color-border-loud);\r
  }\r
  @media (hover: hover) {\r
    .button:not(.disabled):not(.loading):hover {\r
      color: var(--mov-color-on-quiet);\r
      background-color: var(--mov-color-fill-quiet);\r
    }\r
  }\r
  .button:not(.disabled):not(.loading):active {\r
    color: var(--mov-color-on-quiet);\r
    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\r
  }\r
}\r
\r
:host([appearance~="filled"]) {\r
  .button {\r
    color: var(--mov-color-on-normal);\r
    background-color: var(--mov-color-fill-normal);\r
    border-color: transparent;\r
  }\r
  @media (hover: hover) {\r
    .button:not(.disabled):not(.loading):hover {\r
      color: var(--mov-color-on-normal);\r
      background-color: color-mix(\r
        in oklab,\r
        var(--mov-color-fill-normal),\r
        var(--mov-color-mix-hover)\r
      );\r
    }\r
  }\r
  .button:not(.disabled):not(.loading):active {\r
    color: var(--mov-color-on-normal);\r
    background-color: color-mix(\r
      in oklab,\r
      var(--mov-color-fill-normal),\r
      var(--mov-color-mix-active)\r
    );\r
  }\r
}\r
\r
:host([appearance~="filled"][appearance~="outlined"]) .button {\r
  border-color: var(--mov-color-border-normal);\r
}\r
\r
:host([appearance~="accent"]) {\r
  .button {\r
    color: var(--mov-color-on-loud);\r
    background-color: var(--mov-color-fill-loud);\r
    border-color: transparent;\r
  }\r
  @media (hover: hover) {\r
    .button:not(.disabled):not(.loading):hover {\r
      background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover));\r
    }\r
  }\r
  .button:not(.disabled):not(.loading):active {\r
    background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active));\r
  }\r
}\r
/* Focus states */\r
.button:focus {\r
  outline: none;\r
}\r
.button:focus-visible {\r
  outline: var(--mov-focus-ring);\r
  outline-offset: var(--mov-focus-ring-offset);\r
}\r
\r
/* Disabled state */\r
.button.disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
}\r
.button.disabled * {\r
  pointer-events: none;\r
}\r
\r
/* Icon buttons */\r
.button.is-icon-button {\r
  outline-offset: 2px;\r
  width: var(--mov-form-control-height);\r
  aspect-ratio: 1;\r
}\r
\r
/* Pill modifier */\r
:host([pill]) .button {\r
  border-radius: var(--mov-border-radius-pill);\r
}\r
\r
.start,\r
.end {\r
  flex: 0 0 auto;\r
  display: flex;\r
  align-items: center;\r
  pointer-events: none;\r
}\r
\r
.label {\r
  display: inline-block;\r
}\r
.is-icon-button .label {\r
  display: flex;\r
}\r
\r
mov-icon[part~="caret"] {\r
  display: flex;\r
  align-self: center;\r
  align-items: center;\r
}\r
mov-icon[part~="caret"]::part(svg) {\r
  width: 0.875em;\r
  height: 0.875em;\r
}\r
\r
.loading {\r
  position: relative;\r
  cursor: wait;\r
}\r
.loading .start,\r
.loading .label,\r
.loading .end,\r
.loading .caret {\r
  visibility: hidden;\r
}\r
\r
.spinner {\r
  --indicator-color: currentColor;\r
  --track-color: color-mix(in oklab, currentColor, transparent 90%);\r
  position: absolute;\r
  font-size: 1em;\r
  height: 1em;\r
  width: 1em;\r
  top: calc(50% - 0.5em);\r
  left: calc(50% - 0.5em);\r
  border-radius: 50%;\r
  border: 2px solid var(--track-color);\r
  border-top-color: var(--indicator-color);\r
  animation: spin 1s linear infinite;\r
}\r
\r
@keyframes spin {\r
  to {\r
    transform: rotate(360deg);\r
  }\r
}\r
\r
slot[name="start"]::slotted(*) {\r
  margin-inline-end: 0.75em;\r
}\r
slot[name="end"]::slotted(*),\r
.button:not(.visually-hidden-label) [part~="caret"] {\r
  margin-inline-start: 0.75em;\r
}\r
`,T=class extends C{constructor(...e){super(...e),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[k(El)]}handleClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopPropagation())}click(){this.button?.click()}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}render(){const e=!!this.href,o={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},n=m`
      <slot
        name="start"
        @slotchange=${this.handleLabelSlotChange}
        part="start"
        class="start"
      ></slot>
      <slot
        @slotchange=${this.handleLabelSlotChange}
        part="label"
        class="label"
      ></slot>
      <slot
        name="end"
        @slotchange=${this.handleLabelSlotChange}
        part="end"
        class="end"
      ></slot>
      ${this.withCaret?m`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?m`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return e?m`
        <a
          part="base"
          class=${N(o)}
          href=${Q(this.href)}
          target=${Q(this.target)}
          title=${Q(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${Q(this.download)}
          @click=${this.handleClick}
        >
          ${n}
        </a>
      `:m`
        <button
          part="base"
          class=${N(o)}
          ?disabled=${this.disabled||this.loading}
          type=${Q(this.type)}
          title=${Q(this.title)}
          name=${Q(this.name)}
          value=${Q(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${n}
        </button>
      `}handleLabelSlotChange(){const e=this.labelSlot?.assignedNodes({flatten:!0})??[],o=e.filter(a=>a.nodeType===Node.ELEMENT_NODE),n=e.filter(a=>a.nodeType===Node.TEXT_NODE&&a.textContent?.trim()!==""),r=a=>["wa-icon","mov-icon","svg"].includes(a.localName),i=o.some(r);this.isIconButton=n.length===0&&i}};l([ce(".button")],T.prototype,"button",void 0),l([ce("slot:not([name])")],T.prototype,"labelSlot",void 0),l([B()],T.prototype,"isIconButton",void 0),l([B()],T.prototype,"hasLabel",void 0),l([B()],T.prototype,"hasStart",void 0),l([B()],T.prototype,"hasEnd",void 0),l([u()],T.prototype,"title",void 0),l([u({reflect:!0})],T.prototype,"appearance",void 0),l([u({reflect:!0})],T.prototype,"variant",void 0),l([u({reflect:!0})],T.prototype,"size",void 0),l([u({attribute:"with-caret",type:Boolean,reflect:!0})],T.prototype,"withCaret",void 0),l([u({type:Boolean,reflect:!0})],T.prototype,"disabled",void 0),l([u({type:Boolean,reflect:!0})],T.prototype,"loading",void 0),l([u({type:Boolean,reflect:!0})],T.prototype,"pill",void 0),l([u()],T.prototype,"type",void 0),l([u({reflect:!0})],T.prototype,"name",void 0),l([u({reflect:!0})],T.prototype,"value",void 0),l([u({reflect:!0})],T.prototype,"href",void 0),l([u()],T.prototype,"target",void 0),l([u({reflect:!0})],T.prototype,"rel",void 0),l([u()],T.prototype,"download",void 0),l([u({reflect:!0})],T.prototype,"form",void 0),T=l([O("mov-button")],T);var J=class extends C{constructor(...e){super(...e),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=D`
    :host {
      display: inline-flex;
      vertical-align: middle;
      --burger-size: 1.25rem;
      --burger-line-height: 2px;
      --burger-line-color: currentColor;
      --burger-transition-duration: 0.3s;
    }

    /* Base button styling */
    mov-button {
      position: relative;
    }

    /* Single icon modes - simple rotation in place */
    .single-icon-mode mov-icon {
      transition: transform 0.3s ease;
      display: block;
    }

    .chevron-icon {
      transform: rotate(0deg);
    }

    :host([active]) .chevron-icon {
      transform: rotate(90deg);
    }

    .expand-icon {
      transform: rotate(0deg);
    }

    :host([active]) .expand-icon {
      transform: rotate(180deg);
    }

    /* Two icon modes - positioned for smooth swap */
    .two-icon-mode {
      position: relative;
    }

    .two-icon-mode mov-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition:
        opacity 0.25s ease,
        transform 0.3s ease;
    }

    /* Default state: inactive visible, active hidden */
    .inactive-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .active-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    /* Active state: inactive hidden, active visible */
    :host([active]) .inactive-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    :host([active]) .active-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Play-pause uses single icon swap without positioning issues */
    .play-pause-icon {
      transition: opacity 0.2s ease;
      display: block;
    }

    /* Burger Mode Styling */
    .burger-mode {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: var(--burger-size);
      height: var(--burger-size);
      position: relative;
    }

    .burger-line {
      width: 100%;
      height: var(--burger-line-height);
      background-color: var(--burger-line-color);
      border-radius: var(--burger-line-height);
      transition: transform var(--burger-transition-duration) ease,
                  opacity var(--burger-transition-duration) ease;
      position: absolute;
    }

    .burger-line:nth-child(1) { transform: translateY(-6px); }
    .burger-line:nth-child(2) { transform: translateY(0); }
    .burger-line:nth-child(3) { transform: translateY(6px); }

    :host([active]) .burger-line:nth-child(1) {
      transform: translateY(0) rotate(45deg);
    }

    :host([active]) .burger-line:nth-child(2) {
      opacity: 0;
      transform: translateX(4px);
    }

    :host([active]) .burger-line:nth-child(3) {
      transform: translateY(0) rotate(-45deg);
    }

    /* Size adjustments for burger */
    :host([size="small"]) { --burger-size: 1rem; }
    :host([size="large"]) { --burger-size: 1.5rem; }

    /* Simple click feedback without disrupting layout */
    mov-button:active {
      transform: scale(0.96);
    }

    /* Loading state */
    :host([loading]) mov-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Hover effects */
    mov-button:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    /* Focus visible enhancement */
    mov-button:focus-visible {
      outline: 2px solid var(--mov-color-fill-loud, currentColor);
      outline-offset: 2px;
    }

    /* Ensure proper centering for all modes */
    mov-button.single-icon-mode {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Fix icon sizing consistency */
    mov-icon {
      flex-shrink: 0;
    }
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const e=this.active?this.activeLabel??this.label:this.label,o={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":this.mode==="burger"};return m`
      <mov-button
        @click=${this._onClick}
        .appearance=${Q(this.appearance)}
        .size=${Q(this.size)}
        ?disabled=${Q(this.disabled)}
        ?loading=${Q(this.loading)}
        .title=${Q(this.title)}
        class=${N(o)}
        title=${e}
        aria-label=${e}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"burger":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){if(this.mode==="burger")return m`
        <div class="burger-mode">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      `;const e=this._getIcons();return e.inactive?this.mode==="chevron"?m`<mov-icon
        class="chevron-icon"
        name=${e.inactive}
      ></mov-icon>`:this.mode==="expand"?m`<mov-icon
        class="expand-icon"
        name=${e.inactive}
      ></mov-icon>`:this.mode==="play-pause"?m`<mov-icon
        class="play-pause-icon"
        name=${this.active?e.active:e.inactive}
      ></mov-icon>`:m`
      <mov-icon
        class="inactive-icon"
        name=${e.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${e.active}
      ></mov-icon>
    `:x}_onClick(){if(this.disabled||this.loading)return;const e=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:e,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(e){this.active=e}};l([u({type:String})],J.prototype,"mode",void 0),l([u({type:Boolean,reflect:!0})],J.prototype,"active",void 0),l([u({type:String})],J.prototype,"label",void 0),l([u({type:String})],J.prototype,"activeLabel",void 0),l([u({type:String})],J.prototype,"icon",void 0),l([u({type:String})],J.prototype,"activeIcon",void 0),l([u({type:String,reflect:!0})],J.prototype,"appearance",void 0),l([u({type:String,reflect:!0})],J.prototype,"size",void 0),l([u({type:Boolean})],J.prototype,"disabled",void 0),l([u({type:Boolean,reflect:!0})],J.prototype,"loading",void 0),J=l([O("toggle-button")],J);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Xo="important",Il=" !"+Xo,re=We(class extends ct{constructor(t){if(super(t),t.type!==lt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]??(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const i=typeof r=="string"&&r.endsWith(Il);n.includes("-")||i?o.setProperty(n,i?r.slice(0,-11):r,i?Xo:""):o[n]=r}}return se}}),eo={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},P={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function _l(t){try{Color.get(t)}catch{return!0}return Color.contrast(t,"white","Lstar")>Color.contrast(t,"black","Lstar")}function Re(t){return _l(t)?"#FFFFFF":"#000000"}var{IconAdjustmentsHorizontal:s1,IconApiBook:l1,IconArrowsHorizontal:c1,IconArrowsLeftRight:d1,IconArrowAutofitDown:h1,IconArrowAutofitHeight:Al,IconArrowAutofitLeft:u1,IconArrowAutofitRight:p1,IconArrowAutofitWidth:Sl,IconArrowBigLeft:m1,IconArrowBigRight:g1,IconArrowsMove:v1,IconArrowsMoveVertical:f1,IconArrowsVertical:b1,IconBook:w1,IconBookOff:k1,IconBookArrowLeft:y1,IconBookArrowRight:E1,IconBooksReturn:I1,IconBookUpload:_1,IconBookmark:xl,IconBookmarkOff:Ml,IconBookmarks:A1,IconBoxAlignTop:S1,IconCategory:Cl,IconCheck:bt,IconChevronLeft:x1,IconChevronRight:M1,IconAlertCircle:C1,IconCircleCheck:O1,IconCircleX:T1,IconHelp:$1,IconInfoCircle:L1,IconComic1:D1,IconComic1Flat:N1,IconComic2:R1,IconComic2Flat:P1,IconComic3:z1,IconComic3Flat:B1,IconDeviceDesktop:H1,IconDeviceFloppy:G1,IconDeviceMobile:V1,IconDeviceTablet:F1,IconDotsVertical:W1,IconEReader1:U1,IconEReader1Flat:Z1,IconEReader2:j1,IconEReader2Flat:q1,IconExternalLink:Q1,IconEye:Ol,IconEyeOff:Tl,IconFileDownload:Y1,IconFilePercent:X1,IconFolderOpen:K1,IconHandClick:J1,IconKeyboard:eh,IconLayoutDashboard:th,IconLayoutBottombar:oh,IconLayoutBottombarInactive:nh,IconLayoutSidebar:rh,IconLayoutSidebarInactive:ih,IconLayoutSidebarRight:ah,IconLayoutSidebarRightInactive:sh,IconListNumbers:lh,IconLoader2:ch,IconLocationCog:dh,IconMenu2:hh,IconMenuDeep:uh,IconMessage:ph,IconMoon:mh,IconPage:gh,IconPageFlat:vh,IconPalette:fh,IconPencil:bh,IconPencilCog:wh,IconPhoto:kh,IconPhotoOff:yh,IconPin:Eh,IconPlayerPause:Ih,IconPlayerPlay:_h,IconRefresh:$l,IconSettings:Ah,IconSettingsOff:Sh,IconSpacingHorizontal:Ll,IconSpacingVertical:xh,IconSun:Mh,IconTrash:Ch,IconWorldCog:Oh,IconX:to,IconZoom:Th,IconZoomCancel:Dl,IconZoomIn:Nl,IconZoomInArea:$h,IconZoomOut:Rl,IconZoomOutArea:Lh,IconZoomPan:Dh}=_.fromPairs(_.entries(Qt).map(([t,e])=>[t,Uo(e)])),de=class extends C{constructor(...e){super(...e),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=D`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .swatch {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;
      box-sizing: border-box;
      border: 1px solid var(--theme-border-color, rgba(0, 0, 0, 0.1));
      color: var(--contrast-color);
    }

    :host(:hover) .swatch {
      transform: scale(1.1);
    }

    ::slotted(*) {
      width: 60%;
      height: 60%;
    }

    .check-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--contrast-color);
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([checked]) .check-icon {
      opacity: 1;
    }
  `}willUpdate(e){e.has("color")&&(this.contrastColor=Re(this.color)),e.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const e={width:`${this.size}px`,height:`${this.size}px`},o={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return m`
      <div style=${re(e)}>
        <div
          class="swatch"
          style=${re(o)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${bt} </span>
        </div>
      </div>
    `}};l([u({type:String})],de.prototype,"color",void 0),l([u({type:String})],de.prototype,"selected",void 0),l([u({type:Number})],de.prototype,"size",void 0),l([u({type:String})],de.prototype,"radius",void 0),l([u({state:!0})],de.prototype,"contrastColor",void 0),l([u({type:Boolean,reflect:!0})],de.prototype,"checked",void 0),de=l([O("color-swatch")],de);function Pl(t){const[e,o,n]=t.to("oklch").coords.map(c=>c??0),r=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=r.map(c=>new Color("oklch",[c,o,n]).toString({format:"hex"}));let a=-1,s=1/0;for(let c=0;c<r.length;c++){const v=Math.abs(r[c]-e);v<s&&(s=v,a=c)}return a!==-1&&(i[a]=t.toString({format:"hex"})),i.map(c=>c.toUpperCase())}function zl(t){const e=t.to("hsl"),o=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],n=[];for(const r of o){const i=e.clone();i.coords[2]=r*100;const a=i.coords[1]??0;r>.8?i.coords[1]=a*.4:r>.6?i.coords[1]=a*.8:r<.3&&(i.coords[1]=Math.min(100,a*1.1)),n.push(i.toString({format:"hex"}).toUpperCase())}return n}function Bl(t){const e=[],o=[95,90,80,70,60,50,40,30,20,10,5],n=t.to("hsl");for(const r of o){const i=n.clone();i.coords[2]=r,e.push(i.toString({format:"hex"}).toUpperCase())}return e}function Hl(t){const e=new Array(11).fill(""),o=t.to("hsl"),n={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},r=5,i=5,a=(n.lightest.lightness-50)/r,s=(50-n.darkest.lightness)/i,c=n.lightest.rotate/r,v=n.darkest.rotate/i,g=n.lightest.saturate/r,b=n.darkest.saturate/i;for(let y=1;y<=r;y++){const E=r-y,M=o.clone();M.coords[2]=(M.coords[2]??0)+a*(y-.5),M.coords[0]=(M.coords[0]??0)+c*y,M.coords[1]=(M.coords[1]??0)+g*y,e[E]=M.toString({format:"hex"})}e[5]=o.clone().toString({format:"hex"});for(let y=1;y<=i;y++){const E=r+y,M=o.clone();M.coords[2]=(M.coords[2]??0)-s*(y-.5),M.coords[0]=(M.coords[0]??0)+v*y,M.coords[1]=(M.coords[1]??0)+b*y,e[E]=M.toString({format:"hex"})}return e}function Gl(t){const[e,o,n]=t.to("hsl").coords.map(i=>i??0),r=new Array(11);r[5]=t.toString({format:"hex"});for(let i=0;i<5;i++){const a=(5-i)/6,s=n+(100-n)*a,c=o-o*a;r[i]=new Color("hsl",[e,c,s]).toString({format:"hex"})}for(let i=0;i<5;i++){const a=(i+1)/6,s=n-n*a,c=o+(100-o)*a;r[i+6]=new Color("hsl",[e,c,s]).toString({format:"hex"})}return r}function Ko(t,e="steps"){let o;try{o=Color.get(t)}catch{o=Color.get(eo.navy)}switch(e){case"saturation":return zl(o);case"lightness":return Bl(o);case"mantine":return Gl(o);case"chakra":return Hl(o);default:return Pl(o)}}var he=class extends C{constructor(...e){super(...e),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=D`
    :host {
      display: flex;
      gap: var(--palette-gap, 4px);
      align-items: center;
      justify-content: center;
    }

    .swatch {
      width: var(--swatch-size, 22px);
      height: var(--swatch-size, 22px);
      border-radius: var(--swatch-radius, 4px);
      border: 1px solid var(--theme-border-color, #ccc);
      transition: transform 0.15s ease;
      cursor: pointer;
      background-clip: content-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .swatch-inner {
      width: 100%;
      height: 100%;
      border-radius: var(--swatch-radius, 4px);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      color: var(--text-color);
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .checkmark svg {
      width: 60%;
      height: 60%;
    }
    .swatch[checked] .checkmark {
      opacity: 1;
    }
    .swatch:hover {
      transform: scale(1.1);
    }
  `}willUpdate(e){(e.has("baseColor")||e.has("mode"))&&(this.gradient=Ko(this.baseColor,this.mode)??[])}handleSwatchClick(e){this.value=e,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return m`
      ${this.gradient.map(e=>m`
          <div
            class="swatch"
            ?checked=${this.selected&&e.toLowerCase()===this.selected.toLowerCase()}
            title=${e}
            @click=${()=>this.handleSwatchClick(e)}
          >
            <div
              class="swatch-inner"
              style="--color: ${e}; --text-color: ${Re(e)}"
            >
              <span class="checkmark">${bt}</span>
            </div>
          </div>
        `)}
    `}};l([u({type:String})],he.prototype,"baseColor",void 0),l([u({type:String})],he.prototype,"mode",void 0),l([u({type:String,reflect:!0})],he.prototype,"orientation",void 0),l([u({type:String})],he.prototype,"selected",void 0),l([u({type:String,reflect:!0})],he.prototype,"value",void 0),l([B()],he.prototype,"gradient",void 0),he=l([O("color-palette")],he);var wt=class extends C{constructor(...e){super(...e),this.value=""}static{this.styles=D`
    :host {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }
    .SwatchGroup {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      column-gap: 8px;
    }
    .ColorName {
      font-size: 12px;
      color: var(--theme-text-color);
      text-transform: capitalize;
      min-width: 64px;
    }
    .Swatches {
      display: grid;
      grid-template-columns: repeat(9, 16px);
      gap: 8px;
      align-items: center;
    }
    .ThemeRadio {
      color: var(--mov-color-on-loud);
      height: 20px;
      width: 20px;
      border-radius: 3px;
      margin: 0;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
    .ThemeRadio:hover,
    .ThemeRadio:focus-visible {
      outline: 2px solid var(--theme-border-color);
      outline-offset: 1px;
    }
    .ThemeRadio.selected {
      box-shadow:
        0 0 0 2px var(--theme-body-background),
        0 0 0 3px var(--theme-text-color);
    }
    .ThemeRadio svg {
      width: 10px;
      height: 10px;
    }
    .ThemeRadio.selected .icon-tabler-check {
      display: inline;
    }
    .ThemeRadio:not(.selected) .icon-tabler-check {
      display: none;
    }
  `}handleColorClick(e){this.value=e.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const e=_.keys(P).filter(n=>!["dark","gray","zinc","neutral","stone"].includes(n)),o=[200,300,400,500,600,700,800,900,950];return e.map(n=>m` <div class="SwatchGroup">
        <span class="ColorName">${n}</span>
        <div class="Swatches">${o.map(r=>{const i=P[n][r],a=Re(i);return m`
          <span
            title="${i}"
            class="${N({ThemeRadio:!0,selected:this.selected?.toLowerCase()===i.toLowerCase()})}"
            style="background-color: ${i}; color: ${a}"
            @click=${this.handleColorClick}
          >
            ${bt}
          </span>
        `})}</div>
      </div>`)}};l([u({type:String,reflect:!0})],wt.prototype,"value",void 0),l([u({type:String})],wt.prototype,"selected",void 0),wt=l([O("color-panel")],wt);var H=class extends C{constructor(...e){super(...e),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=D`
    :host {
      display: inline-block;
      position: relative;
    }

    .picker-container {
      width: 250px;
      box-sizing: border-box;
    }

    .picker-container.popup {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      border: 1px solid var(--theme-border-color);
      border-radius: 8px;
      background: var(--theme-background-color);
      padding: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .picker-container.popup.right {
      left: auto;
      right: 0;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: 8px;
      cursor: crosshair;
      -webkit-tap-highlight-color: transparent;
    }

    .saturation-overlay-1,
    .saturation-overlay-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
    }

    .saturation-overlay-1 {
      background: linear-gradient(to right, #fff, transparent);
    }

    .saturation-overlay-2 {
      background: linear-gradient(to top, #000, transparent);
    }

    .saturation-thumb {
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -8px);
      pointer-events: none;
    }

    .sliders {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
    }

    .hue-slider {
      position: relative;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
      cursor: pointer;
    }

    .hue-thumb {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -50%);
      pointer-events: none;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 8px;
      margin-top: 12px;
    }

    .swatch {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform 0.1s;
    }

    .swatch:hover {
      transform: scale(1.1);
    }

    .popup-trigger {
      width: 96px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid var(--theme-background-color);
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      background-color: var(--theme-hightlight-color);
    }

    .preview {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(e){e.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(e){e.has("value")&&this.updateStateFromValue(this.value),e.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(e){this.opened&&!e.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const e=this.getBoundingClientRect(),o=250;let n;const r=this.closest("mov-drawer");if(r?.shadowRoot){const i=r.shadowRoot.querySelector("dialog");i?n=i.getBoundingClientRect():n={left:0,right:window.innerWidth}}else n={left:0,right:window.innerWidth};e.left+o>n.right?e.right-o>n.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(e,o){return!e||!o?!1:Color.deltaE(e,o,{method:"2000"})<1}renderCheckIcon(e){return m`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${re({stroke:Re(e)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const e={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},o={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},n={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Color("hsv",[o.h,o.s,o.v]).toString({format:"hex"})},r={left:`${this.hueThumbPosition}%`};return m`
      <div
        class="saturation-panel"
        style=${re(e)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${re(n)}
        ></div>
      </div>

      <div class="sliders">
        <div
          class="hue-slider"
          @mousedown=${this.handleHueDragStart.bind(this)}
          @touchstart=${this.handleHueDragStart.bind(this)}
        >
          <div
            class="hue-thumb"
            style=${re(r)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||_.entries(P).filter(([i])=>!["dark","gray","zinc","neutral","stone"].includes(i)).map(([,i])=>i[600])).map(i=>m`
            <button
              class="swatch"
              title=${i}
              style=${re({backgroundColor:i})}
              @click=${()=>this.selectSwatch(i)}
            >
              ${this.isSameColor(this.value,i)?this.renderCheckIcon(i):""}
            </button>
          `)}
      </div>
    `}render(){const e={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},o=this.renderPickerBody();return this.mode==="popup"?m`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${re({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?m`<div class=${N(e)}>${o}</div>`:""}
      `:m`<div class=${N(e)}>${o}</div>`}parseColor(e){try{return Color.get(e)}catch(o){return console.error(`[mov-color-picker] Invalid color value: "${e}"`,o),null}}colorToHsv(e){let[o,n,r]=e.to("srgb").to("hsv").coords.map(i=>i??0);return Number.isNaN(o)&&(o=this.hsv.h||0,n=0),n=Math.max(0,Math.min(100,n))/100,r=Math.max(0,Math.min(100,r))/100,{h:o,s:n,v:r}}updateStateFromValue(e){const o=this.parseColor(e);if(!o)return;this.sourceSpace=o.space.id;const n=this.colorToHsv(o);(n.h!==this.hsv.h||n.s!==this.hsv.s||n.v!==this.hsv.v)&&(this.hsv=n,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const e={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},o=new Color("hsv",[e.h,e.s,e.v]);let n;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?n=o.to("srgb").toString({format:"hex"}):n=o.to(this.sourceSpace).toString({precision:5})}catch(r){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,r),n=o.to("srgb").toString({format:"hex"})}this.value!==n&&(this.value=n,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(e){e.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(e)}handleHueDragStart(e){e.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(e)}handleDrag(e){this.isDraggingSaturation&&this.updateSaturation(e),this.isDraggingHue&&this.updateHue(e)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}updateSaturation(e){if(!this.saturationPanel)return;const{clientX:o,clientY:n}=this.getEventPosition(e),r=this.saturationPanel.getBoundingClientRect(),i=Math.max(0,Math.min(o-r.left,r.width)),a=Math.max(0,Math.min(n-r.top,r.height));this.hsv.s=i/r.width,this.hsv.v=1-a/r.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(e){if(!this.hueSlider)return;const{clientX:o}=this.getEventPosition(e),n=this.hueSlider.getBoundingClientRect(),r=Math.max(0,Math.min(o-n.left,n.width));this.hsv.h=r/n.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(e){this.value=e,this.dispatchInput(),this.dispatchChange()}};l([u({type:String})],H.prototype,"value",void 0),l([u({type:String,attribute:"default-value"})],H.prototype,"defaultValue",void 0),l([u({type:String})],H.prototype,"label",void 0),l([u({type:String})],H.prototype,"hint",void 0),l([u({type:String})],H.prototype,"name",void 0),l([u({type:Boolean,reflect:!0})],H.prototype,"disabled",void 0),l([u({type:String,reflect:!0})],H.prototype,"size",void 0),l([u({type:Array})],H.prototype,"swatches",void 0),l([u({type:String})],H.prototype,"mode",void 0),l([B()],H.prototype,"opened",void 0),l([B()],H.prototype,"popupDirection",void 0),l([B()],H.prototype,"sourceSpace",void 0),l([B()],H.prototype,"hsv",void 0),l([B()],H.prototype,"saturationThumbPosition",void 0),l([B()],H.prototype,"hueThumbPosition",void 0),H=l([O("mov-color-picker")],H);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Vl=(t,e,o)=>{for(const n of e)if(n[0]===t)return(0,n[1])();return o?.()},ue=class extends C{constructor(...e){super(...e),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=D`
    :host {
      width: 100%;
      display: block;
    }
    .segmented-control {
      position: relative;
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
      flex-wrap: wrap;
    }
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      background-color: var(--mov-color-fill-loud);
      transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }
    .option {
      flex: 1;
      text-align: center;
      z-index: 2; /* Ensure button is above thumb */
      position: relative; /* Needed to correctly position the button */
    }

    .button {
      /* The button now acts as the interactive label */
      width: 100%;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      /* Default colors when not selected */
      color: var(--theme-text-color);
      background-color: transparent;
      transition: color 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem; /* Default padding (medium) */
      font-size: 16px; /* Default font-size (medium) */
      box-sizing: border-box; /* Include padding/border in element's total width/height */
    }

    /* Selected State Styles - Driven by the 'selected' class */
    .button.selected {
      color: var(--mov-color-on-loud);
      font-weight: 600;
    }

    /* Size Variations */
    .button.small {
      padding: 0.25rem 0.5rem;
      font-size: 14px;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 18px;
    }

    /* Label Position Variations */
    .button.bottom {
      flex-direction: column;
    }
    .button.bottom.small {
      padding: 0.25rem;
    }
    .button.bottom.medium {
      padding: 0.5rem;
    }
    .button.bottom.large {
      padding: 0.75rem;
    }
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(e,o){this.value=o,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(e=>e.nodeName==="SEGMENTED-CONTROL-OPTION").map(e=>({value:e.getAttribute("value")??"",label:e.getAttribute("label")??"",icon:e.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(e){super.updated(e),(e.has("value")||e.has("_options")||e.has("labelPosition")||e.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const e=this.shadowRoot?.querySelector(".button.selected");if(e){const{offsetWidth:o,offsetHeight:n}=e,r=e.getBoundingClientRect(),i=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),a=r.left-(i?.left??0),s=r.top-(i?.top??0);this.thumb.style.transform=`translate(${a}px, ${s}px)`,this.thumb.style.width=`${o}px`,this.thumb.style.height=`${n}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return m`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(e=>m`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?e.label:x}"
            >
              <button
                class="${N({button:!0,selected:this.value===e.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${o=>this.handleClick(o,e.value)}
                role="radio"
                aria-checked="${this.value===e.value}"
              >
                ${e.icon?m`<mov-icon
                      name="${e.icon}"
                      .size=${Vl(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:x}
                ${this.labelPosition!=="tooltip"?m`<span>${e.label}</span>`:x}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};l([u({type:String,reflect:!0})],ue.prototype,"value",void 0),l([u({type:String})],ue.prototype,"labelPosition",void 0),l([u({type:String})],ue.prototype,"size",void 0),l([B()],ue.prototype,"_options",void 0),l([ce(".thumb")],ue.prototype,"thumb",void 0),l([ce("slot")],ue.prototype,"_slotEl",void 0),ue=l([O("segmented-control")],ue);var qe=class extends C{constructor(...e){super(...e),this.value="",this.label=""}createRenderRoot(){return this}};l([u({type:String,reflect:!0})],qe.prototype,"value",void 0),l([u({type:String,reflect:!0})],qe.prototype,"label",void 0),l([u({type:String,reflect:!0})],qe.prototype,"icon",void 0),qe=l([O("segmented-control-option")],qe);var Y=class extends C{constructor(...e){super(...e),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=D`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    :host([size='small']) {
      --switch-width: 2.5rem;
      --switch-height: 1.25rem;
      --knob-size: 16px;
    }

    :host([size='large']) {
      --switch-width: 4rem;
      --switch-height: 2rem;
      --knob-size: 1.75rem;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    input {
      display: none;
    }

    .switch {
      display: inline-block;
      position: relative;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-height);
      background-color: #d7062a;
      border: 1px solid #d7062a;
      transition:
        background-color 0.3s,
        border-color 0.3s;
      cursor: pointer;
    }

    input:checked + .switch {
      background-color: #50ac5d;
      border-color: #50ac5d;
    }

    .switch.textual {
      background-color: var(--mov-color-on-loud);
      border-color: var(--mov-color-on-loud);
    }

    input:checked + .switch.textual {
      background-color: var(--mov-color-fill-loud);
      border-color: var(--mov-color-fill-loud);
    }

    input:disabled + .switch {
      background-color: #eee;
      border-color: #ccc;
      cursor: not-allowed;
    }

    .knob {
      position: absolute;
      top: 1px;
      left: 1px;
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 1px);
    }

    .switch:focus {
      outline: 2px solid #0a6ed1;
      outline-offset: 2px;
    }

    .icon {
      width: 16px;
      height: 16px;
      fill: none;
    }

    .text {
      font-size: 12px;
      font-weight: bold;
      color: #333;
    }

    .hint {
      font-size: 13px;
      opacity: 0.7;
      margin-top: 0.25rem;
    }
  `}handleChange(e){this.disabled||(this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const e=this.design.toLowerCase();let o;return e==="graphical"?o=m`${this.checked?bt:to}`:o=m`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,m`
      <div class="base">
        <label class="label">
          <slot></slot>
          <input
            type="checkbox"
            .name="${this.name}"
            .value="${this.value}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
          />
          <div
            class="${N({switch:!0,[e]:!0})}"
          >
            <div class="knob">${o}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};l([u({type:String})],Y.prototype,"name",void 0),l([u({type:String})],Y.prototype,"value",void 0),l([u({type:Boolean,reflect:!0})],Y.prototype,"checked",void 0),l([u({type:Boolean,reflect:!0,attribute:"default-checked"})],Y.prototype,"defaultChecked",void 0),l([u({type:Boolean,reflect:!0})],Y.prototype,"disabled",void 0),l([u({type:Boolean,reflect:!0})],Y.prototype,"required",void 0),l([u({type:String,reflect:!0})],Y.prototype,"size",void 0),l([u({type:String})],Y.prototype,"hint",void 0),l([u({type:String,reflect:!0})],Y.prototype,"design",void 0),l([u({type:String})],Y.prototype,"textOn",void 0),l([u({type:String})],Y.prototype,"textOff",void 0),Y=l([O("mov-switch")],Y);var Fl=`:host {\r
  display: block;\r
  --mov-slider-track-height: 6px;\r
  --mov-slider-thumb-size: 18px;\r
  --mov-slider-tooltip-offset: 24px;\r
  -webkit-user-select: none;\r
  user-select: none;\r
  touch-action: none;\r
  width: 100%;\r
}\r
\r
:host([vertical]) {\r
  display: inline-block;\r
}\r
\r
/* Container */\r
.mov-slider__container {\r
  position: relative;\r
  display: flex;\r
  align-items: center;\r
  min-height: 24px;\r
}\r
\r
:host([vertical]) .mov-slider__container {\r
  flex-direction: column;\r
  min-height: auto;\r
  min-width: 24px;\r
}\r
\r
/* Track */\r
.mov-slider__track {\r
  position: relative;\r
  flex: 1;\r
  height: var(--mov-slider-track-height);\r
  background: var(--theme-border-color, #ccc);\r
  border-radius: 9999px;\r
  cursor: pointer;\r
}\r
\r
:host([vertical]) .mov-slider__track {\r
  width: var(--mov-slider-track-height);\r
  height: 100%;\r
  min-height: 8rem;\r
}\r
\r
/* Progress */\r
.mov-slider__progress {\r
  position: absolute;\r
  height: 100%;\r
  background: var(--mov-color-fill-loud);\r
  border-radius: 9999px;\r
  pointer-events: none;\r
  transition: background-color 150ms;\r
}\r
\r
.mov-slider__progress--min-gap {\r
  background: #f59e0b; /* warning color */\r
  animation: pulse-gap 2s ease-in-out infinite;\r
}\r
\r
@keyframes pulse-gap {\r
  0%,\r
  100% {\r
    opacity: 1;\r
  }\r
  50% {\r
    opacity: 0.7;\r
  }\r
}\r
\r
:host([vertical]) .mov-slider__progress {\r
  width: 100%;\r
  height: auto;\r
}\r
\r
/* Thumb */\r
.mov-slider__thumb {\r
  position: absolute;\r
  width: var(--mov-slider-thumb-size);\r
  height: var(--mov-slider-thumb-size);\r
  background: white;\r
  border: 3px solid var(--mov-color-fill-loud);\r
  border-radius: 9999px;\r
  cursor: grab;\r
  transform: translate(-50%, -50%);\r
  top: 50%;\r
  transition:\r
    transform 150ms,\r
    border-color 150ms,\r
    box-shadow 150ms;\r
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r
  touch-action: none;\r
  box-sizing: border-box;\r
}\r
\r
.mov-slider__thumb:active {\r
  cursor: grabbing;\r
  transform: translate(-50%, -50%) scale(1.1);\r
}\r
\r
:host([vertical]) .mov-slider__thumb {\r
  transform: translate(-50%, 50%);\r
  inset-inline-start: 50%;\r
  top: auto;\r
}\r
\r
:host([vertical]) .mov-slider__thumb:active {\r
  transform: translate(-50%, 50%) scale(1.1);\r
}\r
\r
.mov-slider__thumb:hover {\r
  border-color: var(--mov-color-fill-loud);\r
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Visual focus state */\r
.mov-slider__thumb--focused {\r
  outline: 3px solid var(--mov-color-fill-loud);\r
  outline-offset: 2px;\r
}\r
\r
/* Active drag state */\r
.mov-slider__thumb--active {\r
  transform: translate(-50%, -50%) scale(1.1);\r
  z-index: 1;\r
}\r
\r
:host([vertical]) .mov-slider__thumb--active {\r
  transform: translate(-50%, 50%) scale(1.1);\r
}\r
\r
/* Readonly state */\r
:host([readonly]) .mov-slider__thumb {\r
  cursor: default;\r
  border-color: var(--theme-border-color);\r
}\r
\r
:host([readonly]) .mov-slider__thumb:active {\r
  transform: translate(-50%, -50%);\r
}\r
\r
/* Input (hidden but accessible) */\r
.mov-slider__input {\r
  position: absolute;\r
  opacity: 0;\r
  pointer-events: none;\r
}\r
\r
/* Tooltip */\r
.mov-slider__tooltip {\r
  position: absolute;\r
  bottom: var(--mov-slider-tooltip-offset);\r
  inset-inline-start: 50%;\r
  transform: translateX(-50%);\r
  background: var(--theme-hightlight-color, #333);\r
  color: white;\r
  padding: 2px 8px;\r
  border-radius: 4px;\r
  font-size: 14px;\r
  white-space: nowrap;\r
  pointer-events: none;\r
  opacity: 0;\r
  transition: opacity 150ms;\r
  z-index: 2;\r
}\r
\r
.mov-slider__thumb:hover .mov-slider__tooltip,\r
.mov-slider__thumb--focused .mov-slider__tooltip,\r
.mov-slider__thumb--active .mov-slider__tooltip {\r
  opacity: 1;\r
}\r
\r
:host([vertical]) .mov-slider__tooltip {\r
  bottom: auto;\r
  inset-inline-start: var(--mov-slider-tooltip-offset);\r
  top: 50%;\r
  transform: translateY(-50%);\r
}\r
\r
/* Ticks */\r
.mov-slider__ticks {\r
  position: absolute;\r
  top: 50%;\r
  inset-inline: 0;\r
  height: 8px;\r
  pointer-events: none;\r
}\r
\r
:host([vertical]) .mov-slider__ticks {\r
  top: 0;\r
  bottom: 0;\r
  inset-inline-start: 50%;\r
  width: 8px;\r
  height: auto;\r
}\r
\r
.mov-slider__tick {\r
  position: absolute;\r
  width: 1px;\r
  height: 8px;\r
  background: var(--theme-border-color);\r
  transform: translateX(-50%);\r
}\r
\r
:host([vertical]) .mov-slider__tick {\r
  width: 8px;\r
  height: 1px;\r
  transform: translateY(-50%);\r
}\r
\r
.mov-slider__tick-label {\r
  position: absolute;\r
  top: 12px;\r
  font-size: 12px;\r
  color: var(--theme-text-color);\r
  opacity: 0.7;\r
  transform: translateX(-50%);\r
  white-space: nowrap;\r
}\r
\r
:host([vertical]) .mov-slider__tick-label {\r
  top: auto;\r
  inset-inline-start: 12px;\r
  transform: translateY(-50%);\r
}\r
\r
/* Sizes */\r
:host([size="small"]) {\r
  --mov-slider-track-height: 4px;\r
  --mov-slider-thumb-size: 14px;\r
}\r
\r
:host([size="large"]) {\r
  --mov-slider-track-height: 10px;\r
  --mov-slider-thumb-size: 22px;\r
}\r
\r
/* States */\r
:host([disabled]) {\r
  opacity: 0.6;\r
  pointer-events: none;\r
}\r
\r
:host([disabled]) .mov-slider__thumb {\r
  cursor: not-allowed;\r
  border-color: var(--theme-border-color);\r
  background: #f3f4f6;\r
}\r
\r
:host([invalid]) .mov-slider__progress {\r
  background: #ef4444; /* danger color */\r
}\r
\r
/* Help & Error Text */\r
.mov-form-control__label {\r
  display: block;\r
  margin-bottom: 0.5rem;\r
  color: var(--theme-text-color);\r
}\r
\r
.mov-form-control__helper,\r
.mov-form-control__error {\r
  margin-top: 0.5rem;\r
  font-size: 14px;\r
}\r
\r
.mov-form-control__helper {\r
  color: var(--theme-text-color);\r
  opacity: 0.8;\r
}\r
\r
.mov-form-control__error {\r
  color: #ef4444;\r
}\r
\r
.mov-slider__live-region {\r
  position: absolute;\r
  overflow: hidden;\r
  clip: rect(0 0 0 0);\r
  height: 1px;\r
  width: 1px;\r
  margin: -1px;\r
  padding: 0;\r
  border: 0;\r
}\r
:host([show-ticks]) {\r
  padding-bottom: 15px;\r
  margin-left: 5px;\r
  margin-right: 5px;\r
}\r
\r
/* Filled variant */\r
:host([filled]) .mov-slider__thumb {\r
  background: var(--mov-color-fill-loud);\r
  border-color: var(--mov-color-fill-loud);\r
}\r
`,$=class extends C{static{this.styles=[k(Fl)]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(e){return(e-this.min)/(this.max-this.min)*100}getValueFromPercentage(e){const o=this.min+e/100*(this.max-this.min);return this.step?Math.round(o/this.step)*this.step:o}getValueFromPointer(e,o,n){let r;return this.vertical?r=(n.bottom-o)/n.height*100:r=(e-n.left)/n.width*100,r=Math.max(0,Math.min(100,r)),this.getValueFromPercentage(r)}clampValue(e){let o=Math.max(this.min,Math.min(this.max,e));return this.step&&(o=Math.round(o/this.step)*this.step),Number(o.toFixed(10))}handleThumbPointerDown(e,o){this.disabled||this.readonly||!this.track||(e.preventDefault(),e.stopPropagation(),e.currentTarget.setPointerCapture(e.pointerId),this.activeDrag={thumb:o,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=o,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(e){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:o,trackRect:n}=this.activeDrag,r=this.getValueFromPointer(e.clientX,e.clientY,n);if(this.dual){const i=this.values;if(o==="min"){const a=Math.min(r,i[1]-(this.step||1));this.updateValue([a,i[1]],"input")}else{const a=Math.max(r,i[0]+(this.step||1));this.updateValue([i[0],a],"input")}}else this.updateValue(r,"input")}_handlePointerUp(e){this.activeDrag&&(this.shadowRoot?.querySelector(".mov-slider__thumb--active")?.releasePointerCapture(e.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(e,o="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(e)?(e=[this.clampValue(e[0]),this.clampValue(e[1])],e[0]>e[1]&&(e=[e[1],e[0]])):!this.dual&&typeof e=="number"&&(e=this.clampValue(e)),this.value=e,this.dispatchEvent(new CustomEvent(o,{bubbles:!0,composed:!0,detail:{value:e}})))}handleTrackClick(e){if(this.disabled||this.readonly||!this.track)return;const o=this.track.getBoundingClientRect(),n=this.getValueFromPointer(e.clientX,e.clientY,o);if(this.dual){const r=this.values;Math.abs(n-r[0])<Math.abs(n-r[1])?this.updateValue([n,r[1]]):this.updateValue([r[0],n])}else this.updateValue(n)}renderTicks(){if(!this.showTicks)return null;const e=new Set;e.add(this.min),e.add(this.max);let o=this.tickStep;if(this.tickCount>1&&(o=Math.round((this.max-this.min)/(this.tickCount-1))),o>0){const n=Math.floor((this.max-this.min)/o);if(n<=100)for(let r=1;r<=n;r++){const i=this.min+r*o;i<this.max&&e.add(Number(i.toFixed(10)))}}return m`<div class="mov-slider__ticks">${Array.from(e).sort((n,r)=>n-r).map(n=>{const r=this.getPercentage(n);return m`
        <div class="mov-slider__tick" style="${this.vertical?`bottom: ${r}%`:`inset-inline-start: ${r}%`}">
          <div class="mov-slider__tick-label">${n}</div>
        </div>
      `})}</div>`}renderThumb(e,o){const n=this.getPercentage(e),r=this.focusedThumb===o,i=this.draggingThumb===o,a=this.vertical?`bottom: ${n}%`:`inset-inline-start: ${n}%`;return m`
      <div
        class="mov-slider__thumb ${r?"mov-slider__thumb--focused":""} ${i?"mov-slider__thumb--active":""}"
        style="${a}"
        @pointerdown=${s=>this.handleThumbPointerDown(s,o)}
      >
        ${this.showTooltip?m`<div class="mov-slider__tooltip">${e}</div>`:""}
      </div>
    `}renderProgress(){const e=this.values;if(this.dual){const n=this.getPercentage(e[0]),r=this.getPercentage(e[1]);return m`<div
        class="mov-slider__progress"
        style="${this.vertical?`bottom: ${n}%; height: ${r-n}%`:`left: ${n}%; width: ${r-n}%`}"
      ></div>`}const o=this.getPercentage(e[1]);return m`<div
      class="mov-slider__progress"
      style="${this.vertical?`bottom: 0; height: ${o}%`:`left: 0; width: ${o}%`}"
    ></div>`}render(){const e=this.values;return m`
      <div
        class="mov-slider"
        part="base"
      >
        ${this.label?m`<label class="mov-form-control__label">${this.label}</label>`:""}
        <div
          class="mov-slider__container"
          @click=${this.handleTrackClick}
        >
          <div class="mov-slider__track">
            ${this.renderProgress()} ${this.renderTicks()}
            ${this.dual?m`${this.renderThumb(e[0],"min")}${this.renderThumb(e[1],"max")}`:this.renderThumb(e[1],"single")}
          </div>
        </div>
        ${this.helpText&&!this.invalid?m`<div class="mov-form-control__helper">${this.helpText}</div>`:""}
        ${this.invalid&&this.errorMessage?m`<div class="mov-form-control__error">${this.errorMessage}</div>`:""}
      </div>
    `}};l([u({type:String})],$.prototype,"label",void 0),l([u({attribute:"help-text"})],$.prototype,"helpText",void 0),l([u({attribute:"error-message"})],$.prototype,"errorMessage",void 0),l([u({type:Number})],$.prototype,"min",void 0),l([u({type:Number})],$.prototype,"max",void 0),l([u({type:Number})],$.prototype,"step",void 0),l([u({type:Object})],$.prototype,"value",void 0),l([u({type:Boolean,reflect:!0})],$.prototype,"dual",void 0),l([u({type:Boolean,reflect:!0})],$.prototype,"vertical",void 0),l([u({type:Boolean,reflect:!0})],$.prototype,"filled",void 0),l([u({reflect:!0})],$.prototype,"size",void 0),l([u({type:Boolean,reflect:!0})],$.prototype,"disabled",void 0),l([u({type:Boolean,reflect:!0})],$.prototype,"readonly",void 0),l([u({type:Boolean,reflect:!0})],$.prototype,"invalid",void 0),l([u({type:Boolean,attribute:"show-tooltip"})],$.prototype,"showTooltip",void 0),l([u({type:Boolean,attribute:"show-ticks"})],$.prototype,"showTicks",void 0),l([u({type:Number,attribute:"tick-step"})],$.prototype,"tickStep",void 0),l([u({type:Number,attribute:"tick-count"})],$.prototype,"tickCount",void 0),l([B()],$.prototype,"focusedThumb",void 0),l([B()],$.prototype,"draggingThumb",void 0),l([ce(".mov-slider__track")],$.prototype,"track",void 0),$=l([O("mov-slider")],$);var Wl=we((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BLANK_URL=t.relativeFirstCharacters=t.whitespaceEscapeCharsRegex=t.urlSchemeRegex=t.ctrlCharactersRegex=t.htmlCtrlEntityRegex=t.htmlEntitiesRegex=t.invalidProtocolRegex=void 0,t.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,t.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,t.htmlCtrlEntityRegex=/&(newline|tab);/gi,t.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,t.urlSchemeRegex=/^.+(:|&colon;)/gim,t.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,t.relativeFirstCharacters=[".","/"],t.BLANK_URL="about:blank"})),Jo=we((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sanitizeUrl=a;var e=Wl();function o(s){return e.relativeFirstCharacters.indexOf(s[0])>-1}function n(s){return s.replace(e.ctrlCharactersRegex,"").replace(e.htmlEntitiesRegex,function(c,v){return String.fromCharCode(v)})}function r(s){return URL.canParse(s)}function i(s){try{return decodeURIComponent(s)}catch{return s}}function a(s){if(!s)return e.BLANK_URL;var c,v=i(s.trim());do v=n(v).replace(e.htmlCtrlEntityRegex,"").replace(e.ctrlCharactersRegex,"").replace(e.whitespaceEscapeCharsRegex,"").trim(),v=i(v),c=v.match(e.ctrlCharactersRegex)||v.match(e.htmlEntitiesRegex)||v.match(e.htmlCtrlEntityRegex)||v.match(e.whitespaceEscapeCharsRegex);while(c&&c.length>0);var g=v;if(!g)return e.BLANK_URL;if(o(g))return g;var b=g.trimStart(),y=b.match(e.urlSchemeRegex);if(!y)return g;var E=y[0].toLowerCase().trim();if(e.invalidProtocolRegex.test(E))return e.BLANK_URL;var M=b.replace(/\\/g,"/");if(E==="mailto:"||E.includes("://"))return M;if(E==="http:"||E==="https:"){if(!r(M))return e.BLANK_URL;var L=new URL(M);return L.protocol=L.protocol.toLowerCase(),L.hostname=L.hostname.toLowerCase(),L.toString()}return M}}))();function Ul(t){switch(t){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function Zl(t){if(!t.src)return null;try{const e=await fetch(t.src);if(e.ok)return w(`Got blob for page ${t.src} from fetch`),await e.blob()}catch(e){w(`Failed to get blob for page ${t.src} from fetch`,e)}return typeof GM_xmlhttpRequest<"u"?new Promise(e=>{GM_xmlhttpRequest({method:"GET",url:t.src,responseType:"blob",onload:o=>{o.status===200?(w(`Got blob for page ${t.src} from GM_xmlhttpRequest`),e(o.response)):(w(`Failed to get blob for page ${t.src} from GM_xmlhttpRequest`,o.statusText),e(null))},onerror:o=>{w(`Failed to get blob for page ${t.src} from GM_xmlhttpRequest`,o),e(null)}})}):null}async function jl(t){const e=t.ref?.value;if(!e)return null;try{const o=document.createElement("canvas"),n=o.getContext("2d");if(n)return o.width=e.naturalWidth,o.height=e.naturalHeight,n.drawImage(e,0,0),await new Promise(r=>{o.toBlob(i=>{i&&w(`Got blob for page ${t.src} from canvas`),r(i)},"image/png",1)})}catch(o){w(`Failed to get blob for page ${t.src} from canvas`,o)}return null}async function ql(t){if(t.blob)return w(`Got blob for page ${t.src} from cache`),t.blob;const e=await Zl(t)||await jl(t);return e||w(`Failed to get blob for page ${t.src}`),e}async function Ql(){S("download","working");const t=new JSZip,e=f("images")??{},o=f("manga"),n=o?.pages??0,r=Math.floor(Math.log10(n||1))+1,i=_.sortBy(_.entries(e),([v])=>Number(v)),a=[],s=v=>{S("dialog",{open:!0,title:h("BUTTON_DOWNLOAD"),content:m`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${h("DOWNLOAD_PROGRESS").replace("##num##",v.toString()).replace("##total##",n.toString())}</p>
          <progress value='${v}' max='${n}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:m`
        <mov-button @click=${()=>S("download","cancelled")}>
          ${h("CANCEL")}
        </mov-button>
      `})};s(0);let c=0;for(const[v,g]of i){if(f("download")==="cancelled"){w("Download cancelled"),S("dialog",null),S("download",void 0);return}try{const b=await ql(g);if(b){const y=Ul(b.type),E=`Page-${Number(v).toString().padStart(r,"0")}.${y}`;w(`${E} Added to Zip from Blob`),t.file(E,b,{createFolders:!0,compression:"DEFLATE"})}else a.push(g.src??v)}catch(b){w(`Error processing page ${v}`,b),a.push(g.src??v)}finally{c+=1,s(c)}}S("dialog",{open:!0,title:h("BUTTON_DOWNLOAD"),content:m`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${h("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:m``}),a.length>0&&(w("Some images failed to download:",a),t.file("failed_pages.txt",a.join(`
`))),w("Generating Zip"),t.generateAsync({type:"blob"}).then(v=>{w("Download Ready");const g=`${o?.title??document.title}.zip`;window.saveAs(v,g,{autoBom:!1}),a.length>0?S("dialog",{open:!0,title:h("DOWNLOAD_INCOMPLETE"),icon:"warning",content:m`<p>${h("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:m`<mov-button @click=${()=>S("dialog",null)}>
            ${h("CLOSE")}
          </mov-button>`}):S("dialog",null)}).catch(v=>{w("Error generating zip",v),S("dialog",{open:!0,title:h("WARNING"),icon:"error",content:m`<p>Error generating zip: ${v.message}</p>`,footer:m`<mov-button @click=${()=>S("dialog",null)}>
          ${h("CLOSE")}
        </mov-button>`})}).finally(()=>{S("download",void 0)})}function en(){f("download")!=="working"&&(w("Downloading Chapter"),Ql().catch(t=>w("Error downloading chapter",t)))}function Yl(){De("hidePageControls",t=>!t)}function Qe(t){const e=t.currentTarget||t.target,o=e.getAttribute("value")??e.getAttribute("href");t.button!==1&&!t.ctrlKey&&(o&&o!=="#"?window.location.href=(0,Jo.sanitizeUrl)(o):e.id==="series"&&($t()?window.location.href=window.location.pathname:window.history.back()))}function Xl(t){if(t)if(p("viewMode").startsWith("Fluid")){const e=f("chapter").value;if(e){const o=t.getBoundingClientRect(),n=e.getBoundingClientRect();e.scrollBy({left:o.left-n.left,top:o.top-n.top,behavior:"instant"})}}else{const e=t.getBoundingClientRect();window.scrollTo({top:e.top+window.scrollY,left:e.left+window.scrollX,behavior:"instant"})}}U.listen((t,e,o)=>{o==="scrollToPage"&&t.scrollToPage!==void 0&&(t.scrollToPage<=0?window.scrollTo(0,0):Xl(f("images")?.[t.scrollToPage]?.ref?.value),setTimeout(()=>S("scrollToPage",void 0),10))});function Kl(t){const e=t.detail.value;S("scrollToPage",typeof e=="string"?parseInt(e,10):e)}function Jl(t){S("scrollToPage",t)}function tn(){const t=f("chapter").value;if(p("viewMode").startsWith("Fluid")){const e=p("viewMode")==="FluidRTL"?-1:1;t?.scrollBy({top:0,left:p("scrollHeight")*e,behavior:"smooth"}),t&&t.scrollLeft+t.clientWidth>=t.scrollWidth-2&&(S("autoScroll",!1),w("Finished auto scroll"))}else window.scrollBy({top:p("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(S("autoScroll",!1),w("Finished auto scroll"));f("autoScroll")&&requestAnimationFrame(tn)}function kt(){f("autoScroll")?(S("autoScroll",!1),w("Stopped auto scroll")):(S("autoScroll",!0),requestAnimationFrame(tn),w("Start auto scroll"))}var yt=!1,ec=_.debounce(()=>{kt(),yt=!1},500);function tc(){!yt&&f("autoScroll")&&(kt(),yt=!0),yt&&!f("autoScroll")&&ec()}function oc(){window.addEventListener("wheel",_.throttle(tc,500))}var ie=class extends C{constructor(...e){super(...e),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=D`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
    }

    :host([open]:not([mode='inline'])) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      padding-block-end: 1rem;
      text-align: center;
    }
    :host([icon='success']) .icon-container mov-icon {
      color: var(--theme-color-success, #28a745);
    }
    :host([icon='error']) .icon-container mov-icon {
      color: var(--theme-color-danger, #dc3545);
    }
    :host([icon='warning']) .icon-container mov-icon {
      color: var(--theme-color-warning, #ffc107);
    }
    :host([icon='info']) .icon-container mov-icon {
      color: var(--theme-color-info, #17a2b8);
    }
    :host([icon='question']) .icon-container mov-icon {
      color: var(--theme-color-secondary, #6c757d);
    }

    /* --- MODE: INLINE --- */
    :host([mode='inline']) {
      display: block;
      width: 500px;
      max-width: 100%;
    }
    :host([mode='inline']) dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      box-shadow: none;
      display: flex;
      flex-direction: column;
      visibility: visible;
      position: relative;
      width: 500px;
      max-width: 100%;
      border: 1px solid var(--theme-border-color, #e0e0e0);
      border-radius: 12px;
    }
    :host([mode='inline']) .backdrop {
      display: none;
    }
    :host([mode='inline']) .close-button {
      display: none; /* No close button in inline mode */
    }

    /* --- MODE: DIALOG --- */
    :host([mode='dialog']) {
      --panel-transition: transform 0.15s ease-out, opacity 0.15s ease-out;
    }
    :host([mode='dialog']) dialog {
      opacity: 0;
      transition: var(--panel-transition);
    }
    :host([mode='dialog'][open]) dialog {
      opacity: 1;
    }
    :host([mode='dialog']:not([fullscreen])) dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      border-radius: 12px;
      width: var(--dialog-width, 700px);
    }
    :host([mode='dialog']:not([fullscreen])[open]) dialog {
      transform: translate(-50%, -50%) scale(1);
    }
    :host([fullscreen]) {
      --panel-overlay-transition: none;
    }
    :host([fullscreen]) dialog {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateY(2rem);
      border-radius: 0;
    }
    :host([fullscreen][open]) dialog {
      transform: translateY(0);
    }
  `}close(){this.open=!1}handleCancel(e){e.preventDefault(),this.close()}handleBackdropClick(){this.mode!=="inline"&&this.lightDismiss&&this.close()}handleClick(e){this.mode!=="inline"&&this.lightDismiss&&e.target===this.dialog&&this.close()}updated(e){this.mode!=="inline"&&e.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):e.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return m`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":m`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
            </div>
            <div
              class="close-button-container"
              part="close-button-container"
            >
              <button
                class="close-button"
                part="close-button"
                @click=${this.close}
                aria-label="Close"
              >
                ${to}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?m`
                <div class="icon-container">
                  <mov-icon
                    .name=${nc(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};l([u({type:Boolean,reflect:!0})],ie.prototype,"open",void 0),l([u({type:String,reflect:!0})],ie.prototype,"mode",void 0),l([u({type:Boolean,reflect:!0})],ie.prototype,"fullscreen",void 0),l([u({type:String,reflect:!0})],ie.prototype,"label",void 0),l([u({type:Boolean,reflect:!0,attribute:"without-header"})],ie.prototype,"withoutHeader",void 0),l([u({type:Boolean,reflect:!0,attribute:"light-dismiss"})],ie.prototype,"lightDismiss",void 0),l([u({type:String,reflect:!0})],ie.prototype,"icon",void 0),l([ce("dialog")],ie.prototype,"dialog",void 0),ie=l([O("mov-dialog")],ie);function oo(t){const e=()=>S("dialog",null);t.timer&&setTimeout(e,t.timer),S("dialog",{open:!0,icon:t.icon,title:t.title,content:m`<div style="padding: 1rem;">${Wo(t.html)}</div>`,footer:m`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${e}>OK</mov-button>
      </div>
    `})}function nc(t){switch(t){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function rc(t){const e=t.currentTarget.value;Yo(e==="true")}function ic(t){const e=t.currentTarget.value;R("locale",e)}function ac(t){const e=t.currentTarget.value;R("loadMode",e)}function sc(t){const e=t.detail.checked;R("fitWidthIfOversize",e)}function lc(t){const e=t.currentTarget.value;R("navbar",e)}function cc(t){const e=t.currentTarget.value;R("pagination",e)}function dc(t){const e=t.detail.checked;R("downloadZip",e),e&&oo({title:h("ATTENTION"),html:h("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function hc(t){const e=t.detail.checked;R("lazyLoadImages",e),e&&oo({title:h("WARNING"),html:h("LAZY_LOAD"),icon:"warning"})}function uc(t){const e=t.detail.value;R("lazyStart",typeof e=="string"?parseInt(e,10):e)}function pc(t){const e=t.currentTarget.value;R("loadSpeed",e),["Extreme","All"].includes(e)&&oo({title:h("SPEED_WARNING"),html:h("SPEED_WARNING_MESSAGE"),icon:"warning"})}function mc(t){const e=t.detail.value;R("zoomStep",typeof e=="string"?parseInt(e,10):e)}function gc(t){const e=t.detail.value,o=typeof e=="string"?parseInt(e,10):e;dl("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${o}vw;}`),R("minZoom",o)}function vc(t){const e=t.detail.checked;R("hidePageControls",e)}function fc(t){const e=t.currentTarget.value;R("header",e)}function bc(t){const e=t.detail.value;R("scrollHeight",typeof e=="string"?parseInt(e,10):e)}function on(t){De("scrollHeight",e=>{const o=e+t*25;if(o<=0)return 0;const n=Math.ceil(window.innerHeight/200)*100;return o>=n?n:o})}function wc(t){const e=t.currentTarget.value;R("deviceMode",e),S("device",Jt(e))}function kc(){const t=p("navbar");return t==="left"||t==="right"?window.innerWidth-34:window.innerWidth}function yc(){return p("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function nn(t,e=p("zoomMode"),o=p("zoomValue")){const n=kc(),r=yc();if(e==="width")t.width=n,t.height=void 0;else if(e==="height")t.width=void 0,t.height=r;else if(e==="percent"){const i=t.naturalWidth??t.ref?.value?.naturalWidth;t.width=i?i*(o/100):void 0,t.height=void 0}return t}function pe(t=p("zoomMode"),e=p("zoomValue")){w("Zoom",t,e),Le("zoomMode",t),Le("zoomValue",e),t==="height"?S("scrollToPage",f("currentPage")):Se("header");const o=f("images"),n=f("manga"),r={};for(let i=n?.begin??1;i<=(n?.pages??1);i++)r[i]=nn({...o?.[i]},t,e);S("images",r)}function Pe(t,e=p("zoomValue")){return()=>{pe(t,e)}}function Et(t=1){return()=>{const e=p("zoomValue")+t*p("zoomStep");e>0&&e<500&&pe("percent",e)}}function Ec(t){const e=t.currentTarget.value;R("zoomMode",e)}function Ic(t){const e=t.detail.value,o=typeof e=="string"?parseInt(e,10):e;R("zoomValue",o),pe("percent",o)}function _c(t){const e=t.detail.value;pe("percent",typeof e=="string"?parseInt(e,10):e)}function X(t){return()=>{Le("viewMode",t),["FluidLTR","FluidRTL","Book","Manga"].includes(t)?(Le("zoomMode","height"),Le("header","click"),pe("height")):(Se("zoomMode"),Se("zoomValue"),Se("header")),pe()}}function Ac(t){const e=t.currentTarget.value;R("viewMode",e),X(e)()}function Sc(t){const e=p("viewMode")==="FluidRTL"?-1:1;f("chapter").value?.scrollBy({left:.8*window.innerWidth*t*e,behavior:"smooth"})}function xc(t){const e=f("currentPage")+t;e<0?S("scrollToPage",0):e>(f("manga")?.pages??1)||S("scrollToPage",e)}function Mc(t){window.scrollBy({top:.8*window.innerHeight*t,behavior:"smooth"})}function Cc(t){const e=f("currentPage"),o=f("manga");if(!o)return;const n=f("images")??{},r=o.begin??1,i=o.pages??1,a=c=>{if(c<r||c>i)return!1;if(n[c]?.doublePage)return!0;let v=0;for(let g=c-1;g>=r&&!n[g]?.doublePage;g--)v++;return v%2===0};let s;if(t===1)for(s=e+1;s<=i&&!a(s);)s++;else if(a(e))for(s=e-1;s>r&&!a(s);)s--;else for(s=e;s>r&&!a(s);)s--;s<r?S("scrollToPage",0):s>i?S("scrollToPage",i):S("scrollToPage",s)}function rn(t){const e=p("viewMode"),o=p("zoomMode");w("Scrolling view",e,"zoom",o,"sign",t),e.match(/^(Book|Manga)$/)&&o==="height"?Cc(t):e.startsWith("Fluid")?Sc(t):o==="height"?xc(t):Mc(t)}function Ye(t){const e=f("manga")?.[t];e&&e!=="#"?window.location.href=(0,Jo.sanitizeUrl)(e):t==="series"&&($t()?window.location.href=window.location.pathname:window.history.back())}var Oc={SCROLL_UP(){rn(-1)},SCROLL_DOWN(){rn(1)},NEXT_CHAPTER(){Ye("next")},PREVIOUS_CHAPTER(){Ye("prev")},RETURN_CHAPTER_LIST(){Ye("series")},ENLARGE(){Et(1)()},REDUCE(){Et(-1)()},RESTORE(){Pe("percent",100)()},FIT_WIDTH(){Pe("width")()},FIT_HEIGHT(){Pe("height")()},SETTINGS(){Qo("panel",t=>t==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){X("WebComic")()},VIEW_MODE_VERTICAL(){X("Vertical")()},VIEW_MODE_LEFT(){X("FluidRTL")()},VIEW_MODE_RIGHT(){X("FluidLTR")()},VIEW_MODE_GALLERY(){X("Gallery")()},SCROLL_START(){kt()},INCREASE_SPEED(){on(1)},DECREASE_SPEED(){on(-1)},TOGGLE_CONTROLS(){De("hidePageControls",t=>!t)}};function an(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,hotkeys.unbind(),_.keys(p("keybinds")).forEach(t=>{hotkeys(p("keybinds")[t]?.join(",")??"",_.throttle(e=>{f("panel")!=="keybindingsEditor"&&(e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),Oc[t]())},100))})}var me=class extends C{constructor(...e){super(...e),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=D`
    :host {
      display: contents; /* Use contents to not interfere with layout */
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    .slider-pagination {
      display: flex;
      position: fixed;
      bottom: 30px;
      left: 0;
      right: 0;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      gap: 3px;
      width: 100%;
      max-width: 100%;
      z-index: 100;
    }

    .pagination-button {
      background: var(--mov-color-fill-loud);
      border: 1px solid var(--mov-color-fill-loud);
      color: var(--mov-color-on-loud);
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
    }

    .pagination-button:hover:not(:disabled) {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button mov-icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      max-width: 1000px;
      width: inherit;
      margin: 0 5px;
      --mov-slider-track-height: 4px;
      --mov-slider-thumb-size: 16px;
    }

    .tooltip {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-body-background);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1001;
    }

    .pagination-button:hover .tooltip {
      opacity: 1;
    }

    .side-arrow {
      position: fixed;
      top: var(--header-height, 50px);
      bottom: 0;
      width: 10vw;
      height: calc(100vh - var(--header-height, 50px));
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      -webkit-tap-highlight-color: transparent;
    }

    .side-arrow:hover {
      background-color: var(--mov-color-primary-alpha-10);
      opacity: 1;
    }

    .side-arrow.left {
      left: 0;
    }

    .side-arrow.right {
      right: 0;
    }

    .side-arrow:active {
      background-color: var(--mov-color-primary-alpha-20);
    }

    .side-arrow mov-icon {
      width: 48px;
      height: 48px;
      fill: var(--mov-color-on-primary);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    }

    .side-arrow:disabled {
      display: none;
    }
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return m`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${Qe}
          value="${this.prev}"
          ?disabled=${K(this.prev)||this.prev==="#"}
        >
          <mov-icon name="arrow-big-left"></mov-icon>
          <div class="tooltip">Previous Chapter</div>
        </button>

        <button
          class="pagination-button"
          @click=${this.goToPreviousPage}
          ?disabled=${this.isFirstPage}
        >
          <mov-icon name="chevron-left"></mov-icon>
          <div class="tooltip">Previous Page</div>
        </button>

        <div class="slider-container">
          <mov-slider
            class="pagination-slider"
            min="${this.startPage}"
            max="${this.totalPages}"
            .value="${this.currentPage}"
            show-tooltip
            @input="${Kl}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${Qe}
          value="${this.next}"
          ?disabled=${K(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return m`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(K(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(K(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return x;const e=this.mode==="slider"||this.mode==="both",o=this.mode==="side-arrows"||this.mode==="both";return m`
      ${e?this.renderSlider():x} ${o?this.renderSideArrows():x}
    `}handleLeftArrowClick(){this.isFirstPage?Ye("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?Ye("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(e){S("scrollToPage",e)}};l([u({type:String})],me.prototype,"mode",void 0),l([u({type:Number})],me.prototype,"currentPage",void 0),l([u({type:Number})],me.prototype,"totalPages",void 0),l([u({type:Number})],me.prototype,"startPage",void 0),l([u({type:String})],me.prototype,"next",void 0),l([u({type:String})],me.prototype,"prev",void 0),me=l([O("manga-pagination")],me);var ge=class extends C{constructor(...e){super(...e),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=D`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
      --panel-transition: transform 0.25s ease-out;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
      width: 350px;
      top: 0;
      bottom: 0;
      height: 100%;
      transition: var(--panel-transition);
    }

    :host([open]) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    :host([placement='start']) dialog {
      left: 0;
      transform: translateX(-100%);
    }
    :host([placement='end']) dialog {
      right: 0;
      transform: translateX(100%);
    }
    :host([placement='top']) dialog {
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      transform: translateY(-100%);
    }
    :host([placement='bottom']) dialog {
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      top: auto;
      transform: translateY(100%);
    }
    :host([open]) dialog {
      transform: none;
    }
    :host([placement='end']) .action-item {
      order: 3;
    }
    :host([placement='end']) .header-content {
      order: 2;
    }
    :host([placement='end']) .close-button-container {
      order: 1;
      justify-content: flex-start;
    }
    .footer-slot {
      display: block;
      padding: 1rem;
      border-top: 1px solid var(--theme-border-color, #e0e0e0);
    }
  `}close(){this.open=!1}handleCancel(e){e.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(e){this.lightDismiss&&e.target===this.dialog&&this.close()}updated(e){e.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):e.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return m`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":m`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
            </div>
            <div
              class="close-button-container"
              part="close-button-container"
            >
              <button
                class="close-button"
                part="close-button"
                @click=${this.close}
                aria-label="Close"
              >
                ${to}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};l([u({type:Boolean,reflect:!0})],ge.prototype,"open",void 0),l([u({type:String,reflect:!0})],ge.prototype,"placement",void 0),l([u({type:String,reflect:!0})],ge.prototype,"label",void 0),l([u({type:Boolean,reflect:!0,attribute:"without-header"})],ge.prototype,"withoutHeader",void 0),l([u({type:Boolean,reflect:!0,attribute:"light-dismiss"})],ge.prototype,"lightDismiss",void 0),l([ce("dialog")],ge.prototype,"dialog",void 0),ge=l([O("mov-drawer")],ge);var xe=class extends C{static{this.styles=D`
    :host {
      position: relative;
      display: inline-block;
    }
    :host([checkable]) {
      --mov-dropdown-item-checkmark-display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 100;
      list-style: none;
      padding: 0;
      margin: 4px 0 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([placement^='top']) .dropdown-content {
      top: auto;
      bottom: 100%;
      margin: 0 0 4px;
    }
    :host([placement$='end']) .dropdown-content {
      left: auto;
      right: 0;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(e){this.open&&!e.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return m`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
        part="trigger"
      >
        <slot name="trigger"></slot>
      </div>
      <div
        class="dropdown-content"
        part="menu"
      >
        <slot></slot>
      </div>
    `}};l([u({type:Boolean,reflect:!0})],xe.prototype,"open",void 0),l([u({type:Boolean,reflect:!0})],xe.prototype,"checkable",void 0),l([u({type:Number})],xe.prototype,"distance",void 0),l([u({type:Number})],xe.prototype,"skidding",void 0),l([u({type:String})],xe.prototype,"placement",void 0),xe=l([O("mov-dropdown")],xe);var ve=class extends C{constructor(...e){super(...e),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=D`
    :host {
      display: block;
      min-width: max-content;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--theme-body-text-color);
      background-color: var(--theme-background-color);
      gap: 10px;
    }
    .item:hover {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([selected]) .item,
    :host([checked]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([disabled]) .item {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([variant='danger']) .item {
      color: var(--theme-color-danger, #dc3545);
    }
    .item-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .check-icon {
      display: var(--mov-dropdown-item-checkmark-display, none);
      visibility: hidden;
      width: 1.2em;
      height: 1.2em;
    }
    :host([selected]) .check-icon,
    :host([checked]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return m`
      <div
        class="item"
        @click=${this.handleSelect}
        part="base"
      >
        <div
          class="item-content"
          part="label"
        >
          <mov-icon
            class="check-icon"
            name="IconCheck"
            part="checkmark"
          ></mov-icon>
          <slot
            name="icon"
            part="icon"
          ></slot>
          <slot></slot>
        </div>
        <slot
          name="details"
          part="details"
        ></slot>
      </div>
    `}};l([u({type:Boolean,reflect:!0})],ve.prototype,"selected",void 0),l([u({type:Boolean,reflect:!0})],ve.prototype,"checked",void 0),l([u({type:Boolean,reflect:!0})],ve.prototype,"disabled",void 0),l([u({type:String})],ve.prototype,"value",void 0),l([u({type:String,reflect:!0})],ve.prototype,"variant",void 0),l([u({type:String,reflect:!0})],ve.prototype,"type",void 0),ve=l([O("mov-dropdown-item")],ve);var no=class extends C{constructor(...e){super(...e),this.orientation="horizontal"}static{this.styles=D`
    :host {
      display: block;
    }
    :host([orientation='horizontal']) .divider {
      border-top: 1px solid var(--theme-border-color, #ccc);
      margin: 4px 0;
    }
    :host([orientation='vertical']) .divider {
      border-left: 1px solid var(--theme-border-color, #ccc);
      height: 100%;
      margin: 0 4px;
      display: inline-block;
    }
  `}render(){return m`<div
      class="divider"
      role="separator"
    ></div>`}};l([u({type:String,reflect:!0})],no.prototype,"orientation",void 0),no=l([O("mov-divider")],no);var sn=`/**\r
 * KEYS.css\r
 *\r
 * A simple stylesheet for rendering beautiful keyboard-style elements.\r
 *\r
 * Author:  Michael H\xFCneburg\r
 * Website: http://michaelhue.com/keyscss\r
 * License: MIT License (see LICENSE.txt)\r
 */\r
\r
kbd,\r
.key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  background-color: #505050;\r
  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r
  color: #fafafa;\r
  text-shadow: -1px -1px 0 #464646;\r
  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
  font-size: .85em;\r
  line-height: 1;\r
  cursor: default;\r
  -webkit-user-select: none;\r
     -moz-user-select: none;\r
      -ms-user-select: none;\r
          user-select: none;\r
}\r
kbd[title],\r
.key[title] {\r
  cursor: help;\r
}\r
kbd.dark,\r
.dark-keys kbd,\r
.key.dark,\r
.dark-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  background-color: #505050;\r
  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r
  color: #fafafa;\r
  text-shadow: -1px -1px 0 #464646;\r
  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
}\r
kbd.light,\r
.light-keys kbd,\r
.key.light,\r
.light-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  background-color: #fafafa;\r
  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r
  color: #323232;\r
  text-shadow: 0 0 2px #ffffff;\r
  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r
          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r
}\r
kbd.so,\r
.so-keys kbd,\r
.key.so,\r
.so-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  margin: 0 .1em;\r
  padding: .1em .6em;\r
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r
  line-height: 1.4;\r
  color: #242729;\r
  text-shadow: 0 1px 0 #FFF;\r
  background-color: #e1e3e5;\r
  border: 1px solid #adb3b9;\r
  border-radius: 0.27272727em;\r
  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r
          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r
}\r
kbd.github,\r
.github-keys kbd,\r
.key.github,\r
.github-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  padding: 0.27272727em 0.45454545em;\r
  font-size: 68.75%;\r
  line-height: 0.90909091;\r
  color: #444d56;\r
  vertical-align: middle;\r
  background-color: #fafbfc;\r
  border: solid 1px #c6cbd1;\r
  border-bottom-color: #959da5;\r
  border-radius: 0.27272727em;\r
  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r
          box-shadow: inset 0 -1px 0 #959da5;\r
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r
  -webkit-box-sizing: border-box;\r
          box-sizing: border-box;\r
  text-shadow: none;\r
}\r
\r
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */`,Tc=we((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StoreController=void 0;var e=class{constructor(o,n){this.host=o,this.atom=n,o.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var o;(o=this.unsubscribe)===null||o===void 0||o.call(this)}get value(){return this.atom.get()}};t.StoreController=e})),ro=we((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MultiStoreController=void 0;var e=class{constructor(o,n){this.host=o,this.atoms=n,o.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(o=>o.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var o;(o=this.unsubscribes)===null||o===void 0||o.forEach(n=>n())}get values(){return this.atoms.map(o=>o.get())}};t.MultiStoreController=e})),$c=we((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useStores=void 0;var e=ro();function o(...n){return r=>class extends r{constructor(...i){super(...i),new e.MultiStoreController(this,n)}}}t.useStores=o})),Lc=we((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.withStores=void 0;var e=ro(),o=(n,r)=>class extends n{constructor(...a){super(...a),new e.MultiStoreController(this,r)}};t.withStores=o})),ze=we((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.withStores=t.useStores=t.MultiStoreController=t.StoreController=void 0;var e=Tc();Object.defineProperty(t,"StoreController",{enumerable:!0,get:function(){return e.StoreController}});var o=ro();Object.defineProperty(t,"MultiStoreController",{enumerable:!0,get:function(){return o.MultiStoreController}});var n=$c();Object.defineProperty(t,"useStores",{enumerable:!0,get:function(){return n.useStores}});var r=Lc();Object.defineProperty(t,"withStores",{enumerable:!0,get:function(){return r.withStores}})}))(),ln=class extends C{static{this.styles=D`
    :host {
      display: inline-flex;
      vertical-align: middle;
      z-index: 100;
    }

    :host(:has(mov-dropdown[open])) {
      z-index: 110;
    }

    .button-group {
      display: flex;
      flex-wrap: wrap;
    }

    ::slotted(mov-button),
    ::slotted(mov-dropdown) {
      margin-inline-start: -1px;
      --mov-border-radius-m: 0;
    }

    ::slotted(mov-button:first-child),
    ::slotted(mov-dropdown:first-child) {
      margin-inline-start: 0;
      --mov-border-radius-m: 0.375rem 0 0 0.375rem;
    }

    ::slotted(mov-button:last-child),
    ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0.375rem 0.375rem 0;
    }

    ::slotted(mov-button:first-child:last-child),
    ::slotted(mov-dropdown:first-child:last-child) {
      --mov-border-radius-m: 0.375rem;
    }

    /* Handling adjacent button groups visual merge */
    :host(.button-group-merged-start) {
      margin-inline-start: -1px;
    }
    :host(.button-group-merged-start) ::slotted(mov-button:first-child),
    :host(.button-group-merged-start) ::slotted(mov-dropdown:first-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    :host(.button-group-merged-end) ::slotted(mov-button:last-child),
    :host(.button-group-merged-end) ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    ::slotted(mov-dropdown) {
      display: flex;
    }
  `}render(){return m`
      <div
        class="button-group"
        role="group"
      >
        <slot></slot>
      </div>
    `}};ln=l([O("mov-button-group")],ln);var It=49,Dc=100,Nc=class Dn{constructor(e){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=_.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const n=p("header"),{scrollY:r}=window;let i="none";p("zoomMode")!=="height"&&r+window.innerHeight+Dc>document.body.scrollHeight?i="end":r>this.prevOffset&&r>It?i="hide":n==="scroll"&&r<this.prevOffset&&r>It?i="show":n!=="click"&&r<=It&&(i="top");let a=!1;if(this.headroom!==i&&(this.headroom=i,a=!0),n==="scroll"){const s=i!=="hide";this.headerVisible!==s&&(this.headerVisible=s,a=!0)}a&&this.host.requestUpdate(),this.prevOffset=r},300),this.handleMouseMove=_.throttle(n=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(p("header"))){const r=Dn.isMouseInsideRegion(n,window.innerWidth,It*1.5);this.headerVisible!==r&&(this.headerVisible=r,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{p("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=e,e.addController(this);const o=p("header");p("zoomMode")==="height"&&["click","hover"].includes(o)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const e=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const o of e)if(o.open)return!0;return!1}static isMouseInsideRegion(e,o,n){return e.clientX>=0&&e.clientX<=o&&e.clientY>=0&&e.clientY<=n}},Rc=class{constructor(t){this.canvasContext=null,this.host=t,t.addController(this);const e=document.createElement("canvas");this.canvasContext=e.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(t,e){!t||!e||(this.element=t,this.text=e,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const t=window.getComputedStyle(this.element);this.canvasContext.font=`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;const e=this.text,o=this.element.clientWidth;if(this.canvasContext.measureText(e).width<=o){this.value=e,this.host.requestUpdate();return}const n="...",r=o-this.canvasContext.measureText(n).width;let i="",a="";for(let s=1;s<e.length;s++){const c=e.substring(0,s),v=e.substring(e.length-s);if(this.canvasContext.measureText(c).width+this.canvasContext.measureText(v).width>r)break;i=c,a=v}this.value=`${i}${n}${a}`,this.host.requestUpdate()}};function cn(t=window.location.href){K(Ne(t))||(w(`Bookmark Removed ${t}`),De("bookmarks",e=>[...e.filter(o=>o.url!==t)]))}function Pc(t){const e=t.currentTarget.value;w(`Bookmark Removed ${e}`),j.error({title:h("BOOKMARK_REMOVED"),duration:1e4}),cn(e)}function zc(){S("panel","bookmarks")}function dn(){const t=f("currentPage"),e={name:f("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:t,date:new Date().toISOString().slice(0,10)};Ne(e.url)?(De("bookmarks",o=>[...o.filter(n=>n.url!==e.url)]),j.error({title:h("BOOKMARK_REMOVED"),duration:1e4})):(De("bookmarks",o=>[...o,e]),j.success({title:h("BOOKMARK_SAVED"),description:h("BOOKMARK_MESSAGE").replace("##num##",t.toString()),duration:1e4}))}function io(){S("panel","none")}function Bc(){S("panel","settings")}function Hc(){S("panel","keybindings")}function Gc(t){const e={};_.keys(t).forEach(o=>{const n=t[o].value;if(n){const r=n.value.split(",").map(i=>i.trim()).filter(i=>i!=="");e[o]=r.length>0?r:void 0}}),R("keybinds",e),S("panel","keybindings"),an()}function Vc(){S("panel","keybindingsEditor")}var Fc=`#Header {\r
  display: flex;\r
  justify-content: space-around;\r
  align-items: center;\r
  flex-flow: row nowrap;\r
  gap: 10px;\r
  padding: 0 20px;\r
  transition: transform 0.3s ease-in;\r
  position: sticky;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  background-color: var(--theme-background-color);\r
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);\r
  z-index: 900;\r
}\r
\r
#Header.click {\r
  padding-left: 60px;\r
}\r
\r
@keyframes headroom {\r
  from {\r
    transform: translateY(-100%);\r
  }\r
  to {\r
    transform: translateY(0%);\r
  }\r
}\r
\r
#Header:not(.visible, .headroom-top, .fixed, .simple) {\r
  animation: headroom 0.3s ease-in reverse;\r
  transform: translateY(-100%);\r
  position: sticky;\r
  top: 0;\r
}\r
\r
#Header.scroll.headroom-hide:not(.visible) {\r
  animation: none;\r
  transform: translateY(-100%);\r
  position: sticky;\r
  top: 0;\r
}\r
\r
#Header.scroll.headroom-show,\r
#Header.headroom-end,\r
#Header.visible {\r
  animation: headroom 0.3s ease-in;\r
  transform: translateY(0%);\r
  position: sticky;\r
  top: 0;\r
}\r
\r
#Header.headroom-top {\r
  animation: none;\r
}\r
\r
#Header.fixed {\r
  position: sticky;\r
  animation: none;\r
  top: 0;\r
  transform: translateY(0%);\r
}\r
\r
#Header.simple {\r
  position: static;\r
  animation: none;\r
  top: 0;\r
  transform: translateY(0%);\r
}\r
\r
#menu {\r
  position: fixed;\r
  z-index: 1;\r
  color: var(--theme-body-text-color);\r
  height: 40px;\r
  width: 40px;\r
}\r
\r
#menu:not(.click),\r
#menu.hide {\r
  display: none;\r
}\r
\r
#menu.click {\r
  z-index: 901;\r
  top: 25px;\r
  left: 5px;\r
  opacity: 0.8;\r
}\r
\r
#Toolbar {\r
  order: 1;\r
}\r
\r
#GlobalFunctions {\r
  order: 4;\r
}\r
\r
#ViewerTitle {\r
  order: 2;\r
  display: flex;\r
  justify-content: center;\r
}\r
\r
#ZoomControl {\r
  order: 3;\r
  display: flex;\r
  align-items: center;\r
  flex-direction: column;\r
  gap: 3px;\r
  padding: 10px 5px;\r
  min-width: 100px;\r
}\r
\r
#MangaTitle {\r
  padding: 2px;\r
  margin: 0;\r
  font-size: 19px;\r
  font-weight: 400;\r
  word-wrap: anywhere;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  min-width: 200px;\r
  max-width: 40vw;\r
}\r
`,hn=`#Header.mobile,\r
#Header.tablet {\r
  display: flex;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  gap: 0;\r
  justify-content: center;\r
}\r
\r
.mobile #ViewerTitle,\r
.tablet #ViewerTitle {\r
  order: 4;\r
  min-height: auto;\r
}\r
\r
.mobile #GlobalFunctions,\r
.tablet #GlobalFunctions {\r
  order: 2;\r
}\r
\r
.mobile #Toolbar,\r
.tablet #Toolbar {\r
  order: 1;\r
}\r
\r
#Header.mobile {\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  justify-content: center;\r
  align-items: center;\r
}\r
\r
#Header.mobile.click + #Chapter:not(.webcomic, .vertical) {\r
  position: sticky;\r
}\r
\r
.tablet #MangaTitle,\r
.mobile #MangaTitle {\r
  max-width: 90vw;\r
}\r
\r
.mobile #ViewerTitle {\r
  order: 3;\r
  margin-top: 0;\r
  height: auto;\r
  padding: 0;\r
}\r
\r
.mobile #GlobalFunctions,\r
.tablet #GlobalFunctions {\r
  order: 2;\r
}\r
\r
.mobile .PageFunctions {\r
  padding: 0;\r
}\r
\r
.mobile .PageFunctions .PageButton.Bookmark {\r
  opacity: 1;\r
}\r
\r
.mobile #GlobalFunctions #ZoomSlider,\r
.tablet #GlobalFunctions #ZoomSlider,\r
.mobile .PageFunctions .PageButton:not(.Bookmark),\r
.tablet #Counters,\r
.mobile #ZoomControl,\r
.mobile #ZoomDropdown,\r
.mobile #ViewDropdown,\r
.mobile #FileDropdown :where(:nth-child(3), :nth-child(4)),\r
.mobile #BookMode,\r
.mobile #MangaMode,\r
.tablet #BookMode,\r
.tablet #MangaMode {\r
  display: none;\r
}\r
`,_t=class extends C{static{this.styles=[k(Fc),k(hn),k(sn),D``]}constructor(){super(),this.headroomController=new Nc(this),this.titleController=new Rc(this)}updated(e){super.updated(e),e.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return m``;const{headroom:e,headerVisible:o}=this.headroomController,n=p("keybinds"),r=i=>{if(f("device")!=="desktop")return x;const a=n[i];return!a||a.length===0?x:a.map(s=>m`<kbd slot="details">${s}</kbd>`)};return m`
      <toggle-button
        id="menu"
        mode="burger"
        class="${N({[p("header")]:!0,hide:["top","end"].includes(e)})}"
        ?active=${o}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${N({[p("header")]:!0,[`headroom-${e}`]:!0,visible:o&&["hide","none"].includes(e),[f("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${N({"button-group-merged-end":["mobile","tablet"].includes(f("device"))})}"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${h("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${Bc}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${h("SETTINGS")} ${r("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${Hc}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${h("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${zc}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${h("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${N({running:f("autoScroll")})}"
              @click=${kt}
            >
              <mov-icon
                slot="icon"
                name="${f("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${h("SCROLL_START")} ${r("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${Yl}"
              ?selected=${p("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${h("TOGGLE_CONTROLS")} ${r("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${h("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${X("WebComic")}"
              ?selected=${p("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${h("VIEW_MODE_WEBCOMIC")} ${r("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${X("Vertical")}"
              ?selected=${p("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${h("VIEW_MODE_VERTICAL")} ${r("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${X("FluidLTR")}"
              ?selected=${p("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${h("VIEW_MODE_LEFT")} ${r("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${X("FluidRTL")}"
              ?selected=${p("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${h("VIEW_MODE_RIGHT")} ${r("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${X("Book")}"
              ?selected=${p("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${h("VIEW_MODE_BOOK")} ${r("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${X("Manga")}"
              ?selected=${p("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${h("VIEW_MODE_MANGA")} ${r("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${X("Gallery")}"
              ?selected=${p("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${h("VIEW_MODE_GALLERY")} ${r("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${h("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Et()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${h("ENLARGE")} ${r("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Pe("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${h("RESTORE")} ${r("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Et(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${h("REDUCE")} ${r("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Pe("width")}"
              ?selected=${p("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${h("FIT_WIDTH")} ${r("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Pe("height")}"
              ?selected=${p("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${h("FIT_HEIGHT")} ${r("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${N({"button-group-merged-start":["mobile","tablet"].includes(f("device"))})}"
        >
          <mov-button
            id="series"
            href="${this.manga.series??x}"
            @click=${Qe}
            title="${h("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${h("DOWNLOAD_ZIP")}"
            @click=${en}
            ?disabled=${f("download")!=="available"}
            ?loading=${f("download")==="working"}
          >
            <mov-icon
              name="${f("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??x}"
            title="${h("PREVIOUS_CHAPTER")}"
            @click=${Qe}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??x}"
            title="${h("NEXT_CHAPTER")}"
            @click=${Qe}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </mov-button-group>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value??this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <output id="ZoomVal">
            Zoom:
            ${p("zoomMode")==="percent"?`${p("zoomValue")}%`:p("zoomMode")}
          </output>
          <mov-slider
            id="Zoom"
            name="Zoom"
            .value="${p("zoomValue")}"
            min="${p("minZoom")}"
            max="200"
            show-tooltip
            @input=${_c}
          ></mov-slider>
        </div>
      </header>
    `}};l([ce("#MangaTitle")],_t.prototype,"mangaTitleElement",void 0),l([u({type:Object})],_t.prototype,"manga",void 0),_t=l([O("reader-header"),(0,ze.useStores)(z,$e,U)],_t);var Wc=`#BookmarksPanel {\r
  text-align: center;\r
  --width: 100vw;\r
}\r
\r
#BookmarksList {\r
  padding: 0 5px;\r
  overflow: auto;\r
  max-height: 60vh;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 5px;\r
}\r
\r
.bookmark-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 1rem;\r
  padding: 0.75rem 1rem;\r
  border-radius: 5px;\r
  transition: background-color 150ms ease-in-out;\r
  text-align: left;\r
}\r
\r
.bookmark-item:hover {\r
  background-color: var(--mov-color-fill-quiet, rgba(128, 128, 128, 0.1));\r
}\r
\r
.bookmark-info {\r
  flex-grow: 1;\r
  min-width: 0;\r
}\r
\r
.bookmark-name {\r
  font-weight: 500;\r
}\r
\r
.bookmark-url {\r
  font-size: 14px;\r
  text-decoration: none;\r
  display: block;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\r
}\r
.bookmark-url:hover {\r
  text-decoration: underline;\r
}\r
\r
.bookmark-details {\r
  flex-shrink: 0;\r
  width: 90px;\r
  font-size: 14px;\r
  text-align: right;\r
  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\r
}\r
.bookmark-details > div {\r
  padding: 2px 0;\r
}\r
\r
.bookmark-actions {\r
  flex-shrink: 0;\r
  display: flex;\r
  gap: 0.5rem;\r
}\r
`,un=class extends C{static{this.styles=[k(Wc)]}listBookmarks(){return Lt(p("bookmarks"))?[h("LIST_EMPTY")]:p("bookmarks").map((e,o)=>m`
        <div
          id="Bookmark${o+1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${e.name}</div>
            <a
              class="bookmark-url"
              href="${e.url}"
              target="_blank"
              >${e.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(e.date).toISOString().slice(0,10)}</div>
            <div class="bookmark-page">Page: ${e.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${e.url}"
              target="_blank"
            >
              <mov-button
                title="Open Bookmark"
                size="small"
              >
                <mov-icon
                  name="IconExternalLink"
                  size="16px"
                ></mov-icon>
              </mov-button>
            </a>
            <mov-button
              title="Delete Bookmark"
              size="small"
              value="${e.url}"
              @click=${Pc}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return m`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${f("panel")==="bookmarks"}
        light-dismiss
        @close=${io}
      >
        <mov-button
          class="Bookmark"
          title="${h("BOOKMARK")}"
          @click=${dn}
          slot="header-actions"
        >
          <mov-icon
            name="${Ne()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${h("BOOKMARKS")}</h2>
        <h2 slot="label">${h("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};un=l([O("bookmark-panel"),(0,ze.useStores)(z,$e,U)],un);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function*Uc(t,e){const o=typeof e=="function";if(t!==void 0){let n=-1;for(const r of t)n>-1&&(yield o?e(n):e),n++,yield r}}var Zc=`#KeybindingsPanel div {\r
  line-height: 1.5em;\r
}\r
\r
#KeybindingsPanel #KeybindingsList {\r
  display: grid;\r
  grid-template-columns: 1fr 2fr;\r
  gap: 5px;\r
}\r
\r
#KeybindingsPanel .ControlButton {\r
  margin-left: 3px;\r
  justify-content: center;\r
  align-items: center;\r
  padding: 5px 10px;\r
  gap: 0.5em;\r
}\r
\r
#KeybindingsPanel label {\r
  display: ruby;\r
}\r
\r
#KeybindingsPanel input {\r
  display: inline-block;\r
  width: 100%;\r
}\r
\r
#KeybindingsPanel #HotKeysRules {\r
  grid-column: span 2;\r
}\r
`,pn=class extends C{constructor(...e){super(...e),this.keybindsRefs=_.keys(p("keybinds")).reduce((o,n)=>(o[n]=Gt(),o),{})}static{this.styles=[k(Zc),k(sn)]}keybindList(){const e=p("keybinds");return _.keys(e).map(o=>{const n=e[o]?.length?Uc(e[o]?.map(r=>m`<kbd class="dark">${r}</kbd>`)," / "):"";return m`<span>${h(o)}:</span> <span>${n}</span>`})}keybindEditor(){const e=p("keybinds");return _.keys(e).map(o=>m`<label for="${o}">${h(o)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${o}"
            name="${o}"
            value="${e[o]?.join(" , ")??x}"
            ${Ft(this.keybindsRefs[o])}
          />`)}render(){return m`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${f("panel").startsWith("keybindings")}
        placement="end"
        @close=${io}
      >
        <h2 slot="label">${h("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${f("panel")==="keybindingsEditor"?m` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${h("SAVE_KEYBINDS")}"
                @click=${()=>Gc(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${h("BUTTON_SAVE")}
              </mov-button>`:m` <mov-button
                id="EditKeybindings"
                type="button"
                title="${h("EDIT_KEYBINDS")}"
                @click=${Vc}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${h("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${f("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Wo(h("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};pn=l([O("keybindings-panel"),(0,ze.useStores)(z,$e,U)],pn);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function*jc(t,e){if(t!==void 0){let o=0;for(const n of t)yield e(n,o++)}}function At(t,e=1){return Array(t).fill(0).map((o,n)=>n+1).filter(o=>o>=e)}function Xe(t){const e=t.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(e).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var St=t=>t%100===0?15:t%50===0?10:t%25===0?5:2.5;function qc(t,e,o,n){let r="";for(let i=0;i<=t;i+=5){const a=Te` <line
      x1="${i}"
      y1="0"
      x2="${i}"
      y2="${St(i)}"
    />`;if(r+=a,i!==0&&i%50===0){const s=Te` <text
        x="${i}"
        y="25"
        text-anchor="middle"
        font-size="${St(i)}px"
      >
        ${i}
      </text>`;r+=s}}for(let i=0;i<=e;i+=5){const a=Te` <line
      x1="0"
      y1="${i}"
      x2="${St(i)}"
      y2="${i}"
    />`;if(r+=a,i!==0&&i%50===0){const s=Te` <text
        x="25"
        y="${i}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${St(i)}px"
      >
        ${i}
      </text>`;r+=s}}return Te` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${t}"
    height="${e}"
    viewBox="0 0 ${t} ${e}"
  >
    <rect
      width="${t}"
      height="${e}"
      fill="${o}"
    />
    <text
      fill="${n}"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="30"
      dy="10.5"
      font-weight="bold"
      x="50%"
      y="50%"
      text-anchor="middle"
    >
      ${t}x${e}
    </text>
    <g
      stroke-width="1"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="10px"
      font-weight="100"
      fill="${n}"
      stroke="${n}"
    >
      ${r}
    </g>
  </svg>`}function V(t,e,o="#0F1C3F",n="#ECEAD9"){return Xe(qc(t,e,o,n))}var mn=_.values(P).map(t=>t[900]),gn=[400,600,900,1200,1400,1600,1970],vn=[600,800,1e3,1200,1400,2e3,2600];function Qc(){const t=Math.floor(Math.random()*gn.length),e=Math.floor(Math.random()*vn.length),o=Math.floor(Math.random()*mn.length);return V(gn[t],vn[e],mn[o])}function fn(t){t.deltaY&&(t.currentTarget.scrollLeft+=t.deltaY+t.deltaX,t.preventDefault())}function Yc(t){t.deltaY&&(t.currentTarget.scrollLeft-=t.deltaY-t.deltaX,t.preventDefault())}var Xc=`:host {\r
  --nav-collapsed-size: 34px;\r
  --nav-expanded-size: 200px;\r
  --header-height: 80px;\r
}\r
#Navigation {\r
  color: var(--theme-text-color);\r
  background-color: var(--theme-hightlight-color);\r
  overflow: hidden;\r
  display: flex;\r
  box-sizing: border-box;\r
  gap: 5px;\r
  white-space: nowrap;\r
  text-align: center;\r
  line-height: 0;\r
  transition: all 0.3s ease;\r
  position: fixed;\r
  z-index: 1000;\r
}\r
#Thumbnails {\r
  flex-grow: 1;\r
  display: flex;\r
  gap: 5px;\r
  justify-content: flex-start;\r
}\r
#Navigation.horizontal #Thumbnails {\r
  flex-direction: row;\r
  overflow-x: auto;\r
  overflow-y: hidden;\r
}\r
#Navigation.vertical #Thumbnails {\r
  flex-direction: column;\r
  overflow-y: auto;\r
  overflow-x: hidden;\r
  justify-content: flex-start;\r
}\r
#Navigation.left #Thumbnails {\r
  direction: rtl;\r
}\r
:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails {\r
  display: none;\r
}\r
#NavigationCounters {\r
  flex-shrink: 0; /* Prevent this from shrinking */\r
  padding: 5px;\r
  line-height: 1rem;\r
  text-align: center;\r
  white-space: nowrap;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 0.5rem;\r
}\r
/* == Horizontal Orientation (for top/bottom position) == */\r
#Navigation.horizontal {\r
  flex-direction: column;\r
  height: var(--nav-collapsed-size);\r
  width: 100%;\r
  left: 0;\r
  right: 0;\r
}\r
:host([forceExpanded]) #Navigation.horizontal,\r
#Navigation.horizontal:hover {\r
  height: var(--nav-expanded-size);\r
}\r
#Navigation.bottom {\r
  bottom: 0;\r
}\r
/* == Vertical Orientation (for left/right position) == */\r
#Navigation.vertical {\r
  flex-direction: row;\r
  width: var(--nav-collapsed-size);\r
  height: 100%;\r
  bottom: 0;\r
  transition:\r
    top 0.3s ease,\r
    height 0.3s ease,\r
    width 0.3s ease;\r
}\r
:host([forceExpanded]) #Navigation.vertical,\r
#Navigation.vertical:hover {\r
  width: var(--nav-expanded-size);\r
}\r
#Navigation.left {\r
  left: 0;\r
  flex-direction: row-reverse;\r
}\r
#Navigation.right {\r
  right: 0;\r
}\r
#Navigation.vertical #NavigationCounters {\r
  writing-mode: vertical-rl;\r
  transform: rotate(180deg);\r
}\r
#Navigation.right #NavigationCounters {\r
  transform: rotate(0deg);\r
}\r
/* Adjust for header visibility */\r
#Navigation.vertical.header {\r
  top: var(--header-height);\r
  height: calc(100% - var(--header-height));\r
}\r
\r
#Navigation .Thumbnail {\r
  display: inline-flex;\r
  height: 150px;\r
  width: 150px;\r
  margin: 0 5px;\r
  position: relative;\r
  justify-content: center;\r
  align-items: center;\r
}\r
\r
.ThumbnailIndex {\r
  color: var(--mov-color-on-loud);\r
  background-color: var(--mov-color-fill-loud);\r
  display: block;\r
  opacity: 0.9;\r
  position: absolute;\r
  left: 0;\r
  bottom: 30%;\r
  width: 100%;\r
  line-height: 1.2rem;\r
  text-align: center;\r
  font-weight: 600;\r
  z-index: 1;\r
}\r
.ThumbnailImg {\r
  cursor: pointer;\r
  display: inline-block;\r
  max-height: 150px;\r
  min-height: 150px;\r
  min-width: 80px;\r
  max-width: 150px;\r
  background-repeat: no-repeat;\r
  background-position: center;\r
  background-size: 48px 48px;\r
}\r
`,Ke=class extends C{constructor(...e){super(...e),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[k(Xc),D`
      #Navigation {
        transition: opacity 0.2s ease-in-out;
      }
      #Navigation.hiding {
        opacity: 0;
        /* Disable transition during position change to avoid animating the hide */
        transition: none;
      }

      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${k(Xe(Yt))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${k(Xe(Xt))}');
      }
    `]}willUpdate(e){e.has("mode")&&(this.isHiding=!0)}updated(e){e.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return x;const e=f("manga"),o={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},n=f("images")||{},r=_.keys(n).filter(i=>{const a=parseInt(i,10);return a>=(e?.begin??1)&&a<=(e?.pages??1)&&n[a]?.status==="loaded"}).length;return m`
      <nav
        id="Navigation"
        class="${N(o)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${Cl}
          <i>${r}</i> /
          <b> ${(e?.pages??1)-((e?.begin??1)-1)} </b>
          ${h("PAGES_LOADED")}
          <span>: ${f("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?fn:null}
        >
          ${jc(At(e?.pages??1,e?.begin??1),i=>m` <figure
                id="Thumbnail${i}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${i}"
                @click=${()=>Jl(i)}
              >
                <img
                  id="ThumbnailImg${i}"
                  alt=""
                  class="ThumbnailImg"
                  src=${f("images")?.[i]?.src??x}
                />
                <figcaption class="ThumbnailIndex">${i}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};l([u({type:String})],Ke.prototype,"mode",void 0),l([u({type:Boolean})],Ke.prototype,"forceExpanded",void 0),l([B()],Ke.prototype,"isHiding",void 0),Ke=l([O("navbar-thumbnails"),(0,ze.useStores)(z,$e,U)],Ke);function Kc(){const t=Ae()?"true":"false";return m` <div class="ControlLabel">
    ${h("SCOPE")}
    <segmented-control
      .value=${t}
      @change=${rc}
    >
      <segmented-control-option
        value="false"
        label=${h("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function Jc(){return Ce.map(t=>m`
      <option
        value="${t.ID}"
        ?selected=${p("locale")===t.ID}
      >
        ${t.NAME}
      </option>
    `)}function e0(){return m` <div class="ControlLabel locale">
    ${h("LANGUAGE")}
    <select
      id="locale"
      @change="${ic}"
    >
      ${Jc()}
    </select>
  </div>`}function t0(){const t=p("deviceMode");return m` <div class="ControlLabel">
    ${h("DEVICE_MODE")}
    <segmented-control
      .value=${t}
      @change=${wc}
    >
      <segmented-control-option
        value="auto"
        label=${h("DEVICE_MODE_AUTO")}
        icon="IconAdjustmentsHorizontal"
      ></segmented-control-option>
      <segmented-control-option
        value="desktop"
        label=${h("DEVICE_MODE_DESKTOP")}
        icon="IconDeviceDesktop"
      ></segmented-control-option>
      <segmented-control-option
        value="tablet"
        label=${h("DEVICE_MODE_TABLET")}
        icon="IconDeviceTablet"
      ></segmented-control-option>
      <segmented-control-option
        value="mobile"
        label=${h("DEVICE_MODE_MOBILE")}
        icon="IconDeviceMobile"
      ></segmented-control-option>
    </segmented-control>
  </div>`}var o0=()=>m`${Kc()} ${t0()} ${e0()}`;function n0(){return m`
    <div class="ControlLabel loadMode">
      ${h("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${ac}"
      >
        <option
          value="wait"
          ?selected=${p("loadMode")==="wait"}
        >
          ${h("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${p("loadMode")==="always"}
        >
          ${h("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${p("loadMode")==="never"}
        >
          ${h("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function r0(){return m`
    <div class="ControlLabel PagesPerSecond">
      ${h("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${pc}"
      >
        <option
          value="Safe"
          ?selected=${p("loadSpeed")==="Safe"}
        >
          ${h("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${p("loadSpeed")==="Standard"}
        >
          ${h("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${p("loadSpeed")==="Faster"}
        >
          ${h("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${p("loadSpeed")==="Extreme"}
        >
          ${h("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${p("loadSpeed")==="All"}
        >
          ${h("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var i0=()=>m`${n0()} ${r0()}`;function a0(){return m`
    <div class="ControlLabel fitIfOversize">
      ${h("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${p("fitWidthIfOversize")}
        @change=${sc}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${h("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${p("downloadZip")}
        @change=${dc}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${h("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${p("hidePageControls")}
        @change=${vc}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${h("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${p("lazyLoadImages")}
        @change=${hc}
      ></mov-switch>
    </div>
  `}function s0(){return m`
    <div
      class="${N({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:p("lazyLoadImages")})}"
    >
      <span>
        ${h("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          class="RangeValue"
          for="lazyStart"
        >
          ${p("lazyStart")}
        </output>
      </span>
      <mov-slider
        name="lazyStart"
        id="lazyStart"
        .value="${p("lazyStart")}"
        min="5"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="3"
        @input="${uc}"
      ></mov-slider>
    </div>
  `}function l0(){return m`
    <div class="ControlLabel headerType">
      ${h("HEADER_TYPE")}
      <segmented-control
        .value=${p("header")}
        @change=${fc}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${h("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${h("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${h("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${h("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${h("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function c0(){return m`
    <div class="ControlLabel pagination">
      ${h("PAGINATION_TYPE")}
      <segmented-control
        .value=${p("pagination")}
        @change=${cc}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${h("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${h("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${h("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${h("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function d0(){return m`
    <div class="ControlLabel navbarType">
      ${h("NAVBAR_TYPE")}
      <segmented-control
        .value=${p("navbar")}
        @change=${lc}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${h("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${h("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${h("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${h("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function h0(){return m`
    <div class="ControlLabel autoScroll">
      <span>
        ${h("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${p("scrollHeight")}px
        </output>
      </span>
      <mov-slider
        name="scrollHeight"
        id="scrollHeight"
        .value="${p("scrollHeight")}"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${bc}"
      ></mov-slider>
    </div>
  `}var u0=()=>m`${a0()} ${c0()} ${s0()} ${l0()} ${d0()} ${h0()}`;function p0(){const t=p("colorScheme")==="dark";R("colorScheme",t?"light":"dark"),document.documentElement.classList.remove(t?"dark":"light"),document.documentElement.classList.add(p("colorScheme"))}function xt(t){R("theme",t instanceof CustomEvent?t.detail.value:t.currentTarget.value)}function m0(){return m`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${h("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${p0}
        ?active=${p("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${h("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${p("theme")}"
        title="${p("theme")}"
        @input=${xt}
        .swatches=${_.values(eo)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${p("theme")}"
      mode="steps"
      .selected=${p("theme")}
      @change="${xt}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${_.values(eo).map(t=>m`<color-swatch
            .color="${t}"
            .selected=${p("theme")}
            @change=${xt}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${h("THEME_HUE")} & ${h("THEME_SHADE")}</summary>
      <color-panel
        .selected=${p("theme")}
        @change=${xt}
      ></color-panel>
    </details>
  `}function g0(){return m` <div class="ControlLabel DefaultZoomMode">
    ${h("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${p("zoomMode")}
      @change=${Ec}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${h("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${h("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${h("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function v0(){return m`
    <div
      class="${N({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:p("zoomMode")==="percent"})}"
    >
      <span>
        ${h("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${p("zoomValue")}%
        </output>
      </span>
      <mov-slider
        name="zoomValue"
        id="zoomValue"
        .value="${p("zoomValue")}"
        min="5"
        max="200"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${Ic}"
      ></mov-slider>
    </div>
  `}function f0(){return m`
    <div class="ControlLabel minZoom">
      <span>
        ${h("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${p("minZoom")}%
        </output>
      </span>
      <mov-slider
        name="minZoom"
        id="minZoom"
        .value="${p("minZoom")}"
        min="25"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="4"
        @input="${gc}"
      ></mov-slider>
    </div>
  `}function b0(){return m`
    <div class="ControlLabel zoomStep">
      <span>
        ${h("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${p("zoomStep")}%
        </output>
      </span>
      <mov-slider
        name="zoomStep"
        id="zoomStep"
        .value="${p("zoomStep")}"
        min="10"
        max="50"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${mc}"
      ></mov-slider>
    </div>
  `}function w0(){return m`
    <div class="ControlLabel viewMode">
      ${h("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${p("viewMode")}
        @change=${Ac}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${h("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${h("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${h("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${h("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${h("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${h("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${h("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var k0=()=>m`${g0()} ${v0()} ${f0()} ${b0()} ${w0()}`,y0=`#SettingsPanel {\r
  color: var(--theme-text-color);\r
}\r
\r
#SettingsPanel fieldset {\r
  border: 1px solid var(--theme-body-text-color);\r
  padding: 3px;\r
  border-radius: 10px;\r
}\r
\r
#SettingsPanel .ControlLabel {\r
  display: flex;\r
  flex-flow: row wrap;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 2px;\r
}\r
\r
#SettingsPanel .ControlLabelItem {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
}\r
\r
#SettingsPanel .ControlLabelItem:not(.show) {\r
  display: none;\r
}\r
\r
#SettingsPanel input[type="range"] {\r
  width: 100%;\r
}\r
\r
#SettingsPanel .RangeValue {\r
  display: inline-block;\r
  color: var(--mov-color-on-loud);\r
  line-height: 20px;\r
  text-align: center;\r
  border-radius: 3px;\r
  background: var(--mov-color-fill-loud);\r
  padding: 2px 5px;\r
  margin-left: 8px;\r
}\r
\r
#SettingsPanel datalist {\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: space-between;\r
  width: 100%;\r
}\r
\r
#SettingsPanel datalist option {\r
  padding: 0;\r
  writing-mode: vertical-lr;\r
}\r
\r
#ThemeSelector {\r
  width: 110px;\r
}\r
\r
#ColorRecommendations {\r
  display: flex;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  gap: 2px;\r
}\r
#Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\r
  display: none;\r
}\r
\r
#ColorScheme {\r
  padding: 5px;\r
  min-height: 28px;\r
  min-width: 28px;\r
}\r
\r
#ResetSettings,\r
#ResetSettings::part(base) {\r
  width: 100%;\r
}\r
`,bn=class extends C{static{this.styles=[D`
      #SettingsPanel.mobile #SettingsPanelZoom,
      #SettingsPanel.mobile .fitIfOversize,
      #SettingsPanel.mobile .showThumbnails,
      #SettingsPanel.mobile .lazyLoadImages,
      #SettingsPanel.mobile .downloadZip,
      #SettingsPanel.mobile .minZoom,
      #SettingsPanel.mobile .zoomStep,
      #SettingsPanel.mobile .headerType,
      #SettingsPanel.mobile .navbarType,
      #SettingsPanel.mobile .autoScroll {
        display: none;
      }
    `,k(y0)]}render(){return m`
      <mov-drawer
        id="SettingsPanel"
        ?open=${f("panel")==="settings"}
        @close=${io}
        placement="start"
        class="${f("device")}"
      >
        <h2 slot="label">${h("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${wl}"
          title="${h("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${h("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${h("GENERAL")}</legend>
            ${o0()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${h("THEME")}</legend>
            ${m0()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${h("LOADING")}</legend>
            ${i0()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${h("ZOOM")}</legend>
            ${k0()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${h("OTHERS")}</legend>
            ${u0()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};bn=l([O("settings-panel"),(0,ze.useStores)(z,$e,U)],bn);async function E0(t,e){w("Fetching page: ",t);try{const o=await(await fetch(t)).text();return new DOMParser().parseFromString(o,e)}catch(o){throw w("Failed to fetch page: ",o),o}}async function I0(t){return E0(t,"text/html")}async function _0(t,e,o){try{return(await I0(t)).querySelector(e)?.getAttribute(o)}catch(n){return w("Failed to get element attribute: ",n),null}}var A0=class{constructor(t,e){this.queue=[],this.activeCount=0,this.lastRunTime=0;const o={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[t];this.maxConcurrency=o.concurrency,this.minDelay=e??o.delay}add(t){this.queue.push(t),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const t=Date.now()-this.lastRunTime;if(t<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-t);return}const e=this.queue.shift();if(e){this.activeCount+=1,this.lastRunTime=Date.now();try{await e()}finally{this.activeCount-=1,this.runNext()}}}},ao;function S0(t){if(t){let e=t.trim();return e.startsWith("//")&&(e=`https:${e}`),e}return""}async function Mt(t,e,o){const n=f("images")?.[e];n?.status&&n.status!=="pending"||(q(e,()=>({status:"loading"})),ao.add(async()=>{let r=S0(o),i;try{const a=await fetch(r,t.fetchOptions);if(a.ok){const s=a.headers.get("content-type");s?.startsWith("image/")?(i=await a.blob(),r=await blobUtil.blobToDataURL(i)):w("Fetched content is not an image",s)}else w("Fetch failed with status",a.status)}catch(a){w("Failed to fetch image",a)}q(e,()=>({src:r,blob:i,status:"loaded"})),G("Loaded Image:",e,"Source:",r)}),t.pages===e&&cn())}async function wn(t,e,o){const n=f("images")?.[e];n?.status&&n.status!=="pending"||(q(e,()=>({status:"loading"})),ao.add(async()=>{try{const r=await _0(o,t.img,t.lazyAttr??"src");r?(q(e,()=>({status:"pending"})),await Mt(t,e,r)):q(e,()=>({status:"error"}))}catch(r){w("Failed to get page attribute",r),q(e,()=>({status:"error"}))}}))}function kn(t,e){At(e.pages,t).filter((o,n)=>!(e.lazy??p("lazyLoadImages"))||n<=p("lazyStart")).forEach(o=>{wn(e,o,e.listPages[o-1])})}function yn(t,e){At(e.pages,t).filter((o,n)=>!(e.lazy??p("lazyLoadImages"))||n<=p("lazyStart")).forEach(o=>{Mt(e,o,e.listImages[o-1])})}async function x0(){await Dt(()=>f("manga")!==void 0);const t=f("manga"),e=t.begin??1;ao=new A0(p("loadSpeed"),t.timer),G("Loading Images"),G(`Speed: ${p("loadSpeed")}`),G(`Lazy: ${t.lazy??p("lazyLoadImages")}, Starting from: ${p("lazyStart")}`),pe(),Ro(t)?(G("Method: Images:",t.listImages),yn(e,t)):Po(t)?(G("Method: Pages:",t.listPages),kn(e,t)):ur(t)?(G("Method: Brute Force"),t.bruteForce({begin:e,addImg:Mt,loadImages(o){yn(e,{...t,listImages:o})},loadPages(o,n,r){kn(e,{...t,listPages:o,img:n,lazyAttr:r})},wait:0})):w("No Loading Method Found"),U.listen((o,n,r)=>{if(r==="currentPage"&&o.currentPage>n.currentPage)for(let i=o.currentPage;i<Math.min(o.currentPage+5,t.pages+1);i++)o.images?.[i]?.src!==void 0||o.images?.[i]?.status==="loading"||(Ro(t)?Mt(t,i,t.listImages[i-1]):Po(t)&&wn(t,i,t.listPages[i-1]))})}function M0(){const t=f("images");if(!t)return null;const e=p("viewMode"),o=e==="FluidLTR"||e==="FluidRTL",n=e==="FluidRTL",r=window.innerHeight/2,i=window.innerWidth/2;let a=null;for(const s in t){const c=t[s].ref?.value;if(!c)continue;const v=c?.getBoundingClientRect();let g;o?n?g=v.right:g=v.left:g=v.top,(o?g<=i:g<=r)&&(!a||g>a.edge)&&(a={index:parseInt(s,10),edge:g})}return a?a.index:f("manga")?.begin??1}function En(){const t=M0();t!=null&&f("currentPage")!==t&&S("currentPage",t)}function C0(){const t=_.throttle(()=>{requestAnimationFrame(En)},100);window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t),f("chapter").value?.addEventListener("scroll",t,{passive:!0}),requestAnimationFrame(En)}function In(){if(!f("chapter").value){setTimeout(In,50);return}C0()}var _n=_.debounce(()=>{S("device",Jt()),pe()},200);async function O0(){await Dt(()=>f("manga")!==void 0),an(),window.addEventListener("resize",_n),window.addEventListener("orientationchange",_n),oc(),In()}var T0=/^blob:(.+?)\/(.+)$/;function $0(t){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(t)}function L0(t){return T0.test(t)}function D0(t,e){const o=t.replace(/[?&]forceReload=\d+$/,"");return`${o+(o.includes("?")?"&":"?")}forceReload=${e}`}function An(t,e){const o=f("images")?.[t];if(!o?.src)return;const n=(o.reload??0)+1;if(n>p("maxReload")){w(`Stopped reloading Page ${t} after ${n} attempts`);return}if(w(`Reloading Page ${t} (Attempt ${n})`,e),e?.removeAttribute("src"),$0(o.src)||L0(o.src))q(t,()=>({reload:n})),e?.setAttribute("src",o.src);else{const r=D0(o.src,n);q(t,()=>({reload:n,src:r})),e?.setAttribute("src",r)}}function N0(t){const e=t.currentTarget,o=parseInt(e.value,10),n=f("images")?.[o]?.ref?.value;n&&An(o,n)}function R0(t){const e=t.currentTarget;q(parseInt(e.value,10),o=>({hide:!o.hide}))}function P0(t){const e=t.currentTarget;q(parseInt(e.id.replace("PageImg",""),10),s=>({...nn({naturalWidth:e.naturalWidth,naturalHeight:e.naturalHeight}),status:"loaded",doublePage:e.naturalWidth>e.naturalHeight}));const o=f("manga"),n=f("images")||{},r=_.keys(n).filter(s=>{const c=parseInt(s,10);return c>=(o?.begin??1)&&c<=(o?.pages??1)&&n[c]?.status==="loaded"}).length,i=(o?.pages??1)-((o?.begin??1)-1),a=Math.floor(r/i*100);document.title=`(${a}%) ${f("manga")?.title}`,NProgress.configure({showSpinner:!1}).set(r/i),w(`Progress: ${a}%`),r===i&&(w("Images Loading Complete"),S("download","available"),p("downloadZip")&&en())}function z0(t){const e=t.currentTarget;if(Lt(e.getAttribute("src")))return;const o=parseInt(e.id.replace("PageImg",""),10);q(o,()=>({status:"error"})),An(o,e)}function B0(t){const e=t.currentTarget,o=parseInt(e.value,10),n=f("images"),r=f("images")?.[o];r?.naturalWidth&&S("images",{...n,[o]:{...r,width:(r?.width||r?.naturalWidth)*(1+p("zoomStep")/100),height:void 0}})}function H0(t){const e=t.currentTarget,o=parseInt(e.value,10),n=f("images"),r=f("images")?.[o];r?.naturalWidth&&S("images",{...n,[o]:{...r,width:(r?.width||r?.naturalWidth)*(1-p("zoomStep")/100),height:void 0}})}function G0(t){const e=t.currentTarget,o=parseInt(e.value,10),n=f("images"),r=f("images")?.[o];r&&S("images",{...n,[o]:{...r,width:void 0,height:void 0}})}function V0(t){const e=t.currentTarget,o=parseInt(e.value,10),n=f("images"),r=f("images")?.[o];r&&S("images",{...n,[o]:{...r,width:window.innerWidth+(p("navbar")==="left"||p("navbar")==="right"?-34:0),height:void 0}})}function F0(t){const e=t.currentTarget,o=parseInt(e.value,10),n=f("images"),r=f("images")?.[o];r&&S("images",{...n,[o]:{...r,width:void 0,height:window.innerHeight+(p("navbar")==="bottom"?-34:0)}})}function W0(t){const e=f("images")?.[t],o=p("viewMode").match(/^(Book|Manga)$/),n=p("viewMode")==="Gallery",r=p("viewMode").startsWith("Fluid"),i=p("navbar")==="bottom";return{width:e?.width?`${e.width}px`:"auto",height:e?.height?`${e.height}px`:"auto","max-height":r?`${window.innerHeight+(i?-34:0)}px`:void 0,"min-width":!o&&!n?`${p("minZoom")}vw`:void 0}}var U0=(t,e)=>At(t,e).map(o=>{f("images")?.[o]?.ref||q(o,c=>({ref:Gt()}));let n=0;for(let c=o-1;c>=e&&!f("images")?.[c].doublePage;c--)f("images")?.[c].doublePage||n++;const r=f("images")?.[o].doublePage??!1,i=p("viewMode")==="Book",a=!r&&(i?n%2===0:n%2===1),s=!r&&(i?n%2===1:n%2===0);return m`
      <div
        id="Page${o}"
        class="${N({MangaPage:!0,hide:!!f("images")?.[o].hide,DoublePage:r,LeftPage:a&&!r,RightPage:s&&!r})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${h("BOOKMARK")}"
            @click=${dn}
            value="${o}"
          >
            ${Ne()?Ml:xl}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${h("ZOOM_IN")}"
            @click=${B0}
            value="${o}"
          >
            ${Nl}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${h("ZOOM_RESET")}"
            @click=${G0}
            value="${o}"
          >
            ${Dl}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${h("ZOOM_OUT")}"
            @click=${H0}
            value="${o}"
          >
            ${Rl}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${h("ZOOM_HEIGHT")}"
            @click=${F0}
            value="${o}"
          >
            ${Al}
          </button>
          ${p("viewMode").match(/^(Book|Manga)$/)?m`
            <button
              class="DoublePage PageButton"
              title="${h("DOUBLE_PAGE")}"
              @click=${()=>{q(o,c=>({doublePage:!c.doublePage}))}}
              value="${o}"
            >
              ${Ll}
            </button>`:m`
              <button
                class="ZoomWidth PageButton"
                title="${h("ZOOM_WIDTH")}"
                @click=${V0}
                value="${o}"
              >
                ${Sl}
              </button>`}
          <button
            class="Hide PageButton"
            title="${h("HIDE")}"
            @click=${R0}
            value="${o}"
          >
            ${f("images")?.[o].hide?Ol:Tl}
          </button>
          <button
            class="Reload PageButton"
            title="${h("RELOAD")}"
            @click=${N0}
            value="${o}"
          >
            ${$l}
          </button>
          <span class="PageIndex">${o}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${o}"
            alt="Page ${o}"
            class="${N({PageImg:!0,imgBroken:f("images")?.[o]?.status==="error"})}"
            src=${f("images")?.[o]?.src??x}
            style="${re(W0(o))}"
            @load=${P0}
            @error=${z0}
            ${Ft(f("images")?.[o].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${o===t?h("END"):`${o} / ${t}`} ]
      </div>
    `}),Z0=t=>m`
  <main
    id="Chapter"
    ${Ft(f("chapter"))}
    class="${N({fitWidthIfOversize:p("fitWidthIfOversize"),[p("viewMode")]:!0,separator:p("viewMode")==="Vertical"})}"
    @wheel=${e=>{p("viewMode")==="FluidLTR"?fn(e):p("viewMode")==="FluidRTL"&&Yc(e)}}
  >
    ${U0(t.pages,t.begin??0)}
  </main>
`,j0=D`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${k(Xe(Yt))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${k(Xe(Xt))}');
  }

  ${k(`:root {\r
  /* Theme Colors */\r
  --theme-primary-color: #007bff; /* Example primary color */\r
  --theme-primary-text-color: #ffffff; /* Example primary text color */\r
  --theme-secondary-color: #6c757d; /* Example secondary color */\r
  --theme-secondary-text-color: #ffffff; /* Example secondary text color */\r
\r
  /* Dark Theme */\r
  --theme-body-background: #212529;\r
  --theme-body-text-color: #f8f9fa;\r
  --theme-text-color: #f8f9fa;\r
  --theme-background-color: #212529;\r
  --theme-hightlight-color: #343a40;\r
  --theme-border-color: #495057;\r
\r
  /* Custom Color Scales (based on gradient) */\r
  --mov-color-fill-quiet: #ced4da;\r
  --mov-color-fill-normal: #adb5bd;\r
  --mov-color-fill-loud: #007bff;\r
  --mov-color-border-quiet: #adb5bd;\r
  --mov-color-border-normal: #6c757d;\r
  --mov-color-border-loud: #495057;\r
  --mov-color-on-quiet: #343a40;\r
  --mov-color-on-normal: #ffffff;\r
  --mov-color-on-loud: #ffffff;\r
\r
  --mov-color-mix-hover: rgba(0, 0, 0, 0.08);\r
  --mov-color-mix-active: rgba(0, 0, 0, 0.16);\r
}\r
\r
.light {\r
  /* Light Theme */\r
  --theme-body-background: #f8f9fa;\r
  --theme-body-text-color: #212529;\r
  --theme-text-color: #212529;\r
  --theme-background-color: #f8f9fa;\r
  --theme-hightlight-color: #e9ecef;\r
  --theme-border-color: #dee2e6;\r
\r
  /* Custom Color Scales (based on gradient) */\r
  --mov-color-fill-quiet: #f8f9fa;\r
  --mov-color-fill-normal: #e9ecef;\r
  --mov-color-fill-loud: #007bff;\r
  --mov-color-border-quiet: #e9ecef;\r
  --mov-color-border-normal: #dee2e6;\r
  --mov-color-border-loud: #adb5bd;\r
  --mov-color-on-quiet: #6c757d;\r
  --mov-color-on-normal: #ffffff;\r
  --mov-color-on-loud: #ffffff;\r
\r
  --mov-color-mix-hover: rgba(0, 0, 0, 0.1);\r
  --mov-color-mix-active: rgba(0, 0, 0, 0.2);\r
}\r
`)}
  ${k(`/*  Simple Normalizer */\r
#MangaOnlineViewer {\r
  margin: 0;\r
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\r
  font-size: 16px;\r
  line-height: 20px;\r
  color: var(--theme-body-text-color);\r
  background-color: var(--theme-body-background);\r
  padding: 0;\r
}\r
\r
a,\r
a:link,\r
a:visited,\r
a:active,\r
a:focus {\r
  color: var(--theme-body-text-color);\r
  text-decoration: none;\r
}\r
\r
img {\r
  height: auto;\r
  vertical-align: middle;\r
  border: 0 none;\r
}\r
`)}
  ${k(`:root:not(.light, .dark) {\r
  --theme-body-background: #25262b;\r
  --theme-body-text-color: #c1c2c5;\r
  --theme-text-color: #c1c2c5;\r
  --theme-primary-color: #1a1b1e;\r
  --theme-primary-text-color: #c1c2c5;\r
  --theme-background-color: #25262b;\r
  --theme-hightlight-color: #2c2e33;\r
  --theme-border-color: #373a40;\r
  --theme-secondary-color: #2c2e33;\r
  --theme-secondary-text-color: #c1c2c5;\r
}\r
\r
:host {\r
  all: initial;\r
  display: block;\r
  box-sizing: border-box;\r
}\r
\r
#MangaOnlineViewer {\r
  text-decoration: none;\r
  color: var(--theme-body-text-color);\r
  background-color: var(--theme-body-background);\r
  box-sizing: border-box;\r
  min-height: 100vh;\r
  --mov-font-size-m: 16px;\r
}\r
\r
#Chapter {\r
  display: grid;\r
  grid-template-columns: repeat(1, 1fr);\r
  min-width: 225px;\r
  box-sizing: border-box;\r
}\r
\r
#Chapter.Vertical:has(+ #Navigation:not(.disabled)),\r
#Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\r
  padding-bottom: 31px;\r
}\r
\r
#Chapter.Vertical .PageContent {\r
  margin-bottom: 8px;\r
  margin-top: 8px;\r
}\r
\r
.closeButton {\r
  width: fit-content;\r
  height: fit-content;\r
  position: absolute;\r
  right: 10px;\r
  top: 10px;\r
}\r
\r
.overlay {\r
  position: fixed;\r
  display: none;\r
  width: 100%;\r
  height: 100%;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background-color: rgba(0, 0, 0, 0.5);\r
  z-index: 950;\r
  cursor: pointer;\r
}\r
\r
.overlay.visible {\r
  display: block;\r
}\r
\r
select {\r
  height: 20px;\r
  margin: 2px;\r
}\r
\r
:not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\r
  max-width: 100%;\r
  object-fit: contain;\r
}\r
\r
.hideControls .PageFunctions {\r
  visibility: hidden;\r
}\r
`)}
  ${k(`.PageButton .icon-tabler {\r
  height: 1rem;\r
  width: 1rem;\r
  vertical-align: sub;\r
}\r
\r
.PageButton,\r
.PageButton:visited,\r
.PageButton:link {\r
  cursor: pointer;\r
  border-radius: 5px;\r
  border-width: 1px;\r
  border-style: solid;\r
  padding: 2px;\r
  min-height: 32px;\r
  color: var(--mov-color-on-loud);\r
  background-color: var(--mov-color-fill-loud);\r
  border-color: var(--theme-border-color);\r
  text-decoration: none;\r
}\r
\r
.PageButton:active,\r
.PageButton:hover {\r
  opacity: 0.8;\r
}\r
\r
.PageButton[selected] {\r
  background-color: var(--mov-color-fill-normal);\r
  color: var(--mov-color-on-normal);\r
  border: 1px solid var(--theme-border-color);\r
}\r
\r
.PageButton.hidden {\r
  display: none;\r
}\r
\r
.MangaPage {\r
  width: 100%;\r
  display: inline-block;\r
  text-align: center;\r
  line-height: 0;\r
  min-height: 22px;\r
  min-width: 100%;\r
}\r
\r
.PageContent {\r
  text-align: center;\r
  display: inline-block;\r
  overflow-x: auto;\r
  max-width: 100%;\r
  transition: all 0.3s ease-in-out;\r
  height: 100%;\r
  overflow-y: hidden;\r
}\r
\r
.MangaPage.hide .PageContent {\r
  height: 0;\r
}\r
\r
.PageContent .PageImg[src=""],\r
.PageContent .PageImg:not([src]),\r
.PageContent .PageImg.imgBroken {\r
  width: 40vw;\r
  height: 80vh;\r
  display: inline-block;\r
  background-position: center;\r
  background-repeat: no-repeat;\r
  background-size: 20%;\r
  background-color: var(--theme-hightlight-color);\r
  position: relative;\r
  text-align: center;\r
  line-height: 80vh;\r
  vertical-align: top;\r
  color: var(--theme-text-color);\r
  font-size: 16px;\r
  min-width: 40vw;\r
  min-height: 50vh;\r
  max-width: 100%;\r
  max-height: 100%;\r
  margin: 0;\r
}\r
\r
.PageContent .PageImg[src=""]:before,\r
.PageContent .PageImg:not([src]):before,\r
.PageContent .PageImg.imgBroken:before {\r
  content: attr(alt);\r
  position: absolute;\r
  top: 40%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
  white-space: pre-wrap;\r
  text-align: center;\r
  color: var(--theme-text-color);\r
  font-size: 16px;\r
}\r
\r
.PageFunctions {\r
  font-family: monospace;\r
  display: flex;\r
  justify-content: flex-end;\r
  align-items: center;\r
  margin: 0;\r
  padding: 0;\r
  gap: 3px;\r
  position: absolute;\r
  right: 0;\r
}\r
\r
.PageFunctions > .PageIndex {\r
  background-color: var(--mov-color-fill-loud);\r
  color: var(--mov-color-on-loud);\r
  min-width: 20px;\r
  text-align: center;\r
  display: inline-block;\r
  padding: 3px 5px;\r
  line-height: 1rem;\r
  border-radius: 5px;\r
}\r
\r
.PageFunctions .PageButton {\r
  padding: 3px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  margin: 0;\r
  border-width: 0;\r
  min-height: auto;\r
  opacity: 0.5;\r
}\r
\r
.PageFunctions:hover .PageButton {\r
  opacity: 1;\r
}\r
\r
.PageFunctions .PageButton:hover {\r
  opacity: 0.9;\r
}\r
\r
#Chapter.Vertical .separator {\r
  display: flex;\r
  align-items: center;\r
  text-align: center;\r
  font-style: italic;\r
}\r
\r
#Chapter.Vertical .separator::before,\r
#Chapter.Vertical .separator::after {\r
  content: "";\r
  flex: 1;\r
  border-bottom: 1px solid var(--theme-text-color);\r
}\r
\r
#Chapter.Vertical.separator:not(:empty)::before {\r
  margin-right: 0.25em;\r
}\r
\r
#Chapter.Vertical.separator:not(:empty)::after {\r
  margin-left: 0.25em;\r
}\r
\r
#Chapter:not(.separator) .separator,\r
#Chapter:not(.Vertical) .separator {\r
  display: none;\r
}\r
`)}
  ${k(`#Chapter.FluidLTR,\r
#Chapter.FluidRTL {\r
  display: flex;\r
  overflow-x: auto;\r
  min-width: auto;\r
\r
  .ZoomWidth {\r
    display: none;\r
  }\r
\r
  .PageImg {\r
    min-width: unset;\r
  }\r
\r
  .MangaPage {\r
    width: initial;\r
    min-width: fit-content;\r
    position: relative;\r
  }\r
\r
  .MangaPage.DoublePage {\r
    grid-column: span 2;\r
  }\r
}\r
\r
#Chapter.FluidLTR {\r
  flex-direction: row;\r
\r
  .MangaPage .PageFunctions {\r
    right: auto;\r
    left: 0;\r
    direction: rtl;\r
  }\r
}\r
\r
#Chapter.FluidRTL {\r
  flex-direction: row-reverse;\r
}\r
`)}
  ${k(`/* Book mode - Left to Right (Western comic/manga style) */\r
#Chapter:where(.Book, .Manga) {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
  grid-auto-flow: row;\r
  width: 100%;\r
  min-width: auto;\r
  gap: 0;\r
}\r
\r
#Chapter:where(.Book, .Manga) .MangaPage {\r
  width: 100%;\r
  display: block;\r
  position: relative;\r
  min-height: 22px;\r
  overflow: hidden;\r
}\r
\r
/* Default positioning for all controls in Book mode - top right */\r
#Chapter:where(.Book, .Manga) .MangaPage .PageFunctions {\r
  top: 0;\r
  right: 0;\r
  left: auto;\r
  flex-direction: row;\r
  border-radius: 0 0 0 4px;\r
}\r
\r
/* Left-side images - controls at top left with reversed order */\r
#Chapter:where(.Book, .Manga) .MangaPage.LeftPage .PageFunctions {\r
  right: auto;\r
  left: 0;\r
  flex-direction: row-reverse;\r
  border-radius: 0 0 4px 0;\r
}\r
\r
#Chapter:where(.Book, .Manga) .MangaPage.DoublePage {\r
  grid-column: span 2;\r
}\r
\r
#Chapter:where(.Book, .Manga) .MangaPage .PageContent {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  flex-shrink: 0;\r
  overflow: hidden;\r
}\r
\r
/* Left page - align image to the right (toward middle) */\r
#Chapter:where(.Book, .Manga) .MangaPage.LeftPage .PageContent {\r
  justify-content: flex-end;\r
  padding-right: 0;\r
}\r
\r
/* Right page - align image to the left (toward middle) */\r
#Chapter:where(.Book, .Manga) .MangaPage.RightPage .PageContent {\r
  justify-content: flex-start;\r
  padding-left: 0;\r
}\r
\r
/* Double page - center the image */\r
#Chapter:where(.Book, .Manga) .MangaPage.DoublePage .PageContent {\r
  justify-content: center;\r
}\r
\r
/* Manga mode - Right to Left (Traditional manga/comic style) */\r
#Chapter.Manga {\r
  direction: rtl;\r
}\r
\r
#Chapter.Manga .MangaPage {\r
  direction: ltr; /* Reset text direction for page contents */\r
}\r
`)}
  ${k(`#Chapter.Gallery {\r
  display: flex;\r
  flex-wrap: wrap;\r
  justify-content: center;\r
  gap: 10px;\r
  padding: 10px;\r
}\r
\r
.Gallery .MangaPage {\r
  width: auto;\r
  min-width: unset;\r
  flex: 0 1 auto;\r
}\r
\r
.Gallery .MangaPage .PageContent .PageImg {\r
  min-width: unset;\r
}\r
\r
.Gallery .PageFunctions,\r
.Gallery .separator {\r
  display: none;\r
}\r
`)}
  ${k(hn)}
  ${k(`@-webkit-keyframes spin {\r
  to {\r
    transform: rotate(360deg);\r
  }\r
}\r
\r
@keyframes spin {\r
  to {\r
    transform: rotate(360deg);\r
  }\r
}\r
\r
@-webkit-keyframes spin-reverse {\r
  0% {\r
    transform: rotate(360deg);\r
  }\r
\r
  to {\r
    transform: rotate(0);\r
  }\r
}\r
\r
@keyframes spin-reverse {\r
  0% {\r
    transform: rotate(360deg);\r
  }\r
\r
  to {\r
    transform: rotate(0);\r
  }\r
}\r
\r
.icon-tabler-loader-2,\r
.animate-spin {\r
  -webkit-animation: spin 1s linear infinite;\r
  animation: spin 1s linear infinite;\r
}\r
\r
.animate-spin-reverse {\r
  -webkit-animation: spin-reverse 1s linear infinite;\r
  animation: spin-reverse 1s linear infinite;\r
}\r
`)}
`,q0=(t="#MangaOnlineViewer",e=p("theme"))=>{const o=Ko(e),n=Re(e),r=p("colorScheme")==="dark"?o[8]:o[2],i=Re(r);return D`
    :where(:root),
    ${k(t)}, .dark,
    ${k(t)}.dark {
      --theme-primary-color: ${k(e)};;
      --theme-primary-text-color: ${k(n)};;
      --theme-secondary-color: ${k(r)};;
      --theme-secondary-text-color: ${k(i)};;

      color-scheme: dark;
      --theme-body-background: ${k(P.dark[600])};;
      --theme-body-text-color: ${k(P.dark[50])};;
      --theme-text-color: ${k(P.dark[50])};;
      --theme-background-color: ${k(P.dark[600])};;
      --theme-hightlight-color: ${k(P.dark[500])};;
      --theme-border-color: ${k(P.dark[400])};;

      --mov-color-fill-quiet: ${k(o[9])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${k(o[8])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${k(o[8])};;
      --mov-color-border-normal: ${k(o[7])};;
      --mov-color-border-loud: ${k(o[6])};;
      --mov-color-on-quiet: ${k(o[4])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${k(o[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${k(t)};.light {
      color-scheme: light;
      --theme-body-background: ${k(P.gray[50])};;
      --theme-body-text-color: ${k(P.gray[900])};;
      --theme-text-color: ${k(P.gray[900])};;
      --theme-background-color: ${k(P.gray[50])};;
      --theme-hightlight-color: ${k(P.gray[500])};;
      --theme-border-color: ${k(P.gray[100])};;

      --mov-color-fill-quiet: ${k(o[0])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${k(o[1])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${k(o[1])};;
      --mov-color-border-normal: ${k(o[2])};;
      --mov-color-border-loud: ${k(o[4])};;
      --mov-color-on-quiet: ${k(o[6])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${k(o[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},Q0=`#StartMOV {\r
  all: revert;\r
  backface-visibility: hidden;\r
  font-size: 32px;\r
  color: #fff;\r
  cursor: pointer;\r
  margin: 0 auto;\r
  padding: 0.5rem 1rem;\r
  text-align: center;\r
  border: none;\r
  border-radius: 10px;\r
  min-height: 50px;\r
  width: 80%;\r
  position: fixed;\r
  right: 0;\r
  left: 0;\r
  bottom: 0;\r
  z-index: 105000;\r
  transition: all 0.4s ease-in-out;\r
  background-size: 300% 100%;\r
  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\r
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r
}\r
\r
#StartMOV:hover {\r
  background-position: 100% 0;\r
  transition: all 0.4s ease-in-out;\r
}\r
\r
#StartMOV:focus {\r
  outline: none;\r
}\r
\r
#pagesSliderVal {\r
  display: block;\r
  text-align: center;\r
  margin-top: 15px;\r
  font-weight: bold;\r
}\r
`,fe=class extends C{constructor(...e){super(...e),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[k(Q0)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(e,o){this.dispatchEvent(new CustomEvent("start",{detail:{begin:e,end:o}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(e){e.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return m`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${h("STARTING")}</span>
        <div style="padding: 1rem;">${h("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${P.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${P.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return m`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${h("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){this.beginPage??=this.begin,this.endPage??=this.mangaPages;const e=o=>{this.beginPage=o.detail.value[0],this.endPage=o.detail.value[1]};return m`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${h("STARTING")}</span>
        <div style="padding: 1rem;">
          ${h("CHOOSE_BEGINNING")}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <mov-slider
              id="pagesSlider"
              dual
              show-tooltip
              show-ticks
              tick-count="10"
              step="1"
              .value=${[this.beginPage,this.endPage]}
              min="0"
              max="${this.mangaPages}"
              @input=${e}
            ></mov-slider>
            <output
              id="pagesSliderVal"
              class="RangeValue"
              for="pagesSlider"
            >
              [${String(this.beginPage).padStart(3,"0")} ,
              ${String(this.endPage).padStart(3,"0")}]
            </output>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${P.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(this.beginPage??0,this.endPage??this.mangaPages)}
            style="--mov-color-fill-loud: ${P.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};l([u({type:Number,reflect:!0})],fe.prototype,"mangaPages",void 0),l([u({type:Number,reflect:!0})],fe.prototype,"begin",void 0),l([u({type:Number})],fe.prototype,"timeoutMs",void 0),l([u({type:String,reflect:!0})],fe.prototype,"status",void 0),l([B()],fe.prototype,"beginPage",void 0),l([B()],fe.prototype,"endPage",void 0),fe=l([O("script-startup")],fe);function Y0(t){if(!t?.parentNode)return t;const e=t.cloneNode(!0);return t.parentNode.replaceChild(e,t),e}var X0=t=>{t.getAttributeNames().forEach(e=>{t?.removeAttribute(e)})},K0=(...t)=>{t?.forEach(X0),t?.forEach(Y0)};function J0(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Sn,Ct=class extends C{constructor(...e){super(...e),this.loadMode="wait"}static{this.styles=[D``,k(j0)]}async start(e,o){this.manga&&(document.documentElement.hasAttribute("mov")||(K0(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),S("manga",{...this.manga,begin:e??this.manga.begin,pages:o??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),O0(),x0()}render(){const e=f("manga"),o=f("dialog");return m`
      <style>
        ${q0()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${N({[p("colorScheme")]:!0,hideControls:p("hidePageControls"),bookmarked:!!Ne(),[f("device")]:!0})}"
        style="${re({[`padding-${p("navbar")}`]:"34px"})}"
        .locale="${p("locale")}"
      >
        ${e?m` <reader-header .manga=${e}></reader-header>
              ${Z0(e)}
              <navbar-thumbnails .mode=${p("navbar")}></navbar-thumbnails>
              <manga-pagination
                .mode="${p("pagination")}"
                .startPage=${e.begin}
                .totalPages=${e.pages}
                .currentPage=${f("currentPage")}
                .next=${e.next}
                .prev=${e.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>`:m(Sn||(Sn=J0([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              status="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,this.loadMode==="never"?"late-start-button":"initial-prompt",n=>{this.start(n.detail?.begin,n.detail?.end)})}
        ${o?m`
              <mov-dialog
                open
                .icon=${o.icon}
                @close=${()=>S("dialog",null)}
              >
                <span slot="label">${o.title}</span>
                ${o.content} ${o.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};l([u({type:String,reflect:!0})],Ct.prototype,"loadMode",void 0),l([u({type:Object})],Ct.prototype,"manga",void 0),Ct=l([O("manga-online-viewer"),(0,ze.useStores)(z,$e,U)],Ct);var ed=[`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`,`/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`,`#nprogress .bar {\r
  background: #29d;\r
  position: fixed;\r
  z-index: 1031;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 4px;\r
}\r
\r
html[mov] body > *:not(manga-online-viewer, #nprogress) {\r
  /* biome-ignore lint/complexity/noImportantStyles: requirement */\r
  display: none !important;\r
}\r
\r
html[mov] {\r
  all: unset;\r
  font-size: 16px;\r
}\r
`].join(`
`);async function td([t,e]){w(`Found Pages: ${e.pages} in ${t?.name}`),e.title||(e.title=document.querySelector("title")?.textContent?.trim()),e.begin=Ne()??e.begin??1,e.before!==void 0&&(G("Executing Preparation"),await e.before(e.begin??0)),document.head.innerHTML+=hl("externals",ed),Zn(unsafeWindow.customElements.whenDefined("manga-online-viewer"),1e4).then(()=>{const o=document.createElement("manga-online-viewer");o.loadMode=t?.start??p("loadMode"),o.manga=e,document.body.appendChild(o),w("Viewer Ready",o)}).catch(o=>w("Define WebComponent failed",o))}async function od(t){w(`Starting ${Tt.script.name} ${Tt.script.version} on ${et()} ${Hn()} with ${Gn()}`),w(t.length,"Known Manga Sites:",t);const e=t.filter(n=>n.url.test(window.location.href));w(e.length,"Found sites:",e);const o=e.map(async n=>{w(`Testing site: ${n.name}`),await jn(n),G(n.name,"Passed");const r=await n.run();if(G("Processed site:",n,r),r.pages>0)return[n,r];throw new Error(`${n.name} found ${r.pages} pages`)});try{const n=await Promise.any(o);G("Going with",n[0].name),td(n)}catch(n){if(n instanceof AggregateError){w("All sites failed to run:");for(const r of n.errors)w(r.message)}else w("An unexpected error occurred:",n)}}var nd={eq:(t,e)=>t.textContent?.trim()===e,starts:(t,e)=>!!t.textContent?.trim()?.startsWith(e),ends:(t,e)=>!!t.textContent?.trim()?.endsWith(e)};function xn(t,e,o){const n=nd[o];if(!n)throw new Error(`Invalid matcherKey: ${o}`);return[...document.querySelectorAll(t)].filter(r=>_.castArray(e).some(i=>n(r,i)))}function rd(t,e,o){return xn(t,e,o)?.[0]}function so(t,e,o,n="a"){return rd(t,e,o)?.closest(n)??null}var Mn=(t,e)=>xn(t,e,"eq"),Me=(t,e,o="a")=>so(t,e,"eq",o),lo=(t,e,o="a")=>so(t,e,"starts",o),id=(t,e,o="a")=>so(t,e,"ends",o),ad={name:"Asura Scans",url:/https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/,homepage:"https://asurascans.com/",language:[I.ENGLISH],category:A.MANGA,waitEle:'astro-island[component-url*="ChapterReader"]',run(){const t=document.querySelector('astro-island[component-url*="ChapterReader"]'),e=JSON.parse(t?.getAttribute("props")||"{}"),o=e.seriesSlug?.[1],n=(e.pages?.[1]||[]).map(r=>r[1]?.url?.[1]).filter(Boolean);return{title:`${e.seriesName?.[1]} - Chapter ${e.chapterName?.[1]}`,series:`/comics/${o}`,pages:n.length,prev:Me("span","Prev","a")?.getAttribute("href")||document.querySelector('link[rel="prev"]')?.getAttribute("href")||void 0,next:Me("span","Next","a")?.getAttribute("href")||document.querySelector('link[rel="next"]')?.getAttribute("href")||void 0,listImages:n}}},sd={name:"Batoto",url:/https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/,homepage:"https://rentry.co/batoto",language:[I.ENGLISH],category:A.MANGA,waitEle:'div[name="image-item"] img, .page-img',run(){if(window.location.pathname.startsWith("/title")){window.location.search!=="?load=2"&&(window.location.search="?load=2");const e=[...document.querySelectorAll('div[name="image-item"] img')];return{title:document.querySelector("h6")?.textContent?.trim(),series:document.querySelector("h3 a")?.getAttribute("href"),pages:e.length,prev:id("span","Prev Chapter","a")?.getAttribute("href"),next:lo("span","Next Chapter","a")?.getAttribute("href"),listImages:e.map(o=>o.getAttribute("src")??"")}}const t=[...document.querySelectorAll(".page-img")];return{title:document.querySelector(".nav-title a")?.textContent?.trim(),series:document.querySelector(".nav-title a")?.getAttribute("href"),pages:t.length,prev:document.querySelector(".nav-prev a")?.getAttribute("href"),next:document.querySelector(".nav-next a")?.getAttribute("href"),listImages:t.map(e=>e.getAttribute("src")??"")}}},ld={name:"BilibiliComics",url:/https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,homepage:"https://www.bilibilicomics.net/",language:[I.ENGLISH],category:A.MANGA,waitEle:"#__NUXT_DATA__",async run(){const t=JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML??"").filter(e=>typeof e=="string"&&/.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(e));return{title:document.querySelector(".chapterTitle")?.textContent?.trim(),series:document.querySelector(".book-name")?.getAttribute("href"),pages:t.length,prev:document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),next:document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),listImages:t.map(e=>`https://static.comicfans.io/${e}`)}}},cd={name:"Comick",url:/https?:\/\/(www\.)?comick.io\/.+/,homepage:"https://comick.io/",language:[I.ENGLISH],category:A.MANGA,waitFunc(){return/\/([^/]+)-chapter.+$/.test(window.location.pathname)},waitEle:"#__NEXT_DATA__",waitTime:3e3,run(){const t=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??"")?.props?.pageProps,e=t?.chapter?.md_images?.map(o=>`https://meo.comick.pictures/${o?.b2key}`);return{title:t?.seoTitle??`${t.chapter?.md_comics?.title} ${t?.chapter?.chap}`,series:`/comic/${t?.chapter?.md_comics?.slug}`,pages:e?.length,prev:t?.prev?.href,next:t?.next?.href,listImages:e}}};async function dd(t){try{const e=await(await fetch(t)).blob();return new Promise((o,n)=>{const r=new FileReader;r.onloadend=()=>o(r.result),r.onerror=n,r.readAsDataURL(e)})}catch(e){return console.error(`Failed to convert blob URL ${t} to data URL:`,e),t}}async function hd(t,e,o){const n=document.createElement("div");n.style.cssText="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(33, 37, 41, 0.95); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-size: 20px;",n.innerHTML=`
    <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">MangaOnlineViewer</div>
    <div id="mov-loading-text">Preparing pages...</div>
    <div style="margin-top: 20px; width: 200px; height: 6px; background: #495057; border-radius: 3px; overflow: hidden;">
      <div id="mov-loading-bar" style="width: 0; height: 100%; background: #37b24d; transition: width 0.1s;"></div>
    </div>
  `,document.body.appendChild(n);const r=(s,c)=>{const v=c>0?Math.round(s/c*100):0,g=document.getElementById("mov-loading-text"),b=document.getElementById("mov-loading-bar");g&&(g.textContent=`Scrolling and waiting for pages to load: ${s} / ${c||"?"}`),b&&(b.style.width=c>0?`${v}%`:"50%")};r(0,t);const i=window.scrollY,a=[];try{for(let s=0;s<t;s++){let c=null,v=0;for(;v<5e3;){const y=[...document.querySelectorAll("img")].filter(e);if(y[s]){c=y[s];break}await new Promise(E=>setTimeout(E,100)),v+=100}if(!c){w(`Failed to find image element for page ${s+1}`);continue}c.scrollIntoView({behavior:"auto",block:"center"});let g=0,b="";for(;g<5e3;){const y=c.src||c.getAttribute("src")||"";if(y&&o(y)&&(c.naturalWidth>250||c.complete)){const E=c.naturalWidth||c.width||0;if(E===0||E>=250){b=y;break}}await new Promise(E=>setTimeout(E,100)),g+=100}b?a.push(b):(w(`Timeout waiting for image ${s+1} to load`),a.push(c.src||c.getAttribute("src")||"")),r(a.length,t)}}finally{window.scrollTo(0,i),n.remove()}if(a.length===0)throw new Error("No images collected from the page");return await Promise.all(a.map(async s=>s.startsWith("blob:")?await dd(s):s))}var Ot=null;if(typeof window<"u"&&window.location.hostname.includes("comix.to")){const t=JSON.parse;JSON.parse=(e,o)=>{const n=t(e,o);try{n?.result?.pages&&(Ot=n.result.pages,w("Intercepted chapter pages data from JSON.parse",Ot))}catch{}return n}}function ud(){const t=document.querySelector("#app-root");if(!t)return null;const e=Object.keys(t).find(n=>n.startsWith("__reactContainer")||n.startsWith("__reactFiber"));if(!e)return null;const o=[t[e]];for(;o.length>0;){const n=o.pop();if(n){if(n.stateNode?.props){const r=n.stateNode.props.client;if(r&&typeof r.getQueryCache=="function"){const i=r.getQueryCache().getAll();for(const a of i){const s=a.state.data;if(s?.result?.pages)return s.result.pages}}}if(n.memoizedProps){const r=n.memoizedProps.client||n.memoizedProps.value;if(r&&typeof r.getQueryCache=="function"){const i=r.getQueryCache().getAll();for(const a of i){const s=a.state.data;if(s?.result?.pages)return s.result.pages}}}n.child&&o.push(n.child),n.sibling&&o.push(n.sibling)}}return null}function pd(){const t=document.querySelector("#app-root");if(!t)return null;const e=Object.keys(t).find(n=>n.startsWith("__reactContainer")||n.startsWith("__reactFiber"));if(!e)return null;const o=[t[e]];for(;o.length>0;){const n=o.pop();if(!n)continue;const r=i=>{if(i&&typeof i.getQueryCache=="function"){const a=i.getQueryCache().getAll();for(const s of a){const c=s.state.data;if(c){if(Array.isArray(c)&&c.length>0&&(c[0].chapterNumber!==void 0||c[0].number!==void 0))return c;if(c.result&&Array.isArray(c.result.items)&&c.result.items.length>0){const v=c.result.items[0];if(v.chapterNumber!==void 0||v.number!==void 0||v.mangaId!==void 0)return c.result.items}}}}return null};if(n.stateNode?.props){const i=r(n.stateNode.props.client);if(i)return i}if(n.memoizedProps){const i=r(n.memoizedProps.client||n.memoizedProps.value);if(i)return i}n.child&&o.push(n.child),n.sibling&&o.push(n.sibling)}return null}function md(){const t=document.querySelector('select[aria-label*="page" i], select[class*="page" i], select[id*="page" i]');return t?t.querySelectorAll("option").length:0}function gd(){const t=[...document.querySelectorAll("span, div, button, option")];for(const e of t){const o=e.textContent||"",n=/^\s*1\s*(?:\/|of)\s*(\d+)\s*$/i.exec(o.trim());if(n){const r=parseInt(n[1],10);if(r>0&&r<500)return r}}return 0}function vd(){const t=[...document.querySelectorAll("a")];let e=null,o=null;for(const n of t){const r=n.getAttribute("href");if(!r?.includes("/title/")||!/\/\d+-chapter-/.test(r))continue;const i=(n.textContent||"").toLowerCase().trim(),a=(n.getAttribute("aria-label")||"").toLowerCase();(i.includes("next")||a.includes("next")||n.querySelector('[class*="next"]')||n.querySelector('[class*="right"]'))&&(e=r),(i.includes("prev")||i.includes("previous")||a.includes("prev")||a.includes("previous")||n.querySelector('[class*="prev"]')||n.querySelector('[class*="left"]'))&&(o=r)}return{prev:o,next:e}}function fd(){const t=[...document.querySelectorAll("a")],e=[];for(const c of t){const v=c.getAttribute("href");if(!v?.includes("/title/")||!/\/\d+-chapter-/.test(v))continue;const g=/-chapter-(\d+(\.\d+)?)/.exec(v);g&&e.push({href:v,num:parseFloat(g[1])})}if(e.length===0)return{prev:null,next:null};const o=new Set,n=e.filter(c=>{const v=c.href.split("#")[0].split("?")[0];return o.has(v)?!1:(o.add(v),!0)});n.sort((c,v)=>c.num-v.num);const r=window.location.pathname.split("#")[0].split("?")[0],i=n.findIndex(c=>c.href.includes(r)||r.includes(c.href));let a=null,s=null;return i!==-1&&(i>0&&(a=n[i-1].href),i<n.length-1&&(s=n[i+1].href)),{prev:a,next:s}}function bd(){const{prev:t,next:e}=vd();return t||e?{prev:t,next:e}:fd()}function Cn(t){if(!t.closest("#app-root")&&!t.closest(".rpage-body"))return!1;const e=t.src||t.getAttribute("src")||"";if(!e||e.includes("avatar")||e.includes("logo")||e.includes("icon")||e.includes("placeholder")||e.startsWith("data:image/svg+xml"))return!1;const o=t.naturalWidth||t.width||0;return!(o>0&&o<250)}function wd(t){return!t||t.includes("placeholder")||t.startsWith("data:image/svg+xml")||t.includes("loading")?!1:t.startsWith("data:")||t.startsWith("blob:")||t.includes("comix.to")||t.includes("static.comix.to")||t.includes("wowpic")}var kd={name:"Comix.to",homepage:"https://comix.to/",url:/https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,language:I.ENGLISH,category:A.MANGA,async run(){let t=0,e=null,o=null;for(;t<5e3&&(e||(e=ud()),o||(o=pd()),!(e&&o));)await new Promise(L=>setTimeout(L,100)),t+=100;!e&&Ot&&(e=Ot);let n=e?.items?.length||0;n===0&&(n=md()),n===0&&(n=gd()),n===0&&(n=[...document.querySelectorAll("#app-root img, .rpage-body img")].filter(Cn).length||40),w(`Identified expected page count: ${n}`);const r=await hd(n,Cn,wd),i=document.getElementById("initial-data"),a=i?JSON.parse(i.textContent||"{}"):{};let s="",c="";if(a.queries)for(const L of Object.keys(a.queries)){const ee=a.queries[L];if(ee?.title&&ee.url){s=ee.title,c=ee.url;break}}s||(s=document.querySelector("title")?.textContent?.trim()||""),c||(c=document.querySelector('a[href^="/title/"]:not([href*="-chapter-"])')?.getAttribute("href")||"");let v=null,g=null;const b=/\/title\/([^/]+)/.exec(window.location.pathname),y=b?b[1]:"",E=/\/(\d+)-chapter-/.exec(window.location.pathname),M=E?parseInt(E[1],10):0;if(o&&M&&y){const L=Z=>parseFloat(Z.number??Z.chapterNumber??"0"),ee=[...o].sort((Z,Je)=>L(Z)-L(Je)),be=ee.findIndex(Z=>parseInt(Z.id,10)===M);if(be!==-1){if(be>0){const Z=ee[be-1],Je=Z.number??Z.chapterNumber;v=`/title/${y}/${Z.id}-chapter-${Je}`}if(be<ee.length-1){const Z=ee[be+1],Je=Z.number??Z.chapterNumber;g=`/title/${y}/${Z.id}-chapter-${Je}`}}}if(!v&&!g){const L=bd();v=L.prev,g=L.next}return{title:s,series:c,pages:r.length,prev:v,next:g,listImages:r}}},yd={name:"DemonicScans",url:/https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/,homepage:"https://demonicscans.org/",language:[I.ENGLISH],category:A.MANGA,waitEle:'img.imgholder[src*="cdn.demoniclibs.com"]',async run(){const t=[...document.querySelectorAll('img.imgholder[src*="cdn.demoniclibs.com"]')].map(e=>e.getAttribute("data-src")||e.getAttribute("src")||"");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h1 a")?.getAttribute("href"),pages:t.length,prev:document.querySelector(".prevchap")?.getAttribute("href"),next:document.querySelector(".nextchap")?.getAttribute("href"),listImages:t}}},Ed={name:"Dynasty-Scans",url:/https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:[I.ENGLISH],category:A.MANGA,run(){return{title:document.querySelector("#chapter-title")?.textContent?.trim(),series:document.querySelector("#chapter-title a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:document.querySelector("#prev_link")?.getAttribute("href"),next:document.querySelector("#next_link")?.getAttribute("href"),listImages:unsafeWindow.pages.map(t=>t.image)}}},Id={name:"Flame Comics",url:/https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,homepage:"https://flamecomics.xyz/",language:[I.ENGLISH],category:A.MANGA,run(){const t="https://cdn.flamecomics.xyz/uploads/images/series",e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??""),o=e?.props?.pageProps?.chapter,n=_.keys(o?.images).map(r=>`${t}/${o?.series_id}/${o?.token}/${o?.images?.[r]?.name}?${o?.unix_timestamp}`);return{title:`${o?.title} ${o?.chapter}`,series:`../${o?.series_id}`,pages:n.length,prev:e?.props?.pageProps?.previous,next:e?.props?.pageProps?.next,listImages:n}}},_d={name:["FoOlSlide","Kireicake"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["https://github.com/saintly2k/FoOlSlideX","https://reader.kireicake.com"],language:[I.ENGLISH],obs:"Any Site that uses FoOLSlide",category:A.MANGA,waitEle:"img.open",run(){const t=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],e=t.findIndex(a=>{const s=a.querySelector("a")?.getAttribute("href");return s?window.location.href.startsWith(s):!1}),o=[...document.querySelectorAll(".topbar_right .dropdown li")],n=[...document.querySelectorAll(".inner img:not(.open)")],r=n.length>1?n.length:o.length,i={title:t.at(e)?.querySelector("a")?.textContent?.trim()??document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),pages:r,prev:t.at(e+1)?.querySelector("a")?.getAttribute("href"),next:t.at(e-1)?.querySelector("a")?.getAttribute("href")};return n.length>1?{...i,listImages:n.map(a=>a.getAttribute("src")??"")}:{...i,listPages:Array(r).fill(0).map((a,s)=>`${window.location.href.replace(/\/\d+$/,"")}/${s+1}`),img:"img.open"}}},Ad={name:["Ikigai Mangas - EltaNews","Ikigai Mangas - Ajaco"],url:/https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/,homepage:["https://visorikigai.eltanews.com/","https://visorikigai.ajaco.net/"],language:[I.SPANISH],category:A.MANGA,run(){const t=document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi)??[];return{title:document.querySelector("title")?.text.replace(" \u2014 Manga en l\xEDnea | MangaOni",""),pages:t?.length,prev:Me("span","Siguiente")?.getAttribute("href"),next:Me("span","Anterior")?.getAttribute("href"),listImages:t}}},Sd=t=>new Promise(e=>setTimeout(e,t));async function xd(t){const e=document.querySelector(".reader-content"),o=new Set,n=2e3,r=200;if(!e)return console.error("Error: '.reader-content' container not found."),[];let i=0;for(;o.size<t&&i<r;){e.scrollTop+=n,i++,await Sd(300);const a=document.querySelectorAll(".reader-page img");for(const s of a){const c=s.getAttribute("src");c&&c.length>0&&o.add(c)}if(console.log(`Attempt ${i}: Collected ${o.size} of ${t} sources.`),e.scrollHeight-e.clientHeight<=e.scrollTop&&o.size<t){console.warn(`Reached end of scrollable content. Stopping with ${o.size} sources.`);break}}return Array.from(o)}var Md={name:"Kagane",homepage:"https://kagane.org/",url:/https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/,language:I.ENGLISH,category:A.MANGA,waitEle:".reader-page img",async run(){const t=window.location.href,e=t.match(/series\/([^/]+)/)?.[1],o=t.match(/reader\/([^/]+)/)?.[1],n=localStorage.getItem("rsch_did"),r={};n&&(r["X-Rsch-Did"]=n);const i=await fetch(`https://api.kagane.org/api/v1/series/${e}`,{headers:r}).then(b=>b.json()),a=(await fetch(`https://api.kagane.org/api/v1/books/${e}`,{headers:r}).then(b=>b.json())).data.content,s=a.find(b=>b.id===o),c=a.findIndex(b=>b.id===o),v=a[c+1],g=a[c-1];return{title:`${i.data.name} - ${s?.metadata?.title}`,series:`/series/${e}`,pages:s?.media?.pagesCount??0,prev:v?`/series/${e}/books/${v.id}`:void 0,next:g?`/series/${e}/books/${g.id}`:void 0,listImages:await xd(s?.media?.pagesCount??0)}}},Cd={name:"KuManga",url:/https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,homepage:"https://www.kumanga.com/",language:[I.SPANISH],category:A.MANGA,run(){const t=document.querySelectorAll("select").item(1).querySelector("option[selected]");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h2 a")?.getAttribute("href"),pages:unsafeWindow.pUrl.length,prev:`/manga/leer/${t?.previousElementSibling?.getAttribute("value")}`,next:`/manga/leer/${t?.nextElementSibling?.getAttribute("value")}`,listImages:unsafeWindow.pUrl.map(e=>e.imgURL)}}},Od={name:"LectorXD",url:/https?:\/\/(www\.)?lectorxd\.com\/.+\/leer\/.+/,homepage:"https://lectorxd.com/",language:[I.SPANISH],category:A.MANGA,waitEle:".page-container img, img.page-image, .page-container, astro-island",run(){let t=[...document.querySelectorAll('.page-container img, img.page-image, .page-image img, div[class*="page-container"] img')].map(e=>e.getAttribute("data-src")||e.getAttribute("src")||"").filter(e=>e.trim().length>0).map(e=>e.startsWith("http")?e:new URL(e,window.location.href).href);if(t.length===0){const e=document.querySelector("astro-island")?.getAttribute("props");if(e){const o=e.match(/https?:\/\/[^"'\s\\]+\.(jpg|jpeg|png|webp|avif)[^"'\s\\]*/gi);o&&(t=o)}}return{title:document.querySelector("h1")?.textContent?.trim()||document.title?.replace(/\s*[-|]\s*Lector\s*XD.*$/i,"")?.trim()||void 0,series:document.querySelector('a[href*="/manga/"], a[href*="/manhwa/"], a[href*="/manhua/"], a[href*="/comic/"], a[href*="/series/"]')?.getAttribute("href")||window.location.pathname.replace(/\/leer\/.*/,""),pages:t.length,prev:document.querySelector('a[title*="Anterior" i], a[aria-label*="Anterior" i], a[name*="anterior" i]')?.getAttribute("href")||lo("a, span, button","Anterior")?.getAttribute("href")||document.querySelector('link[rel="prev"]')?.getAttribute("href")||void 0,next:document.querySelector('a[title*="Siguiente" i], a[aria-label*="Siguiente" i], a[name*="siguiente" i]')?.getAttribute("href")||lo("a, span, button","Siguiente")?.getAttribute("href")||document.querySelector('link[rel="next"]')?.getAttribute("href")||void 0,listImages:t}}},Td={name:"LeerCapitulo",url:/https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,homepage:"https://www.leercapitulo.co/",language:[I.SPANISH],category:A.MANGA,waitEle:"#page_select",run(){const t=[...document.querySelectorAll("#page_select option")].map(e=>e.getAttribute("value")??"");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(".chapter-title a")?.getAttribute("href"),pages:t.length,prev:document.querySelector(".pre")?.getAttribute("href"),next:document.querySelector(".next")?.getAttribute("href"),listImages:t}}},$d={name:"LHTranslation",url:/https?:\/\/(www\.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:[I.ENGLISH],category:A.MANGA,run(){const t=document.querySelector(".form-control option:checked"),e=[...document.querySelectorAll("img.chapter-img")];return{title:document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),series:document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.getAttribute("value"),next:t?.previousElementSibling?.getAttribute("value"),listImages:e.map(o=>o.getAttribute("src")??"")}}},Ld={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[I.RAW],category:A.MANGA,run(t){const e=t??parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:document.title==="MangaOnlineViewer Script"?e:0,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[V(1970,1400,"#2D1657"),V(985,1400,"#152C55"),V(985,1400,"#7A1420"),V(1970,1400,"#806D15"),V(985,1400,"#0F5B30"),V(1970,1400,"#1a3e3c"),V(985,1400,"#480f5b"),V(985,1400,"#a9bf7a"),V(985,1400,"#147a56"),V(1970,1400,"#190343"),V(985,1400,"#d5b91e"),V(985,1400,"#836ecd"),V(985,1400,"#bf19b2"),V(985,1400,"#152055"),...Array(e).fill(0).map(Qc)]}}},Dd={name:"M440",url:/https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,homepage:"https://m440.in/",language:[I.SPANISH],category:A.MANGA,run(){const t=[...document.querySelectorAll("#all img")],e=document.querySelector("#chapter-list li.active");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.firstElementChild?.getAttribute("href"),next:e?.previousElementSibling?.firstElementChild?.getAttribute("href"),listImages:t.map(o=>o.getAttribute("data-src")??"")}}},On=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function Tn(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(t=>{const e=[...t.attributes].filter(o=>/.*(src|url).*/i.test(o.name)&&!/^.*(blank|lazy|loading).*$/.test(o.value));return e.length===0?"":e.find(o=>On.test(o.value))?.value??t?.getAttribute("src")??""})}var Nd={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[I.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:A.MANGA,waitFunc:()=>{const t=Tn();return t.length>0&&t.every(e=>e&&On.test(e))},run(){const t=Tn();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:t.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:t}}},Rd={name:"MangaBall",homepage:"https://mangaball.net/",url:/https?:\/\/mangaball\.net\/chapter-detail\/.+/,language:I.ENGLISH,category:A.MANGA,run:async()=>{const t=[...document.querySelectorAll("script")].find(v=>v.textContent?.includes("chapterImages"))?.textContent;if(!t)return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:0,listImages:[]};const e=t.match(/titleId\s*=\s*[`'"](.+?)[`'"]/)?.[1],o=t.match(/chapterNumber\s*=\s*[`'"](.+?)[`'"]/)?.[1],n=t.match(/chapterVolume\s*=\s*[`'"](.+?)[`'"]/)?.[1],r=t.match(/chapterLanguage\s*=\s*[`'"](.+?)[`'"]/)?.[1],i=JSON.parse(t.match(/chapterImages\s*=\s*JSON\.parse\(\s*[`'"](.+?)[`'"]\s*\)/)?.[1]??t.match(/chapterImages\s*=.*(\[.*?\])/)?.[1]??"[]"),a=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")||"",s=((await(await fetch("/api/v1/chapter/chapter-listing-by-title-id/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":a},body:`title_id=${e}&lang=${r}`})).json()).ALL_CHAPTERS||[]).sort((v,g)=>g.number_float-v.number_float),c=v=>{const g=parseFloat(o||"0"),b=s.findIndex(L=>L.number_float===g);if(b===-1)return;const y=v==="next"?-1:1,E=b+y,M=String(n);for(let L=E;L>=0&&L<s.length;L+=y){const ee=s[L].translations.find(be=>be.language===r&&String(be.volume)===M);if(ee)return ee.url}};return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(`a[href*="${e}"]`)?.getAttribute("href")??document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:i.length,prev:c("prev"),next:c("next"),listImages:i}}},Pd={name:"MangaBuddy",url:/https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,homepage:"https://mangabuddy.com/",language:[I.ENGLISH],category:A.MANGA,waitVar:"chapImages",run(){const t=unsafeWindow.chapImages.split(",").map(e=>new URL(e).pathname.replace("/res/","https://sb.mbcdn.xyz/"));return{title:document.querySelector(".chapter-info")?.textContent?.trim(),series:document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),pages:t.length,prev:document.querySelector("a.prev")?.getAttribute("href"),next:document.querySelector("a.next")?.getAttribute("href"),listImages:t}}},zd={name:"MangaDex",url:/https?:\/\/(www\.)?mangadex.org/,homepage:"https://mangadex.org/",language:[I.ENGLISH],category:A.MANGA,waitEle:"#chapter-selector a",async run(){const t=`https://api.mangadex.org/at-home/server/${/\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1)}`,e=await fetch(t).then(async r=>r.json()),o=e.chapter.data,n=document.querySelectorAll("#chapter-selector a");return{title:document.querySelector("title")?.text.replace(" - MangaDex",""),series:document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),pages:o.length,prev:n?.item(0)?.getAttribute("href"),next:n?.item(1)?.getAttribute("href"),listImages:o.map(r=>`${e.baseUrl}/data/${e.chapter.hash}/${r}`)}}},Bd={name:["MangaFox","MangaHere"],url:/https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:[I.ENGLISH],category:A.MANGA,waitVar:"chapterid",async run(){const t=document.querySelector("#dm5_key")?.getAttribute("value"),e={method:"GET",headers:{"Content-Type":"text/plain"}},o=Array(unsafeWindow.imagecount).fill(0).map(async(r,i)=>{const a=`chapterfun.ashx?cid=${unsafeWindow.chapterid??unsafeWindow.chapter_id}&page=${i}&key=${t}`,s=await fetch(a,e).then(async c=>c.text());return(0,eval)(s),d}),n=await Promise.all(o);return{title:document.querySelector(".reader-header-title div")?.textContent?.trim(),series:document.querySelector(".reader-header-title a")?.getAttribute("href"),pages:unsafeWindow.imagecount,prev:unsafeWindow.prechapterurl,next:unsafeWindow.nextchapterurl,listImages:n.map((r,i)=>r[i===0?0:1])}}},Hd={name:"Mangago",url:/https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,homepage:"https://www.mangago.me/",language:[I.ENGLISH],category:A.MANGA,waitVar:"imgsrcs",run(){const t=CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e"),e={iv:CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef"),padding:CryptoJS.pad.ZeroPadding},o=CryptoJS.AES.decrypt(unsafeWindow.imgsrcs,t,e).toString(CryptoJS.enc.Utf8).split(",");return{title:`${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,series:unsafeWindow.mid,pages:unsafeWindow.total_pages,prev:document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),next:unsafeWindow.next_c_url,listImages:o,before(){o.some(n=>n==="")&&document.querySelector("#nform")?.submit()}}}},Gd={name:"MangaHub",url:/https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:[I.ENGLISH],category:A.MANGA,waitEle:"#select-chapter",async run(){function t(i){const a=new RegExp(`${i}=([^;]+)`).exec(document.cookie);return a!=null?decodeURIComponent(a[1]):null}const e={query:`{chapter(x:m01,slug:"${unsafeWindow.CURRENT_MANGA_SLUG??window.location.pathname.split("/")[2]}",number:${window.location.pathname.split("/")[3].replace("chapter-","")}){pages}}`},o={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json","x-mhub-access":t("mhub_access")??""}},n=await fetch("https://api.mghcdn.com/graphql",o).then(async i=>i.json()),r=JSON.parse(n?.data.chapter.pages.toString());return{title:document.querySelector("#mangareader h3")?.textContent?.trim(),series:document.querySelector("#mangareader a")?.getAttribute("href"),pages:r.i.length,prev:document.querySelector(".previous a")?.getAttribute("href"),next:document.querySelector(".next a")?.getAttribute("href"),listImages:r.i.map(i=>`https://imgx.mghcdn.com/${r.p+i}`)}}},Vd={name:["MangaKakalot","NeloManga ","MangaNato","NatoManga","MangaBats"],url:/https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,homepage:["https://mangakakalot.gg/","https://www.nelomanga.com/","https://www.manganato.gg/","https://www.natomanga.com/","https://www.mangabats.com/"],language:[I.ENGLISH],category:A.MANGA,waitEle:".navi-change-chapter-btn-prev, .next, .navi-change-chapter-btn-next, .back",run(){const t=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1")?.textContent?.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:t.length,prev:document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),next:document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),listImages:t.map(e=>e.getAttribute("src")??"")}}},Fd={name:"MangaOni",url:/https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,homepage:"https://manga-oni.com/",language:[I.SPANISH],category:A.MANGA,run(){document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));const t=document.querySelector("#c_list option:checked"),e=[...document.querySelectorAll("#slider img")];return{title:document.querySelector("title")?.text.replace(" \u2014 Manga en l\xEDnea | MangaOni",""),pages:e?.length,prev:t?.nextElementSibling?.getAttribute("value"),next:t?.previousElementSibling?.getAttribute("value"),listImages:e.map(o=>o.getAttribute("data-src")??o.getAttribute("src")??"")}}},Wd={name:"MangaPark",url:/https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,homepage:"https://mangapark.net/",language:[I.ENGLISH],category:A.MANGA,waitEle:"main div div a.btn-primary",run(){const t=[...document.querySelectorAll("main div div > img.w-full")];return{title:[...document.querySelectorAll(".comic-detail h3 a, .comic-detail h6 span")].map(e=>e.textContent?.trim()).join(" "),series:document.querySelector(".comic-detail a")?.getAttribute("href"),pages:t.length,prev:document.querySelectorAll("main div div a.btn-primary")?.item(0)?.getAttribute("href"),next:document.querySelectorAll("main div div a.btn-primary")?.item(1)?.getAttribute("href"),listImages:t.map(e=>e.getAttribute("src")??"")}}},Ud={name:"MangaReader",url:/https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:[I.ENGLISH],category:A.MANGA,obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",async run(){const t=document.querySelector(".chapter-item.active"),e=[...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")].map(async o=>{const n=o.getAttribute("data-url")??"";return n&&o.classList.contains("shuffled")?(await imgReverser(n)).toDataURL():n});return{title:document.querySelector(".hr-manga h2")?.textContent?.trim(),series:document.querySelector(".hr-manga")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.querySelector("a")?.getAttribute("href"),next:t?.previousElementSibling?.querySelector("a")?.getAttribute("href"),listImages:await Promise.all(e)}}},Zd={name:["MangaStream WordPress Plugin","Realm Oasis","Voids-Scans","Luminous Scans","Shimada Scans","Night Scans","Manhwa-Freak","OzulScansEn","CypherScans","MangaGalaxy","LuaScans","Drake Scans","Rizzfables","NovatoScans","TresDaos","Lectormiau","NTRGod","Threedaos"],url:/https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,homepage:["https://themesia.com/mangastream-wordpress-theme/","https://realmoasis.com/","https://void-scans.com/","https://luminous-scans.com/","https://shimadascans.com/","https://night-scans.com/","https://freakcomic.com/","https://ozulscansen.com/","https://cypherscans.xyz/","https://mangagalaxy.me/","https://luascans.com/","https://drake-scans.com/","https://rizzfables.com/","https://www.novatoscans.top/","https://tresdaos.com","https://zonamiau.com/","https://ntrgod.com/","https://threedaos.zdrz.xyz/"],language:[I.ENGLISH,I.SPANISH],category:A.MANGA,waitEle:':where(#readerarea, .check-box, #viewer-img) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"]),:where(.nextprev, .inner_nPL)',run(){const t=[...document.querySelectorAll(this.waitEle??"")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(":where(.allc, .tac) a")?.getAttribute("href")??document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),pages:t.length,prev:Mn(":where(.nextprev, .inner_nPL) a",["Prev","Anterior"])?.[0]?.getAttribute("href"),next:Mn(":where(.nextprev, .inner_nPL) a",["Next","Siguiente"])?.[0]?.getAttribute("href"),listImages:t.map(e=>e.getAttribute("data-src")??e.getAttribute("data-lazy-src")??e.getAttribute("src")??"")}}},jd={name:"MangaToons",url:/https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,homepage:"https://mangatoon.mobi/",language:[I.ENGLISH],category:A.MANGA,waitEle:".pictures img:not(.cover)",run(){const t=[...document.querySelectorAll(".pictures img:not(.cover)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".top-left a")?.getAttribute("href"),pages:t.length,prev:document.querySelector(".page-icons-prev")?.getAttribute("href"),next:document.querySelector(".page-icons-next")?.getAttribute("href"),listImages:t.map(e=>e.getAttribute("data-src")??"")}}},qd={name:"MangaTown",url:/https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//,homepage:"https://www.mangatown.com/",language:[I.ENGLISH],category:A.MANGA,waitEle:"div.page_select select option, .read_img .image",run(){const t=document.querySelector("div.page_select select")?.querySelectorAll("option"),e=[...document.querySelectorAll(".read_img .image")].map(n=>n.getAttribute("src")??""),o=[...t??[]].map(n=>n.value).filter(n=>!n.endsWith("featured.html")).map(n=>new URL(n,window.location.href).href);return{title:document.querySelector("div.title h1")?.textContent?.trim(),series:document.querySelector("div.title a")?.getAttribute("href"),pages:unsafeWindow.total_pages||o.length,prev:document.querySelector(".chapter_select option:checked")?.previousElementSibling?.getAttribute("value"),next:document.querySelector(".chapter_select option:checked")?.nextElementSibling?.getAttribute("value"),...e.length>1?{listImages:e}:{listPages:o,img:"#image"}}}},Qd={name:"ManhwaWeb",url:/https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,homepage:"https://manhwaweb.com/",language:[I.SPANISH],category:A.MANGA,async run(){const t=window.location.pathname.replace("/leer",""),e=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/see${t}`).then(async n=>n.json()),o=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${t}`).then(async n=>n.json());return{title:`${e.name} ${e.chapter.chapter}`,series:[...document.querySelectorAll("div")].filter(n=>n.textContent==="Episodios")?.[0]?.parentElement?.getAttribute("href"),pages:e.chapter.img.length,prev:o.chapterAnterior.replace(e._id,e.real_id),next:o.chapterSiguiente.replace(e._id,e.real_id),listImages:e.chapter.img}}},Yd={name:["MangaGeko.com","MangaGeko.cc"],url:/https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,homepage:["https://www.mgeko.com/","https://www.mgeko.cc/"],language:[I.ENGLISH],category:A.MANGA,run(){const t=[...document.querySelectorAll('img[id^="image-"]')];return{title:document.querySelector(".titles")?.textContent?.trim(),series:document.querySelector(".titles a")?.getAttribute("href"),pages:t.length,prev:document.querySelector(".chnav.prev:not(.isDisabled)")?.getAttribute("href"),next:document.querySelector(".chnav.next:not(.isDisabled)")?.getAttribute("href"),listImages:t.map(e=>e.getAttribute("src")??"")}}},Xd={name:"NineAnime",url:/https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,homepage:"https://www.nineanime.com/",language:[I.ENGLISH],category:A.MANGA,run(){const t=[...document.querySelectorAll(".sl-page option")],e=document.querySelector(".mangaread-pagenav select option[selected]");return{title:`${document.querySelector(".title h1")?.textContent?.trim()}/${document.querySelector(".title h2")?.textContent?.trim()}`,series:document.querySelector(".title a:has(h2)")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listPages:t.map(o=>o.getAttribute("value")??""),img:".manga_pic"}}},Kd={name:"Olympus",url:/https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/,homepage:"https://olympusxyz.com/",language:[I.SPANISH],category:A.MANGA,run(){const t=[...document.querySelectorAll("section img.w-full.h-full")];return{title:document.querySelector("title")?.textContent?.replace(/\|.+/,"").trim(),series:document.querySelector("h1")?.closest("a")?.getAttribute("href"),pages:t.length,prev:document.querySelector('a[name="capitulo anterior"]')?.getAttribute("href"),next:document.querySelector('a[name="capitulo siguiente"]')?.getAttribute("href"),listImages:t.map(e=>e.getAttribute("src")??"")}}},Jd={name:"Qi Manga",url:/https?:\/\/(www\.)?qimanga\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanga.com/",language:[I.ENGLISH],category:A.MANGA,waitEle:"img.r-page-img",run(){const t=[...document.querySelectorAll("img.r-page-img")],e=document.querySelector(".r-page-counter")?.textContent??"",o=Number.parseInt(e.split("/").pop()?.trim()??"",10)||t.length,n=document.querySelector("#ng-state")?.textContent??"",r=/"navigation":\{"prev":\{"slug":"([^"]+)"[\s\S]*?"next":\{"slug":"([^"]+)"/.exec(n),i=document.querySelector(".r-back")?.getAttribute("href"),a=s=>i?`${i}/${s}`:void 0;return{title:document.querySelector("h1.sr-only")?.textContent?.trim(),series:i,pages:o,prev:r?a(r[1]):void 0,next:r?a(r[2]):void 0,listImages:t.map(s=>s.getAttribute("src")??"")}}},e1={name:"QiManhwa",url:/https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanhwa.com/",language:[I.ENGLISH],category:A.MANGA,waitEle:'img[alt*="Chapter"]',run(){const t=[...document.querySelectorAll('img[alt*="Chapter"]')];return{title:document.querySelector("h1")?.textContent?.trim(),series:Me("button","Home","a")?.getAttribute("href"),pages:t.length,prev:document.querySelector(".lucide-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".lucide-chevron-right")?.closest("a")?.getAttribute("href"),listImages:t.map(e=>e.getAttribute("src")??"")}}},t1={name:"ReadComicsOnline",url:/https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:[I.ENGLISH],category:A.COMIC,run(){const t=[...document.querySelectorAll("#all img")];return{title:unsafeWindow.title.replace(/ - Page \d+/,""),series:document.querySelector("div.pager-cnt a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:unsafeWindow.prev_chapter,next:unsafeWindow.next_chapter,listImages:t.map(e=>e.getAttribute("data-src")??"")}}},o1={name:"ReaperScans",url:/https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,homepage:"https://reaperscans.com/",language:[I.ENGLISH],category:A.MANGA,waitEle:"#content .container img:not(.rounded)",run(){const t=[...document.querySelectorAll("#content .container img:not(.rounded)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),pages:t.length,prev:document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),listImages:t.map(e=>(e.getAttribute("data-src")||e.getAttribute("src"))??"")}}},n1={name:"ReiManga",url:/https?:\/\/(www\.)?reimanga\.com\/manga\/[^/]+-\d+\/\d+/,homepage:"https://reimanga.com/",language:[I.ENGLISH],category:A.MANGA,waitEle:"img",run(){const t=document.getElementById("__NEXT_DATA__"),e=t?JSON.parse(t.textContent??"{}")?.props?.pageProps??null:null,o=e?.chapter?.images??e?.chapter?.img??null,n=Array.isArray(o)?o.map(E=>typeof E=="string"?E:E?.url??E?.src??""):[...document.querySelectorAll("img")].filter(E=>{const M=E.getAttribute("src")??"";return/\/(manga|chapter|uploads?|files?|images?)\//i.test(M)||/(cdn|media|img|static)/i.test(M)}).map(E=>E.getAttribute("src")??"").filter(E=>E.startsWith("http")),r=window.location.pathname.split("/").filter(Boolean),i=r.length>1?`/${r.slice(0,2).join("/")}`:void 0,a=e?.series?.slug!==void 0?`/manga/${e.series.slug}`:document.querySelector('a[href*="/manga/"]')?.getAttribute("href")??i,s=document.querySelector('select[aria-label="Jump to chapter"]'),c=s?[...s.options]:[],v=s?.selectedIndex??-1,g=v+1<c.length?c[v+1]?.value:void 0,b=v-1>=0?c[v-1]?.value:void 0,y=E=>E&&a?`${a}/${E}`:void 0;return{title:e?.title??(`${e?.chapters?.[0]?.series_name??e?.manga?.name??e?.series?.name??""} ${e?.chapters?.[0]?.name??e?.chapter?.name??e?.chapter?.number??""}`.trim()||document.title.replace(/ –.*| -.*| \|.*/,"").trim()),series:a,pages:n.length,prev:y(g),next:y(b),listImages:n}}},r1={name:"TuMangaOnline",url:/https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,homepage:"https://zonatmo.org/",language:[I.SPANISH],category:A.MANGA,run(){const t=[...document.querySelectorAll(".img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page")],e=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option")],o=t.length>1?t.length:e.length;return{title:document.querySelector("title")?.textContent?.trim(),series:(document.querySelector('a[title="Volver"]')??document.querySelector(".breadcrumb-item:nth-child(2) a")??document.querySelector(".book-name a")??document.querySelector(".breadcrumb-item a"))?.getAttribute("href"),pages:o||1,prev:(document.querySelector(".chapter-prev a")??document.querySelector(".prev_page")??document.querySelector("a.prev-chapter")??document.querySelector(".chapter-prev-btn"))?.getAttribute("href"),next:(document.querySelector(".chapter-next a")??document.querySelector(".next_page")??document.querySelector("a.next-chapter")??document.querySelector(".chapter-next-btn"))?.getAttribute("href"),...t.length<=1&&e.length>1?{listPages:Array(e.length).fill(0).map((n,r)=>`${window.location.href.replace(/\/\d+$/,"")}/${r+1}`)}:{listImages:t.map(n=>n.getAttribute("data-src")??n.getAttribute("data-original")??n.getAttribute("src")??"")},img:"#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img",before(){if(window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade")),window.location.pathname.includes("view_uploads")){const n=document.querySelector("a.btn.btn-primary, .btn-primary a, a.btn-block");n&&n.click()}}}}},i1={name:"Vortex Scans",url:/https?:\/\/(www.)?(vortexscans).(org)\/.+/,homepage:"https://vortexscans.org/",language:[I.ENGLISH],category:A.MANGA,waitVar:"__next_f",waitFunc(){return unsafeWindow.__next_f.find(t=>/images/.test(t?.[1]))?.length>0},run(){const t=unsafeWindow.__next_f.find(o=>/images/.test(o?.[1]))?.[1],e=t.slice(t.indexOf("images")).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g)??[];return{title:document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),series:document.querySelector("time")?.closest("a")?.getAttribute("href"),pages:e?.length,prev:Me("button","Prev","a")?.getAttribute("href"),next:Me("button","Next","a")?.getAttribute("href"),listImages:e}}};od([ad,sd,ld,cd,kd,yd,Ed,Id,Ad,Md,Cd,Td,Od,$d,Ld,Dd,Pd,zd,Bd,Hd,Gd,Vd,Rd,Fd,Wd,Ud,jd,qd,Qd,Yd,Xd,Kd,Jd,e1,t1,o1,n1,r1,{name:"WebNovel",url:/https?:\/\/(www\.)?webnovel.com\/comic\/.+/,homepage:"https://www.webnovel.com/",language:[I.ENGLISH],category:A.MANGA,waitVar:"g_data",run(){const t=unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(e=>e.url);return{title:document.querySelector("title")?.textContent?.trim(),series:"./",pages:t.length,prev:`${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,next:`${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,listImages:t}}},{name:"WebToons",url:/https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,homepage:"https://www.webtoons.com/",language:[I.ENGLISH],category:A.MANGA,run(){const t=[...document.querySelectorAll("#_imageList img")];return{title:document.querySelector(".subj_info")?.textContent?.trim(),series:document.querySelector(".subj_info a")?.getAttribute("href"),pages:t.length,prev:document.querySelector("._prevEpisode")?.getAttribute("href"),next:document.querySelector("._nextEpisode")?.getAttribute("href"),listImages:t.map(e=>e.getAttribute("data-url")??e.getAttribute("data-src")??e.getAttribute("src")??"")}}},{name:"WeebCentral",url:/https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,homepage:"https://weebcentral.com/",language:[I.ENGLISH],category:A.MANGA,waitEle:'section[hx-get*="/images"]',async run(){if(document.documentElement.hasAttribute("mov"))return{pages:0,listImages:[]};const t=document.querySelector('section[hx-get*="/images"]')?.getAttribute("hx-get");if(!t)throw new Error("Images HTMX endpoint not found");const e=`${t.replace(/&amp;/g,"&")}&reading_style=long_strip`,o=await fetch(e,{headers:{"HX-Request":"true"}}).then(g=>g.text()),n=new DOMParser,r=[...n.parseFromString(o,"text/html").querySelectorAll("img")].map(g=>g.getAttribute("src")||g.getAttribute("data-src")||"").filter(g=>g&&!g.includes("broken_image")).map(g=>g.startsWith("http")?g:new URL(g,window.location.origin).href),i=[...new Set(r)].sort((g,b)=>{const y=g.match(/-(\d+)\.[^.]+$/),E=b.match(/-(\d+)\.[^.]+$/);return(y?parseInt(y[1],10):0)-(E?parseInt(E[1],10):0)}),a=document.querySelector('button[hx-get*="chapter-select"]')?.getAttribute("hx-get"),s=await fetch(a??"",{headers:{"HX-Request":"true"}}).then(g=>g.text()),c=n.parseFromString(s,"text/html").querySelector("#selected_chapter"),v=g=>g?g.startsWith("http")?g:new URL(g,window.location.origin).href:null;return{title:document.title.split(" - ")[0].trim(),series:v(document.querySelector("main section a.btn-ghost")?.getAttribute("href")),pages:i.length,prev:v(c?.nextElementSibling?.getAttribute("href")),next:v(c?.previousElementSibling?.getAttribute("href")),listImages:i,fetchOptions:{headers:{"HX-Request":"true",Referer:window.location.href}}}}},{name:"WeebDex",url:/https?:\/\/(www\.)?weebdex\.org\/.+/,homepage:"https://weebdex.org/",language:I.ENGLISH,category:A.MANGA,waitEle:'a[href^="/title/"]',async run(){const t=/\/chapter\/([^/]+)/.exec(window.location.pathname)?.at(1),e=`https://api.weebdex.org/chapter/${t}`,o=await fetch(e).then(async s=>s.json()),n=document.querySelector('a[href^="/title/"]'),r=`https://api.weebdex.org/manga/${o.relationships.manga.id}/aggregate?lang=${o.language}`,i=(await fetch(r).then(async s=>s.json())).chapters||[],a=i.findIndex(s=>s.chapter===o.chapter);return{title:document.querySelector("title")?.textContent?.trim().replace(/Page \d+:/,""),series:n?.getAttribute("href"),pages:o.data.length,prev:i[a+1]?`/chapter/${_.keys(i[a+1].entries)[0]}`:void 0,next:i[a-1]?`/chapter/${_.keys(i[a-1].entries)[0]}`:void 0,listImages:o.data.map(s=>`${o.node}/data/${t}/${s.name}`)}}},i1,{name:"ZeroScans",url:/https?:\/\/(www\.)?zscans.com\/comics\/.+/,homepage:"https://zscans.com/",language:[I.ENGLISH],category:A.MANGA,waitVar:"__ZEROSCANS__",run(){const t=unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,e=document.querySelectorAll(".v-btn--router");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),pages:t.length,prev:e[0]?.getAttribute("href"),next:e[1]?.getAttribute("href"),listImages:t}}},Zd,_d,Nd]).catch(w)})();
