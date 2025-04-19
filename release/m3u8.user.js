// ==UserScript==
// @name         MPV-M3U8 Video Detector and Downloader
// @name:en      MPV-M3U8 Video Detector and Downloader
// @version      1.5.6
// @icon         https://tools.thatwind.com/favicon.png
// @author       -
// @namespace    https://tools.thatwind.com/
// @homepage
// @match        *://*/*
// @exclude      *://www.diancigaoshou.com/*
// @connect      *
// @grant        unsafeWindow
// @grant        GM_openInTab
// @grant        GM.openInTab
// @grant        GM_getValue
// @grant        GM.getValue
// @grant        GM_setValue
// @grant        GM.setValue
// @grant        GM_deleteValue
// @grant        GM.deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_download
// @run-at       document-start
// ==/UserScript==
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("global/window")):"function"==typeof define&&define.amd?define(["exports","global/window"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).m3u8Parser={},t.window)}(this,(function(t,e){"use strict";var n=function(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}(e),i=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e},a=function(){function t(){this.listeners={}}var e=t.prototype;return e.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},e.off=function(t,e){if(!this.listeners[t])return!1;var n=this.listeners[t].indexOf(e);return this.listeners[t]=this.listeners[t].slice(0),this.listeners[t].splice(n,1),n>-1},e.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var n=e.length,i=0;i<n;++i)e[i].call(this,arguments[1]);else for(var a=Array.prototype.slice.call(arguments,1),r=e.length,s=0;s<r;++s)e[s].apply(this,a)},e.dispose=function(){this.listeners={}},e.pipe=function(t){this.on("data",(function(e){t.push(e)}))},t}(),r=function(t){function e(){var e;return(e=t.call(this)||this).buffer="",e}return i(e,t),e.prototype.push=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf("\n");e>-1;e=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)},e}(a),s=function(t,e,n){return function(t){function e(){return t.exports=e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},e.apply(this,arguments)}t.exports=e}(n={path:void 0,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}(),o=String.fromCharCode(9),u=function(t){var e=/([0-9.]*)?@?([0-9.]*)?/.exec(t||""),n={};return e[1]&&(n.length=parseInt(e[1],10)),e[2]&&(n.offset=parseInt(e[2],10)),n},c=function(t){for(var e,n=t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),i={},a=n.length;a--;)""!==n[a]&&((e=/([^=]*)=(.*)/.exec(n[a]).slice(1))[0]=e[0].replace(/^\s+|\s+$/g,""),e[1]=e[1].replace(/^\s+|\s+$/g,""),e[1]=e[1].replace(/^['"](.*)['"]$/g,"$1"),i[e[0]]=e[1]);return i},l=function(t){function e(){var e;return(e=t.call(this)||this).customParsers=[],e.tagMappers=[],e}i(e,t);var n=e.prototype;return n.push=function(t){var e,n,i=this;0!==(t=t.trim()).length&&("#"===t[0]?this.tagMappers.reduce((function(e,n){var i=n(t);return i===t?e:e.concat([i])}),[t]).forEach((function(t){for(var a=0;a<i.customParsers.length;a++)if(i.customParsers[a].call(i,t))return;if(0===t.indexOf("#EXT"))if(t=t.replace("\r",""),e=/^#EXTM3U/.exec(t))i.trigger("data",{type:"tag",tagType:"m3u"});else{if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))return n={type:"tag",tagType:"inf"},e[1]&&(n.duration=parseFloat(e[1])),e[2]&&(n.title=e[2]),void i.trigger("data",n);if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))return n={type:"tag",tagType:"targetduration"},e[1]&&(n.duration=parseInt(e[1],10)),void i.trigger("data",n);if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))return n={type:"tag",tagType:"version"},e[1]&&(n.version=parseInt(e[1],10)),void i.trigger("data",n);if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return n={type:"tag",tagType:"media-sequence"},e[1]&&(n.number=parseInt(e[1],10)),void i.trigger("data",n);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return n={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(n.number=parseInt(e[1],10)),void i.trigger("data",n);if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))return n={type:"tag",tagType:"playlist-type"},e[1]&&(n.playlistType=e[1]),void i.trigger("data",n);if(e=/^#EXT-X-BYTERANGE:?(.*)?$/.exec(t))return n=s(u(e[1]),{type:"tag",tagType:"byterange"}),void i.trigger("data",n);if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))return n={type:"tag",tagType:"allow-cache"},e[1]&&(n.allowed=!/NO/.test(e[1])),void i.trigger("data",n);if(e=/^#EXT-X-MAP:?(.*)$/.exec(t)){if(n={type:"tag",tagType:"map"},e[1]){var r=c(e[1]);r.URI&&(n.uri=r.URI),r.BYTERANGE&&(n.byterange=u(r.BYTERANGE))}i.trigger("data",n)}else if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(t)){if(n={type:"tag",tagType:"stream-inf"},e[1]){if(n.attributes=c(e[1]),n.attributes.RESOLUTION){var l=n.attributes.RESOLUTION.split("x"),p={};l[0]&&(p.width=parseInt(l[0],10)),l[1]&&(p.height=parseInt(l[1],10)),n.attributes.RESOLUTION=p}n.attributes.BANDWIDTH&&(n.attributes.BANDWIDTH=parseInt(n.attributes.BANDWIDTH,10)),n.attributes["PROGRAM-ID"]&&(n.attributes["PROGRAM-ID"]=parseInt(n.attributes["PROGRAM-ID"],10))}i.trigger("data",n)}else{if(e=/^#EXT-X-MEDIA:?(.*)$/.exec(t))return n={type:"tag",tagType:"media"},e[1]&&(n.attributes=c(e[1])),void i.trigger("data",n);if(e=/^#EXT-X-ENDLIST/.exec(t))i.trigger("data",{type:"tag",tagType:"endlist"});else if(e=/^#EXT-X-DISCONTINUITY/.exec(t))i.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t))return n={type:"tag",tagType:"program-date-time"},e[1]&&(n.dateTimeString=e[1],n.dateTimeObject=new Date(e[1])),void i.trigger("data",n);if(e=/^#EXT-X-KEY:?(.*)$/.exec(t))return n={type:"tag",tagType:"key"},e[1]&&(n.attributes=c(e[1]),n.attributes.IV&&("0x"===n.attributes.IV.substring(0,2).toLowerCase()&&(n.attributes.IV=n.attributes.IV.substring(2)),n.attributes.IV=n.attributes.IV.match(/.{8}/g),n.attributes.IV[0]=parseInt(n.attributes.IV[0],16),n.attributes.IV[1]=parseInt(n.attributes.IV[1],16),n.attributes.IV[2]=parseInt(n.attributes.IV[2],16),n.attributes.IV[3]=parseInt(n.attributes.IV[3],16),n.attributes.IV=new Uint32Array(n.attributes.IV))),void i.trigger("data",n);if(e=/^#EXT-X-START:?(.*)$/.exec(t))return n={type:"tag",tagType:"start"},e[1]&&(n.attributes=c(e[1]),n.attributes["TIME-OFFSET"]=parseFloat(n.attributes["TIME-OFFSET"]),n.attributes.PRECISE=/YES/.test(n.attributes.PRECISE)),void i.trigger("data",n);if(e=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t))return n={type:"tag",tagType:"cue-out-cont"},e[1]?n.data=e[1]:n.data="",void i.trigger("data",n);if(e=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(t))return n={type:"tag",tagType:"cue-out"},e[1]?n.data=e[1]:n.data="",void i.trigger("data",n);if(e=/^#EXT-X-CUE-IN:?(.*)?$/.exec(t))return n={type:"tag",tagType:"cue-in"},e[1]?n.data=e[1]:n.data="",void i.trigger("data",n);if((e=/^#EXT-X-SKIP:(.*)$/.exec(t))&&e[1])return(n={type:"tag",tagType:"skip"}).attributes=c(e[1]),n.attributes.hasOwnProperty("SKIPPED-SEGMENTS")&&(n.attributes["SKIPPED-SEGMENTS"]=parseInt(n.attributes["SKIPPED-SEGMENTS"],10)),n.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES")&&(n.attributes["RECENTLY-REMOVED-DATERANGES"]=n.attributes["RECENTLY-REMOVED-DATERANGES"].split(o)),void i.trigger("data",n);if((e=/^#EXT-X-PART:(.*)$/.exec(t))&&e[1])return(n={type:"tag",tagType:"part"}).attributes=c(e[1]),["DURATION"].forEach((function(t){n.attributes.hasOwnProperty(t)&&(n.attributes[t]=parseFloat(n.attributes[t]))})),["INDEPENDENT","GAP"].forEach((function(t){n.attributes.hasOwnProperty(t)&&(n.attributes[t]=/YES/.test(n.attributes[t]))})),n.attributes.hasOwnProperty("BYTERANGE")&&(n.attributes.byterange=u(n.attributes.BYTERANGE)),void i.trigger("data",n);if((e=/^#EXT-X-SERVER-CONTROL:(.*)$/.exec(t))&&e[1])return(n={type:"tag",tagType:"server-control"}).attributes=c(e[1]),["CAN-SKIP-UNTIL","PART-HOLD-BACK","HOLD-BACK"].forEach((function(t){n.attributes.hasOwnProperty(t)&&(n.attributes[t]=parseFloat(n.attributes[t]))})),["CAN-SKIP-DATERANGES","CAN-BLOCK-RELOAD"].forEach((function(t){n.attributes.hasOwnProperty(t)&&(n.attributes[t]=/YES/.test(n.attributes[t]))})),void i.trigger("data",n);if((e=/^#EXT-X-PART-INF:(.*)$/.exec(t))&&e[1])return(n={type:"tag",tagType:"part-inf"}).attributes=c(e[1]),["PART-TARGET"].forEach((function(t){n.attributes.hasOwnProperty(t)&&(n.attributes[t]=parseFloat(n.attributes[t]))})),void i.trigger("data",n);if((e=/^#EXT-X-PRELOAD-HINT:(.*)$/.exec(t))&&e[1])return(n={type:"tag",tagType:"preload-hint"}).attributes=c(e[1]),["BYTERANGE-START","BYTERANGE-LENGTH"].forEach((function(t){if(n.attributes.hasOwnProperty(t)){n.attributes[t]=parseInt(n.attributes[t],10);var e="BYTERANGE-LENGTH"===t?"length":"offset";n.attributes.byterange=n.attributes.byterange||{},n.attributes.byterange[e]=n.attributes[t],delete n.attributes[t]}})),void i.trigger("data",n);if((e=/^#EXT-X-RENDITION-REPORT:(.*)$/.exec(t))&&e[1])return(n={type:"tag",tagType:"rendition-report"}).attributes=c(e[1]),["LAST-MSN","LAST-PART"].forEach((function(t){n.attributes.hasOwnProperty(t)&&(n.attributes[t]=parseInt(n.attributes[t],10))})),void i.trigger("data",n);i.trigger("data",{type:"tag",data:t.slice(4)})}}}else i.trigger("data",{type:"comment",text:t.slice(1)})})):this.trigger("data",{type:"uri",uri:t}))},n.addParser=function(t){var e=this,n=t.expression,i=t.customType,a=t.dataParser,r=t.segment;"function"!=typeof a&&(a=function(t){return t}),this.customParsers.push((function(t){if(n.exec(t))return e.trigger("data",{type:"custom",data:a(t),customType:i,segment:r}),!0}))},n.addTagMapper=function(t){var e=t.expression,n=t.map;this.tagMappers.push((function(t){return e.test(t)?n(t):t}))},e}(a);function p(t){for(var e,i=(e=t,n.default.atob?n.default.atob(e):Buffer.from(e,"base64").toString("binary")),a=new Uint8Array(i.length),r=0;r<i.length;r++)a[r]=i.charCodeAt(r);return a}var d=function(t){var e={};return Object.keys(t).forEach((function(n){var i;e[(i=n,i.toLowerCase().replace(/-(\w)/g,(function(t){return t[1].toUpperCase()})))]=t[n]})),e},f=function(t){var e=t.serverControl,n=t.targetDuration,i=t.partTargetDuration;if(e){var a="#EXT-X-SERVER-CONTROL",r="holdBack",s="partHoldBack",o=n&&3*n,u=i&&2*i;n&&!e.hasOwnProperty(r)&&(e[r]=o,this.trigger("info",{message:a+" defaulting HOLD-BACK to targetDuration * 3 ("+o+")."})),o&&e[r]<o&&(this.trigger("warn",{message:a+" clamping HOLD-BACK ("+e[r]+") to targetDuration * 3 ("+o+")"}),e[r]=o),i&&!e.hasOwnProperty(s)&&(e[s]=3*i,this.trigger("info",{message:a+" defaulting PART-HOLD-BACK to partTargetDuration * 3 ("+e[s]+")."})),i&&e[s]<u&&(this.trigger("warn",{message:a+" clamping PART-HOLD-BACK ("+e[s]+") to partTargetDuration * 2 ("+u+")."}),e[s]=u)}},g=function(t){function e(){var e;(e=t.call(this)||this).lineStream=new r,e.parseStream=new l,e.lineStream.pipe(e.parseStream);var n,i,a=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e),o=[],u={},c=!1,g=function(){},h={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},m=0;e.manifest={allowCache:!0,discontinuityStarts:[],segments:[]};var y=0,b=0;return e.on("end",(function(){u.uri||!u.parts&&!u.preloadHints||(!u.map&&n&&(u.map=n),!u.key&&i&&(u.key=i),u.timeline||"number"!=typeof m||(u.timeline=m),e.manifest.preloadSegment=u)})),e.parseStream.on("data",(function(t){var e,r;({tag:function(){({version:function(){t.version&&(this.manifest.version=t.version)},"allow-cache":function(){this.manifest.allowCache=t.allowed,"allowed"in t||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var e={};"length"in t&&(u.byterange=e,e.length=t.length,"offset"in t||(t.offset=y)),"offset"in t&&(u.byterange=e,e.offset=t.offset),y=e.offset+e.length},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),t.duration>0&&(u.duration=t.duration),0===t.duration&&(u.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=o},key:function(){if(t.attributes)if("NONE"!==t.attributes.METHOD)if(t.attributes.URI){if("com.apple.streamingkeydelivery"===t.attributes.KEYFORMAT)return this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.apple.fps.1_0"]={attributes:t.attributes});if("com.microsoft.playready"===t.attributes.KEYFORMAT)return this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.microsoft.playready"]={uri:t.attributes.URI});if("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"===t.attributes.KEYFORMAT)return-1===["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].indexOf(t.attributes.METHOD)?void this.trigger("warn",{message:"invalid key method provided for Widevine"}):("SAMPLE-AES-CENC"===t.attributes.METHOD&&this.trigger("warn",{message:"SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"}),"data:text/plain;base64,"!==t.attributes.URI.substring(0,23)?void this.trigger("warn",{message:"invalid key URI provided for Widevine"}):t.attributes.KEYID&&"0x"===t.attributes.KEYID.substring(0,2)?(this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.widevine.alpha"]={attributes:{schemeIdUri:t.attributes.KEYFORMAT,keyId:t.attributes.KEYID.substring(2)},pssh:p(t.attributes.URI.split(",")[1])})):void this.trigger("warn",{message:"invalid key ID provided for Widevine"}));t.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),i={method:t.attributes.METHOD||"AES-128",uri:t.attributes.URI},void 0!==t.attributes.IV&&(i.iv=t.attributes.IV)}else this.trigger("warn",{message:"ignoring key declaration without URI"});else i=null;else this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(t.number)?this.manifest.mediaSequence=t.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+t.number})},"discontinuity-sequence":function(){isFinite(t.number)?(this.manifest.discontinuitySequence=t.number,m=t.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+t.number})},"playlist-type":function(){/VOD|EVENT/.test(t.playlistType)?this.manifest.playlistType=t.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+t.playlist})},map:function(){n={},t.uri&&(n.uri=t.uri),t.byterange&&(n.byterange=t.byterange),i&&(n.key=i)},"stream-inf":function(){this.manifest.playlists=o,this.manifest.mediaGroups=this.manifest.mediaGroups||h,t.attributes?(u.attributes||(u.attributes={}),s(u.attributes,t.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||h,t.attributes&&t.attributes.TYPE&&t.attributes["GROUP-ID"]&&t.attributes.NAME){var n=this.manifest.mediaGroups[t.attributes.TYPE];n[t.attributes["GROUP-ID"]]=n[t.attributes["GROUP-ID"]]||{},e=n[t.attributes["GROUP-ID"]],(r={default:/yes/i.test(t.attributes.DEFAULT)}).default?r.autoselect=!0:r.autoselect=/yes/i.test(t.attributes.AUTOSELECT),t.attributes.LANGUAGE&&(r.language=t.attributes.LANGUAGE),t.attributes.URI&&(r.uri=t.attributes.URI),t.attributes["INSTREAM-ID"]&&(r.instreamId=t.attributes["INSTREAM-ID"]),t.attributes.CHARACTERISTICS&&(r.characteristics=t.attributes.CHARACTERISTICS),t.attributes.FORCED&&(r.forced=/yes/i.test(t.attributes.FORCED)),e[t.attributes.NAME]=r}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){m+=1,u.discontinuity=!0,this.manifest.discontinuityStarts.push(o.length)},"program-date-time":function(){void 0===this.manifest.dateTimeString&&(this.manifest.dateTimeString=t.dateTimeString,this.manifest.dateTimeObject=t.dateTimeObject),u.dateTimeString=t.dateTimeString,u.dateTimeObject=t.dateTimeObject},targetduration:function(){!isFinite(t.duration)||t.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+t.duration}):(this.manifest.targetDuration=t.duration,f.call(this,this.manifest))},start:function(){t.attributes&&!isNaN(t.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:t.attributes["TIME-OFFSET"],precise:t.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){u.cueOut=t.data},"cue-out-cont":function(){u.cueOutCont=t.data},"cue-in":function(){u.cueIn=t.data},skip:function(){this.manifest.skip=d(t.attributes),this.warnOnMissingAttributes_("#EXT-X-SKIP",t.attributes,["SKIPPED-SEGMENTS"])},part:function(){var e=this;c=!0;var n=this.manifest.segments.length,i=d(t.attributes);u.parts=u.parts||[],u.parts.push(i),i.byterange&&(i.byterange.hasOwnProperty("offset")||(i.byterange.offset=b),b=i.byterange.offset+i.byterange.length);var a=u.parts.length-1;this.warnOnMissingAttributes_("#EXT-X-PART #"+a+" for segment #"+n,t.attributes,["URI","DURATION"]),this.manifest.renditionReports&&this.manifest.renditionReports.forEach((function(t,n){t.hasOwnProperty("lastPart")||e.trigger("warn",{message:"#EXT-X-RENDITION-REPORT #"+n+" lacks required attribute(s): LAST-PART"})}))},"server-control":function(){var e=this.manifest.serverControl=d(t.attributes);e.hasOwnProperty("canBlockReload")||(e.canBlockReload=!1,this.trigger("info",{message:"#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"})),f.call(this,this.manifest),e.canSkipDateranges&&!e.hasOwnProperty("canSkipUntil")&&this.trigger("warn",{message:"#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"})},"preload-hint":function(){var e=this.manifest.segments.length,n=d(t.attributes),i=n.type&&"PART"===n.type;u.preloadHints=u.preloadHints||[],u.preloadHints.push(n),n.byterange&&(n.byterange.hasOwnProperty("offset")||(n.byterange.offset=i?b:0,i&&(b=n.byterange.offset+n.byterange.length)));var a=u.preloadHints.length-1;if(this.warnOnMissingAttributes_("#EXT-X-PRELOAD-HINT #"+a+" for segment #"+e,t.attributes,["TYPE","URI"]),n.type)for(var r=0;r<u.preloadHints.length-1;r++){var s=u.preloadHints[r];s.type&&s.type===n.type&&this.trigger("warn",{message:"#EXT-X-PRELOAD-HINT #"+a+" for segment #"+e+" has the same TYPE "+n.type+" as preload hint #"+r})}},"rendition-report":function(){var e=d(t.attributes);this.manifest.renditionReports=this.manifest.renditionReports||[],this.manifest.renditionReports.push(e);var n=this.manifest.renditionReports.length-1,i=["LAST-MSN","URI"];c&&i.push("LAST-PART"),this.warnOnMissingAttributes_("#EXT-X-RENDITION-REPORT #"+n,t.attributes,i)},"part-inf":function(){this.manifest.partInf=d(t.attributes),this.warnOnMissingAttributes_("#EXT-X-PART-INF",t.attributes,["PART-TARGET"]),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),f.call(this,this.manifest)}}[t.tagType]||g).call(a)},uri:function(){u.uri=t.uri,o.push(u),this.manifest.targetDuration&&!("duration"in u)&&(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),u.duration=this.manifest.targetDuration),i&&(u.key=i),u.timeline=m,n&&(u.map=n),b=0,u={}},comment:function(){},custom:function(){t.segment?(u.custom=u.custom||{},u.custom[t.customType]=t.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[t.customType]=t.data)}})[t.type].call(a)})),e}i(e,t);var n=e.prototype;return n.warnOnMissingAttributes_=function(t,e,n){var i=[];n.forEach((function(t){e.hasOwnProperty(t)||i.push(t)})),i.length&&this.trigger("warn",{message:t+" lacks required attribute(s): "+i.join(", ")})},n.push=function(t){this.lineStream.push(t)},n.end=function(){this.lineStream.push("\n"),this.trigger("end")},n.addParser=function(t){this.parseStream.addParser(t)},n.addTagMapper=function(t){this.parseStream.addTagMapper(t)},e}(a);t.LineStream=r,t.ParseStream=l,t.Parser=g,Object.defineProperty(t,"__esModule",{value:!0})})),function(){"use strict";const t={addStyle(t){let e=document.createElement("style");e.innerHTML=t,document.documentElement.appendChild(e)},getValue:async(t,e)=>await("function"==typeof GM_getValue?GM_getValue:GM.getValue)(t,e),setValue:async(t,e)=>await("function"==typeof GM_setValue?GM_setValue:GM.setValue)(t,e),deleteValue:async t=>await("function"==typeof GM_deleteValue?GM_deleteValue:GM.deleteValue)(t),openInTab:(t,e=!1)=>("function"==typeof GM_openInTab?GM_openInTab:GM.openInTab)(t,e),xmlHttpRequest:t=>("function"==typeof GM_xmlhttpRequest?GM_xmlhttpRequest:GM.xmlHttpRequest)(t),download(t){return this.openInTab(t.url)},copyText(t){!function(t){var e=document.createElement("textarea");e.textContent=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.blur(),document.body.removeChild(e)}(t)},message(t,e=5e3){const n="f8243rd238-gm-message-panel";let i=document.querySelector(`#${n}`);i||(i=document.createElement("div"),i.id=n,i.style="\n                    position: fixed;\n                    bottom: 20px;\n                    right: 20px;\n                    display: flex;\n                    flex-direction: column;\n                    align-items: end;\n                    z-index: 999999999999999;\n                ",(document.body||document.documentElement).appendChild(i));let a=document.createElement("div");a.innerText=t,a.style="\n                padding: 3px 8px;\n                border-radius: 5px;\n                background: black;\n                box-shadow: #000 1px 2px 5px;\n                margin-top: 10px;\n                font-size: small;\n                color: #fff;\n                text-align: right;\n            ",i.appendChild(a),setTimeout((()=>{i.removeChild(a)}),e)}};if("tools.thatwind.com"===location.host||"localhost:3000"===location.host){t.addStyle("#userscript-tip{display:none !important;}");const f=unsafeWindow.fetch;return void(unsafeWindow.fetch=async function(...e){try{let t=await f(...e);if(200!==t.status)throw new Error(t.status);return t}catch(n){if(1==e.length)return console.log(`请求代理：${e[0]}`),await new Promise(((n,i)=>{let a=new URLSearchParams(location.hash.slice(1)).get("referer"),r={};a&&(a=new URL(a),r={origin:a.origin,referer:a.href}),t.xmlHttpRequest({method:"GET",url:e[0],responseType:"arraybuffer",headers:r,onload(t){n({status:t.status,headers:new Headers(t.responseHeaders.split("\n").filter((t=>t)).map((t=>t.split(/:\s*/))).reduce(((t,[e,n])=>(t[e]=n,t)),{})),text:async()=>t.responseText,arrayBuffer:async()=>t.response})},onerror(){i(new Error)}})}));throw n}})}function e(){return new Promise((e=>{window.addEventListener("message",(async function n(i){if("string"==typeof i.data&&i.data.startsWith("3j4t9uj349-gm-top-title-name:")){let a=i.data.slice(29);await new Promise((t=>setTimeout(t,5))),e(await t.getValue(a)),t.deleteValue(a),window.removeEventListener("message",n)}})),window.top.postMessage("3j4t9uj349-gm-get-title","*")}))}window.addEventListener("message",(async e=>{if("3j4t9uj349-gm-get-title"===e.data){let n=`top-title-${Date.now()}`;await t.setValue(n,document.title),e.source.postMessage(`3j4t9uj349-gm-top-title-name:${n}`,"*")}}));{if(location.href.match(/^.*?socolive.*?$/)){var n=unsafeWindow.fetch;unsafeWindow.fetch=new Proxy(n,{apply:function(t,e,n){console.log(t,e,n);try{-1!=n[0].indexOf(".flv")&&p({url:n[0],content:n[0]})}catch(t){console.log(t)}return Reflect.apply(t,e,n)}})}const g=unsafeWindow.Response.prototype.text;unsafeWindow.Response.prototype.text=function(){return new Promise(((t,e)=>{g.call(this).then((e=>{t(e),y(e)&&(GM_xmlhttpRequest({method:"POST",url:"https://paste.centos.org/",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"name=&title=&lang=text&code="+encodeURIComponent(e)+"&expire=120&submit=submit",onload:function(t){d({type:"M3U8",url:new URL(t.responseText.match(/<a class="control" href="([^"]*?)">View Raw<\/a>/)[1]),duration:"null"})}}),p({url:this.url,content:e})),m(this.url)&&p({url:this.url})})).catch(e)}))};const h=unsafeWindow.XMLHttpRequest.prototype.open;function m(t){if(-1!=(t=new URL(t,location.href)).pathname.indexOf(".m3u8")||-1!=t.pathname.indexOf(".m3u"))return!0}function y(t){if(t.trim().startsWith("#EXTM3U"))return!0}unsafeWindow.XMLHttpRequest.prototype.open=function(...t){return this.addEventListener("load",(()=>{try{let e=this.responseText;y(e)&&(GM_xmlhttpRequest({method:"POST",url:"https://paste.centos.org/",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"name=&title=&lang=text&code="+encodeURIComponent(e)+"&expire=120&submit=submit",onload:function(t){d({type:"M3U8",url:new URL(t.responseText.match(/<a class="control" href="([^"]*?)">View Raw<\/a>/)[1]),duration:"null"})}}),p({url:t[1],content:e}))}catch{}})),m(t[1])&&p({url:t[1]}),h.apply(this,t)},setInterval((function(){for(let e of Array.from(document.querySelectorAll("video")))if(e.duration&&e.src&&e.src.startsWith("http")&&!l.includes(e.src)){const n=e.src;l.push(n),d({type:"video",url:new URL(n),duration:Math.ceil(10*e.duration/60)/10+" mins",download(){const e={url:n,name:(()=>{let t=new URL(n).pathname.split("/").slice(-1)[0];return/\.\w+$/.test(t)||(t.match(/^\s*$/)&&(t=Date.now()),t+=".mp4"),t})(),headers:{origin:location.origin},onerror(e){t.openInTab(n)}};t.download(e)}})}}),1e3)}const i=document.createElement("div");i.style="\n        position: fixed;\n        z-index: 9999999999999999;\n        opacity: 0.9;\n    ",i.style.display="none",document.documentElement.appendChild(i);const a=i.attachShadow({mode:"open"}),r=document.createElement("div");a.appendChild(r);const s=document.createElement("div");s.style="\n        text-align: right;\n    ",s.innerHTML='\n        <span\n            class="number-indicator"\n            data-number="0"\n            style="\n                display: inline-flex;\n                width: 20px;\n                height: 20px;\n                background: black;\n                padding: 10px;\n                border-radius: 100px;\n                margin-bottom: 5px;\n                cursor: pointer;\n            "\n        >\n            <svg\n            style="\n                filter: invert(1);\n            "\n            version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 585.913 585.913" style="enable-background:new 0 0 585.913 585.913;" xml:space="preserve">\n                <g>\n                    <path d="M11.173,46.2v492.311l346.22,47.402V535.33c0.776,0.058,1.542,0.109,2.329,0.109h177.39\n                    c20.75,0,37.627-16.883,37.627-37.627V86.597c0-20.743-16.877-37.628-37.627-37.628h-177.39c-0.781,0-1.553,0.077-2.329,0.124V0\n                    L11.173,46.2z M110.382,345.888l-1.37-38.273c-0.416-11.998-0.822-26.514-0.822-41.023l-0.415,0.01\n                    c-2.867,12.767-6.678,26.956-10.187,38.567l-10.961,38.211l-15.567-0.582l-9.239-37.598c-2.801-11.269-5.709-24.905-7.725-37.361\n                    l-0.25,0.005c-0.503,12.914-0.879,27.657-1.503,39.552L50.84,343.6l-17.385-0.672l5.252-94.208l25.415-0.996l8.499,32.064\n                    c2.724,11.224,5.467,23.364,7.428,34.819h0.389c2.503-11.291,5.535-24.221,8.454-35.168l9.643-33.042l27.436-1.071l5.237,101.377\n                    L110.382,345.888z M172.479,349.999c-12.569-0.504-23.013-4.272-28.539-8.142l4.504-17.249c3.939,2.226,13.1,6.445,22.373,6.687\n                    c12.009,0.32,18.174-5.497,18.174-13.218c0-10.068-9.838-14.683-19.979-14.74l-9.253-0.052v-16.777l8.801-0.066\n                    c7.708-0.208,17.646-3.262,17.646-11.905c0-6.121-4.914-10.562-14.635-10.331c-7.95,0.189-16.245,3.914-20.213,6.446l-4.52-16.693\n                    c5.693-4.008,17.224-8.11,29.883-8.588c21.457-0.795,33.643,10.407,33.643,24.625c0,11.029-6.197,19.691-18.738,24.161v0.314\n                    c12.229,2.216,22.266,11.663,22.266,25.281C213.89,338.188,197.866,351.001,172.479,349.999z M331.104,302.986\n                    c0,36.126-19.55,52.541-51.193,51.286c-29.318-1.166-46.019-17.103-46.019-52.044v-61.104l25.711-1.006v64.201\n                    c0,19.191,7.562,29.146,21.179,29.502c14.234,0.368,22.189-8.976,22.189-29.26v-66.125l28.122-1.097v65.647H331.104z\n                    M359.723,70.476h177.39c8.893,0,16.125,7.236,16.125,16.126v411.22c0,8.888-7.232,16.127-16.125,16.127h-177.39\n                    c-0.792,0-1.563-0.116-2.329-0.232V380.782c17.685,14.961,40.504,24.032,65.434,24.032c56.037,0,101.607-45.576,101.607-101.599\n                    c0-56.029-45.581-101.603-101.607-101.603c-24.93,0-47.749,9.069-65.434,24.035V70.728\n                    C358.159,70.599,358.926,70.476,359.723,70.476z M390.873,364.519V245.241c0-1.07,0.615-2.071,1.586-2.521\n                    c0.981-0.483,2.13-0.365,2.981,0.307l93.393,59.623c0.666,0.556,1.065,1.376,1.065,2.215c0,0.841-0.399,1.67-1.065,2.215\n                    l-93.397,59.628c-0.509,0.4-1.114,0.61-1.743,0.61l-1.233-0.289C391.488,366.588,390.873,365.585,390.873,364.519z" />\n                </g>\n            </svg>\n        </span>\n    ',r.appendChild(s);const o=document.createElement("style");o.innerHTML='\n        .number-indicator{\n            position:relative;\n        }\n\n        .number-indicator::after{\n            content: attr(data-number);\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            color: #40a9ff;\n            font-size: 14px;\n            font-weight: bold;\n            background: #000;\n            border-radius: 10px;\n            padding: 3px 5px;\n        }\n\n        .copy-link:link{\n            text-decoration: none;\n        }\n\n        .copy-link:hover{\n            text-decoration: underline;\n        }\n\n        .download-btn:hover{\n            text-decoration: underline;\n        }\n        .download-btn:active{\n            opacity: 0.9;\n        }\n\n        .m3u8-item{\n            color: white;\n            margin-bottom: 5px;\n            display: flex;\n            flex-direction: row;\n            align-items: baseline;\n            background: black;\n            padding: 3px 10px;\n            border-radius: 3px;\n            font-size: 12px;\n            user-select: none;\n        }\n\n        [data-shown="false"] {\n            opacity: 0.8;\n            zoom: 0.8;\n        }\n\n        [data-shown="false"]:hover{\n            opacity: 1;\n        }\n\n        [data-shown="false"] .m3u8-item{\n            display: none;\n        }\n\n    ',r.appendChild(o);const u=s.querySelector(".number-indicator");!async function(){let e=await GM_getValue("shown",!0);r.setAttribute("data-shown",e);let n=await GM_getValue("x",10),a=await GM_getValue("y",10);n=Math.min(innerWidth-50,n),a=Math.min(innerHeight-50,a),n<0&&(n=0),a<0&&(a=0),i.style.top=`${a}px`,i.style.right=`${n}px`,u.addEventListener("mousedown",(s=>{let o=s.pageX,u=s.pageY,c=!1,l=t=>{let e=t.pageX-o,r=t.pageY-u;(c||Math.abs(e)+Math.abs(r)>5)&&(c=!0,i.style.top=`${a+r}px`,i.style.right=n-e+"px")},p=i=>{let s=i.pageX-o,d=i.pageY-u;c?(n-=s,a+=d,t.setValue("x",n),t.setValue("y",a)):(e=!e,t.setValue("shown",e),r.setAttribute("data-shown",e)),removeEventListener("mousemove",l),removeEventListener("mouseup",p)};addEventListener("mousemove",l),addEventListener("mouseup",p)}))}();let c=0,l=[];async function p({url:n,content:i}){if(n=new URL(n),l.includes(n.href))return;i=i||await(await fetch(n)).text();const a=new m3u8Parser.Parser;a.push(i),a.end();const r=a.manifest;if(r.segments){let t=0;r.segments.forEach((e=>{t+=e.duration})),r.duration=t}d({type:"m3u8",url:n,duration:r.duration?Math.ceil(10*r.duration/60)/10+" mins":r.playlists?`多(Multi)(${r.playlists.length})`:"未知(unknown)",async download(){t.openInTab(`https://tools.thatwind.com/tool/m3u8downloader#${new URLSearchParams({m3u8:n.href,referer:location.href,filename:await e()||""})}`)}})}async function d({type:e,url:n,duration:a,download:o}){let u=document.createElement("div");u.className="m3u8-item",u.innerHTML=`\n            <span>${e}</span>\n            <a class="copy-link" href="${n.href}" title="${n}" style="\n                color: white;\n                max-width: 200px;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                overflow: hidden;\n                margin-left: 10px;\n                cursor:pointer;"\n            target="_blank" >${n.pathname}</a>\n            <span\n                style="\n                    margin-left: 10px;\n                    flex-grow: 1;\n                "\n            >${a}</span>\n            <span\n                class="download-btn"\n                style="\n                    margin-left: 10px;\n                    cursor: pointer;\n            ">⯆</span>\n        `,u.querySelector(".copy-link").addEventListener("click",(()=>{t.copyText(n.href),t.message("已复制链接 (link copied)",2e3)})),u.querySelector(".download-btn").addEventListener("click",o),i.style.display="block",c++,l.push(n.href),s.querySelector(".number-indicator").setAttribute("data-number",c),r.appendChild(u)}window.top!==window.self&&d({type:"iframe",url:new URL(location.href),duration:"unknown",async download(){t.openInTab(`https://tools.thatwind.com/tool/m3u8downloader#${new URLSearchParams({m3u8:url.href,referer:location.href,filename:await e()||""})}`)}})}();