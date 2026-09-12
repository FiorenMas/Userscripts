// ==UserScript==
// @name        PreventPageVisibilityAuto
// @namespace   PreventPageVisibilityAuto
// @match       *://*/*
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_registerMenuCommand
// @version     1.1
// @author      -
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/PreventPageVisibilityAuto.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/PreventPageVisibilityAuto.meta.js
// ==/UserScript==
var defaultvalue="none",name="PreventPageVisibilityAuto",prefix="autoinject"+name,value=GM_getValue("value"+name+document.domain,defaultvalue);console.log(value);var injectedStatus=!1,hostarray=[];function inject(){if(injectedStatus!==!1)return;let e=["visibilitychange","webkitvisibilitychange","mozvisibilitychange","hasFocus","blur","focus","mouseleave"];for(event_name of e)document.addEventListener(event_name,function(t){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()},!0);for(event_name of e)window.addEventListener(event_name,function(t){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()},!0);document.hasFocus=function(){return!0},document.onvisibilitychange=null,Object.defineProperty(document,"visibilityState",{value:"visible"}),Object.defineProperty(document,"hidden",{value:!1}),Object.defineProperty(document,"mozHidden",{value:!1}),Object.defineProperty(document,"webkitHidden",{value:!1}),Object.defineProperty(document,"webkitVisibilityState",{value:"visible"}),injectedStatus=!0}function addHost(){hostarray.push(location.hostname),GM_setValue(prefix,JSON.stringify(hostarray)),injectedStatus==!1}function set(){var e=window.prompt("Enter "+name+document.domain+" value",defaultvalue);if(e=parseInt(e),e==null)return!1;GM_setValue("value"+name+document.domain,e)}function plus(){var e=GM_getValue("value"+name+document.domain,defaultvalue);GM_setValue("value"+name+document.domain,e+1)}function minus(){var e=GM_getValue("value"+name+document.domain,defaultvalue);GM_setValue("value"+name+document.domain,e-1)}function removeHost(){var e=hostarray.indexOf(location.hostname);e>-1&&(hostarray.splice(e,1),GM_setValue(prefix,JSON.stringify(hostarray)))}try{hostarray=JSON.parse(GM_getValue(prefix,"[]")),typeof value=="number"&&(GM_registerMenuCommand("+",plus),GM_registerMenuCommand("-",minus)),GM_registerMenuCommand("Set "+name,set),hostarray.includes(location.hostname)?(inject(),injectedStatus=!0,GM_registerMenuCommand("Stop Auto-Injecting "+name,removeHost)):(GM_registerMenuCommand("Inject "+name,inject),GM_registerMenuCommand("Auto-Inject on "+location.hostname,addHost))}catch(e){console.log("Error adding Inject menu items: "+name),console.log(e)}
