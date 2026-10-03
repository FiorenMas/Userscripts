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
(function(){"use strict";var y=!1,R=!1,r=!1;const i=".recaptcha-checkbox-border",g="#recaptcha-audio-button",U=".rc-audiochallenge-play-button .rc-button-default",n="#audio-source",_="#rc-imageselect",E=".rc-audiochallenge-response-field",O=".rc-audiochallenge-error-message",d="#audio-response",f="#recaptcha-reload-button",h="#recaptcha-accessible-status",I=".rc-doscaptcha-body",b="#recaptcha-verify-button",x=5;var p=0,v=e("html").getAttribute("lang"),u="",w=e(h)?e(h).innerText:"",a=["https://engageub.pythonanywhere.com","https://engageub1.pythonanywhere.com"],T=Array(a.length).fill(1e4);function S(t){return t.offsetParent===null}async function C(t){var A=1e5,c="";for(let o=0;o<T.length;o++)T[o]<=A&&(A=T[o],c=a[o]);p=p+1,t=t.replace("recaptcha.net","google.com"),v.length<1&&(console.log("Recaptcha Language is not recognized"),v="en-US"),console.log("Recaptcha Language is "+v),GM_xmlhttpRequest({method:"POST",url:c,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"input="+encodeURIComponent(t)+"&lang="+v,timeout:6e4,onload:function(o){console.log("Response::"+o.responseText);try{if(o&&o.responseText){var l=o.responseText;l=="0"||l.includes("<")||l.includes(">")||l.length<2||l.length>50?console.log("Invalid Response. Retrying.."):e(n)&&e(n).src&&u==e(n).src&&e(d)&&!e(d).value&&e(g).style.display=="none"&&e(b)?(e(d).value=l,e(b).click()):console.log("Could not locate text input box"),r=!1}}catch(s){console.log(s.message),console.log("Exception handling response. Retrying.."),r=!1}},onerror:function(o){console.log(o),r=!1},ontimeout:function(){console.log("Response Timed out. Retrying.."),r=!1}})}async function D(t){var A=new Date().getTime();GM_xmlhttpRequest({method:"GET",url:t,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"",timeout:8e3,onload:function(c){if(c&&c.responseText&&c.responseText=="0"){var o=new Date().getTime(),l=o-A;for(let s=0;s<a.length;s++)t==a[s]&&(T[s]=l)}},onerror:function(c){console.log(c)},ontimeout:function(){console.log("Ping Test Response Timed out for "+t)}})}function k(t){return document.querySelectorAll(t)}function e(t){return document.querySelector(t)}if(e(i))e(i).click();else if(window.location.href.includes("bframe"))for(let t=0;t<a.length;t++)D(a[t]);var m=setInterval(function(){try{!R&&e(i)&&!S(e(i))&&(e(i).click(),R=!0),e(h)&&e(h).innerText!=w&&(y=!0,console.log("SOLVED"),clearInterval(m)),p>x&&(console.log("Attempted Max Retries. Stopping the solver"),y=!0,clearInterval(m)),y||(e(g)&&!S(e(g))&&e(_)&&e(g).click(),!r&&e(n)&&e(n).src&&e(n).src.length>0&&u==e(n).src&&e(f)||e(O)&&e(O).innerText.length>0&&e(f)&&!e(f).disabled?e(f).click():!r&&e(E)&&!S(e(E))&&!e(d).value&&e(n)&&e(n).src&&e(n).src.length>0&&u!=e(n).src&&p<=x&&(r=!0,u=e(n).src,C(u))),e(I)&&e(I).innerText.length>0&&(console.log("Automated Queries Detected"),clearInterval(m))}catch(t){console.log(t.message),console.log("An error occurred while solving. Stopping the solver."),clearInterval(m)}},5e3)})();
