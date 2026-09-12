// ==UserScript==
// @name         Bilibili international subtitle downloader
// @version      0.7.5
// @author       AdvMaple
// @match        /\:\/\/.*.bilibili.*\/(\w\/|)(play|video)\/.*$/
// @include      /\:\/\/.*.bilibili.*\/(\w\/|)(play|video)\/.*$/
// @icon         https://www.google.com/s2/favicons?domain=biliintl.com
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/download.meta.js
// @grant        GM_addStyle

// ==/UserScript==
(function(){const g={sub_language:"en",sub_format:"srt",video_quality:112,video_codec:12},O=[{id:"en",label:"English"},{id:"th",label:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"},{id:"vi",label:"Ti\u1EBFng Vi\u1EC7t"},{id:"id",label:"Bahasa Indonesia"},{id:"ms",label:"Bahasa Melayu"},{id:"zh-Hans",label:"\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09"},{id:"zh-Hant",label:"\u4E2D\u6587\uFF08\u7E41\u4F53\uFF09"}],D=["ass","srt","vtt","json"],V=[{id:7,label:"AVC"},{id:12,label:"HEVC"}],q=[{id:120,label:"4K"},{id:112,label:"1080P(HD)"},{id:80,label:"1080P"},{id:64,label:"720P"},{id:32,label:"480P"},{id:16,label:"320P"},{id:6,label:"240P"},{id:5,label:"144P"}],_={en:{gen_this_link:"Generate Links for this EP",gen_links:"Generate Links",subtitle:"Subtitle",video:"Video",audio:"Audio"},th:{gen_this_link:"\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A EP \u0E19\u0E35\u0E49",gen_links:"\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14",subtitle:"\u0E04\u0E33\u0E1A\u0E23\u0E23\u0E22\u0E32\u0E22",video:"\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D",audio:"\u0E40\u0E2A\u0E35\u0E22\u0E07"}};let y=localStorage.getItem("SUB_LANGUAGE");y||(localStorage.setItem("SUB_LANGUAGE",g.sub_language),y=g.sub_language);let b=localStorage.getItem("SUB_FORMAT");b||(localStorage.setItem("SUB_FORMAT",g.sub_format),b=g.sub_format);let h=localStorage.getItem("VIDEO_QUALITY");h||(localStorage.setItem("VIDEO_QUALITY",g.video_quality),h=g.video_quality);let S=localStorage.getItem("VIDEO_CODEC");S||(localStorage.setItem("VIDEO_CODEC",g.video_codec),S=g.video_codec);let f=location.pathname.split("/")[1];Object.keys(_).includes(f)||(f="en");const{ep_id:T,video_id:L,season_id:k}=N();(T>0||k>0||L>0)&&U({ep_id:T,season_id:k,video_id:L});function F(){return`${O.map(e=>`<option value="${e.id}" ${y===e.id?"selected":""}> ${e.label} </option>`)}`}function P(){return`${D.map(e=>`<option value="${e}" ${b===e?"selected":""}> ${e.toUpperCase()} </option>`)}`}function Q(e){const t=a=>(V.find(i=>i.id===a)||{}).label||"Unknown Codec",n=(a="")=>(s,i)=>s[a]<i[a]?1:s[a]>i[a]?-1:0,d=e||q;let c="";return d.sort(n("codec_id")).sort(n("id")).forEach(a=>{c+=`<option value="${a.id};${a.codec_id}" ${h===`${a.id}`&&S===`${a.codec_id}`?"selected":""}>[${t(a.codec_id)}] ${a.label} </option>`}),c}function A({ep_url:e,ep_title:t}){const n=document.createElement("a");n.textContent=t,n.href=e,n.download=`${t}.mp4`,n.type="video/mp4",document.getElementById("videoList").appendChild(n)}let $=document.createElement("div");$.innerHTML=`
    <button id="down-this" class="btn" type="button"> ${_[f].gen_this_link} </button>

    <select id="changeLanguage" class="subtitleSelect" name="lang">
      ${F()}
    </select>

    <select id="changeSubFormat" class="subtitleSelect" name="lang-format">
      ${P()}
    </select>

    <select id="changeQuality" class="subtitleSelect" name="quality">

    </select>

    <div class="linkContainer" id="jsonSubtitleList">${_[f].subtitle}&nbsp;:&nbsp;</div>

    <div class="linkContainer" id="videoList" >${_[f].video}&nbsp;:&nbsp;</div>

    <div class="linkContainer" id="audioList" >${_[f].audio}&nbsp;:&nbsp;</div>

    <div id="plugin_notice"></div>

    <div id="snackbar"></div>
  `,$.setAttribute("id","downloadBiliintScript"),document.body.appendChild($),document.getElementById("down-this").addEventListener("click",I,!1),document.getElementById("changeLanguage").addEventListener("change",R,!1),document.getElementById("changeSubFormat").addEventListener("change",z,!1),document.getElementById("changeQuality").addEventListener("change",J,!1);const B=e=>{try{JSON.parse(e)}catch{return!1}return!0},G=async({ep_title:e,ep_sub_url:t})=>{const n=i=>i.includes("[V4+ Styles]"),c=await(await fetch(t)).text();let a="unknown format",s=b;if(B(c)){a="json";const i=JSON.parse(c);let o,u="";if(b==="vtt"||b==="srt"||b==="ass"){const p=l=>{let m=new Date(0),r=new Date(l*1e3);return new Date(r.getTime()-m.getTime()).toISOString().split("T")[1].split("Z")[0]};b==="vtt"&&(u+=`WEBVTT
Kind: captions
Language: ${y}

`),i.body.forEach((l,m)=>{const r=p(l.from!==void 0?l.from:0),v=p(l.to);u+=m+1+`
`,u+=`${r.replace(".",",")} --> ${v.replace(".",",")}
`,u+=l.content+`

`}),o=new Blob([u],{type:`text/${b==="vtt"?"vtt":"plain"}`})}else o=new Blob([JSON.stringify(i)],{type:"application/json"});b==="ass"&&(s="srt",w(".ass format subtitles are not available, the plugin will automatically create subtitle links in .srt format!")),C({file_name:e,blob:o,file_format:s})}else if(n(c)){a="ass";const i=new Blob([c],{type:"text/plain"});C({file_name:e,blob:i,file_format:s})}else alert("Format subtitles .ass problematic, please contact DEV");W(`The server is returning ${a} file. The generated link is .${s} file`)};function C({file_name:e,blob:t,file_format:n=b}){const d=document.createElement("a");d.download=`${e}.${y}.${n}`,d.textContent=`${e}`,d.href=URL.createObjectURL(t),document.getElementById("jsonSubtitleList").appendChild(d)}async function M({ep_id:e,video_id:t,ep_title:n}){const c=e>0?`episode_id=${e}`:`aid=${t}`,a=`https://api.bilibili.tv/intl/gateway/web/v2/subtitle?s_locale=${y}&platform=web&${c}`,i=await(await fetch(a,{credentials:"include"})).text();if(!B(i))alert("Can't get subtitles data, please contact DEV");else{const{data:o}=JSON.parse(i);(o.subtitles===null||o.video_subtitle===null)&&alert("There is no suitable subtitle data");const u=o.subtitles||o.video_subtitle||[];let p;for(let l=0;l<u.length;l++)if(u[l].lang_key===y&&!p){const m=o.subtitles[l].url,r=o.video_subtitle[l].srt?.url||m;p=["srt","ass"].includes(b)&&(o.video_subtitle[l][b]?.url||m)||r}p?G({ep_title:n,ep_sub_url:p}):w("The language you selected, does not have subtitle files!")}}function U({ep_id:e,season_id:t,video_id:n}){const d=n>0,c=e>0,a=t>0,s=c||a?c?`ep_id=${e}`:`season_id=${t}`:`aid=${n}`;fetch(`https://api.bilibili.tv/intl/gateway/web/playurl?${s}&platform=web&device=wap&qn=64&tf=0&type=0`,{credentials:"include"}).then(i=>i.json()).then(({data:i})=>{if(c||d){const u=i.playurl.video.filter(l=>!!l.video_resource.url).map(l=>({codec_id:l.video_resource.codec_id,id:l.video_resource.quality,label:l.stream_info.desc_words})),p=Q(u);document.getElementById("changeQuality").innerHTML=p}else if(i?.sections?.length>0){const o=i?.sections[0].episodes;if(o.length>0){const u=o[0].episode_id;U(u)}}})}function H({ep_id:e,video_id:t,ep_title:n}){const c=e>0?`ep_id=${e}`:`aid=${t}`;fetch(`https://api.bilibili.tv/intl/gateway/web/playurl?${c}&device=wap&platform=web&qn=64&tf=0&type=0`,{credentials:"include"}).then(a=>a.json()).then(({data:a})=>{var s=0,i=0;const o=a.playurl,u=Number(h),p=Number(S),l=o.video.findIndex(r=>r.video_resource.quality===u&&r.video_resource.codec_id===p);let m=!1;if(l>-1){const r=o.video[l].video_resource.url;r?A({ep_url:r,ep_title:n}):m=!0}else m=!0;if(m)for(let r=0;r<o.video.length;r++){const v=o.video[r].video_resource.url;v!==""&&s<o.video[r].video_resource.quality&&(s=o.video[r].video_resource.quality,A({ep_url:v,ep_title:n}))}for(let r=0;r<o.audio_resource.length;r++){const v=o.audio_resource[r].url;if(v!==""&&i<o.audio_resource[r].quality){i=o.audio_resource[r].quality;const E=document.createElement("a");E.textContent=`${n} `,E.href=v,E.download="audio_url",E.type="video/mp4",document.getElementById("audioList").appendChild(E)}}})}function j(){const e=Y(),{ep_id:t,video_id:n}=N();(t>0||n>0)&&(M({ep_id:t,video_id:n,ep_title:`${e} [${t||n}]`}),H({ep_id:t,video_id:n,ep_title:`${e} [${t||n}]`}))}function N(){const e="play",t="video",n=(p=[],l="")=>{if(p.length>0)return p.findIndex(m=>m===l)},d=location.pathname.split("/"),c=location.pathname.includes(e),a=location.pathname.includes(t),s=n(d,c?e:t);let i,o,u;if(c?(i=d[s+2],u=d[s+1],i=Number.parseInt(i)||void 0,u=Number.parseInt(u)||void 0):a&&(o=d[s+1],o=Number.parseInt(o)||void 0),!(i>0||o>0))if(c){const l=document.body.querySelector(".video-play .ep-section .ep-list .ep-item--active")?.href?.split("?")?.shift()?.split("/")||[];if(l&&l.length>0){const m=n(l,e);i=l[m+2],i=Number.parseInt(i)||void 0}i>0||alert("Can't identify episode ID, please contact dev")}else alert("Can't identify video ID, please contact dev");return{ep_id:i,video_id:o,season_id:u}}function I(){document.getElementById("jsonSubtitleList").innerHTML=`${_[f].subtitle}&nbsp;:&nbsp;`,document.getElementById("videoList").innerHTML=`${_[f].video}&nbsp;:&nbsp;`,document.getElementById("audioList").innerHTML=`${_[f].audio}&nbsp;:&nbsp;`,w(""),j()}function R(e){localStorage.setItem("SUB_LANGUAGE",e.target.value),y=e.target.value,I()}function z(e){localStorage.setItem("SUB_FORMAT",e.target.value),b=e.target.value,I()}function J(e){const t=e.target.value.split(";");localStorage.setItem("VIDEO_QUALITY",t[0]),h=e.target.value,localStorage.setItem("VIDEO_CODEC",t[1]),S=e.target.value,I()}function Y(){const e=K(),t=document.title?.replace(" - BiliBili","")?.replace(`${e} `,""),d=document.body.querySelector(".video-play__breadcrumb .breadcrumb__item:last-child > .breadcrumb__item-text")?.innerText||t,c=d.split(" - ")[0],a=d.split(" - ")[1];let s=c?.replace(/[^0-9]/g,"");typeof s=="string"&&(s=Number.parseInt(s));let i;return s>=0?i=`E${`${s}`}${a?` - ${a}`:""}`:i=`${c||e} - ${a||d}`,i}function K(){const e=document.head.querySelector("[property='og:title'][content]")?.content?.replace(" HD | bilibili",""),t=document.body.querySelector(".video-play .video-play__meta .bstar-meta .bstar-meta__title")?.innerText,n=document.body.querySelector(".video-play .video-play__meta .bstar-meta .bstar-meta__extra .bstar-meta__origin-name .bstar-meta__origin-name-content")?.innerText,d=document.body.querySelector(".video-play .video-play__meta .bstar-meta .bstar-meta__extra .bstar-meta__alias .bstar-meta__alias-content")?.innerText;return e||t||d||n}let x;function W(e){const t=document.getElementById("snackbar");t.className="show",t.innerText=e,x&&(x=clearTimeout(x)),x=setTimeout(function(){t.className=t.className.replace("show","")},3e3)}function w(e){const t=document.getElementById("plugin_notice");t.innerText=e}GM_addStyle(`

    #downloadBiliintScript {
      position: fixed;
      bottom: 2.2vw;
      left: 2.2vw;
      z-index: 9999;
      opacity: 0.97;
      background: black;
      padding: 16px;
    }

    #down-this {
      background: #4c93ff;
      margin-bottom: 16px;

      color: white;
      font-weight: 700;
    }

    .linkContainer {
      margin-top: 16px;

      color: black;
      background: white;
      opacity: 0.97;
      border-radius: 20px;
      padding: 8px;
      font-size: 15px
    }

    .btn {
      cursor: pointer;
      padding: 3px;
      opacity:0.97;
      border-radius: 20px;
      padding: 8px;
    }

    .btn:hover {
      background-color: #6b9f25;
      color: white;
    }

    #BtnContainer{
      margin-top: 3px;
      margin-bottom: 6px;
      opacity: 0.97;
    }

    #mySortBtn {
      cursor: pointer;
      padding: 3px;
      border-radius:20px;
      width: 100%;
      background-color: #23427f;
      color: white;
      opacity: 0.99;
    }
    #mySortBtn:hover {
      background-color: #38548b;
      color: #d3d9e5;
    }

    #downloadBiliintScript a {
      color: #4c93ff;
      background: white;
      opacity: 0.97;
    }

    #downloadBiliintScript a:hover {
      color: #4078cb;
      background: white;
      opacity: 0.97;
    }

    .subtitleSelect {
      margin-right: 8px;

      border-radius: 20px;
      padding: 8px;
      background: white;
      opacity: 0.97;
    }

    #plugin_notice {
      margin-top: 16px;

      color: red;
      font-size: 13px;
      font-style: italic;
    }
    #plugin_notice:empty {
      display: none;
    }

    #snackbar {
      visibility: hidden;
      min-width: 250px;
      margin-left: -125px;
      background-color: #333;
      color: #fff;
      text-align: center;
      border-radius: 2px;
      padding: 16px;
      position: fixed;
      z-index: 1;
      left: 50%;
      bottom: 30px;
      font-size: 17px;
    }

    #snackbar.show {
      visibility: visible;
      -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
      animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    @-webkit-keyframes fadein {
      from {bottom: 0; opacity: 0;}
      to {bottom: 30px; opacity: 1;}
    }

    @keyframes fadein {
      from {bottom: 0; opacity: 0;}
      to {bottom: 30px; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
      from {bottom: 30px; opacity: 1;}
      to {bottom: 0; opacity: 0;}
    }

    @keyframes fadeout {
      from {bottom: 30px; opacity: 1;}
      to {bottom: 0; opacity: 0;}
    }
`)})();
