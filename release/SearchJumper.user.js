// ==UserScript==
// @name         SearchJumper
// @namespace    hoothin
// @version      1.9.33
// @author       hoothin
// @license      MPL-2.0
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAAD+/v7////+/v7+/v7////+/v79/f3////////+/v7////////////+/v79/f3////+/v7/rP8zMzP/2f/R0dHAwMD/zf+vr69ZWVlKSkry8vL/vv/+5/7r6+uRkZGcnJx8fHxwcHD+7/7f39+kpKTMxXKjAAAAEXRSTlMA4wrL9ICvkxk56nVVI9WgZNxdEUkAAAE2SURBVDjLfdPZloMgDAZgFtHR2uU3LnWrXd//FUfIHKRT7XfhUYIkhINYqPyoM0SZTnIlPu2PEbwo2f8LqwTvIvMW/9H4oH+WeCqxQu79/xKr5N8aSmOD5gkGm3YuQYRNkU3CG+ynCYH6VsEycwW8wJXoDK8narlOIXI4Z6IKi47ucNI5A6vCOC41mBEaX8VCAuVQFEXzQODRzENDaVsRoSwYAgUrIecJI38MCAw8NkLaFCibphyDMusKox0DoJci+6615fcA2q5fikz8b/QC0HWuKTX8NnM/wbWSyL86qW01u1D3xEQ04dLSE0z6w3ILz9rWPq/hefslUN3uL+B6v/kKMiVmO2w6CSfGhqNg6oBVWvlbxTO+XAy1kiVWInTK8EZyfQFlZBDeKbEiNfFBSh2bNBj8BZ8mNsZysMSsAAAAAElFTkSuQmCC
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM.addStyle
// @grant        GM.deleteValue
// @grant        GM_deleteValue
// @grant        GM.registerMenuCommand
// @grant        GM_registerMenuCommand
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.setClipboard
// @grant        GM_setClipboard
// @grant        GM.openInTab
// @grant        GM_openInTab
// @grant        GM.info
// @grant        GM_info
// @grant        unsafeWindow
// @compatible   edge tested with tm
// @compatible   Chrome tested with tm
// @compatible   Firefox tested with tm
// @compatible   Opera untested
// @compatible   Safari untested
// @compatible   ios tested with userscript
// @compatible   android tested with kiwi
// @supportURL   https://github.com/hoothin/SearchJumper/issues
// @homepage     https://github.com/hoothin/SearchJumper
// @require      https://update.greasyfork.org/scripts/484118/1944383/searchJumperDefaultConfig.js
// @connect      global.bing.com
// @connect      suggestqueries.google.com
// @connect      api.bing.com
// @connect      suggestion.baidu.com
// @connect      webdav.hoothin.com
// @connect      search.hoothin.com
// @connect      *
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/SearchJumper.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/SearchJumper.meta.js
// ==/UserScript==
(async function(){"use strict";const Le=typeof unsafeWindow>"u"?window:unsafeWindow;if(Le.searchJumperInited)return;Le.searchJumperInited=!0;const Er=navigator&&navigator.clipboard,Lt=window.top!==window.self,ft=!1,Ue=ft&&location.href.split(/[?#]/)[0]===chrome.runtime.getURL("split/index.html");let Ye=null;const vt=!1;if(ft&&Lt&&window.name.startsWith("sj-split-"))try{Ye=await(!1).runtime.sendMessage({action:"splitFrameHello",paneId:window.name.slice(9),...vt?.identity}),Ye?.ok&&(vt?await vt.confirmed():window.postMessage({action:"searchjumper-split-worker",paneId:Ye.paneId,parentOrigin:chrome.runtime.getURL("").slice(0,-1)},location.origin))}catch(Ae){console.warn("SearchJumper split frame:",Ae)}if(Lt&&!Ye?.ok)try{if(window.name==="pagetual-iframe"||window.frameElement&&window.frameElement.name==="pagetual-iframe")return;if(window.self.innerWidth===0&&window.self.innerHeight===0){if(await new Promise(Ze=>{window.addEventListener("load",Si=>{setTimeout(()=>{Ze(window.self.innerWidth<300||window.self.innerHeight<300)},500)})}))return}else if(window.self.innerWidth<300||window.self.innerHeight<300)return}catch{return}const Zi=/^https:\/\/github\.com\/hoothin\/SearchJumper(\/(issue|discussions)|\/?$|#|\?)|^https:\/\/greasyfork\.org\/.*\/scripts\/445274[\-\/].*\/discussions/i,Xi="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",mt="https://search.hoothin.com/",Lr="https://hoothin.github.io/SearchJumper",Pr=mt+"firstRun";let ct=mt+"config/",Re=!1,c={};c.sitesConfig=sitesConfig,c.prefConfig={position:{x:"left",y:"top"},offset:{x:"0",y:"0"},firstRun:!0,openInNewTab:!1,enableInPage:!0,altKey:!1,ctrlKey:!0,shiftKey:!1,metaKey:!1,autoClose:!1,autoDelay:1e3,shortcut:!0,initShow:!1,alwaysShow:!1,customSize:100,tilesZoom:100,tipsZoom:100,typeOpenTime:250,longPressTime:500,noIcons:!1,showSiteLists:!0,alwaysShowSiteLists:!1,cacheSwitch:!1,noAni:!1,quickAddRule:!0,multiline:2,multilineGap:1e3,historyLength:0,dragToSearch:!0,hideDragHistory:!1,sortType:!1,sortSite:!1,autoHide:!1,autoHideAll:!1,showCurrent:!0,shortcutKey:"Backquote",showInSearchEngine:!1,showInSearchJumpPage:!0,limitInPageLen:1,limitPopupLen:1,ignoreWords:["a","in","into","the","to","on","among","between","and","an","of","by","with","about","under","or","at","as"],inPageRule:{},firstFiveWordsColor:[],inPageWordsStyles:[],altToHighlight:!0,defaultPicker:!1,disableInputOnWords:!1,disableTypeOpen:!1,callBarAlt:!1,callBarCtrl:!1,callBarShift:!1,callBarMeta:!1,defaultFindTab:!0,disableAutoOpen:!1,hideOnSearchEngine:!1,minSizeMode:!1,hidePopup:!1,minPopup:0,selectToShow:!1,expandType:!1,rightMouse:!0,shiftLastUsedType:!0,mouseLeaveToHide:!0,currentTypeFirst:!0,switchSitesPreKey:"ArrowLeft",switchSitesNextKey:"ArrowRight",switchSitesCtrl:!0,switchSitesAlt:!1,switchSitesShift:!0,switchSitesMeta:!1};function Qi(){let Ae=navigator.appName==="Netscape"?navigator.language:navigator.userLanguage,Ze={};function Si(){switch(Ae){case"zh-CN":case"zh-SG":Ze={import:"\u5BFC\u5165",filter:"\u7B5B\u9009",selectAll:"\u5168\u9009",importOrNot:"\u662F\u5426\u5BFC\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u5F00",split:{locale:"zh-CN",title:"\u641C\u7D22\u9171 \xB7 \u5206\u5C4F\u641C\u7D22",button:"\u5206\u5C4F\u641C\u7D22",query:"\u8F93\u5165\u5173\u952E\u8BCD\u6216\u95EE\u9898\uFF0C\u53D1\u9001\u5230\u6240\u6709\u7A97\u683C",search:"\u641C\u7D22 / \u63D0\u95EE",layout:"\u5E03\u5C40",columns2:"\u5DE6\u53F3\u53CC\u680F",rows2:"\u4E0A\u4E0B\u53CC\u680F",columns3:"\u4E09\u680F",columns4:"\u56DB\u680F",previous:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875",refresh:"\u5237\u65B0",open:"\u65B0\u6807\u7B7E",close:"\u5173\u95ED",retry:"\u91CD\u8BD5",loading:"\u6B63\u5728\u52A0\u8F7D\u2026",running:"\u6B63\u5728\u53D1\u9001\u2026",done:"\u5DF2\u5C31\u7EEA",error:"\u52A0\u8F7D\u5931\u8D25",empty:"\u6240\u6709\u7A97\u683C\u5DF2\u5173\u95ED\uFF0C\u53EF\u4ECE\u641C\u7D22\u5206\u7EC4\u91CD\u65B0\u53D1\u8D77\u5206\u5C4F\u3002",timeout:"\u9875\u9762\u5C1A\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728\u65B0\u6807\u7B7E\u9875\u767B\u5F55\uFF0C\u6216\u68C0\u67E5\u5F15\u64CE\u89C4\u5219\u540E\u91CD\u8BD5\u3002",skipped:"\u8FD9\u4E9B\u5F15\u64CE\u8BF7\u4F7F\u7528\u539F\u5165\u53E3\uFF1A",divider:"\u8C03\u6574\u7A97\u683C\u5927\u5C0F",pages:"\u7FFB\u9875",results:"\u641C\u7D22\u7ED3\u679C",ended:"\u5206\u5C4F\u4F1A\u8BDD\u65E0\u6CD5\u6253\u5F00\uFF0C\u8BF7\u4ECE\u641C\u7D22\u5206\u7EC4\u91CD\u65B0\u53D1\u8D77\u3002",noEngines:"\u6B64\u5206\u7EC4\u6CA1\u6709\u53EF\u5206\u5C4F\u7684\u7F51\u9875\u5F15\u64CE\u3002",httpOnly:"\u5206\u5C4F\u4EC5\u652F\u6301\u4E0D\u542B\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684 HTTP(S) \u7F51\u9875\u3002",invalidRequest:"\u641C\u7D22\u8BF7\u6C42\u65E0\u6548\uFF0C\u8BF7\u68C0\u67E5\u5F15\u64CE\u89C4\u5219\u3002",invalidActions:"\u81EA\u52A8\u64CD\u4F5C\u89C4\u5219\u65E0\u6548\uFF0C\u8BF7\u68C0\u67E5\u5F15\u64CE\u89C4\u5219\u3002",missingForm:"\u7F3A\u5C11\u8868\u5355\u63D0\u4EA4\u5730\u5740\u3002",formMismatch:"\u8868\u5355\u63D0\u4EA4\u5730\u5740\u4E0E\u7A97\u683C\u5730\u5740\u4E0D\u4E00\u81F4\u3002",unsupportedBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u9694\u79BB\u5D4C\u5165\u89C4\u5219\uFF0C\u9700\u8981 Chrome 145 \u6216\u66F4\u65B0\u7248\u672C\u3002",invalidTab:"\u5206\u5C4F\u6807\u7B7E\u9875\u65E0\u6548\u3002",pageClosed:"\u5206\u5C4F\u9875\u5DF2\u5173\u95ED\u3002",pageOnly:"\u53EA\u6709\u5206\u5C4F\u9875\u53EF\u4EE5\u4FEE\u6539\u81EA\u5DF1\u7684\u4F1A\u8BDD\u3002",invalidSender:"\u8BF7\u6C42\u4E0D\u662F\u6765\u81EA\u672C\u6269\u5C55\u3002",invalidSearch:"\u5206\u5C4F\u641C\u7D22\u53C2\u6570\u65E0\u6548\u3002",invalidEngine:"\u641C\u7D22\u5F15\u64CE\u4FE1\u606F\u65E0\u6548\u3002",invalidUpdate:"\u641C\u7D22\u66F4\u65B0\u8BF7\u6C42\u65E0\u6548\u3002",missingPane:"\u7A97\u683C\u5DF2\u5173\u95ED\u3002",unknownCommand:"\u65E0\u6CD5\u8BC6\u522B\u5206\u5C4F\u64CD\u4F5C\u3002",pageChanged:"\u9875\u9762\u5728\u786E\u8BA4\u63D0\u4EA4\u524D\u53D1\u751F\u4E86\u8DF3\u8F6C\uFF0C\u8BF7\u6309\u9700\u91CD\u8BD5\u3002"},batchOpenConfirm:"\u786E\u5B9A\u8981\u6279\u91CF\u6253\u5F00\u5417\uFF1F",postOver:"\u53D1\u9001\u6210\u529F\uFF1A",postError:"\u53D1\u9001\u5931\u8D25\uFF1A",copyOver:"\u590D\u5236\u6210\u529F",keywords:"\u8BF7\u8F93\u5165\u641C\u7D22\u8BCD",targetUrl:"\u8BF7\u8F93\u5165\u641C\u7D22URL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u56FE\u6807",siteTest:"\u6D4B\u8BD5",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u7C7B",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u89C4\u5219\uFF0C\u662F\u5426\u6DFB\u52A0\u4E3A\u514B\u9686\u9879\uFF1F",siteAddOver:"\u7AD9\u70B9\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u6362\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u7D22\uFF1F",multilineTooMuch:"\u884C\u6570\u8D85\u8FC710\u884C\uFF0C\u662F\u5426\u7EE7\u7EED\u641C\u7D22\uFF1F",inputPlaceholder:"\u7B5B\u9009\u5F15\u64CE",inputTitle:"\u7B5B\u9009\u5F15\u64CE\uFF0C\u652F\u6301 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u5F00\u5934\uFF0C\u5206\u7EC4**\u7AD9\u70B9 \u53EF\u7B5B\u9009\u6307\u5B9A\u5206\u7EC4\uFF0C\u4F8B\u5982 \u56FE\u7247**baidu\uFF0Ctab \u4E0B\u4E00\u9879",inputKeywords:"\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",inPageTips:`\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8BA4\u7A7A\u683C\u4F5C\u4E3A\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u7D22\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF1A\u641C\u7D22\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0B\u4E00\u4E2A\uFF0C\u53F3\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0A\u4E00\u4E2A`,inPagePlaceholder:"\u8F93\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8F66\u8FDB\u884C\u9875\u5185\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u8FDE\u7EED\u6293\u53D6",editBtn:"\u7F16\u8F91\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u590D\u5236\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u5355\u8BCD\u6A21\u5F0F",copyEleBtn:"\u590D\u5236\u9009\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u5F00\u9009\u4E2D\u94FE\u63A5",maxEleBtn:"\u5C55\u5F00\u9009\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9009\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u5F00",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u590D\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6807\u7B7E\u9875\u4E2D\u641C\u7D22",locBtn:"\u5B9A\u4F4D\u4FA7\u8FB9\u680F",filterSites:"\u641C\u7D22\u5F15\u64CE",searchInPage:"\u9875\u5185\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u7D22\u8BCD",saveRuleBtn:"\u4FDD\u5B58\u5F53\u524D\u7AD9\u70B9\u7684\u641C\u7D22\u8BCD",wordContent:"\u641C\u7D22\u8BCD\u5185\u5BB9",wordHide:"\u9690\u85CF\u7236\u7EA7\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u4E3A\u5F53\u524D\u7236\u7EA7",wordStyle:"\u641C\u7D22\u8BCD\u6837\u5F0F",wordTitle:"\u641C\u7D22\u8BCD\u6CE8\u91CA",re:"\u6B63\u5219",ignoreCase:"\u4E0D\u533A\u5206\u5927\u5C0F\u5199",filterLink:"\u7B5B\u9009\u94FE\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9875\u5185\u641C\u7D22\u8BCD",addSearchEngine:"\u6DFB\u52A0\u641C\u7D22\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52A8\u7F16\u8F91\u89C4\u5219\u5E76\u6DFB\u52A0\uFF1F",expand:"\u5C55\u5F00\u5269\u4F59\u7AD9\u70B9",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8BCD\u8BED",wordRange:"\u751F\u6548\u8303\u56F4",customInputFrame:"\u81EA\u5B9A\u4E49\u641C\u7D22\u53C2\u6570",customSubmit:"\u63D0\u4EA4\u641C\u7D22",finalSearch:"\u76EE\u6807\u641C\u7D22\u5B57\u4E32",search:"\u641C\u7D22\u6B64\u9879",siteKeywords:"\u5173\u952E\u8BCD(\u591A\u4E2A\u5173\u952E\u8BCD\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u70B9 URL \u5339\u914D\u6B63\u5219",openSelect:"\u6253\u5F00\u9009\u9879",openInDefault:"\u9ED8\u8BA4",openInNewTab:"\u65B0\u6807\u7B7E\u9875\u6253\u5F00",openInCurrent:"\u5F53\u524D\u9875\u6253\u5F00",currentType:"\u5F53\u524D\u5206\u7C7B",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u8FD8\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u62DF\u8F93\u5165\u641C\u7D22",inputAction:"\u8F93\u5165",clickAction:"\u70B9\u51FB",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u590D\u5236\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5185\u8F93\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u70B9\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u53CC\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u590D\u5236\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8BF7\u8F93\u5165\u65B0\u503C",deleteConfirm:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417\uFF1F",sleepPrompt:"\u7B49\u5F85\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",startCache:"\u5F00\u59CB\u7F13\u5B58\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u7F13\u5B58\u5B8C\u6BD5\uFF0C\u52FF\u5173\u95ED\u914D\u7F6E\u9875\uFF01",cacheOver:"\u6240\u6709\u56FE\u6807\u90FD\u5DF2\u7F13\u5B58\u5B8C\u6BD5\uFF01",cspDisabled:"\u811A\u672C\u6837\u5F0F\u88AB\u5F53\u524D\u7AD9\u70B9\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u65E0\u6CD5\u663E\u793A\uFF0C\u8BF7\u5C1D\u8BD5\u5B89\u88C5 Allow CSP: Content-Security-Policy \u6269\u5C55\u83B7\u53D6\u6743\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8BF7\u8BBE\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u5F55\u5236\u64CD\u4F5C",startRecord:"\u5F00\u59CB\u5F55\u5236\u64CD\u4F5C\uFF0C\u6309\u56DE\u8F66\u952E\u7ED3\u675F\u5F55\u5236",loopAction:"\u{1F501}\u5F00\u59CB\u5FAA\u73AF",loopActionEnd:"\u23F9\uFE0F\u5FAA\u73AF\u7ED3\u675F",loopStart:'\u5F00\u59CB\u5FAA\u73AF\uFF0C\u5FAA\u73AF\u6B21\u6570\u4E3A<span title="#t#">#t#</span>',loopEnd:"\u7ED3\u675F\u5FAA\u73AF",loopTimes:"\u5FAA\u73AF\u6B21\u6570\uFF0C\u5C06\u904D\u5386\u6240\u6709\u5339\u914D\u5143\u7D20\u5E76\u987A\u5E8F\u6267\u884C",loadingCollection:"\u6B63\u5728\u52A0\u8F7D\u5408\u96C6\uFF0C\u8BF7\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F93\u5165\u6846\uFF09\u5185\u8F93\u5165\u641C\u7D22\u8BCD",emuClickTips:"\u5355\u51FB\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u94AE\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u540E\u7EE7\u7EED\u6267\u884C\uFF0C\u5F53\u67D0\u4E2A\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u65F6\u5F88\u6709\u7528",emuCopyTips:"\u590D\u5236\u6307\u5B9A\u5143\u7D20\u7684\u6587\u672C\u5230\u526A\u8D34\u677F",emuRecordTips:"\u5F55\u5236\u63A5\u4E0B\u6765\u7684\u70B9\u51FB\u548C\u8F93\u5165\u64CD\u4F5C",emuLoopTips:"\u5F00\u59CB\u5FAA\u73AF\uFF0C\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u5C06\u904D\u5386\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u5E76\u4E14\u91CD\u590D\u6307\u5B9A\u6B21\u6570",emuStopTips:"\u7ED3\u675F\u64CD\u4F5C\u5E76\u751F\u6210\u89C4\u5219"};break;case"zh":case"zh-TW":case"zh-HK":Ze={import:"\u5C0E\u5165",filter:"\u7BE9\u9078",selectAll:"\u5168\u9078",importOrNot:"\u662F\u5426\u5C0E\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u958B",split:{locale:"zh-TW",title:"\u641C\u5C0B\u91AC \xB7 \u5206\u5272\u756B\u9762\u641C\u5C0B",button:"\u5206\u5272\u756B\u9762\u641C\u5C0B",query:"\u8F38\u5165\u95DC\u9375\u5B57\u6216\u554F\u984C\uFF0C\u50B3\u9001\u81F3\u6240\u6709\u7A97\u683C",search:"\u641C\u5C0B / \u63D0\u554F",layout:"\u7248\u9762\u914D\u7F6E",columns2:"\u5DE6\u53F3\u96D9\u6B04",rows2:"\u4E0A\u4E0B\u96D9\u6B04",columns3:"\u4E09\u6B04",columns4:"\u56DB\u6B04",previous:"\u4E0A\u4E00\u9801",next:"\u4E0B\u4E00\u9801",refresh:"\u91CD\u65B0\u6574\u7406",open:"\u65B0\u5206\u9801",close:"\u95DC\u9589",retry:"\u91CD\u8A66",loading:"\u8F09\u5165\u4E2D\u2026",running:"\u50B3\u9001\u4E2D\u2026",done:"\u5DF2\u5C31\u7DD2",error:"\u8F09\u5165\u5931\u6557",empty:"\u6240\u6709\u7A97\u683C\u5DF2\u95DC\u9589\uFF0C\u8ACB\u5F9E\u641C\u5C0B\u7FA4\u7D44\u91CD\u65B0\u555F\u52D5\u5206\u5272\u756B\u9762\u641C\u5C0B\u3002",timeout:"\u9801\u9762\u5C1A\u672A\u5C31\u7DD2\uFF0C\u8ACB\u5728\u65B0\u5206\u9801\u767B\u5165\uFF0C\u6216\u6AA2\u67E5\u5F15\u64CE\u898F\u5247\u5F8C\u91CD\u8A66\u3002",skipped:"\u9019\u4E9B\u5F15\u64CE\u8ACB\u4F7F\u7528\u539F\u5165\u53E3\uFF1A",divider:"\u8ABF\u6574\u7A97\u683C\u5927\u5C0F",pages:"\u63DB\u9801",results:"\u641C\u5C0B\u7D50\u679C",ended:"\u7121\u6CD5\u958B\u555F\u5206\u5272\u756B\u9762\u5DE5\u4F5C\u968E\u6BB5\uFF0C\u8ACB\u5F9E\u641C\u5C0B\u7FA4\u7D44\u91CD\u65B0\u555F\u52D5\u3002",noEngines:"\u6B64\u7FA4\u7D44\u6C92\u6709\u53EF\u4F9B\u5206\u5272\u756B\u9762\u641C\u5C0B\u7684\u7DB2\u9801\u5F15\u64CE\u3002",httpOnly:"\u5206\u5272\u756B\u9762\u50C5\u652F\u63F4\u4E0D\u542B\u4F7F\u7528\u8005\u540D\u7A31\u8207\u5BC6\u78BC\u7684 HTTP(S) \u7DB2\u9801\u3002",invalidRequest:"\u641C\u5C0B\u8ACB\u6C42\u7121\u6548\uFF0C\u8ACB\u6AA2\u67E5\u5F15\u64CE\u898F\u5247\u3002",invalidActions:"\u81EA\u52D5\u64CD\u4F5C\u898F\u5247\u7121\u6548\uFF0C\u8ACB\u6AA2\u67E5\u5F15\u64CE\u898F\u5247\u3002",missingForm:"\u7F3A\u5C11\u8868\u55AE\u63D0\u4EA4\u7DB2\u5740\u3002",formMismatch:"\u8868\u55AE\u63D0\u4EA4\u7DB2\u5740\u8207\u7A97\u683C\u7DB2\u5740\u4E0D\u4E00\u81F4\u3002",unsupportedBrowser:"\u76EE\u524D\u7684\u700F\u89BD\u5668\u7121\u6CD5\u9694\u96E2\u5D4C\u5165\u898F\u5247\uFF0C\u9700\u8981 Chrome 145 \u6216\u66F4\u65B0\u7248\u672C\u3002",invalidTab:"\u5206\u5272\u756B\u9762\u7684\u5206\u9801\u7121\u6548\u3002",pageClosed:"\u5206\u5272\u756B\u9762\u5206\u9801\u5DF2\u95DC\u9589\u3002",pageOnly:"\u53EA\u6709\u5206\u5272\u756B\u9762\u5206\u9801\u53EF\u4EE5\u4FEE\u6539\u81EA\u5DF1\u7684\u5DE5\u4F5C\u968E\u6BB5\u3002",invalidSender:"\u8ACB\u6C42\u4E26\u975E\u4F86\u81EA\u672C\u64F4\u5145\u529F\u80FD\u3002",invalidSearch:"\u5206\u5272\u756B\u9762\u641C\u5C0B\u53C3\u6578\u7121\u6548\u3002",invalidEngine:"\u641C\u5C0B\u5F15\u64CE\u8CC7\u8A0A\u7121\u6548\u3002",invalidUpdate:"\u641C\u5C0B\u66F4\u65B0\u8ACB\u6C42\u7121\u6548\u3002",missingPane:"\u7A97\u683C\u5DF2\u95DC\u9589\u3002",unknownCommand:"\u7121\u6CD5\u8FA8\u8B58\u5206\u5272\u756B\u9762\u64CD\u4F5C\u3002",pageChanged:"\u9801\u9762\u5728\u78BA\u8A8D\u63D0\u4EA4\u524D\u5DF2\u8DF3\u8F49\uFF0C\u8ACB\u8996\u9700\u8981\u91CD\u8A66\u3002"},batchOpenConfirm:"\u78BA\u5B9A\u8981\u6279\u91CF\u6253\u958B\u55CE\uFF1F",postOver:"\u767C\u9001\u6210\u529F\uFF1A",postError:"\u767C\u9001\u5931\u6557\uFF1A",copyOver:"\u8907\u88FD\u6210\u529F",keywords:"\u8ACB\u8F38\u5165\u641C\u5C0B\u8A5E",targetUrl:"\u8ACB\u8F38\u5165\u641C\u5C0BURL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u5716\u6A19",siteTest:"\u6E2C\u8A66",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u985E",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u898F\u5247\uFF0C\u662F\u5426\u6DFB\u52A0\u70BA\u514B\u9686\u9805\uFF1F",siteAddOver:"\u7AD9\u9EDE\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u63DB\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u5C0B\uFF1F",multilineTooMuch:"\u884C\u6578\u8D85\u904E10\u884C\uFF0C\u662F\u5426\u7E7C\u7E8C\u641C\u5C0B\uFF1F",inputPlaceholder:"\u7BE9\u9078\u5F15\u64CE",inputTitle:"\u7BE9\u9078\u5F15\u64CE\uFF0C\u652F\u63F4 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u958B\u982D\uFF0C\u5206\u7D44**\u7AD9\u9EDE \u53EF\u7BE9\u9078\u6307\u5B9A\u5206\u7D44\uFF0C\u4F8B\u5982 \u5716\u7247**google\uFF0Ctab \u4E0B\u4E00\u9805",inputKeywords:"\u8F38\u5165\u641C\u5C0B\u95DC\u9375\u8A5E",inPageTips:`\u81EA\u5B9A\u7FA9\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8A8D\u7A7A\u683C\u4F5C\u70BA\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5247\u8868\u9054\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u5C0B\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u7FA9\u6A23\u5F0F\uFF1A\u641C\u5C0B\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0B\u4E00\u500B\uFF0C\u53F3\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0A\u4E00\u500B`,inPagePlaceholder:"\u8F38\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9032\u884C\u9801\u5167\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u9023\u7E8C\u6293\u53D6",editBtn:"\u7DE8\u8F2F\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u8907\u88FD\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u55AE\u8A5E\u6A21\u5F0F",copyEleBtn:"\u8907\u88FD\u9078\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u958B\u9078\u4E2D\u9023\u7D50",maxEleBtn:"\u5C55\u958B\u9078\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9078\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u958B",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u5FA9\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6A19\u7C64\u9801\u4E2D\u641C\u5C0B",locBtn:"\u5B9A\u4F4D\u5074\u908A\u6B04",filterSites:"\u641C\u5C0B\u5F15\u64CE",searchInPage:"\u9801\u5167\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u5C0B\u8A5E",saveRuleBtn:"\u4FDD\u5B58\u7576\u524D\u7AD9\u9EDE\u7684\u641C\u5C0B\u8A5E",wordContent:"\u641C\u5C0B\u8A5E\u5167\u5BB9",wordHide:"\u96B1\u85CF\u7236\u7D1A\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u70BA\u7576\u524D\u7236\u7D1A",wordStyle:"\u641C\u5C0B\u8A5E\u6A23\u5F0F",wordTitle:"\u641C\u5C0B\u8A5E\u6CE8\u91CB",re:"\u6B63\u5247",ignoreCase:"\u4E0D\u5340\u5206\u5927\u5C0F\u5BEB",filterLink:"\u7BE9\u9078\u93C8\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9801\u5167\u641C\u5C0B\u8A5E",addSearchEngine:"\u6DFB\u52A0\u641C\u5C0B\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52D5\u7DE8\u8F2F\u898F\u5247\u4E26\u6DFB\u52A0\uFF1F",expand:"\u5C55\u958B\u5269\u9918\u7AD9\u9EDE",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8A5E\u8A9E",wordRange:"\u751F\u6548\u7BC4\u570D",customInputFrame:"\u81EA\u5B9A\u7FA9\u641C\u5C0B\u53C3\u6578",customSubmit:"\u63D0\u4EA4\u641C\u5C0B",finalSearch:"\u76EE\u6A19\u641C\u5C0B\u5B57\u4E32",search:"\u641C\u5C0B\u6B64\u9805",siteKeywords:"\u95DC\u9375\u8A5E(\u591A\u500B\u95DC\u9375\u8A5E\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u9EDE URL \u5339\u914D\u6B63\u5247",openSelect:"\u6253\u958B\u9078\u9805",openInDefault:"\u9ED8\u8A8D",openInNewTab:"\u65B0\u6A19\u7C64\u9801\u6253\u958B",openInCurrent:"\u7576\u524D\u9801\u6253\u958B",currentType:"\u7576\u524D\u5206\u985E",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u9084\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u64EC\u8F38\u5165\u641C\u5C0B",inputAction:"\u8F38\u5165",clickAction:"\u9EDE\u64CA",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u8907\u88FD\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5167\u8F38\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u9EDE\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u96D9\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u8907\u88FD\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8ACB\u8F38\u5165\u65B0\u503C",deleteConfirm:"\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u9805\u55CE\uFF1F ",sleepPrompt:"\u7B49\u5F85\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",startCache:"\u958B\u59CB\u7DE9\u5B58\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5F85\u7DE9\u5B58\u5B8C\u7562\uFF0C\u52FF\u95DC\u9589\u914D\u7F6E\u9801\uFF01",cacheOver:"\u6240\u6709\u5716\u6A19\u90FD\u5DF2\u7DE9\u5B58\u5B8C\u7562\uFF01",cspDisabled:"\u8173\u672C\u6A23\u5F0F\u88AB\u7576\u524D\u7AD9\u9EDE\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u7121\u6CD5\u986F\u793A\uFF0C\u8ACB\u5617\u8A66\u5B89\u88DD Allow CSP: Content-Security-Policy \u64F4\u5C55\u7372\u53D6\u6B0A\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8ACB\u8A2D\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u9304\u88FD\u52D5\u4F5C",startRecord:"\u958B\u59CB\u9304\u88FD\u64CD\u4F5C\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9375\u7D50\u675F\u9304\u88FD",loopAction:"\u{1F501}\u958B\u59CB\u5FAA\u74B0",loopActionEnd:"\u23F9\uFE0F\u5FAA\u74B0\u7D50\u675F",loopStart:'\u958B\u59CB\u5FAA\u74B0\uFF0C\u5FAA\u74B0\u6B21\u6578\u70BA<span title="#t#">#t#</span>',loopEnd:"\u7D50\u675F\u5FAA\u74B0",loopTimes:"\u5FAA\u74B0\u6B21\u6578\uFF0C\u5C07\u904D\u6B77\u6240\u6709\u5339\u914D\u5143\u7D20\u4E26\u9806\u5E8F\u57F7\u884C",loadingCollection:"\u6B63\u5728\u8F09\u5165\u5408\u96C6\uFF0C\u8ACB\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F38\u5165\u6846\uFF09\u5167\u8F38\u5165\u641C\u5C0B\u5B57\u8A5E",emuClickTips:"\u9EDE\u64CA\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u9215\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u6642\u9593\u5F8C\u7E7C\u7E8C\u57F7\u884C\uFF0C\u7576\u67D0\u500B\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u6642\u9593\u624D\u80FD\u5B8C\u6210\u6642\u5F88\u6709\u7528",emuCopyTips:"\u8907\u88FD\u6307\u5B9A\u5143\u7D20\u7684\u6587\u5B57\u5230\u526A\u8CBC\u7C3F",emuRecordTips:"\u9304\u88FD\u63A5\u4E0B\u4F86\u7684\u9EDE\u64CA\u548C\u8F38\u5165\u64CD\u4F5C",emuLoopTips:"\u958B\u59CB\u5FAA\u74B0\uFF0C\u63A5\u4E0B\u4F86\u7684\u64CD\u4F5C\u5C07\u904D\u6B77\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u4E26\u4E14\u91CD\u8907\u6307\u5B9A\u6B21\u6578",emuStopTips:"\u7D50\u675F\u64CD\u4F5C\u4E26\u7522\u751F\u898F\u5247"};break;case"ja":case"ja-JP":Ze={import:"\u30A4\u30F3\u30DD\u30FC\u30C8",filter:"\u30D5\u30A3\u30EB\u30BF\u30FC",selectAll:"\u3059\u3079\u3066\u9078\u629E",importOrNot:"\u8A2D\u5B9A\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u304B? ",settings:"\u69CB\u6210\u30B9\u30AF\u30EA\u30D7\u30C8",batchOpen:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3",split:{locale:"ja",title:"SearchJumper \xB7 \u5206\u5272\u691C\u7D22",button:"\u5206\u5272\u691C\u7D22",query:"\u30AD\u30FC\u30EF\u30FC\u30C9\u3084\u8CEA\u554F\u3092\u3059\u3079\u3066\u306E\u30DA\u30A4\u30F3\u306B\u9001\u4FE1",search:"\u691C\u7D22 / \u8CEA\u554F",layout:"\u30EC\u30A4\u30A2\u30A6\u30C8",columns2:"\u5DE6\u53F32\u5217",rows2:"\u4E0A\u4E0B2\u6BB5",columns3:"3\u5217",columns4:"4\u5217",previous:"\u524D\u3078",next:"\u6B21\u3078",refresh:"\u518D\u8AAD\u307F\u8FBC\u307F",open:"\u5225\u30BF\u30D6",close:"\u9589\u3058\u308B",retry:"\u518D\u8A66\u884C",loading:"\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",running:"\u9001\u4FE1\u4E2D\u2026",done:"\u6E96\u5099\u5B8C\u4E86",error:"\u8AAD\u307F\u8FBC\u307F\u5931\u6557",empty:"\u3059\u3079\u3066\u306E\u30DA\u30A4\u30F3\u3092\u9589\u3058\u307E\u3057\u305F\u3002\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u30B0\u30EB\u30FC\u30D7\u304B\u3089\u5206\u5272\u691C\u7D22\u3092\u958B\u59CB\u3057\u3066\u304F\u3060\u3055\u3044\u3002",timeout:"\u30DA\u30FC\u30B8\u306E\u6E96\u5099\u304C\u3067\u304D\u3066\u3044\u307E\u305B\u3093\u3002\u5225\u306E\u30BF\u30D6\u3067\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u304B\u3001\u30A8\u30F3\u30B8\u30F3\u306E\u30EB\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",skipped:"\u6B21\u306E\u30A8\u30F3\u30B8\u30F3\u306F\u5143\u306E\u30E1\u30CB\u30E5\u30FC\u304B\u3089\u958B\u3044\u3066\u304F\u3060\u3055\u3044\uFF1A",divider:"\u30DA\u30A4\u30F3\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4",pages:"\u30DA\u30FC\u30B8\u5207\u308A\u66FF\u3048",results:"\u691C\u7D22\u7D50\u679C",ended:"\u5206\u5272\u691C\u7D22\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u3051\u307E\u305B\u3093\u3002\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u30B0\u30EB\u30FC\u30D7\u304B\u3089\u65B0\u3057\u304F\u958B\u59CB\u3057\u3066\u304F\u3060\u3055\u3044\u3002",noEngines:"\u3053\u306E\u30B0\u30EB\u30FC\u30D7\u306B\u306F\u5206\u5272\u691C\u7D22\u3067\u4F7F\u3048\u308B\u30A6\u30A7\u30D6\u30A8\u30F3\u30B8\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002",httpOnly:"\u5206\u5272\u691C\u7D22\u3067\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u540D\u3084\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u542B\u307E\u306A\u3044 HTTP(S) \u30DA\u30FC\u30B8\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002",invalidRequest:"\u691C\u7D22\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u7121\u52B9\u3067\u3059\u3002\u30A8\u30F3\u30B8\u30F3\u306E\u30EB\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalidActions:"\u81EA\u52D5\u64CD\u4F5C\u304C\u7121\u52B9\u3067\u3059\u3002\u30A8\u30F3\u30B8\u30F3\u306E\u30EB\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",missingForm:"\u30D5\u30A9\u30FC\u30E0\u306E\u9001\u4FE1\u5148\u304C\u3042\u308A\u307E\u305B\u3093\u3002",formMismatch:"\u30D5\u30A9\u30FC\u30E0\u306E\u9001\u4FE1\u5148\u304C\u30DA\u30A4\u30F3\u306E URL \u3068\u4E00\u81F4\u3057\u307E\u305B\u3093\u3002",unsupportedBrowser:"\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u306F\u57CB\u3081\u8FBC\u307F\u30EB\u30FC\u30EB\u3092\u5206\u96E2\u3067\u304D\u307E\u305B\u3093\u3002Chrome 145 \u4EE5\u964D\u304C\u5FC5\u8981\u3067\u3059\u3002",invalidTab:"\u5206\u5272\u691C\u7D22\u30BF\u30D6\u304C\u7121\u52B9\u3067\u3059\u3002",pageClosed:"\u5206\u5272\u691C\u7D22\u30DA\u30FC\u30B8\u306F\u9589\u3058\u3089\u308C\u307E\u3057\u305F\u3002",pageOnly:"\u5206\u5272\u691C\u7D22\u30DA\u30FC\u30B8\u3060\u3051\u304C\u81EA\u8EAB\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002",invalidSender:"\u3053\u306E\u62E1\u5F35\u6A5F\u80FD\u4EE5\u5916\u304B\u3089\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u3059\u3002",invalidSearch:"\u5206\u5272\u691C\u7D22\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u304C\u7121\u52B9\u3067\u3059\u3002",invalidEngine:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u306E\u60C5\u5831\u304C\u7121\u52B9\u3067\u3059\u3002",invalidUpdate:"\u691C\u7D22\u306E\u66F4\u65B0\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u7121\u52B9\u3067\u3059\u3002",missingPane:"\u30DA\u30A4\u30F3\u306F\u9589\u3058\u3089\u308C\u307E\u3057\u305F\u3002",unknownCommand:"\u4E0D\u660E\u306A\u5206\u5272\u691C\u7D22\u64CD\u4F5C\u3067\u3059\u3002",pageChanged:"\u9001\u4FE1\u3092\u78BA\u8A8D\u3059\u308B\u524D\u306B\u30DA\u30FC\u30B8\u304C\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"},batchOpenConfirm:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",postOver:"\u6B63\u5E38\u306B\u9001\u4FE1\u3055\u308C\u307E\u3057\u305F:",postError:"\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F:",copyOver:"\u30B3\u30D4\u30FC\u306B\u6210\u529F\u3057\u307E\u3057\u305F",keywords:"\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",targetUrl:"\u691C\u7D22 URL \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",siteName:"\u30B5\u30A4\u30C8\u540D",siteDesc:"\u8AAC\u660E",siteUrl:"\u30A2\u30C9\u30EC\u30B9",siteIcon:"\u30A2\u30A4\u30B3\u30F3",siteTest:"\u30C6\u30B9\u30C8",siteCancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",siteAdd:"\u8FFD\u52A0",siteType:"\u30AB\u30C6\u30B4\u30EA",siteExist:"\u540C\u3058\u30EB\u30FC\u30EB\u304C\u3059\u3067\u306B\u5B58\u5728\u3057\u307E\u3059\u3002\u30AF\u30ED\u30FC\u30F3\u3068\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",siteAddOver:"\u30B5\u30A4\u30C8\u306F\u6B63\u5E38\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F",multiline:"\u8907\u6570\u884C\u306E\u691C\u7D22\u306F\u6539\u884C\u3067\u533A\u5207\u308B\u3079\u304D\u3067\u3059\u304B? ",multilineTooMuch:"\u884C\u6570\u304C 10 \u884C\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002\u691C\u7D22\u3092\u7D9A\u3051\u307E\u3059\u304B? ",inputPlaceholder:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3",inputTitle:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3\u3001*? \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3001$ \u306F\u7D42\u308F\u308A\u3092\u8868\u3057\u3001^ \u306F\u59CB\u307E\u308A\u3092\u8868\u3057\u307E\u3059\u3001\u30B0\u30EB\u30FC\u30D7 ** \u30B5\u30A4\u30C8\u306F\u5199\u771F\u306A\u3069\u306E\u6307\u5B9A\u3055\u308C\u305F\u30B0\u30EB\u30FC\u30D7\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3067\u304D\u307E\u3059 ** Google\u3001\u6B21\u306E\u9805\u76EE\u3092\u30BF\u30D6\u3057\u307E\u3059",inputKeywords:"\u691C\u7D22\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",inPageTips:`\u30AB\u30B9\u30BF\u30E0\u533A\u5207\u308A\u6587\u5B57: $c \u3068\u533A\u5207\u308A\u6587\u5B57 ($c| \u691C\u7D22 | \u30B8\u30E3\u30F3\u30D1\u30FC\u306A\u3069)\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528
\u5143\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u5206\u96E2\u3055\u308C\u3066\u3044\u307E\u305B\u3093: $o \u3068\u6587\u5B57 (\u30D2\u30FC\u30ED\u30FC\u304C\u597D\u3093\u3060 $oopai \u306A\u3069)
\u6B63\u898F\u8868\u73FE \uFF1A/re/ \u3001$c\u3001/google/i\u3001/aPPle/ \u306A\u3069
\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $t{\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8}\u3001\u305F\u3068\u3048\u3070 linux$t{Linux \u306F Unix \u3067\u306F\u3042\u308A\u307E\u305B\u3093}
\u30AB\u30B9\u30BF\u30E0 \u30B9\u30BF\u30A4\u30EB\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $s{\u80CC\u666F;other}\u3001\u4F8B: google$s{#333333;color:red;}
\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5DE6\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u6B21\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u3001\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524D\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059`,inPagePlaceholder:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22\u3059\u308B\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3057\u3066 Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",pickerBtn:"\u8981\u7D20\u306E\u53D6\u5F97",multiPickerBtn:"\u8981\u7D20\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Ctrl \u307E\u305F\u306F Command \u3092\u62BC\u3057\u305F\u307E\u307E\u7D99\u7D9A\u7684\u306B\u53D6\u5F97\u3057\u307E\u3059",editBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u7DE8\u96C6",emptyBtn:"\u7A7A\u306E\u691C\u7D22\u30C6\u30AD\u30B9\u30C8",copyInPageBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30FC",wordModeBtn:"\u30EF\u30FC\u30C9\u30E2\u30FC\u30C9",copyEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u30B3\u30D4\u30FC",openLinkBtn:"\u9078\u629E\u3057\u305F\u30EA\u30F3\u30AF\u3092\u958B\u304F",maxEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u5C55\u958B",minEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u6298\u308A\u305F\u305F\u3080",expandAll:"\u3059\u3079\u3066\u5C55\u958B",collapseAll:"\u3059\u3079\u3066\u6298\u308A",rename:"\u540D\u524D\u3092\u5909\u66F4",reverseBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u5FA9\u5143",pinBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u4FEE\u6B63\u3001\u3059\u3079\u3066\u306E\u30BF\u30D6\u3067\u691C\u7D22",locBtn:"\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u691C\u7D22",filterSites:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3",searchInPage:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22",removeBtn:"\u691C\u7D22\u8A9E\u3092\u524A\u9664",saveRuleBtn:"\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E\u691C\u7D22\u8A9E\u3092\u4FDD\u5B58",wordContent:"\u5358\u8A9E\u306E\u5185\u5BB9\u3092\u691C\u7D22",wordHide:"\u89AA\u8981\u7D20\u3092\u975E\u8868\u793A",wordHideTips:"\u8981\u7D20\u306E\u6DF1\u3055\u30010 \u304C\u73FE\u5728\u306E\u89AA",wordStyle:"\u691C\u7D22\u30EF\u30FC\u30C9\u30B9\u30BF\u30A4\u30EB",wordTitle:"\u691C\u7D22\u5358\u8A9E\u306E\u6CE8\u91C8",re:"RegExp",ignoreCase:"\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u306F\u533A\u5225\u3055\u308C\u307E\u305B\u3093",filterLink:"\u30D5\u30A3\u30EB\u30BF\u30FC\u30EA\u30F3\u30AF",modify:"\u5909\u66F4",cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",modifyWord:"\u30DA\u30FC\u30B8\u4E0A\u306E\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3057\u307E\u3059",addSearchEngine:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u3092\u8FFD\u52A0",noValidItemAsk:"\u6709\u52B9\u306A\u8981\u7D20\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u30EB\u30FC\u30EB\u3092\u624B\u52D5\u3067\u7DE8\u96C6\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",expand:"\u6B8B\u308A\u306E\u30B5\u30A4\u30C8\u3092\u5C55\u958B\u3057\u307E\u3059",add:"\u8FFD\u52A0",addWord:"\u65B0\u3057\u3044\u5358\u8A9E\u3092\u8FFD\u52A0",wordRange:"\u6709\u52B9\u7BC4\u56F2",customInputFrame:"\u30AB\u30B9\u30BF\u30E0\u691C\u7D22\u30D1\u30E9\u30E1\u30FC\u30BF",customSubmit:"\u691C\u7D22\u3092\u9001\u4FE1",finalSearch:"\u5BFE\u8C61\u306E\u691C\u7D22\u6587\u5B57\u5217",search:"\u3053\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u691C\u7D22",siteKeywords:"\u30AD\u30FC\u30EF\u30FC\u30C9 (| \u3067\u533A\u5207\u3089\u308C\u305F\u8907\u6570\u306E\u30AD\u30FC\u30EF\u30FC\u30C9)",siteMatch:"\u901A\u5E38\u306E\u30B5\u30A4\u30C8 URL \u3068\u4E00\u81F4",openSelect:"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u958B\u304F",openInDefault:"\u30C7\u30D5\u30A9\u30EB\u30C8",openInNewTab:"\u65B0\u3057\u3044\u30BF\u30D6\u304C\u958B\u304D\u307E\u3059",openInCurrent:"\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u304C\u958B\u3044\u3066\u3044\u307E\u3059",currentType:"\u73FE\u5728\u306E\u30AB\u30C6\u30B4\u30EA",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u5FA9\u5143",addAction:"\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0",rollInfo:"\u5165\u529B\u691C\u7D22\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30C8",inputAction:"\u5165\u529B",clickAction:"\u30AF\u30EA\u30C3\u30AF",sleepAction:"\u5F85\u6A5F",copyAction:"\u{1F4C4}\u8981\u7D20\u306E\u30B3\u30D4\u30FC",submitCrawl:"\u2611\uFE0F\u64CD\u4F5C\u3092\u5B8C\u4E86",inputOutput:'\u8981\u7D20 <span title="#t1#" class="element">#t1#</span> \u5185\u306B <span title="#t2#">#t2#</span> \u3092\u5165\u529B\u3057\u307E\u3059',clickOutput:'\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',copyOutput:'\u30B3\u30D4\u30FC\u8981\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u30B9\u30EA\u30FC\u30D7<span title="#t#">#t#</span> \u30DF\u30EA\u79D2',inputNewValue:"\u65B0\u3057\u3044\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",deleteconfirm:"\u3053\u306E\u9805\u76EE\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",sleepPrompt:"\u5F85\u6A5F\u6642\u9593 (\u30DF\u30EA\u79D2)",startCache:"\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u8F9B\u62B1\u5F37\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u8A2D\u5B9A\u30DA\u30FC\u30B8\u306F\u9589\u3058\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 ",cacheOver:"\u3059\u3079\u3066\u306E\u30A2\u30A4\u30B3\u30F3\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u307E\u3057\u305F! ",cspDisabled:"\u30B9\u30AF\u30EA\u30D7\u30C8 \u30B9\u30BF\u30A4\u30EB\u306F\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E CSP \u306B\u3088\u3063\u3066\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3002\u8A31\u53EF\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Allow CSP: Content-Security-Policy \u62E1\u5F35\u6A5F\u80FD\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044",Sunday:"\u65E5\u66DC\u65E5",Monday:"\u6708\u66DC\u65E5",Tuesday:"\u706B\u66DC\u65E5",Wednesday:"\u6C34\u66DC\u65E5",Thursday:"\u6728\u66DC\u65E5",Friday:"\u91D1\u66DC\u65E5",Saturday:"\u571F\u66DC\u65E5",template:"[#t#]\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044",recordAction:"\u23FA\uFE0F\u8A18\u9332\u64CD\u4F5C",startRecord:"\u8A18\u9332\u64CD\u4F5C\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u8A18\u9332\u3092\u7D42\u4E86\u3059\u308B\u306B\u306F Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",loopAction:"\u{1F501}\u30EB\u30FC\u30D7\u306E\u958B\u59CB",loopActionEnd:"\u23F9\uFE0F\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopStart:'\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3002\u30EB\u30FC\u30D7\u6570\u306F <span title="#t#">#t#</span> \u3067\u3059',loopEnd:"\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopTimes:"\u30EB\u30FC\u30D7\u306E\u6570\u3002\u4E00\u81F4\u3059\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u304C\u8D70\u67FB\u3055\u308C\u3001\u9806\u756A\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059",loadingCollection:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",emuInputTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u5165\u529B\u30DC\u30C3\u30AF\u30B9\u306A\u3069) \u306B\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u307E\u3059",emuClickTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u30DC\u30BF\u30F3\u306A\u3069) \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059",emuWaitTips:"\u7D9A\u884C\u3059\u308B\u524D\u306B\u3057\u3070\u3089\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u64CD\u4F5C\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059",emuCopyTips:"\u6307\u5B9A\u3055\u308C\u305F\u8981\u7D20\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059",emuRecordTips:"\u6B21\u306E\u30AF\u30EA\u30C3\u30AF\u3068\u5165\u529B\u64CD\u4F5C\u3092\u8A18\u9332\u3057\u307E\u3059",emuLoopTips:"\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u6B21\u306E\u64CD\u4F5C\u306F\u898B\u3064\u304B\u3063\u305F\u3059\u3079\u3066\u306E\u8981\u7D20\u3092\u8D70\u67FB\u3057\u3001\u6307\u5B9A\u3055\u308C\u305F\u56DE\u6570\u3060\u3051\u7E70\u308A\u8FD4\u3057\u307E\u3059",emuStopTips:"\u64CD\u4F5C\u3092\u7D42\u4E86\u3057\u3066\u30EB\u30FC\u30EB\u3092\u751F\u6210"};break;case"ru":case"ru-RU":Ze={import:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",filter:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C",selectAll:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0451",importOrNot:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E?",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",batchOpen:"\u0413\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0439 \u043F\u043E\u0438\u0441\u043A",split:{locale:"ru",title:"SearchJumper \xB7 \u041F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445",button:"\u041F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445",query:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441 \u0438\u043B\u0438 \u0432\u043E\u043F\u0440\u043E\u0441 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u0430\u043D\u0435\u043B\u0435\u0439",search:"\u041D\u0430\u0439\u0442\u0438 / \u0421\u043F\u0440\u043E\u0441\u0438\u0442\u044C",layout:"\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435",columns2:"2 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",rows2:"2 \u0441\u0442\u0440\u043E\u043A\u0438",columns3:"3 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",columns4:"4 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",previous:"\u041D\u0430\u0437\u0430\u0434",next:"\u0412\u043F\u0435\u0440\u0451\u0434",refresh:"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",open:"\u0412\u043A\u043B\u0430\u0434\u043A\u0430",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",retry:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",running:"\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026",done:"\u0413\u043E\u0442\u043E\u0432\u043E",error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",empty:"\u0412\u0441\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044B. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u043E\u0432.",timeout:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0433\u043E\u0442\u043E\u0432\u0430. \u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0438\u043B\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0430 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443.",skipped:"\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u044D\u0442\u0438 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u043E\u0431\u044B\u0447\u043D\u043E\u0435 \u043C\u0435\u043D\u044E: ",divider:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u043F\u0430\u043D\u0435\u043B\u0435\u0439",pages:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B",results:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430",ended:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0435\u0430\u043D\u0441. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u043E\u0432.",noEngines:"\u0412 \u044D\u0442\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u043D\u0435\u0442 \u0432\u0435\u0431-\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u043E\u0432 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445.",httpOnly:"\u0412 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E HTTP(S)-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0431\u0435\u0437 \u0438\u043C\u0435\u043D\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438 \u043F\u0430\u0440\u043E\u043B\u044F \u0432 \u0430\u0434\u0440\u0435\u0441\u0435.",invalidRequest:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0430.",invalidActions:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0430.",missingForm:"\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u0430\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B.",formMismatch:"\u0410\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u043C \u043F\u0430\u043D\u0435\u043B\u0438.",unsupportedBrowser:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044E \u043F\u0440\u0430\u0432\u0438\u043B \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F. \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F Chrome 145 \u0438\u043B\u0438 \u043D\u043E\u0432\u0435\u0435.",invalidTab:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445.",pageClosed:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u0443\u0436\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u0430.",pageOnly:"\u0422\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0441\u0432\u043E\u0439 \u0441\u0435\u0430\u043D\u0441.",invalidSender:"\u0417\u0430\u043F\u0440\u043E\u0441 \u043F\u043E\u0441\u0442\u0443\u043F\u0438\u043B \u043D\u0435 \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F.",invalidSearch:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445.",invalidEngine:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0430.",invalidUpdate:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0438\u0441\u043A\u0430.",missingPane:"\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u0436\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u0430.",unknownCommand:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445.",pageChanged:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C \u0434\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438. \u041F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443."},batchOpenConfirm:"\u0418\u0441\u043A\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u0441\u0435\u0445 \u0434\u0432\u0438\u0436\u043A\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E",keywords:"Input keywords",targetUrl:"Input URL",siteName:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",siteDesc:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",siteUrl:"URL",siteIcon:"\u0418\u043A\u043E\u043D\u043A\u0430",siteTest:"\u0422\u0435\u0441\u0442",siteCancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",siteAdd:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",siteType:"\u0413\u0440\u0443\u043F\u043F\u0430",siteExist:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A \u043A\u043B\u043E\u043D?",siteAddOver:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D",multiline:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A?",multilineTooMuch:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u043E\u043A \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 10. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A?",inputPlaceholder:"\u0424\u0438\u043B\u044C\u0442\u0440\u044B",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"\u0414\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter",pickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C",multiPickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u043B\u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Ctrl \u0438\u043B\u0438 Command",editBtn:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u0441\u043A\u0430",emptyBtn:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430",copyInPageBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u043A\u0430",wordModeBtn:"\u0420\u0435\u0436\u0438\u043C \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u043B\u043E\u0432\u0430\u043C. \u0412 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0446\u0435\u043B\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043A\u0430\u0442\u044C\u0441\u044F \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",copyEleBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",openLinkBtn:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438",maxEleBtn:"\u0420\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",minEleBtn:"\u0421\u0436\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",expandAll:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",collapseAll:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u043E\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0432\u043E \u0432\u0441\u0435\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u0445",locBtn:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438",filterSites:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0432\u0438\u0436\u043A\u0438",searchInPage:"\u0418\u0441\u043A\u0430\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",removeBtn:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430",saveRuleBtn:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430",wordContent:"\u0421\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430",wordHide:"Hide parent element",wordHideTips:"\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, 0 - \u044D\u0442\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",wordStyle:"\u0421\u0442\u0438\u043B\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043B\u043E\u0432\u0430",wordTitle:"\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F \u043A \u0438\u0441\u043A\u043E\u043C\u043E\u043C\u0443 \u0441\u043B\u043E\u0432\u0443",re:"RegExp",ignoreCase:"\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440",filterLink:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",modify:"\u0413\u043E\u0442\u043E\u0432\u043E",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",modifyWord:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",addSearchEngine:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0432\u0438\u0436\u043E\u043A",noValidItemAsk:"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0425\u043E\u0442\u0438\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0430\u0439\u0442?",expand:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044B",add:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",addWord:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",wordRange:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u0430",customInputFrame:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0438\u0441\u043A\u0430",customSubmit:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C",finalSearch:"\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",search:"\u0418\u0441\u043A\u0430\u0442\u044C \u044D\u0442\u043E",siteKeywords:"\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (\u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C |)",siteMatch:"Regexp \u0434\u043B\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F URL \u0441\u0430\u0439\u0442\u0430",openSelect:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432",openInDefault:"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",openInNewTab:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",openInCurrent:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",currentType:"Current",maxAddSiteBtn:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",minAddSiteBtn:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",addAction:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",crawlInfo:"\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",inputAction:"\u0412\u0432\u043E\u0434",clickAction:"\u041A\u043B\u0438\u043A \u043C\u044B\u0448\u0438",sleepAction:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",copyAction:"\u{1F4C4}\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442",submitCrawl:"\u2611\uFE0F\u0417\u0430\u0432\u0435\u0448\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",inputOutput:'\u0412\u0432\u043E\u0434 <span title="#t2#">#t2#</span> \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t1#" class="element">#t1#</span>',clickOutput:'\u041A\u043B\u0438\u043A \u043F\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 <span title="#t#" class="element">#t#</span>',dblclickOutput:'\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A <span title="#t#" class="element">#t#</span>',rclickOutput:'\u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u041F\u041A\u041C <span title="#t#" class="element">#t#</span>',copyOutput:'\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t#" class="element">#t#</span>',sleepOutput:'\u0416\u0434\u0430\u0442\u044C <span title="#t#">#t#</span> \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434',inputNewValue:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",deleteConfirm:"\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442? ",sleepPrompt:"\u0412\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F (\u0432 \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445)",startCache:"\u041D\u0430\u0447\u0430\u043B\u043E\u0441\u044C \u043A\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443!",cacheOver:"\u0412\u0441\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u044B!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "#t#"',recordAction:"\u23FA\uFE0F\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",startRecord:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F. \u041F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter, \u0447\u0442\u043E\u0431\u044B \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043E\u043A\u043D\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.",loopAction:"\u{1F501}\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B",loopActionEnd:"\u23F9\uFE0F\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopStart:'\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B <span title="#t#">#t#</span> \u0440\u0430\u0437',loopEnd:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopTimes:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u043A\u043B\u043E\u0432, \u0432\u0441\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u044B \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 \u043F\u043E\u043B\u044F \u0432\u0432\u043E\u0434\u0430).",emuClickTips:"\u041A\u043B\u0438\u043A\u043D\u0443\u0442\u044C \u043F\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435)",emuWaitTips:"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C. \u041F\u043E\u043B\u0435\u0437\u043D\u043E, \u043A\u043E\u0433\u0434\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F",emuCopyTips:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",emuRecordTips:"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0432\u0432\u043E\u0434\u0430",emuLoopTips:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0446\u0438\u043A\u043B, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C\u0441\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0437",emuStopTips:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"};break;default:Ze={import:"Import",filter:"Filter",selectAll:"SelectAll",importOrNot:"Do you want to import this config?",settings:"Settings",batchOpen:"Batch open",split:{locale:"en",title:"SearchJumper \xB7 Split search",button:"Split search",query:"Search or ask all engines",search:"Search / Ask",layout:"Layout",columns2:"2 columns",rows2:"2 rows",columns3:"3 columns",columns4:"4 columns",previous:"Previous",next:"Next",refresh:"Refresh",open:"Open tab",close:"Close",retry:"Retry",loading:"Loading\u2026",running:"Sending\u2026",done:"Ready",error:"Unable to load",empty:"All panes are closed. Start another split search from an engine group.",timeout:"The page is not ready. Sign in in a new tab, or check the engine rule and retry.",skipped:"These engines use their original entry: ",divider:"Resize panes",pages:"Pages",results:"Search results",ended:"Unable to open this split session. Start another split search from an engine group.",noEngines:"No web engines are available for split search in this group.",httpOnly:"Only HTTP(S) web pages without a username or password in the URL can be embedded.",invalidRequest:"Invalid search request. Check the engine rule.",invalidActions:"Invalid automation actions. Check the engine rule.",missingForm:"Missing form destination.",formMismatch:"Form destination does not match the pane.",unsupportedBrowser:"This browser cannot isolate embedding rules. Chrome 145 or newer is required.",invalidTab:"Invalid split tab.",pageClosed:"The split page is no longer open.",pageOnly:"Only the split page can change its session.",invalidSender:"The request is not from this extension.",invalidSearch:"Invalid split search parameters.",invalidEngine:"Invalid engine information.",invalidUpdate:"Invalid search update.",missingPane:"The pane has already been closed.",unknownCommand:"Unknown split command.",pageChanged:"The page changed before submission was confirmed. Retry if needed."},batchOpenConfirm:"Batch open urls?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"Copied successfully",keywords:"Input keywords",targetUrl:"Input URL",siteName:"Site Name",siteDesc:"Description",siteUrl:"Site Url",siteIcon:"Site Icon",siteTest:"Test",siteCancel:"Cancel",siteAdd:"Add",siteType:"Category",siteExist:"Site is already exist, add it as clone?",siteAddOver:"Site added successfully",multiline:"Search as multilines?",multilineTooMuch:"The number of lines exceeds 10, do you want to continue searching?",inputPlaceholder:"Filter engines",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"Enter search keywords",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"Input text, press Enter to find in the page",pickerBtn:"Pick a element",multiPickerBtn:"Pick a element, pick multi elements with Ctrl or Command",editBtn:"Edit search text",emptyBtn:"Empty search text",copyInPageBtn:"Copy search text",wordModeBtn:"Word mode",copyEleBtn:"Copy selected elements",openLinkBtn:"Open selected links",maxEleBtn:"Expand selected elements",minEleBtn:"Collapse selected elements",expandAll:"Expand All",collapseAll:"Collapse All",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"Pin search text to search in all tabs",locBtn:"Sidebar to locate",filterSites:"Search engines",searchInPage:"Find in page",removeBtn:"Remove search term",saveRuleBtn:"Save the search term of the current site",wordContent:"Search word content",wordHide:"Hide parent element",wordHideTips:"Element depth, 0 means the current",wordStyle:"Search word style",wordTitle:"Search word annotation",re:"RegExp",ignoreCase:"Ignore case",filterLink:"Filter link",modify:"Modify",cancel:"Cancel",modifyWord:"Modify search word",addSearchEngine:"Add search engine",noValidItemAsk:"No valid element found, do you want to manually edit the rule and add it?",expand:"Expand other sites",add:"Add",addWord:"Add new word",wordRange:"Effective range",customInputFrame:"Custom search parameters",customSubmit:"Submit",finalSearch:"Target search string",search:"Search this",siteKeywords:"Keywords(split by |)",siteMatch:"Regexp to match site URL",openSelect:"Open option",openInDefault:"Default",openInNewTab:"Open a new tab",openInCurrent:"Open in current",currentType:"Current",maxAddSiteBtn:"Maximize",minAddSiteBtn:"Restore",addAction:"Add Actions",crawlInfo:"Analog input search",inputAction:"Input",clickAction:"Click",sleepAction:"Wait",copyAction:"\u{1F4C4}Copy element",submitCrawl:"\u2611\uFE0FComplete operation",inputOutput:'Input <span title="#t2#">#t2#</span> in the element <span title="#t1#" class="element">#t1#</span>',clickOutput:'Click on element <span title="#t#" class="element">#t#</span>',dblclickOutput:'Double click <span title="#t#" class="element">#t#</span>',rclickOutput:'Right click <span title="#t#" class="element">#t#</span>',copyOutput:'Copy element <span title="#t#" class="element">#t#</span>',sleepOutput:'Sleep for <span title="#t#">#t#</span> milliseconds',inputNewValue:"Please enter a new value",deleteConfirm:"Are you sure you want to delete this item? ",sleepPrompt:"Wait time (milliseconds)",startCache:"Start cache icons of engines, do not close this page!",cacheOver:"All icons cached!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'Please set the value of "#t#"',recordAction:"\u23FA\uFE0FRecord operation",startRecord:"Start to record operation, press Enter to end",loopAction:"\u{1F501}Start loop",loopActionEnd:"\u23F9\uFE0FStop loop",loopStart:'Start loop <span title="#t#">#t#</span> times',loopEnd:"Stop loop",loopTimes:"Number of loops, all matching elements will be traversed and executed sequentially",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"Enter search terms in specified page elements (such as input boxes)",emuClickTips:"Click on a specified page element (such as a button)",emuWaitTips:"Wait for a while before continuing, useful when an operation takes a while to complete",emuCopyTips:"Copy the text of the specified element to the clipboard",emuRecordTips:"Record the next clicks and input operations",emuLoopTips:"Start the loop, the next operation will traverse all found elements and repeat the specified number of times",emuStopTips:"End the operation and generate rules"};break}}function J(l,e){return Ze[l]?e?Ze[l].replace(/#t#/g,e).replace(/#t1#/g,e[0]).replace(/#t2#/g,e[1]):Ze[l]:l}const Zt="ontouchstart"in document.documentElement;var Mr=!Ue&&!Ye?.ok;let Ke=null;function pt(){Ke&&Ke.throwIfAborted()}var fe=(l,e)=>{Mr&&console.log(`%c\u3010SearchJumper v.${Pt.script.version}\u3011 ${e||"debug"}`,"color: orange;font-size: large;font-weight: bold;",l)},Xe=!1,qe=!1,ki;function er(l="",e){const t=e||document,i=t.createDocumentFragment();return l==null||l===""||$r(String(l),i,t),i}let tr=!0,Wt=!0,Dt,Jt;const Nr="searchjumper_default",ir="http://www.w3.org/2000/svg",Ar={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Br={script:!0,style:!0,textarea:!0,title:!0,xmp:!0,plaintext:!0,noscript:!0},rr={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0"};function sr(l){return l.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g,function(e,t){if(t[0]==="#"){const r=t[1]==="x"||t[1]==="X",n=parseInt(t.slice(r?2:1),r?16:10);if(!isNaN(n))try{return String.fromCodePoint(n)}catch{}return"&"+t+";"}const i=t.toLowerCase();return i in rr?rr[i]:"&"+t+";"})}function $r(l,e,t){const i=[e],r=/<!--[\s\S]*?-->|<!doctype[^>]*>|<\/?[a-zA-Z][^>]*>|[^<]+/gi;let n;for(;n=r.exec(l);){const a=n[0];if(a[0]!=="<"){const b=sr(a);b&&i[i.length-1].appendChild(t.createTextNode(b));continue}if(a.indexOf("<!--")===0||/^<!doctype/i.test(a))continue;if(a[1]==="/"){const b=a.slice(2,-1).trim().toLowerCase();for(let j=i.length-1;j>0;j--){const v=i[j];if(v.nodeType===1&&v.nodeName.toLowerCase()===b){i.length=j;break}}continue}const s=/^<\s*([^\s/>]+)/.exec(a);if(!s)continue;const o=s[1],p=o.toLowerCase(),h=i[i.length-1],u=h.nodeType===1&&h.namespaceURI===ir||p==="svg"?t.createElementNS(ir,o):t.createElement(p),f=a.replace(/^<\s*[^\s/>]+/,"").replace(/\/?>$/,"");if(f){const b=/([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;let j;for(;j=b.exec(f);){const v=j[1],C=sr(j[2]||j[3]||j[4]||"");u.setAttribute(v,C)}}if(h.appendChild(u),!a.endsWith("/>")&&!Ar[p]&&(i.push(u),Br[p])){const b=new RegExp("<\\/\\s*"+p+"\\s*>","ig");b.lastIndex=r.lastIndex;const j=b.exec(l);if(j){const v=l.slice(r.lastIndex,j.index);v&&u.appendChild(t.createTextNode(v)),r.lastIndex=j.index+j[0].length,i.pop()}}}}function Wr(){if(!Wt)return null;if(Jt)return Dt;const l=Le&&Le.trustedTypes&&Le.trustedTypes.createPolicy;if(typeof l!="function")return Wt=!1,null;try{Dt=l(Nr,{createHTML:(e,t)=>e,createScriptURL:e=>e,createScript:e=>e})}catch{}return Jt=Dt&&Dt.createHTML,Jt||(Wt=!1),Dt}function Dr(l,e){if(!tr)return!1;try{return l.innerHTML=e,!0}catch{return tr=!1,!1}}function Jr(l,e){if(!Wt||(Wr(),!Jt))return!1;try{return l.innerHTML=Jt(e),!0}catch{return Wt=!1,!1}}function ie(l,e,t){if(!l)return;const i=e==null?"":String(e);if(Dr(l,i)||Jr(l,i))return;const r=t||l.ownerDocument||document,n=er(i,r);for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(n)}function Rr(l,e,t){if(!l||!l.parentNode)return;const i=t||l.ownerDocument||document,r=er(e,i);l.parentNode.insertBefore(r,l),l.parentNode.removeChild(l)}var De,gt,Ce,Ge,ye,Be,Pt,Qe;if(typeof GM_xmlhttpRequest<"u")De=GM_xmlhttpRequest,Qe=!0;else if(typeof GM<"u"&&typeof GM.xmlHttpRequest<"u")De=GM.xmlHttpRequest,Qe=!0;else{let l;De=e=>{fetch(e.url,{method:e.method||"GET",body:e.data,headers:e.headers,credentials:e.anonymous?"omit":"same-origin",referrerPolicy:e.referrerPolicy,redirect:e.redirect}).then(t=>(l=t,e.responseType==="blob"?t.blob():t.text())).then(t=>{let i=document.implementation.createHTMLDocument("");ie(i.documentElement,t,i),e.onload&&e.onload({status:l.status,response:t,responseText:typeof t=="string"?t:void 0,responseXML:i})}).catch(t=>e.onerror&&e.onerror(t))}}Qe?Qe=async(l,e)=>l?(ki=l,new Promise((t,i)=>{let r=e&&/^post$/i.test(e.method),n={method:e&&e.method||"GET",url:l,headers:e&&e.headers||{referer:l,origin:l,"Content-Type":r?"application/x-www-form-urlencoded":"","X-Requested-With":r?"XMLHttpRequest":""},onload:function(a){if(ki!=l)return;let s=a.response;(a.status>=400||!s)&&(s=""),t({text:()=>new Promise(h=>{h(s)}),json:()=>new Promise(h=>{try{h(JSON.parse(s))}catch{h(null)}}),finalUrl:a.finalUrl||l})},onerror:function(a){fe(a),i(a)},ontimeout:function(a){fe(a),i(a)}};e&&e.body&&(n.data=e.body),e&&e.responseType==="stream"&&(n.responseType="stream",delete n.onload,n.onloadstart=a=>{if(!a||!a.response||!a.response.getReader)return;let s=[],o,p;const h=a.response.getReader();let d=()=>{let m="";try{return p&&(m=p.trim(),/^data:/.test(m)?m="["+m.replace(/^data:\s+\[DONE\]\s*/m,"").trim().replace(/\n+/g,`
`).split(`
`).map(u=>u.replace(/^data:/,"")).join(",")+"]":/^({.*} *\n)* *{.*}$/.test(m)?m=m.split(`
`).pop():/^\[[\s\S]+[^\]]$/.test(m)&&(m=m+"]")),JSON.parse(m)}catch{return null}};h.read().then(function m({done:u,value:f}){if(ki==l){if(u){t({text:p,json:d,finalUrl:a.finalUrl||l});return}s=e.streamMode==="standalone"?Array.from(f):s.concat(Array.from(f));try{p=new TextDecoder("utf-8").decode(new Uint8Array(s)),e.onstream({text:p,json:d,finalUrl:a.finalUrl||l})}catch(w){console.log(w)}return h.read().then(m)}})}),De(n)})):null:Qe=fetch,Lt?gt=(l,e)=>{}:typeof GM_registerMenuCommand<"u"?gt=GM_registerMenuCommand:typeof GM<"u"&&typeof GM.registerMenuCommand<"u"?gt=GM.registerMenuCommand:gt=(l,e)=>{},typeof GM_openInTab<"u"?ye=GM_openInTab:typeof GM<"u"&&typeof GM.openInTab<"u"?ye=GM.openInTab:ye=(l,e)=>{window.open(l)},typeof GM_notification<"u"?Ce=l=>GM_notification({text:l,onclick:e=>ye(ct,{active:!0})}):typeof GM<"u"&&typeof GM.notification<"u"?Ce=l=>GM.notification({text:l,onclick:e=>ye(ct,{active:!0})}):Ce=l=>{},typeof GM_setClipboard<"u"?Ge=GM_setClipboard:typeof GM<"u"&&typeof GM.setClipboard<"u"?Ge=GM.setClipboard:Ge=(l,e)=>{try{Er.writeText(l).then(()=>{console.log("Text copied to clipboard")}).catch(t=>{document.execCommand("copy"),console.error("Failed to copy text: ",t)})}catch{document.execCommand("copy")}},Be=l=>{if(l=l.replace(/\n\s*/g,""),typeof GM_addStyle<"u")return GM_addStyle(l);{let e=document.createElement("style");return ie(e,l),document.head.appendChild(e),e}},typeof GM_info<"u"?Pt=GM_info:typeof GM<"u"&&typeof GM.info<"u"?Pt=GM.info:Pt={script:{name:"SearchJumper",version:0}},Le.searchJumperAddons||(Le.searchJumperAddons=[]);const Xt=document.referrer;let ue=location.href.slice(0,500);var V={supportGM:typeof GM_getValue=="function"&&typeof GM_getValue("a","b")<"u",supportGMPromise:typeof GM<"u"&&typeof GM.getValue=="function"&&typeof GM.getValue("a","b")<"u",supportCrossSave:function(){return this.supportGM||this.supportGMPromise},listItemCache:[],mxAppStorage:(function(){try{return window.external.mxGetRuntime().storage}catch{}})(),operaUJSStorage:(function(){try{return window.opera.scriptStorage}catch{}})(),setItem:function(l,e,t=!1){if(this.supportGMPromise)return e===""&&typeof GM.deleteValue=="function"?GM.deleteValue(l):GM.setValue(l,e);this.supportGM?(GM_setValue(l,e),e===""&&typeof GM_deleteValue<"u"&&GM_deleteValue(l)):this.operaUJSStorage?this.operaUJSStorage.setItem(l,e):this.mxAppStorage?this.mxAppStorage.setConfig(l,e):window.localStorage&&window.localStorage.setItem(l,e)},getItem:async function(l,e){var t;return this.supportGMPromise?t=await GM.getValue(l):this.supportGM?t=GM_getValue(l):this.operaUJSStorage?t=this.operaUJSStorage.getItem(l):this.mxAppStorage?t=this.mxAppStorage.getConfig(l):window.localStorage&&(t=window.localStorage.getItem(l)),e&&e(t),t},getListItem:async function(l,e){var t=this.listItemCache[l];if(typeof t>"u"&&(t=await this.getItem(l),this.listItemCache[l]=t||null),!t)return null;for(var i=0;i<t.length;i++){let r=t[i];if(r.k==e)return r.v}return null},setListItem:async function(l,e,t){var i=this.listItemCache[l];typeof i>"u"&&(i=await this.getItem(l)),i||(i=[]),i=i.filter(r=>r&&r.k!=e),t&&(i.unshift({k:e,v:t}),i.length>50&&i.pop()),this.setItem(l,i),this.listItemCache[l]=i}};function Qt(l,e,t){const i=r=>{const n=new URL(r);if(n.username||n.password)throw new Error("Invalid configuration URL");return n.protocol+"//"+n.host+n.pathname.replace(/\/index\.html$/,"/").replace(/\/$/,"")};try{const r=i(l);return["https://search.hoothin.com/config/","https://hoothin.github.io/SearchJumper/","http://localhost:3000/",e,t].filter(Boolean).some(n=>{try{return i(n)===r}catch{return!1}})}catch{return!1}}function zr(l,e,t){const i=v=>JSON.parse(JSON.stringify(v)),r=v=>{const C=i(v);if(C.webdavConfig){const{host:g,username:k,path:A,password:$}=C.webdavConfig;C.webdavConfig={host:g,username:k,path:A,hasPassword:typeof $=="string"}}return C},n=v=>{if(!v||!Array.isArray(v.sitesConfig)||!v.prefConfig||typeof v.prefConfig!="object"||Array.isArray(v.prefConfig))throw new Error("Invalid configuration")},a=(v,C)=>{if(v===C)return!0;if(!v||!C||typeof v!="object"||typeof C!="object"||Array.isArray(v)!==Array.isArray(C))return!1;const g=Object.keys(v);return g.length===Object.keys(C).length&&g.every(k=>Object.hasOwn(C,k)&&a(v[k],C[k]))},s=v=>{try{return JSON.parse(v)}catch{throw new Error("Invalid server response")}},o=v=>{const C=new URL(v);if(!/^https?:$/.test(C.protocol)||C.username||C.password||C.search||C.hash)throw new Error("Invalid WebDAV server");return C.href.replace(/\/+$/,"")},p=(v,C,g=!1)=>{if(!v||typeof v.host!="string"||typeof v.username!="string")throw new Error("Invalid WebDAV account");const k=o(v.host),A="/"+(v.path||"").replace(/^\/+|\/+$/g,"");if(A.split("/").some(z=>{const W=decodeURIComponent(z);return W==="."||W===".."||/[\\?#/]/.test(W)}))throw new Error("Invalid WebDAV directory");const $=typeof v.password=="string"?v.password:C&&o(C.host)===k&&C.username===v.username?C.password:void 0;if(!g&&typeof $!="string")throw new Error("Enter the WebDAV password");return{host:k,username:v.username,password:$,path:A}},h=v=>"/SearchJumper"+(v.path||"/").replace(/\/+$/,""),d=async(v,C,g,k,A=!1)=>{const $=btoa(Array.from(new TextEncoder().encode(v.username+":"+v.password),T=>String.fromCharCode(T)).join("")),z=o(v.host)+g.split("/").map(T=>encodeURIComponent(decodeURIComponent(T))).join("/"),W=await t(z,{method:C,body:k,headers:{Authorization:"Basic "+$,"Content-Type":C==="PUT"?"application/json; charset=utf-8":"text/xml; charset=utf-8",...C==="PROPFIND"?{Depth:"0"}:{}},redirect:"follow",credentials:"omit",referrerPolicy:"no-referrer"});if(A&&W.status===404)return null;if(W.status<200||W.status>=300)throw new Error("WebDAV request failed ("+W.status+")");return W.text},m=(v,C,g,k,A)=>d(v,C,h(v)+"/"+g,k,A),u=async v=>{let C="";for(const g of h(v).split("/").filter(Boolean))C+="/"+g,await d(v,"PROPFIND",C+"/",void 0,!0)===null&&await d(v,"MKCOL",C+"/")},f=async(v,C)=>{await u(v),await m(v,"PUT","sitesConfig.json",JSON.stringify(C.sitesConfig)),await m(v,"PUT","inPageRule.json",JSON.stringify(C.prefConfig.inPageRule||{})),await m(v,"PUT","lastModified",String(C.lastModified||0))},w=async(v,C,g)=>{if(g){const A=C.lastModified?C:{...C,lastModified:Date.now()};return await f(v,A),A}await u(v);const k=Number(await m(v,"GET","lastModified",void 0,!0));if(!Number.isFinite(k)||k<0)throw new Error("Invalid synchronized timestamp");if(k>(C.lastModified||0)){const A=await m(v,"GET","sitesConfig.json",void 0,!0),$=await m(v,"GET","inPageRule.json",void 0,!0),z=i(C);if(A!==null&&(z.sitesConfig=s(A)),$!==null){const W=s($);if(!W||typeof W!="object"||Array.isArray(W))throw new Error("Invalid synchronized rules");z.prefConfig.inPageRule=W}return z.lastModified=k,n(z),z}if(!k||C.lastModified>k){const A=C.lastModified?C:{...C,lastModified:Date.now()};return await f(v,A),A}return C},b=async(v,C={})=>{const g=await l();if(n(g),v==="get")return r(g);if(v==="save"||v==="import"){const k=i(C.searchData);n(k);let A;if(v==="import")A=k,k.webdavConfig&&(A.webdavConfig=p(k.webdavConfig,g.webdavConfig,!0));else{A=i(g);const $=C.base||{};for(const z of Object.keys(k))if(!["webdavConfig","__proto__","constructor","prototype"].includes(z)){if(z==="prefConfig"){for(const W of new Set([...Object.keys($.prefConfig||{}),...Object.keys(k.prefConfig)]))if(!(["__proto__","constructor","prototype"].includes(W)||a(k.prefConfig[W],$.prefConfig?.[W]))){if($.prefConfig&&!a(g.prefConfig[W],$.prefConfig[W])&&!a(g.prefConfig[W],k.prefConfig[W]))throw new Error("This setting changed in another page; reload and retry");Object.hasOwn(k.prefConfig,W)?A.prefConfig[W]=k.prefConfig[W]:delete A.prefConfig[W]}}else if(!a(k[z],$[z])){if(Object.hasOwn($,z)&&z!=="lastModified"&&!a(g[z],$[z])&&!a(g[z],k[z]))throw new Error("This configuration changed in another page; reload and retry");A[z]=k[z]}}}return await e(A),r(A)}if(v==="disconnect"){const k={...g,webdavConfig:null};return await e(k),r(k)}if(v==="configure"||v==="createAccount"){let k=C,A="";if(v==="createAccount"){const E=await t("https://search.hoothin.com/api.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"action=getUser",credentials:"omit",referrerPolicy:"no-referrer"});if(E.status!==200)throw new Error("Account request failed ("+E.status+")");const I=s(E.text);if(I.result!==1)throw new Error(String(I.message||"Account request failed"));k={host:"https://webdav.hoothin.com",username:I.username,password:I.password,path:"/"},A=String(I.message||""),k.password&&(A=A.split(k.password).join("[redacted]"))}const $=p(k,g.webdavConfig),z=await w($,g),W=await l();if(!a(W.sitesConfig,g.sitesConfig)||!a(W.prefConfig.inPageRule,g.prefConfig.inPageRule)||!a(W.webdavConfig,g.webdavConfig))throw new Error("Configuration changed during synchronization; please retry");const T={...W,sitesConfig:z.sitesConfig,prefConfig:{...W.prefConfig,inPageRule:z.prefConfig.inPageRule},lastModified:z.lastModified,webdavConfig:$};return await e(T),{searchData:r(T),message:A}}if(v==="sync"){if(!g.webdavConfig)return r(g);const k=p(g.webdavConfig,g.webdavConfig),A=await w(k,g,!!C.uploadOnly);if(A!==g){const $=await l();if(!a($.sitesConfig,g.sitesConfig)||!a($.prefConfig.inPageRule,g.prefConfig.inPageRule)||!a($.webdavConfig,g.webdavConfig))throw new Error("Configuration changed during synchronization; please retry");await e({...$,sitesConfig:A.sitesConfig,prefConfig:{...$.prefConfig,inPageRule:A.prefConfig.inPageRule},lastModified:A.lastModified})}return r(await l())}if(v==="shareGet"||v==="shareSet"){const k=g.webdavConfig&&p(g.webdavConfig,g.webdavConfig);if(!k||k.host!=="https://webdav.hoothin.com"||!["sharePass","shareTitle"].includes(C.name))throw new Error("Invalid sharing operation");if(v==="shareSet"&&typeof C.value!="string")throw new Error("Invalid sharing value");return await m(k,v==="shareGet"?"GET":"PUT",C.name,C.value,v==="shareGet")||""}if(v==="syncFile"){if(!g.webdavConfig||!["GET","PUT"].includes(C.method)||!["lastModified","sitesConfig.json","inPageRule.json"].includes(C.path)||C.method==="PUT"&&typeof C.body!="string")throw new Error("Invalid synchronization request");return await m(p(g.webdavConfig,g.webdavConfig),C.method,C.path,C.body,C.method==="GET")||""}throw new Error("Unknown configuration operation")};let j=Promise.resolve();return(v,C)=>{C&&(C=i(C));const g=j.then(()=>b(v,C));return j=g.catch(()=>{}),g}}const Or=zr(async()=>await V.getItem("searchData")||c,l=>V.setItem("searchData",l),(l,e)=>new Promise((t,i)=>{De({url:l,method:e.method,data:e.body,headers:e.headers,anonymous:!0,redirect:e.redirect,referrerPolicy:"no-referrer",timeout:3e4,onload:r=>t({status:r.status,text:r.responseText}),onerror:()=>i(new Error("Network request failed")),ontimeout:()=>i(new Error("Network request timed out"))})}));async function ei(l,e){return Or(l==="saveData"?"save":l,e)}async function ti(l,e){if(ke)return;let t=await V.getItem("searchData");t&&(c=t);let i=!0;if(c.webdavConfig&&!e)try{await ei("sync"),c=await V.getItem("searchData"),Ht=c.lastModified}catch(r){i=!1,Ce("Synchronization failed: "+r.message)}try{const r=JSON.parse(JSON.stringify(c)),n=l&&await l();await ei("saveData",{searchData:c,base:r}),c=await V.getItem("searchData"),typeof n=="function"&&await n(),c.webdavConfig&&i&&await ei("sync",{uploadOnly:!0})}catch(r){Ce("Could not save or synchronize configuration: "+r.message)}}const Ti=Object.getPrototypeOf(async function(){}).constructor;typeof String.prototype.replaceAll!="function"&&(String.prototype.replaceAll=function(l,e){var t=this;return t.split(l).join(e)}),typeof String.prototype.endsWith!="function"&&(String.prototype.endsWith=function(l,e){return(e===void 0||e>this.length)&&(e=this.length),this.substring(e-l.length,e)===l}),typeof String.prototype.startsWith!="function"&&(String.prototype.startsWith=function(l,e){return this.slice(e||0,l.length)===l});function X(l){return l.body||l.querySelector("body")}function xt(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientX:0:l.clientX}function Ct(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientY:0:l.clientY}function Hr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageX:0:l.pageX}function Fr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageY:0:l.pageY}function Ur(l,e,t){t=t||document,e=e||t;var i=[];try{for(var r=t.evaluate(l,e,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),n=0;n<r.snapshotLength;n++){var a=r.snapshotItem(n);a.nodeType===1&&i.push(a)}}catch{fe(`Invalid xpath: ${l}`)}return i}function Kr(l,e,t){t=t||document,e=e||t;try{let i=(n,a,s)=>{let o=a.evaluate(n,s,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);return o.singleNodeValue&&o.singleNodeValue.nodeType===1&&o.singleNodeValue},r=l.split(" =>> ");if(r.length===2){let n=i(r[0],t,e);if(n&&n.shadowRoot)return i(r[1],n.shadowRoot,n.shadowRoot)}else return i(l,t,e)}catch{return fe(`Invalid xpath: ${l}`),!1}}function nr(l){return l?/^\(*(descendant::|\.\/|\/\/|id\()/.test(l):!1}function Ii(l,e,t){e||(e=document);try{if(!nr(l))return e.querySelectorAll(l)}catch(i){fe(i,"Error selector")}return Ur(l,t,e)}function Mt(l,e){e||(e=document);try{if(!nr(l)){let t=l.split(" =>> ");if(t.length===2){let i=e.querySelector(t[0]);return i&&i.shadowRoot&&i.shadowRoot.querySelector(t[1])}else return e.querySelector(l)}}catch(t){fe(t)}return Kr(l,e,e)}function qr(l,e){for(var t=l.offsetTop,i=l.offsetParent;i;)t+=i.offsetTop,i=i.offsetParent;if(e){for(i=e;i;)t+=i.offsetTop,i=i.offsetParent;try{let r=e.contentWindow.parent;for(e=r.frameElement;e;){for(i=e;i;)t+=i.offsetTop,i=i.offsetParent;r=r.parent,e=r.frameElement}}catch{}}return t}function Is(l){for(var e=l.offsetLeft,t=l.offsetParent;t;)e+=t.offsetLeft,t=t.offsetParent;if(!document.isSameNode(l.ownerDocument)){let i=document.getElementsByTagName("iframe");for(let r=0;r<i.length;r++){let n=i[r],a;try{a=n.contentDocument||n.contentWindow.document}catch{break}if(a.isSameNode(l.ownerDocument)){for(t=n;t;)e+=t.offsetLeft,t=t.offsetParent;break}}}return e}function ji(l){const e=l.activeElement;return e?e.shadowRoot?ji(e.shadowRoot):e:null}async function et(l,e=l.dataset.src){e&&(l.referrerPolicy="no-referrer",e&&e!=="fail"&&(l.src=e),delete l.dataset.src)}function Gr(l,e){let t=new Image;const i=()=>{t.onload=null,t.onerror=null,t=null};t.onload=function(){typeof e=="function"&&e(),i()},t.onerror=function(){i()},t.src=l}function Rt(l){if(l&&(/INPUT|TEXTAREA/i.test(l.nodeName)&&l.getAttribute("aria-readonly")!="true"||l.contentEditable=="true"))return!0;for(;l&&l.nodeName;){if(l.contentEditable=="true")return!0;if(l.nodeName.toUpperCase()=="BODY")break;l=l.parentNode}return!1}function ht(l){let e=ji(l);return Rt(e)}async function Vr(l){for(;document.hidden;)await Je(500);var e=100,t="\uF0C8",i=function(){var r,n;e-=1,r=document.createElement("canvas"),r.width=20,r.height=20,n=r.getContext("2d",{willReadFrequently:!0}),n.fillStyle="rgba(0,0,0,1.0)",n.fillRect(0,0,20,20),n.font="16pt FontAwesome",n.textAlign="center",n.fillStyle="rgba(255,255,255,1.0)",n.fillText(t,10,18);var a=n.getImageData(2,10,1,1).data;a[0]==0&&a[1]==0&&a[2]==0?(n.font='16pt "Font Awesome 6 Free"',n.fillText(t,10,18),a=n.getImageData(2,10,1,1).data,a[0]==0&&a[1]==0&&a[2]==0?e>0&&setTimeout(i,150):typeof l=="function"&&l()):typeof l=="function"&&l()};setTimeout(i,100)}var yt,P,Se=[],ce=!1,Ei=!1,Pe,wt,ut,Ve,zt,tt,ge,it,Ot,Me,Ne,_e=[],ii=[],St,$e,rt,ri,Li,si,ar,Pi,or=!1,Ht=0,st;const Mi=`<svg class="search-jumper-logoBtnSvg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><title>${Pt.script.name}</title><path d="M.736 510.464c0-281.942 228.335-510.5 510-510.5 135.26 0 264.981 53.784 360.625 149.522 95.643 95.737 149.375 225.585 149.375 360.978 0 281.94-228.335 510.5-510 510.5-281.665 0-510-228.56-510-510.5zm510-510.5v1021m-510-510.5h1020" fill="#fefefe"/><path d="M237.44 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM699.904 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM423.296 759.296c-64 0-115.712-52.224-115.712-115.712 0-26.624 9.216-52.224 25.6-72.704 9.216-11.776 26.112-13.312 37.888-4.096s13.312 26.112 4.096 37.888c-9.216 11.264-13.824 24.576-13.824 38.912 0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-4.096-.512-8.192-1.024-11.776-2.56-14.848 6.656-28.672 21.504-31.744 14.848-2.56 28.672 6.656 31.744 21.504 1.536 7.168 2.048 14.336 2.048 22.016-.512 63.488-52.224 115.712-116.224 115.712z" fill="#333"/><path d="M602.08 760.296c-64 0-115.712-52.224-115.712-115.712 0-14.848 12.288-27.136 27.136-27.136s27.136 12.288 27.136 27.136c0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-15.36-5.632-30.208-15.872-41.472-9.728-11.264-9.216-28.16 2.048-37.888 11.264-9.728 28.16-9.216 37.888 2.048 19.456 21.504 29.696 48.64 29.696 77.824 0 62.976-52.224 115.2-116.224 115.2z" fill="#333"/><ellipse ry="58" rx="125" cy="506.284" cx="201.183" fill="#faf"/><ellipse ry="58" rx="125" cy="506.284" cx="823.183" fill="#faf"/></svg>`,_r='<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 52.966 52.966"><path d="M51.704 51.273L36.844 35.82c3.79-3.8 6.14-9.04 6.14-14.82 0-11.58-9.42-21-21-21s-21 9.42-21 21 9.42 21 21 21c5.082 0 9.747-1.817 13.383-4.832l14.895 15.49c.196.206.458.308.72.308.25 0 .5-.093.694-.28.398-.382.41-1.015.028-1.413zM21.984 40c-10.478 0-19-8.523-19-19s8.522-19 19-19 19 8.523 19 19-8.525 19-19 19z"></path></svg>',kt="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==",Yr="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGQ9Ik00MjkuMDEzMzMzIDY0MEEzMiAzMiAwIDAgMSAzODQgNTk0Ljk4NjY2N2wzNy43Ni0zNy43Ni0yMi44MjY2NjctMjIuNjEzMzM0LTEzNS42OCAxMzUuNjggOTAuNDUzMzM0IDkwLjQ1MzMzNCAxMzUuNjgtMTM1LjY4LTIyLjYxMzMzNC0yMi42MTMzMzR6TTUzNC42MTMzMzMgMzk4LjkzMzMzM2wyMi42MTMzMzQgMjIuNjEzMzM0TDU5NC45ODY2NjcgMzg0QTMyIDMyIDAgMCAxIDY0MCA0MjkuMDEzMzMzbC0zNy43NiAzNy43NiAyMi42MTMzMzMgMjIuNjEzMzM0IDEzNS42OC0xMzUuNjgtOTAuNDUzMzMzLTkwLjQ1MzMzNHoiIGZpbGw9IiNhMGEwYTAiLz48cGF0aCBkPSJNNTEyIDIxLjMzMzMzM2E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAxIDAgNDkwLjY2NjY2NyA0OTAuNjY2NjY3QTQ5MC42NjY2NjcgNDkwLjY2NjY2NyAwIDAgMCA1MTIgMjEuMzMzMzMzeiBtMzE2LjggMzU0Ljk4NjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMEw1NTcuMjI2NjY3IDUxMiA1MTIgNTU3LjIyNjY2N2w0NS4yMjY2NjcgNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAgNDUuMjI2NjY3bC0xODEuMTIgMTgxLjEyYTMyIDMyIDAgMCAxLTQ1LjIyNjY2NyAwbC0xMzUuNjgtMTM1LjY4YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBMNDY2Ljc3MzMzMyA1MTIgNTEyIDQ2Ni43NzMzMzNsLTQ1LjIyNjY2Ny00NS4yMjY2NjZhMzIgMzIgMCAwIDEgMC00NS4yMjY2NjdsMTgxLjEyLTE4MS4xMmEzMiAzMiAwIDAgMSA0NS4yMjY2NjcgMGwxMzUuNjggMTM1LjY4YTMyIDMyIDAgMCAxIDAgNDUuMjI2NjY3eiIgZmlsbD0iI2EwYTBhMCIvPjwvc3ZnPg==",lr='<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>',Ni="%s[lurest]?\\b",Tt=new RegExp(Ni);var D,Ai,Nt,nt,cr=!1;function Zr(l,e,t){if(!l&&!e&&!t){let C=new Date,g=C.getFullYear(),k=C.getMonth(),A=C.getDate();l=C.getFullYear(),e=C.getMonth()+1,t=C.getDate()}let i=2e3,r=2,n=5,a=[51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],s="\u6B63\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u51AC\u81D8",o="\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u521D\u5EFF",p="\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678",h="\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5",d="\u9F20\u725B\u864E\u5154\u9F8D\u86C7\u99AC\u7F8A\u7334\u96DE\u72D7\u8C6C";function m(C,g,k){g-=1;let A=(Date.UTC(C,g,k)-Date.UTC(i,r-1,n))/(1440*60*1e3)+1,$,z,W,T;for(let E=0;E<a.length;E++)if(A-=w(a[E]),A<=0){$=i+E,T=a[E],A+=w(T);break}if(!T)return null;for(let E=0;E<b(T).length;E++)if(A-=b(T)[E],A<=0){u(T)&&u(T)<=E?u(T)<E?z=E:u(T)===E?z="\u95F0"+E:z=E+1:z=E+1,A+=b(T)[E];break}return W=A,u(T)&&typeof z=="string"&&z.indexOf("\u95F0")>-1?z=`\u95F0${s[/\d/.exec(z)-1]}`:z=s[z-1],$=j($)+v($),W<11?W=`${o[10]}${o[W-1]}`:W>10&&W<20?W=`${o[9]}${o[W-11]}`:W===20?W=`${o[1]}${o[9]}`:W>20&&W<30?W=`${o[11]}${o[W-21]}`:W===30&&(W=`${o[2]}${o[9]}`),{lunarYear:$,lunarMonth:z,lunarDay:W}}function u(C){return C&15?C&15:!1}function f(C){return u(C)?C&983040?30:29:0}function w(C){let g=0;for(let k=32768;k>8;k>>=1){let A=C&k?30:29;g+=A}return u(C)&&(g+=f(C)),g}function b(C){let g=[];for(let k=32768;k>8;k>>=1)g.push(C&k?30:29);return u(C)&&g.splice(u(C),0,f(C)),g}function j(C){let g=(C-3)%10;return g===0&&(g=10),p[g-1]}function v(C){let g=(C-3)%12;return g===0&&(g=12),g--,h[g]+` (${d[g]}) `}return m(l,e,t)}class Xr{constructor(){let e=this;this.scale=c.prefConfig.customSize/100,this.tilesZoom=c.prefConfig.tilesZoom/100,this.tipsZoom=c.prefConfig.tipsZoom/100,Nt=`
                 #search-jumper {
                     font-size: 16px;
                 }
                 #search-jumper-root {
                     font-size: initial;
                     font-family: Arial, "Microsoft YaHei", "Noto Sans SC", sans-serif;
                 }
                 #search-jumper.search-jumper-showall {
                     overflow-y: hidden;
                     pointer-events: all;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     flex-direction: unset;
                     max-width: unset;
                     max-height: unset;
                     text-align: center;
                     top: 0;
                     bottom: unset;
                     height: 100%;
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-searchBar {
                     display: none;
                 }
                 #search-jumper>.search-jumper-searchBar.grabbing>.search-jumper-type {
                     display: none!important;
                 }
                 #search-jumper.search-jumper-showall #filterSites {
                     background-color: #f5f6f8f0;
                     border: none;
                     height: 40px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     box-shadow: 0 2px 12px #20263114, inset 0 0 0 1px #282a2d1a;
                     outline: none;
                     box-sizing: border-box;
                     cursor: default;
                     user-select: none;
                     -webkit-user-select: none;
                     -moz-user-select: none;
                     -khtml-user-select: none;
                     -ms-user-select: none;
                     position: fixed;
                     width: 80%;
                     left: calc(10% - 10px);
                     top: 1%;
                     border-radius: 20px;
                     pointer-events: all;
                 }
                 #search-jumper.search-jumper-showall #filterSites>input,
                 #search-jumper.search-jumper-showall #filterSites>textarea {
                     background-color: white;
                     color: #282a2d;
                     border-radius: 16px;
                     padding: 0 12px;
                     border: none;
                     outline: none;
                     box-sizing: border-box;
                     font-size: 17px;
                     cursor: text;
                 }
                 #search-jumper.search-jumper-showall #filterSites:focus-within {
                     outline: 2px solid #d73340;
                     outline-offset: 2px;
                 }
                 #search-jumper :is(button, a):focus-visible {
                     outline: 2px solid #d73340;
                     outline-offset: -2px;
                 }
                 #search-jumper.search-jumper-showall #filterSites>span {
                     display: none;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist {
                     visibility: visible!important;
                     opacity: 1;
                     pointer-events: all;
                     text-align: left;
                     position: static;
                     display: block!important;
                     height: fit-content;
                     max-height: calc(100vh - 110px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist:hover {
                     opacity: 1;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon {
                     opacity: 1;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon>p {
                     pointer-events: all;
                     cursor: pointer;
                     margin: 0 auto;
                 }
                 #search-jumper.search-jumper-showall.searching #search-jumper-alllist .sitelist>.sitelistCon a {
                     display: flex!important;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist:hover {
                     z-index: 1;
                 }
                 #search-jumper.search-jumper-showall.search-jumper-searchBarCon {
                     -ms-overflow-style: unset;
                     scrollbar-width: unset;
                     overflow: hidden;
                 }
                 #search-jumper-alllist {
                     display: none;
                     top: 101px;
                     position: absolute;
                     width: 100%;
                     overflow-x: auto;
                     overflow-y: hidden;
                     height: calc(100% - 101px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper-alllist>.search-jumper-btn {
                     position: fixed;
                     top: 1%;
                     right: 10%;
                     filter: drop-shadow(1px 1px 3px #00000060);
                     cursor: pointer;
                     pointer-events: all;
                     z-index: 1;
                     width: 32px;
                     height: 32px;
                 }
                 #search-jumper-alllist>.search-jumper-btn>svg {
                     cursor: pointer;
                     width: 32px;
                     height: 32px;
                 }
                 .search-jumper-showallBg {
                     display: none;
                     position: fixed;
                     left: 0;
                     top: 0;
                     width: 100%;
                     height: 100%;
                     z-index: -1;
                     transform: translateZ(0);
                     ${c.prefConfig.noAni?"background-color: rgba(0, 0, 0, 0.6);":"background-color: rgba(0, 0, 0, 0.6);transition:background-color .6s ease;"}
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist:hover~.search-jumper-showallBg {
                     background-color: rgba(0, 0, 0, 0.8);
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode>.sitelistBox:hover .sitelist {
                     opacity: 0.5;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode>.sitelistBox .sitelist:hover {
                     opacity: 1;
                     backdrop-filter: blur(5px);
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-showallBg {
                     display: block;
                 }
                 #search-jumper>.groupTab {
                     position: fixed;
                     background: #ffffffee !important;
                     left: 0;
                     top: 0;
                     overflow: hidden;
                     height: 100%;
                     overflow: auto;
                     scrollbar-width: none;
                     padding: 20px 0;
                     box-sizing: border-box;
                     display: none;
                     z-index: 1;
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist.new-mode+.groupTab {
                     display: block;
                 }
                 #search-jumper.search-jumper-showall>.groupTab::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span {
                     display: block;
                     width: ${42*this.scale}px;
                     transition: all 0.25s ease;
                     cursor: pointer;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span>span.search-jumper-word {
                     opacity: 0.8;
                 }
                 #search-jumper.search-jumper-showall>.groupTab:hover>span {
                     width: ${42*this.scale+150}px;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span:hover{
                     background: #f5f7fa !important;
                 }
                 #search-jumper.search-jumper-showall>.groupTab:hover>span::after {
                     content: attr(data-type);
                     color: #6b6e74;
                     position: absolute;
                     margin-top: -${21*this.scale+10}px;
                     left: ${42*this.scale+5}px;
                     white-space: nowrap;
                     font-weight: bold;
                 }
                 .search-jumper-historylistcon {
                     display: flex;
                     position: fixed;
                     width: 100%;
                     max-width: 100%;
                     overflow: auto;
                     justify-content: center;
                     left: 0;
                     top: 60px;
                     background: #ffffffdd;
                     border-bottom: 1px solid #ddd;
                     pointer-events: all;
                     min-height: 40px;
                     -ms-overflow-style: unset;
                     scrollbar-width: unset;
                 }
                 .search-jumper-historylistcon::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-historylist {
                     display: flex;
                     max-width: 100%;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist {
                     display: block;
                 }
                 #search-jumper-alllist>.sitelistBox {
                     display: inline-flex;
                     justify-content: center;
                     width: fit-content;
                     min-height: 100%;
                     position: initial;
                     transition: all 0.3s ease;
                 }
                 #search-jumper-alllist>.clockInAll {
                     position: fixed;
                     right: 24px;
                     bottom: 18px;
                     display: flex;
                     flex-direction: column;
                     gap: 4px;
                     max-width: calc(100vw - 48px);
                     color: #f5f6f8;
                     text-shadow: 0 1px 4px #00000080;
                     font-family: Arial, "Microsoft YaHei", "Noto Sans SC", sans-serif;
                     font-variant-numeric: tabular-nums;
                     text-align: right;
                     pointer-events: none;
                 }
                 #search-jumper-alllist .timeInAll {
                     font-size: clamp(24px, 2.2vw, 32px);
                     line-height: 1.1;
                     font-weight: 500;
                     letter-spacing: .02em;
                     white-space: nowrap;
                 }
                 #search-jumper-alllist .dayInAll {
                     font-size: 13px;
                     line-height: 1.5;
                     font-weight: normal;
                     opacity: .75;
                 }
                 #search-jumper-alllist .dayInAll small {
                     display: block;
                     font-size: 12px;
                 }
                 #search-jumper-alllist>.modeSwitch {
                     position: fixed;
                     top: 5px;
                     right: 5px;
                     width: 45px;
                     height: 45px;
                     border-radius: 50%;
                     box-shadow: 0px 0px 5px 0px #7a7a7a;
                     cursor: pointer;
                     transition: transform 0.25s ease;
                 }
                 #search-jumper-alllist>.modeSwitch>* {
                     pointer-events: none;
                 }
                 #search-jumper-alllist>.modeSwitch:hover {
                     transform: scale(1.1);
                 }
                 #search-jumper-alllist.new-mode {
                     overflow-x: hidden;
                     overflow-y: auto;
                     scrollbar-width: none;
                 }
                 #search-jumper-alllist.new-mode>.sitelistBox {
                     flex-wrap: wrap;
                     flex-direction: column;
                     align-items: center;
                     justify-content: flex-start;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                     width: 78%;
                     max-height: unset;
                     height: auto !important;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon {
                     display: flex;
                     flex-wrap: wrap;
                     padding: 0;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon>p {
                     text-align: left;
                     font-size: large;
                     padding: 15px 30px;
                     width: 100%;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                     width: 240px;
                     height: 100px;
                     display: block!important;
                     padding: 10px 8%;
                     box-sizing: border-box;
                 }
                 #search-jumper.search-jumper-showall.searching #search-jumper-alllist.new-mode .sitelist>.sitelistCon a {
                     display: block!important;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div {
                     padding: 0 10px;
                     border-radius: 5px;
                     transition: transform 0.25s ease, box-shadow 0.25s ease;
                     box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px #9e9e9e1a, 0 1px 2px -1px #9e9e9e1a;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:hover {
                     transform: translateY(-6px);
                     -webkit-transform: translateY(-6px);
                     -moz-transform: translateY(-6px);
                     box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px #0000001a, 0 1px 2px -1px #0000001a;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                     content: attr(title);
                     margin-left: 41px;
                     color: #93959a;
                     font-size: 12px;
                     height: 3em;
                     line-height: 1.5em;
                     overflow: hidden;
                     display: -webkit-box;
                     -webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;
                     margin-left: 62px;
                     margin-top: 35px;
                     width: 185px;
                     position: absolute;
                     pointer-events: none;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>div>img {
                     width: 38px;
                     height: 38px;
                     transform: scale(1);
                     border-radius: 10%;
                     transition: transform 0.25s ease;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>div {
                     content: '';
                     position: absolute;
                     width: 38px;
                     height: 38px;
                     float: left;
                     margin-left: -20px;
                     margin-top: -5px;
                     background: #ffffff30;
                     border-radius: 50%;
                     padding: 10px;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>p {
                     -webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;
                     display: block;
                     font-weight: bold;
                     height: 21px;
                     line-height: 21px;
                     margin-bottom: 8px;
                     margin-top: 0px;
                     margin-left: 45px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     transition: color 0.25s ease;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a:hover>p {
                     color: #f1404b;
                 }
                 #search-jumper .sitelist a+p {
                     display: none;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p {
                     position: absolute;
                     margin-top: -28px;
                     color: white;
                     width: 250px;
                     max-width: calc(100% - 20px);
                     display: flex;
                     justify-content: space-evenly;
                     overflow: hidden;
                     opacity: 0;
                     transition: .3s;
                     border-top: 1px solid rgba(136,136,136,.2);
                     padding-top: 3px;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p>span {
                     flex-shrink: 0;
                     font-size: 12px;
                     padding: 2px 6px;
                     background: rgb(160 160 160 / 10%);
                     color: #888;
                     border-radius: 5px;
                     transition: .3s;
                     cursor: pointer;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p>span:hover {
                     background: rgb(160 160 160 / 20%);
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a:hover>div>img {
                     transform: scale(1.1);
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelistCon>div:hover>p {
                     opacity: 1;
                 }
                 #search-jumper #search-jumper-alllist.showbg>.inputGroup,
                 #search-jumper #search-jumper-alllist.showbg>.search-jumper-btn,
                 #search-jumper #search-jumper-alllist.showbg>.search-jumper-historylistcon,
                 #search-jumper #search-jumper-alllist.showbg+.groupTab,
                 #search-jumper #search-jumper-alllist.showbg>.sitelistBox {
                     transition: .3s;
                     opacity: 0;
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist.showbg:hover~.search-jumper-showallBg {
                     background: unset;
                 }
                 .search-jumper-searchBarCon {
                     all: unset;
                     position: fixed;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                     z-index: 2147483646;
                     pointer-events: none;
                     text-align: center;
                     overflow: scroll;
                     display: block;
                     -ms-overflow-style: none;
                     scrollbar-width: none;
                     box-sizing: border-box;
                     user-select: none;
                 }
                 .search-jumper-searchBar {
                     z-index: 2147483646;
                     overflow-wrap: break-word;
                     background: #505050cc;
                     border-radius: ${this.scale*21}px!important;
                     border: 1px solid #ffffff40;
                     box-shadow: 0 4px 16px #00000026;
                     display: inline-flex;
                     pointer-events: all;
                     margin-top: -${this.scale*25}px;
                     vertical-align: top;
                     ${c.prefConfig.noAni?"":"opacity: 0.8;"}
                     ${c.prefConfig.noAni?"":"transition:margin-top 1s ease, margin-left 1s, right 1s, opacity 1s, transform 1s;"}
                     user-select: none;
                     text-align: center;
                     position: relative;
                     box-sizing: border-box;
                 }
                 .hideAll>.search-jumper-searchBar {
                     margin-top: -${this.scale*40}px;
                 }
                 .search-jumper-searchBarCon:not(.search-jumper-showall)::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-searchBarCon.search-jumper-scroll {
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 .search-jumper-searchBarCon.search-jumper-scroll>.search-jumper-searchBar {
                     pointer-events: all;
                 }
                 .search-jumper-scroll.search-jumper-bottom {
                     overflow-y: hidden;
                 }
                 .search-jumper-scroll.search-jumper-right>.search-jumper-searchBar {
                     position: absolute !important;
                     top: 0;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-scroll.search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-searchBar:hover {
                     margin-top: 0;
                     opacity: 1;
                     ${c.prefConfig.noAni?"":"transition:margin-top 0.1s ease, margin-left 0.1s, right 0.1s, opacity 0.1s, transform 0.1s;"}
                 }
                 .search-jumper-searchBar.initShow,
                 .resizePage>.search-jumper-searchBar {
                     margin-top: 0;
                     ${c.prefConfig.noAni?"":"transition:margin-top 0.25s ease, margin-left 0.25s, right 0.25s, opacity 0.25s, transform 0.25s;"}
                 }
                 .funcKeyCall>.search-jumper-searchBar.initShow {
                     ${c.prefConfig.noAni?"":"transition:opacity 0.15s ease-out, transform 0.25s ease;"}
                 }
                 #search-jumper.funcKeyCall {
                     overflow: visible;
                     position: absolute;
                     max-width: 100%;
                     width: 100%;
                     top: 0;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     position: absolute!important;
                     background: none;
                     border: none;
                     box-shadow: none;
                     max-width: unset!important;
                     margin: unset;
                     ${c.prefConfig.minPopup&&!c.prefConfig.noAni?"transition: transform 0.25s ease;":""}
                     ${c.prefConfig.minPopup?"transform: scale(0.7);":""}
                 }
                 .funcKeyCall>.search-jumper-searchBar:hover {
                     ${c.prefConfig.minPopup?"transform: scale(1);":""}
                 }
                 .in-input>.search-jumper-searchBar,
                 .funcKeyCall>.search-jumper-searchBar {
                     opacity: 1;
                     display: inline-flex!important;
                 }
                 .in-input.in-find {
                     pointer-events: none;
                 }
                 .in-input.in-find>.searchJumperNavBar,
                 .in-input.in-find>.search-jumper-input {
                     pointer-events: all;
                 }
                 .in-input.in-find>.search-jumper-searchBar, .in-input>.rectSelecting.search-jumper-searchBar {
                     opacity: 0!important;
                     pointer-events: none;
                     transition: none;
                 }
                 .in-input.in-find>.search-jumper-searchBar:hover {
                     opacity: 1!important;
                 }
                 .in-input.in-find>.search-jumper-input {
                     opacity: 0.6;
                     transition:opacity 0.25s ease;
                 }
                 .in-input.in-find>.search-jumper-input:hover,
                 .in-input.in-find>.search-jumper-input.active {
                     opacity: 1;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     flex-direction: column;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type {
                     height: ${c.prefConfig.minPopup?24*this.tilesZoom+"px":"auto"}!important;
                     max-width: ${c.prefConfig.minPopup?24*this.tilesZoom:40*(c.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                     width: auto!important;
                     width: max-content!important;
                     max-height: ${108*this.tilesZoom+10}px;
                     flex-wrap: wrap!important;
                     flex-direction: row;
                     padding: 5px;
                     box-shadow: #000000 0px 0px 10px;
                     overflow: auto;
                     scrollbar-width: none;
                     transition: none;
                     background: #d0d0d0d0;
                     box-sizing: content-box;
                 }
                 ${c.prefConfig.hideTileType?`
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:before {
                     content: attr(data-type);
                     position: absolute;
                     background: #ffffffd0;
                     color: black;
                     margin-top: -${22*this.tilesZoom}px;
                     line-height: 1.2;
                     font-size: ${13*this.tilesZoom}px;
                     font-weight: bold;
                     border-radius: ${20*this.tilesZoom}px;
                     padding: 3px 6px;
                     box-shadow: #000000 0px 0px 10px;
                     opacity: 0;
                     pointer-events: none;
                     transition: all 0.5s ease;
                     left: 50%;
                     transform: translate(-50%, 0);
                     z-index: 1;
                     max-width: 100%;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>span.search-jumper-btn:first-child {
                     display: none;
                 }
                 #search-jumper.funcKeyCall .search-jumper-type.search-jumper-open.not-expand>a:nth-of-type(${(c.prefConfig.expandTypeLength||12)+1}) {
                     display: grid!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover:before {
                     opacity: 1;
                 }
                 `:""}
                 #search-jumper>.search-jumper-searchBar>.search-jumper-type.search-jumper-open {
                     overflow: visible;
                 }
                 #search-jumper>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     width: fit-content!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type.search-jumper-open:not(.not-expand) {
                     overflow: auto;
                 }
                 #search-jumper.search-jumper-left>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover,
                 #search-jumper.search-jumper-right>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     width: 100%!important;
                     height: fit-content!important;
                 }
                 #search-jumper.search-jumper-bottom>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     align-items: flex-end;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type.search-jumper-open {
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     overflow: auto;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist {
                     border-radius: 10px;
                     box-shadow: 0px 0px 10px 0px #7a7a7a;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon {
                     margin: 0;
                     padding: 5px;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon>p {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon a>div>img {
                     width: 20px;
                     height: 20px;
                 }
                 ${c.prefConfig.minPopup&&!c.prefConfig.hideTileType?`
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn,
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.searchJumperExpand {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn,
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover>.searchJumperExpand {
                     display: grid;
                 }
                 input#search-jumper-tileInput {
                     opacity: 0;
                 }
                 `:""}
                 ${c.prefConfig.minPopup==2?`
                 .funcKeyCall:not(.targetInput)>.search-jumper-searchBar {
                     transform: scale(1);
                 }
                 #search-jumper.funcKeyCall:not(.targetInput)>.search-jumper-searchBar>.search-jumper-type {
                     height: auto!important;
                     width: auto!important;
                     width: max-content!important;
                     max-width: ${40*(c.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     display: grid;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     display: none;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn {
                     display: grid;
                 }
                 `:""}
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover {
                     height: auto!important;
                     width: auto!important;
                     width: max-content!important;
                     max-width: ${40*(c.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-left,
                 .search-jumper-left .search-jumper-type,
                 .search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-right,
                 .search-jumper-right .search-jumper-type,
                 .search-jumper-right>.search-jumper-searchBar {
                     flex-direction: column;
                     max-width: ${42*this.scale}px;
                     max-height: unset;
                 }
                 .search-jumper-left .search-jumper-type,
                 .search-jumper-right .search-jumper-type {
                     max-width: ${40*this.scale}px;
                 }
                 .search-jumper-left,
                 .search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-right,
                 .search-jumper-right>.search-jumper-searchBar {
                     max-width: 100%;
                 }
                 .search-jumper-searchBar.grabbing {
                     max-width: ${42*this.scale}px;
                 }
                 .search-jumper-right .search-jumper-type {
                     align-items: flex-end;
                 }
                 .search-jumper-left {
                     height: 100%;
                     text-align: initial;
                 }
                 .search-jumper-left:not(.search-jumper-showall) {
                     width: initial;
                     width: -webkit-fill-available;
                 }
                 .search-jumper-right {
                     left: unset;
                     right: 0;
                     height: 100%;
                 }
                 .searchJumperExpand {
                     opacity: 0.8;
                 }
                 .search-jumper-type.not-expand:not(.search-jumper-open)>.searchJumperExpand {
                     display: none;
                 }
                 .searchJumperExpand:hover {
                     opacity: 1;
                 }
                 .searchJumperExpand>svg {
                     transform: rotate(-90deg);
                     border-radius: 20px;
                     filter: drop-shadow(0px 0px 2px black);
                     width: unset;
                     height: unset;
                     color: black;
                     fill: black;
                 }
                 .search-jumper-type.search-jumper-open>span.search-jumper-word,
                 #search-jumper.funcKeyCall .search-jumper-type>span.search-jumper-word {
                     filter: drop-shadow(0px 0px 2px black);
                 }
                 .search-jumper-left .searchJumperExpand>svg,
                 .search-jumper-right .searchJumperExpand>svg {
                     transform: unset;
                 }
                 .search-jumper-bottom {
                     top: unset;
                     bottom: 0;
                     height: ${this.scale*42*2}px;
                     max-height: ${this.scale*43*2}px;
                     overflow-y: hidden;
                 }
                 .search-jumper-left>.search-jumper-searchBar {
                     width: fit-content;
                     margin-top: 0;
                     margin-left: -${this.scale*20}px;
                 }
                 .hideAll.search-jumper-left>.search-jumper-searchBar {
                     margin-left: -${this.scale*40}px;
                 }
                 .search-jumper-right>.search-jumper-searchBar {
                     margin-top: 0;
                     right: -${this.scale*20}px;
                     position: fixed;
                 }
                 .hideAll.search-jumper-right>.search-jumper-searchBar {
                     right: -${this.scale*40}px;
                 }
                 .search-jumper-left>.search-jumper-searchBar:hover,
                 .search-jumper-left>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-left.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-left>.search-jumper-searchBar {
                     margin-top: unset;
                     margin-left: 0;
                     opacity: 1;
                 }
                 .search-jumper-right>.search-jumper-searchBar:hover,
                 .search-jumper-right>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-right>.search-jumper-searchBar,
                 .search-jumper-right.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-right>.search-jumper-searchBar {
                     margin-top: unset;
                     right: 0;
                     opacity: 1;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar {
                     position: relative;
                     margin-top: 0px;
                     top: ${this.scale*42}px;
                 }
                 .hideAll.search-jumper-bottom>.search-jumper-searchBar {
                     opacity: 0;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                     opacity: 1;
                 }
                 .search-jumper-btn {
                     position: relative;
                     display: grid;
                     --scale: 1;
                     padding: ${1*this.scale}px!important;
                     margin: ${3*this.scale}px!important;
                     cursor: pointer;
                     box-sizing: content-box;
                     ${c.prefConfig.noAni?"":"transition:margin-left 0.25s ease, width 0.25s, height 0.25s, transform 0.25s, background 0.25s;"}
                     width: calc(${32*this.scale}px * var(--scale));
                     height: calc(${32*this.scale}px * var(--scale));
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     text-decoration:none;
                     min-width: ${32*this.scale}px;
                     min-height: ${32*this.scale}px;
                     text-align: center;
                     background-image: initial;
                     filter: drop-shadow(1px 1px 3px #00000030);
                 }
                 .search-jumper-btn[data-disable] {
                     opacity: 0.5;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn {
                     padding: ${1*this.tilesZoom}px!important;
                     margin: ${3*this.tilesZoom}px!important;
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                     border-radius: ${10*this.tilesZoom}px;
                     filter: drop-shadow(1px 1px 3px #00000060);
                 }
                 #search-jumper.funcKeyCall a.search-jumper-btn {
                     background: #f7f7f7a0;
                 }
                 a.search-jumper-btn:not(.search-jumper-word)>span {
                     position: absolute;
                     text-align: center;
                     width: 100%;
                     bottom: 0px;
                     color: black!important;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     text-shadow: 0 1px white, 1px 0 white, -1px 0 white, 0 -1px white;
                     font-size: ${12*this.scale}px;
                     font-weight: normal;
                     opacity: 0.8;
                 }
                 #search-jumper.funcKeyCall a.search-jumper-btn:not(.search-jumper-word)>span {
                     font-size: ${12*this.tilesZoom}px;
                 }
                 .search-jumper-type>a.search-jumper-btn.historySite {
                     box-shadow: 0px 0px 6px 0px #00000099;
                 }
                 .search-jumper-btn>img {
                     width: ${32*this.scale}px;
                     height: ${32*this.scale}px;
                     border: unset;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>img {
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     border-radius: unset;
                 }
                 .search-jumper-btn>b {
                     line-height: ${32*this.scale}px;
                     font-size: ${14*this.scale}px;
                     letter-spacing: 0;
                     color: inherit;
                     opacity: 0.9;
                     text-shadow: inherit;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>b {
                     line-height: ${32*this.tilesZoom}px;
                     font-size: ${14*this.tilesZoom}px;
                 }
                 .search-jumper-btn:hover>b {
                     opacity: 1;
                 }
                 .search-jumper-btn>div {
                     position: absolute;
                     width: 100%;
                     height: 100%;
                     line-height: ${32*this.scale}px;
                     background: black;
                     border-radius: ${20*this.scale}px;
                     font-size: ${30*this.scale}px;
                     color: wheat;
                     display: none;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>div {
                     line-height: ${32*this.tilesZoom}px;
                     border-radius: ${10*this.tilesZoom}px;
                     font-size: ${30*this.tilesZoom}px;
                 }
                 .search-jumper-isInPage .search-jumper-btn>div,
                 .search-jumper-isTargetImg .search-jumper-btn>div,
                 .search-jumper-isTargetAudio .search-jumper-btn>div,
                 .search-jumper-isTargetVideo .search-jumper-btn>div,
                 .search-jumper-isTargetLink .search-jumper-btn>div,
                 .search-jumper-isTargetPage .search-jumper-btn>div {
                     animation-name: changeOpacity;
                     animation-duration: 2s;
                     animation-iteration-count: 3;
                     animation-delay: 0.1s;
                     display: block;
                     opacity: 0;
                 }
                 @keyframes changeOpacity {
                     0%   {opacity: 0;}
                     10%  {opacity: 0;}
                     50%  {opacity: 0.75;}
                     80%  {opacity: 0;}
                     100% {opacity: 0;}
                 }
                 @-webkit-keyframes loader-rotate {
                   from {
                     transform: rotate(0deg);
                   }
                   to {
                     transform: rotate(360deg);
                   }
                 }
                 @keyframes loader-rotate {
                   from {
                     transform: rotate(0deg);
                   }
                   to {
                     transform: rotate(360deg);
                   }
                 }
                 .search-jumper-tips>.loader {
                     border-width: 5px;
                     border-style: solid;
                     border-color: gainsboro gainsboro dodgerblue gainsboro;
                     border-radius: 50%;
                     display: block;
                     width: 25px;
                     float: left;
                     height: 25px;
                     margin-right: 10px;
                     margin-top: 5px;
                     -webkit-animation: loader-rotate 1.5s linear infinite;
                     animation: loader-rotate 1.5s linear infinite;
                 }
                 .search-jumper-tips>.loader+font {
                     font-size: 25px;
                     line-height: 40px;
                 }
                 .search-jumper-tips>div {
                     font-size: initial;
                     line-height: initial;
                     font-weight: normal;
                     padding: 5px;
                     cursor: initial;
                 }
                 .search-jumper-tips>div [data-read],
                 .search-jumper-tips>div [data-close],
                 .search-jumper-tips>div [data-paste],
                 .search-jumper-tips>div [data-copy] {
                     cursor: pointer;
                 }
                 .search-jumper-tips>div [data-search] {
                     cursor: help;
                 }
                 .search-jumper-tips>div [data-close] {
                     position: absolute;
                     top: 0px;
                     right: 0px;
                     width: 20px;
                     height: 20px;
                     transition:all 0.2s ease;
                 }
                 .search-jumper-tips>div [data-close]:hover {
                     color: red;
                 }
                 .search-jumper-tips>div [data-read] {
                     color: #f9690e;
                 }
                 .search-jumper-tips>div [data-drag] {
                     cursor: grab;
                     touch-action: none;
                     user-select: none;
                 }
                 .search-jumper-tips>div [data-copy] {
                     display: inline-block;
                     transition:all 0.2s ease;
                 }
                 .search-jumper-tips>div [data-copy]:hover {
                     -webkit-transform: scale(1.1);
                     -moz-transform: scale(1.1);
                     transform: scale(1.1);
                 }
                 .search-jumper-tips.draging {
                     cursor: grabbing;
                     transition: none;
                 }
                 .search-jumper-tips.draging iframe {
                     pointer-events: none;
                 }
                 .search-jumper-tips .showTips-inputGroup {
                     display: flex;
                     flex-wrap: wrap;
                     text-align: left;
                     justify-content: center;
                 }
                 .search-jumper-tips .showTips-input-title {
                     font-size: 9pt;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     display: inline-block;
                     background-color: white;
                     position: relative;
                     left: 20px;
                     padding: 0px 4px;
                     text-align: left;
                     color: #646464;
                     word-break: break-all;
                     max-width: 85%;
                     z-index: 1;
                 }
                 .search-jumper-tips .showTips-inputGroup .select {
                     resize: both;
                     font-size: 11pt;
                     font-weight: normal;
                     border-radius: 4px;
                     border: 1px solid rgba(0, 0, 0, 0.23);
                     margin: 4px;
                     font-family: inherit;
                     background-color: #FFF;
                     width: calc(100% - 8px);
                     color: #4A4A4A;
                     margin-top: -8px;
                     padding: 4px;
                     padding-top: 8px;
                     box-sizing: border-box;
                     height: 30px;
                     position: relative;
                 }
                 .search-jumper-tips .showTips-inputGroup .searchBtn {
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                     cursor: pointer;
                     margin-bottom: 5px;
                 }
                 .search-jumper-tips .showTips-inputGroup * {
                     margin-left: 2px;
                     margin-right: 2px;
                 }
                 .search-jumper-tips .showTips-inputGroup .searchBtn:hover {
                     -webkit-transform: scale(1.1);
                     -moz-transform: scale(1.1);
                     transform: scale(1.1);
                     filter: drop-shadow(1px 1px 3px #00000050);
                 }
                 .search-jumper-tips .showTips-inputGroup .select>input[type=text] {
                     top: -8px;
                     left: 0px;
                     position: relative;
                     border: unset!important;
                     width: calc(100% - 25px);
                     padding-bottom: 3px;
                     margin-bottom: -30px;
                     float: left;
                     background: unset;
                     height: 24px;
                     outline: unset;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>p {
                     padding: 0;
                     margin: 0;
                     position: absolute;
                     pointer-events: none;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>.options {
                     position: fixed;
                     visibility: hidden;
                     opacity: 0;
                     transition: opacity .1s;
                     background-color: #FFF;
                     color: #4A4A4A;
                     border: 1px solid rgba(0, 0, 0, 0.23);
                     border-radius: 4px;
                     z-index: 10;
                     width: auto;
                     max-width: 35%;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>input:focus+p {
                     display: none;
                 }
                 .search-jumper-tips .showTips-inputGroup .select:hover>.options {
                     visibility: visible;
                     opacity: 1;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>.options>p {
                     cursor: pointer;
                     min-height: 20px;
                     padding: 3px 0;
                     margin: 0;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>.options>p:hover {
                     background: aliceblue;
                 }
                 .search-jumper-tips .showTips-inputGroup div.select:after {
                     content: "\u25BC";
                     position: absolute;
                     right: 6px;
                     top: 8px;
                     font-size: 9px;
                 }
                 @media (prefers-color-scheme: dark) {
                     .search-jumper-tips .showTips-input-title,
                     .search-jumper-tips .showTips-inputGroup input,
                     .search-jumper-tips .showTips-inputGroup textarea,
                     .search-jumper-tips .showTips-inputGroup .select {
                         background-color: black!important;
                         color: #d5d5d5!important;
                     }
                     .search-jumper-tips .showTips-inputGroup input:focus,
                     .search-jumper-tips .showTips-inputGroup textarea:focus,
                     .search-jumper-tips .showTips-inputGroup .select:focus {
                         background-color: #1e1e1e!important;
                     }
                     .search-jumper-tips .showTips-inputGroup input,
                     .search-jumper-tips .showTips-inputGroup textarea,
                     .search-jumper-tips .showTips-inputGroup .select {
                         border: 1px solid rgb(255 255 255 / 36%)!important;
                         background-color: #0c0c0c!important;
                     }
                     .search-jumper-tips .showTips-inputGroup .select>.options {
                         border: 1px solid rgb(255 255 255 / 36%)!important;
                         background-color: black;
                         color: #d5d5d5;
                     }
                     .search-jumper-tips .showTips-inputGroup .select>.options>p:hover {
                         background: #1e1e1e;
                     }
                 }
                 .search-jumper-logoBtnSvg {
                     width: ${32*this.scale}px;
                     height: ${32*this.scale}px;
                     overflow: hidden;
                     vertical-align: top;
                     cursor: grab;
                 }
                 #search-jumper.funcKeyCall .search-jumper-logoBtnSvg {
                     height: ${32*this.tilesZoom}px;
                     width: ${32*this.tilesZoom}px;
                 }
                 .search-jumper-type.search-jumper-targetImg,
                 .search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-type.search-jumper-targetLink,
                 .search-jumper-type.search-jumper-targetPage,
                 .search-jumper-isTargetImg>.search-jumper-type,
                 .search-jumper-isTargetAudio>.search-jumper-type,
                 .search-jumper-isTargetVideo>.search-jumper-type,
                 .search-jumper-isTargetLink>.search-jumper-type,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type {
                     display: none;
                 }
                 #search-jumper.in-input .search-jumper-type.search-jumper-open {
                     width: auto!important;
                     height: auto!important;
                 }
                 #search-jumper.in-input .sitelistCon>div:not(.input-hide)>a {
                     display: flex!important;
                 }
                 #search-jumper .input-hide,
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist.input-hide {
                     display: none!important;
                 }
                 #search-jumper.in-input .search-jumper-type:not(.input-hide) {
                     display: inline-flex!important;
                     flex-wrap: nowrap!important;
                 }
                 #search-jumper.in-input .search-jumper-btn:not(.input-hide) {
                     display: grid!important;
                 }
                 #search-jumper>.search-jumper-searchBar>.search-jumper-logo {
                     display: inline-flex;
                     background: unset;
                     padding: 0px;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-logo {
                     display: none;
                 }
                 .search-jumper-searchBar>.search-jumper-type.search-jumper-targetAll,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAll {
                     display: inline-flex;
                 }
                 .search-jumper-isInPage>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-isTargetImg>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-isTargetAudio>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-isTargetVideo>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-isTargetLink>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-isTargetPage>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isInPage:hover>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type.search-jumper-targetPage,
                 .search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type {
                     display: inline-flex;
                 }
                 .search-jumper-type,
                 .search-jumper-logo {
                     display: inline-flex;
                     box-sizing: border-box;
                     background: #d0d0d0;
                     border-radius: ${20*this.scale}px!important;
                     overflow: hidden;
                     padding: 0.2px;
                     height: ${40*this.scale}px;
                     width: ${40*this.scale}px;
                     max-height: ${this.scale*40}px;
                     min-height: ${this.scale*40}px;
                     min-width: ${this.scale*40}px;
                     ${c.prefConfig.noAni?"":`transition:width ${c.prefConfig.typeOpenTime}ms ease, height ${c.prefConfig.typeOpenTime}ms;`}
                 }
                 #search-jumper.funcKeyCall .search-jumper-type,
                 #search-jumper.funcKeyCall .search-jumper-logo {
                     border-radius: ${20*this.tilesZoom}px!important;
                     height: ${40*this.tilesZoom}px;
                     width: ${40*this.tilesZoom}px;
                     max-height: ${this.tilesZoom*40}px;
                     min-height: ${this.tilesZoom*40}px;
                     min-width: ${this.tilesZoom*40}px;
                 }
                 #search-jumper-tileInput {
                     display: none;
                     opacity: 0.2;
                     user-select: all;
                     background-color: #212022;
                     color: #adadad;
                     border: none;
                     font-size: 12px;
                     margin-bottom: 3px;
                     padding: 5px;
                     border-radius: 10px;
                     box-shadow: #adadad 0px 0px 2px;
                     width: 100%;
                     outline: none;
                     box-sizing: border-box;
                     cursor: text;
                     -moz-transition: opacity 0.3s ease;
                     -webkit-transition: opacity 0.3s ease;
                     transition: opacity 0.3s ease;
                 }
                 #search-jumper-tileInput:hover {
                     opacity: 0.5;
                 }
                 #search-jumper-tileInput:focus {
                     opacity: 0.95;
                 }
                 #search-jumper.funcKeyCall #search-jumper-tileInput {
                     display: block;
                 }
                 .search-jumper-right>.searchJumperNavBar {
                     right: unset;
                     left: 0;
                 }
                 .search-jumper-right>.searchJumperNavBar>#navMarks+div.navPointer {
                     right: unset;
                     left: 20px;
                     transform: rotate(180deg);
                 }
                 .search-jumper-bottom>.search-jumper-input {
                     bottom: unset;
                     top: 80px;
                 }
                 #search-jumper .search-jumper-type.search-jumper-open.not-expand>a:nth-of-type(${c.prefConfig.expandTypeLength||12})~a {
                     display: none!important;
                 }
                 #search-jumper .sitelist {
                     position: fixed;
                     text-align: left;
                     background: #00000000;
                     max-height: calc(100vh - ${this.scale*42}px);
                     overflow: scroll;
                     border: 0;
                     pointer-events: none;
                     opacity: 0;
                     ${c.prefConfig.noAni?"":"transition:opacity 0.5s ease;"}
                     scrollbar-width: none;
                     box-sizing: content-box;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     z-index: 1;
                 }
                 #search-jumper>#search-jumper-alllist.new-mode .sitelist {
                     overscroll-behavior: auto;
                     -ms-scroll-chaining: auto;
                 }
                 #search-jumper .search-jumper-type:hover>.sitelist {
                     pointer-events: all;
                     opacity: 1;
                 }
                 #search-jumper .sitelist>.sitelistCon {
                     margin: 10px;
                     border-radius: 10px;
                     box-shadow: 0 4px 16px #20263126, inset 0 0 0 1px #282a2d1a;
                     padding: 0 0 10px 0;
                     background-color: #ffffffdd;
                     -moz-transition: background-color 0.3s ease;
                     -webkit-transition: background-color 0.3s ease;
                     transition: background-color 0.3s ease;
                     opacity: 1;
                     border: 0;
                 }
                 #search-jumper .sitelistBox:hover>.sitelist>.sitelistCon {
                     background-color: rgba(255, 255, 255, 0.8);
                 }
                 #search-jumper .sitelist>.sitelistCon:hover {
                     opacity: 1;
                 }
                 #search-jumper .sitelist::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper .sitelist>.sitelistCon>div {
                     margin: 0 4px;
                     padding: 0 8px;
                     border-radius: 6px;
                 }
                 #search-jumper .sitelist>.sitelistCon>div:hover {
                     background: #f5f7fa;
                 }
                 #search-jumper .sitelist a {
                     display: flex;
                     align-items: center;
                     text-decoration: none;
                     cursor: pointer;
                 }
                 #search-jumper .sitelist a>div>img {
                     width: 20px;
                     height: 20px;
                     margin-right: 10px;
                     margin-top: unset;
                     max-width: unset;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a>p {
                     display: inline-block;
                     font-size: 15px;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     line-height: 25px;
                     margin: 5px auto;
                     color: #282a2d;
                     flex: 1;
                     text-align: left;
                     white-space: nowrap;
                     transform-origin: left;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a.dragTarget>img {
                     -webkit-transform:scale(1.5);
                     -moz-transform:scale(1.5);
                     transform:scale(1.5);
                 }
                 #search-jumper .sitelist a.dragTarget>p {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform: scale(1.2);
                 }
                 #search-jumper .sitelist a * {
                     pointer-events: none;
                 }
                 #search-jumper .sitelist>.sitelistCon>p {
                     display: flex;
                     align-items: center;
                     color: #282a2d;
                     text-align: center;
                     font-size: 16px;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     font-weight: bold;
                     border-bottom: 1px solid #9e9e9e1a;
                     border-radius: 10px 10px 0 0;
                     overflow: hidden;
                     white-space: nowrap;
                     padding: 6px 10px;
                     position: sticky;
                     top: 0;
                     pointer-events: none;
                     margin: -1px 0 0 0;
                     backdrop-filter: blur(8px);
                 }
                 #search-jumper .sitelist>.sitelistCon>p>span {
                     flex: 1;
                     min-width: 0;
                     overflow: hidden;
                     text-overflow: ellipsis;
                 }
                 #search-jumper .search-jumper-split-btn {
                     display: none;
                     flex: none;
                     white-space: nowrap;
                     font: inherit;
                     font-size: 12px;
                     font-weight: normal;
                     padding: 2px 6px;
                     margin: 0 4px;
                     border: 0;
                     border-radius: 5px;
                     background: rgb(160 160 160 / 10%);
                     color: inherit;
                     cursor: pointer;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .search-jumper-split-btn {
                     display: inline-block;
                 }
                 #search-jumper .search-jumper-split-btn:hover {
                     background: rgb(160 160 160 / 20%);
                 }
                 #search-jumper .search-jumper-split-btn:focus-visible {
                     outline: 2px solid currentColor;
                     outline-offset: 2px;
                 }
                 .search-jumper-searchBar.disable-pointer>.search-jumper-type {
                     pointer-events: none;
                 }
                 .search-jumper-word {
                     background: black;
                     color: #ffffff!important;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     font-weight: 500;
                     font-size: ${13*this.scale}px;
                     line-height: calc(${32*this.scale}px * var(--scale));
                     min-width: ${32*this.scale}px;
                     min-height: ${32*this.scale}px;
                     letter-spacing: 0px;
                     text-shadow: unset;
                     text-decoration: none;
                 }
                 span.search-jumper-word {
                     border-radius: ${20*this.scale}px!important;
                 }
                 a.search-jumper-word>span {
                     border-radius: 50%!important;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                     background: white;
                 }
                 #search-jumper.funcKeyCall .search-jumper-word {
                     border-radius: ${10*this.tilesZoom}px!important;
                     font-size: ${14*this.tilesZoom}px;
                     line-height: ${32*this.tilesZoom}px;
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                 }
                 #search-jumper.funcKeyCall .search-jumper-word>span {
                     background: unset;
                 }
                 .search-jumper-word:hover {
                     font-weight: bold;
                     text-shadow: 0px 0px 5px #d0d0d0;
                 }
                 a.search-jumper-word {
                     color: #111111!important;
                     background: unset;
                 }
                 .funcKeyCall a.search-jumper-word {
                     background: #f7f7f7a0;
                 }
                 a.search-jumper-word>span {
                     color: #222!important;
                     border-radius: 20px;
                     line-height: unset;
                     text-align: center;
                     text-shadow: 0 0 0.7px #787878dd;
                     background-image: initial;
                 }
                 .search-jumper-type img {
                     width: 100%;
                     height: 100%;
                     margin-top: unset;
                 }
                 #search-jumper.funcKeyCall .search-jumper-type img {
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                 }
                 .funcKeyCall>.search-jumper-tips {
                     position: absolute;
                 }
                 .search-jumper-tips {
                     z-index: 2147483646;
                     pointer-events: none;
                     position: fixed;
                     font-size: ${35*this.tipsZoom}px;
                     background: #f5f5f5f0;
                     border-radius: ${10*this.tipsZoom}px!important;
                     padding: 6px;
                     box-shadow: 0 8px 24px #20263133, inset 0 0 0 1px #282a2d1a;
                     font-weight: bold;
                     ${c.prefConfig.noAni?"":"transition: all 0.2s ease;"}
                     color: black;
                     white-space: normal;
                     max-width: 640px;
                     max-width: min(80vw,640px);
                     width: max-content;
                     line-height: ${35*this.tipsZoom}px;
                     word-break: break-all;
                     text-align: center;
                     box-sizing: content-box;
                     overflow: hidden;
                     scrollbar-width: none;
                     font-family: Roboto,arial,sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     cursor: grab;
                     max-height: 80vh;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 .search-jumper-tips::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-tips:hover {
                     overflow: auto;
                 }
                 .search-jumper-tips * {
                     max-width: 640px;
                     max-width: min(80vw,640px);
                     margin: auto;
                 }
                 .search-jumper-tips .markdown {
                     white-space: pre-wrap;
                     line-height: 1.2;
                     text-align: initial;
                     margin: 10px;
                     display: block;
                     user-select: text;
                     cursor: auto;
                 }
                 .search-jumper-tips iframe {
                     border: unset;
                     display: block;
                 }
                 .search-jumper-searchBar>.search-jumper-type {
                     padding: 0px;
                     ${c.prefConfig.disableTypeOpen?"background: unset;":""}
                 }
                 .search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     background: unset;
                     border-radius: unset!important;
                 }
                 .minSizeMode.search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open),
                 .minSizeMode.search-jumper-searchBar:hover>.search-jumper-type:not(.search-jumper-open) {
                     display: none;
                 }
                 .minSizeModeClose.minSizeMode.search-jumper-searchBar:hover>.search-jumper-type:not(.search-jumper-targetImg,.search-jumper-targetLink,.search-jumper-targetPage,.search-jumper-targetVideo,.search-jumper-targetAudio) {
                     display: inline-flex;
                 }
                 .funcKeyCall>.search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     display: none;
                     border-radius: ${20*this.tilesZoom}px!important;
                 }
                 span.search-jumper-word>img {
                     width: ${20*this.scale}px;
                     height: ${20*this.scale}px;
                     margin: auto;
                 }
                 #search-jumper.funcKeyCall span.search-jumper-word>img {
                     width: ${20*this.tilesZoom}px;
                     height: ${20*this.tilesZoom}px;
                 }
                 .search-jumper-btn:hover {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     color: white;
                     text-decoration:none;
                     filter: drop-shadow(1px 1px 3px #00000050);
                 }
                 .search-jumper-btn:active {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     transition:unset;
                     filter: drop-shadow(1px 1px 5px #000000a0);
                 }
                 .search-jumper-searchBar .search-jumper-btn.current {
                     overflow: visible;
                 }
                 .search-jumper-searchBar .search-jumper-btn.current::before {
                     content: '';
                     position: absolute;
                     right: -2px;
                     top: -2px;
                     border: 1px solid #00000099;
                     display: inline-block;
                     width: 10px;
                     height: 10px;
                     border-radius: 50%;
                     background: white;
                     box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 80%);
                     ${c.prefConfig.noAni?"":"opacity: 0.8;"}
                 }
                 .in-input .search-jumper-input {
                     display: block;
                     box-sizing: content-box;
                 }
                 .lock-input .search-jumper-lock-input {
                     float: left;
                     font-size: 20px;
                     top: 14px;
                     left: 25px;
                     color: darkgrey;
                     position: absolute;
                     border-right: 2px solid #32373a;
                     padding-right: 10px;
                     display: block;
                 }
                 .search-jumper-input {
                     width: 50%;
                     min-width: 500px;
                     bottom: 2%;
                     left: 50%;
                     margin: 0 0 0 -25%;
                     margin-left: min(-25%, -250px);
                     position: fixed;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     text-align: left;
                     box-shadow: 0px 2px 10px rgb(0 0 0 / 80%);
                     border: 1px solid rgb(179 179 179 / 10%);
                     border-radius: 28px;
                     background-color: rgb(51 56 59 / 90%);
                     padding: 5px;
                     display: none;
                     z-index: 2139999999;
                     font-size: 20px;
                     height: 36px;
                     touch-action: none;
                 }
                 .inputGroup {
                     cursor: grab;
                     display: flex;
                 }
                 .inputGroup * {
                     cursor: default;
                 }
                 .search-jumper-input input,
                 .search-jumper-input textarea {
                     background-color: #212022;
                     color: #adadad;
                     border: none;
                     font-size: 16px;
                     height: 35px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     border-radius: 3px;
                     box-shadow: #333 0px 0px 2px;
                     width: calc(100% - 20px);
                     outline: none;
                     box-sizing: border-box;
                     cursor: text;
                 }
                 #searchJumperInput,
                 #searchJumperInputKeyWords {
                     width: calc(100% - 11px);
                     float: left;
                     transition: 0.25s width ease;
                 }
                 #searchJumperInput {
                     margin: 0 5px 0 10px;
                 }
                 #searchJumperInputKeyWords {
                     margin: 0 10px 0 1px;
                 }
                 #searchJumperInputKeyWords:disabled {
                     opacity: 0.5;
                     max-width: 20%;
                     min-width: 20%;
                 }
                 #filterSites>input:focus,
                 #filterSites>textarea:focus {
                     width: calc(400% - 20px);
                     color: white;
                 }
                 .search-jumper-input * {
                     box-sizing: border-box;
                 }
                 .search-jumper-input input[type="radio"] {
                     display: none;
                 }
                 .search-jumper-input input:checked + label {
                     background: #3a444add;
                     opacity: 0.9;
                     color: white;
                     font-size: 14px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .line {
                     left: 27px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .content-container #filterSites {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .line {
                     left: 233px;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .content-container #searchInPage {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input label {
                     display: inline-block;
                     font-size: 12px;
                     height: 32px;
                     line-height: 32px;
                     width: 200px;
                     text-align: center;
                     background: #2a343acc;
                     color: #959595;
                     position: relative;
                     transition: 0.25s background ease, 0.25s opacity ease;
                     cursor: pointer;
                     position: relative;
                     top: -38px;
                     left: 22px;
                     border-radius: 5px 5px 0 0;
                     user-select: none;
                     pointer-events: all;
                     max-width: 40%;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     opacity: 0.6;
                 }
                 .search-jumper-input input:checked + label:hover,
                 .search-jumper-input label:hover {
                     background: #3a444a;
                     opacity: 1;
                 }
                 .search-jumper-input label::after {
                     content: "";
                     height: 1px;
                     width: 100%;
                     position: absolute;
                     display: block;
                     background: #ccc;
                     bottom: 0;
                     opacity: 0;
                     left: 0;
                     transition: 0.25s ease;
                 }
                 .search-jumper-input label:hover::after {
                     opacity: 1;
                 }
                 .search-jumper-input .line {
                     background: #1E88E5;
                     width: 200px;
                     height: 1px;
                     top: -2px;
                     left: 0;
                     transition: 0.25s ease;
                     position: absolute;
                 }
                 .inputGroup>.svgBtns {
                     right: 16px;
                     top: 5px;
                     height: 35px;
                     position: absolute;
                     user-select: none;
                     background: #212022;
                     white-space: nowrap;
                     overflow: hidden;
                     display: flex;
                     align-items: center;
                 }
                 .inputGroup>#addons {
                     position: absolute;
                     bottom: 41px;
                     right: 110px;
                     display: none;
                     flex-direction: column;
                     background: #212022;
                     border-radius: 10px;
                     opacity: 0;
                     transition: 0.5s opacity ease;
                 }
                 .inputGroup>#addons>div {
                     padding: 10px;
                 }
                 .inputGroup>#addons>div>input {
                     float: left;
                     width: 20px;
                     height: 20px;
                     margin: 0 10px 0 0;
                     cursor: pointer;
                 }
                 .inputGroup:hover>#addons {
                     display: flex;
                 }
                 .inputGroup>#addons:hover {
                     opacity: 1;
                 }
                 .inputGroup>.svgBtns:hover+#addons {
                     opacity: 1;
                 }
                 .inputGroup>#addons>div>label {
                     color: white;
                     display: inline;
                     background: none;
                     top: unset;
                     left: unset;
                     font-size: unset;
                     line-height: 20px;
                     max-width: unset;
                 }
                 .inputGroup>.svgBtns:hover {
                     width: auto;
                 }
                 .inputGroup>.svgBtns>svg {
                     margin: 0 2px;
                 }
                 .inputGroup svg.checked {
                     fill: #1E88E5;
                 }
                 @media screen and (max-width: 2048px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1580px;
                     }
                 }
                 @media screen and (max-width: 1920px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1320px;
                     }
                 }
                 @media screen and (max-width: 1600px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1060px;
                     }
                 }
                 @media screen and (max-width: 1300px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 800px;
                     }
                 }
                 @media screen and (max-width: 900px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 540px;
                     }
                 }
                 @media screen and (max-width: 600px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 95vw;
                     }
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon {
                         width: calc(100% - 20px);
                         display: grid;
                         grid-template-columns: repeat(2, minmax(0, 1fr));
                     }
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon>p {
                         grid-column: 1 / -1;
                         box-sizing: border-box;
                         padding: 12px 16px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div {
                         position: relative;
                         min-width: 0;
                     }
                     #search-jumper-alllist>.clockInAll {
                         right: 16px;
                         bottom: 16px;
                         max-width: calc(100vw - 32px);
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                         width: 100%;
                         padding: 10px 0;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                         width: calc(100% - 64px);
                         margin-left: 44px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a>div {
                         width: 28px;
                         height: 28px;
                         padding: 6px;
                         margin: 0;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a>div>img {
                         width: 28px;
                         height: 28px;
                         margin-left: 0;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a>p {
                         margin-left: 44px;
                     }
                 }
                 @media screen and (max-width: 800px) {
                     .search-jumper-input .line {
                         display: none;
                     }
                     .search-jumper-input {
                         min-width: 300px;
                         margin-left: min(-25%, -150px);
                     }
                     .inputGroup>.svgBtns {
                         width: 25px;
                     }
                     #search-jumper-alllist>.modeSwitch {
                         width: 36px;
                         height: 36px;
                         right: 2px;
                         top: 10px;
                     }
                 }
                 @media screen and (max-width: 650px) {
                     #search-jumper.search-jumper-showall>#search-jumper-alllist.new-mode+.groupTab {
                         display: none;
                     }
                 }
                 .search-jumper-input .content-container {
                     background: #eee;
                     position: static;
                     font-size: 16px;
                 }
                 .search-jumper-input .content-container .inputGroup {
                     position: absolute;
                     padding: 5px;
                     width: 100%;
                     top: 0;
                     left: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s ease;
                     color: #333;
                 }
                 .search-jumper-input svg,
                 .searchJumperNavBar svg {
                     width: 25px;
                     height: 25px;
                     fill: white;
                     cursor: pointer;
                     opacity: 0.8;
                     transition: 0.25s all ease;
                     font-size: 0px;
                 }
                 .search-jumper-input .inputGroup:hover svg,
                 .searchJumperNavBar.sjNavShow svg {
                     pointer-events: all;
                 }
                 .search-jumper-input svg *,
                 .searchJumperNavBar svg * {
                     cursor: pointer;
                 }
                 .search-jumper-input svg:hover,
                 .searchJumperNavBar svg:hover,
                 .search-jumper-input>.closeBtn:hover,
                 .searchJumperNavBar>div.minNavBtn:hover,
                 .searchJumperNavBar>div.maxNavBtn:hover {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform:scale(1.2);
                     opacity: 1;
                 }
                 #search-jumper.selectedEle #filterSites>.svgBtns>svg {
                     display: inline-block!important;
                 }
                 .search-jumper-input>.closeBtn {
                     position: absolute;
                     right: 0px;
                     top: -35px;
                     width: 30px;
                     height: 30px;
                     vertical-align: middle;
                     overflow: hidden;
                     background: rgb(51 56 59 / 90%);
                     color: white;
                     text-align: center;
                     line-height: 30px;
                     border-radius: 20px;
                     pointer-events: all;
                     transition: 0.25s all ease;
                     opacity: 0.6;
                     font-size: 26px;
                     box-shadow: 0px 0px 2px rgb(0 0 0 / 80%);
                     border: 1px solid rgb(179 179 179 / 20%);
                     cursor: pointer;
                     user-select: none;
                 }
                 #searchInPage>.lockWords {
                     max-width: 50%;
                     position: absolute;
                     bottom: 4px;
                     left: 16px;
                     color: white;
                     font-size: 18px;
                     display: flex;
                     flex-wrap: wrap-reverse;
                     max-height: 38px;
                     overflow: hidden;
                 }
                 #searchInPage>.lockWords:hover {
                     overflow-y: auto;
                     height: auto;
                     max-height: 90vh;
                 }
                 #searchInPage>.lockWords>span {
                     position: relative;
                     padding: 5px;
                     cursor: pointer;
                     user-select: none;
                     background: yellow;
                     color: black;
                     border: 1px solid;
                     margin: 2px;
                     display: flex;
                     align-items: center;
                     white-space: nowrap;
                     max-width: 100%;
                     line-height: initial;
                 }
                 #searchInPage>.lockWords>span>em {
                     cursor: alias;
                 }
                 #searchInPage>.lockWords .lockWordTool {
                     position: absolute;
                     right: 0;
                     top: 0;
                     display: none;
                     opacity: 0.3;
                     height: 15px;
                     width: 15px;
                     text-align: center;
                     line-height: 15px;
                     border-radius: 50%;
                     background: black;
                     color: white;
                 }
                 #searchInPage>.lockWords .lockWordTool>span {
                     cursor: pointer;
                     font-size: 15px;
                 }
                 #searchInPage>.lockWords .modifyBtn {
                     top: unset;
                     bottom: 0;
                 }
                 #searchInPage>.lockWords .lockWordTool:hover {
                     opacity: 1;
                 }
                 #searchInPage>.lockWords>span:hover .lockWordTool {
                     display: block;
                     pointer-events: all;
                 }
                 #searchInPage>.lockWords .lockWordTool>svg {
                     width: 15px;
                     height: 15px;
                     fill: black;
                     color: black;
                     border: 1px solid white;
                     border-radius: 10px;
                     background: white;
                 }
                 #searchInPage>.lockWords>span>em {
                     font-size: 12px;
                     margin-right: 5px;
                     color: unset;
                 }
                 .searchJumperNavBar {
                     all: unset;
                     top: 0px;
                     bottom: 0px;
                     right: 0px;
                     position: fixed;
                     width: 20px;
                     z-index: 2147483647;
                     background: #00000026;
                     text-align: center;
                     pointer-events: none;
                     font-size: 0px;
                     opacity: 0;
                     transition: width 0.3s, background 0.3s;
                 }
                 .searchJumperNavBar:hover {
                     width: 25px;
                     background: #00000066;
                 }
                 .searchJumperNavBar.sjNavShow {
                     pointer-events: all;
                     opacity: 1;
                 }
                 .search-jumper-showall > .searchJumperNavBar.sjNavShow {
                     opacity: 0;
                 }
                 .searchJumperNavBar>.closeNavBtn {
                     width: 16px;
                     height: 16px;
                     fill: white;
                     cursor: pointer;
                     display: inline-block;
                 }
                 .searchJumperNavBar>.minNavBtn,
                 .searchJumperNavBar>.maxNavBtn {
                     font-size: 12px;
                     font-weight: bold;
                     font-family: system-ui;
                     line-height: 16px;
                     opacity: 0.1;
                     background: white;
                     color: black;
                     border-radius: 10px;
                     width: 16px;
                     height: 16px;
                     display: inline-block;
                     cursor: pointer;
                     transition: 0.25s opacity ease, 0.25s transform ease;
                 }
                 .searchJumperNavBar:hover>.minNavBtn,
                 .searchJumperNavBar:hover>.maxNavBtn {
                     opacity: 0.8;
                 }
                 #search-jumper>.searchJumperNavBar.minimize {
                     background: transparent;
                     pointer-events: none;
                 }
                 .searchJumperNavBar.minimize>.closeNavBtn,
                 .searchJumperNavBar.minimize>.navPointer,
                 .searchJumperNavBar.minimize>.maxNavBtn,
                 .searchJumperNavBar.minimize>#navMarks {
                     display: none;
                 }
                 .searchJumperNavBar.minimize>.minNavBtn {
                     opacity: 1;
                     box-shadow: 0px 0px 3px 1px #000;
                     margin-left: -50px;
                     margin-top: 5px;
                     pointer-events: all;
                 }
                 .search-jumper-right>.searchJumperNavBar.minimize>.minNavBtn {
                     margin-left: unset;
                     margin-right: -50px;
                 }
                 #navMarks+.navPointer {
                     pointer-events: none;
                     position: absolute;
                     right: 20px;
                     text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
                     font-size: 30px;
                     font-family: system-ui;
                     line-height: 0px;
                     border: 0;
                     margin-top: 0;
                     opacity: 0.8;
                     color: black;
                     transition: top 0.25s ease;
                     animation-name: changeHor;
                     animation-duration: 1s;
                     animation-iteration-count: infinite;
                     animation-timing-function: ease-in-out;
                 }
                 @keyframes changeHor {
                     0%   {right: 20px;}
                     10%  {right: 18px;}
                     80%  {right: 25px;}
                     100% {right: 20px;}
                 }
                 #navMarks {
                     height: calc(100% - 50px);
                     width: 100%;
                     position: relative;
                 }
                 #navMarks>span {
                     height: 0.5vh;
                     width: 100%;
                     position: absolute;
                     border: 1px solid #cccccc;
                     min-height: 5px;
                     box-sizing: border-box;
                     left: 0;
                     border-radius: 0px!important;
                     cursor: alias;
                 }
                 .searchJumperPosBar {
                     background: rgba(29, 93, 163, 0.3);
                     position: absolute;
                     min-height: 10px;
                     min-width: 10px;
                     animation-duration: 2s;
                     z-index: 2147483647;
                     margin: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s all ease;
                 }
                 .searchJumperPosBar.searchJumperPosW {
                     width: 100%;
                     left: 0;
                 }
                 .searchJumperPosBar.searchJumperPosH {
                     height: 100%;
                     top: 0;
                     position: fixed;
                 }
                 @keyframes fadeit {
                     0% {opacity: 1;}
                     50% {opacity: 0.8;}
                     100% {opacity: 0;}
                 }
                 #rightSizeChange {
                     top: 0;
                     opacity: 0;
                     height: 45px;
                     width: 15px;
                     position: absolute;
                     cursor: e-resize;
                     right: 0;
                     pointer-events: all;
                 }
                 .searchJumper-hide {
                     display: none!important;
                 }
                 .search-jumper-historylist>a.search-jumper-btn {
                     filter: drop-shadow(0px 0px 3px #00000050);
                     width: 32px;
                     height: 32px;
                     line-height: 32px;
                     min-width: auto;
                     min-height: auto;
                     flex-shrink: 0;
                 }
                 .search-jumper-historylist>a.search-jumper-btn>img {
                     width: 32px;
                     height: 32px;
                 }
                 .search-jumper-historylist>a.search-jumper-btn:not(.search-jumper-word)>span {
                     font-size: 12px;
                     line-height: normal;
                 }
                 #search-jumper .listArrow {
                     width: 0;
                     height: 0;
                     border: 10px solid transparent;
                     pointer-events: none;
                     border-bottom-color: white;
                     position: fixed;
                     opacity: 0;
                     visibility: hidden;
                     z-index: 2147483647;
                     transition: opacity .3s ease, top .15s, bottom .15s, left .15s, right .15s;
                 }
                 #search-jumper.search-jumper-left .listArrow {
                     border-bottom-color: transparent;
                     border-right-color: white;
                 }
                 #search-jumper.search-jumper-right .listArrow {
                     border-bottom-color: transparent;
                     border-left-color: white;
                 }
                 #search-jumper.search-jumper-bottom .listArrow {
                     border-bottom-color: transparent;
                     border-top-color: white;
                 }
                 @media (prefers-color-scheme: dark) {
                     #search-jumper.search-jumper-showall #filterSites {
                         background-color: #1c2127ee;
                         box-shadow: 0 2px 12px #00000026, inset 0 0 0 1px #ffffff1a;
                     }
                     #search-jumper.search-jumper-showall #filterSites>input,
                     #search-jumper.search-jumper-showall #filterSites>textarea {
                         background-color: #181c20;
                         color: #d3d8df;
                     }

                     #search-jumper .sitelist > .sitelistCon {
                         background-color: #1C2127ee !important;
                         box-shadow: 0 4px 16px #00000033, inset 0 0 0 1px #ffffff1a;
                     }
                     #search-jumper.search-jumper-showall .sitelist > .sitelistCon {
                         background-color: #1C2127b3 !important;
                     }
                     #search-jumper.search-jumper-showall .sitelist > .sitelistCon:hover {
                         background-color: #1C2127dd !important;
                     }
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon:hover {
                         background-color: #1C212788 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > div:hover {
                         background-color: #283C57 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > p,
                     #search-jumper .sitelist a > p {
                         color: #d3d8df !important;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a:hover>p {
                         color: #f1404b !important;
                     }
                     #search-jumper .listArrow {
                         border-bottom-color: #1C2127;
                     }
                     #search-jumper.search-jumper-left .listArrow {
                         border-bottom-color: transparent;
                         border-right-color: #1C2127;
                     }
                     #search-jumper.search-jumper-right .listArrow {
                         border-bottom-color: transparent;
                         border-left-color: #1C2127;
                     }
                     #search-jumper.search-jumper-bottom .listArrow {
                         border-bottom-color: transparent;
                         border-top-color: #1C2127;
                     }

                     /* \u5386\u53F2\u5217\u8868 */
                     .search-jumper-historylistcon {
                         background-color: #181C2060 !important;
                         border-bottom: 1px solid #252b32;
                     }

                     .search-jumper-historylist>a.search-jumper-btn {
                         filter: drop-shadow(0px 0px 2px #ffffff80);
                     }

                     .search-jumper-tips {
                         background-color: #3F4042f0;
                         color: #DADADA;
                     }
                     .search-jumper-tips>*:not(font) {
                         color: white;
                     }

                     .search-jumper-showall .search-jumper-word:hover {
                         text-shadow: 0px 0px 5px #2374FF !important;
                     }

                     /* \u7C7B\u522B */
                     .search-jumper-showall .search-jumper-type,
                     .search-jumper-showall .search-jumper-logo {
                         background-color: #181C20 !important;
                     }

                     #search-jumper.search-jumper-showall>.groupTab {
                         background: #1C2127ee !important;
                     }
                     #search-jumper.search-jumper-showall>.groupTab>span:hover{
                         background: #283C57 !important;
                     }
                     #search-jumper.search-jumper-showall>.groupTab:hover>span::after {
                         color: white;
                     }
                 }
                 `,this.inPageCss=`
                 mark.searchJumper,
                 a.searchJumper {
                     visibility: inherit;
                     font-style: inherit;
                     box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
                     border-radius: 3px;
                     text-decoration: none;
                     padding: 1px 0;
                     -webkit-text-fill-color: initial;
                     text-shadow: initial;
                     min-width: initial;
                     display: inline;
                     margin: initial;
                 }
                 mark.searchJumper:before,
                 a.searchJumper:before,
                 mark.searchJumper:after,
                 a.searchJumper:after {
                     all: unset;
                     content: none!important;
                 }
                 mark.searchJumper[data-current=true],
                 a.searchJumper[data-current=true] {
                     border-bottom: 0.2em solid;
                     border-bottom-left-radius: 0;
                     border-bottom-right-radius: 0;
                     animation: 0.5s linear 0s 5 normal none running currentMark;
                 }
                 @keyframes currentMark {
                     from {border-color: unset}
                     to {border-color: transparent;}
                 }
                `,this.appearanceCssText=Nt,c.prefConfig.cssText&&(Nt+=c.prefConfig.cssText);let t=document.createElement("span");t.className="search-jumper-searchBar";let i=document.createElement("input");i.id="search-jumper-tileInput",i.addEventListener("mousedown",I=>{I&&I.stopPropagation&&I.stopPropagation()},!0);let r;i.addEventListener("input",I=>{clearTimeout(r),r=setTimeout(()=>{let M=e.bar.querySelector(".search-jumper-open>span:first-child");M&&M.dispatchEvent(new CustomEvent("checkSites",{detail:i.value}))},500)},!0),this.tileInput=i;let n=document.createElement("span");n.className="search-jumper-logo",yt=document.createElement("span"),ie(yt,Mi),yt.className="search-jumper-btn",n.addEventListener("mouseenter",I=>{this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}),n.appendChild(yt),t.appendChild(n);let a=document.createElement("div");a.id="search-jumper",a.style.display="none",a.className="search-jumper-searchBarCon",a.appendChild(t),a.setAttribute("translate","no");let s=document.createElement("div");s.id="search-jumper-alllist",a.appendChild(s),this.alllist=s;let o=document.createElement("span");o.className="groupTab",a.appendChild(o),this.groupTab=o;let p=document.createElement("div");p.className="search-jumper-showallBg",a.appendChild(p);let h=document.createElement("div");h.className="sitelistBox",s.appendChild(h),this.sitelistBox=h;const d=/#[^\s#]+/g;h.addEventListener("mouseover",I=>{if(!s.classList.contains("new-mode"))return;let M=I.target;M.parentNode&&M.parentNode.dataset.name&&(M=M.parentNode);let H=M.title;if(!M.dataset.name||!H||M.initedTag)return;let Y=document.createElement("p"),se=H.match(d);se&&(se.forEach(re=>{let L=document.createElement("span");L.innerText=re.slice(1),L.addEventListener("click",F=>{e.searchInput.value=re,e.searchInput.dispatchEvent(new CustomEvent("input"))}),Y.appendChild(L)}),M.appendChild(Y)),M.initedTag=!0});const m=document.createElement("div");m.className="clockInAll",s.appendChild(m);let u=document.createElement("span");u.className="timeInAll",m.appendChild(u),this.timeInAll=u,this.modeSwitch=document.createElement("div"),this.modeSwitch.className="modeSwitch",ie(this.modeSwitch,'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect height="450" width="520" y="287" x="253" fill="#fff"></rect><path d="m511.8,64.2c-247.5,0 -448.2,200.7 -448.2,448.2s200.7,448.2 448.2,448.2s448.2,-200.6 448.2,-448.2s-200.7,-448.2 -448.2,-448.2zm-260.4,353.9c0,-7.8 6.3,-14.2 14.2,-14.2l315.6,0l0,-102.5c0,-12.3 14.7,-18.8 23.7,-10.4l165.1,151.7c9.5,8.7 3.3,24.6 -9.6,24.6l-495,0c-7.8,0 -14.2,-6.3 -14.2,-14.2l0,-35l0.2,0zm523.2,188.5c0,7.8 -6.3,14.2 -14.2,14.2l-315.5,0l0,102.6c0,12.3 -14.7,18.8 -23.7,10.4l-165.2,-151.8c-9.5,-8.7 -3.3,-24.6 9.6,-24.6l495,0c7.8,0 14.2,6.3 14.2,14.2l0,35l-0.2,0z"></path></svg>'),s.appendChild(this.modeSwitch),this.modeSwitch.addEventListener("click",I=>{I.preventDefault(),I.stopPropagation(),s.classList.toggle("new-mode"),s.classList.remove("showbg"),V.setItem("allPageNewMode",s.classList.contains("new-mode"))}),this.modeSwitch.addEventListener("mouseenter",I=>{st&&(I.preventDefault(),I.stopPropagation(),s.classList.add("showbg"))}),this.modeSwitch.addEventListener("mouseleave",I=>{st&&(I.preventDefault(),I.stopPropagation(),s.classList.remove("showbg"))}),this.modeSwitch.addEventListener("contextmenu",I=>{st&&(I.preventDefault(),I.stopPropagation(),s.classList.remove("showbg"),ye(st,{active:!0,insert:!0}))}),or&&s.classList.add("new-mode");let f=document.createElement("span");f.className="dayInAll",m.appendChild(f),this.dayInAll=f,s.addEventListener(qt(),I=>{if(e.tips.style.display="none",clearTimeout(e.requestShowTipsTimer),!s.classList.contains("new-mode")){var M,H;if(I.type!=="wheel"){var Y=0,se=0;typeof I.axis=="number"?I.axis==2?se=I.detail:Y=I.detail:typeof I.wheelDeltaY>"u"||I.wheelDeltaY!=0?se=-I.wheelDelta/40:Y=-I.wheelDelta/40,H=se,M=Y}else M=I.deltaX,H=I.deltaY;I.target!=s&&I.target!=p&&I.target!=h&&H||(I.preventDefault(),I.stopPropagation(),s.scrollLeft+=M||H)}},{passive:!1,capture:!1});let w=document.createElement("span");ie(w,Mi),w.className="search-jumper-btn",w.addEventListener("click",I=>{ye(ct,{active:!0,insert:!0})}),s.appendChild(w);let b=document.createElement("div");b.className="search-jumper-historylistcon",s.appendChild(b);let j=document.createElement("div");if(j.className="search-jumper-historylist",b.appendChild(j),this.historylist=j,t.addEventListener("mouseenter",I=>{t.classList.contains("grabbing")||(this.hideTimeout&&clearTimeout(this.hideTimeout),this.checkScroll(!0),c.prefConfig.mouseLeaveToHide&&t.classList.remove("initShow"))},!1),t.addEventListener("mouseleave",I=>{if(c.prefConfig.mouseLeaveToHide){if(t.classList.contains("grabbing"))return;e.waitForHide()}e.preList&&(e.preList.style.visibility="hidden",e.listArrow.style.cssText="")},!1),this.touched=!0,c.prefConfig.initShow?t.classList.add("initShow"):this.touched=!1,c.prefConfig.minSizeMode&&(t.classList.add("minSizeMode"),t.classList.add("minSizeModeClose")),Zt&&!c.prefConfig.resizePage){let I=H=>{this.touched=!1,t.classList.remove("initShow")},M=H=>{this.touched||this.funcKeyCall||(this.touched=!0,t.classList.add("disable-pointer"),H.stopPropagation(),setTimeout(()=>{t.classList.remove("disable-pointer")},250))};X(document).addEventListener("touchstart",I,{passive:!0,capture:!1}),t.addEventListener("touchstart",M,{passive:!1,capture:!0})}this.bar=t,this.con=a;let v=document.createElement("span");v.className="search-jumper-tips",v.style.opacity=0,a.appendChild(v),v.addEventListener("mouseenter",I=>{e.hideTimeout&&clearTimeout(e.hideTimeout)},!1),v.addEventListener("click",I=>{if(A&&I.detail){A=!1,I.preventDefault(),I.stopPropagation();return}let M=I.target.dataset,H=I.target.innerText;if(M){if(typeof M.read<"u"){let Y=new SpeechSynthesisUtterance("");Y.volume=M.volume||1,Y.rate=M.rate||1,Y.pitch=M.pitch||1,Y.lang=M.lang||"",Y.text=M.read||H,window.speechSynthesis.speak(Y)}typeof M.copy<"u"&&Ge(M.copy||H),M.search&&(At=H,e.searchBySiteName(M.search)),typeof M.paste<"u"&&D&&(/INPUT|TEXTAREA/i.test(D.nodeName)&&D.getAttribute("aria-readonly")!="true"||D.contentEditable=="true")&&ai(D,M.paste||H),typeof M.close<"u"&&(e.tips.style.opacity=0,e.tips.style.display="none",ie(e.tips,""))}},!1);let C,g,k,A=!1,$=I=>{if(!k||I.pointerId!==C.id)return;let M=xt(I)-C.x,H=Ct(I)-C.y;Math.abs(M)+Math.abs(H)<5||(v.style.right===""?v.style.setProperty("left",g.left+M+"px","important"):v.style.setProperty("right",g.right-M+"px","important"),v.style.bottom===""?v.style.setProperty("top",g.top+H+"px","important"):v.style.setProperty("bottom",g.bottom-H+"px","important"),A=!0)},z=I=>{!k||I.pointerId!==C.id||(k.hasPointerCapture(I.pointerId)&&k.releasePointerCapture(I.pointerId),k=null,v.classList.remove("draging"))};v.addEventListener("pointerdown",I=>{if(I.button!==0||!I.isPrimary||(A=!1,I.target!==v&&!I.target.closest("[data-drag]"))||I.target.closest("button, input, textarea, select, [data-close]"))return;I.preventDefault(),I.stopPropagation(),C={x:xt(I),y:Ct(I),id:I.pointerId};let M=getComputedStyle(v);g={left:parseFloat(M.left),right:parseFloat(M.right),top:parseFloat(M.top),bottom:parseFloat(M.bottom)},k=I.target,v.classList.add("draging"),k.setPointerCapture(I.pointerId)}),v.addEventListener("pointermove",$),v.addEventListener("pointerup",z),v.addEventListener("pointercancel",z),v.addEventListener("lostpointercapture",z),this.tips=v;let W=document.createElement("div");W.className="searchJumperNavBar",W.style.display="none",ie(W,`
                  <svg class="closeNavBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close navigation</title>${lr}</svg>
                  <div class="minNavBtn" title="Minimize navigation">-</div>
                  <div id="navMarks"></div>
                  <div class="maxNavBtn" title="Restore input"><img src="${kt}" /></div>
                  <div class="navPointer">></div>
                `),a.appendChild(W);let T=document.createElement("span");T.title=J("expand"),T.className="searchJumperExpand search-jumper-btn",ie(T,`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect height="450" width="600" y="300" x="200" fill="#fff"></rect><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 640L240 432l45.6-45.6L512 613.6l226.4-226.4 45.6 45.6L512 704z"></path></svg>
                `),this.searchJumperExpand=T,this.navMarks=W.querySelector("#navMarks"),this.closeNavBtn=W.querySelector(".closeNavBtn"),this.minNavBtn=W.querySelector(".minNavBtn"),this.maxNavBtn=W.querySelector(".maxNavBtn"),this.searchJumperNavBar=W,this.navPointer=W.querySelector(".navPointer"),this.navPointer.style.display="none";let E=document.createElement("div");E.className="search-jumper-input",ie(E,`<span class="closeBtn">\xD7</span>
                <input type="radio" id="filterSitesTab" name="tab" ${c.prefConfig.defaultFindTab?"":'checked="checked"'} />
                <label for="filterSitesTab">${J("filterSites")}</label>
                <input type="radio" id="searchInPageTab" name="tab" ${c.prefConfig.defaultFindTab?'checked="checked"':""} />
                <label for="searchInPageTab">${J("searchInPage")}</label>
                <div class="line"></div>
                <div class="content-container">
                  <div class="inputGroup" id="filterSites">
                    <input spellcheck="false" id="searchJumperInput" autocomplete="on" title="${J("inputTitle")}" placeholder="${J("inputPlaceholder")}" list="filterGlob" />
                    <input spellcheck="false" id="searchJumperInputKeyWords" autocomplete="on" placeholder="${J("inputKeywords")}" list="suggest" />
                    <datalist id="filterGlob">
                    </datalist>
                    <datalist id="suggest">
                    </datalist>
                    <span class="search-jumper-lock-input"></span>
                    <span class="svgBtns">
                      <svg id="copyEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("copyEleBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="openLinkBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("openLinkBtn")}</title><path d="M429.013333 640A32 32 0 0 1 384 594.986667l37.76-37.76-22.826667-22.613334-135.68 135.68 90.453334 90.453334 135.68-135.68-22.613334-22.613334zM534.613333 398.933333l22.613334 22.613334L594.986667 384A32 32 0 0 1 640 429.013333l-37.76 37.76 22.613333 22.613334 135.68-135.68-90.453333-90.453334z"/><path d="M512 21.333333a490.666667 490.666667 0 1 0 490.666667 490.666667A490.666667 490.666667 0 0 0 512 21.333333z m316.8 354.986667l-181.12 181.12a32 32 0 0 1-45.226667 0L557.226667 512 512 557.226667l45.226667 45.226666a32 32 0 0 1 0 45.226667l-181.12 181.12a32 32 0 0 1-45.226667 0l-135.68-135.68a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0L466.773333 512 512 466.773333l-45.226667-45.226666a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0l135.68 135.68a32 32 0 0 1 0 45.226667z"/></svg>
                      <svg id="maxEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("maxEleBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="minEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("minEleBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="pickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("multiPickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                    </span>
                  </div>
                  <div class="inputGroup" id="searchInPage">
                    <span class="lockWords"></span>
                    <input spellcheck="false" id="searchJumperInPageInput" autocomplete="on" title="${J("inPageTips")}" placeholder="${J("inPagePlaceholder")}" />
                    <span class="svgBtns">
                      <svg id="editBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("editBtn")}</title><path d="M928 365.664a32 32 0 0 0-32 32V864a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h429.6a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v704a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V397.664a32 32 0 0 0-32-32z"></path><path d="M231.616 696.416a38.4 38.4 0 0 0 44.256 53.792l148-38.368L950.496 185.248 814.72 49.472 290.432 573.76l-58.816 122.656z m111.808-85.12L814.72 140l45.248 45.248-468.992 468.992-77.824 20.16 30.272-63.104z"></path></svg>
                      <svg id="addWord" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("addWord")}</title><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z"></path></svg>
                      <svg id="emptyBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("emptyBtn")}</title><path d="m159.45829,231.40004l-48.83334,0a36.625,34.1375 0 0 1 0,-68.275l805.75004,0a36.625,34.1375 0 0 1 0,68.275l-683.6667,0l0,603.09581a61.04167,56.89583 0 0 0 61.04167,56.89584l439.50002,0a61.04167,56.89583 0 0 0 61.04167,-56.89584l0,-500.68332a36.625,34.1375 0 0 1 73.25,0l0,500.68332c0,69.12844 -60.12604,125.17084 -134.29167,125.17084l-439.50002,0c-74.16563,0 -134.29167,-56.0424 -134.29167,-125.17084l0,-603.09581zm256.37501,-113.79167a36.625,34.1375 0 0 1 0,-68.275l195.33334,0a36.625,34.1375 0 0 1 0,68.275l-195.33334,0zm-36.625,307.23749a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999zm195.33334,0a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999z"/></svg>
                      <svg id="copyInPageBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("copyInPageBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="wordModeBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("wordModeBtn")}</title><path d="M832 128c38.4 0 64 25.6 64 64v640c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V192c0-38.4 25.6-64 64-64h640m0-64H192c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z"></path><path d="M736 812.8h-448c-19.2 0-32-12.8-32-32s12.8-32 32-32h448c19.2 0 32 12.8 32 32 0 12.8-12.8 32-32 32zM320 704c-19.2-6.4-25.6-25.6-19.2-44.8l185.6-454.4c6.4-12.8 25.6-19.2 38.4-12.8 19.2 6.4 25.6 25.6 19.2 44.8l-185.6 454.4c-6.4 12.8-25.6 19.2-38.4 12.8z"></path><path d="M704 691.2c19.2-6.4 25.6-25.6 19.2-44.8L544 211.2c-6.4-19.2-25.6-25.6-38.4-19.2-19.2 6.4-25.6 25.6-19.2 38.4l179.2 441.6c6.4 19.2 25.6 25.6 38.4 19.2z"></path><path d="M371.2 492.8h256v64h-256z"></path></svg>
                      <svg id="recoverBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("recoverBtn")}</title><path d="M502.26 289.06c-0.02 16.95 13.26 30.94 30.18 31.8 123.47 8.79 236.97 70.94 310.89 170.21 73.92 99.28 100.91 225.84 73.93 346.65-41.65-181.74-195.38-316.12-381.05-333.08-8.89-0.6-17.63 2.55-24.09 8.7a31.798 31.798 0 0 0-9.86 23.64v85.15a32.343 32.343 0 0 1-50.67 26.41L114.21 413.02a32.341 32.341 0 0 1-14.46-26.95c0-10.84 5.43-20.96 14.46-26.95L451.6 124.68a32.358 32.358 0 0 1 33.28-2.03 32.355 32.355 0 0 1 17.39 28.44v137.97h-0.01z"></path></svg>
                      <svg id="saveRuleBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("saveRuleBtn")}</title><path d="M579.7 291.4c18.8 0 34.1-15.3 34.1-34.1v-34.1c0-18.8-15.4-34.1-34.1-34.1-18.8 0-34.1 15.3-34.1 34.1v34.1c0 18.7 15.4 34.1 34.1 34.1zM944.7 216.3L808.2 79.9c-6.8-6.8-15.3-10.2-23.9-10.2H170.4c-56.3 0-102.3 46-102.3 102.3v682.1c0 56.3 46 102.3 102.3 102.3H852.5c56.3 0 102.3-46 102.3-102.3V240.2c0.1-8.5-3.3-17-10.1-23.9zM358 137.9h307v182.5c0 11.9-10.2 22.2-22.2 22.2H380.2c-11.9 0-22.2-10.2-22.2-22.2V137.9z m358.1 750.3H306.9V652.9c0-20.5 17.1-37.5 37.5-37.5h334.2c20.5 0 37.5 17 37.5 37.5v235.3z m170.6-34.1c0 18.8-15.3 34.1-34.1 34.1h-66.5V652.9c0-58-47.7-105.7-105.7-105.7h-336c-58 0-105.7 47.7-105.7 105.7v235.3h-68.2c-18.8 0-34.1-15.3-34.1-34.1V172c0-18.8 15.3-34.1 34.1-34.1h119.4v182.5c0 49.5 40.9 90.4 90.4 90.4h262.6c49.5 0 90.4-40.9 90.4-90.4V137.9h37.5l116 116v600.2z"></path></svg>
                      <svg id="pinBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("pinBtn")}</title><path d="m674.8822,92.83803a81.61801,81.04246 0 0 1 25.30158,17.09996l213.75757,212.46631a81.61801,81.04246 0 0 1 -24.70304,131.36982l-75.74151,33.30845l-142.09696,141.257l-11.26329,155.3854a81.61801,81.04246 0 0 1 -139.13151,51.46196l-137.98885,-137.15085l-235.14149,234.56388l-57.83996,-57.18896l235.27751,-234.69896l-142.7499,-141.85131a81.61801,81.04246 0 0 1 51.6642,-138.09635l160.95072,-11.94025l139.5668,-138.74469l32.78324,-75.09935a81.61801,81.04246 0 0 1 107.35489,-42.14208zm-32.45675,74.36997l-38.95901,89.22775l-171.94193,170.99958l-191.25821,14.1284l338.46989,336.3262l13.43977,-185.47917l174.33607,-173.32279l89.69819,-39.44067l-213.78477,-212.43929z"></path></svg>
                      <svg id="locBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("locBtn")}</title><path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"></path></svg>
                    </span>
                    <div id="addons"></div>
                  </div>
                </div>
                <div id="rightSizeChange"></div>
                `),a.appendChild(E),this.searchInputDiv=E,this.searchInput=E.querySelector("#searchJumperInput"),this.searchJumperInputKeyWords=E.querySelector("#searchJumperInputKeyWords"),this.searchLockInput=E.querySelector(".search-jumper-lock-input"),this.searchJumperInPageInput=E.querySelector("#searchJumperInPageInput"),this.pickerBtn=E.querySelector("#pickerBtn"),this.minEleBtn=E.querySelector("#minEleBtn"),this.maxEleBtn=E.querySelector("#maxEleBtn"),this.copyEleBtn=E.querySelector("#copyEleBtn"),this.openLinkBtn=E.querySelector("#openLinkBtn"),this.editBtn=E.querySelector("#editBtn"),this.addWord=E.querySelector("#addWord"),this.recoverBtn=E.querySelector("#recoverBtn"),this.wordModeBtn=E.querySelector("#wordModeBtn"),this.saveRuleBtn=E.querySelector("#saveRuleBtn"),this.pinBtn=E.querySelector("#pinBtn"),this.locBtn=E.querySelector("#locBtn"),this.emptyBtn=E.querySelector("#emptyBtn"),this.copyInPageBtn=E.querySelector("#copyInPageBtn"),this.closeBtn=E.querySelector(".closeBtn"),this.filterSites=E.querySelector("#filterSites"),this.filterSitesTab=E.querySelector("#filterSitesTab"),this.searchInPageTab=E.querySelector("#searchInPageTab"),this.searchInPageLockWords=E.querySelector("#searchInPage>.lockWords"),this.contentContainer=E.querySelector(".content-container"),this.rightSizeChange=E.querySelector("#rightSizeChange"),this.filterGlob=E.querySelector("#filterGlob"),this.suggestDatalist=E.querySelector("#suggest"),this.addonsList=E.querySelector("#addons"),this.fakeTextareas=new Map,this.addonCheckboxDict={}}showInPageSearch(){this.searchInPageTab.checked=!0,this.showSearchInput(),this.initSetInPageWords(),this.searchJumperInPageInput.value="",this.initShowSearchInput=!0}showFilterSearch(){this.filterSitesTab.checked=!0,this.showSearchInput()}initSetInPageWords(){if(this.searchInPageTab.checked&&!this.searchJumperInPageInput.value){let e=We()||this.searchJumperInputKeyWords.value.replace(/^\*/,"")||Oe();if(e)try{e=decodeURIComponent(e)}catch{}if(this.lockWords&&this.lockWords.indexOf(e)!==-1)return;this.searchJumperInPageInput.value=e||$e,this.lockWords||this.submitIgnoreSpace(this.searchJumperInPageInput.value)}}anylizeInPageWords(e,t){if(!e)return[];let i=this,r=[];if(this.lockWords||(e.indexOf("$c")===0&&e.length>2?e=e.substr(3).trim():e.indexOf("$o")===0&&(e=e.substr(2).trim())),this.splitSep){let a=this.wordModeBtn.classList.contains("checked")?new RegExp(`[\\${this.splitSep} ]`):this.splitSep;e.split(a).sort((s,o)=>o.length-s.length).forEach(s=>{let o=s;if(s=s.trim(),!s||t&&(s.length<(c.prefConfig.limitInPageLen||1)||(c.prefConfig.ignoreWords||[]).includes(s.toLowerCase())))return;let p="",h="",d=!1,m,u,f,w=!1,b="",j=/\$t{(.*?)}($|\$)/,v=s.match(j),C=0;if(v)if(p=v[1],s=s.replace(j,"$2"),p=="\\$popup")p="$popup";else if(p=="\\@popup")p="@popup";else{let I=p.match(/^[\$@]popup(\((.*)\))?$/);I&&(p="",d=!0,I[1]&&(C=I[2]||"1"))}let g=/\$p{(.*?)}($|\$)/,k=s.match(g);k&&(m=parseInt(k[1])||0,s=s.replace(g,"$2"));let A=/\$in{(.*?)}($|\$)/,$=s.match(A);$&&(f=$[1]||"",s=s.replace(A,"$2"));let z=/\$s{(.*?)}($|\$)/,W=s.match(z);if(W){let I=W[1],M="";W=W[1].match(/(.*?);(.*)/),W&&(I=W[1],M=W[2]),h=i.getHighlightStyle(i.curWordIndex,I,M),s=s.replace(z,"$2")}else h=i.getHighlightStyle(i.curWordIndex,"","");let T="";if(s.indexOf("@")===0){T=s;let I=c.prefConfig.inPageRule&&c.prefConfig.inPageRule[s];I&&(s=I)}else s=s.replace(/^\\@/,"@");let E=s.match(/^\/(.*)\/([il]*)($|\$)/);E&&(w=!0,s=E[1],b=E[2].indexOf("i")!=-1?"i":"",u=E[2].indexOf("l")!=-1),T||(T=s),!i.highlightSpans[T]&&(r.push({content:s,showWords:T,isRe:w,link:u,reCase:b,title:p,style:h,oriWord:o,hideParent:m,inRange:f,popup:d,showTips:C,init:t}),i.curWordIndex++)})}else{this.curWordIndex=0;let n=(this.lockWords||"").replace(/^\$o/,"")+e;r=[{content:n,showWords:n,isRe:!1,reCase:"",title:"",style:i.getHighlightStyle(i.curWordIndex,"",""),init:t}]}return r}submitInPageWords(e){let t=this,i=this.searchJumperInPageInput.value,r=[];if(!i){if(!this.lockWords)this.highlight("");else{this.highlight("insert");for(let a in this.highlightSpans){let s=this.highlightSpans[a],o=this.marks[a];this.setHighlightSpan(s,0,o)}}return r}this.initHighlight=!!e,this.initHighlight&&setTimeout(()=>{this.initHighlight=!1},500),this.lockWords||(i.indexOf("$c")===0&&i.length>2?this.splitSep=i.substr(2,1):i.indexOf("$o")===0?this.splitSep=null:this.splitSep="\u25CE",this.curWordIndex=0),this.searchJumperInPageInput.value="";let n=this.anylizeInPageWords(i,this.initHighlight);return!n||n.length==0||(this.lockWords?this.lockWords+=(this.lockWords.indexOf(this.splitSep)===this.lockWords.length-this.splitSep.length?"":this.splitSep)+i:this.lockWords=i,this.splitSep||(ie(this.searchInPageLockWords,""),this.highlight("")),this.highlight(n),n.forEach(a=>{if(!a)return;let s=document.createElement("span");ie(s,a.showWords),s.title=a.title?JSON.parse('"'+a.title+'"'):a.showWords;let o=a.style.match(/background: *(#?\w+)/);o&&o[1].indexOf("unset")===-1&&(s.style.background=o[1]);let p=a.style.match(/color: *(#?\w+)/);p&&(s.style.color=p[1]),s.addEventListener("click",f=>(f.stopPropagation(),f.preventDefault(),!1)),s.oncontextmenu=f=>{f.preventDefault()},s.addEventListener("dblclick",f=>{f.stopPropagation(),f.preventDefault(),f.target.nodeName.toUpperCase()!=="EM"&&(f.ctrlKey||f.shiftKey||f.altKey||f.metaKey||this.lockWords.indexOf(a.oriWord)!==-1&&this.showModifyWindow(a,s))},!0),s.addEventListener("mousedown",f=>{f.button===0?this.focusHighlightByText(a.showWords,!0,s):f.button===2&&this.focusHighlightByText(a.showWords,!1,s)});let h=!1;s.addEventListener(qt(),f=>{if(f.preventDefault(),f.stopPropagation(),h)return;h=!0,setTimeout(()=>{h=!1},100);let w;if(f.type!=="wheel"){let b=0;typeof f.axis=="number"?f.axis==2&&(b=f.detail):(typeof f.wheelDeltaY>"u"||f.wheelDeltaY!=0)&&(b=-f.wheelDelta/40),w=b}else w=f.deltaY;this.focusHighlightByText(a.showWords,w>0,s)},{passive:!1,capture:!1}),s.addEventListener("editword",f=>{s.parentNode.removeChild(s),this.removeHighlightWord(a),this.searchJumperInPageInput.value=a.content});let d=document.createElement("div");d.addEventListener("mousedown",f=>{f.stopPropagation(),f.preventDefault(),s.parentNode.removeChild(s),this.removeHighlightWord(a)}),d.className="lockWordTool",ie(d,`<span title="${J("removeBtn")}">\xD7</span>`),s.appendChild(d);let m=document.createElement("div");m.addEventListener("mousedown",f=>{f.stopPropagation(),f.preventDefault(),this.lockWords.indexOf(a.oriWord)!==-1&&this.showModifyWindow(a,s)}),m.className="lockWordTool modifyBtn",ie(m,"<span>+</span>"),s.appendChild(m);let u=this.marks[a.showWords];this.setHighlightSpan(s,-1,u),this.highlightSpans[a.showWords]=s,this.searchInPageLockWords.appendChild(s),r.push(s)}),this.searchInPageLockWords.scrollTop<=0&&(this.searchInPageLockWords.scrollTop=this.searchInPageLockWords.scrollHeight),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",this.navMarks.innerHTML&&this.con.style.display==="none"&&(this.con.style.display="")),r}async showCustomInputWindow(e,t){return new Promise(i=>{this.customInputCallback=t;let r=()=>{let p=this.finalSearch.dataset.url,h=0;[].forEach.call(this.customGroup.children,d=>{let m=d.value;if(d.className=="select")m=d.children[0].value;else if(/^DIV$/i.test(d.nodeName))return;p=p.replaceAll("\u25CE"+h,m||""),h++}),this.finalSearch.value=p};if(!this.customInputFrame){let h=Be(`
                         .customInputFrame-body {
                             width: 300px;
                             min-height: 200px;
                             position: fixed;
                             text-align: left;
                             left: 50%;
                             top: 50%;
                             margin-top: -160px;
                             margin-left: -150px;
                             z-index: 2147483647;
                             background-color: #ffffff;
                             border: 1px solid #282a2d1a;
                             border-radius: 10px;
                             opacity: 1;
                             color-scheme: light dark;
                             box-shadow: 0 12px 40px #20263133;
                             color: #282a2d;
                             font-family: Arial, "Microsoft YaHei", "Noto Sans SC", sans-serif;
                             font-size: initial;
                         }
                         .customInputFrame-body #customGroup {
                             max-height: 50vh;
                             overflow: auto;
                             scrollbar-width: none;
                         }
                         .customInputFrame-body #customGroup::-webkit-scrollbar {
                             width: 0 !important;
                             height: 0 !important;
                         }
                         .customInputFrame-title {
                             background: #357dc5!important;
                             display: flex!important;
                             align-items: center!important;
                             justify-content: center!important;
                             color: white!important;
                             font-weight: bold;
                             font-size: 16px!important;
                             border-radius: 10px 10px 0 0!important;
                         }
                         .customInputFrame-title>img {
                             margin: 5px;
                             height: 32px;
                             width: 32px;
                         }
                         .customInputFrame-input-title {
                             font-size: 9pt;
                             font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                             display: inline-block;
                             background-color: white;
                             position: relative;
                             left: 20px;
                             padding: 0px 4px;
                             text-align: left;
                             color: #646464;
                             word-break: break-all;
                             max-width: 85%;
                             z-index: 1;
                         }
                         .customInputFrame-body input[type=text],
                         .customInputFrame-body input[type=number],
                         .customInputFrame-body textarea,
                         .customInputFrame-body .select {
                             resize: both;
                             font-size: 11pt;
                             font-weight: normal;
                             border-radius: 8px;
                             border: 1px solid #282a2d26;
                             margin: 4px;
                             font-family: inherit;
                             background-color: #FFF;
                             width: calc(100% - 8px);
                             color: #4A4A4A;
                             margin-top: -8px;
                             padding: 4px;
                             padding-top: 8px;
                             box-sizing: border-box;
                         }
                         .customInputFrame-buttons {
                             text-align: center;
                             margin: 8px 4px;
                             display: flex;
                             justify-content: space-evenly;
                         }
                         .customInputFrame-buttons>button {
                             width: 32%;
                             font-size: 14px;
                             cursor: pointer;
                             border: 1px solid #1976d2;
                             border-radius: 8px;
                             transition: background-color .15s, box-shadow .15s;
                             color: #fff;
                             background-color: #357dc5;
                             line-height: 25px;
                             min-height: 32px;
                         }
                         .customInputFrame-buttons>button:hover {
                             color: #e3f2fd;
                         }
                         .customInputFrame-body .select {
                             height: 30px;
                             position: relative;
                         }
                         .customInputFrame-body .select>input[type=text] {
                             top: 0px;
                             left: -7px;
                             position: relative;
                             border: unset!important;
                             width: calc(100% - 25px);
                             padding-bottom: 3px;
                             margin-bottom: -30px;
                             float: left;
                             background: unset;
                             height: 28px;
                             outline: unset;
                         }
                         .customInputFrame-body .select>p {
                             padding: 0;
                             margin: 0;
                             position: absolute;
                             pointer-events: none;
                         }
                         .customInputFrame-body .select>.options {
                             position: absolute;
                             visibility: hidden;
                             opacity: 0;
                             transition: opacity .1s;
                             background-color: #FFF;
                             color: #4A4A4A;
                             border: 1px solid #282a2d26;
                             border-radius: 8px;
                             z-index: 10;
                             width: auto;
                             max-width: 35%;
                             right: calc(50% - 147px);
                             margin-top: -10px;
                             position: fixed;
                         }
                         .customInputFrame-body .select>input:focus+p {
                             display: none;
                         }
                         .customInputFrame-body .select:hover>.options {
                             visibility: visible;
                             opacity: 1;
                         }
                         .customInputFrame-body .select>.options>p {
                             cursor: pointer;
                             min-height: 20px;
                             padding: 3px 0;
                             margin: 0;
                         }
                         .customInputFrame-body .select>.options>p:hover {
                             background: aliceblue;
                         }
                         .customInputFrame-body div.select:after {
                             content: "\u25BC";
                             position: absolute;
                             right: 6px;
                             top: 8px;
                             font-size: 9px;
                         }
                         @media (prefers-color-scheme: dark) {
                           .customInputFrame-body,
                           .customInputFrame-input-title,
                           .customInputFrame-body input,
                           .customInputFrame-body textarea,
                           .customInputFrame-body .select {
                             background-color: #1c2127!important;
                             color: #d3d8df!important;
                           }
                           .customInputFrame-body input:focus,
                           .customInputFrame-body textarea:focus,
                           .customInputFrame-body .select:focus {
                             background-color: #283340!important;
                           }
                           .customInputFrame-body input,
                           .customInputFrame-body textarea,
                           .customInputFrame-body .select {
                             border: 1px solid #ffffff33!important;
                             background-color: #181c20!important;
                           }
                           .customInputFrame-title,
                           .customInputFrame-buttons>button {
                             background: #2a5c8d!important;
                           }
                           .customInputFrame-body .select>.options {
                             border: 1px solid #ffffff33!important;
                             background-color: #1c2127;
                             color: #d3d8df;
                           }
                           .customInputFrame-body .select>.options>p:hover {
                             background: #283340;
                           }
                         }
                        `),d=document.createElement("div");this.customInputFrame=d,ie(d,`
                         <div class="customInputFrame-body">
                             <a href="${mt}" class="customInputFrame-title" target="_blank">
                                 <img width="32px" height="32px" src="${kt}" />${J("customInputFrame")}
                             </a>
                             <div id="customGroup">
                             </div>
                             <div class="customInputFrame-input-title">${J("finalSearch")}</div>
                             <textarea name="finalSearch" type="text"></textarea>
                             <div class="customInputFrame-buttons">
                                 <button id="cancel" type="button">${J("cancel")}</button>
                                 <button id="customSubmit" type="button">${J("customSubmit")}</button>
                             </div>
                         </div>
                        `),Xe||d.appendChild(h),d.querySelector("#cancel").addEventListener("click",b=>{d.parentNode&&d.parentNode.removeChild(d),i("")}),d.addEventListener("keydown",b=>{b.keyCode==13&&w.click()});let u=this.customInputFrame.querySelector("#customGroup");this.customGroup=u;let f=this.customInputFrame.querySelector("[name='finalSearch']");this.finalSearch=f,f.addEventListener("click",b=>{r()});let w=d.querySelector("#customSubmit");w.addEventListener("click",b=>{r(),f.value&&this.customInputCallback&&this.customInputCallback(f.value),i(f.value),d.parentNode&&d.parentNode.removeChild(d)})}this.customInputFrame.parentNode&&this.customInputFrame.parentNode.removeChild(this.customInputFrame),ie(this.customGroup,"");let n=e,a=n.match(/%input{(.*?[^\\])}/),s=0;for(;a;){let p=document.createElement("div");p.className="customInputFrame-input-title";let h=a[1];if(/^".*","/.test(h)?h=h.substr(1,h.length-2).split('","'):h=h.replace(/\\,/g,"\u25CESJ").split(",").map(d=>d.replace(/◎SJ/g,",")),h.length===1){h=h[0].replace(/\\\|/g,"\u25CESJ").split("|").map(m=>m.replace(/◎SJ/g,"|")),p.innerText=h[0],this.customGroup.appendChild(p);let d=document.createElement("input");d.type="text",h.length>1&&(d.title=h[1]),this.customGroup.appendChild(d)}else if(h.length>=2){let d=h[0].replace(/\\}/g,"}");/^'.*'\/'/.test(d)?d=d.substr(1,d.length-2).split("'/'"):d=d.replace(/\\\//g,"\u25CESJ").split("/").map(C=>C.replace(/◎SJ/g,"/"));let m=h.slice(1).join(",");/^'.*'\/'/.test(m)?m=m.substr(1,m.length-2).split("'/'"):m=m.replace(/\\\//g,"\u25CESJ").split("/").map(C=>C.replace(/◎SJ/g,"/"));let u=d.length===m.length+1;p.innerText=d[0],this.customGroup.appendChild(p);let f=document.createElement("input");f.type="text";let w=document.createElement("div");w.className="select",w.appendChild(f);let b=document.createElement("p");b.innerText="Select option",w.appendChild(b);let j=document.createElement("div");j.className="options",w.appendChild(j);let v=document.createElement("p");v.setAttribute("value",""),ie(v,"<b>Select option</b>"),j.appendChild(v),v.addEventListener("click",C=>{j.style.visibility="hidden",setTimeout(()=>{j.style.visibility=""},0),f.value="",b.innerText="Select option",r()});for(let C=0;C<m.length;C++){let g=m[C],k=document.createElement("p");if(k.setAttribute("value",g),u){let A=d[C+1];A=A.replace(/\\\|/g,"\u25CESJ").split("|").map($=>$.replace(/◎SJ/g,"|")),k.innerText=A[0],A.length>1&&(k.title=A[1])}else k.innerText=g;k.addEventListener("click",A=>{j.style.visibility="hidden",setTimeout(()=>{j.style.visibility=""},0),f.value=k.getAttribute("value"),b.innerText="",r()}),j.appendChild(k)}f.addEventListener("change",C=>{b.innerText=""}),w.addEventListener("mouseenter",C=>{w.focus(),j.style.marginTop=-this.customGroup.scrollTop+20+"px"}),this.customGroup.appendChild(w)}n=n.replace(a[0],"\u25CE"+s).replaceAll(`input{${p.innerText}}`,"\u25CE"+s),s++,a=n.match(/%input{(.*?[^\\])}/)}this.finalSearch.dataset.url=n,this.finalSearch.value=n.replace(/◎/g,""),this.addToShadow(this.customInputFrame);let o=this.customInputFrame.children[0];o.style.marginTop=-o.offsetHeight/2+"px"})}showModifyWindow(e,t){let i;if(this.modifyWord={},this.addNew=!e&&!t,!this.addNew){if(i=e.oriWord,!i)return;this.modifyWord=e,this.modifySpan=t}if(!this.modifyFrame){let u=Be(`
                    .searchJumperModify-body {
                        width: 300px;
                        min-height: 200px;
                        position: fixed;
                        text-align: left;
                        left: 50%;
                        top: 50%;
                        margin-top: -160px;
                        margin-left: -150px;
                        z-index: 100000;
                        background-color: #ffffff;
                        border: 1px solid #282a2d1a;
                        border-radius: 10px;
                        opacity: 1;
                        color-scheme: light dark;
                        box-shadow: 0 12px 40px #20263133;
                        color: #282a2d;
                        font-family: Arial, "Microsoft YaHei", "Noto Sans SC", sans-serif;
                    }
                    .searchJumperModify-title {
                        background: #357dc5!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 16px!important;
                        border-radius: 10px 10px 0 0!important;
                    }
                    .searchJumperModify-title>img {
                        margin: 5px;
                        height: 32px;
                        width: 32px;
                    }
                    .searchJumperModify-input-title {
                        font-size: 9pt;
                        font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                        display: inline-block;
                        background-color: white;
                        position: relative;
                        left: 20px;
                        padding: 0px 4px;
                        text-align: left;
                        color: #646464;
                    }
                    .searchJumperModify-body>input[type=text],
                    .searchJumperModify-body>input[type=number],
                    .searchJumperModify-body>textarea {
                        resize: both;
                        font-size: 11pt;
                        font-weight: normal;
                        border-radius: 8px;
                        border: 1px solid #282a2d26;
                        margin: 4px;
                        font-family: inherit;
                        background-color: #FFF;
                        width: calc(100% - 8px);
                        color: #4A4A4A;
                        margin-top: -8px;
                        padding: 4px;
                        padding-top: 8px;
                        box-sizing: border-box;
                    }
                    .searchJumperModify-buttons {
                        text-align: center;
                        margin: 8px 4px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperModify-buttons>button {
                        width: 32%;
                        font-size: 14px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 8px;
                        transition: background-color .15s, box-shadow .15s;
                        color: #fff;
                        background-color: #357dc5;
                        line-height: 25px;
                        min-height: 32px;
                    }
                    .searchJumperModify-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    #rangePickerBtn {
                        width: 28px;
                        float: right;
                        margin-top: -33px;
                        margin-right: 6px;
                        position: sticky;
                        display: block;
                        cursor: pointer;
                        background: rgb(255 255 255 / 80%);
                    }
                    .searchJumperModify-checkGroup {
                        margin: 5px;
                    }
                    #searchJumperModify-re + label ~ * {
                        display: none;
                    }
                    #searchJumperModify-re:checked + label ~ * {
                        display: inline;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperModify-body,
                      .searchJumperModify-input-title,
                      .searchJumperModify-body>input[type=text],
                      .searchJumperModify-body>input[type=number],
                      .searchJumperModify-body>textarea,
                      .searchJumperModify-body>select {
                        background-color: #1c2127!important;
                        color: #d3d8df!important;
                      }
                      .searchJumperModify-body>input:focus,
                      .searchJumperModify-body>textarea:focus,
                      .searchJumperModify-body>select:focus {
                        background-color: #283340!important;
                      }
                      .searchJumperModify-body>input[type=text],
                      .searchJumperModify-body>input[type=number],
                      .searchJumperModify-body>textarea {
                        border: 1px solid #ffffff33!important;
                      }
                      .searchJumperModify-title,
                      .searchJumperModify-buttons>button {
                        background: #2a5c8d!important;
                      }
                      #rangePickerBtn {
                        background: rgb(0 0 0 / 80%);
                        fill: white;
                      }
                    }
                    `),f=document.createElement("div");this.modifyFrame=f,f.id="searchJumperModifyWord",ie(f,`
                     <div class="searchJumperModify-body">
                         <a href="${mt}" class="searchJumperModify-title" target="_blank">
                             <img onerror="this.style.display='none'" width="32px" height="32px" src="${kt}" />${J("modifyWord")}
                         </a>
                         <div class="searchJumperModify-input-title">${J("wordContent")}</div>
                         <input id="searchJumperHighlightWord" name="wordContent" placeholder="words" type="text"/>
                         <div class="searchJumperModify-checkGroup">
                             <input id="searchJumperModify-re" type="checkbox"/>
                             <label for="searchJumperModify-re">${J("re")}</label>
                             <input id="searchJumperModify-case" type="checkbox"/>
                             <label for="searchJumperModify-case">${J("ignoreCase")}</label>
                             <input id="searchJumperModify-link" type="checkbox"/>
                             <label for="searchJumperModify-link">${J("filterLink")}</label>
                         </div>
                         <div class="searchJumperModify-input-title">${J("wordHide")}</div>
                         <input name="wordHide" min="0" placeholder="${J("wordHideTips")}" type="number" />
                         <div class="searchJumperModify-input-title">${J("wordRange")}</div>
                         <input name="wordRange" placeholder="#main" type="text" />
                         <svg id="rangePickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                         <div class="searchJumperModify-input-title">${J("wordStyle")}</div>
                         <input name="wordStyle" placeholder="orange or #333333;color:red;" type="text" />
                         <div class="searchJumperModify-input-title">${J("wordTitle")}</div>
                         <textarea name="wordTitle" type="text" placeholder="Text comment, or @popup to popup, @popup(1) to popup 1st showTips, @popup(name) to popup showTips of target engine"></textarea>
                         <div class="searchJumperModify-buttons">
                             <button id="cancel" type="button">${J("cancel")}</button>
                             <button id="modify" type="button">${J("modify")}</button>
                         </div>
                     </div>
                    `),Xe||f.appendChild(u),f.querySelector("#cancel").addEventListener("click",v=>{f.parentNode&&f.parentNode.removeChild(f)}),f.querySelector("#rangePickerBtn").addEventListener("click",v=>{Te.getSelector(C=>{s.value=C,f.style.display=""}),f.style.display="none"});let j=f.querySelector("#modify");this.modifyBtn=j,j.addEventListener("click",v=>{let C=r.value;if(this.splitSep&&(C=C.replaceAll(this.splitSep,"")),!C)return;let g=C!==this.modifyWord.showWords||h.checked!==this.modifyWord.isRe||d.checked!==this.modifyWord.link;p.checked&&C.indexOf("@")!==0&&(C=`/${C}/${h.checked?"i":""}${d.checked?"l":""}`);let k=o.value;k&&(this.splitSep&&(k=k.replaceAll(this.splitSep,"")),k=k>=0?k:0,C+=`$p{${k}}`);let A=n.value;A&&(this.splitSep&&(A=A.replaceAll(this.splitSep,"")),C+=`$s{${A}}`);let $=JSON.stringify(a.value).replace(/^"|"$/g,"");$&&(this.splitSep&&($=$.replaceAll(this.splitSep,"")),C+=`$t{${$}}`);let z=s.value;z&&(this.splitSep&&(z=z.replaceAll(this.splitSep,"")),z!==this.modifyWord.inRange&&(g=!0),C+=`$in{${z}}`),this.addNew?(this.wordModeBtn.classList.contains("checked")&&(this.wordModeBtn.classList.remove("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)),this.searchJumperInPageInput.value=C,this.submitInPageWords()):this.replaceWord(this.modifyWord,C,this.modifySpan,g),f.parentNode&&f.parentNode.removeChild(f)}),f.addEventListener("keydown",v=>{v.keyCode==13&&v.target&&v.target.nodeName=="INPUT"&&j.click()})}let r=this.modifyFrame.querySelector("[name='wordContent']"),n=this.modifyFrame.querySelector("[name='wordStyle']"),a=this.modifyFrame.querySelector("[name='wordTitle']"),s=this.modifyFrame.querySelector("[name='wordRange']"),o=this.modifyFrame.querySelector("[name='wordHide']"),p=this.modifyFrame.querySelector("#searchJumperModify-re"),h=this.modifyFrame.querySelector("#searchJumperModify-case"),d=this.modifyFrame.querySelector("#searchJumperModify-link");if(this.addNew)r.value="",n.value="",s.value="",o.value="",a.value="",p.checked=!1,h.checked=!1,d.checked=!1,this.modifyBtn.innerText=J("add");else{this.modifyBtn.innerText=J("modify");let m="",u=/\$s{(.*?)}($|\$)/,f=i.match(u);f&&(m=f[1]),r.value=e.showWords||"",n.value=m||"",s.value=e.inRange||"",p.checked=!!e.isRe,h.checked=!!e.reCase,d.checked=!!e.link,typeof e.hideParent<"u"&&(o.value=e.hideParent);try{e.popup?(a.value="@popup",e.showTips&&(a.value=`@popup(${e.showTips})`)):a.value=e.title!==e.showWords?JSON.parse('"'+e.title+'"'):""}catch(w){fe(w)}}this.addToShadow(this.modifyFrame)}replaceWord(e,t,i,r){if(r)i.parentNode&&i.parentNode.removeChild(i),this.removeHighlightWord(e),this.searchJumperInPageInput.value=t,this.submitInPageWords();else{let n="",a="",s=-1,o=/\$t{(.*?)}($|\$)/,p=t.match(o);p&&(n=p[1],n=JSON.parse('"'+n+'"')),e.title=n,i.title=n;let h=/\$s{(.*?)}($|\$)/,d=t.match(h);if(d){let w=d[1],b="";d=d[1].match(/(.*?);(.*)/),d&&(w=d[1],b=d[2]),a=this.getHighlightStyle(this.curWordIndex,w,b),e.style=a,i.style=a}let m=!1,u=/\$p{(.*?)}($|\$)/,f=t.match(u);f?(s=parseInt(f[1])||0,m=s!=e.hideParent):m=typeof e.hideParent<"u",m&&[].forEach.call(document.querySelectorAll(".searchJumper-hide"),w=>{w.dataset.content===e.showWords&&(w.classList.remove("searchJumper-hide"),w.style.display="",w.removeAttribute("data-content"))}),this.marks[e.showWords].forEach(w=>{if(w&&(w.title=n,a&&(w.style=a),m&&s!=-1)){let b=s,j=w.parentElement;for(;b-- >0&&j;)j=j.parentElement;j&&(j.dataset.content=e.showWords,j.classList.add("searchJumper-hide"),ie(j,""))}}),s==-1?delete e.hideParent:e.hideParent=s,this.lockWords=this.lockWords.replace(e.oriWord,t),e.oriWord=t}}removeHighlightWord(e){if(!this.lockWords||(this.splitSep||this.emptyInPageWords(),!e.oriWord)||this.lockWords.indexOf(e.oriWord)===-1)return;let t=this.lockWords.match(/^\$(c.|o)/),i,r=0;t=t?t[0]:"";let n=this.lockWords.replace(t,"").split(this.splitSep);if(i=n.indexOf(e.oriWord),this.wordModeBtn.classList.contains("checked")){i!=-1&&(n.splice(i,1),r=1);for(let s=0;s<n.length;s++){let o=n[s].split(/[ ]/);if(i=o.indexOf(e.oriWord),i!=-1)if(r++,r==1)o.splice(i,1),n[s]=o.join(" ");else break}this.lockWords=t+n.join(this.splitSep)}else{if(i<0)return;n.splice(i,1),r=n.indexOf(e.oriWord)!=-1?2:1,this.lockWords=t+n.join(this.splitSep)}if(delete this.highlightSpans[e.showWords],i=this.curHighlightWords.indexOf(e),i<0||(this.curHighlightWords.splice(i,1),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",r>1))return;this.marks[e.showWords].forEach(s=>{if(s.parentNode)if(s.dataset.block)s.parentNode&&s.parentNode.removeChild(s);else if(!/^MARK$/i.test(s.nodeName))s.classList.remove("searchJumper"),s.style.cssText=s.dataset.css||"",delete s.dataset.css;else{let o=document.createTextNode(s.firstChild.data);s.parentNode.replaceChild(o,s),o.parentNode.normalize()}}),delete this.marks[e.showWords];let a=[].slice.call(this.navMarks.children);[].forEach.call(a,s=>{s.dataset.content==e.showWords&&s.parentNode.removeChild(s)})}emptyInPageWords(){ie(this.searchInPageLockWords,""),this.highlight("")}focusHighlightByText(e,t,i){let r=this.marks[e];if(!r||r.length===0)return;e!=this.focusText?(this.focusIndex=0,this.focusText=e):t?this.focusIndex!=r.length-1?this.focusIndex=this.focusIndex+1:this.focusIndex=0:this.focusIndex!=0?this.focusIndex=this.focusIndex-1:this.focusIndex=r.length-1;let n=this.focusIndex;if(n>=r.length&&(n=0),t)for(;(!r[n].offsetParent||r[n].dataset.type)&&(n!=r.length-1?n=n+1:n=0,n!=this.focusIndex););else for(;(!r[n].offsetParent||r[n].dataset.type)&&(n!=0?n=n-1:n=r.length-1,n!=this.focusIndex););this.focusIndex=n,this.focusHighlight(r[this.focusIndex]),this.setHighlightSpan(i,this.focusIndex,r)}getRect(e){let t=e.getBoundingClientRect(),i={left:t.left,top:t.top,width:t.width,height:t.height},r=e.ownerDocument&&e.ownerDocument.defaultView,n=r&&r.frameElement;for(;n;){const a=n.getBoundingClientRect();i.left+=a.left,i.top+=a.top,r=r.parent,n=r.frameElement}return i}focusHighlight(e){if(!e)return;this.focusMark&&this.focusMark.removeAttribute("data-current"),this.focusMark=e,this.wPosBar||(this.wPosBar=document.createElement("div"),this.hPosBar=document.createElement("div"),this.wPosBar.className="searchJumperPosBar searchJumperPosW",this.hPosBar.className="searchJumperPosBar searchJumperPosH"),this.wPosBar.parentNode||(this.addToShadow(this.wPosBar),this.addToShadow(this.hPosBar));let t=this.getRect(e);this.wPosBar.style.top=t.top+document.documentElement.scrollTop+X(document).scrollTop+"px",this.wPosBar.style.height=t.height+"px",this.hPosBar.style.left=t.left+"px",this.hPosBar.style.width=t.width+"px",this.wPosBar.style.animationName="",this.hPosBar.style.animationName="";let i=this;setTimeout(async()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),e.dataset.current=!0,i.wPosBar.style.animationName="fadeit",i.hPosBar.style.animationName="fadeit",i.fixTimes=0;let r=window.innerHeight||document.documentElement.clientHeight;function n(){if(i.focusMark!=e)return;let a=i.getRect(e);if(i.wPosBar.style.top=a.top+document.documentElement.scrollTop+X(document).scrollTop+"px",i.hPosBar.style.left=a.left+"px",!(i.fixTimes>0&&a.top>r/3&&a.top<r/3*2)){if(++i.fixTimes==5)e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});else if(i.fixTimes>10){e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),i.wPosBar.style.animationName="",i.hPosBar.style.animationName="";return}setTimeout(()=>{n()},200)}}n()},0)}getHighlightSpanByText(e){return this.highlightSpans[e]}setHighlightSpan(e,t,i){if(!e)return;let r=e.querySelector("em");r||(r=document.createElement("em"),e.insertBefore(r,e.firstChild)),t++;let n=0;i&&i.length&&(n=0,i.forEach(a=>{a.dataset.type||n++})),ie(r,"["+t+"/"+n+"]")}getHighlightStyle(e,t,i){if(!t&&!i){let a=c.prefConfig.inPageWordsStyles[e];if(a)return a}i=i||"";function r(){let a,s,o;return a=Math.floor(256*Math.random()),s=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),a=a.toString(16),a.length===1&&(a="0"+a),s=s.toString(16),s.length===1&&(s="0"+s),o=o.toString(16),o.length===1&&(o="0"+o),"#"+a+s+o}function n(a){if(a.indexOf("#")!==0)return"";if(a==="#ffff00")return"black";a=a.substr(1);let s,o,p;s=parseInt(a.substr(0,2),16),o=parseInt(a.substr(2,2),16),p=parseInt(a.substr(4,2),16);let h=s*.299+o*.587+p*.114;s=255-s,o=255-o,p=255-p;let d=s*.299+o*.587+p*.114;return Math.abs(d-h)<=128?h>158?"#000000":"#FFFFFF":(s=s.toString(16),s.length===1&&(s="0"+s),o=o.toString(16),o.length===1&&(o="0"+o),p=p.toString(16),p.length===1&&(p="0"+p),"#"+s+o+p)}if(t||(t=c.prefConfig.firstFiveWordsColor[e]),!t)switch(e){case 0:t="#ffff00";break;case 1:t="#e91e63";break;case 2:t="#00bcd4";break;case 3:t="#008000";break;case 4:t="#800080";break;default:t=r();break}if(t){let a=n(t);a&&(a="color:"+a+"!important;"),t=`background:${t}!important;${a}`}return`${t}${i}`}createNavMark(e,t,i,r,n){let a=this,s=document.createElement("span"),o=qr(e,a.targetIframe);s.title=t.title||t.showWords,s.dataset.top=o,s.dataset.content=t.showWords,s.style.top=o/n*100+"%",s.style.background=e.style.background||"yellow",s.addEventListener("click",p=>(p.stopPropagation(),p.preventDefault(),a.focusIndex=i,a.focusHighlight(e),a.setHighlightSpan(a.getHighlightSpanByText(t.showWords),i,r),a.navPointer.style.display="",a.navPointer.style.top=s.offsetTop+33+"px",!1),!0),a.navMarks.appendChild(s)}anylizeDomWithTextPos(e,t){return t||(t={text:"",data:[]}),!e||!e.childNodes||!e.childNodes.length||e.nodeType==1&&!e.offsetParent&&!e.offsetHeight&&(!e.firstElementChild||!e.firstElementChild.offsetParent)||e.childNodes.forEach(i=>{if(i.classList&&i.classList.contains("searchJumper")||/^(img|svg|picture|br|hr|textarea)$/i.test(i.nodeName)){const r=t.text.length;t.text+=`
`,t.data.push({index:r,node:i,text:`
`})}else if(i.offsetParent||i.offsetHeight||i.firstElementChild&&i.firstElementChild.offsetParent)if(/^(div|h\d|p|form|ul|li|ol|dl|address|menu|table|fieldset|td)$/i.test(i.nodeName)){let r=t.text.length;t.text+=`
`,t.data.push({index:r,node:{},text:`
`}),t=this.anylizeDomWithTextPos(i,t),r=t.text.length,t.text+=`
`,t.data.push({index:r,node:{},text:`
`})}else t=this.anylizeDomWithTextPos(i,t);else if(i.nodeType===3){let r;if(i.parentNode.nodeType==1&&i.parentNode.childNodes.length==1?r=i.parentNode.innerText||i.data:r=i.data,!r||!r.trim())return;const n=t.text.length;t.text+=r,t.data.push({index:t.text.length-1,node:i,text:r})}}),t}highlightPopup(e,t){let i=this,r,n=a=>{r&&i.clingPos(e,i.tips)};e.addEventListener("mouseenter",a=>{if(e.addEventListener("mousemove",n),D!=e||!i.funcKeyCall){if(r=null,D=e,t.showTips)if(/^\d+$/.test(t.showTips)){let o=i.autoGetFirstType().querySelectorAll("a.search-jumper-btn[data-show-tips]:not(.notmatch)"),p=parseInt(t.showTips)-1;r=o[p]}else r=i.getTargetSitesByName([t.showTips])[0];i.setFuncKeyCall(!0),r?(i.bar.style.setProperty("display","none","important"),r.dispatchEvent(new CustomEvent("showTips"))):i.showInPage(!0,a)}}),e.addEventListener("mouseleave",a=>{e.removeEventListener("mousemove",n)})}createHighlightMark(e,t,i){let r=this,n=document.createElement("mark");n.className="searchJumper",e.title&&(n.title=JSON.parse('"'+e.title+'"')),e.popup&&this.highlightPopup(n,e),n.style.cssText=e.style,n.addEventListener("click",o=>{if(o.altKey)return o.stopPropagation(),o.preventDefault(),!1}),n.dataset.content=e.showWords;let a,s=()=>{clearTimeout(a),a=setTimeout(()=>{let o=location.href.replace(/#.*/,"")+"#sjhl="+encodeURIComponent(e.oriWord)+"&i="+(t+1);Le.history.replaceState("","",o)},800)};return n.addEventListener("mousedown",o=>{if(s(),!o.altKey)return;let p,h=t;for(;(!p||p.dataset.type)&&(o.button===0?h!=i.length-1?(h++,r.focusIndex=h):r.focusIndex=0:o.button===2&&(h!=0?(h--,r.focusIndex=h):r.focusIndex=i.length-1),p=i[r.focusIndex],h!=t););r.focusHighlight(p),r.setHighlightSpan(r.getHighlightSpanByText(e.showWords),r.focusIndex,i),r.focusText=e.showWords}),n.addEventListener("mouseup",o=>{clearTimeout(a)}),n}createAddonSpan(e,t){let i="addon_"+this.addonsList.children.length,r=this,n=document.createElement("div"),a=document.createElement("input");a.type="checkbox",a.id=i,a.checked=!t.disable,a.addEventListener("change",o=>{c.prefConfig.disableAddon[e]=!a.checked,t.disable=!a.checked,a.checked&&r.findInpageAddons.forEach(p=>{if(p!=t&&p.sort==t.sort){p.disable=!0;let h=p.name||"addon"+i++;r.addonCheckboxDict[h].checked=!1,c.prefConfig.disableAddon[h]=!0}}),V.setItem("searchData",c),r.lockWords&&r.refreshPageWords(r.lockWords)}),n.appendChild(a),n.title=t.title||"";let s=document.createElement("label");s.setAttribute("for",i),s.innerText=e,n.appendChild(s),this.addonCheckboxDict[e]=a,this.addonsList.appendChild(n)}findAccentedWord(e,t,i){const r=t.length;let n=0,a=-1;for(let s=0;s<e.length;s++){const o=i[s];if(o!=="")if(o===t[n]){if(n===0&&(a=s),n++,n===r)return{pos:a,len:s-a+1}}else n=0,a=-1,o===t[0]&&(a=s,n=1)}return a=e.indexOf(t),{len:t.length,pos:a}}findPosInStr(e,t,i,r,n){if(!e)return{len:0,pos:-1};let a=0,s=-1,o=!1;if(this.findInpageAddons.length)for(let p=0;p<this.findInpageAddons.length;p++){let h=this.findInpageAddons[p];if(!h||!h.run||h.disable)continue;o=!0;let d=h.run(e,t);if(d&&d.matched){a=d.len,s=d.pos;break}}return s==-1&&!o?this.findAccentedWord(i,r,n):{len:a,pos:s}}highlight(e,t,i,r){if(!e&&(!this.curHighlightWords||this.curHighlightWords.length===0))return;if(!t){this.highlight(e,X(document),i);return}if([].forEach.call(t.getElementsByTagName("iframe"),u=>{if(!u.offsetParent||u.offsetHeight<100||u.offsetWidth<100)return;let f;try{f=u.contentDocument||u.contentWindow.document}catch{return}f&&X(f)&&this.highlight(e,X(f),i,u)}),this.targetIframe=r||!1,t.id=="searchJumperModifyWord")return;t=t||X(document);let n=this.wordModeBtn.classList.contains("checked"),a=[],s=!1,o=this;if(e===""){this.highlightSpans={},Object.values(this.marks).forEach(async u=>{if(!u)return;let f=new Set;for(let w of u)if(w.parentNode)if(w.dataset.block)w.parentNode&&w.parentNode.removeChild(w);else if(!/^MARK$/i.test(w.nodeName))w.classList.remove("searchJumper"),w.style.cssText=w.dataset.css||"",delete w.dataset.css;else{let b=document.createTextNode(w.firstChild.data);w.parentNode.replaceChild(b,w);const j=b.parentNode;if(j&&j.nodeName==="SPAN"&&j.style.cssText==="all: unset;"){const v=j.parentNode;if(v){const C=document.createDocumentFragment();C.append(...j.childNodes),v.replaceChild(C,j)}}f.add(b.parentNode)}f.forEach(w=>{w.normalize()})}),[].forEach.call(t.querySelectorAll(".searchJumper-hide"),u=>{u.classList.remove("searchJumper-hide"),u.style.display="",u.removeAttribute("data-content")}),ie(this.navMarks,""),this.marks={},this.curHighlightWords=[];return}this.inPageStyle||(this.inPageStyle=Be(this.inPageCss)),this.inPageStyle.parentNode||document.head.appendChild(this.inPageStyle);let p=e==="insert";p?(e=this.curHighlightWords,this.refreshNavMarks()):this.curHighlightWords=(this.curHighlightWords||[]).concat(e),this.fakeTextareas=new Map;let h=Math.max(document.documentElement.scrollHeight,X(document).scrollHeight);this.navMarks.style.display="none";let d=[];function m(u,f,w){let b,j=-1,v,C,g,k;v=0;let A=u.parentNode;if(u.nodeType==1&&u.className&&u.className.indexOf&&u.className.indexOf("searchJumper")!=-1)return 0;if(w&&(u.nodeType==1||u.nodeType==11)){let L=function(U,Z,_){let ae=[],x=Z,S="",B="",y="";for(const N of H){const K=N.index;if(U>K)continue;let R=U-(K-N.text.length)-1,O="full";if(R<0?N.text.length<x?O="middle":O="end":N.text.length-R<x&&(O="start"),O==="full"&&(_=""),re&&(O=="full"?(S=R==0?`
`:N.text[R-1],B=R+x==N.text.length?`
`:N.text[R+x],B!==`
`&&(y=R+x+1==N.text.length?`
`:N.text[R+x+1])):O=="start"&&!S?S=R==0?`
`:N.text[R-1]:(O=="end"||O=="full")&&!B&&(B=R+x==N.text.length?`
`:N.text[R+x],B!==`
`&&(y=R+x+1==N.text.length?`
`:N.text[R+x+1])),S&&B&&(/[a-z]/i.test(S)||/[a-rt-z]/i.test(B)||B.toLowerCase()=="s"&&/[a-z]/i.test(y))))break;R<0&&(R=0);let Q=Math.min(x,N.text.length-R);if(x-=Q,!N.text.trim()){O==="start"&&(U+=N.text.length);continue}let le;for(let ne=0;ne<se.length;ne++)if(se[ne].node==N.node){le=se[ne];break}if(le?le.match.push({pos:R,len:Q,type:O,matched:_}):se.push({node:N.node,text:N.text,match:[{pos:R,len:Q,type:O,matched:_}]}),x<=0)break}},F=function(){if(j=-1,f.isRe){let U=T.match(new RegExp(f.content,f.reCase));U&&(b=U[0].length,j=U.index)}else{let U=o.findPosInStr(T,f.content,E,M,I);b=U.len,j=U.pos}if(j>-1){let U=T.slice(j,j+b);T=T.slice(j+b),E=E.slice(j+b),I=I.slice(j+b),j+=Y,Y=j+b,L(j,b,U),F()}},W=o.anylizeDomWithTextPos(u),T=W.text,E=T.toUpperCase(),I=[];for(let U=0;U<E.length;U++){const Z=E[U].normalize("NFD").replace(/[\u0300-\u036f]/g,"");I.push(Z)}let M=f.content.toUpperCase(),H=W.data,Y=0,se=[],re=(f.init||n)&&/^[a-z]+$/i.test(f.content);F(),se.length&&se.forEach(U=>{if(typeof f.hideParent<"u"){let Z=f.hideParent,_=U.node.parentElement;for(;Z-- >0&&_;)_=_.parentElement;_&&_.classList&&!_.classList.contains("searchJumper-hide")&&(ie(_,""),_.dataset.content=f.showWords,_.classList.add("searchJumper-hide"))}else{let Z=o.marks[f.showWords],_=Z.length,ae;const x=document.createElement("span");x.style.all="unset";let S=document.createTextNode(U.text);x.appendChild(S);let B=U.match.reverse(),y=[],N=B.length-1;B.forEach(K=>{switch(ae=o.createHighlightMark(f,_+N,Z),K.type){case"start":ae.style.borderTopRightRadius=0,ae.style.borderBottomRightRadius=0,N--;break;case"middle":ae.style.borderRadius=0;break;case"end":ae.style.borderTopLeftRadius=0,ae.style.borderBottomLeftRadius=0;break;default:N--;break}g=S.splitText(K.pos),K.type!="start"&&K.type!="middle"&&g.data.length&&g.splitText(K.len),k=g.cloneNode(!0),ae.appendChild(k),K.type!="full"&&K.type!="start"&&(ae.dataset.type=K.type),K.matched&&(ae.dataset.matched=K.matched),x.replaceChild(ae,g),y.unshift(ae)}),U.node.parentNode.replaceChild(x,U.node),o.marks[f.showWords].push(...y),y.forEach(K=>{K.dataset.type||d.push([K,f,_,Z,h])})}})}let $=!0;if(f.link){if(u.nodeType==1&&u.href&&u.href.match&&($=!1,u.href.match(new RegExp(f.content,f.reCase))))if(typeof f.hideParent<"u"){let T=f.hideParent,E=u;for(;T-- >0&&E;)E=E.parentElement;if(E)return ie(E,""),E.dataset.content=f.showWords,E.classList.add("searchJumper-hide"),0}else{let T=o.marks[f.showWords],E=T.length;u.classList.add("searchJumper"),f.title&&(u.title=JSON.parse('"'+f.title+'"')),f.popup&&o.highlightPopup(u,f),u.dataset.css||(u.dataset.css=u.style.cssText),f.style&&(u.style.cssText+=f.style),u.addEventListener("click",I=>{if(I.altKey)return I.stopPropagation(),I.preventDefault(),!1}),u.dataset.content=f.showWords,u.addEventListener("mousedown",I=>{if(!I.altKey)return;let M;I.button===0?E!=T.length-1?o.focusIndex=E+1:o.focusIndex=0:I.button===2&&(E!=0?o.focusIndex=E-1:o.focusIndex=T.length-1),M=T[o.focusIndex],o.focusHighlight(M),o.setHighlightSpan(o.getHighlightSpanByText(f.showWords),o.focusIndex,T),o.focusText=f.showWords}),o.marks[f.showWords].push(u),d.push([u,f,E,T,h])}}else{let W="";if(u.nodeType==1&&u.value&&(u.offsetParent||u.offsetHeight)&&!f.init&&/^(button|select|input|textarea)$/i.test(u.nodeName)&&!/^(hidden|file|password|radio|range|checkbox|image)$/i.test(u.type)&&(W=u.value),W){let F=function(U,Z){if(U){if(!I){I=document.createElement("pre"),I.className="searchJumper";let x=document.createTextNode(W);I.appendChild(x);let S,B=/^(number|string)$/,y=[],N=u.style;for(S in N)if(!/^(content|outline|outlineWidth)$/.test(S)){let K=M[S];K!==""&&B.test(typeof K)&&(S=S.replace(/([A-Z])/g,"-$1").toLowerCase(),y.push(S),y.push(":"),y.push(K),y.push(";"))}y=y.join(""),I.style.cssText=y,I.style.position="fixed",I.style.left="0px",I.style.top="0px",I.style.margin="0",u.nodeName&&u.nodeName.toLowerCase&&u.nodeName.toLowerCase()!=="textarea"&&(I.style.display="inline-grid",I.style.lineHeight=I.style.height,I.style.boxSizing=="border-box"&&(I.style.paddingTop=0)),o.fakeTextareas.set(u,I)}document.body.appendChild(I);let _=document.createRange();_.setStart(I.firstChild,Math.min(I.firstChild.length,Z)),_.setEnd(I.firstChild,Math.min(I.firstChild.length,Z+1));let ae=_.getBoundingClientRect();if(document.body.removeChild(I),typeof f.hideParent<"u"){let x=f.hideParent,S=u.parentElement;for(;x-- >0&&S;)S=S.parentElement;if(S)return ie(S,""),S.dataset.content=f.showWords,S.classList.add("searchJumper-hide"),0}else{let x=o.marks[f.showWords],S=x.length,B=document.createElement("mark");B.className="searchJumper",B.dataset.block=!0,f.title&&(B.title=JSON.parse('"'+f.title+'"')),B.style.cssText=f.style,B.dataset.content=f.showWords,B.innerText=U,B.style.padding="0",B.style.position="absolute",B.style.fontSize=I.style.fontSize,B.style.fontFamily=I.style.fontFamily,B.style.lineHeight="1",B.style.pointerEvents="none",u.parentNode.appendChild(B);let y=ae.left+H,N=ae.top+Y;if(B.style.left=y+"px",B.style.top=N+"px",o.marks[f.showWords].push(B),d.push([B,f,S,x,h]),u.nodeName&&u.nodeName.toLowerCase&&u.nodeName.toLowerCase()=="textarea"){let K=R=>{B.parentNode?(B.style.left=y-u.scrollLeft+"px",B.style.top=N-u.scrollTop+"px"):(B.parentNode.removeChild(B),u.removeEventListener("scroll",K))};u.addEventListener("scroll",K)}}}};$=!1;let T=!1,E=0,I=o.fakeTextareas.get(u);if(p&&I)return 0;let M=getComputedStyle(u),H=u.offsetLeft,Y=u.offsetTop,se=W.toUpperCase(),re=[];for(let U=0;U<se.length;U++){const Z=se[U].normalize("NFD").replace(/[\u0300-\u036f]/g,"");re.push(Z)}let L=f.content.toUpperCase();for(;;){if(f.isRe)T=W.match(new RegExp(f.content,f.reCase)),T&&(j=T.index,T=T[0]);else{let U=o.findPosInStr(W,f.content,se,L,re);b=U.len,j=U.pos,(f.init||n)&&j>=0&&/^[a-z]+$/i.test(f.content)&&(j!==0&&/[a-z]/i.test(W[j-1])&&(j=-1),j+f.content.length!==W.length&&/[a-z]/i.test(W[j+b])&&(j=-1)),T=j>=0?W.slice(j,j+b):!1}if(T)F(T,E+j),E+=j+T.length,W=W.slice(j+T.length),se=se.slice(j+T.length),re=re.slice(j+T.length);else break}}}if($&&(!i||u===t)&&(u.nodeType==1||u.nodeType==11)&&u.childNodes&&!/^(SCRIPT|STYLE|MARK|SVG|TEXTAREA)$/i.test(u.nodeName)&&(!f.init||u.ariaHidden!="true"&&u.role!="search"&&(!u.hasAttribute||u.hasAttribute("jsname")==!1)))if(!s&&/^(PRE|CODE)$/i.test(u.nodeName))a.push(u);else{for(var z=0;z<u.childNodes.length;++z)z=z+m(u.childNodes[z],f);try{u.shadowRoot&&(z=z+m(u.shadowRoot,f,!0))}catch(W){fe(W)}}return v}e.forEach(u=>{if(o.marks[u.showWords]||(o.marks[u.showWords]=[]),u.inRange){let f=t;t.parentNode&&(f=t.parentNode),[].forEach.call(f.querySelectorAll(u.inRange),w=>{(w==t||t.contains(w))&&m(w,u,!0)})}else m(t,u,!0)}),d.forEach(u=>{o.createNavMark(...u)}),this.navMarks.style.display="",setTimeout(()=>{o.navMarks.style.display="none",d=[],s=!0,e.forEach(u=>{o.marks[u.showWords]||(o.marks[u.showWords]=[]),a.forEach(f=>{m(f,u,!0)})}),d.forEach(u=>{o.createNavMark(...u)}),o.navMarks.style.display=""},1e3),this.navMarks.innerHTML!=""&&(this.searchJumperNavBar.classList.add("sjNavShow"),rt&&(this.appendBar(),this.con.style.display="",this.setNav(!0,!0)))}refreshPageWords(e){this.lockWords="",this.searchJumperInPageInput.value="",ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords();let t=e||$e;t&&(this.searchJumperInPageInput.value=t,this.submitInPageWords(t==this.lastSearchEngineWords),this.appendBar())}refreshNav(){this.setNav(rt)}refreshNavMarks(){this.refreshNavMarksTimer&&clearTimeout(this.refreshNavMarksTimer),this.refreshNavMarksTimer=setTimeout(()=>{let e=Math.max(document.documentElement.scrollHeight,X(document).scrollHeight);this.navPointer.style.display="none",this.navMarks.style.display="none",[].forEach.call(this.navMarks.children,t=>{t.style.top=t.dataset.top/e*100+"%"}),this.navMarks.style.display=""},1e3)}checkCharacterData(e){setTimeout(()=>{this.highlight("insert",e,!0)},0)}removeMark(e){let t=e.dataset.content,i=this.marks[t];if(!i)return;var r=i.indexOf(e);if(r===-1)return;i.splice(r,1),this.marks[t]=i;let n=this.navMarks.querySelectorAll(`span[data-content="${t}"]`)[r];n&&this.navMarks.removeChild(n)}submitIgnoreSpace(e){e&&(!this.lockWords&&e.indexOf("$c")!==0&&e.indexOf("$o")!==0&&e.indexOf(" ")!==-1&&(this.splitSep="\u25CE"),this.searchJumperInPageInput.value=e,this.submitInPageWords())}siteBtnReturnHome(e){e.parentNode&&e.parentNode.removeChild(e)}closeShowAll(){if(!(!this.con.classList.contains("search-jumper-showall")||Re)){if(this.clearInputHide(),clearInterval(this.showAllTimeTimer),document.removeEventListener("mousedown",self.showAllMouseHandler),document.removeEventListener("keydown",self.showAllKeydownHandler),this.con.classList.remove("search-jumper-showall"),document.documentElement.style.scrollbarWidth=this.preScrollbarWidth,this.searchJumperInputKeyWords.value="",ie(this.historylist,""),this.touched=!1,this.initPos(),this.funcKeyCall&&this.setFuncKeyCall(!1),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){let e=this.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(e&&!e.classList.contains("search-jumper-open"))if(e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}this.bar.style.display=""}}toggleShowAll(){this.appendBar(),!(!this.con||!this.con.parentNode)&&(this.con.classList.contains("search-jumper-showall")?this.closeShowAll():this.showAllSites())}showAllSites(){if(!this.con||!this.con.parentNode||this.con.classList.contains("search-jumper-showall"))return;this.con.style.display="",this.clearInputHide(),this.alllist.appendChild(this.filterSites),ie(this.filterGlob,"");let e=this,t=this.tileInput.value;this.setFuncKeyCall(!1),this.hideSearchInput(),this.con.classList.add("search-jumper-showall"),this.con.querySelector(".search-jumper-showallBg").style.backdropFilter=Re?"none":"blur(8px)",this.preScrollbarWidth=document.documentElement.style.scrollbarWidth||"",document.documentElement.style.scrollbarWidth="none",clearInterval(this.showAllTimeTimer);const i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let r=new Date,n=r.getFullYear(),a=r.getMonth(),s=r.getDate(),o=n+"-"+(++a<10?"0"+a:a)+"-"+(s<10?"0"+s:s)+" \xB7 "+J(i[r.getDay()]);if(Ae.indexOf("zh")==0||Ae.indexOf("ja")==0){let d=Zr(n,a,s);if(d){let m=`${d.lunarYear}\u5E74${d.lunarMonth}\u6708${d.lunarDay}`;o=o+"<small>"+m+"</small>"}}ie(e.dayInAll,o);let p=()=>{let d=new Date,m=d.getHours(),u=d.getMinutes(),f=d.getSeconds();e.timeInAll.innerText=(m<10?"0"+m:m)+":"+(u<10?"0"+u:u)+":"+(f<10?"0"+f:f)};this.showAllTimeTimer=setInterval(p,1e3),p(),Se.forEach(d=>{if(d.style.display!="none"){let m=d.querySelector(".sitelist");m&&e.sitelistBox.appendChild(m)}}),[].forEach.call(e.sitelistBox.querySelectorAll(".sitelist"),d=>{d.style.opacity="",d.style.height="",e.initList(d)}),this.historySiteBtns.slice(0,20).forEach(d=>{let m=d.querySelector("img");m&&m.dataset.src&&et(m),e.historylist.appendChild(d)});let h="";D&&(D.nodeName.toUpperCase()=="A"||D.parentNode&&D.parentNode.nodeName.toUpperCase()=="A")&&(h=D.textContent.trim()),t=t||Oe()||h||Pe,this.searchJumperInputKeyWords.value=t,setTimeout(()=>{e.showAllMouseHandler||(e.showAllMouseHandler=d=>{(d.isTrusted==!1||d.target.className==="sitelistBox"||d.target.className==="search-jumper-showallBg"||d.target.id==="search-jumper-alllist")&&e.closeShowAll()}),e.con.addEventListener("mousedown",e.showAllMouseHandler),e.showAllKeydownHandler||(e.showAllKeydownHandler=d=>{d.keyCode==27&&e.closeShowAll()}),document.addEventListener("keydown",e.showAllKeydownHandler,!0),wt?(this.searchInput.value=wt,this.searchInput.dispatchEvent(new Event("input")),this.searchInput.focus(),this.searchInput.select()):this.searchJumperInputKeyWords.value&&(this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select())},0)}switchSite(e){if(!ce||this.bar.style.display=="none")return;let t=this.con.querySelector(".search-jumper-btn.current");if(e)for(t=t.nextElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.nextElementSibling;else for(t=t.previousElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.previousElementSibling;t&&this.openSiteBtn(t,"_self")}clearInputHide(){Se.forEach(e=>{e.classList.remove("input-hide")}),this.allSiteBtns.forEach(e=>{e[0].classList.remove("input-hide")}),this.allListBtns.forEach(e=>{e.classList.remove("input-hide")}),this.allLists.forEach(e=>{e.classList.remove("input-hide")})}showSearchInput(){if(this.con&&this.con.classList.contains("search-jumper-showall"))return;this.recoveHistory(),this.con.classList.add("in-input"),this.searchInput.value="",this.contentContainer.appendChild(this.filterSites);let e=We();if(e&&(this.searchJumperInputKeyWords.value=e),this.filterSitesTab.checked){this.con.classList.remove("in-find"),c.prefConfig.defaultPicker&&this.togglePicker(),this.searchJumperInputKeyWords.value||(this.searchJumperInputKeyWords.value=Oe());let t=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)>span");if(t&&!t.parentNode.classList.contains("search-jumper-open"))if(t.onmouseup)t.onmouseup();else{let i=new PointerEvent("mouseup");t.dispatchEvent(i)}wt&&(this.searchInput.value=wt,this.searchInput.dispatchEvent(new Event("input"))),this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select()}else this.searchInPageTab.checked&&(this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),setTimeout(()=>{e&&this.lockWords.indexOf(e)==-1?(this.searchJumperInPageInput.value="",this.navMarks.innerHTML?(this.searchJumperInPageInput.value=e,this.submitInPageWords()):this.submitIgnoreSpace(e)):this.searchJumperInPageInput.value?this.submitInPageWords():!this.initShowSearchInput&&Pe&&this.lockWords!==Pe&&(this.searchJumperInPageInput.value=Pe,this.initShowSearchInput=!0,this.searchJumperInPageInput.select())},10));this.inInput=!0,this.clearInputHide(),this.lockWords?this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px":this.searchJumperInPageInput.style.paddingLeft="",c.prefConfig.altToHighlight&&(document.removeEventListener("mouseup",this.checkSelHandler),document.addEventListener("mouseup",this.checkSelHandler))}togglePicker(){this.pickerBtn.classList.toggle("checked"),this.con.classList.toggle("in-pick"),this.searchJumperInputKeyWords.disabled=!this.searchJumperInputKeyWords.disabled,Te.toggle(!0),this.searchJumperInputKeyWords.disabled&&(this.searchJumperInputKeyWords.value="")}hideSearchInput(){this.inInput=!1,this.clearInputHide(),this.con.classList.remove("in-find"),this.con.classList.remove("in-input"),this.con.classList.remove("lock-input"),this.bar.classList.remove("initShow"),this.searchInput.value="",this.searchJumperInputKeyWords.value="",this.pickerBtn.classList.remove("checked"),this.searchJumperInputKeyWords.disabled=!1,Te.close(),document.removeEventListener("mouseup",this.checkSelHandler),this.setFuncKeyCall(!1),this.closeOpenType()}removeBar(){this.shadowContainer&&this.shadowContainer.parentNode&&this.shadowContainer.parentNode.removeChild(this.shadowContainer),this.con.parentNode&&this.con.parentNode.removeChild(this.con)}async testCSP(){let e=this,t=r=>{!r.violatedDirective||r.violatedDirective.indexOf("style-src")==-1||(Xe=!0)};window.addEventListener("securitypolicyviolation",t);let i=Be("html {color: #000;}");this.addToShadow(i),await Je(0),window.removeEventListener("securitypolicyviolation",t),i.parentNode&&i.parentNode.removeChild(i)}addToShadow(e){this.shadowContainer||(this.shadowContainer=document.createElement("div")),this.shadowContainer.parentNode||(ke?document.body.appendChild(this.shadowContainer):document.documentElement.appendChild(this.shadowContainer));let t;if(Xe){if(/^style$/i.test(e.nodeName))return!0;t=this.shadowContainer}else if(this.shadowRoot)t=this.shadowRoot;else{this.shadowContainer.className="search-jumper-shadow";let i=Be(`
                         .search-jumper-shadow {
                          display: block !important;
                          width: 0px !important;
                          height: 0px !important;
                          margin: 0px !important;
                          padding: 0px !important;
                          border-width: initial !important;
                          border-style: none !important;
                          border-color: initial !important;
                          border-image: initial !important;
                          outline: none !important;
                          position: unset !important;
                         }
                        `);this.shadowContainer.appendChild(i);let r=this.shadowContainer.attachShadow({mode:"closed"});t=document.createElement("div"),t.id="search-jumper-root",t.style.display="none",t.setAttribute("contenteditable","false");let n=document.createElement("style");ie(n,"#search-jumper-root{display: block!important;}"),t.appendChild(n),r.appendChild(t),this.shadowRoot=t}return e.parentNode!=t&&t.appendChild(e),!0}contains(e){return e==this.shadowContainer||this.bar.contains(e)}appendBar(){if((!nt||!nt.parentNode)&&(nt=Be(Nt),Xe||this.addToShadow(nt)),this.addToShadow(this.con)){let e=this,t=()=>{setTimeout(()=>{if(e.shadowContainer&&!e.shadowContainer.parentNode){ke?document.body.appendChild(e.shadowContainer):document.documentElement.appendChild(e.shadowContainer),t();return}!Re&&e.con.parentNode&&getComputedStyle(e.con).zIndex!="2147483646"&&(this.removeBar(),Xe?fe(J("cspDisabled")):(Xe=!0,nt=Be(Nt),e.shadowContainer.parentNode.removeChild(e.shadowContainer),e.shadowContainer=document.createElement("div"),e.shadowContainer.setAttribute("contenteditable","false"),document.documentElement.appendChild(e.shadowContainer),e.appendBar()))},100)};t()}}async searchBySiteName(e,t,i){t||(t={}),t&&t.type==="drop"&&this.closeShowAll();for(let[r,n]of this.allSiteBtns)if(r.dataset.name==e){if(r.dataset.showTips){r.dispatchEvent(new CustomEvent("showTips"));return}await this.siteSetUrl(r,{button:t.button,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey});let a=/^(https?|ftp):/.test(r.href);a&&r.setAttribute("target",i?"_self":"_blank"),r.click(),a&&r.setAttribute("target",r.dataset.target==1?"_blank":"_self");return}for(let r=Se.length-1;r>=0;r--){let n=Se[r];if(n.dataset.type==e){n.firstChild.onmouseup&&n.firstChild.onmouseup({button:2});return}}}async searcAllhByTypeName(e){for(let t=Se.length-1;t>=0;t--){let i=Se[t];if(i.dataset.type==e){i.firstChild.onmouseup&&i.firstChild.onmouseup({button:2});return}}}autoGetFirstType(){D||(D=X(document));let e;switch(D.nodeName.toUpperCase()){case"IMG":e=this.bar.querySelector(".search-jumper-targetImg:not(.notmatch)");break;case"AUDIO":e=this.bar.querySelector(".search-jumper-targetAudio:not(.notmatch)");break;case"VIDEO":e=this.bar.querySelector(".search-jumper-targetVideo:not(.notmatch)");break;case"A":We()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)");break;default:We()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):D.parentNode.nodeName.toUpperCase()==="A"?e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetPage:not(.notmatch)");break}if(e||(e=this.bar.querySelector(".search-jumper-targetAll:not(.notmatch)")||this.bar.querySelector(".search-jumper-type")),e){this.setFuncKeyCall(!1);let t=new PointerEvent("mouseup");e.classList.contains("search-jumper-open")&&(e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)),e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)}return e}searchAuto(e,t){e||(e=0);let i=this.autoGetFirstType();if(!i)return;let r=i.querySelectorAll("a.search-jumper-btn:not(.notmatch)");if(e<r.length){let n=r[e];this.searchBySiteName(n.dataset.name,t)}}setNav(e,t){!t&&rt!=e&&(V.setItem("navEnable",e||""),rt=e),e?(t||this.locBtn.classList.add("checked"),this.searchJumperNavBar.style.display=""):(t||this.locBtn.classList.remove("checked"),this.searchJumperNavBar.style.display="none",this.navPointer.style.display="none")}lockSearchInput(e){this.lockSiteKeywords=!0,this.searchLockInput.innerText=e,this.con.classList.add("lock-input"),this.searchInput.value="",this.searchInput.style.paddingLeft=`${15+this.searchLockInput.scrollWidth}px`,this.searchInput.placeholder=J("inputKeywords")}async initRun(){let e=this;this.siteIndex=1,this.customInput=!1,this.fontPool=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.dockerScaleBtns=[],this.bar.style.visibility="hidden";let t=0,i=[];this.checkSelHandler=L=>{L.altKey&&this.searchInPageTab.checked&&window.getSelection().toString()&&this.showSearchInput()},this.splitSep="\u25CE",this.lockWords="",this.marks={},this.initInPageWords=[],this.highlightSpans={},this.curHighlightWords=[],this.curWordIndex=0;let r=()=>{this.searchJumperInPageInput.focus(),this.highlight("");let L=this.lockWords.trim();if(!L){this.submitInPageWords();return}this.searchJumperInPageInput.value&&(L+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=L,ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft=""};document.addEventListener("keydown",L=>{L.keyCode===27&&(Re?(this.searchInput.value="",this.searchInput.dispatchEvent(new CustomEvent("input"))):this.inInput?this.hideSearchInput():this.lockWords?(this.highlight(""),this.searchJumperInPageInput.value=this.lockWords,this.lockWords="",ie(this.searchInPageLockWords,""),this.setNav(!1,!0)):this.funcKeyCall&&this.removeBar())},!0),this.searchJumperInPageInput.addEventListener("focus",L=>{this.searchInputDiv.classList.add("active")}),this.searchJumperInPageInput.addEventListener("blur",L=>{this.searchInputDiv.classList.remove("active")}),this.searchJumperInPageInput.addEventListener("keydown",L=>{switch(L.stopPropagation(),L.keyCode){case 8:if(!this.searchJumperInPageInput.value){let F=this.searchInPageLockWords.lastChild;F&&(F.dispatchEvent(new CustomEvent("editword")),L.preventDefault())}break;case 9:L.preventDefault(),this.filterSitesTab.checked=!0,this.con.classList.remove("in-find"),this.searchInput.focus();break;case 13:{let F=this.searchJumperInPageInput.value?this.submitInPageWords():[];if(F&&F.length>0){let U=F.pop();this.currentSearchInPageLockWords&&(this.currentSearchInPageLockWords.firstChild.style.transform=""),this.currentSearchInPageLockWords=U;let Z=new PointerEvent("mousedown",{button:L.shiftKey?2:0});U.dispatchEvent(Z)}else if(this.lockWords){this.currentSearchInPageLockWords||(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)");let U=new PointerEvent("mousedown",{button:L.shiftKey?2:0});this.currentSearchInPageLockWords.dispatchEvent(U)}}break;case 37:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.previousElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.previousElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;case 39:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.nextElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.nextElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;default:break}},!0),this.editBtn.addEventListener("click",L=>{r()}),this.addWord.addEventListener("click",L=>{this.showModifyWindow()}),this.searchInPageTab.addEventListener("change",L=>{this.initSetInPageWords(),this.searchJumperInPageInput.focus(),this.con.classList.add("in-find")}),this.filterSitesTab.addEventListener("change",L=>{this.searchInput.focus(),this.con.classList.remove("in-find")}),$e?(this.recoverBtn.addEventListener("click",L=>{this.lockWords="",this.searchJumperInPageInput.value=$e,ie(this.searchInPageLockWords,""),this.highlight(""),this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.pinBtn.classList.add("checked")):this.recoverBtn.style.display="none",this.pinBtn.addEventListener("click",L=>{this.submitInPageWords(),this.pinBtn.classList.contains("checked")?($e="",this.pinBtn.classList.remove("checked")):this.lockWords&&($e=this.lockWords,this.pinBtn.classList.add("checked")),V.setItem("globalInPageWords",$e)}),this.wordModeBtn.addEventListener("click",L=>{this.wordModeBtn.classList.contains("checked")?this.wordModeBtn.classList.remove("checked"):this.wordModeBtn.classList.add("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)}),this.saveRuleBtn.addEventListener("click",L=>{this.lockWords&&(ke||ti(()=>{let F=c.prefConfig.inPageRule||{};return F[this.inPageRuleKey||ue.replace(/([&\?]_i=|#).*/,"")]=this.lockWords,c.prefConfig.inPageRule=F,c.lastModified=new Date().getTime(),Ht=c.lastModified,()=>Ce(J("save completed"))}))}),this.emptyBtn.addEventListener("click",L=>{this.lockWords="",this.searchJumperInPageInput.value="",ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.copyInPageBtn.addEventListener("click",L=>{this.lockWords&&(Ge(this.lockWords.replace(/◎/g,`
`)),Ce("Copied successfully!"))}),this.setNav(rt),this.locBtn.addEventListener("click",L=>{this.setNav(!this.locBtn.classList.contains("checked"))}),this.closeNavBtn.addEventListener("click",L=>{this.lockWords?(this.searchJumperInPageInput.value=this.lockWords||"",this.lockWords="",ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft="",this.highlight(""),this.searchJumperInPageInput.focus(),this.setNav(!1,!0),V.setItem("disableHighlight",location.hostname),this.bar.style.display==="none"&&this.removeBar()):this.setNav(!1)}),this.minNavBtn.addEventListener("click",L=>{if(this.searchJumperNavBar.classList.contains("minimize")){if(this.searchJumperNavBar.classList.remove("minimize"),this.lockWords.trim())return;this.submitInPageWords()}else{this.searchJumperNavBar.classList.add("minimize"),this.highlight("");let F=this.lockWords.trim();if(!F)return;this.searchJumperInPageInput.value&&(F+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=F,ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft=""}}),this.maxNavBtn.addEventListener("click",L=>{e.showInPage(),e.showInPageSearch()}),this.navMarks.addEventListener("click",L=>{let F=L.offsetY/this.navMarks.clientHeight*100,U=[].slice.call(this.navMarks.querySelectorAll("span"));U.sort((_,ae)=>(_=parseFloat(_.style.top),ae=parseFloat(ae.style.top),_>ae?1:_<ae?-1:0));let Z;for(let _=0;_<U.length;_++){Z=U[_];let ae=parseFloat(Z.style.top);if(ae>F){if(_>0){let x=U[_-1],S=parseFloat(x.style.top);ae-F>F-S&&(Z=x)}break}}Z&&Z.click()}),this.bar.addEventListener("mousedown",L=>{L&&L.stopPropagation&&L.stopPropagation(),L&&L.preventDefault&&L.preventDefault()}),this.con.addEventListener("dblclick",L=>{L.stopPropagation(),L.preventDefault()});let n=L=>{L.stopPropagation(),L.preventDefault();let F=e.searchJumperExpand.parentNode;if(!F||!F.classList.contains("not-expand"))return;F.classList.remove("not-expand"),F.classList.remove("search-jumper-move");let U=e.con.classList.contains("search-jumper-left")||e.con.classList.contains("search-jumper-right");F.removeChild(e.searchJumperExpand);let Z=Math.max(F.scrollWidth,F.scrollHeight)+5+"px";U?(F.style.height=Z,F.style.width=""):(F.style.width=Z,F.style.height=""),setTimeout(()=>{e.checkScroll(),F.classList.add("search-jumper-move")},251)},a;this.searchJumperExpand.addEventListener("click",n,!0),this.searchJumperExpand.addEventListener("contextmenu",n,!0),this.searchJumperExpand.addEventListener("mouseenter",L=>{c.prefConfig.overOpen&&(clearTimeout(a),a=setTimeout(()=>{n(L)},500));let F=new CustomEvent("sitelist",{detail:{bind:L.currentTarget}});L.currentTarget.parentNode.dispatchEvent(F)},!1),c.prefConfig.overOpen&&this.searchJumperExpand.addEventListener("mouseleave",L=>{clearTimeout(a)},!1),this.pickerBtn.addEventListener("click",L=>{this.togglePicker()}),this.maxEleBtn.addEventListener("click",L=>{Te.expand()}),this.minEleBtn.addEventListener("click",L=>{Te.collapse()}),this.copyEleBtn.addEventListener("click",L=>{Te.copy()}),this.openLinkBtn.addEventListener("click",L=>{Te.openLinks()});let s=document.createElement("div");s.className="listArrow",this.listArrow=s,this.con.appendChild(s);for(let L of c.sitesConfig){if(L.bookmark||L.sites.length>100||/^BM/.test(L.type)&&L.icon==="bookmark"){i.push(L);continue}await this.createType(L),t+=L.sites.length,t>100&&(await Je(1),t=0)}this.initHistorySites(),this.initSort(),this.bar.style.visibility="",this.bar.style.display="none",this.searchInPageRule(),ce&&Tt.test(ce.url)?this.inSearchEngine():c.prefConfig.alwaysShow&&!Lt&&!qe&&(this.bar.style.display="",this.initPos(),this.appendBar()),zt&&(D=zt.target,this.batchOpen(zt.sites,{button:2})),zt=!1,tt&&(this.submitAction(tt).catch(L=>window.alert(L.message)),setTimeout(()=>{V.setListItem("inPagePostParams",location.hostname,"").catch(L=>console.warn("SearchJumper page actions:",L))},1e4));let o=L=>{clearTimeout(p);let F,U="";ce&&!e.searchInput.value?(F=e.con.querySelector(".search-jumper-btn.current"),U="_self"):(F=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),U="_blank"),F&&e.openSiteBtn(F,U,!L.ctrlKey)},p,h=!1;this.inInput=!1;let d=()=>{wt!==e.searchInput.value&&(wt=e.searchInput.value,V.setItem("cacheFilter",wt))};this.searchInput.addEventListener("input",L=>{clearTimeout(p),p=setTimeout(()=>{h||e.searchSiteBtns(e.searchInput.value)},500)}),this.searchInput.addEventListener("compositionstart",function(){h=!0}),this.searchInput.addEventListener("compositionend",function(){h=!1}),this.searchInput.addEventListener("click",L=>{e.searchInput.select()}),this.searchInput.addEventListener("blur",L=>{d()}),this.searchInput.addEventListener("keydown",L=>{switch(L.stopPropagation(),L.keyCode){case 9:L.shiftKey&&(L.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords());break;case 13:if(this.searchJumperInputKeyWords.disabled){clearTimeout(p);let F,U="";ce&&!e.searchInput.value?(F=e.con.querySelector(".search-jumper-btn.current"),U="_self"):(F=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),U="_blank"),F&&e.openSiteBtn(F,U,!L.ctrlKey)}else this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.value,d();break;case 8:break;default:break}}),this.searchJumperInputKeyWords.addEventListener("input",L=>{clearTimeout(p),p=setTimeout(()=>{h||e.getSuggest(e.searchJumperInputKeyWords.value)},200)}),this.searchJumperInputKeyWords.addEventListener("compositionstart",function(){h=!0}),this.searchJumperInputKeyWords.addEventListener("compositionend",function(){h=!1}),this.searchJumperInputKeyWords.addEventListener("keydown",L=>{switch(L.keyCode!==27&&L.stopPropagation(),L.keyCode){case 9:this.inInput?L.shiftKey||(L.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords()):(L.preventDefault(),this.searchInput.focus());break;case 13:o(L);break;default:break}},!0),this.con.addEventListener("keypress",L=>{L.stopPropagation()},!0),this.closeBtn.addEventListener("mousedown",L=>{e.hideSearchInput(),c.prefConfig.emptyAfterCloseInput&&(e.highlight(""),e.searchJumperInPageInput.value=e.lockWords||"",e.lockWords="",ie(e.searchInPageLockWords,""),e.setNav(!1,!0))});let m=window.innerWidth/2,u,f,w,b,j=L=>L.type.indexOf("mouse")===0?L.clientX:L.changedTouches[0].clientX,v=L=>L.type.indexOf("mouse")===0?L.clientY:L.changedTouches[0].clientY,C=L=>{let F=.25*window.innerWidth,U=m+j(L)-w;if(e.searchInputDiv.style.top="unset",e.searchInputDiv.style.left=U+"px",e.searchInputDiv.style.bottom=u-(v(L)-b)+"px",U>window.innerWidth/2){let Z=window.innerWidth-U+F-50;e.searchInputDiv.style.maxWidth=Z+"px"}else{let Z=U+F;U<F&&(U+=F-U,e.searchInputDiv.style.left=U+"px"),e.searchInputDiv.style.maxWidth=Z+"px"}L.stopPropagation(),L.preventDefault()},g=L=>{document.removeEventListener("mouseup",g),document.removeEventListener("mousemove",C),document.removeEventListener("touchend",g),document.removeEventListener("touchmove",C),f.style.cursor="",m+=j(L)-w,u-=v(L)-b},k=()=>{u||(u=e.con.classList.contains("search-jumper-bottom")?window.innerHeight*.95-60:window.innerHeight*.03)},A=!1;this.searchInputDiv.addEventListener("touchstart",L=>{A=!0,(L.target.className==="inputGroup"||L.target.nodeName.toUpperCase()==="LABEL")&&(k(),f=L.target,f.style.cursor="grabbing",w=j(L),b=v(L),document.addEventListener("touchend",g),document.addEventListener("touchmove",C))},{passive:!0,capture:!1}),this.searchInputDiv.addEventListener("mousedown",L=>{if(A){A=!1;return}(L.target.className==="inputGroup"||L.target.nodeName.toUpperCase()==="LABEL")&&(k(),f=L.target,f.style.cursor="grabbing",w=L.clientX,b=L.clientY,document.addEventListener("mouseup",g),document.addEventListener("mousemove",C),L.stopPropagation(),L.preventDefault())});let $,z,W=L=>{let F=L.clientX-z+$-10;this.searchInputDiv.style.width=F+"px"},T=L=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",T)};this.rightSizeChange.addEventListener("mousedown",L=>{z=L.clientX,$=this.searchInputDiv.clientWidth,document.addEventListener("mousemove",W),document.addEventListener("mouseup",T),L.stopPropagation(),L.preventDefault()});let E,I=L=>{if(!this.contains(L.target)){let F=/^(https?|ftp):/.test(E.href);F&&E.setAttribute("target","_blank"),F?ye(E.href,{active:!1,insert:!0}):E.click(),F&&E.setAttribute("target",E.dataset.target==1?"_blank":"_self")}X(document).removeEventListener("dragover",M),document.removeEventListener("drop",I),document.removeEventListener("dragover",M)},M=L=>{L.preventDefault()},H=L=>{X(document).removeEventListener("dragover",M),document.removeEventListener("drop",I),document.removeEventListener("dragover",M)};this.bar.addEventListener("dragstart",L=>{let F=L.target,U=F.parentNode;F.nodeName.toUpperCase()!=="IMG"&&F.nodeName.toUpperCase()!=="A"||(F.classList&&F.classList.contains("search-jumper-btn")?(E=F,X(document).addEventListener("dragover",M),document.addEventListener("drop",I),document.addEventListener("dragend",H)):U&&U.classList&&U.classList.contains("search-jumper-btn")&&(E=U,X(document).addEventListener("dragover",M),document.addEventListener("drop",I),document.addEventListener("dragend",H)))},!0),t=0;let Y=ce!==!1;for(let L of i)await this.createType(L),t+=L.sites.length,t>200&&(await Je(1),t=0);if(!this.findInpageAddons){this.findInpageAddons=Le.searchJumperAddons.filter(Z=>Z.type=="findInPage").sort((Z,_)=>(Z.sort||0)-(_.sort||0));let L=this,F=0,U={};this.findInpageAddons.forEach(Z=>{let _=Z.name||"addon"+F++;U[Z.sort]||c.prefConfig.disableAddon[_]===!0?Z.disable=!0:(c.prefConfig.disableAddon[_],Z.disable=!1),U[Z.sort]=!0,L.createAddonSpan(_,Z)})}if(this.fontPool.length>0||qe){const L="https://lib.baomitu.com/font-awesome/6.1.2/css/all.css";let F=["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css","https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/all.min.css"];(Ae||"").toLowerCase()==="zh-cn"&&F.unshift(L);let _=(c.prefConfig.fontAwesomeCss||"").trim();_&&F.unshift(_);let ae=(x=0)=>{if(x>=F.length){this.buildAllPageGroupTab();return}let S=document.createElement("link");S.id="search-jumper-font-awesome",S.dataset.configuredUrl=_,S.rel="stylesheet",S.href=F[x],document.documentElement.insertBefore(S,document.documentElement.children[0]);let B=S.cloneNode();this.addToShadow(B);let y=!1,N=()=>{y||(y=!0,clearTimeout(K),S.remove(),B.remove(),ae(x+1))},K=setTimeout(N,16e3);S.onerror=N;let R=()=>{if(y)return;y=!0,clearTimeout(K);let O=!1;this.fontPool.forEach(Q=>{Q.innerText="",Q.style.fontSize="",Q.style.color="",O=!0,ii.unshift(Q)}),O&&qe&&setTimeout(()=>{gr()},500),this.buildAllPageGroupTab()};S.onload=()=>{y||Vr(()=>{R()})}};ae()}else this.buildAllPageGroupTab();if(Re)return;si&&si!=location.hostname&&window.top==window.self&&V.setItem("disableHighlight",""),await this.testCSP();let se=ce&&Tt.test(ce.url);if(!Y&&se?this.inSearchEngine():!ce&&window.top==window.self&&this.checkSearchJump(),/^#sjhl=/.test(location.hash)){let L=location.hash.match(/^#sjhl=(.*?)(&i=(\d+))?$/),F=L[1],U=parseInt(L[3]||1)-1;try{F=decodeURIComponent(F)}catch(Z){console.log(Z)}this.setInPageWords(F,()=>{let _=document.querySelectorAll("mark.searchJumper")[U];_&&_.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})})}else this.checkDiscussions();let re=this.initInPageWords&&this.initInPageWords.length;(cr||this.bar.style.display==="none"&&(!rt||!re))&&this.removeBar()}checkDiscussions(){if(location.pathname==="/hoothin/SearchJumper/discussions/new"&&location.search==="?category=search-engines"){let e=c.sitesConfig.filter(t=>t&&!(/^BM/.test(t.type)&&t.icon==="bookmark"));hr('textarea[name="discussion[body]"]',"```json\n"+JSON.stringify(e,null,2)+"\n```")}}buildAllPageGroupTab(){let e=this;ie(this.groupTab,""),Se.forEach(t=>{if(t.classList.contains("notmatch"))return;let i=t.dataset.type,r=t.firstElementChild.cloneNode(!0);if(r.children.length>1){const a=r.children[1];a.onload=()=>{r.children[0].style.display="none",a.style.display=""},a.complete&&a.naturalWidth&&a.onload(),a.dataset.src&&et(a)}let n=document.createElement("span");n.appendChild(r),n.dataset.type=i,n.addEventListener("click",a=>{let s=e.sitelistBox.querySelector(`[data-type="${i}"]`);s&&s.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}),e.groupTab.appendChild(n)})}async refreshEngines(){if(c&&!this.refreshing){this.refreshing=!0,setTimeout(()=>{this.refreshing=!1},500),Ht=c.lastModified,this.removeBar(),Se&&Se.length&&Se.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),Se=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.historyTypeEle=null;for(let e of c.sitesConfig)await this.createType(e);this.initHistorySites(),this.initSort(),this.buildAllPageGroupTab(),Re&&this.appendBar()}}waitForHide(e){let t=this;if(this.bar.classList.contains("grabbing")||this.hiding)return;e===0&&(this.hiding=!0,setTimeout(()=>{t.hiding=!1},500)),this.touched=!1;var i=()=>{if(t.bar.classList.remove("search-jumper-isTargetImg"),t.bar.classList.remove("search-jumper-isTargetAudio"),t.bar.classList.remove("search-jumper-isTargetVideo"),t.bar.classList.remove("search-jumper-isTargetLink"),t.bar.classList.remove("initShow"),t.tips.style.opacity=0,t.tips.style.display="none",ie(t.tips,""),t.funcKeyCall)if(t.setFuncKeyCall(!1),ce&&!ce.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||t.con.classList.contains("resizePage")){t.initPos();let n=t.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(n&&!n.classList.contains("search-jumper-open"))if(n.onmouseup)n.onmouseup();else{let a=new PointerEvent("mouseup");n.dispatchEvent(a)}}else t.bar.style.display="none";c.prefConfig.autoClose&&t.closeOpenType(),t.hideTimeout=null};this.hideTimeout&&clearTimeout(this.hideTimeout);let r=typeof e>"u"?this.funcKeyCall?500:c.prefConfig.autoDelay||1e3:e;r?this.hideTimeout=setTimeout(i,r):i(),this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}searchEngineWords(e){return e=e.replace(/( |^)-\S+/g,""),/".+"/.test(e)&&(e=e.replace(/"(.+)"/g,(t,i,r,n)=>`\u25CE${i}\u25CE`).replace(/^◎|◎$/g,"")),this.lastSearchEngineWords=e.replace(/['";]/g," "),this.lastSearchEngineWords}setInPageWords(e,t,i){this.initInPageWords.push(e),this.con.classList.add("in-find");let r=()=>{setTimeout(async()=>{if(X(document).style.display==="none"&&(X(document).style.display=""),this.lockWords)this.initInPageWords=[];else{for(;document.hidden;)await Je(1e3);V.setItem("lastHighlight",location.hostname);let n=this.initInPageWords.shift();for(;n;)this.searchJumperInPageInput.value=n,this.submitInPageWords(!!i),n=this.initInPageWords.shift()}t&&t(),await Je(100),V.setItem("lastHighlight","")},300)};if(document.readyState!="complete"){let n=a=>{document.readyState=="complete"&&(document.removeEventListener("readystatechange",n),window.removeEventListener("load",n),r())};document.addEventListener("readystatechange",n),window.addEventListener("load",n)}else r()}searchInPageRule(){if(c.prefConfig.disableAutoHighlight){let e=c.prefConfig.disableAutoHighlight.trim().split(`
`);for(let t=0;t<e.length;t++){let i=e[t],r=!1;if(i.indexOf("/")===0){let n=i.match(/^\/(.*)\/([igm]*)$/);n&&(r=new RegExp(n[1],n[2]).test(ue))}else r=this.globMatch(i,ue);if(r){this.disableAutoHighlight=!0;return}}}if(ar===location.hostname&&(this.disableAutoHighlight=!0),c.prefConfig.inPageRule){let e=Object.keys(c.prefConfig.inPageRule);for(let t=0;t<e.length;t++){let i=e[t];if(!i)continue;let r=!1;if(i.indexOf("/")===0){let n=i.match(/^\/(.*)\/([igm]*)$/);n&&(r=new RegExp(n[1],n[2]).test(ue))}else r=this.globMatch(i,ue);if(r){let n=c.prefConfig.inPageRule[i];if(!n)continue;this.inPageRuleKey=i,this.disableAutoHighlight=!0,this.setInPageWords(n);break}}}}checkSearchJump(){if(this.inPageRuleKey||this.disableAutoHighlight)return;let e;if(c.prefConfig.showInSearchJumpPage&&ri&&!si){let t=!Xt&&Li&&location.href.indexOf(Li)!=-1;if(t&&V.setItem("clickLink",""),Xt&&Xt.indexOf(ri)!=-1||t){Pe&&this.wordModeBtn.classList.add("checked"),e=Pe;try{e=decodeURIComponent(e),e=this.searchEngineWords(e)}catch{}}}if(e=e||$e,e){this.appendBar();let t=this;this.setInPageWords(e,()=>{!t.navMarks.innerHTML&&t.bar.style.display==="none"&&t.removeBar()},!0)}else if(!this.searchJumperInPageInput.value&&Xt.indexOf(ri)!=-1&&Pe){e=Pe,this.wordModeBtn.classList.add("checked");try{e=decodeURIComponent(e)}catch{}this.searchJumperInPageInput.value=e}}inSearchEngine(){if(!this.currentType||!ce||Lt||this.inPageRuleKey||this.disableAutoHighlight)return;if(!/sidesearch=(1|true)$/i.test(location.search)&&(!/#p{/.test(ce.url)||ce.keywords)){if(this.appendBar(),this.currentType.classList.contains("search-jumper-needInPage"))this.bar.classList.add("search-jumper-isTargetPage");else if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;c.prefConfig.hideOnSearchEngine||(this.bar.style.display="",this.initPos())}this.insertHistory(this.currentType,!0),this.wordModeBtn.classList.add("checked");let e=c.prefConfig.showInSearchEngine?this.searchEngineWords(Ve):$e;e&&this.setInPageWords(e,null,!0)}getSuggest(e){const t=this.suggestDatalist,i=c.prefConfig.suggestType,r=this.suggestRequestId=(this.suggestRequestId||0)+1;if(ie(t,""),!e||!["google","baidu","bing"].includes(i))return;const n={google:"https://suggestqueries.google.com/complete/search?client=youtube&q=%s&jsonp=window.google.ac.h",baidu:"https://suggestion.baidu.com/su?wd=%s&cb=",bing:"https://api.bing.com/qsonhs.aspx?type=json&q=%s"};new Promise((s,o)=>{De({method:"GET",url:n[i].replace("%s",encodeURIComponent(e)),anonymous:!0,referrerPolicy:"no-referrer",headers:{Referer:""},responseType:i==="baidu"?"blob":"",onload:p=>{if(p.status<200||p.status>=300)return o(new Error("Suggestion request failed"));if(i!=="baidu")return s(p.responseText||p.response);const h=new FileReader;h.onload=()=>s(h.result),h.onerror=()=>o(new Error("Could not decode suggestions")),h.readAsText(p.response,"GBK")},onerror:()=>o(new Error("Suggestion request failed")),ontimeout:()=>o(new Error("Suggestion request timed out"))})}).then(s=>{if(!s||r!==this.suggestRequestId||i!==c.prefConfig.suggestType)return;let o;if(i==="google"){const p=s.match(/window.google.ac.h\((.*)\)$/);o=p?JSON.parse(p[1])[1].map(h=>h[0]):[]}else if(i==="baidu"){const p=s.match(/.*,s:(.*)}\);$/);o=p?JSON.parse(p[1]):[]}else o=(JSON.parse(s).AS.Results||[]).flatMap(p=>p.Suggests.map(h=>h.Txt));for(const p of o){const h=document.createElement("option");h.value=p,t.appendChild(h)}}).catch(s=>fe(s))}searchSiteBtns(e){let t=e.indexOf("**"),i="",r=!1;t>0&&(i=e.slice(0,t),e=e.slice(t+2)),e.indexOf("^")===0?r=!0:(i=i.toLowerCase(),e=e.toLowerCase()),e?this.con.classList.add("searching"):this.con.classList.remove("searching");let n=!/[^\w\.\/\:\*\?\^\$]/.test(e);this.allListBtns.forEach(o=>{o.classList.add("input-hide")}),Se.forEach(o=>{o.classList.add("input-hide")});let a=0;ie(this.filterGlob,""),this.allSiteBtns.forEach(o=>{let p=o[0],h=o[1],d=p.parentNode,m=p.dataset.type,u=p.dataset.name,f=p.title;r||(m=m.toLowerCase(),u=u.toLowerCase(),f=f.toLowerCase());let w="";if(i){if(!this.globMatch(i,m))return;w=p.dataset.type+"**"}let b=!1;if(p.dataset.clone||(this.globMatch(e,u)?(b=!0,w+="^"+p.dataset.name+"$"):p.title&&this.globMatch(e,f)&&(b=!0,w+="^"+p.title+"$")),!b){if(n){if(!p.dataset.host){let j=/^https?:\/\/([^\/]*)\/[\s\S]*$/,v=h.url,C=j.test(v)?v.replace(j,"$1"):v;p.dataset.host=C&&C.split(`
`)[0].toLowerCase()}b=this.globMatch(e,p.dataset.host)}b?p.dataset.isPage&&(w+="^"+p.dataset.host+"$"):p.classList.add("input-hide")}if(b){p.classList.remove("input-hide"),d&&d.classList.remove("input-hide");let j;for(let v=0;v<this.allListBtns.length;v++)if(this.allListBtns[v].id=="list"+p.dataset.id){j=this.allListBtns[v];break}if(j&&j.classList.remove("input-hide"),a<50&&e&&this.searchInput.value!==w&&!this.filterGlob.querySelector(`option[value="${CSS.escape(w)}"]`)){a++;let C=document.createElement("option");C.value=w,this.filterGlob.appendChild(C)}}}),Se.forEach(o=>{let p;for(let h=0;h<this.allLists.length;h++)if(this.allLists[h].dataset.type==o.dataset.type){p=this.allLists[h];break}p&&(o.classList.contains("input-hide")?p.classList.add("input-hide"):p.classList.remove("input-hide"))});let s=this.bar.querySelector(".search-jumper-type:not(.input-hide)");if(s){if(!s.classList.contains("search-jumper-open")){let o=s.querySelector("span.search-jumper-btn");if(o.onmouseup)o.onmouseup();else{let p=new PointerEvent("mouseup");o.dispatchEvent(p)}}if(this.searchJumperExpand.parentNode==s){let o=new PointerEvent("click");this.searchJumperExpand.dispatchEvent(o)}}}globMatch(e,t,i){if(t.length>500)return!1;try{if(e.length==0||e==="*")return!0;if(e.length===1&&e[0]==="$")return!t||t.length===0;if(e.length>1&&e[0]==="*"&&(!t||t.length===0))return!1;if(!i)if(i=!0,e.length>1&&e[0]==="^"&&t&&t.length!==0){if(e=e.substring(1),e[0]!==t[0])return!1}else e[0]!=="*"&&(e="*"+e);if(e.length>1&&e[0]==="?"||e.length!=0&&t&&t.length!==0&&e[0]===t[0])return this.globMatch(e.substring(1),t.substring(1),!!i);if(e.length>0&&e[0]==="*")return this.globMatch(e.substring(1),t,!!i)||this.globMatch(e,t&&t.substring(1),!!i)}catch(r){fe(r)}return!1}setCurrentSite(e,t){ce=e,t.classList.add("current"),Ve="",!/#p{|^(showTips|find)/.test(e.url)&&Tt.test(e.url)&&(this.updateCacheKeywords(),V.setItem("referrer",location.hostname))}updateCacheKeywords(){let e=Oe();e&&e!=Pe&&(Pe=e,V.setItem("cacheKeywords",e))}refresh(){this.refreshInPageTimer&&clearTimeout(this.refreshInPageTimer),this.refreshInPageTimer=setTimeout(()=>{if(this.bar.style.display=="none"){ce=null;let t;for(let i in c.sitesConfig){if(ce)break;if(t=c.sitesConfig[i],!t)continue;let r=t.sites;for(let n in r){if(ce)break;let a=r[n];if(!a||!a.url)continue;let s;if(a.match!=="0"){if(a.match)new RegExp(a.match).test(ue)&&(s=a);else if(a.url.indexOf(location.hostname)!=-1){if(a.url.indexOf("site")!=-1){let o=a.url.match(/site(%3A|:)([\s\S]+?)[\s%]/);o&&ue.indexOf(o[2])!=-1&&a.url.replace(o[0],"").indexOf(location.hostname)!=-1&&(s=a)}else if(!ce&&a.url.replace(/^https?:\/\//,"").replace(location.host,"").replace(/\/?[\?#][\s\S]*/,"")==location.pathname.replace(/\/$/,"")){let o=a.url.match(/[^\/\?&]+(?=%[stb])/g);o&&(o=o.join(".*"),new RegExp(o).test(ue)&&(s=a))}}}if(s){let o=this.getTargetSitesByName([s.name])[0];this.currentType=o.parentNode,this.setCurrentSite(s,o)}}}if(ce&&Tt.test(ce.url)&&(!/#p{/.test(ce.url)||ce.keywords)&&!c.prefConfig.hideOnSearchEngine){if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;this.appendBar(),this.bar.style.display="",this.initPos();let i=this.bar.querySelector(`.search-jumper-type[data-type="${t.type}"]>span`);if(i&&!i.classList.contains("search-jumper-open")&&(this.bar.insertBefore(i.parentNode,this.bar.children[0]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen))if(i.onmouseup)i.onmouseup();else{let r=new PointerEvent("mouseup");i.dispatchEvent(r)}}}let e=this.curHighlightWords;if(this.highlight(""),ce&&c.prefConfig.showInSearchEngine){let t=this.lastSearchEngineWords,i=this.searchEngineWords(Oe());if(i&&t!=i){let r=this.anylizeInPageWords(i,!0);this.highlight(r)}else e&&this.highlight(e)}else e&&this.highlight(e)},500)}initSort(){if(c.prefConfig.shiftLastUsedType&&this.historyTypeEle&&(ce?this.bar.insertBefore(this.historyTypeEle,this.bar.children[1]):this.bar.insertBefore(this.historyTypeEle,this.bar.children[0])),c.prefConfig.sortType){let e=this;Se.sort((r,n)=>{let a=Me[r.dataset.type]||0;return(Me[n.dataset.type]||0)-a});let t=!1,i=!e.bar.children[0].classList.contains("search-jumper-open");for(let r=Se.length-1;r>=0;r--){let n=Se[r],a=Me[n.dataset.type]||0;if(r==Se.length-1)a>0&&(t=!0,Me[n.dataset.type]=0);else{let s=Me[Se[r+1].dataset.type]||0;a-s>10&&(t=!0,Me[n.dataset.type]=s+10)}e.bar.insertBefore(n,e.bar.children[i?0:1])}t&&V.setItem("sortTypeNames",Me)}}initHistorySites(){this.historySiteBtns=[],this.txtHistorySiteBtns=[],this.imgHistorySiteBtns=[],this.linkHistorySiteBtns=[],this.videoHistorySiteBtns=[],this.audioHistorySiteBtns=[];let e=this;it.forEach(async t=>{for(let i of c.sitesConfig){let r=!1,n=i.bookmark||i.sites.length>100||/^BM/.test(i.type)&&i.icon==="bookmark";for(let a=0;a<i.sites.length;a++){let s=i.sites[a];if(s.name==t){let o=await e.createSiteBtn(c.prefConfig.noIcons?"0":s.icon,s,!0,n,i,!0);o.classList.add("historySite"),e.historySiteBtns.push(o),!i.selectImg&&!i.selectLink&&!i.selectPage&&!i.selectVideo&&!i.selectAudio&&e.txtHistorySiteBtns.push(o),i.selectImg&&e.imgHistorySiteBtns.push(o),(i.selectLink||i.selectPage)&&e.linkHistorySiteBtns.push(o),i.selectVideo&&e.videoHistorySiteBtns.push(o),i.selectAudio&&e.audioHistorySiteBtns.push(o),r=!0;break}}if(r)break}})}insertHistory(e,t){if(!c.prefConfig.historyLength)return;e.style.width="auto",e.style.height="auto";let i=this;this.historyInserted=!0;let r=0,n=!t&&c.prefConfig.historyInsertFirst,a=!1,s=0;n||(a=this.searchJumperExpand.parentNode==e&&!c.prefConfig.expandType,a&&(s=(c.prefConfig.numPerLine||7)-1,s=c.prefConfig.historyLength<s?s+s-c.prefConfig.historyLength:s,c.prefConfig.hideTileType&&s++));let o=this.historySiteBtns;e.classList.contains("search-jumper-needInPage")?o=this.txtHistorySiteBtns:e.classList.contains("search-jumper-targetImg")?o=this.imgHistorySiteBtns:e.classList.contains("search-jumper-targetAudio")?o=this.audioHistorySiteBtns:e.classList.contains("search-jumper-targetVideo")?o=this.videoHistorySiteBtns:(e.classList.contains("search-jumper-targetLink")||e.classList.contains("search-jumper-targetPage"))&&(o=this.linkHistorySiteBtns);for(let p=0;p<o.length;p++){let h=o[p];if(h.style.display=="none")continue;let d=h.querySelector("img");if(d&&d.dataset.src&&et(d),h.parentNode!=e){let m=e.querySelectorAll("a.search-jumper-btn"),u=!1;for(let f=0;f<m.length;f++){let w=m[f];if((w.dataset.oriName||w.dataset.name)==(h.dataset.oriName||h.dataset.name)){u=!0;break}}if(u)continue;if(n)e.children.length>1?e.insertBefore(h,e.children[1]):e.appendChild(h);else if(a){let f=e.querySelectorAll("a.search-jumper-btn");f.length>s?e.insertBefore(h,f[s]):e.insertBefore(h,i.searchJumperExpand)}else e.appendChild(h);if(++r>=c.prefConfig.historyLength)break}else n&&(e.children.length>1?e.insertBefore(h,e.children[1]):e.appendChild(h))}e.style.width=e.scrollWidth+"px",e.style.height=e.scrollHeight+"px"}recoveHistory(){if(!c.prefConfig.historyLength||!this.historyInserted)return;this.historyInserted=!1;let e=this,t;for(let i=0;i<this.historySiteBtns.length;i++){let r=this.historySiteBtns[i];r.classList.contains("historySite")&&(t=r.parentNode,this.siteBtnReturnHome(r))}t&&t.classList.contains("search-jumper-open")&&(t.style.width="auto",t.style.height="auto",t.style.width=t.scrollWidth+"px",t.style.height=t.scrollHeight+"px")}bindSite(e,t){if(e.getAttribute("bind"))return;e.setAttribute("bind",!0);let i=this;t.href&&(e.href=t.href),e.style.display=t.style.display,e.onclick||(e.onclick=r=>(t.dataset.showTips||t.click(),r.stopPropagation(),r.preventDefault(),!1)),e.addEventListener("mousedown",async r=>{t.dataset.showTips?(i.con.classList.contains("search-jumper-showall")?D=e.parentNode:i.waitForHide(0),t.dispatchEvent(new CustomEvent("showTips",{detail:e}))):(await i.siteSetUrl(t,{button:r.button,altKey:r.altKey,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey,metaKey:r.metaKey},!1),t.href&&(e.href=t.href),e.setAttribute("target",t.target))},!1),e.addEventListener("dragover",r=>{r.preventDefault()},!0),e.addEventListener("dragenter",r=>{i.dragTarget&&i.dragTarget.classList.remove("dragTarget"),i.dragTarget=e,i.dragTarget.classList.add("dragTarget"),clearTimeout(i.dragTimer),i.dragTimer=setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},1e3)},!0),e.addEventListener("dragleave",r=>{e.classList.remove("dragTarget")},!0),e.addEventListener("drop",r=>{clearTimeout(i.dragTimer),i.dragTarget&&i.dragTarget.classList.remove("dragTarget"),i.searchBySiteName(t.dataset.name,r)},!0)}async createList(e,t,i){let r=this,n=document.createElement("div");n.className="sitelist",n.style.visibility="hidden";let a=document.createElement("div");a.className="sitelistCon",n.appendChild(a),n.addEventListener("mouseenter",h=>{r.listArrow.style.cssText=""});let s=document.createElement("p");const o=document.createElement("span");if(o.textContent=t.dataset.title,s.appendChild(o),s.title=J("batchOpen"),s.addEventListener("click",h=>{r.batchOpen(i,{ctrlKey:h.ctrlKey,shiftKey:h.shiftKey,altKey:h.altKey,metaKey:h.metaKey,button:h.ctrlKey||h.shiftKey||h.altKey||h.metaKey?0:2})}),n.dataset.type=t.dataset.type,a.appendChild(s),ft&&!Ue){const h=document.createElement("button");h.type="button",h.textContent=J("split").button,h.className="search-jumper-split-btn",h.addEventListener("click",d=>{d.stopPropagation(),r.openSplitSearch(i).catch(m=>window.alert(m.message))}),s.appendChild(h)}function p(h,d){let m=document.createElement("div");m.id="list"+d;let u=h.querySelector("img"),f=document.createElement("a");if(f.setAttribute("ref","noopener noreferrer"),r.bindSite(f,h),m.appendChild(f),r.allListBtns.push(m),u&&!c.prefConfig.noIcons){let b=u.src||u.dataset.src,j=document.createElement("img"),v=document.createElement("div");v.appendChild(j),f.appendChild(v),j.src=Yr,b&&(j.dataset.src=b)}let w=document.createElement("p");w.innerText=h.dataset.name,m.title=h.title,m.dataset.name=h.dataset.name,f.appendChild(w),a.appendChild(m)}try{for(let[h,d]of e.entries())p(d,d.dataset.id),h%50===49&&await Je(1)}catch{for(let d=0;d<e.length;d++){let m=e[d];p(m,m.dataset.id)}}return this.allLists.push(n),n}async initList(e){e.dataset.inited||(e.style.display="none",e.dataset.inited=!0,[].forEach.call(e.querySelectorAll("div>a>div>img"),t=>{if(t.dataset.src){const i=t.dataset.src;Gr(i,()=>{t.src=i}),delete t.dataset.src}}),await Je(0))}async listPos(e,t){await this.initList(t),t.style="",this.preList=t;let i=e.clientWidth,r=e.clientHeight,n=e.offsetLeft+i/2-this.con.scrollLeft,a=e.offsetTop+r/2-this.con.scrollTop,s=e.offsetParent;for(;s!==null;)n+=s.offsetLeft,a+=s.offsetTop,s=s.offsetParent;let o=window.innerWidth||document.documentElement.clientWidth,p=window.innerHeight||document.documentElement.clientHeight,h=this.listArrow.style;if(h.visibility="visible",h.opacity=1,this.funcKeyCall){t.style.display="block",h.opacity=0;const d=e.getBoundingClientRect();n=d.x+i/2-this.con.scrollLeft,a=d.y+r/2-this.con.scrollTop,n-=t.clientWidth/2;let m=e.getBoundingClientRect().top;m>p/2?(m<t.clientHeight+10&&(t.style.height=m-20+"px"),a-=t.clientHeight+r/2+5):(a+=r/2+5,m+t.clientHeight+r+10>p&&(t.style.height=p-m-r-20+"px")),n<20&&(n=20);let u=o-t.clientWidth-30;n>u&&(n=u),t.style.left=n+"px",t.style.top=a+"px",t.style.display=""}else if(this.bar.clientWidth>this.bar.clientHeight){let d=n;n<30?d=30:n>o-40&&(d=o-40),h.left=d-10+"px",a-r/2<100?(t.style.top=this.bar.clientHeight+"px",h.top=this.bar.clientHeight-10+"px"):(t.style.bottom=this.bar.clientHeight+"px",h.bottom=this.bar.clientHeight-9+"px"),n-=t.scrollWidth/2,n>o-t.scrollWidth-10&&(n=o-t.scrollWidth-10),n<0&&(n=0),t.style.left=n+"px"}else{let d=a;a<30?d=30:a>p-30&&(d=p-30),h.top=d-10+"px",n-i/2<100?(t.style.left=this.bar.clientWidth+"px",h.left=this.bar.clientWidth-9+"px"):(t.style.right=this.bar.clientWidth+"px",h.right=this.bar.clientWidth-9+"px"),a-=t.scrollHeight/2,a>p-t.scrollHeight&&(a=p-t.scrollHeight),a<0&&(a=0),t.style.top=a+"px",t.style.maxHeight="100vh"}}clingPos(e,t,i){let r=e.clientWidth||e.offsetWidth,n=e.clientHeight||e.offsetHeight;const a=e.getBoundingClientRect();let s,o,p=this.con&&this.con.classList.contains("search-jumper-showall"),h=window.innerWidth||document.documentElement.clientWidth,d=window.innerHeight||document.documentElement.clientHeight;if(this.tips.style.position="",t.style.height="",t.style.position="",!e||/^(body|html)$/i.test(e.nodeName))this.tips.style.transition="none",this.tips.style.position="fixed",t.style.right="",t.style.bottom="",t.style.left=(h-t.clientWidth)/2+"px",t.style.top="min(11%,110px)";else if(p)s=a.x+r/2,o=a.y+n/2,s-=t.clientWidth/2-this.con.scrollLeft,o+=this.con.scrollTop,o>d/2?o-=t.clientHeight+n/2+10:o+=n/2+10,t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px";else if(this.funcKeyCall||!e.classList.contains("search-jumper-btn")){t.style.position="absolute";let m=window.pageYOffset||document.documentElement.scrollTop||X(document).scrollTop,u=window.pageXOffset||document.documentElement.scrollLeft||X(document).scrollLeft;s=a.x+r/2-(this.funcKeyCall?this.con.scrollLeft-u:0),o=a.y+n/2-(this.funcKeyCall?this.con.scrollTop-m:0),s-=t.clientWidth/2;let f=e.getBoundingClientRect().top;f>d/2?(f<t.clientHeight+10&&(t.style.height=f-20+"px"),o-=t.clientHeight+n/2+5):(o+=n/2+5,f+t.clientHeight+n+10>d&&(t.style.height=d-f-n-20+"px")),s<20&&(s=20);let w=h+u-t.clientWidth-30;s>w&&(s=w),t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px"}else{s=e.offsetLeft+r/2-this.con.scrollLeft-e.parentNode.scrollLeft,o=e.offsetTop+n/2-this.con.scrollTop-e.parentNode.scrollTop;let m=e.offsetParent;for(;m!==null;)s+=m.offsetLeft,o+=m.offsetTop,m=m.offsetParent;o<n?(s-=t.clientWidth/2,o+=t.clientHeight/2,s<5?(s=5,t.style.left="5px",t.style.right="",t.style.bottom=""):s>h-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.bottom=""):(t.style.left=s+"px",t.style.right="",t.style.bottom=""),t.style.top=(i?n:n+20)+"px"):o>d-n-10?(s-=t.clientWidth/2,s<5?(t.style.left="5px",t.style.right="",t.style.top=""):s>h-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.top=""):(t.style.left=s+"px",t.style.right="",t.style.top=""),t.style.bottom=(i?n:n+20)+"px"):s>h-r-10?(t.style.left="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.right=(i?r:r+20)+"px",t.style.top=o+"px"):s<r?(t.style.right="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.left=(i?r:r+20)+"px",t.style.top=o+"px"):(t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px")}}tipsPos(e,t,i){ie(this.tips,t);let r=this.tips.querySelector("div");if(r&&!this.tips.querySelector("[data-close]")){let a=document.createElement("span");a.dataset.close=!0,a.innerText="\xD7",r.appendChild(a)}i&&this.tips.insertBefore(i,this.tips.firstChild),location.protocol==="https:"&&[].forEach.call(this.tips.querySelectorAll("[src^='http:']"),a=>{a.src=a.src.replace("http:","https:")}),this.tips.style.pointerEvents="",this.tips.style.display="",this.tips.style.opacity=1,this.clingPos(e,this.tips),clearTimeout(this.hideTips),this.tips.style.transition&&setTimeout(()=>{this.tips.style.transition=""},1);let n=this;[].forEach.call(this.tips.querySelectorAll("iframe"),a=>{let s=a.innerHTML;if(s)if(ie(a,""),a.src)a.addEventListener("load",o=>{try{if(!a||!a.parentNode)return;let p=a.contentDocument||a.contentWindow.document,h=p.createElement("div");p.body.appendChild(h),Rr(h,s,p)}catch{}});else try{let o=a.contentDocument||a.contentWindow.document;o.open(),o.write(s),o.close()}catch{}}),[].forEach.call(this.tips.querySelectorAll("img,video"),a=>{a.addEventListener("load",s=>{n.clingPos(e,n.tips)})}),window.markdownit&&(n.md||(n.md=window.markdownit()),[].forEach.call(this.tips.querySelectorAll(".markdown"),a=>{ie(a,n.md.render(a.innerHTML))}))}checkKwFilter(e,t){t.length>600&&(t=t.slice(0,500)+t.slice(t.length-10));let i=e.match(/^@{(.*?)}/);if(i){if(!D)return!1;let a=i[1];if(![].some.call(Ii(a,document),o=>o===D))return!1;e=e.replace(i[0],"")}let r,n=e.match(/^\/(.*)\/(\w*)$/);return n?r=new RegExp(n[1],n[2]):r=new RegExp(e,"i"),r.test(t||"")}async createType(e){let t=this,i=e.type,r=e.icon,n=e.selectTxt,a=e.selectImg,s=e.selectAudio,o=e.selectVideo,p=e.selectLink,h=e.selectPage,d=e.sites,m=!1,u=typeof e.openInNewTab>"u"?c.prefConfig.openInNewTab:e.openInNewTab,f=[],w=document.createElement("span");w.className="search-jumper-type",!c.prefConfig.expandType&&d.length>10&&w.classList.add("not-expand"),e.match==="0"?(w.style.display="none",w.classList.add("notmatch")):e.match&&(new RegExp(e.match).test(ue)==!1?(w.style.display="none",w.classList.add("notmatch")):m=!0),typeof e.description<"u"?w.dataset.title=i+" - "+e.description:w.dataset.title=i,w.dataset.type=i;let b=document.createElement("span"),j=document.createElement("img"),v=document.createElement("b");i.length>=3?(v.innerText=i.trim().substr(0,4),/^[\w \-]+$/.test(v.innerText.substr(0,3))||(v.innerText=v.innerText.substr(0,2))):v.innerText=i,b.appendChild(v),j.style.display="none",w.appendChild(b),b.classList.add("search-jumper-word"),b.classList.add("search-jumper-btn"),b.classList.add("noIcon");let C=/^BM/.test(i)&&e.icon==="bookmark";if(r){b.classList.remove("noIcon");let x=/^[a-z\- ]+$/.test(r);if(j.onload=S=>{j.style.display="",v.innerText="",v.style.display="none",x||b.classList.remove("search-jumper-word")},x){let S=ge[r.trim().replace(/ /g,"_")];S==="fail"||!S?(v.className=r.indexOf("fa")===0?r:"fa fa-"+r,this.fontPool.push(v)):(v.innerText="",v.style.backgroundColor="currentColor",v.style.mask="url("+JSON.stringify(S)+") center / contain no-repeat")}else{if(/^data:/.test(r))j.src=r;else{let B=c.prefConfig.cacheSwitch&&ge[r];B==="fail"||(B?j.src=B:(et(j,r),!ge[r]&&!C&&_e.push(j)))}b.appendChild(j)}}w.addEventListener("mouseleave",x=>{t.listArrow.style.cssText="",t.dockerScaleBtns.forEach(S=>{S.style.setProperty("--scale",1)})});let g=[],k=x=>{switch(c.prefConfig.batchOpenConfirm){case 1:window.confirm(J("batchOpenConfirm"))&&t.batchOpen(g,x);break;case 2:t.batchOpen(g,x);break;default:(w.classList.contains("search-jumper-open")||x.shiftKey||x.altKey||x.ctrlKey||x.metaKey||window.confirm(J("batchOpenConfirm")))&&t.batchOpen(g,x);break}};if(c.prefConfig.shortcut&&e.shortcut&&!w.classList.contains("notmatch")){let x=e.shortcut.replace("Key","").replace("Digit","").toUpperCase();x.length==1&&(w.dataset.title+=` (${x})`),document.addEventListener("keydown",S=>{if(!(c.prefConfig.shortcut==2&&!ce)&&S.target.id!=="searchJumperInput"&&!(!e.ctrl==S.ctrlKey||!e.alt==S.altKey||!e.shift==S.shiftKey||!e.meta==S.metaKey)&&!(!c.prefConfig.enableInInput&&!e.ctrl&&!e.alt&&!e.shift&&!e.meta&&ht(document))){var B=(S.key||String.fromCharCode(S.keyCode)).toLowerCase();(e.shortcut==S.code||e.shortcut==B)&&(k(S),S.stopPropagation())}})}let A=0,$=this.scale*40,z=(x,S)=>{if(c.prefConfig.staticPosition){S?delete x.dataset.disable:x.dataset.disable="true";return}S?(x.style.display="",w.children.length>2&&w.insertBefore(x,w.children[2])):(x.style.display="none",t.searchJumperExpand.parentNode==w?w.insertBefore(x,t.searchJumperExpand):w.appendChild(x))},W=(x,S)=>{let B=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right"),y=!1;D&&(y=Rt(D));let N=D&&(D.href||D.src);A=0,f.forEach((R,O)=>{let Q=d[O],le=!0;if(Q.kwFilter){let ve;R.dataset.link?ve=N||x:ve=R.dataset.txt?x||D&&D.innerText||"":N||x||location.href,le=t.checkKwFilter(Q.kwFilter,ve)}le&&R.dataset.paste?(le=y,z(R,le)):Q.kwFilter&&z(R,le);let ne=R.querySelector("img");R.style.display!="none"&&A++,ne&&!ne.src&&ne.dataset.src&&et(ne)}),A>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(w.classList.add("not-expand"),w.appendChild(t.searchJumperExpand));let K=Math.max(w.scrollWidth,w.scrollHeight)+5+"px";c.prefConfig.disableTypeOpen&&(K=$+"px",S&&t.listPos(w.children[0],re)),B?(w.style.height=K,w.style.width=""):(w.style.width=K,w.style.height="")};b.addEventListener("checkSites",x=>{W(x.detail)},!1);let T=x=>{if(x){if(x.button===2)return k(x),!1;if(x.button===0&&(x.shiftKey||x.altKey||x.ctrlKey))return!1}if(t.funcKeyCall)return t.showAllSites(),!1;let S=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right");if(t.preList&&(t.preList.style.visibility="hidden",t.listArrow.style.cssText=""),w.classList.remove("search-jumper-move"),w.classList.contains("search-jumper-open"))c.prefConfig.minSizeMode&&t.bar.classList.add("minSizeModeClose"),w.classList.remove("search-jumper-open"),S?(w.style.height=$+"px",w.style.width=""):(w.style.height="",w.style.width=$+"px"),w.style.flexWrap="",c.prefConfig.disableTypeOpen&&(re.style.visibility="hidden");else{t.recoveHistory(),w.classList.add("search-jumper-open"),c.prefConfig.minSizeMode&&t.bar.classList.remove("minSizeModeClose");let B=Oe();W(B,x),setTimeout(()=>{w.classList.contains("search-jumper-open")&&(w.style.flexWrap="nowrap",w.classList.add("search-jumper-move"))},c.prefConfig.typeOpenTime),Se.forEach(y=>{w!=y&&(y.classList.remove("search-jumper-open"),y.style.width=$+"px",y.style.height=$+"px",y.style.flexWrap="")})}c.prefConfig.disableTypeOpen||setTimeout(()=>{t.checkScroll()},c.prefConfig.typeOpenTime)},E=!1,I,M,H=x=>{document.removeEventListener("mouseup",H),document.removeEventListener("mousemove",Y),E||T(x),E=!1},Y=x=>{E?(t.bar.style.left=M.x+x.clientX-I.x+"px",t.bar.style.top=M.y+x.clientY-I.y+"px"):(t.tips.style.opacity=0,t.tips.style.pointerEvents="",E=!0,I={x:x.clientX,y:x.clientY},M={x:parseInt(t.bar.style.left),y:parseInt(t.bar.style.top)})};b.onmouseup=function(x){if(x&&t.funcKeyCall&&x.button===0&&!(x.shiftKey||x.altKey||x.ctrlKey)){E=!1,x.preventDefault&&x.preventDefault(),document.addEventListener("mouseup",H),document.addEventListener("mousemove",Y);return}T(x)},b.oncontextmenu=function(x){x.preventDefault()},b.addEventListener("click",x=>(t.batchOpen(g,x),!1),!1),b.addEventListener("dblclick",x=>{x.stopPropagation(),x.preventDefault()},!0);let se,re,L=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,F=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,U=!Zt||L>600&&F>600;w.addEventListener("sitelist",async x=>{w.appendChild(re),await t.listPos(x.detail.bind,re),re.style.display="block"},!1),b.addEventListener("mouseenter",x=>{if(!E&&(!t.funcKeyCall&&c.prefConfig.showSiteLists&&(c.prefConfig.alwaysShowSiteLists||!w.classList.contains("search-jumper-open"))?(w.appendChild(re),t.listPos(w.children[0],re)):U&&t.tipsPos(b,w.dataset.title),c.prefConfig.overOpen)){if(w.classList.contains("search-jumper-open"))return;clearTimeout(se),se=setTimeout(()=>{T(x)},500)}},!1),b.addEventListener("mouseleave",x=>{t.tips.style.opacity=0,t.tips.style.pointerEvents="",c.prefConfig.overOpen&&clearTimeout(se)},!1);let Z=!1,_=d&&d.length>200;w.dataset.id=t.siteIndex,t.stopInput=!1;async function ae(x,S){if(!x.name)return;let B=await t.createSiteBtn(_||c.prefConfig.noIcons?"0":x.icon,x,u,C,e);B&&(B.classList.contains("notmatch")||A++,B.dataset.type=i,B.dataset.id=t.siteIndex,t.siteIndex++,t.allSiteBtns.push([B,x]),w.appendChild(B),f.push(B),!x.nobatch&&x.match!=="0"&&g.push(x.name),!Z&&!ce&&(B.dataset.current||m)&&!w.classList.contains("notmatch")&&(Z=!0,B.dataset.current&&(c.prefConfig.showCurrent||(B.style.display="none"),t.setCurrentSite(x,B)),t.currentType=w))}try{for(let[x,S]of d.entries())await ae(S,x),x%100===99&&await Je(1)}catch{for(let S=0;S<d.length;S++)ae(d[S],S);await Je(1)}if(c.prefConfig.sortSite&&w.children.length>1){f.sort((S,B)=>{let y=Ne[S.dataset.name]||0;return(Ne[B.dataset.name]||0)-y});let x=!1;for(let S=f.length-1;S>=0;S--){let B=f[S],y=Ne[B.dataset.name]||0;if(S==f.length-1)y>0&&(x=!0,Ne[B.dataset.name]=0);else{let N=Ne[f[S+1].dataset.name]||0;y-N>10&&(x=!0,Ne[B.dataset.name]=N+10)}w.insertBefore(B,w.children[1])}x&&V.setItem("sortSiteNames",Ne)}if(f.forEach(x=>{x.classList.contains("notmatch")&&w.appendChild(x)}),re=await t.createList(f,w,g),Z){if(c.prefConfig.currentTypeFirst?t.bar.insertBefore(w,t.bar.children[0]):t.bar.insertBefore(w,t.bar.children[t.bar.children.length-1]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){w.classList.add("search-jumper-open"),w.classList.add("search-jumper-move"),A>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(w.classList.add("not-expand"),w.appendChild(t.searchJumperExpand));let x=-1,S=[];if(document.readyState!=="complete"){x=3;let B=y=>{document.readyState==="complete"&&(document.removeEventListener("readystatechange",B),window.removeEventListener("load",B),S.forEach(N=>{N&&!N.src&&N.dataset.src&&et(N)}),S=[])};document.addEventListener("readystatechange",B),window.addEventListener("load",B)}f.forEach((B,y)=>{let N=B.querySelector("img"),K=d[y];if(K&&Ve&&K.kwFilter){let R=t.checkKwFilter(K.kwFilter,Ve);z(B,R)}if(B.style.display!="none"&&N&&!N.src&&N.dataset.src){if(x>=0&&!/^data/.test(N.dataset.src))if(x!==0)x--;else{S.push(N);return}et(N)}})}}else t.historyTypeEle||Ot==i&&(t.historyTypeEle=w),t.bar.insertBefore(w,t.bar.children[t.bar.children.length-1]);return w.style.width=w.scrollHeight+"px",w.style.height=w.scrollHeight+"px",re.style.display="none",w.appendChild(re),n&&a&&s&&o&&p&&h?w.classList.add("search-jumper-targetAll"):(n&&w.classList.add("search-jumper-needInPage"),a&&w.classList.add("search-jumper-targetImg"),s&&w.classList.add("search-jumper-targetAudio"),o&&w.classList.add("search-jumper-targetVideo"),p&&w.classList.add("search-jumper-targetLink"),h&&w.classList.add("search-jumper-targetPage")),Se.push(w),w}async openSiteBtn(e,t,i=!1){this.lastTips=null;let r=new CustomEvent("mouseenter");e.dispatchEvent(r),await this.siteSetUrl(e);let n=e.dataset.isPage;t||(t="_blank"),n&&e.setAttribute("target",t),n&&t=="_blank"&&e.href?ye(e.href,{active:i,insert:!0}):e.click(),e.setAttribute("target",e.dataset.target==1?"_blank":"_self")}async openSplitSearch(e){const t=this.searchJumperInputKeyWords.value||Oe()||this.tileInput.value||window.prompt(J("keywords"));if(!t||!t.trim())return;const i={pageUrl:location.href,title:document.title,charset:document.characterSet,elements:{},target:D&&{nodeName:D.nodeName,href:D.href,src:D.src,title:D.title,alt:D.alt,textContent:D.nodeName==="A"?D.textContent:""}},r=[],n=[];for(const s of this.getTargetSitesByName(e)){if(!s.resolveSplit){n.push(s.dataset.name);continue}const o=await s.resolveSplit(t,i);if(!o){n.push(s.dataset.name);continue}r.push({id:crypto.randomUUID(),name:s.dataset.name,site:s.splitSite,type:s.splitType,request:o})}if(!r.length)throw new Error(J("split").noEngines);const a=await(!1).runtime.sendMessage({action:"splitOpen",query:t,context:i,entries:r,skipped:n,lang:Ae});if(!a?.ok)throw new Error(J("split")[a?.error]||a?.error||J("split").ended)}async batchOpen(e,t,i){const r=this.getTargetSitesByName(e),n=!Ue&&i!==!0&&r.length&&r.every(s=>s.splitType?.openInNewTab===5);if(ft&&(t.altKey&&t.shiftKey||(i===5||n)&&!t.altKey&&!t.ctrlKey&&!t.shiftKey&&!t.metaKey)){try{await this.openSplitSearch(e)}catch(s){window.alert(s.message)}return}let a=this;if(a.batchOpening=!0,a.customInput=!1,t.altKey&&t.shiftKey){let s=window.innerWidth||document.documentElement.clientWidth,o="<title>SearchJumper Multi</title><style>body{background: black; margin: 0;}iframe{box-sizing: border-box;padding: 5px}</style>",p=window.open("","_blank"),h=1;for(let d of r)if(d.dataset.isPage){if(await a.siteSetUrl(d),a.stopInput)return;if(!d.href)continue;let m=document.createElement("iframe");m.width=r.length<=2||s<=1280?"50%":"33%",m.height="100%",m.frameBorder="0",m.sandbox="allow-same-origin allow-scripts allow-popups allow-forms",m.id="searchJumper"+h++,m.style.display="none",o+=m.outerHTML,De({method:"GET",url:d.href,headers:{referer:d.href,origin:d.href,"User-Agent":navigator.userAgent},onload:function(u){let f=p.document.querySelector("iframe#"+m.id),w=()=>{let b=f.contentDocument||f.contentWindow&&f.contentWindow.document;if(b)try{f.style.display="",f.src=d.href;let j=`<base href="${d.href.replace(/[^\/]*$/,"")}" />`,v=u.response.indexOf("<head")!==-1?u.response.replace(/(\<head.*?\>)/,"$1"+j):j+u.response;b.write(v)}catch{}else setTimeout(()=>{w()},500)};f&&w()},onerror:function(u){fe(u)},ontimeout:function(u){fe(u)}})}p.document.write(o),p.document.close()}else if((t.ctrlKey||t.metaKey)&&t.shiftKey)for(let s of r){if(await a.siteSetUrl(s),a.stopInput)return;if(s.dataset.isPage&&s.href){let o={};D&&(o={src:D.src||D.href||"",title:D.title||D.alt}),e=e.filter(p=>p!==s.dataset.name),V.setItem("lastSign",{target:o,sites:e}),setTimeout(()=>{ye(s.href,{incognito:!0})},300),setTimeout(()=>{V.setItem("lastSign",!1)},2e3);break}}else if(t.altKey){let s=[];for(let u of r)if(u.dataset.isPage){if(await a.siteSetUrl(u),a.stopInput)return;if(!u.href)continue;s.push(u.href)}let o=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,p=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,h=parseInt(o/800);h>s.length&&(h=s.length);let d=parseInt(o/h),m=p/(parseInt((s.length-1)/h)+1)-65;for(let u=0;u<s.length;u++){let f=u%h*d,w=parseInt(u/h)*(m+70);window.open(s[u]+"#searchJumperMin","_blank",`width=${d-10}, height=${m}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${f}, top=${w}`)}}else if(t.shiftKey)for(let s of r){if(await a.siteSetUrl(s),a.stopInput)return;if(s.dataset.isPage&&s.href){let o={};D&&(o={src:D.src||D.href||"",title:D.title||D.alt}),e=e.filter(p=>p!==s.dataset.name),V.setItem("lastSign",{target:o,sites:e}),window.open(s.href,"_blank"),setTimeout(()=>{V.setItem("lastSign",!1)},2e3);break}}else if(t.ctrlKey||t.metaKey){r.reverse();for(let s of r){if(await a.siteSetUrl(s),s.dataset.isPage&&s.href){ye(s.href,{active:!1,insert:!0});continue}if(a.stopInput)return;s.click()}}else t.button===2&&r.reverse().forEach(s=>{s.dataset.current||a.openSiteBtn(s,"_blank",!!i)});a.batchOpening=!1}async getImageBase64(e,t){let i;t&&(this.tipsPos(t,"<span class='loader'></span><font>Loading...</font>"),i=this.tips.firstChild);try{return await(typeof e=="string"?oi(e):fr(e))}finally{i&&this.tips.firstChild===i&&(this.tips.style.opacity=0,this.tips.style.pointerEvents="",ie(this.tips,""))}}async siteSetUrl(e,t,i=!0){return new Promise(r=>{let n=s=>{e.removeEventListener("actionOver",n),r(!0)};e.addEventListener("actionOver",n);let a=new PointerEvent("mousedown",t);a.showLoading=i,e.dispatchEvent(a)})}getTargetSitesByName(e,t){let i=this,r=[];return e.forEach(n=>{for(let a=0;a<i.allSiteBtns.length;a++){let s=i.allSiteBtns[a][0];if(s.dataset.name==n){if(!t&&s.dataset.pointer){if(s.dataset.oriName){let o=i.getTargetSitesByName([s.dataset.oriName],!0);if(o.length){r.push(...o);break}}}else r.push(s);break}}}),r}async submitAction(e){if(e=e.slice(),document.readyState!=="complete"&&document.readyState!=="interactive")return await Je(300),this.submitAction(e);let t,i,r=!1,n=this,a=!1,s=0,o=[],p=!1,h=[],d=Ke?null:await V.getItem("copyStore");d&&(h=JSON.parse(d));let m=async(u,f)=>{pt();let w=!0;if(u[0]==="sleep"||u[0]==="@sleep")await Je(u[1]),fe(`sleep ${u[1]}`);else if(u[0]==="@click")r=!0,await ur(u[1],f)||(w=!1);else if(u[0]==="@dblclick")r=!0,await is(u[1],f)||(w=!1);else if(u[0]==="@rclick")r=!0,await rs(u[1],f)||(w=!1);else if(u[1]==="click"&&u[0].indexOf("@")===0)r=!0,await ur(u[0].substr(1),f)||(w=!1);else if(u[0]==="@copy"){let b=await Ft(u[1],f);b&&b!==!0&&(h.push(b.innerText),bt||(w=!1))}else if(u[0]==="@call"){let b=n.getTargetSitesByName([u[1]])[0];if(b)At=At||Oe()||Pe,await n.siteSetUrl(b),b.click();else{let j=window[u[1]]||new Ti('"use strict";'+u[1]);j&&await j()}}else if(u[0]==="@open"){let b=await ni(u[1]);pt();const j=Ke;p?ye(b.href):(p=!0,setTimeout(()=>{j?.aborted||(location.href=b.href)},50))}else if(u[0]!=="@reload")if(u[0]==="@wait")u[1].indexOf("!")===0?await ts(u[1].slice(1)):await ni(u[1]);else{let b=u[1];if(Ve||(Ve=b),b.indexOf("%input{")!==-1){let v=await n.showCustomInputWindow(b);if(v)b=v;else return await V.setListItem("inPagePostParams",location.hostname,""),!0}await hr(u[0],b,f)||(w=!1),u[0]!=="@"&&(i=Mt(u[0]))}return w};for(let u of e){if(u[0]==="@loopStart")a=!0,o=[],s=parseInt(u[1])||1;else if(u[0]==="@loopEnd")for(a=!1;s-- >0;){let f=!1,w=0;for(;!f;){f=!0;for(let b of o)await m(b,w)||(f=!1);w++}}else a?o.push(u):await m(u);if(tt&&(tt.shift(),tt&&tt.length?(await V.setListItem("inPagePostParams",location.hostname,tt),h&&h.length&&V.setItem("copyStore",JSON.stringify(h))):(await V.setListItem("inPagePostParams",location.hostname,""),V.setItem("copyStore",""),h&&h.length&&Ge(h.join(`
`))),u[0]==="@reload")){location.reload(!!u[1]);return}}if(a)for(a=!1;s-- >0;){let u=!1,f=0;for(;!u;){u=!0;for(let w of o)await m(w,f)||(u=!1);f++}}if(pt(),!r&&i){for(t=i.parentNode;t.nodeName.toUpperCase()!="FORM"&&(t=t.parentNode,!!t););if(t){let u=t.querySelector("[type=submit]");u?u.click():t.submit()}else es()}}getCloneData(e){for(let t=0;t<c.sitesConfig.length;t++){let i=c.sitesConfig[t];for(let r=0;r<i.sites.length;r++){let n=i.sites[r];if(!/^\[/.test(n.url)&&n.name==e)return n}}return null}async switchChinese(e,t){const i=e==="sc"?Le.tc2sc:Le.sc2tc;if(i)return i(t);let r=this;return r.switchChineseResolve||window.addEventListener("message",function(n){if(n.data&&n.data.type==="switchChineseResult"){const a=n.data.payload;r.switchChineseResolve(a)}}),new Promise(n=>{r.switchChineseResolve=n,window.postMessage({type:"switchChineseRequest",payload:{target:e,str:t}},"*"),setTimeout(()=>{n("")},300)})}async createSiteBtn(e,t,i,r,n,a){let s=this,o=document.createElement("a");o.setAttribute("ref","noopener noreferrer"),o.setAttribute("referrerPolicy","no-referrer");let p=t.name,h=t.match,d=!1,m,u=!r&&/^\[/.test(t.url),f=t.description,w=t.shortcut;if(typeof t.openInNewTab<"u"&&(i=t.openInNewTab),u){o.dataset.pointer=!0;let y=JSON.parse(t.url);if(y.length===1){o.dataset.clone=!0;let N=this.getCloneData(y[0]);N&&(o.dataset.oriName=N.name,t=N,t.icon&&e!=="0"&&(e=t.icon),t.description&&(f=t.description))}}/^d:/.test(t.url)?(o.setAttribute("download",""),t.url=t.url.replace(/^d:/,"")):/^showTips:/.test(t.url)&&(d=!0,o.dataset.showTips=!0),/^paste:/.test(t.url)&&(o.dataset.paste=!0);let b=/^(https?|ftp):/.test(t.url);b&&(o.dataset.isPage=b),o.className="search-jumper-btn",typeof f<"u"&&(o.title=f),o.dataset.name=p,o.classList.add("search-jumper-word"),o.dataset.inPagePost=t.url.indexOf("#p{")!=-1?"t":"f";let j=o.dataset.inPagePost==="t";if(h==="0")o.style.display="none",o.classList.add("notmatch");else if(!r&&(!ce||t.hideNotMatch)&&window.top==window.self){if(h){let y,N=h.match(/^\/(.*)\/(\w*)$/);N?y=new RegExp(N[1],N[2]):y=new RegExp(h,"i"),y.test(ue)&&(o.dataset.current=!0)}else if(!u&&location.hostname&&t.url.indexOf(location.hostname)!=-1){this.inSiteMatch||(this.inSiteMatch=/site(%3A|:)(.+?)[\s%]/);let y=t.url.match(this.inSiteMatch);if(y)ue.indexOf(y[2])!=-1&&t.url.replace(y[0],"").indexOf(location.hostname)!=-1&&(o.dataset.current=!0);else if(this.pathMatch||(this.pathMatch=new RegExp("^https?://"+location.host+location.pathname+"?([\\?#].*|[%:#]p{|$)")),this.pathMatch.test(t.url))if(this.postMatch||(this.postMatch=/[#:%]p{/),this.postMatch.test(t.url))o.dataset.current=!0;else{this.paramMatch||(this.paramMatch=/[^\/\?&]+(?=%[stb])/g);let N=t.url.match(this.paramMatch);N?(N=N.join(".*"),new RegExp(N).test(ue)&&(o.dataset.current=!0)):o.dataset.current=!0}else t.url.indexOf("http")===0&&t.url.indexOf("?")===-1&&(this.keywordMatch||(this.keywordMatch=/%[stb][a-z]?\b/g),new RegExp(t.url.replace(/^https?/,"").replace(/[#%]\w+{.*/,"").replace(/\./g,"\\.").replace(this.keywordMatch,".*")).test(ue)&&(o.dataset.current=!0))}o.dataset.current||t.hideNotMatch&&(o.style.display="none",o.classList.add("notmatch"))}let v=document.createElement("span");!r&&p.length>=3?(v.innerText=p.substr(0,4),/^[\w \-]+$/.test(v.innerText.substr(0,3))||(v.innerText=v.innerText.substr(0,2))):v.innerText=p,o.appendChild(v);let C=document.createElement("img");if(C.style.display="none",o.appendChild(C),!a&&c.prefConfig.shortcut&&w&&!o.dataset.clone&&!o.classList.contains("notmatch")){let y=document.createElement("div"),N=w.replace("Key","").replace("Digit","").toUpperCase();N.length==1&&(y.innerText=N,o.appendChild(y)),document.addEventListener("keydown",async K=>{if(!(c.prefConfig.shortcut==2&&!ce)&&K.target.id!=="searchJumperInput"&&!(!s.hideTimeout&&(!t.ctrl==K.ctrlKey||!t.alt==K.altKey||!t.shift==K.shiftKey||!t.meta==K.metaKey))&&s.bar.contains(o)&&!(!c.prefConfig.enableInInput&&!t.ctrl&&!t.alt&&!t.shift&&!t.meta&&ht(document))){var R=(K.key||String.fromCharCode(K.keyCode)).toLowerCase();(w==K.code||w==R)&&(K.stopPropagation(),Ai&&(D=Ai),d?o.dispatchEvent(new CustomEvent("showTips")):await se()!==!1&&!s.customInput&&o.click())}})}let g;if(e=="0"||(e?g=e:!r&&b?g=t.url.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"):/^showTips:https?:\/\//.test(t.url)&&(g=t.url.replace(/\?.*/,"").replace(/^showTips:(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"))),g)if(C.onload=N=>{o.classList.remove("search-jumper-word"),v.parentNode&&!c.prefConfig.showEngineWords&&v.parentNode.removeChild(v),C.style.display=""},/^data:/.test(g))C.dataset.src=g;else{let N=c.prefConfig.cacheSwitch&&ge[g];N==="fail"?o.dataset.current&&g.indexOf(location.host)!=-1&&(C.dataset.src=g,ge[g]="",r||setTimeout(()=>{Bi(C)},0)):N?C.dataset.src=N:(C.dataset.src=g,!r&&!ge[g]&&_e.push(C))}b&&(i?(o.setAttribute("target","_blank"),o.dataset.target=1):o.setAttribute("target","_self"));let k=t.url,A=/%s[st]\b/.test(k),$=Tt.test(k);$&&(o.dataset.txt=!0),/%[tb]\b/i.test(k)&&(o.dataset.link=!0);let z,W=async(y,N,K=!0)=>{s.customInput=!1,k=t.url,z="";const R=s.bar.classList.contains("search-jumper-isTargetLink");let O=y||s.searchJumperInputKeyWords.value||We()||s.tileInput.value;!O&&!It&&!R&&(O=Oe()),O&&!y&&(O!=Pe&&(s.keywordIndex=0,b&&(Pe=O,V.setItem("cacheKeywords",O))),z=O);let Q;(j||/^c(opy)?:|^paste:/.test(k))&&(k.indexOf("%input{")!==-1&&(k=await new Promise(ee=>{s.showCustomInputWindow(k,G=>{ee(G)})}),o.dataset.url=""),Q=k.match(/#p{([\s\S]*[^\\])}/));let le=N?.pageUrl||location.href,ne=new URL(le).host,ve,pe=(ee,G,q,he)=>{if(ee.indexOf(G+"[")!==-1){let xe=ee.match(li(G,"","\\[(.*?)(\\|(.+))?\\]")),de;if(xe){switch(xe[3]?de=q.split(xe[3]):(de=q.split(/[\n\r]/),de.length===1&&(de=q.split(" "))),s.keywordIndex||(s.keywordIndex=0),xe[1]){case"all":z=de.join(`
`);break;case"":q=de[s.keywordIndex],++s.keywordIndex>=de.length&&(s.keywordIndex=0);break;case"-1":--s.keywordIndex<0&&(s.keywordIndex=de.length-1),q=de[s.keywordIndex];break;default:q=de[parseInt(xe[1])||0];break}ee=ee.replace(xe[0],G)}}return $i(ee,G,q,he)},at=!/^showTips:h/i.test(k)&&/^c(opy)?:|[#:%]P{|^javascript:|^showTips:/i.test(k),vi="",xi="",Ie="",Gi="",Vi="",_i=ee=>{let G=ee;if(G=pe(G,"%n",ve),G=pe(G,"%su",vi),G=pe(G,"%sl",xi),G=pe(G,"%sr",d?Ie.replace(/\n/g,"\u3010SearchJumperBreak\u3011"):Ie),G=pe(G,"%S",Pe||Ie),G=pe(G,"%ss",Gi),G=pe(G,"%st",Vi),G=pe(G,"%se",escape?escape(Ie):Ie),G=pe(G,"%s",Ie,q=>at?q:encodeURIComponent(q)),/%bd\b/.test(G))try{let q=atob(Ie);G=pe(G,"%bd",q)}catch{console.log("No standard base64")}if(/%be\b/.test(G))try{let q=btoa(Ie);G=pe(G,"%be",q)}catch(q){console.log(q)}return G},Ss=ee=>{let G=ee.match(/%element{(.*?)}(\.prop\((.*?)\))?/),q=0;for(;G&&!(q++>100);){let xe=G[1],de=G[3],me="";if(xe){let dt=Mt(xe);dt&&(de?me=dt.getAttribute(de)||dt[de]:me=dt.innerText)}else try{let dt=window.getSelection(),jr=Te.getElements(),lt=document.createElement("div");if(jr)jr.forEach(be=>{lt.appendChild(be.cloneNode(!0))});else for(let be=0,Ee=dt.rangeCount;be<Ee;++be)lt.appendChild(dt.getRangeAt(be).cloneContents());if([].forEach.call(lt.querySelectorAll("style,script,svg,canvas"),be=>{let Ee=document.createTextNode("");be.parentNode.replaceChild(Ee,be)}),document.body.appendChild(lt),de)for(let be=0;be<lt.childNodes.length;be++){let Ee=lt.childNodes[be];Ee.nodeType==3?(me+=Ee.nodeValue,me+=`
`):Ee.nodeType==1&&(me+=Ee.getAttribute(de)||Ee[de]||"",me+=`
`)}else[].forEach.call(lt.querySelectorAll("img"),be=>{if(!be.src)return;let Ee=document.createTextNode(` ![${(be.alt||"").replace(/[\n\r]/g," ").trim()}](${be.src||""}) `);be.parentNode.replaceChild(Ee,be)}),[].forEach.call(lt.querySelectorAll("a"),be=>{if(!be.href)return;let Ee=(be.innerText||"").replace(/[\n\r]+/g,`
`).trim();if(!Ee)return;Ee=` [${Ee}](${be.href||""}) `;let Ci;Ee.indexOf(`
`)==-1?Ci=document.createTextNode(Ee):(Ci=document.createElement("pre"),ie(Ci,Ee)),be.parentNode.replaceChild(Ci,be)}),me=lt.innerText;me&&(me=me.replace(/[\n\r]\s*/g,`
`)),document.body.removeChild(lt)}catch(dt){console.error(dt)}N&&(Ue?me=N.elements[G[0]]||"":N.elements[G[0]]=me),ee=pe(ee,G[0],at?me:encodeURIComponent(me)),G=ee.match(/%element{(.*?)}(\.prop\((.*?)\))?/)}G=ee.match(/%date({(.*?)})?/),q=0;let he=new Date().getTime();for(;G&&!(q++>100);){let xe=G[2],de=he;if(xe){xe=xe.replace(/\s/g,"");let me=xe.match(/(\D*)?(\d+)/);for(;me;){switch(me[1]){case"-":de-=parseInt(me[2]);break;case"*":de*=parseInt(me[2]);break;case"/":me[2]&&me[2]!="0"&&(de=parseInt(de/parseInt(me[2])));break;default:de+=parseInt(me[2]);break}xe=xe.replace(me[0],""),me=xe.match(/(\D*)?(\d+)/)}}else de=he;ee=ee.replace(G[0],de),G=ee.match(/%date({(.*?)})?/)}return ee};if(!o.dataset.url){let ee=k;j&&(ee=ee.replace(Q[0],"")),o.dataset.url=ee.replace(/%e\b/g,N?.charset||document.characterSet).replace(/%c\b/g,Zt?"mobile":"pc")}let we="",Bt="";ve=z||N?.title||document.title;let ot="",oe=Ss(o.dataset.url);if(D&&D.nodeName){if(we=D.href||D.parentNode&&D.parentNode.href||"",Bt=we||D.parentNode&&D.parentNode.parentNode&&D.parentNode.parentNode.href||"",(n.selectImg||n.selectAudio||n.selectVideo)&&D.src&&(we=D.src),D.nodeName.toUpperCase()=="VIDEO"||D.nodeName.toUpperCase()=="AUDIO"){if(!we){let ee=D.querySelector("source");ee&&(we=ee.src)}we&&(we=we.replace(/^blob:/,""))}ve=D.title||D.alt||N?.title||document.title,D.nodeName.toUpperCase()=="IMG"&&/%i\b/.test(k)?D.src&&(/^data/.test(D.src)?ot=D.src:ot=await s.getImageBase64(D,K?o:null),oe=oe.replace(/%i\b/g,ot)):(D.nodeName.toUpperCase()=="A"||D.parentNode&&D.parentNode.nodeName.toUpperCase()=="A")&&$&&!O&&D.textContent.trim()&&(O=D.textContent.trim())}for(;oe.indexOf("%template{")!==-1;){let ee=oe.match(/%template{(.*?[^\\])}/);if(!ee)return!1;let G=ee[1];c.prefConfig.templateData||(c.prefConfig.templateData={});let q=c.prefConfig.templateData[G];if(!q){if(s.stopInput)return!1;if(q=window.prompt(J("template",G))||"",q)c.prefConfig.templateData[G]=q,V.setItem("searchData",c);else return!1}oe=oe.replace(ee[0],q)}for(;oe.indexOf("%input{")!==-1;){let ee=oe.match(/%input{(.*?[^\\])}/);if(!ee||(s.customInput=!0,s.stopInput))return!1;if(s.batchOpening){let G;if(ee[1].indexOf('"')===0&&ee[1].indexOf('","')!==-1?G=ee[1].substr(1,ee[1].length-2).split('","'):G=ee[1].split(","),G.length===2?G=window.prompt(G[0],G[1]):G=window.prompt(ee[1]),G===null)return!1;oe=oe.replace(ee[0],G)}else break}we&&(we=we.replace(/%(\w{2})/g,(ee,G)=>`%${G.toUpperCase()}`)),Bt&&(Bt=Bt.replace(/%(\w{2})/g,(ee,G)=>`%${G.toUpperCase()}`));let $t=we.replace(/^https?:\/\//i,"");!O&&R&&(O=we),O||(O=ce&&Pe);try{if(typeof navigator.clipboard.readText<"u"&&(!O&&$&&(O=await navigator.clipboard.readText(),O&&!y&&(z=O)),!ot&&/%i\b/.test(k))){if((await navigator.permissions.query({name:"clipboard-read"})).state!=="denied"){const G=await navigator.clipboard.read();for(const q of G)if(q.types.includes("image/png")){const he=await q.getType("image/png");ot=await new Promise(xe=>{const de=new FileReader;de.onload=function(me){xe(me.target&&me.target.result)},de.readAsDataURL(he)}),ot&&(oe=oe.replace(/%i\b/g,ot))}}if(!ot){s.customInput=!0;let G=window.prompt(J("targetUrl"),"https://www.google.com/favicon.ico");if(G)ot=await s.getImageBase64(G,K?o:null);else return!1}}}catch(ee){console.error(ee.message)}if(!O&&$){if(s.customInput=!0,s.con.classList.contains("search-jumper-showall")||s.inInput||d||s.stopInput)return!1;let ee=window.prompt(J("keywords"));if(ee===null)return!1;Ve=ee,setTimeout(()=>{Ve=""},1),O=ee,Ie=O,vi=Ie.toUpperCase(),xi=Ie.toLowerCase(),A&&(Gi=await s.switchChinese("sc",Ie),Vi=await s.switchChinese("tc",Ie)),at||(O=encodeURIComponent(O)),oe=_i(oe)}else O&&!vi&&!xi&&!Ie&&(Ie=O,vi=Ie.toUpperCase(),xi=Ie.toLowerCase(),A&&(Gi=await s.switchChinese("sc",Ie),Vi=await s.switchChinese("tc",Ie)),at||(O=encodeURIComponent(O)));if(we===""){let ee=We()||s.searchJumperInputKeyWords.value||s.tileInput.value;if(!$&&ee&&/^\w{1,8}:/i.test(ee))we=ee,we=we.replace(/%(\w{2})/g,(G,q)=>`%${q.toUpperCase()}`);else{let G=!1,q=()=>!(s.stopInput||d||(G===!1&&(G=window.prompt(J("targetUrl"),"https://www.google.com/favicon.ico"),G&&(G=G.replace(/%(\w{2})/g,(he,xe)=>`%${xe.toUpperCase()}`),D={src:G})),G===null));if(/%t\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=pe(oe,"%t",G)}if(/%T\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%T\b/g,encodeURIComponent(G))}if(/%τ\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(G)))}if(/%b\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%b\b/g,G.replace(/^https?:\/\//i,""))}if(/%B\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%B\b/g,encodeURIComponent(G.replace(/^https?:\/\//i,"")))}if(/%β\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%β\b/g,encodeURIComponent(encodeURIComponent(G.replace(/^https?:\/\//i,""))))}}}let Yi=ne;if((Bt||we)&&!o.dataset.link&&(le=Bt||we,Yi=le.replace(/^\w+:\/\/([^\/]+).*/,"$1")),j){let ee=[],G=!1;if(Q[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(q=>{if(q=q.trim(),/^loopStart\(\d+\)$/.test(q)){let he=q.match(/loopStart\((.*)\)/);ee.push(["@loopStart",he[1]])}else if(q=="loopEnd")ee.push(["@loopEnd",""]);else if(q.startsWith("click(")&&q.endsWith(")")){let he=q.slice(6,q.length-1);he&&ee.push(["@click",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("dblclick(")&&q.endsWith(")")){let he=q.slice(9,q.length-1);he&&ee.push(["@dblclick",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("rclick(")&&q.endsWith(")")){let he=q.slice(7,q.length-1);he&&ee.push(["@rclick",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("copy(")&&q.endsWith(")")){let he=q.slice(5,q.length-1);he&&ee.push(["@copy",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("call(")&&q.endsWith(")")){let he=q.slice(5,q.length-1);he&&(ee.push(["@call",he.replace(/\\([\=&])/g,"$1").trim()]),G=!0)}else if(q.startsWith("reload(")&&q.endsWith(")")){let he=q.slice(7,q.length-1);ee.push(["@reload",he.trim()])}else if(q.startsWith("wait(")&&q.endsWith(")")){let he=q.slice(5,q.length-1);ee.push(["@wait",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("open(")&&q.endsWith(")")){let he=q.slice(5,q.length-1);he&&ee.push(["@open",he.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(q)){let he=q.match(/sleep\((.*)\)/);he&&ee.push(["@sleep",he[1]])}else{q=q.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let he=q.split("SJ^PARAM");if(he.length===2){let xe=he[0],de=_i(he[1].replace(/\\([\=&])/g,"$1").replace(/%e\b/g,document.characterSet).replace(/%i\b/g,ot).replace(/%c\b/g,Zt?"mobile":"pc").replace(/%U\b/g,encodeURIComponent(le)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(le))).replace(/%h\b/g,Yi).replace(/%T\b/g,encodeURIComponent(we)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(we))).replace(/%b\b/g,$t).replace(/%B\b/g,encodeURIComponent($t)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent($t))));de=pe(de,"%t",we),de=pe(de,"%u",le),ee.push([xe,de])}else(q.endsWith(".click()")||q.endsWith(".click"))&&ee.push(["@"+q.replace(/\.click(\(\))?$/,""),"click"])}}),G&&s.updateCacheKeywords(),N)N.request.actions=ee,oe||(oe=N.pageUrl);else{if(oe===""||oe===location.href)return tt=ee,this.submitAction(ee).catch(q=>window.alert(q.message)),!1;try{await V.setListItem("inPagePostParams",new URL(oe,location.href).hostname,ee)}catch(q){return window.alert(q.message),!1}}}return oe=pe(oe,"%h",Yi),oe=pe(oe,"%t",we),oe=pe(oe,"%u",le),oe=_i(oe.replace(/%U\b/g,encodeURIComponent(le)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(le))).replace(/%T\b/g,encodeURIComponent(we)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(we))).replace(/%b\b/g,$t).replace(/%B\b/g,encodeURIComponent($t)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent($t)))),i&&/^(https?|ftp):/.test(oe)?(o.setAttribute("target","_blank"),o.dataset.target=1):o.dataset.target=0,oe};ft&&(o.splitType={...n,sites:void 0}),ft&&/^(https?:|#p\{)/i.test(t.url)&&!/[:%]P\{/.test(t.url)&&(o.splitSite={...t},o.resolveSplit=async(y,N)=>{const K={},R=D;Ue&&(D=N.target||X(document)),delete o.dataset.url;let O;try{O=await W(y,{...N,request:K})}finally{D=R}if(!O)return null;O=O.trim();const Q=O.replace(/[:%]p\{[\s\S]*?\}/,"").replace(/#(j(umpFrom|f)?|from)\{.*?\}/,"");return/^https?:\/\//i.test(Q)?(K.url=Q,K.kind=K.actions?"automation":/[:%]p\{/.test(O)||t.charset&&t.charset.toLowerCase()!=="utf-8"?"form":"get",K.kind==="form"&&(K.formUrl=O,K.charset=t.charset||"utf-8"),K):null});let T,E=!1,I,M,H,Y,se=async y=>{if(!o.dataset.disable){if(delete o.href,y||(y={}),I=y.altKey,M=y.ctrlKey,H=y.metaKey,Y=y.shiftKey,!I&&!M&&!H&&!Y&&(y.button==1||y.button==2?(I=!1,M=!0,H=!1,Y=!1):i===2?(I=!1,M=!0,H=!1,Y=!0):i===3?(I=!0,M=!1,H=!1,Y=!1):i===4&&(I=!1,M=!0,H=!1,Y=!1)),d){o.removeAttribute("target"),m&&(/^(https?|ftp):/.test(m)?(T=m,o.href=T,i?o.setAttribute("target","_blank"):o.setAttribute("target","_self")):(/^copy:/.test(m)&&(m=m.replace(/^copy:/,"")),Ge(m))),o.dispatchEvent(new Event("actionOver"));return}if(E=!1,T="",T=await W(void 0,void 0,y.showLoading!==!1),/^(https?|ftp):/.test(T)&&y.stopPropagation&&y.stopPropagation(),/^c(opy)?:|^paste:/.test(t.url)||/^javascript:/.test(t.url)||/^\[/.test(t.url)||/[:%]P{/.test(t.url)||t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url))(y.button==1||y.button==2)&&(E=!0);else{if(!T){s.stopInput||(s.stopInput=!0,setTimeout(()=>{s.stopInput=!1},1)),o.dispatchEvent(new Event("actionOver"));return}o.href=T}s.customInput&&T&&(E=!0),o.dispatchEvent(new Event("actionOver")),E&&(y.preventDefault&&y.preventDefault(),o.click())}},re=()=>{let y=Math.max(c.prefConfig.historyLength,20),N=o.dataset.current;if(!t.hideNotMatch&&!t.kwFilter&&!o.dataset.clone&&!o.dataset.paste&&h!=="0"&&y&&!N&&V.getItem("historySites",K=>{it=K||[],it=it.filter(R=>R&&R!=p),it.unshift(p),it.length>y&&(it=it.slice(0,y)),V.setItem("historySites",it)}),c.prefConfig.shiftLastUsedType&&!N){let K=o.parentNode;!(K&&(K.classList.contains("search-jumper-targetAll")||K.classList.contains("search-jumper-targetImg")||K.classList.contains("search-jumper-targetAudio")||K.classList.contains("search-jumper-targetVideo")||K.classList.contains("search-jumper-targetLink")||K.classList.contains("search-jumper-targetPage")||K.classList.contains("search-jumper-needInPage")))&&Ot!=o.dataset.type&&(Ot=o.dataset.type,V.setItem("historyType",Ot))}c.prefConfig.sortType&&V.getItem("sortTypeNames",K=>{Me=K||{},Me[o.dataset.type]?Me[o.dataset.type]=Me[o.dataset.type]+1:Me[o.dataset.type]=1,V.setItem("sortTypeNames",Me)}),c.prefConfig.sortSite&&V.getItem("sortSiteNames",K=>{Ne=K||{},Ne[o.dataset.name]?Ne[o.dataset.name]=Ne[o.dataset.name]+1:Ne[o.dataset.name]=1,V.setItem("sortSiteNames",Ne)})},L=(y,N)=>{Ge(N);let K=o;y||(s.appendBar(),s.closeOpenType(),s.con.style.display="",s.setFuncKeyCall(!0),window.getSelection().toString()?K=D||o:K=X(document),s.tileInput.parentNode&&s.tileInput.parentNode.removeChild(s.tileInput)),s.tipsPos(K,J("copyOver")),clearTimeout(s.hideTips),s.hideTips=setTimeout(()=>{s.tips.style.opacity=="1"&&(s.tips.style.opacity=0,s.tips.style.pointerEvents="")},1500)},F=y=>{if(y&&y.stopPropagation&&y.stopPropagation(),o.dataset.disable)return;if(D&&D.focus&&D.focus(),d&&s.waitForShowTips)return x(o,0),y&&y.preventDefault&&y.preventDefault(),!1;if(E=!0,!T)return y&&y.preventDefault&&y.preventDefault(),!1;y||(y={});let N=/^(https?|ftp):/.test(T);if(!s.batchOpening&&!r&&re(),ft&&!Ue&&i===5&&o.resolveSplit&&!I&&!M&&!H&&!Y)return y.preventDefault&&y.preventDefault(),s.openSplitSearch([t.name]).catch(R=>window.alert(R.message)),!1;if((c.prefConfig.multiline==1||c.prefConfig.multiline==2)&&z&&Tt.test(o.dataset.url)&&z.indexOf(`
`)!==-1&&!/^(c|show)/.test(o.dataset.url)&&(c.prefConfig.multiline==1||confirm(J("multiline")))){let R=z.split(`
`);if(R.length>10&&!confirm(J("multilineTooMuch")))return;let O=0,Q=o.target;o.target="_blank";let le=async()=>{T=await W(R[O++]),o.href=T,o.click(),O<R.length?setTimeout(()=>{le()},c.prefConfig.multilineGap||1e3):o.target=Q};return le(),o.href="",y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),!1}if(T.indexOf("%input{")!==-1){s.showCustomInputWindow(T,R=>{T=R,o.href=R,o.click()}),y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation();return}let K=T.match(/^find(\.addto\((.*?)\))?:(.*)/);if(K){y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation();let R=K[2],O=K[3];if(O)R&&c.prefConfig.inPageRule&&R.indexOf("@")!==0&&(R="@"+R),O.indexOf("%input{")!==-1?s.showCustomInputWindow(O,Q=>{R?s.addToHighlightGroup(Q,R):(s.searchJumperInPageInput.value=Q,s.submitInPageWords(),s.waitForHide(0))}):R?s.addToHighlightGroup(O,R):(s.searchJumperInPageInput.value=O,s.submitInPageWords(),s.waitForHide(0));else return!1;return!1}else if(/^javascript:/.test(t.url)){y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),Le.targetElement=D,Le.keywords=Oe(),T=T.replace(/^javascript:/,"");try{T=decodeURIComponent(T)}catch{}let R=/^[_a-zA-Z0-9]+$/.test(T)&&Le[T]||new Ti(T);return R&&R(),!1}else if(/^c(opy)?:/.test(t.url)){if(y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),T)T.indexOf("%input{")!==-1?s.showCustomInputWindow(T,R=>{L(!0,R.replace(/^c(opy)?:/,""))}):L(y.isTrusted,T.replace(/^c(opy)?:/,""));else return!1;return!1}else if(/^paste:/.test(t.url)){let R=!1;if(D&&/INPUT|TEXTAREA/i.test(D.nodeName)&&D.getAttribute("aria-readonly")!="true")R=!0;else{let O=D;for(;O&&(R=O.contentEditable=="true",!(R||O.nodeName.toUpperCase()=="BODY"));)O=O.parentNode}if(R){if(!T)return!1;T=T.replace(/^paste:/,""),T.indexOf("%input{")!==-1?s.showCustomInputWindow(T,O=>{ai(D,O)}):T?ai(D,T):typeof navigator.clipboard.readText<"u"&&navigator.clipboard.readText().then(O=>{ai(D,O)})}}else if(/^\[/.test(t.url)){y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation();let R=JSON.parse(t.url);return s.batchOpen(R,{button:2,altKey:I||y.altKey,ctrlKey:M||y.ctrlKey,shiftKey:Y||y.shiftKey,metaKey:H||y.metaKey},i===5?5:i===1),!1}else if(/[:%]P{/.test(t.url)){if(y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),T===!1)return!1;let R=O=>{let Q=O.match(/[:%]P{(.*)}/),le="";if(Q)if(O=O.replace(Q[0],""),Q=Q[1],Q.charAt(0)==='"'&&Q.charAt(Q.length-1)==='"')le=Q.substring(1,Q.length-1);else{Q=new URLSearchParams(Q);let ne={};Q.forEach((ve,pe)=>{ne[pe]=ve}),le=JSON.stringify(ne)}De({method:"POST",url:O,data:le,onload:ne=>{fe(ne)},onerror:ne=>{Ce(J("postError")+(ne.statusText||ne.error))},ontimeout:ne=>{Ce(J("postError")+(ne.statusText||ne.error))}})};return T.indexOf("%input{")!==-1?s.showCustomInputWindow(T,O=>{R(O)}):R(T),!1}else if(t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url)){if(T===!1)return!1;let R=t.url.match(/#(j(umpFrom|f)?|from){(.*?)}/),O=Q=>{if(R){if(R=R[3],R==="")return Ut(t.charset,Q,"_self"),"";V.setItem("postUrl",[Q,t.charset]),R.indexOf("http")!==0&&(R=Q.replace(/(:\/\/.*?\/)[\s\S]*/,"$1"+R)),Q=R}else V.setItem("postUrl",[Q,t.charset]),Q=Q.replace(/(:\/\/.*?)\/[\s\S]*/,"$1").replace(/[:%]p{[\s\S]*/,"");return Q};if(T.indexOf("%input{")!==-1){s.showCustomInputWindow(T,Q=>{Q=O(Q),Q&&(o.href=Q,o.target==="_blank"?ye(o.href,{active:!0,insert:!0}):location.href=o.href)}),y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation();return}else{if(T=O(T),!T)return;o.href=T}}if(!(Y&&!M&&!H&&!I&&y.isTrusted)){if(/^(chrome|edge|about|extension|moz-extension)/.test(T))return y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),M?ye(T,{active:!1,insert:!0}):ye(T,{active:!0,insert:!0,close:o.getAttribute("target")!=="_blank"}),!1;if((I||M||H||Y)&&N){if((M||H)&&Y)ye(T,{incognito:!0});else if(M||H)ye(T,{active:!1,insert:!0});else if(I){if(t.match){let pe=t.match.replace(/\\/g,""),at=pe.match(/\((www)\|([^\)\|]+)/);for(;at;)T=T.replace(at[1],at[2]),pe=pe.replace(at[0],""),at=pe.match(/\(([^\)\|]+)\|([^\)\|]+)/)}let R=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,O=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,Q=c.prefConfig.popupWidth,le=c.prefConfig.popupHeight,ne=c.prefConfig.popupLeft,ve=c.prefConfig.popupTop;le?(le=parseFloat(le),le=O/100*le):le=Math.max(O/3*2,O-250),Q?(Q=parseFloat(Q),Q=R/100*Q):Q=Math.min(R,650),ne?(ne=parseFloat(ne),ne=R/100*ne-Q/2):ne=R-Q-30,ve?(ve=parseFloat(ve),ve=O/100*ve-le/2):ve=(O-le)/2,s.closePopupWindow(),s.popupWindow=window.open(T+"#searchJumperMin"+(/#p{/.test(t.url)?"Post":""),"_blank",`width=${Q}, height=${le}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${ne}, top=${ve}`)}else Y&&ye(T,{active:!0,insert:!0});return y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),!1}else if(N&&o.getAttribute("target")==="_blank"&&!(I||M||H||Y)&&y.button===0)return ye(T,{active:!0,insert:!0}),y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),!1}};o.addEventListener("mousedown",se,!0),o.addEventListener("mouseup",y=>{y.stopPropagation&&y.stopPropagation()},!0),o.addEventListener("click",F,!0),o.addEventListener("auxclick",y=>{if(E&&y.preventDefault)return y.preventDefault(),!1},!0),o.addEventListener("contextmenu",y=>{if(E&&y.preventDefault)return y.preventDefault(),!1},!0);let U=o.dataset.name;w&&(U+=` (${t.ctrl?"Ctrl + ":""}${t.shift?"Shift + ":""}${t.alt?"Alt + ":""}${t.meta?"Meta + ":""}${w.replace("Key","")})`);let Z=!1,_=!1,ae=async(y,N,K)=>{if(s.tipsPos(y,'<span class="loader"></span><font>Loading...</font>'),_=!1,N)try{N=N.replace(/^showTips:/,""),Z=!0;let R,O=async(Q,le)=>{let ne=await s.anylizeShowTips(Q,o.dataset.name,y,R);if(Z=!1,!le&&(s.tips.style.opacity==0||s.tips.innerHTML.indexOf('<span class="loader">')!==0)){_=!0;return}Array&&Array.isArray&&Array.isArray(ne)&&(m=ne[1],ne=ne[0]),ne&&(ne!="null"&&ne!="No result"&&(ne=`<div>${ne}</div>`,_=!0),s.tipsPos(y,ne,R),re(),setTimeout(()=>{s.tips.style.pointerEvents="all"},100))};if(/%input{/.test(N))if(R=this.createShowTipsInput(N,async Q=>{s.tipsPos(y,'<span class="loader"></span><font>Loading...</font>'),await O(Q,!0)}),/%input{[^},]*}/.test(N)){if(N=await this.showCustomInputWindow(N),!N)return}else{let Q;for(;Q=N.match(/%input{([^},]+),\s*([^}/]*).*?}/);){let le=Q[1],ne=Q[2];N=N.replace(Q[0],ne).replaceAll(`input{${le}}`,ne),Q=N.match(/%input{([^},]+),\s*([^}/]*).*?}/)}}await O(N)}catch(R){fe(R)}},x=async(y,N=1e3)=>{if(o.dataset.disable||!y||y.nodeType!==1)return;const K=!y.closest(".sitelist");if(s.preList&&(s.preList.style.visibility="hidden",s.listArrow.style.cssText=""),m=null,clearTimeout(s.requestShowTipsTimer),s.waitForShowTips=!1,s.tipsPos(y,U),d){s.stopInput=!0;let R=await W(void 0,void 0,K);s.stopInput=!1,R&&s.lastUrl===R?Z?s.tipsPos(y,"<span class='loader'></span><font>Loading...</font>"):ae(y,R):(s.waitForShowTips=!0,s.requestShowTipsTimer=setTimeout(async()=>{R=R||await W(void 0,void 0,K),R&&(s.lastUrl=R,ae(y,R),s.waitForShowTips=!1)},N))}},S=!1;o.addEventListener("touchend",y=>{y.stopPropagation&&y.stopPropagation(),d&&(S=!0,s.waitForShowTips=!0)},!1);let B=y=>{if(s.funcKeyCall||c.prefConfig.noAni)return;let N=s.con.classList.contains("search-jumper-left")||s.con.classList.contains("search-jumper-right"),K=[],R=o.getBoundingClientRect(),O=N?Math.abs(y.clientY-R.top)/R.height:Math.abs(y.clientX-R.left)/R.width,Q=.1,le=.1;o.style.setProperty("--scale",1+Q+le),K.push(o);let ne=o.previousElementSibling;if(ne&&/^A$/i.test(ne.nodeName)){ne.style.setProperty("--scale",1+le+Q*(1-O)),K.push(ne);let pe=ne.previousElementSibling;pe&&/^A$/i.test(pe.nodeName)&&(pe.style.setProperty("--scale",1+le*(1-O)),K.push(pe))}let ve=o.nextElementSibling;if(ve&&/^A$/i.test(ve.nodeName)){ve.style.setProperty("--scale",1+le+Q*O),K.push(ve);let pe=ve.nextElementSibling;pe&&/^A$/i.test(pe.nodeName)&&(pe.style.setProperty("--scale",1+le*O),K.push(pe))}s.dockerScaleBtns.forEach(pe=>{K.indexOf(pe)===-1&&pe.style.setProperty("--scale",1)}),s.dockerScaleBtns=K};return o.addEventListener("mouseenter",y=>{if(y.stopPropagation&&y.stopPropagation(),!o.dataset.disable&&!(_&&s.lastTips===o&&s.tips.style.opacity==1)){if(s.lastTips=o,d){if(S){S=!1;return}if($&&!(s.searchJumperInputKeyWords.value||s.tileInput.value||Oe())){s.waitForShowTips=!0,s.tipsPos(o,U);return}}x(o)}},!0),o.addEventListener("mousemove",y=>{o.dataset.disable||(B(y),s.clingPos(o,s.tips))},!1),o.addEventListener("showTips",y=>{o.dataset.disable||(s.waitForHide(0),s.appendBar(),s.closeOpenType(),s.con.style.display="",x(y.detail||D,0))},!1),o.addEventListener("mouseleave",y=>{o.dataset.disable||_||(s.tips.style.opacity=0,s.tips.style.pointerEvents="",clearTimeout(s.requestShowTipsTimer))},!1),o.addEventListener("drop",y=>{s.searchBySiteName(p,y)},!1),o.addEventListener("dragover",y=>{y.preventDefault()},!1),o}closePopupWindow(){c.prefConfig.closePopupWhenClick&&this.popupWindow&&(this.popupWindow.close(),this.popupWindow=null)}closeOpenType(){let e=this.bar.querySelector(".search-jumper-type.search-jumper-open>span");if(e)if(this.funcKeyCall=!1,e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}addToHighlightGroup(e,t){let i=c.prefConfig.inPageRule[t];if(i){let r=i.match(/^\/(.*)\/([il]*)$/);r?i=`/${r[1]}|${e}/${r[2]||""}`:i=`/${i}|${e}/`}else i=`/${e}/`;c.prefConfig.inPageRule[t]=i,V.setItem("searchData",c),this.refreshPageWords(this.lockWords)}streamUpdate(e){this.streamUpdateCallBack&&this.streamUpdateCallBack(e)}createShowTipsInput(e,t){let i=document.createElement("div");i.className="showTips-inputGroup";let r=e,n=[],a=()=>{let p=r,h=0;[].forEach.call(n,d=>{let m;d.className=="select"?m=d.children[0].value:m=d.value,p=p.replaceAll("\u25CE"+h,m||""),h++}),t(p)},s=r.match(/%input{(.*?[^\\])}/),o=0;for(;s;){let p=s[1],h=document.createElement("div");if(h.className="showTips-input-title",/^".*","/.test(p)?p=p.substr(1,p.length-2).split('","'):p=p.replace(/\\,/g,"\u25CESJ").split(",").map(d=>d.replace(/◎SJ/g,",")),p.length===1){p=p[0].replace(/\\\|/g,"\u25CESJ").split("|").map(u=>u.replace(/◎SJ/g,"|"));let d=document.createElement("div");h.innerText=p[0],d.appendChild(h);let m=document.createElement("input");m.type="text",p.length>1&&(m.title=p[1]),d.appendChild(m),i.appendChild(d),n.push(m)}else if(p.length>=2){let d=p[0].replace(/\\}/g,"}");/^'.*'\/'/.test(d)?d=d.substr(1,d.length-2).split("'/'"):d=d.replace(/\\\//g,"\u25CESJ").split("/").map(g=>g.replace(/◎SJ/g,"/"));let m=p.slice(1).join(",");/^'.*'\/'/.test(m)?m=m.substr(1,m.length-2).split("'/'"):m=m.replace(/\\\//g,"\u25CESJ").split("/").map(g=>g.replace(/◎SJ/g,"/"));let u=d.length===m.length+1,f=document.createElement("div");h.innerText=d[0],f.appendChild(h);let w=document.createElement("input");w.type="text",w.value=m[0];let b=document.createElement("div");b.className="select",b.appendChild(w);let j=document.createElement("p");j.innerText="",b.appendChild(j);let v=document.createElement("div");v.className="options",b.appendChild(v);let C=document.createElement("p");C.setAttribute("value",""),ie(C,"<b>Select option</b>"),v.appendChild(C),C.addEventListener("click",g=>{v.style.visibility="hidden",setTimeout(()=>{v.style.visibility=""},0),w.value="",j.innerText="Select option"});for(let g=0;g<m.length;g++){let k=m[g],A=document.createElement("p");if(A.setAttribute("value",k),u){let $=d[g+1];$=$.replace(/\\\|/g,"\u25CESJ").split("|").map(z=>z.replace(/◎SJ/g,"|")),A.innerText=$[0],$.length>1&&(A.title=$[1])}else A.innerText=k;A.addEventListener("click",$=>{v.style.visibility="hidden",setTimeout(()=>{v.style.visibility=""},0),w.value=A.getAttribute("value"),j.innerText=""}),v.appendChild(A)}w.addEventListener("change",g=>{j.innerText=""}),b.addEventListener("mouseenter",g=>{b.focus();const k=b.getBoundingClientRect();v.style.top=`${k.bottom}px`,v.style.left=`${k.left}px`,v.style.width=`${k.width}px`}),f.appendChild(b),i.appendChild(f),n.push(b)}r=r.replace(s[0],"\u25CE"+o).replaceAll(`input{${h.innerText}}`,"\u25CE"+o),o++,s=r.match(/%input{(.*?[^\\])}/)}if(i.children.length){let p=document.createElement("div");p.className="searchBtn",ie(p,_r),p.addEventListener("click",h=>{a()}),i.appendChild(p)}return i}async anylizeShowTips(e,t,i,r){let n,a=this;try{const s=/([^\\]|^)([\+\-*/])([\d\.]+)$/,o=/\|cache\=(\d+)$/,p=/%p(\{+)/,h=/#headers({.*?})/,d=/#stream({(.*?)})?/,m=/.then{(.*?)}/;if(e=e.replace(/^showTips:/,"").replace(/{name}/g,t).trim(),/^https?:/.test(e)){let u=e.split(`
`);u.length==1&&(u=e.split(" ")),u=u[0].replace(/【SearchJumperBreak】/g,`
`),e=e.replace(/【SearchJumperBreak】/g,`
`).replace(u,"").trim().replace(/\\{/g,"showTipsLeftBrace").replace(/\\}/g,"showTipsRightBrace").replace(/{url}/g,"\u3010SEARCHJUMPERURL\u3011");let f=u.match(o);f?(f=parseInt(f[1]),u=u.replace(o,"")):f=7200;let w=Date.now()/1e3,b=ut.filter(g=>w<g.time?(!n&&g.url==u&&(n=g.data),!0):!1);b.length!=ut.length&&(ut=b,V.setItem("tipsStorage",ut));let j=[],v=(g,k)=>{let A=e,$=!0;for(;k;){let z=k[1].replace(/\\\|/g,"\u3010searchJumperJsonSplit\u3011").split("|"),W=z[0].replace(/【searchJumperJsonSplit】/g,"|").replace(/\[(\d+)\]/g,".$1").replace(/\[all\]/g,".all").split("."),T=g,E=null;if(W.shift(),W.forEach(I=>{if(E){let M=[];for(let H=0;H<E.length;H++){let Y=E[H];Y&&(Array.isArray(Y)?Y=Y.at?Y.at(I):Y[I]:Y=Y[I]),M.push(Y)}E=M}else if(T&&(Array.isArray(T)?I==="all"?E=T:T=T.at?T.at(I):T[I]:T=T[I]),!T)return null}),E&&(T=E.join("")),z.length!=1){let I=z[1],M=I.match(s);if(M){let H=[];for(;M;)I=I.replace(s,"$1"),H.unshift([M[2],M[3]]),M=I.match(s);H.forEach(Y=>{let se=parseFloat(Y[1]);switch(Y[0]){case"+":T+=se;break;case"-":T-=se;break;case"*":T*=se;break;case"/":T/=se;break}}),T=T.toFixed(2)}else{let H=I.match(/^\/(.*)\/(\w?)$/),Y=H?new RegExp(H[1],H[2]):new RegExp(I),se=T.match(Y);se&&(T=se[1])}}T?$=!1:T="",j.push(T),A=A.replace(k[0],T),k=A.match(/{(.*?)}/)}return $&&console.log("Error:",g),A=A.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),A},C=e.match(/{(.*?)}/);if(n)C&&C[1].indexOf("json")===0&&(e=e.replace(/【SEARCHJUMPERURL】/g,u),n=v(n,C),n=[n,`
`+j.join(",")]);else{let g,k=u.match(p),A={},$=u;if(k){let M=k[1].length;if(k=u.match(new RegExp(`%p\\{+([\\s\\S]*?)\\}{${M}}`)),k){let H=k[1].replace(/\n/g,"\\n");if(H.indexOf("%")===0)try{H=decodeURIComponent(H)}catch{}A.body=H,A.method="POST",$=$.replace(k[0],"")}}let z=u.match(h);if(z){let M=z[1];if(M.indexOf("%")===0||M.indexOf("%")===1)try{M=decodeURIComponent(M)}catch{}A.headers=JSON.parse(M),$=$.replace(z[0],"")}let W=!1,T,E=C&&C[1].indexOf("json")===0,I=u.match(d);if(I)A.responseType="stream",A.streamMode=I[2]||"concat",$=$.replace(I[0],""),n=await new Promise(M=>{A.onstream=H=>{let Y;if(E){if(Y=H.json(),!Y)return;Y=v(Y,C)}else Y=H.text;a.tipsPos(i,Y,r),a.tips.style.pointerEvents="all",M&&M(Y)},T=Qe($,A).then(H=>(e=e.replace(/【SEARCHJUMPERURL】/g,H.finalUrl),E?H.json():H.text)),T.then(H=>{let Y=E?H&&v(H,C):H;Y&&(a.tipsPos(i,Y,r),M&&M(Y))})}),n||(n="No result",W=!0);else if(E){let M=[];T=Qe($,A).then(H=>(e=e.replace(/【SEARCHJUMPERURL】/g,H.finalUrl),H.json())),n=await T.then(H=>H?(g=H,v(H,C)):null),n||(n="No result",W=!0),n=[n,`
`+M.join(",")]}else{let M=!1,H=$.match(m),Y=[];for(;H;){let re=H[1];Y.push(re),$=$.replace(H[0],""),H=$.match(m)}for(T=Qe($,A).then(re=>(e.indexOf("\u3010SEARCHJUMPERURL\u3011")!=-1&&(e=e.replace(/【SEARCHJUMPERURL】/g,re.finalUrl),M=!0),re.text()));Y.length;){let re=Y.shift(),L=await T.then(F=>{let U=document.implementation.createHTMLDocument("");ie(U.documentElement,F,U);let Z=Mt(re,U);if(!Z)return null;let _=U.querySelector("base");return wr(Z.getAttribute("href"),_?_.href:$)});if(L)T=Qe(L).then(F=>F.text());else return"No result"}let se;n=await T.then(re=>{if(!e)return re;let L=document.implementation.createHTMLDocument("");ie(L.documentElement,re,L),se=L.title;let F=e;for(;C;){let U="";if(C[1]=="title")U=L.title;else{let Z=C[1].split("|"),_=Ii(Z[0],L);if(_&&_.length)if(M=!0,Z.length==1)U=_[0].innerText;else{let ae=Z[1],x=ae.match(/\(.*?\)/g);x?[].forEach.call(_,S=>{let B=Z[1];x.forEach(y=>{y==="()"?B=B.replace(y,S.innerText):(ae=y.match(/\((.*)\)/)[1],B=B.replace(y,S.getAttribute(ae)||S[ae]))}),U+=B}):U=_[0].getAttribute(ae)||_[0][ae]}}F=F.replace(C[0],U),C=F.match(/{(.*?)}/)}return M?(F=F.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),F):null}),n?this.insertHistoryUrl(u,se):(n="No result",W=!0),n=[n,u],g=n}W||(n=this.calcResult(n),ut.push({url:u,data:g,time:Date.now()/1e3+f}),ut.length>50&&ut.shift(),V.setItem("tipsStorage",ut))}}else if(e=e.replace(/【SearchJumperBreak】/g,`
`),n=/\breturn\b/.test(e)?await new Ti("fetch","storage","name",'"use strict";'+e)(Qe,V,t):e,n=this.calcResult(n),D&&D.href){let u=D.title||D.alt||D.innerText;this.insertHistoryUrl(D.href,u)}}catch(s){fe(s)}return n}calcResult(e){let t=typeof e=="string",i=t?e:e[0];const r=/{([\d\.]+)(([\+\-*/][\d\.]+)+)}/,n=/([\+\-*/])([\d\.]+)/;let a=i.match(r);if(a){let s=[],o=a[0],p=parseFloat(a[1]),h=a[2];for(a=h.match(n);a;)h=h.replace(a[0],""),s.push([a[1],a[2]]),a=h.match(n);s.forEach(d=>{let m=parseFloat(d[1]);switch(d[0]){case"+":p+=m;break;case"-":p-=m;break;case"*":p*=m;break;case"/":p/=m;break}}),p=p.toFixed(2),i=i.replace(o,p)}return t?e=i:e[0]=i,e}insertHistoryUrl(e,t){if(e.indexOf(location.host)===-1)return;let i=location.href,r=document.title;Le.history.pushState("",t,e),document.title=t,Le.history.replaceState("",r,i),document.title=r}checkScroll(e,t){if(this.funcKeyCall||this.bar.style.display=="none")return;let i=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight;if(this.bar.scrollWidth>i||this.bar.scrollHeight>r?this.con.classList.contains("search-jumper-scroll")||(this.bar.style.cssText="",this.con.classList.add("search-jumper-scroll"),this.con.style.display=""):this.con.classList.contains("search-jumper-scroll")&&(this.bar.style.cssText="",this.con.classList.remove("search-jumper-scroll")),e)return;let n=this.bar.querySelector(".search-jumper-type.search-jumper-open");n&&(n.style.width==="0px"&&(n.style.width="auto"),n.style.height==="0px"&&(n.style.height="auto"),n!=this.bar.firstElementChild&&setTimeout(()=>{n.scrollIntoView(t?{}:{behavior:"smooth"})},0))}reopenType(e){let t=new PointerEvent("mouseup");e.parentNode.classList.contains("search-jumper-open")&&(e.onmouseup?e.onmouseup():e.dispatchEvent(t)),e.onmouseup?e.onmouseup():e.dispatchEvent(t)}showInPage(e,t){if(this.contains(D)||this.inInput&&nt||!e&&this.funcKeyCall)return;(!nt||!nt.parentNode)&&(nt=Be(Nt),Xe||this.addToShadow(nt));let i=We();if(e&&i&&i.length<(c.prefConfig.limitPopupLen||1)||this.con&&this.con.classList.contains("search-jumper-showall"))return;if(c.prefConfig.hidePopup&&(e=!1),!D)D=X(document);else if(!i&&D!=X(document)&&(D.className!="searchJumper"||!/^MARK$/i.test(D.nodeName))){let d=D,m;for(;d&&d.nodeName&&!/^(img|audio|video|a)$/i.test(d.nodeName);){if(d.parentNode){if(/^(img|audio|video|a)$/i.test(d.parentNode.nodeName)){d=d.parentNode;break}if(m=d.parentNode.querySelectorAll("audio,video"),m&&m.length!==1&&(m=d.parentNode.querySelectorAll("img")),m&&m.length!==1&&(m=d.parentNode.querySelectorAll("a")),m&&m.length===1){m[0].scrollHeight&&d.scrollHeight/m[0].scrollHeight<2&&(d=m[0]);break}}d=d.parentNode}d&&(D=d)}this.appendBar();let r=this;this.hideTimeout&&clearTimeout(this.hideTimeout);var n=c.prefConfig.autoDelay||1e3,a=()=>{r.bar.classList.remove("search-jumper-isInPage"),r.bar.classList.remove("search-jumper-isTargetImg"),r.bar.classList.remove("search-jumper-isTargetAudio"),r.bar.classList.remove("search-jumper-isTargetVideo"),r.bar.classList.remove("search-jumper-isTargetLink"),r.bar.classList.remove("search-jumper-isTargetPage"),r.bar.classList.remove("initShow"),r.hideTimeout=null};c.prefConfig.autoHide&&(this.hideTimeout=setTimeout(a,n)),this.bar.classList.remove("search-jumper-isInPage"),this.bar.classList.remove("search-jumper-isTargetImg"),this.bar.classList.remove("search-jumper-isTargetAudio"),this.bar.classList.remove("search-jumper-isTargetVideo"),this.bar.classList.remove("search-jumper-isTargetLink"),this.bar.classList.remove("search-jumper-isTargetPage"),this.bar.classList.remove("initShow"),this.tips.style.opacity=0,this.tips.style.display="none",this.tips.style.transition="none",ie(this.tips,""),setTimeout(()=>{this.bar.classList.add("initShow")},10);let s="",o="";if(i)if(this.bar.classList.add("search-jumper-isInPage"),this.bar.style.display=="none"||e)s="needInPage";else{let d=this.bar.querySelector(".search-jumper-type.search-jumper-open");(!d||d.classList.contains("notmatch")||d.classList.contains("search-jumper-targetPage")||d.classList.contains("search-jumper-targetImg")||d.classList.contains("search-jumper-targetAudio")||d.classList.contains("search-jumper-targetVideo")||d.classList.contains("search-jumper-targetLink"))&&(s="needInPage")}else{switch(D.children.length==1&&D.children[0].nodeName.toUpperCase()==="A"&&(D=D.children[0]),D.nodeName.toUpperCase()){case"IMG":this.bar.classList.add("search-jumper-isTargetImg"),s="targetImg";break;case"AUDIO":this.bar.classList.add("search-jumper-isTargetAudio"),s="targetAudio";break;case"VIDEO":this.bar.classList.add("search-jumper-isTargetVideo"),s="targetVideo";break;case"A":this.bar.classList.add("search-jumper-isTargetLink"),s="targetLink";break;default:break}let d=D.parentNode;d&&d.nodeName.toUpperCase()==="A"&&(this.bar.classList.add("search-jumper-isTargetLink"),s?o="targetLink":s="targetLink"),s||(this.bar.classList.add("search-jumper-isTargetPage"),s="targetPage"),s||(s="targetAll")}this.bar.style.display=="none"&&(this.bar.style.display="");let p,h;if(s&&(p=this.bar.querySelector(`.search-jumper-${s}:not(.notmatch)>span`),h=this.bar.querySelectorAll(`.search-jumper-${s}:not(.notmatch)>a>img`)),r.setFuncKeyCall(!1),p&&(!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen||e)){let d=this.bar.querySelectorAll(`.search-jumper-${s}:not(.notmatch)>span:first-child`);[].forEach.call(d,m=>{m!==p&&r.reopenType(m)}),r.reopenType(p),r.insertHistory(p.parentNode),o&&(d=this.bar.querySelectorAll(`.search-jumper-${o}:not(.notmatch)>span:first-child`),[].forEach.call(d,m=>{m!==p&&r.reopenType(m)}),r.reopenType(p))}if(!e&&(c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen)&&this.closeOpenType(),r.setFuncKeyCall(e),e){h&&[].forEach.call(h,j=>{j.parentNode.style.display!="none"&&j.dataset.src&&et(j)}),r.allLists.forEach(j=>{j.style.visibility="hidden"}),r.con.classList.remove("search-jumper-scroll"),r.bar.style.cssText="",r.con.style.cssText="";let d=window.innerWidth||document.documentElement.clientWidth,m=document.documentElement.scrollLeft||document.body.scrollLeft,u=window.innerHeight||document.documentElement.clientHeight,f=c.prefConfig.tileOffset||0,w=Hr(t)-r.bar.clientWidth/2-(getComputedStyle(document.documentElement).position!=="static"?document.documentElement.offsetLeft:0);w<0?w=5:w+r.bar.clientWidth>d+m&&(w=d+m-r.bar.clientWidth-20);let b=Fr(t);Ct(t)>u/5?b-=r.bar.clientHeight+20+f:b+=20+f,xt(t)<d/2?(r.bar.style.left=w+m+"px",r.bar.style.transformOrigin="0 0"):(r.bar.style.right=d-w-r.bar.clientWidth-15+"px",r.bar.style.transformOrigin="100% 0"),r.bar.style.top=b+"px",r.removeBar(),r.bar.style.opacity=0,setTimeout(()=>{r.appendBar(),setTimeout(()=>{r.bar.style.opacity=1,setTimeout(()=>{let j=document.querySelector("#saladict-saladbowl-root>.saladict-external");if(j){let v=j.shadowRoot.querySelector(".saladbowl");v.style.transform=v.style.transform.replace(/\d+px\)/,`${t.clientY-15}px)`)}},100)},1)},1)}else r.bar.style.display="",r.initPos()}setFuncKeyCall(e){this.funcKeyCall=e,this.con.classList.contains("search-jumper-showall")||(e?(this.tileInput.value=Oe(),this.con.classList.add("funcKeyCall"),this.bar.insertBefore(this.tileInput,this.bar.firstChild)):(this.tileInput.value="",this.con.classList.remove("funcKeyCall"),this.tileInput.parentNode&&this.tileInput.parentNode.removeChild(this.tileInput)))}initPos(e,t,i,r){this.preList&&(this.preList.style.visibility="hidden",this.preList.style.opacity=0,this.listArrow.style.cssText=""),typeof e>"u"&&(e=c.prefConfig.position.x),typeof t>"u"&&(t=c.prefConfig.position.y),typeof i>"u"&&(i=c.prefConfig.offset.x),typeof r>"u"&&(r=c.prefConfig.offset.y);let n=this,a=s=>{if(n.bar.style.cssText="",n.con.style.cssText="",n.con.className="search-jumper-searchBarCon "+s,c.prefConfig.resizePage)switch(typeof n.initBodyStyle>"u"?n.initBodyStyle=X(document).style.cssText:X(document).style.cssText=n.initBodyStyle,n.con.classList.add("resizePage"),X(document).style.position="absolute",s){case"search-jumper-left":X(document).style.width=`calc(100vw - ${n.scale*42}px)`,X(document).style.right="0px";break;case"search-jumper-right":X(document).style.width=`calc(100vw - ${n.scale*42}px)`,X(document).style.left="0px";break;case"search-jumper-bottom":X(document).style.width="100%",X(document).style.height=`calc(100vh - ${n.scale*42}px)`,X(document).style.top="0px",X(document).style.overflow="auto";break;default:X(document).style.width="100%",X(document).style.height=`calc(100vh - ${n.scale*42}px)`,X(document).style.bottom="0px",X(document).style.overflow="auto";break}else c.prefConfig.autoHideAll&&n.con.classList.add("hideAll");let o=n.scale*40;setTimeout(()=>{let p=n.con.classList.contains("search-jumper-left")||n.con.classList.contains("search-jumper-right");Se.forEach(h=>{if(!h.classList.contains("search-jumper-open"))p?(h.style.width="",h.style.height=o+"px"):(h.style.width=o+"px",h.style.height="");else{let d=Math.max(h.scrollWidth,h.scrollHeight);d&&(d+="px",p?(h.style.width="",h.style.height=d):(h.style.width=d,h.style.height=""))}})},1)};i<0&&(i=0),r<0&&(r=0),e=="center"&&t=="top"?(a(""),n.bar.style.position="relative"):e=="left"&&t=="top"?i>r?(a(""),n.bar.style.position="fixed",n.bar.style.left=i+"px"):(a("search-jumper-left"),n.bar.style.position="fixed",n.bar.style.top=r+"px"):e=="right"&&t=="top"?i>r?(a(""),n.bar.style.position="fixed",n.bar.style.right=i+"px"):(a("search-jumper-right"),n.bar.style.position="fixed",n.bar.style.top=r+"px"):e=="center"&&t=="bottom"?(a("search-jumper-bottom"),n.bar.style.position="relative"):e=="left"&&t=="bottom"?i>r?(a("search-jumper-bottom"),n.bar.style.position="fixed",n.bar.style.left=i+"px",n.bar.style.bottom="0px",n.bar.style.top="unset"):(a("search-jumper-left"),n.bar.style.position="fixed",n.bar.style.bottom=r+"px"):e=="right"&&t=="bottom"?i>r?(a("search-jumper-bottom"),n.bar.style.position="fixed",n.bar.style.right=i+"px",n.bar.style.bottom="0px",n.bar.style.top="unset"):(a("search-jumper-right"),n.bar.style.position="fixed",n.bar.style.bottom=r+"px"):e=="left"&&t=="center"?(a("search-jumper-left"),n.bar.style.position="relative",n.bar.style.marginTop=r+"px",n.con.style.display="flex",n.con.style.justifyContent="center"):e=="right"&&t=="center"&&(a("search-jumper-right"),n.bar.style.position="absolute",n.bar.style.marginTop=r+"px",n.con.style.display="flex",n.con.style.justifyContent="center",n.con.style.alignItems="flex-end"),c.prefConfig.position.x=e,c.prefConfig.position.y=t,c.prefConfig.offset.x=i,c.prefConfig.offset.y=r,c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen?n.checkScroll(!1,!0):setTimeout(()=>{let s=n.bar.querySelector(".search-jumper-type.search-jumper-open");s&&(s.style.transition="none",s.style.width="auto",s.style.height="auto",setTimeout(()=>{s.style.width=s.scrollWidth+"px",s.style.height=s.scrollHeight+"px",setTimeout(()=>{s.style.transition=""},1),n.checkScroll(!1,!0)},0))},251)}}class Qr{constructor(){this.clickedIndex=0,this.signList=[],this.clickedEles={},this.exact=!0,this.accu=0,this.wheelScrolling=!1}getSelector(e,t=!0){this.exact=t,this.close(),this.toggle(),this.callback=e}init(){if(this.inited)return;this.inited=!0;let e=this;Be(`
                 body.searchJumper-picker,
                 body.searchJumper-picker *:hover,
                 body.searchJumper-picker a:hover {
                   cursor: crosshair !important;
                 }
                 .select-rect {
                   position: fixed;
                   z-index: 2147483647;
                   background: none;
                   border: 1px dashed rgba(120, 170, 210, 0.8);
                 }
                 .select-rect>.dot {
                   width: 10px;
                   height: 10px;
                   border: 2px solid #000;
                   border-radius: 50%;
                   background-color: white;
                   position: absolute;
                 }
                 .select-rect>.top-left {
                   top: -5px;
                   left: -5px;
                 }
                 .select-rect>.top-right {
                   top: -5px;
                   right: -5px;
                 }
                 .select-rect>.bottom-left {
                   bottom: -5px;
                   left: -5px;
                 }
                 .select-rect>.bottom-right {
                   bottom: -5px;
                   right: -5px;
                 }
                 .select-rect>.top {
                   top: -5px;
                   left: calc(50% - 5px);
                 }
                 .select-rect>.right {
                   top: calc(50% - 5px);
                   right: -5px;
                 }
                 .select-rect>.left {
                   top: calc(50% - 5px);
                   left: -5px;
                 }
                 .select-rect>.bottom {
                   bottom: -5px;
                   left: calc(50% - 5px);
                 }
                `);let i=n=>{if(!n)return;if(e.callback){if(n){let s=e.geneSelector(n,e.exact);e.callback(s),e.close()}return}let a=e.createSignDiv();e.clickedEles[e.clickedIndex]=n,e.appendSign(a,n,e.clickedIndex),e.clickedIndex++,P.con.classList.add("selectedEle")},r;this.initSelectRect(),this.mainSignDiv=this.createSignDiv(),this.setImportant(this.mainSignDiv,"pointer-events","none"),this.setImportant(this.mainSignDiv,"background","rgba(120, 170, 210, 0.3)"),this.moveHandler=n=>{if(n.target!==document)if(e.inPicker&&n.preventDefault(),e.rectSelecting)e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv),e.selectRect.parentNode||X(document).appendChild(e.selectRect),e.createSelectRect({x:n.clientX,y:n.clientY});else{if(e.creatingRect)return;{let a=e.getTarget(n.target);e.mainSignDiv.parentNode!==a.parentNode&&a.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,a),(n.ctrlKey||n.metaKey)&&(clearTimeout(r),r=setTimeout(()=>{let s=e.cleanTarget(n.target);i(s)},5))}}},this.leaveHandler=n=>{e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv)},this.clickHandler=n=>{if(e.inPicker&&(n.stopPropagation(),n.preventDefault()),e.creatingRect)return;if(e.rectSelecting){e.selectRect.parentNode&&e.selectRect.parentNode.removeChild(e.selectRect),e.rectSelecting=!1,P.bar.classList.remove("rectSelecting");return}let a=e.getTarget(n.target);i(a)},this.mouseDownHandler=n=>{e.rectSelecting=!0,P.bar.classList.add("rectSelecting"),e.rectInitPos={x:n.clientX,y:n.clientY},n.stopPropagation(),n.preventDefault()},this.mouseUpHandler=n=>{e.rectSelecting=!1,P.bar.classList.remove("rectSelecting"),!e.creatingRect&&e.selectRect.parentNode&&(e.selectRect.parentNode.removeChild(e.selectRect),e.finishSelectRect(),n&&n.stopPropagation&&n.stopPropagation(),n&&n.preventDefault&&n.preventDefault())},this.wheelHandler=n=>{if(n.preventDefault(),n.stopPropagation(),e.wheelScrolling)return;e.wheelScrolling=!0,setTimeout(()=>{e.wheelScrolling=!1},100);let a;if(n.type!=="wheel"){let o=0;typeof n.axis=="number"?n.axis==2&&(o=n.detail):(typeof n.wheelDeltaY>"u"||n.wheelDeltaY!=0)&&(o=-n.wheelDelta/40),a=o}else a=n.deltaY;a>0?e.accu--:e.accu++,e.accu<0?e.accu=0:e.accu>8&&(e.accu=8);let s=e.getTarget(n.target);e.mainSignDiv.parentNode!==s.parentNode&&s.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,s)}}initSelectRect(){this.waitToRemoveSigns=[],this.waitToAddSigns=[];let e=document.createElement("div");ie(e,`
                  <div class="dot top-left"></div>
                  <div class="dot top-right"></div>
                  <div class="dot bottom-left"></div>
                  <div class="dot bottom-right"></div>
                  <div class="dot top"></div>
                  <div class="dot right"></div>
                  <div class="dot left"></div>
                  <div class="dot bottom"></div>
                `),e.className="select-rect",this.selectRect=e}createSelectRect(e){this.rectToPos=e,!this.creatingRect&&(this.creatingRect=!0,setTimeout(()=>{this.creatingRect=!1,this.selectRect.style.left=Math.min(this.rectToPos.x,this.rectInitPos.x)+"px",this.selectRect.style.top=Math.min(this.rectToPos.y,this.rectInitPos.y)+"px",this.selectRect.style.width=Math.abs(this.rectToPos.x-this.rectInitPos.x)+"px",this.selectRect.style.height=Math.abs(this.rectToPos.y-this.rectInitPos.y)+"px",this.checkRectAndSign(),this.rectSelecting||this.mouseUpHandler()},100))}finishSelectRect(){let e=this;this.waitToRemoveSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns.forEach(t=>{delete t.dataset.recttemp}),this.waitToRemoveSigns=[],this.waitToAddSigns=[],this.signList.length?P.con.classList.add("selectedEle"):P.con.classList.remove("selectedEle")}checkRectAndSign(){if(!this.domInfo)return;let e=this;this.waitToRemoveSigns.forEach(t=>{t.style.opacity=""}),this.waitToRemoveSigns=[],this.signList.forEach(t=>{let i=t[0];if(i.dataset.recttemp)return;let r=i.getBoundingClientRect(),n=e.selectRect.getBoundingClientRect();e.compareRect(r,n)?(i.style.opacity="0",e.waitToRemoveSigns.push(i)):i.style.opacity=""}),this.waitToAddSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns=[],this.waitToRemoveSigns.length===0&&(this.curRectInfo={},this.rectInitPos.x<this.rectToPos.x?(this.curRectInfo.left=this.rectInitPos.x,this.curRectInfo.right=this.rectToPos.x):(this.curRectInfo.left=this.rectToPos.x,this.curRectInfo.right=this.rectInitPos.x),this.rectInitPos.y<this.rectToPos.y?(this.curRectInfo.top=this.rectInitPos.y,this.curRectInfo.bottom=this.rectToPos.y):(this.curRectInfo.top=this.rectToPos.y,this.curRectInfo.bottom=this.rectInitPos.y),this.compareDomWithRect(this.domInfo),this.signDomWithRect(this.domInfo))}compareDomWithRect(e){if(e.children&&e.children.length>0){let t=0;for(let i=0;i<e.children.length;i++){let r=e.children[i];this.compareDomWithRect(r)&&t++}if(t===e.children.length){let i=e.target.getBoundingClientRect();if(i.width&&i.height)return e.sign=!0,!0}}else if(this.compareRect(this.curRectInfo,e.target.getBoundingClientRect()))return e.sign=!0,!0;return e.sign=!1,!1}signDomWithRect(e){if(e.sign){let t=this.createSignDiv();t.dataset.recttemp=1,e.target.parentNode.appendChild(t),this.adjustSignDiv(t,e.target),this.signList.push([t,e.target]),this.waitToAddSigns.push(t)}else if(e.children&&e.children.length>0)for(let t=0;t<e.children.length;t++){let i=e.children[t];this.signDomWithRect(i)}}compareRect(e,t){return t.width&&t.height&&e.left<=t.right&&e.right>=t.left&&e.top<=t.bottom&&e.bottom>=t.top}cleanTarget(e){if(!e||e.className=="searchJumperSign"||(e=this.getTarget(e),!e))return null;for(let t in this.clickedEles){let i=this.clickedEles[t];try{if(i==e||i.contains(e)||e.contains(i))return null}catch{return null}}return e}appendSign(e,t,i){t.dataset&&(t.dataset.signNum=parseInt(t.dataset.signNum||0)+1),e.dataset.target=i,t.parentNode.appendChild(e),this.adjustSignDiv(e,t),this.signList.push([e,t])}removeSign(e){e.parentNode&&e.parentNode.removeChild(e);for(let n=0;n<this.signList.length;n++)if(this.signList[n][0]===e){this.signList.splice(n,1);break}let t=e.dataset.target,i=this.clickedEles[t];if(!i)return;let r=parseInt(i.dataset.signNum||0)-1;i.dataset.signNum=r,r<=0&&delete this.clickedEles[t]}getTarget(e){let t=this.accu;for(;e&&t;){let i=e.parentNode;if(!i)break;e=i,t--}for(;e.parentNode&&(e.offsetWidth===0||e.offsetHeight===0);)e=e.parentNode;return e}close(){this.mainSignDiv&&(this.rectSelecting&&(this.selectRect.parentNode&&this.selectRect.parentNode.removeChild(this.selectRect),this.finishSelectRect(),this.rectSelecting=!1),this.callback=null,this.domInfo=null,this.clearSigns(),this.clickedEles={},this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv),X(document).classList.remove("searchJumper-picker"),P.con.classList.remove("selectedEle"),P.con.removeEventListener("mouseenter",this.leaveHandler,!0),X(document).removeEventListener("mousemove",this.moveHandler,!0),X(document).removeEventListener("click",this.clickHandler,!0),X(document).removeEventListener("mousedown",this.mouseDownHandler,!0),X(document).removeEventListener("mouseup",this.mouseUpHandler,!0),X(document).removeEventListener(qt(),this.wheelHandler,{passive:!1,capture:!0}),this.inPicker=!1)}setImportant(e,t,i){e.style.setProperty(t,i,"important")}createSignDiv(){let e=document.createElement("div");return this.setImportant(e,"position","absolute"),this.setImportant(e,"z-index","2147483647"),this.setImportant(e,"background","rgba(120, 170, 210, 0.6)"),this.setImportant(e,"transition","all 0.15s ease-out"),this.setImportant(e,"box-shadow","rgb(0 0 0) 0px 0px 3px 0px"),this.setImportant(e,"cursor","pointer"),e.className="searchJumperSign",e.addEventListener("mouseenter",t=>{this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv)},!0),e.addEventListener("mousedown",t=>{t.stopPropagation(),t.preventDefault(),this.removeSign(e)},!0),e}adjustSignDiv(e,t){this.setImportant(e,"width",t.offsetWidth+"px"),this.setImportant(e,"height",t.offsetHeight+"px");let i=t.offsetLeft,r=t.offsetTop;if(t.offsetParent&&e.offsetParent&&t.offsetParent!==e.offsetParent){let n=e.offsetParent.getBoundingClientRect(),a=t.offsetParent.getBoundingClientRect();i+=a.left-n.left,r+=a.top-n.top}this.setImportant(e,"left",i+"px"),this.setImportant(e,"top",r+"px")}geneSelector(e,t){let i=e.nodeName.toLowerCase();if(i!=="html"&&i!=="body")if(t&&e.id&&/^[a-z\-_][\w\-_]+$/i.test(e.id))i="#"+e.id;else{if(e.className){let n=e.classList.length;i+=[].map.call(e.classList,a=>/^[a-z][\w]+$/i.test(a)||n<3&&/^[a-z\-_][\w\-_]+$/i.test(a)?"."+a:"").join("")}let r=e.parentElement;if(r&&(i=this.geneSelector(r,!!t)+" > "+i,t&&r.children.length>1&&!/^HTML$/i.test(r.nodeName))){let n,a=0,s=0;for(n=0;n<r.children.length&&!(r.children[n].nodeName==e.nodeName&&(s++,r.children[n]==e&&(a=s),a>0&&s>1));n++);i+=s==1?"":`:nth-of-type(${a})`}}return i}copy(){let e=this,t="",i="";this.signList.forEach(a=>{i+=`
`+a[1].innerText,t+=a[1].outerHTML}),i=i.trim();const r=new Blob([t],{type:"text/html"}),n=new Blob([i],{type:"text/plain"});try{const a=new ClipboardItem({"text/html":r,"text/plain":n});navigator.clipboard.write([a]).then(()=>{Ce("Copied successfully!")},s=>{Ge(i),console.log(s)})}catch{Ge(i)}}getElements(){return!this.inPicker||!this.signList||this.signList.length===0?null:this.signList.map(e=>e[1])}openLinks(){if(!window.confirm(J("batchOpenConfirm")))return;let e=[];this.signList.forEach(t=>{let i=t[1];i.href?/^(http|ftp)/i.test(i.href)&&e.indexOf(i.href)===-1&&e.push(i.href):i.parentNode&&i.parentNode.href?/^(http|ftp)/i.test(i.parentNode.href)&&e.indexOf(i.parentNode.href)===-1&&e.push(i.parentNode.href):i.querySelectorAll&&[].forEach.call(i.querySelectorAll("a[href]"),r=>{/^(http|ftp)/i.test(r.href)&&e.indexOf(r.href)===-1&&e.push(r.href)})}),e.forEach(t=>{ye(t,{active:!1,insert:!0})})}getPickerStr(){if(!this.inPicker)return"";let e="";return this.signList.forEach(t=>{e+=`
`+t[1].innerText}),e.trim()}expand(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let i=e.clickedEles[t],r=e.geneSelector(i);i.dataset.signNum=0,[].forEach.call(document.querySelectorAll(r),n=>{let a=e.createSignDiv();X(document).appendChild(a),e.appendSign(a,n,t)})})}collapse(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let i=e.clickedEles[t];i.dataset.signNum=0;let r=e.createSignDiv();X(document).appendChild(r),e.appendSign(r,i,t)})}clearSigns(){this.signList.forEach(e=>{e=e[0],e.parentNode&&e.parentNode.removeChild(e)}),this.signList=[]}processNode(e,t){const i={};if(i.target=e,i.children=[],e.nodeType===Node.ELEMENT_NODE){const n=window.getComputedStyle(e);if(n.display==="none"&&n.visibility==="hidden"||e.innerHTML.trim()==="")return null}else if(e.nodeType!==Node.TEXT_NODE||e.textContent.trim()==="")return null;const r=e.childNodes;if(r.length>0){i.target=e,t.children.push(i);for(const n of r)(n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE)&&this.processNode(n,i)}else if(e.nodeType===Node.TEXT_NODE){const n=e.textContent.split(`
`),a=document.createRange();a.selectNodeContents(e);let s=0,o=e.parentNode,p=o.getBoundingClientRect();for(const h of n){if(h.trim()===""){s+=h.length+1;continue}a.setStart(e,s),s+=h.length,a.setEnd(e,s),s++;const d=a.getBoundingClientRect();let m=d.left-p.left,u=d.top-p.top,f=d.width,w=d.height,b={target:{innerText:h,outerHTML:h,parentNode:o,offsetLeft:m+o.offsetLeft,offsetTop:u+o.offsetTop,offsetWidth:f,offsetHeight:w,getBoundingClientRect:()=>{let j=o.getBoundingClientRect();return{left:j.left+m,top:j.top+u,right:j.left+m+f,bottom:j.top+u+w,width:f,height:w}}}};t.children.push(b)}}else e.nodeType===Node.ELEMENT_NODE&&(i.target=e,t.children.push(i));return i}toggle(e){if(this.init(),this.inPicker){this.close();return}this.rectSel=!!e,e?(this.domInfo=this.processNode(X(document),{children:[]}),X(document).addEventListener("mousedown",this.mouseDownHandler,!0),X(document).addEventListener("mouseup",this.mouseUpHandler,!0)):X(document).addEventListener(qt(),this.wheelHandler,{passive:!1,capture:!0}),this.accu=0,this.inPicker=!0,X(document).classList.add("searchJumper-picker"),P.con.addEventListener("mouseenter",this.leaveHandler,!0),X(document).addEventListener("mousemove",this.moveHandler,!0),X(document).addEventListener("click",this.clickHandler,!0)}}const Te=new Qr;function es(l){if(!D)return;let e=l||{key:"Enter",keyCode:13,bubbles:!0},t=new KeyboardEvent("keydown",e);D.dispatchEvent(t),t=new KeyboardEvent("keyup",e),D.dispatchEvent(t),t=new KeyboardEvent("keypress",e),D.dispatchEvent(t),fe(D,`press ${l||"Enter"}`)}async function ni(l){return new Promise((e,t)=>{const i=Ke;let r=setInterval(()=>{if(i?.aborted){clearInterval(r),t(i.reason);return}let n=null;if(l?l==="@"?n=D:n=Mt(l):n=document.readyState==="complete",n===!1)return null;n&&(clearInterval(r),e(n))},100)})}async function ts(l){return l?new Promise((e,t)=>{const i=Ke;let r=setInterval(()=>{if(i?.aborted){clearInterval(r),t(i.reason);return}Mt(l)||(clearInterval(r),e(null))},100)}):null}let bt=!1;async function pr(l,e){if(pt(),!l)return!0;D=l;let t=new FocusEvent("focusin",{bubbles:!0});l.dispatchEvent(t),t=new Event("focus",{bubbles:!0}),l.dispatchEvent(t);const i=window.getSelection(),r=i.rangeCount?i.getRangeAt(0):new Range;r.selectNode(l),i.removeAllRanges(),i.addRange(r),await Je(1),l.type!=="file"&&l.click&&l.click();let n=l.value;if(l.type=="file"){let d=e;if(d.indexOf("data:")==0)d=dr(d);else{let u=new Blob([d],{type:"text/plain"});d=new File([u],"noname.txt",{type:u.type})}let m=new DataTransfer;m.items.add(d),l.files=m.files,e="c:/fakepath/fakefile"}else if(/INPUT/i.test(l.nodeName)){var a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;a.call(l,e)}else if(/SELECT/i.test(l.nodeName)){var s=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;s.call(l,e)}else if(l.nodeName.toUpperCase()=="TEXTAREA"){var o=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;o.call(l,e)}else{let d=l;for(;d&&d.contentEditable!=="true";)d=d.parentNode;if(d)d.dispatchEvent(new InputEvent("beforeinput",{inputType:"insertText",data:e})),await Je(1),l.innerText!==e&&(Ke?l.innerText=e:ie(l,e));else{let m=e;if(m.indexOf("data:")==0)m=dr(m);else{let u=new Blob([m],{type:"text/plain"});m=new File([u],"noname.txt",{type:u.type})}var p=new ClipboardEvent("paste",{target:document.body,clipboardData:new DataTransfer});p.clipboardData.items.add(m),l.dispatchEvent(p)}}t=new Event("input",{bubbles:!0});let h=l._valueTracker;h&&h.setValue(n),l.dispatchEvent(t),t=new Event("change",{bubbles:!0}),l.dispatchEvent(t),fe(l,"input")}async function Ft(l,e=-1){pt(),bt=!1;let t;if(e>=0){e===0&&await ni(l);let i=Ii(l);if(i.length===0)return!0;if(i.length===1)t=i[0],bt=!0;else{if(i.length<=e)return!0;t=i[e],i.length===e+1&&(bt=!0)}}else if(t=await ni(l),!t)return!0;return pt(),t}async function hr(l,e,t=-1){let i=await Ft(l,t);return pt(),i===!0?!0:(await pr(i,e),bt)}async function ur(l,e=-1){let t=await Ft(l,e);if(pt(),t===!0)return!0;if(D=t,!PointerEvent)return t.click();let i={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:1,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var r=new PointerEvent("mouseover",i);t.dispatchEvent(r),r=new PointerEvent("pointerover",i),t.dispatchEvent(r),r=new PointerEvent("mousedown",i),t.dispatchEvent(r),r=new PointerEvent("pointerdown",i),t.dispatchEvent(r),r=new PointerEvent("mouseup",i),t.dispatchEvent(r),r=new PointerEvent("pointerup",i),t.dispatchEvent(r);let n=(a,s)=>{let o;try{o=document.createEvent("TouchEvent"),o.initTouchEvent(s,!0,!0)}catch{try{o=document.createEvent("UIEvent"),o.initUIEvent(s,!0,!0)}catch{o=document.createEvent("Event"),o.initEvent(s,!0,!0)}}try{o.targetTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.touches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.changedTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}]}catch{}a.dispatchEvent(o)};return n(t,"touchstart"),n(t,"touchend"),t.click(),fe(t,`click ${l}`),bt}async function is(l,e=-1){let t=await Ft(l,e);if(t===!0)return!0;D=t;let i={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:2,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var r=new PointerEvent("mouseover",i);return t.dispatchEvent(r),r=new PointerEvent("pointerover",i),t.dispatchEvent(r),r=new PointerEvent("mousedown",i),t.dispatchEvent(r),r=new PointerEvent("pointerdown",i),t.dispatchEvent(r),r=new PointerEvent("mouseup",i),t.dispatchEvent(r),r=new PointerEvent("pointerup",i),t.dispatchEvent(r),t.click(),t.click(),r=new MouseEvent("dblclick",{...i,view:Le}),t.dispatchEvent(r),fe(t,`dblclick ${l}`),bt}async function rs(l,e=-1){let t=await Ft(l,e);if(t===!0)return!0;D=t;let i={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:2,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:0,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:3};t.focus();var r=new PointerEvent("mouseover",i);return t.dispatchEvent(r),r=new PointerEvent("pointerover",i),t.dispatchEvent(r),r=new PointerEvent("mousedown",i),t.dispatchEvent(r),r=new PointerEvent("pointerdown",i),t.dispatchEvent(r),r=new PointerEvent("mouseup",i),t.dispatchEvent(r),r=new PointerEvent("pointerup",i),t.dispatchEvent(r),r=new PointerEvent("contextmenu",i),t.dispatchEvent(r),fe(t,`rclick ${l}`),bt}async function ai(l,e){if(D)if(D.focus(),typeof l.value<"u"){const t=l.selectionStart,i=l.selectionEnd;let r=l.value.substring(0,t)+e+l.value.substring(i,l.value.length);await pr(l,r),l.selectionStart=t+e.length,l.selectionEnd=t+e.length}else{const t=window.getSelection(),i=t.getRangeAt(0);t.toString()||i.selectNode(l.childNodes.length===1?l.firstChild:l),i.deleteContents(),i.insertNode(document.createTextNode(e)),t.removeAllRanges(),t.addRange(i)}}function Ut(l,e,t){if(e=e.replace(/#(j(umpFrom|f)?|from){(.*?)}/,""),St={charset:l,url:e,target:t},e.indexOf("#submitBySearchJumper")!==-1){St={charset:l,url:e.replace("#submitBySearchJumper",""),target:t},vr();return}const i="searchJumper_form";var r=document.getElementById(i);r||(r=document.createElement("form"),r.id=i,r.style.display="none",document.documentElement.appendChild(r));var n;let a=e.match(/[:%]p{(.*?)}/),s=e;return a?(s=e.replace(a[0],""),a=a[1],r.method="post",n=new URLSearchParams(a)):(r.method="get",n=new URLSearchParams(new URL(s).search)),l&&(r.acceptCharset=l),ie(r,""),r.target=t,r.action=s,n.forEach((o,p)=>{let h=document.createElement("input");h.name=p,h.value=o,r.appendChild(h)}),r.submit()}function dr(l){try{for(var e=l.split(","),t=e[0].match(/:(.*?);/)[1],i=atob(e[1]),r=i.length,n=new Uint8Array(r);r--;)n[r]=i.charCodeAt(r)}catch(s){fe(s)}let a=t.split("/");return a=a.length>1?a[1]:a[0],new File([n],"image."+a,{type:t})}async function fr(l,e=!1){if(!l)return null;if(e&&(l.referrerPolicy="no-referrer",/^data:/.test(l.dataset.src||l.src)))return l.dataset.src||l.src;if(l.dataset.src&&(l.src=l.dataset.src),!l.src)return null;if(l.src.split("/")[2]==document.domain){let n=getComputedStyle(l);var i=document.createElement("canvas"),r=i.getContext("2d");if(l.complete){i.width=l.naturalWidth||l.width||parseInt(n.width),i.height=l.naturalHeight||l.height||parseInt(n.height),r.drawImage(l,0,0);try{return i.toDataURL("image/png")}catch{return await oi(l.src,e)}}else return await new Promise(a=>{l.addEventListener("load",async s=>{i.width=l.naturalWidth||l.width||parseInt(n.width),i.height=l.naturalHeight||l.height||parseInt(n.height),r.drawImage(l,0,0);try{a(i.toDataURL("image/png"))}catch{a(await oi(l.src,e))}})})}else return await oi(l.src,e)}async function oi(l,e=!1){let t=l.split("/");return new Promise(i=>{De({method:"GET",url:l,responseType:"blob",referrerPolicy:e?"no-referrer":void 0,headers:e?{accept:"*/*",Referer:""}:{origin:t[0]+"//"+t[2],referer:location.href,accept:"*/*"},onload:function(r){try{var n=r.response,a=new FileReader;a.readAsDataURL(n),a.onload=function(s){i(s.target.result)}}catch{i(null)}},onerror:function(){i(null)},ontimeout:function(){i(null)}})})}function ss(l){let e=getComputedStyle(l),t=getComputedStyle(l,":before").content.replace(/"/g,"");if(!t)return!1;var i=document.createElement("canvas");i.width=l.clientWidth||parseInt(e.lineHeight),i.height=l.clientHeight||parseInt(e.lineHeight);var r=i.getContext("2d");r.font=e.font,r.strokeStyle=e.color||"black",r.fillStyle=e.color||"black",r.textBaseline="top";let n=r.measureText(t);return r.fillText(t,(i.width-n.width)/2,(i.height-parseInt(e.fontSize))/2),i.toDataURL("image/png")}async function ns(l){let e=l.className.trim().replace("fa fa-","").replace(/ /g,"_");if(ge[e])return;let t=ss(l);t=="data:,"||!t||(ge[e]=t,V.setItem("cacheIcon",ge))}async function Bi(l){let e;if(l.nodeName.toUpperCase()=="IMG"){let t=l.dataset.src||l.dataset.iconSrc||l.src;if(t){if(ge[t])return ge[t];e=await fr(l,!0),(e=="data:,"||!e)&&(e="fail"),ge[t]=e,V.setItem("cacheIcon",ge)}}else await ns(l);return await new Promise(t=>{setTimeout(()=>{t(!0)},1)}),e}async function Kt(){for(;_e.length>0;)await Bi(_e.shift())}async function mr(l){if(c.prefConfig.cacheSwitch){let e=_e.length>0;await Promise.all([Kt(),Kt(),Kt(),Kt(),Kt()]),e&&(l&&Ce(J("cacheOver")),fe(J("cacheOver")))}}async function gr(l){if(!Re){P.con.classList.add("in-input"),P.con.style.visibility="hidden",P.con.style.display="",P.appendBar(),await Je(2e3);let e=ii.length>0;for(;ii.length>0;)await Bi(ii.shift());e&&fe("All font icons cached!")}}function as(){const l=new AbortController,e={capture:!0,signal:l.signal};let t,i,r,n,a,s,o=!1,p=!1;const h=()=>{l.abort(),clearTimeout(r),clearTimeout(n),t=i=a=null},d=()=>{clearTimeout(n),t=i=a=null,p&&h()},m=()=>{if(!s||!i||document.hidden||!i.target.isConnected)return;const b=c.prefConfig;if(i.kind==="key"){if(!b.shortcut)return;const v=i.event,C=(v.key||String.fromCharCode(v.keyCode)).toLowerCase();for(const[g,k,A]of[["callBar",b.shortcutKey,"shortcut"],["showAll",b.showAllShortcutKey,"all"]])if(!(!k||k!==v.code&&k!==C)&&!["Alt","Ctrl","Shift","Meta"].some($=>b[g+$]&&!v[$.toLowerCase()+"Key"])&&!(!b.enableInInput&&ht(document)&&!["Alt","Ctrl","Shift","Meta"].some($=>b[g+$]))){i.kind=A,v.preventDefault(),v.stopPropagation();break}if(i.kind==="key")return}else if(!b.enableInPage||!i.kind&&(!b.selectToShow||!i.text||!b.enableInInput&&(ht(document)||Rt(i.target))))return;const j=s;s=null,o=!1,j()},u=(b,j)=>{const v=window.getSelection();i={event:b,target:j,text:We(),anchorNode:v.anchorNode,anchorOffset:v.anchorOffset,focusNode:v.focusNode,focusOffset:v.focusOffset},m()},f=()=>{clearTimeout(n);const b=t,j=c.prefConfig;!s||!b||b.moved||!j.enableInPage||!j[["leftMouse","middleMouse","rightMouse"][b.event.button]]||b.event.target.closest?.('a,input,button,select,textarea,iframe,[role="checkbox"],[role="button"],[contenteditable="true"],.cf-turnstile')||!j.enableInInput&&(ht(document)||Rt(b.event.target))||(n=setTimeout(()=>{i={kind:"press",event:b.event,target:b.event.target},m()},Math.max(0,parseInt(j.longPressTime)-(Date.now()-b.time))))},w=()=>{if(!p||t&&!i?.kind)return;const b=i;if(h(),!b||document.hidden||!b.target.isConnected||!b.event.target.isConnected||P.contains(b.target)||/^pv-/.test(b.event.target.className)||qe||Re)return;if(D=b.target,b.kind==="all"){P.appendBar(),P.showAllSites();return}if(b.kind==="shortcut"){P.setFuncKeyCall(!1),P.showInPage(),(!c.prefConfig.disableInputOnWords||P.inInput||!We())&&P.showSearchInput();return}if(!c.prefConfig.enableInPage)return;const j=ht(document)||Rt(b.event.target);if(!c.prefConfig.enableInInput&&j)return;if(c.prefConfig.minPopup==2&&P.con.classList.toggle("targetInput",j),b.kind==="press"){bi=b.target,c.prefConfig.longPressTile?P.showInPage(!0,b.event):(P.setFuncKeyCall(!1),P.showInPage());return}if(!c.prefConfig.selectToShow||!b.text||We()!==b.text)return;const v=window.getSelection();["anchorNode","anchorOffset","focusNode","focusOffset"].some(C=>v[C]!==b[C])||P.showInPage(!0,b.event)};document.addEventListener("mousedown",b=>{if(b.isTrusted){if(p)return h();i=a=null,t=b.button===0||o?{event:b,moved:!1,time:Date.now()}:null,f()}},e),document.addEventListener("mousemove",b=>{t&&Math.abs(t.event.clientX-b.clientX)+Math.abs(t.event.clientY-b.clientY)>2&&(t.moved=!0,clearTimeout(n))},e),document.addEventListener("mouseup",b=>{!b.isTrusted||!t||(clearTimeout(n),b.button===0&&t.event.button===0&&!i?.kind&&(t.moved||b.detail>1)&&u(b,t.event.target),t=null,p&&(r=setTimeout(w,0)))},e),document.addEventListener("dblclick",()=>{p&&h()},e),document.addEventListener("keydown",b=>{d(),!(!o||!b.isTrusted)&&(i={kind:"key",event:b,target:b.target},m())},e),document.addEventListener("touchstart",b=>{o&&b.isTrusted&&b.touches.length===1&&(a=b)},e),document.addEventListener("selectionchange",()=>{a&&s&&window.getSelection().toString()&&u(a,a.target)},e),document.addEventListener("contextmenu",b=>{i?.kind==="press"&&b.preventDefault()},e);for(const b of["dragstart","pointercancel","touchcancel","scroll"])document.addEventListener(b,d,e);return window.addEventListener("blur",b=>{b.target===window&&d()},e),document.addEventListener("visibilitychange",()=>{document.hidden&&d()},e),{cancel:h,async waitForGesture(){o=!0;const b=await V.getItem("searchData");return b?.prefConfig&&Object.assign(c.prefConfig,b.prefConfig),new Promise(j=>{s=j,f(),m()})},resume(){if(!l.signal.aborted){if(p=!0,qe||Re||!i?.kind&&(!c.prefConfig.enableInPage||!c.prefConfig.selectToShow)){h();return}w()}}}}function We(){let l=At||Te.getPickerStr()||window.getSelection().toString();if(setTimeout(()=>{At=""},1),!l){let e=window.getSelection();e&&e.rangeCount&&(e=e.getRangeAt(0),e&&(e=e.cloneContents(),e&&(l=e.textContent)))}if(!l){let e=ji(document);if(e&&/^(TEXTAREA|INPUT)$/i.test(e.nodeName)){let t=e.selectionStart,i=e.selectionEnd;(t||i)&&(l=e.value.substring(t,i))}}if(l){if(l=l.trim(),l)return l}else if(D&&D.className==="searchJumper"&&/^MARK$/i.test(D.nodeName))return D.dataset.matched||D.innerText;return""}function li(l,e,t){return t||(/\w$/.test(l)?t="(\\b|$)":t=""),new RegExp(l.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g,"\\$1")+t,e)}function $i(l,e,t,i){if(l.indexOf(e+".replace(/")!==-1){let r=l.match(li(e,"",`\\.replace\\(/(.*?[^\\\\])/([gimsuyx]*),\\s*["'](.*?[^\\\\])??["']\\)`));return r?(t=t.replace(new RegExp(r[1],r[2]),r[3]||""),l=l.replace(r[0],e),$i(l,e,t,i)):l.replace(li(e,"g"),i?i(t):t)}else return l.replace(li(e,"g"),i?i(t.replace(/\$/g,"$$$$")):t.replace(/\$/g,"$$$$"))}function Oe(){let l=We();if(l)return l;if(!ce)return Ve||"";let e,t="",i=!ce.charset||ce.charset=="UTF-8";try{if(ce.keywords){let r=ce.keywords.split(`
`);for(let n=0;n<r.length;n++){let a=r[n];if(!a||!a.trim())continue;let s=r[n].match(/^(.*?)\.replace\(\//);if(s&&(a=s[1]),i){if(/^\w[\w\|]*$/.test(a)){let o=a.split("|"),p=new URLSearchParams(location.search);for(let h=0;h<o.length&&(t=p.get(o[h]),!t);h++);}else if(/\(.+\)/.test(a)&&a.indexOf("@")!==0)try{e=ue.match(new RegExp(a)),e&&(t=e[1]),t&&(t=decodeURIComponent(t))}catch{t=""}}if(!t&&X(document))try{let o=Mt(a);o&&(t=o.value||o.innerText)}catch{t=""}if(t&&s&&(t=$i(r[n],a,t)),t)break}}else if(i&&Tt.test(ce.url)&&!/[#:%]p{/.test(ce.url)&&(ue.indexOf("?")!=-1&&(e=ce.url.match(new RegExp(`[\\?&]([^&]*?)=${Ni}.*`)),e&&(t=new URLSearchParams(location.search).get(e[1]))),!t&&(e=ce.url.match(new RegExp(`https?://[^/]*/(.*)${Ni}`)),e&&(e=ue.match(new RegExp((e[1].replace(/\?/g,"\\?")||location.host.replace(/\./g,"\\.")+"/")+"(.*?)(/|$)")),e&&(t=e[1]),t))))try{t=decodeURIComponent(t)}catch{t=""}if(t==""&&X(document)){let r=X(document).querySelector("input[type=text]:not([readonly]),input:not([type])");r&&(t=r.value)}t&&(Ve=t)}catch(r){fe(r)}return Ve||"";//!localKeywords ? cacheKeywords : localKeywords;
}function yr(l,e){e=e||document.createElement("div"),l="on"+l;var t=l in e;if(!t){e.setAttribute||(e=document.createElement("div"));var i;e.hasAttribute(l)||(i=!0,e.setAttribute(l,"return;")),t=typeof e[l]=="function",i&&e.removeAttribute(l)}return t}function qt(){var l="DOMMouseScroll";return yr("wheel")?l="wheel":yr("mousewheel")&&(l="mousewheel"),l}let It=!1,At="";function os(){gt(J("settings"),()=>{ye(ct,{active:!0,insert:!0})}),gt(J("searchInPage"),()=>{P.showInPage(),P.showInPageSearch()}),gt(J("search"),()=>{P.searchAuto(0,{})}),gt(J("addSearchEngine"),()=>{let g=document.head.querySelector('[rel="search"]');if(g)Tr(g.href,(k,A)=>{if(k!="load"){A&&fe(A.statusText||A.error||A.response||A);let $=X(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||X(document).querySelector("textarea");Wi($)}});else{let k=X(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||X(document).querySelector("textarea");Wi(k)}}),document.addEventListener("searchJumper",g=>{switch(g.detail.action){case"search":g.detail.query&&(At=g.detail.query),g.detail.name?P.searchBySiteName(g.detail.name,g.detail.key||{}):P.searchAuto(g.detail.index,g.detail.key||{});break;case"show":P.setFuncKeyCall(!1),P.showInPage(),(!c.prefConfig.disableInputOnWords||P.inInput||!We())&&P.showSearchInput();break;case"showAll":P.appendBar(),P.showAllSites();break}}),D=X(document);let l=yt.children[0],e=0,t,i=!1,r=g=>{if(clearTimeout(t),P.bar.classList.remove("grabbing"),document.removeEventListener("mouseup",r,!1),document.removeEventListener("mousemove",a,!1),document.removeEventListener("touchend",r,!1),document.removeEventListener("touchmove",a,!1),P.bar.style.marginLeft="",P.bar.style.marginTop="",P.bar.style.transform="",e===1){e=0,P.showAllSites();return}e=0;let k=window.innerWidth||document.documentElement.clientWidth,A=window.innerHeight||document.documentElement.clientHeight,$=k/3,z=A/3,W,T,E,I,M=xt(g),H=Ct(g);M<$?(W="left",E=parseInt(P.bar.style.left)>0?parseInt(P.bar.style.left):0):M<$*2?(W="center",E=parseInt(P.bar.style.left)-k/2):(W="right",E=k-parseInt(P.bar.style.left)-P.bar.scrollWidth),H<A/2?(T="top",I=parseInt(P.bar.style.top)):(T="bottom",I=A-parseInt(P.bar.style.top)-P.bar.scrollHeight,I<0&&(I=0)),l.style.cursor="",P.closeOpenType(),P.initPos(W,T,E,I),V.setItem("searchData",c)},n={x:0,y:0},a=g=>{let k=xt(g),A=Ct(g);Math.abs(n.x-k)+Math.abs(n.y-A)<50||(e===1&&(clearTimeout(t),l.style.cursor="grabbing",P.bar.style.position="fixed",P.bar.style.marginLeft="0",P.bar.style.marginTop="0",P.bar.style.right="",P.bar.style.bottom="",P.bar.style.transform="unset",P.con.classList.remove("search-jumper-scroll"),P.bar.className="search-jumper-searchBar grabbing"),e=2,P.bar.style.left=k-P.bar.scrollWidth+20+"px",P.bar.style.top=A-P.bar.scrollHeight+20+"px")};if(yt.oncontextmenu=function(g){P.bar.style.display="none",g.preventDefault()},yt.addEventListener("mousedown",g=>{if(i){i=!1;return}if(g.button===2){c.prefConfig.resizePage&&(typeof P.initBodyStyle<"u"&&(X(document).style.cssText=P.initBodyStyle),P.con.classList.remove("resizePage")),document.removeEventListener("mouseup",r,!1),document.removeEventListener("mousemove",a,!1),document.removeEventListener("touchend",r,!1),document.removeEventListener("touchmove",a,!1);return}if(g.preventDefault(),g.stopPropagation(),P.inInput||g.button===1||g.altKey||g.ctrlKey||g.shiftKey||g.metaKey){ye(ct,{active:!0,insert:!0});return}e=1,n={x:xt(g),y:Ct(g)},document.addEventListener("mouseup",r,!1),setTimeout(()=>{e===1&&document.addEventListener("mousemove",a,!1)},100),t=setTimeout(()=>{P.bar.style.display="none",document.removeEventListener("mouseup",r,!1),document.removeEventListener("mousemove",a,!1)},2e3)},!1),yt.addEventListener("touchstart",g=>{g.preventDefault(),g.stopPropagation(),i=!0,e=1,n={x:xt(g),y:Ct(g)},document.addEventListener("touchend",r,!1),setTimeout(()=>{e===1&&document.addEventListener("touchmove",a,!1)},100),t=setTimeout(()=>{P.bar.style.display="none",c.prefConfig.resizePage&&(typeof P.initBodyStyle<"u"&&(X(document).style.cssText=P.initBodyStyle),P.con.classList.remove("resizePage")),document.removeEventListener("touchend",r,!1),document.removeEventListener("touchmove",a,!1)},1500)},{passive:!1,capture:!1}),P.bar.addEventListener(qt(),g=>{if(g.stopPropagation(),g.target.parentNode&&(g.target.parentNode.className=="sitelistCon"||g.target.parentNode.parentNode&&g.target.parentNode.parentNode.className=="sitelistCon"))return;let k=P.con.classList;if(k.contains("search-jumper-scroll")&&!(k.contains("search-jumper-left")||k.contains("search-jumper-right"))){var A,$;if(g.type!=="wheel"){var z=0,W=0;typeof g.axis=="number"?g.axis==2?W=g.detail:z=g.detail:typeof g.wheelDeltaY>"u"||g.wheelDeltaY!=0?W=-g.wheelDelta/40:z=-g.wheelDelta/40,$=W,A=z}else A=g.deltaX,$=g.deltaY;g.preventDefault(),P.con.scrollLeft+=$}},{passive:!1,capture:!1}),c.prefConfig.shortcut&&(c.prefConfig.switchSitesPreKey||c.prefConfig.switchSitesNextKey||c.prefConfig.shortcutKey||c.prefConfig.showAllShortcutKey)){let g=-1,k=!1,A=($,z,W,T,E,I)=>z&&!$.altKey||W&&!$.ctrlKey||T&&!$.shiftKey||E&&!$.metaKey||(k||(k=($.key||String.fromCharCode($.keyCode)).toLowerCase()),I!=k&&I!=$.code)||!c.prefConfig.enableInInput&&g==-1&&(g=1,!W&&!z&&!T&&!E&&ht(document))?!1:(g=0,$.preventDefault(),$.stopPropagation(),!0);document.addEventListener("mouseenter",$=>{$.target&&!P.contains($.target)&&(Ai=$.target)},!0),document.addEventListener("keydown",$=>{if($.target.id!=="searchJumperInput"&&(g=-1,k=!1,c.prefConfig.shortcutKey&&A($,c.prefConfig.callBarAlt,c.prefConfig.callBarCtrl,c.prefConfig.callBarShift,c.prefConfig.callBarMeta,c.prefConfig.shortcutKey)&&(P.setFuncKeyCall(!1),P.showInPage(),(!c.prefConfig.disableInputOnWords||P.inInput||!We())&&P.showSearchInput()),g!=1&&(c.prefConfig.showAllShortcutKey&&A($,c.prefConfig.showAllAlt,c.prefConfig.showAllCtrl,c.prefConfig.showAllShift,c.prefConfig.showAllMeta,c.prefConfig.showAllShortcutKey)&&(P.appendBar(),P.showAllSites()),ce&&P.bar.style.display!=="none"))){if(c.prefConfig.switchSitesPreKey&&A($,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesPreKey)){P.switchSite();return}c.prefConfig.switchSitesNextKey&&A($,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesNextKey)&&P.switchSite(!0)}},!0)}let s;if(c.prefConfig.enableInPage){let W=function(E){let I=!1;if(ht(document))I=!0;else{let M=!1,H=E;for(;H&&(M=H.contentEditable=="true",!(M||H.nodeName.toUpperCase()=="BODY"));)H=H.parentNode;M&&(I=!0)}return I},g=!1,k,A=!1,$;document.addEventListener("selectionchange",E=>{(c.prefConfig.leftMouse||c.prefConfig.middleMouse)&&(window.getSelection().toString()?$=window.getSelection().getRangeAt(0).getBoundingClientRect():$=null)});let z=!1;s=E=>{g&&E.preventDefault(),g=!1,document.removeEventListener("click",s,!0)};let T=E=>{if(bi=null,z&&E.type==="mousedown"&&E.button===0||E.target.classList&&E.target.classList.contains("search-jumper-btn")||P.contains(E.target)||P.bar.classList.contains("grabbing"))return;let I=W(E.target),M=!c.prefConfig.enableInInput&&I;if(M&&E.type==="dblclick")return;if(c.prefConfig.minPopup==2&&(I?P.con.classList.add("targetInput"):P.con.classList.remove("targetInput")),E.type==="touchstart"){c.prefConfig.selectToShow&&setTimeout(()=>{We()?P.showInPage(!0,E):P.waitForHide(0)},0);return}z=!0,setTimeout(()=>{z=!1},500),g=!1,D=E.target,P.closePopupWindow();let H=!1;if((c.prefConfig.altKey||c.prefConfig.ctrlKey||c.prefConfig.shiftKey||c.prefConfig.metaKey)&&!(c.prefConfig.altKey&&!E.altKey||c.prefConfig.ctrlKey&&!E.ctrlKey||c.prefConfig.shiftKey&&!E.shiftKey||c.prefConfig.metaKey&&!E.metaKey)&&(H=!0),!c.prefConfig.selectToShow&&(E.button===0&&!c.prefConfig.leftMouse||E.button===1&&!c.prefConfig.middleMouse)){P.waitForHide(0);return}let Y=E.clientX,se=E.clientY,re=!1,L=_=>{Math.abs(Y-_.clientX)+Math.abs(se-_.clientY)>2&&(clearTimeout(k),document.removeEventListener("mousemove",L,!0),_.target.removeEventListener("scroll",F),re=!0)},F=_=>{clearTimeout(k),document.removeEventListener("mousemove",L,!0),_.target.removeEventListener("scroll",F)},U=_=>{It=!1,P.contains(_.target)||g?_.preventDefault():setTimeout(()=>{g||/^pv-/.test(_.target.className)||(I=W(_.target),M=!c.prefConfig.enableInInput&&I,!M&&(H&&_.button===2||(re||A)&&_.button===0&&c.prefConfig.selectToShow&&We())?P.showInPage(!0,_):(z=!1,P.waitForHide(0)))},0),clearTimeout(k),document.removeEventListener("mouseup",U,!0),document.removeEventListener("mousemove",L,!0),_.target.removeEventListener("scroll",F)};if(E.type==="dblclick"){We()!==""?(g=!0,It=!1,document.removeEventListener("mouseup",U,!0),document.removeEventListener("mousemove",L,!0),E.target.removeEventListener("scroll",F),clearTimeout(k),setTimeout(()=>{P.showInPage(!0,E)},200)):(A=!0,setTimeout(()=>{A=!1},200));return}k&&clearTimeout(k),k=setTimeout(()=>{It||D==E.target&&(E.button===1&&!c.prefConfig.middleMouse||E.button===2&&!c.prefConfig.rightMouse||E.button===0&&!c.prefConfig.leftMouse||(c.prefConfig.longPressTile?P.showInPage(!0,E):(P.setFuncKeyCall(!1),P.showInPage()),g=!0))},parseInt(c.prefConfig.longPressTime));let Z=!1;if(E.button===2?H&&(Z=!0):(E.button===0?c.prefConfig.leftMouse&&(Z=!0):E.button===1&&c.prefConfig.middleMouse&&(Z=!0),Z&&(M?Z=!1:$?(E.clientX<$.left||E.clientX>$.left+$.width||E.clientY<$.top||E.clientY>$.top+$.height)&&(Z=!1):Z=!1)),Z)return setTimeout(()=>{It||P.showInPage(!0,E),document.removeEventListener("mousemove",L,!0),E.target.removeEventListener("scroll",F)},200),g=!0,document.addEventListener("mouseup",U,!0),document.addEventListener("click",s,!0),!1;document.addEventListener("mousemove",L,!0),document.addEventListener("mouseup",U,!0),E.target.addEventListener("scroll",F)};if(document.addEventListener("mousedown",T,!0),document.addEventListener("dblclick",T,!0),c.prefConfig.selectToShow){let E,I,M=H=>{clearTimeout(E),E=setTimeout(()=>{window.getSelection().toString()&&(T(I),document.removeEventListener("selectionchange",M))},300)};document.addEventListener("touchstart",H=>{H.isTrusted!==!1&&(I=H,document.addEventListener("selectionchange",M))})}document.addEventListener("contextmenu",E=>{(g||bi===E.target)&&E.preventDefault(),bi=null,g=!1})}c.prefConfig.dragToSearch&&!qe&&X(document).addEventListener("dragstart",g=>{if(!g.isTrusted||c.prefConfig.dragAlt&&!g.altKey||c.prefConfig.dragCtrl&&!g.ctrlKey||c.prefConfig.dragShift&&!g.shiftKey||c.prefConfig.dragMeta&&!g.metaKey||!c.prefConfig.enableInInput&&!g.altKey&&!g.ctrlKey&&!g.shiftKey&&!g.metaKey&&ht(document))return;D=g.target,D.nodeType!==1&&(D=D.parentNode),D.shadowRoot&&(D=D.shadowRoot.activeElement||D);const k=D.closest('[draggable="true"]');if(!g.altKey&&!g.ctrlKey&&!g.shiftKey&&!g.metaKey&&!/^(auto|default|pointer)$/.test(getComputedStyle(D).cursor)||k&&k.nodeName!=="A")return;const A=$=>{P.funcKeyCall=!0,P.waitForHide(0),setTimeout(()=>{us($.clientX,$.clientY)},2),s&&document.removeEventListener("click",s,!0),It=!0};if(k){const $=new AbortController,z={capture:!0,signal:$.signal},W=()=>$.abort();document.addEventListener("dragend",W,z),document.addEventListener("drop",W,z),document.addEventListener("dragstart",W,z),document.addEventListener("dragover",T=>{Math.hypot(T.clientX-g.clientX,T.clientY-g.clientY)<=100||(W(),A(T))},z)}else A(g)}),c.prefConfig.quickAddRule&&document.addEventListener("click",g=>{((g.ctrlKey||g.metaKey)&&g.shiftKey||(g.ctrlKey||g.metaKey)&&g.altKey||g.altKey&&g.shiftKey)&&/^(INPUT|TEXTAREA)$/i.test(g.target.nodeName)&&(/^INPUT$/i.test(g.target.nodeName)&&g.target.type&&g.target.type!="text"&&g.target.type!="search"||Wi(g.target))},!0);let o,p=g=>{clearTimeout(o),o=setTimeout(()=>{P.refresh()},100)};document.addEventListener("fullscreenchange",g=>{document.fullscreenElement&&(P.bar.style.display="none")});let h=!1,d=g=>{if(h)return;h=!0,setTimeout(()=>{h=!1},300);let k=g.target;if(ce&&k)if(k.nodeName&&k.nodeName.toLowerCase&&k.nodeName.toLowerCase()=="a")P.updateCacheKeywords(),V.setItem("clickLink",k.href);else{let A=k.parentNode;A&&A.nodeName&&A.nodeName.toLowerCase&&A.nodeName.toLowerCase()=="a"&&(P.updateCacheKeywords(),V.setItem("clickLink",k.href))}};X(document).addEventListener("auxclick",d,!0),X(document).addEventListener("click",d,!0);let m=function(g){var k=history[g];return function(){var A=k.apply(this,arguments);let $=location.href.slice(0,500);if(ue!=$){ue=$;var z=new Event("sj_"+g);z.arguments=arguments,window.dispatchEvent(z)}return A}};window.addEventListener("sj_pushState",p),window.addEventListener("sj_replaceState",p),window.addEventListener("yt-navigate-finish",p),window.addEventListener("securitypolicyviolation",g=>{g.violatedDirective==="form-action"&&vr()});let u=window.location.href,f=g=>P.removeMark(g),w=(g,k)=>P.highlight(g,k),b=()=>P.appendBar(),j={childList:!0,characterData:!0,subtree:!0},v=0;new MutationObserver((g,k)=>{if(g.some(z=>z.type==="childList"||z.type==="attributes")){const z=window.location.href;z!==u&&(u=z,p(),P.checkDiscussions())}if(P.lockWords){if(P.initHighlight&&v>100)return;for(let z of g){if(z.type==="characterData"){let W=z.target.parentNode;if(!W)return;let T=z.target.previousElementSibling;if(T&&!T.dataset.inited&&T.className==="searchJumper"){T.dataset.inited=!0;return}if(T=z.target.nextElementSibling,T&&!T.dataset.inited&&T.className==="searchJumper"){T.dataset.inited=!0;return}P.checkCharacterData(W),P.initHighlight&&v++}if(z.removedNodes.length&&[].forEach.call(z.removedNodes,W=>{W.nodeType===1&&(W.classList&&W.classList.contains("searchJumper")?f(W):W.children.length&&[].forEach.call(W.querySelectorAll("mark.searchJumper,a.searchJumper,input.searchJumper,textarea.searchJumper"),T=>{f(T)}))}),z.addedNodes.length)for(let W=0;W<z.addedNodes.length;W++){let T=z.addedNodes[W],E;if(T.nodeType===1){if(/^searchJumper$/.test(T.className))continue;E=T}else{if(T.previousElementSibling&&/^searchJumper$/.test(T.previousElementSibling.className))continue;if(T.nextElementSibling&&/^searchJumper$/.test(T.nextElementSibling.className))continue;E=T.parentNode}E&&(setTimeout(()=>{w("insert",E)},0),P.initHighlight&&v++)}}b()}}).observe(X(document),j)}function wr(l,e){if(!l)return"";let t,i;if(e)t=e.replace(/(^https?:\/\/.+)\/[^\/]*$/,"$1"),i=e;else{if(l.charAt(0)=="#")return location.href+l;if(l.charAt(0)=="?")return location.href.replace(/^([^\?#]+).*/,"$1"+l);t=location.protocol+"//"+location.host;let o=document.querySelector("base");i=o?o.href:location.href}let r=i||t;r=r.replace(/(\?|#).*/,""),/https?:\/\/[^\/]+$/.test(r)&&(r=r+"/"),r.indexOf("http")!==0&&(r=t+r);var n=/^[^\?#]*\//.exec(r)[0],a=/^\w+\:\/\/\/?[^\/]+/.exec(n)[0],s=/^\w+\:\/\//;for(l=l.replace(/^\/(\.\.\/)+/,"/");l.indexOf("../")===0;)l=l.substr(3),n=n.replace(/\/[^\/]+\/$/,"/");return l=l.replace(/\.\//,""),/^\/\/\/?/.test(l)&&(l=location.protocol+l),s.test(l)?l:(l.charAt(0)=="/"?a:n)+l}function Wi(l){if(ke)return;let e,t=location.href;if(l&&l.name)for(e=l.parentNode;e;){if(e.nodeName.toUpperCase()==="FORM"){let n=e.target;if(n&&typeof n=="string"&&n!="_blank"&&n!="_self"&&n!="_parent"&&n!="_top"&&!X(document).querySelector(n)){e=null;break}break}e=e.parentNode}let i=()=>!window.confirm(J("noValidItemAsk"));if(e){t=wr(e.getAttribute("action")||t);let n=[],a=new FormData(e);for(let[s,o]of a)l.name===s?o="%s":o=encodeURIComponent(o),n.push(s+"="+o);if(e.method.toLowerCase()=="post")t+="%p{"+n.join("&")+"}",e.action.indexOf(location.origin)==0&&location.pathname&&location.pathname!=="/"&&(t+=`#from{${location.pathname.slice(1)}}`);else{let s=t.match(/\?(.*)/);s&&(t=t.replace(s[0],""),s[1].split("&").forEach(o=>{let p=o.split("="),h=p[0];if(n.findIndex(m=>m.indexOf(h+"=")===0)!==-1)return;let d=p[1];d==l.value&&(d="%s"),n.push(h+"="+d)})),t+="?"+n.join("&")}}else if(l&&l.value)if(location.href.indexOf(l.value)!==-1)t=location.href.replace(l.value,"%s");else{let n=encodeURIComponent(l.value);if(location.pathname.indexOf(n)!==-1||location.search.indexOf(n)!==-1)t=location.origin+location.pathname.replace(n,"%s")+location.search.replace(n,"%s");else if(n=escape&&escape(l.value),n&&location.pathname.indexOf(n)!==-1||location.search.indexOf(n)!==-1)t=location.origin+location.pathname.replace(n,"%se")+location.search.replace(n,"%se");else if(i())return}else if(i())return;let r=[];[].forEach.call(document.querySelectorAll("link[rel='shortcut icon'],link[rel='icon'],link[rel='fluid-icon'],link[rel='apple-touch-icon']"),n=>{r.indexOf&&r.indexOf(n.href)!==-1||r.push(n.href)}),yi(document.title.replace(l?l.value:"","").replace(/^\s*[-_]\s*/,""),"",t,r,document.characterSet)}const br="https://hoothin.github.io/SearchJumper/jump.html";function vr(){if(!St||!St.url)return;let l=`${br}#jump{url=${encodeURIComponent(St.url)}&charset=${St.charset}}`;St.target=="_self"?location.href=l:ye(l,{active:!0,insert:!0})}function ls(){if(ue.indexOf(br)!=-1){let l=ue.match(/#jump{url=(.*)&charset=(.*)}/);l&&Ut(l[2],decodeURIComponent(l[1]),"_self")}}var ke;async function cs(){if(Qt(ue,c.prefConfig.configPage,!1)||ue.indexOf(ct)===0||(document.title==="SearchJumper"||document.querySelector('[name="from"][content="SearchJumper"]'))&&document.querySelector('[name="author"][content="Hoothin"]')){ke=document.querySelector('[name="engines"]');let l=document.getElementById("spotlight");if(ke)try{if(ke=ke.getAttribute("content"),ke.indexOf("http")===0){if(l){const i=J("loadingCollection");l.innerText=i,l.setAttribute("spotlight",i)}let t=await new Promise(i=>{De({method:"GET",url:ke,onload:function(r){var n=null;try{n=JSON.parse(r.responseText),i(n)}catch(a){console.log(a),i(!1)}},onerror:function(r){console.log(r),i(!1)},ontimeout:function(r){console.log(r),i(!1)}})});t?(c.sitesConfig=t,ke=!0):ke=!1}else c.sitesConfig=JSON.parse(decodeURI(ke)),ke=!0}catch{ke=!1}let e=ue.indexOf(ct.replace(/\/config.*/,""))===0||ue.indexOf(mt)===0||ue.indexOf(Lr)===0||location.hostname==="localhost";return e&&(Re=!!ke||/all(\.html)?$/.test(location.pathname)),l?l.style.display="none":setTimeout(()=>{l=document.getElementById("spotlight"),l&&(l.style.display="none")},500),e||Qt(ue,c.prefConfig.configPage,!1)}return!1}async function ps(){if(qe=await cs(),qe&&!Re&&Qt(location.href,c.prefConfig.configPage,!1)){let l,e=!1,t=()=>{l=setTimeout(()=>{e||t()},50),window.postMessage({cacheIcon:ge,version:Pt.script.version||0,splitEnabled:ft,command:"configReady"},"*")},i=setTimeout(()=>{e||location.reload()},3e3);document.addEventListener("received",a=>{e=!0,clearTimeout(l),clearTimeout(i),_e.length>0&&c.prefConfig.cacheSwitch&&(fe(`Start cache ${_e.length} icons!`),mr())}),document.addEventListener("downloadCache",a=>{ds()}),document.addEventListener("importCache",a=>{let s=a.detail?a.detail.cacheData:a.cacheData;fs(s),Ce("Cache imported successfully!")}),document.addEventListener("showSiteAdd",a=>{let s=a.detail?a.detail.site:a.site;s&&(s.url?yi(s.name,s.description,s.url,s.icon?[s.icon]:[],s.charset,s.kwFilter,s.match,s.hideNotMatch):xr.open(s))}),document.addEventListener("configRequest",async a=>{const s=a.detail;if(!(!s||typeof s.id!="string"||!["get","save","import","configure","disconnect","sync","shareGet","shareSet","createAccount"].includes(s.operation)))try{const o=await V.getItem("searchData");if(!Qt(location.href,o?.prefConfig?.configPage,!1))throw new Error("Configuration access denied");const p=await ei(s.operation,s.detail);window.postMessage({command:"configResponse",id:s.id,ok:!0,value:p},location.origin)}catch(o){window.postMessage({command:"configResponse",id:s.id,ok:!1,error:o.message},location.origin)}}),t(),document.addEventListener("getAppearancePreview",async()=>{try{await P.ready;const a=P.bar.querySelector(".search-jumper-targetAll:has(a.search-jumper-btn)")||P.bar.querySelector(".search-jumper-type:has(a.search-jumper-btn)"),s=o=>{const p=P.con.cloneNode(!1);p.className="search-jumper-searchBarCon "+(o?"search-jumper-left resizePage":"funcKeyCall"),p.removeAttribute("style");const h=P.bar.cloneNode(!1);return h.className="search-jumper-searchBar"+(o?" initShow":""),h.removeAttribute("style"),(o?[...P.bar.querySelectorAll(":scope > .search-jumper-logo, :scope > .search-jumper-type")].slice(0,5):[a].filter(Boolean)).forEach(m=>{const u=m.cloneNode(!0);u.removeAttribute("style"),u.classList.remove("notmatch","input-hide","not-expand","search-jumper-open"),o?u.style.display="inline-flex":u.classList.add("search-jumper-open"),u.querySelectorAll(".sitelist, .searchJumperExpand").forEach(f=>f.remove()),[...u.querySelectorAll(":scope > a.search-jumper-btn")].slice(8).forEach(f=>f.remove()),u.querySelectorAll("a").forEach(f=>{f.removeAttribute("href"),f.removeAttribute("target"),f.classList.remove("notmatch","input-hide"),f.style.removeProperty("display")}),u.querySelectorAll("img[data-src]").forEach(f=>{f.src=f.dataset.src}),h.appendChild(u)}),p.appendChild(h),p.outerHTML};window.postMessage({command:"appearancePreview",cssText:P.appearanceCssText,html:s(!1),sidebarHtml:s(!0)},"*")}catch(a){window.postMessage({command:"appearancePreview",error:a.message},"*")}}),document.addEventListener("dataChanged",a=>{t()});let r=(a,s,o,p)=>{window.postMessage({url:a,name:s,status:o,finalUrl:p,command:"verifyResult"},"*")};document.addEventListener("verifyUrl",a=>{let s=a.detail?a.detail.url:a.url,o=a.detail?a.detail.name:a.name;De({method:"GET",url:s,headers:{referer:s,"User-Agent":navigator.userAgent},onload:function(p){r(s,o,p&&p.status,p&&p.finalUrl)},onerror:function(p){r(s,o,"error","")},ontimeout:function(p){r(s,o,"timeout","")}})});let n=c.prefConfig.cacheSwitch;document.addEventListener("configSaved",async a=>{if(c=await V.getItem("searchData"),!c)return;let s={},o=ge?Object.keys(ge).length:0;n==c.prefConfig.cacheSwitch?(c.sitesConfig.forEach(p=>{if(/^[a-z\- ]+$/.test(p.icon||"")||/^http/.test(p.icon)){let h=p.icon.trim().replace(/ /g,"_"),d=ge[h];d&&(s[h]=d)}p.sites.forEach(h=>{let d=h.icon;if(d||(d=h.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(d)){let m=ge[d];m&&(s[d]=m)}})}),o!==Object.keys(s).length&&(ge=s,V.setItem("cacheIcon",s))):(c.sitesConfig.forEach(p=>{if(/^http/.test(p.icon)){let h=ge[p.icon];if(h)if(h==="fail"){let d=document.createElement("img");d.src=p.icon,_e.push(d)}else s[p.icon]=h}p.sites.forEach(h=>{let d=h.icon;if(d||(d=h.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(d)){let m=ge[d];if(m)if(m==="fail"){let u=document.createElement("img");u.src=d,_e.push(u)}else s[d]=m}})}),ge=s,V.setItem("cacheIcon",s),c.prefConfig.cacheSwitch&&(_e.length>0&&(Ce(J("startCache")),mr(!0)),gr())),n=c.prefConfig.cacheSwitch,(a.notification||a.detail&&a.detail.notification)&&Ce("Configuration imported successfully!")}),document.addEventListener("copyConfig",a=>{let s=c.sitesConfig.filter(o=>o&&!(/^BM/.test(o.type)&&o.icon==="bookmark"));Ge(JSON.stringify(s,null,2)),Ce("Configuration copied successfully!")})}else if(Zi.test(ue)){let l=Be(`
                    #import-btns-con {
                        position: absolute;
                        display: block;
                        font-size: 20px;
                        left: 0px;
                        top: 0px;
                        width: 100%;
                        height: 100%;
                    }
                    #import-btns-con.hide {
                        pointer-events: none;
                    }
                    #import-btns-con>button {
                        opacity: 0.5;
                    }
                    #import-btns-con>button:hover {
                        opacity: 0.9;
                    }
                    #import-btn {
                        position: absolute;
                        display: block;
                        font-size: 20px;
                        right: 45px;
                        top: 45px;
                        pointer-events: all;
                    }
                    #filter-btn {
                        position: absolute;
                        display: none;
                        font-size: 20px;
                        left: 45px;
                        top: 45px;
                        pointer-events: all;
                    }
                    .filter>#filter-btn {
                        display: block;
                    }
                    #import-btns-con>h3 {
                        float: left;
                        margin-left: 20px;
                    }
                    #import-btns-con.hide>h3 {
                        display: none;
                    }
                `),e,t=0,i=document.createElement("button");i.id="import-btn",i.className="btn Button--secondary Button";let r=document.createElement("button");r.id="filter-btn",r.className="btn Button--secondary Button";let n=document.createElement("h3"),a=document.createElement("div");a.id="import-btns-con",a.appendChild(l),a.appendChild(i),a.appendChild(r),a.appendChild(n),a.addEventListener("click",o=>{e&&(e.style.filter=""),a.classList.add("hide")}),i.innerText=J("import"),i.addEventListener("click",o=>{if(ke||!e)return;let p=e.innerText.trim(),h;if(p){try{h=JSON.parse(p)}catch(d){Ce(d.toString());return}switch(t){case 0:window.confirm(J("importOrNot"))&&(a.parentNode&&a.parentNode.removeChild(a),ti(()=>(c.sitesConfig=h,c.lastModified=new Date().getTime(),()=>{Ce(J("siteAddOver")),P.refreshEngines()}),!0));break;case 1:yi(h.name,"",h.url,h.icon?[h.icon]:[],h.charset,h.kwFilter,h.match,h.hideNotMatch);break;case 2:c.prefConfig.inPageRule||(c.prefConfig.inPageRule={}),Object.keys(h).forEach(d=>{let m=h[d];if(!m)return;if(d.indexOf("@")===0){c.prefConfig.inPageRule[d]=m;return}if(!m.words||m.words.length===0)return;let u="",f=m.sep||"";f?u="$c"+f:(f=" ",m.words.length===1&&m.words[0].indexOf(" ")!==-1&&(f="",u="$o")),c.prefConfig.inPageRule[d]=u+m.words.join(f)}),V.setItem("searchData",c),Ce("Over!");break}}}),r.innerText=J("filter"),r.addEventListener("click",o=>{if(e){a.parentNode&&a.parentNode.removeChild(a);let p=e.innerText.trim(),h;if(!p||p.indexOf("[")!==0)return;try{h=JSON.parse(p),xr.open(h)}catch(d){Ce(d.toString())}}});let s=o=>{if(o==e&&a.parentNode)return;let p=o.offsetTop+"px",h=o.innerText.trim();if(h){if(n.innerText="",/^\[/.test(h))t=0,a.style.top=p,a.classList.add("filter");else if(/^\{\s*"name"/.test(h))t=1,a.style.top=p,a.classList.remove("filter"),n.innerText=h.match(/"name":\s*"(.*)"/)[1];else if(/^\{/.test(h))t=2,a.style.top=p,a.classList.remove("filter");else return;e&&(e.style.filter=""),o.parentNode.appendChild(a),o.style.filter="blur(5px)",e=o,a.classList.remove("hide")}};window.addEventListener("load",o=>{if(!e){let p=document.querySelector(".highlight>pre");p&&s(p)}}),document.addEventListener("mouseover",o=>{if(Zi.test(ue))if(o.target.nodeName==="PRE")s(o.target);else{let p=o.target.children[0];p&&p.nodeName==="PRE"&&s(p)}})}}class hs{constructor(){this.inited=!1}init(){if(this.inited)return;this.inited=!0;let e=this;this.openList=[],this.filterCss=`
                    #searchJumperFilter {
                        width: 100%;
                        height: 100%;
                        position: fixed;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 100000;
                        background-color: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(5px);
                        transform: translateZ(0);
                    }
                    .searchJumperFrame-body {
                        width: 350px;
                        text-align: left;
                        background-color: #ffffff;
                        border: 1px solid #282a2d1a;
                        border-radius: 10px;
                        opacity: 1;
                        color-scheme: light dark;
                        box-shadow: 0 12px 40px #20263133;
                        color: #282a2d;
                        font-family: Arial, "Microsoft YaHei", "Noto Sans SC", sans-serif;
                        transition: all 0.25s ease;
                        border: 0;
                        font-size: initial;
                    }
                    .searchJumperFrame-title {
                        background: #357dc5!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 16px!important;
                        border-radius: 10px 10px 0 0!important;
                    }
                    .searchJumperFrame-title>img {
                        margin: 5px;
                        height: 32px;
                        width: 32px;
                    }
                    .searchJumperFrame-buttons {
                        text-align: center;
                        margin: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperFrame-buttons>button {
                        width: 32%;
                        font-size: 14px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 8px;
                        transition: background-color .15s, box-shadow .15s;
                        color: #fff;
                        background-color: #357dc5;
                        line-height: 25px;
                        min-height: 32px;
                        padding: 3px;
                    }
                    .searchJumperFrame-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    .searchJumperFrame-body>.sitesCon {
                        max-height: 70vh;
                        overflow: auto;
                        width: 100%;
                        border-top: 1px solid rgba(0, 0, 0, 0.23);
                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
                        padding: 5px;
                        user-select: none;
                        white-space: nowrap;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary>span,
                    .searchJumperFrame-body>.sitesCon>details>div>span {
                        line-height: 25px;
                        min-height: 32px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 180px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary>button {
                        display: none;
                        position: absolute;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary:hover>button {
                        display: inline-block;
                    }
                    .searchJumperFrame-body>.sitesCon input {
                        margin: 2px 5px;
                        width: 20px;
                        height: 20px;
                        vertical-align: sub;
                    }
                    .searchJumperFrame-body>.sitesCon div {
                        margin-left: 32px;
                    }
                    .searchJumperFrame-body>.sitesCon div.exist {
                        text-decoration:line-through;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-input-title,
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        background-color: #1c2127;
                        color: #d3d8df;
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #2a5c8d!important;
                      }
                    }
                `,this.filterCssEle=Be(this.filterCss),this.filterFrame=document.createElement("div"),this.filterFrame.id="searchJumperFilter",ie(this.filterFrame,`
                <div class="searchJumperFrame-body">
                    <a href="${mt}" class="searchJumperFrame-title" target="_blank">
                        <img onerror="this.style.display='none'" width="32px" height="32px" src="${kt}" />${J("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-buttons">
                        <button id="expandAll" type="button">${J("expandAll")}</button>
                        <button id="collapseAll" type="button">${J("collapseAll")}</button>
                    </div>
                    <div class="sitesCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="cancel" type="button">${J("siteCancel")}</button>
                        <button id="selectAll" type="button">${J("selectAll")}</button>
                        <button id="add" type="button">${J("import")}</button>
                    </div>
                </div>
                `),this.sitesCon=this.filterFrame.querySelector(".sitesCon");let t=this.filterFrame.querySelector("#add"),i=this.filterFrame.querySelector("#selectAll"),r=this.filterFrame.querySelector("#expandAll"),n=this.filterFrame.querySelector("#collapseAll"),a=!1;r.addEventListener("click",s=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.setAttribute("open","open")})}),n.addEventListener("click",s=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.removeAttribute("open")})}),i.addEventListener("click",s=>{a=!a,[].forEach.call(this.filterFrame.querySelectorAll("input[type=checkbox]"),o=>{o.checked=a})}),t.addEventListener("click",s=>{ke||ti(()=>{let o=!1;if([].forEach.call(this.filterFrame.querySelectorAll("details"),p=>{let h=p.children[0].children[0],d=e.typeDict[h.title];if(d.type=h.innerText.trim(),d.sites=[],[].forEach.call(p.querySelectorAll('div>[type="checkbox"]'),m=>{if(m.checked){o=!0;let u=e.siteDict[m.parentNode.title],f=m.nextElementSibling;if(!u||!f)return;if(f.value==="0")d.sites.push(u);else{let w=e.searchType(f.value);c.sitesConfig[w].sites.push(u)}}}),d.sites.length){let m=e.searchType(d.type);m===!1?c.sitesConfig.push(d):c.sitesConfig[m].sites=c.sitesConfig[m].sites.concat(d.sites)}}),o)return c.lastModified=new Date().getTime(),()=>{Ce(J("siteAddOver")),P.refreshEngines(),this.close()}})}),this.filterFrame.addEventListener("click",s=>{(s.target.id=="searchJumperFilter"||s.target.id=="cancel")&&this.close()})}searchType(e){for(let t=0;t<c.sitesConfig.length;t++)if(c.sitesConfig[t].type==e)return t;return!1}searchUrl(e){for(let t=0;t<c.sitesConfig.length;t++){let i=c.sitesConfig[t].sites;for(let r=0;r<i.length;r++)if(i[r].url.replace(/^https?/,"")==e.replace(/^https?/,""))return!0}return!1}searchName(e){for(let t=0;t<c.sitesConfig.length;t++){let i=c.sitesConfig[t].sites;for(let r=0;r<i.length;r++)if(i[r].name==e){let n=e+"_1";return this.searchName(n)}}return e}anylizeType(e){let t=this,i=document.createElement("details"),r=document.createElement("summary"),n=document.createElement("span");n.title=e.type,n.innerText=e.type,r.appendChild(n);let a=document.createElement("input");a.type="checkbox",r.appendChild(a);let s=document.createElement("button");s.innerText=J("rename"),s.addEventListener("click",p=>{let h=window.prompt(J("rename"),n.innerText);h&&(n.innerText=h)}),r.appendChild(s),i.appendChild(r);for(let p=0;p<this.openList.length;p++)if(this.openList[p]==e.type){i.setAttribute("open","open");break}let o=[];this.typeDict[e.type]=e,e.sites&&e.sites.forEach(p=>{let h=document.createElement("div"),d=document.createElement("span");if(d.innerText=p.name,p.name=t.searchName(p.name),h.appendChild(d),h.title=p.url,i.appendChild(h),t.searchUrl(p.url)){h.classList.add("exist");return}let m=document.createElement("input");m.type="checkbox",m.onclick=w=>{if(!m.checked)a.checked=!1;else{let b=!0;for(let j=0;j<o.length;j++)if(!o[j].checked){b=!1;break}b&&(a.checked=!0)}},h.appendChild(m),h.addEventListener("click",w=>{w.target.nodeName.toUpperCase()=="SPAN"&&m.click()});let u=document.createElement("select"),f=document.createElement("option");f.value=0,f.innerText=J("currentType"),u.appendChild(f);for(let w=0;w<c.sitesConfig.length;w++){let b=c.sitesConfig[w];if(b.type!=e.type){let j=document.createElement("option");j.value=b.type,j.innerText=b.type,u.appendChild(j)}}h.appendChild(u),t.siteDict[p.url]=p,o.push(m)}),o.length==0&&(a.style.display="none",s.style.display="none"),a.addEventListener("click",p=>{o.forEach(h=>{h.checked=a.checked})}),this.sitesCon.appendChild(i)}close(){this.openList=[],[].forEach.call(this.sitesCon.querySelectorAll("details"),e=>{e.hasAttribute("open")&&this.openList.push(e.querySelector("summary").innerText)}),this.filterFrame.parentNode&&this.filterFrame.parentNode.removeChild(this.filterFrame)}open(e){this.init();let t=this;this.siteDict={},this.typeDict={},(!this.filterCssEle||!this.filterCssEle.parentNode)&&(this.filterCssEle=Be(this.filterCss)),document.documentElement.appendChild(this.filterFrame),ie(this.sitesCon,""),e.forEach(i=>{t.anylizeType(i)})}}const xr=new hs;var je,ze,Di,Ji,Ri,zi,ci,pi,hi,ui;function us(l,e){if(!P||!P.bar)return;let t=P.bar.querySelector(".search-jumper-type.search-jumper-open"),i=()=>{if(document.removeEventListener("dragend",Ri,!0),document.removeEventListener("dragenter",zi,!0),ze.parentNode&&(ze.parentNode.removeChild(ze),je.style.opacity="",je.style.transform=""),It=!1,clearTimeout(ci),ce&&!ce.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||P.con.classList.contains("resizePage")){if(t&&!t.classList.contains("search-jumper-open"))if(t.children[0].onmouseup)t.children[0].onmouseup();else{let m=new PointerEvent("mouseup");t.children[0].dispatchEvent(m)}}else P.bar.style.display="none"};if(!pi&&!hi&&(ui=(c.prefConfig.zoomDrag||100)/100,pi=ui*190,hi=ui*190),!je){let m=`
                    #dragCon {
                      position: fixed;
                      top: 0;
                      left: 0;
                      transform: scale(${ui});
                      z-index: 2147483647;
                      -moz-transition:left 0.3s ease, top 0.3s;
                      -webkit-transition:left 0.3s ease, top 0.3s;
                      transition:left 0.3s ease, top 0.3s;
                    }
                    #searchJumperWrapper * {
                      margin: 0;
                      padding: 0;
                      border: none;
                      outline: none;
                      user-select: none;
                      box-sizing: content-box;
                      font-size: 12px;
                      line-height: normal;
                      overflow: visible;
                      background-image: initial;
                      float: initial;
                    }
                    #searchJumperWrapper {
                      position: fixed;
                      height: 300px;
                      width: 300px;
                      padding: 20px;
                      margin: 20px;
                      background-color: #000000${c.prefConfig.hideDragHistory?"10":"9e"};
                      box-shadow: #000000 0px 0px 10px;
                      border-radius: 50%;
                      z-index: 2147483647;
                      box-sizing: content-box;
                      opacity: 0;
                      transform: scale(.5);
                      -moz-transition:opacity 0.3s ease, transform 0.15s;
                      -webkit-transition:opacity 0.3s ease, transform 0.15s;
                      transition:opacity 0.3s ease, transform 0.15s;
                    }
                    #searchJumperWrapper>.panel {
                      position: relative;
                    }
                    #searchJumperWrapper .sector:nth-child(2n+1) .sector-inner {
                      background: #454545;
                      color: white;
                    }
                    #searchJumperWrapper .sector:nth-child(2n) .sector-inner {
                      background: #ffffff;
                      color: black;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n+1) .sector-inner {
                      background: #353535;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n) .sector-inner {
                      background: #eeeeee;
                    }
                    #searchJumperWrapper .sector {
                      position: absolute;
                      left: 150px;
                      top: 50px;
                      width: 100px;
                      height: 200px;
                      font-size: 14px;
                      border-radius: 0px 100px 100px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 1;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                      pointer-events: none;
                    }
                    #searchJumperWrapper .sector.out {
                      left: 150px;
                      top: 0px;
                      width: 150px;
                      height: 300px;
                      font-size: 14px;
                      border-radius: 0px 150px 150px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 0;
                      ${c.prefConfig.hideDragHistory?"display: none;":""}
                    }
                    #searchJumperWrapper .sector-inner {
                      text-align: center;
                      display: block;
                      width: 40px;
                      padding: 5px 3px 0 57px;
                      height: 195px;
                      transform: translateX(-100px) rotate(60deg);
                      transform-origin: right center;
                      border-radius: 100px 0 0 100px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner {
                      text-align: center;
                      display: block;
                      width: 90px;
                      height: 295px;
                      transform: translateX(-150px) rotate(36deg);
                      transform-origin: right center;
                      border-radius: 150px 0 0 150px;
                    }
                    #searchJumperWrapper .sector-inner span {
                      transform-origin: center;
                      padding: 20px 0;
                      pointer-events: all;
                      opacity: 0.8;
                      word-break: break-word;
                      height: 55px;
                      font-size: 12px;
                      font-weight: bold;
                      font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: space-evenly;
                    }
                    #searchJumperWrapper .sector-inner span {
                      width: 70px;
                      margin-left: -15px;
                    }
                    #searchJumperWrapper .sector-inner span>p {
                      max-width: 58px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner span {
                      width: unset;
                      margin-left: unset;
                    }
                    #searchJumperWrapper .over>.sector-inner span {
                      opacity: 1;
                    }
                    #searchJumperWrapper .sector-inner span>img {
                      width: 25px;
                      height: 25px;
                    }
                    #searchJumperWrapper .sector-inner span:hover {
                      opacity: 1;
                    }
                    #searchJumperWrapper .dragLogo {
                      position: absolute;
                      left: 150px;
                      top: 150px;
                      border-radius: 50%;
                      box-shadow: #000000 0px 0px 10px;
                      z-index: 10;
                      font-size: 0;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                    }
                    .dragLogo>svg {
                      width: 40px;
                      height: 40px;
                      pointer-events: none;
                    }
                `,u=Be(m);Di=[],Ji=[],je=document.createElement("div"),je.id="searchJumperWrapper",ie(je,`
                <div class="panel"></div>
                <div class="dragLogo">${Mi}</div>
                `),Xe||je.appendChild(u);const f=6,w=10;let b=je.querySelector(".panel"),j=360/f,v=360/w,C=-j/2,g=-v/2,k,A=je.querySelector(".dragLogo"),$;A.addEventListener("dragover",M=>{M.preventDefault()},!0),A.addEventListener("dragenter",M=>{clearTimeout($),k&&(k.style.transform=`rotate(${k.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,k.classList.remove("over")),k=null,A.style.transform="scale(1.35)",M.preventDefault(),clearTimeout(ci),ci=setTimeout(()=>{i(),P.appendBar(),P.showAllSites()},1e3)},!0);let z=(M,H,Y)=>{let se=document.createElement("div");se.className=M;let re=document.createElement("div");re.className="sector-inner";let L=document.createElement("span");re.appendChild(L),se.appendChild(re);let F=`rotate(${H}deg)`;return L.style.transform=Y,se.style.transform=F+(c.prefConfig.hideDragHistory?"scale(1.2)":""),se.dataset.deg=H,b.appendChild(se),L.addEventListener("dragover",U=>{U.clientX<50?ze.style.left="0px":U.clientX>document.documentElement.clientWidth-50&&(ze.style.left=document.documentElement.clientWidth-(pi<<1)+"px"),U.clientY<50?ze.style.top="0px":U.clientY>document.documentElement.clientHeight-50&&(ze.style.top=document.documentElement.clientHeight-(hi<<1)+"px"),U.preventDefault()},!0),L.addEventListener("dragenter",U=>{clearTimeout($),L.innerText&&(k&&(k.style.transform=`rotate(${k.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,k.classList.remove("over")),A.style.transform="",se.style.transform=`scale(${c.prefConfig.hideDragHistory?"1.6":"1.25"}) ${F}`,se.classList.add("over"),k=se,clearTimeout(ci))},!0),L};for(let M=0;M<f;M++){let H=z("sector",C+j*M,`translateX(-10px) translateY(-10px) rotate(${C-j*M}deg)`);Di.push(H)}for(let M=0;M<w;M++){let H=z("sector out",g+v*M,`translateX(12px) translateY(-15px) rotate(${g-v*M}deg)`);Ji.push(H)}Ri=M=>{i()},je.addEventListener("click",M=>{i()}),je.addEventListener("drop",M=>{M.target===A?(P.setFuncKeyCall(!1),P.showInPage()):k&&(i(),P.searchBySiteName(k.children[0].dataset.name,M),k.style.transform=`rotate(${k.dataset.deg}deg)`,k.classList.remove("over"),k=null),M.preventDefault()});let W,T,E,I;zi=M=>{clearTimeout($),je.contains(M.target)||($=setTimeout(()=>{i()},300))},ze=document.createElement("div"),ze.id="dragCon",ze.appendChild(je)}P.recoveHistory();let r=P.autoGetFirstType(),n=r.querySelectorAll("a.search-jumper-btn:not(.notmatch)"),a=0,s=()=>{let m=null;for(let u=a;u<n.length;u++){let f=n[u];if(f.style.display!=="none"){m=f,a=u+1;break}}return m};const o=(m,u)=>{m.parentNode.dataset.name=u.dataset.name;let f=document.createElement("p");if(f.innerText=u.dataset.name.substr(0,10).trim(),!/^\w+$/.test(f.innerText)){let j="",v=0;for(let C of f.innerText)if(j+=C,/^\w+$/.test(C)?v++:v+=2,v>10){j+="...";break}f.innerText=j}let w=document.createElement("img");w.style.display="none",m.appendChild(w),m.appendChild(f),w.onload=j=>{w.style.display=""};let b=u.querySelector("img");if(b){let j=b.src||b.dataset.src;j&&et(w,j)}};Di.forEach((m,u)=>{ie(m,"");let f=s();if(!f){m.parentNode.parentNode.style.filter="contrast(0.5)";return}m.parentNode.parentNode.style.filter="",o(m,f)});let p=0,h;r.classList.contains("search-jumper-needInPage")?h=P.txtHistorySiteBtns:r.classList.contains("search-jumper-targetImg")?h=P.imgHistorySiteBtns:r.classList.contains("search-jumper-targetAudio")?h=P.audioHistorySiteBtns:r.classList.contains("search-jumper-targetVideo")?h=P.videoHistorySiteBtns:(r.classList.contains("search-jumper-targetLink")||r.classList.contains("search-jumper-targetPage"))&&(h=P.linkHistorySiteBtns),h?(h=h.concat(P.historySiteBtns),h=h.filter((m,u,f)=>f.indexOf(m)===u)):h=P.historySiteBtns;let d=()=>{if(c.prefConfig.reuseDragHistory)return s();if(c.prefConfig.hideDragHistory)return!1;let m=null;for(let u=p;u<h.length;u++){let f=h[u];if(f.style.display!=="none"){m=f,p=u+1;break}}return m};Ji.forEach((m,u)=>{let f=new DragEvent("dragleave");m.dispatchEvent(f),ie(m,""),m.parentNode.parentNode.style.opacity=.6;let w=d();if(!w)return;let b=w.querySelector("img");b&&b.dataset.src&&et(b),m.parentNode.parentNode.style.opacity=1,o(m,w)}),ze.style.left=l-pi+"px",ze.style.top=e-hi+"px",je.style.opacity="",je.style.transform="",setTimeout(()=>{document.addEventListener("dragend",Ri,!0),P.addToShadow(ze),setTimeout(()=>{je.style.opacity=1,je.style.transform="scale(1)"},10),setTimeout(()=>{getComputedStyle(je).zIndex!="2147483647"?i():document.addEventListener("dragenter",zi,!0)},100)},0)}var te,di,Gt,He,jt,Fe,Vt,_t,Cr,Sr,Oi,fi,mi,gi,kr;function yi(l,e,t,i,r,n,a,s){if(self.kwFilter=n,self.charset=r,self.hideNotMatch=s,self.match=a,!te){let p=Be(`
                    .searchJumperFrame-body,
                    .searchJumperFrame-crawlBody {
                        width: 300px;
                        min-height: 300px;
                        position: fixed;
                        text-align: left;
                        left: 50%;
                        top: 45%;
                        margin-top: -250px;
                        margin-left: -150px;
                        z-index: 100000;
                        background-color: #ffffff;
                        border: 1px solid #282a2d1a;
                        border-radius: 10px;
                        opacity: 1;
                        color-scheme: light dark;
                        box-shadow: 0 12px 40px #20263133;
                        color: #282a2d;
                        font-family: Arial, "Microsoft YaHei", "Noto Sans SC", sans-serif;
                        transition: all 0.25s ease;
                        border: 0;
                        font-size: initial;
                    }
                    .searchJumperFrame-title {
                        background: #357dc5!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 16px!important;
                        border-radius: 10px 10px 0 0!important;
                    }
                    .draging .searchJumperFrame-body,
                    .draging .searchJumperFrame-crawlBody {
                        transition: none;
                        pointer-events: none;
                    }
                    .searchJumperFrame-title>img {
                        margin: 5px;
                        height: 32px;
                        width: 32px;
                    }
                    .searchJumperFrame-input-title {
                        font-size: 9pt;
                        font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                        display: inline-block;
                        background-color: white;
                        position: relative;
                        left: 20px;
                        padding: 0px 4px;
                        text-align: left;
                        color: #646464;
                    }
                    .searchJumperFrame-inputs>input,
                    .searchJumperFrame-inputs>textarea,
                    .searchJumperFrame-inputs>select,
                    .searchJumperFrame-body select {
                        resize: both;
                        font-size: 11pt;
                        font-weight: normal;
                        border-radius: 8px;
                        border: 1px solid #282a2d26;
                        margin: 4px;
                        font-family: inherit;
                        background-color: #FFF;
                        width: calc(100% - 8px);
                        min-width: calc(100% - 8px);
                        max-width: calc(100% - 8px);
                        color: #4A4A4A;
                        margin-top: -8px;
                        padding: 4px;
                        padding-top: 8px;
                        box-sizing: border-box;
                        height: 36px;
                        word-break: break-all;
                    }
                    .searchJumperFrame-inputs>input:focus,
                    .searchJumperFrame-inputs>textarea:focus,
                    .searchJumperFrame-inputs>select:focus,
                    .searchJumperFrame-body select:focus {
                        background-color: #FFF;
                    }
                    .searchJumperFrame-buttons {
                        text-align: center;
                        margin: 8px 4px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperFrame-buttons>button {
                        width: 32%;
                        font-size: 14px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 8px;
                        transition: background-color .15s, box-shadow .15s;
                        color: #fff;
                        background-color: #357dc5;
                        line-height: 25px;
                        min-height: 32px;
                        padding: 3px;
                    }
                    .searchJumperFrame-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    .searchJumperFrame-inputs>.sideIcon {
                        float: right;
                        margin-top: -38px;
                        position: relative;
                        right: 20px;
                        opacity: 0.8;
                        background: rgb(0 0 0 / 50%);
                        border-radius: 5px;
                        pointer-events: none;
                        width: 27px;
                        height: 27px;
                    }
                    .searchJumperFrame-inputs>svg.sideIcon {
                        fill: white;
                        pointer-events: all;
                        cursor: pointer;
                        transition: transform 0.25s ease;
                    }
                    .searchJumperFrame-inputs>svg.sideIcon:hover {
                        transform: scale(1.2);
                        opacity: 1;
                        background: rgb(0 0 0);
                    }
                    .searchJumperFrame-body>.iconsCon {
                        max-height: 150px;
                        overflow: auto;
                        width: 100%;
                        border-top: 1px solid rgba(0, 0, 0, 0.23);
                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
                    }
                    .searchJumperFrame-body>.iconsCon>img {
                        margin: 5px;
                        cursor: pointer;
                        max-width: 120px;
                        border: 2px solid #ffffff;
                        box-sizing: border-box;
                        background: #80808030;
                        transition: background 0.25s ease;
                    }
                    .searchJumperFrame-body>.iconsCon>img:hover {
                        border: 2px solid #4e91d3;
                        background: gray;
                    }
                    .maxContent .searchJumperFrame-inputs {
                        width: 50%;
                        float: left;
                    }
                    .searchJumperFrame-body>.moreItem {
                        display: none;
                    }
                    .maxContent>.searchJumperFrame-body>.moreItem {
                        display: block;
                    }
                    .maxContent>.searchJumperFrame-body {
                        width: 600px;
                        margin-left: -300px;
                    }
                    .searchJumperFrame-maxBtn,
                    .searchJumperFrame-closeBtn {
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        color: white;
                        width: 25px;
                        cursor: pointer;
                        transition:transform 0.25s ease;
                    }
                    .searchJumperFrame-maxBtn:hover,
                    .searchJumperFrame-closeBtn:hover {
                        transform: scale(1.2);
                    }
                    .searchJumperFrame-maxBtn>#maxBtn {
                        display: block;
                    }
                    .searchJumperFrame-maxBtn>#minBtn {
                        display: none;
                    }
                    .maxContent .searchJumperFrame-maxBtn>#maxBtn {
                        display: none;
                    }
                    .maxContent .searchJumperFrame-maxBtn>#minBtn {
                        display: block;
                    }
                    .crawling>.searchJumperFrame-body {
                        display: none;
                    }
                    .searchJumperFrame-crawlBody {
                        display: none;
                    }
                    .crawling>.searchJumperFrame-crawlBody {
                        display: block;
                    }
                    .searchJumperFrame-buttons>button#submitCrawl,
                    .searchJumperFrame-buttons>button#record,
                    .searchJumperFrame-buttons>button#copy,
                    .searchJumperFrame-buttons>button#loop {
                        width: 100%;
                        margin: 0 3px;
                    }
                    .searchJumperFrame-crawlBody>.actionCon {
                        height: 200px;
                        background: gray;
                        border-radius: 10px;
                        margin: 10px;
                        padding: 0 10px 10px 10px;
                        resize: auto;
                        box-sizing: border-box;
                        overflow: auto;
                    }
                    .searchJumperFrame-crawlBody>.actionCon>div {
                        width: 100%;
                        font-size: 14px;
                        background: #000000cc;
                        border-radius: 8px;
                        color: white;
                        margin: 3px 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        white-space: nowrap;
                    }
                    .searchJumperFrame-crawlBody>.actionCon>div>span {
                        background: #275f90;
                        border-radius: 5px;
                        max-width: 40px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: inline-block;
                        margin: 0 3px;
                        white-space: nowrap;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-crawlBody,
                      .searchJumperFrame-input-title,
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        background-color: #1c2127!important;
                        color: #d3d8df!important;
                      }
                      .searchJumperFrame-inputs>input:focus,
                      .searchJumperFrame-inputs>textarea:focus,
                      .searchJumperFrame-inputs>select:focus,
                      .searchJumperFrame-body select:focus {
                        background-color: #283340!important;
                      }
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        border: 1px solid #ffffff33;
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #2a5c8d!important;
                      }
                      .searchJumperFrame-body>.iconsCon>img {
                        border: 2px solid #000000;
                      }
                    }
                    @media screen and (max-height: 600px) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-crawlBody {
                        top: 10px;
                        margin-top: 0px;
                      }
                    }
                `);te=document.createElement("div"),ie(te,`
                <div class="searchJumperFrame-body">
                    <a href="${mt}" class="searchJumperFrame-title" target="_blank" draggable="false">
                        <img width="32px" height="32px" src="${kt}" />${J("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-maxBtn">
                        <svg id="maxBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("maxAddSiteBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                        <svg id="minBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("minAddSiteBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                    </div>
                    <div class="searchJumperFrame-inputs">
                        <div class="searchJumperFrame-input-title">${J("siteName")}</div>
                        <input name="siteName" type="text" />
                        <div class="searchJumperFrame-input-title">${J("siteUrl")}</div>
                        <textarea name="url" type="text"></textarea>
                        <svg id="crawlBtn" class="sideIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${J("crawlInfo")}</title><path d="M385 926.3c-11 0-21.4-4.3-29.2-12l-0.6-0.6c-0.7-0.7-65.6-70.4-108.4-112.7-42.8-42.3-118.6-111.4-119.3-112.1l-0.6-0.5c-15.9-15.7-24.6-36.6-24.5-58.8s9-43.1 25-58.6c28.6-27.7 72.2-31 104.6-8.2l90.5 44-83.1-290.1c-4.9-17.1-4.2-34.9 2.1-51.6 6.3-16.6 17.5-30.5 32.5-40.1 22-14.1 47.7-17.7 70.3-10 22.6 7.7 40.7 26.3 49.5 50.9L431 369.8V176.9c0-43.4 35.3-78.7 78.7-78.7 20.7 0 40.2 7.9 55 22.4 14.8 14.4 23.2 33.8 23.7 54.4v0.2l2.4 165.5L625 229.1l0.1-0.4c8.2-23.2 26.2-41.1 49.4-49.3 23.2-8.2 48.5-5.5 69.4 7.3 15.6 9.6 27.7 24.3 33.9 41.6s6.4 36.3 0.6 53.7L736 409.5l42.9-48.6 0.3-0.3c15.7-16.2 34.4-25.7 54.1-27.3 19.8-1.6 39.1 4.7 56 18.1 33 26.4 40.8 60.1 22.7 97.5l-0.5 1.1-0.6 1c-41.8 65.2-107.1 171.9-115.8 199-12.4 38.6-41 140.7-41.3 141.7l-0.2 0.7-34.5 107.2-0.6 1.2c-6.8 14.3-21.5 23.7-37.4 23.8l-295.9 1.6c0 0.1-0.1 0.1-0.2 0.1z"></path></svg>
                        <div class="searchJumperFrame-input-title">${J("siteDesc")}</div>
                        <textarea name="description" type="text"></textarea>
                        <div class="searchJumperFrame-input-title">${J("siteIcon")}</div>
                        <textarea name="icon" type="text"></textarea>
                        <img class="sideIcon" width="27px" height="27px" />
                    </div>
                    <div class="searchJumperFrame-inputs moreItem">
                        <div class="searchJumperFrame-input-title">${J("siteKeywords")}</div>
                        <input name="siteKeywords" placeholder="kw|key" type="text" />
                        <div class="searchJumperFrame-input-title">${J("siteMatch")}</div>
                        <input name="siteMatch" placeholder="(www|m)\\.google\\.com" type="text" />
                        <div class="searchJumperFrame-input-title">${J("openSelect")}</div>
                        <select name="openSelect">
                            <option value="-1">${J("openInDefault")}</option>
                            <option value="true">${J("openInNewTab")}</option>
                            <option value="false">${J("openInCurrent")}</option>
                        </select>
                    </div>
                    <div class="iconsCon"></div>
                    <div class="searchJumperFrame-input-title">${J("siteType")}</div>
                    <select name="typeSelect">
                    </select>
                    <div class="searchJumperFrame-buttons">
                        <button id="test" type="button">${J("siteTest")}</button>
                        <button id="cancel" type="button">${J("siteCancel")}</button>
                        <button id="add" type="button">${J("siteAdd")}</button>
                    </div>
                </div>
                <div class="searchJumperFrame-crawlBody searchJumperFrame-hide">
                    <a href="${mt}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${kt}" />${J("addAction")}
                    </a>
                    <svg class="searchJumperFrame-closeBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close crawl</title>${lr}</svg>
                    <div class="actionCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="input" type="button" title="${J("emuInputTips")}">${J("inputAction")}</button>
                        <button id="click" type="button" title="${J("emuClickTips")}">${J("clickAction")}</button>
                        <button id="sleep" type="button" title="${J("emuWaitTips")}">${J("sleepAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="copy" type="button" title="${J("emuCopyTips")}">${J("copyAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="record" type="button" title="${J("emuRecordTips")}">${J("recordAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="loop" type="button" title="${J("emuLoopTips")}">${J("loopAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="submitCrawl" type="button" title="${J("emuStopTips")}">${J("submitCrawl")}</button>
                    </div>
                </div>
                `),Xe||te.appendChild(p);let h=te.children[0];di=te.querySelector("[name='siteName']"),Gt=te.querySelector("[name='description']"),He=te.querySelector("[name='url']"),jt=te.querySelector("[name='icon']"),Fe=te.querySelector(".searchJumperFrame-inputs>img"),Vt=te.querySelector(".iconsCon"),Cr=te.querySelector("#test"),Sr=te.querySelector("#cancel"),Oi=te.querySelector("#add"),_t=te.querySelector("select[name='typeSelect']"),fi=te.querySelector("[name='siteKeywords']"),mi=te.querySelector("[name='siteMatch']"),gi=te.querySelector("select[name='openSelect']");let d=te.querySelector(".searchJumperFrame-title"),m,u,f=!1,w=x=>{f||(te.classList.add("draging"),f=!0);let S=x.clientX-m.x+u.x,B=x.clientY-m.y+u.y;h.style.marginLeft=S+"px",h.style.marginTop=B+"px"},b=x=>{x.preventDefault(),x.stopPropagation(),te.classList.remove("draging"),document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",b)};d.addEventListener("mousedown",x=>{x.preventDefault(),x.stopPropagation(),f=!1,m={x:x.clientX,y:x.clientY};let S=getComputedStyle(h);u={x:parseInt(S.marginLeft||0),y:parseInt(S.marginTop||0)},document.addEventListener("mousemove",w),document.addEventListener("mouseup",b)}),Fe.onload=x=>{Fe.style.display=""},te.querySelector("#maxBtn").addEventListener("click",x=>{te.classList.add("maxContent")}),te.querySelector("#minBtn").addEventListener("click",x=>{te.classList.remove("maxContent")});for(let x=0;x<c.sitesConfig.length;x++){let S=c.sitesConfig[x],B=document.createElement("option");B.value=x,Pi!==""&&Pi==x&&(B.selected="selected"),B.innerText=S.type,_t.appendChild(B)}Cr.addEventListener("click",x=>{if(/#p{/.test(He.value)){let S=He.value.match(/#p{(.*)}/);if(!S)return;let B=[];S[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(y=>{if(y=y.trim(),/^loopStart\(\d+\)$/.test(y)){let N=y.match(/loopStart\((.*)\)/);B.push(["@loopStart",N[1]])}else if(y=="loopEnd")B.push(["@loopEnd",""]);else if(y.startsWith("click(")&&y.endsWith(")")){let N=y.slice(6,y.length-1);N&&B.push(["@click",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("dblclick(")&&y.endsWith(")")){let N=y.slice(9,y.length-1);N&&B.push(["@dblclick",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("rclick(")&&y.endsWith(")")){let N=y.slice(7,y.length-1);N&&B.push(["@rclick",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("copy(")&&y.endsWith(")")){let N=y.slice(5,y.length-1);N&&B.push(["@copy",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("call(")&&y.endsWith(")")){let N=y.slice(5,y.length-1);N&&B.push(["@call",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("wait(")&&y.endsWith(")")){let N=y.slice(5,y.length-1);B.push(["@wait",N.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(y)){let N=y.match(/sleep\((.*)\)/);N&&B.push(["@sleep",N[1]])}else if(/^reload\(\d?\)$/.test(y)){let N=y.match(/reload\((.*)\)/);B.push(["@reload",N[1]])}else{y=y.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let N=y.split("SJ^PARAM");if(N.length===2){let K=N[0],R=N[1].replace(/\\([\=&])/g,"$1");B.push([K,R])}else(y.endsWith(".click()")||y.endsWith(".click"))&&B.push(["@"+y.replace(/\.click(\(\))?$/,""),"click"])}}),tt=B,P.submitAction(B)}else/[:%]p{/.test(He.value)||r&&r.toLowerCase()!="utf-8"?Ut(r,He.value.replace(/%se?\b/g,"searchJumper"),"_blank"):ye(He.value.replace(/%se?\b/g,"searchJumper"),{active:!0,insert:!0})}),Sr.addEventListener("click",x=>{te.parentNode&&te.parentNode.removeChild(te)}),Oi.addEventListener("click",x=>{ke||ti(()=>{let S=null;for(let B=0;B<c.sitesConfig.length;B++){let y=c.sitesConfig[B];for(let N=0;N<y.sites.length;N++){let K=y.sites[N];if(K.url==He.value){if(B==parseInt(_t.value)){alert("Already added!");return}if(window.confirm(J("siteExist")))S={name:K.name+" - "+y.type,url:`["${K.name}"]`};else return}}}return S==null&&(S={name:di.value,url:He.value},jt.value&&jt.value!=He.value.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")&&(S.icon=jt.value),Gt.value&&Gt.value!=di.value&&(S.description=Gt.value),fi.value&&(S.keywords=fi.value),mi.value&&(S.match=mi.value),gi.value&&gi.value!="-1"&&(S.openInNewTab=gi.value==="true"),self.charset&&r.toLowerCase()!="utf-8"&&(S.charset=self.charset),self.kwFilter&&(S.kwFilter=self.kwFilter),self.match&&(S.match=self.match),self.hideNotMatch&&(S.hideNotMatch=self.hideNotMatch)),c.sitesConfig[_t.value].sites.push(S),c.lastModified=new Date().getTime(),async()=>{await V.setItem("lastAddType",_t.value),Ce(J("siteAddOver")),te.parentNode&&te.parentNode.removeChild(te),qe&&!Re&&document.dispatchEvent(new Event("dataChanged")),P.refreshEngines()}})}),kr=te.querySelector("#crawlBtn");let C=te.querySelector(".searchJumperFrame-closeBtn"),g=te.querySelector(".actionCon"),k=te.querySelector("#input"),A=te.querySelector("#click"),$=te.querySelector("#sleep"),z=te.querySelector("#copy"),W=te.querySelector("#submitCrawl"),T=te.querySelector("#record"),E=te.querySelector("#loop"),I,M=(x,S="",B="")=>{let y=document.createElement("div"),N=x;switch(x){case"input":N=J("inputOutput",[S,B]);break;case"click":N=J("clickOutput",S);break;case"dblclick":N=J("dblclickOutput",S);break;case"rclick":N=J("rclickOutput",S);break;case"copy":N=J("copyOutput",S);break;case"loopStart":N=J("loopStart",B);break;case"loopEnd":N=J("loopEnd");break;case"sleep":N=J("sleepOutput",B);break;default:break}N&&(ie(y,N),y.dataset.type=x,y.dataset.sel=S,y.dataset.val=B,y.draggable="true",y.ondragover=K=>{K.preventDefault()},y.ondragstart=K=>{I=y},y.ondrop=K=>{g.insertBefore(I,y)},y.onclick=K=>{let R=K.target;if(R.nodeName.toUpperCase()=="SPAN")if(R.className=="element")Te.getSelector(O=>{R.innerText=O,R.title=O,te.style.display="",y.dataset.sel=O}),te.style.display="none";else{let O=prompt(J("inputNewValue"),R.innerText);O&&(R.innerText=O,R.title=O,y.dataset.val=O)}else confirm(J("deleteConfirm"))&&g.removeChild(y)},y.oncontextmenu=K=>{let R=K.target;if(R.nodeName.toUpperCase()=="SPAN")if(K.preventDefault(),R.className=="element"){let O=prompt("Selector",R.innerText);O&&(R.innerText=O,R.title=O,y.dataset.sel=O)}else{let O=prompt(J("inputNewValue"),R.innerText);O&&(R.innerText=O,R.title=O,y.dataset.val=O)}},g.appendChild(y))},H=()=>{ie(g,"");let x=He.value.match(/#p{(.*)}/);x&&x[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(S=>{if(S=S.trim(),/^loopStart\(\d+\)$/.test(S)){let B=S.match(/loopStart\((.*)\)/);M("loopStart","",B[1])}else if(S=="loopEnd")M("loopEnd");else if(S.startsWith("click(")&&S.endsWith(")")){let B=S.slice(6,S.length-1);B&&M("click",B.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("dblclick(")&&S.endsWith(")")){let B=S.slice(9,S.length-1);B&&M("dblclick",B.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("rclick(")&&S.endsWith(")")){let B=S.slice(7,S.length-1);B&&M("rclick",B.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("copy(")&&S.endsWith(")")){let B=S.slice(5,S.length-1);B&&M("copy",B.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("call(")&&S.endsWith(")")){let B=S.slice(5,S.length-1);B&&M("call","",B.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("wait(")&&S.endsWith(")")){let B=S.slice(5,S.length-1);B&&M("wait","",B.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("open(")&&S.endsWith(")")){let B=S.slice(5,S.length-1);B&&M("open","",B.replace(/\\([\=&])/g,"$1").trim())}else if(/^sleep\(\d+\)$/.test(S)){let B=S.match(/sleep\((.*)\)/);B&&M("sleep","",B[1])}else if(/^reload\(\d?\)$/.test(S)){let B=S.match(/reload\((.*)\)/);M("reload","",B[1])}else{S=S.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let B=S.split("SJ^PARAM");B.length===2?M("input",B[0],B[1].replace(/\\([\=&])/g,"$1")):(S.endsWith(".click()")||S.endsWith(".click"))&&M("click",S.replace(/\.click(\(\))?$/,""))}})},Y=()=>{let x=[];return[].forEach.call(g.children,S=>{if(!S)return;let B=S.dataset.sel,y=S.dataset.val||"";switch(S.dataset.type){case"click":x.push(`click(${B.replace(/([=&])/g,"\\$1")})`);break;case"dblclick":x.push(`dblclick(${B.replace(/([=&])/g,"\\$1")})`);break;case"rclick":x.push(`rclick(${B.replace(/([=&])/g,"\\$1")})`);break;case"copy":x.push(`copy(${B.replace(/([=&])/g,"\\$1")})`);break;case"input":x.push(`${B.replace(/([=&])/g,"\\$1")}=${y}`);break;case"sleep":x.push(`sleep(${y})`);break;case"loopEnd":x.push("loopEnd");break;default:x.push(`${S.dataset.type}(${y.replace(/([=&])/g,"\\$1")})`);break}}),x.join("&")};kr.addEventListener("click",x=>{H(),te.classList.add("crawling")}),C.addEventListener("click",x=>{te.classList.remove("crawling")});let se,re,L=x=>{te.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(x.target.nodeName)||(clearTimeout(re),re=setTimeout(()=>{M("click",Te.geneSelector(x.target,!0))},300)))},F=x=>{te.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(x.target.nodeName)||(clearTimeout(re),M("dblclick",Te.geneSelector(x.target,!0))))},U=x=>{te.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(x.target.nodeName)||(x.preventDefault(),clearTimeout(re),M("rclick",Te.geneSelector(x.target,!0))))},Z=x=>{te.style.display!==""&&M("input",Te.geneSelector(x.target,!0),x.target.value)},_=x=>{if(te.style.display==="")return;let S=!1;x.keyCode==27?S=!0:x.keyCode==13&&(x.preventDefault(),x.stopPropagation(),x.target&&x.target.blur&&x.target.blur(),S=!0),S&&(te.style.display="",document.removeEventListener("keydown",_,!0),document.removeEventListener("click",L),document.removeEventListener("dblclick",F),document.removeEventListener("contextmenu",U),document.removeEventListener("change",Z))};T.addEventListener("click",x=>{alert(J("startRecord")),te.style.display="none",setTimeout(()=>{document.addEventListener("keydown",_,!0),document.addEventListener("click",L),document.addEventListener("dblclick",F),document.addEventListener("contextmenu",U),document.addEventListener("change",Z)},100)});let ae=!1;E.addEventListener("click",x=>{if(ae)M("loopEnd"),E.innerText=J("loopAction");else{let S=prompt(J("loopTimes"),1);if(!S)return;M("loopStart","",S||"1"),E.innerText=J("loopActionEnd")}ae=!ae}),k.addEventListener("click",x=>{Te.getSelector(S=>{M("input",S,"%s"),te.style.display=""},!ae),te.style.display="none"}),z.addEventListener("click",x=>{Te.getSelector(S=>{M("copy",S,"%s"),te.style.display=""},!ae),te.style.display="none"}),A.addEventListener("dblclick",x=>{clearTimeout(re),x.preventDefault(),x.stopPropagation(),Te.getSelector(S=>{M("dblclick",S),te.style.display=""},!ae),te.style.display="none"}),A.addEventListener("contextmenu",x=>{clearTimeout(re),x.preventDefault(),x.stopPropagation(),Te.getSelector(S=>{M("rclick",S),te.style.display=""},!ae),te.style.display="none"}),A.addEventListener("click",x=>{clearTimeout(re),re=setTimeout(()=>{Te.getSelector(S=>{M("click",S),te.style.display=""},!ae),te.style.display="none"},250)}),$.addEventListener("click",x=>{let S=prompt(J("sleepPrompt"),1e3);S=S&&parseInt(S),S&&M("sleep","",S)}),W.addEventListener("click",x=>{let S=Y();S&&(He.value=location.href+"#p{"+S+"}"),te.classList.remove("crawling")}),te.addEventListener("keydown",x=>{x.keyCode==13&&x.target&&x.target.nodeName=="INPUT"&&Oi.click()})}P.addToShadow(te),fi.value="",mi.value="",di.value=l||"",Gt.value=e||"",He.value=t||"",i&&i[0]?(Fe.style.display="",t.indexOf(location.origin)===0?(Fe.onerror=o=>{Fe.onerror=null,jt.value=i[0],Fe.src=i[0]},Fe.src=location.origin+"/favicon.ico"):(jt.value=i[0],Fe.src=i[0])):(Fe.style.display="none",Fe.src=(/^(showTips:)?https?:/.test(t)?t.split(`
`)[0].replace(/\?.*/,"").replace(/^(showTips:)?(https?:\/\/[^\/]+).*/,"$2"):location.origin)+"/favicon.ico"),ie(Vt,""),i&&i.length>1?(Vt.style.opacity="",i.forEach(o=>{let p=document.createElement("img");p.src=o,p.addEventListener("click",h=>{jt.value=o,Fe.src=o}),p.onload=h=>{p.title=p.naturalWidth+" x "+p.naturalHeight+`
`+o.replace(/.*\/([^\/]+)/,"$1")},Vt.appendChild(p)})):Vt.style.opacity=0}function ds(){let l=document.createElement("a");l.download="searchJumperCache.json",l.target="_blank";let e=[JSON.stringify({sortTypeNames:Me,cacheIcon:ge,sortSiteNames:Ne},null,4)],t=new Blob(e,{type:"application/json"});l.href=window.URL.createObjectURL(t),l.click()}function fs(l){l.cacheIcon&&(ge=l.cacheIcon,V.setItem("cacheIcon",ge),_e=[],c.prefConfig.cacheSwitch=!0,V.setItem("searchData",c)),l.sortTypeNames&&(Me=l.sortTypeNames,V.setItem("sortTypeNames",Me)),l.sortSiteNames&&(Ne=l.sortSiteNames,V.setItem("sortSiteNames",Ne))}function Tr(l,e){De({method:"GET",url:l,headers:{referer:l,origin:l},onload:t=>{let i=t&&t.responseXML&&t.responseXML.querySelector('Url[type="text/html"]');if(!i){e("error",t);return}let r=t.responseXML.querySelector("ShortName"),n=t.responseXML.querySelector("Description"),a=t.responseXML.querySelector("Image"),s=t.responseXML.querySelector("InputEncoding"),o=i.querySelectorAll("Param"),p=r&&r.textContent,h=n&&n.textContent,d=i.getAttribute("template"),m=a&&a.textContent,u=s&&s.textContent;if(o.length>0){let f=[];[].forEach.call(o,w=>{f.push(`${w.getAttribute("name")}=${w.getAttribute("value")}`)}),d+=`%p{${f.join("&")}}`}yi(p,h,d.replace(/{searchTerms\??}/g,"%s").replace(/{startPage\??}/g,"1").replace(/{count\??}/g,"10").replace(/{startIndex\??}/g,"1").replace(/{startPage\??}/g,"1").replace(/{language\??}/g,"*").replace(/{inputEncoding\??}/g,"UTF-8").replace(/{outputEncoding\??}/g,"UTF-8"),[m],u),e("load",t)},onerror:t=>{e("error",t)},ontimeout:t=>{e("error",t)}})}function ms(){if(location.hostname!=="mycroftproject.com")return;Be(`
                 .searchJumper-loading {
                     animation-name: changeScale;
                     animation-duration: 2.5s;
                     animation-iteration-count: infinite;
                 }
                 @keyframes changeScale {
                     0% {
                         -webkit-transform:rotate(0deg) scale(1);
                         -moz-transform:rotate(0deg) scale(1);
                         transform:rotate(0deg) scale(1);
                     }
                     50% {
                         -webkit-transform:rotate(180deg) scale(1.5);
                         -moz-transform:rotate(180deg) scale(1.5);
                         transform:rotate(180deg) scale(1.5);
                     }
                     100% {
                         -webkit-transform:rotate(360deg) scale(1);
                         -moz-transform:rotate(360deg) scale(1);
                         transform:rotate(360deg) scale(1);
                     }
                 }
            `);let l=()=>{let t=document.querySelectorAll("img.icon~a[href^='/install']");if(t.length<=0)return;let i=!1;[].forEach.call(t,r=>{if(r.previousElementSibling&&r.previousElementSibling.classList.contains("searchJumperIcon")||r.previousElementSibling&&r.previousElementSibling.previousElementSibling&&r.previousElementSibling.previousElementSibling.classList.contains("searchJumperIcon"))return;let n=r.href.match(/\?id=(\d+)&basename=(.+?)&/);if(n===null)return;let a=document.createElement("img");a.className="icon searchJumperIcon",a.style.cssText="border: 1px solid #4c4c4c; border-radius: 9px; box-sizing: border-box; margin-right: 4px; cursor: pointer;",a.title="Add to SearchJumper",a.src=kt,r.parentNode.insertBefore(a,r),a.onclick=s=>{i||(i=!0,a.classList.add("searchJumper-loading"),Tr(`https://mycroftproject.com/installos.php/${n[1]}/${n[2]}.xml`,(o,p)=>{i=!1,a.classList.remove("searchJumper-loading"),o!="load"&&Ce(p.statusText||p.error)}))}})};l();let e=setInterval(()=>{l()},1e3);window.addEventListener("load",t=>{clearInterval(e),l()})}function Ir(){P=new Xr}function gs(){if(Re){if(P.appendBar(),P.showAllSites(),setTimeout(()=>{P.con.style.zIndex=0},5),location.hash){let l=location.hash.slice(1);try{l=decodeURIComponent(l)}catch{}P.searchJumperInputKeyWords.value=l}else if(location.search){let l=location.search.slice(1).split("&"),e,t,i;l.forEach(r=>{let n=r.split("="),a=n[0],s=n[1];try{s=decodeURIComponent(s)}catch{}switch(a){case"kw":e=s;break;case"engine":t=s;break;case"self":i=s;break}}),e&&(P.searchJumperInputKeyWords.value=e||""),t&&P.searchBySiteName(t,{},!!i)}if(X(document).style.cssText=`
                    zoom: 1;
                    margin: 0;
                    padding: 0;
                    width: 100vw;
                    height: 100vh;
                    background-position: center 0;
                    background-repeat: no-repeat;
                    background-size: cover;
                    -webkit-background-size: cover;
                    -o-background-size: cover;
                    overflow: hidden;
                `,c.prefConfig.bgUrl&&(st=c.prefConfig.bgUrl,st.length)){X(document).style.backgroundImage=`url("${st}")`;return}V.getItem("allPageBg",l=>{l?(st=l.url,X(document).style.backgroundImage=`url("${l.base64||st}")`):l={url:""},De({method:"GET",url:"https://global.bing.com/HPImageArchive.aspx?format=js&idx=0&pid=hp&video=1&n=1",onload:function(e){var t=null;try{t=JSON.parse(e.responseText);var i=t.images[0].url;if(/^https?:\/\//.test(i)||(i="https://global.bing.com"+i),st=i,i==l.url)return;De({method:"GET",url:i,responseType:"blob",onload:function(r){var n=r.response,a=new FileReader;a.readAsDataURL(n),a.onload=function(s){var o=s.target.result;l={url:i,base64:o},V.setItem("allPageBg",l)}}}),l.base64||(X(document).style.backgroundImage=`url("${i}")`)}catch(r){console.log(r)}}})})}}async function ys(){try{await P.initRun(),os(),gs(),Yt.resume()}catch(l){throw Yt.cancel(),l}}async function Je(l){if(Ke){const e=Ke;return e.throwIfAborted(),new Promise((t,i)=>{const r=()=>{clearTimeout(n),i(e.reason)},n=setTimeout(()=>{e.removeEventListener("abort",r),t()},l);e.addEventListener("abort",r,{once:!0})})}await new Promise(e=>{setTimeout(()=>{e()},l)})}async function ws(){const l=["searchData","cacheKeywords","cacheFilter","disableState","tipsStorage","lastSign","historySites","historyType","sortTypeNames","sortSiteNames","globalInPageWords","navEnable","referrer","clickLink","disableHighlight","lastHighlight","allPageNewMode","lastAddType"];l.push("cacheIcon","inPagePostParams");const[e,t]=await Promise.all([Promise.all(l.map(async n=>[n,await V.getItem(n)])).then(Object.fromEntries),null]);let i=e.searchData;Pe=e.cacheKeywords||"",wt=e.cacheFilter||"",Ei=e.disableState||!1,ut=e.tipsStorage||[],zt=e.lastSign||!1,V.setItem("lastSign",!1),typeof V.listItemCache.inPagePostParams>"u"&&(V.listItemCache.inPagePostParams=e.inPagePostParams||null),tt=await V.getListItem("inPagePostParams",location.hostname),ge=e.cacheIcon||{},it=e.historySites||[],Ot=e.historyType||"",Me=e.sortTypeNames||{},Ne=e.sortSiteNames||{},$e=e.globalInPageWords||"",rt=typeof e.navEnable>"u"?!0:e.navEnable,ri=e.referrer||"",Li=e.clickLink||"",si=e.disableHighlight||"",ar=e.lastHighlight||"",or=e.allPageNewMode||!1,Pi=e.lastAddType||"",i&&(c=i,Ht=c.lastModified),c.lastModified||(c.sitesConfig=sitesConfig),c.prefConfig.lang&&c.prefConfig.lang!="0"&&(Ae=c.prefConfig.lang),Si(),c.prefConfig.firstRun&&V.supportCrossSave()&&(c.prefConfig.firstRun=!1,V.setItem("searchData",c),setTimeout(()=>{V.getItem("searchData",n=>{n.prefConfig.firstRun===!1&&ye(Pr,{active:!0,insert:!0})})},100)),typeof c.prefConfig.customSize>"u"&&(c.prefConfig.customSize=100),typeof c.prefConfig.tilesZoom>"u"&&(c.prefConfig.tilesZoom=100),typeof c.prefConfig.tipsZoom>"u"&&(c.prefConfig.tipsZoom=100),typeof c.prefConfig.typeOpenTime>"u"&&(c.prefConfig.typeOpenTime=250),typeof c.prefConfig.longPressTime>"u"&&(c.prefConfig.longPressTime=500),typeof c.prefConfig.cacheSwitch>"u"&&(c.prefConfig.cacheSwitch=!1),typeof c.prefConfig.noIcons>"u"&&(c.prefConfig.noIcons=!1),typeof c.prefConfig.noAni>"u"&&(c.prefConfig.noAni=!1),typeof c.prefConfig.quickAddRule>"u"&&(c.prefConfig.quickAddRule=!0),typeof c.prefConfig.multiline>"u"&&(c.prefConfig.multiline=2),typeof c.prefConfig.multilineGap>"u"&&(c.prefConfig.multilineGap=1e3),typeof c.prefConfig.historyLength>"u"&&(c.prefConfig.historyLength=0),typeof c.prefConfig.dragToSearch>"u"&&(c.prefConfig.dragToSearch=!0),typeof c.prefConfig.firstFiveWordsColor>"u"&&(c.prefConfig.firstFiveWordsColor=[]),typeof c.prefConfig.inPageWordsStyles>"u"&&(c.prefConfig.inPageWordsStyles=[]),typeof c.prefConfig.rightMouse>"u"&&(c.prefConfig.rightMouse=!0),typeof c.prefConfig.mouseLeaveToHide>"u"&&(c.prefConfig.mouseLeaveToHide=!0),typeof c.prefConfig.currentTypeFirst>"u"&&(c.prefConfig.currentTypeFirst=!0),typeof c.prefConfig.disableAddon>"u"&&(c.prefConfig.disableAddon={});const r=typeof c.prefConfig.suggestType>"u";if(r&&(c.prefConfig.suggestType=i?Ae==="zh-CN"?"baidu":"google":"disable"),typeof c.prefConfig.syncBuild>"u"&&(c.prefConfig.syncBuild=!0),c.prefConfig.minSizeMode&&(c.prefConfig.disableAutoOpen=!1,c.prefConfig.disableTypeOpen=!1),c.prefConfig.configPage?ct=c.prefConfig.configPage:c.prefConfig.configPage=ct,r){const n=await V.getItem("searchData");n?typeof n.prefConfig.suggestType>"u"&&(n.prefConfig.suggestType=c.prefConfig.suggestType,await V.setItem("searchData",n)):await V.setItem("searchData",c)}}function wi(l,e){return l==="*"||l.length==0&&e.length==0?!0:l.length>1&&l[0]=="*"&&e.length==0?!1:l.length>1&&l[0]=="?"||l.length!=0&&e.length!=0&&l[0]==e[0]?wi(l.substring(1),e.substring(1)):l.length>0&&l[0]=="*"?wi(l.substring(1),e)||wi(l,e.substring(1)):!1}if(ue.indexOf("#searchJumperMin")!=-1)if(cr=!0,ue.indexOf("#searchJumperMinPost")!=-1)window.history.replaceState(null,"",ue.replace(/#searchJumperMin(Post)?/,""));else{if(ue.indexOf("#searchJumperMinMobile")!=-1){Object.defineProperty(Object.getPrototypeOf(navigator),"userAgent",{get:function(){return Xi}}),De({method:"GET",url:location.href,headers:{referer:location.href,"User-Agent":Xi},onload:function(l){document.open(),document.write(l.response),document.close()},onerror:function(){},ontimeout:function(){}});return}window.history.replaceState(null,"",location.href.replace(/#searchJumperMin(Mobile)?/,""))}if(document.title=="SearchJumper Multi")return;async function bs(){const l=await V.getItem("searchData");if(l&&(c={...c,...l,prefConfig:{...c.prefConfig,...l.prefConfig}}),c.prefConfig.lang&&c.prefConfig.lang!=="0"&&(Ae=c.prefConfig.lang),Si(),ge={},Pe="",Ir(),P.siteIndex=1,P.allSiteBtns=[],P.allListBtns=[],P.allLists=[],D=X(document),Ue){const r=new Map;window.dispatchEvent(new CustomEvent("searchjumper-split-ready",{detail:{text:J("split"),resolve:async(n,a,s)=>{if(!r.has(n.id)){const o=await P.createSiteBtn("0",{...n.site},!0,!1,n.type||{});r.set(n.id,o),P.allSiteBtns.push([o,n.site])}return P.stopInput=!1,r.get(n.id).resolveSplit(a,s)},submitForm:Ut}}));return}let e,t=Promise.resolve();const i=r=>(!1).runtime.sendMessage({action:"splitFrameResult",paneId:Ye.paneId,...vt?.identity,...r}).catch(n=>console.warn("SearchJumper split:",n.message));chrome.runtime.onMessage.addListener((r,n,a)=>{if(!(n.id!==chrome.runtime.id||vt&&!vt.accepts(r))){if(r.command==="splitCancel")e?.abort(new DOMException("Cancelled","AbortError")),a({ok:!0});else if(r.command==="splitExecute"){e?.abort(new DOMException("Superseded","AbortError"));const s=new AbortController;e=s,t=t.catch(()=>{}).then(async()=>{if(s.signal.aborted)return;Ke=s.signal;const o=setTimeout(()=>s.abort(new Error("timeout")),3e4);try{await P.submitAction(r.actions),pt(),await i({requestId:r.requestId,status:"done"})}catch(p){p.name!=="AbortError"&&await i({requestId:r.requestId,status:"error",error:p.message})}finally{clearTimeout(o),Ke=null}}),a({ok:!0})}}}),await(!1).runtime.sendMessage({action:"splitFrameReady",paneId:Ye.paneId,...vt?.identity})}function vs(){return Array.from(document.scripts).some(l=>/\/cdn-cgi\/challenge-platform\/[^"'\s]*\/orchestrate\/chl_page\//.test(l.src)||/\b_cf_chl_opt\s*=/.test(l.textContent)&&/\/orchestrate\/chl_page\//.test(l.textContent))}var Hi,bi,Fi,Ui,Et;async function Ki(l){Hi||(Hi=(async()=>{try{if(Ue||Ye?.ok){try{await bs()}catch(e){Ue?window.dispatchEvent(new CustomEvent("searchjumper-split-error",{detail:e.message})):console.error("SearchJumper split:",e)}return}if(document.readyState==="loading"&&await new Promise(e=>document.addEventListener("DOMContentLoaded",e,{once:!0})),!qe&&!Re&&vs()&&await Yt.waitForGesture(),ls(),await ws(),Ei)return;if(c.prefConfig.blacklist&&c.prefConfig.blacklist.length>0){let e=!1;for(let t=0;t<c.prefConfig.blacklist.length;t++){let i=c.prefConfig.blacklist[t];if(i&&i.indexOf("//")!=0){if(e){/\*\/$/.test(i)&&(e=!1);continue}if(i.indexOf("/*")==0){e=!0;continue}if(i.indexOf("/")==0){let r=i.match(/^\/(.*)\/(\w*)$/);if(r&&new RegExp(r[1],r[2]).test(ue))return}else if(wi(i,ue))return}}}Ir(),await ps(),ms(),P.ready=ys(),await P.ready,Et=document.title}finally{(!P||!P.ready)&&Yt.cancel()}})()),await Hi,l&&l()}function xs(){if(document.hidden){if(P)P.closeShowAll();else return;if(!c.prefConfig.globalSearchNow)return;Fi=setInterval(async()=>{let l=$e;$e=await V.getItem("globalInPageWords"),(l||"")!=($e||"")&&(P.refreshPageWords(),P.navMarks.innerHTML&&(clearInterval(Fi),clearInterval(Ui),Et=document.title,Ui=setInterval(()=>{document.title=document.title==Et?"\u{1F6A9}":Et},500)))},parseInt(500+Math.random()*500));return}Ki(async()=>{(qe||c.prefConfig.syncBuild)&&(c=await V.getItem("searchData"),P&&c.lastModified&&Ht!=c.lastModified&&(P.refreshEngines(),document.dispatchEvent(new Event("dataChanged"))));let l=$e||"";V.getItem("globalInPageWords",t=>{$e=t||"",l!=$e&&P&&P.refreshPageWords()});let e=rt||!1;V.getItem("navEnable",t=>{rt=typeof t>"u"?!0:t,e!=rt&&P&&P.refreshNav()})})}var qi=!1;function Cs(){!document.head||!X(document)||Lt||Ei||(c.prefConfig.globalSearchNow&&(clearInterval(Fi),clearInterval(Ui),document.hidden?Et=document.title:Et&&(document.title=Et)),!qi&&(qi=!0,setTimeout(()=>{xs(),qi=!1},500)))}const Yt=as();V.getItem("postUrl",l=>{if((Ue||Ye?.ok)&&(l=null),l&&l[0].indexOf(location.hostname.replace(/.*\.(\w+\.\w+)/,"$1"))!=-1)Yt.cancel(),V.setItem("postUrl",""),Ut(l[1],l[0],"_self");else{if(document.head&&X(document))Ki();else{let e=()=>{document.head&&X(document)?Ki():setTimeout(()=>{e()},10)};e()}!Ue&&!Ye?.ok&&document.addEventListener("visibilitychange",Cs)}})}if(document&&document.documentElement)Qi();else{let Ae=()=>{document&&document.documentElement?Qi():setTimeout(()=>{Ae()},10)};Ae()}})();
