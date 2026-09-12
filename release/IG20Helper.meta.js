// ==UserScript==
// @name               IG Helper
// @namespace          https://github.snkms.com/
// @version            4.2.1
// @author             SN-Koarashi (5026)
// @match              https://*.instagram.com/*
// @grant              GM_addStyle
// @grant              GM_download
// @grant              GM_getResourceText
// @grant              GM_getValue
// @grant              GM_info
// @grant              GM_notification
// @grant              GM_openInTab
// @grant              GM_registerMenuCommand
// @grant              GM_setValue
// @grant              GM_unregisterMenuCommand
// @grant              GM_xmlhttpRequest
// @connect            cdn.jsdelivr.net
// @connect            i.instagram.com
// @connect            raw.githubusercontent.com
// @require            https://cdn.jsdelivr.net/npm/mediabunny@1.34.5/dist/bundles/mediabunny.min.cjs#sha256-wUFR+x2bDvpqgMAVGy2CvGvULyjTGvGy4UUAm8rae5U=
// @require            https://code.jquery.com/jquery-4.0.0.min.js#sha256-OaVG6prZf4v69dPg6PhVattBXkcOWQB62pdZ3ORyrao=
// @resource           INTERNAL_CSS https://cdn.jsdelivr.net/gh/SN-Koarashi/ig-helper@master/style.css
// @resource           LOCALE_MANIFEST https://cdn.jsdelivr.net/gh/SN-Koarashi/ig-helper@master/locale/manifest.json
// @supportURL         https://github.com/SN-Koarashi/ig-helper/
// @contributionURL    https://ko-fi.com/snkoarashi
// @icon               https://www.google.com/s2/favicons?domain=www.instagram.com&sz=32
// @compatible         chrome >= 100
// @compatible         edge >= 100
// @compatible         firefox >= 100
// @license            GPL-3.0-only
// @run-at             document-idle
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/IG20Helper.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/IG20Helper.meta.js
// ==/UserScript==
