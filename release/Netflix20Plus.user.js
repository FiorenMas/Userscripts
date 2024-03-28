// ==UserScript==
// @name                 Netflix Plus
// @name:zh-CN           Netflix Plus
// @name:zh-TW           Netflix Plus
// @namespace            http://tampermonkey.net/
// @version              1.11
// @description          Enable best audio and video and more features on Netflix
// @description:zh-CN    在 Netflix 上开启最佳音视频质量和更多功能
// @description:zh-TW    在 Netflix 上啓用最佳影音品質和更多功能
// @author               TGSAN
// @match                https://www.netflix.com/*
// @icon                 https://www.google.com/s2/favicons?sz=64&domain=netflix.com
// @run-at               document-start
// @grant                unsafeWindow
// @grant                GM_setValue
// @grant                GM_getValue
// @grant                GM_registerMenuCommand
// @grant                GM_unregisterMenuCommand
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Netflix20Plus.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Netflix20Plus.meta.js
// ==/UserScript==
(()=>{"use strict";let e=self.window;self.unsafeWindow?(console.log("[Netflix Plus] use unsafeWindow mode"),e=self.unsafeWindow):console.log("[Netflix Plus] use window mode (your userscript extensions not support unsafeWindow)");const t=class{constructor(e,t){this.script=e,this.target=t,this._cancel=!1,this._replace=null,this._stop=!1}preventDefault(){this._cancel=!0}stopPropagation(){this._stop=!0}replacePayload(e){this._replace=e}};let s=[];e.addBeforeScriptExecuteListener=e=>{if("function"!=typeof e)throw new Error("Event handler must be a function.");s.push(e)},e.removeBeforeScriptExecuteListener=e=>{let t=s.length;for(;t--;)s[t]===e&&s.splice(t,1)};const o=(o,n)=>{if("SCRIPT"!==o.tagName)return;const r=new t(o,n);if("function"==typeof e.onbeforescriptexecute)try{e.onbeforescriptexecute(r)}catch(e){console.error(e)}for(const e of s){if(r._stop)break;try{e(r)}catch(e){console.error(e)}}r._cancel?(o.textContent="",o.remove()):"string"==typeof r._replace&&(o.textContent=r._replace)};new MutationObserver((e=>{for(const t of e)for(const e of t.addedNodes)o(e,t.target)})).observe(document,{childList:!0,subtree:!0});const n=[["setMaxBitrate","Automatically select best bitrate available"],["useallSub","Show all audio-tracks and subs"],["closeimsc","Use SUP subtitle replace IMSC subtitle"],["useDDPandHA","Enable Dolby and HE-AAC 5.1 Audio"],["useFHDAndAVCH","Focus 1080P and High-AVC"]];let r=[];function i(t){let s=GM_getValue("NETFLIX_PLUS_"+t);return"boolean"==typeof s?s:e.globalOptions[t]}function a(t,s){let o=i(s);return e.globalOptions[s]=o,GM_registerMenuCommand((i(s)?"✅":"🔲")+" "+t,(function(){GM_setValue("NETFLIX_PLUS_"+s,!o),e.globalOptions[s]=!o,l()}))}async function l(){for(let e of r)await GM_unregisterMenuCommand(e);r=[];for(let e of n)r.push(await a(e[1],e[0]))}e.globalOptions={useFHDAndAVCH:!e.MSMediaKeys&&!e.WebKitMediaKeys,useDDPandHA:!0,setMaxBitrate:!0,useallSub:!0,get useddplus(){return e.globalOptions.useDDPandHA},useAVC:!1,get useFHD(){return e.globalOptions.useFHDAndAVCH},usedef:!1,get useHA(){return e.globalOptions.useDDPandHA},get useAVCH(){return e.globalOptions.useFHDAndAVCH},usevp9:!1,useav1:!1,useprk:!0,usehevc:!1,usef4k:!0,usef12k:!0,closeimsc:!0},e.onbeforescriptexecute=function(t){let s=document.getElementsByTagName("script");if(0!==s.length)for(let t=0;s.length>t;t++){let o=s[t];if(o.src.includes("cadmium-playercore")){let t=document.createElement("script");t.src="https://static-os.kumo.moe/js/netflix/cadmium-playercore.js",t.crossOrigin=o.crossOrigin,t.async=o.async,t.id=o.id,document.head.appendChild(t);let s=document.createElement("script");s.src="https://static-os.kumo.moe/js/netflix/max-bitrate.js",s.crossOrigin=t.crossOrigin,s.async=t.async,s.id=t.id,document.head.appendChild(s),o.remove(),e.onbeforescriptexecute=null;break}}},l()})();