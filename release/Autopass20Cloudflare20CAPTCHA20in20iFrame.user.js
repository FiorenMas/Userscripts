// ==UserScript==
// @name         Autopass Cloudflare CAPTCHA in iFrame
// @namespace    http://tampermonkey.net/
// @version      2024-03-09
// @description  自动点击“验证您是真人”
// @author       NWater
// @match        https://challenges.cloudflare.com/cdn-cgi/challenge-platform/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pqjc.site
// @grant        none
// @require     https://greasyfork.org/scripts/464929-module-jquery-xiaoying/code/module_jquery_XiaoYing.js
// @require     https://greasyfork.org/scripts/464780-global-module/code/global_module.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Autopass20Cloudflare20CAPTCHA20in20iFrame.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Autopass20Cloudflare20CAPTCHA20in20iFrame.meta.js
// ==/UserScript==
async function main(){"use strict";const l=window.global_module;let n=await l.waitForElement("input[type='checkbox']",null,null,200,-1);l.clickElement($(n).eq(0)[0]),n=await l.waitForElement("span[class='mark']",null,null,200,-1),l.clickElement($(n).eq(0)[0])}$(document).ready((()=>main()));