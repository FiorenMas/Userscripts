// ==UserScript==
// @name               Pixiv Downloader
// @namespace          https://greasyfork.org/zh-CN/scripts/432150
// @version            1.10.0
// @author             ruaruarua
// @license            MIT
// @icon               https://www.pixiv.net/favicon.ico
// @supportURL         https://github.com/drunkg00se/Pixiv-Downloader/issues
// @match              https://www.pixiv.net/*
// @match              https://rule34.xxx/*
// @match              https://danbooru.donmai.us/*
// @match              https://yande.re/*
// @match              https://booru.allthefallen.moe/*
// @match              https://konachan.com/*
// @match              https://konachan.net/*
// @match              https://www.sakugabooru.com/*
// @match              https://safebooru.org/*
// @match              https://gelbooru.com/*
// @match              https://e621.net/*
// @match              https://e926.net/*
// @match              https://e6ai.net/*
// @match              https://nijie.info/*
// @match              https://rule34vault.com/*
// @match              https://rule34.paheal.net/*
// @match              https://rule34.us/*
// @require            https://unpkg.com/dexie@3.2.7/dist/dexie.min.js
// @require            https://unpkg.com/jszip@3.9.1/dist/jszip.min.js
// @require            https://unpkg.com/gif.js@0.2.0/dist/gif.js
// @require            https://unpkg.com/dayjs@1.11.13/dayjs.min.js
// @require            https://cdn.jsdelivr.net/npm/mp4-muxer@5.1.5/build/mp4-muxer.min.js
// @require            https://cdn.jsdelivr.net/npm/webm-muxer@5.0.3/build/webm-muxer.min.js
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
// @connect            konachan.com
// @connect            konachan.net
// @connect            sakugabooru.com
// @connect            safebooru.org
// @connect            gelbooru.com
// @connect            e621.net
// @connect            e926.net
// @connect            e6ai.net
// @connect            nijie.net
// @connect            rule34vault.com
// @connect            r34xyz.b-cdn.net
// @connect            r34i.paheal-cdn.net
// @connect            rule34.us
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
