// ==UserScript==
// @name Youtube Tools All in one local download mp3 mp4 HIGT QUALITY return dislikes and more
// @name:en Youtube Tools All in one local download mp3 mp4.
// @homepage     https://github.com/DeveloperMDCM/
// @version      2.3.4.3
// @author       DeveloperMDCM
// @match        *://www.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-end
// @require      https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/js/iziToast.min.js
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @compatible edge
// @license MIT
// @namespace https://github.com/DeveloperMDCM/
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.meta.js
// ==/UserScript==
(function(){"use strict";let U=document.location.href;const r=e=>document.querySelector(e),o=e=>document.getElementById(e),v=e=>document.querySelectorAll(e),z=e=>document.createElement(e),c=(e,n)=>document.documentElement.style.setProperty(e,n),Xe=e=>document.body.appendChild(e),Ae="https://returnyoutubedislikeapi.com/Votes?videoId=",Ze="https://translate.googleapis.com/translate_a/t";let R="#252525",O="#ffffff",N="#ff0000";const ce="https://greasyfork.org/es/scripts/460680-youtube-tools-all-in-one-local-download-mp3-mp4-higt-quality-return-dislikes-and-more";function et(){return document.fullscreenElement!==null}const xe={af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",bg:"Bulgarian",ca:"Catalan",ceb:"Cebuano","zh-CN":"Chinese (Simplified)","zh-TW":"Chinese (Traditional)",co:"Corsican",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",fi:"Finnish",fr:"French",fy:"Frisian",gl:"Galician",ka:"Georgian",de:"German",el:"Greek",gu:"Gujarati",ht:"Haitian Creole",ha:"Hausa",haw:"Hawaiian",iw:"Hebrew",hi:"Hindi",hmn:"Hmong",hu:"Hungarian",is:"Icelandic",ig:"Igbo",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",jw:"Javanese",kn:"Kannada",kk:"Kazakh",km:"Khmer",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",lo:"Lao",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"Macedonian",mg:"Malagasy",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mn:"Mongolian",my:"Myanmar (Burmese)",ne:"Nepali",no:"Norwegian",ny:"Nyanja (Chichewa)",ps:"Pashto",fa:"Persian",pl:"Polish",pt:"Portuguese",pa:"Punjabi",ro:"Romanian",ru:"Russian",sm:"Samoan",gd:"Scots Gaelic",sr:"Serbian",st:"Sesotho",sn:"Shona",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",so:"Somali",es:"Spanish",su:"Sundanese",sw:"Swahili",sv:"Swedish",tl:"Tagalog (Filipino)",tg:"Tajik",ta:"Tamil",te:"Telugu",th:"Thai",tr:"Turkish",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",cy:"Welsh",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",zu:"Zulu"};function _(){const e=o("wave-visualizer-canvas");e&&(e.style.opacity="0",y&&(y.style.opacity="0"))}function L(e="info",n="",a=""){const h={success:"Success",error:"Error",info:"Information",warning:"Warning"};iziToast[e]({title:a||h[e]||"Notification",message:n,position:"bottomLeft"})}const tt=1e3,$={USAGE:"YT_TOTAL_USAGE",VIDEO:"YT_VIDEO_TIME",SHORTS:"YT_SHORTS_TIME"};let Z=GM_getValue($.USAGE,0),ee=GM_getValue($.VIDEO,0),te=GM_getValue($.SHORTS,0),Ve=Date.now(),G=null,we=null;GM_setValue($.USAGE,Z),GM_setValue($.VIDEO,ee),GM_setValue($.SHORTS,te);function Ie(e,n){const a=[{value:1,symbol:""},{value:1e3,symbol:" K"},{value:1e6,symbol:" M"}],h=/\.0+$|(\.[0-9]*[1-9])0+$/,w=a.slice().reverse().find(g=>e>=g.value);return w?(e/w.value).toFixed(n).replace(h,"$1")+w.symbol:"0"}function ot(){return new URLSearchParams(window.location.search).get("v")}async function je(){if(U=document.location.href,r("#below > ytd-watch-metadata > div")!=null&&document.location.href.split("?v=")[0].includes("youtube.com/watch")){U=ot();const n=`${Ae}${U}`;try{const h=await(await fetch(n)).json(),{dislikes:w}=h,g=r("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > dislike-button-view-model > toggle-button-view-model > button-view-model > button");g!==void 0&&(g.style="width: 90px",g.innerHTML=`
            <svg class="svg-dislike-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
            ${Ie(w,0)}`)}catch(a){console.log(a)}}}async function Be(){U=document.location.href;const e=v("#dislike-button > yt-button-shape > label > div > span");if(e!=null&&document.location.href.split("/")[3]==="shorts"){U=document.location.href.split("/")[4];const n=`${Ae}${U}`;try{const h=await(await fetch(n)).json(),{dislikes:w}=h;for(let g=0;g<e.length;g++)e[g].textContent=`${Ie(w,0)}`}catch(a){console.log(a)}}}let Ce,He=!1;setInterval(()=>{const e=r(".svg-dislike-ico"),n=window.location.href;Ce!==void 0&&n!==Ce&&!e&&He&&setTimeout(async()=>{await je(),await Be()},2e3),Ce=n},1e3);const Ue=window.trustedTypes?.createPolicy("default",{createHTML:e=>e});GM_addStyle(`
       @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
      @import url("https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/css/iziToast.min.css");
      :root {
              --primary-custom: #ff0000 !important;
              --bg-dark-custom: #1a1a1a !important;
              --bg-card-custom: #252525 !important;
              --text-custom: #ffffff !important;
              --text-custom-secondary: #9e9e9e !important;
              --accent-custom: #ff4444 !important;
          }
        body .container-mdcm {
              font-family: "Inter", -apple-system, sans-serif;
              color: var(--yt-enhance-menu-text, --text-custom);
        }
        #toggle-button:hover {
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
          opacity: 1 !important;
          }
        .container-mdcm {
            width: 420px;
            max-width: 420px;
            background-color: var(--yt-enhance-menu-bg, #252525);
            border-radius: 16px 16px 0 0;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            flex-direction: column;
            max-height: 80vh;
            overflow-y: auto;
            overflow-x: hidden;
            height: auto;
        }

        #shareDropdown {
        display: none;
        position: absolute;
        top: 50px;
        right: 100px;
        background-color: var(--yt-enhance-menu-bg, #252525);
        border-radius: 6px;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
        z-index: 11;
        }
        #shareDropdown a {
        color: var(--text-custom);
        text-decoration: none;
        line-height: 2;
        font-size: 14px;
        }
        #shareDropdown a:hover {
        color: var(--primary-custom);
        }
        .header-mdcm {
            padding: 12px 16px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            position: sticky;
            top: 0;
            background-color: var(--yt-enhance-menu-bg, #252525);
            border-radius: 16px 16px 0 0;
            z-index: 10;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-mdcm h1 {
            font-size: 16px; 
            margin: 0;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
        }


        .header-mdcm i {
         color: var(--primary-custom)
        }
        

        .icons-mdcm {
            display: flex;
            gap: 4px;
        }
        .icons-mdcm i {
          color: var(--yh-enhance-menu-accent, var(--text-custom));
        }
            

        .icon-btn-mdcm {
            background: rgba(255,255,255,0.1);
            border: none;
            color: var(--text-custom);
            width: 28px; 
            height: 28px; 
            border-radius: 6px; 
            cursor: pointer;
            transition: all 0.3s;
        }

        .icon-btn-mdcm:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }

        .icon-btn-mdcm i {
         color: var(--text-custom);
         outline: none;
         text-decoration: none;
        }

        .tabs-mdcm {
            padding: 10px 12px;
            margin: 10px 0;
            position: sticky;
            top: 50px;
            background-color: var(--yt-enhance-menu-bg, #252525);
            z-index: 10;
            display: flex;
            gap: 8px;
            -ms-overflow-style: none; 
            padding-bottom: 8px; 
        }

        

        .tabs-mdcm::-webkit-scrollbar {
            height: 0px;
            background-color: transparent;
        }

        .tabs-mdcm:hover::-webkit-scrollbar {
            height: 6px;
        }

        .tabs-mdcm::-webkit-scrollbar-thumb {
            background-color: rgba(255, 0, 0, 0.5);
            border-radius: 3px;
        }

        .tabs-mdcm::-webkit-scrollbar-track {
            background-color: transparent;
        }

        .tab-mdcm {
            padding: 6px 10px;
            border: none;
            background: rgba(255,255,255,0.05);
            cursor: pointer;
            font-size: 12px;
            color: var(--text-custom-secondary);
            border-radius: 6px;
            transition: all 0.3s;
            flex: 1;
            display: flex;
            align-items: center;
            gap: 6px;
            flex-shrink: 0;
            justify-content: center;
            white-space: nowrap;
        }

        .tab-mdcm svg {
            width: 14px;
            height: 14px;
            fill: currentColor;
        }

        .tab-mdcm.active {
            background: var(--yt-enhance-menu-accent, --primary-custom) !important;
            color: var(--text-custom);
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(255,0,0,0.2);
        }

        .tab-mdcm:hover:not(.active) {
            background: rgba(255,255,255,0.1);
            transform: translateY(-1px);
        }

        .options-mdcm {
            flex: 1;
            overflow-y: auto;
            padding: 0 16px 0;
            scrollbar-width: thin;
            scrollbar-color: var(--primary-custom) var(--bg-dark-custom);
            max-height: 300px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
            gap: 8px;
        }

        .options-settings-mdcm {
            flex: 1;
            overflow-y: auto;
            padding: 0 16px 0;
            scrollbar-width: thin;
            scrollbar-color: var(--primary-custom) var(--bg-dark-custom);
            max-height: 300px;
            display: grid;
            gap: 8px;
        }

         .card-items-end {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 175px;
        }

         .radio-mdcm {
            width: 14px;
            height: 14px;
            accent-color: var(--primary-custom);
        }
       
        .color-picker-mdcm {
            width: 50px;
            height: 24px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .color-picker-mdcm:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .options-mdcm::-webkit-scrollbar, .options-settings-mdcm::-webkit-scrollbar {
            width: 6px;
        }

        .options-mdcm::-webkit-scrollbar-track, .options-settings-mdcm::-webkit-scrollbar-track {
            background: var(--bg-dark-custom);
            border-radius: 3px;
        }

        .options-mdcm::-webkit-scrollbar-thumb, .options-settings-mdcm::-webkit-scrollbar-thumb {
            background: var(--primary-custom);
            border-radius: 3px;
        }

        .options-mdcm::-webkit-scrollbar-thumb:hover, .options-settings-mdcm::-webkit-scrollbar-thumb:hover {
            background: var(--accent-custom);
        }

        .options-mdcm::after, .options-settings-mdcm::after {
            content: '';
            display: block;
        }

        .option-mdcm {
            display: grid;
            grid-template-columns: auto 1fr; 
            align-items: center;
            margin-bottom: 0; 
            padding: 5px; 
            background: rgba(255,255,255,0.05);
            border-radius: 6px; 
            transition: all 0.3s;
            border: 1px solid rgba(255,255,255,0.05);
            color: var(--yt-)
            gap: 6px;
        }

        .option-mdcm:hover {
            background: rgba(255,255,255,0.08);
            border-color: rgba(255,255,255,0.1);
        }
        .option-settings-mdcm {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0;
          padding: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          transition: all 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.05);
          gap: 6px;
        }

        .option-settings-mdcm:hover {
            background: rgba(255,255,255,0.08);
            border-color: rgba(255,255,255,0.1);
        }
            .tab-content {
            display: none;
        }
            .tab-content.active {
                display: block;
                margin-bottom: 10px;
            }

        .checkbox-mdcm {
            width: 14px; 
            height: 14px; 
            accent-color: var(--yt-enhance-menu-accent, --primary-custom) !important;
        }

        label {
            font-size: 12px; 
            color: var(--text-custom);
        }

        .slider-container-mdcm {
            background: rgba(255,255,255,0.05);
            padding: 10px; 
            border-radius: 6px; 
        }

        .slider-mdcm {
            width: 100%;
            height: 3px;
            accent-color: var(--yt-enhance-menu-accent, --primary-custom) !important;
            margin: 10px 0; 
        }

        .reset-btn-mdcm {
            padding: 5px 10px; 
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.1);
            color: var(--text-custom);
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px; 
            transition: all 0.3s;
        }

        .reset-btn-mdcm:hover {
            background: rgba(255,255,255,0.2);
        }

        .quality-selector-mdcm select {
            position: relative;
            padding: 3px; 
            outline: none;
            border-radius: 4px;
            border: 1px solid rgba(255,255,255,0.2);
            background: var(--yt-enhance-menu-accent, --primary-custom) !important;
            color: var(--text-custom);
            width: fit-content;
            appearance: none;
            cursor: pointer;
            font-size: 11px; 
        }
       

        .quality-selector-mdcm {
            background: rgba(255,255,255,0.05);
            padding: 10px; 
            border-radius: 6px; 
        }

        .select-wrapper-mdcm {
          position: relative;
          display: inline-block;
        }

        .select-wrapper-mdcm select {
          -webkit-appearance: auto;
          -moz-appearance: auto;
        }
        
        .actions-mdcm {
            position: sticky;
            top: 0;
            padding: 12px 16px;
            backdrop-filter: blur(15px);
            background-color: var(--yt-enhance-menu-bg, #252525);
            display: flex;
            gap: 6px;
            width: 390px;
            border-radius: 0 0 16px 16px;
            justify-content: space-between;
            align-items: center;
        }

        .action-buttons-mdcm {
            display: flex;
            gap: 6px;
        }

        .action-btn-mdcm {
            flex: 1;
            padding: 8px; 
            border: none;
            border-radius: 6px; 
            background: var(--primary-custom);
            color: var(--text-custom);
            cursor: pointer;
            font-size: 12px; 
            font-weight: 500;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px; 
            box-shadow: 0 4px 12px rgba(255,0,0,0.2);
        }

        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(255,0,0,0.3);
        }

        textarea.textarea-mdcm {
            width: 100%;
            height: 50px; 
            margin-top: 10px; 
            margin-bottom: 12px; 
            padding: 8px; 
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            color: var(--text-custom);
            font-size: 11px; 
            resize: none;
            transition: all 0.3s;
        }

        textarea.textarea-mdcm:focus {
            outline: none;
            border-color: var(--primary-custom);
            background: rgba(255,255,255,0.08);
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .container-mdcm {
            animation: fadeIn 0.3s ease-out;
        }

        .developer-mdcm {
            font-size: 10px;
            color: var(--text-custom-secondary);
        }

        .developer-mdcm a {
            color: var(--primary-custom);
            text-decoration: none;
        }

        /* Styles for the import/export area */
        #importExportArea {
            display: none;
            padding: 16px;
            margin: 0px;
            background-color: var(--yt-enhance-menu-bg, #252525);
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        #importExportArea.active {
            display: block;
            margin-top: 10px;
        }

        /* Style the textarea */
        #importExportArea textarea {
            width: 370px;
            height: 20px;
            margin-bottom: 10px;
            padding: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            background-color: rgba(255, 255, 255, 0.05);
            color: var(--text-custom);
            font-size: 12px;
            resize: vertical;
        }

        /* Style the buttons */
        #importExportArea .action-buttons-mdcm  {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }

        #importExportArea .action-btn-mdcm {
            flex: 1;
            padding: 10px 16px;
            border: none;
            border-radius: 6px;
            background-color: var(--primary-custom);
            color: var(--text-custom);
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        #importExportArea .action-btn-mdcm:hover {
            background-color: var(--accent-custom);
        }
           
      #yt-stats {
      position: fixed;
      top: 60px;
      right: 20px;
      background: #1a1a1a;
      color: white;
      padding: 15px;
      border-radius: 10px;
      width: 320px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      font-family: Arial, sans-serif;
      display: none;
      }
  #yt-stats-toggle {
      font-size: 12px;
      color: #fff;
      padding: 12px 20px;
      border-radius: 5px;
      cursor: pointer;
  }
  .stat-row {
      margin: 15px 0;
  }
  .progress {
      height: 6px;
      background: #333;
      border-radius: 3px;
      margin: 8px 0;
  }
  .progress-bar {
      height: 100%;
      transition: width 0.3s;
  }
  .total-bar { background: #44aaff; }
  .video-bar { background: #00ff88; }
  .shorts-bar { background: #ff4444; }
  #cinematics {
    position: absolute !important;
    width: 90vw !important;
    height: 100vh ;
  }
    #cinematics div {
        position: fixed;
      inset: 0px;
      pointer-events: none;
      transform: scale(1.5, 2);
  }
      #cinematics > div > div > canvas:nth-child(1), #cinematics > div > div > canvas:nth-child(2) {
   position: absolute !important;
    width: 90vw !important;
    height: 100vh ;
      }

    // .html5-video-player.unstarted-mode {
    //  background-image: url('https://avatars.githubusercontent.com/u/54366580?v=4');
    // background-repeat: no-repeat;
    // background-position: 50% 50%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // }
    
        #yt-enhancement-panel {
            position: fixed;
            top: 60px;
            right: 20px;
            z-index: 9999;
        }
       
        .color-picker {
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            background: none;
        }
        .slider {
            width: 100%;
        }
         #toggle-panel {
            z-index: 10000;
            color: white;
            padding: 5px;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            transition: all 0.5s ease;
            width: 43px;
            border-radius: 100px;
        }
            
        #icon-menu-settings {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 7px;
        font-size: 20px;
        color: var(--yt-spec-icon-inactive);
        cursor: pointer;
        user-select: none;
        filter: drop-shadow(2px 4px 6px black);
        }
    
        .theme-option {
            margin-bottom: 15px;
        }
        .theme-option label {
            display: flex;
            align-items: center;
        }
       .theme-option {
    position: relative;
    width: auto;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
}

.theme-preview {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    border: 1px solid #000;
    z-index: 1;
}

.theme-option input[type="radio"] {
    position: relative;
    z-index: 2;
    margin-right: 10px;
    cursor: pointer;
}

.theme-name {
    position: relative;
    z-index: 2;
    font-size: 15px;
    color: #fff;
}

.theme-option label {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 2;
}

  .buttons-tranlate, .select-traductor {
        background: #000;
        font-size: 10px;
        border: none;
        color: #fbf4f4 !important;
        padding: 3px 0;
        margin-left: 10px;
        width: 70px;
        border-radius: 10px;
        }
        .buttons-tranlate:hover {
        cursor: pointer;
        background-color: #6b6b6b;
        }
         button.botones_div {
         margin: 0;
         padding: 0;
         }

        .tab-button:hover {
          background-color: #ec3203 !important;
          color: #ffffff !important;
          cursor: pointer;
        }

        .traductor-container {
            display: inline-block;
            align-items: center;
            gap: 8px;
            margin-top: 4px;
          }
         
        #eyes {
      opacity: 0;
      position: absolute;
      height: 24px;
      left: 0;
      width: 24px;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 4px;
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ##d5d5d5;

    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #000;

    }

    .color-boxes {
      display: flex;
      gap: 8px;
    }
    .color-box {
      width: 20px;
      height: 20px;
      border: 1px solid rgb(221 221 221 / 60%);
      border-radius: 4px;
      cursor: pointer;
    }
    .color-box.selected {
      border: 2px solid var(--primary-custom); 
      filter: drop-shadow(0px 1px 6px red);
    }

    .containerButtons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .containerButtons > button:hover {
      cursor: pointer;
    }
      
      body {
      padding: 0;
      margin: 0;
      overflow-y: scroll;
      overflow-x: hidden;
      }
      .style-scope.ytd-comments {
      overflow-y: auto;
      overflow-x: hidden;
      height: auto;
      }
      ytd-comment-view-model[is-reply] #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model, ytd-comment-view-model[is-creator-reply] #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
        img.yt-img-shadow {
        border-radius: 50% !important;
        }
        #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: visible;
        }
      ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer {
        --ytd-item-section-item-margin: 8px;
        overflow-y: auto;
        overflow-x: hidden;
        height: auto;
      }
      .right-section.ytcp-header {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 45px;
      justify-content: end;
    }
      #meta.ytd-playlist-panel-video-renderer {
    min-width: 0;
    padding: 0 8px;
    display: flexbox;
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    flex-basis: 0.000000001px;
}

    .containerall {
        display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: auto;
}
    }
    .container .botoncalidades {
      margin: 3px 2px;
      width: 24.6%;
    }

    .botoncalidades:first-child {
      background-color: #0af;
    }

    .botoncalidades:last-child {
      background-color: red;
      width: 100px;
    }

    .selectcalidades,
    .botoncalidades,
    .selectcalidadesaudio {
      width: 50%;
      height: 27.8px;
      background-color: #fff;
      color: #000;
      font-size: 25px;
      text-align: center;
      border: 1px solid black;
      border-radius: 10px;
      border: none;
      font-size: 20px;
      margin: 2px 2px;
    }

    .botoncalidades {
      width: 70px;
      height: 30px;
      background-color: rgb(4, 156, 22);
      border: 0px solid #000;
      color: #fff;
      font-size: 20px;
      border-radius: 10px;
      margin: 2px 2px;
    }

    .botoncalidades:hover,
    .bntcontainer:hover {
      cursor: pointer;
    }

   .ocultarframe,
    .ocultarframeaudio {
      display: none;
    }
      .checked_updates {
      cursor: pointer;
      }

      #export-config, #import-config {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: var(--yt-enhance-menu-accent, --primary-custom) !important;;
        color: #ffffff;
        border: none;
        padding: 5px;
      }
        #export-config:hover, #import-config:hover {
          background-color: #ff0000;
          color: #ffffff;
          cursor: pointer;
        }

        .yt-image-avatar-download {
          position: absolute;
          bottom: -10px;
          right: -14px;
          border: none;
          z-index: 1000;
          background: transparent;
          filter: drop-shadow(1px 0 6px red);
          color: var(--ytcp-text-primary);
          cursor: pointer;
        }

        .custom-classic-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
          border: none;
          width: 48px;
          height: 48px;
          color: var(--yt-spec-icon-inactive);
          font-size: 24px;
          margin: 0px 8px;
          cursor: pointer;
        }
        .custom-classic-btn:hover {
          background-color: rgba(255,255,255,0.2);
        }
    `);const Re=`
    <main>
    <div class="container">
    <form>
      <div class="containerButtons">
      
  <button title="Image video" class="botones_div" type="button" id="imagen">

  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-down" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 8h.01"></path>
    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
    <path d="M14 14l1 -1c.653 -.629 1.413 -.815 2.13 -.559"></path>
    <path d="M19 16v6"></path>
    <path d="M22 19l-3 3l-3 -3"></path>
  </svg>
</button>
  
      
  <button title="Buffer video" type="button" class="buffer_video botones_div">
 <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-box-right-stretch"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17h2" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M11 12h6" /><path d="M13 7h4" /></svg>
</button>
  
      
  <div style="position:relative; ">
  <button title="Filter eyes" class="botones_div" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-half"
      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 9a3 3 0 0 0 0 6v-6z"></path>
      <path
        d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z">
      </path>
    </svg>
    <input id="eyes" list="presetColors" type="color" value="#ffffff">
  <datalist id="presetColors">
    <option value="#000000" />
    <option value="#fbff00" />
    <option value="#ff0000" />
    <option value="#00ff00" />
    <option value="#0000ff" />
  </datalist>
  <div id="ojosprotect"
  style="position: fixed; pointer-events: none; width: 100%; height: 100%; left: 0px; top: 0px; opacity: 0.2; z-index: 10; display: block;">
  </div>
</div>
</button>
  
      
  <button title="reset" class="botones_div" type="button" id="reset_button">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
    <path d="M12 4l0 8"></path>
  </svg>
</button>
  
      
  <button title="Repeat video" class="botones_div" type="button" id="repeatvideo">

  <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
  </svg>
</button>
  
      
  <button title="MP4" type="button" class="btn1 botones_div">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download"
    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
    <path d="M12 17v-6"></path>
    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
  </svg>
</button>
<button title="MP3" type="button" class="btn2 botones_div">

  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-music" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
    <path d="M11 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M12 16l0 -5l2 1"></path>
  </svg>
</button>
<button title="Close" type="button" class="btn3 botones_div">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24"
  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
  stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
  <path d="M10 10l4 4m0 -4l-4 4"></path>
</svg>
</button>
  
      

  <button title="External Download" type="button" class="external_link botones_div">

  <svg class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
      <path d="M11 13l9 -9"></path>
      <path d="M15 4h5v5"></path>
   </svg>
</button>

  
      

  <button title="view External no cookie" type="button" class="view_external_link botones_div">

  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z" /><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" /><path d="M12 8h4v4" /><path d="M16 8l-5 5" /></svg>
</button>

  
      
  <button title="Picture to picture" type="button" class="video_picture_to_picture botones_div">

  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" /></svg>
</button>

  
      
  <button title="Screenshot video" type="button" class="screenshot_video botones_div">
  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>
</button>

  
      
  <button title="Check new updates" type="button" class="checked_updates botones_div">
  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
</button>
  
      </div>
      <div>
      </div>
    </form>

    </div>
    <div class="content_collapsible_colors" style="margin-top: 10px">

    <form class="formulariodescarga" action="">
    <div class="containerall">
    <select class="selectcalidades  ocultarframe" required>
      <option selected disabled>Calidad del video / Quality video</option>
      <option value="360">360p Mp4</option>
      <option value="480">480p Mp4</option>
      <option value="720">720p HD Mp4 Default</option>
      <option value="1080">1080p FULL HD Mp4</option>
      <option value="4k">2160p 4K WEBM</option>
      <option value="8k">4320p 8K WEBM</option>
      </select>
      <iframe id="descargando"  style="z-index: 99; border: none; height: 27.4px; width: 50%;"  class="containerall ocultarframe" src="" frameborder="0"></iframe>

    </div>
    </form>
    <form class="formulariodescargaaudio" action="">
    <div class="containerall">
    <select class="selectcalidadesaudio ocultarframeaudio" required>
      <option selected disabled>Calidad del Audio / Quality Audio</option>
      <option value="flac">Audio FLAC UHQ</option>
      <option value="wav">Audio WAV UHQ</option>
      <option value="mp3">Audio MP3 Default</option>
      <option value="m4a">Audio M4A</option>
      <option value="aac">Audio AAC</option>
      <option value="opus">Audio OPUS</option>
      <option value="ogg">Audio OGG</option>
      </select>
      <iframe id="descargandomp3"  style="z-index: 99; border: none; height: 27.4px; width: 50%;"  class="containerall ocultarframeaudio" src="" frameborder="0"></iframe>

      </iframe>

    </div>
    </form>
      </main>
  `,Oe=[{name:"Default / Reload",gradient:"",textColor:"",raised:"",btnTranslate:"",CurrentProgressVideo:"",videoDuration:"",colorIcons:"",textLogo:"",primaryColor:"",secondaryColor:""},{name:"Midnight Blue",gradient:"linear-gradient(135deg, #1e3a8a, #3b82f6)",textColor:"#ffffff",raised:"#f00",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Forest Green",gradient:"linear-gradient(135deg, #14532d, #22c55e)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Sunset Orange",gradient:"linear-gradient(135deg, #7c2d12, #f97316)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Royal Purple",gradient:"linear-gradient(135deg, #4c1d95, #8b5cf6)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Cherry Blossom",gradient:"linear-gradient(135deg, #a9005c, #fc008f)",textColor:"#ffffff",raised:"#fc008f",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Red Dark",gradient:"linear-gradient(135deg, #790909, #f70131)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Raind ",gradient:"linear-gradient(90deg, #3f5efb 0%, #fc466b) 100%",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Neon",gradient:"linear-gradient(273deg, #ee49fd 0%, #6175ff 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Azure",gradient:"linear-gradient(273deg, #0172af 0%, #74febd 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Butterfly",gradient:"linear-gradient(273deg, #ff4060 0%, #fff16a 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Colombia",gradient:"linear-gradient(174deg, #fbf63f  0%, #0000bb 45%, #ff0000 99%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"}],V=z("div");V.id="yt-enhancement-panel";const at=Oe.map((e,n)=>`
        <label >
          <div class="theme-option">
          <div class="theme-preview" style="background: ${e.gradient};"></div>
          <input type="radio" name="theme" value="${n}" ${n===0?"checked":""}>
              <span style="${e.name==="Default / Reload Page"?"color: red; ":""}" class="theme-name">${e.name}</span>
              </div>
        </label>
    `).join(""),it=Object.entries(xe).map(([e,n])=>`<option value="${e}" ${e===xe?"selected":""}>${n}</option>`).join("");function rt(){const e=document.cookie.split("; ").find(h=>h.startsWith("PREF="));if(!e)return"light";const n=new URLSearchParams(e.split("&").join("&"));return["400","4000000","40000400","40000000"].includes(n.get("f6"))?"dark":"light"}let Me=rt();const Ne=`
   <div class="container-mdcm">
    <div class="header-mdcm">
      <h1> <i class="fa-brands fa-youtube"></i> YouTube Tools</h1>
      <div class="icons-mdcm">
        <a href="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js"
          target="_blank">
          <button class="icon-btn-mdcm">
            <i class="fa-solid fa-arrows-rotate"></i>
          </button>
        </a>
        <a href="https://github.com/DeveloperMDCM" target="_blank">
          <button class="icon-btn-mdcm">
            <i class="fa-brands fa-github"></i>
          </button>
        </a>
        <button class="icon-btn-mdcm" id="shareBtn-mdcm">
          <i class="fa-solid fa-share-alt"></i>
        </button>
        <button class="icon-btn-mdcm" id="importExportBtn">
          <i class="fa-solid fa-file-import"></i>
        </button>
        <button id="menu-settings-icon" class="icon-btn-mdcm tab-mdcm" data-tab="menu-settings">
          <i class="fa-solid fa-gear"></i>
        </button>
        <button class="icon-btn-mdcm close_menu_settings">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>

    <div class="tabs-mdcm">
      <button class="tab-mdcm active" data-tab="general">
        <i class="fa-solid fa-shield-halved"></i>
        General
      </button>
      <button class="tab-mdcm" data-tab="themes">
        <i class="fa-solid fa-palette"></i>
        Themes
      </button>
      <button class="tab-mdcm" data-tab="stats">
        <i class="fa-solid fa-square-poll-vertical"></i>
        Stats
      </button>
      <button class="tab-mdcm" data-tab="headers">
        <i class="fa-regular fa-newspaper"></i>
        Header
      </button>
    </div>


    <div id="general" class="tab-content active">

      <div class="options-mdcm">
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="hide-comments-toggle"> Hide Comments
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="hide-sidebar-toggle"> Hide Sidebar
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="autoplay-toggle"> Disable Autoplay
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="subtitles-toggle"> Disable Subtitles
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" checked id="dislikes-toggle"> Show Dislikes
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="themes-toggle"> Active Themes
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="translation-toggle"> Translate comments
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="avatars-toggle"> Download avatars
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="reverse-mode-toggle"> Reverse mode
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" checked id="wave-visualizer-toggle"> Wave visualizer Beta
          </div>
        </label>
        <div class="quality-selector-mdcm" style="grid-column: span 2;">
          <div class="select-wrapper-mdcm">
            <label>Effect wave visualizer:
              <select class="tab-button-active" id="select-wave-visualizer-select">
                <option value="linea">Line smooth</option>
                <option value="barras">Vertical bars</option>
                <option value="curva">Curved</option>
                <option value="picos">Smooth peaks</option>
                <option value="solida">Solid wave</option>
                <option value="dinamica">Dynamic wave</option>
                <option value="montana">Smooth mountain</option>
              </select>
            </label>
          </div>
        </div>
        <div class="quality-selector-mdcm" style="grid-column: span 2;">
          <div class="select-wrapper-mdcm">
            <label>Default video player quality:
              <select class="tab-button-active" id="select-video-qualitys-select">
                <option value="144">144</option>
                <option value="240">240</option>
                <option value="360">360</option>
                <option value="480">480</option>
                <option value="720">720</option>
                <option value="1080">1080</option>
                <option value="1440">1440</option>
                <option value="2160">2160</option>
              </select>
            </label>
          </div>
        </div>
        <div class="quality-selector-mdcm" style="grid-column: span 2;">
          <div class="select-wrapper-mdcm">
            <label>Language for translate comments: 
              <select class="tab-button-active" id="select-languages-comments-select">
              ${it}
              </select>
            </label>
          </div>
        </div>
        <div class="slider-container-mdcm" style="grid-column: span 2;">
          <label>Video Player Size: <span id="player-size-value">100</span>%</label>
          <input type="range" id="player-size-slider" class="slider-mdcm" min="50" max="150" value="100">
          <button class="reset-btn-mdcm" id="reset-player-size">Reset video size</button>
        </div>
      </div>
    </div>

    <div id="themes" class="tab-content">
      <div class="themes-hidden">
        <div class="options-mdcm" style="margin-bottom: 10px;">
          <div>
            <h4>Choose a Theme</h4>
            <p>Disable cinematic Lighting</p>
            ${Me==="dark"?"":'<p style="color: red; margin: 10px 0;font-size: 11px;">Activate dark mode to use this option</p>'}
          </div>
        </div>
        <div class="options-mdcm">
          <label>
            <div class="theme-option option-mdcm">
              <input type="radio" class="radio-mdcm" name="theme" value="custom" checked>
              <span class="theme-name">Custom</span>
            </div>
          </label>
          <label>
            <div class="theme-option option-mdcm theme-selected-normal">
              <input type="radio" class="radio-mdcm" name="theme" value="normal">
              <span class="theme-name">Selected Themes</span>
            </div>
          </label>
        </div>
        <div class="themes-options">
          <div class="options-mdcm">
            ${at}
          </div>
        </div>
        <div class="theme-custom-options">
          <div class="options-mdcm">
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Progressbar Video:</label>
                <input type="color" id="progressbar-color-picker" class="color-picker-mdcm" value="#ff0000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Background Color:</label>
                <input type="color" id="bg-color-picker" class="color-picker-mdcm" value="#000000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Primary Color:</label>
                <input type="color" id="primary-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Secondary Color:</label>
                <input type="color" id="secondary-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Header Color:</label>
                <input type="color" id="header-color-picker" class="color-picker-mdcm" value="#000000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Icons Color:</label>
                <input type="color" id="icons-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Menu Color:</label>
                <input type="color" id="menu-color-picker" class="color-picker-mdcm" value="#000000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Line Color Preview:</label>
                <input type="color" id="line-color-picker" class="color-picker-mdcm" value="#ff0000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Time Color Preview:</label>
                <input type="color" id="time-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="stats" class="tab-content">
      <div id="yt-stats-toggle">
        <div class="stat-row">
          <div>Foreground Time</div>
          <div class="progress">
            <div class="progress-bar total-bar" id="usage-bar"></div>
          </div>
          <div id="total-time">0h 0m 0s</div>
        </div>
        <div class="stat-row">
          <div>Video Time</div>
          <div class="progress">
            <div class="progress-bar video-bar" id="video-bar"></div>
          </div>
          <div id="video-time">0h 0m 0s</div>
        </div>
        <div class="stat-row">
          <div>Shorts Time</div>
          <div class="progress">
            <div class="progress-bar shorts-bar" id="shorts-bar"></div>
          </div>
          <div id="shorts-time">0h 0m 0s</div>
        </div>
      </div>
    </div>

    <div id="headers" class="tab-content">
      <div class="options-mdcm">
        <label>Available in next update</label>
      </div>
    </div>


    <div id="menu-settings" class="tab-content">
      <div class="options-mdcm">
        <h4 style="margin: 10px 0">Menu Appearance</h4>
      </div>
      <div class="options-settings-mdcm">
        <div class="option-settings-mdcm">
          <label>Backgrounds:</label>
          <div class="color-boxes" id="bg-color-options">
            <div class="color-box" data-type="bg" data-value="#252525" style="background-color: #252525;"></div>
            <div class="color-box" data-type="bg" data-value="#1e1e1e" style="background-color: #1e1e1e;"></div>
            <div class="color-box" data-type="bg" data-value="#3a3a3a" style="background-color: #3a3a3a;"></div>
            <div class="color-box" data-type="bg" data-value="#4a4a4a" style="background-color: #4a4a4a;"></div>
            <div class="color-box" data-type="bg" data-value="#000000" style="background-color: #000000;"></div>
            <div class="color-box" data-type="bg" data-value="#00000000" style="background-color: #00000000;"></div>
            <div class="color-box" data-type="bg" data-value="#2d2d2d" style="background-color: #2d2d2d;"></div>
            <div class="color-box" data-type="bg" data-value="#444" style="background-color: #444;"></div>
          </div>
        </div>

        <div class="option-settings-mdcm">
          <label>Accent Colors:</label>
          <div class="color-boxes" id="bg-accent-color-options">
            <div class="color-box" data-type="accent" data-value="#ff0000" style="background-color: #ff0000;"></div>
            <div class="color-box" data-type="accent" data-value="#000000" style="background-color: #000000;"></div>
            <div class="color-box" data-type="accent" data-value="#009c37 " style="background-color: #009c37 ;"></div>
            <div class="color-box" data-type="accent" data-value="#0c02a0 " style="background-color: #0c02a0 ;"></div>
          </div>
        </div>

        <div class="option-settings-mdcm">
          <label>Titles Colors:</label>
          <div class="color-boxes" id="text-color-options">
            <div class="color-box" data-type="color" data-value="#ffffff" style="background-color: #ffffff;"></div>
            <div class="color-box" data-type="color" data-value="#cccccc" style="background-color: #cccccc;"></div>
            <div class="color-box" data-type="color" data-value="#b3b3b3" style="background-color: #b3b3b3;"></div>
            <div class="color-box" data-type="color" data-value="#00ffff" style="background-color: #00ffff;"></div>
            <div class="color-box" data-type="color" data-value="#00ff00" style="background-color: #00ff00;"></div>
            <div class="color-box" data-type="color" data-value="#ffff00" style="background-color: #ffff00;"></div>
            <div class="color-box" data-type="color" data-value="#ffcc00" style="background-color: #ffcc00;"></div>
            <div class="color-box" data-type="color" data-value="#ff66cc" style="background-color: #ff66cc;"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="importExportArea">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3>Import / Export Settings</h3>
        <button class="icon-btn-mdcm" id="closeImportExportBtn">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <textarea id="config-data" placeholder="Paste configuration here to import"></textarea>
      <div class="action-buttons-mdcm">
        <button id="export-config" class="action-btn-mdcm">Export</button>
        <button id="import-config" class="action-btn-mdcm">Import</button>
      </div>
    </div>

    <div id="shareDropdown">
      <a href="https://www.facebook.com/sharer/sharer.php?u=${ce}" target="_blank" data-network="facebook"
        class="share-link"><i class="fa-brands fa-facebook"></i> Facebook</a><br>
      <a href="https://twitter.com/intent/tweet?url=${ce}" target="_blank" data-network="twitter"
        class="share-link"><i class="fa-brands fa-twitter"></i> Twitter</a><br>
      <a href="https://api.whatsapp.com/send?text=${ce}" target="_blank" data-network="whatsapp"
        class="share-link"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a><br>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${ce}" target="_blank"
        data-network="linkedin" class="share-link"><i class="fa-brands fa-linkedin"></i> LinkedIn</a><br>
    </div>


  </div>
  <div class="actions-mdcm">
    <div class="developer-mdcm">
      Developed by <a href="https://github.com/DeveloperMDCM" target="_blank">DeveloperMDCM</a>
    </div>
    <span style="color: #fff" ;>v2.3.4.2</span>
  </div>
  `,nt=Ue?Ue.createHTML(`
      ${Ne}
    `):`
      ${Ne}
    `;V.innerHTML=nt,Xe(V);function Ge(){const e=r("ytd-topbar-menu-button-renderer");if(!e||o("icon-menu-settings"))return;const n=z("div");n.id="toggle-button";const a=z("i");a.id="icon-menu-settings",a.classList.add("fa-solid","fa-gear"),n.appendChild(a),e.parentElement.insertBefore(n,e);let h=!1;n.addEventListener("click",()=>{h=!h,V.style.display=V.style.display==="none"?"block":"none"})}Ge();let qe=!1;r(".close_menu_settings").addEventListener("click",()=>{qe=!qe,V.style.display=V.style.display==="none"?"block":"none"});const We=v(".tab-mdcm"),st=v(".tab-content");We.forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-tab");We.forEach(a=>a.classList.remove("active")),st.forEach(a=>a.classList.remove("active")),e.classList.add("active"),o(n).classList.add("active")})});function Se(){const e={theme:r('input[name="theme"]:checked').value,bgColorPicker:o("bg-color-picker").value,progressbarColorPicker:o("progressbar-color-picker").value,primaryColorPicker:o("primary-color-picker").value,secondaryColorPicker:o("secondary-color-picker").value,headerColorPicker:o("header-color-picker").value,iconsColorPicker:o("icons-color-picker").value,menuColorPicker:o("menu-color-picker").value,lineColorPicker:o("line-color-picker").value,timeColorPicker:o("time-color-picker").value,dislikes:o("dislikes-toggle").checked,themes:o("themes-toggle").checked,translation:o("translation-toggle").checked,avatars:o("avatars-toggle").checked,reverseMode:o("reverse-mode-toggle").checked,waveVisualizer:o("wave-visualizer-toggle").checked,waveVisualizerSelected:o("select-wave-visualizer-select").value,hideComments:o("hide-comments-toggle").checked,hideSidebar:o("hide-sidebar-toggle").checked,disableAutoplay:o("autoplay-toggle").checked,disableSubtitles:o("subtitles-toggle").checked,playerSize:o("player-size-slider").value,selectVideoQuality:o("select-video-qualitys-select").value,languagesComments:o("select-languages-comments-select").value,menu_developermdcm:{bg:R,color:O,accent:N}};GM_setValue("ytSettingsMDCM",JSON.stringify(e))}function lt(){const e=JSON.parse(GM_getValue("ytSettingsMDCM","{}"));e.theme&&(r(`input[name="theme"][value="${e.theme}"]`).checked=!0),e.menu_developermdcm=e.menu_developermdcm||{bg:"#252525",color:"#ffffff",accent:"#ff0000"},o("bg-color-picker").value=e.bgColorPicker||"#000000",o("progressbar-color-picker").value=e.progressbarColorPicker||"#ff0000",o("primary-color-picker").value=e.primaryColorPicker||"#ffffff",o("secondary-color-picker").value=e.secondaryColorPicker||"#ffffff",o("header-color-picker").value=e.headerColorPicker||"#000",o("icons-color-picker").value=e.iconsColorPicker||"#ffffff",o("menu-color-picker").value=e.menuColorPicker||"#000",o("line-color-picker").value=e.lineColorPicker||"#ff0000",o("time-color-picker").value=e.timeColorPicker||"#ffffff",o("dislikes-toggle").checked=e.dislikes||!1,o("themes-toggle").checked=e.themes||!1,o("translation-toggle").checked=e.translation||!1,o("avatars-toggle").checked=e.avatars||!1,o("reverse-mode-toggle").checked=e.reverseMode||!1,o("wave-visualizer-toggle").checked=e.waveVisualizer||!1,o("select-wave-visualizer-select").value=e.waveVisualizerSelected||"dinamica",o("hide-comments-toggle").checked=e.hideComments||!1,o("hide-sidebar-toggle").checked=e.hideSidebar||!1,o("autoplay-toggle").checked=e.disableAutoplay||!1,o("subtitles-toggle").checked=e.disableSubtitles||!1,o("player-size-slider").value=e.playerSize||100,o("select-video-qualitys-select").value=e.selectVideoQuality||"720",o("select-languages-comments-select").value=e.languagesComments||"en",R=e.menu_developermdcm.bg,O=e.menu_developermdcm.color,N=e.menu_developermdcm.accent,v("#bg-color-options .color-box").forEach(n=>{n.classList.toggle("selected",n.dataset.value===R)}),v("#text-color-options .color-box").forEach(n=>{n.classList.toggle("selected",n.dataset.value===O)}),v("#bg-accent-color-options .color-box").forEach(n=>{n.classList.toggle("selected",n.dataset.value===N)}),c("--yt-enhance-menu-bg",R),c("--yt-enhance-menu-text",O),c("--yt-enhance-menu-accent",N),Le(),setTimeout(()=>{q(),e.dislikes&&(je(),Be(),He=!0)},500)}v(".color-box").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.type,a=e.dataset.value;n==="bg"?(R=a,c("--yt-enhance-menu-bg",a),v("#bg-color-options .color-box").forEach(h=>{h.classList.remove("selected")}),e.classList.add("selected")):n==="color"?(O=a,c("--yt-enhance-menu-text",a),v("#text-color-options .color-box").forEach(h=>{h.classList.remove("selected")}),e.classList.add("selected")):n==="accent"&&(N=a,c("--yt-enhance-menu-accent",a),v("#bg-accent-color-options .color-box").forEach(h=>{h.classList.remove("selected")}),e.classList.add("selected")),Se()})});function Le(){o("player-size-value").textContent=o("player-size-slider").value}o("reset-player-size").addEventListener("click",()=>{o("player-size-slider").value=100,Le(),q()});function q(){const e=r(".formulariodescarga"),n=r(".formulariodescargaaudio");e!=null&&(e.classList.add("ocultarframe"),n.classList.add("ocultarframe"));const a={theme:r('input[name="theme"]:checked').value,bgColorPicker:o("bg-color-picker").value,progressbarColorPicker:o("progressbar-color-picker").value,primaryColorPicker:o("primary-color-picker").value,secondaryColorPicker:o("secondary-color-picker").value,headerColorPicker:o("header-color-picker").value,iconsColorPicker:o("icons-color-picker").value,menuColorPicker:o("menu-color-picker").value,lineColorPicker:o("line-color-picker").value,timeColorPicker:o("time-color-picker").value,dislikes:o("dislikes-toggle").checked,themes:o("themes-toggle").checked,translation:o("translation-toggle").checked,avatars:o("avatars-toggle").checked,reverseMode:o("reverse-mode-toggle").checked,waveVisualizer:o("wave-visualizer-toggle").checked,waveVisualizerSelected:o("select-wave-visualizer-select").value,hideComments:o("hide-comments-toggle").checked,hideSidebar:o("hide-sidebar-toggle").checked,disableAutoplay:o("autoplay-toggle").checked,disableSubtitles:o("subtitles-toggle").checked,playerSize:o("player-size-slider").value,selectVideoQuality:o("select-video-qualitys-select").value,languagesComments:o("select-languages-comments-select").value,menu_developermdcm:{bg:R,color:O,accent:N}};c("--yt-enhance-menu-bg",a.menu_developermdcm.bg),c("--yt-enhance-menu-text",a.menu_developermdcm.color),c("--yt-enhance-menu-accent",a.menu_developermdcm.accent),Ee(),o("shareBtn-mdcm").addEventListener("click",function(t){t.stopPropagation();const i=o("shareDropdown");i.style.display=i.style.display==="block"?"none":"block"}),document.addEventListener("click",function(t){t.stopPropagation();const i=o("shareDropdown"),s=o("shareBtn-mdcm");t.target!==s&&(i.style.display="none")}),o("importExportBtn").addEventListener("click",function(){o("importExportArea").classList.toggle("active")}),o("closeImportExportBtn").addEventListener("click",function(){o("importExportArea").classList.remove("active")});const h=o("comments");h&&(h.style.display=a.hideComments?"none":"block");const w=r(".themes-hidden");w&&(w.style.display=a.themes?"block":"none");const g=r("#secondary > #secondary-inner");if(g){g.classList.add("side-moi");const t=r(".side-moi");t.style.display=a.hideSidebar?"none":"block"}const W=r(".ytp-autonav-toggle-button");if(W){const t=W.getAttribute("aria-checked")==="true";(a.disableAutoplay&&t||!a.disableAutoplay&&!t)&&W.click()}const F=r(".ytp-subtitles-button");if(F){const t=F.getAttribute("aria-pressed")==="true";(a.disableSubtitles&&t||!a.disableSubtitles&&!t)&&F.click()}const ue=r("video");ue&&(ue.style.transform=`scale(${a.playerSize/100})`);const me=r("div#movie_player");let Y=localStorage.getItem("yt-player-quality");if(v("#select-video-qualitys-select, #select-languages-comments-select").forEach(t=>{t.addEventListener("change",()=>{q()})}),me!=null)if(Y){let t=JSON.parse(Y);t.data=JSON.stringify({quality:a.selectVideoQuality,previousQuality:240}),localStorage.setItem("yt-player-quality",JSON.stringify(t))}else{let t={data:JSON.stringify({quality:720,previousQuality:240}),expiration:Date.now()+31536e6,creation:Date.now()};localStorage.setItem("yt-player-quality",JSON.stringify(t))}const p=Oe[a.theme],B=r('input[name="theme"][value="custom"]').checked,$e=r('input[name="theme"][value="normal"]').checked,J=r(".theme-custom-options"),ae=r(".theme-selected-normal");B!=null&&(ae.style.display="flex",J.style.display="flex",r(".themes-options").style.display="none"),$e&&(r('input[name="theme"][value="custom"]').checked=!1);function he(){if(a.themes)if(Me==="dark"&&!B){if(r(".themes-options").style.display="block",ae.style.display="none",J.style.display="none",a.theme==="0"){GM_addStyle(`
              .botones_div {
               background-color: transparent;
               border: none;
               color: #ccc !important;
               user-select: none;
             }
               `);return}c("--yt-spec-base-background",p.gradient),c("--yt-spec-text-primary",p.textColor),c("--yt-spec-text-secondary",p.textColor),c("--yt-spec-menu-background",p.gradient),c("--yt-spec-icon-inactive",p.textColor),c("--yt-spec-brand-icon-inactive",p.textColor),c("--yt-spec-brand-icon-active",p.gradient),c("--yt-spec-static-brand-red",p.gradient),c("--yt-spec-raised-background",p.raised),c("--yt-spec-static-brand-red",p.CurrentProgressVideo),c("--yt-spec-static-brand-white",p.textColor),c("--ytd-searchbox-background",p.gradient),c("--ytd-searchbox-text-color",p.textColor),c("--ytcp-text-primary",a.textColor),GM_addStyle(`
  
              .botones_div {
              background-color: transparent;
              border: none;
              color: #999999;
              user-select: none;
            }
              .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
              background:  ${p.gradient} !important;
              }
            #background.ytd-masthead { background: ${p.gradient}  !important; }
            .ytp-swatch-background-color {
            background: ${p.gradient} !important;
          }
          #shorts-container, #page-manager.ytd-app {
            background: ${p.gradient.replace(/(#[0-9a-fA-F]{6})/g,"$136")};
          }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${p.gradient}  !important;}
            .buttons-tranlate {
            background: ${p.btnTranslate} !important;
            }
            .badge-shape-wiz--thumbnail-default {
            color: ${p.videoDuration} !important;
            background: ${p.gradient} !important;
            }
            #logo-icon {
            color:  ${p.textLogo} !important;
          }
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color:  ${p.iconsColor} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color:  ${p.iconsColor} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color:  ${p.iconsColor} !important;
          }
          .ytp-svg-fill {
            fill:  ${p.iconsColor} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20{
            fill:  ${p.iconsColor} !important;
          }
  
  
            `)}else Me==="dark"&&B?(c("--yt-spec-base-background",a.bgColorPicker),c("--yt-spec-text-primary",a.primaryColorPicker),c("--yt-spec-text-secondary",a.secondaryColorPicker),c("--yt-spec-menu-background",a.menuColorPicker),c("--yt-spec-icon-inactive",a.iconsColorPicker),c("--yt-spec-brand-icon-inactive",a.primaryColorPicker),c("--yt-spec-brand-icon-active",a.primaryColorPicker),c("--yt-spec-raised-background",a.headerColorPicker),c("--yt-spec-static-brand-red",a.lineColorPicker),c("--yt-spec-static-brand-white",a.timeColorPicker),c("--ytd-searchbox-background",a.primaryColorPicker),c("--ytd-searchbox-text-color",a.secondaryColorPicker),c("--ytcp-text-primary",a.primaryColorPicker),GM_addStyle(`
            .html5-video-player {
                color: ${a.primaryColorPicker} !important;
              }
              .ytp-volume-slider-handle:before, .ytp-volume-slider-handle, .ytp-tooltip.ytp-preview:not(.ytp-text-detail) {
                background-color: ${a.iconsColorPicker} !important;
              }
                .ytp-autonav-toggle-button[aria-checked=true] {
                  background-color: ${a.iconsColorPicker} !important;
                }
                  .tp-yt-iron-icon {
                   fill: ${a.iconsColorPicker} !important;
                  }
          
             .botones_div {
            background-color: transparent;
            border: none;
            color: ${a.iconsColorPicker} !important;
            user-select: none;
          }
              #container.ytd-searchbox {
              color: red !important;
              }
            .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
            background:  ${a.primaryColorPicker} !important;
            }
            .yt-spec-icon-shape {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              color: ${a.iconsColorPicker} !important;
          }
            .ytp-time-current, .ytp-time-separator, .ytp-time-duration {
              color: ${a.iconsColorPicker} !important;
            }
            #background.ytd-masthead { background: ${a.headerColorPicker}  !important; }
            .ytp-swatch-background-color {
            background: ${a.progressbarColorPicker} !important;
          }
        #shorts-container, #page-manager.ytd-app {
            background: ${a.bgColorPicker}36;
            }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${a.bgColorPicker}  !important;}
  
            .badge-shape-wiz--thumbnail-default {
            color: ${a.timeColorPicker} !important;
             background: ${a.secondaryColor} !important;
            }
             #logo-icon {
             color:  ${a.primaryColorPicker} !important;
          }
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color:  ${a.iconsColorPicker} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color:  ${a.iconsColorPicker} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color:  ${a.iconsColorPicker} !important;
          }
          .ytp-svg-fill {
            fill:  ${a.iconsColorPicker} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20{
            fill:  ${a.iconsColorPicker} !important;
          }
            `)):GM_addStyle(`
            .botones_div {
             background-color: transparent;
             border: none;
             color: #000 !important;
             user-select: none;
           }
             `);else GM_addStyle(`
          .botones_div {
           background-color: transparent;
           border: none;
           color: #ccc !important;
           user-select: none;
         }
           `)}GM_addStyle(`
      #columns.style-scope.ytd-watch-flexy {
        flex-direction: ${a.reverseMode?"row-reverse":"row"} !important;
        padding-left: ${a.reverseMode?"20px":"0"} !important;
        }
        #secondary.style-scope.ytd-watch-flexy {display: ${a.hideSidebar?"none":"block"} !important;}


        #icon-menu-settings {
         color: ${a.iconsColorPicker} !important;
        }
        .ytp-chrome-bottom {
          width: ${a.hideSidebar?"100%":""} !important;
          ${a.hideSidebar?"left: 0;":""}
        }
          .ytp-progress-bar-container {
            left: ${a.hideSidebar?"4px":""} !important;
          }
      `),he();function ie(){if(!a.waveVisualizer){ye(!1);return}const t=r("video"),i=r(".ytp-miniplayer-ui");if(t&&document.location.href.includes("watch")||i){if(et()){_();return}t===P&&Pe?y&&t.paused===!1&&ke():(ye(!0),Qe(t))}}let re=window.location.href,be=setInterval(function(){window.location.href!==re&&(re=window.location.href,ve())},1e3);function ve(){setTimeout(()=>{q()},1e3),clearInterval(be)}function fe(){if(r("#button_copy_description"))return;const t=r("#bottom-row.style-scope.ytd-watch-metadata");if(!t){console.warn("No se encontr\xF3 el contenedor de descripci\xF3n. No se insertar\xE1 el bot\xF3n.");return}t.insertAdjacentHTML("beforebegin",`
        <div id="button_copy_description" style="display: flex; justify-content: end; align-items: center;margin-top: 10px;" >
          <button id="copy-description" class="botones_div" type="button" style="cursor: pointer;">
            <i style="font-size: 20px;" class="fa-solid fa-copy"></i>     
          </button>
        </div>
      `),o("copy-description").addEventListener("click",()=>{const s=[...document.querySelectorAll('script[type="application/ld+json"]')];for(let m of s)try{const f=JSON.parse(m.innerText);if(f["@type"]==="VideoObject"){const x=`\u{1F4C5} Date published: ${f.uploadDate||"No disponible"}
Author: ${f.author||"No disponible"}
\u{1F3AC} Name video: ${f.name||"No disponible"}
\u{1F5BC}\uFE0F Thumbnail: ${Array.isArray(f.thumbnailUrl)?f.thumbnailUrl.join(", "):f.thumbnailUrl||"No disponible"}
\u{1F4DD} Description: ${f.description||"No disponible"}


\u{1F3AD} Category: ${f.genre||"No disponible"}
`;navigator.clipboard.writeText(x)}}catch{L("error","Error parsing JSON-LD")}finally{L("success","Descripci\xF3n copiada")}})}fe();async function ge(){const t=v("#content-text");if(r(".buttons-tranlate"))return;const i=xe,s=o("select-languages-comments-select").value;for(let x=0;x<t.length;x++){const T=Object.entries(i).map(([A,C])=>`<option value="${A}" ${A===s?"selected":""}>${C}</option>`).join(""),le=`
          <div class="traductor-container" data-index="${x}">
          <button class="buttons-tranlate" id="btn${x}"> Translate <i class="fa-solid fa-language"></i></button>
          <select class="select-traductor" id="select${x}">
           ${T}
          </select>
          </div>
        `;t[x].insertAdjacentHTML("afterend",le)}const m=v(".buttons-tranlate"),f=v(".select-traductor");m.forEach((x,T)=>{x.addEventListener("click",()=>{const A=`?client=dict-chrome-ex&sl=auto&tl=${f[T].value}&q=`+t[T].textContent;fetch(Ze+A).then(C=>C.json()).then(C=>{t[T].textContent=C[0][0],m[T].textContent="Translated"}).catch(C=>{console.error("Error en la traducci\xF3n:",C)})})})}function Q(t){v(t).forEach(i=>i.remove())}function ne(){v("#author-thumbnail-button #img.style-scope.yt-img-shadow").length>0&&a.avatars&&(Q(".yt-image-avatar-download"),b());const i=r("#content-text"),s=r("ytd-item-section-renderer[static-comments-header] #contents");a.translation&&(i!==void 0||s!==void 0)&&(Q(".buttons-tranlate"),Q(".select-traductor"),ge())}window.onscroll=()=>{ne()};const u=r(".anchored-panel.style-scope.ytd-shorts #contents.style-scope.ytd-item-section-renderer.style-scope.ytd-item-section-renderer");u&&new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&u.addEventListener("scroll",()=>{ne()})})},{threshold:.1}).observe(u);function b(){v("#author-thumbnail-button #img.style-scope.yt-img-shadow").forEach(i=>{if(i.parentElement.querySelector(".yt-image-avatar-download"))return;const s=z("button");s.innerHTML='<i class="fa fa-download"></i>',s.classList.add("yt-image-avatar-download"),s.onclick=async function(){try{const m=i.src.split("=")[0],x=await(await fetch(m)).blob(),T=URL.createObjectURL(x),A=i.closest("ytd-comment-thread-renderer, ytd-comment-renderer")?.querySelector("#author-text");let C=A?A.textContent.trim():"avatar";C=C.replace(/[\/\\:*?"<>|]/g,"");const X=z("a");X.href=T,X.download=`${C}_avatar.jpg`||"avatar.jpg",document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(T)}catch(m){console.error("Error al descargar la imagen:",m)}},i.parentElement.style.position="relative",i.parentElement.appendChild(s)})}const I="custom-classic-btn",k=()=>{const i=`https://www.youtube.com/watch?v=${window.location.pathname.split("/").pop()}`;window.open(i,"_blank"),r("video.video-stream.html5-main-video").pause()},K=()=>{const t=z("button");return t.classList.add(I),t.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-screen-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" /><path d="M7 20l10 0" /><path d="M9 16l0 4" /><path d="M15 16l0 4" /><path d="M17 4h4v4" /><path d="M16 9l5 -5" /></svg>',t.title="Classic mode",t.onclick=k,t},H=()=>{document.location.pathname.startsWith("/shorts")?v("#actions").forEach(i=>{i.querySelector(`.${I}`)||i.prepend(K())}):v(`.${I}`).forEach(i=>i.remove())},se=()=>{new MutationObserver(()=>{H(),Ge()}).observe(document.body,{childList:!0,subtree:!0})};if(H(),se(),r("body")!=null){const t=r("ytd-item-section-renderer[static-comments-header] #contents");t!=null&&a.theme!=="custom"&&(s=>new IntersectionObserver(f=>{if(f[0].isIntersecting)t.style.background=`${p.gradient??""}`;else return}).observe(r(`${s}`)))("ytd-item-section-renderer[static-comments-header] #contents")}function De(t){if(isNaN(t))return"0h 0m 0s";t=Math.floor(t);const i=Math.floor(t/3600),s=Math.floor(t%3600/60),m=t%60;return`${i}h ${s}m ${m}s`}function Je(){o("total-time").textContent=De(Z),o("video-time").textContent=De(ee),o("shorts-time").textContent=De(te);const t=86400;o("usage-bar").style.width=`${Z/t*100}%`,o("video-bar").style.width=`${ee/t*100}%`,o("shorts-bar").style.width=`${te/t*100}%`}function pt(t){if(/\/shorts\//.test(window.location.pathname))return"shorts";let i=t;for(;(i=i.parentElement)!==null;)if(i.classList.contains("shorts-container")||i.classList.contains("reel-video")||i.tagName==="YTD-REEL-VIDEO-RENDERER")return"shorts";return t.closest("ytd-watch-flexy")||t.closest("#primary-inner")||t.closest("ytd-thumbnail")||t.closest("ytd-rich-item-renderer")?"video":null}function ut(){const t=v("video");for(const i of t)if(!i.paused&&!i.ended&&i.readyState>2)return i;return null}function ye(t=!1){if(t&&de&&(cancelAnimationFrame(de),de=null),P&&(P.removeEventListener("play",ke),P.removeEventListener("pause",_),P.removeEventListener("ended",_)),t){if(d&&d.parentNode&&(d.parentNode.removeChild(d),d=null,l=null),y&&y.parentNode&&(y.parentNode.removeChild(y),y=null),oe){try{oe.disconnect()}catch(i){console.error("Error desconectando el source:",i)}oe=null}if(E){try{E.close()}catch(i){console.error("Error cerrando AudioContext:",i)}E=null}P&&P[pe]&&delete P[pe],P=null,Pe=!1}else d&&(d.style.opacity="0"),y&&(y.style.opacity="0")}function mt(){if(d)return;const t=document.body;d=document.createElement("canvas"),d.id="wave-visualizer-canvas",d.width=window.innerWidth,d.height=_e,d.style.position="fixed",d.style.left="0",d.style.top="0",d.style.width="100%",d.style.pointerEvents="none",d.style.backgroundColor="transparent",d.style.zIndex="10000",d.style.opacity="0",d.style.transition="opacity 0.3s",t.appendChild(d),l=d.getContext("2d")}function ht(){if(y)return;y=z("div"),y.id="wave-visualizer-control";const t=o("select-wave-visualizer-select");Te=a.waveVisualizerSelected,t.addEventListener("change",i=>{Te=i.target.value,t.value=i.target.value,Se()})}function ke(){const t=o("wave-visualizer-canvas");E&&E.state==="suspended"&&E.resume(),t&&(t.style.opacity="1",y&&(y.style.opacity="1"))}function Qe(t){if(t[pe]){L("error","This video already has a MediaElementSource, skipping setup");return}if(t[pe]=!0,ye(!1),P=t,mt(),ht(),!E){const s=window.AudioContext||window.webkitAudioContext;E=new s}j=E.createAnalyser(),j.fftSize=2048,j.smoothingTimeConstant=.85,M=j.fftSize,ze=new Uint8Array(M),S=new Array(M).fill(128);try{oe=E.createMediaElementSource(t),oe.connect(j),j.connect(E.destination)}catch(s){return L("error","MediaElementSource or error:",s),ye(!0),Qe(t)}t.removeEventListener("play",ke),t.removeEventListener("pause",_),t.removeEventListener("ended",_),t.addEventListener("play",ke),t.addEventListener("pause",_),t.addEventListener("ended",_);const i=()=>{d&&(d.width=window.innerWidth,d.height=_e)};window.removeEventListener("resize",i),window.addEventListener("resize",i),Ke(),Pe=!0}function Ke(){if(de=requestAnimationFrame(Ke),parseFloat(d.style.opacity)<=0)return;j.getByteTimeDomainData(ze);for(let i=0;i<M;i++)S[i]+=ct*(ze[i]-S[i]);l.clearRect(0,0,d.width,d.height);let t=d.width/M;switch(Te){case"linea":{l.lineWidth=2,l.strokeStyle="lime",l.beginPath();let i=0;for(let s=0;s<M;s++){let m=Math.max(0,S[s]-128)*D;s===0?l.moveTo(i,m):l.lineTo(i,m),i+=t}l.stroke();break}case"barras":{let i=0;for(let s=0;s<M;s+=5){let m=Math.max(0,S[s]-128)*D;l.fillStyle="cyan",l.fillRect(i,0,t*4,m),i+=t*5}break}case"curva":{l.lineWidth=2,l.strokeStyle="yellow",l.beginPath(),l.moveTo(0,Math.max(0,S[0]-128)*D);for(let i=0;i<M-1;i++){let s=i*t,m=(i+1)*t,f=Math.max(0,S[i]-128)*D,x=Math.max(0,S[i+1]-128)*D,T=s+t/3,le=f,A=m-t/3,C=x;l.bezierCurveTo(T,le,A,C,m,x)}l.stroke();break}case"picos":{l.fillStyle="magenta";let i=0;for(let s=0;s<M;s+=5){let m=Math.max(0,S[s]-128)*D;l.beginPath(),l.arc(i,m,2,0,Math.PI*2),l.fill(),i+=t*5}break}case"solida":{l.beginPath();let i=0;l.moveTo(0,0);for(let s=0;s<M;s++){let m=Math.max(0,S[s]-128)*D;l.lineTo(i,m),i+=t}l.lineTo(d.width,0),l.closePath(),l.fillStyle="rgba(0,255,0,0.3)",l.fill();break}case"dinamica":{let i=l.createLinearGradient(0,0,d.width,0);i.addColorStop(0,"red"),i.addColorStop(.5,"purple"),i.addColorStop(1,"blue"),l.lineWidth=3,l.strokeStyle=i,l.beginPath();let s=0;for(let m=0;m<M;m++){let f=Math.max(0,S[m]-128)*D;m===0?l.moveTo(s,f):l.lineTo(s,f),s+=t}l.stroke();break}case"montana":{l.beginPath();let i=0;l.moveTo(0,0);for(let s=0;s<M;s++){let m=(S[s]-128)*D*.8;l.lineTo(i,m),i+=t}l.lineTo(d.width,0),l.closePath(),l.fillStyle="rgba(128,128,255,0.4)",l.fill();break}default:break}}const bt=new MutationObserver(()=>{const t=ut();t!==G&&(G=t,G&&(we=pt(G)))});ie(),setInterval(()=>{const t=Date.now(),i=(t-Ve)/1e3;document.visibilityState==="visible"&&(Z+=i),G&&!G.paused&&(we==="video"?ee+=i:we==="shorts"&&(te+=i)),Ve=t,GM_setValue($.USAGE,Z),GM_setValue($.VIDEO,ee),GM_setValue($.SHORTS,te),Je()},tt),bt.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),Je(),Se()}let Fe=!0;function Ee(){const e=r(".style-scope .ytd-watch-metadata"),n=r("#contents");e!=null&&Fe&&(Fe=!1,(e.offsetWidth||e.offsetHeight||e.getClientRects().length||n!=null)&&e.insertAdjacentHTML("beforebegin",Re));const a=r(".formulariodescarga"),h=r(".formulariodescargaaudio"),w=r("#descargando"),g=r("#descargandomp3"),W=r(".btn1"),F=r(".btn2"),ue=r(".btn3"),me=r(".selectcalidades"),Y=r(".selectcalidadesaudio");[a,h].forEach(u=>u?.addEventListener("click",b=>b.preventDefault())),me?.addEventListener("change",u=>{w.src=`https://loader.to/api/button/?url=${window.location.href}&f=${u.target.value}&color=0af`,w.classList.remove("ocultarframe")}),Y?.addEventListener("change",u=>{g.src=`https://loader.to/api/button/?url=${window.location.href}&f=${u.target.value}&color=049c16`,g.classList.remove("ocultarframeaudio")}),ue?.addEventListener("click",()=>{a.style.display="none",h.style.display="none"}),W?.addEventListener("click",()=>{me?.classList.remove("ocultarframe"),w?.classList.add("ocultarframe"),a?.classList.remove("ocultarframe"),a.style.display="",Y?.classList.add("ocultarframeaudio"),h?.classList.add("ocultarframe"),a?.reset()}),F?.addEventListener("click",()=>{h?.classList.remove("ocultarframe"),a?.classList.add("ocultarframe"),g?.classList.remove("ocultarframeaudio"),h.style.display="",Y?.classList.remove("ocultarframeaudio"),g?.classList.add("ocultarframeaudio"),h?.reset()});const p=r("#imagen"),B=r("#eyes");function $e(){const u=r(".buffer_video");u&&(u.dataset.listenerAdded||(u.addEventListener("click",()=>{const b=r("video.video-stream.html5-main-video");if(!b){console.log("No se encontr\xF3 el video en la p\xE1gina.");return}const I=new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0});b.dispatchEvent(I),setTimeout(()=>{const k=r("body > div.ytp-popup.ytp-contextmenu > div > div > div:nth-child(7)");k?k.click():console.log("Opci\xF3n no encontrada, intenta aumentar el tiempo de espera.")},1e3)}),u.dataset.listenerAdded="true"))}setInterval($e,2e3);let J=0;const ae=r("#repeatvideo"),he=r(".icon-tabler-repeat"),ie=r("#movie_player > div.html5-video-container > video");ae!=null&&(ae.onclick=()=>{(r("#cinematics > div")!=null||ie!=null)&&(J+=1,setInterval(()=>{switch(J){case 1:document.querySelector("#movie_player > div.html5-video-container > video").setAttribute("loop","true"),he.innerHTML=`  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"></path>
                      <path d="M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"></path>
                      <path d="M3 3l18 18"></path>
                   </svg> `;break;case 2:J=0,document.querySelector("#movie_player > div.html5-video-container > video").removeAttribute("loop"),he.innerHTML=` <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"
                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                      <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
                    </svg>`;break}},1e3))});const re=r("#cinematics > div");re!=null&&(re.style="position: fixed; inset: 0px; pointer-events: none; transform: scale(1.5, 2)");const be=r("#reset_button");be?.addEventListener("click",function(){localStorage.getItem("colores")!=null&&(localStorage.removeItem("colores"),r("#ojosprotect").style.backgroundColor="transparent",setTimeout(()=>{location.reload()},400))}),p!=null&&(p.onclick=()=>{if(r("#cinematics > div")!=null||ie!=null){let b=new URLSearchParams(window.location.search).get("v");const I=`https://i.ytimg.com/vi/${b}/maxresdefault.jpg`;fetch(I).then(k=>{if(!k.ok)throw new Error(`HTTP error! Status: ${k.status}`);return k.blob()}).then(k=>{if(k.size/1024>=20){window.open(`https://i.ytimg.com/vi/${b}/maxresdefault.jpg`,"popUpWindow","height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes");const H=URL.createObjectURL(k),se=z("a");se.href=H;const Ye=r("h1.style-scope.ytd-watch-metadata").innerText;se.download=`${Ye}_maxresdefault.jpg`,se.click(),URL.revokeObjectURL(H)}else console.log("La imagen no excede los 20 KB. No se descargar\xE1.")}).catch(k=>{alert("No found image"),console.error("Error al obtener la imagen:",k)})}});const ve=r(".external_link");ve!=null&&(ve.onclick=()=>{const u=new URLSearchParams(window.location.search);let b;b=u.get("v"),window.open(`https://www.y2mate.com/es/convert-youtube/${b}`,"popUpWindow","height=800,width=1000,left=50%,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=yes,location=no,directories=yes, status=no")});const fe=r(".view_external_link");fe!=null&&(fe.onclick=()=>{r("video").click();const u=new URLSearchParams(window.location.search);let b;b=u.get("v"),window.open(`https://www.youtube.com/embed/${b}?rel=0&controls=2&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&autoplay=1`)});const ge=r(".video_picture_to_picture");ge!=null&&(ge.onclick=()=>{const u=r("video");"pictureInPictureEnabled"in document?document.pictureInPictureElement||u.requestPictureInPicture().then(()=>{}).catch(b=>{console.error("Error al activar el modo Picture-in-Picture:",b)}):alert("Picture-in-Picture not supported")},B?.addEventListener("input",function(){(r("#cinematics > div")!=null||ie!=null)&&(r("#ojosprotect").style.backgroundColor=B.value)}),clearInterval(Ee));const Q=r(".checked_updates");Q!=null&&(Q.onclick=()=>{window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js")});const ne=r(".screenshot_video");if(ne!=null)ne.onclick=()=>{const u=r("video"),b=z("canvas");b.width=u.videoWidth,b.height=u.videoHeight,b.getContext("2d").drawImage(u,0,0,b.width,b.height);const k=b.toDataURL("image/png"),K=z("a");K.href=k;const H=r("h1.style-scope.ytd-watch-metadata").innerText;K.download=`${u.currentTime.toFixed(0)}s_${H}.png`,K.click()};else{const u=r(".containerButtons");u!=null&&(u.innerHTML="")}clearInterval(Ee)}console.log("Script en ejecuci\xF3n by: DeveloperMDCM"),console.log(`%cYoutube Tools Extension NEW UI
%cRun %c(v2.3.4.2)
By: DeveloperMDCM.`,"color: #F00; font-size: 24px; font-family: sans-serif;","font-size: 14px; font-family: monospace;","color: #00aaff; font-size: 16px; font-family: sans-serif;"),localStorage.getItem("notification-developerMDCM")||(L("info","Youtube Tools by: DeveloperMDCM :)"),localStorage.setItem("notification-developerMDCM",!0)),v("input").forEach(e=>{e.addEventListener("change",q),e.type==="range"&&e.addEventListener("change",()=>{Le(),q()})}),o("export-config").addEventListener("click",()=>{const e=GM_getValue("ytSettingsMDCM","{}");o("config-data").value=e;const n=e;try{JSON.parse(n),GM_setValue("ytSettingsMDCM",n),setTimeout(()=>{L("success","Configuration export successfully!")},1e3)}catch{L("error","Invalid configuration data. Please check and try again.")}}),o("import-config").addEventListener("click",()=>{const e=o("config-data").value;try{JSON.parse(e),GM_setValue("ytSettingsMDCM",e),setTimeout(()=>{L("success","Configuration imported successfully!"),window.location.reload()},1e3),window.location.reload()}catch{L("error","Invalid configuration data. Please check and try again.")}}),V.style.display="none";let P=null,Te="dinamica",E=null,j=null,oe=null,de=null,d=null,l=null,y=null,M=0,ze=null,S=[],Pe=!1;const ct=.05,_e=240,D=_e/90,pe="wave_visualizer_processed";function dt(e,n){const a=setInterval(()=>{r(e)&&(clearInterval(a),n())},100)}o("wave-visualizer-toggle").addEventListener("change",()=>{r("#wave-visualizer-toggle").checked?L("success","Wave visualizer enabled"):(_(),L("success","Wave visualizer disabled realod page"),setTimeout(()=>{window.location.reload()},1e3))}),dt("ytd-topbar-menu-button-renderer",lt),document.addEventListener("yt-navigate-finish",()=>{document.location.href.includes("watch")||_()})})();
