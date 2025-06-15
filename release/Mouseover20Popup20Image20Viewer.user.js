// ==UserScript==
// @name        Mouseover Popup Image Viewer
// @namespace   https://github.com/tophf
//
// @include     *
// @run-at      document-start
//
// @grant       GM_addElement
// @grant       GM_download
// @grant       GM_getValue
// @grant       GM_getValues
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_setClipboard
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
//
// @grant       GM.getValue
// @grant       GM.openInTab
// @grant       GM.registerMenuCommand
// @grant       GM.unregisterMenuCommand
// @grant       GM.setClipboard
// @grant       GM.setValue
// @grant       GM.xmlHttpRequest
//
// @version     1.4.7
// @author      tophf
//
// @original-version 2017.9.29
// @original-author  kuehlschrank
//
// @connect     *
// CSP check:
// @connect     self
// rule installer in config dialog:
// @connect     github.com
// big/trusted hostings for the built-in rules with "q":
// @connect     deviantart.com
// @connect     facebook.com
// @connect     fbcdn.com
// @connect     flickr.com
// @connect     gfycat.com
// @connect     googleusercontent.com
// @connect     gyazo.com
// @connect     imgur.com
// @connect     instagr.am
// @connect     instagram.com
// @connect     prnt.sc
// @connect     prntscr.com
// @connect     user-images.githubusercontent.com
//
// @supportURL  https://github.com/tophf/mpiv/issues
// @icon        https://raw.githubusercontent.com/tophf/mpiv/master/icon.png
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Mouseover20Popup20Image20Viewer.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Mouseover20Popup20Image20Viewer.meta.js
// ==/UserScript==
"use strict";let cfg,ai={rule:{}},elSetup,nonce;const doc=document,hostname=location.hostname,dotDomain="."+hostname,isFF=CSS.supports("-moz-appearance","none"),AudioContext=window.AudioContext||function(){},{from:arrayFrom,isArray}=Array,PREFIX="mpiv-",NOAA_ATTR="data-no-aa",STATUS_ATTR=`${PREFIX}status`,MSG=Object.assign({},...["getViewSize","viewSize"].map(e=>({[e]:`${PREFIX}${e}`}))),WHEEL_EVENT="onwheel"in doc?"wheel":"mousewheel",SETTLE_TIME=50,RX_HAS_CODE=/(^|[^-\w])return[\W\s]/,RX_EVAL_BLOCKED=/'Trusted(Script| Type)'|unsafe-eval/,RX_MEDIA_URL=/^(?!data:)[^?#]+?\.(avif|bmp|jpe?g?|gif|mp4|png|svgz?|web[mp])($|[?#])/i,BLANK_PIXEL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ZOOM_MAX=16,SYM_U=Symbol("u"),FN_ARGS={s:["m","node","rule"],c:["text","doc","node","rule"],q:["text","doc","node","rule"],g:["text","doc","url","m","rule","node","cb"]};let trustedHTML,trustedScript;(typeof GM>"u"||!GM.xmlHttpRequest)&&(this.GM={__proto__:null,info:GM_info}),GM.getValue||(GM.getValue=GM_getValue),GM.setValue||(GM.setValue=GM_setValue),GM.openInTab||(GM.openInTab=GM_openInTab),!GM.registerMenuCommand&&typeof GM_registerMenuCommand=="function"&&(GM.registerMenuCommand=GM_registerMenuCommand),!GM.unregisterMenuCommand&&typeof GM_unregisterMenuCommand=="function"&&(GM.unregisterMenuCommand=GM_unregisterMenuCommand),GM.setClipboard||(GM.setClipboard=GM_setClipboard),GM.xmlHttpRequest||(GM.xmlHttpRequest=GM_xmlhttpRequest);const App={isEnabled:!0,isImageTab:!1,globalStyle:"",popupStyleBase:"",tabfix:/\.(dumpoir|greatfon|picuki)\.com$/.test(dotDomain),NOP:/\.(facebook|instagram|chrome|google)\.com$/.test(dotDomain)&&(()=>{}),activate(e,t){const{match:i,node:o,rule:n,url:a}=e,l=cfg.start==="auto",c=cfg.videoCtrl&&isVideo(o);elSetup&&console.info({node:o,rule:n,url:a,match:i}),!(l&&c&&!Events.ctrl)&&(ai.node&&App.deactivate(),ai=e,ai.force=Events.ctrl,ai.gNum=0,ai.zooming=cfg.css.includes(`${PREFIX}zooming`),Util.suppressTooltip(),Calc.updateViewSize(),Events.ctrl=!1,Events.toggle(!0),Events.trackMouse(t),ai.force&&(l||cfg.start==="ctrl"||cfg.start==="context")?App.start():(l||cfg.preload)&&!c&&!n.manual?App.belate(l):Status.set("ready"))},belate(e){cfg.preload?(ai.preloadStart=e?now():-1,App.start(),Status.set("+preloading")):ai.timer=setTimeout(App.start,cfg.delay)},checkProgress({start:e}={}){const t=ai.popup;if(!t)return;const i=ai.nwidth=t.naturalWidth||t.videoWidth||ai.popupLoaded&&innerWidth/2,o=ai.nheight=t.naturalHeight||t.videoHeight||ai.popupLoaded&&innerHeight/2;if(o)return App.canCommit(i,o);e&&(clearInterval(ai.timerProgress),ai.timerProgress=setInterval(App.checkProgress,150))},canClose:(e=ai.popup)=>!e||(isVideo(e)?!cfg.keepVids:document.fullscreenElement!==e),canCommit(e,t){if(!ai.force&&ai.rect&&!ai.gItems&&Math.max(e/(ai.rect.width||1),t/(ai.rect.height||1))<cfg.scale)return App.deactivate(),!1;App.stopTimers();let i=ai.preloadStart;if(!(i<0&&!ai.force||!ai.popup))return i>0&&(i+=cfg.delay-now())>0?ai.timer=setTimeout(App.checkProgress,i):(!e||!t)&&(ai.urls||[]).length?App.handleError({type:"error"}):App.commit(),!0},async commit(){const e=ai.popupShown=ai.popup,t=cfg.waitLoad&&isFunction(e.decode);if(t&&(await e.decode(),e!==ai.popup))return;Status.set("-preloading"),App.updateStyles(),Calc.measurePopup(),(!(cfg.zoom==="auto"||App.isImageTab&&cfg.imgtab)||App.toggleZoom({keepScale:!0})===void 0)&&Popup.move(),Bar.updateName(),Bar.updateDetails(),Status.set(!ai.popupLoaded&&"loading"),ai.large=ai.nwidth>e.clientWidth+ai.extras.w||ai.nheight>e.clientHeight+ai.extras.h,ai.large&&(Status.set("+large"),isFF&&e.complete&&!t&&(e.style.backgroundImage=`url('${e.src}')`)),ai.preloadStart<0&&isFunction(e.play)&&e.play().catch(now)},deactivate({wait:e}={}){App.stopTimers(!0),ai.req&&tryCatch(ai.req.abort),ai.tooltip&&(ai.tooltip.node.title=ai.tooltip.text),Status.set(!1),Bar.set(!1),Events.toggle(!1),Popup.destroy(),e&&(App.isEnabled=!1,setTimeout(App.enable,200)),ai={rule:{}}},enable(){App.isEnabled=!0},handleError(e,t=ai.rule){if(t&&t.onerror==="skip")return;if(ai.imageUrl&&!ai.xhr&&!ai.imageUrl.startsWith(location.origin+"/")&&location.protocol==="https:"&&CspSniffer.init){Popup.create(ai.imageUrl,ai.pageUrl,e);return}const i=Util.formatError(e,t);(!t||!ai.urls||!ai.urls.length)&&console.warn(...i),ai.urls&&ai.urls.length?(ai.url=ai.urls.shift(),ai.url?(App.stopTimers(),App.startSingle()):App.deactivate()):ai.node&&(Status.set("error"),Bar.set(i.message,"error"))},onMessage(e){if(typeof e.data=="string"&&e.data===MSG.getViewSize){e.stopImmediatePropagation();for(const t of doc.getElementsByTagName("iframe"))if(t.contentWindow===e.source){const i=Calc.frameSize(t,window).join(":");e.source.postMessage(`${MSG.viewSize}:${i}`,"*");return}}},onMessageChild(e){if(e.source===parent&&typeof e.data=="string"&&e.data.startsWith(MSG.viewSize)){e.stopImmediatePropagation(),removeEventListener("message",App.onMessageChild,!0);const[t,i,o,n]=e.data.split(":").slice(1).map(parseFloat);t&&i&&(ai.view={w:t,h:i,x:o,y:n})}},start(){App.updateStyles(),ai.gallery?App.startGallery():App.startSingle()},startSingle(){if(Status.loading(),ai.force&&ai.preloadStart<0){App.commit();return}ai.imageUrl=null,ai.rule.follow&&!ai.rule.q&&!ai.rule.s?Req.findRedirect():ai.rule.q&&!isArray(ai.urls)?App.startFromQ():(Popup.create(ai.url),Ruler.runC())},async startFromQ(){try{const{responseText:e,doc:t,finalUrl:i}=await Req.getDoc(ai.url),o=Ruler.runQ(e,t,i);if(!o){App.handleError(['The "q" rule did not produce any URL.',`
Remote doc: %o`,t]);return}if(RuleMatcher.isFollowableUrl(o,ai.rule)){const n=RuleMatcher.find(o,ai.node,{noHtml:!0});if(!n||!n.url)throw`Couldn't follow URL: ${o}`;Object.assign(ai,n),App.startSingle()}else Popup.create(o,i),Ruler.runC(e,t)}catch(e){App.handleError(e)}},async startGallery(){Status.loading();try{const e=ai.url,t=await Req.getDoc(ai.rule.s!=="gallery"&&e),i=await new Promise(o=>{const n=ai.gallery(t.responseText,t.doc,t.finalUrl,ai.match,ai.rule,ai.node,o);n!==void 0&&o(n)});if(ai.url!==e)return;if(ai.gNum=i.length,ai.gItems=i.length&&i,ai.gItems){const o=i.index;ai.gIndex=o>=0&&i[o]?+o:Gallery.findIndex(typeof o=="string"?o:ai.url),setTimeout(Gallery.next)}else throw"Empty gallery"}catch(e){App.handleError(e)}},stopTimers(e){for(const t of["timer","timerStatus",e&&"timerBar"])clearTimeout(ai[t]);clearInterval(ai.timerProgress)},toggleZoom({keepScale:e}={}){const t=ai.popup;if(!(!t||!ai.scales||ai.scales.length<2))return ai.zoomed=!ai.zoomed,ai.scale=ai.zoomed&&Calc.scaleForFirstZoom(e)||ai.scales[0],ai.zooming&&t.classList.add(`${PREFIX}zooming`),Popup.move(),Bar.updateDetails(),Status.set(ai.zoomed?"zoom":!1),ai.zoomed},updateStyles(){Util.addStyle("global",(App.globalStyle||createGlobalStyle())+cfg._getCss()),Util.addStyle("rule",ai.rule.css||"")}},Bar={set(e,t,i){let o=ai.bar;if(typeof e!="string"){$remove(o),ai.bar=null;return}const n=!o&&0;o||(o=ai.bar=$new("div",{id:`${PREFIX}bar`,className:`${PREFIX}${t}`})),ai.barText=e,App.updateStyles(),Bar.updateDetails(),Bar.setText(cfg.uiInfoCaption||t==="error"||t==="xhr"?e:""),$dataset(o,"prefix",i),setTimeout(Bar.show,0,n),o.parentNode||(doc.body.appendChild(o),Util.forceLayout(o))},setText(e){/<([a-z][-a-z]*)[^<>]*>[^<>]*<\/\1\s*>/i.test(e)?ai.bar.innerHTML=trustedHTML?trustedHTML(e):e:ai.bar.textContent=e},show(e){const t=ai.bar;!e&&(!cfg.uiInfo||e!==0&&cfg.uiInfoOnce)||ai.barShown||(clearTimeout(ai.timerBar),t.classList.add(PREFIX+"show"),$dataset(t,"force",e===2?"":null),ai.timerBar=!e&&setTimeout(Bar.hide,cfg.uiInfoHide*1e3),ai.barShown=!0)},hide(e){const t=ai.bar;!t||!e&&(!cfg.uiInfo||t.dataset.force)||!ai.barShown||($dataset(t,"force",e===2?"":null),t.classList.remove(PREFIX+"show"),ai.barShown=!1)},updateName(){const{gItems:e,gIndex:t,gNum:i}=ai;if(e){const o=e[t],n=!e.some(l=>l.desc),a=[e.title&&(!t||n)&&!`${o.desc||""}`.includes(e.title)&&e.title||"",o.desc].filter(Boolean).join(" - ");Bar.set(a.trim()||" ","gallery",i>1?`${t+1}/${i}`:null)}else"caption"in ai?Bar.set(ai.caption,"caption"):ai.tooltip?Bar.set(ai.tooltip.text,"tooltip"):Bar.set(" ","info")},updateDetails(){if(!ai.bar)return;const e=ai.rotate,t=ai.nwidth&&`${Math.round(ai.scale*100)}%${ai.flipX||ai.flipY?`, ${ai.flipX?"\u21C6":""}${ai.flipY?"\u21C5":""}`:""}${e?", "+(e>180?e-360:e)+"\xB0":""}, ${ai.nwidth} x ${ai.nheight} px, ${Math.round(100*(ai.nwidth*ai.nheight/1e6))/100} MP, ${Calc.aspectRatio(ai.nwidth,ai.nheight)}`.replace(/\x20/g,"\xA0");(ai.bar.dataset.zoom!==t||!ai.nwidth)&&($dataset(ai.bar,"zoom",t||null),Bar.show())}},Calc={aspectRatio(e,t){for(let i=e/t,o,n=0;;){if(n++,o=Math.round(e*n/t),o>10&&n>10||o>100||n>100)return i.toFixed(2);if(Math.abs(o/n-i)<.01)return`${o}:${n}`}},frameSize(e,t){if(!e)return;const i=e.getBoundingClientRect(),o=Math.min(i.right,t.innerWidth)-Math.max(i.left,0),n=Math.min(i.bottom,t.innerHeight)-Math.max(i.top,0),a=i.left<0?-i.left:0,l=i.top<0?-i.top:0;return[o,n,a,l]},generateScales(e){let[t,i]=e<1?[e,1]:[1,e];const o=cfg.zoomStep/100,n=[t];if(e!==1){const a=i/t,l=Math.log(a)/Math.log(o)|0,c=l&&Math.pow(a,1/l);for(let m=l;--m>0;)n.push(t*=c);n.push(t=i)}for(;(t*=o)<=ZOOM_MAX;)n.push(t);return n},measurePopup(){let{popup:e,nwidth:t,nheight:i}=ai;if(e.setAttribute("style","display:inline !important;"+App.popupStyleBase),e.clientWidth>t){const u=clamp(e.clientWidth,t,innerWidth/2)|0;i=ai.nheight=u/t*i|0,t=ai.nwidth=u,e.style.cssText=`width: ${t}px !important; height: ${i}px !important;`}else e.style.cssText="";e.classList.add(`${PREFIX}show`);const o=getComputedStyle(e),n=sumProps(o.outlineOffset,o.outlineWidth)*2,a=sumProps(o.paddingLeft,o.paddingRight,o.borderLeftWidth,o.borderRightWidth),l=sumProps(o.paddingTop,o.paddingBottom,o.borderTopWidth,o.borderBottomWidth),c=n+sumProps(o.marginLeft,o.marginRight),m=n+sumProps(o.marginTop,o.marginBottom);ai.extras={inw:a,inh:l,outw:c,outh:m,o:n/2,w:a+c,h:l+m};const r=Math.min((ai.view.w-ai.extras.w)/ai.nwidth,(ai.view.h-ai.extras.h)/ai.nheight)||1,s=!cfg.fit&&cfg.scales.length;let p=Math.min(1,r),g=cfg.fit==="all"&&r||cfg.fit==="no"&&1||p;if(s){const u=[];for(const d of cfg.scales){const h=parseFloat(d)||r;u.push(h),s&&typeof d=="string"&&(d.includes("!")&&(p=h),d.includes("*")&&(g=h))}ai.scales=u.sort(compareNumbers).filter(Calc.scaleBiggerThan,p)}else ai.scales=Calc.generateScales(r);ai.scale=cfg.zoom==="auto"?g:Math.min(1,r),ai.scaleFit=r,ai.scaleZoom=g},rect(){const{node:e,rule:t}=ai;let i=t.rect&&e.closest(t.rect);if(i)return i.getBoundingClientRect();const o=(i=e).firstElementChild?document.elementsFromPoint(ai.cx,ai.cy):[];let n=0,a,l=0;do{const c=i.getBoundingClientRect(),m=c.width*c.height;m>n&&(n=m,a=c)}while((i=o[l++])&&e.contains(i));return a},scaleBiggerThan(e,t,i){return e>=this&&(!t||Math.abs(e-i[t-1])>.01)},scaleIndex(e){const t=ai.scales.indexOf(ai.scale);if(t>=0)return t+e;for(let i=ai.scales.length,o=e>0?0:i-1;o>=0&&o<i;o+=e)if(Math.sign(ai.scales[o]-ai.scale)===e)return o;return-1},scaleForFirstZoom(e){const t=ai.scaleZoom;return e||t!==ai.scale?t:ai.scales.find(i=>i>t)},updateViewSize(){const e=doc.compatMode==="BackCompat"?doc.body:doc.documentElement;if(ai.view={w:e.clientWidth,h:e.clientHeight,x:0,y:0},window===top)return;const[t,i]=Calc.frameSize(frameElement,parent)||[];t&&i?ai.view={w:t,h:i,x:0,y:0}:(addEventListener("message",App.onMessageChild,!0),parent.postMessage(MSG.getViewSize,"*"))}};class Config{constructor({data:t,save:i}){typeof t=="string"&&(t=tryJSON(t)),(typeof t!="object"||!t)&&(t={});const{DEFAULTS:o}=Config;if(t.fit=["all","large","no",""].includes(t.fit)?t.fit:!(t.scales||0).length||`${t.scales}`==`${o.scales}`?"large":"",t.version!==o.version){typeof t.hosts=="string"&&(t.hosts=t.hosts.split(`
`).map(n=>tryJSON(n)||n).filter(Boolean)),(t.close===!0||t.close===!1)&&(t.zoomOut=t.close?"auto":"stay");for(const n in o)typeof t[n]!=typeof o[n]&&(t[n]=o[n]);t.version===3&&t.scales[0]===0&&(t.scales[0]="0!");for(const n in t)n in o||delete t[n];t.version=o.version,i&&GM.setValue("cfg",t)}Object.keys(cfg||{}).some(n=>/^ui|^(css|globalStatus)$/.test(n)&&cfg[n]!==t[n])&&(App.globalStyle=""),isArray(t.scales)||(t.scales=[]),t.scales=[...new Set(t.scales)].sort((n,a)=>parseFloat(n)-parseFloat(a)),Object.assign(this,o,t)}static async load(t){return t.data=await GM.getValue("cfg"),new Config(t)}_getCss(){const{css:t}=this;return t.includes("{")?t:`#${PREFIX}-popup {${t}}`}}Config.DEFAULTS={__proto__:null,center:!1,css:"",delay:500,fit:"",globalStatus:!1,hosts:[{name:"No popup for YouTube thumbnails",d:"www.youtube.com",e:"ytd-rich-item-renderer *, ytd-thumbnail *",s:""},{name:"No popup for SVG/PNG icons",d:"",e:"img[src*='icon']",r:"//[^/]+/.*\\bicons?\\b.*\\.(?:png|svg)",s:""}],imgtab:!1,keepOnBlur:!1,keepVids:!1,mute:!1,night:!1,preload:!1,scale:1.05,scales:["0!",.125,.25,.5,.75,1,1.5,2,2.5,3,4,5,8,16],start:"auto",startAlt:"context",startAltShown:!1,uiBackgroundColor:"#ffffff",uiBackgroundOpacity:100,uiBorderColor:"#000000",uiBorderOpacity:100,uiBorder:0,uiFadein:!0,uiFadeinGallery:!0,uiInfo:!0,uiInfoCaption:!0,uiInfoHide:3,uiInfoOnce:!0,uiShadowColor:"#000000",uiShadowOpacity:80,uiShadow:20,uiShadowOnLoad:!0,uiPadding:0,uiMargin:0,version:6,videoCtrl:!0,waitLoad:!1,xhr:!0,zoom:"context",zoomOut:"auto",zoomStep:133};const CspSniffer={csp:null,selfUrl:location.origin+"/",init(){this.busy=new Promise(e=>{const t=new XMLHttpRequest;t.open("get",location),t.timeout=Math.max(2e3,(performance.timing.responseEnd-performance.timeOrigin)*2),t.onreadystatechange=()=>{t.readyState>=t.HEADERS_RECEIVED&&(this.csp=this._parse([t.getResponseHeader("content-security-policy"),$prop('meta[http-equiv="Content-Security-Policy"]',"content")].filter(Boolean).join(",")),this.init=this.busy=t.onreadystatechange=null,t.abort(),e())},t.send()})},async check(e,t){t&&this.init&&this.init(),this.busy&&await this.busy;const i=Util.isVideoUrl(e);let o;if(this.csp){const n=this.csp[i?"media":"img"];n.some(this._srcMatches,e)||(o=[o,"blob","data"].find(a=>n.includes(`${a}:`)))}return[o||ai.xhr,i]},_parse(e){if(!e)return;const t={},i=/(?:^|[;,])\s*(?:(default|img|media|script)-src|require-(trusted)-types-for) ([^;,]+)/g;for(let o;o=i.exec(e);)t[o[1]||o[2]]=o[3].trim().split(/\s+/);(t.script||[]).find(o=>/^'nonce-(.+)'$/.test(o))&&(nonce=RegExp.$1),(t.trusted||[]).includes("'script'")&&(App.NOP=()=>{}),t.img||(t.img=t.default||[]),t.media||(t.media=t.default||[]);for(const o of[t.img,t.media])o.forEach((n,a)=>{n!=="*"&&n.includes("*")&&(o[a]=new RegExp((/^\w+:/.test(n)?"^":"^\\w+://")+n.replace(/[.+?^$|()[\]{}]/g,"\\$&").replace(/(\\\.)?(\*)(\\\.)?/g,(l,c,m,r)=>`${c?"\\.?":""}[^:/]*${r?"\\.?":""}`).replace(/[^/]$/,"$&/")))});return t},_srcMatches(e){return e instanceof RegExp?e.test(this):e==="*"||e&&this.startsWith(e)&&(e.endsWith("/")||this[e.length]==="/")||e==="'self'"&&this.startsWith(CspSniffer.selfUrl)}},Events={ctrl:!1,hoverData:null,hoverTimer:0,ignoreKeyHeld:!1,onMouseOver(e){let t=e.target;Events.ignoreKeyHeld=e.shiftKey,!(!App.isEnabled||e.shiftKey||ai.zoomed||t===ai.popup||t===doc.body||t===doc.documentElement||t===elSetup||ai.gallery&&ai.rectHovered||!App.canClose())&&(t.shadowRoot&&(t=Events.pierceShadow(t,e.clientX,e.clientY)),Events.hoverData={e,node:t,start:now()},Events.hoverTimer=Events.hoverTimer||setTimeout(Events.onMouseOverThrottled,SETTLE_TIME),t.addEventListener("mouseout",Events.onMouseOutThrottled))},onMouseOverThrottled(e){const{start:t,e:i,node:o,nodeOut:n}=Events.hoverData||{};if(!o||o===n&&(Events.hoverData=null,1))return;const a=e?0:t+SETTLE_TIME-now();if(Events.hoverTimer=a>10&&setTimeout(Events.onMouseOverThrottled,a))return;Events.hoverData=null,Ruler.rules||Ruler.init();const c=RuleMatcher.adaptiveFind(o);c&&c.url&&c.node!==ai.node&&App.activate(c,i)},onMouseOut(e){!e.relatedTarget&&!cfg.keepOnBlur&&!e.shiftKey&&App.canClose()&&App.deactivate()},onMouseOutThrottled(e){const t=Events.hoverData;t&&(t.nodeOut=this),this.removeEventListener("mouseout",Events.onMouseOutThrottled),Events.hoverTimer=0},onMouseOutShadow(e){const t=e.target.shadowRoot;t&&(t.removeEventListener("mouseover",Events.onMouseOver),t.removeEventListener("mouseout",Events.onMouseOutShadow))},onMouseMove(e){if(Events.trackMouse(e),!e.shiftKey){if(!ai.zoomed&&!ai.rectHovered&&App.canClose())App.deactivate();else if(ai.zoomed){Popup.move();const{cx:t,cy:i,view:{w:o,h:n}}=ai,a=o/6,l=n/6,c=t<a||t>o-a||i<l||i>n-l;Status.set(`${c?"+":"-"}edge`)}}},onMouseDown({shiftKey:e,button:t,target:i}){!t&&i===ai.popup&&ai.popup.controls&&(e||!App.canClose())?ai.controlled=ai.zoomed=!0:t===2||e||(App.deactivate({wait:!0}),doc.addEventListener("mouseup",App.enable,{once:!0}))},onMouseScroll(e){const t=(e.deltaY||-e.wheelDelta)<0?1:-1;if(ai.zoomed)Events.zoomInOut(t);else if(ai.gNum>1&&ai.popup)Gallery.next(-t);else if(cfg.zoom==="wheel"&&t>0&&ai.popup)App.toggleZoom();else if(App.canClose()){App.deactivate();return}dropEvent(e)},onKeyDown(e){const t=describeKey(e),i=ai.popupShown;if(!i&&t==="^Control"&&(addEventListener("keyup",Events.onKeyUp,!0),Events.ctrl=!0),!i&&t==="^ContextMenu")return Events.onContext.call(this,e);if(!(!i||e.repeat)){switch(t){case"+Shift":if(ai.shiftKeyTime)return;ai.shiftKeyTime=now(),Status.set("+shift"),cfg.uiInfo&&Bar.show(1),isVideo(i)&&(i.controls=!0);return;case"KeyA":i.toggleAttribute(NOAA_ATTR);break;case"ArrowRight":case"KeyJ":Gallery.next(1);break;case"ArrowLeft":case"KeyK":Gallery.next(-1);break;case"KeyC":ai.bar.firstChild?(Bar.setText(""),Bar.hide(0)):(Bar.setText(ai.barText),Bar.show(2));break;case"KeyD":Req.saveFile();break;case"KeyF":i!==document.fullscreenElement?i.requestFullscreen():document.exitFullscreen();break;case"KeyH":case"KeyV":case"KeyL":case"KeyR":if(!i)return;if(t==="KeyH"||t==="KeyV"){const o=!!(ai.rotate%180)^t==="KeyH"?"flipX":"flipY";ai[o]=!ai[o]}else ai.rotate=((ai.rotate||0)+90*(t==="KeyL"?-1:1)+360)%360;Bar.updateDetails(),Popup.move();break;case"KeyI":(ai.barShown?Bar.hide:Bar.show)(2);break;case"KeyM":isVideo(i)&&(i.muted=!i.muted);break;case"KeyN":ai.night=i.classList.toggle(`${PREFIX}night`);break;case"KeyT":GM.openInTab(Util.tabFixUrl()||i.src),App.deactivate();break;case"Minus":case"NumpadSubtract":ai.zoomed?Events.zoomInOut(-1):App.toggleZoom();break;case"Equal":case"NumpadAdd":ai.zoomed?Events.zoomInOut(1):App.toggleZoom();break;case"Escape":App.deactivate({wait:!0});break;case"!Alt":return;default:App.deactivate({wait:!0});return}dropEvent(e)}},onKeyUp(e){const t=ai.popupShown||!1;e.key==="Control"&&(t||removeEventListener("keyup",Events.onKeyUp,!0),setTimeout(()=>Events.ctrl=!1)),t&&e.key==="Shift"&&ai.shiftKeyTime?(Status.set("-shift"),cfg.uiInfo&&Bar.hide(1),t.controls&&(t.controls=!1),ai.controlled||!isFF&&now()-ai.shiftKeyTime>500?ai.controlled=!1:t&&(ai.zoomed||ai.rectHovered!==!1)?App.toggleZoom():App.deactivate({wait:!0}),ai.shiftKeyTime=0):describeKey(e)==="Control"&&!t&&!Events.ignoreKeyHeld&&(cfg.start==="ctrl"||cfg.start==="context"||ai.rule.manual)&&(dropEvent(e),Events.hoverData&&(Events.hoverData.e=e,Events.onMouseOverThrottled(!0)),ai.node&&(ai.force=!0,App.start()))},onContext(e){if(Events.ignoreKeyHeld)return;const t=ai.popupShown;cfg.zoom==="context"&&t&&App.toggleZoom()?dropEvent(e):!t&&(!cfg.videoCtrl||!isVideo(ai.node)||Events.ctrl)&&(cfg.start==="context"||cfg.start==="contextMK"||cfg.start==="contextM"&&e.button===2||cfg.start==="contextK"&&e.button!==2||cfg.start==="auto"&&ai.rule.manual)?(!ai.node&&!Events.hoverData&&Events.onMouseOver(e),Events.onMouseOverThrottled(!0),ai.node&&(ai.force=!0,App.start(),dropEvent(e))):t&&setTimeout(App.deactivate,SETTLE_TIME,{wait:!0})},onVisibility(e){Events.ctrl=!1},pierceShadow(e,t,i){for(let o;o=e.shadowRoot;){o.addEventListener("mouseover",Events.onMouseOver,{passive:!0}),o.addEventListener("mouseout",Events.onMouseOutShadow);const n=o.elementFromPoint(t,i);if(!n||n===e)break;e=n}return e},toggle(e){const t=e?"addEventListener":"removeEventListener",i={passive:!0,capture:!0};window[t]("mousemove",Events.onMouseMove,i),window[t]("mouseout",Events.onMouseOut,i),window[t]("mousedown",Events.onMouseDown,i),window[t]("keyup",Events.onKeyUp,!0),window[t](WHEEL_EVENT,Events.onMouseScroll,{passive:!1,capture:!0}),ai.node.removeEventListener("mouseout",Events.onMouseOutThrottled)},trackMouse(e){const t=ai.cx=e.clientX,i=ai.cy=e.clientY,o=ai.rect||(ai.rect=Calc.rect());ai.rectHovered=t>o.left-2&&t<o.right+2&&i>o.top-2&&i<o.bottom+2},zoomInOut(e){const t=Calc.scaleIndex(e),i=ai.scales.length;t>=0&&t<i&&(ai.scale=ai.scales[t]);const o=cfg.zoomOut;if(t<=0&&o!=="stay"){if(ai.scaleFit<ai.scale*.99)ai.scales.unshift(ai.scale=ai.scaleFit);else if((t<=0&&o==="close"||t<0&&!ai.rectHovered)&&ai.gNum<2){App.deactivate({wait:!0});return}ai.zoomed=o!=="unzoom"}else ai.popup.classList.toggle(`${PREFIX}zoom-max`,ai.scale>=4&&t>=i-1);ai.zooming&&ai.popup.classList.add(`${PREFIX}zooming`),Popup.move(),Bar.updateDetails()}},Gallery={makeParser(e){return isFunction(e)?e:Gallery.defaultParser},findIndex(e){return Math.max(0,ai.gItems.findIndex(({url:t})=>isArray(t)?t.includes(e):t===e))},next(e){e&&(ai.gIndex=Gallery.nextIndex(e));const t=ai.gItem=ai.gItems[ai.gIndex];isArray(t.url)?(ai.urls=t.url.slice(1),ai.url=t.url[0]):(ai.urls=null,ai.url=t.url),ai.gItemNext=ai.gItems[Gallery.nextIndex(e||1)],App.startSingle(),Bar.updateName(),e&&Bar.show(0)},nextIndex(e){return(ai.gIndex+e+ai.gNum)%ai.gNum},defaultParser(e,t,i,o,n){const{g:a}=n,l=a.index,c=a.entry,m=ensureArray(a.caption),r=a.image||"img",s=a.title,p=(typeof a.fix=="string"?Util.newFunction("s","isURL",a.fix):a.fix)||(v=>v.trim()),g=[...$$(c||r,t)],u=g.map(d).filter(Boolean);return u.title=E(),u.index=RX_HAS_CODE.test(l)?Util.newFunction("items","node",l)(u,ai.node):typeof l=="string"?Req.findImageUrl(tryCatch($,l,t),i):l??Math.max(0,g.indexOf(ai.node)),u;function d(v){const S={};try{const k=c?$(r,v):v;S.url=p(Req.findImageUrl(k,i),!0),S.desc=m.map(h,v).filter(Boolean).join(" - ")}catch{}return S.url&&S}function h(v){const S=v?$(v,this)||_(v,this.previousElementSibling)||_(v,this.nextElementSibling):this;return S&&p(Ruler.runCHandler.default(S)||S.textContent)}function E(){const v=$(s,t);return v&&p(v.getAttribute("content")||v.textContent)||""}function _(v,S){if(S&&!S.matches(c))return S.matches(v)?S:$(v,S)}}},Menu=window===top&&GM.registerMenuCommand&&{curAltName:"",unreg:GM.unregisterMenuCommand,makeAltName:()=>Menu.unreg?`MPIV: auto-start is ${cfg.start==="auto"?"ON":"OFF"}`:"MPIV: toggle auto-start",register(){GM.registerMenuCommand("MPIV: configure",setup),Menu.registerAlt()},registerAlt(){cfg.startAltShown&&(Menu.curAltName=Menu.makeAltName(),GM.registerMenuCommand(Menu.curAltName,Menu.onAltToggled))},reRegisterAlt(){const e=Menu.curAltName;e&&Menu.unreg&&Menu.unreg(e),(!e||Menu.unreg)&&Menu.registerAlt()},onAltToggled(){cfg.start==="auto"?cfg.start=cfg.startAlt||(cfg.startAlt="context"):(cfg.startAlt=cfg.start,cfg.start="auto"),Menu.reRegisterAlt()}},Popup={async create(e,t,i){let o=ai.popup,n;const a=o&&!cfg.uiFadeinGallery&&ai.gItems&&!ai.zooming;if(a&&o===document.fullscreenElement?Popup.destroyBlob():o&&(Popup.destroy(),o=null),ai.imageUrl=e,!e)return;const l=ai;let[c,m]=await CspSniffer.check(e,i);if(ai!==l)return;if(!c&&i){App.handleError(i);return}Object.assign(ai,{pageUrl:t,xhr:c}),c&&([e,m]=await Req.getImage(e,t,c).catch(App.handleError)||[]);let r;if(ai!==l||!e||m&&(r=await GM.getValue("volume"),ai!==l))return;o?(o.src=n=BLANK_PIXEL,o.classList.remove(PREFIX+"show"),o.removeAttribute("style"),ai.popupShown=null,ai.popupLoaded=!1):o=ai.popup=m?PopupVideo.create(r):$new("img"),o.id=`${PREFIX}popup`,o.src=e,o.addEventListener("error",App.handleError),(ai.night=ai.night!=null?ai.night:cfg.night)&&o.classList.add(`${PREFIX}night`),ai.zooming&&o.addEventListener("transitionend",Popup.onZoom),$dataset(o,"galleryFlip",a?"":null),o.toggleAttribute("loaded",!!a);const s=ai.popover||typeof o.showPopover=="function"&&$("[popover]:popover-open");ai.popover=s&&s.getBoundingClientRect().width&&($css(s,{opacity:0}),s)||null,o.parentElement!==doc.body&&doc.body.insertBefore(o,ai.bar&&ai.bar.parentElement===doc.body&&ai.bar||null),await 0,!(ai.popup!==o||App.checkProgress({start:!0})===!1)&&(!n&&o.complete?Popup.onLoad.call(o):m||o.addEventListener("load",Popup.onLoad,{once:!0}))},destroy(){const e=ai.popup;e&&(e.removeEventListener("load",Popup.onLoad),e.removeEventListener("error",App.handleError),ai.popover&&(ai.popover.style.removeProperty("opacity"),ai.popover=null),isFunction(e.pause)&&e.pause(),e.remove(),Popup.destroyBlob(),ai.zoomed=ai.popup=ai.popupLoaded=null)},destroyBlob(){ai.blobUrl&&(setTimeout(URL.revokeObjectURL,SETTLE_TIME,ai.blobUrl),ai.blobUrl=null)},move(){let e,t;const{cx:i,cy:o,extras:n,view:a}=ai,l=a.w-n.outw,c=a.h-n.outh,m=ai.scale*ai.nwidth+n.inw,r=ai.scale*ai.nheight+n.inh,s=ai.rotate%180,p=s?r:m,g=s?m:r;if(!ai.zoomed&&ai.gNum<2&&!cfg.center){const d=ai.rect,h=(d.left+d.right)/2,E=(d.top+d.bottom)/2;l-d.right-40>p||p<d.left-40?(g<c-60&&(t=clamp(E-g/2,30,c-g-30)),e=h>l/2?d.left-40-p:d.right+40):(c-d.bottom-40>g||g<d.top-40)&&(p<l-60&&(e=clamp(h-p/2,30,l-p-30)),t=E>c/2?d.top-40-g:d.bottom+40)}e==null&&(e=l>p?(l-p)/2+a.x:(l-p)*clamp(5/3*((i-a.x)/l-.2),0,1)),t==null&&(t=c>g?(c-g)/2+a.y:(c-g)*clamp(5/3*((o-a.y)/c-.2),0,1));const u=s?(m-r)/2:0;e+=n.o-u,t+=n.o+u,$css(ai.popup,{transform:`translate(${Math.round(e)}px, ${Math.round(t)}px) rotate(${ai.rotate||0}deg) scale(${ai.flipX?-1:1},${ai.flipY?-1:1})`,width:`${Math.round(m)}px`,height:`${Math.round(r)}px`})},onLoad(){if(this===ai.popup){this.setAttribute("loaded",""),ai.popupLoaded=!0,Status.set("-loading");let e=ai.gItem;e&&(e.url=this.src),(e=ai.gItemNext)&&Popup.preload(this,e)}},onZoom(){this.classList.remove(`${PREFIX}zooming`)},async preload(e,t,i=t.url,o=$new("img")){if(ai.gItemNext=null,!isArray(i)){o.src=i;return}for(const n=i;e===ai.popup&&t.url===n&&(i=n[0]);){const{type:a}=await new Promise(l=>{o.src=i,o.onload=o.onerror=l});if(n[0]===i&&n.shift(),a==="load"){t.url=i;break}}}},PopupVideo={create(e){return ai.bufBar=!1,ai.bufStart=now(),$new("video",{autoplay:ai.preloadStart!==-1,controls:!0,muted:cfg.mute||new AudioContext().state==="suspended",loop:!0,volume:clamp(+e||.5,0,1),onprogress:PopupVideo.progress,oncanplaythrough:PopupVideo.progressDone,onvolumechange:PopupVideo.rememberVolume})},progress(){const{duration:e}=this;if(e&&this.buffered.length&&now()-ai.bufStart>2e3){const t=Math.round(this.buffered.end(0)/e*100);ai.bar&&(ai.bufBar|=t>0&&t<50)&&Bar.set(`${t}% of ${Math.round(e)}s`,"xhr")}},progressDone(){this.onprogress=this.oncanplaythrough=null,ai.bar&&ai.bar.classList.contains(`${PREFIX}xhr`)&&Bar.set(!1),Popup.onLoad.call(this)},rememberVolume(){GM.setValue("volume",this.volume)}},Ruler={init(){const e=new Map,t=cfg.hosts||[],i=t.filter((r,s,p)=>!s||!Util.deepEqual(r,p[s-1]));i.length<t.length&&GM.setValue("cfg",cfg);const o=Ruler.rules=i.map(Ruler.parse,e).filter(Boolean),n=typeof GM_addElement=="function",a=nonce||(nonce=($("script[nonce]")||{}).nonce||"")||n,l=a&&`${GM_info.script.name}${Math.random()}`,c=[],m=[`window[${JSON.stringify(l)}]=[`];for(const[r,s]of e.entries()){if(!RX_EVAL_BLOCKED.test(s)){App.handleError("Invalid custom host rule:",r);continue}a&&m.push(c.length?",":"","[",o.indexOf(r),",{",...Object.keys(FN_ARGS).map(p=>RX_HAS_CODE.test(r[p])&&`${p}(${FN_ARGS[p]}){${r[p]}},`).filter(Boolean),"}]"),c.push(r)}if(c.length){let r,s;if(a){const p=n?GM_addElement:(g,{textContent:u})=>document.head.appendChild(Object.assign(document.createElement(g),{textContent:trustedScript?trustedScript(u):u,nonce}));m.push("]; document.currentScript.remove();"),p("script",{textContent:m.join("")}),r=(s=unsafeWindow)[l]||isFF&&(s=s.wrappedJSObject)[l]}if(r){for(const[p,g]of r)Object.assign(o[p],g);delete s[l]}else console.warn("Site forbids compiling JS code in these custom rules",c)}switch(dotDomain.match(/[^.]+(?=\.com?(?:\.[^.]+)?$)|[^.]+\.[^.]+$|$/)[0]){case"4chan.org":o.push({e:'.is_catalog .thread a[href*="/thread/"], .catalog-thread a[href*="/thread/"]',q:".op .fileText a",css:"#post-preview{display:none}"});break;case"amazon":o.push({r:/.+?images\/I\/.+?\./,s:r=>doc.getElementById("universal-hover")?"":r[0]+"jpg",css:"#zoomWindow{display:none!important;}"});break;case"bing":o.push({e:'a[m*="murl"]',r:/murl&quot;:&quot;(.+?)&quot;/,s:"$1",html:!0});break;case"deviantart":o.push({e:'a[href*="/art/"] img[src*="/v1/"]',r:/^(.+)\/v1\/\w+\/[^/]+\/(.+)-\d+.(\.\w+)(\?.+)/,s:([,r,s,p,g],u)=>{let d=Util.getReactChildren(u.closest("a"),"props.deviation.media.types");return d&&(d=d.find(h=>h.t==="fullview"))&&`${r}${d.c?d.c.replace("<prettyName>",s):`/v1/fill/w_${d.w},h_${d.h}/${s}-fullview${p}`}${g}`}},{e:".dev-view-deviation img",s:()=>[$(".dev-page-download").href,$(".dev-content-full").src].filter(Boolean)},{e:"a[data-hook=deviation_link]",q:"link[as=image]"});break;case"discord":o.push({u:"||discordapp.net/external/",r:/\/https?\/(.+)/,s:"//$1",follow:!0});break;case"dropbox":o.push({r:/(.+?&size_mode)=\d+(.*)/,s:"$1=5$2"});break;case"facebook":o.push({e:'a[href^="/photo/?"], a[href^="https://www.facebook.com/photo"]',s:(r,s)=>(r=Util.getReactChildren(s.parentNode))&&pick(r,(r[0]?"0.props.linkProps":"props")+".passthroughProps.origSrc")});break;case"flickr":pick(unsafeWindow,"YUI_config.flickr.api.site_key")&&o.push({r:/flickr\.com\/photos\/[^/]+\/(\d+)/,s:r=>`https://www.flickr.com/services/rest/?${new URLSearchParams({photo_id:r[1],api_key:unsafeWindow.YUI_config.flickr.api.site_key,method:"flickr.photos.getSizes",format:"json",nojsoncallback:1}).toString()}`,q:r=>JSON.parse(r).sizes.size.pop().source,anonymous:!0});break;case"github":o.push({r:new RegExp([/(avatars.+?&s=)\d+/,/(raw\.github)(\.com\/.+?\/img\/.+)$/,/\/(github)(\.com\/.+?\/)blob\/([^/]+\/.+?\.(?:avif|webp|png|jpe?g|bmp|gif|cur|ico|svg))$/].map(r=>r.source).join("|")),s:r=>`https://${r[1]?`${r[1]}460`:r[2]?`${r[2]}usercontent${r[3]}`:$(".AppHeader-context-item > .octicon-lock")?`${r[4]}${r[5]}raw/${r[6]}`:`raw.${r[4]}usercontent${r[5]}${r[6]}`}`});break;case"google":/[&?]tbm=isch(&|$)/.test(location.search)&&o.push({e:'a[href*="imgres?imgurl="] img',s:(r,s)=>new URLSearchParams(s.closest("a").search).get("imgurl"),follow:!0},{e:"[data-tbnid] a:not([href])",s:(r,s)=>{const p=$('a[jsaction*="mousedown"]',s.closest("[data-tbnid]"))||s;new MutationObserver((g,u)=>{u.disconnect(),App.isEnabled=!0,s.alt=p.innerText;const{left:d,top:h}=s.getBoundingClientRect();Events.onMouseOver({target:$("img",s),clientX:d,clientY:h})}).observe(s,{attributes:!0,attributeFilter:["href"]}),p.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),p.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0}))}});break;case"instagram":o.push({e:'a[href*="/p/"],article [role="button"][tabindex="0"],article [role="button"][tabindex="0"] div',s:(r,s,p)=>{let g,u,d,h,E;(location.pathname.startsWith("/p/")||location.pathname.startsWith("/tv/"))&&(h=$("img[srcset], video",s.parentNode),h&&(isVideo(h)||parseFloat(h.sizes)>900)&&(E=(h.srcset||h.currentSrc).split(",").pop().split(" ")[0])),!E&&(d=s.closest('a[href*="/p/"], article'))&&(u=d.tagName==="A"?d:$('a[href*="/p/"]',d));const _=u&&pick(g,"edge_sidecar_to_children.edges.length")||u&&pick(g,"carousel_media_count");return Ruler.toggle(p,"q",g&&g.is_video&&!g.video_url),Ruler.toggle(p,"g",u&&(_>1||/<\w+[^>]+carousel/i.test(u.innerHTML))),p.follow=!g&&!p.g,p._data=g,p._img=h,!u&&!E?!1:!g||p.q||p.g?`${E||u.href}${p.g?"?__a=1&__d=dis":""}`:g.video_url||g.display_url},c:(r,s,p,g)=>g._getCaption(g._data)||(g._img||0).alt||"",follow:!0,_q:'meta[property="og:video"]',_g(r,s,p,g,u){const d=tryJSON(r),h=pick(d,"graphql.shortcode_media")||pick(d,"items.0"),E=pick(h,"edge_sidecar_to_children.edges",_=>_.map(v=>({url:v.node.video_url||v.node.display_url})))||pick(h,"carousel_media",_=>_.map(v=>({url:pick(v,"video_versions.0.url")||pick(v,"image_versions2.candidates.0.url")})));return E.title=u._getCaption(h)||"",E},_getCaption:r=>pick(r,"caption.text")||pick(r,"edge_media_to_caption.edges.0.node.text")});break;case"reddit":o.push({u:"||i.reddituploads.com/"},{e:'[data-url*="i.redd.it"] img[src*="thumb"]',s:(r,s)=>$propUp(s,"data-url")},{r:/preview(\.redd\.it\/\w+\.(jpe?g|png|gif))/,s:"https://i$1"});break;case"stackoverflow":o.push({e:".post-tag, .post-tag img",s:""});break;case"startpage":o.push({r:/[&?]piurl=([^&]+)/,s:"$1",follow:!0});break;case"tumblr":o.push({e:"div.photo_stage_img, div.photo_stage > canvas",s:(r,s)=>/http[^"]+/.exec(s.style.cssText+s.getAttribute("data-img-src"))[0],follow:!0});break;case"twitter":o.push({e:".grid-tweet > .media-overlay",s:(r,s)=>s.previousElementSibling.src,follow:!0});break}o.push({r:/[/?=](https?%3A%2F%2F[^&]+)/i,s:"$1",follow:!0,onerror:"skip"},{u:["||500px.com/photo/","||cl.ly/","||cweb-pix.com/","//ibb.co/","||imgcredit.xyz/image/"],r:/\.\w+\/.+/,q:'meta[property="og:image"]'},{u:"attachment.php",r:/attachment\.php.+attachmentid/},{u:"||abload.de/image",q:"#image"},{u:"||deviantart.com/art/",s:(r,s)=>/\b(film|lit)/.test(s.className)||/in Flash/.test(s.title)?"":r.input,q:['#download-button[href*=".jpg"]','#download-button[href*=".jpeg"]','#download-button[href*=".gif"]','#download-button[href*=".png"]',"#gmi-ResViewSizer_fullimg","img.dev-content-full"]},{u:"||dropbox.com/s",r:/com\/sh?\/.+\.(jpe?g|gif|png)/i,q:(r,s)=>$prop("img.absolute-center","src",s).replace(/(size_mode)=\d+/,"$1=5")||!1},{r:/[./]ebay\.[^/]+\/itm\//,q:r=>r.match(/https?:\/\/i\.ebayimg\.com\/[^.]+\.JPG/i)[0].replace(/~~60_\d+/,"~~60_57")},{u:"||i.ebayimg.com/",s:(r,s)=>$(".zoom_trigger_mask",s.parentNode)?"":r.input.replace(/~~60_\d+/,"~~60_57")},{u:"||fastpic.",s:(r,s,p)=>{const g=s.closest("a"),u=decodeURIComponent(Req.findImageUrl(g||s)).replace(/\/i(\d+)\.(\w+\.\w+\/)\w+/,"/$2$1").replace(/^\w+:\/\/fastpic[^/]+((?:\/\d+){3})\/\w+(\/\w+\.\w+).*/,"https://fastpic.org/view$1$2.html");return Ruler.toggle(p,"q",u.includes(".html")),g||u.includes(".png")?u:[u,u.replace(/\.jpe?g/,".png")]},_q:'img[src*="/big/"]'},{u:"||flickr.com/photos/",r:/photos\/([0-9]+@N[0-9]+|[a-z0-9_-]+)\/([0-9]+)/,s:r=>r.input.indexOf("/sizes/")<0?`https://www.flickr.com/photos/${r[1]}/${r[2]}/sizes/sq/`:!1,q:(r,s)=>{const p=$$(".sizes-list a",s);return"https://www.flickr.com"+p[p.length-1].getAttribute("href")},follow:!0},{u:"||flickr.com/photos/",r:/\/sizes\//,q:"#allsizes-photo > img"},{u:"||gfycat.com/",r:/(gfycat\.com\/)(gifs\/detail\/|iframe\/)?([a-z]+)/i,s:"https://$1$3",q:'meta[content$=".webm"], #webmsource, source[src$=".webm"], .actual-gif-image'},{u:["||googleusercontent.com/proxy","||googleusercontent.com/gadgets/proxy"],r:/\.com\/(proxy|gadgets\/proxy.+?(http.+?)&)/,s:r=>r[2]?decodeURIComponent(r[2]):r.input.replace(/w\d+-h\d+($|-p)/,"w0-h0")},{u:["||googleusercontent.com/","||ggpht.com/"],s:r=>r.input.includes("webcache.")?"":r.input.replace(/\/s\d{2,}-[^/]+|\/w\d+-h\d+/,"/s0").replace(/([&?]sz)?=[-\w]+([&#].*)?/,"")},{u:"||gravatar.com/",r:/([a-z0-9]{32})/,s:"https://gravatar.com/avatar/$1?s=200"},{u:"//gyazo.com/",r:/\bgyazo\.com\/\w{32,}(\.\w+)?/,s:(r,s,p)=>Ruler.toggle(p,"q",!r[1])?r.input:`https://i.${r[0]}`,_q:'link[rel="image_src"]'},{u:"||hostingkartinok.com/show-image.php",q:".image img"},{u:["||imagecurl.com/images/","||imagecurl.com/viewer.php"],r:/(?:images\/(\d+)_thumb|file=(\d+))(\.\w+)/,s:"https://imagecurl.com/images/$1$2$3"},{u:"||imagebam.com/",r:/^(https:\/\/)thumbs\d+(\.imagebam\.com\/).*?([^/]+)_t\./,s:"$1www$2view/$3",q:"img.main-image"},{u:"||www.imagebam.com/view/",q:"img.main-image"},{u:"||imageban.ru/thumbs",r:/(.+?\/)thumbs(\/\d+)\.(\d+)\.(\d+\/.*)/,s:"$1out$2/$3/$4"},{u:["||imageban.ru/show","||imageban.net/show","||ibn.im/"],q:"#img_main"},{u:"||imageshack.us/img",r:/img(\d+)\.(imageshack\.us)\/img\\1\/\d+\/(.+?)\.th(.+)$/,s:"https://$2/download/$1/$3$4"},{u:"||imageshack.us/i/",q:"#share-dl"},{u:"||imageteam.org/img",q:'img[alt="image"]'},{u:["||imagetwist.com/","||imageshimage.com/"],r:/(\/\/|^)[^/]+\/[a-z0-9]{8,}/,q:"img.pic",xhr:!0},{u:"||imageupper.com/i/",q:"#img",xhr:!0},{u:"||imagevenue.com/",q:'a[data-toggle="full"] img'},{u:"||imagezilla.net/show/",q:"#photo",xhr:!0},{u:["||images-na.ssl-images-amazon.com/images/","||media-imdb.com/images/"],r:/images\/.+?\.jpg/,s:"/V1\\.?_.+?\\.//g"},{u:"||imgbox.com/",r:/\.com\/([a-z0-9]+)$/i,q:"#img",xhr:hostname!=="imgbox.com"},{u:"||imgclick.net/",r:/\.net\/(\w+)/,q:"img.pic",xhr:!0,post:r=>`op=view&id=${r[1]}&pre=1&submit=Continue%20to%20image...`},{u:".imgcredit.xyz/",r:/^https?(:.*\.xyz\/\d[\w/]+)\.md(.+)/,s:["https$1$2","https$1.png"]},{u:["||imgflip.com/i/","||imgflip.com/gif/"],r:/\/(i|gif)\/([^/?#]+)/,s:r=>`https://i.imgflip.com/${r[2]}${r[1]==="i"?".jpg":".mp4"}`},{u:["||imgur.com/a/","||imgur.com/gallery/"],s:"gallery",async g(){let r=`https://imgur.com/ajaxalbums/getimages/${ai.url.split(/[/?#]/)[4]}/hit.json?all=true`,s=tryJSON((await Req.gmXhr(r)).responseText)||0,p=(s.data||0).images||[];p[0]||(s=(await Req.gmXhr(ai.url)).responseText.match(/postDataJSON=(".*?")<|$/)[1],s=tryJSON(tryJSON(s))||0,p=s.media);const g=[];for(const u of p){const d=u.metadata||u;g.push({url:u.url||(r=`https://i.imgur.com/${u.hash}`)&&(u.ext===".gif"&&u.animated!==!1?[`${r}.webm`,`${r}.mp4`,r]:r+u.ext),desc:[d.title,d.description].filter(Boolean).join(" - ")})}return g[0]&&s.title&&!`${g[0].desc||""}`.includes(s.title)&&(g.title=s.title),g}},{u:"||imgur.com/",r:/((?:[a-z]{2,}\.)?imgur\.com\/)((?:\w+,)+\w*)/,s:"gallery",g:(r,s,p,g)=>g[2].split(",").map(u=>({url:`https://i.${g[1]}${u}.jpg`}))},{u:"||imgur.com/",r:/([a-z]{2,}\.)?imgur\.com\/(r\/[a-z]+\/|[a-z0-9]+#)?([a-z0-9]{5,})($|\?|\.(mp4|[a-z]+))/i,s:(r,s)=>{if(/memegen|random|register|search|signin/.test(r.input))return"";const p=s.closest("a");if(p&&p!==s&&/(i\.([a-z]+\.)?)?imgur\.com\/(a\/|gallery\/)?/.test(p.href))return!1;const g=r[3].replace(/(.{7})[hlmtbs]$/,"$1"),u=r[5]?r[5].replace(/gifv?/,"webm"):"jpg",d=`https://i.${(r[1]||"").replace("www.","")}imgur.com/${g}.`;return u==="webm"?[`${d}webm`,`${d}mp4`,`${d}gif`]:d+u}},{u:["||instagr.am/p/","||instagram.com/p/","||instagram.com/tv/"],s:r=>r.input.substr(0,r.input.lastIndexOf("/")).replace("/liked_by","")+"/?__a=1&__d=dis",q:r=>(r=tryJSON(r))&&(r=pick(r,"graphql.shortcode_media")||pick(r,"items.0")||0)&&(r.video_url||r.display_url||pick(r,"video_versions.0.url")||pick(r,"carousel_media.0.image_versions2.candidates.0.url")||pick(r,"image_versions2.candidates.0.url")),rect:"div.PhotoGridMediaItem",c:r=>(r=tryJSON(r))&&(pick(r,"items.0.caption.text")||pick(r,"graphql.shortcode_media.edge_media_to_caption.edges.0.node.text")||"")},{u:["||livememe.com/","||lvme.me/"],r:/\.\w+\/([^.]+)$/,s:"http://i.lvme.me/$1.jpg"},{u:"||lostpic.net/image",q:".image-viewer-image img"},{u:"||makeameme.org/meme/",r:/\/meme\/([^/?#]+)/,s:"https://media.makeameme.org/created/$1.jpg"},{u:"||photobucket.com/",r:/(\d+\.photobucket\.com\/.+\/)(\?[a-z=&]+=)?(.+\.(jpe?g|png|gif))/,s:"https://i$1$3",xhr:!dotDomain.endsWith(".photobucket.com")},{u:"||piccy.info/view3/",r:/(.+?\/view3)\/(.*)\//,s:"$1/$2/orig/",q:"#mainim"},{u:"||pimpandhost.com/image/",r:/(.+?\/image\/[0-9]+)/,s:"$1?size=original",q:"img.original"},{u:["||pixroute.com/","||imgspice.com/"],r:/\.html$/,q:"img[id]",xhr:!0},{u:"||postima",r:/postima?ge?\.org\/image\/\w+/,q:['a[href*="dl="]',"#main-image"]},{u:["||prntscr.com/","||prnt.sc/"],r:/\.\w+\/.+/,q:'meta[property="og:image"]',xhr:!0},{u:"||radikal.ru/",r:/\.ru\/(fp|.+?\.html)|^(.+?)t\.jpg/,s:(r,s,p)=>r[2]&&/radikal\.ru[\w%/]+?(\.\w+)/.test($propUp(s,"href"))?r[2]+RegExp.$1:Ruler.toggle(p,"q",r[1])?r.input:[r[2]+".jpg",r[2]+".png"],_q:r=>r.match(/https?:\/\/\w+\.radikal\.ru[\w/]+\.(jpg|gif|png)/i)[0]},{u:"||tumblr.com",r:/_500\.jpg/,s:["/_500/_1280/",""]},{u:"||twimg.com/media/",r:/.+?format=(jpe?g|png|gif)/i,s:"$0&name=orig"},{u:"||twimg.com/media/",r:/.+?\.(jpe?g|png|gif)/i,s:"$0:orig"},{u:"||twimg.com/1/proxy",r:/t=([^&_]+)/i,s:r=>atob(r[1]).match(/http.+/)},{u:"||twimg.com/",r:/\/profile_images/i,s:"/_(reasonably_small|normal|bigger|\\d+x\\d+)\\././g"},{u:"||pic.twitter.com/",r:/\.com\/[a-z0-9]+/i,q:r=>r.match(/https?:\/\/twitter\.com\/[^/]+\/status\/\d+\/photo\/\d+/i)[0],follow:!0},{u:"||twitpic.com/",r:/\.com(\/show\/[a-z]+)?\/([a-z0-9]+)($|#)/i,s:"https://twitpic.com/show/large/$2"},{u:"||wiki",r:/\/(?:thumb|images)\/.+\.(?:jpe?g|gif|png|svg)/i,s:r=>r.input.replace(/\/(thumb(?=\/)|\d+px[^/]+(?=$|\?))/g,"").replace(/\/(scale-to-width(-[a-z]+)?\/\d+|(zoom-crop|smart)(\/(width|height)\/\d+)+)/g,"/"),xhr:!hostname.includes("wiki")},{u:"||ytimg.com/vi/",r:/(.+?\/vi\/[^/]+)/,s:"$1/0.jpg",rect:".video-list-item"},{u:"/viewer.php?file=",r:/(.+?)\/viewer\.php\?file=(.+)/,s:"$1/images/$2",xhr:!0},{u:"/thumb_",r:/\/albums.+\/thumb_[^/]/,s:"/thumb_//"},{u:[".th.jp",".th.gif",".th.png"],r:/(.+?\.)th\.(jpe?g?|gif|png|svg|webm)$/i,s:"$1$2",follow:!0},{r:RX_MEDIA_URL})},format(e,{expand:t}={}){const i=Util.stringify(e,null," ");return t?i.replace(/^{\s+/g,"{"):i.replace(/\n\s*/g," ").replace(/^({)\s|\s+(})$/g,"$1$2")},fromElement(e){const t=e.textContent.trim();if(t.startsWith("{")&&t.endsWith("}")&&/[{,]\s*"[degqrsu]"\s*:\s*"/.test(t)){const i=tryJSON(t);return i&&Object.keys(i).some(o=>/^[degqrsu]$/.test(o))&&i}},isValidE2:([e,t])=>e.trim()&&typeof t=="string"&&t.trim(),parse(e){const t=this instanceof Map;try{if(typeof e=="string"&&(e=JSON.parse(e)),"d"in e&&typeof e.d!="string")e.d=void 0;else if(t&&e.d&&!hostname.includes(e.d))return!1;let{e:i}=e;if(i!=null){if(i=typeof i=="string"?i.trim():isArray(i)?i.join(",").trim():Object.entries(i).every(Ruler.isValidE2)&&i,!i)throw new Error('Invalid syntax for "e". Examples: "e": ".image" or "e": [".image1", ".image2"] or "e": {".parent": ".image"} or "e": {".parent1": ".image1", ".parent2": ".image2"}');t&&(e.e=i||void 0)}let o=t?e:{};e.r&&(o.r=new RegExp(e.r,"i")),App.NOP&&(o={});for(const n of Object.keys(FN_ARGS))if(RX_HAS_CODE.test(e[n])){const a=Util.newFunction(...FN_ARGS[n],e[n]);a!==App.NOP||!t?o[n]=a:t&&this.set(e,"unsafe-eval")}return e}catch(i){return t?(this.set(e,i),e):i}},runC(e,t=document){const i=Ruler.runCHandler[typeof ai.rule.c]||Ruler.runCHandler.default;ai.caption=i(e,t)},runCHandler:{function:(e,t)=>ai.rule.c(e||t.documentElement.outerHTML,t,ai.node,ai.rule),string:(e,t)=>{const i=$many(ai.rule.c,t);return i?i.getAttribute("content")||i.getAttribute("title")||i.textContent:""},default:(e,t,i=ai.node)=>(ai.tooltip||0).text||i.alt||$propUp(i,"title")||Req.getFileName(i.tagName===(ai.popup||0).tagName?ai.url:i.src||$propUp(i,"href"))},runQ(e,t,i){let o;if(isFunction(ai.rule.q))o=ai.rule.q(e,t,ai.node,ai.rule),isArray(o)&&(ai.urls=o.slice(1),o=o[0]);else{const n=$many(ai.rule.q,t);o=Req.findImageUrl(n,i)}return o},runE(e,t,i){let o,n,a,l;for(const c in t)if((o=i.closest(c))&&(n=$(t[c],o))){if(n===i)a=!0;else if(l=RuleMatcher.adaptiveFind(n,{rules:[e]}))return l}return a},runS(e,t,i){let o=[],n;for(const a of ensureArray(t.s))o.push(typeof a=="string"?Util.decodeUrl(Ruler.substituteSingle(a,i)):isFunction(a)?a(i,e,t):a);if(t.q&&o.length>1){console.warn(`Rule discarded: "s" array is not allowed with "q"
%o`,t);return}return isArray(n=o[0])&&(n=[o=n][0]),n===""?o:n&&arrayFrom(new Set(o),Util.decodeUrl)},runU(e,t){const i=e[SYM_U]||(e[SYM_U]=UrlMatcher(e.u));return i.fn.call(i.data,t)},substituteSingle(e,t){if(!t||t.input==null)return e;if(e.startsWith("/")&&!e.startsWith("//")){const i=e.search(/[^\\]\//)+1,o=e.lastIndexOf("/"),n=new RegExp(e.slice(1,i),e.slice(o+1));return t.input.replace(n,e.slice(i+1,o))}if(t.length&&e.includes("$")){const i=Math.floor(Math.log10(t.length))+1;e=e.replace(/\$(\d{1,3})/g,(o,n)=>{for(let a=i;a>=0;a--){const l=n.slice(0,a)|0;if(l<t.length)return(t[l]||"")+n.slice(a)}return o})}return e},toggle(e,t,i){return e[t]=i?e[`_${t}`]:null,i}},RuleMatcher={adaptiveFind(e,t){const i=e.tagName,o=e.currentSrc||e.src||"",n=i==="IMG"||i==="VIDEO"&&Util.isVideoUrlExt(o);let a,l,c;if(i!=="A"&&(c=n&&!o.startsWith("data:")&&Util.rel2abs(o),l=RuleMatcher.find(c,e,t)),!l&&(a=e.closest("A"))){const m=a.dataset;c=m.expandedUrl||m.fullUrl||m.url||a.href||"",c=c.includes("//t.co/")?"https://"+a.textContent:c,c=!c.startsWith("data:")&&c,l=RuleMatcher.find(c,a,t)}return!l&&n&&(l={node:e,rule:{},url:o}),l},find(e,t,{noHtml:i,rules:o,skipRules:n}={}){let a,l,c,m;for(const r of o||Ruler.rules){let s,p;if(n&&n.includes(r)||r.u&&(!e||!Ruler.runU(r,e))||!o&&(s=r.e)&&!(p=typeof s=="string"?t.matches(s):Ruler.runE(r,s,t)))continue;if(p&&p.url)return p;const{r:g,s:u}=r;let d=u!=null;if(m=!(i&&r===ai.rule)&&(g||d)&&r.html&&(c||(c=t.outerHTML)),g?p=m?g.exec(m):e&&g.exec(e):(p=[""],p[0]=p.input=m||e||r.g&&location.href||"",p.index=0),!p)continue;if(u==="")return{};if(!d&&!n&&(a?l:l=(a=t.tagName)==="IMG"||a==="VIDEO"))continue;d&=u!=="gallery";const h=d?Ruler.runS(t,r,p):[p.input];if(h)return RuleMatcher.makeInfo(d,r,p,t,n,h)}},makeInfo(e,t,i,o,n,a){let l,c=`${a[0]}`;const m=c&&e&&!t.q&&RuleMatcher.isFollowableUrl(c,t);if(c?c=Util.rel2abs(c):l={},m&&(l=RuleMatcher.find(c,o,{skipRules:[...n||[],t]})),!l&&(!m||RX_MEDIA_URL.test(c))){const r=cfg.xhr&&t.xhr;l={match:i,node:o,rule:t,url:c,urls:a.length>1?a.slice(1):null,gallery:t.g&&Gallery.makeParser(t.g),post:isFunction(t.post)?t.post(i):t.post,xhr:r??(isSecureContext&&!c.startsWith(location.protocol))}}return l},isFollowableUrl(e,t){const i=t.follow;return isFunction(i)?i(e):i}},Req={gmXhr(e,t={}){return ai.req&&tryCatch(ai.req.abort),new Promise((i,o)=>{const{anonymous:n}=ai.rule||{};ai.req=GM.xmlHttpRequest(Object.assign({url:e,anonymous:n,withCredentials:!n,method:"GET",timeout:3e4},t,{onload:a,onerror:a,ontimeout(){ai.req=null,o(`Timeout fetching ${e}`)}}));function a(l){ai.req=null,l.status<400&&!l.error?i(l):o(`Server error ${l.status} ${l.error}
URL: ${e}`)}})},async getDoc(e){if(!e)return{doc,finalUrl:location.href,responseText:doc.documentElement.outerHTML};const t=await(ai.post?Req.gmXhr(e,{method:"POST",data:ai.post,headers:{"Content-Type":"application/x-www-form-urlencoded",Referer:e}}):Req.gmXhr(e));return t.doc=$parseHtml(t.responseText),t},async getImage(e,t,i=ai.xhr){ai.bufBar=!1,ai.bufStart=now();const o=await Req.gmXhr(e,{responseType:"blob",headers:{Accept:"image/png,image/*;q=0.8,*/*;q=0.5",Referer:t||(isFunction(i)?i():e)},onprogress:Req.getImageProgress});Bar.set(!1);const n=Req.guessMimeType(o);let a=o.response;if(!a)throw"Empty response";return a.type!==n&&(a=a.slice(0,a.size,n)),[i==="blob"?ai.blobUrl=URL.createObjectURL(a):await Req.blobToDataUrl(a),n.startsWith("video")]},getImageProgress(e){if(!ai.bufBar&&now()-ai.bufStart>3e3&&e.loaded/e.total<.5&&(ai.bufBar=!0),ai.bufBar){const t=e.loaded/e.total*100|0,i=e.total/1024|0;Bar.set(`${t}% of ${i} kiB`,"xhr")}},async findRedirect(){try{const{finalUrl:e}=await Req.gmXhr(ai.url,{method:"HEAD",headers:{Referer:location.href.split("#",1)[0]}}),t=RuleMatcher.find(e,ai.node,{noHtml:!0});if(!t||!t.url)throw`Couldn't follow redirection target: ${e}`;Object.assign(ai,t),App.startSingle()}catch(e){App.handleError(e)}},async saveFile(){const e=ai.popup.src||ai.popup.currentSrc;let t=Req.getFileName(ai.imageUrl||e);if(t.includes(".")||(t+=".jpg"),e.startsWith("blob:")||e.startsWith("data:"))$new("a",{href:e,download:t}).dispatchEvent(new MouseEvent("click"));else{Status.set("+loading");const i=()=>Status.set("-loading"),o=typeof GM_download=="function";(o?GM_download:GM.xmlHttpRequest)({url:e,name:t,headers:{Referer:e},method:"get",responseType:"blob",overrideMimeType:"application/octet-stream",onerror:n=>{Bar.set(`Could not download ${t}: ${n.error||n.message||n}.`,"error"),i()},onprogress:Req.getImageProgress,onload({response:n}){if(i(),!o){const a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(n),download:t});a.dispatchEvent(new MouseEvent("click")),setTimeout(URL.revokeObjectURL,1e4,a.href)}}})}},getFileName(e){return decodeURIComponent(e).split(/[#?&]/,1)[0].split("/").pop()},blobToDataUrl(e){return new Promise((t,i)=>{const o=new FileReader;o.onload=()=>t(o.result),o.onerror=i,o.readAsDataURL(e)})},guessMimeType({responseHeaders:e,finalUrl:t}){if(/Content-Type:\s*(\S+)/i.test(e)&&!RegExp.$1.includes("text/plain"))return RegExp.$1;switch((Util.extractFileExt(t)||"jpg").toLowerCase()){case"bmp":return"image/bmp";case"gif":return"image/gif";case"jpe":return"image/jpeg";case"jpeg":return"image/jpeg";case"jpg":return"image/jpeg";case"mp4":return"video/mp4";case"png":return"image/png";case"svg":return"image/svg+xml";case"tif":return"image/tiff";case"tiff":return"image/tiff";case"webm":return"video/webm";default:return"application/octet-stream"}},findImageUrl(e,t){if(!e)return;let i;const o=e.getAttribute("data-src")||e.getAttribute("src")||e.getAttribute("data-m4v")||e.getAttribute("href")||e.getAttribute("content")||(i=e.outerHTML).includes("http")&&i.match(/https?:\/\/[^\s"<>]+?\.(jpe?g|gif|png|svg|web[mp]|mp4)[^\s"<>]*|$/i)[0];return!!o&&Util.rel2abs(Util.decodeHtmlEntities(o),$prop("base[href]","href",e.ownerDocument)||t)}},Status={set(e){if(!e&&!cfg.globalStatus){ai.node&&ai.node.removeAttribute(STATUS_ATTR);return}const t=cfg.globalStatus?PREFIX:"",i=e&&/^[+-]/.test(e)&&e[0],o=e&&`${t}${i?e.slice(1):e}`,n=cfg.globalStatus?doc.documentElement:o==="edge"?ai.popup:ai.node;if(!n)return;const a=cfg.globalStatus?"class":STATUS_ATTR,l=(n.getAttribute(a)||"").trim(),c=new Set(l?l.split(/\s+/):[]);switch(i){case"-":c.delete(o);break;case!1:for(const r of c)r.startsWith(t)&&r!==o&&c.delete(r);case"+":o&&c.add(o);break}const m=[...c].join(" ");m!==l&&n.setAttribute(a,m)},loading(e){e?ai.popupLoaded||Status.set("+loading"):(clearTimeout(ai.timerStatus),ai.timerStatus=setTimeout(Status.loading,SETTLE_TIME,!0))}},UrlMatcher=(()=>{const e=/[.+*?(){}[\]^$|]/g,t=/[^\w%._-]/y,i=t.source;return u=>{const d=[];for(const h of ensureArray(u)){const E=h.startsWith("||"),_=!E&&h.startsWith("|"),v=h.endsWith("^");let S,k=h.slice(E*2+_,-v||void 0);if(k.includes("^")){let M="";for(const f of k.split("^"))f.length>M.length&&(M=f);const O=new RegExp((_?"^":"")+(E?"^(([^/:]+:)?//)?([^./]*\\.)*?":"")+k.replace(e,"\\$&").replace(/\\\^/g,i)+(v?`(?:${i}|$)`:""),"i");k=[M,O],S=r}else if(_)S=v?c:s;else if(E){const M=k.indexOf("/"),O=M>0?k.slice(0,M):k;k=[k,O,M>0,v],S=p}else v?S=a:S=m;d.push({fn:S,data:k})}return d.length>1?{fn:o,data:d}:d[0]};function o(u){return this.some(n,u)}function n(u){return u.fn.call(u.data,this)}function a(u){return u.endsWith(this)||u.length>this.length&&u.indexOf(this,u.length-this.length-1)>=0&&l(u)}function l(u,d=u.length-1){return t.lastIndex=d,t.test(u)}function c(u){return u.startsWith(this)&&(u.length===this.length||u.length===this.length+1&&l(u))}function m(u){return u.includes(this)}function r(u){return u.includes(this[0])&&this[1].test(u)}function s(u){return u.startsWith(this)}function p(u){return u.includes(this[0])&&g.call(this,u)}function g(u){let d=u.indexOf("//");if(d&&u[d-1]!==":")return;d=d<0?0:d+2;const h=u.slice(d,(u.indexOf("/",d)+1||u.length+1)-1),[E,_,v,S]=this;let k=v?h.length-_.length:0;for(;;k++){if(k=h.indexOf(_,k),k<0)return;if(!k||h[k-1]===".")break}if(k+=d,u.lastIndexOf(E,k)!==k)return;const M=k+E.length;return!S||M===h.length||M===u.length||l(u,M)}})(),Util={addStyle(e,t){const i=`${PREFIX}style:${e}`,o=doc.getElementById(i)||t&&$new("style",{id:i});if(o)return o.textContent!==t&&(o.textContent=t),o.parentElement!==doc.head&&doc.head.appendChild(o),o},color(e,t=cfg[`ui${e}Opacity`]){return(e.startsWith("#")?e:cfg[`ui${e}Color`])+(256+Math.round(t/100*255)).toString(16).slice(1)},decodeHtmlEntities(e){return e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},decodeUrl(e){if(!e||typeof e!="string")return e;const t=e.indexOf("%"),i=e.indexOf(":");return t>=0&&(t<i||i<0)?decodeURIComponent(e):e},deepEqual(e,t){if(!e||!t||typeof e!="object"||typeof e!=typeof t)return e===t;if(isArray(e))return isArray(t)&&e.length===t.length&&e.every((o,n)=>Util.deepEqual(o,t[n]));const i=Object.keys(e);return i.length===Object.keys(t).length&&i.every(o=>Util.deepEqual(e[o],t[o]))},extractFileExt:e=>(e=RX_MEDIA_URL.exec(e))&&e[1],forceLayout(e){e.clientHeight},formatError(e,t){const i=isArray(e),o=i?e[0]:e.message,{url:n,imageUrl:a}=ai;e=o?e:e.readyState&&"Request failed."||e.type==="error"&&`File can't be displayed.${$('div[bgactive*="flashblock"]',doc)?" Check Flashblock settings.":""}`||e;let l;const c=[l="%c%s%c","font-weight:bold",i?o:e,"font-weight:normal",(l+=`
Node: %o`,ai.node),(l+=`
Rule: %o`,t),n&&(l+=`
URL: %s`,n),a&&a!==n&&(l+=`
File: %s`,a),...i?(l+=e[1],e.slice(2)):[],e.stack].filter(Boolean);return c[0]=l,c.message=o||e,c},getReactChildren(e,t){isFF&&(e=e.wrappedJSObject||e);for(const i of Object.keys(e))if(typeof i=="string"&&i.startsWith("__reactProps"))return(e=e[i].children)&&(t?pick(e,t):e)},isVideoUrl:e=>e.startsWith("data:video")||Util.isVideoUrlExt(e),isVideoUrlExt:e=>(e=Util.extractFileExt(e))&&/^(webm|mp4)$/i.test(e),newFunction(...e){try{return App.NOP||(trustedScript?window.eval(trustedScript(`(function anonymous(${e.slice(0,-1).join(",")}){${e.slice(-1)[0]}})`)):new Function(...e))}catch(t){if(!RX_EVAL_BLOCKED.test(t.message))throw t;return App.NOP=()=>{},App.NOP}},rel2abs(e,t=location.href){try{return/^(data:|blob:|[-\w]+:\/\/)/.test(e)?e:new URL(e,t).href}catch{return e}},stringify(...e){const t=Array.prototype,{toJSON:i}=t;i&&(t.toJSON=null);const o=JSON.stringify(...e);return i&&(t.toJSON=i),o},suppressTooltip(){for(const e of[ai.node.parentNode,ai.node,ai.node.firstElementChild]){const t=(e||0).title;if(t&&t!==e.textContent&&!doc.title.includes(t)&&!/^https?:\S+$/.test(t)){ai.tooltip={node:e,text:t},e.title="";break}}},tabFixUrl(){const{tabfix:e=App.tabfix}=ai.rule;return e&&ai.popup.tagName==="IMG"&&!ai.xhr&&flattenHtml(`data:text/html;charset=utf8,
      <style>
        body {
          margin: 0;
          padding: 0;
          background: #222;
        }
        .fit {
          overflow: hidden
        }
        .fit > img {
          max-width: 100vw;
          max-height: 100vh;
        }
        body > img {
          margin: auto;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
      </style>
      <body class=fit>
        <img onclick="document.body.classList.toggle('fit')" src="${ai.popup.src}">
      </body>
    `).replace(/\x20?([:>])\x20/g,"$1").replace(/#/g,"%23")}};async function setup({rule:e}={}){if(!isFunction(doc.body.attachShadow)){alert(`Cannot show MPIV config dialog: the browser is probably too old.
You can edit the script's storage directly in your userscript manager.`);return}const t=setup.RULE||(setup.RULE=Symbol("rule"));let i,o=(elSetup||0).shadowRoot,{blankRuleElement:n}=setup,a,l=0,c=0,m=0,r=0;const s=setup.UI=new Proxy({},{get(f,y){return o.getElementById(y)}});elSetup||p(),elSetup.parentElement!==doc.body&&(g(await Config.load({save:!0})),doc.body.append(elSetup)),e&&S(e);function p(){elSetup=$new("div",{contentEditable:!0}),o=elSetup.attachShadow({mode:"open"}),o.append(...createSetupElement()),u()}function g(f){i=f,O(),M(),k(),requestAnimationFrame(()=>{s.css.style.minHeight=clamp(s.css.scrollHeight,40,elSetup.clientHeight/4)+"px"})}function u(){s._mover.onmousedown=b=>{b.button||eventModifiers(b)||(a||(a=s._cssSetup.sheet,a.insertRule(":host {}"),a=a.cssRules[1]),addEventListener("mousemove",y,!0),addEventListener("mouseup",w,!0),addEventListener("keydown",x,!0),l=b.x-m,c=b.y-r,$css(a,{opacity:.75}))},s._apply.onclick=s._cancel.onclick=s._ok.onclick=s._x.onclick=d,s._export.onclick=b=>{dropEvent(b),GM.setClipboard(Util.stringify(h(),null,"  ")),s._exportNotification.hidden=!1,setTimeout(()=>s._exportNotification.hidden=!0,1e3)},s._import.onclick=b=>{dropEvent(b);const z=prompt("Paste settings:");z&&g(new Config({data:z}))},s._install.onclick=setupRuleInstaller;const f=s._cssApp;s._reveal.onclick=b=>{b.preventDefault(),f.hidden=!f.hidden,f.hidden||(f.value||(App.updateStyles(),f.value=App.globalStyle.trim(),f.setSelectionRange(0,0)),f.focus())},s.start.onchange=function(){s[PREFIX+"setup"].dataset.start=this.value},s.xhr.onclick=({target:b})=>b.checked||confirm($propUp(b,"title"));for(const b of $$('[type="color"]',o))b.oninput=C,b.elSwatch=b.nextElementSibling,b.elOpacity=s[b.id.replace("Color","Opacity")],b.elOpacity.elColor=b;function y({x:b,y:z}){b=m=clamp(b-l,-innerWidth+CSS_SETUP_X*4,elSetup.clientWidth-CSS_SETUP_X),z=r=clamp(z-c,0,innerHeight-CSS_SETUP_X*3),$css(a,{transform:`translate(${b}px, ${z}px)`}),s._ul.style.maxHeight=`calc(100vh - ${CSS_SETUP_MAX_Y+z-CSS_SETUP_X}px)`}function w(){removeEventListener("mousemove",y,!0),removeEventListener("mouseup",w,!0),removeEventListener("keydown",x,!0),$css(a,{opacity:""})}function x(b){b.key==="Escape"&&!eventModifiers(b)&&(b.stopPropagation(),y({x:l,y:c}),w())}function C(){this.elSwatch.style.setProperty("--color",Util.color(this.value,this.elOpacity.valueAsNumber))}for(const b of $$('[type="range"]',o))b.oninput=L,b.onblur=A,b.addEventListener("focusin",T);function A(b){this.elEdit&&b.relatedTarget!==this.elEdit&&this.elEdit.onblur(b)}function T(){if(this.elEdit)return;const{min:b,max:z,step:q,value:N}=this;this.elEdit=$new("input",{value:N,min:b,max:z,step:q,className:"range-edit",style:`left: ${this.offsetLeft}px; margin-top: ${this.offsetHeight+1}px`,type:"number",elRange:this,onblur:I,oninput:R}),this.insertAdjacentElement("afterend",this.elEdit)}function L(){this.title=(this.dataset.title||"").replace("$",this.value),this.elColor&&this.elColor.oninput(),this.elEdit&&(this.elEdit.valueAsNumber=this.valueAsNumber)}function I(b){b.relatedTarget!==this.elRange&&(this.remove(),this.elRange.elEdit=null)}function R(){this.elRange.valueAsNumber=this.valueAsNumber,this.elRange.oninput()}o.addEventListener("keydown",b=>!b.altKey&&!b.metaKey&&b.stopPropagation(),!0)}function d(f){const y=this.id==="_apply";if(f&&(this.id==="_ok"||y)&&(cfg=i=h({save:!0,clone:y}),Ruler.init(),Menu.reRegisterAlt(),y))return M();$remove(elSetup),elSetup=null}function h({save:f,clone:y}={}){let w={};for(const x of $$("input[id], select[id]",o))w[x.id]=x.type==="checkbox"?x.checked:x.type==="number"||x.type==="range"?x.valueAsNumber:x.value||"";return Object.assign(w,{css:s.css.value.trim(),delay:s.delay.valueAsNumber*1e3,hosts:E(),scale:clamp(s.scale.valueAsNumber/100,0,1)+1,scales:s.scales.value.trim().split(/[,;]*\s+/).map(x=>x.replace(",",".")).filter(x=>!isNaN(parseFloat(x)))}),y&&(w=JSON.parse(Util.stringify(w))),new Config({data:w,save:f})}function E(){return[...s._rules.children].map(f=>[f.value.trim(),f[t]]).sort((f,y)=>f[0]<y[0]?-1:f[0]>y[0]?1:0).map(([f,y])=>y||f).filter(Boolean)}function _({target:f}){let y,w,x;const C=f.previousElementSibling;if(f.value){y=Ruler.parse(f.value),w=y instanceof Error&&(y.message||String(y));const A=!w&&y&&typeof y.d=="string"&&!/^[-.a-z0-9]*$/i.test(y.d);x=[A&&'Disabled due to invalid characters in "d"',w].filter(Boolean).join(`
`),f.classList.toggle("invalid-domain",A),f.classList.toggle("matching-domain",!!y.d&&hostname.includes(y.d)),C||f.insertAdjacentElement("beforebegin",n.cloneNode())}else C&&(C.focus(),f.remove());f[t]=!w&&y,f.title=x,f.setCustomValidity(w||"")}async function v({target:f,relatedTarget:y}){if(f!==this){if(await new Promise(setTimeout),f[t]&&f.rows<2){let w=f.selectionStart;const x=f.value=Ruler.format(f[t],{expand:!0});w+=x.slice(0,w).match(/^\s*/gm).reduce((C,A)=>C+A.length,0),f.setSelectionRange(w,w),f.rows=x.match(/^/gm).length}this.contains(y)||(y=[...$$('[style*="height"]',this)].find(w=>w!==f))}}function S(f){const y=s._rules.children;let w=[...y].find(C=>Util.deepEqual(C[t],f));if(!w){w=y[0],w[t]=f,w.value=Ruler.format(f),w.hidden=!1;const C=Math.max(0,E().indexOf(f));y[C].insertAdjacentElement("afterend",w),y[0].insertAdjacentElement("beforebegin",n.cloneNode())}const x=w.getBoundingClientRect();(x.bottom<0||x.bottom>w.parentNode.offsetHeight)&&w.scrollIntoView(),w.classList.add("highlight"),w.addEventListener("animationend",()=>w.classList.remove("highlight"),{once:!0}),w.focus()}function k(){const f=s._rules;f.addEventListener("input",_),f.addEventListener("focusin",v),f.addEventListener("paste",v),n=setup.blankRuleElement=setup.blankRuleElement||f.firstElementChild.cloneNode(),n.nextElementSibling&&(f.textContent="",f.appendChild(n.cloneNode()));for(const w of i.hosts||[]){const x=n.cloneNode();x.value=typeof w=="string"?w:Ruler.format(w),f.appendChild(x),_({target:x})}const y=s._search;y.oninput=()=>{setup.search=y.value;const w=y.value.toLowerCase();for(const x of f.children)x.hidden=w&&!x.value.toLowerCase().includes(w)},y.value=setup.search||"",y.value&&y.oninput()}function M(){s.scales.value=i.scales.join(" ").trim()||Config.DEFAULTS.scales.join(" "),s._css.textContent=cfg._getCss()}function O(){for(const f of $$("input[id], select[id], textarea[id]",o))f.id in i&&(f[f.type==="checkbox"?"checked":"value"]=i[f.id]);for(const f of $$('input[type="range"]',o))f.oninput();for(const f of $$('a[href^="http"]',o))Object.assign(f,{target:"_blank",rel:"noreferrer noopener external"});s.delay.valueAsNumber=i.delay/1e3,s.scale.valueAsNumber=Math.round(clamp(i.scale-1,0,1)*100),s.start.onchange()}}function setupClickedRule(e){let t;const i=e.target.closest("blockquote, code, pre");i&&!e.button&&!eventModifiers(e)&&(t=Ruler.fromElement(i))&&(dropEvent(e),setup({rule:t}))}async function setupRuleInstaller(e){dropEvent(e);const t=setup.UI._rules2;this.disabled=!0,this.textContent="Loading...";let i;try{i=o(await Req.getDoc(this.parentElement.href)),this.textContent="Rules loaded.";const m=$new("select",{size:8,style:"width: 100%",ondblclick:s=>s.target!==m&&c(s),onkeyup:s=>s.key==="Enter"&&c(s)},i.map(a)),r=m.selectedIndex=n();t.append($new("div#_installHint",["Double-click the rule (or select and press Enter) to add it. ","Click ",$new("code","Apply")," or ",$new("code","OK")," to confirm."]),m),r&&requestAnimationFrame(()=>{const s=m.selectedOptions[0].offsetTop-m.offsetTop;m.scrollTo(0,s-m.offsetHeight/2)}),m.focus()}catch(m){t.textContent="Error loading rules: "+(m.message||m)}function o({doc:m}){return[...$$("#wiki-body tr",m)].map(r=>[r.cells[0].textContent.trim(),Ruler.fromElement(r.cells[1])]).filter(([r,s])=>r&&s&&(!s.d||hostname.includes(s.d))).sort(([r],[s])=>(r=r.toLowerCase())<(s=s.toLowerCase())?-1:r>s?1:0)}function n(){const m=`.${hostname}.`;let r=0,s=0,p=0;for(const[g,{d:u}]of i){let d=!!(u&&hostname.includes(u))*10;for(const h of g.toLowerCase().split(/[^a-z\d.-]+/i))d+=m.includes(`.${h}.`)&&h.length;d>r&&(r=d,s=p),p++}return s}function a([m,r]){return $new("option",{textContent:m,title:Ruler.format(r,{expand:!0}).replace(/^{|\s*}$/g,"").split(`
`).slice(0,12).map(l).filter(Boolean).join(`
`)})}function l(m,r,s){return r===9&&s.length>10?"...":r>10?"":(m.length>100?m.slice(0,100)+"...":m).replace(/^\s/,"")}function c(m){eventModifiers(m)||setup({rule:i[m.currentTarget.selectedIndex][1]})}}const CSS_SETUP_X=20,CSS_SETUP_MAX_Y=200,CSS_SETUP=`
  :host {
    all: initial !important;
    position: fixed !important;
    z-index: 2147483647 !important;
    top: ${CSS_SETUP_X}px !important;
    right: 20px !important;
    padding: 1.5em !important;
    color: #000 !important;
    --bg: #eee;
    background: var(--bg) !important;
    box-shadow: 5px 5px 25px 2px #000 !important;
    width: 33em !important;
    border: 1px solid black !important;
    display: flex !important;
    flex-direction: column !important;
  }
  main {
    font: 12px/15px sans-serif;
  }
  main:not([data-start=auto]) [data-start-auto] {
    opacity: .5;
  }
  table {
    text-align:left;
  }
  ul {
    min-height: 430px;
    max-height: calc(100vh - ${CSS_SETUP_MAX_Y}px);
    margin: 0 0 15px 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0;
    padding: .25em 0;
  }
  li.options {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li.row {
    align-items: start;
    flex-wrap: wrap;
  }
  li.row label {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li.row input {
    margin-right: .25em;
  }
  li.stretch label {
    flex: 1;
    white-space: nowrap;
  }
  li.stretch label > span {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  label {
    display: inline-flex;
    flex-direction: column;
  }
  label:not(:last-child) {
    margin-right: 1em;
  }
  input, select {
    min-height: 1.3em;
    box-sizing: border-box;
  }
  input[type=checkbox] {
    margin-left: 0;
  }
  input[type=number] {
    width: 4em;
  }
  input:not([type=checkbox])  {
    padding: 0 .25em;
  }
  input[type=range] {
    flex: 1;
    width: 100%;
    margin: 0 .25em;
    padding: 0;
    filter: saturate(0);
    opacity: .5;
  }
  u + input[type=range] {
    max-width: 3em;
  }
  input[type=range]:hover {
    filter: none;
    opacity: 1;
  }
  input[type=color] {
    position: absolute;
    width: calc(1.5em + 2px);
    opacity: 0;
    cursor: pointer;
  }
  u {
    position: relative;
    flex: 0 0 1.5em;
    height: 1.5em;
    border: 1px solid #888;
    pointer-events: none;
    color: #888;
    background-image:
      linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%),
      linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%);
    background-size: .5em .5em;
    background-position: 0 0, .25em .25em;
  }
  u::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-color: var(--color);
  }
  .range-edit {
    position: absolute;
    box-shadow: 0 0.25em 1em #000;
    z-index: 99;
  }
  textarea {
    resize: vertical;
    margin: 1px 0;
    font: 11px/1.25 Consolas, monospace;
  }
  :invalid {
    background-color: #f002;
    border-color: #800;
  }
  code {
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: LinkText;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    padding: .2em .5em;
    margin-right: 1em;
  }
  kbd {
    padding: 1px 6px;
    font-weight: bold;
    font-family: Consolas, monospace;
    border: 1px solid #888;
    border-radius: 3px;
    box-shadow: inset 1px 1px 5px #8888, .25px .5px 2px #0008;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .flex {
    display: flex;
  }
  .highlight {
    animation: 2s fade-in cubic-bezier(0, .75, .25, 1);
    animation-fill-mode: both;
  }
  #_rules > * {
    word-break: break-all;
  }
  #_rules > :not(:focus) {
    overflow: hidden; /* prevents wrapping in FF */
  }
  .invalid-domain {
    opacity: .5;
  }
  .matching-domain {
    border-color: #56b8ff;
    background: #d7eaff;
  }
  #_mover {
    cursor: move;
    user-select: none;
    position: absolute;
    top: 0;
    left: 8px;
    right: 24px;
    height: 24px;
    text-align: center;
    background: linear-gradient(transparent 10px, currentColor 10px, currentColor 11px, transparent 11px,
      transparent 13px, currentColor 13px, currentColor 14px, transparent 14px);
  }
  #_mover::after {
    content: 'MPIV ${GM.info.script.version}';
    font: bold 20px/1.3 sans;
    background: var(--bg);
    padding: 0 1ex;
  }
  #_x {
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px 8px;
    cursor: pointer;
    user-select: none;
  }
  #_x:hover {
    background-color: #8884;
  }
  #_cssApp {
    color: seagreen;
  }
  #_exportNotification {
    color: green;
    font-weight: bold;
    position: absolute;
    bottom: 4px;
    right: 26px;
  }
  #_installHint {
    color: green;
  }
  #_usage {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1em;
  }
  #_usage th {
    font-weight: normal;
    padding-right: .5em;
  }
  #_usage tr:nth-last-child(n + 2) > :not(br) {
    white-space: pre-line;
    border-bottom: 1px dotted #8888;
  }
  #_usage kbd {
    font-family: monospace;
    font-weight: bold;
  }
  @keyframes fade-in {
    from { background-color: deepskyblue }
    to {}
  }
  @media (prefers-color-scheme: dark) {
    :host {
      color: #aaa !important;
      --bg: #333 !important;
    }
    a {
      color: deepskyblue;
    }
    button {
      background: linear-gradient(-5deg, #333, #555);
      border: 1px solid #000;
      box-shadow: 0 2px 6px #181818;
      border-radius: 3px;
      cursor: pointer;
    }
    button:hover {
      background: linear-gradient(-5deg, #333, #666);
    }
    textarea, input, select {
      background: #111;
      color: #BBB;
      border: 1px solid #555;
    }
    input[type=checkbox] {
      filter: invert(1);
    }
    input[type=range] {
      filter: invert(1) saturate(0);
    }
    input[type=range]:hover {
      filter: invert(1);
    }
    kbd {
      border-color: #666;
    }
    @supports (-moz-appearance: none) {
      input[type=checkbox],
      input[type=range],
      input[type=range]:hover {
        filter: none;
      }
    }
    .range-edit {
      box-shadow: 0 .5em 1em .5em #000;
    }
    .matching-domain {
      border-color: #0065af;
      background: #032b58;
      color: #ddd;
    }
    #_cssApp {
      color: darkseagreen;
    }
    #_installHint {
      color: greenyellow;
    }
    ::-webkit-scrollbar {
      width: 14px;
      height: 14px;
      background: #333;
    }
    ::-webkit-scrollbar-button:single-button {
      background: radial-gradient(circle at center, #555 40%, #333 40%)
    }
    ::-webkit-scrollbar-track-piece {
      background: #444;
      border: 4px solid #333;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      border: 3px solid #333;
      border-radius: 8px;
      background: #666;
    }
    ::-webkit-resizer {
      background: #111 linear-gradient(-45deg, transparent 3px, #888 3px, #888 4px, transparent 4px, transparent 6px, #888 6px, #888 7px, transparent 7px) no-repeat;
      border: 2px solid transparent;
    }
  }
`;function createSetupElement(){const e="https://github.com/tophf/mpiv/wiki/",t="Leave it empty and click Apply or OK to restore the default values.",i=(s,p,g)=>$new("a",Object.assign({target:"_blank"},p&&{href:p},g),s),o=(s,p,g="",u)=>$new("label",Object.assign({title:g},u),[$new("input",{id:p,type:"checkbox"}),s]),n=s=>s[0]==="{"?$new("kbd",s.slice(1,-1)):s,a=(s,p="",g=0,u=100,d=1,h="range")=>$new("input",{id:s,min:g,max:u,step:d,type:h,"data-title":p}),l=(s,p,g)=>$new("label",[s,$new("select",{id:p},Object.entries(g).map(([u,d])=>$new("option",Object.assign({value:u},typeof d=="object"?d:{textContent:d}))))]),c=([s,p])=>$new("tr",s?[$new("th",((s=s.split(/(\n)/))[0]=$new("b",s[0]))&&s),$new("td",p.split(/({.+?})/).map(n))]:$new("br")),m='...when the "popup shows" option is "automatically"',r={"data-start-auto":""};return[$new("style#_cssSetup",CSS_SETUP),$new("style#_css"),$new(`main#${PREFIX}setup`,[$new("#_mover"),$new("#_x","x"),$new("ul#_ul.column",[$new("details",{style:"order:1; padding-top: .5em;"},[$new("summary",{style:"cursor: pointer"},$new("b","Help & hotkeys...")),$new("#_usage",[$new("table",[["Activate","hover the target"],["Deactivate","move cursor off target, or click, or zoom out fully"],["Ignore target","hold {Shift} \u23F5 hover the target \u23F5 release the key"],["Freeze popup","hold {Shift} \u23F5 leave the target \u23F5 release the key"],[`Force-activate
(videos or small pics)`,"hold {Ctrl} \u23F5 hover the target \u23F5 release the key"]].map(c)),$new("table",[["Start zooming",`configurable (automatic or via right-click)
or tap {Shift} while popup is visible`],["Zoom","mouse wheel"],[],["Rotate",'{L} {r} for "left" or "right"'],["Flip/mirror",'{h} {v} for "horizontal" or "vertical"'],[`Previous/next
(in album)`,"mouse wheel, {j} {k} or {\u2190} {\u2192} keys"]].map(c)),$new("table",[["Antialiasing","{a}"],["Caption in info","{c}"],["Download","{d}"],["Fullscreen","{f}"],["Info","{i}"],["Mute","{m}"],["Night mode","{n}"],["Open in tab","{t}"]].map(c))])]),$new("li.options.stretch",[l("Popup shows on","start",{context:"Right-click / \u2261 / Ctrl",contextMK:"Right-click / \u2261",contextM:"Right-click",contextK:{textContent:"\u2261 key",title:"\u2261 is the Menu key (near the right Ctrl)"},ctrl:"Ctrl",auto:"automatically"}),$new("label",{title:m,...r},["after, sec",a("delay","seconds",.05,10,.05,"number")]),$new("label",{title:"(if the full version of the hovered image is ...% larger)"},["if larger, %",a("scale",null,0,100,1,"number")]),l("Zoom activates on","zoom",{context:"Right click / Shift",wheel:"Wheel up / Shift",shift:"Shift",auto:"automatically"}),l("...and zooms to","fit",{all:"fit to window",large:"fit if larger",no:"100%","":{textContent:"custom",title:"Use custom scale factors"}})]),$new("li.options",[$new("label",["Zoom step, %",a("zoomStep",null,100,400,1,"number")]),l("When fully zoomed out:","zoomOut",{stay:"stay in zoom mode",auto:"stay if still hovered",unzoom:"undo zoom mode",close:"close popup"}),$new("label",{style:"flex: 1",title:`
              Scale factors to use when \u201Czooms to\u201D selector is set to \u201Ccustom\u201D.
              0 = fit to window,
              0! = same as 0 but also removes smaller values,
              * after a value marks the default zoom factor, for example: 1*
              The popup won't shrink below the image's natural size or window size for bigger mages.
              ${t}
            `.trim().replace(/\n\s+/g,"\r")},["Custom scale factors:",$new("input#scales",{placeholder:t})])]),$new("li.options.row",[$new([o("Centered*","center","...or try to keep the original link/thumbnail unobscured by the popup"),o("Preload on hover*","preload","Provides smoother experience but increases network traffic"),o("Require Ctrl key for video*","videoCtrl",m,r),o("Mute videos*","mute",'Hotkey: "m" in the popup'),o("Keep playing video*","keepVids","...until you press Esc key or click elsewhere"),o("Keep preview on blur*","keepOnBlur","i.e. when mouse pointer moves outside the page")]),$new([o("Show complete image*","waitLoad","...or immediately show a partial image while still loading"),o("Shadow only when complete*","uiShadowOnLoad","...to avoid showing the semi-transparent background while still loading from a slow site"),$new("div.flex",{style:"align-items:center"},[o("Info: show for","uiInfo",'Hotkey: "i" (or hold "Shift") in the popup'),$new("input#uiInfoHide",{min:1,step:"any",type:"number"}),"sec"]),o("Info: only once*","uiInfoOnce","...or every time the info changes"),o("Info: caption*","uiInfoCaption",'Hotkey: "c" in the popup'),o("Fade-in transition","uiFadein"),o("Fade-in transition in gallery","uiFadeinGallery")]),$new([o("Night mode*","night",'Hotkey: "n" in the popup'),o("Run in image tabs","imgtab"),o("Spoof hotlinking*","xhr","Disable only if you spoof the HTTP headers yourself"),o("Set status on <html>*","globalStatus","Causes slowdowns so don't enable unless you explicitly use it in your custom CSS"),o("Auto-start switch in menu*","startAltShown","Show a switch for 'auto-start' mode in userscript manager menu")])]),$new("li.options.stretch",[$new("label",["Background",$new("span",[$new("input#uiBackgroundColor",{type:"color"}),$new("u"),a("uiBackgroundOpacity","Opacity: $%")])]),$new("label",["Border color, opacity, size",$new("span",[$new("input#uiBorderColor",{type:"color"}),$new("u"),a("uiBorderOpacity","Opacity: $%"),a("uiBorder","Border size: $px",0,20)])]),$new("label",["Shadow color, opacity, size",$new("span",[$new("input#uiShadowColor",{type:"color"}),$new("u"),a("uiShadowOpacity","Opacity: $%"),a("uiShadow",`Shadow blur radius: $px
"0" disables the shadow.`,0,20)])]),$new("label",["Padding",$new("span",a("uiPadding","Padding: $px"))]),$new("label",["Margin",$new("span",a("uiMargin","Margin: $px"))])]),$new("li",[i("Custom CSS:",`${e}Custom-CSS`)," e.g. ",$new("b","#mpiv-popup { animation: none !important }"),i("View the built-in CSS","",{id:"_reveal",tabIndex:0,style:"float: right",title:"You can copy parts of it to override them in your custom CSS"}),$new(".column",[$new("textarea#css",{spellcheck:!1}),$new("textarea#_cssApp",{spellcheck:!1,hidden:!0,readOnly:!0,rows:30})])]),$new("li.flex",{style:"justify-content: space-between;"},[$new("div",i("Custom host rules:",`${e}Custom-host-rules`)),$new("div",{style:"white-space: pre-line"},["To disable, put any symbol except ",$new("code","a..z 0..9 - ."),`
in "d" value, for example `,$new("code",'"d": "!foo.com"')]),$new("div",$new("input#_search",{type:"search",placeholder:"Search",style:"width: 10em; margin-left: 1em"}))]),$new("li",{style:"margin-left: -3px; margin-right: -3px; overflow-y: auto; padding-left: 3px; padding-right: 3px;"},[$new("div#_rules.column",$new("textarea",{spellcheck:!1,rows:1}))]),$new("li#_rules2")]),$new("div.flex",[$new("button#_ok",{accessKey:"o"},"OK"),$new("button#_apply",{accessKey:"a"},"Apply"),$new("button#_cancel","Cancel"),$new("a",{href:`${e}Rules`,style:"margin: 0 auto"},$new("button#_install",{style:"color: inherit"},"Find rule...")),$new("button#_import","Import"),$new("button#_export",{style:"margin: 0"},"Export"),$new("div#_exportNotification",{hidden:!0},"Copied to clipboard")])])]}function createGlobalStyle(){return App.globalStyle=(String.raw`
#\mpiv-bar {
  position: fixed;
  z-index: 2147483647;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bold;
  background: #0005;
  color: white;
  padding: 4px 10px;
  text-shadow: .5px .5px 2px #000;
  transition: opacity 1s ease .25s;
  opacity: 0;
}
#\mpiv-bar[data-force] {
  transition: none;
}
#\mpiv-bar.\mpiv-show {
  opacity: 1;
}
#\mpiv-bar[data-zoom][data-prefix]::before {
  content: "[" attr(data-prefix) "] ";
  color: gold;
}
#\mpiv-bar[data-zoom]:not(:empty)::after {
  content: " (" attr(data-zoom) ")";
  opacity: .8;
}
#\mpiv-bar[data-zoom]:empty::after {
  content: attr(data-zoom);
}
#\mpiv-popup.\mpiv-show {
  display: inline;
}
#\mpiv-popup {
  display: none;
  cursor: none;
  box-shadow: none;
${cfg.uiFadein?String.raw`
  animation: .2s \mpiv-fadein both;
  transition: box-shadow .25s, background-color .25s;
  `:""}
${App.popupStyleBase=`
  border: none;
  box-sizing: border-box;
  background-size: cover;
  position: fixed;
  z-index: 2147483647;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  transform-origin: center;
  max-width: none;
  max-height: none;
`}
}
#\mpiv-popup.\mpiv-show {
  ${cfg.uiBorder?`border: ${cfg.uiBorder}px solid ${Util.color("Border")};`:""}
  ${cfg.uiPadding?`padding: ${cfg.uiPadding}px;`:""}
  ${cfg.uiMargin?`margin: ${cfg.uiMargin}px;`:""}
}
#\mpiv-popup.\mpiv-show${cfg.uiShadowOnLoad?"[loaded]":""} {
  background-color: ${Util.color("Background")};
  ${cfg.uiShadow?`box-shadow: 2px 4px ${cfg.uiShadow}px 4px ${Util.color("Shadow")};`:""}
}
#\mpiv-popup[data-gallery-flip] {
  animation: none;
  transition: none;
}
#\mpiv-popup[${NOAA_ATTR}],
#\mpiv-popup.\mpiv-zoom-max {
  image-rendering: pixelated;
}
#\mpiv-popup.\mpiv-night:not(#\\0) {
  box-shadow: 0 0 0 ${Math.max(screen.width,screen.height)}px #000;
}
body:has(#\mpiv-popup.\mpiv-night)::-webkit-scrollbar {
  background: #000;
}
#\mpiv-setup {
}
@keyframes \mpiv-fadein {
  from {
    opacity: 0;
    border-color: transparent;
  }
  to {
    opacity: 1;
  }
}
`+(cfg.globalStatus?String.raw`
:root.\mpiv-loading:not(.\mpiv-preloading) *:hover {
  cursor: progress !important;
}
:root.\mpiv-edge #\mpiv-popup {
  cursor: default;
}
:root.\mpiv-error *:hover {
  cursor: not-allowed !important;
}
:root.\mpiv-ready *:hover,
:root.\mpiv-large *:hover {
  cursor: zoom-in !important;
}
:root.\mpiv-shift *:hover {
  cursor: default !important;
}
`:String.raw`
[\mpiv-status~="loading"]:not([\mpiv-status~="preloading"]):hover {
  cursor: progress;
}
[\mpiv-status~="edge"]:hover {
  cursor: default;
}
[\mpiv-status~="error"]:hover {
  cursor: not-allowed;
}
[\mpiv-status~="ready"]:hover,
[\mpiv-status~="large"]:hover {
  cursor: zoom-in;
}
[\mpiv-status~="shift"]:hover {
  cursor: default;
}
`)).replace(/\\mpiv-status/g,STATUS_ATTR).replace(/\\mpiv-/g,PREFIX),App.popupStyleBase=App.popupStyleBase.replace(/;/g,"!important;"),App.globalStyle}const clamp=(e,t,i)=>e<t?t:e>i?i:e,compareNumbers=(e,t)=>e-t,flattenHtml=e=>e.trim().replace(/\n\s*/g,""),dropEvent=e=>(e.preventDefault(),e.stopPropagation()),ensureArray=e=>isArray(e)?e:[e],eventModifiers=e=>(e.altKey?"!":"")+(e.ctrlKey?"^":"")+(e.metaKey?"#":"")+(e.shiftKey?"+":""),describeKey=e=>eventModifiers(e)+(e.key&&e.key.length>1?e.key:e.code),isFunction=e=>typeof e=="function",isVideo=e=>e&&e.tagName==="VIDEO",now=performance.now.bind(performance),sumProps=(...e)=>{let t=0;for(const i of e)t+=parseFloat(i)||0;return t},tryCatch=(e,...t)=>{try{return e(...t)}catch{}},tryJSON=e=>tryCatch(JSON.parse,e),pick=(e,t,i)=>{if(e&&t)for(const o of t.split("."))if(e)e=e[o];else break;return i&&e!==void 0?i(e):e},$=(e,t=doc)=>t.querySelector(e)||!1,$$=(e,t=doc)=>t.querySelectorAll(e),$new=(e,t,i)=>{typeof e!="string"&&(i=t,t=e,e=""),!i&&t!=null&&{}.toString.call(t)!=="[object Object]"&&(i=t,t=null);const o=e==="fragment",[,n,a,l]=e.match(/^(\w*)(?:#([^.]+))?(?:\.(.+))?$/),c=o?doc.createDocumentFragment():doc.createElement(n||"div");if(a&&(c.id=a),l&&(c.className=l.replace(/\./g," ")),t)for(const[m,r]of Object.entries(t))m.startsWith("data-")?r!=null&&c.setAttribute(m,r):c[m]=r;return i!=null&&(isArray(i)?c.append(...i.filter(Boolean)):i instanceof Node?c.appendChild(i):c.textContent=i),c},$css=(e,t)=>Object.entries(t).forEach(([i,o])=>e.style.setProperty(i,o,"important")),$parseHtml=e=>new DOMParser().parseFromString(e,"text/html"),$many=(e,t)=>{for(const i of ensureArray(e)){const o=i&&$(i,t);if(o)return o}},$prop=(e,t,i=doc)=>(i=$(e,i))&&i[t]||"",$propUp=(e,t)=>(e=e.closest(`[${t}]`))&&(t.startsWith("data-")?e.getAttribute(t):e[t])||"",$remove=e=>e&&e.remove(),$dataset=({dataset:e},t,i)=>i==null?delete e[t]:e[t]=i;if((async()=>{cfg=await Config.load({save:!0}),doc.body||await new Promise(t=>new MutationObserver((i,o)=>doc.body&&(o.disconnect(),t())).observe(document,{subtree:!0,childList:!0}));const e=doc.body.firstElementChild;e&&(App.isImageTab=e===doc.body.lastElementChild&&e.matches("img, video"),App.isEnabled=cfg.imgtab||!App.isImageTab),Menu&&Menu.register(),addEventListener("mouseover",Events.onMouseOver,!0),addEventListener("contextmenu",Events.onContext,!0),addEventListener("keydown",Events.onKeyDown,!0),addEventListener("visibilitychange",Events.onVisibility,!0),addEventListener("blur",Events.onVisibility,!0),["greasyfork.org","github.com"].includes(hostname)&&addEventListener("click",setupClickedRule,!0),addEventListener("message",App.onMessage,!0)})(),window.trustedTypes){const e=window.trustedTypes,t="createPolicy",i=e[t];e[t]=function o(n,a){let l;const c=i.call(e,n,a);return(trustedHTML||a[l="createHTML"]&&(trustedHTML=c[l].bind(c)))&&(trustedScript||a[l="createScript"]&&(trustedScript=c[l].bind(c)))&&e[t]===o&&delete e[t],c}}
