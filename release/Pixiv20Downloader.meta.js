// ==UserScript==
// @name               Pixiv Downloader
// @namespace          https://greasyfork.org/zh-CN/scripts/432150
// @version            1.5.0
// @author             ruaruarua
// @license            MIT
// @icon               https://www.pixiv.net/favicon.ico
// @supportURL         https://github.com/drunkg00se/Pixiv-Downloader/issues
// @match              https://www.pixiv.net/*
// @match              https://rule34.xxx/*
// @match              https://danbooru.donmai.us/*
// @match              https://yande.re/*
// @match              https://booru.allthefallen.moe/*
// @require            https://unpkg.com/dexie@3.2.7/dist/dexie.min.js
// @require            https://unpkg.com/jszip@3.9.1/dist/jszip.min.js
// @require            https://unpkg.com/gif.js@0.2.0/dist/gif.js
// @require            https://unpkg.com/dayjs@1.11.11/dayjs.min.js
// @resource           ../wasm/toWebpWorker?raw    https://update.greasyfork.org/scripts/500281/1409041/libwebp_wasm.js
// @resource           gif.js/dist/gif.worker?raw  https://unpkg.com/gif.js@0.2.0/dist/gif.worker.js
// @resource           pako/dist/pako.js?raw       https://unpkg.com/pako@2.1.0/dist/pako.min.js
// @resource           upng-js?raw                 https://unpkg.com/upng-js@2.1.0/UPNG.js
// @connect            i.pximg.net
// @connect            source.pixiv.net
// @connect            rule34.xxx
// @connect            donmai.us
// @connect            yande.re
// @connect            allthefallen.moe
// @grant              GM_download
// @grant              GM_getResourceText
// @grant              GM_info
// @grant              GM_registerMenuCommand
// @grant              GM_xmlhttpRequest
// @grant              unsafeWindow
// @noframes
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pixiv20Downloader.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pixiv20Downloader.meta.js
// ==/UserScript==
