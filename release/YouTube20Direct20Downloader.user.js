// ==UserScript==
// @name                YouTube Direct Downloader
// @version             5.4
// @author              FawayTT
// @namespace           FawayTT
// @supportURL          https://github.com/FawayTT/userscripts/issues
// @icon                https://github.com/FawayTT/userscripts/blob/main/ydd-icon.png?raw=true
// @match               *://*.youtube.com/*
// @match               *://*.yt5s.in/*
// @match               *://*.cobalt.meowing.de/*
// @match               *://*.5smp3.com/*
// @match               *://*.yt1s.biz/*
// @match               *://*.ytmp3.tld/*
// @match               *://*.yt2mp3.tld/*
// @connect             cobalt-api.kwiatekmiki.com
// @require             https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_deleteValue
// @grant               GM_registerMenuCommand
// @grant               GM_openInTab
// @grant               GM_xmlhttpRequest
// @license             MIT
// @run-at              document-end
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20Direct20Downloader.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20Direct20Downloader.meta.js
// ==/UserScript==
const gmcCSS=`
 #YDD_config {
  background-color: rgba(0, 0, 0, 0.8) !important;
  backdrop-filter: blur(10px);
  color: #fff !important;
  border-radius: 30px !important;
  padding: 20px !important;
  height: fit-content !important;
  max-width: 700px !important;
  font-family: Arial, sans-serif !important;
  z-index: 9999999 !important;
  padding-bottom: 0px !important;
  width: 100% !important;
}

#YDD_config_header {
  background-color: #ff000052 !important;
  border-radius: 10px;
  padding: 10px !important;
  text-align: center !important;
  font-size: 24px !important;
  color: blob !important;
  font-weight: 600 !important;
}

.section_header_holder {
  font-weight: 600;
  margin-top: 10px !important;
}

#YDD_config_buttons_holder {
  text-align: center;
  margin-top: 20px;
}

#YDD_config_resetLink {
  color: #fff !important;
}

.config_var {
  margin: 0px !important;
  line-height: 3;
}

#YDD_config_buttons_holder button {
  background-color: #ff000052 !important;
  color: #fff;
  border: none;
  font-weight: 600;
  padding: 10px 20px !important;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.1s ease-in;
}

#YDD_config_buttons_holder button:hover {
  background-color: #ff0000 !important;
}

#YDD_config_fieldset {
  border: 1px solid #444;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

#YDD_config_fieldset legend {
  color: #ff0000;
}

 #YDD_config .section_header {
  background: none !important;
  width: fit-content;
  margin: 5px 0px !important;
  border: none !important;
  font-size: 18px !important;
  color: #ff0000 !important;
}

 #YDD_config input, select, textarea {
  cursor: pointer;
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 5px;
  margin: 5px 0 !important;
}

 #YDD_config ::selection {
  color: white;
  background: #ff0000;
}

 #YDD_config input, select, textarea {
  transition: all 0.1s ease-in;
}

 #YDD_config input:focus, select:focus, textarea:focus {
  border-color: #ff0000;
}

 #YDD_config input:hover, select:hover, textarea:hover {
  opacity: 0.8;
}

 #YDD_config label {
  color: #fff;
}

#YDD_config_buttons_holder {
  position: relative;
  margin-top: 0px !important;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.reset_holder {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  padding: 10px;
}

input[type='checkbox'] {
  appearance: none;
  position: absolute;
  width: 20px;
  transform: translateY(3px);
  height: 20px;
  border: 1px solid #555;
  border-radius: 10px;
  background-color: #333;
  cursor: pointer;
}

input[type='checkbox']:before {
  content: " ";
}

input[type='checkbox']:checked {
  background-color: #d50707;
}

input[type='checkbox']:checked::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 2px;
  width: 12px;
  height: 6px;
  border-bottom: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  transform: rotate(-45deg);
}

#YDD_config_downloadService_var:after {
  content: "\u25B2 Use cobalt_api for direct download (hosted by third party and can easily run out of bandwidth).";
  display: block;
  font-family: arial, tahoma, myriad pro, sans-serif;
  font-size: 10px;
  font-weight: bold;
  margin-right: 6px;
  opacity: 0.7;
}

#YDD_config_vCodec_var:after {
  content: "\u25B2 H264 [MP4] = best compatibility. VP9 [WEBM] = better quality. AV1 = best quality but is used only by few videos.";
  display: block;
  font-family: arial, tahoma, myriad pro, sans-serif;
  font-size: 10px;
  font-weight: bold;
  margin-right: 6px;
  opacity: 0.7;
}

#YDD_config_backupService_var:after {
  content: "\u25B2 Available via right click or used automatically when direct download is not working.";
  display: block;
  font-family: arial, tahoma, myriad pro, sans-serif;
  font-size: 10px;
  font-weight: bold;
  margin-right: 6px;
  opacity: 0.7;
}
`,yddCSS=`
#experiment-overlay {
  overflow: visible !important;
}

#ydd-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  margin-left: 8px;
  box-shadow: 1px 0px 7px -4px rgba(0, 0, 0, 0.8);
}

#ydd-download {
  position: relative;
  z-index: 10;
  cursor: pointer;
  font-size: 2rem;
  padding: 8px 12px;
  border: none;
  border-radius: 15px;
  line-height: 2rem;
  font-weight: 500;
  color: #0f0f0f;
  background-color: #f1f1f1;
  font-family: "Roboto","Arial",sans-serif;
  align-items: center;
  text-transform: capitalize;
}

#ydd-download:hover {
  filter: brightness(90%);
}

#ydd-options {
  line-height: 2rem;
  font-weight: 500;
  color: var(--yt-spec-text-primary);
  margin: 0px 5px;
  cursor: pointer;
  font-family: "Roboto","Arial",sans-serif;
  transition: all 0.1s ease-in;
}

#ydd-options:hover {
  scale: 1.4;
}

#ydd-options-div {
  transition: transform 0.3s ease, opacity 0.1s ease;
  position: absolute;
  top: 0px;
  transform: translateY(-70%);
  right: -24px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  margin-right: 8px;
  margin-top: 6px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  z-index: 9999999;
  font-family: "Roboto","Arial",sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2rem;
  color: black;
  align-items: start;
  white-space: nowrap;
}

#ydd-options-div > * {
  margin: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in;
}

#ydd-options-div > *:hover {
  scale: 1.1;
}

@keyframes scaleIn {
  0% {
    transform: scale(0.8) translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(-10%);
    opacity: 1;
  }
}

@keyframes scaleOut {
  0% {
    transform: scale(1) translateY(-10%);
    opacity: 1;
  }
  100% {
    transform: scale(0.8) translateY(-20%);
    opacity: 0;
  }
}

.ydd-scale-up {
  animation: scaleIn 0.3s forwards;
}

.ydd-scale-down {
  animation: scaleOut 0.3s forwards;
}
`;console.log("Running YDD");const defaults={downloadService:"yt5s",backupService:"yt1s",quality:"max",vCodec:"av1",aFormat:"mp3",filenamePattern:"basic",isAudioMuted:!1,disableMetadata:!1,redirectShorts:!1,showCobaltError:!1},downloadServices={yt5s:{title:"YT5S",download:e=>{GM_setValue("yt5sUrl",document.location.href),e?extraDownloadServices["5smp3"].download():window.open("https://yt5s.in/")},checkPage:()=>{if(checkUrl("yt5s.in")){const e=GM_getValue("yt5sUrl");if(e){const t=document.querySelector("#txt-url"),o=document.querySelector("#btn-submit");!t||!o?retry():(GM_deleteValue("yt5sUrl"),yddAdded=!0,setInput(t,e),o.click())}return!0}return extraDownloadServices["5smp3"].checkPage()}},ytmp3:{title:"YTMP3",download:e=>{GM_setValue("ytmp3Url",document.location.href),GM_setValue("ytmp3AudioOnly",e),window.open("https://ytmp3.ai/")},checkPage:()=>{if(checkUrl("ytmp3")||checkUrl("yt2mp3")){const e=GM_getValue("ytmp3Url"),t=GM_getValue("ytmp3AudioOnly");if(e){const o=document.querySelector('input[id="v"]')||document.querySelector('input[id="video"]'),n=document.querySelector("button[type='submit']");if(!o||!n)retry();else{GM_deleteValue("ytmp3Url"),GM_deleteValue("ytmp3AudioOnly"),yddAdded=!0,setInput(o,e);const r=[...document.querySelectorAll("button")].find(c=>c.textContent.includes(t?"MP3":"MP4"));r&&r.click(),n.click();const i=new MutationObserver(function(){if(![...document.querySelectorAll("div")].some(l=>l.textContent.includes("completed")))return;const a=[...document.querySelectorAll("button")].find(l=>l.textContent.includes("Download"));a&&(a.click(),i.disconnect())});i.observe(document.body,{childList:!0,subtree:!0})}}return!0}return!1}},yt1s:{title:"YT1S",download:e=>{GM_setValue("yt1sUrl",document.location.href),e?extraDownloadServices["5smp3"].download():window.open("https://yt1s.biz/")},checkPage:()=>{if(checkUrl("yt1s.biz")){const e=GM_getValue("yt1sUrl");if(e){const t=document.querySelector(".index-module--search--fb2ee"),o=document.querySelector(".index-module--button--62cd9");!t||!o?retry():(GM_deleteValue("yt1sUrl"),yddAdded=!0,setInput(t,e),o.click())}return!0}return extraDownloadServices["5smp3"].checkPage()}},cobalt_web:{title:"Cobalt WEB",download:e=>{GM_setValue("cobaltUrl",document.location.href),GM_setValue("cobaltUrlAudioOnly",e),window.open("https://cobalt.meowing.de/")},checkPage:()=>{if(checkUrl("cobalt.meowing.de")){const e=GM_getValue("cobaltUrl"),t=GM_getValue("cobaltUrlAudioOnly");if(e){const o=document.querySelector("#link-area"),n=t?document.querySelector("#setting-button-save-downloadMode-audio"):document.querySelector("#setting-button-save-downloadMode-auto"),r=document.querySelector("#input-icons");if(!o||!n||!r)retry();else{GM_deleteValue("cobaltUrl"),GM_deleteValue("cobaltUrlAudioOnly"),yddAdded=!0,setInput(o,e),n.click();const i=new MutationObserver(function(){if(r.classList.contains("loading")||!r)return;const c=document.querySelector("#download-button"),a=document.querySelector("#processing-popover");if(!c||!a)return;c.click(),a.style.backgroundColor="rgba(255, 37, 37, 0.56)";const l=new MutationObserver(function(){const s=a.querySelectorAll(".processing-item")[0];if(!s)return;const d=s.querySelector('button[aria-label="download"]');s&&d&&(a.style.backgroundColor="rgba(40, 90, 62, 0.56)",d.click(),l.disconnect())});l.observe(a,{childList:!0,attributes:!0,subtree:!0}),i.disconnect()});i.observe(r,{attributes:!0,attributeFilter:["class"]})}}return!0}return!1}},cobalt_api:{get title(){const e=gmc.get("quality")||defaults.quality,t=gmc.get("vCodec")||defaults.vCodec;return"Cobalt: "+e+", "+t},download:e=>{if(dError)return handleCobaltError(dError,e);GM_xmlhttpRequest({method:"POST",url:"https://cobalt-api.kwiatekmiki.com",headers:getHeaders(),data:JSON.stringify({url:encodeURI(document.location.href),videoQuality:gmc.get("quality"),youtubeVideoCodec:gmc.get("vCodec"),audioFormat:gmc.get("aFormat"),filenameStyle:gmc.get("filenamePattern"),disableMetadata:gmc.get("disableMetadata"),downloadMode:e?"audio":`${gmc.get("isAudioMuted")?"muted":"auto"}`}),onload:t=>{const o=t.responseText&&JSON.parse(t.responseText);t.status===200?o.url?window.open(o.url):handleCobaltError("Cobalt is not sending expected response.",e):t.status===403?handleCobaltError("Cobalt is blocking your request with Bot Protection.",e):handleCobaltError(`Something went wrong! Try again later. (${o.error.code||o.text||o.statusText||""})`,e)},onerror:function(t){handleCobaltError(t.message||t,e)},ontimeout:function(){handleCobaltError("Cobalt is not responding. Please try again later.",e)}}),clearTimeout(dTimeout),dError="Slow down.",dTimeout=setTimeout(()=>{dError=null},5e3)}}},extraDownloadServices={"5smp3":{title:"5smp3",download:()=>{GM_setValue("5smp3Url",document.location.href),window.open("https://5smp3.com/watch")},checkPage:()=>{if(checkUrl("5smp3.com")){const e=GM_getValue("5smp3Url");if(e){const t=document.querySelector("#inputUrl"),o=document.querySelector(".btn-icon.rounded-pill");!t||!o?retry():(GM_deleteValue("5smp3Url"),yddAdded=!0,t.value=e,o.click())}return!0}return!1}},downsub:{title:"Downsub",download:()=>{window.open(`https://downsub.com/?url=${document.location.href}`)},checkPage:()=>{}}};GM_registerMenuCommand("Settings",opencfg);let frame=document.createElement("div"),checkIndex=0,observerExecuted=!1;const maxChecks=10;let gmc=new GM_config({id:"YDD_config",title:"YouTube Direct Downloader (YDD) - Settings",css:gmcCSS,frame,fields:{downloadService:{section:["Download method"],label:"Main service:",labelPos:"left",type:"select",default:defaults.downloadService,options:Object.keys(downloadServices)},backupService:{label:"Backup service:",type:"select",default:defaults.backupService,options:[...Object.keys(downloadServices),"none"]},quality:{section:["Cobalt API settings"],label:"Quality:",labelPos:"left",type:"select",default:defaults.quality,options:["max","2160","1440","1080","720","480","360","240","144"]},vCodec:{label:"Video codec:",labelPos:"left",type:"select",default:defaults.vCodec,options:["h264","vp9","av1"]},aFormat:{label:"Audio format:",type:"select",default:defaults.aFormat,options:["best","mp3","ogg","wav","opus"]},isAudioMuted:{label:"Download videos without audio:",type:"checkbox",default:defaults.isAudioMuted},disableMetadata:{label:"Download videos without metadata:",type:"checkbox",default:defaults.disableMetadata},filenamePattern:{label:"Filename pattern:",type:"select",default:defaults.filenamePattern,options:["classic","pretty","basic","nerdy"]},showCobaltError:{label:"Show error messages:",type:"checkbox",default:defaults.showCobaltError},redirectShorts:{section:["Extra features"],label:"Redirect shorts:",labelPos:"left",type:"checkbox",default:defaults.redirectShorts},url:{section:["Links"],label:"YDD github page",type:"button",click:()=>{GM_openInTab("https://github.com/FawayTT/userscripts")}},cobaltUrl:{label:"Cobalt github page",type:"button",click:()=>{GM_openInTab("https://github.com/imputnet/cobalt")}},cobaltInstance:{label:"Cobalt instance provider",type:"button",click:()=>{GM_openInTab("kwiatekmiki.com")}}},events:{save:function(){gmc.close(),deleteButtons(),modify()},init:function(){if(document.body)return onInit();document.addEventListener("DOMContentLoaded",onInit,{once:!0})}}});function opencfg(){gmc.open()}let oldHref=document.location.href,yddAdded=!1,dError,dTimeout;function checkUrl(e){return document.location.href.includes(e)}function getHeaders(){const e=navigator.userAgent,t=window.location.href,o=window.location.origin,n=navigator.languages;return{"User-Agent":e,Accept:"application/json","Content-Type":"application/json","Accept-Language":n,Referer:t,Origin:o}}function getYouTubeVideoID(e){if(e.includes("shorts")){const o=/\/shorts\/([^/?]+)/,n=e.match(o);return n?n[1]:null}return new URLSearchParams(new URL(e).search).get("v")}function handleCobaltError(e,t){const o=gmc.get("backupService")||defaults.backupService;if(!gmc.get("showCobaltError")&&o!=="cobalt_api"){download(t,o);return}let r="Cobalt error: "+(e||"Something went wrong! Try again later.");o!=="none"&&o!=="cobalt_api"?(r+=`

You will be redirected to backup provider `+o+".",alert(r),download(t,o)):alert(r)}function download(e,t){t||(t=gmc.get("downloadService")),console.log("Attempting download with "+t),downloadServices[t]?downloadServices[t].download(e):console.error("Download service not found: "+t)}function addStyles(){const e=document.createElement("style");e.innerHTML=yddCSS,document.head.appendChild(e)}function deleteButtons(){const e=document.querySelectorAll("#ydd-button");e.length!==0&&e.forEach(t=>{t.remove()})}function closeOptions(e){e.classList.remove("ydd-scale-up"),e.classList.add("ydd-scale-down"),setTimeout(()=>{e.remove()},400)}function showOptions(e){let t=document.getElementById("ydd-options-div");if(t){closeOptions(t);return}t=document.createElement("div");const o=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");o.innerText="\u{1F50A} Audio",n.innerText="\u{1F5B9} Subtitles",r.innerText="\u26ED Settings",t.id="ydd-options-div",t.appendChild(o),t.appendChild(n),t.appendChild(r),e.appendChild(t),t.style.opacity=void 0,t.classList.add("ydd-scale-up"),r.addEventListener("click",()=>{opencfg(),closeOptions(t)}),o.addEventListener("click",()=>{download(!0),closeOptions(t)}),n.addEventListener("click",()=>{extraDownloadServices.downsub.download(),closeOptions(t)});const i=c=>{e.contains(c.target)||(closeOptions(t),window.removeEventListener("click",i))};window.addEventListener("click",i)}function createButton(e,t){if(!e)return;const o=document.createElement("div"),n=document.createElement("button"),r=document.createElement("div");o.id="ydd-button",n.id="ydd-download",r.id="ydd-options",o.appendChild(n),o.appendChild(r),t?(o.style.marginTop="10px",o.style.marginLeft="0px",e.insertBefore(o,e.firstChild)):e.appendChild(o);let i=gmc.get("downloadService")||defaults.downloadService;downloadServices[i]&&downloadServices[i].title?n.title=downloadServices[i].title:n.title="YDD",n.innerText="\u21E9",r.innerText="\u2630",n.addEventListener("click",()=>{download()}),n.addEventListener("contextmenu",c=>{c.preventDefault();const a=gmc.get("downloadService")||defaults.downloadService,l=gmc.get("backupService")||defaults.backupService;a!==l&&l!=="none"&&download(!1,l)}),r.addEventListener("click",()=>{showOptions(o)})}function checkShort(e=!0){return checkUrl("youtube.com/shorts")?(gmc.get("redirectShorts")&&e&&window.location.replace(window.location.toString().replace("/shorts/","/watch?v=")),!0):!1}function setInput(e,t){Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0}))}function retry(){checkIndex++,checkIndex>maxChecks?yddAdded=!0:yddAdded=!1}function checkPage(e){const t=e?gmc.get("backupService"):gmc.get("downloadService"),o=downloadServices[t];return o&&o.checkPage?o.checkPage():!1}function modify(){const e=checkShort();if(!(checkPage()||checkPage(!0))){if(!checkUrl("youtube.com/watch")&&!e){yddAdded=!0;return}if(e){const t=document.querySelectorAll("#actions");if(t.length<=1){yddAdded=!1;return}deleteButtons(),t.forEach(o=>{createButton(o,!0)}),yddAdded=!0}else{const t=document.getElementById("owner")||document.querySelector("div.slim-owner-subscribe-button");if(!t){yddAdded=!1;return}deleteButtons(),createButton(t,!1),yddAdded=!0}}}function onInit(){addStyles(),document.body.appendChild(frame),new MutationObserver(function(){if(observerExecuted=!0,!yddAdded)return modify();oldHref!=document.location.href&&(oldHref=document.location.href,yddAdded=!1)}).observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{observerExecuted||modify()},500)}if(window.trustedTypes&&window.trustedTypes.createPolicy)try{window.trustedTypes.createPolicy("default",{createHTML:e=>e})}catch{console.warn("Trusted Types: Default policy already exists.")}
