// ==UserScript==
// @name         YouTube: Hide Watched Videos
// @namespace    https://www.haus.gg/
// @version      6.19
// @license      MIT
// @author       Ev Haus
// @author       netjeff
// @author       actionless
// @match        http://*.youtube.com/*
// @match        http://youtube.com/*
// @match        https://*.youtube.com/*
// @match        https://youtube.com/*
// @noframes
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.getValue
// @grant        GM.setValue
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube3A20Hide20Watched20Videos.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube3A20Hide20Watched20Videos.meta.js
// ==/UserScript==
const REGEX_CHANNEL=/.*\/(user|channel|c)\/.+\/videos/u,REGEX_USER=/.*\/@.*/u;(Y=>{if(typeof trustedTypes<"u"&&trustedTypes.defaultPolicy===null){const e=s=>s;trustedTypes.createPolicy("default",{createHTML:e,createScript:e,createScriptURL:e})}const a=document.createElement("a");a.textContent="YouTube: Hide Watched Videos Settings",a.href="https://github.com/EvHaus/youtube-hide-watched",a.target="_blank";const m=new GM_config({events:{save(){this.close()}},fields:{HIDDEN_THRESHOLD_PERCENT:{default:10,label:"Hide/Dim Videos Above Percent",max:100,min:0,type:"int"}},id:"YouTubeHideWatchedVideos",title:a});localStorage.YTHWV_WATCHED=localStorage.YTHWV_WATCHED||"false";const c=(...e)=>{},u=async(e,s)=>{try{return GM_getValue(e,s)}catch{}try{return await GM.getValue(e,s)}catch{}return localStorage.getItem(e)??s},S=async(e,s)=>{try{GM_setValue(e,s);return}catch{}try{await GM.setValue(e,s);return}catch{}localStorage.setItem(e,s)};(e=>{const s=document.getElementsByTagName("head")[0];if(s){const t=document.createElement("style");return t.setAttribute("type","text/css"),t.textContent=e,s.appendChild(t),t}return null})(`
.YT-HWV-WATCHED-HIDDEN { display: none !important }

.YT-HWV-WATCHED-DIMMED { opacity: 0.3 }

.YT-HWV-SHORTS-HIDDEN { display: none !important }

.YT-HWV-SHORTS-DIMMED { opacity: 0.3 }

.YT-HWV-HIDDEN-ROW-PARENT { padding-bottom: 10px }

.YT-HWV-BUTTONS {
	background: transparent;
	border: 1px solid var(--ytd-searchbox-legacy-border-color);
    border-radius: 40px;
    display: flex;
    gap: 5px;
	margin: 0 20px;
}

.YT-HWV-BUTTON {
	align-items: center;
	background: transparent;
	border: 0;
    border-radius: 40px;
	color: #0F0F0F;
	cursor: pointer;
    display: flex;
	height: 40px;
    justify-content: center;
	outline: 0;
	width: 40px;
}

[dark] .YT-HWV-BUTTON {
	color: #F1F1F1;
}

.YT-HWV-BUTTON:focus,
.YT-HWV-BUTTON:hover {
	background: var(--yt-sys-color-baseline--overlay-button-primary);
}

.YT-HWV-BUTTON-DISABLED { opacity: 0.5 }

.YT-HWV-MENU {
	background: #F8F8F8;
	border: 1px solid #D3D3D3;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
	display: none;
	font-size: 12px;
	margin-top: -1px;
	padding: 10px;
	position: absolute;
	right: 0;
	text-align: center;
	top: 100%;
	white-space: normal;
	z-index: 9999;
}

.YT-HWV-MENU-ON { display: block; }
.YT-HWV-MENUBUTTON-ON span { transform: rotate(180deg) }
`);const D=[{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="currentColor" d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg>',iconHidden:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="currentColor" d="M24 14c5.52 0 10 4.48 10 10 0 1.29-.26 2.52-.71 3.65l5.85 5.85c3.02-2.52 5.4-5.78 6.87-9.5-3.47-8.78-12-15-22.01-15-2.8 0-5.48.5-7.97 1.4l4.32 4.31c1.13-.44 2.36-.71 3.65-.71zM4 8.55l4.56 4.56.91.91C6.17 16.6 3.56 20.03 2 24c3.46 8.78 12 15 22 15 3.1 0 6.06-.6 8.77-1.69l.85.85L39.45 44 42 41.46 6.55 6 4 8.55zM15.06 19.6l3.09 3.09c-.09.43-.15.86-.15 1.31 0 3.31 2.69 6 6 6 .45 0 .88-.06 1.3-.15l3.09 3.09C27.06 33.6 25.58 34 24 34c-5.52 0-10-4.48-10-10 0-1.58.4-3.06 1.06-4.4zm8.61-1.57 6.3 6.3L30 24c0-3.31-2.69-6-6-6l-.33.03z"/></svg>',name:"Toggle Watched Videos",stateKey:"YTHWV_STATE",type:"toggle"},{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="currentColor" d="M31.95 3c-1.11 0-2.25.3-3.27.93l-15.93 9.45C10.32 14.79 8.88 17.67 9 20.7c.15 3 1.74 5.61 4.17 6.84.06.03 2.25 1.05 2.25 1.05l-2.7 1.59c-3.42 2.04-4.74 6.81-2.94 10.65C11.07 43.47 13.5 45 16.05 45c1.11 0 2.22-.3 3.27-.93l15.93-9.45c2.4-1.44 3.87-4.29 3.72-7.35-.12-2.97-1.74-5.61-4.17-6.81-.06-.03-2.25-1.05-2.25-1.05l2.7-1.59c3.42-2.04 4.74-6.81 2.91-10.65C36.93 4.53 34.47 3 31.95 3z"/></svg>',iconHidden:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="currentColor"><g clip-path="url(#slashGap)"><path d="M31.97 3c-1.11 0-2.25.3-3.27.93l-15.93 9.45c-2.43 1.41-3.87 4.29-3.75 7.32.15 3 1.74 5.61 4.17 6.84.06.03 2.25 1.05 2.25 1.05l-2.7 1.59C9.32 32.22 8 36.99 9.8 40.83c1.29 2.64 3.72 4.17 6.27 4.17 1.11 0 2.22-.3 3.27-.93l15.93-9.45c2.4-1.44 3.87-4.29 3.72-7.35-.12-2.97-1.74-5.61-4.17-6.81-.06-.03-2.25-1.05-2.25-1.05l2.7-1.59c3.42-2.04 4.74-6.81 2.91-10.65C36.95 4.53 34.49 3 31.97 3z"/></g><path d="m7.501 5.55 4.066-2.42 24.26 40.78-4.065 2.418z"/></g></svg>',name:"Toggle Shorts",stateKey:"YTHWV_STATE_SHORTS",type:"toggle"},{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M12 9.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"/></svg>',name:"Settings",type:"settings"}],W=function(e,s,t){let r;return(...n)=>{const o=()=>{r=null,t||e.apply(this,n)},l=t&&!r;clearTimeout(r),r=setTimeout(o,s),l&&e.apply(this,n)}},v=()=>{const e=document.querySelectorAll([".ytd-thumbnail-overlay-resume-playback-renderer",".ytThumbnailOverlayProgressBarHostWatchedProgressBarSegment",".ytThumbnailOverlayProgressBarHostWatchedProgressBarSegmentModern"].join(",")),s=Array.from(e).filter(t=>t.style.width&&Number.parseInt(t.style.width,10)>=m.get("HIDDEN_THRESHOLD_PERCENT"));return c(`Found ${e.length} watched elements (${s.length} within threshold)`),s},b=()=>{const e=[document.querySelectorAll("[is-shorts]"),document.querySelectorAll("ytd-reel-shelf-renderer ytd-reel-item-renderer"),document.querySelectorAll("ytd-rich-shelf-renderer ytd-rich-grid-slim-media"),document.querySelectorAll("ytd-reel-shelf-renderer ytd-thumbnail"),document.querySelectorAll("ytd-reel-shelf-renderer .ytd-reel-shelf-renderer"),document.querySelectorAll("ytm-shorts-lockup-view-model-v2")].reduce((s,t)=>(t?.forEach(r=>{const n=r.closest("ytd-reel-shelf-renderer")||r.closest("ytd-rich-shelf-renderer")||r.closest("grid-shelf-view-model");n&&!s.includes(n)&&s.push(n)}),s),[]);return document.querySelectorAll('.ytd-thumbnail-overlay-time-status-renderer[aria-label="Shorts"]').forEach(s=>{const t=s.closest("ytd-video-renderer");t&&e.push(t)}),c(`Found ${e.length} shorts container elements`),e},V=()=>document.querySelector("#container #end #buttons"),h=()=>{const{href:e}=window.location;let s="misc";return e.includes("/watch?")?s="watch":e.match(REGEX_CHANNEL)||e.match(REGEX_USER)?s="channel":e.includes("/feed/subscriptions")?s="subscriptions":e.includes("/feed/trending")?s="trending":e.includes("/playlist?")?s="playlist":e.includes("/results?")?s="search":e.includes("/hashtag/")&&(s="hashtag"),s},f=async()=>{try{if(document.querySelectorAll(".YT-HWV-WATCHED-DIMMED").forEach(t=>{t.classList.remove("YT-HWV-WATCHED-DIMMED")}),document.querySelectorAll(".YT-HWV-WATCHED-HIDDEN").forEach(t=>{t.classList.remove("YT-HWV-WATCHED-HIDDEN")}),window.location.href.indexOf("/feed/history")>=0)return;const e=h(),s=await u(`YTHWV_STATE_${e}`);v().forEach((t,r)=>{let n,o;if(e==="subscriptions")n=t.closest(".ytd-grid-renderer")||t.closest(".ytd-item-section-renderer")||t.closest(".ytd-rich-grid-row")||t.closest(".ytd-rich-grid-renderer")||t.closest("#grid-container"),n?.classList.contains("ytd-item-section-renderer")&&n.closest("ytd-item-section-renderer").classList.add("YT-HWV-HIDDEN-ROW-PARENT");else if(e==="playlist")n=t.closest("ytd-playlist-video-renderer")||t.closest("yt-lockup-view-model");else if(e==="watch"){n=t.closest("ytd-compact-video-renderer")||t.closest("yt-lockup-view-model"),n?.closest("ytd-compact-autoplay-renderer")&&(n=null);const l=t.closest("ytd-playlist-panel-video-renderer");!n&&l&&(o=l)}else n=t.closest("ytd-rich-item-renderer")||t.closest("ytd-video-renderer")||t.closest("ytd-grid-video-renderer");n&&(s==="dimmed"?n.classList.add("YT-HWV-WATCHED-DIMMED"):s==="hidden"&&n.classList.add("YT-HWV-WATCHED-HIDDEN")),o&&(s==="dimmed"||s==="hidden")&&o.classList.add("YT-HWV-WATCHED-DIMMED")})}catch(e){console.error("[YT-HWV]",e)}},H=async()=>{try{const e=h();document.querySelectorAll(".YT-HWV-SHORTS-DIMMED").forEach(r=>{r.classList.remove("YT-HWV-SHORTS-DIMMED")}),document.querySelectorAll(".YT-HWV-SHORTS-HIDDEN").forEach(r=>{r.classList.remove("YT-HWV-SHORTS-HIDDEN")});const s=await u(`YTHWV_STATE_SHORTS_${e}`);b().forEach(r=>{s==="dimmed"?r.classList.add("YT-HWV-SHORTS-DIMMED"):s==="hidden"&&r.classList.add("YT-HWV-SHORTS-HIDDEN")})}catch(e){console.error("[YT-HWV]",e)}},T=async()=>{const e=V();if(!e)return;const s=document.querySelector(".YT-HWV-BUTTONS"),t=document.createElement("div");t.classList.add("YT-HWV-BUTTONS");for(const{icon:r,iconHidden:n,name:o,stateKey:l,type:w}of D){const E=h(),g=l?[l,E].join("_"):null,d=g?await u(g,"normal"):"normal",i=document.createElement("button");switch(i.title=w==="toggle"?`${o} : currently "${d}" for section "${E}"`:`${o}`,i.classList.add("YT-HWV-BUTTON"),d!=="normal"&&i.classList.add("YT-HWV-BUTTON-DISABLED"),i.innerHTML=d==="hidden"?n:r,t.appendChild(i),w){case"toggle":i.addEventListener("click",async()=>{c(`Button ${o} clicked. State: ${d}`);let p="dimmed";d==="dimmed"?p="hidden":d==="hidden"&&(p="normal"),await S(g,p),await f(),await H(),await T()});break;case"settings":i.addEventListener("click",async()=>{m.open(),await T()});break}}s?(e.parentNode.replaceChild(t,s),c("Re-rendered menu buttons")):(e.parentNode.insertBefore(t,e),c("Rendered menu buttons"))},y=W(async e=>{e&&e.length===1&&(e[0].target.classList.contains("YT-HWV-BUTTON")||e[0].target.classList.contains("YT-HWV-BUTTON-SHORTS"))||(c("Running check for watched videos, and shorts"),await f(),await H(),await T())},250),N=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){this.addEventListener("readystatechange",function(){this.responseURL.indexOf("browse_ajax?action_continuation")>0&&setTimeout(()=>{y()},0)},!1),N.call(this,e)};const M=(()=>{const e=window.MutationObserver||window.WebKitMutationObserver,s=window.addEventListener;return(t,r)=>{c("Attaching DOM listener"),t&&(e?new e((o,l)=>{o.length===1&&o[0].addedNodes?.length===1&&o[0].addedNodes[0]?.classList?.contains("YT-HWV-BUTTONS")||(o[0].addedNodes.length||o[0].removedNodes.length)&&r(o)}).observe(t,{childList:!0,subtree:!0}):s&&(t.addEventListener("DOMNodeInserted",r,!1),t.addEventListener("DOMNodeRemoved",r,!1)))}})();c("Starting Script"),M(document.body,y),y()})();
