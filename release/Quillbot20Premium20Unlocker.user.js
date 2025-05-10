// ==UserScript==
// @name         Quillbot Premium Unlocker
// @namespace    quillbot.taozhiyu.gitee.io
// @version      0.3.3
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
(function(){"use strict";ajaxHooker.hook(e=>{e.url.endsWith("get-account-details")&&(e.response=n=>{const t=JSON.parse(n.responseText),o="data"in t?t.data:t;o.profile.accepted_premium_modes_tnc=!0,o.profile.premium=!0,n.responseText=JSON.stringify("data"in t?(t.data=o,t):o)})}),window.addEventListener("load",s);function s(){const e=i();document.body.appendChild(e)}function i(){const e=document.createElement("div");e.style.position="fixed",e.style.bottom="20px",e.style.right="20px",e.style.padding="15px",e.style.backgroundColor="#f9f9f9",e.style.boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)",e.style.border="1px solid #ccc",e.style.borderRadius="8px",e.style.zIndex="10000",e.style.fontFamily="Arial, sans-serif",e.style.color="#333",e.style.textAlign="center";const n=document.createElement("p");n.textContent="Join our Discord community for discussions, support, and additional resources, including User-Scripts not posted on Greasyfork!",n.style.margin="0 0 10px";const t=document.createElement("a");t.href="https://discord.gg/JrweGzdjwA",t.textContent="Join Discord",t.style.color="#007bff",t.style.textDecoration="none",t.style.fontWeight="bold",t.target="_blank",t.addEventListener("mouseover",()=>t.style.textDecoration="underline"),t.addEventListener("mouseout",()=>t.style.textDecoration="none");const o=document.createElement("button");return o.textContent="\u2716",o.style.position="absolute",o.style.top="5px",o.style.right="5px",o.style.background="none",o.style.border="none",o.style.cursor="pointer",o.style.fontSize="16px",o.style.color="#333",o.addEventListener("click",()=>{document.body.removeChild(e)}),e.appendChild(n),e.appendChild(t),e.appendChild(o),e}})();
