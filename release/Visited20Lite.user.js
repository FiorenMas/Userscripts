// ==UserScript==
// @name        Visited Lite
// @namespace   iFantz7E.VisitedLite
// @version     0.23
// @include     http*
// @icon        https://addons.cdn.mozilla.net/user-media/addon_icons/359/359581-64.png
// @run-at      document-start
// @grant       none
// @copyright	2015, 7-elephant
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Visited20Lite.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Visited20Lite.meta.js
// ==/UserScript==
(function(){var d="LightCoral",u="mail.live.com,";const l="visited-lite-7e-style",c=" a:visited, a:visited * { color: %COLOR% !important; } ";var B=["Aqua","Blue","BlueViolet","Brown","CadetBlue","Chocolate","Coral","CornflowerBlue","Crimson","DarkGoldenRod","DarkGreen","DarkKhaki","DarkMagenta","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DodgerBlue","FireBrick","ForestGreen","Fuchsia","Gold","GoldenRod","Green","GreenYellow","HotPink","IndianRed","Indigo","Khaki","Lavender","LawnGreen","LightCoral","LightSalmon","LightSeaGreen","LightSteelBlue","Lime","LimeGreen","Magenta","Maroon","MediumAquaMarine","MediumOrchid","MediumSlateBlue","MediumTurquoise","NavajoWhite","Navy","Orange","OrangeRed","Orchid","PaleVioletRed","Peru","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","Sienna","SlateBlue","SpringGreen","SteelBlue","Tomato","Turquoise","Violet","YellowGreen"];function S(n){window.addEventListener("load",function(e){n()})}function f(n){document.addEventListener("DOMContentLoaded",function(e){n()})}function m(n,e){for(var a=n.split(","),t=0;t<a.length;t++){var o=a[t].replace(/\s/ig,""),i=o;i.indexOf(".")!=0&&i.indexOf("/")!=0&&(i="."+i);var r=o;if(r.indexOf("://")!=0&&(r="://"+r),o!=""&&(e.indexOf(i)>-1||e.indexOf(r)>-1))return!0}return!1}function s(n){var e=document.getElementById(l);if(e==null){var a=document.getElementsByTagName("head");if(a!=null&&a.length>0){var t=a[0],e=document.createElement("style");e!=null&&(e.setAttribute("id",l),e.setAttribute("type","text/css"),t.appendChild(e))}}e!=null&&(e.textContent=String(n))}function v(n,e){return n.replace(/%COLOR%/ig,e)}function g(){var n=document.documentURI,e="";e+=v(c,d),m(u,n)||s(e)}f(g)})();
