// ==UserScript==
// @name         Auto Click "I'm not a robot"
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Automatically clicks the "I'm not a robot" checkbox on reCaptcha V2, reCaptcha V2 callback, reCaptcha V2 Enterprise, and hCaptcha captchas
// @author       JJJ
// @match        *://*/*
// @icon         https://pngimg.com/uploads/robot/robot_PNG96.png
// @grant        none
// @license      MIT
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Auto20Click2022I27m20not20a20robot22.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Auto20Click2022I27m20not20a20robot22.meta.js
// ==/UserScript==
!function(){"use strict";const e="aria-checked";function t(e){return null===e.offsetParent}const c={findCheckboxElement(){return document.querySelector(".recaptcha-checkbox-border")||document.querySelector('[role="checkbox"][aria-labelledby="recaptcha-anchor-label"]')||(e="#checkbox",document.querySelector(e));var e},solve(){const c=this.findCheckboxElement();c&&!t(c)&&"true"!==c.getAttribute(e)&&c.click()}},o={findCallbackFunction(){if("undefined"!=typeof ___grecaptcha_cfg){const e=Object.keys(___grecaptcha_cfg.clients).filter((e=>"load"!==e));for(const t of e){const e=___grecaptcha_cfg.clients[t];if(e&&"function"==typeof e.hl?.l?.callback)return e.hl.l.callback}}return null},solve(){const e=this.findCallbackFunction();"function"==typeof e&&e()}},n={findEnterpriseCheckboxElement:()=>document.querySelector(".enterprise-checkbox")||document.querySelector('[aria-labelledby="recaptcha-accessible-status"]'),solve(){const c=this.findEnterpriseCheckboxElement();c&&!t(c)&&"true"!==c.getAttribute(e)&&c.click()}},r={findCheckboxElement:()=>document.querySelector(".hcaptcha-checkbox")||document.querySelector('[aria-labelledby="hcaptcha-anchor-label"]'),solve(){const c=this.findCheckboxElement();c&&!t(c)&&"true"!==c.getAttribute(e)&&c.click()}},l={solve(){c.solve(),o.solve(),n.solve(),r.solve()}};function a(){new MutationObserver((e=>{for(const t of e)"childList"===t.type&&t.addedNodes.length>0&&l.solve()})).observe(document.body,{childList:!0,subtree:!0})}function s(){l.solve(),setInterval((()=>{l.solve()}),1e3)}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(()=>{a(),s()})):(a(),s());const i=navigator.userAgent.toLowerCase(),u=["chrome","edg","brave","firefox"].some((e=>i.includes(e)));console.log(u?"Running on a compatible browser":"Running on an unsupported browser")}();