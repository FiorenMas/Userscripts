// ==UserScript==
// @name        Toggle Fullscreen Button For Mobile Browsers
// @namespace   Toggle Fullscreen Button For Mobile Browsers Scripts
// @include       http*://*/*
// @grant       none
// @version     1.5
// @author      -
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Toggle20Fullscreen20Button20For20Mobile20Browsers.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Toggle20Fullscreen20Button20For20Mobile20Browsers.meta.js
// ==/UserScript==
(function(){function l(){!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement?document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen(),this.parentNode.style.display="none"}function c(e){var n=document.createElement("div"),t=document.createElement("button");n.style.position="fixed",n.style.opacity="0",n.style.zIndex="999999",n.style.left=(e.clientX-20).toString()+"px",n.style.top=(e.clientY-10).toString()+"px",t.innerHTML="Fullscreen",t.addEventListener("click",l),n.appendChild(t),document.body.appendChild(n)}window.addEventListener("dblclick",function(e){c(e)}),window.addEventListener("touchstart",e=>{e.touches.length==3&&(l(),c(e))})})();
