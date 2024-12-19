// ==UserScript==
// @name         Anti Anti-debugger
// @namespace    https://greasyfork.org/en/users/670188-hacker09?sort=daily_installs
// @version      4
// @description  Stops most (not all) anti-debugging implementations by JavaScript obfuscators and stops the console logs from being automatically cleared.
// @author       hacker09
// @include      *
// @grant        unsafeWindow
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Anti20Antidebugger.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Anti20Antidebugger.meta.js
// ==/UserScript==
(function(){var interval=setInterval((function(){unsafeWindow.console.clear=()=>{}}),0);if(window.onload=function(){clearInterval(interval)},null===location.href.match(/vidstream.pro|mcloud.to/)){var _constructor=unsafeWindow.Function.prototype.constructor;unsafeWindow.Function.prototype.constructor=function(){var fnContent=arguments[0];if(fnContent&&fnContent.includes("debugger")){var caller=Function.prototype.constructor.caller,callerContent=caller.toString();return"string"==typeof callerContent&&callerContent.includes("debugger")&&(callerContent=callerContent.replace(/\bdebugger\b/gi,""),eval("caller = "+callerContent)),function(){}}return _constructor.apply(this,arguments)}}})();