// ==UserScript==
// @name     Microsoft Store Direct Download
// @namespace    StephenP
// @version  2.0.4
// @author       StephenP
// @grant    GM.xmlHttpRequest
// @connect	 rg-adguard.net
// @match    https://apps.microsoft.com/*
// @match    https://apps.microsoft.com/*
// @contributionURL https://buymeacoffee.com/stephenp_greasyfork
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Microsoft20Store20Direct20Download.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Microsoft20Store20Direct20Download.meta.js
// ==/UserScript==
var dlBtn;function checkReload(){let e=querySelectorAllShadows(".buy-box-container");e.length>0&&0==querySelectorAllShadows("#dlBtn").length&&((dlBtn=document.createElement("DIV")).id="dlBtn",dlBtn.setAttribute("aria-label","Download from AdGuard Store"),dlBtn.style.background="#00a686",dlBtn.style.font="initial",dlBtn.style.textAlign="center",dlBtn.style.borderRadius="var(--sl-input-border-radius-large)",dlBtn.style.marginTop="0.5em",dlBtn.innerText="",dlBtn.appendChild(document.createElement("P")),dlBtn.firstChild.innerText="▼",dlBtn.addEventListener("click",(function(){openLink(document.location.href,"url")})),e[0].appendChild(dlBtn))}function openLink(e,t){try{dlBtn.firstChild.innerText="...";var l="type="+t+"&url="+e+"&ring=RP&lang=it-IT";GM.xmlHttpRequest({method:"POST",url:"https://store.rg-adguard.net/api/GetFiles",data:l,headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){dlBtn.firstChild.innerText="▼";try{var l=querySelectorAllShadows("#linkTable");l[0].parentNode.removeChild(l[0]);var r=querySelectorAllShadows("#messageFromServer");r[0].parentNode.removeChild(r[0])}catch(e){console.log(e)}try{output(e,t)}catch(e){if(console.log(e),"ProductId"===t)output(e,t);else{openLink(querySelectorAllShadows("[product-id]")[0].getAttribute("product-id"),"ProductId")}}}})}catch(e){if(console.log(e),"ProductId"===t)output(e,t);else{openLink(querySelectorAllShadows("[product-id]")[0].getAttribute("product-id"),"ProductId")}}}function output(e,t){var l=document.createElement("div");l.innerHTML=e.responseText;var r=l.getElementsByTagName("TABLE")[0],n=l.getElementsByTagName("P")[0];if(n.id="messageFromServer",n.style.fontWeight="bold",void 0!==r){if(!document.getElementById("realign")){let e=document.createElement("STYLE");e.id="realign",e.innerText="div.details.two-column{display: initial}}",document.getElementsByTagName("HEAD")[0].appendChild(e)}r.id="linkTable";const e=r.getElementsByTagName("TBODY")[0].getElementsByTagName("TR");for(let t of e)t.firstChild.firstChild&&t.firstChild.firstChild.innerHTML.match(/\.appx$|\.appxbundle$|\.msix$|\.msixbundle$|\.exe$/)&&(t.style.fontWeight="bold");let t=document.createElement("STYLE");t.innerHTML="td:last-child{word-break: break-all}";let l=querySelectorAllShadows("sl-card");if(l.length>0){const e=l[0].parentNode;e.insertBefore(r,e.querySelector("sl-card")),e.insertBefore(t,e.querySelector("sl-card")),r.style.marginTop="2em",n.style.color="green",e.insertBefore(n,e.querySelector("sl-card"))}}else if(void 0===r&&"url"===t){openLink(querySelectorAllShadows("[product-id]")[0].getAttribute("product-id"),"ProductId")}else n.style.color="red",dlBtn.parentNode.parentNode.parentNode.appendChild(n)}function querySelectorAllShadows(e,t=document.body){const l=Array.from(t.querySelectorAll("*")).map((e=>e.shadowRoot)).filter(Boolean).map((t=>querySelectorAllShadows(e,t)));return Array.from(t.querySelectorAll(e)).concat(l).flat()}setInterval(checkReload,1e3);