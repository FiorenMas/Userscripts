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
(async function(){"use strict";const Le=typeof unsafeWindow>"u"?window:unsafeWindow;if(Le.searchJumperInited)return;Le.searchJumperInited=!0;const Ir=navigator&&navigator.clipboard,Et=window.top!==window.self,dt=!1,Ue=dt&&location.href.split(/[?#]/)[0]===chrome.runtime.getURL("split/index.html");let Ye=null;const bt=!1;if(dt&&Et&&window.name.startsWith("sj-split-"))try{Ye=await(!1).runtime.sendMessage({action:"splitFrameHello",paneId:window.name.slice(9),...bt?.identity}),Ye?.ok&&(bt?await bt.confirmed():window.postMessage({action:"searchjumper-split-worker",paneId:Ye.paneId,parentOrigin:chrome.runtime.getURL("").slice(0,-1)},location.origin))}catch(Ae){console.warn("SearchJumper split frame:",Ae)}if(Et&&!Ye?.ok)try{if(window.name==="pagetual-iframe"||window.frameElement&&window.frameElement.name==="pagetual-iframe")return;if(window.self.innerWidth===0&&window.self.innerHeight===0){if(await new Promise(_e=>{window.addEventListener("load",vi=>{setTimeout(()=>{_e(window.self.innerWidth<300||window.self.innerHeight<300)},500)})}))return}else if(window.self.innerWidth<300||window.self.innerHeight<300)return}catch{return}const Vi=/^https:\/\/github\.com\/hoothin\/SearchJumper(\/(issue|discussions)|\/?$|#|\?)|^https:\/\/greasyfork\.org\/.*\/scripts\/445274[\-\/].*\/discussions/i,Yi="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",ft="https://search.hoothin.com/",jr="https://hoothin.github.io/SearchJumper",Er=ft+"firstRun";let lt=ft+"config/",ze=!1,c={};c.sitesConfig=sitesConfig,c.prefConfig={position:{x:"left",y:"top"},offset:{x:"0",y:"0"},firstRun:!0,openInNewTab:!1,enableInPage:!0,altKey:!1,ctrlKey:!0,shiftKey:!1,metaKey:!1,autoClose:!1,autoDelay:1e3,shortcut:!0,initShow:!1,alwaysShow:!1,customSize:100,tilesZoom:100,tipsZoom:100,typeOpenTime:250,longPressTime:500,noIcons:!1,showSiteLists:!0,alwaysShowSiteLists:!1,cacheSwitch:!1,noAni:!1,quickAddRule:!0,multiline:2,multilineGap:1e3,historyLength:0,dragToSearch:!0,hideDragHistory:!1,sortType:!1,sortSite:!1,autoHide:!1,autoHideAll:!1,showCurrent:!0,shortcutKey:"Backquote",showInSearchEngine:!1,showInSearchJumpPage:!0,limitInPageLen:1,limitPopupLen:1,ignoreWords:["a","in","into","the","to","on","among","between","and","an","of","by","with","about","under","or","at","as"],inPageRule:{},firstFiveWordsColor:[],inPageWordsStyles:[],altToHighlight:!0,defaultPicker:!1,disableInputOnWords:!1,disableTypeOpen:!1,callBarAlt:!1,callBarCtrl:!1,callBarShift:!1,callBarMeta:!1,defaultFindTab:!0,disableAutoOpen:!1,hideOnSearchEngine:!1,minSizeMode:!1,hidePopup:!1,minPopup:0,selectToShow:!1,expandType:!1,rightMouse:!0,shiftLastUsedType:!0,mouseLeaveToHide:!0,currentTypeFirst:!0,switchSitesPreKey:"ArrowLeft",switchSitesNextKey:"ArrowRight",switchSitesCtrl:!0,switchSitesAlt:!1,switchSitesShift:!0,switchSitesMeta:!1};function _i(){let Ae=navigator.appName==="Netscape"?navigator.language:navigator.userLanguage,_e={};function vi(){switch(Ae){case"zh-CN":case"zh-SG":_e={import:"\u5BFC\u5165",filter:"\u7B5B\u9009",selectAll:"\u5168\u9009",importOrNot:"\u662F\u5426\u5BFC\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u5F00",split:{locale:"zh-CN",title:"\u641C\u7D22\u9171 \xB7 \u5206\u5C4F\u641C\u7D22",button:"\u5206\u5C4F\u641C\u7D22",query:"\u8F93\u5165\u5173\u952E\u8BCD\u6216\u95EE\u9898\uFF0C\u53D1\u9001\u5230\u6240\u6709\u7A97\u683C",search:"\u641C\u7D22 / \u63D0\u95EE",layout:"\u5E03\u5C40",columns2:"\u5DE6\u53F3\u53CC\u680F",rows2:"\u4E0A\u4E0B\u53CC\u680F",columns3:"\u4E09\u680F",columns4:"\u56DB\u680F",previous:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875",refresh:"\u5237\u65B0",open:"\u65B0\u6807\u7B7E",close:"\u5173\u95ED",retry:"\u91CD\u8BD5",loading:"\u6B63\u5728\u52A0\u8F7D\u2026",running:"\u6B63\u5728\u53D1\u9001\u2026",done:"\u5DF2\u5C31\u7EEA",error:"\u52A0\u8F7D\u5931\u8D25",empty:"\u6240\u6709\u7A97\u683C\u5DF2\u5173\u95ED\uFF0C\u53EF\u4ECE\u641C\u7D22\u5206\u7EC4\u91CD\u65B0\u53D1\u8D77\u5206\u5C4F\u3002",timeout:"\u9875\u9762\u5C1A\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728\u65B0\u6807\u7B7E\u9875\u767B\u5F55\uFF0C\u6216\u68C0\u67E5\u5F15\u64CE\u89C4\u5219\u540E\u91CD\u8BD5\u3002",skipped:"\u8FD9\u4E9B\u5F15\u64CE\u8BF7\u4F7F\u7528\u539F\u5165\u53E3\uFF1A",divider:"\u8C03\u6574\u7A97\u683C\u5927\u5C0F",pages:"\u7FFB\u9875",results:"\u641C\u7D22\u7ED3\u679C",ended:"\u5206\u5C4F\u4F1A\u8BDD\u65E0\u6CD5\u6253\u5F00\uFF0C\u8BF7\u4ECE\u641C\u7D22\u5206\u7EC4\u91CD\u65B0\u53D1\u8D77\u3002",noEngines:"\u6B64\u5206\u7EC4\u6CA1\u6709\u53EF\u5206\u5C4F\u7684\u7F51\u9875\u5F15\u64CE\u3002",httpOnly:"\u5206\u5C4F\u4EC5\u652F\u6301\u4E0D\u542B\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684 HTTP(S) \u7F51\u9875\u3002",invalidRequest:"\u641C\u7D22\u8BF7\u6C42\u65E0\u6548\uFF0C\u8BF7\u68C0\u67E5\u5F15\u64CE\u89C4\u5219\u3002",invalidActions:"\u81EA\u52A8\u64CD\u4F5C\u89C4\u5219\u65E0\u6548\uFF0C\u8BF7\u68C0\u67E5\u5F15\u64CE\u89C4\u5219\u3002",missingForm:"\u7F3A\u5C11\u8868\u5355\u63D0\u4EA4\u5730\u5740\u3002",formMismatch:"\u8868\u5355\u63D0\u4EA4\u5730\u5740\u4E0E\u7A97\u683C\u5730\u5740\u4E0D\u4E00\u81F4\u3002",unsupportedBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u9694\u79BB\u5D4C\u5165\u89C4\u5219\uFF0C\u9700\u8981 Chrome 145 \u6216\u66F4\u65B0\u7248\u672C\u3002",invalidTab:"\u5206\u5C4F\u6807\u7B7E\u9875\u65E0\u6548\u3002",pageClosed:"\u5206\u5C4F\u9875\u5DF2\u5173\u95ED\u3002",pageOnly:"\u53EA\u6709\u5206\u5C4F\u9875\u53EF\u4EE5\u4FEE\u6539\u81EA\u5DF1\u7684\u4F1A\u8BDD\u3002",invalidSender:"\u8BF7\u6C42\u4E0D\u662F\u6765\u81EA\u672C\u6269\u5C55\u3002",invalidSearch:"\u5206\u5C4F\u641C\u7D22\u53C2\u6570\u65E0\u6548\u3002",invalidEngine:"\u641C\u7D22\u5F15\u64CE\u4FE1\u606F\u65E0\u6548\u3002",invalidUpdate:"\u641C\u7D22\u66F4\u65B0\u8BF7\u6C42\u65E0\u6548\u3002",missingPane:"\u7A97\u683C\u5DF2\u5173\u95ED\u3002",unknownCommand:"\u65E0\u6CD5\u8BC6\u522B\u5206\u5C4F\u64CD\u4F5C\u3002",pageChanged:"\u9875\u9762\u5728\u786E\u8BA4\u63D0\u4EA4\u524D\u53D1\u751F\u4E86\u8DF3\u8F6C\uFF0C\u8BF7\u6309\u9700\u91CD\u8BD5\u3002"},batchOpenConfirm:"\u786E\u5B9A\u8981\u6279\u91CF\u6253\u5F00\u5417\uFF1F",postOver:"\u53D1\u9001\u6210\u529F\uFF1A",postError:"\u53D1\u9001\u5931\u8D25\uFF1A",copyOver:"\u590D\u5236\u6210\u529F",keywords:"\u8BF7\u8F93\u5165\u641C\u7D22\u8BCD",targetUrl:"\u8BF7\u8F93\u5165\u641C\u7D22URL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u56FE\u6807",siteTest:"\u6D4B\u8BD5",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u7C7B",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u89C4\u5219\uFF0C\u662F\u5426\u6DFB\u52A0\u4E3A\u514B\u9686\u9879\uFF1F",siteAddOver:"\u7AD9\u70B9\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u6362\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u7D22\uFF1F",multilineTooMuch:"\u884C\u6570\u8D85\u8FC710\u884C\uFF0C\u662F\u5426\u7EE7\u7EED\u641C\u7D22\uFF1F",inputPlaceholder:"\u7B5B\u9009\u5F15\u64CE",inputTitle:"\u7B5B\u9009\u5F15\u64CE\uFF0C\u652F\u6301 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u5F00\u5934\uFF0C\u5206\u7EC4**\u7AD9\u70B9 \u53EF\u7B5B\u9009\u6307\u5B9A\u5206\u7EC4\uFF0C\u4F8B\u5982 \u56FE\u7247**baidu\uFF0Ctab \u4E0B\u4E00\u9879",inputKeywords:"\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",inPageTips:`\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8BA4\u7A7A\u683C\u4F5C\u4E3A\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u7D22\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF1A\u641C\u7D22\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0B\u4E00\u4E2A\uFF0C\u53F3\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0A\u4E00\u4E2A`,inPagePlaceholder:"\u8F93\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8F66\u8FDB\u884C\u9875\u5185\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u8FDE\u7EED\u6293\u53D6",editBtn:"\u7F16\u8F91\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u590D\u5236\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u5355\u8BCD\u6A21\u5F0F",copyEleBtn:"\u590D\u5236\u9009\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u5F00\u9009\u4E2D\u94FE\u63A5",maxEleBtn:"\u5C55\u5F00\u9009\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9009\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u5F00",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u590D\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6807\u7B7E\u9875\u4E2D\u641C\u7D22",locBtn:"\u5B9A\u4F4D\u4FA7\u8FB9\u680F",filterSites:"\u641C\u7D22\u5F15\u64CE",searchInPage:"\u9875\u5185\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u7D22\u8BCD",saveRuleBtn:"\u4FDD\u5B58\u5F53\u524D\u7AD9\u70B9\u7684\u641C\u7D22\u8BCD",wordContent:"\u641C\u7D22\u8BCD\u5185\u5BB9",wordHide:"\u9690\u85CF\u7236\u7EA7\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u4E3A\u5F53\u524D\u7236\u7EA7",wordStyle:"\u641C\u7D22\u8BCD\u6837\u5F0F",wordTitle:"\u641C\u7D22\u8BCD\u6CE8\u91CA",re:"\u6B63\u5219",ignoreCase:"\u4E0D\u533A\u5206\u5927\u5C0F\u5199",filterLink:"\u7B5B\u9009\u94FE\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9875\u5185\u641C\u7D22\u8BCD",addSearchEngine:"\u6DFB\u52A0\u641C\u7D22\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52A8\u7F16\u8F91\u89C4\u5219\u5E76\u6DFB\u52A0\uFF1F",expand:"\u5C55\u5F00\u5269\u4F59\u7AD9\u70B9",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8BCD\u8BED",wordRange:"\u751F\u6548\u8303\u56F4",customInputFrame:"\u81EA\u5B9A\u4E49\u641C\u7D22\u53C2\u6570",customSubmit:"\u63D0\u4EA4\u641C\u7D22",finalSearch:"\u76EE\u6807\u641C\u7D22\u5B57\u4E32",search:"\u641C\u7D22\u6B64\u9879",siteKeywords:"\u5173\u952E\u8BCD(\u591A\u4E2A\u5173\u952E\u8BCD\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u70B9 URL \u5339\u914D\u6B63\u5219",openSelect:"\u6253\u5F00\u9009\u9879",openInDefault:"\u9ED8\u8BA4",openInNewTab:"\u65B0\u6807\u7B7E\u9875\u6253\u5F00",openInCurrent:"\u5F53\u524D\u9875\u6253\u5F00",currentType:"\u5F53\u524D\u5206\u7C7B",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u8FD8\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u62DF\u8F93\u5165\u641C\u7D22",inputAction:"\u8F93\u5165",clickAction:"\u70B9\u51FB",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u590D\u5236\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5185\u8F93\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u70B9\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u53CC\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u590D\u5236\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8BF7\u8F93\u5165\u65B0\u503C",deleteConfirm:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417\uFF1F",sleepPrompt:"\u7B49\u5F85\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",startCache:"\u5F00\u59CB\u7F13\u5B58\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u7F13\u5B58\u5B8C\u6BD5\uFF0C\u52FF\u5173\u95ED\u914D\u7F6E\u9875\uFF01",cacheOver:"\u6240\u6709\u56FE\u6807\u90FD\u5DF2\u7F13\u5B58\u5B8C\u6BD5\uFF01",cspDisabled:"\u811A\u672C\u6837\u5F0F\u88AB\u5F53\u524D\u7AD9\u70B9\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u65E0\u6CD5\u663E\u793A\uFF0C\u8BF7\u5C1D\u8BD5\u5B89\u88C5 Allow CSP: Content-Security-Policy \u6269\u5C55\u83B7\u53D6\u6743\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8BF7\u8BBE\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u5F55\u5236\u64CD\u4F5C",startRecord:"\u5F00\u59CB\u5F55\u5236\u64CD\u4F5C\uFF0C\u6309\u56DE\u8F66\u952E\u7ED3\u675F\u5F55\u5236",loopAction:"\u{1F501}\u5F00\u59CB\u5FAA\u73AF",loopActionEnd:"\u23F9\uFE0F\u5FAA\u73AF\u7ED3\u675F",loopStart:'\u5F00\u59CB\u5FAA\u73AF\uFF0C\u5FAA\u73AF\u6B21\u6570\u4E3A<span title="#t#">#t#</span>',loopEnd:"\u7ED3\u675F\u5FAA\u73AF",loopTimes:"\u5FAA\u73AF\u6B21\u6570\uFF0C\u5C06\u904D\u5386\u6240\u6709\u5339\u914D\u5143\u7D20\u5E76\u987A\u5E8F\u6267\u884C",loadingCollection:"\u6B63\u5728\u52A0\u8F7D\u5408\u96C6\uFF0C\u8BF7\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F93\u5165\u6846\uFF09\u5185\u8F93\u5165\u641C\u7D22\u8BCD",emuClickTips:"\u5355\u51FB\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u94AE\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u540E\u7EE7\u7EED\u6267\u884C\uFF0C\u5F53\u67D0\u4E2A\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u65F6\u5F88\u6709\u7528",emuCopyTips:"\u590D\u5236\u6307\u5B9A\u5143\u7D20\u7684\u6587\u672C\u5230\u526A\u8D34\u677F",emuRecordTips:"\u5F55\u5236\u63A5\u4E0B\u6765\u7684\u70B9\u51FB\u548C\u8F93\u5165\u64CD\u4F5C",emuLoopTips:"\u5F00\u59CB\u5FAA\u73AF\uFF0C\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u5C06\u904D\u5386\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u5E76\u4E14\u91CD\u590D\u6307\u5B9A\u6B21\u6570",emuStopTips:"\u7ED3\u675F\u64CD\u4F5C\u5E76\u751F\u6210\u89C4\u5219"};break;case"zh":case"zh-TW":case"zh-HK":_e={import:"\u5C0E\u5165",filter:"\u7BE9\u9078",selectAll:"\u5168\u9078",importOrNot:"\u662F\u5426\u5C0E\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u958B",split:{locale:"zh-TW",title:"\u641C\u5C0B\u91AC \xB7 \u5206\u5272\u756B\u9762\u641C\u5C0B",button:"\u5206\u5272\u756B\u9762\u641C\u5C0B",query:"\u8F38\u5165\u95DC\u9375\u5B57\u6216\u554F\u984C\uFF0C\u50B3\u9001\u81F3\u6240\u6709\u7A97\u683C",search:"\u641C\u5C0B / \u63D0\u554F",layout:"\u7248\u9762\u914D\u7F6E",columns2:"\u5DE6\u53F3\u96D9\u6B04",rows2:"\u4E0A\u4E0B\u96D9\u6B04",columns3:"\u4E09\u6B04",columns4:"\u56DB\u6B04",previous:"\u4E0A\u4E00\u9801",next:"\u4E0B\u4E00\u9801",refresh:"\u91CD\u65B0\u6574\u7406",open:"\u65B0\u5206\u9801",close:"\u95DC\u9589",retry:"\u91CD\u8A66",loading:"\u8F09\u5165\u4E2D\u2026",running:"\u50B3\u9001\u4E2D\u2026",done:"\u5DF2\u5C31\u7DD2",error:"\u8F09\u5165\u5931\u6557",empty:"\u6240\u6709\u7A97\u683C\u5DF2\u95DC\u9589\uFF0C\u8ACB\u5F9E\u641C\u5C0B\u7FA4\u7D44\u91CD\u65B0\u555F\u52D5\u5206\u5272\u756B\u9762\u641C\u5C0B\u3002",timeout:"\u9801\u9762\u5C1A\u672A\u5C31\u7DD2\uFF0C\u8ACB\u5728\u65B0\u5206\u9801\u767B\u5165\uFF0C\u6216\u6AA2\u67E5\u5F15\u64CE\u898F\u5247\u5F8C\u91CD\u8A66\u3002",skipped:"\u9019\u4E9B\u5F15\u64CE\u8ACB\u4F7F\u7528\u539F\u5165\u53E3\uFF1A",divider:"\u8ABF\u6574\u7A97\u683C\u5927\u5C0F",pages:"\u63DB\u9801",results:"\u641C\u5C0B\u7D50\u679C",ended:"\u7121\u6CD5\u958B\u555F\u5206\u5272\u756B\u9762\u5DE5\u4F5C\u968E\u6BB5\uFF0C\u8ACB\u5F9E\u641C\u5C0B\u7FA4\u7D44\u91CD\u65B0\u555F\u52D5\u3002",noEngines:"\u6B64\u7FA4\u7D44\u6C92\u6709\u53EF\u4F9B\u5206\u5272\u756B\u9762\u641C\u5C0B\u7684\u7DB2\u9801\u5F15\u64CE\u3002",httpOnly:"\u5206\u5272\u756B\u9762\u50C5\u652F\u63F4\u4E0D\u542B\u4F7F\u7528\u8005\u540D\u7A31\u8207\u5BC6\u78BC\u7684 HTTP(S) \u7DB2\u9801\u3002",invalidRequest:"\u641C\u5C0B\u8ACB\u6C42\u7121\u6548\uFF0C\u8ACB\u6AA2\u67E5\u5F15\u64CE\u898F\u5247\u3002",invalidActions:"\u81EA\u52D5\u64CD\u4F5C\u898F\u5247\u7121\u6548\uFF0C\u8ACB\u6AA2\u67E5\u5F15\u64CE\u898F\u5247\u3002",missingForm:"\u7F3A\u5C11\u8868\u55AE\u63D0\u4EA4\u7DB2\u5740\u3002",formMismatch:"\u8868\u55AE\u63D0\u4EA4\u7DB2\u5740\u8207\u7A97\u683C\u7DB2\u5740\u4E0D\u4E00\u81F4\u3002",unsupportedBrowser:"\u76EE\u524D\u7684\u700F\u89BD\u5668\u7121\u6CD5\u9694\u96E2\u5D4C\u5165\u898F\u5247\uFF0C\u9700\u8981 Chrome 145 \u6216\u66F4\u65B0\u7248\u672C\u3002",invalidTab:"\u5206\u5272\u756B\u9762\u7684\u5206\u9801\u7121\u6548\u3002",pageClosed:"\u5206\u5272\u756B\u9762\u5206\u9801\u5DF2\u95DC\u9589\u3002",pageOnly:"\u53EA\u6709\u5206\u5272\u756B\u9762\u5206\u9801\u53EF\u4EE5\u4FEE\u6539\u81EA\u5DF1\u7684\u5DE5\u4F5C\u968E\u6BB5\u3002",invalidSender:"\u8ACB\u6C42\u4E26\u975E\u4F86\u81EA\u672C\u64F4\u5145\u529F\u80FD\u3002",invalidSearch:"\u5206\u5272\u756B\u9762\u641C\u5C0B\u53C3\u6578\u7121\u6548\u3002",invalidEngine:"\u641C\u5C0B\u5F15\u64CE\u8CC7\u8A0A\u7121\u6548\u3002",invalidUpdate:"\u641C\u5C0B\u66F4\u65B0\u8ACB\u6C42\u7121\u6548\u3002",missingPane:"\u7A97\u683C\u5DF2\u95DC\u9589\u3002",unknownCommand:"\u7121\u6CD5\u8FA8\u8B58\u5206\u5272\u756B\u9762\u64CD\u4F5C\u3002",pageChanged:"\u9801\u9762\u5728\u78BA\u8A8D\u63D0\u4EA4\u524D\u5DF2\u8DF3\u8F49\uFF0C\u8ACB\u8996\u9700\u8981\u91CD\u8A66\u3002"},batchOpenConfirm:"\u78BA\u5B9A\u8981\u6279\u91CF\u6253\u958B\u55CE\uFF1F",postOver:"\u767C\u9001\u6210\u529F\uFF1A",postError:"\u767C\u9001\u5931\u6557\uFF1A",copyOver:"\u8907\u88FD\u6210\u529F",keywords:"\u8ACB\u8F38\u5165\u641C\u5C0B\u8A5E",targetUrl:"\u8ACB\u8F38\u5165\u641C\u5C0BURL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u5716\u6A19",siteTest:"\u6E2C\u8A66",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u985E",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u898F\u5247\uFF0C\u662F\u5426\u6DFB\u52A0\u70BA\u514B\u9686\u9805\uFF1F",siteAddOver:"\u7AD9\u9EDE\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u63DB\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u5C0B\uFF1F",multilineTooMuch:"\u884C\u6578\u8D85\u904E10\u884C\uFF0C\u662F\u5426\u7E7C\u7E8C\u641C\u5C0B\uFF1F",inputPlaceholder:"\u7BE9\u9078\u5F15\u64CE",inputTitle:"\u7BE9\u9078\u5F15\u64CE\uFF0C\u652F\u63F4 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u958B\u982D\uFF0C\u5206\u7D44**\u7AD9\u9EDE \u53EF\u7BE9\u9078\u6307\u5B9A\u5206\u7D44\uFF0C\u4F8B\u5982 \u5716\u7247**google\uFF0Ctab \u4E0B\u4E00\u9805",inputKeywords:"\u8F38\u5165\u641C\u5C0B\u95DC\u9375\u8A5E",inPageTips:`\u81EA\u5B9A\u7FA9\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8A8D\u7A7A\u683C\u4F5C\u70BA\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5247\u8868\u9054\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u5C0B\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u7FA9\u6A23\u5F0F\uFF1A\u641C\u5C0B\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0B\u4E00\u500B\uFF0C\u53F3\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0A\u4E00\u500B`,inPagePlaceholder:"\u8F38\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9032\u884C\u9801\u5167\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u9023\u7E8C\u6293\u53D6",editBtn:"\u7DE8\u8F2F\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u8907\u88FD\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u55AE\u8A5E\u6A21\u5F0F",copyEleBtn:"\u8907\u88FD\u9078\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u958B\u9078\u4E2D\u9023\u7D50",maxEleBtn:"\u5C55\u958B\u9078\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9078\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u958B",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u5FA9\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6A19\u7C64\u9801\u4E2D\u641C\u5C0B",locBtn:"\u5B9A\u4F4D\u5074\u908A\u6B04",filterSites:"\u641C\u5C0B\u5F15\u64CE",searchInPage:"\u9801\u5167\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u5C0B\u8A5E",saveRuleBtn:"\u4FDD\u5B58\u7576\u524D\u7AD9\u9EDE\u7684\u641C\u5C0B\u8A5E",wordContent:"\u641C\u5C0B\u8A5E\u5167\u5BB9",wordHide:"\u96B1\u85CF\u7236\u7D1A\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u70BA\u7576\u524D\u7236\u7D1A",wordStyle:"\u641C\u5C0B\u8A5E\u6A23\u5F0F",wordTitle:"\u641C\u5C0B\u8A5E\u6CE8\u91CB",re:"\u6B63\u5247",ignoreCase:"\u4E0D\u5340\u5206\u5927\u5C0F\u5BEB",filterLink:"\u7BE9\u9078\u93C8\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9801\u5167\u641C\u5C0B\u8A5E",addSearchEngine:"\u6DFB\u52A0\u641C\u5C0B\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52D5\u7DE8\u8F2F\u898F\u5247\u4E26\u6DFB\u52A0\uFF1F",expand:"\u5C55\u958B\u5269\u9918\u7AD9\u9EDE",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8A5E\u8A9E",wordRange:"\u751F\u6548\u7BC4\u570D",customInputFrame:"\u81EA\u5B9A\u7FA9\u641C\u5C0B\u53C3\u6578",customSubmit:"\u63D0\u4EA4\u641C\u5C0B",finalSearch:"\u76EE\u6A19\u641C\u5C0B\u5B57\u4E32",search:"\u641C\u5C0B\u6B64\u9805",siteKeywords:"\u95DC\u9375\u8A5E(\u591A\u500B\u95DC\u9375\u8A5E\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u9EDE URL \u5339\u914D\u6B63\u5247",openSelect:"\u6253\u958B\u9078\u9805",openInDefault:"\u9ED8\u8A8D",openInNewTab:"\u65B0\u6A19\u7C64\u9801\u6253\u958B",openInCurrent:"\u7576\u524D\u9801\u6253\u958B",currentType:"\u7576\u524D\u5206\u985E",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u9084\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u64EC\u8F38\u5165\u641C\u5C0B",inputAction:"\u8F38\u5165",clickAction:"\u9EDE\u64CA",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u8907\u88FD\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5167\u8F38\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u9EDE\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u96D9\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u8907\u88FD\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8ACB\u8F38\u5165\u65B0\u503C",deleteConfirm:"\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u9805\u55CE\uFF1F ",sleepPrompt:"\u7B49\u5F85\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",startCache:"\u958B\u59CB\u7DE9\u5B58\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5F85\u7DE9\u5B58\u5B8C\u7562\uFF0C\u52FF\u95DC\u9589\u914D\u7F6E\u9801\uFF01",cacheOver:"\u6240\u6709\u5716\u6A19\u90FD\u5DF2\u7DE9\u5B58\u5B8C\u7562\uFF01",cspDisabled:"\u8173\u672C\u6A23\u5F0F\u88AB\u7576\u524D\u7AD9\u9EDE\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u7121\u6CD5\u986F\u793A\uFF0C\u8ACB\u5617\u8A66\u5B89\u88DD Allow CSP: Content-Security-Policy \u64F4\u5C55\u7372\u53D6\u6B0A\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8ACB\u8A2D\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u9304\u88FD\u52D5\u4F5C",startRecord:"\u958B\u59CB\u9304\u88FD\u64CD\u4F5C\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9375\u7D50\u675F\u9304\u88FD",loopAction:"\u{1F501}\u958B\u59CB\u5FAA\u74B0",loopActionEnd:"\u23F9\uFE0F\u5FAA\u74B0\u7D50\u675F",loopStart:'\u958B\u59CB\u5FAA\u74B0\uFF0C\u5FAA\u74B0\u6B21\u6578\u70BA<span title="#t#">#t#</span>',loopEnd:"\u7D50\u675F\u5FAA\u74B0",loopTimes:"\u5FAA\u74B0\u6B21\u6578\uFF0C\u5C07\u904D\u6B77\u6240\u6709\u5339\u914D\u5143\u7D20\u4E26\u9806\u5E8F\u57F7\u884C",loadingCollection:"\u6B63\u5728\u8F09\u5165\u5408\u96C6\uFF0C\u8ACB\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F38\u5165\u6846\uFF09\u5167\u8F38\u5165\u641C\u5C0B\u5B57\u8A5E",emuClickTips:"\u9EDE\u64CA\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u9215\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u6642\u9593\u5F8C\u7E7C\u7E8C\u57F7\u884C\uFF0C\u7576\u67D0\u500B\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u6642\u9593\u624D\u80FD\u5B8C\u6210\u6642\u5F88\u6709\u7528",emuCopyTips:"\u8907\u88FD\u6307\u5B9A\u5143\u7D20\u7684\u6587\u5B57\u5230\u526A\u8CBC\u7C3F",emuRecordTips:"\u9304\u88FD\u63A5\u4E0B\u4F86\u7684\u9EDE\u64CA\u548C\u8F38\u5165\u64CD\u4F5C",emuLoopTips:"\u958B\u59CB\u5FAA\u74B0\uFF0C\u63A5\u4E0B\u4F86\u7684\u64CD\u4F5C\u5C07\u904D\u6B77\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u4E26\u4E14\u91CD\u8907\u6307\u5B9A\u6B21\u6578",emuStopTips:"\u7D50\u675F\u64CD\u4F5C\u4E26\u7522\u751F\u898F\u5247"};break;case"ja":case"ja-JP":_e={import:"\u30A4\u30F3\u30DD\u30FC\u30C8",filter:"\u30D5\u30A3\u30EB\u30BF\u30FC",selectAll:"\u3059\u3079\u3066\u9078\u629E",importOrNot:"\u8A2D\u5B9A\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u304B? ",settings:"\u69CB\u6210\u30B9\u30AF\u30EA\u30D7\u30C8",batchOpen:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3",split:{locale:"ja",title:"SearchJumper \xB7 \u5206\u5272\u691C\u7D22",button:"\u5206\u5272\u691C\u7D22",query:"\u30AD\u30FC\u30EF\u30FC\u30C9\u3084\u8CEA\u554F\u3092\u3059\u3079\u3066\u306E\u30DA\u30A4\u30F3\u306B\u9001\u4FE1",search:"\u691C\u7D22 / \u8CEA\u554F",layout:"\u30EC\u30A4\u30A2\u30A6\u30C8",columns2:"\u5DE6\u53F32\u5217",rows2:"\u4E0A\u4E0B2\u6BB5",columns3:"3\u5217",columns4:"4\u5217",previous:"\u524D\u3078",next:"\u6B21\u3078",refresh:"\u518D\u8AAD\u307F\u8FBC\u307F",open:"\u5225\u30BF\u30D6",close:"\u9589\u3058\u308B",retry:"\u518D\u8A66\u884C",loading:"\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",running:"\u9001\u4FE1\u4E2D\u2026",done:"\u6E96\u5099\u5B8C\u4E86",error:"\u8AAD\u307F\u8FBC\u307F\u5931\u6557",empty:"\u3059\u3079\u3066\u306E\u30DA\u30A4\u30F3\u3092\u9589\u3058\u307E\u3057\u305F\u3002\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u30B0\u30EB\u30FC\u30D7\u304B\u3089\u5206\u5272\u691C\u7D22\u3092\u958B\u59CB\u3057\u3066\u304F\u3060\u3055\u3044\u3002",timeout:"\u30DA\u30FC\u30B8\u306E\u6E96\u5099\u304C\u3067\u304D\u3066\u3044\u307E\u305B\u3093\u3002\u5225\u306E\u30BF\u30D6\u3067\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u304B\u3001\u30A8\u30F3\u30B8\u30F3\u306E\u30EB\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",skipped:"\u6B21\u306E\u30A8\u30F3\u30B8\u30F3\u306F\u5143\u306E\u30E1\u30CB\u30E5\u30FC\u304B\u3089\u958B\u3044\u3066\u304F\u3060\u3055\u3044\uFF1A",divider:"\u30DA\u30A4\u30F3\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4",pages:"\u30DA\u30FC\u30B8\u5207\u308A\u66FF\u3048",results:"\u691C\u7D22\u7D50\u679C",ended:"\u5206\u5272\u691C\u7D22\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u3051\u307E\u305B\u3093\u3002\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u30B0\u30EB\u30FC\u30D7\u304B\u3089\u65B0\u3057\u304F\u958B\u59CB\u3057\u3066\u304F\u3060\u3055\u3044\u3002",noEngines:"\u3053\u306E\u30B0\u30EB\u30FC\u30D7\u306B\u306F\u5206\u5272\u691C\u7D22\u3067\u4F7F\u3048\u308B\u30A6\u30A7\u30D6\u30A8\u30F3\u30B8\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002",httpOnly:"\u5206\u5272\u691C\u7D22\u3067\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u540D\u3084\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u542B\u307E\u306A\u3044 HTTP(S) \u30DA\u30FC\u30B8\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002",invalidRequest:"\u691C\u7D22\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u7121\u52B9\u3067\u3059\u3002\u30A8\u30F3\u30B8\u30F3\u306E\u30EB\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalidActions:"\u81EA\u52D5\u64CD\u4F5C\u304C\u7121\u52B9\u3067\u3059\u3002\u30A8\u30F3\u30B8\u30F3\u306E\u30EB\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",missingForm:"\u30D5\u30A9\u30FC\u30E0\u306E\u9001\u4FE1\u5148\u304C\u3042\u308A\u307E\u305B\u3093\u3002",formMismatch:"\u30D5\u30A9\u30FC\u30E0\u306E\u9001\u4FE1\u5148\u304C\u30DA\u30A4\u30F3\u306E URL \u3068\u4E00\u81F4\u3057\u307E\u305B\u3093\u3002",unsupportedBrowser:"\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u306F\u57CB\u3081\u8FBC\u307F\u30EB\u30FC\u30EB\u3092\u5206\u96E2\u3067\u304D\u307E\u305B\u3093\u3002Chrome 145 \u4EE5\u964D\u304C\u5FC5\u8981\u3067\u3059\u3002",invalidTab:"\u5206\u5272\u691C\u7D22\u30BF\u30D6\u304C\u7121\u52B9\u3067\u3059\u3002",pageClosed:"\u5206\u5272\u691C\u7D22\u30DA\u30FC\u30B8\u306F\u9589\u3058\u3089\u308C\u307E\u3057\u305F\u3002",pageOnly:"\u5206\u5272\u691C\u7D22\u30DA\u30FC\u30B8\u3060\u3051\u304C\u81EA\u8EAB\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002",invalidSender:"\u3053\u306E\u62E1\u5F35\u6A5F\u80FD\u4EE5\u5916\u304B\u3089\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u3059\u3002",invalidSearch:"\u5206\u5272\u691C\u7D22\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u304C\u7121\u52B9\u3067\u3059\u3002",invalidEngine:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u306E\u60C5\u5831\u304C\u7121\u52B9\u3067\u3059\u3002",invalidUpdate:"\u691C\u7D22\u306E\u66F4\u65B0\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u7121\u52B9\u3067\u3059\u3002",missingPane:"\u30DA\u30A4\u30F3\u306F\u9589\u3058\u3089\u308C\u307E\u3057\u305F\u3002",unknownCommand:"\u4E0D\u660E\u306A\u5206\u5272\u691C\u7D22\u64CD\u4F5C\u3067\u3059\u3002",pageChanged:"\u9001\u4FE1\u3092\u78BA\u8A8D\u3059\u308B\u524D\u306B\u30DA\u30FC\u30B8\u304C\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"},batchOpenConfirm:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",postOver:"\u6B63\u5E38\u306B\u9001\u4FE1\u3055\u308C\u307E\u3057\u305F:",postError:"\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F:",copyOver:"\u30B3\u30D4\u30FC\u306B\u6210\u529F\u3057\u307E\u3057\u305F",keywords:"\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",targetUrl:"\u691C\u7D22 URL \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",siteName:"\u30B5\u30A4\u30C8\u540D",siteDesc:"\u8AAC\u660E",siteUrl:"\u30A2\u30C9\u30EC\u30B9",siteIcon:"\u30A2\u30A4\u30B3\u30F3",siteTest:"\u30C6\u30B9\u30C8",siteCancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",siteAdd:"\u8FFD\u52A0",siteType:"\u30AB\u30C6\u30B4\u30EA",siteExist:"\u540C\u3058\u30EB\u30FC\u30EB\u304C\u3059\u3067\u306B\u5B58\u5728\u3057\u307E\u3059\u3002\u30AF\u30ED\u30FC\u30F3\u3068\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",siteAddOver:"\u30B5\u30A4\u30C8\u306F\u6B63\u5E38\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F",multiline:"\u8907\u6570\u884C\u306E\u691C\u7D22\u306F\u6539\u884C\u3067\u533A\u5207\u308B\u3079\u304D\u3067\u3059\u304B? ",multilineTooMuch:"\u884C\u6570\u304C 10 \u884C\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002\u691C\u7D22\u3092\u7D9A\u3051\u307E\u3059\u304B? ",inputPlaceholder:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3",inputTitle:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3\u3001*? \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3001$ \u306F\u7D42\u308F\u308A\u3092\u8868\u3057\u3001^ \u306F\u59CB\u307E\u308A\u3092\u8868\u3057\u307E\u3059\u3001\u30B0\u30EB\u30FC\u30D7 ** \u30B5\u30A4\u30C8\u306F\u5199\u771F\u306A\u3069\u306E\u6307\u5B9A\u3055\u308C\u305F\u30B0\u30EB\u30FC\u30D7\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3067\u304D\u307E\u3059 ** Google\u3001\u6B21\u306E\u9805\u76EE\u3092\u30BF\u30D6\u3057\u307E\u3059",inputKeywords:"\u691C\u7D22\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",inPageTips:`\u30AB\u30B9\u30BF\u30E0\u533A\u5207\u308A\u6587\u5B57: $c \u3068\u533A\u5207\u308A\u6587\u5B57 ($c| \u691C\u7D22 | \u30B8\u30E3\u30F3\u30D1\u30FC\u306A\u3069)\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528
\u5143\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u5206\u96E2\u3055\u308C\u3066\u3044\u307E\u305B\u3093: $o \u3068\u6587\u5B57 (\u30D2\u30FC\u30ED\u30FC\u304C\u597D\u3093\u3060 $oopai \u306A\u3069)
\u6B63\u898F\u8868\u73FE \uFF1A/re/ \u3001$c\u3001/google/i\u3001/aPPle/ \u306A\u3069
\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $t{\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8}\u3001\u305F\u3068\u3048\u3070 linux$t{Linux \u306F Unix \u3067\u306F\u3042\u308A\u307E\u305B\u3093}
\u30AB\u30B9\u30BF\u30E0 \u30B9\u30BF\u30A4\u30EB\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $s{\u80CC\u666F;other}\u3001\u4F8B: google$s{#333333;color:red;}
\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5DE6\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u6B21\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u3001\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524D\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059`,inPagePlaceholder:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22\u3059\u308B\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3057\u3066 Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",pickerBtn:"\u8981\u7D20\u306E\u53D6\u5F97",multiPickerBtn:"\u8981\u7D20\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Ctrl \u307E\u305F\u306F Command \u3092\u62BC\u3057\u305F\u307E\u307E\u7D99\u7D9A\u7684\u306B\u53D6\u5F97\u3057\u307E\u3059",editBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u7DE8\u96C6",emptyBtn:"\u7A7A\u306E\u691C\u7D22\u30C6\u30AD\u30B9\u30C8",copyInPageBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30FC",wordModeBtn:"\u30EF\u30FC\u30C9\u30E2\u30FC\u30C9",copyEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u30B3\u30D4\u30FC",openLinkBtn:"\u9078\u629E\u3057\u305F\u30EA\u30F3\u30AF\u3092\u958B\u304F",maxEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u5C55\u958B",minEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u6298\u308A\u305F\u305F\u3080",expandAll:"\u3059\u3079\u3066\u5C55\u958B",collapseAll:"\u3059\u3079\u3066\u6298\u308A",rename:"\u540D\u524D\u3092\u5909\u66F4",reverseBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u5FA9\u5143",pinBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u4FEE\u6B63\u3001\u3059\u3079\u3066\u306E\u30BF\u30D6\u3067\u691C\u7D22",locBtn:"\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u691C\u7D22",filterSites:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3",searchInPage:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22",removeBtn:"\u691C\u7D22\u8A9E\u3092\u524A\u9664",saveRuleBtn:"\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E\u691C\u7D22\u8A9E\u3092\u4FDD\u5B58",wordContent:"\u5358\u8A9E\u306E\u5185\u5BB9\u3092\u691C\u7D22",wordHide:"\u89AA\u8981\u7D20\u3092\u975E\u8868\u793A",wordHideTips:"\u8981\u7D20\u306E\u6DF1\u3055\u30010 \u304C\u73FE\u5728\u306E\u89AA",wordStyle:"\u691C\u7D22\u30EF\u30FC\u30C9\u30B9\u30BF\u30A4\u30EB",wordTitle:"\u691C\u7D22\u5358\u8A9E\u306E\u6CE8\u91C8",re:"RegExp",ignoreCase:"\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u306F\u533A\u5225\u3055\u308C\u307E\u305B\u3093",filterLink:"\u30D5\u30A3\u30EB\u30BF\u30FC\u30EA\u30F3\u30AF",modify:"\u5909\u66F4",cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",modifyWord:"\u30DA\u30FC\u30B8\u4E0A\u306E\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3057\u307E\u3059",addSearchEngine:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u3092\u8FFD\u52A0",noValidItemAsk:"\u6709\u52B9\u306A\u8981\u7D20\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u30EB\u30FC\u30EB\u3092\u624B\u52D5\u3067\u7DE8\u96C6\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",expand:"\u6B8B\u308A\u306E\u30B5\u30A4\u30C8\u3092\u5C55\u958B\u3057\u307E\u3059",add:"\u8FFD\u52A0",addWord:"\u65B0\u3057\u3044\u5358\u8A9E\u3092\u8FFD\u52A0",wordRange:"\u6709\u52B9\u7BC4\u56F2",customInputFrame:"\u30AB\u30B9\u30BF\u30E0\u691C\u7D22\u30D1\u30E9\u30E1\u30FC\u30BF",customSubmit:"\u691C\u7D22\u3092\u9001\u4FE1",finalSearch:"\u5BFE\u8C61\u306E\u691C\u7D22\u6587\u5B57\u5217",search:"\u3053\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u691C\u7D22",siteKeywords:"\u30AD\u30FC\u30EF\u30FC\u30C9 (| \u3067\u533A\u5207\u3089\u308C\u305F\u8907\u6570\u306E\u30AD\u30FC\u30EF\u30FC\u30C9)",siteMatch:"\u901A\u5E38\u306E\u30B5\u30A4\u30C8 URL \u3068\u4E00\u81F4",openSelect:"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u958B\u304F",openInDefault:"\u30C7\u30D5\u30A9\u30EB\u30C8",openInNewTab:"\u65B0\u3057\u3044\u30BF\u30D6\u304C\u958B\u304D\u307E\u3059",openInCurrent:"\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u304C\u958B\u3044\u3066\u3044\u307E\u3059",currentType:"\u73FE\u5728\u306E\u30AB\u30C6\u30B4\u30EA",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u5FA9\u5143",addAction:"\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0",rollInfo:"\u5165\u529B\u691C\u7D22\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30C8",inputAction:"\u5165\u529B",clickAction:"\u30AF\u30EA\u30C3\u30AF",sleepAction:"\u5F85\u6A5F",copyAction:"\u{1F4C4}\u8981\u7D20\u306E\u30B3\u30D4\u30FC",submitCrawl:"\u2611\uFE0F\u64CD\u4F5C\u3092\u5B8C\u4E86",inputOutput:'\u8981\u7D20 <span title="#t1#" class="element">#t1#</span> \u5185\u306B <span title="#t2#">#t2#</span> \u3092\u5165\u529B\u3057\u307E\u3059',clickOutput:'\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',copyOutput:'\u30B3\u30D4\u30FC\u8981\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u30B9\u30EA\u30FC\u30D7<span title="#t#">#t#</span> \u30DF\u30EA\u79D2',inputNewValue:"\u65B0\u3057\u3044\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",deleteconfirm:"\u3053\u306E\u9805\u76EE\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",sleepPrompt:"\u5F85\u6A5F\u6642\u9593 (\u30DF\u30EA\u79D2)",startCache:"\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u8F9B\u62B1\u5F37\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u8A2D\u5B9A\u30DA\u30FC\u30B8\u306F\u9589\u3058\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 ",cacheOver:"\u3059\u3079\u3066\u306E\u30A2\u30A4\u30B3\u30F3\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u307E\u3057\u305F! ",cspDisabled:"\u30B9\u30AF\u30EA\u30D7\u30C8 \u30B9\u30BF\u30A4\u30EB\u306F\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E CSP \u306B\u3088\u3063\u3066\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3002\u8A31\u53EF\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Allow CSP: Content-Security-Policy \u62E1\u5F35\u6A5F\u80FD\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044",Sunday:"\u65E5\u66DC\u65E5",Monday:"\u6708\u66DC\u65E5",Tuesday:"\u706B\u66DC\u65E5",Wednesday:"\u6C34\u66DC\u65E5",Thursday:"\u6728\u66DC\u65E5",Friday:"\u91D1\u66DC\u65E5",Saturday:"\u571F\u66DC\u65E5",template:"[#t#]\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044",recordAction:"\u23FA\uFE0F\u8A18\u9332\u64CD\u4F5C",startRecord:"\u8A18\u9332\u64CD\u4F5C\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u8A18\u9332\u3092\u7D42\u4E86\u3059\u308B\u306B\u306F Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",loopAction:"\u{1F501}\u30EB\u30FC\u30D7\u306E\u958B\u59CB",loopActionEnd:"\u23F9\uFE0F\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopStart:'\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3002\u30EB\u30FC\u30D7\u6570\u306F <span title="#t#">#t#</span> \u3067\u3059',loopEnd:"\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopTimes:"\u30EB\u30FC\u30D7\u306E\u6570\u3002\u4E00\u81F4\u3059\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u304C\u8D70\u67FB\u3055\u308C\u3001\u9806\u756A\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059",loadingCollection:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",emuInputTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u5165\u529B\u30DC\u30C3\u30AF\u30B9\u306A\u3069) \u306B\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u307E\u3059",emuClickTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u30DC\u30BF\u30F3\u306A\u3069) \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059",emuWaitTips:"\u7D9A\u884C\u3059\u308B\u524D\u306B\u3057\u3070\u3089\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u64CD\u4F5C\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059",emuCopyTips:"\u6307\u5B9A\u3055\u308C\u305F\u8981\u7D20\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059",emuRecordTips:"\u6B21\u306E\u30AF\u30EA\u30C3\u30AF\u3068\u5165\u529B\u64CD\u4F5C\u3092\u8A18\u9332\u3057\u307E\u3059",emuLoopTips:"\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u6B21\u306E\u64CD\u4F5C\u306F\u898B\u3064\u304B\u3063\u305F\u3059\u3079\u3066\u306E\u8981\u7D20\u3092\u8D70\u67FB\u3057\u3001\u6307\u5B9A\u3055\u308C\u305F\u56DE\u6570\u3060\u3051\u7E70\u308A\u8FD4\u3057\u307E\u3059",emuStopTips:"\u64CD\u4F5C\u3092\u7D42\u4E86\u3057\u3066\u30EB\u30FC\u30EB\u3092\u751F\u6210"};break;case"ru":case"ru-RU":_e={import:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",filter:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C",selectAll:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0451",importOrNot:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E?",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",batchOpen:"\u0413\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0439 \u043F\u043E\u0438\u0441\u043A",split:{locale:"ru",title:"SearchJumper \xB7 \u041F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445",button:"\u041F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445",query:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441 \u0438\u043B\u0438 \u0432\u043E\u043F\u0440\u043E\u0441 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u0430\u043D\u0435\u043B\u0435\u0439",search:"\u041D\u0430\u0439\u0442\u0438 / \u0421\u043F\u0440\u043E\u0441\u0438\u0442\u044C",layout:"\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435",columns2:"2 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",rows2:"2 \u0441\u0442\u0440\u043E\u043A\u0438",columns3:"3 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",columns4:"4 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",previous:"\u041D\u0430\u0437\u0430\u0434",next:"\u0412\u043F\u0435\u0440\u0451\u0434",refresh:"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",open:"\u0412\u043A\u043B\u0430\u0434\u043A\u0430",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",retry:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",running:"\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026",done:"\u0413\u043E\u0442\u043E\u0432\u043E",error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",empty:"\u0412\u0441\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044B. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u043E\u0432.",timeout:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0433\u043E\u0442\u043E\u0432\u0430. \u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0438\u043B\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0430 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443.",skipped:"\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u044D\u0442\u0438 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u043E\u0431\u044B\u0447\u043D\u043E\u0435 \u043C\u0435\u043D\u044E: ",divider:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u043F\u0430\u043D\u0435\u043B\u0435\u0439",pages:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B",results:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430",ended:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0435\u0430\u043D\u0441. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0438\u0441\u043A \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u043E\u0432.",noEngines:"\u0412 \u044D\u0442\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u043D\u0435\u0442 \u0432\u0435\u0431-\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u043E\u0432 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445.",httpOnly:"\u0412 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E HTTP(S)-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0431\u0435\u0437 \u0438\u043C\u0435\u043D\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438 \u043F\u0430\u0440\u043E\u043B\u044F \u0432 \u0430\u0434\u0440\u0435\u0441\u0435.",invalidRequest:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0430.",invalidActions:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0430.",missingForm:"\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u0430\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B.",formMismatch:"\u0410\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u043C \u043F\u0430\u043D\u0435\u043B\u0438.",unsupportedBrowser:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044E \u043F\u0440\u0430\u0432\u0438\u043B \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u044F. \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F Chrome 145 \u0438\u043B\u0438 \u043D\u043E\u0432\u0435\u0435.",invalidTab:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445.",pageClosed:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u0443\u0436\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u0430.",pageOnly:"\u0422\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0441\u0432\u043E\u0439 \u0441\u0435\u0430\u043D\u0441.",invalidSender:"\u0417\u0430\u043F\u0440\u043E\u0441 \u043F\u043E\u0441\u0442\u0443\u043F\u0438\u043B \u043D\u0435 \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F.",invalidSearch:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445.",invalidEngine:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0430.",invalidUpdate:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0438\u0441\u043A\u0430.",missingPane:"\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u0436\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u0430.",unknownCommand:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0432 \u043F\u0430\u043D\u0435\u043B\u044F\u0445.",pageChanged:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C \u0434\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438. \u041F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443."},batchOpenConfirm:"\u0418\u0441\u043A\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u0441\u0435\u0445 \u0434\u0432\u0438\u0436\u043A\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E",keywords:"Input keywords",targetUrl:"Input URL",siteName:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",siteDesc:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",siteUrl:"URL",siteIcon:"\u0418\u043A\u043E\u043D\u043A\u0430",siteTest:"\u0422\u0435\u0441\u0442",siteCancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",siteAdd:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",siteType:"\u0413\u0440\u0443\u043F\u043F\u0430",siteExist:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A \u043A\u043B\u043E\u043D?",siteAddOver:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D",multiline:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A?",multilineTooMuch:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u043E\u043A \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 10. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A?",inputPlaceholder:"\u0424\u0438\u043B\u044C\u0442\u0440\u044B",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"\u0414\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter",pickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C",multiPickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u043B\u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Ctrl \u0438\u043B\u0438 Command",editBtn:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u0441\u043A\u0430",emptyBtn:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430",copyInPageBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u043A\u0430",wordModeBtn:"\u0420\u0435\u0436\u0438\u043C \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u043B\u043E\u0432\u0430\u043C. \u0412 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0446\u0435\u043B\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043A\u0430\u0442\u044C\u0441\u044F \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",copyEleBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",openLinkBtn:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438",maxEleBtn:"\u0420\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",minEleBtn:"\u0421\u0436\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",expandAll:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",collapseAll:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u043E\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0432\u043E \u0432\u0441\u0435\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u0445",locBtn:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438",filterSites:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0432\u0438\u0436\u043A\u0438",searchInPage:"\u0418\u0441\u043A\u0430\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",removeBtn:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430",saveRuleBtn:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430",wordContent:"\u0421\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430",wordHide:"Hide parent element",wordHideTips:"\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, 0 - \u044D\u0442\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",wordStyle:"\u0421\u0442\u0438\u043B\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043B\u043E\u0432\u0430",wordTitle:"\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F \u043A \u0438\u0441\u043A\u043E\u043C\u043E\u043C\u0443 \u0441\u043B\u043E\u0432\u0443",re:"RegExp",ignoreCase:"\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440",filterLink:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",modify:"\u0413\u043E\u0442\u043E\u0432\u043E",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",modifyWord:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",addSearchEngine:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0432\u0438\u0436\u043E\u043A",noValidItemAsk:"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0425\u043E\u0442\u0438\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0430\u0439\u0442?",expand:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044B",add:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",addWord:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",wordRange:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u0430",customInputFrame:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0438\u0441\u043A\u0430",customSubmit:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C",finalSearch:"\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",search:"\u0418\u0441\u043A\u0430\u0442\u044C \u044D\u0442\u043E",siteKeywords:"\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (\u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C |)",siteMatch:"Regexp \u0434\u043B\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F URL \u0441\u0430\u0439\u0442\u0430",openSelect:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432",openInDefault:"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",openInNewTab:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",openInCurrent:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",currentType:"Current",maxAddSiteBtn:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",minAddSiteBtn:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",addAction:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",crawlInfo:"\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",inputAction:"\u0412\u0432\u043E\u0434",clickAction:"\u041A\u043B\u0438\u043A \u043C\u044B\u0448\u0438",sleepAction:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",copyAction:"\u{1F4C4}\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442",submitCrawl:"\u2611\uFE0F\u0417\u0430\u0432\u0435\u0448\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",inputOutput:'\u0412\u0432\u043E\u0434 <span title="#t2#">#t2#</span> \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t1#" class="element">#t1#</span>',clickOutput:'\u041A\u043B\u0438\u043A \u043F\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 <span title="#t#" class="element">#t#</span>',dblclickOutput:'\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A <span title="#t#" class="element">#t#</span>',rclickOutput:'\u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u041F\u041A\u041C <span title="#t#" class="element">#t#</span>',copyOutput:'\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t#" class="element">#t#</span>',sleepOutput:'\u0416\u0434\u0430\u0442\u044C <span title="#t#">#t#</span> \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434',inputNewValue:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",deleteConfirm:"\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442? ",sleepPrompt:"\u0412\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F (\u0432 \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445)",startCache:"\u041D\u0430\u0447\u0430\u043B\u043E\u0441\u044C \u043A\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443!",cacheOver:"\u0412\u0441\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u044B!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "#t#"',recordAction:"\u23FA\uFE0F\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",startRecord:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F. \u041F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter, \u0447\u0442\u043E\u0431\u044B \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043E\u043A\u043D\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.",loopAction:"\u{1F501}\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B",loopActionEnd:"\u23F9\uFE0F\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopStart:'\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B <span title="#t#">#t#</span> \u0440\u0430\u0437',loopEnd:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopTimes:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u043A\u043B\u043E\u0432, \u0432\u0441\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u044B \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 \u043F\u043E\u043B\u044F \u0432\u0432\u043E\u0434\u0430).",emuClickTips:"\u041A\u043B\u0438\u043A\u043D\u0443\u0442\u044C \u043F\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435)",emuWaitTips:"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C. \u041F\u043E\u043B\u0435\u0437\u043D\u043E, \u043A\u043E\u0433\u0434\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F",emuCopyTips:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",emuRecordTips:"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0432\u0432\u043E\u0434\u0430",emuLoopTips:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0446\u0438\u043A\u043B, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C\u0441\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0437",emuStopTips:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"};break;default:_e={import:"Import",filter:"Filter",selectAll:"SelectAll",importOrNot:"Do you want to import this config?",settings:"Settings",batchOpen:"Batch open",split:{locale:"en",title:"SearchJumper \xB7 Split search",button:"Split search",query:"Search or ask all engines",search:"Search / Ask",layout:"Layout",columns2:"2 columns",rows2:"2 rows",columns3:"3 columns",columns4:"4 columns",previous:"Previous",next:"Next",refresh:"Refresh",open:"Open tab",close:"Close",retry:"Retry",loading:"Loading\u2026",running:"Sending\u2026",done:"Ready",error:"Unable to load",empty:"All panes are closed. Start another split search from an engine group.",timeout:"The page is not ready. Sign in in a new tab, or check the engine rule and retry.",skipped:"These engines use their original entry: ",divider:"Resize panes",pages:"Pages",results:"Search results",ended:"Unable to open this split session. Start another split search from an engine group.",noEngines:"No web engines are available for split search in this group.",httpOnly:"Only HTTP(S) web pages without a username or password in the URL can be embedded.",invalidRequest:"Invalid search request. Check the engine rule.",invalidActions:"Invalid automation actions. Check the engine rule.",missingForm:"Missing form destination.",formMismatch:"Form destination does not match the pane.",unsupportedBrowser:"This browser cannot isolate embedding rules. Chrome 145 or newer is required.",invalidTab:"Invalid split tab.",pageClosed:"The split page is no longer open.",pageOnly:"Only the split page can change its session.",invalidSender:"The request is not from this extension.",invalidSearch:"Invalid split search parameters.",invalidEngine:"Invalid engine information.",invalidUpdate:"Invalid search update.",missingPane:"The pane has already been closed.",unknownCommand:"Unknown split command.",pageChanged:"The page changed before submission was confirmed. Retry if needed."},batchOpenConfirm:"Batch open urls?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"Copied successfully",keywords:"Input keywords",targetUrl:"Input URL",siteName:"Site Name",siteDesc:"Description",siteUrl:"Site Url",siteIcon:"Site Icon",siteTest:"Test",siteCancel:"Cancel",siteAdd:"Add",siteType:"Category",siteExist:"Site is already exist, add it as clone?",siteAddOver:"Site added successfully",multiline:"Search as multilines?",multilineTooMuch:"The number of lines exceeds 10, do you want to continue searching?",inputPlaceholder:"Filter engines",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"Enter search keywords",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"Input text, press Enter to find in the page",pickerBtn:"Pick a element",multiPickerBtn:"Pick a element, pick multi elements with Ctrl or Command",editBtn:"Edit search text",emptyBtn:"Empty search text",copyInPageBtn:"Copy search text",wordModeBtn:"Word mode",copyEleBtn:"Copy selected elements",openLinkBtn:"Open selected links",maxEleBtn:"Expand selected elements",minEleBtn:"Collapse selected elements",expandAll:"Expand All",collapseAll:"Collapse All",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"Pin search text to search in all tabs",locBtn:"Sidebar to locate",filterSites:"Search engines",searchInPage:"Find in page",removeBtn:"Remove search term",saveRuleBtn:"Save the search term of the current site",wordContent:"Search word content",wordHide:"Hide parent element",wordHideTips:"Element depth, 0 means the current",wordStyle:"Search word style",wordTitle:"Search word annotation",re:"RegExp",ignoreCase:"Ignore case",filterLink:"Filter link",modify:"Modify",cancel:"Cancel",modifyWord:"Modify search word",addSearchEngine:"Add search engine",noValidItemAsk:"No valid element found, do you want to manually edit the rule and add it?",expand:"Expand other sites",add:"Add",addWord:"Add new word",wordRange:"Effective range",customInputFrame:"Custom search parameters",customSubmit:"Submit",finalSearch:"Target search string",search:"Search this",siteKeywords:"Keywords(split by |)",siteMatch:"Regexp to match site URL",openSelect:"Open option",openInDefault:"Default",openInNewTab:"Open a new tab",openInCurrent:"Open in current",currentType:"Current",maxAddSiteBtn:"Maximize",minAddSiteBtn:"Restore",addAction:"Add Actions",crawlInfo:"Analog input search",inputAction:"Input",clickAction:"Click",sleepAction:"Wait",copyAction:"\u{1F4C4}Copy element",submitCrawl:"\u2611\uFE0FComplete operation",inputOutput:'Input <span title="#t2#">#t2#</span> in the element <span title="#t1#" class="element">#t1#</span>',clickOutput:'Click on element <span title="#t#" class="element">#t#</span>',dblclickOutput:'Double click <span title="#t#" class="element">#t#</span>',rclickOutput:'Right click <span title="#t#" class="element">#t#</span>',copyOutput:'Copy element <span title="#t#" class="element">#t#</span>',sleepOutput:'Sleep for <span title="#t#">#t#</span> milliseconds',inputNewValue:"Please enter a new value",deleteConfirm:"Are you sure you want to delete this item? ",sleepPrompt:"Wait time (milliseconds)",startCache:"Start cache icons of engines, do not close this page!",cacheOver:"All icons cached!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'Please set the value of "#t#"',recordAction:"\u23FA\uFE0FRecord operation",startRecord:"Start to record operation, press Enter to end",loopAction:"\u{1F501}Start loop",loopActionEnd:"\u23F9\uFE0FStop loop",loopStart:'Start loop <span title="#t#">#t#</span> times',loopEnd:"Stop loop",loopTimes:"Number of loops, all matching elements will be traversed and executed sequentially",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"Enter search terms in specified page elements (such as input boxes)",emuClickTips:"Click on a specified page element (such as a button)",emuWaitTips:"Wait for a while before continuing, useful when an operation takes a while to complete",emuCopyTips:"Copy the text of the specified element to the clipboard",emuRecordTips:"Record the next clicks and input operations",emuLoopTips:"Start the loop, the next operation will traverse all found elements and repeat the specified number of times",emuStopTips:"End the operation and generate rules"};break}}function D(l,e){return _e[l]?e?_e[l].replace(/#t#/g,e).replace(/#t1#/g,e[0]).replace(/#t2#/g,e[1]):_e[l]:l}const Yt="ontouchstart"in document.documentElement;var Lr=!Ue&&!Ye?.ok;let Ke=null;function ct(){Ke&&Ke.throwIfAborted()}var fe=(l,e)=>{Lr&&console.log(`%c\u3010SearchJumper v.${Lt.script.version}\u3011 ${e||"debug"}`,"color: orange;font-size: large;font-weight: bold;",l)},Ze=!1,pt=!1,xi;function Zi(l="",e){const t=e||document,i=t.createDocumentFragment();return l==null||l===""||Ar(String(l),i,t),i}let Xi=!0,Wt=!0,Jt,Rt;const Pr="searchjumper_default",Qi="http://www.w3.org/2000/svg",Mr={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Nr={script:!0,style:!0,textarea:!0,title:!0,xmp:!0,plaintext:!0,noscript:!0},er={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0"};function tr(l){return l.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g,function(e,t){if(t[0]==="#"){const r=t[1]==="x"||t[1]==="X",n=parseInt(t.slice(r?2:1),r?16:10);if(!isNaN(n))try{return String.fromCodePoint(n)}catch{}return"&"+t+";"}const i=t.toLowerCase();return i in er?er[i]:"&"+t+";"})}function Ar(l,e,t){const i=[e],r=/<!--[\s\S]*?-->|<!doctype[^>]*>|<\/?[a-zA-Z][^>]*>|[^<]+/gi;let n;for(;n=r.exec(l);){const a=n[0];if(a[0]!=="<"){const M=tr(a);M&&i[i.length-1].appendChild(t.createTextNode(M));continue}if(a.indexOf("<!--")===0||/^<!doctype/i.test(a))continue;if(a[1]==="/"){const M=a.slice(2,-1).trim().toLowerCase();for(let E=i.length-1;E>0;E--){const v=i[E];if(v.nodeType===1&&v.nodeName.toLowerCase()===M){i.length=E;break}}continue}const s=/^<\s*([^\s/>]+)/.exec(a);if(!s)continue;const o=s[1],p=o.toLowerCase(),h=i[i.length-1],d=h.nodeType===1&&h.namespaceURI===Qi||p==="svg"?t.createElementNS(Qi,o):t.createElement(p),f=a.replace(/^<\s*[^\s/>]+/,"").replace(/\/?>$/,"");if(f){const M=/([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;let E;for(;E=M.exec(f);){const v=E[1],k=tr(E[2]||E[3]||E[4]||"");d.setAttribute(v,k)}}if(h.appendChild(d),!a.endsWith("/>")&&!Mr[p]&&(i.push(d),Nr[p])){const M=new RegExp("<\\/\\s*"+p+"\\s*>","ig");M.lastIndex=r.lastIndex;const E=M.exec(l);if(E){const v=l.slice(r.lastIndex,E.index);v&&d.appendChild(t.createTextNode(v)),r.lastIndex=E.index+E[0].length,i.pop()}}}}function Br(){if(!Wt)return null;if(Rt)return Jt;const l=Le&&Le.trustedTypes&&Le.trustedTypes.createPolicy;if(typeof l!="function")return Wt=!1,null;try{Jt=l(Pr,{createHTML:(e,t)=>e,createScriptURL:e=>e,createScript:e=>e})}catch{}return Rt=Jt&&Jt.createHTML,Rt||(Wt=!1),Jt}function $r(l,e){if(!Xi)return!1;try{return l.innerHTML=e,!0}catch{return Xi=!1,!1}}function Wr(l,e){if(!Wt||(Br(),!Rt))return!1;try{return l.innerHTML=Rt(e),!0}catch{return Wt=!1,!1}}function ie(l,e,t){if(!l)return;const i=e==null?"":String(e);if($r(l,i)||Wr(l,i))return;const r=t||l.ownerDocument||document,n=Zi(i,r);for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(n)}function Jr(l,e,t){if(!l||!l.parentNode)return;const i=t||l.ownerDocument||document,r=Zi(e,i);l.parentNode.insertBefore(r,l),l.parentNode.removeChild(l)}var We,mt,Ce,qe,ye,Be,Lt,Xe;if(typeof GM_xmlhttpRequest<"u")We=GM_xmlhttpRequest,Xe=!0;else if(typeof GM<"u"&&typeof GM.xmlHttpRequest<"u")We=GM.xmlHttpRequest,Xe=!0;else{let l;We=e=>{fetch(e.url,{method:e.method||"GET",body:e.data,headers:e.headers,credentials:e.anonymous?"omit":"same-origin",referrerPolicy:e.referrerPolicy,redirect:e.redirect}).then(t=>(l=t,e.responseType==="blob"?t.blob():t.text())).then(t=>{let i=document.implementation.createHTMLDocument("");ie(i.documentElement,t,i),e.onload&&e.onload({status:l.status,response:t,responseText:typeof t=="string"?t:void 0,responseXML:i})}).catch(t=>e.onerror&&e.onerror(t))}}Xe?Xe=async(l,e)=>l?(xi=l,new Promise((t,i)=>{let r=e&&/^post$/i.test(e.method),n={method:e&&e.method||"GET",url:l,headers:e&&e.headers||{referer:l,origin:l,"Content-Type":r?"application/x-www-form-urlencoded":"","X-Requested-With":r?"XMLHttpRequest":""},onload:function(a){if(xi!=l)return;let s=a.response;(a.status>=400||!s)&&(s=""),t({text:()=>new Promise(h=>{h(s)}),json:()=>new Promise(h=>{try{h(JSON.parse(s))}catch{h(null)}}),finalUrl:a.finalUrl||l})},onerror:function(a){fe(a),i(a)},ontimeout:function(a){fe(a),i(a)}};e&&e.body&&(n.data=e.body),e&&e.responseType==="stream"&&(n.responseType="stream",delete n.onload,n.onloadstart=a=>{if(!a||!a.response||!a.response.getReader)return;let s=[],o,p;const h=a.response.getReader();let u=()=>{let m="";try{return p&&(m=p.trim(),/^data:/.test(m)?m="["+m.replace(/^data:\s+\[DONE\]\s*/m,"").trim().replace(/\n+/g,`
`).split(`
`).map(d=>d.replace(/^data:/,"")).join(",")+"]":/^({.*} *\n)* *{.*}$/.test(m)?m=m.split(`
`).pop():/^\[[\s\S]+[^\]]$/.test(m)&&(m=m+"]")),JSON.parse(m)}catch{return null}};h.read().then(function m({done:d,value:f}){if(xi==l){if(d){t({text:p,json:u,finalUrl:a.finalUrl||l});return}s=e.streamMode==="standalone"?Array.from(f):s.concat(Array.from(f));try{p=new TextDecoder("utf-8").decode(new Uint8Array(s)),e.onstream({text:p,json:u,finalUrl:a.finalUrl||l})}catch(w){console.log(w)}return h.read().then(m)}})}),We(n)})):null:Xe=fetch,Et?mt=(l,e)=>{}:typeof GM_registerMenuCommand<"u"?mt=GM_registerMenuCommand:typeof GM<"u"&&typeof GM.registerMenuCommand<"u"?mt=GM.registerMenuCommand:mt=(l,e)=>{},typeof GM_openInTab<"u"?ye=GM_openInTab:typeof GM<"u"&&typeof GM.openInTab<"u"?ye=GM.openInTab:ye=(l,e)=>{window.open(l)},typeof GM_notification<"u"?Ce=l=>GM_notification({text:l,onclick:e=>ye(lt,{active:!0})}):typeof GM<"u"&&typeof GM.notification<"u"?Ce=l=>GM.notification({text:l,onclick:e=>ye(lt,{active:!0})}):Ce=l=>{},typeof GM_setClipboard<"u"?qe=GM_setClipboard:typeof GM<"u"&&typeof GM.setClipboard<"u"?qe=GM.setClipboard:qe=(l,e)=>{try{Ir.writeText(l).then(()=>{console.log("Text copied to clipboard")}).catch(t=>{document.execCommand("copy"),console.error("Failed to copy text: ",t)})}catch{document.execCommand("copy")}},Be=l=>{if(l=l.replace(/\n\s*/g,""),typeof GM_addStyle<"u")return GM_addStyle(l);{let e=document.createElement("style");return ie(e,l),document.head.appendChild(e),e}},typeof GM_info<"u"?Lt=GM_info:typeof GM<"u"&&typeof GM.info<"u"?Lt=GM.info:Lt={script:{name:"SearchJumper",version:0}},Le.searchJumperAddons||(Le.searchJumperAddons=[]);const _t=document.referrer;let ue=location.href.slice(0,500);var V={supportGM:typeof GM_getValue=="function"&&typeof GM_getValue("a","b")<"u",supportGMPromise:typeof GM<"u"&&typeof GM.getValue=="function"&&typeof GM.getValue("a","b")<"u",supportCrossSave:function(){return this.supportGM||this.supportGMPromise},listItemCache:[],mxAppStorage:(function(){try{return window.external.mxGetRuntime().storage}catch{}})(),operaUJSStorage:(function(){try{return window.opera.scriptStorage}catch{}})(),setItem:function(l,e,t=!1){if(this.supportGMPromise)return e===""&&typeof GM.deleteValue=="function"?GM.deleteValue(l):GM.setValue(l,e);this.supportGM?(GM_setValue(l,e),e===""&&typeof GM_deleteValue<"u"&&GM_deleteValue(l)):this.operaUJSStorage?this.operaUJSStorage.setItem(l,e):this.mxAppStorage?this.mxAppStorage.setConfig(l,e):window.localStorage&&window.localStorage.setItem(l,e)},getItem:async function(l,e){var t;return this.supportGMPromise?t=await GM.getValue(l):this.supportGM?t=GM_getValue(l):this.operaUJSStorage?t=this.operaUJSStorage.getItem(l):this.mxAppStorage?t=this.mxAppStorage.getConfig(l):window.localStorage&&(t=window.localStorage.getItem(l)),e&&e(t),t},getListItem:async function(l,e){var t=this.listItemCache[l];if(typeof t>"u"&&(t=await this.getItem(l),this.listItemCache[l]=t||null),!t)return null;for(var i=0;i<t.length;i++){let r=t[i];if(r.k==e)return r.v}return null},setListItem:async function(l,e,t){var i=this.listItemCache[l];typeof i>"u"&&(i=await this.getItem(l)),i||(i=[]),i=i.filter(r=>r&&r.k!=e),t&&(i.unshift({k:e,v:t}),i.length>50&&i.pop()),this.setItem(l,i),this.listItemCache[l]=i}};function Zt(l,e,t){const i=r=>{const n=new URL(r);if(n.username||n.password)throw new Error("Invalid configuration URL");return n.protocol+"//"+n.host+n.pathname.replace(/\/index\.html$/,"/").replace(/\/$/,"")};try{const r=i(l);return["https://search.hoothin.com/config/","https://hoothin.github.io/SearchJumper/","http://localhost:3000/",e,t].filter(Boolean).some(n=>{try{return i(n)===r}catch{return!1}})}catch{return!1}}function Rr(l,e,t){const i=v=>JSON.parse(JSON.stringify(v)),r=v=>{const k=i(v);if(k.webdavConfig){const{host:g,username:T,path:B,password:W}=k.webdavConfig;k.webdavConfig={host:g,username:T,path:B,hasPassword:typeof W=="string"}}return k},n=v=>{if(!v||!Array.isArray(v.sitesConfig)||!v.prefConfig||typeof v.prefConfig!="object"||Array.isArray(v.prefConfig))throw new Error("Invalid configuration")},a=(v,k)=>JSON.stringify(v)===JSON.stringify(k),s=v=>{try{return JSON.parse(v)}catch{throw new Error("Invalid server response")}},o=v=>{const k=new URL(v);if(!/^https?:$/.test(k.protocol)||k.username||k.password||k.search||k.hash)throw new Error("Invalid WebDAV server");return k.href.replace(/\/+$/,"")},p=(v,k,g=!1)=>{if(!v||typeof v.host!="string"||typeof v.username!="string")throw new Error("Invalid WebDAV account");const T=o(v.host),B="/"+(v.path||"").replace(/^\/+|\/+$/g,"");if(B.split("/").some(z=>{const $=decodeURIComponent(z);return $==="."||$===".."||/[\\?#/]/.test($)}))throw new Error("Invalid WebDAV directory");const W=typeof v.password=="string"?v.password:k&&o(k.host)===T&&k.username===v.username?k.password:void 0;if(!g&&typeof W!="string")throw new Error("Enter the WebDAV password");return{host:T,username:v.username,password:W,path:B}},h=v=>"/SearchJumper"+(v.path||"/").replace(/\/+$/,""),u=async(v,k,g,T,B=!1)=>{const W=btoa(Array.from(new TextEncoder().encode(v.username+":"+v.password),C=>String.fromCharCode(C)).join("")),z=o(v.host)+g.split("/").map(C=>encodeURIComponent(decodeURIComponent(C))).join("/"),$=await t(z,{method:k,body:T,headers:{Authorization:"Basic "+W,"Content-Type":k==="PUT"?"application/json; charset=utf-8":"text/xml; charset=utf-8",...k==="PROPFIND"?{Depth:"0"}:{}},redirect:"follow",credentials:"omit",referrerPolicy:"no-referrer"});if(B&&$.status===404)return null;if($.status<200||$.status>=300)throw new Error("WebDAV request failed ("+$.status+")");return $.text},m=(v,k,g,T,B)=>u(v,k,h(v)+"/"+g,T,B),d=async v=>{let k="";for(const g of h(v).split("/").filter(Boolean))k+="/"+g,await u(v,"PROPFIND",k+"/",void 0,!0)===null&&await u(v,"MKCOL",k+"/")},f=async(v,k)=>{await d(v),await m(v,"PUT","sitesConfig.json",JSON.stringify(k.sitesConfig)),await m(v,"PUT","inPageRule.json",JSON.stringify(k.prefConfig.inPageRule||{})),await m(v,"PUT","lastModified",String(k.lastModified||0))},w=async(v,k,g)=>{if(g){const B=k.lastModified?k:{...k,lastModified:Date.now()};return await f(v,B),B}await d(v);const T=Number(await m(v,"GET","lastModified",void 0,!0));if(!Number.isFinite(T)||T<0)throw new Error("Invalid synchronized timestamp");if(T>(k.lastModified||0)){const B=await m(v,"GET","sitesConfig.json",void 0,!0),W=await m(v,"GET","inPageRule.json",void 0,!0),z=i(k);if(B!==null&&(z.sitesConfig=s(B)),W!==null){const $=s(W);if(!$||typeof $!="object"||Array.isArray($))throw new Error("Invalid synchronized rules");z.prefConfig.inPageRule=$}return z.lastModified=T,n(z),z}if(!T||k.lastModified>T){const B=k.lastModified?k:{...k,lastModified:Date.now()};return await f(v,B),B}return k},M=async(v,k={})=>{const g=await l();if(n(g),v==="get")return r(g);if(v==="save"||v==="import"){const T=i(k.searchData);n(T);let B;if(v==="import")B=T,T.webdavConfig&&(B.webdavConfig=p(T.webdavConfig,g.webdavConfig,!0));else{B=i(g);const W=k.base||{};for(const z of Object.keys(T))if(!["webdavConfig","__proto__","constructor","prototype"].includes(z)){if(z==="prefConfig"){for(const $ of new Set([...Object.keys(W.prefConfig||{}),...Object.keys(T.prefConfig)]))if(!(["__proto__","constructor","prototype"].includes($)||a(T.prefConfig[$],W.prefConfig?.[$]))){if(W.prefConfig&&!a(g.prefConfig[$],W.prefConfig[$])&&!a(g.prefConfig[$],T.prefConfig[$]))throw new Error("This setting changed in another page; reload and retry");Object.hasOwn(T.prefConfig,$)?B.prefConfig[$]=T.prefConfig[$]:delete B.prefConfig[$]}}else if(!a(T[z],W[z])){if(Object.hasOwn(W,z)&&z!=="lastModified"&&!a(g[z],W[z])&&!a(g[z],T[z]))throw new Error("This configuration changed in another page; reload and retry");B[z]=T[z]}}}return await e(B),r(B)}if(v==="disconnect"){const T={...g,webdavConfig:null};return await e(T),r(T)}if(v==="configure"||v==="createAccount"){let T=k,B="";if(v==="createAccount"){const I=await t("https://search.hoothin.com/api.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"action=getUser",credentials:"omit",referrerPolicy:"no-referrer"});if(I.status!==200)throw new Error("Account request failed ("+I.status+")");const S=s(I.text);if(S.result!==1)throw new Error(String(S.message||"Account request failed"));T={host:"https://webdav.hoothin.com",username:S.username,password:S.password,path:"/"},B=String(S.message||""),T.password&&(B=B.split(T.password).join("[redacted]"))}const W=p(T,g.webdavConfig),z=await w(W,g),$=await l();if(!a($.sitesConfig,g.sitesConfig)||!a($.prefConfig.inPageRule,g.prefConfig.inPageRule)||!a($.webdavConfig,g.webdavConfig))throw new Error("Configuration changed during synchronization; please retry");const C={...$,sitesConfig:z.sitesConfig,prefConfig:{...$.prefConfig,inPageRule:z.prefConfig.inPageRule},lastModified:z.lastModified,webdavConfig:W};return await e(C),{searchData:r(C),message:B}}if(v==="sync"){if(!g.webdavConfig)return r(g);const T=p(g.webdavConfig,g.webdavConfig),B=await w(T,g,!!k.uploadOnly);if(B!==g){const W=await l();if(!a(W.sitesConfig,g.sitesConfig)||!a(W.prefConfig.inPageRule,g.prefConfig.inPageRule)||!a(W.webdavConfig,g.webdavConfig))throw new Error("Configuration changed during synchronization; please retry");await e({...W,sitesConfig:B.sitesConfig,prefConfig:{...W.prefConfig,inPageRule:B.prefConfig.inPageRule},lastModified:B.lastModified})}return r(await l())}if(v==="shareGet"||v==="shareSet"){const T=g.webdavConfig&&p(g.webdavConfig,g.webdavConfig);if(!T||T.host!=="https://webdav.hoothin.com"||!["sharePass","shareTitle"].includes(k.name))throw new Error("Invalid sharing operation");if(v==="shareSet"&&typeof k.value!="string")throw new Error("Invalid sharing value");return await m(T,v==="shareGet"?"GET":"PUT",k.name,k.value,v==="shareGet")||""}if(v==="syncFile"){if(!g.webdavConfig||!["GET","PUT"].includes(k.method)||!["lastModified","sitesConfig.json","inPageRule.json"].includes(k.path)||k.method==="PUT"&&typeof k.body!="string")throw new Error("Invalid synchronization request");return await m(p(g.webdavConfig,g.webdavConfig),k.method,k.path,k.body,k.method==="GET")||""}throw new Error("Unknown configuration operation")};let E=Promise.resolve();return(v,k)=>{k&&(k=i(k));const g=E.then(()=>M(v,k));return E=g.catch(()=>{}),g}}const Dr=Rr(async()=>await V.getItem("searchData")||c,l=>V.setItem("searchData",l),(l,e)=>new Promise((t,i)=>{We({url:l,method:e.method,data:e.body,headers:e.headers,anonymous:!0,redirect:e.redirect,referrerPolicy:"no-referrer",timeout:3e4,onload:r=>t({status:r.status,text:r.responseText}),onerror:()=>i(new Error("Network request failed")),ontimeout:()=>i(new Error("Network request timed out"))})}));async function Xt(l,e){return Dr(l==="saveData"?"save":l,e)}async function Qt(l,e){if(ke)return;let t=await V.getItem("searchData");t&&(c=t);let i=!0;if(c.webdavConfig&&!e)try{await Xt("sync"),c=await V.getItem("searchData"),Ot=c.lastModified}catch(r){i=!1,Ce("Synchronization failed: "+r.message)}try{const r=JSON.parse(JSON.stringify(c)),n=l&&await l();await Xt("saveData",{searchData:c,base:r}),c=await V.getItem("searchData"),typeof n=="function"&&await n(),c.webdavConfig&&i&&await Xt("sync",{uploadOnly:!0})}catch(r){Ce("Could not save or synchronize configuration: "+r.message)}}const Ci=Object.getPrototypeOf(async function(){}).constructor;typeof String.prototype.replaceAll!="function"&&(String.prototype.replaceAll=function(l,e){var t=this;return t.split(l).join(e)}),typeof String.prototype.endsWith!="function"&&(String.prototype.endsWith=function(l,e){return(e===void 0||e>this.length)&&(e=this.length),this.substring(e-l.length,e)===l}),typeof String.prototype.startsWith!="function"&&(String.prototype.startsWith=function(l,e){return this.slice(e||0,l.length)===l});function Q(l){return l.body||l.querySelector("body")}function vt(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientX:0:l.clientX}function xt(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientY:0:l.clientY}function zr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageX:0:l.pageX}function Or(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageY:0:l.pageY}function Hr(l,e,t){t=t||document,e=e||t;var i=[];try{for(var r=t.evaluate(l,e,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),n=0;n<r.snapshotLength;n++){var a=r.snapshotItem(n);a.nodeType===1&&i.push(a)}}catch{fe(`Invalid xpath: ${l}`)}return i}function Fr(l,e,t){t=t||document,e=e||t;try{let i=(n,a,s)=>{let o=a.evaluate(n,s,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);return o.singleNodeValue&&o.singleNodeValue.nodeType===1&&o.singleNodeValue},r=l.split(" =>> ");if(r.length===2){let n=i(r[0],t,e);if(n&&n.shadowRoot)return i(r[1],n.shadowRoot,n.shadowRoot)}else return i(l,t,e)}catch{return fe(`Invalid xpath: ${l}`),!1}}function ir(l){return l?/^\(*(descendant::|\.\/|\/\/|id\()/.test(l):!1}function Si(l,e,t){e||(e=document);try{if(!ir(l))return e.querySelectorAll(l)}catch(i){fe(i,"Error selector")}return Hr(l,t,e)}function Pt(l,e){e||(e=document);try{if(!ir(l)){let t=l.split(" =>> ");if(t.length===2){let i=e.querySelector(t[0]);return i&&i.shadowRoot&&i.shadowRoot.querySelector(t[1])}else return e.querySelector(l)}}catch(t){fe(t)}return Fr(l,e,e)}function Ur(l,e){for(var t=l.offsetTop,i=l.offsetParent;i;)t+=i.offsetTop,i=i.offsetParent;if(e){for(i=e;i;)t+=i.offsetTop,i=i.offsetParent;try{let r=e.contentWindow.parent;for(e=r.frameElement;e;){for(i=e;i;)t+=i.offsetTop,i=i.offsetParent;r=r.parent,e=r.frameElement}}catch{}}return t}function Ss(l){for(var e=l.offsetLeft,t=l.offsetParent;t;)e+=t.offsetLeft,t=t.offsetParent;if(!document.isSameNode(l.ownerDocument)){let i=document.getElementsByTagName("iframe");for(let r=0;r<i.length;r++){let n=i[r],a;try{a=n.contentDocument||n.contentWindow.document}catch{break}if(a.isSameNode(l.ownerDocument)){for(t=n;t;)e+=t.offsetLeft,t=t.offsetParent;break}}}return e}function ki(l){const e=l.activeElement;return e?e.shadowRoot?ki(e.shadowRoot):e:null}async function Qe(l,e=l.dataset.src){e&&(l.referrerPolicy="no-referrer",e&&e!=="fail"&&(l.src=e),delete l.dataset.src)}function Kr(l,e){let t=new Image;const i=()=>{t.onload=null,t.onerror=null,t=null};t.onload=function(){typeof e=="function"&&e(),i()},t.onerror=function(){i()},t.src=l}function Ti(l){if(l&&(/INPUT|TEXTAREA/i.test(l.nodeName)&&l.getAttribute("aria-readonly")!="true"||l.contentEditable=="true"))return!0;for(;l&&l.nodeName;){if(l.contentEditable=="true")return!0;if(l.nodeName.toUpperCase()=="BODY")break;l=l.parentNode}return!1}function Mt(l){let e=ki(l);return Ti(e)}async function qr(l){for(;document.hidden;)await Re(500);var e=100,t="\uF0C8",i=function(){var r,n;e-=1,r=document.createElement("canvas"),r.width=20,r.height=20,n=r.getContext("2d",{willReadFrequently:!0}),n.fillStyle="rgba(0,0,0,1.0)",n.fillRect(0,0,20,20),n.font="16pt FontAwesome",n.textAlign="center",n.fillStyle="rgba(255,255,255,1.0)",n.fillText(t,10,18);var a=n.getImageData(2,10,1,1).data;a[0]==0&&a[1]==0&&a[2]==0?(n.font='16pt "Font Awesome 6 Free"',n.fillText(t,10,18),a=n.getImageData(2,10,1,1).data,a[0]==0&&a[1]==0&&a[2]==0?e>0&&setTimeout(i,150):typeof l=="function"&&l()):typeof l=="function"&&l()};setTimeout(i,100)}var gt,P,Se=[],le=!1,Ii=!1,Pe,yt,ht,Ge,Dt,et,ge,tt,zt,Me,Ne,Ve=[],ei=[],Ct,$e,it,ti,ji,ii,rr,Ei,sr=!1,Ot=0,rt;const Li=`<svg class="search-jumper-logoBtnSvg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><title>${Lt.script.name}</title><path d="M.736 510.464c0-281.942 228.335-510.5 510-510.5 135.26 0 264.981 53.784 360.625 149.522 95.643 95.737 149.375 225.585 149.375 360.978 0 281.94-228.335 510.5-510 510.5-281.665 0-510-228.56-510-510.5zm510-510.5v1021m-510-510.5h1020" fill="#fefefe"/><path d="M237.44 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM699.904 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM423.296 759.296c-64 0-115.712-52.224-115.712-115.712 0-26.624 9.216-52.224 25.6-72.704 9.216-11.776 26.112-13.312 37.888-4.096s13.312 26.112 4.096 37.888c-9.216 11.264-13.824 24.576-13.824 38.912 0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-4.096-.512-8.192-1.024-11.776-2.56-14.848 6.656-28.672 21.504-31.744 14.848-2.56 28.672 6.656 31.744 21.504 1.536 7.168 2.048 14.336 2.048 22.016-.512 63.488-52.224 115.712-116.224 115.712z" fill="#333"/><path d="M602.08 760.296c-64 0-115.712-52.224-115.712-115.712 0-14.848 12.288-27.136 27.136-27.136s27.136 12.288 27.136 27.136c0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-15.36-5.632-30.208-15.872-41.472-9.728-11.264-9.216-28.16 2.048-37.888 11.264-9.728 28.16-9.216 37.888 2.048 19.456 21.504 29.696 48.64 29.696 77.824 0 62.976-52.224 115.2-116.224 115.2z" fill="#333"/><ellipse ry="58" rx="125" cy="506.284" cx="201.183" fill="#faf"/><ellipse ry="58" rx="125" cy="506.284" cx="823.183" fill="#faf"/></svg>`,Gr='<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 52.966 52.966"><path d="M51.704 51.273L36.844 35.82c3.79-3.8 6.14-9.04 6.14-14.82 0-11.58-9.42-21-21-21s-21 9.42-21 21 9.42 21 21 21c5.082 0 9.747-1.817 13.383-4.832l14.895 15.49c.196.206.458.308.72.308.25 0 .5-.093.694-.28.398-.382.41-1.015.028-1.413zM21.984 40c-10.478 0-19-8.523-19-19s8.522-19 19-19 19 8.523 19 19-8.525 19-19 19z"></path></svg>',St="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==",Vr="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGQ9Ik00MjkuMDEzMzMzIDY0MEEzMiAzMiAwIDAgMSAzODQgNTk0Ljk4NjY2N2wzNy43Ni0zNy43Ni0yMi44MjY2NjctMjIuNjEzMzM0LTEzNS42OCAxMzUuNjggOTAuNDUzMzM0IDkwLjQ1MzMzNCAxMzUuNjgtMTM1LjY4LTIyLjYxMzMzNC0yMi42MTMzMzR6TTUzNC42MTMzMzMgMzk4LjkzMzMzM2wyMi42MTMzMzQgMjIuNjEzMzM0TDU5NC45ODY2NjcgMzg0QTMyIDMyIDAgMCAxIDY0MCA0MjkuMDEzMzMzbC0zNy43NiAzNy43NiAyMi42MTMzMzMgMjIuNjEzMzM0IDEzNS42OC0xMzUuNjgtOTAuNDUzMzMzLTkwLjQ1MzMzNHoiIGZpbGw9IiNhMGEwYTAiLz48cGF0aCBkPSJNNTEyIDIxLjMzMzMzM2E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAxIDAgNDkwLjY2NjY2NyA0OTAuNjY2NjY3QTQ5MC42NjY2NjcgNDkwLjY2NjY2NyAwIDAgMCA1MTIgMjEuMzMzMzMzeiBtMzE2LjggMzU0Ljk4NjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMEw1NTcuMjI2NjY3IDUxMiA1MTIgNTU3LjIyNjY2N2w0NS4yMjY2NjcgNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAgNDUuMjI2NjY3bC0xODEuMTIgMTgxLjEyYTMyIDMyIDAgMCAxLTQ1LjIyNjY2NyAwbC0xMzUuNjgtMTM1LjY4YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBMNDY2Ljc3MzMzMyA1MTIgNTEyIDQ2Ni43NzMzMzNsLTQ1LjIyNjY2Ny00NS4yMjY2NjZhMzIgMzIgMCAwIDEgMC00NS4yMjY2NjdsMTgxLjEyLTE4MS4xMmEzMiAzMiAwIDAgMSA0NS4yMjY2NjcgMGwxMzUuNjggMTM1LjY4YTMyIDMyIDAgMCAxIDAgNDUuMjI2NjY3eiIgZmlsbD0iI2EwYTBhMCIvPjwvc3ZnPg==",nr='<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>',Pi="%s[lurest]?\\b",kt=new RegExp(Pi);var R,Mi,Nt,st,ar=!1;function Yr(l,e,t){if(!l&&!e&&!t){let k=new Date,g=k.getFullYear(),T=k.getMonth(),B=k.getDate();l=k.getFullYear(),e=k.getMonth()+1,t=k.getDate()}let i=2e3,r=2,n=5,a=[51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],s="\u6B63\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u51AC\u81D8",o="\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u521D\u5EFF",p="\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678",h="\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5",u="\u9F20\u725B\u864E\u5154\u9F8D\u86C7\u99AC\u7F8A\u7334\u96DE\u72D7\u8C6C";function m(k,g,T){g-=1;let B=(Date.UTC(k,g,T)-Date.UTC(i,r-1,n))/(1440*60*1e3)+1,W,z,$,C;for(let I=0;I<a.length;I++)if(B-=w(a[I]),B<=0){W=i+I,C=a[I],B+=w(C);break}if(!C)return null;for(let I=0;I<M(C).length;I++)if(B-=M(C)[I],B<=0){d(C)&&d(C)<=I?d(C)<I?z=I:d(C)===I?z="\u95F0"+I:z=I+1:z=I+1,B+=M(C)[I];break}return $=B,d(C)&&typeof z=="string"&&z.indexOf("\u95F0")>-1?z=`\u95F0${s[/\d/.exec(z)-1]}`:z=s[z-1],W=E(W)+v(W),$<11?$=`${o[10]}${o[$-1]}`:$>10&&$<20?$=`${o[9]}${o[$-11]}`:$===20?$=`${o[1]}${o[9]}`:$>20&&$<30?$=`${o[11]}${o[$-21]}`:$===30&&($=`${o[2]}${o[9]}`),{lunarYear:W,lunarMonth:z,lunarDay:$}}function d(k){return k&15?k&15:!1}function f(k){return d(k)?k&983040?30:29:0}function w(k){let g=0;for(let T=32768;T>8;T>>=1){let B=k&T?30:29;g+=B}return d(k)&&(g+=f(k)),g}function M(k){let g=[];for(let T=32768;T>8;T>>=1)g.push(k&T?30:29);return d(k)&&g.splice(d(k),0,f(k)),g}function E(k){let g=(k-3)%10;return g===0&&(g=10),p[g-1]}function v(k){let g=(k-3)%12;return g===0&&(g=12),g--,h[g]+` (${u[g]}) `}return m(l,e,t)}class _r{constructor(){let e=this;this.scale=c.prefConfig.customSize/100,this.tilesZoom=c.prefConfig.tilesZoom/100,this.tipsZoom=c.prefConfig.tipsZoom/100,Nt=`
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
                `,this.appearanceCssText=Nt,c.prefConfig.cssText&&(Nt+=c.prefConfig.cssText);let t=document.createElement("span");t.className="search-jumper-searchBar";let i=document.createElement("input");i.id="search-jumper-tileInput",i.addEventListener("mousedown",S=>{S&&S.stopPropagation&&S.stopPropagation()},!0);let r;i.addEventListener("input",S=>{clearTimeout(r),r=setTimeout(()=>{let L=e.bar.querySelector(".search-jumper-open>span:first-child");L&&L.dispatchEvent(new CustomEvent("checkSites",{detail:i.value}))},500)},!0),this.tileInput=i;let n=document.createElement("span");n.className="search-jumper-logo",gt=document.createElement("span"),ie(gt,Li),gt.className="search-jumper-btn",n.addEventListener("mouseenter",S=>{this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}),n.appendChild(gt),t.appendChild(n);let a=document.createElement("div");a.id="search-jumper",a.style.display="none",a.className="search-jumper-searchBarCon",a.appendChild(t),a.setAttribute("translate","no");let s=document.createElement("div");s.id="search-jumper-alllist",a.appendChild(s),this.alllist=s;let o=document.createElement("span");o.className="groupTab",a.appendChild(o),this.groupTab=o;let p=document.createElement("div");p.className="search-jumper-showallBg",a.appendChild(p);let h=document.createElement("div");h.className="sitelistBox",s.appendChild(h),this.sitelistBox=h;const u=/#[^\s#]+/g;h.addEventListener("mouseover",S=>{if(!s.classList.contains("new-mode"))return;let L=S.target;L.parentNode&&L.parentNode.dataset.name&&(L=L.parentNode);let H=L.title;if(!L.dataset.name||!H||L.initedTag)return;let Z=document.createElement("p"),ne=H.match(u);ne&&(ne.forEach(re=>{let j=document.createElement("span");j.innerText=re.slice(1),j.addEventListener("click",F=>{e.searchInput.value=re,e.searchInput.dispatchEvent(new CustomEvent("input"))}),Z.appendChild(j)}),L.appendChild(Z)),L.initedTag=!0});const m=document.createElement("div");m.className="clockInAll",s.appendChild(m);let d=document.createElement("span");d.className="timeInAll",m.appendChild(d),this.timeInAll=d,this.modeSwitch=document.createElement("div"),this.modeSwitch.className="modeSwitch",ie(this.modeSwitch,'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect height="450" width="520" y="287" x="253" fill="#fff"></rect><path d="m511.8,64.2c-247.5,0 -448.2,200.7 -448.2,448.2s200.7,448.2 448.2,448.2s448.2,-200.6 448.2,-448.2s-200.7,-448.2 -448.2,-448.2zm-260.4,353.9c0,-7.8 6.3,-14.2 14.2,-14.2l315.6,0l0,-102.5c0,-12.3 14.7,-18.8 23.7,-10.4l165.1,151.7c9.5,8.7 3.3,24.6 -9.6,24.6l-495,0c-7.8,0 -14.2,-6.3 -14.2,-14.2l0,-35l0.2,0zm523.2,188.5c0,7.8 -6.3,14.2 -14.2,14.2l-315.5,0l0,102.6c0,12.3 -14.7,18.8 -23.7,10.4l-165.2,-151.8c-9.5,-8.7 -3.3,-24.6 9.6,-24.6l495,0c7.8,0 14.2,6.3 14.2,14.2l0,35l-0.2,0z"></path></svg>'),s.appendChild(this.modeSwitch),this.modeSwitch.addEventListener("click",S=>{S.preventDefault(),S.stopPropagation(),s.classList.toggle("new-mode"),s.classList.remove("showbg"),V.setItem("allPageNewMode",s.classList.contains("new-mode"))}),this.modeSwitch.addEventListener("mouseenter",S=>{rt&&(S.preventDefault(),S.stopPropagation(),s.classList.add("showbg"))}),this.modeSwitch.addEventListener("mouseleave",S=>{rt&&(S.preventDefault(),S.stopPropagation(),s.classList.remove("showbg"))}),this.modeSwitch.addEventListener("contextmenu",S=>{rt&&(S.preventDefault(),S.stopPropagation(),s.classList.remove("showbg"),ye(rt,{active:!0,insert:!0}))}),sr&&s.classList.add("new-mode");let f=document.createElement("span");f.className="dayInAll",m.appendChild(f),this.dayInAll=f,s.addEventListener(Kt(),S=>{if(e.tips.style.display="none",clearTimeout(e.requestShowTipsTimer),!s.classList.contains("new-mode")){var L,H;if(S.type!=="wheel"){var Z=0,ne=0;typeof S.axis=="number"?S.axis==2?ne=S.detail:Z=S.detail:typeof S.wheelDeltaY>"u"||S.wheelDeltaY!=0?ne=-S.wheelDelta/40:Z=-S.wheelDelta/40,H=ne,L=Z}else L=S.deltaX,H=S.deltaY;S.target!=s&&S.target!=p&&S.target!=h&&H||(S.preventDefault(),S.stopPropagation(),s.scrollLeft+=L||H)}},{passive:!1,capture:!1});let w=document.createElement("span");ie(w,Li),w.className="search-jumper-btn",w.addEventListener("click",S=>{ye(lt,{active:!0,insert:!0})}),s.appendChild(w);let M=document.createElement("div");M.className="search-jumper-historylistcon",s.appendChild(M);let E=document.createElement("div");if(E.className="search-jumper-historylist",M.appendChild(E),this.historylist=E,t.addEventListener("mouseenter",S=>{t.classList.contains("grabbing")||(this.hideTimeout&&clearTimeout(this.hideTimeout),this.checkScroll(!0),c.prefConfig.mouseLeaveToHide&&t.classList.remove("initShow"))},!1),t.addEventListener("mouseleave",S=>{if(c.prefConfig.mouseLeaveToHide){if(t.classList.contains("grabbing"))return;e.waitForHide()}e.preList&&(e.preList.style.visibility="hidden",e.listArrow.style.cssText="")},!1),this.touched=!0,c.prefConfig.initShow?t.classList.add("initShow"):this.touched=!1,c.prefConfig.minSizeMode&&(t.classList.add("minSizeMode"),t.classList.add("minSizeModeClose")),Yt&&!c.prefConfig.resizePage){let S=H=>{this.touched=!1,t.classList.remove("initShow")},L=H=>{this.touched||this.funcKeyCall||(this.touched=!0,t.classList.add("disable-pointer"),H.stopPropagation(),setTimeout(()=>{t.classList.remove("disable-pointer")},250))};Q(document).addEventListener("touchstart",S,{passive:!0,capture:!1}),t.addEventListener("touchstart",L,{passive:!1,capture:!0})}this.bar=t,this.con=a;let v=document.createElement("span");v.className="search-jumper-tips",v.style.opacity=0,a.appendChild(v),v.addEventListener("mouseenter",S=>{e.hideTimeout&&clearTimeout(e.hideTimeout)},!1),v.addEventListener("click",S=>{if(B&&S.detail){B=!1,S.preventDefault(),S.stopPropagation();return}let L=S.target.dataset,H=S.target.innerText;if(L){if(typeof L.read<"u"){let Z=new SpeechSynthesisUtterance("");Z.volume=L.volume||1,Z.rate=L.rate||1,Z.pitch=L.pitch||1,Z.lang=L.lang||"",Z.text=L.read||H,window.speechSynthesis.speak(Z)}typeof L.copy<"u"&&qe(L.copy||H),L.search&&(At=H,e.searchBySiteName(L.search)),typeof L.paste<"u"&&R&&(/INPUT|TEXTAREA/i.test(R.nodeName)&&R.getAttribute("aria-readonly")!="true"||R.contentEditable=="true")&&si(R,L.paste||H),typeof L.close<"u"&&(e.tips.style.opacity=0,e.tips.style.display="none",ie(e.tips,""))}},!1);let k,g,T,B=!1,W=S=>{if(!T||S.pointerId!==k.id)return;let L=vt(S)-k.x,H=xt(S)-k.y;Math.abs(L)+Math.abs(H)<5||(v.style.right===""?v.style.setProperty("left",g.left+L+"px","important"):v.style.setProperty("right",g.right-L+"px","important"),v.style.bottom===""?v.style.setProperty("top",g.top+H+"px","important"):v.style.setProperty("bottom",g.bottom-H+"px","important"),B=!0)},z=S=>{!T||S.pointerId!==k.id||(T.hasPointerCapture(S.pointerId)&&T.releasePointerCapture(S.pointerId),T=null,v.classList.remove("draging"))};v.addEventListener("pointerdown",S=>{if(S.button!==0||!S.isPrimary||(B=!1,S.target!==v&&!S.target.closest("[data-drag]"))||S.target.closest("button, input, textarea, select, [data-close]"))return;S.preventDefault(),S.stopPropagation(),k={x:vt(S),y:xt(S),id:S.pointerId};let L=getComputedStyle(v);g={left:parseFloat(L.left),right:parseFloat(L.right),top:parseFloat(L.top),bottom:parseFloat(L.bottom)},T=S.target,v.classList.add("draging"),T.setPointerCapture(S.pointerId)}),v.addEventListener("pointermove",W),v.addEventListener("pointerup",z),v.addEventListener("pointercancel",z),v.addEventListener("lostpointercapture",z),this.tips=v;let $=document.createElement("div");$.className="searchJumperNavBar",$.style.display="none",ie($,`
                  <svg class="closeNavBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close navigation</title>${nr}</svg>
                  <div class="minNavBtn" title="Minimize navigation">-</div>
                  <div id="navMarks"></div>
                  <div class="maxNavBtn" title="Restore input"><img src="${St}" /></div>
                  <div class="navPointer">></div>
                `),a.appendChild($);let C=document.createElement("span");C.title=D("expand"),C.className="searchJumperExpand search-jumper-btn",ie(C,`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect height="450" width="600" y="300" x="200" fill="#fff"></rect><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 640L240 432l45.6-45.6L512 613.6l226.4-226.4 45.6 45.6L512 704z"></path></svg>
                `),this.searchJumperExpand=C,this.navMarks=$.querySelector("#navMarks"),this.closeNavBtn=$.querySelector(".closeNavBtn"),this.minNavBtn=$.querySelector(".minNavBtn"),this.maxNavBtn=$.querySelector(".maxNavBtn"),this.searchJumperNavBar=$,this.navPointer=$.querySelector(".navPointer"),this.navPointer.style.display="none";let I=document.createElement("div");I.className="search-jumper-input",ie(I,`<span class="closeBtn">\xD7</span>
                <input type="radio" id="filterSitesTab" name="tab" ${c.prefConfig.defaultFindTab?"":'checked="checked"'} />
                <label for="filterSitesTab">${D("filterSites")}</label>
                <input type="radio" id="searchInPageTab" name="tab" ${c.prefConfig.defaultFindTab?'checked="checked"':""} />
                <label for="searchInPageTab">${D("searchInPage")}</label>
                <div class="line"></div>
                <div class="content-container">
                  <div class="inputGroup" id="filterSites">
                    <input spellcheck="false" id="searchJumperInput" autocomplete="on" title="${D("inputTitle")}" placeholder="${D("inputPlaceholder")}" list="filterGlob" />
                    <input spellcheck="false" id="searchJumperInputKeyWords" autocomplete="on" placeholder="${D("inputKeywords")}" list="suggest" />
                    <datalist id="filterGlob">
                    </datalist>
                    <datalist id="suggest">
                    </datalist>
                    <span class="search-jumper-lock-input"></span>
                    <span class="svgBtns">
                      <svg id="copyEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("copyEleBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="openLinkBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("openLinkBtn")}</title><path d="M429.013333 640A32 32 0 0 1 384 594.986667l37.76-37.76-22.826667-22.613334-135.68 135.68 90.453334 90.453334 135.68-135.68-22.613334-22.613334zM534.613333 398.933333l22.613334 22.613334L594.986667 384A32 32 0 0 1 640 429.013333l-37.76 37.76 22.613333 22.613334 135.68-135.68-90.453333-90.453334z"/><path d="M512 21.333333a490.666667 490.666667 0 1 0 490.666667 490.666667A490.666667 490.666667 0 0 0 512 21.333333z m316.8 354.986667l-181.12 181.12a32 32 0 0 1-45.226667 0L557.226667 512 512 557.226667l45.226667 45.226666a32 32 0 0 1 0 45.226667l-181.12 181.12a32 32 0 0 1-45.226667 0l-135.68-135.68a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0L466.773333 512 512 466.773333l-45.226667-45.226666a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0l135.68 135.68a32 32 0 0 1 0 45.226667z"/></svg>
                      <svg id="maxEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("maxEleBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="minEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("minEleBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="pickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("multiPickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                    </span>
                  </div>
                  <div class="inputGroup" id="searchInPage">
                    <span class="lockWords"></span>
                    <input spellcheck="false" id="searchJumperInPageInput" autocomplete="on" title="${D("inPageTips")}" placeholder="${D("inPagePlaceholder")}" />
                    <span class="svgBtns">
                      <svg id="editBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("editBtn")}</title><path d="M928 365.664a32 32 0 0 0-32 32V864a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h429.6a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v704a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V397.664a32 32 0 0 0-32-32z"></path><path d="M231.616 696.416a38.4 38.4 0 0 0 44.256 53.792l148-38.368L950.496 185.248 814.72 49.472 290.432 573.76l-58.816 122.656z m111.808-85.12L814.72 140l45.248 45.248-468.992 468.992-77.824 20.16 30.272-63.104z"></path></svg>
                      <svg id="addWord" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("addWord")}</title><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z"></path></svg>
                      <svg id="emptyBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("emptyBtn")}</title><path d="m159.45829,231.40004l-48.83334,0a36.625,34.1375 0 0 1 0,-68.275l805.75004,0a36.625,34.1375 0 0 1 0,68.275l-683.6667,0l0,603.09581a61.04167,56.89583 0 0 0 61.04167,56.89584l439.50002,0a61.04167,56.89583 0 0 0 61.04167,-56.89584l0,-500.68332a36.625,34.1375 0 0 1 73.25,0l0,500.68332c0,69.12844 -60.12604,125.17084 -134.29167,125.17084l-439.50002,0c-74.16563,0 -134.29167,-56.0424 -134.29167,-125.17084l0,-603.09581zm256.37501,-113.79167a36.625,34.1375 0 0 1 0,-68.275l195.33334,0a36.625,34.1375 0 0 1 0,68.275l-195.33334,0zm-36.625,307.23749a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999zm195.33334,0a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999z"/></svg>
                      <svg id="copyInPageBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("copyInPageBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="wordModeBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("wordModeBtn")}</title><path d="M832 128c38.4 0 64 25.6 64 64v640c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V192c0-38.4 25.6-64 64-64h640m0-64H192c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z"></path><path d="M736 812.8h-448c-19.2 0-32-12.8-32-32s12.8-32 32-32h448c19.2 0 32 12.8 32 32 0 12.8-12.8 32-32 32zM320 704c-19.2-6.4-25.6-25.6-19.2-44.8l185.6-454.4c6.4-12.8 25.6-19.2 38.4-12.8 19.2 6.4 25.6 25.6 19.2 44.8l-185.6 454.4c-6.4 12.8-25.6 19.2-38.4 12.8z"></path><path d="M704 691.2c19.2-6.4 25.6-25.6 19.2-44.8L544 211.2c-6.4-19.2-25.6-25.6-38.4-19.2-19.2 6.4-25.6 25.6-19.2 38.4l179.2 441.6c6.4 19.2 25.6 25.6 38.4 19.2z"></path><path d="M371.2 492.8h256v64h-256z"></path></svg>
                      <svg id="recoverBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("recoverBtn")}</title><path d="M502.26 289.06c-0.02 16.95 13.26 30.94 30.18 31.8 123.47 8.79 236.97 70.94 310.89 170.21 73.92 99.28 100.91 225.84 73.93 346.65-41.65-181.74-195.38-316.12-381.05-333.08-8.89-0.6-17.63 2.55-24.09 8.7a31.798 31.798 0 0 0-9.86 23.64v85.15a32.343 32.343 0 0 1-50.67 26.41L114.21 413.02a32.341 32.341 0 0 1-14.46-26.95c0-10.84 5.43-20.96 14.46-26.95L451.6 124.68a32.358 32.358 0 0 1 33.28-2.03 32.355 32.355 0 0 1 17.39 28.44v137.97h-0.01z"></path></svg>
                      <svg id="saveRuleBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("saveRuleBtn")}</title><path d="M579.7 291.4c18.8 0 34.1-15.3 34.1-34.1v-34.1c0-18.8-15.4-34.1-34.1-34.1-18.8 0-34.1 15.3-34.1 34.1v34.1c0 18.7 15.4 34.1 34.1 34.1zM944.7 216.3L808.2 79.9c-6.8-6.8-15.3-10.2-23.9-10.2H170.4c-56.3 0-102.3 46-102.3 102.3v682.1c0 56.3 46 102.3 102.3 102.3H852.5c56.3 0 102.3-46 102.3-102.3V240.2c0.1-8.5-3.3-17-10.1-23.9zM358 137.9h307v182.5c0 11.9-10.2 22.2-22.2 22.2H380.2c-11.9 0-22.2-10.2-22.2-22.2V137.9z m358.1 750.3H306.9V652.9c0-20.5 17.1-37.5 37.5-37.5h334.2c20.5 0 37.5 17 37.5 37.5v235.3z m170.6-34.1c0 18.8-15.3 34.1-34.1 34.1h-66.5V652.9c0-58-47.7-105.7-105.7-105.7h-336c-58 0-105.7 47.7-105.7 105.7v235.3h-68.2c-18.8 0-34.1-15.3-34.1-34.1V172c0-18.8 15.3-34.1 34.1-34.1h119.4v182.5c0 49.5 40.9 90.4 90.4 90.4h262.6c49.5 0 90.4-40.9 90.4-90.4V137.9h37.5l116 116v600.2z"></path></svg>
                      <svg id="pinBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("pinBtn")}</title><path d="m674.8822,92.83803a81.61801,81.04246 0 0 1 25.30158,17.09996l213.75757,212.46631a81.61801,81.04246 0 0 1 -24.70304,131.36982l-75.74151,33.30845l-142.09696,141.257l-11.26329,155.3854a81.61801,81.04246 0 0 1 -139.13151,51.46196l-137.98885,-137.15085l-235.14149,234.56388l-57.83996,-57.18896l235.27751,-234.69896l-142.7499,-141.85131a81.61801,81.04246 0 0 1 51.6642,-138.09635l160.95072,-11.94025l139.5668,-138.74469l32.78324,-75.09935a81.61801,81.04246 0 0 1 107.35489,-42.14208zm-32.45675,74.36997l-38.95901,89.22775l-171.94193,170.99958l-191.25821,14.1284l338.46989,336.3262l13.43977,-185.47917l174.33607,-173.32279l89.69819,-39.44067l-213.78477,-212.43929z"></path></svg>
                      <svg id="locBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("locBtn")}</title><path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"></path></svg>
                    </span>
                    <div id="addons"></div>
                  </div>
                </div>
                <div id="rightSizeChange"></div>
                `),a.appendChild(I),this.searchInputDiv=I,this.searchInput=I.querySelector("#searchJumperInput"),this.searchJumperInputKeyWords=I.querySelector("#searchJumperInputKeyWords"),this.searchLockInput=I.querySelector(".search-jumper-lock-input"),this.searchJumperInPageInput=I.querySelector("#searchJumperInPageInput"),this.pickerBtn=I.querySelector("#pickerBtn"),this.minEleBtn=I.querySelector("#minEleBtn"),this.maxEleBtn=I.querySelector("#maxEleBtn"),this.copyEleBtn=I.querySelector("#copyEleBtn"),this.openLinkBtn=I.querySelector("#openLinkBtn"),this.editBtn=I.querySelector("#editBtn"),this.addWord=I.querySelector("#addWord"),this.recoverBtn=I.querySelector("#recoverBtn"),this.wordModeBtn=I.querySelector("#wordModeBtn"),this.saveRuleBtn=I.querySelector("#saveRuleBtn"),this.pinBtn=I.querySelector("#pinBtn"),this.locBtn=I.querySelector("#locBtn"),this.emptyBtn=I.querySelector("#emptyBtn"),this.copyInPageBtn=I.querySelector("#copyInPageBtn"),this.closeBtn=I.querySelector(".closeBtn"),this.filterSites=I.querySelector("#filterSites"),this.filterSitesTab=I.querySelector("#filterSitesTab"),this.searchInPageTab=I.querySelector("#searchInPageTab"),this.searchInPageLockWords=I.querySelector("#searchInPage>.lockWords"),this.contentContainer=I.querySelector(".content-container"),this.rightSizeChange=I.querySelector("#rightSizeChange"),this.filterGlob=I.querySelector("#filterGlob"),this.suggestDatalist=I.querySelector("#suggest"),this.addonsList=I.querySelector("#addons"),this.fakeTextareas=new Map,this.addonCheckboxDict={}}showInPageSearch(){this.searchInPageTab.checked=!0,this.showSearchInput(),this.initSetInPageWords(),this.searchJumperInPageInput.value="",this.initShowSearchInput=!0}showFilterSearch(){this.filterSitesTab.checked=!0,this.showSearchInput()}initSetInPageWords(){if(this.searchInPageTab.checked&&!this.searchJumperInPageInput.value){let e=Je()||this.searchJumperInputKeyWords.value.replace(/^\*/,"")||Oe();if(e)try{e=decodeURIComponent(e)}catch{}if(this.lockWords&&this.lockWords.indexOf(e)!==-1)return;this.searchJumperInPageInput.value=e||$e,this.lockWords||this.submitIgnoreSpace(this.searchJumperInPageInput.value)}}anylizeInPageWords(e,t){if(!e)return[];let i=this,r=[];if(this.lockWords||(e.indexOf("$c")===0&&e.length>2?e=e.substr(3).trim():e.indexOf("$o")===0&&(e=e.substr(2).trim())),this.splitSep){let a=this.wordModeBtn.classList.contains("checked")?new RegExp(`[\\${this.splitSep} ]`):this.splitSep;e.split(a).sort((s,o)=>o.length-s.length).forEach(s=>{let o=s;if(s=s.trim(),!s||t&&(s.length<(c.prefConfig.limitInPageLen||1)||(c.prefConfig.ignoreWords||[]).includes(s.toLowerCase())))return;let p="",h="",u=!1,m,d,f,w=!1,M="",E=/\$t{(.*?)}($|\$)/,v=s.match(E),k=0;if(v)if(p=v[1],s=s.replace(E,"$2"),p=="\\$popup")p="$popup";else if(p=="\\@popup")p="@popup";else{let S=p.match(/^[\$@]popup(\((.*)\))?$/);S&&(p="",u=!0,S[1]&&(k=S[2]||"1"))}let g=/\$p{(.*?)}($|\$)/,T=s.match(g);T&&(m=parseInt(T[1])||0,s=s.replace(g,"$2"));let B=/\$in{(.*?)}($|\$)/,W=s.match(B);W&&(f=W[1]||"",s=s.replace(B,"$2"));let z=/\$s{(.*?)}($|\$)/,$=s.match(z);if($){let S=$[1],L="";$=$[1].match(/(.*?);(.*)/),$&&(S=$[1],L=$[2]),h=i.getHighlightStyle(i.curWordIndex,S,L),s=s.replace(z,"$2")}else h=i.getHighlightStyle(i.curWordIndex,"","");let C="";if(s.indexOf("@")===0){C=s;let S=c.prefConfig.inPageRule&&c.prefConfig.inPageRule[s];S&&(s=S)}else s=s.replace(/^\\@/,"@");let I=s.match(/^\/(.*)\/([il]*)($|\$)/);I&&(w=!0,s=I[1],M=I[2].indexOf("i")!=-1?"i":"",d=I[2].indexOf("l")!=-1),C||(C=s),!i.highlightSpans[C]&&(r.push({content:s,showWords:C,isRe:w,link:d,reCase:M,title:p,style:h,oriWord:o,hideParent:m,inRange:f,popup:u,showTips:k,init:t}),i.curWordIndex++)})}else{this.curWordIndex=0;let n=(this.lockWords||"").replace(/^\$o/,"")+e;r=[{content:n,showWords:n,isRe:!1,reCase:"",title:"",style:i.getHighlightStyle(i.curWordIndex,"",""),init:t}]}return r}submitInPageWords(e){let t=this,i=this.searchJumperInPageInput.value,r=[];if(!i){if(!this.lockWords)this.highlight("");else{this.highlight("insert");for(let a in this.highlightSpans){let s=this.highlightSpans[a],o=this.marks[a];this.setHighlightSpan(s,0,o)}}return r}this.initHighlight=!!e,this.initHighlight&&setTimeout(()=>{this.initHighlight=!1},500),this.lockWords||(i.indexOf("$c")===0&&i.length>2?this.splitSep=i.substr(2,1):i.indexOf("$o")===0?this.splitSep=null:this.splitSep="\u25CE",this.curWordIndex=0),this.searchJumperInPageInput.value="";let n=this.anylizeInPageWords(i,this.initHighlight);return!n||n.length==0||(this.lockWords?this.lockWords+=(this.lockWords.indexOf(this.splitSep)===this.lockWords.length-this.splitSep.length?"":this.splitSep)+i:this.lockWords=i,this.splitSep||(ie(this.searchInPageLockWords,""),this.highlight("")),this.highlight(n),n.forEach(a=>{if(!a)return;let s=document.createElement("span");ie(s,a.showWords),s.title=a.title?JSON.parse('"'+a.title+'"'):a.showWords;let o=a.style.match(/background: *(#?\w+)/);o&&o[1].indexOf("unset")===-1&&(s.style.background=o[1]);let p=a.style.match(/color: *(#?\w+)/);p&&(s.style.color=p[1]),s.addEventListener("click",f=>(f.stopPropagation(),f.preventDefault(),!1)),s.oncontextmenu=f=>{f.preventDefault()},s.addEventListener("dblclick",f=>{f.stopPropagation(),f.preventDefault(),f.target.nodeName.toUpperCase()!=="EM"&&(f.ctrlKey||f.shiftKey||f.altKey||f.metaKey||this.lockWords.indexOf(a.oriWord)!==-1&&this.showModifyWindow(a,s))},!0),s.addEventListener("mousedown",f=>{f.button===0?this.focusHighlightByText(a.showWords,!0,s):f.button===2&&this.focusHighlightByText(a.showWords,!1,s)});let h=!1;s.addEventListener(Kt(),f=>{if(f.preventDefault(),f.stopPropagation(),h)return;h=!0,setTimeout(()=>{h=!1},100);let w;if(f.type!=="wheel"){let M=0;typeof f.axis=="number"?f.axis==2&&(M=f.detail):(typeof f.wheelDeltaY>"u"||f.wheelDeltaY!=0)&&(M=-f.wheelDelta/40),w=M}else w=f.deltaY;this.focusHighlightByText(a.showWords,w>0,s)},{passive:!1,capture:!1}),s.addEventListener("editword",f=>{s.parentNode.removeChild(s),this.removeHighlightWord(a),this.searchJumperInPageInput.value=a.content});let u=document.createElement("div");u.addEventListener("mousedown",f=>{f.stopPropagation(),f.preventDefault(),s.parentNode.removeChild(s),this.removeHighlightWord(a)}),u.className="lockWordTool",ie(u,`<span title="${D("removeBtn")}">\xD7</span>`),s.appendChild(u);let m=document.createElement("div");m.addEventListener("mousedown",f=>{f.stopPropagation(),f.preventDefault(),this.lockWords.indexOf(a.oriWord)!==-1&&this.showModifyWindow(a,s)}),m.className="lockWordTool modifyBtn",ie(m,"<span>+</span>"),s.appendChild(m);let d=this.marks[a.showWords];this.setHighlightSpan(s,-1,d),this.highlightSpans[a.showWords]=s,this.searchInPageLockWords.appendChild(s),r.push(s)}),this.searchInPageLockWords.scrollTop<=0&&(this.searchInPageLockWords.scrollTop=this.searchInPageLockWords.scrollHeight),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",this.navMarks.innerHTML&&this.con.style.display==="none"&&(this.con.style.display="")),r}async showCustomInputWindow(e,t){return new Promise(i=>{this.customInputCallback=t;let r=()=>{let p=this.finalSearch.dataset.url,h=0;[].forEach.call(this.customGroup.children,u=>{let m=u.value;if(u.className=="select")m=u.children[0].value;else if(/^DIV$/i.test(u.nodeName))return;p=p.replaceAll("\u25CE"+h,m||""),h++}),this.finalSearch.value=p};if(!this.customInputFrame){let h=Be(`
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
                        `),u=document.createElement("div");this.customInputFrame=u,ie(u,`
                         <div class="customInputFrame-body">
                             <a href="${ft}" class="customInputFrame-title" target="_blank">
                                 <img width="32px" height="32px" src="${St}" />${D("customInputFrame")}
                             </a>
                             <div id="customGroup">
                             </div>
                             <div class="customInputFrame-input-title">${D("finalSearch")}</div>
                             <textarea name="finalSearch" type="text"></textarea>
                             <div class="customInputFrame-buttons">
                                 <button id="cancel" type="button">${D("cancel")}</button>
                                 <button id="customSubmit" type="button">${D("customSubmit")}</button>
                             </div>
                         </div>
                        `),Ze||u.appendChild(h),u.querySelector("#cancel").addEventListener("click",M=>{u.parentNode&&u.parentNode.removeChild(u),i("")}),u.addEventListener("keydown",M=>{M.keyCode==13&&w.click()});let d=this.customInputFrame.querySelector("#customGroup");this.customGroup=d;let f=this.customInputFrame.querySelector("[name='finalSearch']");this.finalSearch=f,f.addEventListener("click",M=>{r()});let w=u.querySelector("#customSubmit");w.addEventListener("click",M=>{r(),f.value&&this.customInputCallback&&this.customInputCallback(f.value),i(f.value),u.parentNode&&u.parentNode.removeChild(u)})}this.customInputFrame.parentNode&&this.customInputFrame.parentNode.removeChild(this.customInputFrame),ie(this.customGroup,"");let n=e,a=n.match(/%input{(.*?[^\\])}/),s=0;for(;a;){let p=document.createElement("div");p.className="customInputFrame-input-title";let h=a[1];if(/^".*","/.test(h)?h=h.substr(1,h.length-2).split('","'):h=h.replace(/\\,/g,"\u25CESJ").split(",").map(u=>u.replace(/◎SJ/g,",")),h.length===1){h=h[0].replace(/\\\|/g,"\u25CESJ").split("|").map(m=>m.replace(/◎SJ/g,"|")),p.innerText=h[0],this.customGroup.appendChild(p);let u=document.createElement("input");u.type="text",h.length>1&&(u.title=h[1]),this.customGroup.appendChild(u)}else if(h.length>=2){let u=h[0].replace(/\\}/g,"}");/^'.*'\/'/.test(u)?u=u.substr(1,u.length-2).split("'/'"):u=u.replace(/\\\//g,"\u25CESJ").split("/").map(k=>k.replace(/◎SJ/g,"/"));let m=h.slice(1).join(",");/^'.*'\/'/.test(m)?m=m.substr(1,m.length-2).split("'/'"):m=m.replace(/\\\//g,"\u25CESJ").split("/").map(k=>k.replace(/◎SJ/g,"/"));let d=u.length===m.length+1;p.innerText=u[0],this.customGroup.appendChild(p);let f=document.createElement("input");f.type="text";let w=document.createElement("div");w.className="select",w.appendChild(f);let M=document.createElement("p");M.innerText="Select option",w.appendChild(M);let E=document.createElement("div");E.className="options",w.appendChild(E);let v=document.createElement("p");v.setAttribute("value",""),ie(v,"<b>Select option</b>"),E.appendChild(v),v.addEventListener("click",k=>{E.style.visibility="hidden",setTimeout(()=>{E.style.visibility=""},0),f.value="",M.innerText="Select option",r()});for(let k=0;k<m.length;k++){let g=m[k],T=document.createElement("p");if(T.setAttribute("value",g),d){let B=u[k+1];B=B.replace(/\\\|/g,"\u25CESJ").split("|").map(W=>W.replace(/◎SJ/g,"|")),T.innerText=B[0],B.length>1&&(T.title=B[1])}else T.innerText=g;T.addEventListener("click",B=>{E.style.visibility="hidden",setTimeout(()=>{E.style.visibility=""},0),f.value=T.getAttribute("value"),M.innerText="",r()}),E.appendChild(T)}f.addEventListener("change",k=>{M.innerText=""}),w.addEventListener("mouseenter",k=>{w.focus(),E.style.marginTop=-this.customGroup.scrollTop+20+"px"}),this.customGroup.appendChild(w)}n=n.replace(a[0],"\u25CE"+s).replaceAll(`input{${p.innerText}}`,"\u25CE"+s),s++,a=n.match(/%input{(.*?[^\\])}/)}this.finalSearch.dataset.url=n,this.finalSearch.value=n.replace(/◎/g,""),this.addToShadow(this.customInputFrame);let o=this.customInputFrame.children[0];o.style.marginTop=-o.offsetHeight/2+"px"})}showModifyWindow(e,t){let i;if(this.modifyWord={},this.addNew=!e&&!t,!this.addNew){if(i=e.oriWord,!i)return;this.modifyWord=e,this.modifySpan=t}if(!this.modifyFrame){let d=Be(`
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
                         <a href="${ft}" class="searchJumperModify-title" target="_blank">
                             <img onerror="this.style.display='none'" width="32px" height="32px" src="${St}" />${D("modifyWord")}
                         </a>
                         <div class="searchJumperModify-input-title">${D("wordContent")}</div>
                         <input id="searchJumperHighlightWord" name="wordContent" placeholder="words" type="text"/>
                         <div class="searchJumperModify-checkGroup">
                             <input id="searchJumperModify-re" type="checkbox"/>
                             <label for="searchJumperModify-re">${D("re")}</label>
                             <input id="searchJumperModify-case" type="checkbox"/>
                             <label for="searchJumperModify-case">${D("ignoreCase")}</label>
                             <input id="searchJumperModify-link" type="checkbox"/>
                             <label for="searchJumperModify-link">${D("filterLink")}</label>
                         </div>
                         <div class="searchJumperModify-input-title">${D("wordHide")}</div>
                         <input name="wordHide" min="0" placeholder="${D("wordHideTips")}" type="number" />
                         <div class="searchJumperModify-input-title">${D("wordRange")}</div>
                         <input name="wordRange" placeholder="#main" type="text" />
                         <svg id="rangePickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                         <div class="searchJumperModify-input-title">${D("wordStyle")}</div>
                         <input name="wordStyle" placeholder="orange or #333333;color:red;" type="text" />
                         <div class="searchJumperModify-input-title">${D("wordTitle")}</div>
                         <textarea name="wordTitle" type="text" placeholder="Text comment, or @popup to popup, @popup(1) to popup 1st showTips, @popup(name) to popup showTips of target engine"></textarea>
                         <div class="searchJumperModify-buttons">
                             <button id="cancel" type="button">${D("cancel")}</button>
                             <button id="modify" type="button">${D("modify")}</button>
                         </div>
                     </div>
                    `),Ze||f.appendChild(d),f.querySelector("#cancel").addEventListener("click",v=>{f.parentNode&&f.parentNode.removeChild(f)}),f.querySelector("#rangePickerBtn").addEventListener("click",v=>{Te.getSelector(k=>{s.value=k,f.style.display=""}),f.style.display="none"});let E=f.querySelector("#modify");this.modifyBtn=E,E.addEventListener("click",v=>{let k=r.value;if(this.splitSep&&(k=k.replaceAll(this.splitSep,"")),!k)return;let g=k!==this.modifyWord.showWords||h.checked!==this.modifyWord.isRe||u.checked!==this.modifyWord.link;p.checked&&k.indexOf("@")!==0&&(k=`/${k}/${h.checked?"i":""}${u.checked?"l":""}`);let T=o.value;T&&(this.splitSep&&(T=T.replaceAll(this.splitSep,"")),T=T>=0?T:0,k+=`$p{${T}}`);let B=n.value;B&&(this.splitSep&&(B=B.replaceAll(this.splitSep,"")),k+=`$s{${B}}`);let W=JSON.stringify(a.value).replace(/^"|"$/g,"");W&&(this.splitSep&&(W=W.replaceAll(this.splitSep,"")),k+=`$t{${W}}`);let z=s.value;z&&(this.splitSep&&(z=z.replaceAll(this.splitSep,"")),z!==this.modifyWord.inRange&&(g=!0),k+=`$in{${z}}`),this.addNew?(this.wordModeBtn.classList.contains("checked")&&(this.wordModeBtn.classList.remove("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)),this.searchJumperInPageInput.value=k,this.submitInPageWords()):this.replaceWord(this.modifyWord,k,this.modifySpan,g),f.parentNode&&f.parentNode.removeChild(f)}),f.addEventListener("keydown",v=>{v.keyCode==13&&v.target&&v.target.nodeName=="INPUT"&&E.click()})}let r=this.modifyFrame.querySelector("[name='wordContent']"),n=this.modifyFrame.querySelector("[name='wordStyle']"),a=this.modifyFrame.querySelector("[name='wordTitle']"),s=this.modifyFrame.querySelector("[name='wordRange']"),o=this.modifyFrame.querySelector("[name='wordHide']"),p=this.modifyFrame.querySelector("#searchJumperModify-re"),h=this.modifyFrame.querySelector("#searchJumperModify-case"),u=this.modifyFrame.querySelector("#searchJumperModify-link");if(this.addNew)r.value="",n.value="",s.value="",o.value="",a.value="",p.checked=!1,h.checked=!1,u.checked=!1,this.modifyBtn.innerText=D("add");else{this.modifyBtn.innerText=D("modify");let m="",d=/\$s{(.*?)}($|\$)/,f=i.match(d);f&&(m=f[1]),r.value=e.showWords||"",n.value=m||"",s.value=e.inRange||"",p.checked=!!e.isRe,h.checked=!!e.reCase,u.checked=!!e.link,typeof e.hideParent<"u"&&(o.value=e.hideParent);try{e.popup?(a.value="@popup",e.showTips&&(a.value=`@popup(${e.showTips})`)):a.value=e.title!==e.showWords?JSON.parse('"'+e.title+'"'):""}catch(w){fe(w)}}this.addToShadow(this.modifyFrame)}replaceWord(e,t,i,r){if(r)i.parentNode&&i.parentNode.removeChild(i),this.removeHighlightWord(e),this.searchJumperInPageInput.value=t,this.submitInPageWords();else{let n="",a="",s=-1,o=/\$t{(.*?)}($|\$)/,p=t.match(o);p&&(n=p[1],n=JSON.parse('"'+n+'"')),e.title=n,i.title=n;let h=/\$s{(.*?)}($|\$)/,u=t.match(h);if(u){let w=u[1],M="";u=u[1].match(/(.*?);(.*)/),u&&(w=u[1],M=u[2]),a=this.getHighlightStyle(this.curWordIndex,w,M),e.style=a,i.style=a}let m=!1,d=/\$p{(.*?)}($|\$)/,f=t.match(d);f?(s=parseInt(f[1])||0,m=s!=e.hideParent):m=typeof e.hideParent<"u",m&&[].forEach.call(document.querySelectorAll(".searchJumper-hide"),w=>{w.dataset.content===e.showWords&&(w.classList.remove("searchJumper-hide"),w.style.display="",w.removeAttribute("data-content"))}),this.marks[e.showWords].forEach(w=>{if(w&&(w.title=n,a&&(w.style=a),m&&s!=-1)){let M=s,E=w.parentElement;for(;M-- >0&&E;)E=E.parentElement;E&&(E.dataset.content=e.showWords,E.classList.add("searchJumper-hide"),ie(E,""))}}),s==-1?delete e.hideParent:e.hideParent=s,this.lockWords=this.lockWords.replace(e.oriWord,t),e.oriWord=t}}removeHighlightWord(e){if(!this.lockWords||(this.splitSep||this.emptyInPageWords(),!e.oriWord)||this.lockWords.indexOf(e.oriWord)===-1)return;let t=this.lockWords.match(/^\$(c.|o)/),i,r=0;t=t?t[0]:"";let n=this.lockWords.replace(t,"").split(this.splitSep);if(i=n.indexOf(e.oriWord),this.wordModeBtn.classList.contains("checked")){i!=-1&&(n.splice(i,1),r=1);for(let s=0;s<n.length;s++){let o=n[s].split(/[ ]/);if(i=o.indexOf(e.oriWord),i!=-1)if(r++,r==1)o.splice(i,1),n[s]=o.join(" ");else break}this.lockWords=t+n.join(this.splitSep)}else{if(i<0)return;n.splice(i,1),r=n.indexOf(e.oriWord)!=-1?2:1,this.lockWords=t+n.join(this.splitSep)}if(delete this.highlightSpans[e.showWords],i=this.curHighlightWords.indexOf(e),i<0||(this.curHighlightWords.splice(i,1),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",r>1))return;this.marks[e.showWords].forEach(s=>{if(s.parentNode)if(s.dataset.block)s.parentNode&&s.parentNode.removeChild(s);else if(!/^MARK$/i.test(s.nodeName))s.classList.remove("searchJumper"),s.style.cssText=s.dataset.css||"",delete s.dataset.css;else{let o=document.createTextNode(s.firstChild.data);s.parentNode.replaceChild(o,s),o.parentNode.normalize()}}),delete this.marks[e.showWords];let a=[].slice.call(this.navMarks.children);[].forEach.call(a,s=>{s.dataset.content==e.showWords&&s.parentNode.removeChild(s)})}emptyInPageWords(){ie(this.searchInPageLockWords,""),this.highlight("")}focusHighlightByText(e,t,i){let r=this.marks[e];if(!r||r.length===0)return;e!=this.focusText?(this.focusIndex=0,this.focusText=e):t?this.focusIndex!=r.length-1?this.focusIndex=this.focusIndex+1:this.focusIndex=0:this.focusIndex!=0?this.focusIndex=this.focusIndex-1:this.focusIndex=r.length-1;let n=this.focusIndex;if(n>=r.length&&(n=0),t)for(;(!r[n].offsetParent||r[n].dataset.type)&&(n!=r.length-1?n=n+1:n=0,n!=this.focusIndex););else for(;(!r[n].offsetParent||r[n].dataset.type)&&(n!=0?n=n-1:n=r.length-1,n!=this.focusIndex););this.focusIndex=n,this.focusHighlight(r[this.focusIndex]),this.setHighlightSpan(i,this.focusIndex,r)}getRect(e){let t=e.getBoundingClientRect(),i={left:t.left,top:t.top,width:t.width,height:t.height},r=e.ownerDocument&&e.ownerDocument.defaultView,n=r&&r.frameElement;for(;n;){const a=n.getBoundingClientRect();i.left+=a.left,i.top+=a.top,r=r.parent,n=r.frameElement}return i}focusHighlight(e){if(!e)return;this.focusMark&&this.focusMark.removeAttribute("data-current"),this.focusMark=e,this.wPosBar||(this.wPosBar=document.createElement("div"),this.hPosBar=document.createElement("div"),this.wPosBar.className="searchJumperPosBar searchJumperPosW",this.hPosBar.className="searchJumperPosBar searchJumperPosH"),this.wPosBar.parentNode||(this.addToShadow(this.wPosBar),this.addToShadow(this.hPosBar));let t=this.getRect(e);this.wPosBar.style.top=t.top+document.documentElement.scrollTop+Q(document).scrollTop+"px",this.wPosBar.style.height=t.height+"px",this.hPosBar.style.left=t.left+"px",this.hPosBar.style.width=t.width+"px",this.wPosBar.style.animationName="",this.hPosBar.style.animationName="";let i=this;setTimeout(async()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),e.dataset.current=!0,i.wPosBar.style.animationName="fadeit",i.hPosBar.style.animationName="fadeit",i.fixTimes=0;let r=window.innerHeight||document.documentElement.clientHeight;function n(){if(i.focusMark!=e)return;let a=i.getRect(e);if(i.wPosBar.style.top=a.top+document.documentElement.scrollTop+Q(document).scrollTop+"px",i.hPosBar.style.left=a.left+"px",!(i.fixTimes>0&&a.top>r/3&&a.top<r/3*2)){if(++i.fixTimes==5)e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});else if(i.fixTimes>10){e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),i.wPosBar.style.animationName="",i.hPosBar.style.animationName="";return}setTimeout(()=>{n()},200)}}n()},0)}getHighlightSpanByText(e){return this.highlightSpans[e]}setHighlightSpan(e,t,i){if(!e)return;let r=e.querySelector("em");r||(r=document.createElement("em"),e.insertBefore(r,e.firstChild)),t++;let n=0;i&&i.length&&(n=0,i.forEach(a=>{a.dataset.type||n++})),ie(r,"["+t+"/"+n+"]")}getHighlightStyle(e,t,i){if(!t&&!i){let a=c.prefConfig.inPageWordsStyles[e];if(a)return a}i=i||"";function r(){let a,s,o;return a=Math.floor(256*Math.random()),s=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),a=a.toString(16),a.length===1&&(a="0"+a),s=s.toString(16),s.length===1&&(s="0"+s),o=o.toString(16),o.length===1&&(o="0"+o),"#"+a+s+o}function n(a){if(a.indexOf("#")!==0)return"";if(a==="#ffff00")return"black";a=a.substr(1);let s,o,p;s=parseInt(a.substr(0,2),16),o=parseInt(a.substr(2,2),16),p=parseInt(a.substr(4,2),16);let h=s*.299+o*.587+p*.114;s=255-s,o=255-o,p=255-p;let u=s*.299+o*.587+p*.114;return Math.abs(u-h)<=128?h>158?"#000000":"#FFFFFF":(s=s.toString(16),s.length===1&&(s="0"+s),o=o.toString(16),o.length===1&&(o="0"+o),p=p.toString(16),p.length===1&&(p="0"+p),"#"+s+o+p)}if(t||(t=c.prefConfig.firstFiveWordsColor[e]),!t)switch(e){case 0:t="#ffff00";break;case 1:t="#e91e63";break;case 2:t="#00bcd4";break;case 3:t="#008000";break;case 4:t="#800080";break;default:t=r();break}if(t){let a=n(t);a&&(a="color:"+a+"!important;"),t=`background:${t}!important;${a}`}return`${t}${i}`}createNavMark(e,t,i,r,n){let a=this,s=document.createElement("span"),o=Ur(e,a.targetIframe);s.title=t.title||t.showWords,s.dataset.top=o,s.dataset.content=t.showWords,s.style.top=o/n*100+"%",s.style.background=e.style.background||"yellow",s.addEventListener("click",p=>(p.stopPropagation(),p.preventDefault(),a.focusIndex=i,a.focusHighlight(e),a.setHighlightSpan(a.getHighlightSpanByText(t.showWords),i,r),a.navPointer.style.display="",a.navPointer.style.top=s.offsetTop+33+"px",!1),!0),a.navMarks.appendChild(s)}anylizeDomWithTextPos(e,t){return t||(t={text:"",data:[]}),!e||!e.childNodes||!e.childNodes.length||e.nodeType==1&&!e.offsetParent&&!e.offsetHeight&&(!e.firstElementChild||!e.firstElementChild.offsetParent)||e.childNodes.forEach(i=>{if(i.classList&&i.classList.contains("searchJumper")||/^(img|svg|picture|br|hr|textarea)$/i.test(i.nodeName)){const r=t.text.length;t.text+=`
`,t.data.push({index:r,node:i,text:`
`})}else if(i.offsetParent||i.offsetHeight||i.firstElementChild&&i.firstElementChild.offsetParent)if(/^(div|h\d|p|form|ul|li|ol|dl|address|menu|table|fieldset|td)$/i.test(i.nodeName)){let r=t.text.length;t.text+=`
`,t.data.push({index:r,node:{},text:`
`}),t=this.anylizeDomWithTextPos(i,t),r=t.text.length,t.text+=`
`,t.data.push({index:r,node:{},text:`
`})}else t=this.anylizeDomWithTextPos(i,t);else if(i.nodeType===3){let r;if(i.parentNode.nodeType==1&&i.parentNode.childNodes.length==1?r=i.parentNode.innerText||i.data:r=i.data,!r||!r.trim())return;const n=t.text.length;t.text+=r,t.data.push({index:t.text.length-1,node:i,text:r})}}),t}highlightPopup(e,t){let i=this,r,n=a=>{r&&i.clingPos(e,i.tips)};e.addEventListener("mouseenter",a=>{if(e.addEventListener("mousemove",n),R!=e||!i.funcKeyCall){if(r=null,R=e,t.showTips)if(/^\d+$/.test(t.showTips)){let o=i.autoGetFirstType().querySelectorAll("a.search-jumper-btn[data-show-tips]:not(.notmatch)"),p=parseInt(t.showTips)-1;r=o[p]}else r=i.getTargetSitesByName([t.showTips])[0];i.setFuncKeyCall(!0),r?(i.bar.style.setProperty("display","none","important"),r.dispatchEvent(new CustomEvent("showTips"))):i.showInPage(!0,a)}}),e.addEventListener("mouseleave",a=>{e.removeEventListener("mousemove",n)})}createHighlightMark(e,t,i){let r=this,n=document.createElement("mark");n.className="searchJumper",e.title&&(n.title=JSON.parse('"'+e.title+'"')),e.popup&&this.highlightPopup(n,e),n.style.cssText=e.style,n.addEventListener("click",o=>{if(o.altKey)return o.stopPropagation(),o.preventDefault(),!1}),n.dataset.content=e.showWords;let a,s=()=>{clearTimeout(a),a=setTimeout(()=>{let o=location.href.replace(/#.*/,"")+"#sjhl="+encodeURIComponent(e.oriWord)+"&i="+(t+1);Le.history.replaceState("","",o)},800)};return n.addEventListener("mousedown",o=>{if(s(),!o.altKey)return;let p,h=t;for(;(!p||p.dataset.type)&&(o.button===0?h!=i.length-1?(h++,r.focusIndex=h):r.focusIndex=0:o.button===2&&(h!=0?(h--,r.focusIndex=h):r.focusIndex=i.length-1),p=i[r.focusIndex],h!=t););r.focusHighlight(p),r.setHighlightSpan(r.getHighlightSpanByText(e.showWords),r.focusIndex,i),r.focusText=e.showWords}),n.addEventListener("mouseup",o=>{clearTimeout(a)}),n}createAddonSpan(e,t){let i="addon_"+this.addonsList.children.length,r=this,n=document.createElement("div"),a=document.createElement("input");a.type="checkbox",a.id=i,a.checked=!t.disable,a.addEventListener("change",o=>{c.prefConfig.disableAddon[e]=!a.checked,t.disable=!a.checked,a.checked&&r.findInpageAddons.forEach(p=>{if(p!=t&&p.sort==t.sort){p.disable=!0;let h=p.name||"addon"+i++;r.addonCheckboxDict[h].checked=!1,c.prefConfig.disableAddon[h]=!0}}),V.setItem("searchData",c),r.lockWords&&r.refreshPageWords(r.lockWords)}),n.appendChild(a),n.title=t.title||"";let s=document.createElement("label");s.setAttribute("for",i),s.innerText=e,n.appendChild(s),this.addonCheckboxDict[e]=a,this.addonsList.appendChild(n)}findAccentedWord(e,t,i){const r=t.length;let n=0,a=-1;for(let s=0;s<e.length;s++){const o=i[s];if(o!=="")if(o===t[n]){if(n===0&&(a=s),n++,n===r)return{pos:a,len:s-a+1}}else n=0,a=-1,o===t[0]&&(a=s,n=1)}return a=e.indexOf(t),{len:t.length,pos:a}}findPosInStr(e,t,i,r,n){if(!e)return{len:0,pos:-1};let a=0,s=-1,o=!1;if(this.findInpageAddons.length)for(let p=0;p<this.findInpageAddons.length;p++){let h=this.findInpageAddons[p];if(!h||!h.run||h.disable)continue;o=!0;let u=h.run(e,t);if(u&&u.matched){a=u.len,s=u.pos;break}}return s==-1&&!o?this.findAccentedWord(i,r,n):{len:a,pos:s}}highlight(e,t,i,r){if(!e&&(!this.curHighlightWords||this.curHighlightWords.length===0))return;if(!t){this.highlight(e,Q(document),i);return}if([].forEach.call(t.getElementsByTagName("iframe"),d=>{if(!d.offsetParent||d.offsetHeight<100||d.offsetWidth<100)return;let f;try{f=d.contentDocument||d.contentWindow.document}catch{return}f&&Q(f)&&this.highlight(e,Q(f),i,d)}),this.targetIframe=r||!1,t.id=="searchJumperModifyWord")return;t=t||Q(document);let n=this.wordModeBtn.classList.contains("checked"),a=[],s=!1,o=this;if(e===""){this.highlightSpans={},Object.values(this.marks).forEach(async d=>{if(!d)return;let f=new Set;for(let w of d)if(w.parentNode)if(w.dataset.block)w.parentNode&&w.parentNode.removeChild(w);else if(!/^MARK$/i.test(w.nodeName))w.classList.remove("searchJumper"),w.style.cssText=w.dataset.css||"",delete w.dataset.css;else{let M=document.createTextNode(w.firstChild.data);w.parentNode.replaceChild(M,w);const E=M.parentNode;if(E&&E.nodeName==="SPAN"&&E.style.cssText==="all: unset;"){const v=E.parentNode;if(v){const k=document.createDocumentFragment();k.append(...E.childNodes),v.replaceChild(k,E)}}f.add(M.parentNode)}f.forEach(w=>{w.normalize()})}),[].forEach.call(t.querySelectorAll(".searchJumper-hide"),d=>{d.classList.remove("searchJumper-hide"),d.style.display="",d.removeAttribute("data-content")}),ie(this.navMarks,""),this.marks={},this.curHighlightWords=[];return}this.inPageStyle||(this.inPageStyle=Be(this.inPageCss)),this.inPageStyle.parentNode||document.head.appendChild(this.inPageStyle);let p=e==="insert";p?(e=this.curHighlightWords,this.refreshNavMarks()):this.curHighlightWords=(this.curHighlightWords||[]).concat(e),this.fakeTextareas=new Map;let h=Math.max(document.documentElement.scrollHeight,Q(document).scrollHeight);this.navMarks.style.display="none";let u=[];function m(d,f,w){let M,E=-1,v,k,g,T;v=0;let B=d.parentNode;if(d.nodeType==1&&d.className&&d.className.indexOf&&d.className.indexOf("searchJumper")!=-1)return 0;if(w&&(d.nodeType==1||d.nodeType==11)){let j=function(U,X,Y){let ae=[],b=X,x="",A="",y="";for(const N of H){const O=N.index;if(U>O)continue;let J=U-(O-N.text.length)-1,K="full";if(J<0?N.text.length<b?K="middle":K="end":N.text.length-J<b&&(K="start"),K==="full"&&(Y=""),re&&(K=="full"?(x=J==0?`
`:N.text[J-1],A=J+b==N.text.length?`
`:N.text[J+b],A!==`
`&&(y=J+b+1==N.text.length?`
`:N.text[J+b+1])):K=="start"&&!x?x=J==0?`
`:N.text[J-1]:(K=="end"||K=="full")&&!A&&(A=J+b==N.text.length?`
`:N.text[J+b],A!==`
`&&(y=J+b+1==N.text.length?`
`:N.text[J+b+1])),x&&A&&(/[a-z]/i.test(x)||/[a-rt-z]/i.test(A)||A.toLowerCase()=="s"&&/[a-z]/i.test(y))))break;J<0&&(J=0);let _=Math.min(b,N.text.length-J);if(b-=_,!N.text.trim()){K==="start"&&(U+=N.text.length);continue}let ce;for(let se=0;se<ne.length;se++)if(ne[se].node==N.node){ce=ne[se];break}if(ce?ce.match.push({pos:J,len:_,type:K,matched:Y}):ne.push({node:N.node,text:N.text,match:[{pos:J,len:_,type:K,matched:Y}]}),b<=0)break}},F=function(){if(E=-1,f.isRe){let U=C.match(new RegExp(f.content,f.reCase));U&&(M=U[0].length,E=U.index)}else{let U=o.findPosInStr(C,f.content,I,L,S);M=U.len,E=U.pos}if(E>-1){let U=C.slice(E,E+M);C=C.slice(E+M),I=I.slice(E+M),S=S.slice(E+M),E+=Z,Z=E+M,j(E,M,U),F()}},$=o.anylizeDomWithTextPos(d),C=$.text,I=C.toUpperCase(),S=[];for(let U=0;U<I.length;U++){const X=I[U].normalize("NFD").replace(/[\u0300-\u036f]/g,"");S.push(X)}let L=f.content.toUpperCase(),H=$.data,Z=0,ne=[],re=(f.init||n)&&/^[a-z]+$/i.test(f.content);F(),ne.length&&ne.forEach(U=>{if(typeof f.hideParent<"u"){let X=f.hideParent,Y=U.node.parentElement;for(;X-- >0&&Y;)Y=Y.parentElement;Y&&Y.classList&&!Y.classList.contains("searchJumper-hide")&&(ie(Y,""),Y.dataset.content=f.showWords,Y.classList.add("searchJumper-hide"))}else{let X=o.marks[f.showWords],Y=X.length,ae;const b=document.createElement("span");b.style.all="unset";let x=document.createTextNode(U.text);b.appendChild(x);let A=U.match.reverse(),y=[],N=A.length-1;A.forEach(O=>{switch(ae=o.createHighlightMark(f,Y+N,X),O.type){case"start":ae.style.borderTopRightRadius=0,ae.style.borderBottomRightRadius=0,N--;break;case"middle":ae.style.borderRadius=0;break;case"end":ae.style.borderTopLeftRadius=0,ae.style.borderBottomLeftRadius=0;break;default:N--;break}g=x.splitText(O.pos),O.type!="start"&&O.type!="middle"&&g.data.length&&g.splitText(O.len),T=g.cloneNode(!0),ae.appendChild(T),O.type!="full"&&O.type!="start"&&(ae.dataset.type=O.type),O.matched&&(ae.dataset.matched=O.matched),b.replaceChild(ae,g),y.unshift(ae)}),U.node.parentNode.replaceChild(b,U.node),o.marks[f.showWords].push(...y),y.forEach(O=>{O.dataset.type||u.push([O,f,Y,X,h])})}})}let W=!0;if(f.link){if(d.nodeType==1&&d.href&&d.href.match&&(W=!1,d.href.match(new RegExp(f.content,f.reCase))))if(typeof f.hideParent<"u"){let C=f.hideParent,I=d;for(;C-- >0&&I;)I=I.parentElement;if(I)return ie(I,""),I.dataset.content=f.showWords,I.classList.add("searchJumper-hide"),0}else{let C=o.marks[f.showWords],I=C.length;d.classList.add("searchJumper"),f.title&&(d.title=JSON.parse('"'+f.title+'"')),f.popup&&o.highlightPopup(d,f),d.dataset.css||(d.dataset.css=d.style.cssText),f.style&&(d.style.cssText+=f.style),d.addEventListener("click",S=>{if(S.altKey)return S.stopPropagation(),S.preventDefault(),!1}),d.dataset.content=f.showWords,d.addEventListener("mousedown",S=>{if(!S.altKey)return;let L;S.button===0?I!=C.length-1?o.focusIndex=I+1:o.focusIndex=0:S.button===2&&(I!=0?o.focusIndex=I-1:o.focusIndex=C.length-1),L=C[o.focusIndex],o.focusHighlight(L),o.setHighlightSpan(o.getHighlightSpanByText(f.showWords),o.focusIndex,C),o.focusText=f.showWords}),o.marks[f.showWords].push(d),u.push([d,f,I,C,h])}}else{let $="";if(d.nodeType==1&&d.value&&(d.offsetParent||d.offsetHeight)&&!f.init&&/^(button|select|input|textarea)$/i.test(d.nodeName)&&!/^(hidden|file|password|radio|range|checkbox|image)$/i.test(d.type)&&($=d.value),$){let F=function(U,X){if(U){if(!S){S=document.createElement("pre"),S.className="searchJumper";let b=document.createTextNode($);S.appendChild(b);let x,A=/^(number|string)$/,y=[],N=d.style;for(x in N)if(!/^(content|outline|outlineWidth)$/.test(x)){let O=L[x];O!==""&&A.test(typeof O)&&(x=x.replace(/([A-Z])/g,"-$1").toLowerCase(),y.push(x),y.push(":"),y.push(O),y.push(";"))}y=y.join(""),S.style.cssText=y,S.style.position="fixed",S.style.left="0px",S.style.top="0px",S.style.margin="0",d.nodeName&&d.nodeName.toLowerCase&&d.nodeName.toLowerCase()!=="textarea"&&(S.style.display="inline-grid",S.style.lineHeight=S.style.height,S.style.boxSizing=="border-box"&&(S.style.paddingTop=0)),o.fakeTextareas.set(d,S)}document.body.appendChild(S);let Y=document.createRange();Y.setStart(S.firstChild,Math.min(S.firstChild.length,X)),Y.setEnd(S.firstChild,Math.min(S.firstChild.length,X+1));let ae=Y.getBoundingClientRect();if(document.body.removeChild(S),typeof f.hideParent<"u"){let b=f.hideParent,x=d.parentElement;for(;b-- >0&&x;)x=x.parentElement;if(x)return ie(x,""),x.dataset.content=f.showWords,x.classList.add("searchJumper-hide"),0}else{let b=o.marks[f.showWords],x=b.length,A=document.createElement("mark");A.className="searchJumper",A.dataset.block=!0,f.title&&(A.title=JSON.parse('"'+f.title+'"')),A.style.cssText=f.style,A.dataset.content=f.showWords,A.innerText=U,A.style.padding="0",A.style.position="absolute",A.style.fontSize=S.style.fontSize,A.style.fontFamily=S.style.fontFamily,A.style.lineHeight="1",A.style.pointerEvents="none",d.parentNode.appendChild(A);let y=ae.left+H,N=ae.top+Z;if(A.style.left=y+"px",A.style.top=N+"px",o.marks[f.showWords].push(A),u.push([A,f,x,b,h]),d.nodeName&&d.nodeName.toLowerCase&&d.nodeName.toLowerCase()=="textarea"){let O=J=>{A.parentNode?(A.style.left=y-d.scrollLeft+"px",A.style.top=N-d.scrollTop+"px"):(A.parentNode.removeChild(A),d.removeEventListener("scroll",O))};d.addEventListener("scroll",O)}}}};W=!1;let C=!1,I=0,S=o.fakeTextareas.get(d);if(p&&S)return 0;let L=getComputedStyle(d),H=d.offsetLeft,Z=d.offsetTop,ne=$.toUpperCase(),re=[];for(let U=0;U<ne.length;U++){const X=ne[U].normalize("NFD").replace(/[\u0300-\u036f]/g,"");re.push(X)}let j=f.content.toUpperCase();for(;;){if(f.isRe)C=$.match(new RegExp(f.content,f.reCase)),C&&(E=C.index,C=C[0]);else{let U=o.findPosInStr($,f.content,ne,j,re);M=U.len,E=U.pos,(f.init||n)&&E>=0&&/^[a-z]+$/i.test(f.content)&&(E!==0&&/[a-z]/i.test($[E-1])&&(E=-1),E+f.content.length!==$.length&&/[a-z]/i.test($[E+M])&&(E=-1)),C=E>=0?$.slice(E,E+M):!1}if(C)F(C,I+E),I+=E+C.length,$=$.slice(E+C.length),ne=ne.slice(E+C.length),re=re.slice(E+C.length);else break}}}if(W&&(!i||d===t)&&(d.nodeType==1||d.nodeType==11)&&d.childNodes&&!/^(SCRIPT|STYLE|MARK|SVG|TEXTAREA)$/i.test(d.nodeName)&&(!f.init||d.ariaHidden!="true"&&d.role!="search"&&(!d.hasAttribute||d.hasAttribute("jsname")==!1)))if(!s&&/^(PRE|CODE)$/i.test(d.nodeName))a.push(d);else{for(var z=0;z<d.childNodes.length;++z)z=z+m(d.childNodes[z],f);try{d.shadowRoot&&(z=z+m(d.shadowRoot,f,!0))}catch($){fe($)}}return v}e.forEach(d=>{if(o.marks[d.showWords]||(o.marks[d.showWords]=[]),d.inRange){let f=t;t.parentNode&&(f=t.parentNode),[].forEach.call(f.querySelectorAll(d.inRange),w=>{(w==t||t.contains(w))&&m(w,d,!0)})}else m(t,d,!0)}),u.forEach(d=>{o.createNavMark(...d)}),this.navMarks.style.display="",setTimeout(()=>{o.navMarks.style.display="none",u=[],s=!0,e.forEach(d=>{o.marks[d.showWords]||(o.marks[d.showWords]=[]),a.forEach(f=>{m(f,d,!0)})}),u.forEach(d=>{o.createNavMark(...d)}),o.navMarks.style.display=""},1e3),this.navMarks.innerHTML!=""&&(this.searchJumperNavBar.classList.add("sjNavShow"),it&&(this.appendBar(),this.con.style.display="",this.setNav(!0,!0)))}refreshPageWords(e){this.lockWords="",this.searchJumperInPageInput.value="",ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords();let t=e||$e;t&&(this.searchJumperInPageInput.value=t,this.submitInPageWords(t==this.lastSearchEngineWords),this.appendBar())}refreshNav(){this.setNav(it)}refreshNavMarks(){this.refreshNavMarksTimer&&clearTimeout(this.refreshNavMarksTimer),this.refreshNavMarksTimer=setTimeout(()=>{let e=Math.max(document.documentElement.scrollHeight,Q(document).scrollHeight);this.navPointer.style.display="none",this.navMarks.style.display="none",[].forEach.call(this.navMarks.children,t=>{t.style.top=t.dataset.top/e*100+"%"}),this.navMarks.style.display=""},1e3)}checkCharacterData(e){setTimeout(()=>{this.highlight("insert",e,!0)},0)}removeMark(e){let t=e.dataset.content,i=this.marks[t];if(!i)return;var r=i.indexOf(e);if(r===-1)return;i.splice(r,1),this.marks[t]=i;let n=this.navMarks.querySelectorAll(`span[data-content="${t}"]`)[r];n&&this.navMarks.removeChild(n)}submitIgnoreSpace(e){e&&(!this.lockWords&&e.indexOf("$c")!==0&&e.indexOf("$o")!==0&&e.indexOf(" ")!==-1&&(this.splitSep="\u25CE"),this.searchJumperInPageInput.value=e,this.submitInPageWords())}siteBtnReturnHome(e){e.parentNode&&e.parentNode.removeChild(e)}closeShowAll(){if(!(!this.con.classList.contains("search-jumper-showall")||ze)){if(this.clearInputHide(),clearInterval(this.showAllTimeTimer),document.removeEventListener("mousedown",self.showAllMouseHandler),document.removeEventListener("keydown",self.showAllKeydownHandler),this.con.classList.remove("search-jumper-showall"),document.documentElement.style.scrollbarWidth=this.preScrollbarWidth,this.searchJumperInputKeyWords.value="",ie(this.historylist,""),this.touched=!1,this.initPos(),this.funcKeyCall&&this.setFuncKeyCall(!1),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){let e=this.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(e&&!e.classList.contains("search-jumper-open"))if(e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}this.bar.style.display=""}}toggleShowAll(){this.appendBar(),!(!this.con||!this.con.parentNode)&&(this.con.classList.contains("search-jumper-showall")?this.closeShowAll():this.showAllSites())}showAllSites(){if(!this.con||!this.con.parentNode||this.con.classList.contains("search-jumper-showall"))return;this.con.style.display="",this.clearInputHide(),this.alllist.appendChild(this.filterSites),ie(this.filterGlob,"");let e=this,t=this.tileInput.value;this.setFuncKeyCall(!1),this.hideSearchInput(),this.con.classList.add("search-jumper-showall"),this.con.querySelector(".search-jumper-showallBg").style.backdropFilter=ze?"none":"blur(8px)",this.preScrollbarWidth=document.documentElement.style.scrollbarWidth||"",document.documentElement.style.scrollbarWidth="none",clearInterval(this.showAllTimeTimer);const i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let r=new Date,n=r.getFullYear(),a=r.getMonth(),s=r.getDate(),o=n+"-"+(++a<10?"0"+a:a)+"-"+(s<10?"0"+s:s)+" \xB7 "+D(i[r.getDay()]);if(Ae.indexOf("zh")==0||Ae.indexOf("ja")==0){let u=Yr(n,a,s);if(u){let m=`${u.lunarYear}\u5E74${u.lunarMonth}\u6708${u.lunarDay}`;o=o+"<small>"+m+"</small>"}}ie(e.dayInAll,o);let p=()=>{let u=new Date,m=u.getHours(),d=u.getMinutes(),f=u.getSeconds();e.timeInAll.innerText=(m<10?"0"+m:m)+":"+(d<10?"0"+d:d)+":"+(f<10?"0"+f:f)};this.showAllTimeTimer=setInterval(p,1e3),p(),Se.forEach(u=>{if(u.style.display!="none"){let m=u.querySelector(".sitelist");m&&e.sitelistBox.appendChild(m)}}),[].forEach.call(e.sitelistBox.querySelectorAll(".sitelist"),u=>{u.style.opacity="",u.style.height="",e.initList(u)}),this.historySiteBtns.slice(0,20).forEach(u=>{let m=u.querySelector("img");m&&m.dataset.src&&Qe(m),e.historylist.appendChild(u)});let h="";R&&(R.nodeName.toUpperCase()=="A"||R.parentNode&&R.parentNode.nodeName.toUpperCase()=="A")&&(h=R.textContent.trim()),t=t||Oe()||h||Pe,this.searchJumperInputKeyWords.value=t,setTimeout(()=>{e.showAllMouseHandler||(e.showAllMouseHandler=u=>{(u.isTrusted==!1||u.target.className==="sitelistBox"||u.target.className==="search-jumper-showallBg"||u.target.id==="search-jumper-alllist")&&e.closeShowAll()}),e.con.addEventListener("mousedown",e.showAllMouseHandler),e.showAllKeydownHandler||(e.showAllKeydownHandler=u=>{u.keyCode==27&&e.closeShowAll()}),document.addEventListener("keydown",e.showAllKeydownHandler,!0),yt?(this.searchInput.value=yt,this.searchInput.dispatchEvent(new Event("input")),this.searchInput.focus(),this.searchInput.select()):this.searchJumperInputKeyWords.value&&(this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select())},0)}switchSite(e){if(!le||this.bar.style.display=="none")return;let t=this.con.querySelector(".search-jumper-btn.current");if(e)for(t=t.nextElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.nextElementSibling;else for(t=t.previousElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.previousElementSibling;t&&this.openSiteBtn(t,"_self")}clearInputHide(){Se.forEach(e=>{e.classList.remove("input-hide")}),this.allSiteBtns.forEach(e=>{e[0].classList.remove("input-hide")}),this.allListBtns.forEach(e=>{e.classList.remove("input-hide")}),this.allLists.forEach(e=>{e.classList.remove("input-hide")})}showSearchInput(){if(this.con&&this.con.classList.contains("search-jumper-showall"))return;this.recoveHistory(),this.con.classList.add("in-input"),this.searchInput.value="",this.contentContainer.appendChild(this.filterSites);let e=Je();if(e&&(this.searchJumperInputKeyWords.value=e),this.filterSitesTab.checked){this.con.classList.remove("in-find"),c.prefConfig.defaultPicker&&this.togglePicker(),this.searchJumperInputKeyWords.value||(this.searchJumperInputKeyWords.value=Oe());let t=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)>span");if(t&&!t.parentNode.classList.contains("search-jumper-open"))if(t.onmouseup)t.onmouseup();else{let i=new PointerEvent("mouseup");t.dispatchEvent(i)}yt&&(this.searchInput.value=yt,this.searchInput.dispatchEvent(new Event("input"))),this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select()}else this.searchInPageTab.checked&&(this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),setTimeout(()=>{e&&this.lockWords.indexOf(e)==-1?(this.searchJumperInPageInput.value="",this.navMarks.innerHTML?(this.searchJumperInPageInput.value=e,this.submitInPageWords()):this.submitIgnoreSpace(e)):this.searchJumperInPageInput.value?this.submitInPageWords():!this.initShowSearchInput&&Pe&&this.lockWords!==Pe&&(this.searchJumperInPageInput.value=Pe,this.initShowSearchInput=!0,this.searchJumperInPageInput.select())},10));this.inInput=!0,this.clearInputHide(),this.lockWords?this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px":this.searchJumperInPageInput.style.paddingLeft="",c.prefConfig.altToHighlight&&(document.removeEventListener("mouseup",this.checkSelHandler),document.addEventListener("mouseup",this.checkSelHandler))}togglePicker(){this.pickerBtn.classList.toggle("checked"),this.con.classList.toggle("in-pick"),this.searchJumperInputKeyWords.disabled=!this.searchJumperInputKeyWords.disabled,Te.toggle(!0),this.searchJumperInputKeyWords.disabled&&(this.searchJumperInputKeyWords.value="")}hideSearchInput(){this.inInput=!1,this.clearInputHide(),this.con.classList.remove("in-find"),this.con.classList.remove("in-input"),this.con.classList.remove("lock-input"),this.bar.classList.remove("initShow"),this.searchInput.value="",this.searchJumperInputKeyWords.value="",this.pickerBtn.classList.remove("checked"),this.searchJumperInputKeyWords.disabled=!1,Te.close(),document.removeEventListener("mouseup",this.checkSelHandler),this.setFuncKeyCall(!1),this.closeOpenType()}removeBar(){this.shadowContainer&&this.shadowContainer.parentNode&&this.shadowContainer.parentNode.removeChild(this.shadowContainer),this.con.parentNode&&this.con.parentNode.removeChild(this.con)}async testCSP(){let e=this,t=r=>{!r.violatedDirective||r.violatedDirective.indexOf("style-src")==-1||(Ze=!0)};window.addEventListener("securitypolicyviolation",t);let i=Be("html {color: #000;}");this.addToShadow(i),await Re(0),window.removeEventListener("securitypolicyviolation",t),i.parentNode&&i.parentNode.removeChild(i)}addToShadow(e){this.shadowContainer||(this.shadowContainer=document.createElement("div")),this.shadowContainer.parentNode||(ke?document.body.appendChild(this.shadowContainer):document.documentElement.appendChild(this.shadowContainer));let t;if(Ze){if(/^style$/i.test(e.nodeName))return!0;t=this.shadowContainer}else if(this.shadowRoot)t=this.shadowRoot;else{this.shadowContainer.className="search-jumper-shadow";let i=Be(`
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
                        `);this.shadowContainer.appendChild(i);let r=this.shadowContainer.attachShadow({mode:"closed"});t=document.createElement("div"),t.id="search-jumper-root",t.style.display="none",t.setAttribute("contenteditable","false");let n=document.createElement("style");ie(n,"#search-jumper-root{display: block!important;}"),t.appendChild(n),r.appendChild(t),this.shadowRoot=t}return e.parentNode!=t&&t.appendChild(e),!0}contains(e){return e==this.shadowContainer||this.bar.contains(e)}appendBar(){if((!st||!st.parentNode)&&(st=Be(Nt),Ze||this.addToShadow(st)),this.addToShadow(this.con)){let e=this,t=()=>{setTimeout(()=>{if(e.shadowContainer&&!e.shadowContainer.parentNode){ke?document.body.appendChild(e.shadowContainer):document.documentElement.appendChild(e.shadowContainer),t();return}!ze&&e.con.parentNode&&getComputedStyle(e.con).zIndex!="2147483646"&&(this.removeBar(),Ze?fe(D("cspDisabled")):(Ze=!0,st=Be(Nt),e.shadowContainer.parentNode.removeChild(e.shadowContainer),e.shadowContainer=document.createElement("div"),e.shadowContainer.setAttribute("contenteditable","false"),document.documentElement.appendChild(e.shadowContainer),e.appendBar()))},100)};t()}}async searchBySiteName(e,t,i){t||(t={}),t&&t.type==="drop"&&this.closeShowAll();for(let[r,n]of this.allSiteBtns)if(r.dataset.name==e){if(r.dataset.showTips){r.dispatchEvent(new CustomEvent("showTips"));return}await this.siteSetUrl(r,{button:t.button,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey});let a=/^(https?|ftp):/.test(r.href);a&&r.setAttribute("target",i?"_self":"_blank"),r.click(),a&&r.setAttribute("target",r.dataset.target==1?"_blank":"_self");return}for(let r=Se.length-1;r>=0;r--){let n=Se[r];if(n.dataset.type==e){n.firstChild.onmouseup&&n.firstChild.onmouseup({button:2});return}}}async searcAllhByTypeName(e){for(let t=Se.length-1;t>=0;t--){let i=Se[t];if(i.dataset.type==e){i.firstChild.onmouseup&&i.firstChild.onmouseup({button:2});return}}}autoGetFirstType(){R||(R=Q(document));let e;switch(R.nodeName.toUpperCase()){case"IMG":e=this.bar.querySelector(".search-jumper-targetImg:not(.notmatch)");break;case"AUDIO":e=this.bar.querySelector(".search-jumper-targetAudio:not(.notmatch)");break;case"VIDEO":e=this.bar.querySelector(".search-jumper-targetVideo:not(.notmatch)");break;case"A":Je()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)");break;default:Je()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):R.parentNode.nodeName.toUpperCase()==="A"?e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetPage:not(.notmatch)");break}if(e||(e=this.bar.querySelector(".search-jumper-targetAll:not(.notmatch)")||this.bar.querySelector(".search-jumper-type")),e){this.setFuncKeyCall(!1);let t=new PointerEvent("mouseup");e.classList.contains("search-jumper-open")&&(e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)),e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)}return e}searchAuto(e,t){e||(e=0);let i=this.autoGetFirstType();if(!i)return;let r=i.querySelectorAll("a.search-jumper-btn:not(.notmatch)");if(e<r.length){let n=r[e];this.searchBySiteName(n.dataset.name,t)}}setNav(e,t){!t&&it!=e&&(V.setItem("navEnable",e||""),it=e),e?(t||this.locBtn.classList.add("checked"),this.searchJumperNavBar.style.display=""):(t||this.locBtn.classList.remove("checked"),this.searchJumperNavBar.style.display="none",this.navPointer.style.display="none")}lockSearchInput(e){this.lockSiteKeywords=!0,this.searchLockInput.innerText=e,this.con.classList.add("lock-input"),this.searchInput.value="",this.searchInput.style.paddingLeft=`${15+this.searchLockInput.scrollWidth}px`,this.searchInput.placeholder=D("inputKeywords")}async initRun(){let e=this;this.siteIndex=1,this.customInput=!1,this.fontPool=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.dockerScaleBtns=[],this.bar.style.visibility="hidden";let t=0,i=[];this.checkSelHandler=j=>{j.altKey&&this.searchInPageTab.checked&&window.getSelection().toString()&&this.showSearchInput()},this.splitSep="\u25CE",this.lockWords="",this.marks={},this.initInPageWords=[],this.highlightSpans={},this.curHighlightWords=[],this.curWordIndex=0;let r=()=>{this.searchJumperInPageInput.focus(),this.highlight("");let j=this.lockWords.trim();if(!j){this.submitInPageWords();return}this.searchJumperInPageInput.value&&(j+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=j,ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft=""};document.addEventListener("keydown",j=>{j.keyCode===27&&(ze?(this.searchInput.value="",this.searchInput.dispatchEvent(new CustomEvent("input"))):this.inInput?this.hideSearchInput():this.lockWords?(this.highlight(""),this.searchJumperInPageInput.value=this.lockWords,this.lockWords="",ie(this.searchInPageLockWords,""),this.setNav(!1,!0)):this.funcKeyCall&&this.removeBar())},!0),this.searchJumperInPageInput.addEventListener("focus",j=>{this.searchInputDiv.classList.add("active")}),this.searchJumperInPageInput.addEventListener("blur",j=>{this.searchInputDiv.classList.remove("active")}),this.searchJumperInPageInput.addEventListener("keydown",j=>{switch(j.stopPropagation(),j.keyCode){case 8:if(!this.searchJumperInPageInput.value){let F=this.searchInPageLockWords.lastChild;F&&(F.dispatchEvent(new CustomEvent("editword")),j.preventDefault())}break;case 9:j.preventDefault(),this.filterSitesTab.checked=!0,this.con.classList.remove("in-find"),this.searchInput.focus();break;case 13:{let F=this.searchJumperInPageInput.value?this.submitInPageWords():[];if(F&&F.length>0){let U=F.pop();this.currentSearchInPageLockWords&&(this.currentSearchInPageLockWords.firstChild.style.transform=""),this.currentSearchInPageLockWords=U;let X=new PointerEvent("mousedown",{button:j.shiftKey?2:0});U.dispatchEvent(X)}else if(this.lockWords){this.currentSearchInPageLockWords||(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)");let U=new PointerEvent("mousedown",{button:j.shiftKey?2:0});this.currentSearchInPageLockWords.dispatchEvent(U)}}break;case 37:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.previousElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.previousElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;case 39:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.nextElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.nextElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;default:break}},!0),this.editBtn.addEventListener("click",j=>{r()}),this.addWord.addEventListener("click",j=>{this.showModifyWindow()}),this.searchInPageTab.addEventListener("change",j=>{this.initSetInPageWords(),this.searchJumperInPageInput.focus(),this.con.classList.add("in-find")}),this.filterSitesTab.addEventListener("change",j=>{this.searchInput.focus(),this.con.classList.remove("in-find")}),$e?(this.recoverBtn.addEventListener("click",j=>{this.lockWords="",this.searchJumperInPageInput.value=$e,ie(this.searchInPageLockWords,""),this.highlight(""),this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.pinBtn.classList.add("checked")):this.recoverBtn.style.display="none",this.pinBtn.addEventListener("click",j=>{this.submitInPageWords(),this.pinBtn.classList.contains("checked")?($e="",this.pinBtn.classList.remove("checked")):this.lockWords&&($e=this.lockWords,this.pinBtn.classList.add("checked")),V.setItem("globalInPageWords",$e)}),this.wordModeBtn.addEventListener("click",j=>{this.wordModeBtn.classList.contains("checked")?this.wordModeBtn.classList.remove("checked"):this.wordModeBtn.classList.add("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)}),this.saveRuleBtn.addEventListener("click",j=>{this.lockWords&&(ke||Qt(()=>{let F=c.prefConfig.inPageRule||{};return F[this.inPageRuleKey||ue.replace(/([&\?]_i=|#).*/,"")]=this.lockWords,c.prefConfig.inPageRule=F,c.lastModified=new Date().getTime(),Ot=c.lastModified,()=>Ce(D("save completed"))}))}),this.emptyBtn.addEventListener("click",j=>{this.lockWords="",this.searchJumperInPageInput.value="",ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.copyInPageBtn.addEventListener("click",j=>{this.lockWords&&(qe(this.lockWords.replace(/◎/g,`
`)),Ce("Copied successfully!"))}),this.setNav(it),this.locBtn.addEventListener("click",j=>{this.setNav(!this.locBtn.classList.contains("checked"))}),this.closeNavBtn.addEventListener("click",j=>{this.lockWords?(this.searchJumperInPageInput.value=this.lockWords||"",this.lockWords="",ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft="",this.highlight(""),this.searchJumperInPageInput.focus(),this.setNav(!1,!0),V.setItem("disableHighlight",location.hostname),this.bar.style.display==="none"&&this.removeBar()):this.setNav(!1)}),this.minNavBtn.addEventListener("click",j=>{if(this.searchJumperNavBar.classList.contains("minimize")){if(this.searchJumperNavBar.classList.remove("minimize"),this.lockWords.trim())return;this.submitInPageWords()}else{this.searchJumperNavBar.classList.add("minimize"),this.highlight("");let F=this.lockWords.trim();if(!F)return;this.searchJumperInPageInput.value&&(F+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=F,ie(this.searchInPageLockWords,""),this.searchJumperInPageInput.style.paddingLeft=""}}),this.maxNavBtn.addEventListener("click",j=>{e.showInPage(),e.showInPageSearch()}),this.navMarks.addEventListener("click",j=>{let F=j.offsetY/this.navMarks.clientHeight*100,U=[].slice.call(this.navMarks.querySelectorAll("span"));U.sort((Y,ae)=>(Y=parseFloat(Y.style.top),ae=parseFloat(ae.style.top),Y>ae?1:Y<ae?-1:0));let X;for(let Y=0;Y<U.length;Y++){X=U[Y];let ae=parseFloat(X.style.top);if(ae>F){if(Y>0){let b=U[Y-1],x=parseFloat(b.style.top);ae-F>F-x&&(X=b)}break}}X&&X.click()}),this.bar.addEventListener("mousedown",j=>{j&&j.stopPropagation&&j.stopPropagation(),j&&j.preventDefault&&j.preventDefault()}),this.con.addEventListener("dblclick",j=>{j.stopPropagation(),j.preventDefault()});let n=j=>{j.stopPropagation(),j.preventDefault();let F=e.searchJumperExpand.parentNode;if(!F||!F.classList.contains("not-expand"))return;F.classList.remove("not-expand"),F.classList.remove("search-jumper-move");let U=e.con.classList.contains("search-jumper-left")||e.con.classList.contains("search-jumper-right");F.removeChild(e.searchJumperExpand);let X=Math.max(F.scrollWidth,F.scrollHeight)+5+"px";U?(F.style.height=X,F.style.width=""):(F.style.width=X,F.style.height=""),setTimeout(()=>{e.checkScroll(),F.classList.add("search-jumper-move")},251)},a;this.searchJumperExpand.addEventListener("click",n,!0),this.searchJumperExpand.addEventListener("contextmenu",n,!0),this.searchJumperExpand.addEventListener("mouseenter",j=>{c.prefConfig.overOpen&&(clearTimeout(a),a=setTimeout(()=>{n(j)},500));let F=new CustomEvent("sitelist",{detail:{bind:j.currentTarget}});j.currentTarget.parentNode.dispatchEvent(F)},!1),c.prefConfig.overOpen&&this.searchJumperExpand.addEventListener("mouseleave",j=>{clearTimeout(a)},!1),this.pickerBtn.addEventListener("click",j=>{this.togglePicker()}),this.maxEleBtn.addEventListener("click",j=>{Te.expand()}),this.minEleBtn.addEventListener("click",j=>{Te.collapse()}),this.copyEleBtn.addEventListener("click",j=>{Te.copy()}),this.openLinkBtn.addEventListener("click",j=>{Te.openLinks()});let s=document.createElement("div");s.className="listArrow",this.listArrow=s,this.con.appendChild(s);for(let j of c.sitesConfig){if(j.bookmark||j.sites.length>100||/^BM/.test(j.type)&&j.icon==="bookmark"){i.push(j);continue}await this.createType(j),t+=j.sites.length,t>100&&(await Re(1),t=0)}this.initHistorySites(),this.initSort(),this.bar.style.visibility="",this.bar.style.display="none",this.searchInPageRule(),le&&kt.test(le.url)?this.inSearchEngine():c.prefConfig.alwaysShow&&!Et&&!pt&&(this.bar.style.display="",this.initPos(),this.appendBar()),Dt&&(R=Dt.target,this.batchOpen(Dt.sites,{button:2})),Dt=!1,et&&(this.submitAction(et).catch(j=>window.alert(j.message)),setTimeout(()=>{V.setListItem("inPagePostParams",location.hostname,"").catch(j=>console.warn("SearchJumper page actions:",j))},1e4));let o=j=>{clearTimeout(p);let F,U="";le&&!e.searchInput.value?(F=e.con.querySelector(".search-jumper-btn.current"),U="_self"):(F=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),U="_blank"),F&&e.openSiteBtn(F,U,!j.ctrlKey)},p,h=!1;this.inInput=!1;let u=()=>{yt!==e.searchInput.value&&(yt=e.searchInput.value,V.setItem("cacheFilter",yt))};this.searchInput.addEventListener("input",j=>{clearTimeout(p),p=setTimeout(()=>{h||e.searchSiteBtns(e.searchInput.value)},500)}),this.searchInput.addEventListener("compositionstart",function(){h=!0}),this.searchInput.addEventListener("compositionend",function(){h=!1}),this.searchInput.addEventListener("click",j=>{e.searchInput.select()}),this.searchInput.addEventListener("blur",j=>{u()}),this.searchInput.addEventListener("keydown",j=>{switch(j.stopPropagation(),j.keyCode){case 9:j.shiftKey&&(j.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords());break;case 13:if(this.searchJumperInputKeyWords.disabled){clearTimeout(p);let F,U="";le&&!e.searchInput.value?(F=e.con.querySelector(".search-jumper-btn.current"),U="_self"):(F=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),U="_blank"),F&&e.openSiteBtn(F,U,!j.ctrlKey)}else this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.value,u();break;case 8:break;default:break}}),this.searchJumperInputKeyWords.addEventListener("input",j=>{clearTimeout(p),p=setTimeout(()=>{h||e.getSuggest(e.searchJumperInputKeyWords.value)},200)}),this.searchJumperInputKeyWords.addEventListener("compositionstart",function(){h=!0}),this.searchJumperInputKeyWords.addEventListener("compositionend",function(){h=!1}),this.searchJumperInputKeyWords.addEventListener("keydown",j=>{switch(j.keyCode!==27&&j.stopPropagation(),j.keyCode){case 9:this.inInput?j.shiftKey||(j.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords()):(j.preventDefault(),this.searchInput.focus());break;case 13:o(j);break;default:break}},!0),this.con.addEventListener("keypress",j=>{j.stopPropagation()},!0),this.closeBtn.addEventListener("mousedown",j=>{e.hideSearchInput(),c.prefConfig.emptyAfterCloseInput&&(e.highlight(""),e.searchJumperInPageInput.value=e.lockWords||"",e.lockWords="",ie(e.searchInPageLockWords,""),e.setNav(!1,!0))});let m=window.innerWidth/2,d,f,w,M,E=j=>j.type.indexOf("mouse")===0?j.clientX:j.changedTouches[0].clientX,v=j=>j.type.indexOf("mouse")===0?j.clientY:j.changedTouches[0].clientY,k=j=>{let F=.25*window.innerWidth,U=m+E(j)-w;if(e.searchInputDiv.style.top="unset",e.searchInputDiv.style.left=U+"px",e.searchInputDiv.style.bottom=d-(v(j)-M)+"px",U>window.innerWidth/2){let X=window.innerWidth-U+F-50;e.searchInputDiv.style.maxWidth=X+"px"}else{let X=U+F;U<F&&(U+=F-U,e.searchInputDiv.style.left=U+"px"),e.searchInputDiv.style.maxWidth=X+"px"}j.stopPropagation(),j.preventDefault()},g=j=>{document.removeEventListener("mouseup",g),document.removeEventListener("mousemove",k),document.removeEventListener("touchend",g),document.removeEventListener("touchmove",k),f.style.cursor="",m+=E(j)-w,d-=v(j)-M},T=()=>{d||(d=e.con.classList.contains("search-jumper-bottom")?window.innerHeight*.95-60:window.innerHeight*.03)},B=!1;this.searchInputDiv.addEventListener("touchstart",j=>{B=!0,(j.target.className==="inputGroup"||j.target.nodeName.toUpperCase()==="LABEL")&&(T(),f=j.target,f.style.cursor="grabbing",w=E(j),M=v(j),document.addEventListener("touchend",g),document.addEventListener("touchmove",k))},{passive:!0,capture:!1}),this.searchInputDiv.addEventListener("mousedown",j=>{if(B){B=!1;return}(j.target.className==="inputGroup"||j.target.nodeName.toUpperCase()==="LABEL")&&(T(),f=j.target,f.style.cursor="grabbing",w=j.clientX,M=j.clientY,document.addEventListener("mouseup",g),document.addEventListener("mousemove",k),j.stopPropagation(),j.preventDefault())});let W,z,$=j=>{let F=j.clientX-z+W-10;this.searchInputDiv.style.width=F+"px"},C=j=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",C)};this.rightSizeChange.addEventListener("mousedown",j=>{z=j.clientX,W=this.searchInputDiv.clientWidth,document.addEventListener("mousemove",$),document.addEventListener("mouseup",C),j.stopPropagation(),j.preventDefault()});let I,S=j=>{if(!this.contains(j.target)){let F=/^(https?|ftp):/.test(I.href);F&&I.setAttribute("target","_blank"),F?ye(I.href,{active:!1,insert:!0}):I.click(),F&&I.setAttribute("target",I.dataset.target==1?"_blank":"_self")}Q(document).removeEventListener("dragover",L),document.removeEventListener("drop",S),document.removeEventListener("dragover",L)},L=j=>{j.preventDefault()},H=j=>{Q(document).removeEventListener("dragover",L),document.removeEventListener("drop",S),document.removeEventListener("dragover",L)};this.bar.addEventListener("dragstart",j=>{let F=j.target,U=F.parentNode;F.nodeName.toUpperCase()!=="IMG"&&F.nodeName.toUpperCase()!=="A"||(F.classList&&F.classList.contains("search-jumper-btn")?(I=F,Q(document).addEventListener("dragover",L),document.addEventListener("drop",S),document.addEventListener("dragend",H)):U&&U.classList&&U.classList.contains("search-jumper-btn")&&(I=U,Q(document).addEventListener("dragover",L),document.addEventListener("drop",S),document.addEventListener("dragend",H)))},!0),t=0;let Z=le!==!1;for(let j of i)await this.createType(j),t+=j.sites.length,t>200&&(await Re(1),t=0);if(!this.findInpageAddons){this.findInpageAddons=Le.searchJumperAddons.filter(X=>X.type=="findInPage").sort((X,Y)=>(X.sort||0)-(Y.sort||0));let j=this,F=0,U={};this.findInpageAddons.forEach(X=>{let Y=X.name||"addon"+F++;U[X.sort]||c.prefConfig.disableAddon[Y]===!0?X.disable=!0:(c.prefConfig.disableAddon[Y],X.disable=!1),U[X.sort]=!0,j.createAddonSpan(Y,X)})}if(this.fontPool.length>0||pt){const j="https://lib.baomitu.com/font-awesome/6.1.2/css/all.css";let F=["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css","https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/all.min.css"];(Ae||"").toLowerCase()==="zh-cn"&&F.unshift(j);let Y=(c.prefConfig.fontAwesomeCss||"").trim();Y&&F.unshift(Y);let ae=(b=0)=>{if(b>=F.length){this.buildAllPageGroupTab();return}let x=document.createElement("link");x.id="search-jumper-font-awesome",x.dataset.configuredUrl=Y,x.rel="stylesheet",x.href=F[b],document.documentElement.insertBefore(x,document.documentElement.children[0]);let A=x.cloneNode();this.addToShadow(A);let y=!1,N=()=>{y||(y=!0,clearTimeout(O),x.remove(),A.remove(),ae(b+1))},O=setTimeout(N,16e3);x.onerror=N;let J=()=>{if(y)return;y=!0,clearTimeout(O);let K=!1;this.fontPool.forEach(_=>{_.innerText="",_.style.fontSize="",_.style.color="",K=!0,ei.unshift(_)}),K&&pt&&setTimeout(()=>{dr()},500),this.buildAllPageGroupTab()};x.onload=()=>{y||qr(()=>{J()})}};ae()}else this.buildAllPageGroupTab();if(ze)return;ii&&ii!=location.hostname&&window.top==window.self&&V.setItem("disableHighlight",""),await this.testCSP();let ne=le&&kt.test(le.url);if(!Z&&ne?this.inSearchEngine():!le&&window.top==window.self&&this.checkSearchJump(),/^#sjhl=/.test(location.hash)){let j=location.hash.match(/^#sjhl=(.*?)(&i=(\d+))?$/),F=j[1],U=parseInt(j[3]||1)-1;try{F=decodeURIComponent(F)}catch(X){console.log(X)}this.setInPageWords(F,()=>{let Y=document.querySelectorAll("mark.searchJumper")[U];Y&&Y.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})})}else this.checkDiscussions();let re=this.initInPageWords&&this.initInPageWords.length;(ar||this.bar.style.display==="none"&&(!it||!re))&&this.removeBar()}checkDiscussions(){if(location.pathname==="/hoothin/SearchJumper/discussions/new"&&location.search==="?category=search-engines"){let e=c.sitesConfig.filter(t=>t&&!(/^BM/.test(t.type)&&t.icon==="bookmark"));lr('textarea[name="discussion[body]"]',"```json\n"+JSON.stringify(e,null,2)+"\n```")}}buildAllPageGroupTab(){let e=this;ie(this.groupTab,""),Se.forEach(t=>{if(t.classList.contains("notmatch"))return;let i=t.dataset.type,r=t.firstElementChild.cloneNode(!0);if(r.children.length>1){const a=r.children[1];a.onload=()=>{r.children[0].style.display="none",a.style.display=""},a.complete&&a.naturalWidth&&a.onload(),a.dataset.src&&Qe(a)}let n=document.createElement("span");n.appendChild(r),n.dataset.type=i,n.addEventListener("click",a=>{let s=e.sitelistBox.querySelector(`[data-type="${i}"]`);s&&s.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}),e.groupTab.appendChild(n)})}async refreshEngines(){if(c&&!this.refreshing){this.refreshing=!0,setTimeout(()=>{this.refreshing=!1},500),Ot=c.lastModified,this.removeBar(),Se&&Se.length&&Se.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),Se=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.historyTypeEle=null;for(let e of c.sitesConfig)await this.createType(e);this.initHistorySites(),this.initSort(),this.buildAllPageGroupTab(),ze&&this.appendBar()}}waitForHide(e){let t=this;if(this.bar.classList.contains("grabbing")||this.hiding)return;e===0&&(this.hiding=!0,setTimeout(()=>{t.hiding=!1},500)),this.touched=!1;var i=()=>{if(t.bar.classList.remove("search-jumper-isTargetImg"),t.bar.classList.remove("search-jumper-isTargetAudio"),t.bar.classList.remove("search-jumper-isTargetVideo"),t.bar.classList.remove("search-jumper-isTargetLink"),t.bar.classList.remove("initShow"),t.tips.style.opacity=0,t.tips.style.display="none",ie(t.tips,""),t.funcKeyCall)if(t.setFuncKeyCall(!1),le&&!le.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||t.con.classList.contains("resizePage")){t.initPos();let n=t.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(n&&!n.classList.contains("search-jumper-open"))if(n.onmouseup)n.onmouseup();else{let a=new PointerEvent("mouseup");n.dispatchEvent(a)}}else t.bar.style.display="none";c.prefConfig.autoClose&&t.closeOpenType(),t.hideTimeout=null};this.hideTimeout&&clearTimeout(this.hideTimeout);let r=typeof e>"u"?this.funcKeyCall?500:c.prefConfig.autoDelay||1e3:e;r?this.hideTimeout=setTimeout(i,r):i(),this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}searchEngineWords(e){return e=e.replace(/( |^)-\S+/g,""),/".+"/.test(e)&&(e=e.replace(/"(.+)"/g,(t,i,r,n)=>`\u25CE${i}\u25CE`).replace(/^◎|◎$/g,"")),this.lastSearchEngineWords=e.replace(/['";]/g," "),this.lastSearchEngineWords}setInPageWords(e,t,i){this.initInPageWords.push(e),this.con.classList.add("in-find");let r=()=>{setTimeout(async()=>{if(Q(document).style.display==="none"&&(Q(document).style.display=""),this.lockWords)this.initInPageWords=[];else{for(;document.hidden;)await Re(1e3);V.setItem("lastHighlight",location.hostname);let n=this.initInPageWords.shift();for(;n;)this.searchJumperInPageInput.value=n,this.submitInPageWords(!!i),n=this.initInPageWords.shift()}t&&t(),await Re(100),V.setItem("lastHighlight","")},300)};if(document.readyState!="complete"){let n=a=>{document.readyState=="complete"&&(document.removeEventListener("readystatechange",n),window.removeEventListener("load",n),r())};document.addEventListener("readystatechange",n),window.addEventListener("load",n)}else r()}searchInPageRule(){if(c.prefConfig.disableAutoHighlight){let e=c.prefConfig.disableAutoHighlight.trim().split(`
`);for(let t=0;t<e.length;t++){let i=e[t],r=!1;if(i.indexOf("/")===0){let n=i.match(/^\/(.*)\/([igm]*)$/);n&&(r=new RegExp(n[1],n[2]).test(ue))}else r=this.globMatch(i,ue);if(r){this.disableAutoHighlight=!0;return}}}if(rr===location.hostname&&(this.disableAutoHighlight=!0),c.prefConfig.inPageRule){let e=Object.keys(c.prefConfig.inPageRule);for(let t=0;t<e.length;t++){let i=e[t];if(!i)continue;let r=!1;if(i.indexOf("/")===0){let n=i.match(/^\/(.*)\/([igm]*)$/);n&&(r=new RegExp(n[1],n[2]).test(ue))}else r=this.globMatch(i,ue);if(r){let n=c.prefConfig.inPageRule[i];if(!n)continue;this.inPageRuleKey=i,this.disableAutoHighlight=!0,this.setInPageWords(n);break}}}}checkSearchJump(){if(this.inPageRuleKey||this.disableAutoHighlight)return;let e;if(c.prefConfig.showInSearchJumpPage&&ti&&!ii){let t=!_t&&ji&&location.href.indexOf(ji)!=-1;if(t&&V.setItem("clickLink",""),_t&&_t.indexOf(ti)!=-1||t){Pe&&this.wordModeBtn.classList.add("checked"),e=Pe;try{e=decodeURIComponent(e),e=this.searchEngineWords(e)}catch{}}}if(e=e||$e,e){this.appendBar();let t=this;this.setInPageWords(e,()=>{!t.navMarks.innerHTML&&t.bar.style.display==="none"&&t.removeBar()},!0)}else if(!this.searchJumperInPageInput.value&&_t.indexOf(ti)!=-1&&Pe){e=Pe,this.wordModeBtn.classList.add("checked");try{e=decodeURIComponent(e)}catch{}this.searchJumperInPageInput.value=e}}inSearchEngine(){if(!this.currentType||!le||Et||this.inPageRuleKey||this.disableAutoHighlight)return;if(!/sidesearch=(1|true)$/i.test(location.search)&&(!/#p{/.test(le.url)||le.keywords)){if(this.appendBar(),this.currentType.classList.contains("search-jumper-needInPage"))this.bar.classList.add("search-jumper-isTargetPage");else if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;c.prefConfig.hideOnSearchEngine||(this.bar.style.display="",this.initPos())}this.insertHistory(this.currentType,!0),this.wordModeBtn.classList.add("checked");let e=c.prefConfig.showInSearchEngine?this.searchEngineWords(Ge):$e;e&&this.setInPageWords(e,null,!0)}getSuggest(e){const t=this.suggestDatalist,i=c.prefConfig.suggestType,r=this.suggestRequestId=(this.suggestRequestId||0)+1;if(ie(t,""),!e||!["google","baidu","bing"].includes(i))return;const n={google:"https://suggestqueries.google.com/complete/search?client=youtube&q=%s&jsonp=window.google.ac.h",baidu:"https://suggestion.baidu.com/su?wd=%s&cb=",bing:"https://api.bing.com/qsonhs.aspx?type=json&q=%s"};new Promise((s,o)=>{We({method:"GET",url:n[i].replace("%s",encodeURIComponent(e)),anonymous:!0,referrerPolicy:"no-referrer",headers:{Referer:""},responseType:i==="baidu"?"blob":"",onload:p=>{if(p.status<200||p.status>=300)return o(new Error("Suggestion request failed"));if(i!=="baidu")return s(p.responseText||p.response);const h=new FileReader;h.onload=()=>s(h.result),h.onerror=()=>o(new Error("Could not decode suggestions")),h.readAsText(p.response,"GBK")},onerror:()=>o(new Error("Suggestion request failed")),ontimeout:()=>o(new Error("Suggestion request timed out"))})}).then(s=>{if(!s||r!==this.suggestRequestId||i!==c.prefConfig.suggestType)return;let o;if(i==="google"){const p=s.match(/window.google.ac.h\((.*)\)$/);o=p?JSON.parse(p[1])[1].map(h=>h[0]):[]}else if(i==="baidu"){const p=s.match(/.*,s:(.*)}\);$/);o=p?JSON.parse(p[1]):[]}else o=(JSON.parse(s).AS.Results||[]).flatMap(p=>p.Suggests.map(h=>h.Txt));for(const p of o){const h=document.createElement("option");h.value=p,t.appendChild(h)}}).catch(s=>fe(s))}searchSiteBtns(e){let t=e.indexOf("**"),i="",r=!1;t>0&&(i=e.slice(0,t),e=e.slice(t+2)),e.indexOf("^")===0?r=!0:(i=i.toLowerCase(),e=e.toLowerCase()),e?this.con.classList.add("searching"):this.con.classList.remove("searching");let n=!/[^\w\.\/\:\*\?\^\$]/.test(e);this.allListBtns.forEach(o=>{o.classList.add("input-hide")}),Se.forEach(o=>{o.classList.add("input-hide")});let a=0;ie(this.filterGlob,""),this.allSiteBtns.forEach(o=>{let p=o[0],h=o[1],u=p.parentNode,m=p.dataset.type,d=p.dataset.name,f=p.title;r||(m=m.toLowerCase(),d=d.toLowerCase(),f=f.toLowerCase());let w="";if(i){if(!this.globMatch(i,m))return;w=p.dataset.type+"**"}let M=!1;if(p.dataset.clone||(this.globMatch(e,d)?(M=!0,w+="^"+p.dataset.name+"$"):p.title&&this.globMatch(e,f)&&(M=!0,w+="^"+p.title+"$")),!M){if(n){if(!p.dataset.host){let E=/^https?:\/\/([^\/]*)\/[\s\S]*$/,v=h.url,k=E.test(v)?v.replace(E,"$1"):v;p.dataset.host=k&&k.split(`
`)[0].toLowerCase()}M=this.globMatch(e,p.dataset.host)}M?p.dataset.isPage&&(w+="^"+p.dataset.host+"$"):p.classList.add("input-hide")}if(M){p.classList.remove("input-hide"),u&&u.classList.remove("input-hide");let E;for(let v=0;v<this.allListBtns.length;v++)if(this.allListBtns[v].id=="list"+p.dataset.id){E=this.allListBtns[v];break}if(E&&E.classList.remove("input-hide"),a<50&&e&&this.searchInput.value!==w&&!this.filterGlob.querySelector(`option[value="${CSS.escape(w)}"]`)){a++;let k=document.createElement("option");k.value=w,this.filterGlob.appendChild(k)}}}),Se.forEach(o=>{let p;for(let h=0;h<this.allLists.length;h++)if(this.allLists[h].dataset.type==o.dataset.type){p=this.allLists[h];break}p&&(o.classList.contains("input-hide")?p.classList.add("input-hide"):p.classList.remove("input-hide"))});let s=this.bar.querySelector(".search-jumper-type:not(.input-hide)");if(s){if(!s.classList.contains("search-jumper-open")){let o=s.querySelector("span.search-jumper-btn");if(o.onmouseup)o.onmouseup();else{let p=new PointerEvent("mouseup");o.dispatchEvent(p)}}if(this.searchJumperExpand.parentNode==s){let o=new PointerEvent("click");this.searchJumperExpand.dispatchEvent(o)}}}globMatch(e,t,i){if(t.length>500)return!1;try{if(e.length==0||e==="*")return!0;if(e.length===1&&e[0]==="$")return!t||t.length===0;if(e.length>1&&e[0]==="*"&&(!t||t.length===0))return!1;if(!i)if(i=!0,e.length>1&&e[0]==="^"&&t&&t.length!==0){if(e=e.substring(1),e[0]!==t[0])return!1}else e[0]!=="*"&&(e="*"+e);if(e.length>1&&e[0]==="?"||e.length!=0&&t&&t.length!==0&&e[0]===t[0])return this.globMatch(e.substring(1),t.substring(1),!!i);if(e.length>0&&e[0]==="*")return this.globMatch(e.substring(1),t,!!i)||this.globMatch(e,t&&t.substring(1),!!i)}catch(r){fe(r)}return!1}setCurrentSite(e,t){le=e,t.classList.add("current"),Ge="",!/#p{|^(showTips|find)/.test(e.url)&&kt.test(e.url)&&(this.updateCacheKeywords(),V.setItem("referrer",location.hostname))}updateCacheKeywords(){let e=Oe();e&&e!=Pe&&(Pe=e,V.setItem("cacheKeywords",e))}refresh(){this.refreshInPageTimer&&clearTimeout(this.refreshInPageTimer),this.refreshInPageTimer=setTimeout(()=>{if(this.bar.style.display=="none"){le=null;let t;for(let i in c.sitesConfig){if(le)break;if(t=c.sitesConfig[i],!t)continue;let r=t.sites;for(let n in r){if(le)break;let a=r[n];if(!a||!a.url)continue;let s;if(a.match!=="0"){if(a.match)new RegExp(a.match).test(ue)&&(s=a);else if(a.url.indexOf(location.hostname)!=-1){if(a.url.indexOf("site")!=-1){let o=a.url.match(/site(%3A|:)([\s\S]+?)[\s%]/);o&&ue.indexOf(o[2])!=-1&&a.url.replace(o[0],"").indexOf(location.hostname)!=-1&&(s=a)}else if(!le&&a.url.replace(/^https?:\/\//,"").replace(location.host,"").replace(/\/?[\?#][\s\S]*/,"")==location.pathname.replace(/\/$/,"")){let o=a.url.match(/[^\/\?&]+(?=%[stb])/g);o&&(o=o.join(".*"),new RegExp(o).test(ue)&&(s=a))}}}if(s){let o=this.getTargetSitesByName([s.name])[0];this.currentType=o.parentNode,this.setCurrentSite(s,o)}}}if(le&&kt.test(le.url)&&(!/#p{/.test(le.url)||le.keywords)&&!c.prefConfig.hideOnSearchEngine){if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;this.appendBar(),this.bar.style.display="",this.initPos();let i=this.bar.querySelector(`.search-jumper-type[data-type="${t.type}"]>span`);if(i&&!i.classList.contains("search-jumper-open")&&(this.bar.insertBefore(i.parentNode,this.bar.children[0]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen))if(i.onmouseup)i.onmouseup();else{let r=new PointerEvent("mouseup");i.dispatchEvent(r)}}}let e=this.curHighlightWords;if(this.highlight(""),le&&c.prefConfig.showInSearchEngine){let t=this.lastSearchEngineWords,i=this.searchEngineWords(Oe());if(i&&t!=i){let r=this.anylizeInPageWords(i,!0);this.highlight(r)}else e&&this.highlight(e)}else e&&this.highlight(e)},500)}initSort(){if(c.prefConfig.shiftLastUsedType&&this.historyTypeEle&&(le?this.bar.insertBefore(this.historyTypeEle,this.bar.children[1]):this.bar.insertBefore(this.historyTypeEle,this.bar.children[0])),c.prefConfig.sortType){let e=this;Se.sort((r,n)=>{let a=Me[r.dataset.type]||0;return(Me[n.dataset.type]||0)-a});let t=!1,i=!e.bar.children[0].classList.contains("search-jumper-open");for(let r=Se.length-1;r>=0;r--){let n=Se[r],a=Me[n.dataset.type]||0;if(r==Se.length-1)a>0&&(t=!0,Me[n.dataset.type]=0);else{let s=Me[Se[r+1].dataset.type]||0;a-s>10&&(t=!0,Me[n.dataset.type]=s+10)}e.bar.insertBefore(n,e.bar.children[i?0:1])}t&&V.setItem("sortTypeNames",Me)}}initHistorySites(){this.historySiteBtns=[],this.txtHistorySiteBtns=[],this.imgHistorySiteBtns=[],this.linkHistorySiteBtns=[],this.videoHistorySiteBtns=[],this.audioHistorySiteBtns=[];let e=this;tt.forEach(async t=>{for(let i of c.sitesConfig){let r=!1,n=i.bookmark||i.sites.length>100||/^BM/.test(i.type)&&i.icon==="bookmark";for(let a=0;a<i.sites.length;a++){let s=i.sites[a];if(s.name==t){let o=await e.createSiteBtn(c.prefConfig.noIcons?"0":s.icon,s,!0,n,i,!0);o.classList.add("historySite"),e.historySiteBtns.push(o),!i.selectImg&&!i.selectLink&&!i.selectPage&&!i.selectVideo&&!i.selectAudio&&e.txtHistorySiteBtns.push(o),i.selectImg&&e.imgHistorySiteBtns.push(o),(i.selectLink||i.selectPage)&&e.linkHistorySiteBtns.push(o),i.selectVideo&&e.videoHistorySiteBtns.push(o),i.selectAudio&&e.audioHistorySiteBtns.push(o),r=!0;break}}if(r)break}})}insertHistory(e,t){if(!c.prefConfig.historyLength)return;e.style.width="auto",e.style.height="auto";let i=this;this.historyInserted=!0;let r=0,n=!t&&c.prefConfig.historyInsertFirst,a=!1,s=0;n||(a=this.searchJumperExpand.parentNode==e&&!c.prefConfig.expandType,a&&(s=(c.prefConfig.numPerLine||7)-1,s=c.prefConfig.historyLength<s?s+s-c.prefConfig.historyLength:s,c.prefConfig.hideTileType&&s++));let o=this.historySiteBtns;e.classList.contains("search-jumper-needInPage")?o=this.txtHistorySiteBtns:e.classList.contains("search-jumper-targetImg")?o=this.imgHistorySiteBtns:e.classList.contains("search-jumper-targetAudio")?o=this.audioHistorySiteBtns:e.classList.contains("search-jumper-targetVideo")?o=this.videoHistorySiteBtns:(e.classList.contains("search-jumper-targetLink")||e.classList.contains("search-jumper-targetPage"))&&(o=this.linkHistorySiteBtns);for(let p=0;p<o.length;p++){let h=o[p];if(h.style.display=="none")continue;let u=h.querySelector("img");if(u&&u.dataset.src&&Qe(u),h.parentNode!=e){let m=e.querySelectorAll("a.search-jumper-btn"),d=!1;for(let f=0;f<m.length;f++){let w=m[f];if((w.dataset.oriName||w.dataset.name)==(h.dataset.oriName||h.dataset.name)){d=!0;break}}if(d)continue;if(n)e.children.length>1?e.insertBefore(h,e.children[1]):e.appendChild(h);else if(a){let f=e.querySelectorAll("a.search-jumper-btn");f.length>s?e.insertBefore(h,f[s]):e.insertBefore(h,i.searchJumperExpand)}else e.appendChild(h);if(++r>=c.prefConfig.historyLength)break}else n&&(e.children.length>1?e.insertBefore(h,e.children[1]):e.appendChild(h))}e.style.width=e.scrollWidth+"px",e.style.height=e.scrollHeight+"px"}recoveHistory(){if(!c.prefConfig.historyLength||!this.historyInserted)return;this.historyInserted=!1;let e=this,t;for(let i=0;i<this.historySiteBtns.length;i++){let r=this.historySiteBtns[i];r.classList.contains("historySite")&&(t=r.parentNode,this.siteBtnReturnHome(r))}t&&t.classList.contains("search-jumper-open")&&(t.style.width="auto",t.style.height="auto",t.style.width=t.scrollWidth+"px",t.style.height=t.scrollHeight+"px")}bindSite(e,t){if(e.getAttribute("bind"))return;e.setAttribute("bind",!0);let i=this;t.href&&(e.href=t.href),e.style.display=t.style.display,e.addEventListener("mousedown",async r=>{t.dataset.showTips?(i.con.classList.contains("search-jumper-showall")?R=e.parentNode:i.waitForHide(0),t.dispatchEvent(new CustomEvent("showTips",{detail:e}))):(await i.siteSetUrl(t,{button:r.button,altKey:r.altKey,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey,metaKey:r.metaKey}),t.href&&(e.href=t.href),e.setAttribute("target",t.target)),e.onclick||(e.onclick=n=>(t.dataset.showTips||t.click(),n.stopPropagation(),n.preventDefault(),!1))},!1),e.addEventListener("dragover",r=>{r.preventDefault()},!0),e.addEventListener("dragenter",r=>{i.dragTarget&&i.dragTarget.classList.remove("dragTarget"),i.dragTarget=e,i.dragTarget.classList.add("dragTarget"),clearTimeout(i.dragTimer),i.dragTimer=setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},1e3)},!0),e.addEventListener("dragleave",r=>{e.classList.remove("dragTarget")},!0),e.addEventListener("drop",r=>{clearTimeout(i.dragTimer),i.dragTarget&&i.dragTarget.classList.remove("dragTarget"),i.searchBySiteName(t.dataset.name,r)},!0)}async createList(e,t,i){let r=this,n=document.createElement("div");n.className="sitelist",n.style.visibility="hidden";let a=document.createElement("div");a.className="sitelistCon",n.appendChild(a),n.addEventListener("mouseenter",h=>{r.listArrow.style.cssText=""});let s=document.createElement("p");const o=document.createElement("span");if(o.textContent=t.dataset.title,s.appendChild(o),s.title=D("batchOpen"),s.addEventListener("click",h=>{r.batchOpen(i,{ctrlKey:h.ctrlKey,shiftKey:h.shiftKey,altKey:h.altKey,metaKey:h.metaKey,button:h.ctrlKey||h.shiftKey||h.altKey||h.metaKey?0:2})}),n.dataset.type=t.dataset.type,a.appendChild(s),dt&&!Ue){const h=document.createElement("button");h.type="button",h.textContent=D("split").button,h.className="search-jumper-split-btn",h.addEventListener("click",u=>{u.stopPropagation(),r.openSplitSearch(i).catch(m=>window.alert(m.message))}),s.appendChild(h)}function p(h,u){let m=document.createElement("div");m.id="list"+u;let d=h.querySelector("img"),f=document.createElement("a");if(f.setAttribute("ref","noopener noreferrer"),r.bindSite(f,h),m.appendChild(f),r.allListBtns.push(m),d&&!c.prefConfig.noIcons){let M=d.src||d.dataset.src,E=document.createElement("img"),v=document.createElement("div");v.appendChild(E),f.appendChild(v),E.src=Vr,M&&(E.dataset.src=M)}let w=document.createElement("p");w.innerText=h.dataset.name,m.title=h.title,m.dataset.name=h.dataset.name,f.appendChild(w),a.appendChild(m)}try{for(let[h,u]of e.entries())p(u,u.dataset.id),h%50===49&&await Re(1)}catch{for(let u=0;u<e.length;u++){let m=e[u];p(m,m.dataset.id)}}return this.allLists.push(n),n}async initList(e){e.dataset.inited||(e.style.display="none",e.dataset.inited=!0,[].forEach.call(e.querySelectorAll("div>a>div>img"),t=>{if(t.dataset.src){const i=t.dataset.src;Kr(i,()=>{t.src=i}),delete t.dataset.src}}),await Re(0))}async listPos(e,t){await this.initList(t),t.style="",this.preList=t;let i=e.clientWidth,r=e.clientHeight,n=e.offsetLeft+i/2-this.con.scrollLeft,a=e.offsetTop+r/2-this.con.scrollTop,s=e.offsetParent;for(;s!==null;)n+=s.offsetLeft,a+=s.offsetTop,s=s.offsetParent;let o=window.innerWidth||document.documentElement.clientWidth,p=window.innerHeight||document.documentElement.clientHeight,h=this.listArrow.style;if(h.visibility="visible",h.opacity=1,this.funcKeyCall){t.style.display="block",h.opacity=0;const u=e.getBoundingClientRect();n=u.x+i/2-this.con.scrollLeft,a=u.y+r/2-this.con.scrollTop,n-=t.clientWidth/2;let m=e.getBoundingClientRect().top;m>p/2?(m<t.clientHeight+10&&(t.style.height=m-20+"px"),a-=t.clientHeight+r/2+5):(a+=r/2+5,m+t.clientHeight+r+10>p&&(t.style.height=p-m-r-20+"px")),n<20&&(n=20);let d=o-t.clientWidth-30;n>d&&(n=d),t.style.left=n+"px",t.style.top=a+"px",t.style.display=""}else if(this.bar.clientWidth>this.bar.clientHeight){let u=n;n<30?u=30:n>o-40&&(u=o-40),h.left=u-10+"px",a-r/2<100?(t.style.top=this.bar.clientHeight+"px",h.top=this.bar.clientHeight-10+"px"):(t.style.bottom=this.bar.clientHeight+"px",h.bottom=this.bar.clientHeight-9+"px"),n-=t.scrollWidth/2,n>o-t.scrollWidth-10&&(n=o-t.scrollWidth-10),n<0&&(n=0),t.style.left=n+"px"}else{let u=a;a<30?u=30:a>p-30&&(u=p-30),h.top=u-10+"px",n-i/2<100?(t.style.left=this.bar.clientWidth+"px",h.left=this.bar.clientWidth-9+"px"):(t.style.right=this.bar.clientWidth+"px",h.right=this.bar.clientWidth-9+"px"),a-=t.scrollHeight/2,a>p-t.scrollHeight&&(a=p-t.scrollHeight),a<0&&(a=0),t.style.top=a+"px",t.style.maxHeight="100vh"}}clingPos(e,t,i){let r=e.clientWidth||e.offsetWidth,n=e.clientHeight||e.offsetHeight;const a=e.getBoundingClientRect();let s,o,p=this.con&&this.con.classList.contains("search-jumper-showall"),h=window.innerWidth||document.documentElement.clientWidth,u=window.innerHeight||document.documentElement.clientHeight;if(this.tips.style.position="",t.style.height="",t.style.position="",!e||/^(body|html)$/i.test(e.nodeName))this.tips.style.transition="none",this.tips.style.position="fixed",t.style.right="",t.style.bottom="",t.style.left=(h-t.clientWidth)/2+"px",t.style.top="min(11%,110px)";else if(p)s=a.x+r/2,o=a.y+n/2,s-=t.clientWidth/2-this.con.scrollLeft,o+=this.con.scrollTop,o>u/2?o-=t.clientHeight+n/2+10:o+=n/2+10,t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px";else if(this.funcKeyCall||!e.classList.contains("search-jumper-btn")){t.style.position="absolute";let m=window.pageYOffset||document.documentElement.scrollTop||Q(document).scrollTop,d=window.pageXOffset||document.documentElement.scrollLeft||Q(document).scrollLeft;s=a.x+r/2-(this.funcKeyCall?this.con.scrollLeft-d:0),o=a.y+n/2-(this.funcKeyCall?this.con.scrollTop-m:0),s-=t.clientWidth/2;let f=e.getBoundingClientRect().top;f>u/2?(f<t.clientHeight+10&&(t.style.height=f-20+"px"),o-=t.clientHeight+n/2+5):(o+=n/2+5,f+t.clientHeight+n+10>u&&(t.style.height=u-f-n-20+"px")),s<20&&(s=20);let w=h+d-t.clientWidth-30;s>w&&(s=w),t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px"}else{s=e.offsetLeft+r/2-this.con.scrollLeft-e.parentNode.scrollLeft,o=e.offsetTop+n/2-this.con.scrollTop-e.parentNode.scrollTop;let m=e.offsetParent;for(;m!==null;)s+=m.offsetLeft,o+=m.offsetTop,m=m.offsetParent;o<n?(s-=t.clientWidth/2,o+=t.clientHeight/2,s<5?(s=5,t.style.left="5px",t.style.right="",t.style.bottom=""):s>h-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.bottom=""):(t.style.left=s+"px",t.style.right="",t.style.bottom=""),t.style.top=(i?n:n+20)+"px"):o>u-n-10?(s-=t.clientWidth/2,s<5?(t.style.left="5px",t.style.right="",t.style.top=""):s>h-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.top=""):(t.style.left=s+"px",t.style.right="",t.style.top=""),t.style.bottom=(i?n:n+20)+"px"):s>h-r-10?(t.style.left="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.right=(i?r:r+20)+"px",t.style.top=o+"px"):s<r?(t.style.right="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.left=(i?r:r+20)+"px",t.style.top=o+"px"):(t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px")}}tipsPos(e,t,i){ie(this.tips,t);let r=this.tips.querySelector("div");if(r&&!this.tips.querySelector("[data-close]")){let a=document.createElement("span");a.dataset.close=!0,a.innerText="\xD7",r.appendChild(a)}i&&this.tips.insertBefore(i,this.tips.firstChild),location.protocol==="https:"&&[].forEach.call(this.tips.querySelectorAll("[src^='http:']"),a=>{a.src=a.src.replace("http:","https:")}),this.tips.style.pointerEvents="",this.tips.style.display="",this.tips.style.opacity=1,this.clingPos(e,this.tips),clearTimeout(this.hideTips),this.tips.style.transition&&setTimeout(()=>{this.tips.style.transition=""},1);let n=this;[].forEach.call(this.tips.querySelectorAll("iframe"),a=>{let s=a.innerHTML;if(s)if(ie(a,""),a.src)a.addEventListener("load",o=>{try{if(!a||!a.parentNode)return;let p=a.contentDocument||a.contentWindow.document,h=p.createElement("div");p.body.appendChild(h),Jr(h,s,p)}catch{}});else try{let o=a.contentDocument||a.contentWindow.document;o.open(),o.write(s),o.close()}catch{}}),[].forEach.call(this.tips.querySelectorAll("img,video"),a=>{a.addEventListener("load",s=>{n.clingPos(e,n.tips)})}),window.markdownit&&(n.md||(n.md=window.markdownit()),[].forEach.call(this.tips.querySelectorAll(".markdown"),a=>{ie(a,n.md.render(a.innerHTML))}))}checkKwFilter(e,t){t.length>600&&(t=t.slice(0,500)+t.slice(t.length-10));let i=e.match(/^@{(.*?)}/);if(i){if(!R)return!1;let a=i[1];if(![].some.call(Si(a,document),o=>o===R))return!1;e=e.replace(i[0],"")}let r,n=e.match(/^\/(.*)\/(\w*)$/);return n?r=new RegExp(n[1],n[2]):r=new RegExp(e,"i"),r.test(t||"")}async createType(e){let t=this,i=e.type,r=e.icon,n=e.selectTxt,a=e.selectImg,s=e.selectAudio,o=e.selectVideo,p=e.selectLink,h=e.selectPage,u=e.sites,m=!1,d=typeof e.openInNewTab>"u"?c.prefConfig.openInNewTab:e.openInNewTab,f=[],w=document.createElement("span");w.className="search-jumper-type",!c.prefConfig.expandType&&u.length>10&&w.classList.add("not-expand"),e.match==="0"?(w.style.display="none",w.classList.add("notmatch")):e.match&&(new RegExp(e.match).test(ue)==!1?(w.style.display="none",w.classList.add("notmatch")):m=!0),typeof e.description<"u"?w.dataset.title=i+" - "+e.description:w.dataset.title=i,w.dataset.type=i;let M=document.createElement("span"),E=document.createElement("img"),v=document.createElement("b");i.length>=3?(v.innerText=i.trim().substr(0,4),/^[\w \-]+$/.test(v.innerText.substr(0,3))||(v.innerText=v.innerText.substr(0,2))):v.innerText=i,M.appendChild(v),E.style.display="none",w.appendChild(M),M.classList.add("search-jumper-word"),M.classList.add("search-jumper-btn"),M.classList.add("noIcon");let k=/^BM/.test(i)&&e.icon==="bookmark";if(r){M.classList.remove("noIcon");let b=/^[a-z\- ]+$/.test(r);if(E.onload=x=>{E.style.display="",v.innerText="",v.style.display="none",b||M.classList.remove("search-jumper-word")},b){let x=ge[r.trim().replace(/ /g,"_")];x==="fail"||!x?(v.className=r.indexOf("fa")===0?r:"fa fa-"+r,this.fontPool.push(v)):(v.innerText="",v.style.backgroundColor="currentColor",v.style.mask="url("+JSON.stringify(x)+") center / contain no-repeat")}else{if(/^data:/.test(r))E.src=r;else{let A=c.prefConfig.cacheSwitch&&ge[r];A==="fail"||(A?E.src=A:(Qe(E,r),!ge[r]&&!k&&Ve.push(E)))}M.appendChild(E)}}w.addEventListener("mouseleave",b=>{t.listArrow.style.cssText="",t.dockerScaleBtns.forEach(x=>{x.style.setProperty("--scale",1)})});let g=[],T=b=>{switch(c.prefConfig.batchOpenConfirm){case 1:window.confirm(D("batchOpenConfirm"))&&t.batchOpen(g,b);break;case 2:t.batchOpen(g,b);break;default:(w.classList.contains("search-jumper-open")||b.shiftKey||b.altKey||b.ctrlKey||b.metaKey||window.confirm(D("batchOpenConfirm")))&&t.batchOpen(g,b);break}};if(c.prefConfig.shortcut&&e.shortcut&&!w.classList.contains("notmatch")){let b=e.shortcut.replace("Key","").replace("Digit","").toUpperCase();b.length==1&&(w.dataset.title+=` (${b})`),document.addEventListener("keydown",x=>{if(!(c.prefConfig.shortcut==2&&!le)&&x.target.id!=="searchJumperInput"&&!(!e.ctrl==x.ctrlKey||!e.alt==x.altKey||!e.shift==x.shiftKey||!e.meta==x.metaKey)&&!(!c.prefConfig.enableInInput&&!e.ctrl&&!e.alt&&!e.shift&&!e.meta&&Mt(document))){var A=(x.key||String.fromCharCode(x.keyCode)).toLowerCase();(e.shortcut==x.code||e.shortcut==A)&&(T(x),x.stopPropagation())}})}let B=0,W=this.scale*40,z=(b,x)=>{if(c.prefConfig.staticPosition){x?delete b.dataset.disable:b.dataset.disable="true";return}x?(b.style.display="",w.children.length>2&&w.insertBefore(b,w.children[2])):(b.style.display="none",t.searchJumperExpand.parentNode==w?w.insertBefore(b,t.searchJumperExpand):w.appendChild(b))},$=(b,x)=>{let A=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right"),y=!1;R&&(y=Ti(R));let N=R&&(R.href||R.src);B=0,f.forEach((J,K)=>{let _=u[K],ce=!0;if(_.kwFilter){let pe;J.dataset.link?pe=N||b:pe=J.dataset.txt?b||R&&R.innerText||"":N||b||location.href,ce=t.checkKwFilter(_.kwFilter,pe)}ce&&J.dataset.paste?(ce=y,z(J,ce)):_.kwFilter&&z(J,ce);let se=J.querySelector("img");J.style.display!="none"&&B++,se&&!se.src&&se.dataset.src&&Qe(se)}),B>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(w.classList.add("not-expand"),w.appendChild(t.searchJumperExpand));let O=Math.max(w.scrollWidth,w.scrollHeight)+5+"px";c.prefConfig.disableTypeOpen&&(O=W+"px",x&&t.listPos(w.children[0],re)),A?(w.style.height=O,w.style.width=""):(w.style.width=O,w.style.height="")};M.addEventListener("checkSites",b=>{$(b.detail)},!1);let C=b=>{if(b){if(b.button===2)return T(b),!1;if(b.button===0&&(b.shiftKey||b.altKey||b.ctrlKey))return!1}if(t.funcKeyCall)return t.showAllSites(),!1;let x=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right");if(t.preList&&(t.preList.style.visibility="hidden",t.listArrow.style.cssText=""),w.classList.remove("search-jumper-move"),w.classList.contains("search-jumper-open"))c.prefConfig.minSizeMode&&t.bar.classList.add("minSizeModeClose"),w.classList.remove("search-jumper-open"),x?(w.style.height=W+"px",w.style.width=""):(w.style.height="",w.style.width=W+"px"),w.style.flexWrap="",c.prefConfig.disableTypeOpen&&(re.style.visibility="hidden");else{t.recoveHistory(),w.classList.add("search-jumper-open"),c.prefConfig.minSizeMode&&t.bar.classList.remove("minSizeModeClose");let A=Oe();$(A,b),setTimeout(()=>{w.classList.contains("search-jumper-open")&&(w.style.flexWrap="nowrap",w.classList.add("search-jumper-move"))},c.prefConfig.typeOpenTime),Se.forEach(y=>{w!=y&&(y.classList.remove("search-jumper-open"),y.style.width=W+"px",y.style.height=W+"px",y.style.flexWrap="")})}c.prefConfig.disableTypeOpen||setTimeout(()=>{t.checkScroll()},c.prefConfig.typeOpenTime)},I=!1,S,L,H=b=>{document.removeEventListener("mouseup",H),document.removeEventListener("mousemove",Z),I||C(b),I=!1},Z=b=>{I?(t.bar.style.left=L.x+b.clientX-S.x+"px",t.bar.style.top=L.y+b.clientY-S.y+"px"):(t.tips.style.opacity=0,t.tips.style.pointerEvents="",I=!0,S={x:b.clientX,y:b.clientY},L={x:parseInt(t.bar.style.left),y:parseInt(t.bar.style.top)})};M.onmouseup=function(b){if(b&&t.funcKeyCall&&b.button===0&&!(b.shiftKey||b.altKey||b.ctrlKey)){I=!1,b.preventDefault&&b.preventDefault(),document.addEventListener("mouseup",H),document.addEventListener("mousemove",Z);return}C(b)},M.oncontextmenu=function(b){b.preventDefault()},M.addEventListener("click",b=>(t.batchOpen(g,b),!1),!1),M.addEventListener("dblclick",b=>{b.stopPropagation(),b.preventDefault()},!0);let ne,re,j=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,F=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,U=!Yt||j>600&&F>600;w.addEventListener("sitelist",async b=>{w.appendChild(re),await t.listPos(b.detail.bind,re),re.style.display="block"},!1),M.addEventListener("mouseenter",b=>{if(!I&&(!t.funcKeyCall&&c.prefConfig.showSiteLists&&(c.prefConfig.alwaysShowSiteLists||!w.classList.contains("search-jumper-open"))?(w.appendChild(re),t.listPos(w.children[0],re)):U&&t.tipsPos(M,w.dataset.title),c.prefConfig.overOpen)){if(w.classList.contains("search-jumper-open"))return;clearTimeout(ne),ne=setTimeout(()=>{C(b)},500)}},!1),M.addEventListener("mouseleave",b=>{t.tips.style.opacity=0,t.tips.style.pointerEvents="",c.prefConfig.overOpen&&clearTimeout(ne)},!1);let X=!1,Y=u&&u.length>200;w.dataset.id=t.siteIndex,t.stopInput=!1;async function ae(b,x){if(!b.name)return;let A=await t.createSiteBtn(Y||c.prefConfig.noIcons?"0":b.icon,b,d,k,e);A&&(A.classList.contains("notmatch")||B++,A.dataset.type=i,A.dataset.id=t.siteIndex,t.siteIndex++,t.allSiteBtns.push([A,b]),w.appendChild(A),f.push(A),!b.nobatch&&b.match!=="0"&&g.push(b.name),!X&&!le&&(A.dataset.current||m)&&!w.classList.contains("notmatch")&&(X=!0,A.dataset.current&&(c.prefConfig.showCurrent||(A.style.display="none"),t.setCurrentSite(b,A)),t.currentType=w))}try{for(let[b,x]of u.entries())await ae(x,b),b%100===99&&await Re(1)}catch{for(let x=0;x<u.length;x++)ae(u[x],x);await Re(1)}if(c.prefConfig.sortSite&&w.children.length>1){f.sort((x,A)=>{let y=Ne[x.dataset.name]||0;return(Ne[A.dataset.name]||0)-y});let b=!1;for(let x=f.length-1;x>=0;x--){let A=f[x],y=Ne[A.dataset.name]||0;if(x==f.length-1)y>0&&(b=!0,Ne[A.dataset.name]=0);else{let N=Ne[f[x+1].dataset.name]||0;y-N>10&&(b=!0,Ne[A.dataset.name]=N+10)}w.insertBefore(A,w.children[1])}b&&V.setItem("sortSiteNames",Ne)}if(f.forEach(b=>{b.classList.contains("notmatch")&&w.appendChild(b)}),re=await t.createList(f,w,g),X){if(c.prefConfig.currentTypeFirst?t.bar.insertBefore(w,t.bar.children[0]):t.bar.insertBefore(w,t.bar.children[t.bar.children.length-1]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){w.classList.add("search-jumper-open"),w.classList.add("search-jumper-move"),B>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(w.classList.add("not-expand"),w.appendChild(t.searchJumperExpand));let b=-1,x=[];if(document.readyState!=="complete"){b=3;let A=y=>{document.readyState==="complete"&&(document.removeEventListener("readystatechange",A),window.removeEventListener("load",A),x.forEach(N=>{N&&!N.src&&N.dataset.src&&Qe(N)}),x=[])};document.addEventListener("readystatechange",A),window.addEventListener("load",A)}f.forEach((A,y)=>{let N=A.querySelector("img"),O=u[y];if(O&&Ge&&O.kwFilter){let J=t.checkKwFilter(O.kwFilter,Ge);z(A,J)}if(A.style.display!="none"&&N&&!N.src&&N.dataset.src){if(b>=0&&!/^data/.test(N.dataset.src))if(b!==0)b--;else{x.push(N);return}Qe(N)}})}}else t.historyTypeEle||zt==i&&(t.historyTypeEle=w),t.bar.insertBefore(w,t.bar.children[t.bar.children.length-1]);return w.style.width=w.scrollHeight+"px",w.style.height=w.scrollHeight+"px",re.style.display="none",w.appendChild(re),n&&a&&s&&o&&p&&h?w.classList.add("search-jumper-targetAll"):(n&&w.classList.add("search-jumper-needInPage"),a&&w.classList.add("search-jumper-targetImg"),s&&w.classList.add("search-jumper-targetAudio"),o&&w.classList.add("search-jumper-targetVideo"),p&&w.classList.add("search-jumper-targetLink"),h&&w.classList.add("search-jumper-targetPage")),Se.push(w),w}async openSiteBtn(e,t,i=!1){this.lastTips=null;let r=new CustomEvent("mouseenter");e.dispatchEvent(r),await this.siteSetUrl(e);let n=e.dataset.isPage;t||(t="_blank"),n&&e.setAttribute("target",t),n&&t=="_blank"&&e.href?ye(e.href,{active:i,insert:!0}):e.click(),e.setAttribute("target",e.dataset.target==1?"_blank":"_self")}async openSplitSearch(e){const t=this.searchJumperInputKeyWords.value||Oe()||this.tileInput.value||window.prompt(D("keywords"));if(!t||!t.trim())return;const i={pageUrl:location.href,title:document.title,charset:document.characterSet,elements:{},target:R&&{nodeName:R.nodeName,href:R.href,src:R.src,title:R.title,alt:R.alt,textContent:R.nodeName==="A"?R.textContent:""}},r=[],n=[];for(const s of this.getTargetSitesByName(e)){if(!s.resolveSplit){n.push(s.dataset.name);continue}const o=await s.resolveSplit(t,i);if(!o){n.push(s.dataset.name);continue}r.push({id:crypto.randomUUID(),name:s.dataset.name,site:s.splitSite,type:s.splitType,request:o})}if(!r.length)throw new Error(D("split").noEngines);const a=await(!1).runtime.sendMessage({action:"splitOpen",query:t,context:i,entries:r,skipped:n,lang:Ae});if(!a?.ok)throw new Error(D("split")[a?.error]||a?.error||D("split").ended)}async batchOpen(e,t,i){const r=this.getTargetSitesByName(e),n=!Ue&&i!==!0&&r.length&&r.every(s=>s.splitType?.openInNewTab===5);if(dt&&(t.altKey&&t.shiftKey||(i===5||n)&&!t.altKey&&!t.ctrlKey&&!t.shiftKey&&!t.metaKey)){try{await this.openSplitSearch(e)}catch(s){window.alert(s.message)}return}let a=this;if(a.batchOpening=!0,a.customInput=!1,t.altKey&&t.shiftKey){let s=window.innerWidth||document.documentElement.clientWidth,o="<title>SearchJumper Multi</title><style>body{background: black; margin: 0;}iframe{box-sizing: border-box;padding: 5px}</style>",p=window.open("","_blank"),h=1;for(let u of r)if(u.dataset.isPage){if(await a.siteSetUrl(u),a.stopInput)return;if(!u.href)continue;let m=document.createElement("iframe");m.width=r.length<=2||s<=1280?"50%":"33%",m.height="100%",m.frameBorder="0",m.sandbox="allow-same-origin allow-scripts allow-popups allow-forms",m.id="searchJumper"+h++,m.style.display="none",o+=m.outerHTML,We({method:"GET",url:u.href,headers:{referer:u.href,origin:u.href,"User-Agent":navigator.userAgent},onload:function(d){let f=p.document.querySelector("iframe#"+m.id),w=()=>{let M=f.contentDocument||f.contentWindow&&f.contentWindow.document;if(M)try{f.style.display="",f.src=u.href;let E=`<base href="${u.href.replace(/[^\/]*$/,"")}" />`,v=d.response.indexOf("<head")!==-1?d.response.replace(/(\<head.*?\>)/,"$1"+E):E+d.response;M.write(v)}catch{}else setTimeout(()=>{w()},500)};f&&w()},onerror:function(d){fe(d)},ontimeout:function(d){fe(d)}})}p.document.write(o),p.document.close()}else if((t.ctrlKey||t.metaKey)&&t.shiftKey)for(let s of r){if(await a.siteSetUrl(s),a.stopInput)return;if(s.dataset.isPage&&s.href){let o={};R&&(o={src:R.src||R.href||"",title:R.title||R.alt}),e=e.filter(p=>p!==s.dataset.name),V.setItem("lastSign",{target:o,sites:e}),setTimeout(()=>{ye(s.href,{incognito:!0})},300),setTimeout(()=>{V.setItem("lastSign",!1)},2e3);break}}else if(t.altKey){let s=[];for(let d of r)if(d.dataset.isPage){if(await a.siteSetUrl(d),a.stopInput)return;if(!d.href)continue;s.push(d.href)}let o=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,p=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,h=parseInt(o/800);h>s.length&&(h=s.length);let u=parseInt(o/h),m=p/(parseInt((s.length-1)/h)+1)-65;for(let d=0;d<s.length;d++){let f=d%h*u,w=parseInt(d/h)*(m+70);window.open(s[d]+"#searchJumperMin","_blank",`width=${u-10}, height=${m}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${f}, top=${w}`)}}else if(t.shiftKey)for(let s of r){if(await a.siteSetUrl(s),a.stopInput)return;if(s.dataset.isPage&&s.href){let o={};R&&(o={src:R.src||R.href||"",title:R.title||R.alt}),e=e.filter(p=>p!==s.dataset.name),V.setItem("lastSign",{target:o,sites:e}),window.open(s.href,"_blank"),setTimeout(()=>{V.setItem("lastSign",!1)},2e3);break}}else if(t.ctrlKey||t.metaKey){r.reverse();for(let s of r){if(await a.siteSetUrl(s),s.dataset.isPage&&s.href){ye(s.href,{active:!1,insert:!0});continue}if(a.stopInput)return;s.click()}}else t.button===2&&r.reverse().forEach(s=>{s.dataset.current||a.openSiteBtn(s,"_blank",!!i)});a.batchOpening=!1}async siteSetUrl(e,t){return new Promise(i=>{let r=a=>{e.removeEventListener("actionOver",r),i(!0)};e.addEventListener("actionOver",r);let n=new PointerEvent("mousedown",t);e.dispatchEvent(n)})}getTargetSitesByName(e,t){let i=this,r=[];return e.forEach(n=>{for(let a=0;a<i.allSiteBtns.length;a++){let s=i.allSiteBtns[a][0];if(s.dataset.name==n){if(!t&&s.dataset.pointer){if(s.dataset.oriName){let o=i.getTargetSitesByName([s.dataset.oriName],!0);if(o.length){r.push(...o);break}}}else r.push(s);break}}}),r}async submitAction(e){if(e=e.slice(),document.readyState!=="complete"&&document.readyState!=="interactive")return await Re(300),this.submitAction(e);let t,i,r=!1,n=this,a=!1,s=0,o=[],p=!1,h=[],u=Ke?null:await V.getItem("copyStore");u&&(h=JSON.parse(u));let m=async(d,f)=>{ct();let w=!0;if(d[0]==="sleep"||d[0]==="@sleep")await Re(d[1]),fe(`sleep ${d[1]}`);else if(d[0]==="@click")r=!0,await cr(d[1],f)||(w=!1);else if(d[0]==="@dblclick")r=!0,await es(d[1],f)||(w=!1);else if(d[0]==="@rclick")r=!0,await ts(d[1],f)||(w=!1);else if(d[1]==="click"&&d[0].indexOf("@")===0)r=!0,await cr(d[0].substr(1),f)||(w=!1);else if(d[0]==="@copy"){let M=await Ht(d[1],f);M&&M!==!0&&(h.push(M.innerText),wt||(w=!1))}else if(d[0]==="@call"){let M=n.getTargetSitesByName([d[1]])[0];if(M)At=At||Oe()||Pe,await n.siteSetUrl(M),M.click();else{let E=window[d[1]]||new Ci('"use strict";'+d[1]);E&&await E()}}else if(d[0]==="@open"){let M=await ri(d[1]);ct();const E=Ke;p?ye(M.href):(p=!0,setTimeout(()=>{E?.aborted||(location.href=M.href)},50))}else if(d[0]!=="@reload")if(d[0]==="@wait")d[1].indexOf("!")===0?await Qr(d[1].slice(1)):await ri(d[1]);else{let M=d[1];if(Ge||(Ge=M),M.indexOf("%input{")!==-1){let v=await n.showCustomInputWindow(M);if(v)M=v;else return await V.setListItem("inPagePostParams",location.hostname,""),!0}await lr(d[0],M,f)||(w=!1),d[0]!=="@"&&(i=Pt(d[0]))}return w};for(let d of e){if(d[0]==="@loopStart")a=!0,o=[],s=parseInt(d[1])||1;else if(d[0]==="@loopEnd")for(a=!1;s-- >0;){let f=!1,w=0;for(;!f;){f=!0;for(let M of o)await m(M,w)||(f=!1);w++}}else a?o.push(d):await m(d);if(et&&(et.shift(),et&&et.length?(await V.setListItem("inPagePostParams",location.hostname,et),h&&h.length&&V.setItem("copyStore",JSON.stringify(h))):(await V.setListItem("inPagePostParams",location.hostname,""),V.setItem("copyStore",""),h&&h.length&&qe(h.join(`
`))),d[0]==="@reload")){location.reload(!!d[1]);return}}if(a)for(a=!1;s-- >0;){let d=!1,f=0;for(;!d;){d=!0;for(let w of o)await m(w,f)||(d=!1);f++}}if(ct(),!r&&i){for(t=i.parentNode;t.nodeName.toUpperCase()!="FORM"&&(t=t.parentNode,!!t););if(t){let d=t.querySelector("[type=submit]");d?d.click():t.submit()}else Xr()}}getCloneData(e){for(let t=0;t<c.sitesConfig.length;t++){let i=c.sitesConfig[t];for(let r=0;r<i.sites.length;r++){let n=i.sites[r];if(!/^\[/.test(n.url)&&n.name==e)return n}}return null}async switchChinese(e,t){const i=e==="sc"?Le.tc2sc:Le.sc2tc;if(i)return i(t);let r=this;return r.switchChineseResolve||window.addEventListener("message",function(n){if(n.data&&n.data.type==="switchChineseResult"){const a=n.data.payload;r.switchChineseResolve(a)}}),new Promise(n=>{r.switchChineseResolve=n,window.postMessage({type:"switchChineseRequest",payload:{target:e,str:t}},"*"),setTimeout(()=>{n("")},300)})}async createSiteBtn(e,t,i,r,n,a){let s=this,o=document.createElement("a");o.setAttribute("ref","noopener noreferrer"),o.setAttribute("referrerPolicy","no-referrer");let p=t.name,h=t.match,u=!1,m,d=!r&&/^\[/.test(t.url),f=t.description,w=t.shortcut;if(typeof t.openInNewTab<"u"&&(i=t.openInNewTab),d){o.dataset.pointer=!0;let y=JSON.parse(t.url);if(y.length===1){o.dataset.clone=!0;let N=this.getCloneData(y[0]);N&&(o.dataset.oriName=N.name,t=N,t.icon&&e!=="0"&&(e=t.icon),t.description&&(f=t.description))}}/^d:/.test(t.url)?(o.setAttribute("download",""),t.url=t.url.replace(/^d:/,"")):/^showTips:/.test(t.url)&&(u=!0,o.dataset.showTips=!0),/^paste:/.test(t.url)&&(o.dataset.paste=!0);let M=/^(https?|ftp):/.test(t.url);M&&(o.dataset.isPage=M),o.className="search-jumper-btn",typeof f<"u"&&(o.title=f),o.dataset.name=p,o.classList.add("search-jumper-word"),o.dataset.inPagePost=t.url.indexOf("#p{")!=-1?"t":"f";let E=o.dataset.inPagePost==="t";if(h==="0")o.style.display="none",o.classList.add("notmatch");else if(!r&&(!le||t.hideNotMatch)&&window.top==window.self){if(h){let y,N=h.match(/^\/(.*)\/(\w*)$/);N?y=new RegExp(N[1],N[2]):y=new RegExp(h,"i"),y.test(ue)&&(o.dataset.current=!0)}else if(!d&&location.hostname&&t.url.indexOf(location.hostname)!=-1){this.inSiteMatch||(this.inSiteMatch=/site(%3A|:)(.+?)[\s%]/);let y=t.url.match(this.inSiteMatch);if(y)ue.indexOf(y[2])!=-1&&t.url.replace(y[0],"").indexOf(location.hostname)!=-1&&(o.dataset.current=!0);else if(this.pathMatch||(this.pathMatch=new RegExp("^https?://"+location.host+location.pathname+"?([\\?#].*|[%:#]p{|$)")),this.pathMatch.test(t.url))if(this.postMatch||(this.postMatch=/[#:%]p{/),this.postMatch.test(t.url))o.dataset.current=!0;else{this.paramMatch||(this.paramMatch=/[^\/\?&]+(?=%[stb])/g);let N=t.url.match(this.paramMatch);N?(N=N.join(".*"),new RegExp(N).test(ue)&&(o.dataset.current=!0)):o.dataset.current=!0}else t.url.indexOf("http")===0&&t.url.indexOf("?")===-1&&(this.keywordMatch||(this.keywordMatch=/%[stb][a-z]?\b/g),new RegExp(t.url.replace(/^https?/,"").replace(/[#%]\w+{.*/,"").replace(/\./g,"\\.").replace(this.keywordMatch,".*")).test(ue)&&(o.dataset.current=!0))}o.dataset.current||t.hideNotMatch&&(o.style.display="none",o.classList.add("notmatch"))}let v=document.createElement("span");!r&&p.length>=3?(v.innerText=p.substr(0,4),/^[\w \-]+$/.test(v.innerText.substr(0,3))||(v.innerText=v.innerText.substr(0,2))):v.innerText=p,o.appendChild(v);let k=document.createElement("img");if(k.style.display="none",o.appendChild(k),!a&&c.prefConfig.shortcut&&w&&!o.dataset.clone&&!o.classList.contains("notmatch")){let y=document.createElement("div"),N=w.replace("Key","").replace("Digit","").toUpperCase();N.length==1&&(y.innerText=N,o.appendChild(y)),document.addEventListener("keydown",async O=>{if(!(c.prefConfig.shortcut==2&&!le)&&O.target.id!=="searchJumperInput"&&!(!s.hideTimeout&&(!t.ctrl==O.ctrlKey||!t.alt==O.altKey||!t.shift==O.shiftKey||!t.meta==O.metaKey))&&s.bar.contains(o)&&!(!c.prefConfig.enableInInput&&!t.ctrl&&!t.alt&&!t.shift&&!t.meta&&Mt(document))){var J=(O.key||String.fromCharCode(O.keyCode)).toLowerCase();(w==O.code||w==J)&&(O.stopPropagation(),Mi&&(R=Mi),u?o.dispatchEvent(new CustomEvent("showTips")):await ne()!==!1&&!s.customInput&&o.click())}})}let g;if(e=="0"||(e?g=e:!r&&M?g=t.url.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"):/^showTips:https?:\/\//.test(t.url)&&(g=t.url.replace(/\?.*/,"").replace(/^showTips:(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"))),g)if(k.onload=N=>{o.classList.remove("search-jumper-word"),v.parentNode&&!c.prefConfig.showEngineWords&&v.parentNode.removeChild(v),k.style.display=""},/^data:/.test(g))k.dataset.src=g;else{let N=c.prefConfig.cacheSwitch&&ge[g];N==="fail"?o.dataset.current&&g.indexOf(location.host)!=-1&&(k.dataset.src=g,ge[g]="",r||setTimeout(()=>{Ni(k)},0)):N?k.dataset.src=N:(k.dataset.src=g,!r&&!ge[g]&&Ve.push(k))}M&&(i?(o.setAttribute("target","_blank"),o.dataset.target=1):o.setAttribute("target","_self"));let T=t.url,B=/%s[st]\b/.test(T),W=kt.test(T);W&&(o.dataset.txt=!0),/%[tb]\b/i.test(T)&&(o.dataset.link=!0);let z,$=async(y,N)=>{s.customInput=!1,T=t.url,z="";const O=s.bar.classList.contains("search-jumper-isTargetLink");let J=y||s.searchJumperInputKeyWords.value||Je()||s.tileInput.value;!J&&!Tt&&!O&&(J=Oe()),J&&!y&&(J!=Pe&&(s.keywordIndex=0,M&&(Pe=J,V.setItem("cacheKeywords",J))),z=J);let K;(E||/^c(opy)?:|^paste:/.test(T))&&(T.indexOf("%input{")!==-1&&(T=await new Promise(ee=>{s.showCustomInputWindow(T,G=>{ee(G)})}),o.dataset.url=""),K=T.match(/#p{([\s\S]*[^\\])}/));let _=N?.pageUrl||location.href,ce=new URL(_).host,se,pe=(ee,G,q,he)=>{if(ee.indexOf(G+"[")!==-1){let xe=ee.match(ai(G,"","\\[(.*?)(\\|(.+))?\\]")),de;if(xe){switch(xe[3]?de=q.split(xe[3]):(de=q.split(/[\n\r]/),de.length===1&&(de=q.split(" "))),s.keywordIndex||(s.keywordIndex=0),xe[1]){case"all":z=de.join(`
`);break;case"":q=de[s.keywordIndex],++s.keywordIndex>=de.length&&(s.keywordIndex=0);break;case"-1":--s.keywordIndex<0&&(s.keywordIndex=de.length-1),q=de[s.keywordIndex];break;default:q=de[parseInt(xe[1])||0];break}ee=ee.replace(xe[0],G)}}return Ai(ee,G,q,he)},be=!/^showTips:h/i.test(T)&&/^c(opy)?:|[#:%]P{|^javascript:|^showTips:/i.test(T),nt="",wi="",Ie="",Ui="",Ki="",qi=ee=>{let G=ee;if(G=pe(G,"%n",se),G=pe(G,"%su",nt),G=pe(G,"%sl",wi),G=pe(G,"%sr",u?Ie.replace(/\n/g,"\u3010SearchJumperBreak\u3011"):Ie),G=pe(G,"%S",Pe||Ie),G=pe(G,"%ss",Ui),G=pe(G,"%st",Ki),G=pe(G,"%se",escape?escape(Ie):Ie),G=pe(G,"%s",Ie,q=>be?q:encodeURIComponent(q)),/%bd\b/.test(G))try{let q=atob(Ie);G=pe(G,"%bd",q)}catch{console.log("No standard base64")}if(/%be\b/.test(G))try{let q=btoa(Ie);G=pe(G,"%be",q)}catch(q){console.log(q)}return G},vs=ee=>{let G=ee.match(/%element{(.*?)}(\.prop\((.*?)\))?/),q=0;for(;G&&!(q++>100);){let xe=G[1],de=G[3],me="";if(xe){let ut=Pt(xe);ut&&(de?me=ut.getAttribute(de)||ut[de]:me=ut.innerText)}else try{let ut=window.getSelection(),Tr=Te.getElements(),ot=document.createElement("div");if(Tr)Tr.forEach(ve=>{ot.appendChild(ve.cloneNode(!0))});else for(let ve=0,Ee=ut.rangeCount;ve<Ee;++ve)ot.appendChild(ut.getRangeAt(ve).cloneContents());if([].forEach.call(ot.querySelectorAll("style,script,svg,canvas"),ve=>{let Ee=document.createTextNode("");ve.parentNode.replaceChild(Ee,ve)}),document.body.appendChild(ot),de)for(let ve=0;ve<ot.childNodes.length;ve++){let Ee=ot.childNodes[ve];Ee.nodeType==3?(me+=Ee.nodeValue,me+=`
`):Ee.nodeType==1&&(me+=Ee.getAttribute(de)||Ee[de]||"",me+=`
`)}else[].forEach.call(ot.querySelectorAll("img"),ve=>{if(!ve.src)return;let Ee=document.createTextNode(` ![${(ve.alt||"").replace(/[\n\r]/g," ").trim()}](${ve.src||""}) `);ve.parentNode.replaceChild(Ee,ve)}),[].forEach.call(ot.querySelectorAll("a"),ve=>{if(!ve.href)return;let Ee=(ve.innerText||"").replace(/[\n\r]+/g,`
`).trim();if(!Ee)return;Ee=` [${Ee}](${ve.href||""}) `;let bi;Ee.indexOf(`
`)==-1?bi=document.createTextNode(Ee):(bi=document.createElement("pre"),ie(bi,Ee)),ve.parentNode.replaceChild(bi,ve)}),me=ot.innerText;me&&(me=me.replace(/[\n\r]\s*/g,`
`)),document.body.removeChild(ot)}catch(ut){console.error(ut)}N&&(Ue?me=N.elements[G[0]]||"":N.elements[G[0]]=me),ee=pe(ee,G[0],be?me:encodeURIComponent(me)),G=ee.match(/%element{(.*?)}(\.prop\((.*?)\))?/)}G=ee.match(/%date({(.*?)})?/),q=0;let he=new Date().getTime();for(;G&&!(q++>100);){let xe=G[2],de=he;if(xe){xe=xe.replace(/\s/g,"");let me=xe.match(/(\D*)?(\d+)/);for(;me;){switch(me[1]){case"-":de-=parseInt(me[2]);break;case"*":de*=parseInt(me[2]);break;case"/":me[2]&&me[2]!="0"&&(de=parseInt(de/parseInt(me[2])));break;default:de+=parseInt(me[2]);break}xe=xe.replace(me[0],""),me=xe.match(/(\D*)?(\d+)/)}}else de=he;ee=ee.replace(G[0],de),G=ee.match(/%date({(.*?)})?/)}return ee};if(!o.dataset.url){let ee=T;E&&(ee=ee.replace(K[0],"")),o.dataset.url=ee.replace(/%e\b/g,N?.charset||document.characterSet).replace(/%c\b/g,Yt?"mobile":"pc")}let we="",Bt="";se=z||N?.title||document.title;let at="",oe=vs(o.dataset.url);if(R&&R.nodeName){if(we=R.href||R.parentNode&&R.parentNode.href||"",Bt=we||R.parentNode&&R.parentNode.parentNode&&R.parentNode.parentNode.href||"",(n.selectImg||n.selectAudio||n.selectVideo)&&R.src&&(we=R.src),R.nodeName.toUpperCase()=="VIDEO"||R.nodeName.toUpperCase()=="AUDIO"){if(!we){let ee=R.querySelector("source");ee&&(we=ee.src)}we&&(we=we.replace(/^blob:/,""))}se=R.title||R.alt||N?.title||document.title,R.nodeName.toUpperCase()=="IMG"&&/%i\b/.test(T)?R.src&&(/^data/.test(R.src)?at=R.src:(s.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),at=await hr(R)),oe=oe.replace(/%i\b/g,at)):(R.nodeName.toUpperCase()=="A"||R.parentNode&&R.parentNode.nodeName.toUpperCase()=="A")&&W&&!J&&R.textContent.trim()&&(J=R.textContent.trim())}for(;oe.indexOf("%template{")!==-1;){let ee=oe.match(/%template{(.*?[^\\])}/);if(!ee)return!1;let G=ee[1];c.prefConfig.templateData||(c.prefConfig.templateData={});let q=c.prefConfig.templateData[G];if(!q){if(s.stopInput)return!1;if(q=window.prompt(D("template",G))||"",q)c.prefConfig.templateData[G]=q,V.setItem("searchData",c);else return!1}oe=oe.replace(ee[0],q)}for(;oe.indexOf("%input{")!==-1;){let ee=oe.match(/%input{(.*?[^\\])}/);if(!ee||(s.customInput=!0,s.stopInput))return!1;if(s.batchOpening){let G;if(ee[1].indexOf('"')===0&&ee[1].indexOf('","')!==-1?G=ee[1].substr(1,ee[1].length-2).split('","'):G=ee[1].split(","),G.length===2?G=window.prompt(G[0],G[1]):G=window.prompt(ee[1]),G===null)return!1;oe=oe.replace(ee[0],G)}else break}we&&(we=we.replace(/%(\w{2})/g,(ee,G)=>`%${G.toUpperCase()}`)),Bt&&(Bt=Bt.replace(/%(\w{2})/g,(ee,G)=>`%${G.toUpperCase()}`));let $t=we.replace(/^https?:\/\//i,"");!J&&O&&(J=we),J||(J=le&&Pe);try{if(typeof navigator.clipboard.readText<"u"&&(!J&&W&&(J=await navigator.clipboard.readText(),J&&!y&&(z=J)),!at&&/%i\b/.test(T))){if((await navigator.permissions.query({name:"clipboard-read"})).state!=="denied"){const G=await navigator.clipboard.read();for(const q of G)if(q.types.includes("image/png")){const he=await q.getType("image/png");at=await new Promise(xe=>{const de=new FileReader;de.onload=function(me){xe(me.target&&me.target.result)},de.readAsDataURL(he)}),at&&(oe=oe.replace(/%i\b/g,at))}}if(!at){s.customInput=!0;let G=window.prompt(D("targetUrl"),"https://www.google.com/favicon.ico");if(G)s.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),at=await ni(G);else return!1}}}catch(ee){console.error(ee.message)}if(!J&&W){if(s.customInput=!0,s.con.classList.contains("search-jumper-showall")||s.inInput||u||s.stopInput)return!1;let ee=window.prompt(D("keywords"));if(ee===null)return!1;Ge=ee,setTimeout(()=>{Ge=""},1),J=ee,Ie=J,nt=Ie.toUpperCase(),wi=Ie.toLowerCase(),B&&(Ui=await s.switchChinese("sc",Ie),Ki=await s.switchChinese("tc",Ie)),be||(J=encodeURIComponent(J)),oe=qi(oe)}else J&&!nt&&!wi&&!Ie&&(Ie=J,nt=Ie.toUpperCase(),wi=Ie.toLowerCase(),B&&(Ui=await s.switchChinese("sc",Ie),Ki=await s.switchChinese("tc",Ie)),be||(J=encodeURIComponent(J)));if(we===""){let ee=Je()||s.searchJumperInputKeyWords.value||s.tileInput.value;if(!W&&ee&&/^\w{1,8}:/i.test(ee))we=ee,we=we.replace(/%(\w{2})/g,(G,q)=>`%${q.toUpperCase()}`);else{let G=!1,q=()=>!(s.stopInput||u||(G===!1&&(G=window.prompt(D("targetUrl"),"https://www.google.com/favicon.ico"),G&&(G=G.replace(/%(\w{2})/g,(he,xe)=>`%${xe.toUpperCase()}`),R={src:G})),G===null));if(/%t\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=pe(oe,"%t",G)}if(/%T\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%T\b/g,encodeURIComponent(G))}if(/%τ\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(G)))}if(/%b\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%b\b/g,G.replace(/^https?:\/\//i,""))}if(/%B\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%B\b/g,encodeURIComponent(G.replace(/^https?:\/\//i,"")))}if(/%β\b/.test(oe)){if(s.customInput=!0,q()===!1)return!1;oe=oe.replace(/%β\b/g,encodeURIComponent(encodeURIComponent(G.replace(/^https?:\/\//i,""))))}}}let Gi=ce;if((Bt||we)&&!o.dataset.link&&(_=Bt||we,Gi=_.replace(/^\w+:\/\/([^\/]+).*/,"$1")),E){let ee=[],G=!1;if(K[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(q=>{if(q=q.trim(),/^loopStart\(\d+\)$/.test(q)){let he=q.match(/loopStart\((.*)\)/);ee.push(["@loopStart",he[1]])}else if(q=="loopEnd")ee.push(["@loopEnd",""]);else if(q.startsWith("click(")&&q.endsWith(")")){let he=q.slice(6,q.length-1);he&&ee.push(["@click",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("dblclick(")&&q.endsWith(")")){let he=q.slice(9,q.length-1);he&&ee.push(["@dblclick",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("rclick(")&&q.endsWith(")")){let he=q.slice(7,q.length-1);he&&ee.push(["@rclick",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("copy(")&&q.endsWith(")")){let he=q.slice(5,q.length-1);he&&ee.push(["@copy",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("call(")&&q.endsWith(")")){let he=q.slice(5,q.length-1);he&&(ee.push(["@call",he.replace(/\\([\=&])/g,"$1").trim()]),G=!0)}else if(q.startsWith("reload(")&&q.endsWith(")")){let he=q.slice(7,q.length-1);ee.push(["@reload",he.trim()])}else if(q.startsWith("wait(")&&q.endsWith(")")){let he=q.slice(5,q.length-1);ee.push(["@wait",he.replace(/\\([\=&])/g,"$1").trim()])}else if(q.startsWith("open(")&&q.endsWith(")")){let he=q.slice(5,q.length-1);he&&ee.push(["@open",he.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(q)){let he=q.match(/sleep\((.*)\)/);he&&ee.push(["@sleep",he[1]])}else{q=q.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let he=q.split("SJ^PARAM");if(he.length===2){let xe=he[0],de=qi(he[1].replace(/\\([\=&])/g,"$1").replace(/%e\b/g,document.characterSet).replace(/%i\b/g,at).replace(/%c\b/g,Yt?"mobile":"pc").replace(/%U\b/g,encodeURIComponent(_)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(_))).replace(/%h\b/g,Gi).replace(/%T\b/g,encodeURIComponent(we)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(we))).replace(/%b\b/g,$t).replace(/%B\b/g,encodeURIComponent($t)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent($t))));de=pe(de,"%t",we),de=pe(de,"%u",_),ee.push([xe,de])}else(q.endsWith(".click()")||q.endsWith(".click"))&&ee.push(["@"+q.replace(/\.click(\(\))?$/,""),"click"])}}),G&&s.updateCacheKeywords(),N)N.request.actions=ee,oe||(oe=N.pageUrl);else{if(oe===""||oe===location.href)return et=ee,this.submitAction(ee).catch(q=>window.alert(q.message)),!1;try{await V.setListItem("inPagePostParams",new URL(oe,location.href).hostname,ee)}catch(q){return window.alert(q.message),!1}}}return oe=pe(oe,"%h",Gi),oe=pe(oe,"%t",we),oe=pe(oe,"%u",_),oe=qi(oe.replace(/%U\b/g,encodeURIComponent(_)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(_))).replace(/%T\b/g,encodeURIComponent(we)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(we))).replace(/%b\b/g,$t).replace(/%B\b/g,encodeURIComponent($t)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent($t)))),i&&/^(https?|ftp):/.test(oe)?(o.setAttribute("target","_blank"),o.dataset.target=1):o.dataset.target=0,oe};dt&&(o.splitType={...n,sites:void 0}),dt&&/^(https?:|#p\{)/i.test(t.url)&&!/[:%]P\{/.test(t.url)&&(o.splitSite={...t},o.resolveSplit=async(y,N)=>{const O={},J=R;Ue&&(R=N.target||Q(document)),delete o.dataset.url;let K;try{K=await $(y,{...N,request:O})}finally{R=J}if(!K)return null;K=K.trim();const _=K.replace(/[:%]p\{[\s\S]*?\}/,"").replace(/#(j(umpFrom|f)?|from)\{.*?\}/,"");return/^https?:\/\//i.test(_)?(O.url=_,O.kind=O.actions?"automation":/[:%]p\{/.test(K)||t.charset&&t.charset.toLowerCase()!=="utf-8"?"form":"get",O.kind==="form"&&(O.formUrl=K,O.charset=t.charset||"utf-8"),O):null});let C,I=!1,S,L,H,Z,ne=async y=>{if(!o.dataset.disable){if(delete o.href,y||(y={}),S=y.altKey,L=y.ctrlKey,H=y.metaKey,Z=y.shiftKey,!S&&!L&&!H&&!Z&&(y.button==1||y.button==2?(S=!1,L=!0,H=!1,Z=!1):i===2?(S=!1,L=!0,H=!1,Z=!0):i===3?(S=!0,L=!1,H=!1,Z=!1):i===4&&(S=!1,L=!0,H=!1,Z=!1)),u){o.removeAttribute("target"),m&&(/^(https?|ftp):/.test(m)?(C=m,o.href=C,i?o.setAttribute("target","_blank"):o.setAttribute("target","_self")):(/^copy:/.test(m)&&(m=m.replace(/^copy:/,"")),qe(m))),o.dispatchEvent(new Event("actionOver"));return}if(I=!1,C="",C=await $(),/^(https?|ftp):/.test(C)&&y.stopPropagation&&y.stopPropagation(),/^c(opy)?:|^paste:/.test(t.url)||/^javascript:/.test(t.url)||/^\[/.test(t.url)||/[:%]P{/.test(t.url)||t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url))(y.button==1||y.button==2)&&(I=!0);else{if(!C){s.stopInput||(s.stopInput=!0,setTimeout(()=>{s.stopInput=!1},1)),o.dispatchEvent(new Event("actionOver"));return}o.href=C}s.customInput&&C&&(I=!0),o.dispatchEvent(new Event("actionOver")),I&&(y.preventDefault&&y.preventDefault(),o.click())}},re=()=>{let y=Math.max(c.prefConfig.historyLength,20),N=o.dataset.current;if(!t.hideNotMatch&&!t.kwFilter&&!o.dataset.clone&&!o.dataset.paste&&h!=="0"&&y&&!N&&V.getItem("historySites",O=>{tt=O||[],tt=tt.filter(J=>J&&J!=p),tt.unshift(p),tt.length>y&&(tt=tt.slice(0,y)),V.setItem("historySites",tt)}),c.prefConfig.shiftLastUsedType&&!N){let O=o.parentNode;!(O&&(O.classList.contains("search-jumper-targetAll")||O.classList.contains("search-jumper-targetImg")||O.classList.contains("search-jumper-targetAudio")||O.classList.contains("search-jumper-targetVideo")||O.classList.contains("search-jumper-targetLink")||O.classList.contains("search-jumper-targetPage")||O.classList.contains("search-jumper-needInPage")))&&zt!=o.dataset.type&&(zt=o.dataset.type,V.setItem("historyType",zt))}c.prefConfig.sortType&&V.getItem("sortTypeNames",O=>{Me=O||{},Me[o.dataset.type]?Me[o.dataset.type]=Me[o.dataset.type]+1:Me[o.dataset.type]=1,V.setItem("sortTypeNames",Me)}),c.prefConfig.sortSite&&V.getItem("sortSiteNames",O=>{Ne=O||{},Ne[o.dataset.name]?Ne[o.dataset.name]=Ne[o.dataset.name]+1:Ne[o.dataset.name]=1,V.setItem("sortSiteNames",Ne)})},j=(y,N)=>{qe(N);let O=o;y||(s.appendBar(),s.closeOpenType(),s.con.style.display="",s.setFuncKeyCall(!0),window.getSelection().toString()?O=R||o:O=Q(document),s.tileInput.parentNode&&s.tileInput.parentNode.removeChild(s.tileInput)),s.tipsPos(O,D("copyOver")),clearTimeout(s.hideTips),s.hideTips=setTimeout(()=>{s.tips.style.opacity=="1"&&(s.tips.style.opacity=0,s.tips.style.pointerEvents="")},1500)},F=y=>{if(y&&y.stopPropagation&&y.stopPropagation(),o.dataset.disable)return;if(R&&R.focus&&R.focus(),u&&s.waitForShowTips)return b(o,0),y&&y.preventDefault&&y.preventDefault(),!1;if(I=!0,!C)return y&&y.preventDefault&&y.preventDefault(),!1;y||(y={});let N=/^(https?|ftp):/.test(C);if(!s.batchOpening&&!r&&re(),dt&&!Ue&&i===5&&o.resolveSplit&&!S&&!L&&!H&&!Z)return y.preventDefault&&y.preventDefault(),s.openSplitSearch([t.name]).catch(J=>window.alert(J.message)),!1;if((c.prefConfig.multiline==1||c.prefConfig.multiline==2)&&z&&kt.test(o.dataset.url)&&z.indexOf(`
`)!==-1&&!/^(c|show)/.test(o.dataset.url)&&(c.prefConfig.multiline==1||confirm(D("multiline")))){let J=z.split(`
`);if(J.length>10&&!confirm(D("multilineTooMuch")))return;let K=0,_=o.target;o.target="_blank";let ce=async()=>{C=await $(J[K++]),o.href=C,o.click(),K<J.length?setTimeout(()=>{ce()},c.prefConfig.multilineGap||1e3):o.target=_};return ce(),o.href="",y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),!1}if(C.indexOf("%input{")!==-1){s.showCustomInputWindow(C,J=>{C=J,o.href=J,o.click()}),y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation();return}let O=C.match(/^find(\.addto\((.*?)\))?:(.*)/);if(O){y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation();let J=O[2],K=O[3];if(K)J&&c.prefConfig.inPageRule&&J.indexOf("@")!==0&&(J="@"+J),K.indexOf("%input{")!==-1?s.showCustomInputWindow(K,_=>{J?s.addToHighlightGroup(_,J):(s.searchJumperInPageInput.value=_,s.submitInPageWords(),s.waitForHide(0))}):J?s.addToHighlightGroup(K,J):(s.searchJumperInPageInput.value=K,s.submitInPageWords(),s.waitForHide(0));else return!1;return!1}else if(/^javascript:/.test(t.url)){y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),Le.targetElement=R,Le.keywords=Oe(),C=C.replace(/^javascript:/,"");try{C=decodeURIComponent(C)}catch{}let J=/^[_a-zA-Z0-9]+$/.test(C)&&Le[C]||new Ci(C);return J&&J(),!1}else if(/^c(opy)?:/.test(t.url)){if(y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),C)C.indexOf("%input{")!==-1?s.showCustomInputWindow(C,J=>{j(!0,J.replace(/^c(opy)?:/,""))}):j(y.isTrusted,C.replace(/^c(opy)?:/,""));else return!1;return!1}else if(/^paste:/.test(t.url)){let J=!1;if(R&&/INPUT|TEXTAREA/i.test(R.nodeName)&&R.getAttribute("aria-readonly")!="true")J=!0;else{let K=R;for(;K&&(J=K.contentEditable=="true",!(J||K.nodeName.toUpperCase()=="BODY"));)K=K.parentNode}if(J){if(!C)return!1;C=C.replace(/^paste:/,""),C.indexOf("%input{")!==-1?s.showCustomInputWindow(C,K=>{si(R,K)}):C?si(R,C):typeof navigator.clipboard.readText<"u"&&navigator.clipboard.readText().then(K=>{si(R,K)})}}else if(/^\[/.test(t.url)){y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation();let J=JSON.parse(t.url);return s.batchOpen(J,{button:2,altKey:S||y.altKey,ctrlKey:L||y.ctrlKey,shiftKey:Z||y.shiftKey,metaKey:H||y.metaKey},i===5?5:i===1),!1}else if(/[:%]P{/.test(t.url)){if(y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),C===!1)return!1;let J=K=>{let _=K.match(/[:%]P{(.*)}/),ce="";if(_)if(K=K.replace(_[0],""),_=_[1],_.charAt(0)==='"'&&_.charAt(_.length-1)==='"')ce=_.substring(1,_.length-1);else{_=new URLSearchParams(_);let se={};_.forEach((pe,be)=>{se[be]=pe}),ce=JSON.stringify(se)}We({method:"POST",url:K,data:ce,onload:se=>{fe(se)},onerror:se=>{Ce(D("postError")+(se.statusText||se.error))},ontimeout:se=>{Ce(D("postError")+(se.statusText||se.error))}})};return C.indexOf("%input{")!==-1?s.showCustomInputWindow(C,K=>{J(K)}):J(C),!1}else if(t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url)){if(C===!1)return!1;let J=t.url.match(/#(j(umpFrom|f)?|from){(.*?)}/),K=_=>{if(J){if(J=J[3],J==="")return Ft(t.charset,_,"_self"),"";V.setItem("postUrl",[_,t.charset]),J.indexOf("http")!==0&&(J=_.replace(/(:\/\/.*?\/)[\s\S]*/,"$1"+J)),_=J}else V.setItem("postUrl",[_,t.charset]),_=_.replace(/(:\/\/.*?)\/[\s\S]*/,"$1").replace(/[:%]p{[\s\S]*/,"");return _};if(C.indexOf("%input{")!==-1){s.showCustomInputWindow(C,_=>{_=K(_),_&&(o.href=_,o.target==="_blank"?ye(o.href,{active:!0,insert:!0}):location.href=o.href)}),y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation();return}else{if(C=K(C),!C)return;o.href=C}}if(!(Z&&!L&&!H&&!S&&y.isTrusted)){if(/^(chrome|edge|about|extension|moz-extension)/.test(C))return y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),L?ye(C,{active:!1,insert:!0}):ye(C,{active:!0,insert:!0,close:o.getAttribute("target")!=="_blank"}),!1;if((S||L||H||Z)&&N){if((L||H)&&Z)ye(C,{incognito:!0});else if(L||H)ye(C,{active:!1,insert:!0});else if(S){if(t.match){let be=t.match.replace(/\\/g,""),nt=be.match(/\((www)\|([^\)\|]+)/);for(;nt;)C=C.replace(nt[1],nt[2]),be=be.replace(nt[0],""),nt=be.match(/\(([^\)\|]+)\|([^\)\|]+)/)}let J=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,K=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,_=c.prefConfig.popupWidth,ce=c.prefConfig.popupHeight,se=c.prefConfig.popupLeft,pe=c.prefConfig.popupTop;ce?(ce=parseFloat(ce),ce=K/100*ce):ce=Math.max(K/3*2,K-250),_?(_=parseFloat(_),_=J/100*_):_=Math.min(J,650),se?(se=parseFloat(se),se=J/100*se-_/2):se=J-_-30,pe?(pe=parseFloat(pe),pe=K/100*pe-ce/2):pe=(K-ce)/2,s.closePopupWindow(),s.popupWindow=window.open(C+"#searchJumperMin"+(/#p{/.test(t.url)?"Post":""),"_blank",`width=${_}, height=${ce}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${se}, top=${pe}`)}else Z&&ye(C,{active:!0,insert:!0});return y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),!1}else if(N&&o.getAttribute("target")==="_blank"&&!(S||L||H||Z)&&y.button===0)return ye(C,{active:!0,insert:!0}),y.preventDefault&&y.preventDefault(),y.stopPropagation&&y.stopPropagation(),!1}};o.addEventListener("mousedown",ne,!0),o.addEventListener("mouseup",y=>{y.stopPropagation&&y.stopPropagation()},!0),o.addEventListener("click",F,!0),o.addEventListener("auxclick",y=>{if(I&&y.preventDefault)return y.preventDefault(),!1},!0),o.addEventListener("contextmenu",y=>{if(I&&y.preventDefault)return y.preventDefault(),!1},!0);let U=o.dataset.name;w&&(U+=` (${t.ctrl?"Ctrl + ":""}${t.shift?"Shift + ":""}${t.alt?"Alt + ":""}${t.meta?"Meta + ":""}${w.replace("Key","")})`);let X=!1,Y=!1,ae=async(y,N,O)=>{if(s.tipsPos(y,'<span class="loader"></span><font>Loading...</font>'),Y=!1,N)try{N=N.replace(/^showTips:/,""),X=!0;let J,K=async(_,ce)=>{let se=await s.anylizeShowTips(_,o.dataset.name,y,J);if(X=!1,!ce&&(s.tips.style.opacity==0||s.tips.innerHTML.indexOf('<span class="loader">')!==0)){Y=!0;return}Array&&Array.isArray&&Array.isArray(se)&&(m=se[1],se=se[0]),se&&(se!="null"&&se!="No result"&&(se=`<div>${se}</div>`,Y=!0),s.tipsPos(y,se,J),re(),setTimeout(()=>{s.tips.style.pointerEvents="all"},100))};if(/%input{/.test(N))if(J=this.createShowTipsInput(N,async _=>{s.tipsPos(y,'<span class="loader"></span><font>Loading...</font>'),await K(_,!0)}),/%input{[^},]*}/.test(N)){if(N=await this.showCustomInputWindow(N),!N)return}else{let _;for(;_=N.match(/%input{([^},]+),\s*([^}/]*).*?}/);){let ce=_[1],se=_[2];N=N.replace(_[0],se).replaceAll(`input{${ce}}`,se),_=N.match(/%input{([^},]+),\s*([^}/]*).*?}/)}}await K(N)}catch(J){fe(J)}},b=async(y,N=1e3)=>{if(!o.dataset.disable&&!(!y||y.nodeType!==1)&&(s.preList&&(s.preList.style.visibility="hidden",s.listArrow.style.cssText=""),m=null,clearTimeout(s.requestShowTipsTimer),s.waitForShowTips=!1,s.tipsPos(y,U),u)){s.stopInput=!0;let O=await $();s.stopInput=!1,O&&s.lastUrl===O?X?s.tipsPos(y,"<span class='loader'></span><font>Loading...</font>"):ae(y,O):(s.waitForShowTips=!0,s.requestShowTipsTimer=setTimeout(async()=>{O=O||await $(),O&&(s.lastUrl=O,ae(y,O),s.waitForShowTips=!1)},N))}},x=!1;o.addEventListener("touchend",y=>{y.stopPropagation&&y.stopPropagation(),u&&(x=!0,s.waitForShowTips=!0)},!1);let A=y=>{if(s.funcKeyCall||c.prefConfig.noAni)return;let N=s.con.classList.contains("search-jumper-left")||s.con.classList.contains("search-jumper-right"),O=[],J=o.getBoundingClientRect(),K=N?Math.abs(y.clientY-J.top)/J.height:Math.abs(y.clientX-J.left)/J.width,_=.1,ce=.1;o.style.setProperty("--scale",1+_+ce),O.push(o);let se=o.previousElementSibling;if(se&&/^A$/i.test(se.nodeName)){se.style.setProperty("--scale",1+ce+_*(1-K)),O.push(se);let be=se.previousElementSibling;be&&/^A$/i.test(be.nodeName)&&(be.style.setProperty("--scale",1+ce*(1-K)),O.push(be))}let pe=o.nextElementSibling;if(pe&&/^A$/i.test(pe.nodeName)){pe.style.setProperty("--scale",1+ce+_*K),O.push(pe);let be=pe.nextElementSibling;be&&/^A$/i.test(be.nodeName)&&(be.style.setProperty("--scale",1+ce*K),O.push(be))}s.dockerScaleBtns.forEach(be=>{O.indexOf(be)===-1&&be.style.setProperty("--scale",1)}),s.dockerScaleBtns=O};return o.addEventListener("mouseenter",y=>{if(y.stopPropagation&&y.stopPropagation(),!o.dataset.disable&&!(Y&&s.lastTips===o&&s.tips.style.opacity==1)){if(s.lastTips=o,u){if(x){x=!1;return}if(W&&!(s.searchJumperInputKeyWords.value||s.tileInput.value||Oe())){s.waitForShowTips=!0,s.tipsPos(o,U);return}}b(o)}},!0),o.addEventListener("mousemove",y=>{o.dataset.disable||(A(y),s.clingPos(o,s.tips))},!1),o.addEventListener("showTips",y=>{o.dataset.disable||(s.waitForHide(0),s.appendBar(),s.closeOpenType(),s.con.style.display="",b(y.detail||R,0))},!1),o.addEventListener("mouseleave",y=>{o.dataset.disable||Y||(s.tips.style.opacity=0,s.tips.style.pointerEvents="",clearTimeout(s.requestShowTipsTimer))},!1),o.addEventListener("drop",y=>{s.searchBySiteName(p,y)},!1),o.addEventListener("dragover",y=>{y.preventDefault()},!1),o}closePopupWindow(){c.prefConfig.closePopupWhenClick&&this.popupWindow&&(this.popupWindow.close(),this.popupWindow=null)}closeOpenType(){let e=this.bar.querySelector(".search-jumper-type.search-jumper-open>span");if(e)if(this.funcKeyCall=!1,e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}addToHighlightGroup(e,t){let i=c.prefConfig.inPageRule[t];if(i){let r=i.match(/^\/(.*)\/([il]*)$/);r?i=`/${r[1]}|${e}/${r[2]||""}`:i=`/${i}|${e}/`}else i=`/${e}/`;c.prefConfig.inPageRule[t]=i,V.setItem("searchData",c),this.refreshPageWords(this.lockWords)}streamUpdate(e){this.streamUpdateCallBack&&this.streamUpdateCallBack(e)}createShowTipsInput(e,t){let i=document.createElement("div");i.className="showTips-inputGroup";let r=e,n=[],a=()=>{let p=r,h=0;[].forEach.call(n,u=>{let m;u.className=="select"?m=u.children[0].value:m=u.value,p=p.replaceAll("\u25CE"+h,m||""),h++}),t(p)},s=r.match(/%input{(.*?[^\\])}/),o=0;for(;s;){let p=s[1],h=document.createElement("div");if(h.className="showTips-input-title",/^".*","/.test(p)?p=p.substr(1,p.length-2).split('","'):p=p.replace(/\\,/g,"\u25CESJ").split(",").map(u=>u.replace(/◎SJ/g,",")),p.length===1){p=p[0].replace(/\\\|/g,"\u25CESJ").split("|").map(d=>d.replace(/◎SJ/g,"|"));let u=document.createElement("div");h.innerText=p[0],u.appendChild(h);let m=document.createElement("input");m.type="text",p.length>1&&(m.title=p[1]),u.appendChild(m),i.appendChild(u),n.push(m)}else if(p.length>=2){let u=p[0].replace(/\\}/g,"}");/^'.*'\/'/.test(u)?u=u.substr(1,u.length-2).split("'/'"):u=u.replace(/\\\//g,"\u25CESJ").split("/").map(g=>g.replace(/◎SJ/g,"/"));let m=p.slice(1).join(",");/^'.*'\/'/.test(m)?m=m.substr(1,m.length-2).split("'/'"):m=m.replace(/\\\//g,"\u25CESJ").split("/").map(g=>g.replace(/◎SJ/g,"/"));let d=u.length===m.length+1,f=document.createElement("div");h.innerText=u[0],f.appendChild(h);let w=document.createElement("input");w.type="text",w.value=m[0];let M=document.createElement("div");M.className="select",M.appendChild(w);let E=document.createElement("p");E.innerText="",M.appendChild(E);let v=document.createElement("div");v.className="options",M.appendChild(v);let k=document.createElement("p");k.setAttribute("value",""),ie(k,"<b>Select option</b>"),v.appendChild(k),k.addEventListener("click",g=>{v.style.visibility="hidden",setTimeout(()=>{v.style.visibility=""},0),w.value="",E.innerText="Select option"});for(let g=0;g<m.length;g++){let T=m[g],B=document.createElement("p");if(B.setAttribute("value",T),d){let W=u[g+1];W=W.replace(/\\\|/g,"\u25CESJ").split("|").map(z=>z.replace(/◎SJ/g,"|")),B.innerText=W[0],W.length>1&&(B.title=W[1])}else B.innerText=T;B.addEventListener("click",W=>{v.style.visibility="hidden",setTimeout(()=>{v.style.visibility=""},0),w.value=B.getAttribute("value"),E.innerText=""}),v.appendChild(B)}w.addEventListener("change",g=>{E.innerText=""}),M.addEventListener("mouseenter",g=>{M.focus();const T=M.getBoundingClientRect();v.style.top=`${T.bottom}px`,v.style.left=`${T.left}px`,v.style.width=`${T.width}px`}),f.appendChild(M),i.appendChild(f),n.push(M)}r=r.replace(s[0],"\u25CE"+o).replaceAll(`input{${h.innerText}}`,"\u25CE"+o),o++,s=r.match(/%input{(.*?[^\\])}/)}if(i.children.length){let p=document.createElement("div");p.className="searchBtn",ie(p,Gr),p.addEventListener("click",h=>{a()}),i.appendChild(p)}return i}async anylizeShowTips(e,t,i,r){let n,a=this;try{const s=/([^\\]|^)([\+\-*/])([\d\.]+)$/,o=/\|cache\=(\d+)$/,p=/%p(\{+)/,h=/#headers({.*?})/,u=/#stream({(.*?)})?/,m=/.then{(.*?)}/;if(e=e.replace(/^showTips:/,"").replace(/{name}/g,t).trim(),/^https?:/.test(e)){let d=e.split(`
`);d.length==1&&(d=e.split(" ")),d=d[0].replace(/【SearchJumperBreak】/g,`
`),e=e.replace(/【SearchJumperBreak】/g,`
`).replace(d,"").trim().replace(/\\{/g,"showTipsLeftBrace").replace(/\\}/g,"showTipsRightBrace").replace(/{url}/g,"\u3010SEARCHJUMPERURL\u3011");let f=d.match(o);f?(f=parseInt(f[1]),d=d.replace(o,"")):f=7200;let w=Date.now()/1e3,M=ht.filter(g=>w<g.time?(!n&&g.url==d&&(n=g.data),!0):!1);M.length!=ht.length&&(ht=M,V.setItem("tipsStorage",ht));let E=[],v=(g,T)=>{let B=e,W=!0;for(;T;){let z=T[1].replace(/\\\|/g,"\u3010searchJumperJsonSplit\u3011").split("|"),$=z[0].replace(/【searchJumperJsonSplit】/g,"|").replace(/\[(\d+)\]/g,".$1").replace(/\[all\]/g,".all").split("."),C=g,I=null;if($.shift(),$.forEach(S=>{if(I){let L=[];for(let H=0;H<I.length;H++){let Z=I[H];Z&&(Array.isArray(Z)?Z=Z.at?Z.at(S):Z[S]:Z=Z[S]),L.push(Z)}I=L}else if(C&&(Array.isArray(C)?S==="all"?I=C:C=C.at?C.at(S):C[S]:C=C[S]),!C)return null}),I&&(C=I.join("")),z.length!=1){let S=z[1],L=S.match(s);if(L){let H=[];for(;L;)S=S.replace(s,"$1"),H.unshift([L[2],L[3]]),L=S.match(s);H.forEach(Z=>{let ne=parseFloat(Z[1]);switch(Z[0]){case"+":C+=ne;break;case"-":C-=ne;break;case"*":C*=ne;break;case"/":C/=ne;break}}),C=C.toFixed(2)}else{let H=S.match(/^\/(.*)\/(\w?)$/),Z=H?new RegExp(H[1],H[2]):new RegExp(S),ne=C.match(Z);ne&&(C=ne[1])}}C?W=!1:C="",E.push(C),B=B.replace(T[0],C),T=B.match(/{(.*?)}/)}return W&&console.log("Error:",g),B=B.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),B},k=e.match(/{(.*?)}/);if(n)k&&k[1].indexOf("json")===0&&(e=e.replace(/【SEARCHJUMPERURL】/g,d),n=v(n,k),n=[n,`
`+E.join(",")]);else{let g,T=d.match(p),B={},W=d;if(T){let L=T[1].length;if(T=d.match(new RegExp(`%p\\{+([\\s\\S]*?)\\}{${L}}`)),T){let H=T[1].replace(/\n/g,"\\n");if(H.indexOf("%")===0)try{H=decodeURIComponent(H)}catch{}B.body=H,B.method="POST",W=W.replace(T[0],"")}}let z=d.match(h);if(z){let L=z[1];if(L.indexOf("%")===0||L.indexOf("%")===1)try{L=decodeURIComponent(L)}catch{}B.headers=JSON.parse(L),W=W.replace(z[0],"")}let $=!1,C,I=k&&k[1].indexOf("json")===0,S=d.match(u);if(S)B.responseType="stream",B.streamMode=S[2]||"concat",W=W.replace(S[0],""),n=await new Promise(L=>{B.onstream=H=>{let Z;if(I){if(Z=H.json(),!Z)return;Z=v(Z,k)}else Z=H.text;a.tipsPos(i,Z,r),a.tips.style.pointerEvents="all",L&&L(Z)},C=Xe(W,B).then(H=>(e=e.replace(/【SEARCHJUMPERURL】/g,H.finalUrl),I?H.json():H.text)),C.then(H=>{let Z=I?H&&v(H,k):H;Z&&(a.tipsPos(i,Z,r),L&&L(Z))})}),n||(n="No result",$=!0);else if(I){let L=[];C=Xe(W,B).then(H=>(e=e.replace(/【SEARCHJUMPERURL】/g,H.finalUrl),H.json())),n=await C.then(H=>H?(g=H,v(H,k)):null),n||(n="No result",$=!0),n=[n,`
`+L.join(",")]}else{let L=!1,H=W.match(m),Z=[];for(;H;){let re=H[1];Z.push(re),W=W.replace(H[0],""),H=W.match(m)}for(C=Xe(W,B).then(re=>(e.indexOf("\u3010SEARCHJUMPERURL\u3011")!=-1&&(e=e.replace(/【SEARCHJUMPERURL】/g,re.finalUrl),L=!0),re.text()));Z.length;){let re=Z.shift(),j=await C.then(F=>{let U=document.implementation.createHTMLDocument("");ie(U.documentElement,F,U);let X=Pt(re,U);if(!X)return null;let Y=U.querySelector("base");return mr(X.getAttribute("href"),Y?Y.href:W)});if(j)C=Xe(j).then(F=>F.text());else return"No result"}let ne;n=await C.then(re=>{if(!e)return re;let j=document.implementation.createHTMLDocument("");ie(j.documentElement,re,j),ne=j.title;let F=e;for(;k;){let U="";if(k[1]=="title")U=j.title;else{let X=k[1].split("|"),Y=Si(X[0],j);if(Y&&Y.length)if(L=!0,X.length==1)U=Y[0].innerText;else{let ae=X[1],b=ae.match(/\(.*?\)/g);b?[].forEach.call(Y,x=>{let A=X[1];b.forEach(y=>{y==="()"?A=A.replace(y,x.innerText):(ae=y.match(/\((.*)\)/)[1],A=A.replace(y,x.getAttribute(ae)||x[ae]))}),U+=A}):U=Y[0].getAttribute(ae)||Y[0][ae]}}F=F.replace(k[0],U),k=F.match(/{(.*?)}/)}return L?(F=F.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),F):null}),n?this.insertHistoryUrl(d,ne):(n="No result",$=!0),n=[n,d],g=n}$||(n=this.calcResult(n),ht.push({url:d,data:g,time:Date.now()/1e3+f}),ht.length>50&&ht.shift(),V.setItem("tipsStorage",ht))}}else if(e=e.replace(/【SearchJumperBreak】/g,`
`),n=/\breturn\b/.test(e)?await new Ci("fetch","storage","name",'"use strict";'+e)(Xe,V,t):e,n=this.calcResult(n),R&&R.href){let d=R.title||R.alt||R.innerText;this.insertHistoryUrl(R.href,d)}}catch(s){fe(s)}return n}calcResult(e){let t=typeof e=="string",i=t?e:e[0];const r=/{([\d\.]+)(([\+\-*/][\d\.]+)+)}/,n=/([\+\-*/])([\d\.]+)/;let a=i.match(r);if(a){let s=[],o=a[0],p=parseFloat(a[1]),h=a[2];for(a=h.match(n);a;)h=h.replace(a[0],""),s.push([a[1],a[2]]),a=h.match(n);s.forEach(u=>{let m=parseFloat(u[1]);switch(u[0]){case"+":p+=m;break;case"-":p-=m;break;case"*":p*=m;break;case"/":p/=m;break}}),p=p.toFixed(2),i=i.replace(o,p)}return t?e=i:e[0]=i,e}insertHistoryUrl(e,t){if(e.indexOf(location.host)===-1)return;let i=location.href,r=document.title;Le.history.pushState("",t,e),document.title=t,Le.history.replaceState("",r,i),document.title=r}checkScroll(e,t){if(this.funcKeyCall||this.bar.style.display=="none")return;let i=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight;if(this.bar.scrollWidth>i||this.bar.scrollHeight>r?this.con.classList.contains("search-jumper-scroll")||(this.bar.style.cssText="",this.con.classList.add("search-jumper-scroll"),this.con.style.display=""):this.con.classList.contains("search-jumper-scroll")&&(this.bar.style.cssText="",this.con.classList.remove("search-jumper-scroll")),e)return;let n=this.bar.querySelector(".search-jumper-type.search-jumper-open");n&&(n.style.width==="0px"&&(n.style.width="auto"),n.style.height==="0px"&&(n.style.height="auto"),n!=this.bar.firstElementChild&&setTimeout(()=>{n.scrollIntoView(t?{}:{behavior:"smooth"})},0))}reopenType(e){let t=new PointerEvent("mouseup");e.parentNode.classList.contains("search-jumper-open")&&(e.onmouseup?e.onmouseup():e.dispatchEvent(t)),e.onmouseup?e.onmouseup():e.dispatchEvent(t)}showInPage(e,t){if(this.contains(R)||this.inInput&&st||!e&&this.funcKeyCall)return;(!st||!st.parentNode)&&(st=Be(Nt),Ze||this.addToShadow(st));let i=Je();if(e&&i&&i.length<(c.prefConfig.limitPopupLen||1)||this.con&&this.con.classList.contains("search-jumper-showall"))return;if(c.prefConfig.hidePopup&&(e=!1),!R)R=Q(document);else if(!i&&R!=Q(document)&&(R.className!="searchJumper"||!/^MARK$/i.test(R.nodeName))){let u=R,m;for(;u&&u.nodeName&&!/^(img|audio|video|a)$/i.test(u.nodeName);){if(u.parentNode){if(/^(img|audio|video|a)$/i.test(u.parentNode.nodeName)){u=u.parentNode;break}if(m=u.parentNode.querySelectorAll("audio,video"),m&&m.length!==1&&(m=u.parentNode.querySelectorAll("img")),m&&m.length!==1&&(m=u.parentNode.querySelectorAll("a")),m&&m.length===1){m[0].scrollHeight&&u.scrollHeight/m[0].scrollHeight<2&&(u=m[0]);break}}u=u.parentNode}u&&(R=u)}this.appendBar();let r=this;this.hideTimeout&&clearTimeout(this.hideTimeout);var n=c.prefConfig.autoDelay||1e3,a=()=>{r.bar.classList.remove("search-jumper-isInPage"),r.bar.classList.remove("search-jumper-isTargetImg"),r.bar.classList.remove("search-jumper-isTargetAudio"),r.bar.classList.remove("search-jumper-isTargetVideo"),r.bar.classList.remove("search-jumper-isTargetLink"),r.bar.classList.remove("search-jumper-isTargetPage"),r.bar.classList.remove("initShow"),r.hideTimeout=null};c.prefConfig.autoHide&&(this.hideTimeout=setTimeout(a,n)),this.bar.classList.remove("search-jumper-isInPage"),this.bar.classList.remove("search-jumper-isTargetImg"),this.bar.classList.remove("search-jumper-isTargetAudio"),this.bar.classList.remove("search-jumper-isTargetVideo"),this.bar.classList.remove("search-jumper-isTargetLink"),this.bar.classList.remove("search-jumper-isTargetPage"),this.bar.classList.remove("initShow"),this.tips.style.opacity=0,this.tips.style.display="none",this.tips.style.transition="none",ie(this.tips,""),setTimeout(()=>{this.bar.classList.add("initShow")},10);let s="",o="";if(i)if(this.bar.classList.add("search-jumper-isInPage"),this.bar.style.display=="none"||e)s="needInPage";else{let u=this.bar.querySelector(".search-jumper-type.search-jumper-open");(!u||u.classList.contains("notmatch")||u.classList.contains("search-jumper-targetPage")||u.classList.contains("search-jumper-targetImg")||u.classList.contains("search-jumper-targetAudio")||u.classList.contains("search-jumper-targetVideo")||u.classList.contains("search-jumper-targetLink"))&&(s="needInPage")}else{switch(R.children.length==1&&R.children[0].nodeName.toUpperCase()==="A"&&(R=R.children[0]),R.nodeName.toUpperCase()){case"IMG":this.bar.classList.add("search-jumper-isTargetImg"),s="targetImg";break;case"AUDIO":this.bar.classList.add("search-jumper-isTargetAudio"),s="targetAudio";break;case"VIDEO":this.bar.classList.add("search-jumper-isTargetVideo"),s="targetVideo";break;case"A":this.bar.classList.add("search-jumper-isTargetLink"),s="targetLink";break;default:break}let u=R.parentNode;u&&u.nodeName.toUpperCase()==="A"&&(this.bar.classList.add("search-jumper-isTargetLink"),s?o="targetLink":s="targetLink"),s||(this.bar.classList.add("search-jumper-isTargetPage"),s="targetPage"),s||(s="targetAll")}this.bar.style.display=="none"&&(this.bar.style.display="");let p,h;if(s&&(p=this.bar.querySelector(`.search-jumper-${s}:not(.notmatch)>span`),h=this.bar.querySelectorAll(`.search-jumper-${s}:not(.notmatch)>a>img`)),r.setFuncKeyCall(!1),p&&(!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen||e)){let u=this.bar.querySelectorAll(`.search-jumper-${s}:not(.notmatch)>span:first-child`);[].forEach.call(u,m=>{m!==p&&r.reopenType(m)}),r.reopenType(p),r.insertHistory(p.parentNode),o&&(u=this.bar.querySelectorAll(`.search-jumper-${o}:not(.notmatch)>span:first-child`),[].forEach.call(u,m=>{m!==p&&r.reopenType(m)}),r.reopenType(p))}if(!e&&(c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen)&&this.closeOpenType(),r.setFuncKeyCall(e),e){h&&[].forEach.call(h,E=>{E.parentNode.style.display!="none"&&E.dataset.src&&Qe(E)}),r.allLists.forEach(E=>{E.style.visibility="hidden"}),r.con.classList.remove("search-jumper-scroll"),r.bar.style.cssText="",r.con.style.cssText="";let u=window.innerWidth||document.documentElement.clientWidth,m=document.documentElement.scrollLeft||document.body.scrollLeft,d=window.innerHeight||document.documentElement.clientHeight,f=c.prefConfig.tileOffset||0,w=zr(t)-r.bar.clientWidth/2-(getComputedStyle(document.documentElement).position!=="static"?document.documentElement.offsetLeft:0);w<0?w=5:w+r.bar.clientWidth>u+m&&(w=u+m-r.bar.clientWidth-20);let M=Or(t);xt(t)>d/5?M-=r.bar.clientHeight+20+f:M+=20+f,vt(t)<u/2?(r.bar.style.left=w+m+"px",r.bar.style.transformOrigin="0 0"):(r.bar.style.right=u-w-r.bar.clientWidth-15+"px",r.bar.style.transformOrigin="100% 0"),r.bar.style.top=M+"px",r.removeBar(),r.bar.style.opacity=0,setTimeout(()=>{r.appendBar(),setTimeout(()=>{r.bar.style.opacity=1,setTimeout(()=>{let E=document.querySelector("#saladict-saladbowl-root>.saladict-external");if(E){let v=E.shadowRoot.querySelector(".saladbowl");v.style.transform=v.style.transform.replace(/\d+px\)/,`${t.clientY-15}px)`)}},100)},1)},1)}else r.bar.style.display="",r.initPos()}setFuncKeyCall(e){this.funcKeyCall=e,this.con.classList.contains("search-jumper-showall")||(e?(this.tileInput.value=Oe(),this.con.classList.add("funcKeyCall"),this.bar.insertBefore(this.tileInput,this.bar.firstChild)):(this.tileInput.value="",this.con.classList.remove("funcKeyCall"),this.tileInput.parentNode&&this.tileInput.parentNode.removeChild(this.tileInput)))}initPos(e,t,i,r){this.preList&&(this.preList.style.visibility="hidden",this.preList.style.opacity=0,this.listArrow.style.cssText=""),typeof e>"u"&&(e=c.prefConfig.position.x),typeof t>"u"&&(t=c.prefConfig.position.y),typeof i>"u"&&(i=c.prefConfig.offset.x),typeof r>"u"&&(r=c.prefConfig.offset.y);let n=this,a=s=>{if(n.bar.style.cssText="",n.con.style.cssText="",n.con.className="search-jumper-searchBarCon "+s,c.prefConfig.resizePage)switch(typeof n.initBodyStyle>"u"?n.initBodyStyle=Q(document).style.cssText:Q(document).style.cssText=n.initBodyStyle,n.con.classList.add("resizePage"),Q(document).style.position="absolute",s){case"search-jumper-left":Q(document).style.width=`calc(100vw - ${n.scale*42}px)`,Q(document).style.right="0px";break;case"search-jumper-right":Q(document).style.width=`calc(100vw - ${n.scale*42}px)`,Q(document).style.left="0px";break;case"search-jumper-bottom":Q(document).style.width="100%",Q(document).style.height=`calc(100vh - ${n.scale*42}px)`,Q(document).style.top="0px",Q(document).style.overflow="auto";break;default:Q(document).style.width="100%",Q(document).style.height=`calc(100vh - ${n.scale*42}px)`,Q(document).style.bottom="0px",Q(document).style.overflow="auto";break}else c.prefConfig.autoHideAll&&n.con.classList.add("hideAll");let o=n.scale*40;setTimeout(()=>{let p=n.con.classList.contains("search-jumper-left")||n.con.classList.contains("search-jumper-right");Se.forEach(h=>{if(!h.classList.contains("search-jumper-open"))p?(h.style.width="",h.style.height=o+"px"):(h.style.width=o+"px",h.style.height="");else{let u=Math.max(h.scrollWidth,h.scrollHeight);u&&(u+="px",p?(h.style.width="",h.style.height=u):(h.style.width=u,h.style.height=""))}})},1)};i<0&&(i=0),r<0&&(r=0),e=="center"&&t=="top"?(a(""),n.bar.style.position="relative"):e=="left"&&t=="top"?i>r?(a(""),n.bar.style.position="fixed",n.bar.style.left=i+"px"):(a("search-jumper-left"),n.bar.style.position="fixed",n.bar.style.top=r+"px"):e=="right"&&t=="top"?i>r?(a(""),n.bar.style.position="fixed",n.bar.style.right=i+"px"):(a("search-jumper-right"),n.bar.style.position="fixed",n.bar.style.top=r+"px"):e=="center"&&t=="bottom"?(a("search-jumper-bottom"),n.bar.style.position="relative"):e=="left"&&t=="bottom"?i>r?(a("search-jumper-bottom"),n.bar.style.position="fixed",n.bar.style.left=i+"px",n.bar.style.bottom="0px",n.bar.style.top="unset"):(a("search-jumper-left"),n.bar.style.position="fixed",n.bar.style.bottom=r+"px"):e=="right"&&t=="bottom"?i>r?(a("search-jumper-bottom"),n.bar.style.position="fixed",n.bar.style.right=i+"px",n.bar.style.bottom="0px",n.bar.style.top="unset"):(a("search-jumper-right"),n.bar.style.position="fixed",n.bar.style.bottom=r+"px"):e=="left"&&t=="center"?(a("search-jumper-left"),n.bar.style.position="relative",n.bar.style.marginTop=r+"px",n.con.style.display="flex",n.con.style.justifyContent="center"):e=="right"&&t=="center"&&(a("search-jumper-right"),n.bar.style.position="absolute",n.bar.style.marginTop=r+"px",n.con.style.display="flex",n.con.style.justifyContent="center",n.con.style.alignItems="flex-end"),c.prefConfig.position.x=e,c.prefConfig.position.y=t,c.prefConfig.offset.x=i,c.prefConfig.offset.y=r,c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen?n.checkScroll(!1,!0):setTimeout(()=>{let s=n.bar.querySelector(".search-jumper-type.search-jumper-open");s&&(s.style.transition="none",s.style.width="auto",s.style.height="auto",setTimeout(()=>{s.style.width=s.scrollWidth+"px",s.style.height=s.scrollHeight+"px",setTimeout(()=>{s.style.transition=""},1),n.checkScroll(!1,!0)},0))},251)}}class Zr{constructor(){this.clickedIndex=0,this.signList=[],this.clickedEles={},this.exact=!0,this.accu=0,this.wheelScrolling=!1}getSelector(e,t=!0){this.exact=t,this.close(),this.toggle(),this.callback=e}init(){if(this.inited)return;this.inited=!0;let e=this;Be(`
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
                `);let i=n=>{if(!n)return;if(e.callback){if(n){let s=e.geneSelector(n,e.exact);e.callback(s),e.close()}return}let a=e.createSignDiv();e.clickedEles[e.clickedIndex]=n,e.appendSign(a,n,e.clickedIndex),e.clickedIndex++,P.con.classList.add("selectedEle")},r;this.initSelectRect(),this.mainSignDiv=this.createSignDiv(),this.setImportant(this.mainSignDiv,"pointer-events","none"),this.setImportant(this.mainSignDiv,"background","rgba(120, 170, 210, 0.3)"),this.moveHandler=n=>{if(n.target!==document)if(e.inPicker&&n.preventDefault(),e.rectSelecting)e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv),e.selectRect.parentNode||Q(document).appendChild(e.selectRect),e.createSelectRect({x:n.clientX,y:n.clientY});else{if(e.creatingRect)return;{let a=e.getTarget(n.target);e.mainSignDiv.parentNode!==a.parentNode&&a.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,a),(n.ctrlKey||n.metaKey)&&(clearTimeout(r),r=setTimeout(()=>{let s=e.cleanTarget(n.target);i(s)},5))}}},this.leaveHandler=n=>{e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv)},this.clickHandler=n=>{if(e.inPicker&&(n.stopPropagation(),n.preventDefault()),e.creatingRect)return;if(e.rectSelecting){e.selectRect.parentNode&&e.selectRect.parentNode.removeChild(e.selectRect),e.rectSelecting=!1,P.bar.classList.remove("rectSelecting");return}let a=e.getTarget(n.target);i(a)},this.mouseDownHandler=n=>{e.rectSelecting=!0,P.bar.classList.add("rectSelecting"),e.rectInitPos={x:n.clientX,y:n.clientY},n.stopPropagation(),n.preventDefault()},this.mouseUpHandler=n=>{e.rectSelecting=!1,P.bar.classList.remove("rectSelecting"),!e.creatingRect&&e.selectRect.parentNode&&(e.selectRect.parentNode.removeChild(e.selectRect),e.finishSelectRect(),n&&n.stopPropagation&&n.stopPropagation(),n&&n.preventDefault&&n.preventDefault())},this.wheelHandler=n=>{if(n.preventDefault(),n.stopPropagation(),e.wheelScrolling)return;e.wheelScrolling=!0,setTimeout(()=>{e.wheelScrolling=!1},100);let a;if(n.type!=="wheel"){let o=0;typeof n.axis=="number"?n.axis==2&&(o=n.detail):(typeof n.wheelDeltaY>"u"||n.wheelDeltaY!=0)&&(o=-n.wheelDelta/40),a=o}else a=n.deltaY;a>0?e.accu--:e.accu++,e.accu<0?e.accu=0:e.accu>8&&(e.accu=8);let s=e.getTarget(n.target);e.mainSignDiv.parentNode!==s.parentNode&&s.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,s)}}initSelectRect(){this.waitToRemoveSigns=[],this.waitToAddSigns=[];let e=document.createElement("div");ie(e,`
                  <div class="dot top-left"></div>
                  <div class="dot top-right"></div>
                  <div class="dot bottom-left"></div>
                  <div class="dot bottom-right"></div>
                  <div class="dot top"></div>
                  <div class="dot right"></div>
                  <div class="dot left"></div>
                  <div class="dot bottom"></div>
                `),e.className="select-rect",this.selectRect=e}createSelectRect(e){this.rectToPos=e,!this.creatingRect&&(this.creatingRect=!0,setTimeout(()=>{this.creatingRect=!1,this.selectRect.style.left=Math.min(this.rectToPos.x,this.rectInitPos.x)+"px",this.selectRect.style.top=Math.min(this.rectToPos.y,this.rectInitPos.y)+"px",this.selectRect.style.width=Math.abs(this.rectToPos.x-this.rectInitPos.x)+"px",this.selectRect.style.height=Math.abs(this.rectToPos.y-this.rectInitPos.y)+"px",this.checkRectAndSign(),this.rectSelecting||this.mouseUpHandler()},100))}finishSelectRect(){let e=this;this.waitToRemoveSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns.forEach(t=>{delete t.dataset.recttemp}),this.waitToRemoveSigns=[],this.waitToAddSigns=[],this.signList.length?P.con.classList.add("selectedEle"):P.con.classList.remove("selectedEle")}checkRectAndSign(){if(!this.domInfo)return;let e=this;this.waitToRemoveSigns.forEach(t=>{t.style.opacity=""}),this.waitToRemoveSigns=[],this.signList.forEach(t=>{let i=t[0];if(i.dataset.recttemp)return;let r=i.getBoundingClientRect(),n=e.selectRect.getBoundingClientRect();e.compareRect(r,n)?(i.style.opacity="0",e.waitToRemoveSigns.push(i)):i.style.opacity=""}),this.waitToAddSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns=[],this.waitToRemoveSigns.length===0&&(this.curRectInfo={},this.rectInitPos.x<this.rectToPos.x?(this.curRectInfo.left=this.rectInitPos.x,this.curRectInfo.right=this.rectToPos.x):(this.curRectInfo.left=this.rectToPos.x,this.curRectInfo.right=this.rectInitPos.x),this.rectInitPos.y<this.rectToPos.y?(this.curRectInfo.top=this.rectInitPos.y,this.curRectInfo.bottom=this.rectToPos.y):(this.curRectInfo.top=this.rectToPos.y,this.curRectInfo.bottom=this.rectInitPos.y),this.compareDomWithRect(this.domInfo),this.signDomWithRect(this.domInfo))}compareDomWithRect(e){if(e.children&&e.children.length>0){let t=0;for(let i=0;i<e.children.length;i++){let r=e.children[i];this.compareDomWithRect(r)&&t++}if(t===e.children.length){let i=e.target.getBoundingClientRect();if(i.width&&i.height)return e.sign=!0,!0}}else if(this.compareRect(this.curRectInfo,e.target.getBoundingClientRect()))return e.sign=!0,!0;return e.sign=!1,!1}signDomWithRect(e){if(e.sign){let t=this.createSignDiv();t.dataset.recttemp=1,e.target.parentNode.appendChild(t),this.adjustSignDiv(t,e.target),this.signList.push([t,e.target]),this.waitToAddSigns.push(t)}else if(e.children&&e.children.length>0)for(let t=0;t<e.children.length;t++){let i=e.children[t];this.signDomWithRect(i)}}compareRect(e,t){return t.width&&t.height&&e.left<=t.right&&e.right>=t.left&&e.top<=t.bottom&&e.bottom>=t.top}cleanTarget(e){if(!e||e.className=="searchJumperSign"||(e=this.getTarget(e),!e))return null;for(let t in this.clickedEles){let i=this.clickedEles[t];try{if(i==e||i.contains(e)||e.contains(i))return null}catch{return null}}return e}appendSign(e,t,i){t.dataset&&(t.dataset.signNum=parseInt(t.dataset.signNum||0)+1),e.dataset.target=i,t.parentNode.appendChild(e),this.adjustSignDiv(e,t),this.signList.push([e,t])}removeSign(e){e.parentNode&&e.parentNode.removeChild(e);for(let n=0;n<this.signList.length;n++)if(this.signList[n][0]===e){this.signList.splice(n,1);break}let t=e.dataset.target,i=this.clickedEles[t];if(!i)return;let r=parseInt(i.dataset.signNum||0)-1;i.dataset.signNum=r,r<=0&&delete this.clickedEles[t]}getTarget(e){let t=this.accu;for(;e&&t;){let i=e.parentNode;if(!i)break;e=i,t--}for(;e.parentNode&&(e.offsetWidth===0||e.offsetHeight===0);)e=e.parentNode;return e}close(){this.mainSignDiv&&(this.rectSelecting&&(this.selectRect.parentNode&&this.selectRect.parentNode.removeChild(this.selectRect),this.finishSelectRect(),this.rectSelecting=!1),this.callback=null,this.domInfo=null,this.clearSigns(),this.clickedEles={},this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv),Q(document).classList.remove("searchJumper-picker"),P.con.classList.remove("selectedEle"),P.con.removeEventListener("mouseenter",this.leaveHandler,!0),Q(document).removeEventListener("mousemove",this.moveHandler,!0),Q(document).removeEventListener("click",this.clickHandler,!0),Q(document).removeEventListener("mousedown",this.mouseDownHandler,!0),Q(document).removeEventListener("mouseup",this.mouseUpHandler,!0),Q(document).removeEventListener(Kt(),this.wheelHandler,{passive:!1,capture:!0}),this.inPicker=!1)}setImportant(e,t,i){e.style.setProperty(t,i,"important")}createSignDiv(){let e=document.createElement("div");return this.setImportant(e,"position","absolute"),this.setImportant(e,"z-index","2147483647"),this.setImportant(e,"background","rgba(120, 170, 210, 0.6)"),this.setImportant(e,"transition","all 0.15s ease-out"),this.setImportant(e,"box-shadow","rgb(0 0 0) 0px 0px 3px 0px"),this.setImportant(e,"cursor","pointer"),e.className="searchJumperSign",e.addEventListener("mouseenter",t=>{this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv)},!0),e.addEventListener("mousedown",t=>{t.stopPropagation(),t.preventDefault(),this.removeSign(e)},!0),e}adjustSignDiv(e,t){this.setImportant(e,"width",t.offsetWidth+"px"),this.setImportant(e,"height",t.offsetHeight+"px");let i=t.offsetLeft,r=t.offsetTop;if(t.offsetParent&&e.offsetParent&&t.offsetParent!==e.offsetParent){let n=e.offsetParent.getBoundingClientRect(),a=t.offsetParent.getBoundingClientRect();i+=a.left-n.left,r+=a.top-n.top}this.setImportant(e,"left",i+"px"),this.setImportant(e,"top",r+"px")}geneSelector(e,t){let i=e.nodeName.toLowerCase();if(i!=="html"&&i!=="body")if(t&&e.id&&/^[a-z\-_][\w\-_]+$/i.test(e.id))i="#"+e.id;else{if(e.className){let n=e.classList.length;i+=[].map.call(e.classList,a=>/^[a-z][\w]+$/i.test(a)||n<3&&/^[a-z\-_][\w\-_]+$/i.test(a)?"."+a:"").join("")}let r=e.parentElement;if(r&&(i=this.geneSelector(r,!!t)+" > "+i,t&&r.children.length>1&&!/^HTML$/i.test(r.nodeName))){let n,a=0,s=0;for(n=0;n<r.children.length&&!(r.children[n].nodeName==e.nodeName&&(s++,r.children[n]==e&&(a=s),a>0&&s>1));n++);i+=s==1?"":`:nth-of-type(${a})`}}return i}copy(){let e=this,t="",i="";this.signList.forEach(a=>{i+=`
`+a[1].innerText,t+=a[1].outerHTML}),i=i.trim();const r=new Blob([t],{type:"text/html"}),n=new Blob([i],{type:"text/plain"});try{const a=new ClipboardItem({"text/html":r,"text/plain":n});navigator.clipboard.write([a]).then(()=>{Ce("Copied successfully!")},s=>{qe(i),console.log(s)})}catch{qe(i)}}getElements(){return!this.inPicker||!this.signList||this.signList.length===0?null:this.signList.map(e=>e[1])}openLinks(){if(!window.confirm(D("batchOpenConfirm")))return;let e=[];this.signList.forEach(t=>{let i=t[1];i.href?/^(http|ftp)/i.test(i.href)&&e.indexOf(i.href)===-1&&e.push(i.href):i.parentNode&&i.parentNode.href?/^(http|ftp)/i.test(i.parentNode.href)&&e.indexOf(i.parentNode.href)===-1&&e.push(i.parentNode.href):i.querySelectorAll&&[].forEach.call(i.querySelectorAll("a[href]"),r=>{/^(http|ftp)/i.test(r.href)&&e.indexOf(r.href)===-1&&e.push(r.href)})}),e.forEach(t=>{ye(t,{active:!1,insert:!0})})}getPickerStr(){if(!this.inPicker)return"";let e="";return this.signList.forEach(t=>{e+=`
`+t[1].innerText}),e.trim()}expand(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let i=e.clickedEles[t],r=e.geneSelector(i);i.dataset.signNum=0,[].forEach.call(document.querySelectorAll(r),n=>{let a=e.createSignDiv();Q(document).appendChild(a),e.appendSign(a,n,t)})})}collapse(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let i=e.clickedEles[t];i.dataset.signNum=0;let r=e.createSignDiv();Q(document).appendChild(r),e.appendSign(r,i,t)})}clearSigns(){this.signList.forEach(e=>{e=e[0],e.parentNode&&e.parentNode.removeChild(e)}),this.signList=[]}processNode(e,t){const i={};if(i.target=e,i.children=[],e.nodeType===Node.ELEMENT_NODE){const n=window.getComputedStyle(e);if(n.display==="none"&&n.visibility==="hidden"||e.innerHTML.trim()==="")return null}else if(e.nodeType!==Node.TEXT_NODE||e.textContent.trim()==="")return null;const r=e.childNodes;if(r.length>0){i.target=e,t.children.push(i);for(const n of r)(n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE)&&this.processNode(n,i)}else if(e.nodeType===Node.TEXT_NODE){const n=e.textContent.split(`
`),a=document.createRange();a.selectNodeContents(e);let s=0,o=e.parentNode,p=o.getBoundingClientRect();for(const h of n){if(h.trim()===""){s+=h.length+1;continue}a.setStart(e,s),s+=h.length,a.setEnd(e,s),s++;const u=a.getBoundingClientRect();let m=u.left-p.left,d=u.top-p.top,f=u.width,w=u.height,M={target:{innerText:h,outerHTML:h,parentNode:o,offsetLeft:m+o.offsetLeft,offsetTop:d+o.offsetTop,offsetWidth:f,offsetHeight:w,getBoundingClientRect:()=>{let E=o.getBoundingClientRect();return{left:E.left+m,top:E.top+d,right:E.left+m+f,bottom:E.top+d+w,width:f,height:w}}}};t.children.push(M)}}else e.nodeType===Node.ELEMENT_NODE&&(i.target=e,t.children.push(i));return i}toggle(e){if(this.init(),this.inPicker){this.close();return}this.rectSel=!!e,e?(this.domInfo=this.processNode(Q(document),{children:[]}),Q(document).addEventListener("mousedown",this.mouseDownHandler,!0),Q(document).addEventListener("mouseup",this.mouseUpHandler,!0)):Q(document).addEventListener(Kt(),this.wheelHandler,{passive:!1,capture:!0}),this.accu=0,this.inPicker=!0,Q(document).classList.add("searchJumper-picker"),P.con.addEventListener("mouseenter",this.leaveHandler,!0),Q(document).addEventListener("mousemove",this.moveHandler,!0),Q(document).addEventListener("click",this.clickHandler,!0)}}const Te=new Zr;function Xr(l){if(!R)return;let e=l||{key:"Enter",keyCode:13,bubbles:!0},t=new KeyboardEvent("keydown",e);R.dispatchEvent(t),t=new KeyboardEvent("keyup",e),R.dispatchEvent(t),t=new KeyboardEvent("keypress",e),R.dispatchEvent(t),fe(R,`press ${l||"Enter"}`)}async function ri(l){return new Promise((e,t)=>{const i=Ke;let r=setInterval(()=>{if(i?.aborted){clearInterval(r),t(i.reason);return}let n=null;if(l?l==="@"?n=R:n=Pt(l):n=document.readyState==="complete",n===!1)return null;n&&(clearInterval(r),e(n))},100)})}async function Qr(l){return l?new Promise((e,t)=>{const i=Ke;let r=setInterval(()=>{if(i?.aborted){clearInterval(r),t(i.reason);return}Pt(l)||(clearInterval(r),e(null))},100)}):null}let wt=!1;async function or(l,e){if(ct(),!l)return!0;R=l;let t=new FocusEvent("focusin",{bubbles:!0});l.dispatchEvent(t),t=new Event("focus",{bubbles:!0}),l.dispatchEvent(t);const i=window.getSelection(),r=i.rangeCount?i.getRangeAt(0):new Range;r.selectNode(l),i.removeAllRanges(),i.addRange(r),await Re(1),l.type!=="file"&&l.click&&l.click();let n=l.value;if(l.type=="file"){let u=e;if(u.indexOf("data:")==0)u=pr(u);else{let d=new Blob([u],{type:"text/plain"});u=new File([d],"noname.txt",{type:d.type})}let m=new DataTransfer;m.items.add(u),l.files=m.files,e="c:/fakepath/fakefile"}else if(/INPUT/i.test(l.nodeName)){var a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;a.call(l,e)}else if(/SELECT/i.test(l.nodeName)){var s=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;s.call(l,e)}else if(l.nodeName.toUpperCase()=="TEXTAREA"){var o=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;o.call(l,e)}else{let u=l;for(;u&&u.contentEditable!=="true";)u=u.parentNode;if(u)u.dispatchEvent(new InputEvent("beforeinput",{inputType:"insertText",data:e})),await Re(1),l.innerText!==e&&(Ke?l.innerText=e:ie(l,e));else{let m=e;if(m.indexOf("data:")==0)m=pr(m);else{let d=new Blob([m],{type:"text/plain"});m=new File([d],"noname.txt",{type:d.type})}var p=new ClipboardEvent("paste",{target:document.body,clipboardData:new DataTransfer});p.clipboardData.items.add(m),l.dispatchEvent(p)}}t=new Event("input",{bubbles:!0});let h=l._valueTracker;h&&h.setValue(n),l.dispatchEvent(t),t=new Event("change",{bubbles:!0}),l.dispatchEvent(t),fe(l,"input")}async function Ht(l,e=-1){ct(),wt=!1;let t;if(e>=0){e===0&&await ri(l);let i=Si(l);if(i.length===0)return!0;if(i.length===1)t=i[0],wt=!0;else{if(i.length<=e)return!0;t=i[e],i.length===e+1&&(wt=!0)}}else if(t=await ri(l),!t)return!0;return ct(),t}async function lr(l,e,t=-1){let i=await Ht(l,t);return ct(),i===!0?!0:(await or(i,e),wt)}async function cr(l,e=-1){let t=await Ht(l,e);if(ct(),t===!0)return!0;if(R=t,!PointerEvent)return t.click();let i={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:1,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var r=new PointerEvent("mouseover",i);t.dispatchEvent(r),r=new PointerEvent("pointerover",i),t.dispatchEvent(r),r=new PointerEvent("mousedown",i),t.dispatchEvent(r),r=new PointerEvent("pointerdown",i),t.dispatchEvent(r),r=new PointerEvent("mouseup",i),t.dispatchEvent(r),r=new PointerEvent("pointerup",i),t.dispatchEvent(r);let n=(a,s)=>{let o;try{o=document.createEvent("TouchEvent"),o.initTouchEvent(s,!0,!0)}catch{try{o=document.createEvent("UIEvent"),o.initUIEvent(s,!0,!0)}catch{o=document.createEvent("Event"),o.initEvent(s,!0,!0)}}try{o.targetTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.touches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.changedTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}]}catch{}a.dispatchEvent(o)};return n(t,"touchstart"),n(t,"touchend"),t.click(),fe(t,`click ${l}`),wt}async function es(l,e=-1){let t=await Ht(l,e);if(t===!0)return!0;R=t;let i={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:2,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var r=new PointerEvent("mouseover",i);return t.dispatchEvent(r),r=new PointerEvent("pointerover",i),t.dispatchEvent(r),r=new PointerEvent("mousedown",i),t.dispatchEvent(r),r=new PointerEvent("pointerdown",i),t.dispatchEvent(r),r=new PointerEvent("mouseup",i),t.dispatchEvent(r),r=new PointerEvent("pointerup",i),t.dispatchEvent(r),t.click(),t.click(),r=new MouseEvent("dblclick",{...i,view:Le}),t.dispatchEvent(r),fe(t,`dblclick ${l}`),wt}async function ts(l,e=-1){let t=await Ht(l,e);if(t===!0)return!0;R=t;let i={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:2,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:0,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:3};t.focus();var r=new PointerEvent("mouseover",i);return t.dispatchEvent(r),r=new PointerEvent("pointerover",i),t.dispatchEvent(r),r=new PointerEvent("mousedown",i),t.dispatchEvent(r),r=new PointerEvent("pointerdown",i),t.dispatchEvent(r),r=new PointerEvent("mouseup",i),t.dispatchEvent(r),r=new PointerEvent("pointerup",i),t.dispatchEvent(r),r=new PointerEvent("contextmenu",i),t.dispatchEvent(r),fe(t,`rclick ${l}`),wt}async function si(l,e){if(R)if(R.focus(),typeof l.value<"u"){const t=l.selectionStart,i=l.selectionEnd;let r=l.value.substring(0,t)+e+l.value.substring(i,l.value.length);await or(l,r),l.selectionStart=t+e.length,l.selectionEnd=t+e.length}else{const t=window.getSelection(),i=t.getRangeAt(0);t.toString()||i.selectNode(l.childNodes.length===1?l.firstChild:l),i.deleteContents(),i.insertNode(document.createTextNode(e)),t.removeAllRanges(),t.addRange(i)}}function Ft(l,e,t){if(e=e.replace(/#(j(umpFrom|f)?|from){(.*?)}/,""),Ct={charset:l,url:e,target:t},e.indexOf("#submitBySearchJumper")!==-1){Ct={charset:l,url:e.replace("#submitBySearchJumper",""),target:t},yr();return}const i="searchJumper_form";var r=document.getElementById(i);r||(r=document.createElement("form"),r.id=i,r.style.display="none",document.documentElement.appendChild(r));var n;let a=e.match(/[:%]p{(.*?)}/),s=e;return a?(s=e.replace(a[0],""),a=a[1],r.method="post",n=new URLSearchParams(a)):(r.method="get",n=new URLSearchParams(new URL(s).search)),l&&(r.acceptCharset=l),ie(r,""),r.target=t,r.action=s,n.forEach((o,p)=>{let h=document.createElement("input");h.name=p,h.value=o,r.appendChild(h)}),r.submit()}function pr(l){try{for(var e=l.split(","),t=e[0].match(/:(.*?);/)[1],i=atob(e[1]),r=i.length,n=new Uint8Array(r);r--;)n[r]=i.charCodeAt(r)}catch(s){fe(s)}let a=t.split("/");return a=a.length>1?a[1]:a[0],new File([n],"image."+a,{type:t})}async function hr(l,e=!1){if(!l)return null;if(e&&(l.referrerPolicy="no-referrer",/^data:/.test(l.dataset.src||l.src)))return l.dataset.src||l.src;if(l.dataset.src&&(l.src=l.dataset.src),!l.src)return null;if(l.src.split("/")[2]==document.domain){let n=getComputedStyle(l);var i=document.createElement("canvas"),r=i.getContext("2d");if(l.complete){i.width=l.naturalWidth||l.width||parseInt(n.width),i.height=l.naturalHeight||l.height||parseInt(n.height),r.drawImage(l,0,0);try{return i.toDataURL("image/png")}catch{return await ni(l.src,e)}}else return await new Promise(a=>{l.addEventListener("load",async s=>{i.width=l.naturalWidth||l.width||parseInt(n.width),i.height=l.naturalHeight||l.height||parseInt(n.height),r.drawImage(l,0,0);try{a(i.toDataURL("image/png"))}catch{a(await ni(l.src,e))}})})}else return await ni(l.src,e)}async function ni(l,e=!1){let t=l.split("/");return new Promise(i=>{We({method:"GET",url:l,responseType:"blob",referrerPolicy:e?"no-referrer":void 0,headers:e?{accept:"*/*",Referer:""}:{origin:t[0]+"//"+t[2],referer:location.href,accept:"*/*"},onload:function(r){try{var n=r.response,a=new FileReader;a.readAsDataURL(n),a.onload=function(s){i(s.target.result)}}catch{i(null)}},onerror:function(){i(null)},ontimeout:function(){i(null)}})})}function is(l){let e=getComputedStyle(l),t=getComputedStyle(l,":before").content.replace(/"/g,"");if(!t)return!1;var i=document.createElement("canvas");i.width=l.clientWidth||parseInt(e.lineHeight),i.height=l.clientHeight||parseInt(e.lineHeight);var r=i.getContext("2d");r.font=e.font,r.strokeStyle=e.color||"black",r.fillStyle=e.color||"black",r.textBaseline="top";let n=r.measureText(t);return r.fillText(t,(i.width-n.width)/2,(i.height-parseInt(e.fontSize))/2),i.toDataURL("image/png")}async function rs(l){let e=l.className.trim().replace("fa fa-","").replace(/ /g,"_");if(ge[e])return;let t=is(l);t=="data:,"||!t||(ge[e]=t,V.setItem("cacheIcon",ge))}async function Ni(l){let e;if(l.nodeName.toUpperCase()=="IMG"){let t=l.dataset.src||l.dataset.iconSrc||l.src;if(t){if(ge[t])return ge[t];e=await hr(l,!0),(e=="data:,"||!e)&&(e="fail"),ge[t]=e,V.setItem("cacheIcon",ge)}}else await rs(l);return await new Promise(t=>{setTimeout(()=>{t(!0)},1)}),e}async function Ut(){for(;Ve.length>0;)await Ni(Ve.shift())}async function ur(l){if(c.prefConfig.cacheSwitch){let e=Ve.length>0;await Promise.all([Ut(),Ut(),Ut(),Ut(),Ut()]),e&&(l&&Ce(D("cacheOver")),fe(D("cacheOver")))}}async function dr(l){if(!ze){P.con.classList.add("in-input"),P.con.style.visibility="hidden",P.con.style.display="",P.appendBar(),await Re(2e3);let e=ei.length>0;for(;ei.length>0;)await Ni(ei.shift());e&&fe("All font icons cached!")}}function ss(){const l=new AbortController,e={capture:!0,signal:l.signal};let t,i,r,n=!1;const a=()=>{l.abort(),clearTimeout(r),t=i=null},s=()=>{t=i=null,n&&a()},o=()=>{if(!n||t)return;const p=i;if(a(),!p||!p.text||document.hidden||!p.target.isConnected||!p.event.target.isConnected||P.contains(p.target)||/^pv-/.test(p.event.target.className)||Je()!==p.text)return;const h=window.getSelection();if(["anchorNode","anchorOffset","focusNode","focusOffset"].some(m=>h[m]!==p[m]))return;const u=Mt(document)||Ti(p.event.target);!c.prefConfig.enableInInput&&u||(R=p.target,c.prefConfig.minPopup==2&&P.con.classList.toggle("targetInput",u),P.showInPage(!0,p.event))};document.addEventListener("mousedown",p=>{if(p.isTrusted){if(n)return a();i=null,t=p.button===0?{event:p,moved:!1}:null}},e),document.addEventListener("mousemove",p=>{t&&Math.abs(t.event.clientX-p.clientX)+Math.abs(t.event.clientY-p.clientY)>2&&(t.moved=!0)},e),document.addEventListener("mouseup",p=>{if(!(!p.isTrusted||!t||p.button!==0)){if(t.moved||p.detail>1){const h=window.getSelection();i={event:p,target:t.event.target,text:Je(),anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}}t=null,n&&(r=setTimeout(o,0))}},e),document.addEventListener("dblclick",()=>{n&&a()},e);for(const p of["keydown","dragstart","pointercancel"])document.addEventListener(p,s,e);return window.addEventListener("blur",s,e),document.addEventListener("visibilitychange",()=>{document.hidden&&s()},e),{cancel:a,resume(){if(!l.signal.aborted){if(n=!0,!c.prefConfig.enableInPage||!c.prefConfig.selectToShow||pt||ze){a();return}o()}}}}function Je(){let l=At||Te.getPickerStr()||window.getSelection().toString();if(setTimeout(()=>{At=""},1),!l){let e=window.getSelection();e&&e.rangeCount&&(e=e.getRangeAt(0),e&&(e=e.cloneContents(),e&&(l=e.textContent)))}if(!l){let e=ki(document);if(e&&/^(TEXTAREA|INPUT)$/i.test(e.nodeName)){let t=e.selectionStart,i=e.selectionEnd;(t||i)&&(l=e.value.substring(t,i))}}if(l){if(l=l.trim(),l)return l}else if(R&&R.className==="searchJumper"&&/^MARK$/i.test(R.nodeName))return R.dataset.matched||R.innerText;return""}function ai(l,e,t){return t||(/\w$/.test(l)?t="(\\b|$)":t=""),new RegExp(l.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g,"\\$1")+t,e)}function Ai(l,e,t,i){if(l.indexOf(e+".replace(/")!==-1){let r=l.match(ai(e,"",`\\.replace\\(/(.*?[^\\\\])/([gimsuyx]*),\\s*["'](.*?[^\\\\])??["']\\)`));return r?(t=t.replace(new RegExp(r[1],r[2]),r[3]||""),l=l.replace(r[0],e),Ai(l,e,t,i)):l.replace(ai(e,"g"),i?i(t):t)}else return l.replace(ai(e,"g"),i?i(t.replace(/\$/g,"$$$$")):t.replace(/\$/g,"$$$$"))}function Oe(){let l=Je();if(l)return l;if(!le)return Ge||"";let e,t="",i=!le.charset||le.charset=="UTF-8";try{if(le.keywords){let r=le.keywords.split(`
`);for(let n=0;n<r.length;n++){let a=r[n];if(!a||!a.trim())continue;let s=r[n].match(/^(.*?)\.replace\(\//);if(s&&(a=s[1]),i){if(/^\w[\w\|]*$/.test(a)){let o=a.split("|"),p=new URLSearchParams(location.search);for(let h=0;h<o.length&&(t=p.get(o[h]),!t);h++);}else if(/\(.+\)/.test(a)&&a.indexOf("@")!==0)try{e=ue.match(new RegExp(a)),e&&(t=e[1]),t&&(t=decodeURIComponent(t))}catch{t=""}}if(!t&&Q(document))try{let o=Pt(a);o&&(t=o.value||o.innerText)}catch{t=""}if(t&&s&&(t=Ai(r[n],a,t)),t)break}}else if(i&&kt.test(le.url)&&!/[#:%]p{/.test(le.url)&&(ue.indexOf("?")!=-1&&(e=le.url.match(new RegExp(`[\\?&]([^&]*?)=${Pi}.*`)),e&&(t=new URLSearchParams(location.search).get(e[1]))),!t&&(e=le.url.match(new RegExp(`https?://[^/]*/(.*)${Pi}`)),e&&(e=ue.match(new RegExp((e[1].replace(/\?/g,"\\?")||location.host.replace(/\./g,"\\.")+"/")+"(.*?)(/|$)")),e&&(t=e[1]),t))))try{t=decodeURIComponent(t)}catch{t=""}if(t==""&&Q(document)){let r=Q(document).querySelector("input[type=text]:not([readonly]),input:not([type])");r&&(t=r.value)}t&&(Ge=t)}catch(r){fe(r)}return Ge||"";//!localKeywords ? cacheKeywords : localKeywords;
}function fr(l,e){e=e||document.createElement("div"),l="on"+l;var t=l in e;if(!t){e.setAttribute||(e=document.createElement("div"));var i;e.hasAttribute(l)||(i=!0,e.setAttribute(l,"return;")),t=typeof e[l]=="function",i&&e.removeAttribute(l)}return t}function Kt(){var l="DOMMouseScroll";return fr("wheel")?l="wheel":fr("mousewheel")&&(l="mousewheel"),l}let Tt=!1,At="";function ns(){mt(D("settings"),()=>{ye(lt,{active:!0,insert:!0})}),mt(D("searchInPage"),()=>{P.showInPage(),P.showInPageSearch()}),mt(D("search"),()=>{P.searchAuto(0,{})}),mt(D("addSearchEngine"),()=>{let g=document.head.querySelector('[rel="search"]');if(g)Cr(g.href,(T,B)=>{if(T!="load"){B&&fe(B.statusText||B.error||B.response||B);let W=Q(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||Q(document).querySelector("textarea");Bi(W)}});else{let T=Q(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||Q(document).querySelector("textarea");Bi(T)}}),document.addEventListener("searchJumper",g=>{switch(g.detail.action){case"search":g.detail.query&&(At=g.detail.query),g.detail.name?P.searchBySiteName(g.detail.name,g.detail.key||{}):P.searchAuto(g.detail.index,g.detail.key||{});break;case"show":P.setFuncKeyCall(!1),P.showInPage(),(!c.prefConfig.disableInputOnWords||P.inInput||!Je())&&P.showSearchInput();break;case"showAll":P.appendBar(),P.showAllSites();break}}),R=Q(document);let l=gt.children[0],e=0,t,i=!1,r=g=>{if(clearTimeout(t),P.bar.classList.remove("grabbing"),document.removeEventListener("mouseup",r,!1),document.removeEventListener("mousemove",a,!1),document.removeEventListener("touchend",r,!1),document.removeEventListener("touchmove",a,!1),P.bar.style.marginLeft="",P.bar.style.marginTop="",P.bar.style.transform="",e===1){e=0,P.showAllSites();return}e=0;let T=window.innerWidth||document.documentElement.clientWidth,B=window.innerHeight||document.documentElement.clientHeight,W=T/3,z=B/3,$,C,I,S,L=vt(g),H=xt(g);L<W?($="left",I=parseInt(P.bar.style.left)>0?parseInt(P.bar.style.left):0):L<W*2?($="center",I=parseInt(P.bar.style.left)-T/2):($="right",I=T-parseInt(P.bar.style.left)-P.bar.scrollWidth),H<B/2?(C="top",S=parseInt(P.bar.style.top)):(C="bottom",S=B-parseInt(P.bar.style.top)-P.bar.scrollHeight,S<0&&(S=0)),l.style.cursor="",P.closeOpenType(),P.initPos($,C,I,S),V.setItem("searchData",c)},n={x:0,y:0},a=g=>{let T=vt(g),B=xt(g);Math.abs(n.x-T)+Math.abs(n.y-B)<50||(e===1&&(clearTimeout(t),l.style.cursor="grabbing",P.bar.style.position="fixed",P.bar.style.marginLeft="0",P.bar.style.marginTop="0",P.bar.style.right="",P.bar.style.bottom="",P.bar.style.transform="unset",P.con.classList.remove("search-jumper-scroll"),P.bar.className="search-jumper-searchBar grabbing"),e=2,P.bar.style.left=T-P.bar.scrollWidth+20+"px",P.bar.style.top=B-P.bar.scrollHeight+20+"px")};if(gt.oncontextmenu=function(g){P.bar.style.display="none",g.preventDefault()},gt.addEventListener("mousedown",g=>{if(i){i=!1;return}if(g.button===2){c.prefConfig.resizePage&&(typeof P.initBodyStyle<"u"&&(Q(document).style.cssText=P.initBodyStyle),P.con.classList.remove("resizePage")),document.removeEventListener("mouseup",r,!1),document.removeEventListener("mousemove",a,!1),document.removeEventListener("touchend",r,!1),document.removeEventListener("touchmove",a,!1);return}if(g.preventDefault(),g.stopPropagation(),P.inInput||g.button===1||g.altKey||g.ctrlKey||g.shiftKey||g.metaKey){ye(lt,{active:!0,insert:!0});return}e=1,n={x:vt(g),y:xt(g)},document.addEventListener("mouseup",r,!1),setTimeout(()=>{e===1&&document.addEventListener("mousemove",a,!1)},100),t=setTimeout(()=>{P.bar.style.display="none",document.removeEventListener("mouseup",r,!1),document.removeEventListener("mousemove",a,!1)},2e3)},!1),gt.addEventListener("touchstart",g=>{g.preventDefault(),g.stopPropagation(),i=!0,e=1,n={x:vt(g),y:xt(g)},document.addEventListener("touchend",r,!1),setTimeout(()=>{e===1&&document.addEventListener("touchmove",a,!1)},100),t=setTimeout(()=>{P.bar.style.display="none",c.prefConfig.resizePage&&(typeof P.initBodyStyle<"u"&&(Q(document).style.cssText=P.initBodyStyle),P.con.classList.remove("resizePage")),document.removeEventListener("touchend",r,!1),document.removeEventListener("touchmove",a,!1)},1500)},{passive:!1,capture:!1}),P.bar.addEventListener(Kt(),g=>{if(g.stopPropagation(),g.target.parentNode&&(g.target.parentNode.className=="sitelistCon"||g.target.parentNode.parentNode&&g.target.parentNode.parentNode.className=="sitelistCon"))return;let T=P.con.classList;if(T.contains("search-jumper-scroll")&&!(T.contains("search-jumper-left")||T.contains("search-jumper-right"))){var B,W;if(g.type!=="wheel"){var z=0,$=0;typeof g.axis=="number"?g.axis==2?$=g.detail:z=g.detail:typeof g.wheelDeltaY>"u"||g.wheelDeltaY!=0?$=-g.wheelDelta/40:z=-g.wheelDelta/40,W=$,B=z}else B=g.deltaX,W=g.deltaY;g.preventDefault(),P.con.scrollLeft+=W}},{passive:!1,capture:!1}),c.prefConfig.shortcut&&(c.prefConfig.switchSitesPreKey||c.prefConfig.switchSitesNextKey||c.prefConfig.shortcutKey||c.prefConfig.showAllShortcutKey)){let g=-1,T=!1,B=(W,z,$,C,I,S)=>z&&!W.altKey||$&&!W.ctrlKey||C&&!W.shiftKey||I&&!W.metaKey||(T||(T=(W.key||String.fromCharCode(W.keyCode)).toLowerCase()),S!=T&&S!=W.code)||!c.prefConfig.enableInInput&&g==-1&&(g=1,!$&&!z&&!C&&!I&&Mt(document))?!1:(g=0,W.preventDefault(),W.stopPropagation(),!0);document.addEventListener("mouseenter",W=>{W.target&&!P.contains(W.target)&&(Mi=W.target)},!0),document.addEventListener("keydown",W=>{if(W.target.id!=="searchJumperInput"&&(g=-1,T=!1,c.prefConfig.shortcutKey&&B(W,c.prefConfig.callBarAlt,c.prefConfig.callBarCtrl,c.prefConfig.callBarShift,c.prefConfig.callBarMeta,c.prefConfig.shortcutKey)&&(P.setFuncKeyCall(!1),P.showInPage(),(!c.prefConfig.disableInputOnWords||P.inInput||!Je())&&P.showSearchInput()),g!=1&&(c.prefConfig.showAllShortcutKey&&B(W,c.prefConfig.showAllAlt,c.prefConfig.showAllCtrl,c.prefConfig.showAllShift,c.prefConfig.showAllMeta,c.prefConfig.showAllShortcutKey)&&(P.appendBar(),P.showAllSites()),le&&P.bar.style.display!=="none"))){if(c.prefConfig.switchSitesPreKey&&B(W,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesPreKey)){P.switchSite();return}c.prefConfig.switchSitesNextKey&&B(W,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesNextKey)&&P.switchSite(!0)}},!0)}let s;if(c.prefConfig.enableInPage){let $=function(I){let S=!1;if(Mt(document))S=!0;else{let L=!1,H=I;for(;H&&(L=H.contentEditable=="true",!(L||H.nodeName.toUpperCase()=="BODY"));)H=H.parentNode;L&&(S=!0)}return S},g=!1,T,B=!1,W;document.addEventListener("selectionchange",I=>{(c.prefConfig.leftMouse||c.prefConfig.middleMouse)&&(window.getSelection().toString()?W=window.getSelection().getRangeAt(0).getBoundingClientRect():W=null)});let z=!1;s=I=>{g&&I.preventDefault(),g=!1,document.removeEventListener("click",s,!0)};let C=I=>{if(z&&I.type==="mousedown"&&I.button===0||I.target.classList&&I.target.classList.contains("search-jumper-btn")||P.contains(I.target)||P.bar.classList.contains("grabbing"))return;let S=$(I.target),L=!c.prefConfig.enableInInput&&S;if(L&&I.type==="dblclick")return;if(c.prefConfig.minPopup==2&&(S?P.con.classList.add("targetInput"):P.con.classList.remove("targetInput")),I.type==="touchstart"){c.prefConfig.selectToShow&&setTimeout(()=>{Je()?P.showInPage(!0,I):P.waitForHide(0)},0);return}z=!0,setTimeout(()=>{z=!1},500),g=!1,R=I.target,P.closePopupWindow();let H=!1;if((c.prefConfig.altKey||c.prefConfig.ctrlKey||c.prefConfig.shiftKey||c.prefConfig.metaKey)&&!(c.prefConfig.altKey&&!I.altKey||c.prefConfig.ctrlKey&&!I.ctrlKey||c.prefConfig.shiftKey&&!I.shiftKey||c.prefConfig.metaKey&&!I.metaKey)&&(H=!0),!c.prefConfig.selectToShow&&(I.button===0&&!c.prefConfig.leftMouse||I.button===1&&!c.prefConfig.middleMouse)){P.waitForHide(0);return}let Z=I.clientX,ne=I.clientY,re=!1,j=Y=>{Math.abs(Z-Y.clientX)+Math.abs(ne-Y.clientY)>2&&(clearTimeout(T),document.removeEventListener("mousemove",j,!0),Y.target.removeEventListener("scroll",F),re=!0)},F=Y=>{clearTimeout(T),document.removeEventListener("mousemove",j,!0),Y.target.removeEventListener("scroll",F)},U=Y=>{Tt=!1,P.contains(Y.target)||g?Y.preventDefault():setTimeout(()=>{g||/^pv-/.test(Y.target.className)||(S=$(Y.target),L=!c.prefConfig.enableInInput&&S,!L&&(H&&Y.button===2||(re||B)&&Y.button===0&&c.prefConfig.selectToShow&&Je())?P.showInPage(!0,Y):(z=!1,P.waitForHide(0)))},0),clearTimeout(T),document.removeEventListener("mouseup",U,!0),document.removeEventListener("mousemove",j,!0),Y.target.removeEventListener("scroll",F)};if(I.type==="dblclick"){Je()!==""?(g=!0,Tt=!1,document.removeEventListener("mouseup",U,!0),document.removeEventListener("mousemove",j,!0),I.target.removeEventListener("scroll",F),clearTimeout(T),setTimeout(()=>{P.showInPage(!0,I)},200)):(B=!0,setTimeout(()=>{B=!1},200));return}T&&clearTimeout(T),T=setTimeout(()=>{Tt||R==I.target&&(I.button===1&&!c.prefConfig.middleMouse||I.button===2&&!c.prefConfig.rightMouse||I.button===0&&!c.prefConfig.leftMouse||(c.prefConfig.longPressTile?P.showInPage(!0,I):(P.setFuncKeyCall(!1),P.showInPage()),g=!0))},parseInt(c.prefConfig.longPressTime));let X=!1;if(I.button===2?H&&(X=!0):(I.button===0?c.prefConfig.leftMouse&&(X=!0):I.button===1&&c.prefConfig.middleMouse&&(X=!0),X&&(L?X=!1:W?(I.clientX<W.left||I.clientX>W.left+W.width||I.clientY<W.top||I.clientY>W.top+W.height)&&(X=!1):X=!1)),X)return setTimeout(()=>{Tt||P.showInPage(!0,I),document.removeEventListener("mousemove",j,!0),I.target.removeEventListener("scroll",F)},200),g=!0,document.addEventListener("mouseup",U,!0),document.addEventListener("click",s,!0),!1;document.addEventListener("mousemove",j,!0),document.addEventListener("mouseup",U,!0),I.target.addEventListener("scroll",F)};if(document.addEventListener("mousedown",C,!0),document.addEventListener("dblclick",C,!0),c.prefConfig.selectToShow){let I,S,L=H=>{clearTimeout(I),I=setTimeout(()=>{window.getSelection().toString()&&(C(S),document.removeEventListener("selectionchange",L))},300)};document.addEventListener("touchstart",H=>{H.isTrusted!==!1&&(S=H,document.addEventListener("selectionchange",L))})}document.addEventListener("contextmenu",I=>{g&&I.preventDefault(),g=!1})}c.prefConfig.dragToSearch&&!pt&&Q(document).addEventListener("dragstart",g=>{if(!g.isTrusted||c.prefConfig.dragAlt&&!g.altKey||c.prefConfig.dragCtrl&&!g.ctrlKey||c.prefConfig.dragShift&&!g.shiftKey||c.prefConfig.dragMeta&&!g.metaKey||!c.prefConfig.enableInInput&&!g.altKey&&!g.ctrlKey&&!g.shiftKey&&!g.metaKey&&Mt(document))return;R=g.target,R.nodeType!==1&&(R=R.parentNode),R.shadowRoot&&(R=R.shadowRoot.activeElement||R);const T=R.closest('[draggable="true"]');if(!g.altKey&&!g.ctrlKey&&!g.shiftKey&&!g.metaKey&&!/^(auto|default|pointer)$/.test(getComputedStyle(R).cursor)||T&&T.nodeName!=="A")return;const B=W=>{P.funcKeyCall=!0,P.waitForHide(0),setTimeout(()=>{ps(W.clientX,W.clientY)},2),s&&document.removeEventListener("click",s,!0),Tt=!0};if(T){const W=new AbortController,z={capture:!0,signal:W.signal},$=()=>W.abort();document.addEventListener("dragend",$,z),document.addEventListener("drop",$,z),document.addEventListener("dragstart",$,z),document.addEventListener("dragover",C=>{Math.hypot(C.clientX-g.clientX,C.clientY-g.clientY)<=100||($(),B(C))},z)}else B(g)}),c.prefConfig.quickAddRule&&document.addEventListener("click",g=>{((g.ctrlKey||g.metaKey)&&g.shiftKey||(g.ctrlKey||g.metaKey)&&g.altKey||g.altKey&&g.shiftKey)&&/^(INPUT|TEXTAREA)$/i.test(g.target.nodeName)&&(/^INPUT$/i.test(g.target.nodeName)&&g.target.type&&g.target.type!="text"&&g.target.type!="search"||Bi(g.target))},!0);let o,p=g=>{clearTimeout(o),o=setTimeout(()=>{P.refresh()},100)};document.addEventListener("fullscreenchange",g=>{document.fullscreenElement&&(P.bar.style.display="none")});let h=!1,u=g=>{if(h)return;h=!0,setTimeout(()=>{h=!1},300);let T=g.target;if(le&&T)if(T.nodeName&&T.nodeName.toLowerCase&&T.nodeName.toLowerCase()=="a")P.updateCacheKeywords(),V.setItem("clickLink",T.href);else{let B=T.parentNode;B&&B.nodeName&&B.nodeName.toLowerCase&&B.nodeName.toLowerCase()=="a"&&(P.updateCacheKeywords(),V.setItem("clickLink",T.href))}};Q(document).addEventListener("auxclick",u,!0),Q(document).addEventListener("click",u,!0);let m=function(g){var T=history[g];return function(){var B=T.apply(this,arguments);let W=location.href.slice(0,500);if(ue!=W){ue=W;var z=new Event("sj_"+g);z.arguments=arguments,window.dispatchEvent(z)}return B}};window.addEventListener("sj_pushState",p),window.addEventListener("sj_replaceState",p),window.addEventListener("yt-navigate-finish",p),window.addEventListener("securitypolicyviolation",g=>{g.violatedDirective==="form-action"&&yr()});let d=window.location.href,f=g=>P.removeMark(g),w=(g,T)=>P.highlight(g,T),M=()=>P.appendBar(),E={childList:!0,characterData:!0,subtree:!0},v=0;new MutationObserver((g,T)=>{if(g.some(z=>z.type==="childList"||z.type==="attributes")){const z=window.location.href;z!==d&&(d=z,p(),P.checkDiscussions())}if(P.lockWords){if(P.initHighlight&&v>100)return;for(let z of g){if(z.type==="characterData"){let $=z.target.parentNode;if(!$)return;let C=z.target.previousElementSibling;if(C&&!C.dataset.inited&&C.className==="searchJumper"){C.dataset.inited=!0;return}if(C=z.target.nextElementSibling,C&&!C.dataset.inited&&C.className==="searchJumper"){C.dataset.inited=!0;return}P.checkCharacterData($),P.initHighlight&&v++}if(z.removedNodes.length&&[].forEach.call(z.removedNodes,$=>{$.nodeType===1&&($.classList&&$.classList.contains("searchJumper")?f($):$.children.length&&[].forEach.call($.querySelectorAll("mark.searchJumper,a.searchJumper,input.searchJumper,textarea.searchJumper"),C=>{f(C)}))}),z.addedNodes.length)for(let $=0;$<z.addedNodes.length;$++){let C=z.addedNodes[$],I;if(C.nodeType===1){if(/^searchJumper$/.test(C.className))continue;I=C}else{if(C.previousElementSibling&&/^searchJumper$/.test(C.previousElementSibling.className))continue;if(C.nextElementSibling&&/^searchJumper$/.test(C.nextElementSibling.className))continue;I=C.parentNode}I&&(setTimeout(()=>{w("insert",I)},0),P.initHighlight&&v++)}}M()}}).observe(Q(document),E)}function mr(l,e){if(!l)return"";let t,i;if(e)t=e.replace(/(^https?:\/\/.+)\/[^\/]*$/,"$1"),i=e;else{if(l.charAt(0)=="#")return location.href+l;if(l.charAt(0)=="?")return location.href.replace(/^([^\?#]+).*/,"$1"+l);t=location.protocol+"//"+location.host;let o=document.querySelector("base");i=o?o.href:location.href}let r=i||t;r=r.replace(/(\?|#).*/,""),/https?:\/\/[^\/]+$/.test(r)&&(r=r+"/"),r.indexOf("http")!==0&&(r=t+r);var n=/^[^\?#]*\//.exec(r)[0],a=/^\w+\:\/\/\/?[^\/]+/.exec(n)[0],s=/^\w+\:\/\//;for(l=l.replace(/^\/(\.\.\/)+/,"/");l.indexOf("../")===0;)l=l.substr(3),n=n.replace(/\/[^\/]+\/$/,"/");return l=l.replace(/\.\//,""),/^\/\/\/?/.test(l)&&(l=location.protocol+l),s.test(l)?l:(l.charAt(0)=="/"?a:n)+l}function Bi(l){if(ke)return;let e,t=location.href;if(l&&l.name)for(e=l.parentNode;e;){if(e.nodeName.toUpperCase()==="FORM"){let n=e.target;if(n&&typeof n=="string"&&n!="_blank"&&n!="_self"&&n!="_parent"&&n!="_top"&&!Q(document).querySelector(n)){e=null;break}break}e=e.parentNode}let i=()=>!window.confirm(D("noValidItemAsk"));if(e){t=mr(e.getAttribute("action")||t);let n=[],a=new FormData(e);for(let[s,o]of a)l.name===s?o="%s":o=encodeURIComponent(o),n.push(s+"="+o);if(e.method.toLowerCase()=="post")t+="%p{"+n.join("&")+"}",e.action.indexOf(location.origin)==0&&location.pathname&&location.pathname!=="/"&&(t+=`#from{${location.pathname.slice(1)}}`);else{let s=t.match(/\?(.*)/);s&&(t=t.replace(s[0],""),s[1].split("&").forEach(o=>{let p=o.split("="),h=p[0];if(n.findIndex(m=>m.indexOf(h+"=")===0)!==-1)return;let u=p[1];u==l.value&&(u="%s"),n.push(h+"="+u)})),t+="?"+n.join("&")}}else if(l&&l.value)if(location.href.indexOf(l.value)!==-1)t=location.href.replace(l.value,"%s");else{let n=encodeURIComponent(l.value);if(location.pathname.indexOf(n)!==-1||location.search.indexOf(n)!==-1)t=location.origin+location.pathname.replace(n,"%s")+location.search.replace(n,"%s");else if(n=escape&&escape(l.value),n&&location.pathname.indexOf(n)!==-1||location.search.indexOf(n)!==-1)t=location.origin+location.pathname.replace(n,"%se")+location.search.replace(n,"%se");else if(i())return}else if(i())return;let r=[];[].forEach.call(document.querySelectorAll("link[rel='shortcut icon'],link[rel='icon'],link[rel='fluid-icon'],link[rel='apple-touch-icon']"),n=>{r.indexOf&&r.indexOf(n.href)!==-1||r.push(n.href)}),mi(document.title.replace(l?l.value:"","").replace(/^\s*[-_]\s*/,""),"",t,r,document.characterSet)}const gr="https://hoothin.github.io/SearchJumper/jump.html";function yr(){if(!Ct||!Ct.url)return;let l=`${gr}#jump{url=${encodeURIComponent(Ct.url)}&charset=${Ct.charset}}`;Ct.target=="_self"?location.href=l:ye(l,{active:!0,insert:!0})}function as(){if(ue.indexOf(gr)!=-1){let l=ue.match(/#jump{url=(.*)&charset=(.*)}/);l&&Ft(l[2],decodeURIComponent(l[1]),"_self")}}var ke;async function os(){if(Zt(ue,c.prefConfig.configPage,!1)||ue.indexOf(lt)===0||(document.title==="SearchJumper"||document.querySelector('[name="from"][content="SearchJumper"]'))&&document.querySelector('[name="author"][content="Hoothin"]')){ke=document.querySelector('[name="engines"]');let l=document.getElementById("spotlight");if(ke)try{if(ke=ke.getAttribute("content"),ke.indexOf("http")===0){if(l){const i=D("loadingCollection");l.innerText=i,l.setAttribute("spotlight",i)}let t=await new Promise(i=>{We({method:"GET",url:ke,onload:function(r){var n=null;try{n=JSON.parse(r.responseText),i(n)}catch(a){console.log(a),i(!1)}},onerror:function(r){console.log(r),i(!1)},ontimeout:function(r){console.log(r),i(!1)}})});t?(c.sitesConfig=t,ke=!0):ke=!1}else c.sitesConfig=JSON.parse(decodeURI(ke)),ke=!0}catch{ke=!1}let e=ue.indexOf(lt.replace(/\/config.*/,""))===0||ue.indexOf(ft)===0||ue.indexOf(jr)===0||location.hostname==="localhost";return e&&(ze=!!ke||/all(\.html)?$/.test(location.pathname)),l?l.style.display="none":setTimeout(()=>{l=document.getElementById("spotlight"),l&&(l.style.display="none")},500),e||Zt(ue,c.prefConfig.configPage,!1)}return!1}async function ls(){if(pt=await os(),pt&&!ze&&Zt(location.href,c.prefConfig.configPage,!1)){let l,e=!1,t=()=>{l=setTimeout(()=>{e||t()},50),window.postMessage({cacheIcon:ge,version:Lt.script.version||0,splitEnabled:dt,command:"configReady"},"*")},i=setTimeout(()=>{e||location.reload()},3e3);document.addEventListener("received",a=>{e=!0,clearTimeout(l),clearTimeout(i),Ve.length>0&&c.prefConfig.cacheSwitch&&(fe(`Start cache ${Ve.length} icons!`),ur())}),document.addEventListener("downloadCache",a=>{hs()}),document.addEventListener("importCache",a=>{let s=a.detail?a.detail.cacheData:a.cacheData;us(s),Ce("Cache imported successfully!")}),document.addEventListener("showSiteAdd",a=>{let s=a.detail?a.detail.site:a.site;s&&(s.url?mi(s.name,s.description,s.url,s.icon?[s.icon]:[],s.charset,s.kwFilter,s.match,s.hideNotMatch):wr.open(s))}),document.addEventListener("configRequest",async a=>{const s=a.detail;if(!(!s||typeof s.id!="string"||!["get","save","import","configure","disconnect","sync","shareGet","shareSet","createAccount"].includes(s.operation)))try{const o=await V.getItem("searchData");if(!Zt(location.href,o?.prefConfig?.configPage,!1))throw new Error("Configuration access denied");const p=await Xt(s.operation,s.detail);window.postMessage({command:"configResponse",id:s.id,ok:!0,value:p},location.origin)}catch(o){window.postMessage({command:"configResponse",id:s.id,ok:!1,error:o.message},location.origin)}}),t(),document.addEventListener("getAppearancePreview",async()=>{try{await P.ready;const a=P.bar.querySelector(".search-jumper-targetAll:has(a.search-jumper-btn)")||P.bar.querySelector(".search-jumper-type:has(a.search-jumper-btn)"),s=o=>{const p=P.con.cloneNode(!1);p.className="search-jumper-searchBarCon "+(o?"search-jumper-left resizePage":"funcKeyCall"),p.removeAttribute("style");const h=P.bar.cloneNode(!1);return h.className="search-jumper-searchBar"+(o?" initShow":""),h.removeAttribute("style"),(o?[...P.bar.querySelectorAll(":scope > .search-jumper-logo, :scope > .search-jumper-type")].slice(0,5):[a].filter(Boolean)).forEach(m=>{const d=m.cloneNode(!0);d.removeAttribute("style"),d.classList.remove("notmatch","input-hide","not-expand","search-jumper-open"),o?d.style.display="inline-flex":d.classList.add("search-jumper-open"),d.querySelectorAll(".sitelist, .searchJumperExpand").forEach(f=>f.remove()),[...d.querySelectorAll(":scope > a.search-jumper-btn")].slice(8).forEach(f=>f.remove()),d.querySelectorAll("a").forEach(f=>{f.removeAttribute("href"),f.removeAttribute("target"),f.classList.remove("notmatch","input-hide"),f.style.removeProperty("display")}),d.querySelectorAll("img[data-src]").forEach(f=>{f.src=f.dataset.src}),h.appendChild(d)}),p.appendChild(h),p.outerHTML};window.postMessage({command:"appearancePreview",cssText:P.appearanceCssText,html:s(!1),sidebarHtml:s(!0)},"*")}catch(a){window.postMessage({command:"appearancePreview",error:a.message},"*")}}),document.addEventListener("dataChanged",a=>{t()});let r=(a,s,o,p)=>{window.postMessage({url:a,name:s,status:o,finalUrl:p,command:"verifyResult"},"*")};document.addEventListener("verifyUrl",a=>{let s=a.detail?a.detail.url:a.url,o=a.detail?a.detail.name:a.name;We({method:"GET",url:s,headers:{referer:s,"User-Agent":navigator.userAgent},onload:function(p){r(s,o,p&&p.status,p&&p.finalUrl)},onerror:function(p){r(s,o,"error","")},ontimeout:function(p){r(s,o,"timeout","")}})});let n=c.prefConfig.cacheSwitch;document.addEventListener("configSaved",async a=>{if(c=await V.getItem("searchData"),!c)return;let s={},o=ge?Object.keys(ge).length:0;n==c.prefConfig.cacheSwitch?(c.sitesConfig.forEach(p=>{if(/^[a-z\- ]+$/.test(p.icon||"")||/^http/.test(p.icon)){let h=p.icon.trim().replace(/ /g,"_"),u=ge[h];u&&(s[h]=u)}p.sites.forEach(h=>{let u=h.icon;if(u||(u=h.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(u)){let m=ge[u];m&&(s[u]=m)}})}),o!==Object.keys(s).length&&(ge=s,V.setItem("cacheIcon",s))):(c.sitesConfig.forEach(p=>{if(/^http/.test(p.icon)){let h=ge[p.icon];if(h)if(h==="fail"){let u=document.createElement("img");u.src=p.icon,Ve.push(u)}else s[p.icon]=h}p.sites.forEach(h=>{let u=h.icon;if(u||(u=h.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(u)){let m=ge[u];if(m)if(m==="fail"){let d=document.createElement("img");d.src=u,Ve.push(d)}else s[u]=m}})}),ge=s,V.setItem("cacheIcon",s),c.prefConfig.cacheSwitch&&(Ve.length>0&&(Ce(D("startCache")),ur(!0)),dr())),n=c.prefConfig.cacheSwitch,(a.notification||a.detail&&a.detail.notification)&&Ce("Configuration imported successfully!")}),document.addEventListener("copyConfig",a=>{let s=c.sitesConfig.filter(o=>o&&!(/^BM/.test(o.type)&&o.icon==="bookmark"));qe(JSON.stringify(s,null,2)),Ce("Configuration copied successfully!")})}else if(Vi.test(ue)){let l=Be(`
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
                `),e,t=0,i=document.createElement("button");i.id="import-btn",i.className="btn Button--secondary Button";let r=document.createElement("button");r.id="filter-btn",r.className="btn Button--secondary Button";let n=document.createElement("h3"),a=document.createElement("div");a.id="import-btns-con",a.appendChild(l),a.appendChild(i),a.appendChild(r),a.appendChild(n),a.addEventListener("click",o=>{e&&(e.style.filter=""),a.classList.add("hide")}),i.innerText=D("import"),i.addEventListener("click",o=>{if(ke||!e)return;let p=e.innerText.trim(),h;if(p){try{h=JSON.parse(p)}catch(u){Ce(u.toString());return}switch(t){case 0:window.confirm(D("importOrNot"))&&(a.parentNode&&a.parentNode.removeChild(a),Qt(()=>(c.sitesConfig=h,c.lastModified=new Date().getTime(),()=>{Ce(D("siteAddOver")),P.refreshEngines()}),!0));break;case 1:mi(h.name,"",h.url,h.icon?[h.icon]:[],h.charset,h.kwFilter,h.match,h.hideNotMatch);break;case 2:c.prefConfig.inPageRule||(c.prefConfig.inPageRule={}),Object.keys(h).forEach(u=>{let m=h[u];if(!m)return;if(u.indexOf("@")===0){c.prefConfig.inPageRule[u]=m;return}if(!m.words||m.words.length===0)return;let d="",f=m.sep||"";f?d="$c"+f:(f=" ",m.words.length===1&&m.words[0].indexOf(" ")!==-1&&(f="",d="$o")),c.prefConfig.inPageRule[u]=d+m.words.join(f)}),V.setItem("searchData",c),Ce("Over!");break}}}),r.innerText=D("filter"),r.addEventListener("click",o=>{if(e){a.parentNode&&a.parentNode.removeChild(a);let p=e.innerText.trim(),h;if(!p||p.indexOf("[")!==0)return;try{h=JSON.parse(p),wr.open(h)}catch(u){Ce(u.toString())}}});let s=o=>{if(o==e&&a.parentNode)return;let p=o.offsetTop+"px",h=o.innerText.trim();if(h){if(n.innerText="",/^\[/.test(h))t=0,a.style.top=p,a.classList.add("filter");else if(/^\{\s*"name"/.test(h))t=1,a.style.top=p,a.classList.remove("filter"),n.innerText=h.match(/"name":\s*"(.*)"/)[1];else if(/^\{/.test(h))t=2,a.style.top=p,a.classList.remove("filter");else return;e&&(e.style.filter=""),o.parentNode.appendChild(a),o.style.filter="blur(5px)",e=o,a.classList.remove("hide")}};window.addEventListener("load",o=>{if(!e){let p=document.querySelector(".highlight>pre");p&&s(p)}}),document.addEventListener("mouseover",o=>{if(Vi.test(ue))if(o.target.nodeName==="PRE")s(o.target);else{let p=o.target.children[0];p&&p.nodeName==="PRE"&&s(p)}})}}class cs{constructor(){this.inited=!1}init(){if(this.inited)return;this.inited=!0;let e=this;this.openList=[],this.filterCss=`
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
                    <a href="${ft}" class="searchJumperFrame-title" target="_blank">
                        <img onerror="this.style.display='none'" width="32px" height="32px" src="${St}" />${D("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-buttons">
                        <button id="expandAll" type="button">${D("expandAll")}</button>
                        <button id="collapseAll" type="button">${D("collapseAll")}</button>
                    </div>
                    <div class="sitesCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="cancel" type="button">${D("siteCancel")}</button>
                        <button id="selectAll" type="button">${D("selectAll")}</button>
                        <button id="add" type="button">${D("import")}</button>
                    </div>
                </div>
                `),this.sitesCon=this.filterFrame.querySelector(".sitesCon");let t=this.filterFrame.querySelector("#add"),i=this.filterFrame.querySelector("#selectAll"),r=this.filterFrame.querySelector("#expandAll"),n=this.filterFrame.querySelector("#collapseAll"),a=!1;r.addEventListener("click",s=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.setAttribute("open","open")})}),n.addEventListener("click",s=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.removeAttribute("open")})}),i.addEventListener("click",s=>{a=!a,[].forEach.call(this.filterFrame.querySelectorAll("input[type=checkbox]"),o=>{o.checked=a})}),t.addEventListener("click",s=>{ke||Qt(()=>{let o=!1;if([].forEach.call(this.filterFrame.querySelectorAll("details"),p=>{let h=p.children[0].children[0],u=e.typeDict[h.title];if(u.type=h.innerText.trim(),u.sites=[],[].forEach.call(p.querySelectorAll('div>[type="checkbox"]'),m=>{if(m.checked){o=!0;let d=e.siteDict[m.parentNode.title],f=m.nextElementSibling;if(!d||!f)return;if(f.value==="0")u.sites.push(d);else{let w=e.searchType(f.value);c.sitesConfig[w].sites.push(d)}}}),u.sites.length){let m=e.searchType(u.type);m===!1?c.sitesConfig.push(u):c.sitesConfig[m].sites=c.sitesConfig[m].sites.concat(u.sites)}}),o)return c.lastModified=new Date().getTime(),()=>{Ce(D("siteAddOver")),P.refreshEngines(),this.close()}})}),this.filterFrame.addEventListener("click",s=>{(s.target.id=="searchJumperFilter"||s.target.id=="cancel")&&this.close()})}searchType(e){for(let t=0;t<c.sitesConfig.length;t++)if(c.sitesConfig[t].type==e)return t;return!1}searchUrl(e){for(let t=0;t<c.sitesConfig.length;t++){let i=c.sitesConfig[t].sites;for(let r=0;r<i.length;r++)if(i[r].url.replace(/^https?/,"")==e.replace(/^https?/,""))return!0}return!1}searchName(e){for(let t=0;t<c.sitesConfig.length;t++){let i=c.sitesConfig[t].sites;for(let r=0;r<i.length;r++)if(i[r].name==e){let n=e+"_1";return this.searchName(n)}}return e}anylizeType(e){let t=this,i=document.createElement("details"),r=document.createElement("summary"),n=document.createElement("span");n.title=e.type,n.innerText=e.type,r.appendChild(n);let a=document.createElement("input");a.type="checkbox",r.appendChild(a);let s=document.createElement("button");s.innerText=D("rename"),s.addEventListener("click",p=>{let h=window.prompt(D("rename"),n.innerText);h&&(n.innerText=h)}),r.appendChild(s),i.appendChild(r);for(let p=0;p<this.openList.length;p++)if(this.openList[p]==e.type){i.setAttribute("open","open");break}let o=[];this.typeDict[e.type]=e,e.sites&&e.sites.forEach(p=>{let h=document.createElement("div"),u=document.createElement("span");if(u.innerText=p.name,p.name=t.searchName(p.name),h.appendChild(u),h.title=p.url,i.appendChild(h),t.searchUrl(p.url)){h.classList.add("exist");return}let m=document.createElement("input");m.type="checkbox",m.onclick=w=>{if(!m.checked)a.checked=!1;else{let M=!0;for(let E=0;E<o.length;E++)if(!o[E].checked){M=!1;break}M&&(a.checked=!0)}},h.appendChild(m),h.addEventListener("click",w=>{w.target.nodeName.toUpperCase()=="SPAN"&&m.click()});let d=document.createElement("select"),f=document.createElement("option");f.value=0,f.innerText=D("currentType"),d.appendChild(f);for(let w=0;w<c.sitesConfig.length;w++){let M=c.sitesConfig[w];if(M.type!=e.type){let E=document.createElement("option");E.value=M.type,E.innerText=M.type,d.appendChild(E)}}h.appendChild(d),t.siteDict[p.url]=p,o.push(m)}),o.length==0&&(a.style.display="none",s.style.display="none"),a.addEventListener("click",p=>{o.forEach(h=>{h.checked=a.checked})}),this.sitesCon.appendChild(i)}close(){this.openList=[],[].forEach.call(this.sitesCon.querySelectorAll("details"),e=>{e.hasAttribute("open")&&this.openList.push(e.querySelector("summary").innerText)}),this.filterFrame.parentNode&&this.filterFrame.parentNode.removeChild(this.filterFrame)}open(e){this.init();let t=this;this.siteDict={},this.typeDict={},(!this.filterCssEle||!this.filterCssEle.parentNode)&&(this.filterCssEle=Be(this.filterCss)),document.documentElement.appendChild(this.filterFrame),ie(this.sitesCon,""),e.forEach(i=>{t.anylizeType(i)})}}const wr=new cs;var je,De,$i,Wi,Ji,Ri,oi,li,ci,pi;function ps(l,e){if(!P||!P.bar)return;let t=P.bar.querySelector(".search-jumper-type.search-jumper-open"),i=()=>{if(document.removeEventListener("dragend",Ji,!0),document.removeEventListener("dragenter",Ri,!0),De.parentNode&&(De.parentNode.removeChild(De),je.style.opacity="",je.style.transform=""),Tt=!1,clearTimeout(oi),le&&!le.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||P.con.classList.contains("resizePage")){if(t&&!t.classList.contains("search-jumper-open"))if(t.children[0].onmouseup)t.children[0].onmouseup();else{let m=new PointerEvent("mouseup");t.children[0].dispatchEvent(m)}}else P.bar.style.display="none"};if(!li&&!ci&&(pi=(c.prefConfig.zoomDrag||100)/100,li=pi*190,ci=pi*190),!je){let m=`
                    #dragCon {
                      position: fixed;
                      top: 0;
                      left: 0;
                      transform: scale(${pi});
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
                `,d=Be(m);$i=[],Wi=[],je=document.createElement("div"),je.id="searchJumperWrapper",ie(je,`
                <div class="panel"></div>
                <div class="dragLogo">${Li}</div>
                `),Ze||je.appendChild(d);const f=6,w=10;let M=je.querySelector(".panel"),E=360/f,v=360/w,k=-E/2,g=-v/2,T,B=je.querySelector(".dragLogo"),W;B.addEventListener("dragover",L=>{L.preventDefault()},!0),B.addEventListener("dragenter",L=>{clearTimeout(W),T&&(T.style.transform=`rotate(${T.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,T.classList.remove("over")),T=null,B.style.transform="scale(1.35)",L.preventDefault(),clearTimeout(oi),oi=setTimeout(()=>{i(),P.appendBar(),P.showAllSites()},1e3)},!0);let z=(L,H,Z)=>{let ne=document.createElement("div");ne.className=L;let re=document.createElement("div");re.className="sector-inner";let j=document.createElement("span");re.appendChild(j),ne.appendChild(re);let F=`rotate(${H}deg)`;return j.style.transform=Z,ne.style.transform=F+(c.prefConfig.hideDragHistory?"scale(1.2)":""),ne.dataset.deg=H,M.appendChild(ne),j.addEventListener("dragover",U=>{U.clientX<50?De.style.left="0px":U.clientX>document.documentElement.clientWidth-50&&(De.style.left=document.documentElement.clientWidth-(li<<1)+"px"),U.clientY<50?De.style.top="0px":U.clientY>document.documentElement.clientHeight-50&&(De.style.top=document.documentElement.clientHeight-(ci<<1)+"px"),U.preventDefault()},!0),j.addEventListener("dragenter",U=>{clearTimeout(W),j.innerText&&(T&&(T.style.transform=`rotate(${T.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,T.classList.remove("over")),B.style.transform="",ne.style.transform=`scale(${c.prefConfig.hideDragHistory?"1.6":"1.25"}) ${F}`,ne.classList.add("over"),T=ne,clearTimeout(oi))},!0),j};for(let L=0;L<f;L++){let H=z("sector",k+E*L,`translateX(-10px) translateY(-10px) rotate(${k-E*L}deg)`);$i.push(H)}for(let L=0;L<w;L++){let H=z("sector out",g+v*L,`translateX(12px) translateY(-15px) rotate(${g-v*L}deg)`);Wi.push(H)}Ji=L=>{i()},je.addEventListener("click",L=>{i()}),je.addEventListener("drop",L=>{L.target===B?(P.setFuncKeyCall(!1),P.showInPage()):T&&(i(),P.searchBySiteName(T.children[0].dataset.name,L),T.style.transform=`rotate(${T.dataset.deg}deg)`,T.classList.remove("over"),T=null),L.preventDefault()});let $,C,I,S;Ri=L=>{clearTimeout(W),je.contains(L.target)||(W=setTimeout(()=>{i()},300))},De=document.createElement("div"),De.id="dragCon",De.appendChild(je)}P.recoveHistory();let r=P.autoGetFirstType(),n=r.querySelectorAll("a.search-jumper-btn:not(.notmatch)"),a=0,s=()=>{let m=null;for(let d=a;d<n.length;d++){let f=n[d];if(f.style.display!=="none"){m=f,a=d+1;break}}return m};const o=(m,d)=>{m.parentNode.dataset.name=d.dataset.name;let f=document.createElement("p");if(f.innerText=d.dataset.name.substr(0,10).trim(),!/^\w+$/.test(f.innerText)){let E="",v=0;for(let k of f.innerText)if(E+=k,/^\w+$/.test(k)?v++:v+=2,v>10){E+="...";break}f.innerText=E}let w=document.createElement("img");w.style.display="none",m.appendChild(w),m.appendChild(f),w.onload=E=>{w.style.display=""};let M=d.querySelector("img");if(M){let E=M.src||M.dataset.src;E&&Qe(w,E)}};$i.forEach((m,d)=>{ie(m,"");let f=s();if(!f){m.parentNode.parentNode.style.filter="contrast(0.5)";return}m.parentNode.parentNode.style.filter="",o(m,f)});let p=0,h;r.classList.contains("search-jumper-needInPage")?h=P.txtHistorySiteBtns:r.classList.contains("search-jumper-targetImg")?h=P.imgHistorySiteBtns:r.classList.contains("search-jumper-targetAudio")?h=P.audioHistorySiteBtns:r.classList.contains("search-jumper-targetVideo")?h=P.videoHistorySiteBtns:(r.classList.contains("search-jumper-targetLink")||r.classList.contains("search-jumper-targetPage"))&&(h=P.linkHistorySiteBtns),h?(h=h.concat(P.historySiteBtns),h=h.filter((m,d,f)=>f.indexOf(m)===d)):h=P.historySiteBtns;let u=()=>{if(c.prefConfig.reuseDragHistory)return s();if(c.prefConfig.hideDragHistory)return!1;let m=null;for(let d=p;d<h.length;d++){let f=h[d];if(f.style.display!=="none"){m=f,p=d+1;break}}return m};Wi.forEach((m,d)=>{let f=new DragEvent("dragleave");m.dispatchEvent(f),ie(m,""),m.parentNode.parentNode.style.opacity=.6;let w=u();if(!w)return;let M=w.querySelector("img");M&&M.dataset.src&&Qe(M),m.parentNode.parentNode.style.opacity=1,o(m,w)}),De.style.left=l-li+"px",De.style.top=e-ci+"px",je.style.opacity="",je.style.transform="",setTimeout(()=>{document.addEventListener("dragend",Ji,!0),P.addToShadow(De),setTimeout(()=>{je.style.opacity=1,je.style.transform="scale(1)"},10),setTimeout(()=>{getComputedStyle(je).zIndex!="2147483647"?i():document.addEventListener("dragenter",Ri,!0)},100)},0)}var te,hi,qt,He,It,Fe,Gt,Vt,br,vr,Di,ui,di,fi,xr;function mi(l,e,t,i,r,n,a,s){if(self.kwFilter=n,self.charset=r,self.hideNotMatch=s,self.match=a,!te){let p=Be(`
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
                    <a href="${ft}" class="searchJumperFrame-title" target="_blank" draggable="false">
                        <img width="32px" height="32px" src="${St}" />${D("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-maxBtn">
                        <svg id="maxBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("maxAddSiteBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                        <svg id="minBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("minAddSiteBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                    </div>
                    <div class="searchJumperFrame-inputs">
                        <div class="searchJumperFrame-input-title">${D("siteName")}</div>
                        <input name="siteName" type="text" />
                        <div class="searchJumperFrame-input-title">${D("siteUrl")}</div>
                        <textarea name="url" type="text"></textarea>
                        <svg id="crawlBtn" class="sideIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${D("crawlInfo")}</title><path d="M385 926.3c-11 0-21.4-4.3-29.2-12l-0.6-0.6c-0.7-0.7-65.6-70.4-108.4-112.7-42.8-42.3-118.6-111.4-119.3-112.1l-0.6-0.5c-15.9-15.7-24.6-36.6-24.5-58.8s9-43.1 25-58.6c28.6-27.7 72.2-31 104.6-8.2l90.5 44-83.1-290.1c-4.9-17.1-4.2-34.9 2.1-51.6 6.3-16.6 17.5-30.5 32.5-40.1 22-14.1 47.7-17.7 70.3-10 22.6 7.7 40.7 26.3 49.5 50.9L431 369.8V176.9c0-43.4 35.3-78.7 78.7-78.7 20.7 0 40.2 7.9 55 22.4 14.8 14.4 23.2 33.8 23.7 54.4v0.2l2.4 165.5L625 229.1l0.1-0.4c8.2-23.2 26.2-41.1 49.4-49.3 23.2-8.2 48.5-5.5 69.4 7.3 15.6 9.6 27.7 24.3 33.9 41.6s6.4 36.3 0.6 53.7L736 409.5l42.9-48.6 0.3-0.3c15.7-16.2 34.4-25.7 54.1-27.3 19.8-1.6 39.1 4.7 56 18.1 33 26.4 40.8 60.1 22.7 97.5l-0.5 1.1-0.6 1c-41.8 65.2-107.1 171.9-115.8 199-12.4 38.6-41 140.7-41.3 141.7l-0.2 0.7-34.5 107.2-0.6 1.2c-6.8 14.3-21.5 23.7-37.4 23.8l-295.9 1.6c0 0.1-0.1 0.1-0.2 0.1z"></path></svg>
                        <div class="searchJumperFrame-input-title">${D("siteDesc")}</div>
                        <textarea name="description" type="text"></textarea>
                        <div class="searchJumperFrame-input-title">${D("siteIcon")}</div>
                        <textarea name="icon" type="text"></textarea>
                        <img class="sideIcon" width="27px" height="27px" />
                    </div>
                    <div class="searchJumperFrame-inputs moreItem">
                        <div class="searchJumperFrame-input-title">${D("siteKeywords")}</div>
                        <input name="siteKeywords" placeholder="kw|key" type="text" />
                        <div class="searchJumperFrame-input-title">${D("siteMatch")}</div>
                        <input name="siteMatch" placeholder="(www|m)\\.google\\.com" type="text" />
                        <div class="searchJumperFrame-input-title">${D("openSelect")}</div>
                        <select name="openSelect">
                            <option value="-1">${D("openInDefault")}</option>
                            <option value="true">${D("openInNewTab")}</option>
                            <option value="false">${D("openInCurrent")}</option>
                        </select>
                    </div>
                    <div class="iconsCon"></div>
                    <div class="searchJumperFrame-input-title">${D("siteType")}</div>
                    <select name="typeSelect">
                    </select>
                    <div class="searchJumperFrame-buttons">
                        <button id="test" type="button">${D("siteTest")}</button>
                        <button id="cancel" type="button">${D("siteCancel")}</button>
                        <button id="add" type="button">${D("siteAdd")}</button>
                    </div>
                </div>
                <div class="searchJumperFrame-crawlBody searchJumperFrame-hide">
                    <a href="${ft}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${St}" />${D("addAction")}
                    </a>
                    <svg class="searchJumperFrame-closeBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close crawl</title>${nr}</svg>
                    <div class="actionCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="input" type="button" title="${D("emuInputTips")}">${D("inputAction")}</button>
                        <button id="click" type="button" title="${D("emuClickTips")}">${D("clickAction")}</button>
                        <button id="sleep" type="button" title="${D("emuWaitTips")}">${D("sleepAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="copy" type="button" title="${D("emuCopyTips")}">${D("copyAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="record" type="button" title="${D("emuRecordTips")}">${D("recordAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="loop" type="button" title="${D("emuLoopTips")}">${D("loopAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="submitCrawl" type="button" title="${D("emuStopTips")}">${D("submitCrawl")}</button>
                    </div>
                </div>
                `),Ze||te.appendChild(p);let h=te.children[0];hi=te.querySelector("[name='siteName']"),qt=te.querySelector("[name='description']"),He=te.querySelector("[name='url']"),It=te.querySelector("[name='icon']"),Fe=te.querySelector(".searchJumperFrame-inputs>img"),Gt=te.querySelector(".iconsCon"),br=te.querySelector("#test"),vr=te.querySelector("#cancel"),Di=te.querySelector("#add"),Vt=te.querySelector("select[name='typeSelect']"),ui=te.querySelector("[name='siteKeywords']"),di=te.querySelector("[name='siteMatch']"),fi=te.querySelector("select[name='openSelect']");let u=te.querySelector(".searchJumperFrame-title"),m,d,f=!1,w=b=>{f||(te.classList.add("draging"),f=!0);let x=b.clientX-m.x+d.x,A=b.clientY-m.y+d.y;h.style.marginLeft=x+"px",h.style.marginTop=A+"px"},M=b=>{b.preventDefault(),b.stopPropagation(),te.classList.remove("draging"),document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",M)};u.addEventListener("mousedown",b=>{b.preventDefault(),b.stopPropagation(),f=!1,m={x:b.clientX,y:b.clientY};let x=getComputedStyle(h);d={x:parseInt(x.marginLeft||0),y:parseInt(x.marginTop||0)},document.addEventListener("mousemove",w),document.addEventListener("mouseup",M)}),Fe.onload=b=>{Fe.style.display=""},te.querySelector("#maxBtn").addEventListener("click",b=>{te.classList.add("maxContent")}),te.querySelector("#minBtn").addEventListener("click",b=>{te.classList.remove("maxContent")});for(let b=0;b<c.sitesConfig.length;b++){let x=c.sitesConfig[b],A=document.createElement("option");A.value=b,Ei!==""&&Ei==b&&(A.selected="selected"),A.innerText=x.type,Vt.appendChild(A)}br.addEventListener("click",b=>{if(/#p{/.test(He.value)){let x=He.value.match(/#p{(.*)}/);if(!x)return;let A=[];x[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(y=>{if(y=y.trim(),/^loopStart\(\d+\)$/.test(y)){let N=y.match(/loopStart\((.*)\)/);A.push(["@loopStart",N[1]])}else if(y=="loopEnd")A.push(["@loopEnd",""]);else if(y.startsWith("click(")&&y.endsWith(")")){let N=y.slice(6,y.length-1);N&&A.push(["@click",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("dblclick(")&&y.endsWith(")")){let N=y.slice(9,y.length-1);N&&A.push(["@dblclick",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("rclick(")&&y.endsWith(")")){let N=y.slice(7,y.length-1);N&&A.push(["@rclick",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("copy(")&&y.endsWith(")")){let N=y.slice(5,y.length-1);N&&A.push(["@copy",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("call(")&&y.endsWith(")")){let N=y.slice(5,y.length-1);N&&A.push(["@call",N.replace(/\\([\=&])/g,"$1").trim()])}else if(y.startsWith("wait(")&&y.endsWith(")")){let N=y.slice(5,y.length-1);A.push(["@wait",N.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(y)){let N=y.match(/sleep\((.*)\)/);N&&A.push(["@sleep",N[1]])}else if(/^reload\(\d?\)$/.test(y)){let N=y.match(/reload\((.*)\)/);A.push(["@reload",N[1]])}else{y=y.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let N=y.split("SJ^PARAM");if(N.length===2){let O=N[0],J=N[1].replace(/\\([\=&])/g,"$1");A.push([O,J])}else(y.endsWith(".click()")||y.endsWith(".click"))&&A.push(["@"+y.replace(/\.click(\(\))?$/,""),"click"])}}),et=A,P.submitAction(A)}else/[:%]p{/.test(He.value)||r&&r.toLowerCase()!="utf-8"?Ft(r,He.value.replace(/%se?\b/g,"searchJumper"),"_blank"):ye(He.value.replace(/%se?\b/g,"searchJumper"),{active:!0,insert:!0})}),vr.addEventListener("click",b=>{te.parentNode&&te.parentNode.removeChild(te)}),Di.addEventListener("click",b=>{ke||Qt(()=>{let x=null;for(let A=0;A<c.sitesConfig.length;A++){let y=c.sitesConfig[A];for(let N=0;N<y.sites.length;N++){let O=y.sites[N];if(O.url==He.value){if(A==parseInt(Vt.value)){alert("Already added!");return}if(window.confirm(D("siteExist")))x={name:O.name+" - "+y.type,url:`["${O.name}"]`};else return}}}return x==null&&(x={name:hi.value,url:He.value},It.value&&It.value!=He.value.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")&&(x.icon=It.value),qt.value&&qt.value!=hi.value&&(x.description=qt.value),ui.value&&(x.keywords=ui.value),di.value&&(x.match=di.value),fi.value&&fi.value!="-1"&&(x.openInNewTab=fi.value==="true"),self.charset&&r.toLowerCase()!="utf-8"&&(x.charset=self.charset),self.kwFilter&&(x.kwFilter=self.kwFilter),self.match&&(x.match=self.match),self.hideNotMatch&&(x.hideNotMatch=self.hideNotMatch)),c.sitesConfig[Vt.value].sites.push(x),c.lastModified=new Date().getTime(),async()=>{await V.setItem("lastAddType",Vt.value),Ce(D("siteAddOver")),te.parentNode&&te.parentNode.removeChild(te),pt&&!ze&&document.dispatchEvent(new Event("dataChanged")),P.refreshEngines()}})}),xr=te.querySelector("#crawlBtn");let k=te.querySelector(".searchJumperFrame-closeBtn"),g=te.querySelector(".actionCon"),T=te.querySelector("#input"),B=te.querySelector("#click"),W=te.querySelector("#sleep"),z=te.querySelector("#copy"),$=te.querySelector("#submitCrawl"),C=te.querySelector("#record"),I=te.querySelector("#loop"),S,L=(b,x="",A="")=>{let y=document.createElement("div"),N=b;switch(b){case"input":N=D("inputOutput",[x,A]);break;case"click":N=D("clickOutput",x);break;case"dblclick":N=D("dblclickOutput",x);break;case"rclick":N=D("rclickOutput",x);break;case"copy":N=D("copyOutput",x);break;case"loopStart":N=D("loopStart",A);break;case"loopEnd":N=D("loopEnd");break;case"sleep":N=D("sleepOutput",A);break;default:break}N&&(ie(y,N),y.dataset.type=b,y.dataset.sel=x,y.dataset.val=A,y.draggable="true",y.ondragover=O=>{O.preventDefault()},y.ondragstart=O=>{S=y},y.ondrop=O=>{g.insertBefore(S,y)},y.onclick=O=>{let J=O.target;if(J.nodeName.toUpperCase()=="SPAN")if(J.className=="element")Te.getSelector(K=>{J.innerText=K,J.title=K,te.style.display="",y.dataset.sel=K}),te.style.display="none";else{let K=prompt(D("inputNewValue"),J.innerText);K&&(J.innerText=K,J.title=K,y.dataset.val=K)}else confirm(D("deleteConfirm"))&&g.removeChild(y)},y.oncontextmenu=O=>{let J=O.target;if(J.nodeName.toUpperCase()=="SPAN")if(O.preventDefault(),J.className=="element"){let K=prompt("Selector",J.innerText);K&&(J.innerText=K,J.title=K,y.dataset.sel=K)}else{let K=prompt(D("inputNewValue"),J.innerText);K&&(J.innerText=K,J.title=K,y.dataset.val=K)}},g.appendChild(y))},H=()=>{ie(g,"");let b=He.value.match(/#p{(.*)}/);b&&b[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(x=>{if(x=x.trim(),/^loopStart\(\d+\)$/.test(x)){let A=x.match(/loopStart\((.*)\)/);L("loopStart","",A[1])}else if(x=="loopEnd")L("loopEnd");else if(x.startsWith("click(")&&x.endsWith(")")){let A=x.slice(6,x.length-1);A&&L("click",A.replace(/\\([\=&])/g,"$1").trim())}else if(x.startsWith("dblclick(")&&x.endsWith(")")){let A=x.slice(9,x.length-1);A&&L("dblclick",A.replace(/\\([\=&])/g,"$1").trim())}else if(x.startsWith("rclick(")&&x.endsWith(")")){let A=x.slice(7,x.length-1);A&&L("rclick",A.replace(/\\([\=&])/g,"$1").trim())}else if(x.startsWith("copy(")&&x.endsWith(")")){let A=x.slice(5,x.length-1);A&&L("copy",A.replace(/\\([\=&])/g,"$1").trim())}else if(x.startsWith("call(")&&x.endsWith(")")){let A=x.slice(5,x.length-1);A&&L("call","",A.replace(/\\([\=&])/g,"$1").trim())}else if(x.startsWith("wait(")&&x.endsWith(")")){let A=x.slice(5,x.length-1);A&&L("wait","",A.replace(/\\([\=&])/g,"$1").trim())}else if(x.startsWith("open(")&&x.endsWith(")")){let A=x.slice(5,x.length-1);A&&L("open","",A.replace(/\\([\=&])/g,"$1").trim())}else if(/^sleep\(\d+\)$/.test(x)){let A=x.match(/sleep\((.*)\)/);A&&L("sleep","",A[1])}else if(/^reload\(\d?\)$/.test(x)){let A=x.match(/reload\((.*)\)/);L("reload","",A[1])}else{x=x.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let A=x.split("SJ^PARAM");A.length===2?L("input",A[0],A[1].replace(/\\([\=&])/g,"$1")):(x.endsWith(".click()")||x.endsWith(".click"))&&L("click",x.replace(/\.click(\(\))?$/,""))}})},Z=()=>{let b=[];return[].forEach.call(g.children,x=>{if(!x)return;let A=x.dataset.sel,y=x.dataset.val||"";switch(x.dataset.type){case"click":b.push(`click(${A.replace(/([=&])/g,"\\$1")})`);break;case"dblclick":b.push(`dblclick(${A.replace(/([=&])/g,"\\$1")})`);break;case"rclick":b.push(`rclick(${A.replace(/([=&])/g,"\\$1")})`);break;case"copy":b.push(`copy(${A.replace(/([=&])/g,"\\$1")})`);break;case"input":b.push(`${A.replace(/([=&])/g,"\\$1")}=${y}`);break;case"sleep":b.push(`sleep(${y})`);break;case"loopEnd":b.push("loopEnd");break;default:b.push(`${x.dataset.type}(${y.replace(/([=&])/g,"\\$1")})`);break}}),b.join("&")};xr.addEventListener("click",b=>{H(),te.classList.add("crawling")}),k.addEventListener("click",b=>{te.classList.remove("crawling")});let ne,re,j=b=>{te.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(b.target.nodeName)||(clearTimeout(re),re=setTimeout(()=>{L("click",Te.geneSelector(b.target,!0))},300)))},F=b=>{te.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(b.target.nodeName)||(clearTimeout(re),L("dblclick",Te.geneSelector(b.target,!0))))},U=b=>{te.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(b.target.nodeName)||(b.preventDefault(),clearTimeout(re),L("rclick",Te.geneSelector(b.target,!0))))},X=b=>{te.style.display!==""&&L("input",Te.geneSelector(b.target,!0),b.target.value)},Y=b=>{if(te.style.display==="")return;let x=!1;b.keyCode==27?x=!0:b.keyCode==13&&(b.preventDefault(),b.stopPropagation(),b.target&&b.target.blur&&b.target.blur(),x=!0),x&&(te.style.display="",document.removeEventListener("keydown",Y,!0),document.removeEventListener("click",j),document.removeEventListener("dblclick",F),document.removeEventListener("contextmenu",U),document.removeEventListener("change",X))};C.addEventListener("click",b=>{alert(D("startRecord")),te.style.display="none",setTimeout(()=>{document.addEventListener("keydown",Y,!0),document.addEventListener("click",j),document.addEventListener("dblclick",F),document.addEventListener("contextmenu",U),document.addEventListener("change",X)},100)});let ae=!1;I.addEventListener("click",b=>{if(ae)L("loopEnd"),I.innerText=D("loopAction");else{let x=prompt(D("loopTimes"),1);if(!x)return;L("loopStart","",x||"1"),I.innerText=D("loopActionEnd")}ae=!ae}),T.addEventListener("click",b=>{Te.getSelector(x=>{L("input",x,"%s"),te.style.display=""},!ae),te.style.display="none"}),z.addEventListener("click",b=>{Te.getSelector(x=>{L("copy",x,"%s"),te.style.display=""},!ae),te.style.display="none"}),B.addEventListener("dblclick",b=>{clearTimeout(re),b.preventDefault(),b.stopPropagation(),Te.getSelector(x=>{L("dblclick",x),te.style.display=""},!ae),te.style.display="none"}),B.addEventListener("contextmenu",b=>{clearTimeout(re),b.preventDefault(),b.stopPropagation(),Te.getSelector(x=>{L("rclick",x),te.style.display=""},!ae),te.style.display="none"}),B.addEventListener("click",b=>{clearTimeout(re),re=setTimeout(()=>{Te.getSelector(x=>{L("click",x),te.style.display=""},!ae),te.style.display="none"},250)}),W.addEventListener("click",b=>{let x=prompt(D("sleepPrompt"),1e3);x=x&&parseInt(x),x&&L("sleep","",x)}),$.addEventListener("click",b=>{let x=Z();x&&(He.value=location.href+"#p{"+x+"}"),te.classList.remove("crawling")}),te.addEventListener("keydown",b=>{b.keyCode==13&&b.target&&b.target.nodeName=="INPUT"&&Di.click()})}P.addToShadow(te),ui.value="",di.value="",hi.value=l||"",qt.value=e||"",He.value=t||"",i&&i[0]?(Fe.style.display="",t.indexOf(location.origin)===0?(Fe.onerror=o=>{Fe.onerror=null,It.value=i[0],Fe.src=i[0]},Fe.src=location.origin+"/favicon.ico"):(It.value=i[0],Fe.src=i[0])):(Fe.style.display="none",Fe.src=(/^(showTips:)?https?:/.test(t)?t.split(`
`)[0].replace(/\?.*/,"").replace(/^(showTips:)?(https?:\/\/[^\/]+).*/,"$2"):location.origin)+"/favicon.ico"),ie(Gt,""),i&&i.length>1?(Gt.style.opacity="",i.forEach(o=>{let p=document.createElement("img");p.src=o,p.addEventListener("click",h=>{It.value=o,Fe.src=o}),p.onload=h=>{p.title=p.naturalWidth+" x "+p.naturalHeight+`
`+o.replace(/.*\/([^\/]+)/,"$1")},Gt.appendChild(p)})):Gt.style.opacity=0}function hs(){let l=document.createElement("a");l.download="searchJumperCache.json",l.target="_blank";let e=[JSON.stringify({sortTypeNames:Me,cacheIcon:ge,sortSiteNames:Ne},null,4)],t=new Blob(e,{type:"application/json"});l.href=window.URL.createObjectURL(t),l.click()}function us(l){l.cacheIcon&&(ge=l.cacheIcon,V.setItem("cacheIcon",ge),Ve=[],c.prefConfig.cacheSwitch=!0,V.setItem("searchData",c)),l.sortTypeNames&&(Me=l.sortTypeNames,V.setItem("sortTypeNames",Me)),l.sortSiteNames&&(Ne=l.sortSiteNames,V.setItem("sortSiteNames",Ne))}function Cr(l,e){We({method:"GET",url:l,headers:{referer:l,origin:l},onload:t=>{let i=t&&t.responseXML&&t.responseXML.querySelector('Url[type="text/html"]');if(!i){e("error",t);return}let r=t.responseXML.querySelector("ShortName"),n=t.responseXML.querySelector("Description"),a=t.responseXML.querySelector("Image"),s=t.responseXML.querySelector("InputEncoding"),o=i.querySelectorAll("Param"),p=r&&r.textContent,h=n&&n.textContent,u=i.getAttribute("template"),m=a&&a.textContent,d=s&&s.textContent;if(o.length>0){let f=[];[].forEach.call(o,w=>{f.push(`${w.getAttribute("name")}=${w.getAttribute("value")}`)}),u+=`%p{${f.join("&")}}`}mi(p,h,u.replace(/{searchTerms\??}/g,"%s").replace(/{startPage\??}/g,"1").replace(/{count\??}/g,"10").replace(/{startIndex\??}/g,"1").replace(/{startPage\??}/g,"1").replace(/{language\??}/g,"*").replace(/{inputEncoding\??}/g,"UTF-8").replace(/{outputEncoding\??}/g,"UTF-8"),[m],d),e("load",t)},onerror:t=>{e("error",t)},ontimeout:t=>{e("error",t)}})}function ds(){if(location.hostname!=="mycroftproject.com")return;Be(`
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
            `);let l=()=>{let t=document.querySelectorAll("img.icon~a[href^='/install']");if(t.length<=0)return;let i=!1;[].forEach.call(t,r=>{if(r.previousElementSibling&&r.previousElementSibling.classList.contains("searchJumperIcon")||r.previousElementSibling&&r.previousElementSibling.previousElementSibling&&r.previousElementSibling.previousElementSibling.classList.contains("searchJumperIcon"))return;let n=r.href.match(/\?id=(\d+)&basename=(.+?)&/);if(n===null)return;let a=document.createElement("img");a.className="icon searchJumperIcon",a.style.cssText="border: 1px solid #4c4c4c; border-radius: 9px; box-sizing: border-box; margin-right: 4px; cursor: pointer;",a.title="Add to SearchJumper",a.src=St,r.parentNode.insertBefore(a,r),a.onclick=s=>{i||(i=!0,a.classList.add("searchJumper-loading"),Cr(`https://mycroftproject.com/installos.php/${n[1]}/${n[2]}.xml`,(o,p)=>{i=!1,a.classList.remove("searchJumper-loading"),o!="load"&&Ce(p.statusText||p.error)}))}})};l();let e=setInterval(()=>{l()},1e3);window.addEventListener("load",t=>{clearInterval(e),l()})}function Sr(){P=new _r}function fs(){if(ze){if(P.appendBar(),P.showAllSites(),setTimeout(()=>{P.con.style.zIndex=0},5),location.hash){let l=location.hash.slice(1);try{l=decodeURIComponent(l)}catch{}P.searchJumperInputKeyWords.value=l}else if(location.search){let l=location.search.slice(1).split("&"),e,t,i;l.forEach(r=>{let n=r.split("="),a=n[0],s=n[1];try{s=decodeURIComponent(s)}catch{}switch(a){case"kw":e=s;break;case"engine":t=s;break;case"self":i=s;break}}),e&&(P.searchJumperInputKeyWords.value=e||""),t&&P.searchBySiteName(t,{},!!i)}if(Q(document).style.cssText=`
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
                `,c.prefConfig.bgUrl&&(rt=c.prefConfig.bgUrl,rt.length)){Q(document).style.backgroundImage=`url("${rt}")`;return}V.getItem("allPageBg",l=>{l?(rt=l.url,Q(document).style.backgroundImage=`url("${l.base64||rt}")`):l={url:""},We({method:"GET",url:"https://global.bing.com/HPImageArchive.aspx?format=js&idx=0&pid=hp&video=1&n=1",onload:function(e){var t=null;try{t=JSON.parse(e.responseText);var i=t.images[0].url;if(/^https?:\/\//.test(i)||(i="https://global.bing.com"+i),rt=i,i==l.url)return;We({method:"GET",url:i,responseType:"blob",onload:function(r){var n=r.response,a=new FileReader;a.readAsDataURL(n),a.onload=function(s){var o=s.target.result;l={url:i,base64:o},V.setItem("allPageBg",l)}}}),l.base64||(Q(document).style.backgroundImage=`url("${i}")`)}catch(r){console.log(r)}}})})}}async function ms(){try{await P.initRun(),ns(),fs(),yi.resume()}catch(l){throw yi.cancel(),l}}async function Re(l){if(Ke){const e=Ke;return e.throwIfAborted(),new Promise((t,i)=>{const r=()=>{clearTimeout(n),i(e.reason)},n=setTimeout(()=>{e.removeEventListener("abort",r),t()},l);e.addEventListener("abort",r,{once:!0})})}await new Promise(e=>{setTimeout(()=>{e()},l)})}async function gs(){const l=["searchData","cacheKeywords","cacheFilter","disableState","tipsStorage","lastSign","historySites","historyType","sortTypeNames","sortSiteNames","globalInPageWords","navEnable","referrer","clickLink","disableHighlight","lastHighlight","allPageNewMode","lastAddType"];l.push("cacheIcon","inPagePostParams");const[e,t]=await Promise.all([Promise.all(l.map(async n=>[n,await V.getItem(n)])).then(Object.fromEntries),null]);let i=e.searchData;Pe=e.cacheKeywords||"",yt=e.cacheFilter||"",Ii=e.disableState||!1,ht=e.tipsStorage||[],Dt=e.lastSign||!1,V.setItem("lastSign",!1),typeof V.listItemCache.inPagePostParams>"u"&&(V.listItemCache.inPagePostParams=e.inPagePostParams||null),et=await V.getListItem("inPagePostParams",location.hostname),ge=e.cacheIcon||{},tt=e.historySites||[],zt=e.historyType||"",Me=e.sortTypeNames||{},Ne=e.sortSiteNames||{},$e=e.globalInPageWords||"",it=typeof e.navEnable>"u"?!0:e.navEnable,ti=e.referrer||"",ji=e.clickLink||"",ii=e.disableHighlight||"",rr=e.lastHighlight||"",sr=e.allPageNewMode||!1,Ei=e.lastAddType||"",i&&(c=i,Ot=c.lastModified),c.lastModified||(c.sitesConfig=sitesConfig),c.prefConfig.lang&&c.prefConfig.lang!="0"&&(Ae=c.prefConfig.lang),vi(),c.prefConfig.firstRun&&V.supportCrossSave()&&(c.prefConfig.firstRun=!1,V.setItem("searchData",c),setTimeout(()=>{V.getItem("searchData",n=>{n.prefConfig.firstRun===!1&&ye(Er,{active:!0,insert:!0})})},100)),typeof c.prefConfig.customSize>"u"&&(c.prefConfig.customSize=100),typeof c.prefConfig.tilesZoom>"u"&&(c.prefConfig.tilesZoom=100),typeof c.prefConfig.tipsZoom>"u"&&(c.prefConfig.tipsZoom=100),typeof c.prefConfig.typeOpenTime>"u"&&(c.prefConfig.typeOpenTime=250),typeof c.prefConfig.longPressTime>"u"&&(c.prefConfig.longPressTime=500),typeof c.prefConfig.cacheSwitch>"u"&&(c.prefConfig.cacheSwitch=!1),typeof c.prefConfig.noIcons>"u"&&(c.prefConfig.noIcons=!1),typeof c.prefConfig.noAni>"u"&&(c.prefConfig.noAni=!1),typeof c.prefConfig.quickAddRule>"u"&&(c.prefConfig.quickAddRule=!0),typeof c.prefConfig.multiline>"u"&&(c.prefConfig.multiline=2),typeof c.prefConfig.multilineGap>"u"&&(c.prefConfig.multilineGap=1e3),typeof c.prefConfig.historyLength>"u"&&(c.prefConfig.historyLength=0),typeof c.prefConfig.dragToSearch>"u"&&(c.prefConfig.dragToSearch=!0),typeof c.prefConfig.firstFiveWordsColor>"u"&&(c.prefConfig.firstFiveWordsColor=[]),typeof c.prefConfig.inPageWordsStyles>"u"&&(c.prefConfig.inPageWordsStyles=[]),typeof c.prefConfig.rightMouse>"u"&&(c.prefConfig.rightMouse=!0),typeof c.prefConfig.mouseLeaveToHide>"u"&&(c.prefConfig.mouseLeaveToHide=!0),typeof c.prefConfig.currentTypeFirst>"u"&&(c.prefConfig.currentTypeFirst=!0),typeof c.prefConfig.disableAddon>"u"&&(c.prefConfig.disableAddon={});const r=typeof c.prefConfig.suggestType>"u";if(r&&(c.prefConfig.suggestType=i?Ae==="zh-CN"?"baidu":"google":"disable"),typeof c.prefConfig.syncBuild>"u"&&(c.prefConfig.syncBuild=!0),c.prefConfig.minSizeMode&&(c.prefConfig.disableAutoOpen=!1,c.prefConfig.disableTypeOpen=!1),c.prefConfig.configPage?lt=c.prefConfig.configPage:c.prefConfig.configPage=lt,r){const n=await V.getItem("searchData");n?typeof n.prefConfig.suggestType>"u"&&(n.prefConfig.suggestType=c.prefConfig.suggestType,await V.setItem("searchData",n)):await V.setItem("searchData",c)}}function gi(l,e){return l==="*"||l.length==0&&e.length==0?!0:l.length>1&&l[0]=="*"&&e.length==0?!1:l.length>1&&l[0]=="?"||l.length!=0&&e.length!=0&&l[0]==e[0]?gi(l.substring(1),e.substring(1)):l.length>0&&l[0]=="*"?gi(l.substring(1),e)||gi(l,e.substring(1)):!1}if(ue.indexOf("#searchJumperMin")!=-1)if(ar=!0,ue.indexOf("#searchJumperMinPost")!=-1)window.history.replaceState(null,"",ue.replace(/#searchJumperMin(Post)?/,""));else{if(ue.indexOf("#searchJumperMinMobile")!=-1){Object.defineProperty(Object.getPrototypeOf(navigator),"userAgent",{get:function(){return Yi}}),We({method:"GET",url:location.href,headers:{referer:location.href,"User-Agent":Yi},onload:function(l){document.open(),document.write(l.response),document.close()},onerror:function(){},ontimeout:function(){}});return}window.history.replaceState(null,"",location.href.replace(/#searchJumperMin(Mobile)?/,""))}if(document.title=="SearchJumper Multi")return;async function ys(){const l=await V.getItem("searchData");if(l&&(c={...c,...l,prefConfig:{...c.prefConfig,...l.prefConfig}}),c.prefConfig.lang&&c.prefConfig.lang!=="0"&&(Ae=c.prefConfig.lang),vi(),ge={},Pe="",Sr(),P.siteIndex=1,P.allSiteBtns=[],P.allListBtns=[],P.allLists=[],R=Q(document),Ue){const r=new Map;window.dispatchEvent(new CustomEvent("searchjumper-split-ready",{detail:{text:D("split"),resolve:async(n,a,s)=>{if(!r.has(n.id)){const o=await P.createSiteBtn("0",{...n.site},!0,!1,n.type||{});r.set(n.id,o),P.allSiteBtns.push([o,n.site])}return P.stopInput=!1,r.get(n.id).resolveSplit(a,s)},submitForm:Ft}}));return}let e,t=Promise.resolve();const i=r=>(!1).runtime.sendMessage({action:"splitFrameResult",paneId:Ye.paneId,...bt?.identity,...r}).catch(n=>console.warn("SearchJumper split:",n.message));chrome.runtime.onMessage.addListener((r,n,a)=>{if(!(n.id!==chrome.runtime.id||bt&&!bt.accepts(r))){if(r.command==="splitCancel")e?.abort(new DOMException("Cancelled","AbortError")),a({ok:!0});else if(r.command==="splitExecute"){e?.abort(new DOMException("Superseded","AbortError"));const s=new AbortController;e=s,t=t.catch(()=>{}).then(async()=>{if(s.signal.aborted)return;Ke=s.signal;const o=setTimeout(()=>s.abort(new Error("timeout")),3e4);try{await P.submitAction(r.actions),ct(),await i({requestId:r.requestId,status:"done"})}catch(p){p.name!=="AbortError"&&await i({requestId:r.requestId,status:"error",error:p.message})}finally{clearTimeout(o),Ke=null}}),a({ok:!0})}}}),await(!1).runtime.sendMessage({action:"splitFrameReady",paneId:Ye.paneId,...bt?.identity})}var kr=!1,zi,Oi,jt;async function Hi(l){if(kr){l&&l();return}kr=!0;try{if(Ue||Ye?.ok){try{await ys()}catch(e){Ue?window.dispatchEvent(new CustomEvent("searchjumper-split-error",{detail:e.message})):console.error("SearchJumper split:",e)}return}if(as(),await gs(),Ii)return;if(c.prefConfig.blacklist&&c.prefConfig.blacklist.length>0){let e=!1;for(let t=0;t<c.prefConfig.blacklist.length;t++){let i=c.prefConfig.blacklist[t];if(i&&i.indexOf("//")!=0){if(e){/\*\/$/.test(i)&&(e=!1);continue}if(i.indexOf("/*")==0){e=!0;continue}if(i.indexOf("/")==0){let r=i.match(/^\/(.*)\/(\w*)$/);if(r&&new RegExp(r[1],r[2]).test(ue))return}else if(gi(i,ue))return}}}Sr(),await ls(),ds(),P.ready=ms(),l&&l(),jt=document.title}finally{(!P||!P.ready)&&yi.cancel()}}function ws(){if(document.hidden){if(P)P.closeShowAll();else return;if(!c.prefConfig.globalSearchNow)return;zi=setInterval(async()=>{let l=$e;$e=await V.getItem("globalInPageWords"),(l||"")!=($e||"")&&(P.refreshPageWords(),P.navMarks.innerHTML&&(clearInterval(zi),clearInterval(Oi),jt=document.title,Oi=setInterval(()=>{document.title=document.title==jt?"\u{1F6A9}":jt},500)))},parseInt(500+Math.random()*500));return}Hi(async()=>{(pt||c.prefConfig.syncBuild)&&(c=await V.getItem("searchData"),P&&c.lastModified&&Ot!=c.lastModified&&(P.refreshEngines(),document.dispatchEvent(new Event("dataChanged"))));let l=$e||"";V.getItem("globalInPageWords",t=>{$e=t||"",l!=$e&&P&&P.refreshPageWords()});let e=it||!1;V.getItem("navEnable",t=>{it=typeof t>"u"?!0:t,e!=it&&P&&P.refreshNav()})})}var Fi=!1;function bs(){!document.head||!Q(document)||Et||Ii||(c.prefConfig.globalSearchNow&&(clearInterval(zi),clearInterval(Oi),document.hidden?jt=document.title:jt&&(document.title=jt)),!Fi&&(Fi=!0,setTimeout(()=>{ws(),Fi=!1},500)))}const yi=ss();V.getItem("postUrl",l=>{if((Ue||Ye?.ok)&&(l=null),l&&l[0].indexOf(location.hostname.replace(/.*\.(\w+\.\w+)/,"$1"))!=-1)yi.cancel(),V.setItem("postUrl",""),Ft(l[1],l[0],"_self");else{if(document.head&&Q(document))Hi();else{let e=()=>{document.head&&Q(document)?Hi():setTimeout(()=>{e()},10)};e()}!Ue&&!Ye?.ok&&document.addEventListener("visibilitychange",bs)}})}if(document&&document.documentElement)_i();else{let Ae=()=>{document&&document.documentElement?_i():setTimeout(()=>{Ae()},10)};Ae()}})();
