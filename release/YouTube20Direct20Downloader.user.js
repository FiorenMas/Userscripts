// ==UserScript==
// @name                YouTube Direct Downloader
// @version             4.3.5
// @author              FawayTT
// @namespace           FawayTT
// @supportURL          https://github.com/FawayTT/userscripts/issues
// @icon                https://github.com/FawayTT/userscripts/blob/main/ydd-icon.png?raw=true
// @match               https://www.youtube.com/*
// @match               https://yt5s.biz/*
// @match               https://cobalt.tools/*
// @match               https://5smp3.com/*
// @connect             cobalt-api.kwiatekmiki.com
// @require             https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_registerMenuCommand
// @grant               GM_openInTab
// @grant               GM_xmlhttpRequest
// @license             MIT
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
    transform: scale(0.8) translateY(-60%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(-70%);
    opacity: 1;
  }
}

@keyframes scaleOut {
  0% {
    transform: scale(1) translateY(-70%);
    opacity: 1;
  }
  100% {
    transform: scale(0.8) translateY(-60%);
    opacity: 0;
  }
}

.ydd-scale-up {
  animation: scaleIn 0.3s forwards;
}

.ydd-scale-down {
  animation: scaleOut 0.3s forwards;
}
`;GM_registerMenuCommand("Settings",opencfg);const defaults={downloadService:"cobalt_web",backupService:"yt5s",quality:"max",vCodec:"av1",aFormat:"mp3",filenamePattern:"basic",isAudioMuted:!1,disableMetadata:!1,redirectShorts:!1,showCobaltError:!1};let frame=document.createElement("div");document.body.appendChild(frame);let cobaltTries=0,gmc=new GM_config({id:"YDD_config",title:"YouTube Direct Downloader (YDD) - Settings",css:gmcCSS,frame,fields:{downloadService:{section:["Download method"],label:"Main service:",labelPos:"left",type:"select",default:defaults.downloadService,options:["cobalt_web","cobalt_api","yt5s","y2mate","yt1s"]},backupService:{label:"Backup service:",type:"select",default:defaults.backupService,options:["cobalt_web","cobalt_api","y2mate","yt5s","yt1s","none"]},quality:{section:["Cobalt API settings"],label:"Quality:",labelPos:"left",type:"select",default:defaults.quality,options:["max","2160","1440","1080","720","480","360","240","144"]},vCodec:{label:"Video codec:",labelPos:"left",type:"select",default:defaults.vCodec,options:["h264","vp9","av1"]},aFormat:{label:"Audio format:",type:"select",default:defaults.aFormat,options:["best","mp3","ogg","wav","opus"]},isAudioMuted:{label:"Download videos without audio:",type:"checkbox",default:defaults.isAudioMuted},disableMetadata:{label:"Download videos without metadata:",type:"checkbox",default:defaults.disableMetadata},filenamePattern:{label:"Filename pattern:",type:"select",default:defaults.filenamePattern,options:["classic","pretty","basic","nerdy"]},showCobaltError:{label:"Show error messages:",type:"checkbox",default:defaults.showCobaltError},redirectShorts:{section:["Extra features"],label:"Redirect shorts:",labelPos:"left",type:"checkbox",default:defaults.redirectShorts},url:{section:["Links"],label:"Creator of this script - FawayTT",type:"button",click:()=>{GM_openInTab("https://github.com/FawayTT/userscripts")}},cobaltUrl:{label:"Cobalt github page",type:"button",click:()=>{GM_openInTab("https://github.com/imputnet/cobalt")}},cobaltInstance:{label:"Cobalt instance provider",type:"button",click:()=>{GM_openInTab("kwiatekmiki.com")}}},events:{save:function(){gmc.close(),deleteButtons(),modify()},init:onInit}});function opencfg(){gmc.open()}let oldHref=document.location.href,yddAdded=!1,dError,dTimeout;function getHeaders(){const e=navigator.userAgent,o=window.location.href,t=window.location.origin,n=navigator.languages;return{"User-Agent":e,Accept:"application/json","Content-Type":"application/json","Accept-Language":n,Referer:o,Origin:t}}function getYouTubeVideoID(e){if(e.includes("shorts")){const t=/\/shorts\/([^/?]+)/,n=e.match(t);return n?n[1]:null}return new URLSearchParams(new URL(e).search).get("v")}function handleCobaltError(e,o){const t=gmc.get("backupService")||defaults.backupService;if(!gmc.get("showCobaltError")&&t!=="cobalt_api"){download(o,t);return}let a="Cobalt error: "+(e||"Something went wrong! Try again later.");t!=="none"&&t!=="cobalt_api"?(a+=`

You will be redirected to backup provider `+t+".",alert(a),download(o,t)):alert(a)}function download(e,o){switch(o||(o=gmc.get("downloadService")),o){case"y2mate":e?window.open(`https://www.y2mate.com/youtube-mp3/${getYouTubeVideoID(document.location.href)}`):window.open(`https://www.y2mate.com/download-youtube/${getYouTubeVideoID(document.location.href)}`);break;case"yt1s":e?window.open(`https://www.yt1s.com/en/youtube-to-mp3?q=${getYouTubeVideoID(document.location.href)}`):window.open(`https://www.yt1s.com/en/youtube-to-mp4?q=${getYouTubeVideoID(document.location.href)}`);break;case"yt5s":e?window.open("https://5smp3.com/?ydd="+encodeURI(document.location.href)):window.open("https://yt5s.biz/enxj101/?ydd="+encodeURI(document.location.href));break;case"cobalt_web":e?window.open("https://cobalt.tools/?ydd="+encodeURI(document.location.href)+"&audioOnly=true"):window.open("https://cobalt.tools/?ydd="+encodeURI(document.location.href));break;default:if(dError)return handleCobaltError(dError,e);GM_xmlhttpRequest({method:"POST",url:"https://cobalt-api.kwiatekmiki.com",headers:getHeaders(),data:JSON.stringify({url:encodeURI(document.location.href),videoQuality:gmc.get("quality"),youtubeVideoCodec:gmc.get("vCodec"),audioFormat:gmc.get("aFormat"),filenameStyle:gmc.get("filenamePattern"),disableMetadata:gmc.get("disableMetadata"),downloadMode:e?"audio":`${gmc.get("isAudioMuted")?"muted":"auto"}`}),onload:t=>{const n=t.responseText&&JSON.parse(t.responseText);t.status===200?n.url?window.open(n.url):handleCobaltError("Cobalt is not sending expected response.",e):t.status===403?handleCobaltError("Cobalt is blocking your request with Bot Protection.",e):handleCobaltError(`Something went wrong! Try again later. (${n.error.code||n.text||n.statusText||""})`,e)},onerror:function(t){handleCobaltError(t.message||t,e)},ontimeout:function(){handleCobaltError("Cobalt is not responding. Please try again later.",e)}}),clearTimeout(dTimeout),dError="Slow down.",dTimeout=setTimeout(()=>{dError=null},5e3);break}}function addStyles(){const e=document.createElement("style");e.innerHTML=yddCSS,document.head.appendChild(e)}function deleteButtons(){const e=document.querySelectorAll("#ydd-button");e.length!==0&&e.forEach(o=>{o.remove()})}function closeOptions(e){e.classList.remove("ydd-scale-up"),e.classList.add("ydd-scale-down"),setTimeout(()=>{e.remove()},400)}function showOptions(e){let o=document.getElementById("ydd-options-div");if(o){closeOptions(o);return}o=document.createElement("div");const t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");t.innerText="\u{1F50A} Audio",n.innerText="\u{1F5B9} Subtitles",a.innerText="\u26ED Settings",o.id="ydd-options-div",o.appendChild(t),o.appendChild(n),o.appendChild(a),e.appendChild(o),o.style.opacity=void 0,o.classList.add("ydd-scale-up"),a.addEventListener("click",()=>{opencfg(),closeOptions(o)}),t.addEventListener("click",()=>{download(!0),closeOptions(o)}),n.addEventListener("click",()=>{window.open(`https://downsub.com/?url=${document.location.href}`),closeOptions(o)}),window.addEventListener("click",i=>{e.contains(i.target)||closeOptions(o)})}function createButton(e,o){if(!e)return;const t=document.createElement("div"),n=document.createElement("button"),a=document.createElement("div");switch(t.id="ydd-button",n.id="ydd-download",a.id="ydd-options",t.appendChild(n),t.appendChild(a),o?(t.style.marginTop="10px",t.style.marginLeft="0px",e.insertBefore(t,e.firstChild)):e.appendChild(t),gmc.get("downloadService")||defaults.downloadService){case"y2mate":n.title="Y2Mate";break;case"yt1s":n.title="YT1S";break;case"yt5s":n.title="YT5S";break;case"cobalt_web":n.title="Cobalt";break;case"cobalt_api":{const s=gmc.get("quality")||defaults.quality,r=gmc.get("vCodec")||defaults.vCodec,c=`${s}, ${r}`;n.title="Cobalt: "+c.toUpperCase();break}default:n.title="YDD";break}n.innerText="\u21E9",a.innerText="\u2630",n.addEventListener("click",()=>{download()}),n.addEventListener("contextmenu",s=>{const r=gmc.get("downloadService")||defaults.downloadService,c=gmc.get("backupService")||defaults.backupService;r!==c&&c!=="none"&&download(!1,c)}),a.addEventListener("click",()=>{showOptions(t)})}function checkShort(e=!0){return document.location.href.indexOf("youtube.com/shorts")>-1?(gmc.get("redirectShorts")&&e&&window.location.replace(window.location.toString().replace("/shorts/","/watch?v=")),!0):!1}function checkPage(e){switch(e?gmc.get("backupService"):gmc.get("downloadService")){case"cobalt_web":if(document.location.href.indexOf("cobalt.tools")>-1){const t=new URL(document.location.href),n=t.searchParams.get("ydd");if(n){const a=t.searchParams.get("audioOnly")==="true",i=document.querySelector("#link-area"),s=a?document.querySelector("#setting-button-save-downloadMode-audio"):document.querySelector("#setting-button-save-downloadMode-auto"),r=document.querySelector("#input-icons");if(!i||!s||!r)cobaltTries++,cobaltTries>10?yddAdded=!0:yddAdded=!1;else{yddAdded=!0,i.value=n,i.dispatchEvent(new Event("input",{bubbles:!0})),i.dispatchEvent(new Event("change",{bubbles:!0})),s.click();const c=new MutationObserver(function(){if(r.classList.contains("loading")||!r)return;document.querySelector("#download-button").click(),c.disconnect()});c.observe(r,{attributes:!0,attributeFilter:["class"]})}}return!0}return!1;case"yt5s":if(document.location.href.indexOf("yt5s.biz/enxj101")>-1||document.location.href.indexOf("5smp3.com")>-1){const n=new URL(document.location.href).searchParams.get("ydd");if(n){const a=document.querySelector("#txt-url"),i=document.querySelector("#btn-submit");!a||!i?yddAdded=!1:(yddAdded=!0,a.value=n,i.click())}return!0}return!1;default:return!1}}function modify(){const e=checkShort();if(!(checkPage()||checkPage(!0))){if(document.location.href.indexOf("youtube.com/watch")===-1&&!e){yddAdded=!0;return}if(e){const o=document.querySelectorAll("#actions");if(o.length<=1){yddAdded=!1;return}deleteButtons(),o.forEach(t=>{createButton(t,!0)}),yddAdded=!0}else{const o=document.getElementById("owner");if(!o){yddAdded=!1;return}deleteButtons(),createButton(o,!1),yddAdded=!0}}}function onInit(){addStyles(),new MutationObserver(function(){if(!yddAdded)return modify();oldHref!=document.location.href&&(oldHref=document.location.href,yddAdded=!1)}).observe(document.body,{childList:!0,subtree:!0})}if(window.trustedTypes&&window.trustedTypes.createPolicy)try{window.trustedTypes.createPolicy("default",{createHTML:e=>e})}catch{console.warn("Trusted Types: Default policy already exists.")}
