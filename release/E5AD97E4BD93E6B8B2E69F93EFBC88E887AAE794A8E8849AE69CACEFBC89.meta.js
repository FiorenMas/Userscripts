// ==UserScript==
// @name               字体渲染（自用脚本）
// @name:en            Font Rendering (Customized)
// @version            2026.09.05.1
// @author             F9y4ng
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAolBMVEUAAAAAAACtra3u7vDb29vu7u7t7e0NDQ3x8fGfn5/u7u7w8PDa2try8vIzMzPS0tKmpqbm5uY+Pj5ycnLHx8dycnKTk5Pz8/O8vLzx8fG9e8jy8vJKQXdTSHxYT3d8c49dT4TJllebl7Hhp1O1dsJqUoy9vMutcr1ybJNwVZHd3OKYaK3R0NqkbbWLYaV9W5pmXYfn5+quq8CLhqZ/eJq1iVosF5r4AAAAGnRSTlMABqX9Je/eJ7iZeA3ZUhDKdmpiR715YT2pmYcP5BAAAAGJSURBVDjLrZLrToNAFIRbt1zaYq31fmZXKXJZKFAu+v6v5lkMtYtp4g+/hEByhmHmsLP/48kXjr+4PL9G26XCuahYO6XKk0YE8wuCFXRNlEd4vGxARJkSN/P1yvdX64ngFh81MXmHrYuigDsJ4xYypkNGlQLaRkrNTnaF/kik+ApT9CHfJmH8lg2q0Lg0rcyIKmlZPCHil5PO5FA6IRos7s4MhMp4pBTPallRxk4K96f5Al1CI1nOXUygTpwsXhBWNHKIKZYcpg7xPC5JpCEPwoHqQHTshzCp440d9cH0K5goiXkkpWJZg6sfAdeDGwRIeUJxxin5Q6Wz+c4oShmqUuy8W+gjnThqbMc/2ZYCS2/mlmZfyUDGFkXAFobtTXD/4HHdnjsmOmK0aduflrXxvI0J09S85BZMwQuvNR7M9HxhMlcRBnqVyxQ769C4QBqlGDCPJeBurEMTvU2IsLWO5evn3uKzwdIW7N8t9iywz+XrhA9LsHDwC2dn1VxeTVjuvJnFfMrsD3wBrJNAMjnfuQMAAAAASUVORK5CYII=
// @namespace          https://github.com/F9y4ng/GreasyFork-Scripts/
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
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
// @grant              GM_xmlhttpRequest
// @grant              GM.xmlHttpRequest
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_addValueChangeListener
// @grant              unsafeWindow
// @connect            f9y4ng.github.io
// @compatible         Edge (Compatible Tampermonkey, Violentmonkey)
// @compatible         Chrome (Compatible Tampermonkey, Violentmonkey)
// @compatible         Firefox (Compatible Greasemonkey, Tampermonkey, Violentmonkey)
// @compatible         Opera (Compatible Tampermonkey, Violentmonkey)
// @compatible         Safari (Compatible Tampermonkey, Userscripts)
// @license            GPL-3.0-only
// @copyright          2020-2026, F9y4ng
// @run-at             document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E5AD97E4BD93E6B8B2E69F93EFBC88E887AAE794A8E8849AE69CACEFBC89.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E5AD97E4BD93E6B8B2E69F93EFBC88E887AAE794A8E8849AE69CACEFBC89.meta.js
// ==/UserScript==
