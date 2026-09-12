// ==UserScript==
// @name        Reject serviceWorker Auto
// @namespace   rejectserviceWorkerAuto
// @match       *://*/*
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @version     1.3
// @author      -
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reject20serviceWorker20Auto.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reject20serviceWorker20Auto.meta.js
// ==/UserScript==
var defaultvalue="none",name="rejectserviceWorkerAuto",prefix="autoinject"+name,value=GM_getValue("value"+name+document.domain,defaultvalue);console.log(value);var injectedStatus=!1,hostarray=[];function inject(){injectedStatus===!1&&(navigator.serviceWorker&&(navigator.serviceWorker.register=()=>new Promise((e,n)=>n("This method is not allowed!"))),injectedStatus=!0)}function addHost(){hostarray.push(location.hostname),GM_setValue(prefix,JSON.stringify(hostarray)),injectedStatus==!1}function set(){var e=window.prompt("Enter "+name+document.domain+" value",defaultvalue);if(e=parseInt(e),e==null)return!1;GM_setValue("value"+name+document.domain,e)}function plus(){var e=GM_getValue("value"+name+document.domain,defaultvalue);GM_setValue("value"+name+document.domain,e+1)}function minus(){var e=GM_getValue("value"+name+document.domain,defaultvalue);GM_setValue("value"+name+document.domain,e-1)}function removeHost(){var e=hostarray.indexOf(location.hostname);e>-1&&(hostarray.splice(e,1),GM_setValue(prefix,JSON.stringify(hostarray)))}try{hostarray=JSON.parse(GM_getValue(prefix,"[]")),typeof value=="number"&&(GM_registerMenuCommand("+",plus),GM_registerMenuCommand("-",minus)),hostarray.includes(location.hostname)?(GM_registerMenuCommand("Inject "+name,inject),GM_registerMenuCommand("Auto-Inject on "+location.hostname,removeHost)):(inject(),injectedStatus=!0,GM_registerMenuCommand("Stop Auto-Injecting "+name,addHost))}catch(e){console.log("Error adding Inject menu items: "+name),console.log(e)}
