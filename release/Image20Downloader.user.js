// ==UserScript==
// @name         Image Downloader
// @namespace       http://tampermonkey.net/
// @version         2.90
// @author          桃源隐叟-The hide oldman in taoyuan mountain
// @connect  *
// @connect  *://*/*
// @grant   GM_openInTab
// @grant   GM_registerMenuCommand
// @grant   GM_setValue
// @grant   GM_getValue
// @grant   GM_deleteValue
// @grant   GM_xmlhttpRequest
// @grant   GM_download
// @require https://unpkg.com/hotkeys-js@3.9.4/dist/hotkeys.min.js
// @require https://cdn.bootcdn.net/ajax/libs/jszip/3.7.1/jszip.min.js
// @require https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @run-at  document-end
// @match   *://*/*
// @include *
// @match   https://www.bilibili.com/
// @match   https://588ku.com/
// @homepageURL https://github.com/taoyuancun123/modifyText/blob/master/modifyText.js
// @supportURL  https://greasyfork.org/zh-CN/scripts/419894/feedback
// @run-at      document-start
// @license GPLv3
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Image20Downloader.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Image20Downloader.meta.js
// ==/UserScript==
(function(){"use strict";var lang=navigator.appName=="Netscape"?navigator.language:navigator.userLanguage,langSet,localization={zh:{selectAll:"\u5168\u9009",downloadBtn:"\u4E0B\u8F7D",downloadMenuText:"\u6253\u5F00\u811A\u672C(Alt+w)",zipDownloadBtn:"zip\u4E0B\u8F7D",selectAlert:"\u8BF7\u81F3\u5C11\u9009\u4E2D\u4E00\u5F20\u56FE\u7247\u3002",fetchTip:"\u51C6\u5907\u6293\u53D6canvas\u56FE\u7247",fetchCount1:"\u6293\u53D6canvas\u56FE\u7247\u7B2C",fetchCount2:"\u5F20",fetchDoneTip1:"\u5DF2\u9009(0/",fetchDoneTip1Type2:"\u5DF2\u9009(",fetchDoneTip2:")\u5F20\u56FE\u7247",regRulePlace:"\u8F93\u5165\u5F85\u66FF\u6362\u6B63\u5219",regReplacePlace:"\u8F93\u5165\u66FF\u6362\u5B83\u7684\u5B57\u7B26\u4E32\u6216\u8005\u51FD\u6570",zipOptionDesc:"\u52FE\u9009\u4F7F\u7528zip\u4E0B\u8F7D\u540E\uFF0C\u4F1A\u8BF7\u6C42\u8DE8\u57DF\u6743\u9650\uFF0C\u5426\u5219zip\u4E0B\u8F7D\u57FA\u672C\u4E0B\u8F7D\u4E0D\u5230\u56FE\u7247\u3002",zipCheckText:"\u4F7F\u7528zip\u4E0B\u8F7D",downloadUrlFile:"\u4E0B\u8F7D\u56FE\u7247\u5730\u5740",moreSetting:"\u66F4\u591A\u8BBE\u7F6E",autoBitImgModule:"\u81EA\u52A8\u5927\u56FE\u8BBE\u7F6E\u6A21\u5757",defaultSettingRule:"\u8BBE\u7F6E\u9ED8\u8BA4\u89C4\u5219",exportCustomRule:"\u5BFC\u51FA\u81EA\u5B9A\u89C4\u5219",importCustomRule:"\u5BFC\u5165\u81EA\u5B9A\u89C4\u5219",fold:"\u6536\u8D77",inputFilenameTip:"\u8F93\u5165\u6587\u4EF6\u540D",extraGrab:"\u5F3A\u529B\u6293\u53D6"},en:{selectAll:"selectAll",downloadBtn:"download",downloadMenuText:"Open(Alt+w)",zipDownloadBtn:"zip Download",selectAlert:"Please at last select one image.",fetchTip:"Ready to fetch canvas image.",fetchCount1:"Fetch the",fetchCount2:" canvas image.",fetchDoneTip1:"(0/",fetchDoneTip1Type2:"(",fetchDoneTip2:") Images selected",regRulePlace:"enter reg express",regReplacePlace:"enter replace string or function",zipOptionDesc:"when zip option checked,will request cors right,otherwise zipDownload can not get pics",zipCheckText:"Use ZipDownload",downloadUrlFile:"Download Imgs Url",moreSetting:"More Setting",autoBitImgModule:"AutoBigImageModule",defaultSettingRule:"SetDefaultRule",exportCustomRule:"exportCustomRule",importCustomRule:"importCustomRule",fold:"fold",inputFilenameTip:"input filename",extraGrab:"Extra Grab"}};lang.toLowerCase().includes("zh-")?langSet=localization.zh:langSet=localization.en;const autoBigImage={bigImageArray:[],defaultRules:[{originReg:/(?<=(.+sinaimg\.(?:cn|com)\/))([\w\.]+)(?=(\/.+))/i,replacement:"large",tip:"for weib.com"},{originReg:/(?<=(.+alicdn\.(?:cn|com)\/.+\.(jpg|jpeg|gif|png|bmp|webp)))_.+/i,replacement:"",tip:"for alibaba web"},{originReg:/(.+alicdn\.(?:cn|com)\/.+)(\.\d+x\d+)(\.(jpg|jpeg|gif|png|bmp|webp)).*/i,replacement:(c,l,h,u)=>l+u,tip:"for 1688"},{originReg:/(?<=(.+360buyimg\.(?:cn|com)\/))(\w+\/)(?=(.+\.(jpg|jpeg|gif|png|bmp|webp)))/i,replacement:"n0/",tip:"for jd"},{originReg:/(?<=(.+hdslb\.(?:cn|com)\/.+\.(jpg|jpeg|gif|png|bmp|webp)))@.+/i,replacement:"",tip:"for bilibili"},{originReg:/th(\.wallhaven\.cc\/)(?!full).+\/(\w{2}\/)([\w\.]+)(\.jpg)/i,replacement:(c,l,h,u)=>"w"+l+"full/"+h+"wallhaven-"+u+".jpg",tip:"for wallhaven"},{originReg:/th(\.wallhaven\.cc\/)(?!full).+\/(\w{2}\/)([\w\.]+)(\.jpg)/i,replacement:(c,l,h,u)=>"w"+l+"full/"+h+"wallhaven-"+u+".png",tip:"for wallhaven"},{originReg:/(.*\.twimg\.\w+\/.+\&name=*)(.*)/i,replacement:(c,l,h,u)=>l+"orig",tip:"for twitter"},{originReg:/(shonenjump\.com\/.*\/)poster_thumb(\/.*)/,replacement:"$1poster$2",tip:"for www.shonenjump.com"},{originReg:/(qzone\.qq\.com.*!!\/.*)$/,replacement:"$1/0",tip:"for Qzone"},{originReg:/(.*wordpress\.com.*)(\?w=\d+)$/,replacement:"$1",tip:"for wordpress"}],defaultRulesChecked:[],userRules:[],userRulesChecked:[],replace(c){let l=this;l.bigImageArray=[];let h=Array.from(new Set(c)).filter(s=>s&&s);l.setRulesChecked(),h.forEach(u);function u(s,f){if(s.includes("data:image/")){l.bigImageArray.push(s);return}l.defaultRules.forEach((p,w)=>{if(l.defaultRulesChecked[w]!=="checked"){l.bigImageArray.push(s);return}let y=s.replace(p.originReg,p.replacement);y!==s?(l.bigImageArray.push(s),l.bigImageArray.push(y)):l.bigImageArray.push(s)}),l.userRules.forEach((p,w)=>{if(l.userRulesChecked[w]!=="checked"){l.bigImageArray.push(s);return}let y=s.replace(p.originReg,p.replacement);y!==s?(l.bigImageArray.push(s),l.bigImageArray.push(y)):l.bigImageArray.push(s)})}},getBigImageArray(c){return this.replace(c),Array.from(new Set(this.bigImageArray))},showDefaultRules(){let c=this,l=document.body.querySelector(".tyc-set-domain-default");c.setRulesChecked(),this.defaultRules.forEach((h,u)=>{let s=`<div class="tyc-set-replacerule">
                            <input type="checkbox" name="active" class="tyc-default-active" ${c.defaultRulesChecked[u]}>
                            <input type="text" name="regrule" placeholder="${langSet.regRulePlace}" class="tyc-search-title" value="${h.originReg}">
                            <input type="text" name="replace" placeholder="${langSet.regReplacePlace}" class="tyc-search-url" value="${h.replacement}">
                            <span class="tyc-default-tip">${h.tip}</span>
                    </div>
                `;l.insertAdjacentHTML("beforeend",s)})},showRules(c,l,h,u){let s=this,f=document.body.querySelector("."+c);s.setRulesChecked(),s.setCustomRules(),s[l].forEach((p,w)=>{let y=`<div class="tyc-set-replacerule">
                            <input type="checkbox" name="active" class="${u}" ${s[h][w]}>
                            <input type="text" name="regrule" placeholder="${langSet.regRulePlace}" class="tyc-search-title" value="${p.originReg}">
                            <input type="text" name="replace" placeholder="${langSet.regReplacePlace}" class="tyc-search-url" value="${p.replacement}">
                            <span class="tyc-default-tip">${p.tip}</span>
                    </div>
                `;f.insertAdjacentHTML("beforeend",y)})},onclickShowDefaultBtn(){let c=document.body.querySelector(".tyc-set-domain-default");c.style.display==="none"||c.style.display===""?c.style.display="flex":c.style.display="none"},oncheckChange(){let c=document.body.querySelectorAll(".tyc-default-active");this.defaultRulesChecked=[],c.forEach((l,h)=>{l.checked?this.defaultRulesChecked.push("checked"):this.defaultRulesChecked.push("")}),GM_setValue("defaultRulesChecked",this.defaultRulesChecked)},oncheckChangeCustom(){let c=document.body.querySelectorAll(".tyc-custom-active");this.userRulesChecked=[],c.forEach((l,h)=>{l.checked?this.userRulesChecked.push("checked"):this.userRulesChecked.push("")}),GM_setValue("userRulesChecked",this.userRulesChecked)},setRulesChecked(){if(GM_getValue("defaultRulesChecked")){if(this.defaultRulesChecked=GM_getValue("defaultRulesChecked"),this.defaultRulesChecked.length<this.defaultRules.length){let c=this.defaultRules.length-this.defaultRulesChecked.length;for(let l=0;l<c;l++)this.defaultRulesChecked.push("checked")}}else this.defaultRules.forEach(c=>{this.defaultRulesChecked.push("checked")}),GM_setValue("defaultRulesChecked",this.defaultRulesChecked);GM_getValue("userRulesChecked")&&GM_getValue("userRulesChecked").length>0?this.userRulesChecked=GM_getValue("userRulesChecked"):(this.userRules.forEach(c=>{this.userRulesChecked.push("checked")}),GM_setValue("userRulesChecked",this.userRulesChecked))},getCustomRules(event){let that=autoBigImage,file=document.querySelector("#tycfileElem").files[0],fileReader=new FileReader;fileReader.onload=e=>{let result=e.target.result;that.userRules=eval(result),GM_deleteValue("userRulesChecked"),that.setRulesChecked(),GM_setValue("userRules",result),document.body.querySelector(".tyc-set-domain-custom").innerHTML="",that.showRules("tyc-set-domain-custom","userRules","userRulesChecked","tyc-custom-active")},fileReader.readAsText(file,"GB2312")},setCustomRules(){if(GM_getValue("userRules"))try{this.userRules=eval(GM_getValue("userRules"))}catch(c){GM_setValue("userRules","")}},exportCustomRules(){}};var preImgSrcs=[];let originalSrcDescriptor=Object.getOwnPropertyDescriptor(HTMLImageElement.prototype,"src");var domainName=document.domain.split("."),downloadFileName,shortCutString="alt+W";GM_getValue("shortCutString")!=null&&(shortCutString=GM_getValue("shortCutString")),GM_registerMenuCommand(langSet.downloadMenuText,wrapper),hotkeys(shortCutString,shortcutFunction),GM_getValue("extra-grab-check")&&extraGrab();function extraGrab(){Object.defineProperty(HTMLImageElement.prototype,"src",{get:function(){return originalSrcDescriptor.get.call(this)},set:function(c){preImgSrcs.includes(c)||preImgSrcs.push(c),originalSrcDescriptor.set.call(this,c)}})}function shortcutFunction(){if(document.querySelector(".tyc-image-container")!=null)try{document.querySelector(".tyc-image-container").remove()}catch{}else wrapper()}function wrapper(){downloadFileName=domainName[domainName.length-2];var c=new Date().getTime().toString();downloadFileName=downloadFileName+c.substring(7,c.length);try{document.querySelector(".tyc-image-container").remove()}catch{}var l=[],h=document.body.innerHTML,u=[],s=[],f=[],p=[],w={min:0,max:3e3},y={min:0,max:3e3},m=[],b=[];try{var k=new JSZip,M=k.folder("pics")}catch{}var $="";try{let t=document.getElementsByTagName("img"),i=document.getElementsByTagName("canvas");for(let a=0;a<t.length;a++)if(l.includes(t[a].src)||l.push(t[a].src),t[a].srcset!==""){let r=t[a].srcset.split(","),d=r[0].match(/\S+/gi)[0];for(let g=0;g<r.length-1;g++)if(parseInt(r[g].match(/\S+/gi)[1])>parseInt(r[g+1].match(/\S+/gi)[1])){d=r[g].match(/\S+/gi)[0];break}else d=r[g+1].match(/\S+/gi)[0];l.includes(d)||l.push(d)}for(let a=0;a<preImgSrcs.length;a++)l.includes(preImgSrcs[a])||l.push(preImgSrcs[a]);let n=h.match(/(?<=background-image:\s*url\()(\S+)(?=\))/g);try{for(let a=0;a<n.length;a++)n[a].includes("&quot;")?l.push(n[a].replace(/&quot;/g,"")):n[a].includes("'")&&l.push(n[a].replace(/'/g,""))}catch(a){console.log(a)}if(window.location.href.includes("hathitrust.org")){let a=document.querySelectorAll(".image img");if(a.length>0){let r=document.createElement("canvas");l=[];for(let d=0;d<a.length;d++)r.width=a[d].width,r.height=a[d].height,r.getContext("2d").drawImage(a[d],0,0),l.push(r.toDataURL("image/png"));document.querySelector(".select-all").style="position:relative;width:15px;height:15px;"}}window.location.href.toString().includes("manga.bilibili.com/")&&document.getElementById("tyc-insert-iframe")==null&&(document.body.insertAdjacentHTML("afterbegin",'<iframe style="display:none;" id="tyc-insert-iframe"></iframe>'),document.getElementById("tyc-insert-iframe").contentDocument.body.insertAdjacentHTML("afterbegin",'<canvas id="tyc-insert-canvas"></canvas>'),document.body.getElementsByTagName("canvas")[0].__proto__.toBlob=document.getElementById("tyc-insert-iframe").contentDocument.getElementById("tyc-insert-canvas").__proto__.toBlob);let o=l.length;if(i.length>0){$=langSet.fetchTip;var C=0;for(let a=0;a<i.length;a++){let r=function(d){let g=new FileReader;g.onloadend=function(x){let S=x.target.result;S.includes("data:image")&&(l.includes(S)||(l[o+a]=S),C++,document.querySelector(".num-tip").innerText=`${langSet.fetchCount1} ${C}/${i.length} ${langSet.fetchCount2}`,C===i.length&&(T(),q()))},g.readAsDataURL(d)};i[a].toBlob(r)}}else $=`${langSet.fetchDoneTip1}${l.length}${langSet.fetchDoneTip2}`}catch(t){console.log(t)}let z=`<style>
        .tyc-image-container{
            color:black;
            position:fixed;
            top:0px;
            left:10%;
            width:80vw;
            z-index:2147483645;
            background-color: #dedede;
            border: 1px solid #aaa;
            overflow:scroll;height:100%;
        }

        .tyc-image-container button{
            border:1px solid #aaa;
            border-radius:5px;
            height:32px;line-height:32px;
            margin:0px;padding:0 5px;
        }

        .tyc-image-container button:hover{
            background-color: #f50;
            color: #fff;
        }

        .control-section{
            width:80vw;
            z-index:2147483646;
            position:fixed;
            top:0px;
            left:10%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height:40px;
            background:#eee;border:1px solid #aaa;border-radius:2px;
        }

        .control-section-sub{
            display: flex;
            margin-bottom: 5px;
        }

        .tyc-normal-section{
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: normal;
            justify-content: flex-start;
            font-size:10px;
        }

        .tyc-normal-section *{
            padding-top:2px;
        }

        .btn-download{
            border:1px solid #aaa;border-radius:5px;
            height:32px;line-height:32px;
            margin:0px;padding:0 5px;
        }
        .btn-zipDownload{
            border:1px solid #aaa;border-radius:5px;
            height:32px;line-height:32px;
            margin:0px;padding:0 5px;
        }
        .btn-close{
            font-size:20px;position:absolute;
            right:30px;top:4px;
            height:32px;line-height:32px;
            margin:0px;
            border-radius:10px;border:1px solid #aaa;
            width:30px;
        }

        .tyc-image-wrapper{
            margin-top:82px;display:flex;justify-content:center;
            align-items:center;flex-wrap:wrap;
        }

        .tyc-input-checkbox{
            background-color: initial;
            cursor: default;
            appearance: auto;
            box-sizing: border-box;
            margin: 3px 3px 3px 4px;
            padding: initial;
            border: initial;
        }

        .tyc-extend-set{
            padding: 10px;
            border-top: 1px solid rgba(100,100,100,0.1);
        }

        .tyc-extend-set{
            display: none;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
            padding: 5px;
            width: auto;
        }

        .tyc-extend-set-container{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
            align-content: normal;
            border: 1px solid rgba(100,100,100,0.5);
            padding: 5px;
            margin-bottom: 5px;
        }

        .tyc-autobigimg-set{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
            align-content: normal;
            border: 1px solid rgba(100,100,100,0.5);
            padding: 5px;
        }

        .tyc-set-domain{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
            align-content: normal;
            margin: 5px;
            padding: 5px;
            border: 1px solid rgba(100,100,100,0.3);
            width: 95%;
            max-height: 150px;
            overflow: scroll;
        }

        .tyc-abi-title{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            width: 100%;
        }

        .tyc-abi-domain-title{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 95%;
            border-bottom: 1px solid #ddd;
        }
        .tyc-set-replacerule{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 3px;
            flex-wrap: wrap;
        }

        .tyc-set-replacerule *,.tyc-set-replacerule button{
            margin-left: 5px;
        }

        .tyc-set-domain-default{
            height: 200px;
            overflow: scroll;
            display: none;
        }
    </style>
    <div class="tyc-image-container">
        <div class="control-section">
            <div class="control-section-sub tyc-normal-section">
                <input class="select-all tyc-input-checkbox" type="checkbox" name="select-all" value="select-all">${langSet.selectAll}
                <button class="btn-download" style="margin-left:5px;">${langSet.downloadBtn}</button>
                <button class="btn-zipDownload" style="margin-left:5px;">${langSet.zipDownloadBtn}</button>
                <span style="margin-left:10px;" class="num-tip">${langSet.fetchDoneTip1}${l.length}${langSet.fetchDoneTip2}</span>
                <input type="text" class="tyc-file-name" style="height:15px;width:80px;margin-left:25px;font-size:10px;" value="${downloadFileName}">
                <input type="text" class="shortCutString" style="height:15px;width:80px;margin-left:25px;font-size:10px;" value="${shortCutString}">-ShortCut
                <button cstyle="margin-left:10px;" class="btn-close" >X</button>
            </div>


            <div style="line-height:12px;" class="control-section-sub tyc-normal-section">
                <div style="float:left;display:block;">
                <input type="checkbox" class="width-check img-check tyc-input-checkbox" name="width-check" value="width-check">Width:
                <input type="text" class="width-value-min" size="1" style="height:15px;width:50px;"
                    min="0" max="9999" value="0">-
                    <input type="text" class="width-value-max" size="1" style="height:15px;width:50px;"
                    min="0" max="9999" value="3000">
                </div>

                <div style="float:left;margin-left:30px;display:block;">
                    <input type="checkbox" class="height-check img-check tyc-input-checkbox" name="height-check" value="height-check">Height:
                    <input type="text" class="height-value-min" size="1" style="height:15px;width:50px;"
                        min="0" max="9999" value="0">-
                        <input type="text" class="height-value-max" size="1" style="height:15px;width:50px;"
                        min="0" max="9999" value="3000">
                </div>

                <div style="float:left;margin-left:30px;display:block;" class="tyc-extra-grab">
                    <input type="checkbox" class="extra-grab-check img-check tyc-input-checkbox" name="extra-grab-check" value="extra-grab-check">
                    <span>${langSet.extraGrab}</span>
                </div>

                <div style="float:left;margin-left:30px;display:block;" class="tyc-download-url">
                    <button class="tyc-download-url-btn">${langSet.downloadUrlFile}</button>
                </div>


                <div style="float:left;margin-left:30px;display:block;" class="tyc-extend-btn">
                    <span>${langSet.moreSetting} </span>
                    <span style="top: 3px;position: relative;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="tyc-extend-set control-section-sub">
                <div class="tyc-autobigimg-set tyc-extend-set-container">
                    <div class="tyc-abi-title">
                        <div>
                            ${langSet.autoBitImgModule}
                        </div>
                        <div>
                            <button class="tyc-default-rule-show">${langSet.defaultSettingRule}</button>
                        </div>

                        <div>
                        <button>${langSet.exportCustomRule}</button>
                    </div>

                        <div>
                            <input type="file" id="tycfileElem" multiple accept="text/plain" style="display:none">
                            <button id="tyc-file-select">${langSet.importCustomRule}</button>
                        </div>

                    </div>
                    <div class="tyc-set-domain tyc-set-domain-custom">
                    </div>
                    <div class="tyc-set-domain tyc-set-domain-default">
                    </div>
                </div>

            </div>
        </div>
        <div class="tyc-image-wrapper" >
        </div>
    </div>`,N=`
        <div class="show-big-image" style="position:fixed;left:30%;top:30%;z-index:2147483647;">
        </div>
    `,F=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>`;document.body.insertAdjacentHTML("afterbegin",z),autoBigImage.showDefaultRules(),autoBigImage.showRules("tyc-set-domain-custom","userRules","userRulesChecked","tyc-custom-active"),document.querySelector(".tyc-image-wrapper").style=`margin-top:${document.querySelector(".control-section").clientHeight}px`,document.body.onclick=t=>{let i=t.path||t.composedPath&&t.composedPath();if(t.target.nodeName=="IMG"&&t.target.className==="tyc-image-preview"){let n=i.find(d=>d.classList[0]==="tyc-image-preview"),o=parseInt(n.dataset.value),a=i.find(d=>d.className===`tyc-img-item-container-${o}`),r=a.getElementsByClassName("tyc-image-info-container")[0];u.includes(o)?(u.splice(u.indexOf(o),1),a.style.border="1px solid #99d",r.style.backgroundColor="rgba(100,100,100,0.6)"):(u.push(o),a.style.border="1px solid #f50",r.style.backgroundColor="rgba(88, 158, 255, 0.8)"),s=u,document.querySelector(".num-tip").innerText=`${langSet.fetchDoneTip1Type2}${u.length}/${l.length}${langSet.fetchDoneTip2}`,f=R(m,u),p=R(b,s),p=B(p)}else if(t.target.parentElement.className==="show-big-image")try{document.querySelector(".show-big-image").remove()}catch{}else if(t.target.classList[1]=="bi-download"||i.find(_)!=null){let o=i.find(d=>{try{return d.className.includes("tyc-img-item-container")}catch{}}).getElementsByTagName("img")[0].src,a;o.indexOf("/")>0?a=o.substring(o.lastIndexOf("/")+1,o.lastIndexOf(".")):a=o;let r=document.querySelector(".tyc-file-name").value||"pic";saveAs(o,r)}else if(t.target.classList[1]=="bi-arrows-fullscreen"||i.find(G)!=null){let o=i.find(x=>{try{return x.className.includes("tyc-img-item-container")}catch{}}).getElementsByTagName("img")[0].src;try{let x=document.querySelector(".show-big-image");if(x.getElementsByTagName("img")[0].src===o){x.remove();return}else x.remove()}catch{}document.body.insertAdjacentHTML("beforeend",N);let a=`<img src="${o}"/>`;document.querySelector(".show-big-image").insertAdjacentHTML("beforeend",a);let r=document.querySelector(".show-big-image img"),d=(window.innerWidth-r.width)/2,g=(window.innerHeight-r.height)/2;document.querySelector(".show-big-image").style.left=d+"px",document.querySelector(".show-big-image").style.top=g+"px",(r.width>window.innerWidth||r.height>window.innerHeight)&&(document.querySelector(".show-big-image").style.overflow="scroll",r.width>window.innerWidth&&(document.querySelector(".show-big-image").style.left="0px",document.querySelector(".show-big-image").style.width=window.innerWidth+"px"),r.height>window.innerHeight&&(document.querySelector(".show-big-image").style.top="0px",document.querySelector(".show-big-image").style.height=window.innerHeight+"px"))}},document.querySelector(".btn-close").onclick=t=>{document.querySelector(".tyc-image-container").remove()},document.querySelector(".btn-download").onclick=async t=>{if(f.length>=1){let i=function(){return new Promise((n,o)=>{setTimeout(()=>{n(1)},200)})};for(let n=0;n<f.length;n++){await i();let o=document.querySelector(".tyc-file-name").value||"pic";console.log(`${o}-${n}`),saveAs(f[n],`${o}-${n}`)}}else alert(`${langSet.selectAlert}`)},document.querySelector(".btn-zipDownload").onclick=t=>{try{p.length>=1?(p.forEach(async(i,n)=>{let o=i.substring(i.indexOf("image/")+6,i.indexOf(";"));o=o.includes("svg")?"svg":o;let r=`${document.querySelector(".tyc-file-name").value||"pic"}-${n}.${o}`;M.file(r,i.split(",")[1],{base64:!0})}),k.generateAsync({type:"blob"}).then(function(i){let n=document.querySelector(".tyc-file-name").value||"pic";saveAs(i,`${n}.zip`),k.remove("pics"),M=k.folder("pics")})):alert(`${langSet.selectAlert}`)}catch{}},document.body.onchange=t=>{t.target.className.includes("width-check")&&GM_setValue("width-check",t.target.checked),t.target.className.includes("height-check")&&GM_setValue("height-check",t.target.checked),t.target.className.includes("extra-grab-check")&&(GM_setValue("extra-grab-check",t.target.checked),document.querySelector(".extra-grab-check").checked),t.target.className.includes("tyc-default-active")&&autoBigImage.oncheckChange(),t.target.className.includes("tyc-custom-active")&&autoBigImage.oncheckChangeCustom(),t.target.nodeName==="INPUT"&&t.target.type==="text"&&t.target.className.includes("value")&&GM_setValue(t.target.className,t.target.value),t.target.nodeName==="INPUT"&&t.target.type==="text"&&t.target.className.includes("shortCutString")&&(GM_setValue(t.target.className,t.target.value),hotkeys(t.target.value,wrapper)),(t.target.className.includes("width-check")||t.target.className.includes("height-check")||t.target.nodeName==="INPUT"&&t.target.type==="text"&&t.target.className.includes("value"))&&(T(),q())},document.querySelector(".select-all").onchange=t=>{document.querySelector(".select-all").checked?(f=m,p=B(b)):(f=R(m,u),p=R(b,s)),document.querySelector(".num-tip").innerText=`${langSet.fetchDoneTip1Type2}${f.length}/${m.length}${langSet.fetchDoneTip2}`},document.querySelector(".tyc-extend-btn").onclick=t=>{document.querySelector(".tyc-extend-btn").classList.contains("extend-open")?(document.querySelector(".tyc-extend-btn").classList.remove("extend-open"),document.querySelector(".tyc-extend-set").style.display="none",document.querySelector(".tyc-extend-btn").style.color="black",document.querySelector(".tyc-extend-btn").innerHTML=`<span>${langSet.moreSetting}</span>
                <span style="top: 3px;position: relative;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span> `):(document.querySelector(".tyc-extend-btn").classList.add("extend-open"),document.querySelector(".tyc-extend-set").style.display="flex",document.querySelector(".tyc-extend-btn").style.color="#f50",document.querySelector(".tyc-extend-btn").innerHTML=`<span>${langSet.fold} </span>
                <span style="top: 3px;position: relative;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
                </span> `)},document.querySelector(".tyc-default-rule-show").onclick=autoBigImage.onclickShowDefaultBtn,document.querySelector("#tyc-file-select").onclick=t=>{document.querySelector("#tycfileElem").click()},document.querySelector("#tycfileElem").onchange=autoBigImage.getCustomRules,document.querySelector(".tyc-download-url-btn").onclick=t=>{let i=new Blob([f.join(`
`)],{type:"text/plain",endings:"native"});saveAs(i,"urls.txt")},q();function q(){m=l,m=autoBigImage.getBigImageArray(m),j(),document.querySelector(".width-check").checked&&(m=m.filter(D)),document.querySelector(".height-check").checked&&(m=m.filter(L)),b=m,H(),V(m)}function T(){f=[],u=[],document.querySelector(".num-tip").innerText=`${langSet.fetchDoneTip1Type2}${u.length}/${l.length}${langSet.fetchDoneTip2}`,document.querySelector(".tyc-image-wrapper").innerHTML=""}function _(t){return t.className=="download-direct"}function G(t){return t.className=="fullscreen-image"}function R(t,i){let n=[];return i.forEach((o,a)=>{n.push(t[o])}),n}function V(t){t.forEach((i,n)=>{window.location.href.includes("huaban.com")&&i.includes("/webp")&&(i=i.replace(/\/webp/g,"/png"));let o=`<div class="tyc-img-item-container-${n}" style="text-align:center;font-size:0px;
    margin:5px;border:1px solid #99d;border-radius:3px;
    ">
    <img class="tyc-image-preview" src="${i}"/ style="width:auto;height:200px;" data-value="${n}"></div>`;document.querySelector(".tyc-image-wrapper").insertAdjacentHTML("beforeend",o);let a=document.querySelector(`.tyc-img-item-container-${n} .tyc-image-preview`).naturalWidth,r=document.querySelector(`.tyc-img-item-container-${n} .tyc-image-preview`).naturalHeight,d=`
            <div class="tyc-image-info-container" style="font-size:0px;background-color:rgba(100,100,100,0.6);height:30px;position:relative;">


    </div>
            `,g=document.querySelector(`.tyc-img-item-container-${n}`),x=g.getBoundingClientRect().width,S=`
            <span style="font-size:16px;position:absolute;left:calc(50% - 80px);top:7px;">${a}X${r}</span>
            `,A=`
    <span style="position:absolute;right:calc(50% - 30px);top:2px;border:1px solid #333;
    width:26px;height:26px;border-radius:20px;" class="fullscreen-image" data-value="${n}">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16"  style="position:absolute;top:4px;right:4px;width:18px;height:18px;" data-value="${n}">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
    </svg>
    </span>
    <span style="position:absolute;right:calc(50% - 60px);top:2px;border:1px solid #333;
    width:26px;height:26px;border-radius:20px;
    " class="download-direct">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" style="position:absolute;top:5px;right:5px;">
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
    </svg>
    </span>

    `,E=`
            <span style="position:absolute;right:calc(50% - 15px);top:2px;border:1px solid #333;
    width:26px;height:26px;border-radius:20px;
    " class="download-direct">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" style="position:absolute;top:5px;right:5px;">
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
    </svg>
    </span>
            `;g.insertAdjacentHTML("beforeend",d);let v=g.querySelector("div"),I=parseInt(g.getBoundingClientRect().width);I>120?(v.insertAdjacentHTML("beforeend",S),v.insertAdjacentHTML("beforeend",A)):I<=120&&I>=50?(v.insertAdjacentHTML("beforeend",A),v.getElementsByClassName("fullscreen-image")[0].style.right="50%",v.getElementsByClassName("download-direct")[0].style.right="calc(50% - 30px)"):v.insertAdjacentHTML("beforeend",E)})}function D(t){let i=new Image;if(i.src=t,i.width>=parseInt(document.querySelector(".width-value-min").value)&&i.width<=parseInt(document.querySelector(".width-value-max").value))return t}function L(t){let i=new Image;if(i.src=t,i.height>=parseInt(document.querySelector(".height-value-min").value)&&i.height<=parseInt(document.querySelector(".height-value-max").value))return t}function j(){GM_getValue("width-check")!=null&&(document.querySelector(".width-check").checked=GM_getValue("width-check")),GM_getValue("height-check")!=null&&(document.querySelector(".height-check").checked=GM_getValue("height-check")),GM_getValue("extra-grab-check")!=null&&(document.querySelector(".extra-grab-check").checked=GM_getValue("extra-grab-check")),GM_getValue("width-value-min")&&(document.querySelector(".width-value-min").value=GM_getValue("width-value-min")),GM_getValue("width-value-max")&&(document.querySelector(".width-value-max").value=GM_getValue("width-value-max")),GM_getValue("height-value-min")&&(document.querySelector(".height-value-min").value=GM_getValue("height-value-min")),GM_getValue("height-value-max")&&(document.querySelector(".height-value-max").value=GM_getValue("height-value-max")),GM_getValue("shortCutString")&&(document.querySelector(".shortCutString").value=GM_getValue("shortCutString"))}function H(){b.forEach((t,i)=>{if(!t.includes("data:image"))try{let n=window.location.origin+"/";GM_xmlhttpRequest({method:"get",url:t,headers:{referer:n},responseType:"blob",onload:function(o){var a=o.response;let r=new FileReader;r.onloadend=function(d){let g=d.target.result;g.startsWith("data:image")&&(b[i]=g)},r.readAsDataURL(a)}})}catch{}})}function B(t){let i=[];return t.forEach((n,o)=>{n.startsWith("data:image")&&n.includes("base64")&&i.push(n)}),i}}})();
