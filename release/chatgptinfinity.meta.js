// ==UserScript==
// @name                ChatGPT Infinity ∞
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @version             2025.3.15.1
// @license             MIT
// @icon                https://assets.chatgptinfinity.com/images/icons/infinity-symbol/circled/with-robot/icon48.png?v=69e434b
// @icon64              https://assets.chatgptinfinity.com/images/icons/infinity-symbol/circled/with-robot/icon64.png?v=69e434b
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          waterfox
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @compatible          whale
// @compatible          kiwi
// @match               *://chatgpt.com/*
// @connect             cdn.jsdelivr.net
// @connect             gm.chatgptinfinity.com
// @connect             raw.githubusercontent.com
// @require             https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.7.1/dist/chatgpt.min.js#sha256-uv1k2VxGy+ri3+2C+D/kTYSBCom5JzvrNCLxzItgD6M=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@4ec0a82/chromium/extension/components/modals.js#sha256-/WTJT4ykm9m003gIIZnvYnZNXSwsrc7FsqeEFIozRQ8=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@4ec0a82/chromium/extension/components/toggles.js#sha256-9Oc1cL75YDDVpJP9qt8htiYRz0uM8SUMH2uJrsm8DUw=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@1ae4e33/chromium/extension/lib/dom.js#sha256-U+SUWAkqLIY6krdR2WPhVy5/f+cTV03n3F8b+Y+/Py0=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@2ec25ce/chromium/extension/lib/settings.js#sha256-cyRP9w9Di8RjzNZSJeah3ILK7dx57598Rn4BZL/eiv0=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@6089211/chromium/extension/lib/ui.js#sha256-/szI0bDpLL1aVTrc29iyToff58VMfeM/lSyjHWTipt0=
// @resource rpgCSS     https://assets.aiwebextensions.com/styles/rising-particles/dist/gray.min.css?v=727feff#sha256-48sEWzNUGUOP04ur52G5VOfGZPSnZQfrF3szUr4VaRs=
// @resource rpwCSS     https://assets.aiwebextensions.com/styles/rising-particles/dist/white.min.css?v=727feff#sha256-6xBXczm7yM1MZ/v0o1KVFfJGehHk47KJjq8oTktH4KE=
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM_getResourceText
// @grant               GM_xmlhttpRequest
// @grant               GM.xmlHttpRequest
// @noframes
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/chatgptinfinity.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/chatgptinfinity.meta.js
// @homepageURL         https://www.chatgptinfinity.com
// @supportURL          https://support.chatgptinfinity.com
// @contributionURL     https://github.com/sponsors/adamlui
// ==/UserScript==
