// ==UserScript==
// @name            manga comic downloader
// @namespace       https://baivong.github.io
// @version         3.4.7
// @icon            https://raw.githubusercontent.com/lelinhtinh/Userscript/master/manga_comic_downloader/icon.png
// @author          Zzbaivong
// @license         MIT; https://baivong.mit-license.org/license.txt
// @match           http://*.truyentranh8.com/*
// @match           https://*.truyentranh8.com/*
// @match           http://*.truyentranh8.net/*
// @match           https://*.truyentranh8.net/*
// @match           http://*.truyentranh8.org/*
// @match           https://*.truyentranh8.org/*
// @match           http://*.truyentranh86.com/*
// @match           https://*.truyentranh86.com/*
// @match           http://*.truyentranh869.com/*
// @match           https://*.truyentranh869.com/*
// @match           https://mangaxy.com/*
// @match           https://*.truyentranh.net/*
// @match           https://*.hamtruyen.com/*
// @match           https://*.hamtruyenmoi.com/*
// @match           https://*.a3manga.com/*
// @match           https://*.a3mnga.com/*
// @match           http://truyentranhtuan.com/*
// @match           https://truyentranhlh.net/*
// @match           https://truyenhay24h.com/*
// @match           https://thichtruyentranh.com/*
// @match           https://lxhentai.com/*
// @match           https://hentaivn.net/*
// @match           https://hentaivn.moe/*
// @match           https://otakusan.net/*
// @match           https://*.ngonphong.com/*
// @match           https://*.nettruyen.com/*
// @match           http://*.nettruyen.com/*
// @match           https://*.nettruyentop.com/*
// @match           http://*.nettruyentop.com/*
// @match           http://*.nettruyenonline.com/*
// @match           https://*.nettruyenonline.com/*
// @match           http://*.nettruyenapp.com/*
// @match           https://*.nettruyenapp.com/*
// @match           http://*.nettruyenpro.com/*
// @match           https://*.nettruyenpro.com/*
// @match           http://*.nettruyengo.com/*
// @match           https://*.nettruyengo.com/*
// @match           https://*.nettruyenmax.com/*
// @match           http://*.nettruyenmoi.com/*
// @match           https://*.nettruyenbb.com/*
// @match           https://*.kingtruyen.com/*
// @match           http://nhattruyen.com/*
// @match           http://nhattruyengo.com/*
// @match           http://*.hamtruyentranh.net/*
// @match           https://ttmanga.com/*
// @match           http://truyen.vnsharing.site/*
// @match           http://*.blogtruyen.com/*
// @match           https://*.blogtruyen.com/*
// @match           https://*.blogtruyenmoi.com/*
// @match           http://*.blogtruyen.vn/*
// @match           https://*.blogtruyen.vn/*
// @match           http://*.blogtruyen.top/*
// @match           https://*.blogtruyen.top/*
// @match           https://truyensieuhay.com/*
// @match           http://truyenqqvn.com/*
// @match           http://truyenqqvn.net/*
// @match           http://truyenqqtop.com/*
// @match           http://truyenqqpro.com/*
// @match           https://hentaicube.net/*
// @match           https://hentaicb.top/*
// @match           http://*.tuthienbao.com/*
// @match           https://vietcomic.net/*
// @match           https://hamtruyentranh.com/*
// @match           https://khotruyentranhz.com/*
// @match           https://truyenvn.com/*
// @match           https://truyenvn.vip/*
// @match           https://truyenvnpro.com/*
// @match           https://*.saytruyen.net/*
// @match           https://*.saytruyen.com/*
// @match           https://*.sayhentai.net/*
// @match           https://cocomic.net/truyen-tranh/*
// @require         https://code.jquery.com/jquery-3.6.0.min.js
// @require         https://unpkg.com/@zip.js/zip.js@2.7.41/dist/zip.min.js
// @require         https://unpkg.com/file-saver@2.0.5/dist/FileSaver.min.js
// @require         https://cdn.jsdelivr.net/npm/web-streams-polyfill@2.0.2/dist/ponyfill.min.js
// @require         https://cdn.jsdelivr.net/npm/streamsaver@2.0.3/StreamSaver.min.js
// @require         https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js?v=a834d46
// @require         https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require         https://cdn.jsdelivr.net/gh/Joe12387/detectIncognito@53bb1cde47a849dd166443a24b92f15432d7c40a/dist/es5/detectIncognito.min.js
// @resource        success https://unpkg.com/facebook-sound-kit@2.0.0/Low_Volume_-20dB/Complete_and_Success/Success_2.m4a
// @resource        error https://unpkg.com/facebook-sound-kit@2.0.0/Low_Volume_-20dB/Errors_and_Cancel/Error_2.m4a
// @noframes
// @connect         *
// @supportURL      https://github.com/lelinhtinh/Userscript/issues
// @run-at          document-start
// @grant           GM_addStyle
// @grant           GM_xmlhttpRequest
// @grant           GM.xmlHttpRequest
// @grant           GM.getResourceUrl
// @grant           GM_getResourceURL
// @grant           GM_registerMenuCommand
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/manga20comic20downloader.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/manga20comic20downloader.meta.js
// ==/UserScript==
window._URL=window.URL||window.webkitURL,jQuery((function(t){var e,n,o,r=4,a=["http://truyentranhtam.net/templates/main/images/gioithieubanbe3.png","http://1.bp.blogspot.com/-U1SdU4_52Xs/WvLvn1OjvHI/AAAAAAAEugM/dLBgVGSeUN0bVy-FoFfIZvrCJ07YQew7wCHMYCw/s0/haybaoloi.png","/public/images/loading.gif","http://truyentranhlh.net/wp-content/uploads/2015/10/lhmanga.png","/Content/Img/1eeef5d2-b936-496d-ba41-df1b21d0166a.jpg","/Content/Img/d79886b3-3699-47b2-bbf4-af6149c2e8fb.jpg","http://st.beeng.net/files/uploads/images/21/c8/21c8d2c3599c485e31f270675bc57e4c.jpeg","00k9jbV.gif"],i=["proxy.truyen.cloud",".ttmanga.com",".fbcdn.net","mangaqq.net","mangaqq.com","truyenqqvn.net","truyenqqvn.com","truyenqqtop.com","truyenqqpro.com",".upanhmoi.net","qqtaku.com","qqtaku.net","trangshop.net",".beeng.net",".beeng.org","forumnt.com","hoitruyentranh.com","hoihentai.com","i02.hentaivn.net","truyentop1.com","anhnhanh.org","truyenvua.xyz","hamtruyen.vn",".xem-truyen.com"],c={"i8.xem-truyen.com":"https://blogtruyenmoi.com","i.blogtruyen.com":"https://blogtruyen.com","truyen.cloud":"http://www.nettruyen.com","proxy.truyen.cloud":"http://www.nettruyen.com","i.netsnippet.com":"http://www.nettruyen.com/","forumnt.com":"http://www.nettruyen.com/","upload.forumnt.com":"http://www.nettruyen.com/","upload2.forumnt.com":"http://www.nettruyen.com/","upload.upanhmoi.net":"https://upanhmoi.net","upload2.upanhmoi.net":"https://upanhmoi.net","upload3.upanhmoi.net":"https://upanhmoi.net","upload4.upanhmoi.com":"https://upanhmoi.com","upload5.upanhmoi.com":"https://upanhmoi.com","upload6.upanhmoi.com":"https://upanhmoi.com","upload7.upanhmoi.com":"https://upanhmoi.com","upload8.upanhmoi.com":"https://upanhmoi.com","upload9.upanhmoi.com":"https://upanhmoi.com","img1.upanhmoi.net":"https://upanhmoi.net","img2.upanhmoi.net":"https://upanhmoi.net","proxy1.ttmanga.com":"https://ttmanga.com","proxy2.ttmanga.com":"https://ttmanga.com","proxy3.ttmanga.com":"https://ttmanga.com","cdn.lhmanga.com":"https://truyentranhlh.net","cdn1.lhmanga.com":"https://truyentranhlh.net","storage.fshare.vn":"https://truyentranh.net","ocumeo.com":"https://www.a3manga.com/","www.ocumeo.com":"https://www.a3manga.com/","mangaqq.net":"http://truyenqqpro.com/","mangaqq.com":"http://truyenqqpro.com/","truyenqq.net":"http://truyenqqpro.com/","truyenvua.xyz":"http://truyenqqpro.com/","i02.hentaivn.net":"https://hentaivn.net/","i1.hentaivn.net":"https://hentaivn.net/","i.imgur.com":"https://imgur.com/"};function s(e,n){function r(){var t=J.find("#mcd_noty_wrap");t.length&&(t.fadeOut(300,(function(){t.remove(),t=[]})),clearTimeout(o))}function a(){o=setTimeout((function(){r()}),2e3)}var i=J.find("#mcd_noty_wrap");if(!i.length){var c=t("<div>",{id:"mcd_noty_wrap"}),s=t("<div>",{id:"mcd_noty_content",class:"mcd_"+n,html:e}),m=t("<div>",{id:"mcd_noty_close",html:"&times;"});(i=c.append(s).append(m)).appendTo("body")}i.find("#mcd_noty_content").attr("class","mcd_"+n).html(e),i.fadeIn(300),clearTimeout(o),J.on("click","#mcd_noty_wrap",(function(){r()})).on("mouseenter","#mcd_noty_wrap",(function(){clearTimeout(o)})).on("mouseleave","#mcd_noty_wrap",a),"warning"!==n&&"success"!==n&&a()}function m(t){return j.link.split(/\s*,\s*/).map((function(e){return e+t})).join(",")}function u(){t(m('[href="'+j.href+'"]')).css({color:"red",textShadow:"0 0 1px red, 0 0 1px red, 0 0 1px red"}),Y=!0}function p(){var e=t(m('[href="'+j.href+'"]'));Y||e.css({color:"green",textShadow:"0 0 1px green, 0 0 1px green, 0 0 1px green"})}function l(t){t.preventDefault(),t.returnValue=""}function h(){u(),X=!1,window.removeEventListener("beforeunload",l),setTimeout((()=>{Z.length||X||!n||n.play()}),0)}function g(){s("Lỗi! Không tải được <strong>"+D+"</strong>","error"),h()}function d(){s("Lỗi! <strong>"+D+"</strong> không có dữ liệu","error"),h()}function f(t){r<1&&(r=1),r>32&&(r=32),Q=t.map((function(t){return{url:t,attempt:5}})),N=Q.length,O(),s("Bắt đầu tải <strong>"+D+"</strong>","warning"),window.addEventListener("beforeunload",l)}function w(){document.title="[…] "+z,s("<strong>"+D+"</strong> đang lấy dữ liệu...","warning"),Z=Z.filter((function(t){return-1===j.href.indexOf(t)})),t(m('[href="'+j.href+'"]')).css({color:"orange",fontWeight:"bold",fontStyle:"italic",textDecoration:"underline",textShadow:"0 0 1px orange, 0 0 1px orange, 0 0 1px orange"})}function y(){Z=[],t(j.link).each((function(e,n){Z[e]=t(n).attr("href")})),j.reverse&&Z.reverse()}function x(){s("Script đã <strong>sẵn sàng</strong> làm việc","info"),y(),J.on("click",j.link,(function(e){if(e.ctrlKey||e.shiftKey){e.preventDefault();var n=t(this).attr("href");if(e.ctrlKey&&e.shiftKey)Z=Z.filter((function(t){return-1===n.indexOf(t)})),t(m('[href="'+n+'"]')).css({color:"gray",fontWeight:"bold",fontStyle:"italic",textDecoration:"line-through",textShadow:"0 0 1px gray, 0 0 1px gray, 0 0 1px gray"});else{et||(Z=[],et=!0),Z.push(n);var o=e.shiftKey?"violet":"purple";t(m('[href="'+n+'"]')).css({color:o,textDecoration:"overline",textShadow:"0 0 1px "+o+", 0 0 1px "+o+", 0 0 1px "+o})}}})).on("keyup",(function(t){"Control"!==t.key&&"Shift"!==t.key||(t.preventDefault(),Z.length&&et&&("Shift"===t.key&&(nt=!0),b()))}))}function b(){X||tt||(et||Z.length||y(),Z.length&&(tt=!0,t(m('[href$="'+Z[0]+'"]')).trigger("contextmenu")))}function v(){nt=!0,b()}function k(){return D.replace(/\s+/g,"_").replace(/・/g,"·").replace(/(^_+|_+$)/,"")}function _(){nt||(K=new TransformStream,E=new Response(K.readable).blob(),W=new zip.ZipWriter(K.writable,{zip64:!0}),H=new AbortController,P=H.signal,F=[]),V=0,B=0,N=0,Q=[],Y=!1,X=!1,tt&&(Z.length?t(m('[href$="'+Z[0]+'"]')).trigger("contextmenu"):(tt=!1,et=!1)),setTimeout((()=>{Z.length||X||!e||e.play()}),0)}async function S(){s("Tạo file nén của <strong>"+D+"</strong>","warning");try{await Promise.all(F),await W.close();!async function(t,e){s("Tải hoàn tất <strong>"+e+"</strong>","info");try{const{isPrivate:n}=await detectIncognito();if(n)throw"isPrivate";const o=streamSaver.createWriteStream(e,{size:t.size}),r=t.stream();if(window.WritableStream&&r.pipeTo)return r.pipeTo(o);window.writer=o.getWriter();const a=r.getReader(),i=()=>a.read().then((t=>t.done?window.writer.close():window.writer.write(t.value).then(i)));return void i()}catch(n){console.warn(n),saveAs(t,e)}}(await E,k()+".cbz"),p(),window.removeEventListener("beforeunload",l),document.title="[⇓] "+z,_()}catch(t){console.error(t),(P.reason==t||P.reason&&P.reason.code==t.code)&&zip.terminateWorkers(),s("Lỗi nén dữ liệu của <strong>"+D+"</strong>","error"),h(),document.title="[x] "+z,_()}}function q(t,e,n,o,r){if(Q[t].attempt<=0)return B++,void n(o,r);setTimeout((function(){C(t,e,n),Q[t].attempt--}),2e3)}function C(t,e,n){var o,r=Q[t].url,a=("0000"+V).slice(-4),i={};0===r.indexOf("//")&&(r=location.protocol+r),o=new URL(r).hostname,c[o]?(i.referer=c[o],i.origin=c[o]):(i.referer=location.origin,i.origin=location.origin),GM.xmlHttpRequest({method:"GET",url:r,responseType:"arraybuffer",headers:i,onload:function(o){var r=function(t){if(!t.byteLength)return{mime:null,ext:null};var e="",n="",o=new DataView(t,0,5),r=o.getUint8(0,!0),a=o.getUint8(1,!0);switch(r.toString(16)+a.toString(16)){case"8950":e="png",n="image/png";break;case"4749":e="gif",n="image/gif";break;case"ffd8":e="jpg",n="image/jpeg";break;case"424d":e="bmp",n="image/bmp";break;case"5249":e="webp",n="image/webp";break;default:e=null,n=null}return{mime:n,ext:e}}(o.response).ext;if("gif"===r)return T();!r||o.response.byteLength<100||"OK"!==o.statusText&&""!==o.statusText?q(t,e,n,o,a):(a=a+"."+r,e(o.response,a))},onerror:function(o){q(t,e,n,o,a)}})}function T(){s("Đang tải xuống <strong>"+B+++"/"+N+"</strong>","warning"),B<V||(B<N?O():nt?Z.length?(p(),_()):(nt=!1,S()):S())}function O(){var t=V+r,e="";for(t>N&&(t=N),nt&&(e=k()+"/");V<t;V++)C(V,(function(t,n){var o=W.add(e+n,new Response(t).body,{signal:P,onend:T});F.push(o)}),(function(t,n){F.push(W.add(e+n+"_error.txt",new Blob([t.statusText+"\r\n"+t.finalUrl]).stream(),{signal:P,onend:T})),s(t.statusText,"error"),u()}))}function L(t){return-1!==(t=(t=(t=(t=(t=(t=function(t){var e=(new DOMParser).parseFromString("<!doctype html><body>"+t,"text/html");return decodeURIComponent(e.body.textContent)}(t)).trim()).replace(/^.+(&|\?)url=/,"")).replace(/(https?:\/\/)lh(\d)(\.bp\.blogspot\.com)/,"$1$2$3")).replace(/(https?:\/\/)lh\d\.(googleusercontent|ggpht)\.com/,"$14.bp.blogspot.com")).replace(/\?.+$/,"")).indexOf("imgur.com")?t=t.replace(/(\/)(\w{5}|\w{7})(s|b|t|m|l|h)(\.(jpe?g|png|webp))$/,"$1$2$4"):-1!==t.indexOf("blogspot.com")?(t=(t=t.replace(/\/([^/]+-)?(Ic42)(-[^/]+)?\//,"/$2/")).replace(/\/(((s|w|h)\d+|(w|h)\d+-(w|h)\d+))?-?(c|d|g)?\/(?=[^/]+$)/,"/"),t+="?imgmax=16383"):t=t.replace(/(\?|&).+/,""),t=function(t){return-1!==t.search(/(i\.imgur\.com|\.blogspot\.com|\.fbcdn\.net|storage\.fshare\.vn)/i)&&0===t.indexOf("http://")&&(t=t.replace(/^http:\/\//,"https://")),t}(t=function(t){return 0===t.indexOf("//")&&(t=location.protocol+t),0!==t.search(/https?:\/\//)&&(t="http://"+t),t}(t=encodeURI(t)))}function U(e){var n=[];e.length?(t.each(e,(function(t,e){var o;if(e=e.replace(/^[\s\n]+|[\s\n]+$/g,""),i.some((function(t){return-1!==e.indexOf(t)})))n.push(e);else if(o=e,!a.some((function(t){return-1!==o.indexOf(t)}))&&void 0!==e&&!/[><"']/.test(e)&&(0!==e.indexOf(location.origin)&&(0!==e.indexOf("/")||0===e.indexOf("//"))||/^(\.(jpg|png)|webp|jpeg)$/.test(e.slice(-4)))){if(0!==e.indexOf("http")&&0!==e.indexOf("//"))e=location.origin+(0===e.indexOf("/")?"":"/")+e;else{if(0!==e.indexOf("http")&&0!==e.indexOf("//"))return;e=L(e)}n.push(e)}})),f(n)):d()}function $(e){var n=[];e.each((function(e,o){var r=t(o);n[e]=(j.imgSrc?r.attr(j.imgSrc):r.data("src")||r.data("original"))||r.attr("src")})),U(n)}function I(e,n){var o=t(e),r=j.name;j.href=o.attr("href"),D=o.text().trim(),"function"==typeof r?D=r(e,D):"string"==typeof r&&(D=t(r).text().trim()+" "+D),w(),GM.xmlHttpRequest({method:"GET",url:j.href,onload:function(e){var o=function(e){var n=e.responseText;return j.imgSrc||(n=n.replace(/[\s\n]+src[\s\n]*=[\s\n]*/gi," data-src=")),n=n.replace(/^[^<]*/,""),j.imgSrc,t(n)}(e);"function"==typeof n?n(o):function(t){var e="find";j.filter&&(e="filter");var n=t[e](j.contents).find("img");n.length?$(n):d()}(o)},onerror:function(){g()}})}function A(){return X?(s("Chỉ được phép <strong>tải một truyện</strong> mỗi lần","error"),!1):(X=!0,!0)}function R(e){t(j.link).length&&(J.on("contextmenu",j.link,(function(t){t.preventDefault(),Y=!1,A()&&I(t.currentTarget,e)})),x())}window.URL=window._URL,GM.getResourceUrl("success").then((function(t){e=new Audio(t)})),GM.getResourceUrl("error").then((function(t){n=new Audio(t)}));var j,D,M={reverse:!0,link:"",name:"",contents:"",imgSrc:"",filter:!1,init:R},G=location.host,z=document.title,J=t(document),K=new TransformStream,E=new Response(K.readable).blob(),W=new zip.ZipWriter(K.writable,{zip64:!0}),H=new AbortController,P=H.signal,F=[],V=0,B=0,N=0,Q=[],Z=[],Y=!1,X=!1,tt=!1,et=!1,nt=!1;switch(streamSaver.mitm="https://lelinhtinh.github.io/stream/mitm.html",GM_registerMenuCommand("Download All Chapters",b),GM_registerMenuCommand("Download All To One File",v),J.on("keydown",(function(t){"KeyY"===t.code&&t.altKey&&(t.preventDefault(),t.shiftKey?v():b())})),GM_addStyle("#mcd_noty_wrap{background:#fff;position:fixed;z-index:2147483647;right:20px;top:20px;min-width:150px;max-width:100%;padding:15px 25px;border:1px solid #ddd;border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 1px 10px rgba(0,0,0,.35);cursor:pointer}#mcd_noty_content{color:#444}#mcd_noty_content strong{font-weight:700}#mcd_noty_content.mcd_info strong{color:#2196f3}#mcd_noty_content.mcd_success strong{color:#4caf50}#mcd_noty_content.mcd_warning strong{color:#ffc107}#mcd_noty_content.mcd_error strong{color:#f44336}#mcd_noty_content strong.centered{display:block;text-align:center}#mcd_noty_close{position:absolute;right:0;top:0;font-size:18px;color:#ddd;height:20px;width:20px;line-height:20px;text-align:center}#mcd_noty_wrap:hover #mcd_noty_close{color:#333}"),G){case"truyentranh8.com":case"truyentranh8.net":case"truyentranh8.org":case"truyentranh869.com":case"truyentranh86.com":j={link:"#ChapList a",name:function(e){return t(".breadcrumb li:last").text().trim()+" "+t(e).find("span, strong, h2").text().trim()},contents:"#reading-detail"};break;case"mangaxy.com":j={link:"#ChapList a",name:function(e){return`${t("h1.comics-title").text()} ${t(e).find("div.episode-title").text()}`},contents:"#reading-detail"};break;case"truyentranh.net":case"www.truyentranh.net":j={reverse:!1,link:".chapter-list-item-box a",name:function(e){return t("h1").text().trim()+" "+t(e).text().trim()},contents:".manga-reading-box"};break;case"hamtruyen.com":case"www.hamtruyen.com":case"hamtruyenmoi.com":j={link:".list-chaps a",name:"h3.story-name",contents:".list-images"};break;case"m.hamtruyen.com":j={link:".list-chap a",name:".tentruyen",contents:"#content_chap"};break;case"a3manga.com":case"www.a3manga.com":case"a3mnga.com":case"www.a3mnga.com":case"www.ngonphong.com":j={link:".chapter-table a.text-capitalize",init:function(){R((function(t){var e=t.find('script:contains("htmlContent")'),n=t.filter('script:contains("htmlContent")');if(e.length&&n.length){n=n.text().match(/(CryptoJSAesDecrypt\(.+?(?:(;}|htmlContent\);)))/g);var o=new Function(e.text()+"function "+n[0]+"return "+n[1]);this.CryptoJS=CryptoJS,o.apply(this);var r=o().match(/(?<=(data-(lqz53ud|3dn5rc9)="))(.+?)(?=")/g);if(!r)return void d();U(r=r.map((t=>(t=(t=t.replace(/LqZ53ud|3Dn5rc9/g,".")).replace(/pPdp7FG|gNa8fuX/g,":")).replace(/9pyrBcb|hT3k3S6/g,"/"))))}else d()}))}};break;case"truyentranhtuan.com":j={link:".chapter-name a",init:function(){R((function(t){var e=t.find("#read-title").next("script");if(e.length){t=e.text().match(/var\s+slides_page_path\s*=\s*(.+?);/)[1];var n,o=t=JSON.parse(t);if(1!=(o.length>0?2:1))n=o;else{var r,a,i=(n=[]).length-1;for(r=0;r<i;r++)for(a=r+1;a<n.length;a++)if(n[a]<n[r]){var c=n[a];n[a]=n[r],n[r]=c}}U(n)}else d()}))}};break;case"truyentranhlh.net":j={link:".list-chapters a",contents:"#chapter-content",name:function(e){return t(".series-name").text().trim()+" "+t(e).find(".chapter-name").text().trim()}};break;case"truyenhay24h.com":j={link:".nano .chapname a",name:".name_sp",init:function(){R((function(e){e=(e=(e=e.find("#dvContentChap").siblings("script").text()).match(/GI2017\(([^;]+);/)[1]).split(/[,']+/),t.post("/TH24Service.asmx/GetChapterImages",{PID:e[0],ChapNumber:e[1],cc18:e[2],name:"",s:0}).done((function(e){var n=[];t(e).find("string").each((function(t,e){n[t]=e.textContent.replace(/\.(jpe?g|png)\w*$/,".$1")})),U(n)})).fail((function(){g()}))}))}};break;case"thichtruyentranh.com":j={reverse:!1,link:"#listChapterBlock .ul_listchap a",init:function(){R((function(t){(t=(t=t.find("#content_read").next("script").text()).match(/https?:\/\/[^"]+/g)).length?U(t):d()}))}};break;case"lxhentai.com":j={link:'[style="max-height: 500px"] a',contents:'[class="text-center"]',name:function(e){return t(".grow.text-lg.ml-1.text-ellipsis.font-semibold:first").text().trim()+" "+t(e).find("span.text-ellipsis").text().trim()}};break;case"hentaivn.net":case"hentaivn.moe":j=[{link:".listing a",name:function(e){var n=t('h1[itemprop="name"]').find("a").text();n=n.split("-")[0].trim();var o=t(e).find(".chuong_t").attr("title");return`${n} ${o=o.split("-")[1].trim()}`},contents:"#image",init:function(){var t=document.querySelector("#inner-listshowchapter");if(null!==t){s("wait a moment...","warning"),setTimeout((()=>{t.scrollIntoView()}),0);var e=new MutationObserver((function(t){t.forEach((function(t){"childList"===t.type&&t.target.querySelector(j.link)&&(R(),e.disconnect())}))}));e.observe(t,{attributes:!1,childList:!0,subtree:!1})}}},{link:".episodes a",name:'[itemprop="name"] b',contents:"#image"}];break;case"otakusan.net":j={link:".read-chapter a",name:"h1.header",init:function(){var e=t(j.link);e.length&&(e.on("contextmenu",(function(e){if(e.preventDefault(),Y=!1,A()){var n=t(this);j.href=n.attr("href"),D=t("h1.title").first().attr("title")+" "+n.text().trim(),w(),GM.xmlHttpRequest({method:"GET",url:j.href,withCredentials:!0,headers:{host:"otakusan.net"},onload:function(){GM.xmlHttpRequest({method:"POST",url:"/Manga/UpdateView",responseType:"json",withCredentials:!0,headers:{host:"otakusan.net","content-length":14,"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},data:"chapId="+j.href.match(/\/(\d+)\/.+$/)[1],onload:function(t){var e=t.response;e.chapid?f(JSON.parse(e.view)):d()}})}})}})),x())}};break;case"www.nettruyen.com":case"nhattruyen.com":case"nhattruyengo.com":case"www.nettruyenapp.com":case"www.nettruyenpro.com":case"www.nettruyengo.com":case"www.nettruyenmoi.com":case"www.nettruyenmax.com":j={link:"#nt_listchapter .chapter a",name:".title-detail",contents:".reading-detail.box_doc",imgSrc:"data-original"};break;case"www.nettruyentop.com":case"www.nettruyenonline.com":case"www.nettruyenbb.com":case"kingtruyen.com":j={link:"#nt_listchapter .chapter a",name:".title-detail",contents:".readimg,.reading-detail.box_doc"};break;case"www.hamtruyentranh.net":j={link:"#examples a",name:function(e){var n=t(e).clone();return n.find("span").remove(),t(".title-manga").text().trim()+" "+n.text().trim()},contents:".each-page"};break;case"ttmanga.com":j={link:"#list-chapter a",init:function(){R((function(t){var e=t.find("#divImage").siblings("script").first().text();if(/lstImages\.push\("([^"]+)"\)/.test(e)){for(var n,o=/lstImages\.push\("([^"]+)"\)/gi,r=[];n=o.exec(e);)r.push(decodeURIComponent(n[1]));U(r)}else d()}))}};break;case"truyen.vnsharing.site":j={link:"#manga-chaplist a",contents:".read_content"};break;case"blogtruyen.com":case"blogtruyen.vn":case"blogtruyen.top":case"blogtruyenmoi.com":case"www.blogtruyen.com":case"www.blogtruyen.vn":case"www.blogtruyen.top":j={link:"#list-chapters .title a",contents:"#content"};break;case"m.blogtruyen.com":case"m.blogtruyen.vn":case"m.blogtruyen.top":case"m.blogtruyenmoi.com":j={link:".list-chapter a",name:function(e){return t("h1.title").text().trim()+" "+t(e).find("span").text().trim()},contents:".content"};break;case"truyensieuhay.com":j={link:"#chapter-list-flag a",name:"h1",init:function(){R((function(e){if(e.find("#wrap_alertvip").length)d();else{var n=e.find(".content-chap-image").find("script:not([type]):first").text();(n=/\bgetContentchap\('(.+?)','(.+?)'\)/.exec(n))?t.ajax({type:"POST",url:"/Service.asmx/getContentChap",data:'{ sID: "'+n[1]+'",chuc:"'+n[2]+'" }',contentType:"application/json; charset=utf-8",dataType:"json",success:function(e){if(e.Message)d();else{var n=function(t,e){e=e.substring(2,e.length-3);var n=CryptoJS.enc.Utf8.parse(e.toLowerCase()),o=CryptoJS.enc.Utf8.parse("gqLOHUioQ0QjhuvI");return CryptoJS.AES.decrypt(t,n,{iv:o,mode:CryptoJS.mode.CBC}).toString(CryptoJS.enc.Utf8)}((e=JSON.parse(e.d)).des,e.id);$(n=t(n).filter("img"))}},error:function(){d()}}):d()}}))}};break;case"truyenqq.com":case"truyenqq.net":case"truyenqqtop.com":case"truyenqqpro.com":j={link:".works-chapter-list a",name:"h1",contents:".chapter_content"};break;case"hentaicube.net":case"hentaicb.top":j={link:".wp-manga-chapter a",name:".post-title",contents:".reading-content",imgSrc:"data-src"};break;case"tuthienbao.com":case"www.tuthienbao.com":j={link:'a[id^="thread_title_"]',contents:".quotecontent"};break;case"vietcomic.net":j={link:'.chapter-list a:not([rel="nofollow"])',name:function(e,n){return t(".manga-info-text h1").text().trim()+" "+n},init:function(){R((function(t){var e=t.filter('script:not([src]):contains("Loadimage(i)")');e.length&&(e=e.text().match(/data\s=\s'(.+?)';/))?U(e=(e=e[1]).split("|")):d()}))}};break;case"hamtruyentranh.com":j={reverse:!1,link:"#chaps .chapter-title a:not([target])",name:"h1",contents:".table-responsive",imgSrc:"id-source"};break;case"khotruyentranhz.com":j={link:"#chapters-list-content .chapter-list a",name:"h1",contents:".box-chapter-content"};break;case"truyenvn.com":case"truyenvn.vip":case"truyenvnpro.com":j={link:"#chapterList a",name:function(e){return t("h1.name").text().trim()+" "+t(e).find("span:first").text().trim()},contents:".content-text"};break;case"saytruyen.net":case"www.saytruyen.net":case"saytruyen.com":case"www.saytruyen.com":case"sayhentai.net":case"www.sayhentai.net":case"sayhentai.tv":j={link:".main-col .wp-manga-chapter a",name:".post-title h1",contents:"#chapter_content"};break;case"cocomic.net":j={link:".chapter-list .citem a",name:"h1",contents:".chapter-content"};break;default:j={}}if(Array.isArray(j)){var ot=/mobi|android|touch|mini/i.test(navigator.userAgent.toLowerCase());j=j[ot?1:0]}j&&(j=t.extend(M,j)).init()}));