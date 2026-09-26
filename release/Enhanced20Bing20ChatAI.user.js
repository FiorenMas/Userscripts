// ==UserScript==
// @name        Enhanced Bing ChatAI
// @namespace   EnhancedBingChatAI
// @version     1.4.2
// @author      CriDos
// @grant       GM_setClipboard
// @match       https://*.bing.com/*
// @match       https://copilot.microsoft.com/*
// @license     MIT
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Enhanced20Bing20ChatAI.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Enhanced20Bing20ChatAI.meta.js
// ==/UserScript==
window.addEventListener("wheel",e=>{e.target.className.includes("cib-serp-main")&&e.stopPropagation()});var increaseCharacterLimit=async()=>{for(;;)try{const t=queryElementsInShadowRoots(document.body,"#searchbox");for(let n=0;n<t.length;n++){let o=t[n];if(o.maxLength<1e5){console.log("Fixing input character limit to 100000"),o.maxLength=1e5;const l=queryElementsInShadowRoots(document.body,".letter-counter");if(l.length>0){const a=l[0].children[0].nextSibling.nextSibling;a.textContent=1e5}}}}catch(t){console.error(t)}finally{await qWait(1e3)}};increaseCharacterLimit();function queryElementsInShadowRoots(e,r){let t=[];function n(o){o.shadowRoot?(o.shadowRoot.querySelectorAll(r).forEach(c=>{t.push(c)}),o.shadowRoot.childNodes.forEach(c=>{n(c)})):o.childNodes.forEach(l=>{n(l)})}return n(e),t}function waitForElement(e,r,t=1e3){const n=setInterval(()=>{document.querySelector(e)&&(clearInterval(n),r())},t)}async function qWait(e){await new Promise(r=>setTimeout(r,e))}
