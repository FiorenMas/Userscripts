// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewerAdult.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewerAdult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @version       2025.06.11
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
// @require       https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.9/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/bowser/2.11.0/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/
// @include       /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
(function(){"use strict";const Ot={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:["Raw"],category:"hentai",waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},It={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:["English"],category:"hentai",timer:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href"))}}},Ct={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:["English"],category:"hentai",waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file"))}}},At={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:["Spanish"],category:"hentai",waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")).filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}};function he(e){return e===null||typeof e>"u"||e===void 0||typeof e=="string"&&e===""||Array.isArray(e)&&e.length===0||typeof e=="object"&&Object.keys(e).length===0}function x(e){const t=n=>Array.isArray(n)?!n.some(o=>o instanceof Promise||!x(o)):Object.keys(n).some(r=>!x(n[r]))?!1:t(Object.keys(n));return!e||e===0||he(e)||typeof e=="object"&&t(e)}function Lt(e,t=document.body){return new Promise(n=>{if(document.querySelector(e)){n(document.querySelector(e));return}const o=new MutationObserver(()=>{document.querySelector(e)&&(n(document.querySelector(e)),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function we(e,t=250){return new Promise(n=>{const o=setInterval(()=>{e()&&(clearInterval(o),n(!0))},t)})}function fe(e,t,n=document.body){return new Promise(o=>{if(n.querySelector(e)?.getAttribute(t)){o(n.querySelector(e)?.getAttribute(t)??"");return}const r=new MutationObserver(()=>{n.querySelector(e)?.getAttribute(t)&&(o(n.querySelector(e)?.getAttribute(t)??""),r.disconnect())});r.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function be(e,t=document.body){return new Promise(n=>{if(!x(unsafeWindow[e])){n(unsafeWindow[e]);return}const o=new MutationObserver(()=>{x(unsafeWindow[e])||(n(unsafeWindow[e]),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function ye(e=1e3,t=!0){return new Promise(n=>{setTimeout(()=>n(t),e)})}async function Tt(e,t=1e3){return(await Promise.all([e,ye(t)]))[0]}async function _t(e,t=5e3){return Promise.race([e,ye(t,!1)])}async function ve(e,t,n,o,r="img",s="src"){const c=document.createElement("div");c.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(c),e();const m=document.querySelector(n),g=document.querySelector(o),u=[];for(let d=1;d<=t;d+=1)u[d-1]=await Tt(fe(r,s,g??document.body),100),g?.querySelector(r)?.removeAttribute(s),m?.dispatchEvent(new Event("click"));return u}const Rt={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:["English"],category:"hentai",async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length),t=e?.length??parseInt(document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0)??"",10);return{title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(n=>n?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:t,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(this.listImages=await ve(()=>{const n=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)n?.dispatchEvent(new Event("click"))},this.pages,".page-next",".p-picture",".photo img","src"))}}}},Bt={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:["English"],obs:"May get your IP Banned, use with moderation",category:"hentai",async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),n=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),o=Array(t).fill(0).map(async(c,m)=>fetch(`${n}?p=${m}`).then(async g=>g.text()).then(g=>new DOMParser().parseFromString(g,"text/html"))),s=(await Promise.all(o)).flatMap(c=>[...c.querySelectorAll("#gdt a")].map(m=>m.getAttribute("href")));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:n,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:s,img:"#img",lazy:!0,async reload(c){const m=`${s[c-1]}`,g=await fetch(m).then(d=>d.text()).then(d=>/nl\('([\d-]+)'\)/.exec(d)?.[1]),u=`${m}${m.indexOf("?")?"&":"?"}nl=${g}`;return fetch(u).then(d=>d.text()).then(d=>new DOMParser().parseFromString(d,"text/html").querySelector(this.img)?.getAttribute("src"))}}}},Dt={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:["English"],category:"hentai",run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),series:"",pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file"))}}},Nt={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:["English"],category:"hentai",timer:5e3,run(){const e=[...document.querySelectorAll(".foto img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src"))}}},Vt={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:["Spanish"],category:"hentai",run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g);return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},$t={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:["English"],category:"hentai",run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},Ft={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:["English"],category:"hentai",run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,n)=>window.location.href.replace(/\/\d*\/?$/,`/${n+1}`)),img:"#gimg",lazyAttr:"data-src"}}},Pt={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:["English"],category:"hentai",run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},zt=/^blob:(.+?)\/(.+)$/;function Gt(e){return e.slice(e.indexOf(";base64,")+8)}function P(e){return/^data:image\/(png|jpg|jpeg|gif);base64,/.test(e)}function z(e){return zt.test(e)}function Zt(e){const o=e.split("?")[0].split("/").pop()?.match(/\.[A-Za-z]{2,4}$/);return o?o[0].slice(1):""}const Ht=e=>{switch(e.substring(e.indexOf("/")+1,e.indexOf(";base64"))){case"/":return"jpg";case"R":return"gif";case"U":return"webp";case"i":default:return"png"}};function ne(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";case"j":default:return"jpg"}}const Wt={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:["English"],category:"hentai",waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded"),run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((n,o)=>`${t+(o+1)}.${ne(unsafeWindow.g_th[o+1][0])}`)}}},Ut={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:["English"],category:"hentai",waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("src"))}}},qt={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:["English"],category:"hentai",waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},jt={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:["English"],category:"hentai",run(){const e=unsafeWindow.pageData?.map(t=>t.image)??unsafeWindow.images?.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},Qt={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:["English"],category:"hentai",async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async s=>s.json()).then(s=>s.nodes[2].data),n=t?.[t.find(s=>s?.gallery)?.gallery],o=t?.[n?.hash]||t?.[t.find(s=>s?.hash&&s?.id).hash],r=t?.[n.images].map(s=>t[s]).map(s=>t[s.filename]);return{title:t?.[n.title],series:window.location.href.replace(/read\/.+/,""),pages:r?.length,prev:"#",next:"#",listImages:r?.map(s=>`${e}/image/${o}/${s}`)}}},Yt={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:["English"],category:"hentai",waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},Xt={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:["English"],category:"hentai",waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),n=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),o=await be("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:n,prev:"#",next:"#",listImages:Array(n).fill(0).map((r,s)=>`//${o}/${t}/${e}/${s+1}.${ne(unsafeWindow.g_th[s+1][0])}`)}}},Kt={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:["English","Spanish"],category:"hentai",run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src"))}}},Jt={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:["English"],category:"hentai",waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),n=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),o="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",r=Array(t).fill(0).map(async(m,g)=>{const u=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${n}"}],"display":"position","items_per_page":50,"page":${g+1}}}${o}`;return GM.xmlHttpRequest({method:"GET",url:u}).then(d=>JSON.parse(d.responseText))}),c=(await Promise.all(r)).flatMap(m=>m.data.picture.list.items.map(g=>g.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:c}}},Ee=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function ke(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>[...e.attributes].filter(t=>/.*(src|url).*/i.test(t.name)&&!/^.*(blank|lazy|load).*$/.test(t.value)).find(t=>Ee.test(t.value))?.value??e?.getAttribute("src"))}const en={...{name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/"],language:["English"],obs:"Any Site that uses Madara WordPress Plugin",category:"manga",waitFunc:()=>{const e=ke();return e.length>0&&e.every(t=>t&&Ee.test(t))},run(){const e=ke();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:"hentai"},tn=[Ot,It,Ct,At,Rt,Bt,Dt,Nt,Vt,$t,Ft,Pt,Wt,Ut,qt,jt,Qt,Yt,Xt,Kt,Jt,{name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:["English"],category:"hentai",async run(){const e=document.head.textContent?.match(/"configUrl":"(.+?)",/)?.at(1)?.replaceAll("\\","")??"",n=[...(await fetch(e).then(async o=>o.text()).then(o=>new DOMParser().parseFromString(o,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:n.length,prev:"#",next:"#",listImages:n.map(o=>o.getAttribute("imageURL"))}}},{name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:["English"],category:"hentai",run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((n,o)=>window.location.href.replace(/\/\d+$/,`/${o+1}`)),img:".gallery-slide img"}}},{name:["nHentai.net","nHentai.xxx","lhentai"],url:/https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,homepage:["https://nhentai.net/","https://nhentai.xxx/","https://lhentai.com/"],language:["English"],category:"hentai",run(){const e=parseInt(document.querySelector(".num-pages")?.textContent??"",10),t=document.querySelector("#image-container img")?.getAttribute("src")?.replace(/\d+.\w+$/,""),n=unsafeWindow._gallery?.images?.pages?.map(o=>ne(o.t));return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((o,r)=>`${t}${r+1}.${n[r]}`)}}},{name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:["English"],category:"hentai",waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},n=await fetch("/api/getBookByID",t).then(async o=>o.json());return{title:n.results.title,series:`/g/${n.results.id}/`,pages:n.results.total_page,prev:"#",next:"#",listImages:Array(n.results.total_page).fill(0).map((o,r)=>`${n.results.image_server.replace(".com",".so")+n.results.id}/${r+1}.jpg`)}}},{name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:["English"],category:"hentai",waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((n,o)=>e.replace(/\/\d+\./,`/${o+1}.`))}}},{name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:["English"],category:"hentai",lazy:!1,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:n,entries:o}=history.state.memo.data,r=o.map(s=>`${n}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:r.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:r}}},{name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:["English"],category:"hentai",waitEle:"#__NEXT_DATA__",async run(){const t=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(n=>n.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t}}},{name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,homepage:"https://tmohentai.com/",language:["Spanish"],category:"hentai",run(){const e=[...document.querySelectorAll(".content-image")].map(t=>t.getAttribute("data-original")??t.getAttribute("src"));return{before(){window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade"))},title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},{name:["3Hentai","HentaiVox"],url:/https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:["English"],category:"hentai",waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Object.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}},{name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:["English"],category:"hentai",async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",n=`https://www.tsumino.com/Read/Load?q=${e}`,o=await fetch(n).then(async r=>r.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:o.reader_start_url,pages:o.reader_page_total,prev:"#",next:"#",listImages:Array(o.reader_page_total).fill(0).map((r,s)=>t.replace("[PAGE]",`${s+1}`))}}},{name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:["Spanish"],category:"hentai",waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src"))}}},{name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:["English","Raw","Chinese"],category:"hentai",run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},{name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:["English"],category:"hentai",run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},{name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:["English"],category:"hentai",run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href"))}}},{name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:["English"],category:"hentai",async run(){const e=document.querySelectorAll("nav select option").length;return{title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){this.listImages=await ve(()=>{const t=document.querySelector("select option");t&&(t.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}}}},en],nn=".range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px rgba(33,150,243,.5)}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translate(0,-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%,0)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}",Se=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),h=Se,xe=Se;function l(...e){return console.log("MangaOnlineViewer: ",...e),e}const on=e=>t=>l(e,t)[1];function an(){return typeof GM_listValues<"u"?GM_listValues():[]}function rn(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):l("Removing: ",e)}const oe=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function sn(e,t=null){return typeof GM_getValue<"u"?GM_getValue(e,t):(l("Fake Getting: ",e," = ",t),t)}function ln(e,t=null){const n=sn(e,t);return typeof n=="string"?JSON.parse(n):n}function Me(e){return ln("settings",e)}function cn(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),t.toString()):(l("Fake Setting: ",e," = ",t),String(t))}function dn(e){return cn("settings",e)}function mn(){let e;const t=/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(navigator.userAgent)??[];if(/trident/i.test(t[1]))return e=/\brv[ :]+(\d+)/g.exec(navigator.userAgent)??[],`IE ${e[1]??""}`;if(t[1]==="Chrome"&&(e=/\b(OPR|Edge)\/(\d+)/.exec(navigator.userAgent),e!==null))return e.slice(1).join(" ").replace("OPR","Opera");const n=[t[1],t[2]];return e=/version\/(\d+)/i.exec(navigator.userAgent),e!==null&&n.splice(1,1,e[1]),n.join(" ")}function un(){return oe.scriptHandler??"Greasemonkey"}const gn=bowser.getParser(window.navigator.userAgent),A=()=>{const e=gn.getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},pn=()=>A()==="mobile"||A()==="tablet",hn=e=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener("settings",(t,n,o,r)=>{r&&e(o)})}finally{}return l("Using Interval Settings Change Listener"),setInterval(()=>{e(Me())},1e4)},Oe=(e,t)=>{const n=(o,r)=>_.transform(o,(s,c,m)=>{_.isEqual(c,r[m])||(_.isArray(c)?s[m]=_.difference(c,r[m]):_.isObject(c)&&_.isObject(r[m])?s[m]=n(c,r[m]):s[m]=c)});return n(e,t)},G=[{ID:"en_US",NAME:"English (US)",STARTING:"Starting<br>Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_HUE:"Theme Primary Color Hue",THEME_SHADE:"Theme Primary Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed Pages/Second",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Left to Right",VIEW_MODE_RIGHT:"Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",ENABLE_COMMENTS:"Capture Comments (When available)",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from:<h4>Page ##num##</h4>(Only <i>ONCE</i> per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. </br>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> 
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Restore",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br> It may hurt some servers or get your IP marked as DDoS attacker.<br> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",LIST_EMPTY:"List Empty",DISPLAY_COMMENTS:"Display Comments",COMMENTS:"Comments Section",SCROLL_START:"Toggle Auto Scroll",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End"},{ID:"es_ES",NAME:"Espa\xF1ol (ES)",STARTING:"Iniciando<br>Manga OnlineViewer",RESUME:"Continuando lectura desde la P\xE1gina ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la p\xE1gina en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_HUE:"Matiz del color primario",THEME_SHADE:"Saturaci\xF3n del color primario",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga p\xE1gina/segundo",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom m\xEDnimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualizaci\xF3n por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Izquierda a derecha",VIEW_MODE_RIGHT:"Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",ENABLE_COMMENTS:"Capturar comentarios (cuando est\xE9 disponible)",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar im\xE1genes como Zip",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente cap\xEDtulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Cap\xEDtulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La pr\xF3xima vez que abra este cap\xEDtulo, continuar\xE1 desde la <h4>p\xE1gina ##num##</h4>(S\xF3lo <i>UNA VEZ</i> por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> 
  `,ATTENTION:"Atenci\xF3n",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la p\xE1gina para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la p\xE1gina para que surta efecto",AUTO_DOWNLOAD:"La pr\xF3xima vez que termine de cargarse un cap\xEDtulo, se le pedir\xE1 que guarde autom\xE1ticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podr\xE1 descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de im\xE1genes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la p\xE1gina (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de cap\xEDtulos",PAGES_LOADED:"P\xE1ginas cargadas",GO_TO_PAGE:"Ir a p\xE1gina",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de p\xE1gina",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"R\xE1pido",EXTREME:"Extremo",ALL_PAGES:"Todas las p\xE1ginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br> Puede da\xF1ar algunos servidores o marcar su IP como atacante DDoS.<br> \xA1Util\xEDcelo con precauci\xF3n!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazar abajo",CLOSE:"Cerrar",LIST_EMPTY:"Lista vac\xEDa",DISPLAY_COMMENTS:"Mostrar comentarios",COMMENTS:"Secci\xF3n de comentarios",SCROLL_START:"Alternar desplazamiento autom\xE1tico",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento autom\xE1tico en p\xEDxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin"},{ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando<br>Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde come\xE7ar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configura\xE7\xF5es",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_HUE:"Colora\xE7\xE3o primaria",THEME_SHADE:"Satura\xE7\xE3o de Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padr\xE3o",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento Paginas/Segundo",DEFAULT_ZOOM:"Zoom padr\xE3o (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padr\xE3o",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precis\xE3o da Mudan\xE7a do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualiza\xE7\xE3o Padr\xE3o",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Esquerda para Direita",VIEW_MODE_RIGHT:"Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",ENABLE_COMMENTS:"Capturar coment\xE1rios (quando dispon\xEDvel)",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabe\xE7alho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuar\xE1 a partir da <h4>Pagina ##num##</h4>(Apenas <i>UMA VEZ</i> por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> 
  `,ATTENTION:"Aten\xE7\xE3o",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configura\xE7\xF5es(Reset Settings)",SETTINGS_RESET:"Configura\xE7\xF5es foram limpas, recarregue o site para efetivar a altera\xE7\xE3o",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a altera\xE7\xE3o",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento pregui\xE7oso n\xE3o \xE9 compativel com download de zip, n\xE3o conseguira com essa configura\xE7\xE3o ativa.<br/> Sugest\xE3o: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens pregui\xE7oso",LAZY_LOAD_IMAGES:"Carregamento de paginas pregui\xE7oso come\xE7a a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade n\xE3o \xE9 recomendada.<br> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",LIST_EMPTY:"Lista Vazia",DISPLAY_COMMENTS:"Mostar Comentarios",COMMENTS:"Se\xE7\xE3o de coment\xE1rios",SCROLL_START:"Ativar Rolagem Automatica",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin"},{ID:"zh_CN",NAME:"\u4E2D\u6587 (\u7B80\u4F53)",STARTING:"\u6B63\u5728\u542F\u52A8<br>Manga OnlineViewer",RESUME:"\u4ECE\u9875\u9762\u7EE7\u7EED\u9605\u8BFB ",WAITING:"\u8BF7\u7B49\u5F853\u79D2\u949F...",CHOOSE_BEGINNING:"\u9009\u62E9\u8981\u5F00\u59CB\u7684\u9875\u6570:",BUTTON_START:"\u542F\u52A8Manga OnlineViewer",SETTINGS:"\u8BBE\u7F6E",LANGUAGE:"\u8BED\u8A00",COLOR_SCHEME:"\u914D\u8272\u65B9\u6848",THEME:"\u4E3B\u9898",THEME_HUE:"\u4E3B\u9898\u8272\u8C03",THEME_SHADE:"\u4E3B\u9898\u9634\u5F71",DEFAULT_LOAD_MODE:"\u9ED8\u8BA4\u52A0\u8F7D\u6A21\u5F0F",LOAD_MODE_NORMAL:"\u7B49\u5F85\u6A21\u5F0F(\u7B49\u5F853\u79D2\u81EA\u52A8\u52A0\u8F7D )",LOAD_MODE_ALWAYS:"\u81EA\u52A8\u6A21\u5F0F(\u65E0\u9700\u7B49\u5F85)",LOAD_MODE_NEVER:"\u624B\u52A8\u6A21\u5F0F(\u70B9\u51FB\u542F\u52A8)",LOAD_SPEED:"\u52A0\u8F7D\u901F\u5EA6\u9875\u6570/\u79D2",DEFAULT_ZOOM:"\u9ED8\u8BA4\u7F29\u653E (\u6700\u5C0F 5 \u6700\u5927 200)",DEFAULT_ZOOM_MODE:"\u9ED8\u8BA4\u7F29\u653E\u6A21\u5F0F",MINIMUM_ZOOM:"\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u5BBD\u5EA6\u7684\u6700\u5C0F\u7F29\u653E (\u6700\u5C0F 30 \u6700\u5927 100)",ZOOM_STEP:"\u7F29\u653E\u7EA7\u522B (\u6700\u5C0F 5 \u6700\u5927 50)",DEFAULT_VIEW_MODE:"\u9ED8\u8BA4\u89C6\u56FE\u6A21\u5F0F",VIEW_MODE_VERTICAL:"\u5782\u76F4\u6709\u7F1D",VIEW_MODE_LEFT:"\u4ECE\u5DE6\u5230\u53F3",VIEW_MODE_RIGHT:"\u4ECE\u53F3\u5230\u5DE6",VIEW_MODE_WEBCOMIC:"\u5782\u76F4\u65E0\u7F1D",FIT_WIDTH_OVERSIZED:"\u5982\u679C\u5C3A\u5BF8\u8FC7\u5927\u3001\u5219\u9002\u5408\u5BBD\u5EA6",SHOW_THUMBNAILS:"\u663E\u793A\u7F29\u7565\u56FE",ENABLE_COMMENTS:"\u6355\u83B7\u8BC4\u8BBA\uFF08\u5982\u679C\u53EF\u7528\uFF09",HIDE_CONTROLS:"\u59CB\u7EC8\u9690\u85CF\u9875\u9762\u63A7\u4EF6",HEADER_TYPE:"\u66F4\u6539\u6807\u9898\u663E\u793A\u65B9\u5F0F",HEADER_HOVER:"\u60AC\u505C",HEADER_SCROLL:"\u6EDA\u52A8",HEADER_CLICK:"\u70B9\u51FB",HEADER_FIXED:"\u56FA\u5B9A",HEADER_SIMPLE:"\u7B80\u5355",BUTTON_DOWNLOAD:"\u4E0B\u8F7D",DOWNLOAD_ZIP:"\u4E0B\u8F7D\u538B\u7F29\u6587\u4EF6",DOWNLOAD_IMAGES:"\u81EA\u52A8\u5C06\u56FE\u7247\u4E0B\u8F7D\u6210ZIP",BUTTON_NEXT:"\u4E0B\u4E00\u9875",NEXT_CHAPTER:"\u4E0B\u4E00\u7AE0",BUTTON_PREVIOUS:"\u4E0A\u4E00\u9875",PREVIOUS_CHAPTER:"\u4E0A\u4E00\u7AE0",BOOKMARKS:"\u4E66\u7B7E",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"\u5220\u9664\u4E66\u7B7E",BOOKMARK_SAVED:"\u4FDD\u5B58\u4E66\u7B7E",BOOKMARK_MESSAGE:"\u4E0B\u6B21\u6253\u5F00\u672C\u7AE0\u65F6\uFF0C\u5C06\u4ECE:<h4>\u9875\u7801 ##num##</h4>(<i>\u4EC5\u4E00\u6B21</i> \u6BCF\u4E2A\u4E66\u7B7E)",KEYBINDINGS:"\u5FEB\u6377\u952E",EDIT_KEYBINDS:"\u7F16\u8F91\u952E\u7ED1\u5B9A",SAVE_KEYBINDS:"\u4FDD\u5B58\u952E\u7ED1\u5B9A",BUTTON_EDIT:"\u7F16\u8F91",BUTTON_SAVE:"\u6551",KEYBIND_RULES:`
    <h3>\u652F\u6301\u7684\u5BC6\u94A5</h3>
    \u5141\u8BB8\u7684\u4FEE\u9970\u7B26: shift, option, alt, ctrl, control, command. </br>
    \u7279\u6B8A\u952E: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    \u4F8B\u5B50: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> 
  `,ATTENTION:"\u6CE8\u610F",WARNING:"\u8B66\u544A",BUTTON_RESET_SETTINGS:"\u91CD\u7F6E\u8BBE\u7F6E(Reset Settings)",SETTINGS_RESET:"\u8BBE\u7F6E\u5DF2\u91CD\u7F6E\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",LANGUAGE_CHANGED:"\u8BED\u8A00\u5DF2\u66F4\u6539\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",AUTO_DOWNLOAD:"\u4E0B\u6B21\u7AE0\u8282\u52A0\u8F7D\u5B8C\u6210\u65F6\u3001\u7CFB\u7EDF\u5C06\u63D0\u793A\u60A8\u81EA\u52A8\u4FDD\u5B58",LAZY_LOAD:"\u5EF6\u8FDF\u52A0\u8F7D\u4E0Ezip\u4E0B\u8F7D\u4E0D\u517C\u5BB9\u3001\u60A8\u5C06\u65E0\u6CD5\u4F7F\u7528\u6B64\u8BBE\u7F6E\u4E0B\u8F7D.<br/> \u5EFA\u8BAE: <span style='color:red;font-weight:bold'>\u7981\u7528\u7F29\u7565\u56FE</span> \u4EE5\u8282\u7701\u6D41\u91CF\u548C\u5185\u5B58.",LAZY_LOAD_IMAGES_ENABLE:"\u542F\u7528\u5EF6\u8FDF\u52A0\u8F7D\u56FE\u50CF",LAZY_LOAD_IMAGES:"\u60F0\u6027\u52A0\u8F7D\u4ECE\u9875\u9762 (\u6700\u5C0F 5 \u6700\u5927 100)",RETURN_CHAPTER_LIST:"\u8FD4\u56DE\u7AE0\u8282\u5217\u8868",PAGES_LOADED:"\u5DF2\u52A0\u8F7D\u7684\u9875\u6570",GO_TO_PAGE:"\u8F6C\u5230\u9875\u6570",ENLARGE:"\u653E\u5927",RESTORE:"\u8FD8\u539F",REDUCE:"\u7F29\u5C0F",FIT_WIDTH:"\u9002\u5408\u5BBD\u5EA6",FIT_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",PERCENT:"\u767E\u5206\u4E4B",TOGGLE_CONTROLS:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",ZOOM_IN:"\u653E\u5927",ZOOM_OUT:"\u7F29\u5C0F",ZOOM_RESET:"\u8FD8\u539F",ZOOM_WIDTH:"\u9002\u5408\u5BBD\u5EA6",ZOOM_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",HIDE:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",RELOAD:"\u91CD\u65B0\u52A0\u8F7D",SLOWLY:"\u6162\u901F",NORMAL:"\u6B63\u5E38",FAST:"\u5FEB\u901F",EXTREME:"\u6781\u7AEF",ALL_PAGES:"\u6240\u6709\u9875\u9762",SPEED_WARNING:"\u52A0\u8F7D\u901F\u5EA6\u8FC7\u9AD8",SPEED_WARNING_MESSAGE:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u6B64\u901F\u5EA6.<br>\u5B83\u53EF\u80FD\u4F1A\u4F24\u5BB3\u67D0\u4E9B\u670D\u52A1\u5668\u6216\u5C06\u60A8\u7684 IP \u6807\u8BB0\u4E3A DDoS \u653B\u51FB\u8005.<br>\u8BF7\u8C28\u614E\u4F7F\u7528!",SCROLL_UP:"\u5411\u4E0A\u6EDA\u52A8",SCROLL_DOWN:"\u5411\u4E0B\u6EDA\u52A8",CLOSE:"\u5173\u95ED",LIST_EMPTY:"\u6CA1\u6709\u6536\u85CF\u4E66\u7B7E",DISPLAY_COMMENTS:"\u663E\u793A\u6CE8\u91CA",COMMENTS:"\u8BC4\u8BBA\u90E8\u5206",SCROLL_START:"\u5207\u6362\u81EA\u52A8\u6EDA\u52A8",AUTO_SCROLL_HEIGHT:"\u81EA\u52A8\u6EDA\u52A8\u901F\u5EA6\uFF08\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\uFF09",VERTICAL_SEPARATOR:"\u663E\u793A\u5782\u76F4\u5206\u9694\u7B26",END:"\u7ED3\u5C3E"}],Ie={locale:"en_US",theme:"darkblue",customTheme:"#263e3a",themeShade:600,colorScheme:"dark",fitWidthIfOversize:!0,showThumbnails:!0,enableComments:!0,downloadZip:!1,verticalSeparator:!1,throttlePageLoad:1e3,zoomMode:"percent",defaultZoom:100,zoomStep:25,minZoom:30,loadMode:"wait",viewMode:"WebComic",bookmarks:[],lazyLoadImages:!1,lazyStart:50,hidePageControls:!1,header:"hover",maxReload:5,scrollHeight:20,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],SCROLL_START:["space"]}},T=()=>pn()?_.defaultsDeep({lazyLoadImages:!0,fitWidthIfOversize:!0,showThumbnails:!1,viewMode:"WebComic",header:"click"},Ie):Ie;let M=_.defaultsDeep(Me(T()),T());hn(e=>{const t=_.defaultsDeep(e,T()),n=Oe(t,M);x(n)||(l("Imported Settings",n),M=t,document.getElementById("MangaOnlineViewer")?.dispatchEvent(new Event("hydrate")))});function a(){return M}function i(e){const t=G.find(n=>n.ID===M.locale);return t?.[e]?t[e]:G?.at(1)?.[e]?G[1][e]:"##MISSING_STRING##"}function w(e){l(JSON.stringify(e)),M={...M,...e},dn(Oe(M,T()))}function wn(){an().forEach(e=>{rn(e)}),w(T())}function R(e=window.location.href){return M.bookmarks.find(t=>t.url===e)?.page}const fn=1e3*60*60*24*30*12,Ce=M.bookmarks.filter(e=>Date.now()-new Date(e.date).valueOf()<fn);M.bookmarks.length!==Ce.length&&w({bookmarks:Ce});const b={dark:{name:"dark",50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113"},gray:{name:"gray",50:"#f8f9fa",100:"#f1f3f5",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#868e96",700:"#495057",800:"#343a40",900:"#212529"},red:{name:"red",50:"#fff5f5",100:"#ffe3e3",200:"#ffc9c9",300:"#ffa8a8",400:"#ff8787",500:"#ff6b6b",600:"#fa5252",700:"#f03e3e",800:"#e03131",900:"#c92a2a"},pink:{name:"pink",50:"#fff0f6",100:"#ffdeeb",200:"#fcc2d7",300:"#faa2c1",400:"#f783ac",500:"#f06595",600:"#e64980",700:"#d6336c",800:"#c2255c",900:"#a61e4d"},grape:{name:"grape",50:"#f8f0fc",100:"#f3d9fa",200:"#eebefa",300:"#e599f7",400:"#da77f2",500:"#cc5de8",600:"#be4bdb",700:"#ae3ec9",800:"#9c36b5",900:"#862e9c"},violet:{name:"violet",50:"#f3f0ff",100:"#e5dbff",200:"#d0bfff",300:"#b197fc",400:"#9775fa",500:"#845ef7",600:"#7950f2",700:"#7048e8",800:"#6741d9",900:"#5f3dc4"},indigo:{name:"purple",50:"#edf2ff",100:"#dbe4ff",200:"#bac8ff",300:"#91a7ff",400:"#748ffc",500:"#5c7cfa",600:"#4c6ef5",700:"#4263eb",800:"#3b5bdb",900:"#364fc7"},blue:{name:"blue",50:"#e7f5ff",100:"#d0ebff",200:"#a5d8ff",300:"#74c0fc",400:"#4dabf7",500:"#339af0",600:"#228be6",700:"#1c7ed6",800:"#1971c2",900:"#1864ab"},cyan:{name:"cyan",50:"#e3fafc",100:"#c5f6fa",200:"#99e9f2",300:"#66d9e8",400:"#3bc9db",500:"#22b8cf",600:"#15aabf",700:"#1098ad",800:"#0c8599",900:"#0b7285"},teal:{name:"teal",50:"#e6fcf5",100:"#c3fae8",200:"#96f2d7",300:"#63e6be",400:"#38d9a9",500:"#20c997",600:"#12b886",700:"#0ca678",800:"#099268",900:"#087f5b"},green:{name:"green",50:"#ebfbee",100:"#d3f9d8",200:"#b2f2bb",300:"#8ce99a",400:"#69db7c",500:"#51cf66",600:"#40c057",700:"#37b24d",800:"#2f9e44",900:"#2b8a3e"},lime:{name:"lime",50:"#f4fce3",100:"#e9fac8",200:"#d8f5a2",300:"#c0eb75",400:"#a9e34b",500:"#94d82d",600:"#82c91e",700:"#74b816",800:"#66a80f",900:"#5c940d"},yellow:{name:"yellow",50:"#fff9db",100:"#fff3bf",200:"#ffec99",300:"#ffe066",400:"#ffd43b",500:"#fcc419",600:"#fab005",700:"#f59f00",800:"#f08c00",900:"#e67700"},orange:{name:"orange",50:"#fff4e6",100:"#ffe8cc",200:"#ffd8a8",300:"#ffc078",400:"#ffa94d",500:"#ff922b",600:"#fd7e14",700:"#f76707",800:"#e8590c",900:"#d9480f"},darkblue:{name:"darkblue",50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"}},bn=10,yn=95;function vn(e,t){return e.l=t,tinycolor(e).toHexString()}function En(e){const t=tinycolor(e),n=t.toHsl();return vn(n,t.isDark()?yn:bn)}function Z(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}Object.values(b).map(e=>e[900]);const kn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
  <path d="M18 4v17" />
  <path d="M15 18l3 3l3 -3" />
</svg>


`,Ae=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />
  <path d="M18 14v7" />
  <path d="M18 3v7" />
  <path d="M15 18l3 3l3 -3" />
  <path d="M15 6l3 -3l3 3" />
</svg>


`,Sn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
  <path d="M20 18h-17" />
  <path d="M6 15l-3 3l3 3" />
</svg>


`,xn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />
  <path d="M4 18h17" />
  <path d="M18 15l3 3l-3 3" />
</svg>


`,Le=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
  <path d="M10 18h-7" />
  <path d="M21 18h-7" />
  <path d="M6 15l-3 3l3 3" />
  <path d="M18 15l3 3l-3 3" />
</svg>


`,Mn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
</svg>


`,On=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
</svg>


`,Te=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
</svg>


`,_e=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897" />
  <path d="M3 3l18 18" />
</svg>


`,In=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
  <path d="M11 3h5a3 3 0 0 1 3 3v11" />
</svg>


`,Cn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4h6v6h-6z" />
  <path d="M14 4h6v6h-6z" />
  <path d="M4 14h6v6h-6z" />
  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
</svg>


`,Re=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l5 5l10 -10" />
</svg>


`,An=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 4l0 4l-6 0l0 -4" />
</svg>


`,Ln=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
  <path d="M11 13l9 -9" />
  <path d="M15 4h5v5" />
</svg>


`,Tn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
</svg>


`,_n=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
  <path d="M3 3l18 18" />
</svg>


`,Rn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M12 17v-6" />
  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
</svg>


`,Bn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
  <path d="M6 10l0 .01" />
  <path d="M10 10l0 .01" />
  <path d="M14 10l0 .01" />
  <path d="M18 10l0 .01" />
  <path d="M6 14l0 .01" />
  <path d="M18 14l0 .01" />
  <path d="M10 14l4 .01" />
</svg>


`,Dn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 6h9" />
  <path d="M11 12h9" />
  <path d="M12 18h8" />
  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
  <path d="M6 10v-6l-2 2" />
</svg>


`,Nn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3a9 9 0 1 0 9 9" />
</svg>


`,Vn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg>


`,$n=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9h8" />
  <path d="M8 13h6" />
  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
</svg>


`,Be=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>


`,De=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>


`,Fn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg>


`,Ne=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 8h.01" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
</svg>


`,Pn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24"
     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
     stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 8h.01"/>
    <path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/>
    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/>
    <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/>
    <path d="M3 3l18 18" color="orange"/>
</svg>


`,zn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
</svg>


`,Gn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
</svg>


`,Zn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />
  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M16 12h-8" />
</svg>


`,Ve=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>


`,Hn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>


`,H=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>


`,Wn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M8 8l4 4" />
  <path d="M12 8l-4 4" />
  <path d="M21 21l-6 -6" />
</svg>


`,Un=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M10 7l0 6" />
  <path d="M21 21l-6 -6" />
</svg>


`,qn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 13v4" />
  <path d="M13 15h4" />
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M22 22l-3 -3" />
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
  <path d="M3 11v-1" />
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
  <path d="M10 3h1" />
  <path d="M15 3h1a2 2 0 0 1 2 2v1" />
</svg>


`,jn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M21 21l-6 -6" />
</svg>


`,Qn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 15h4" />
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M22 22l-3 -3" />
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
  <path d="M3 11v-1" />
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
  <path d="M10 3h1" />
  <path d="M15 3h1a2 2 0 0 1 2 2v1" />
</svg>


`,Yn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 17l-2.5 -2.5" />
  <path d="M10 5l2 -2l2 2" />
  <path d="M19 10l2 2l-2 2" />
  <path d="M5 10l-2 2l2 2" />
  <path d="M10 19l2 2l2 -2" />
</svg>


`,Xn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4v16l13 -8z" />
</svg>


`,Kn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
</svg>


`,Jn=xe`
    :root,
    .dark {
      --theme-body-background: ${b.dark[600]};
      --theme-body-text-color: ${b.dark[50]};
      --theme-text-color: ${b.dark[50]};
      --theme-primary-color: ${b.dark[700]};
      --theme-primary-text-color: ${b.dark[50]};
      --theme-background-color: ${b.dark[600]};
      --theme-hightlight-color: ${b.dark[500]};
      --theme-border-color: ${b.dark[400]};
    }

    .light {
      --theme-body-background: ${b.gray[50]};
      --theme-body-text-color: ${b.gray[900]};
      --theme-text-color: ${b.gray[900]};
      --theme-primary-color: ${b.gray[300]};
      --theme-primary-text-color: ${b.gray[900]};
      --theme-background-color: ${b.gray[50]};
      --theme-hightlight-color: ${b.gray[500]};
      --theme-border-color: ${b.gray[100]};
    }

    #MangaOnlineViewer .PageContent .PageImg[src=''],
    #MangaOnlineViewer .PageContent .PageImg:not([src]) {
      background-image: url('${Z(Ne)}');
    }

    #MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],
    #MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
      background-image: url('${Z(Ne)}');
    }

    #MangaOnlineViewer .PageContent .PageImg.imgBroken,
    #MangaOnlineViewer .Thumbnail .ThumbnailImg.imgBroken {
      background-image: url('${Z(Pn)}');
    }

    #MangaOnlineViewer .ThemeRadio.custom {
      /*background-image: url("${Z(De)}");*/
    }

    ${`/*  Simple Normalizer */
html {
    font-size: 100%;
}

body {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: var(--theme-body-text-color);
    background-color: var(--theme-body-background);
    padding: 0;
}

a,
a:link,
a:visited,
a:active,
a:focus {
    color: var(--theme-body-text-color);
    text-decoration: none;
}

img {
    height: auto;
    vertical-align: middle;
    border: 0 none;
}
`}
    ${`:root {
    --theme-body-background: #25262b;
    --theme-body-text-color: #c1c2c5;
    --theme-text-color: #c1c2c5;
    --theme-primary-color: #1a1b1e;
    --theme-primary-text-color: #c1c2c5;
    --theme-background-color: #25262b;
    --theme-hightlight-color: #2c2e33;
    --theme-border-color: #373a40;
}

#MangaOnlineViewer {
    text-decoration: none;
    color: var(--theme-body-text-color);
    background-color: var(--theme-body-background);
}

#MangaOnlineViewer #Chapter {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    min-width: 225px;
}

#MangaOnlineViewer #Chapter.Vertical:has(+ #Navigation:not(.disabled)),
#MangaOnlineViewer #Chapter.WebComic:has(+ #Navigation:not(.disabled)) {
    padding-bottom: 31px;
}

#MangaOnlineViewer #Chapter.Vertical .PageContent {
    margin-bottom: 8px;
    margin-top: 8px;
}

#MangaOnlineViewer .closeButton {
    width: fit-content;
    height: fit-content;
    position: absolute;
    right: 10px;
    top: 10px;
}

#MangaOnlineViewer .overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 950;
    cursor: pointer;
}

#MangaOnlineViewer .overlay.visible {
    display: block;
}

#MangaOnlineViewer select {
    height: 20px;
    padding: 0;
    margin-bottom: 5px;
}

#MangaOnlineViewer .ControlButton,
#MangaOnlineViewer .simpleButton {
    cursor: pointer;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    padding: 2px;
    min-height: 32px;
    color: var(--theme-primary-text-color);
    background-color: var(--theme-primary-color);
    border-color: var(--theme-border-color);
}

#MangaOnlineViewer .ControlButton:active,
#MangaOnlineViewer .ControlButton:hover {
    opacity: 0.8;
}

#MangaOnlineViewer .simpleButton {
    font-size: initial;
    min-width: 32px;
}

#MangaOnlineViewer .panel .simpleButton {
    position: absolute;
    top: 10px;
    left: 10px;
}

#MangaOnlineViewer .panel {
    padding: 5px;
    position: inherit;
    border-radius: 5px;
    background-color: var(--theme-background-color);
}

#MangaOnlineViewer :not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {
    max-width: 100%;
    object-fit: contain;
}

#MangaOnlineViewer .ControlButton.hidden,
#MangaOnlineViewer.light #ColorScheme > .icon-tabler-sun,
#MangaOnlineViewer.dark #ColorScheme > .icon-tabler-moon,
#MangaOnlineViewer .light + #CommentsColorScheme > .icon-tabler-sun,
#MangaOnlineViewer .dark + #CommentsColorScheme > .icon-tabler-moon,
#MangaOnlineViewer .ChapterControl #download.loading > .icon-tabler-file-download,
#MangaOnlineViewer .ChapterControl #download:not(.loading) > .icon-tabler-loader-2,
#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide > .icon-tabler-eye-off,
#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide > .icon-tabler-eye,
#MangaOnlineViewer.bookmarked .Bookmark > .icon-tabler-bookmark,
#MangaOnlineViewer:not(.bookmarked) .Bookmark > .icon-tabler-bookmark-off,
#MangaOnlineViewer #AutoScroll.running > .icon-tabler-player-play,
#MangaOnlineViewer #AutoScroll:not(.running) > .icon-tabler-player-pause {
    display: none;
}

#MangaOnlineViewer.hideControls .PageFunctions {
    visibility: hidden;
}
`}
  ${`#MangaOnlineViewer #gotoPage {
    min-width: 35px;
}

#MangaOnlineViewer #Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    transition: transform 0.3s ease-in;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: inherit;
    z-index: 900;
}

#MangaOnlineViewer #Header.click {
    padding-left: 40px;
}

@keyframes headroom {
    from {
        transform: translateY(-100%);
        position: sticky;
        top: 0;
    }
    to {
        transform: translateY(0%);
        position: sticky;
        top: 0;
    }
}

#MangaOnlineViewer #Header:not(.visible, .headroom-top, .fixed, .simple) {
    animation: headroom 0.3s ease-in reverse;
    transform: translateY(-100%);
    position: sticky;
    top: 0;
}

#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL) {
    position: fixed;
    padding-left: 40px;
    top: -100%;
}

#MangaOnlineViewer #Header.scroll.headroom-hide {
    animation: none;
    transform: translateY(-100%);
    position: sticky;
    top: 0;
}

#MangaOnlineViewer #Header.scroll.headroom-show,
#MangaOnlineViewer #Header.headroom-end,
#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL).visible,
#MangaOnlineViewer #Header.visible {
    animation: headroom 0.3s ease-in;
    transform: translateY(0%);
    position: sticky;
    top: 0;
}

#MangaOnlineViewer #Header.headroom-top {
    animation: none;
}

#MangaOnlineViewer #Header.fixed {
    position: sticky;
    animation: none;
    top: 0;
    transform: translateY(0%);
}

#MangaOnlineViewer #Header.simple {
    position: static;
    animation: none;
    top: 0;
    transform: translateY(0%);
}

#MangaOnlineViewer #menu {
    position: fixed;
    z-index: 1;
    color: var(--theme-body-text-color);
    height: 40px;
    width: 40px;
}

#MangaOnlineViewer #menu .icon-tabler {
    position: relative;
    top: 4px;
    left: 4px;
    height: 32px;
    width: 32px;
    stroke-width: 1.25;
}

#MangaOnlineViewer #menu:not(.click, .hover),
#MangaOnlineViewer #menu.hide {
    display: none;
}

#MangaOnlineViewer #menu.click {
    z-index: 901;
}

#MangaOnlineViewer #MangaTitle {
    padding: 2px;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
}

#MangaOnlineViewer #GlobalFunctions {
    display: flex;
    gap: 3px;
    padding: 3px 3px 3px 0;
    flex-wrap: wrap;
    width: 300px;
    z-index: 100;
}

#MangaOnlineViewer #GlobalFunctions span,
#MangaOnlineViewer .ChapterControl span {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
}

#MangaOnlineViewer .ChapterControl span {
    flex-grow: 1;
}

#MangaOnlineViewer .ChapterControl span > * {
    flex-basis: 50%;
}

#MangaOnlineViewer #ScrollControl .icon-tabler,
#MangaOnlineViewer #GlobalFunctions .icon-tabler {
    width: 25px;
    height: 25px;
}

#MangaOnlineViewer #GlobalFunctions #ZoomSlider {
    display: flex;
    align-items: center;
}

#MangaOnlineViewer #GlobalFunctions #Zoom {
    margin: 2px 5px;
    width: 160px;
}

#MangaOnlineViewer #GlobalFunctions #ZoomVal {
    width: 40px;
    display: inline-block;
    color: var(--theme-primary-text-color);
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    background: var(--theme-primary-color);
    padding: 2px 5px;
}

#MangaOnlineViewer #ChapterNavigation {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: end;
    padding: 5px;
    max-width: 350px;
}

#MangaOnlineViewer #Counters {
    padding-right: 5px;
}

#MangaOnlineViewer #ChapterControl {
    display: flex;
}

#MangaOnlineViewer #ChapterControl .NavigationControlButton {
    display: inline-flex;
    margin: 2px;
    justify-content: center;
    align-items: center;
    padding: 3px;
    gap: 0.5em;
}

#MangaOnlineViewer #ChapterControl .NavigationControlButton .icon-tabler {
    flex-shrink: 0;
    align-self: center;
    width: 1rem;
    height: 1rem;
}

#MangaOnlineViewer #ChapterControl .NavigationControlButton[href='#'],
#MangaOnlineViewer #ChapterControl .NavigationControlButton[href=''],
#MangaOnlineViewer #ChapterControl .NavigationControlButton[href='undefined'] {
    visibility: hidden;
}

#MangaOnlineViewer #ChapterControl #download.loading {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.6;
}

#MangaOnlineViewer #ChapterControl .NavigationControlButton.disabled {
    pointer-events: none;
    filter: grayscale(0.9);
}

#MangaOnlineViewer .ViewerTitle {
    text-align: center;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    flex-basis: 60%;
}
`}
  ${`.icon-tabler {
    height: 1rem;
    width: 1rem;
    vertical-align: sub;
}

.icon-tabler-file-download > :nth-child(n + 4) {
    /* 4, 5 */
    color: gold;
}

.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {
    /* 3,4,5,6 */
    color: yellow;
}

.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {
    /* 3,4,5,6 */
    color: yellow;
}

.icon-tabler-zoom-in-area > :nth-child(2),
.icon-tabler-zoom-in-area > :nth-child(3) {
    color: lime;
}

.icon-tabler-zoom-out-area > :nth-child(2) {
    color: red;
}

.icon-tabler-zoom-pan > :nth-child(n + 4) {
    color: #9966ff;
}

.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {
    color: #28ffbf;
}

.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {
    color: #28ffbf;
}

.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {
    color: #28ffbf;
}

.icon-tabler-spacing-vertical > :nth-child(4) {
    color: fuchsia;
}

.icon-tabler-list-numbers > :nth-child(n + 5) {
    color: #e48900;
}

.icon-tabler-bookmarks > :nth-child(n + 2) {
    color: orange;
}

.icon-tabler-bookmark > * {
    color: orange;
}

.icon-tabler-bookmark-off > * {
    color: orange;
}

.icon-tabler-bookmark-off > :nth-child(3) {
    color: red;
}

.icon-tabler-eye-off > :nth-child(4) {
    color: red;
}

.icon-tabler-zoom-cancel > :nth-child(3),
.icon-tabler-zoom-cancel > :nth-child(4) {
    color: #9966ff;
}

.icon-tabler-zoom-in > :nth-child(3),
.icon-tabler-zoom-in > :nth-child(4) {
    color: lime;
}

.icon-tabler-zoom-out > :nth-child(3) {
    color: red;
}

.icon-tabler-refresh > :nth-child(n + 2) {
    color: cyan;
}

.icon-tabler-photo > * {
    color: silver;
}

.icon-tabler-photo-off > * {
    color: silver;
}

.icon-tabler-photo-off > :nth-child(6) {
    color: orange;
}

.icon-tabler-message > :nth-child(2),
.icon-tabler-message > :nth-child(3) {
    color: greenyellow;
}
`}
  ${`#MangaOnlineViewer #KeybindingsPanel {
    padding: 10px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
    line-height: 1.5em;
    z-index: 1000;
    overflow-y: auto;
    width: 360px;
    max-width: 100vw;
}

#MangaOnlineViewer #KeybindingsPanel.visible {
    transform: translateX(0);
    display: block;
}

#MangaOnlineViewer #KeybindingsPanel #KeybindingsList {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5px;
}

#MangaOnlineViewer #KeybindingsPanel .ControlButton {
    margin-left: 3px;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    gap: 0.5em;
}

#MangaOnlineViewer #KeybindingsPanel label {
    display: ruby;
}
#MangaOnlineViewer #KeybindingsPanel input {
    display: inline-block;
    width: 100%;
}

#MangaOnlineViewer #KeybindingsPanel #HotKeysRules {
    grid-column: span 2;
}
`}
  ${`#MangaOnlineViewer .MangaPage {
    width: 100%;
    display: inline-block;
    text-align: center;
    line-height: 0;
    min-height: 22px;
    min-width: 100%;
}

#MangaOnlineViewer .PageContent {
    text-align: center;
    display: inline-block;
    overflow-x: auto;
    max-width: 100%;
    transition: all 0.3s ease-in-out;
    height: 100%;
    overflow-y: hidden;
}

#MangaOnlineViewer .MangaPage.hide .PageContent {
    height: 0;
}

#MangaOnlineViewer .PageContent .PageImg[src=''],
#MangaOnlineViewer .PageContent .PageImg:not([src]) {
    width: 40vw;
    height: 80vh;
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20%;
    background-color: var(--theme-hightlight-color);
}

#MangaOnlineViewer .PageContent .PageImg.imgBroken {
    width: 40vw;
    height: 80vh;
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20%;
    background-color: var(--theme-hightlight-color);
}

#MangaOnlineViewer .PageFunctions {
    font-family: monospace;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 3px;
    position: absolute;
    right: 0;
}

#MangaOnlineViewer .PageFunctions > .PageIndex {
    background-color: var(--theme-primary-color);
    color: var(--theme-primary-text-color);
    min-width: 20px;
    text-align: center;
    display: inline-block;
    padding: 3px 5px;
    line-height: 1rem;
    border-radius: 5px;
}

#MangaOnlineViewer .PageFunctions .ControlButton {
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-width: 0;
    min-height: auto;
    opacity: 0.5;
}

#MangaOnlineViewer .PageFunctions:hover .ControlButton {
    opacity: 1;
}

#MangaOnlineViewer .PageFunctions .ControlButton:hover {
    opacity: 0.9;
}

#MangaOnlineViewer #Chapter.Vertical .separator {
    display: flex;
    align-items: center;
    text-align: center;
    font-style: italic;
}

#MangaOnlineViewer #Chapter.Vertical .separator::before,
#MangaOnlineViewer #Chapter.Vertical .separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--theme-text-color);
}

#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::before {
    margin-right: 0.25em;
}

#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::after {
    margin-left: 0.25em;
}

#MangaOnlineViewer #Chapter:not(.separator) .separator,
#MangaOnlineViewer #Chapter:not(.Vertical) .separator {
    display: none;
}
`}
  ${`#MangaOnlineViewer #Chapter.FluidLTR,
#MangaOnlineViewer #Chapter.FluidRTL {
    display: flex;
    overflow-x: auto;
    min-width: auto;

    .ZoomWidth {
        display: none;
    }

    .PageImg {
        min-width: unset;
    }

    .MangaPage {
        width: initial;
        min-width: fit-content;
        position: relative;
        max-height: 100%;
    }

    .MangaPage.DoublePage {
        grid-column: span 2;
    }
}

#MangaOnlineViewer #Chapter.FluidLTR {
    flex-direction: row;

    .MangaPage .PageFunctions {
        right: auto;
        left: 0;
        direction: rtl;
    }
}

#MangaOnlineViewer #Chapter.FluidRTL {
    flex-direction: row-reverse;
}
`}
  ${`#MangaOnlineViewer #SettingsPanel {
    color: var(--theme-text-color);
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    transition: transform 0.3s ease-in,
    background-color 0.3s linear;
    transform: translateX(-100%);
    display: flex;
    flex-flow: column;
    gap: 5px;
    overflow-y: auto;
    max-width: 100vw;
    width: 305px;
}

#MangaOnlineViewer #SettingsPanel.visible {
    transform: translateX(0);
}

#MangaOnlineViewer #SettingsPanel .ControlLabel {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}

#MangaOnlineViewer #SettingsPanel .ControlLabelItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {
    display: none;
}

#MangaOnlineViewer #SettingsPanel input[type='range'] {
    width: 100%;
}

#MangaOnlineViewer #SettingsPanel .RangeValue {
    display: inline-block;
    color: var(--theme-primary-text-color);
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    background: var(--theme-primary-color);
    padding: 2px 5px;
    margin-left: 8px;
}

#MangaOnlineViewer #SettingsPanel datalist {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    writing-mode: vertical-lr;
    width: 100%;
}

#MangaOnlineViewer #SettingsPanel datalist option {
    padding: 0;
}

#MangaOnlineViewer #ThemeSection {
    border: 1px solid var(--theme-body-text-color);
    border-radius: 10px;
    padding: 10px;
}

#MangaOnlineViewer .ThemeRadio {
    border: 1px solid var(--theme-text-color);
    color: var(--theme-primary-text-color);
    background-color: var(--theme-primary-color);
    height: 20px;
    width: 20px;
    border-radius: 50%;
    padding: 1px;
    margin: 2px 5px;
    position: relative;
}

#MangaOnlineViewer .ThemeRadio svg {
    position: absolute;
    top: 15%;
    right: 15%;
}

#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {
    display: inline;
}

#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {
    display: none;
}

#MangaOnlineViewer #ThemeSelector {
    width: 110px;
}

#MangaOnlineViewer #Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {
    display: none;
}
`}
  ${`#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],
#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
    width: 100px;
    height: 150px;
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20%;
}

#MangaOnlineViewer #NavigationCounters {
    margin: 5px;
    width: 100%;
    line-height: 1rem;
}

#MangaOnlineViewer #Navigation {
    color: var(--theme-text-color);
    background-color: var(--theme-hightlight-color);
    bottom: -180px;
    height: 185px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 20px;
    position: fixed;
    white-space: nowrap;
    width: 100%;
    text-align: center;
    transition:
        transform 0.3s ease-in,
        background-color 0.3s linear;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    line-height: 0;
}

#MangaOnlineViewer #Navigation #Thumbnails {
    overflow-x: auto;
    overflow-y: hidden;
    margin-right: 10px;
}

#MangaOnlineViewer #Navigation:hover {
    transform: translateY(-180px);
}

#MangaOnlineViewer #Navigation.disabled {
    display: none;
}

#MangaOnlineViewer #Navigation.visible {
    transform: translateY(-180px);
}

#MangaOnlineViewer #Navigation .Thumbnail {
    display: inline-block;
    height: 150px;
    margin: 0 5px;
    border: 1px solid var(--theme-primary-color);
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {
    color: var(--theme-text-color);
    background-color: var(--theme-hightlight-color);
    display: block;
    opacity: 0.8;
    position: relative;
    bottom: 25%;
    width: 100%;
    line-height: 1rem;
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {
    cursor: pointer;
    display: inline-block;
    max-height: 150px;
    min-height: 150px;
    min-width: 80px;
    max-width: 160px;
}
`}
  ${`#MangaOnlineViewer #BookmarksPanel {
    position: fixed;
    top: 10%;
    width: 50%;
    left: 25%;
    right: 25%;
    text-align: center;
    max-height: 70%;
    transition: transform 0.3s ease-in-out;
    transform: scaleY(0);
    z-index: 1000;
}

#MangaOnlineViewer #BookmarksPanel.visible {
    transform: scaleY(1);
    display: block;
}

#MangaOnlineViewer #BookmarksList {
    padding: 0 15px;
    overflow: auto;
    max-height: 60vh;
}

#MangaOnlineViewer #BookmarksList .BookmarkItem {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
}

#MangaOnlineViewer #BookmarksList .bookmarkColumnLarge {
    flex-basis: 90%;
}

#MangaOnlineViewer #BookmarksList .bookmarkColumnSmall {
    width: 90px;
}

#MangaOnlineViewer #BookmarksList .bookmarkFunctions {
    width: 75px;
}

#MangaOnlineViewer #BookmarksList .bookmarkURl {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex-basis: 55%;
}
`}
  ${`#MangaOnlineViewer #CommentsPanel {
    position: static;
    width: 90%;
    height: 0;
    top: 5%;
    left: 5%;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    transform: scaleY(0);
    z-index: 1000;
    overflow-y: initial;
    background-color: var(--theme-body-background);
    opacity: 0;
}

#MangaOnlineViewer #CommentsPanel.visible {
    position: fixed;
    height: 90%;
    transform: scaleY(1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 1;
}

#MangaOnlineViewer #CommentsArea {
    overflow-y: auto;
    overscroll-behavior: contain;
    height: 100%;
    width: 100%;
    background-color: var(--theme-body-background);
}
`}
  ${`#MangaOnlineViewer.mobile #Header,
#MangaOnlineViewer.tablet #Header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#MangaOnlineViewer.mobile .ViewerTitle,
#MangaOnlineViewer.tablet .ViewerTitle {
    order: 1;
    min-height: auto;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
}

#MangaOnlineViewer.mobile #GlobalFunctions,
#MangaOnlineViewer.tablet #GlobalFunctions {
    width: auto;
    order: 2;
    padding: 5px;
}

#MangaOnlineViewer.mobile #ChapterNavigation,
#MangaOnlineViewer.tablet #ChapterNavigation {
    order: 3;
}

#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,
#MangaOnlineViewer.tablet #GlobalFunctions #ZoomSlider,
#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.tablets, .phones),
#MangaOnlineViewer.tablet #GlobalFunctions .ControlButton:not(.tablets, .phones) {
    display: none;
}

#MangaOnlineViewer.mobile #Header {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

#MangaOnlineViewer.mobile #Header.click + #Chapter:not(.webcomic, .vertical) {
    position: sticky;
}

#MangaOnlineViewer.mobile #MangaTitle {
    word-wrap: anywhere;
}

#MangaOnlineViewer.mobile .ViewerTitle {
    order: 1;
    margin-top: 0;
    height: auto;
    padding: 0;
}

#MangaOnlineViewer.mobile #GlobalFunctions {
    order: 2;
    padding: 0;
    width: auto;
    flex-basis: 35px;
}

#MangaOnlineViewer.mobile #ChapterNavigation {
    order: 3;
    width: min-content;
    min-width: 205px;
}

#MangaOnlineViewer.mobile .ChapterControl {
    flex-direction: row;
    flex-wrap: wrap;
}

#MangaOnlineViewer.mobile .ChapterControl .NavigationControlButton {
    flex-grow: 1;
}

#MangaOnlineViewer.mobile .PageFunctions {
    padding: 0;
}

#MangaOnlineViewer.mobile .PageFunctions .ControlButton.Bookmark {
    opacity: 1;
}

#MangaOnlineViewer.mobile #Navigation,
#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,
#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.phones),
#MangaOnlineViewer.mobile .PageFunctions .ControlButton:not(.Bookmark),
#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoomMode,
#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoom,
#MangaOnlineViewer.mobile #SettingsPanel .fitIfOversize,
#MangaOnlineViewer.mobile #SettingsPanel .showThumbnails,
#MangaOnlineViewer.mobile #SettingsPanel .lazyLoadImages,
#MangaOnlineViewer.mobile #SettingsPanel .downloadZip,
#MangaOnlineViewer.mobile #SettingsPanel .minZoom,
#MangaOnlineViewer.mobile #SettingsPanel .zoomStep,
#MangaOnlineViewer.mobile #SettingsPanel .headerType,
#MangaOnlineViewer.mobile #SettingsPanel .autoScroll,
#MangaOnlineViewer.mobile #KeybindingsPanel,
#MangaOnlineViewer.mobile .ChapterControl .download,
#MangaOnlineViewer.mobile #Counters {
    display: none;
}
`}
  ${`@-webkit-keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes spin-reverse {
    0% {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0);
    }
}

@keyframes spin-reverse {
    0% {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0);
    }
}

.icon-tabler-loader-2,
.animate-spin {
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
}

.animate-spin-reverse {
    -webkit-animation: spin-reverse 1s linear infinite;
    animation: spin-reverse 1s linear infinite;
}
`}
  `;function eo(e,t){const n=document.createElement("style");return n.id=e,n.appendChild(document.createTextNode(t)),n}function to(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(eo(e,t))}function no(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function W(e,t){no(e),to(e,t)}function B(e,t){return h`
      <style type="text/css" id="${e}">
        ${t}
      </style>
    `}function $e(e,t,n){return xe`
      .ThemeRadio.${e}, #MangaOnlineViewer[data-theme='${e}'] {
        --theme-primary-color: ${t};
        --theme-primary-text-color: ${n};
      }
    `}function Fe(e){return $e(e.name,e[a().themeShade],a().themeShade<500?e[900]:e[50])}function ae(e){return $e("custom",e,En(e))}function oo(e){return B(e.name,Fe(e))}function ao(e){W("custom",ae(e))}const Pe=()=>Object.values(b);function io(){Pe().forEach(e=>{W(e.name,Fe(e))}),W("custom",ae(a().customTheme))}const ro=Pe().map(oo).join("")+B("custom",ae(a().customTheme)),ze=[`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}',`#nprogress .bar {
    background: #29d;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
}

#pagesSlider {
    margin: 10px 0;
}

#pageInputs {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
}

#swal2-html-container .pageInput {
    border: 1px darkblue dashed;
    border-radius: 5px;
    text-align: center;
    background-color: aliceblue;
    color: black;
    max-width: 40%;
}

#swal2-title {
    color: navy;
}

button.swal2-styled {
    position: inherit;
    transform: inherit;
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

`,`/**\r
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
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */`].join(`
`);function so(e){return h`
      <title>${e.title}</title>
      <meta charset="UTF-8" />
      ${B("externals",ze)} ${B("reader",Jn)} ${ro}
      ${B("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${a().minZoom}vw;}`)}
    `}const lo=()=>G.map(e=>h`
          <option value="${e.ID}" ${a().locale===e.ID?"selected":""}>
            ${e.NAME}
          </option>
        `).join(""),co=()=>[...Object.keys(b).map(e=>b[e].name)].map(e=>h`
          <span
            title="${e}"
            class="${e} ThemeRadio ${a().theme===e?"selected":""}"
          >
            ${Re}
          </span>
        `).join(""),mo=h` <div class="ControlLabel locale">
    ${i("LANGUAGE")}
    <select id="locale">
      ${lo()}
    </select>
  </div>`,uo=h`
    <div id="ThemeSection">
      <div class="ControlLabel ColorSchemeSelector">
        ${i("COLOR_SCHEME")}
        <button id="ColorScheme" class="ControlButton">${Ve} ${Be}</button>
      </div>
      <div class="ControlLabel ThemeSelector">
        ${i("THEME")}
        <span
          class="custom ThemeRadio 
        ${a().theme==="custom"?"selected":""}"
          title="custom"
        >
          ${De} ${Re}
        </span>
        ${co()}
      </div>
      <div
        id="Hue"
        class="ControlLabel CustomTheme ControlLabelItem 
      ${a().theme.startsWith("custom")?"show":""}"
      >
        ${i("THEME_HUE")}
        <input
          id="CustomThemeHue"
          type="color"
          value="${a().customTheme}"
          class="colorpicker CustomTheme"
        />
      </div>
      <div
        id="Shade"
        class="ControlLabel CustomTheme ControlLabelItem
      ${a().theme.startsWith("custom")?"":"show"}"
      >
        <span>
          ${i("THEME_SHADE")}
          <output id="themeShadeVal" class="RangeValue" for="ThemeShade">
            ${a().themeShade}
          </output>
        </span>
        <input
          type="range"
          value="${a().themeShade}"
          name="ThemeShade"
          id="ThemeShade"
          min="100"
          max="900"
          step="100"
          oninput="themeShadeVal.value = this.value"
        />
      </div>
    </div>
  `,go=h`
    <div class="ControlLabel loadMode">
      ${i("DEFAULT_LOAD_MODE")}
      <select id="loadMode">
        <option value="wait" ${a().loadMode==="wait"?"selected":""}>
          ${i("LOAD_MODE_NORMAL")}
        </option>
        <option value="always" ${a().loadMode==="always"?"selected":""}>
          ${i("LOAD_MODE_ALWAYS")}
        </option>
        <option value="never" ${a().loadMode==="never"?"selected":""}>
          ${i("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `,po=h`
    <div class="ControlLabel PagesPerSecond">
      ${i("LOAD_SPEED")}
      <select id="PagesPerSecond">
        <option value="3000" ${a().throttlePageLoad===3e3?"selected":""}>
          0.3(${i("SLOWLY")})
        </option>
        <option value="2000" ${a().throttlePageLoad===2e3?"selected":""}>
          0.5
        </option>
        <option value="1000" ${a().throttlePageLoad===1e3?"selected":""}>
          01(${i("NORMAL")})
        </option>
        <option value="500" ${a().throttlePageLoad===500?"selected":""}>
          02
        </option>
        <option value="250" ${a().throttlePageLoad===250?"selected":""}>
          04(${i("FAST")})
        </option>
        <option value="125" ${a().throttlePageLoad===125?"selected":""}>
          08
        </option>
        <option value="100" ${a().throttlePageLoad===100?"selected":""}>
          10(${i("EXTREME")})
        </option>
        <option value="1" ${a().throttlePageLoad===1?"selected":""}>
          ${i("ALL_PAGES")}
        </option>
      </select>
    </div>
  `,ho=h` <div class="ControlLabel DefaultZoomMode">
    ${i("DEFAULT_ZOOM_MODE")}
    <select id="DefaultZoomMode">
      <option value="percent" ${a().zoomMode==="percent"?"selected":""}>
        ${i("PERCENT")}
      </option>
      <option value="width" ${a().zoomMode==="width"?"selected":""}>
        ${i("FIT_WIDTH")}
      </option>
      <option value="height" ${a().zoomMode==="height"?"selected":""}>
        ${i("FIT_HEIGHT")}
      </option>
    </select>
  </div>`,wo=h`
    <div
      class="ControlLabel DefaultZoom ControlLabelItem
  ${a().zoomMode==="percent"?"show":""}"
    >
      <span>
        ${i("DEFAULT_ZOOM")}
        <output id="defaultZoomVal" class="RangeValue" for="DefaultZoom">
          ${a().defaultZoom}%
        </output>
      </span>
      <input
        type="range"
        value="${a().defaultZoom}"
        name="DefaultZoom"
        id="DefaultZoom"
        min="5"
        max="200"
        step="5"
        list="tickmarks"
        oninput='defaultZoomVal.value = this.value + "%"'
      />
      <datalist id="tickmarks">
        <option value="5">5</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value="125">125</option>
        <option value="150">150</option>
        <option value="175">175</option>
        <option value="200">200</option>
      </datalist>
    </div>
  `,fo=h`
    <div class="ControlLabel minZoom">
      <span>
        ${i("MINIMUM_ZOOM")}
        <output id="minZoomVal" class="RangeValue" for="minZoom">
          ${a().minZoom}%
        </output>
      </span>
      <input
        type="range"
        value="${a().minZoom}"
        name="minZoom"
        id="minZoom"
        min="30"
        max="100"
        step="10"
        oninput='minZoomVal.value = this.value + "%"'
      />
    </div>
  `,bo=h`
    <div class="ControlLabel zoomStep">
      <span>
        ${i("ZOOM_STEP")}
        <output id="zoomStepVal" class="RangeValue" for="zoomStep">
          ${a().zoomStep}%
        </output>
      </span>
      <input
        type="range"
        value="${a().zoomStep}"
        name="zoomStep"
        id="zoomStep"
        min="5"
        max="50"
        step="5"
        oninput='zoomStepVal.value = this.value + "%"'
      />
    </div>
  `,yo=h`
    <div class="ControlLabel viewMode">
      ${i("DEFAULT_VIEW_MODE")}
      <select id="viewMode">
        <option value="Vertical" ${a().viewMode==="Vertical"?"selected":""}>
          ${i("VIEW_MODE_VERTICAL")}
        </option>
        <option value="WebComic" ${a().viewMode==="WebComic"?"selected":""}>
          ${i("VIEW_MODE_WEBCOMIC")}
        </option>
        <option value="FluidLTR" ${a().viewMode==="FluidLTR"?"selected":""}>
          ${i("VIEW_MODE_LEFT")}
        </option>
        <option value="FluidRTL" ${a().viewMode==="FluidRTL"?"selected":""}>
          ${i("VIEW_MODE_RIGHT")}
        </option>
      </select>
    </div>
  `,vo=h`
    <div
      class="ControlLabel lazyStart ControlLabelItem
    ${a().lazyLoadImages?"show":""}"
    >
      <span>
        ${i("LAZY_LOAD_IMAGES")}
        <output id="lazyStartVal" for="lazyStart"> ${a().lazyStart} </output>
      </span>
      <input
        type="range"
        value="${a().lazyStart}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
      />
    </div>
  `,Eo=h`
    <div class="ControlLabel headerType">
      ${i("HEADER_TYPE")}
      <select id="headerType">
        <option value="hover" ${a().header==="hover"?"selected":""}>
          ${i("HEADER_HOVER")}
        </option>
        <option value="scroll" ${a().header==="scroll"?"selected":""}>
          ${i("HEADER_SCROLL")}
        </option>
        <option value="click" ${a().header==="click"?"selected":""}>
          ${i("HEADER_CLICK")}
        </option>
        <option value="fixed" ${a().header==="fixed"?"selected":""}>
          ${i("HEADER_FIXED")}
        </option>
        <option value="simple" ${a().header==="simple"?"selected":""}>
          ${i("HEADER_SIMPLE")}
        </option>
      </select>
    </div>
  `,ko=h`
    <div class="ControlLabel verticalSeparator">
      ${i("VERTICAL_SEPARATOR")}
      <input
        type="checkbox"
        value="true"
        name="verticalSeparator"
        id="verticalSeparator"
        ${a().verticalSeparator?"checked":""}
      />
    </div>
    <div class="ControlLabel fitIfOversize">
      ${i("FIT_WIDTH_OVERSIZED")}
      <input
        type="checkbox"
        value="true"
        name="fitIfOversize"
        id="fitIfOversize"
        ${a().fitWidthIfOversize?"checked":""}
      />
    </div>
    <div class="ControlLabel showThumbnails">
      ${i("SHOW_THUMBNAILS")}
      <input
        type="checkbox"
        value="true"
        name="showThumbnails"
        id="showThumbnails"
        ${a().showThumbnails?"checked":""}
      />
    </div>
    <div class="ControlLabel enableComments">
      ${i("ENABLE_COMMENTS")}
      <input
        type="checkbox"
        value="true"
        name="enableComments"
        id="enableComments"
        ${a().enableComments?"checked":""}
      />
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${i("LAZY_LOAD_IMAGES_ENABLE")}
      <input
        type="checkbox"
        value="true"
        name="lazyLoadImages"
        id="lazyLoadImages"
        ${a().lazyLoadImages?"checked":""}
      />
    </div>
    ${vo}
    <div class="ControlLabel downloadZip">
      ${i("DOWNLOAD_IMAGES")}
      <input
        type="checkbox"
        value="false"
        name="downloadZip"
        id="downloadZip"
        ${a().downloadZip?"checked":""}
      />
    </div>
    <div class="ControlLabel hidePageControls">
      ${i("HIDE_CONTROLS")}
      <input
        type="checkbox"
        value="false"
        name="hidePageControls"
        id="hidePageControls"
        ${a().hidePageControls?"checked":""}
      />
    </div>
  `,So=h`
    <div class="ControlLabel autoScroll">
      <span>
        ${i("AUTO_SCROLL_HEIGHT")}
        <output id="scrollHeightVal" for="scrollHeight"> ${a().scrollHeight} </output
        >px
      </span>
      <input
        type="range"
        value="${a().scrollHeight}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="100"
        step="1"
        oninput="scrollHeightVal.value = this.value"
      />
    </div>
  `,Ge=()=>h`
    <div id="SettingsPanel" class="panel">
      <h2>${i("SETTINGS")}</h2>
      <button id="CloseSettings" class="closeButton" title="${i("CLOSE")}">
        ${H}
      </button>
      <button id="ResetSettings" class="ControlButton">
        ${i("BUTTON_RESET_SETTINGS")}
      </button>
      ${mo} ${uo} ${go} ${po} ${ho} ${wo} ${fo}
      ${bo} ${yo} ${ko} ${Eo} ${So}
    </div>
  `,ie=()=>Object.keys(a().keybinds).map(e=>{const t=a().keybinds[e]?.length?a().keybinds[e]?.map(n=>h`<kbd class="dark">${n}</kbd>`).join(" / "):"";return h`<span>${i(e)}:</span> <span>${t}</span>`}),xo=()=>Object.keys(a().keybinds).map(e=>h`<label for="${e}">${i(e)}:</label>
            <input
              type="text"
              class="KeybindInput"
              id="${e}"
              name="${e}"
              value="${a().keybinds[e]?.join(" , ")??""}"
            />`).concat(h`<div id="HotKeysRules">${i("KEYBIND_RULES")}</div>`),Ze=()=>h`
    <div id="KeybindingsPanel" class="panel">
      <h2>${i("KEYBINDINGS")}</h2>
      <button id="CloseKeybindings" class="closeButton" title="${i("CLOSE")}">
        ${H}
      </button>
      <div class="controls">
        <button
          id="EditKeybindings"
          class="ControlButton"
          type="button"
          title="${i("EDIT_KEYBINDS")}"
        >
          ${Fn} ${i("BUTTON_EDIT")}
        </button>
        <button
          id="SaveKeybindings"
          class="ControlButton hidden"
          type="button"
          title="${i("SAVE_KEYBINDS")}"
        >
          ${An} ${i("BUTTON_SAVE")}
        </button>
      </div>
      <div id="KeybindingsList">${ie().join(`
`)}</div>
    </div>
  `;function D(e,t=1){return Array(e).fill(0).map((n,o)=>o+1).filter(n=>n>=t)}const Mo=e=>h`
    <nav id="Navigation" class="panel ${a().showThumbnails?"":"disabled"}">
      <div id="NavigationCounters" class="ControlLabel">
        ${Cn}
        <i>0</i> / <b>${e.begin>1?e.pages-(e.begin-1):e.pages}</b>
        ${i("PAGES_LOADED")}
      </div>
      <div id="Thumbnails">
        ${D(e.pages,e.begin).map(t=>h`
              <div id="Thumbnail${t}" class="Thumbnail">
                <img id="ThumbnailImg${t}" alt="" class="ThumbnailImg" src="" />
                <span class="ThumbnailIndex">${t}</span>
              </div>
            `).join("")}
      </div>
    </nav>
  `,Oo=()=>he(a().bookmarks)?[i("LIST_EMPTY")]:a().bookmarks.map((e,t)=>h`
        <div id="Bookmark${t+1}" class="BookmarkItem">
          <span class="bookmarkColumnLarge">
            <span class="bookmarkName">${e.name}</span>
            <br />
            <a class="bookmarkURl" href="${e.url}" target="_blank">${e.url}</a>
          </span>
          <span class="bookmarkColumnSmall">
            <span class="bookmarkDate"> ${new Date(e.date).toISOString().slice(0,10)}</span>
            <br />
            <span class="bookmarkPage">Page: ${e.page}</span>
          </span>
          <span class="bookmarkFunctions">
            <a class="" href="${e.url}" target="_blank">
              <button class="ControlButton open" title="Open Bookmark" type="button">
                ${Ln}
              </button>
            </a>
            <button
              class="ControlButton erase"
              title="Delete Bookmark"
              type="button"
              value="${e.url}"
            >
              ${Hn}
            </button>
          </span>
        </div>
      `),He=()=>h`
    <div id="BookmarksPanel" class="panel">
      <button id="CloseBookmarks" class="closeButton" title="${i("CLOSE")}">
        ${H}
      </button>
      <button class="Bookmark simpleButton" title="${i("BOOKMARK")}">
        ${Te} ${_e}
      </button>
      <h2>${i("BOOKMARKS")}</h2>
      <div id="BookmarksList"></div>
    </div>
  `;function re(){const e=document.getElementById("BookmarksList");e&&(e.innerHTML=Oo().join(""))}const Io=(e,t)=>D(e,t).map(n=>h` <option value="${n}">${n}</option>`),We=e=>h`
    <header id="Header" class="${a().header} headroom-top">
      <aside id="GlobalFunctions">
        <span>
          <button id="enlarge" title="${i("ENLARGE")}" class="ControlButton">
            ${qn}
          </button>
          <button id="restore" title="${i("RESTORE")}" class="ControlButton">
            ${Yn}
          </button>
          <button id="reduce" title="${i("REDUCE")}" class="ControlButton">
            ${Qn}
          </button>
          <button id="fitWidth" title="${i("FIT_WIDTH")}" class="ControlButton">
            ${Le}
          </button>
          <button id="fitHeight" title="${i("FIT_HEIGHT")}" class="ControlButton">
            ${Ae}
          </button>
          <button id="keybindings" title="${i("KEYBINDINGS")}" class="ControlButton">
            ${Bn}
          </button>
          <button
            id="AutoScroll"
            title="${i("SCROLL_START")}"
            class="ControlButton phones"
          >
            ${Xn} ${Kn}
          </button>
        </span>
        <span>
          <button id="ltrMode" title="${i("VIEW_MODE_LEFT")}" class="ControlButton">
            ${xn}
          </button>
          <button
            id="verticalMode"
            title="${i("VIEW_MODE_VERTICAL")}"
            class="ControlButton tablets"
          >
            ${kn}
          </button>
          <button
            id="webComic"
            title="${i("VIEW_MODE_WEBCOMIC")}"
            class="ControlButton tablets"
          >
            ${Zn}
          </button>
          <button id="rtlMode" title="${i("VIEW_MODE_RIGHT")}" class="ControlButton">
            ${Sn}
          </button>
          <button
            id="pageControls"
            title="${i("TOGGLE_CONTROLS")}"
            class="ControlButton tablets"
          >
            ${Dn}
          </button>
          <button
            id="bookmarks"
            title="${i("BOOKMARKS")}"
            class="ControlButton tablets"
          >
            ${In}
          </button>
          <button
            id="settings"
            title="${i("SETTINGS")}"
            class="ControlButton tablets phones"
          >
            ${Gn}
          </button>
        </span>
        <span id="ZoomSlider">
          <output id="ZoomVal" class="RangeValue" for="Zoom">
            ${a().zoomMode==="percent"?`${a().defaultZoom}%`:a().zoomMode}
          </output>
          <input
            type="range"
            value="${a().defaultZoom}"
            name="Zoom"
            id="Zoom"
            min="1"
            max="200"
          />
        </span>
      </aside>
      <div class="ViewerTitle">
        <h1 id="MangaTitle">${e.title}</h1>
        <a id="series" href="${e.series??""}">
          (${i("RETURN_CHAPTER_LIST")})
        </a>
      </div>
      <nav id="ChapterNavigation">
        <div id="Counters" class="ControlLabel">
          ${i("PAGES_LOADED")}:
          <i>0</i> / <b>${e.begin>1?e.pages-(e.begin-1):e.pages}</b>
          <span class="ControlLabel"> ${i("GO_TO_PAGE")}: </span>
          <select id="gotoPage">
            <option selected>#</option>
            ${Io(e.pages,e.begin).join("")}
          </select>
        </div>
        <div id="ChapterControl" class="ChapterControl">
          <span>
            <button
              id="CommentsButton"
              class="NavigationControlButton ControlButton ${e.comments?"":"disabled"}"
              title="${i("DISPLAY_COMMENTS")}"
            >
              ${$n} ${i("DISPLAY_COMMENTS")}
            </button>
            <button
              id="download"
              class="NavigationControlButton ControlButton disabled"
              type="button"
              title="${i("DOWNLOAD_ZIP")}"
            >
              ${Rn} ${Nn} ${i("BUTTON_DOWNLOAD")}
            </button></span
          >
          <span>
            <a
              id="prev"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${e.prev??""}"
              title="${i("PREVIOUS_CHAPTER")}"
            >
              ${Mn} ${i("BUTTON_PREVIOUS")}
            </a>
            <a
              id="next"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${e.next??""}"
              title="${i("NEXT_CHAPTER")}"
            >
              ${i("BUTTON_NEXT")} ${On}
            </a>
          </span>
        </div>
      </nav>
    </header>
  `,Co=(e,t)=>D(e,t).map(n=>h`
        <div id="Page${n}" class="MangaPage">
          <div class="PageFunctions">
            <button class="Bookmark ControlButton" title="${i("BOOKMARK")}">
              ${Te} ${_e}
            </button>
            <button class="ZoomIn ControlButton" title="${i("ZOOM_IN")}">
              ${Un}
            </button>
            <button class="ZoomRestore ControlButton" title="${i("ZOOM_RESET")}">
              ${Wn}
            </button>
            <button class="ZoomOut ControlButton" title="${i("ZOOM_OUT")}">
              ${jn}
            </button>
            <button class="ZoomWidth ControlButton" title="${i("ZOOM_WIDTH")}">
              ${Le}
            </button>
            <button class="ZoomHeight ControlButton" title="${i("ZOOM_HEIGHT")}">
              ${Ae}
            </button>
            <button class="Hide ControlButton" title="${i("HIDE")}">
              ${Tn} ${_n}
            </button>
            <button class="Reload ControlButton" title="${i("RELOAD")}">
              ${zn}
            </button>
            <span class="PageIndex">${n}</span>
          </div>
          <div class="PageContent">
            <img id="PageImg${n}" alt="" class="PageImg" />
          </div>
        </div>
        <div class="separator">
          [ ${n===e?i("END"):`${n} / ${e}`} ]
        </div>
      `),Ao=e=>h`
    <main
      id="Chapter"
      class="${a().fitWidthIfOversize?"fitWidthIfOversize":""}
  ${a().verticalSeparator?"separator":""}
  ${a().viewMode}"
    >
      ${Co(e.pages,e.begin).join("")}
    </main>
  `,Ue=()=>h`
    <div id="CommentsPanel" class="panel">
      <button id="CloseComments" class="closeButton" title="${i("CLOSE")}">
        ${H}
      </button>
      <h2>${i("COMMENTS")}</h2>
      <div id="CommentsArea" class="${a().colorScheme}"></div>
      <button id="CommentsColorScheme" class="simpleButton ColorScheme">
        ${Ve} ${Be}
      </button>
    </div>
  `;function N(e){const t=document.querySelector("#Chapter");t?.classList.contains("FluidLTR")||t?.classList.contains("FluidRTL")?t?.scroll(e?.offsetLeft??0,e?.offsetTop??0):window?.scroll(e?.offsetLeft??0,e?.offsetTop??0)}function v(e,t){return n=>n.addEventListener(e,t)}function se(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function qe(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY+e.deltaX,e.preventDefault())}function je(){document.querySelector("#BookmarksPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function le(e=window.location.href){x(R(e))||(l(`Bookmark Removed ${e}`),w({bookmarks:a().bookmarks.filter(t=>t.url!==e)}),e===window.location.href&&document.querySelector("#MangaOnlineViewer")?.classList.remove("bookmarked"))}function U(e){const t=e.currentTarget.value;l(`Bookmark Removed ${t}`),Swal.fire({title:i("BOOKMARK_REMOVED"),timer:1e4,icon:"error"}),le(t),re(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(v("click",U))}function Lo(){re(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(v("click",U)),document.querySelector("#BookmarksPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function Qe(e){document.querySelector("#MangaOnlineViewer")?.classList.toggle("bookmarked");const t=[...document.querySelectorAll(".MangaPage")].map(s=>Math.abs(s.offsetTop-window.scrollY)),o=parseInt(e.currentTarget.parentElement?.querySelector(".PageIndex")?.textContent??"0",10)||t.indexOf(Math.min(...t))+1,r={name:document.querySelector("title")?.textContent?.trim().replace(/^\(\d+%\) */,"")??"",url:window.location.href,page:o,date:new Date().toISOString().slice(0,10)};R(r.url)?(w({bookmarks:a().bookmarks.filter(s=>s.url!==r.url)}),Swal.fire({title:i("BOOKMARK_REMOVED"),timer:1e4,icon:"error"})):(w({bookmarks:[...a().bookmarks,r]}),Swal.fire({title:i("BOOKMARK_SAVED"),html:i("BOOKMARK_SAVED").replace("##NUM##",o.toString()),icon:"success"})),re(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(v("click",U))}function To(){document.querySelector("#bookmarks")?.addEventListener("click",Lo),document.querySelectorAll(".closeButton")?.forEach(v("click",je)),document.querySelector("#Overlay")?.addEventListener("click",je),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(v("click",U)),document.querySelectorAll(".Bookmark")?.forEach(v("click",Qe)),document.querySelector(".AddBookmark")?.addEventListener("click",Qe)}var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j={exports:{}},_o=j.exports,Ye;function Ro(){return Ye||(Ye=1,function(e,t){(function(n,o){o()})(_o,function(){function n(u,d){return typeof d>"u"?d={autoBom:!1}:typeof d!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),d={autoBom:!d}),d.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function o(u,d,f){var p=new XMLHttpRequest;p.open("GET",u),p.responseType="blob",p.onload=function(){g(p.response,d,f)},p.onerror=function(){console.error("could not download file")},p.send()}function r(u){var d=new XMLHttpRequest;d.open("HEAD",u,!1);try{d.send()}catch{}return 200<=d.status&&299>=d.status}function s(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(d)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof q=="object"&&q.global===q?q:void 0,m=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(u,d,f){var p=c.URL||c.webkitURL,E=document.createElement("a");d=d||u.name||"download",E.download=d,E.rel="noopener",typeof u=="string"?(E.href=u,E.origin===location.origin?s(E):r(E.href)?o(u,d,f):s(E,E.target="_blank")):(E.href=p.createObjectURL(u),setTimeout(function(){p.revokeObjectURL(E.href)},4e4),setTimeout(function(){s(E)},0))}:"msSaveOrOpenBlob"in navigator?function(u,d,f){if(d=d||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(n(u,f),d);else if(r(u))o(u,d,f);else{var p=document.createElement("a");p.href=u,p.target="_blank",setTimeout(function(){s(p)})}}:function(u,d,f,p){if(p=p||open("","_blank"),p&&(p.document.title=p.document.body.innerText="downloading..."),typeof u=="string")return o(u,d,f);var E=u.type==="application/octet-stream",C=/constructor/i.test(c.HTMLElement)||c.safari,xt=/CriOS\/[\d]+/.test(navigator.userAgent);if((xt||E&&C||m)&&typeof FileReader<"u"){var ge=new FileReader;ge.onloadend=function(){var F=ge.result;F=xt?F:F.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=F:location=F,p=null},ge.readAsDataURL(u)}else{var Mt=c.URL||c.webkitURL,pe=Mt.createObjectURL(u);p?p.location=pe:location.href=pe,p=null,setTimeout(function(){Mt.revokeObjectURL(pe)},4e4)}});c.saveAs=g.saveAs=g,e.exports=g})}(j)),j.exports}var Bo=Ro();let ce;const Xe=(e,t,n,o)=>`${e}${(t+1).toString().padStart(Math.floor(Math.log10(n))+1,"0")}.${o.replace("jpeg","jpg")}`;async function Do(e){return new Promise((t,n)=>{l(`Getting Image data: ${e}`),GM_xmlhttpRequest({method:"GET",url:e,headers:{referer:window.location.host,origin:window.location.host},responseType:"blob",onload(o){o.status!==200&&n(o),t(o)}})})}async function No(e,t,n){const o=e.getAttribute("src")??e.getAttribute("data-src")??"";if(z(o))throw new Error("Image source unusable");return P(o)?Promise.resolve({name:Xe("Page-",t,n.length,Ht(o)),data:Gt(o)??""}):new Promise(r=>{Do(o).then(s=>{r({name:Xe("Page-",t,n.length,Zt(o)),data:s.response})}).catch(on("Image not Available"))})}function Vo(e){l(`${e.name} Added to Zip from Base64 Image`),ce.file(e.name,e.data,{base64:!0,createFolders:!0,compression:"DEFLATE"})}async function $o(){ce=new JSZip;const e=[...document.querySelectorAll(".PageImg")];Promise.all(e.map(No)).then(t=>{t.forEach(Vo),l("Generating Zip"),ce.generateAsync({type:"blob"}).then(n=>{l("Download Ready");const o=`${document.querySelector("#MangaTitle")?.textContent?.trim()}.zip`;Bo.saveAs(n,o,{autoBom:!1}),document.getElementById("download")?.classList.remove("loading")}).catch(l)}).catch(t=>l("One or more images couldn't be Downloaded",t))}var V={},y={},Ke;function Fo(){return Ke||(Ke=1,Object.defineProperty(y,"__esModule",{value:!0}),y.BLANK_URL=y.relativeFirstCharacters=y.whitespaceEscapeCharsRegex=y.urlSchemeRegex=y.ctrlCharactersRegex=y.htmlCtrlEntityRegex=y.htmlEntitiesRegex=y.invalidProtocolRegex=void 0,y.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,y.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,y.htmlCtrlEntityRegex=/&(newline|tab);/gi,y.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,y.urlSchemeRegex=/^.+(:|&colon;)/gim,y.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,y.relativeFirstCharacters=[".","/"],y.BLANK_URL="about:blank"),y}var Je;function Po(){if(Je)return V;Je=1,Object.defineProperty(V,"__esModule",{value:!0}),V.sanitizeUrl=void 0;var e=Fo();function t(c){return e.relativeFirstCharacters.indexOf(c[0])>-1}function n(c){var m=c.replace(e.ctrlCharactersRegex,"");return m.replace(e.htmlEntitiesRegex,function(g,u){return String.fromCharCode(u)})}function o(c){return URL.canParse(c)}function r(c){try{return decodeURIComponent(c)}catch{return c}}function s(c){if(!c)return e.BLANK_URL;var m,g=r(c.trim());do g=n(g).replace(e.htmlCtrlEntityRegex,"").replace(e.ctrlCharactersRegex,"").replace(e.whitespaceEscapeCharsRegex,"").trim(),g=r(g),m=g.match(e.ctrlCharactersRegex)||g.match(e.htmlEntitiesRegex)||g.match(e.htmlCtrlEntityRegex)||g.match(e.whitespaceEscapeCharsRegex);while(m&&m.length>0);var u=g;if(!u)return e.BLANK_URL;if(t(u))return u;var d=u.trimStart(),f=d.match(e.urlSchemeRegex);if(!f)return u;var p=f[0].toLowerCase().trim();if(e.invalidProtocolRegex.test(p))return e.BLANK_URL;var E=d.replace(/\\/g,"/");if(p==="mailto:"||p.includes("://"))return E;if(p==="http:"||p==="https:"){if(!o(E))return e.BLANK_URL;var C=new URL(E);return C.protocol=C.protocol.toLowerCase(),C.hostname=C.hostname.toLowerCase(),C.toString()}return E}return V.sanitizeUrl=s,V}var zo=Po();function Go(e){const t=e.currentTarget;t.classList.contains("loading")||(l("Downloading Chapter"),t.classList.add("loading"),$o().catch(n=>l("Error downloading chapter",n)))}function Zo(){document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls")}function de(e){const t=e.target,n=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(n&&n!=="#"?window.location.href=encodeURIComponent(zo.sanitizeUrl(n)):t.id==="series"&&window.history.back())}function Ho(){document.querySelector("#CommentsPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function et(){document.querySelector("#CommentsPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function Wo(){const e=document.querySelector("#CommentsArea");e?.classList.toggle("light"),e?.classList.toggle("dark")}function Uo(){document.querySelector("#download")?.addEventListener("click",Go),document.querySelector("#pageControls")?.addEventListener("click",Zo),document.querySelector("#next")?.addEventListener("click",de),document.querySelector("#prev")?.addEventListener("click",de),document.querySelector("#series")?.addEventListener("click",de),document.querySelector("#CommentsButton")?.addEventListener("click",Ho),document.querySelector("#CommentsColorScheme")?.addEventListener("click",Wo),document.querySelectorAll(".closeButton")?.forEach(v("click",et)),document.querySelector("#Overlay")?.addEventListener("click",et)}function qo(e=0){let t=0;const n=r=>{const s=document.querySelector("#Header");s.classList.remove("headroom-end","headroom-hide","headroom-show","headroom-top"),r&&s.classList.add(`headroom-${r}`)};function o(){const{scrollY:r}=window;e&&a().zoomMode!=="height"&&r+window.innerHeight+e>document.body.scrollHeight?n("end"):r>t&&r>50?n("hide"):r<t&&r>50?n("show"):r<=100?n("top"):n(""),t=r}window.addEventListener("scroll",_.debounce(o,50))}const k=e=>document.querySelector(e)?.dispatchEvent(new Event("click"));function tt(e){const t=document.querySelector("#Chapter");if(t?.classList.contains("FluidLTR")||t?.classList.contains("FluidRTL")){const n=t.classList.contains("FluidRTL")?-1:1;t.scrollBy({left:.8*window.innerWidth*e*n,behavior:"smooth"})}else if(a().zoomMode==="height"){const n=[...document.querySelectorAll(".MangaPage")],o=n.map(m=>Math.abs(m.offsetTop-window.scrollY)),r=_.indexOf(o,_.min(o)),s=r+e,c=document.querySelector("#Header");s<0?N(c):s>=n.length?c.classList.add("headroom-end"):(l(`Current array page ${r},`,`Scrolling to page ${s}`),N(n.at(s)))}else window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}const jo={SCROLL_UP(){tt(-1)},SCROLL_DOWN(){tt(1)},NEXT_CHAPTER(){k("#next")},PREVIOUS_CHAPTER(){k("#prev")},ENLARGE(){k("#enlarge")},REDUCE(){k("#reduce")},RESTORE(){k("#restore")},FIT_WIDTH(){k("#fitWidth")},FIT_HEIGHT(){k("#fitHeight")},SETTINGS(){k("#settings")},VIEW_MODE_WEBCOMIC(){k("#webComic")},VIEW_MODE_VERTICAL(){k("#verticalMode")},VIEW_MODE_LEFT(){k("#rtlMode")},VIEW_MODE_RIGHT(){k("#ltrMode")},SCROLL_START(){k("#AutoScroll")}};function nt(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,hotkeys.unbind(),Object.keys(a().keybinds).forEach(e=>{hotkeys(a().keybinds[e]?.join(",")??"",_.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),jo[e]()},100))})}function Qo(e){return"listImages"in e&&!x(e.listImages)}function Yo(e){return"listPages"in e&&!x(e.listPages)}function Xo(e){return"bruteForce"in e&&!x(e.bruteForce)}async function Ko(e,t){return new Promise(n=>{l("Fetching page: ",e),fetch(e).then(async o=>o.text()).then(o=>{const s=new DOMParser().parseFromString(o,t);n(s)}).catch(o=>{l("Failed to fetch page: ",o)})})}async function Jo(e){return Ko(e,"text/html")}async function ea(e,t,n){return Jo(e).then(o=>o.querySelector(t)?.getAttribute(n))}const Q={threshold:2e3,throttle:500,lazyAttribute:"data-src",targetAttribute:"src"};let Y=[],ot=!1;function at(e){const{element:t}=e,n=t.getBoundingClientRect(),o=(window.innerHeight||document.documentElement.clientHeight)+Q.threshold;return n.top<=o||n.bottom<=o}async function ta(e){let t=e.element.getAttribute(Q.lazyAttribute)??"";t&&(!z(t)&&!P(t)&&e.fetchOptions&&(t=await fetch(t,e.fetchOptions).then(n=>n.blob()).then(n=>blobUtil.blobToDataURL(n))),e.element.setAttribute(Q.targetAttribute,t)),e.callback(e.element)?.catch(l)}function na(){const e=Y.filter(at);Y=Y.filter(t=>!at(t)),e.forEach(ta)}const X=_.throttle(na,Q.throttle);function it(e,t,n){ot||(window.addEventListener("scroll",X,{passive:!0}),window.addEventListener("touchmove",X,{passive:!0}),window.addEventListener("resize",X,{passive:!0}),ot=!0),Y.push({element:e,callback:t,fetchOptions:n}),X()}function S(e=a().zoomMode,t=".PageContent img"){[...document.querySelectorAll(t)].forEach(o=>{if(o.removeAttribute("width"),o.removeAttribute("height"),o.removeAttribute("style"),e==="width")o.style.width=`${window.innerWidth}px`;else if(e==="height"){const r=window.innerHeight+(a().showThumbnails?-29:0);o.style.height=`${r}px`,o.style.minWidth="unset"}else e==="percent"?o.style.width=`${o.naturalWidth*(a().defaultZoom/100)}px`:e>=0&&e!==100&&(o.style.width=`${o.naturalWidth*(e/100)}px`)})}function oa(e,t){const n=e.replace(/[?&]forceReload=\d+$/,""),o=n.includes("?")?"&":"?";return`${n+o}forceReload=${t}`}function rt(e){let t=1;const n=e?.match(/forceReload=(\d+)$/);return n?.at(1)&&(t=parseInt(n[1],10)+1),t}function st(e){const t=e.getAttribute("src");t&&(e.removeAttribute("src"),P(t)||z(t)?e.setAttribute("src",t):e.setAttribute("src",oa(t,rt(t))))}function aa(){l("Images Loading Complete"),a().downloadZip&&document.getElementById("download")?.dispatchEvent(new Event("click")),document.getElementById("download")?.classList.remove("disabled")}function ia(){const e=document.querySelectorAll(".PageContent .PageImg").length,t=document.querySelectorAll(".PageContent .PageImg.imgLoaded").length,n=Math.floor(t/e*100),o=document.querySelector("title");o&&(o.innerHTML=h`(${n}%) ${document.querySelector("#MangaTitle")?.textContent}`),document.querySelectorAll("#Counters i, #NavigationCounters i").forEach(r=>{r.textContent=t.toString()}),NProgress.configure({showSpinner:!1}).set(t/e),l(`Progress: ${n}%`),t===e&&aa()}const ra=(e=".PageContent img")=>{const t=document.querySelector("#ZoomVal")?.textContent?.trim();t?.match(/^\d+%$/)?S(parseInt(t,10),e):S(t,e)};function K(){return e=>{e.images.forEach(t=>{t.img.classList.add("imgLoaded"),t.img.classList.remove("imgBroken");const n=t.img.id.replace("PageImg","ThumbnailImg"),o=document.getElementById(n);o?.classList.remove("imgBroken"),o&&o.setAttribute("src",t.img.getAttribute("src")),ra(`#${t.img.id}`),ia()})}}function J(e){return t=>{t.images.forEach(n=>{n.img.classList.add("imgBroken");const o=n.img.id.replace("PageImg","ThumbnailImg");document.getElementById(o)?.classList.add("imgBroken");const s=n.img.getAttribute("src");s&&rt(s)<=a().maxReload&&setTimeout(async()=>{if(e.reload){const m=parseInt(`0${/\d+/.exec(n.img.id)}`,10),g=await e.reload(m);n.img.setAttribute("src",g)}else st(n.img);const c=imagesLoaded(n.img.parentElement);c.on("done",K()),c.on("fail",J(e))},2e3)})}}function lt(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}function ct(e,t,n,o){const r=o-e.begin;let s=lt(n);const c=document.querySelector(`#PageImg${t}`);c&&(!a().lazyLoadImages||r<=a().lazyStart?setTimeout(async()=>{!z(s)&&!P(s)&&e.fetchOptions&&(s=await fetch(s,e.fetchOptions).then(g=>g.blob()).then(g=>blobUtil.blobToDataURL(g)));const m=imagesLoaded(c.parentElement);m.on("done",K()),m.on("fail",J(e)),c.setAttribute("src",s),l("Loaded Image:",t,"Source:",s)},(e.timer??a().throttlePageLoad)*r):(c.setAttribute("data-src",lt(s)),it(c,()=>{const m=imagesLoaded(c.parentElement);m.on("done",K()),m.on("fail",J(e)),l("Lazy Image: ",t," Source: ",c.getAttribute("src"))},e.fetchOptions)),e.pages===o&&le())}function dt(e,t,n,o){return async()=>{const r=await ea(n,e.img,e.lazyAttr??"src"),s=document.querySelector(`#PageImg${t}`);if(r&&s){s.style.width="auto";const c=imagesLoaded(s.parentElement);c.on("done",K()),c.on("fail",J(e)),s.setAttribute("src",r),l(`${o&&"Lazy "}Page: `,t," Source: ",s.getAttribute("src"))}}}async function sa(e,t,n,o){const r=o-e.begin,s=document.querySelector(`#PageImg${t}`);s&&(!a().lazyLoadImages||r<=a().lazyStart?setTimeout(()=>{dt(e,t,n,!1)().catch(l)},(e.timer??a().throttlePageLoad)*r):(s.setAttribute("data-src","data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),it(s,dt(e,t,n,!0))),e.pages===o&&le())}function mt(e,t){D(t.pages,e).forEach((n,o)=>{sa(t,n,t.listPages[n-1],o).catch(l)})}function ut(e,t){D(t.pages,e).forEach((n,o)=>{ct(t,n,t.listImages[n-1],o)})}function la(e,t=1){a().lazyLoadImages=e.lazy??a().lazyLoadImages,l("Loading Images"),l(`Intervals: ${e.timer??a().throttlePageLoad??"Default(1000)"}`),l(`Lazy: ${a().lazyLoadImages}, Starting from: ${a().lazyStart}`),Qo(e)?(l("Method: Images:",e.listImages),ut(t,e)):Yo(e)?(l("Method: Pages:",e.listPages),mt(t,e)):Xo(e)?(l("Method: Brute Force"),e.bruteForce({begin:t,addImg:ct,loadImages(n){ut(t,{...e,listImages:n})},loadPages(n,o,r){mt(t,{...e,listPages:n,img:o,lazyAttr:r})},wait:a().throttlePageLoad})):l("No Loading Method Found")}function ca(e){const t=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");st(t)}function da(e){(e.currentTarget.parentElement?.parentElement).classList.toggle("hide")}function ma(){document.querySelectorAll(".Reload")?.forEach(v("click",ca)),document.querySelectorAll(".Hide")?.forEach(v("click",da))}function ua(e){const t=e.currentTarget.value;S(),N(document.querySelector(`#Page${t}`))}function ga(e){S(),N(document.querySelector(`#Page${e.currentTarget.querySelector(".ThumbnailIndex")?.textContent}`))}function pa(){document.querySelector("#gotoPage")?.addEventListener("change",ua),document.querySelectorAll(".Thumbnail")?.forEach(v("click",ga)),document.querySelector("#Thumbnails")?.addEventListener("wheel",se)}function ha(){wn();const e=document.getElementById("MangaOnlineViewer");e?.removeAttribute("locale"),e?.dispatchEvent(new Event("hydrate"))}function wa(e){const t=e.currentTarget.value;w({locale:t});const n=document.getElementById("MangaOnlineViewer");n?.setAttribute("locale",t),n?.dispatchEvent(new Event("hydrate"))}function fa(e){const t=e.currentTarget.value;w({loadMode:t})}function ba(e){document.querySelector("#Chapter")?.classList.toggle("fitWidthIfOversize"),w({fitWidthIfOversize:e.currentTarget.checked})}function ya(e){document.querySelector("#Chapter")?.classList.toggle("separator"),w({verticalSeparator:e.currentTarget.checked})}function va(e){document.querySelector("#Navigation")?.classList.toggle("disabled"),w({showThumbnails:e.currentTarget.checked}),S()}function Ea(e){document.querySelector("#CommentsButton")?.classList.toggle("disabled"),w({enableComments:e.currentTarget.checked}),S()}function ka(e){w({downloadZip:e.currentTarget.checked}),e.currentTarget.checked&&Swal.fire({title:i("ATTENTION"),text:i("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function Sa(e){w({lazyLoadImages:e.currentTarget.checked});const t=document.querySelector(".lazyStart");a().lazyLoadImages?t?.classList.add("show"):t?.classList.remove("show"),e.currentTarget.checked&&Swal.fire({title:i("WARNING"),html:i("LAZY_LOAD"),icon:"warning"})}function xa(e){const t=e.currentTarget.value;w({lazyStart:parseInt(t,10)})}function Ma(e){const t=parseInt(e.currentTarget.value,10);w({throttlePageLoad:t}),t<100&&Swal.fire({title:i("SPEED_WARNING"),html:i("SPEED_WARNING_MESSAGE"),icon:"warning"})}function Oa(e){const t=e.currentTarget.value;w({zoomStep:parseInt(t,10)})}function Ia(e){const t=e.currentTarget.value;W("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`),w({minZoom:parseInt(t,10)})}function Ca(e){document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls"),w({hidePageControls:e.currentTarget.checked})}function me(e){const t=document.querySelector("#Header");if(!t?.classList.contains(e)){const n=document.querySelector("#menu");t?.classList.remove("scroll","click","hover","fixed","simple","visible"),n?.classList.remove("scroll","click","hover","fixed","simple","hide"),t?.classList.add(e),n?.classList.add(e)}}function Aa(e){const t=e.currentTarget.value;me(t),w({header:t})}function La(e){const{value:t}=e.currentTarget;w({scrollHeight:parseInt(t,10)})}function Ta(){document.querySelector("#ResetSettings")?.addEventListener("click",ha),document.querySelector("#locale")?.addEventListener("change",wa),document.querySelector("#fitIfOversize")?.addEventListener("change",ba),document.querySelector("#verticalSeparator")?.addEventListener("change",ya),document.querySelector("#loadMode")?.addEventListener("change",fa),document.querySelector("#showThumbnails")?.addEventListener("change",va),document.querySelector("#enableComments")?.addEventListener("change",Ea),document.querySelector("#downloadZip")?.addEventListener("change",ka),document.querySelector("#lazyLoadImages")?.addEventListener("change",Sa),document.querySelector("#lazyStart")?.addEventListener("change",xa),document.querySelector("#PagesPerSecond")?.addEventListener("change",Ma),document.querySelector("#zoomStep")?.addEventListener("change",Oa),document.querySelector("#minZoom")?.addEventListener("input",Ia),document.querySelector("#hidePageControls")?.addEventListener("change",Ca),document.querySelector("#headerType")?.addEventListener("change",Aa),document.querySelector("#scrollHeight")?.addEventListener("change",La)}function _a(e,t,n,o){return()=>{document.querySelector(e)?.className.includes(t)?o():n()}}function Ra(){const e=document.querySelector("#Header");e?.classList.contains("click")&&e?.classList.toggle("visible")}function Ba(e,t,n){return e.clientX>=0&&e.clientX<=t&&e.clientY>=0&&e.clientY<=n}function Da(e){const t=document.querySelector("#Header");t?.classList.contains("hover")&&(Ba(e,t.clientWidth,t.clientHeight)?(document.querySelector("#menu")?.classList.add("hide"),t?.classList.add("visible")):(document.querySelector("#menu")?.classList.remove("hide"),t?.classList.remove("visible")))}function Na(){document.querySelector("#SettingsPanel")?.classList.add("visible"),document.querySelector("#Navigation")?.classList.add("visible"),document.querySelector("#Header")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function ue(){document.querySelector("#SettingsPanel")?.classList.remove("visible"),document.querySelector("#Navigation")?.classList.remove("visible"),document.querySelector("#Header")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function Va(){document.querySelector("#KeybindingsList").innerHTML=ie().join(`
`),document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),document.querySelector("#KeybindingsPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function gt(){document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),document.querySelector("#KeybindingsPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function $a(){const e=a().keybinds;Object.keys(a().keybinds).forEach(t=>{const n=document.querySelector(`#${t}`)?.value.split(",")?.map(o=>o.trim());e[t]=x(n)?void 0:n}),w({keybinds:e}),document.querySelector("#KeybindingsList").innerHTML=ie().join(`
`),document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),nt()}function Fa(){document.querySelector("#KeybindingsList").innerHTML=xo().join(`
`),document.querySelector("#SaveKeybindings")?.classList.remove("hidden"),document.querySelector("#EditKeybindings")?.classList.add("hidden")}function Pa(){document.querySelector("#menu")?.addEventListener("click",Ra),document.addEventListener("mousemove",_.throttle(Da,300)),document.querySelector("#settings")?.addEventListener("click",_a("#SettingsPanel","visible",Na,ue)),document.querySelectorAll(".closeButton")?.forEach(v("click",ue)),document.querySelector("#Overlay")?.addEventListener("click",ue),document.querySelector("#keybindings")?.addEventListener("click",Va),document.querySelectorAll(".closeButton")?.forEach(v("click",gt)),document.querySelector("#Overlay")?.addEventListener("click",gt),document.querySelector("#EditKeybindings")?.addEventListener("click",Fa),document.querySelector("#SaveKeybindings")?.addEventListener("click",$a)}function za(e){const t=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg"),n=t.width/t.naturalWidth*(100+a().zoomStep);S(n,`#${t.getAttribute("id")}`)}function Ga(e){const t=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg"),n=t.width/t.naturalWidth*(100-a().zoomStep);S(n,`#${t.getAttribute("id")}`)}function Za(){document.querySelector(".PageContent .PageImg")?.removeAttribute("width")}function Ha(e){const t=e.currentTarget.parentElement?.parentElement,n=t?.querySelector(".PageImg");S("width",`#${n.getAttribute("id")}`),t?.classList.toggle("DoublePage")}function Wa(e){const t=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");S("height",`#${t.getAttribute("id")}`)}function Ua(){document.querySelectorAll(".ZoomIn")?.forEach(v("click",za)),document.querySelectorAll(".ZoomOut")?.forEach(v("click",Ga)),document.querySelectorAll(".ZoomRestore")?.forEach(v("click",Za)),document.querySelectorAll(".ZoomWidth")?.forEach(v("click",Ha)),document.querySelectorAll(".ZoomHeight")?.forEach(v("click",Wa))}function qa(){const e=a().colorScheme==="dark";w({colorScheme:e?"light":"dark"});const t=document.getElementById("MangaOnlineViewer");t?.classList.remove(e?"dark":"light"),t?.classList.add(a().colorScheme)}function ja(e){const t=e.currentTarget;[...document.querySelectorAll(".ThemeRadio")].forEach(r=>{r.classList.remove("selected")}),t.classList.add("selected"),document.getElementById("MangaOnlineViewer")?.setAttribute("data-theme",t.title),w({theme:t.title});const n=document.querySelector("#Hue"),o=document.querySelector("#Shade");t.title.startsWith("custom")?(n?.classList.add("show"),o?.classList.remove("show")):(n?.classList.remove("show"),o?.classList.add("show"))}function Qa(e){const t=e.currentTarget.value;w({customTheme:t}),ao(t)}function Ya(e){const t=parseInt(e.currentTarget.value,10);w({themeShade:t}),io()}function Xa(){document.querySelector("#ColorScheme")?.addEventListener("click",qa),document.querySelectorAll(".ThemeRadio").forEach(v("click",ja)),document.querySelector("#CustomThemeHue")?.addEventListener("change",Qa),document.querySelector("#ThemeShade")?.addEventListener("input",Ya)}function O(e){return()=>{typeof e!="number"?a().zoomMode=e:a().zoomMode="percent",me(e==="height"?"click":a().header);const t=document.querySelector("#ZoomVal");Number.isInteger(e)?(t.textContent=`${e}%`,document.querySelector("#Zoom").value=e.toString()):t.textContent=e,S(e)}}function pt(e=1){return()=>{const t=document.querySelector("#Zoom"),n=parseInt(t.value,10)+e*a().zoomStep;t.value=n.toString(),t?.dispatchEvent(new Event("input",{bubbles:!0}))}}function Ka(e){const t=e.currentTarget.value;w({zoomMode:t}),O(t)();const n=document.querySelector(".DefaultZoom");a().zoomMode==="percent"?n?.classList.add("show"):n?.classList.remove("show")}function Ja(e){const t=parseInt(e.currentTarget.value,10);w({defaultZoom:t}),O(t)()}function ei(e){const t=parseInt(e.currentTarget.value,10);O(t)(),document.querySelector("#ZoomVal").textContent=`${t}%`}function ti(){document.querySelector("#DefaultZoomMode")?.addEventListener("change",Ka),document.querySelector("#DefaultZoom")?.addEventListener("input",Ja),document.querySelector("#Zoom")?.addEventListener("input",ei),document.querySelector("#enlarge")?.addEventListener("click",pt()),document.querySelector("#reduce")?.addEventListener("click",pt(-1)),document.querySelector("#restore")?.addEventListener("click",O(100)),document.querySelector("#fitWidth")?.addEventListener("click",O("width")),document.querySelector("#fitHeight")?.addEventListener("click",O("height"))}function ht(e){const t=document.querySelector("#Chapter");document.querySelector("#Header")?.classList.remove("visible"),document.querySelector("#menu")?.classList.remove("hide"),O("height")(),N(t),t?.addEventListener("wheel",e==="FluidLTR"?se:qe)}function L(e){return()=>{const t=document.querySelector("#Chapter");t?.classList.remove("Vertical","WebComic","FluidLTR","FluidRTL"),t?.classList.add(e),t?.removeEventListener("wheel",se),t?.removeEventListener("wheel",qe),e==="FluidLTR"||e==="FluidRTL"?ht(e):(document.querySelector("#Header").className=a().header,document.querySelector("#menu").className=a().header,O(100)())}}function ni(e){const t=e.currentTarget.value;L(t)(),w({viewMode:t})}function oi(){document.querySelector("#viewMode")?.addEventListener("change",ni),document.querySelector("#webComic")?.addEventListener("click",L("WebComic")),document.querySelector("#ltrMode")?.addEventListener("click",L("FluidLTR")),document.querySelector("#rtlMode")?.addEventListener("click",L("FluidRTL")),document.querySelector("#verticalMode")?.addEventListener("click",L("Vertical")),(a().viewMode==="FluidLTR"||a().viewMode==="FluidRTL")&&ht(a().viewMode)}let I=!1;function wt(){const e=document.querySelector("#Chapter");if(e?.classList.contains("FluidLTR")||e?.classList.contains("FluidRTL")){const t=e.classList.contains("FluidRTL")?-1:1;e?.scrollBy({top:0,left:a().scrollHeight*t,behavior:"smooth"})}else window.scrollBy({top:a().scrollHeight,left:0,behavior:"smooth"});document.querySelector("#Header")?.classList.contains("headroom-end")&&(I=!1,document.querySelector("#ScrollControl")?.classList.remove("running"),l("Finished auto scroll")),I&&requestAnimationFrame(wt)}function ee(){const e=document.querySelector("#AutoScroll");I?(I=!1,e?.classList.remove("running"),l("Stopped auto scroll")):(I=!0,requestAnimationFrame(wt),e?.classList.add("running"),l("Start auto scroll"))}let te=!1;const ai=_.debounce(()=>{ee(),te=!1},500);function ii(){!te&&I&&(ee(),te=!0),te&&!I&&ai()}function ri(){window.addEventListener("wheel",_.throttle(ii,500)),document.querySelector("#AutoScroll")?.addEventListener("click",ee)}let ft=!1;function bt(){ft||(qo(100),nt(),ma(),Ua(),window.addEventListener("resize",()=>{const e=document.querySelector("#MangaOnlineViewer");e?.classList.remove("mobile","tablet","desktop"),e?.classList.add(A())}),ft=!0),To(),Uo(),pa(),Ta(),Pa(),Xa(),oi(),ti(),ri()}let yt;function si(){L(a().viewMode)();const e={"#Header":We(yt),"#CommentsPanel":Ue(),"#SettingsPanel":Ge(),"#KeybindingsPanel":Ze(),"#Bookmarks":He()};document.querySelector("#ScrollControl")?.classList.contains("running")&&ee();const t=document.querySelector("#MangaOnlineViewer");t&&(t.className=`${a().colorScheme} 
        ${a().hidePageControls?"hideControls":""}
        ${R()?"bookmarked":""}
        ${A()}`,t.setAttribute("data-theme",a().theme));const n=document.querySelector("#Chapter");n&&(n.className=`${a().fitWidthIfOversize?"fitWidthIfOversize":""}  ${a().viewMode}`),Object.entries(e).forEach(([o,r])=>{const s=document.querySelector(o);s&&(s.outerHTML=r)}),document.querySelector("#Overlay")?.dispatchEvent(new Event("click")),bt()}const li=e=>{yt=e;const t=document.createElement("div");return t.id="MangaOnlineViewer",t.className=`
        ${a().colorScheme} 
        ${a().hidePageControls?"hideControls":""}
        ${R()?"bookmarked":""}
        ${A()}`,t.setAttribute("data-theme",a().theme),t.innerHTML=h`
      <div id="menu" class="${a().header}">${Vn}</div>
      ${We(e)} ${Ao(e)} ${Mo(e)}
      <div id="Overlay" class="overlay"></div>
      ${Ue()} ${Ze()} ${He()} ${Ge()}
    `,t.outerHTML},ci=e=>{e.getAttributeNames().forEach(t=>e?.removeAttribute(t))},di=(...e)=>{e?.forEach(ci)};function mi(e){di(document.documentElement,document.head,document.body),window.scrollTo(0,0),document.head.innerHTML=so(e),document.body.innerHTML=li(e),bt(),la(e),document.querySelector("#MangaOnlineViewer")?.addEventListener("hydrate",si),e.comments&&document.querySelector("#CommentsArea")?.append(e.comments)}async function ui(){if(!a().enableComments)return null;let e=document.querySelector("#disqus_thread, #fb-comments");return e&&(l("Waiting to Comments to load",e),window.scrollTo(0,document.body.scrollHeight),await _t(we(()=>{e=document.querySelector("#disqus_thread, #fb-comments");const t=e?.querySelector("iframe:not(#indicator-north, #indicator-south)");return t?.contentWindow?.document.readyState==="complete"&&t?.contentWindow?.document?.body?.textContent?.length})),e.children.length?l("Got Comments",e):l("Timeout Comments")),window.scrollTo(0,0),e}async function $(e){e.before!==void 0&&await e.before(e.begin),a().enableComments&&!e.comments&&(e.comments=await ui()),setTimeout(()=>{try{mi(e)}catch(t){l(t)}},50)}const gi=`#StartMOV {
    all: revert;
    backface-visibility: hidden;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    text-align: center;
    border: none;
    border-radius: 10px;
    min-height: 50px;
    width: 80%;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 105000;
    transition: all 0.4s ease-in-out;
    background-size: 300% 100%;
    background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}

#StartMOV:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
}

#StartMOV:focus {
    outline: none;
}
`;async function pi(e){if(e.waitAttr!==void 0){l(`Waiting for Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]}`);const t=await fe(e.waitAttr[0],e.waitAttr[1]);l(`Found Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]} = ${t}`)}}async function hi(e){if(e.waitEle!==void 0){l(`Waiting for Element ${e.waitEle}`);const t=await Lt(e.waitEle);l(`Found Element ${e.waitEle} = `,t)}}async function wi(e){if(e.waitVar!==void 0){l(`Waiting for Variable ${e.waitVar}`);const t=await be(e.waitVar);l(`Found Variable ${e.waitVar} = ${t}`)}}async function fi(e){if(e.waitFunc!==void 0){l(`Waiting to pass Function check ${e.waitFunc}`);const t=await we(e.waitFunc);l(`Found Function check ${e.waitFunc} = ${t}`)}}async function bi(e){e.waitTime!==void 0&&(l(`Waiting to for ${e.waitTime} milliseconds`),await new Promise(t=>{setTimeout(t,e.waitTime)}),l("Continuing after timer"))}const yi={url:/(file:\/\/\/.+(index)?.html)/},vi=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],Ei=/.(png|jpg|jpeg|gif|bmp|webp)$/i,vt=(e,t)=>e.localeCompare(t,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function ki(e){return vi.includes(e.type)}const Si=e=>{const t=new Uint8Array(e),n=new Blob([t.buffer]);return URL.createObjectURL(n)};async function xi(e){const t=await JSZip.loadAsync(e),n=t.filter((o,r)=>!r.dir&&Ei.test(r.name)).sort((o,r)=>vt(o.name,r.name));return l("Files in zip:",t.files),Promise.all(n.map(o=>o.async("arraybuffer").then(Si)))}function Et(e,t){$({title:e,series:"?reload",pages:t.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:t}).then(()=>l("Page loaded"))}async function Mi(e){const t=await xi(e);Et(typeof e=="string"?e:e.name,t)}function kt(e){const t=e.target,n=Array.from(t.files).filter(ki).sort((o,r)=>vt(o.webkitRelativePath||o.name,r.webkitRelativePath||r.name));l("Local Files: ",n,n.map(o=>o.webkitRelativePath||o.name)),t.files?.[0]&&Et(t.files[0].webkitRelativePath.split("/")[0]||"Local Images",n.map(URL.createObjectURL))}function Oi(){return yi.url.test(window.location.href)?(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const t=e.target;t.files?.[0]&&Mi(t.files[0])}),document.querySelector("#folder")?.addEventListener("change",kt),document.querySelector("#images")?.addEventListener("change",kt),l("Waiting for zip/images upload")),!0):!1}function Ii(e,t,n){let o=e;return Number.isNaN(o)||o<n.min()?o=n.min():o>n.max()?o=n.max():o>t&&(o=t),o}function Ci(e,t,n){let o=e;return Number.isNaN(o)||o>n.max()?o=n.max():o<n.min()?o=n.min():o<t&&(o=t),o}async function Ai(e,t=1){const n=await e.run();l("LateStart");let o=t,r=n.pages;const s={title:i("STARTING"),html:h`
        ${i("CHOOSE_BEGINNING")}
        <div id="pageInputGroup">
          <div id="pageInputs">
            <input
              type="number"
              id="pageBegin"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${n.pages}"
              value="${o}"
            />
            -
            <input
              type="number"
              id="pageEnd"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${n.pages}"
              value="${r}"
            />
          </div>
          <div id="pagesSlider"></div>
        </div>
      `,showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,icon:"question",didOpen(){const c=document.querySelector("#pageBegin"),m=document.querySelector("#pageEnd"),g=rangeSlider(document.getElementById("pagesSlider"),{min:1,max:n.pages,value:[o,r],onInput(f,p){p&&([o,r]=f,c&&(c.value=o.toString()),m&&(m.value=r.toString()))}});function u(){if(c.value===""||m.value==="")return;const f=Ii(parseInt(c.value,10),r,g),p=Ci(parseInt(m.value,10),o,g);c.value=f.toString(),m.value=p.toString(),o=f,r=p,g.value([f,p])}const d=_.debounce(u,600);["change","mouseup","keyup","touchend"].forEach(f=>{c?.addEventListener(f,d),m?.addEventListener(f,d)})}};Swal.fire(s).then(c=>{c.value?(l(`Choice: ${o} - ${r}`),n.begin=o,n.pages=r,$(n).then(()=>l("Page loaded"))):l(c.dismiss)})}function St(e,t){const n=document.createElement("button");n.innerText=i("BUTTON_START"),n.id="StartMOV",n.onclick=()=>{Ai(e,t).catch(l)},document.body.appendChild(n);const o=document.createElement("style");o.appendChild(document.createTextNode(gi+nn)),document.head.appendChild(o),l("Start Button added to page",n)}function Li(e,t){Swal.fire({title:i("STARTING"),html:h`${t.begin>1?`${i("RESUME")}${t.begin}.<br/>`:""}${i("WAITING")}`,showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,timer:3e3}).then(n=>{n.value||n.dismiss===Swal.DismissReason.timer?$(t).then(()=>l("Page loaded")):(St(e,t.begin),l(n.dismiss))})}async function Ti([e,t]){l(`Found Pages: ${t.pages} in ${e.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=R()??t.begin??1;const n=document.createElement("style");switch(n.appendChild(document.createTextNode(ze)),document.body.appendChild(n),unsafeWindow.MOV=(o,r)=>{o!==void 0&&(t.begin=o),r!==void 0&&(t.pages=r),$(t).then(()=>l("Page loaded"))},e.start??a()?.loadMode){case"never":St(e,t.begin);break;case"always":$(t).then(()=>l("Page loaded"));break;case"wait":default:Li(e,t);break}}async function _i(e){if(l(`Starting ${oe.script.name} ${oe.script.version} on ${A()} ${mn()} with ${un()}`),Oi())return;l(e.length,"Known Manga Sites:",e);const t=e.filter(o=>o.url.test(window.location.href));l(t.length,"Found sites:",t);const n=t.map(async o=>(l(`Testing site: ${o.name}`),new Promise((r,s)=>{Promise.all([bi(o),hi(o),pi(o),wi(o),fi(o)]).then(async()=>o.run()).then(c=>c.pages>0?r([o,c]):s(new Error(`${o.name} found ${c.pages} pages`)))})));Promise.race(n.map((o,r)=>o.then(()=>r))).then(o=>{n.forEach((r,s)=>{s!==o&&l(`Failed/Skipped: ${t[s].name}`)}),n[o].then(r=>{Ti(r)})})}_i(tn).catch(l)})();
