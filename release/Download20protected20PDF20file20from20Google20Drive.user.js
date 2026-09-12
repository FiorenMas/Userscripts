// ==UserScript==
// @name         Download protected PDF file from Google Drive
// @namespace    Download protected PDF file
// @version      1.1
// @match        https://drive.google.com/*
// @grant        GM_registerMenuCommand
// @require      https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Download20protected20PDF20file20from20Google20Drive.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Download20protected20PDF20file20from20Google20Drive.meta.js
// ==/UserScript==
(function(){"use strict";function o(t,e,n,l){let i=t/e,a=n/l;return i<=a?[t,t/a]:[e*a,e]}function d(t){let e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t.naturalWidth,e.height=t.naturalHeight,n.drawImage(t,0,0,t.naturalWidth,t.naturalHeight),e.toDataURL("image/png",1)}function r(){try{let t=window.jspdf.jsPDF,e=new t,n=e.internal.pageSize.getWidth(),l=e.internal.pageSize.getHeight(),i=document.getElementsByTagName("img");for(let a of i){if(!/^blob:/.test(a.src))continue;console.log("adding image",a.src);let g=d(a),[s,c]=o(n,l,a.naturalWidth,a.naturalHeight);e.addImage(g,"png",0,0,s,c),e.addPage()}e.deletePage(e.internal.getNumberOfPages()),e.save("download.pdf")}catch(t){console.log(t)}}GM_registerMenuCommand("Download PDF file",r,"d")})();
