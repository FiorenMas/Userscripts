// ==UserScript==
// @name          GoodTwitter 2 - Electric Boogaloo
// @version       0.0.45
// @author        schwarzkatz
// @license       MIT
// @match         https://twitter.com/*
// @match         https://mobile.twitter.com/*
// @match         https://x.com/*
// @match         https://mobile.x.com/*
// @exclude       https://twitter.com/i/cards/*
// @exclude       https://twitter.com/i/release_notes
// @exclude       https://twitter.com/*/privacy
// @exclude       https://twitter.com/*/tos
// @exclude       https://twitter.com/account/access
// @exclude       https://x.com/i/cards/*
// @exclude       https://x.com/i/release_notes
// @exclude       https://x.com/*/privacy
// @exclude       https://x.com/*/tos
// @exclude       https://x.com/account/access
// @grant         GM_deleteValue
// @grant         GM_getResourceText
// @grant         GM_getResourceURL
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_info
// @grant         GM_xmlhttpRequest
// @connect       api.twitter.com
// @connect       api.x.com
// @resource      css https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/twitter.gt2eb.style.css
// @resource      emojiRegex https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/data/emoji-regex.txt
// @resource      pickrCss https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css
// @require       https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/twitter.gt2eb.i18n.js
// @require       https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/twitter.gt2eb.polyfills.js
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require       https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.es5.min.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/twitter.gt2eb.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/twitter.gt2eb.user.js
// ==/UserScript==
