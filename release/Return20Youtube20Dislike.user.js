// ==UserScript==
// @name         Return YouTube Dislike
// @namespace    https://www.returnyoutubedislike.com/
// @homepage     https://www.returnyoutubedislike.com/
// @version      3.1.5
// @encoding     utf-8
// @icon         https://github.com/Anarios/return-youtube-dislike/raw/main/Icons/Return%20Youtube%20Dislike%20-%20Transparent.png
// @author       Anarios & JRWR
// @match        *://*.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Return20Youtube20Dislike.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Return20Youtube20Dislike.meta.js
// @grant        GM.xmlHttpRequest
// @connect      youtube.com
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==
const extConfig={showUpdatePopup:!1,disableVoteSubmission:!1,disableLogging:!0,coloredThumbs:!1,coloredBar:!1,colorTheme:"classic",numberDisplayFormat:"compactShort",numberDisplayRoundDown:!0,tooltipPercentageMode:"none",numberDisplayReformatLikes:!1,rateBarEnabled:!1},LIKED_STATE="LIKED_STATE",DISLIKED_STATE="DISLIKED_STATE",NEUTRAL_STATE="NEUTRAL_STATE";let previousState=3,likesvalue=0,dislikesvalue=0,preNavigateLikeButton=null,isMobile=location.hostname=="m.youtube.com",isShorts=()=>location.pathname.startsWith("/shorts"),mobileDislikes=0;function cLog(t,e=""){extConfig.disableLogging||(e=e.trim()===""?"":`(${e})`,console.log(`[Return YouTube Dislikes] ${t} ${e}`))}function isInViewport(t){const e=t.getBoundingClientRect(),r=innerHeight||document.documentElement.clientHeight,o=innerWidth||document.documentElement.clientWidth;return!(e.top==0&&e.left==0&&e.bottom==0&&e.right==0)&&e.top>=0&&e.left>=0&&e.bottom<=r&&e.right<=o}function getButtons(){if(isShorts()){let t=document.querySelectorAll(isMobile?"ytm-like-button-renderer":"#like-button > ytd-like-button-renderer");for(let e of t)if(isInViewport(e))return e}return isMobile?document.querySelector(".slim-video-action-bar-actions .segmented-buttons")??document.querySelector(".slim-video-action-bar-actions"):document.getElementById("menu-container")?.offsetParent===null?document.querySelector("ytd-menu-renderer.ytd-watch-metadata > div")??document.querySelector("ytd-menu-renderer.ytd-video-primary-info-renderer > div"):document.getElementById("menu-container")?.querySelector("#top-level-buttons-computed")}function getDislikeButton(){if(getButtons().children[0].tagName==="YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER")return getButtons().children[0].children[1]===void 0?document.querySelector("#segmented-dislike-button"):getButtons().children[0].children[1];if(getButtons().querySelector("segmented-like-dislike-button-view-model")){const t=getButtons().querySelector("dislike-button-view-model");return t||cLog("Dislike button wasn't added to DOM yet..."),t}else return getButtons().children[1]}function getLikeButton(){return getButtons().children[0].tagName==="YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER"?document.querySelector("#segmented-like-button")!==null?document.querySelector("#segmented-like-button"):getButtons().children[0].children[0]:getButtons().querySelector("like-button-view-model")??getButtons().children[0]}function getLikeTextContainer(){return getLikeButton().querySelector("#text")??getLikeButton().getElementsByTagName("yt-formatted-string")[0]??getLikeButton().querySelector("span[role='text']")}function getDislikeTextContainer(){const t=getDislikeButton();let e=t?.querySelector("#text")??t?.getElementsByTagName("yt-formatted-string")[0]??t?.querySelector("span[role='text']");if(e===null){let r=document.createElement("span");r.id="text",r.style.marginLeft="6px",t?.querySelector("button").appendChild(r),t&&(t.querySelector("button").style.width="auto"),e=r}return e}function createObserver(t,e){const r=new Object;return r.options=t,r.observer=new MutationObserver(e),r.observe=function(o){this.observer.observe(o,this.options)},r.disconnect=function(){this.observer.disconnect()},r}let shortsObserver=null;isShorts()&&!shortsObserver&&(cLog("Initializing shorts mutation observer"),shortsObserver=createObserver({attributes:!0},t=>{t.forEach(e=>{if(e.type==="attributes"&&e.target.nodeName==="TP-YT-PAPER-BUTTON"&&e.target.id==="button"){cLog("Short thumb button status changed"),e.target.getAttribute("aria-pressed")==="true"?e.target.style.color=e.target.parentElement.parentElement.id==="like-button"?getColorFromTheme(!0):getColorFromTheme(!1):e.target.style.color="unset";return}cLog("Unexpected mutation observer event: "+e.target+e.type)})}));function isVideoLiked(){return isMobile?getLikeButton().querySelector("button").getAttribute("aria-label")=="true":getLikeButton().classList.contains("style-default-active")}function isVideoDisliked(){return isMobile?getDislikeButton()?.querySelector("button").getAttribute("aria-label")=="true":getDislikeButton()?.classList.contains("style-default-active")}function isVideoNotLiked(){return isMobile?!isVideoLiked():getLikeButton().classList.contains("style-text")}function isVideoNotDisliked(){return isMobile?!isVideoDisliked():getDislikeButton()?.classList.contains("style-text")}function checkForUserAvatarButton(){if(!isMobile)return!!document.querySelector("#avatar-btn")}function getState(){return isVideoLiked()?LIKED_STATE:isVideoDisliked()?DISLIKED_STATE:NEUTRAL_STATE}function setLikes(t){if(isMobile){getButtons().children[0].querySelector(".button-renderer-text").innerText=t;return}getLikeTextContainer().innerText=t}function setDislikes(t){if(isMobile){mobileDislikes=t;return}const e=getDislikeTextContainer();e?.removeAttribute("is-empty"),e?.innerText!==t&&(e.innerText=t)}function getLikeCountFromButton(){try{if(isShorts())return!1;let e=(getLikeButton().querySelector("yt-formatted-string#text")??getLikeButton().querySelector("button")).getAttribute("aria-label").replace(/\D/g,"");return e.length>0?parseInt(e):!1}catch{return!1}}(typeof GM_addStyle<"u"?GM_addStyle:t=>{let e=document.createElement("style");e.type="text/css",e.innerText=t,document.head.appendChild(e)})(`
    #return-youtube-dislike-bar-container {
      background: var(--yt-spec-icon-disabled);
      border-radius: 2px;
    }

    #return-youtube-dislike-bar {
      background: var(--yt-spec-text-primary);
      border-radius: 2px;
      transition: all 0.15s ease-in-out;
    }

    .ryd-tooltip {
      position: absolute;
      display: block;
      height: 2px;
      bottom: -10px;
    }

    .ryd-tooltip-bar-container {
      width: 100%;
      height: 2px;
      position: absolute;
      padding-top: 6px;
      padding-bottom: 12px;
      top: -6px;
    }

    ytd-menu-renderer.ytd-watch-metadata {
      overflow-y: visible !important;
    }
    
    #top-level-buttons-computed {
      position: relative !important;
    }
  `);function createRateBar(t,e){if(isMobile||!extConfig.rateBarEnabled)return;let r=document.getElementById("return-youtube-dislike-bar-container");const o=getLikeButton().clientWidth+(getDislikeButton()?.clientWidth??52),i=t+e>0?t/(t+e)*100:50;var n=parseFloat(i.toFixed(1));const s=(100-n).toLocaleString();n=n.toLocaleString();var l;switch(extConfig.tooltipPercentageMode){case"dash_like":l=`${t.toLocaleString()}&nbsp;/&nbsp;${e.toLocaleString()}&nbsp;&nbsp;-&nbsp;&nbsp;${n}%`;break;case"dash_dislike":l=`${t.toLocaleString()}&nbsp;/&nbsp;${e.toLocaleString()}&nbsp;&nbsp;-&nbsp;&nbsp;${s}%`;break;case"both":l=`${n}%&nbsp;/&nbsp;${s}%`;break;case"only_like":l=`${n}%`;break;case"only_dislike":l=`${s}%`;break;default:l=`${t.toLocaleString()}&nbsp;/&nbsp;${e.toLocaleString()}`}if(!r&&!isMobile){let c="",a="";extConfig.coloredBar&&(c="; background-color: "+getColorFromTheme(!0),a="; background-color: "+getColorFromTheme(!1)),getButtons().insertAdjacentHTML("beforeend",`
        <div class="ryd-tooltip" style="width: ${o}px">
        <div class="ryd-tooltip-bar-container">
           <div
              id="return-youtube-dislike-bar-container"
              style="width: 100%; height: 2px;${a}"
              >
              <div
                 id="return-youtube-dislike-bar"
                 style="width: ${i}%; height: 100%${a}"
                 ></div>
           </div>
        </div>
        <tp-yt-paper-tooltip position="top" id="ryd-dislike-tooltip" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1">
           <!--css-build:shady-->${l}
        </tp-yt-paper-tooltip>
        </div>
`);let u=document.getElementById("top-row");u.style.borderBottom="1px solid var(--yt-spec-10-percent-layer)",u.style.paddingBottom="10px"}else document.querySelector(".ryd-tooltip").style.width=o+"px",document.getElementById("return-youtube-dislike-bar").style.width=i+"%",extConfig.coloredBar&&(document.getElementById("return-youtube-dislike-bar-container").style.backgroundColor=getColorFromTheme(!1),document.getElementById("return-youtube-dislike-bar").style.backgroundColor=getColorFromTheme(!0))}function setState(){cLog("Fetching votes...");let t=!1;fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${getVideoId()}`).then(e=>{e.json().then(r=>{if(r&&!("traceId"in e)&&!t){const{dislikes:o,likes:i}=r;if(cLog(`Received count: ${o}`),likesvalue=i,dislikesvalue=o,setDislikes(numberFormat(o)),extConfig.numberDisplayReformatLikes===!0){const n=getLikeCountFromButton();n!==!1&&setLikes(numberFormat(n))}if(createRateBar(i,o),extConfig.coloredThumbs===!0){const n=getDislikeButton();if(isShorts()){const s=getLikeButton().querySelector("tp-yt-paper-button#button"),l=n?.querySelector("tp-yt-paper-button#button");s.getAttribute("aria-pressed")==="true"&&(s.style.color=getColorFromTheme(!0)),l&&l.getAttribute("aria-pressed")==="true"&&(l.style.color=getColorFromTheme(!1)),shortsObserver.observe(s),shortsObserver.observe(l)}else getLikeButton().style.color=getColorFromTheme(!0),n&&(n.style.color=getColorFromTheme(!1))}}})})}function updateDOMDislikes(){setDislikes(numberFormat(dislikesvalue)),createRateBar(likesvalue,dislikesvalue)}function likeClicked(){if(checkForUserAvatarButton()==!0&&(previousState==1?(likesvalue--,updateDOMDislikes(),previousState=3):previousState==2?(likesvalue++,dislikesvalue--,updateDOMDislikes(),previousState=1):previousState==3&&(likesvalue++,updateDOMDislikes(),previousState=1),extConfig.numberDisplayReformatLikes===!0)){const t=getLikeCountFromButton();t!==!1&&setLikes(numberFormat(t))}}function dislikeClicked(){if(checkForUserAvatarButton()==!0){if(previousState==3)dislikesvalue++,updateDOMDislikes(),previousState=2;else if(previousState==2)dislikesvalue--,updateDOMDislikes(),previousState=3;else if(previousState==1&&(likesvalue--,dislikesvalue++,updateDOMDislikes(),previousState=2,extConfig.numberDisplayReformatLikes===!0)){const t=getLikeCountFromButton();t!==!1&&setLikes(numberFormat(t))}}}function setInitialState(){setState()}function getVideoId(){const t=new URL(window.location.href),e=t.pathname;return e.startsWith("/clip")?(document.querySelector("meta[itemprop='videoId']")||document.querySelector("meta[itemprop='identifier']")).content:e.startsWith("/shorts")?e.slice(8):t.searchParams.get("v")}function isVideoLoaded(){if(isMobile)return document.getElementById("player").getAttribute("loading")=="false";const t=getVideoId();return document.querySelector(`ytd-watch-grid[video-id='${t}']`)!==null||document.querySelector(`ytd-watch-flexy[video-id='${t}']`)!==null||document.querySelector('#player[loading="false"]:not([hidden])')!==null}function roundDown(t){if(t<1e3)return t;const e=Math.floor(Math.log10(t)-2),r=e+(e%3?1:0);return Math.floor(t/10**r)*10**r}function numberFormat(t){let e;return extConfig.numberDisplayRoundDown===!1?e=t:e=roundDown(t),getNumberFormatter(extConfig.numberDisplayFormat).format(e)}function getNumberFormatter(t){let e;if(document.documentElement.lang)e=document.documentElement.lang;else if(navigator.language)e=navigator.language;else try{e=new URL(Array.from(document.querySelectorAll("head > link[rel='search']"))?.find(n=>n?.getAttribute("href")?.includes("?locale="))?.getAttribute("href"))?.searchParams?.get("locale")}catch{cLog("Cannot find browser locale. Use en as default for number formatting."),e="en"}let r,o;switch(t){case"compactLong":r="compact",o="long";break;case"standard":r="standard",o="short";break;case"compactShort":default:r="compact",o="short"}return Intl.NumberFormat(e,{notation:r,compactDisplay:o})}function getColorFromTheme(t){let e;switch(extConfig.colorTheme){case"accessible":t===!0?e="dodgerblue":e="gold";break;case"neon":t===!0?e="aqua":e="magenta";break;case"classic":default:t===!0?e="lime":e="red"}return e}let smartimationObserver=null;function setEventListeners(t){let e;function r(){if(isShorts()||getButtons()?.offsetParent&&isVideoLoaded()){const o=getButtons(),i=getDislikeButton();if(preNavigateLikeButton!==getLikeButton()&&i){cLog("Registering button listeners...");try{getLikeButton().addEventListener("click",likeClicked),i?.addEventListener("click",dislikeClicked),getLikeButton().addEventListener("touchstart",likeClicked),i?.addEventListener("touchstart",dislikeClicked),i?.addEventListener("focusin",updateDOMDislikes),i?.addEventListener("focusout",updateDOMDislikes),preNavigateLikeButton=getLikeButton(),smartimationObserver||(smartimationObserver=createObserver({attributes:!0,subtree:!0,childList:!0},updateDOMDislikes),smartimationObserver.container=null);const n=o.querySelector("yt-smartimation");n&&smartimationObserver.container!=n&&(cLog("Initializing smartimation mutation observer"),smartimationObserver.disconnect(),smartimationObserver.observe(n),smartimationObserver.container=n)}catch{return}}i&&(setInitialState(),clearInterval(e))}}cLog("Setting up..."),e=setInterval(r,111)}if(function(){"use strict";window.addEventListener("yt-navigate-finish",setEventListeners,!0),setEventListeners()}(),isMobile){let t=history.pushState;history.pushState=function(...e){return window.returnDislikeButtonlistenersSet=!1,setEventListeners(e[2]),t.apply(history,e)},setInterval(()=>{const e=getDislikeButton();e?.querySelector(".button-renderer-text")===null?getDislikeTextContainer().innerText=mobileDislikes:e&&(e.querySelector(".button-renderer-text").innerText=mobileDislikes)},1e3)}
