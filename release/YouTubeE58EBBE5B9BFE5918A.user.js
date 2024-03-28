// ==UserScript==
// @name         YouTube去广告 YouTube AD Blocker
// @name:zh-CN   YouTube去广告
// @name:zh-TW   YouTube去廣告
// @name:zh-HK   YouTube去廣告
// @name:zh-MO   YouTube去廣告
// @namespace    https://github.com/iamfugui/YouTubeADB
// @version      6.01
// @description         这是一个去除YouTube广告的脚本，轻量且高效，它能丝滑的去除界面广告和视频广告，包括6s广告。This is a script that removes ads on YouTube, it's lightweight and efficient, capable of smoothly removing interface and video ads, including 6s ads.
// @description:zh-CN   这是一个去除YouTube广告的脚本，轻量且高效，它能丝滑的去除界面广告和视频广告，包括6s广告。
// @description:zh-TW   這是一個去除YouTube廣告的腳本，輕量且高效，它能絲滑地去除界面廣告和視頻廣告，包括6s廣告。
// @description:zh-HK   這是一個去除YouTube廣告的腳本，輕量且高效，它能絲滑地去除界面廣告和視頻廣告，包括6s廣告。
// @description:zh-MO   這是一個去除YouTube廣告的腳本，輕量且高效，它能絲滑地去除界面廣告和視頻廣告，包括6s廣告。
// @author       iamfugui
// @match        *://*.youtube.com/*
// @exclude      *://accounts.youtube.com/*
// @exclude      *://www.youtube.com/live_chat_replay*
// @exclude      *://www.youtube.com/persist_identity*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=YouTube.com
// @grant        none
// @license MIT
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTubeE58EBBE5B9BFE5918A.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTubeE58EBBE5B9BFE5918A.meta.js
// ==/UserScript==
!function(){const e=["#masthead-ad","ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)",".video-ads.ytp-ad-module","tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)",'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]',"#related #player-ads","#related ytd-ad-slot-renderer","ytd-ad-slot-renderer","yt-mealbar-promo-renderer","ad-slot-renderer","ytm-companion-ad-renderer"];function t(e){if(!window.dev)return!1;var t;console.log(window.location.href),console.log(`${t=new Date,`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`}  ${e}`)}function n(e){return!!function(e){return document.getElementById(e)}(e)||(function(e){let t=document.createElement("style");t.id=e,(document.querySelector("head")||document.querySelector("body")).appendChild(t)}(e),!1)}function r(){let e=new Touch({identifier:Date.now(),target:this,clientX:12,clientY:34,radiusX:56,radiusY:78,rotationAngle:0,force:1}),t=new TouchEvent("touchstart",{bubbles:!0,cancelable:!0,view:window,touches:[e],targetTouches:[e],changedTouches:[e]});this.dispatchEvent(t);let n=new TouchEvent("touchend",{bubbles:!0,cancelable:!0,view:window,touches:[],targetTouches:[],changedTouches:[e]});this.dispatchEvent(n)}function o(e,n){let o=document.querySelector(".ad-showing video")||document.querySelector("video"),d=document.querySelector(".ytp-ad-skip-button")||document.querySelector(".ytp-ad-skip-button-modern"),a=document.querySelector(".video-ads.ytp-ad-module .ytp-ad-player-overlay");if(d){if(-1===window.location.href.indexOf("https://m.youtube.com/")&&(o.muted=!0),o.currentTime>.5)return o.currentTime=o.duration,void t("特殊账号跳过按钮广告~~~~~~~~~~~~~");d.click(),r.call(d),t("按钮跳过广告~~~~~~~~~~~~~")}else a?(o.currentTime=o.duration,t("强制结束了该广告~~~~~~~~~~~~~")):t("######广告不存在######")}function d(e){if(n(e))return t("去除播放中的广告功能已在运行"),!1;let r,d;let a=setInterval((()=>{r&&d?clearInterval(a):function(){const e=document.querySelector(".video-ads.ytp-ad-module");if(!e)return t("正在寻找待监听的目标节点"),!1;r=new MutationObserver(o),r.observe(e,{childList:!0,subtree:!0}),d=setInterval(o,500)}()}),16);t("运行去除播放中的广告功能成功")}function a(){!function(r){if(n(r))return t("屏蔽页面广告节点已生成"),!1;let o=document.createElement("style");(document.querySelector("head")||document.querySelector("body")).appendChild(o),o.appendChild(document.createTextNode(function(e){return e.forEach(((t,n)=>{e[n]=`${t}{display:none!important}`})),e.join(" ")}(e))),t("生成屏蔽页面广告节点成功")}("removeADHTMLElement"),d("removePlayerAD")}window.dev=!1,"loading"===document.readyState?(t("YouTube去广告脚本即将调用:"),document.addEventListener("DOMContentLoaded",a)):(t("YouTube去广告脚本快速调用:"),a())}();