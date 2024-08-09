// ==UserScript==
// @name         youtube-adb
// @name:zh-CN   YouTube去广告
// @name:zh-TW   YouTube去廣告
// @name:zh-HK   YouTube去廣告
// @name:zh-MO   YouTube去廣告
// @namespace    https://github.com/iamfugui/youtube-adb
// @version      6.20
// @description         A script to remove YouTube ads, including static ads and video ads, without interfering with the network and ensuring safety.
// @description:zh-CN   脚本用于移除YouTube广告，包括静态广告和视频广告。不会干扰网络，安全。
// @description:zh-TW   腳本用於移除 YouTube 廣告，包括靜態廣告和視頻廣告。不會干擾網路，安全。
// @description:zh-HK   腳本用於移除 YouTube 廣告，包括靜態廣告和視頻廣告。不會干擾網路，安全。
// @description:zh-MO   腳本用於移除 YouTube 廣告，包括靜態廣告和視頻廣告。不會干擾網路，安全。
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
!function(){let e;const t=["#masthead-ad","ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)",".video-ads.ytp-ad-module","tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)",'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]',"#related #player-ads","#related ytd-ad-slot-renderer","ytd-ad-slot-renderer","yt-mealbar-promo-renderer",'ytd-popup-container:has(a[href="/premium"])',"ad-slot-renderer","ytm-companion-ad-renderer"];function n(e){if(!window.dev)return!1;var t;console.log(window.location.href),console.log(`${t=new Date,`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`}  ${e}`)}function o(e){return!!function(e){return document.getElementById(e)}(e)||(function(e){let t=document.createElement("style");t.id=e,(document.head||document.body).appendChild(t)}(e),!1)}function r(){let e=new Touch({identifier:Date.now(),target:this,clientX:12,clientY:34,radiusX:56,radiusY:78,rotationAngle:0,force:1}),t=new TouchEvent("touchstart",{bubbles:!0,cancelable:!0,view:window,touches:[e],targetTouches:[e],changedTouches:[e]});this.dispatchEvent(t);let n=new TouchEvent("touchend",{bubbles:!0,cancelable:!0,view:window,touches:[],targetTouches:[],changedTouches:[e]});this.dispatchEvent(n)}function d(t,o){const a=document.querySelector(".ytp-ad-skip-button")||document.querySelector(".ytp-skip-ad-button")||document.querySelector(".ytp-ad-skip-button-modern"),c=document.querySelector(".video-ads.ytp-ad-module .ytp-ad-player-overlay")||document.querySelector(".ytp-ad-button-icon");if((a||c)&&-1===window.location.href.indexOf("https://m.youtube.com/")&&(e.muted=!0),a){const t=.5;if(setTimeout(d,1e3*t),e.currentTime>t)return e.currentTime=e.duration,void n("特殊账号跳过按钮广告");a.click(),r.call(a),n("按钮跳过广告")}else c&&(e.currentTime=e.duration,n("强制结束了该广告"))}function a(t){if(o(t))return n("去除播放中的广告功能已在运行"),!1;const r=document.body;new MutationObserver((()=>{e=document.querySelector(".ad-showing video")||document.querySelector("video"),function(){const e=[...document.querySelectorAll("ytd-popup-container")].filter((e=>e.querySelector('a[href="/premium"]')));e.length>0&&(e.forEach((e=>e.remove())),n("移除YT拦截器"));const t=document.querySelectorAll("tp-yt-iron-overlay-backdrop"),o=Array.from(t).find((e=>"2201"===e.style.zIndex));o&&(o.className="",o.removeAttribute("opened"),n("关闭遮罩层"))}(),d(),e.paused&&e.currentTime<1&&(e.play(),n("自动播放视频"))})).observe(r,{childList:!0,subtree:!0}),n("运行去除播放中的广告功能成功")}function c(){!function(e){if(o(e))return n("屏蔽页面广告节点已生成"),!1;let r=document.createElement("style");(document.head||document.body).appendChild(r),r.appendChild(document.createTextNode(function(e){return e.forEach(((t,n)=>{e[n]=`${t}{display:none!important}`})),e.join(" ")}(t))),n("生成屏蔽页面广告节点成功")}("removeADHTMLElement"),a("removePlayerAD")}window.dev=!1,"loading"===document.readyState?(document.addEventListener("DOMContentLoaded",c),n("YouTube去广告脚本即将调用:")):(c(),n("YouTube去广告脚本快速调用:"))}();