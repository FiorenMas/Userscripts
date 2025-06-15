// ==UserScript==
// @name        PreventPageVisibility 
// @namespace   https://github.com/IceWreck
// @match       *://*/*
// @run-at      document-start
// @grant       none
// @version     1.1
// @author      IceWreck

// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/PreventPageVisibility.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/PreventPageVisibility.meta.js
// ==/UserScript==
let events_to_block=["visibilitychange","webkitvisibilitychange","mozvisibilitychange","hasFocus","blur","focus","mouseleave"];for(event_name of events_to_block)document.addEventListener(event_name,function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()},!0);for(event_name of events_to_block)window.addEventListener(event_name,function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()},!0);document.hasFocus=function(){return!0},document.onvisibilitychange=null,Object.defineProperty(document,"visibilityState",{value:"visible"}),Object.defineProperty(document,"hidden",{value:!1}),Object.defineProperty(document,"mozHidden",{value:!1}),Object.defineProperty(document,"webkitHidden",{value:!1}),Object.defineProperty(document,"webkitVisibilityState",{value:"visible"});
