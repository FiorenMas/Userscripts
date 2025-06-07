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
/*! @name m3u8-parser @version 4.7.1 @license Apache-2.0 */(function(g,R){typeof exports=="object"&&typeof module<"u"?R(exports,require("global/window")):typeof define=="function"&&define.amd?define(["exports","global/window"],R):R((g=typeof globalThis<"u"?globalThis:g||self).m3u8Parser={},g.window)})(this,function(g,R){"use strict";function V(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var T=V(R),C=function(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r},w=function(){function n(){this.listeners={}}var r=n.prototype;return r.on=function(s,a){this.listeners[s]||(this.listeners[s]=[]),this.listeners[s].push(a)},r.off=function(s,a){if(!this.listeners[s])return!1;var e=this.listeners[s].indexOf(a);return this.listeners[s]=this.listeners[s].slice(0),this.listeners[s].splice(e,1),e>-1},r.trigger=function(s){var a=this.listeners[s];if(a)if(arguments.length===2)for(var e=a.length,t=0;t<e;++t)a[t].call(this,arguments[1]);else for(var c=Array.prototype.slice.call(arguments,1),u=a.length,o=0;o<u;++o)a[o].apply(this,c)},r.dispose=function(){this.listeners={}},r.pipe=function(s){this.on("data",function(a){s.push(a)})},n}(),I=function(n){function r(){var s;return(s=n.call(this)||this).buffer="",s}return C(r,n),r.prototype.push=function(s){var a;for(this.buffer+=s,a=this.buffer.indexOf(`
`);a>-1;a=this.buffer.indexOf(`
`))this.trigger("data",this.buffer.substring(0,a)),this.buffer=this.buffer.substring(a+1)},r}(w),N=function(n,r,s){return n(s={path:r,exports:{},require:function(a,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(e==null&&s.path)}},s.exports),s.exports}(function(n){function r(){return n.exports=r=Object.assign||function(s){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t])}return s},r.apply(this,arguments)}n.exports=r}),k="	",O=function(n){var r=/([0-9.]*)?@?([0-9.]*)?/.exec(n||""),s={};return r[1]&&(s.length=parseInt(r[1],10)),r[2]&&(s.offset=parseInt(r[2],10)),s},h=function(n){for(var r,s=n.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),a={},e=s.length;e--;)s[e]!==""&&((r=/([^=]*)=(.*)/.exec(s[e]).slice(1))[0]=r[0].replace(/^\s+|\s+$/g,""),r[1]=r[1].replace(/^\s+|\s+$/g,""),r[1]=r[1].replace(/^['"](.*)['"]$/g,"$1"),a[r[0]]=r[1]);return a},L=function(n){function r(){var a;return(a=n.call(this)||this).customParsers=[],a.tagMappers=[],a}C(r,n);var s=r.prototype;return s.push=function(a){var e,t,c=this;(a=a.trim()).length!==0&&(a[0]==="#"?this.tagMappers.reduce(function(u,o){var y=o(a);return y===a?u:u.concat([y])},[a]).forEach(function(u){for(var o=0;o<c.customParsers.length;o++)if(c.customParsers[o].call(c,u))return;if(u.indexOf("#EXT")===0)if(u=u.replace("\r",""),e=/^#EXTM3U/.exec(u))c.trigger("data",{type:"tag",tagType:"m3u"});else{if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(u))return t={type:"tag",tagType:"inf"},e[1]&&(t.duration=parseFloat(e[1])),e[2]&&(t.title=e[2]),void c.trigger("data",t);if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(u))return t={type:"tag",tagType:"targetduration"},e[1]&&(t.duration=parseInt(e[1],10)),void c.trigger("data",t);if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(u))return t={type:"tag",tagType:"version"},e[1]&&(t.version=parseInt(e[1],10)),void c.trigger("data",t);if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(u))return t={type:"tag",tagType:"media-sequence"},e[1]&&(t.number=parseInt(e[1],10)),void c.trigger("data",t);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(u))return t={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(t.number=parseInt(e[1],10)),void c.trigger("data",t);if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(u))return t={type:"tag",tagType:"playlist-type"},e[1]&&(t.playlistType=e[1]),void c.trigger("data",t);if(e=/^#EXT-X-BYTERANGE:?(.*)?$/.exec(u))return t=N(O(e[1]),{type:"tag",tagType:"byterange"}),void c.trigger("data",t);if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(u))return t={type:"tag",tagType:"allow-cache"},e[1]&&(t.allowed=!/NO/.test(e[1])),void c.trigger("data",t);if(e=/^#EXT-X-MAP:?(.*)$/.exec(u)){if(t={type:"tag",tagType:"map"},e[1]){var y=h(e[1]);y.URI&&(t.uri=y.URI),y.BYTERANGE&&(t.byterange=O(y.BYTERANGE))}c.trigger("data",t)}else if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(u)){if(t={type:"tag",tagType:"stream-inf"},e[1]){if(t.attributes=h(e[1]),t.attributes.RESOLUTION){var A=t.attributes.RESOLUTION.split("x"),P={};A[0]&&(P.width=parseInt(A[0],10)),A[1]&&(P.height=parseInt(A[1],10)),t.attributes.RESOLUTION=P}t.attributes.BANDWIDTH&&(t.attributes.BANDWIDTH=parseInt(t.attributes.BANDWIDTH,10)),t.attributes["PROGRAM-ID"]&&(t.attributes["PROGRAM-ID"]=parseInt(t.attributes["PROGRAM-ID"],10))}c.trigger("data",t)}else{if(e=/^#EXT-X-MEDIA:?(.*)$/.exec(u))return t={type:"tag",tagType:"media"},e[1]&&(t.attributes=h(e[1])),void c.trigger("data",t);if(e=/^#EXT-X-ENDLIST/.exec(u))c.trigger("data",{type:"tag",tagType:"endlist"});else if(e=/^#EXT-X-DISCONTINUITY/.exec(u))c.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(u))return t={type:"tag",tagType:"program-date-time"},e[1]&&(t.dateTimeString=e[1],t.dateTimeObject=new Date(e[1])),void c.trigger("data",t);if(e=/^#EXT-X-KEY:?(.*)$/.exec(u))return t={type:"tag",tagType:"key"},e[1]&&(t.attributes=h(e[1]),t.attributes.IV&&(t.attributes.IV.substring(0,2).toLowerCase()==="0x"&&(t.attributes.IV=t.attributes.IV.substring(2)),t.attributes.IV=t.attributes.IV.match(/.{8}/g),t.attributes.IV[0]=parseInt(t.attributes.IV[0],16),t.attributes.IV[1]=parseInt(t.attributes.IV[1],16),t.attributes.IV[2]=parseInt(t.attributes.IV[2],16),t.attributes.IV[3]=parseInt(t.attributes.IV[3],16),t.attributes.IV=new Uint32Array(t.attributes.IV))),void c.trigger("data",t);if(e=/^#EXT-X-START:?(.*)$/.exec(u))return t={type:"tag",tagType:"start"},e[1]&&(t.attributes=h(e[1]),t.attributes["TIME-OFFSET"]=parseFloat(t.attributes["TIME-OFFSET"]),t.attributes.PRECISE=/YES/.test(t.attributes.PRECISE)),void c.trigger("data",t);if(e=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(u))return t={type:"tag",tagType:"cue-out-cont"},e[1]?t.data=e[1]:t.data="",void c.trigger("data",t);if(e=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(u))return t={type:"tag",tagType:"cue-out"},e[1]?t.data=e[1]:t.data="",void c.trigger("data",t);if(e=/^#EXT-X-CUE-IN:?(.*)?$/.exec(u))return t={type:"tag",tagType:"cue-in"},e[1]?t.data=e[1]:t.data="",void c.trigger("data",t);if((e=/^#EXT-X-SKIP:(.*)$/.exec(u))&&e[1])return(t={type:"tag",tagType:"skip"}).attributes=h(e[1]),t.attributes.hasOwnProperty("SKIPPED-SEGMENTS")&&(t.attributes["SKIPPED-SEGMENTS"]=parseInt(t.attributes["SKIPPED-SEGMENTS"],10)),t.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES")&&(t.attributes["RECENTLY-REMOVED-DATERANGES"]=t.attributes["RECENTLY-REMOVED-DATERANGES"].split(k)),void c.trigger("data",t);if((e=/^#EXT-X-PART:(.*)$/.exec(u))&&e[1])return(t={type:"tag",tagType:"part"}).attributes=h(e[1]),["DURATION"].forEach(function(f){t.attributes.hasOwnProperty(f)&&(t.attributes[f]=parseFloat(t.attributes[f]))}),["INDEPENDENT","GAP"].forEach(function(f){t.attributes.hasOwnProperty(f)&&(t.attributes[f]=/YES/.test(t.attributes[f]))}),t.attributes.hasOwnProperty("BYTERANGE")&&(t.attributes.byterange=O(t.attributes.BYTERANGE)),void c.trigger("data",t);if((e=/^#EXT-X-SERVER-CONTROL:(.*)$/.exec(u))&&e[1])return(t={type:"tag",tagType:"server-control"}).attributes=h(e[1]),["CAN-SKIP-UNTIL","PART-HOLD-BACK","HOLD-BACK"].forEach(function(f){t.attributes.hasOwnProperty(f)&&(t.attributes[f]=parseFloat(t.attributes[f]))}),["CAN-SKIP-DATERANGES","CAN-BLOCK-RELOAD"].forEach(function(f){t.attributes.hasOwnProperty(f)&&(t.attributes[f]=/YES/.test(t.attributes[f]))}),void c.trigger("data",t);if((e=/^#EXT-X-PART-INF:(.*)$/.exec(u))&&e[1])return(t={type:"tag",tagType:"part-inf"}).attributes=h(e[1]),["PART-TARGET"].forEach(function(f){t.attributes.hasOwnProperty(f)&&(t.attributes[f]=parseFloat(t.attributes[f]))}),void c.trigger("data",t);if((e=/^#EXT-X-PRELOAD-HINT:(.*)$/.exec(u))&&e[1])return(t={type:"tag",tagType:"preload-hint"}).attributes=h(e[1]),["BYTERANGE-START","BYTERANGE-LENGTH"].forEach(function(f){if(t.attributes.hasOwnProperty(f)){t.attributes[f]=parseInt(t.attributes[f],10);var X=f==="BYTERANGE-LENGTH"?"length":"offset";t.attributes.byterange=t.attributes.byterange||{},t.attributes.byterange[X]=t.attributes[f],delete t.attributes[f]}}),void c.trigger("data",t);if((e=/^#EXT-X-RENDITION-REPORT:(.*)$/.exec(u))&&e[1])return(t={type:"tag",tagType:"rendition-report"}).attributes=h(e[1]),["LAST-MSN","LAST-PART"].forEach(function(f){t.attributes.hasOwnProperty(f)&&(t.attributes[f]=parseInt(t.attributes[f],10))}),void c.trigger("data",t);c.trigger("data",{type:"tag",data:u.slice(4)})}}}else c.trigger("data",{type:"comment",text:u.slice(1)})}):this.trigger("data",{type:"uri",uri:a}))},s.addParser=function(a){var e=this,t=a.expression,c=a.customType,u=a.dataParser,o=a.segment;typeof u!="function"&&(u=function(y){return y}),this.customParsers.push(function(y){if(t.exec(y))return e.trigger("data",{type:"custom",data:u(y),customType:c,segment:o}),!0})},s.addTagMapper=function(a){var e=a.expression,t=a.map;this.tagMappers.push(function(c){return e.test(c)?t(c):c})},r}(w),x=function(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n};function S(n){for(var r,s=(r=n,T.default.atob?T.default.atob(r):Buffer.from(r,"base64").toString("binary")),a=new Uint8Array(s.length),e=0;e<s.length;e++)a[e]=s.charCodeAt(e);return a}var l=function(n){var r={};return Object.keys(n).forEach(function(s){var a;r[a=s,a.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})]=n[s]}),r},p=function(n){var r=n.serverControl,s=n.targetDuration,a=n.partTargetDuration;if(r){var e="#EXT-X-SERVER-CONTROL",t="holdBack",c="partHoldBack",u=s&&3*s,o=a&&2*a;s&&!r.hasOwnProperty(t)&&(r[t]=u,this.trigger("info",{message:e+" defaulting HOLD-BACK to targetDuration * 3 ("+u+")."})),u&&r[t]<u&&(this.trigger("warn",{message:e+" clamping HOLD-BACK ("+r[t]+") to targetDuration * 3 ("+u+")"}),r[t]=u),a&&!r.hasOwnProperty(c)&&(r[c]=3*a,this.trigger("info",{message:e+" defaulting PART-HOLD-BACK to partTargetDuration * 3 ("+r[c]+")."})),a&&r[c]<o&&(this.trigger("warn",{message:e+" clamping PART-HOLD-BACK ("+r[c]+") to partTargetDuration * 2 ("+o+")."}),r[c]=o)}},d=function(n){function r(){var a;(a=n.call(this)||this).lineStream=new I,a.parseStream=new L,a.lineStream.pipe(a.parseStream);var e,t,c=x(a),u=[],o={},y=!1,A=function(){},P={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},f=0;a.manifest={allowCache:!0,discontinuityStarts:[],segments:[]};var X=0,D=0;return a.on("end",function(){o.uri||!o.parts&&!o.preloadHints||(!o.map&&e&&(o.map=e),!o.key&&t&&(o.key=t),o.timeline||typeof f!="number"||(o.timeline=f),a.manifest.preloadSegment=o)}),a.parseStream.on("data",function(i){var H,v;({tag:function(){({version:function(){i.version&&(this.manifest.version=i.version)},"allow-cache":function(){this.manifest.allowCache=i.allowed,"allowed"in i||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var m={};"length"in i&&(o.byterange=m,m.length=i.length,"offset"in i||(i.offset=X)),"offset"in i&&(o.byterange=m,m.offset=i.offset),X=m.offset+m.length},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),i.duration>0&&(o.duration=i.duration),i.duration===0&&(o.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=u},key:function(){if(i.attributes)if(i.attributes.METHOD!=="NONE")if(i.attributes.URI){if(i.attributes.KEYFORMAT==="com.apple.streamingkeydelivery")return this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.apple.fps.1_0"]={attributes:i.attributes});if(i.attributes.KEYFORMAT==="com.microsoft.playready")return this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.microsoft.playready"]={uri:i.attributes.URI});if(i.attributes.KEYFORMAT==="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed")return["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].indexOf(i.attributes.METHOD)===-1?void this.trigger("warn",{message:"invalid key method provided for Widevine"}):(i.attributes.METHOD==="SAMPLE-AES-CENC"&&this.trigger("warn",{message:"SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"}),i.attributes.URI.substring(0,23)!=="data:text/plain;base64,"?void this.trigger("warn",{message:"invalid key URI provided for Widevine"}):i.attributes.KEYID&&i.attributes.KEYID.substring(0,2)==="0x"?(this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.widevine.alpha"]={attributes:{schemeIdUri:i.attributes.KEYFORMAT,keyId:i.attributes.KEYID.substring(2)},pssh:S(i.attributes.URI.split(",")[1])})):void this.trigger("warn",{message:"invalid key ID provided for Widevine"}));i.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),t={method:i.attributes.METHOD||"AES-128",uri:i.attributes.URI},i.attributes.IV!==void 0&&(t.iv=i.attributes.IV)}else this.trigger("warn",{message:"ignoring key declaration without URI"});else t=null;else this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(i.number)?this.manifest.mediaSequence=i.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+i.number})},"discontinuity-sequence":function(){isFinite(i.number)?(this.manifest.discontinuitySequence=i.number,f=i.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+i.number})},"playlist-type":function(){/VOD|EVENT/.test(i.playlistType)?this.manifest.playlistType=i.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+i.playlist})},map:function(){e={},i.uri&&(e.uri=i.uri),i.byterange&&(e.byterange=i.byterange),t&&(e.key=t)},"stream-inf":function(){this.manifest.playlists=u,this.manifest.mediaGroups=this.manifest.mediaGroups||P,i.attributes?(o.attributes||(o.attributes={}),N(o.attributes,i.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||P,i.attributes&&i.attributes.TYPE&&i.attributes["GROUP-ID"]&&i.attributes.NAME){var m=this.manifest.mediaGroups[i.attributes.TYPE];m[i.attributes["GROUP-ID"]]=m[i.attributes["GROUP-ID"]]||{},H=m[i.attributes["GROUP-ID"]],(v={default:/yes/i.test(i.attributes.DEFAULT)}).default?v.autoselect=!0:v.autoselect=/yes/i.test(i.attributes.AUTOSELECT),i.attributes.LANGUAGE&&(v.language=i.attributes.LANGUAGE),i.attributes.URI&&(v.uri=i.attributes.URI),i.attributes["INSTREAM-ID"]&&(v.instreamId=i.attributes["INSTREAM-ID"]),i.attributes.CHARACTERISTICS&&(v.characteristics=i.attributes.CHARACTERISTICS),i.attributes.FORCED&&(v.forced=/yes/i.test(i.attributes.FORCED)),H[i.attributes.NAME]=v}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){f+=1,o.discontinuity=!0,this.manifest.discontinuityStarts.push(u.length)},"program-date-time":function(){this.manifest.dateTimeString===void 0&&(this.manifest.dateTimeString=i.dateTimeString,this.manifest.dateTimeObject=i.dateTimeObject),o.dateTimeString=i.dateTimeString,o.dateTimeObject=i.dateTimeObject},targetduration:function(){!isFinite(i.duration)||i.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+i.duration}):(this.manifest.targetDuration=i.duration,p.call(this,this.manifest))},start:function(){i.attributes&&!isNaN(i.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:i.attributes["TIME-OFFSET"],precise:i.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){o.cueOut=i.data},"cue-out-cont":function(){o.cueOutCont=i.data},"cue-in":function(){o.cueIn=i.data},skip:function(){this.manifest.skip=l(i.attributes),this.warnOnMissingAttributes_("#EXT-X-SKIP",i.attributes,["SKIPPED-SEGMENTS"])},part:function(){var m=this;y=!0;var b=this.manifest.segments.length,E=l(i.attributes);o.parts=o.parts||[],o.parts.push(E),E.byterange&&(E.byterange.hasOwnProperty("offset")||(E.byterange.offset=D),D=E.byterange.offset+E.byterange.length);var U=o.parts.length-1;this.warnOnMissingAttributes_("#EXT-X-PART #"+U+" for segment #"+b,i.attributes,["URI","DURATION"]),this.manifest.renditionReports&&this.manifest.renditionReports.forEach(function(M,G){M.hasOwnProperty("lastPart")||m.trigger("warn",{message:"#EXT-X-RENDITION-REPORT #"+G+" lacks required attribute(s): LAST-PART"})})},"server-control":function(){var m=this.manifest.serverControl=l(i.attributes);m.hasOwnProperty("canBlockReload")||(m.canBlockReload=!1,this.trigger("info",{message:"#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"})),p.call(this,this.manifest),m.canSkipDateranges&&!m.hasOwnProperty("canSkipUntil")&&this.trigger("warn",{message:"#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"})},"preload-hint":function(){var m=this.manifest.segments.length,b=l(i.attributes),E=b.type&&b.type==="PART";o.preloadHints=o.preloadHints||[],o.preloadHints.push(b),b.byterange&&(b.byterange.hasOwnProperty("offset")||(b.byterange.offset=E?D:0,E&&(D=b.byterange.offset+b.byterange.length)));var U=o.preloadHints.length-1;if(this.warnOnMissingAttributes_("#EXT-X-PRELOAD-HINT #"+U+" for segment #"+m,i.attributes,["TYPE","URI"]),b.type)for(var M=0;M<o.preloadHints.length-1;M++){var G=o.preloadHints[M];G.type&&G.type===b.type&&this.trigger("warn",{message:"#EXT-X-PRELOAD-HINT #"+U+" for segment #"+m+" has the same TYPE "+b.type+" as preload hint #"+M})}},"rendition-report":function(){var m=l(i.attributes);this.manifest.renditionReports=this.manifest.renditionReports||[],this.manifest.renditionReports.push(m);var b=this.manifest.renditionReports.length-1,E=["LAST-MSN","URI"];y&&E.push("LAST-PART"),this.warnOnMissingAttributes_("#EXT-X-RENDITION-REPORT #"+b,i.attributes,E)},"part-inf":function(){this.manifest.partInf=l(i.attributes),this.warnOnMissingAttributes_("#EXT-X-PART-INF",i.attributes,["PART-TARGET"]),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),p.call(this,this.manifest)}}[i.tagType]||A).call(c)},uri:function(){o.uri=i.uri,u.push(o),this.manifest.targetDuration&&!("duration"in o)&&(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),o.duration=this.manifest.targetDuration),t&&(o.key=t),o.timeline=f,e&&(o.map=e),D=0,o={}},comment:function(){},custom:function(){i.segment?(o.custom=o.custom||{},o.custom[i.customType]=i.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[i.customType]=i.data)}})[i.type].call(c)}),a}C(r,n);var s=r.prototype;return s.warnOnMissingAttributes_=function(a,e,t){var c=[];t.forEach(function(u){e.hasOwnProperty(u)||c.push(u)}),c.length&&this.trigger("warn",{message:a+" lacks required attribute(s): "+c.join(", ")})},s.push=function(a){this.lineStream.push(a)},s.end=function(){this.lineStream.push(`
`),this.trigger("end")},s.addParser=function(a){this.parseStream.addParser(a)},s.addTagMapper=function(a){this.parseStream.addTagMapper(a)},r}(w);g.LineStream=I,g.ParseStream=L,g.Parser=d,Object.defineProperty(g,"__esModule",{value:!0})}),function(){"use strict";const g={addStyle(l){let p=document.createElement("style");p.innerHTML=l,document.documentElement.appendChild(p)},async getValue(l,p){return await(typeof GM_getValue=="function"?GM_getValue:GM.getValue)(l,p)},async setValue(l,p){return await(typeof GM_setValue=="function"?GM_setValue:GM.setValue)(l,p)},async deleteValue(l){return await(typeof GM_deleteValue=="function"?GM_deleteValue:GM.deleteValue)(l)},openInTab(l,p=!1){return(typeof GM_openInTab=="function"?GM_openInTab:GM.openInTab)(l,p)},xmlHttpRequest(l){return(typeof GM_xmlhttpRequest=="function"?GM_xmlhttpRequest:GM.xmlHttpRequest)(l)},download(l){return this.openInTab(l.url)},copyText(l){p(l);function p(d){var n=document.createElement("textarea");n.textContent=d,document.body.appendChild(n),n.select(),document.execCommand("copy"),n.blur(),document.body.removeChild(n)}},message(l,p=5e3){const d="f8243rd238-gm-message-panel";let n=document.querySelector(`#${d}`);n||(n=document.createElement("div"),n.id=d,n.style=`
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: end;
                    z-index: 999999999999999;
                `,(document.body||document.documentElement).appendChild(n));let r=document.createElement("div");r.innerText=l,r.style=`
                padding: 3px 8px;
                border-radius: 5px;
                background: black;
                box-shadow: #000 1px 2px 5px;
                margin-top: 10px;
                font-size: small;
                color: #fff;
                text-align: right;
            `,n.appendChild(r),setTimeout(()=>{n.removeChild(r)},p)}};if(location.host==="tools.thatwind.com"||location.host==="localhost:3000"){g.addStyle("#userscript-tip{display:none !important;}");const l=unsafeWindow.fetch;unsafeWindow.fetch=async function(...p){try{let d=await l(...p);if(d.status!==200)throw new Error(d.status);return d}catch(d){if(p.length==1)return console.log(`\u8BF7\u6C42\u4EE3\u7406\uFF1A${p[0]}`),await new Promise((n,r)=>{let s=new URLSearchParams(location.hash.slice(1)).get("referer"),a={};s&&(s=new URL(s),a={origin:s.origin,referer:s.href}),g.xmlHttpRequest({method:"GET",url:p[0],responseType:"arraybuffer",headers:a,onload(e){n({status:e.status,headers:new Headers(e.responseHeaders.split(`
`).filter(t=>t).map(t=>t.split(/:\s*/)).reduce((t,[c,u])=>(t[c]=u,t),{})),async text(){return e.responseText},async arrayBuffer(){return e.response}})},onerror(){r(new Error)}})});throw d}};return}window.addEventListener("message",async l=>{if(l.data==="3j4t9uj349-gm-get-title"){let p=`top-title-${Date.now()}`;await g.setValue(p,document.title),l.source.postMessage(`3j4t9uj349-gm-top-title-name:${p}`,"*")}});function R(){return new Promise(l=>{window.addEventListener("message",async function p(d){if(typeof d.data=="string"&&d.data.startsWith("3j4t9uj349-gm-top-title-name:")){let n=d.data.slice(29);await new Promise(r=>setTimeout(r,5)),l(await g.getValue(n)),g.deleteValue(n),window.removeEventListener("message",p)}}),window.top.postMessage("3j4t9uj349-gm-get-title","*")})}{let d=function(r){if(r=new URL(r,location.href),r.pathname.indexOf(".m3u8")!=-1||r.pathname.indexOf(".m3u")!=-1)return!0},n=function(r){if(r.trim().startsWith("#EXTM3U"))return!0};if(location.href.match(/^.*?socolive.*?$/)){var V=unsafeWindow.fetch;unsafeWindow.fetch=new Proxy(V,{apply:function(r,s,a){console.log(r,s,a);let e=!0;try{a[0].indexOf(".flv")!=-1&&x({url:a[0],content:a[0]})}catch(t){console.log(t)}return e?Reflect.apply(r,s,a):Promise.resolve(new Response)}})}const l=unsafeWindow.Response.prototype.text;unsafeWindow.Response.prototype.text=function(){return new Promise((r,s)=>{l.call(this).then(a=>{r(a),n(a)&&(GM_xmlhttpRequest({method:"POST",url:"https://paste.centos.org/",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"name=&title=&lang=text&code="+encodeURIComponent(a)+"&expire=120&submit=submit",onload:function(e){S({type:"M3U8",url:new URL(e.responseText.match(/<a class="control" href="([^"]*?)">View Raw<\/a>/)[1]),duration:"null"})}}),x({url:this.url,content:a})),d(this.url)&&x({url:this.url})}).catch(s)})};const p=unsafeWindow.XMLHttpRequest.prototype.open;unsafeWindow.XMLHttpRequest.prototype.open=function(...r){return this.addEventListener("load",()=>{try{let s=this.responseText;n(s)&&(GM_xmlhttpRequest({method:"POST",url:"https://paste.centos.org/",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"name=&title=&lang=text&code="+encodeURIComponent(s)+"&expire=120&submit=submit",onload:function(a){S({type:"M3U8",url:new URL(a.responseText.match(/<a class="control" href="([^"]*?)">View Raw<\/a>/)[1]),duration:"null"})}}),x({url:r[1],content:s}))}catch{}}),d(r[1])&&x({url:r[1]}),p.apply(this,r)},setInterval(L,1e3)}const T=document.createElement("div");T.style=`
        position: fixed;
        z-index: 9999999999999999;
        opacity: 0.9;
    `,T.style.display="none",document.documentElement.appendChild(T);const C=T.attachShadow({mode:"open"}),w=document.createElement("div");C.appendChild(w);const I=document.createElement("div");I.style=`
        text-align: right;
    `,I.innerHTML=`
        <span
            class="number-indicator"
            data-number="0"
            style="
                display: inline-flex;
                width: 20px;
                height: 20px;
                background: black;
                padding: 10px;
                border-radius: 100px;
                margin-bottom: 5px;
                cursor: pointer;
            "
        >
            <svg
            style="
                filter: invert(1);
            "
            version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 585.913 585.913" style="enable-background:new 0 0 585.913 585.913;" xml:space="preserve">
                <g>
                    <path d="M11.173,46.2v492.311l346.22,47.402V535.33c0.776,0.058,1.542,0.109,2.329,0.109h177.39
                    c20.75,0,37.627-16.883,37.627-37.627V86.597c0-20.743-16.877-37.628-37.627-37.628h-177.39c-0.781,0-1.553,0.077-2.329,0.124V0
                    L11.173,46.2z M110.382,345.888l-1.37-38.273c-0.416-11.998-0.822-26.514-0.822-41.023l-0.415,0.01
                    c-2.867,12.767-6.678,26.956-10.187,38.567l-10.961,38.211l-15.567-0.582l-9.239-37.598c-2.801-11.269-5.709-24.905-7.725-37.361
                    l-0.25,0.005c-0.503,12.914-0.879,27.657-1.503,39.552L50.84,343.6l-17.385-0.672l5.252-94.208l25.415-0.996l8.499,32.064
                    c2.724,11.224,5.467,23.364,7.428,34.819h0.389c2.503-11.291,5.535-24.221,8.454-35.168l9.643-33.042l27.436-1.071l5.237,101.377
                    L110.382,345.888z M172.479,349.999c-12.569-0.504-23.013-4.272-28.539-8.142l4.504-17.249c3.939,2.226,13.1,6.445,22.373,6.687
                    c12.009,0.32,18.174-5.497,18.174-13.218c0-10.068-9.838-14.683-19.979-14.74l-9.253-0.052v-16.777l8.801-0.066
                    c7.708-0.208,17.646-3.262,17.646-11.905c0-6.121-4.914-10.562-14.635-10.331c-7.95,0.189-16.245,3.914-20.213,6.446l-4.52-16.693
                    c5.693-4.008,17.224-8.11,29.883-8.588c21.457-0.795,33.643,10.407,33.643,24.625c0,11.029-6.197,19.691-18.738,24.161v0.314
                    c12.229,2.216,22.266,11.663,22.266,25.281C213.89,338.188,197.866,351.001,172.479,349.999z M331.104,302.986
                    c0,36.126-19.55,52.541-51.193,51.286c-29.318-1.166-46.019-17.103-46.019-52.044v-61.104l25.711-1.006v64.201
                    c0,19.191,7.562,29.146,21.179,29.502c14.234,0.368,22.189-8.976,22.189-29.26v-66.125l28.122-1.097v65.647H331.104z
                    M359.723,70.476h177.39c8.893,0,16.125,7.236,16.125,16.126v411.22c0,8.888-7.232,16.127-16.125,16.127h-177.39
                    c-0.792,0-1.563-0.116-2.329-0.232V380.782c17.685,14.961,40.504,24.032,65.434,24.032c56.037,0,101.607-45.576,101.607-101.599
                    c0-56.029-45.581-101.603-101.607-101.603c-24.93,0-47.749,9.069-65.434,24.035V70.728
                    C358.159,70.599,358.926,70.476,359.723,70.476z M390.873,364.519V245.241c0-1.07,0.615-2.071,1.586-2.521
                    c0.981-0.483,2.13-0.365,2.981,0.307l93.393,59.623c0.666,0.556,1.065,1.376,1.065,2.215c0,0.841-0.399,1.67-1.065,2.215
                    l-93.397,59.628c-0.509,0.4-1.114,0.61-1.743,0.61l-1.233-0.289C391.488,366.588,390.873,365.585,390.873,364.519z" />
                </g>
            </svg>
        </span>
    `,w.appendChild(I);const N=document.createElement("style");N.innerHTML=`
        .number-indicator{
            position:relative;
        }

        .number-indicator::after{
            content: attr(data-number);
            position: absolute;
            bottom: 0;
            right: 0;
            color: #40a9ff;
            font-size: 14px;
            font-weight: bold;
            background: #000;
            border-radius: 10px;
            padding: 3px 5px;
        }

        .copy-link:link{
            text-decoration: none;
        }

        .copy-link:hover{
            text-decoration: underline;
        }

        .download-btn:hover{
            text-decoration: underline;
        }
        .download-btn:active{
            opacity: 0.9;
        }

        .m3u8-item{
            color: white;
            margin-bottom: 5px;
            display: flex;
            flex-direction: row;
            align-items: baseline;
            background: black;
            padding: 3px 10px;
            border-radius: 3px;
            font-size: 12px;
            user-select: none;
        }

        [data-shown="false"] {
            opacity: 0.8;
            zoom: 0.8;
        }

        [data-shown="false"]:hover{
            opacity: 1;
        }

        [data-shown="false"] .m3u8-item{
            display: none;
        }

    `,w.appendChild(N);const k=I.querySelector(".number-indicator");(async function(){let l=await GM_getValue("shown",!0);w.setAttribute("data-shown",l);let p=await GM_getValue("x",10),d=await GM_getValue("y",10);p=Math.min(innerWidth-50,p),d=Math.min(innerHeight-50,d),p<0&&(p=0),d<0&&(d=0),T.style.top=`${d}px`,T.style.right=`${p}px`,k.addEventListener("mousedown",n=>{let r=n.pageX,s=n.pageY,a=!1,e=c=>{let u=c.pageX-r,o=c.pageY-s;(a||Math.abs(u)+Math.abs(o)>5)&&(a=!0,T.style.top=`${d+o}px`,T.style.right=`${p-u}px`)},t=c=>{let u=c.pageX-r,o=c.pageY-s;a?(p-=u,d+=o,g.setValue("x",p),g.setValue("y",d)):(l=!l,g.setValue("shown",l),w.setAttribute("data-shown",l)),removeEventListener("mousemove",e),removeEventListener("mouseup",t)};addEventListener("mousemove",e),addEventListener("mouseup",t)})})();let O=0,h=[];window.top!==window.self&&S({type:"iframe",url:new URL(location.href),duration:"unknown",async download(){g.openInTab(`https://tools.thatwind.com/tool/m3u8downloader#${new URLSearchParams({m3u8:url.href,referer:location.href,filename:await R()||""})}`)}});function L(){for(let l of Array.from(document.querySelectorAll("video")))if(l.duration&&l.src&&l.src.startsWith("http")&&!h.includes(l.src)){const p=l.src;h.push(p),S({type:"video",url:new URL(p),duration:`${Math.ceil(l.duration*10/60)/10} mins`,download(){const d={url:p,name:(()=>{let n=new URL(p).pathname.split("/").slice(-1)[0];return/\.\w+$/.test(n)||(n.match(/^\s*$/)&&(n=Date.now()),n=n+".mp4"),n})(),headers:{origin:location.origin},onerror(n){g.openInTab(p)}};g.download(d)}})}}async function x({url:l,content:p}){if(l=new URL(l),h.includes(l.href))return;p=p||await(await fetch(l)).text();const d=new m3u8Parser.Parser;d.push(p),d.end();const n=d.manifest;if(n.segments){let r=0;n.segments.forEach(s=>{r+=s.duration}),n.duration=r}S({type:"m3u8",url:l,duration:n.duration?`${Math.ceil(n.duration*10/60)/10} mins`:n.playlists?`\u591A(Multi)(${n.playlists.length})`:"\u672A\u77E5(unknown)",async download(){g.openInTab(`https://tools.thatwind.com/tool/m3u8downloader#${new URLSearchParams({m3u8:l.href,referer:location.href,filename:await R()||""})}`)}})}async function S({type:l,url:p,duration:d,download:n}){let r=document.createElement("div");r.className="m3u8-item",r.innerHTML=`
            <span>${l}</span>
            <a class="copy-link" href="${p.href}" title="${p}" style="
                color: white;
                max-width: 200px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-left: 10px;
                cursor:pointer;"
            target="_blank" >${p.pathname}</a>
            <span
                style="
                    margin-left: 10px;
                    flex-grow: 1;
                "
            >${d}</span>
            <span
                class="download-btn"
                style="
                    margin-left: 10px;
                    cursor: pointer;
            ">\u2BC6</span>
        `,r.querySelector(".copy-link").addEventListener("click",()=>{g.copyText(p.href),g.message("\u5DF2\u590D\u5236\u94FE\u63A5 (link copied)",2e3)}),r.querySelector(".download-btn").addEventListener("click",n),T.style.display="block",O++,h.push(p.href),I.querySelector(".number-indicator").setAttribute("data-number",O),w.appendChild(r)}}();
