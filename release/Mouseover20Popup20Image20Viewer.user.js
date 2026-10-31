// ==UserScript==
// @name        Mouseover Popup Image Viewer
// @namespace   https://github.com/tophf
//
// @include     *
// @run-at      document-start
//
// @grant       GM_addElement
// @grant       GM_addStyle
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
// @version     1.4.22
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
"use strict";var cfg,ai={rule:{}},elSetup,nonce,timerProgress,trustedHTML,trustedScript,setCfg=e=>cfg=e,setAi=e=>ai=e,setElSetup=e=>elSetup=e,setNonce=e=>nonce=e,setTimerProgress=e=>timerProgress=e,setTrustedHTML=e=>trustedHTML=e,setTrustedScript=e=>trustedScript=e,doc=document,hostname=location.hostname,dotDomain="."+hostname,isFF=CSS.supports("-moz-appearance","none"),{AudioContext=function(){}}=window,{from:arrayFrom,isArray}=Array,PREFIX="mpiv-",NOAA_ATTR="data-no-aa",STATUS_ATTR=`${PREFIX}status`,MSG=Object.assign({},...["getViewSize","viewSize"].map(e=>({[e]:`${PREFIX}${e}`}))),WHEEL_EVENT="onwheel"in doc?"wheel":"mousewheel",SETTLE_TIME=50,RX_HAS_CODE=/(^|[^-\w])return[\W\s]/,RX_EVAL_BLOCKED=/'Trusted(Script| Type)'|unsafe-eval/,RX_IMAGE_URL=/https?:\/\/[^\s"<>]+?\.(jpe?g|gif|png|svg|web[mp]|mp4)[^\s"<>]*|$/i,RX_MEDIA_URL=/^(?!data:)[^?#]+?\.(avif|bmp|jpe?g?|gif|mp4|png|svgz?|web[mp])($|[?#])/i,BLANK_PIXEL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ZOOM_MAX=16,SYM_U=Symbol("u"),FN_ARGS={s:["m","node","rule"],c:["text","doc","node","rule"],q:["text","doc","node","rule"],g:["text","doc","url","m","rule","node","cb"]},clamp=(e,t,o)=>e<t?t:e>o?o:e,compareNumbers=(e,t)=>e-t,flattenHtml=e=>e.trim().replace(/\n\s*/g,""),dropEvent=e=>(e.preventDefault(),e.stopPropagation()),ensureArray=e=>isArray(e)?e:[e],eventModifiers=e=>(e.altKey?"!":"")+(e.ctrlKey?"^":"")+(e.metaKey?"#":"")+(e.shiftKey?"+":""),describeKey=e=>eventModifiers(e)+(e.key&&e.key.length>1?e.key:e.code),isFunction=e=>typeof e=="function",isVideo=e=>e&&e.tagName==="VIDEO",now=performance.now.bind(performance),sumProps=(...e)=>{let t=0;for(const o of e)t+=parseFloat(o)||0;return t},tryCatch=(e,...t)=>{try{return e(...t)}catch{}},tryJSON=e=>tryCatch(JSON.parse,e),pick=(e,t,o)=>{if(e&&t)for(const i of t.split("."))if(e)e=e[i];else break;return o&&e!==void 0?o(e):e},$=(e,t=doc)=>t.querySelector(e)||!1,$$=(e,t=doc)=>t.querySelectorAll(e),$new=(e,t,o)=>{typeof e!="string"&&(o=t,t=e,e=""),!o&&t!=null&&{}.toString.call(t)!=="[object Object]"&&(o=t,t=null);const i=e==="fragment",[,r,l,c]=e.match(/^(\w*)(?:#([^.]+))?(?:\.(.+))?$/),s=i?doc.createDocumentFragment():doc.createElement(r||"div");if(l&&(s.id=l),c&&(s.className=c.replace(/\./g," ")),t)for(const[u,n]of Object.entries(t))u.startsWith("data-")?n!=null&&s.setAttribute(u,n):s[u]=n;return o!=null&&(isArray(o)?s.append(...o.filter(Boolean)):o instanceof Node?s.appendChild(o):s.textContent=o),s},$css=(e,t)=>Object.entries(t).forEach(([o,i])=>e.style.setProperty(o,i,"important")),$parseHtml=e=>new DOMParser().parseFromString(e,"text/html"),$many=(e,t)=>{for(const o of ensureArray(e)){const i=o&&$(o,t);if(i)return i}},$prop=(e,t,o=doc)=>(o=$(e,o))&&o[t]||"",$propUp=(e,t)=>(e=e.closest(`[${t}]`))&&(t.startsWith("data-")?e.getAttribute(t):e[t])||"",$remove=e=>e&&e.remove(),$dataset=({dataset:e},t,o)=>o==null?delete e[t]:e[t]=o,api=typeof GM<"u"&&GM.xmlHttpRequest?GM:{__proto__:null,info:GM_info};api.getValue||(api.getValue=GM_getValue),api.setValue||(api.setValue=GM_setValue),api.openInTab||(api.openInTab=GM_openInTab),!api.registerMenuCommand&&typeof GM_registerMenuCommand=="function"&&(api.registerMenuCommand=GM_registerMenuCommand),!api.unregisterMenuCommand&&typeof GM_unregisterMenuCommand=="function"&&(api.unregisterMenuCommand=GM_unregisterMenuCommand),api.setClipboard||(api.setClipboard=GM_setClipboard),api.xmlHttpRequest||(api.xmlHttpRequest=GM_xmlhttpRequest);var info=api.info,getValue=api.getValue.bind(api),setValue=api.setValue.bind(api),openInTab=api.openInTab.bind(api),setClipboard=api.setClipboard.bind(api),xmlHttpRequest=api.xmlHttpRequest.bind(api),registerMenuCommand=api.registerMenuCommand&&api.registerMenuCommand.bind(api),unregisterMenuCommand=api.unregisterMenuCommand&&api.unregisterMenuCommand.bind(api),styles={__proto__:null};function addStyle(e,t){const o=styles[e]||t&&(styles[e]=typeof GM_addStyle=="function"?GM_addStyle(t):doc.head.appendChild($new("style",t)));if(o)return o.textContent!==t&&(o.textContent=t),o}function color(e,t=cfg[`ui${e}Opacity`]){return(e.startsWith("#")?e:cfg[`ui${e}Color`])+(256+Math.round(t/100*255)).toString(16).slice(1)}function decodeHtmlEntities(e){return e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}function decodeUrl(e){if(!e||typeof e!="string")return e;const t=e.indexOf("%"),o=e.indexOf(":");return t>=0&&(t<o||o<0)?decodeURIComponent(e):e}function deepEqual(e,t){if(!e||!t||typeof e!="object"||typeof e!=typeof t)return e===t;if(isArray(e))return isArray(t)&&e.length===t.length&&e.every((i,r)=>deepEqual(i,t[r]));const o=Object.keys(e);return o.length===Object.keys(t).length&&o.every(i=>deepEqual(e[i],t[i]))}var extractFileExt=e=>(e=RX_MEDIA_URL.exec(e))&&e[1];function forceLayout(e){e.clientHeight}function formatError(e,t){const o=isArray(e),i=o?e[0]:e.message,{url:r,imageUrl:l}=ai;e=i?e:e.readyState&&"Request failed."||e.type==="error"&&`File can't be displayed.${$('div[bgactive*="flashblock"]',doc)?" Check Flashblock settings.":""}`||e;let c;const s=[c="%c%s%c","font-weight:bold",o?i:e,"font-weight:normal",(c+=`
Node: %o`,ai.node),(c+=`
Rule: %o`,t),r&&(c+=`
URL: %s`,r),l&&l!==r&&(c+=`
File: %s`,l),...o?(c+=e[1],e.slice(2)):[],e.stack].filter(Boolean);return s[0]=c,s.message=i||e,s}function getReactChildren(e,t){isFF&&(e=e.wrappedJSObject||e);for(const o of Object.keys(e))if(typeof o=="string"&&o.startsWith("__reactProps"))return(e=e[o].children)&&(t?pick(e,t):e)}var isVideoUrl=e=>e.startsWith("data:video")||isVideoUrlExt(e),isVideoUrlExt=e=>(e=extractFileExt(e))&&/^(webm|mp4)$/i.test(e);function newFunction(...e){try{return NOP||(trustedScript?window.eval(trustedScript(`(function anonymous(${e.slice(0,-1).join(",")}){${e.slice(-1)[0]}})`)):new Function(...e))}catch(t){if(!RX_EVAL_BLOCKED.test(t.message))throw t;return setNOP(()=>{}),NOP}}function rel2abs(e,t=location.href){try{return/^(data:|blob:|[-\w]+:\/\/)/.test(e)?e:new URL(e,t).href}catch{return e}}function stringify(...e){const t=Array.prototype,{toJSON:o}=t;o&&(t.toJSON=null);const i=JSON.stringify(...e);return o&&(t.toJSON=o),i}function suppressTooltip(){for(const e of[ai.node.parentNode,ai.node,ai.node.firstElementChild]){const t=(e||0).title;if(t&&t!==e.textContent&&!doc.title.includes(t)&&!/^https?:\S+$/.test(t)){ai.tooltip={node:e,text:t},e.title="";break}}}function tabFixUrl(){const{tabfix:e=tabfix}=ai.rule;return e&&ai.popup.tagName==="IMG"&&!ai.xhr&&flattenHtml(`data:text/html;charset=utf8,
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
  `).replace(/\x20?([:>])\x20/g,"$1").replace(/#/g,"%23")}var inEmbed=!1,embedHovered=!1,links='a[href*="/p/"], a[href*="/tv/"], a[href*="/reel/"], a[href*="/reels/"]';function embedUrl(e){let t,o;try{t=new URL(e)}catch{return""}return/^https?:$/.test(t.protocol)?(t.hostname==="s9e.github.io"&&/^\/iframe\/(?:\d+\/)?instagram(?:\.min)?\.html$/.test(t.pathname)?o=t.hash.slice(1).split("#")[0]:/(^|\.)instagram\.com$/.test(t.hostname)&&(o=(t.pathname.match(/^\/(?:p|tv|reels?)\/([\w-]+)\/embed(?:\/|$)/)||[])[1]),o&&/^[\w-]+$/.test(o)?`https://www.instagram.com/p/${o}/embed/captioned/`:""):""}function initEmbed(){if(!(window===top||!embedUrl(location.href))&&hostname!=="s9e.github.io"){inEmbed=!0;for(const e of["mousemove","mouseout","mousedown"])addEventListener(e,relayEmbedEvent,{capture:!0,passive:!0})}}function relayEmbedEvent(e){if(!inEmbed)return!1;const t=e.target.closest&&e.target.closest(".EmbeddedMedia, .EmbedFrame");if(e.type==="mouseout"&&t&&t.contains(e.relatedTarget))return!0;const o=!!t&&e.type!=="mouseout";return(o||embedHovered)&&parent.postMessage({type:`${PREFIX}instagram-embed`,action:o?e.type:"mouseout",clientX:e.clientX,clientY:e.clientY,width:innerWidth,height:innerHeight,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,button:e.button},"*"),embedHovered=o,!0}function onEmbedMessage(e){const t=e.data;if(!t||t.type!==`${PREFIX}instagram-embed`)return!1;if(!e.source||!["mouseover","mousemove","mouseout","mousedown"].includes(t.action)||![t.clientX,t.clientY,t.width,t.height].every(Number.isFinite)||t.width<=0||t.height<=0)return!0;const o=arrayFrom($$("iframe")).find(s=>s.contentWindow===e.source);if(!o||!embedUrl(o.src)||new URL(o.src).origin!==e.origin)return!0;const i=o.getBoundingClientRect(),r=i.left+clamp(t.clientX/t.width,0,1)*i.width,l=i.top+clamp(t.clientY/t.height,0,1)*i.height;if(window!==top&&hostname==="s9e.github.io"&&embedUrl(location.href)===embedUrl(o.src))return parent.postMessage(Object.assign({},t,{clientX:r,clientY:l,width:innerWidth,height:innerHeight}),"*"),!0;const c={target:o,clientX:r,clientY:l,button:t.button,shiftKey:!!t.shiftKey,ctrlKey:!!t.ctrlKey};return t.action==="mouseover"?(setCtrl(c.ctrlKey),onMouseOver(c)):t.action==="mousemove"?ai.node===o&&onMouseMove(c):(hoverData&&hoverData.node===o&&onMouseOutThrottled.call(o),ai.node===o&&!c.shiftKey&&(t.action==="mousedown"||!ai.zoomed&&canClose())&&deactivate()),!0}function embedSource(e,t,o,i){const r=i&&i._postUrl||o&&o.src||"",l=(embedUrl(r).match(/\/p\/([\w-]+)/)||[])[1],c=mediaData(e,t,l),s=videoSource(c);if(s)return s;const u=$many([".EmbeddedMedia video",".EmbedFrame video"],t),n=u&&source(u)||$prop('meta[property="og:video:secure_url"]',"content",t)||$prop('meta[property="og:video"]',"content",t);if(/^https?:\/\//i.test(n||""))return n;if(u||isVideoData(c))throw"Instagram did not provide a playable video for this post.";const a=$(".EmbeddedMediaImage",t);return a&&source(a)||c&&c.display_url||void 0}function preview(e,t,o){o.follow=!1,o.q=null,o._postUrl=null,o._img=null;let i=t.matches("img, video")&&t;const r=t.closest(links);if(!i&&r&&(i=$many(["video","img"],r)),!i&&t.tagName==="DIV"){const c=t.getBoundingClientRect(),s=(c.left+c.right)/2,u=(c.top+c.bottom)/2;for(let n=t,a=0;n&&a<4&&(i=[...$$("video",n),...$$("img",n)].find(p=>{const d=p.getBoundingClientRect();return d.width>0&&d.height>0&&s>=d.left&&s<d.right&&u>=d.top&&u<d.bottom}),!(i||n.matches('article, main, [role="dialog"]')));n=n.parentElement,a++);}o._img=i;const l=i&&source(i);if(isVideo(i)&&!l||r&&/\/reels?\//.test(r.pathname||r.href)){const c=t.closest("article"),s=r||c&&$(links,c),u=(s?s.href:location.href).match(/\/(?:p|tv|reels?)\/([\w-]+)/);if(u)return o.q=embedSource,o._postUrl=`https://www.instagram.com/p/${u[1]}/embed/captioned/`}return l||(r?(o.follow=!0,r.href):!1)}function source(e){const t=i=>/^https?:\/\//i.test(i||"");if(isVideo(e))return[e.currentSrc,e.src,...arrayFrom($$("source",e),i=>i.src)].find(i=>t(i)&&isVideoUrlExt(i));const o=(e.srcset||"").split(",").map(i=>{const[r,l]=i.trim().split(/\s+/);return{url:r,size:parseFloat(l)||1}}).filter(i=>t(i.url));return o.sort((i,r)=>r.size-i.size),o.length?o[0].url:[e.currentSrc,e.src].find(t)}function best(e){return(isArray(e)?e:[]).filter(t=>t&&/^https?:\/\//i.test(t.url)).reduce((t,o)=>!t||o.width*o.height>t.width*t.height?o:t,null)}var isVideoData=e=>e&&(e.is_video||e.media_type===2||e.__typename==="GraphVideo"||e.__typename==="XDTGraphVideo"),videoSource=e=>e&&(/^https?:\/\//i.test(e.video_url||"")&&e.video_url||(best(e.video_versions)||{}).url);function mediaData(e,t,o){if(!o)return;const i=[tryJSON(e),...arrayFrom($$('script[type="application/json"]',t),c=>tryJSON(c.textContent))],r=/"contextJSON"\s*:\s*("(?:\\.|[^"\\])*")/g;for(let c;c=r.exec(e||"");)i.push(tryJSON(tryJSON(c[1])));const l=i.filter(Boolean);for(let c=0;c<l.length&&c<1e4;c++){const s=l[c];if(!(!s||typeof s!="object")){if((s.shortcode===o||s.code===o)&&(s.display_url||s.video_url||s.video_versions||s.image_versions2||s.carousel_media||s.edge_sidecar_to_children))return s;for(const u of Object.values(s))u&&typeof u=="object"&&l.push(u)}}}function gallery(e,t,o,i){const r=mediaData(e,t,i[2]),c=(r&&(r.carousel_media||pick(r,"edge_sidecar_to_children.edges",s=>s.map(u=>u.node))||[r])||[]).filter(Boolean).map(s=>({url:videoSource(s)||!isVideoData(s)&&(s.display_url||(best(pick(s,"image_versions2.candidates"))||{}).url),desc:pick(s,"caption.text")||pick(s,"edge_media_to_caption.edges.0.node.text")||""})).filter(s=>/^https?:\/\//i.test(s.url||""));if(c.title=pick(r,"caption.text")||pick(r,"edge_media_to_caption.edges.0.node.text")||$prop('meta[property="og:description"]',"content",t)||"",!c.length){if(isVideoData(r))throw"Instagram did not provide a playable video for this post.";const s=$many(['meta[property="og:video:secure_url"]','meta[property="og:video"]','meta[property="og:image"]'],t),u=s&&s.content;/^https?:\/\//i.test(u||"")&&c.push({url:u})}return c}function aspectRatio(e,t){for(let o=e/t,i,r=0;;){if(r++,i=Math.round(e*r/t),i>10&&r>10||i>100||r>100)return o.toFixed(2);if(Math.abs(i/r-o)<.01)return`${i}:${r}`}}function frameSize(e,t){if(!e)return;const o=e.getBoundingClientRect(),i=Math.min(o.right,t.innerWidth)-Math.max(o.left,0),r=Math.min(o.bottom,t.innerHeight)-Math.max(o.top,0),l=o.left<0?-o.left:0,c=o.top<0?-o.top:0;return[i,r,l,c]}function generateScales(e){let[t,o]=e<1?[e,1]:[1,e];const i=cfg.zoomStep/100,r=[t];if(e!==1){const l=o/t,c=Math.log(l)/Math.log(i)|0,s=c&&Math.pow(l,1/c);for(let u=c;--u>0;)r.push(t*=s);r.push(t=o)}for(;(t*=i)<=ZOOM_MAX;)r.push(t);return r}function measurePopup(){let{popup:e,nwidth:t,nheight:o}=ai;if(e.setAttribute("style","display:inline !important;"+popupStyleBase),e.clientWidth>t){const m=clamp(e.clientWidth,t,innerWidth/2)|0;o=ai.nheight=m/t*o|0,t=ai.nwidth=m,e.style.cssText=`width: ${t}px !important; height: ${o}px !important;`}else e.style.cssText="";e.classList.add(`${PREFIX}show`);const i=getComputedStyle(e),r=sumProps(i.outlineOffset,i.outlineWidth)*2,l=sumProps(i.paddingLeft,i.paddingRight,i.borderLeftWidth,i.borderRightWidth),c=sumProps(i.paddingTop,i.paddingBottom,i.borderTopWidth,i.borderBottomWidth),s=r+sumProps(i.marginLeft,i.marginRight),u=r+sumProps(i.marginTop,i.marginBottom);ai.extras={inw:l,inh:c,outw:s,outh:u,o:r/2,w:l+s,h:c+u};const n=Math.min((ai.view.w-ai.extras.w)/ai.nwidth,(ai.view.h-ai.extras.h)/ai.nheight)||1,a=!cfg.fit&&cfg.scales.length;let p=Math.min(1,n),d=cfg.fit==="all"&&n||cfg.fit==="no"&&1||p;if(a){const m=[];for(const g of cfg.scales){const y=parseFloat(g)||n;m.push(y),a&&typeof g=="string"&&(g.includes("!")&&(p=y),g.includes("*")&&(d=y))}ai.scales=m.sort(compareNumbers).filter(scaleBiggerThan,p)}else ai.scales=generateScales(n);ai.scale=cfg.zoom==="auto"?d:Math.min(1,n),ai.scaleFit=n,ai.scaleZoom=d}function rect(){const{node:e,rule:t}=ai;let o=t.rect&&e.closest(t.rect);if(o)return o.getBoundingClientRect();const i=(o=e).firstElementChild?document.elementsFromPoint(ai.cx,ai.cy):[];let r=0,l,c=0;do{const s=o.getBoundingClientRect(),u=s.width*s.height;u>r&&(r=u,l=s)}while((o=i[c++])&&e.contains(o));return l}function scaleBiggerThan(e,t,o){return e>=this&&(!t||Math.abs(e-o[t-1])>.01)}function scaleIndex(e){const t=ai.scales.indexOf(ai.scale);if(t>=0)return t+e;for(let o=ai.scales.length,i=e>0?0:o-1;i>=0&&i<o;i+=e)if(Math.sign(ai.scales[i]-ai.scale)===e)return i;return-1}function scaleForFirstZoom(e){const t=ai.scaleZoom;return e||t!==ai.scale?t:ai.scales.find(o=>o>t)}function updateViewSize(){const e=doc.compatMode==="BackCompat"?doc.body:doc.documentElement;if(ai.view={w:e.clientWidth,h:e.clientHeight,x:0,y:0},window===top)return;const[t,o]=frameSize(frameElement,parent)||[];t&&o?ai.view={w:t,h:o,x:0,y:0}:(addEventListener("message",onMessageChild,!0),parent.postMessage(MSG.getViewSize,"*"))}function set(e,t,o){let i=ai.bar;if(typeof e!="string"){$remove(i),ai.bar=null;return}const r=!i&&0;i||(i=ai.bar=$new("div",{id:`${PREFIX}bar`,className:`${PREFIX}${t}`})),ai.barText=e,updateStyles(),updateDetails(),setText(cfg.uiInfoCaption||t==="error"||t==="xhr"?e:""),$dataset(i,"prefix",o),setTimeout(show,0,r),i.parentNode||(doc.body.appendChild(i),forceLayout(i))}function setText(e){/<([a-z][-a-z]*)[^<>]*>[^<>]*<\/\1\s*>/i.test(e)?ai.bar.innerHTML=trustedHTML?trustedHTML(e):e:ai.bar.textContent=e}function show(e){const t=ai.bar;!e&&(!cfg.uiInfo||e!==0&&cfg.uiInfoOnce)||ai.barShown||(clearTimeout(ai.timerBar),t.classList.add(PREFIX+"show"),$dataset(t,"force",e===2?"":null),ai.timerBar=!e&&setTimeout(hide,cfg.uiInfoHide*1e3),ai.barShown=!0)}function hide(e){const t=ai.bar;!t||!e&&(!cfg.uiInfo||t.dataset.force)||!ai.barShown||($dataset(t,"force",e===2?"":null),t.classList.remove(PREFIX+"show"),ai.barShown=!1)}function updateName(){const{gItems:e,gIndex:t,gNum:o}=ai;if(e){const i=e[t],r=!e.some(c=>c.desc),l=[e.title&&(!t||r)&&!`${i.desc||""}`.includes(e.title)&&e.title||"",i.desc].filter(Boolean).join(" - ");set(l.trim()||" ","gallery",o>1?`${t+1}/${o}`:null)}else"caption"in ai?set(ai.caption,"caption"):ai.tooltip?set(ai.tooltip.text,"tooltip"):set(" ","info")}function updateDetails(){if(!ai.bar)return;const e=ai.rotate,t=ai.nwidth&&`${Math.round(ai.scale*100)}%${ai.flipX||ai.flipY?`, ${ai.flipX?"\u21C6":""}${ai.flipY?"\u21C5":""}`:""}${e?", "+(e>180?e-360:e)+"\xB0":""}, ${ai.nwidth} x ${ai.nheight} px, ${Math.round(100*(ai.nwidth*ai.nheight/1e6))/100} MP, ${aspectRatio(ai.nwidth,ai.nheight)}`.replace(/\x20/g,"\xA0");(ai.bar.dataset.zoom!==t||!ai.nwidth)&&($dataset(ai.bar,"zoom",t||null),show())}function makeParser(e){return isFunction(e)?e:defaultParser}function findIndex(e){return Math.max(0,ai.gItems.findIndex(({url:t})=>isArray(t)?t.includes(e):t===e))}function next(e){e&&(ai.gIndex=nextIndex(e));const t=ai.gItem=ai.gItems[ai.gIndex];isArray(t.url)?(ai.urls=t.url.slice(1),ai.url=t.url[0]):(ai.urls=null,ai.url=t.url),ai.gItemNext=ai.gItems[nextIndex(e||1)],ai.committed=!1,startSingle(),updateName(),e&&show(0)}function nextIndex(e){return(ai.gIndex+e+ai.gNum)%ai.gNum}function defaultParser(e,t,o,i,r){const{g:l}=r,c=l.index,s=l.entry,u=ensureArray(l.caption),n=l.image||"img",a=l.title,p=(typeof l.fix=="string"?newFunction("s","isURL",l.fix):l.fix)||(x=>x.trim()),d=[...$$(s||n,t)],m=d.map(g).filter(Boolean);return m.title=E(),m.index=RX_HAS_CODE.test(c)?newFunction("items","node",c)(m,ai.node):typeof c=="string"?findImageUrl(tryCatch($,c,t),o):c??Math.max(0,d.indexOf(ai.node)),m;function g(x){const k={};try{const z=s?$(n,x):x;k.url=p(findImageUrl(z,o),!0),k.desc=u.map(y,x).filter(Boolean).join(" - ")}catch{}return k.url&&k}function y(x){const k=x?$(x,this)||M(x,this.previousElementSibling)||M(x,this.nextElementSibling):this;return k&&p(runCHandler.default(k)||k.textContent)}function E(){const x=$(a,t);return x&&p(x.getAttribute("content")||x.textContent)||""}function M(x,k){if(k&&!k.matches(s))return k.matches(x)?k:$(x,k)}}function adaptiveFind(e,t){const o=e.tagName,i=e.currentSrc||e.src||"",r=o==="IMG"||o==="VIDEO"&&isVideoUrlExt(i);let l,c,s;if(o!=="A"&&(s=r&&!i.startsWith("data:")&&rel2abs(i),c=find(s,e,t)),!c&&(l=e.closest("A"))){const u=l.dataset;s=u.expandedUrl||u.fullUrl||u.url||l.href||"",s=s.includes("//t.co/")?"https://"+l.textContent:s,s=!s.startsWith("data:")&&s,c=find(s,l,t)}return!c&&r&&(c={node:e,rule:{},url:i}),c}function find(e,t,{noHtml:o,rules:i,skipRules:r}={}){let l,c,s,u;for(const n of i||rules){let a,p;if(r&&r.includes(n)||n.u&&(!e||!runU(n,e))||!i&&(a=n.e)&&!(p=typeof a=="string"?t.matches(a):runE(n,a,t)))continue;if(p&&p.url)return p;const{r:d,s:m}=n;let g=m!=null;if(u=!(o&&n===ai.rule)&&(d||g)&&n.html&&(s||(s=t.outerHTML)),d?p=u?d.exec(u):e&&d.exec(e):(p=[""],p[0]=p.input=u||e||n.g&&location.href||"",p.index=0),!p)continue;if(m==="")return{};if(!g&&!r&&(l?c:c=(l=t.tagName)==="IMG"||l==="VIDEO"))continue;g&=m!=="gallery";const y=g?runS(t,n,p):[p.input];if(y)return makeInfo(g,n,p,t,r,y)}}function makeInfo(e,t,o,i,r,l){let c,s=`${l[0]}`;const u=s&&e&&!t.q&&isFollowableUrl(s,t);if(s?s=rel2abs(s):c={},u&&(c=find(s,i,{skipRules:[...r||[],t]})),!c&&(!u||RX_MEDIA_URL.test(s))){const n=cfg.xhr&&t.xhr;c={match:o,node:i,rule:t,url:s,urls:l.length>1?l.slice(1):null,gallery:t.g&&makeParser(t.g),post:isFunction(t.post)?t.post(o):t.post,xhr:n??(isSecureContext&&!s.startsWith(location.protocol))}}return c}function isFollowableUrl(e,t){const o=t.follow;return isFunction(o)?o(e):o}function set2(e){if(!e&&!cfg.globalStatus){ai.node&&ai.node.removeAttribute(STATUS_ATTR);return}const t=cfg.globalStatus?PREFIX:"",o=e&&/^[+-]/.test(e)&&e[0],i=e&&`${t}${o?e.slice(1):e}`,r=cfg.globalStatus?doc.documentElement:i==="edge"?ai.popup:ai.node;if(!r)return;const l=cfg.globalStatus?"class":STATUS_ATTR,c=(r.getAttribute(l)||"").trim(),s=new Set(c?c.split(/\s+/):[]);switch(o){case"-":s.delete(i);break;case!1:for(const n of s)n.startsWith(t)&&n!==i&&s.delete(n);case"+":i&&s.add(i);break}const u=[...s].join(" ");u!==c&&r.setAttribute(l,u)}function loading(e){e?ai.popupLoaded||set2("+loading"):(clearTimeout(ai.timerStatus),ai.timerStatus=setTimeout(loading,SETTLE_TIME,!0))}function gmXhr(e,t={}){return ai.req&&tryCatch(ai.req.abort),new Promise((o,i)=>{const{anonymous:r}=ai.rule||{};ai.req=xmlHttpRequest(Object.assign({url:e,anonymous:r,withCredentials:!r,method:"GET",timeout:3e4},t,{onload:l,onerror:l,ontimeout(){ai.req=null,i(`Timeout fetching ${e}`)}}));function l(c){ai.req=null,c.status<400&&!c.error?o(c):i(`Server error ${c.status} ${c.error}
URL: ${e}`)}})}async function getDoc(e){if(!e)return{doc,finalUrl:location.href,responseText:doc.documentElement.outerHTML};const t=await(ai.post?gmXhr(e,{method:"POST",data:ai.post,headers:{"Content-Type":"application/x-www-form-urlencoded",Referer:e}}):gmXhr(e));return t.doc=$parseHtml(t.responseText),t}async function getImage(e,t,o=ai.xhr){ai.bufBar=!1,ai.bufStart=now();const i=await gmXhr(e,{responseType:"blob",headers:{Accept:"image/png,image/*;q=0.8,*/*;q=0.5",Referer:t||(isFunction(o)?o():e)},onprogress:getImageProgress});set(!1);const r=guessMimeType(i);let l=i.response;if(!l)throw"Empty response";return l.type!==r&&(l=l.slice(0,l.size,r)),[o==="blob"?ai.blobUrl=URL.createObjectURL(l):await blobToDataUrl(l),r.startsWith("video")]}function getImageProgress(e){if(!ai.bufBar&&now()-ai.bufStart>3e3&&e.loaded/e.total<.5&&(ai.bufBar=!0),ai.bufBar){const t=e.loaded/e.total*100|0,o=e.total/1024|0;set(`${t}% of ${o} kiB`,"xhr")}}async function findRedirect(){try{const{finalUrl:e}=await gmXhr(ai.url,{method:"HEAD",headers:{Referer:location.href.split("#",1)[0]}}),t=find(e,ai.node,{noHtml:!0});if(!t||!t.url)throw`Couldn't follow redirection target: ${e}`;Object.assign(ai,t),startSingle()}catch(e){handleError(e)}}async function saveFile(){const e=ai.popup.src||ai.popup.currentSrc;let t=getFileName(ai.imageUrl||e);if(t.includes(".")||(t+=".jpg"),e.startsWith("blob:")||e.startsWith("data:"))$new("a",{href:e,download:t}).dispatchEvent(new MouseEvent("click"));else{set2("+loading");const o=()=>set2("-loading"),i=typeof GM_download=="function";(i?GM_download:xmlHttpRequest)({url:e,name:t,headers:{Referer:e},method:"GET",responseType:"blob",overrideMimeType:"application/octet-stream",onerror:r=>{set(`Could not download ${t}: ${r.error||r.message||r}.`,"error"),o()},onprogress:getImageProgress,onload({response:r}){if(o(),!i){const l=Object.assign(document.createElement("a"),{href:URL.createObjectURL(r),download:t});l.dispatchEvent(new MouseEvent("click")),setTimeout(URL.revokeObjectURL,1e4,l.href)}}})}}function getFileName(e){return decodeURIComponent(e).split(/[#?&]/,1)[0].split("/").pop()}function blobToDataUrl(e){return new Promise((t,o)=>{const i=new FileReader;i.onload=()=>t(i.result),i.onerror=o,i.readAsDataURL(e)})}function guessMimeType({responseHeaders:e,finalUrl:t}){if(/Content-Type:\s*(\S+)/i.test(e)&&!RegExp.$1.includes("text/plain"))return RegExp.$1;switch((extractFileExt(t)||"jpg").toLowerCase()){case"bmp":return"image/bmp";case"gif":return"image/gif";case"jpe":return"image/jpeg";case"jpeg":return"image/jpeg";case"jpg":return"image/jpeg";case"mp4":return"video/mp4";case"png":return"image/png";case"svg":return"image/svg+xml";case"tif":return"image/tiff";case"tiff":return"image/tiff";case"webm":return"video/webm";default:return"application/octet-stream"}}function findImageUrl(e,t){if(!e)return;let o;const i=Object.values(e.dataset).some(r=>o=r.match(RX_IMAGE_URL)[0])&&o||e.getAttribute("src")||e.getAttribute("href")||e.getAttribute("content")||(o=e.outerHTML).includes("http")&&o.match(RX_IMAGE_URL)[0];return!!i&&rel2abs(decodeHtmlEntities(i),$prop("base[href]","href",e.ownerDocument)||t)}var RX_ESCAPE=/[.+*?(){}[\]^$|]/g,RX_SEP=/[^\w%._-]/y,RXS_SEP=RX_SEP.source;function UrlMatcher(e){const t=[];for(const o of ensureArray(e)){const i=o.startsWith("||"),r=!i&&o.startsWith("|"),l=o.endsWith("^");let c,s=o.slice(i*2+r,-l||void 0);if(s.includes("^")){let u="";for(const a of s.split("^"))a.length>u.length&&(u=a);const n=new RegExp((r?"^":"")+(i?"^(([^/:]+:)?//)?([^./]*\\.)*?":"")+s.replace(RX_ESCAPE,"\\$&").replace(/\\\^/g,RXS_SEP)+(l?`(?:${RXS_SEP}|$)`:""),"i");s=[u,n],c=regexp}else if(r)c=l?equals:starts;else if(i){const u=s.indexOf("/"),n=u>0?s.slice(0,u):s;s=[s,n,u>0,l],c=startsDomainPrescreen}else l?c=ends:c=has;t.push({fn:c,data:s})}return t.length>1?{fn:checkArray,data:t}:t[0]}function checkArray(e){return this.some(checkArrayItem,e)}function checkArrayItem(e){return e.fn.call(e.data,this)}function ends(e){return e.endsWith(this)||e.length>this.length&&e.indexOf(this,e.length-this.length-1)>=0&&endsWithSep(e)}function endsWithSep(e,t=e.length-1){return RX_SEP.lastIndex=t,RX_SEP.test(e)}function equals(e){return e.startsWith(this)&&(e.length===this.length||e.length===this.length+1&&endsWithSep(e))}function has(e){return e.includes(this)}function regexp(e){return e.includes(this[0])&&this[1].test(e)}function starts(e){return e.startsWith(this)}function startsDomainPrescreen(e){return e.includes(this[0])&&startsDomain.call(this,e)}function startsDomain(e){let t=e.indexOf("//");if(t&&e[t-1]!==":")return;t=t<0?0:t+2;const o=e.slice(t,(e.indexOf("/",t)+1||e.length+1)-1),[i,r,l,c]=this;let s=l?o.length-r.length:0;for(;;s++){if(s=o.indexOf(r,s),s<0)return;if(!s||o[s-1]===".")break}if(s+=t,e.lastIndexOf(i,s)!==s)return;const u=s+i.length;return!c||u===o.length||u===e.length||endsWithSep(e,u)}var rules;function init(){const e=new Map,t=cfg.hosts||[],o=t.filter((n,a,p)=>!a||!deepEqual(n,p[a-1]));o.length<t.length&&setValue("cfg",cfg);const i=rules=o.map(parse,e).filter(Boolean),r=typeof GM_addElement=="function",l=nonce||setNonce(($("script[nonce]")||{}).nonce||"")||r,c=l&&`${GM_info.script.name}${Math.random()}`,s=[],u=[`window[${JSON.stringify(c)}]=[`];for(const[n,a]of e.entries()){if(!RX_EVAL_BLOCKED.test(a)){handleError("Invalid custom host rule:",n);continue}l&&u.push(s.length?",":"","[",i.indexOf(n),",{",...Object.keys(FN_ARGS).map(p=>RX_HAS_CODE.test(n[p])&&`${p}(${FN_ARGS[p]}){${n[p]}},`).filter(Boolean),"}]"),s.push(n)}if(s.length){let n,a;if(l){const p=r?GM_addElement:(d,{textContent:m})=>document.head.appendChild(Object.assign(document.createElement(d),{textContent:trustedScript?trustedScript(m):m,nonce}));u.push("]; document.currentScript.remove();"),p("script",{textContent:u.join("")}),n=(a=unsafeWindow)[c]||isFF&&(a=a.wrappedJSObject)[c]}if(n){for(const[p,d]of n)Object.assign(i[p],d);delete a[c]}else console.warn("Site forbids compiling JS code in these custom rules",s)}switch(dotDomain.match(/[^.]+(?=\.com?(?:\.[^.]+)?$)|[^.]+\.[^.]+$|$/)[0]){case"4chan.org":i.push({e:'.is_catalog .thread a[href*="/thread/"], .catalog-thread a[href*="/thread/"]',q:".op .fileText a",css:"#post-preview{display:none}"});break;case"amazon":i.push({r:/.+?images\/I\/.+?\./,s:n=>doc.getElementById("universal-hover")?"":n[0]+"jpg",css:"#zoomWindow{display:none!important;}"});break;case"bing":i.push({e:'a[m*="murl"]',r:/murl&quot;:&quot;(.+?)&quot;/,s:"$1",html:!0});break;case"deviantart":i.push({e:'a[href*="/art/"] img[src*="/v1/"]',r:/^(.+)\/v1\/\w+\/[^/]+\/(.+)-\d+.(\.\w+)(\?.+)/,s:([,n,a,p,d],m)=>{let g=getReactChildren(m.closest("a"),"props.deviation.media.types");return g&&(g=g.find(y=>y.t==="fullview"))&&`${n}${g.c?g.c.replace("<prettyName>",a):`/v1/fill/w_${g.w},h_${g.h}/${a}-fullview${p}`}${d}`}},{e:".dev-view-deviation img",s:()=>[$(".dev-page-download").href,$(".dev-content-full").src].filter(Boolean)},{e:"a[data-hook=deviation_link]",q:"link[as=image]"});break;case"discord":i.push({u:"||discordapp.net/external/",r:/\/https?\/(.+)/,s:"//$1",follow:!0});break;case"dropbox":i.push({r:/(.+?&size_mode)=\d+(.*)/,s:"$1=5$2"});break;case"facebook":i.push({e:'a[href^="/photo/?"], a[href^="https://www.facebook.com/photo"]',s:(n,a)=>(n=getReactChildren(a.parentNode))&&pick(n,(n[0]?"0.props.linkProps":"props")+".passthroughProps.origSrc")});break;case"flickr":pick(unsafeWindow,"YUI_config.flickr.api.site_key")&&i.push({r:/flickr\.com\/photos\/[^/]+\/(\d+)/,s:n=>`https://www.flickr.com/services/rest/?${new URLSearchParams({photo_id:n[1],api_key:unsafeWindow.YUI_config.flickr.api.site_key,method:"flickr.photos.getSizes",format:"json",nojsoncallback:1}).toString()}`,q:n=>JSON.parse(n).sizes.size.pop().source,anonymous:!0});break;case"github":i.push({r:new RegExp([/(avatars.+?&s=)\d+/,/(raw\.github)(\.com\/.+?\/img\/.+)$/,/\/(github)(\.com\/.+?\/)blob\/([^/]+\/.+?\.(?:avif|webp|png|jpe?g|bmp|gif|cur|ico|svg))$/].map(n=>n.source).join("|")),s:n=>`https://${n[1]?`${n[1]}460`:n[2]?`${n[2]}usercontent${n[3]}`:$(".AppHeader-context-item > .octicon-lock")?`${n[4]}${n[5]}raw/${n[6]}`:`raw.${n[4]}usercontent${n[5]}${n[6]}`}`});break;case"google":location.pathname==="/search"&&i.push({e:/[&?](sclient=img|udm=2)(&|$)/.test(location.search)?"[data-docid] img":"[jsdata][id] img",s:(n,a,p)=>{a=a.closest(p.e.split(" ")[0]);const d=a.dataset.docid||a.id;if(isFF&&(a=a.wrappedJSObject||a),(a=a.__jscontroller)&&(a=a.pending)&&(a=a.value)){for(let m in a)if({}.toString.call(m=a[m])==="[object Object]"){for(const g in m)if(Array.isArray(n=m[g])&&n.includes(d)&&(n[1]===d||(n=n[1])&&Array.isArray(n=n[g])&&n[1]===d)&&Array.isArray(n=n[3]))return n[0]}}}});break;case"instagram":i.push({e:'img, video, main div, article div, [role="dialog"] div, '+links,s:preview,c:(n,a,p,d)=>(d._img||{}).alt||""});break;case"reddit":i.push({u:"||i.reddituploads.com/"},{e:'[data-url*="i.redd.it"] img[src*="thumb"]',s:(n,a)=>$propUp(a,"data-url")},{r:/preview(\.redd\.it\/\w+\.(jpe?g|png|gif))/,s:"https://i$1"});break;case"stackoverflow":i.push({e:".post-tag, .post-tag img",s:""});break;case"startpage":i.push({r:/[&?]piurl=([^&]+)/,s:"$1",follow:!0});break;case"tumblr":i.push({e:"div.photo_stage_img, div.photo_stage > canvas",s:(n,a)=>/http[^"]+/.exec(a.style.cssText+a.getAttribute("data-img-src"))[0],follow:!0});break;case"twitter":i.push({e:".grid-tweet > .media-overlay",s:(n,a)=>a.previousElementSibling.src,follow:!0});break}i.push({e:"iframe",s:(n,a)=>embedUrl(a.src)||!1,q:embedSource,c:(n,a)=>$prop(".EmbeddedMediaImage","alt",a)},{r:/[/?=](https?%3A%2F%2F[^&]+)/i,s:"$1",follow:!0,onerror:"skip"},{u:["||500px.com/photo/","||cl.ly/","||cweb-pix.com/","//ibb.co/","||imgcredit.xyz/image/"],r:/\.\w+\/.+/,q:'meta[property="og:image"]'},{u:"attachment.php",r:/attachment\.php.+attachmentid/},{u:"||abload.de/image",q:"#image"},{u:"||deviantart.com/art/",s:(n,a)=>/\b(film|lit)/.test(a.className)||/in Flash/.test(a.title)?"":n.input,q:['#download-button[href*=".jpg"]','#download-button[href*=".jpeg"]','#download-button[href*=".gif"]','#download-button[href*=".png"]',"#gmi-ResViewSizer_fullimg","img.dev-content-full"]},{u:"||dropbox.com/s",r:/com\/sh?\/.+\.(jpe?g|gif|png)/i,q:(n,a)=>$prop("img.absolute-center","src",a).replace(/(size_mode)=\d+/,"$1=5")||!1},{r:/[./]ebay\.[^/]+\/itm\//,q:n=>n.match(/https?:\/\/i\.ebayimg\.com\/[^.]+\.JPG/i)[0].replace(/~~60_\d+/,"~~60_57")},{u:"||i.ebayimg.com/",s:(n,a)=>$(".zoom_trigger_mask",a.parentNode)?"":n.input.replace(/~~60_\d+/,"~~60_57")},{u:"||fastpic.",s:(n,a,p)=>{const d=a.closest("a"),m=decodeURIComponent(findImageUrl(d||a)).replace(/\/i(\d+)\.(\w+\.\w+\/)\w+/,"/$2$1").replace(/^\w+:\/\/fastpic[^/]+((?:\/\d+){3})\/\w+(\/\w+\.\w+).*/,"https://fastpic.org/view$1$2.html");return toggle(p,"q",m.includes(".html")),d||m.includes(".png")?m:[m,m.replace(/\.jpe?g/,".png")]},_q:(n,a,p)=>(p=$('input[value*="/big/"]',a))&&p.value||$prop('a[href*="/big/"]',"href",a)},{u:"||flickr.com/photos/",r:/photos\/([0-9]+@N[0-9]+|[a-z0-9_-]+)\/([0-9]+)/,s:n=>n.input.indexOf("/sizes/")<0?`https://www.flickr.com/photos/${n[1]}/${n[2]}/sizes/sq/`:!1,q:(n,a)=>{const p=$$(".sizes-list a",a);return"https://www.flickr.com"+p[p.length-1].getAttribute("href")},follow:!0},{u:"||flickr.com/photos/",r:/\/sizes\//,q:"#allsizes-photo > img"},{u:"||gfycat.com/",r:/(gfycat\.com\/)(gifs\/detail\/|iframe\/)?([a-z]+)/i,s:"https://$1$3",q:'meta[content$=".webm"], #webmsource, source[src$=".webm"], .actual-gif-image'},{u:["||googleusercontent.com/proxy","||googleusercontent.com/gadgets/proxy"],r:/\.com\/(proxy|gadgets\/proxy.+?(http.+?)&)/,s:n=>n[2]?decodeURIComponent(n[2]):n.input.replace(/w\d+-h\d+($|-p)/,"w0-h0")},{u:["||googleusercontent.com/","||ggpht.com/"],s:n=>n.input.includes("webcache.")?"":n.input.replace(/\/s\d{2,}-[^/]+|\/w\d+-h\d+/,"/s0").replace(/([&?]sz)?=[-\w]+([&#].*)?/,"")},{u:"||gravatar.com/",r:/([a-z0-9]{32})/,s:"https://gravatar.com/avatar/$1?s=200"},{u:"//gyazo.com/",r:/\bgyazo\.com\/\w{32,}(\.\w+)?/,s:(n,a,p)=>toggle(p,"q",!n[1])?n.input:`https://i.${n[0]}`,_q:'link[rel="image_src"]'},{u:"||hostingkartinok.com/show-image.php",q:".image img"},{u:["||imagecurl.com/images/","||imagecurl.com/viewer.php"],r:/(?:images\/(\d+)_thumb|file=(\d+))(\.\w+)/,s:"https://imagecurl.com/images/$1$2$3"},{u:"||imagebam.com/",r:/^(https:\/\/)thumbs\d+(\.imagebam\.com\/).*?([^/]+)_t\./,s:"$1www$2view/$3",q:"img.main-image"},{u:"||www.imagebam.com/view/",q:"img.main-image"},{u:"||imageban.ru/thumbs",r:/(.+?\/)thumbs(\/\d+)\.(\d+)\.(\d+\/.*)/,s:"$1out$2/$3/$4"},{u:["||imageban.ru/show","||imageban.net/show","||ibn.im/"],q:"#img_main"},{u:"||imageshack.us/img",r:/img(\d+)\.(imageshack\.us)\/img\\1\/\d+\/(.+?)\.th(.+)$/,s:"https://$2/download/$1/$3$4"},{u:"||imageshack.us/i/",q:"#share-dl"},{u:"||imageteam.org/img",q:'img[alt="image"]'},{u:["||imagetwist.com/","||imageshimage.com/"],r:/(\/\/|^)[^/]+\/[a-z0-9]{8,}/,q:"img.pic",xhr:!0},{u:"||imageupper.com/i/",q:"#img",xhr:!0},{u:"||imagevenue.com/",q:'a[data-toggle="full"] img'},{u:"||imagezilla.net/show/",q:"#photo",xhr:!0},{u:["||images-na.ssl-images-amazon.com/images/","||media-imdb.com/images/"],r:/images\/.+?\.jpg/,s:"/V1\\.?_.+?\\.//g"},{u:"||imgbox.com/",r:/\.com\/([a-z0-9]+)$/i,q:"#img",xhr:hostname!=="imgbox.com"},{u:"||imgclick.net/",r:/\.net\/(\w+)/,q:"img.pic",xhr:!0,post:n=>`op=view&id=${n[1]}&pre=1&submit=Continue%20to%20image...`},{u:".imgcredit.xyz/",r:/^https?(:.*\.xyz\/\d[\w/]+)\.md(.+)/,s:["https$1$2","https$1.png"]},{u:["||imgflip.com/i/","||imgflip.com/gif/"],r:/\/(i|gif)\/([^/?#]+)/,s:n=>`https://i.imgflip.com/${n[2]}${n[1]==="i"?".jpg":".mp4"}`},{u:["||imgur.com/a/","||imgur.com/gallery/"],s:"gallery",async g(){let n=`https://imgur.com/ajaxalbums/getimages/${ai.url.split(/[/?#]/)[4]}/hit.json?all=true`,a=tryJSON((await gmXhr(n)).responseText)||0,p=(a.data||0).images||[];p[0]||(a=(await gmXhr(ai.url)).responseText.match(/postDataJSON=(".*?")<|$/)[1],a=tryJSON(tryJSON(a))||0,p=a.media);const d=[];for(const m of p){const g=m.metadata||m;d.push({url:m.url||(n=`https://i.imgur.com/${m.hash}`)&&(m.ext===".gif"&&m.animated!==!1?[`${n}.webm`,`${n}.mp4`,n]:n+m.ext),desc:[g.title,g.description].filter(Boolean).join(" - ")})}return d[0]&&a.title&&!`${d[0].desc||""}`.includes(a.title)&&(d.title=a.title),d}},{u:"||imgur.com/",r:/((?:[a-z]{2,}\.)?imgur\.com\/)((?:\w+,)+\w*)/,s:"gallery",g:(n,a,p,d)=>d[2].split(",").map(m=>({url:`https://i.${d[1]}${m}.jpg`}))},{u:"||imgur.com/",r:/([a-z]{2,}\.)?imgur\.com\/(r\/[a-z]+\/|[a-z0-9]+#)?([a-z0-9]{5,})($|\?|\.(mp4|[a-z]+))/i,s:(n,a)=>{if(/memegen|random|register|search|signin/.test(n.input))return"";const p=a.closest("a");if(p&&p!==a&&/(i\.([a-z]+\.)?)?imgur\.com\/(a\/|gallery\/)?/.test(p.href))return!1;const d=n[3].replace(/(.{7})[hlmtbs]$/,"$1"),m=n[5]?n[5].replace(/gifv?/,"webm"):"jpg",g=`https://i.${(n[1]||"").replace("www.","")}imgur.com/${d}.`;return m==="webm"?[`${g}webm`,`${g}mp4`,`${g}gif`]:g+m}},{u:["||instagr.am/","||instagram.com/"],r:/^https?:\/\/[^/]+\/(?:[^/?#]+\/)?((?:p|tv|reels?)\/((?!audio(?:[/?#]|$))[\w-]+))(?=[/?#]|$)/,s:n=>`https://www.instagram.com/p/${n[2]}/embed/captioned/`,g:gallery},{u:["||livememe.com/","||lvme.me/"],r:/\.\w+\/([^.]+)$/,s:"http://i.lvme.me/$1.jpg"},{u:"||lostpic.net/image",q:".image-viewer-image img"},{u:"||makeameme.org/meme/",r:/\/meme\/([^/?#]+)/,s:"https://media.makeameme.org/created/$1.jpg"},{u:"||photobucket.com/",r:/(\d+\.photobucket\.com\/.+\/)(\?[a-z=&]+=)?(.+\.(jpe?g|png|gif))/,s:"https://i$1$3",xhr:!dotDomain.endsWith(".photobucket.com")},{u:"||piccy.info/view3/",r:/(.+?\/view3)\/(.*)\//,s:"$1/$2/orig/",q:"#mainim"},{u:"||pimpandhost.com/image/",r:/(.+?\/image\/[0-9]+)/,s:"$1?size=original",q:"img.original"},{u:["||pixroute.com/","||imgspice.com/"],r:/\.html$/,q:"img[id]",xhr:!0},{u:"||postima",r:/postima?ge?\.org\/image\/\w+/,q:['a[href*="dl="]',"#main-image"]},{u:["||prntscr.com/","||prnt.sc/"],r:/\.\w+\/.+/,q:'meta[property="og:image"]',xhr:!0},{u:"||radikal.ru/",r:/\.ru\/(fp|.+?\.html)|^(.+?)t\.jpg/,s:(n,a,p)=>n[2]&&/radikal\.ru[\w%/]+?(\.\w+)/.test($propUp(a,"href"))?n[2]+RegExp.$1:toggle(p,"q",n[1])?n.input:[n[2]+".jpg",n[2]+".png"],_q:n=>n.match(/https?:\/\/\w+\.radikal\.ru[\w/]+\.(jpg|gif|png)/i)[0]},{u:"||tumblr.com",r:/_500\.jpg/,s:["/_500/_1280/",""]},{u:"||twimg.com/media/",r:/.+?format=(jpe?g|png|gif)/i,s:"$0&name=orig"},{u:"||twimg.com/media/",r:/.+?\.(jpe?g|png|gif)/i,s:"$0:orig"},{u:"||twimg.com/1/proxy",r:/t=([^&_]+)/i,s:n=>atob(n[1]).match(/http.+/)},{u:"||twimg.com/",r:/\/profile_images/i,s:"/_(reasonably_small|normal|bigger|\\d+x\\d+)\\././g"},{u:"||pic.twitter.com/",r:/\.com\/[a-z0-9]+/i,q:n=>n.match(/https?:\/\/twitter\.com\/[^/]+\/status\/\d+\/photo\/\d+/i)[0],follow:!0},{u:"||twitpic.com/",r:/\.com(\/show\/[a-z]+)?\/([a-z0-9]+)($|#)/i,s:"https://twitpic.com/show/large/$2"},{u:"||wiki",r:/\/(?:thumb|images)\/.+\.(?:jpe?g|gif|png|svg)/i,s:n=>n.input.replace(/\/(thumb(?=\/)|\d+px[^/]+(?=$|\?))/g,"").replace("//thumb.wikimedia.org/","//upload.wikimedia.org/").replace(/\/(scale-to-width(-[a-z]+)?\/\d+|(zoom-crop|smart)(\/(width|height)\/\d+)+)/g,"/"),xhr:!hostname.includes("wiki")},{u:"||ytimg.com/vi/",r:/(.+?\/vi\/[^/]+)/,s:"$1/0.jpg",rect:".video-list-item"},{u:"/viewer.php?file=",r:/(.+?)\/viewer\.php\?file=(.+)/,s:"$1/images/$2",xhr:!0},{u:"/thumb_",r:/\/albums.+\/thumb_[^/]/,s:"/thumb_//"},{u:[".th.jp",".th.gif",".th.png"],r:/(.+?\.)th\.(jpe?g?|gif|png|svg|webm)$/i,s:"$1$2",follow:!0},{r:RX_MEDIA_URL})}function format(e,{expand:t}={}){const o=stringify(e,null," ");return t?o.replace(/^{\s+/g,"{"):o.replace(/\n\s*/g," ").replace(/^({)\s|\s+(})$/g,"$1$2")}function fromElement(e){const t=e.textContent.trim();if(t.startsWith("{")&&t.endsWith("}")&&/[{,]\s*"[degqrsu]"\s*:\s*"/.test(t)){const o=tryJSON(t);return o&&Object.keys(o).some(i=>/^[degqrsu]$/.test(i))&&o}}var isValidE2=([e,t])=>e.trim()&&typeof t=="string"&&t.trim();function parse(e){const t=this instanceof Map;try{if(typeof e=="string"&&(e=JSON.parse(e)),"d"in e&&typeof e.d!="string")e.d=void 0;else if(t&&e.d&&!hostname.includes(e.d))return!1;let{e:o}=e;if(o!=null){if(o=typeof o=="string"?o.trim():isArray(o)?o.join(",").trim():Object.entries(o).every(isValidE2)&&o,!o)throw new Error('Invalid syntax for "e". Examples: "e": ".image" or "e": [".image1", ".image2"] or "e": {".parent": ".image"} or "e": {".parent1": ".image1", ".parent2": ".image2"}');t&&(e.e=o||void 0)}let i=t?e:{};e.r&&(i.r=new RegExp(e.r,"i")),NOP&&(i={});for(const r of Object.keys(FN_ARGS))if(RX_HAS_CODE.test(e[r])){const l=newFunction(...FN_ARGS[r],e[r]);l!==NOP||!t?i[r]=l:t&&this.set(e,"unsafe-eval")}return e}catch(o){return t?(this.set(e,o),e):o}}function runC(e,t=document){const o=runCHandler[typeof ai.rule.c]||runCHandler.default;ai.caption=o(e,t)}var runCHandler={function:(e,t)=>ai.rule.c(e||t.documentElement.outerHTML,t,ai.node,ai.rule),string:(e,t)=>{const o=$many(ai.rule.c,t);return o?o.getAttribute("content")||o.getAttribute("title")||o.textContent:""},default:(e,t,o=ai.node)=>(ai.tooltip||0).text||o.alt||$propUp(o,"title")||getFileName(o.tagName===(ai.popup||0).tagName?ai.url:o.src||$propUp(o,"href"))};function runQ(e,t,o){let i;if(isFunction(ai.rule.q))i=ai.rule.q(e,t,ai.node,ai.rule),isArray(i)&&(ai.urls=i.slice(1),i=i[0]);else{const r=$many(ai.rule.q,t);i=findImageUrl(r,o)}return i}function runE(e,t,o){let i,r,l,c;for(const s in t)if((i=o.closest(s))&&(r=$(t[s],i))){if(r===o)l=!0;else if(c=adaptiveFind(r,{rules:[e]}))return c}return l}function runS(e,t,o){let i=[],r;for(const l of ensureArray(t.s))i.push(typeof l=="string"?decodeUrl(substituteSingle(l,o)):isFunction(l)?l(o,e,t):l);if(t.q&&i.length>1){console.warn(`Rule discarded: "s" array is not allowed with "q"
%o`,t);return}return isArray(r=i[0])&&(r=[i=r][0]),r===""?i:r&&arrayFrom(new Set(i),decodeUrl)}function runU(e,t){const o=e[SYM_U]||(e[SYM_U]=UrlMatcher(e.u));return o.fn.call(o.data,t)}function substituteSingle(e,t){if(!t||t.input==null)return e;if(e.startsWith("/")&&!e.startsWith("//")){const o=e.search(/[^\\]\//)+1,i=e.lastIndexOf("/"),r=new RegExp(e.slice(1,o),e.slice(i+1));return t.input.replace(r,e.slice(o+1,i))}if(t.length&&e.includes("$")){const o=Math.floor(Math.log10(t.length))+1;e=e.replace(/\$(\d{1,3})/g,(i,r)=>{for(let l=o;l>=0;l--){const c=r.slice(0,l)|0;if(c<t.length)return(t[c]||"")+r.slice(l)}return i})}return e}function toggle(e,t,o){return e[t]=o?e[`_${t}`]:null,o}var busy,csp=null,init2=function(){busy=new Promise(e=>{const t=new XMLHttpRequest;t.open("GET",location),t.timeout=Math.max(2e3,(performance.timing.responseEnd-performance.timeOrigin)*2),t.onreadystatechange=()=>{t.readyState>=t.HEADERS_RECEIVED&&(csp=_parse([t.getResponseHeader("content-security-policy"),$prop('meta[http-equiv="Content-Security-Policy"]',"content")].filter(Boolean).join(",")),init2=busy=t.onreadystatechange=null,t.abort(),e())},t.send()})};async function check(e,t){t&&init2&&init2(),busy&&await busy;const o=isVideoUrl(e);let i;if(csp){const r=csp[o?"media":"img"]||csp.default;r.some(_srcMatches,e)||(i=[i,"blob","data"].find(l=>r.includes(`${l}:`)))}return[i||ai.xhr,o]}function _parse(e){if(!e)return;const t={},o=/(?:^|[;,])\s*(?:(default|img|media|script)-src|require-(trusted)-types-for) ([^;,]+)/g;for(let i;i=o.exec(e);)t[i[1]||i[2]]=i[3].trim().split(/\s+/);(t.script||[]).find(i=>/^'nonce-(.+)'$/.test(i))&&setNonce(RegExp.$1),(t.trusted||[]).includes("'script'")&&setNOP(()=>{});for(const i of new Set([t.img||t.default,t.media||t.default]))i.forEach((r,l)=>{r!=="*"&&r.includes("*")&&(i[l]=new RegExp((/^\w+:/.test(r)?"^":"^\\w+://")+r.replace(/[.+?^$|()[\]{}]/g,"\\$&").replace(/(\\\.)?(\*)(\\\.)?/g,(c,s,u,n)=>`${s?"\\.?":""}[^:/]*${n?"\\.?":""}`).replace(/[^/]$/,"$&/")))});return t}function _srcMatches(e){return e instanceof RegExp?e.test(this):e==="*"||e&&this.startsWith(e)&&(e.endsWith("/")||this[e.length]==="/")||e==="'self'"&&this.startsWith(location.origin+"/")}function create(e){return ai.bufBar=!1,ai.bufStart=now(),$new("video",{autoplay:ai.preloadStart!==-1,controls:!0,muted:cfg.mute||new AudioContext().state==="suspended",loop:!0,volume:clamp(+e||.5,0,1),onprogress:progress,oncanplaythrough:progressDone,onvolumechange:rememberVolume})}function progress(){const{duration:e}=this;if(e&&this.buffered.length&&now()-ai.bufStart>2e3){const t=Math.round(this.buffered.end(0)/e*100);ai.bar&&(ai.bufBar|=t>0&&t<50)&&set(`${t}% of ${Math.round(e)}s`,"xhr")}}function progressDone(){this.onprogress=this.oncanplaythrough=null,ai.bar&&ai.bar.classList.contains(`${PREFIX}xhr`)&&set(!1),onLoad.call(this)}function rememberVolume(){setValue("volume",this.volume)}async function create2(e,t,o){let i=ai.popup,r;const l=i&&!cfg.uiFadeinGallery&&ai.gItems&&!ai.zooming;if(l&&i===document.fullscreenElement?destroyBlob():i&&(destroy(),i=null),ai.imageUrl=e,!e)return;const c=ai;let[s,u]=await check(e,o);if(ai!==c)return;if(!s&&o){handleError(o);return}Object.assign(ai,{pageUrl:t,xhr:s}),s&&([e,u]=await getImage(e,t,s).catch(handleError)||[]);let n;if(ai!==c||!e||u&&(n=await getValue("volume"),ai!==c))return;i?(i.src=r=BLANK_PIXEL,i.classList.remove(PREFIX+"show"),i.removeAttribute("style"),ai.popupShown=null,ai.popupLoaded=!1):i=ai.popup=u?create(n):$new("img"),i.id=`${PREFIX}popup`,i.src=e,i.addEventListener("error",handleError),(ai.night=ai.night!=null?ai.night:cfg.night)&&i.classList.add(`${PREFIX}night`),ai.zooming&&i.addEventListener("transitionend",onZoom),$dataset(i,"galleryFlip",l?"":null),i.toggleAttribute("loaded",!!l);const a=ai.popover||typeof i.showPopover=="function"&&$("[popover]:popover-open");ai.popover=a&&a.getBoundingClientRect().width&&($css(a,{opacity:0}),a)||null,i.parentElement!==doc.body&&doc.body.insertBefore(i,ai.bar&&ai.bar.parentElement===doc.body&&ai.bar||null),await 0,!(ai.popup!==i||checkProgress({start:!0})===!1)&&(!r&&i.complete?onLoad.call(i):u||i.addEventListener("load",onLoad,{once:!0}))}function destroy(){const e=ai.popup;e&&(e.removeEventListener("load",onLoad),e.removeEventListener("error",handleError),ai.popover&&(ai.popover.style.removeProperty("opacity"),ai.popover=null),isFunction(e.pause)&&e.pause(),e.remove(),destroyBlob(),ai.zoomed=ai.popup=ai.popupLoaded=null)}function destroyBlob(){ai.blobUrl&&(setTimeout(URL.revokeObjectURL,SETTLE_TIME,ai.blobUrl),ai.blobUrl=null)}function move(){let e,t;const{cx:o,cy:i,extras:r,view:l}=ai,c=l.w-r.outw,s=l.h-r.outh,u=ai.scale*ai.nwidth+r.inw,n=ai.scale*ai.nheight+r.inh,a=ai.rotate%180,p=a?n:u,d=a?u:n;if(!ai.zoomed&&ai.gNum<2&&!cfg.center){const g=ai.rect,y=(g.left+g.right)/2,E=(g.top+g.bottom)/2;c-g.right-40>p||p<g.left-40?(d<s-60&&(t=clamp(E-d/2,30,s-d-30)),e=y>c/2?g.left-40-p:g.right+40):(s-g.bottom-40>d||d<g.top-40)&&(p<c-60&&(e=clamp(y-p/2,30,c-p-30)),t=E>s/2?g.top-40-d:g.bottom+40)}e==null&&(e=c>p?(c-p)/2+l.x:(c-p)*clamp(5/3*((o-l.x)/c-.2),-1,1)),t==null&&(t=s>d?(s-d)/2+l.y:(s-d)*clamp(5/3*((i-l.y)/s-.2),-1,1));const m=a?(u-n)/2:0;e+=r.o-m,t+=r.o+m,$css(ai.popup,{transform:`translate(${Math.round(e)}px, ${Math.round(t)}px) rotate(${ai.rotate||0}deg) scale(${ai.flipX?-1:1},${ai.flipY?-1:1})`,width:`${Math.round(u)}px`,height:`${Math.round(n)}px`})}function onLoad(){if(this===ai.popup){this.setAttribute("loaded",""),ai.popupLoaded=!0,set2("-loading"),checkProgress();let e=ai.gItem;e&&(e.url=this.src),(e=ai.gItemNext)&&preload(this,e)}}function onZoom(){this.classList.remove(`${PREFIX}zooming`)}async function preload(e,t,o=t.url,i=$new("img")){if(ai.gItemNext=null,!isArray(o)){i.src=o;return}for(const r=o;e===ai.popup&&t.url===r&&(o=r[0]);){const{type:l}=await new Promise(c=>{i.src=o,i.onload=i.onerror=c});if(r[0]===o&&r.shift(),l==="load"){t.url=o;break}}}var ctrl=!1,hoverData=null,hoverTimer=0,ignoreKeyHeld=!1,setCtrl=e=>ctrl=e;function onMouseOver(e){if(relayEmbedEvent(e))return;let t=e.target;ignoreKeyHeld=e.shiftKey,!(!isEnabled||e.shiftKey||ai.zoomed||t===ai.popup||t===doc.body||t===doc.documentElement||t===elSetup||ai.gallery&&ai.rectHovered||!canClose())&&(t.shadowRoot&&(t=pierceShadow(t,e.clientX,e.clientY)),hoverData={e,node:t,start:now()},hoverTimer=hoverTimer||setTimeout(onMouseOverThrottled,SETTLE_TIME),t.addEventListener("mouseout",onMouseOutThrottled))}function onMouseOverThrottled(e){const{start:t,e:o,node:i,nodeOut:r}=hoverData||{};if(!i||i===r&&(hoverData=null,1))return;const l=e?0:t+SETTLE_TIME-now();if(hoverTimer=l>10&&setTimeout(onMouseOverThrottled,l))return;hoverData=null,rules||init();const s=adaptiveFind(i);s&&s.url&&s.node!==ai.node&&activate(s,o)}function onMouseOut(e){!e.relatedTarget&&!cfg.keepOnBlur&&!e.shiftKey&&canClose()&&deactivate()}function onMouseOutThrottled(){const e=hoverData;e&&(e.nodeOut=this),this.removeEventListener("mouseout",onMouseOutThrottled),hoverTimer=0}function onMouseOutShadow(e){const t=e.target.shadowRoot;t&&(t.removeEventListener("mouseover",onMouseOver),t.removeEventListener("mouseout",onMouseOutShadow))}function onMouseMove(e){if(trackMouse(e),!e.shiftKey){if(!ai.zoomed&&!ai.rectHovered&&canClose())deactivate();else if(ai.zoomed){move();const{cx:t,cy:o,view:{w:i,h:r}}=ai,l=i/6,c=r/6,s=t<l||t>i-l||o<c||o>r-c;set2(`${s?"+":"-"}edge`)}}}function onMouseDown({shiftKey:e,button:t,target:o}){!t&&o===ai.popup&&ai.popup.controls&&(e||!canClose())?ai.controlled=ai.zoomed=!0:t===2||e||(deactivate({wait:!0}),doc.addEventListener("mouseup",enable,{once:!0}))}function onMouseScroll(e){const t=(e.deltaY||-e.wheelDelta)<0?1:-1;if(ai.zoomed)zoomInOut(t);else if(ai.gNum>1&&ai.popup)next(-t);else if(cfg.zoom==="wheel"&&t>0&&ai.popup)toggleZoom();else if(canClose()){deactivate();return}dropEvent(e)}function onKeyDown(e){const t=describeKey(e),o=ai.popupShown;if(!o&&t==="^Control"&&(addEventListener("keyup",onKeyUp,!0),ctrl=!0),!o&&t==="^ContextMenu")return onContext.call(this,e);if(!(!o||e.repeat)){switch(t){case"+Shift":if(ai.shiftKeyTime)return;ai.shiftKeyTime=now(),set2("+shift"),cfg.uiInfo&&show(1),isVideo(o)&&(o.controls=!0);return;case"KeyA":o.toggleAttribute(NOAA_ATTR);break;case"ArrowRight":case"KeyJ":next(1);break;case"ArrowLeft":case"KeyK":next(-1);break;case"KeyC":ai.bar.firstChild?(setText(""),hide(0)):(setText(ai.barText),show(2));break;case"KeyD":saveFile();break;case"KeyF":o!==document.fullscreenElement?o.requestFullscreen():document.exitFullscreen();break;case"KeyH":case"KeyV":case"KeyL":case"KeyR":if(!o)return;if(t==="KeyH"||t==="KeyV"){const i=!!(ai.rotate%180)^t==="KeyH"?"flipX":"flipY";ai[i]=!ai[i]}else ai.rotate=((ai.rotate||0)+90*(t==="KeyL"?-1:1)+360)%360;updateDetails(),move();break;case"KeyI":(ai.barShown?hide:show)(2);break;case"KeyM":isVideo(o)&&(o.muted=!o.muted);break;case"KeyN":ai.night=o.classList.toggle(`${PREFIX}night`);break;case"KeyT":openInTab(tabFixUrl()||o.src),deactivate();break;case"Minus":case"NumpadSubtract":ai.zoomed?zoomInOut(-1):toggleZoom();break;case"Equal":case"NumpadAdd":ai.zoomed?zoomInOut(1):toggleZoom();break;case"Escape":deactivate({wait:!0});break;case"!Alt":return;default:deactivate({wait:!0});return}dropEvent(e)}}function onKeyUp(e){const t=ai.popupShown||!1;e.key==="Control"&&(t||removeEventListener("keyup",onKeyUp,!0),setTimeout(()=>ctrl=!1)),t&&e.key==="Shift"&&ai.shiftKeyTime?(set2("-shift"),cfg.uiInfo&&hide(1),t.controls&&(t.controls=!1),ai.controlled||!isFF&&now()-ai.shiftKeyTime>500?ai.controlled=!1:t&&(ai.zoomed||ai.rectHovered!==!1)?toggleZoom():deactivate({wait:!0}),ai.shiftKeyTime=0):describeKey(e)==="Control"&&!t&&!ignoreKeyHeld&&(cfg.start==="ctrl"||cfg.start==="context"||ai.rule.manual)&&(dropEvent(e),hoverData&&(hoverData.e=e,onMouseOverThrottled(!0)),ai.node&&(ai.force=!0,start()))}function onContext(e){if(ignoreKeyHeld)return;const t=ai.popupShown;cfg.zoom==="context"&&t&&toggleZoom()?dropEvent(e):!t&&(!cfg.videoCtrl||!isVideo(ai.node)||ctrl)&&(cfg.start==="context"||cfg.start==="contextMK"||cfg.start==="contextM"&&e.button===2||cfg.start==="contextK"&&e.button!==2||cfg.start==="auto"&&ai.rule.manual)?(ai.node||(hoverData||onMouseOver(e),onMouseOverThrottled(!0)),ai.node&&(ai.force=!0,start(),dropEvent(e))):t&&setTimeout(deactivate,SETTLE_TIME,{wait:!0})}function onVisibility(){ctrl=!1}function pierceShadow(e,t,o){for(let i;i=e.shadowRoot;){i.addEventListener("mouseover",onMouseOver,{passive:!0}),i.addEventListener("mouseout",onMouseOutShadow);const r=i.elementFromPoint(t,o);if(!r||r===e)break;e=r}return e}function toggle2(e){const t=e?"addEventListener":"removeEventListener",o={passive:!0,capture:!0};window[t]("mousemove",onMouseMove,o),window[t]("mouseout",onMouseOut,o),window[t]("mousedown",onMouseDown,o),window[t]("keyup",onKeyUp,!0),window[t](WHEEL_EVENT,onMouseScroll,{passive:!1,capture:!0}),ai.node.removeEventListener("mouseout",onMouseOutThrottled)}function trackMouse(e){const t=ai.cx=e.clientX,o=ai.cy=e.clientY,i=ai.rect||(ai.rect=rect());ai.rectHovered=i?t>i.left-2&&t<i.right+2&&o>i.top-2&&o<i.bottom+2:!1}function zoomInOut(e){const t=scaleIndex(e),o=ai.scales.length;t>=0&&t<o&&(ai.scale=ai.scales[t]);const i=cfg.zoomOut;if(t<=0&&i!=="stay"){if(ai.scaleFit<ai.scale*.99)ai.scales.unshift(ai.scale=ai.scaleFit);else if((t<=0&&i==="close"||t<0&&!ai.rectHovered)&&ai.gNum<2){deactivate({wait:!0});return}ai.zoomed=i!=="unzoom"}else ai.popup.classList.toggle(`${PREFIX}zoom-max`,ai.scale>=4&&t>=o-1);ai.zooming&&ai.popup.classList.add(`${PREFIX}zooming`),move(),updateDetails()}function createGlobalStyle(){return setGlobalStyle((String.raw`
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
${setPopupStyleBase(`
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
`)}
}
#\mpiv-popup.\mpiv-show {
  ${cfg.uiBorder?`border: ${cfg.uiBorder}px solid ${color("Border")};`:""}
  ${cfg.uiPadding?`padding: ${cfg.uiPadding}px;`:""}
  ${cfg.uiMargin?`margin: ${cfg.uiMargin}px;`:""}
}
#\mpiv-popup.\mpiv-show${cfg.uiShadowOnLoad?"[loaded]":""} {
  background-color: ${color("Background")};
  ${cfg.uiShadow?`box-shadow: 2px 4px ${cfg.uiShadow}px 4px ${color("Shadow")};`:""}
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
`)).replace(/\\mpiv-status/g,STATUS_ATTR).replace(/\\mpiv-/g,PREFIX)),setPopupStyleBase(popupStyleBase.replace(/;/g,"!important;")),globalStyle}var isEnabled=!0,isImageTab=!1,globalStyle="",popupStyleBase="",NOP=/\.(facebook|instagram|chrome|google)\.com$/.test(dotDomain)&&(()=>{}),setGlobalStyle=e=>globalStyle=e,setNOP=e=>NOP=e,setIsImageTab=e=>isImageTab=e,setIsEnabled=e=>isEnabled=e,setPopupStyleBase=e=>popupStyleBase=e,tabfix=/\.(dumpoir|greatfon|picuki)\.com$/.test(dotDomain);function activate(e,t){const{match:o,node:i,rule:r,url:l}=e,c=cfg.start==="auto",s=cfg.videoCtrl&&isVideo(i);elSetup&&console.info({node:i,rule:r,url:l,match:o}),!(c&&s&&!ctrl)&&(ai.node&&deactivate(),setAi(e),ai.force=ctrl,ai.gNum=0,ai.zooming=cfg.css.includes(`${PREFIX}zooming`),c&&suppressTooltip(),updateViewSize(),setCtrl(!1),toggle2(!0),trackMouse(t),ai.force&&(c||cfg.start==="ctrl"||cfg.start==="context")?start():(c||cfg.preload)&&!s&&!r.manual?belate(c):set2("ready"))}function belate(e){cfg.preload?(ai.preloadStart=e?now():-1,start(),set2("+preloading")):ai.timer=setTimeout(start,cfg.delay)}function checkProgress({start:e}={}){const t=ai.popup;if(!t||ai.committed)return;const o=ai.nwidth=t.naturalWidth||t.videoWidth||ai.popupLoaded&&innerWidth/2,i=ai.nheight=t.naturalHeight||t.videoHeight||ai.popupLoaded&&innerHeight/2;if(i)return canCommit(o,i);e&&(clearInterval(timerProgress),setTimerProgress(setInterval(checkProgress,150)))}var canClose=(e=ai.popup)=>!e||(isVideo(e)?!cfg.keepVids:document.fullscreenElement!==e);function canCommit(e,t){if(!ai.force&&ai.rect&&!ai.gItems&&Math.max(e/(ai.rect.width||1),t/(ai.rect.height||1))<cfg.scale)return deactivate(),!1;stopTimers();let o=ai.preloadStart;if(!(o<0&&!ai.force||!ai.popup))return o>0&&(o+=cfg.delay-now())>0?ai.timer=setTimeout(checkProgress,o):(!e||!t)&&(ai.urls||[]).length?handleError({type:"error"}):(commit(),ai.committed=!0),!0}async function commit(){const e=ai.popupShown=ai.popup,t=cfg.waitLoad&&isFunction(e.decode);if(t&&(await e.decode(),e!==ai.popup))return;set2("-preloading"),updateStyles(),measurePopup(),(!(cfg.zoom==="auto"||isImageTab&&cfg.imgtab)||toggleZoom({keepScale:!0})===void 0)&&move(),updateName(),updateDetails(),set2(!ai.popupLoaded&&"loading"),ai.large=ai.nwidth>e.clientWidth+ai.extras.w||ai.nheight>e.clientHeight+ai.extras.h,ai.large&&(set2("+large"),isFF&&e.complete&&!t&&(e.style.backgroundImage=`url('${e.src}')`)),ai.preloadStart<0&&isFunction(e.play)&&e.play().catch(now)}function deactivate({wait:e}={}){stopTimers(!0),ai.req&&tryCatch(ai.req.abort),ai.tooltip&&(ai.tooltip.node.title=ai.tooltip.text),set2(!1),set(!1),toggle2(!1),destroy(),e&&(isEnabled=!1,setTimeout(enable,200)),setAi({rule:{}})}function enable(){isEnabled=!0}function handleError(e,t=ai.rule){if(t&&t.onerror==="skip")return;if(ai.imageUrl&&!ai.xhr&&!ai.imageUrl.startsWith(location.origin+"/")&&location.protocol==="https:"&&init2){create2(ai.imageUrl,ai.pageUrl,e);return}const o=formatError(e,t);(!t||!ai.urls||!ai.urls.length)&&console.warn(...o),ai.urls&&ai.urls.length?(ai.url=ai.urls.shift(),ai.url?(ai.committed=!1,stopTimers(),startSingle()):deactivate()):ai.node&&(set2("error"),set(o.message,"error"))}function onMessage(e){if(!onEmbedMessage(e)&&typeof e.data=="string"&&e.data===MSG.getViewSize){e.stopImmediatePropagation();for(const t of doc.getElementsByTagName("iframe"))if(t.contentWindow===e.source){const o=frameSize(t,window).join(":");e.source.postMessage(`${MSG.viewSize}:${o}`,"*");return}}}function onMessageChild(e){if(e.source===parent&&typeof e.data=="string"&&e.data.startsWith(MSG.viewSize)){e.stopImmediatePropagation(),removeEventListener("message",onMessageChild,!0);const[t,o,i,r]=e.data.split(":").slice(1).map(parseFloat);t&&o&&(ai.view={w:t,h:o,x:i,y:r})}}function start(){updateStyles(),ai.gallery?startGallery():startSingle()}function startSingle(){if(loading(),ai.force&&ai.preloadStart<0){commit();return}ai.imageUrl=null,ai.rule.follow&&!ai.rule.q&&!ai.rule.s?findRedirect():ai.rule.q&&!isArray(ai.urls)?startFromQ():(create2(ai.url),runC())}async function startFromQ(){try{const{responseText:e,doc:t,finalUrl:o}=await getDoc(ai.url),i=runQ(e,t,o);if(!i){handleError(['The "q" rule did not produce any URL.',`
Remote doc: %o`,t]);return}if(isFollowableUrl(i,ai.rule)){const r=find(i,ai.node,{noHtml:!0});if(!r||!r.url)throw`Couldn't follow URL: ${i}`;Object.assign(ai,r),startSingle()}else create2(i,o),runC(e,t)}catch(e){handleError(e)}}async function startGallery(){loading();try{const e=ai.url,t=await getDoc(ai.rule.s!=="gallery"&&e),o=await new Promise(i=>{const r=ai.gallery(t.responseText,t.doc,t.finalUrl,ai.match,ai.rule,ai.node,i);r!==void 0&&i(r)});if(ai.url!==e)return;if(ai.gNum=o.length,ai.gItems=o.length&&o,ai.gItems){const i=o.index;ai.gIndex=i>=0&&o[i]?+i:findIndex(typeof i=="string"?i:ai.url),setTimeout(next)}else throw"Empty gallery"}catch(e){handleError(e)}}function stopTimers(e){for(const t of["timer","timerStatus",e&&"timerBar"])clearTimeout(ai[t]);clearInterval(timerProgress)}function toggleZoom({keepScale:e}={}){const t=ai.popup;if(!(!t||!ai.scales||ai.scales.length<2))return ai.zoomed=!ai.zoomed,ai.scale=ai.zoomed&&scaleForFirstZoom(e)||ai.scales[0],ai.zooming&&t.classList.add(`${PREFIX}zooming`),move(),updateDetails(),set2(ai.zoomed?"zoom":!1),ai.zoomed}function updateStyles(){addStyle("global",(globalStyle||createGlobalStyle())+getCss(cfg)),addStyle("rule",ai.rule.css||"")}function create3({data:e,save:t}){if(typeof e=="string"&&(e=tryJSON(e)),(typeof e!="object"||!e)&&(e={}),e.fit=["all","large","no",""].includes(e.fit)?e.fit:!(e.scales||0).length||`${e.scales}`==`${DEFAULTS.scales}`?"large":"",e.version!==DEFAULTS.version){typeof e.hosts=="string"&&(e.hosts=e.hosts.split(`
`).map(o=>tryJSON(o)||o).filter(Boolean)),(e.close===!0||e.close===!1)&&(e.zoomOut=e.close?"auto":"stay");for(const o in DEFAULTS)typeof e[o]!=typeof DEFAULTS[o]&&(e[o]=DEFAULTS[o]);e.version===3&&e.scales[0]===0&&(e.scales[0]="0!");for(const o in e)o in DEFAULTS||delete e[o];e.version=DEFAULTS.version,t&&setValue("cfg",e)}return Object.keys(cfg||{}).some(o=>/^ui|^(css|globalStatus)$/.test(o)&&cfg[o]!==e[o])&&setGlobalStyle(""),isArray(e.scales)||(e.scales=[]),e.scales=[...new Set(e.scales)].sort((o,i)=>parseFloat(o)-parseFloat(i)),Object.assign({},DEFAULTS,e)}async function load(e){return e.data=await getValue("cfg"),create3(e)}function getCss({css:e}){return e.includes("{")?e:`#${PREFIX}-popup {${e}}`}var DEFAULTS={__proto__:null,center:!1,css:"",delay:500,fit:"",globalStatus:!1,hosts:[{name:"No popup for YouTube thumbnails",d:"www.youtube.com",e:"ytd-rich-item-renderer *, ytd-thumbnail *",s:""},{name:"No popup for SVG/PNG icons",d:"",e:"img[src*='icon']",r:"//[^/]+/.*\\bicons?\\b.*\\.(?:png|svg)",s:""}],imgtab:!1,keepOnBlur:!1,keepVids:!1,mute:!1,night:!1,preload:!1,scale:1.05,scales:["0!",.125,.25,.5,.75,1,1.5,2,2.5,3,4,5,8,16],start:"auto",startAlt:"context",startAltShown:!1,uiBackgroundColor:"#ffffff",uiBackgroundOpacity:100,uiBorderColor:"#000000",uiBorderOpacity:100,uiBorder:0,uiFadein:!0,uiFadeinGallery:!0,uiInfo:!0,uiInfoCaption:!0,uiInfoHide:3,uiInfoOnce:!0,uiShadowColor:"#000000",uiShadowOpacity:80,uiShadow:20,uiShadowOnLoad:!0,uiPadding:0,uiMargin:0,version:6,videoCtrl:!0,waitLoad:!1,xhr:!0,zoom:"context",zoomOut:"auto",zoomStep:133},CSS_SETUP_X=20,CSS_SETUP_MAX_Y=200,CSS_SETUP=`
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
    content: 'MPIV ${info.script.version}';
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
`;function createSetupElement(){const e="https://github.com/tophf/mpiv/wiki/",t="Leave it empty and click Apply or OK to restore the default values.",o=(a,p,d)=>$new("a",Object.assign({target:"_blank"},p&&{href:p},d),a),i=(a,p,d="",m)=>$new("label",Object.assign({title:d},m),[$new("input",{id:p,type:"checkbox"}),a]),r=a=>a[0]==="{"?$new("kbd",a.slice(1,-1)):a,l=(a,p="",d=0,m=100,g=1,y="range")=>$new("input",{id:a,min:d,max:m,step:g,type:y,"data-title":p}),c=(a,p,d)=>$new("label",[a,$new("select",{id:p},Object.entries(d).map(([m,g])=>$new("option",Object.assign({value:m},typeof g=="object"?g:{textContent:g}))))]),s=([a,p])=>$new("tr",a?[$new("th",((a=a.split(/(\n)/))[0]=$new("b",a[0]))&&a),$new("td",p.split(/({.+?})/).map(r))]:$new("br")),u='...when the "popup shows" option is "automatically"',n={"data-start-auto":""};return[$new("style#_cssSetup",CSS_SETUP),$new("style#_css"),$new(`main#${PREFIX}setup`,[$new("#_mover"),$new("#_x","x"),$new("ul#_ul.column",[$new("details",{style:"order:1; padding-top: .5em;"},[$new("summary",{style:"cursor: pointer"},$new("b","Help & hotkeys...")),$new("#_usage",[$new("table",[["Activate","hover the target"],["Deactivate","move cursor off target, or click, or zoom out fully"],["Ignore target","hold {Shift} \u23F5 hover the target \u23F5 release the key"],["Freeze popup","hold {Shift} \u23F5 leave the target \u23F5 release the key"],[`Force-activate
(videos or small pics)`,"hold {Ctrl} \u23F5 hover the target \u23F5 release the key"]].map(s)),$new("table",[["Start zooming",`configurable (automatic or via right-click)
or tap {Shift} while popup is visible`],["Zoom","mouse wheel"],[],["Rotate",'{L} {r} for "left" or "right"'],["Flip/mirror",'{h} {v} for "horizontal" or "vertical"'],[`Previous/next
(in album)`,"mouse wheel, {j} {k} or {\u2190} {\u2192} keys"]].map(s)),$new("table",[["Antialiasing","{a}"],["Caption in info","{c}"],["Download","{d}"],["Fullscreen","{f}"],["Info","{i}"],["Mute","{m}"],["Night mode","{n}"],["Open in tab","{t}"]].map(s))])]),$new("li.options.stretch",[c("Popup shows on","start",{context:"Right-click / \u2261 / Ctrl",contextMK:"Right-click / \u2261",contextM:"Right-click",contextK:{textContent:"\u2261 key",title:"\u2261 is the Menu key (near the right Ctrl)"},ctrl:"Ctrl",auto:"automatically"}),$new("label",{title:u,...n},["after, sec",l("delay","seconds",.05,10,.05,"number")]),$new("label",{title:"(if the full version of the hovered image is ...% larger)"},["if larger, %",l("scale",null,0,100,1,"number")]),c("Zoom activates on","zoom",{context:"Right click / Shift",wheel:"Wheel up / Shift",shift:"Shift",auto:"automatically"}),c("...and zooms to","fit",{all:"fit to window",large:"fit if larger",no:"100%","":{textContent:"custom",title:"Use custom scale factors"}})]),$new("li.options",[$new("label",["Zoom step, %",l("zoomStep",null,100,400,1,"number")]),c("When fully zoomed out:","zoomOut",{stay:"stay in zoom mode",auto:"stay if still hovered",unzoom:"undo zoom mode",close:"close popup"}),$new("label",{style:"flex: 1",title:`
              Scale factors to use when \u201Czooms to\u201D selector is set to \u201Ccustom\u201D.
              0 = fit to window,
              0! = same as 0 but also removes smaller values,
              * after a value marks the default zoom factor, for example: 1*
              The popup won't shrink below the image's natural size or window size for bigger mages.
              ${t}
            `.trim().replace(/\n\s+/g,"\r")},["Custom scale factors:",$new("input#scales",{placeholder:t})])]),$new("li.options.row",[$new([i("Centered*","center","...or try to keep the original link/thumbnail unobscured by the popup"),i("Preload on hover*","preload","Provides smoother experience but increases network traffic"),i("Require Ctrl key for video*","videoCtrl",u,n),i("Mute videos*","mute",'Hotkey: "m" in the popup'),i("Keep playing video*","keepVids","...until you press Esc key or click elsewhere"),i("Keep preview on blur*","keepOnBlur","i.e. when mouse pointer moves outside the page")]),$new([i("Show complete image*","waitLoad","...or immediately show a partial image while still loading"),i("Shadow only when complete*","uiShadowOnLoad","...to avoid showing the semi-transparent background while still loading from a slow site"),$new("div.flex",{style:"align-items:center"},[i("Info: show for","uiInfo",'Hotkey: "i" (or hold "Shift") in the popup'),$new("input#uiInfoHide",{min:1,step:"any",type:"number"}),"sec"]),i("Info: only once*","uiInfoOnce","...or every time the info changes"),i("Info: caption*","uiInfoCaption",'Hotkey: "c" in the popup'),i("Fade-in transition","uiFadein"),i("Fade-in transition in gallery","uiFadeinGallery")]),$new([i("Night mode*","night",'Hotkey: "n" in the popup'),i("Run in image tabs","imgtab"),i("Spoof hotlinking*","xhr","Disable only if you spoof the HTTP headers yourself"),i("Set status on <html>*","globalStatus","Causes slowdowns so don't enable unless you explicitly use it in your custom CSS"),i("Auto-start switch in menu*","startAltShown","Show a switch for 'auto-start' mode in userscript manager menu")])]),$new("li.options.stretch",[$new("label",["Background",$new("span",[$new("input#uiBackgroundColor",{type:"color"}),$new("u"),l("uiBackgroundOpacity","Opacity: $%")])]),$new("label",["Border color, opacity, size",$new("span",[$new("input#uiBorderColor",{type:"color"}),$new("u"),l("uiBorderOpacity","Opacity: $%"),l("uiBorder","Border size: $px",0,20)])]),$new("label",["Shadow color, opacity, size",$new("span",[$new("input#uiShadowColor",{type:"color"}),$new("u"),l("uiShadowOpacity","Opacity: $%"),l("uiShadow",`Shadow blur radius: $px
"0" disables the shadow.`,0,20)])]),$new("label",["Padding",$new("span",l("uiPadding","Padding: $px"))]),$new("label",["Margin",$new("span",l("uiMargin","Margin: $px"))])]),$new("li",[o("Custom CSS:",`${e}Custom-CSS`)," e.g. ",$new("b","#mpiv-popup { animation: none !important }"),o("View the built-in CSS","",{id:"_reveal",tabIndex:0,style:"float: right",title:"You can copy parts of it to override them in your custom CSS"}),$new(".column",[$new("textarea#css",{spellcheck:!1}),$new("textarea#_cssApp",{spellcheck:!1,hidden:!0,readOnly:!0,rows:30})])]),$new("li.flex",{style:"justify-content: space-between;"},[$new("div",o("Custom host rules:",`${e}Custom-host-rules`)),$new("div",{style:"white-space: pre-line"},["To disable, put any symbol except ",$new("code","a..z 0..9 - ."),`
in "d" value, for example `,$new("code",'"d": "!foo.com"')]),$new("div",$new("input#_search",{type:"search",placeholder:"Search",style:"width: 10em; margin-left: 1em"}))]),$new("li",{style:"margin-left: -3px; margin-right: -3px; overflow-y: auto; padding-left: 3px; padding-right: 3px;"},[$new("div#_rules.column",$new("textarea",{spellcheck:!1,rows:1}))]),$new("li#_rules2")]),$new("div.flex",[$new("button#_ok",{accessKey:"o"},"OK"),$new("button#_apply",{accessKey:"a"},"Apply"),$new("button#_cancel","Cancel"),$new("a",{href:`${e}Rules`,style:"margin: 0 auto"},$new("button#_install",{style:"color: inherit"},"Find rule...")),$new("button#_import","Import"),$new("button#_export",{style:"margin: 0"},"Export"),$new("div#_exportNotification",{hidden:!0},"Copied to clipboard")])])]}async function setup({rule:e}={}){if(!isFunction(doc.body.attachShadow)){alert(`Cannot show MPIV config dialog: the browser is probably too old.
You can edit the script's storage directly in your userscript manager.`);return}const t=setup.RULE||(setup.RULE=Symbol("rule"));let o,i=(elSetup||0).shadowRoot,{blankRuleElement:r}=setup,l,c=0,s=0,u=0,n=0;const a=setup.UI=new Proxy({},{get(f,v){return i.getElementById(v)}});elSetup||p(),elSetup.parentElement!==doc.body&&(d(await load({save:!0})),doc.body.append(elSetup)),e&&k(e);function p(){setElSetup($new("div",{contentEditable:!0})),i=elSetup.attachShadow({mode:"open"}),i.append(...createSetupElement()),m()}function d(f){o=f,L(),A(),z(),requestAnimationFrame(()=>{a.css.style.minHeight=clamp(a.css.scrollHeight,40,elSetup.clientHeight/4)+"px"})}function m(){a._mover.onmousedown=h=>{h.button||eventModifiers(h)||(l||(l=a._cssSetup.sheet,l.insertRule(":host {}"),l=l.cssRules[1]),addEventListener("mousemove",v,!0),addEventListener("mouseup",b,!0),addEventListener("keydown",w,!0),c=h.x-u,s=h.y-n,$css(l,{opacity:.75}))},a._apply.onclick=a._cancel.onclick=a._ok.onclick=a._x.onclick=g,a._export.onclick=h=>{dropEvent(h),setClipboard(stringify(y(),null,"  ")),a._exportNotification.hidden=!1,setTimeout(()=>a._exportNotification.hidden=!0,1e3)},a._import.onclick=h=>{dropEvent(h);const _=prompt("Paste settings:");_&&d(create3({data:_}))},a._install.onclick=setupRuleInstaller;const f=a._cssApp;a._reveal.onclick=h=>{h.preventDefault(),f.hidden=!f.hidden,f.hidden||(f.value||(updateStyles(),f.value=globalStyle.trim(),f.setSelectionRange(0,0)),f.focus())},a.start.onchange=function(){a[PREFIX+"setup"].dataset.start=this.value},a.xhr.onclick=({target:h})=>h.checked||confirm($propUp(h,"title"));for(const h of $$('[type="color"]',i))h.oninput=S,h.elSwatch=h.nextElementSibling,h.elOpacity=a[h.id.replace("Color","Opacity")],h.elOpacity.elColor=h;function v({x:h,y:_}){h=u=clamp(h-c,-innerWidth+CSS_SETUP_X*4,elSetup.clientWidth-CSS_SETUP_X),_=n=clamp(_-s,0,innerHeight-CSS_SETUP_X*3),$css(l,{transform:`translate(${h}px, ${_}px)`}),a._ul.style.maxHeight=`calc(100vh - ${CSS_SETUP_MAX_Y+_-CSS_SETUP_X}px)`}function b(){removeEventListener("mousemove",v,!0),removeEventListener("mouseup",b,!0),removeEventListener("keydown",w,!0),$css(l,{opacity:""})}function w(h){h.key==="Escape"&&!eventModifiers(h)&&(h.stopPropagation(),v({x:c,y:s}),b())}function S(){this.elSwatch.style.setProperty("--color",color(this.value,this.elOpacity.valueAsNumber))}for(const h of $$('[type="range"]',i))h.oninput=R,h.onblur=C,h.addEventListener("focusin",O);function C(h){this.elEdit&&h.relatedTarget!==this.elEdit&&this.elEdit.onblur(h)}function O(){if(this.elEdit)return;const{min:h,max:_,step:j,value:q}=this;this.elEdit=$new("input",{value:q,min:h,max:_,step:j,className:"range-edit",style:`left: ${this.offsetLeft}px; margin-top: ${this.offsetHeight+1}px`,type:"number",elRange:this,onblur:T,oninput:I}),this.insertAdjacentElement("afterend",this.elEdit)}function R(){this.title=(this.dataset.title||"").replace("$",this.value),this.elColor&&this.elColor.oninput(),this.elEdit&&(this.elEdit.valueAsNumber=this.valueAsNumber)}function T(h){h.relatedTarget!==this.elRange&&(this.remove(),this.elRange.elEdit=null)}function I(){this.elRange.valueAsNumber=this.valueAsNumber,this.elRange.oninput()}i.addEventListener("keydown",h=>!h.altKey&&!h.metaKey&&h.stopPropagation(),!0)}function g(f){const v=this.id==="_apply";if(f&&(this.id==="_ok"||v)&&(setCfg(o=y({save:!0,clone:v})),init(),reRegisterAlt(),v))return A();$remove(elSetup),setElSetup(null)}function y({save:f,clone:v}={}){let b={};for(const w of $$("input[id], select[id]",i))b[w.id]=w.type==="checkbox"?w.checked:w.type==="number"||w.type==="range"?w.valueAsNumber:w.value||"";return Object.assign(b,{css:a.css.value.trim(),delay:a.delay.valueAsNumber*1e3,hosts:E(),scale:clamp(a.scale.valueAsNumber/100,0,1)+1,scales:a.scales.value.trim().split(/[,;]*\s+/).map(w=>w.replace(",",".")).filter(w=>!isNaN(parseFloat(w)))}),v&&(b=JSON.parse(stringify(b))),create3({data:b,save:f})}function E(){return[...a._rules.children].map(f=>[f.value.trim(),f[t]]).sort((f,v)=>f[0]<v[0]?-1:f[0]>v[0]?1:0).map(([f,v])=>v||f).filter(Boolean)}function M({target:f}){let v,b,w;const S=f.previousElementSibling;if(f.value){v=parse(f.value),b=v instanceof Error&&(v.message||String(v));const C=!b&&v&&typeof v.d=="string"&&!/^[-.a-z0-9]*$/i.test(v.d);w=[C&&'Disabled due to invalid characters in "d"',b].filter(Boolean).join(`
`),f.classList.toggle("invalid-domain",C),f.classList.toggle("matching-domain",!!v.d&&hostname.includes(v.d)),S||f.insertAdjacentElement("beforebegin",r.cloneNode())}else S&&(S.focus(),f.remove());f[t]=!b&&v,f.title=w,f.setCustomValidity(b||"")}async function x({target:f,relatedTarget:v}){if(f!==this){if(await new Promise(setTimeout),f[t]&&f.rows<2){let b=f.selectionStart;const w=f.value=format(f[t],{expand:!0});b+=w.slice(0,b).match(/^\s*/gm).reduce((S,C)=>S+C.length,0),f.setSelectionRange(b,b),f.rows=w.match(/^/gm).length}this.contains(v)||(v=[...$$('[style*="height"]',this)].find(b=>b!==f))}}function k(f){const v=a._rules.children;let b=[...v].find(S=>deepEqual(S[t],f));if(!b){b=v[0],b[t]=f,b.value=format(f),b.hidden=!1;const S=Math.max(0,E().indexOf(f));v[S].insertAdjacentElement("afterend",b),v[0].insertAdjacentElement("beforebegin",r.cloneNode())}const w=b.getBoundingClientRect();(w.bottom<0||w.bottom>b.parentNode.offsetHeight)&&b.scrollIntoView(),b.classList.add("highlight"),b.addEventListener("animationend",()=>b.classList.remove("highlight"),{once:!0}),b.focus()}function z(){const f=a._rules;f.addEventListener("input",M),f.addEventListener("focusin",x),f.addEventListener("paste",x),r=setup.blankRuleElement=setup.blankRuleElement||f.firstElementChild.cloneNode(),r.nextElementSibling&&(f.textContent="",f.appendChild(r.cloneNode()));for(const b of o.hosts||[]){const w=r.cloneNode();w.value=typeof b=="string"?b:format(b),f.appendChild(w),M({target:w})}const v=a._search;v.oninput=()=>{setup.search=v.value;const b=v.value.toLowerCase();for(const w of f.children)w.hidden=b&&!w.value.toLowerCase().includes(b)},v.value=setup.search||"",v.value&&v.oninput()}function A(){a.scales.value=o.scales.join(" ").trim()||DEFAULTS.scales.join(" "),a._css.textContent=getCss(cfg)}function L(){for(const f of $$("input[id], select[id], textarea[id]",i))f.id in o&&(f[f.type==="checkbox"?"checked":"value"]=o[f.id]);for(const f of $$('input[type="range"]',i))f.oninput();for(const f of $$('a[href^="http"]',i))Object.assign(f,{target:"_blank",rel:"noreferrer noopener external"});a.delay.valueAsNumber=o.delay/1e3,a.scale.valueAsNumber=Math.round(clamp(o.scale-1,0,1)*100),a.start.onchange()}}function setupClickedRule(e){let t;const o=e.target.closest("blockquote, code, pre");o&&!e.button&&!eventModifiers(e)&&(t=fromElement(o))&&(dropEvent(e),setup({rule:t}))}async function setupRuleInstaller(e){dropEvent(e);const t=setup.UI._rules2;this.disabled=!0,this.textContent="Loading...";let o;try{o=i(await getDoc(this.parentElement.href)),this.textContent="Rules loaded.";const u=$new("select",{size:8,style:"width: 100%",ondblclick:a=>a.target!==u&&s(a),onkeyup:a=>a.key==="Enter"&&s(a)},o.map(l)),n=u.selectedIndex=r();t.append($new("div#_installHint",["Double-click the rule (or select and press Enter) to add it. ","Click ",$new("code","Apply")," or ",$new("code","OK")," to confirm."]),u),n&&requestAnimationFrame(()=>{const a=u.selectedOptions[0].offsetTop-u.offsetTop;u.scrollTo(0,a-u.offsetHeight/2)}),u.focus()}catch(u){t.textContent="Error loading rules: "+(u.message||u)}function i({doc:u}){return[...$$("#wiki-body tr",u)].map(n=>[n.cells[0].textContent.trim(),fromElement(n.cells[1])]).filter(([n,a])=>n&&a&&(!a.d||hostname.includes(a.d))).sort(([n],[a])=>(n=n.toLowerCase())<(a=a.toLowerCase())?-1:n>a?1:0)}function r(){const u=`.${hostname}.`;let n=0,a=0,p=0;for(const[d,{d:m}]of o){let g=!!(m&&hostname.includes(m))*10;for(const y of d.toLowerCase().split(/[^a-z\d.-]+/i))g+=u.includes(`.${y}.`)&&y.length;g>n&&(n=g,a=p),p++}return a}function l([u,n]){return $new("option",{textContent:u,title:format(n,{expand:!0}).replace(/^{|\s*}$/g,"").split(`
`).slice(0,12).map(c).filter(Boolean).join(`
`)})}function c(u,n,a){return n===9&&a.length>10?"...":n>10?"":(u.length>100?u.slice(0,100)+"...":u).replace(/^\s/,"")}function s(u){eventModifiers(u)||setup({rule:o[u.currentTarget.selectedIndex][1]})}}var curAltName="",enabled=window===top&&!!registerMenuCommand,unreg=unregisterMenuCommand,makeAltName=()=>unreg?`MPIV: auto-start is ${cfg.start==="auto"?"ON":"OFF"}`:"MPIV: toggle auto-start";function register(){enabled&&(registerMenuCommand("MPIV: configure",setup),registerAlt())}function registerAlt(){cfg.startAltShown&&(curAltName=makeAltName(),registerMenuCommand(curAltName,onAltToggled))}function reRegisterAlt(){const e=curAltName;e&&unreg&&unreg(e),(!e||unreg)&&registerAlt()}function onAltToggled(){cfg.start==="auto"?cfg.start=cfg.startAlt||(cfg.startAlt="context"):(cfg.startAlt=cfg.start,cfg.start="auto"),reRegisterAlt()}if((async()=>{setCfg(await load({save:!0})),doc.body||await new Promise(t=>new MutationObserver((o,i)=>doc.body&&(i.disconnect(),t())).observe(document,{subtree:!0,childList:!0}));const e=doc.body.firstElementChild;e&&(setIsImageTab(e===doc.body.lastElementChild&&e.matches("img, video")),setIsEnabled(cfg.imgtab||!isImageTab)),register(),initEmbed(),addEventListener("mouseover",onMouseOver,!0),addEventListener("contextmenu",onContext,!0),addEventListener("keydown",onKeyDown,!0),addEventListener("visibilitychange",onVisibility,!0),addEventListener("blur",onVisibility,!0),["greasyfork.org","github.com"].includes(hostname)&&addEventListener("click",setupClickedRule,!0),addEventListener("message",onMessage,!0)})(),window.trustedTypes){const e=window.trustedTypes,t="createPolicy",o=e[t];e[t]=function i(r,l){let c;const s=o.call(e,r,l);return(trustedHTML||l[c="createHTML"]&&setTrustedHTML(s[c].bind(s)))&&(trustedScript||l[c="createScript"]&&setTrustedScript(s[c].bind(s)))&&e[t]===i&&delete e[t],s}}
