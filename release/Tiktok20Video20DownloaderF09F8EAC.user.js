// ==UserScript==
// @name         Tiktok Video Downloader🎬
// @namespace    https://greasyfork.org/en/scripts/431826
// @version      1.3
// @description  Download tiktok videos without watermark
// @author       YAD
// @match        *://*.tiktok.com/*
// @icon         https://miro.medium.com/v2/resize:fit:512/1*KX6NTUUHWlCP4sCXz28TBA.png
// @grant        none
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Tiktok20Video20DownloaderF09F8EAC.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Tiktok20Video20DownloaderF09F8EAC.meta.js
// ==/UserScript==
!function(){"use strict";function e(e){if(e.nextElementSibling&&e.nextElementSibling.classList.contains("download-btn"))return;const t=document.createElement("button");t.textContent="⬇️",t.className="download-btn",t.style.position="absolute",t.style.left="10px",t.style.bottom="50%",t.style.zIndex="1000",t.style.padding="10px",t.style.color="#fff",t.style.background="#007bff",t.style.border="none",t.style.borderRadius="50px",t.addEventListener("click",(function(){const t=e.src||e.querySelector("source").src,n=t.split("/").pop(),o=document.createElement("a");o.href=t,o.download=n.endsWith(".mp4")?n:n+".mp4",document.body.appendChild(o),o.click(),document.body.removeChild(o)})),e.parentNode.insertBefore(t,e.nextSibling)}document.querySelectorAll("video").forEach(e),new MutationObserver((()=>{document.querySelectorAll("video").forEach(e)})).observe(document.body,{childList:!0,subtree:!0})}();