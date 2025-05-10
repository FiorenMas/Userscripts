// ==UserScript==
// @name                ChatGPT Infinity ∞
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @version             2025.5.9.4
// @license             MIT
// @icon                https://assets.chatgptinfinity.com/images/icons/infinity-symbol/circled/with-robot/icon48.png?v=8df6f33
// @icon64              https://assets.chatgptinfinity.com/images/icons/infinity-symbol/circled/with-robot/icon64.png?v=8df6f33
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
// @match               *://chatgpt.com/*
// @match               *://github.com/*/chatgpt-infinity*
// @connect             cdn.jsdelivr.net
// @connect             gm.chatgptinfinity.com
// @connect             raw.githubusercontent.com
// @require             https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.8.0/dist/chatgpt.min.js#sha256-Xg6XXZ7kcc/MTdlKwUq1rc41WiEwuqhl7DxIjIkzRhc=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@6fec365/chromium/extension/components/modals.js#sha256-KUPHtFuzWZhZNo9JWTunjbRYHgmWPtQZ8UthvHqKu8M=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@6fec365/chromium/extension/components/toggles.js#sha256-VLgDu/motHBarRzqh7WaRcZQgIPFl5KQdDQ0WXmAw5k=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@6fec365/chromium/extension/lib/dom.js#sha256-/X4gSHYxumIYhBjDK8WHUirB6wDwxfwJUI0MEVpCAcw=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@5d9d2c1/chromium/extension/lib/infinity.js#sha256-vFN9aTmdbKiDqjOSXGfZYUoAZLlsnEn6Mb581IyqVaM=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@3a39a39/chromium/extension/lib/settings.js#sha256-5H7cm0js+LPaFJPxWDl5iLS36eQkTuMo9fH7Gn7rAtg=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@8156513/chromium/extension/lib/ui.js#sha256-2yuQbliwz+uaCxUIEeTMWIH5JADHgjDBZD4/8I2T8rE=
// @resource rpgCSS     https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/gray.min.css#sha256-48sEWzNUGUOP04ur52G5VOfGZPSnZQfrF3szUr4VaRs=
// @resource rpwCSS     https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/white.min.css#sha256-6xBXczm7yM1MZ/v0o1KVFfJGehHk47KJjq8oTktH4KE=
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
