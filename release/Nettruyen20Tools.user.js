// ==UserScript==
// @name         Nettruyen Tools
// @namespace    nettruyen
// @description  Remove ads and added zoom out options
// @version      1.1
// @include      https://*nettruyen*
// @author       kylyte
// @license      MIT
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nettruyenus.com
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @noframes
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Nettruyen20Tools.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Nettruyen20Tools.meta.js
// ==/UserScript==
function removeAds(){GM_addStyle("\n    .reading-control > .mrb5,\n    div.mrb10:nth-of-type(2),\n    .hidden-sm.hidden-xs.mrb10.alert-info.alert,\n    .top > i,\n    .notify_block,\n    .text-center.page-chapter,\n    #nt_comments > div.mrt5,\n    .facebook-like,\n    .mrb5.text-center.container,\n    .container div:not(.top)>div.mrb5.mrt5.text-center>a,\n    .footer {\n      display: none !important;\n    }\n    .scroll-to-fixed-fixed.chapter-nav {\n      position: unset !important;\n      z-index: 100 !important;\n      box-shadow: unset !important;\n    }\n  ")}const defaultSettings={zoomFactor:1};let settings=GM_getValue("settings",defaultSettings);function zoomOutImages(){for(var t=document.querySelectorAll(".box_doc img[src]"),e=settings.zoomFactor,n=0;n<t.length;n++){var o=t[n];o.style.width=o.naturalWidth*e+"px",o.style.height=o.naturalHeight*e+"px"}}function setZoomFactor(t){settings.zoomFactor=t,GM_setValue("settings",settings),location.reload()}const zoomLevels=[1,.9,.8,.7,.6,.5,.4,.3,.2],zoomNames=["100%","90%","80%","70%","60%","50%","40%","30%","20%"];for(var i=0;i<zoomLevels.length;i++){let t=(settings.zoomFactor===zoomLevels[i]?"[x]":"[ ]")+" Zoom Out "+zoomNames[i];GM_registerMenuCommand(t,setZoomFactor.bind(null,zoomLevels[i]))}function lazyloadComment(){function t(t){console.log("Loading content for",t)}document.querySelectorAll(".tab-content").forEach((function(e){if(e.getBoundingClientRect().top<window.innerHeight)t(e);else{var n=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(t(e.target),n.unobserve(e.target))}))}),{rootMargin:"0px",threshold:.1});n.observe(e)}}))}removeAds(),document.addEventListener("DOMContentLoaded",lazyloadComment),window.addEventListener("load",zoomOutImages);