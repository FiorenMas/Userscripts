// ==UserScript==
// @name               字体渲染（自用脚本）
// @name:en            Font Rendering (Customized)
// @version            2025.06.07.1
// @author             F9y4ng
// @icon               data:image/png;base64,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
// @namespace          https://github.com/F9y4ng/GreasyFork-Scripts/
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @require            https://f9y4ng.github.io/GreasyFork-Scripts/lib/frColorPicker.js#sha256-5qwlU92m9JJzPnwytGBsLkwXoqPnnrjKFATILied8Os=
// @match              *://*/*
// @grant              GM_getValue
// @grant              GM.getValue
// @grant              GM_setValue
// @grant              GM.setValue
// @grant              GM_listValues
// @grant              GM.listValues
// @grant              GM_deleteValue
// @grant              GM.deleteValue
// @grant              GM_openInTab
// @grant              GM.openInTab
// @grant              GM_addElement
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_unregisterMenuCommand
// @compatible         edge version≥90 (Compatible Tampermonkey, Violentmonkey)
// @compatible         Chrome version≥90 (Compatible Tampermonkey, Violentmonkey)
// @compatible         Firefox version≥84 (Compatible Greasemonkey, Tampermonkey, Violentmonkey)
// @compatible         Opera version≥78 (Compatible Tampermonkey, Violentmonkey)
// @compatible         Safari version≥15.4 (Compatible Tampermonkey, Userscripts)
// @license            GPL-3.0-only
// @create             2020-11-24
// @copyright          2020-2025, F9y4ng
// @run-at             document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E5AD97E4BD93E6B8B2E69F93EFBC88E887AAE794A8E8849AE69CACEFBC89.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E5AD97E4BD93E6B8B2E69F93EFBC88E887AAE794A8E8849AE69CACEFBC89.meta.js
// ==/UserScript==
