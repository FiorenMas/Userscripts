// ==UserScript==
// @name         ChatGPT ChatTree 🌳
// @namespace    https://czz9.top
// @version      2025.04.25.04
// @author   cuizhenzhi
// @match    *://chatgpt.com/*
// @grant    GM_addStyle
// @grant    GM_getResourceText
// @resource languagepackage https://cdn.jsdelivr.net/gh/cuizhenzhi/ChatTree/lang.json
// @resource css https://cdn.jsdelivr.net/gh/cuizhenzhi/ChatTree/index.css
// @resource hljscss https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css
// @require  https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js
// @require  https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js
// @require  https://cdnjs.cloudflare.com/ajax/libs/interact.js/1.10.11/interact.min.js
// @require  https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @require      https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js
// @run-at document-end
// @homepageURL         https://github.com/cuizhenzhi/ChatTree
// @supportURL   https://github.com/cuizhenzhi/ChatTree/issues
// @license GPL-2.0-only
// @grant        GM_xmlhttpRequest
// @connect localhost
// @connect analyze.chattree.cc
// @connect *.chattree.cc
// @connect chattree.cc
// @connect ip-api.com
// @icon data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="8" fill="none" stroke="white" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="rgb(25, 195, 125)"/><path d="M40 61 V89 Q40 90 41 90 H59 Q60 90 60 89 V61 Q60 60 61 61 Q66 65 69 61 70 60 71 61 75 65 79 61 80 60 81 61 85 65 89 61 90 60 89 59 75 55 61 41 60 40 60.5 40.5 Q66 45 69 41 70 40 71 41 75 45 79 41 80 40 79 39 70 35 61 26 60 25 61 26 Q65 30 69 26 70 25 69 24 60 20 51 11 50 10 49 11 40 20 31 24 30 25 31 26 Q35 30 39 26 40 25 39 26 30 35 21 39 20 40 21 41 Q25 45 29 41 30 40 31 41 35 45 39 41 40 40 39 41 25 55 11 59 10 60 11 61 Q15 65 19 61 20 60 21 61 25 65 29 61 30 60 31 61 35 65 39 61 40 60 40 61"></path></svg>
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/ChatGPT20ChatTree20F09F8CB3.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/ChatGPT20ChatTree20F09F8CB3.meta.js
// ==/UserScript==
