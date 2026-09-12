// ==UserScript==
// @name         Auto Click "I'm not a robot"
// @namespace    http://tampermonkey.net/
// @version      0.9
// @author       JJJ
// @match        *://*/*
// @icon         https://pngimg.com/uploads/robot/robot_PNG96.png
// @grant        none
// @license      MIT
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Auto20Click2022I27m20not20a20robot22.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Auto20Click2022I27m20not20a20robot22.meta.js
// ==/UserScript==
(function(){"use strict";const i="#checkbox",n="aria-checked";function s(e){return document.querySelector(e)}function o(e){return e.offsetParent===null}const u={findCheckboxElement(){return document.querySelector(".recaptcha-checkbox-border")||document.querySelector('[role="checkbox"][aria-labelledby="recaptcha-anchor-label"]')||s(i)},solve(){const e=this.findCheckboxElement();e&&!o(e)&&e.getAttribute(n)!=="true"&&e.click()}},d={findCallbackFunction(){if(typeof ___grecaptcha_cfg<"u"){const e=Object.keys(___grecaptcha_cfg.clients).filter(c=>c!=="load");for(const c of e){const t=___grecaptcha_cfg.clients[c];if(t&&typeof t.hl?.l?.callback=="function")return t.hl.l.callback}}return null},solve(){const e=this.findCallbackFunction();typeof e=="function"&&e()}},b={findEnterpriseCheckboxElement(){return document.querySelector(".enterprise-checkbox")||document.querySelector('[aria-labelledby="recaptcha-accessible-status"]')},solve(){const e=this.findEnterpriseCheckboxElement();e&&!o(e)&&e.getAttribute(n)!=="true"&&e.click()}},h={findCheckboxElement(){return document.querySelector(".hcaptcha-checkbox")||document.querySelector('[aria-labelledby="hcaptcha-anchor-label"]')},solve(){const e=this.findCheckboxElement();e&&!o(e)&&e.getAttribute(n)!=="true"&&e.click()}},r={solve(){u.solve(),d.solve(),b.solve(),h.solve()}};function l(){new MutationObserver(c=>{for(const t of c)t.type==="childList"&&t.addedNodes.length>0&&r.solve()}).observe(document.body,{childList:!0,subtree:!0})}function a(){r.solve(),setInterval(()=>{r.solve()},1e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{l(),a()}):(l(),a());const f=navigator.userAgent.toLowerCase(),k=["chrome","edg","brave","firefox"].some(e=>f.includes(e));console.log(k?"Running on a compatible browser":"Running on an unsupported browser")})();
