// ==UserScript==
// @name     Disable Youtube Annotations
// @version  1
// @match    https://www.youtube.com/*
// @namespace https://greasyfork.org/users/396494
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Disable20Youtube20Annotations.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Disable20Youtube20Annotations.meta.js
// ==/UserScript==
var settingsButton,annotations,disableAnnotations,syntheticClick;setInterval(()=>{settingsButton||(settingsButton=document.getElementsByClassName("ytp-settings-button")[0],settingsButton&&(settingsButton.click(),settingsButton.click(),annotations=document.getElementsByClassName("ytp-menuitem")[1],disableAnnotations=!0,syntheticClick=!1,annotations.onclick=()=>{if(syntheticClick){syntheticClick=!1;return}disableAnnotations^=!0}))},1e3),setInterval(()=>{disableAnnotations&&annotations.getAttribute("aria-checked")==="true"&&(syntheticClick=!0,annotations.click())},1e3);
