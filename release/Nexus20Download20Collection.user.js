// ==UserScript==
// @name         Nexus Download Collection
// @namespace    NDC
// @version      0.9.6
// @author       Drigtime
// @match        https://www.nexusmods.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nexusmods.com
// @compatible   chrome
// @compatible   edge
// @compatible   firefox
// @compatible   safari
// @compatible   brave
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM_addStyle
// @connect      nexusmods.com
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Nexus20Download20Collection.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Nexus20Download20Collection.meta.js
// ==/UserScript==
GM_addStyle(`
    .bottom-auto {
        bottom: auto;
    }
    .left-auto {
        left: auto;
    }
    .right-0 {
        right: 0px;
    }
    .top-0 {
        top: 0px;
    }
    .translate-y-\\[2rem\\] {
        --tw-translate-y: 2rem;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    .min-h-7 {
    min-height: 1.75rem;
    }
    .w-11 {
        width: 2.75rem;
    }
    .w-20{
        width:5rem;
    }
    .w-32 {
        width: 8rem;
    }
    .w-52 {
        width: 13rem;
    }
    .text-green-600 {
        --tw-text-opacity: 1;
        color: rgb(22 163 74 / var(--tw-text-opacity, 1));
    }
    .text-red-600 {
        --tw-text-opacity: 1;
        color: rgb(220 38 38 / var(--tw-text-opacity, 1))
    }
    .text-sky-500 {
        --tw-text-opacity: 1;
        color: rgb(14 165 233 / var(--tw-text-opacity, 1));
    }
    .backdrop-blur-sm {
        backdrop-filter: blur(3px);
    }
    .backdrop-brightness-50 {
        backdrop-filter: brightness(50%);
    }
 
    @media (min-width: 768px) {
        .sm\\:rounded-none {
            border-radius: 0;
        }
        .sm\\:gap-0 {
            gap: 0;
        }
        .sm\\:w-52 {
            width: 13rem;
        }
        .sm\\:justify-start {
            justify-content: flex-start;
        }
    }
`);const convertSize=h=>{const t=h/1024,o=t/1024;return o>=1?`${o.toFixed(2)} GB`:`${t.toFixed(2)} MB`};class NDC{mods={all:[],mandatory:[],optional:[]};constructor(t,o,e=null){this.element=document.createElement("div"),this.element.classList.add("bg-surface-low","w-full","space-y-3","rounded-lg","p-4","mt-4"),this.gameId=t,this.collectionId=o,this.revision=e,this.pauseBetweenDownload=5,this.downloadSpeed=1.5,this.downloadMethod=NDCDownloadButton.DOWNLOAD_METHOD_VORTEX,this.downloadButton=new NDCDownloadButton(this),this.progressBar=new NDCProgressBar(this),this.console=new NDCLogConsole(this)}async init(){this.pauseBetweenDownload=await GM.getValue("pauseBetweenDownload",5),this.downloadSpeed=await GM.getValue("downloadSpeed",1.5),this.downloadMethod=await GM.getValue("downloadMethod",NDCDownloadButton.DOWNLOAD_METHOD_VORTEX),this.element.innerHTML=`
        <button class="w-full font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued rounded">
            Fetching mods list...
        </button>
        `;const t=await this.fetchMods();if(!t){this.element.innerHTML='<div class="w-full font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued rounded">Failed to fetch mods list</div>';return}const o=t.modFiles.sort((n,r)=>n.file.mod.name.localeCompare(r.file.mod.name)),e=o.filter(n=>!n.optional),s=o.filter(n=>n.optional);this.mods={all:[...e,...s],mandatory:e,optional:s},this.downloadButton.render(),this.element.innerHTML="",this.element.appendChild(this.downloadButton.element),this.element.appendChild(this.progressBar.element),this.element.appendChild(this.console.element)}async fetchMods(t=this.collectionId,o=this.revision){const e=await fetch("https://api-router.nexusmods.com/graphql",{headers:{"content-type":"application/json"},referrer:document.location.href,referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify({query:"query CollectionRevisionMods ($revision: Int, $slug: String!, $viewAdultContent: Boolean) { collectionRevision (revision: $revision, slug: $slug, viewAdultContent: $viewAdultContent) { externalResources { id, name, resourceType, resourceUrl }, modFiles { fileId, optional, file { fileId, name, uri, size, version, date, mod { adult, modId, name, version, game { domainName, id } } } } } }",variables:{slug:t,viewAdultContent:!0,revision:o},operationName:"CollectionRevisionMods"}),method:"POST",mode:"cors",credentials:"include"});if(!e.ok)return;const s=await e.json();if(s.data.collectionRevision)return s.data.collectionRevision.modFiles=s.data.collectionRevision.modFiles.map(n=>(n.file.url=`https://www.nexusmods.com/${n.file.mod.game.domainName}/mods/${n.file.mod.modId}?tab=files&file_id=${n.file.fileId}`,n)),s.data.collectionRevision}async fetchDownloadLink(t){this.bypassNexusAdsCookie();let o;this.downloadMethod===NDCDownloadButton.DOWNLOAD_METHOD_VORTEX?o=await fetch(`${t.file.url}&nmm=1`):o=await fetch(t.file.url);const e=await o.text();if(!o.ok)return{downloadUrl:"",text:e};let s="";if(this.downloadMethod===NDCDownloadButton.DOWNLOAD_METHOD_VORTEX){const n=e.match(/id="slowDownloadButton".*?data-download-url="([^"]+)"/);s=n?n[1].replaceAll("&amp;","&"):""}else s=(await(await fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Downloads?GenerateDownloadUrl",{headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:`fid=${t.fileId}&game_id=${t.file.mod.game.id}`,method:"POST"})).json())?.url||"";return{downloadUrl:s,text:e}}bypassNexusAdsCookie(){const t=Math.round(Date.now()/1e3),o=5*60,e=t+o,s=new Date(Date.now()+o*1e3).toUTCString();document.cookie=`ab=0|${e};expires=${s};domain=nexusmods.com;path=/`}async downloadMods(t,o=null){this.startDownload(t.length);let e=null;o!==null&&(e=await GM.getValue("history",{}),e[this.gameId]??={},e[this.gameId][this.collectionId]??={},e[this.gameId][this.collectionId][o]??=[],e[this.gameId][this.collectionId][o].length&&(await Promise.resolve(window.confirm(`You already downloaded ${e[this.gameId][this.collectionId][o].length} out of ${t.length} mods from this collection.
Do you want to skip the already downloaded mods ?
Cancel will clear the history and download all mods again.`))||(e[this.gameId][this.collectionId][o]=[],await GM.setValue("history",e))));const s=await GM.getValue("lauchedDownload",{count:0,date:new Date().getTime()}),n=[];let r=!1;for(const[a,i]of t.entries()){const d=`${(a+1).toString().padStart(t.length.toString().length,"0")}/${t.length}`;if(s.date<new Date().getTime()-1e3*60*5&&(s.count=0,await GM.setValue("lauchedDownload",s)),e?.[this.gameId][this.collectionId][o].includes(i.fileId)){this.console.log(`[${d}] Already downloaded <a href="${i.file.url}" target="_blank" class="text-primary-moderate">${i.file.name}</a>`),this.progressBar.incrementProgress();continue}if(this.progressBar.skipTo){if(this.progressBar.skipToIndex-1>a){this.console.log(`[${d}] Skipping <a href="${i.file.url}" target="_blank" class="text-primary-moderate">${i.file.name}</a>`),this.progressBar.incrementProgress(),this.progressBar.skipToIndex-1===a+1&&(this.progressBar.skipTo=!1);continue}this.progressBar.skipTo=!1}if(this.progressBar.status===NDCProgressBar.STATUS_STOPPED){this.console.log("Download stopped.",NDCLogConsole.TYPE_INFO);break}const{downloadUrl:u,text:m}=await this.fetchDownloadLink(i);if(u==="")this.console.log(`
                [${d}] Failed to get download link for
                <a href="${i.file.url}" target="_blank" class="text-primary-moderate">${i.file.name}</a>
                <button class="text-primary-moderate" title="Copy response to clipboard">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" style="width: 1rem; height: 1rem;">
                        <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" style="fill: currentcolor;"></path>
                    </svg>
                </button>
                `,NDCLogConsole.TYPE_ERROR).querySelector("button").addEventListener("click",()=>{navigator.clipboard.writeText(m),alert("Response copied to clipboard")}),m.match(/class="replaced-login-link"/)?(this.console.log('You are not connected on NexusMods. <a href="https://users.nexusmods.com/auth/continue?client_id=nexus&redirect_uri=https://www.nexusmods.com/oauth/callback&response_type=code&referrer=https%3A%2F%2Fwww.nexusmods.com%2F" target="_blank" class="text-primary-moderate">Login</a> and try again.',NDCLogConsole.TYPE_ERROR),r=!0):m.match(/Just a moment.../)?(this.console.log(`You are rate limited by Cloudflare. Click on the link to solve the captcha and try again. <a href="${i.file.url}" target="_blank" class="text-primary-moderate">Solve captcha</a>`,NDCLogConsole.TYPE_ERROR),r=!0):m.match(/Your access to Nexus Mods has been temporarily suspended/)?(this.console.log("Du to too many requests, Nexus mods temporarily suspended your account for 10 minutes, try again later.",NDCLogConsole.TYPE_ERROR),r=!0):n.push(i);else{if(this.downloadMethod===NDCDownloadButton.DOWNLOAD_METHOD_VORTEX)this.console.log(`[${d}] Sending download link to Vortex <a href="${i.file.url}" target="_blank" class="text-primary-moderate" title="Nexus mod page">${i.file.name}</a><span class="text-xs text-neutral-subdued ml-1">(${convertSize(i.file.size)})</span>`),document.location.href=u;else{this.console.log(`[${d}] Downloading <a href="${i.file.url}" target="_blank" class="text-primary-moderate" title="Nexus mod page">${i.file.name}</a><a href="${u}"><svg class="fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" style="width: 1.3rem; height: 1.3rem;"><title>Download link</title><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" style="fill: currentcolor;" /></svg></a><span class="text-xs text-neutral-subdued">(${convertSize(i.file.size)})</span>`);const l=document.createElement("a");l.href=u,l.download=i.file.name,l.click()}this.progressBar.incrementProgress(),e&&(e[this.gameId][this.collectionId][o]=[...new Set([...e[this.gameId][this.collectionId][o],i.fileId])],await GM.setValue("history",e)),s.count++,s.date=new Date().getTime(),await GM.setValue("lauchedDownload",s)}if(r){this.console.log("Download forced to stop due to an error.",NDCLogConsole.TYPE_ERROR);break}if(a<t.length-1){if(s.count>=200){let f=300;this.console.log("Started the download of 200 mods. Waiting 5 minutes before continuing to avoid the temporary 10 minutes ban from Nexus.",NDCLogConsole.TYPE_INFO);let g=null;await new Promise(x=>{const v=setInterval(async()=>{f--;const y=Math.floor(f/60),b=f%60,w=`Waiting for ${y} minutes and ${b} seconds before continuing...`;if(g?g.innerHTML=w:g=this.console.log(w,NDCLogConsole.TYPE_INFO),f<=0)return g.remove(),clearInterval(v),s.count=0,await GM.setValue("lauchedDownload",s),x()},1e3)})}const l=this.pauseBetweenDownload===0?0:Math.round(i.file.size/1024/this.downloadSpeed)+this.pauseBetweenDownload;let c=null;const p=new Date().getTime();await new Promise(f=>{const g=setInterval(async()=>{const x=Math.max(0,Math.round((p+l*1e3-new Date().getTime())/1e3)),v=Math.max(0,Math.floor(x/60)),y=Math.max(0,x%60),b=`Waiting ${v} minutes and ${y} seconds before starting the next download...`;c?c.innerHTML=b:c=this.console.log(b,NDCLogConsole.TYPE_INFO);const w=()=>(clearInterval(g),c.remove(),f());if(this.progressBar.skipPause||this.progressBar.skipTo||this.progressBar.status===NDCProgressBar.STATUS_STOPPED)return this.progressBar.skipPause&&(this.progressBar.skipPause=!1),w();if(this.progressBar.status!==NDCProgressBar.STATUS_PAUSED&&new Date().getTime()>=p+l*1e3)return w()},100)})}e&&this.progressBar.progress===this.progressBar.modsCount&&(e[this.gameId][this.collectionId][o]=[],await GM.setValue("history",e))}if(n.length){this.console.log(`Failed to download ${n.length} mods:`,NDCLogConsole.TYPE_INFO);for(const a of n)this.console.log(`<a href="${a.file.url}" target="_blank" class="text-primary-moderate">${a.file.name}</a>`,NDCLogConsole.TYPE_INFO)}this.endDownload()}startDownload(t){this.progressBar.setModsCount(t),this.progressBar.setProgress(0),this.progressBar.setStatus(NDCProgressBar.STATUS_DOWNLOADING),this.downloadButton.element.style.display="none",this.progressBar.element.style.display="",this.console.log("Download started.",NDCLogConsole.TYPE_INFO)}endDownload(){this.progressBar.setStatus(NDCProgressBar.STATUS_FINISHED),this.progressBar.element.style.display="none",this.downloadButton.element.style.display="",this.console.log("Download finished.",NDCLogConsole.TYPE_INFO)}}class NDCDownloadButton{static DOWNLOAD_METHOD_VORTEX=0;static DOWNLOAD_METHOD_BROWSER=1;constructor(t){this.element=document.createElement("div"),this.element.classList.add("flex","flex-col","gap-3","w-100"),this.ndc=t,this.html=`
            <div class="flex flex-col sm:flex-row gap-3 justify-between">
                <div class="flex gap-3 items-center justify-center sm:justify-start min-h-9">
                    <label>
                        <input type="radio" name="downloadOption" value="${NDCDownloadButton.DOWNLOAD_METHOD_VORTEX}" style="accent-color: rgb(217 143 64 / var(--tw-bg-opacity));">
                        Send mods to Vortex <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem; display: inline;"><path d="M6.82716996,18.9983338 C6.92271658,19.1323182 7.13124159,19.3870605 7.48682198,19.5652215 C7.80714577,19.7257911 8.09889731,19.7498634 8.25774852,19.7513183 L8.25774852,19.7513183 L6.32348571,19.9618841 Z M7.10728661,17.6493632 L7.12127704,17.6694963 C7.24327452,17.839272 8.17282479,19.0207325 10.2887245,18.8255975 C10.2887245,18.8255975 9.23458567,19.7058616 8.0099284,19.0357429 C6.93541906,18.4476258 7.10728661,17.6493632 7.10728661,17.6493632 Z M6.51691196,15.9149726 C6.51691196,15.9149726 8.0809107,17.2786428 10.7864389,17.2786428 C12.5723501,17.2786428 12.8771507,17.0036498 12.8986773,16.9816504 C12.8977244,16.9809251 12.5565655,18.1324747 10.1941859,18.1311384 C7.82729647,18.1297998 6.51691196,16.4689469 6.51691196,15.9149726 Z M16.0060914,13.7951618 C16.0060914,13.7951618 17.1543308,16.3003927 11.0311436,16.3003927 C6.22617683,16.3003927 5.16292799,13.9625877 5.16292799,13.9625877 L5.17928385,13.9751765 C5.35980954,14.110911 7.04480011,15.2985885 10.7334766,15.2985885 C14.6457093,15.2985885 16.0060914,13.7951618 16.0060914,13.7951618 Z M20.393915,9.55554019 C20.5500161,9.78343345 20.6387402,10.0320322 20.6370307,10.3057165 C20.6205951,12.124748 15.7545104,14.3252387 10.0141262,14.2761295 C4.27427563,14.2272857 3.22866514,12.1879263 3.22866514,12.1879263 C3.22866514,12.1879263 5.34710376,13.0940576 8.40841962,13.1203377 C11.6100931,13.1475468 17.7197832,12.0655515 18.5774052,10.3501802 C19.2683861,10.0895032 19.8709096,9.82351716 20.393915,9.55554019 Z M13.360546,7.62892265 C14.6921867,7.64024369 16.0636674,7.76091566 17.2520707,8.00290278 C16.8188944,8.16988805 16.3123007,8.33957494 15.7249611,8.51029099 C13.2445231,8.09193392 9.67022745,8.05285342 6.96092454,8.66417021 L6.95848503,8.75824697 L7.67746967,9.65189519 C7.05977332,9.39717416 6.1544367,9.25740183 5.4530674,9.22877646 C6.00401086,8.80923589 6.65276589,8.18395049 6.99835133,7.62843944 L6.99835133,7.62843944 L6.96256338,8.6254081 C8.26123861,8.25323215 10.878487,7.60829052 13.360546,7.62892265 Z M12.7006224,9.66144776 C4.21471194,11.3941736 2.67951807,9.65612203 2.56962321,9.1002491 C2.45932824,8.54410986 3.92410405,6.45775566 11.3594784,5.03791639 C18.7943192,3.61847655 20.9688771,4.89305657 21.0790387,5.44906264 C21.1892003,6.00466929 21.1866663,7.92898821 12.7006224,9.66144776 M22.9109754,5.25427412 C22.7215935,4.29990353 19.9767559,1.91837081 11.1782318,3.57320786 C2.37984118,5.2280449 0.83024361,8.6186701 1.01882533,9.57277437 C1.20794052,10.5268786 3.23019268,13.6297813 13.2610329,11.5504837 C23.2898726,9.52710626 23.0858203,6.54057074 22.9109754,5.25427412" style="fill: currentcolor;"></path></svg>
                    </label>
                    <label>
                        <input type="radio" name="downloadOption" value="${NDCDownloadButton.DOWNLOAD_METHOD_BROWSER}" style="accent-color: rgb(217 143 64 / var(--tw-bg-opacity));">
                        Download mods via browser <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem; display: inline;"><title>download-circle-outline</title><path d="M8 17V15H16V17H8M16 10L12 14L8 10H10.5V6H13.5V10H16M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" style="fill: currentcolor;"/></svg>
                    </label>
                </div>
                <div class="flex">
                    <button id="importDownloadedModsBtn" class="grow font-montserrat font-semibold text-sm leading-none tracking-wider uppercase text-center leading-none flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-focus-subdued focus:outline-offset-2 rounded-l px-2 py-1 cursor-pointer bg-surface-mid border border-neutral-moderate fill-neutral-moderate text-neutral-moderate aria-expanded:bg-surface-high focus:border-neutral-moderate focus:bg-surface-high hover:border-neutral-moderate hover:bg-surface-high">
                        Import downloaded mods
                    </button>
                    <button id="importDownloadedModsBtnInfo" class="flex-none font-montserrat font-semibold text-sm leading-none tracking-wider uppercase text-center leading-none flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-focus-subdued focus:outline-offset-2 rounded-r px-2 py-1 cursor-pointer bg-surface-mid border-r border-y border-neutral-moderate fill-neutral-moderate text-neutral-moderate aria-expanded:bg-surface-high focus:border-neutral-moderate focus:bg-surface-high hover:border-neutral-moderate hover:bg-surface-high">
                        <svg id="extraPauseInfo" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem; cursor: pointer;"><title>information</title><path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" style="fill: currentcolor;"/></svg>
                    </button>
                </div>
            </div>
            <div class="flex w-100">
                <button class="w-full font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued justify-between rounded-l" id="mainBtn">
                    download all mods
                    <span class="p-2 bg-surface-low rounded-full text-xs text-white whitespace-nowrap" id="mainModsCount"></span>
                </button>
                <div class="relative">
                    <button class="font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued justify-between rounded-r" id="menuBtn">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" style="fill: currentcolor;"></path></svg>
                    </button>
                    <div class="absolute top-0 right-0 bottom-auto left-auto z-10 min-w-48 py-1 px-0 m-0 text-base text-gray-600 border-stroke-subdued bg-surface-low border border-gray-200 rounded-md shadow-lg outline-none hidden" style="transform: translate3d(0px, 38px, 0px);" id="otherOptionMenu">
                        <button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" id="menuBtnMandatory" style="height: 44px;">
                            download all mandatory mods
                            <span class="p-2 bg-primary-moderate rounded-full text-xs text-white whitespace-nowrap" id="menuBtnMandatoryModsCount"></span>
                        </button>
                        <button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" id="menuBtnOptional" style="height: 44px;">
                            download all optional mods
                            <span class="p-2 bg-primary-moderate rounded-full text-xs text-white whitespace-nowrap" id="menuBtnOptionalModsCount"></span>
                        </button>
                        <button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" id="menuBtnSelect" style="height: 44px;">
                            select mods to download
                        </button>
                        <button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" id="menuBtnUpdate" style="height: 44px;">
                            update collection
                        </button>
                    </div>
                </div>
 
            </div>
        `,this.element.innerHTML=this.html,this.downloadMethods=this.element.querySelectorAll('input[name="downloadOption"]'),this.importDownloadedModsBtn=this.element.querySelector("#importDownloadedModsBtn"),this.importDownloadedModsBtnInfo=this.element.querySelector("#importDownloadedModsBtnInfo"),this.allBtn=this.element.querySelector("#mainBtn"),this.modsCount=this.element.querySelector("#mainModsCount"),this.mandatoryBtn=this.element.querySelector("#menuBtnMandatory"),this.mandatoryModsCount=this.element.querySelector("#menuBtnMandatoryModsCount"),this.optionalBtn=this.element.querySelector("#menuBtnOptional"),this.optionalModsCount=this.element.querySelector("#menuBtnOptionalModsCount"),this.selectBtn=this.element.querySelector("#menuBtnSelect"),this.updateBtn=this.element.querySelector("#menuBtnUpdate");const o=this.element.querySelector("#menuBtn"),e=this.element.querySelector("#otherOptionMenu");for(const s of this.downloadMethods)s.addEventListener("change",async()=>{this.ndc.downloadMethod=Number.parseInt(s.value),await GM.setValue("downloadMethod",this.ndc.downloadMethod)});this.importDownloadedModsBtn.addEventListener("click",()=>{const s=document.createElement("input");s.type="file",s.multiple=!0,s.addEventListener("change",async()=>{const n=s.files,r=this.ndc.mods.all.filter(l=>{for(const c of n)if(c.name.includes(l.file.uri))return!0;return!1}),a=[...n].filter(l=>!r.some(c=>l.name.includes(c.file.uri))),i=r.map(l=>l.fileId);console.log(i);const d=await GM.getValue("history",{});d[this.ndc.gameId]==null&&(d[this.ndc.gameId]={});const u=d[this.ndc.gameId];u[this.ndc.collectionId]==null&&(u[this.ndc.collectionId]={});const m=u[this.ndc.collectionId];m.all=[...new Set(i)],m.mandatory=[...new Set(r.filter(l=>!l.optional).map(l=>l.fileId))],m.optional=[...new Set(r.filter(l=>l.optional).map(l=>l.fileId))],await GM.setValue("history",d),alert(`Imported ${r.length} mods to the history.

${r.map(l=>l.file.name).join(`
`)}`),a.length&&alert(`The following files are not matched with any mods:

${a.map(l=>l.name).join(`
`)}`)}),s.click()}),this.importDownloadedModsBtnInfo.addEventListener("click",()=>{alert(`Importing downloaded mods will allow you to skip the download of mods you already have. 
Select all the files of the folder where your mods are located and the script will automatically add them to the history so when you start a new download you will be asked if you want to skip the already downloaded mods.

Default Vortex download path :
 C:\\Users\\YourName\\AppData\\Roaming\\Vortex\\downloads\\${this.ndc.gameId}`)}),o.addEventListener("click",()=>{e.classList.toggle("hidden")}),document.addEventListener("click",s=>{o.contains(s.target)||e.classList.add("hidden")}),this.allBtn.addEventListener("click",()=>this.ndc.downloadMods(this.ndc.mods.all,"all")),this.mandatoryBtn.addEventListener("click",()=>this.ndc.downloadMods(this.ndc.mods.mandatory,"mandatory")),this.optionalBtn.addEventListener("click",()=>this.ndc.downloadMods(this.ndc.mods.optional,"optional")),this.selectBtn.addEventListener("click",()=>{const s=new NDCSelectModsModal(this.ndc);document.body.appendChild(s.element),s.render()}),this.updateBtn.addEventListener("click",()=>{const s=new NDCUpdateModsModal(this.ndc);document.body.appendChild(s.element),s.render()})}updateDownloadMethod(){for(const t of this.downloadMethods)Number.parseInt(t.value)===this.ndc.downloadMethod&&(t.checked=!0)}updateModsCount(){this.modsCount.innerHTML=`${this.ndc.mods.mandatory.length+this.ndc.mods.optional.length} mods`}updateMandatoryModsCount(){this.mandatoryModsCount.innerHTML=`${this.ndc.mods.mandatory.length} mods`}updateOptionalModsCount(){this.optionalModsCount.innerHTML=`${this.ndc.mods.optional.length} mods`}render(){this.updateDownloadMethod(),this.updateModsCount(),this.updateMandatoryModsCount(),this.updateOptionalModsCount()}}class NDCSelectModsModal{constructor(t){this.element=document.createElement("div"),this.element.classList.add("fixed","top-0","left-0","w-full","h-full","z-50","flex","justify-center","items-center","bg-black/25","backdrop-brightness-50"),this.ndc=t,this.html=`
            <div class="bg-surface-mid p-4 rounded-lg flex flex-col" style="max-width: 850px; width: 100%; height: calc(100vh - 3.5rem);">
                <div class="flex justify-between items-center gap-2 mb-2">
                    <h2 class="font-montserrat font-semibold text-lg leading-none tracking-wider uppercase">Select mods</h2>
                    <div class="flex gap-2">
                        <div class="flex items-center">
                            <span class="p-2 py-1 bg-primary-moderate rounded-full text-xs text-white whitespace-nowrap" id="selectedModsCount">0 mods selected</span>
                        </div>
                        <div class="relative">
                            <button type="button" class="font-montserrat font-semibold text-sm leading-none tracking-wider uppercase text-center leading-none flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-focus-subdued focus:outline-offset-2 rounded p-1 cursor-pointer bg-surface-mid border border-neutral-moderate fill-neutral-moderate text-neutral-moderate aria-expanded:bg-surface-high focus:border-neutral-moderate focus:bg-surface-high hover:border-neutral-moderate hover:bg-surface-high" id="openSelectModsOptionMenu">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 1.5rem; height: 1.5rem; fill: currentcolor;"><title>Options</title><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>
                            </button>
                            <div class="absolute top-0 right-0 bottom-auto left-auto z-10 min-w-48 py-1 px-0 m-0 text-base text-gray-600 border-stroke-subdued bg-surface-low border border-gray-200 rounded-md shadow-lg outline-none hidden" style="transform: translate3d(0px, 38px, 0px);" id="selectModsOptionMenu">
                                <button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" style="height: 44px;" id="selectModsSelectAll">
                                    Select all
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 1.5rem; height: 1.5rem;"><title>Check all mods</title><path d="M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z" style="fill: currentcolor;"/></svg>
                                </button>
                                <button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" style="height: 44px;" id="selectModsDeselectAll">
								Deselect all
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 1.5rem; height: 1.5rem;"><title>Clear selection</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" style="fill: currentcolor;"/></svg>
                                </button>
								<button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" style="height: 44px;" id="selectModsInvertSelection">
                                    Invert selection
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 1.5rem; height: 1.5rem;"><title>Invert selection</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M6.5 9L10 5.5L13.5 9H11V13H9V9H6.5M17.5 15L14 18.5L10.5 15H13V11H15V15H17.5Z" style="fill: currentcolor;"/></svg>
                                </button>
                                <div class="border-t border-stroke-subdued"></div>
                                <button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" id="exportModsSelection" style="height: 44px;">
                                    Export mods selection
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 1.5rem; height: 1.5rem;"><title>Export</title><path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" style="fill: currentcolor;"/></svg>
                                </button>
                                <button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" id="importModsSelection" style="height: 44px;">
                                    Import mods selection
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 1.5rem; height: 1.5rem;"><title>Import</title><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" style="fill: currentcolor;"/></svg>
                                </button>
                                <div class="border-t border-stroke-subdued"></div>
                                <button class="whitespace-nowrap font-montserrat text-sm font-semibold uppercase leading-none tracking-wider first:rounded-t last:rounded-b relative flex w-full items-center gap-x-2 p-2 text-left font-normal hover:bg-surface-mid hover:text-primary-moderate focus:shadow-accent focus:z-10 focus:outline-none text-start justify-between" id="selectModsImportDownloadedMods" style="height: 44px;">
                                    Import downloaded mods
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 1.5rem; height: 1.5rem;"><title>Import</title><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" style="fill: currentcolor;"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center gap-2 mb-2">
                    <input type="search" id="searchMods" class="p-1 border border-stroke-subdued rounded flex-initial text-black w-full h-full sm:w-52" placeholder="Search mods...">
                    <select id="sortMods" class="p-1 border border-stroke-subdued rounded flex-initial text-black w-full h-full sm:w-52">
                        <option value="mod_name_asc">Order by mod name ASC</option>
                        <option value="mod_name_desc">Order by mod name DESC</option>
                        <option value="file_name_asc">Order by file name ASC</option>
                        <option value="file_name_desc">Order by file name DESC</option>
                        <option value="size_asc">Order by size ASC</option>
                        <option value="size_desc">Order by size DESC</option>
                    </select>
                </div>
                <div class="block mb-2 h-full overflow-auto">
                    <div class="hidden sm:flex gap-2 border border-stroke-subdued rounded-lg sm:rounded-none p-2 cursor-pointer select-none">
                        <span class="flex-none w-12 font-montserrat font-semibold text-sm uppercase text-neutral-subdued mod-list-index">Index</span>
                        <span class="flex-1 font-montserrat font-semibold text-sm uppercase text-neutral-subdued">Mod name</span>
                        <span class="flex-1 font-montserrat font-semibold text-sm uppercase text-neutral-subdued">File name</span>
                        <span class="flex-none w-20 font-montserrat font-semibold text-sm uppercase text-neutral-subdued">Size</span>
                        <div class="flex-none w-28 font-montserrat font-semibold text-sm uppercase text-neutral-subdued">Requirement</div>
                    </div>
                    <div id="modsListMobile" class="flex flex-col gap-2 sm:gap-0"></div>
                </div>
                <div class="flex justify-end gap-2">
                    <button class="font-montserrat font-semibold text-sm leading-none tracking-wider uppercase text-center leading-none flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-focus-subdued focus:outline-offset-2 rounded px-2 py-1 cursor-pointer bg-surface-mid border border-neutral-moderate fill-neutral-moderate text-neutral-moderate aria-expanded:bg-surface-high focus:border-neutral-moderate focus:bg-surface-high hover:border-neutral-moderate hover:bg-surface-high" id="cancelSelectModsBtn">Cancel</button>
                    <button class="font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued rounded" id="selectModsBtn">Download selected mods</button>
                </div>
            </div>
        `,this.element.innerHTML=this.html,this.searchMods=this.element.querySelector("#searchMods"),this.sortMods=this.element.querySelector("#sortMods"),this.selectModsSelectAll=this.element.querySelector("#selectModsSelectAll"),this.selectModsInvertSelection=this.element.querySelector("#selectModsInvertSelection"),this.selectModsDeselectAll=this.element.querySelector("#selectModsDeselectAll"),this.modsListMobile=this.element.querySelector("#modsListMobile"),this.selectedModsCount=this.element.querySelector("#selectedModsCount"),this.openSelectModsOptionMenu=this.element.querySelector("#openSelectModsOptionMenu"),this.selectModsOptionMenu=this.element.querySelector("#selectModsOptionMenu"),this.exportModsSelection=this.element.querySelector("#exportModsSelection"),this.importModsSelection=this.element.querySelector("#importModsSelection"),this.selectModsImportDownloadedMods=this.element.querySelector("#selectModsImportDownloadedMods"),this.selectModsBtn=this.element.querySelector("#selectModsBtn"),this.cancelSelectModsBtn=this.element.querySelector("#cancelSelectModsBtn"),this.openSelectModsOptionMenu.addEventListener("click",()=>{this.selectModsOptionMenu.classList.toggle("hidden")}),this.selectModsBtn.addEventListener("click",()=>{const o=[];for(const e of this.ndc.mods.all)this.element.querySelector(`#mod_${e.file.fileId}`).checked&&o.push(e);this.element.remove(),this.ndc.downloadMods(o)}),this.cancelSelectModsBtn.addEventListener("click",()=>{this.element.remove()}),document.addEventListener("click",o=>{this.openSelectModsOptionMenu.contains(o.target)||this.selectModsOptionMenu.classList.add("hidden")})}updateModList(t){this.modsListMobile.innerHTML="";for(const[o,e]of t.entries()){const s=document.createElement("div");s.classList.add("border","border-stroke-subdued","rounded-lg","sm:rounded-none","p-2","cursor-pointer","select-none"),s.innerHTML=`
                <input type="checkbox" id="mod_${e.file.fileId}" class="hidden">
                <div class="hidden sm:flex gap-2">
                    <span class="flex-none w-12 text-primary-strong mod-list-index">#${o+1}</span>
                    <span class="flex-1 text-white">${e.file.mod.name}</span>
                    <span class="flex-1 text-white">${e.file.name}</span>
                    <span class="flex-none w-20 text-white">${convertSize(e.file.size)}</span>
                    <div class="flex-none w-28 text-center">
                        <span class="p-2 py-1 ${e.optional?"bg-surface-mid border border-neutral-moderate":"bg-primary-moderate"} rounded-full text-xs text-white whitespace-nowrap">${e.optional?"Optional":"Mandatory"}</span>
                    </div>
                </div>
                <div class="block sm:hidden">
                    <div class="flex justify-between items-center mb-1">
                        <div class="flex gap-2 items-center">
                            <span class="text-primary-strong mod-list-index">#${o+1}</span>
                        </div>
                        <div class="flex gap-2">
                            <span class="text-white">
                            ${convertSize(e.file.size)}</span>
                            <span class="p-2 py-1 ${e.optional?"bg-surface-mid border border-neutral-moderate":"bg-primary-moderate"} rounded-full text-xs text-white whitespace-nowrap">${e.optional?"Optional":"Mandatory"}</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="text-white">${e.file.mod.name}</div>
                        <div class="text-white">${e.file.name}</div>
                    </div>
                </div>
            `,s.addEventListener("click",n=>{const r=s.querySelector('input[type="checkbox"]');r.checked=!r.checked;const a=r.parentNode;if(a.classList.toggle("bg-primary-subdued"),a.querySelector(".mod-list-index").classList.toggle("text-white"),n.shiftKey&&a.parentNode.dataset.lastChecked){const d=Array.from(a.parentNode.children).indexOf(a),u=a.parentNode.dataset.lastChecked,m=a.parentNode.children[u].querySelector('input[type="checkbox"]').checked;for(let l=Math.min(d,u);l<=Math.max(d,u);l++){const c=a.parentNode.children[l],p=c.querySelector('input[type="checkbox"]');p.checked=m,c.classList.toggle("bg-primary-subdued",m),c.querySelector(".mod-list-index").classList.toggle("text-white",m)}}const i=Array.from(a.parentNode.children).indexOf(a);a.parentNode.dataset.lastChecked=i,this.selectedModsCount.firstChild.textContent=`${this.element.querySelectorAll('input[type="checkbox"]:checked').length} mods selected`}),this.modsListMobile.appendChild(s)}}render(){this.updateModList(this.ndc.mods.all),this.element.addEventListener("click",t=>{t.target===this.element&&this.element.remove()}),this.searchMods.addEventListener("input",()=>{const t=this.searchMods.value.toLowerCase();for(const o of this.ndc.mods.all){const e=this.element.querySelector(`#mod_${o.file.fileId}`).parentNode;o.file.mod.name.toLowerCase().includes(t)||o.file.name.toLowerCase().includes(t)?e.style.display="":e.style.display="none"}}),this.sortMods.addEventListener("change",()=>{const t=this.sortMods.value,o=[...this.ndc.mods.all];switch(t){case"mod_name_asc":o.sort((e,s)=>e.file.mod.name.localeCompare(s.file.mod.name));break;case"mod_name_desc":o.sort((e,s)=>s.file.mod.name.localeCompare(e.file.mod.name));break;case"file_name_asc":o.sort((e,s)=>e.file.name.localeCompare(s.file.name));break;case"file_name_desc":o.sort((e,s)=>s.file.name.localeCompare(e.file.name));break;case"size_asc":o.sort((e,s)=>e.file.size-s.file.size);break;case"size_desc":o.sort((e,s)=>s.file.size-e.file.size);break}this.updateModList(o)}),this.selectModsSelectAll.addEventListener("click",()=>{for(const t of this.ndc.mods.all){const o=this.element.querySelector(`#mod_${t.file.fileId}`);o.checked=!0;const e=o.parentNode;e.classList.add("bg-primary-subdued"),e.querySelector(".mod-list-index").classList.add("text-white")}this.selectedModsCount.firstChild.textContent=`${this.ndc.mods.all.length} mods selected`}),this.selectModsInvertSelection.addEventListener("click",()=>{for(const t of this.ndc.mods.all){const o=this.element.querySelector(`#mod_${t.file.fileId}`);o.checked=!o.checked;const e=o.parentNode;e.classList.toggle("bg-primary-subdued"),e.querySelector(".mod-list-index").classList.toggle("text-white")}this.selectedModsCount.firstChild.textContent=`${this.element.querySelectorAll('input[type="checkbox"]:checked').length} mods selected`}),this.selectModsDeselectAll.addEventListener("click",()=>{for(const t of this.ndc.mods.all){const o=this.element.querySelector(`#mod_${t.file.fileId}`);o.checked=!1;const e=o.parentNode;e.classList.remove("bg-primary-subdued"),e.querySelector(".mod-list-index").classList.remove("text-white")}this.selectedModsCount.firstChild.textContent="0 mods selected"}),this.exportModsSelection.addEventListener("click",()=>{if(!this.element.querySelector('input[type="checkbox"]:checked')){alert("You must select at least one mod to export.");return}const t=[];for(const r of this.ndc.mods.all)this.element.querySelector(`#mod_${r.file.fileId}`).checked&&t.push(r);const o=JSON.stringify(t,null,2),e=new Blob([o],{type:"application/json"}),s=URL.createObjectURL(e),n=document.createElement("a");n.href=s,n.download=`ndc_selected_mods_${this.ndc.gameId}_${this.ndc.collectionId}_${Date.now()}.json`,n.click(),URL.revokeObjectURL(s)}),this.importModsSelection.addEventListener("click",()=>{const t=document.createElement("input");t.type="file",t.accept=".json",t.addEventListener("change",async()=>{const o=t.files[0],e=new FileReader;e.onload=async()=>{const s=JSON.parse(e.result);for(const n of s){const r=this.element.querySelector(`#mod_${n.file.fileId}`);if(r==null)continue;r.checked=!0;const a=r.parentNode;a.classList.add("bg-primary-subdued"),a.querySelector(".mod-list-index").classList.add("text-white")}this.selectedModsCount.firstChild.textContent=`${s.length} mods selected`},e.readAsText(o)}),t.click()}),this.selectModsImportDownloadedMods.addEventListener("click",()=>{const t=document.createElement("input");t.type="file",t.multiple=!0,t.addEventListener("change",async()=>{const o=t.files,e=this.ndc.mods.all.filter(n=>{for(const r of o)if(r.name.includes(n.file.uri))return!0;return!1}).reduce((n,r)=>(n[r.file.fileId]=r,n),{}),s=[];for(const n of this.modsListMobile.childNodes){const r=n.querySelector('input[type="checkbox"]'),a=Number.parseInt(r.id.split("_")[1]);e[a]==null&&(s.push(e[a]),r.checked=!0,n.classList.add("bg-primary-subdued"),n.querySelector(".mod-list-index").classList.add("text-white"))}this.selectedModsCount.firstChild.textContent=`${s.length} mods selected`,s.length===0?alert("All mods are already downloaded."):alert(`Selected ${s.length} mods that are not downloaded yet.`)}),t.click()})}}class NDCUpdateModsModal{constructor(t){this.element=document.createElement("div"),this.element.classList.add("fixed","top-0","left-0","w-full","h-full","z-50","flex","justify-center","items-center","bg-black/25","backdrop-brightness-50"),this.ndc=t,this.html=`
            <div class="bg-surface-mid p-4 rounded-lg flex flex-col" style="max-width: 850px; width: 100%;">
                <div class="loadingSpinner flex justify-center items-center h-full">
                    <svg class="animate-spin" viewBox="0 0 24 24" style="height: 120px; width: 120px;"><path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"></path></svg>
                </div>
                <div class="elementBody hidden">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-montserrat font-semibold text-lg leading-none tracking-wider uppercase">Update collection</h2>
                    </div>
                    <div class="flex justify-center flex-col gap-4 mb-4 h-full">
                        <div>
                            <label for="currentCollectionRevision" class="font-montserrat font-semibold text-sm leading-none tracking-wider uppercase">Select your current Collection Revision</label>
                            <div>
                                <select id="currentCollectionRevision" class="p-1 border border-stroke-subdued rounded flex-initial text-black w-full h-full">
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="newCollectionRevision" class="font-montserrat font-semibold text-sm leading-none tracking-wider uppercase">Select the Collection Revision to update to</label>
                            <div>
                                <select id="newCollectionRevision" class="p-1 border border-stroke-subdued rounded flex-initial text-black w-full h-full">
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="listOfUpdates" class="hidden mb-4 h-full" style="max-height: calc(100vh - 18rem);">
                    </div>
                    <div class="flex justify-end gap-2">
                        <button class="font-montserrat font-semibold text-sm leading-none tracking-wider uppercase text-center leading-none flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-focus-subdued focus:outline-offset-2 rounded px-2 py-1 cursor-pointer bg-surface-mid border border-neutral-moderate fill-neutral-moderate text-neutral-moderate aria-expanded:bg-surface-high focus:border-neutral-moderate focus:bg-surface-high hover:border-neutral-moderate hover:bg-surface-high" id="cancelUpdateModsBtn">Cancel</button>
                        <button class="hidden font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued rounded" id="updateModsBtn">Update</button>
                    </div>
                </div>
            </div>
        `,this.element.innerHTML=this.html,this.currentCollectionRevision=this.element.querySelector("#currentCollectionRevision"),this.newCollectionRevision=this.element.querySelector("#newCollectionRevision"),this.listOfUpdates=this.element.querySelector("#listOfUpdates"),this.updateModsBtn=this.element.querySelector("#updateModsBtn"),this.cancelUpdateModsBtn=this.element.querySelector("#cancelUpdateModsBtn"),this.modsToDownload=[],this.updateModsBtn.addEventListener("click",()=>{this.ndc.downloadMods(this.modsToDownload),this.element.remove()}),this.cancelUpdateModsBtn.addEventListener("click",()=>{this.element.remove()})}async renderListOfUpdates(){if(!this.currentCollectionRevision.value||!this.newCollectionRevision.value){this.updateModsBtn.classList.add("hidden");return}this.listOfUpdates.classList.remove("hidden"),this.listOfUpdates.classList.remove("overflow-auto"),this.listOfUpdates.innerHTML=`<div class="flex justify-center items-center h-full">
        <svg class="animate-spin" viewBox="0 0 24 24" style="height: 120px; width: 120px;"><path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"></path></svg>
        </div>`,this.updateModsBtn.classList.add("hidden");const[t,o]=await Promise.all([this.ndc.fetchMods(this.ndc.collectionId,parseInt(this.currentCollectionRevision.value)),this.ndc.fetchMods(this.ndc.collectionId,parseInt(this.newCollectionRevision.value))]),e=t.modFiles.reduce((i,d)=>(i[d.file.mod.modId]||(i[d.file.mod.modId]=[]),i[d.file.mod.modId].push(d),i),{}),s=o.modFiles.reduce((i,d)=>(i[d.file.mod.modId]||(i[d.file.mod.modId]=[]),i[d.file.mod.modId].push(d),i),{}),n=[],r=[],a=[];for(const[i,d]of Object.entries(s)){const u=e[i]||[];d.forEach(l=>{const c=u.find(p=>p.fileId===l.fileId||p.file.name===l.file.name);c?c.file.version!==l.file.version&&r.push(l):n.push(l)});const m=u.filter(l=>!d.some(c=>c.fileId===l.fileId||c.file.name===l.file.name));a.push(...m)}this.modsToDownload=[...n,...r],this.listOfUpdates.innerHTML=`
            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1">
                    <h3 class="font-montserrat font-semibold text-lg leading-none tracking-wider uppercase text-green-600">
                        Updated Mods
                        <span class="text-sm text-neutral-moderate">(${r.length} mods)</span>
                    </h3>
                    <div class="flex flex-col gap-2">
                        ${r.map(i=>`<div class="flex gap-2"><span class="flex-1">${i.file.mod.name}</span></div>`).join("")}
                    </div>
                </div>
                <div class="flex-1">
                    <h3 class="font-montserrat font-semibold text-lg leading-none tracking-wider uppercase text-sky-500">
                        Added Mods
                        <span class="text-sm text-neutral-moderate">(${n.length} mods)</span>
                    </h3>
                    <div class="flex flex-col gap-2">
                        ${n.map(i=>`<div class="flex gap-2"><span class="flex-1">${i.file.mod.name}</span></div>`).join("")}
                    </div>
                </div>
                <div class="flex-1">
                    <h3 class="flex font-montserrat font-semibold text-lg leading-none tracking-wider uppercase text-red-600">
                        <svg id="deletedModsInfo" class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" style="width: 1rem; height: 1rem; cursor: pointer"><title>information</title><path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" style="fill: currentcolor"></path></svg>
                        Removed Mods
                        <span class="text-sm text-neutral-moderate">(${a.length} mods)</span>
                    </h3>
                    <div class="flex flex-col gap-2">
                        ${a.map(i=>`<div class="flex gap-2"><span class="flex-1">${i.file.mod.name}</span></div>`).join("")}
                    </div>
                </div>
            </div>
        `,this.listOfUpdates.classList.add("overflow-auto"),this.updateModsBtn.classList.remove("hidden"),this.listOfUpdates.querySelector("#deletedModsInfo").addEventListener("click",()=>{alert("The deleted mods is just for information, the script will not delete any mods from your collection.")})}async fetchRevisions(){const t=await fetch("https://api-router.nexusmods.com/graphql",{headers:{"content-type":"application/json"},referrer:document.location.href,referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify({query:"query CollectionRevisions ($domainName: String, $slug: String!) { collection (domainName: $domainName, slug: $slug) { revisions {adultContent, createdAt, discardedAt, id, latest, revisionNumber, revisionStatus, totalSize, modCount, collectionChangelog { description, id}, gameVersions { reference } } } }",variables:{domainName:this.ndc.gameId,slug:this.ndc.collectionId},operationName:"CollectionRevisions"}),method:"POST",mode:"cors",credentials:"include"});if(!t.ok)return;const o=await t.json();if(o.data.collection)return o.data.collection.revisions}async render(){const t=await this.fetchRevisions();if(!t){this.element.innerHTML=`
                <div class="bg-surface p-4 rounded-lg flex flex-col gap-4">
                    <h2 class="font-montserrat font-semibold text-lg leading-none tracking-wider uppercase">Update collection</h2>
                    <p class="text-neutral-moderate">An error occurred while fetching the collection revisions. Please try again later.</p>
                </div>
            `;return}this.currentCollectionRevision.innerHTML=this.newCollectionRevision.innerHTML='<option value="">Select a collection revision</option>',t.forEach(e=>{const s=`Revision ${e.revisionNumber} - ${(e.totalSize/1048576).toFixed(2)} MB - ${new Date(e.createdAt).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}`;this.currentCollectionRevision.appendChild(new Option(s,e.revisionNumber)),this.newCollectionRevision.appendChild(new Option(s,e.revisionNumber))});const o=async()=>await this.renderListOfUpdates();this.newCollectionRevision.addEventListener("change",o),this.currentCollectionRevision.addEventListener("change",o),this.element.querySelector(".loadingSpinner").classList.add("hidden"),this.element.querySelector(".elementBody").classList.remove("hidden"),this.element.addEventListener("click",e=>{e.target===this.element&&this.element.remove()})}}class NDCProgressBar{static STATUS_DOWNLOADING=0;static STATUS_PAUSED=1;static STATUS_FINISHED=2;static STATUS_STOPPED=3;static STATUS_TEXT={[NDCProgressBar.STATUS_DOWNLOADING]:"Downloading...",[NDCProgressBar.STATUS_PAUSED]:"Paused",[NDCProgressBar.STATUS_FINISHED]:"Finished",[NDCProgressBar.STATUS_STOPPED]:"Stopped"};constructor(t,o={}){this.element=document.createElement("div"),this.element.classList.add("flex","flex-wrap","w-100"),this.element.style.display="none",this.ndc=t,this.modsCount=0,this.progress=0,this.skipPause=!1,this.skipTo=!1,this.skipToIndex=0,this.status=NDCProgressBar.STATUS_DOWNLOADING,this.html=`
            <div class="flex-1 relative w-100 min-h-9 bg-surface-mid rounded-l overflow-hidden" id="progressBar">
                <div class="absolute top-0 left-0 w-0 h-full bg-primary-moderate" style="transition: width 0.3s ease 0s; width: 0%;" id="progressBarFill"></div>
                <div class="absolute top-0 left-0 w-full h-full cursor-pointer grid grid-cols-3 items-center text-white font-montserrat font-semibold text-sm leading-none tracking-wider uppercase" id="progressBarText">
                    <div class="ml-2" id="progressBarProgress">${this.progress}%</div>
                    <div class="text-center" id="progressBarTextCenter">Downloading...</div>
                    <div class="text-right mr-2" id="progressBarTextRight">${this.progress}/${this.modsCount}</div>
                </div>
            </div>
            <div class="flex" id="actionBtnGroup">
                <button class="font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued justify-between" id="playPauseBtn">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M14,19H18V5H14M6,19H10V5H6V19Z" style="fill: currentcolor;"></path></svg>
                </button>
                <button class="font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued justify-between rounded-r" id="stopBtn">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M18,18H6V6H18V18Z" style="fill: currentcolor;"></path></svg>
                </button>
            </div>
            <div class="flex my-2 justify-between" style="flex-basis: 100%;" id="toolbarContainer">
				<div class="flex gap-2">
					<div id="downloadSpeedInputContainer">
						<div class="flex items-center gap-2 mb-2">
							<label class="text-white font-montserrat font-semibold text-sm leading-none tracking-wider uppercase" for="downloadSpeedInput">DL Speed (mb/s)</label>
							<svg id="downloadSpeedInfo" class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" style="width: 1rem; height: 1rem; cursor: pointer;"><title>information</title><path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" style="fill: currentcolor;"/></svg>
						</div>
						<input class="text-md text-neutral-subdued border-neutral-subdued bg-surface-mid rounded border indent-2 outline-none hover:border-white focus:border-white focus:text-white p-1 w-20" type="number" min="0" step="any" placeholder="1.5" value="${this.ndc.downloadSpeed}" id="downloadSpeedInput">
					</div>
					<div id="pauseBetweenDownloadInputContainer">
						<div class="flex items-center gap-2 mb-2">
							<label class="text-white font-montserrat font-semibold text-sm leading-none tracking-wider uppercase" for="pauseBetweenDownloadInput">Extra pause</label>
							<svg id="extraPauseInfo" class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation" style="width: 1rem; height: 1rem; cursor: pointer;"><title>information</title><path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" style="fill: currentcolor;"/></svg>
						</div>
						<input class="text-md text-neutral-subdued border-neutral-subdued bg-surface-mid rounded border indent-2 outline-none hover:border-white focus:border-white focus:text-white p-1 w-20" type="number" min="0" placeholder="5" value="${this.ndc.pauseBetweenDownload}" id="pauseBetweenDownloadInput">
					</div>
				</div>
                <div class="flex gap-2 items-center" id="skipContainer">
                    <button class="rounded font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued justify-between" id="skipNextBtn">
                        Skip pause
                    </button>
                    <button class="rounded font-montserrat font-semibold text-sm leading-none tracking-wider uppercase flex gap-x-2 justify-center items-center transition-colors relative min-h-9 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2 px-2 py-1 cursor-pointer bg-primary-moderate fill-font-primary text-font-primary border-transparent focus:bg-primary-strong hover:bg-primary-subdued justify-between" id="skipToIndexBtn">
                        Skip to index
                    </button>
                    <input class="text-md text-neutral-subdued border-neutral-subdued bg-surface-mid rounded border indent-2 outline-none hover:border-white focus:border-white focus:text-white p-1 w-20" type="number" min="0" placeholder="Index" id="skipToIndexInput">
                </div>
            </div>
        `,this.element.innerHTML=this.html;const e=this.element.querySelector("#downloadSpeedInfo"),s=this.element.querySelector("#extraPauseInfo");this.progressBarFill=this.element.querySelector("#progressBarFill"),this.progressBarProgress=this.element.querySelector("#progressBarProgress"),this.progressBarTextCenter=this.element.querySelector("#progressBarTextCenter"),this.progressBarTextRight=this.element.querySelector("#progressBarTextRight"),this.playPauseBtn=this.element.querySelector("#playPauseBtn"),this.stopBtn=this.element.querySelector("#stopBtn"),this.downloadSpeedInput=this.element.querySelector("#downloadSpeedInput"),this.pauseBetweenDownloadInput=this.element.querySelector("#pauseBetweenDownloadInput"),this.skipNextBtn=this.element.querySelector("#skipNextBtn"),this.skipToIndexBtn=this.element.querySelector("#skipToIndexBtn"),this.skipToIndexInput=this.element.querySelector("#skipToIndexInput"),e.addEventListener("click",()=>{alert(`"DL Speed" is the download speed in mb/s.
It is used to calculate the pause between downloads.

/!\\/!\\/!\\/!\\/!\\/!\\
It doesnt affect the real download speed. It is only used has a reference to calculate the pause between downloads.
/!\\/!\\/!\\/!\\/!\\/!\\`)}),s.addEventListener("click",()=>{alert(`"Extra pause" is the time in seconds the script waits before starting the next download. Without it, downloads begin immediately but Vortex may become unresponsive with large collections.

A supplementary pause is calculated based on the mod file size and download speed (1.5mb/s), noticeable only with large mods.

If "extra pause" is set to 0, the calculated pause is ignored.`)}),this.playPauseBtn.addEventListener("click",()=>{const n=this.status===NDCProgressBar.STATUS_DOWNLOADING?NDCProgressBar.STATUS_PAUSED:NDCProgressBar.STATUS_DOWNLOADING;this.setStatus(n)}),this.stopBtn.addEventListener("click",()=>{this.setStatus(NDCProgressBar.STATUS_STOPPED)}),this.downloadSpeedInput.addEventListener("change",async n=>{this.ndc.downloadSpeed=Number.parseFloat(n.target.value),await GM.setValue("downloadSpeed",this.ndc.downloadSpeed)}),this.pauseBetweenDownloadInput.addEventListener("change",async n=>{this.ndc.pauseBetweenDownload=Number.parseInt(n.target.value),await GM.setValue("pauseBetweenDownload",this.ndc.pauseBetweenDownload)}),this.skipNextBtn.addEventListener("click",()=>{this.skipPause=!0,this.setStatus(NDCProgressBar.STATUS_DOWNLOADING)}),this.skipToIndexBtn.addEventListener("click",()=>{const n=Number.parseInt(this.skipToIndexInput.value);n>this.progress&&n<=this.modsCount&&(this.skipTo=!0,this.skipToIndex=n,this.setStatus(NDCProgressBar.STATUS_DOWNLOADING))})}setState(t){Object.assign(this,t),this.render()}setModsCount(t){this.setState({modsCount:t})}setProgress(t){this.setState({progress:t})}incrementProgress(){this.setState({progress:this.progress+1})}setStatus(t){this.setState({status:t}),this.progressBarTextCenter.innerHTML=NDCProgressBar.STATUS_TEXT[t]}getProgressPercent(){return(this.progress/this.modsCount*100).toFixed(2)}updateProgressBarFillWidth(){this.progressBarFill.style.width=`${this.getProgressPercent()}%`}updateProgressBarTextProgress(){this.progressBarProgress.innerHTML=`${this.getProgressPercent()}%`}updateProgressBarTextRight(){this.progressBarTextRight.innerHTML=`${this.progress}/${this.modsCount}`}updatePlayPauseBtn(){this.playPauseBtn.innerHTML=this.status===NDCProgressBar.STATUS_PAUSED?'<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M8,5.14V19.14L19,12.14L8,5.14Z" style="fill: currentcolor;"></path></svg>':'<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M14,19H18V5H14M6,19H10V5H6V19Z" style="fill: currentcolor;"></path></svg>'}updateDownloadSpeedInput(){this.downloadSpeedInput.value=this.ndc.downloadSpeed}updatePauseBetweenDownloadInput(){this.pauseBetweenDownloadInput.value=this.ndc.pauseBetweenDownload}render(){this.updateProgressBarFillWidth(),this.updateProgressBarTextProgress(),this.updateProgressBarTextRight(),this.updatePlayPauseBtn(),this.updateDownloadSpeedInput(),this.updatePauseBetweenDownloadInput()}}class NDCLogConsole{static TYPE_NORMAL="NORMAL";static TYPE_ERROR="ERROR";static TYPE_INFO="INFO";constructor(t,o={}){this.element=document.createElement("div"),this.element.classList.add("flex","flex-col","w-100","gap-3","mt-3"),this.ndc=t,this.hidden=!1,this.html=`
            <div class="flex flex-col w-100 gap-3 mt-3">
                <button class="w-full font-montserrat font-semibold text-sm leading-none tracking-wider uppercase" id="toggleLogsButton">
                    Hide logs
                </button>
                <div class="w-full bg-surface-low rounded overflow-y-auto text-white font-semibold text-sm border border-primary" style="height: 10rem; resize: vertical;" style="font-family: sans-serif;" id="logContainer">
                </div>
            </div>
        `,this.element.innerHTML=this.html,this.toggle=this.element.querySelector("#toggleLogsButton"),this.logContainer=this.element.querySelector("#logContainer"),this.toggle.addEventListener("click",()=>{this.hidden=!this.hidden,logContainer.style.display=this.hidden?"none":"",this.toggle.innerHTML=this.hidden?"Show logs":"Hide logs"})}log(t,o=NDCLogConsole.TYPE_NORMAL){const e=document.createElement("div");return e.classList.add("flex","gap-x-1","px-2","py-1"),o===NDCLogConsole.TYPE_ERROR?e.classList.add("text-danger-moderate"):o===NDCLogConsole.TYPE_INFO&&e.classList.add("text-info-moderate"),e.innerHTML=`<span>[${new Date().toLocaleTimeString()}]</span><span class="ndc-log-message flex gap-1">${t}</span>`,e.message=e.querySelector(".ndc-log-message"),this.logContainer.appendChild(e),this.logContainer.scrollTop=this.logContainer.scrollHeight,console.log(`${t}`),e}clear(){this.logContainer.innerHTML=""}}let previousRoute=null,ndc=null;function extractRouteDetails(h){const t=h.split("/").filter(Boolean);return t.length>=4&&t[2]==="collections"?{gameDomain:t[1],collectionSlug:t[3],revisionNumber:t.length>5?t[5]:null}:null}function handleRouteChange(){const h=window.location.pathname,t=extractRouteDetails(h);if(t){const{gameDomain:o,collectionSlug:e,revisionNumber:s}=t,n=`${o}/${e}/`,r=s?parseInt(s,10):null;(previousRoute!==n||ndc?.revision!==r)&&(previousRoute=n,ndc&&ndc.element.remove(),ndc=new NDC(o,e,r),ndc.init().then(()=>{const a=document.querySelector("#mainContent > div > div.relative > div.next-container");a&&a.append(ndc.element)}))}}const observer=new MutationObserver(()=>{handleRouteChange()});observer.observe(document.body,{childList:!0,subtree:!0}),handleRouteChange();
