// ==UserScript==
// @name       HTML5视频播放工具
// @name:en	   HTML5 Video Playing Tools
// @homepage https://bbs.kafan.cn/thread-2093014-1-1.html
// @match    https://*.qq.com/*
// @exclude  https://user.qzone.qq.com/*
// @match    https://www.weiyun.com/video_*
// @match    https://v.youku.com/v*
// @match    https://m.youku.com/*
// @match    https://vku.youku.com/live/*
// @match    https://video.tudou.com/v/*
// @match    https://www.iqiyi.com/*
// @match    https://live.bilibili.com/*
// @match    https://www.bilibili.com/*
// @match    https://www.ixigua.com/*
// @match    https://www.toutiao.com/video/*
// @match    https://www.acfun.cn/*
// @match    https://live.acfun.cn/live/*
// @match    http://v.pptv.com/show/*
// @match    https://v.pptv.com/show/*
// @match    https://www.miguvideo.com/*
// @match    https://tv.sohu.com/*
// @match    https://film.sohu.com/album/*
// @match    https://www.mgtv.com/*
// @match    https://movie.douban.com/subject/*
// @version    2.0.2
// @match    https://pan.baidu.com/*
// @match    https://yun.baidu.com/*
// @match    https://*.163.com/*
// @match    https://*.icourse163.org/*
// @match    http://video.sina.*/*
// @match    https://video.sina.*/*
// @match    http://k.sina.*/*
// @match    https://k.sina.*/*
// @match    https://weibo.com/*
// @match    https://*.weibo.com/*
// @match    https://pan.baidu.com/*
// @match    https://yun.baidu.com/*
// @match    http://v.ifeng.com/*
// @match    https://v.ifeng.com/*
// @match    http://news.mtime.com/*
// @match    http://video.mtime.com/*
// @GM_info
// @match    https://www.youtube.com/*
// @match    https://www.ted.com/talks/*
// @match    https://www.twitch.tv/*
// @inject-into content
// @match    https://www.yy.com/*
// @match    https://www.huya.com/*
// @match    https://v.douyu.com/*
// @match    https://www.douyu.com/*
// @match    https://live.douyin.com/*
// @match    https://www.douyin.com/*

// @match    https://www.longzhu.com/*
// @match    https://www.zhanqi.tv/*
// @run-at     document-start
// @require    https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.min.js
// @require    https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js
// @grant      GM_addStyle
// @include    */play*
// @include    *play/*
// @exclude    https://www.dj92cc.net/dance/play/id/*
// @grant      window.onurlchange
// @grant      unsafeWindow
// @grant      GM_registerMenuCommand
// @grant      GM_setValue
// @grant      GM_getValue
// @namespace  https://greasyfork.org/users/7036
// @license    MIT
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/HTML5E8A786E9A291E692ADE694BEE5B7A5E585B7.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/HTML5E8A786E9A291E692ADE694BEE5B7A5E585B7.meta.js
// ==/UserScript==
"use strict";const curLang=navigator.language.slice(0,2),i18n={zh:{console:`%c\u811A\u672C[%s] \u53CD\u9988\uFF1A%s
%s`,cacheStoringError:"\u76F4\u63A5\u5A92\u4F53\u7C7B\u578B\uFF08\u5982MP4\u683C\u5F0F\uFF09\u7F13\u5B58\u65E0\u6548\u679C\uFF01",cacheStoringConfirm:"\u7F13\u51B2\u6A21\u5F0F\u4E8C\u9009\u4E00\uFF0C\u786E\u8BA4\u5219\u5168\u90E8\u7F13\u51B2\uFF0C\u53D6\u6D88\u5219\u6309\u9ED8\u8BA4\u7F13\u51B2\u533A\u5927\u5C0F\u8FDB\u884C\u7F13\u51B2\u3002\u89C6\u9891\u7F13\u5B58\u7684\u6709\u6548\u6027\u68C0\u6D4B\uFF0C\u518D\u770B\u5DF2\u89C2\u770B\u89C6\u9891\u7247\u6BB5\u4E0D\u4EA7\u751F\u7F51\u7EDC\u6D41\u91CF\u5219\u53EF\u7F13\u5B58\u3002\u7F13\u51B2\u65F6\u518D\u6309M\u952E\u5219\u53D6\u6D88\u7F13\u51B2\uFF01",cantOpenPIP:`\u65E0\u6CD5\u8FDB\u5165\u753B\u4E2D\u753B\u6A21\u5F0F!\u9519\u8BEF:
`,cantExitPIP:`\u65E0\u6CD5\u9000\u51FA\u753B\u4E2D\u753B\u6A21\u5F0F!\u9519\u8BEF\uFF1A
`,rememberRateMenuOption:"\u8BB0\u5FC6\u64AD\u653E\u901F\u5EA6",speedRate:"\u64AD\u653E\u901F\u5EA6 ",ready:"\u51C6\u5907\u5C31\u7EEA\uFF01 \u5F85\u547D\u4E2D.",mainPageOnly:"\u53EA\u5904\u7406\u4E3B\u9875\u9762",download:"\u4E0B\u8F7D: ",videoLag:"\u89C6\u9891\u5361\u987F",fullScreen:"\u5168\u5C4F",helpMenuOption:"\u811A\u672C\u529F\u80FD\u5FEB\u6377\u952E\u8868",helpBody:`\u53CC\u51FB(\u63A7\u5236\u680F)\uFF1A\u5207\u6362\uFF08\u7F51\u9875\uFF09\u5168\u5C4F         \u9F20\u6807\u4E2D\u952E\uFF1A\u5FEB\u8FDB5\u79D2
P\uFF1A\u89C6\u9891\u622A\u56FE    i\uFF1A\u5207\u6362\u753B\u4E2D\u753B   M\uFF1A(\u505C\u6B62)\u7F13\u5B58\u89C6\u9891
chrome\u7C7B\u6D4F\u89C8\u5668\u52A0\u542F\u52A8\u53C2\u6570\u8BBE\u7F6E\u5A92\u4F53\u7F13\u5B58\u4E3A840MB\uFF1A --media-cache-size=880008000

\u2190 \u2192\u65B9\u5411\u952E\uFF1A\u5FEB\u9000\u3001\u5FEB\u8FDB5\u79D2;   \u65B9\u5411\u952E + shift: 20\u79D2
\u2191 \u2193\u65B9\u5411\u952E\uFF1A\u97F3\u91CF\u8C03\u8282   ESC\uFF1A\u9000\u51FA\uFF08\u7F51\u9875\uFF09\u5168\u5C4F
\u7A7A\u683C\u952E\uFF1A\u6682\u505C/\u64AD\u653E      N\uFF1A\u64AD\u653E\u4E0B\u4E00\u96C6
\u56DE\u8F66\u952E\uFF1A\u5207\u6362\u5168\u5C4F;      \u56DE\u8F66\u952E + shift: \u5207\u6362\u7F51\u9875\u5168\u5C4F
C(\u6296\u97F3\u3001youtube\u7528V\u952E)\uFF1A\u52A0\u901F0.1\u500D  X(\u6296\u97F3S)\uFF1A\u51CF\u901F0.1\u500D  Z(\u6296\u97F3A)\uFF1A\u5207\u6362\u52A0\u901F\u72B6\u6001
D\uFF1A\u4E0A\u4E00\u5E27     F\uFF1A\u4E0B\u4E00\u5E27(youtube.com\u7528E\u952E)`},en:{console:`%cScript[%s] Feedback\uFF1A%s
%s`,cacheStoringError:"Trying to cache direct media types (such as MP4 format) has no effect!",cacheStoringConfirm:"Do you want all segments of the video to be cached? The detection method used is as follows: when the page is refreshed, the watched video clips will be cached so that no additional network traffic is generated. If you want all segments of the videos to be cached, select OK; or select Cancel to buffer a portion of the video based on the default buffer size (which is the default browser behavior). When buffering, press M key again to cancel buffering.",cantOpenPIP:`Unable to access picture-in-picture mode! Error\uFF1A
`,cantExitPIP:`Unable to exit picture-in-picture mode! Error\uFF1A
`,rememberRateMenuOption:"Remember video playback speed",speedRate:"Speed rate ",ready:" ready\uFF01 Waiting for you commands.",mainPageOnly:"Process the main page only",download:"Download: ",videoLag:"Video lag",fullScreen:"Full screen",helpMenuOption:"Hotkeys list:",helpBody:`Double-click: activate full screen.
Middle mouse button: fast forward 5 seconds

P key\uFF1A Take a screenshot
I key\uFF1A Enter/Exit picture-in-picture mode
M key\uFF1A Enable/disable caching of video
Chrome browsers add startup parameters to set the media cache to 840MB\uFF1A --media-cache-size=880008000

Arrow keys \u2190 and \u2192\uFF1A Fast forward or rewind by 5 seconds
Shift + Arrow keys \u2190 and \u2192\uFF1A Fast forward or rewind 20 seconds
Arrow keys \u2191 and \u2193\uFF1A Raise or lower the volume

ESC\uFF1A Exit full screen (or exit video enlarged to window size)
Spacebar\uFF1A Stop/Play
Enter\uFF1A Enable/disable full screen video
Shift + Enter: Set/unset video enlarged to window size

N key\uFF1A Play the next video (if any)
C key(YouTube:V key)\uFF1A Speed up video playback by 0.1
X key: Slow down video playback by 0.1
Z key, Set video playback speed: 1.0 \u2190\u2192 X
D key: Previous frame
F key: Next frame (except on YouTube)
E key: Next frame (YouTube only)`},it:{console:`%cScript[%s] Feedback\uFF1A%s
%s`,cacheStoringError:"Cercare di memorizzazione nella cache tipi di media diretti (come ad esempio il formato MP4) non ha alcuna efficacia!",cacheStoringConfirm:"Vuoi che tutti i segmenti del video siano memorizzati nella cache? Il metodo di rilevamento utilizzato \xE8 il seguente: all'aggiornamento della pagina, i video clip guardati saranno memorizzati nella cache in modo da non generare ulteriore traffico di rete. Se vuoi che tutti i segmenti dei video siano memorizzati nella cache, seleziona OK; seleziona invece Annulla per bufferizzare una parte del video in base alla dimensione predefinita del buffer (come da comportamento predefinito del browser).Durante il buffering, premere nuovamente il tasto M per annullare il buffering.",cantOpenPIP:`Impossibile accedere alla modalit\xE0 picture-in-picture! Errore\uFF1A
`,cantExitPIP:`Impossibile uscire dalla modalit\xE0 picture-in-picture! Errore\uFF1A
`,rememberRateMenuOption:"Memorizza la velocit\xE0 di riproduzione dei video",speedRate:"Velocit\xE0 di riproduzione ",ready:"Pronto\uFF01 In attesa dei comandi dell'utente.",mainPageOnly:"Elaborazione della sola pagina principale",download:"Scarica: ",videoLag:"Ritardo del video",fullScreen:"Schermo intero",helpMenuOption:"Elenco dei tasti di scelta rapida",helpBody:`Doppio clic: attiva lo schermo intero
Pulsante centrale del mouse: avanzamento rapido di 5 secondi

Tasto P: Esegui uno screenshot
Tasto I\uFF1A Attiva modalit\xE0 picture-in-picture
Tasto M\uFF1A Attiva/disattiva memorizzazione del video nella cache
I browser Chrome aggiungono parametri di avvio per impostare la cache multimediale a 840MB\uFF1A --media-cache-size=880008000

Tasti freccia \u2190 e \u2192\uFF1A Avanza o riavvolgi di 5 secondi
Shift + Tasti freccia \u2190 e \u2192: Avanza o riavvolgi di 20 secondi
Tasti freccia \u2191 e \u2193\uFF1A Alza o abbassa il volume
ESC\uFF1A Esci da schermo intero
Barra spaziatrice: Ferma/Riproduci
Invio\uFF1A Attiva/disattiva ingrandimento del video a schermo intero
Shift + Invio: Attiva/disattiva ingrandimento del video a dimensione della finestra

Tasto N\uFF1A Riproduzione del video successivo (se presente)
Tasto C(YouTube: Tasto V): Velocizza riproduzione video di 0,1
Tasto X: Rallenta riproduzione video di 0,1
Tasto Z, Impostare la velocit\xE0 di riproduzione video: 1,0 \u2190\u2192 X
Tasto D: Vai al frame precedente
Tasto F: Vai al frame successivo (escluso YouTube)
Tasto E: Vai al frame successivo (solo su YouTube)`}},MSG=i18n[curLang]||i18n.en,w=unsafeWindow||window,{host,pathname:path}=location,d=document,find=[].find;let $msg,v,_fp,_fs,by;const observeOpt={childList:!0,subtree:!0},noopFn=function(){},validEl=e=>e&&e.offsetWidth>1,q=(e,t=d)=>t.querySelector(e),r1=(e,t)=>e.test(t)&&RegExp.$1,log=console.log.bind(console,MSG.console,"color:#c3c;font-size:1.2em",GM_info.script.name,GM_info.script.homepage),gmFuncOfCheckMenu=(e,t,i=!0)=>{const n=GM_getValue(t,i);return n&&(e="\u221A  "+e),GM_registerMenuCommand(e,()=>{GM_setValue(t,!n),location.reload()}),n},sleep=e=>new Promise(t=>{setTimeout(t,e)}),hookAttachShadow=e=>{try{const t=Element.prototype.attachShadow;Element.prototype.attachShadow=function(i){i.mode="open";const n=t.call(this,i);return e(n),n}}catch(t){console.error("Hack attachShadow error",t)}},getStyle=(e,t)=>{if(e.style[t])return e.style[t];if(getComputedStyle){const i=getComputedStyle(e,"");return t=t.replace(/([A-Z])/g,"-$1").toLowerCase(),i&&i.getPropertyValue(t)}},doClick=e=>{typeof e=="string"&&(e=q(e)),e&&(e.click?e.click():e.dispatchEvent(new MouseEvent("click")))},clickDualButton=e=>{!e.nextElementSibling||getStyle(e,"display")!=="none"?doClick(e):doClick(e.nextElementSibling)},polling=(e,t,i=!0)=>{const n=typeof t=="string"?q.bind(null,t):t,a=setInterval(()=>{n()&&(i&&clearInterval(a),e())},300);return a},goNextMV=()=>{const e=location.pathname,t=e.match(/(\d+)(\D*)$/),i=+t[1]+1;location.assign(e.slice(0,t.index)+i+t[2])},firefoxVer=r1(/Firefox\/(\d+)/,navigator.userAgent),isEdge=/ Edge?\//.test(navigator.userAgent),fakeUA=e=>Object.defineProperty(navigator,"userAgent",{value:e,writable:!1,configurable:!1,enumerable:!0}),getMainDomain=e=>{const t=e.split(".");let i=t.length-2;return/^(com?|cc|tv|net|org|gov|edu)$/.test(t[i])&&i--,t[i]},inRange=(e,t,i)=>Math.max(t,e)==Math.min(e,i),adjustRate=e=>{e+=v.playbackRate,e<.1?v.playbackRate=.1:e>16?v.playbackRate=16:v.playbackRate=+e.toFixed(2)},adjustVolume=e=>{e+=v.volume,inRange(e,0,1)&&(v.volume=+e.toFixed(2))},tip=e=>{if($msg?.get(0)?.offsetHeight||($msg=$('<div style="max-width:455px;min-width:333px;background:#EEE;color:#111;height:22px;top:-30px;left:50%;transform:translate(-50%, 0); border-radius:8px;border:1px solid orange;text-align:center;font-size:15px;position:fixed;z-index:2147483647"></div>').appendTo(by)),!e?.length)return;const t=e.length*15;$msg.stop(!0,!0).text(e).css({width:`${t}px`}).animate({top:"190px"}).animate({top:"+=9px"},1900).animate({top:"-30px"})},u=getMainDomain(host),cfg={isLive:!1,disableDBLClick:!1,isClickOnVideo:!1,multipleV:!1,isNumURL:!1},bus=new Vue;window.onurlchange===void 0&&(history.pushState=(e=>function(){const i=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("urlchange")),i})(history.pushState),history.replaceState=(e=>function(){const i=e.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("urlchange")),i})(history.replaceState),window.addEventListener("popstate",()=>{window.dispatchEvent(new Event("urlchange"))}));class FullScreen{constructor(t){let i=d.exitFullscreen||d.webkitExitFullscreen||d.mozCancelFullScreen||d.msExitFullscreen||noopFn;this.exit=i.bind(d),i=t.requestFullscreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullScreen||noopFn,this.enter=i.bind(t)}static isFull(){return!!(d.fullscreen||d.webkitIsFullScreen||d.mozFullScreen||d.fullscreenElement||d.webkitFullscreenElement||d.mozFullScreenElement)}toggle(){FullScreen.isFull()?this.exit():this.enter()}}class FullPage{constructor(t){this._isFull=!1,this.container=t||FullPage.getPlayerContainer(v),GM_addStyle(`.gm-fp-body .gm-fp-zTop {
				position: relative !important;
				z-index: 2147483646 !important;
			}
			.gm-fp-wrapper, .gm-fp-body{ overflow:hidden !important; }
			.gm-fp-wrapper .gm-fp-innerBox {
				width: 100% !important;
				height: 100% !important;
			}
			.gm-fp-wrapper {
				display: block !important;
				position: fixed !important;
				width: 100% !important;
				height: 100% !important;
				padding: 0 !important;
				margin: 0 !important;
				top: 0 !important;
				left: 0 !important;
				background: #000 !important;
				z-index: 2147483646 !important;
			}`)}static getPlayerContainer(t){let i=t,n=i.parentNode;const{clientWidth:a,clientHeight:o}=i;do i=n,n=i.parentNode;while(n&&n!==by&&n.clientWidth-a<5&&n.clientHeight-o<5);return i}static isFull(t){return w.innerWidth-t.clientWidth<5&&w.innerHeight-t.clientHeight<5}toggle(){this.container.contains(v)||(this.container=FullPage.getPlayerContainer(v)),bus.$emit("switchFP",!this._isFull),by.classList.toggle("gm-fp-body");let t=v;for(;t!=this.container;)t.classList.toggle("gm-fp-innerBox"),t=t.parentNode;for(t.classList.toggle("gm-fp-wrapper"),t=t.parentNode;t!=by;)t.classList.toggle("gm-fp-zTop"),t=t.parentNode;this._isFull=!this._isFull}}const cacheMV={check(){const e=v.buffered,t=e.length-1;return this.iEnd=e.end(t),this.mode?this.iEnd>v.duration-55:e.start(0)>=this.playPos||this.iEnd>v.duration-55},finish(){v.removeEventListener("canplaythrough",this.onChache),v.currentTime=this.playPos,this.cached=!1,setTimeout(e=>v.pause(),33),HTMLMediaElement.prototype.play=this.rawPlay},async onChache(){await sleep(2200),this.check()?this.finish():(v.currentTime=this.iEnd,v.pause())},exec(){cfg.isLive||!v||(this.mode=confirm(MSG.cacheStoringConfirm),this.cached=!0,v.pause(),this.rawPlay=HTMLMediaElement.prototype.play,HTMLMediaElement.prototype.play=()=>new Promise(noopFn),this.playPos=v.currentTime,v.addEventListener("canplaythrough",this.onChache),this.check(),v.currentTime=this.iEnd)}};cacheMV.onChache=cacheMV.onChache.bind(cacheMV);const actList=new Map;actList.set(90,e=>{v.playbackRate==1||v.playbackRate==0?v.playbackRate=+localStorage.mvPlayRate||1.3:v.playbackRate=1}).set(88,adjustRate.bind(null,-.1)).set(67,adjustRate.bind(null,.1)).set(40,adjustVolume.bind(null,-.1)).set(38,adjustVolume.bind(null,.1)).set(37,e=>{v.currentTime-=5}).set(1061,e=>{v.currentTime-=20}).set(39,e=>{v.currentTime+=5}).set(1063,e=>{v.currentTime+=20}).set(68,e=>{v.currentTime-=.03,v.pause()}).set(70,e=>{v.currentTime+=.03,v.pause()}).set(32,e=>{cfg.btnPlay?clickDualButton(cfg.btnPlay):v.paused?v.play():v.pause()}).set(13,e=>{_fs?_fs.toggle():clickDualButton(cfg.btnFS)}).set(1037,e=>{self!=top?top.postMessage({id:"gm-h5-toggle-iframeWebFull"},"*"):_fp?_fp.toggle():clickDualButton(cfg.btnFP)}).set(1051,noopFn).set(27,e=>{FullScreen.isFull()?_fs?_fs.exit():clickDualButton(cfg.btnFS):self!=top?top.postMessage({id:"gm-h5-is-iframeWebFull"},"*"):FullPage.isFull(v)&&(_fp?_fp.toggle():clickDualButton(cfg.btnFP))}).set(73,e=>{d.pictureInPictureElement?d.exitPictureInPicture().catch(t=>{alert(MSG.cantExitPIP+t)}):v.requestPictureInPicture().catch(t=>{alert(MSG.cantOpenPIP+t)})}).set(80,e=>{const t=d.createElement("canvas");t.width=v.videoWidth,t.height=v.videoHeight,t.getContext("2d").drawImage(v,0,0,t.width,t.height),t.toBlob(async i=>{const n=URL.createObjectURL(i),a=d.createElement("a");a.onclick=o=>{o.stopPropagation()},a.href=n,a.download=Date.now().toString(36)+".png",a.style.display="none",d.body.appendChild(a),a.click(),a.remove(),await sleep(500),URL.revokeObjectURL(n)})}).set(77,e=>{cacheMV.cached?cacheMV.finish():cacheMV.exec()}).set(78,e=>{self!=top?top.postMessage({id:"gm-h5-play-next"},"*"):cfg.btnNext?doClick(cfg.btnNext):cfg.isNumURL&&goNextMV()});const app={rawProps:new Map,shellEvent(){const e=i=>{i.target.closest("svg,img,button")||(i.stopPropagation(),i.stopImmediatePropagation(),this.checkUI(),actList.get(1037)())},t=cfg.isClickOnVideo?v:cfg.mvShell;t.addEventListener("mousedown",i=>{i.button==1&&(i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation(),cfg.isLive||(actList.has(39)?actList.get(39)():v.currentTime+=5))}),!cfg.disableDBLClick&&t.addEventListener("dblclick",e)},setShell(){const e=this.getDPlayer()||this.getArtplayer()||this.getVjsPlayer()||cfg.shellCSS&&q(cfg.shellCSS)||(top!=self?by:FullPage.getPlayerContainer(v));e&&cfg.mvShell!==e&&(cfg.mvShell=e,this.shellEvent())},checkMV(){if(this.vList){const e=this.findMV();e&&e!=v&&(v=e,cfg.btnPlay=cfg.btnNext=cfg.btnFP=cfg.btnFS=_fs=_fp=null,!cfg.isLive&&GM_getValue("remberRate",!0)&&(v.playbackRate=+localStorage.mvPlayRate||1,v.addEventListener("ratechange",t=>{v.playbackRate&&v.playbackRate!=1&&(localStorage.mvPlayRate=v.playbackRate)})),this.setShell())}return validEl(cfg.mvShell)||(cfg.mvShell=null,this.setShell()),this.checkUI(),v},getArtplayer(){const e=v.parentNode;return!v.matches(".art-video")||!e.matches(".art-video-player")?!1:(cfg.btnFP=q(".art-control-fullscreenWeb",e),cfg.btnFS=q(".art-control-fullscreen",e),e.closest("body > *")?.classList.add("gm-dp-zTop"),e)},getDPlayer(){if(!v.matches(".dplayer-video"))return!1;const e=v.closest(".dplayer");return e&&(cfg.btnFP=q(".dplayer-full-in-icon > span",e),cfg.btnFS=q(".dplayer-full-icon",e),e.closest("body > *").classList.add("gm-dp-zTop")),e},getVjsPlayer(){const e=v.closest(".video-js");return e&&(cfg.btnFS=q(".vjs-control-bar > button.vjs-button:nth-last-of-type(1)"),cfg.webfullCSS='.vjs-control-bar > button.vjs-button[title$="\u5168\u5C4F"]:nth-last-of-type(2)'),e},hotKey(e){const t=e.target;if(e.ctrlKey||e.metaKey||e.altKey||t.contentEditable=="true"||/INPUT|TEXTAREA|SELECT/.test(t.nodeName)||e.shiftKey&&![13,37,39].includes(e.keyCode)||e.shiftKey&&e.keyCode==27||!this.checkMV()||!e.shiftKey&&cfg.mvShell&&cfg.mvShell.contains(t)&&[32,37,39].includes(e.keyCode))return;const i=e.shiftKey?e.keyCode+1024:e.keyCode;actList.has(i)&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),actList.get(i)(e),[67,88,90].includes(e.keyCode)&&tip(MSG.speedRate+v.playbackRate))},checkUI(){cfg.webfullCSS&&!validEl(cfg.btnFP)&&(cfg.btnFP=q(cfg.webfullCSS)),cfg.btnFP?_fp=null:!_fp&&self==top&&(_fp=new FullPage(cfg.mvShell)),cfg.fullCSS&&!validEl(cfg.btnFS)&&(cfg.btnFS=q(cfg.fullCSS)),cfg.btnFS?_fs=null:_fs||(_fs=new FullScreen(v)),cfg.nextCSS&&(!validEl(cfg.btnNext)||!cfg.btnNext.matches(cfg.nextCSS))&&(cfg.btnNext=q(cfg.nextCSS)),cfg.playCSS&&!validEl(cfg.btnPlay)&&(cfg.btnPlay=q(cfg.playCSS))},onGrowVList(){if(this.vList.length!=this.vCount){if(this.viewObserver)for(let e of this.vList)this.vSet.has(e)||this.viewObserver.observe(e);else{const e={rootMargin:"0px",threshold:.9};this.viewObserver=new IntersectionObserver(this.onIntersection.bind(this),e);for(let t of this.vList)this.viewObserver.observe(t)}this.vSet=new Set(this.vList),this.vCount=this.vList.length}},onIntersection(e){if(this.vList.length<2)return;const t=find.call(e,i=>i.isIntersecting);!t||v==t.target||(v=t.target,_fs=new FullScreen(v),_fp=new FullPage(v),bus.$on("switchFP",async i=>{sleep(200),i||v.scrollIntoView()}),bus.$emit("switchMV"))},bindEvent(){clearInterval(this.timer);for(const[t,i]of this.rawProps)Reflect.defineProperty(HTMLVideoElement.prototype,t,i);this.rawProps.clear(),this.rawProps=void 0,by=d.body,v=v||this.findMV(),log(`bind event
`,v),bus.$emit("foundMV");const e=gmFuncOfCheckMenu(MSG.rememberRateMenuOption,"remberRate");window.addEventListener("urlchange",async t=>{await sleep(990),this.checkMV(),e&&(v.playbackRate=+localStorage.mvPlayRate||1),bus.$emit("urlchange")}),top!=self&&(top.postMessage({id:"gm-h5-init-MVframe"},"*"),window.addEventListener("message",t=>{if(!(!t.source||!t.data||!t.data.id))switch(t.data.id){case"gm-h5-toggle-fullScreen":_fs?_fs.toggle():clickDualButton(cfg.btnFS);break}},!1)),$(v).one("canplay",t=>{if(cfg.isLive=cfg.isLive||v.duration==1/0,cfg.isLive)for(const i of[37,1061,39,1063,67,77,78,88,90])actList.delete(i);else e&&(v.playbackRate=+localStorage.mvPlayRate||1),v.addEventListener("ratechange",i=>{e&&v.playbackRate&&v.playbackRate!=1&&(localStorage.mvPlayRate=v.playbackRate)});this.checkMV(),bus.$emit("canplay")}),$(by).keydown(this.hotKey.bind(this)),cfg.mvShell?this.shellEvent():this.setShell(),this.checkUI(),cfg.multipleV&&(new MutationObserver(this.onGrowVList.bind(this)).observe(by,observeOpt),this.vCount=0,this.onGrowVList())},init(){const e=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(...i){if(!(this instanceof HTMLMediaElement&&i[0]=="dblclick"&&!i[1].toString().includes("actList.get(1037)")||i[0]=="ratechange"&&u=="baidu"&&!i[1].toString().includes("localStorage.mvPlayRate")))return e.apply(this,i)};for(const i of this.rawProps.keys())this.rawProps.set(i,Reflect.getOwnPropertyDescriptor(HTMLMediaElement.prototype,i));this.vList=d.getElementsByTagName("video");const t=i=>cfg.cssMV?i.matches(cfg.cssMV):i.offsetWidth>9;this.findMV=find.bind(this.vList,t),this.timer=polling(i=>{v=i,this.bindEvent()},this.findMV),hookAttachShadow(async i=>{bus.$emit("addShadowRoot",i),await sleep(600),!v&&(v=q("video",i))&&(log(`Found MV in ShadowRoot
`,v,i),cfg.shellCSS||(cfg.mvShell=i.host),this.bindEvent(),this.vList=i.getElementsByTagName("video"),this.findMV=find.bind(this.vList,t))})}},router={ted(){cfg.fullCSS="button[title=Fullscreen]"},youtube(){GM_addStyle(`.gm-fp-body #player-container-inner{padding-top:0!important}
			.gm-fp-body #player-container-outer{
				max-width:100%!important;
				margin:0!important;
			}`),cfg.shellCSS="#player",cfg.playCSS="button.ytp-play-button",cfg.nextCSS="a.ytp-next-button",cfg.fullCSS="button.ytp-fullscreen-button",cfg.isClickOnVideo=!0,actList.delete(32),actList.set(69,actList.get(70)).delete(70),actList.set(86,actList.get(67)).delete(67)},douyin(){cfg.isLive=host.startsWith("live."),cfg.fullCSS=".xgplayer-fullscreen",cfg.isLive||(GM_addStyle(".xgplayer-progress-cache{background-color:green!important}"),actList.set(65,actList.get(90)).delete(90),actList.set(83,actList.get(88)).delete(88),actList.set(86,actList.get(67)).delete(67))},qq(){if(self!=top&&(host=="v.qq.com"||host=="video.qq.com"))throw MSG.mainPageOnly;actList.delete(32),cfg.shellCSS="#player",cfg.nextCSS=".txp_btn_next_u",cfg.webfullCSS=".txp_btn_fake",cfg.fullCSS=".txp_btn_fullscreen",app.rawProps.set("playbackRate",1);for(let e=37;e<=40;e++)actList.delete(e)},youku(){actList.delete(37),actList.delete(39),host.startsWith("vku.")?(bus.$on("canplay",()=>{cfg.isLive=!q(".spv_progress")}),cfg.fullCSS=".live_icon_full"):(bus.$on("foundMV",()=>{$(document).unbind("keyup")}),cfg.shellCSS="#ykPlayer",cfg.webfullCSS=".kui-webfullscreen-icon-0",cfg.fullCSS=".kui-fullscreen-icon-0",cfg.nextCSS=".kui-next-icon-0")},bilibili(){cfg.isLive=host.startsWith("live."),!cfg.isLive&&(actList.delete(32),bus.$on("addShadowRoot",e=>{e.host.nodeName==="BWP-VIDEO"&&(app.vList=d.getElementsByTagName("bwp-video"),app.findMV=find.bind(app.vList,t=>t.offsetWidth>9),v=e.host,app.bindEvent())}),cfg.shellCSS="#bilibili-player",cfg.nextCSS=".bpx-player-ctrl-next",cfg.webfullCSS=".bpx-player-ctrl-web",cfg.fullCSS=".bpx-player-ctrl-full")},iqiyi(){cfg.fullCSS=".iqp-btn-fullscreen:not(.fake__click)",cfg.nextCSS=".iqp-btn-next"},pptv(){cfg.fullCSS=".w-zoom-container > div",cfg.webfullCSS=".w-expand-container > div",cfg.nextCSS=".w-next"},mgtv(){cfg.fullCSS="mango-screen",cfg.webfullCSS="mango-webscreen > a",cfg.nextCSS="mango-control-playnext-btn"},ixigua(){cfg.fullCSS='div[aria-label="\u5168\u5C4F"]',cfg.nextCSS=".xgplayer-control-item.control_playnext",GM_addStyle(".gm-fp-body .xgplayer{padding-top:0!important} .gm-fp-wrapper #player_default{max-height: 100%!important} h1.title~a, .videoTitle h1~a{ padding-left:12px; color:blue; }")},miguvideo(){cfg.nextCSS=".next-btn",cfg.fullCSS=".zoom-btn",cfg.shellCSS=".mod-player"},baidu(){app.rawProps.set("playbackRate",1)},weibo(){cfg.multipleV=path.startsWith("/u/")},acfun(){cfg.nextCSS=".btn-next-part .control-btn",cfg.webfullCSS=".fullscreen-web",cfg.fullCSS=".fullscreen-screen"},163(){return cfg.multipleV=host.startsWith("news."),GM_addStyle("div.video,video{max-height: 100% !important;}"),host.split(".").length>3},sohu(){cfg.nextCSS="li.on[data-vid]+li a",cfg.fullCSS=".x-fullscreen-btn",cfg.webfullCSS=".x-pagefs-btn"},fun(){cfg.nextCSS=".btn-item.btn-next"},le(){GM_addStyle(".gm-fp-body .le_head{display:none!important}"),cfg.cssMV="#video video",cfg.shellCSS="#video",cfg.nextCSS=".hv_ico_next";const e=t=>{v.offsetWidth||Object.values(v.attributes).reverse().some(i=>{if(v.getAttribute(i.name)=="")return v.removeAttribute(i.name),!0})};bus.$on("urlchange",e),bus.$once("canplay",e)},nnyy(){GM_registerMenuCommand(MSG.videoLag,()=>{"use strict";v.pause();const e=v.currentTime,t=v.buffered;v.currentTime=t.end(t.length-1)+1,$(v).one("progress",i=>{v.currentTime=e,v.play()})}),cfg.nextCSS=".playlist .on + li a"},douban(){cfg.nextCSS="a.next-series"},douyu(){cfg.isLive=!host.startsWith("v."),cfg.isLive?(cfg.cssMV=".layout-Player video",cfg.shellCSS="#js-player-video",cfg.webfullCSS=".wfs-2a8e83",cfg.fullCSS=".fs-781153",cfg.playCSS="div[class|=play]",path!="/"&&$(e=>{q(".u-specialStateInput").checked=!0})):bus.$on("addShadowRoot",async function(e){e.host.matches("#demandcontroller-bar")&&(await sleep(600),cfg.shellCSS="div[fullscreen].video",cfg.btnFP=q(".ControllerBar-PageFull",e),cfg.btnFS=q(".ControllerBar-WindowFull",e))})},yy(){cfg.isLive=!path.startsWith("/x/"),cfg.isLive&&(cfg.fullCSS=".yc__fullscreen-btn",cfg.webfullCSS=".yc__cinema-mode-btn",cfg.playCSS=".yc__play-btn")},huya(){if(firefoxVer&&firefoxVer<57)return!0;cfg.disableDBLClick=!0,cfg.webfullCSS=".player-fullpage-btn",cfg.fullCSS=".player-fullscreen-btn",cfg.playCSS="#player-btn",polling(doClick,".login-tips-close"),localStorage["sidebar/ads"]="{}",localStorage["sidebar/state"]=0},twitch(){cfg.isLive=!path.startsWith("/videos/"),cfg.fullCSS="button[data-a-target=player-fullscreen-button]",cfg.webfullCSS=".player-controls__right-control-group > div:nth-child(4) > button",cfg.playCSS="button[data-a-target=player-play-pause-button]"},longzhu(){cfg.fullCSS="a.ya-screen-btn"},zhanqi(){localStorage.lastPlayer="h5",cfg.fullCSS=".video-fullscreen"}};Reflect.defineProperty(navigator,"plugins",{get(){return{length:0}}}),GM_registerMenuCommand(MSG.helpMenuOption,alert.bind(w,MSG.helpBody)),(!router[u]||!router[u]())&&app.init(),!router[u]&&!cfg.isNumURL&&(cfg.isNumURL=/[_\W]\d+(\/|\.[a-z]{3,8})?$/.test(path));
