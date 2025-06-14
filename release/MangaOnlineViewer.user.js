// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewer.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @version       2025.06.11
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/2281/2281832.png
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
// @include       /https?:\/\/(www.)?(asuracomic).(net)\/.+/
// @include       /https?:\/\/(www\.)?(\w(ba)?to|readtoto|batocomic|comiko|battwo|batotoo|batotwo).(to|com|net|org)\/(chapter|title).*/
// @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/
// @include       /https?:\/\/(www\.)?comick.io\/.+/
// @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/
// @include       /https?:\/\/visorikigai.(ajaco|eltanews).(com|net)\/capitulo\/\d+/
// @include       /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/
// @include       /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/
// @include       /https?:\/\/(www\.)?lhtranslation.net\/read.+/
// @include       /(file:\/\/\/.+(index)?.html)/
// @include       /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/
// @include       /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/
// @include       /https?:\/\/(www\.)?mangadex.org/
// @include       /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato).(com|gg).*\/chapter.+/
// @include       /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/
// @include       /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/
// @include       /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/
// @include       /https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/
// @include       /https?:\/\/(www\.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(vortexscans).(org)\/.+/
// @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/
// @include       /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod)[^/]*\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/
// @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www\.)?pururin.io\/.+/
// ==/UserScript==
(function(){"use strict";const Bt={eq:(e,t)=>e.textContent?.trim()===t,starts:(e,t)=>!!e.textContent?.trim()?.startsWith(t),ends:(e,t)=>!!e.textContent?.trim()?.endsWith(t)};function ve(e,t,n){const o=Bt[n];if(!o)throw new Error(`Invalid matcherKey: ${n}`);return[...document.querySelectorAll(e)].filter(r=>Array.isArray(t)?t.some(s=>o(r,s)):o(r,t))}function Ee(e,t,n){return ve(e,t,n)?.[0]}function se(e,t,n,o="a"){return Ee(e,t,n)?.closest(o)??null}const Se=(e,t)=>ve(e,t,"eq"),Dt=(e,t)=>Ee(e,t,"starts"),L=(e,t,n="a")=>se(e,t,"eq",n),Nt=(e,t,n="a")=>se(e,t,"starts",n),Vt=(e,t,n="a")=>se(e,t,"ends",n),$t={name:"Asura Scans",url:/https?:\/\/(www.)?(asuracomic).(net)\/.+/,homepage:"https://asuracomic.net/",language:["English"],category:"manga",waitEle:'img[alt*="chapter"]',waitTime:2e3,run(){const e=[...document.querySelectorAll('img[alt*="chapter"]')];return{title:document.querySelector("h2")?.textContent?.trim(),series:Dt("p","All chapters are in")?.querySelector("a")?.getAttribute("href"),pages:e.length,prev:L("h2","Prev","a")?.getAttribute("href"),next:L("h2","Next","a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")),before(){document.querySelectorAll("button.absolute").forEach(t=>t.dispatchEvent(new Event("click",{bubbles:!0})))}}}},Ft={name:"Batoto",url:/https?:\/\/(www\.)?(\w(ba)?to|readtoto|batocomic|comiko|battwo|batotoo|batotwo).(to|com|net|org)\/(chapter|title).*/,homepage:"https://rentry.co/batoto",language:["English"],category:"manga",waitEle:'div[name="image-item"] img, .page-img',run(){if(window.location.pathname.startsWith("/title")){window.location.search!=="?load=2"&&(window.location.search="?load=2");const t=[...document.querySelectorAll('div[name="image-item"] img')];return{title:document.querySelector("h6")?.textContent?.trim(),series:document.querySelector("h3 a")?.getAttribute("href"),pages:t.length,prev:Vt("span","Prev Chapter","a")?.getAttribute("href"),next:Nt("span","Next Chapter","a")?.getAttribute("href"),listImages:t.map(n=>n.getAttribute("src"))}}const e=[...document.querySelectorAll(".page-img")];return{title:document.querySelector(".nav-title a")?.textContent?.trim(),series:document.querySelector(".nav-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".nav-prev a")?.getAttribute("href"),next:document.querySelector(".nav-next a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src"))}}},zt={name:"BilibiliComics",url:/https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,homepage:"https://www.bilibilicomics.net/",language:["English"],category:"manga",waitEle:"#__NUXT_DATA__",async run(){const t=JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML??"").filter(n=>typeof n=="string"&&/.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(n));return{title:document.querySelector(".chapterTitle")?.textContent?.trim(),series:document.querySelector(".book-name")?.getAttribute("href"),pages:t.length,prev:document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),next:document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),listImages:t.map(n=>`https://static.comicfans.io/${n}`)}}},Gt={name:"Comick",url:/https?:\/\/(www\.)?comick.io\/.+/,homepage:"https://comick.io/",language:["English"],category:"manga",waitFunc(){return/\/([^/]+)-chapter.+$/.test(window.location.pathname)},waitEle:"#__NEXT_DATA__",waitTime:3e3,run(){const e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??"")?.props?.pageProps,t=e?.chapter?.md_images?.map(n=>`https://meo.comick.pictures/${n?.b2key}`);return{title:e?.seoTitle??`${e.chapter?.md_comics?.title} ${e?.chapter?.chap}`,series:`/comic/${e?.chapter?.md_comics?.slug}`,pages:t?.length,prev:e?.prev?.href,next:e?.next?.href,listImages:t}}},Pt={name:"Dynasty-Scans",url:/https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:["English"],category:"manga",run(){return{title:document.querySelector("#chapter-title")?.textContent?.trim(),series:document.querySelector("#chapter-title a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:document.querySelector("#prev_link")?.getAttribute("href"),next:document.querySelector("#next_link")?.getAttribute("href"),listImages:unsafeWindow.pages.map(e=>e.image)}}},Zt={name:["FoOlSlide","Kireicake"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["https://github.com/saintly2k/FoOlSlideX","https://reader.kireicake.com"],language:["English"],obs:"Any Site that uses FoOLSlide",category:"manga",waitEle:"img.open",run(){const e=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],t=e.findIndex(s=>{const l=s.querySelector("a")?.getAttribute("href");return l?window.location.href.startsWith(l):!1}),n=[...document.querySelectorAll(".topbar_right .dropdown li")],o=[...document.querySelectorAll(".inner img:not(.open)")],r=o.length>1?o.length:n.length;return{title:e.at(t)?.querySelector("a")?.textContent?.trim()??document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),pages:r,prev:e.at(t+1)?.querySelector("a")?.getAttribute("href"),next:e.at(t-1)?.querySelector("a")?.getAttribute("href"),listPages:o.length>1?null:Array(r).fill(0).map((s,l)=>`${window.location.href.replace(/\/\d+$/,"")}/${l+1}`),listImages:o.length>1?o.map(s=>s.getAttribute("src")):null,img:"img.open"}}},Wt={name:"Flame Comics",url:/https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,homepage:"https://flamecomics.xyz/",language:["English"],category:"manga",run:function(){const e="https://cdn.flamecomics.xyz/series",t=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??""),n=t?.props?.pageProps?.chapter,o=Object.keys(n?.images).map(r=>`${e}/${n?.series_id}/${n?.token}/${n?.images?.[r]?.name}`);return{title:`${n?.title} ${n?.chapter}`,series:`../${n?.series_id}`,pages:o.length,prev:t?.props?.pageProps?.previous,next:t?.props?.pageProps?.next,listImages:o}}},Ht={name:["Ikigai Mangas - EltaNews","Ikigai Mangas - Ajaco"],url:/https?:\/\/visorikigai.(ajaco|eltanews).(com|net)\/capitulo\/\d+/,homepage:["https://visorikigai.eltanews.com/","https://visorikigai.ajaco.net/"],language:["Spanish"],category:"manga",run(){const e=document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi);return{title:document.querySelector("title")?.text.replace(" \u2014 Manga en l\xEDnea | MangaOni",""),pages:e?.length,prev:L("span","Siguiente")?.getAttribute("href"),next:L("span","Anterior")?.getAttribute("href"),listImages:e}}},qt={name:"KuManga",url:/https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,homepage:"https://www.kumanga.com/",language:["Spanish"],category:"manga",run(){const e=document.querySelectorAll("select").item(1).querySelector("option[selected]");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h2 a")?.getAttribute("href"),pages:unsafeWindow.pUrl.length,prev:`/manga/leer/${e?.previousElementSibling?.getAttribute("value")}`,next:`/manga/leer/${e?.nextElementSibling?.getAttribute("value")}`,listImages:unsafeWindow.pUrl.map(t=>t.imgURL)}}},Ut={name:"LeerCapitulo",url:/https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,homepage:"https://www.leercapitulo.co/",language:["Spanish"],category:"manga",waitEle:"#page_select",run(){const e=[...document.querySelectorAll("#page_select option")].map(t=>t.getAttribute("value"));return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(".chapter-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".pre")?.getAttribute("href"),next:document.querySelector(".next")?.getAttribute("href"),listImages:e}}},jt={name:"LHTranslation",url:/https?:\/\/(www\.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:["English"],category:"manga",run(){const e=document.querySelector(".form-control option:checked"),t=[...document.querySelectorAll("img.chapter-img")];return{title:document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),series:document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(n=>n.getAttribute("src"))}}},ke=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),g=ke,xe=ke,y={dark:{name:"dark",50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113"},gray:{name:"gray",50:"#f8f9fa",100:"#f1f3f5",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#868e96",700:"#495057",800:"#343a40",900:"#212529"},red:{name:"red",50:"#fff5f5",100:"#ffe3e3",200:"#ffc9c9",300:"#ffa8a8",400:"#ff8787",500:"#ff6b6b",600:"#fa5252",700:"#f03e3e",800:"#e03131",900:"#c92a2a"},pink:{name:"pink",50:"#fff0f6",100:"#ffdeeb",200:"#fcc2d7",300:"#faa2c1",400:"#f783ac",500:"#f06595",600:"#e64980",700:"#d6336c",800:"#c2255c",900:"#a61e4d"},grape:{name:"grape",50:"#f8f0fc",100:"#f3d9fa",200:"#eebefa",300:"#e599f7",400:"#da77f2",500:"#cc5de8",600:"#be4bdb",700:"#ae3ec9",800:"#9c36b5",900:"#862e9c"},violet:{name:"violet",50:"#f3f0ff",100:"#e5dbff",200:"#d0bfff",300:"#b197fc",400:"#9775fa",500:"#845ef7",600:"#7950f2",700:"#7048e8",800:"#6741d9",900:"#5f3dc4"},indigo:{name:"purple",50:"#edf2ff",100:"#dbe4ff",200:"#bac8ff",300:"#91a7ff",400:"#748ffc",500:"#5c7cfa",600:"#4c6ef5",700:"#4263eb",800:"#3b5bdb",900:"#364fc7"},blue:{name:"blue",50:"#e7f5ff",100:"#d0ebff",200:"#a5d8ff",300:"#74c0fc",400:"#4dabf7",500:"#339af0",600:"#228be6",700:"#1c7ed6",800:"#1971c2",900:"#1864ab"},cyan:{name:"cyan",50:"#e3fafc",100:"#c5f6fa",200:"#99e9f2",300:"#66d9e8",400:"#3bc9db",500:"#22b8cf",600:"#15aabf",700:"#1098ad",800:"#0c8599",900:"#0b7285"},teal:{name:"teal",50:"#e6fcf5",100:"#c3fae8",200:"#96f2d7",300:"#63e6be",400:"#38d9a9",500:"#20c997",600:"#12b886",700:"#0ca678",800:"#099268",900:"#087f5b"},green:{name:"green",50:"#ebfbee",100:"#d3f9d8",200:"#b2f2bb",300:"#8ce99a",400:"#69db7c",500:"#51cf66",600:"#40c057",700:"#37b24d",800:"#2f9e44",900:"#2b8a3e"},lime:{name:"lime",50:"#f4fce3",100:"#e9fac8",200:"#d8f5a2",300:"#c0eb75",400:"#a9e34b",500:"#94d82d",600:"#82c91e",700:"#74b816",800:"#66a80f",900:"#5c940d"},yellow:{name:"yellow",50:"#fff9db",100:"#fff3bf",200:"#ffec99",300:"#ffe066",400:"#ffd43b",500:"#fcc419",600:"#fab005",700:"#f59f00",800:"#f08c00",900:"#e67700"},orange:{name:"orange",50:"#fff4e6",100:"#ffe8cc",200:"#ffd8a8",300:"#ffc078",400:"#ffa94d",500:"#ff922b",600:"#fd7e14",700:"#f76707",800:"#e8590c",900:"#d9480f"},darkblue:{name:"darkblue",50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"}},Qt=10,Yt=95;function Xt(e,t){return e.l=t,tinycolor(e).toHexString()}function Kt(e){const t=tinycolor(e),n=t.toHsl();return Xt(n,t.isDark()?Yt:Qt)}function D(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}const H=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function Jt(e,t,n,o){let r="";for(let s=0;s<=e;s+=5){const l=g` <line x1="${s}" y1="0" x2="${s}" y2="${H(s)}" />`;if(r+=l,s!==0&&s%50===0){const m=g` <text
          x="${s}"
          y="25"
          text-anchor="middle"
          font-size="${H(s)}px"
        >
          ${s}
        </text>`;r+=m}}for(let s=0;s<=t;s+=5){const l=g` <line x1="0" y1="${s}" x2="${H(s)}" y2="${s}" />`;if(r+=l,s!==0&&s%50===0){const m=g` <text
          x="25"
          y="${s}"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="${H(s)}px"
        >
          ${s}
        </text>`;r+=m}}return g` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${e}"
      height="${t}"
      viewBox="0 0 ${e} ${t}"
    >
      <rect width="${e}" height="${t}" fill="${n}" />
      <text
        fill="${o}"
        font-family="Verdana, Arial, Helvetica, sans-serif"
        font-size="30"
        dy="10.5"
        font-weight="bold"
        x="50%"
        y="50%"
        text-anchor="middle"
      >
        ${e}x${t}
      </text>
      <g
        stroke-width="1"
        font-family="Verdana, Arial, Helvetica, sans-serif"
        font-size="10px"
        font-weight="100"
        fill="${o}"
        stroke="${o}"
      >
        ${r}
      </g>
    </svg>`}function T(e,t,n="#0F1C3F",o="#ECEAD9"){const r=Jt(e,t,n,o);return D(r)}const Me=Object.values(y).map(e=>e[900]),Oe=[400,600,900,1200,1400,1600,1970],Ae=[600,800,1e3,1200,1400,2e3,2600];function en(){const e=Math.floor(Math.random()*Oe.length),t=Math.floor(Math.random()*Ae.length),n=Math.floor(Math.random()*Me.length);return T(Oe[e],Ae[t],Me[n])}const Ce={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:["Raw"],category:"manga",run(){const e=parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10),t=document.createElement("div");return t.innerHTML=Array(100).fill("Testing Comment<br/>").join(""),{title:"Placeholder Manga Loaded",series:"?reload",pages:e,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[T(1970,1400,"#2D1657"),T(985,1400,"#152C55"),T(985,1400,"#7A1420"),T(985,1400,"#0F5B30"),T(1970,1400,"#806D15"),...Array(e).fill(0).map(en)],comments:t}}},tn={name:"M440",url:/https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,homepage:"https://m440.in/",language:["Spanish"],category:"manga",run(){const e=[...document.querySelectorAll("#all img")],t=document.querySelector("#chapter-list li.active");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.firstElementChild?.getAttribute("href"),next:t?.previousElementSibling?.firstElementChild?.getAttribute("href"),listImages:e.map(n=>n.getAttribute("data-src"))}}},Ie=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function Le(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>[...e.attributes].filter(t=>/.*(src|url).*/i.test(t.name)&&!/^.*(blank|lazy|load).*$/.test(t.value)).find(t=>Ie.test(t.value))?.value??e?.getAttribute("src"))}const nn=[$t,Ft,zt,Gt,Pt,Wt,Ht,qt,Ut,jt,Ce,tn,{name:"MangaBuddy",url:/https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,homepage:"https://mangabuddy.com/",language:["English"],category:"manga",waitVar:"chapImages",run(){const e=unsafeWindow.chapImages.split(",").map(t=>new URL(t).pathname.replace("/res/","https://sb.mbcdn.xyz/"));return{title:document.querySelector(".chapter-info")?.textContent?.trim(),series:document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("a.prev")?.getAttribute("href"),next:document.querySelector("a.next")?.getAttribute("href"),listImages:e}}},{name:"MangaDemon",url:/https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/,homepage:"https://demonicscans.org/",language:["English"],category:"manga",run(){const e=[...document.querySelectorAll(".imgholder")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h1 a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prevchap")?.getAttribute("href"),next:document.querySelector(".nextchap")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")||t.getAttribute("src"))}}},{name:"MangaDex",url:/https?:\/\/(www\.)?mangadex.org/,homepage:"https://mangadex.org/",language:["English"],category:"manga",waitEle:"#chapter-selector a",async run(){const t=`https://api.mangadex.org/at-home/server/${/\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1)}`,n=await fetch(t).then(async s=>s.json()),o=n.chapter.data,r=document.querySelectorAll("#chapter-selector a");return{title:document.querySelector("title")?.text.replace(" - MangaDex",""),series:document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),pages:o.length,prev:r?.item(0)?.getAttribute("href"),next:r?.item(1)?.getAttribute("href"),listImages:o.map(s=>`${n.baseUrl}/data/${n.chapter.hash}/${s}`)}}},{name:["MangaFox","MangaHere"],url:/https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:["English"],category:"manga",waitVar:"chapterid",async run(){const e=document.querySelector("#dm5_key")?.getAttribute("value"),t={method:"GET",headers:{"Content-Type":"text/plain"}},n=Array(unsafeWindow.imagecount).fill(0).map(async(r,s)=>{const l=`chapterfun.ashx?cid=${unsafeWindow.chapterid??unsafeWindow.chapter_id}&page=${s}&key=${e}`,m=await fetch(l,t).then(async b=>b.text());return(0,eval)(m),d}),o=await Promise.all(n);return{title:document.querySelector(".reader-header-title div")?.textContent?.trim(),series:document.querySelector(".reader-header-title a")?.getAttribute("href"),pages:unsafeWindow.imagecount,prev:unsafeWindow.prechapterurl,next:unsafeWindow.nextchapterurl,listImages:o.map((r,s)=>r[s===0?0:1])}}},{name:"Mangago",url:/https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,homepage:"https://www.mangago.me/",language:["English"],category:"manga",waitVar:"imgsrcs",run(){const e=CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e"),n={iv:CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef"),padding:CryptoJS.pad.ZeroPadding},o=CryptoJS.AES.decrypt(unsafeWindow.imgsrcs,e,n).toString(CryptoJS.enc.Utf8).split(",");return{title:`${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,series:unsafeWindow.mid,pages:unsafeWindow.total_pages,prev:document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),next:unsafeWindow.next_c_url,listImages:o,before(){o.some(r=>r==="")&&document.querySelector("#nform")?.submit()}}}},{name:"MangaHub",url:/https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:["English"],category:"manga",waitEle:"#select-chapter",async run(){function e(m){const u=new RegExp(`${m}=([^;]+)`).exec(document.cookie);return u!=null?decodeURIComponent(u[1]):null}const t=unsafeWindow.CURRENT_MANGA_SLUG??window.location.pathname.split("/")[2],n=window.location.pathname.split("/")[3].replace("chapter-",""),o={query:`{chapter(x:m01,slug:"${t}",number:${n}){pages}}`},r={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json","x-mhub-access":e("mhub_access")??""}},s=await fetch("https://api.mghcdn.com/graphql",r).then(async m=>m.json()),l=JSON.parse(s?.data.chapter.pages.toString());return{title:document.querySelector("#mangareader h3")?.textContent?.trim(),series:document.querySelector("#mangareader a")?.getAttribute("href"),pages:l.i.length,prev:document.querySelector(".previous a")?.getAttribute("href"),next:document.querySelector(".next a")?.getAttribute("href"),listImages:l.i.map(m=>`https://imgx.mghcdn.com/${l.p+m}`)}}},{name:["MangaKakalot","NeloManga ","MangaNato","Natomanga"],url:/https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato).(com|gg).*\/chapter.+/,homepage:["https://mangakakalot.gg/","https://www.nelomanga.com/","https://www.manganato.gg/","https://www.natomanga.com/"],language:["English"],category:"manga",run(){const e=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1")?.textContent?.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:e.length,prev:document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),next:document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src"))}}},{name:"MangaOni",url:/https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,homepage:"https://manga-oni.com/",language:["Spanish"],category:"manga",run(){document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));const e=document.querySelector("#c_list option:checked"),t=[...document.querySelectorAll("#slider img")];return{title:document.querySelector("title")?.text.replace(" \u2014 Manga en l\xEDnea | MangaOni",""),pages:t?.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(n=>n.getAttribute("data-src")??n.getAttribute("src"))}}},{name:"Mangareader",url:/https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:["English"],category:"manga",obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",async run(){const e=document.querySelector(".chapter-item.active"),n=[...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")].map(async o=>{const r=o.getAttribute("data-url");return r&&o.classList.contains("shuffled")?(await imgReverser(r)).toDataURL():r});return{title:document.querySelector(".hr-manga h2")?.textContent?.trim(),series:document.querySelector(".hr-manga")?.getAttribute("href"),pages:n.length,prev:e?.nextElementSibling?.querySelector("a")?.getAttribute("href"),next:e?.previousElementSibling?.querySelector("a")?.getAttribute("href"),listImages:await Promise.all(n)}}},{name:"MangaToons",url:/https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,homepage:"https://mangatoon.mobi/",language:["English"],category:"manga",waitEle:".pictures img:not(.cover)",run(){const e=[...document.querySelectorAll(".pictures img:not(.cover)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".top-left a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".page-icons-prev")?.getAttribute("href"),next:document.querySelector(".page-icons-next")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src"))}}},{name:"ManhwaWeb",url:/https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,homepage:"https://manhwaweb.com/",language:["Spanish"],category:"manga",async run(){const e=window.location.pathname.replace("/leer",""),t=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/see${e}`).then(async o=>o.json()),n=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${e}`).then(async o=>o.json());return{title:`${t.name} ${t.chapter.chapter}`,series:[...document.querySelectorAll("div")].filter(o=>o.textContent==="Episodios")?.[0]?.parentElement?.getAttribute("href"),pages:t.chapter.img.length,prev:n.chapterAnterior,next:n.chapterSiguiente,listImages:t.chapter.img}}},{name:["MangaGeko.com","MangaGeko.cc"],url:/https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,homepage:["https://www.mgeko.com/","https://www.mgeko.cc/"],language:["English"],category:"manga",run(){const e=[...document.querySelectorAll("#chapter-reader img")];return{title:document.querySelector(".titles")?.textContent?.trim(),series:document.querySelector(".titles a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".chnav.prev")?.getAttribute("href"),next:document.querySelector(".chnav.next")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src"))}}},{name:"OlympusBiblioteca",url:/https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/,homepage:"https://olympusbiblioteca.com/",language:["Spanish"],category:"manga",run(){const e=[...document.querySelectorAll("section img.w-full.h-full")];return{title:document.querySelector("title")?.textContent?.replace(/\|.+/,"").trim(),series:document.querySelector("h1")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector('a[name="capitulo anterior"]')?.getAttribute("href"),next:document.querySelector('a[name="capitulo siguiente"]')?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src"))}}},{name:"ReadComicsOnline",url:/https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:["English"],category:"comic",run(){const e=[...document.querySelectorAll("#all img")];return{title:unsafeWindow.title.replace(/ - Page \d+/,""),series:document.querySelector("div.pager-cnt a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:unsafeWindow.prev_chapter,next:unsafeWindow.next_chapter,listImages:e.map(t=>t.getAttribute("data-src"))}}},{name:"ReaperScans",url:/https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,homepage:"https://reaperscans.com/",language:["English"],category:"manga",waitEle:"#content .container img:not(.rounded)",run(){const e=[...document.querySelectorAll("#content .container img:not(.rounded)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")||t.getAttribute("src"))}}},{name:"TuMangaOnline",url:/https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/,homepage:"https://lectortmo.com/",language:["Spanish"],category:"manga",run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option")],n=e.length>1?e.length:t.length;return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector('a[title="Volver"]')?.getAttribute("href"),pages:n,prev:document.querySelector(".chapter-prev a")?.getAttribute("href"),next:document.querySelector(".chapter-next a")?.getAttribute("href"),...e.length>1?{listImages:e.map(o=>$(o).attr("data-src"))}:{listPages:Array(t.length).fill(0).map((o,r)=>`${window.location.href.replace(/\/\d+$/,"")}/${r+1}`),img:"#viewer-container img, .viewer-page"}}}},{name:"WebNovel",url:/https?:\/\/(www\.)?webnovel.com\/comic\/.+/,homepage:"https://www.webnovel.com/",language:["English"],category:"manga",waitVar:"g_data",run(){const e=unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.trim(),series:"./",pages:e.length,prev:`${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,next:`${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,listImages:e}}},{name:"WebToons",url:/https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,homepage:"https://www.webtoons.com/",language:["English"],category:"manga",run(){const e=[...document.querySelectorAll("#_imageList img")];return{title:document.querySelector(".subj_info")?.textContent?.trim(),series:document.querySelector(".subj_info a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("._prevEpisode")?.getAttribute("href"),next:document.querySelector("._nextEpisode")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-url")??t.getAttribute("data-src")??t.getAttribute("src"))}}},{name:"WeebCentral",url:/https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,homepage:"https://weebcentral.com/",language:["English"],category:"manga",waitEle:"main section .maw-w-full",async run(){const e=[...document.querySelectorAll("main section .maw-w-full")].map(r=>r.getAttribute("src")),t=await fetch(document.querySelector("main section a + button")?.getAttribute("hx-get")??"").then(r=>r.text()),o=new DOMParser().parseFromString(t,"text/html");return{title:document.querySelector("title")?.textContent?.replace(/ | .+/,"").trim(),series:document.querySelector("main section a")?.getAttribute("href"),pages:e.length,prev:o.querySelector("#selected_chapter")?.nextElementSibling?.getAttribute("href"),next:o.querySelector("#selected_chapter")?.previousElementSibling?.getAttribute("href"),listImages:e}}},{name:"Vortex Scans",url:/https?:\/\/(www.)?(vortexscans).(org)\/.+/,homepage:"https://vortexscans.org/",language:["English"],category:"manga",waitVar:"__next_f",waitFunc(){return unsafeWindow.__next_f.find(e=>/images/.test(e?.[1]))?.length>0},run(){const e=unsafeWindow.__next_f.find(n=>/images/.test(n?.[1]))?.[1],t=e.slice(e.indexOf("images")).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g);return{title:document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),series:document.querySelector("time")?.closest("a")?.getAttribute("href"),pages:t?.length,prev:L("button","Prev","a")?.getAttribute("href"),next:L("button","Next","a")?.getAttribute("href"),listImages:t}}},{name:"ZeroScans",url:/https?:\/\/(www\.)?zscans.com\/comics\/.+/,homepage:"https://zscans.com/",language:["English"],category:"manga",waitVar:"__ZEROSCANS__",run(){const e=unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,t=document.querySelectorAll(".v-btn--router");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),pages:e.length,prev:t[0]?.getAttribute("href"),next:t[1]?.getAttribute("href"),listImages:e}}},{name:["MangaStream WordPress Plugin","Realm Oasis","Voids-Scans","Luminous Scans","Shimada Scans","Night Scans","Manhwa-Freak","OzulScansEn","CypherScans","MangaGalaxy","LuaScans","Drake Scans","Rizzfables","NovatoScans","TresDaos","Lectormiau","NTRGod"],url:/https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod)[^/]*\/.+/,homepage:["https://themesia.com/mangastream-wordpress-theme/","https://realmoasis.com/","https://void-scans.com/","https://luminous-scans.com/","https://shimadascans.com/","https://night-scans.com/","https://freakcomic.com/","https://ozulscansen.com/","https://cypherscans.xyz/","https://mangagalaxy.me/","https://luascans.com/","https://drake-scans.com/","https://rizzfables.com/","https://www.novatoscans.top/","https://tresdaos.com","https://zonamiau.com/","https://ntrgod.com/"],language:["English","Spanish"],category:"manga",waitEle:":where(#chapter, #nPL_select) option:nth-child(2)",run(){const e=[...document.querySelectorAll(':where(#readerarea, .check-box) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"])')];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(":where(.allc, .tac) a")?.getAttribute("href")??document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),pages:e.length,prev:Se(":where(.nextprev, .inner_nPL) a",["Prev","Anterior"])?.[0]?.getAttribute("href"),next:Se(":where(.nextprev, .inner_nPL) a",["Next","Siguiente"])?.[0]?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-lazy-src")??t.getAttribute("src"))}}},Zt,{name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/"],language:["English"],obs:"Any Site that uses Madara WordPress Plugin",category:"manga",waitFunc:()=>{const e=Le();return e.length>0&&e.every(t=>t&&Ie.test(t))},run(){const e=Le();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}}],on=".range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px rgba(33,150,243,.5)}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translate(0,-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%,0)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}";function c(...e){return console.log("MangaOnlineViewer: ",...e),e}const an=e=>t=>c(e,t)[1];function rn(){return typeof GM_listValues<"u"?GM_listValues():[]}function sn(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):c("Removing: ",e)}const le=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function ln(e,t=null){return typeof GM_getValue<"u"?GM_getValue(e,t):(c("Fake Getting: ",e," = ",t),t)}function cn(e,t=null){const n=ln(e,t);return typeof n=="string"?JSON.parse(n):n}function Te(e){return cn("settings",e)}function dn(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),t.toString()):(c("Fake Setting: ",e," = ",t),String(t))}function mn(e){return dn("settings",e)}function un(){let e;const t=/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(navigator.userAgent)??[];if(/trident/i.test(t[1]))return e=/\brv[ :]+(\d+)/g.exec(navigator.userAgent)??[],`IE ${e[1]??""}`;if(t[1]==="Chrome"&&(e=/\b(OPR|Edge)\/(\d+)/.exec(navigator.userAgent),e!==null))return e.slice(1).join(" ").replace("OPR","Opera");const n=[t[1],t[2]];return e=/version\/(\d+)/i.exec(navigator.userAgent),e!==null&&n.splice(1,1,e[1]),n.join(" ")}function gn(){return le.scriptHandler??"Greasemonkey"}const pn=bowser.getParser(window.navigator.userAgent),R=()=>{const e=pn.getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},hn=()=>R()==="mobile"||R()==="tablet",wn=e=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener("settings",(t,n,o,r)=>{r&&e(o)})}finally{}return c("Using Interval Settings Change Listener"),setInterval(()=>{e(Te())},1e4)},_e=(e,t)=>{const n=(o,r)=>_.transform(o,(s,l,m)=>{_.isEqual(l,r[m])||(_.isArray(l)?s[m]=_.difference(l,r[m]):_.isObject(l)&&_.isObject(r[m])?s[m]=n(l,r[m]):s[m]=l)});return n(e,t)},q=[{ID:"en_US",NAME:"English (US)",STARTING:"Starting<br>Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_HUE:"Theme Primary Color Hue",THEME_SHADE:"Theme Primary Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed Pages/Second",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Left to Right",VIEW_MODE_RIGHT:"Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",ENABLE_COMMENTS:"Capture Comments (When available)",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from:<h4>Page ##num##</h4>(Only <i>ONCE</i> per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
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
  `,ATTENTION:"\u6CE8\u610F",WARNING:"\u8B66\u544A",BUTTON_RESET_SETTINGS:"\u91CD\u7F6E\u8BBE\u7F6E(Reset Settings)",SETTINGS_RESET:"\u8BBE\u7F6E\u5DF2\u91CD\u7F6E\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",LANGUAGE_CHANGED:"\u8BED\u8A00\u5DF2\u66F4\u6539\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",AUTO_DOWNLOAD:"\u4E0B\u6B21\u7AE0\u8282\u52A0\u8F7D\u5B8C\u6210\u65F6\u3001\u7CFB\u7EDF\u5C06\u63D0\u793A\u60A8\u81EA\u52A8\u4FDD\u5B58",LAZY_LOAD:"\u5EF6\u8FDF\u52A0\u8F7D\u4E0Ezip\u4E0B\u8F7D\u4E0D\u517C\u5BB9\u3001\u60A8\u5C06\u65E0\u6CD5\u4F7F\u7528\u6B64\u8BBE\u7F6E\u4E0B\u8F7D.<br/> \u5EFA\u8BAE: <span style='color:red;font-weight:bold'>\u7981\u7528\u7F29\u7565\u56FE</span> \u4EE5\u8282\u7701\u6D41\u91CF\u548C\u5185\u5B58.",LAZY_LOAD_IMAGES_ENABLE:"\u542F\u7528\u5EF6\u8FDF\u52A0\u8F7D\u56FE\u50CF",LAZY_LOAD_IMAGES:"\u60F0\u6027\u52A0\u8F7D\u4ECE\u9875\u9762 (\u6700\u5C0F 5 \u6700\u5927 100)",RETURN_CHAPTER_LIST:"\u8FD4\u56DE\u7AE0\u8282\u5217\u8868",PAGES_LOADED:"\u5DF2\u52A0\u8F7D\u7684\u9875\u6570",GO_TO_PAGE:"\u8F6C\u5230\u9875\u6570",ENLARGE:"\u653E\u5927",RESTORE:"\u8FD8\u539F",REDUCE:"\u7F29\u5C0F",FIT_WIDTH:"\u9002\u5408\u5BBD\u5EA6",FIT_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",PERCENT:"\u767E\u5206\u4E4B",TOGGLE_CONTROLS:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",ZOOM_IN:"\u653E\u5927",ZOOM_OUT:"\u7F29\u5C0F",ZOOM_RESET:"\u8FD8\u539F",ZOOM_WIDTH:"\u9002\u5408\u5BBD\u5EA6",ZOOM_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",HIDE:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",RELOAD:"\u91CD\u65B0\u52A0\u8F7D",SLOWLY:"\u6162\u901F",NORMAL:"\u6B63\u5E38",FAST:"\u5FEB\u901F",EXTREME:"\u6781\u7AEF",ALL_PAGES:"\u6240\u6709\u9875\u9762",SPEED_WARNING:"\u52A0\u8F7D\u901F\u5EA6\u8FC7\u9AD8",SPEED_WARNING_MESSAGE:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u6B64\u901F\u5EA6.<br>\u5B83\u53EF\u80FD\u4F1A\u4F24\u5BB3\u67D0\u4E9B\u670D\u52A1\u5668\u6216\u5C06\u60A8\u7684 IP \u6807\u8BB0\u4E3A DDoS \u653B\u51FB\u8005.<br>\u8BF7\u8C28\u614E\u4F7F\u7528!",SCROLL_UP:"\u5411\u4E0A\u6EDA\u52A8",SCROLL_DOWN:"\u5411\u4E0B\u6EDA\u52A8",CLOSE:"\u5173\u95ED",LIST_EMPTY:"\u6CA1\u6709\u6536\u85CF\u4E66\u7B7E",DISPLAY_COMMENTS:"\u663E\u793A\u6CE8\u91CA",COMMENTS:"\u8BC4\u8BBA\u90E8\u5206",SCROLL_START:"\u5207\u6362\u81EA\u52A8\u6EDA\u52A8",AUTO_SCROLL_HEIGHT:"\u81EA\u52A8\u6EDA\u52A8\u901F\u5EA6\uFF08\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\uFF09",VERTICAL_SEPARATOR:"\u663E\u793A\u5782\u76F4\u5206\u9694\u7B26",END:"\u7ED3\u5C3E"}];function Re(e){return e===null||typeof e>"u"||e===void 0||typeof e=="string"&&e===""||Array.isArray(e)&&e.length===0||typeof e=="object"&&Object.keys(e).length===0}function M(e){const t=n=>Array.isArray(n)?!n.some(o=>o instanceof Promise||!M(o)):Object.keys(n).some(r=>!M(n[r]))?!1:t(Object.keys(n));return!e||e===0||Re(e)||typeof e=="object"&&t(e)}const Be={locale:"en_US",theme:"darkblue",customTheme:"#263e3a",themeShade:600,colorScheme:"dark",fitWidthIfOversize:!0,showThumbnails:!0,enableComments:!0,downloadZip:!1,verticalSeparator:!1,throttlePageLoad:1e3,zoomMode:"percent",defaultZoom:100,zoomStep:25,minZoom:30,loadMode:"wait",viewMode:"WebComic",bookmarks:[],lazyLoadImages:!1,lazyStart:50,hidePageControls:!1,header:"hover",maxReload:5,scrollHeight:20,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],SCROLL_START:["space"]}},N=()=>hn()?_.defaultsDeep({lazyLoadImages:!0,fitWidthIfOversize:!0,showThumbnails:!1,viewMode:"WebComic",header:"click"},Be):Be;let O=_.defaultsDeep(Te(N()),N());wn(e=>{const t=_.defaultsDeep(e,N()),n=_e(t,O);M(n)||(c("Imported Settings",n),O=t,document.getElementById("MangaOnlineViewer")?.dispatchEvent(new Event("hydrate")))});function a(){return O}function i(e){const t=q.find(n=>n.ID===O.locale);return t?.[e]?t[e]:q?.at(1)?.[e]?q[1][e]:"##MISSING_STRING##"}function w(e){c(JSON.stringify(e)),O={...O,...e},mn(_e(O,N()))}function bn(){rn().forEach(e=>{sn(e)}),w(N())}function V(e=window.location.href){return O.bookmarks.find(t=>t.url===e)?.page}const fn=1e3*60*60*24*30*12,De=O.bookmarks.filter(e=>Date.now()-new Date(e.date).valueOf()<fn);O.bookmarks.length!==De.length&&w({bookmarks:De});const yn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
  <path d="M18 4v17" />
  <path d="M15 18l3 3l3 -3" />
</svg>


`,Ne=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />
  <path d="M18 14v7" />
  <path d="M18 3v7" />
  <path d="M15 18l3 3l3 -3" />
  <path d="M15 6l3 -3l3 3" />
</svg>


`,vn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
  <path d="M20 18h-17" />
  <path d="M6 15l-3 3l3 3" />
</svg>


`,En=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />
  <path d="M4 18h17" />
  <path d="M18 15l3 3l-3 3" />
</svg>


`,Ve=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
  <path d="M10 18h-7" />
  <path d="M21 18h-7" />
  <path d="M6 15l-3 3l3 3" />
  <path d="M18 15l3 3l-3 3" />
</svg>


`,Sn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
</svg>


`,kn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
</svg>


`,$e=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
</svg>


`,Fe=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897" />
  <path d="M3 3l18 18" />
</svg>


`,xn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
  <path d="M11 3h5a3 3 0 0 1 3 3v11" />
</svg>


`,Mn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4h6v6h-6z" />
  <path d="M14 4h6v6h-6z" />
  <path d="M4 14h6v6h-6z" />
  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
</svg>


`,ze=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l5 5l10 -10" />
</svg>


`,On=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 4l0 4l-6 0l0 -4" />
</svg>


`,An=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
  <path d="M11 13l9 -9" />
  <path d="M15 4h5v5" />
</svg>


`,Cn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
</svg>


`,In=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
  <path d="M3 3l18 18" />
</svg>


`,Ln=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M12 17v-6" />
  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
</svg>


`,Tn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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


`,_n=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 6h9" />
  <path d="M11 12h9" />
  <path d="M12 18h8" />
  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
  <path d="M6 10v-6l-2 2" />
</svg>


`,Rn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3a9 9 0 1 0 9 9" />
</svg>


`,Bn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg>


`,Dn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9h8" />
  <path d="M8 13h6" />
  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
</svg>


`,Ge=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>


`,Pe=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>


`,Nn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg>


`,Ze=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 8h.01" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
</svg>


`,Vn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24"
     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
     stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 8h.01"/>
    <path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/>
    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/>
    <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/>
    <path d="M3 3l18 18" color="orange"/>
</svg>


`,$n=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
</svg>


`,Fn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
</svg>


`,zn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />
  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M16 12h-8" />
</svg>


`,We=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>


`,Gn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>


`,U=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>


`,Pn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M8 8l4 4" />
  <path d="M12 8l-4 4" />
  <path d="M21 21l-6 -6" />
</svg>


`,Zn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M10 7l0 6" />
  <path d="M21 21l-6 -6" />
</svg>


`,Wn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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


`,Hn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M21 21l-6 -6" />
</svg>


`,qn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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


`,Un=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 17l-2.5 -2.5" />
  <path d="M10 5l2 -2l2 2" />
  <path d="M19 10l2 2l-2 2" />
  <path d="M5 10l-2 2l2 2" />
  <path d="M10 19l2 2l2 -2" />
</svg>


`,jn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4v16l13 -8z" />
</svg>


`,Qn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
</svg>


`,Yn=xe`
    :root,
    .dark {
      --theme-body-background: ${y.dark[600]};
      --theme-body-text-color: ${y.dark[50]};
      --theme-text-color: ${y.dark[50]};
      --theme-primary-color: ${y.dark[700]};
      --theme-primary-text-color: ${y.dark[50]};
      --theme-background-color: ${y.dark[600]};
      --theme-hightlight-color: ${y.dark[500]};
      --theme-border-color: ${y.dark[400]};
    }

    .light {
      --theme-body-background: ${y.gray[50]};
      --theme-body-text-color: ${y.gray[900]};
      --theme-text-color: ${y.gray[900]};
      --theme-primary-color: ${y.gray[300]};
      --theme-primary-text-color: ${y.gray[900]};
      --theme-background-color: ${y.gray[50]};
      --theme-hightlight-color: ${y.gray[500]};
      --theme-border-color: ${y.gray[100]};
    }

    #MangaOnlineViewer .PageContent .PageImg[src=''],
    #MangaOnlineViewer .PageContent .PageImg:not([src]) {
      background-image: url('${D(Ze)}');
    }

    #MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],
    #MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
      background-image: url('${D(Ze)}');
    }

    #MangaOnlineViewer .PageContent .PageImg.imgBroken,
    #MangaOnlineViewer .Thumbnail .ThumbnailImg.imgBroken {
      background-image: url('${D(Vn)}');
    }

    #MangaOnlineViewer .ThemeRadio.custom {
      /*background-image: url("${D(Pe)}");*/
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
  `;function Xn(e,t){const n=document.createElement("style");return n.id=e,n.appendChild(document.createTextNode(t)),n}function Kn(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(Xn(e,t))}function Jn(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function j(e,t){Jn(e),Kn(e,t)}function F(e,t){return g`
      <style type="text/css" id="${e}">
        ${t}
      </style>
    `}function He(e,t,n){return xe`
      .ThemeRadio.${e}, #MangaOnlineViewer[data-theme='${e}'] {
        --theme-primary-color: ${t};
        --theme-primary-text-color: ${n};
      }
    `}function qe(e){return He(e.name,e[a().themeShade],a().themeShade<500?e[900]:e[50])}function ce(e){return He("custom",e,Kt(e))}function eo(e){return F(e.name,qe(e))}function to(e){j("custom",ce(e))}const Ue=()=>Object.values(y);function no(){Ue().forEach(e=>{j(e.name,qe(e))}),j("custom",ce(a().customTheme))}const oo=Ue().map(eo).join("")+F("custom",ce(a().customTheme)),je=[`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`);function ao(e){return g`
      <title>${e.title}</title>
      <meta charset="UTF-8" />
      ${F("externals",je)} ${F("reader",Yn)} ${oo}
      ${F("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${a().minZoom}vw;}`)}
    `}const ro=()=>q.map(e=>g`
          <option value="${e.ID}" ${a().locale===e.ID?"selected":""}>
            ${e.NAME}
          </option>
        `).join(""),io=()=>[...Object.keys(y).map(e=>y[e].name)].map(e=>g`
          <span
            title="${e}"
            class="${e} ThemeRadio ${a().theme===e?"selected":""}"
          >
            ${ze}
          </span>
        `).join(""),so=g` <div class="ControlLabel locale">
    ${i("LANGUAGE")}
    <select id="locale">
      ${ro()}
    </select>
  </div>`,lo=g`
    <div id="ThemeSection">
      <div class="ControlLabel ColorSchemeSelector">
        ${i("COLOR_SCHEME")}
        <button id="ColorScheme" class="ControlButton">${We} ${Ge}</button>
      </div>
      <div class="ControlLabel ThemeSelector">
        ${i("THEME")}
        <span
          class="custom ThemeRadio 
        ${a().theme==="custom"?"selected":""}"
          title="custom"
        >
          ${Pe} ${ze}
        </span>
        ${io()}
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
  `,co=g`
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
  `,mo=g`
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
  `,uo=g` <div class="ControlLabel DefaultZoomMode">
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
  </div>`,go=g`
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
  `,po=g`
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
  `,ho=g`
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
  `,wo=g`
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
  `,bo=g`
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
  `,fo=g`
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
  `,yo=g`
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
    ${bo}
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
  `,vo=g`
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
  `,Qe=()=>g`
    <div id="SettingsPanel" class="panel">
      <h2>${i("SETTINGS")}</h2>
      <button id="CloseSettings" class="closeButton" title="${i("CLOSE")}">
        ${U}
      </button>
      <button id="ResetSettings" class="ControlButton">
        ${i("BUTTON_RESET_SETTINGS")}
      </button>
      ${so} ${lo} ${co} ${mo} ${uo} ${go} ${po}
      ${ho} ${wo} ${yo} ${fo} ${vo}
    </div>
  `,de=()=>Object.keys(a().keybinds).map(e=>{const t=a().keybinds[e]?.length?a().keybinds[e]?.map(n=>g`<kbd class="dark">${n}</kbd>`).join(" / "):"";return g`<span>${i(e)}:</span> <span>${t}</span>`}),Eo=()=>Object.keys(a().keybinds).map(e=>g`<label for="${e}">${i(e)}:</label>
            <input
              type="text"
              class="KeybindInput"
              id="${e}"
              name="${e}"
              value="${a().keybinds[e]?.join(" , ")??""}"
            />`).concat(g`<div id="HotKeysRules">${i("KEYBIND_RULES")}</div>`),Ye=()=>g`
    <div id="KeybindingsPanel" class="panel">
      <h2>${i("KEYBINDINGS")}</h2>
      <button id="CloseKeybindings" class="closeButton" title="${i("CLOSE")}">
        ${U}
      </button>
      <div class="controls">
        <button
          id="EditKeybindings"
          class="ControlButton"
          type="button"
          title="${i("EDIT_KEYBINDS")}"
        >
          ${Nn} ${i("BUTTON_EDIT")}
        </button>
        <button
          id="SaveKeybindings"
          class="ControlButton hidden"
          type="button"
          title="${i("SAVE_KEYBINDS")}"
        >
          ${On} ${i("BUTTON_SAVE")}
        </button>
      </div>
      <div id="KeybindingsList">${de().join(`
`)}</div>
    </div>
  `;function z(e,t=1){return Array(e).fill(0).map((n,o)=>o+1).filter(n=>n>=t)}const So=e=>g`
    <nav id="Navigation" class="panel ${a().showThumbnails?"":"disabled"}">
      <div id="NavigationCounters" class="ControlLabel">
        ${Mn}
        <i>0</i> / <b>${e.begin>1?e.pages-(e.begin-1):e.pages}</b>
        ${i("PAGES_LOADED")}
      </div>
      <div id="Thumbnails">
        ${z(e.pages,e.begin).map(t=>g`
              <div id="Thumbnail${t}" class="Thumbnail">
                <img id="ThumbnailImg${t}" alt="" class="ThumbnailImg" src="" />
                <span class="ThumbnailIndex">${t}</span>
              </div>
            `).join("")}
      </div>
    </nav>
  `,ko=()=>Re(a().bookmarks)?[i("LIST_EMPTY")]:a().bookmarks.map((e,t)=>g`
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
                ${An}
              </button>
            </a>
            <button
              class="ControlButton erase"
              title="Delete Bookmark"
              type="button"
              value="${e.url}"
            >
              ${Gn}
            </button>
          </span>
        </div>
      `),Xe=()=>g`
    <div id="BookmarksPanel" class="panel">
      <button id="CloseBookmarks" class="closeButton" title="${i("CLOSE")}">
        ${U}
      </button>
      <button class="Bookmark simpleButton" title="${i("BOOKMARK")}">
        ${$e} ${Fe}
      </button>
      <h2>${i("BOOKMARKS")}</h2>
      <div id="BookmarksList"></div>
    </div>
  `;function me(){const e=document.getElementById("BookmarksList");e&&(e.innerHTML=ko().join(""))}const xo=(e,t)=>z(e,t).map(n=>g` <option value="${n}">${n}</option>`),Ke=e=>g`
    <header id="Header" class="${a().header} headroom-top">
      <aside id="GlobalFunctions">
        <span>
          <button id="enlarge" title="${i("ENLARGE")}" class="ControlButton">
            ${Wn}
          </button>
          <button id="restore" title="${i("RESTORE")}" class="ControlButton">
            ${Un}
          </button>
          <button id="reduce" title="${i("REDUCE")}" class="ControlButton">
            ${qn}
          </button>
          <button id="fitWidth" title="${i("FIT_WIDTH")}" class="ControlButton">
            ${Ve}
          </button>
          <button id="fitHeight" title="${i("FIT_HEIGHT")}" class="ControlButton">
            ${Ne}
          </button>
          <button id="keybindings" title="${i("KEYBINDINGS")}" class="ControlButton">
            ${Tn}
          </button>
          <button
            id="AutoScroll"
            title="${i("SCROLL_START")}"
            class="ControlButton phones"
          >
            ${jn} ${Qn}
          </button>
        </span>
        <span>
          <button id="ltrMode" title="${i("VIEW_MODE_LEFT")}" class="ControlButton">
            ${En}
          </button>
          <button
            id="verticalMode"
            title="${i("VIEW_MODE_VERTICAL")}"
            class="ControlButton tablets"
          >
            ${yn}
          </button>
          <button
            id="webComic"
            title="${i("VIEW_MODE_WEBCOMIC")}"
            class="ControlButton tablets"
          >
            ${zn}
          </button>
          <button id="rtlMode" title="${i("VIEW_MODE_RIGHT")}" class="ControlButton">
            ${vn}
          </button>
          <button
            id="pageControls"
            title="${i("TOGGLE_CONTROLS")}"
            class="ControlButton tablets"
          >
            ${_n}
          </button>
          <button
            id="bookmarks"
            title="${i("BOOKMARKS")}"
            class="ControlButton tablets"
          >
            ${xn}
          </button>
          <button
            id="settings"
            title="${i("SETTINGS")}"
            class="ControlButton tablets phones"
          >
            ${Fn}
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
            ${xo(e.pages,e.begin).join("")}
          </select>
        </div>
        <div id="ChapterControl" class="ChapterControl">
          <span>
            <button
              id="CommentsButton"
              class="NavigationControlButton ControlButton ${e.comments?"":"disabled"}"
              title="${i("DISPLAY_COMMENTS")}"
            >
              ${Dn} ${i("DISPLAY_COMMENTS")}
            </button>
            <button
              id="download"
              class="NavigationControlButton ControlButton disabled"
              type="button"
              title="${i("DOWNLOAD_ZIP")}"
            >
              ${Ln} ${Rn} ${i("BUTTON_DOWNLOAD")}
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
              ${Sn} ${i("BUTTON_PREVIOUS")}
            </a>
            <a
              id="next"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${e.next??""}"
              title="${i("NEXT_CHAPTER")}"
            >
              ${i("BUTTON_NEXT")} ${kn}
            </a>
          </span>
        </div>
      </nav>
    </header>
  `,Mo=(e,t)=>z(e,t).map(n=>g`
        <div id="Page${n}" class="MangaPage">
          <div class="PageFunctions">
            <button class="Bookmark ControlButton" title="${i("BOOKMARK")}">
              ${$e} ${Fe}
            </button>
            <button class="ZoomIn ControlButton" title="${i("ZOOM_IN")}">
              ${Zn}
            </button>
            <button class="ZoomRestore ControlButton" title="${i("ZOOM_RESET")}">
              ${Pn}
            </button>
            <button class="ZoomOut ControlButton" title="${i("ZOOM_OUT")}">
              ${Hn}
            </button>
            <button class="ZoomWidth ControlButton" title="${i("ZOOM_WIDTH")}">
              ${Ve}
            </button>
            <button class="ZoomHeight ControlButton" title="${i("ZOOM_HEIGHT")}">
              ${Ne}
            </button>
            <button class="Hide ControlButton" title="${i("HIDE")}">
              ${Cn} ${In}
            </button>
            <button class="Reload ControlButton" title="${i("RELOAD")}">
              ${$n}
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
      `),Oo=e=>g`
    <main
      id="Chapter"
      class="${a().fitWidthIfOversize?"fitWidthIfOversize":""}
  ${a().verticalSeparator?"separator":""}
  ${a().viewMode}"
    >
      ${Mo(e.pages,e.begin).join("")}
    </main>
  `,Je=()=>g`
    <div id="CommentsPanel" class="panel">
      <button id="CloseComments" class="closeButton" title="${i("CLOSE")}">
        ${U}
      </button>
      <h2>${i("COMMENTS")}</h2>
      <div id="CommentsArea" class="${a().colorScheme}"></div>
      <button id="CommentsColorScheme" class="simpleButton ColorScheme">
        ${We} ${Ge}
      </button>
    </div>
  `;function G(e){const t=document.querySelector("#Chapter");t?.classList.contains("FluidLTR")||t?.classList.contains("FluidRTL")?t?.scroll(e?.offsetLeft??0,e?.offsetTop??0):window?.scroll(e?.offsetLeft??0,e?.offsetTop??0)}function E(e,t){return n=>n.addEventListener(e,t)}function ue(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function et(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY+e.deltaX,e.preventDefault())}function tt(){document.querySelector("#BookmarksPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function ge(e=window.location.href){M(V(e))||(c(`Bookmark Removed ${e}`),w({bookmarks:a().bookmarks.filter(t=>t.url!==e)}),e===window.location.href&&document.querySelector("#MangaOnlineViewer")?.classList.remove("bookmarked"))}function Q(e){const t=e.currentTarget.value;c(`Bookmark Removed ${t}`),Swal.fire({title:i("BOOKMARK_REMOVED"),timer:1e4,icon:"error"}),ge(t),me(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(E("click",Q))}function Ao(){me(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(E("click",Q)),document.querySelector("#BookmarksPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function nt(e){document.querySelector("#MangaOnlineViewer")?.classList.toggle("bookmarked");const t=[...document.querySelectorAll(".MangaPage")].map(s=>Math.abs(s.offsetTop-window.scrollY)),o=parseInt(e.currentTarget.parentElement?.querySelector(".PageIndex")?.textContent??"0",10)||t.indexOf(Math.min(...t))+1,r={name:document.querySelector("title")?.textContent?.trim().replace(/^\(\d+%\) */,"")??"",url:window.location.href,page:o,date:new Date().toISOString().slice(0,10)};V(r.url)?(w({bookmarks:a().bookmarks.filter(s=>s.url!==r.url)}),Swal.fire({title:i("BOOKMARK_REMOVED"),timer:1e4,icon:"error"})):(w({bookmarks:[...a().bookmarks,r]}),Swal.fire({title:i("BOOKMARK_SAVED"),html:i("BOOKMARK_SAVED").replace("##NUM##",o.toString()),icon:"success"})),me(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(E("click",Q))}function Co(){document.querySelector("#bookmarks")?.addEventListener("click",Ao),document.querySelectorAll(".closeButton")?.forEach(E("click",tt)),document.querySelector("#Overlay")?.addEventListener("click",tt),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(E("click",Q)),document.querySelectorAll(".Bookmark")?.forEach(E("click",nt)),document.querySelector(".AddBookmark")?.addEventListener("click",nt)}var Y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X={exports:{}},Io=X.exports,ot;function Lo(){return ot||(ot=1,function(e,t){(function(n,o){o()})(Io,function(){function n(u,h){return typeof h>"u"?h={autoBom:!1}:typeof h!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),h={autoBom:!h}),h.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function o(u,h,f){var p=new XMLHttpRequest;p.open("GET",u),p.responseType="blob",p.onload=function(){b(p.response,h,f)},p.onerror=function(){console.error("could not download file")},p.send()}function r(u){var h=new XMLHttpRequest;h.open("HEAD",u,!1);try{h.send()}catch{}return 200<=h.status&&299>=h.status}function s(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var h=document.createEvent("MouseEvents");h.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(h)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Y=="object"&&Y.global===Y?Y:void 0,m=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),b=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(u,h,f){var p=l.URL||l.webkitURL,S=document.createElement("a");h=h||u.name||"download",S.download=h,S.rel="noopener",typeof u=="string"?(S.href=u,S.origin===location.origin?s(S):r(S.href)?o(u,h,f):s(S,S.target="_blank")):(S.href=p.createObjectURL(u),setTimeout(function(){p.revokeObjectURL(S.href)},4e4),setTimeout(function(){s(S)},0))}:"msSaveOrOpenBlob"in navigator?function(u,h,f){if(h=h||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(n(u,f),h);else if(r(u))o(u,h,f);else{var p=document.createElement("a");p.href=u,p.target="_blank",setTimeout(function(){s(p)})}}:function(u,h,f,p){if(p=p||open("","_blank"),p&&(p.document.title=p.document.body.innerText="downloading..."),typeof u=="string")return o(u,h,f);var S=u.type==="application/octet-stream",I=/constructor/i.test(l.HTMLElement)||l.safari,_t=/CriOS\/[\d]+/.test(navigator.userAgent);if((_t||S&&I||m)&&typeof FileReader<"u"){var fe=new FileReader;fe.onloadend=function(){var W=fe.result;W=_t?W:W.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=W:location=W,p=null},fe.readAsDataURL(u)}else{var Rt=l.URL||l.webkitURL,ye=Rt.createObjectURL(u);p?p.location=ye:location.href=ye,p=null,setTimeout(function(){Rt.revokeObjectURL(ye)},4e4)}});l.saveAs=b.saveAs=b,e.exports=b})}(X)),X.exports}var To=Lo();const _o=/^blob:(.+?)\/(.+)$/;function Ro(e){return e.slice(e.indexOf(";base64,")+8)}function K(e){return/^data:image\/(png|jpg|jpeg|gif);base64,/.test(e)}function J(e){return _o.test(e)}function Bo(e){const o=e.split("?")[0].split("/").pop()?.match(/\.[A-Za-z]{2,4}$/);return o?o[0].slice(1):""}const Do=e=>{switch(e.substring(e.indexOf("/")+1,e.indexOf(";base64"))){case"/":return"jpg";case"R":return"gif";case"U":return"webp";case"i":default:return"png"}};let pe;const at=(e,t,n,o)=>`${e}${(t+1).toString().padStart(Math.floor(Math.log10(n))+1,"0")}.${o.replace("jpeg","jpg")}`;async function No(e){return new Promise((t,n)=>{c(`Getting Image data: ${e}`),GM_xmlhttpRequest({method:"GET",url:e,headers:{referer:window.location.host,origin:window.location.host},responseType:"blob",onload(o){o.status!==200&&n(o),t(o)}})})}async function Vo(e,t,n){const o=e.getAttribute("src")??e.getAttribute("data-src")??"";if(J(o))throw new Error("Image source unusable");return K(o)?Promise.resolve({name:at("Page-",t,n.length,Do(o)),data:Ro(o)??""}):new Promise(r=>{No(o).then(s=>{r({name:at("Page-",t,n.length,Bo(o)),data:s.response})}).catch(an("Image not Available"))})}function $o(e){c(`${e.name} Added to Zip from Base64 Image`),pe.file(e.name,e.data,{base64:!0,createFolders:!0,compression:"DEFLATE"})}async function Fo(){pe=new JSZip;const e=[...document.querySelectorAll(".PageImg")];Promise.all(e.map(Vo)).then(t=>{t.forEach($o),c("Generating Zip"),pe.generateAsync({type:"blob"}).then(n=>{c("Download Ready");const o=`${document.querySelector("#MangaTitle")?.textContent?.trim()}.zip`;To.saveAs(n,o,{autoBom:!1}),document.getElementById("download")?.classList.remove("loading")}).catch(c)}).catch(t=>c("One or more images couldn't be Downloaded",t))}var P={},v={},rt;function zo(){return rt||(rt=1,Object.defineProperty(v,"__esModule",{value:!0}),v.BLANK_URL=v.relativeFirstCharacters=v.whitespaceEscapeCharsRegex=v.urlSchemeRegex=v.ctrlCharactersRegex=v.htmlCtrlEntityRegex=v.htmlEntitiesRegex=v.invalidProtocolRegex=void 0,v.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,v.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,v.htmlCtrlEntityRegex=/&(newline|tab);/gi,v.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,v.urlSchemeRegex=/^.+(:|&colon;)/gim,v.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,v.relativeFirstCharacters=[".","/"],v.BLANK_URL="about:blank"),v}var it;function Go(){if(it)return P;it=1,Object.defineProperty(P,"__esModule",{value:!0}),P.sanitizeUrl=void 0;var e=zo();function t(l){return e.relativeFirstCharacters.indexOf(l[0])>-1}function n(l){var m=l.replace(e.ctrlCharactersRegex,"");return m.replace(e.htmlEntitiesRegex,function(b,u){return String.fromCharCode(u)})}function o(l){return URL.canParse(l)}function r(l){try{return decodeURIComponent(l)}catch{return l}}function s(l){if(!l)return e.BLANK_URL;var m,b=r(l.trim());do b=n(b).replace(e.htmlCtrlEntityRegex,"").replace(e.ctrlCharactersRegex,"").replace(e.whitespaceEscapeCharsRegex,"").trim(),b=r(b),m=b.match(e.ctrlCharactersRegex)||b.match(e.htmlEntitiesRegex)||b.match(e.htmlCtrlEntityRegex)||b.match(e.whitespaceEscapeCharsRegex);while(m&&m.length>0);var u=b;if(!u)return e.BLANK_URL;if(t(u))return u;var h=u.trimStart(),f=h.match(e.urlSchemeRegex);if(!f)return u;var p=f[0].toLowerCase().trim();if(e.invalidProtocolRegex.test(p))return e.BLANK_URL;var S=h.replace(/\\/g,"/");if(p==="mailto:"||p.includes("://"))return S;if(p==="http:"||p==="https:"){if(!o(S))return e.BLANK_URL;var I=new URL(S);return I.protocol=I.protocol.toLowerCase(),I.hostname=I.hostname.toLowerCase(),I.toString()}return S}return P.sanitizeUrl=s,P}var Po=Go();function Zo(e){const t=e.currentTarget;t.classList.contains("loading")||(c("Downloading Chapter"),t.classList.add("loading"),Fo().catch(n=>c("Error downloading chapter",n)))}function Wo(){document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls")}function he(e){const t=e.target,n=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(n&&n!=="#"?window.location.href=encodeURIComponent(Po.sanitizeUrl(n)):t.id==="series"&&window.history.back())}function Ho(){document.querySelector("#CommentsPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function st(){document.querySelector("#CommentsPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function qo(){const e=document.querySelector("#CommentsArea");e?.classList.toggle("light"),e?.classList.toggle("dark")}function Uo(){document.querySelector("#download")?.addEventListener("click",Zo),document.querySelector("#pageControls")?.addEventListener("click",Wo),document.querySelector("#next")?.addEventListener("click",he),document.querySelector("#prev")?.addEventListener("click",he),document.querySelector("#series")?.addEventListener("click",he),document.querySelector("#CommentsButton")?.addEventListener("click",Ho),document.querySelector("#CommentsColorScheme")?.addEventListener("click",qo),document.querySelectorAll(".closeButton")?.forEach(E("click",st)),document.querySelector("#Overlay")?.addEventListener("click",st)}function jo(e=0){let t=0;const n=r=>{const s=document.querySelector("#Header");s.classList.remove("headroom-end","headroom-hide","headroom-show","headroom-top"),r&&s.classList.add(`headroom-${r}`)};function o(){const{scrollY:r}=window;e&&a().zoomMode!=="height"&&r+window.innerHeight+e>document.body.scrollHeight?n("end"):r>t&&r>50?n("hide"):r<t&&r>50?n("show"):r<=100?n("top"):n(""),t=r}window.addEventListener("scroll",_.debounce(o,50))}const k=e=>document.querySelector(e)?.dispatchEvent(new Event("click"));function lt(e){const t=document.querySelector("#Chapter");if(t?.classList.contains("FluidLTR")||t?.classList.contains("FluidRTL")){const n=t.classList.contains("FluidRTL")?-1:1;t.scrollBy({left:.8*window.innerWidth*e*n,behavior:"smooth"})}else if(a().zoomMode==="height"){const n=[...document.querySelectorAll(".MangaPage")],o=n.map(m=>Math.abs(m.offsetTop-window.scrollY)),r=_.indexOf(o,_.min(o)),s=r+e,l=document.querySelector("#Header");s<0?G(l):s>=n.length?l.classList.add("headroom-end"):(c(`Current array page ${r},`,`Scrolling to page ${s}`),G(n.at(s)))}else window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}const Qo={SCROLL_UP(){lt(-1)},SCROLL_DOWN(){lt(1)},NEXT_CHAPTER(){k("#next")},PREVIOUS_CHAPTER(){k("#prev")},ENLARGE(){k("#enlarge")},REDUCE(){k("#reduce")},RESTORE(){k("#restore")},FIT_WIDTH(){k("#fitWidth")},FIT_HEIGHT(){k("#fitHeight")},SETTINGS(){k("#settings")},VIEW_MODE_WEBCOMIC(){k("#webComic")},VIEW_MODE_VERTICAL(){k("#verticalMode")},VIEW_MODE_LEFT(){k("#rtlMode")},VIEW_MODE_RIGHT(){k("#ltrMode")},SCROLL_START(){k("#AutoScroll")}};function ct(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,hotkeys.unbind(),Object.keys(a().keybinds).forEach(e=>{hotkeys(a().keybinds[e]?.join(",")??"",_.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),Qo[e]()},100))})}function Yo(e){return"listImages"in e&&!M(e.listImages)}function Xo(e){return"listPages"in e&&!M(e.listPages)}function Ko(e){return"bruteForce"in e&&!M(e.bruteForce)}async function Jo(e,t){return new Promise(n=>{c("Fetching page: ",e),fetch(e).then(async o=>o.text()).then(o=>{const s=new DOMParser().parseFromString(o,t);n(s)}).catch(o=>{c("Failed to fetch page: ",o)})})}async function ea(e){return Jo(e,"text/html")}async function ta(e,t,n){return ea(e).then(o=>o.querySelector(t)?.getAttribute(n))}const ee={threshold:2e3,throttle:500,lazyAttribute:"data-src",targetAttribute:"src"};let te=[],dt=!1;function mt(e){const{element:t}=e,n=t.getBoundingClientRect(),o=(window.innerHeight||document.documentElement.clientHeight)+ee.threshold;return n.top<=o||n.bottom<=o}async function na(e){let t=e.element.getAttribute(ee.lazyAttribute)??"";t&&(!J(t)&&!K(t)&&e.fetchOptions&&(t=await fetch(t,e.fetchOptions).then(n=>n.blob()).then(n=>blobUtil.blobToDataURL(n))),e.element.setAttribute(ee.targetAttribute,t)),e.callback(e.element)?.catch(c)}function oa(){const e=te.filter(mt);te=te.filter(t=>!mt(t)),e.forEach(na)}const ne=_.throttle(oa,ee.throttle);function ut(e,t,n){dt||(window.addEventListener("scroll",ne,{passive:!0}),window.addEventListener("touchmove",ne,{passive:!0}),window.addEventListener("resize",ne,{passive:!0}),dt=!0),te.push({element:e,callback:t,fetchOptions:n}),ne()}function x(e=a().zoomMode,t=".PageContent img"){[...document.querySelectorAll(t)].forEach(o=>{if(o.removeAttribute("width"),o.removeAttribute("height"),o.removeAttribute("style"),e==="width")o.style.width=`${window.innerWidth}px`;else if(e==="height"){const r=window.innerHeight+(a().showThumbnails?-29:0);o.style.height=`${r}px`,o.style.minWidth="unset"}else e==="percent"?o.style.width=`${o.naturalWidth*(a().defaultZoom/100)}px`:e>=0&&e!==100&&(o.style.width=`${o.naturalWidth*(e/100)}px`)})}function aa(e,t){const n=e.replace(/[?&]forceReload=\d+$/,""),o=n.includes("?")?"&":"?";return`${n+o}forceReload=${t}`}function gt(e){let t=1;const n=e?.match(/forceReload=(\d+)$/);return n?.at(1)&&(t=parseInt(n[1],10)+1),t}function pt(e){const t=e.getAttribute("src");t&&(e.removeAttribute("src"),K(t)||J(t)?e.setAttribute("src",t):e.setAttribute("src",aa(t,gt(t))))}function ra(){c("Images Loading Complete"),a().downloadZip&&document.getElementById("download")?.dispatchEvent(new Event("click")),document.getElementById("download")?.classList.remove("disabled")}function ia(){const e=document.querySelectorAll(".PageContent .PageImg").length,t=document.querySelectorAll(".PageContent .PageImg.imgLoaded").length,n=Math.floor(t/e*100),o=document.querySelector("title");o&&(o.innerHTML=g`(${n}%) ${document.querySelector("#MangaTitle")?.textContent}`),document.querySelectorAll("#Counters i, #NavigationCounters i").forEach(r=>{r.textContent=t.toString()}),NProgress.configure({showSpinner:!1}).set(t/e),c(`Progress: ${n}%`),t===e&&ra()}const sa=(e=".PageContent img")=>{const t=document.querySelector("#ZoomVal")?.textContent?.trim();t?.match(/^\d+%$/)?x(parseInt(t,10),e):x(t,e)};function oe(){return e=>{e.images.forEach(t=>{t.img.classList.add("imgLoaded"),t.img.classList.remove("imgBroken");const n=t.img.id.replace("PageImg","ThumbnailImg"),o=document.getElementById(n);o?.classList.remove("imgBroken"),o&&o.setAttribute("src",t.img.getAttribute("src")),sa(`#${t.img.id}`),ia()})}}function ae(e){return t=>{t.images.forEach(n=>{n.img.classList.add("imgBroken");const o=n.img.id.replace("PageImg","ThumbnailImg");document.getElementById(o)?.classList.add("imgBroken");const s=n.img.getAttribute("src");s&&gt(s)<=a().maxReload&&setTimeout(async()=>{if(e.reload){const m=parseInt(`0${/\d+/.exec(n.img.id)}`,10),b=await e.reload(m);n.img.setAttribute("src",b)}else pt(n.img);const l=imagesLoaded(n.img.parentElement);l.on("done",oe()),l.on("fail",ae(e))},2e3)})}}function ht(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}function wt(e,t,n,o){const r=o-e.begin;let s=ht(n);const l=document.querySelector(`#PageImg${t}`);l&&(!a().lazyLoadImages||r<=a().lazyStart?setTimeout(async()=>{!J(s)&&!K(s)&&e.fetchOptions&&(s=await fetch(s,e.fetchOptions).then(b=>b.blob()).then(b=>blobUtil.blobToDataURL(b)));const m=imagesLoaded(l.parentElement);m.on("done",oe()),m.on("fail",ae(e)),l.setAttribute("src",s),c("Loaded Image:",t,"Source:",s)},(e.timer??a().throttlePageLoad)*r):(l.setAttribute("data-src",ht(s)),ut(l,()=>{const m=imagesLoaded(l.parentElement);m.on("done",oe()),m.on("fail",ae(e)),c("Lazy Image: ",t," Source: ",l.getAttribute("src"))},e.fetchOptions)),e.pages===o&&ge())}function bt(e,t,n,o){return async()=>{const r=await ta(n,e.img,e.lazyAttr??"src"),s=document.querySelector(`#PageImg${t}`);if(r&&s){s.style.width="auto";const l=imagesLoaded(s.parentElement);l.on("done",oe()),l.on("fail",ae(e)),s.setAttribute("src",r),c(`${o&&"Lazy "}Page: `,t," Source: ",s.getAttribute("src"))}}}async function la(e,t,n,o){const r=o-e.begin,s=document.querySelector(`#PageImg${t}`);s&&(!a().lazyLoadImages||r<=a().lazyStart?setTimeout(()=>{bt(e,t,n,!1)().catch(c)},(e.timer??a().throttlePageLoad)*r):(s.setAttribute("data-src","data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),ut(s,bt(e,t,n,!0))),e.pages===o&&ge())}function ft(e,t){z(t.pages,e).forEach((n,o)=>{la(t,n,t.listPages[n-1],o).catch(c)})}function yt(e,t){z(t.pages,e).forEach((n,o)=>{wt(t,n,t.listImages[n-1],o)})}function ca(e,t=1){a().lazyLoadImages=e.lazy??a().lazyLoadImages,c("Loading Images"),c(`Intervals: ${e.timer??a().throttlePageLoad??"Default(1000)"}`),c(`Lazy: ${a().lazyLoadImages}, Starting from: ${a().lazyStart}`),Yo(e)?(c("Method: Images:",e.listImages),yt(t,e)):Xo(e)?(c("Method: Pages:",e.listPages),ft(t,e)):Ko(e)?(c("Method: Brute Force"),e.bruteForce({begin:t,addImg:wt,loadImages(n){yt(t,{...e,listImages:n})},loadPages(n,o,r){ft(t,{...e,listPages:n,img:o,lazyAttr:r})},wait:a().throttlePageLoad})):c("No Loading Method Found")}function da(e){const t=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");pt(t)}function ma(e){(e.currentTarget.parentElement?.parentElement).classList.toggle("hide")}function ua(){document.querySelectorAll(".Reload")?.forEach(E("click",da)),document.querySelectorAll(".Hide")?.forEach(E("click",ma))}function ga(e){const t=e.currentTarget.value;x(),G(document.querySelector(`#Page${t}`))}function pa(e){x(),G(document.querySelector(`#Page${e.currentTarget.querySelector(".ThumbnailIndex")?.textContent}`))}function ha(){document.querySelector("#gotoPage")?.addEventListener("change",ga),document.querySelectorAll(".Thumbnail")?.forEach(E("click",pa)),document.querySelector("#Thumbnails")?.addEventListener("wheel",ue)}function wa(){bn();const e=document.getElementById("MangaOnlineViewer");e?.removeAttribute("locale"),e?.dispatchEvent(new Event("hydrate"))}function ba(e){const t=e.currentTarget.value;w({locale:t});const n=document.getElementById("MangaOnlineViewer");n?.setAttribute("locale",t),n?.dispatchEvent(new Event("hydrate"))}function fa(e){const t=e.currentTarget.value;w({loadMode:t})}function ya(e){document.querySelector("#Chapter")?.classList.toggle("fitWidthIfOversize"),w({fitWidthIfOversize:e.currentTarget.checked})}function va(e){document.querySelector("#Chapter")?.classList.toggle("separator"),w({verticalSeparator:e.currentTarget.checked})}function Ea(e){document.querySelector("#Navigation")?.classList.toggle("disabled"),w({showThumbnails:e.currentTarget.checked}),x()}function Sa(e){document.querySelector("#CommentsButton")?.classList.toggle("disabled"),w({enableComments:e.currentTarget.checked}),x()}function ka(e){w({downloadZip:e.currentTarget.checked}),e.currentTarget.checked&&Swal.fire({title:i("ATTENTION"),text:i("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function xa(e){w({lazyLoadImages:e.currentTarget.checked});const t=document.querySelector(".lazyStart");a().lazyLoadImages?t?.classList.add("show"):t?.classList.remove("show"),e.currentTarget.checked&&Swal.fire({title:i("WARNING"),html:i("LAZY_LOAD"),icon:"warning"})}function Ma(e){const t=e.currentTarget.value;w({lazyStart:parseInt(t,10)})}function Oa(e){const t=parseInt(e.currentTarget.value,10);w({throttlePageLoad:t}),t<100&&Swal.fire({title:i("SPEED_WARNING"),html:i("SPEED_WARNING_MESSAGE"),icon:"warning"})}function Aa(e){const t=e.currentTarget.value;w({zoomStep:parseInt(t,10)})}function Ca(e){const t=e.currentTarget.value;j("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`),w({minZoom:parseInt(t,10)})}function Ia(e){document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls"),w({hidePageControls:e.currentTarget.checked})}function we(e){const t=document.querySelector("#Header");if(!t?.classList.contains(e)){const n=document.querySelector("#menu");t?.classList.remove("scroll","click","hover","fixed","simple","visible"),n?.classList.remove("scroll","click","hover","fixed","simple","hide"),t?.classList.add(e),n?.classList.add(e)}}function La(e){const t=e.currentTarget.value;we(t),w({header:t})}function Ta(e){const{value:t}=e.currentTarget;w({scrollHeight:parseInt(t,10)})}function _a(){document.querySelector("#ResetSettings")?.addEventListener("click",wa),document.querySelector("#locale")?.addEventListener("change",ba),document.querySelector("#fitIfOversize")?.addEventListener("change",ya),document.querySelector("#verticalSeparator")?.addEventListener("change",va),document.querySelector("#loadMode")?.addEventListener("change",fa),document.querySelector("#showThumbnails")?.addEventListener("change",Ea),document.querySelector("#enableComments")?.addEventListener("change",Sa),document.querySelector("#downloadZip")?.addEventListener("change",ka),document.querySelector("#lazyLoadImages")?.addEventListener("change",xa),document.querySelector("#lazyStart")?.addEventListener("change",Ma),document.querySelector("#PagesPerSecond")?.addEventListener("change",Oa),document.querySelector("#zoomStep")?.addEventListener("change",Aa),document.querySelector("#minZoom")?.addEventListener("input",Ca),document.querySelector("#hidePageControls")?.addEventListener("change",Ia),document.querySelector("#headerType")?.addEventListener("change",La),document.querySelector("#scrollHeight")?.addEventListener("change",Ta)}function Ra(e,t,n,o){return()=>{document.querySelector(e)?.className.includes(t)?o():n()}}function Ba(){const e=document.querySelector("#Header");e?.classList.contains("click")&&e?.classList.toggle("visible")}function Da(e,t,n){return e.clientX>=0&&e.clientX<=t&&e.clientY>=0&&e.clientY<=n}function Na(e){const t=document.querySelector("#Header");t?.classList.contains("hover")&&(Da(e,t.clientWidth,t.clientHeight)?(document.querySelector("#menu")?.classList.add("hide"),t?.classList.add("visible")):(document.querySelector("#menu")?.classList.remove("hide"),t?.classList.remove("visible")))}function Va(){document.querySelector("#SettingsPanel")?.classList.add("visible"),document.querySelector("#Navigation")?.classList.add("visible"),document.querySelector("#Header")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function be(){document.querySelector("#SettingsPanel")?.classList.remove("visible"),document.querySelector("#Navigation")?.classList.remove("visible"),document.querySelector("#Header")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function $a(){document.querySelector("#KeybindingsList").innerHTML=de().join(`
`),document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),document.querySelector("#KeybindingsPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function vt(){document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),document.querySelector("#KeybindingsPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function Fa(){const e=a().keybinds;Object.keys(a().keybinds).forEach(t=>{const n=document.querySelector(`#${t}`)?.value.split(",")?.map(o=>o.trim());e[t]=M(n)?void 0:n}),w({keybinds:e}),document.querySelector("#KeybindingsList").innerHTML=de().join(`
`),document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),ct()}function za(){document.querySelector("#KeybindingsList").innerHTML=Eo().join(`
`),document.querySelector("#SaveKeybindings")?.classList.remove("hidden"),document.querySelector("#EditKeybindings")?.classList.add("hidden")}function Ga(){document.querySelector("#menu")?.addEventListener("click",Ba),document.addEventListener("mousemove",_.throttle(Na,300)),document.querySelector("#settings")?.addEventListener("click",Ra("#SettingsPanel","visible",Va,be)),document.querySelectorAll(".closeButton")?.forEach(E("click",be)),document.querySelector("#Overlay")?.addEventListener("click",be),document.querySelector("#keybindings")?.addEventListener("click",$a),document.querySelectorAll(".closeButton")?.forEach(E("click",vt)),document.querySelector("#Overlay")?.addEventListener("click",vt),document.querySelector("#EditKeybindings")?.addEventListener("click",za),document.querySelector("#SaveKeybindings")?.addEventListener("click",Fa)}function Pa(e){const t=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg"),n=t.width/t.naturalWidth*(100+a().zoomStep);x(n,`#${t.getAttribute("id")}`)}function Za(e){const t=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg"),n=t.width/t.naturalWidth*(100-a().zoomStep);x(n,`#${t.getAttribute("id")}`)}function Wa(){document.querySelector(".PageContent .PageImg")?.removeAttribute("width")}function Ha(e){const t=e.currentTarget.parentElement?.parentElement,n=t?.querySelector(".PageImg");x("width",`#${n.getAttribute("id")}`),t?.classList.toggle("DoublePage")}function qa(e){const t=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");x("height",`#${t.getAttribute("id")}`)}function Ua(){document.querySelectorAll(".ZoomIn")?.forEach(E("click",Pa)),document.querySelectorAll(".ZoomOut")?.forEach(E("click",Za)),document.querySelectorAll(".ZoomRestore")?.forEach(E("click",Wa)),document.querySelectorAll(".ZoomWidth")?.forEach(E("click",Ha)),document.querySelectorAll(".ZoomHeight")?.forEach(E("click",qa))}function ja(){const e=a().colorScheme==="dark";w({colorScheme:e?"light":"dark"});const t=document.getElementById("MangaOnlineViewer");t?.classList.remove(e?"dark":"light"),t?.classList.add(a().colorScheme)}function Qa(e){const t=e.currentTarget;[...document.querySelectorAll(".ThemeRadio")].forEach(r=>{r.classList.remove("selected")}),t.classList.add("selected"),document.getElementById("MangaOnlineViewer")?.setAttribute("data-theme",t.title),w({theme:t.title});const n=document.querySelector("#Hue"),o=document.querySelector("#Shade");t.title.startsWith("custom")?(n?.classList.add("show"),o?.classList.remove("show")):(n?.classList.remove("show"),o?.classList.add("show"))}function Ya(e){const t=e.currentTarget.value;w({customTheme:t}),to(t)}function Xa(e){const t=parseInt(e.currentTarget.value,10);w({themeShade:t}),no()}function Ka(){document.querySelector("#ColorScheme")?.addEventListener("click",ja),document.querySelectorAll(".ThemeRadio").forEach(E("click",Qa)),document.querySelector("#CustomThemeHue")?.addEventListener("change",Ya),document.querySelector("#ThemeShade")?.addEventListener("input",Xa)}function A(e){return()=>{typeof e!="number"?a().zoomMode=e:a().zoomMode="percent",we(e==="height"?"click":a().header);const t=document.querySelector("#ZoomVal");Number.isInteger(e)?(t.textContent=`${e}%`,document.querySelector("#Zoom").value=e.toString()):t.textContent=e,x(e)}}function Et(e=1){return()=>{const t=document.querySelector("#Zoom"),n=parseInt(t.value,10)+e*a().zoomStep;t.value=n.toString(),t?.dispatchEvent(new Event("input",{bubbles:!0}))}}function Ja(e){const t=e.currentTarget.value;w({zoomMode:t}),A(t)();const n=document.querySelector(".DefaultZoom");a().zoomMode==="percent"?n?.classList.add("show"):n?.classList.remove("show")}function er(e){const t=parseInt(e.currentTarget.value,10);w({defaultZoom:t}),A(t)()}function tr(e){const t=parseInt(e.currentTarget.value,10);A(t)(),document.querySelector("#ZoomVal").textContent=`${t}%`}function nr(){document.querySelector("#DefaultZoomMode")?.addEventListener("change",Ja),document.querySelector("#DefaultZoom")?.addEventListener("input",er),document.querySelector("#Zoom")?.addEventListener("input",tr),document.querySelector("#enlarge")?.addEventListener("click",Et()),document.querySelector("#reduce")?.addEventListener("click",Et(-1)),document.querySelector("#restore")?.addEventListener("click",A(100)),document.querySelector("#fitWidth")?.addEventListener("click",A("width")),document.querySelector("#fitHeight")?.addEventListener("click",A("height"))}function St(e){const t=document.querySelector("#Chapter");document.querySelector("#Header")?.classList.remove("visible"),document.querySelector("#menu")?.classList.remove("hide"),A("height")(),G(t),t?.addEventListener("wheel",e==="FluidLTR"?ue:et)}function B(e){return()=>{const t=document.querySelector("#Chapter");t?.classList.remove("Vertical","WebComic","FluidLTR","FluidRTL"),t?.classList.add(e),t?.removeEventListener("wheel",ue),t?.removeEventListener("wheel",et),e==="FluidLTR"||e==="FluidRTL"?St(e):(document.querySelector("#Header").className=a().header,document.querySelector("#menu").className=a().header,A(100)())}}function or(e){const t=e.currentTarget.value;B(t)(),w({viewMode:t})}function ar(){document.querySelector("#viewMode")?.addEventListener("change",or),document.querySelector("#webComic")?.addEventListener("click",B("WebComic")),document.querySelector("#ltrMode")?.addEventListener("click",B("FluidLTR")),document.querySelector("#rtlMode")?.addEventListener("click",B("FluidRTL")),document.querySelector("#verticalMode")?.addEventListener("click",B("Vertical")),(a().viewMode==="FluidLTR"||a().viewMode==="FluidRTL")&&St(a().viewMode)}let C=!1;function kt(){const e=document.querySelector("#Chapter");if(e?.classList.contains("FluidLTR")||e?.classList.contains("FluidRTL")){const t=e.classList.contains("FluidRTL")?-1:1;e?.scrollBy({top:0,left:a().scrollHeight*t,behavior:"smooth"})}else window.scrollBy({top:a().scrollHeight,left:0,behavior:"smooth"});document.querySelector("#Header")?.classList.contains("headroom-end")&&(C=!1,document.querySelector("#ScrollControl")?.classList.remove("running"),c("Finished auto scroll")),C&&requestAnimationFrame(kt)}function re(){const e=document.querySelector("#AutoScroll");C?(C=!1,e?.classList.remove("running"),c("Stopped auto scroll")):(C=!0,requestAnimationFrame(kt),e?.classList.add("running"),c("Start auto scroll"))}let ie=!1;const rr=_.debounce(()=>{re(),ie=!1},500);function ir(){!ie&&C&&(re(),ie=!0),ie&&!C&&rr()}function sr(){window.addEventListener("wheel",_.throttle(ir,500)),document.querySelector("#AutoScroll")?.addEventListener("click",re)}let xt=!1;function Mt(){xt||(jo(100),ct(),ua(),Ua(),window.addEventListener("resize",()=>{const e=document.querySelector("#MangaOnlineViewer");e?.classList.remove("mobile","tablet","desktop"),e?.classList.add(R())}),xt=!0),Co(),Uo(),ha(),_a(),Ga(),Ka(),ar(),nr(),sr()}let Ot;function lr(){B(a().viewMode)();const e={"#Header":Ke(Ot),"#CommentsPanel":Je(),"#SettingsPanel":Qe(),"#KeybindingsPanel":Ye(),"#Bookmarks":Xe()};document.querySelector("#ScrollControl")?.classList.contains("running")&&re();const t=document.querySelector("#MangaOnlineViewer");t&&(t.className=`${a().colorScheme} 
        ${a().hidePageControls?"hideControls":""}
        ${V()?"bookmarked":""}
        ${R()}`,t.setAttribute("data-theme",a().theme));const n=document.querySelector("#Chapter");n&&(n.className=`${a().fitWidthIfOversize?"fitWidthIfOversize":""}  ${a().viewMode}`),Object.entries(e).forEach(([o,r])=>{const s=document.querySelector(o);s&&(s.outerHTML=r)}),document.querySelector("#Overlay")?.dispatchEvent(new Event("click")),Mt()}const cr=e=>{Ot=e;const t=document.createElement("div");return t.id="MangaOnlineViewer",t.className=`
        ${a().colorScheme} 
        ${a().hidePageControls?"hideControls":""}
        ${V()?"bookmarked":""}
        ${R()}`,t.setAttribute("data-theme",a().theme),t.innerHTML=g`
      <div id="menu" class="${a().header}">${Bn}</div>
      ${Ke(e)} ${Oo(e)} ${So(e)}
      <div id="Overlay" class="overlay"></div>
      ${Je()} ${Ye()} ${Xe()} ${Qe()}
    `,t.outerHTML},dr=e=>{e.getAttributeNames().forEach(t=>e?.removeAttribute(t))},mr=(...e)=>{e?.forEach(dr)};function ur(e){mr(document.documentElement,document.head,document.body),window.scrollTo(0,0),document.head.innerHTML=ao(e),document.body.innerHTML=cr(e),Mt(),ca(e),document.querySelector("#MangaOnlineViewer")?.addEventListener("hydrate",lr),e.comments&&document.querySelector("#CommentsArea")?.append(e.comments)}function gr(e,t=document.body){return new Promise(n=>{if(document.querySelector(e)){n(document.querySelector(e));return}const o=new MutationObserver(()=>{document.querySelector(e)&&(n(document.querySelector(e)),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function At(e,t=250){return new Promise(n=>{const o=setInterval(()=>{e()&&(clearInterval(o),n(!0))},t)})}function pr(e,t,n=document.body){return new Promise(o=>{if(n.querySelector(e)?.getAttribute(t)){o(n.querySelector(e)?.getAttribute(t)??"");return}const r=new MutationObserver(()=>{n.querySelector(e)?.getAttribute(t)&&(o(n.querySelector(e)?.getAttribute(t)??""),r.disconnect())});r.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function hr(e,t=document.body){return new Promise(n=>{if(!M(unsafeWindow[e])){n(unsafeWindow[e]);return}const o=new MutationObserver(()=>{M(unsafeWindow[e])||(n(unsafeWindow[e]),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function wr(e=1e3,t=!0){return new Promise(n=>{setTimeout(()=>n(t),e)})}async function br(e,t=5e3){return Promise.race([e,wr(t,!1)])}async function fr(){if(!a().enableComments)return null;let e=document.querySelector("#disqus_thread, #fb-comments");return e&&(c("Waiting to Comments to load",e),window.scrollTo(0,document.body.scrollHeight),await br(At(()=>{e=document.querySelector("#disqus_thread, #fb-comments");const t=e?.querySelector("iframe:not(#indicator-north, #indicator-south)");return t?.contentWindow?.document.readyState==="complete"&&t?.contentWindow?.document?.body?.textContent?.length})),e.children.length?c("Got Comments",e):c("Timeout Comments")),window.scrollTo(0,0),e}async function Z(e){e.before!==void 0&&await e.before(e.begin),a().enableComments&&!e.comments&&(e.comments=await fr()),setTimeout(()=>{try{ur(e)}catch(t){c(t)}},50)}const yr=`#StartMOV {
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
`;async function vr(e){if(e.waitAttr!==void 0){c(`Waiting for Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]}`);const t=await pr(e.waitAttr[0],e.waitAttr[1]);c(`Found Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]} = ${t}`)}}async function Er(e){if(e.waitEle!==void 0){c(`Waiting for Element ${e.waitEle}`);const t=await gr(e.waitEle);c(`Found Element ${e.waitEle} = `,t)}}async function Sr(e){if(e.waitVar!==void 0){c(`Waiting for Variable ${e.waitVar}`);const t=await hr(e.waitVar);c(`Found Variable ${e.waitVar} = ${t}`)}}async function kr(e){if(e.waitFunc!==void 0){c(`Waiting to pass Function check ${e.waitFunc}`);const t=await At(e.waitFunc);c(`Found Function check ${e.waitFunc} = ${t}`)}}async function xr(e){e.waitTime!==void 0&&(c(`Waiting to for ${e.waitTime} milliseconds`),await new Promise(t=>{setTimeout(t,e.waitTime)}),c("Continuing after timer"))}const Mr=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],Or=/.(png|jpg|jpeg|gif|bmp|webp)$/i,Ct=(e,t)=>e.localeCompare(t,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function Ar(e){return Mr.includes(e.type)}const Cr=e=>{const t=new Uint8Array(e),n=new Blob([t.buffer]);return URL.createObjectURL(n)};async function Ir(e){const t=await JSZip.loadAsync(e),n=t.filter((o,r)=>!r.dir&&Or.test(r.name)).sort((o,r)=>Ct(o.name,r.name));return c("Files in zip:",t.files),Promise.all(n.map(o=>o.async("arraybuffer").then(Cr)))}function It(e,t){Z({title:e,series:"?reload",pages:t.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:t}).then(()=>c("Page loaded"))}async function Lr(e){const t=await Ir(e);It(typeof e=="string"?e:e.name,t)}function Lt(e){const t=e.target,n=Array.from(t.files).filter(Ar).sort((o,r)=>Ct(o.webkitRelativePath||o.name,r.webkitRelativePath||r.name));c("Local Files: ",n,n.map(o=>o.webkitRelativePath||o.name)),t.files?.[0]&&It(t.files[0].webkitRelativePath.split("/")[0]||"Local Images",n.map(URL.createObjectURL))}function Tr(){return Ce.url.test(window.location.href)?(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const t=e.target;t.files?.[0]&&Lr(t.files[0])}),document.querySelector("#folder")?.addEventListener("change",Lt),document.querySelector("#images")?.addEventListener("change",Lt),c("Waiting for zip/images upload")),!0):!1}function _r(e,t,n){let o=e;return Number.isNaN(o)||o<n.min()?o=n.min():o>n.max()?o=n.max():o>t&&(o=t),o}function Rr(e,t,n){let o=e;return Number.isNaN(o)||o>n.max()?o=n.max():o<n.min()?o=n.min():o<t&&(o=t),o}async function Br(e,t=1){const n=await e.run();c("LateStart");let o=t,r=n.pages;const s={title:i("STARTING"),html:g`
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
      `,showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,icon:"question",didOpen(){const l=document.querySelector("#pageBegin"),m=document.querySelector("#pageEnd"),b=rangeSlider(document.getElementById("pagesSlider"),{min:1,max:n.pages,value:[o,r],onInput(f,p){p&&([o,r]=f,l&&(l.value=o.toString()),m&&(m.value=r.toString()))}});function u(){if(l.value===""||m.value==="")return;const f=_r(parseInt(l.value,10),r,b),p=Rr(parseInt(m.value,10),o,b);l.value=f.toString(),m.value=p.toString(),o=f,r=p,b.value([f,p])}const h=_.debounce(u,600);["change","mouseup","keyup","touchend"].forEach(f=>{l?.addEventListener(f,h),m?.addEventListener(f,h)})}};Swal.fire(s).then(l=>{l.value?(c(`Choice: ${o} - ${r}`),n.begin=o,n.pages=r,Z(n).then(()=>c("Page loaded"))):c(l.dismiss)})}function Tt(e,t){const n=document.createElement("button");n.innerText=i("BUTTON_START"),n.id="StartMOV",n.onclick=()=>{Br(e,t).catch(c)},document.body.appendChild(n);const o=document.createElement("style");o.appendChild(document.createTextNode(yr+on)),document.head.appendChild(o),c("Start Button added to page",n)}function Dr(e,t){Swal.fire({title:i("STARTING"),html:g`${t.begin>1?`${i("RESUME")}${t.begin}.<br/>`:""}${i("WAITING")}`,showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,timer:3e3}).then(n=>{n.value||n.dismiss===Swal.DismissReason.timer?Z(t).then(()=>c("Page loaded")):(Tt(e,t.begin),c(n.dismiss))})}async function Nr([e,t]){c(`Found Pages: ${t.pages} in ${e.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=V()??t.begin??1;const n=document.createElement("style");switch(n.appendChild(document.createTextNode(je)),document.body.appendChild(n),unsafeWindow.MOV=(o,r)=>{o!==void 0&&(t.begin=o),r!==void 0&&(t.pages=r),Z(t).then(()=>c("Page loaded"))},e.start??a()?.loadMode){case"never":Tt(e,t.begin);break;case"always":Z(t).then(()=>c("Page loaded"));break;case"wait":default:Dr(e,t);break}}async function Vr(e){if(c(`Starting ${le.script.name} ${le.script.version} on ${R()} ${un()} with ${gn()}`),Tr())return;c(e.length,"Known Manga Sites:",e);const t=e.filter(o=>o.url.test(window.location.href));c(t.length,"Found sites:",t);const n=t.map(async o=>(c(`Testing site: ${o.name}`),new Promise((r,s)=>{Promise.all([xr(o),Er(o),vr(o),Sr(o),kr(o)]).then(async()=>o.run()).then(l=>l.pages>0?r([o,l]):s(new Error(`${o.name} found ${l.pages} pages`)))})));Promise.race(n.map((o,r)=>o.then(()=>r))).then(o=>{n.forEach((r,s)=>{s!==o&&c(`Failed/Skipped: ${t[s].name}`)}),n[o].then(r=>{Nr(r)})})}Vr(nn).catch(c)})();
