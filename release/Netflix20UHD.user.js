// ==UserScript==
// @name                 Netflix UHD
// @namespace            http://tampermonkey.net/
// @version              1.27
// @author               TGSAN
// @match                https://www.netflix.com/*
// @icon                 https://www.google.com/s2/favicons?sz=64&domain=netflix.com
// @run-at               document-start
// @grant                unsafeWindow
// @grant                GM_registerMenuCommand
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Netflix20UHD.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Netflix20UHD.meta.js
// ==/UserScript==
(function(){let e;self.unsafeWindow?(console.log("use unsafeWindow mode"),e=self.unsafeWindow):(console.log("use window mode"),e=self.window),delete e.screen,e.__defineGetter__("screen",function(){let a=[];return a.width=7680,a.height=4320,a.availWidth=7680,a.availHeight=4320,a.availLeft=0,a.availTop=0,a.colorDepth=32,a.isExtended=!1,a.pixelDepth=32,a}),delete e.devicePixelRatio,e.devicePixelRatio=4,e.MSMediaKeys&&(e.MSMediaKeys.isTypeSupportedWithFeaturesOriginal=e.MSMediaKeys.isTypeSupportedWithFeatures,e.MSMediaKeys.isTypeSupportedWithFeatures=function(a,t){const r=/,display-res-[xy]=\d+,display-res-[xy]=\d+|display-res-[xy]=\d+,display-res-[xy]=\d+,?/g;return t=t.replace(r,""),this.isTypeSupportedWithFeaturesOriginal(a,t)},e.MSMediaKeys.isTypeSupportedOriginal=e.MSMediaKeys.isTypeSupported,e.MSMediaKeys.isTypeSupported=function(a){return a=a.replace("com.microsoft.playready.hardware","com.microsoft.playready"),this.isTypeSupportedOriginal(a)},e.MSMediaKeys.prototype.createSessionOriginal=e.MSMediaKeys.prototype.createSession,e.MSMediaKeys.prototype.createSession=function(a,t,r){console.log(a,t,r);const s=/,display-res-[xy]=\d+,display-res-[xy]=\d+|display-res-[xy]=\d+,display-res-[xy]=\d+,?/g;return a=a.replace(s,""),this.createSessionOriginal(a,t,r)}),e.WebKitMediaKeys&&(e.WebKitMediaKeys.isTypeSupportedOriginal=e.WebKitMediaKeys.isTypeSupported,e.WebKitMediaKeys.isTypeSupported=function(a,t){let r=this.isTypeSupportedOriginal(a,t);return console.log("Hook WebKitMediaKeys",a,t,r),r}),e.navigator.requestMediaKeySystemAccess&&(e.navigator.requestMediaKeySystemAccessOriginal=e.navigator.requestMediaKeySystemAccess,e.navigator.requestMediaKeySystemAccess=async function(a,t){let r=a;if(a.indexOf("playready")!==-1)try{return await e.navigator.requestMediaKeySystemAccessOriginal(r,t)}catch{console.warn("Fallback PlayReady to SL"),r="com.microsoft.playready"}for(let c=0;t.length>c;c++)if(t[c].videoCapabilities!=null)for(let o=0;t[c].videoCapabilities.length>o;o++)t[c].videoCapabilities[o].robustness!=null;return await e.navigator.requestMediaKeySystemAccessOriginal(r,t)}),e.MediaCapabilities.prototype&&(e.MediaCapabilities.prototype.decodingInfoOriginal=e.MediaCapabilities.prototype.decodingInfo,e.MediaCapabilities.prototype.decodingInfo=function(a){let t=this.decodingInfoOriginal(a);return new Promise((s,c)=>{t.then(o=>{o.powerEfficient=o.supported,o.smooth=o.supported,s(o)}).catch(o=>{c(o)})})}),async function(){if(self.GM_registerMenuCommand&&window.MSMediaKeys){let a=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; features="hdcp=0"')!="",t=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="hdcp=0"')!="",r=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; features="hdcp=1"')!="",s=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="hdcp=1"')!="",c=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; features="hdcp=2"')!="",o=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="hdcp=2"')!="",p=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="decode-res-x=3840,decode-res-y=2160,decode-bpc=10,hdcp=2"')!="",h=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; features="hdcp=0"')!="",u=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="hdcp=0"')!="",M=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; features="hdcp=1"')!="",w=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="hdcp=1"')!="",g=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; features="hdcp=2"')!="",m=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="hdcp=2"')!="",S=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="decode-res-x=3840,decode-res-y=2160,decode-bpc=10,hdcp=2"')!="",i=function(d){return d?"\u2713":"\u2715"};GM_registerMenuCommand("PlayReady DRM Info ("+(p?"UHD Ready":"Restricted")+")",function(){let d=`PlayReady DRM (without HDCP 2.2):
`;d+="Hardware: "+i(a)+"    Software: "+i(h)+`

`,d+=`PlayReady DRM (without HDCP 2.2) with HEVC:
`,d+="Hardware: "+i(t)+"    Software: "+i(u)+`

`,d+=`PlayReady DRM (HDCP 2.2):
`,d+="Hardware: "+i(r)+"    Software: "+i(M)+`

`,d+=`PlayReady DRM (HDCP 2.2) with HEVC:
`,d+="Hardware: "+i(s)+"    Software: "+i(w)+`

`,d+=`PlayReady DRM (HDCP 2.2 Type 1):
`,d+="Hardware: "+i(c)+"    Software: "+i(g)+`

`,d+=`PlayReady DRM (HDCP 2.2 Type 1) with HEVC:
`,d+="Hardware: "+i(o)+"    Software: "+i(m)+`

`,d+=`PlayReady DRM (HDCP 2.2 Type 1) with HEVC UHD:
`,d+="Hardware: "+i(p)+"    Software: "+i(S)+`

`,alert(d)})}}();let n=function(){console.log("switch player log"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:76,ctrlKey:!0,altKey:!0,shiftKey:!0}))},y=function(){console.log("load local subtitle"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:84,ctrlKey:!0,altKey:!0,shiftKey:!0}))},l=function(){console.log("switch player info"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:68,ctrlKey:!0,altKey:!0,shiftKey:!0}))},f=function(){console.log("switch player info"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:83,ctrlKey:!0,altKey:!0,shiftKey:!0})),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:66,ctrlKey:!0,altKey:!0,shiftKey:!0}))};GM_registerMenuCommand("Player Info",l),GM_registerMenuCommand("Stream Selector",f),GM_registerMenuCommand("Player Log",n),GM_registerMenuCommand("Load Local Subtitle (.DFXP)",y)})();
