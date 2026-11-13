// ==UserScript==
// @name            YouTube downloader
// @icon            https://raw.githubusercontent.com/madkarmaa/youtube-downloader/main/images/icon.png
// @namespace       aGkgdGhlcmUgOik=
// @source          https://github.com/madkarmaa/youtube-downloader
// @supportURL      https://github.com/madkarmaa/youtube-downloader
// @version         3.4.0
// @author          mk_
// @match           *://*.youtube.com/*
// @connect         api.cobalt.tools
// @connect         raw.githubusercontent.com
// @grant           GM_info
// @grant           GM_addStyle
// @grant           GM_xmlHttpRequest
// @grant           GM_xmlhttpRequest
// @run-at          document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20downloader.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20downloader.meta.js
// ==/UserScript==
(async()=>{"use strict";if(!x()||window!==window.parent)return;let l=localStorage.getItem("ytdl-advanced-settings")?JSON.parse(localStorage.getItem("ytdl-advanced-settings")):{enabled:!1,openUrl:""};localStorage.setItem("ytdl-advanced-settings",JSON.stringify(l));let g=String(localStorage.getItem("ytdl-dev-mode")).toLowerCase()==="true",C=localStorage.getItem("ytdl-notif-enabled")===null?!0:String(localStorage.getItem("ytdl-notif-enabled")).toLowerCase()==="true",V=console.log,J=console.warn,Y=console.error,w={video_duration:null,video_url:null,video_author:null,video_title:null,video_id:null},k=!1;const B={MAX:"max","2160p":"2160","1440p":"1440","1080p":"1080","720p":"720","480p":"480","360p":"360","240p":"240","144p":"144"};function n(e,...t){g&&e.toLowerCase()==="info"?V.apply(console,["%c[YTDL]","color: #f00;",...t]):g&&e.toLowerCase()==="warn"?J.apply(console,["%c[YTDL]","color: #f00;",...t]):e.toLowerCase()==="error"&&Y.apply(console,["%c[YTDL]","color: #f00;",...t])}function U(e,t=!1){return new Promise((o,i)=>{GM_xmlhttpRequest({method:"POST",url:"https://api.cobalt.tools/api/json",headers:{"Cache-Control":"no-cache",Accept:"application/json","Content-Type":"application/json"},data:JSON.stringify({url:encodeURI(e),vQuality:localStorage.getItem("ytdl-quality")??"max",filenamePattern:"basic",isAudioOnly:t,disableMetadata:!0}),onload:d=>{const a=JSON.parse(d.responseText);a?.url?o(a.url):i(a)},onerror:d=>i(d)})})}function q(e){return new Promise(t=>{if(document.querySelector(e))return t(document.querySelector(e));const o=new MutationObserver(()=>{document.querySelector(e)&&(o.disconnect(),t(document.querySelector(e)))});o.observe(document.body,{childList:!0,subtree:!0})})}function W(){return new Promise((e,t)=>{GM_xmlhttpRequest({method:"GET",url:"https://raw.githubusercontent.com/madkarmaa/youtube-downloader/main/notifications.json",headers:{"Cache-Control":"no-cache",Accept:"application/json","Content-Type":"application/json"},onload:o=>{const i=JSON.parse(o.responseText);i?.length?e(i):t(i)},onerror:o=>t(o)})})}class v{constructor(t,o,i,d=!0){const a=document.createElement("div");a.classList.add("ytdl-notification","opened",i),D(a,"closeNotif",!0);const s=document.createElement("h2");s.textContent=t,a.appendChild(s);const u=document.createElement("div");o.split(`
`).forEach(c=>{const y=document.createElement("p");y.textContent=c,u.appendChild(y)}),a.appendChild(u);const p=document.createElement("button");p.textContent="Dismiss",p.addEventListener("click",()=>{if(d){const c=JSON.parse(localStorage.getItem("ytdl-notifications")??"[]");c.push(i),localStorage.setItem("ytdl-notifications",JSON.stringify(c)),n("info",`Notification ${i} set as read`)}a.classList.remove("opened"),a.classList.add("closed")}),a.appendChild(p),document.body.appendChild(a),n("info","New notification displayed",a)}}async function z(){if(!C){n("info","Notifications disabled by the user");return}const e=JSON.parse(localStorage.getItem("ytdl-notifications"))??[];n("info",`Local read notifications hashes

`,e);const t=await W();n("info",`Online notifications hashes

`,t.map(i=>i.uuid));const o=t.filter(i=>!e.includes(i.uuid));n("info",`Unread notifications hashes

`,o.map(i=>i.uuid)),o.reverse().forEach(i=>{new v(i.title,i.body,i.uuid)})}async function H(e){k=!1;const t=e.detail?.getVideoData();w.video_duration=e.detail?.getDuration(),w.video_url=e.detail?.getVideoUrl(),w.video_author=t?.author,w.video_title=t?.title,w.video_id=t?.video_id,k=!0,n("info",`Video data updated

`,w)}async function P(...e){document.addEventListener("yt-player-updated",t=>{for(let o=0;o<e.length;o++)e[o](t)}),n("info",`Video player event hooked. Callbacks:

`,e.map(t=>t.name))}async function $(...e){["yt-navigate","yt-navigate-finish","yt-navigate-finish","yt-page-data-updated"].forEach(t=>{document.addEventListener(t,o=>{for(let i=0;i<e.length;i++)e[i](o)})}),n("info",`Navigation events hooked. Callbacks:

`,e.map(t=>t.name))}function D(e,t,o=!1){e.addEventListener("animationend",i=>{i.animationName===t&&(o?i.target.remove():i.target.style.display="none")})}function j(){const e=document.activeElement;return e&&(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"||String(e.getAttribute("contenteditable")).toLowerCase()==="true")}function _(e){return e.replace(/{{\s*([^}\s]+)\s*}}/g,(t,o)=>w[o]||t)}async function G(){const e=document.createElement("div");e.id="ytdl-sideMenu",e.classList.add("closed"),e.style.display="none",D(e,"closeMenu");const t=document.createElement("h2");t.textContent="Youtube downloader settings",t.classList.add("header"),e.appendChild(t);const o=document.createElement("div");o.classList.add("setting-row");const i=document.createElement("h3");i.classList.add("setting-label");const d=document.createElement("p");d.classList.add("setting-description"),o.append(i,d);const a=document.createElement("span");a.classList.add("ytdl-switch");const s=document.createElement("input");s.type="checkbox";const u=document.createElement("label");a.append(s,u);const p=o.cloneNode(!0);p.querySelector(".setting-label").textContent="Notifications",p.querySelector(".setting-description").textContent="Disable if you don't want to receive notifications from the developer.";const c=a.cloneNode(!0);c.querySelector("input").checked=C,c.querySelector("input").id="ytdl-notif-switch",c.querySelector("label").setAttribute("for","ytdl-notif-switch"),c.querySelector("input").addEventListener("change",r=>{C=r.target.checked,localStorage.setItem("ytdl-notif-enabled",C),n("info",`Notifications ${C?"enabled":"disabled"}`)}),p.appendChild(c),e.appendChild(p);const y=o.cloneNode(!0);y.querySelector(".setting-label").textContent="Video download quality",y.querySelector(".setting-description").textContent="Control the resolution of the downloaded videos. Not all the resolutions are supported by some videos.";const f=document.createElement("select");f.name="dl-quality",f.id="ytdl-dl-quality-select",f.disabled=l.enabled,Object.entries(B).forEach(([r,Q])=>{const T=document.createElement("option");T.textContent=r,T.value=Q,f.appendChild(T)}),f.value=localStorage.getItem("ytdl-quality")??"max",f.addEventListener("change",r=>{localStorage.setItem("ytdl-quality",String(r.target.value)),n("info",`Download quality set to ${r.target.value}`)}),y.appendChild(f),e.appendChild(y);const m=o.cloneNode(!0);m.querySelector(".setting-label").textContent="Developer mode",m.querySelector(".setting-description").textContent="Show a detailed output of what's happening under the hood in the console.";const h=a.cloneNode(!0);h.querySelector("input").checked=g,h.querySelector("input").id="ytdl-dev-mode-switch",h.querySelector("label").setAttribute("for","ytdl-dev-mode-switch"),h.querySelector("input").addEventListener("change",r=>{g=r.target.checked,localStorage.setItem("ytdl-dev-mode",g),console.log(`\x1B[31m[YTDL]\x1B[0m Developer mode ${g?"enabled":"disabled"}`)}),m.appendChild(h),e.appendChild(m);const L=o.cloneNode(!0);L.querySelector(".setting-label").textContent="Advanced settings",L.querySelector(".setting-description").textContent="FOR EXPERIENCED USERS ONLY. Modify the behaviour of the download button.";const b=document.createElement("div");b.classList.add("advanced-options",l.enabled?"opened":"closed"),b.style.display=l.enabled?"flex":"none",D(b,"closeNotif");const E=a.cloneNode(!0);E.querySelector("input").checked=l.enabled,E.querySelector("input").id="ytdl-advanced-switch",E.querySelector("label").setAttribute("for","ytdl-advanced-switch"),E.querySelector("input").addEventListener("change",r=>{l.enabled=r.target.checked,localStorage.setItem("ytdl-advanced-settings",JSON.stringify(l)),f.disabled=r.target.checked,r.target.checked?(b.style.display="flex",b.classList.remove("closed"),b.classList.add("opened")):(b.classList.remove("opened"),b.classList.add("closed")),n("info",`Advanced settings ${l.enabled?"enabled":"disabled"}`)}),L.appendChild(E);const N=document.createElement("label");N.setAttribute("for","advanced-settings-open-url"),N.textContent="Open the given URL in a new window. GET request only.";const M=document.createElement("a");M.href="https://github.com/madkarmaa/youtube-downloader/blob/main/docs/PLACEHOLDERS.md",M.target="_blank",M.textContent="Use placeholders to access video data. Click to know about placeholders",N.appendChild(M);const S=document.createElement("input");S.id="advanced-settings-open-url",S.type="url",S.placeholder="URL to open",S.value=l.openUrl??null,S.addEventListener("focusout",r=>{r.target.checkValidity()?(l.openUrl=r.target.value,localStorage.setItem("ytdl-advanced-settings",JSON.stringify(l)),n("info",`Advanced settings: URL to open set to "${r.target.value}"`)):(n("error",`Invalid URL to open: "${r.target.value}"`),alert(r.target.validationMessage),r.target.value="")}),b.append(N,S),L.appendChild(b),e.appendChild(L),document.addEventListener("mousedown",r=>{e.style.display!=="none"&&!e.contains(r.target)&&(e.classList.remove("opened"),e.classList.add("closed"),n("info","Side menu closed"))}),document.addEventListener("keydown",r=>{r.key==="p"&&(j()||(e.style.display==="none"?(e.style.top=window.scrollY+"px",e.style.display="flex",e.classList.remove("closed"),e.classList.add("opened"),n("info","Side menu opened")):(e.classList.remove("opened"),e.classList.add("closed"),n("info","Side menu closed"))))}),window.addEventListener("scroll",()=>{e.classList.contains("closed")||(e.classList.remove("opened"),e.classList.add("closed"),n("info","Side menu closed"))}),document.body.appendChild(e),n("info",`Side menu created

`,e)}function x(){return window.location.hostname==="www.youtube.com"&&window.location.pathname.startsWith("/shorts")?"SHORTS":window.location.hostname==="www.youtube.com"&&window.location.pathname.startsWith("/watch")?"WATCH":window.location.hostname==="music.youtube.com"?"MUSIC":window.location.hostname==="www.youtube.com"?"YOUTUBE":null}function O(e,t){return e.contains(t)}async function I(){const e=x()==="MUSIC";if(!e&&!k){n("warn","Video data not ready"),new v("Wait!","The video data is not ready yet, try again in a few seconds.","popup",!1);return}else if(e&&!window.location.pathname.startsWith("/watch")){n("warn","Video URL not avaiable"),new v("Wait!","Open the music player so the song link is visible, then try again.","popup",!1);return}try{n("info","Download started"),l.enabled?l.openUrl&&window.open(_(l.openUrl)):window.open(await U(e?window.location.href.replace("music.youtube.com","www.youtube.com"):w.video_url),"_blank"),n("info","Download completed")}catch(t){n("error",JSON.parse(JSON.stringify(t))),new v("Error",JSON.stringify(t),"error",!1)}}async function A(e){const t=x()==="MUSIC";if(e.preventDefault(),!t&&!k)return n("warn","Video data not ready"),new v("Wait!","The video data is not ready yet, try again in a few seconds.","popup",!1),!1;if(t&&!window.location.pathname.startsWith("/watch")){n("warn","Video URL not avaiable"),new v("Wait!","Open the music player so the song link is visible, then try again.","popup",!1);return}try{n("info","Download started"),l.enabled?l.openUrl&&window.open(_(l.openUrl)):window.open(await U(t?window.location.href.replace("music.youtube.com","www.youtube.com"):w.video_url,!0),"_blank"),n("info","Download completed")}catch(o){n("error",JSON.parse(JSON.stringify(o))),new v("Error",JSON.stringify(o),"error",!1)}return!1}function F(e,t=!1){const{top:o,left:i,bottom:d,right:a}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:u}=window;return t?(o>0&&o<s||d>0&&d<s)&&(i>0&&i<u||a>0&&a<u):o>=0&&i>=0&&d<=s&&a<=u}async function R(e){const t="#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls",o="#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.middle-controls-buttons.style-scope.ytmusic-player-bar",i="#actions.style-scope.ytd-reel-player-overlay-renderer",d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("xmlns","http://www.w3.org/2000/svg"),d.setAttribute("fill","currentColor"),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("width","24"),d.setAttribute("focusable","false"),d.style.pointerEvents="none",d.style.display="block",d.style.width="100%",d.style.height="100%";const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"),d.appendChild(a);const s=document.createElement("button");switch(s.id="ytdl-download-button",s.classList.add("ytp-button"),s.title="Left click to download as video, right click as audio only",s.appendChild(d),x()){case"WATCH":const u=await q(t);if(n("info",`Download button container found

`,u),O(u,u.querySelector("#ytdl-download-button"))){n("warn","Download button already in container");break}const p=s.cloneNode(!0);p.classList.add("YT"),p.addEventListener("click",I),p.addEventListener("contextmenu",A),n("info",`Download button created

`,p),u.insertBefore(p,u.firstChild),n("info","Download button inserted in container");break;case"MUSIC":const c=await q(o);if(n("info",`Download button container found

`,c),O(c,c.querySelector("#ytdl-download-button"))){n("warn","Download button already in container");break}const y=s.cloneNode(!0);y.classList.add("YTM"),y.addEventListener("click",I),y.addEventListener("contextmenu",A),n("info",`Download button created

`,y),c.insertBefore(y,c.firstChild),n("info","Download button inserted in container");break;case"SHORTS":if(e.type!=="yt-navigate-finish")return;await q(i);const f=Array.from(document.querySelectorAll(i)).filter(m=>F(m));n("info",`Download button containers found

`,f),f.forEach(m=>{if(O(m,m.querySelector("#ytdl-download-button"))){n("warn","Download button already in container");return}const h=s.cloneNode(!0);h.classList.add("YTS","yt-spec-button-shape-next","yt-spec-button-shape-next--tonal","yt-spec-button-shape-next--mono","yt-spec-button-shape-next--size-l","yt-spec-button-shape-next--icon-button"),h.addEventListener("click",I),h.addEventListener("contextmenu",A),n("info",`Download button created

`,h),m.insertBefore(h,m.firstChild),n("info","Download button inserted in container")});break;default:return}}async function X(){g&&n("info","Current service is: "+x())}GM_addStyle(`
#ytdl-sideMenu {
    min-height: 100vh;
    z-index: 9998;
    position: absolute;
    top: 0;
    left: -100vw;
    width: 50vw;
    background-color: var(--yt-spec-base-background);
    border-right: 2px solid var(--yt-spec-static-grey);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 2.5rem;
    font-family: "Roboto", "Arial", sans-serif;
}

#ytdl-sideMenu.opened {
    animation: openMenu .3s linear forwards;
}

#ytdl-sideMenu.closed {
    animation: closeMenu .3s linear forwards;
}

#ytdl-sideMenu a {
    color: var(--yt-brand-youtube-red);
    text-decoration: none;
    font-weight: 600;
}

#ytdl-sideMenu a:hover {
    text-decoration: underline;
}

#ytdl-sideMenu label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.4rem;
    color: var(--yt-spec-text-primary);
}

#ytdl-sideMenu .header {
    text-align: center;
    font-size: 2.5rem;
    color: var(--yt-brand-youtube-red);
}

#ytdl-sideMenu .setting-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 0.2s ease-in-out;
}

#ytdl-sideMenu .setting-label {
    font-size: 1.8rem;
    color: var(--yt-brand-youtube-red);
}

#ytdl-sideMenu .setting-description {
    font-size: 1.4rem;
    color: var(--yt-spec-text-primary);
}

.ytdl-switch {
    display: inline-block;
}

.ytdl-switch input {
    display: none;
}

.ytdl-switch label {
    display: block;
    width: 50px;
    height: 19.5px;
    padding: 3px;
    border-radius: 15px;
    border: 2px solid var(--yt-brand-medium-red);
    cursor: pointer;
    transition: 0.3s;
}

.ytdl-switch label::after {
    content: "";
    display: inherit;
    width: 20px;
    height: 20px;
    border-radius: 12px;
    background: var(--yt-brand-medium-red);
    transition: 0.3s;
}

.ytdl-switch input:checked ~ label {
    border-color: var(--yt-spec-light-green);
}

.ytdl-switch input:checked ~ label::after {
    translate: 30px 0;
    background: var(--yt-spec-light-green);
}

.ytdl-switch input:disabled ~ label {
    opacity: 0.5;
    cursor: not-allowed;
}

#ytdl-sideMenu .advanced-options {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin: 1rem 0;
}

#ytdl-sideMenu .advanced-options.opened {
    animation: openNotif 0.3s linear forwards;
}
#ytdl-sideMenu .advanced-options.closed {
    animation: closeNotif .3s linear forwards;
}

#ytdl-sideMenu input[type="url"] {
    background: none;
    padding: 0.7rem 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid var(--yt-spec-red-70);
    color: var(--yt-spec-text-primary);
    font-family: monospace;
    transition: border-bottom-color 0.2s ease-in-out;
}

#ytdl-sideMenu input[type="url"]:focus {
    border-bottom-color: var(--yt-brand-youtube-red);
}

.ytdl-notification {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color: var(--yt-spec-base-background);
    border: 2px solid var(--yt-spec-static-grey);
    border-radius: 8px;
    color: var(--yt-spec-text-primary);
    z-index: 9999;
    padding: 1.5rem 1.6rem;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 1.4rem;
    width: fit-content;
    height: fit-content;
    max-width: 40vw;
    max-height: 50vh;
    word-wrap: break-word;
    line-height: var(--yt-caption-line-height);
}

.ytdl-notification.opened {
    animation: openNotif 0.3s linear forwards;
}

.ytdl-notification.closed {
    animation: closeNotif 0.3s linear forwards;
}

.ytdl-notification h2 {
    color: var(--yt-brand-youtube-red);
}

.ytdl-notification > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.ytdl-notification > button {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: 2px solid var(--yt-spec-static-grey);
    border-radius: 8px;
    background-color: var(--yt-brand-medium-red);
    padding: 0.7rem 0.8rem;
    color: #fff;
    font-weight: 600;
}

.ytdl-notification button:hover {
    background-color: var(--yt-spec-red-70);
}

#ytdl-download-button {
    background: none;
    border: none;
    outline: none;
    color: var(--yt-spec-text-primary);
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

#ytdl-download-button:hover {
    color: var(--yt-brand-youtube-red);
}

#ytdl-download-button.YTM {
    transform: scale(1.5);
    margin: 0 1rem;
}

#ytdl-download-button > svg {
    transform: translateX(3.35%);
}

#ytdl-dl-quality-select {
    background-color: var(--yt-spec-base-background);
    color: var(--yt-spec-text-primary);
    padding: 0.7rem 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid var(--yt-spec-red-70);
    border-left: 2px solid var(--yt-spec-red-70);
    transition: all 0.2s ease-in-out;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 1.4rem;
}

#ytdl-dl-quality-select:focus {
    border-bottom-color: var(--yt-brand-youtube-red);
    border-left-color: var(--yt-brand-youtube-red);
}

#ytdl-sideMenu > div:has(> #ytdl-dl-quality-select:disabled) {
    filter: grayscale(0.8);
}

#ytdl-dl-quality-select:disabled {
    cursor: not-allowed;
}

@keyframes openMenu {
    0% {
        left: -100vw;
    }

    100% {
        left: 0;
    }
}

@keyframes closeMenu {
    0% {
        left: 0;
    }

    100% {
        left: -100vw;
    }
}

@keyframes openNotif {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes closeNotif {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
`),n("info","Custom styles added"),P(H),$(R,X),window.addEventListener("DOMContentLoaded",()=>{G(),R(),z()})})();
