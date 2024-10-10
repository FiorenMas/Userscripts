// ==UserScript==
// @name        Visited Lite
// @namespace   iFantz7E.VisitedLite
// @description Mark all visited links as custom color.
// @version     0.23
// @include     http*
// @icon        https://addons.cdn.mozilla.net/user-media/addon_icons/359/359581-64.png
// @run-at      document-start
// @grant       none
// @copyright	2015, 7-elephant
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Visited20Lite.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Visited20Lite.meta.js
// ==/UserScript==
!function(){const e="visited-lite-7e-style";var t;t=function(){var t=document.documentURI,n="";n+=function(e,t){return e.replace(/%COLOR%/gi,t)}(" a:visited, a:visited * { color: %COLOR% !important; } ","LightCoral"),function(e,t){for(var n=e.split(","),i=0;i<n.length;i++){var l=n[i].replace(/\s/gi,""),r=l;0!=r.indexOf(".")&&0!=r.indexOf("/")&&(r="."+r);var d=l;if(0!=d.indexOf("://")&&(d="://"+d),""!=l&&(t.indexOf(r)>-1||t.indexOf(d)>-1))return!0}return!1}("mail.live.com,",t)||function(t){if(null==(i=document.getElementById(e))){var n=document.getElementsByTagName("head");if(null!=n&&n.length>0){var i,l=n[0];null!=(i=document.createElement("style"))&&(i.setAttribute("id",e),i.setAttribute("type","text/css"),l.appendChild(i))}}null!=i&&(i.textContent=String(t))}(n)},document.addEventListener("DOMContentLoaded",(function(e){t()}))}();