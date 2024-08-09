// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewerAdult.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewerAdult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: BestPornComix, DoujinMoeNM, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, Fakku.cc, FSIComics, GNTAI.net, HBrowser, Hentai2Read, HentaiEra, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, hitomi, Imhentai, KingComix, Chochox, Comics18, Koharu, Luscious, MultPorn, MyHentaiGallery, nHentai.net, nHentai.xxx, lhentai, 9Hentai, OmegaScans, PornComixOnline, Pururin, Simply-Hentai, TMOHentai, 3Hentai, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2024.08.06
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/9824/9824312.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @noframes      on
// @connect       *
// @require       https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.7/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/1.0.37/ua-parser.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(spy.)?fakku.cc/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hbrowse.com\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?(koharu).to/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?9hentai.(ru|to|com)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?(omegascans).(org)\/.+/
// @include       /https?:\/\/(www\.)?porncomixone.net\/comic\/.+/
// @include       /https?:\/\/(www\.)?pururin.to\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/paginated\/\d+/
// @include       /https?:\/\/(www\.)?3hentai.net\/d\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/.+\/(porncomic|read-scan)\/.+\/.+/
// ==/UserScript==
!function(){"use strict";const e={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:["English"],category:"hentai",timer:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map((e=>e.getAttribute("href")))}}},n={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:["English"],category:"hentai",waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map((e=>e.getAttribute("data-file")))}}};function t(e){return null==e||void 0===e||"string"==typeof e&&""===e||Array.isArray(e)&&0===e.length||"object"==typeof e&&0===Object.keys(e).length}function a(e){const n=e=>{if(!Array.isArray(e)){return!Object.keys(e).some((n=>!a(e[n])))&&n(Object.keys(e))}return!e.some((e=>e instanceof Promise||!a(e)))};return!e||0===e||t(e)||"object"==typeof e&&n(e)}function o(e,n,t=document.body){return new Promise((a=>{if(t.querySelector(e)?.getAttribute(n))return void a(t.querySelector(e)?.getAttribute(n)??"");const o=new MutationObserver((()=>{t.querySelector(e)?.getAttribute(n)&&(a(t.querySelector(e)?.getAttribute(n)??""),o.disconnect())}));o.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[n]})}))}function i(e=1e3,n=!0){return new Promise((t=>{setTimeout((()=>t(n)),e)}))}async function r(e){const n=t=>{const a=e();a?t(a):setTimeout((()=>{n(t)}),500)};return new Promise(n)}async function l(e,n=1e3){return(await Promise.all([e,i(n)]))[0]}const s={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:["English"],category:"hentai",async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length),n=e?.length??parseInt(document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0)??"",10);return{title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map((e=>e?.textContent?.trim())).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:n,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){if(!unsafeWindow.link_images?.length){const e=document.createElement("div");e.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(e);const n=document.querySelector(".page-prev");for(;"1"!==document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0);)n?.dispatchEvent(new Event("click"));const t=document.querySelector(".page-next"),a=document.querySelector(".p-picture"),i=[];for(let e=1;e<=this.pages;e+=1)i[e-1]=await l(o(".photo img","src",a??document.body),100),a?.querySelector("img")?.removeAttribute("src"),t?.dispatchEvent(new Event("click"));this.listImages=i}}}}},c={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:["English"],obs:"May get your IP Banned, use with moderation",category:"hentai",async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),n=parseInt(document.querySelector(".ptt td:nth-last-of-type(2) a")?.textContent??"0",10)||Math.ceil(e/40),t=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),a=Array(n).fill(0).map((async(e,n)=>fetch(`${t}?p=${n}`).then((async e=>e.text())).then((e=>(new DOMParser).parseFromString(e,"text/html"))))),o=(await Promise.all(a)).flatMap((e=>[...e.querySelectorAll(".gdtm a, .gdtl a")].map((e=>e.getAttribute("href")))));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:t,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:o,img:"#img",lazy:!0,async reload(e){const n=`${o[e-1]}`,t=await fetch(n).then((e=>e.text())).then((e=>/nl\('([\d-]+)'\)/.exec(e)?.[1])),a=`${n}${n.indexOf("?")?"&":"?"}nl=${t}`;return fetch(a).then((e=>e.text())).then((e=>(new DOMParser).parseFromString(e,"text/html").querySelector(this.img)?.getAttribute("src")))}}}},d={name:"Fakku.cc",url:/https?:\/\/(spy.)?fakku.cc/,homepage:"https://spy.fakku.cc/",language:["English"],category:"hentai",waitEle:"div div + img[alt^=Page]",async run(){const e=await fetch(`${window.location.href}/__data.json?x-sveltekit-invalidated=011`).then((async e=>e.text())),n=/const data = ([^;]+);/.exec(e)?.[0],t=n?.match(/hash:"(\w+)"/)?.[1]??document.querySelector("div div + img[alt^=Page]")?.getAttribute("src")?.match(/image\/(.+)\//)?.[1],a=/const data = ([^;]+);/.exec(e)?.[0]?.match(/images:\[([^\]]+)\]/)?.[1]?.match(/filename:"[\w.]+"/g)?.map((e=>e.replace('filename:"',"").replace('"',"")));return{title:document.querySelector("title")?.textContent?.trim().replace(/Page \d+ • /,""),series:window.location.href.replace(/read\/.+/,""),pages:a?.length,prev:"#",next:"#",listImages:a?.map((e=>`https://cdn.fakku.cc/image/${t}/${e}`))}}},m={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:["English"],category:"hentai",run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),series:"",pages:e.length,prev:"#",next:"#",listImages:e.map((e=>e.getAttribute("data-large-file")))}}},u={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:["Spanish"],category:"hentai",run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g);return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},g={name:"HBrowser",url:/https?:\/\/(www\.)?hbrowse.com\/.+/,homepage:"https://www.hbrowse.com/",language:["English"],category:"hentai",run(){const e=window.location.href+(window.location.href.endsWith("/")?"":"/"),n=parseInt(document.querySelector("#jsPageList a:last-child")?.textContent??"",10),t=[...document.querySelectorAll("#chapters + table a.listLink")],a=t.findIndex((e=>window.location.href.endsWith(e.getAttribute("href")??"undefined")));return{title:document.querySelector(".listTable td.listLong")?.textContent?.trim(),series:/.+\/\d+\//.exec(window.location.href)?.at(0),pages:n,prev:t.at(a-1)?.getAttribute("href"),next:t.at(a+1)?.getAttribute("href"),listPages:Array(n).fill(0).map(((n,t)=>e+String(`0000${t+1}`).slice(-5))),img:"td.pageImage a img"}}},p={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:["English"],category:"hentai",run:()=>({title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map((e=>`https://static.hentaicdn.com/hentai${e}`))})},h={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:["English"],category:"hentai",run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map(((e,n)=>window.location.href.replace(/\/\d*\/?$/,`/${n+1}`))),img:"#gimg",lazyAttr:"data-src"}}},w={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:["English"],category:"hentai",waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded"),run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),n=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map(((e,t)=>n+(t+1)+function(e){const n=unsafeWindow.g_th[e][0];return"p"===n?".png":"b"===n?".bmp":"g"===n?".gif":".jpg"}(t+1)))}}},b={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:["English"],category:"hentai",waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map((e=>e.getAttribute("data-src")??e.getAttribute("src")))}}},f={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:["English"],category:"hentai",waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map((n=>e+n))}}},v={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:["English"],category:"hentai",run(){const e=unsafeWindow.pageData?.map((e=>e.image))??unsafeWindow.images?.map((e=>e.url));return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},y={name:"hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:["English"],category:"hentai",waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run:()=>({title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map((e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp",void 0,"a")))})};const E={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:["English"],category:"hentai",waitVar:"g_th",run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),n=document.querySelector("#image_dir")?.getAttribute("value"),t=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),a=parseInt(document.querySelector("#u_id")?.getAttribute("value")??"",10),o=unsafeWindow.random_server??`${function(e){const n=[{min:0,max:274825,name:"m1"},{min:274826,max:403818,name:"m2"},{min:403819,max:527143,name:"m3"},{min:527144,max:632481,name:"m4"},{min:632482,max:816010,name:"m5"},{min:816011,max:970098,name:"m6"},{min:970099,max:1121113,name:"m7"},{min:1121114,max:1259410,name:"m8"},{min:1259411,max:1/0,name:"m9"}];return n.find((n=>e>=n.min&&e<=n.max))?.name}(a)}.imhentai.xxx`;return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:t,prev:"#",next:"#",listImages:Array(t).fill(0).map(((t,a)=>`//${o}/${n}/${e}/${a+1}${function(e){const n=unsafeWindow.g_th[e][0];return"p"===n?".png":"b"===n?".bmp":"g"===n?".gif":".jpg"}(a+1)}`))}}},k={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:["English","Spanish"],category:"hentai",run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map((e=>e.getAttribute("data-src")??e.getAttribute("data-full-url")??e.getAttribute("data-lazy-src")??e.getAttribute("src")))}}},x={name:"Koharu",url:/https?:\/\/(www\.)?(koharu).to/,homepage:"https://koharu.to/",language:["English"],category:"hentai",lazy:!1,waitEle:"nav select option",async run(){const e={method:"GET",headers:{Accept:"*/*",Referer:`${window.location.host}/`,Origin:window.location.host}},n=window.location.pathname.split("/"),t=`${n[2]}/${n[3]}`,a=`https://api.koharu.to/books/detail/${t}`,o=await fetch(a,e).then((async e=>e.json())),i=Object.keys(o.data).map(Number).sort(((e,n)=>n-e))[0],r=`https://api.koharu.to/books/data/${t}/${o.data[i].id}/${o.data[i].public_key}?v=${o.updated_at??o.created_at}&w=${i}`,l=await fetch(r,e).then((async e=>e.json()));return{title:o.title,series:`/g/${t}/`,pages:l.entries.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:l.entries.map((e=>`${l.base}/${e.path}`))}}},M={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:["English"],category:"hentai",waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),n=Math.ceil(e/50),t=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),a=Array(n).fill(0).map((async(e,n)=>{const a=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${t}"}],"display":"position","items_per_page":50,"page":${n+1}}}&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20`;return GM.xmlHttpRequest({method:"GET",url:a}).then((e=>JSON.parse(e.responseText)))})),o=(await Promise.all(a)).flatMap((e=>e.data.picture.list.items.map((e=>e.url_to_original))));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:o}}},S=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function O(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map((e=>[...e.attributes].filter((e=>/.*(src|url).*/i.test(e.name)&&!/^.*(blank|lazy|load).*$/.test(e.value))).find((e=>S.test(e.value)))?.value??e?.getAttribute("src")))}const A={...{name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/"],language:["English"],obs:"Any Site that uses Madara Wordpress Plugin",category:"manga",waitFunc:()=>{const e=O();return e.length>0&&e.every((e=>e&&S.test(e)))},run(){const e=O();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:"hentai"},C={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:["English"],category:"hentai",async run(){const e=document.head.textContent?.match(/"configUrl":"(.+?)",/)?.at(1)?.replaceAll("\\","")??"",n=await fetch(e).then((async e=>e.text())).then((e=>(new DOMParser).parseFromString(e,"text/xml"))),t=[...n.querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map((e=>e.getAttribute("imageURL")))}}},I={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:["English"],category:"hentai",run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),n=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:n,prev:"#",next:"#",listPages:Array(n).fill(0).map(((e,n)=>window.location.href.replace(/\/\d+$/,`/${n+1}`))),img:".gallery-slide img"}}},L={name:["nHentai.net","nHentai.xxx","lhentai"],url:/https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,homepage:["https://nhentai.net/","https://nhentai.xxx/","https://lhentai.com/"],language:["English"],category:"hentai",run(){function e(e){return"g"===e?"gif":"b"===e?"bmp":"p"===e?"png":"jpg"}const n=parseInt(document.querySelector(".num-pages")?.textContent??"",10),t=document.querySelector("#image-container img")?.getAttribute("src")?.replace(/\d+.\w\w\w$/,""),a=unsafeWindow.images_ext?.map(e)??unsafeWindow._gallery?.images?.pages?.map((n=>e(n.t)))??Array(n).fill("jpg");return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:n,prev:"#",next:"#",listImages:Array(n).fill(0).map(((e,n)=>`${t}${n+1}.${a[n]}`))}}},T={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(ru|to|com)\/g\/.+\/.+/,homepage:"https://9hentai.to",language:["English"],category:"hentai",waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},t=await fetch("/api/getBookByID",n).then((async e=>e.json()));return{title:t.results.title,series:`/g/${t.results.id}/`,pages:t.results.total_page,prev:"#",next:"#",listImages:Array(t.results.total_page).fill(0).map(((e,n)=>`${t.results.image_server+t.results.id}/${n+1}.jpg`))}}},R={...{name:"YugenMangas",url:/https?:\/\/(www\.)?(yugenmangas).(com|net|lat)\/series\/.+/,homepage:"https://yugenmangas.lat/",language:["Spanish"],category:"manga",async run(){const e=[...document.querySelectorAll("p.flex > img")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.justify-between:nth-child(2) > a:nth-child(2)")?.getAttribute("href"),pages:e.length,prev:document.querySelector("div.justify-between:nth-child(2) > a:nth-child(1)")?.getAttribute("href"),next:document.querySelector("div.justify-between:nth-child(2) > a:nth-child(3)")?.getAttribute("href"),listImages:e.map((e=>e.classList.contains("lazy")?e.getAttribute("data-src"):e.getAttribute("src")))}}},name:["OmegaScans"],url:/https?:\/\/(www\.)?(omegascans).(org)\/.+/,homepage:["https://omegascans.org/"],language:["English"],category:"hentai"},D={name:"PornComixOnline",url:/https?:\/\/(www\.)?porncomixone.net\/comic\/.+/,homepage:"https://www.porncomixone.net",language:["English"],category:"hentai",run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector(".post-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map((e=>e.getAttribute("href")))}}},B={name:"Pururin",url:/https?:\/\/(www\.)?pururin.to\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.to/",language:["English"],category:"hentai",waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",n=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:n.length,prev:"#",next:"#",listImages:n.map(((n,t)=>e.replace(/\/\d+\./,`/${t+1}.`)))}}},N={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:["English"],category:"hentai",waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map((e=>e.sizes.full));return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},V={name:"3Hentai",url:/https?:\/\/(www\.)?3hentai.net\/d\/.+\/.+/,homepage:"https://3hentai.net/",language:["English"],category:"hentai",waitVar:"readerPages",run:()=>({title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Object.keys(unsafeWindow.readerPages.pages).map((e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f)))})},$={name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/paginated\/\d+/,homepage:"https://tmohentai.com/",language:["Spanish"],category:"hentai",run(){const e=parseInt(document.querySelector("#select-page option:last-child")?.getAttribute("value")??"",10);return{title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map(((e,n)=>window.location.href.replace(/\/\d*$/,`/${n+1}`))),img:".content-image",lazyAttr:"data-original"}}},F={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:["English"],category:"hentai",async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),n=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",t=`https://www.tsumino.com/Read/Load?q=${e}`,a=await fetch(t).then((async e=>e.json()));return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:a.reader_start_url,pages:a.reader_page_total,prev:"#",next:"#",listImages:Array(a.reader_page_total).fill(0).map(((e,t)=>n.replace("[PAGE]",`${t+1}`)))}}},z={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:["Spanish"],category:"hentai",waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map((e=>e.getAttribute("data-lazy-src")??e.getAttribute("data-src")??e.getAttribute("src")))}}},G={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:["English","Raw","Chinese"],category:"hentai",run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map((e=>window.location.pathname.replace(/\d+/,e.value))),img:"#picarea"}}},P=[e,n,s,c,d,m,u,g,p,h,w,b,f,v,y,E,k,x,M,C,I,L,T,R,D,B,N,$,V,F,z,G,{name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:["English"],category:"hentai",run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map((e=>e.getAttribute("data-src")??e.getAttribute("data-srce")??e.closest("a")?.getAttribute("href")??e.getAttribute("src"))))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},{name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:["English"],category:"hentai",run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map((e=>e.getAttribute("href")))}}},A],Z=".range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px rgba(33,150,243,.5)}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translate(0,-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%,0)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}",H=(e,...n)=>0===n.length?e[0]:String.raw({raw:e},...n),W=H,U=H;function q(...e){return console.log("MangaOnlineViewer: ",...e),e}const j=e=>n=>q(e,n)[1];const Q="undefined"!=typeof GM_info?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function Y(e,n=null){const t=function(e,n=null){return"undefined"!=typeof GM_getValue?GM_getValue(e,n):(q("Fake Getting: ",e," = ",n),n)}(e,n);return"string"==typeof t?JSON.parse(t):t}function X(e){return function(e,n){try{return GM_setValue(e,n),n.toString()}catch(t){return q("Fake Setting: ",e," = ",n),String(n)}}("settings",e)}const K=new UAParser,J=()=>{const e=K.getDevice().type;return"mobile"!==e&&"tablet"!==e?window.matchMedia("screen and (max-width: 600px)").matches?"mobile":window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop":e},ee=(e,n)=>{const t=(e,n)=>_.transform(e,((e,a,o)=>{_.isEqual(a,n[o])||(_.isArray(a)?e[o]=_.difference(a,n[o]):_.isObject(a)&&_.isObject(n[o])?e[o]=t(a,n[o]):e[o]=a)}));return t(e,n)},ne=[{ID:"en_US",NAME:"English (US)",STARTING:"Starting<br>Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_HUE:"Theme Primary Color Hue",THEME_SHADE:"Theme Primary Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed Pages/Second",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Left to Right",VIEW_MODE_RIGHT:"Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",ENABLE_COMMENTS:"Capture Comments (When available)",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from:<h4>Page ##num##</h4>(Only <i>ONCE</i> per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:"\n    <h3>Supported Keys</h3>\n    Allowed modifiers: shift, option, alt, ctrl, control, command. </br>\n    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>\n    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> \n  ",ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Restore",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br> It may hurt some servers or get your IP marked as DDoS attacker.<br> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",LIST_EMPTY:"List Empty",DISPLAY_COMMENTS:"Display Comments",COMMENTS:"Comments Section",SCROLL_START:"Toggle Auto Scroll",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End"},{ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando<br>Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_HUE:"Matiz del color primario",THEME_SHADE:"Saturación del color primario",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga página/segundo",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Izquierda a derecha",VIEW_MODE_RIGHT:"Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",ENABLE_COMMENTS:"Capturar comentarios (cuando esté disponible)",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la <h4>página ##num##</h4>(Sólo <i>UNA VEZ</i> por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:"\n    <h3>Teclas soportadas</h3>\n    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>\n    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br>\n    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> \n  ",ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazar abajo",CLOSE:"Cerrar",LIST_EMPTY:"Lista vacía",DISPLAY_COMMENTS:"Mostrar comentarios",COMMENTS:"Sección de comentarios",SCROLL_START:"Alternar desplazamiento automático",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin"},{ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando<br>Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_HUE:"Coloração primaria",THEME_SHADE:"Saturação de Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento Paginas/Segundo",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Esquerda para Direita",VIEW_MODE_RIGHT:"Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",ENABLE_COMMENTS:"Capturar comentários (quando disponível)",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da <h4>Pagina ##num##</h4>(Apenas <i>UMA VEZ</i> por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:"\n    <h3>Teclas Suportadas</h3>\n    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>\n    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>\n    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> \n  ",ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",LIST_EMPTY:"Lista Vazia",DISPLAY_COMMENTS:"Mostar Comentarios",COMMENTS:"Seção de comentários",SCROLL_START:"Ativar Rolagem Automatica",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin"},{ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动<br>Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_HUE:"主题色调",THEME_SHADE:"主题阴影",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度页数/秒",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"从左到右",VIEW_MODE_RIGHT:"从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",ENABLE_COMMENTS:"捕获评论（如果可用）",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从:<h4>页码 ##num##</h4>(<i>仅一次</i> 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:"\n    <h3>支持的密钥</h3>\n    允许的修饰符: shift, option, alt, ctrl, control, command. </br>\n    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>\n    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd> \n  ",ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",LIST_EMPTY:"没有收藏书签",DISPLAY_COMMENTS:"显示注释",COMMENTS:"评论部分",SCROLL_START:"切换自动滚动",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾"}],te={locale:"en_US",theme:"darkblue",customTheme:"#263e3a",themeShade:600,colorScheme:"dark",fitWidthIfOversize:!0,showThumbnails:!0,enableComments:!0,downloadZip:!1,verticalSeparator:!1,throttlePageLoad:1e3,zoomMode:"percent",defaultZoom:100,zoomStep:25,minZoom:30,loadMode:"wait",viewMode:"WebComic",bookmarks:[],lazyLoadImages:!1,lazyStart:50,hidePageControls:!1,header:"hover",maxReload:5,scrollHeight:20,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],SCROLL_START:["space"]}},ae=()=>navigator?.userAgentData?.mobile||"mobile"===J()||"tablet"===J()?_.defaultsDeep({lazyLoadImages:!0,fitWidthIfOversize:!0,showThumbnails:!1,viewMode:"WebComic",header:"click"},te):te;let oe=_.defaultsDeep(function(e){return Y("settings",e)}(ae()),ae());function ie(){return oe}function re(e){const n=ne.find((e=>e.ID===oe.locale));return n?.[e]?n[e]:ne?.at(1)?.[e]?ne[1][e]:"##MISSING_STRING##"}function le(e){q(JSON.stringify(e)),oe={...oe,...e},X(ee(oe,ae()))}function se(){("undefined"!=typeof GM_listValues?GM_listValues():[]).forEach((e=>{var n;n=e,"undefined"!=typeof GM_deleteValue?GM_deleteValue(n):q("Removing: ",n)})),le(ae())}function ce(e=window.location.href){return oe.bookmarks.find((n=>n.url===e))?.page}const de=oe.bookmarks.filter((e=>Date.now()-new Date(e.date).valueOf()<31104e6));oe.bookmarks.length!==de.length&&le({bookmarks:de});const me={dark:{name:"dark",50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113"},gray:{name:"gray",50:"#f8f9fa",100:"#f1f3f5",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#868e96",700:"#495057",800:"#343a40",900:"#212529"},red:{name:"red",50:"#fff5f5",100:"#ffe3e3",200:"#ffc9c9",300:"#ffa8a8",400:"#ff8787",500:"#ff6b6b",600:"#fa5252",700:"#f03e3e",800:"#e03131",900:"#c92a2a"},pink:{name:"pink",50:"#fff0f6",100:"#ffdeeb",200:"#fcc2d7",300:"#faa2c1",400:"#f783ac",500:"#f06595",600:"#e64980",700:"#d6336c",800:"#c2255c",900:"#a61e4d"},grape:{name:"grape",50:"#f8f0fc",100:"#f3d9fa",200:"#eebefa",300:"#e599f7",400:"#da77f2",500:"#cc5de8",600:"#be4bdb",700:"#ae3ec9",800:"#9c36b5",900:"#862e9c"},violet:{name:"violet",50:"#f3f0ff",100:"#e5dbff",200:"#d0bfff",300:"#b197fc",400:"#9775fa",500:"#845ef7",600:"#7950f2",700:"#7048e8",800:"#6741d9",900:"#5f3dc4"},indigo:{name:"purple",50:"#edf2ff",100:"#dbe4ff",200:"#bac8ff",300:"#91a7ff",400:"#748ffc",500:"#5c7cfa",600:"#4c6ef5",700:"#4263eb",800:"#3b5bdb",900:"#364fc7"},blue:{name:"blue",50:"#e7f5ff",100:"#d0ebff",200:"#a5d8ff",300:"#74c0fc",400:"#4dabf7",500:"#339af0",600:"#228be6",700:"#1c7ed6",800:"#1971c2",900:"#1864ab"},cyan:{name:"cyan",50:"#e3fafc",100:"#c5f6fa",200:"#99e9f2",300:"#66d9e8",400:"#3bc9db",500:"#22b8cf",600:"#15aabf",700:"#1098ad",800:"#0c8599",900:"#0b7285"},teal:{name:"teal",50:"#e6fcf5",100:"#c3fae8",200:"#96f2d7",300:"#63e6be",400:"#38d9a9",500:"#20c997",600:"#12b886",700:"#0ca678",800:"#099268",900:"#087f5b"},green:{name:"green",50:"#ebfbee",100:"#d3f9d8",200:"#b2f2bb",300:"#8ce99a",400:"#69db7c",500:"#51cf66",600:"#40c057",700:"#37b24d",800:"#2f9e44",900:"#2b8a3e"},lime:{name:"lime",50:"#f4fce3",100:"#e9fac8",200:"#d8f5a2",300:"#c0eb75",400:"#a9e34b",500:"#94d82d",600:"#82c91e",700:"#74b816",800:"#66a80f",900:"#5c940d"},yellow:{name:"yellow",50:"#fff9db",100:"#fff3bf",200:"#ffec99",300:"#ffe066",400:"#ffd43b",500:"#fcc419",600:"#fab005",700:"#f59f00",800:"#f08c00",900:"#e67700"},orange:{name:"orange",50:"#fff4e6",100:"#ffe8cc",200:"#ffd8a8",300:"#ffc078",400:"#ffa94d",500:"#ff922b",600:"#fd7e14",700:"#f76707",800:"#e8590c",900:"#d9480f"},darkblue:{name:"darkblue",50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"}},ue=10,ge=95;function pe(e){const n=tinycolor(e);return function(e,n){return e.l=n,tinycolor(e).toHexString()}(n.toHsl(),n.isDark()?ge:ue)}function he(e){const n=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}const we=e=>e%100==0?15:e%50==0?10:e%25==0?5:2.5;function be(e,n,t="#0F1C3F",a="#ECEAD9"){const o=function(e,n,t,a){let o="";for(let n=0;n<=e;n+=5)o+=W` <line
        x1="${n}"
        y1="0"
        x2="${n}"
        y2="${we(n)}"
      />`,0!==n&&n%50==0&&(o+=W` <text
          x="${n}"
          y="25"
          text-anchor="middle"
          font-size="${we(n)}px"
        >
          ${n}
        </text>`);for(let e=0;e<=n;e+=5)o+=W` <line
        x1="0"
        y1="${e}"
        x2="${we(e)}"
        y2="${e}"
      />`,0!==e&&e%50==0&&(o+=W` <text
          x="25"
          y="${e}"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="${we(e)}px"
        >
          ${e}
        </text>`);return W` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${e}"
      height="${n}"
      viewBox="0 0 ${e} ${n}"
    >
      <rect width="${e}" height="${n}" fill="${t}" />
      <text
        fill="${a}"
        font-family="Verdana, Arial, Helvetica, sans-serif"
        font-size="30"
        dy="10.5"
        font-weight="bold"
        x="50%"
        y="50%"
        text-anchor="middle"
      >
        ${e}x${n}
      </text>
      <g
        stroke-width="1"
        font-family="Verdana, Arial, Helvetica, sans-serif"
        font-size="10px"
        font-weight="100"
        fill="${a}"
        stroke="${a}"
      >
        ${o}
      </g>
    </svg>`}(e,n,t,a);return he(o)}const fe=Object.values(me).map((e=>e[900])),ve=[400,600,900,1200,1400,1600,1970],ye=[600,800,1e3,1200,1400,2e3,2600];function Ee(){const e=Math.floor(Math.random()*ve.length),n=Math.floor(Math.random()*ye.length),t=Math.floor(Math.random()*fe.length);return be(ve[e],ye[n],fe[t])}const ke='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />\n  <path d="M18 14v7" />\n  <path d="M18 3v7" />\n  <path d="M15 18l3 3l3 -3" />\n  <path d="M15 6l3 -3l3 3" />\n</svg>\n\n\n',xe='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />\n  <path d="M10 18h-7" />\n  <path d="M21 18h-7" />\n  <path d="M6 15l-3 3l3 3" />\n  <path d="M18 15l3 3l-3 3" />\n</svg>\n\n\n',Me='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />\n</svg>\n\n\n',Se='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897" />\n  <path d="M3 3l18 18" />\n</svg>\n\n\n',Oe='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M5 12l5 5l10 -10" />\n</svg>\n\n\n',Ae='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />\n</svg>\n\n\n',Ce='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />\n  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n</svg>\n\n\n',Ie='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15 8h.01" />\n  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\n  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />\n</svg>\n\n\n',Le='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />\n  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />\n</svg>\n\n\n',Te='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M18 6l-12 12" />\n  <path d="M6 6l12 12" />\n</svg>\n\n\n',_e=U`
    :root,
    .dark,
    .dark .default,
    [data-theme="dark"] {
      --theme-body-background: ${me.dark[600]};
      --theme-body-text-color: ${me.dark[50]};
      --theme-text-color: ${me.dark[50]};
      --theme-primary-color: ${me.dark[700]};
      --theme-primary-text-color: ${me.dark[50]};
      --theme-background-color: ${me.dark[600]};
      --theme-hightlight-color: ${me.dark[500]};
      --theme-border-color: ${me.dark[400]};
    }

    .light,
    .light .default,
    [data-theme="light"] {
      --theme-body-background: ${me.gray[50]};
      --theme-body-text-color: ${me.gray[900]};
      --theme-text-color: ${me.gray[900]};
      --theme-primary-color: ${me.gray[300]};
      --theme-primary-text-color: ${me.gray[900]};
      --theme-background-color: ${me.gray[50]};
      --theme-hightlight-color: ${me.gray[500]};
      --theme-border-color: ${me.gray[100]};
    }

    #MangaOnlineViewer .PageContent .PageImg[src=""],
    #MangaOnlineViewer .PageContent .PageImg:not([src]) {
      background-image: url("${he(Ie)}");
    }

    #MangaOnlineViewer .PageContent .PageImg.imgBroken {
      background-image: url("${he('<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15 8h.01" />\n  <path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153" />\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\n  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />\n  <path d="M3 3l18 18" />\n</svg>\n\n\n')}");
    }

    #MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],
    #MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
      background-image: url("${he(Ie)}");
    }

    #MangaOnlineViewer .ThemeRadio.custom {
      /*background-image: url("${he(Ce)}");*/
    }

    ${"/*  Simple Normalizer */\nhtml {\n    font-size: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 20px;\n    color: var(--theme-body-text-color);\n    background-color: var(--theme-body-background);\n    padding: 0;\n}\n\na,\na:link,\na:visited,\na:active,\na:focus {\n    color: var(--theme-body-text-color);\n    text-decoration: none;\n}\n\nimg {\n    height: auto;\n    vertical-align: middle;\n    border: 0 none;\n}\n"}
    ${":root {\n    --theme-body-background: #25262b;\n    --theme-body-text-color: #c1c2c5;\n    --theme-text-color: #c1c2c5;\n    --theme-primary-color: #1a1b1e;\n    --theme-primary-text-color: #c1c2c5;\n    --theme-background-color: #25262b;\n    --theme-hightlight-color: #2c2e33;\n    --theme-border-color: #373a40;\n}\n\n#MangaOnlineViewer {\n    text-decoration: none;\n    color: var(--theme-body-text-color);\n    background-color: var(--theme-body-background);\n}\n\n#MangaOnlineViewer #Chapter {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    min-width: 225px;\n}\n\n#MangaOnlineViewer #Chapter.Vertical:has(+ #Navigation:not(.disabled)),\n#MangaOnlineViewer #Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\n    padding-bottom: 31px;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .PageContent {\n    margin-bottom: 8px;\n    margin-top: 8px;\n}\n\n#MangaOnlineViewer .closeButton {\n    width: fit-content;\n    height: fit-content;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n#MangaOnlineViewer .overlay {\n    position: fixed;\n    display: none;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 950;\n    cursor: pointer;\n}\n\n#MangaOnlineViewer .overlay.visible {\n    display: block;\n}\n\n#MangaOnlineViewer select {\n    height: 20px;\n    padding: 0;\n    margin-bottom: 5px;\n}\n\n#MangaOnlineViewer .ControlButton,\n#MangaOnlineViewer .simpleButton {\n    cursor: pointer;\n    border-radius: 5px;\n    border-width: 1px;\n    padding: 2px;\n    min-height: 32px;\n    color: var(--theme-primary-text-color);\n    background-color: var(--theme-primary-color);\n    border-color: var(--theme-border-color);\n}\n\n#MangaOnlineViewer .ControlButton:active,\n#MangaOnlineViewer .ControlButton:hover {\n    opacity: 0.8;\n}\n\n#MangaOnlineViewer .simpleButton {\n    font-size: initial;\n    min-width: 32px;\n}\n\n#MangaOnlineViewer .panel .simpleButton {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n}\n\n#MangaOnlineViewer .panel {\n    padding: 5px;\n    position: inherit;\n    border-radius: 5px;\n    background-color: var(--theme-background-color);\n}\n\n#MangaOnlineViewer :not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\n    max-width: 100%;\n}\n\n#MangaOnlineViewer .ControlButton.hidden,\n#MangaOnlineViewer.light #ColorScheme > .icon-tabler-sun,\n#MangaOnlineViewer:not(.light) #ColorScheme > .icon-tabler-moon,\n#MangaOnlineViewer .light + #CommentsColorScheme > .icon-tabler-sun,\n#MangaOnlineViewer .dark + #CommentsColorScheme > .icon-tabler-moon,\n#MangaOnlineViewer .ChapterControl #download.loading > .icon-tabler-file-download,\n#MangaOnlineViewer .ChapterControl #download:not(.loading) > .icon-tabler-loader-2,\n#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide > .icon-tabler-eye-off,\n#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide > .icon-tabler-eye,\n#MangaOnlineViewer.bookmarked .Bookmark > .icon-tabler-bookmark,\n#MangaOnlineViewer:not(.bookmarked) .Bookmark > .icon-tabler-bookmark-off,\n#MangaOnlineViewer #AutoScroll.running > .icon-tabler-player-play,\n#MangaOnlineViewer #AutoScroll:not(.running) > .icon-tabler-player-pause {\n    display: none;\n}\n\n#MangaOnlineViewer.hideControls .PageFunctions {\n    visibility: hidden;\n}\n"}
  ${"#MangaOnlineViewer #gotoPage {\n    min-width: 35px;\n}\n\n#MangaOnlineViewer #Header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-flow: row nowrap;\n    transition: transform 0.3s ease-in;\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: inherit;\n    z-index: 900;\n}\n\n#MangaOnlineViewer #Header.click {\n    padding-left: 40px;\n}\n\n@keyframes headroom {\n    from {\n        transform: translateY(-100%);\n        position: sticky;\n        top: 0;\n    }\n    to {\n        transform: translateY(0%);\n        position: sticky;\n        top: 0;\n    }\n}\n\n#MangaOnlineViewer #Header:not(.visible, .headroom-top, .fixed, .simple) {\n    animation: headroom 0.3s ease-in reverse;\n    transform: translateY(-100%);\n    position: sticky;\n    top: 0;\n}\n\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL) {\n    position: fixed;\n    padding-left: 40px;\n    top: -100%;\n}\n\n#MangaOnlineViewer #Header.scroll.headroom-hide {\n    animation: none;\n    transform: translateY(-100%);\n    position: sticky;\n    top: 0;\n}\n\n#MangaOnlineViewer #Header.scroll.headroom-show,\n#MangaOnlineViewer #Header.headroom-end,\n#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL).visible,\n#MangaOnlineViewer #Header.visible {\n    animation: headroom 0.3s ease-in;\n    transform: translateY(0%);\n    position: sticky;\n    top: 0;\n}\n\n#MangaOnlineViewer #Header.headroom-top {\n    animation: none;\n}\n\n#MangaOnlineViewer #Header.fixed {\n    position: sticky;\n    animation: none;\n    top: 0;\n    transform: translateY(0%);\n}\n\n#MangaOnlineViewer #Header.simple {\n    position: static;\n    animation: none;\n    top: 0;\n    transform: translateY(0%);\n}\n\n#MangaOnlineViewer #menu {\n    position: fixed;\n    z-index: 1;\n    color: var(--theme-body-text-color);\n    height: 40px;\n    width: 40px;\n}\n\n#MangaOnlineViewer #menu .icon-tabler {\n    position: relative;\n    top: 4px;\n    left: 4px;\n    height: 32px;\n    width: 32px;\n    stroke-width: 1.25;\n}\n\n#MangaOnlineViewer #menu:not(.click, .hover),\n#MangaOnlineViewer #menu.hide {\n    display: none;\n}\n\n#MangaOnlineViewer #menu.click {\n    z-index: 901;\n}\n\n#MangaOnlineViewer #MangaTitle {\n    padding: 2px;\n    margin: 0;\n    font-size: 1.2rem;\n    font-weight: 400;\n}\n\n#MangaOnlineViewer #GlobalFunctions {\n    display: flex;\n    gap: 3px;\n    padding: 3px 3px 3px 0;\n    flex-wrap: wrap;\n    width: 300px;\n    z-index: 100;\n}\n\n#MangaOnlineViewer #GlobalFunctions span,\n#MangaOnlineViewer .ChapterControl span {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-evenly;\n}\n\n#MangaOnlineViewer .ChapterControl span {\n    flex-grow: 1;\n}\n\n#MangaOnlineViewer .ChapterControl span > * {\n    flex-basis: 50%;\n}\n\n#MangaOnlineViewer #ScrollControl .icon-tabler,\n#MangaOnlineViewer #GlobalFunctions .icon-tabler {\n    width: 25px;\n    height: 25px;\n}\n\n#MangaOnlineViewer #GlobalFunctions #ZoomSlider {\n    display: flex;\n    align-items: center;\n}\n\n#MangaOnlineViewer #GlobalFunctions #Zoom {\n    margin: 2px 5px;\n    width: 160px;\n}\n\n#MangaOnlineViewer #GlobalFunctions #ZoomVal {\n    width: 40px;\n    display: inline-block;\n    color: var(--theme-primary-text-color);\n    line-height: 20px;\n    text-align: center;\n    border-radius: 3px;\n    background: var(--theme-primary-color);\n    padding: 2px 5px;\n}\n\n#MangaOnlineViewer #ChapterNavigation {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: end;\n    padding: 5px;\n    max-width: 350px;\n}\n\n#MangaOnlineViewer #Counters {\n    padding-right: 5px;\n}\n\n#MangaOnlineViewer #ChapterControl {\n    display: flex;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton {\n    display: inline-flex;\n    margin: 2px;\n    justify-content: center;\n    align-items: center;\n    padding: 3px;\n    gap: 0.5em;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton .icon-tabler {\n    flex-shrink: 0;\n    align-self: center;\n    width: 1rem;\n    height: 1rem;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href='#'],\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href=''],\n#MangaOnlineViewer #ChapterControl .NavigationControlButton[href='undefined'] {\n    visibility: hidden;\n}\n\n#MangaOnlineViewer #ChapterControl #download.loading {\n    cursor: not-allowed;\n    pointer-events: none;\n    opacity: 0.6;\n}\n\n#MangaOnlineViewer #ChapterControl .NavigationControlButton.disabled {\n    pointer-events: none;\n    filter: grayscale(0.9);\n}\n\n#MangaOnlineViewer .ViewerTitle {\n    text-align: center;\n    min-height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 5px;\n    flex-basis: 60%;\n}\n"}
  ${".icon-tabler {\n    height: 1rem;\n    width: 1rem;\n    vertical-align: sub;\n}\n\n.icon-tabler-file-download > :nth-child(n + 4) {\n    /* 4, 5 */\n    color: gold;\n}\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\n    /* 3,4,5,6 */\n    color: yellow;\n}\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\n    /* 3,4,5,6 */\n    color: yellow;\n}\n.icon-tabler-zoom-in-area > :nth-child(2),\n.icon-tabler-zoom-in-area > :nth-child(3) {\n    color: lime;\n}\n.icon-tabler-zoom-out-area > :nth-child(2) {\n    color: red;\n}\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\n    color: #9966ff;\n}\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\n    color: #28ffbf;\n}\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\n    color: #28ffbf;\n}\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\n    color: #28ffbf;\n}\n.icon-tabler-spacing-vertical > :nth-child(4) {\n    color: fuchsia;\n}\n.icon-tabler-list-numbers > :nth-child(n + 5) {\n    color: #e48900;\n}\n.icon-tabler-bookmarks > :nth-child(n + 2) {\n    color: orange;\n}\n.icon-tabler-bookmark > * {\n    color: orange;\n}\n.icon-tabler-bookmark-off > * {\n    color: orange;\n}\n.icon-tabler-bookmark-off > :nth-child(3) {\n    color: red;\n}\n.icon-tabler-eye-off > :nth-child(4) {\n    color: red;\n}\n.icon-tabler-zoom-cancel > :nth-child(3),\n.icon-tabler-zoom-cancel > :nth-child(4) {\n    color: #9966ff;\n}\n.icon-tabler-zoom-in > :nth-child(3),\n.icon-tabler-zoom-in > :nth-child(4) {\n    color: lime;\n}\n.icon-tabler-zoom-out > :nth-child(3) {\n    color: red;\n}\n.icon-tabler-refresh > :nth-child(n + 2) {\n    color: cyan;\n}\n.icon-tabler-photo > * {\n    color: silver;\n}\n.icon-tabler-photo-off > * {\n    color: silver;\n}\n.icon-tabler-photo-off > :nth-child(5) {\n    color: orange;\n}\n.icon-tabler-message > :nth-child(2),\n.icon-tabler-message > :nth-child(3) {\n    color: greenyellow;\n}\n"}
  ${"#MangaOnlineViewer #KeybindingsPanel {\n    padding: 10px;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    transition: transform 0.3s ease-in-out;\n    transform: translateX(100%);\n    line-height: 1.5em;\n    z-index: 1000;\n    overflow-y: auto;\n    width: 360px;\n    max-width: 100vw;\n}\n\n#MangaOnlineViewer #KeybindingsPanel.visible {\n    transform: translateX(0);\n    display: block;\n}\n\n#MangaOnlineViewer #KeybindingsPanel #KeybindingsList {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 5px;\n}\n\n#MangaOnlineViewer #KeybindingsPanel .ControlButton {\n    margin-left: 3px;\n    justify-content: center;\n    align-items: center;\n    padding: 5px 10px;\n    gap: 0.5em;\n}\n\n#MangaOnlineViewer #KeybindingsPanel label {\n    display: ruby;\n}\n#MangaOnlineViewer #KeybindingsPanel input {\n    display: inline-block;\n    width: 100%;\n}\n\n#MangaOnlineViewer #KeybindingsPanel #HotKeysRules {\n    grid-column: span 2;\n}\n"}
  ${"#MangaOnlineViewer .MangaPage {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    line-height: 0;\n    min-height: 22px;\n    min-width: 100%;\n}\n\n#MangaOnlineViewer .PageContent {\n    text-align: center;\n    display: inline-block;\n    overflow-x: auto;\n    max-width: 100%;\n    transition: all 0.3s ease-in-out;\n    height: 100%;\n    overflow-y: hidden;\n}\n\n#MangaOnlineViewer .MangaPage.hide .PageContent {\n    height: 0;\n}\n\n#MangaOnlineViewer .PageContent .PageImg[src=''],\n#MangaOnlineViewer .PageContent .PageImg:not([src]) {\n    width: 40vw;\n    height: 80vh;\n    display: inline-block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 20%;\n    background-color: var(--theme-hightlight-color);\n}\n\n#MangaOnlineViewer .PageContent .PageImg.imgBroken {\n    width: 40vw;\n    height: 80vh;\n    display: inline-block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 20%;\n    background-color: var(--theme-hightlight-color);\n}\n\n#MangaOnlineViewer .PageFunctions {\n    font-family: monospace;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    gap: 3px;\n    position: absolute;\n    right: 0;\n}\n\n#MangaOnlineViewer .PageFunctions > .PageIndex {\n    background-color: var(--theme-primary-color);\n    color: var(--theme-primary-text-color);\n    min-width: 20px;\n    text-align: center;\n    display: inline-block;\n    padding: 3px 5px;\n    line-height: 1rem;\n    border-radius: 5px;\n}\n\n#MangaOnlineViewer .PageFunctions .ControlButton {\n    padding: 3px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    border-width: 0;\n    min-height: auto;\n    opacity: 0.5;\n}\n\n#MangaOnlineViewer .PageFunctions:hover .ControlButton {\n    opacity: 1;\n}\n\n#MangaOnlineViewer .PageFunctions .ControlButton:hover {\n    opacity: 0.9;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .separator {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    font-style: italic;\n}\n\n#MangaOnlineViewer #Chapter.Vertical .separator::before,\n#MangaOnlineViewer #Chapter.Vertical .separator::after {\n    content: '';\n    flex: 1;\n    border-bottom: 1px solid var(--theme-text-color);\n}\n\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::before {\n    margin-right: 0.25em;\n}\n\n#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::after {\n    margin-left: 0.25em;\n}\n\n#MangaOnlineViewer #Chapter:not(.separator) .separator,\n#MangaOnlineViewer #Chapter:not(.Vertical) .separator {\n    display: none;\n}\n"}
  ${"#MangaOnlineViewer #Chapter.FluidLTR,\n#MangaOnlineViewer #Chapter.FluidRTL {\n    display: flex;\n    overflow-x: auto;\n    min-width: auto;\n\n    .ZoomWidth {\n        display: none;\n    }\n\n    .PageImg {\n        min-width: unset;\n    }\n\n    .MangaPage {\n        width: initial;\n        min-width: fit-content;\n        position: relative;\n        max-height: 100%;\n    }\n\n    .MangaPage.DoublePage {\n        grid-column: span 2;\n    }\n}\n\n#MangaOnlineViewer #Chapter.FluidLTR {\n    flex-direction: row;\n\n    .MangaPage .PageFunctions {\n        right: auto;\n        left: 0;\n        direction: rtl;\n    }\n}\n\n#MangaOnlineViewer #Chapter.FluidRTL {\n    flex-direction: row-reverse;\n}\n"}
  ${"#MangaOnlineViewer #SettingsPanel {\n    color: var(--theme-text-color);\n    padding: 10px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 1000;\n    transition: transform 0.3s ease-in,\n    background-color 0.3s linear;\n    transform: translateX(-100%);\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n    overflow-y: auto;\n    max-width: 100vw;\n    width: 305px;\n}\n\n#MangaOnlineViewer #SettingsPanel.visible {\n    transform: translateX(0);\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabel {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {\n    display: none;\n}\n\n#MangaOnlineViewer #SettingsPanel input[type='range'] {\n    width: 100%;\n}\n\n#MangaOnlineViewer #SettingsPanel .RangeValue {\n    display: inline-block;\n    color: var(--theme-primary-text-color);\n    line-height: 20px;\n    text-align: center;\n    border-radius: 3px;\n    background: var(--theme-primary-color);\n    padding: 2px 5px;\n    margin-left: 8px;\n}\n\n#MangaOnlineViewer #SettingsPanel datalist {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    writing-mode: vertical-lr;\n    width: 100%;\n}\n\n#MangaOnlineViewer #SettingsPanel datalist option {\n    padding: 0;\n}\n\n#MangaOnlineViewer #ThemeSection {\n    border: 1px solid var(--theme-body-text-color);\n    border-radius: 10px;\n    padding: 10px;\n}\n\n#MangaOnlineViewer .ThemeRadio {\n    border: 1px solid var(--theme-text-color);\n    color: var(--theme-primary-text-color);\n    background-color: var(--theme-primary-color);\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    padding: 1px;\n    margin: 2px 5px;\n    position: relative;\n}\n\n#MangaOnlineViewer .ThemeRadio svg {\n    position: absolute;\n    top: 15%;\n    right: 15%;\n}\n\n#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {\n    display: inline;\n}\n\n#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {\n    display: none;\n}\n\n#MangaOnlineViewer #ThemeSelector {\n    width: 110px;\n}\n\n#MangaOnlineViewer #Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\n    display: none;\n}\n"}
  ${"#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],\n#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {\n    width: 100px;\n    height: 150px;\n    display: inline-block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 20%;\n}\n\n#MangaOnlineViewer #NavigationCounters {\n    margin: 5px;\n    width: 100%;\n    line-height: 1rem;\n}\n\n#MangaOnlineViewer #Navigation {\n    color: var(--theme-text-color);\n    background-color: var(--theme-hightlight-color);\n    bottom: -180px;\n    height: 185px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    padding-bottom: 20px;\n    position: fixed;\n    white-space: nowrap;\n    width: 100%;\n    text-align: center;\n    transition:\n        transform 0.3s ease-in,\n        background-color 0.3s linear;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    line-height: 0;\n}\n\n#MangaOnlineViewer #Navigation #Thumbnails {\n    overflow-x: auto;\n    overflow-y: hidden;\n    margin-right: 10px;\n}\n\n#MangaOnlineViewer #Navigation:hover {\n    transform: translateY(-180px);\n}\n\n#MangaOnlineViewer #Navigation.disabled {\n    display: none;\n}\n\n#MangaOnlineViewer #Navigation.visible {\n    transform: translateY(-180px);\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail {\n    display: inline-block;\n    height: 150px;\n    margin: 0 5px;\n    border: 1px solid var(--theme-primary-color);\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {\n    color: var(--theme-text-color);\n    background-color: var(--theme-hightlight-color);\n    display: block;\n    opacity: 0.8;\n    position: relative;\n    bottom: 25%;\n    width: 100%;\n    line-height: 1rem;\n}\n\n#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {\n    cursor: pointer;\n    display: inline-block;\n    max-height: 150px;\n    min-height: 150px;\n    min-width: 80px;\n    max-width: 160px;\n}\n"}
  ${"#MangaOnlineViewer #BookmarksPanel {\n    position: fixed;\n    top: 10%;\n    width: 50%;\n    left: 25%;\n    right: 25%;\n    text-align: center;\n    max-height: 70%;\n    transition: transform 0.3s ease-in-out;\n    transform: scaleY(0);\n    z-index: 1000;\n}\n\n#MangaOnlineViewer #BookmarksPanel.visible {\n    transform: scaleY(1);\n    display: block;\n}\n\n#MangaOnlineViewer #BookmarksList {\n    padding: 0 15px;\n    overflow: auto;\n    max-height: 60vh;\n}\n\n#MangaOnlineViewer #BookmarksList .BookmarkItem {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkColumnLarge {\n    flex-basis: 90%;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkColumnSmall {\n    width: 90px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkFunctions {\n    width: 75px;\n}\n\n#MangaOnlineViewer #BookmarksList .bookmarkURl {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    flex-basis: 55%;\n}\n"}
  ${"#MangaOnlineViewer #CommentsPanel {\n    position: static;\n    width: 90%;\n    height: 0;\n    top: 5%;\n    left: 5%;\n    text-align: center;\n    transition: transform 0.3s ease-in-out;\n    transform: scaleY(0);\n    z-index: 1000;\n    overflow-y: initial;\n    background-color: var(--theme-body-background);\n    opacity: 0;\n}\n\n#MangaOnlineViewer #CommentsPanel.visible {\n    position: fixed;\n    height: 90%;\n    transform: scaleY(1);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    opacity: 1;\n}\n\n#MangaOnlineViewer #CommentsArea {\n    overflow-y: auto;\n    overscroll-behavior: contain;\n    height: 100%;\n    width: 100%;\n    background-color: var(--theme-body-background);\n}\n"}
  ${"#MangaOnlineViewer.mobile #Header,\n#MangaOnlineViewer.tablet #Header {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n#MangaOnlineViewer.mobile .ViewerTitle,\n#MangaOnlineViewer.tablet .ViewerTitle {\n    order: 1;\n    min-height: auto;\n    padding: 0;\n    margin: 0;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 100%;\n}\n\n#MangaOnlineViewer.mobile #GlobalFunctions,\n#MangaOnlineViewer.tablet #GlobalFunctions {\n    width: auto;\n    order: 2;\n    padding: 5px;\n}\n\n#MangaOnlineViewer.mobile #ChapterNavigation,\n#MangaOnlineViewer.tablet #ChapterNavigation {\n    order: 3;\n}\n\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\n#MangaOnlineViewer.tablet #GlobalFunctions #ZoomSlider,\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.tablets, .phones),\n#MangaOnlineViewer.tablet #GlobalFunctions .ControlButton:not(.tablets, .phones) {\n    display: none;\n}\n\n#MangaOnlineViewer.mobile #Header {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n\n#MangaOnlineViewer.mobile #Header.click + #Chapter:not(.webcomic, .vertical) {\n    position: sticky;\n}\n\n#MangaOnlineViewer.mobile #MangaTitle {\n    word-wrap: anywhere;\n}\n\n#MangaOnlineViewer.mobile .ViewerTitle {\n    order: 1;\n    margin-top: 0;\n    height: auto;\n    padding: 0;\n}\n\n#MangaOnlineViewer.mobile #GlobalFunctions {\n    order: 2;\n    padding: 0;\n    width: auto;\n    flex-basis: 35px;\n}\n\n#MangaOnlineViewer.mobile #ChapterNavigation {\n    order: 3;\n    width: min-content;\n    min-width: 205px;\n}\n\n#MangaOnlineViewer.mobile .ChapterControl {\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n#MangaOnlineViewer.mobile .ChapterControl .NavigationControlButton {\n    flex-grow: 1;\n}\n\n#MangaOnlineViewer.mobile .PageFunctions {\n    padding: 0;\n}\n\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton.Bookmark {\n    opacity: 1;\n}\n\n#MangaOnlineViewer.mobile #Navigation,\n#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,\n#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.phones),\n#MangaOnlineViewer.mobile .PageFunctions .ControlButton:not(.Bookmark),\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoomMode,\n#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoom,\n#MangaOnlineViewer.mobile #SettingsPanel .fitIfOversize,\n#MangaOnlineViewer.mobile #SettingsPanel .showThumbnails,\n#MangaOnlineViewer.mobile #SettingsPanel .lazyLoadImages,\n#MangaOnlineViewer.mobile #SettingsPanel .downloadZip,\n#MangaOnlineViewer.mobile #SettingsPanel .minZoom,\n#MangaOnlineViewer.mobile #SettingsPanel .zoomStep,\n#MangaOnlineViewer.mobile #SettingsPanel .headerType,\n#MangaOnlineViewer.mobile #SettingsPanel .autoScroll,\n#MangaOnlineViewer.mobile #KeybindingsPanel,\n#MangaOnlineViewer.mobile .ChapterControl .download,\n#MangaOnlineViewer.mobile #Counters {\n    display: none;\n}\n"}
  ${"@-webkit-keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes spin-reverse {\n    0% {\n        transform: rotate(360deg);\n    }\n\n    to {\n        transform: rotate(0);\n    }\n}\n\n@keyframes spin-reverse {\n    0% {\n        transform: rotate(360deg);\n    }\n\n    to {\n        transform: rotate(0);\n    }\n}\n\n.icon-tabler-loader-2,\n.animate-spin {\n    -webkit-animation: spin 1s linear infinite;\n    animation: spin 1s linear infinite;\n}\n\n.animate-spin-reverse {\n    -webkit-animation: spin-reverse 1s linear infinite;\n    animation: spin-reverse 1s linear infinite;\n}\n"}
  `;function Re(e,n){if(!document.querySelector(`#${e}`)){(document.head??document.querySelector("head")).appendChild(function(e,n){const t=document.createElement("style");return t.id=e,t.appendChild(document.createTextNode(n)),t}(e,n))}}function De(e,n){!function(e){document.querySelectorAll(`style[id="${e}"]`).forEach((e=>{e.remove()}))}(e),Re(e,n)}function Be(e,n){return W`
      <style type="text/css" id="${e}">
        ${n}
      </style>
    `}function Ne(e,n,t){return U`
      .${e}, [data-theme="${e}"] {
        --theme-primary-color: ${n};
        --theme-primary-text-color: ${t};
      }
    `}function Ve(e){return Ne(e.name,e[ie().themeShade],ie().themeShade<500?e[900]:e[50])}function $e(e){return Ne("custom",e,pe(e))}const Fe=()=>Object.values(me);const ze=Fe().map((function(e){return Be(e.name,Ve(e))})).join("")+Be("custom",$e(ie().customTheme)),Ge=['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n','.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}',"#nprogress .bar {\n    background: #29d;\n    position: fixed;\n    z-index: 1031;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4px;\n}\n\n#pagesSlider {\n    margin: 10px 0;\n}\n\n#pageInputs {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n    justify-content: center;\n}\n\n#swal2-html-container .pageInput {\n    border: 1px darkblue dashed;\n    border-radius: 5px;\n    text-align: center;\n    background-color: aliceblue;\n    color: black;\n    max-width: 40%;\n}\n\n#swal2-title {\n    color: navy;\n}\n\nbutton.swal2-styled {\n    position: inherit;\n    transform: inherit;\n}\n","/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n",'/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */'].join("\n");const Pe=W` <div class="ControlLabel locale">
    ${re("LANGUAGE")}
    <select id="locale">
      ${ne.map((e=>W`
          <option
            value="${e.ID}"
            ${ie().locale===e.ID?"selected":""}
          >
            ${e.NAME}
          </option>
        `)).join("")}
    </select>
  </div>`,Ze=W`
    <div id="ThemeSection">
      <div class="ControlLabel ColorSchemeSelector">
        ${re("COLOR_SCHEME")}
        <button id="ColorScheme" class="ControlButton">
          ${Le} ${Ae}
        </button>
      </div>
      <div class="ControlLabel ThemeSelector">
        ${re("THEME")}
        <span
          class="custom ThemeRadio 
        ${"custom"===ie().theme?"selected":""}"
          title="custom"
        >
          ${Ce} ${Oe}
        </span>
        ${[...Object.keys(me).map((e=>me[e].name))].map((e=>W`
          <span
            title="${e}"
            class="${e} ThemeRadio ${ie().theme===e?"selected":""}"
          >
            ${Oe}
          </span>
        `)).join("")}
      </div>
      <div
        id="Hue"
        class="ControlLabel CustomTheme ControlLabelItem 
      ${ie().theme.startsWith("custom")?"show":""}"
      >
        ${re("THEME_HUE")}
        <input
          id="CustomThemeHue"
          type="color"
          value="${ie().customTheme}"
          class="colorpicker CustomTheme"
        />
      </div>
      <div
        id="Shade"
        class="ControlLabel CustomTheme ControlLabelItem
      ${ie().theme.startsWith("custom")?"":"show"}"
      >
        <span>
          ${re("THEME_SHADE")}
          <output id="themeShadeVal" class="RangeValue" for="ThemeShade">
            ${ie().themeShade}
          </output>
        </span>
        <input
          type="range"
          value="${ie().themeShade}"
          name="ThemeShade"
          id="ThemeShade"
          min="100"
          max="900"
          step="100"
          oninput="themeShadeVal.value = this.value"
        />
      </div>
    </div>
  `,He=W`
    <div class="ControlLabel loadMode">
      ${re("DEFAULT_LOAD_MODE")}
      <select id="loadMode">
        <option
          value="wait"
          ${"wait"===ie().loadMode?"selected":""}
        >
          ${re("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ${"always"===ie().loadMode?"selected":""}
        >
          ${re("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ${"never"===ie().loadMode?"selected":""}
        >
          ${re("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `,We=W`
    <div class="ControlLabel PagesPerSecond">
      ${re("LOAD_SPEED")}
      <select id="PagesPerSecond">
        <option
          value="3000"
          ${3e3===ie().throttlePageLoad?"selected":""}
        >
          0.3(${re("SLOWLY")})
        </option>
        <option
          value="2000"
          ${2e3===ie().throttlePageLoad?"selected":""}
        >
          0.5
        </option>
        <option
          value="1000"
          ${1e3===ie().throttlePageLoad?"selected":""}
        >
          01(${re("NORMAL")})
        </option>
        <option
          value="500"
          ${500===ie().throttlePageLoad?"selected":""}
        >
          02
        </option>
        <option
          value="250"
          ${250===ie().throttlePageLoad?"selected":""}
        >
          04(${re("FAST")})
        </option>
        <option
          value="125"
          ${125===ie().throttlePageLoad?"selected":""}
        >
          08
        </option>
        <option
          value="100"
          ${100===ie().throttlePageLoad?"selected":""}
        >
          10(${re("EXTREME")})
        </option>
        <option
          value="1"
          ${1===ie().throttlePageLoad?"selected":""}
        >
          ${re("ALL_PAGES")}
        </option>
      </select>
    </div>
  `,Ue=W` <div class="ControlLabel DefaultZoomMode">
    ${re("DEFAULT_ZOOM_MODE")}
    <select id="DefaultZoomMode">
      <option
        value="percent"
        ${"percent"===ie().zoomMode?"selected":""}
      >
        ${re("PERCENT")}
      </option>
      <option
        value="width"
        ${"width"===ie().zoomMode?"selected":""}
      >
        ${re("FIT_WIDTH")}
      </option>
      <option
        value="height"
        ${"height"===ie().zoomMode?"selected":""}
      >
        ${re("FIT_HEIGHT")}
      </option>
    </select>
  </div>`,qe=W`
    <div
      class="ControlLabel DefaultZoom ControlLabelItem
  ${"percent"===ie().zoomMode?"show":""}"
    >
      <span>
        ${re("DEFAULT_ZOOM")}
        <output id="defaultZoomVal" class="RangeValue" for="DefaultZoom">
          ${ie().defaultZoom}%
        </output>
      </span>
      <input
        type="range"
        value="${ie().defaultZoom}"
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
  `,je=W`
    <div class="ControlLabel minZoom">
      <span>
        ${re("MINIMUM_ZOOM")}
        <output id="minZoomVal" class="RangeValue" for="minZoom">
          ${ie().minZoom}%
        </output>
      </span>
      <input
        type="range"
        value="${ie().minZoom}"
        name="minZoom"
        id="minZoom"
        min="30"
        max="100"
        step="10"
        oninput='minZoomVal.value = this.value + "%"'
      />
    </div>
  `,Qe=W`
    <div class="ControlLabel zoomStep">
      <span>
        ${re("ZOOM_STEP")}
        <output id="zoomStepVal" class="RangeValue" for="zoomStep">
          ${ie().zoomStep}%
        </output>
      </span>
      <input
        type="range"
        value="${ie().zoomStep}"
        name="zoomStep"
        id="zoomStep"
        min="5"
        max="50"
        step="5"
        oninput='zoomStepVal.value = this.value + "%"'
      />
    </div>
  `,Ye=W`
    <div class="ControlLabel viewMode">
      ${re("DEFAULT_VIEW_MODE")}
      <select id="viewMode">
        <option
          value="Vertical"
          ${"Vertical"===ie().viewMode?"selected":""}
        >
          ${re("VIEW_MODE_VERTICAL")}
        </option>
        <option
          value="WebComic"
          ${"WebComic"===ie().viewMode?"selected":""}
        >
          ${re("VIEW_MODE_WEBCOMIC")}
        </option>
        <option
          value="FluidLTR"
          ${"FluidLTR"===ie().viewMode?"selected":""}
        >
          ${re("VIEW_MODE_LEFT")}
        </option>
        <option
          value="FluidRTL"
          ${"FluidRTL"===ie().viewMode?"selected":""}
        >
          ${re("VIEW_MODE_RIGHT")}
        </option>
      </select>
    </div>
  `,Xe=W`
    <div
      class="ControlLabel lazyStart ControlLabelItem
    ${ie().lazyLoadImages?"show":""}"
    >
      <span>
        ${re("LAZY_LOAD_IMAGES")}
        <output id="lazyStartVal" for="lazyStart">
          ${ie().lazyStart}
        </output>
      </span>
      <input
        type="range"
        value="${ie().lazyStart}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
      />
    </div>
  `,Ke=W`
    <div class="ControlLabel headerType">
      ${re("HEADER_TYPE")}
      <select id="headerType">
        <option
          value="hover"
          ${"hover"===ie().header?"selected":""}
        >
          ${re("HEADER_HOVER")}
        </option>
        <option
          value="scroll"
          ${"scroll"===ie().header?"selected":""}
        >
          ${re("HEADER_SCROLL")}
        </option>
        <option
          value="click"
          ${"click"===ie().header?"selected":""}
        >
          ${re("HEADER_CLICK")}
        </option>
        <option
          value="fixed"
          ${"fixed"===ie().header?"selected":""}
        >
          ${re("HEADER_FIXED")}
        </option>
        <option
          value="simple"
          ${"simple"===ie().header?"selected":""}
        >
          ${re("HEADER_SIMPLE")}
        </option>
      </select>
    </div>
  `,Je=W`
    <div class="ControlLabel verticalSeparator">
      ${re("VERTICAL_SEPARATOR")}
      <input
        type="checkbox"
        value="true"
        name="verticalSeparator"
        id="verticalSeparator"
        ${ie().verticalSeparator?"checked":""}
      />
    </div>
    <div class="ControlLabel fitIfOversize">
      ${re("FIT_WIDTH_OVERSIZED")}
      <input
        type="checkbox"
        value="true"
        name="fitIfOversize"
        id="fitIfOversize"
        ${ie().fitWidthIfOversize?"checked":""}
      />
    </div>
    <div class="ControlLabel showThumbnails">
      ${re("SHOW_THUMBNAILS")}
      <input
        type="checkbox"
        value="true"
        name="showThumbnails"
        id="showThumbnails"
        ${ie().showThumbnails?"checked":""}
      />
    </div>
    <div class="ControlLabel enableComments">
      ${re("ENABLE_COMMENTS")}
      <input
        type="checkbox"
        value="true"
        name="enableComments"
        id="enableComments"
        ${ie().enableComments?"checked":""}
      />
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${re("LAZY_LOAD_IMAGES_ENABLE")}
      <input
        type="checkbox"
        value="true"
        name="lazyLoadImages"
        id="lazyLoadImages"
        ${ie().lazyLoadImages?"checked":""}
      />
    </div>
    ${Xe}
    <div class="ControlLabel downloadZip">
      ${re("DOWNLOAD_IMAGES")}
      <input
        type="checkbox"
        value="false"
        name="downloadZip"
        id="downloadZip"
        ${ie().downloadZip?"checked":""}
      />
    </div>
    <div class="ControlLabel hidePageControls">
      ${re("HIDE_CONTROLS")}
      <input
        type="checkbox"
        value="false"
        name="hidePageControls"
        id="hidePageControls"
        ${ie().hidePageControls?"checked":""}
      />
    </div>
  `,en=W`
    <div class="ControlLabel autoScroll">
      <span>
        ${re("AUTO_SCROLL_HEIGHT")}
        <output id="scrollHeightVal" for="scrollHeight">
          ${ie().scrollHeight} </output
        >px
      </span>
      <input
        type="range"
        value="${ie().scrollHeight}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="100"
        step="1"
        oninput="scrollHeightVal.value = this.value"
      />
    </div>
  `,nn=()=>W`
    <div id="SettingsPanel" class="panel">
      <h2>${re("SETTINGS")}</h2>
      <button
        id="CloseSettings"
        class="closeButton"
        title="${re("CLOSE")}"
      >
        ${Te}
      </button>
      <button id="ResetSettings" class="ControlButton">
        ${re("BUTTON_RESET_SETTINGS")}
      </button>
      ${Pe} ${Ze} ${He} ${We} ${Ue}
      ${qe} ${je} ${Qe} ${Ye} ${Je}
      ${Ke} ${en}
    </div>
  `,tn=()=>Object.keys(ie().keybinds).map((e=>{const n=ie().keybinds[e]?.length?ie().keybinds[e]?.map((e=>W`<kbd class="dark">${e}</kbd>`)).join(" / "):"";return W`<span>${re(e)}:</span> <span>${n}</span>`})),an=()=>Object.keys(ie().keybinds).map((e=>W`<label for="${e}">${re(e)}:</label>
            <input
              type="text"
              class="KeybindInput"
              id="${e}"
              name="${e}"
              value="${ie().keybinds[e]?.join(" , ")??""}"
            />`)).concat(W`<div id="HotKeysRules">${re("KEYBIND_RULES")}</div>`),on=()=>W`
    <div id="KeybindingsPanel" class="panel">
      <h2>${re("KEYBINDINGS")}</h2>
      <button
        id="CloseKeybindings"
        class="closeButton"
        title="${re("CLOSE")}"
      >
        ${Te}
      </button>
      <div class="controls">
        <button
          id="EditKeybindings"
          class="ControlButton"
          type="button"
          title="${re("EDIT_KEYBINDS")}"
        >
          ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\n  <path d="M13.5 6.5l4 4" />\n</svg>\n\n\n'} ${re("BUTTON_EDIT")}
        </button>
        <button
          id="SaveKeybindings"
          class="ControlButton hidden"
          type="button"
          title="${re("SAVE_KEYBINDS")}"
        >
          ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />\n  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M14 4l0 4l-6 0l0 -4" />\n</svg>\n\n\n'} ${re("BUTTON_SAVE")}
        </button>
      </div>
      <div id="KeybindingsList">${tn().join("\n")}</div>
    </div>
  `;function rn(e,n=1){return Array(e).fill(0).map(((e,n)=>n+1)).filter((e=>e>=n))}const ln=()=>t(ie().bookmarks)?[re("LIST_EMPTY")]:ie().bookmarks.map(((e,n)=>W`
        <div id="Bookmark${n+1}" class="BookmarkItem">
          <span class="bookmarkColumnLarge">
            <span class="bookmarkName">${e.name}</span>
            <br />
            <a class="bookmarkURl" href="${e.url}" target="_blank"
              >${e.url}</a
            >
          </span>
          <span class="bookmarkColumnSmall">
            <span class="bookmarkDate">
              ${new Date(e.date).toISOString().slice(0,10)}</span
            >
            <br />
            <span class="bookmarkPage">Page: ${e.page}</span>
          </span>
          <span class="bookmarkFunctions">
            <a class="" href="${e.url}" target="_blank">
              <button
                class="ControlButton open"
                title="Open Bookmark"
                type="button"
              >
                ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />\n  <path d="M11 13l9 -9" />\n  <path d="M15 4h5v5" />\n</svg>\n\n\n'}
              </button>
            </a>
            <button
              class="ControlButton erase"
              title="Delete Bookmark"
              type="button"
              value="${e.url}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 7l16 0" />\n  <path d="M10 11l0 6" />\n  <path d="M14 11l0 6" />\n  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />\n  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />\n</svg>\n\n\n'}
            </button>
          </span>
        </div>
      `)),sn=()=>W`
    <div id="BookmarksPanel" class="panel">
      <button
        id="CloseBookmarks"
        class="closeButton"
        title="${re("CLOSE")}"
      >
        ${Te}
      </button>
      <button
        class="Bookmark simpleButton"
        title="${re("BOOKMARK")}"
      >
        ${Me} ${Se}
      </button>
      <h2>${re("BOOKMARKS")}</h2>
      <div id="BookmarksList"></div>
    </div>
  `;function cn(){const e=document.getElementById("BookmarksList");e&&(e.innerHTML=ln().join(""))}const dn=e=>{return W`
    <header id="Header" class="${ie().header} headroom-top">
      <aside id="GlobalFunctions">
        <span>
          <button
            id="enlarge"
            title="${re("ENLARGE")}"
            class="ControlButton"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15 13v4" />\n  <path d="M13 15h4" />\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\n  <path d="M22 22l-3 -3" />\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\n  <path d="M3 11v-1" />\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\n  <path d="M10 3h1" />\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\n</svg>\n\n\n'}
          </button>
          <button
            id="restore"
            title="${re("RESTORE")}"
            class="ControlButton"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\n  <path d="M17 17l-2.5 -2.5" />\n  <path d="M10 5l2 -2l2 2" />\n  <path d="M19 10l2 2l-2 2" />\n  <path d="M5 10l-2 2l2 2" />\n  <path d="M10 19l2 2l2 -2" />\n</svg>\n\n\n'}
          </button>
          <button
            id="reduce"
            title="${re("REDUCE")}"
            class="ControlButton"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M13 15h4" />\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\n  <path d="M22 22l-3 -3" />\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\n  <path d="M3 11v-1" />\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\n  <path d="M10 3h1" />\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\n</svg>\n\n\n'}
          </button>
          <button
            id="fitWidth"
            title="${re("FIT_WIDTH")}"
            class="ControlButton"
          >
            ${xe}
          </button>
          <button
            id="fitHeight"
            title="${re("FIT_HEIGHT")}"
            class="ControlButton"
          >
            ${ke}
          </button>
          <button
            id="keybindings"
            title="${re("KEYBINDINGS")}"
            class="ControlButton"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />\n  <path d="M6 10l0 .01" />\n  <path d="M10 10l0 .01" />\n  <path d="M14 10l0 .01" />\n  <path d="M18 10l0 .01" />\n  <path d="M6 14l0 .01" />\n  <path d="M18 14l0 .01" />\n  <path d="M10 14l4 .01" />\n</svg>\n\n\n'}
          </button>
          <button
            id="AutoScroll"
            title="${re("SCROLL_START")}"
            class="ControlButton phones"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M7 4v16l13 -8z" />\n</svg>\n\n\n'} ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\n  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\n</svg>\n\n\n'}
          </button>
        </span>
        <span>
          <button
            id="ltrMode"
            title="${re("VIEW_MODE_LEFT")}"
            class="ControlButton"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />\n  <path d="M4 18h17" />\n  <path d="M18 15l3 3l-3 3" />\n</svg>\n\n\n'}
          </button>
          <button
            id="verticalMode"
            title="${re("VIEW_MODE_VERTICAL")}"
            class="ControlButton tablets"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />\n  <path d="M18 4v17" />\n  <path d="M15 18l3 3l3 -3" />\n</svg>\n\n\n'}
          </button>
          <button
            id="webComic"
            title="${re("VIEW_MODE_WEBCOMIC")}"
            class="ControlButton tablets"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />\n  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />\n  <path d="M16 12h-8" />\n</svg>\n\n\n'}
          </button>
          <button
            id="rtlMode"
            title="${re("VIEW_MODE_RIGHT")}"
            class="ControlButton"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />\n  <path d="M20 18h-17" />\n  <path d="M6 15l-3 3l3 3" />\n</svg>\n\n\n'}
          </button>
          <button
            id="pageControls"
            title="${re("TOGGLE_CONTROLS")}"
            class="ControlButton tablets"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M11 6h9" />\n  <path d="M11 12h9" />\n  <path d="M12 18h8" />\n  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />\n  <path d="M6 10v-6l-2 2" />\n</svg>\n\n\n'}
          </button>
          <button
            id="bookmarks"
            title="${re("BOOKMARKS")}"
            class="ControlButton tablets"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />\n  <path d="M11 3h5a3 3 0 0 1 3 3v11" />\n</svg>\n\n\n'}
          </button>
          <button
            id="settings"
            title="${re("SETTINGS")}"
            class="ControlButton tablets phones"
          >
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />\n  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />\n</svg>\n\n\n'}
          </button>
        </span>
        <span id="ZoomSlider">
          <output id="ZoomVal" class="RangeValue" for="Zoom">
            ${"percent"===ie().zoomMode?`${ie().defaultZoom}%`:ie().zoomMode}
          </output>
          <input
            type="range"
            value="${ie().defaultZoom}"
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
          (${re("RETURN_CHAPTER_LIST")})
        </a>
      </div>
      <nav id="ChapterNavigation">
        <div id="Counters" class="ControlLabel">
          ${re("PAGES_LOADED")}:
          <i>0</i> /
          <b
            >${e.begin>1?e.pages-(e.begin-1):e.pages}</b
          >
          <span class="ControlLabel"> ${re("GO_TO_PAGE")}: </span>
          <select id="gotoPage">
            <option selected>#</option>
            ${(n=e.pages,t=e.begin,rn(n,t).map((e=>W` <option value="${e}">${e}</option>`))).join("")}
          </select>
        </div>
        <div id="ChapterControl" class="ChapterControl">
          <span>
            <button
              id="CommentsButton"
              class="NavigationControlButton ControlButton ${e.comments?"":"disabled"}"
              title="${re("DISPLAY_COMMENTS")}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M8 9h8" />\n  <path d="M8 13h6" />\n  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />\n</svg>\n\n\n'} ${re("DISPLAY_COMMENTS")}
            </button>
            <button
              id="download"
              class="NavigationControlButton ControlButton disabled"
              type="button"
              title="${re("DOWNLOAD_ZIP")}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\n  <path d="M12 17v-6" />\n  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />\n</svg>\n\n\n'} ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 3a9 9 0 1 0 9 9" />\n</svg>\n\n\n'}
              ${re("BUTTON_DOWNLOAD")}
            </button></span
          >
          <span>
            <a
              id="prev"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${e.prev??""}"
              title="${re("PREVIOUS_CHAPTER")}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />\n</svg>\n\n\n'} ${re("BUTTON_PREVIOUS")}
            </a>
            <a
              id="next"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${e.next??""}"
              title="${re("NEXT_CHAPTER")}"
            >
              ${re("BUTTON_NEXT")} ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />\n</svg>\n\n\n'}
            </a>
          </span>
        </div>
      </nav>
    </header>
  `;var n,t},mn=e=>{return W`
    <main
      id="Chapter"
      class="${ie().fitWidthIfOversize?"fitWidthIfOversize":""}
  ${ie().verticalSeparator?"separator":""}
  ${ie().viewMode}"
    >
      ${(n=e.pages,t=e.begin,rn(n,t).map((e=>W`
        <div id="Page${e}" class="MangaPage">
          <div class="PageFunctions">
            <button
              class="Bookmark ControlButton"
              title="${re("BOOKMARK")}"
            >
              ${Me} ${Se}
            </button>
            <button
              class="ZoomIn ControlButton"
              title="${re("ZOOM_IN")}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M7 10l6 0" />\n  <path d="M10 7l0 6" />\n  <path d="M21 21l-6 -6" />\n</svg>\n\n\n'}
            </button>
            <button
              class="ZoomRestore ControlButton"
              title="${re("ZOOM_RESET")}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M8 8l4 4" />\n  <path d="M12 8l-4 4" />\n  <path d="M21 21l-6 -6" />\n</svg>\n\n\n'}
            </button>
            <button
              class="ZoomOut ControlButton"
              title="${re("ZOOM_OUT")}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M7 10l6 0" />\n  <path d="M21 21l-6 -6" />\n</svg>\n\n\n'}
            </button>
            <button
              class="ZoomWidth ControlButton"
              title="${re("ZOOM_WIDTH")}"
            >
              ${xe}
            </button>
            <button
              class="ZoomHeight ControlButton"
              title="${re("ZOOM_HEIGHT")}"
            >
              ${ke}
            </button>
            <button
              class="Hide ControlButton"
              title="${re("HIDE")}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />\n  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />\n</svg>\n\n\n'} ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />\n  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />\n  <path d="M3 3l18 18" />\n</svg>\n\n\n'}
            </button>
            <button
              class="Reload ControlButton"
              title="${re("RELOAD")}"
            >
              ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />\n  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />\n</svg>\n\n\n'}
            </button>
            <span class="PageIndex">${e}</span>
          </div>
          <div class="PageContent">
            <img id="PageImg${e}" alt="" class="PageImg" />
          </div>
        </div>
        <div class="separator">
          [ ${e===n?re("END"):`${e} / ${n}`}
          ]
        </div>
      `))).join("")}
    </main>
  `;var n,t},un=()=>W`
    <div id="CommentsPanel" class="panel">
      <button
        id="CloseComments"
        class="closeButton"
        title="${re("CLOSE")}"
      >
        ${Te}
      </button>
      <h2>${re("COMMENTS")}</h2>
      <div id="CommentsArea" class="${ie().colorScheme}"></div>
      <button id="CommentsColorScheme" class="simpleButton ColorScheme">
        ${Le} ${Ae}
      </button>
    </div>
  `;function gn(e){const n=document.querySelector("#Chapter");n?.classList.contains("FluidLTR")||n?.classList.contains("FluidRTL")?n?.scroll(e?.offsetLeft??0,e?.offsetTop??0):window?.scroll(e?.offsetLeft??0,e?.offsetTop??0)}function pn(e,n){return t=>t.addEventListener(e,n)}function hn(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function wn(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY+e.deltaX,e.preventDefault())}function bn(){document.querySelector("#BookmarksPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function fn(e=window.location.href){a(ce(e))||(q(`Bookmark Removed ${e}`),le({bookmarks:ie().bookmarks.filter((n=>n.url!==e))}),e===window.location.href&&document.querySelector("#MangaOnlineViewer")?.classList.remove("bookmarked"))}function vn(e){const n=e.currentTarget.value;q(`Bookmark Removed ${n}`),Swal.fire({title:re("BOOKMARK_REMOVED"),timer:1e4,icon:"error"}),fn(n),cn(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(pn("click",vn))}function yn(){cn(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(pn("click",vn)),document.querySelector("#BookmarksPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function En(e){document.querySelector("#MangaOnlineViewer")?.classList.toggle("bookmarked");const n=[...document.querySelectorAll(".MangaPage")].map((e=>Math.abs(e.offsetTop-window.scrollY))),t=parseInt(e.currentTarget.parentElement?.querySelector(".PageIndex")?.textContent??"0",10)||n.indexOf(Math.min(...n))+1,a={name:document.querySelector("title")?.textContent?.trim().replace(/^\(\d+%\) */,"")??"",url:window.location.href,page:t,date:(new Date).toISOString().slice(0,10)};ce(a.url)?(le({bookmarks:ie().bookmarks.filter((e=>e.url!==a.url))}),Swal.fire({title:re("BOOKMARK_REMOVED"),timer:1e4,icon:"error"})):(le({bookmarks:[...ie().bookmarks,a]}),Swal.fire({title:re("BOOKMARK_SAVED"),html:re("BOOKMARK_SAVED").replace("##NUM##",t.toString()),icon:"success"})),cn(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(pn("click",vn))}var kn,xn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Mn={exports:{}};kn=Mn,function(){function e(e,n){return void 0===n?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,n,t){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){r(a.response,n,t)},a.onerror=function(){console.error("could not download file")},a.send()}function t(e){var n=new XMLHttpRequest;n.open("HEAD",e,!1);try{n.send()}catch(e){}return 200<=n.status&&299>=n.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof xn&&xn.global===xn?xn:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,i,r){var l=o.URL||o.webkitURL,s=document.createElement("a");i=i||e.name||"download",s.download=i,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):t(s.href)?n(e,i,r):a(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(o,i,r){if(i=i||o.name||"download","string"!=typeof o)navigator.msSaveOrOpenBlob(e(o,r),i);else if(t(o))n(o,i,r);else{var l=document.createElement("a");l.href=o,l.target="_blank",setTimeout((function(){a(l)}))}}:function(e,t,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,a);var l="application/octet-stream"===e.type,s=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||l&&s||i)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},d.readAsDataURL(e)}else{var m=o.URL||o.webkitURL,u=m.createObjectURL(e);r?r.location=u:location.href=u,r=null,setTimeout((function(){m.revokeObjectURL(u)}),4e4)}});o.saveAs=r.saveAs=r,kn.exports=r}();var Sn=Mn.exports;const On=/^blob:(.+?)\/(.+)$/;function An(e){return e.slice(e.indexOf(";base64,")+8)}function Cn(e){return/^data:image\/(png|jpg|jpeg|gif);base64,/.test(e)}function In(e){return On.test(e)}function Ln(e){const n=e.split("?")[0].split("/").pop(),t=n?.match(/\.[A-Za-z]{2,4}$/);return t?t[0].slice(1):""}const Tn=e=>{switch(e.substring(e.indexOf("/")+1,e.indexOf(";base64"))){case"/":return"jpg";case"R":return"gif";case"U":return"webp";default:return"png"}};let _n;const Rn=(e,n,t,a)=>`${e}${(n+1).toString().padStart(Math.floor(Math.log10(t))+1,"0")}.${a.replace("jpeg","jpg")}`;async function Dn(e,n,t){const a=e.getAttribute("src")??e.getAttribute("data-src")??"";if(In(a))throw new Error("Image source unusable");return Cn(a)?Promise.resolve({name:Rn("Page-",n,t.length,Tn(a)),data:An(a)??""}):new Promise((e=>{(async function(e){return new Promise(((n,t)=>{q(`Getting Image data: ${e}`),GM_xmlhttpRequest({method:"GET",url:e,headers:{referer:window.location.host,origin:window.location.host},responseType:"blob",onload(e){200!==e.status&&t(e),n(e)}})}))})(a).then((o=>{e({name:Rn("Page-",n,t.length,Ln(a)),data:o.response})})).catch(j("Image not Available"))}))}function Bn(e){q(`${e.name} Added to Zip from Base64 Image`),_n.file(e.name,e.data,{base64:!0,createFolders:!0,compression:"DEFLATE"})}function Nn(e){const n=e.currentTarget;n.classList.contains("loading")||(q("Downloading Chapter"),n.classList.add("loading"),async function(){_n=new JSZip;const e=[...document.querySelectorAll(".PageImg")];Promise.all(e.map(Dn)).then((e=>{e.forEach(Bn),q("Generating Zip"),_n.generateAsync({type:"blob"}).then((e=>{q("Download Ready");const n=`${document.querySelector("#MangaTitle")?.textContent?.trim()}.zip`;Sn.saveAs(e,n,{autoBom:!1}),document.getElementById("download")?.classList.remove("loading")})).catch(q)})).catch((e=>q("One or more images couldn't be Downloaded",e)))}().catch((e=>q("Error downloading chapter",e))))}function Vn(){document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls")}function $n(e){const n=e.target,t=n.getAttribute("value")??n.getAttribute("href");1===e.button||e.ctrlKey||(t&&"#"!==t?window.location.href=t:"series"===n.id&&window.history.back())}function Fn(){document.querySelector("#CommentsPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function zn(){document.querySelector("#CommentsPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function Gn(){const e=document.querySelector("#CommentsArea");e?.classList.toggle("light"),e?.classList.toggle("dark")}const Pn=e=>document.querySelector(e)?.dispatchEvent(new Event("click"));function Zn(e){const n=document.querySelector("#Chapter");if(n?.classList.contains("FluidLTR")||n?.classList.contains("FluidRTL"))n.scrollBy({left:window.innerWidth/2*e*(n?.classList.contains("FluidRTL")?-1:1),behavior:"smooth"});else if("height"===ie().zoomMode){const n=[...document.querySelectorAll(".MangaPage")],t=n.map((e=>Math.abs(e.offsetTop-window.scrollY))),a=_.indexOf(t,_.min(t)),o=a+e,i=document.querySelector("#Header");o<0?gn(i):o>=n.length?i.classList.add("headroom-end"):(q(`Current array page ${a},`,`Scrolling to page ${o}`),gn(n.at(o)))}else window.scrollBy({top:e*window.innerHeight/2,behavior:"smooth"})}const Hn={SCROLL_UP(){Zn(-1)},SCROLL_DOWN(){Zn(1)},NEXT_CHAPTER(){Pn("#next")},PREVIOUS_CHAPTER(){Pn("#prev")},ENLARGE(){Pn("#enlarge")},REDUCE(){Pn("#reduce")},RESTORE(){Pn("#restore")},FIT_WIDTH(){Pn("#fitWidth")},FIT_HEIGHT(){Pn("#fitHeight")},SETTINGS(){Pn("#settings")},VIEW_MODE_WEBCOMIC(){Pn("#webComic")},VIEW_MODE_VERTICAL(){Pn("#verticalMode")},VIEW_MODE_LEFT(){Pn("#rtlMode")},VIEW_MODE_RIGHT(){Pn("#ltrMode")},SCROLL_START(){Pn("#AutoScroll")}};function Wn(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,hotkeys.unbind(),Object.keys(ie().keybinds).forEach((e=>{hotkeys(ie().keybinds[e]?.join(",")??"",_.throttle((n=>{n.preventDefault(),n.stopImmediatePropagation(),n.stopPropagation(),Hn[e]()}),100))}))}async function Un(e){return async function(e,n){return new Promise((t=>{q("Fetching page: ",e),fetch(e).then((async e=>e.text())).then((e=>{const a=(new DOMParser).parseFromString(e,n);t(a)})).catch((e=>{q("Failed to fetch page: ",e)}))}))}(e,"text/html")}const qn={threshold:2e3,throttle:500,lazyAttribute:"data-src",targetAttribute:"src"};let jn=[],Qn=!1;function Yn(e){const{element:n}=e,t=n.getBoundingClientRect(),a=(window.innerHeight||document.documentElement.clientHeight)+qn.threshold;return t.top<=a||t.bottom<=a}async function Xn(e){let n=e.element.getAttribute(qn.lazyAttribute)??"";n&&(In(n)||Cn(n)||!e.fetchOptions||(n=await fetch(n,e.fetchOptions).then((e=>e.blob())).then((e=>blobUtil.blobToDataURL(e)))),e.element.setAttribute(qn.targetAttribute,n)),e.callback(e.element)?.catch(q)}const Kn=_.throttle((function(){const e=jn.filter(Yn);jn=jn.filter((e=>!Yn(e))),e.forEach(Xn)}),qn.throttle);function Jn(e,n,t){Qn||(window.addEventListener("scroll",Kn,{passive:!0}),window.addEventListener("touchmove",Kn,{passive:!0}),window.addEventListener("resize",Kn,{passive:!0}),Qn=!0),jn.push({element:e,callback:n,fetchOptions:t}),Kn()}function et(e=ie().zoomMode,n=".PageContent img"){[...document.querySelectorAll(n)].forEach((n=>{if(n.removeAttribute("width"),n.removeAttribute("height"),n.removeAttribute("style"),"width"===e)n.style.width=`${window.innerWidth}px`;else if("height"===e){const e=window.innerHeight+(ie().showThumbnails?-29:0);n.style.height=`${e}px`,n.style.minWidth="unset"}else"percent"===e?n.style.width=n.naturalWidth*(ie().defaultZoom/100)+"px":e>=0&&100!==e&&(n.style.width=n.naturalWidth*(e/100)+"px")}))}function nt(e){let n=1;const t=e?.match(/cache=(\d+)$/);return t?.at(1)&&(n=parseInt(t[1],10)+1),n}function tt(e){const n=e.getAttribute("src");n&&(e.removeAttribute("src"),Cn(n)||In(n)?e.setAttribute("src",n):e.setAttribute("src",function(e,n){const t=e.replace(/[?&]cache=\d+$/,""),a=t.includes("?")?"&":"?";return`${t+a}cache=${n}`}(n,nt(n))))}function at(){const e=document.querySelectorAll(".PageContent .PageImg").length,n=document.querySelectorAll(".PageContent .PageImg.imgLoaded").length,t=Math.floor(n/e*100),a=document.querySelector("title");a&&(a.innerHTML=W`(${t}%)
      ${document.querySelector("#MangaTitle")?.textContent}`),document.querySelectorAll("#Counters i, #NavigationCounters i").forEach((e=>{e.textContent=n.toString()})),NProgress.configure({showSpinner:!1}).set(n/e),q(`Progress: ${t}%`),n===e&&(q("Images Loading Complete"),ie().downloadZip&&document.getElementById("download")?.dispatchEvent(new Event("click")),document.getElementById("download")?.classList.remove("disabled"))}const ot=(e=".PageContent img")=>{const n=document.querySelector("#ZoomVal")?.textContent?.trim();n?.match(/^\d+%$/)?et(parseInt(n,10),e):et(n,e)};function it(){return e=>{e.images.forEach((e=>{e.img.classList.add("imgLoaded"),e.img.classList.remove("imgBroken");const n=e.img.id.replace("PageImg","ThumbnailImg"),t=document.getElementById(n);t&&t.setAttribute("src",e.img.getAttribute("src")),ot(`#${e.img.id}`),at()}))}}function rt(e){return n=>{n.images.forEach((n=>{n.img.classList.add("imgBroken");const t=n.img.getAttribute("src");t&&nt(t)<=ie().maxReload&&setTimeout((async()=>{if(e.reload){const t=parseInt(`0${/\d+/.exec(n.img.id)}`,10),a=await e.reload(t);n.img.setAttribute("src",a)}else tt(n.img);const t=imagesLoaded(n.img.parentElement);t.on("done",it()),t.on("fail",rt(e))}),2e3)}))}}function lt(e){if(e){let n=e.trim();return n.startsWith("//")&&(n=`https:${n}`),n}return""}function st(e,n,t,a){const o=a-e.begin;let i=lt(t);const r=document.querySelector(`#PageImg${n}`);r&&(!ie().lazyLoadImages||o<=ie().lazyStart?setTimeout((async()=>{In(i)||Cn(i)||!e.fetchOptions||(i=await fetch(i,e.fetchOptions).then((e=>e.blob())).then((e=>blobUtil.blobToDataURL(e))));const t=imagesLoaded(r.parentElement);t.on("done",it()),t.on("fail",rt(e)),r.setAttribute("src",i),q("Loaded Image:",n,"Source:",i)}),(e.timer??ie().throttlePageLoad)*o):(r.setAttribute("data-src",lt(i)),Jn(r,(()=>{const t=imagesLoaded(r.parentElement);t.on("done",it()),t.on("fail",rt(e)),q("Lazy Image: ",n," Source: ",r.getAttribute("src"))}),e.fetchOptions)),e.pages===a&&fn())}function ct(e,n,t,a){return async()=>{const o=await async function(e,n,t){return Un(e).then((e=>e.querySelector(n)?.getAttribute(t)))}(t,e.img,e.lazyAttr??"src"),i=document.querySelector(`#PageImg${n}`);if(o&&i){i.style.width="auto";const t=imagesLoaded(i.parentElement);t.on("done",it()),t.on("fail",rt(e)),i.setAttribute("src",o),q(`${a&&"Lazy "}Page: `,n," Source: ",i.getAttribute("src"))}}}function dt(e,n){rn(n.pages,e).forEach(((e,t)=>{(async function(e,n,t,a){const o=a-e.begin,i=document.querySelector(`#PageImg${n}`);i&&(!ie().lazyLoadImages||o<=ie().lazyStart?setTimeout((()=>{ct(e,n,t,!1)().catch(q)}),(e.timer??ie().throttlePageLoad)*o):(i.setAttribute("data-src","data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),Jn(i,ct(e,n,t,!0))),e.pages===a&&fn())})(n,e,n.listPages[e-1],t).catch(q)}))}function mt(e,n){rn(n.pages,e).forEach(((e,t)=>{st(n,e,n.listImages[e-1],t)}))}function ut(e,n=1){ie().lazyLoadImages=e.lazy??ie().lazyLoadImages,q("Loading Images"),q(`Intervals: ${e.timer??ie().throttlePageLoad??"Default(1000)"}`),q(`Lazy: ${ie().lazyLoadImages}, Starting from: ${ie().lazyStart}`),!function(e){return"listImages"in e&&!a(e.listImages)}(e)?!function(e){return"listPages"in e&&!a(e.listPages)}(e)?!function(e){return"bruteForce"in e&&!a(e.bruteForce)}(e)?q("No Loading Method Found"):(q("Method: Brute Force"),e.bruteForce({begin:n,addImg:st,loadImages(t){mt(n,{...e,listImages:t})},loadPages(t,a,o){dt(n,{...e,listPages:t,img:a,lazyAttr:o})},wait:ie().throttlePageLoad})):(q("Method: Pages:",e.listPages),dt(n,e)):(q("Method: Images:",e.listImages),mt(n,e))}function gt(e){const n=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");tt(n)}function pt(e){const n=e.currentTarget.parentElement?.parentElement;n.classList.toggle("hide")}function ht(e){const n=e.currentTarget.value;et(),gn(document.querySelector(`#Page${n}`))}function wt(e){et(),gn(document.querySelector(`#Page${e.currentTarget.querySelector(".ThumbnailIndex")?.textContent}`))}function bt(){se();const e=document.getElementById("MangaOnlineViewer");e?.removeAttribute("locale"),e?.dispatchEvent(new Event("locale"))}function ft(e){const n=e.currentTarget.value;le({locale:n});const t=document.getElementById("MangaOnlineViewer");t?.setAttribute("locale",n),t?.dispatchEvent(new Event("locale"))}function vt(e){le({loadMode:e.currentTarget.value})}function yt(e){document.querySelector("#Chapter")?.classList.toggle("fitWidthIfOversize"),le({fitWidthIfOversize:e.currentTarget.checked})}function Et(e){document.querySelector("#Chapter")?.classList.toggle("separator"),le({verticalSeparator:e.currentTarget.checked})}function kt(e){document.querySelector("#Navigation")?.classList.toggle("disabled"),le({showThumbnails:e.currentTarget.checked}),et()}function xt(e){document.querySelector("#CommentsButton")?.classList.toggle("disabled"),le({enableComments:e.currentTarget.checked}),et()}function Mt(e){le({downloadZip:e.currentTarget.checked}),e.currentTarget.checked&&Swal.fire({title:re("ATTENTION"),text:re("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function St(e){le({lazyLoadImages:e.currentTarget.checked});const n=document.querySelector(".lazyStart");ie().lazyLoadImages?n?.classList.add("show"):n?.classList.remove("show"),e.currentTarget.checked&&Swal.fire({title:re("WARNING"),html:re("LAZY_LOAD"),icon:"warning"})}function Ot(e){const n=e.currentTarget.value;le({lazyStart:parseInt(n,10)})}function At(e){const n=parseInt(e.currentTarget.value,10);le({throttlePageLoad:n}),n<100&&Swal.fire({title:re("SPEED_WARNING"),html:re("SPEED_WARNING_MESSAGE"),icon:"warning"})}function Ct(e){const n=e.currentTarget.value;le({zoomStep:parseInt(n,10)})}function It(e){const n=e.currentTarget.value;De("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${n}vw;}`),le({minZoom:parseInt(n,10)})}function Lt(e){document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls"),le({hidePageControls:e.currentTarget.checked})}function Tt(e){const n=document.querySelector("#Header");if(!n?.classList.contains(e)){const t=document.querySelector("#menu");n?.classList.remove("scroll","click","hover","fixed","simple","visible"),t?.classList.remove("scroll","click","hover","fixed","simple","hide"),n?.classList.add(e),t?.classList.add(e)}}function _t(e){const n=e.currentTarget.value;Tt(n),le({header:n})}function Rt(e){const{value:n}=e.currentTarget;le({scrollHeight:parseInt(n,10)})}function Dt(){const e=document.querySelector("#Header");e?.classList.contains("click")&&e?.classList.toggle("visible")}function Bt(e){const n=document.querySelector("#Header");n?.classList.contains("hover")&&(!function(e,n,t){return e.clientX>=0&&e.clientX<=n&&e.clientY>=0&&e.clientY<=t}(e,n.clientWidth,n.clientHeight)?(document.querySelector("#menu")?.classList.remove("hide"),n?.classList.remove("visible")):(document.querySelector("#menu")?.classList.add("hide"),n?.classList.add("visible")))}function Nt(){document.querySelector("#SettingsPanel")?.classList.add("visible"),document.querySelector("#Navigation")?.classList.add("visible"),document.querySelector("#Header")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function Vt(){document.querySelector("#SettingsPanel")?.classList.remove("visible"),document.querySelector("#Navigation")?.classList.remove("visible"),document.querySelector("#Header")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function $t(){document.querySelector("#KeybindingsList").innerHTML=tn().join("\n"),document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),document.querySelector("#KeybindingsPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function Ft(){document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),document.querySelector("#KeybindingsPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function zt(){const e=ie().keybinds;Object.keys(ie().keybinds).forEach((n=>{const t=document.querySelector(`#${n}`)?.value.split(",")?.map((e=>e.trim()));e[n]=a(t)?void 0:t})),le({keybinds:e}),document.querySelector("#KeybindingsList").innerHTML=tn().join("\n"),document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),Wn()}function Gt(){document.querySelector("#KeybindingsList").innerHTML=an().join("\n"),document.querySelector("#SaveKeybindings")?.classList.remove("hidden"),document.querySelector("#EditKeybindings")?.classList.add("hidden")}function Pt(e){const n=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");et(n.width/n.naturalWidth*(100+ie().zoomStep),`#${n.getAttribute("id")}`)}function Zt(e){const n=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");et(n.width/n.naturalWidth*(100-ie().zoomStep),`#${n.getAttribute("id")}`)}function Ht(){document.querySelector(".PageContent .PageImg")?.removeAttribute("width")}function Wt(e){const n=e.currentTarget.parentElement?.parentElement,t=n?.querySelector(".PageImg");et("width",`#${t.getAttribute("id")}`),n?.classList.toggle("DoublePage")}function Ut(e){const n=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");et("height",`#${n.getAttribute("id")}`)}function qt(){const e="dark"===ie().colorScheme;le({colorScheme:e?"light":"dark"});const n=document.getElementById("MangaOnlineViewer");n?.classList.remove(e?"dark":"light"),n?.classList.add(ie().colorScheme)}function jt(e){const n=e.currentTarget;[...document.querySelectorAll(".ThemeRadio")].forEach((e=>{e.classList.remove("selected")})),n.classList.add("selected"),document.getElementById("MangaOnlineViewer")?.setAttribute("data-theme",n.title),le({theme:n.title});const t=document.querySelector("#Hue"),a=document.querySelector("#Shade");n.title.startsWith("custom")?(t?.classList.add("show"),a?.classList.remove("show")):(t?.classList.remove("show"),a?.classList.add("show"))}function Qt(e){const n=e.currentTarget.value;le({customTheme:n}),De("custom",$e(n))}function Yt(e){le({themeShade:parseInt(e.currentTarget.value,10)}),Fe().forEach((e=>{De(e.name,Ve(e))})),De("custom",$e(ie().customTheme))}function Xt(e){return()=>{ie().zoomMode="number"!=typeof e?e:"percent",Tt("height"===e?"click":ie().header);const n=document.querySelector("#ZoomVal");Number.isInteger(e)?(n.textContent=`${e}%`,document.querySelector("#Zoom").value=e.toString()):n.textContent=e,et(e)}}function Kt(e=1){return()=>{const n=document.querySelector("#Zoom"),t=parseInt(n.value,10)+e*ie().zoomStep;n.value=t.toString(),n?.dispatchEvent(new Event("input",{bubbles:!0}))}}function Jt(e){const n=e.currentTarget.value;le({zoomMode:n}),Xt(n)();const t=document.querySelector(".DefaultZoom");"percent"===ie().zoomMode?t?.classList.add("show"):t?.classList.remove("show")}function ea(e){const n=parseInt(e.currentTarget.value,10);le({defaultZoom:n}),Xt(n)()}function na(e){const n=parseInt(e.currentTarget.value,10);Xt(n)(),document.querySelector("#ZoomVal").textContent=`${n}%`}function ta(e){const n=document.querySelector("#Chapter");document.querySelector("#Header")?.classList.remove("visible"),document.querySelector("#menu")?.classList.remove("hide"),Xt("height")(),gn(n),n?.addEventListener("wheel","FluidLTR"===e?hn:wn)}function aa(e){return()=>{const n=document.querySelector("#Chapter");n?.classList.remove("Vertical","WebComic","FluidLTR","FluidRTL"),n?.classList.add(e),n?.removeEventListener("wheel",hn),n?.removeEventListener("wheel",wn),"FluidLTR"===e||"FluidRTL"===e?ta(e):(document.querySelector("#Header").className=ie().header,document.querySelector("#menu").className=ie().header,Xt(100)())}}function oa(e){const n=e.currentTarget.value;aa(n)(),le({viewMode:n})}let ia;function ra(){const e=document.querySelector("#Chapter");e?.classList.contains("FluidLTR")||e?.classList.contains("FluidRTL")?e?.scrollBy({top:0,left:ie().scrollHeight*(e?.classList.contains("FluidRTL")?-1:1),behavior:"smooth"}):window.scrollBy({top:ie().scrollHeight,left:0,behavior:"smooth"}),document.querySelector("#Header")?.classList.contains("headroom-end")&&(clearInterval(ia),ia=void 0,document.querySelector("#ScrollControl")?.classList.remove("running"),q("Finished auto scroll"))}function la(){const e=document.querySelector("#AutoScroll");ia?(clearInterval(ia),ia=void 0,e?.classList.remove("running"),q("Stopped auto scroll")):(ra(),ia=setInterval(ra,1e3/60),e?.classList.add("running"),q("Start auto scroll"))}let sa=!1;const ca=_.debounce((()=>{la(),sa=!1}),500);function da(){!sa&&ia&&(la(),sa=!0),sa&&!ia&&ca()}let ma,ua=!1;function ga(){ua||(!function(e=0){let n=0;const t=e=>{const n=document.querySelector("#Header");n.classList.remove("headroom-end","headroom-hide","headroom-show","headroom-top"),e&&n.classList.add(`headroom-${e}`)};window.addEventListener("scroll",_.debounce((function(){const{scrollY:a}=window;e&&"height"!==ie().zoomMode&&a+window.innerHeight+e>document.body.scrollHeight?t("end"):t(a>n&&a>50?"hide":a<n&&a>50?"show":a<=100?"top":""),n=a}),50))}(100),Wn(),document.querySelectorAll(".Reload")?.forEach(pn("click",gt)),document.querySelectorAll(".Hide")?.forEach(pn("click",pt)),document.querySelectorAll(".ZoomIn")?.forEach(pn("click",Pt)),document.querySelectorAll(".ZoomOut")?.forEach(pn("click",Zt)),document.querySelectorAll(".ZoomRestore")?.forEach(pn("click",Ht)),document.querySelectorAll(".ZoomWidth")?.forEach(pn("click",Wt)),document.querySelectorAll(".ZoomHeight")?.forEach(pn("click",Ut)),window.addEventListener("resize",(()=>{const e=document.querySelector("#MangaOnlineViewer");e?.classList.remove("mobile","tablet","desktop"),e?.classList.add(J())})),ua=!0),document.querySelector("#bookmarks")?.addEventListener("click",yn),document.querySelectorAll(".closeButton")?.forEach(pn("click",bn)),document.querySelector("#Overlay")?.addEventListener("click",bn),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(pn("click",vn)),document.querySelectorAll(".Bookmark")?.forEach(pn("click",En)),document.querySelector(".AddBookmark")?.addEventListener("click",En),document.querySelector("#download")?.addEventListener("click",Nn),document.querySelector("#pageControls")?.addEventListener("click",Vn),document.querySelector("#next")?.addEventListener("click",$n),document.querySelector("#prev")?.addEventListener("click",$n),document.querySelector("#series")?.addEventListener("click",$n),document.querySelector("#CommentsButton")?.addEventListener("click",Fn),document.querySelector("#CommentsColorScheme")?.addEventListener("click",Gn),document.querySelectorAll(".closeButton")?.forEach(pn("click",zn)),document.querySelector("#Overlay")?.addEventListener("click",zn),document.querySelector("#gotoPage")?.addEventListener("change",ht),document.querySelectorAll(".Thumbnail")?.forEach(pn("click",wt)),document.querySelector("#Thumbnails")?.addEventListener("wheel",hn),document.querySelector("#ResetSettings")?.addEventListener("click",bt),document.querySelector("#locale")?.addEventListener("change",ft),document.querySelector("#fitIfOversize")?.addEventListener("change",yt),document.querySelector("#verticalSeparator")?.addEventListener("change",Et),document.querySelector("#loadMode")?.addEventListener("change",vt),document.querySelector("#showThumbnails")?.addEventListener("change",kt),document.querySelector("#enableComments")?.addEventListener("change",xt),document.querySelector("#downloadZip")?.addEventListener("change",Mt),document.querySelector("#lazyLoadImages")?.addEventListener("change",St),document.querySelector("#lazyStart")?.addEventListener("change",Ot),document.querySelector("#PagesPerSecond")?.addEventListener("change",At),document.querySelector("#zoomStep")?.addEventListener("change",Ct),document.querySelector("#minZoom")?.addEventListener("input",It),document.querySelector("#hidePageControls")?.addEventListener("change",Lt),document.querySelector("#headerType")?.addEventListener("change",_t),document.querySelector("#scrollHeight")?.addEventListener("change",Rt),document.querySelector("#menu")?.addEventListener("click",Dt),document.addEventListener("mousemove",_.throttle(Bt,300)),document.querySelector("#settings")?.addEventListener("click",function(e,n){let t=!0;return()=>{(t?e:n)(),t=!t}}(Nt,Vt)),document.querySelectorAll(".closeButton")?.forEach(pn("click",Vt)),document.querySelector("#Overlay")?.addEventListener("click",Vt),document.querySelector("#keybindings")?.addEventListener("click",$t),document.querySelectorAll(".closeButton")?.forEach(pn("click",Ft)),document.querySelector("#Overlay")?.addEventListener("click",Ft),document.querySelector("#EditKeybindings")?.addEventListener("click",Gt),document.querySelector("#SaveKeybindings")?.addEventListener("click",zt),document.querySelector("#ColorScheme")?.addEventListener("click",qt),document.querySelectorAll(".ThemeRadio").forEach(pn("click",jt)),document.querySelector("#CustomThemeHue")?.addEventListener("change",Qt),document.querySelector("#ThemeShade")?.addEventListener("input",Yt),document.querySelector("#viewMode")?.addEventListener("change",oa),document.querySelector("#webComic")?.addEventListener("click",aa("WebComic")),document.querySelector("#ltrMode")?.addEventListener("click",aa("FluidLTR")),document.querySelector("#rtlMode")?.addEventListener("click",aa("FluidRTL")),document.querySelector("#verticalMode")?.addEventListener("click",aa("Vertical")),"FluidLTR"!==ie().viewMode&&"FluidRTL"!==ie().viewMode||ta(ie().viewMode),document.querySelector("#DefaultZoomMode")?.addEventListener("change",Jt),document.querySelector("#DefaultZoom")?.addEventListener("input",ea),document.querySelector("#Zoom")?.addEventListener("input",na),document.querySelector("#enlarge")?.addEventListener("click",Kt()),document.querySelector("#reduce")?.addEventListener("click",Kt(-1)),document.querySelector("#restore")?.addEventListener("click",Xt(100)),document.querySelector("#fitWidth")?.addEventListener("click",Xt("width")),document.querySelector("#fitHeight")?.addEventListener("click",Xt("height")),window.addEventListener("wheel",_.throttle(da,500)),document.querySelector("#AutoScroll")?.addEventListener("click",la)}function pa(){aa(ie().viewMode)();const e={"#Header":dn(ma),"#CommentsPanel":un(),"#SettingsPanel":nn(),"#KeybindingsPanel":on(),"#Bookmarks":sn()};document.querySelector("#ScrollControl")?.classList.contains("running")&&la();const n=document.querySelector("#MangaOnlineViewer");n&&(n.className=`${ie().colorScheme} \n        ${ie().hidePageControls?"hideControls":""}\n        ${ce()?"bookmarked":""}\n        ${J()}`,n.setAttribute("data-theme",ie().theme));const t=document.querySelector("#Chapter");t&&(t.className=`${ie().fitWidthIfOversize?"fitWidthIfOversize":""}  ${ie().viewMode}`),Object.entries(e).forEach((([e,n])=>{const t=document.querySelector(e);t&&(t.outerHTML=n)})),document.querySelector("#Overlay")?.dispatchEvent(new Event("click")),ga()}const ha=e=>(ma=e,W`
      <div
        id="MangaOnlineViewer"
        class="${ie().colorScheme} 
        ${ie().hidePageControls?"hideControls":""}
        ${ce()?"bookmarked":""}
        ${J()}"
        data-theme="${ie().theme}"
      >
        <div id="menu" class="${ie().header}">${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 6l16 0" />\n  <path d="M4 12l16 0" />\n  <path d="M4 18l16 0" />\n</svg>\n\n\n'}</div>
        ${dn(e)} ${mn(e)} ${(e=>W`
    <nav
      id="Navigation"
      class="panel ${ie().showThumbnails?"":"disabled"}"
    >
      <div id="NavigationCounters" class="ControlLabel">
        ${'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M4 4h6v6h-6z" />\n  <path d="M14 4h6v6h-6z" />\n  <path d="M4 14h6v6h-6z" />\n  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\n</svg>\n\n\n'}
        <i>0</i> /
        <b
          >${e.begin>1?e.pages-(e.begin-1):e.pages}</b
        >
        ${re("PAGES_LOADED")}
      </div>
      <div id="Thumbnails">
        ${rn(e.pages,e.begin).map((e=>W`
              <div id="Thumbnail${e}" class="Thumbnail">
                <img
                  id="ThumbnailImg${e}"
                  alt=""
                  class="ThumbnailImg"
                  src=""
                />
                <span class="ThumbnailIndex">${e}</span>
              </div>
            `)).join("")}
      </div>
    </nav>
  `)(e)}
        <div id="Overlay" class="overlay"></div>
        ${un()} ${on()} ${sn()}
        ${nn()}
      </div>
    `);function wa(e){document.head.innerHTML=function(e){return W`
      <title>${e.title}</title>
      <meta charset="UTF-8" />
      ${Be("externals",Ge)}
      ${Be("reader",_e)} ${ze}
      ${Be("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${ie().minZoom}vw;}`)}
    `}(e),document.body.innerHTML=ha(e),ga(),ut(e),document.querySelector("#MangaOnlineViewer")?.addEventListener("locale",pa),e.comments&&document.querySelector("#CommentsArea")?.append(e.comments)}const ba=(...e)=>e.forEach((e=>{e.getAttributeNames().forEach((n=>{e.removeAttribute(n)}))}));async function fa(){if(!ie().enableComments)return null;const e=document.querySelector("#disqus_thread, #fb-comments");if(e){q("Waiting to Comments to load",e),window.scrollTo(0,document.body.scrollHeight);await async function(e,n){return Promise.race([r(e),i(n,!1)])}((()=>{const n=e?.querySelector("iframe:not(#indicator-north, #indicator-south)");return void 0!==n&&!t(n?.src)&&(void 0!==n?.contentDocument||void 0!==n?.contentWindow?.document)}),5e3)||q("Timeout Comments",e)}return window.scrollTo(0,0),e}async function va(e){void 0!==e.before&&await e.before(e.begin),ie().enableComments&&!e.comments&&(e.comments=await fa()),setTimeout((()=>{try{ba(document.documentElement,document.head,document.body),window.scrollTo(0,0),wa(e)}catch(e){q(e)}}),50)}const ya="#StartMOV {\n    all: revert;\n    backface-visibility: hidden;\n    font-size: 2rem;\n    color: #fff;\n    cursor: pointer;\n    margin: 0 auto;\n    padding: 0.5rem 1rem;\n    text-align: center;\n    border: none;\n    border-radius: 10px;\n    min-height: 50px;\n    width: 80%;\n    position: fixed;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 105000;\n    transition: all 0.4s ease-in-out;\n    background-size: 300% 100%;\n    background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\n    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\n}\n\n#StartMOV:hover {\n    background-position: 100% 0;\n    transition: all 0.4s ease-in-out;\n}\n\n#StartMOV:focus {\n    outline: none;\n}\n";async function Ea(e){if(void 0!==e.waitAttr){q(`Waiting for Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]}`);const n=await o(e.waitAttr[0],e.waitAttr[1]);q(`Found Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]} = ${n}`)}}async function ka(e){if(void 0!==e.waitEle){q(`Waiting for Element ${e.waitEle}`);const n=await function(e,n=document.body){return new Promise((t=>{if(document.querySelector(e))return void t(document.querySelector(e));const a=new MutationObserver((()=>{document.querySelector(e)&&(t(document.querySelector(e)),a.disconnect())}));a.observe(n,{childList:!0,subtree:!0,attributes:!0})}))}(e.waitEle);q(`Found Element ${e.waitEle} = `,n)}}async function xa(e){if(void 0!==e.waitVar){q(`Waiting for Variable ${e.waitVar}`);const n=await function(e,n=document.body){return new Promise((t=>{if(!a(unsafeWindow[e]))return void t(unsafeWindow[e]);const o=new MutationObserver((()=>{a(unsafeWindow[e])||(t(unsafeWindow[e]),o.disconnect())}));o.observe(n,{childList:!0,subtree:!0,attributes:!0})}))}(e.waitVar);q(`Found Variable ${e.waitVar} = ${n}`)}}async function Ma(e){if(void 0!==e.waitFunc){q(`Waiting to pass Function check ${e.waitFunc}`);const n=await function(e,n=document.body){return new Promise((t=>{const a=e();if(a)return void t(a);const o=new MutationObserver((()=>{const n=e();n&&(t(n),o.disconnect())}));o.observe(n,{childList:!0,subtree:!0,attributes:!0})}))}(e.waitFunc);q(`Found Function check ${e.waitFunc} = ${n}`)}}async function Sa(e){void 0!==e.waitTime&&(q(`Waiting to for ${e.waitTime} milliseconds`),await new Promise((n=>{setTimeout(n,e.waitTime)})),q("Continuing after timer"))}const Oa={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:["Raw"],category:"manga",run(){const e=parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10),n=document.createElement("div");return n.innerHTML=Array(100).fill("Testing Comment<br/>").join(""),{title:"Placeholder Manga Loaded",series:"?reload",pages:e,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[be(1970,1400,"#2D1657"),be(985,1400,"#152C55"),be(985,1400,"#7A1420"),be(985,1400,"#0F5B30"),be(1970,1400,"#806D15"),...Array(e).fill(0).map(Ee)],comments:n}}},Aa=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],Ca=/.(png|jpg|jpeg|gif|bmp|webp)$/i,Ia=(e,n)=>e.localeCompare(n,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function La(e){return Aa.includes(e.type)}const Ta=e=>{const n=new Uint8Array(e),t=new Blob([n.buffer]);return URL.createObjectURL(t)};function _a(e,n){va({title:e,series:"?reload",pages:n.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:n}).then((()=>q("Page loaded")))}async function Ra(e){const n=await async function(e){const n=await JSZip.loadAsync(e),t=n.filter(((e,n)=>!n.dir&&Ca.test(n.name))).sort(((e,n)=>Ia(e.name,n.name)));return q("Files in zip:",n.files),Promise.all(t.map((e=>e.async("arraybuffer").then(Ta))))}(e);_a("string"==typeof e?e:e.name,n)}function Da(e){const n=e.target,t=Array.from(n.files).filter(La).sort(((e,n)=>Ia(e.webkitRelativePath||e.name,n.webkitRelativePath||n.name)));q("Local Files: ",t,t.map((e=>e.webkitRelativePath||e.name))),n.files?.[0]&&_a(n.files[0].webkitRelativePath.split("/")[0]||"Local Images",t.map(URL.createObjectURL))}async function Ba(e,n=1){const t=await e.run();q("LateStart");let a=n,o=t.pages;const i={title:re("STARTING"),html:W`
        ${re("CHOOSE_BEGINNING")}
        <div id="pageInputGroup">
          <div id="pageInputs">
            <input
              type="number"
              id="pageBegin"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${t.pages}"
              value="${a}"
            />
            -
            <input
              type="number"
              id="pageEnd"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${t.pages}"
              value="${o}"
            />
          </div>
          <div id="pagesSlider"></div>
        </div>
      `,showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,icon:"question",didOpen(){const e=document.querySelector("#pageBegin"),n=document.querySelector("#pageEnd"),i=rangeSlider(document.getElementById("pagesSlider"),{min:1,max:t.pages,value:[a,o],onInput(t,i){i&&([a,o]=t,e&&(e.value=a.toString()),n&&(n.value=o.toString()))}});const r=_.debounce((function(){if(""===e.value||""===n.value)return;const t=function(e,n,t){let a=e;return Number.isNaN(a)||a<t.min()?a=t.min():a>t.max()?a=t.max():a>n&&(a=n),a}(parseInt(e.value,10),o,i),r=function(e,n,t){let a=e;return Number.isNaN(a)||a>t.max()?a=t.max():a<t.min()?a=t.min():a<n&&(a=n),a}(parseInt(n.value,10),a,i);e.value=t.toString(),n.value=r.toString(),a=t,o=r,i.value([t,r])}),600);["change","mouseup","keyup","touchend"].forEach((t=>{e?.addEventListener(t,r),n?.addEventListener(t,r)}))}};Swal.fire(i).then((e=>{e.value?(q(`Choice: ${a} - ${o}`),t.begin=a,t.pages=o,va(t).then((()=>q("Page loaded")))):q(e.dismiss)}))}function Na(e,n){const t=document.createElement("button");t.innerText=re("BUTTON_START"),t.id="StartMOV",t.onclick=()=>{Ba(e,n).catch(q)},document.body.appendChild(t);const a=document.createElement("style");a.appendChild(document.createTextNode(ya+Z)),document.head.appendChild(a),q("Start Button added to page",t)}async function Va([e,n]){q(`Found Pages: ${n.pages} in ${e.name}`),n.title||(n.title=document.querySelector("title")?.textContent?.trim()),n.begin=ce()??n.begin??1;const t=document.createElement("style");switch(t.appendChild(document.createTextNode(Ge)),document.body.appendChild(t),unsafeWindow.MOV=(e,t)=>{void 0!==e&&(n.begin=e),void 0!==t&&(n.pages=t),va(n).then((()=>q("Page loaded")))},e.start??ie()?.loadMode){case"never":Na(e,n.begin);break;case"always":va(n).then((()=>q("Page loaded")));break;default:!function(e,n){Swal.fire({title:re("STARTING"),html:W`${n.begin>1?`${re("RESUME")}${n.begin}.<br/>`:""}${re("WAITING")}`,showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,timer:3e3}).then((t=>{t.value||t.dismiss===Swal.DismissReason.timer?va(n).then((()=>q("Page loaded"))):(Na(e,n.begin),q(t.dismiss))}))}(e,n)}}(async function(e){if(q(`Starting ${Q.script.name} ${Q.script.version} on ${function(){let e;const n=/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(navigator.userAgent)??[];if(/trident/i.test(n[1]))return e=/\brv[ :]+(\d+)/g.exec(navigator.userAgent)??[],`IE ${e[1]??""}`;if("Chrome"===n[1]&&(e=/\b(OPR|Edge)\/(\d+)/.exec(navigator.userAgent),null!==e))return e.slice(1).join(" ").replace("OPR","Opera");const t=[n[1],n[2]];return e=/version\/(\d+)/i.exec(navigator.userAgent),null!==e&&t.splice(1,1,e[1]),t.join(" ")}()} with ${Q.scriptHandler??"Greasemonkey"}`),Oa.url.test(window.location.href)&&(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",(e=>{const n=e.target;n.files?.[0]&&Ra(n.files[0])})),document.querySelector("#folder")?.addEventListener("change",Da),document.querySelector("#images")?.addEventListener("change",Da),q("Waiting for zip/images upload")),1))return;q(e.length,"Known Manga Sites:",e);const n=e.filter((e=>e.url.test(window.location.href)));q(n.length,"Found sites:",n);const t=n.map((async e=>(q(`Testing site: ${e.name}`),new Promise(((n,t)=>{Promise.all([Sa(e),ka(e),Ea(e),xa(e),Ma(e)]).then((async()=>e.run())).then((a=>a.pages>0?n([e,a]):t(new Error(`${e.name} found ${a.pages} pages`))))})))));Promise.race(t.map(((e,n)=>e.then((()=>n))))).then((e=>{t.forEach(((t,a)=>{a!==e&&q(`Failed/Skipped: ${n[a].name}`)})),t[e].then((e=>{Va(e)}))}))})(P).catch(q)}();