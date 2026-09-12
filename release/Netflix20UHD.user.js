// ==UserScript==
// @name                 Netflix UHD
// @namespace            http://tampermonkey.net/
// @version              1.26
// @author               TGSAN
// @match                https://www.netflix.com/*
// @icon                 https://www.google.com/s2/favicons?sz=64&domain=netflix.com
// @run-at               document-start
// @grant                unsafeWindow
// @grant                GM_registerMenuCommand
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Netflix20UHD.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Netflix20UHD.meta.js
// ==/UserScript==
(function(){let e;self.unsafeWindow?(console.log("use unsafeWindow mode"),e=self.unsafeWindow):(console.log("use window mode"),e=self.window),delete e.screen,e.__defineGetter__("screen",function(){let t=[];return t.width=7680,t.height=4320,t.availWidth=7680,t.availHeight=4320,t.availLeft=0,t.availTop=0,t.colorDepth=32,t.isExtended=!1,t.pixelDepth=32,t}),delete e.devicePixelRatio,e.devicePixelRatio=4,e.MSMediaKeys&&(e.MSMediaKeys.isTypeSupportedWithFeaturesOriginal=e.MSMediaKeys.isTypeSupportedWithFeatures,e.MSMediaKeys.isTypeSupportedWithFeatures=function(t,a){const i=/,display-res-[x|y]=\d+,display-res-[x|y]=\d+/;return a=a.replace(i,""),this.isTypeSupportedWithFeaturesOriginal(t,a)},e.MSMediaKeys.isTypeSupportedOriginal=e.MSMediaKeys.isTypeSupported,e.MSMediaKeys.isTypeSupported=function(t){return t=t.replace("com.microsoft.playready.hardware","com.microsoft.playready"),this.isTypeSupportedOriginal(t)},e.MSMediaKeys.prototype.createSessionOriginal=e.MSMediaKeys.prototype.createSession,e.MSMediaKeys.prototype.createSession=function(t,a,i){console.log(t,a,i);const s=/,display-res-[x|y]=\d+,display-res-[x|y]=\d+/;return t=t.replace(s,""),this.createSessionOriginal(t,a,i)}),e.WebKitMediaKeys&&(e.WebKitMediaKeys.isTypeSupportedOriginal=e.WebKitMediaKeys.isTypeSupported,e.WebKitMediaKeys.isTypeSupported=function(t,a){let i=this.isTypeSupportedOriginal(t,a);return console.log("Hook WebKitMediaKeys",t,a,i),i}),e.navigator.requestMediaKeySystemAccess&&(e.navigator.requestMediaKeySystemAccessOriginal=e.navigator.requestMediaKeySystemAccess,e.navigator.requestMediaKeySystemAccess=async function(t,a){let i=t;if(t.indexOf("playready")!==-1)try{return await e.navigator.requestMediaKeySystemAccessOriginal(i,a)}catch{console.warn("Fallback PlayReady to SL"),i="com.microsoft.playready"}for(let c=0;a.length>c;c++)if(a[c].videoCapabilities!=null)for(let o=0;a[c].videoCapabilities.length>o;o++)a[c].videoCapabilities[o].robustness!=null;return await e.navigator.requestMediaKeySystemAccessOriginal(i,a)}),e.MediaCapabilities.prototype&&(e.MediaCapabilities.prototype.decodingInfoOriginal=e.MediaCapabilities.prototype.decodingInfo,e.MediaCapabilities.prototype.decodingInfo=function(t){let a=this.decodingInfoOriginal(t);return new Promise((s,c)=>{a.then(o=>{o.powerEfficient=o.supported,o.smooth=o.supported,s(o)}).catch(o=>{c(o)})})}),async function(){if(self.GM_registerMenuCommand&&window.MSMediaKeys){let t=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; features="hdcp=0"')!="",a=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="hdcp=0"')!="",i=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; features="hdcp=1"')!="",s=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="hdcp=1"')!="",c=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; features="hdcp=2"')!="",o=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="hdcp=2"')!="",p=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="decode-res-x=3840,decode-res-y=2160,decode-bpc=10,hdcp=2"')!="",h=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; features="hdcp=0"')!="",u=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="hdcp=0"')!="",M=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; features="hdcp=1"')!="",w=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="hdcp=1"')!="",g=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; features="hdcp=2"')!="",m=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="hdcp=2"')!="",S=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="decode-res-x=3840,decode-res-y=2160,decode-bpc=10,hdcp=2"')!="",d=function(r){return r?"\u2713":"\u2715"};GM_registerMenuCommand("PlayReady DRM Info ("+(p?"UHD Ready":"Restricted")+")",function(){let r=`PlayReady DRM (without HDCP 2.2):
`;r+="Hardware: "+d(t)+"    Software: "+d(h)+`

`,r+=`PlayReady DRM (without HDCP 2.2) with HEVC:
`,r+="Hardware: "+d(a)+"    Software: "+d(u)+`

`,r+=`PlayReady DRM (HDCP 2.2):
`,r+="Hardware: "+d(i)+"    Software: "+d(M)+`

`,r+=`PlayReady DRM (HDCP 2.2) with HEVC:
`,r+="Hardware: "+d(s)+"    Software: "+d(w)+`

`,r+=`PlayReady DRM (HDCP 2.2 Type 1):
`,r+="Hardware: "+d(c)+"    Software: "+d(g)+`

`,r+=`PlayReady DRM (HDCP 2.2 Type 1) with HEVC:
`,r+="Hardware: "+d(o)+"    Software: "+d(m)+`

`,r+=`PlayReady DRM (HDCP 2.2 Type 1) with HEVC UHD:
`,r+="Hardware: "+d(p)+"    Software: "+d(S)+`

`,alert(r)})}}();let n=function(){console.log("switch player log"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:76,ctrlKey:!0,altKey:!0,shiftKey:!0}))},l=function(){console.log("load local subtitle"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:84,ctrlKey:!0,altKey:!0,shiftKey:!0}))},y=function(){console.log("switch player info"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:68,ctrlKey:!0,altKey:!0,shiftKey:!0}))},f=function(){console.log("switch player info"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:83,ctrlKey:!0,altKey:!0,shiftKey:!0})),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:66,ctrlKey:!0,altKey:!0,shiftKey:!0}))};GM_registerMenuCommand("Player Info",y),GM_registerMenuCommand("Stream Selector",f),GM_registerMenuCommand("Player Log",n),GM_registerMenuCommand("Load Local Subtitle (.DFXP)",l)})();
