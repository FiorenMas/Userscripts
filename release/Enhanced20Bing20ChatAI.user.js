// ==UserScript==
// @name        Enhanced Bing ChatAI
// @namespace   EnhancedBingChatAI
// @description Improves Bing ChatAI user experience by preventing accidental scrolling and increasing input character limit
// @version     1.4.2
// @author      CriDos
// @grant       GM_setClipboard
// @match       https://*.bing.com/*
// @match       https://copilot.microsoft.com/*
// @license     MIT
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Enhanced20Bing20ChatAI.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Enhanced20Bing20ChatAI.meta.js
// ==/UserScript==
window.addEventListener("wheel",(e=>{e.target.className.includes("cib-serp-main")&&e.stopPropagation()}));var increaseCharacterLimit=async()=>{const e=1e5;for(;;)try{const t=queryElementsInShadowRoots(document.body,"#searchbox");for(let o=0;o<t.length;o++){let n=t[o];if(n.maxLength<e){console.log("Fixing input character limit to "+e),n.maxLength=e;const t=queryElementsInShadowRoots(document.body,".letter-counter");if(t.length>0){let o=t[0].children[0];o.nextSibling.nextSibling.textContent=e}}}}catch(e){console.error(e)}finally{await qWait(1e3)}};function queryElementsInShadowRoots(e,t){let o=[];return function e(n){if(n.shadowRoot){n.shadowRoot.querySelectorAll(t).forEach((e=>{o.push(e)})),n.shadowRoot.childNodes.forEach((t=>{e(t)}))}else n.childNodes.forEach((t=>{e(t)}))}(e),o}function waitForElement(e,t,o=1e3){const n=setInterval((()=>{document.querySelector(e)&&(clearInterval(n),t())}),o)}async function qWait(e){await new Promise((t=>setTimeout(t,e)))}increaseCharacterLimit();