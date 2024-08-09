// ==UserScript==
// @name         Download protected PDF file from Google Drive
// @namespace    Download protected PDF file
// @description  You can download protected PDF file
// @version      1.1
// @match        https://drive.google.com/*
// @grant        GM_registerMenuCommand
// @require      https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Download20protected20PDF20file20from20Google20Drive.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Download20protected20PDF20file20from20Google20Drive.meta.js
// ==/UserScript==
!function(){"use strict";function e(e,t,n,a){let i=n/a;return e/t<=i?[e,e/i]:[t*i,t]}function t(e){let t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.naturalWidth,t.height=e.naturalHeight,n.drawImage(e,0,0,e.naturalWidth,e.naturalHeight),t.toDataURL("image/png",1)}GM_registerMenuCommand("Download PDF file",(function(){try{let n=new(0,window.jspdf.jsPDF),a=n.internal.pageSize.getWidth(),i=n.internal.pageSize.getHeight(),g=document.getElementsByTagName("img");for(let l of g){if(!/^blob:/.test(l.src))continue;console.log("adding image",l.src);let g=t(l),[d,o]=e(a,i,l.naturalWidth,l.naturalHeight);n.addImage(g,"png",0,0,d,o),n.addPage()}n.deletePage(n.internal.getNumberOfPages()),n.save("download.pdf")}catch(e){console.log(e)}}),"d")}();