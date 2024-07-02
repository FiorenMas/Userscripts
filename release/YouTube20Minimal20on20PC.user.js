// ==UserScript==
// @name         YouTube Minimal on PC
// @version      0.5
// @description  Watch YouTube with the least CPU usage
// @namespace    http://tampermonkey.net/
// @author       CY Fung
// @license      MIT
// @supportURL   https://github.com/cyfung1031/userscript-supports
// @run-at       document-start
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @icon         https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-minimal.png
// @grant        GM_registerMenuCommand
// @require      https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js#sha512=wT7uPE7tOP6w4o28u1DN775jYjHQApdBnib5Pho4RB0Pgd9y7eSkAV1BTqQydupYDB9GBhTcQQzyNMPMV3cAew==
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20Minimal20on20PC.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20Minimal20on20PC.meta.js
// ==/UserScript==
"use strict";!function(){let e=Cookies.get("userjs-ym-url",{domain:"youtube.com",secure:!0});if(e)return Cookies.remove("userjs-ym-url",{domain:"youtube.com",secure:!0}),t=e,o="app="+("w"===e.charAt(8)?"desktop":"m"),"string"==typeof t&&(t+=(t.indexOf("?")>0?"&":"?")+o),e=t,void location.replace(e);var t,o;function u(){return location.href.replace(/(?<=[&?])(persist_app|app)=\w+(&|$)/g,"").replace(/[?&]$/,"")}let p=u()||"",s=p.charAt(8)||"",r="w"===s,c="m"===s,i=!1;function m(e,t,o){GM_registerMenuCommand(e,(function(){if(i){let e=u();e=o?e.replace("https://www.youtube.com/","https://m.youtube.com/"):e.replace("https://m.youtube.com/","https://www.youtube.com/"),Cookies.set("userjs-ym-url",e,{domain:"youtube.com",secure:!0})}location.replace(t)}))}(p.indexOf(".youtube.com/watch")>=0||p.endsWith("youtube.com/"))&&(i=!0),r?(m("Switch to YouTube Mobile persistently","https://m.youtube.com/?persist_app=1&app=m",!0),m("Switch to YouTube Moble temporarily","https://m.youtube.com/?persist_app=0&app=m",!0)):c&&(m("Switch to YouTube Dekstop persistently","http://www.youtube.com/?persist_app=1&app=desktop",!1),m("Switch to YouTube Dekstop temporarily","http://www.youtube.com/?persist_app=0&app=desktop",!1)),m=null}();