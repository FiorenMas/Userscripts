// ==UserScript==
// @name         Recaptcha Solver (Automatically solves Recaptcha in browser)
// @namespace    Recaptcha Solver
// @version      2.1
// @author       engageub
// @match        *://*/recaptcha/*
// @connect      engageub.pythonanywhere.com
// @connect      engageub1.pythonanywhere.com
// @grant        GM_xmlhttpRequest
/*

██████╗ ███████╗ ██████╗ █████╗ ██████╗ ████████╗ ██████╗██╗  ██╗ █████╗     ███████╗ ██████╗ ██╗    ██╗   ██╗███████╗██████╗
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║  ██║██╔══██╗    ██╔════╝██╔═══██╗██║    ██║   ██║██╔════╝██╔══██╗
██████╔╝█████╗  ██║     ███████║██████╔╝   ██║   ██║     ███████║███████║    ███████╗██║   ██║██║    ██║   ██║█████╗  ██████╔╝
██╔══██╗██╔══╝  ██║     ██╔══██║██╔═══╝    ██║   ██║     ██╔══██║██╔══██║    ╚════██║██║   ██║██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗
██║  ██║███████╗╚██████╗██║  ██║██║        ██║   ╚██████╗██║  ██║██║  ██║    ███████║╚██████╔╝███████╗╚████╔╝ ███████╗██║  ██║
╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝        ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚══════╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝
/*


/** Note: This script is solely intended for the use of educational purposes only and not to abuse any website.
This script uses audio in order to solve the captcha. Use it wisely and do not abuse any website.
*/
// ==/UserScript==
!function(){"use strict";var e=!1,o=!1,n=!1;const t=".recaptcha-checkbox-border",c="#recaptcha-audio-button",l="#audio-source",r=".rc-audiochallenge-response-field",a=".rc-audiochallenge-error-message",s="#audio-response",i="#recaptcha-reload-button",g="#recaptcha-accessible-status",u=".rc-doscaptcha-body",p="#recaptcha-verify-button";var h=0,d=b("html").getAttribute("lang"),f="",m=b(g)?b(g).innerText:"",v=["https://engageub.pythonanywhere.com","https://engageub1.pythonanywhere.com"],y=Array(v.length).fill(1e4);function x(e){return null===e.offsetParent}async function T(e){var o=(new Date).getTime();GM_xmlhttpRequest({method:"GET",url:e,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"",timeout:8e3,onload:function(n){if(n&&n.responseText&&"0"==n.responseText){var t=(new Date).getTime()-o;for(let o=0;o<v.length;o++)e==v[o]&&(y[o]=t)}},onerror:function(e){console.log(e)},ontimeout:function(){console.log("Ping Test Response Timed out for "+e)}})}function b(e){return document.querySelector(e)}if(b(t))b(t).click();else if(window.location.href.includes("bframe"))for(let e=0;e<v.length;e++)T(v[e]);var w=setInterval((function(){try{o||!b(t)||x(b(t))||(b(t).click(),o=!0),b(g)&&b(g).innerText!=m&&(e=!0,console.log("SOLVED"),clearInterval(w)),h>5&&(console.log("Attempted Max Retries. Stopping the solver"),e=!0,clearInterval(w)),e||(b(c)&&!x(b(c))&&b("#rc-imageselect")&&b(c).click(),!n&&b(l)&&b(l).src&&b(l).src.length>0&&f==b(l).src&&b(i)||b(a)&&b(a).innerText.length>0&&b(i)&&!b(i).disabled?b(i).click():!n&&b(r)&&!x(b(r))&&!b(s).value&&b(l)&&b(l).src&&b(l).src.length>0&&f!=b(l).src&&h<=5&&(n=!0,async function(e){var o=1e5,t="";for(let e=0;e<y.length;e++)y[e]<=o&&(o=y[e],t=v[e]);h+=1,e=e.replace("recaptcha.net","google.com"),d.length<1&&(console.log("Recaptcha Language is not recognized"),d="en-US"),console.log("Recaptcha Language is "+d),GM_xmlhttpRequest({method:"POST",url:t,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"input="+encodeURIComponent(e)+"&lang="+d,timeout:6e4,onload:function(e){console.log("Response::"+e.responseText);try{if(e&&e.responseText){var o=e.responseText;"0"==o||o.includes("<")||o.includes(">")||o.length<2||o.length>50?console.log("Invalid Response. Retrying.."):b(l)&&b(l).src&&f==b(l).src&&b(s)&&!b(s).value&&"none"==b(c).style.display&&b(p)?(b(s).value=o,b(p).click()):console.log("Could not locate text input box"),n=!1}}catch(e){console.log(e.message),console.log("Exception handling response. Retrying.."),n=!1}},onerror:function(e){console.log(e),n=!1},ontimeout:function(){console.log("Response Timed out. Retrying.."),n=!1}})}(f=b(l).src))),b(u)&&b(u).innerText.length>0&&(console.log("Automated Queries Detected"),clearInterval(w))}catch(e){console.log(e.message),console.log("An error occurred while solving. Stopping the solver."),clearInterval(w)}}),5e3)}();