// ==UserScript==
// @name       🔥🔥🔥文本选中复制(通用)🔥🔥🔥
// @name:en    Text Copy Universal
// @name:zh-CN 🔥🔥🔥文本选中复制(通用)🔥🔥🔥
// @description       文本选中复制通用版本，适用于大多数网站
// @description:en    Text copy general version, suitable for most websites.
// @description:zh-CN 文本选中复制通用版本，适用于大多数网站
// @namespace  https://github.com/WindrunnerMax/TKScript
// @version    1.1.2
// @author     Czy
// @match      http://*/*
// @match      https://*/*
// @supportURL https://github.com/WindrunnerMax/TKScript/issues
// @license    GPL License
// @run-at     document-end
// @grant      GM_registerMenuCommand
// @grant      GM_unregisterMenuCommand
// @grant      GM_notification
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/F09F94A5F09F94A5F09F94A5E69687E69CACE98089E4B8ADE5A48DE588B628E9809AE794A829F09F94A5F09F94A5F09F94A5.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/F09F94A5F09F94A5F09F94A5E69687E69CACE98089E4B8ADE5A48DE588B628E9809AE794A829F09F94A5F09F94A5F09F94A5.meta.js
// ==/UserScript==
!function(){"use strict";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===n&&o.firstChild?o.insertBefore(c,o.firstChild):o.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}('.__copy-currency-container{background-color:#4c98f7;border-radius:3px;bottom:0;display:flex;flex-direction:column;left:-150px;position:fixed;transition:all .3s;width:150px;z-index:9999999999}.__copy-currency-container:before{background-color:#4c98f7;border-radius:20px;content:"";cursor:pointer;height:20px;position:absolute;right:-6px;top:calc(50% - 10px);width:20px}.__copy-currency-container:hover{left:0}.__copy-currency-container>.__copy-currency-button{border:1px solid #fff;border-radius:3px;color:#fff!important;cursor:pointer;font-size:12px!important;margin:5px;padding:5px 3px 5px 4px;text-align:center;user-select:none;z-index:9999999999}');const e="true",t="false";var n=(e=>(e[e.OPEN=0]="OPEN",e[e.CLOSE=1]="CLOSE",e))(n||{});const o="copy-currency--",c=(e,t)=>{const n=document.createElement("style");n.id=e,n.innerText=t;const[o]=document.getElementsByTagName("body");o?o.appendChild(n):window.addEventListener("DOMContentLoaded",(()=>document.body.appendChild(n)))},r=e=>{const t=document.getElementById(e);t&&t.remove()},s=e=>e.stopPropagation();(n=>{const c=document.createElement("div");c.className="__copy-currency-container",document.body.appendChild(c),n.forEach((n=>{const r=document.createElement("div");r.className="__copy-currency-button";const s=localStorage.getItem(o+n.storageKey);n.status=s===e?1:0;const a=()=>{1===n.status?(n.openFunction(),n.status=0,r.textContent=n.closeName,localStorage.setItem(o+n.storageKey,e)):(n.closeFunction(),n.status=1,r.textContent=n.openName,localStorage.setItem(o+n.storageKey,t))};a(),r.addEventListener("click",a),c.appendChild(r)}))})([{status:n.CLOSE,storageKey:"selectstart-and-copy",openName:"✅ 启动解除复制限制",closeName:"❌ 关闭解除复制限制",openFunction:()=>{window.addEventListener("selectstart",s,!0),window.addEventListener("copy",s,!0),c(o+"selectstart-and-copy","*{user-select: auto !important;-webkit-user-select: auto !important;}")},closeFunction:()=>{window.removeEventListener("selectstart",s,!0),window.removeEventListener("copy",s,!0),r(o+"selectstart-and-copy")}},{status:n.CLOSE,storageKey:"contextmenu",openName:"✅ 启动解除右键限制",closeName:"❌ 关闭解除右键限制",openFunction:()=>window.addEventListener("contextmenu",s,!0),closeFunction:()=>window.removeEventListener("contextmenu",s,!0)},{status:n.CLOSE,storageKey:"keydown",openName:"✅ 启动解除键盘限制",closeName:"❌ 关闭解除键盘限制",openFunction:()=>window.addEventListener("keydown",s,!0),closeFunction:()=>window.removeEventListener("keydown",s,!0)}])}();