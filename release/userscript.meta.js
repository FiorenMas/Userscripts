// ==UserScript==
// @name              Image Max URL
// @name:en           Image Max URL
// @namespace         http://tampermonkey.net/
// @version           2025.5.0
// @author            qsniyg
// @homepageURL       https://qsniyg.github.io/maxurl/options.html
// @supportURL        https://github.com/qsniyg/maxurl/issues
// @icon              https://raw.githubusercontent.com/qsniyg/maxurl/b5c5488ec05e6e2398d4e0d6e32f1bbad115f6d2/resources/logo_256.png
// @include           *
// @grant             GM.xmlHttpRequest
// @grant             GM_xmlhttpRequest
// @grant             GM.setValue
// @grant             GM_setValue
// @grant             GM.getValue
// @grant             GM_getValue
// @grant             GM_registerMenuCommand
// @grant             GM_unregisterMenuCommand
// @grant             GM_addValueChangeListener
// @grant             GM_download
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_notification
// @grant             GM.notification
// @grant             GM_setClipboard
// @grant             GM.setClipboard
// @connect           *
// api.github.com is used for checking for updates (can be disabled through the "Check Updates" setting)
// @connect           api.github.com
// @run-at            document-start
// @license           Apache-2.0
// non-greasyfork/oujs versions need updateURL and downloadURL to auto-update for certain userscript managers
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/userscript.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/userscript.user.js
// imu:require_rules  (this is replaced by the build system for userscript versions that require external rules)
// ==/UserScript==
