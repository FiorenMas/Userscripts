// ==UserScript==
// @name Youtube Tools All in one local download mp3 mp4 HIGT QUALITY return dislikes and more
// @name:en Youtube Tools All in one local download mp3 mp4.
// @homepage     https://github.com/DeveloperMDCM/
// @version      2.5
// @author       DeveloperMDCM
// @match        *://www.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-end
// @grant        GM_registerMenuCommand
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
(function(){"use strict";let Y=document.location.href;const he=!!globalThis.__YT_TOOLS_EXTENSION__,p=e=>document.querySelector(e),r=e=>document.getElementById(e),H=e=>document.querySelectorAll(e),se=(e,t)=>document.createElement(e),w=(e,t)=>document.documentElement.style.setProperty(e,t),Gt=e=>document.body.appendChild(e),Xe="https://returnyoutubedislikeapi.com/Votes?videoId=",Kt="https://translate.googleapis.com/translate_a/t";let ne="#0c0c0c",ae="#ffffff",ie="#ff0000";const qe="https://greasyfork.org/es/scripts/460680-youtube-tools-all-in-one-local-download-mp3-mp4-higt-quality-return-dislikes-and-more",Ko="https://p.savenow.to/ajax/download.php?copyright=0&allow_extended_duration=1&",Yt="dfcb6d76f2f6a9894gjkege8a4ab232222",Jt=["https://p.savenow.to","https://p.lbserver.xyz"],Qt="https://dubs.io/wp-json/tools/v1/download-video",Xt="https://dubs.io/wp-json/tools/v1/status-video",Ze={af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",bg:"Bulgarian",ca:"Catalan",ceb:"Cebuano","zh-CN":"Chinese (Simplified)","zh-TW":"Chinese (Traditional)",co:"Corsican",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",fi:"Finnish",fr:"French",fy:"Frisian",gl:"Galician",ka:"Georgian",de:"German",el:"Greek",gu:"Gujarati",ht:"Haitian Creole",ha:"Hausa",haw:"Hawaiian",iw:"Hebrew",hi:"Hindi",hmn:"Hmong",hu:"Hungarian",is:"Icelandic",ig:"Igbo",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",jw:"Javanese",kn:"Kannada",kk:"Kazakh",km:"Khmer",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",lo:"Lao",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"Macedonian",mg:"Malagasy",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mn:"Mongolian",my:"Myanmar (Burmese)",ne:"Nepali",no:"Norwegian",ny:"Nyanja (Chichewa)",ps:"Pashto",fa:"Persian",pl:"Polish",pt:"Portuguese",pa:"Punjabi",ro:"Romanian",ru:"Russian",sm:"Samoan",gd:"Scots Gaelic",sr:"Serbian",st:"Sesotho",sn:"Shona",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",so:"Somali",es:"Spanish",su:"Sundanese",sw:"Swahili",sv:"Swedish",tl:"Tagalog (Filipino)",tg:"Tajik",ta:"Tamil",te:"Telugu",th:"Thai",tr:"Turkish",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",cy:"Welsh",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",zu:"Zulu"};let re=null,Se="dinamica",J=null,be=null,Ie=null,Ue=null,T=null,C=null,F=null,Z=0,et=null,ee=[],tt=!1;const Zt=.05,ot=240,le=ot/90,Fe="wave_visualizer_processed",h={dynamicStyleEl:null,dynamicCssLast:"",settingsLoaded:!1,bookmarkClickHandlerInitialized:!1,bookmarksPanelOpen:!1,continueWatching:{enabled:!1,map:null,flushT:null,boundVideo:null,boundVideoId:null,lastSaveAt:0,lastSavedTime:-1,lastKnownVideoId:null,navHandlerInitialized:!1,panelOpen:!1,clickHandlerInitialized:!1,pagehideHandlerInitialized:!1,handlers:null},shortsChannelName:{enabled:!1,observer:null,io:null,scanT:null,cache:new Map,inflight:new Map,fetchChain:Promise.resolve()},dislikesCache:{videoId:null,dislikes:null,ts:0},downloadClickHandlerInitialized:!1,shortsObserver:null,statsObserver:null,statsIntervalId:null,lockupCachedStatsObserver:null,lockupCachedStatsObserveTarget:null,lockupCachedStatsIntervalId:null,updateShortsViewsButton:function(){},updateShortsRatingButton:function(){}};function eo(e=""){if(!h.dynamicStyleEl){const t=document.createElement("style");t.id="yt-tools-mdcm-dynamic-style",document.head.appendChild(t),h.dynamicStyleEl=t}h.dynamicCssLast!==e&&(h.dynamicCssLast=e,h.dynamicStyleEl.textContent=e)}const We=(()=>{let e=null;return()=>{h.settingsLoaded&&(clearTimeout(e),e=setTimeout(()=>{try{bt()}catch(t){console.error("applySettings error:",t)}},120))}})();function ce(){const e=r("wave-visualizer-canvas");e&&(e.style.opacity="0",F&&(F.style.opacity="0"))}function ze(){const e=r("wave-visualizer-canvas");J&&J.state==="suspended"&&J.resume(),e&&(e.style.opacity="1",F&&(F.style.opacity="1"))}function j(e="info",t="",o=""){const a={success:"Success",error:"Error",info:"Information",warning:"Warning"};iziToast[e]({title:o||a[e]||"Notification",message:t,position:"bottomLeft"})}async function to(e,t){const o=window.location.href;if(t.dataset.downloading==="true")return;try{t.__ytDownloadPoll&&(clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null)}catch{}const a=t.querySelector(".download-btn"),n=t.querySelector(".retry-btn"),l=t.querySelector(".progress-retry-btn"),s=t.querySelector(".download-again-btn"),d=t.querySelector(".progress-container"),c=t.querySelector(".progress-fill"),v=t.querySelector(".progress-text"),f=t.querySelector(".download-text");t.dataset.downloading="true",t.dataset.urlOpened="false",t.dataset.lastDownloadUrl="",a.style.display="none",n.style.display="none",l.style.display="block",s&&(s.style.display="none"),d.style.display="flex",c.style.width="0%",v.textContent="0%";const k=async(_,x=2e4)=>{const z=new AbortController,U=setTimeout(()=>z.abort(),x);try{const N=await fetch(_,{signal:z.signal});if(!N.ok)throw new Error(`HTTP ${N.status}`);return await N.json()}finally{clearTimeout(U)}},m=()=>{n.style.display="block",d.style.display="none",l.style.display="none",s&&(s.style.display="none"),t.dataset.downloading="false",t.dataset.urlOpened="false",t.dataset.lastDownloadUrl=""},M=_=>{if(!_){m();return}if(t.dataset.lastDownloadUrl=String(_),t.dataset.urlOpened!=="true"){t.dataset.urlOpened="true",t.classList.add("completed"),t.classList.remove("video","audio"),f.textContent="Download Complete!",c.style.width="100%",v.textContent="100%",l.style.display="none",s&&(s.style.display="flex"),t.dataset.downloading="false";try{window.open(_)}catch(x){console.warn("Could not open download URL:",x)}}},A=_=>{t.__ytDownloadPoll=setInterval(async()=>{try{const x=await k(_,15e3),z=Math.min((Number(x.progress)||0)/10,100);c.style.width=`${z}%`,v.textContent=`${Math.round(z)}%`,Number(x.progress)>=1e3&&x.download_url&&(clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null,M(x.download_url))}catch(x){console.error("Error in progress:",x),clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null,m()}},3e3)},I=async _=>{const x=new URL("/ajax/download.php",_);x.searchParams.set("copyright","0"),x.searchParams.set("allow_extended_duration","1"),x.searchParams.set("format",String(e)),x.searchParams.set("url",o),x.searchParams.set("api",Yt);const z=await k(x.toString(),25e3);if(!z?.success||!z?.progress_url)throw new Error("SaveNow provider did not return success/progress_url");return z},$=async()=>{const _=at();if(!_)throw new Error("Missing videoId");const x=new URL(Qt);x.searchParams.set("id",_),x.searchParams.set("format",String(e));const z=await k(x.toString(),25e3);if(!z?.success||!z?.progressId)throw new Error("Dubs provider did not return success/progressId");const U=new URL(Xt);U.searchParams.set("id",z.progressId),t.__ytDownloadPoll=setInterval(async()=>{try{const N=await k(U.toString(),2e4),B=Number(N?.progress)||0,me=Math.min(B/10,100);c.style.width=`${me}%`,v.textContent=`${Math.round(me)}%`,N?.finished&&N?.downloadUrl&&(clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null,M(N.downloadUrl))}catch(N){console.error("\u274C Error polling dubs status:",N),clearInterval(t.__ytDownloadPoll),t.__ytDownloadPoll=null,m()}},3e3)};try{let _=null,x=null;for(const z of Jt)try{_=await I(z);break}catch(U){x=U}if(_?.success&&_?.progress_url){A(_.progress_url);return}console.warn("SaveNow providers failed, falling back to dubs.io",x),await $()}catch(_){m(),console.error("\u274C Error starting download:",_)}}const oo=1e3,de={USAGE:"YT_TOTAL_USAGE",VIDEO:"YT_VIDEO_TIME",SHORTS:"YT_SHORTS_TIME"};let Ne=GM_getValue(de.USAGE,0),$e=GM_getValue(de.VIDEO,0),Be=GM_getValue(de.SHORTS,0),wt=Date.now(),Me=null,nt=null;GM_setValue(de.USAGE,Ne),GM_setValue(de.VIDEO,$e),GM_setValue(de.SHORTS,Be);function ve(e,t){const o=[{value:1,symbol:""},{value:1e3,symbol:" K"},{value:1e6,symbol:" M"}],a=/\.0+$|(\.[0-9]*[1-9])0+$/,n=o.slice().reverse().find(l=>e>=l.value);return n?(e/n.value).toFixed(t).replace(a,"$1")+n.symbol:"0"}function at(){return new URLSearchParams(window.location.search).get("v")}const W={BOOKMARKS:"ytBookmarksMDCM",CONTINUE_WATCHING:"ytContinueWatchingMDCM",SHORTS_CHANNEL_CACHE:"ytShortsChannelCacheMDCM",LIKES_DISLIKES_CACHE:"ytLikesDislikesCacheMDCM",VERSION_CHECK_LAST:"ytVersionCheckLastMDCM"},no="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.meta.js",ao=1440*60*1e3,io=576*60*60*1e3,ro=10080*60*1e3,xt=500;function so(e){try{const o=Le(W.SHORTS_CHANNEL_CACHE,{})?.[e];return!o||typeof o.channelName!="string"||Date.now()-(Number(o.ts)||0)>io?null:o.channelName}catch{return null}}function Ct(e,t){if(!(!e||typeof t!="string"))try{const o=Le(W.SHORTS_CHANNEL_CACHE,{});o[e]={channelName:t,ts:Date.now()};const a=Object.entries(o).sort((l,s)=>(Number(s[1]?.ts)||0)-(Number(l[1]?.ts)||0)),n=Object.fromEntries(a.slice(0,xt));ke(W.SHORTS_CHANNEL_CACHE,n)}catch{}}function ye(e){try{const o=Le(W.LIKES_DISLIKES_CACHE,{})?.[e];if(!o||Date.now()-(Number(o.ts)||0)>ro)return null;const n=Number(o.dislikes),l=Number(o.likes),s=Number(o.viewCount),d=Number(o.rating);return{likes:Number.isFinite(l)?l:null,dislikes:Number.isFinite(n)?n:null,viewCount:Number.isFinite(s)?s:null,rating:Number.isFinite(d)&&d>=0&&d<=5?d:null}}catch{return null}}function it(e,t,o,a,n){if(e)try{const l=Le(W.LIKES_DISLIKES_CACHE,{});l[e]={likes:t??null,dislikes:o??null,viewCount:a??null,rating:n??null,ts:Date.now()};const s=Object.entries(l).sort((c,v)=>(Number(v[1]?.ts)||0)-(Number(c[1]?.ts)||0)),d=Object.fromEntries(s.slice(0,Math.min(xt,300)));ke(W.LIKES_DISLIKES_CACHE,d)}catch{}}function G(){try{return location.pathname.startsWith("/shorts/")?location.pathname.split("/").filter(Boolean)[1]||null:location.href.includes("youtube.com/watch")?at():null}catch{return null}}function Le(e,t){try{const o=GM_getValue(e,"");return o?JSON.parse(o):t}catch{return t}}function ke(e,t){try{GM_setValue(e,JSON.stringify(t))}catch(o){console.error("writeJsonGM error:",o)}}function lo(e,t){if(!e||!t)return!1;const o=s=>String(s).trim().split(".").map(d=>parseInt(d,10)||0),a=o(e),n=o(t),l=Math.max(a.length,n.length);for(let s=0;s<l;s++){const d=a[s]||0,c=n[s]||0;if(d>c)return!0;if(d<c)return!1}return!1}async function co(){try{const e=GM_getValue(W.VERSION_CHECK_LAST,0);if(Date.now()-e<ao)return;GM_setValue(W.VERSION_CHECK_LAST,Date.now());const t=await fetch(no,{cache:"no-store"});if(!t.ok)return;const a=(await t.text()).match(/@version\s+([\d.]+)/);if(!a)return;const n=a[1].trim(),l=typeof GM_info<"u"&&GM_info.script&&GM_info.script.version?String(GM_info.script.version).trim():"";if(!l||!lo(n,l))return;const s="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js";iziToast.info({title:"Nueva versi\xF3n disponible",message:"YouTube Tools v"+n+" est\xE1 disponible. Haz clic para actualizar.",position:"bottomLeft",timeout:12e3,progressBar:!0,closeOnClick:!0,onclick:function(){window.open(s,"_blank")}})}catch{}}function Te(e){const t=Math.max(0,Math.floor(Number(e)||0)),o=Math.floor(t/3600),a=Math.floor(t%3600/60),n=t%60;return o>0?`${o}:${String(a).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${a}:${String(n).padStart(2,"0")}`}function Ge(){return document.querySelector("#movie_player video.video-stream.html5-main-video")||document.querySelector("ytd-player video.video-stream.html5-main-video")||document.querySelector("video.video-stream.html5-main-video")||document.querySelector("video")}function uo(){try{const e=p("ytd-watch-metadata h1 yt-formatted-string")?.textContent?.trim()||p("h1.ytd-watch-metadata yt-formatted-string")?.textContent?.trim()||"",t=p("#owner ytd-channel-name a, ytd-video-owner-renderer ytd-channel-name a, #text-container.ytd-channel-name a")?.textContent?.trim()||p('#owner a[href^="/@"], #owner a[href^="/channel/"]')?.textContent?.trim()||"",o=(e||document.title||"").replace(/\s*-\s*YouTube\s*$/i,"").trim(),a=(t||"").trim(),s=((typeof unsafeWindow<"u"&&unsafeWindow?unsafeWindow:window)?.ytInitialPlayerResponse||window.ytInitialPlayerResponse)?.videoDetails||null,d=(o||s?.title||document.title||"").replace(/\s*-\s*YouTube\s*$/i,"").trim(),c=(a||s?.author||"").trim(),v=s?.thumbnail?.thumbnails,f=Array.isArray(v)&&v[v.length-1]?.url||"";return{title:d,author:c,thumb:f}}catch{return{title:"",author:"",thumb:""}}}function Ve(){const e=h.continueWatching;return e.map||(e.map=Le(W.CONTINUE_WATCHING,{})),(typeof e.map!="object"||!e.map)&&(e.map={}),e.map}function rt(e,t=200){try{const o=Object.entries(e||{}).filter(([,l])=>l&&typeof l=="object");o.sort((l,s)=>(Number(s[1].updatedAt)||0)-(Number(l[1].updatedAt)||0));const a=o.slice(0,t),n={};for(const[l,s]of a)n[l]=s;return n}catch{return e||{}}}function St(){const e=h.continueWatching;clearTimeout(e.flushT),e.flushT=setTimeout(()=>{try{if(!e.map)return;e.map=rt(e.map,200),ke(W.CONTINUE_WATCHING,e.map)}catch{}},800)}function Ke(e){if(!e)return;const t=h.continueWatching,o=Ve();o&&Object.prototype.hasOwnProperty.call(o,e)&&(delete o[e],t.map=o,St())}function st(e,t,o){if(!e)return;const a=h.continueWatching,n=Ve(),l=Math.max(0,Math.floor(Number(t)||0)),s=Math.max(0,Math.floor(Number(o)||0)),d=n[e]&&typeof n[e]=="object"?n[e]:{},c=uo();n[e]={t:l,d:s,updatedAt:Date.now(),title:c.title||d.title||"",author:c.author||d.author||"",thumb:c.thumb||d.thumb||""},a.map=n,St()}function po(e){if(!e)return null;const o=Ve()?.[e],a=Number(o?.t);return Number.isFinite(a)?a:null}function Q(){if(!!!h.continueWatching.enabled||!xe())return;const o=G();if(!o)return;const a=Ge(),n=po(o),l=Number(a?.duration),s=Number.isFinite(l)&&l>0;if(!(!n||n<5)&&s&&n>=l-5){Ke(o);return}}function Ee(){const e=h.continueWatching,t=r("yt-cw-history-toggle"),o=r("yt-continue-watching-panel");if(!t||!o)return;let a=!0;try{a=JSON.parse(GM_getValue("ytSettingsMDCM","{}")||"{}").btnContinueWatching!==!1}catch{}if(!(!!e.enabled&&a)||!xe()){t.style.display="none",o.style.display="none";return}t.style.display="inline-flex",o.style.display=e.panelOpen?"block":"none"}function fo(e){const t=String(e||"");return typeof CSS<"u"&&CSS.escape?CSS.escape(t):t.replace(/["\\]/g,"\\$&")}function lt(e){try{const t=h.continueWatching;if(!t.enabled||!t.panelOpen||!xe())return!1;const o=r("yt-continue-watching-panel");if(!o)return!1;const a=fo(e),n=o.querySelector(`.yt-cw-item[data-video-id="${a}"]`);if(!n)return!1;const l=Ve()?.[e],s=Number(l?.t);if(!Number.isFinite(s))return!1;const d=n.querySelector(".yt-cw-meta");if(!d)return!1;const c=String(l?.author||"").trim();return d.textContent=`${Te(s)}${c?` \u2022 ${c}`:""}`,!0}catch{return!1}}function Yo(e,t){const o=Number(t),a=`/watch?v=${encodeURIComponent(e)}${Number.isFinite(o)?`&t=${Math.max(0,Math.floor(o))}s`:""}`;try{const n=document.createElement("a");n.href=a,n.target="_self",n.rel="noopener",n.style.display="none",document.body.appendChild(n),n.click(),n.remove();return}catch{}location.href=a}function ue(){const e=r("yt-continue-watching-panel");if(!e)return;const t=h.continueWatching;if(!t.enabled||!t.panelOpen||!xe()){e.style.display="none";return}const o=rt(Ve(),200);t.map=o;const a=G(),n=Object.entries(o).map(([c,v])=>({videoId:c,...v})).filter(c=>c.videoId&&Number.isFinite(Number(c.t))&&Number(c.t)>=5).sort((c,v)=>(Number(v.updatedAt)||0)-(Number(c.updatedAt)||0)).slice(0,25);e.replaceChildren();const l=document.createElement("div");l.className="yt-cw-header";const s=document.createElement("div");s.className="yt-cw-header-title",s.textContent="Continue watching";const d=document.createElement("button");if(d.type="button",d.className="yt-cw-clear",d.textContent="Clear",d.dataset.cwAction="clearAll",l.appendChild(s),l.appendChild(d),e.appendChild(l),!n.length){const c=document.createElement("div");c.className="yt-cw-empty",c.textContent="No history yet. Watch a bit, then reopen any video.",e.appendChild(c);return}for(const c of n){const v=document.createElement("div");v.className="yt-cw-item",v.dataset.videoId=c.videoId;const f=document.createElement("div");f.className="yt-cw-thumb-wrap";const k=document.createElement("img");k.className="yt-cw-thumb",k.loading="lazy",k.decoding="async",k.alt="";const m=(c.thumb||"").trim()||`https://i.ytimg.com/vi/${encodeURIComponent(c.videoId)}/hqdefault.jpg`;k.src=m,f.appendChild(k);const M=document.createElement("div");M.className="yt-cw-info";const A=document.createElement("div");A.className="yt-cw-title";const I=(c.title||"").trim();A.textContent=I||c.videoId;const $=document.createElement("div");$.className="yt-cw-meta";const _=(c.author||"").trim();$.textContent=`${Te(c.t)}${_?` \u2022 ${_}`:""}`,M.appendChild(A),M.appendChild($);const x=document.createElement("div");x.className="yt-cw-actions";const z=Math.max(0,Math.floor(Number(c.t)||0));let U=null;if(a&&a===c.videoId){const B=document.createElement("button");B.type="button",B.className="yt-cw-go",B.textContent="Resume",B.dataset.cwAction="seek",B.dataset.t=String(z),U=B}else{const B=document.createElement("a");B.className="yt-simple-endpoint yt-cw-go",B.textContent="Resume",B.href=`/watch?v=${encodeURIComponent(c.videoId)}&t=${z}s`,B.target="_self",B.rel="noopener",U=B}const N=document.createElement("button");N.type="button",N.className="yt-cw-del",N.textContent="\u2715",N.title="Delete",N.dataset.cwAction="del",N.dataset.videoId=c.videoId,x.appendChild(U),x.appendChild(N),v.appendChild(f),v.appendChild(M),v.appendChild(x),e.appendChild(v)}}function mo(e){const t=h.continueWatching;if(t.enabled=!!e,!t.navHandlerInitialized){t.navHandlerInitialized=!0;const s=()=>{try{const d=G();t.lastKnownVideoId!==d?(t.lastKnownVideoId=d,t.lastSaveAt=0,t.lastSavedTime=-1,t.boundVideoId=d,Q(),Ee(),t.panelOpen&&ue()):(Q(),Ee(),t.panelOpen&&ue())}catch{}};window.addEventListener("yt-navigate-finish",s,!0),window.addEventListener("popstate",s,!0),window.addEventListener("hashchange",s,!0)}t.clickHandlerInitialized||(t.clickHandlerInitialized=!0,document.addEventListener("click",s=>{const d=s.target;if(!(d instanceof Element))return;const c=d.closest("#yt-cw-history-toggle"),v=d.closest("[data-cw-action]");if(c){s.preventDefault(),s.stopPropagation(),t.panelOpen=!t.panelOpen,Ee(),t.panelOpen&&ue();return}if(v){const f=v.getAttribute("data-cw-action");if(!f)return;if(s.preventDefault(),s.stopPropagation(),f==="clearAll"){t.map={},ke(W.CONTINUE_WATCHING,{}),ue(),Q();try{j("success","History cleared")}catch{}return}if(f==="del"){const k=v.getAttribute("data-video-id")||"";k&&Ke(k),ue(),Q();return}if(f==="seek"){const k=Number(v.getAttribute("data-t")),m=Ge();if(!m||!Number.isFinite(k))return;m.currentTime=Math.max(0,k),m.play?.().catch(()=>{});try{j("success",`Resume: ${Te(k)}`)}catch{}Q();return}}},!0)),t.pagehideHandlerInitialized||(t.pagehideHandlerInitialized=!0,window.addEventListener("pagehide",()=>{try{if(!t.enabled||!xe())return;const s=G(),d=Ge();if(!s||!d)return;const c=Number(d.currentTime),v=Number(d.duration);Number.isFinite(c)&&c>=5&&st(s,c,v),t.flushT&&(clearTimeout(t.flushT),t.flushT=null),t.map&&ke(W.CONTINUE_WATCHING,rt(t.map,200))}catch{}},{capture:!0}));const o=r("yt-cw-history-toggle"),a=r("yt-continue-watching-panel");if(o&&!t.enabled&&(o.style.display="none"),a&&!t.enabled&&(a.style.display="none"),!t.enabled||!xe()){try{t.boundVideo&&t.handlers&&(t.boundVideo.removeEventListener("timeupdate",t.handlers.timeupdate),t.boundVideo.removeEventListener("pause",t.handlers.pause),t.boundVideo.removeEventListener("ended",t.handlers.ended),t.boundVideo.removeEventListener("loadedmetadata",t.handlers.loadedmetadata),t.boundVideo.removeEventListener("seeked",t.handlers.seeked))}catch{}t.boundVideo=null,t.boundVideoId=null,t.handlers=null,Q(),Ee();return}const n=Ge(),l=G();if(!n||!l){Q(),Ee();return}if(t.boundVideoId!==l&&(t.boundVideoId=l,t.lastSaveAt=0,t.lastSavedTime=-1),t.boundVideo&&t.boundVideo!==n&&t.handlers){try{t.boundVideo.removeEventListener("timeupdate",t.handlers.timeupdate),t.boundVideo.removeEventListener("pause",t.handlers.pause),t.boundVideo.removeEventListener("ended",t.handlers.ended),t.boundVideo.removeEventListener("loadedmetadata",t.handlers.loadedmetadata),t.boundVideo.removeEventListener("seeked",t.handlers.seeked)}catch{}t.boundVideo=null,t.boundVideoId=null,t.handlers=null}t.boundVideo=n,t.boundVideoId=l,t.handlers||(t.handlers={timeupdate:()=>{try{if(!t.enabled)return;const s=G();if(!s)return;const d=Date.now();if(d-t.lastSaveAt<5e3||n.paused)return;const c=Number(n.currentTime),v=Number(n.duration);if(!Number.isFinite(c)||Math.abs(c-t.lastSavedTime)<2||(t.lastSaveAt=d,t.lastSavedTime=c,c<5))return;st(s,c,v),Q(),t.panelOpen&&(lt(s)||ue())}catch{}},pause:()=>{try{if(!t.enabled)return;const s=G();if(!s)return;const d=Number(n.currentTime),c=Number(n.duration);if(!Number.isFinite(d))return;d<5?Ke(s):st(s,d,c),Q(),t.panelOpen&&(lt(s)||ue())}catch{}},ended:()=>{try{const s=G();s&&Ke(s),Q(),t.panelOpen&&ue()}catch{}},loadedmetadata:()=>{Q(),t.panelOpen&&ue()},seeked:()=>{Q();const s=G();t.panelOpen&&s&&lt(s)}},n.addEventListener("timeupdate",t.handlers.timeupdate,{passive:!0}),n.addEventListener("pause",t.handlers.pause,{passive:!0}),n.addEventListener("ended",t.handlers.ended,{passive:!0}),n.addEventListener("loadedmetadata",t.handlers.loadedmetadata,{passive:!0}),n.addEventListener("seeked",t.handlers.seeked,{passive:!0})),Q(),Ee()}function go(e){if(h.shortsChannelName.enabled=!!e,document.documentElement.dataset.mdcmShortsChannelName=e?"1":"0",!e){try{h.shortsChannelName.observer?.disconnect?.()}catch{}try{h.shortsChannelName.io?.disconnect?.()}catch{}h.shortsChannelName.observer=null,h.shortsChannelName.io=null,clearTimeout(h.shortsChannelName.scanT),h.shortsChannelName.scanT=null;return}const t=h.shortsChannelName,o=f=>(f.querySelector('a[href^="/shorts/"]')?.getAttribute("href")||"").match(/\/shorts\/([^/?]+)/)?.[1]||null,a=f=>f.querySelector(".ShortsLockupViewModelHostOutsideMetadataSubhead, .shortsLockupViewModelHostOutsideMetadataSubhead, .ShortsLockupViewModelHostMetadataSubhead, .shortsLockupViewModelHostMetadataSubhead"),n=f=>{const k=f?.parentElement;if(!k)return null;let m=k.querySelector(".yt-tools-shorts-channel-name");return m||(m=document.createElement("div"),m.className="yt-tools-shorts-channel-name",m.textContent="",k.insertBefore(m,f)),m},l=f=>{const k=f.querySelector('a[href^="/@"], a[href^="/channel/"]');return(k?.textContent||k?.getAttribute("title")||"").trim()||null},s=f=>(t.fetchChain=t.fetchChain.then(async()=>{if(t.cache.has(f))return t.cache.get(f);let k=null;try{k=await fetch(`/watch?v=${f}`,{method:"GET",credentials:"same-origin",cache:"force-cache"})}catch{return""}if(!k?.ok)return"";const m=await k.text(),M=m.indexOf('itemprop="author"');if(M<0)return"";const A=m.lastIndexOf("<span",M),I=m.indexOf("</span>",M);if(A<0||I<0)return"";const $=m.slice(A,I+7);return(new DOMParser().parseFromString($,"text/html").querySelector('link[itemprop="name"]')?.getAttribute("content")||"").trim()}),t.fetchChain),d=(f,k)=>{const m=t.cache.get(f);if(m)return Promise.resolve(m);const M=so(f);if(M)return t.cache.set(f,M),Promise.resolve(M);const A=l(k);if(A)return t.cache.set(f,A),Ct(f,A),Promise.resolve(A);const I=t.inflight.get(f);if(I)return I;const $=s(f).then(_=>{const x=(_||"").trim();return x&&(t.cache.set(f,x),Ct(f,x)),x}).finally(()=>{t.inflight.delete(f)});return t.inflight.set(f,$),$},c=f=>{if(!(f instanceof Element)||f.dataset.ytToolsShortsChannelProcessed==="1")return;const k=a(f);if(!k)return;const m=o(f);if(!m)return;f.dataset.ytToolsShortsChannelProcessed="1",f.dataset.ytToolsShortsVideoId=m;const M=n(k);M&&(M.textContent="",t.io?.observe(f))};t.io||(t.io=new IntersectionObserver(f=>{for(const k of f){if(!k.isIntersecting)continue;const m=k.target,M=m?.dataset?.ytToolsShortsVideoId,I=a(m)?.parentElement?.querySelector?.(".yt-tools-shorts-channel-name");if(!M||!I){t.io.unobserve(m);continue}d(M,m).then($=>{$&&(I.textContent=$)}).finally(()=>{t.io.unobserve(m)})}},{threshold:.15}));const v=()=>{clearTimeout(t.scanT),t.scanT=setTimeout(()=>{document.querySelectorAll("ytm-shorts-lockup-view-model, ytm-shorts-lockup-view-model-v2").forEach(c)},120)};t.observer||(t.observer=new MutationObserver(v),t.observer.observe(document.body,{childList:!0,subtree:!0})),v()}function ho(e){const t=e.querySelector('a[href*="watch?v="]');if(t){const a=(t.getAttribute("href")||"").match(/[?&]v=([^&]+)/);if(a)return a[1]}const o=e.querySelector('[class*="content-id-"]');if(o){const a=o.className.match(/content-id-([A-Za-z0-9_-]+)/);if(a)return a[1]}return null}function Oe(e,t){const o=document.createElement("div");o.innerHTML=e.trim();const a=o.firstElementChild;return a?(a.setAttribute("width",String(t||14)),a.setAttribute("height",String(t||14)),a.style.display="inline-block",a.style.verticalAlign="middle",a.style.marginRight="2px",a):null}const bo='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" /></svg>',Mt='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>',Lt='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>';function _e(){window.location.href.includes("youtube.com")&&document.querySelectorAll("yt-lockup-view-model").forEach(e=>{if(e.hasAttribute("data-yt-tools-lockup-stats"))return;const t=ho(e);if(!t)return;const o=ye(t);if(!o)return;const a=o.rating!=null,n=o.likes!=null,l=o.dislikes!=null;if(!a&&!n&&!l)return;const s=e.querySelector("yt-content-metadata-view-model");if(!s)return;const d=document.createElement("div");d.className="yt-content-metadata-view-model__metadata-row",d.setAttribute("data-yt-tools-lockup-stats-row","1");const c=document.createElement("span");c.className="yt-core-attributed-string yt-content-metadata-view-model__metadata-text yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--link-inherit-color",c.setAttribute("dir","auto"),c.setAttribute("role","text");const v=()=>document.createTextNode(" \xB7 ");if(a){const f=Oe(bo,14);f&&c.appendChild(f),c.appendChild(document.createTextNode(" "+o.rating.toFixed(1))),(n||l)&&c.appendChild(v())}if(n){const f=Oe(Mt,14);f&&c.appendChild(f),c.appendChild(document.createTextNode(" "+ve(o.likes,0))),l&&c.appendChild(v())}if(l){const f=Oe(Lt,14);f&&c.appendChild(f),c.appendChild(document.createTextNode(" "+ve(o.dislikes,0)))}d.appendChild(c),s.appendChild(d),e.setAttribute("data-yt-tools-lockup-stats",t)})}function vo(e){if(e.dataset.ytToolsShortsVideoId)return e.dataset.ytToolsShortsVideoId;var t=e.querySelector('a[href^="/shorts/"]');if(!t)return null;var o=(t.getAttribute("href")||"").match(/\/shorts\/([^/?]+)/);return o?o[1]:null}function Pe(){window.location.href.includes("youtube.com")&&document.querySelectorAll("ytm-shorts-lockup-view-model").forEach(function(e){if(!e.hasAttribute("data-yt-tools-shorts-stats")){var t=vo(e);if(t){var o=ye(t);if(o){var a=o.likes!=null,n=o.dislikes!=null;if(!(!a&&!n)){var l=e.querySelector(".ShortsLockupViewModelHostOutsideMetadataSubhead,.shortsLockupViewModelHostOutsideMetadataSubhead,.ShortsLockupViewModelHostMetadataSubhead,.shortsLockupViewModelHostMetadataSubhead");if(!(!l||!l.parentElement)){var s=document.createElement("span");s.className="yt-core-attributed-string yt-content-metadata-view-model__metadata-text yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--link-inherit-color yt-tools-shorts-stats-row",s.setAttribute("dir","auto"),s.setAttribute("role","text"),s.setAttribute("style","color: #aaa !important;");var d=function(){return document.createTextNode(" \xB7 ")};if(a){var c=Oe(Mt,12);c&&(c.style.setProperty("color","#aaa","important"),s.appendChild(c)),s.appendChild(document.createTextNode(" "+ve(o.likes,0))),n&&s.appendChild(d())}if(n){var v=Oe(Lt,12);v&&(v.style.setProperty("color","#aaa","important"),s.appendChild(v)),s.appendChild(document.createTextNode(" "+ve(o.dislikes,0)))}var f=document.createElement("div");f.className="yt-tools-shorts-stats-wrap",f.setAttribute("style","color: #aaa !important;"),f.appendChild(s),l.parentElement.appendChild(f),e.setAttribute("data-yt-tools-shorts-stats",t)}}}}}})}function ct(e){var t=null,o=!1,a=new MutationObserver(function(){o||(o=!0,clearTimeout(t),t=setTimeout(function(){o=!1,window.location.href.includes("youtube.com")&&(_e(),Pe(),[500,1100,2e3].forEach(function(n){setTimeout(function(){window.location.href.includes("youtube.com")&&(_e(),Pe())},n)}))},280))});return a.observe(e,{childList:!0,subtree:!0}),a}function yo(){if(window.location.href.includes("youtube.com/watch")){var e=document.getElementById("secondary")||document.querySelector("ytd-watch-next-secondary-results-renderer");if(!(!e||!e.parentNode)&&h.lockupCachedStatsObserveTarget!==e){var t=h.lockupCachedStatsObserver;t&&(t.disconnect(),h.lockupCachedStatsObserver=ct(e),h.lockupCachedStatsObserveTarget=e)}}}function ko(){var e=document.querySelectorAll("yt-lockup-view-model:not([data-yt-tools-lockup-stats])").length>0,t=document.querySelectorAll("ytm-shorts-lockup-view-model:not([data-yt-tools-shorts-stats])").length>0;return e||t}function wo(){window.location.href.includes("youtube.com")&&document.visibilityState==="visible"&&ko()&&(_e(),Pe())}function xo(){if(window.location.href.includes("youtube.com")){_e(),Pe();var e=document.getElementById("secondary")||document.querySelector("ytd-watch-next-secondary-results-renderer"),t=e&&e.parentNode?e:document.body;if(h.lockupCachedStatsObserver){t!==h.lockupCachedStatsObserveTarget&&(h.lockupCachedStatsObserver.disconnect(),h.lockupCachedStatsObserver=ct(t),h.lockupCachedStatsObserveTarget=t);return}h.lockupCachedStatsObserver=ct(t),h.lockupCachedStatsObserveTarget=t,h.lockupCachedStatsIntervalId||(h.lockupCachedStatsIntervalId=setInterval(wo,1800))}}function dt(e){const t=Le(W.BOOKMARKS,{}),o=Array.isArray(t[e])?t[e]:[];return{all:t,list:o}}function Co(e,t,o){const{all:a,list:n}=dt(e),l=Math.max(0,Math.floor(Number(t)||0)),s=n.some(v=>v&&v.t===l),d={t:l,label:(o||Te(l)).trim(),createdAt:Date.now()},c=s?n.map(v=>v.t===l?d:v):[...n,d];c.sort((v,f)=>v.t-f.t),a[e]=c,ke(W.BOOKMARKS,a)}function So(e,t){const{all:o,list:a}=dt(e),n=Math.max(0,Math.floor(Number(t)||0));o[e]=a.filter(l=>l&&l.t!==n),ke(W.BOOKMARKS,o)}function Ye(e){const t=r("yt-bookmarks-panel");if(!t)return;const{list:o}=dt(e);if(!o.length){t.innerHTML='<div class="yt-bm-empty">No bookmarks yet. Click \u2605 to save one.</div>';return}t.innerHTML=o.map(a=>{const n=Te(a.t),l=(a.label||n).replace(/</g,"&lt;").replace(/>/g,"&gt;");return`
          <div class="yt-bm-item">
            <button type="button" class="yt-bm-go" data-action="go" data-t="${a.t}" title="Go to ${n}">${n}</button>
            <div class="yt-bm-label" title="${l}">${l}</div>
            <button type="button" class="yt-bm-del" data-action="del" data-t="${a.t}" title="Delete">\u2715</button>
          </div>
        `}).join("")}function Mo(e){const t=r("yt-bookmark-add"),o=r("yt-bookmark-toggle"),a=r("yt-bookmarks-panel");if(!t||!o||!a)return;const n=!!e?.bookmarks&&e?.btnBookmark!==!1;if(t.style.display=n?"inline-flex":"none",o.style.display=n?"inline-flex":"none",a.style.display=n&&h.bookmarksPanelOpen?"block":"none",!n)return;const l=G();l&&(Ye(l),!h.bookmarkClickHandlerInitialized&&(h.bookmarkClickHandlerInitialized=!0,document.addEventListener("click",s=>{const d=s.target;if(!(d instanceof Element))return;const c=d.closest("#yt-bookmark-add"),v=d.closest("#yt-bookmark-toggle"),f=d.closest("[data-action][data-t]");if(c){s.preventDefault(),s.stopPropagation();const k=p("video"),m=G();if(!k||!m)return;const M=Math.floor(k.currentTime||0),A=Te(M),I=prompt("Bookmark name (optional):",A)||A;Co(m,M,I),h.bookmarksPanelOpen=!0,a.style.display="block",Ye(m),j("success",`Bookmark saved at ${A}`);return}if(v){s.preventDefault(),s.stopPropagation(),h.bookmarksPanelOpen=!h.bookmarksPanelOpen,a.style.display=h.bookmarksPanelOpen?"block":"none";const k=G();k&&h.bookmarksPanelOpen&&Ye(k);return}if(f){s.preventDefault(),s.stopPropagation();const k=f.getAttribute("data-action"),m=Number(f.getAttribute("data-t")),M=p("video"),A=G();if(!M||!A)return;k==="go"?(M.currentTime=Math.max(0,m||0),M.play?.().catch(()=>{})):k==="del"&&(So(A,m),Ye(A))}})))}function Lo(e){if(!e)return null;const t=String(e).trim().toLowerCase();if(!t)return null;let o=1,a=t.replace(/\s+/g,"");if(a.includes("mil")?(o=1e3,a=a.replace("mil","")):a.includes("k")?(o=1e3,a=a.replace("k","")):a.includes("m")&&(o=1e6,a=a.replace("m","")),a=a.replace(/[^\d.,]/g,""),!a)return null;const n=a.lastIndexOf("."),l=a.lastIndexOf(",");let s=a;if(n!==-1&&l!==-1){const c=Math.max(n,l),v=a.slice(0,c).replace(/[.,]/g,""),f=a.slice(c+1);s=`${v}.${f}`}else s=a.replace(",",".");const d=Number.parseFloat(s);return Number.isFinite(d)?Math.round(d*o):null}async function To(){const e=G();if(!e)return null;const t=Date.now();if(h.dislikesCache.videoId===e&&h.dislikesCache.dislikes!=null&&t-h.dislikesCache.ts<600*1e3)return h.dislikesCache.dislikes;const o=ye(e);if(o&&o.dislikes!=null)return h.dislikesCache={videoId:e,dislikes:o.dislikes,ts:t},o.dislikes;try{const n=await(await fetch(`${Xe}${e}`)).json(),l=Number(n?.dislikes),s=Number(n?.viewCount),d=Number(n?.rating);if(Number.isFinite(l)){h.dislikesCache={videoId:e,dislikes:l,ts:t};const c=ut();return it(e,c??void 0,l,Number.isFinite(s)?s:void 0,Number.isFinite(d)&&d>=0&&d<=5?d:void 0),l}}catch{}return null}function ut(){const e=p("#top-level-buttons-computed like-button-view-model button-view-model button")||p("#top-level-buttons-computed like-button-view-model button")||p("#top-level-buttons-computed ytd-toggle-button-renderer:nth-child(1)")||p("segmented-like-dislike-button-view-model like-button-view-model");if(!e)return null;const t=[e.querySelector?.(".yt-spec-button-shape-next__button-text-content")?.textContent,e.textContent,e.getAttribute?.("aria-label")].filter(Boolean);for(const o of t){const a=Lo(o);if(a!=null)return a}return null}function Eo(e,t){const o=r("button_copy_description"),a=p("#top-level-buttons-computed")||p("ytd-watch-metadata #top-level-buttons-computed");if(!a&&!o)return;let n=r("yt-like-dislike-bar-mdcm");if(!n)n=document.createElement("div"),n.id="yt-like-dislike-bar-mdcm",n.innerHTML='<div class="like"></div><div class="dislike"></div>',o?o.insertAdjacentElement("beforebegin",n):a.appendChild(n);else if(o&&n.previousElementSibling!==o)try{o.insertAdjacentElement("beforebegin",n)}catch{}if(!Number.isFinite(e)||!Number.isFinite(t)||e+t<=0){n.style.display="none";return}const l=e+t,s=Math.max(0,Math.min(100,e/l*100)),d=100-s;n.style.display="block";const c=n.querySelector(".like"),v=n.querySelector(".dislike");c.style.width=`${s}%`,v.style.width=`${d}%`,n.title=`Likes: ${e.toLocaleString()} | Dislikes: ${t.toLocaleString()}`}async function _o(e){if(!e?.likeDislikeBar){const n=r("yt-like-dislike-bar-mdcm");n&&(n.style.display="none");return}if(!window.location.href.includes("youtube.com/watch"))return;const t=G();if(!t)return;const o=await To();let a=ut();if(a==null){const n=ye(t);n?.likes!=null&&(a=n.likes)}o==null||a==null||Eo(a,o)}function Tt(e,t=4){if(!e?.likeDislikeBar)return;let o=0;const a=async()=>{o+=1,await _o(e);const n=r("yt-like-dislike-bar-mdcm");n&&n.style.display!=="none"||o<t&&setTimeout(a,800)};setTimeout(a,300)}async function Et(){if(Y=document.location.href,p("#below > ytd-watch-metadata > div")!=null&&document.location.href.split("?v=")[0].includes("youtube.com/watch")){Y=at();let t=null;const o=ye(Y);if(o&&o.dislikes!=null)t=o.dislikes;else{const a=`${Xe}${Y}`;try{const l=await(await fetch(a)).json();if(t=Number(l?.dislikes),Number.isFinite(t)){const s=ut(),d=Number(l?.viewCount),c=Number(l?.rating);it(Y,s??void 0,t,Number.isFinite(d)?d:void 0,Number.isFinite(c)&&c>=0&&c<=5?c:void 0)}}catch(n){console.log(n)}}if(t!=null){const a=p("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > dislike-button-view-model > toggle-button-view-model > button-view-model > button");a!==void 0&&(a.style="width: 90px",a.innerHTML=`
              <svg class="svg-dislike-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
              ${ve(t,0)}`),h.dislikesCache={videoId:Y,dislikes:t,ts:Date.now()};try{const n=JSON.parse(GM_getValue("ytSettingsMDCM","{}"));Tt(n,5)}catch{}}}}async function _t(){Y=document.location.href;const e=H("#button-bar > reel-action-bar-view-model > dislike-button-view-model > toggle-button-view-model > button-view-model > label > div > span");if(e!=null&&document.location.href.split("/")[3]==="shorts"){Y=document.location.href.split("/")[4];let t=null,o=null,a=null;const n=ye(Y);if(n&&n.dislikes!=null)t=n.dislikes,o=n.viewCount??null,a=n.rating??null;else{const l=`${Xe}${Y}`;try{const d=await(await fetch(l)).json();t=Number(d?.dislikes),o=Number(d?.viewCount),a=Number(d?.rating),Number.isFinite(t)&&it(Y,void 0,t,Number.isFinite(o)?o:void 0,Number.isFinite(a)&&a>=0&&a<=5?a:void 0)}catch(s){console.log(s)}}if(t!=null)for(let l=0;l<e.length;l++)e[l].textContent=`${ve(t,0)}`;h.updateShortsViewsButton&&h.updateShortsViewsButton(Y,o),h.updateShortsRatingButton&&h.updateShortsRatingButton(Y,a)}}let pt,Pt=!1;setInterval(()=>{const e=p(".svg-dislike-ico"),t=window.location.href;pt!==void 0&&t!==pt&&!e&&Pt&&setTimeout(async()=>{await Et(),await _t()},2e3),pt=t},1e3);let we=null;try{const e=typeof unsafeWindow<"u"?unsafeWindow.trustedTypes:window.trustedTypes;if(e&&(we=e.defaultPolicy,!we))try{we=e.createPolicy("default",{createHTML:t=>t})}catch{we=e.defaultPolicy||null}}catch{we=null}GM_addStyle(`@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
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
`);const Dt=`
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
  `,ft=[{name:"Default / Reload",gradient:"",textColor:"",raised:"",btnTranslate:"",CurrentProgressVideo:"",videoDuration:"",colorIcons:"",textLogo:"",primaryColor:"",secondaryColor:""},{name:"Midnight Blue",gradient:"linear-gradient(135deg, #1e3a8a, #3b82f6)",textColor:"#ffffff",raised:"#f00",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Forest Green",gradient:"linear-gradient(135deg, #14532d, #22c55e)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Sunset Orange",gradient:"linear-gradient(135deg, #7c2d12, #f97316)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Royal Purple",gradient:"linear-gradient(135deg, #4c1d95, #8b5cf6)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Cherry Blossom",gradient:"linear-gradient(135deg, #a9005c, #fc008f)",textColor:"#ffffff",raised:"#fc008f",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Red Dark",gradient:"linear-gradient(135deg, #790909, #f70131)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Raind",gradient:"linear-gradient(90deg, #3f5efb 0%, #fc466b 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Neon",gradient:"linear-gradient(273deg, #ee49fd 0%, #6175ff 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Azure",gradient:"linear-gradient(273deg, #0172af 0%, #74febd 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Butterfly",gradient:"linear-gradient(273deg, #ff4060 0%, #fff16a 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Colombia",gradient:"linear-gradient(174deg, #fbf63f 0%, #0000bb 45%, #ff0000 99%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Mexico",gradient:"linear-gradient(180deg, #006847 0%, #ffffff 48%, #ce1126 100%)",textColor:"#1a1a1a",raised:"#006847",btnTranslate:"#000",CurrentProgressVideo:"#ce1126",videoDuration:"#1a1a1a",colorIcons:"#1a1a1a",textLogo:"#ce1126"},{name:"Brazil",gradient:"linear-gradient(135deg, #009c3b 0%, #ffdf00 50%, #002776 100%)",textColor:"#ffffff",raised:"#002776",btnTranslate:"#000",CurrentProgressVideo:"#ffdf00",videoDuration:"#fff",colorIcons:"#002776",textLogo:"#ffdf00"},{name:"Argentina",gradient:"linear-gradient(180deg, #74acdf 0%, #ffffff 45%, #74acdf 100%)",textColor:"#0a2540",raised:"#74acdf",btnTranslate:"#000",CurrentProgressVideo:"#fcbf49",videoDuration:"#0a2540",colorIcons:"#c58b00",textLogo:"#0a2540"},{name:"Spain",gradient:"linear-gradient(180deg, #aa151b 0%, #f1bf00 45%, #aa151b 100%)",textColor:"#ffffff",raised:"#aa151b",btnTranslate:"#000",CurrentProgressVideo:"#f1bf00",videoDuration:"#fff",colorIcons:"#aa151b",textLogo:"#f1bf00"},{name:"France",gradient:"linear-gradient(90deg, #002395 0%, #ffffff 50%, #ed2939 100%)",textColor:"#0b1b3a",raised:"#002395",btnTranslate:"#000",CurrentProgressVideo:"#ed2939",videoDuration:"#0b1b3a",colorIcons:"#002395",textLogo:"#ed2939"},{name:"Germany",gradient:"linear-gradient(180deg, #000000 0%, #dd0000 50%, #ffce00 100%)",textColor:"#ffffff",raised:"#111111",btnTranslate:"#000",CurrentProgressVideo:"#ffce00",videoDuration:"#fff",colorIcons:"#ffce00",textLogo:"#dd0000"},{name:"Italy",gradient:"linear-gradient(90deg, #009246 0%, #ffffff 50%, #ce2b37 100%)",textColor:"#0f2a1a",raised:"#009246",btnTranslate:"#000",CurrentProgressVideo:"#ce2b37",videoDuration:"#0f2a1a",colorIcons:"#009246",textLogo:"#ce2b37"},{name:"Japan",gradient:"linear-gradient(135deg, #ffffff 0%, #bc002d 55%, #111111 100%)",textColor:"#ffffff",raised:"#bc002d",btnTranslate:"#000",CurrentProgressVideo:"#bc002d",videoDuration:"#fff",colorIcons:"#bc002d",textLogo:"#bc002d"},{name:"South Korea",gradient:"linear-gradient(135deg, #003478 0%, #ffffff 45%, #c60c30 100%)",textColor:"#ffffff",raised:"#003478",btnTranslate:"#000",CurrentProgressVideo:"#c60c30",videoDuration:"#fff",colorIcons:"#003478",textLogo:"#c60c30"},{name:"USA",gradient:"linear-gradient(135deg, #3c3b6e 0%, #ffffff 45%, #b22234 100%)",textColor:"#ffffff",raised:"#3c3b6e",btnTranslate:"#000",CurrentProgressVideo:"#b22234",videoDuration:"#fff",colorIcons:"#3c3b6e",textLogo:"#b22234"},{name:"United Kingdom",gradient:"linear-gradient(135deg, #012169 0%, #ffffff 40%, #c8102e 100%)",textColor:"#ffffff",raised:"#012169",btnTranslate:"#000",CurrentProgressVideo:"#c8102e",videoDuration:"#fff",colorIcons:"#012169",textLogo:"#c8102e"},{name:"India",gradient:"linear-gradient(180deg, #ff9933 0%, #ffffff 48%, #138808 100%)",textColor:"#0b2a12",raised:"#138808",btnTranslate:"#000",CurrentProgressVideo:"#000080",videoDuration:"#0b2a12",colorIcons:"#000080",textLogo:"#ff9933"},{name:"Canada",gradient:"linear-gradient(90deg, #ff0000 0%, #ffffff 50%, #ff0000 100%)",textColor:"#1a1a1a",raised:"#ff0000",btnTranslate:"#000",CurrentProgressVideo:"#ff0000",videoDuration:"#1a1a1a",colorIcons:"#ff0000",textLogo:"#ff0000"},{name:"Chile",gradient:"linear-gradient(180deg, #d52b1e 0%, #ffffff 50%, #0039a6 100%)",textColor:"#ffffff",raised:"#0039a6",btnTranslate:"#000",CurrentProgressVideo:"#d52b1e",videoDuration:"#fff",colorIcons:"#d52b1e",textLogo:"#0039a6"}],K=se("div");K.id="yt-enhancement-panel";const Po=ft.map((e,t)=>`
        <label >
          <div class="theme-option">
          <div class="theme-preview" style="background: ${e.gradient};"></div>
          <input type="radio" name="theme" value="${t}" ${t===0?"checked":""}>
              <span style="${e.name==="Default / Reload Page"?"color: red; ":""}" class="theme-name">${e.name}</span>
              </div>
        </label>
    `).join(""),Do=Object.entries(Ze).map(([e,t])=>`<option value="${e}" ${e===Ze?"selected":""}>${t}</option>`).join("");function Ao(){const e=document.cookie.split("; ").find(l=>l.startsWith("PREF="));if(!e)return"light";const t=e.substring(5),a=new URLSearchParams(t).get("f6");return["400","4000000","40000400","40000000"].includes(a)?"dark":"light"}let mt=Ao();const q=(e,t,o=!1)=>`
    <label class="yt-toggle-row">
      <input type="checkbox" class="checkbox-mdcm yt-check" id="${e}"${o?" checked":""}>
      <span class="checkmark" aria-hidden="true"></span>
      <span class="yt-toggle-label">${t}</span>
    </label>`,At=`
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
            <div class="value">v2.5</div>
          </div>
        </div>
        <div class="yt-action-grid">
          <button type="button" id="shareBtn-mdcm"><i class="fa-solid fa-share-nodes"></i> Share</button>
          <button type="button" id="importExportBtn"><i class="fa-solid fa-file-import"></i> Import / Export</button>
        </div>
        <div id="shareDropdown">
          <p class="yt-page-desc" style="margin-top:0">Share Youtube Tools with others</p>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${qe}" target="_blank" data-network="facebook" class="share-link"><i class="fa-brands fa-facebook"></i> Facebook</a>
          <a href="https://twitter.com/intent/tweet?url=${qe}" target="_blank" data-network="twitter" class="share-link"><i class="fa-brands fa-twitter"></i> X / Twitter</a>
          <a href="https://api.whatsapp.com/send?text=${qe}" target="_blank" data-network="whatsapp" class="share-link"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=${qe}" target="_blank" data-network="linkedin" class="share-link"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
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
          ${q("hide-comments-toggle","Hide Comments")}
          ${q("hide-sidebar-toggle","Hide Sidebar")}
          ${q("autoplay-toggle","Disable Autoplay")}
          ${q("subtitles-toggle","Disable Subtitles")}
          ${q("dislikes-toggle","Show Dislikes",!0)}
          ${q("like-dislike-bar-toggle","Like vs Dislike bar")}
          ${q("bookmarks-toggle","Bookmarks (timestamps)")}
          ${q("continue-watching-toggle","Continue watching")}
          ${q("shorts-channel-name-toggle","Shorts: show channel name")}
          ${q("themes-toggle","Active Themes")}
          ${q("translation-toggle","Translate comments")}
          ${q("avatars-toggle","Download avatars")}
          ${q("reverse-mode-toggle","Reverse mode")}
          ${q("cinematic-lighting-toggle","Cinematic Mode")}
          ${q("wave-visualizer-toggle","Wave visualizer Beta",!0)}
          ${q("sync-cinematic-toggle","Sync Ambient Mode YT")}
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
            <select class="yt-select" id="select-languages-comments-select">${Do}</select>
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
          <p class="yt-page-desc">Disable Cinematic Mode on General for best results.${mt==="dark"?"":' <span style="color:#f66;">Activate dark mode to use themes.</span>'}</p>
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
            <div class="options-mdcm">${Po}</div>
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
        <span>Script v2.5</span>
      </div>
      <a href="https://github.com/DeveloperMDCM" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-github"></i> DeveloperMDCM
      </a>
    </footer>
  </div>
  `,Io=we?.createHTML?we.createHTML(`${At}`):`${At}`;K.innerHTML=Io,Gt(K),he&&(document.documentElement.dataset.ytToolsExtension="1",K.style.cssText="display:none!important;visibility:hidden!important;pointer-events:none!important;position:fixed!important;left:-99999px!important;opacity:0!important;",GM_addStyle(`
      html[data-yt-tools-extension="1"] #yt-enhancement-panel,
      html[data-yt-tools-extension="1"] #toggle-button,
      html[data-yt-tools-extension="1"] #icon-menu-settings {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `));function It(){const e=p("ytd-topbar-menu-button-renderer");if(!e||r("icon-menu-settings"))return;const t=se("div");t.id="toggle-button";const o=se("i");o.id="icon-menu-settings",o.classList.add("fa-solid","fa-gear"),t.appendChild(o),e.parentElement.insertBefore(t,e);let a=!1;t.addEventListener("click",()=>{a=!a,K.classList.toggle("is-open",a),K.style.display=a?"flex":"none"})}he||It();let zo=!1;const zt=p(".close_menu_settings");zt&&!he&&zt.addEventListener("click",()=>{zo=!1,K.classList.remove("is-open"),K.style.display="none"});const Nt=K.querySelectorAll(".tab-mdcm"),No=K.querySelectorAll(".tab-content"),gt=K.querySelector("#home-nav-btn");function $t(e){Nt.forEach(n=>n.classList.remove("active")),No.forEach(n=>n.classList.remove("active"));const t=e==="yt-tools-home"||e==="home";gt?.classList.toggle("active",t);const o=t?"yt-tools-home":e,a=K.querySelector(`#${o}`);if(a&&a.classList.add("active"),!t){const n=K.querySelector(`.tab-mdcm[data-tab="${e}"]`);n&&n.classList.add("active")}}Nt.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-tab");t&&$t(t)})}),gt&&gt.addEventListener("click",()=>$t("yt-tools-home"));function P(e){const t=r(e);return t?t.checked:!0}function He(){if(he)return;const e={theme:p('input[name="theme"]:checked').value,bgColorPicker:r("bg-color-picker").value,progressbarColorPicker:r("progressbar-color-picker").value,primaryColorPicker:r("primary-color-picker").value,secondaryColorPicker:r("secondary-color-picker").value,headerColorPicker:r("header-color-picker").value,iconsColorPicker:r("icons-color-picker").value,menuColorPicker:r("menu-color-picker").value,lineColorPicker:r("line-color-picker").value,timeColorPicker:r("time-color-picker").value,dislikes:r("dislikes-toggle").checked,likeDislikeBar:r("like-dislike-bar-toggle").checked,bookmarks:r("bookmarks-toggle").checked,continueWatching:r("continue-watching-toggle").checked,shortsChannelName:r("shorts-channel-name-toggle").checked,themes:r("themes-toggle").checked,translation:r("translation-toggle").checked,avatars:r("avatars-toggle").checked,reverseMode:r("reverse-mode-toggle").checked,waveVisualizer:r("wave-visualizer-toggle").checked,waveVisualizerSelected:r("select-wave-visualizer-select").value,hideComments:r("hide-comments-toggle").checked,hideSidebar:r("hide-sidebar-toggle").checked,disableAutoplay:r("autoplay-toggle").checked,cinematicLighting:r("cinematic-lighting-toggle").checked,syncCinematic:r("sync-cinematic-toggle").checked,disableSubtitles:r("subtitles-toggle").checked,playerSize:r("player-size-slider").value,selectVideoQuality:r("select-video-qualitys-select").value,languagesComments:r("select-languages-comments-select").value,btnThumbnail:P("btn-thumbnail-toggle"),btnBuffer:P("btn-buffer-toggle"),btnFilterEyes:P("btn-filter-eyes-toggle"),btnReset:P("btn-reset-toggle"),btnRepeat:P("btn-repeat-toggle"),btnBookmark:P("btn-bookmark-toggle"),btnContinueWatching:P("btn-continue-toggle"),btnDownloadMp4:P("btn-mp4-toggle"),btnDownloadMp3:P("btn-mp3-toggle"),btnExternalDownload:P("btn-external-toggle"),btnViewExternal:P("btn-view-external-toggle"),btnPip:P("btn-pip-toggle"),btnScreenshot:P("btn-screenshot-toggle"),btnCheckUpdates:P("btn-updates-toggle"),menu_developermdcm:{bg:ne,color:ae,accent:ie}};GM_setValue("ytSettingsMDCM",JSON.stringify(e))}function $o(){const e=JSON.parse(GM_getValue("ytSettingsMDCM","{}"));h.settingsLoaded=!0,e.theme&&(p(`input[name="theme"][value="${e.theme}"]`).checked=!0),e.menu_developermdcm=e.menu_developermdcm||{bg:"#0c0c0c",color:"#ffffff",accent:"#ff0000"},r("bg-color-picker").value=e.bgColorPicker||"#000000",r("progressbar-color-picker").value=e.progressbarColorPicker||"#ff0000",r("primary-color-picker").value=e.primaryColorPicker||"#ffffff",r("secondary-color-picker").value=e.secondaryColorPicker||"#ffffff",r("header-color-picker").value=e.headerColorPicker||"#000",r("icons-color-picker").value=e.iconsColorPicker||"#ffffff",r("menu-color-picker").value=e.menuColorPicker||"#000",r("line-color-picker").value=e.lineColorPicker||"#ff0000",r("time-color-picker").value=e.timeColorPicker||"#ffffff",r("dislikes-toggle").checked=e.dislikes||!1,r("like-dislike-bar-toggle").checked=e.likeDislikeBar||!1,r("bookmarks-toggle").checked=e.bookmarks||!1,r("continue-watching-toggle").checked=e.continueWatching||!1,r("shorts-channel-name-toggle").checked=e.shortsChannelName||!1,r("themes-toggle").checked=e.themes||!1,r("translation-toggle").checked=e.translation||!1,r("avatars-toggle").checked=e.avatars||!1,r("reverse-mode-toggle").checked=e.reverseMode||!1,r("wave-visualizer-toggle").checked=e.waveVisualizer||!1,r("select-wave-visualizer-select").value=e.waveVisualizerSelected||"dinamica",r("hide-comments-toggle").checked=e.hideComments||!1,r("hide-sidebar-toggle").checked=e.hideSidebar||!1,r("autoplay-toggle").checked=e.disableAutoplay||!1,r("cinematic-lighting-toggle").checked=e.cinematicLighting||!1,r("sync-cinematic-toggle").checked=e.syncCinematic||!1,r("subtitles-toggle").checked=e.disableSubtitles||!1,r("player-size-slider").value=e.playerSize||100,r("select-video-qualitys-select").value=e.selectVideoQuality||"user",r("select-languages-comments-select").value=e.languagesComments||"en";const t=(o,a)=>{const n=r(o);n&&(n.checked=a!==!1)};t("btn-thumbnail-toggle",e.btnThumbnail),t("btn-buffer-toggle",e.btnBuffer),t("btn-filter-eyes-toggle",e.btnFilterEyes),t("btn-reset-toggle",e.btnReset),t("btn-repeat-toggle",e.btnRepeat),t("btn-bookmark-toggle",e.btnBookmark),t("btn-continue-toggle",e.btnContinueWatching),t("btn-mp4-toggle",e.btnDownloadMp4),t("btn-mp3-toggle",e.btnDownloadMp3),t("btn-external-toggle",e.btnExternalDownload),t("btn-view-external-toggle",e.btnViewExternal),t("btn-pip-toggle",e.btnPip),t("btn-screenshot-toggle",e.btnScreenshot),t("btn-updates-toggle",e.btnCheckUpdates),ne=e.menu_developermdcm.bg,ae=e.menu_developermdcm.color,ie=e.menu_developermdcm.accent,H("#bg-color-options .color-box").forEach(o=>{o.classList.toggle("selected",o.dataset.value===ne)}),H("#text-color-options .color-box").forEach(o=>{o.classList.toggle("selected",o.dataset.value===ae)}),H("#bg-accent-color-options .color-box").forEach(o=>{o.classList.toggle("selected",o.dataset.value===ie)}),w("--popup-bg",ne),w("--popup-text",ae),w("--popup-accent",ie),w("--yt-enhance-menu-bg",ne),w("--yt-enhance-menu-text",ae),w("--yt-enhance-menu-accent",ie),ht(),setTimeout(()=>{bt(),e.dislikes&&(Et(),_t(),Pt=!0),window.location.href.includes("youtube.com/watch?v=")&&Bo()},500)}async function Bo(){return new Promise(e=>{const t=()=>{const o=p("video"),a=r("cinematics");if(!o||!a||isNaN(o.duration)||o.duration===0){setTimeout(t,500);return}if(!JSON.parse(GM_getValue("ytSettingsMDCM","{}")).syncCinematic){const d=r("cinematic-lighting-toggle");d&&a&&(a.style.display=d.checked?"block":"none"),e(!1);return}const l=o.currentTime,s=()=>{if(o.currentTime>=l+1){const d=Vt(),c=r("cinematic-lighting-toggle");c&&c.checked!==d&&(c.checked=d,He()),e(d)}else setTimeout(s,300)};s()};t()})}H(".color-box").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.type,o=e.dataset.value;t==="bg"?(ne=o,w("--popup-bg",o),w("--yt-enhance-menu-bg",o),H("#bg-color-options .color-box").forEach(a=>{a.classList.remove("selected")}),e.classList.add("selected")):t==="color"?(ae=o,w("--popup-text",o),w("--yt-enhance-menu-text",o),H("#text-color-options .color-box").forEach(a=>{a.classList.remove("selected")}),e.classList.add("selected")):t==="accent"&&(ie=o,w("--popup-accent",o),w("--yt-enhance-menu-accent",o),H("#bg-accent-color-options .color-box").forEach(a=>{a.classList.remove("selected")}),e.classList.add("selected")),He()})});function ht(){r("player-size-value").textContent=r("player-size-slider").value}r("reset-player-size").addEventListener("click",()=>{r("player-size-slider").value=100,ht(),bt()});function Bt(){const e=r("shareBtn-mdcm"),t=r("importExportBtn"),o=r("closeImportExportBtn");e&&!e.dataset.initialized&&(e.dataset.initialized="true",e.addEventListener("click",function(a){a.stopPropagation();const n=r("shareDropdown"),l=r("importExportArea");if(l&&l.classList.remove("active"),n){const s=!n.classList.contains("is-open");n.classList.toggle("is-open",s),n.style.display=s?"block":"none"}})),t&&!t.dataset.initialized&&(t.dataset.initialized="true",t.addEventListener("click",function(){const a=r("importExportArea"),n=r("shareDropdown");n&&(n.classList.remove("is-open"),n.style.display="none"),a&&a.classList.toggle("active")})),o&&!o.dataset.initialized&&(o.dataset.initialized="true",o.addEventListener("click",function(){const a=r("importExportArea");a&&a.classList.remove("active")}))}function xe(){return window.location.href.includes("youtube.com/watch?v=")}function Vt(){const e=document.getElementById("cinematics");if(!e)return!1;const t=e.innerHTML.trim()!=="",o=e.querySelector("canvas")!==null,a=e.children.length>0,n=e.querySelector('div[style*="position: fixed"]')!==null;return t||o||a||n}function Je(){const e=p(".ytp-button.ytp-settings-button");if(!e){console.log("Settings button not found");return}e.click();const t=new MutationObserver(o=>{const a=H(".ytp-menuitem");for(let n of a){const l=n.textContent?.toLowerCase(),s=n.querySelector(".ytp-menuitem-icon svg path");if(l&&(l.includes("cinematic")||l.includes("lighting")||l.includes("cinema"))){console.log("Found cinematic lighting option:",l),n.click(),setTimeout(()=>{p(".ytp-settings-menu")&&document.body.click()},100),t.disconnect();return}if(s&&(s.getAttribute("d")?.includes("M21 7v10H3V7")||s.getAttribute("d")?.includes("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"))){console.log("Found cinematic lighting option by SVG path"),n.click(),setTimeout(()=>{p(".ytp-settings-menu")&&document.body.click()},100),t.disconnect();return}}});t.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),setTimeout(()=>{t.disconnect(),p(".ytp-settings-menu")&&document.body.click()},5e3)}function Vo(e){const t=p(".containerButtons");if(!t)return;const o=(l,s)=>{t.querySelectorAll(l).forEach(d=>{d.style.display=s?"":"none"})};o("#imagen",e.btnThumbnail!==!1),o(".buffer_video",e.btnBuffer!==!1),t.querySelectorAll("div").forEach(l=>{l.querySelector&&l.querySelector("#eyes")&&(l.style.display=e.btnFilterEyes!==!1?"":"none")}),o("#reset_button",e.btnReset!==!1),o("#repeatvideo",e.btnRepeat!==!1);const a=!!e.bookmarks&&e.btnBookmark!==!1;o("#yt-bookmark-add",a),o("#yt-bookmark-toggle",a);const n=!!e.continueWatching&&e.btnContinueWatching!==!1;o("#yt-cw-history-toggle",n),o(".btn1",e.btnDownloadMp4!==!1),o(".btn2",e.btnDownloadMp3!==!1),o(".btn3",e.btnDownloadMp4!==!1||e.btnDownloadMp3!==!1),o(".external_link",e.btnExternalDownload!==!1),o(".view_external_link",e.btnViewExternal!==!1),o(".video_picture_to_picture",e.btnPip!==!1),o(".screenshot_video",e.btnScreenshot!==!1),o(".checked_updates",e.btnCheckUpdates!==!1)}function Oo(e){if(r("dislikes-toggle"))try{const t=String(e.theme??"custom"),o=p(`input[name="theme"][value="${t}"]`);if(o)o.checked=!0;else if(t!=="custom"&&t!=="normal"){const s=p('input[name="theme"][value="normal"]');s&&(s.checked=!0)}const a=(s,d)=>{const c=r(s);c&&d!=null&&(c.value=d)},n=(s,d)=>{const c=r(s);c&&(c.checked=!!d)};a("bg-color-picker",e.bgColorPicker||"#000000"),a("progressbar-color-picker",e.progressbarColorPicker||"#ff0000"),a("primary-color-picker",e.primaryColorPicker||"#ffffff"),a("secondary-color-picker",e.secondaryColorPicker||"#ffffff"),a("header-color-picker",e.headerColorPicker||"#000000"),a("icons-color-picker",e.iconsColorPicker||"#ffffff"),a("menu-color-picker",e.menuColorPicker||"#000000"),a("line-color-picker",e.lineColorPicker||"#ff0000"),a("time-color-picker",e.timeColorPicker||"#ffffff"),n("dislikes-toggle",e.dislikes),n("like-dislike-bar-toggle",e.likeDislikeBar),n("bookmarks-toggle",e.bookmarks),n("continue-watching-toggle",e.continueWatching),n("shorts-channel-name-toggle",e.shortsChannelName),n("themes-toggle",e.themes),n("translation-toggle",e.translation),n("avatars-toggle",e.avatars),n("reverse-mode-toggle",e.reverseMode),n("wave-visualizer-toggle",e.waveVisualizer),a("select-wave-visualizer-select",e.waveVisualizerSelected||"dinamica"),n("hide-comments-toggle",e.hideComments),n("hide-sidebar-toggle",e.hideSidebar),n("autoplay-toggle",e.disableAutoplay),n("cinematic-lighting-toggle",e.cinematicLighting),n("sync-cinematic-toggle",e.syncCinematic),n("subtitles-toggle",e.disableSubtitles),a("player-size-slider",e.playerSize??100),a("select-video-qualitys-select",e.selectVideoQuality||"user"),a("select-languages-comments-select",e.languagesComments||"en"),n("btn-thumbnail-toggle",e.btnThumbnail!==!1),n("btn-buffer-toggle",e.btnBuffer!==!1),n("btn-filter-eyes-toggle",e.btnFilterEyes!==!1),n("btn-reset-toggle",e.btnReset!==!1),n("btn-repeat-toggle",e.btnRepeat!==!1),n("btn-bookmark-toggle",e.btnBookmark!==!1),n("btn-continue-toggle",e.btnContinueWatching!==!1),n("btn-mp4-toggle",e.btnDownloadMp4!==!1),n("btn-mp3-toggle",e.btnDownloadMp3!==!1),n("btn-external-toggle",e.btnExternalDownload!==!1),n("btn-view-external-toggle",e.btnViewExternal!==!1),n("btn-pip-toggle",e.btnPip!==!1),n("btn-screenshot-toggle",e.btnScreenshot!==!1),n("btn-updates-toggle",e.btnCheckUpdates!==!1);const l=e.menu_developermdcm||{};ne=l.bg||ne,ae=l.color||ae,ie=l.accent||ie}catch(t){console.warn("[Youtube Tools] syncHiddenPanelFromSettings",t)}}function bt(){const e=p(".formulariodescarga"),t=p(".formulariodescargaaudio");e!=null&&(e.classList.add("ocultarframe"),t.classList.add("ocultarframe"));let o;try{const i=JSON.parse(GM_getValue("ytSettingsMDCM","{}")||"{}");(he||!r("dislikes-toggle"))&&(o={theme:i.theme||"custom",bgColorPicker:i.bgColorPicker||"#000000",progressbarColorPicker:i.progressbarColorPicker||"#ff0000",primaryColorPicker:i.primaryColorPicker||"#ffffff",secondaryColorPicker:i.secondaryColorPicker||"#ffffff",headerColorPicker:i.headerColorPicker||"#000000",iconsColorPicker:i.iconsColorPicker||"#ffffff",menuColorPicker:i.menuColorPicker||"#000000",lineColorPicker:i.lineColorPicker||"#ff0000",timeColorPicker:i.timeColorPicker||"#ffffff",dislikes:!!i.dislikes,likeDislikeBar:!!i.likeDislikeBar,bookmarks:!!i.bookmarks,continueWatching:!!i.continueWatching,shortsChannelName:!!i.shortsChannelName,themes:!!i.themes,translation:!!i.translation,avatars:!!i.avatars,reverseMode:!!i.reverseMode,waveVisualizer:!!i.waveVisualizer,waveVisualizerSelected:i.waveVisualizerSelected||"dinamica",hideComments:!!i.hideComments,hideSidebar:!!i.hideSidebar,disableAutoplay:!!i.disableAutoplay,cinematicLighting:!!i.cinematicLighting,syncCinematic:!!i.syncCinematic,disableSubtitles:!!i.disableSubtitles,playerSize:i.playerSize??100,selectVideoQuality:i.selectVideoQuality||"user",languagesComments:i.languagesComments||"en",btnThumbnail:i.btnThumbnail!==!1,btnBuffer:i.btnBuffer!==!1,btnFilterEyes:i.btnFilterEyes!==!1,btnReset:i.btnReset!==!1,btnRepeat:i.btnRepeat!==!1,btnBookmark:i.btnBookmark!==!1,btnContinueWatching:i.btnContinueWatching!==!1,btnDownloadMp4:i.btnDownloadMp4!==!1,btnDownloadMp3:i.btnDownloadMp3!==!1,btnExternalDownload:i.btnExternalDownload!==!1,btnViewExternal:i.btnViewExternal!==!1,btnPip:i.btnPip!==!1,btnScreenshot:i.btnScreenshot!==!1,btnCheckUpdates:i.btnCheckUpdates!==!1,menu_developermdcm:i.menu_developermdcm||{bg:ne,color:ae,accent:ie}},ne=o.menu_developermdcm.bg,ae=o.menu_developermdcm.color,ie=o.menu_developermdcm.accent,he&&Oo(o))}catch{o=null}o||(o={theme:p('input[name="theme"]:checked')?.value,bgColorPicker:r("bg-color-picker")?.value,progressbarColorPicker:r("progressbar-color-picker")?.value,primaryColorPicker:r("primary-color-picker")?.value,secondaryColorPicker:r("secondary-color-picker")?.value,headerColorPicker:r("header-color-picker")?.value,iconsColorPicker:r("icons-color-picker")?.value,menuColorPicker:r("menu-color-picker")?.value,lineColorPicker:r("line-color-picker")?.value,timeColorPicker:r("time-color-picker")?.value,dislikes:r("dislikes-toggle")?.checked,likeDislikeBar:r("like-dislike-bar-toggle")?.checked,bookmarks:r("bookmarks-toggle")?.checked,continueWatching:r("continue-watching-toggle")?.checked,shortsChannelName:r("shorts-channel-name-toggle")?.checked,themes:r("themes-toggle")?.checked,translation:r("translation-toggle")?.checked,avatars:r("avatars-toggle")?.checked,reverseMode:r("reverse-mode-toggle")?.checked,waveVisualizer:r("wave-visualizer-toggle")?.checked,waveVisualizerSelected:r("select-wave-visualizer-select")?.value,hideComments:r("hide-comments-toggle")?.checked,hideSidebar:r("hide-sidebar-toggle")?.checked,disableAutoplay:r("autoplay-toggle")?.checked,cinematicLighting:r("cinematic-lighting-toggle")?.checked,syncCinematic:r("sync-cinematic-toggle")?.checked,disableSubtitles:r("subtitles-toggle")?.checked,playerSize:r("player-size-slider")?.value,selectVideoQuality:r("select-video-qualitys-select")?.value,languagesComments:r("select-languages-comments-select")?.value,btnThumbnail:P("btn-thumbnail-toggle"),btnBuffer:P("btn-buffer-toggle"),btnFilterEyes:P("btn-filter-eyes-toggle"),btnReset:P("btn-reset-toggle"),btnRepeat:P("btn-repeat-toggle"),btnBookmark:P("btn-bookmark-toggle"),btnContinueWatching:P("btn-continue-toggle"),btnDownloadMp4:P("btn-mp4-toggle"),btnDownloadMp3:P("btn-mp3-toggle"),btnExternalDownload:P("btn-external-toggle"),btnViewExternal:P("btn-view-external-toggle"),btnPip:P("btn-pip-toggle"),btnScreenshot:P("btn-screenshot-toggle"),btnCheckUpdates:P("btn-updates-toggle"),menu_developermdcm:{bg:ne,color:ae,accent:ie}}),w("--popup-bg",o.menu_developermdcm.bg),w("--popup-text",o.menu_developermdcm.color),w("--popup-accent",o.menu_developermdcm.accent),w("--yt-enhance-menu-bg",o.menu_developermdcm.bg),w("--yt-enhance-menu-text",o.menu_developermdcm.color),w("--yt-enhance-menu-accent",o.menu_developermdcm.accent),vt(),he||Bt();const a=r("comments");a&&(a.style.display=o.hideComments?"none":"block");const n=p(".themes-hidden");n&&(n.style.display=o.themes?"block":"none");const l=p("#secondary > #secondary-inner");if(l){l.classList.add("side-moi");const i=p(".side-moi");i.style.display=o.hideSidebar?"none":"block"}const s=p(".ytp-autonav-toggle-button");if(s){const i=s.getAttribute("aria-checked")==="true";(o.disableAutoplay&&i||!o.disableAutoplay&&!i)&&s.click()}const d=p(".ytp-subtitles-button");if(d){const i=d.getAttribute("aria-pressed")==="true";(o.disableSubtitles&&i||!o.disableSubtitles&&!i)&&d.click()}xe()&&setTimeout(()=>{const i=Vt();if(o.syncCinematic)(o.cinematicLighting&&!i||!o.cinematicLighting&&i)&&Je();else{const u=r("cinematics");u&&(u.style.display=o.cinematicLighting?"block":"none")}},1e3);const c=p("video");c&&(c.style.transform=`scale(${o.playerSize/100})`);const v=p("div#movie_player");let f=localStorage.getItem("yt-player-quality");if(v!=null&&o.selectVideoQuality!=="user")if(f){let i=JSON.parse(f);i.data=JSON.stringify({quality:o.selectVideoQuality,previousQuality:240}),localStorage.setItem("yt-player-quality",JSON.stringify(i))}else{let i={data:JSON.stringify({quality:720,previousQuality:240}),expiration:Date.now()+31536e6,creation:Date.now()};localStorage.setItem("yt-player-quality",JSON.stringify(i))}const k=String(o.theme??"custom"),m=ft[k]||ft[0],M=k==="custom",A=k==="normal",I=p(".theme-custom-options"),$=p(".theme-selected-normal");let _="";const x=i=>{i&&(_+=`
${i}
`)};if($&&I)if(M){$.style.display="flex",I.style.display="flex";const i=p(".themes-options");i&&(i.style.display="none")}else if(A){const i=p('input[name="theme"][value="custom"]');i&&(i.checked=!1),$.style.display="flex",I.style.display="none";const u=p(".themes-options");u&&(u.style.display="block")}else{$.style.display="none",I.style.display="none";const i=p(".themes-options");i&&(i.style.display="block")}function z(){if(o.themes)if(mt==="dark"&&!M){if(p(".themes-options").style.display="block",$.style.display="none",I.style.display="none",o.theme==="0"){x(`
              .botones_div {
               background-color: transparent;
               border: none;
               color: #ccc !important;
               user-select: none;
             }
               `);return}w("--yt-spec-base-background",m.gradient),w("--yt-spec-text-primary",m.textColor),w("--yt-spec-text-secondary",m.textColor),w("--yt-spec-menu-background",m.gradient);const i=m.colorIcons||m.textLogo||"#ffffff",u=m.textLogo||i;w("--yt-spec-icon-inactive",i),w("--yt-spec-brand-icon-inactive",i),w("--yt-spec-brand-icon-active",m.gradient),w("--yt-spec-static-brand-red",m.gradient),w("--yt-spec-raised-background",m.raised),w("--yt-spec-static-brand-red",m.CurrentProgressVideo),w("--yt-spec-static-brand-white",m.textColor),w("--ytd-searchbox-background",m.gradient),w("--ytd-searchbox-text-color",m.textColor),w("--ytcp-text-primary",m.textColor),x(`
              .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
              background:  ${m.gradient} !important;
              }
            #background.ytd-masthead { background: ${m.gradient}  !important; }
            .ytp-swatch-background-color {
            background: ${m.gradient} !important;
          }
          #shorts-container, #page-manager.ytd-app {
            background: ${m.gradient.replace(/(#[0-9a-fA-F]{6})/g,"$136")};
          }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${m.gradient}  !important;}
            .buttons-tranlate {
            background: ${m.btnTranslate} !important;
            }
            .badge-shape-wiz--thumbnail-default {
            color: ${m.videoDuration} !important;
            background: ${m.gradient} !important;
            }

          /* === iconsColorPicker-equivalent rules (preset colorIcons) === */
          .ytp-menuitem .ytp-menuitem-icon svg path {
            fill: ${i} !important;
          }
          a svg > path,
          .ytp-button svg path {
            fill: ${i} !important;
          }
          svg.path {
            fill: ${i} !important;
          }
          svg {
            color: ${i} !important;
          }
          .ytp-volume-slider-handle:before,
          .ytp-volume-slider-handle,
          .ytp-tooltip.ytp-preview:not(.ytp-text-detail) {
            background-color: ${i} !important;
          }
          .ytp-autonav-toggle-button[aria-checked=true] {
            background-color: ${i} !important;
          }
          .tp-yt-iron-icon {
            fill: ${i} !important;
          }
          .botones_div {
            background-color: transparent !important;
            background: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            color: ${i} !important;
            user-select: none;
          }
          /* Color via currentColor only \u2014 do not force stroke on all paths
             (Tabler has a full-box path with stroke="none"; forcing stroke draws a square) */
          .botones_div svg,
          .containerButtons .botones_div svg {
            color: ${i} !important;
            fill: none !important;
          }
          .yt-spec-icon-shape {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            color: ${i} !important;
          }
          .ytp-time-current, .ytp-time-separator, .ytp-time-duration {
            color: ${i} !important;
          }
          #logo-icon,
          ytd-logo #logo-icon,
          #logo #logo-icon,
          ytd-masthead ytd-logo #logo-icon {
            color: ${u} !important;
          }
          #buttons.ytd-masthead yt-icon,
          #buttons.ytd-masthead .yt-spec-icon-shape,
          #buttons.ytd-masthead .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text,
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color: ${i} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color: ${i} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color: ${i} !important;
          }
          ytd-masthead #guide-button yt-icon,
          ytd-masthead #guide-button .yt-spec-icon-shape,
          ytd-masthead #start yt-icon,
          ytd-masthead #end yt-icon,
          ytd-masthead ytd-button-renderer yt-icon,
          ytd-masthead ytd-notification-topbar-button-renderer yt-icon {
            color: ${i} !important;
          }
          .ytp-svg-fill {
            fill: ${i} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20 {
            fill: ${i} !important;
          }

            `)}else mt==="dark"&&M?(w("--yt-spec-base-background",o.bgColorPicker),w("--yt-spec-text-primary",o.primaryColorPicker),w("--yt-spec-text-secondary",o.secondaryColorPicker),w("--yt-spec-menu-background",o.menuColorPicker),w("--yt-spec-icon-inactive",o.iconsColorPicker),w("--yt-spec-brand-icon-inactive",o.primaryColorPicker),w("--yt-spec-brand-icon-active",o.primaryColorPicker),w("--yt-spec-raised-background",o.headerColorPicker),w("--yt-spec-static-brand-red",o.lineColorPicker),w("--yt-spec-static-brand-white",o.timeColorPicker),w("--ytd-searchbox-background",o.primaryColorPicker),w("--ytd-searchbox-text-color",o.secondaryColorPicker),w("--ytcp-text-primary",o.primaryColorPicker),x(`
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
            `)):x(`
            .botones_div {
             background-color: transparent;
             border: none;
             color: #000 !important;
             user-select: none;
           }
             `);else x(`
          .botones_div {
           background-color: transparent;
           border: none;
           color: #ccc !important;
           user-select: none;
         }
           `)}x(`
      #columns.style-scope.ytd-watch-flexy {
        flex-direction: ${o.reverseMode?"row-reverse":"row"} !important;
        padding-left: ${o.reverseMode?"20px":"0"} !important;
        }
        #secondary.style-scope.ytd-watch-flexy {display: ${o.hideSidebar?"none":"block"} !important;}


        #icon-menu-settings {
         color: ${o.iconsColorPicker} !important;
        }


      `),z(),eo(_),Mo(o),mo(o.continueWatching),Vo(o),Tt(o,5),go(o.shortsChannelName),xo();function U(){if(Se=o.waveVisualizerSelected||Se||"dinamica",!o.waveVisualizer){Qe(!0);return}const i=p("video"),u=p(".ytp-miniplayer-ui");(i&&document.location.href.includes("watch")||u)&&(i!==re||!tt?(Qe(!0),Go(i)):F&&i.paused===!1&&ze())}U();function N(){if(!window.location.href.includes("youtube.com/watch")||p("#button_copy_description"))return;const i=p("#bottom-row.style-scope.ytd-watch-metadata");if(!i)return;i.insertAdjacentHTML("beforebegin",`
        <div id="button_copy_description" style="display: flex; justify-content: end; align-items: center;margin-top: 10px;" >
          <button id="copy-description" title="Copy description" class="botones_div" type="button" style="cursor: pointer;">
            <i style="font-size: 20px;" class="fa-solid fa-copy"></i>
          </button>
        </div>
      `),r("copy-description").addEventListener("click",()=>{const y=[...H('script[type="application/ld+json"]')];for(let S of y)try{const D=JSON.parse(S.innerText);if(D["@type"]==="VideoObject"){const V=`\u{1F4C5} Date published: ${D.uploadDate||"No disponible"}
Author: ${D.author||"No disponible"}
\u{1F3AC} Name video: ${D.name||"No disponible"}
\u{1F5BC}\uFE0F Thumbnail: ${Array.isArray(D.thumbnailUrl)?D.thumbnailUrl.join(", "):D.thumbnailUrl||"No disponible"}
\u{1F4DD} Description: ${D.description||"No disponible"}


\u{1F3AD} Category: ${D.genre||"No disponible"}
`;navigator.clipboard.writeText(V)}}catch{j("error","Error parsing JSON-LD")}finally{j("success","Description copied")}})}N();async function B(){const i=H("#content-text");if(p(".buttons-tranlate"))return;const u=Ze,y=r("select-languages-comments-select").value;for(let V=0;V<i.length;V++){const O=Object.entries(u).map(([ge,X])=>`<option value="${ge}" ${ge===y?"selected":""}>${X}</option>`).join(""),je=`
          <div class="traductor-container" data-index="${V}">
          <button class="buttons-tranlate" id="btn${V}"> Translate <i class="fa-solid fa-language"></i></button>
          <select class="select-traductor" id="select${V}">
           ${O}
          </select>
          </div>
        `;i[V].insertAdjacentHTML("afterend",je)}const S=H(".buttons-tranlate"),D=H(".select-traductor");S.forEach((V,O)=>{V.addEventListener("click",()=>{const ge=`?client=dict-chrome-ex&sl=auto&tl=${D[O].value}&q=`+i[O].textContent;fetch(Kt+ge).then(X=>X.json()).then(X=>{i[O].textContent=X[0][0],S[O].textContent="Translated"}).catch(X=>{console.error("Error en la traducci\xF3n:",X)})})})}function me(i){H(i).forEach(u=>u.remove())}function Re(){H("#author-thumbnail-button #img.style-scope.yt-img-shadow").length>0&&o.avatars&&(me(".yt-image-avatar-download"),b());const u=p("#content-text"),y=p("ytd-item-section-renderer[static-comments-header] #contents");o.translation&&(u!==void 0||y!==void 0)&&(me(".buttons-tranlate"),me(".select-traductor"),B())}window.onscroll=()=>{Re()};const De=p(".anchored-panel.style-scope.ytd-shorts #contents.style-scope.ytd-item-section-renderer.style-scope.ytd-item-section-renderer");De&&new IntersectionObserver(u=>{u.forEach(y=>{y.isIntersecting&&De.addEventListener("scroll",()=>{Re()})})},{threshold:.1}).observe(De);function b(){H("#author-thumbnail-button #img.style-scope.yt-img-shadow").forEach(u=>{if(u.parentElement.querySelector(".yt-image-avatar-download"))return;const y=se("button");y.innerHTML='<i class="fa fa-download"></i>',y.classList.add("yt-image-avatar-download"),y.onclick=async function(){try{const S=u.src.split("=")[0],V=await(await fetch(S)).blob(),O=URL.createObjectURL(V),ge=u.closest("ytd-comment-thread-renderer, ytd-comment-renderer")?.querySelector("#author-text");let X=ge?ge.textContent.trim():"avatar";X=X.replace(/[\/\\:*?"<>|]/g,"");const Ae=se("a");Ae.href=O,Ae.download=`${X}_avatar.jpg`||"avatar.jpg",document.body.appendChild(Ae),Ae.click(),document.body.removeChild(Ae),URL.revokeObjectURL(O)}catch(S){console.error("Error al descargar la imagen:",S)}},u.parentElement.style.position="relative",u.parentElement.appendChild(y)})}const g=()=>{const u=`https://www.youtube.com/watch?v=${window.location.pathname.split("/").pop()}`;window.open(u,"_blank"),p("video.video-stream.html5-main-video").pause()};function L(i,u){const y=p("reel-action-bar-view-model");if(!y)return;const S=y.querySelector("[data-yt-tools-shorts-views]");if(!S)return;const D=S.querySelector('.yt-spec-button-shape-with-label__label span, [role="text"]');D&&(D.textContent=Number.isFinite(u)&&u>=0?ve(u,0):"\u2014")}function E(i,u){const y=p("reel-action-bar-view-model");if(!y)return;const S=y.querySelector("[data-yt-tools-shorts-rating]");if(!S)return;const D=S.querySelector('.yt-spec-button-shape-with-label__label span, [role="text"]');D&&(D.textContent=Number.isFinite(u)&&u>=0&&u<=5?u.toFixed(1):"\u2014")}function R(i){const u=document.createElement("div");u.className="button-view-model ytSpecButtonViewModelHost",i.dataAttr&&u.setAttribute(i.dataAttr,"1"),u.innerHTML=`
        <label class="yt-spec-button-shape-with-label">
          <button type="button" class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-l yt-spec-button-shape-next--icon-button yt-spec-button-shape-next--enable-backdrop-filter-experiment yt-spec-button-shape-next--enable-drop-shadow-experiment" title="${i.title||""}" aria-label="${i.ariaLabel||""}">
            <div class="yt-spec-button-shape-next__icon" aria-hidden="true">
              <span class="yt-icon-shape ytSpecIconShapeHost">${i.iconSvg||""}</span>
            </div>
          </button>
          <div class="yt-spec-button-shape-with-label__label" aria-hidden="false">
            <span class="yt-core-attributed-string yt-core-attributed-string--white-space-pre-wrap yt-core-attributed-string--text-alignment-center yt-core-attributed-string--word-wrapping" role="text">${i.labelText||""}</span>
          </div>
        </label>
      `;const y=u.querySelector("button");return i.onclick&&y.addEventListener("click",i.onclick),u}const te='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>',oe='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" /><path d="M16 3l-4 4l-4 -4" /></svg>',Ce='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';function Ro(){const i=document.location.pathname.startsWith("/shorts"),u=p("reel-action-bar-view-model");if(!i||!u){document.querySelectorAll("[data-yt-tools-shorts-classic], [data-yt-tools-shorts-views], [data-yt-tools-shorts-rating]").forEach(O=>O.remove());return}if(u.querySelector("[data-yt-tools-shorts-classic]"))return;const y=R({dataAttr:"data-yt-tools-shorts-classic",title:"Classic mode",ariaLabel:"Classic mode",iconSvg:oe,labelText:"Cl\xE1sico",onclick:g}),S=R({dataAttr:"data-yt-tools-shorts-views",title:"Vistas",ariaLabel:"Vistas",iconSvg:te,labelText:"\u2014",onclick:function(){}}),D=R({dataAttr:"data-yt-tools-shorts-rating",title:"Rating (likes/dislikes)",ariaLabel:"Rating",iconSvg:Ce,labelText:"\u2014",onclick:function(){}});u.insertBefore(D,u.firstChild),u.insertBefore(S,u.firstChild),u.insertBefore(y,u.firstChild);const V=document.location.pathname.split("/").filter(Boolean)[1];if(V){const O=ye(V);O&&O.viewCount!=null&&L(V,O.viewCount),O&&O.rating!=null&&E(V,O.rating)}h.updateShortsViewsButton=L,h.updateShortsRatingButton=E}const Ut=()=>{Ro()},jo=()=>{if(h.shortsObserver)return;const i=new MutationObserver(()=>{Ut(),It()});i.observe(document.body,{childList:!0,subtree:!0}),h.shortsObserver=i};if(h.shortsObserver||(Ut(),jo()),p("body")!=null){const i=p("ytd-item-section-renderer[static-comments-header] #contents");i!=null&&o.theme!=="custom"&&(y=>new IntersectionObserver(D=>{if(D[0].isIntersecting)i.style.background=`${m.gradient??""}`;else return}).observe(p(`${y}`)))("ytd-item-section-renderer[static-comments-header] #contents")}function kt(i){if(isNaN(i))return"0h 0m 0s";i=Math.floor(i);const u=Math.floor(i/3600),y=Math.floor(i%3600/60),S=i%60;return`${u}h ${y}m ${S}s`}function Ft(){r("total-time").textContent=kt(Ne),r("video-time").textContent=kt($e),r("shorts-time").textContent=kt(Be);const i=86400;r("usage-bar").style.width=`${Ne/i*100}%`,r("video-bar").style.width=`${$e/i*100}%`,r("shorts-bar").style.width=`${Be/i*100}%`}function qo(i){if(/\/shorts\//.test(window.location.pathname))return"shorts";let u=i;for(;(u=u.parentElement)!==null;)if(u.classList.contains("shorts-container")||u.classList.contains("reel-video")||u.tagName==="YTD-REEL-VIDEO-RENDERER")return"shorts";return i.closest("ytd-watch-flexy")||i.closest("#primary-inner")||i.closest("ytd-thumbnail")||i.closest("ytd-rich-item-renderer")?"video":null}function Uo(){const i=H("video");for(const u of i)if(!u.paused&&!u.ended&&u.readyState>2)return u;return null}function Qe(i=!1){if(i&&Ue&&(cancelAnimationFrame(Ue),Ue=null),re&&(re.removeEventListener("play",ze),re.removeEventListener("pause",ce),re.removeEventListener("ended",ce)),i){if(T&&T.parentNode&&(T.parentNode.removeChild(T),T=null,C=null),F&&F.parentNode&&(F.parentNode.removeChild(F),F=null),Ie){try{Ie.disconnect()}catch{}Ie=null}if(J){try{J.close()}catch{}J=null}re&&re[Fe]&&delete re[Fe],re=null,tt=!1}else T&&(T.style.opacity="0"),F&&(F.style.opacity="0")}function Fo(){if(T)return;const i=document.body;T=document.createElement("canvas"),T.id="wave-visualizer-canvas",T.width=window.innerWidth,T.height=ot,T.style.position="fixed",T.style.left="0",T.style.top="0",T.style.width="100%",T.style.pointerEvents="none",T.style.backgroundColor="transparent",T.style.zIndex="10000",T.style.opacity="0",T.style.transition="opacity 0.3s",i.appendChild(T),C=T.getContext("2d")}function Wo(){if(Se=o.waveVisualizerSelected||Se||"dinamica",F)return;F=se("div"),F.id="wave-visualizer-control";const i=r("select-wave-visualizer-select");i&&i.dataset.ytWaveBound!=="1"&&(i.dataset.ytWaveBound="1",i.addEventListener("change",u=>{Se=u.target.value,i.value=u.target.value,He()}))}function Go(i){if(!i||i[Fe])return;if(i[Fe]=!0,Qe(!1),re=i,Fo(),Wo(),J){try{J.close()}catch{}J=null}const u=window.AudioContext||window.webkitAudioContext;J=new u,be=J.createAnalyser(),be.fftSize=2048,be.smoothingTimeConstant=.85,Z=be.fftSize,et=new Uint8Array(Z),ee=new Array(Z).fill(128);try{Ie=J.createMediaElementSource(i),Ie.connect(be),be.connect(J.destination)}catch(S){j("error","MediaElementSource or error:",S),Qe(!0);return}i.removeEventListener("play",ze),i.removeEventListener("pause",ce),i.removeEventListener("ended",ce),i.addEventListener("play",ze),i.addEventListener("pause",ce),i.addEventListener("ended",ce);const y=()=>{T&&(T.width=window.innerWidth,T.height=ot)};window.removeEventListener("resize",y),window.addEventListener("resize",y),Wt(),tt=!0}function Wt(){if(Ue=requestAnimationFrame(Wt),parseFloat(T.style.opacity)<=0)return;be.getByteTimeDomainData(et);for(let u=0;u<Z;u++)ee[u]+=Zt*(et[u]-ee[u]);C.clearRect(0,0,T.width,T.height);let i=T.width/Z;switch(Se){case"linea":{C.lineWidth=2,C.strokeStyle="lime",C.beginPath();let u=0;for(let y=0;y<Z;y++){let S=Math.max(0,ee[y]-128)*le;y===0?C.moveTo(u,S):C.lineTo(u,S),u+=i}C.stroke();break}case"barras":{let u=0;for(let y=0;y<Z;y+=5){let S=Math.max(0,ee[y]-128)*le;C.fillStyle="cyan",C.fillRect(u,0,i*4,S),u+=i*5}break}case"curva":{C.lineWidth=2,C.strokeStyle="yellow",C.beginPath(),C.moveTo(0,Math.max(0,ee[0]-128)*le);for(let u=0;u<Z-1;u++){let y=u*i,S=(u+1)*i,D=Math.max(0,ee[u]-128)*le,V=Math.max(0,ee[u+1]-128)*le,O=y+i/3,je=D,ge=S-i/3,X=V;C.bezierCurveTo(O,je,ge,X,S,V)}C.stroke();break}case"picos":{C.fillStyle="magenta";let u=0;for(let y=0;y<Z;y+=5){let S=Math.max(0,ee[y]-128)*le;C.beginPath(),C.arc(u,S,2,0,Math.PI*2),C.fill(),u+=i*5}break}case"solida":{C.beginPath();let u=0;C.moveTo(0,0);for(let y=0;y<Z;y++){let S=Math.max(0,ee[y]-128)*le;C.lineTo(u,S),u+=i}C.lineTo(T.width,0),C.closePath(),C.fillStyle="rgba(0,255,0,0.3)",C.fill();break}case"dinamica":{let u=C.createLinearGradient(0,0,T.width,0);u.addColorStop(0,"red"),u.addColorStop(.5,"purple"),u.addColorStop(1,"blue"),C.lineWidth=3,C.strokeStyle=u,C.beginPath();let y=0;for(let S=0;S<Z;S++){let D=Math.max(0,ee[S]-128)*le;S===0?C.moveTo(y,D):C.lineTo(y,D),y+=i}C.stroke();break}case"montana":{C.beginPath();let u=0;C.moveTo(0,0);for(let y=0;y<Z;y++){let S=(ee[y]-128)*le*.8;C.lineTo(u,S),u+=i}C.lineTo(T.width,0),C.closePath(),C.fillStyle="rgba(128,128,255,0.4)",C.fill();break}default:break}}if(!h.statsObserver){const i=new MutationObserver(()=>{const u=Uo();u!==Me&&(Me=u,Me&&(nt=qo(Me)))});i.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),h.statsObserver=i}U(),h.statsIntervalId||(h.statsIntervalId=setInterval(()=>{const i=Date.now(),u=(i-wt)/1e3;document.visibilityState==="visible"&&(Ne+=u),Me&&!Me.paused&&(nt==="video"?$e+=u:nt==="shorts"&&(Be+=u)),wt=i,GM_setValue(de.USAGE,Ne),GM_setValue(de.VIDEO,$e),GM_setValue(de.SHORTS,Be),Ft()},oo)),Ft(),h.settingsLoaded&&!he&&He()}let Ot=!0;function vt(){const e=p(".style-scope .ytd-watch-metadata"),t=p("#contents");e!=null&&Ot&&(Ot=!1,(e.offsetWidth||e.offsetHeight||e.getClientRects().length||t!=null)&&e.insertAdjacentHTML("beforebegin",Dt));const o=p(".formulariodescarga"),a=p(".formulariodescargaaudio"),n=p(".btn1"),l=p(".btn2"),s=p(".btn3"),d=p(".selectcalidades"),c=p(".selectcalidadesaudio");[o,a].forEach(b=>{b&&b.dataset.ytToolsPreventDefault!=="1"&&(b.addEventListener("click",g=>g.preventDefault()),b.dataset.ytToolsPreventDefault="1")}),d&&d.dataset.ytToolsBound!=="1"&&(d.dataset.ytToolsBound="1",d.addEventListener("change",b=>{const g=b.target.value;if(!g)return;const L=r("descargando"),E=L.querySelector(".download-text"),R=L.querySelector(".download-quality"),te=L.querySelector(".download-btn"),oe=L.querySelector(".retry-btn"),Ce=L.querySelector(".progress-container");L.classList.add("video"),L.classList.remove("ocultarframe"),E.textContent=`Download ${g.toUpperCase()} And Please Wait...`,R.textContent=`${g}p`,te.style.display="block",oe.style.display="none",Ce.style.display="none",L.dataset.quality=g,L.dataset.type="video"})),c&&c.dataset.ytToolsBound!=="1"&&(c.dataset.ytToolsBound="1",c.addEventListener("change",b=>{const g=b.target.value;if(!g)return;const L=r("descargandomp3"),E=L.querySelector(".download-text"),R=L.querySelector(".download-quality"),te=L.querySelector(".download-btn"),oe=L.querySelector(".retry-btn"),Ce=L.querySelector(".progress-container");L.classList.add("audio"),L.classList.remove("ocultarframeaudio"),E.textContent=`Download ${g.toUpperCase()} And Please Wait...`,R.textContent=g.toUpperCase(),te.style.display="block",oe.style.display="none",Ce.style.display="none",L.dataset.quality=g,L.dataset.type="audio"})),s&&s.dataset.ytToolsBound!=="1"&&(s.dataset.ytToolsBound="1",s.addEventListener("click",()=>{d?.classList.add("ocultarframe"),c?.classList.add("ocultarframeaudio");const b=r("descargando"),g=r("descargandomp3");b&&(b.classList.add("ocultarframe"),b.classList.remove("video","audio","completed"),b.removeAttribute("data-quality"),b.removeAttribute("data-type"),b.removeAttribute("data-downloading"),b.removeAttribute("data-url-opened"),b.removeAttribute("data-last-download-url"),b.querySelector?.(".download-again-btn")?.style&&(b.querySelector(".download-again-btn").style.display="none")),g&&(g.classList.add("ocultarframeaudio"),g.classList.remove("video","audio","completed"),g.removeAttribute("data-quality"),g.removeAttribute("data-type"),g.removeAttribute("data-downloading"),g.removeAttribute("data-url-opened"),g.removeAttribute("data-last-download-url"),g.querySelector?.(".download-again-btn")?.style&&(g.querySelector(".download-again-btn").style.display="none")),o?.classList.add("ocultarframe"),a?.classList.add("ocultarframe"),o?.reset(),a?.reset()})),h.downloadClickHandlerInitialized||(h.downloadClickHandlerInitialized=!0,document.addEventListener("click",b=>{const g=b.target;if(!(g instanceof Element))return;const L=g.closest(".download-btn")||g.closest(".retry-btn")||g.closest(".progress-retry-btn")||g.closest(".download-again-btn");if(!L)return;const E=L.closest(".download-container");if(!E)return;const R=E.dataset.quality,te=E.dataset.type;if(L.classList.contains("download-again-btn")){const oe=E.dataset.lastDownloadUrl;oe&&window.open(oe);return}!R||!te||(L.classList.contains("progress-retry-btn")&&(E.dataset.downloading="false",E.dataset.urlOpened="false",E.dataset.lastDownloadUrl="",E.querySelector?.(".download-again-btn")?.style&&(E.querySelector(".download-again-btn").style.display="none")),to(R,E))})),n&&n.dataset.ytToolsBound!=="1"&&(n.dataset.ytToolsBound="1",n.addEventListener("click",()=>{d?.classList.remove("ocultarframe"),c?.classList.add("ocultarframeaudio");const b=r("descargando"),g=r("descargandomp3");b&&(b.classList.add("ocultarframe"),b.classList.remove("video","audio","completed"),b.removeAttribute("data-quality"),b.removeAttribute("data-type"),b.removeAttribute("data-downloading"),b.removeAttribute("data-url-opened")),g&&(g.classList.add("ocultarframeaudio"),g.classList.remove("video","audio","completed"),g.removeAttribute("data-quality"),g.removeAttribute("data-type"),g.removeAttribute("data-downloading"),g.removeAttribute("data-url-opened")),o?.classList.remove("ocultarframe"),o.style.display="",a?.classList.add("ocultarframe"),o?.reset(),a?.reset()})),l&&l.dataset.ytToolsBound!=="1"&&(l.dataset.ytToolsBound="1",l.addEventListener("click",()=>{c?.classList.remove("ocultarframeaudio"),d?.classList.add("ocultarframe");const b=r("descargando"),g=r("descargandomp3");b&&(b.classList.add("ocultarframe"),b.classList.remove("video","audio","completed"),b.removeAttribute("data-quality"),b.removeAttribute("data-type"),b.removeAttribute("data-downloading"),b.removeAttribute("data-url-opened")),g&&(g.classList.add("ocultarframeaudio"),g.classList.remove("video","audio","completed"),g.removeAttribute("data-quality"),g.removeAttribute("data-type"),g.removeAttribute("data-downloading"),g.removeAttribute("data-url-opened")),a?.classList.remove("ocultarframe"),a.style.display="",o?.classList.add("ocultarframe"),a?.reset(),o?.reset()}));const v=p("#imagen"),f=p("#eyes");function k(){const b=p(".buffer_video");b&&(b.dataset.listenerAdded||(b.addEventListener("click",()=>{const g=p("video.video-stream.html5-main-video");if(!g){console.log("No se encontr\xF3 el video en la p\xE1gina.");return}const L=new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0});g.dispatchEvent(L),setTimeout(()=>{const E=p("body > div.ytp-popup.ytp-contextmenu > div > div > div:nth-child(7)");E?E.click():console.log("Opci\xF3n no encontrada, intenta aumentar el tiempo de espera.")},1e3)}),b.dataset.listenerAdded="true"))}k();let m=0;const M=p("#repeatvideo"),A=p(".icon-tabler-repeat"),I=p("#movie_player > div.html5-video-container > video");M!=null&&(M.onclick=()=>{if(p("#cinematics > div")!=null||I!=null)switch(m+=1,m){case 1:document.querySelector("#movie_player > div.html5-video-container > video")?.setAttribute("loop","true"),A.innerHTML=`  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"></path>
                    <path d="M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"></path>
                    <path d="M3 3l18 18"></path>
                 </svg> `;break;case 2:m=0,document.querySelector("#movie_player > div.html5-video-container > video")?.removeAttribute("loop"),A.innerHTML=` <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
                  </svg>`;break}});const $=p("#cinematics > div");$!=null&&($.style="position: fixed; inset: 0px; pointer-events: none; transform: scale(1.5, 2)");const _=p("#reset_button");_?.addEventListener("click",function(){localStorage.getItem("colores")!=null&&(localStorage.removeItem("colores"),p("#ojosprotect").style.backgroundColor="transparent",setTimeout(()=>{location.reload()},400))}),v!=null&&(v.onclick=()=>{if(p("#cinematics > div")!=null||I!=null){let g=new URLSearchParams(window.location.search).get("v");const L=`https://i.ytimg.com/vi/${g}/maxresdefault.jpg`;fetch(L).then(E=>{if(!E.ok)throw new Error(`HTTP error! Status: ${E.status}`);return E.blob()}).then(E=>{if(E.size/1024>=20){window.open(`https://i.ytimg.com/vi/${g}/maxresdefault.jpg`,"popUpWindow","height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes");const te=URL.createObjectURL(E),oe=se("a");oe.href=te;const Ce=p("h1.style-scope.ytd-watch-metadata").innerText;oe.download=`${Ce}_maxresdefault.jpg`,oe.click(),URL.revokeObjectURL(te)}else console.log("La imagen no excede los 20 KB. No se descargar\xE1.")}).catch(E=>{alert("No found image"),console.error("Error al obtener la imagen:",E)})}});const x=r("background_image"),z=p("ytd-app"),U=localStorage.getItem("backgroundImage");U&&(z.style=`
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
 
        background-image: url(${U}) !important`),x.addEventListener("change",b=>{const g=b.target.files[0];if(g){const L=new FileReader;L.onload=function(E){const R=E.target.result;localStorage.setItem("backgroundImage",R),z.style.backgroundImage=`url(${R})`},L.readAsDataURL(g)}});const N=p(".external_link");N!=null&&(N.onclick=()=>{const b=new URLSearchParams(window.location.search);let g;g=b.get("v"),window.open(`https://ssyoutube.com/watch?v=${g}&t=2s`,"popUpWindow","height=800,width=1000,left=50%,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=yes,location=no,directories=yes, status=no")});const B=p(".view_external_link");B!=null&&(B.onclick=()=>{p("video").click();const b=new URLSearchParams(window.location.search);let g;g=b.get("v"),window.open(`https://www.youtube.com/embed/${g}?rel=0&controls=2&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&autoplay=1`)});const me=p(".video_picture_to_picture");me!=null&&(me.onclick=()=>{const b=p("video");"pictureInPictureEnabled"in document?document.pictureInPictureElement||b.requestPictureInPicture().then(()=>{}).catch(g=>{console.error("Error al activar el modo Picture-in-Picture:",g)}):alert("Picture-in-Picture not supported")},f?.addEventListener("input",function(){(p("#cinematics > div")!=null||I!=null)&&(p("#ojosprotect").style.backgroundColor=f.value)}),clearInterval(vt));const Re=p(".checked_updates");Re!=null&&(Re.onclick=()=>{window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js")});const De=p(".screenshot_video");if(De!=null)De.onclick=()=>{const b=p("video"),g=se("canvas");g.width=b.videoWidth,g.height=b.videoHeight,g.getContext("2d").drawImage(b,0,0,g.width,g.height);const E=g.toDataURL("image/png"),R=se("a");R.href=E;const te=p("h1.style-scope.ytd-watch-metadata").innerText;R.download=`${b.currentTime.toFixed(0)}s_${te}.png`,R.click()};else{const b=p(".containerButtons");b!=null&&(b.innerHTML="")}clearInterval(vt)}console.log("Script en ejecuci\xF3n by: DeveloperMDCM"),console.log(`%cYoutube Tools Extension NEW UI
%cRun %c(v2.5)
By: DeveloperMDCM.`,"color: #F00; font-size: 24px; font-family: sans-serif;","font-size: 14px; font-family: monospace;","color: #00aaff; font-size: 16px; font-family: sans-serif;"),localStorage.getItem("notification-developerMDCM")||(j("info","Youtube Tools by: DeveloperMDCM :)"),localStorage.setItem("notification-developerMDCM",!0)),H("input").forEach(e=>{e.addEventListener("change",We),e.type==="range"&&e.addEventListener("change",()=>{ht(),We()})});function yt(e){const t=r(e);t&&t.dataset.ytToolsBound!=="1"&&(t.dataset.ytToolsBound="1",t.addEventListener("change",()=>{try{He()}catch(o){console.error("saveSettings error:",o)}We()}))}yt("select-video-qualitys-select"),yt("select-languages-comments-select"),yt("select-wave-visualizer-select"),r("export-config").addEventListener("click",()=>{const e=GM_getValue("ytSettingsMDCM","{}");r("config-data").value=e;const t=e;try{JSON.parse(t),GM_setValue("ytSettingsMDCM",t),setTimeout(()=>{j("success","Configuration export successfully!")},1e3)}catch{j("error","Invalid configuration data. Please check and try again.")}}),r("import-config").addEventListener("click",()=>{const e=r("config-data").value;try{JSON.parse(e),GM_setValue("ytSettingsMDCM",e),setTimeout(()=>{j("success","Configuration imported successfully!"),window.location.reload()},1e3),window.location.reload()}catch{j("error","Invalid configuration data. Please check and try again.")}}),K.style.display="none";function Ho(e,t){const o=setInterval(()=>{p(e)&&(clearInterval(o),t())},100)}r("wave-visualizer-toggle").addEventListener("change",()=>{p("#wave-visualizer-toggle").checked?j("success","Wave visualizer enabled"):(ce(),j("success","Wave visualizer disabled realod page"),setTimeout(()=>{window.location.reload()},1e3))});const Ht=r("cinematic-lighting-toggle");Ht&&Ht.addEventListener("change",()=>{const e=p("#cinematic-lighting-toggle"),t=p("#sync-cinematic-toggle"),o=r("cinematics");e.checked?j("success","Cinematic mode enabled"):j("success","Cinematic mode disabled"),t.checked?setTimeout(()=>{Je()},300):o&&(o.style.display=e.checked?"block":"none")});const Rt=r("sync-cinematic-toggle");Rt&&Rt.addEventListener("change",()=>{const e=p("#sync-cinematic-toggle"),t=p("#cinematic-lighting-toggle"),o=r("cinematics");e.checked?(j("success","Sync with YouTube enabled"),t.checked&&setTimeout(()=>{Je()},500)):(j("success","Sync with YouTube disabled"),o&&(o.style.display=t.checked?"block":"none"))}),Ho("ytd-topbar-menu-button-renderer",()=>{$o(),Bt(),setTimeout(co,3e3)}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement!==null?ce():ze()}),document.addEventListener("yt-navigate-finish",()=>{document.location.href.includes("watch")||ce(),We(),document.location.href.includes("youtube.com")&&(document.location.href.includes("youtube.com/watch")?[300,600,1200,2200,3500].forEach(e=>setTimeout(()=>{_e(),Pe(),yo()},e)):[300,700,1500,2800].forEach(e=>setTimeout(()=>{_e(),Pe()},e)))}),GM_registerMenuCommand("Update Script by: DeveloperMDCM",function(){window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js","_blank")});const jt=r("background_image"),pe=r("background-image-preview"),fe=r("remove-background-image"),qt=localStorage.getItem("backgroundImage");qt?(pe.style.backgroundImage=`url(${qt})`,pe.classList.add("has-image"),fe.style.display="flex"):(pe.style.backgroundImage="",pe.classList.remove("has-image"),fe.style.display="none"),pe.addEventListener("click",e=>{e.target!==fe&&jt.click()}),jt.addEventListener("change",e=>{const t=e.target.files[0];if(!t)return;const o=new FileReader;o.onload=function(a){const n=a.target.result;pe.style.backgroundImage=`url(${n})`,pe.classList.add("has-image"),localStorage.setItem("backgroundImage",n),fe.style.display="flex"},o.readAsDataURL(t)}),fe&&fe.dataset.ytToolsBound!=="1"&&(fe.dataset.ytToolsBound="1",fe.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),e.isTrusted!==!1&&(pe.style.backgroundImage="",pe.classList.remove("has-image"),localStorage.removeItem("backgroundImage"),fe.style.display="none")}))})();
