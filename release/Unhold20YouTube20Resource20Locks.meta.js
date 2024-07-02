// ==UserScript==
// @name                Unhold YouTube Resource Locks
// @name:en             Unhold YouTube Resource Locks
// @name:ja             Unhold YouTube Resource Locks
// @name:zh-TW          Unhold YouTube Resource Locks
// @name:zh-CN          Unhold YouTube Resource Locks
// @namespace           http://tampermonkey.net/
// @version             2024.03.27.0
// @license             MIT License
// @description         Release YouTube's used IndexDBs & Disable WebLock to make background tabs able to sleep
// @description:en      Release YouTube's used IndexDBs & Disable WebLock to make background tabs able to sleep
// @description:ja      YouTube の 使用済みIndexDB を解放し、WebLock を無効にして、バックグラウンドページを休止状態になるように
// @description:zh-TW   釋放 YouTube 用過的 IndexDBs 並禁用 WebLock 讓後台頁面能進入休眠
// @description:zh-CN   释放 YouTube 用过的 IndexDBs 并禁用 WebLock 让后台页面能进入休眠
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @exclude             https://www.youtube.com/live_chat*
// @exclude             https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @match               https://m.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-unlock-indexedDB.png
// @supportURL          https://github.com/cyfung1031/userscript-supports

// @compatible          edge
// @compatible          chrome
// @compatible          firefox
// @compatible          opera

// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Unhold20YouTube20Resource20Locks.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Unhold20YouTube20Resource20Locks.meta.js
// ==/UserScript==
