// ==UserScript==
// @name         Quillbot Premium Unlocker
// @namespace    quillbot.taozhiyu.gitee.io
// @version      0.3.2
// @author       longkidkoolstar
// @match        https://quillbot.com/*
// @icon         https://quillbot.com/favicon.png
// @require      https://greasyfork.org/scripts/455943-ajaxhooker/code/ajaxHooker.js?version=1124435
// @run-at       document-start
// @grant        none
// @license      none
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Quillbot20Premium20Unlocker.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Quillbot20Premium20Unlocker.meta.js
// ==/UserScript==
!function(){"use strict";ajaxHooker.hook((e=>{e.url.endsWith("get-account-details")&&(e.response=e=>{const t=JSON.parse(e.responseText),o="data"in t?t.data:t;o.profile.accepted_premium_modes_tnc=!0,o.profile.premium=!0,e.responseText=JSON.stringify("data"in t?(t.data=o,t):o)})})),window.addEventListener("load",(()=>{const e=document.createElement("div");e.style.position="fixed",e.style.bottom="20px",e.style.right="20px",e.style.padding="15px",e.style.backgroundColor="#f9f9f9",e.style.boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)",e.style.border="1px solid #ccc",e.style.borderRadius="8px",e.style.zIndex="10000",e.style.fontFamily="Arial, sans-serif",e.style.color="#333",e.style.textAlign="center";const t=document.createElement("p");t.textContent="Join our Discord community for discussions, support, and additional resources, including User-Scripts not posted on Greasyfork!",t.style.margin="0 0 10px";const o=document.createElement("a");o.href="https://discord.gg/JrweGzdjwA",o.textContent="Join Discord",o.style.color="#007bff",o.style.textDecoration="none",o.style.fontWeight="bold",o.target="_blank",o.addEventListener("mouseover",(()=>o.style.textDecoration="underline")),o.addEventListener("mouseout",(()=>o.style.textDecoration="none")),e.appendChild(t),e.appendChild(o);const n=document.createElement("button");n.textContent="✖",n.style.position="absolute",n.style.top="5px",n.style.right="5px",n.style.background="none",n.style.border="none",n.style.cursor="pointer",n.style.fontSize="16px",n.style.color="#333",n.addEventListener("click",(()=>{document.body.removeChild(e)})),e.appendChild(n),document.body.appendChild(e)}))}();