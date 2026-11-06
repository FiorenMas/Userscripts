// ==UserScript==
// @name Youtube Tools All in one local download mp3 mp4 HIGT QUALITY return dislikes and more
// @name:en Youtube Tools All in one local download mp3 mp4.
// @homepage     https://github.com/DeveloperMDCM/
// @version      2.5.2
// @author       DeveloperMDCM
// @match        *://www.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-end
// @grant        GM_registerMenuCommand
// @connect      p.savenow.to
// @connect      savenow.to
// @connect      p.lbserver.xyz
// @connect      lbserver.xyz
// @connect      dubs.io
// @connect      *
// @require      https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/js/iziToast.min.js
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @compatible edge
// @license MIT
// @namespace https://github.com/DeveloperMDCM/
// @keywords youtube, tools, download, mp3, mp4, hi-quality, return, dislikes, audio free, download mp3, download mp4, audio mp3, audio mp4, audio download, audio, free download, free audio, download audio, download free, hi quality, high quality, best quality, best audio quality, best free audio quality, best free quality, best audio free quality, best audio free, best free audio, best free
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.meta.js
// ==/UserScript==
(function(){"use strict";let Q=document.location.href;const ve=!!globalThis.__YT_TOOLS_EXTENSION__,u=e=>document.querySelector(e),i=e=>document.getElementById(e),j=e=>document.querySelectorAll(e),ie=(e,t)=>document.createElement(e),x=(e,t)=>document.documentElement.style.setProperty(e,t),ao=e=>document.body.appendChild(e),ot="https://returnyoutubedislikeapi.com/Votes?videoId=",ro="https://translate.googleapis.com/translate_a/t";let se="#0c0c0c",le="#ffffff",ce="#ff0000";const Ge="https://greasyfork.org/es/scripts/460680-youtube-tools-all-in-one-local-download-mp3-mp4-higt-quality-return-dislikes-and-more",vn="https://p.savenow.to/ajax/download.php?copyright=0&allow_extended_duration=1&",io="dfcb6d76f2f6a9894gjkege8a4ab232222",so=["https://p.savenow.to","https://p.lbserver.xyz"],lo="https://dubs.io/wp-json/tools/v1/download-video",co="https://dubs.io/wp-json/tools/v1/status-video",$e={af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",bg:"Bulgarian",ca:"Catalan",ceb:"Cebuano","zh-CN":"Chinese (Simplified)","zh-TW":"Chinese (Traditional)",co:"Corsican",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",fi:"Finnish",fr:"French",fy:"Frisian",gl:"Galician",ka:"Georgian",de:"German",el:"Greek",gu:"Gujarati",ht:"Haitian Creole",ha:"Hausa",haw:"Hawaiian",iw:"Hebrew",hi:"Hindi",hmn:"Hmong",hu:"Hungarian",is:"Icelandic",ig:"Igbo",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",jw:"Javanese",kn:"Kannada",kk:"Kazakh",km:"Khmer",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",lo:"Lao",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"Macedonian",mg:"Malagasy",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mn:"Mongolian",my:"Myanmar (Burmese)",ne:"Nepali",no:"Norwegian",ny:"Nyanja (Chichewa)",ps:"Pashto",fa:"Persian",pl:"Polish",pt:"Portuguese",pa:"Punjabi",ro:"Romanian",ru:"Russian",sm:"Samoan",gd:"Scots Gaelic",sr:"Serbian",st:"Sesotho",sn:"Shona",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",so:"Somali",es:"Spanish",su:"Sundanese",sw:"Swahili",sv:"Swedish",tl:"Tagalog (Filipino)",tg:"Tajik",ta:"Tamil",te:"Telugu",th:"Thai",tr:"Turkish",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",cy:"Welsh",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",zu:"Zulu"};let de=null,Ee="dinamica",X=null,we=null,Be=null,Ye=null,E=null,S=null,G=null,oe=0,nt=null,ne=[],at=!1;const po=.05,rt=240,pe=rt/90,Ke="wave_visualizer_processed",m={dynamicStyleEl:null,dynamicCssLast:"",settingsLoaded:!1,bookmarkClickHandlerInitialized:!1,bookmarksPanelOpen:!1,continueWatching:{enabled:!1,map:null,flushT:null,boundVideo:null,boundVideoId:null,lastSaveAt:0,lastSavedTime:-1,lastKnownVideoId:null,navHandlerInitialized:!1,panelOpen:!1,clickHandlerInitialized:!1,pagehideHandlerInitialized:!1,handlers:null},shortsChannelName:{enabled:!1,observer:null,io:null,scanT:null,cache:new Map,inflight:new Map,fetchChain:Promise.resolve()},dislikesCache:{videoId:null,dislikes:null,ts:0},downloadClickHandlerInitialized:!1,transcriptClickHandlerInitialized:!1,transcriptPanelOpen:!1,shortsObserver:null,statsObserver:null,statsIntervalId:null,lockupCachedStatsObserver:null,lockupCachedStatsObserveTarget:null,lockupCachedStatsIntervalId:null,updateShortsViewsButton:function(){},updateShortsRatingButton:function(){}};function uo(e=""){if(!m.dynamicStyleEl){const t=document.createElement("style");t.id="yt-tools-mdcm-dynamic-style",document.head.appendChild(t),m.dynamicStyleEl=t}m.dynamicCssLast!==e&&(m.dynamicCssLast=e,m.dynamicStyleEl.textContent=e)}const Je=(()=>{let e=null;return()=>{m.settingsLoaded&&(clearTimeout(e),e=setTimeout(()=>{try{kt()}catch(t){console.error("applySettings error:",t)}},120))}})();function ue(){const e=i("wave-visualizer-canvas");e&&(e.style.opacity="0",G&&(G.style.opacity="0"))}function Ve(){const e=i("wave-visualizer-canvas");X&&X.state==="suspended"&&X.resume(),e&&(e.style.opacity="1",G&&(G.style.opacity="1"))}function O(e="info",t="",o=""){const n={success:"Success",error:"Error",info:"Information",warning:"Warning"};iziToast[e]({title:o||n[e]||"Notification",message:t,position:"bottomLeft"})}async function fo(e,t){const o=window.location.href;if(t.dataset.downloading==="true")return;try{t.__ytDownloadPoll&&(clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null)}catch{}const n=t.querySelector(".download-btn"),a=t.querySelector(".retry-btn"),l=t.querySelector(".progress-retry-btn"),s=t.querySelector(".download-again-btn"),c=t.querySelector(".progress-container"),d=t.querySelector(".progress-fill"),y=t.querySelector(".progress-text"),f=t.querySelector(".download-text");t.dataset.downloading="true",t.dataset.urlOpened="false",t.dataset.lastDownloadUrl="",n.style.display="none",a.style.display="none",l.style.display="block",s&&(s.style.display="none"),c.style.display="flex",d.style.width="0%",y.textContent="0%";const k=(P,C=2e4)=>{const $=typeof GM_xmlhttpRequest=="function"?GM_xmlhttpRequest:typeof GM<"u"&&typeof GM.xmlHttpRequest=="function"?GM.xmlHttpRequest.bind(GM):null;if($)return new Promise((z,K)=>{let ke=!1;const ee=(b,g)=>{ke||(ke=!0,b(g))};$({method:"GET",url:String(P),timeout:C,anonymous:!0,headers:{Accept:"application/json, text/plain, */*"},onload:b=>{const g=Number(b.status)||0;if(g<200||g>=300){ee(K,new Error(`HTTP ${g}`));return}try{const T=b.responseText??"";ee(z,T?JSON.parse(T):{})}catch(T){ee(K,T instanceof Error?T:new Error(String(T)))}},onerror:()=>ee(K,new Error("Network error")),ontimeout:()=>ee(K,new Error("Request timeout")),onabort:()=>ee(K,new Error("Request aborted"))})});const F=new AbortController,V=setTimeout(()=>F.abort(),C);return fetch(P,{signal:F.signal}).then(async z=>{if(!z.ok)throw new Error(`HTTP ${z.status}`);return z.json()}).finally(()=>clearTimeout(V))},h=()=>{a.style.display="block",c.style.display="none",l.style.display="none",s&&(s.style.display="none"),t.dataset.downloading="false",t.dataset.urlOpened="false",t.dataset.lastDownloadUrl=""},L=P=>{if(!P){h();return}if(t.dataset.lastDownloadUrl=String(P),t.dataset.urlOpened!=="true"){t.dataset.urlOpened="true",t.classList.add("completed"),t.classList.remove("video","audio"),f.textContent="Download Complete!",d.style.width="100%",y.textContent="100%",l.style.display="none",s&&(s.style.display="flex"),t.dataset.downloading="false";try{window.open(P)}catch(C){console.warn("Could not open download URL:",C)}}},I=P=>{t.__ytDownloadPoll=setInterval(async()=>{try{const C=await k(P,15e3),$=Math.min((Number(C.progress)||0)/10,100);d.style.width=`${$}%`,y.textContent=`${Math.round($)}%`,Number(C.progress)>=1e3&&C.download_url&&(clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null,L(C.download_url))}catch(C){console.error("Error in progress:",C),clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null,h()}},3e3)},N=async P=>{const C=new URL("/ajax/download.php",P);C.searchParams.set("copyright","0"),C.searchParams.set("allow_extended_duration","1"),C.searchParams.set("format",String(e)),C.searchParams.set("url",o),C.searchParams.set("api",io);const $=await k(C.toString(),25e3);if(!$?.success||!$?.progress_url)throw new Error("SaveNow provider did not return success/progress_url");return $},B=async()=>{const P=st();if(!P)throw new Error("Missing videoId");const C=new URL(lo);C.searchParams.set("id",P),C.searchParams.set("format",String(e));const $=await k(C.toString(),25e3);if(!$?.success||!$?.progressId)throw new Error("Dubs provider did not return success/progressId");const F=new URL(co);F.searchParams.set("id",$.progressId),t.__ytDownloadPoll=setInterval(async()=>{try{const V=await k(F.toString(),2e4),z=Number(V?.progress)||0,K=Math.min(z/10,100);d.style.width=`${K}%`,y.textContent=`${Math.round(K)}%`,V?.finished&&V?.downloadUrl&&(clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null,L(V.downloadUrl))}catch(V){console.error("\u274C Error polling dubs status:",V),clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null,h()}},3e3)};try{let P=null,C=null;for(const $ of so)try{P=await N($);break}catch(F){C=F}if(P?.success&&P?.progress_url){I(P.progress_url);return}console.warn("SaveNow providers failed, falling back to dubs.io",C),await B()}catch(P){h(),console.error("\u274C Error starting download:",P)}}const mo=1e3,fe={USAGE:"YT_TOTAL_USAGE",VIDEO:"YT_VIDEO_TIME",SHORTS:"YT_SHORTS_TIME"};let Oe=GM_getValue(fe.USAGE,0),He=GM_getValue(fe.VIDEO,0),Re=GM_getValue(fe.SHORTS,0),Et=Date.now(),Pe=null,it=null;GM_setValue(fe.USAGE,Oe),GM_setValue(fe.VIDEO,He),GM_setValue(fe.SHORTS,Re);function xe(e,t){const o=[{value:1,symbol:""},{value:1e3,symbol:" K"},{value:1e6,symbol:" M"}],n=/\.0+$|(\.[0-9]*[1-9])0+$/,a=o.slice().reverse().find(l=>e>=l.value);return a?(e/a.value).toFixed(t).replace(n,"$1")+a.symbol:"0"}function st(){return new URLSearchParams(window.location.search).get("v")}const Y={BOOKMARKS:"ytBookmarksMDCM",CONTINUE_WATCHING:"ytContinueWatchingMDCM",SHORTS_CHANNEL_CACHE:"ytShortsChannelCacheMDCM",LIKES_DISLIKES_CACHE:"ytLikesDislikesCacheMDCM",VERSION_CHECK_LAST:"ytVersionCheckLastMDCM"},go="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.meta.js",ho=1440*60*1e3,bo=576*60*60*1e3,yo=10080*60*1e3,Pt=500;function vo(e){try{const o=_e(Y.SHORTS_CHANNEL_CACHE,{})?.[e];return!o||typeof o.channelName!="string"||Date.now()-(Number(o.ts)||0)>bo?null:o.channelName}catch{return null}}function _t(e,t){if(!(!e||typeof t!="string"))try{const o=_e(Y.SHORTS_CHANNEL_CACHE,{});o[e]={channelName:t,ts:Date.now()};const n=Object.entries(o).sort((l,s)=>(Number(s[1]?.ts)||0)-(Number(l[1]?.ts)||0)),a=Object.fromEntries(n.slice(0,Pt));Se(Y.SHORTS_CHANNEL_CACHE,a)}catch{}}function Ce(e){try{const o=_e(Y.LIKES_DISLIKES_CACHE,{})?.[e];if(!o||Date.now()-(Number(o.ts)||0)>yo)return null;const a=Number(o.dislikes),l=Number(o.likes),s=Number(o.viewCount),c=Number(o.rating);return{likes:Number.isFinite(l)?l:null,dislikes:Number.isFinite(a)?a:null,viewCount:Number.isFinite(s)?s:null,rating:Number.isFinite(c)&&c>=0&&c<=5?c:null}}catch{return null}}function lt(e,t,o,n,a){if(e)try{const l=_e(Y.LIKES_DISLIKES_CACHE,{});l[e]={likes:t??null,dislikes:o??null,viewCount:n??null,rating:a??null,ts:Date.now()};const s=Object.entries(l).sort((d,y)=>(Number(y[1]?.ts)||0)-(Number(d[1]?.ts)||0)),c=Object.fromEntries(s.slice(0,Math.min(Pt,300)));Se(Y.LIKES_DISLIKES_CACHE,c)}catch{}}function q(){try{return location.pathname.startsWith("/shorts/")?location.pathname.split("/").filter(Boolean)[1]||null:location.href.includes("youtube.com/watch")?st():null}catch{return null}}function _e(e,t){try{const o=GM_getValue(e,"");return o?JSON.parse(o):t}catch{return t}}function Se(e,t){try{GM_setValue(e,JSON.stringify(t))}catch(o){console.error("writeJsonGM error:",o)}}function ko(e,t){if(!e||!t)return!1;const o=s=>String(s).trim().split(".").map(c=>parseInt(c,10)||0),n=o(e),a=o(t),l=Math.max(n.length,a.length);for(let s=0;s<l;s++){const c=n[s]||0,d=a[s]||0;if(c>d)return!0;if(c<d)return!1}return!1}async function wo(){try{const e=GM_getValue(Y.VERSION_CHECK_LAST,0);if(Date.now()-e<ho)return;GM_setValue(Y.VERSION_CHECK_LAST,Date.now());const t=await fetch(go,{cache:"no-store"});if(!t.ok)return;const n=(await t.text()).match(/@version\s+([\d.]+)/);if(!n)return;const a=n[1].trim(),l=typeof GM_info<"u"&&GM_info.script&&GM_info.script.version?String(GM_info.script.version).trim():"";if(!l||!ko(a,l))return;const s="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js";iziToast.info({title:"Nueva versi\xF3n disponible",message:"YouTube Tools v"+a+" est\xE1 disponible. Haz clic para actualizar.",position:"bottomLeft",timeout:12e3,progressBar:!0,closeOnClick:!0,onclick:function(){window.open(s,"_blank")}})}catch{}}function Ae(e){const t=Math.max(0,Math.floor(Number(e)||0)),o=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return o>0?`${o}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function Qe(){return document.querySelector("#movie_player video.video-stream.html5-main-video")||document.querySelector("ytd-player video.video-stream.html5-main-video")||document.querySelector("video.video-stream.html5-main-video")||document.querySelector("video")}function xo(){try{const e=u("ytd-watch-metadata h1 yt-formatted-string")?.textContent?.trim()||u("h1.ytd-watch-metadata yt-formatted-string")?.textContent?.trim()||"",t=u("#owner ytd-channel-name a, ytd-video-owner-renderer ytd-channel-name a, #text-container.ytd-channel-name a")?.textContent?.trim()||u('#owner a[href^="/@"], #owner a[href^="/channel/"]')?.textContent?.trim()||"",o=(e||document.title||"").replace(/\s*-\s*YouTube\s*$/i,"").trim(),n=(t||"").trim(),s=((typeof unsafeWindow<"u"&&unsafeWindow?unsafeWindow:window)?.ytInitialPlayerResponse||window.ytInitialPlayerResponse)?.videoDetails||null,c=(o||s?.title||document.title||"").replace(/\s*-\s*YouTube\s*$/i,"").trim(),d=(n||s?.author||"").trim(),y=s?.thumbnail?.thumbnails,f=Array.isArray(y)&&y[y.length-1]?.url||"";return{title:c,author:d,thumb:f}}catch{return{title:"",author:"",thumb:""}}}function je(){const e=m.continueWatching;return e.map||(e.map=_e(Y.CONTINUE_WATCHING,{})),(typeof e.map!="object"||!e.map)&&(e.map={}),e.map}function ct(e,t=200){try{const o=Object.entries(e||{}).filter(([,l])=>l&&typeof l=="object");o.sort((l,s)=>(Number(s[1].updatedAt)||0)-(Number(l[1].updatedAt)||0));const n=o.slice(0,t),a={};for(const[l,s]of n)a[l]=s;return a}catch{return e||{}}}function At(){const e=m.continueWatching;clearTimeout(e.flushT),e.flushT=setTimeout(()=>{try{if(!e.map)return;e.map=ct(e.map,200),Se(Y.CONTINUE_WATCHING,e.map)}catch{}},800)}function Xe(e){if(!e)return;const t=m.continueWatching,o=je();o&&Object.prototype.hasOwnProperty.call(o,e)&&(delete o[e],t.map=o,At())}function dt(e,t,o){if(!e)return;const n=m.continueWatching,a=je(),l=Math.max(0,Math.floor(Number(t)||0)),s=Math.max(0,Math.floor(Number(o)||0)),c=a[e]&&typeof a[e]=="object"?a[e]:{},d=xo();a[e]={t:l,d:s,updatedAt:Date.now(),title:d.title||c.title||"",author:d.author||c.author||"",thumb:d.thumb||c.thumb||""},n.map=a,At()}function Co(e){if(!e)return null;const o=je()?.[e],n=Number(o?.t);return Number.isFinite(n)?n:null}function Z(){if(!!!m.continueWatching.enabled||!Me())return;const o=q();if(!o)return;const n=Qe(),a=Co(o),l=Number(n?.duration),s=Number.isFinite(l)&&l>0;if(!(!a||a<5)&&s&&a>=l-5){Xe(o);return}}function De(){const e=m.continueWatching,t=i("yt-cw-history-toggle"),o=i("yt-continue-watching-panel");if(!t||!o)return;let n=!0;try{n=JSON.parse(GM_getValue("ytSettingsMDCM","{}")||"{}").btnContinueWatching!==!1}catch{}if(!(!!e.enabled&&n)||!Me()){t.style.display="none",o.style.display="none";return}t.style.display="inline-flex",o.style.display=e.panelOpen?"block":"none"}function So(e){const t=String(e||"");return typeof CSS<"u"&&CSS.escape?CSS.escape(t):t.replace(/["\\]/g,"\\$&")}function pt(e){try{const t=m.continueWatching;if(!t.enabled||!t.panelOpen||!Me())return!1;const o=i("yt-continue-watching-panel");if(!o)return!1;const n=So(e),a=o.querySelector(`.yt-cw-item[data-video-id="${n}"]`);if(!a)return!1;const l=je()?.[e],s=Number(l?.t);if(!Number.isFinite(s))return!1;const c=a.querySelector(".yt-cw-meta");if(!c)return!1;const d=String(l?.author||"").trim();return c.textContent=`${Ae(s)}${d?` \u2022 ${d}`:""}`,!0}catch{return!1}}function kn(e,t){const o=Number(t),n=`/watch?v=${encodeURIComponent(e)}${Number.isFinite(o)?`&t=${Math.max(0,Math.floor(o))}s`:""}`;try{const a=document.createElement("a");a.href=n,a.target="_self",a.rel="noopener",a.style.display="none",document.body.appendChild(a),a.click(),a.remove();return}catch{}location.href=n}function me(){const e=i("yt-continue-watching-panel");if(!e)return;const t=m.continueWatching;if(!t.enabled||!t.panelOpen||!Me()){e.style.display="none";return}const o=ct(je(),200);t.map=o;const n=q(),a=Object.entries(o).map(([d,y])=>({videoId:d,...y})).filter(d=>d.videoId&&Number.isFinite(Number(d.t))&&Number(d.t)>=5).sort((d,y)=>(Number(y.updatedAt)||0)-(Number(d.updatedAt)||0)).slice(0,25);e.replaceChildren();const l=document.createElement("div");l.className="yt-cw-header";const s=document.createElement("div");s.className="yt-cw-header-title",s.textContent="Continue watching";const c=document.createElement("button");if(c.type="button",c.className="yt-cw-clear",c.textContent="Clear",c.dataset.cwAction="clearAll",l.appendChild(s),l.appendChild(c),e.appendChild(l),!a.length){const d=document.createElement("div");d.className="yt-cw-empty",d.textContent="No history yet. Watch a bit, then reopen any video.",e.appendChild(d);return}for(const d of a){const y=document.createElement("div");y.className="yt-cw-item",y.dataset.videoId=d.videoId;const f=document.createElement("div");f.className="yt-cw-thumb-wrap";const k=document.createElement("img");k.className="yt-cw-thumb",k.loading="lazy",k.decoding="async",k.alt="";const h=(d.thumb||"").trim()||`https://i.ytimg.com/vi/${encodeURIComponent(d.videoId)}/hqdefault.jpg`;k.src=h,f.appendChild(k);const L=document.createElement("div");L.className="yt-cw-info";const I=document.createElement("div");I.className="yt-cw-title";const N=(d.title||"").trim();I.textContent=N||d.videoId;const B=document.createElement("div");B.className="yt-cw-meta";const P=(d.author||"").trim();B.textContent=`${Ae(d.t)}${P?` \u2022 ${P}`:""}`,L.appendChild(I),L.appendChild(B);const C=document.createElement("div");C.className="yt-cw-actions";const $=Math.max(0,Math.floor(Number(d.t)||0));let F=null;if(n&&n===d.videoId){const z=document.createElement("button");z.type="button",z.className="yt-cw-go",z.textContent="Resume",z.dataset.cwAction="seek",z.dataset.t=String($),F=z}else{const z=document.createElement("a");z.className="yt-simple-endpoint yt-cw-go",z.textContent="Resume",z.href=`/watch?v=${encodeURIComponent(d.videoId)}&t=${$}s`,z.target="_self",z.rel="noopener",F=z}const V=document.createElement("button");V.type="button",V.className="yt-cw-del",V.textContent="\u2715",V.title="Delete",V.dataset.cwAction="del",V.dataset.videoId=d.videoId,C.appendChild(F),C.appendChild(V),y.appendChild(f),y.appendChild(L),y.appendChild(C),e.appendChild(y)}}function To(e){const t=m.continueWatching;if(t.enabled=!!e,!t.navHandlerInitialized){t.navHandlerInitialized=!0;const s=()=>{try{const c=q();t.lastKnownVideoId!==c?(t.lastKnownVideoId=c,t.lastSaveAt=0,t.lastSavedTime=-1,t.boundVideoId=c,Z(),De(),t.panelOpen&&me()):(Z(),De(),t.panelOpen&&me())}catch{}};window.addEventListener("yt-navigate-finish",s,!0),window.addEventListener("popstate",s,!0),window.addEventListener("hashchange",s,!0)}t.clickHandlerInitialized||(t.clickHandlerInitialized=!0,document.addEventListener("click",s=>{const c=s.target;if(!(c instanceof Element))return;const d=c.closest("#yt-cw-history-toggle"),y=c.closest("[data-cw-action]");if(d){s.preventDefault(),s.stopPropagation(),t.panelOpen=!t.panelOpen,De(),t.panelOpen&&me();return}if(y){const f=y.getAttribute("data-cw-action");if(!f)return;if(s.preventDefault(),s.stopPropagation(),f==="clearAll"){t.map={},Se(Y.CONTINUE_WATCHING,{}),me(),Z();try{O("success","History cleared")}catch{}return}if(f==="del"){const k=y.getAttribute("data-video-id")||"";k&&Xe(k),me(),Z();return}if(f==="seek"){const k=Number(y.getAttribute("data-t")),h=Qe();if(!h||!Number.isFinite(k))return;h.currentTime=Math.max(0,k),h.play?.().catch(()=>{});try{O("success",`Resume: ${Ae(k)}`)}catch{}Z();return}}},!0)),t.pagehideHandlerInitialized||(t.pagehideHandlerInitialized=!0,window.addEventListener("pagehide",()=>{try{if(!t.enabled||!Me())return;const s=q(),c=Qe();if(!s||!c)return;const d=Number(c.currentTime),y=Number(c.duration);Number.isFinite(d)&&d>=5&&dt(s,d,y),t.flushT&&(clearTimeout(t.flushT),t.flushT=null),t.map&&Se(Y.CONTINUE_WATCHING,ct(t.map,200))}catch{}},{capture:!0}));const o=i("yt-cw-history-toggle"),n=i("yt-continue-watching-panel");if(o&&!t.enabled&&(o.style.display="none"),n&&!t.enabled&&(n.style.display="none"),!t.enabled||!Me()){try{t.boundVideo&&t.handlers&&(t.boundVideo.removeEventListener("timeupdate",t.handlers.timeupdate),t.boundVideo.removeEventListener("pause",t.handlers.pause),t.boundVideo.removeEventListener("ended",t.handlers.ended),t.boundVideo.removeEventListener("loadedmetadata",t.handlers.loadedmetadata),t.boundVideo.removeEventListener("seeked",t.handlers.seeked))}catch{}t.boundVideo=null,t.boundVideoId=null,t.handlers=null,Z(),De();return}const a=Qe(),l=q();if(!a||!l){Z(),De();return}if(t.boundVideoId!==l&&(t.boundVideoId=l,t.lastSaveAt=0,t.lastSavedTime=-1),t.boundVideo&&t.boundVideo!==a&&t.handlers){try{t.boundVideo.removeEventListener("timeupdate",t.handlers.timeupdate),t.boundVideo.removeEventListener("pause",t.handlers.pause),t.boundVideo.removeEventListener("ended",t.handlers.ended),t.boundVideo.removeEventListener("loadedmetadata",t.handlers.loadedmetadata),t.boundVideo.removeEventListener("seeked",t.handlers.seeked)}catch{}t.boundVideo=null,t.boundVideoId=null,t.handlers=null}t.boundVideo=a,t.boundVideoId=l,t.handlers||(t.handlers={timeupdate:()=>{try{if(!t.enabled)return;const s=q();if(!s)return;const c=Date.now();if(c-t.lastSaveAt<5e3||a.paused)return;const d=Number(a.currentTime),y=Number(a.duration);if(!Number.isFinite(d)||Math.abs(d-t.lastSavedTime)<2||(t.lastSaveAt=c,t.lastSavedTime=d,d<5))return;dt(s,d,y),Z(),t.panelOpen&&(pt(s)||me())}catch{}},pause:()=>{try{if(!t.enabled)return;const s=q();if(!s)return;const c=Number(a.currentTime),d=Number(a.duration);if(!Number.isFinite(c))return;c<5?Xe(s):dt(s,c,d),Z(),t.panelOpen&&(pt(s)||me())}catch{}},ended:()=>{try{const s=q();s&&Xe(s),Z(),t.panelOpen&&me()}catch{}},loadedmetadata:()=>{Z(),t.panelOpen&&me()},seeked:()=>{Z();const s=q();t.panelOpen&&s&&pt(s)}},a.addEventListener("timeupdate",t.handlers.timeupdate,{passive:!0}),a.addEventListener("pause",t.handlers.pause,{passive:!0}),a.addEventListener("ended",t.handlers.ended,{passive:!0}),a.addEventListener("loadedmetadata",t.handlers.loadedmetadata,{passive:!0}),a.addEventListener("seeked",t.handlers.seeked,{passive:!0})),Z(),De()}function Mo(e){if(m.shortsChannelName.enabled=!!e,document.documentElement.dataset.mdcmShortsChannelName=e?"1":"0",!e){try{m.shortsChannelName.observer?.disconnect?.()}catch{}try{m.shortsChannelName.io?.disconnect?.()}catch{}m.shortsChannelName.observer=null,m.shortsChannelName.io=null,clearTimeout(m.shortsChannelName.scanT),m.shortsChannelName.scanT=null;return}const t=m.shortsChannelName,o=f=>(f.querySelector('a[href^="/shorts/"]')?.getAttribute("href")||"").match(/\/shorts\/([^/?]+)/)?.[1]||null,n=f=>f.querySelector(".ShortsLockupViewModelHostOutsideMetadataSubhead, .shortsLockupViewModelHostOutsideMetadataSubhead, .ShortsLockupViewModelHostMetadataSubhead, .shortsLockupViewModelHostMetadataSubhead"),a=f=>{const k=f?.parentElement;if(!k)return null;let h=k.querySelector(".yt-tools-shorts-channel-name");return h||(h=document.createElement("div"),h.className="yt-tools-shorts-channel-name",h.textContent="",k.insertBefore(h,f)),h},l=f=>{const k=f.querySelector('a[href^="/@"], a[href^="/channel/"]');return(k?.textContent||k?.getAttribute("title")||"").trim()||null},s=f=>(t.fetchChain=t.fetchChain.then(async()=>{if(t.cache.has(f))return t.cache.get(f);let k=null;try{k=await fetch(`/watch?v=${f}`,{method:"GET",credentials:"same-origin",cache:"force-cache"})}catch{return""}if(!k?.ok)return"";const h=await k.text(),L=h.indexOf('itemprop="author"');if(L<0)return"";const I=h.lastIndexOf("<span",L),N=h.indexOf("</span>",L);if(I<0||N<0)return"";const B=h.slice(I,N+7);return(new DOMParser().parseFromString(B,"text/html").querySelector('link[itemprop="name"]')?.getAttribute("content")||"").trim()}),t.fetchChain),c=(f,k)=>{const h=t.cache.get(f);if(h)return Promise.resolve(h);const L=vo(f);if(L)return t.cache.set(f,L),Promise.resolve(L);const I=l(k);if(I)return t.cache.set(f,I),_t(f,I),Promise.resolve(I);const N=t.inflight.get(f);if(N)return N;const B=s(f).then(P=>{const C=(P||"").trim();return C&&(t.cache.set(f,C),_t(f,C)),C}).finally(()=>{t.inflight.delete(f)});return t.inflight.set(f,B),B},d=f=>{if(!(f instanceof Element)||f.dataset.ytToolsShortsChannelProcessed==="1")return;const k=n(f);if(!k)return;const h=o(f);if(!h)return;f.dataset.ytToolsShortsChannelProcessed="1",f.dataset.ytToolsShortsVideoId=h;const L=a(k);L&&(L.textContent="",t.io?.observe(f))};t.io||(t.io=new IntersectionObserver(f=>{for(const k of f){if(!k.isIntersecting)continue;const h=k.target,L=h?.dataset?.ytToolsShortsVideoId,N=n(h)?.parentElement?.querySelector?.(".yt-tools-shorts-channel-name");if(!L||!N){t.io.unobserve(h);continue}c(L,h).then(B=>{B&&(N.textContent=B)}).finally(()=>{t.io.unobserve(h)})}},{threshold:.15}));const y=()=>{clearTimeout(t.scanT),t.scanT=setTimeout(()=>{document.querySelectorAll("ytm-shorts-lockup-view-model, ytm-shorts-lockup-view-model-v2").forEach(d)},120)};t.observer||(t.observer=new MutationObserver(y),t.observer.observe(document.body,{childList:!0,subtree:!0})),y()}function Lo(e){const t=e.querySelector('a[href*="watch?v="]');if(t){const n=(t.getAttribute("href")||"").match(/[?&]v=([^&]+)/);if(n)return n[1]}const o=e.querySelector('[class*="content-id-"]');if(o){const n=o.className.match(/content-id-([A-Za-z0-9_-]+)/);if(n)return n[1]}return null}function Ue(e,t){const o=document.createElement("div");o.innerHTML=e.trim();const n=o.firstElementChild;return n?(n.setAttribute("width",String(t||14)),n.setAttribute("height",String(t||14)),n.style.display="inline-block",n.style.verticalAlign="middle",n.style.marginRight="2px",n):null}const Eo='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" /></svg>',Dt='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>',It='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>';function Ie(){window.location.href.includes("youtube.com")&&document.querySelectorAll("yt-lockup-view-model").forEach(e=>{if(e.hasAttribute("data-yt-tools-lockup-stats"))return;const t=Lo(e);if(!t)return;const o=Ce(t);if(!o)return;const n=o.rating!=null,a=o.likes!=null,l=o.dislikes!=null;if(!n&&!a&&!l)return;const s=e.querySelector("yt-content-metadata-view-model");if(!s)return;const c=document.createElement("div");c.className="yt-content-metadata-view-model__metadata-row",c.setAttribute("data-yt-tools-lockup-stats-row","1");const d=document.createElement("span");d.className="yt-core-attributed-string yt-content-metadata-view-model__metadata-text yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--link-inherit-color",d.setAttribute("dir","auto"),d.setAttribute("role","text");const y=()=>document.createTextNode(" \xB7 ");if(n){const f=Ue(Eo,14);f&&d.appendChild(f),d.appendChild(document.createTextNode(" "+o.rating.toFixed(1))),(a||l)&&d.appendChild(y())}if(a){const f=Ue(Dt,14);f&&d.appendChild(f),d.appendChild(document.createTextNode(" "+xe(o.likes,0))),l&&d.appendChild(y())}if(l){const f=Ue(It,14);f&&d.appendChild(f),d.appendChild(document.createTextNode(" "+xe(o.dislikes,0)))}c.appendChild(d),s.appendChild(c),e.setAttribute("data-yt-tools-lockup-stats",t)})}function Po(e){if(e.dataset.ytToolsShortsVideoId)return e.dataset.ytToolsShortsVideoId;var t=e.querySelector('a[href^="/shorts/"]');if(!t)return null;var o=(t.getAttribute("href")||"").match(/\/shorts\/([^/?]+)/);return o?o[1]:null}function ze(){window.location.href.includes("youtube.com")&&document.querySelectorAll("ytm-shorts-lockup-view-model").forEach(function(e){if(!e.hasAttribute("data-yt-tools-shorts-stats")){var t=Po(e);if(t){var o=Ce(t);if(o){var n=o.likes!=null,a=o.dislikes!=null;if(!(!n&&!a)){var l=e.querySelector(".ShortsLockupViewModelHostOutsideMetadataSubhead,.shortsLockupViewModelHostOutsideMetadataSubhead,.ShortsLockupViewModelHostMetadataSubhead,.shortsLockupViewModelHostMetadataSubhead");if(!(!l||!l.parentElement)){var s=document.createElement("span");s.className="yt-core-attributed-string yt-content-metadata-view-model__metadata-text yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--link-inherit-color yt-tools-shorts-stats-row",s.setAttribute("dir","auto"),s.setAttribute("role","text"),s.setAttribute("style","color: #aaa !important;");var c=function(){return document.createTextNode(" \xB7 ")};if(n){var d=Ue(Dt,12);d&&(d.style.setProperty("color","#aaa","important"),s.appendChild(d)),s.appendChild(document.createTextNode(" "+xe(o.likes,0))),a&&s.appendChild(c())}if(a){var y=Ue(It,12);y&&(y.style.setProperty("color","#aaa","important"),s.appendChild(y)),s.appendChild(document.createTextNode(" "+xe(o.dislikes,0)))}var f=document.createElement("div");f.className="yt-tools-shorts-stats-wrap",f.setAttribute("style","color: #aaa !important;"),f.appendChild(s),l.parentElement.appendChild(f),e.setAttribute("data-yt-tools-shorts-stats",t)}}}}}})}function ut(e){var t=null,o=!1,n=new MutationObserver(function(){o||(o=!0,clearTimeout(t),t=setTimeout(function(){o=!1,window.location.href.includes("youtube.com")&&(Ie(),ze(),[500,1100,2e3].forEach(function(a){setTimeout(function(){window.location.href.includes("youtube.com")&&(Ie(),ze())},a)}))},280))});return n.observe(e,{childList:!0,subtree:!0}),n}function _o(){if(window.location.href.includes("youtube.com/watch")){var e=document.getElementById("secondary")||document.querySelector("ytd-watch-next-secondary-results-renderer");if(!(!e||!e.parentNode)&&m.lockupCachedStatsObserveTarget!==e){var t=m.lockupCachedStatsObserver;t&&(t.disconnect(),m.lockupCachedStatsObserver=ut(e),m.lockupCachedStatsObserveTarget=e)}}}function Ao(){var e=document.querySelectorAll("yt-lockup-view-model:not([data-yt-tools-lockup-stats])").length>0,t=document.querySelectorAll("ytm-shorts-lockup-view-model:not([data-yt-tools-shorts-stats])").length>0;return e||t}function Do(){window.location.href.includes("youtube.com")&&document.visibilityState==="visible"&&Ao()&&(Ie(),ze())}function Io(){if(window.location.href.includes("youtube.com")){Ie(),ze();var e=document.getElementById("secondary")||document.querySelector("ytd-watch-next-secondary-results-renderer"),t=e&&e.parentNode?e:document.body;if(m.lockupCachedStatsObserver){t!==m.lockupCachedStatsObserveTarget&&(m.lockupCachedStatsObserver.disconnect(),m.lockupCachedStatsObserver=ut(t),m.lockupCachedStatsObserveTarget=t);return}m.lockupCachedStatsObserver=ut(t),m.lockupCachedStatsObserveTarget=t,m.lockupCachedStatsIntervalId||(m.lockupCachedStatsIntervalId=setInterval(Do,1800))}}function ft(e){const t=_e(Y.BOOKMARKS,{}),o=Array.isArray(t[e])?t[e]:[];return{all:t,list:o}}function zo(e,t,o){const{all:n,list:a}=ft(e),l=Math.max(0,Math.floor(Number(t)||0)),s=a.some(y=>y&&y.t===l),c={t:l,label:(o||Ae(l)).trim(),createdAt:Date.now()},d=s?a.map(y=>y.t===l?c:y):[...a,c];d.sort((y,f)=>y.t-f.t),n[e]=d,Se(Y.BOOKMARKS,n)}function No(e,t){const{all:o,list:n}=ft(e),a=Math.max(0,Math.floor(Number(t)||0));o[e]=n.filter(l=>l&&l.t!==a),Se(Y.BOOKMARKS,o)}function Ze(e){const t=i("yt-bookmarks-panel");if(!t)return;const{list:o}=ft(e);if(!o.length){t.innerHTML='<div class="yt-bm-empty">No bookmarks yet. Click \u2605 to save one.</div>';return}t.innerHTML=o.map(n=>{const a=Ae(n.t),l=(n.label||a).replace(/</g,"&lt;").replace(/>/g,"&gt;");return`
          <div class="yt-bm-item">
            <button type="button" class="yt-bm-go" data-action="go" data-t="${n.t}" title="Go to ${a}">${a}</button>
            <div class="yt-bm-label" title="${l}">${l}</div>
            <button type="button" class="yt-bm-del" data-action="del" data-t="${n.t}" title="Delete">\u2715</button>
          </div>
        `}).join("")}function $o(e){const t=i("yt-bookmark-add"),o=i("yt-bookmark-toggle"),n=i("yt-bookmarks-panel");if(!t||!o||!n)return;const a=!!e?.bookmarks&&e?.btnBookmark!==!1;if(t.style.display=a?"inline-flex":"none",o.style.display=a?"inline-flex":"none",n.style.display=a&&m.bookmarksPanelOpen?"block":"none",!a)return;const l=q();l&&(Ze(l),!m.bookmarkClickHandlerInitialized&&(m.bookmarkClickHandlerInitialized=!0,document.addEventListener("click",s=>{const c=s.target;if(!(c instanceof Element))return;const d=c.closest("#yt-bookmark-add"),y=c.closest("#yt-bookmark-toggle"),f=c.closest("[data-action][data-t]");if(d){s.preventDefault(),s.stopPropagation();const k=u("video"),h=q();if(!k||!h)return;const L=Math.floor(k.currentTime||0),I=Ae(L),N=prompt("Bookmark name (optional):",I)||I;zo(h,L,N),m.bookmarksPanelOpen=!0,n.style.display="block",Ze(h),O("success",`Bookmark saved at ${I}`);return}if(y){s.preventDefault(),s.stopPropagation(),m.bookmarksPanelOpen=!m.bookmarksPanelOpen,n.style.display=m.bookmarksPanelOpen?"block":"none";const k=q();k&&m.bookmarksPanelOpen&&Ze(k);return}if(f){s.preventDefault(),s.stopPropagation();const k=f.getAttribute("data-action"),h=Number(f.getAttribute("data-t")),L=u("video"),I=q();if(!L||!I)return;k==="go"?(L.currentTime=Math.max(0,h||0),L.play?.().catch(()=>{})):k==="del"&&(No(I,h),Ze(I))}})))}function Bo(e){if(!e)return null;const t=String(e).trim().toLowerCase();if(!t)return null;let o=1,n=t.replace(/\s+/g,"");if(n.includes("mil")?(o=1e3,n=n.replace("mil","")):n.includes("k")?(o=1e3,n=n.replace("k","")):n.includes("m")&&(o=1e6,n=n.replace("m","")),n=n.replace(/[^\d.,]/g,""),!n)return null;const a=n.lastIndexOf("."),l=n.lastIndexOf(",");let s=n;if(a!==-1&&l!==-1){const d=Math.max(a,l),y=n.slice(0,d).replace(/[.,]/g,""),f=n.slice(d+1);s=`${y}.${f}`}else s=n.replace(",",".");const c=Number.parseFloat(s);return Number.isFinite(c)?Math.round(c*o):null}async function Vo(){const e=q();if(!e)return null;const t=Date.now();if(m.dislikesCache.videoId===e&&m.dislikesCache.dislikes!=null&&t-m.dislikesCache.ts<600*1e3)return m.dislikesCache.dislikes;const o=Ce(e);if(o&&o.dislikes!=null)return m.dislikesCache={videoId:e,dislikes:o.dislikes,ts:t},o.dislikes;try{const a=await(await fetch(`${ot}${e}`)).json(),l=Number(a?.dislikes),s=Number(a?.viewCount),c=Number(a?.rating);if(Number.isFinite(l)){m.dislikesCache={videoId:e,dislikes:l,ts:t};const d=mt();return lt(e,d??void 0,l,Number.isFinite(s)?s:void 0,Number.isFinite(c)&&c>=0&&c<=5?c:void 0),l}}catch{}return null}function mt(){const e=u("#top-level-buttons-computed like-button-view-model button-view-model button")||u("#top-level-buttons-computed like-button-view-model button")||u("#top-level-buttons-computed ytd-toggle-button-renderer:nth-child(1)")||u("segmented-like-dislike-button-view-model like-button-view-model");if(!e)return null;const t=[e.querySelector?.(".yt-spec-button-shape-next__button-text-content")?.textContent,e.textContent,e.getAttribute?.("aria-label")].filter(Boolean);for(const o of t){const n=Bo(o);if(n!=null)return n}return null}function Oo(e,t){const o=i("button_copy_description"),n=u("#top-level-buttons-computed")||u("ytd-watch-metadata #top-level-buttons-computed");if(!n&&!o)return;let a=i("yt-like-dislike-bar-mdcm");if(!a)a=document.createElement("div"),a.id="yt-like-dislike-bar-mdcm",a.innerHTML='<div class="like"></div><div class="dislike"></div>',o?o.insertAdjacentElement("beforebegin",a):n.appendChild(a);else if(o&&a.previousElementSibling!==o)try{o.insertAdjacentElement("beforebegin",a)}catch{}if(!Number.isFinite(e)||!Number.isFinite(t)||e+t<=0){a.style.display="none";return}const l=e+t,s=Math.max(0,Math.min(100,e/l*100)),c=100-s;a.style.display="block";const d=a.querySelector(".like"),y=a.querySelector(".dislike");d.style.width=`${s}%`,y.style.width=`${c}%`,a.title=`Likes: ${e.toLocaleString()} | Dislikes: ${t.toLocaleString()}`}async function Ho(e){if(!e?.likeDislikeBar){const a=i("yt-like-dislike-bar-mdcm");a&&(a.style.display="none");return}if(!window.location.href.includes("youtube.com/watch"))return;const t=q();if(!t)return;const o=await Vo();let n=mt();if(n==null){const a=Ce(t);a?.likes!=null&&(n=a.likes)}o==null||n==null||Oo(n,o)}function zt(e,t=4){if(!e?.likeDislikeBar)return;let o=0;const n=async()=>{o+=1,await Ho(e);const a=i("yt-like-dislike-bar-mdcm");a&&a.style.display!=="none"||o<t&&setTimeout(n,800)};setTimeout(n,300)}async function Nt(){if(Q=document.location.href,u("#below > ytd-watch-metadata > div")!=null&&document.location.href.split("?v=")[0].includes("youtube.com/watch")){Q=st();let t=null;const o=Ce(Q);if(o&&o.dislikes!=null)t=o.dislikes;else{const n=`${ot}${Q}`;try{const l=await(await fetch(n)).json();if(t=Number(l?.dislikes),Number.isFinite(t)){const s=mt(),c=Number(l?.viewCount),d=Number(l?.rating);lt(Q,s??void 0,t,Number.isFinite(c)?c:void 0,Number.isFinite(d)&&d>=0&&d<=5?d:void 0)}}catch(a){console.log(a)}}if(t!=null){const n=u("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > dislike-button-view-model > toggle-button-view-model > button-view-model > button");n!==void 0&&(n.style="width: 90px",n.innerHTML=`
              <svg class="svg-dislike-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
              ${xe(t,0)}`),m.dislikesCache={videoId:Q,dislikes:t,ts:Date.now()};try{const a=JSON.parse(GM_getValue("ytSettingsMDCM","{}"));zt(a,5)}catch{}}}}async function $t(){Q=document.location.href;const e=j("#button-bar > reel-action-bar-view-model > dislike-button-view-model > toggle-button-view-model > button-view-model > label > div > span");if(e!=null&&document.location.href.split("/")[3]==="shorts"){Q=document.location.href.split("/")[4];let t=null,o=null,n=null;const a=Ce(Q);if(a&&a.dislikes!=null)t=a.dislikes,o=a.viewCount??null,n=a.rating??null;else{const l=`${ot}${Q}`;try{const c=await(await fetch(l)).json();t=Number(c?.dislikes),o=Number(c?.viewCount),n=Number(c?.rating),Number.isFinite(t)&&lt(Q,void 0,t,Number.isFinite(o)?o:void 0,Number.isFinite(n)&&n>=0&&n<=5?n:void 0)}catch(s){console.log(s)}}if(t!=null)for(let l=0;l<e.length;l++)e[l].textContent=`${xe(t,0)}`;m.updateShortsViewsButton&&m.updateShortsViewsButton(Q,o),m.updateShortsRatingButton&&m.updateShortsRatingButton(Q,n)}}let gt,Bt=!1;setInterval(()=>{const e=u(".svg-dislike-ico"),t=window.location.href;gt!==void 0&&t!==gt&&!e&&Bt&&setTimeout(async()=>{await Nt(),await $t()},2e3),gt=t},1e3);let Te=null;try{const e=typeof unsafeWindow<"u"?unsafeWindow.trustedTypes:window.trustedTypes;if(e&&(Te=e.defaultPolicy,!Te))try{Te=e.createPolicy("default",{createHTML:t=>t})}catch{Te=e.defaultPolicy||null}}catch{Te=null}GM_addStyle(`@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
@import url("https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/css/iziToast.min.css");

:root {
  --primary-custom: #ff0000;
  --popup-bg: #0c0c0c;
  --popup-text: #ffffff;
  --popup-accent: #ff0000;
  --popup-width: 380px;
  --popup-height: 560px;
  --check-off: color-mix(in srgb, var(--popup-text) 18%, var(--popup-bg));
  --check-border: color-mix(in srgb, var(--popup-text) 55%, transparent);
  --yt-enhance-menu-bg: var(--popup-bg);
  --yt-enhance-menu-text: var(--popup-text);
  --yt-enhance-menu-accent: var(--popup-accent);
}

#yt-enhancement-panel {
  position: fixed;
  top: 56px;
  right: 16px;
  z-index: 9999;
  width: var(--popup-width);
  height: var(--popup-height);
  max-height: min(560px, calc(100vh - 72px));
  display: none;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
  background: var(--popup-bg, #0c0c0c);
  color: var(--popup-text, #fff);
  font-family: "Segoe UI", system-ui, sans-serif;
  font-size: 13px;
  line-height: 1.4;
}

#yt-enhancement-panel.is-open {
  display: flex !important;
}

#toggle-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  opacity: 1 !important;
}

.container-mdcm {
  width: 100%;
  height: 100%;
  max-height: 100%;
  background: var(--popup-bg, #0c0c0c);
  color: var(--popup-text, #fff);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
  animation: ytPanelFadeIn 0.25s ease-out;
}

@keyframes ytPanelFadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.popup-header,
.header-mdcm {
  flex-shrink: 0;
  position: relative;
  z-index: 20;
  padding: 12px 12px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05), transparent), var(--popup-bg, #0c0c0c);
}

.popup-header-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

.popup-brand {
  min-width: 0;
}

.popup-brand-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
}

.popup-brand-icon {
  display: flex;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--popup-accent, #ff0000);
  color: #fff;
  font-size: 12px;
}

.popup-brand h1 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--popup-text, #fff);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.popup-brand p {
  margin: 0;
  font-size: 11px;
  opacity: 0.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icons-mdcm {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 2px;
}

.icon-btn-mdcm {
  background: transparent;
  border: none;
  color: var(--popup-text, #fff);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.6;
  transition: background 0.15s, opacity 0.15s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  text-decoration: none;
}

a.icon-btn-mdcm {
  text-decoration: none;
}

.icon-btn-mdcm:hover,
.icon-btn-mdcm.active {
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
}

.icon-btn-mdcm.active {
  background: rgba(255, 255, 255, 0.15);
}

.tabs-mdcm {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}

.tab-mdcm {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 4px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--popup-text, #fff);
  cursor: pointer;
  opacity: 0.7;
  transition: background 0.15s, opacity 0.15s, box-shadow 0.15s;
  font-size: 9px;
  font-weight: 600;
  line-height: 1.15;
  text-align: center;
}

.tab-mdcm i {
  font-size: 12px;
}

.tab-mdcm:hover:not(.active) {
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
}

.tab-mdcm.active {
  background: var(--popup-accent, #ff0000) !important;
  color: #fff;
  opacity: 1;
  box-shadow: 0 8px 18px color-mix(in srgb, var(--popup-accent, #ff0000) 35%, transparent);
}

.popup-main {
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--popup-accent, #e11d1d) transparent;
}

.popup-main::-webkit-scrollbar {
  width: 5px;
}
.popup-main::-webkit-scrollbar-thumb {
  background: var(--popup-accent, #e11d1d);
  border-radius: 99px;
}

.tab-content {
  display: none;
}
.tab-content.active {
  display: block;
}

.yt-page-title {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 700;
}
.yt-page-desc {
  margin: 0 0 12px;
  font-size: 12px;
  opacity: 0.45;
}

.options-mdcm,
.yt-toggle-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.yt-toggle-grid.cols-1 {
  grid-template-columns: 1fr;
}

.yt-toggle-row {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--popup-text, #fff);
  text-align: left;
  box-sizing: border-box;
  transition: background 0.15s;
}
.yt-toggle-row:hover {
  background: rgba(255, 255, 255, 0.1);
}

.yt-check {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.checkmark {
  display: block;
  width: 20px;
  height: 20px;
  background-color: var(--check-off, #3a3a3a);
  border: 1.5px solid var(--check-border, rgba(255, 255, 255, 0.45));
  border-radius: 6px;
  position: relative;
  flex-shrink: 0;
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.yt-check:checked + .checkmark {
  background-color: var(--popup-accent, #ff0000);
  border-color: color-mix(in srgb, var(--popup-accent, #ff0000) 70%, #fff);
  box-shadow:
    0 2px 10px color-mix(in srgb, var(--popup-accent, #ff0000) 45%, transparent),
    0 0 0 1px color-mix(in srgb, var(--popup-accent, #ff0000) 50%, #fff),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.checkmark::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 9px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(40deg) scale(0);
  opacity: 0;
  transition: all 0.2s;
}

.yt-check:checked + .checkmark::after {
  opacity: 1;
  transform: translate(-50%, -50%) rotateZ(40deg) scale(1);
}

.yt-toggle-label {
  font-size: 11px;
  font-weight: 600;
  line-height: 1.3;
  opacity: 0.95;
}

.yt-field {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: 12px;
  margin-bottom: 8px;
}
.yt-field > label,
.yt-field-label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
}

.yt-select,
.quality-selector-mdcm select,
.select-wrapper-mdcm select {
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.4);
  color: var(--popup-text, #fff);
  font-size: 13px;
  outline: none;
  cursor: pointer;
  appearance: auto;
}
.yt-select:focus,
.quality-selector-mdcm select:focus {
  border-color: var(--popup-accent, #ff0000);
}

.slider-container-mdcm {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: 12px;
}
.slider-mdcm,
.yt-range {
  width: 100%;
  accent-color: var(--popup-accent, #ff0000);
  height: 6px;
  cursor: pointer;
  margin: 10px 0;
}
.reset-btn-mdcm,
.yt-btn {
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.08);
  color: var(--popup-text, #fff);
  border-radius: 8px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
}
.reset-btn-mdcm:hover,
.yt-btn:hover {
  background: rgba(255, 255, 255, 0.12);
}
.yt-btn-accent {
  background: var(--popup-accent, #ff0000);
  border-color: transparent;
  color: #fff;
}

.color-picker-mdcm {
  width: 50px;
  height: 28px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  cursor: pointer;
}
.card-items-end {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.option-mdcm {
  display: flex;
  align-items: center;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  gap: 6px;
  color: var(--popup-text, #fff);
}
.radio-mdcm {
  width: 14px;
  height: 14px;
  accent-color: var(--popup-accent, #ff0000);
}
.checkbox-mdcm {
  accent-color: var(--popup-accent, #ff0000);
}

.popup-footer,
.actions-mdcm {
  flex-shrink: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 12px;
  background: var(--popup-bg, #0c0c0c);
  text-align: center;
}
.popup-footer-versions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 10px;
  opacity: 0.45;
  margin-bottom: 6px;
}
.popup-footer a,
.developer-mdcm a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 11px;
  opacity: 0.55;
  color: var(--popup-text, #fff);
  text-decoration: none;
  transition: opacity 0.15s;
}
.popup-footer a:hover,
.developer-mdcm a:hover {
  opacity: 1;
}
.developer-mdcm {
  font-size: 11px;
  color: inherit;
}

.yt-home-hero {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), transparent);
  padding: 20px;
  margin-bottom: 12px;
}
.yt-home-hero h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.yt-home-hero p {
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.5;
  opacity: 0.7;
}
.yt-home-hero .yt-home-hint {
  font-size: 12px;
  opacity: 0.5;
}
.yt-version-grid,
.yt-action-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
}
.yt-version-chip {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: 12px;
}
.yt-version-chip .label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.45;
}
.yt-version-chip .value {
  margin-top: 4px;
  font-size: 18px;
  font-weight: 700;
  color: var(--popup-accent, #ff0000);
}
.yt-action-grid button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--popup-text, #fff);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.yt-action-grid button:hover {
  background: rgba(255, 255, 255, 0.1);
}
.yt-action-grid button i {
  color: var(--popup-accent, #ff0000);
}

#shareDropdown {
  display: none;
  margin-bottom: 12px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}
#shareDropdown.is-open {
  display: block;
}
#shareDropdown a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--popup-text, #fff);
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  padding: 10px 12px;
  margin-bottom: 6px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.25);
}
#shareDropdown a:hover {
  background: rgba(255, 255, 255, 0.1);
}

#importExportArea {
  display: none;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}
#importExportArea.active {
  display: block;
}
#importExportArea h3 {
  margin: 0;
  font-size: 14px;
}
#importExportArea textarea {
  width: 100%;
  min-height: 80px;
  margin: 10px 0;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.4);
  color: var(--popup-text, #fff);
  font-size: 11px;
  font-family: ui-monospace, monospace;
  resize: vertical;
}
.action-buttons-mdcm {
  display: flex;
  gap: 8px;
}
.action-btn-mdcm {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 12px;
  background: var(--popup-accent, #ff0000);
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
}

.options-settings-mdcm {
  display: grid;
  gap: 10px;
}
.option-settings-mdcm {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}
.color-boxes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.color-box {
  width: 22px;
  height: 22px;
  border: 1px solid rgba(221, 221, 221, 0.6);
  border-radius: 6px;
  cursor: pointer;
}
.color-box.selected {
  border: 2px solid var(--popup-accent, #ff0000);
  filter: drop-shadow(0 1px 6px color-mix(in srgb, var(--popup-accent) 60%, transparent));
}

#yt-stats-toggle {
  font-size: 12px;
  color: var(--popup-text, #fff);
  padding: 4px 0;
}
.stat-row {
  margin: 0 0 14px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}
.progress {
  height: 6px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 99px;
  margin: 8px 0;
}
.progress-bar {
  height: 100%;
  transition: width 0.3s;
}
.total-bar { background: #44aaff !important; }
.video-bar { background: #00ff88 !important; }
.shorts-bar { background: #ff4444 !important; }

.background-image-container {
  margin-bottom: 12px;
}
.themes-options .options-mdcm {
  max-height: none;
}

#icon-menu-settings {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 7px;
  font-size: 20px;
  color: var(--yt-spec-icon-inactive);
  cursor: pointer;
  user-select: none;
  filter: drop-shadow(2px 4px 6px black);
}

      #yt-stats {
      position: fixed;
      top: 60px;
      right: 20px;
      background: #1a1a1a;
      color: white;
      padding: 15px;
      border-radius: 10px;
      width: 320px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      font-family: Arial, sans-serif;
      display: none;
      }
  #yt-stats-toggle {
      font-size: 12px;
      color: #fff;
      padding: 12px 20px;
      border-radius: 5px;
      cursor: pointer;
  }
  .stat-row {
      margin: 15px 0;
  }
  .progress {
      height: 6px;
      overflow: hidden;
      background: #333;
      border-radius: 3px;
      margin: 8px 0;
  }
  .progress-bar {
      height: 100%;
      transition: width 0.3s;
  }
  .total-bar { background: #44aaff !important; }
  .video-bar { background: #00ff88 !important; }
  .shorts-bar { background: #ff4444 !important; }
  #cinematics {
    position: absolute !important;
    width: 90vw !important;
    height: 100vh ;
  }
    #cinematics div {
        position: fixed;
      inset: 0px;
      pointer-events: none;
      transform: scale(1.5, 2);
  }
      #cinematics > div > div > canvas:nth-child(1), #cinematics > div > div > canvas:nth-child(2) {
   position: absolute !important;
    width: 90vw !important;
    height: 100vh ;
      }

    // .html5-video-player.unstarted-mode {
    //  background-image: url('https://avatars.githubusercontent.com/u/54366580?v=4');
    // background-repeat: no-repeat;
    // background-position: 50% 50%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // }

        .color-picker {
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            background: none;
        }
        .slider {
            width: 100%;
        }
         #toggle-panel {
            z-index: 10000;
            color: white;
            padding: 5px;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            transition: all 0.5s ease;
            width: 43px;
            border-radius: 100px;
        }

        #icon-menu-settings {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 7px;
        font-size: 20px;
        color: var(--yt-spec-icon-inactive);
        cursor: pointer;
        user-select: none;
        filter: drop-shadow(2px 4px 6px black);
        }

        .theme-option {
            margin-bottom: 15px;
        }
        .theme-option label {
            display: flex;
            align-items: center;
        }
       .theme-option {
    position: relative;
    width: auto;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
}

.theme-preview {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    border: 1px solid #000;
    z-index: 1;
}

.theme-option input[type="radio"] {
    position: relative;
    z-index: 2;
    margin-right: 10px;
    cursor: pointer;
}

.theme-name {
    position: relative;
    z-index: 2;
    font-size: 15px;
    color: #fff;
}

.theme-option label {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 2;
}

  .buttons-tranlate, .select-traductor {
        background: #000;
        font-size: 10px;
        border: none;
        color: #fbf4f4 !important;
        padding: 3px 0;
        margin-left: 10px;
        width: 70px;
        border-radius: 10px;
        }
        .buttons-tranlate:hover {
        cursor: pointer;
        background-color: #6b6b6b;
        }
         button.botones_div {
         margin: 0;
         padding: 0;
         }
         button.botones_div:hover {
         cursor: pointer;
         color: #6b6b6b !important;
         }

        .tab-button:hover {
          background-color: #ec3203 !important;
          color: #ffffff !important;
          cursor: pointer;
        }

        .traductor-container {
            display: inline-block;
            align-items: center;
            gap: 8px;
            margin-top: 4px;
          }

        #eyes {
      opacity: 0;
      position: absolute;
      height: 24px;
      left: 0;
      width: 24px;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 4px;
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ##d5d5d5;

    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #000;

    }

    .color-boxes {
      display: flex;
      gap: 8px;
    }
    .color-box {
      width: 20px;
      height: 20px;
      border: 1px solid rgb(221 221 221 / 60%);
      border-radius: 4px;
      cursor: pointer;
    }
    .color-box.selected {
      border: 2px solid var(--primary-custom);
      filter: drop-shadow(0px 1px 6px red);
    }

    .containerButtons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .containerButtons > button:hover {
      cursor: pointer;
    }

        /* Download Container Styles */
        .download-container {
          width: 50%;
          padding: 12px;
          border-radius: 8px;
          margin-top: 8px;
          transition: all 0.3s ease;
        }

        .download-container.video {
          background: linear-gradient(135deg, #ff4444, #cc0000);
          color: white;
        }

        .download-container.audio {
          background: linear-gradient(135deg, #00cc44, #009933);
          color: white;
        }

        .download-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .download-text {
          font-weight: 600;
          font-size: 14px;
        }

        .download-quality {
          font-size: 12px;
          opacity: 0.9;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 3px;
          width: 0%;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 12px;
          font-weight: 500;
          min-width: 30px;
        }

        .download-footer {
          font-size: 10px;
          opacity: 0.7;
          text-align: center;
        }
        .download-footer a {
          text-decoration: none;
          color: #fff;
        }

        .download-container.completed {
          color: #fff;
          background: linear-gradient(135deg, #00cc44, #009933) !important;
        }

        .download-container.completed .download-text {
          font-weight: 700;
        }

      /* Bookmarks panel (under video buttons) */
      .yt-bookmarks-panel {
        margin-top: 10px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 10px;
        padding: 8px;
      }
      .yt-bm-empty {
        font-size: 12px;
        color: var(--text-custom-secondary);
      }
      .yt-bm-item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 8px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
      }
      .yt-bm-item:hover {
        background: rgba(255,255,255,0.06);
      }
      .yt-bm-go {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(34,197,94,0.2);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
        white-space: nowrap;
      }
      .yt-bm-label {
        font-size: 12px;
        color: var(--text-custom);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .yt-bm-del {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(239,68,68,0.2);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
      }

      /* Continue watching panel (under video buttons) */
      .yt-continue-watching-panel {
        margin-top: 10px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 10px;
        padding: 8px;
      }
      .yt-cw-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 8px;
      }
      .yt-cw-header-title {
        font-size: 12px;
        font-weight: 600;
        color: var(--text-custom, #fff);
      }
      .yt-cw-clear {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(239,68,68,0.18);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
      }
      .yt-cw-empty {
        font-size: 12px;
        color: var(--text-custom-secondary, #aaa);
      }
      .yt-cw-item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 10px;
        align-items: center;
        padding: 8px;
        border-radius: 10px;
      }
      .yt-cw-item:hover {
        background: rgba(255,255,255,0.06);
      }
      .yt-cw-thumb-wrap {
        width: 72px;
        height: 40px;
        border-radius: 8px;
        overflow: hidden;
        background: rgba(255,255,255,0.08);
        flex: none;
      }
      .yt-cw-thumb {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .yt-cw-title {
        font-size: 12px;
        font-weight: 600;
        color: var(--text-custom, #fff);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 520px;
      }
      .yt-cw-meta {
        font-size: 12px;
        color: var(--text-custom-secondary, #aaa);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .yt-cw-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .yt-cw-go {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(34,197,94,0.2);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
        white-space: nowrap;
      }
      .yt-cw-del {
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        background: rgba(239,68,68,0.2);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
      }

      /* Transcript panel (copy / download .txt) */
      .yt-transcript-panel {
        margin-top: 10px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 10px;
        padding: 10px;
        text-align: left;
      }
      .yt-tr-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 8px;
      }
      .yt-tr-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--text-custom, #fff);
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .yt-tr-close {
        border: none;
        background: transparent;
        color: var(--text-custom-secondary, #aaa);
        cursor: pointer;
        font-size: 13px;
        line-height: 1;
        padding: 4px 6px;
        border-radius: 6px;
      }
      .yt-tr-close:hover {
        background: rgba(255,255,255,0.1);
        color: #fff;
      }
      .yt-tr-controls {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        gap: 10px;
        margin-bottom: 8px;
      }
      .yt-tr-field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 11px;
        color: var(--text-custom-secondary, #aaa);
      }
      .yt-tr-field select {
        background: rgba(0,0,0,0.35);
        color: var(--text-custom, #fff);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 6px;
        padding: 5px 8px;
        font-size: 12px;
        max-width: 220px;
      }
      .yt-tr-check {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: var(--text-custom, #fff);
        padding-bottom: 5px;
        cursor: pointer;
      }
      .yt-tr-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 8px;
      }
      .yt-tr-btn {
        border: none;
        border-radius: 6px;
        padding: 6px 12px;
        background: rgba(255,255,255,0.14);
        color: #fff;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .yt-tr-btn:hover:not(:disabled) {
        background: rgba(255,255,255,0.22);
      }
      .yt-tr-btn.primary {
        background: rgba(239,68,68,0.85);
      }
      .yt-tr-btn.primary:hover:not(:disabled) {
        background: rgba(239,68,68,1);
      }
      .yt-tr-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .yt-tr-status {
        font-size: 11px;
        color: var(--text-custom-secondary, #aaa);
        margin-bottom: 6px;
        min-height: 14px;
      }
      .yt-tr-status[data-kind="error"] {
        color: #f87171;
      }
      .yt-tr-empty {
        font-size: 12px;
        color: var(--text-custom-secondary, #aaa);
      }
      .yt-tr-preview {
        margin: 0;
        max-height: 240px;
        overflow: auto;
        padding: 8px;
        background: rgba(0,0,0,0.3);
        border-radius: 8px;
        font-size: 12px;
        line-height: 1.5;
        color: var(--text-custom, #fff);
        white-space: pre-wrap;
        word-break: break-word;
        font-family: inherit;
      }
      .yt-tr-preview:empty {
        display: none;
      }

      /* Shorts channel name label (Home/feed Shorts lockups) */
      html:not([data-mdcm-shorts-channel-name="1"]) .yt-tools-shorts-channel-name {
        display: none !important;
      }
      .yt-tools-shorts-channel-name {
        font-size: 12px;
        line-height: 1.2;
        color: var(--yt-spec-text-secondary, #aaa);
        margin-bottom: 2px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .yt-tools-shorts-stats-wrap {
        margin-top: 4px;
        font-size: 11px;
        line-height: 1.2;
        color: var(--yt-spec-text-secondary, #aaa);
      }
      .yt-tools-shorts-stats-wrap .yt-tools-shorts-stats-row {
        display: inline-flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2px;
      }

      /* Like vs dislike bar (under likes/dislikes) */
      #yt-like-dislike-bar-mdcm {
        height: 6px;
        border-radius: 999px;
        overflow: hidden;
        margin-top: 6px;
        background: rgba(255,255,255,0.12);
        max-width: 305px;
      }
      #yt-like-dislike-bar-mdcm .like {
        height: 100%;
        background: #22c55e;
        float: left;
      }
      #yt-like-dislike-bar-mdcm .dislike {
        height: 100%;
        background: #ef4444;
        float: left;
      }

        .progress-retry-btn {
          position: absolute;
          top: 116px;
          right: 50%;
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .progress-retry-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .download-again-btn {
          position: absolute;
          top: 116px;
          left: 50%;
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.35);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .download-again-btn:hover {
          background: rgba(34, 197, 94, 0.5);
          transform: scale(1.1);
        }

        .download-container {
          position: relative;
        }

        .download-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .download-btn {
          flex: 1;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }

        .download-btn.video-btn {
          background: linear-gradient(135deg, #ff6666, #ff4444);
        }

        .download-btn.audio-btn {
          background: linear-gradient(135deg, #00dd55, #00cc44);
        }

        .download-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .download-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .retry-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #ffaa00, #ff8800);
          color: white;
        }

        .retry-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

      body {
      padding: 0;
      margin: 0;
      overflow-y: scroll;
      overflow-x: hidden;
      }
      .style-scope.ytd-comments {
      overflow-y: auto;
      overflow-x: hidden;
      height: auto;
      }
      ytd-comment-view-model[is-reply] #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model, ytd-comment-view-model[is-creator-reply] #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
        img.yt-img-shadow {
        border-radius: 50% !important;
        }
        #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: visible;
        }
      ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer {
        --ytd-item-section-item-margin: 8px;
        overflow-y: auto;
        overflow-x: hidden;
        height: auto;
      }
      .right-section.ytcp-header {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 45px;
      justify-content: end;
    }
      #meta.ytd-playlist-panel-video-renderer {
    min-width: 0;
    padding: 0 8px;
    display: flexbox;
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    flex-basis: 0.000000001px;
}

    .containerall {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-bottom: 30px;
      max-width: 800px;
      margin: auto;
    }
    }
    .container .botoncalidades {
      margin: 3px 2px;
      width: 24.6%;
    }

    .botoncalidades:first-child {
      background-color: #0af;
    }

    .botoncalidades:last-child {
      background-color: red;
      width: 100px;
    }

    .selectcalidades,
    .botoncalidades,
    .selectcalidadesaudio {
      width: 50%;
      height: 27.8px;
      background-color: #fff;
      color: #000;
      font-size: 25px;
      text-align: center;
      border: 1px solid black;
      border-radius: 10px;
      border: none;
      font-size: 20px;
      margin: 2px 2px;
    }

    .botoncalidades {
      width: 70px;
      height: 30px;
      background-color: rgb(4, 156, 22);
      border: 0px solid #000;
      color: #fff;
      font-size: 20px;
      border-radius: 10px;
      margin: 2px 2px;
    }

    .botoncalidades:hover,
    .bntcontainer:hover {
      cursor: pointer;
    }

   .ocultarframe,
    .ocultarframeaudio {
      display: none;
    }
      .checked_updates {
      cursor: pointer;
      }

      #export-config, #import-config {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: var(--yt-enhance-menu-accent, --primary-custom) !important;;
        color: #ffffff;
        border: none;
        padding: 5px;
      }
        #export-config:hover, #import-config:hover {
          background-color: #ff0000;
          color: #ffffff;
          cursor: pointer;
        }

        .yt-image-avatar-download {
          position: absolute;
          bottom: -10px;
          right: -14px;
          border: none;
          z-index: 1000;
          background: transparent;
          filter: drop-shadow(1px 0 6px red);
          color: var(--ytcp-text-primary);
          cursor: pointer;
        }

        .custom-classic-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
          border: none;
          width: 48px;
          height: 48px;
          color: var(--yt-spec-icon-inactive);
          font-size: 24px;
          margin: 0px 8px;
          cursor: pointer;
        }
        .custom-classic-btn:hover {
          background-color: rgba(255,255,255,0.2);
        }
        .background-image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin: 10px 0;
      }

      .background-image-preview {
        width: 160px;
        height: 90px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        border: 2px solid #444;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: box-shadow 0.2s;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        overflow: hidden;
      }

      .background-image-preview:hover .background-image-overlay {
        opacity: 1;
      }

      .background-image-overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: rgba(0,0,0,0.35);
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      .background-image-preview:hover .background-image-overlay,
      .background-image-preview:focus .background-image-overlay {
        opacity: 1;
      }

      .background-image-overlay i {
        font-size: 28px;
        margin-bottom: 4px;
      }

      .background-image-text {
        font-size: 13px;
        font-weight: 500;
        text-shadow: 0 1px 4px #000;
      }

      .remove-background-image {
        position: absolute;
        top: 6px;
        right: 6px;
        background: #e74c3c;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 26px;
        height: 26px;
        font-size: 18px;
        cursor: pointer;
        z-index: 2;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 0;
        line-height: 1;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        transition: background 0.2s;
      }
      .remove-background-image:hover {
        background: #c0392b;
      }
      .background-image-preview.has-image .remove-background-image {
        display: flex;
      }

      ytd-feed-filter-chip-bar-renderer[not-sticky] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
        padding: 10px;
      }
      .text-description-download {
        font-size: 12px;
        text-align: center;
        margin-top: 10px;
        }
`);const Vt=`
    <main>
    <div class="container">
    <form>
      <div class="containerButtons">
      
  <button title="Image video" class="botones_div" type="button" id="imagen">

  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-down" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 8h.01"></path>
    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
    <path d="M14 14l1 -1c.653 -.629 1.413 -.815 2.13 -.559"></path>
    <path d="M19 16v6"></path>
    <path d="M22 19l-3 3l-3 -3"></path>
  </svg>
</button>
  
      
  <button title="Buffer video" type="button" class="buffer_video botones_div">
 <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-box-right-stretch"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17h2" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M11 12h6" /><path d="M13 7h4" /></svg>
</button>
  
      
  <div style="position:relative; ">
  <button title="Filter eyes" class="botones_div" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-half"
      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 9a3 3 0 0 0 0 6v-6z"></path>
      <path
        d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z">
      </path>
    </svg>
    <input id="eyes" list="presetColors" type="color" value="#ffffff">
  <datalist id="presetColors">
    <option value="#000000" />
    <option value="#fbff00" />
    <option value="#ff0000" />
    <option value="#00ff00" />
    <option value="#0000ff" />
  </datalist>
  <div id="ojosprotect"
  style="position: fixed; pointer-events: none; width: 100%; height: 100%; left: 0px; top: 0px; opacity: 0.2; z-index: 10; display: block;">
  </div>
</div>
</button>
  
      
  <button title="reset" class="botones_div" type="button" id="reset_button">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
    <path d="M12 4l0 8"></path>
  </svg>
</button>
  
      
  <button title="Repeat video" class="botones_div" type="button" id="repeatvideo">

  <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
  </svg>
</button>
  
      
  <button title="Add bookmark" type="button" id="yt-bookmark-add" class="botones_div">
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 4h10a2 2 0 0 1 2 2v14l-7 -4l-7 4v-14a2 2 0 0 1 2 -2z" />
      <path d="M12 7v6" />
      <path d="M9 10h6" />
    </svg>
  </button>
  
      
  <button title="Show bookmarks" type="button" id="yt-bookmark-toggle" class="botones_div">
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 6h11" />
      <path d="M9 12h11" />
      <path d="M9 18h11" />
      <path d="M5 6h.01" />
      <path d="M5 12h.01" />
      <path d="M5 18h.01" />
    </svg>
  </button>
  
      
  <button title="History" type="button" id="yt-cw-history-toggle" class="botones_div" style="display:none;">
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 8v4l3 3" />
      <path d="M3 12a9 9 0 1 0 3 -6.7" />
      <path d="M3 4v4h4" />
    </svg>
  </button>
  
      
  <button title="Transcript (copy / download .txt)" type="button" id="yt-transcript-btn" class="botones_div">
  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9h1" /><path d="M9 13h6" /><path d="M9 17h6" /></svg>
</button>
  
      
  <button title="MP4" type="button" class="btn1 botones_div">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download"
    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
    <path d="M12 17v-6"></path>
    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
  </svg>
</button>
<button title="MP3" type="button" class="btn2 botones_div">

  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-music" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
    <path d="M11 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M12 16l0 -5l2 1"></path>
  </svg>
</button>
<button title="Close" type="button" class="btn3 botones_div">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24"
  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
  stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
  <path d="M10 10l4 4m0 -4l-4 4"></path>
</svg>
</button>
  
      

  <button title="External Download" type="button" class="external_link botones_div">

  <svg class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
      <path d="M11 13l9 -9"></path>
      <path d="M15 4h5v5"></path>
   </svg>
</button>

  
      

  <button title="view External no cookie" type="button" class="view_external_link botones_div">

  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z" /><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" /><path d="M12 8h4v4" /><path d="M16 8l-5 5" /></svg>
</button>

  
      
  <button title="Picture to picture" type="button" class="video_picture_to_picture botones_div">

  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" /></svg>
</button>

  
      
  <button title="Screenshot video" type="button" class="screenshot_video botones_div">
  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>
</button>

  
      
  <button title="Check new updates" type="button" class="checked_updates botones_div">
  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
</button>
  
      </div>
      <div id="yt-bookmarks-panel" class="yt-bookmarks-panel" style="display:none;"></div>
      <div id="yt-continue-watching-panel" class="yt-continue-watching-panel" style="display:none;"></div>
      <div id="yt-transcript-panel" class="yt-transcript-panel" style="display:none;"></div>
      <div>
      </div>
    </form>

    </div>
    <div class="content_collapsible_colors" style="margin-top: 10px">

    <form class="formulariodescarga ocultarframe" action="">
    <div class="containerall">
    <select class="selectcalidades ocultarframe" required>
      <option selected disabled>Calidad del video / Quality video</option>
      <option value="144">144p Mp4</option>
      <option value="240">240p Mp4</option>
      <option value="360">360p Mp4</option>
      <option value="480">480p Mp4</option>
      <option value="720">720p HD Mp4 Default</option>
      <option value="1080">1080p FULL HD Mp4</option>
      <option value="4k">2160p 4K WEBM</option>
      <option value="8k">4320p 8K WEBM</option>
      </select>
      <div id="descargando" class="download-container ocultarframe">
        <button class="progress-retry-btn" title="Retry" style="display: none;">
        <i class="fa-solid fa-rotate-right"></i>
        </button>
        <button class="download-again-btn" title="Download again" style="display: none;">
        <i class="fa-solid fa-download"></i>
        </button>
        <div class="download-info">
          <span class="download-text">Download Video And Please Wait...</span>
          <span class="download-quality"></span>
        </div>
        <div class="download-actions">
          <button class="download-btn video-btn">Download</button>
          <button class="retry-btn" style="display: none;">Retry</button>
        </div>
        <div class="progress-container" style="display: none;">
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
          <span class="progress-text">0%</span>
        </div>
        <div class="download-footer">
          <a href="https://github.com/DeveloperMDCM/" target="_blank"> <i class="fa-brands fa-github"></i> by: DeveloperMDCM</a>
        </div>
        <h1 class="text-description-download">
          <span >Enable pop-ups on YouTube to download audio or video</span>
        </h1>
      </div>
    </div>
    </form>
    <form class="formulariodescargaaudio ocultarframe" action="">
    <div class="containerall">
    <select class="selectcalidadesaudio ocultarframeaudio" required>
      <option selected disabled>Calidad del Audio / Quality Audio</option>
      <option value="flac">Audio FLAC UHQ</option>
      <option value="wav">Audio WAV UHQ</option>
      <option value="webm">Audio WEBM UHQ</option>
      <option value="mp3">Audio MP3 Default</option>
      <option value="m4a">Audio M4A</option>
      <option value="aac">Audio AAC</option>
      <option value="opus">Audio OPUS</option>
      <option value="ogg">Audio OGG</option>
      </select>
      <div id="descargandomp3" class="download-container ocultarframeaudio">
        <button class="progress-retry-btn" title="Retry" style="display: none;">
        <i class="fa-solid fa-rotate-right"></i>
        </button>
        <button class="download-again-btn" title="Download again" style="display: none;">
        <i class="fa-solid fa-download"></i>
        </button>
        <div class="download-info">
          <span class="download-text">Download Audio And Please Wait...</span>
          <span class="download-quality"></span>
        </div>
        <div class="download-actions">
          <button class="download-btn audio-btn">Download</button>
          <button class="retry-btn" style="display: none;">Retry</button>
        </div>
        <div class="progress-container" style="display: none;">
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
          <span class="progress-text">0%</span>
        </div>
         <div class="download-footer">
          <a href="https://github.com/DeveloperMDCM/" target="_blank"><i class="fa-brands fa-github"></i> by: DeveloperMDCM</a>
        </div>
         <h1 class="text-description-download">
          <span >Enable pop-ups on YouTube to download audio or video</span>
        </h1>
      </div>
    </div>
    </form>
      </main>
  `,ht=[{name:"Default / Reload",gradient:"",textColor:"",raised:"",btnTranslate:"",CurrentProgressVideo:"",videoDuration:"",colorIcons:"",textLogo:"",primaryColor:"",secondaryColor:""},{name:"Midnight Blue",gradient:"linear-gradient(135deg, #1e3a8a, #3b82f6)",textColor:"#ffffff",raised:"#f00",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Forest Green",gradient:"linear-gradient(135deg, #14532d, #22c55e)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Sunset Orange",gradient:"linear-gradient(135deg, #7c2d12, #f97316)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Royal Purple",gradient:"linear-gradient(135deg, #4c1d95, #8b5cf6)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Cherry Blossom",gradient:"linear-gradient(135deg, #a9005c, #fc008f)",textColor:"#ffffff",raised:"#fc008f",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Red Dark",gradient:"linear-gradient(135deg, #790909, #f70131)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Raind",gradient:"linear-gradient(90deg, #3f5efb 0%, #fc466b 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Neon",gradient:"linear-gradient(273deg, #ee49fd 0%, #6175ff 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Azure",gradient:"linear-gradient(273deg, #0172af 0%, #74febd 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Butterfly",gradient:"linear-gradient(273deg, #ff4060 0%, #fff16a 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Colombia",gradient:"linear-gradient(174deg, #fbf63f 0%, #0000bb 45%, #ff0000 99%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Mexico",gradient:"linear-gradient(180deg, #006847 0%, #ffffff 48%, #ce1126 100%)",textColor:"#1a1a1a",raised:"#006847",btnTranslate:"#000",CurrentProgressVideo:"#ce1126",videoDuration:"#1a1a1a",colorIcons:"#1a1a1a",textLogo:"#ce1126"},{name:"Brazil",gradient:"linear-gradient(135deg, #009c3b 0%, #ffdf00 50%, #002776 100%)",textColor:"#ffffff",raised:"#002776",btnTranslate:"#000",CurrentProgressVideo:"#ffdf00",videoDuration:"#fff",colorIcons:"#002776",textLogo:"#ffdf00"},{name:"Argentina",gradient:"linear-gradient(180deg, #74acdf 0%, #ffffff 45%, #74acdf 100%)",textColor:"#0a2540",raised:"#74acdf",btnTranslate:"#000",CurrentProgressVideo:"#fcbf49",videoDuration:"#0a2540",colorIcons:"#c58b00",textLogo:"#0a2540"},{name:"Spain",gradient:"linear-gradient(180deg, #aa151b 0%, #f1bf00 45%, #aa151b 100%)",textColor:"#ffffff",raised:"#aa151b",btnTranslate:"#000",CurrentProgressVideo:"#f1bf00",videoDuration:"#fff",colorIcons:"#aa151b",textLogo:"#f1bf00"},{name:"France",gradient:"linear-gradient(90deg, #002395 0%, #ffffff 50%, #ed2939 100%)",textColor:"#0b1b3a",raised:"#002395",btnTranslate:"#000",CurrentProgressVideo:"#ed2939",videoDuration:"#0b1b3a",colorIcons:"#002395",textLogo:"#ed2939"},{name:"Germany",gradient:"linear-gradient(180deg, #000000 0%, #dd0000 50%, #ffce00 100%)",textColor:"#ffffff",raised:"#111111",btnTranslate:"#000",CurrentProgressVideo:"#ffce00",videoDuration:"#fff",colorIcons:"#ffce00",textLogo:"#dd0000"},{name:"Italy",gradient:"linear-gradient(90deg, #009246 0%, #ffffff 50%, #ce2b37 100%)",textColor:"#0f2a1a",raised:"#009246",btnTranslate:"#000",CurrentProgressVideo:"#ce2b37",videoDuration:"#0f2a1a",colorIcons:"#009246",textLogo:"#ce2b37"},{name:"Japan",gradient:"linear-gradient(135deg, #ffffff 0%, #bc002d 55%, #111111 100%)",textColor:"#ffffff",raised:"#bc002d",btnTranslate:"#000",CurrentProgressVideo:"#bc002d",videoDuration:"#fff",colorIcons:"#bc002d",textLogo:"#bc002d"},{name:"South Korea",gradient:"linear-gradient(135deg, #003478 0%, #ffffff 45%, #c60c30 100%)",textColor:"#ffffff",raised:"#003478",btnTranslate:"#000",CurrentProgressVideo:"#c60c30",videoDuration:"#fff",colorIcons:"#003478",textLogo:"#c60c30"},{name:"USA",gradient:"linear-gradient(135deg, #3c3b6e 0%, #ffffff 45%, #b22234 100%)",textColor:"#ffffff",raised:"#3c3b6e",btnTranslate:"#000",CurrentProgressVideo:"#b22234",videoDuration:"#fff",colorIcons:"#3c3b6e",textLogo:"#b22234"},{name:"United Kingdom",gradient:"linear-gradient(135deg, #012169 0%, #ffffff 40%, #c8102e 100%)",textColor:"#ffffff",raised:"#012169",btnTranslate:"#000",CurrentProgressVideo:"#c8102e",videoDuration:"#fff",colorIcons:"#012169",textLogo:"#c8102e"},{name:"India",gradient:"linear-gradient(180deg, #ff9933 0%, #ffffff 48%, #138808 100%)",textColor:"#0b2a12",raised:"#138808",btnTranslate:"#000",CurrentProgressVideo:"#000080",videoDuration:"#0b2a12",colorIcons:"#000080",textLogo:"#ff9933"},{name:"Canada",gradient:"linear-gradient(90deg, #ff0000 0%, #ffffff 50%, #ff0000 100%)",textColor:"#1a1a1a",raised:"#ff0000",btnTranslate:"#000",CurrentProgressVideo:"#ff0000",videoDuration:"#1a1a1a",colorIcons:"#ff0000",textLogo:"#ff0000"},{name:"Chile",gradient:"linear-gradient(180deg, #d52b1e 0%, #ffffff 50%, #0039a6 100%)",textColor:"#ffffff",raised:"#0039a6",btnTranslate:"#000",CurrentProgressVideo:"#d52b1e",videoDuration:"#fff",colorIcons:"#d52b1e",textLogo:"#0039a6"}],J=ie("div");J.id="yt-enhancement-panel";const Ro=ht.map((e,t)=>`
        <label >
          <div class="theme-option">
          <div class="theme-preview" style="background: ${e.gradient};"></div>
          <input type="radio" name="theme" value="${t}" ${t===0?"checked":""}>
              <span style="${e.name==="Default / Reload Page"?"color: red; ":""}" class="theme-name">${e.name}</span>
              </div>
        </label>
    `).join(""),jo=Object.entries($e).map(([e,t])=>`<option value="${e}" ${e===$e?"selected":""}>${t}</option>`).join("");function Uo(){const e=document.cookie.split("; ").find(l=>l.startsWith("PREF="));if(!e)return"light";const t=e.substring(5),n=new URLSearchParams(t).get("f6");return["400","4000000","40000400","40000000"].includes(n)?"dark":"light"}let bt=Uo();const W=(e,t,o=!1)=>`
    <label class="yt-toggle-row">
      <input type="checkbox" class="checkbox-mdcm yt-check" id="${e}"${o?" checked":""}>
      <span class="checkmark" aria-hidden="true"></span>
      <span class="yt-toggle-label">${t}</span>
    </label>`,Ot=`
  <div class="container-mdcm">
    <header class="popup-header header-mdcm">
      <div class="popup-header-top">
        <div class="popup-brand">
          <div class="popup-brand-row">
            <span class="popup-brand-icon"><i class="fa-brands fa-youtube"></i></span>
            <h1>Youtube Tools</h1>
          </div>
          <p>Themes, downloads, dislikes and more for YouTube</p>
        </div>
        <div class="icons-mdcm">
          <button type="button" class="icon-btn-mdcm active" id="home-nav-btn" title="Home">
            <i class="fa-solid fa-house"></i>
          </button>
          <a class="icon-btn-mdcm" href="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js" target="_blank" title="Update">
            <i class="fa-solid fa-arrows-rotate"></i>
          </a>
          <button type="button" class="icon-btn-mdcm close_menu_settings" title="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <nav class="tabs-mdcm">
        <button type="button" class="tab-mdcm" data-tab="general">
          <i class="fa-solid fa-sliders"></i>
          <span>General</span>
        </button>
        <button type="button" class="tab-mdcm" data-tab="themes">
          <i class="fa-solid fa-palette"></i>
          <span>Themes</span>
        </button>
        <button type="button" class="tab-mdcm" data-tab="stats">
          <i class="fa-solid fa-chart-simple"></i>
          <span>Stats</span>
        </button>
        <button type="button" class="tab-mdcm" data-tab="menu-settings">
          <i class="fa-solid fa-swatchbook"></i>
          <span>Menu</span>
        </button>
      </nav>
    </header>

    <main class="popup-main">
      <div id="yt-tools-home" class="tab-content active">
        <div class="yt-home-hero">
          <h2>Youtube Tools</h2>
          <p>Userscript that enhances YouTube: themes, MP3/MP4 download, dislikes, bookmarks, continue watching, wave visualizer and more.</p>
          <p class="yt-home-hint">Open General to toggle features, Themes for looks, Menu to style this panel.</p>
        </div>
        <div class="yt-version-grid">
          <div class="yt-version-chip">
            <div class="label">Extension</div>
            <div class="value">v2.0.0</div>
          </div>
          <div class="yt-version-chip">
            <div class="label">Script</div>
            <div class="value">v2.5.1</div>
          </div>
        </div>
        <div class="yt-action-grid">
          <button type="button" id="shareBtn-mdcm"><i class="fa-solid fa-share-nodes"></i> Share</button>
          <button type="button" id="importExportBtn"><i class="fa-solid fa-file-import"></i> Import / Export</button>
        </div>
        <div id="shareDropdown">
          <p class="yt-page-desc" style="margin-top:0">Share Youtube Tools with others</p>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${Ge}" target="_blank" data-network="facebook" class="share-link"><i class="fa-brands fa-facebook"></i> Facebook</a>
          <a href="https://twitter.com/intent/tweet?url=${Ge}" target="_blank" data-network="twitter" class="share-link"><i class="fa-brands fa-twitter"></i> X / Twitter</a>
          <a href="https://api.whatsapp.com/send?text=${Ge}" target="_blank" data-network="whatsapp" class="share-link"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=${Ge}" target="_blank" data-network="linkedin" class="share-link"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
        <div id="importExportArea">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <h3>Import / Export</h3>
            <button type="button" class="icon-btn-mdcm" id="closeImportExportBtn" title="Close"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <p class="yt-page-desc">Back up or restore settings</p>
          <textarea id="config-data" placeholder="Paste configuration here to import"></textarea>
          <div class="action-buttons-mdcm">
            <button type="button" id="export-config" class="action-btn-mdcm">Export</button>
            <button type="button" id="import-config" class="action-btn-mdcm">Import</button>
          </div>
        </div>
        <p class="yt-page-desc" style="text-align:center;margin:0">Userscript \xB7 Tampermonkey</p>
      </div>

      <div id="general" class="tab-content">
        <h2 class="yt-page-title">Features</h2>
        <p class="yt-page-desc">Toggle YouTube enhancements</p>
        <div class="yt-toggle-grid">
          ${W("hide-comments-toggle","Hide Comments")}
          ${W("hide-sidebar-toggle","Hide Sidebar")}
          ${W("autoplay-toggle","Disable Autoplay")}
          ${W("subtitles-toggle","Disable Subtitles")}
          ${W("dislikes-toggle","Show Dislikes",!0)}
          ${W("like-dislike-bar-toggle","Like vs Dislike bar")}
          ${W("bookmarks-toggle","Bookmarks (timestamps)")}
          ${W("continue-watching-toggle","Continue watching")}
          ${W("shorts-channel-name-toggle","Shorts: show channel name")}
          ${W("themes-toggle","Active Themes")}
          ${W("translation-toggle","Translate comments")}
          ${W("avatars-toggle","Download avatars")}
          ${W("reverse-mode-toggle","Reverse mode")}
          ${W("cinematic-lighting-toggle","Cinematic Mode")}
          ${W("wave-visualizer-toggle","Wave visualizer Beta",!0)}
          ${W("sync-cinematic-toggle","Sync Ambient Mode YT")}
        </div>
        <div style="margin-top:12px;display:grid;gap:8px;">
          <div class="yt-field">
            <label class="yt-field-label" for="select-wave-visualizer-select">Effect wave visualizer</label>
            <select class="yt-select" id="select-wave-visualizer-select">
              <option value="linea">Line smooth</option>
              <option value="barras">Vertical bars</option>
              <option value="curva">Curved</option>
              <option value="picos">Smooth peaks</option>
              <option value="solida">Solid wave</option>
              <option value="dinamica">Dynamic wave</option>
              <option value="montana">Smooth mountain</option>
            </select>
          </div>
          <div class="yt-field">
            <label class="yt-field-label" for="select-video-qualitys-select">Default video player quality</label>
            <select class="yt-select" id="select-video-qualitys-select">
              <option value="user">User Default</option>
              <option value="">Auto</option>
              <option value="144">144</option>
              <option value="240">240</option>
              <option value="360">360</option>
              <option value="480">480</option>
              <option value="720">720</option>
              <option value="1080">1080</option>
              <option value="1440">1440</option>
              <option value="2160">2160</option>
            </select>
          </div>
          <div class="yt-field">
            <label class="yt-field-label" for="select-languages-comments-select">Language for translate comments</label>
            <select class="yt-select" id="select-languages-comments-select">${jo}</select>
          </div>
          <div class="slider-container-mdcm">
            <label>Video Player Size: <span id="player-size-value">100</span>%</label>
            <input type="range" id="player-size-slider" class="slider-mdcm yt-range" min="50" max="150" value="100">
            <button type="button" class="reset-btn-mdcm" id="reset-player-size">Reset video size</button>
          </div>
        </div>
      </div>

      <div id="themes" class="tab-content">
        <h2 class="yt-page-title">Themes</h2>
        <p class="yt-page-desc">Customize YouTube colors and presets</p>
        <div id="background-image-container" class="background-image-container">
          <h4>Background Image</h4>
          <input type="file" id="background_image" accept="image/png, image/jpeg" style="display:none;" />
          <div id="background-image-preview" class="background-image-preview">
            <span class="background-image-overlay">
              <i class="fa fa-camera"></i>
              <span class="background-image-text">Select image</span>
            </span>
            <button type="button" id="remove-background-image" class="remove-background-image" title="Quitar fondo">&times;</button>
          </div>
        </div>
        <div class="themes-hidden">
          <p class="yt-page-desc">Disable Cinematic Mode on General for best results.${bt==="dark"?"":' <span style="color:#f66;">Activate dark mode to use themes.</span>'}</p>
          <div class="yt-toggle-grid" style="margin-bottom:10px;">
            <label class="yt-toggle-row">
              <input type="radio" class="radio-mdcm" name="theme" value="custom" checked>
              <span class="yt-toggle-label">Custom</span>
            </label>
            <label class="yt-toggle-row theme-selected-normal">
              <input type="radio" class="radio-mdcm" name="theme" value="normal">
              <span class="yt-toggle-label">Selected Themes</span>
            </label>
          </div>
          <div class="themes-options">
            <div class="options-mdcm">${Ro}</div>
          </div>
          <div class="theme-custom-options">
            <div class="options-mdcm">
              <div class="option-mdcm"><div class="card-items-end"><label>Progressbar Video:</label><input type="color" id="progressbar-color-picker" class="color-picker-mdcm" value="#ff0000"></div></div>
              <div class="option-mdcm"><div class="card-items-end"><label>Background Color:</label><input type="color" id="bg-color-picker" class="color-picker-mdcm" value="#000000"></div></div>
              <div class="option-mdcm"><div class="card-items-end"><label>Primary Color:</label><input type="color" id="primary-color-picker" class="color-picker-mdcm" value="#ffffff"></div></div>
              <div class="option-mdcm"><div class="card-items-end"><label>Secondary Color:</label><input type="color" id="secondary-color-picker" class="color-picker-mdcm" value="#ffffff"></div></div>
              <div class="option-mdcm"><div class="card-items-end"><label>Header Color:</label><input type="color" id="header-color-picker" class="color-picker-mdcm" value="#000000"></div></div>
              <div class="option-mdcm"><div class="card-items-end"><label>Icons Color:</label><input type="color" id="icons-color-picker" class="color-picker-mdcm" value="#ffffff"></div></div>
              <div class="option-mdcm"><div class="card-items-end"><label>Menu Color:</label><input type="color" id="menu-color-picker" class="color-picker-mdcm" value="#000000"></div></div>
              <div class="option-mdcm"><div class="card-items-end"><label>Line Color Preview:</label><input type="color" id="line-color-picker" class="color-picker-mdcm" value="#ff0000"></div></div>
              <div class="option-mdcm"><div class="card-items-end"><label>Time Color Preview:</label><input type="color" id="time-color-picker" class="color-picker-mdcm" value="#ffffff"></div></div>
            </div>
          </div>
        </div>
      </div>

      <div id="stats" class="tab-content">
        <h2 class="yt-page-title">Statistics</h2>
        <p class="yt-page-desc">Time spent on YouTube</p>
        <div id="yt-stats-toggle">
          <div class="stat-row">
            <div>Foreground Time</div>
            <div class="progress"><div class="progress-bar total-bar" id="usage-bar"></div></div>
            <div id="total-time">0h 0m 0s</div>
          </div>
          <div class="stat-row">
            <div>Video Time</div>
            <div class="progress"><div class="progress-bar video-bar" id="video-bar"></div></div>
            <div id="video-time">0h 0m 0s</div>
          </div>
          <div class="stat-row">
            <div>Shorts Time</div>
            <div class="progress"><div class="progress-bar shorts-bar" id="shorts-bar"></div></div>
            <div id="shorts-time">0h 0m 0s</div>
          </div>
        </div>
      </div>

      <div id="menu-settings" class="tab-content">
        <h2 class="yt-page-title">Menu appearance</h2>
        <p class="yt-page-desc">Colors for this settings panel</p>
        <div class="options-settings-mdcm">
          <div class="option-settings-mdcm">
            <label>Backgrounds</label>
            <div class="color-boxes" id="bg-color-options">
              <div class="color-box" data-type="bg" data-value="#0c0c0c" style="background-color:#0c0c0c;"></div>
              <div class="color-box" data-type="bg" data-value="#252525" style="background-color:#252525;"></div>
              <div class="color-box" data-type="bg" data-value="#1e1e1e" style="background-color:#1e1e1e;"></div>
              <div class="color-box" data-type="bg" data-value="#3a3a3a" style="background-color:#3a3a3a;"></div>
              <div class="color-box" data-type="bg" data-value="#000000" style="background-color:#000000;"></div>
              <div class="color-box" data-type="bg" data-value="#2d2d2d" style="background-color:#2d2d2d;"></div>
              <div class="color-box" data-type="bg" data-value="#444444" style="background-color:#444;"></div>
            </div>
          </div>
          <div class="option-settings-mdcm">
            <label>Accent</label>
            <div class="color-boxes" id="bg-accent-color-options">
              <div class="color-box" data-type="accent" data-value="#ff0000" style="background-color:#ff0000;"></div>
              <div class="color-box" data-type="accent" data-value="#e11d1d" style="background-color:#e11d1d;"></div>
              <div class="color-box" data-type="accent" data-value="#009c37" style="background-color:#009c37;"></div>
              <div class="color-box" data-type="accent" data-value="#0c02a0" style="background-color:#0c02a0;"></div>
              <div class="color-box" data-type="accent" data-value="#000000" style="background-color:#000000;"></div>
            </div>
          </div>
          <div class="option-settings-mdcm">
            <label>Text</label>
            <div class="color-boxes" id="text-color-options">
              <div class="color-box" data-type="color" data-value="#ffffff" style="background-color:#ffffff;"></div>
              <div class="color-box" data-type="color" data-value="#cccccc" style="background-color:#cccccc;"></div>
              <div class="color-box" data-type="color" data-value="#b3b3b3" style="background-color:#b3b3b3;"></div>
              <div class="color-box" data-type="color" data-value="#00ffff" style="background-color:#00ffff;"></div>
              <div class="color-box" data-type="color" data-value="#00ff00" style="background-color:#00ff00;"></div>
              <div class="color-box" data-type="color" data-value="#ffff00" style="background-color:#ffff00;"></div>
              <div class="color-box" data-type="color" data-value="#ffcc00" style="background-color:#ffcc00;"></div>
              <div class="color-box" data-type="color" data-value="#ff66cc" style="background-color:#ff66cc;"></div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="popup-footer actions-mdcm">
      <div class="popup-footer-versions">
        <span>Ext v2.0.0</span>
        <span>\xB7</span>
        <span>Script v2.5.1</span>
      </div>
      <a href="https://github.com/DeveloperMDCM" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-github"></i> DeveloperMDCM
      </a>
    </footer>
  </div>
  `,qo=Te?.createHTML?Te.createHTML(`${Ot}`):`${Ot}`;J.innerHTML=qo,ao(J),ve&&(document.documentElement.dataset.ytToolsExtension="1",J.style.cssText="display:none!important;visibility:hidden!important;pointer-events:none!important;position:fixed!important;left:-99999px!important;opacity:0!important;",GM_addStyle(`
      html[data-yt-tools-extension="1"] #yt-enhancement-panel,
      html[data-yt-tools-extension="1"] #toggle-button,
      html[data-yt-tools-extension="1"] #icon-menu-settings {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `));function Ht(){const e=u("ytd-topbar-menu-button-renderer");if(!e||i("icon-menu-settings"))return;const t=ie("div");t.id="toggle-button";const o=ie("i");o.id="icon-menu-settings",o.classList.add("fa-solid","fa-gear"),t.appendChild(o),e.parentElement.insertBefore(t,e);let n=!1;t.addEventListener("click",()=>{n=!n,J.classList.toggle("is-open",n),J.style.display=n?"flex":"none"})}ve||Ht();let Fo=!1;const Rt=u(".close_menu_settings");Rt&&!ve&&Rt.addEventListener("click",()=>{Fo=!1,J.classList.remove("is-open"),J.style.display="none"});const jt=J.querySelectorAll(".tab-mdcm"),Wo=J.querySelectorAll(".tab-content"),yt=J.querySelector("#home-nav-btn");function Ut(e){jt.forEach(a=>a.classList.remove("active")),Wo.forEach(a=>a.classList.remove("active"));const t=e==="yt-tools-home"||e==="home";yt?.classList.toggle("active",t);const o=t?"yt-tools-home":e,n=J.querySelector(`#${o}`);if(n&&n.classList.add("active"),!t){const a=J.querySelector(`.tab-mdcm[data-tab="${e}"]`);a&&a.classList.add("active")}}jt.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-tab");t&&Ut(t)})}),yt&&yt.addEventListener("click",()=>Ut("yt-tools-home"));function A(e){const t=i(e);return t?t.checked:!0}function qe(){if(ve)return;const e={theme:u('input[name="theme"]:checked').value,bgColorPicker:i("bg-color-picker").value,progressbarColorPicker:i("progressbar-color-picker").value,primaryColorPicker:i("primary-color-picker").value,secondaryColorPicker:i("secondary-color-picker").value,headerColorPicker:i("header-color-picker").value,iconsColorPicker:i("icons-color-picker").value,menuColorPicker:i("menu-color-picker").value,lineColorPicker:i("line-color-picker").value,timeColorPicker:i("time-color-picker").value,dislikes:i("dislikes-toggle").checked,likeDislikeBar:i("like-dislike-bar-toggle").checked,bookmarks:i("bookmarks-toggle").checked,continueWatching:i("continue-watching-toggle").checked,shortsChannelName:i("shorts-channel-name-toggle").checked,themes:i("themes-toggle").checked,translation:i("translation-toggle").checked,avatars:i("avatars-toggle").checked,reverseMode:i("reverse-mode-toggle").checked,waveVisualizer:i("wave-visualizer-toggle").checked,waveVisualizerSelected:i("select-wave-visualizer-select").value,hideComments:i("hide-comments-toggle").checked,hideSidebar:i("hide-sidebar-toggle").checked,disableAutoplay:i("autoplay-toggle").checked,cinematicLighting:i("cinematic-lighting-toggle").checked,syncCinematic:i("sync-cinematic-toggle").checked,disableSubtitles:i("subtitles-toggle").checked,playerSize:i("player-size-slider").value,selectVideoQuality:i("select-video-qualitys-select").value,languagesComments:i("select-languages-comments-select").value,btnThumbnail:A("btn-thumbnail-toggle"),btnBuffer:A("btn-buffer-toggle"),btnFilterEyes:A("btn-filter-eyes-toggle"),btnReset:A("btn-reset-toggle"),btnRepeat:A("btn-repeat-toggle"),btnBookmark:A("btn-bookmark-toggle"),btnContinueWatching:A("btn-continue-toggle"),btnTranscript:A("btn-transcript-toggle"),btnDownloadMp4:A("btn-mp4-toggle"),btnDownloadMp3:A("btn-mp3-toggle"),btnExternalDownload:A("btn-external-toggle"),btnViewExternal:A("btn-view-external-toggle"),btnPip:A("btn-pip-toggle"),btnScreenshot:A("btn-screenshot-toggle"),btnCheckUpdates:A("btn-updates-toggle"),menu_developermdcm:{bg:se,color:le,accent:ce}};GM_setValue("ytSettingsMDCM",JSON.stringify(e))}function Go(){const e=JSON.parse(GM_getValue("ytSettingsMDCM","{}"));m.settingsLoaded=!0,e.theme&&(u(`input[name="theme"][value="${e.theme}"]`).checked=!0),e.menu_developermdcm=e.menu_developermdcm||{bg:"#0c0c0c",color:"#ffffff",accent:"#ff0000"},i("bg-color-picker").value=e.bgColorPicker||"#000000",i("progressbar-color-picker").value=e.progressbarColorPicker||"#ff0000",i("primary-color-picker").value=e.primaryColorPicker||"#ffffff",i("secondary-color-picker").value=e.secondaryColorPicker||"#ffffff",i("header-color-picker").value=e.headerColorPicker||"#000",i("icons-color-picker").value=e.iconsColorPicker||"#ffffff",i("menu-color-picker").value=e.menuColorPicker||"#000",i("line-color-picker").value=e.lineColorPicker||"#ff0000",i("time-color-picker").value=e.timeColorPicker||"#ffffff",i("dislikes-toggle").checked=e.dislikes||!1,i("like-dislike-bar-toggle").checked=e.likeDislikeBar||!1,i("bookmarks-toggle").checked=e.bookmarks||!1,i("continue-watching-toggle").checked=e.continueWatching||!1,i("shorts-channel-name-toggle").checked=e.shortsChannelName||!1,i("themes-toggle").checked=e.themes||!1,i("translation-toggle").checked=e.translation||!1,i("avatars-toggle").checked=e.avatars||!1,i("reverse-mode-toggle").checked=e.reverseMode||!1,i("wave-visualizer-toggle").checked=e.waveVisualizer||!1,i("select-wave-visualizer-select").value=e.waveVisualizerSelected||"dinamica",i("hide-comments-toggle").checked=e.hideComments||!1,i("hide-sidebar-toggle").checked=e.hideSidebar||!1,i("autoplay-toggle").checked=e.disableAutoplay||!1,i("cinematic-lighting-toggle").checked=e.cinematicLighting||!1,i("sync-cinematic-toggle").checked=e.syncCinematic||!1,i("subtitles-toggle").checked=e.disableSubtitles||!1,i("player-size-slider").value=e.playerSize||100,i("select-video-qualitys-select").value=e.selectVideoQuality||"user",i("select-languages-comments-select").value=e.languagesComments||"en";const t=(o,n)=>{const a=i(o);a&&(a.checked=n!==!1)};t("btn-thumbnail-toggle",e.btnThumbnail),t("btn-buffer-toggle",e.btnBuffer),t("btn-filter-eyes-toggle",e.btnFilterEyes),t("btn-reset-toggle",e.btnReset),t("btn-repeat-toggle",e.btnRepeat),t("btn-bookmark-toggle",e.btnBookmark),t("btn-continue-toggle",e.btnContinueWatching),t("btn-transcript-toggle",e.btnTranscript),t("btn-mp4-toggle",e.btnDownloadMp4),t("btn-mp3-toggle",e.btnDownloadMp3),t("btn-external-toggle",e.btnExternalDownload),t("btn-view-external-toggle",e.btnViewExternal),t("btn-pip-toggle",e.btnPip),t("btn-screenshot-toggle",e.btnScreenshot),t("btn-updates-toggle",e.btnCheckUpdates),se=e.menu_developermdcm.bg,le=e.menu_developermdcm.color,ce=e.menu_developermdcm.accent,j("#bg-color-options .color-box").forEach(o=>{o.classList.toggle("selected",o.dataset.value===se)}),j("#text-color-options .color-box").forEach(o=>{o.classList.toggle("selected",o.dataset.value===le)}),j("#bg-accent-color-options .color-box").forEach(o=>{o.classList.toggle("selected",o.dataset.value===ce)}),x("--popup-bg",se),x("--popup-text",le),x("--popup-accent",ce),x("--yt-enhance-menu-bg",se),x("--yt-enhance-menu-text",le),x("--yt-enhance-menu-accent",ce),vt(),setTimeout(()=>{kt(),e.dislikes&&(Nt(),$t(),Bt=!0),window.location.href.includes("youtube.com/watch?v=")&&Yo()},500)}async function Yo(){return new Promise(e=>{const t=()=>{const o=u("video"),n=i("cinematics");if(!o||!n||isNaN(o.duration)||o.duration===0){setTimeout(t,500);return}if(!JSON.parse(GM_getValue("ytSettingsMDCM","{}")).syncCinematic){const c=i("cinematic-lighting-toggle");c&&n&&(n.style.display=c.checked?"block":"none"),e(!1);return}const l=o.currentTime,s=()=>{if(o.currentTime>=l+1){const c=Ft(),d=i("cinematic-lighting-toggle");d&&d.checked!==c&&(d.checked=c,qe()),e(c)}else setTimeout(s,300)};s()};t()})}j(".color-box").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.type,o=e.dataset.value;t==="bg"?(se=o,x("--popup-bg",o),x("--yt-enhance-menu-bg",o),j("#bg-color-options .color-box").forEach(n=>{n.classList.remove("selected")}),e.classList.add("selected")):t==="color"?(le=o,x("--popup-text",o),x("--yt-enhance-menu-text",o),j("#text-color-options .color-box").forEach(n=>{n.classList.remove("selected")}),e.classList.add("selected")):t==="accent"&&(ce=o,x("--popup-accent",o),x("--yt-enhance-menu-accent",o),j("#bg-accent-color-options .color-box").forEach(n=>{n.classList.remove("selected")}),e.classList.add("selected")),qe()})});function vt(){i("player-size-value").textContent=i("player-size-slider").value}i("reset-player-size").addEventListener("click",()=>{i("player-size-slider").value=100,vt(),kt()});function qt(){const e=i("shareBtn-mdcm"),t=i("importExportBtn"),o=i("closeImportExportBtn");e&&!e.dataset.initialized&&(e.dataset.initialized="true",e.addEventListener("click",function(n){n.stopPropagation();const a=i("shareDropdown"),l=i("importExportArea");if(l&&l.classList.remove("active"),a){const s=!a.classList.contains("is-open");a.classList.toggle("is-open",s),a.style.display=s?"block":"none"}})),t&&!t.dataset.initialized&&(t.dataset.initialized="true",t.addEventListener("click",function(){const n=i("importExportArea"),a=i("shareDropdown");a&&(a.classList.remove("is-open"),a.style.display="none"),n&&n.classList.toggle("active")})),o&&!o.dataset.initialized&&(o.dataset.initialized="true",o.addEventListener("click",function(){const n=i("importExportArea");n&&n.classList.remove("active")}))}function Me(){return window.location.href.includes("youtube.com/watch?v=")}function Ft(){const e=document.getElementById("cinematics");if(!e)return!1;const t=e.innerHTML.trim()!=="",o=e.querySelector("canvas")!==null,n=e.children.length>0,a=e.querySelector('div[style*="position: fixed"]')!==null;return t||o||n||a}function et(){const e=u(".ytp-button.ytp-settings-button");if(!e){console.log("Settings button not found");return}e.click();const t=new MutationObserver(o=>{const n=j(".ytp-menuitem");for(let a of n){const l=a.textContent?.toLowerCase(),s=a.querySelector(".ytp-menuitem-icon svg path");if(l&&(l.includes("cinematic")||l.includes("lighting")||l.includes("cinema"))){console.log("Found cinematic lighting option:",l),a.click(),setTimeout(()=>{u(".ytp-settings-menu")&&document.body.click()},100),t.disconnect();return}if(s&&(s.getAttribute("d")?.includes("M21 7v10H3V7")||s.getAttribute("d")?.includes("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"))){console.log("Found cinematic lighting option by SVG path"),a.click(),setTimeout(()=>{u(".ytp-settings-menu")&&document.body.click()},100),t.disconnect();return}}});t.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),setTimeout(()=>{t.disconnect(),u(".ytp-settings-menu")&&document.body.click()},5e3)}function Ko(e){const t=u(".containerButtons");if(!t)return;const o=(l,s)=>{t.querySelectorAll(l).forEach(c=>{c.style.display=s?"":"none"})};o("#imagen",e.btnThumbnail!==!1),o(".buffer_video",e.btnBuffer!==!1),t.querySelectorAll("div").forEach(l=>{l.querySelector&&l.querySelector("#eyes")&&(l.style.display=e.btnFilterEyes!==!1?"":"none")}),o("#reset_button",e.btnReset!==!1),o("#repeatvideo",e.btnRepeat!==!1);const n=!!e.bookmarks&&e.btnBookmark!==!1;o("#yt-bookmark-add",n),o("#yt-bookmark-toggle",n);const a=!!e.continueWatching&&e.btnContinueWatching!==!1;o("#yt-cw-history-toggle",a),o("#yt-transcript-btn",e.btnTranscript!==!1),o(".btn1",e.btnDownloadMp4!==!1),o(".btn2",e.btnDownloadMp3!==!1),o(".btn3",e.btnDownloadMp4!==!1||e.btnDownloadMp3!==!1),o(".external_link",e.btnExternalDownload!==!1),o(".view_external_link",e.btnViewExternal!==!1),o(".video_picture_to_picture",e.btnPip!==!1),o(".screenshot_video",e.btnScreenshot!==!1),o(".checked_updates",e.btnCheckUpdates!==!1)}function Jo(e){if(i("dislikes-toggle"))try{const t=String(e.theme??"custom"),o=u(`input[name="theme"][value="${t}"]`);if(o)o.checked=!0;else if(t!=="custom"&&t!=="normal"){const s=u('input[name="theme"][value="normal"]');s&&(s.checked=!0)}const n=(s,c)=>{const d=i(s);d&&c!=null&&(d.value=c)},a=(s,c)=>{const d=i(s);d&&(d.checked=!!c)};n("bg-color-picker",e.bgColorPicker||"#000000"),n("progressbar-color-picker",e.progressbarColorPicker||"#ff0000"),n("primary-color-picker",e.primaryColorPicker||"#ffffff"),n("secondary-color-picker",e.secondaryColorPicker||"#ffffff"),n("header-color-picker",e.headerColorPicker||"#000000"),n("icons-color-picker",e.iconsColorPicker||"#ffffff"),n("menu-color-picker",e.menuColorPicker||"#000000"),n("line-color-picker",e.lineColorPicker||"#ff0000"),n("time-color-picker",e.timeColorPicker||"#ffffff"),a("dislikes-toggle",e.dislikes),a("like-dislike-bar-toggle",e.likeDislikeBar),a("bookmarks-toggle",e.bookmarks),a("continue-watching-toggle",e.continueWatching),a("shorts-channel-name-toggle",e.shortsChannelName),a("themes-toggle",e.themes),a("translation-toggle",e.translation),a("avatars-toggle",e.avatars),a("reverse-mode-toggle",e.reverseMode),a("wave-visualizer-toggle",e.waveVisualizer),n("select-wave-visualizer-select",e.waveVisualizerSelected||"dinamica"),a("hide-comments-toggle",e.hideComments),a("hide-sidebar-toggle",e.hideSidebar),a("autoplay-toggle",e.disableAutoplay),a("cinematic-lighting-toggle",e.cinematicLighting),a("sync-cinematic-toggle",e.syncCinematic),a("subtitles-toggle",e.disableSubtitles),n("player-size-slider",e.playerSize??100),n("select-video-qualitys-select",e.selectVideoQuality||"user"),n("select-languages-comments-select",e.languagesComments||"en"),a("btn-thumbnail-toggle",e.btnThumbnail!==!1),a("btn-buffer-toggle",e.btnBuffer!==!1),a("btn-filter-eyes-toggle",e.btnFilterEyes!==!1),a("btn-reset-toggle",e.btnReset!==!1),a("btn-repeat-toggle",e.btnRepeat!==!1),a("btn-bookmark-toggle",e.btnBookmark!==!1),a("btn-continue-toggle",e.btnContinueWatching!==!1),a("btn-transcript-toggle",e.btnTranscript!==!1),a("btn-mp4-toggle",e.btnDownloadMp4!==!1),a("btn-mp3-toggle",e.btnDownloadMp3!==!1),a("btn-external-toggle",e.btnExternalDownload!==!1),a("btn-view-external-toggle",e.btnViewExternal!==!1),a("btn-pip-toggle",e.btnPip!==!1),a("btn-screenshot-toggle",e.btnScreenshot!==!1),a("btn-updates-toggle",e.btnCheckUpdates!==!1);const l=e.menu_developermdcm||{};se=l.bg||se,le=l.color||le,ce=l.accent||ce}catch(t){console.warn("[Youtube Tools] syncHiddenPanelFromSettings",t)}}function kt(){const e=u(".formulariodescarga"),t=u(".formulariodescargaaudio");e!=null&&(e.classList.add("ocultarframe"),t.classList.add("ocultarframe"));let o;try{const r=JSON.parse(GM_getValue("ytSettingsMDCM","{}")||"{}");(ve||!i("dislikes-toggle"))&&(o={theme:r.theme||"custom",bgColorPicker:r.bgColorPicker||"#000000",progressbarColorPicker:r.progressbarColorPicker||"#ff0000",primaryColorPicker:r.primaryColorPicker||"#ffffff",secondaryColorPicker:r.secondaryColorPicker||"#ffffff",headerColorPicker:r.headerColorPicker||"#000000",iconsColorPicker:r.iconsColorPicker||"#ffffff",menuColorPicker:r.menuColorPicker||"#000000",lineColorPicker:r.lineColorPicker||"#ff0000",timeColorPicker:r.timeColorPicker||"#ffffff",dislikes:!!r.dislikes,likeDislikeBar:!!r.likeDislikeBar,bookmarks:!!r.bookmarks,continueWatching:!!r.continueWatching,shortsChannelName:!!r.shortsChannelName,themes:!!r.themes,translation:!!r.translation,avatars:!!r.avatars,reverseMode:!!r.reverseMode,waveVisualizer:!!r.waveVisualizer,waveVisualizerSelected:r.waveVisualizerSelected||"dinamica",hideComments:!!r.hideComments,hideSidebar:!!r.hideSidebar,disableAutoplay:!!r.disableAutoplay,cinematicLighting:!!r.cinematicLighting,syncCinematic:!!r.syncCinematic,disableSubtitles:!!r.disableSubtitles,playerSize:r.playerSize??100,selectVideoQuality:r.selectVideoQuality||"user",languagesComments:r.languagesComments||"en",btnThumbnail:r.btnThumbnail!==!1,btnBuffer:r.btnBuffer!==!1,btnFilterEyes:r.btnFilterEyes!==!1,btnReset:r.btnReset!==!1,btnRepeat:r.btnRepeat!==!1,btnBookmark:r.btnBookmark!==!1,btnContinueWatching:r.btnContinueWatching!==!1,btnTranscript:r.btnTranscript!==!1,btnDownloadMp4:r.btnDownloadMp4!==!1,btnDownloadMp3:r.btnDownloadMp3!==!1,btnExternalDownload:r.btnExternalDownload!==!1,btnViewExternal:r.btnViewExternal!==!1,btnPip:r.btnPip!==!1,btnScreenshot:r.btnScreenshot!==!1,btnCheckUpdates:r.btnCheckUpdates!==!1,menu_developermdcm:r.menu_developermdcm||{bg:se,color:le,accent:ce}},se=o.menu_developermdcm.bg,le=o.menu_developermdcm.color,ce=o.menu_developermdcm.accent,ve&&Jo(o))}catch{o=null}o||(o={theme:u('input[name="theme"]:checked')?.value,bgColorPicker:i("bg-color-picker")?.value,progressbarColorPicker:i("progressbar-color-picker")?.value,primaryColorPicker:i("primary-color-picker")?.value,secondaryColorPicker:i("secondary-color-picker")?.value,headerColorPicker:i("header-color-picker")?.value,iconsColorPicker:i("icons-color-picker")?.value,menuColorPicker:i("menu-color-picker")?.value,lineColorPicker:i("line-color-picker")?.value,timeColorPicker:i("time-color-picker")?.value,dislikes:i("dislikes-toggle")?.checked,likeDislikeBar:i("like-dislike-bar-toggle")?.checked,bookmarks:i("bookmarks-toggle")?.checked,continueWatching:i("continue-watching-toggle")?.checked,shortsChannelName:i("shorts-channel-name-toggle")?.checked,themes:i("themes-toggle")?.checked,translation:i("translation-toggle")?.checked,avatars:i("avatars-toggle")?.checked,reverseMode:i("reverse-mode-toggle")?.checked,waveVisualizer:i("wave-visualizer-toggle")?.checked,waveVisualizerSelected:i("select-wave-visualizer-select")?.value,hideComments:i("hide-comments-toggle")?.checked,hideSidebar:i("hide-sidebar-toggle")?.checked,disableAutoplay:i("autoplay-toggle")?.checked,cinematicLighting:i("cinematic-lighting-toggle")?.checked,syncCinematic:i("sync-cinematic-toggle")?.checked,disableSubtitles:i("subtitles-toggle")?.checked,playerSize:i("player-size-slider")?.value,selectVideoQuality:i("select-video-qualitys-select")?.value,languagesComments:i("select-languages-comments-select")?.value,btnThumbnail:A("btn-thumbnail-toggle"),btnBuffer:A("btn-buffer-toggle"),btnFilterEyes:A("btn-filter-eyes-toggle"),btnReset:A("btn-reset-toggle"),btnRepeat:A("btn-repeat-toggle"),btnBookmark:A("btn-bookmark-toggle"),btnContinueWatching:A("btn-continue-toggle"),btnTranscript:A("btn-transcript-toggle"),btnDownloadMp4:A("btn-mp4-toggle"),btnDownloadMp3:A("btn-mp3-toggle"),btnExternalDownload:A("btn-external-toggle"),btnViewExternal:A("btn-view-external-toggle"),btnPip:A("btn-pip-toggle"),btnScreenshot:A("btn-screenshot-toggle"),btnCheckUpdates:A("btn-updates-toggle"),menu_developermdcm:{bg:se,color:le,accent:ce}}),x("--popup-bg",o.menu_developermdcm.bg),x("--popup-text",o.menu_developermdcm.color),x("--popup-accent",o.menu_developermdcm.accent),x("--yt-enhance-menu-bg",o.menu_developermdcm.bg),x("--yt-enhance-menu-text",o.menu_developermdcm.color),x("--yt-enhance-menu-accent",o.menu_developermdcm.accent),wt(),ve||qt();const n=i("comments");n&&(n.style.display=o.hideComments?"none":"block");const a=u(".themes-hidden");a&&(a.style.display=o.themes?"block":"none");const l=u("#secondary > #secondary-inner");if(l){l.classList.add("side-moi");const r=u(".side-moi");r.style.display=o.hideSidebar?"none":"block"}const s=u(".ytp-autonav-toggle-button");if(s){const r=s.getAttribute("aria-checked")==="true";(o.disableAutoplay&&r||!o.disableAutoplay&&!r)&&s.click()}const c=u(".ytp-subtitles-button");if(c){const r=c.getAttribute("aria-pressed")==="true";(o.disableSubtitles&&r||!o.disableSubtitles&&!r)&&c.click()}Me()&&setTimeout(()=>{const r=Ft();if(o.syncCinematic)(o.cinematicLighting&&!r||!o.cinematicLighting&&r)&&et();else{const p=i("cinematics");p&&(p.style.display=o.cinematicLighting?"block":"none")}},1e3);const d=u("video");d&&(d.style.transform=`scale(${o.playerSize/100})`);const y=u("div#movie_player");let f=localStorage.getItem("yt-player-quality");if(y!=null&&o.selectVideoQuality!=="user")if(f){let r=JSON.parse(f);r.data=JSON.stringify({quality:o.selectVideoQuality,previousQuality:240}),localStorage.setItem("yt-player-quality",JSON.stringify(r))}else{let r={data:JSON.stringify({quality:720,previousQuality:240}),expiration:Date.now()+31536e6,creation:Date.now()};localStorage.setItem("yt-player-quality",JSON.stringify(r))}const k=String(o.theme??"custom"),h=ht[k]||ht[0],L=k==="custom",I=k==="normal",N=u(".theme-custom-options"),B=u(".theme-selected-normal");let P="";const C=r=>{r&&(P+=`
${r}
`)};if(B&&N)if(L){B.style.display="flex",N.style.display="flex";const r=u(".themes-options");r&&(r.style.display="none")}else if(I){const r=u('input[name="theme"][value="custom"]');r&&(r.checked=!1),B.style.display="flex",N.style.display="none";const p=u(".themes-options");p&&(p.style.display="block")}else{B.style.display="none",N.style.display="none";const r=u(".themes-options");r&&(r.style.display="block")}function $(){if(o.themes)if(bt==="dark"&&!L){if(u(".themes-options").style.display="block",B.style.display="none",N.style.display="none",o.theme==="0"){C(`
              .botones_div {
               background-color: transparent;
               border: none;
               color: #ccc !important;
               user-select: none;
             }
               `);return}x("--yt-spec-base-background",h.gradient),x("--yt-spec-text-primary",h.textColor),x("--yt-spec-text-secondary",h.textColor),x("--yt-spec-menu-background",h.gradient);const r=h.colorIcons||h.textLogo||"#ffffff",p=h.textLogo||r;x("--yt-spec-icon-inactive",r),x("--yt-spec-brand-icon-inactive",r),x("--yt-spec-brand-icon-active",h.gradient),x("--yt-spec-static-brand-red",h.gradient),x("--yt-spec-raised-background",h.raised),x("--yt-spec-static-brand-red",h.CurrentProgressVideo),x("--yt-spec-static-brand-white",h.textColor),x("--ytd-searchbox-background",h.gradient),x("--ytd-searchbox-text-color",h.textColor),x("--ytcp-text-primary",h.textColor),C(`
              .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
              background:  ${h.gradient} !important;
              }
            #background.ytd-masthead { background: ${h.gradient}  !important; }
            .ytp-swatch-background-color {
            background: ${h.gradient} !important;
          }
          #shorts-container, #page-manager.ytd-app {
            background: ${h.gradient.replace(/(#[0-9a-fA-F]{6})/g,"$136")};
          }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${h.gradient}  !important;}
            .buttons-tranlate {
            background: ${h.btnTranslate} !important;
            }
            .badge-shape-wiz--thumbnail-default {
            color: ${h.videoDuration} !important;
            background: ${h.gradient} !important;
            }

          /* === iconsColorPicker-equivalent rules (preset colorIcons) === */
          .ytp-menuitem .ytp-menuitem-icon svg path {
            fill: ${r} !important;
          }
          a svg > path,
          .ytp-button svg path {
            fill: ${r} !important;
          }
          svg.path {
            fill: ${r} !important;
          }
          svg {
            color: ${r} !important;
          }
          .ytp-volume-slider-handle:before,
          .ytp-volume-slider-handle,
          .ytp-tooltip.ytp-preview:not(.ytp-text-detail) {
            background-color: ${r} !important;
          }
          .ytp-autonav-toggle-button[aria-checked=true] {
            background-color: ${r} !important;
          }
          .tp-yt-iron-icon {
            fill: ${r} !important;
          }
          .botones_div {
            background-color: transparent !important;
            background: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            color: ${r} !important;
            user-select: none;
          }
          /* Color via currentColor only \u2014 do not force stroke on all paths
             (Tabler has a full-box path with stroke="none"; forcing stroke draws a square) */
          .botones_div svg,
          .containerButtons .botones_div svg {
            color: ${r} !important;
            fill: none !important;
          }
          .yt-spec-icon-shape {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            color: ${r} !important;
          }
          .ytp-time-current, .ytp-time-separator, .ytp-time-duration {
            color: ${r} !important;
          }
          #logo-icon,
          ytd-logo #logo-icon,
          #logo #logo-icon,
          ytd-masthead ytd-logo #logo-icon {
            color: ${p} !important;
          }
          #buttons.ytd-masthead yt-icon,
          #buttons.ytd-masthead .yt-spec-icon-shape,
          #buttons.ytd-masthead .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text,
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color: ${r} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color: ${r} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color: ${r} !important;
          }
          ytd-masthead #guide-button yt-icon,
          ytd-masthead #guide-button .yt-spec-icon-shape,
          ytd-masthead #start yt-icon,
          ytd-masthead #end yt-icon,
          ytd-masthead ytd-button-renderer yt-icon,
          ytd-masthead ytd-notification-topbar-button-renderer yt-icon {
            color: ${r} !important;
          }
          .ytp-svg-fill {
            fill: ${r} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20 {
            fill: ${r} !important;
          }

            `)}else bt==="dark"&&L?(x("--yt-spec-base-background",o.bgColorPicker),x("--yt-spec-text-primary",o.primaryColorPicker),x("--yt-spec-text-secondary",o.secondaryColorPicker),x("--yt-spec-menu-background",o.menuColorPicker),x("--yt-spec-icon-inactive",o.iconsColorPicker),x("--yt-spec-brand-icon-inactive",o.primaryColorPicker),x("--yt-spec-brand-icon-active",o.primaryColorPicker),x("--yt-spec-raised-background",o.headerColorPicker),x("--yt-spec-static-brand-red",o.lineColorPicker),x("--yt-spec-static-brand-white",o.timeColorPicker),x("--ytd-searchbox-background",o.primaryColorPicker),x("--ytd-searchbox-text-color",o.secondaryColorPicker),x("--ytcp-text-primary",o.primaryColorPicker),C(`
            .html5-video-player {
                color: ${o.primaryColorPicker} !important;
              }
                .ytProgressBarLineProgressBarPlayed {
                background: linear-gradient(to right, ${o.progressbarColorPicker} 80%, ${o.progressbarColorPicker} 100%);

                }
              .ytp-menuitem .ytp-menuitem-icon svg path{
                fill: ${o.iconsColorPicker} !important;
                }
                .ytThumbnailOverlayProgressBarHostWatchedProgressBarSegment {
                  background: linear-gradient(to right, ${o.lineColorPicker} 80%, ${o.lineColorPicker} 100%) !important;
                }
                .yt-badge-shape--thumbnail-default {
                  color: ${o.timeColorPicker} !important;
                }
                a svg > path, .ytp-button svg path  {
                  fill: ${o.iconsColorPicker} !important;
              }
                svg.path{ 
                 fill: ${o.iconsColorPicker} !important;
                }

              svg {
                color: ${o.iconsColorPicker} !important;
                } 
              .ytp-volume-slider-handle:before, .ytp-volume-slider-handle, .ytp-tooltip.ytp-preview:not(.ytp-text-detail) {
                background-color: ${o.iconsColorPicker} !important;
              }
                .ytp-autonav-toggle-button[aria-checked=true] {
                  background-color: ${o.iconsColorPicker} !important;
                }
                  .tp-yt-iron-icon {
                   fill: ${o.iconsColorPicker} !important;
                  }

             .botones_div {
            background-color: transparent;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            color: ${o.iconsColorPicker} !important;
            user-select: none;
          }
          .botones_div svg,
          .containerButtons .botones_div svg {
            color: ${o.iconsColorPicker} !important;
            fill: none !important;
          }
              #container.ytd-searchbox {
              color: red !important;
              }
            .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
            background:  ${o.primaryColorPicker} !important;
            }
            .yt-spec-icon-shape {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              color: ${o.iconsColorPicker} !important;
          }
            .ytp-time-current, .ytp-time-separator, .ytp-time-duration {
              color: ${o.iconsColorPicker} !important;
            }
            #background.ytd-masthead { background: ${o.headerColorPicker}  !important; }
            .ytp-swatch-background-color {
            background: ${o.progressbarColorPicker} !important;
          }
        #shorts-container, #page-manager.ytd-app {
            background: ${o.bgColorPicker}36;
            }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${o.bgColorPicker}  !important;}

            .badge-shape-wiz--thumbnail-default {
            color: ${o.timeColorPicker} !important;
             background: ${o.secondaryColor} !important;
            }
             #logo-icon,
             ytd-logo #logo-icon,
             #logo #logo-icon,
             ytd-masthead ytd-logo yt-icon {
             color: unset !important;
             fill: unset !important;
          }
          #buttons.ytd-masthead yt-icon,
          #buttons.ytd-masthead .yt-spec-icon-shape,
          #buttons.ytd-masthead .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text,
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color:  ${o.iconsColorPicker} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color:  ${o.iconsColorPicker} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color:  ${o.iconsColorPicker} !important;
          }
          .ytp-svg-fill {
            fill:  ${o.iconsColorPicker} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20{
            fill:  ${o.iconsColorPicker} !important;
          }
            `)):C(`
            .botones_div {
             background-color: transparent;
             border: none;
             color: #000 !important;
             user-select: none;
           }
             `);else C(`
          .botones_div {
           background-color: transparent;
           border: none;
           color: #ccc !important;
           user-select: none;
         }
           `)}C(`
      #columns.style-scope.ytd-watch-flexy {
        flex-direction: ${o.reverseMode?"row-reverse":"row"} !important;
        padding-left: ${o.reverseMode?"20px":"0"} !important;
        }
        #secondary.style-scope.ytd-watch-flexy {display: ${o.hideSidebar?"none":"block"} !important;}


        #icon-menu-settings {
         color: ${o.iconsColorPicker} !important;
        }


      `),$(),uo(P),$o(o),To(o.continueWatching),Ko(o),zt(o,5),Mo(o.shortsChannelName),Io();function F(){if(Ee=o.waveVisualizerSelected||Ee||"dinamica",!o.waveVisualizer){tt(!0);return}const r=u("video"),p=u(".ytp-miniplayer-ui");(r&&document.location.href.includes("watch")||p)&&(r!==de||!at?(tt(!0),yn(r)):G&&r.paused===!1&&Ve())}F();function V(){if(!window.location.href.includes("youtube.com/watch")||u("#button_copy_description"))return;const r=u("#bottom-row.style-scope.ytd-watch-metadata");if(!r)return;r.insertAdjacentHTML("beforebegin",`
        <div id="button_copy_description" style="display: flex; justify-content: end; align-items: center;margin-top: 10px;" >
          <button id="copy-description" title="Copy description" class="botones_div" type="button" style="cursor: pointer;">
            <i style="font-size: 20px;" class="fa-solid fa-copy"></i>
          </button>
        </div>
      `),i("copy-description").addEventListener("click",()=>{const v=[...j('script[type="application/ld+json"]')];for(let M of v)try{const D=JSON.parse(M.innerText);if(D["@type"]==="VideoObject"){const H=`\u{1F4C5} Date published: ${D.uploadDate||"No disponible"}
Author: ${D.author||"No disponible"}
\u{1F3AC} Name video: ${D.name||"No disponible"}
\u{1F5BC}\uFE0F Thumbnail: ${Array.isArray(D.thumbnailUrl)?D.thumbnailUrl.join(", "):D.thumbnailUrl||"No disponible"}
\u{1F4DD} Description: ${D.description||"No disponible"}


\u{1F3AD} Category: ${D.genre||"No disponible"}
`;navigator.clipboard.writeText(H)}}catch{O("error","Error parsing JSON-LD")}finally{O("success","Description copied")}})}V();async function z(){const r=j("#content-text");if(u(".buttons-tranlate"))return;const p=$e,v=i("select-languages-comments-select").value;for(let H=0;H<r.length;H++){const R=Object.entries(p).map(([ye,te])=>`<option value="${ye}" ${ye===v?"selected":""}>${te}</option>`).join(""),We=`
          <div class="traductor-container" data-index="${H}">
          <button class="buttons-tranlate" id="btn${H}"> Translate <i class="fa-solid fa-language"></i></button>
          <select class="select-traductor" id="select${H}">
           ${R}
          </select>
          </div>
        `;r[H].insertAdjacentHTML("afterend",We)}const M=j(".buttons-tranlate"),D=j(".select-traductor");M.forEach((H,R)=>{H.addEventListener("click",()=>{const ye=`?client=dict-chrome-ex&sl=auto&tl=${D[R].value}&q=`+r[R].textContent;fetch(ro+ye).then(te=>te.json()).then(te=>{r[R].textContent=te[0][0],M[R].textContent="Translated"}).catch(te=>{console.error("Error en la traducci\xF3n:",te)})})})}function K(r){j(r).forEach(p=>p.remove())}function ke(){j("#author-thumbnail-button #img.style-scope.yt-img-shadow").length>0&&o.avatars&&(K(".yt-image-avatar-download"),b());const p=u("#content-text"),v=u("ytd-item-section-renderer[static-comments-header] #contents");o.translation&&(p!==void 0||v!==void 0)&&(K(".buttons-tranlate"),K(".select-traductor"),z())}window.onscroll=()=>{ke()};const ee=u(".anchored-panel.style-scope.ytd-shorts #contents.style-scope.ytd-item-section-renderer.style-scope.ytd-item-section-renderer");ee&&new IntersectionObserver(p=>{p.forEach(v=>{v.isIntersecting&&ee.addEventListener("scroll",()=>{ke()})})},{threshold:.1}).observe(ee);function b(){j("#author-thumbnail-button #img.style-scope.yt-img-shadow").forEach(p=>{if(p.parentElement.querySelector(".yt-image-avatar-download"))return;const v=ie("button");v.innerHTML='<i class="fa fa-download"></i>',v.classList.add("yt-image-avatar-download"),v.onclick=async function(){try{const M=p.src.split("=")[0],H=await(await fetch(M)).blob(),R=URL.createObjectURL(H),ye=p.closest("ytd-comment-thread-renderer, ytd-comment-renderer")?.querySelector("#author-text");let te=ye?ye.textContent.trim():"avatar";te=te.replace(/[\/\\:*?"<>|]/g,"");const Ne=ie("a");Ne.href=R,Ne.download=`${te}_avatar.jpg`||"avatar.jpg",document.body.appendChild(Ne),Ne.click(),document.body.removeChild(Ne),URL.revokeObjectURL(R)}catch(M){console.error("Error al descargar la imagen:",M)}},p.parentElement.style.position="relative",p.parentElement.appendChild(v)})}const g=()=>{const p=`https://www.youtube.com/watch?v=${window.location.pathname.split("/").pop()}`;window.open(p,"_blank"),u("video.video-stream.html5-main-video").pause()};function T(r,p){const v=u("reel-action-bar-view-model");if(!v)return;const M=v.querySelector("[data-yt-tools-shorts-views]");if(!M)return;const D=M.querySelector('.yt-spec-button-shape-with-label__label span, [role="text"]');D&&(D.textContent=Number.isFinite(p)&&p>=0?xe(p,0):"\u2014")}function _(r,p){const v=u("reel-action-bar-view-model");if(!v)return;const M=v.querySelector("[data-yt-tools-shorts-rating]");if(!M)return;const D=M.querySelector('.yt-spec-button-shape-with-label__label span, [role="text"]');D&&(D.textContent=Number.isFinite(p)&&p>=0&&p<=5?p.toFixed(1):"\u2014")}function U(r){const p=document.createElement("div");p.className="button-view-model ytSpecButtonViewModelHost",r.dataAttr&&p.setAttribute(r.dataAttr,"1"),p.innerHTML=`
        <label class="yt-spec-button-shape-with-label">
          <button type="button" class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-l yt-spec-button-shape-next--icon-button yt-spec-button-shape-next--enable-backdrop-filter-experiment yt-spec-button-shape-next--enable-drop-shadow-experiment" title="${r.title||""}" aria-label="${r.ariaLabel||""}">
            <div class="yt-spec-button-shape-next__icon" aria-hidden="true">
              <span class="yt-icon-shape ytSpecIconShapeHost">${r.iconSvg||""}</span>
            </div>
          </button>
          <div class="yt-spec-button-shape-with-label__label" aria-hidden="false">
            <span class="yt-core-attributed-string yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--text-alignment-center yt-core-attributed-string--word-wrapping" role="text">${r.labelText||""}</span>
          </div>
        </label>
      `;const v=p.querySelector("button");return r.onclick&&v.addEventListener("click",r.onclick),p}const ae='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>',re='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" /><path d="M16 3l-4 4l-4 -4" /></svg>',Le='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';function un(){const r=document.location.pathname.startsWith("/shorts"),p=u("reel-action-bar-view-model");if(!r||!p){document.querySelectorAll("[data-yt-tools-shorts-classic], [data-yt-tools-shorts-views], [data-yt-tools-shorts-rating]").forEach(R=>R.remove());return}if(p.querySelector("[data-yt-tools-shorts-classic]"))return;const v=U({dataAttr:"data-yt-tools-shorts-classic",title:"Classic mode",ariaLabel:"Classic mode",iconSvg:re,labelText:"Cl\xE1sico",onclick:g}),M=U({dataAttr:"data-yt-tools-shorts-views",title:"Vistas",ariaLabel:"Vistas",iconSvg:ae,labelText:"\u2014",onclick:function(){}}),D=U({dataAttr:"data-yt-tools-shorts-rating",title:"Rating (likes/dislikes)",ariaLabel:"Rating",iconSvg:Le,labelText:"\u2014",onclick:function(){}});p.insertBefore(D,p.firstChild),p.insertBefore(M,p.firstChild),p.insertBefore(v,p.firstChild);const H=document.location.pathname.split("/").filter(Boolean)[1];if(H){const R=Ce(H);R&&R.viewCount!=null&&T(H,R.viewCount),R&&R.rating!=null&&_(H,R.rating)}m.updateShortsViewsButton=T,m.updateShortsRatingButton=_}const to=()=>{un()},fn=()=>{if(m.shortsObserver)return;const r=new MutationObserver(()=>{to(),Ht()});r.observe(document.body,{childList:!0,subtree:!0}),m.shortsObserver=r};if(m.shortsObserver||(to(),fn()),u("body")!=null){const r=u("ytd-item-section-renderer[static-comments-header] #contents");r!=null&&o.theme!=="custom"&&(v=>new IntersectionObserver(D=>{if(D[0].isIntersecting)r.style.background=`${h.gradient??""}`;else return}).observe(u(`${v}`)))("ytd-item-section-renderer[static-comments-header] #contents")}function Lt(r){if(isNaN(r))return"0h 0m 0s";r=Math.floor(r);const p=Math.floor(r/3600),v=Math.floor(r%3600/60),M=r%60;return`${p}h ${v}m ${M}s`}function oo(){i("total-time").textContent=Lt(Oe),i("video-time").textContent=Lt(He),i("shorts-time").textContent=Lt(Re);const r=86400;i("usage-bar").style.width=`${Oe/r*100}%`,i("video-bar").style.width=`${He/r*100}%`,i("shorts-bar").style.width=`${Re/r*100}%`}function mn(r){if(/\/shorts\//.test(window.location.pathname))return"shorts";let p=r;for(;(p=p.parentElement)!==null;)if(p.classList.contains("shorts-container")||p.classList.contains("reel-video")||p.tagName==="YTD-REEL-VIDEO-RENDERER")return"shorts";return r.closest("ytd-watch-flexy")||r.closest("#primary-inner")||r.closest("ytd-thumbnail")||r.closest("ytd-rich-item-renderer")?"video":null}function gn(){const r=j("video");for(const p of r)if(!p.paused&&!p.ended&&p.readyState>2)return p;return null}function tt(r=!1){if(r&&Ye&&(cancelAnimationFrame(Ye),Ye=null),de&&(de.removeEventListener("play",Ve),de.removeEventListener("pause",ue),de.removeEventListener("ended",ue)),r){if(E&&E.parentNode&&(E.parentNode.removeChild(E),E=null,S=null),G&&G.parentNode&&(G.parentNode.removeChild(G),G=null),Be){try{Be.disconnect()}catch{}Be=null}if(X){try{X.close()}catch{}X=null}de&&de[Ke]&&delete de[Ke],de=null,at=!1}else E&&(E.style.opacity="0"),G&&(G.style.opacity="0")}function hn(){if(E)return;const r=document.body;E=document.createElement("canvas"),E.id="wave-visualizer-canvas",E.width=window.innerWidth,E.height=rt,E.style.position="fixed",E.style.left="0",E.style.top="0",E.style.width="100%",E.style.pointerEvents="none",E.style.backgroundColor="transparent",E.style.zIndex="10000",E.style.opacity="0",E.style.transition="opacity 0.3s",r.appendChild(E),S=E.getContext("2d")}function bn(){if(Ee=o.waveVisualizerSelected||Ee||"dinamica",G)return;G=ie("div"),G.id="wave-visualizer-control";const r=i("select-wave-visualizer-select");r&&r.dataset.ytWaveBound!=="1"&&(r.dataset.ytWaveBound="1",r.addEventListener("change",p=>{Ee=p.target.value,r.value=p.target.value,qe()}))}function yn(r){if(!r||r[Ke])return;if(r[Ke]=!0,tt(!1),de=r,hn(),bn(),X){try{X.close()}catch{}X=null}const p=window.AudioContext||window.webkitAudioContext;X=new p,we=X.createAnalyser(),we.fftSize=2048,we.smoothingTimeConstant=.85,oe=we.fftSize,nt=new Uint8Array(oe),ne=new Array(oe).fill(128);try{Be=X.createMediaElementSource(r),Be.connect(we),we.connect(X.destination)}catch(M){O("error","MediaElementSource or error:",M),tt(!0);return}r.removeEventListener("play",Ve),r.removeEventListener("pause",ue),r.removeEventListener("ended",ue),r.addEventListener("play",Ve),r.addEventListener("pause",ue),r.addEventListener("ended",ue);const v=()=>{E&&(E.width=window.innerWidth,E.height=rt)};window.removeEventListener("resize",v),window.addEventListener("resize",v),no(),at=!0}function no(){if(Ye=requestAnimationFrame(no),parseFloat(E.style.opacity)<=0)return;we.getByteTimeDomainData(nt);for(let p=0;p<oe;p++)ne[p]+=po*(nt[p]-ne[p]);S.clearRect(0,0,E.width,E.height);let r=E.width/oe;switch(Ee){case"linea":{S.lineWidth=2,S.strokeStyle="lime",S.beginPath();let p=0;for(let v=0;v<oe;v++){let M=Math.max(0,ne[v]-128)*pe;v===0?S.moveTo(p,M):S.lineTo(p,M),p+=r}S.stroke();break}case"barras":{let p=0;for(let v=0;v<oe;v+=5){let M=Math.max(0,ne[v]-128)*pe;S.fillStyle="cyan",S.fillRect(p,0,r*4,M),p+=r*5}break}case"curva":{S.lineWidth=2,S.strokeStyle="yellow",S.beginPath(),S.moveTo(0,Math.max(0,ne[0]-128)*pe);for(let p=0;p<oe-1;p++){let v=p*r,M=(p+1)*r,D=Math.max(0,ne[p]-128)*pe,H=Math.max(0,ne[p+1]-128)*pe,R=v+r/3,We=D,ye=M-r/3,te=H;S.bezierCurveTo(R,We,ye,te,M,H)}S.stroke();break}case"picos":{S.fillStyle="magenta";let p=0;for(let v=0;v<oe;v+=5){let M=Math.max(0,ne[v]-128)*pe;S.beginPath(),S.arc(p,M,2,0,Math.PI*2),S.fill(),p+=r*5}break}case"solida":{S.beginPath();let p=0;S.moveTo(0,0);for(let v=0;v<oe;v++){let M=Math.max(0,ne[v]-128)*pe;S.lineTo(p,M),p+=r}S.lineTo(E.width,0),S.closePath(),S.fillStyle="rgba(0,255,0,0.3)",S.fill();break}case"dinamica":{let p=S.createLinearGradient(0,0,E.width,0);p.addColorStop(0,"red"),p.addColorStop(.5,"purple"),p.addColorStop(1,"blue"),S.lineWidth=3,S.strokeStyle=p,S.beginPath();let v=0;for(let M=0;M<oe;M++){let D=Math.max(0,ne[M]-128)*pe;M===0?S.moveTo(v,D):S.lineTo(v,D),v+=r}S.stroke();break}case"montana":{S.beginPath();let p=0;S.moveTo(0,0);for(let v=0;v<oe;v++){let M=(ne[v]-128)*pe*.8;S.lineTo(p,M),p+=r}S.lineTo(E.width,0),S.closePath(),S.fillStyle="rgba(128,128,255,0.4)",S.fill();break}default:break}}if(!m.statsObserver){const r=new MutationObserver(()=>{const p=gn();p!==Pe&&(Pe=p,Pe&&(it=mn(Pe)))});r.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),m.statsObserver=r}F(),m.statsIntervalId||(m.statsIntervalId=setInterval(()=>{const r=Date.now(),p=(r-Et)/1e3;document.visibilityState==="visible"&&(Oe+=p),Pe&&!Pe.paused&&(it==="video"?He+=p:it==="shorts"&&(Re+=p)),Et=r,GM_setValue(fe.USAGE,Oe),GM_setValue(fe.VIDEO,He),GM_setValue(fe.SHORTS,Re),oo()},mo)),oo(),m.settingsLoaded&&!ve&&qe()}let Wt=!0;function wt(){const e=u(".style-scope .ytd-watch-metadata"),t=u("#contents");e!=null&&Wt&&(Wt=!1,(e.offsetWidth||e.offsetHeight||e.getClientRects().length||t!=null)&&e.insertAdjacentHTML("beforebegin",Vt));const o=u(".formulariodescarga"),n=u(".formulariodescargaaudio"),a=u(".btn1"),l=u(".btn2"),s=u(".btn3"),c=u(".selectcalidades"),d=u(".selectcalidadesaudio");[o,n].forEach(b=>{b&&b.dataset.ytToolsPreventDefault!=="1"&&(b.addEventListener("click",g=>g.preventDefault()),b.dataset.ytToolsPreventDefault="1")}),c&&c.dataset.ytToolsBound!=="1"&&(c.dataset.ytToolsBound="1",c.addEventListener("change",b=>{const g=b.target.value;if(!g)return;const T=i("descargando"),_=T.querySelector(".download-text"),U=T.querySelector(".download-quality"),ae=T.querySelector(".download-btn"),re=T.querySelector(".retry-btn"),Le=T.querySelector(".progress-container");T.classList.add("video"),T.classList.remove("ocultarframe"),_.textContent=`Download ${g.toUpperCase()} And Please Wait...`,U.textContent=`${g}p`,ae.style.display="block",re.style.display="none",Le.style.display="none",T.dataset.quality=g,T.dataset.type="video"})),d&&d.dataset.ytToolsBound!=="1"&&(d.dataset.ytToolsBound="1",d.addEventListener("change",b=>{const g=b.target.value;if(!g)return;const T=i("descargandomp3"),_=T.querySelector(".download-text"),U=T.querySelector(".download-quality"),ae=T.querySelector(".download-btn"),re=T.querySelector(".retry-btn"),Le=T.querySelector(".progress-container");T.classList.add("audio"),T.classList.remove("ocultarframeaudio"),_.textContent=`Download ${g.toUpperCase()} And Please Wait...`,U.textContent=g.toUpperCase(),ae.style.display="block",re.style.display="none",Le.style.display="none",T.dataset.quality=g,T.dataset.type="audio"})),s&&s.dataset.ytToolsBound!=="1"&&(s.dataset.ytToolsBound="1",s.addEventListener("click",()=>{c?.classList.add("ocultarframe"),d?.classList.add("ocultarframeaudio");const b=i("descargando"),g=i("descargandomp3");b&&(b.classList.add("ocultarframe"),b.classList.remove("video","audio","completed"),b.removeAttribute("data-quality"),b.removeAttribute("data-type"),b.removeAttribute("data-downloading"),b.removeAttribute("data-url-opened"),b.removeAttribute("data-last-download-url"),b.querySelector?.(".download-again-btn")?.style&&(b.querySelector(".download-again-btn").style.display="none")),g&&(g.classList.add("ocultarframeaudio"),g.classList.remove("video","audio","completed"),g.removeAttribute("data-quality"),g.removeAttribute("data-type"),g.removeAttribute("data-downloading"),g.removeAttribute("data-url-opened"),g.removeAttribute("data-last-download-url"),g.querySelector?.(".download-again-btn")?.style&&(g.querySelector(".download-again-btn").style.display="none")),o?.classList.add("ocultarframe"),n?.classList.add("ocultarframe"),o?.reset(),n?.reset()})),m.downloadClickHandlerInitialized||(m.downloadClickHandlerInitialized=!0,document.addEventListener("click",b=>{const g=b.target;if(!(g instanceof Element))return;const T=g.closest(".download-btn")||g.closest(".retry-btn")||g.closest(".progress-retry-btn")||g.closest(".download-again-btn");if(!T)return;const _=T.closest(".download-container");if(!_)return;const U=_.dataset.quality,ae=_.dataset.type;if(T.classList.contains("download-again-btn")){const re=_.dataset.lastDownloadUrl;re&&window.open(re);return}!U||!ae||(T.classList.contains("progress-retry-btn")&&(_.dataset.downloading="false",_.dataset.urlOpened="false",_.dataset.lastDownloadUrl="",_.querySelector?.(".download-again-btn")?.style&&(_.querySelector(".download-again-btn").style.display="none")),fo(U,_))})),a&&a.dataset.ytToolsBound!=="1"&&(a.dataset.ytToolsBound="1",a.addEventListener("click",()=>{c?.classList.remove("ocultarframe"),d?.classList.add("ocultarframeaudio");const b=i("descargando"),g=i("descargandomp3");b&&(b.classList.add("ocultarframe"),b.classList.remove("video","audio","completed"),b.removeAttribute("data-quality"),b.removeAttribute("data-type"),b.removeAttribute("data-downloading"),b.removeAttribute("data-url-opened")),g&&(g.classList.add("ocultarframeaudio"),g.classList.remove("video","audio","completed"),g.removeAttribute("data-quality"),g.removeAttribute("data-type"),g.removeAttribute("data-downloading"),g.removeAttribute("data-url-opened")),o?.classList.remove("ocultarframe"),o.style.display="",n?.classList.add("ocultarframe"),o?.reset(),n?.reset()})),l&&l.dataset.ytToolsBound!=="1"&&(l.dataset.ytToolsBound="1",l.addEventListener("click",()=>{d?.classList.remove("ocultarframeaudio"),c?.classList.add("ocultarframe");const b=i("descargando"),g=i("descargandomp3");b&&(b.classList.add("ocultarframe"),b.classList.remove("video","audio","completed"),b.removeAttribute("data-quality"),b.removeAttribute("data-type"),b.removeAttribute("data-downloading"),b.removeAttribute("data-url-opened")),g&&(g.classList.add("ocultarframeaudio"),g.classList.remove("video","audio","completed"),g.removeAttribute("data-quality"),g.removeAttribute("data-type"),g.removeAttribute("data-downloading"),g.removeAttribute("data-url-opened")),n?.classList.remove("ocultarframe"),n.style.display="",o?.classList.add("ocultarframe"),n?.reset(),o?.reset()}));const y=u("#imagen"),f=u("#eyes");function k(){const b=u(".buffer_video");b&&(b.dataset.listenerAdded||(b.addEventListener("click",()=>{const g=u("video.video-stream.html5-main-video");if(!g){console.log("No se encontr\xF3 el video en la p\xE1gina.");return}const T=new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0});g.dispatchEvent(T),setTimeout(()=>{const _=u("body > div.ytp-popup.ytp-contextmenu > div > div > div:nth-child(7)");_?_.click():console.log("Opci\xF3n no encontrada, intenta aumentar el tiempo de espera.")},1e3)}),b.dataset.listenerAdded="true"))}k();let h=0;const L=u("#repeatvideo"),I=u(".icon-tabler-repeat"),N=u("#movie_player > div.html5-video-container > video");L!=null&&(L.onclick=()=>{if(u("#cinematics > div")!=null||N!=null)switch(h+=1,h){case 1:document.querySelector("#movie_player > div.html5-video-container > video")?.setAttribute("loop","true"),I.innerHTML=`  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"></path>
                    <path d="M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"></path>
                    <path d="M3 3l18 18"></path>
                 </svg> `;break;case 2:h=0,document.querySelector("#movie_player > div.html5-video-container > video")?.removeAttribute("loop"),I.innerHTML=` <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
                  </svg>`;break}});const B=u("#cinematics > div");B!=null&&(B.style="position: fixed; inset: 0px; pointer-events: none; transform: scale(1.5, 2)");const P=u("#reset_button");P?.addEventListener("click",function(){localStorage.getItem("colores")!=null&&(localStorage.removeItem("colores"),u("#ojosprotect").style.backgroundColor="transparent",setTimeout(()=>{location.reload()},400))}),y!=null&&(y.onclick=()=>{if(u("#cinematics > div")!=null||N!=null){let g=new URLSearchParams(window.location.search).get("v");const T=`https://i.ytimg.com/vi/${g}/maxresdefault.jpg`;fetch(T).then(_=>{if(!_.ok)throw new Error(`HTTP error! Status: ${_.status}`);return _.blob()}).then(_=>{if(_.size/1024>=20){window.open(`https://i.ytimg.com/vi/${g}/maxresdefault.jpg`,"popUpWindow","height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes");const ae=URL.createObjectURL(_),re=ie("a");re.href=ae;const Le=u("h1.style-scope.ytd-watch-metadata").innerText;re.download=`${Le}_maxresdefault.jpg`,re.click(),URL.revokeObjectURL(ae)}else console.log("La imagen no excede los 20 KB. No se descargar\xE1.")}).catch(_=>{alert("No found image"),console.error("Error al obtener la imagen:",_)})}});const C=i("background_image"),$=u("ytd-app"),F=localStorage.getItem("backgroundImage");F&&($.style=`
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
 
        background-image: url(${F}) !important`),C.addEventListener("change",b=>{const g=b.target.files[0];if(g){const T=new FileReader;T.onload=function(_){const U=_.target.result;localStorage.setItem("backgroundImage",U),$.style.backgroundImage=`url(${U})`},T.readAsDataURL(g)}});const V=u(".external_link");V!=null&&(V.onclick=()=>{const b=new URLSearchParams(window.location.search);let g;g=b.get("v"),window.open(`https://ssyoutube.com/watch?v=${g}&t=2s`,"popUpWindow","height=800,width=1000,left=50%,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=yes,location=no,directories=yes, status=no")});const z=u(".view_external_link");z!=null&&(z.onclick=()=>{u("video").click();const b=new URLSearchParams(window.location.search);let g;g=b.get("v"),window.open(`https://www.youtube.com/embed/${g}?rel=0&controls=2&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&autoplay=1`)});const K=u(".video_picture_to_picture");K!=null&&(K.onclick=()=>{const b=u("video");"pictureInPictureEnabled"in document?document.pictureInPictureElement||b.requestPictureInPicture().then(()=>{}).catch(g=>{console.error("Error al activar el modo Picture-in-Picture:",g)}):alert("Picture-in-Picture not supported")},f?.addEventListener("input",function(){(u("#cinematics > div")!=null||N!=null)&&(u("#ojosprotect").style.backgroundColor=f.value)}),clearInterval(wt));const ke=u(".checked_updates");ke!=null&&(ke.onclick=()=>{window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js")});const ee=u(".screenshot_video");if(ee!=null)ee.onclick=()=>{const b=u("video"),g=ie("canvas");g.width=b.videoWidth,g.height=b.videoHeight,g.getContext("2d").drawImage(b,0,0,g.width,g.height);const _=g.toDataURL("image/png"),U=ie("a");U.href=_;const ae=u("h1.style-scope.ytd-watch-metadata").innerText;U.download=`${b.currentTime.toFixed(0)}s_${ae}.png`,U.click()};else{const b=u(".containerButtons");b!=null&&(b.innerHTML="")}clearInterval(wt)}console.log("Script en ejecuci\xF3n by: DeveloperMDCM"),console.log(`%cYoutube Tools Extension NEW UI
%cRun %c(v2.5.1)
By: DeveloperMDCM.`,"color: #F00; font-size: 24px; font-family: sans-serif;","font-size: 14px; font-family: monospace;","color: #00aaff; font-size: 16px; font-family: sans-serif;"),localStorage.getItem("notification-developerMDCM")||(O("info","Youtube Tools by: DeveloperMDCM :)"),localStorage.setItem("notification-developerMDCM",!0)),j("input").forEach(e=>{e.addEventListener("change",Je),e.type==="range"&&e.addEventListener("change",()=>{vt(),Je()})});function xt(e){const t=i(e);t&&t.dataset.ytToolsBound!=="1"&&(t.dataset.ytToolsBound="1",t.addEventListener("change",()=>{try{qe()}catch(o){console.error("saveSettings error:",o)}Je()}))}xt("select-video-qualitys-select"),xt("select-languages-comments-select"),xt("select-wave-visualizer-select"),i("export-config").addEventListener("click",()=>{const e=GM_getValue("ytSettingsMDCM","{}");i("config-data").value=e;const t=e;try{JSON.parse(t),GM_setValue("ytSettingsMDCM",t),setTimeout(()=>{O("success","Configuration export successfully!")},1e3)}catch{O("error","Invalid configuration data. Please check and try again.")}}),i("import-config").addEventListener("click",()=>{const e=i("config-data").value;try{JSON.parse(e),GM_setValue("ytSettingsMDCM",e),setTimeout(()=>{O("success","Configuration imported successfully!"),window.location.reload()},1e3),window.location.reload()}catch{O("error","Invalid configuration data. Please check and try again.")}}),J.style.display="none";function Qo(e,t){const o=setInterval(()=>{u(e)&&(clearInterval(o),t())},100)}i("wave-visualizer-toggle").addEventListener("change",()=>{u("#wave-visualizer-toggle").checked?O("success","Wave visualizer enabled"):(ue(),O("success","Wave visualizer disabled realod page"),setTimeout(()=>{window.location.reload()},1e3))});const Gt=i("cinematic-lighting-toggle");Gt&&Gt.addEventListener("change",()=>{const e=u("#cinematic-lighting-toggle"),t=u("#sync-cinematic-toggle"),o=i("cinematics");e.checked?O("success","Cinematic mode enabled"):O("success","Cinematic mode disabled"),t.checked?setTimeout(()=>{et()},300):o&&(o.style.display=e.checked?"block":"none")});const Yt=i("sync-cinematic-toggle");Yt&&Yt.addEventListener("change",()=>{const e=u("#sync-cinematic-toggle"),t=u("#cinematic-lighting-toggle"),o=i("cinematics");e.checked?(O("success","Sync with YouTube enabled"),t.checked&&setTimeout(()=>{et()},500)):(O("success","Sync with YouTube disabled"),o&&(o.style.display=t.checked?"block":"none"))}),Qo("ytd-topbar-menu-button-renderer",()=>{Go(),qt(),setTimeout(wo,3e3)}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement!==null?ue():Ve()}),document.addEventListener("yt-navigate-finish",()=>{document.location.href.includes("watch")||ue(),Je(),document.location.href.includes("youtube.com")&&(document.location.href.includes("youtube.com/watch")?[300,600,1200,2200,3500].forEach(e=>setTimeout(()=>{Ie(),ze(),_o()},e)):[300,700,1500,2800].forEach(e=>setTimeout(()=>{Ie(),ze()},e)))}),GM_registerMenuCommand("Update Script by: DeveloperMDCM",function(){window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js","_blank")});const Kt=i("background_image"),ge=i("background-image-preview"),he=i("remove-background-image"),Jt=localStorage.getItem("backgroundImage");Jt?(ge.style.backgroundImage=`url(${Jt})`,ge.classList.add("has-image"),he.style.display="flex"):(ge.style.backgroundImage="",ge.classList.remove("has-image"),he.style.display="none"),ge.addEventListener("click",e=>{e.target!==he&&Kt.click()}),Kt.addEventListener("change",e=>{const t=e.target.files[0];if(!t)return;const o=new FileReader;o.onload=function(n){const a=n.target.result;ge.style.backgroundImage=`url(${a})`,ge.classList.add("has-image"),localStorage.setItem("backgroundImage",a),he.style.display="flex"},o.readAsDataURL(t)}),he&&he.dataset.ytToolsBound!=="1"&&(he.dataset.ytToolsBound="1",he.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),e.isTrusted!==!1&&(ge.style.backgroundImage="",ge.classList.remove("has-image"),localStorage.removeItem("backgroundImage"),he.style.display="none")}));const w={panelOpen:!1,tracks:[],cues:[],text:"",videoId:null,langIndex:0,translate:"",withTimestamps:!0,loading:!1,resolved:!1,fetchToken:0};function Qt(){try{if(typeof unsafeWindow<"u"&&unsafeWindow)return unsafeWindow}catch{}return typeof window<"u"?window:null}function Xt(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Xo(e){const t=e?.name;return t?.simpleText?t.simpleText:Array.isArray(t?.runs)?t.runs.map(o=>o.text||"").join("").trim():e?.languageCode||"Unknown"}function Zo(e,t){const o=e.indexOf(t);if(o===-1)return null;const n=e.indexOf("{",o);if(n===-1)return null;let a=0,l=!1,s=!1;for(let c=n;c<e.length;c++){const d=e[c];if(l){s?s=!1:d==="\\"?s=!0:d==='"'&&(l=!1);continue}if(d==='"')l=!0;else if(d==="{")a++;else if(d==="}"&&(a--,a===0))return e.slice(n,c+1)}return null}async function Zt(){const e=Qt();try{if(e&&e.ytInitialPlayerResponse)return e.ytInitialPlayerResponse}catch{}const t=await fetch(window.location.href,{credentials:"include"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.text(),n=Zo(o,"ytInitialPlayerResponse");if(!n)throw new Error("Player response not found");return JSON.parse(n)}async function en(e){const t={clientName:"ANDROID",clientVersion:"20.10.38",androidSdkVersion:30,hl:"en",gl:"US"};try{const n=Qt()?.ytcfg,a=n?.get?.("HL"),l=n?.get?.("GL");a&&(t.hl=a),l&&(t.gl=l)}catch{}const o=await fetch("https://www.youtube.com/youtubei/v1/player?prettyPrint=false",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({context:{client:t},videoId:e,contentCheckOk:!0,racyCheckOk:!0})});if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.json()}async function tn(e){try{const t=await en(e);if(Ct(t).length)return t;const o=await Zt();return Ct(o).length?o:t}catch(t){return console.warn("[Youtube Tools] innertube player failed, using page response",t),Zt()}}function Ct(e){const t=e?.captions?.playerCaptionsTracklistRenderer?.captionTracks;return Array.isArray(t)?t.filter(o=>o&&o.baseUrl):[]}function on(e){const t=Math.max(0,Math.floor(Number(e)||0)),o=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60,l=o>0?String(n).padStart(2,"0"):String(n);return`${o>0?`${o}:`:""}${l}:${String(a).padStart(2,"0")}`}function nn(e){const t=Array.isArray(e?.events)?e.events:[],o=[];for(const n of t){if(!Array.isArray(n?.segs))continue;const a=n.segs.map(l=>l.utf8||"").join("").replace(/\s+/g," ").trim();a&&o.push({start:(Number(n.tStartMs)||0)/1e3,text:a})}return o}function eo(e){const t=new DOMParser().parseFromString(e,"text/xml");return Array.from(t.querySelectorAll("text")).map(o=>({start:parseFloat(o.getAttribute("start"))||0,text:(o.textContent||"").replace(/\s+/g," ").trim()})).filter(o=>o.text)}async function an(e,t){const o=new URL(e.baseUrl);o.searchParams.set("fmt","json3"),t&&o.searchParams.set("tlang",t);const n=await fetch(o.toString(),{credentials:"include"});if(!n.ok)throw new Error(`HTTP ${n.status}`);const a=n.headers.get("content-type")||"",l=await n.text();if(l.trim().startsWith("<"))return eo(l);try{const s=nn(JSON.parse(l));if(s.length)return s}catch{}return a.includes("json")?[]:eo(l)}function rn(e,t){if(!e||!e.length)return"";if(t)return e.map(n=>`[${on(n.start)}] ${n.text}`).join(`
`);let o="";for(const n of e)o+=`${n.text} `,/[.!?。！？…]["')\]]?$/.test(n.text)&&(o+=`
`);return o=o.replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim(),!o.includes(`
`)&&e.length>1&&(o=e.map(n=>n.text).join(" ")),o}function sn(){const e=q()||"video";let t="";try{t=u("h1.style-scope.ytd-watch-metadata")?.innerText||"",t||(t=(document.title||"").replace(/\s*-\s*YouTube\s*$/,""))}catch{}return t=String(t).replace(/[\\/:*?"<>|]+/g," ").replace(/\s+/g," ").trim().slice(0,80),`${t||e} - transcript.txt`}function ln(e){const t=new Blob([`\uFEFF${e}`],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(t),n=ie("a");n.href=o,n.download=sn(),document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(o),1500)}async function cn(e){try{return await navigator.clipboard.writeText(e),!0}catch{const o=ie("textarea");o.value=e,o.setAttribute("readonly",""),o.style.cssText="position:fixed;left:-9999px;top:0;",document.body.appendChild(o),o.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return o.remove(),n}}function be(e,t){const o=i("yt-tr-status");o&&(o.textContent=e||"",o.dataset.kind=t||"")}function St(){const e=i("yt-tr-preview"),t=i("yt-tr-copy"),o=i("yt-tr-download"),n=rn(w.cues,w.withTimestamps);w.text=n,e&&(e.textContent=n.length>8e3?`${n.slice(0,8e3)}
\u2026`:n);const a=!!n;t&&(t.disabled=!a),o&&(o.disabled=!a)}function Tt(){const e=i("yt-transcript-panel");if(!e)return;const t=w.tracks;if(!w.resolved){e.innerHTML=`
        <div class="yt-tr-header">
          <span class="yt-tr-title"><i class="fa-solid fa-align-left"></i> Transcript</span>
          <button type="button" class="yt-tr-close" id="yt-tr-close" title="Close">\u2715</button>
        </div>
        <div class="yt-tr-empty">Reading available captions\u2026</div>
      `,i("yt-tr-close")?.addEventListener("click",()=>Fe(!1));return}if(!t.length){e.innerHTML=`
        <div class="yt-tr-header">
          <span class="yt-tr-title"><i class="fa-solid fa-align-left"></i> Transcript</span>
          <button type="button" class="yt-tr-close" id="yt-tr-close" title="Close">\u2715</button>
        </div>
        <div class="yt-tr-empty">No captions / transcript available for this video.</div>
      `,i("yt-tr-close")?.addEventListener("click",()=>Fe(!1));return}const o=t.map((c,d)=>{const y=c.kind==="asr"?" (auto)":"";return`<option value="${d}">${Xt(Xo(c)+y)}</option>`}).join(""),n=Object.entries($e).map(([c,d])=>`<option value="${c}">${Xt(d)}</option>`).join("");e.innerHTML=`
      <div class="yt-tr-header">
        <span class="yt-tr-title"><i class="fa-solid fa-align-left"></i> Transcript</span>
        <button type="button" class="yt-tr-close" id="yt-tr-close" title="Close">\u2715</button>
      </div>
      <div class="yt-tr-controls">
        <label class="yt-tr-field">
          <span>Language</span>
          <select id="yt-tr-lang">${o}</select>
        </label>
        <label class="yt-tr-field">
          <span>Translate to</span>
          <select id="yt-tr-translate">
            <option value="">Original (no translation)</option>
            ${n}
          </select>
        </label>
        <label class="yt-tr-check">
          <input type="checkbox" id="yt-tr-timestamps"${w.withTimestamps?" checked":""}>
          <span>Include timestamps</span>
        </label>
      </div>
      <div class="yt-tr-actions">
        <button type="button" class="yt-tr-btn" id="yt-tr-copy" disabled><i class="fa-solid fa-copy"></i> Copy</button>
        <button type="button" class="yt-tr-btn primary" id="yt-tr-download" disabled><i class="fa-solid fa-download"></i> Download .txt</button>
      </div>
      <div class="yt-tr-status" id="yt-tr-status"></div>
      <pre class="yt-tr-preview" id="yt-tr-preview"></pre>
    `,i("yt-tr-close")?.addEventListener("click",()=>Fe(!1));const a=i("yt-tr-lang"),l=i("yt-tr-translate"),s=i("yt-tr-timestamps");a&&(a.value=String(w.langIndex||0)),l&&(l.value=w.translate||""),a?.addEventListener("change",()=>{w.langIndex=Number(a.value)||0,Mt()}),l?.addEventListener("change",()=>{w.translate=l.value||"",Mt()}),s?.addEventListener("change",()=>{w.withTimestamps=!!s.checked,St()}),i("yt-tr-copy")?.addEventListener("click",async()=>{if(!w.text)return;const c=await cn(w.text);be(c?"Transcript copied to clipboard":"Could not copy transcript",c?"ok":"error"),c&&O("success","Transcript copied")}),i("yt-tr-download")?.addEventListener("click",()=>{w.text&&(ln(w.text),be("Transcript downloaded as .txt","ok"),O("success","Transcript downloaded"))})}async function Mt(){const e=w.tracks;if(!e.length)return;const t=++w.fetchToken,o=e[w.langIndex]||e[0],n=w.translate;w.loading=!0,be("Loading transcript\u2026","loading");try{const a=await an(o,n);if(t!==w.fetchToken)return;if(w.cues=a,w.loading=!1,!a.length)be("No transcript content for this language.","error");else{const l=`${a.length} segments${n?` \xB7 translated to ${$e[n]||n}`:""}`;be(l,"ok")}St()}catch(a){if(t!==w.fetchToken)return;w.loading=!1,w.cues=[],St(),be("Could not load transcript. Try another language.","error"),console.warn("[Youtube Tools] transcript error",a)}}async function dn(e){if(!(w.videoId===e&&w.tracks.length)){w.videoId=e,w.tracks=[],w.cues=[],w.langIndex=0,w.translate="",w.text="",w.resolved=!1,Tt(),be("Reading available captions\u2026","loading");try{const t=await tn(e);if(w.videoId!==e)return;w.tracks=Ct(t),w.resolved=!0,Tt(),w.tracks.length?await Mt():be("No captions / transcript available for this video.","error")}catch(t){if(w.videoId!==e)return;w.resolved=!0,Tt(),be("Could not read captions for this video.","error"),console.warn("[Youtube Tools] transcript error",t)}}}function Fe(e){const t=i("yt-transcript-panel");if(t&&(m.transcriptPanelOpen=e==null?!m.transcriptPanelOpen:!!e,t.style.display=m.transcriptPanelOpen?"block":"none",m.transcriptPanelOpen)){const o=q();if(!o)return;dn(o),setTimeout(()=>t.scrollIntoView({behavior:"smooth",block:"nearest"}),50)}}function pn(){if(!window.location.href.includes("youtube.com/watch")){O("info","Open a video to use the transcript tool");return}Fe()}(function(){m.transcriptClickHandlerInitialized||(m.transcriptClickHandlerInitialized=!0,document.addEventListener("click",t=>{const o=t.target;o instanceof Element&&o.closest("#yt-transcript-btn")&&(t.preventDefault(),t.stopPropagation(),pn())}),document.addEventListener("yt-navigate-finish",()=>{const t=m.transcriptPanelOpen;w.videoId=null,w.tracks=[],w.cues=[],w.text="",w.resolved=!1;const o=i("yt-transcript-panel");if(!o)return;const n=window.location.href.includes("youtube.com/watch");t&&n?Fe(!0):(o.innerHTML="",o.style.display="none",m.transcriptPanelOpen=!1)}))})()})();
