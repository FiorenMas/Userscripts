// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewerAdult.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewerAdult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @version       2026.08.28.build-2003
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/9824/9824312.png
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
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hdoujin\.org\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai)\.com\/(?:[a-z]{2}\/)?(?:comic|reader)\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?hentainexus.com\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?nhentai\.net\/g\/.+/
// @include       /https?:\/\/(www\.)?nhentai\.to\/g\/\d+\/\d+/
// @include       /https?:\/\/(www\.)?nhentai\.xxx\/g\/\d+\/\d+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai\.(com|app)\/(reader|library|view_uploads)\/.+/
// @include       /https?:\/\/(www|es|fr|it|pt|ru)?\.?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
(function(){var Xt=Object.defineProperty,pe=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),Kt=(e,t)=>{let o={};for(var n in e)Xt(o,n,{get:e[n],enumerable:!0});return t||Xt(o,Symbol.toStringTag,{value:"Module"}),o};function yt(e){return _.isEmpty(e)||_.isNil(e)}function q(e){return yt(e)||e===!1||e===0}function Jt(e){return"listImages"in e&&!q(e.listImages)}function eo(e){return"listPages"in e&&!q(e.listPages)}function yn(e){return"bruteForce"in e&&!q(e.bruteForce)}var y=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),E=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function En(e,t){return t in e}var In={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www|es|fr|it|pt|ru)?\.?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[y.ENGLISH],category:E.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:_.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}};function _n(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function f(...e){return console.log("MangaOnlineViewer-adult: ",...e),e}function B(...e){return["dev","development"].includes("adult")&&console.info("MangaOnlineViewer: ",...e),e}function to(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):B("Fake Removing: ",e)}var Et=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function An(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(B("Fake Getting: ",e," = ",t),t)}function oo(e,t){const o=An(e,t);if(typeof o=="string"&&o.trim()!=="")try{return JSON.parse(o)}catch(n){return f("Failed to parse JSON from storage",e,n),t}return o}function xn(e){return oo("settings",e)}function Mn(e){return oo(window.location.hostname,e)}function no(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),f("Setting: ",e," = ",t),t.toString()):(B("Fake Setting: ",e," = ",t),String(t))}function Sn(e){return no("settings",e)}function ro(e){return no(window.location.hostname,e)}function Cn(){const e=bowser.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function On(){return Et.scriptHandler??"Greasemonkey"}var Ue=()=>{const e=bowser.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},Tn=()=>Ue()==="mobile"||Ue()==="tablet",It=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),io=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(o,n,r,i)=>{i&&e(r)})}catch(o){f("Failed to add settings listener",o)}};function $n(e,t=document.body){return new Promise(o=>{const n=document.querySelector(e);if(n){o(n);return}const r=new MutationObserver(()=>{const i=document.querySelector(e);i&&(o(i),r.disconnect())});r.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function _t(e,t=250){return new Promise(o=>{const n=setInterval(()=>{e()&&(clearInterval(n),o(!0))},t)})}function ao(e,t,o=document.body){return new Promise(n=>{const r=o.querySelector(e);if(r?.getAttribute(t)){n(r.getAttribute(t)??"");return}const i=new MutationObserver(()=>{const a=o.querySelector(e);a?.getAttribute(t)&&(n(a.getAttribute(t)??""),i.disconnect())});i.observe(o,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function lo(e,t=document.body){return new Promise(o=>{if(!q(unsafeWindow[e])){o(unsafeWindow[e]);return}const n=new MutationObserver(()=>{q(unsafeWindow[e])||(o(unsafeWindow[e]),n.disconnect())});n.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function Ln(e=1e3,t){return new Promise(o=>{setTimeout(()=>o(t),e)})}async function Dn(e,t=1e3){const[o]=await Promise.all([e,Ln(t)]);return o}async function Rn(e,t=5e3){const o=new Promise((n,r)=>{setTimeout(()=>r(new Error(`Timeout after ${t} ms`)),t)});return Promise.race([e,o])}async function so(e,t,o,n,r="img",i="src"){const a=document.createElement("div");a.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(a),e();const s=document.querySelector(o),u=document.querySelector(n),m=[];for(let v=1;v<=t;v+=1)m[v-1]=await Dn(ao(r,i,u??document.body),100),u?.querySelector(r)?.removeAttribute(i),s?.dispatchEvent(new Event("click"));return m}var Nn={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[y.ENGLISH],category:E.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],t=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),o=e?.length??parseInt(t??"0",10),n={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(r=>r?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:o,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(n.listImages=await so(()=>{const r=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)r?.dispatchEvent(new Event("click"))},o,".page-next",".p-picture",".photo img","src"))}};return n}},Pn={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[y.ENGLISH],category:E.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},o=await fetch("/api/getBookByID",t).then(async n=>n.json());return{title:o.results.title,series:`/g/${o.results.id}/`,pages:o.results.total_page,prev:"#",next:"#",listImages:Array(o.results.total_page).fill(0).map((n,r)=>`${o.results.image_server.replace(".com",".so")+o.results.id}/${r+1}.jpg`)}}},zn={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[y.RAW],category:E.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},Bn={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[y.ENGLISH],category:E.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},Hn={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[y.ENGLISH],category:E.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file")??"")}}},Gn={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[y.SPANISH],category:E.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")??"").filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},Vn={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[y.ENGLISH],obs:"May get your IP Banned, use with moderation",category:E.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),o=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),n=Array(t).fill(0).map(async(i,a)=>fetch(`${o}?p=${a}`).then(async s=>s.text()).then(s=>new DOMParser().parseFromString(s,"text/html"))),r=(await Promise.all(n)).flatMap(i=>[...i.querySelectorAll("#gdt a")].map(a=>a.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:o,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:r,img:"#img",lazy:!0,async reload(i){const a=`${r[i-1]}`,s=await fetch(a).then(m=>m.text()).then(m=>/nl\('([\d-]+)'\)/.exec(m)?.[1]),u=`${a}${a.indexOf("?")?"&":"?"}nl=${s}`;return fetch(u).then(m=>m.text()).then(m=>new DOMParser()?.parseFromString(m,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},Fn={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[y.ENGLISH],category:E.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src")??"")}}},Wn={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[y.ENGLISH],category:E.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file")??"")}}},Un={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[y.SPANISH],category:E.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},Zn={name:"HDoujin",url:/https?:\/\/(www\.)?hdoujin\.org\/.+/,homepage:"https://hdoujin.org/",language:[y.ENGLISH],category:E.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:o,entries:n}=history.state.memo.data,r=n.map(i=>`${o}/${i.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:r.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:r}}},jn={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[y.ENGLISH],category:E.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},qn={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[y.ENGLISH],category:E.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,o)=>window.location.href.replace(/\/\d*\/?$/,`/${o+1}`)),img:"#gimg",lazyAttr:"data-src"}}},Qn={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[y.ENGLISH],category:E.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},Yn=/^blob:(.+?)\/(.+)$/;function Xn(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function Kn(e){return Yn.test(e)}function co(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}var Jn={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[y.ENGLISH],category:E.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((o,n)=>`${t+(n+1)}.${co(unsafeWindow.g_th[n+1][0])}`)}}},er={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai)\.com\/(?:[a-z]{2}\/)?(?:comic|reader)\/.+\/\d+/,homepage:["https://hentaihand.com/","https://nhentai.com/"],language:[y.ENGLISH],category:E.HENTAI,waitEle:".reader img, #reader img, .comic-page img, .page-image img, #image-container img, .pages-selector, .comic-title",async run(){const e=document.querySelector('.reader-header h5 a, .comic-title a, a.back-to-gallery, a.go-back, a[href*="/comic/"]')?.getAttribute("href")??window.location.href.replace(/\/\d+\/?$/,""),t=document.querySelector(".reader-header h5, .comic-title, h1.title, h1")?.textContent?.trim()??document.querySelector("title")?.textContent?.replace(/\s*-\s*Page.*$/i,"")?.trim(),o=[...document.querySelectorAll(".reader img, #reader img, .comic-page img, .page-image img, .reader-images img")];if(o.length>1)return{title:t,series:e,pages:o.length,prev:"#",next:"#",listImages:o.map(i=>i.getAttribute("data-src")??i.getAttribute("src")??"")};try{const i=e.startsWith("http")?e:`${window.location.origin}${e}`,a=await fetch(i).then(async m=>m.text()),s=new DOMParser().parseFromString(a,"text/html"),u=[...s.querySelectorAll(".comic-thumb, .gallery-thumb, .thumbnails > div, #thumbnail-container .thumb-container, .thumbs > div, .grid > div")];if(u.length>0){const m=u.map(v=>{const w=v.querySelector("img");return(w?.getAttribute("data-src")??w?.getAttribute("src")??"").replace(/\/thumb\//,"/image/").replace(/t\.([a-zA-Z0-9]+)$/,".$1")}).filter(v=>v.length>0);return{title:s.querySelector("h1.title, h1, .comic-title")?.textContent?.trim()??t,series:e,pages:m.length,prev:"#",next:"#",listImages:m}}}catch{}const n=document.querySelectorAll("select.pages-selector option, select.page-select option, .page-dropdown option").length||o.length||1,r=(o[0]?.getAttribute("data-src")??o[0]?.getAttribute("src")??document.querySelector("#image-container img, .reader img")?.getAttribute("src")??"").match(/^(.*\/)(0*1)(\.[a-zA-Z0-9]+)(?:\?.*)?$/);if(r&&n>1){const[,i,a,s]=r,u=a.length;return{title:t,series:e,pages:n,prev:"#",next:"#",listImages:Array.from({length:n},(m,v)=>`${i}${String(v+1).padStart(u,"0")}${s}`)}}return{title:t,series:e,pages:n,prev:"#",next:"#",listImages:o.map(i=>i.getAttribute("data-src")??i.getAttribute("src")??"")}}},tr={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[y.ENGLISH],category:E.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},or={name:"HentaiNexus",url:/https?:\/\/(www\.)?hentainexus.com\/read\/.+/,homepage:"https://hentainexus.com/",language:[y.ENGLISH],category:E.HENTAI,waitVar:"pageData",run(){const e=unsafeWindow.pageData?.map(t=>t.image_avif??t.image_fallback??t.image);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},nr={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[y.ENGLISH],category:E.HENTAI,async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async i=>i.json()).then(i=>i.nodes[2].data),o=t?.[t.find(i=>i?.gallery)?.gallery],n=t?.[o?.hash]||t?.[t.find(i=>i?.hash&&i?.id).hash],r=t?.[o.images].map(i=>t[i]).map(i=>t[i.filename]);return{title:t?.[o.title],series:window.location.href.replace(/read\/.+/,""),pages:r?.length,prev:"#",next:"#",listImages:r?.map(i=>`${e}/image/${n}/${i}`)}}},rr={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[y.ENGLISH],category:E.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},ir={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[y.ENGLISH],category:E.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),o=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),n=await lo("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:o,prev:"#",next:"#",listImages:Array(o).fill(0).map((r,i)=>`//${n}/${t}/${e}/${i+1}.${co(unsafeWindow.g_th[i+1][0])}`)}}},ar={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[y.ENGLISH,y.SPANISH],category:E.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},lr={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[y.ENGLISH],category:E.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),o=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),n="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",r=Array(t).fill(0).map(async(a,s)=>{const u=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${o}"}],"display":"position","items_per_page":50,"page":${s+1}}}${n}`;return GM.xmlHttpRequest({method:"GET",url:u}).then(m=>JSON.parse(m.responseText))}),i=(await Promise.all(r)).flatMap(a=>a.data.picture.list.items.map(s=>s.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:i}}},ho=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function uo(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(o=>/.*(src|url).*/i.test(o.name)&&!/^.*(blank|lazy|loading).*$/.test(o.value));return t.length===0?"":t.find(o=>ho.test(o.value))?.value??e?.getAttribute("src")??""})}var sr={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[y.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:E.MANGA,waitFunc:()=>{const e=uo();return e.length>0&&e.every(t=>t&&ho.test(t))},run(){const e=uo();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}},name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:E.HENTAI},cr={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[y.ENGLISH],category:E.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",t=[...(await fetch(e).then(async o=>o.text()).then(o=>new DOMParser().parseFromString(o,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(o=>o.getAttribute("imageURL")??"")}}},dr={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[y.ENGLISH],category:E.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((o,n)=>window.location.href.replace(/\/\d+$/,`/${n+1}`)),img:".gallery-slide img"}}},hr={j:"jpg",p:"png",w:"webp",g:"gif"},ur=[zn,Bn,Hn,Gn,Nn,Vn,Wn,Fn,Un,Zn,jn,qn,Qn,Jn,er,tr,or,nr,rr,ir,ar,lr,cr,dr,{name:"nHentai.net",url:/https?:\/\/(www\.)?nhentai\.net\/g\/.+/,homepage:"https://nhentai.net/",language:[y.ENGLISH],category:E.HENTAI,waitEle:"#image-container img",async run(){const e=window.location.pathname.split("/")[2],t=document.querySelector(".go-back, .back_btn")?.getAttribute("href")??`/g/${e}/`,o=document.querySelector("title")?.textContent?.split("- Page")[0]?.trim()??"";try{const a=await fetch(`https://nhentai.net/api/gallery/${e}`).then(async s=>s.json());if(a?.media_id&&Array.isArray(a.images?.pages))return{title:a.title?.pretty??a.title?.english??o,series:t,pages:a.images.pages.length,prev:"#",next:"#",listImages:a.images.pages.map((s,u)=>`https://i.nhentai.net/galleries/${a.media_id}/${u+1}.${hr[s.t]||"jpg"}`)}}catch{}try{const a=await fetch("https://nhentai.net/api/v2/config").then(async u=>u.json()),s=await fetch(`https://nhentai.net/api/v2/galleries/${e}`).then(async u=>u.json());if(Array.isArray(s?.pages)&&Array.isArray(a?.image_servers))return{title:o,series:t,pages:s.pages.length,prev:"#",next:"#",listImages:s.pages.map(u=>`${a.image_servers[Math.floor(Math.random()*a.image_servers.length)]}/${u.path}`)}}catch{}try{const a=await fetch(`https://nhentai.net/g/${e}/`).then(async m=>m.text()),s=new DOMParser().parseFromString(a,"text/html"),u=[...s.querySelectorAll("#thumbnail-container .thumb-container")];if(u.length>0){const m=u.map(v=>{const w=v.querySelector("img");return(w?.getAttribute("data-src")??w?.getAttribute("src")??"").replace(/\/\/t(\d*)\.nhentai\.net/,"//i$1.nhentai.net").replace(/t\.([a-zA-Z0-9]+)$/,".$1")}).filter(v=>v.length>0);return{title:s.querySelector("#info h1")?.textContent?.trim()??o,series:t,pages:m.length,prev:"#",next:"#",listImages:m}}}catch{}const n=document.querySelector("#image-container img")?.getAttribute("src")??"",r=n.match(/^(https?:\/\/.*\/galleries\/[^/]+\/)\d+\.([a-zA-Z0-9]+)$/),i=Number(document.querySelector(".num-pages")?.textContent?.trim()??0)||1;return{title:o,series:t,pages:i,prev:"#",next:"#",listImages:r?Array.from({length:i},(a,s)=>`${r[1]}${s+1}.${r[2]}`):[n]}}},{name:"nHentai.to",url:/https?:\/\/(www\.)?nhentai\.to\/g\/\d+\/\d+/,homepage:"https://nhentai.to/",language:[y.ENGLISH],category:E.HENTAI,waitEle:"#image-container img",async run(){const e=document.querySelector(".back_btn, .go-back")?.getAttribute("href")??window.location.pathname.replace(/\/\d+\/?$/,"/"),t=document.querySelector("#image-container img")?.getAttribute("src")??"",o=Number(document.querySelector(".num-pages")?.textContent?.trim()??0);try{const i=e.startsWith("http")?e:`${window.location.origin}${e}`,a=await fetch(i).then(async m=>m.text()),s=new DOMParser().parseFromString(a,"text/html"),u=[...s.querySelectorAll("#thumbnail-container .thumb-container")];if(u.length>0){const m=u.map(v=>{const w=v.querySelector("img");return(w?.getAttribute("data-src")??w?.getAttribute("src")??"").replace(/t\.([a-zA-Z0-9]+)$/,".$1")}).filter(v=>v.length>0);return{title:s.querySelector("#info h1")?.textContent?.trim()??document.querySelector("title")?.textContent?.split("> Page")[0]?.trim(),series:e,pages:m.length,prev:"#",next:"#",listImages:m}}}catch{}const n=t.match(/^(https?:\/\/.*\/galleries\/[^/]+\/)\d+\.([a-zA-Z0-9]+)$/),r=o||1;return{title:document.querySelector("title")?.textContent?.split("> Page")[0]?.trim(),series:e,pages:r,prev:"#",next:"#",listImages:n?Array.from({length:r},(i,a)=>`${n[1]}${a+1}.${n[2]}`):[t]}}},{name:"nHentai.xxx",url:/https?:\/\/(www\.)?nhentai\.xxx\/g\/\d+\/\d+/,homepage:"https://nhentai.xxx/",language:[y.ENGLISH],category:E.HENTAI,waitEle:"#pages, #fimg, .reader_wrap",run(){const e=document.querySelector("#server_id")?.value??document.querySelector("#load_server")?.value??"",t=document.querySelector("#image_dir")?.value??document.querySelector("#load_dir")?.value??"",o=document.querySelector("#gallery_id")?.value??document.querySelector("#load_id")?.value??"",n=Number(document.querySelector("#pages")?.value??document.querySelector("#load_pages")?.value??document.querySelector(".pages_btn .tp")?.textContent?.trim()??0),r=document.querySelector("#fimg"),i=r?.getAttribute("data-src")??r?.getAttribute("src")??"",a=i.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/),s=a?a[1]:"webp",u=i?i.replace(/\/\d+\.[a-zA-Z0-9]+(?:\?.*)?$/,""):e&&t&&o?`https://i${e}.nhentaimg.com/${t}/${o}`:"";return{title:document.querySelector("title")?.textContent?.split("- Page")[0]?.trim()??r?.getAttribute("alt")?.replace(/\s*page\s*\d+\s*full.*$/i,"")?.trim(),series:document.querySelector(".back_btn, .go-back")?.getAttribute("href")??window.location.pathname.replace(/\/\d+\/?$/,"/"),pages:n,prev:"#",next:"#",listImages:Array.from({length:n},(m,v)=>`${u}/${v+1}.${s}`)}}},Pn,{name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[y.SPANISH],category:E.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(t=>t.getAttribute("src")??"")}}},{name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[y.ENGLISH],category:E.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((o,n)=>e.replace(/\/\d+\./,`/${n+1}.`))}}},{name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[y.ENGLISH],category:E.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:o,entries:n}=history.state.memo.data,r=n.map(i=>`${o}/${i.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:r.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:r}}},{name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[y.ENGLISH],category:E.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(t=>t.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},{name:"TuMangaOnline",url:/https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,homepage:"https://zonatmo.org/",language:[y.SPANISH],category:E.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option")],o=e.length>1?e.length:t.length;return{title:document.querySelector("title")?.textContent?.trim(),series:(document.querySelector('a[title="Volver"]')??document.querySelector(".breadcrumb-item:nth-child(2) a")??document.querySelector(".book-name a")??document.querySelector(".breadcrumb-item a"))?.getAttribute("href"),pages:o||1,prev:(document.querySelector(".chapter-prev a")??document.querySelector(".prev_page")??document.querySelector("a.prev-chapter")??document.querySelector(".chapter-prev-btn"))?.getAttribute("href"),next:(document.querySelector(".chapter-next a")??document.querySelector(".next_page")??document.querySelector("a.next-chapter")??document.querySelector(".chapter-next-btn"))?.getAttribute("href"),...e.length<=1&&t.length>1?{listPages:Array(t.length).fill(0).map((n,r)=>`${window.location.href.replace(/\/\d+$/,"")}/${r+1}`)}:{listImages:e.map(n=>n.getAttribute("data-src")??n.getAttribute("data-original")??n.getAttribute("src")??"")},img:"#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img",before(){if(window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade")),window.location.pathname.includes("view_uploads")){const n=document.querySelector("a.btn.btn-primary, .btn-primary a, a.btn-block");n&&n.click()}}}},name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai\.(com|app)\/(reader|library|view_uploads)\/.+/,homepage:"https://tmohentai.app/",language:[y.SPANISH],category:E.HENTAI},In,{name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[y.ENGLISH],category:E.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",o=`https://www.tsumino.com/Read/Load?q=${e}`,n=await fetch(o).then(async r=>r.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:n.reader_start_url,pages:n.reader_page_total,prev:"#",next:"#",listImages:Array(n.reader_page_total).fill(0).map((r,i)=>t.replace("[PAGE]",`${i+1}`))}}},{name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[y.SPANISH],category:E.HENTAI,waitEle:".pp-comic-content img",run(){const e=[...document.querySelectorAll(".pp-comic-content img")];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},{name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[y.ENGLISH,y.RAW,y.CHINESE],category:E.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},{name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[y.ENGLISH],category:E.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},{name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[y.ENGLISH],category:E.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},{name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[y.ENGLISH],category:E.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,t={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){t.listImages=await so(()=>{const o=document.querySelector("select option");o&&(o.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return t}},sr];async function Te(e,t,o,n){e!==void 0&&(f(o),f(n,await t(e)))}async function pr(e){await Te(e.waitAttr,t=>ao(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await Te(e.waitEle,$n,`Waiting for Element ${e.waitEle}`,"Found Element"),await Te(e.waitVar,lo,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await Te(e.waitFunc,_t,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await Te(e.waitTime,t=>new Promise(o=>setTimeout(o,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var Y=[],ne=0,Ze=null,je=4,qe=globalThis.nanostoresGlobal||={epoch:0},mr=()=>{let e;for(ne=0;ne<Y.length;ne+=je)try{Y[ne](Y[ne+1].value,Y[ne+2],Y[ne+3])}catch(t){e=t}if(Y.length=0,e)throw e},po=e=>{let t=[],o={eq:Object.is,get(){return o.lc||o.listen(()=>{})(),o.value},init:e,lc:0,listen(n){return o.lc=t.push(n),()=>{for(let i=ne+je;i<Y.length;)Y[i]===n?Y.splice(i,je):i+=je;let r=t.indexOf(n);~r&&(t.splice(r,1),--o.lc||o.off())}},notify(n,r){qe.epoch++;let i=!Y.length&&!Ze;for(let a of t)Ze?.has(a)||(Ze?.add(a),Y.push(a,o,n,Ze?void 0:r));i&&mr()},off(){},set(n){let r=o.value;o.eq(r,n)||(o.value=n,o.notify(r))},subscribe(n){let r=o.listen(n);return n(o.value),r},value:e};return o},gr=5,Qe=6,Ye=10,vr=(e,t,o,n)=>(e.events=e.events||{},e.events[o+Ye]||(e.events[o+Ye]=n(r=>{e.events[o].reduceRight((i,a)=>(a(i),i),{shared:{},...r})})),e.events[o]=e.events[o]||[],e.events[o].push(t),()=>{let r=e.events[o],i=r.indexOf(t);r.splice(i,1),r.length||(delete e.events[o],e.events[o+Ye](),delete e.events[o+Ye])}),fr=1e3,br=(e,t)=>vr(e,n=>{let r=t(n);r&&e.events[Qe].push(r)},gr,n=>{let r=e.listen;e.listen=(...a)=>(!e.lc&&!e.active&&(e.active=!0,n()),r(...a));let i=e.off;return e.events[Qe]=[],e.off=()=>{i(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let a of e.events[Qe])a();e.events[Qe]=[]}},fr)},()=>{e.listen=r,e.off=i}}),wr=(e,t,o)=>{Array.isArray(e)||(e=[e]);let n,r,i=()=>{if(r===qe.epoch)return;r=qe.epoch;let v=e.map(w=>w.get());if(!n||v.some((w,A)=>w!==n[A])){n=v;let w=t(...v);w&&w.then&&w.t?w.then(A=>{n===v&&a.set(A)}):(a.set(w),r=qe.epoch)}},a=po(void 0),s=a.get;a.get=()=>(i(),s());let u,m=o?()=>{clearTimeout(u),u=setTimeout(i)}:i;return br(a,()=>{let v=e.map(w=>w.listen(m));return i(),()=>{for(let w of v)w()}}),a},kr=(e,t)=>wr(e,t),mo=(e={})=>{let t=po(e);return t.eqKey=Object.is,t.setKey=function(o,n){let r=t.value;typeof n>"u"&&o in t.value?(t.value={...t.value},delete t.value[o],t.notify(r,o)):t.eqKey(t.value[o],n,o)||(t.value={...t.value,[o]:n},t.notify(r,o))},t};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var At=globalThis,go=e=>e,Xe=At.trustedTypes,vo=Xe?Xe.createPolicy("lit-html",{createHTML:e=>e}):void 0,xt="$lit$",te=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+te,yr=`<${Mt}>`,me=document,$e=()=>me.createComment(""),Le=e=>e===null||typeof e!="object"&&typeof e!="function",St=Array.isArray,fo=e=>St(e)||typeof e?.[Symbol.iterator]=="function",Ct=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bo=/-->/g,wo=/>/g,ge=RegExp(`>|${Ct}(?:([^\\s"'>=/]+)(${Ct}*=${Ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ko=/'/g,yo=/"/g,Eo=/^(?:script|style|textarea|title)$/i,Er=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),p=Er(1),oe=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Io=new WeakMap,ve=me.createTreeWalker(me,129);function _o(e,t){if(!St(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return vo!==void 0?vo.createHTML(t):t}var Ao=(e,t)=>{const o=e.length-1,n=[];let r,i=t===2?"<svg>":t===3?"<math>":"",a=De;for(let s=0;s<o;s++){const u=e[s];let m,v,w=-1,A=0;for(;A<u.length&&(a.lastIndex=A,v=a.exec(u),v!==null);)A=a.lastIndex,a===De?v[1]==="!--"?a=bo:v[1]!==void 0?a=wo:v[2]!==void 0?(Eo.test(v[2])&&(r=RegExp("</"+v[2],"g")),a=ge):v[3]!==void 0&&(a=ge):a===ge?v[0]===">"?(a=r??De,w=-1):v[1]===void 0?w=-2:(w=a.lastIndex-v[2].length,m=v[1],a=v[3]===void 0?ge:v[3]==='"'?yo:ko):a===yo||a===ko?a=ge:a===bo||a===wo?a=De:(a=ge,r=void 0);const D=a===ge&&e[s+1].startsWith("/>")?" ":"";i+=a===De?u+yr:w>=0?(n.push(m),u.slice(0,w)+xt+u.slice(w)+te+D):u+te+(w===-2?s:D)}return[_o(e,i+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Ot=class bn{constructor({strings:t,_$litType$:o},n){let r;this.parts=[];let i=0,a=0;const s=t.length-1,u=this.parts,[m,v]=Ao(t,o);if(this.el=bn.createElement(m,n),ve.currentNode=this.el.content,o===2||o===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(r=ve.nextNode())!==null&&u.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(const w of r.getAttributeNames())if(w.endsWith(xt)){const A=v[a++],D=r.getAttribute(w).split(te),S=/([.?@])?(.*)/.exec(A);u.push({type:1,index:i,name:S[2],strings:D,ctor:S[1]==="."?Mo:S[1]==="?"?So:S[1]==="@"?Co:Re}),r.removeAttribute(w)}else w.startsWith(te)&&(u.push({type:6,index:i}),r.removeAttribute(w));if(Eo.test(r.tagName)){const w=r.textContent.split(te),A=w.length-1;if(A>0){r.textContent=Xe?Xe.emptyScript:"";for(let D=0;D<A;D++)r.append(w[D],$e()),ve.nextNode(),u.push({type:2,index:++i});r.append(w[A],$e())}}}else if(r.nodeType===8)if(r.data===Mt)u.push({type:2,index:i});else{let w=-1;for(;(w=r.data.indexOf(te,w+1))!==-1;)u.push({type:7,index:i}),w+=te.length-1}i++}}static createElement(t,o){const n=me.createElement("template");return n.innerHTML=t,n}};function fe(e,t,o=e,n){if(t===oe)return t;let r=n!==void 0?o._$Co?.[n]:o._$Cl;const i=Le(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(e),r._$AT(e,o,n)),n!==void 0?(o._$Co??=[])[n]=r:o._$Cl=r),r!==void 0&&(t=fe(e,r._$AS(e,t.values),r,n)),t}var xo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??me).importNode(t,!0);ve.currentNode=n;let r=ve.nextNode(),i=0,a=0,s=o[0];for(;s!==void 0;){if(i===s.index){let u;s.type===2?u=new Ke(r,r.nextSibling,this,e):s.type===1?u=new s.ctor(r,s.name,s.strings,this,e):s.type===6&&(u=new Oo(r,this,e)),this._$AV.push(u),s=o[++a]}i!==s?.index&&(r=ve.nextNode(),i++)}return ve.currentNode=me,n}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},Ke=class wn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,n,r){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=fe(this,t,o),Le(t)?t===I||t==null||t===""?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==oe&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fo(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==I&&Le(this._$AH)?this._$AA.nextSibling.data=t:this.T(me.createTextNode(t)),this._$AH=t}$(t){const{values:o,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ot.createElement(_o(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(o);else{const i=new xo(r,this),a=i.u(this.options);i.p(o),this.T(a),this._$AH=i}}_$AC(t){let o=Io.get(t.strings);return o===void 0&&Io.set(t.strings,o=new Ot(t)),o}k(t){St(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let n,r=0;for(const i of t)r===o.length?o.push(n=new wn(this.O($e()),this.O($e()),this,this.options)):n=o[r],n._$AI(i),r++;r<o.length&&(this._$AR(n&&n._$AB.nextSibling,r),o.length=r)}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);t!==this._$AB;){const n=go(t).nextSibling;go(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Re=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}_$AI(e,t=this,o,n){const r=this.strings;let i=!1;if(r===void 0)e=fe(this,e,t,0),i=!Le(e)||e!==this._$AH&&e!==oe,i&&(this._$AH=e);else{const a=e;let s,u;for(e=r[0],s=0;s<r.length-1;s++)u=fe(this,a[o+s],t,s),u===oe&&(u=this._$AH[s]),i||=!Le(u)||u!==this._$AH[s],u===I?e=I:e!==I&&(e+=(u??"")+r[s+1]),this._$AH[s]=u}i&&!n&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Mo=class extends Re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}},So=class extends Re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}},Co=class extends Re{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=fe(this,e,t,0)??I)===oe)return;const o=this._$AH,n=e===I&&o!==I||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==I&&(o===I||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Oo=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){fe(this,e)}},Ir={M:xt,P:te,A:Mt,C:1,L:Ao,R:xo,D:fo,V:fe,I:Ke,H:Re,N:So,U:Co,B:Mo,F:Oo},_r=At.litHtmlPolyfillSupport;_r?.(Ot,Ke),(At.litHtmlVersions??=[]).push("3.3.3");var Ar=(e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(r===void 0){const i=o?.renderBefore??null;n._$litPart$=r=new Ke(t.insertBefore($e(),i),i,void 0,o??{})}return r._$AI(e),r},{I:fd}=Ir,xr=e=>e.strings===void 0;/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*//**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Je={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ne=e=>(...t)=>({_$litDirective$:e,values:t}),et=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Pe=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(t,!1),Pe(n,t);return!0},tt=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},To=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Cr(t)}};function Mr(e){this._$AN!==void 0?(tt(this),this._$AM=e,To(this)):this._$AM=e}function Sr(e,t=!1,o=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(n))for(let i=o;i<n.length;i++)Pe(n[i],!1),tt(n[i]);else n!=null&&(Pe(n,!1),tt(n));else Pe(this,e)}var Cr=e=>{e.type==Je.CHILD&&(e._$AP??=Sr,e._$AQ??=Mr)},Or=class extends et{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),To(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Pe(this,e),tt(this))}setValue(e){if(xr(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Tt=()=>new Tr,Tr=class{},$t=new WeakMap,Lt=Ne(class extends Or{render(e){return I}update(e,[t]){const o=t!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),I}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=$t.get(t);o===void 0&&(o=new WeakMap,$t.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?$t.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ee=[{ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",DEVICE_MODE:"Device Mode",DEVICE_MODE_AUTO:"Auto",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
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
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"R\xE9initialiser les param\xE8tres",SETTINGS_RESET:"Les param\xE8tres ont \xE9t\xE9 r\xE9initialis\xE9s, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a \xE9t\xE9 modifi\xE9e, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera propos\xE9 de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le t\xE9l\xE9chargement zip, vous ne pourrez pas t\xE9l\xE9charger avec ce param\xE8tre activ\xE9.<br/> Suggestion : <span style='color:red;font-weight:bold'>D\xE9sactivez les vignettes</span> pour \xE9conomiser de la bande passante/m\xE9moire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"D\xE9but du chargement paresseux \xE0 partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour \xE0 la liste des chapitres",PAGES_LOADED:"Pages charg\xE9es",GO_TO_PAGE:"Aller \xE0 la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"R\xE9duire",FIT_WIDTH:"Ajuster \xE0 la largeur",FIT_HEIGHT:"Ajuster \xE0 la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contr\xF4les de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arri\xE8re",ZOOM_RESET:"R\xE9initialiser le zoom",ZOOM_WIDTH:"Zoomer \xE0 la largeur",ZOOM_HEIGHT:"Zoomer \xE0 la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extr\xEAme",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop \xE9lev\xE9e",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommand\xE9e.<br/> Elle peut nuire \xE0 certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire d\xE9filer vers le haut",SCROLL_DOWN:"Faire d\xE9filer vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le d\xE9filement automatique",INCREASE_SPEED:"Augmenter la vitesse de d\xE9filement",DECREASE_SPEED:"Diminuer la vitesse de d\xE9filement",AUTO_SCROLL_HEIGHT:"Vitesse de d\xE9filement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les s\xE9parateurs verticaux",END:"Fin",SCOPE:"Port\xE9e",GLOBAL:"Global",GENERAL:"G\xE9n\xE9ral",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"D\xE9sactiv\xE9",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"D\xE9sactiv\xE9",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Fl\xE8ches lat\xE9rales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier s\xE9lectionn\xE9"}];/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var ot=globalThis,Dt=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rt=Symbol(),$o=new WeakMap,Lo=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Dt&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=$o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&$o.set(t,e))}return e}toString(){return this.cssText}},b=e=>new Lo(typeof e=="string"?e:e+"",void 0,Rt),T=(e,...t)=>new Lo(e.length===1?e[0]:t.reduce((o,n,r)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1],e[0]),e,Rt),$r=(e,t)=>{if(Dt)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const n=document.createElement("style"),r=ot.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=o.cssText,e.appendChild(n)}},Do=Dt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const n of t.cssRules)o+=n.cssText;return b(o)})(e):e;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var{is:Lr,defineProperty:Dr,getOwnPropertyDescriptor:Rr,getOwnPropertyNames:Nr,getOwnPropertySymbols:Pr,getPrototypeOf:zr}=Object,nt=globalThis,Ro=nt.trustedTypes,Br=Ro?Ro.emptyScript:"",Hr=nt.reactiveElementPolyfillSupport,ze=(e,t)=>e,rt={toAttribute(e,t){switch(t){case Boolean:e=e?Br:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},Nt=(e,t)=>!Lr(e,t),No={attribute:!0,type:String,converter:rt,reflect:!1,useDefault:!1,hasChanged:Nt};Symbol.metadata??=Symbol("metadata"),nt.litPropertyMetadata??=new WeakMap;var Ie=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=No){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);n!==void 0&&Dr(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=Rr(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:n,set(i){const a=n?.call(this);r?.call(this,i),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??No}static _$Ei(){if(this.hasOwnProperty(ze("elementProperties")))return;const e=zr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ze("properties"))){const t=this.properties,o=[...Nr(t),...Pr(t)];for(const n of o)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,n]of t)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const n=this._$Eu(t,o);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const n of o)t.unshift(Do(n))}else e!==void 0&&t.push(Do(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:rt).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const r=o.getPropertyOptions(n),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:rt;this._$Em=n;const a=i.fromAttribute(t,r.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,t,o,n=!1,r){if(e!==void 0){const i=this.constructor;if(n===!1&&(r=this[e]),o??=i.getPropertyOptions(e),!((o.hasChanged??Nt)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:n,wrapped:r},i){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),r!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,r]of o){const{wrapped:i}=r,a=this[n];i!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,r,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ie.elementStyles=[],Ie.shadowRootOptions={mode:"open"},Ie[ze("elementProperties")]=new Map,Ie[ze("finalized")]=new Map,Hr?.({ReactiveElement:Ie}),(nt.reactiveElementVersions??=[]).push("2.1.2");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Pt=globalThis,x=class extends Ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ar(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return oe}};x._$litElement$=!0,x.finalized=!0,Pt.litElementHydrateSupport?.({LitElement:x});var Gr=Pt.litElementPolyfillSupport;Gr?.({LitElement:x}),(Pt.litElementVersions??=[]).push("4.2.2");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var M=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Vr={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:Nt},Fr=(e=Vr,t,o)=>{const{kind:n,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(o.name,e),n==="accessor"){const{name:a}=o;return{set(s){const u=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,u,e,!0,s)},init(s){return s!==void 0&&this.C(a,void 0,e,s),s}}}if(n==="setter"){const{name:a}=o;return function(s){const u=this[a];t.call(this,s),this.requestUpdate(a,u,e,!0,s)}}throw Error("Unsupported decorator location: "+n)};function d(e){return(t,o)=>typeof o=="object"?Fr(e,t,o):((n,r,i)=>{const a=r.hasOwnProperty(i);return r.constructor.createProperty(i,n),a?Object.getOwnPropertyDescriptor(r,i):void 0})(e,t,o)}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function P(e){return d({...e,state:!0,attribute:!1})}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Po=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function re(e,t){return(o,n,r)=>{const i=a=>a.renderRoot?.querySelector(e)??null;if(t){const{get:a,set:s}=typeof n=="object"?o:r??(()=>{const u=Symbol();return{get(){return this[u]},set(m){this[u]=m}}})();return Po(o,n,{get(){let u=a.call(this);return u===void 0&&(u=i(this),(u!==null||this.hasUpdated)&&s.call(this,u)),u}})}return Po(o,n,{get(){return i(this)}})}}/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var $=Ne(class extends et{constructor(e){if(super(e),e.type!==Je.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const o=e.element.classList;for(const n of this.st)n in t||(o.remove(n),this.st.delete(n));for(const n in t){const r=!!t[n];r===this.st.has(n)||this.nt?.has(n)||(r?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return oe}});/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var it=class extends et{constructor(e){if(super(e),this.it=I,e.type!==Je.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===I||e==null)return this._t=void 0,this.it=e;if(e===oe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};it.directiveName="unsafeHTML",it.resultType=1;var zo=Ne(it);/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var zt=class extends it{};zt.directiveName="unsafeSVG",zt.resultType=2;var Bo=Ne(zt);function Ho(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${_.upperFirst(_.camelCase(t))}`}var Wr=`.icon-tabler-file-download > :nth-child(n + 4) {\r
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
`,Ur='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',Zr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',jr='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',qr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',Qr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',Yr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',Xr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',Kr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',Jr='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',ei='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',ti='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',oi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',ni='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',ri='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',ii='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',ai='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',li='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',si='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',ci='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',di='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',hi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',ui='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',pi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',mi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',gi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',vi='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',fi=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
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
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,bi=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="\r
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
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,wi=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="\r
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
            " id="path5107"/></g></g></g></g></svg>`,ki='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',yi=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
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
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,Ei='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',Ii='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',_i='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',Ai='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',xi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',Mi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',Si=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></svg>\r
`,Ci='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',Oi=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/><path d="M11 4h2"/><path d="M12 17v.01"/></svg>\r
`,Ti=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/></svg>\r
`,$i='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Li='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',Di=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="\r
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
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,Ri='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',Ni=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="\r
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
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,Pi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',zi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',Bi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',Hi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',Gi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',Vi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',Fi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',Wi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',Ui='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',Zi='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',ji='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',qi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',Qi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',Yi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',Xi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',Ki='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',Ji='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',ea='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',ta='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',oa='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',na='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',ra='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',ia='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',aa='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',la='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',sa=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="\r
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
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,ca='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',da='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',ha='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',ua='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',pa='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',ma='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',ga='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',va='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',fa='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',ba='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',wa='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',ka='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',ya='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',Ea='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',Ia='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',_a='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Aa='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',xa='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',Ma='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',Sa='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',Ca='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',Oa='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',Ta='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',$a='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',La=Kt({IconAdjustmentsHorizontal:()=>Ur,IconAlertCircle:()=>Zr,IconApiBook:()=>jr,IconArrowAutofitDown:()=>qr,IconArrowAutofitHeight:()=>Qr,IconArrowAutofitLeft:()=>Yr,IconArrowAutofitRight:()=>Xr,IconArrowAutofitWidth:()=>Kr,IconArrowBigLeft:()=>Jr,IconArrowBigRight:()=>ei,IconArrowsHorizontal:()=>ti,IconArrowsLeftRight:()=>oi,IconArrowsMove:()=>ni,IconArrowsMoveVertical:()=>ri,IconArrowsVertical:()=>ii,IconBook:()=>ai,IconBookArrowLeft:()=>li,IconBookArrowRight:()=>si,IconBookOff:()=>ci,IconBookUpload:()=>di,IconBookmark:()=>hi,IconBookmarkOff:()=>ui,IconBookmarks:()=>pi,IconBooksReturn:()=>mi,IconBoxAlignTop:()=>gi,IconCategory:()=>Ei,IconCheck:()=>Ii,IconChevronLeft:()=>_i,IconChevronRight:()=>Ai,IconCircleCheck:()=>xi,IconCircleX:()=>Mi,IconComic1:()=>fi,IconComic1Flat:()=>vi,IconComic2:()=>wi,IconComic2Flat:()=>bi,IconComic3:()=>yi,IconComic3Flat:()=>ki,IconDeviceDesktop:()=>Si,IconDeviceFloppy:()=>Ci,IconDeviceMobile:()=>Oi,IconDeviceTablet:()=>Ti,IconDotsVertical:()=>$i,IconEReader1:()=>Di,IconEReader1Flat:()=>Li,IconEReader2:()=>Ni,IconEReader2Flat:()=>Ri,IconExternalLink:()=>Pi,IconEye:()=>zi,IconEyeOff:()=>Bi,IconFileDownload:()=>Hi,IconFilePercent:()=>Gi,IconFolderOpen:()=>Vi,IconHandClick:()=>Fi,IconHelp:()=>Wi,IconInfoCircle:()=>Ui,IconKeyboard:()=>Zi,IconLayoutBottombar:()=>ji,IconLayoutBottombarInactive:()=>qi,IconLayoutDashboard:()=>Qi,IconLayoutSidebar:()=>Yi,IconLayoutSidebarInactive:()=>Xi,IconLayoutSidebarRight:()=>Ki,IconLayoutSidebarRightInactive:()=>Ji,IconListNumbers:()=>ea,IconLoader2:()=>ta,IconLocationCog:()=>oa,IconMenu2:()=>na,IconMenuDeep:()=>ra,IconMessage:()=>ia,IconMoon:()=>aa,IconPage:()=>sa,IconPageFlat:()=>la,IconPalette:()=>ca,IconPencil:()=>da,IconPencilCog:()=>ha,IconPhoto:()=>ua,IconPhotoOff:()=>pa,IconPin:()=>ma,IconPlayerPause:()=>ga,IconPlayerPlay:()=>va,IconRefresh:()=>fa,IconSettings:()=>ba,IconSettingsOff:()=>wa,IconSpacingHorizontal:()=>ka,IconSpacingVertical:()=>ya,IconSun:()=>Ea,IconTrash:()=>Ia,IconWorldCog:()=>_a,IconX:()=>Aa,IconZoom:()=>xa,IconZoomCancel:()=>Ma,IconZoomIn:()=>Sa,IconZoomInArea:()=>Ca,IconZoomOut:()=>Oa,IconZoomOutArea:()=>Ta,IconZoomPan:()=>$a}),Bt=Kt({IconAdjustmentsHorizontal:()=>Ba,IconAlertCircle:()=>pl,IconApiBook:()=>Ha,IconArrowAutofitDown:()=>Fa,IconArrowAutofitHeight:()=>Wa,IconArrowAutofitLeft:()=>Ua,IconArrowAutofitRight:()=>Za,IconArrowAutofitWidth:()=>ja,IconArrowBigLeft:()=>qa,IconArrowBigRight:()=>Qa,IconArrowsHorizontal:()=>Ga,IconArrowsLeftRight:()=>Va,IconArrowsMove:()=>Ya,IconArrowsMoveVertical:()=>Xa,IconArrowsVertical:()=>Ka,IconBook:()=>Ja,IconBookArrowLeft:()=>tl,IconBookArrowRight:()=>ol,IconBookOff:()=>el,IconBookUpload:()=>rl,IconBookmark:()=>il,IconBookmarkOff:()=>al,IconBookmarks:()=>ll,IconBooksReturn:()=>nl,IconBoxAlignTop:()=>sl,IconCategory:()=>cl,IconCheck:()=>dl,IconChevronLeft:()=>hl,IconChevronRight:()=>ul,IconCircleCheck:()=>ml,IconCircleX:()=>gl,IconComic1:()=>bl,IconComic1Flat:()=>wl,IconComic2:()=>kl,IconComic2Flat:()=>yl,IconComic3:()=>El,IconComic3Flat:()=>Il,IconDeviceDesktop:()=>_l,IconDeviceFloppy:()=>Al,IconDeviceMobile:()=>xl,IconDeviceTablet:()=>Ml,IconDotsVertical:()=>Sl,IconEReader1:()=>Cl,IconEReader1Flat:()=>Ol,IconEReader2:()=>Tl,IconEReader2Flat:()=>$l,IconExternalLink:()=>Ll,IconEye:()=>Dl,IconEyeOff:()=>Rl,IconFileDownload:()=>Nl,IconFilePercent:()=>Pl,IconFolderOpen:()=>zl,IconHandClick:()=>Bl,IconHelp:()=>vl,IconInfoCircle:()=>fl,IconKeyboard:()=>Hl,IconLayoutBottombar:()=>Vl,IconLayoutBottombarInactive:()=>Fl,IconLayoutDashboard:()=>Gl,IconLayoutSidebar:()=>Wl,IconLayoutSidebarInactive:()=>Ul,IconLayoutSidebarRight:()=>Zl,IconLayoutSidebarRightInactive:()=>jl,IconListNumbers:()=>ql,IconLoader2:()=>Ql,IconLocationCog:()=>Yl,IconMenu2:()=>Xl,IconMenuDeep:()=>Kl,IconMessage:()=>Jl,IconMoon:()=>es,IconPage:()=>ts,IconPageFlat:()=>os,IconPalette:()=>ns,IconPencil:()=>rs,IconPencilCog:()=>is,IconPhoto:()=>Ht,IconPhotoOff:()=>Gt,IconPin:()=>as,IconPlayerPause:()=>ls,IconPlayerPlay:()=>ss,IconRefresh:()=>cs,IconSettings:()=>ds,IconSettingsOff:()=>hs,IconSpacingHorizontal:()=>us,IconSpacingVertical:()=>ps,IconSun:()=>ms,IconTrash:()=>gs,IconWorldCog:()=>vs,IconX:()=>fs,IconZoom:()=>bs,IconZoomCancel:()=>ws,IconZoomIn:()=>ks,IconZoomInArea:()=>ys,IconZoomOut:()=>Es,IconZoomOutArea:()=>Is,IconZoomPan:()=>_s});function Da(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const o=t[1].trim(),n=t[2],r=/color:\s*([^;]+)/.exec(n);if(r){const i=r[1].trim();return{selectors:o.split(",").map(a=>a.trim().replace(/\s\s+/g," ")),color:i}}return null}).filter(t=>t!==null)}var Ra=Da(Wr),at=new Map;for(const e of Ra)for(const t of e.selectors){const o=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!o)continue;const[,n,r]=o;let i=r.trim();i.startsWith(">")&&(i=i.substring(1).trim()),i===""&&(i="*"),at.has(n)||at.set(n,[]),at.get(n)?.push({subSelector:i,color:e.color})}var Na=new DOMParser,Pa=new XMLSerializer;function za(e,t){const o=at.get(t);if(!o?.length)return e;const n=Na.parseFromString(e,"image/svg+xml").documentElement;if(n.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:r,color:i}of o)try{n.querySelectorAll(r).forEach(a=>{a.setAttribute("stroke",i)})}catch(a){console.error(`Invalid selector "${r}" for ${t}`,a)}return Pa.serializeToString(n)}var{IconAdjustmentsHorizontal:Ba,IconApiBook:Ha,IconArrowsHorizontal:Ga,IconArrowsLeftRight:Va,IconArrowAutofitDown:Fa,IconArrowAutofitHeight:Wa,IconArrowAutofitLeft:Ua,IconArrowAutofitRight:Za,IconArrowAutofitWidth:ja,IconArrowBigLeft:qa,IconArrowBigRight:Qa,IconArrowsMove:Ya,IconArrowsMoveVertical:Xa,IconArrowsVertical:Ka,IconBook:Ja,IconBookOff:el,IconBookArrowLeft:tl,IconBookArrowRight:ol,IconBooksReturn:nl,IconBookUpload:rl,IconBookmark:il,IconBookmarkOff:al,IconBookmarks:ll,IconBoxAlignTop:sl,IconCategory:cl,IconCheck:dl,IconChevronLeft:hl,IconChevronRight:ul,IconAlertCircle:pl,IconCircleCheck:ml,IconCircleX:gl,IconHelp:vl,IconInfoCircle:fl,IconComic1:bl,IconComic1Flat:wl,IconComic2:kl,IconComic2Flat:yl,IconComic3:El,IconComic3Flat:Il,IconDeviceDesktop:_l,IconDeviceFloppy:Al,IconDeviceMobile:xl,IconDeviceTablet:Ml,IconDotsVertical:Sl,IconEReader1:Cl,IconEReader1Flat:Ol,IconEReader2:Tl,IconEReader2Flat:$l,IconExternalLink:Ll,IconEye:Dl,IconEyeOff:Rl,IconFileDownload:Nl,IconFilePercent:Pl,IconFolderOpen:zl,IconHandClick:Bl,IconKeyboard:Hl,IconLayoutDashboard:Gl,IconLayoutBottombar:Vl,IconLayoutBottombarInactive:Fl,IconLayoutSidebar:Wl,IconLayoutSidebarInactive:Ul,IconLayoutSidebarRight:Zl,IconLayoutSidebarRightInactive:jl,IconListNumbers:ql,IconLoader2:Ql,IconLocationCog:Yl,IconMenu2:Xl,IconMenuDeep:Kl,IconMessage:Jl,IconMoon:es,IconPage:ts,IconPageFlat:os,IconPalette:ns,IconPencil:rs,IconPencilCog:is,IconPhoto:Ht,IconPhotoOff:Gt,IconPin:as,IconPlayerPause:ls,IconPlayerPlay:ss,IconRefresh:cs,IconSettings:ds,IconSettingsOff:hs,IconSpacingHorizontal:us,IconSpacingVertical:ps,IconSun:ms,IconTrash:gs,IconWorldCog:vs,IconX:fs,IconZoom:bs,IconZoomCancel:ws,IconZoomIn:ks,IconZoomInArea:ys,IconZoomOut:Es,IconZoomOutArea:Is,IconZoomPan:_s}=_.mapValues(La,(e,t)=>za(e,`icon-tabler-${_.kebabCase(t.replace(/^Icon/,""))}`));function l(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,o,i):a(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i}var be=class extends x{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=T`
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
  `}updated(t){super.updated(t),t.has("name")&&(Bt[Ho(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=Bt[Ho(this.name)];if(!t)return I;const o=this.size?`--mov-icon-size: ${this.size};`:"";return p`<span
      role=${this.label?"img":I}
      aria-label=${this.label||I}
      aria-hidden=${this.label?I:"true"}
      style=${o}
      >${Bo(t)}</span
    >`}};l([d({type:String})],be.prototype,"name",void 0),l([d({type:String,reflect:!0})],be.prototype,"variant",void 0),l([d({type:String,reflect:!0})],be.prototype,"family",void 0),l([d({type:String})],be.prototype,"label",void 0),l([d({type:String})],be.prototype,"size",void 0),be=l([M("mov-icon")],be);var As=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),xs=As;function Ms(e,t){const o=document.createElement("style");return o.id=e,o.appendChild(document.createTextNode(t)),o}function Go(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(Ms(e,t))}function Ss(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function Cs(e,t){Ss(e),Go(e,t)}function Os(e,t){return xs`
    <style id="${e}">
      ${t}
    </style>
  `}var lt=`.mov-toast-stack {\r
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
`,K=class extends x{constructor(...t){super(...t),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[b(lt)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),t()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),t()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return p`
      <div
        part="base"
        class=${$({"mov-toast":!0,[`mov-toast-variant-${this.variant}`]:!0})}
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
            ${this.title?p`<div class="mov-toast-title" part="title">${this.title}</div>`:""}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${this.closable?p`
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
    `}};l([d({type:Boolean,reflect:!0})],K.prototype,"open",void 0),l([d({reflect:!0})],K.prototype,"variant",void 0),l([d({type:Number})],K.prototype,"duration",void 0),l([d({type:Boolean})],K.prototype,"closable",void 0),l([d()],K.prototype,"title",void 0),l([d()],K.prototype,"description",void 0),l([d()],K.prototype,"icon",void 0),l([d({reflect:!0})],K.prototype,"placement",void 0),K=l([M("mov-toast")],K);var F=e=>{const t=e.placement||"bottom-end",o=`mov-toast-stack-${t}`;let n=document.querySelector(`.mov-toast-stack.${o}`);const r=lt.indexOf(":host");Go("mov-toast-stack-styles",r>-1?lt.substring(0,r).trim():lt),n||(n=document.createElement("div"),n.className=`mov-toast-stack ${o}`,document.body.appendChild(n));const i=document.createElement("mov-toast");let a=e.variant||"primary";return a==="info"&&(a="primary"),a==="error"&&(a="danger"),i.variant=a,i.title=e.title||"",i.description=e.description||e.message||"",i.duration=e.duration??3e3,i.closable=e.closable??!0,i.placement=t,e.icon&&(i.icon=e.icon),n.appendChild(i),requestAnimationFrame(()=>{i.show()}),i};F.info=e=>F({...e,variant:"primary"}),F.success=e=>F({...e,variant:"success"}),F.warning=e=>F({...e,variant:"warning"}),F.error=e=>F({...e,variant:"danger"});var Be=(e,t)=>{const o=(n,r)=>_.transform(n,(i,a,s)=>{_.isEqual(a,r[s])||(_.isObject(a)&&_.isObject(r[s])&&!_.isArray(a)?i[s]=o(a,r[s]):i[s]=a)});return o(e,t)},Ts={bookmarks:[],colorScheme:"dark",deviceMode:"auto",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","],TOGGLE_CONTROLS:["L"]}},$s={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},Ls={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function X(e=!0){const t={...Ts,theme:e?"#29487D":"#004526"};let o=Tn()?_.defaultsDeep($s,t):t;return It()&&(o=_.defaultsDeep(Ls,o)),o}function Ds(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const o=i=>`${i.url}-${i.date}`,n=[...e].sort((i,a)=>o(i).localeCompare(o(a))),r=[...t].sort((i,a)=>o(i).localeCompare(o(a)));return _.isEqual(n,r)}}function Rs(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const o=e,n=t,r=_.keys(o).sort((a,s)=>a.localeCompare(s)),i=_.keys(n).sort((a,s)=>a.localeCompare(s));if(!_.isEqual(r,i))return!1;for(const a of r){const s=o[a]?[...o[a]].sort((m,v)=>m.localeCompare(v)):[],u=n[a]?[...n[a]].sort((m,v)=>m.localeCompare(v)):[];if(!_.isEqual(s,u))return!1}return!0}}function Vo(e,t,o){if(o==="bookmarks")return Ds(e,t);if(o==="keybinds")return Rs(e,t)}function st(e,t,o){if(e===t)return!1;if(o){const n={[o]:e},r={[o]:t};return!_.isEqualWith(n,r,Vo)}return!_.isEqualWith(e,t,Vo)}var H=_.defaultsDeep(xn(X()),X()),G=_.defaultsDeep(Mn(X(!1)),X(!1)),we=()=>G?.enabled===!0,Vt=e=>we()&&!["locale","bookmarks","keybinds"].includes(e),N=mo(we()?{...G,locale:H.locale,keybinds:H.keybinds,bookmarks:H.bookmarks}:H),_e=kr(N,e=>Ee.find(t=>t.ID===e.locale)??Ee[1]);function Ft(e=h("deviceMode")){return e==="auto"?Ue():e}var V=mo({autoScroll:!1,chapter:Tt(),currentPage:0,device:Ft(),manga:void 0,panel:"none",scrollToPage:void 0});function ke(e){if(e){const t=Vt(e)?G[e]:H[e],o=N.get()?.[e];st(o,t,e)&&(N.setKey(e,t),f("Refreshed Settings",e,t));return}for(const t in N.get()){const o=N.get()[t],n=Vt(t)?G[t]:H[t];st(o,n)&&N.setKey(t,n)}f("Refreshed All Settings")}function Ns(e){const t=_.defaultsDeep(e,X()),o=H?Be(t,H):t;if(!q(o)){f("Imported Global Settings",o),H=t;for(const n in o)ke(n)}}io(_.debounce(Ns,300),"settings");function Ps(e){const t=_.defaultsDeep(e,X(!1)),o=G?Be(t,G):t;if(!q(o)){f("Imported Local Settings",o),G=t;for(const n in o)ke(n)}}io(_.debounce(Ps,300),location.hostname);function h(e){return N.get()?.[e]}function Ae(e,t){const o=N.get()?.[e];st(o,t,e)&&N.setKey(e,t)}function L(e,t){st(h(e),t,e)&&(N.setKey(e,t),Vt(e)?(G[e]=t,ro(Be(G,X(!1)))):(H[e]=t,Sn(Be(H,X()))))}function xe(e,t){Ae(e,t(h(e)))}function g(e){return V.get()[e]}function k(e,t){const o=V.get()[e];_.isEqual(o,t)||V.setKey(e,t)}function Fo(e,t){const o=V.get()[e],n=t(o);_.isEqual(o,n)||V.setKey(e,n)}function W(e,t){Fo("images",o=>({...o,[e]:{...o?.[e],...t(o?.[e]??{})}}))}function c(e){const t=Ee.find(o=>o.ID===h("locale"))??Ee[1];return En(t,e)?t?.[e]??Ee[1]?.[e]:`##MISSING_STRING_${e}##`}function Wo(e=!1){return G.enabled=e,ro(Be(G,X(!1))),f("Local Settings ",e?"Enabled":"Disabled"),F.info({title:"Changed Settings to",description:we()?"Local":"Global",duration:2e3}),we()}function zs(){we()?(to(location.hostname),G=X(!1),Wo(!1)):(to("settings"),H=X(),ke()),f("Settings Reset")}function Me(e=location.href){return h("bookmarks").find(t=>t.url===e)?.page}function Bs(e=null){B("Current Settings (Local:",we(),") ",e?N.get()[e]:N.get(),`
Global Settings`,e?H[e]:H,`
Local Settings`,e?G[e]:G,`
AppState`,V.get())}_n("MOVSettings",Bs);var Hs=(e,t,o)=>{if(o&&!["bookmarks","zoomValue"].includes(o)){const n=t[o],r=e[o];F.info({title:`${o} Changed`,description:`from ${JSON.stringify(n)} to ${JSON.stringify(r)}`,duration:2e3})}};N.listen(_.debounce(Hs,300));/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var U=e=>e??I,Gs=`:host {\r
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
`,C=class extends x{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[b(Gs)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,o={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},n=p`
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
      ${this.withCaret?p`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?p`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?p`
        <a
          part="base"
          class=${$(o)}
          href=${U(this.href)}
          target=${U(this.target)}
          title=${U(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${U(this.download)}
          @click=${this.handleClick}
        >
          ${n}
        </a>
      `:p`
        <button
          part="base"
          class=${$(o)}
          ?disabled=${this.disabled||this.loading}
          type=${U(this.type)}
          title=${U(this.title)}
          name=${U(this.name)}
          value=${U(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${n}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],o=t.filter(a=>a.nodeType===Node.ELEMENT_NODE),n=t.filter(a=>a.nodeType===Node.TEXT_NODE&&a.textContent?.trim()!==""),r=a=>["wa-icon","mov-icon","svg"].includes(a.localName),i=o.some(r);this.isIconButton=n.length===0&&i}};l([re(".button")],C.prototype,"button",void 0),l([re("slot:not([name])")],C.prototype,"labelSlot",void 0),l([P()],C.prototype,"isIconButton",void 0),l([P()],C.prototype,"hasLabel",void 0),l([P()],C.prototype,"hasStart",void 0),l([P()],C.prototype,"hasEnd",void 0),l([d()],C.prototype,"title",void 0),l([d({reflect:!0})],C.prototype,"appearance",void 0),l([d({reflect:!0})],C.prototype,"variant",void 0),l([d({reflect:!0})],C.prototype,"size",void 0),l([d({attribute:"with-caret",type:Boolean,reflect:!0})],C.prototype,"withCaret",void 0),l([d({type:Boolean,reflect:!0})],C.prototype,"disabled",void 0),l([d({type:Boolean,reflect:!0})],C.prototype,"loading",void 0),l([d({type:Boolean,reflect:!0})],C.prototype,"pill",void 0),l([d()],C.prototype,"type",void 0),l([d({reflect:!0})],C.prototype,"name",void 0),l([d({reflect:!0})],C.prototype,"value",void 0),l([d({reflect:!0})],C.prototype,"href",void 0),l([d()],C.prototype,"target",void 0),l([d({reflect:!0})],C.prototype,"rel",void 0),l([d()],C.prototype,"download",void 0),l([d({reflect:!0})],C.prototype,"form",void 0),C=l([M("mov-button")],C);var Q=class extends x{constructor(...t){super(...t),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=T`
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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,o={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":this.mode==="burger"};return p`
      <mov-button
        @click=${this._onClick}
        .appearance=${U(this.appearance)}
        .size=${U(this.size)}
        ?disabled=${U(this.disabled)}
        ?loading=${U(this.loading)}
        .title=${U(this.title)}
        class=${$(o)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"burger":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){if(this.mode==="burger")return p`
        <div class="burger-mode">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      `;const t=this._getIcons();return t.inactive?this.mode==="chevron"?p`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?p`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?p`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:p`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:I}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};l([d({type:String})],Q.prototype,"mode",void 0),l([d({type:Boolean,reflect:!0})],Q.prototype,"active",void 0),l([d({type:String})],Q.prototype,"label",void 0),l([d({type:String})],Q.prototype,"activeLabel",void 0),l([d({type:String})],Q.prototype,"icon",void 0),l([d({type:String})],Q.prototype,"activeIcon",void 0),l([d({type:String,reflect:!0})],Q.prototype,"appearance",void 0),l([d({type:String,reflect:!0})],Q.prototype,"size",void 0),l([d({type:Boolean})],Q.prototype,"disabled",void 0),l([d({type:Boolean,reflect:!0})],Q.prototype,"loading",void 0),Q=l([M("toggle-button")],Q);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Uo="important",Vs=" !"+Uo,J=Ne(class extends et{constructor(e){if(super(e),e.type!==Je.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const n=e[o];return n==null?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:o}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]??(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in t){const r=t[n];if(r!=null){this.ft.add(n);const i=typeof r=="string"&&r.endsWith(Vs);n.includes("-")||i?o.setProperty(n,i?r.slice(0,-11):r,i?Uo:""):o[n]=r}}return oe}}),Wt={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},R={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function Fs(e){try{Color.get(e)}catch{return!0}return Color.contrast(e,"white","Lstar")>Color.contrast(e,"black","Lstar")}function Se(e){return Fs(e)?"#FFFFFF":"#000000"}var{IconAdjustmentsHorizontal:bd,IconApiBook:wd,IconArrowsHorizontal:kd,IconArrowsLeftRight:yd,IconArrowAutofitDown:Ed,IconArrowAutofitHeight:Ws,IconArrowAutofitLeft:Id,IconArrowAutofitRight:_d,IconArrowAutofitWidth:Us,IconArrowBigLeft:Ad,IconArrowBigRight:xd,IconArrowsMove:Md,IconArrowsMoveVertical:Sd,IconArrowsVertical:Cd,IconBook:Od,IconBookOff:Td,IconBookArrowLeft:$d,IconBookArrowRight:Ld,IconBooksReturn:Dd,IconBookUpload:Rd,IconBookmark:Zs,IconBookmarkOff:js,IconBookmarks:Nd,IconBoxAlignTop:Pd,IconCategory:qs,IconCheck:ct,IconChevronLeft:zd,IconChevronRight:Bd,IconAlertCircle:Hd,IconCircleCheck:Gd,IconCircleX:Vd,IconHelp:Fd,IconInfoCircle:Wd,IconComic1:Ud,IconComic1Flat:Zd,IconComic2:jd,IconComic2Flat:qd,IconComic3:Qd,IconComic3Flat:Yd,IconDeviceDesktop:Xd,IconDeviceFloppy:Kd,IconDeviceMobile:Jd,IconDeviceTablet:e1,IconDotsVertical:t1,IconEReader1:o1,IconEReader1Flat:n1,IconEReader2:r1,IconEReader2Flat:i1,IconExternalLink:a1,IconEye:Qs,IconEyeOff:Ys,IconFileDownload:l1,IconFilePercent:s1,IconFolderOpen:c1,IconHandClick:d1,IconKeyboard:h1,IconLayoutDashboard:u1,IconLayoutBottombar:p1,IconLayoutBottombarInactive:m1,IconLayoutSidebar:g1,IconLayoutSidebarInactive:v1,IconLayoutSidebarRight:f1,IconLayoutSidebarRightInactive:b1,IconListNumbers:w1,IconLoader2:k1,IconLocationCog:y1,IconMenu2:E1,IconMenuDeep:I1,IconMessage:_1,IconMoon:A1,IconPage:x1,IconPageFlat:M1,IconPalette:S1,IconPencil:C1,IconPencilCog:O1,IconPhoto:T1,IconPhotoOff:$1,IconPin:L1,IconPlayerPause:D1,IconPlayerPlay:R1,IconRefresh:Xs,IconSettings:N1,IconSettingsOff:P1,IconSpacingHorizontal:Ks,IconSpacingVertical:z1,IconSun:B1,IconTrash:H1,IconWorldCog:G1,IconX:Ut,IconZoom:V1,IconZoomCancel:Js,IconZoomIn:ec,IconZoomInArea:F1,IconZoomOut:tc,IconZoomOutArea:W1,IconZoomPan:U1}=_.fromPairs(_.entries(Bt).map(([e,t])=>[e,Bo(t)])),ie=class extends x{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=T`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=Se(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},o={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return p`
      <div style=${J(t)}>
        <div
          class="swatch"
          style=${J(o)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${ct} </span>
        </div>
      </div>
    `}};l([d({type:String})],ie.prototype,"color",void 0),l([d({type:String})],ie.prototype,"selected",void 0),l([d({type:Number})],ie.prototype,"size",void 0),l([d({type:String})],ie.prototype,"radius",void 0),l([d({state:!0})],ie.prototype,"contrastColor",void 0),l([d({type:Boolean,reflect:!0})],ie.prototype,"checked",void 0),ie=l([M("color-swatch")],ie);function oc(e){const[t,o,n]=e.to("oklch").coords.map(u=>u??0),r=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=r.map(u=>new Color("oklch",[u,o,n]).toString({format:"hex"}));let a=-1,s=1/0;for(let u=0;u<r.length;u++){const m=Math.abs(r[u]-t);m<s&&(s=m,a=u)}return a!==-1&&(i[a]=e.toString({format:"hex"})),i.map(u=>u.toUpperCase())}function nc(e){const t=e.to("hsl"),o=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],n=[];for(const r of o){const i=t.clone();i.coords[2]=r*100;const a=i.coords[1]??0;r>.8?i.coords[1]=a*.4:r>.6?i.coords[1]=a*.8:r<.3&&(i.coords[1]=Math.min(100,a*1.1)),n.push(i.toString({format:"hex"}).toUpperCase())}return n}function rc(e){const t=[],o=[95,90,80,70,60,50,40,30,20,10,5],n=e.to("hsl");for(const r of o){const i=n.clone();i.coords[2]=r,t.push(i.toString({format:"hex"}).toUpperCase())}return t}function ic(e){const t=new Array(11).fill(""),o=e.to("hsl"),n={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},r=5,i=5,a=(n.lightest.lightness-50)/r,s=(50-n.darkest.lightness)/i,u=n.lightest.rotate/r,m=n.darkest.rotate/i,v=n.lightest.saturate/r,w=n.darkest.saturate/i;for(let A=1;A<=r;A++){const D=r-A,S=o.clone();S.coords[2]=(S.coords[2]??0)+a*(A-.5),S.coords[0]=(S.coords[0]??0)+u*A,S.coords[1]=(S.coords[1]??0)+v*A,t[D]=S.toString({format:"hex"})}t[5]=o.clone().toString({format:"hex"});for(let A=1;A<=i;A++){const D=r+A,S=o.clone();S.coords[2]=(S.coords[2]??0)-s*(A-.5),S.coords[0]=(S.coords[0]??0)+m*A,S.coords[1]=(S.coords[1]??0)+w*A,t[D]=S.toString({format:"hex"})}return t}function ac(e){const[t,o,n]=e.to("hsl").coords.map(i=>i??0),r=new Array(11);r[5]=e.toString({format:"hex"});for(let i=0;i<5;i++){const a=(5-i)/6,s=n+(100-n)*a,u=o-o*a;r[i]=new Color("hsl",[t,u,s]).toString({format:"hex"})}for(let i=0;i<5;i++){const a=(i+1)/6,s=n-n*a,u=o+(100-o)*a;r[i+6]=new Color("hsl",[t,u,s]).toString({format:"hex"})}return r}function Zo(e,t="steps"){let o;try{o=Color.get(e)}catch{o=Color.get(Wt.navy)}switch(t){case"saturation":return nc(o);case"lightness":return rc(o);case"mantine":return ac(o);case"chakra":return ic(o);default:return oc(o)}}var ae=class extends x{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=T`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=Zo(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return p`
      ${this.gradient.map(t=>p`
          <div
            class="swatch"
            ?checked=${this.selected&&t.toLowerCase()===this.selected.toLowerCase()}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${Se(t)}"
            >
              <span class="checkmark">${ct}</span>
            </div>
          </div>
        `)}
    `}};l([d({type:String})],ae.prototype,"baseColor",void 0),l([d({type:String})],ae.prototype,"mode",void 0),l([d({type:String,reflect:!0})],ae.prototype,"orientation",void 0),l([d({type:String})],ae.prototype,"selected",void 0),l([d({type:String,reflect:!0})],ae.prototype,"value",void 0),l([P()],ae.prototype,"gradient",void 0),ae=l([M("color-palette")],ae);var dt=class extends x{constructor(...t){super(...t),this.value=""}static{this.styles=T`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=_.keys(R).filter(n=>!["dark","gray","zinc","neutral","stone"].includes(n)),o=[200,300,400,500,600,700,800,900,950];return t.map(n=>p` <div class="SwatchGroup">
        <span class="ColorName">${n}</span>
        <div class="Swatches">${o.map(r=>{const i=R[n][r],a=Se(i);return p`
          <span
            title="${i}"
            class="${$({ThemeRadio:!0,selected:this.selected?.toLowerCase()===i.toLowerCase()})}"
            style="background-color: ${i}; color: ${a}"
            @click=${this.handleColorClick}
          >
            ${ct}
          </span>
        `})}</div>
      </div>`)}};l([d({type:String,reflect:!0})],dt.prototype,"value",void 0),l([d({type:String})],dt.prototype,"selected",void 0),dt=l([M("color-panel")],dt);var z=class extends x{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=T`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),o=250;let n;const r=this.closest("mov-drawer");if(r?.shadowRoot){const i=r.shadowRoot.querySelector("dialog");i?n=i.getBoundingClientRect():n={left:0,right:window.innerWidth}}else n={left:0,right:window.innerWidth};t.left+o>n.right?t.right-o>n.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,o){return!t||!o?!1:Color.deltaE(t,o,{method:"2000"})<1}renderCheckIcon(t){return p`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${J({stroke:Se(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},o={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},n={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Color("hsv",[o.h,o.s,o.v]).toString({format:"hex"})},r={left:`${this.hueThumbPosition}%`};return p`
      <div
        class="saturation-panel"
        style=${J(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${J(n)}
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
            style=${J(r)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||_.entries(R).filter(([i])=>!["dark","gray","zinc","neutral","stone"].includes(i)).map(([,i])=>i[600])).map(i=>p`
            <button
              class="swatch"
              title=${i}
              style=${J({backgroundColor:i})}
              @click=${()=>this.selectSwatch(i)}
            >
              ${this.isSameColor(this.value,i)?this.renderCheckIcon(i):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},o=this.renderPickerBody();return this.mode==="popup"?p`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${J({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?p`<div class=${$(t)}>${o}</div>`:""}
      `:p`<div class=${$(t)}>${o}</div>`}parseColor(t){try{return Color.get(t)}catch(o){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,o),null}}colorToHsv(t){let[o,n,r]=t.to("srgb").to("hsv").coords.map(i=>i??0);return Number.isNaN(o)&&(o=this.hsv.h||0,n=0),n=Math.max(0,Math.min(100,n))/100,r=Math.max(0,Math.min(100,r))/100,{h:o,s:n,v:r}}updateStateFromValue(t){const o=this.parseColor(t);if(!o)return;this.sourceSpace=o.space.id;const n=this.colorToHsv(o);(n.h!==this.hsv.h||n.s!==this.hsv.s||n.v!==this.hsv.v)&&(this.hsv=n,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},o=new Color("hsv",[t.h,t.s,t.v]);let n;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?n=o.to("srgb").toString({format:"hex"}):n=o.to(this.sourceSpace).toString({precision:5})}catch(r){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,r),n=o.to("srgb").toString({format:"hex"})}this.value!==n&&(this.value=n,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:o,clientY:n}=this.getEventPosition(t),r=this.saturationPanel.getBoundingClientRect(),i=Math.max(0,Math.min(o-r.left,r.width)),a=Math.max(0,Math.min(n-r.top,r.height));this.hsv.s=i/r.width,this.hsv.v=1-a/r.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:o}=this.getEventPosition(t),n=this.hueSlider.getBoundingClientRect(),r=Math.max(0,Math.min(o-n.left,n.width));this.hsv.h=r/n.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};l([d({type:String})],z.prototype,"value",void 0),l([d({type:String,attribute:"default-value"})],z.prototype,"defaultValue",void 0),l([d({type:String})],z.prototype,"label",void 0),l([d({type:String})],z.prototype,"hint",void 0),l([d({type:String})],z.prototype,"name",void 0),l([d({type:Boolean,reflect:!0})],z.prototype,"disabled",void 0),l([d({type:String,reflect:!0})],z.prototype,"size",void 0),l([d({type:Array})],z.prototype,"swatches",void 0),l([d({type:String})],z.prototype,"mode",void 0),l([P()],z.prototype,"opened",void 0),l([P()],z.prototype,"popupDirection",void 0),l([P()],z.prototype,"sourceSpace",void 0),l([P()],z.prototype,"hsv",void 0),l([P()],z.prototype,"saturationThumbPosition",void 0),l([P()],z.prototype,"hueThumbPosition",void 0),z=l([M("mov-color-picker")],z);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var lc=(e,t,o)=>{for(const n of t)if(n[0]===e)return(0,n[1])();return o?.()},le=class extends x{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=T`
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,o){this.value=o,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:o,offsetHeight:n}=t,r=t.getBoundingClientRect(),i=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),a=r.left-(i?.left??0),s=r.top-(i?.top??0);this.thumb.style.transform=`translate(${a}px, ${s}px)`,this.thumb.style.width=`${o}px`,this.thumb.style.height=`${n}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return p`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>p`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:I}"
            >
              <button
                class="${$({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${o=>this.handleClick(o,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?p`<mov-icon
                      name="${t.icon}"
                      .size=${lc(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:I}
                ${this.labelPosition!=="tooltip"?p`<span>${t.label}</span>`:I}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};l([d({type:String,reflect:!0})],le.prototype,"value",void 0),l([d({type:String})],le.prototype,"labelPosition",void 0),l([d({type:String})],le.prototype,"size",void 0),l([P()],le.prototype,"_options",void 0),l([re(".thumb")],le.prototype,"thumb",void 0),l([re("slot")],le.prototype,"_slotEl",void 0),le=l([M("segmented-control")],le);var He=class extends x{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};l([d({type:String,reflect:!0})],He.prototype,"value",void 0),l([d({type:String,reflect:!0})],He.prototype,"label",void 0),l([d({type:String,reflect:!0})],He.prototype,"icon",void 0),He=l([M("segmented-control-option")],He);var Z=class extends x{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=T`
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
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let o;return t==="graphical"?o=p`${this.checked?ct:Ut}`:o=p`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,p`
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
            class="${$({switch:!0,[t]:!0})}"
          >
            <div class="knob">${o}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};l([d({type:String})],Z.prototype,"name",void 0),l([d({type:String})],Z.prototype,"value",void 0),l([d({type:Boolean,reflect:!0})],Z.prototype,"checked",void 0),l([d({type:Boolean,reflect:!0,attribute:"default-checked"})],Z.prototype,"defaultChecked",void 0),l([d({type:Boolean,reflect:!0})],Z.prototype,"disabled",void 0),l([d({type:Boolean,reflect:!0})],Z.prototype,"required",void 0),l([d({type:String,reflect:!0})],Z.prototype,"size",void 0),l([d({type:String})],Z.prototype,"hint",void 0),l([d({type:String,reflect:!0})],Z.prototype,"design",void 0),l([d({type:String})],Z.prototype,"textOn",void 0),l([d({type:String})],Z.prototype,"textOff",void 0),Z=l([M("mov-switch")],Z);var sc=`:host {\r
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
`,O=class extends x{static{this.styles=[b(sc)]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(t){return(t-this.min)/(this.max-this.min)*100}getValueFromPercentage(t){const o=this.min+t/100*(this.max-this.min);return this.step?Math.round(o/this.step)*this.step:o}getValueFromPointer(t,o,n){let r;return this.vertical?r=(n.bottom-o)/n.height*100:r=(t-n.left)/n.width*100,r=Math.max(0,Math.min(100,r)),this.getValueFromPercentage(r)}clampValue(t){let o=Math.max(this.min,Math.min(this.max,t));return this.step&&(o=Math.round(o/this.step)*this.step),Number(o.toFixed(10))}handleThumbPointerDown(t,o){this.disabled||this.readonly||!this.track||(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),this.activeDrag={thumb:o,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=o,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(t){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:o,trackRect:n}=this.activeDrag,r=this.getValueFromPointer(t.clientX,t.clientY,n);if(this.dual){const i=this.values;if(o==="min"){const a=Math.min(r,i[1]-(this.step||1));this.updateValue([a,i[1]],"input")}else{const a=Math.max(r,i[0]+(this.step||1));this.updateValue([i[0],a],"input")}}else this.updateValue(r,"input")}_handlePointerUp(t){this.activeDrag&&(this.shadowRoot?.querySelector(".mov-slider__thumb--active")?.releasePointerCapture(t.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(t,o="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(t)?(t=[this.clampValue(t[0]),this.clampValue(t[1])],t[0]>t[1]&&(t=[t[1],t[0]])):!this.dual&&typeof t=="number"&&(t=this.clampValue(t)),this.value=t,this.dispatchEvent(new CustomEvent(o,{bubbles:!0,composed:!0,detail:{value:t}})))}handleTrackClick(t){if(this.disabled||this.readonly||!this.track)return;const o=this.track.getBoundingClientRect(),n=this.getValueFromPointer(t.clientX,t.clientY,o);if(this.dual){const r=this.values;Math.abs(n-r[0])<Math.abs(n-r[1])?this.updateValue([n,r[1]]):this.updateValue([r[0],n])}else this.updateValue(n)}renderTicks(){if(!this.showTicks)return null;const t=new Set;t.add(this.min),t.add(this.max);let o=this.tickStep;if(this.tickCount>1&&(o=Math.round((this.max-this.min)/(this.tickCount-1))),o>0){const n=Math.floor((this.max-this.min)/o);if(n<=100)for(let r=1;r<=n;r++){const i=this.min+r*o;i<this.max&&t.add(Number(i.toFixed(10)))}}return p`<div class="mov-slider__ticks">${Array.from(t).sort((n,r)=>n-r).map(n=>{const r=this.getPercentage(n);return p`
        <div class="mov-slider__tick" style="${this.vertical?`bottom: ${r}%`:`inset-inline-start: ${r}%`}">
          <div class="mov-slider__tick-label">${n}</div>
        </div>
      `})}</div>`}renderThumb(t,o){const n=this.getPercentage(t),r=this.focusedThumb===o,i=this.draggingThumb===o,a=this.vertical?`bottom: ${n}%`:`inset-inline-start: ${n}%`;return p`
      <div
        class="mov-slider__thumb ${r?"mov-slider__thumb--focused":""} ${i?"mov-slider__thumb--active":""}"
        style="${a}"
        @pointerdown=${s=>this.handleThumbPointerDown(s,o)}
      >
        ${this.showTooltip?p`<div class="mov-slider__tooltip">${t}</div>`:""}
      </div>
    `}renderProgress(){const t=this.values;if(this.dual){const n=this.getPercentage(t[0]),r=this.getPercentage(t[1]);return p`<div
        class="mov-slider__progress"
        style="${this.vertical?`bottom: ${n}%; height: ${r-n}%`:`left: ${n}%; width: ${r-n}%`}"
      ></div>`}const o=this.getPercentage(t[1]);return p`<div
      class="mov-slider__progress"
      style="${this.vertical?`bottom: 0; height: ${o}%`:`left: 0; width: ${o}%`}"
    ></div>`}render(){const t=this.values;return p`
      <div
        class="mov-slider"
        part="base"
      >
        ${this.label?p`<label class="mov-form-control__label">${this.label}</label>`:""}
        <div
          class="mov-slider__container"
          @click=${this.handleTrackClick}
        >
          <div class="mov-slider__track">
            ${this.renderProgress()} ${this.renderTicks()}
            ${this.dual?p`${this.renderThumb(t[0],"min")}${this.renderThumb(t[1],"max")}`:this.renderThumb(t[1],"single")}
          </div>
        </div>
        ${this.helpText&&!this.invalid?p`<div class="mov-form-control__helper">${this.helpText}</div>`:""}
        ${this.invalid&&this.errorMessage?p`<div class="mov-form-control__error">${this.errorMessage}</div>`:""}
      </div>
    `}};l([d({type:String})],O.prototype,"label",void 0),l([d({attribute:"help-text"})],O.prototype,"helpText",void 0),l([d({attribute:"error-message"})],O.prototype,"errorMessage",void 0),l([d({type:Number})],O.prototype,"min",void 0),l([d({type:Number})],O.prototype,"max",void 0),l([d({type:Number})],O.prototype,"step",void 0),l([d({type:Object})],O.prototype,"value",void 0),l([d({type:Boolean,reflect:!0})],O.prototype,"dual",void 0),l([d({type:Boolean,reflect:!0})],O.prototype,"vertical",void 0),l([d({type:Boolean,reflect:!0})],O.prototype,"filled",void 0),l([d({reflect:!0})],O.prototype,"size",void 0),l([d({type:Boolean,reflect:!0})],O.prototype,"disabled",void 0),l([d({type:Boolean,reflect:!0})],O.prototype,"readonly",void 0),l([d({type:Boolean,reflect:!0})],O.prototype,"invalid",void 0),l([d({type:Boolean,attribute:"show-tooltip"})],O.prototype,"showTooltip",void 0),l([d({type:Boolean,attribute:"show-ticks"})],O.prototype,"showTicks",void 0),l([d({type:Number,attribute:"tick-step"})],O.prototype,"tickStep",void 0),l([d({type:Number,attribute:"tick-count"})],O.prototype,"tickCount",void 0),l([P()],O.prototype,"focusedThumb",void 0),l([P()],O.prototype,"draggingThumb",void 0),l([re(".mov-slider__track")],O.prototype,"track",void 0),O=l([M("mov-slider")],O);var cc=pe((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),jo=pe((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=a;var t=cc();function o(s){return t.relativeFirstCharacters.indexOf(s[0])>-1}function n(s){return s.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(u,m){return String.fromCharCode(m)})}function r(s){return URL.canParse(s)}function i(s){try{return decodeURIComponent(s)}catch{return s}}function a(s){if(!s)return t.BLANK_URL;var u,m=i(s.trim());do m=n(m).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),m=i(m),u=m.match(t.ctrlCharactersRegex)||m.match(t.htmlEntitiesRegex)||m.match(t.htmlCtrlEntityRegex)||m.match(t.whitespaceEscapeCharsRegex);while(u&&u.length>0);var v=m;if(!v)return t.BLANK_URL;if(o(v))return v;var w=v.trimStart(),A=w.match(t.urlSchemeRegex);if(!A)return v;var D=A[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(D))return t.BLANK_URL;var S=w.replace(/\\/g,"/");if(D==="mailto:"||D.includes("://"))return S;if(D==="http:"||D==="https:"){if(!r(S))return t.BLANK_URL;var We=new URL(S);return We.protocol=We.protocol.toLowerCase(),We.hostname=We.hostname.toLowerCase(),We.toString()}return S}}))();function dc(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function hc(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return f(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){f(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:o=>{o.status===200?(f(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(o.response)):(f(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,o.statusText),t(null))},onerror:o=>{f(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,o),t(null)}})}):null}async function uc(e){const t=e.ref?.value;if(!t)return null;try{const o=document.createElement("canvas"),n=o.getContext("2d");if(n)return o.width=t.naturalWidth,o.height=t.naturalHeight,n.drawImage(t,0,0),await new Promise(r=>{o.toBlob(i=>{i&&f(`Got blob for page ${e.src} from canvas`),r(i)},"image/png",1)})}catch(o){f(`Failed to get blob for page ${e.src} from canvas`,o)}return null}async function pc(e){if(e.blob)return f(`Got blob for page ${e.src} from cache`),e.blob;const t=await hc(e)||await uc(e);return t||f(`Failed to get blob for page ${e.src}`),t}async function mc(){k("download","working");const e=new JSZip,t=g("images")??{},o=g("manga"),n=o?.pages??0,r=Math.floor(Math.log10(n||1))+1,i=_.sortBy(_.entries(t),([m])=>Number(m)),a=[],s=m=>{k("dialog",{open:!0,title:c("BUTTON_DOWNLOAD"),content:p`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${c("DOWNLOAD_PROGRESS").replace("##num##",m.toString()).replace("##total##",n.toString())}</p>
          <progress value='${m}' max='${n}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:p`
        <mov-button @click=${()=>k("download","cancelled")}>
          ${c("CANCEL")}
        </mov-button>
      `})};s(0);let u=0;for(const[m,v]of i){if(g("download")==="cancelled"){f("Download cancelled"),k("dialog",null),k("download",void 0);return}try{const w=await pc(v);if(w){const A=dc(w.type),D=`Page-${Number(m).toString().padStart(r,"0")}.${A}`;f(`${D} Added to Zip from Blob`),e.file(D,w,{createFolders:!0,compression:"DEFLATE"})}else a.push(v.src??m)}catch(w){f(`Error processing page ${m}`,w),a.push(v.src??m)}finally{u+=1,s(u)}}k("dialog",{open:!0,title:c("BUTTON_DOWNLOAD"),content:p`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${c("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:p``}),a.length>0&&(f("Some images failed to download:",a),e.file("failed_pages.txt",a.join(`
`))),f("Generating Zip"),e.generateAsync({type:"blob"}).then(m=>{f("Download Ready");const v=`${o?.title??document.title}.zip`;window.saveAs(m,v,{autoBom:!1}),a.length>0?k("dialog",{open:!0,title:c("DOWNLOAD_INCOMPLETE"),icon:"warning",content:p`<p>${c("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:p`<mov-button @click=${()=>k("dialog",null)}>
            ${c("CLOSE")}
          </mov-button>`}):k("dialog",null)}).catch(m=>{f("Error generating zip",m),k("dialog",{open:!0,title:c("WARNING"),icon:"error",content:p`<p>Error generating zip: ${m.message}</p>`,footer:p`<mov-button @click=${()=>k("dialog",null)}>
          ${c("CLOSE")}
        </mov-button>`})}).finally(()=>{k("download",void 0)})}function qo(){g("download")!=="working"&&(f("Downloading Chapter"),mc().catch(e=>f("Error downloading chapter",e)))}function gc(){xe("hidePageControls",e=>!e)}function Ge(e){const t=e.currentTarget||e.target,o=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(o&&o!=="#"?window.location.href=(0,jo.sanitizeUrl)(o):t.id==="series"&&(It()?window.location.href=window.location.pathname:window.history.back()))}function vc(e){if(e)if(h("viewMode").startsWith("Fluid")){const t=g("chapter").value;if(t){const o=e.getBoundingClientRect(),n=t.getBoundingClientRect();t.scrollBy({left:o.left-n.left,top:o.top-n.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}V.listen((e,t,o)=>{o==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):vc(g("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>k("scrollToPage",void 0),10))});function fc(e){const t=e.detail.value;k("scrollToPage",typeof t=="string"?parseInt(t,10):t)}function bc(e){k("scrollToPage",e)}function Qo(){const e=g("chapter").value;if(h("viewMode").startsWith("Fluid")){const t=h("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:h("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(k("autoScroll",!1),f("Finished auto scroll"))}else window.scrollBy({top:h("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(k("autoScroll",!1),f("Finished auto scroll"));g("autoScroll")&&requestAnimationFrame(Qo)}function ht(){g("autoScroll")?(k("autoScroll",!1),f("Stopped auto scroll")):(k("autoScroll",!0),requestAnimationFrame(Qo),f("Start auto scroll"))}var ut=!1,wc=_.debounce(()=>{ht(),ut=!1},500);function kc(){!ut&&g("autoScroll")&&(ht(),ut=!0),ut&&!g("autoScroll")&&wc()}function yc(){window.addEventListener("wheel",_.throttle(kc,500))}var ee=class extends x{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=T`
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.mode!=="inline"&&this.lightDismiss&&this.close()}handleClick(t){this.mode!=="inline"&&this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return p`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":p`
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
                ${Ut}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?p`
                <div class="icon-container">
                  <mov-icon
                    .name=${Ec(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};l([d({type:Boolean,reflect:!0})],ee.prototype,"open",void 0),l([d({type:String,reflect:!0})],ee.prototype,"mode",void 0),l([d({type:Boolean,reflect:!0})],ee.prototype,"fullscreen",void 0),l([d({type:String,reflect:!0})],ee.prototype,"label",void 0),l([d({type:Boolean,reflect:!0,attribute:"without-header"})],ee.prototype,"withoutHeader",void 0),l([d({type:Boolean,reflect:!0,attribute:"light-dismiss"})],ee.prototype,"lightDismiss",void 0),l([d({type:String,reflect:!0})],ee.prototype,"icon",void 0),l([re("dialog")],ee.prototype,"dialog",void 0),ee=l([M("mov-dialog")],ee);function Zt(e){const t=()=>k("dialog",null);e.timer&&setTimeout(t,e.timer),k("dialog",{open:!0,icon:e.icon,title:e.title,content:p`<div style="padding: 1rem;">${zo(e.html)}</div>`,footer:p`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function Ec(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function Ic(e){const t=e.currentTarget.value;Wo(t==="true")}function _c(e){const t=e.currentTarget.value;L("locale",t)}function Ac(e){const t=e.currentTarget.value;L("loadMode",t)}function xc(e){const t=e.detail.checked;L("fitWidthIfOversize",t)}function Mc(e){const t=e.currentTarget.value;L("navbar",t)}function Sc(e){const t=e.currentTarget.value;L("pagination",t)}function Cc(e){const t=e.detail.checked;L("downloadZip",t),t&&Zt({title:c("ATTENTION"),html:c("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function Oc(e){const t=e.detail.checked;L("lazyLoadImages",t),t&&Zt({title:c("WARNING"),html:c("LAZY_LOAD"),icon:"warning"})}function Tc(e){const t=e.detail.value;L("lazyStart",typeof t=="string"?parseInt(t,10):t)}function $c(e){const t=e.currentTarget.value;L("loadSpeed",t),["Extreme","All"].includes(t)&&Zt({title:c("SPEED_WARNING"),html:c("SPEED_WARNING_MESSAGE"),icon:"warning"})}function Lc(e){const t=e.detail.value;L("zoomStep",typeof t=="string"?parseInt(t,10):t)}function Dc(e){const t=e.detail.value,o=typeof t=="string"?parseInt(t,10):t;Cs("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${o}vw;}`),L("minZoom",o)}function Rc(e){const t=e.detail.checked;L("hidePageControls",t)}function Nc(e){const t=e.currentTarget.value;L("header",t)}function Pc(e){const t=e.detail.value;L("scrollHeight",typeof t=="string"?parseInt(t,10):t)}function Yo(e){xe("scrollHeight",t=>{const o=t+e*25;if(o<=0)return 0;const n=Math.ceil(window.innerHeight/200)*100;return o>=n?n:o})}function zc(e){const t=e.currentTarget.value;L("deviceMode",t),k("device",Ft(t))}function Bc(){const e=h("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function Hc(){return h("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function Xo(e,t=h("zoomMode"),o=h("zoomValue")){const n=Bc(),r=Hc();if(t==="width")e.width=n,e.height=void 0;else if(t==="height")e.width=void 0,e.height=r;else if(t==="percent"){const i=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=i?i*(o/100):void 0,e.height=void 0}return e}function se(e=h("zoomMode"),t=h("zoomValue")){f("Zoom",e,t),Ae("zoomMode",e),Ae("zoomValue",t),e==="height"?k("scrollToPage",g("currentPage")):ke("header");const o=g("images"),n=g("manga"),r={};for(let i=n?.begin??1;i<=(n?.pages??1);i++)r[i]=Xo({...o?.[i]},e,t);k("images",r)}function Ce(e,t=h("zoomValue")){return()=>{se(e,t)}}function pt(e=1){return()=>{const t=h("zoomValue")+e*h("zoomStep");t>0&&t<500&&se("percent",t)}}function Gc(e){const t=e.currentTarget.value;L("zoomMode",t)}function Vc(e){const t=e.detail.value,o=typeof t=="string"?parseInt(t,10):t;L("zoomValue",o),se("percent",o)}function Fc(e){const t=e.detail.value;se("percent",typeof t=="string"?parseInt(t,10):t)}function j(e){return()=>{Ae("viewMode",e),["FluidLTR","FluidRTL","Book","Manga"].includes(e)?(Ae("zoomMode","height"),Ae("header","click"),se("height")):(ke("zoomMode"),ke("zoomValue"),ke("header")),se()}}function Wc(e){const t=e.currentTarget.value;L("viewMode",t),j(t)()}function Uc(e){const t=h("viewMode")==="FluidRTL"?-1:1;g("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function Zc(e){const t=g("currentPage")+e;t<0?k("scrollToPage",0):t>(g("manga")?.pages??1)||k("scrollToPage",t)}function jc(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function qc(e){const t=g("currentPage"),o=g("manga");if(!o)return;const n=g("images")??{},r=o.begin??1,i=o.pages??1,a=u=>{if(u<r||u>i)return!1;if(n[u]?.doublePage)return!0;let m=0;for(let v=u-1;v>=r&&!n[v]?.doublePage;v--)m++;return m%2===0};let s;if(e===1)for(s=t+1;s<=i&&!a(s);)s++;else if(a(t))for(s=t-1;s>r&&!a(s);)s--;else for(s=t;s>r&&!a(s);)s--;s<r?k("scrollToPage",0):s>i?k("scrollToPage",i):k("scrollToPage",s)}function Ko(e){const t=h("viewMode"),o=h("zoomMode");f("Scrolling view",t,"zoom",o,"sign",e),t.match(/^(Book|Manga)$/)&&o==="height"?qc(e):t.startsWith("Fluid")?Uc(e):o==="height"?Zc(e):jc(e)}function Ve(e){const t=g("manga")?.[e];t&&t!=="#"?window.location.href=(0,jo.sanitizeUrl)(t):e==="series"&&(It()?window.location.href=window.location.pathname:window.history.back())}var Qc={SCROLL_UP(){Ko(-1)},SCROLL_DOWN(){Ko(1)},NEXT_CHAPTER(){Ve("next")},PREVIOUS_CHAPTER(){Ve("prev")},RETURN_CHAPTER_LIST(){Ve("series")},ENLARGE(){pt(1)()},REDUCE(){pt(-1)()},RESTORE(){Ce("percent",100)()},FIT_WIDTH(){Ce("width")()},FIT_HEIGHT(){Ce("height")()},SETTINGS(){Fo("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){j("WebComic")()},VIEW_MODE_VERTICAL(){j("Vertical")()},VIEW_MODE_LEFT(){j("FluidRTL")()},VIEW_MODE_RIGHT(){j("FluidLTR")()},VIEW_MODE_GALLERY(){j("Gallery")()},SCROLL_START(){ht()},INCREASE_SPEED(){Yo(1)},DECREASE_SPEED(){Yo(-1)},TOGGLE_CONTROLS(){xe("hidePageControls",e=>!e)}};function Jo(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,hotkeys.unbind(),_.keys(h("keybinds")).forEach(e=>{hotkeys(h("keybinds")[e]?.join(",")??"",_.throttle(t=>{g("panel")!=="keybindingsEditor"&&(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),Qc[e]())},100))})}var ce=class extends x{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=T`
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
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return p`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${Ge}
          value="${this.prev}"
          ?disabled=${q(this.prev)||this.prev==="#"}
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
            @input="${fc}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${Ge}
          value="${this.next}"
          ?disabled=${q(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return p`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(q(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(q(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return I;const t=this.mode==="slider"||this.mode==="both",o=this.mode==="side-arrows"||this.mode==="both";return p`
      ${t?this.renderSlider():I} ${o?this.renderSideArrows():I}
    `}handleLeftArrowClick(){this.isFirstPage?Ve("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?Ve("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){k("scrollToPage",t)}};l([d({type:String})],ce.prototype,"mode",void 0),l([d({type:Number})],ce.prototype,"currentPage",void 0),l([d({type:Number})],ce.prototype,"totalPages",void 0),l([d({type:Number})],ce.prototype,"startPage",void 0),l([d({type:String})],ce.prototype,"next",void 0),l([d({type:String})],ce.prototype,"prev",void 0),ce=l([M("manga-pagination")],ce);var de=class extends x{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=T`
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(t){this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return p`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":p`
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
                ${Ut}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};l([d({type:Boolean,reflect:!0})],de.prototype,"open",void 0),l([d({type:String,reflect:!0})],de.prototype,"placement",void 0),l([d({type:String,reflect:!0})],de.prototype,"label",void 0),l([d({type:Boolean,reflect:!0,attribute:"without-header"})],de.prototype,"withoutHeader",void 0),l([d({type:Boolean,reflect:!0,attribute:"light-dismiss"})],de.prototype,"lightDismiss",void 0),l([re("dialog")],de.prototype,"dialog",void 0),de=l([M("mov-drawer")],de);var ye=class extends x{static{this.styles=T`
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
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return p`
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
    `}};l([d({type:Boolean,reflect:!0})],ye.prototype,"open",void 0),l([d({type:Boolean,reflect:!0})],ye.prototype,"checkable",void 0),l([d({type:Number})],ye.prototype,"distance",void 0),l([d({type:Number})],ye.prototype,"skidding",void 0),l([d({type:String})],ye.prototype,"placement",void 0),ye=l([M("mov-dropdown")],ye);var he=class extends x{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=T`
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
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return p`
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
    `}};l([d({type:Boolean,reflect:!0})],he.prototype,"selected",void 0),l([d({type:Boolean,reflect:!0})],he.prototype,"checked",void 0),l([d({type:Boolean,reflect:!0})],he.prototype,"disabled",void 0),l([d({type:String})],he.prototype,"value",void 0),l([d({type:String,reflect:!0})],he.prototype,"variant",void 0),l([d({type:String,reflect:!0})],he.prototype,"type",void 0),he=l([M("mov-dropdown-item")],he);var jt=class extends x{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=T`
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
  `}render(){return p`<div
      class="divider"
      role="separator"
    ></div>`}};l([d({type:String,reflect:!0})],jt.prototype,"orientation",void 0),jt=l([M("mov-divider")],jt);var en=`/**\r
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
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */`,Yc=pe((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(o,n){this.host=o,this.atom=n,o.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var o;(o=this.unsubscribe)===null||o===void 0||o.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),qt=pe((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(o,n){this.host=o,this.atoms=n,o.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(o=>o.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var o;(o=this.unsubscribes)===null||o===void 0||o.forEach(n=>n())}get values(){return this.atoms.map(o=>o.get())}};e.MultiStoreController=t})),Xc=pe((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=qt();function o(...n){return r=>class extends r{constructor(...i){super(...i),new t.MultiStoreController(this,n)}}}e.useStores=o})),Kc=pe((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=qt(),o=(n,r)=>class extends n{constructor(...a){super(...a),new t.MultiStoreController(this,r)}};e.withStores=o})),Oe=pe((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=Yc();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var o=qt();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return o.MultiStoreController}});var n=Xc();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return n.useStores}});var r=Kc();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return r.withStores}})}))(),tn=class extends x{static{this.styles=T`
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
  `}render(){return p`
      <div
        class="button-group"
        role="group"
      >
        <slot></slot>
      </div>
    `}};tn=l([M("mov-button-group")],tn);var mt=49,Jc=100,e0=class kn{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=_.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const n=h("header"),{scrollY:r}=window;let i="none";h("zoomMode")!=="height"&&r+window.innerHeight+Jc>document.body.scrollHeight?i="end":r>this.prevOffset&&r>mt?i="hide":n==="scroll"&&r<this.prevOffset&&r>mt?i="show":n!=="click"&&r<=mt&&(i="top");let a=!1;if(this.headroom!==i&&(this.headroom=i,a=!0),n==="scroll"){const s=i!=="hide";this.headerVisible!==s&&(this.headerVisible=s,a=!0)}a&&this.host.requestUpdate(),this.prevOffset=r},300),this.handleMouseMove=_.throttle(n=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(h("header"))){const r=kn.isMouseInsideRegion(n,window.innerWidth,mt*1.5);this.headerVisible!==r&&(this.headerVisible=r,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{h("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const o=h("header");h("zoomMode")==="height"&&["click","hover"].includes(o)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const o of t)if(o.open)return!0;return!1}static isMouseInsideRegion(t,o,n){return t.clientX>=0&&t.clientX<=o&&t.clientY>=0&&t.clientY<=n}},t0=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this);const t=document.createElement("canvas");this.canvasContext=t.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,o=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=o){this.value=t,this.host.requestUpdate();return}const n="...",r=o-this.canvasContext.measureText(n).width;let i="",a="";for(let s=1;s<t.length;s++){const u=t.substring(0,s),m=t.substring(t.length-s);if(this.canvasContext.measureText(u).width+this.canvasContext.measureText(m).width>r)break;i=u,a=m}this.value=`${i}${n}${a}`,this.host.requestUpdate()}};function on(e=window.location.href){q(Me(e))||(f(`Bookmark Removed ${e}`),xe("bookmarks",t=>[...t.filter(o=>o.url!==e)]))}function o0(e){const t=e.currentTarget.value;f(`Bookmark Removed ${t}`),F.error({title:c("BOOKMARK_REMOVED"),duration:1e4}),on(t)}function n0(){k("panel","bookmarks")}function nn(){const e=g("currentPage"),t={name:g("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};Me(t.url)?(xe("bookmarks",o=>[...o.filter(n=>n.url!==t.url)]),F.error({title:c("BOOKMARK_REMOVED"),duration:1e4})):(xe("bookmarks",o=>[...o,t]),F.success({title:c("BOOKMARK_SAVED"),description:c("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Qt(){k("panel","none")}function r0(){k("panel","settings")}function i0(){k("panel","keybindings")}function a0(e){const t={};_.keys(e).forEach(o=>{const n=e[o].value;if(n){const r=n.value.split(",").map(i=>i.trim()).filter(i=>i!=="");t[o]=r.length>0?r:void 0}}),L("keybinds",t),k("panel","keybindings"),Jo()}function l0(){k("panel","keybindingsEditor")}var s0=`#Header {\r
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
`,rn=`#Header.mobile,\r
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
`,gt=class extends x{static{this.styles=[b(s0),b(rn),b(en),T``]}constructor(){super(),this.headroomController=new e0(this),this.titleController=new t0(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return p``;const{headroom:t,headerVisible:o}=this.headroomController,n=h("keybinds"),r=i=>{if(g("device")!=="desktop")return I;const a=n[i];return!a||a.length===0?I:a.map(s=>p`<kbd slot="details">${s}</kbd>`)};return p`
      <toggle-button
        id="menu"
        mode="burger"
        class="${$({[h("header")]:!0,hide:["top","end"].includes(t)})}"
        ?active=${o}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${$({[h("header")]:!0,[`headroom-${t}`]:!0,visible:o&&["hide","none"].includes(t),[g("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${$({"button-group-merged-end":["mobile","tablet"].includes(g("device"))})}"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${c("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${r0}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${c("SETTINGS")} ${r("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${i0}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${c("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${n0}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${c("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${$({running:g("autoScroll")})}"
              @click=${ht}
            >
              <mov-icon
                slot="icon"
                name="${g("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${c("SCROLL_START")} ${r("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${gc}"
              ?selected=${h("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${c("TOGGLE_CONTROLS")} ${r("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${c("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${j("WebComic")}"
              ?selected=${h("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${c("VIEW_MODE_WEBCOMIC")} ${r("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${j("Vertical")}"
              ?selected=${h("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${c("VIEW_MODE_VERTICAL")} ${r("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${j("FluidLTR")}"
              ?selected=${h("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${c("VIEW_MODE_LEFT")} ${r("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${j("FluidRTL")}"
              ?selected=${h("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${c("VIEW_MODE_RIGHT")} ${r("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${j("Book")}"
              ?selected=${h("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${c("VIEW_MODE_BOOK")} ${r("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${j("Manga")}"
              ?selected=${h("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${c("VIEW_MODE_MANGA")} ${r("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${j("Gallery")}"
              ?selected=${h("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${c("VIEW_MODE_GALLERY")} ${r("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${c("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${pt()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${c("ENLARGE")} ${r("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Ce("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${c("RESTORE")} ${r("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${pt(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${c("REDUCE")} ${r("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Ce("width")}"
              ?selected=${h("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${c("FIT_WIDTH")} ${r("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Ce("height")}"
              ?selected=${h("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${c("FIT_HEIGHT")} ${r("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${$({"button-group-merged-start":["mobile","tablet"].includes(g("device"))})}"
        >
          <mov-button
            id="series"
            href="${this.manga.series??I}"
            @click=${Ge}
            title="${c("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${c("DOWNLOAD_ZIP")}"
            @click=${qo}
            ?disabled=${g("download")!=="available"}
            ?loading=${g("download")==="working"}
          >
            <mov-icon
              name="${g("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??I}"
            title="${c("PREVIOUS_CHAPTER")}"
            @click=${Ge}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??I}"
            title="${c("NEXT_CHAPTER")}"
            @click=${Ge}
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
            ${h("zoomMode")==="percent"?`${h("zoomValue")}%`:h("zoomMode")}
          </output>
          <mov-slider
            id="Zoom"
            name="Zoom"
            .value="${h("zoomValue")}"
            min="${h("minZoom")}"
            max="200"
            show-tooltip
            @input=${Fc}
          ></mov-slider>
        </div>
      </header>
    `}};l([re("#MangaTitle")],gt.prototype,"mangaTitleElement",void 0),l([d({type:Object})],gt.prototype,"manga",void 0),gt=l([M("reader-header"),(0,Oe.useStores)(N,_e,V)],gt);var c0=`#BookmarksPanel {\r
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
`,an=class extends x{static{this.styles=[b(c0)]}listBookmarks(){return yt(h("bookmarks"))?[c("LIST_EMPTY")]:h("bookmarks").map((t,o)=>p`
        <div
          id="Bookmark${o+1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${t.name}</div>
            <a
              class="bookmark-url"
              href="${t.url}"
              target="_blank"
              >${t.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(t.date).toISOString().slice(0,10)}</div>
            <div class="bookmark-page">Page: ${t.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${t.url}"
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
              value="${t.url}"
              @click=${o0}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return p`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${g("panel")==="bookmarks"}
        light-dismiss
        @close=${Qt}
      >
        <mov-button
          class="Bookmark"
          title="${c("BOOKMARK")}"
          @click=${nn}
          slot="header-actions"
        >
          <mov-icon
            name="${Me()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${c("BOOKMARKS")}</h2>
        <h2 slot="label">${c("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};an=l([M("bookmark-panel"),(0,Oe.useStores)(N,_e,V)],an);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function*d0(e,t){const o=typeof t=="function";if(e!==void 0){let n=-1;for(const r of e)n>-1&&(yield o?t(n):t),n++,yield r}}var h0=`#KeybindingsPanel div {\r
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
`,ln=class extends x{constructor(...t){super(...t),this.keybindsRefs=_.keys(h("keybinds")).reduce((o,n)=>(o[n]=Tt(),o),{})}static{this.styles=[b(h0),b(en)]}keybindList(){const t=h("keybinds");return _.keys(t).map(o=>{const n=t[o]?.length?d0(t[o]?.map(r=>p`<kbd class="dark">${r}</kbd>`)," / "):"";return p`<span>${c(o)}:</span> <span>${n}</span>`})}keybindEditor(){const t=h("keybinds");return _.keys(t).map(o=>p`<label for="${o}">${c(o)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${o}"
            name="${o}"
            value="${t[o]?.join(" , ")??I}"
            ${Lt(this.keybindsRefs[o])}
          />`)}render(){return p`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${g("panel").startsWith("keybindings")}
        placement="end"
        @close=${Qt}
      >
        <h2 slot="label">${c("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${g("panel")==="keybindingsEditor"?p` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${c("SAVE_KEYBINDS")}"
                @click=${()=>a0(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${c("BUTTON_SAVE")}
              </mov-button>`:p` <mov-button
                id="EditKeybindings"
                type="button"
                title="${c("EDIT_KEYBINDS")}"
                @click=${l0}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${c("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${g("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${zo(c("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};ln=l([M("keybindings-panel"),(0,Oe.useStores)(N,_e,V)],ln);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function*u0(e,t){if(e!==void 0){let o=0;for(const n of e)yield t(n,o++)}}function vt(e,t=1){return Array(e).fill(0).map((o,n)=>n+1).filter(o=>o>=t)}function ft(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}_.values(R).map(e=>e[900]);function sn(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function p0(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var m0=`:host {\r
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
`,Fe=class extends x{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[b(m0),T`
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
        background-image: url('${b(ft(Ht))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${b(ft(Gt))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return I;const t=g("manga"),o={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},n=g("images")||{},r=_.keys(n).filter(i=>{const a=parseInt(i,10);return a>=(t?.begin??1)&&a<=(t?.pages??1)&&n[a]?.status==="loaded"}).length;return p`
      <nav
        id="Navigation"
        class="${$(o)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${qs}
          <i>${r}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${c("PAGES_LOADED")}
          <span>: ${g("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?sn:null}
        >
          ${u0(vt(t?.pages??1,t?.begin??1),i=>p` <figure
                id="Thumbnail${i}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${i}"
                @click=${()=>bc(i)}
              >
                <img
                  id="ThumbnailImg${i}"
                  alt=""
                  class="ThumbnailImg"
                  src=${g("images")?.[i]?.src??I}
                />
                <figcaption class="ThumbnailIndex">${i}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};l([d({type:String})],Fe.prototype,"mode",void 0),l([d({type:Boolean})],Fe.prototype,"forceExpanded",void 0),l([P()],Fe.prototype,"isHiding",void 0),Fe=l([M("navbar-thumbnails"),(0,Oe.useStores)(N,_e,V)],Fe);function g0(){const e=we()?"true":"false";return p` <div class="ControlLabel">
    ${c("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${Ic}
    >
      <segmented-control-option
        value="false"
        label=${c("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function v0(){return Ee.map(e=>p`
      <option
        value="${e.ID}"
        ?selected=${h("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function f0(){return p` <div class="ControlLabel locale">
    ${c("LANGUAGE")}
    <select
      id="locale"
      @change="${_c}"
    >
      ${v0()}
    </select>
  </div>`}function b0(){const e=h("deviceMode");return p` <div class="ControlLabel">
    ${c("DEVICE_MODE")}
    <segmented-control
      .value=${e}
      @change=${zc}
    >
      <segmented-control-option
        value="auto"
        label=${c("DEVICE_MODE_AUTO")}
        icon="IconAdjustmentsHorizontal"
      ></segmented-control-option>
      <segmented-control-option
        value="desktop"
        label=${c("DEVICE_MODE_DESKTOP")}
        icon="IconDeviceDesktop"
      ></segmented-control-option>
      <segmented-control-option
        value="tablet"
        label=${c("DEVICE_MODE_TABLET")}
        icon="IconDeviceTablet"
      ></segmented-control-option>
      <segmented-control-option
        value="mobile"
        label=${c("DEVICE_MODE_MOBILE")}
        icon="IconDeviceMobile"
      ></segmented-control-option>
    </segmented-control>
  </div>`}var w0=()=>p`${g0()} ${b0()} ${f0()}`;function k0(){return p`
    <div class="ControlLabel loadMode">
      ${c("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${Ac}"
      >
        <option
          value="wait"
          ?selected=${h("loadMode")==="wait"}
        >
          ${c("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${h("loadMode")==="always"}
        >
          ${c("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${h("loadMode")==="never"}
        >
          ${c("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function y0(){return p`
    <div class="ControlLabel PagesPerSecond">
      ${c("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${$c}"
      >
        <option
          value="Safe"
          ?selected=${h("loadSpeed")==="Safe"}
        >
          ${c("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${h("loadSpeed")==="Standard"}
        >
          ${c("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${h("loadSpeed")==="Faster"}
        >
          ${c("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${h("loadSpeed")==="Extreme"}
        >
          ${c("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${h("loadSpeed")==="All"}
        >
          ${c("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var E0=()=>p`${k0()} ${y0()}`;function I0(){return p`
    <div class="ControlLabel fitIfOversize">
      ${c("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${h("fitWidthIfOversize")}
        @change=${xc}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${c("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${h("downloadZip")}
        @change=${Cc}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${c("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${h("hidePageControls")}
        @change=${Rc}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${c("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${h("lazyLoadImages")}
        @change=${Oc}
      ></mov-switch>
    </div>
  `}function _0(){return p`
    <div
      class="${$({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:h("lazyLoadImages")})}"
    >
      <span>
        ${c("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          class="RangeValue"
          for="lazyStart"
        >
          ${h("lazyStart")}
        </output>
      </span>
      <mov-slider
        name="lazyStart"
        id="lazyStart"
        .value="${h("lazyStart")}"
        min="5"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="3"
        @input="${Tc}"
      ></mov-slider>
    </div>
  `}function A0(){return p`
    <div class="ControlLabel headerType">
      ${c("HEADER_TYPE")}
      <segmented-control
        .value=${h("header")}
        @change=${Nc}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${c("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${c("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${c("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${c("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${c("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function x0(){return p`
    <div class="ControlLabel pagination">
      ${c("PAGINATION_TYPE")}
      <segmented-control
        .value=${h("pagination")}
        @change=${Sc}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${c("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${c("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${c("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${c("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function M0(){return p`
    <div class="ControlLabel navbarType">
      ${c("NAVBAR_TYPE")}
      <segmented-control
        .value=${h("navbar")}
        @change=${Mc}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${c("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${c("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${c("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${c("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function S0(){return p`
    <div class="ControlLabel autoScroll">
      <span>
        ${c("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${h("scrollHeight")}px
        </output>
      </span>
      <mov-slider
        name="scrollHeight"
        id="scrollHeight"
        .value="${h("scrollHeight")}"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${Pc}"
      ></mov-slider>
    </div>
  `}var C0=()=>p`${I0()} ${x0()} ${_0()} ${A0()} ${M0()} ${S0()}`;function O0(){const e=h("colorScheme")==="dark";L("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(h("colorScheme"))}function bt(e){L("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function T0(){return p`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${c("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${O0}
        ?active=${h("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${c("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${h("theme")}"
        title="${h("theme")}"
        @input=${bt}
        .swatches=${_.values(Wt)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${h("theme")}"
      mode="steps"
      .selected=${h("theme")}
      @change="${bt}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${_.values(Wt).map(e=>p`<color-swatch
            .color="${e}"
            .selected=${h("theme")}
            @change=${bt}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${c("THEME_HUE")} & ${c("THEME_SHADE")}</summary>
      <color-panel
        .selected=${h("theme")}
        @change=${bt}
      ></color-panel>
    </details>
  `}function $0(){return p` <div class="ControlLabel DefaultZoomMode">
    ${c("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${h("zoomMode")}
      @change=${Gc}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${c("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${c("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${c("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function L0(){return p`
    <div
      class="${$({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:h("zoomMode")==="percent"})}"
    >
      <span>
        ${c("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${h("zoomValue")}%
        </output>
      </span>
      <mov-slider
        name="zoomValue"
        id="zoomValue"
        .value="${h("zoomValue")}"
        min="5"
        max="200"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${Vc}"
      ></mov-slider>
    </div>
  `}function D0(){return p`
    <div class="ControlLabel minZoom">
      <span>
        ${c("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${h("minZoom")}%
        </output>
      </span>
      <mov-slider
        name="minZoom"
        id="minZoom"
        .value="${h("minZoom")}"
        min="25"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="4"
        @input="${Dc}"
      ></mov-slider>
    </div>
  `}function R0(){return p`
    <div class="ControlLabel zoomStep">
      <span>
        ${c("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${h("zoomStep")}%
        </output>
      </span>
      <mov-slider
        name="zoomStep"
        id="zoomStep"
        .value="${h("zoomStep")}"
        min="10"
        max="50"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${Lc}"
      ></mov-slider>
    </div>
  `}function N0(){return p`
    <div class="ControlLabel viewMode">
      ${c("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${h("viewMode")}
        @change=${Wc}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${c("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${c("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${c("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${c("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${c("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${c("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${c("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var P0=()=>p`${$0()} ${L0()} ${D0()} ${R0()} ${N0()}`,z0=`#SettingsPanel {\r
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
`,cn=class extends x{static{this.styles=[T`
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
    `,b(z0)]}render(){return p`
      <mov-drawer
        id="SettingsPanel"
        ?open=${g("panel")==="settings"}
        @close=${Qt}
        placement="start"
        class="${g("device")}"
      >
        <h2 slot="label">${c("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${zs}"
          title="${c("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${c("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${c("GENERAL")}</legend>
            ${w0()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${c("THEME")}</legend>
            ${T0()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${c("LOADING")}</legend>
            ${E0()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${c("ZOOM")}</legend>
            ${P0()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${c("OTHERS")}</legend>
            ${C0()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};cn=l([M("settings-panel"),(0,Oe.useStores)(N,_e,V)],cn);async function B0(e,t){f("Fetching page: ",e);try{const o=await(await fetch(e)).text();return new DOMParser().parseFromString(o,t)}catch(o){throw f("Failed to fetch page: ",o),o}}async function H0(e){return B0(e,"text/html")}async function G0(e,t,o){try{return(await H0(e)).querySelector(t)?.getAttribute(o)}catch(n){return f("Failed to get element attribute: ",n),null}}var V0=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const o={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=o.concurrency,this.minDelay=t??o.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Yt;function F0(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function wt(e,t,o){const n=g("images")?.[t];n?.status&&n.status!=="pending"||(W(t,()=>({status:"loading"})),Yt.add(async()=>{let r=F0(o),i;try{const a=await fetch(r,e.fetchOptions);if(a.ok){const s=a.headers.get("content-type");s?.startsWith("image/")?(i=await a.blob(),r=await blobUtil.blobToDataURL(i)):f("Fetched content is not an image",s)}else f("Fetch failed with status",a.status)}catch(a){f("Failed to fetch image",a)}W(t,()=>({src:r,blob:i,status:"loaded"})),B("Loaded Image:",t,"Source:",r)}),e.pages===t&&on())}async function dn(e,t,o){const n=g("images")?.[t];n?.status&&n.status!=="pending"||(W(t,()=>({status:"loading"})),Yt.add(async()=>{try{const r=await G0(o,e.img,e.lazyAttr??"src");r?(W(t,()=>({status:"pending"})),await wt(e,t,r)):W(t,()=>({status:"error"}))}catch(r){f("Failed to get page attribute",r),W(t,()=>({status:"error"}))}}))}function hn(e,t){vt(t.pages,e).filter((o,n)=>!(t.lazy??h("lazyLoadImages"))||n<=h("lazyStart")).forEach(o=>{dn(t,o,t.listPages[o-1])})}function un(e,t){vt(t.pages,e).filter((o,n)=>!(t.lazy??h("lazyLoadImages"))||n<=h("lazyStart")).forEach(o=>{wt(t,o,t.listImages[o-1])})}async function W0(){await _t(()=>g("manga")!==void 0);const e=g("manga"),t=e.begin??1;Yt=new V0(h("loadSpeed"),e.timer),B("Loading Images"),B(`Speed: ${h("loadSpeed")}`),B(`Lazy: ${e.lazy??h("lazyLoadImages")}, Starting from: ${h("lazyStart")}`),se(),Jt(e)?(B("Method: Images:",e.listImages),un(t,e)):eo(e)?(B("Method: Pages:",e.listPages),hn(t,e)):yn(e)?(B("Method: Brute Force"),e.bruteForce({begin:t,addImg:wt,loadImages(o){un(t,{...e,listImages:o})},loadPages(o,n,r){hn(t,{...e,listPages:o,img:n,lazyAttr:r})},wait:0})):f("No Loading Method Found"),V.listen((o,n,r)=>{if(r==="currentPage"&&o.currentPage>n.currentPage)for(let i=o.currentPage;i<Math.min(o.currentPage+5,e.pages+1);i++)o.images?.[i]?.src!==void 0||o.images?.[i]?.status==="loading"||(Jt(e)?wt(e,i,e.listImages[i-1]):eo(e)&&dn(e,i,e.listPages[i-1]))})}function U0(){const e=g("images");if(!e)return null;const t=h("viewMode"),o=t==="FluidLTR"||t==="FluidRTL",n=t==="FluidRTL",r=window.innerHeight/2,i=window.innerWidth/2;let a=null;for(const s in e){const u=e[s].ref?.value;if(!u)continue;const m=u?.getBoundingClientRect();let v;o?n?v=m.right:v=m.left:v=m.top,(o?v<=i:v<=r)&&(!a||v>a.edge)&&(a={index:parseInt(s,10),edge:v})}return a?a.index:g("manga")?.begin??1}function pn(){const e=U0();e!=null&&g("currentPage")!==e&&k("currentPage",e)}function Z0(){const e=_.throttle(()=>{requestAnimationFrame(pn)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),g("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(pn)}function mn(){if(!g("chapter").value){setTimeout(mn,50);return}Z0()}var gn=_.debounce(()=>{k("device",Ft()),se()},200);async function j0(){await _t(()=>g("manga")!==void 0),Jo(),window.addEventListener("resize",gn),window.addEventListener("orientationchange",gn),yc(),mn()}function q0(e,t){const o=e.replace(/[?&]forceReload=\d+$/,"");return`${o+(o.includes("?")?"&":"?")}forceReload=${t}`}function vn(e,t){const o=g("images")?.[e];if(!o?.src)return;const n=(o.reload??0)+1;if(n>h("maxReload")){f(`Stopped reloading Page ${e} after ${n} attempts`);return}if(f(`Reloading Page ${e} (Attempt ${n})`,t),t?.removeAttribute("src"),Xn(o.src)||Kn(o.src))W(e,()=>({reload:n})),t?.setAttribute("src",o.src);else{const r=q0(o.src,n);W(e,()=>({reload:n,src:r})),t?.setAttribute("src",r)}}function Q0(e){const t=e.currentTarget,o=parseInt(t.value,10),n=g("images")?.[o]?.ref?.value;n&&vn(o,n)}function Y0(e){const t=e.currentTarget;W(parseInt(t.value,10),o=>({hide:!o.hide}))}function X0(e){const t=e.currentTarget;W(parseInt(t.id.replace("PageImg",""),10),s=>({...Xo({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const o=g("manga"),n=g("images")||{},r=_.keys(n).filter(s=>{const u=parseInt(s,10);return u>=(o?.begin??1)&&u<=(o?.pages??1)&&n[u]?.status==="loaded"}).length,i=(o?.pages??1)-((o?.begin??1)-1),a=Math.floor(r/i*100);document.title=`(${a}%) ${g("manga")?.title}`,NProgress.configure({showSpinner:!1}).set(r/i),f(`Progress: ${a}%`),r===i&&(f("Images Loading Complete"),k("download","available"),h("downloadZip")&&qo())}function K0(e){const t=e.currentTarget;if(yt(t.getAttribute("src")))return;const o=parseInt(t.id.replace("PageImg",""),10);W(o,()=>({status:"error"})),vn(o,t)}function J0(e){const t=e.currentTarget,o=parseInt(t.value,10),n=g("images"),r=g("images")?.[o];r?.naturalWidth&&k("images",{...n,[o]:{...r,width:(r?.width||r?.naturalWidth)*(1+h("zoomStep")/100),height:void 0}})}function ed(e){const t=e.currentTarget,o=parseInt(t.value,10),n=g("images"),r=g("images")?.[o];r?.naturalWidth&&k("images",{...n,[o]:{...r,width:(r?.width||r?.naturalWidth)*(1-h("zoomStep")/100),height:void 0}})}function td(e){const t=e.currentTarget,o=parseInt(t.value,10),n=g("images"),r=g("images")?.[o];r&&k("images",{...n,[o]:{...r,width:void 0,height:void 0}})}function od(e){const t=e.currentTarget,o=parseInt(t.value,10),n=g("images"),r=g("images")?.[o];r&&k("images",{...n,[o]:{...r,width:window.innerWidth+(h("navbar")==="left"||h("navbar")==="right"?-34:0),height:void 0}})}function nd(e){const t=e.currentTarget,o=parseInt(t.value,10),n=g("images"),r=g("images")?.[o];r&&k("images",{...n,[o]:{...r,width:void 0,height:window.innerHeight+(h("navbar")==="bottom"?-34:0)}})}function rd(e){const t=g("images")?.[e],o=h("viewMode").match(/^(Book|Manga)$/),n=h("viewMode")==="Gallery",r=h("viewMode").startsWith("Fluid"),i=h("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":r?`${window.innerHeight+(i?-34:0)}px`:void 0,"min-width":!o&&!n?`${h("minZoom")}vw`:void 0}}var id=(e,t)=>vt(e,t).map(o=>{g("images")?.[o]?.ref||W(o,u=>({ref:Tt()}));let n=0;for(let u=o-1;u>=t&&!g("images")?.[u].doublePage;u--)g("images")?.[u].doublePage||n++;const r=g("images")?.[o].doublePage??!1,i=h("viewMode")==="Book",a=!r&&(i?n%2===0:n%2===1),s=!r&&(i?n%2===1:n%2===0);return p`
      <div
        id="Page${o}"
        class="${$({MangaPage:!0,hide:!!g("images")?.[o].hide,DoublePage:r,LeftPage:a&&!r,RightPage:s&&!r})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${c("BOOKMARK")}"
            @click=${nn}
            value="${o}"
          >
            ${Me()?js:Zs}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${c("ZOOM_IN")}"
            @click=${J0}
            value="${o}"
          >
            ${ec}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${c("ZOOM_RESET")}"
            @click=${td}
            value="${o}"
          >
            ${Js}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${c("ZOOM_OUT")}"
            @click=${ed}
            value="${o}"
          >
            ${tc}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${c("ZOOM_HEIGHT")}"
            @click=${nd}
            value="${o}"
          >
            ${Ws}
          </button>
          ${h("viewMode").match(/^(Book|Manga)$/)?p`
            <button
              class="DoublePage PageButton"
              title="${c("DOUBLE_PAGE")}"
              @click=${()=>{W(o,u=>({doublePage:!u.doublePage}))}}
              value="${o}"
            >
              ${Ks}
            </button>`:p`
              <button
                class="ZoomWidth PageButton"
                title="${c("ZOOM_WIDTH")}"
                @click=${od}
                value="${o}"
              >
                ${Us}
              </button>`}
          <button
            class="Hide PageButton"
            title="${c("HIDE")}"
            @click=${Y0}
            value="${o}"
          >
            ${g("images")?.[o].hide?Qs:Ys}
          </button>
          <button
            class="Reload PageButton"
            title="${c("RELOAD")}"
            @click=${Q0}
            value="${o}"
          >
            ${Xs}
          </button>
          <span class="PageIndex">${o}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${o}"
            alt="Page ${o}"
            class="${$({PageImg:!0,imgBroken:g("images")?.[o]?.status==="error"})}"
            src=${g("images")?.[o]?.src??I}
            style="${J(rd(o))}"
            @load=${X0}
            @error=${K0}
            ${Lt(g("images")?.[o].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${o===e?c("END"):`${o} / ${e}`} ]
      </div>
    `}),ad=e=>p`
  <main
    id="Chapter"
    ${Lt(g("chapter"))}
    class="${$({fitWidthIfOversize:h("fitWidthIfOversize"),[h("viewMode")]:!0,separator:h("viewMode")==="Vertical"})}"
    @wheel=${t=>{h("viewMode")==="FluidLTR"?sn(t):h("viewMode")==="FluidRTL"&&p0(t)}}
  >
    ${id(e.pages,e.begin??0)}
  </main>
`,ld=T`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${b(ft(Ht))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${b(ft(Gt))}');
  }

  ${b(`:root {\r
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
  ${b(`/*  Simple Normalizer */\r
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
  ${b(`:root:not(.light, .dark) {\r
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
  ${b(`.PageButton .icon-tabler {\r
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
  ${b(`#Chapter.FluidLTR,\r
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
  ${b(`/* Book mode - Left to Right (Western comic/manga style) */\r
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
  ${b(`#Chapter.Gallery {\r
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
  ${b(rn)}
  ${b(`@-webkit-keyframes spin {\r
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
`,sd=(e="#MangaOnlineViewer",t=h("theme"))=>{const o=Zo(t),n=Se(t),r=h("colorScheme")==="dark"?o[8]:o[2],i=Se(r);return T`
    :where(:root),
    ${b(e)}, .dark,
    ${b(e)}.dark {
      --theme-primary-color: ${b(t)};;
      --theme-primary-text-color: ${b(n)};;
      --theme-secondary-color: ${b(r)};;
      --theme-secondary-text-color: ${b(i)};;

      color-scheme: dark;
      --theme-body-background: ${b(R.dark[600])};;
      --theme-body-text-color: ${b(R.dark[50])};;
      --theme-text-color: ${b(R.dark[50])};;
      --theme-background-color: ${b(R.dark[600])};;
      --theme-hightlight-color: ${b(R.dark[500])};;
      --theme-border-color: ${b(R.dark[400])};;

      --mov-color-fill-quiet: ${b(o[9])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${b(o[8])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${b(o[8])};;
      --mov-color-border-normal: ${b(o[7])};;
      --mov-color-border-loud: ${b(o[6])};;
      --mov-color-on-quiet: ${b(o[4])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${b(o[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${b(e)};.light {
      color-scheme: light;
      --theme-body-background: ${b(R.gray[50])};;
      --theme-body-text-color: ${b(R.gray[900])};;
      --theme-text-color: ${b(R.gray[900])};;
      --theme-background-color: ${b(R.gray[50])};;
      --theme-hightlight-color: ${b(R.gray[500])};;
      --theme-border-color: ${b(R.gray[100])};;

      --mov-color-fill-quiet: ${b(o[0])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${b(o[1])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${b(o[1])};;
      --mov-color-border-normal: ${b(o[2])};;
      --mov-color-border-loud: ${b(o[4])};;
      --mov-color-on-quiet: ${b(o[6])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${b(o[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},cd=`#StartMOV {\r
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
`,ue=class extends x{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[b(cd)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,o){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:o}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return p`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${c("STARTING")}</span>
        <div style="padding: 1rem;">${c("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${R.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${R.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return p`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${c("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){this.beginPage??=this.begin,this.endPage??=this.mangaPages;const t=o=>{this.beginPage=o.detail.value[0],this.endPage=o.detail.value[1]};return p`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${c("STARTING")}</span>
        <div style="padding: 1rem;">
          ${c("CHOOSE_BEGINNING")}
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
              @input=${t}
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
            style="--mov-color-fill-loud: ${R.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(this.beginPage??0,this.endPage??this.mangaPages)}
            style="--mov-color-fill-loud: ${R.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};l([d({type:Number,reflect:!0})],ue.prototype,"mangaPages",void 0),l([d({type:Number,reflect:!0})],ue.prototype,"begin",void 0),l([d({type:Number})],ue.prototype,"timeoutMs",void 0),l([d({type:String,reflect:!0})],ue.prototype,"status",void 0),l([P()],ue.prototype,"beginPage",void 0),l([P()],ue.prototype,"endPage",void 0),ue=l([M("script-startup")],ue);function dd(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var hd=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},ud=(...e)=>{e?.forEach(hd),e?.forEach(dd)};function pd(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var fn,kt=class extends x{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[T``,b(ld)]}async start(t,o){this.manga&&(document.documentElement.hasAttribute("mov")||(ud(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),k("manga",{...this.manga,begin:t??this.manga.begin,pages:o??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),j0(),W0()}render(){const t=g("manga"),o=g("dialog");return p`
      <style>
        ${sd()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${$({[h("colorScheme")]:!0,hideControls:h("hidePageControls"),bookmarked:!!Me(),[g("device")]:!0})}"
        style="${J({[`padding-${h("navbar")}`]:"34px"})}"
        .locale="${h("locale")}"
      >
        ${t?p` <reader-header .manga=${t}></reader-header>
              ${ad(t)}
              <navbar-thumbnails .mode=${h("navbar")}></navbar-thumbnails>
              <manga-pagination
                .mode="${h("pagination")}"
                .startPage=${t.begin}
                .totalPages=${t.pages}
                .currentPage=${g("currentPage")}
                .next=${t.next}
                .prev=${t.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>`:p(fn||(fn=pd([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              status="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,this.loadMode==="never"?"late-start-button":"initial-prompt",n=>{this.start(n.detail?.begin,n.detail?.end)})}
        ${o?p`
              <mov-dialog
                open
                .icon=${o.icon}
                @close=${()=>k("dialog",null)}
              >
                <span slot="label">${o.title}</span>
                ${o.content} ${o.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};l([d({type:String,reflect:!0})],kt.prototype,"loadMode",void 0),l([d({type:Object})],kt.prototype,"manga",void 0),kt=l([M("manga-online-viewer"),(0,Oe.useStores)(N,_e,V)],kt);var md=[`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`);async function gd([e,t]){f(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=Me()??t.begin??1,t.before!==void 0&&(B("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=Os("externals",md),Rn(unsafeWindow.customElements.whenDefined("manga-online-viewer"),1e4).then(()=>{const o=document.createElement("manga-online-viewer");o.loadMode=e?.start??h("loadMode"),o.manga=t,document.body.appendChild(o),f("Viewer Ready",o)}).catch(o=>f("Define WebComponent failed",o))}async function vd(e){f(`Starting ${Et.script.name} ${Et.script.version} on ${Ue()} ${Cn()} with ${On()}`),f(e.length,"Known Manga Sites:",e);const t=e.filter(n=>n.url.test(window.location.href));f(t.length,"Found sites:",t);const o=t.map(async n=>{f(`Testing site: ${n.name}`),await pr(n),B(n.name,"Passed");const r=await n.run();if(B("Processed site:",n,r),r.pages>0)return[n,r];throw new Error(`${n.name} found ${r.pages} pages`)});try{const n=await Promise.any(o);B("Going with",n[0].name),gd(n)}catch(n){if(n instanceof AggregateError){f("All sites failed to run:");for(const r of n.errors)f(r.message)}else f("An unexpected error occurred:",n)}}vd(ur).catch(f)})();
