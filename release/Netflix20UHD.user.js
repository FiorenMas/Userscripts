// ==UserScript==
// @name                 Netflix UHD
// @namespace            http://tampermonkey.net/
// @version              1.24
// @author               TGSAN
// @match                https://www.netflix.com/*
// @icon                 https://www.google.com/s2/favicons?sz=64&domain=netflix.com
// @run-at               document-start
// @grant                unsafeWindow
// @grant                GM_registerMenuCommand
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Netflix20UHD.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Netflix20UHD.meta.js
// ==/UserScript==
(function(){let e;self.unsafeWindow?(console.log("use unsafeWindow mode"),e=self.unsafeWindow):(console.log("use window mode"),e=self.window),delete e.screen,e.__defineGetter__("screen",function(){let t=[];return t.width=7680,t.height=4320,t.availWidth=7680,t.availHeight=4320,t.availLeft=0,t.availTop=0,t.colorDepth=32,t.isExtended=!1,t.pixelDepth=32,t}),delete e.devicePixelRatio,e.devicePixelRatio=4,e.MSMediaKeys&&(e.MSMediaKeys.isTypeSupportedWithFeaturesOriginal=e.MSMediaKeys.isTypeSupportedWithFeatures,e.MSMediaKeys.isTypeSupportedWithFeatures=function(t,i){const d=/,display-res-[x|y]=\d+,display-res-[x|y]=\d+/;return i=i.replace(d,""),this.isTypeSupportedWithFeaturesOriginal(t,i)}),e.WebKitMediaKeys&&(e.WebKitMediaKeys.isTypeSupportedOriginal=e.WebKitMediaKeys.isTypeSupported,e.WebKitMediaKeys.isTypeSupported=function(t,i){let d=this.isTypeSupportedOriginal(t,i);return console.log("Hook WebKitMediaKeys",t,i,d),d}),e.navigator.requestMediaKeySystemAccess&&(e.navigator.requestMediaKeySystemAccessOriginal=e.navigator.requestMediaKeySystemAccess,e.navigator.requestMediaKeySystemAccess=async function(t,i){let d=t;t.indexOf("playready");for(let s=0;i.length>s;s++)if(i[s].videoCapabilities!=null)for(let o=0;i[s].videoCapabilities.length>o;o++)i[s].videoCapabilities[o].robustness!=null;return await e.navigator.requestMediaKeySystemAccessOriginal(d,i)}),e.MediaCapabilities.prototype&&(e.MediaCapabilities.prototype.decodingInfoOriginal=e.MediaCapabilities.prototype.decodingInfo,e.MediaCapabilities.prototype.decodingInfo=function(t){let i=this.decodingInfoOriginal(t);return new Promise((c,s)=>{i.then(o=>{o.powerEfficient=o.supported,o.smooth=o.supported,c(o)}).catch(o=>{s(o)})})}),async function(){if(self.GM_registerMenuCommand&&window.MSMediaKeys){let t=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; features="hdcp=0"')!="",i=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="hdcp=0"')!="",d=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; features="hdcp=1"')!="",c=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="hdcp=1"')!="",s=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; features="hdcp=2"')!="",o=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="hdcp=2"')!="",n=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.hardware",'video/mp4; codecs="hev1,mp4a"; features="decode-res-x=3840,decode-res-y=2160,decode-bpc=10,hdcp=2"')!="",u=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; features="hdcp=0"')!="",f=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="hdcp=0"')!="",w=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; features="hdcp=1"')!="",m=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="hdcp=1"')!="",M=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; features="hdcp=2"')!="",v=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="hdcp=2"')!="",S=window.MSMediaKeys.isTypeSupportedWithFeaturesOriginal("com.microsoft.playready.software",'video/mp4; codecs="hev1,mp4a"; features="decode-res-x=3840,decode-res-y=2160,decode-bpc=10,hdcp=2"')!="",r=function(a){return a?"\u2713":"\u2715"};GM_registerMenuCommand("PlayReady DRM Info ("+(n?"UHD Ready":"Restricted")+")",function(){let a=`PlayReady DRM (without HDCP 2.2):
`;a+="Hardware: "+r(t)+"    Software: "+r(u)+`

`,a+=`PlayReady DRM (without HDCP 2.2) with HEVC:
`,a+="Hardware: "+r(i)+"    Software: "+r(f)+`

`,a+=`PlayReady DRM (HDCP 2.2):
`,a+="Hardware: "+r(d)+"    Software: "+r(w)+`

`,a+=`PlayReady DRM (HDCP 2.2) with HEVC:
`,a+="Hardware: "+r(c)+"    Software: "+r(m)+`

`,a+=`PlayReady DRM (HDCP 2.2 Type 1):
`,a+="Hardware: "+r(s)+"    Software: "+r(M)+`

`,a+=`PlayReady DRM (HDCP 2.2 Type 1) with HEVC:
`,a+="Hardware: "+r(o)+"    Software: "+r(v)+`

`,a+=`PlayReady DRM (HDCP 2.2 Type 1) with HEVC UHD:
`,a+="Hardware: "+r(n)+"    Software: "+r(S)+`

`,alert(a)})}}();let p=function(){console.log("switch player log"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:76,ctrlKey:!0,altKey:!0,shiftKey:!0}))},l=function(){console.log("load local subtitle"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:84,ctrlKey:!0,altKey:!0,shiftKey:!0}))},y=function(){console.log("switch player info"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:68,ctrlKey:!0,altKey:!0,shiftKey:!0}))},h=function(){console.log("switch player info"),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:83,ctrlKey:!0,altKey:!0,shiftKey:!0})),e.dispatchEvent(new KeyboardEvent("keydown",{keyCode:66,ctrlKey:!0,altKey:!0,shiftKey:!0}))};GM_registerMenuCommand("Player Info",y),GM_registerMenuCommand("Stream Selector",h),GM_registerMenuCommand("Player Log",p),GM_registerMenuCommand("Load Local Subtitle (.DFXP)",l)})();
