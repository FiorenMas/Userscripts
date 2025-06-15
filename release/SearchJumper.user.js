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
// @require      https://update.greasyfork.org/scripts/484118/searchJumperDefaultConfig.js
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
(async function(){"use strict";const ye=typeof unsafeWindow>"u"?window:unsafeWindow;if(ye.searchJumperInited)return;ye.searchJumperInited=!0;const nr=navigator&&navigator.clipboard,St=window.top!==window.self;if(St)try{if(window.self.innerWidth===0&&window.self.innerHeight===0){if(await new Promise(Ke=>{window.addEventListener("load",Ai=>{setTimeout(()=>{Ke(window.self.innerWidth<300||window.self.innerHeight<300)},500)})}))return}else if(window.self.innerWidth<300||window.self.innerHeight<300)return}catch{return}const Pi=/^https:\/\/github\.com\/hoothin\/SearchJumper(\/(issue|discussions)|\/?$|#|\?)|^https:\/\/greasyfork\.org\/.*\/scripts\/445274[\-\/].*\/discussions/i,Mi="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",ii="https://search.hoothin.com/",or="https://hoothin.github.io/SearchJumper",Ni=ii+"firstRun";let Ae=ii+"config/",et=!1,c={};c.sitesConfig=sitesConfig,c.prefConfig={position:{x:"left",y:"top"},offset:{x:"0",y:"0"},firstRun:!0,openInNewTab:!1,enableInPage:!0,altKey:!1,ctrlKey:!0,shiftKey:!1,metaKey:!1,autoClose:!1,autoDelay:1e3,shortcut:!0,initShow:!1,alwaysShow:!1,customSize:100,tilesZoom:100,tipsZoom:100,typeOpenTime:250,longPressTime:500,noIcons:!1,showSiteLists:!0,alwaysShowSiteLists:!1,cacheSwitch:!1,noAni:!1,quickAddRule:!0,multiline:2,multilineGap:1e3,historyLength:0,dragToSearch:!0,hideDragHistory:!1,sortType:!1,sortSite:!1,autoHide:!1,autoHideAll:!1,showCurrent:!0,shortcutKey:"Backquote",showInSearchEngine:!1,showInSearchJumpPage:!0,limitInPageLen:1,limitPopupLen:1,ignoreWords:["a","in","into","the","to","on","among","between","and","an","of","by","with","about","under","or","at","as"],inPageRule:{},firstFiveWordsColor:[],inPageWordsStyles:[],altToHighlight:!0,defaultPicker:!1,disableInputOnWords:!1,disableTypeOpen:!1,callBarAlt:!1,callBarCtrl:!1,callBarShift:!1,callBarMeta:!1,defaultFindTab:!1,disableAutoOpen:!1,hideOnSearchEngine:!1,minSizeMode:!1,hidePopup:!1,minPopup:0,selectToShow:!1,expandType:!1,rightMouse:!0,shiftLastUsedType:!0,mouseLeaveToHide:!0,currentTypeFirst:!0,switchSitesPreKey:"ArrowLeft",switchSitesNextKey:"ArrowRight",switchSitesCtrl:!0,switchSitesAlt:!1,switchSitesShift:!0,switchSitesMeta:!1};function Bi(){let Ue=navigator.appName==="Netscape"?navigator.language:navigator.userLanguage,Ke={};function Ai(){switch(Ue){case"zh-CN":case"zh-SG":Ke={import:"\u5BFC\u5165",filter:"\u7B5B\u9009",selectAll:"\u5168\u9009",importOrNot:"\u662F\u5426\u5BFC\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u5F00",batchOpenConfirm:"\u786E\u5B9A\u8981\u6279\u91CF\u6253\u5F00\u5417\uFF1F",postOver:"\u53D1\u9001\u6210\u529F\uFF1A",postError:"\u53D1\u9001\u5931\u8D25\uFF1A",copyOver:"\u590D\u5236\u6210\u529F",keywords:"\u8BF7\u8F93\u5165\u641C\u7D22\u8BCD",targetUrl:"\u8BF7\u8F93\u5165\u641C\u7D22URL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u56FE\u6807",siteTest:"\u6D4B\u8BD5",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u7C7B",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u89C4\u5219\uFF0C\u662F\u5426\u6DFB\u52A0\u4E3A\u514B\u9686\u9879\uFF1F",siteAddOver:"\u7AD9\u70B9\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u6362\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u7D22\uFF1F",multilineTooMuch:"\u884C\u6570\u8D85\u8FC710\u884C\uFF0C\u662F\u5426\u7EE7\u7EED\u641C\u7D22\uFF1F",inputPlaceholder:"\u7B5B\u9009\u5F15\u64CE",inputTitle:"\u7B5B\u9009\u5F15\u64CE\uFF0C\u652F\u6301 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u5F00\u5934\uFF0C\u5206\u7EC4**\u7AD9\u70B9 \u53EF\u7B5B\u9009\u6307\u5B9A\u5206\u7EC4\uFF0C\u4F8B\u5982 \u56FE\u7247**baidu\uFF0Ctab \u4E0B\u4E00\u9879",inputKeywords:"\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",inPageTips:`\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8BA4\u7A7A\u683C\u4F5C\u4E3A\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u7D22\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF1A\u641C\u7D22\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0B\u4E00\u4E2A\uFF0C\u53F3\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0A\u4E00\u4E2A`,inPagePlaceholder:"\u8F93\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8F66\u8FDB\u884C\u9875\u5185\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u8FDE\u7EED\u6293\u53D6",editBtn:"\u7F16\u8F91\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u590D\u5236\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u5355\u8BCD\u6A21\u5F0F",copyEleBtn:"\u590D\u5236\u9009\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u5F00\u9009\u4E2D\u94FE\u63A5",maxEleBtn:"\u5C55\u5F00\u9009\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9009\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u5F00",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u590D\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6807\u7B7E\u9875\u4E2D\u641C\u7D22",locBtn:"\u5B9A\u4F4D\u4FA7\u8FB9\u680F",filterSites:"\u7B5B\u9009\u641C\u7D22\u5F15\u64CE",searchInPage:"\u9875\u5185\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u7D22\u8BCD",saveRuleBtn:"\u4FDD\u5B58\u5F53\u524D\u7AD9\u70B9\u7684\u641C\u7D22\u8BCD",wordContent:"\u641C\u7D22\u8BCD\u5185\u5BB9",wordHide:"\u9690\u85CF\u7236\u7EA7\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u4E3A\u5F53\u524D\u7236\u7EA7",wordStyle:"\u641C\u7D22\u8BCD\u6837\u5F0F",wordTitle:"\u641C\u7D22\u8BCD\u6CE8\u91CA",re:"\u6B63\u5219",ignoreCase:"\u4E0D\u533A\u5206\u5927\u5C0F\u5199",filterLink:"\u7B5B\u9009\u94FE\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9875\u5185\u641C\u7D22\u8BCD",addSearchEngine:"\u6DFB\u52A0\u641C\u7D22\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52A8\u7F16\u8F91\u89C4\u5219\u5E76\u6DFB\u52A0\uFF1F",expand:"\u5C55\u5F00\u5269\u4F59\u7AD9\u70B9",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8BCD\u8BED",wordRange:"\u751F\u6548\u8303\u56F4",customInputFrame:"\u81EA\u5B9A\u4E49\u641C\u7D22\u53C2\u6570",customSubmit:"\u63D0\u4EA4\u641C\u7D22",finalSearch:"\u76EE\u6807\u641C\u7D22\u5B57\u4E32",search:"\u641C\u7D22\u6B64\u9879",siteKeywords:"\u5173\u952E\u8BCD(\u591A\u4E2A\u5173\u952E\u8BCD\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u70B9 URL \u5339\u914D\u6B63\u5219",openSelect:"\u6253\u5F00\u9009\u9879",openInDefault:"\u9ED8\u8BA4",openInNewTab:"\u65B0\u6807\u7B7E\u9875\u6253\u5F00",openInCurrent:"\u5F53\u524D\u9875\u6253\u5F00",currentType:"\u5F53\u524D\u5206\u7C7B",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u8FD8\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u62DF\u8F93\u5165\u641C\u7D22",inputAction:"\u8F93\u5165",clickAction:"\u70B9\u51FB",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u590D\u5236\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5185\u8F93\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u70B9\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u53CC\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u590D\u5236\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8BF7\u8F93\u5165\u65B0\u503C",deleteConfirm:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417\uFF1F",sleepPrompt:"\u7B49\u5F85\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",startCache:"\u5F00\u59CB\u7F13\u5B58\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u7F13\u5B58\u5B8C\u6BD5\uFF0C\u52FF\u5173\u95ED\u914D\u7F6E\u9875\uFF01",cacheOver:"\u6240\u6709\u56FE\u6807\u90FD\u5DF2\u7F13\u5B58\u5B8C\u6BD5\uFF01",cspDisabled:"\u811A\u672C\u6837\u5F0F\u88AB\u5F53\u524D\u7AD9\u70B9\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u65E0\u6CD5\u663E\u793A\uFF0C\u8BF7\u5C1D\u8BD5\u5B89\u88C5 Allow CSP: Content-Security-Policy \u6269\u5C55\u83B7\u53D6\u6743\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8BF7\u8BBE\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u5F55\u5236\u64CD\u4F5C",startRecord:"\u5F00\u59CB\u5F55\u5236\u64CD\u4F5C\uFF0C\u6309\u56DE\u8F66\u952E\u7ED3\u675F\u5F55\u5236",loopAction:"\u{1F501}\u5F00\u59CB\u5FAA\u73AF",loopActionEnd:"\u23F9\uFE0F\u5FAA\u73AF\u7ED3\u675F",loopStart:'\u5F00\u59CB\u5FAA\u73AF\uFF0C\u5FAA\u73AF\u6B21\u6570\u4E3A<span title="#t#">#t#</span>',loopEnd:"\u7ED3\u675F\u5FAA\u73AF",loopTimes:"\u5FAA\u73AF\u6B21\u6570\uFF0C\u5C06\u904D\u5386\u6240\u6709\u5339\u914D\u5143\u7D20\u5E76\u987A\u5E8F\u6267\u884C",loadingCollection:"\u6B63\u5728\u52A0\u8F7D\u5408\u96C6\uFF0C\u8BF7\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F93\u5165\u6846\uFF09\u5185\u8F93\u5165\u641C\u7D22\u8BCD",emuClickTips:"\u5355\u51FB\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u94AE\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u540E\u7EE7\u7EED\u6267\u884C\uFF0C\u5F53\u67D0\u4E2A\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u65F6\u5F88\u6709\u7528",emuCopyTips:"\u590D\u5236\u6307\u5B9A\u5143\u7D20\u7684\u6587\u672C\u5230\u526A\u8D34\u677F",emuRecordTips:"\u5F55\u5236\u63A5\u4E0B\u6765\u7684\u70B9\u51FB\u548C\u8F93\u5165\u64CD\u4F5C",emuLoopTips:"\u5F00\u59CB\u5FAA\u73AF\uFF0C\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u5C06\u904D\u5386\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u5E76\u4E14\u91CD\u590D\u6307\u5B9A\u6B21\u6570",emuStopTips:"\u7ED3\u675F\u64CD\u4F5C\u5E76\u751F\u6210\u89C4\u5219"};break;case"zh":case"zh-TW":case"zh-HK":Ke={import:"\u5C0E\u5165",filter:"\u7BE9\u9078",selectAll:"\u5168\u9078",importOrNot:"\u662F\u5426\u5C0E\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u958B",batchOpenConfirm:"\u78BA\u5B9A\u8981\u6279\u91CF\u6253\u958B\u55CE\uFF1F",postOver:"\u767C\u9001\u6210\u529F\uFF1A",postError:"\u767C\u9001\u5931\u6557\uFF1A",copyOver:"\u8907\u88FD\u6210\u529F",keywords:"\u8ACB\u8F38\u5165\u641C\u5C0B\u8A5E",targetUrl:"\u8ACB\u8F38\u5165\u641C\u5C0BURL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u5716\u6A19",siteTest:"\u6E2C\u8A66",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u985E",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u898F\u5247\uFF0C\u662F\u5426\u6DFB\u52A0\u70BA\u514B\u9686\u9805\uFF1F",siteAddOver:"\u7AD9\u9EDE\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u63DB\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u5C0B\uFF1F",multilineTooMuch:"\u884C\u6578\u8D85\u904E10\u884C\uFF0C\u662F\u5426\u7E7C\u7E8C\u641C\u5C0B\uFF1F",inputPlaceholder:"\u7BE9\u9078\u5F15\u64CE",inputTitle:"\u7BE9\u9078\u5F15\u64CE\uFF0C\u652F\u63F4 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u958B\u982D\uFF0C\u5206\u7D44**\u7AD9\u9EDE \u53EF\u7BE9\u9078\u6307\u5B9A\u5206\u7D44\uFF0C\u4F8B\u5982 \u5716\u7247**google\uFF0Ctab \u4E0B\u4E00\u9805",inputKeywords:"\u8F38\u5165\u641C\u5C0B\u95DC\u9375\u8A5E",inPageTips:`\u81EA\u5B9A\u7FA9\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8A8D\u7A7A\u683C\u4F5C\u70BA\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5247\u8868\u9054\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u5C0B\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u7FA9\u6A23\u5F0F\uFF1A\u641C\u5C0B\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0B\u4E00\u500B\uFF0C\u53F3\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0A\u4E00\u500B`,inPagePlaceholder:"\u8F38\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9032\u884C\u9801\u5167\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u9023\u7E8C\u6293\u53D6",editBtn:"\u7DE8\u8F2F\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u8907\u88FD\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u55AE\u8A5E\u6A21\u5F0F",copyEleBtn:"\u8907\u88FD\u9078\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u958B\u9078\u4E2D\u9023\u7D50",maxEleBtn:"\u5C55\u958B\u9078\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9078\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u958B",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u5FA9\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6A19\u7C64\u9801\u4E2D\u641C\u5C0B",locBtn:"\u5B9A\u4F4D\u5074\u908A\u6B04",filterSites:"\u7BE9\u9078\u641C\u5C0B\u5F15\u64CE",searchInPage:"\u9801\u5167\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u5C0B\u8A5E",saveRuleBtn:"\u4FDD\u5B58\u7576\u524D\u7AD9\u9EDE\u7684\u641C\u5C0B\u8A5E",wordContent:"\u641C\u5C0B\u8A5E\u5167\u5BB9",wordHide:"\u96B1\u85CF\u7236\u7D1A\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u70BA\u7576\u524D\u7236\u7D1A",wordStyle:"\u641C\u5C0B\u8A5E\u6A23\u5F0F",wordTitle:"\u641C\u5C0B\u8A5E\u6CE8\u91CB",re:"\u6B63\u5247",ignoreCase:"\u4E0D\u5340\u5206\u5927\u5C0F\u5BEB",filterLink:"\u7BE9\u9078\u93C8\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9801\u5167\u641C\u5C0B\u8A5E",addSearchEngine:"\u6DFB\u52A0\u641C\u5C0B\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52D5\u7DE8\u8F2F\u898F\u5247\u4E26\u6DFB\u52A0\uFF1F",expand:"\u5C55\u958B\u5269\u9918\u7AD9\u9EDE",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8A5E\u8A9E",wordRange:"\u751F\u6548\u7BC4\u570D",customInputFrame:"\u81EA\u5B9A\u7FA9\u641C\u5C0B\u53C3\u6578",customSubmit:"\u63D0\u4EA4\u641C\u5C0B",finalSearch:"\u76EE\u6A19\u641C\u5C0B\u5B57\u4E32",search:"\u641C\u5C0B\u6B64\u9805",siteKeywords:"\u95DC\u9375\u8A5E(\u591A\u500B\u95DC\u9375\u8A5E\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u9EDE URL \u5339\u914D\u6B63\u5247",openSelect:"\u6253\u958B\u9078\u9805",openInDefault:"\u9ED8\u8A8D",openInNewTab:"\u65B0\u6A19\u7C64\u9801\u6253\u958B",openInCurrent:"\u7576\u524D\u9801\u6253\u958B",currentType:"\u7576\u524D\u5206\u985E",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u9084\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u64EC\u8F38\u5165\u641C\u5C0B",inputAction:"\u8F38\u5165",clickAction:"\u9EDE\u64CA",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u8907\u88FD\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5167\u8F38\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u9EDE\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u96D9\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u8907\u88FD\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8ACB\u8F38\u5165\u65B0\u503C",deleteConfirm:"\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u9805\u55CE\uFF1F ",sleepPrompt:"\u7B49\u5F85\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",startCache:"\u958B\u59CB\u7DE9\u5B58\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5F85\u7DE9\u5B58\u5B8C\u7562\uFF0C\u52FF\u95DC\u9589\u914D\u7F6E\u9801\uFF01",cacheOver:"\u6240\u6709\u5716\u6A19\u90FD\u5DF2\u7DE9\u5B58\u5B8C\u7562\uFF01",cspDisabled:"\u8173\u672C\u6A23\u5F0F\u88AB\u7576\u524D\u7AD9\u9EDE\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u7121\u6CD5\u986F\u793A\uFF0C\u8ACB\u5617\u8A66\u5B89\u88DD Allow CSP: Content-Security-Policy \u64F4\u5C55\u7372\u53D6\u6B0A\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8ACB\u8A2D\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u9304\u88FD\u52D5\u4F5C",startRecord:"\u958B\u59CB\u9304\u88FD\u64CD\u4F5C\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9375\u7D50\u675F\u9304\u88FD",loopAction:"\u{1F501}\u958B\u59CB\u5FAA\u74B0",loopActionEnd:"\u23F9\uFE0F\u5FAA\u74B0\u7D50\u675F",loopStart:'\u958B\u59CB\u5FAA\u74B0\uFF0C\u5FAA\u74B0\u6B21\u6578\u70BA<span title="#t#">#t#</span>',loopEnd:"\u7D50\u675F\u5FAA\u74B0",loopTimes:"\u5FAA\u74B0\u6B21\u6578\uFF0C\u5C07\u904D\u6B77\u6240\u6709\u5339\u914D\u5143\u7D20\u4E26\u9806\u5E8F\u57F7\u884C",loadingCollection:"\u6B63\u5728\u8F09\u5165\u5408\u96C6\uFF0C\u8ACB\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F38\u5165\u6846\uFF09\u5167\u8F38\u5165\u641C\u5C0B\u5B57\u8A5E",emuClickTips:"\u9EDE\u64CA\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u9215\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u6642\u9593\u5F8C\u7E7C\u7E8C\u57F7\u884C\uFF0C\u7576\u67D0\u500B\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u6642\u9593\u624D\u80FD\u5B8C\u6210\u6642\u5F88\u6709\u7528",emuCopyTips:"\u8907\u88FD\u6307\u5B9A\u5143\u7D20\u7684\u6587\u5B57\u5230\u526A\u8CBC\u7C3F",emuRecordTips:"\u9304\u88FD\u63A5\u4E0B\u4F86\u7684\u9EDE\u64CA\u548C\u8F38\u5165\u64CD\u4F5C",emuLoopTips:"\u958B\u59CB\u5FAA\u74B0\uFF0C\u63A5\u4E0B\u4F86\u7684\u64CD\u4F5C\u5C07\u904D\u6B77\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u4E26\u4E14\u91CD\u8907\u6307\u5B9A\u6B21\u6578",emuStopTips:"\u7D50\u675F\u64CD\u4F5C\u4E26\u7522\u751F\u898F\u5247"};break;case"ja":Ke={import:"\u30A4\u30F3\u30DD\u30FC\u30C8",filter:"\u30D5\u30A3\u30EB\u30BF\u30FC",selectAll:"\u3059\u3079\u3066\u9078\u629E",importOrNot:"\u8A2D\u5B9A\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u304B? ",settings:"\u69CB\u6210\u30B9\u30AF\u30EA\u30D7\u30C8",batchOpen:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3",batchOpenConfirm:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",postOver:"\u6B63\u5E38\u306B\u9001\u4FE1\u3055\u308C\u307E\u3057\u305F:",postError:"\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F:",copyOver:"\u30B3\u30D4\u30FC\u306B\u6210\u529F\u3057\u307E\u3057\u305F",keywords:"\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",targetUrl:"\u691C\u7D22 URL \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",siteName:"\u30B5\u30A4\u30C8\u540D",siteDesc:"\u8AAC\u660E",siteUrl:"\u30A2\u30C9\u30EC\u30B9",siteIcon:"\u30A2\u30A4\u30B3\u30F3",siteTest:"\u30C6\u30B9\u30C8",siteCancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",siteAdd:"\u8FFD\u52A0",siteType:"\u30AB\u30C6\u30B4\u30EA",siteExist:"\u540C\u3058\u30EB\u30FC\u30EB\u304C\u3059\u3067\u306B\u5B58\u5728\u3057\u307E\u3059\u3002\u30AF\u30ED\u30FC\u30F3\u3068\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",siteAddOver:"\u30B5\u30A4\u30C8\u306F\u6B63\u5E38\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F",multiline:"\u8907\u6570\u884C\u306E\u691C\u7D22\u306F\u6539\u884C\u3067\u533A\u5207\u308B\u3079\u304D\u3067\u3059\u304B? ",multilineTooMuch:"\u884C\u6570\u304C 10 \u884C\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002\u691C\u7D22\u3092\u7D9A\u3051\u307E\u3059\u304B? ",inputPlaceholder:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3",inputTitle:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3\u3001*? \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3001$ \u306F\u7D42\u308F\u308A\u3092\u8868\u3057\u3001^ \u306F\u59CB\u307E\u308A\u3092\u8868\u3057\u307E\u3059\u3001\u30B0\u30EB\u30FC\u30D7 ** \u30B5\u30A4\u30C8\u306F\u5199\u771F\u306A\u3069\u306E\u6307\u5B9A\u3055\u308C\u305F\u30B0\u30EB\u30FC\u30D7\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3067\u304D\u307E\u3059 ** Google\u3001\u6B21\u306E\u9805\u76EE\u3092\u30BF\u30D6\u3057\u307E\u3059",inputKeywords:"\u691C\u7D22\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",inPageTips:`\u30AB\u30B9\u30BF\u30E0\u533A\u5207\u308A\u6587\u5B57: $c \u3068\u533A\u5207\u308A\u6587\u5B57 ($c| \u691C\u7D22 | \u30B8\u30E3\u30F3\u30D1\u30FC\u306A\u3069)\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528
\u5143\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u5206\u96E2\u3055\u308C\u3066\u3044\u307E\u305B\u3093: $o \u3068\u6587\u5B57 (\u30D2\u30FC\u30ED\u30FC\u304C\u597D\u3093\u3060 $oopai \u306A\u3069)
\u6B63\u898F\u8868\u73FE \uFF1A/re/ \u3001$c\u3001/google/i\u3001/aPPle/ \u306A\u3069
\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $t{\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8}\u3001\u305F\u3068\u3048\u3070 linux$t{Linux \u306F Unix \u3067\u306F\u3042\u308A\u307E\u305B\u3093}
\u30AB\u30B9\u30BF\u30E0 \u30B9\u30BF\u30A4\u30EB\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $s{\u80CC\u666F;other}\u3001\u4F8B: google$s{#333333;color:red;}
\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5DE6\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u6B21\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u3001\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524D\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059`,inPagePlaceholder:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22\u3059\u308B\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3057\u3066 Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",pickerBtn:"\u8981\u7D20\u306E\u53D6\u5F97",multiPickerBtn:"\u8981\u7D20\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Ctrl \u307E\u305F\u306F Command \u3092\u62BC\u3057\u305F\u307E\u307E\u7D99\u7D9A\u7684\u306B\u53D6\u5F97\u3057\u307E\u3059",editBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u7DE8\u96C6",emptyBtn:"\u7A7A\u306E\u691C\u7D22\u30C6\u30AD\u30B9\u30C8",copyInPageBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30FC",wordModeBtn:"\u30EF\u30FC\u30C9\u30E2\u30FC\u30C9",copyEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u30B3\u30D4\u30FC",openLinkBtn:"\u9078\u629E\u3057\u305F\u30EA\u30F3\u30AF\u3092\u958B\u304F",maxEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u5C55\u958B",minEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u6298\u308A\u305F\u305F\u3080",expandAll:"\u3059\u3079\u3066\u5C55\u958B",collapseAll:"\u3059\u3079\u3066\u6298\u308A",rename:"\u540D\u524D\u3092\u5909\u66F4",reverseBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u5FA9\u5143",pinBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u4FEE\u6B63\u3001\u3059\u3079\u3066\u306E\u30BF\u30D6\u3067\u691C\u7D22",locBtn:"\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u691C\u7D22",filterSites:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u3092\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0",searchInPage:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22",removeBtn:"\u691C\u7D22\u8A9E\u3092\u524A\u9664",saveRuleBtn:"\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E\u691C\u7D22\u8A9E\u3092\u4FDD\u5B58",wordContent:"\u5358\u8A9E\u306E\u5185\u5BB9\u3092\u691C\u7D22",wordHide:"\u89AA\u8981\u7D20\u3092\u975E\u8868\u793A",wordHideTips:"\u8981\u7D20\u306E\u6DF1\u3055\u30010 \u304C\u73FE\u5728\u306E\u89AA",wordStyle:"\u691C\u7D22\u30EF\u30FC\u30C9\u30B9\u30BF\u30A4\u30EB",wordTitle:"\u691C\u7D22\u5358\u8A9E\u306E\u6CE8\u91C8",re:"RegExp",ignoreCase:"\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u306F\u533A\u5225\u3055\u308C\u307E\u305B\u3093",filterLink:"\u30D5\u30A3\u30EB\u30BF\u30FC\u30EA\u30F3\u30AF",modify:"\u5909\u66F4",cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",modifyWord:"\u30DA\u30FC\u30B8\u4E0A\u306E\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3057\u307E\u3059",addSearchEngine:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u3092\u8FFD\u52A0",noValidItemAsk:"\u6709\u52B9\u306A\u8981\u7D20\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u30EB\u30FC\u30EB\u3092\u624B\u52D5\u3067\u7DE8\u96C6\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",expand:"\u6B8B\u308A\u306E\u30B5\u30A4\u30C8\u3092\u5C55\u958B\u3057\u307E\u3059",add:"\u8FFD\u52A0",addWord:"\u65B0\u3057\u3044\u5358\u8A9E\u3092\u8FFD\u52A0",wordRange:"\u6709\u52B9\u7BC4\u56F2",customInputFrame:"\u30AB\u30B9\u30BF\u30E0\u691C\u7D22\u30D1\u30E9\u30E1\u30FC\u30BF",customSubmit:"\u691C\u7D22\u3092\u9001\u4FE1",finalSearch:"\u5BFE\u8C61\u306E\u691C\u7D22\u6587\u5B57\u5217",search:"\u3053\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u691C\u7D22",siteKeywords:"\u30AD\u30FC\u30EF\u30FC\u30C9 (| \u3067\u533A\u5207\u3089\u308C\u305F\u8907\u6570\u306E\u30AD\u30FC\u30EF\u30FC\u30C9)",siteMatch:"\u901A\u5E38\u306E\u30B5\u30A4\u30C8 URL \u3068\u4E00\u81F4",openSelect:"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u958B\u304F",openInDefault:"\u30C7\u30D5\u30A9\u30EB\u30C8",openInNewTab:"\u65B0\u3057\u3044\u30BF\u30D6\u304C\u958B\u304D\u307E\u3059",openInCurrent:"\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u304C\u958B\u3044\u3066\u3044\u307E\u3059",currentType:"\u73FE\u5728\u306E\u30AB\u30C6\u30B4\u30EA",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u5FA9\u5143",addAction:"\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0",rollInfo:"\u5165\u529B\u691C\u7D22\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30C8",inputAction:"\u5165\u529B",clickAction:"\u30AF\u30EA\u30C3\u30AF",sleepAction:"\u5F85\u6A5F",copyAction:"\u{1F4C4}\u8981\u7D20\u306E\u30B3\u30D4\u30FC",submitCrawl:"\u2611\uFE0F\u64CD\u4F5C\u3092\u5B8C\u4E86",inputOutput:'\u8981\u7D20 <span title="#t1#" class="element">#t1#</span> \u5185\u306B <span title="#t2#">#t2#</span> \u3092\u5165\u529B\u3057\u307E\u3059',clickOutput:'\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',copyOutput:'\u30B3\u30D4\u30FC\u8981\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u30B9\u30EA\u30FC\u30D7<span title="#t#">#t#</span> \u30DF\u30EA\u79D2',inputNewValue:"\u65B0\u3057\u3044\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",deleteconfirm:"\u3053\u306E\u9805\u76EE\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",sleepPrompt:"\u5F85\u6A5F\u6642\u9593 (\u30DF\u30EA\u79D2)",startCache:"\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u8F9B\u62B1\u5F37\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u8A2D\u5B9A\u30DA\u30FC\u30B8\u306F\u9589\u3058\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 ",cacheOver:"\u3059\u3079\u3066\u306E\u30A2\u30A4\u30B3\u30F3\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u307E\u3057\u305F! ",cspDisabled:"\u30B9\u30AF\u30EA\u30D7\u30C8 \u30B9\u30BF\u30A4\u30EB\u306F\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E CSP \u306B\u3088\u3063\u3066\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3002\u8A31\u53EF\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Allow CSP: Content-Security-Policy \u62E1\u5F35\u6A5F\u80FD\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044",Sunday:"\u65E5\u66DC\u65E5",Monday:"\u6708\u66DC\u65E5",Tuesday:"\u706B\u66DC\u65E5",Wednesday:"\u6C34\u66DC\u65E5",Thursday:"\u6728\u66DC\u65E5",Friday:"\u91D1\u66DC\u65E5",Saturday:"\u571F\u66DC\u65E5",template:"[#t#]\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044",recordAction:"\u23FA\uFE0F\u8A18\u9332\u64CD\u4F5C",startRecord:"\u8A18\u9332\u64CD\u4F5C\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u8A18\u9332\u3092\u7D42\u4E86\u3059\u308B\u306B\u306F Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",loopAction:"\u{1F501}\u30EB\u30FC\u30D7\u306E\u958B\u59CB",loopActionEnd:"\u23F9\uFE0F\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopStart:'\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3002\u30EB\u30FC\u30D7\u6570\u306F <span title="#t#">#t#</span> \u3067\u3059',loopEnd:"\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopTimes:"\u30EB\u30FC\u30D7\u306E\u6570\u3002\u4E00\u81F4\u3059\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u304C\u8D70\u67FB\u3055\u308C\u3001\u9806\u756A\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059",loadingCollection:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",emuInputTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u5165\u529B\u30DC\u30C3\u30AF\u30B9\u306A\u3069) \u306B\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u307E\u3059",emuClickTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u30DC\u30BF\u30F3\u306A\u3069) \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059",emuWaitTips:"\u7D9A\u884C\u3059\u308B\u524D\u306B\u3057\u3070\u3089\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u64CD\u4F5C\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059",emuCopyTips:"\u6307\u5B9A\u3055\u308C\u305F\u8981\u7D20\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059",emuRecordTips:"\u6B21\u306E\u30AF\u30EA\u30C3\u30AF\u3068\u5165\u529B\u64CD\u4F5C\u3092\u8A18\u9332\u3057\u307E\u3059",emuLoopTips:"\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u6B21\u306E\u64CD\u4F5C\u306F\u898B\u3064\u304B\u3063\u305F\u3059\u3079\u3066\u306E\u8981\u7D20\u3092\u8D70\u67FB\u3057\u3001\u6307\u5B9A\u3055\u308C\u305F\u56DE\u6570\u3060\u3051\u7E70\u308A\u8FD4\u3057\u307E\u3059",emuStopTips:"\u64CD\u4F5C\u3092\u7D42\u4E86\u3057\u3066\u30EB\u30FC\u30EB\u3092\u751F\u6210"};break;case"ru":Ke={import:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",filter:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C",selectAll:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0451",importOrNot:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E?",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",batchOpen:"\u0413\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0439 \u043F\u043E\u0438\u0441\u043A",batchOpenConfirm:"\u0418\u0441\u043A\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u0441\u0435\u0445 \u0434\u0432\u0438\u0436\u043A\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E",keywords:"Input keywords",targetUrl:"Input URL",siteName:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",siteDesc:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",siteUrl:"URL",siteIcon:"\u0418\u043A\u043E\u043D\u043A\u0430",siteTest:"\u0422\u0435\u0441\u0442",siteCancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",siteAdd:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",siteType:"\u0413\u0440\u0443\u043F\u043F\u0430",siteExist:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A \u043A\u043B\u043E\u043D?",siteAddOver:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D",multiline:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A?",multilineTooMuch:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u043E\u043A \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 10. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A?",inputPlaceholder:"\u0424\u0438\u043B\u044C\u0442\u0440\u044B",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"\u0414\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter",pickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C",multiPickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u043B\u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Ctrl \u0438\u043B\u0438 Command",editBtn:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u0441\u043A\u0430",emptyBtn:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430",copyInPageBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u043A\u0430",wordModeBtn:"\u0420\u0435\u0436\u0438\u043C \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u043B\u043E\u0432\u0430\u043C. \u0412 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0446\u0435\u043B\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043A\u0430\u0442\u044C\u0441\u044F \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",copyEleBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",openLinkBtn:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438",maxEleBtn:"\u0420\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",minEleBtn:"\u0421\u0436\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",expandAll:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",collapseAll:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u043E\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0432\u043E \u0432\u0441\u0435\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u0445",locBtn:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438",filterSites:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0432\u0438\u0436\u043A\u0438",searchInPage:"\u0418\u0441\u043A\u0430\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",removeBtn:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430",saveRuleBtn:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430",wordContent:"\u0421\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430",wordHide:"Hide parent element",wordHideTips:"\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, 0 - \u044D\u0442\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",wordStyle:"\u0421\u0442\u0438\u043B\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043B\u043E\u0432\u0430",wordTitle:"\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F \u043A \u0438\u0441\u043A\u043E\u043C\u043E\u043C\u0443 \u0441\u043B\u043E\u0432\u0443",re:"RegExp",ignoreCase:"\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440",filterLink:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",modify:"\u0413\u043E\u0442\u043E\u0432\u043E",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",modifyWord:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",addSearchEngine:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0432\u0438\u0436\u043E\u043A",noValidItemAsk:"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0425\u043E\u0442\u0438\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0430\u0439\u0442?",expand:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044B",add:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",addWord:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",wordRange:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u0430",customInputFrame:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0438\u0441\u043A\u0430",customSubmit:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C",finalSearch:"\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",search:"\u0418\u0441\u043A\u0430\u0442\u044C \u044D\u0442\u043E",siteKeywords:"\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (\u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C |)",siteMatch:"Regexp \u0434\u043B\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F URL \u0441\u0430\u0439\u0442\u0430",openSelect:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432",openInDefault:"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",openInNewTab:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",openInCurrent:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",currentType:"Current",maxAddSiteBtn:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",minAddSiteBtn:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",addAction:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",crawlInfo:"\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",inputAction:"\u0412\u0432\u043E\u0434",clickAction:"\u041A\u043B\u0438\u043A \u043C\u044B\u0448\u0438",sleepAction:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",copyAction:"\u{1F4C4}\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442",submitCrawl:"\u2611\uFE0F\u0417\u0430\u0432\u0435\u0448\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",inputOutput:'\u0412\u0432\u043E\u0434 <span title="#t2#">#t2#</span> \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t1#" class="element">#t1#</span>',clickOutput:'\u041A\u043B\u0438\u043A \u043F\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 <span title="#t#" class="element">#t#</span>',dblclickOutput:'\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A <span title="#t#" class="element">#t#</span>',rclickOutput:'\u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u041F\u041A\u041C <span title="#t#" class="element">#t#</span>',copyOutput:'\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t#" class="element">#t#</span>',sleepOutput:'\u0416\u0434\u0430\u0442\u044C <span title="#t#">#t#</span> \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434',inputNewValue:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",deleteConfirm:"\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442? ",sleepPrompt:"\u0412\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F (\u0432 \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445)",startCache:"\u041D\u0430\u0447\u0430\u043B\u043E\u0441\u044C \u043A\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443!",cacheOver:"\u0412\u0441\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u044B!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "#t#"',recordAction:"\u23FA\uFE0F\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",startRecord:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F. \u041F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter, \u0447\u0442\u043E\u0431\u044B \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043E\u043A\u043D\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.",loopAction:"\u{1F501}\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B",loopActionEnd:"\u23F9\uFE0F\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopStart:'\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B <span title="#t#">#t#</span> \u0440\u0430\u0437',loopEnd:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopTimes:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u043A\u043B\u043E\u0432, \u0432\u0441\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u044B \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 \u043F\u043E\u043B\u044F \u0432\u0432\u043E\u0434\u0430).",emuClickTips:"\u041A\u043B\u0438\u043A\u043D\u0443\u0442\u044C \u043F\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435)",emuWaitTips:"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C. \u041F\u043E\u043B\u0435\u0437\u043D\u043E, \u043A\u043E\u0433\u0434\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F",emuCopyTips:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",emuRecordTips:"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0432\u0432\u043E\u0434\u0430",emuLoopTips:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0446\u0438\u043A\u043B, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C\u0441\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0437",emuStopTips:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"};break;default:Ke={import:"Import",filter:"Filter",selectAll:"SelectAll",importOrNot:"Do you want to import this config?",settings:"Settings",batchOpen:"Batch open",batchOpenConfirm:"Batch open urls?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"Copied successfully",keywords:"Input keywords",targetUrl:"Input URL",siteName:"Site Name",siteDesc:"Description",siteUrl:"Site Url",siteIcon:"Site Icon",siteTest:"Test",siteCancel:"Cancel",siteAdd:"Add",siteType:"Category",siteExist:"Site is already exist, add it as clone?",siteAddOver:"Site added successfully",multiline:"Search as multilines?",multilineTooMuch:"The number of lines exceeds 10, do you want to continue searching?",inputPlaceholder:"Filter engines",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"Enter search keywords",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"Input text, press Enter to find in the page",pickerBtn:"Pick a element",multiPickerBtn:"Pick a element, pick multi elements with Ctrl or Command",editBtn:"Edit search text",emptyBtn:"Empty search text",copyInPageBtn:"Copy search text",wordModeBtn:"Word mode",copyEleBtn:"Copy selected elements",openLinkBtn:"Open selected links",maxEleBtn:"Expand selected elements",minEleBtn:"Collapse selected elements",expandAll:"Expand All",collapseAll:"Collapse All",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"Pin search text to search in all tabs",locBtn:"Sidebar to locate",filterSites:"Filter search engines",searchInPage:"Find in page",removeBtn:"Remove search term",saveRuleBtn:"Save the search term of the current site",wordContent:"Search word content",wordHide:"Hide parent element",wordHideTips:"Element depth, 0 means the current",wordStyle:"Search word style",wordTitle:"Search word annotation",re:"RegExp",ignoreCase:"Ignore case",filterLink:"Filter link",modify:"Modify",cancel:"Cancel",modifyWord:"Modify search word",addSearchEngine:"Add search engine",noValidItemAsk:"No valid element found, do you want to manually edit the rule and add it?",expand:"Expand other sites",add:"Add",addWord:"Add new word",wordRange:"Effective range",customInputFrame:"Custom search parameters",customSubmit:"Submit",finalSearch:"Target search string",search:"Search this",siteKeywords:"Keywords(split by |)",siteMatch:"Regexp to match site URL",openSelect:"Open option",openInDefault:"Default",openInNewTab:"Open a new tab",openInCurrent:"Open in current",currentType:"Current",maxAddSiteBtn:"Maximize",minAddSiteBtn:"Restore",addAction:"Add Actions",crawlInfo:"Analog input search",inputAction:"Input",clickAction:"Click",sleepAction:"Wait",copyAction:"\u{1F4C4}Copy element",submitCrawl:"\u2611\uFE0FComplete operation",inputOutput:'Input <span title="#t2#">#t2#</span> in the element <span title="#t1#" class="element">#t1#</span>',clickOutput:'Click on element <span title="#t#" class="element">#t#</span>',dblclickOutput:'Double click <span title="#t#" class="element">#t#</span>',rclickOutput:'Right click <span title="#t#" class="element">#t#</span>',copyOutput:'Copy element <span title="#t#" class="element">#t#</span>',sleepOutput:'Sleep for <span title="#t#">#t#</span> milliseconds',inputNewValue:"Please enter a new value",deleteConfirm:"Are you sure you want to delete this item? ",sleepPrompt:"Wait time (milliseconds)",startCache:"Start cache icons of engines, do not close this page!",cacheOver:"All icons cached!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'Please set the value of "#t#"',recordAction:"\u23FA\uFE0FRecord operation",startRecord:"Start to record operation, press Enter to end",loopAction:"\u{1F501}Start loop",loopActionEnd:"\u23F9\uFE0FStop loop",loopStart:'Start loop <span title="#t#">#t#</span> times',loopEnd:"Stop loop",loopTimes:"Number of loops, all matching elements will be traversed and executed sequentially",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"Enter search terms in specified page elements (such as input boxes)",emuClickTips:"Click on a specified page element (such as a button)",emuWaitTips:"Wait for a while before continuing, useful when an operation takes a while to complete",emuCopyTips:"Copy the text of the specified element to the clipboard",emuRecordTips:"Record the next clicks and input operations",emuLoopTips:"Start the loop, the next operation will traverse all found elements and repeat the specified number of times",emuStopTips:"End the operation and generate rules"};break}}function E(l,e){return Ke[l]?e?Ke[l].replace(/#t#/g,e).replace(/#t1#/g,e[0]).replace(/#t2#/g,e[1]):Ke[l]:l}const Wt="ontouchstart"in document.documentElement;var lr=!0,pe=(l,e)=>{lr&&console.log(`%c\u3010SearchJumper v.${pt.script.version}\u3011 ${e||"debug"}`,"color: orange;font-size: large;font-weight: bold;",l)},qe=!1,at=!1,ri;function ee(l=""){return si?si.createHTML(l):l}var Be,nt,Ce,Oe,ge,Me,pt,Ge;if(typeof GM_xmlhttpRequest<"u")Be=GM_xmlhttpRequest,Ge=!0;else if(typeof GM<"u"&&typeof GM.xmlHttpRequest<"u")Be=GM.xmlHttpRequest,Ge=!0;else{let l;Be=e=>{fetch(e.url,{method:e.method||"GET",body:e.data,headers:e.headers}).then(t=>(l=t,e.responseType==="blob"?t.blob():t.text())).then(t=>{let r=document.implementation.createHTMLDocument("");r.documentElement.innerHTML=ee(t),e.onload&&e.onload({status:l.status,response:t,responseXML:r})}).catch(t=>e.onerror&&e.onerror(t))}}Ge?Ge=async(l,e)=>l?(ri=l,new Promise((t,r)=>{let i=e&&/^post$/i.test(e.method),s={method:e&&e.method||"GET",url:l,headers:e&&e.headers||{referer:l,origin:l,"Content-Type":i?"application/x-www-form-urlencoded":"","X-Requested-With":i?"XMLHttpRequest":""},onload:function(n){if(ri!=l)return;let a=n.response;(n.status>=400||!a)&&(a=""),t({text:()=>new Promise(d=>{d(a)}),json:()=>new Promise(d=>{try{d(JSON.parse(a))}catch{d(null)}}),finalUrl:n.finalUrl||l})},onerror:function(n){pe(n),r(n)},ontimeout:function(n){pe(n),r(n)}};e&&e.body&&(s.data=e.body),e&&e.responseType==="stream"&&(s.responseType="stream",delete s.onload,s.onloadstart=n=>{if(!n||!n.response||!n.response.getReader)return;let a=[],o,p;const d=n.response.getReader();let u=()=>{let f="";try{return p&&(f=p.trim(),/^data:/.test(f)?f="["+f.replace(/^data:\s+\[DONE\]\s*/m,"").trim().replace(/\n+/g,`
`).split(`
`).map(h=>h.replace(/^data:/,"")).join(",")+"]":/^({.*} *\n)* *{.*}$/.test(f)?f=f.split(`
`).pop():/^\[[\s\S]+[^\]]$/.test(f)&&(f=f+"]")),JSON.parse(f)}catch{return null}};d.read().then(function f({done:h,value:m}){if(ri==l){if(h){t({text:p,json:u,finalUrl:n.finalUrl||l});return}a=e.streamMode==="standalone"?Array.from(m):a.concat(Array.from(m));try{p=new TextDecoder("utf-8").decode(new Uint8Array(a)),e.onstream({text:p,json:u,finalUrl:n.finalUrl||l})}catch(y){console.log(y)}return d.read().then(f)}})}),Be(s)})):null:Ge=fetch,St?nt=(l,e)=>{}:typeof GM_registerMenuCommand<"u"?nt=GM_registerMenuCommand:typeof GM<"u"&&typeof GM.registerMenuCommand<"u"?nt=GM.registerMenuCommand:nt=(l,e)=>{},typeof GM_openInTab<"u"?ge=GM_openInTab:typeof GM<"u"&&typeof GM.openInTab<"u"?ge=GM.openInTab:ge=(l,e)=>{window.open(l)},typeof GM_notification<"u"?Ce=l=>GM_notification({text:l,onclick:e=>ge(Ae,{active:!0})}):typeof GM<"u"&&typeof GM.notification<"u"?Ce=l=>GM.notification({text:l,onclick:e=>ge(Ae,{active:!0})}):Ce=l=>{},typeof GM_setClipboard<"u"?Oe=GM_setClipboard:typeof GM<"u"&&typeof GM.setClipboard<"u"?Oe=GM.setClipboard:Oe=(l,e)=>{try{nr.writeText(l).then(()=>{console.log("Text copied to clipboard")}).catch(t=>{document.execCommand("copy"),console.error("Failed to copy text: ",t)})}catch{document.execCommand("copy")}},Me=l=>{if(l=l.replace(/\n\s*/g,""),typeof GM_addStyle<"u")return GM_addStyle(l);{let e=document.createElement("style");return e.innerHTML=ee(l),document.head.appendChild(e),e}},typeof GM_info<"u"?pt=GM_info:typeof GM<"u"&&typeof GM.info<"u"?pt=GM.info:pt={script:{name:"SearchJumper",version:0}},ye.searchJumperAddons||(ye.searchJumperAddons=[]);const $i=document.referrer;let de=location.href.slice(0,500);var q={supportGM:typeof GM_getValue=="function"&&typeof GM_getValue("a","b")<"u",supportGMPromise:typeof GM<"u"&&typeof GM.getValue=="function"&&typeof GM.getValue("a","b")<"u",supportCrossSave:function(){return this.supportGM||this.supportGMPromise},listItemCache:[],mxAppStorage:function(){try{return window.external.mxGetRuntime().storage}catch{}}(),operaUJSStorage:function(){try{return window.opera.scriptStorage}catch{}}(),setItem:function(l,e){this.supportGMPromise?(GM.setValue(l,e),e===""&&typeof GM<"u"&&typeof GM.deleteValue<"u"&&GM.deleteValue(l)):this.supportGM?(GM_setValue(l,e),e===""&&typeof GM_deleteValue<"u"&&GM_deleteValue(l)):this.operaUJSStorage?this.operaUJSStorage.setItem(l,e):this.mxAppStorage?this.mxAppStorage.setConfig(l,e):window.localStorage&&window.localStorage.setItem(l,e)},getItem:async function(l,e){var t;return this.supportGMPromise?t=await GM.getValue(l):this.supportGM?t=GM_getValue(l):this.operaUJSStorage?t=this.operaUJSStorage.getItem(l):this.mxAppStorage?t=this.mxAppStorage.getConfig(l):window.localStorage&&(t=window.localStorage.getItem(l)),e&&e(t),t},getListItem:async function(l,e){var t=this.listItemCache[l];if(typeof t>"u"&&(t=await this.getItem(l),this.listItemCache[l]=t||null),!t)return null;for(var r=0;r<t.length;r++){let i=t[r];if(i.k==e)return i.v}return null},setListItem:async function(l,e,t){var r=this.listItemCache[l];typeof r>"u"&&(r=await this.getItem(l)),r||(r=[]),r=r.filter(i=>i&&i.k!=e),t&&(r.unshift({k:e,v:t}),r.length>50&&r.pop()),this.setItem(l,r),this.listItemCache[l]=r}};class cr{constructor(e,t,r){this.webDAVUrl=e,this.username=t,this.password=r}init(){this.inited||(this.inited=!0,this.auth=btoa(`${this.username}:${this.password}`))}request(e,t,r,i,s,n){{this.init();let a=this.webDAVUrl+r,o={referer:a,origin:a,"Content-Type":"text/xml; charset=UTF-8",Authorization:`Basic ${this.auth}`};for(let p in n)o[p]=n[p];Be({method:e,url:a,data:t,headers:o,onload:function(p){let d=p.response;if((p.status>=400||!d)&&(d=""),i=="xml"){var u=p.responseXML;u&&(d=u.firstChild.nextSibling?u.firstChild.nextSibling:u.firstChild)}s&&s(d)},onerror:function(p){pe(p),s&&s(p)},ontimeout:function(p){pe(p),s&&s(p)}})}}GET(e,t){return this.request("GET",null,e,"text",t,{})}PROPFIND(e,t){return this.request("PROPFIND",null,e,"xml",t,{Depth:"1"})}MKCOL(e,t){return this.request("MKCOL",null,e,"text",t,{})}DELETE(e,t){return this.request("DELETE",null,e,"text",t,{})}PUT(e,t,r){return this.request("PUT",t,e,"text",r,{})}async read(e){let t=this;return new Promise(r=>{t.GET(e,r)})}async write(e,t){let r=this;return new Promise(i=>{r.PUT(e,t,i)})}async rm(e){let t=this;return new Promise(r=>{t.DELETE(e,r)})}}var ot;async function Dt(l,e){if(Te)return;let t=await q.getItem("searchData");if(t&&(c=t),!ot)return l&&l();if(!e){let r=await ot.read("lastModified");if(r&&(r=parseFloat(r)),r&&(!c.lastModified||r>c.lastModified)){c.lastModified=r,jt=c.lastModified;let i=await ot.read("sitesConfig.json");if(i)try{i=JSON.parse(i),c.sitesConfig=i}catch(n){pe(n)}let s=await ot.read("inPageRule.json");if(s)try{s=JSON.parse(s),c.prefConfig.inPageRule=s}catch(n){pe(n)}}}l&&l(),await ot.write("lastModified",""+c.lastModified),await ot.write("sitesConfig.json",JSON.stringify(c.sitesConfig)),await ot.write("inPageRule.json",JSON.stringify(c.prefConfig.inPageRule))}var si;ye.trustedTypes&&ye.trustedTypes.createPolicy&&(si=ye.trustedTypes.createPolicy("searchjumper_default",{createHTML:(l,e)=>l}));const ai=Object.getPrototypeOf(async function(){}).constructor;typeof String.prototype.replaceAll!="function"&&(String.prototype.replaceAll=function(l,e){var t=this;return t.split(l).join(e)}),typeof String.prototype.endsWith!="function"&&(String.prototype.endsWith=function(l,e){return(e===void 0||e>this.length)&&(e=this.length),this.substring(e-l.length,e)===l}),typeof String.prototype.startsWith!="function"&&(String.prototype.startsWith=function(l,e){return this.slice(e||0,l.length)===l});function _(l){return l.body||l.querySelector("body")}function ht(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientX:0:l.clientX}function dt(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientY:0:l.clientY}function pr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageX:0:l.pageX}function hr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageY:0:l.pageY}function dr(l,e,t){t=t||document,e=e||t;var r=[];try{for(var i=t.evaluate(l,e,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),s=0;s<i.snapshotLength;s++){var n=i.snapshotItem(s);n.nodeType===1&&r.push(n)}}catch{pe(`Invalid xpath: ${l}`)}return r}function ur(l,e,t){t=t||document,e=e||t;try{let r=(s,n,a)=>{let o=n.evaluate(s,a,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);return o.singleNodeValue&&o.singleNodeValue.nodeType===1&&o.singleNodeValue},i=l.split(" =>> ");if(i.length===2){let s=r(i[0],t,e);if(s&&s.shadowRoot)return r(i[1],s.shadowRoot,s.shadowRoot)}else return r(l,t,e)}catch{return pe(`Invalid xpath: ${l}`),!1}}function Wi(l){return l?/^\(*(descendant::|\.\/|\/\/|id\()/.test(l):!1}function ni(l,e,t){e||(e=document);try{if(!Wi(l))return e.querySelectorAll(l)}catch(r){pe(r,"Error selector")}return dr(l,t,e)}function bt(l,e){e||(e=document);try{if(!Wi(l)){let t=l.split(" =>> ");if(t.length===2){let r=e.querySelector(t[0]);return r&&r.shadowRoot&&r.shadowRoot.querySelector(t[1])}else return e.querySelector(l)}}catch(t){pe(t)}return ur(l,e,e)}function fr(l,e){for(var t=l.offsetTop,r=l.offsetParent;r;)t+=r.offsetTop,r=r.offsetParent;if(e){for(r=e;r;)t+=r.offsetTop,r=r.offsetParent;try{let i=e.contentWindow.parent;for(e=i.frameElement;e;){for(r=e;r;)t+=r.offsetTop,r=r.offsetParent;i=i.parent,e=i.frameElement}}catch{}}return t}function Or(l){for(var e=l.offsetLeft,t=l.offsetParent;t;)e+=t.offsetLeft,t=t.offsetParent;if(!document.isSameNode(l.ownerDocument)){let r=document.getElementsByTagName("iframe");for(let i=0;i<r.length;i++){let s=r[i],n;try{n=s.contentDocument||s.contentWindow.document}catch{break}if(n.isSameNode(l.ownerDocument)){for(t=s;t;)e+=t.offsetLeft,t=t.offsetParent;break}}}return e}function oi(l){const e=l.activeElement;return e?e.shadowRoot?oi(e.shadowRoot):e:null}function Di(l){if(l&&(/INPUT|TEXTAREA/i.test(l.nodeName)&&l.getAttribute("aria-readonly")!="true"||l.contentEditable=="true"))return!0;for(;l&&l.nodeName;){if(l.contentEditable=="true")return!0;if(l.nodeName.toUpperCase()=="BODY")break;l=l.parentNode}return!1}function Ct(l){let e=oi(l);return Di(e)}async function mr(l){for(;document.hidden;)await $e(500);var e=100,t="\uF0C8",r=function(){var i,s;e-=1,i=document.createElement("canvas"),i.width=20,i.height=20,s=i.getContext("2d",{willReadFrequently:!0}),s.fillStyle="rgba(0,0,0,1.0)",s.fillRect(0,0,20,20),s.font="16pt FontAwesome",s.textAlign="center",s.fillStyle="rgba(255,255,255,1.0)",s.fillText(t,10,18);var n=s.getImageData(2,10,1,1).data;n[0]==0&&n[1]==0&&n[2]==0?(s.font='16pt "Font Awesome 6 Free"',s.fillText(t,10,18),n=s.getImageData(2,10,1,1).data,n[0]==0&&n[1]==0&&n[2]==0?e>0&&setTimeout(r,150):typeof l=="function"&&l()):typeof l=="function"&&l()};setTimeout(r,100)}var lt,k,Se=[],le=!1,li=!1,Ee,xt,tt,Fe,Tt,Ve,be,Ye,kt,Le,Pe,He=[],Jt=[],It,Ne,_e,Ht,zt,Ji,ci,Hi=!1,jt=0,Ze;const pi=`<svg class="search-jumper-logoBtnSvg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><title>${pt.script.name}</title><path d="M.736 510.464c0-281.942 228.335-510.5 510-510.5 135.26 0 264.981 53.784 360.625 149.522 95.643 95.737 149.375 225.585 149.375 360.978 0 281.94-228.335 510.5-510 510.5-281.665 0-510-228.56-510-510.5zm510-510.5v1021m-510-510.5h1020" fill="#fefefe"/><path d="M237.44 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM699.904 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM423.296 759.296c-64 0-115.712-52.224-115.712-115.712 0-26.624 9.216-52.224 25.6-72.704 9.216-11.776 26.112-13.312 37.888-4.096s13.312 26.112 4.096 37.888c-9.216 11.264-13.824 24.576-13.824 38.912 0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-4.096-.512-8.192-1.024-11.776-2.56-14.848 6.656-28.672 21.504-31.744 14.848-2.56 28.672 6.656 31.744 21.504 1.536 7.168 2.048 14.336 2.048 22.016-.512 63.488-52.224 115.712-116.224 115.712z" fill="#333"/><path d="M602.08 760.296c-64 0-115.712-52.224-115.712-115.712 0-14.848 12.288-27.136 27.136-27.136s27.136 12.288 27.136 27.136c0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-15.36-5.632-30.208-15.872-41.472-9.728-11.264-9.216-28.16 2.048-37.888 11.264-9.728 28.16-9.216 37.888 2.048 19.456 21.504 29.696 48.64 29.696 77.824 0 62.976-52.224 115.2-116.224 115.2z" fill="#333"/><ellipse ry="58" rx="125" cy="506.284" cx="201.183" fill="#faf"/><ellipse ry="58" rx="125" cy="506.284" cx="823.183" fill="#faf"/></svg>`,ut="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==",hi="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDI5LjAxMzMzMyA2NDBBMzIgMzIgMCAwIDEgMzg0IDU5NC45ODY2NjdsMzcuNzYtMzcuNzYtMjIuODI2NjY3LTIyLjYxMzMzNC0xMzUuNjggMTM1LjY4IDkwLjQ1MzMzNCA5MC40NTMzMzQgMTM1LjY4LTEzNS42OC0yMi42MTMzMzQtMjIuNjEzMzM0ek01MzQuNjEzMzMzIDM5OC45MzMzMzNsMjIuNjEzMzM0IDIyLjYxMzMzNEw1OTQuOTg2NjY3IDM4NEEzMiAzMiAwIDAgMSA2NDAgNDI5LjAxMzMzM2wtMzcuNzYgMzcuNzYgMjIuNjEzMzMzIDIyLjYxMzMzNCAxMzUuNjgtMTM1LjY4LTkwLjQ1MzMzMy05MC40NTMzMzR6IiBmaWxsPSIjNUU1QzVDIj48L3BhdGg+PHBhdGggZD0iTTUxMiAyMS4zMzMzMzNhNDkwLjY2NjY2NyA0OTAuNjY2NjY3IDAgMSAwIDQ5MC42NjY2NjcgNDkwLjY2NjY2N0E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAwIDAgNTEyIDIxLjMzMzMzM3ogbTMxNi44IDM1NC45ODY2NjdsLTE4MS4xMiAxODEuMTJhMzIgMzIgMCAwIDEtNDUuMjI2NjY3IDBMNTU3LjIyNjY2NyA1MTIgNTEyIDU1Ny4yMjY2NjdsNDUuMjI2NjY3IDQ1LjIyNjY2NmEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMGwtMTM1LjY4LTEzNS42OGEzMiAzMiAwIDAgMSAwLTQ1LjIyNjY2N2wxODEuMTItMTgxLjEyYTMyIDMyIDAgMCAxIDQ1LjIyNjY2NyAwTDQ2Ni43NzMzMzMgNTEyIDUxMiA0NjYuNzczMzMzbC00NS4yMjY2NjctNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBsMTM1LjY4IDEzNS42OGEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N3oiIGZpbGw9IiM1RTVDNUMiPjwvcGF0aD4KPC9zdmc+",zi='<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>',di="%s[lurest]?\\b",ft=new RegExp(di);var M,ui,Et,Xe,Ri=!1;function gr(l,e,t){if(!l&&!e&&!t){let L=new Date,$=L.getFullYear(),T=L.getMonth(),U=L.getDate();l=L.getFullYear(),e=L.getMonth()+1,t=L.getDate()}let r=2e3,i=2,s=5,n=[51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],a="\u6B63\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u51AC\u81D8",o="\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u521D\u5EFF",p="\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678",d="\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5",u="\u9F20\u725B\u864E\u5154\u9F8D\u86C7\u99AC\u7F8A\u7334\u96DE\u72D7\u8C6C";function f(L,$,T){$-=1;let U=(Date.UTC(L,$,T)-Date.UTC(r,i-1,s))/(24*60*60*1e3)+1,z,B,b,P;for(let D=0;D<n.length;D++)if(U-=y(n[D]),U<=0){z=r+D,P=n[D],U+=y(P);break}if(!P)return null;for(let D=0;D<C(P).length;D++)if(U-=C(P)[D],U<=0){h(P)&&h(P)<=D?h(P)<D?B=D:h(P)===D?B="\u95F0"+D:B=D+1:B=D+1,U+=C(P)[D];break}return b=U,h(P)&&typeof B=="string"&&B.indexOf("\u95F0")>-1?B=`\u95F0${a[/\d/.exec(B)-1]}`:B=a[B-1],z=j(z)+x(z),b<11?b=`${o[10]}${o[b-1]}`:b>10&&b<20?b=`${o[9]}${o[b-11]}`:b===20?b=`${o[1]}${o[9]}`:b>20&&b<30?b=`${o[11]}${o[b-21]}`:b===30&&(b=`${o[2]}${o[9]}`),{lunarYear:z,lunarMonth:B,lunarDay:b}}function h(L){return L&15?L&15:!1}function m(L){return h(L)?L&983040?30:29:0}function y(L){let $=0;for(let T=32768;T>8;T>>=1){let U=L&T?30:29;$+=U}return h(L)&&($+=m(L)),$}function C(L){let $=[];for(let T=32768;T>8;T>>=1)$.push(L&T?30:29);return h(L)&&$.splice(h(L),0,m(L)),$}function j(L){let $=(L-3)%10;return $===0&&($=10),p[$-1]}function x(L){let $=(L-3)%12;return $===0&&($=12),$--,d[$]+` (${u[$]}) `}return f(l,e,t)}class yr{constructor(){let e=this;this.scale=c.prefConfig.customSize/100,this.tilesZoom=c.prefConfig.tilesZoom/100,this.tipsZoom=c.prefConfig.tipsZoom/100,Et=`
                 #search-jumper {
                     font-size: 16px;
                 }
                 #search-jumper-root {
                     font-size: initial;
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
                     background-color: #f5f5f5e0;
                     border: none;
                     height: 40px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     box-shadow: #ddd 0px 0px 3px;
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
                     color: black;
                     border: none;
                     outline: none;
                     box-sizing: border-box;
                     font-size: 20px;
                     cursor: text;
                 }
                 #search-jumper.search-jumper-showall #filterSites>span {
                     display: none;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist {
                     visibility: visible!important;
                     opacity: 1!important;
                     pointer-events: all;
                     text-align: left;
                     position: static;
                     display: block!important;
                     height: fit-content;
                     max-height: calc(100vh - 130px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
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
                     ${c.prefConfig.noAni?"background-color: rgba(0, 0, 0, 0.1);":"background-color: rgba(0, 0, 0, 0.1);transition:background-color .6s ease;"}
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist:hover~.search-jumper-showallBg {
                     background-color: rgba(0, 0, 0, 0.8);
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
                     background: #ffffffee;
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
                     display: flex;
                     min-width: 100%;
                     justify-content: center;
                     width: fit-content;
                     min-height: 100%;
                     position: initial;
                     transition: all 0.3s ease;
                 }
                 #search-jumper-alllist>.timeInAll,
                 #search-jumper-alllist>.dayInAll {
                     position: fixed;
                     bottom: 0;
                     line-height: 1.5;
                     color: white;
                     opacity: 0.45;
                     font-weight: bold;
                     font-family: Arial,sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     overflow-wrap: normal;
                     white-space: nowrap;
                     margin: 20px;
                     pointer-events: none;
                     text-shadow: 0 0 5px black;
                     background-image: initial;
                 }
                 #search-jumper-alllist>.dayInAll {
                     left: 50px;
                     font-size: ${Ue.indexOf("zh")==0?"1.5":"2"}vw;
                 }
                 #search-jumper-alllist>.timeInAll {
                     right: 50px;
                     font-size: 2vw;
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
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon {
                     display: flex;
                     flex-wrap: wrap;
                     padding: 0;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon>p {
                     text-align: left;
                     font-size: large;
                     padding: 10px 30px;
                     display: table-caption;
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
                     color: #abb0bd;
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
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>img {
                     width: 48px;
                     height: 48px;
                     float: left;
                     margin-left: -20px;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>p {
                     -webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;
                     display: block;
                     font-size: 16px;
                     height: 21px;
                     line-height: 21px;
                     margin-bottom: 8px;
                     margin-top: 0px;
                     margin-left: 40px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
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
                     font-size: 14px;
                     padding: 2px 6px;
                     background: rgb(160 160 160 / 10%);
                     color: #888;
                     border-radius: 10px;
                     transition: .3s;
                     cursor: pointer;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p>span:hover {
                     color: white;
                     background: rgb(160 160 160 / 30%);
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
                     z-index: 2147483647;
                     user-select: none;
                 }
                 .search-jumper-searchBar {
                     z-index: 2147483647;
                     overflow-wrap: break-word;
                     background: #505050cc;
                     border-radius: ${this.scale*21}px!important;
                     border: 1px solid #b3b3b3;
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
                     ${c.prefConfig.noAni?"":"transition:opacity 0.15s ease-out;"}
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
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon>div {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon>div:nth-of-type(${Math.max(1,(c.prefConfig.expandTypeLength||12)-1-(c.prefConfig.historyLength||0))})~div {
                     display: block;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon>p {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon a>img {
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
                     box-shadow: 0px 0px 8px 0px #00000080;
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
                     color: white;
                     opacity: 0.9;
                     text-shadow: 0 0 1px #d9d9d9cc;
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
                     border-radius: ${20*this.tilesZoom}px;
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
                     color: white;
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
                 }
                 .search-jumper-tips.draging {
                     cursor: grabbing;
                     transition: none;
                 }
                 .search-jumper-tips.draging * {
                     pointer-events: none;
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
                     ${c.prefConfig.noAni?"":"transition:opacity 0.25s ease;"}
                     scrollbar-width: none;
                     box-sizing: content-box;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     z-index: 1;
                 }
                 #search-jumper .search-jumper-type:hover>.sitelist {
                     pointer-events: all;
                     opacity: 1;
                 }
                 #search-jumper .sitelist>.sitelistCon {
                     margin: 10px;
                     border-radius: 10px;
                     box-shadow: 0px 0px 10px 0px #7a7a7a;
                     padding: 0 0 10px 0;
                     background: #ffffffee;
                     opacity: 1;
                     border: 0;
                 }
                 #search-jumper .sitelist>.sitelistCon:hover {
                     opacity: 1;
                 }
                 #search-jumper .sitelist::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper .sitelist>.sitelistCon>div {
                     padding: 0 10px;
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
                 #search-jumper .sitelist a>img {
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
                     color: #6b6e74;
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
                     color: #565656;
                     text-align: center;
                     font-size: 16px;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     font-weight: bold;
                     background: #f6f6f6;
                     border-radius: 10px 10px 0 0;
                     overflow: hidden;
                     white-space: nowrap;
                     text-overflow: ellipsis;
                     padding: 3px 10px;
                     position: sticky;
                     top: 0;
                     pointer-events: none;
                     margin: -1px 0 0 0;
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
                     z-index: 2147483647;
                     pointer-events: none;
                     position: fixed;
                     font-size: ${35*this.tipsZoom}px;
                     background: #f5f5f5f0;
                     border-radius: ${10*this.tipsZoom}px!important;
                     padding: 6px;
                     box-shadow: 0px 0px 10px 0px #000;
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
                     font-family: Roboto,arial,sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     cursor: grab;
                     max-height: 80vh;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
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
                     }
                     #search-jumper-alllist>.timeInAll, #search-jumper-alllist>.dayInAll {
                         margin: 10px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                         width: calc(50vw - 45px);
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                         width: 100px;
                         margin-left: 68px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a>img {
                         margin-left: 0;
                     }
                 }
                 @media screen and (max-width: 380px) {
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                         width: calc(100vw - 60px);
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                         width: calc(100vw - 150px);
                         margin-left: 85px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a+p {
                         width: calc(100vw - 60px);
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
                     /* \u7AD9\u70B9\u5217\u8868 */
                     #search-jumper .sitelist > .sitelistCon > p {
                         background-color: #252B32 !important;
                     }
                     #search-jumper.search-jumper-showall #filterSites {
                         background-color: #2a282cc0;
                     }
                     #search-jumper.search-jumper-showall #filterSites>input,
                     #search-jumper.search-jumper-showall #filterSites>textarea {
                         background-color: #000000;
                         color: white;
                     }

                     #search-jumper .sitelist > .sitelistCon {
                         background-color: #1C2127ee !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > div:hover {
                         background-color: #283C57 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > p,
                     #search-jumper .sitelist a > p {
                         color: #DADADA !important;
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
                         background-color: #181C20e0 !important;
                     }

                     .search-jumper-historylist>a.search-jumper-btn {
                         filter: drop-shadow(0px 0px 3px #ffffff50);
                     }

                     .search-jumper-showall a.search-jumper-word,
                     .search-jumper-showall a.search-jumper-word > span {
                         background-color: #292A2D !important;
                         border-radius: 20px !important;
                     }

                     .search-jumper-tips {
                         background-color: #3F4042f0;
                         color: #DADADA;
                     }
                     .search-jumper-tips>*:not(font) {
                         color: white;
                     }

                     .search-jumper-showall a.search-jumper-word > span {
                         color: #DADADA !important;
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
                     font-style: normal;
                     box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
                     border-radius: 3px;
                     text-decoration: none;
                     padding: 1px 0;
                     -webkit-text-fill-color: initial;
                     text-shadow: initial;
                     min-width: initial;
                     display: inline;
                     margin: inherit;
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
                `,c.prefConfig.cssText&&(Et+=c.prefConfig.cssText);let t=document.createElement("span");t.className="search-jumper-logo",lt=document.createElement("span"),lt.innerHTML=ee(pi),lt.className="search-jumper-btn",t.addEventListener("mouseenter",B=>{this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}),t.appendChild(lt);let r=document.createElement("span");r.className="search-jumper-searchBar",r.appendChild(t);let i=document.createElement("div");i.id="search-jumper",i.style.display="none",i.className="search-jumper-searchBarCon",i.appendChild(r),i.setAttribute("translate","no");let s=document.createElement("div");s.id="search-jumper-alllist",i.appendChild(s),this.alllist=s;let n=document.createElement("span");n.className="groupTab",i.appendChild(n),this.groupTab=n;let a=document.createElement("div");a.className="search-jumper-showallBg",i.appendChild(a);let o=document.createElement("div");o.className="sitelistBox",s.appendChild(o),this.sitelistBox=o;const p=/#[^\s#]+/g;o.addEventListener("mouseover",B=>{if(!s.classList.contains("new-mode"))return;let b=B.target;b.parentNode&&b.parentNode.dataset.name&&(b=b.parentNode);let P=b.title;if(!b.dataset.name||!P||b.initedTag)return;let D=document.createElement("p"),N=P.match(p);N&&(N.forEach(A=>{let Z=document.createElement("span");Z.innerText=A.slice(1),Z.addEventListener("click",ue=>{e.searchInput.value=A,e.searchInput.dispatchEvent(new CustomEvent("input"))}),D.appendChild(Z)}),b.appendChild(D)),b.initedTag=!0});let d=document.createElement("span");d.className="timeInAll",s.appendChild(d),this.timeInAll=d,this.modeSwitch=document.createElement("div"),this.modeSwitch.className="modeSwitch",this.modeSwitch.innerHTML=ee('<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect height="450" width="520" y="287" x="253" fill="#fff"></rect><path d="m511.8,64.2c-247.5,0 -448.2,200.7 -448.2,448.2s200.7,448.2 448.2,448.2s448.2,-200.6 448.2,-448.2s-200.7,-448.2 -448.2,-448.2zm-260.4,353.9c0,-7.8 6.3,-14.2 14.2,-14.2l315.6,0l0,-102.5c0,-12.3 14.7,-18.8 23.7,-10.4l165.1,151.7c9.5,8.7 3.3,24.6 -9.6,24.6l-495,0c-7.8,0 -14.2,-6.3 -14.2,-14.2l0,-35l0.2,0zm523.2,188.5c0,7.8 -6.3,14.2 -14.2,14.2l-315.5,0l0,102.6c0,12.3 -14.7,18.8 -23.7,10.4l-165.2,-151.8c-9.5,-8.7 -3.3,-24.6 9.6,-24.6l495,0c7.8,0 14.2,6.3 14.2,14.2l0,35l-0.2,0z"></path></svg>'),s.appendChild(this.modeSwitch),this.modeSwitch.addEventListener("click",B=>{B.preventDefault(),B.stopPropagation(),s.classList.toggle("new-mode"),s.classList.remove("showbg"),q.setItem("allPageNewMode",s.classList.contains("new-mode"))}),this.modeSwitch.addEventListener("mouseenter",B=>{Ze&&(B.preventDefault(),B.stopPropagation(),s.classList.add("showbg"))}),this.modeSwitch.addEventListener("mouseleave",B=>{Ze&&(B.preventDefault(),B.stopPropagation(),s.classList.remove("showbg"))}),this.modeSwitch.addEventListener("contextmenu",B=>{Ze&&(B.preventDefault(),B.stopPropagation(),s.classList.remove("showbg"),ge(Ze,{active:!0,insert:!0}))}),Hi&&s.classList.add("new-mode");let u=document.createElement("span");u.className="dayInAll",s.appendChild(u),this.dayInAll=u,s.addEventListener(Mt(),B=>{if(e.tips.style.display="none",clearTimeout(e.requestShowTipsTimer),!(B.target!=s&&B.target!=a&&B.target!=o)&&!s.classList.contains("new-mode")){var b,P;if(B.type!=="wheel"){var D=0,N=0;typeof B.axis=="number"?B.axis==2?N=B.detail:D=B.detail:typeof B.wheelDeltaY>"u"||B.wheelDeltaY!=0?N=-B.wheelDelta/40:D=-B.wheelDelta/40,P=N,b=D}else b=B.deltaX,P=B.deltaY;B.preventDefault(),B.stopPropagation(),s.scrollLeft+=P}},{passive:!1,capture:!1});let f=document.createElement("span");f.innerHTML=ee(pi),f.className="search-jumper-btn",f.addEventListener("click",B=>{ge(Ae,{active:!0,insert:!0})}),s.appendChild(f);let h=document.createElement("div");h.className="search-jumper-historylistcon",s.appendChild(h);let m=document.createElement("div");if(m.className="search-jumper-historylist",h.appendChild(m),this.historylist=m,r.addEventListener("mouseenter",B=>{r.classList.contains("grabbing")||(this.hideTimeout&&clearTimeout(this.hideTimeout),this.checkScroll(!0),c.prefConfig.mouseLeaveToHide&&r.classList.remove("initShow"))},!1),r.addEventListener("mouseleave",B=>{if(c.prefConfig.mouseLeaveToHide){if(r.classList.contains("grabbing"))return;e.waitForHide()}e.preList&&(e.preList.style.visibility="hidden",e.listArrow.style.cssText="")},!1),this.touched=!0,c.prefConfig.initShow?r.classList.add("initShow"):this.touched=!1,c.prefConfig.minSizeMode&&(r.classList.add("minSizeMode"),r.classList.add("minSizeModeClose")),Wt&&!c.prefConfig.resizePage){let B=P=>{this.touched=!1,r.classList.remove("initShow")},b=P=>{this.touched||this.funcKeyCall||(this.touched=!0,r.classList.add("disable-pointer"),P.stopPropagation(),setTimeout(()=>{r.classList.remove("disable-pointer")},250))};_(document).addEventListener("touchstart",B,{passive:!0,capture:!1}),r.addEventListener("touchstart",b,{passive:!1,capture:!0})}this.bar=r,this.con=i;let y=document.createElement("span");y.className="search-jumper-tips",y.style.opacity=0,i.appendChild(y),y.addEventListener("mouseenter",B=>{e.hideTimeout&&clearTimeout(e.hideTimeout)},!1),y.addEventListener("click",B=>{let b=B.target.dataset,P=B.target.innerText;if(b){if(typeof b.read<"u"){let D=new SpeechSynthesisUtterance("");D.volume=b.volume||1,D.rate=b.rate||1,D.pitch=b.pitch||1,D.lang=b.lang||"",D.text=b.read||P,window.speechSynthesis.speak(D)}typeof b.copy<"u"&&Oe(b.copy||P),b.search&&(Nt=P,e.searchBySiteName(b.search)),typeof b.paste<"u"&&M&&(/INPUT|TEXTAREA/i.test(M.nodeName)&&M.getAttribute("aria-readonly")!="true"||M.contentEditable=="true")&&Ot(M,b.paste||P),typeof b.close<"u"&&(e.tips.style.opacity=0,e.tips.style.display="none",e.tips.innerHTML=ee(""))}},!1);let C,j,x=B=>{let b=ht(B)-C.x,P=dt(B)-C.y;Math.abs(b)+Math.abs(P)<5||(y.style.right===""?y.style.setProperty("left",j.left+b+"px","important"):y.style.setProperty("right",j.right-b+"px","important"),y.style.bottom===""?y.style.setProperty("top",j.top+P+"px","important"):y.style.setProperty("bottom",j.bottom-P+"px","important"),y.classList.add("draging"))},L=B=>{document.removeEventListener("mouseup",L,!1),document.removeEventListener("mousemove",x,!1),document.removeEventListener("touchend",L,!1),document.removeEventListener("touchmove",x,!1),y.classList.remove("draging")},$=(B,b)=>{if(!B.target||B.target!==y&&typeof B.target.dataset.drag>"u")return;B.preventDefault(),B.stopPropagation(),C={x:ht(B),y:dt(B)};let P=getComputedStyle(y);j={left:parseFloat(P.left),right:parseFloat(P.right),top:parseFloat(P.top),bottom:parseFloat(P.bottom)},b&&b()};y.addEventListener("mousedown",B=>{$(B,()=>{document.addEventListener("mouseup",L,!1),document.addEventListener("mousemove",x,!1)})},!1),y.addEventListener("touchstart",B=>{$(B,()=>{document.addEventListener("touchend",L,!1),document.addEventListener("touchmove",x,!1)})},{passive:!1,capture:!1}),this.tips=y;let T=document.createElement("div");T.className="searchJumperNavBar",T.style.display="none",T.innerHTML=ee(`
                  <svg class="closeNavBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close navigation</title>${zi}</svg>
                  <div class="minNavBtn" title="Minimize navigation">-</div>
                  <div id="navMarks"></div>
                  <div class="maxNavBtn" title="Restore input"><img src="${ut}" /></div>
                  <div class="navPointer">></div>
                `),i.appendChild(T);let U=document.createElement("span");U.title=E("expand"),U.className="searchJumperExpand search-jumper-btn",U.innerHTML=ee(`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect height="450" width="600" y="300" x="200" fill="#fff"></rect><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 640L240 432l45.6-45.6L512 613.6l226.4-226.4 45.6 45.6L512 704z"></path></svg>
                `),this.searchJumperExpand=U,this.navMarks=T.querySelector("#navMarks"),this.closeNavBtn=T.querySelector(".closeNavBtn"),this.minNavBtn=T.querySelector(".minNavBtn"),this.maxNavBtn=T.querySelector(".maxNavBtn"),this.searchJumperNavBar=T,this.navPointer=T.querySelector(".navPointer"),this.navPointer.style.display="none";let z=document.createElement("div");z.className="search-jumper-input",z.innerHTML=ee(`<span class="closeBtn">\xD7</span>
                <input type="radio" id="filterSitesTab" name="tab" ${c.prefConfig.defaultFindTab?"":'checked="checked"'} />
                <label for="filterSitesTab">${E("filterSites")}</label>
                <input type="radio" id="searchInPageTab" name="tab" ${c.prefConfig.defaultFindTab?'checked="checked"':""} />
                <label for="searchInPageTab">${E("searchInPage")}</label>
                <div class="line"></div>
                <div class="content-container">
                  <div class="inputGroup" id="filterSites">
                    <input spellcheck="false" id="searchJumperInput" autocomplete="on" title="${E("inputTitle")}" placeholder="${E("inputPlaceholder")}" list="filterGlob" />
                    <input spellcheck="false" id="searchJumperInputKeyWords" autocomplete="on" placeholder="${E("inputKeywords")}" list="suggest" />
                    <datalist id="filterGlob">
                    </datalist>
                    <datalist id="suggest">
                    </datalist>
                    <span class="search-jumper-lock-input"></span>
                    <span class="svgBtns">
                      <svg id="copyEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("copyEleBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="openLinkBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("openLinkBtn")}</title><path d="M429.013333 640A32 32 0 0 1 384 594.986667l37.76-37.76-22.826667-22.613334-135.68 135.68 90.453334 90.453334 135.68-135.68-22.613334-22.613334zM534.613333 398.933333l22.613334 22.613334L594.986667 384A32 32 0 0 1 640 429.013333l-37.76 37.76 22.613333 22.613334 135.68-135.68-90.453333-90.453334z"/><path d="M512 21.333333a490.666667 490.666667 0 1 0 490.666667 490.666667A490.666667 490.666667 0 0 0 512 21.333333z m316.8 354.986667l-181.12 181.12a32 32 0 0 1-45.226667 0L557.226667 512 512 557.226667l45.226667 45.226666a32 32 0 0 1 0 45.226667l-181.12 181.12a32 32 0 0 1-45.226667 0l-135.68-135.68a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0L466.773333 512 512 466.773333l-45.226667-45.226666a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0l135.68 135.68a32 32 0 0 1 0 45.226667z"/></svg>
                      <svg id="maxEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("maxEleBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="minEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("minEleBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="pickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("multiPickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                    </span>
                  </div>
                  <div class="inputGroup" id="searchInPage">
                    <span class="lockWords"></span>
                    <input spellcheck="false" id="searchJumperInPageInput" autocomplete="on" title="${E("inPageTips")}" placeholder="${E("inPagePlaceholder")}" />
                    <span class="svgBtns">
                      <svg id="editBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("editBtn")}</title><path d="M928 365.664a32 32 0 0 0-32 32V864a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h429.6a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v704a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V397.664a32 32 0 0 0-32-32z"></path><path d="M231.616 696.416a38.4 38.4 0 0 0 44.256 53.792l148-38.368L950.496 185.248 814.72 49.472 290.432 573.76l-58.816 122.656z m111.808-85.12L814.72 140l45.248 45.248-468.992 468.992-77.824 20.16 30.272-63.104z"></path></svg>
                      <svg id="addWord" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("addWord")}</title><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z"></path></svg>
                      <svg id="emptyBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("emptyBtn")}</title><path d="m159.45829,231.40004l-48.83334,0a36.625,34.1375 0 0 1 0,-68.275l805.75004,0a36.625,34.1375 0 0 1 0,68.275l-683.6667,0l0,603.09581a61.04167,56.89583 0 0 0 61.04167,56.89584l439.50002,0a61.04167,56.89583 0 0 0 61.04167,-56.89584l0,-500.68332a36.625,34.1375 0 0 1 73.25,0l0,500.68332c0,69.12844 -60.12604,125.17084 -134.29167,125.17084l-439.50002,0c-74.16563,0 -134.29167,-56.0424 -134.29167,-125.17084l0,-603.09581zm256.37501,-113.79167a36.625,34.1375 0 0 1 0,-68.275l195.33334,0a36.625,34.1375 0 0 1 0,68.275l-195.33334,0zm-36.625,307.23749a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999zm195.33334,0a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999z"/></svg>
                      <svg id="copyInPageBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("copyInPageBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="wordModeBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("wordModeBtn")}</title><path d="M832 128c38.4 0 64 25.6 64 64v640c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V192c0-38.4 25.6-64 64-64h640m0-64H192c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z"></path><path d="M736 812.8h-448c-19.2 0-32-12.8-32-32s12.8-32 32-32h448c19.2 0 32 12.8 32 32 0 12.8-12.8 32-32 32zM320 704c-19.2-6.4-25.6-25.6-19.2-44.8l185.6-454.4c6.4-12.8 25.6-19.2 38.4-12.8 19.2 6.4 25.6 25.6 19.2 44.8l-185.6 454.4c-6.4 12.8-25.6 19.2-38.4 12.8z"></path><path d="M704 691.2c19.2-6.4 25.6-25.6 19.2-44.8L544 211.2c-6.4-19.2-25.6-25.6-38.4-19.2-19.2 6.4-25.6 25.6-19.2 38.4l179.2 441.6c6.4 19.2 25.6 25.6 38.4 19.2z"></path><path d="M371.2 492.8h256v64h-256z"></path></svg>
                      <svg id="recoverBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("recoverBtn")}</title><path d="M502.26 289.06c-0.02 16.95 13.26 30.94 30.18 31.8 123.47 8.79 236.97 70.94 310.89 170.21 73.92 99.28 100.91 225.84 73.93 346.65-41.65-181.74-195.38-316.12-381.05-333.08-8.89-0.6-17.63 2.55-24.09 8.7a31.798 31.798 0 0 0-9.86 23.64v85.15a32.343 32.343 0 0 1-50.67 26.41L114.21 413.02a32.341 32.341 0 0 1-14.46-26.95c0-10.84 5.43-20.96 14.46-26.95L451.6 124.68a32.358 32.358 0 0 1 33.28-2.03 32.355 32.355 0 0 1 17.39 28.44v137.97h-0.01z"></path></svg>
                      <svg id="saveRuleBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("saveRuleBtn")}</title><path d="M579.7 291.4c18.8 0 34.1-15.3 34.1-34.1v-34.1c0-18.8-15.4-34.1-34.1-34.1-18.8 0-34.1 15.3-34.1 34.1v34.1c0 18.7 15.4 34.1 34.1 34.1zM944.7 216.3L808.2 79.9c-6.8-6.8-15.3-10.2-23.9-10.2H170.4c-56.3 0-102.3 46-102.3 102.3v682.1c0 56.3 46 102.3 102.3 102.3H852.5c56.3 0 102.3-46 102.3-102.3V240.2c0.1-8.5-3.3-17-10.1-23.9zM358 137.9h307v182.5c0 11.9-10.2 22.2-22.2 22.2H380.2c-11.9 0-22.2-10.2-22.2-22.2V137.9z m358.1 750.3H306.9V652.9c0-20.5 17.1-37.5 37.5-37.5h334.2c20.5 0 37.5 17 37.5 37.5v235.3z m170.6-34.1c0 18.8-15.3 34.1-34.1 34.1h-66.5V652.9c0-58-47.7-105.7-105.7-105.7h-336c-58 0-105.7 47.7-105.7 105.7v235.3h-68.2c-18.8 0-34.1-15.3-34.1-34.1V172c0-18.8 15.3-34.1 34.1-34.1h119.4v182.5c0 49.5 40.9 90.4 90.4 90.4h262.6c49.5 0 90.4-40.9 90.4-90.4V137.9h37.5l116 116v600.2z"></path></svg>
                      <svg id="pinBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("pinBtn")}</title><path d="m674.8822,92.83803a81.61801,81.04246 0 0 1 25.30158,17.09996l213.75757,212.46631a81.61801,81.04246 0 0 1 -24.70304,131.36982l-75.74151,33.30845l-142.09696,141.257l-11.26329,155.3854a81.61801,81.04246 0 0 1 -139.13151,51.46196l-137.98885,-137.15085l-235.14149,234.56388l-57.83996,-57.18896l235.27751,-234.69896l-142.7499,-141.85131a81.61801,81.04246 0 0 1 51.6642,-138.09635l160.95072,-11.94025l139.5668,-138.74469l32.78324,-75.09935a81.61801,81.04246 0 0 1 107.35489,-42.14208zm-32.45675,74.36997l-38.95901,89.22775l-171.94193,170.99958l-191.25821,14.1284l338.46989,336.3262l13.43977,-185.47917l174.33607,-173.32279l89.69819,-39.44067l-213.78477,-212.43929z"></path></svg>
                      <svg id="locBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("locBtn")}</title><path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"></path></svg>
                    </span>
                    <div id="addons"></div>
                  </div>
                </div>
                <div id="rightSizeChange"></div>
                `),i.appendChild(z),this.searchInputDiv=z,this.searchInput=z.querySelector("#searchJumperInput"),this.searchJumperInputKeyWords=z.querySelector("#searchJumperInputKeyWords"),this.searchLockInput=z.querySelector(".search-jumper-lock-input"),this.searchJumperInPageInput=z.querySelector("#searchJumperInPageInput"),this.pickerBtn=z.querySelector("#pickerBtn"),this.minEleBtn=z.querySelector("#minEleBtn"),this.maxEleBtn=z.querySelector("#maxEleBtn"),this.copyEleBtn=z.querySelector("#copyEleBtn"),this.openLinkBtn=z.querySelector("#openLinkBtn"),this.editBtn=z.querySelector("#editBtn"),this.addWord=z.querySelector("#addWord"),this.recoverBtn=z.querySelector("#recoverBtn"),this.wordModeBtn=z.querySelector("#wordModeBtn"),this.saveRuleBtn=z.querySelector("#saveRuleBtn"),this.pinBtn=z.querySelector("#pinBtn"),this.locBtn=z.querySelector("#locBtn"),this.emptyBtn=z.querySelector("#emptyBtn"),this.copyInPageBtn=z.querySelector("#copyInPageBtn"),this.closeBtn=z.querySelector(".closeBtn"),this.filterSites=z.querySelector("#filterSites"),this.filterSitesTab=z.querySelector("#filterSitesTab"),this.searchInPageTab=z.querySelector("#searchInPageTab"),this.searchInPageLockWords=z.querySelector("#searchInPage>.lockWords"),this.contentContainer=z.querySelector(".content-container"),this.rightSizeChange=z.querySelector("#rightSizeChange"),this.filterGlob=z.querySelector("#filterGlob"),this.suggestDatalist=z.querySelector("#suggest"),this.addonsList=z.querySelector("#addons"),this.fakeTextareas=new Map,this.addonCheckboxDict={}}showInPageSearch(){this.searchInPageTab.checked=!0,this.showSearchInput(),this.initSetInPageWords(),this.searchJumperInPageInput.value="",this.initShowSearchInput=!0}showFilterSearch(){this.filterSitesTab.checked=!0,this.showSearchInput()}initSetInPageWords(){if(this.searchInPageTab.checked&&!this.searchJumperInPageInput.value){let e=De()||this.searchJumperInputKeyWords.value.replace(/^\*/,"")||it();if(e)try{e=decodeURIComponent(e)}catch{}if(this.lockWords&&this.lockWords.indexOf(e)!==-1)return;this.searchJumperInPageInput.value=e||Ne,this.lockWords||this.submitIgnoreSpace(this.searchJumperInPageInput.value)}}anylizeInPageWords(e,t){if(!e)return[];let r=this,i=[];if(this.lockWords||(e.indexOf("$c")===0&&e.length>2?e=e.substr(3).trim():e.indexOf("$o")===0&&(e=e.substr(2).trim())),this.splitSep){let n=this.wordModeBtn.classList.contains("checked")?new RegExp(`[\\${this.splitSep} ]`):this.splitSep;e.split(n).sort((a,o)=>o.length-a.length).forEach(a=>{let o=a;if(a=a.trim(),!a||t&&(a.length<(c.prefConfig.limitInPageLen||1)||(c.prefConfig.ignoreWords||[]).includes(a.toLowerCase())))return;let p="",d="",u=!1,f,h,m,y=!1,C="",j=/\$t{(.*?)}($|\$)/,x=a.match(j),L=0;if(x)if(p=x[1],a=a.replace(j,"$2"),p=="\\$popup")p="$popup";else if(p=="\\@popup")p="@popup";else{let N=p.match(/^[\$@]popup(\((.*)\))?$/);N&&(p="",u=!0,N[1]&&(L=N[2]||"1"))}let $=/\$p{(.*?)}($|\$)/,T=a.match($);T&&(f=parseInt(T[1])||0,a=a.replace($,"$2"));let U=/\$in{(.*?)}($|\$)/,z=a.match(U);z&&(m=z[1]||"",a=a.replace(U,"$2"));let B=/\$s{(.*?)}($|\$)/,b=a.match(B);if(b){let N=b[1],A="";b=b[1].match(/(.*?);(.*)/),b&&(N=b[1],A=b[2]),d=r.getHighlightStyle(r.curWordIndex,N,A),a=a.replace(B,"$2")}else d=r.getHighlightStyle(r.curWordIndex,"","");let P="";if(a.indexOf("@")===0){P=a;let N=c.prefConfig.inPageRule&&c.prefConfig.inPageRule[a];N&&(a=N)}else a=a.replace(/^\\@/,"@");let D=a.match(/^\/(.*)\/([il]*)($|\$)/);D&&(y=!0,a=D[1],C=D[2].indexOf("i")!=-1?"i":"",h=D[2].indexOf("l")!=-1),P||(P=a),!r.highlightSpans[P]&&(i.push({content:a,showWords:P,isRe:y,link:h,reCase:C,title:p,style:d,oriWord:o,hideParent:f,inRange:m,popup:u,showTips:L,init:t}),r.curWordIndex++)})}else{this.curWordIndex=0;let s=(this.lockWords||"").replace(/^\$o/,"")+e;i=[{content:s,showWords:s,isRe:!1,reCase:"",title:"",style:r.getHighlightStyle(r.curWordIndex,"",""),init:t}]}return i}submitInPageWords(e){let t=this,r=this.searchJumperInPageInput.value,i=[];if(!r){if(!this.lockWords)this.highlight("");else{this.highlight("insert");for(let n in this.highlightSpans){let a=this.highlightSpans[n],o=this.marks[n];this.setHighlightSpan(a,0,o)}}return i}this.initHighlight=!!e,this.initHighlight&&setTimeout(()=>{this.initHighlight=!1},500),this.lockWords||(r.indexOf("$c")===0&&r.length>2?this.splitSep=r.substr(2,1):r.indexOf("$o")===0?this.splitSep=null:this.splitSep="\u25CE",this.curWordIndex=0),this.searchJumperInPageInput.value="";let s=this.anylizeInPageWords(r,this.initHighlight);return!s||s.length==0||(this.lockWords?this.lockWords+=(this.lockWords.indexOf(this.splitSep)===this.lockWords.length-this.splitSep.length?"":this.splitSep)+r:this.lockWords=r,this.splitSep||(this.searchInPageLockWords.innerHTML=ee(),this.highlight("")),this.highlight(s),s.forEach(n=>{if(!n)return;let a=document.createElement("span");a.innerHTML=ee(n.showWords),a.title=n.title?JSON.parse('"'+n.title+'"'):n.showWords;let o=n.style.match(/background: *(#?\w+)/);o&&o[1].indexOf("unset")===-1&&(a.style.background=o[1]);let p=n.style.match(/color: *(#?\w+)/);p&&(a.style.color=p[1]),a.addEventListener("click",m=>(m.stopPropagation(),m.preventDefault(),!1)),a.oncontextmenu=m=>{m.preventDefault()},a.addEventListener("dblclick",m=>{m.stopPropagation(),m.preventDefault(),m.target.nodeName.toUpperCase()!=="EM"&&(m.ctrlKey||m.shiftKey||m.altKey||m.metaKey||this.lockWords.indexOf(n.oriWord)!==-1&&this.showModifyWindow(n,a))},!0),a.addEventListener("mousedown",m=>{m.button===0?this.focusHighlightByText(n.showWords,!0,a):m.button===2&&this.focusHighlightByText(n.showWords,!1,a)});let d=!1;a.addEventListener(Mt(),m=>{if(m.preventDefault(),m.stopPropagation(),d)return;d=!0,setTimeout(()=>{d=!1},100);let y;if(m.type!=="wheel"){let C=0;typeof m.axis=="number"?m.axis==2&&(C=m.detail):(typeof m.wheelDeltaY>"u"||m.wheelDeltaY!=0)&&(C=-m.wheelDelta/40),y=C}else y=m.deltaY;this.focusHighlightByText(n.showWords,y>0,a)},{passive:!1,capture:!1}),a.addEventListener("editword",m=>{a.parentNode.removeChild(a),this.removeHighlightWord(n),this.searchJumperInPageInput.value=n.content});let u=document.createElement("div");u.addEventListener("mousedown",m=>{m.stopPropagation(),m.preventDefault(),a.parentNode.removeChild(a),this.removeHighlightWord(n)}),u.className="lockWordTool",u.innerHTML=ee(`<span title="${E("removeBtn")}">\xD7</span>`),a.appendChild(u);let f=document.createElement("div");f.addEventListener("mousedown",m=>{m.stopPropagation(),m.preventDefault(),this.lockWords.indexOf(n.oriWord)!==-1&&this.showModifyWindow(n,a)}),f.className="lockWordTool modifyBtn",f.innerHTML=ee("<span>+</span>"),a.appendChild(f);let h=this.marks[n.showWords];this.setHighlightSpan(a,-1,h),this.highlightSpans[n.showWords]=a,this.searchInPageLockWords.appendChild(a),i.push(a)}),this.searchInPageLockWords.scrollTop<=0&&(this.searchInPageLockWords.scrollTop=this.searchInPageLockWords.scrollHeight),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",this.navMarks.innerHTML&&this.con.style.display==="none"&&(this.con.style.display="")),i}async showCustomInputWindow(e,t){return new Promise(r=>{this.customInputCallback=t;let i=()=>{let o=this.finalSearch.dataset.url;[].forEach.call(this.customGroup.children,p=>{let d=p.value;if(p.className=="select")d=p.children[0].value;else if(/^DIV$/i.test(p.nodeName))return;o=o.replace("\u25CE",d||"")}),this.finalSearch.value=o};if(!this.customInputFrame){let p=Me(`
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
                             border: 1px solid #afb3b6;
                             border-radius: 10px;
                             opacity: 0.95;
                             filter: alpha(opacity=95);
                             box-shadow: 5px 5px 20px 0px #000;
                             color: #6e7070;
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
                             background: #458bd1!important;
                             display: flex!important;
                             align-items: center!important;
                             justify-content: center!important;
                             color: white!important;
                             font-weight: bold;
                             font-size: 18px!important;
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
                         }
                         .customInputFrame-buttons {
                             text-align: center;
                             margin-bottom: 5px;
                             display: flex;
                             justify-content: space-evenly;
                         }
                         .customInputFrame-buttons>button {
                             width: 32%;
                             font-size: 16px;
                             cursor: pointer;
                             border: 1px solid #1976d2;
                             border-radius: 4px;
                             transition: all .3s;
                             color: #fff;
                             background-color: #458bd1;
                             line-height: 25px;
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
                             border: 1px solid rgba(0, 0, 0, 0.23);
                             border-radius: 4px;
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
                             background-color: black!important;
                             color: #d5d5d5!important;
                           }
                           .customInputFrame-body input:focus,
                           .customInputFrame-body textarea:focus,
                           .customInputFrame-body .select:focus {
                             background-color: #1e1e1e!important;
                           }
                           .customInputFrame-body input,
                           .customInputFrame-body textarea,
                           .customInputFrame-body .select {
                             border: 1px solid rgb(255 255 255 / 36%)!important;
                             background-color: #0c0c0c!important;
                           }
                           .customInputFrame-title,
                           .customInputFrame-buttons>button {
                             background: #245d8f!important;
                           }
                           .customInputFrame-body .select>.options {
                             border: 1px solid rgb(255 255 255 / 36%)!important;
                             background-color: black;
                             color: #d5d5d5;
                           }
                           .customInputFrame-body .select>.options>p:hover {
                             background: #1e1e1e;
                           }
                         }
                        `),d=document.createElement("div");this.customInputFrame=d,d.innerHTML=ee(`
                         <div class="customInputFrame-body">
                             <a href="${Ae}" class="customInputFrame-title" target="_blank">
                                 <img width="32px" height="32px" src="${ut}" />${E("customInputFrame")}
                             </a>
                             <div id="customGroup">
                             </div>
                             <div class="customInputFrame-input-title">${E("finalSearch")}</div>
                             <textarea name="finalSearch" type="text"></textarea>
                             <div class="customInputFrame-buttons">
                                 <button id="cancel" type="button">${E("cancel")}</button>
                                 <button id="customSubmit" type="button">${E("customSubmit")}</button>
                             </div>
                         </div>
                        `),qe||d.appendChild(p),d.querySelector("#cancel").addEventListener("click",y=>{d.parentNode&&d.parentNode.removeChild(d),r("")}),d.addEventListener("keydown",y=>{y.keyCode==13&&m.click()});let f=this.customInputFrame.querySelector("#customGroup");this.customGroup=f;let h=this.customInputFrame.querySelector("[name='finalSearch']");this.finalSearch=h,h.addEventListener("click",y=>{i()});let m=d.querySelector("#customSubmit");m.addEventListener("click",y=>{i(),h.value&&this.customInputCallback&&this.customInputCallback(h.value),r(h.value),d.parentNode&&d.parentNode.removeChild(d)})}this.customInputFrame.parentNode&&this.customInputFrame.parentNode.removeChild(this.customInputFrame),this.customGroup.innerHTML=ee();let s=e,n=s.match(/%input{(.*?[^\\])}/);for(;n;){let o=n[1];if(/^".*","/.test(o)?o=o.substr(1,o.length-2).split('","'):o=o.replace(/\\,/g,"\u25CESJ").split(",").map(p=>p.replace(/◎SJ/g,",")),o.length===1){o=o[0].replace(/\\\|/g,"\u25CESJ").split("|").map(u=>u.replace(/◎SJ/g,"|"));let p=document.createElement("div");p.className="customInputFrame-input-title",p.innerText=o[0],this.customGroup.appendChild(p);let d=document.createElement("input");d.type="text",o.length>1&&(d.title=o[1]),this.customGroup.appendChild(d)}else if(o.length>=2){let p=o[0].replace(/\\}/g,"}");/^'.*'\/'/.test(p)?p=p.substr(1,p.length-2).split("'/'"):p=p.replace(/\\\//g,"\u25CESJ").split("/").map(x=>x.replace(/◎SJ/g,"/"));let d=o.slice(1).join(",");/^'.*'\/'/.test(d)?d=d.substr(1,d.length-2).split("'/'"):d=d.replace(/\\\//g,"\u25CESJ").split("/").map(x=>x.replace(/◎SJ/g,"/"));let u=p.length===d.length+1,f=document.createElement("div");f.className="customInputFrame-input-title",f.innerText=p[0],this.customGroup.appendChild(f);let h=document.createElement("input");h.type="text";let m=document.createElement("div");m.className="select",m.appendChild(h);let y=document.createElement("p");y.innerText="Select option",m.appendChild(y);let C=document.createElement("div");C.className="options",m.appendChild(C);let j=document.createElement("p");j.setAttribute("value",""),j.innerHTML=ee("<b>Select option</b>"),C.appendChild(j),j.addEventListener("click",x=>{C.style.visibility="hidden",setTimeout(()=>{C.style.visibility=""},0),h.value="",y.innerText="Select option",i()});for(let x=0;x<d.length;x++){let L=d[x],$=document.createElement("p");if($.setAttribute("value",L),u){let T=p[x+1];T=T.replace(/\\\|/g,"\u25CESJ").split("|").map(U=>U.replace(/◎SJ/g,"|")),$.innerText=T[0],T.length>1&&($.title=T[1])}else $.innerText=L;$.addEventListener("click",T=>{C.style.visibility="hidden",setTimeout(()=>{C.style.visibility=""},0),h.value=$.getAttribute("value"),y.innerText="",i()}),C.appendChild($)}h.addEventListener("change",x=>{y.innerText=""}),m.addEventListener("mouseenter",x=>{m.focus(),C.style.marginTop=-this.customGroup.scrollTop+20+"px"}),this.customGroup.appendChild(m)}s=s.replace(n[0],"\u25CE"),n=s.match(/%input{(.*?[^\\])}/)}this.finalSearch.dataset.url=s,this.finalSearch.value=s.replace(/◎/g,""),this.addToShadow(this.customInputFrame);let a=this.customInputFrame.children[0];a.style.marginTop=-a.offsetHeight/2+"px"})}showModifyWindow(e,t){let r;if(this.modifyWord={},this.addNew=!e&&!t,!this.addNew){if(r=e.oriWord,!r)return;this.modifyWord=e,this.modifySpan=t}if(!this.modifyFrame){let h=Me(`
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
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                    }
                    .searchJumperModify-title {
                        background: #458bd1!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px!important;
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
                    }
                    .searchJumperModify-buttons {
                        text-align: center;
                        margin-bottom: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperModify-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
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
                        background-color: black!important;
                        color: #d5d5d5!important;
                      }
                      .searchJumperModify-body>input:focus,
                      .searchJumperModify-body>textarea:focus,
                      .searchJumperModify-body>select:focus {
                        background-color: #1e1e1e!important;
                      }
                      .searchJumperModify-body>input[type=text],
                      .searchJumperModify-body>input[type=number],
                      .searchJumperModify-body>textarea {
                        border: 1px solid rgb(255 255 255 / 36%)!important;
                      }
                      .searchJumperModify-title,
                      .searchJumperModify-buttons>button {
                        background: #245d8f!important;
                      }
                      #rangePickerBtn {
                        background: rgb(0 0 0 / 80%);
                        fill: white;
                      }
                    }
                    `),m=document.createElement("div");this.modifyFrame=m,m.id="searchJumperModifyWord",m.innerHTML=ee(`
                     <div class="searchJumperModify-body">
                         <a href="${Ae}" class="searchJumperModify-title" target="_blank">
                             <img onerror="this.style.display='none'" width="32px" height="32px" src="${ut}" />${E("modifyWord")}
                         </a>
                         <div class="searchJumperModify-input-title">${E("wordContent")}</div>
                         <input id="searchJumperHighlightWord" name="wordContent" placeholder="words" type="text"/>
                         <div class="searchJumperModify-checkGroup">
                             <input id="searchJumperModify-re" type="checkbox"/>
                             <label for="searchJumperModify-re">${E("re")}</label>
                             <input id="searchJumperModify-case" type="checkbox"/>
                             <label for="searchJumperModify-case">${E("ignoreCase")}</label>
                             <input id="searchJumperModify-link" type="checkbox"/>
                             <label for="searchJumperModify-link">${E("filterLink")}</label>
                         </div>
                         <div class="searchJumperModify-input-title">${E("wordHide")}</div>
                         <input name="wordHide" min="0" placeholder="${E("wordHideTips")}" type="number" />
                         <div class="searchJumperModify-input-title">${E("wordRange")}</div>
                         <input name="wordRange" placeholder="#main" type="text" />
                         <svg id="rangePickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                         <div class="searchJumperModify-input-title">${E("wordStyle")}</div>
                         <input name="wordStyle" placeholder="orange or #333333;color:red;" type="text" />
                         <div class="searchJumperModify-input-title">${E("wordTitle")}</div>
                         <textarea name="wordTitle" type="text" placeholder="Text comment, or @popup to popup, @popup(1) to popup 1st showTips, @popup(name) to popup showTips of target engine"></textarea>
                         <div class="searchJumperModify-buttons">
                             <button id="cancel" type="button">${E("cancel")}</button>
                             <button id="modify" type="button">${E("modify")}</button>
                         </div>
                     </div>
                    `),qe||m.appendChild(h),m.querySelector("#cancel").addEventListener("click",x=>{m.parentNode&&m.parentNode.removeChild(m)}),m.querySelector("#rangePickerBtn").addEventListener("click",x=>{ke.getSelector(L=>{a.value=L,m.style.display=""}),m.style.display="none"});let j=m.querySelector("#modify");this.modifyBtn=j,j.addEventListener("click",x=>{let L=i.value;if(this.splitSep&&(L=L.replaceAll(this.splitSep,"")),!L)return;let $=L!==this.modifyWord.showWords||d.checked!==this.modifyWord.isRe||u.checked!==this.modifyWord.link;p.checked&&L.indexOf("@")!==0&&(L=`/${L}/${d.checked?"i":""}${u.checked?"l":""}`);let T=o.value;T&&(this.splitSep&&(T=T.replaceAll(this.splitSep,"")),T=T>=0?T:0,L+=`$p{${T}}`);let U=s.value;U&&(this.splitSep&&(U=U.replaceAll(this.splitSep,"")),L+=`$s{${U}}`);let z=JSON.stringify(n.value).replace(/^"|"$/g,"");z&&(this.splitSep&&(z=z.replaceAll(this.splitSep,"")),L+=`$t{${z}}`);let B=a.value;B&&(this.splitSep&&(B=B.replaceAll(this.splitSep,"")),B!==this.modifyWord.inRange&&($=!0),L+=`$in{${B}}`),this.addNew?(this.wordModeBtn.classList.contains("checked")&&(this.wordModeBtn.classList.remove("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)),this.searchJumperInPageInput.value=L,this.submitInPageWords()):this.replaceWord(this.modifyWord,L,this.modifySpan,$),m.parentNode&&m.parentNode.removeChild(m)})}let i=this.modifyFrame.querySelector("[name='wordContent']"),s=this.modifyFrame.querySelector("[name='wordStyle']"),n=this.modifyFrame.querySelector("[name='wordTitle']"),a=this.modifyFrame.querySelector("[name='wordRange']"),o=this.modifyFrame.querySelector("[name='wordHide']"),p=this.modifyFrame.querySelector("#searchJumperModify-re"),d=this.modifyFrame.querySelector("#searchJumperModify-case"),u=this.modifyFrame.querySelector("#searchJumperModify-link");if(this.addNew)i.value="",s.value="",a.value="",o.value="",n.value="",p.checked=!1,d.checked=!1,u.checked=!1,this.modifyBtn.innerText=E("add");else{this.modifyBtn.innerText=E("modify");let f="",h=/\$s{(.*?)}($|\$)/,m=r.match(h);m&&(f=m[1]),i.value=e.showWords||"",s.value=f||"",a.value=e.inRange||"",p.checked=!!e.isRe,d.checked=!!e.reCase,u.checked=!!e.link,typeof e.hideParent<"u"&&(o.value=e.hideParent);try{e.popup?(n.value="@popup",e.showTips&&(n.value=`@popup(${e.showTips})`)):n.value=e.title!==e.showWords?JSON.parse('"'+e.title+'"'):""}catch(y){pe(y)}}this.addToShadow(this.modifyFrame)}replaceWord(e,t,r,i){if(i)r.parentNode&&r.parentNode.removeChild(r),this.removeHighlightWord(e),this.searchJumperInPageInput.value=t,this.submitInPageWords();else{let s="",n="",a=-1,o=/\$t{(.*?)}($|\$)/,p=t.match(o);p&&(s=p[1],s=JSON.parse('"'+s+'"')),e.title=s,r.title=s;let d=/\$s{(.*?)}($|\$)/,u=t.match(d);if(u){let y=u[1],C="";u=u[1].match(/(.*?);(.*)/),u&&(y=u[1],C=u[2]),n=this.getHighlightStyle(this.curWordIndex,y,C),e.style=n,r.style=n}let f=!1,h=/\$p{(.*?)}($|\$)/,m=t.match(h);m?(a=parseInt(m[1])||0,f=a!=e.hideParent):f=typeof e.hideParent<"u",f&&[].forEach.call(document.querySelectorAll(".searchJumper-hide"),y=>{y.dataset.content===e.showWords&&(y.classList.remove("searchJumper-hide"),y.style.display="",y.removeAttribute("data-content"))}),this.marks[e.showWords].forEach(y=>{if(y&&(y.title=s,n&&(y.style=n),f&&a!=-1)){let C=a,j=y.parentElement;for(;C-- >0&&j;)j=j.parentElement;j&&(j.dataset.content=e.showWords,j.classList.add("searchJumper-hide"),j.innerHTML=ee(""))}}),a==-1?delete e.hideParent:e.hideParent=a,this.lockWords=this.lockWords.replace(e.oriWord,t),e.oriWord=t}}removeHighlightWord(e){if(!this.lockWords||(this.splitSep||this.emptyInPageWords(),!e.oriWord)||this.lockWords.indexOf(e.oriWord)===-1)return;let t=this.lockWords.match(/^\$(c.|o)/),r,i=0;t=t?t[0]:"";let s=this.lockWords.replace(t,"").split(this.splitSep);if(r=s.indexOf(e.oriWord),this.wordModeBtn.classList.contains("checked")){r!=-1&&(s.splice(r,1),i=1);for(let a=0;a<s.length;a++){let o=s[a].split(/[ ]/);if(r=o.indexOf(e.oriWord),r!=-1)if(i++,i==1)o.splice(r,1),s[a]=o.join(" ");else break}this.lockWords=t+s.join(this.splitSep)}else{if(r<0)return;s.splice(r,1),i=s.indexOf(e.oriWord)!=-1?2:1,this.lockWords=t+s.join(this.splitSep)}if(delete this.highlightSpans[e.showWords],r=this.curHighlightWords.indexOf(e),r<0||(this.curHighlightWords.splice(r,1),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",i>1))return;this.marks[e.showWords].forEach(a=>{if(a.parentNode)if(a.dataset.block)a.parentNode&&a.parentNode.removeChild(a);else if(!/^MARK$/i.test(a.nodeName))a.classList.remove("searchJumper"),a.style.cssText=a.dataset.css||"",delete a.dataset.css;else{let o=document.createTextNode(a.firstChild.data);a.parentNode.replaceChild(o,a),o.parentNode.normalize()}}),delete this.marks[e.showWords];let n=[].slice.call(this.navMarks.children);[].forEach.call(n,a=>{a.dataset.content==e.showWords&&a.parentNode.removeChild(a)})}emptyInPageWords(){this.searchInPageLockWords.innerHTML=ee(),this.highlight("")}focusHighlightByText(e,t,r){let i=this.marks[e];if(!i||i.length===0)return;e!=this.focusText?(this.focusIndex=0,this.focusText=e):t?this.focusIndex!=i.length-1?this.focusIndex=this.focusIndex+1:this.focusIndex=0:this.focusIndex!=0?this.focusIndex=this.focusIndex-1:this.focusIndex=i.length-1;let s=this.focusIndex;if(s>=i.length&&(s=0),t)for(;(!i[s].offsetParent||i[s].dataset.type)&&(s!=i.length-1?s=s+1:s=0,s!=this.focusIndex););else for(;(!i[s].offsetParent||i[s].dataset.type)&&(s!=0?s=s-1:s=i.length-1,s!=this.focusIndex););this.focusIndex=s,this.focusHighlight(i[this.focusIndex]),this.setHighlightSpan(r,this.focusIndex,i)}getRect(e){let t=e.getBoundingClientRect(),r={left:t.left,top:t.top,width:t.width,height:t.height},i=e.ownerDocument&&e.ownerDocument.defaultView,s=i&&i.frameElement;for(;s;){const n=s.getBoundingClientRect();r.left+=n.left,r.top+=n.top,i=i.parent,s=i.frameElement}return r}focusHighlight(e){if(!e)return;this.focusMark&&this.focusMark.removeAttribute("data-current"),this.focusMark=e,this.wPosBar||(this.wPosBar=document.createElement("div"),this.hPosBar=document.createElement("div"),this.wPosBar.className="searchJumperPosBar searchJumperPosW",this.hPosBar.className="searchJumperPosBar searchJumperPosH"),this.wPosBar.parentNode||(this.addToShadow(this.wPosBar),this.addToShadow(this.hPosBar));let t=this.getRect(e);this.wPosBar.style.top=t.top+document.documentElement.scrollTop+_(document).scrollTop+"px",this.wPosBar.style.height=t.height+"px",this.hPosBar.style.left=t.left+"px",this.hPosBar.style.width=t.width+"px",this.wPosBar.style.animationName="",this.hPosBar.style.animationName="";let r=this;setTimeout(async()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),e.dataset.current=!0,r.wPosBar.style.animationName="fadeit",r.hPosBar.style.animationName="fadeit",r.fixTimes=0;let i=window.innerHeight||document.documentElement.clientHeight;function s(){if(r.focusMark!=e)return;let n=r.getRect(e);if(r.wPosBar.style.top=n.top+document.documentElement.scrollTop+_(document).scrollTop+"px",r.hPosBar.style.left=n.left+"px",!(r.fixTimes>0&&n.top>i/3&&n.top<i/3*2)){if(++r.fixTimes==5)e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});else if(r.fixTimes>10){e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),r.wPosBar.style.animationName="",r.hPosBar.style.animationName="";return}setTimeout(()=>{s()},200)}}s()},0)}getHighlightSpanByText(e){return this.highlightSpans[e]}setHighlightSpan(e,t,r){if(!e)return;let i=e.querySelector("em");i||(i=document.createElement("em"),e.insertBefore(i,e.firstChild)),t++;let s=0;r&&r.length&&(s=0,r.forEach(n=>{n.dataset.type||s++})),i.innerHTML=ee("["+t+"/"+s+"]")}getHighlightStyle(e,t,r){if(!t&&!r){let n=c.prefConfig.inPageWordsStyles[e];if(n)return n}r=r||"";function i(){let n,a,o;return n=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),n=n.toString(16),n.length===1&&(n="0"+n),a=a.toString(16),a.length===1&&(a="0"+a),o=o.toString(16),o.length===1&&(o="0"+o),"#"+n+a+o}function s(n){if(n.indexOf("#")!==0)return"";if(n==="#ffff00")return"black";n=n.substr(1);let a,o,p;a=parseInt(n.substr(0,2),16),o=parseInt(n.substr(2,2),16),p=parseInt(n.substr(4,2),16);let d=a*.299+o*.587+p*.114;a=255-a,o=255-o,p=255-p;let u=a*.299+o*.587+p*.114;return Math.abs(u-d)<=128?d>158?"#000000":"#FFFFFF":(a=a.toString(16),a.length===1&&(a="0"+a),o=o.toString(16),o.length===1&&(o="0"+o),p=p.toString(16),p.length===1&&(p="0"+p),"#"+a+o+p)}if(t||(t=c.prefConfig.firstFiveWordsColor[e]),!t)switch(e){case 0:t="#ffff00";break;case 1:t="#e91e63";break;case 2:t="#00bcd4";break;case 3:t="#008000";break;case 4:t="#800080";break;default:t=i();break}if(t){let n=s(t);n&&(n="color:"+n+"!important;"),t=`background:${t}!important;${n}`}return`${t}${r}`}createNavMark(e,t,r,i,s){let n=this,a=document.createElement("span"),o=fr(e,n.targetIframe);a.title=t.title||t.showWords,a.dataset.top=o,a.dataset.content=t.showWords,a.style.top=o/s*100+"%",a.style.background=e.style.background||"yellow",a.addEventListener("click",p=>(p.stopPropagation(),p.preventDefault(),n.focusIndex=r,n.focusHighlight(e),n.setHighlightSpan(n.getHighlightSpanByText(t.showWords),r,i),n.navPointer.style.display="",n.navPointer.style.top=a.offsetTop+33+"px",!1),!0),n.navMarks.appendChild(a)}anylizeDomWithTextPos(e,t){return t||(t={text:"",data:{}}),!e||!e.childNodes||!e.childNodes.length||e.nodeType==1&&!e.offsetParent&&!e.offsetHeight&&(!e.firstElementChild||!e.firstElementChild.offsetParent)||e.childNodes.forEach(r=>{if(r.classList&&r.classList.contains("searchJumper")||/^(img|svg|picture|br|hr|textarea)$/i.test(r.nodeName)){const i=t.text.length;t.text+=`
`,t.data[i]={node:r,text:`
`}}else if(r.offsetParent||r.offsetHeight||r.firstElementChild&&r.firstElementChild.offsetParent)if(/^(div|h\d|p|form|ul|li|ol|dl|address|menu|table|fieldset|td)$/i.test(r.nodeName)){let i=t.text.length;t.text+=`
`,t.data[i]={node:{},text:`
`},t=this.anylizeDomWithTextPos(r,t),i=t.text.length,t.text+=`
`,t.data[i]={node:{},text:`
`}}else t=this.anylizeDomWithTextPos(r,t);else if(r.nodeType===3){let i;if(r.parentNode.nodeType==1&&r.parentNode.childNodes.length==1?i=r.parentNode.innerText||r.data:i=r.data,!i||!i.trim())return;const s=t.text.length;t.text+=i,t.data[t.text.length-1]={node:r,text:i}}}),t}highlightPopup(e,t){let r=this,i,s=n=>{i&&r.clingPos(e,r.tips)};e.addEventListener("mouseenter",n=>{if(e.addEventListener("mousemove",s),M!=e||!r.funcKeyCall){if(i=null,M=e,t.showTips)if(/^\d+$/.test(t.showTips)){let o=r.autoGetFirstType().querySelectorAll("a.search-jumper-btn[data-show-tips]:not(.notmatch)"),p=parseInt(t.showTips)-1;i=o[p]}else i=r.getTargetSitesByName([t.showTips])[0];r.setFuncKeyCall(!0),i?(r.bar.style.setProperty("display","none","important"),i.dispatchEvent(new CustomEvent("showTips"))):r.showInPage(!0,n)}}),e.addEventListener("mouseleave",n=>{e.removeEventListener("mousemove",s)})}createHighlightMark(e,t,r){let i=this,s=document.createElement("mark");s.className="searchJumper",e.title&&(s.title=JSON.parse('"'+e.title+'"')),e.popup&&this.highlightPopup(s,e),s.style.cssText=e.style,s.addEventListener("click",o=>{if(o.altKey)return o.stopPropagation(),o.preventDefault(),!1}),s.dataset.content=e.showWords;let n,a=()=>{clearTimeout(n),n=setTimeout(()=>{let o=location.href.replace(/#.*/,"")+"#sjhl="+encodeURIComponent(e.oriWord)+"&i="+(t+1);ye.history.replaceState("","",o)},800)};return s.addEventListener("mousedown",o=>{if(a(),!o.altKey)return;let p,d=t;for(;(!p||p.dataset.type)&&(o.button===0?d!=r.length-1?(d++,i.focusIndex=d):i.focusIndex=0:o.button===2&&(d!=0?(d--,i.focusIndex=d):i.focusIndex=r.length-1),p=r[i.focusIndex],d!=t););i.focusHighlight(p),i.setHighlightSpan(i.getHighlightSpanByText(e.showWords),i.focusIndex,r),i.focusText=e.showWords}),s.addEventListener("mouseup",o=>{clearTimeout(n)}),s}createAddonSpan(e,t){let r="addon_"+this.addonsList.children.length,i=this,s=document.createElement("div"),n=document.createElement("input");n.type="checkbox",n.id=r,n.checked=!t.disable,n.addEventListener("change",o=>{c.prefConfig.disableAddon[e]=!n.checked,t.disable=!n.checked,n.checked&&i.findInpageAddons.forEach(p=>{if(p!=t&&p.sort==t.sort){p.disable=!0;let d=p.name||"addon"+r++;i.addonCheckboxDict[d].checked=!1,c.prefConfig.disableAddon[d]=!0}}),q.setItem("searchData",c),i.lockWords&&i.refreshPageWords(i.lockWords)}),s.appendChild(n),s.title=t.title||"";let a=document.createElement("label");a.setAttribute("for",r),a.innerText=e,s.appendChild(a),this.addonCheckboxDict[e]=n,this.addonsList.appendChild(s)}findAccentedWord(e,t,r){const i=t.length;let s=0,n=-1;for(let a=0;a<e.length;a++){const o=r[a];if(o!=="")if(o===t[s]){if(s===0&&(n=a),s++,s===i)return{pos:n,len:a-n+1}}else s=0,n=-1,o===t[0]&&(n=a,s=1)}return n=e.indexOf(t),{len:t.length,pos:n}}findPosInStr(e,t,r,i,s){if(!e)return{len:0,pos:-1};let n=0,a=-1,o=!1;if(this.findInpageAddons.length)for(let p=0;p<this.findInpageAddons.length;p++){let d=this.findInpageAddons[p];if(!d||!d.run||d.disable)continue;o=!0;let u=d.run(e,t);if(u&&u.matched){n=u.len,a=u.pos;break}}return a==-1&&!o?this.findAccentedWord(r,i,s):{len:n,pos:a}}highlight(e,t,r,i){if(!e&&(!this.curHighlightWords||this.curHighlightWords.length===0))return;if(!t){this.highlight(e,_(document),r);return}if([].forEach.call(t.getElementsByTagName("iframe"),h=>{if(!h.offsetParent||h.offsetHeight<100||h.offsetWidth<100)return;let m;try{m=h.contentDocument||h.contentWindow.document}catch{return}m&&_(m)&&this.highlight(e,_(m),r,h)}),this.targetIframe=i||!1,t.id=="searchJumperModifyWord")return;t=t||_(document);let s=this.wordModeBtn.classList.contains("checked"),n=[],a=!1,o=this;if(e===""){this.highlightSpans={},Object.values(this.marks).forEach(async h=>{if(!h)return;let m=new Set;for(let y of h)if(y.parentNode)if(y.dataset.block)y.parentNode&&y.parentNode.removeChild(y);else if(!/^MARK$/i.test(y.nodeName))y.classList.remove("searchJumper"),y.style.cssText=y.dataset.css||"",delete y.dataset.css;else{let C=document.createTextNode(y.firstChild.data);y.parentNode.replaceChild(C,y),m.add(C.parentNode)}m.forEach(y=>{y.normalize()})}),[].forEach.call(t.querySelectorAll(".searchJumper-hide"),h=>{h.classList.remove("searchJumper-hide"),h.style.display="",h.removeAttribute("data-content")}),this.navMarks.innerHTML=ee(),this.marks={},this.curHighlightWords=[];return}this.inPageStyle||(this.inPageStyle=Me(this.inPageCss)),this.inPageStyle.parentNode||document.head.appendChild(this.inPageStyle);let p=e==="insert";p?(e=this.curHighlightWords,this.refreshNavMarks()):this.curHighlightWords=(this.curHighlightWords||[]).concat(e),this.fakeTextareas=new Map;let d=Math.max(document.documentElement.scrollHeight,_(document).scrollHeight);this.navMarks.style.display="none";let u=[];function f(h,m,y){let C,j=-1,x,L,$,T;x=0;let U=h.parentNode;if(h.nodeType==1&&h.className&&h.className.indexOf&&h.className.indexOf("searchJumper")!=-1)return 0;if(y&&(h.nodeType==1||h.nodeType==11)){let R=function(O,ie,ne){let J=Object.keys(b.data),I=[],v=ie,g="",S="",W="";for(let H=0;H<J.length;H++){let K=parseInt(J[H]),F=b.data[K];if(O>K)continue;let re=O-(K-F.text.length)-1,se="full";if(re<0?F.text.length<v?se="middle":se="end":F.text.length-re<v&&(se="start"),se==="full"&&(ne=""),w&&(se=="full"?(g=re==0?`
`:F.text[re-1],S=re+v==F.text.length?`
`:F.text[re+v],S!==`
`&&(W=re+v+1==F.text.length?`
`:F.text[re+v+1])):se=="start"&&!g?g=re==0?`
`:F.text[re-1]:(se=="end"||se=="full")&&!S&&(S=re+v==F.text.length?`
`:F.text[re+v],S!==`
`&&(W=re+v+1==F.text.length?`
`:F.text[re+v+1])),g&&S&&(/[a-z]/i.test(g)||/[a-rt-z]/i.test(S)||S.toLowerCase()=="s"&&/[a-z]/i.test(W))))break;re<0&&(re=0);let fe=Math.min(v,F.text.length-re);if(v-=fe,!F.text.trim()){se==="start"&&(O+=F.text.length);continue}let ae;for(let We=0;We<te.length;We++)if(te[We].node==F.node){ae=te[We];break}if(ae?ae.match.push({pos:re,len:fe,type:se,matched:ne}):te.push({node:F.node,text:F.text,match:[{pos:re,len:fe,type:se,matched:ne}]}),v<=0)break}},V=function(){if(j=-1,m.isRe){let O=P.match(new RegExp(m.content,m.reCase));O&&(C=O[0].length,j=O.index)}else{let O=o.findPosInStr(P,m.content,D,A,N);C=O.len,j=O.pos}if(j>-1){let O=P.slice(j,j+C);P=P.slice(j+C),D=D.slice(j+C),N=N.slice(j+C),j+=ue,ue=j+C,R(j,C,O),V()}},b=o.anylizeDomWithTextPos(h),P=b.text,D=P.toUpperCase(),N=[];for(let O=0;O<D.length;O++){const ie=D[O].normalize("NFD").replace(/[\u0300-\u036f]/g,"");N.push(ie)}let A=m.content.toUpperCase(),Z=b.data,ue=0,te=[],w=(m.init||s)&&/^[a-z]+$/i.test(m.content);V(),te.length&&te.forEach(O=>{if(typeof m.hideParent<"u"){let ie=m.hideParent,ne=O.node.parentElement;for(;ie-- >0&&ne;)ne=ne.parentElement;ne&&ne.classList&&!ne.classList.contains("searchJumper-hide")&&(ne.innerHTML=ee(""),ne.dataset.content=m.showWords,ne.classList.add("searchJumper-hide"))}else{let ie=o.marks[m.showWords],ne=ie.length,J,I,v="";O.node.parentNode.nodeType==1&&(v=getComputedStyle(O.node.parentNode).display),v.indexOf("flex")!=-1||v.indexOf("grid")!=-1||v.indexOf("layer")!=-1?(I=document.createElement("span"),I.style.all="unset"):I=document.createDocumentFragment();let g=document.createTextNode(O.text);I.appendChild(g);let S=O.match.reverse(),W=[],H=S.length-1;S.forEach(K=>{switch(J=o.createHighlightMark(m,ne+H,ie),K.type){case"start":J.style.borderTopRightRadius=0,J.style.borderBottomRightRadius=0,H--;break;case"middle":J.style.borderRadius=0;break;case"end":J.style.borderTopLeftRadius=0,J.style.borderBottomLeftRadius=0;break;default:H--;break}$=g.splitText(K.pos),K.type!="start"&&K.type!="middle"&&$.data.length&&$.splitText(K.len),T=$.cloneNode(!0),J.appendChild(T),K.type!="full"&&K.type!="start"&&(J.dataset.type=K.type),K.matched&&(J.dataset.matched=K.matched),I.replaceChild(J,$),W.unshift(J)}),O.node.parentNode.replaceChild(I,O.node),o.marks[m.showWords].push(...W),W.forEach(K=>{K.dataset.type||u.push([K,m,ne,ie,d])})}})}let z=!0;if(m.link){if(h.nodeType==1&&h.href&&h.href.match&&(z=!1,h.href.match(new RegExp(m.content,m.reCase))))if(typeof m.hideParent<"u"){let P=m.hideParent,D=h;for(;P-- >0&&D;)D=D.parentElement;if(D)return D.innerHTML=ee(""),D.dataset.content=m.showWords,D.classList.add("searchJumper-hide"),0}else{let P=o.marks[m.showWords],D=P.length;h.classList.add("searchJumper"),m.title&&(h.title=JSON.parse('"'+m.title+'"')),m.popup&&o.highlightPopup(h,m),h.dataset.css||(h.dataset.css=h.style.cssText),m.style&&(h.style.cssText+=m.style),h.addEventListener("click",N=>{if(N.altKey)return N.stopPropagation(),N.preventDefault(),!1}),h.dataset.content=m.showWords,h.addEventListener("mousedown",N=>{if(!N.altKey)return;let A;N.button===0?D!=P.length-1?o.focusIndex=D+1:o.focusIndex=0:N.button===2&&(D!=0?o.focusIndex=D-1:o.focusIndex=P.length-1),A=P[o.focusIndex],o.focusHighlight(A),o.setHighlightSpan(o.getHighlightSpanByText(m.showWords),o.focusIndex,P),o.focusText=m.showWords}),o.marks[m.showWords].push(h),u.push([h,m,D,P,d])}}else{let b="";if(h.nodeType==1&&h.value&&(h.offsetParent||h.offsetHeight)&&!m.init&&/^(button|select|input|textarea)$/i.test(h.nodeName)&&!/^(hidden|file|password|radio|range|checkbox|image)$/i.test(h.type)&&(b=h.value),b){let V=function(O,ie){if(O){if(!N){N=document.createElement("pre"),N.className="searchJumper";let I=document.createTextNode(b);N.appendChild(I);let v,g=/^(number|string)$/,S=[],W=h.style;for(v in W)if(!/^(content|outline|outlineWidth)$/.test(v)){let H=A[v];H!==""&&g.test(typeof H)&&(v=v.replace(/([A-Z])/g,"-$1").toLowerCase(),S.push(v),S.push(":"),S.push(H),S.push(";"))}S=S.join(""),N.style.cssText=S,N.style.position="fixed",N.style.left="0px",N.style.top="0px",N.style.margin="0",h.nodeName&&h.nodeName.toLowerCase&&h.nodeName.toLowerCase()!=="textarea"&&(N.style.display="inline-grid",N.style.lineHeight=N.style.height,N.style.boxSizing=="border-box"&&(N.style.paddingTop=0)),o.fakeTextareas.set(h,N)}document.body.appendChild(N);let ne=document.createRange();ne.setStart(N.firstChild,Math.min(N.firstChild.length,ie)),ne.setEnd(N.firstChild,Math.min(N.firstChild.length,ie+1));let J=ne.getBoundingClientRect();if(document.body.removeChild(N),typeof m.hideParent<"u"){let I=m.hideParent,v=h.parentElement;for(;I-- >0&&v;)v=v.parentElement;if(v)return v.innerHTML=ee(""),v.dataset.content=m.showWords,v.classList.add("searchJumper-hide"),0}else{let I=o.marks[m.showWords],v=I.length,g=document.createElement("mark");g.className="searchJumper",g.dataset.block=!0,m.title&&(g.title=JSON.parse('"'+m.title+'"')),g.style.cssText=m.style,g.dataset.content=m.showWords,g.innerText=O,g.style.padding="0",g.style.position="absolute",g.style.fontSize=N.style.fontSize,g.style.fontFamily=N.style.fontFamily,g.style.lineHeight="1",g.style.pointerEvents="none",h.parentNode.appendChild(g);let S=J.left+Z,W=J.top+ue;if(g.style.left=S+"px",g.style.top=W+"px",o.marks[m.showWords].push(g),u.push([g,m,v,I,d]),h.nodeName&&h.nodeName.toLowerCase&&h.nodeName.toLowerCase()=="textarea"){let H=K=>{g.parentNode?(g.style.left=S-h.scrollLeft+"px",g.style.top=W-h.scrollTop+"px"):(g.parentNode.removeChild(g),h.removeEventListener("scroll",H))};h.addEventListener("scroll",H)}}}};z=!1;let P=!1,D=0,N=o.fakeTextareas.get(h);if(p&&N)return 0;let A=getComputedStyle(h),Z=h.offsetLeft,ue=h.offsetTop,te=b.toUpperCase(),w=[];for(let O=0;O<te.length;O++){const ie=te[O].normalize("NFD").replace(/[\u0300-\u036f]/g,"");w.push(ie)}let R=m.content.toUpperCase();for(;;){if(m.isRe)P=b.match(new RegExp(m.content,m.reCase)),P&&(j=P.index,P=P[0]);else{let O=o.findPosInStr(b,m.content,te,R,w);C=O.len,j=O.pos,(m.init||s)&&j>=0&&/^[a-z]+$/i.test(m.content)&&(j!==0&&/[a-z]/i.test(b[j-1])&&(j=-1),j+m.content.length!==b.length&&/[a-z]/i.test(b[j+C])&&(j=-1)),P=j>=0?b.slice(j,j+C):!1}if(P)V(P,D+j),D+=j+P.length,b=b.slice(j+P.length),te=te.slice(j+P.length),w=w.slice(j+P.length);else break}}}if(z&&(!r||h===t)&&(h.nodeType==1||h.nodeType==11)&&h.childNodes&&!/^(SCRIPT|STYLE|MARK|SVG|TEXTAREA)$/i.test(h.nodeName)&&(!m.init||h.ariaHidden!="true"&&h.role!="search"&&(!h.hasAttribute||h.hasAttribute("jsname")==!1)))if(!a&&/^(PRE|CODE)$/i.test(h.nodeName))n.push(h);else{for(var B=0;B<h.childNodes.length;++B)B=B+f(h.childNodes[B],m);try{h.shadowRoot&&(B=B+f(h.shadowRoot,m,!0))}catch(b){pe(b)}}return x}e.forEach(h=>{if(o.marks[h.showWords]||(o.marks[h.showWords]=[]),h.inRange){let m=t;t.parentNode&&(m=t.parentNode),[].forEach.call(m.querySelectorAll(h.inRange),y=>{(y==t||t.contains(y))&&f(y,h,!0)})}else f(t,h,!0)}),u.forEach(h=>{o.createNavMark(...h)}),this.navMarks.style.display="",setTimeout(()=>{o.navMarks.style.display="none",u=[],a=!0,e.forEach(h=>{o.marks[h.showWords]||(o.marks[h.showWords]=[]),n.forEach(m=>{f(m,h,!0)})}),u.forEach(h=>{o.createNavMark(...h)}),o.navMarks.style.display=""},1e3),this.navMarks.innerHTML!=""&&(this.searchJumperNavBar.classList.add("sjNavShow"),_e&&(this.appendBar(),this.con.style.display="",this.setNav(!0,!0)))}refreshPageWords(e){this.lockWords="",this.searchJumperInPageInput.value="",this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords();let t=e||Ne;t&&(this.searchJumperInPageInput.value=t,this.submitInPageWords(t==this.lastSearchEngineWords),this.appendBar())}refreshNav(){this.setNav(_e)}refreshNavMarks(){this.refreshNavMarksTimer&&clearTimeout(this.refreshNavMarksTimer),this.refreshNavMarksTimer=setTimeout(()=>{let e=Math.max(document.documentElement.scrollHeight,_(document).scrollHeight);this.navPointer.style.display="none",this.navMarks.style.display="none",[].forEach.call(this.navMarks.children,t=>{t.style.top=t.dataset.top/e*100+"%"}),this.navMarks.style.display=""},1e3)}checkCharacterData(e){setTimeout(()=>{this.highlight("insert",e,!0)},0)}removeMark(e){let t=e.dataset.content,r=this.marks[t];if(!r)return;var i=r.indexOf(e);if(i===-1)return;r.splice(i,1),this.marks[t]=r;let s=this.navMarks.querySelectorAll(`span[data-content="${t}"]`)[i];s&&this.navMarks.removeChild(s)}submitIgnoreSpace(e){e&&(!this.lockWords&&e.indexOf("$c")!==0&&e.indexOf("$o")!==0&&e.indexOf(" ")!==-1&&(this.splitSep="\u25CE"),this.searchJumperInPageInput.value=e,this.submitInPageWords())}siteBtnReturnHome(e){e.parentNode&&e.parentNode.removeChild(e)}closeShowAll(){if(!(!this.con.classList.contains("search-jumper-showall")||et)){if(this.clearInputHide(),clearInterval(this.showAllTimeTimer),document.removeEventListener("mousedown",self.showAllMouseHandler),document.removeEventListener("keydown",self.showAllKeydownHandler),this.con.classList.remove("search-jumper-showall"),document.documentElement.style.scrollbarWidth=this.preScrollbarWidth,this.searchJumperInputKeyWords.value="",this.historylist.innerHTML=ee(),this.touched=!1,this.initPos(),this.funcKeyCall&&this.setFuncKeyCall(!1),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){let e=this.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(e&&!e.classList.contains("search-jumper-open"))if(e.onmousedown)e.onmousedown();else{let t=new PointerEvent("mousedown");e.dispatchEvent(t)}}this.bar.style.display=""}}toggleShowAll(){this.appendBar(),!(!this.con||!this.con.parentNode)&&(this.con.classList.contains("search-jumper-showall")?this.closeShowAll():this.showAllSites())}showAllSites(){if(!this.con||!this.con.parentNode||this.con.classList.contains("search-jumper-showall"))return;this.con.style.display="",this.clearInputHide(),this.alllist.appendChild(this.filterSites),this.filterGlob.innerHTML=ee();let e=this;this.setFuncKeyCall(!1),this.hideSearchInput(),this.con.classList.add("search-jumper-showall"),this.preScrollbarWidth=document.documentElement.style.scrollbarWidth||"",document.documentElement.style.scrollbarWidth="none",clearInterval(this.showAllTimeTimer);const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];window.innerWidth<1e3?(e.timeInAll.style.fontSize="15px",e.dayInAll.style.fontSize="15px"):(e.timeInAll.style.fontSize="",e.dayInAll.style.fontSize="");let r=new Date,i=r.getFullYear(),s=r.getMonth(),n=r.getDate(),a=E(t[r.getDay()])+"<br/>"+i+"-"+(++s<10?"0"+s:s)+"-"+(n<10?"0"+n:n);if(Ue.indexOf("zh")==0){let u=gr(i,s,n);if(u){let f=`${u.lunarYear}\u5E74${u.lunarMonth}\u6708${u.lunarDay}`;a=a+"<br/>"+f}}e.dayInAll.innerHTML=ee(a);let o=()=>{let u=new Date,f=u.getHours(),h=u.getMinutes(),m=u.getSeconds();e.timeInAll.innerText=(f<10?"0"+f:f)+":"+(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)};this.showAllTimeTimer=setInterval(o,1e3),o(),Se.forEach(u=>{if(u.style.display!="none"){let f=u.querySelector(".sitelist");f&&(e.sitelistBox.appendChild(f),e.initList(f))}}),this.historySiteBtns.slice(0,20).forEach(u=>{let f=u.querySelector("img");f&&f.dataset.src&&(f.src=f.dataset.src,delete f.dataset.src),e.historylist.appendChild(u)});let p="";M&&(M.nodeName.toUpperCase()=="A"||M.parentNode&&M.parentNode.nodeName.toUpperCase()=="A")&&(p=M.textContent.trim());let d=it()||p||Ee;this.searchJumperInputKeyWords.value=d,setTimeout(()=>{e.showAllMouseHandler||(e.showAllMouseHandler=u=>{(u.isTrusted==!1||u.target.className==="sitelistBox"||u.target.className==="search-jumper-showallBg")&&e.closeShowAll()}),e.con.addEventListener("mousedown",e.showAllMouseHandler),e.showAllKeydownHandler||(e.showAllKeydownHandler=u=>{u.keyCode==27&&e.closeShowAll()}),document.addEventListener("keydown",e.showAllKeydownHandler,!0),this.searchJumperInputKeyWords.value&&(this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select())},0)}switchSite(e){if(!le||this.bar.style.display=="none")return;let t=this.con.querySelector(".search-jumper-btn.current");if(e)for(t=t.nextElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.nextElementSibling;else for(t=t.previousElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.previousElementSibling;t&&this.openSiteBtn(t,"_self")}clearInputHide(){Se.forEach(e=>{e.classList.remove("input-hide")}),this.allSiteBtns.forEach(e=>{e[0].classList.remove("input-hide")}),this.allListBtns.forEach(e=>{e.classList.remove("input-hide")}),this.allLists.forEach(e=>{e.classList.remove("input-hide")})}showSearchInput(){if(this.con&&this.con.classList.contains("search-jumper-showall"))return;this.recoveHistory(),this.con.classList.add("in-input"),this.searchInput.value="",this.contentContainer.appendChild(this.filterSites);let e=De();if(e&&(this.searchJumperInputKeyWords.value=e),this.filterSitesTab.checked){this.con.classList.remove("in-find"),c.prefConfig.defaultPicker&&this.togglePicker(),this.searchJumperInputKeyWords.value||(this.searchJumperInputKeyWords.value=it()||Ee);let t=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)>span");if(t&&!t.parentNode.classList.contains("search-jumper-open"))if(t.onmousedown)t.onmousedown();else{let r=new PointerEvent("mousedown");t.dispatchEvent(r)}xt&&(this.searchInput.value=xt,this.searchInput.dispatchEvent(new Event("input"))),this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select()}else this.searchInPageTab.checked&&(this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),setTimeout(()=>{e&&this.lockWords.indexOf(e)==-1?(this.searchJumperInPageInput.value="",this.navMarks.innerHTML?(this.searchJumperInPageInput.value=e,this.submitInPageWords()):this.submitIgnoreSpace(e)):this.searchJumperInPageInput.value?this.submitInPageWords():!this.initShowSearchInput&&Ee&&this.lockWords!==Ee&&(this.searchJumperInPageInput.value=Ee,this.initShowSearchInput=!0,this.searchJumperInPageInput.select())},10));this.inInput=!0,this.clearInputHide(),this.lockWords?this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px":this.searchJumperInPageInput.style.paddingLeft="",c.prefConfig.altToHighlight&&(document.removeEventListener("mouseup",this.checkSelHandler),document.addEventListener("mouseup",this.checkSelHandler))}togglePicker(){this.pickerBtn.classList.toggle("checked"),this.con.classList.toggle("in-pick"),this.searchJumperInputKeyWords.disabled=!this.searchJumperInputKeyWords.disabled,ke.toggle(!0),this.searchJumperInputKeyWords.disabled&&(this.searchJumperInputKeyWords.value="")}hideSearchInput(){this.inInput=!1,this.clearInputHide(),this.con.classList.remove("in-find"),this.con.classList.remove("in-input"),this.con.classList.remove("lock-input"),this.bar.classList.remove("initShow"),this.searchInput.value="",this.searchJumperInputKeyWords.value="",this.pickerBtn.classList.remove("checked"),this.searchJumperInputKeyWords.disabled=!1,ke.close(),document.removeEventListener("mouseup",this.checkSelHandler),this.setFuncKeyCall(!1),this.closeOpenType()}removeBar(){this.shadowContainer&&this.shadowContainer.parentNode&&this.shadowContainer.parentNode.removeChild(this.shadowContainer),this.con.parentNode&&this.con.parentNode.removeChild(this.con)}async testCSP(){let e=this,t=i=>{!i.violatedDirective||i.violatedDirective.indexOf("style-src")==-1||(qe=!0)};window.addEventListener("securitypolicyviolation",t);let r=Me("html {color: #000;}");this.addToShadow(r),await $e(0),window.removeEventListener("securitypolicyviolation",t),r.parentNode&&r.parentNode.removeChild(r)}addToShadow(e){this.shadowContainer||(this.shadowContainer=document.createElement("div")),this.shadowContainer.parentNode||(Te?document.body.appendChild(this.shadowContainer):document.documentElement.appendChild(this.shadowContainer));let t;if(qe){if(/^style$/i.test(e.nodeName))return!0;t=this.shadowContainer}else if(this.shadowRoot)t=this.shadowRoot;else{this.shadowContainer.className="search-jumper-shadow";let r=Me(`
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
                        `);this.shadowContainer.appendChild(r);let i=this.shadowContainer.attachShadow({mode:"closed"});t=document.createElement("div"),t.id="search-jumper-root",t.style.display="none",t.setAttribute("contenteditable","false");let s=document.createElement("style");s.innerHTML=ee("#search-jumper-root{display: block!important;}"),t.appendChild(s),i.appendChild(t),this.shadowRoot=t}return e.parentNode!=t&&t.appendChild(e),!0}contains(e){return e==this.shadowContainer||this.bar.contains(e)}appendBar(){if((!Xe||!Xe.parentNode)&&(Xe=Me(Et),qe||this.addToShadow(Xe)),this.addToShadow(this.con)){let e=this,t=()=>{setTimeout(()=>{if(e.shadowContainer&&!e.shadowContainer.parentNode){Te?document.body.appendChild(e.shadowContainer):document.documentElement.appendChild(e.shadowContainer),t();return}!et&&e.con.parentNode&&getComputedStyle(e.con).zIndex!="2147483647"&&(this.removeBar(),qe?pe(E("cspDisabled")):(qe=!0,Xe=Me(Et),e.shadowContainer.parentNode.removeChild(e.shadowContainer),e.shadowContainer=document.createElement("div"),e.shadowContainer.setAttribute("contenteditable","false"),document.documentElement.appendChild(e.shadowContainer),e.appendBar()))},100)};t()}}async searchBySiteName(e,t,r){t||(t={}),t&&t.type==="drop"&&this.closeShowAll();for(let[i,s]of this.allSiteBtns)if(i.dataset.name==e){if(i.dataset.showTips){i.dispatchEvent(new CustomEvent("showTips"));return}await this.siteSetUrl(i,{button:t.button,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey});let n=/^(https?|ftp):/.test(i.href);n&&i.setAttribute("target",r?"_self":"_blank"),i.click(),n&&i.setAttribute("target",i.dataset.target==1?"_blank":"_self");return}for(let i=Se.length-1;i>=0;i--){let s=Se[i];if(s.dataset.type==e){s.firstChild.onmouseup&&s.firstChild.onmouseup({button:2});return}}}async searcAllhByTypeName(e){for(let t=Se.length-1;t>=0;t--){let r=Se[t];if(r.dataset.type==e){r.firstChild.onmouseup&&r.firstChild.onmouseup({button:2});return}}}autoGetFirstType(){M||(M=_(document));let e;switch(M.nodeName.toUpperCase()){case"IMG":e=this.bar.querySelector(".search-jumper-targetImg:not(.notmatch)");break;case"AUDIO":e=this.bar.querySelector(".search-jumper-targetAudio:not(.notmatch)");break;case"VIDEO":e=this.bar.querySelector(".search-jumper-targetVideo:not(.notmatch)");break;case"A":De()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)");break;default:De()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):M.parentNode.nodeName.toUpperCase()==="A"?e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetPage:not(.notmatch)");break}if(e||(e=this.bar.querySelector(".search-jumper-targetAll:not(.notmatch)")||this.bar.querySelector(".search-jumper-type")),e){this.setFuncKeyCall(!1);let t=new PointerEvent("mousedown");e.classList.contains("search-jumper-open")&&(e.children[0].onmousedown?e.children[0].onmousedown():e.children[0].dispatchEvent(t)),e.children[0].onmousedown?e.children[0].onmousedown():e.children[0].dispatchEvent(t)}return e}searchAuto(e,t){e||(e=0);let r=this.autoGetFirstType();if(!r)return;let i=r.querySelectorAll("a.search-jumper-btn:not(.notmatch)");if(e<i.length){let s=i[e];this.searchBySiteName(s.dataset.name,t)}}setNav(e,t){!t&&_e!=e&&(q.setItem("navEnable",e||""),_e=e),e?(t||this.locBtn.classList.add("checked"),this.searchJumperNavBar.style.display=""):(t||this.locBtn.classList.remove("checked"),this.searchJumperNavBar.style.display="none",this.navPointer.style.display="none")}lockSearchInput(e){this.lockSiteKeywords=!0,this.searchLockInput.innerText=e,this.con.classList.add("lock-input"),this.searchInput.value="",this.searchInput.style.paddingLeft=`${15+this.searchLockInput.scrollWidth}px`,this.searchInput.placeholder=E("inputKeywords")}async initRun(){let e=this;this.siteIndex=1,this.customInput=!1,this.fontPool=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.dockerScaleBtns=[],this.bar.style.visibility="hidden";let t=0,r=[];this.checkSelHandler=w=>{w.altKey&&this.searchInPageTab.checked&&window.getSelection().toString()&&this.showSearchInput()},this.splitSep="\u25CE",this.lockWords="",this.marks={},this.initInPageWords=[],this.highlightSpans={},this.curHighlightWords=[],this.curWordIndex=0;let i=()=>{this.searchJumperInPageInput.focus(),this.highlight("");let w=this.lockWords.trim();if(!w){this.submitInPageWords();return}this.searchJumperInPageInput.value&&(w+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=w,this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft=""};document.addEventListener("keydown",w=>{w.keyCode===27&&(et?(this.searchInput.value="",this.searchInput.dispatchEvent(new CustomEvent("input"))):this.inInput?this.hideSearchInput():this.lockWords?(this.highlight(""),this.searchJumperInPageInput.value=this.lockWords,this.lockWords="",this.searchInPageLockWords.innerHTML=ee(),this.setNav(!1,!0)):this.funcKeyCall&&this.removeBar())},!0),this.searchJumperInPageInput.addEventListener("focus",w=>{this.searchInputDiv.classList.add("active")}),this.searchJumperInPageInput.addEventListener("blur",w=>{this.searchInputDiv.classList.remove("active")}),this.searchJumperInPageInput.addEventListener("keydown",w=>{switch(w.stopPropagation(),w.keyCode){case 8:if(!this.searchJumperInPageInput.value){let R=this.searchInPageLockWords.lastChild;R&&(R.dispatchEvent(new CustomEvent("editword")),w.preventDefault())}break;case 9:w.preventDefault(),this.filterSitesTab.checked=!0,this.con.classList.remove("in-find"),this.searchInput.focus();break;case 13:{let R=this.searchJumperInPageInput.value?this.submitInPageWords():[];if(R&&R.length>0){let V=R.pop();this.currentSearchInPageLockWords&&(this.currentSearchInPageLockWords.firstChild.style.transform=""),this.currentSearchInPageLockWords=V;let O=new PointerEvent("mousedown",{button:w.shiftKey?2:0});V.dispatchEvent(O)}else if(this.lockWords){this.currentSearchInPageLockWords||(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)");let V=new PointerEvent("mousedown",{button:w.shiftKey?2:0});this.currentSearchInPageLockWords.dispatchEvent(V)}}break;case 37:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.previousElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.previousElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;case 39:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.nextElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.nextElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;default:break}},!0),this.editBtn.addEventListener("click",w=>{i()}),this.addWord.addEventListener("click",w=>{this.showModifyWindow()}),this.searchInPageTab.addEventListener("change",w=>{this.initSetInPageWords(),this.searchJumperInPageInput.focus(),this.con.classList.add("in-find")}),this.filterSitesTab.addEventListener("change",w=>{this.searchInput.focus(),this.con.classList.remove("in-find")}),Ne?(this.recoverBtn.addEventListener("click",w=>{this.lockWords="",this.searchJumperInPageInput.value=Ne,this.searchInPageLockWords.innerHTML=ee(),this.highlight(""),this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.pinBtn.classList.add("checked")):this.recoverBtn.style.display="none",this.pinBtn.addEventListener("click",w=>{this.submitInPageWords(),this.pinBtn.classList.contains("checked")?(Ne="",this.pinBtn.classList.remove("checked")):this.lockWords&&(Ne=this.lockWords,this.pinBtn.classList.add("checked")),q.setItem("globalInPageWords",Ne)}),this.wordModeBtn.addEventListener("click",w=>{this.wordModeBtn.classList.contains("checked")?this.wordModeBtn.classList.remove("checked"):this.wordModeBtn.classList.add("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)}),this.saveRuleBtn.addEventListener("click",w=>{this.lockWords&&(Te||Dt(()=>{let R=c.prefConfig.inPageRule||{};R[this.inPageRuleKey||de.replace(/([&\?]_i=|#).*/,"")]=this.lockWords,c.prefConfig.inPageRule=R,c.lastModified=new Date().getTime(),jt=c.lastModified,q.setItem("searchData",c),Ce(E("save completed"))}))}),this.emptyBtn.addEventListener("click",w=>{this.lockWords="",this.searchJumperInPageInput.value="",this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.copyInPageBtn.addEventListener("click",w=>{this.lockWords&&(Oe(this.lockWords.replace(/◎/g,`
`)),Ce("Copied successfully!"))}),this.setNav(_e),this.locBtn.addEventListener("click",w=>{this.setNav(!this.locBtn.classList.contains("checked"))}),this.closeNavBtn.addEventListener("click",w=>{this.lockWords?(this.searchJumperInPageInput.value=this.lockWords||"",this.lockWords="",this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft="",this.highlight(""),this.searchJumperInPageInput.focus(),this.setNav(!1,!0),q.setItem("disableHighlight",location.hostname),this.bar.style.display==="none"&&this.removeBar()):this.setNav(!1)}),this.minNavBtn.addEventListener("click",w=>{if(this.searchJumperNavBar.classList.contains("minimize")){if(this.searchJumperNavBar.classList.remove("minimize"),this.lockWords.trim())return;this.submitInPageWords()}else{this.searchJumperNavBar.classList.add("minimize"),this.highlight("");let R=this.lockWords.trim();if(!R)return;this.searchJumperInPageInput.value&&(R+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=R,this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft=""}}),this.maxNavBtn.addEventListener("click",w=>{e.showInPage(),e.showInPageSearch()}),this.navMarks.addEventListener("click",w=>{let R=w.offsetY/this.navMarks.clientHeight*100,V=[].slice.call(this.navMarks.querySelectorAll("span"));V.sort((ie,ne)=>(ie=parseFloat(ie.style.top),ne=parseFloat(ne.style.top),ie>ne?1:ie<ne?-1:0));let O;for(let ie=0;ie<V.length;ie++){O=V[ie];let ne=parseFloat(O.style.top);if(ne>R){if(ie>0){let J=V[ie-1],I=parseFloat(J.style.top);ne-R>R-I&&(O=J)}break}}O&&O.click()}),this.bar.addEventListener("mousedown",w=>{w&&w.stopPropagation&&w.stopPropagation(),w&&w.preventDefault&&w.preventDefault()}),this.con.addEventListener("dblclick",w=>{w.stopPropagation(),w.preventDefault()});let s=w=>{w.stopPropagation(),w.preventDefault();let R=e.searchJumperExpand.parentNode;if(!R||!R.classList.contains("not-expand"))return;R.classList.remove("not-expand"),R.classList.remove("search-jumper-move");let V=e.con.classList.contains("search-jumper-left")||e.con.classList.contains("search-jumper-right");R.removeChild(e.searchJumperExpand);let O=Math.max(R.scrollWidth,R.scrollHeight)+5+"px";V?(R.style.height=O,R.style.width=""):(R.style.width=O,R.style.height=""),setTimeout(()=>{e.checkScroll(),R.classList.add("search-jumper-move")},251)},n;this.searchJumperExpand.addEventListener("click",s,!0),this.searchJumperExpand.addEventListener("contextmenu",s,!0),this.searchJumperExpand.addEventListener("mouseenter",w=>{c.prefConfig.overOpen&&(clearTimeout(n),n=setTimeout(()=>{s(w)},500));let R=new CustomEvent("sitelist",{detail:{bind:w.currentTarget}});w.currentTarget.parentNode.dispatchEvent(R)},!1),c.prefConfig.overOpen&&this.searchJumperExpand.addEventListener("mouseleave",w=>{clearTimeout(n)},!1),this.pickerBtn.addEventListener("click",w=>{this.togglePicker()}),this.maxEleBtn.addEventListener("click",w=>{ke.expand()}),this.minEleBtn.addEventListener("click",w=>{ke.collapse()}),this.copyEleBtn.addEventListener("click",w=>{ke.copy()}),this.openLinkBtn.addEventListener("click",w=>{ke.openLinks()});let a=document.createElement("div");a.className="listArrow",this.listArrow=a,this.con.appendChild(a);for(let w of c.sitesConfig){if(w.bookmark||w.sites.length>100||/^BM/.test(w.type)&&w.icon==="bookmark"){r.push(w);continue}await this.createType(w),t+=w.sites.length,t>100&&(await $e(1),t=0)}this.initHistorySites(),this.initSort(),this.bar.style.visibility="",this.bar.style.display="none",this.searchInPageRule(),le&&ft.test(le.url)?this.inSearchEngine():c.prefConfig.alwaysShow&&!St&&!at&&(this.bar.style.display="",this.initPos(),this.appendBar()),Tt&&(M=Tt.target,this.batchOpen(Tt.sites,{button:2})),Tt=!1,Ve&&(this.submitAction(Ve),setTimeout(()=>{q.setListItem("inPagePostParams",location.hostname,"")},1e4));let o=w=>{clearTimeout(p);let R,V="";le&&!e.searchInput.value?(R=e.con.querySelector(".search-jumper-btn.current"),V="_self"):(R=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),V="_blank"),R&&e.openSiteBtn(R,V,!w.ctrlKey)},p;this.inInput=!1;let d=()=>{xt!==e.searchInput.value&&(xt=e.searchInput.value,q.setItem("cacheFilter",xt))};this.searchInput.addEventListener("input",w=>{clearTimeout(p),p=setTimeout(()=>{e.searchSiteBtns(e.searchInput.value)},500)}),this.searchInput.addEventListener("click",w=>{e.searchInput.select()}),this.searchInput.addEventListener("blur",w=>{d()}),this.searchInput.addEventListener("keydown",w=>{switch(w.stopPropagation(),w.keyCode){case 9:w.shiftKey&&(w.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords());break;case 13:if(this.searchJumperInputKeyWords.disabled){clearTimeout(p);let R,V="";le&&!e.searchInput.value?(R=e.con.querySelector(".search-jumper-btn.current"),V="_self"):(R=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),V="_blank"),R&&e.openSiteBtn(R,V,!w.ctrlKey)}else this.searchJumperInputKeyWords.value?o(w):this.searchJumperInputKeyWords.focus(),d();break;case 8:break;default:break}}),this.searchJumperInputKeyWords.addEventListener("input",w=>{clearTimeout(p),p=setTimeout(()=>{e.getSuggest(e.searchJumperInputKeyWords.value)},200)}),this.searchJumperInputKeyWords.addEventListener("keydown",w=>{switch(w.keyCode!==27&&w.stopPropagation(),w.keyCode){case 9:this.inInput?w.shiftKey||(w.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords()):(w.preventDefault(),this.searchInput.focus());break;case 13:o(w);break;default:break}},!0),this.con.addEventListener("keypress",w=>{w.stopPropagation()},!0),this.closeBtn.addEventListener("mousedown",w=>{e.hideSearchInput(),c.prefConfig.emptyAfterCloseInput&&(e.highlight(""),e.searchJumperInPageInput.value=e.lockWords||"",e.lockWords="",e.searchInPageLockWords.innerHTML=ee(),e.setNav(!1,!0))});let u=window.innerWidth/2,f,h,m,y,C=w=>w.type.indexOf("mouse")===0?w.clientX:w.changedTouches[0].clientX,j=w=>w.type.indexOf("mouse")===0?w.clientY:w.changedTouches[0].clientY,x=w=>{let R=.25*window.innerWidth,V=u+C(w)-m;if(e.searchInputDiv.style.top="unset",e.searchInputDiv.style.left=V+"px",e.searchInputDiv.style.bottom=f-(j(w)-y)+"px",V>window.innerWidth/2){let O=window.innerWidth-V+R-50;e.searchInputDiv.style.maxWidth=O+"px"}else{let O=V+R;V<R&&(V+=R-V,e.searchInputDiv.style.left=V+"px"),e.searchInputDiv.style.maxWidth=O+"px"}w.stopPropagation(),w.preventDefault()},L=w=>{document.removeEventListener("mouseup",L),document.removeEventListener("mousemove",x),document.removeEventListener("touchend",L),document.removeEventListener("touchmove",x),h.style.cursor="",u+=C(w)-m,f-=j(w)-y},$=()=>{f||(f=e.con.classList.contains("search-jumper-bottom")?window.innerHeight*.95-60:window.innerHeight*.03)},T=!1;this.searchInputDiv.addEventListener("touchstart",w=>{T=!0,(w.target.className==="inputGroup"||w.target.nodeName.toUpperCase()==="LABEL")&&($(),h=w.target,h.style.cursor="grabbing",m=C(w),y=j(w),document.addEventListener("touchend",L),document.addEventListener("touchmove",x))},{passive:!0,capture:!1}),this.searchInputDiv.addEventListener("mousedown",w=>{if(T){T=!1;return}(w.target.className==="inputGroup"||w.target.nodeName.toUpperCase()==="LABEL")&&($(),h=w.target,h.style.cursor="grabbing",m=w.clientX,y=w.clientY,document.addEventListener("mouseup",L),document.addEventListener("mousemove",x),w.stopPropagation(),w.preventDefault())});let U,z,B=w=>{let R=w.clientX-z+U+20;this.searchInputDiv.style.width=R+"px"},b=w=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",b)};this.rightSizeChange.addEventListener("mousedown",w=>{z=w.clientX,U=this.searchInput.clientWidth*2+2,document.addEventListener("mousemove",B),document.addEventListener("mouseup",b),w.stopPropagation(),w.preventDefault()});let P,D=w=>{if(!this.contains(w.target)){let R=/^(https?|ftp):/.test(P.href);R&&P.setAttribute("target","_blank"),R?ge(P.href,{active:!1,insert:!0}):P.click(),R&&P.setAttribute("target",P.dataset.target==1?"_blank":"_self")}_(document).removeEventListener("dragover",N),document.removeEventListener("drop",D),document.removeEventListener("dragover",N)},N=w=>{w.preventDefault()},A=w=>{_(document).removeEventListener("dragover",N),document.removeEventListener("drop",D),document.removeEventListener("dragover",N)};this.bar.addEventListener("dragstart",w=>{let R=w.target,V=R.parentNode;R.nodeName.toUpperCase()!=="IMG"&&R.nodeName.toUpperCase()!=="A"||(R.classList&&R.classList.contains("search-jumper-btn")?(P=R,_(document).addEventListener("dragover",N),document.addEventListener("drop",D),document.addEventListener("dragend",A)):V&&V.classList&&V.classList.contains("search-jumper-btn")&&(P=V,_(document).addEventListener("dragover",N),document.addEventListener("drop",D),document.addEventListener("dragend",A)))},!0),t=0;let Z=le!==!1;for(let w of r)await this.createType(w),t+=w.sites.length,t>200&&(await $e(1),t=0);if(!this.findInpageAddons){this.findInpageAddons=ye.searchJumperAddons.filter(O=>O.type=="findInPage").sort((O,ie)=>(O.sort||0)-(ie.sort||0));let w=this,R=0,V={};this.findInpageAddons.forEach(O=>{let ie=O.name||"addon"+R++;V[O.sort]||c.prefConfig.disableAddon[ie]===!0?O.disable=!0:(c.prefConfig.disableAddon[ie],O.disable=!1),V[O.sort]=!0,w.createAddonSpan(ie,O)})}if(this.fontPool.length>0||at){let w=document.createElement("link");w.rel="stylesheet",w.href=c.prefConfig.fontAwesomeCss||"https://lib.baomitu.com/font-awesome/6.1.2/css/all.css",document.documentElement.insertBefore(w,document.documentElement.children[0]),this.addToShadow(w.cloneNode()),mr(()=>{let R=!1;this.fontPool.forEach(V=>{V.innerText="",V.style.fontSize="",V.style.color="",R=!0,Jt.unshift(V)}),R&&(at||de===Ni)&&setTimeout(()=>{Vi()},3e3),this.buildAllPageGroupTab()})}else this.buildAllPageGroupTab();if(et)return;zt&&zt!=location.hostname&&window.top==window.self&&q.setItem("disableHighlight",""),await this.testCSP();let ue=le&&ft.test(le.url);if(!Z&&ue?this.inSearchEngine():!le&&window.top==window.self&&this.checkSearchJump(),/^#sjhl=/.test(location.hash)){let w=location.hash.match(/^#sjhl=(.*?)(&i=(\d+))?$/),R=w[1],V=parseInt(w[3]||1)-1;try{R=decodeURIComponent(R)}catch(O){console.log(O)}this.setInPageWords(R,()=>{let ie=document.querySelectorAll("mark.searchJumper")[V];ie&&ie.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})})}else if(location.pathname==="/hoothin/SearchJumper/discussions/new"&&location.search==="?category=search-engines"){let w=c.sitesConfig.filter(R=>R&&!(/^BM/.test(R.type)&&R.icon==="bookmark"));Fi("#discussion_body","```json\n"+JSON.stringify(w,null,2)+"\n```")}let te=this.initInPageWords&&this.initInPageWords.length;(Ri||this.bar.style.display==="none"&&(!_e||!te))&&this.removeBar()}buildAllPageGroupTab(){let e=this;this.groupTab.innerHTML=ee(),Se.forEach(t=>{if(t.classList.contains("notmatch"))return;let r=t.dataset.type,i=t.firstElementChild.cloneNode(!0),s=document.createElement("span");s.appendChild(i),s.dataset.type=r,s.addEventListener("click",n=>{let a=e.sitelistBox.querySelector(`[data-type="${r}"]`);a&&a.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}),e.groupTab.appendChild(s)})}async refreshEngines(){if(c&&!this.refreshing){this.refreshing=!0,setTimeout(()=>{this.refreshing=!1},500),jt=c.lastModified,this.removeBar(),Se&&Se.length&&Se.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),Se=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.historyTypeEle=null;for(let e of c.sitesConfig)await this.createType(e);this.initHistorySites(),this.initSort(),this.buildAllPageGroupTab(),et&&this.appendBar()}}waitForHide(e){let t=this;if(this.bar.classList.contains("grabbing"))return;this.touched=!1;var r=()=>{if(t.bar.classList.remove("search-jumper-isTargetImg"),t.bar.classList.remove("search-jumper-isTargetAudio"),t.bar.classList.remove("search-jumper-isTargetVideo"),t.bar.classList.remove("search-jumper-isTargetLink"),t.bar.classList.remove("initShow"),t.tips.style.opacity=0,t.tips.style.display="none",t.tips.innerHTML=ee(""),t.funcKeyCall)if(t.setFuncKeyCall(!1),le&&!le.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||t.con.classList.contains("resizePage")){t.initPos();let s=t.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(s&&!s.classList.contains("search-jumper-open"))if(s.onmousedown)s.onmousedown();else{let n=new PointerEvent("mousedown");s.dispatchEvent(n)}}else t.bar.style.display="none";c.prefConfig.autoClose&&t.closeOpenType(),t.hideTimeout=null};this.hideTimeout&&clearTimeout(this.hideTimeout);let i=typeof e>"u"?this.funcKeyCall?500:c.prefConfig.autoDelay||1e3:e;i?this.hideTimeout=setTimeout(r,i):r(),this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}searchEngineWords(e){return e=e.replace(/( |^)-\S+/g,""),/".+"/.test(e)&&(e=e.replace(/"(.+)"/g,(t,r,i,s)=>`\u25CE${r}\u25CE`).replace(/^◎|◎$/g,"")),this.lastSearchEngineWords=e.replace(/['";]/g," "),this.lastSearchEngineWords}setInPageWords(e,t,r){this.initInPageWords.push(e),this.con.classList.add("in-find");let i=()=>{setTimeout(async()=>{if(_(document).style.display==="none"&&(_(document).style.display=""),this.lockWords)this.initInPageWords=[];else{for(;document.hidden;)await $e(1e3);q.setItem("lastHighlight",location.hostname);let s=this.initInPageWords.shift();for(;s;)this.searchJumperInPageInput.value=s,this.submitInPageWords(!!r),s=this.initInPageWords.shift()}t&&t(),await $e(100),q.setItem("lastHighlight","")},300)};if(document.readyState!="complete"){let s=n=>{document.readyState=="complete"&&(document.removeEventListener("readystatechange",s),window.removeEventListener("load",s),i())};document.addEventListener("readystatechange",s),window.addEventListener("load",s)}else i()}searchInPageRule(){if(c.prefConfig.disableAutoHighlight){let e=c.prefConfig.disableAutoHighlight.trim().split(`
`);for(let t=0;t<e.length;t++){let r=e[t],i=!1;if(r.indexOf("/")===0){let s=r.match(/^\/(.*)\/([igm]*)$/);s&&(i=new RegExp(s[1],s[2]).test(de))}else i=this.globMatch(r,de);if(i){this.disableAutoHighlight=!0;return}}}if(Ji===location.hostname&&(this.disableAutoHighlight=!0),c.prefConfig.inPageRule){let e=Object.keys(c.prefConfig.inPageRule);for(let t=0;t<e.length;t++){let r=e[t];if(!r)continue;let i=!1;if(r.indexOf("/")===0){let s=r.match(/^\/(.*)\/([igm]*)$/);s&&(i=new RegExp(s[1],s[2]).test(de))}else i=this.globMatch(r,de);if(i){let s=c.prefConfig.inPageRule[r];if(!s)continue;this.inPageRuleKey=r,this.disableAutoHighlight=!0,this.setInPageWords(s);break}}}}checkSearchJump(){if(this.inPageRuleKey||this.disableAutoHighlight)return;let e;if(c.prefConfig.showInSearchJumpPage&&Ht&&!zt&&$i.indexOf(Ht)!=-1){Ee&&this.wordModeBtn.classList.add("checked"),e=Ee;try{e=decodeURIComponent(e),e=this.searchEngineWords(e)}catch{}}if(e=e||Ne,e){this.appendBar();let t=this;this.setInPageWords(e,()=>{!t.navMarks.innerHTML&&t.bar.style.display==="none"&&t.removeBar()},!0)}else if(!this.searchJumperInPageInput.value&&$i.indexOf(Ht)!=-1&&Ee){e=Ee,this.wordModeBtn.classList.add("checked");try{e=decodeURIComponent(e)}catch{}this.searchJumperInPageInput.value=e}}inSearchEngine(){if(!this.currentType||!le||St||this.inPageRuleKey||this.disableAutoHighlight)return;if(!/sidesearch=(1|true)$/i.test(location.search)&&(!/#p{/.test(le.url)||le.keywords)){if(this.appendBar(),this.currentType.classList.contains("search-jumper-needInPage"))this.bar.classList.add("search-jumper-isTargetPage");else if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;c.prefConfig.hideOnSearchEngine||(this.bar.style.display="",this.initPos())}this.insertHistory(this.currentType,!0),this.wordModeBtn.classList.add("checked");let e=c.prefConfig.showInSearchEngine?this.searchEngineWords(Fe):Ne;e&&this.setInPageWords(e,null,!0)}getSuggest(e){let t=this.suggestDatalist;if(t.innerHTML=ee(),!e)return;let r=(i,s,n)=>{Be({method:"GET",url:i,responseType:n?"blob":"",headers:{referer:i,origin:i},onload:function(a){let o=a.response;if(!(a.status>=400||!o))if(n){let p=new FileReader;p.onload=()=>{s(p.result)},p.readAsText(o,n)}else s(o)},onerror:function(a){pe(a)},ontimeout:function(a){pe(a)}})};switch(c.prefConfig.suggestType){case"google":r("https://suggestqueries.google.com/complete/search?client=youtube&q=%s&jsonp=window.google.ac.h".replace("%s",e),i=>{if(i=i.match(/window.google.ac.h\((.*)\)$/,"$1"),i){i=JSON.parse(i[1])[1];for(let s in i){let n=document.createElement("option");n.value=i[s][0],t.appendChild(n)}}});break;case"baidu":r("https://suggestion.baidu.com/su?wd=%s&cb=".replace("%s",e),i=>{if(i=i.match(/.*,s:(.*)}\);$/,"$1"),i){i=JSON.parse(i[1]);for(let s in i){let n=document.createElement("option");n.value=i[s],t.appendChild(n)}}},"GBK");break;case"bing":r("https://api.bing.com/qsonhs.aspx?type=json&q=%s".replace("%s",e),i=>{if(i){i=JSON.parse(i).AS.Results;for(let s in i){let n=i[s].Suggests;for(let a in n){let o=document.createElement("option");o.value=n[a].Txt,t.appendChild(o)}}}});break;default:break}}searchSiteBtns(e){let t=e.indexOf("**"),r="",i=!1;t>0&&(r=e.slice(0,t),e=e.slice(t+2)),e.indexOf("^")===0?i=!0:(r=r.toLowerCase(),e=e.toLowerCase()),e?this.con.classList.add("searching"):this.con.classList.remove("searching");let s=!/[^\w\.\/\:\*\?\^\$]/.test(e);this.allListBtns.forEach(o=>{o.classList.add("input-hide")}),Se.forEach(o=>{o.classList.add("input-hide")});let n=0;this.filterGlob.innerHTML=ee(),this.allSiteBtns.forEach(o=>{let p=o[0],d=o[1],u=p.parentNode,f=p.dataset.type,h=p.dataset.name,m=p.title;i||(f=f.toLowerCase(),h=h.toLowerCase(),m=m.toLowerCase());let y="";if(r){if(!this.globMatch(r,f))return;y=p.dataset.type+"**"}let C=!1;if(p.dataset.clone||(this.globMatch(e,h)?(C=!0,y+="^"+p.dataset.name+"$"):p.title&&this.globMatch(e,m)&&(C=!0,y+="^"+p.title+"$")),!C){if(s){if(!p.dataset.host){let j=/^https?:\/\/([^\/]*)\/[\s\S]*$/,x=d.url;p.dataset.host=j.test(x)?x.replace(j,"$1"):x,p.dataset.host&&(p.dataset.host=p.dataset.host.toLowerCase())}C=this.globMatch(e,p.dataset.host)}C?y+="^"+p.dataset.host+"$":p.classList.add("input-hide")}if(C){p.classList.remove("input-hide"),u&&u.classList.remove("input-hide");let j;for(let x=0;x<this.allListBtns.length;x++)if(this.allListBtns[x].id=="list"+p.dataset.id){j=this.allListBtns[x];break}if(j&&j.classList.remove("input-hide"),n<50&&e&&this.searchInput.value!==y){n++;let x=document.createElement("option");x.value=y,this.filterGlob.appendChild(x)}}}),Se.forEach(o=>{let p;for(let d=0;d<this.allLists.length;d++)if(this.allLists[d].dataset.type==o.dataset.type){p=this.allLists[d];break}p&&(o.classList.contains("input-hide")?p.classList.add("input-hide"):p.classList.remove("input-hide"))});let a=this.bar.querySelector(".search-jumper-type:not(.input-hide)");if(a){if(!a.classList.contains("search-jumper-open")){let o=a.querySelector("span.search-jumper-btn");if(o.onmousedown)o.onmousedown();else{let p=new PointerEvent("mousedown");o.dispatchEvent(p)}}if(this.searchJumperExpand.parentNode==a){let o=new PointerEvent("click");this.searchJumperExpand.dispatchEvent(o)}}}globMatch(e,t,r){if(t.length>500)return!1;try{if(e.length==0||e==="*")return!0;if(e.length===1&&e[0]==="$")return!t||t.length===0;if(e.length>1&&e[0]==="*"&&(!t||t.length===0))return!1;if(!r)if(r=!0,e.length>1&&e[0]==="^"&&t&&t.length!==0){if(e=e.substring(1),e[0]!==t[0])return!1}else e[0]!=="*"&&(e="*"+e);if(e.length>1&&e[0]==="?"||e.length!=0&&t&&t.length!==0&&e[0]===t[0])return this.globMatch(e.substring(1),t.substring(1),!!r);if(e.length>0&&e[0]==="*")return this.globMatch(e.substring(1),t,!!r)||this.globMatch(e,t&&t.substring(1),!!r)}catch(i){pe(i)}return!1}setCurrentSite(e,t){le=e,t.classList.add("current"),Fe="",!/#p{|^(showTips|find)/.test(e.url)&&ft.test(e.url)&&(this.updateCacheKeywords(),q.setItem("referrer",location.hostname))}updateCacheKeywords(){let e=it();e&&e!=Ee&&(Ee=e,q.setItem("cacheKeywords",e))}refresh(){this.refreshInPageTimer&&clearTimeout(this.refreshInPageTimer),this.refreshInPageTimer=setTimeout(()=>{let e=this.curHighlightWords;if(this.highlight(""),this.highlight(e),this.bar.style.display=="none"){le=null;let t;for(let r in c.sitesConfig){if(le)break;if(t=c.sitesConfig[r],!t)continue;let i=t.sites;for(let s in i){if(le)break;let n=i[s];if(!n||!n.url)continue;let a;if(n.match!=="0"){if(n.match)new RegExp(n.match).test(de)&&(a=n);else if(n.url.indexOf(location.hostname)!=-1){if(n.url.indexOf("site")!=-1){let o=n.url.match(/site(%3A|:)([\s\S]+?)[\s%]/);o&&de.indexOf(o[2])!=-1&&n.url.replace(o[0],"").indexOf(location.hostname)!=-1&&(a=n)}else if(!le&&n.url.replace(/^https?:\/\//,"").replace(location.host,"").replace(/\/?[\?#][\s\S]*/,"")==location.pathname.replace(/\/$/,"")){let o=n.url.match(/[^\/\?&]+(?=%[stb])/g);o&&(o=o.join(".*"),new RegExp(o).test(de)&&(a=n))}}}if(a){let o=this.getTargetSitesByName([a.name])[0];this.currentType=o.parentNode,this.setCurrentSite(a,o)}}}if(le&&ft.test(le.url)&&(!/#p{/.test(le.url)||le.keywords)&&!c.prefConfig.hideOnSearchEngine){if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;this.appendBar(),this.bar.style.display="",this.initPos();let r=this.bar.querySelector(`.search-jumper-type[data-type="${t.type}"]>span`);if(r&&!r.classList.contains("search-jumper-open")&&(this.bar.insertBefore(r.parentNode,this.bar.children[0]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen))if(r.onmousedown)r.onmousedown();else{let i=new PointerEvent("mousedown");r.dispatchEvent(i)}}}},500)}initSort(){if(c.prefConfig.shiftLastUsedType&&this.historyTypeEle&&(le?this.bar.insertBefore(this.historyTypeEle,this.bar.children[1]):this.bar.insertBefore(this.historyTypeEle,this.bar.children[0])),c.prefConfig.sortType){let e=this;Se.sort((i,s)=>{let n=Le[i.dataset.type]||0;return(Le[s.dataset.type]||0)-n});let t=!1,r=!e.bar.children[0].classList.contains("search-jumper-open");for(let i=Se.length-1;i>=0;i--){let s=Se[i],n=Le[s.dataset.type]||0;if(i==Se.length-1)n>0&&(t=!0,Le[s.dataset.type]=0);else{let a=Le[Se[i+1].dataset.type]||0;n-a>10&&(t=!0,Le[s.dataset.type]=a+10)}e.bar.insertBefore(s,e.bar.children[r?0:1])}t&&q.setItem("sortTypeNames",Le)}}initHistorySites(){this.historySiteBtns=[],this.txtHistorySiteBtns=[],this.imgHistorySiteBtns=[],this.linkHistorySiteBtns=[],this.videoHistorySiteBtns=[],this.audioHistorySiteBtns=[];let e=this;Ye.forEach(async t=>{for(let r of c.sitesConfig){let i=!1,s=r.bookmark||r.sites.length>100||/^BM/.test(r.type)&&r.icon==="bookmark";for(let n=0;n<r.sites.length;n++){let a=r.sites[n];if(a.name==t){let o=await e.createSiteBtn(c.prefConfig.noIcons?"0":a.icon,a,!0,s,r,!0);o.classList.add("historySite"),e.historySiteBtns.push(o),!r.selectImg&&!r.selectLink&&!r.selectPage&&!r.selectVideo&&!r.selectAudio&&e.txtHistorySiteBtns.push(o),r.selectImg&&e.imgHistorySiteBtns.push(o),(r.selectLink||r.selectPage)&&e.linkHistorySiteBtns.push(o),r.selectVideo&&e.videoHistorySiteBtns.push(o),r.selectAudio&&e.audioHistorySiteBtns.push(o),i=!0;break}}if(i)break}})}insertHistory(e,t){if(!c.prefConfig.historyLength)return;e.style.width="auto",e.style.height="auto";let r=this;this.historyInserted=!0;let i=0,s=!t&&c.prefConfig.historyInsertFirst,n=!1,a=0;s||(n=this.searchJumperExpand.parentNode==e&&!c.prefConfig.expandType,n&&(a=(c.prefConfig.numPerLine||7)-1,a=c.prefConfig.historyLength<a?a+a-c.prefConfig.historyLength:a,c.prefConfig.hideTileType&&a++));let o=this.historySiteBtns;e.classList.contains("search-jumper-needInPage")?o=this.txtHistorySiteBtns:e.classList.contains("search-jumper-targetImg")?o=this.imgHistorySiteBtns:e.classList.contains("search-jumper-targetAudio")?o=this.audioHistorySiteBtns:e.classList.contains("search-jumper-targetVideo")?o=this.videoHistorySiteBtns:(e.classList.contains("search-jumper-targetLink")||e.classList.contains("search-jumper-targetPage"))&&(o=this.linkHistorySiteBtns);for(let p=0;p<o.length;p++){let d=o[p];if(d.style.display=="none")continue;let u=d.querySelector("img");if(u&&u.dataset.src&&(u.src=u.dataset.src,delete u.dataset.src),d.parentNode!=e){let f=e.querySelectorAll("a.search-jumper-btn"),h=!1;for(let m=0;m<f.length;m++){let y=f[m];if((y.dataset.oriName||y.dataset.name)==(d.dataset.oriName||d.dataset.name)){h=!0;break}}if(h)continue;if(s)e.children.length>1?e.insertBefore(d,e.children[1]):e.appendChild(d);else if(n){let m=e.querySelectorAll("a.search-jumper-btn");m.length>a?e.insertBefore(d,m[a]):e.insertBefore(d,r.searchJumperExpand)}else e.appendChild(d);if(++i>=c.prefConfig.historyLength)break}else s&&(e.children.length>1?e.insertBefore(d,e.children[1]):e.appendChild(d))}e.style.width=e.scrollWidth+"px",e.style.height=e.scrollHeight+"px"}recoveHistory(){if(!c.prefConfig.historyLength||!this.historyInserted)return;this.historyInserted=!1;let e=this,t;for(let r=0;r<this.historySiteBtns.length;r++){let i=this.historySiteBtns[r];i.classList.contains("historySite")&&(t=i.parentNode,this.siteBtnReturnHome(i))}t&&t.classList.contains("search-jumper-open")&&(t.style.width="auto",t.style.height="auto",t.style.width=t.scrollWidth+"px",t.style.height=t.scrollHeight+"px")}bindSite(e,t){if(e.getAttribute("bind"))return;e.setAttribute("bind",!0);let r=this;t.href&&(e.href=t.href),e.style.display=t.style.display,e.addEventListener("mousedown",async i=>{t.dataset.showTips?(r.con.classList.contains("search-jumper-showall")?M=e.parentNode:r.waitForHide(0),t.dispatchEvent(new CustomEvent("showTips"))):(await r.siteSetUrl(t,{button:i.button,altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,metaKey:i.metaKey}),t.href&&(e.href=t.href),e.setAttribute("target",t.target)),e.onclick||(e.onclick=s=>(t.dataset.showTips||t.click(),s.stopPropagation(),s.preventDefault(),!1))},!1),e.addEventListener("dragover",i=>{i.preventDefault()},!0),e.addEventListener("dragenter",i=>{r.dragTarget&&r.dragTarget.classList.remove("dragTarget"),r.dragTarget=e,r.dragTarget.classList.add("dragTarget"),clearTimeout(r.dragTimer),r.dragTimer=setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},1e3)},!0),e.addEventListener("dragleave",i=>{e.classList.remove("dragTarget")},!0),e.addEventListener("drop",i=>{clearTimeout(r.dragTimer),r.dragTarget&&r.dragTarget.classList.remove("dragTarget"),r.searchBySiteName(t.dataset.name,i)},!0)}async createList(e,t,r){let i=this,s=document.createElement("div");s.className="sitelist",s.style.visibility="hidden";let n=document.createElement("div");n.className="sitelistCon",s.appendChild(n),s.addEventListener("mouseenter",p=>{i.listArrow.style.cssText=""});let a=document.createElement("p");a.innerText=t.dataset.title,a.title=E("batchOpen"),a.addEventListener("click",p=>{i.batchOpen(r,{ctrlKey:p.ctrlKey,shiftKey:p.shiftKey,altKey:p.altKey,metaKey:p.metaKey,button:p.ctrlKey||p.shiftKey||p.altKey||p.metaKey?0:2})}),s.dataset.type=t.dataset.type,n.appendChild(a);function o(p,d){let u=document.createElement("div");u.id="list"+d;let f=p.querySelector("img"),h=document.createElement("a");if(h.setAttribute("ref","noopener noreferrer"),i.bindSite(h,p),u.appendChild(h),i.allListBtns.push(u),f&&!c.prefConfig.noIcons){let y=f.src||f.dataset.src,C=document.createElement("img");h.appendChild(C),C.onload=j=>{C.style.width="",C.style.height="",C.style.display=""},C.onerror=j=>{C.src=hi},C.style.width="1px",C.style.height="1px",C.style.display="none",y?(/^data:/.test(y)||(C.\u03BFnerr\u03BFr=j=>{C.src=hi,C.onerror=null,C.style.width="",C.style.height="",C.style.display=""}),C.dataset.src=y):C.dataset.src=hi}let m=document.createElement("p");m.innerText=p.dataset.name,u.title=p.title,u.dataset.name=p.dataset.name,h.appendChild(m),n.appendChild(u)}try{for(let[p,d]of e.entries())o(d,d.dataset.id),p%50===49&&await $e(1)}catch{for(let d=0;d<e.length;d++){let u=e[d];o(u,u.dataset.id)}}return this.allLists.push(s),s}async initList(e){e.dataset.inited||(e.style.display="none",e.dataset.inited=!0,[].forEach.call(e.querySelectorAll("div>a>img"),t=>{t.dataset.src&&(t.src=t.dataset.src,delete t.dataset.src)}),await $e(0))}async listPos(e,t){await this.initList(t),t.style="",this.preList=t;let r=e.clientWidth,i=e.clientHeight,s=e.offsetLeft+r/2-this.con.scrollLeft,n=e.offsetTop+i/2-this.con.scrollTop,a=e.offsetParent;for(;a!==null;)s+=a.offsetLeft,n+=a.offsetTop,a=a.offsetParent;let o=window.innerWidth||document.documentElement.clientWidth,p=window.innerHeight||document.documentElement.clientHeight,d=this.listArrow.style;if(d.visibility="visible",d.opacity=1,this.funcKeyCall){t.style.display="block",d.opacity=0;const u=e.getBoundingClientRect();s=u.x+r/2-this.con.scrollLeft,n=u.y+i/2-this.con.scrollTop,s-=t.clientWidth/2;let f=e.getBoundingClientRect().top;f>p/2?(f<t.clientHeight+10&&(t.style.height=f-20+"px"),n-=t.clientHeight+i/2+5):(n+=i/2+5,f+t.clientHeight+i+10>p&&(t.style.height=p-f-i-20+"px")),s<20&&(s=20);let h=o-t.clientWidth-30;s>h&&(s=h),t.style.left=s+"px",t.style.top=n+"px",t.style.display=""}else if(this.bar.clientWidth>this.bar.clientHeight){let u=s;s<30?u=30:s>o-40&&(u=o-40),d.left=u-10+"px",n-i/2<100?(t.style.top=this.bar.clientHeight+"px",d.top=this.bar.clientHeight-10+"px"):(t.style.bottom=this.bar.clientHeight+"px",d.bottom=this.bar.clientHeight-9+"px"),s-=t.scrollWidth/2,s>o-t.scrollWidth-10&&(s=o-t.scrollWidth-10),s<0&&(s=0),t.style.left=s+"px"}else{let u=n;n<30?u=30:n>p-30&&(u=p-30),d.top=u-10+"px",s-r/2<100?(t.style.left=this.bar.clientWidth+"px",d.left=this.bar.clientWidth-9+"px"):(t.style.right=this.bar.clientWidth+"px",d.right=this.bar.clientWidth-9+"px"),n-=t.scrollHeight/2,n>p-t.scrollHeight&&(n=p-t.scrollHeight),n<0&&(n=0),t.style.top=n+"px",t.style.maxHeight="100vh"}}clingPos(e,t,r){let i=e.clientWidth||e.offsetWidth,s=e.clientHeight||e.offsetHeight;const n=e.getBoundingClientRect();let a,o,p=this.con&&this.con.classList.contains("search-jumper-showall"),d=window.innerWidth||document.documentElement.clientWidth,u=window.innerHeight||document.documentElement.clientHeight;if(this.tips.style.position="",t.style.height="",!e||/^(body|html)$/i.test(e.nodeName))this.tips.style.transition="none",this.tips.style.position="fixed",t.style.right="",t.style.bottom="",t.style.left=(d-t.clientWidth)/2+"px",t.style.top="min(11%,110px)";else if(p)a=n.x+i/2,o=n.y+s/2,a-=t.clientWidth/2-this.con.scrollLeft,o+=this.con.scrollTop,o>u/2?o-=t.clientHeight+s/2+10:o+=s/2+10,t.style.right="",t.style.bottom="",t.style.left=a+"px",t.style.top=o+"px";else if(this.funcKeyCall){let f=window.pageYOffset||document.documentElement.scrollTop||_(document).scrollTop,h=window.pageXOffset||document.documentElement.scrollLeft||_(document).scrollLeft;a=n.x+i/2-this.con.scrollLeft+h,o=n.y+s/2-this.con.scrollTop+f,a-=t.clientWidth/2;let m=e.getBoundingClientRect().top;m>u/2?(m<t.clientHeight+10&&(t.style.height=m-20+"px"),o-=t.clientHeight+s/2+5):(o+=s/2+5,m+t.clientHeight+s+10>u&&(t.style.height=u-m-s-20+"px")),a<20&&(a=20);let y=d+h-t.clientWidth-30;a>y&&(a=y),t.style.right="",t.style.bottom="",t.style.left=a+"px",t.style.top=o+"px"}else{a=e.offsetLeft+i/2-this.con.scrollLeft-e.parentNode.scrollLeft,o=e.offsetTop+s/2-this.con.scrollTop-e.parentNode.scrollTop;let f=e.offsetParent;for(;f!==null;)a+=f.offsetLeft,o+=f.offsetTop,f=f.offsetParent;o<s?(a-=t.clientWidth/2,o+=t.clientHeight/2,a<5?(a=5,t.style.left="5px",t.style.right="",t.style.bottom=""):a>d-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.bottom=""):(t.style.left=a+"px",t.style.right="",t.style.bottom=""),t.style.top=(r?s:s+20)+"px"):o>u-s-10?(a-=t.clientWidth/2,a<5?(t.style.left="5px",t.style.right="",t.style.top=""):a>d-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.top=""):(t.style.left=a+"px",t.style.right="",t.style.top=""),t.style.bottom=(r?s:s+20)+"px"):a>d-i-10?(t.style.left="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.right=(r?i:i+20)+"px",t.style.top=o+"px"):a<i?(t.style.right="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.left=(r?i:i+20)+"px",t.style.top=o+"px"):(t.style.right="",t.style.bottom="",t.style.left=a+"px",t.style.top=o+"px")}}tipsPos(e,t){this.tips.innerHTML=ee(t),this.tips.style.pointerEvents="",this.tips.style.display="",this.tips.style.opacity=1,this.clingPos(e,this.tips),clearTimeout(this.hideTips),this.tips.style.transition&&setTimeout(()=>{this.tips.style.transition=""},1);let r=this;[].forEach.call(this.tips.querySelectorAll("iframe"),i=>{let s=i.innerHTML;if(s)if(i.innerHTML=ee(),i.src)i.addEventListener("load",n=>{try{if(!i||!i.parentNode)return;let a=i.contentDocument||i.contentWindow.document,o=a.createElement("div");a.body.appendChild(o),o.outerHTML=ee(s)}catch{}});else try{let n=i.contentDocument||i.contentWindow.document;n.open(),n.write(s),n.close()}catch{}}),[].forEach.call(this.tips.querySelectorAll("img,video"),i=>{i.addEventListener("load",s=>{r.clingPos(e,r.tips)})}),window.markdownit&&(r.md||(r.md=window.markdownit()),[].forEach.call(this.tips.querySelectorAll(".markdown"),i=>{i.innerHTML=ee(r.md.render(i.innerHTML))}))}checkKwFilter(e,t){t.length>600&&(t=t.slice(0,500)+t.slice(t.length-10));let r=e.match(/^@{(.*?)}/);if(r){if(!M)return!1;let n=r[1];if(![].some.call(ni(n,document),o=>o===M))return!1;e=e.replace(r[0],"")}let i,s=e.match(/^\/(.*)\/(\w*)$/);return s?i=new RegExp(s[1],s[2]):i=new RegExp(e,"i"),i.test(t||"")}async createType(e){let t=this,r=e.type,i=e.icon,s=e.selectTxt,n=e.selectImg,a=e.selectAudio,o=e.selectVideo,p=e.selectLink,d=e.selectPage,u=e.sites,f=!1,h=typeof e.openInNewTab>"u"?c.prefConfig.openInNewTab:e.openInNewTab,m=[],y=document.createElement("span");y.className="search-jumper-type",!c.prefConfig.expandType&&u.length>10&&y.classList.add("not-expand"),e.match==="0"?(y.style.display="none",y.classList.add("notmatch")):e.match&&(new RegExp(e.match).test(de)==!1?(y.style.display="none",y.classList.add("notmatch")):f=!0),typeof e.description<"u"?y.dataset.title=r+" - "+e.description:y.dataset.title=r,y.dataset.type=r;let C=document.createElement("span"),j=document.createElement("img"),x=document.createElement("b");r.length>=3?(x.innerText=r.trim().substr(0,4),/^[\w \-]+$/.test(x.innerText.substr(0,3))||(x.innerText=x.innerText.substr(0,2))):x.innerText=r,C.appendChild(x),j.style.display="none",y.appendChild(C),C.classList.add("search-jumper-word"),C.classList.add("search-jumper-btn"),C.classList.add("noIcon");let L=/^BM/.test(r)&&e.icon==="bookmark";if(i){C.classList.remove("noIcon");let J=/^[a-z\- ]+$/.test(i);if(j.onload=I=>{j.style.display="",x.innerText="",x.style.display="none",J||C.classList.remove("search-jumper-word")},J){let I=be[i.trim().replace(/ /g,"_")];I==="fail"||!I?(x.className=i.indexOf("fa")===0?i:"fa fa-"+i,this.fontPool.push(x)):(j.src=I,j.style.width="100%",j.style.height="100%",C.appendChild(j))}else{if(/^data:/.test(i))j.src=i;else{let v=c.prefConfig.cacheSwitch&&be[i];v==="fail"||(v?j.src=v:(j.src=i,!be[i]&&!L&&He.push(j)))}C.appendChild(j)}}y.addEventListener("mouseleave",J=>{t.listArrow.style.cssText="",t.dockerScaleBtns.forEach(I=>{I.style.setProperty("--scale",1)})});let $=[],T=J=>{switch(c.prefConfig.batchOpenConfirm){case 1:window.confirm(E("batchOpenConfirm"))&&t.batchOpen($,J);break;case 2:t.batchOpen($,J);break;default:(y.classList.contains("search-jumper-open")||J.shiftKey||J.altKey||J.ctrlKey||J.metaKey||window.confirm(E("batchOpenConfirm")))&&t.batchOpen($,J);break}};if(c.prefConfig.shortcut&&e.shortcut&&!y.classList.contains("notmatch")){let J=e.shortcut.replace("Key","").replace("Digit","").toUpperCase();J.length==1&&(y.dataset.title+=` (${J})`),document.addEventListener("keydown",I=>{if(!(c.prefConfig.shortcut==2&&!le)&&I.target.id!=="searchJumperInput"&&!(!e.ctrl==I.ctrlKey||!e.alt==I.altKey||!e.shift==I.shiftKey||!e.meta==I.metaKey)&&!(!c.prefConfig.enableInInput&&!e.ctrl&&!e.alt&&!e.shift&&!e.meta&&Ct(document))){var v=(I.key||String.fromCharCode(I.keyCode)).toLowerCase();(e.shortcut==I.code||e.shortcut==v)&&(T(I),I.stopPropagation())}})}let U=0,z=this.scale*40,B=(J,I)=>{I?(J.style.display="",y.children.length>2&&y.insertBefore(J,y.children[2])):(J.style.display="none",t.searchJumperExpand.parentNode==y?y.insertBefore(J,t.searchJumperExpand):y.appendChild(J))},b=J=>{if(J){if(J.button===2)return T(J),!1;if(J.button===0&&(J.shiftKey||J.altKey||J.ctrlKey))return!1}if(t.funcKeyCall)return t.showAllSites(),!1;let I=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right");if(t.preList&&(t.preList.style.visibility="hidden",t.listArrow.style.cssText=""),y.classList.remove("search-jumper-move"),y.classList.contains("search-jumper-open"))c.prefConfig.minSizeMode&&t.bar.classList.add("minSizeModeClose"),y.classList.remove("search-jumper-open"),I?(y.style.height=z+"px",y.style.width=""):(y.style.height="",y.style.width=z+"px"),y.style.flexWrap="",c.prefConfig.disableTypeOpen&&(te.style.visibility="hidden");else{t.recoveHistory(),y.classList.add("search-jumper-open"),c.prefConfig.minSizeMode&&t.bar.classList.remove("minSizeModeClose");let v=!1;M&&(v=Di(M));let g=M&&(M.href||M.src),S=it();U=0,m.forEach((H,K)=>{let F=u[K],re=!0;if(F.kwFilter){let fe;H.dataset.link?fe=g||S:fe=H.dataset.txt?S||M&&M.innerText||"":g||S||location.href,re=t.checkKwFilter(F.kwFilter,fe)}re&&H.dataset.paste?(re=v,B(H,re)):F.kwFilter&&B(H,re);let se=H.querySelector("img");H.style.display!="none"&&U++,se&&!se.src&&se.dataset.src&&(se.src=se.dataset.src,delete se.dataset.src)}),U>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(y.classList.add("not-expand"),y.appendChild(t.searchJumperExpand));let W=Math.max(y.scrollWidth,y.scrollHeight)+5+"px";c.prefConfig.disableTypeOpen&&(W=z+"px",J&&t.listPos(y.children[0],te)),I?(y.style.height=W,y.style.width=""):(y.style.width=W,y.style.height=""),setTimeout(()=>{y.classList.contains("search-jumper-open")&&(y.style.flexWrap="nowrap",y.classList.add("search-jumper-move"))},c.prefConfig.typeOpenTime),Se.forEach(H=>{y!=H&&(H.classList.remove("search-jumper-open"),H.style.width=z+"px",H.style.height=z+"px",H.style.flexWrap="")})}c.prefConfig.disableTypeOpen||setTimeout(()=>{t.checkScroll()},c.prefConfig.typeOpenTime)},P=!1,D,N,A=J=>{document.removeEventListener("mouseup",A),document.removeEventListener("mousemove",Z),P||b(J),P=!1},Z=J=>{P?(t.bar.style.left=N.x+J.clientX-D.x+"px",t.bar.style.top=N.y+J.clientY-D.y+"px"):(t.tips.style.opacity=0,P=!0,D={x:J.clientX,y:J.clientY},N={x:parseInt(t.bar.style.left),y:parseInt(t.bar.style.top)})};C.onmouseup=function(J){if(J&&t.funcKeyCall&&J.button===0&&!(J.shiftKey||J.altKey||J.ctrlKey)){P=!1,J.preventDefault&&J.preventDefault(),document.addEventListener("mouseup",A),document.addEventListener("mousemove",Z);return}b(J)},C.oncontextmenu=function(J){J.preventDefault()},C.addEventListener("click",J=>(t.batchOpen($,J),!1),!1),C.addEventListener("dblclick",J=>{J.stopPropagation(),J.preventDefault()},!0);let ue,te,w=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,R=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,V=!Wt||w>600&&R>600;y.addEventListener("sitelist",async J=>{y.appendChild(te),await t.listPos(J.detail.bind,te),te.style.display="block"},!1),C.addEventListener("mouseenter",J=>{if(!P&&(!t.funcKeyCall&&c.prefConfig.showSiteLists&&(c.prefConfig.alwaysShowSiteLists||!y.classList.contains("search-jumper-open"))?(y.appendChild(te),t.listPos(y.children[0],te)):V&&t.tipsPos(C,y.dataset.title),c.prefConfig.overOpen)){if(y.classList.contains("search-jumper-open"))return;clearTimeout(ue),ue=setTimeout(()=>{b(J)},500)}},!1),C.addEventListener("mouseleave",J=>{t.tips.style.opacity=0,c.prefConfig.overOpen&&clearTimeout(ue)},!1);let O=!1,ie=u&&u.length>200;y.dataset.id=t.siteIndex,t.stopInput=!1;async function ne(J,I){if(!J.name)return;let v=await t.createSiteBtn(ie||c.prefConfig.noIcons?"0":J.icon,J,h,L,e);v&&(v.classList.contains("notmatch")||U++,v.dataset.type=r,v.dataset.id=t.siteIndex,t.siteIndex++,t.allSiteBtns.push([v,J]),y.appendChild(v),m.push(v),!J.nobatch&&J.match!=="0"&&$.push(J.name),!O&&!le&&(v.dataset.current||f)&&!y.classList.contains("notmatch")&&(O=!0,v.dataset.current&&(c.prefConfig.showCurrent||(v.style.display="none"),t.setCurrentSite(J,v)),t.currentType=y))}try{for(let[J,I]of u.entries())await ne(I,J),J%100===99&&await $e(1)}catch{for(let I=0;I<u.length;I++)ne(u[I],I);await $e(1)}if(c.prefConfig.sortSite&&y.children.length>1){m.sort((I,v)=>{let g=Pe[I.dataset.name]||0;return(Pe[v.dataset.name]||0)-g});let J=!1;for(let I=m.length-1;I>=0;I--){let v=m[I],g=Pe[v.dataset.name]||0;if(I==m.length-1)g>0&&(J=!0,Pe[v.dataset.name]=0);else{let S=Pe[m[I+1].dataset.name]||0;g-S>10&&(J=!0,Pe[v.dataset.name]=S+10)}y.insertBefore(v,y.children[1])}J&&q.setItem("sortSiteNames",Pe)}if(m.forEach(J=>{J.classList.contains("notmatch")&&y.appendChild(J)}),te=await t.createList(m,y,$),O){if(c.prefConfig.currentTypeFirst?t.bar.insertBefore(y,t.bar.children[0]):t.bar.insertBefore(y,t.bar.children[t.bar.children.length-1]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){y.classList.add("search-jumper-open"),y.classList.add("search-jumper-move"),U>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(y.classList.add("not-expand"),y.appendChild(t.searchJumperExpand));let J=-1,I=[];if(document.readyState!=="complete"){J=3;let v=g=>{document.readyState==="complete"&&(document.removeEventListener("readystatechange",v),window.removeEventListener("load",v),I.forEach(S=>{S&&!S.src&&S.dataset.src&&(S.src=S.dataset.src,delete S.dataset.src)}),I=[])};document.addEventListener("readystatechange",v),window.addEventListener("load",v)}m.forEach((v,g)=>{let S=v.querySelector("img"),W=u[g];if(W&&Fe&&W.kwFilter&&(t.checkKwFilter(W.kwFilter,Fe)?v.style.display="":(v.style.display="none",t.searchJumperExpand.parentNode==y?y.insertBefore(v,t.searchJumperExpand):y.appendChild(v))),v.style.display!="none"&&S&&!S.src&&S.dataset.src){if(J>=0&&!/^data/.test(S.dataset.src))if(J!==0)J--;else{I.push(S);return}S.src=S.dataset.src,delete S.dataset.src}})}}else t.historyTypeEle||kt==r&&(t.historyTypeEle=y),t.bar.insertBefore(y,t.bar.children[t.bar.children.length-1]);return y.style.width=y.scrollHeight+"px",y.style.height=y.scrollHeight+"px",te.style.display="none",y.appendChild(te),s&&n&&a&&o&&p&&d?y.classList.add("search-jumper-targetAll"):(s&&y.classList.add("search-jumper-needInPage"),n&&y.classList.add("search-jumper-targetImg"),a&&y.classList.add("search-jumper-targetAudio"),o&&y.classList.add("search-jumper-targetVideo"),p&&y.classList.add("search-jumper-targetLink"),d&&y.classList.add("search-jumper-targetPage")),Se.push(y),y}async openSiteBtn(e,t,r=!1){await this.siteSetUrl(e);let i=e.dataset.isPage;t||(t="_blank"),i&&e.setAttribute("target",t),i&&t=="_blank"&&e.href?ge(e.href,{active:r,insert:!0}):e.click(),e.setAttribute("target",e.dataset.target==1?"_blank":"_self")}async batchOpen(e,t,r){let i=this;if(i.batchOpening=!0,i.customInput=!1,t.altKey&&t.shiftKey){let s=i.getTargetSitesByName(e),n=window.innerWidth||document.documentElement.clientWidth,a="<title>SearchJumper Multi</title><style>body{background: black; margin: 0;}iframe{box-sizing: border-box;padding: 5px}</style>",o=window.open("","_blank"),p=1;for(let d of s)if(d.dataset.isPage){if(await i.siteSetUrl(d),i.stopInput)return;if(!d.href)continue;let u=document.createElement("iframe");u.width=s.length<=2||n<=1280?"50%":"33%",u.height="100%",u.frameBorder="0",u.sandbox="allow-same-origin allow-scripts allow-popups allow-forms",u.id="searchJumper"+p++,u.style.display="none",a+=u.outerHTML,Be({method:"GET",url:d.href,headers:{referer:d.href,origin:d.href,"User-Agent":navigator.userAgent},onload:function(f){let h=o.document.querySelector("iframe#"+u.id),m=()=>{let y=h.contentDocument||h.contentWindow&&h.contentWindow.document;if(y)try{h.style.display="",h.src=d.href;let C=`<base href="${d.href.replace(/[^\/]*$/,"")}" />`,j=f.response.indexOf("<head")!==-1?f.response.replace(/(\<head.*?\>)/,"$1"+C):C+f.response;y.write(j)}catch{}else setTimeout(()=>{m()},500)};h&&m()},onerror:function(f){pe(f)},ontimeout:function(f){pe(f)}})}o.document.write(a),o.document.close()}else if((t.ctrlKey||t.metaKey)&&t.shiftKey){let s=i.getTargetSitesByName(e);for(let n of s){if(await i.siteSetUrl(n),i.stopInput)return;if(n.dataset.isPage&&n.href){let a={};M&&(a={src:M.src||M.href||"",title:M.title||M.alt}),e=e.filter(o=>o!==n.dataset.name),q.setItem("lastSign",{target:a,sites:e}),setTimeout(()=>{ge(n.href,{incognito:!0})},300),setTimeout(()=>{q.setItem("lastSign",!1)},2e3);break}}}else if(t.altKey){let s=i.getTargetSitesByName(e),n=[];for(let f of s)if(f.dataset.isPage){if(await i.siteSetUrl(f),i.stopInput)return;if(!f.href)continue;n.push(f.href)}let a=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,o=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,p=parseInt(a/800);p>n.length&&(p=n.length);let d=parseInt(a/p),u=o/(parseInt((n.length-1)/p)+1)-65;for(let f=0;f<n.length;f++){let h=f%p*d,m=parseInt(f/p)*(u+70);window.open(n[f]+"#searchJumperMin","_blank",`width=${d-10}, height=${u}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${h}, top=${m}`)}}else if(t.shiftKey){let s=i.getTargetSitesByName(e);for(let n of s){if(await i.siteSetUrl(n),i.stopInput)return;if(n.dataset.isPage&&n.href){let a={};M&&(a={src:M.src||M.href||"",title:M.title||M.alt}),e=e.filter(o=>o!==n.dataset.name),q.setItem("lastSign",{target:a,sites:e}),window.open(n.href,"_blank"),setTimeout(()=>{q.setItem("lastSign",!1)},2e3);break}}}else if(t.ctrlKey||t.metaKey){let s=i.getTargetSitesByName(e).reverse();for(let n of s){if(await i.siteSetUrl(n),n.dataset.isPage&&n.href){ge(n.href,{active:!1,insert:!0});continue}if(i.stopInput)return;n.click()}}else t.button===2&&i.getTargetSitesByName(e).reverse().forEach(n=>{n.dataset.current||i.openSiteBtn(n,"_blank",!!r)});i.batchOpening=!1}async siteSetUrl(e,t){return new Promise(r=>{let i=n=>{e.removeEventListener("actionOver",i),r(!0)};e.addEventListener("actionOver",i);let s=new PointerEvent("mousedown",t);e.dispatchEvent(s)})}getTargetSitesByName(e,t){let r=this,i=[];return e.forEach(s=>{for(let n=0;n<r.allSiteBtns.length;n++){let a=r.allSiteBtns[n][0];if(a.dataset.name==s){if(!t&&a.dataset.pointer){if(a.dataset.oriName){let o=r.getTargetSitesByName([a.dataset.oriName],!0);if(o.length){i.push(...o);break}}}else i.push(a);break}}}),i}async submitAction(e){if(e=e.slice(),document.readyState!=="complete"&&document.readyState!=="interactive"){await $e(300),this.submitAction(e);return}let t,r,i=!1,s=this,n=!1,a=0,o=[],p=!1,d=[],u=await q.getItem("copyStore");u&&(d=JSON.parse(u));let f=async(h,m)=>{let y=!0;if(h[0]==="sleep"||h[0]==="@sleep")await $e(h[1]),pe(`sleep ${h[1]}`);else if(h[0]==="@click")i=!0,await Ui(h[1],m)||(y=!1);else if(h[0]==="@dblclick")i=!0,await wr(h[1],m)||(y=!1);else if(h[0]==="@rclick")i=!0,await Sr(h[1],m)||(y=!1);else if(h[1]==="click"&&h[0].indexOf("@")===0)i=!0,await Ui(h[0].substr(1),m)||(y=!1);else if(h[0]==="@copy"){let C=await Lt(h[1],m);C&&C!==!0&&(d.push(C.innerText),ct||(y=!1))}else if(h[0]==="@call"){let C=s.getTargetSitesByName([h[1]])[0];if(C)Nt=Nt||it()||Ee,await s.siteSetUrl(C),C.click();else{let j=window[h[1]]||new ai('"use strict";'+h[1]);j&&await j()}}else if(h[0]==="@open"){let C=await Rt(h[1]);p?ge(C.href):(p=!0,setTimeout(()=>{location.href=C.href},50))}else if(h[0]!=="@reload")if(h[0]==="@wait")h[1].indexOf("!")===0?await vr(h[1].slice(1)):await Rt(h[1]);else{let C=h[1];if(Fe||(Fe=C),C.indexOf("%input{")!==-1){let x=await s.showCustomInputWindow(C);if(x)C=x;else return q.setListItem("inPagePostParams",location.hostname,""),!0}await Fi(h[0],C,m)||(y=!1),h[0]!=="@"&&(r=bt(h[0]))}return y};for(let h of e){if(h[0]==="@loopStart")n=!0,o=[],a=parseInt(h[1])||1;else if(h[0]==="@loopEnd")for(n=!1;a-- >0;){let m=!1,y=0;for(;!m;){m=!0;for(let C of o)await f(C,y)||(m=!1);y++}}else n?o.push(h):await f(h);if(Ve&&(Ve.shift(),Ve&&Ve.length?(q.setListItem("inPagePostParams",location.hostname,Ve),q.setItem("copyStore",JSON.stringify(d))):(Oe(d.join(`
`)),q.setListItem("inPagePostParams",location.hostname,""),q.setItem("copyStore","")),h[0]==="@reload")){location.reload(!!h[1]);return}}if(n)for(n=!1;a-- >0;){let h=!1,m=0;for(;!h;){h=!0;for(let y of o)await f(y,m)||(h=!1);m++}}if(!i&&r){for(t=r.parentNode;t.nodeName.toUpperCase()!="FORM"&&(t=t.parentNode,!!t););if(t){let h=t.querySelector("[type=submit]");h?h.click():t.submit()}else xr()}}getCloneData(e){for(let t=0;t<c.sitesConfig.length;t++){let r=c.sitesConfig[t];for(let i=0;i<r.sites.length;i++){let s=r.sites[i];if(!/^\[/.test(s.url)&&s.name==e)return s}}return null}async createSiteBtn(e,t,r,i,s,n){let a=this,o=document.createElement("a");o.setAttribute("ref","noopener noreferrer"),o.setAttribute("referrerPolicy","no-referrer");let p=t.name,d=t.match,u=!1,f,h=!i&&/^\[/.test(t.url),m=t.description,y=t.shortcut;if(typeof t.openInNewTab<"u"&&(r=t.openInNewTab),h){o.dataset.pointer=!0;let g=JSON.parse(t.url);if(g.length===1){o.dataset.clone=!0;let S=this.getCloneData(g[0]);S&&(o.dataset.oriName=S.name,t=S,t.icon&&e!=="0"&&(e=t.icon),t.description&&(m=t.description))}}/^d:/.test(t.url)?(o.setAttribute("download",""),t.url=t.url.replace(/^d:/,"")):/^showTips:/.test(t.url)&&(u=!0,o.dataset.showTips=!0),/^paste:/.test(t.url)&&(o.dataset.paste=!0);let C=/^(https?|ftp):/.test(t.url);C&&(o.dataset.isPage=C),o.className="search-jumper-btn",typeof m<"u"&&(o.title=m),o.dataset.name=p,o.classList.add("search-jumper-word"),o.dataset.inPagePost=t.url.indexOf("#p{")!=-1?"t":"f";let j=o.dataset.inPagePost==="t";if(d==="0")o.style.display="none",o.classList.add("notmatch");else if(!i&&(!le||t.hideNotMatch)&&window.top==window.self){if(d){let g,S=d.match(/^\/(.*)\/(\w*)$/);S?g=new RegExp(S[1],S[2]):g=new RegExp(d,"i"),g.test(de)&&(o.dataset.current=!0)}else if(!h&&location.hostname&&t.url.indexOf(location.hostname)!=-1){this.inSiteMatch||(this.inSiteMatch=/site(%3A|:)(.+?)[\s%]/);let g=t.url.match(this.inSiteMatch);if(g)de.indexOf(g[2])!=-1&&t.url.replace(g[0],"").indexOf(location.hostname)!=-1&&(o.dataset.current=!0);else if(this.pathMatch||(this.pathMatch=new RegExp("^https?://"+location.host+location.pathname+"?([\\?#].*|[%:#]p{|$)")),this.pathMatch.test(t.url))if(this.postMatch||(this.postMatch=/[#:%]p{/),this.postMatch.test(t.url))o.dataset.current=!0;else{this.paramMatch||(this.paramMatch=/[^\/\?&]+(?=%[stb])/g);let S=t.url.match(this.paramMatch);S?(S=S.join(".*"),new RegExp(S).test(de)&&(o.dataset.current=!0)):o.dataset.current=!0}else t.url.indexOf("http")===0&&t.url.indexOf("?")===-1&&(this.keywordMatch||(this.keywordMatch=/%[stb][a-z]?\b/g),new RegExp(t.url.replace(/^https?/,"").replace(/[#%]\w+{.*/,"").replace(/\./g,"\\.").replace(this.keywordMatch,".*")).test(de)&&(o.dataset.current=!0))}o.dataset.current||t.hideNotMatch&&(o.style.display="none",o.classList.add("notmatch"))}let x=document.createElement("span");!i&&p.length>=3?(x.innerText=p.substr(0,4),/^[\w \-]+$/.test(x.innerText.substr(0,3))||(x.innerText=x.innerText.substr(0,2))):x.innerText=p,o.appendChild(x);let L=document.createElement("img");if(L.style.display="none",o.appendChild(L),!n&&c.prefConfig.shortcut&&y&&!o.dataset.clone&&!o.classList.contains("notmatch")){let g=document.createElement("div"),S=y.replace("Key","").replace("Digit","").toUpperCase();S.length==1&&(g.innerText=S,o.appendChild(g)),document.addEventListener("keydown",async W=>{if(!(c.prefConfig.shortcut==2&&!le)&&W.target.id!=="searchJumperInput"&&!(!a.hideTimeout&&(!t.ctrl==W.ctrlKey||!t.alt==W.altKey||!t.shift==W.shiftKey||!t.meta==W.metaKey))&&a.bar.contains(o)&&!(!c.prefConfig.enableInInput&&!t.ctrl&&!t.alt&&!t.shift&&!t.meta&&Ct(document))){var H=(W.key||String.fromCharCode(W.keyCode)).toLowerCase();(y==W.code||y==H)&&(W.stopPropagation(),ui&&(M=ui),u?o.dispatchEvent(new CustomEvent("showTips")):await ue()!==!1&&!a.customInput&&o.click())}})}let $;if(e=="0"||(e?$=e:!i&&C?$=t.url.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"):/^showTips:https?:\/\//.test(t.url)&&($=t.url.replace(/\?.*/,"").replace(/^showTips:(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"))),$)if(L.onload=S=>{o.classList.remove("search-jumper-word"),x.parentNode&&!c.prefConfig.showEngineWords&&x.parentNode.removeChild(x),L.style.display=""},/^data:/.test($))L.dataset.src=$;else{let S=c.prefConfig.cacheSwitch&&be[$];S==="fail"?o.dataset.current&&$.indexOf(location.host)!=-1&&(L.dataset.src=$,be[$]="",i||setTimeout(()=>{mi(L)},0)):S?L.dataset.src=S:(L.dataset.src=$,!i&&!be[$]&&He.push(L))}C&&(r?(o.setAttribute("target","_blank"),o.dataset.target=1):o.setAttribute("target","_self"));let T=t.url,U=ft.test(T);U&&(o.dataset.txt=!0),/%[tb]\b/i.test(T)&&(o.dataset.link=!0);let z,B=async g=>{a.customInput=!1,T=t.url,z="";let S=g||a.searchJumperInputKeyWords.value||De();!S&&!mt&&!a.bar.classList.contains("search-jumper-isTargetLink")&&(S=it()),S&&!g&&(S!=Ee&&(a.keywordIndex=0,C&&(Ee=S,q.setItem("cacheKeywords",S))),z=S);let W;(j||/^c(opy)?:|^paste:/.test(T))&&(T.indexOf("%input{")!==-1&&(T=await new Promise(X=>{a.showCustomInputWindow(T,Y=>{X(Y)})}),o.dataset.url=""),W=T.match(/#p{([\s\S]*[^\\])}/));let H=location.host,K=location.href,F=(X,Y,G,ce)=>{if(X.indexOf(Y+"[")!==-1){let ve=X.match(Ut(Y,"","\\[(.*?)(\\|(.+))?\\]")),he;if(ve){switch(ve[3]?he=G.split(ve[3]):(he=G.split(/[\n\r]/),he.length===1&&(he=G.split(" "))),a.keywordIndex||(a.keywordIndex=0),ve[1]){case"all":z=he.join(`
`);break;case"":G=he[a.keywordIndex],++a.keywordIndex>=he.length&&(a.keywordIndex=0);break;case"-1":--a.keywordIndex<0&&(a.keywordIndex=he.length-1),G=he[a.keywordIndex];break;default:G=he[parseInt(ve[1])||0];break}X=X.replace(ve[0],Y)}}return gi(X,Y,G,ce)},re=!/^showTips:h/i.test(T)&&/^c(opy)?:|[#:%]P{|^javascript:|^showTips:/i.test(T),se="",fe="",ae="",We="",Ii="",ji=X=>{let Y=X;if(Y=F(Y,"%su",se),Y=F(Y,"%sl",fe),Y=F(Y,"%sr",ae),Y=F(Y,"%S",Ee||ae),Y=F(Y,"%ss",We),Y=F(Y,"%st",Ii),Y=F(Y,"%se",escape?escape(ae):ae),Y=F(Y,"%s",ae,G=>re?G:encodeURIComponent(G)),/%bd\b/.test(Y))try{let G=atob(ae);Y=F(Y,"%bd",G)}catch(G){console.log(G)}if(/%be\b/.test(Y))try{let G=btoa(ae);Y=F(Y,"%be",G)}catch(G){console.log(G)}return Y},zr=X=>{let Y=X.match(/%element{(.*?)}(\.prop\((.*?)\))?/),G=0;for(;Y&&!(G++>100);){let ve=Y[1],he=Y[3],me="";if(ve){let rt=bt(ve);rt&&(he?me=rt.getAttribute(he)||rt[he]:me=rt.innerText)}else try{let rt=window.getSelection(),st=document.createElement("div");for(let we=0,je=rt.rangeCount;we<je;++we)st.appendChild(rt.getRangeAt(we).cloneContents());if([].forEach.call(st.querySelectorAll("style,script,svg,canvas"),we=>{let je=document.createTextNode("");we.parentNode.replaceChild(je,we)}),document.body.appendChild(st),he)for(let we=0;we<st.childNodes.length;we++){let je=st.childNodes[we];je.nodeType==3?(me+=je.nodeValue,me+=`
`):je.nodeType==1&&(me+=je.getAttribute(he)||je[he]||"",me+=`
`)}else[].forEach.call(st.querySelectorAll("img"),we=>{if(!we.src)return;let je=document.createTextNode(` ![${(we.alt||"").replace(/[\n\r]/g," ").trim()}](${we.src||""}) `);we.parentNode.replaceChild(je,we)}),[].forEach.call(st.querySelectorAll("a"),we=>{if(!we.href)return;let je=(we.innerText||"").replace(/[\n\r]+/g,`
`).trim();if(!je)return;je=` [${je}](${we.href||""}) `;let ti;je.indexOf(`
`)==-1?ti=document.createTextNode(je):(ti=document.createElement("pre"),ti.innerHTML=ee(je)),we.parentNode.replaceChild(ti,we)}),me=st.innerText;me&&(me=me.replace(/[\n\r]\s*/g,`
`)),document.body.removeChild(st)}catch(rt){console.error(rt)}X=F(X,Y[0],re?me:encodeURIComponent(me)),Y=X.match(/%element{(.*?)}(\.prop\((.*?)\))?/)}Y=X.match(/%date({(.*?)})?/),G=0;let ce=new Date().getTime();for(;Y&&!(G++>100);){let ve=Y[2],he=ce;if(ve){ve=ve.replace(/\s/g,"");let me=ve.match(/(\D*)?(\d+)/);for(;me;){switch(me[1]){case"-":he-=parseInt(me[2]);break;case"*":he*=parseInt(me[2]);break;case"/":me[2]&&me[2]!="0"&&(he=parseInt(he/parseInt(me[2])));break;default:he+=parseInt(me[2]);break}ve=ve.replace(me[0],""),me=ve.match(/(\D*)?(\d+)/)}}else he=ce;X=X.replace(Y[0],he),Y=X.match(/%date({(.*?)})?/)}return X};if(!o.dataset.url){let X=T;j&&(X=X.replace(W[0],"")),o.dataset.url=X.replace(/%e\b/g,document.characterSet).replace(/%c\b/g,Wt?"mobile":"pc")}let xe="",vt="",Ei=z||document.title,Qe="",oe=zr(o.dataset.url);if(M&&M.nodeName){if(xe=M.href||M.parentNode&&M.parentNode.href||"",vt=xe||M.parentNode&&M.parentNode.parentNode&&M.parentNode.parentNode.href||"",(s.selectImg||s.selectAudio||s.selectVideo)&&M.src&&(xe=M.src),M.nodeName.toUpperCase()=="VIDEO"||M.nodeName.toUpperCase()=="AUDIO"){if(!xe){let X=M.querySelector("source");X&&(xe=X.src)}xe&&(xe=xe.replace(/^blob:/,""))}Ei=M.title||M.alt||document.title,M.nodeName.toUpperCase()=="IMG"&&/%i\b/.test(T)?M.src&&(/^data/.test(M.src)?Qe=M.src:(a.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),Qe=await qi(M)),oe=oe.replace(/%i\b/g,Qe)):(M.nodeName.toUpperCase()=="A"||M.parentNode&&M.parentNode.nodeName.toUpperCase()=="A")&&U&&!S&&M.textContent.trim()&&(S=M.textContent.trim())}for(;oe.indexOf("%template{")!==-1;){let X=oe.match(/%template{(.*?[^\\])}/);if(!X)return!1;let Y=X[1];c.prefConfig.templateData||(c.prefConfig.templateData={});let G=c.prefConfig.templateData[Y];if(!G){if(a.stopInput)return!1;if(G=window.prompt(E("template",Y))||"",G)c.prefConfig.templateData[Y]=G,q.setItem("searchData",c);else return!1}oe=oe.replace(X[0],G)}for(;oe.indexOf("%input{")!==-1;){let X=oe.match(/%input{(.*?[^\\])}/);if(!X||(a.customInput=!0,a.stopInput))return!1;if(a.batchOpening){let Y;if(X[1].indexOf('"')===0&&X[1].indexOf('","')!==-1?Y=X[1].substr(1,X[1].length-2).split('","'):Y=X[1].split(","),Y.length===2?Y=window.prompt(Y[0],Y[1]):Y=window.prompt(X[1]),Y===null)return!1;oe=oe.replace(X[0],Y)}else break}xe&&(xe=xe.replace(/%(\w{2})/g,(X,Y)=>`%${Y.toUpperCase()}`)),vt&&(vt=vt.replace(/%(\w{2})/g,(X,Y)=>`%${Y.toUpperCase()}`));let wt=xe.replace(/^https?:\/\//i,"");S||(S=le&&Ee);try{if(typeof navigator.clipboard.readText<"u"&&(!S&&U&&(S=await navigator.clipboard.readText(),S&&!g&&(z=S)),!Qe&&/%i\b/.test(T))){if((await navigator.permissions.query({name:"clipboard-read"})).state!=="denied"){const Y=await navigator.clipboard.read();for(const G of Y)if(G.types.includes("image/png")){const ce=await G.getType("image/png");Qe=await new Promise(ve=>{const he=new FileReader;he.onload=function(me){ve(me.target&&me.target.result)},he.readAsDataURL(ce)}),Qe&&(oe=oe.replace(/%i\b/g,Qe))}}if(!Qe){a.customInput=!0;let Y=window.prompt(E("targetUrl"),"https://www.google.com/favicon.ico");if(Y)a.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),Qe=await Ft(Y);else return!1}}}catch(X){console.error(X.message)}if(!S&&U){if(a.customInput=!0,a.con.classList.contains("search-jumper-showall")||a.inInput||u||a.stopInput)return!1;let X=window.prompt(E("keywords"));if(X===null)return!1;Fe=X,setTimeout(()=>{Fe=""},1),S=X,ae=S,se=ae.toUpperCase(),fe=ae.toLowerCase(),We=ye.tc2sc?ye.tc2sc(ae):ae,Ii=ye.sc2tc?ye.sc2tc(ae):ae,re||(S=encodeURIComponent(S)),oe=ji(oe)}else S&&!se&&!fe&&!ae&&(ae=S,se=ae.toUpperCase(),fe=ae.toLowerCase(),We=ye.tc2sc?ye.tc2sc(ae):ae,Ii=ye.sc2tc?ye.sc2tc(ae):ae,re||(S=encodeURIComponent(S)));if(xe===""){let X=De()||a.searchJumperInputKeyWords.value;if(!U&&X&&/^(http|ftp)/i.test(X))xe=X,xe=xe.replace(/%(\w{2})/g,(Y,G)=>`%${G.toUpperCase()}`);else{let Y=!1,G=()=>!(a.stopInput||u||(Y===!1&&(Y=window.prompt(E("targetUrl"),"https://www.google.com/favicon.ico"),Y&&(Y=Y.replace(/%(\w{2})/g,(ce,ve)=>`%${ve.toUpperCase()}`),M={src:Y})),Y===null));if(/%t\b/.test(oe)){if(a.customInput=!0,G()===!1)return!1;oe=F(oe,"%t",Y)}if(/%T\b/.test(oe)){if(a.customInput=!0,G()===!1)return!1;oe=oe.replace(/%T\b/g,encodeURIComponent(Y))}if(/%τ\b/.test(oe)){if(a.customInput=!0,G()===!1)return!1;oe=oe.replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(Y)))}if(/%b\b/.test(oe)){if(a.customInput=!0,G()===!1)return!1;oe=oe.replace(/%b\b/g,Y.replace(/^https?:\/\//i,""))}if(/%B\b/.test(oe)){if(a.customInput=!0,G()===!1)return!1;oe=oe.replace(/%B\b/g,encodeURIComponent(Y.replace(/^https?:\/\//i,"")))}if(/%β\b/.test(oe)){if(a.customInput=!0,G()===!1)return!1;oe=oe.replace(/%β\b/g,encodeURIComponent(encodeURIComponent(Y.replace(/^https?:\/\//i,""))))}}}let Li=H;if((vt||xe)&&!o.dataset.link&&(K=vt||xe,Li=K.replace(/^\w+:\/\/([^\/]+).*/,"$1")),j){let X=[],Y=!1;if(W[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(G=>{if(G=G.trim(),/^loopStart\(\d+\)$/.test(G)){let ce=G.match(/loopStart\((.*)\)/);X.push(["@loopStart",ce[1]])}else if(G=="loopEnd")X.push(["@loopEnd",""]);else if(G.startsWith("click(")&&G.endsWith(")")){let ce=G.slice(6,G.length-1);ce&&X.push(["@click",ce.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("dblclick(")&&G.endsWith(")")){let ce=G.slice(9,G.length-1);ce&&X.push(["@dblclick",ce.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("rclick(")&&G.endsWith(")")){let ce=G.slice(7,G.length-1);ce&&X.push(["@rclick",ce.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("copy(")&&G.endsWith(")")){let ce=G.slice(5,G.length-1);ce&&X.push(["@copy",ce.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("call(")&&G.endsWith(")")){let ce=G.slice(5,G.length-1);ce&&(X.push(["@call",ce.replace(/\\([\=&])/g,"$1").trim()]),Y=!0)}else if(G.startsWith("reload(")&&G.endsWith(")")){let ce=G.slice(7,G.length-1);X.push(["@reload",ce.trim()])}else if(G.startsWith("wait(")&&G.endsWith(")")){let ce=G.slice(5,G.length-1);X.push(["@wait",ce.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("open(")&&G.endsWith(")")){let ce=G.slice(5,G.length-1);ce&&X.push(["@open",ce.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(G)){let ce=G.match(/sleep\((.*)\)/);ce&&X.push(["@sleep",ce[1]])}else{G=G.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let ce=G.split("SJ^PARAM");if(ce.length===2){let ve=ce[0],he=ji(ce[1].replace(/\\([\=&])/g,"$1").replace(/%e\b/g,document.characterSet).replace(/%i\b/g,Qe).replace(/%c\b/g,Wt?"mobile":"pc").replace(/%U\b/g,encodeURIComponent(K)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(K))).replace(/%h\b/g,Li).replace(/%T\b/g,encodeURIComponent(xe)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(xe))).replace(/%b\b/g,wt).replace(/%B\b/g,encodeURIComponent(wt)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent(wt))).replace(/%n\b/g,Ei));he=F(he,"%t",xe),he=F(he,"%u",K),X.push([ve,he])}else(G.endsWith(".click()")||G.endsWith(".click"))&&X.push(["@"+G.replace(/\.click(\(\))?$/,""),"click"])}}),Y&&a.updateCacheKeywords(),oe===""||oe===location.href)return Ve=X,this.submitAction(X),!1;q.setListItem("inPagePostParams",oe.replace(/^https?:\/\/([^\/:]+).*/,"$1"),X)}return oe=F(oe,"%h",Li),oe=F(oe,"%t",xe),oe=F(oe,"%u",K),oe=ji(oe.replace(/%U\b/g,encodeURIComponent(K)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(K))).replace(/%T\b/g,encodeURIComponent(xe)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(xe))).replace(/%b\b/g,wt).replace(/%B\b/g,encodeURIComponent(wt)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent(wt))).replace(/%n\b/g,Ei)),r&&/^(https?|ftp):/.test(oe)?(o.setAttribute("target","_blank"),o.dataset.target=1):o.dataset.target=0,oe},b,P=!1,D,N,A,Z,ue=async g=>{if(delete o.href,g||(g={}),D=g.altKey,N=g.ctrlKey,A=g.metaKey,Z=g.shiftKey,!D&&!N&&!A&&!Z&&(g.button==1||g.button==2?(D=!1,N=!0,A=!1,Z=!1):r===2?(D=!1,N=!0,A=!1,Z=!0):r===3?(D=!0,N=!1,A=!1,Z=!1):r===4&&(D=!1,N=!0,A=!1,Z=!1)),u){o.removeAttribute("target"),f&&(/^(https?|ftp):/.test(f)?(b=f,o.href=b,r?o.setAttribute("target","_blank"):o.setAttribute("target","_self")):(/^copy:/.test(f)&&(f=f.replace(/^copy:/,"")),Oe(f))),o.dispatchEvent(new Event("actionOver"));return}if(P=!1,b="",b=await B(),/^(https?|ftp):/.test(b)&&g.stopPropagation&&g.stopPropagation(),/^c(opy)?:|^paste:/.test(t.url)||/^javascript:/.test(t.url)||/^\[/.test(t.url)||/[:%]P{/.test(t.url)||t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url))(g.button==1||g.button==2)&&(P=!0);else{if(!b){a.stopInput||(a.stopInput=!0,setTimeout(()=>{a.stopInput=!1},1));return}o.href=b}a.customInput&&b&&(P=!0),o.dispatchEvent(new Event("actionOver")),P&&(g.preventDefault&&g.preventDefault(),o.click())},te=()=>{let g=Math.max(c.prefConfig.historyLength,20),S=o.dataset.current;if(!t.hideNotMatch&&!t.kwFilter&&!o.dataset.clone&&!o.dataset.paste&&d!=="0"&&g&&!S&&q.getItem("historySites",W=>{Ye=W||[],Ye=Ye.filter(H=>H&&H!=p),Ye.unshift(p),Ye.length>g&&(Ye=Ye.slice(0,g)),q.setItem("historySites",Ye)}),c.prefConfig.shiftLastUsedType&&!S){let W=o.parentNode;!(W&&(W.classList.contains("search-jumper-targetAll")||W.classList.contains("search-jumper-targetImg")||W.classList.contains("search-jumper-targetAudio")||W.classList.contains("search-jumper-targetVideo")||W.classList.contains("search-jumper-targetLink")||W.classList.contains("search-jumper-targetPage")||W.classList.contains("search-jumper-needInPage")))&&kt!=o.dataset.type&&(kt=o.dataset.type,q.setItem("historyType",kt))}c.prefConfig.sortType&&q.getItem("sortTypeNames",W=>{Le=W||{},Le[o.dataset.type]?Le[o.dataset.type]=Le[o.dataset.type]+1:Le[o.dataset.type]=1,q.setItem("sortTypeNames",Le)}),c.prefConfig.sortSite&&q.getItem("sortSiteNames",W=>{Pe=W||{},Pe[o.dataset.name]?Pe[o.dataset.name]=Pe[o.dataset.name]+1:Pe[o.dataset.name]=1,q.setItem("sortSiteNames",Pe)})},w=(g,S)=>{Oe(S);let W=o;g||(a.appendBar(),a.closeOpenType(),a.con.style.display="",a.setFuncKeyCall(!0),window.getSelection().toString()?W=M||o:W=_(document)),a.tipsPos(W,E("copyOver")),clearTimeout(a.hideTips),a.hideTips=setTimeout(()=>{a.tips.style.opacity=="1"&&(a.tips.style.opacity=0)},1500)},R=g=>{if(g&&g.stopPropagation&&g.stopPropagation(),M&&M.focus&&M.focus(),u&&a.waitForShowTips)return J(o,0),g&&g.preventDefault&&g.preventDefault(),!1;if(P=!0,!b)return g&&g.preventDefault&&g.preventDefault(),!1;g||(g={});let S=/^(https?|ftp):/.test(b);if(!a.batchOpening&&!i&&te(),(c.prefConfig.multiline==1||c.prefConfig.multiline==2)&&z&&ft.test(o.dataset.url)&&z.indexOf(`
`)!==-1&&!/^(c|show)/.test(o.dataset.url)&&(c.prefConfig.multiline==1||confirm(E("multiline")))){let H=z.split(`
`);if(H.length>10&&!confirm(E("multilineTooMuch")))return;let K=0,F=o.target;o.target="_blank";let re=async()=>{b=await B(H[K++]),o.href=b,o.click(),K<H.length?setTimeout(()=>{re()},c.prefConfig.multilineGap||1e3):o.target=F};return re(),o.href="",g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),!1}if(b.indexOf("%input{")!==-1){a.showCustomInputWindow(b,H=>{b=H,o.href=H,o.click()}),g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation();return}let W=b.match(/^find(\.addto\((.*?)\))?:(.*)/);if(W){g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation();let H=W[2],K=W[3];if(K)H&&c.prefConfig.inPageRule&&H.indexOf("@")!==0&&(H="@"+H),K.indexOf("%input{")!==-1?a.showCustomInputWindow(K,F=>{H?a.addToHighlightGroup(F,H):(a.searchJumperInPageInput.value=F,a.submitInPageWords(),a.waitForHide(0))}):H?a.addToHighlightGroup(K,H):(a.searchJumperInPageInput.value=K,a.submitInPageWords(),a.waitForHide(0));else return!1;return!1}else if(/^javascript:/.test(t.url)){g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),ye.targetElement=M,ye.keywords=it(),b=b.replace(/^javascript:/,"");try{b=decodeURIComponent(b)}catch{}let H=/^[_a-zA-Z0-9]+$/.test(b)&&ye[b]||new ai(b);return H&&H(),!1}else if(/^c(opy)?:/.test(t.url)){if(g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),b)b.indexOf("%input{")!==-1?a.showCustomInputWindow(b,H=>{w(!0,H.replace(/^c(opy)?:/,""))}):w(g.isTrusted,b.replace(/^c(opy)?:/,""));else return!1;return!1}else if(/^paste:/.test(t.url)){let H=!1;if(M&&/INPUT|TEXTAREA/i.test(M.nodeName)&&M.getAttribute("aria-readonly")!="true")H=!0;else{let K=M;for(;K&&(H=K.contentEditable=="true",!(H||K.nodeName.toUpperCase()=="BODY"));)K=K.parentNode}if(H){if(!b)return!1;b=b.replace(/^paste:/,""),b.indexOf("%input{")!==-1?a.showCustomInputWindow(b,K=>{Ot(M,K)}):b?Ot(M,b):typeof navigator.clipboard.readText<"u"&&navigator.clipboard.readText().then(K=>{Ot(M,K)})}}else if(/^\[/.test(t.url)){g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation();let H=JSON.parse(t.url);return a.batchOpen(H,{button:2,altKey:D||g.altKey,ctrlKey:N||g.ctrlKey,shiftKey:Z||g.shiftKey,metaKey:A||g.metaKey},r===1),!1}else if(/[:%]P{/.test(t.url)){if(g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),b===!1)return!1;let H=K=>{let F=K.match(/[:%]P{(.*)}/),re="";if(F)if(K=K.replace(F[0],""),F=F[1],F.charAt(0)==='"'&&F.charAt(F.length-1)==='"')re=F.substring(1,F.length-1);else{F=new URLSearchParams(F);let se={};F.forEach((fe,ae)=>{se[ae]=fe}),re=JSON.stringify(se)}Be({method:"POST",url:K,data:re,onload:se=>{pe(se)},onerror:se=>{Ce(E("postError")+(se.statusText||se.error))},ontimeout:se=>{Ce(E("postError")+(se.statusText||se.error))}})};return b.indexOf("%input{")!==-1?a.showCustomInputWindow(b,K=>{H(K)}):H(b),!1}else if(t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url)){if(b===!1)return!1;let H=t.url.match(/#(j(umpFrom|f)?|from){(.*?)}/),K=F=>(H?(q.setItem("postUrl",[F,t.charset]),H=H[3],H.indexOf("http")!==0&&(H=F.replace(/(:\/\/.*?\/)[\s\S]*/,"$1"+H)),F=H):(q.setItem("postUrl",[F,t.charset]),F=F.replace(/(:\/\/.*?)\/[\s\S]*/,"$1").replace(/[:%]p{[\s\S]*/,"")),F);if(b.indexOf("%input{")!==-1){a.showCustomInputWindow(b,F=>{F=K(F),F&&(o.href=F,o.target==="_blank"?ge(o.href,{active:!0,insert:!0}):location.href=o.href)}),g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation();return}else{if(b=K(b),!b)return;o.href=b}}if(!(Z&&!N&&!A&&!D&&g.isTrusted)){if(/^(chrome|edge|about|extension|moz-extension)/.test(b))return g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),N?ge(b,{active:!1,insert:!0}):ge(b,{active:!0,insert:!0,close:o.getAttribute("target")!=="_blank"}),!1;if((D||N||A||Z)&&S){if((N||A)&&Z)ge(b,{incognito:!0});else if(N||A)ge(b,{active:!1,insert:!0});else if(D){if(t.match){let ae=t.match.replace(/\\/g,""),We=ae.match(/\((www)\|([^\)\|]+)/);for(;We;)b=b.replace(We[1],We[2]),ae=ae.replace(We[0],""),We=ae.match(/\(([^\)\|]+)\|([^\)\|]+)/)}let H=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,K=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,F=c.prefConfig.popupWidth,re=c.prefConfig.popupHeight,se=c.prefConfig.popupLeft,fe=c.prefConfig.popupTop;re?(re=parseFloat(re),re=K/100*re):re=Math.max(K/3*2,K-250),F?(F=parseFloat(F),F=H/100*F):F=Math.min(H,650),se?(se=parseFloat(se),se=H/100*se-F/2):se=H-F-30,fe?(fe=parseFloat(fe),fe=K/100*fe-re/2):fe=(K-re)/2,a.closePopupWindow(),a.popupWindow=window.open(b+"#searchJumperMin"+(/#p{/.test(t.url)?"Post":""),"_blank",`width=${F}, height=${re}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${se}, top=${fe}`)}else Z&&ge(b,{active:!0,insert:!0});return g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),!1}else if(S&&o.getAttribute("target")==="_blank"&&!(D||N||A||Z)&&g.button===0)return ge(b,{active:!0,insert:!0}),g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),!1}};o.addEventListener("mousedown",ue,!0),o.addEventListener("mouseup",g=>{g.stopPropagation&&g.stopPropagation()},!0),o.addEventListener("click",R,!0),o.addEventListener("auxclick",g=>{if(P&&g.preventDefault)return g.preventDefault(),!1},!0),o.addEventListener("contextmenu",g=>{if(P&&g.preventDefault)return g.preventDefault(),!1},!0);let V=o.dataset.name;y&&(V+=` (${t.ctrl?"Ctrl + ":""}${t.shift?"Shift + ":""}${t.alt?"Alt + ":""}${t.meta?"Meta + ":""}${y.replace("Key","")})`);let O=!1,ie=!1,ne=async(g,S,W)=>{if(a.tipsPos(g,'<span class="loader"></span><font>Loading...</font>'),ie=!1,S)try{S=S.replace(/^showTips:/,""),O=!0;let H=await a.anylizeShowTips(S,o.dataset.name,g);if(O=!1,a.tips.style.opacity==0||a.tips.innerHTML.indexOf('<span class="loader">')!==0){ie=!0;return}Array&&Array.isArray&&Array.isArray(H)&&(f=H[1],H=H[0]),H&&(H!="null"&&H!="No result"&&(H=`<div>${H}</div>`,ie=!0),a.tipsPos(g,H),te(),setTimeout(()=>{a.tips.style.pointerEvents="all"},100))}catch(H){pe(H)}},J=async(g,S=1e3)=>{if(!(!g||g.nodeType!==1)&&(a.preList&&(a.preList.style.visibility="hidden",a.listArrow.style.cssText=""),f=null,clearTimeout(a.requestShowTipsTimer),a.waitForShowTips=!1,a.tipsPos(g,V),u)){a.stopInput=!0;let W=await B();a.stopInput=!1,W&&a.lastUrl===W?O?a.tipsPos(g,"<span class='loader'></span><font>Loading...</font>"):ne(g,W):(a.waitForShowTips=!0,a.requestShowTipsTimer=setTimeout(async()=>{if(W=W||await B(),!!W){if(W.indexOf("%input{")!==-1){a.showCustomInputWindow(W,H=>{W=H,ne(g,W)});return}a.lastUrl=W,ne(g,W),a.waitForShowTips=!1}},S))}},I=!1;o.addEventListener("touchend",g=>{g.stopPropagation&&g.stopPropagation(),u&&(I=!0,a.waitForShowTips=!0)},!1);let v=g=>{if(a.funcKeyCall||c.prefConfig.noAni)return;let S=a.con.classList.contains("search-jumper-left")||a.con.classList.contains("search-jumper-right"),W=[],H=o.getBoundingClientRect(),K=S?Math.abs(g.clientY-H.top)/H.height:Math.abs(g.clientX-H.left)/H.width,F=.1,re=.1;o.style.setProperty("--scale",1+F+re),W.push(o);let se=o.previousElementSibling;if(se&&/^A$/i.test(se.nodeName)){se.style.setProperty("--scale",1+re+F*(1-K)),W.push(se);let ae=se.previousElementSibling;ae&&/^A$/i.test(ae.nodeName)&&(ae.style.setProperty("--scale",1+re*(1-K)),W.push(ae))}let fe=o.nextElementSibling;if(fe&&/^A$/i.test(fe.nodeName)){fe.style.setProperty("--scale",1+re+F*K),W.push(fe);let ae=fe.nextElementSibling;ae&&/^A$/i.test(ae.nodeName)&&(ae.style.setProperty("--scale",1+re*K),W.push(ae))}a.dockerScaleBtns.forEach(ae=>{W.indexOf(ae)===-1&&ae.style.setProperty("--scale",1)}),a.dockerScaleBtns=W};return o.addEventListener("mouseenter",g=>{if(g.stopPropagation&&g.stopPropagation(),!(ie&&a.lastTips===o&&a.tips.style.opacity==1)){if(a.lastTips=o,u){if(I){I=!1;return}if(U&&!(a.searchJumperInputKeyWords.value||it())){a.waitForShowTips=!0,a.tipsPos(o,V);return}}J(o)}},!0),o.addEventListener("mousemove",g=>{v(g),a.clingPos(o,a.tips)},!1),o.addEventListener("showTips",g=>{a.appendBar(),a.closeOpenType(),a.con.style.display="",a.setFuncKeyCall(!0),J(M,0)},!1),o.addEventListener("mouseleave",g=>{ie||(a.tips.style.opacity=0,clearTimeout(a.requestShowTipsTimer))},!1),o.addEventListener("drop",g=>{a.searchBySiteName(p,g)},!1),o.addEventListener("dragover",g=>{g.preventDefault()},!1),o}closePopupWindow(){c.prefConfig.closePopupWhenClick&&this.popupWindow&&(this.popupWindow.close(),this.popupWindow=null)}closeOpenType(){let e=this.bar.querySelector(".search-jumper-type.search-jumper-open>span");if(e)if(this.funcKeyCall=!1,e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}addToHighlightGroup(e,t){let r=c.prefConfig.inPageRule[t];if(r){let i=r.match(/^\/(.*)\/([il]*)$/);i?r=`/${i[1]}|${e}/${i[2]||""}`:r=`/${r}|${e}/`}else r=`/${e}/`;c.prefConfig.inPageRule[t]=r,q.setItem("searchData",c),this.refreshPageWords(this.lockWords)}streamUpdate(e){this.streamUpdateCallBack&&this.streamUpdateCallBack(e)}async anylizeShowTips(e,t,r){let i,s=this;try{const n=/([^\\]|^)([\+\-*/])([\d\.]+)$/,a=/\|cache\=(\d+)$/,o=/%p(\{+)/,p=/#headers({.*?})/,d=/#stream({(.*?)})?/,u=/.then{(.*?)}/;if(e=e.replace(/^showTips:/,"").replace(/{name}/g,t).trim(),/^https?:/.test(e)){let f=e.split(`
`);f.length==1&&(f=e.split(" ")),f=f[0],e=e.replace(f,"").trim().replace(/\\{/g,"showTipsLeftBrace").replace(/\\}/g,"showTipsRightBrace").replace(/{url}/g,"\u3010SEARCHJUMPERURL\u3011");let h=f.match(a);h?(h=parseInt(h[1]),f=f.replace(a,"")):h=7200;let m=Date.now()/1e3,y=tt.filter(L=>m<L.time?(!i&&L.url==f&&(i=L.data),!0):!1);y.length!=tt.length&&(tt=y,q.setItem("tipsStorage",tt));let C=[],j=(L,$)=>{let T=e,U=!0;for(;$;){let z=$[1].replace(/\\\|/g,"\u3010searchJumperJsonSplit\u3011").split("|"),B=z[0].replace(/【searchJumperJsonSplit】/g,"|").replace(/\[(\d+)\]/g,".$1").replace(/\[all\]/g,".all").split("."),b=L,P=null;if(B.shift(),B.forEach(D=>{if(P){let N=[];for(let A=0;A<P.length;A++){let Z=P[A];Z&&(Array.isArray(Z)?Z=Z.at?Z.at(D):Z[D]:Z=Z[D]),N.push(Z)}P=N}else if(b&&(Array.isArray(b)?D==="all"?P=b:b=b.at?b.at(D):b[D]:b=b[D]),!b)return null}),P&&(b=P.join("")),z.length!=1){let D=z[1],N=D.match(n);if(N){let A=[];for(;N;)D=D.replace(n,"$1"),A.unshift([N[2],N[3]]),N=D.match(n);A.forEach(Z=>{let ue=parseFloat(Z[1]);switch(Z[0]){case"+":b+=ue;break;case"-":b-=ue;break;case"*":b*=ue;break;case"/":b/=ue;break}}),b=b.toFixed(2)}else{let A=D.match(/^\/(.*)\/(\w?)$/),Z=A?new RegExp(A[1],A[2]):new RegExp(D),ue=b.match(Z);ue&&(b=ue[1])}}b?U=!1:b="",C.push(b),T=T.replace($[0],b),$=T.match(/{(.*?)}/)}return U&&console.log("Error:",L),T=T.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),T},x=e.match(/{(.*?)}/);if(i)x&&x[1].indexOf("json")===0&&(e=e.replace(/【SEARCHJUMPERURL】/g,f),i=j(i,x),i=[i,`
`+C.join(",")]);else{let L,$=f.match(o),T={},U=f;if($){let N=$[1].length;if($=f.match(new RegExp(`%p{+(.*?)}{${N}}`)),$){let A=$[1];if(A.indexOf("%")===0)try{A=decodeURIComponent(A)}catch{}T.body=A,T.method="POST",U=U.replace($[0],"")}}let z=f.match(p);if(z){let N=z[1];if(N.indexOf("%")===0||N.indexOf("%")===1)try{N=decodeURIComponent(N)}catch{}T.headers=JSON.parse(N),U=U.replace(z[0],"")}let B=!1,b,P=x&&x[1].indexOf("json")===0,D=f.match(d);if(D)T.responseType="stream",T.streamMode=D[2]||"concat",U=U.replace(D[0],""),i=await new Promise(N=>{T.onstream=A=>{let Z;if(P){if(Z=A.json(),!Z)return;Z=j(Z,x)}else Z=A.text;s.tipsPos(r,Z),s.tips.style.pointerEvents="all",N&&N(Z)},b=Ge(U,T).then(A=>(e=e.replace(/【SEARCHJUMPERURL】/g,A.finalUrl),P?A.json():A.text)),b.then(A=>{let Z=P?A&&j(A,x):A;Z&&(s.tipsPos(r,Z),N&&N(Z))})}),i||(i="No result",B=!0);else if(P){let N=[];b=Ge(U,T).then(A=>(e=e.replace(/【SEARCHJUMPERURL】/g,A.finalUrl),A.json())),i=await b.then(A=>A?(L=A,j(A,x)):null),i||(i="No result",B=!0),i=[i,`
`+N.join(",")]}else{let N=!1,A=U.match(u),Z=[];for(;A;){let te=A[1];Z.push(te),U=U.replace(A[0],""),A=U.match(u)}for(b=Ge(U,T).then(te=>(e.indexOf("\u3010SEARCHJUMPERURL\u3011")!=-1&&(e=e.replace(/【SEARCHJUMPERURL】/g,te.finalUrl),N=!0),te.text()));Z.length;){let te=Z.shift(),w=await b.then(R=>{let V=document.implementation.createHTMLDocument("");V.documentElement.innerHTML=ee(R);let O=bt(te,V);if(!O)return null;let ie=V.querySelector("base");return _i(O.getAttribute("href"),ie?ie.href:U)});if(w)b=Ge(w).then(R=>R.text());else return"No result"}let ue;i=await b.then(te=>{if(!e)return te;let w=document.implementation.createHTMLDocument("");w.documentElement.innerHTML=ee(te),ue=w.title;let R=e;for(;x;){let V="";if(x[1]=="title")V=w.title;else{let O=x[1].split("|"),ie=ni(O[0],w);if(ie&&ie.length)if(N=!0,O.length==1)V=ie[0].innerText;else{let ne=O[1],J=ne.match(/\(.*?\)/g);J?[].forEach.call(ie,I=>{let v=O[1];J.forEach(g=>{g==="()"?v=v.replace(g,I.innerText):(ne=g.match(/\((.*)\)/)[1],v=v.replace(g,I.getAttribute(ne)||I[ne]))}),V+=v}):V=ie[0].getAttribute(ne)||ie[0][ne]}}R=R.replace(x[0],V),x=R.match(/{(.*?)}/)}return N?(R=R.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),R):null}),i?this.insertHistoryUrl(f,ue):(i="No result",B=!0),i=[i,f],L=i}B||(i=this.calcResult(i),tt.push({url:f,data:L,time:Date.now()/1e3+h}),tt.length>50&&tt.shift(),q.setItem("tipsStorage",tt))}}else if(i=/\breturn\b/.test(e)?await new ai("fetch","storage","name",'"use strict";'+e)(Ge,q,t):e,i=this.calcResult(i),M&&M.href){let f=M.title||M.alt||M.innerText;this.insertHistoryUrl(M.href,f)}}catch(n){pe(n)}return i}calcResult(e){let t=typeof e=="string",r=t?e:e[0];const i=/{([\d\.]+)(([\+\-*/][\d\.]+)+)}/,s=/([\+\-*/])([\d\.]+)/;let n=r.match(i);if(n){let a=[],o=n[0],p=parseFloat(n[1]),d=n[2];for(n=d.match(s);n;)d=d.replace(n[0],""),a.push([n[1],n[2]]),n=d.match(s);a.forEach(u=>{let f=parseFloat(u[1]);switch(u[0]){case"+":p+=f;break;case"-":p-=f;break;case"*":p*=f;break;case"/":p/=f;break}}),p=p.toFixed(2),r=r.replace(o,p)}return t?e=r:e[0]=r,e}insertHistoryUrl(e,t){if(e.indexOf(location.host)===-1)return;let r=location.href,i=document.title;ye.history.pushState("",t,e),document.title=t,ye.history.replaceState("",i,r),document.title=i}checkScroll(e,t){if(this.funcKeyCall||this.bar.style.display=="none")return;let r=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight;if(this.bar.scrollWidth>r||this.bar.scrollHeight>i?this.con.classList.contains("search-jumper-scroll")||(this.bar.style.cssText="",this.con.classList.add("search-jumper-scroll"),this.con.style.display=""):this.con.classList.contains("search-jumper-scroll")&&(this.bar.style.cssText="",this.con.classList.remove("search-jumper-scroll")),e)return;let s=this.bar.querySelector(".search-jumper-type.search-jumper-open");s&&(s.style.width==="0px"&&(s.style.width="auto"),s.style.height==="0px"&&(s.style.height="auto"),s!=this.bar.firstElementChild&&setTimeout(()=>{s.scrollIntoView(t?{}:{behavior:"smooth"})},0))}reopenType(e){let t=new PointerEvent("mouseup");e.parentNode.classList.contains("search-jumper-open")&&(e.onmouseup?e.onmouseup():e.dispatchEvent(t)),e.onmouseup?e.onmouseup():e.dispatchEvent(t)}showInPage(e,t){if(this.contains(M)||this.inInput&&Xe||!e&&this.funcKeyCall)return;(!Xe||!Xe.parentNode)&&(Xe=Me(Et),qe||this.addToShadow(Xe));let r=De();if(e&&r&&r.length<(c.prefConfig.limitPopupLen||1)||this.con&&this.con.classList.contains("search-jumper-showall"))return;if(c.prefConfig.hidePopup&&(e=!1),!M)M=_(document);else if(!r&&M!=_(document)&&(M.className!="searchJumper"||!/^MARK$/i.test(M.nodeName))){let u=M,f;for(;u&&u.nodeName&&!/^(img|audio|video|a)$/i.test(u.nodeName);){if(u.parentNode){if(/^(img|audio|video|a)$/i.test(u.parentNode.nodeName)){u=u.parentNode;break}if(f=u.parentNode.querySelectorAll("audio,video"),f&&f.length!==1&&(f=u.parentNode.querySelectorAll("img")),f&&f.length!==1&&(f=u.parentNode.querySelectorAll("a")),f&&f.length===1){f[0].scrollHeight&&u.scrollHeight/f[0].scrollHeight<2&&(u=f[0]);break}}u=u.parentNode}u&&(M=u)}this.appendBar();let i=this;this.hideTimeout&&clearTimeout(this.hideTimeout);var s=c.prefConfig.autoDelay||1e3,n=()=>{i.bar.classList.remove("search-jumper-isInPage"),i.bar.classList.remove("search-jumper-isTargetImg"),i.bar.classList.remove("search-jumper-isTargetAudio"),i.bar.classList.remove("search-jumper-isTargetVideo"),i.bar.classList.remove("search-jumper-isTargetLink"),i.bar.classList.remove("search-jumper-isTargetPage"),i.bar.classList.remove("initShow"),i.hideTimeout=null};c.prefConfig.autoHide&&(this.hideTimeout=setTimeout(n,s)),this.bar.classList.remove("search-jumper-isInPage"),this.bar.classList.remove("search-jumper-isTargetImg"),this.bar.classList.remove("search-jumper-isTargetAudio"),this.bar.classList.remove("search-jumper-isTargetVideo"),this.bar.classList.remove("search-jumper-isTargetLink"),this.bar.classList.remove("search-jumper-isTargetPage"),this.bar.classList.remove("initShow"),this.tips.style.opacity=0,this.tips.style.display="none",this.tips.style.transition="none",this.tips.innerHTML=ee(""),setTimeout(()=>{this.bar.classList.add("initShow")},10);let a="",o="";if(r)if(this.bar.classList.add("search-jumper-isInPage"),this.bar.style.display=="none"||e)a="needInPage";else{let u=this.bar.querySelector(".search-jumper-type.search-jumper-open");(!u||u.classList.contains("notmatch")||u.classList.contains("search-jumper-targetPage")||u.classList.contains("search-jumper-targetImg")||u.classList.contains("search-jumper-targetAudio")||u.classList.contains("search-jumper-targetVideo")||u.classList.contains("search-jumper-targetLink"))&&(a="needInPage")}else{switch(M.children.length==1&&M.children[0].nodeName.toUpperCase()==="A"&&(M=M.children[0]),M.nodeName.toUpperCase()){case"IMG":this.bar.classList.add("search-jumper-isTargetImg"),a="targetImg";break;case"AUDIO":this.bar.classList.add("search-jumper-isTargetAudio"),a="targetAudio";break;case"VIDEO":this.bar.classList.add("search-jumper-isTargetVideo"),a="targetVideo";break;case"A":this.bar.classList.add("search-jumper-isTargetLink"),a="targetLink";break;default:break}let u=M.parentNode;u&&u.nodeName.toUpperCase()==="A"&&(this.bar.classList.add("search-jumper-isTargetLink"),a?o="targetLink":a="targetLink"),a||(this.bar.classList.add("search-jumper-isTargetPage"),a="targetPage"),a||(a="targetAll")}this.bar.style.display=="none"&&(this.bar.style.display="");let p,d;if(a&&(p=this.bar.querySelector(`.search-jumper-${a}:not(.notmatch)>span`),d=this.bar.querySelectorAll(`.search-jumper-${a}:not(.notmatch)>a>img`)),i.setFuncKeyCall(!1),p&&(!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen||e)){let u=this.bar.querySelectorAll(`.search-jumper-${a}:not(.notmatch)>span:first-child`);[].forEach.call(u,f=>{f!==p&&i.reopenType(f)}),i.reopenType(p),i.insertHistory(p.parentNode),o&&(u=this.bar.querySelectorAll(`.search-jumper-${o}:not(.notmatch)>span:first-child`),[].forEach.call(u,f=>{f!==p&&i.reopenType(f)}),i.reopenType(p))}if(!e&&(c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen)&&this.closeOpenType(),i.setFuncKeyCall(e),e){d&&[].forEach.call(d,j=>{j.parentNode.style.display!="none"&&j.dataset.src&&(j.src=j.dataset.src,delete j.dataset.src)}),i.con.classList.remove("search-jumper-scroll"),i.bar.style.cssText="",i.con.style.cssText="";let u=window.innerWidth||document.documentElement.clientWidth,f=document.documentElement.scrollLeft||document.body.scrollLeft,h=window.innerHeight||document.documentElement.clientHeight,m=c.prefConfig.tileOffset||0,y=pr(t)-i.bar.clientWidth/2-(getComputedStyle(document.documentElement).position!=="static"?document.documentElement.offsetLeft:0);y<0?y=5:y+i.bar.clientWidth>u+f&&(y=u+f-i.bar.clientWidth-20);let C=hr(t);dt(t)>h/5?C-=i.bar.clientHeight+20+m:C+=20+m,ht(t)<u/2?(i.bar.style.left=y+f+"px",i.bar.style.transformOrigin="0 0"):(i.bar.style.right=u-y-i.bar.clientWidth-15+"px",i.bar.style.transformOrigin="100% 0"),i.bar.style.top=C+"px",i.removeBar(),i.bar.style.opacity=0,setTimeout(()=>{i.appendBar(),setTimeout(()=>{i.bar.style.opacity=1,setTimeout(()=>{let j=document.querySelector("#saladict-saladbowl-root>.saladict-external");if(j){let x=j.shadowRoot.querySelector(".saladbowl");x.style.transform=x.style.transform.replace(/\d+px\)/,`${t.clientY-15}px)`)}},100)},1)},1)}else i.bar.style.display="",i.initPos()}setFuncKeyCall(e){this.funcKeyCall=e,this.con.classList.contains("search-jumper-showall")||(e?this.con.classList.add("funcKeyCall"):this.con.classList.remove("funcKeyCall"))}initPos(e,t,r,i){this.preList&&(this.preList.style.visibility="hidden",this.preList.style.opacity=0,this.listArrow.style.cssText=""),typeof e>"u"&&(e=c.prefConfig.position.x),typeof t>"u"&&(t=c.prefConfig.position.y),typeof r>"u"&&(r=c.prefConfig.offset.x),typeof i>"u"&&(i=c.prefConfig.offset.y);let s=this,n=a=>{if(s.bar.style.cssText="",s.con.style.cssText="",s.con.className="search-jumper-searchBarCon "+a,c.prefConfig.resizePage)switch(typeof s.initBodyStyle>"u"?s.initBodyStyle=_(document).style.cssText:_(document).style.cssText=s.initBodyStyle,s.con.classList.add("resizePage"),_(document).style.position="absolute",a){case"search-jumper-left":_(document).style.width=`calc(100vw - ${s.scale*42}px)`,_(document).style.right="0px";break;case"search-jumper-right":_(document).style.width=`calc(100vw - ${s.scale*42}px)`,_(document).style.left="0px";break;case"search-jumper-bottom":_(document).style.width="100%",_(document).style.height=`calc(100vh - ${s.scale*42}px)`,_(document).style.top="0px",_(document).style.overflow="auto";break;default:_(document).style.width="100%",_(document).style.height=`calc(100vh - ${s.scale*42}px)`,_(document).style.bottom="0px",_(document).style.overflow="auto";break}else c.prefConfig.autoHideAll&&s.con.classList.add("hideAll");let o=s.scale*40;setTimeout(()=>{let p=s.con.classList.contains("search-jumper-left")||s.con.classList.contains("search-jumper-right");Se.forEach(d=>{if(!d.classList.contains("search-jumper-open"))p?(d.style.width="",d.style.height=o+"px"):(d.style.width=o+"px",d.style.height="");else{let u=Math.max(d.scrollWidth,d.scrollHeight);u&&(u+="px",p?(d.style.width="",d.style.height=u):(d.style.width=u,d.style.height=""))}})},1)};r<0&&(r=0),i<0&&(i=0),e=="center"&&t=="top"?(n(""),s.bar.style.position="relative"):e=="left"&&t=="top"?r>i?(n(""),s.bar.style.position="fixed",s.bar.style.left=r+"px"):(n("search-jumper-left"),s.bar.style.position="fixed",s.bar.style.top=i+"px"):e=="right"&&t=="top"?r>i?(n(""),s.bar.style.position="fixed",s.bar.style.right=r+"px"):(n("search-jumper-right"),s.bar.style.position="fixed",s.bar.style.top=i+"px"):e=="center"&&t=="bottom"?(n("search-jumper-bottom"),s.bar.style.position="relative"):e=="left"&&t=="bottom"?r>i?(n("search-jumper-bottom"),s.bar.style.position="fixed",s.bar.style.left=r+"px",s.bar.style.bottom="0px",s.bar.style.top="unset"):(n("search-jumper-left"),s.bar.style.position="fixed",s.bar.style.bottom=i+"px"):e=="right"&&t=="bottom"?r>i?(n("search-jumper-bottom"),s.bar.style.position="fixed",s.bar.style.right=r+"px",s.bar.style.bottom="0px",s.bar.style.top="unset"):(n("search-jumper-right"),s.bar.style.position="fixed",s.bar.style.bottom=i+"px"):e=="left"&&t=="center"?(n("search-jumper-left"),s.bar.style.position="relative",s.bar.style.marginTop=i+"px",s.con.style.display="flex",s.con.style.justifyContent="center"):e=="right"&&t=="center"&&(n("search-jumper-right"),s.bar.style.position="absolute",s.bar.style.marginTop=i+"px",s.con.style.display="flex",s.con.style.justifyContent="center",s.con.style.alignItems="flex-end"),c.prefConfig.position.x=e,c.prefConfig.position.y=t,c.prefConfig.offset.x=r,c.prefConfig.offset.y=i,c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen?s.checkScroll(!1,!0):setTimeout(()=>{let a=s.bar.querySelector(".search-jumper-type.search-jumper-open");a&&(a.style.transition="none",a.style.width="auto",a.style.height="auto",setTimeout(()=>{a.style.width=a.scrollWidth+"px",a.style.height=a.scrollHeight+"px",setTimeout(()=>{a.style.transition=""},1),s.checkScroll(!1,!0)},0))},251)}}class br{constructor(){this.clickedIndex=0,this.signList=[],this.clickedEles={},this.exact=!0,this.accu=0,this.wheelScrolling=!1}getSelector(e,t=!0){this.exact=t,this.close(),this.toggle(),this.callback=e}init(){if(this.inited)return;this.inited=!0;let e=this;Me(`
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
                `);let r=s=>{if(!s)return;if(e.callback){if(s){let a=e.geneSelector(s,e.exact);e.callback(a),e.close()}return}let n=e.createSignDiv();e.clickedEles[e.clickedIndex]=s,e.appendSign(n,s,e.clickedIndex),e.clickedIndex++,k.con.classList.add("selectedEle")},i;this.initSelectRect(),this.mainSignDiv=this.createSignDiv(),this.setImportant(this.mainSignDiv,"pointer-events","none"),this.setImportant(this.mainSignDiv,"background","rgba(120, 170, 210, 0.3)"),this.moveHandler=s=>{if(s.target!==document)if(e.inPicker&&s.preventDefault(),e.rectSelecting)e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv),e.selectRect.parentNode||_(document).appendChild(e.selectRect),e.createSelectRect({x:s.clientX,y:s.clientY});else{if(e.creatingRect)return;{let n=e.getTarget(s.target);e.mainSignDiv.parentNode!==n.parentNode&&n.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,n),(s.ctrlKey||s.metaKey)&&(clearTimeout(i),i=setTimeout(()=>{let a=e.cleanTarget(s.target);r(a)},5))}}},this.leaveHandler=s=>{e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv)},this.clickHandler=s=>{if(e.inPicker&&(s.stopPropagation(),s.preventDefault()),e.creatingRect)return;if(e.rectSelecting){e.selectRect.parentNode&&e.selectRect.parentNode.removeChild(e.selectRect),e.rectSelecting=!1,k.bar.classList.remove("rectSelecting");return}let n=e.getTarget(s.target);r(n)},this.mouseDownHandler=s=>{e.rectSelecting=!0,k.bar.classList.add("rectSelecting"),e.rectInitPos={x:s.clientX,y:s.clientY},s.stopPropagation(),s.preventDefault()},this.mouseUpHandler=s=>{e.rectSelecting=!1,k.bar.classList.remove("rectSelecting"),!e.creatingRect&&e.selectRect.parentNode&&(e.selectRect.parentNode.removeChild(e.selectRect),e.finishSelectRect(),s&&s.stopPropagation&&s.stopPropagation(),s&&s.preventDefault&&s.preventDefault())},this.wheelHandler=s=>{if(s.preventDefault(),s.stopPropagation(),e.wheelScrolling)return;e.wheelScrolling=!0,setTimeout(()=>{e.wheelScrolling=!1},100);let n;if(s.type!=="wheel"){let o=0;typeof s.axis=="number"?s.axis==2&&(o=s.detail):(typeof s.wheelDeltaY>"u"||s.wheelDeltaY!=0)&&(o=-s.wheelDelta/40),n=o}else n=s.deltaY;n>0?e.accu--:e.accu++,e.accu<0?e.accu=0:e.accu>8&&(e.accu=8);let a=e.getTarget(s.target);e.mainSignDiv.parentNode!==a.parentNode&&a.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,a)}}initSelectRect(){this.waitToRemoveSigns=[],this.waitToAddSigns=[];let e=document.createElement("div");e.innerHTML=ee(`
                  <div class="dot top-left"></div>
                  <div class="dot top-right"></div>
                  <div class="dot bottom-left"></div>
                  <div class="dot bottom-right"></div>
                  <div class="dot top"></div>
                  <div class="dot right"></div>
                  <div class="dot left"></div>
                  <div class="dot bottom"></div>
                `),e.className="select-rect",this.selectRect=e}createSelectRect(e){this.rectToPos=e,!this.creatingRect&&(this.creatingRect=!0,setTimeout(()=>{this.creatingRect=!1,this.selectRect.style.left=Math.min(this.rectToPos.x,this.rectInitPos.x)+"px",this.selectRect.style.top=Math.min(this.rectToPos.y,this.rectInitPos.y)+"px",this.selectRect.style.width=Math.abs(this.rectToPos.x-this.rectInitPos.x)+"px",this.selectRect.style.height=Math.abs(this.rectToPos.y-this.rectInitPos.y)+"px",this.checkRectAndSign(),this.rectSelecting||this.mouseUpHandler()},100))}finishSelectRect(){let e=this;this.waitToRemoveSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns.forEach(t=>{delete t.dataset.recttemp}),this.waitToRemoveSigns=[],this.waitToAddSigns=[],this.signList.length?k.con.classList.add("selectedEle"):k.con.classList.remove("selectedEle")}checkRectAndSign(){if(!this.domInfo)return;let e=this;this.waitToRemoveSigns.forEach(t=>{t.style.opacity=""}),this.waitToRemoveSigns=[],this.signList.forEach(t=>{let r=t[0];if(r.dataset.recttemp)return;let i=r.getBoundingClientRect(),s=e.selectRect.getBoundingClientRect();e.compareRect(i,s)?(r.style.opacity="0",e.waitToRemoveSigns.push(r)):r.style.opacity=""}),this.waitToAddSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns=[],this.waitToRemoveSigns.length===0&&(this.curRectInfo={},this.rectInitPos.x<this.rectToPos.x?(this.curRectInfo.left=this.rectInitPos.x,this.curRectInfo.right=this.rectToPos.x):(this.curRectInfo.left=this.rectToPos.x,this.curRectInfo.right=this.rectInitPos.x),this.rectInitPos.y<this.rectToPos.y?(this.curRectInfo.top=this.rectInitPos.y,this.curRectInfo.bottom=this.rectToPos.y):(this.curRectInfo.top=this.rectToPos.y,this.curRectInfo.bottom=this.rectInitPos.y),this.compareDomWithRect(this.domInfo),this.signDomWithRect(this.domInfo))}compareDomWithRect(e){if(e.children&&e.children.length>0){let t=0;for(let r=0;r<e.children.length;r++){let i=e.children[r];this.compareDomWithRect(i)&&t++}if(t===e.children.length){let r=e.target.getBoundingClientRect();if(r.width&&r.height)return e.sign=!0,!0}}else if(this.compareRect(this.curRectInfo,e.target.getBoundingClientRect()))return e.sign=!0,!0;return e.sign=!1,!1}signDomWithRect(e){if(e.sign){let t=this.createSignDiv();t.dataset.recttemp=1,e.target.parentNode.appendChild(t),this.adjustSignDiv(t,e.target),this.signList.push([t,e.target]),this.waitToAddSigns.push(t)}else if(e.children&&e.children.length>0)for(let t=0;t<e.children.length;t++){let r=e.children[t];this.signDomWithRect(r)}}compareRect(e,t){return t.width&&t.height&&e.left<=t.right&&e.right>=t.left&&e.top<=t.bottom&&e.bottom>=t.top}cleanTarget(e){if(!e||e.className=="searchJumperSign"||(e=this.getTarget(e),!e))return null;for(let t in this.clickedEles){let r=this.clickedEles[t];try{if(r==e||r.contains(e)||e.contains(r))return null}catch{return null}}return e}appendSign(e,t,r){t.dataset&&(t.dataset.signNum=parseInt(t.dataset.signNum||0)+1),e.dataset.target=r,t.parentNode.appendChild(e),this.adjustSignDiv(e,t),this.signList.push([e,t])}removeSign(e){e.parentNode&&e.parentNode.removeChild(e);for(let s=0;s<this.signList.length;s++)if(this.signList[s][0]===e){this.signList.splice(s,1);break}let t=e.dataset.target,r=this.clickedEles[t];if(!r)return;let i=parseInt(r.dataset.signNum||0)-1;r.dataset.signNum=i,i<=0&&delete this.clickedEles[t]}getTarget(e){let t=this.accu;for(;e&&t;){let r=e.parentNode;if(!r)break;e=r,t--}for(;e.parentNode&&(e.offsetWidth===0||e.offsetHeight===0);)e=e.parentNode;return e}close(){this.mainSignDiv&&(this.rectSelecting&&(this.selectRect.parentNode&&this.selectRect.parentNode.removeChild(this.selectRect),this.finishSelectRect(),this.rectSelecting=!1),this.callback=null,this.domInfo=null,this.clearSigns(),this.clickedEles={},this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv),_(document).classList.remove("searchJumper-picker"),k.con.classList.remove("selectedEle"),k.con.removeEventListener("mouseenter",this.leaveHandler,!0),_(document).removeEventListener("mousemove",this.moveHandler,!0),_(document).removeEventListener("click",this.clickHandler,!0),_(document).removeEventListener("mousedown",this.mouseDownHandler,!0),_(document).removeEventListener("mouseup",this.mouseUpHandler,!0),_(document).removeEventListener(Mt(),this.wheelHandler,{passive:!1,capture:!0}),this.inPicker=!1)}setImportant(e,t,r){e.style.setProperty(t,r,"important")}createSignDiv(){let e=document.createElement("div");return this.setImportant(e,"position","absolute"),this.setImportant(e,"z-index","2147483647"),this.setImportant(e,"background","rgba(120, 170, 210, 0.6)"),this.setImportant(e,"transition","all 0.15s ease-out"),this.setImportant(e,"box-shadow","rgb(0 0 0) 0px 0px 3px 0px"),this.setImportant(e,"cursor","pointer"),e.className="searchJumperSign",e.addEventListener("mouseenter",t=>{this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv)},!0),e.addEventListener("mousedown",t=>{t.stopPropagation(),t.preventDefault(),this.removeSign(e)},!0),e}adjustSignDiv(e,t){this.setImportant(e,"width",t.offsetWidth+"px"),this.setImportant(e,"height",t.offsetHeight+"px");let r=t.offsetLeft,i=t.offsetTop;if(t.offsetParent&&e.offsetParent&&t.offsetParent!==e.offsetParent){let s=e.offsetParent.getBoundingClientRect(),n=t.offsetParent.getBoundingClientRect();r+=n.left-s.left,i+=n.top-s.top}this.setImportant(e,"left",r+"px"),this.setImportant(e,"top",i+"px")}geneSelector(e,t){let r=e.nodeName.toLowerCase();if(r!=="html"&&r!=="body")if(t&&e.id&&/^[a-z\-_][\w\-_]+$/i.test(e.id))r="#"+e.id;else{if(e.className){let s=e.classList.length;r+=[].map.call(e.classList,n=>/^[a-z][\w]+$/i.test(n)||s<3&&/^[a-z\-_][\w\-_]+$/i.test(n)?"."+n:"").join("")}let i=e.parentElement;if(i&&(r=this.geneSelector(i,!!t)+" > "+r,t&&i.children.length>1&&!/^HTML$/i.test(i.nodeName))){let s,n=0,a=0;for(s=0;s<i.children.length&&!(i.children[s].nodeName==e.nodeName&&(a++,i.children[s]==e&&(n=a),n>0&&a>1));s++);r+=a==1?"":`:nth-of-type(${n})`}}return r}copy(){let e=this,t="",r="";this.signList.forEach(n=>{r+=`
`+n[1].innerText,t+=n[1].outerHTML}),r=r.trim();const i=new Blob([t],{type:"text/html"}),s=new Blob([r],{type:"text/plain"});try{const n=new ClipboardItem({"text/html":i,"text/plain":s});navigator.clipboard.write([n]).then(()=>{Ce("Copied successfully!")},a=>{Oe(r),console.log(a)})}catch{Oe(r)}}openLinks(){if(!window.confirm(E("batchOpenConfirm")))return;let e=[];this.signList.forEach(t=>{let r=t[1];r.href?/^(http|ftp)/i.test(r.href)&&e.indexOf(r.href)===-1&&e.push(r.href):r.parentNode&&r.parentNode.href?/^(http|ftp)/i.test(r.parentNode.href)&&e.indexOf(r.parentNode.href)===-1&&e.push(r.parentNode.href):r.querySelectorAll&&[].forEach.call(r.querySelectorAll("a[href]"),i=>{/^(http|ftp)/i.test(i.href)&&e.indexOf(i.href)===-1&&e.push(i.href)})}),e.forEach(t=>{ge(t,{active:!1,insert:!0})})}getPickerStr(){if(!this.inPicker)return"";let e="";return this.signList.forEach(t=>{e+=`
`+t[1].innerText}),e.trim()}expand(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let r=e.clickedEles[t],i=e.geneSelector(r);r.dataset.signNum=0,[].forEach.call(document.querySelectorAll(i),s=>{let n=e.createSignDiv();_(document).appendChild(n),e.appendSign(n,s,t)})})}collapse(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let r=e.clickedEles[t];r.dataset.signNum=0;let i=e.createSignDiv();_(document).appendChild(i),e.appendSign(i,r,t)})}clearSigns(){this.signList.forEach(e=>{e=e[0],e.parentNode&&e.parentNode.removeChild(e)}),this.signList=[]}processNode(e,t){const r={};if(r.target=e,r.children=[],e.nodeType===Node.ELEMENT_NODE){const s=window.getComputedStyle(e);if(s.display==="none"&&s.visibility==="hidden"||e.innerHTML.trim()==="")return null}else if(e.nodeType!==Node.TEXT_NODE||e.textContent.trim()==="")return null;const i=e.childNodes;if(i.length>0){r.target=e,t.children.push(r);for(const s of i)(s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE)&&this.processNode(s,r)}else if(e.nodeType===Node.TEXT_NODE){const s=e.textContent.split(`
`),n=document.createRange();n.selectNodeContents(e);let a=0,o=e.parentNode,p=o.getBoundingClientRect();for(const d of s){if(d.trim()===""){a+=d.length+1;continue}n.setStart(e,a),a+=d.length,n.setEnd(e,a),a++;const u=n.getBoundingClientRect();let f=u.left-p.left,h=u.top-p.top,m=u.width,y=u.height,C={target:{innerText:d,outerHTML:d,parentNode:o,offsetLeft:f+o.offsetLeft,offsetTop:h+o.offsetTop,offsetWidth:m,offsetHeight:y,getBoundingClientRect:()=>{let j=o.getBoundingClientRect();return{left:j.left+f,top:j.top+h,right:j.left+f+m,bottom:j.top+h+y,width:m,height:y}}}};t.children.push(C)}}else e.nodeType===Node.ELEMENT_NODE&&(r.target=e,t.children.push(r));return r}toggle(e){if(this.init(),this.inPicker){this.close();return}this.rectSel=!!e,e?(this.domInfo=this.processNode(_(document),{children:[]}),_(document).addEventListener("mousedown",this.mouseDownHandler,!0),_(document).addEventListener("mouseup",this.mouseUpHandler,!0)):_(document).addEventListener(Mt(),this.wheelHandler,{passive:!1,capture:!0}),this.accu=0,this.inPicker=!0,_(document).classList.add("searchJumper-picker"),k.con.addEventListener("mouseenter",this.leaveHandler,!0),_(document).addEventListener("mousemove",this.moveHandler,!0),_(document).addEventListener("click",this.clickHandler,!0)}}const ke=new br;function xr(l){if(!M)return;let e=l||{key:"Enter",keyCode:13,bubbles:!0},t=new KeyboardEvent("keydown",e);M.dispatchEvent(t),t=new KeyboardEvent("keyup",e),M.dispatchEvent(t),t=new KeyboardEvent("keypress",e),M.dispatchEvent(t),pe(M,`press ${l||"Enter"}`)}async function Rt(l){return new Promise(e=>{let t=setInterval(()=>{let r=null;if(l?l==="@"?r=M:r=bt(l):r=document.readyState==="complete",r===!1)return null;r&&(clearInterval(t),e(r))},100)})}async function vr(l){return l?new Promise(e=>{let t=setInterval(()=>{bt(l)||(clearInterval(t),e(null))},100)}):null}let ct=!1;async function Oi(l,e){if(!l)return!0;M=l;let t=new FocusEvent("focusin",{bubbles:!0});l.dispatchEvent(t),t=new Event("focus",{bubbles:!0}),l.dispatchEvent(t);const r=window.getSelection(),i=r.rangeCount?r.getRangeAt(0):new Range;i.selectNode(l),r.removeAllRanges(),r.addRange(i),await $e(1),l.type!=="file"&&l.click&&l.click();let s=l.value;if(l.type=="file"){let u=e;if(u.indexOf("data:")==0)u=Ki(u);else{let h=new Blob([u],{type:"text/plain"});u=new File([h],"noname.txt",{type:h.type})}let f=new DataTransfer;f.items.add(u),l.files=f.files,e="c:/fakepath/fakefile"}else if(/INPUT/i.test(l.nodeName)){var n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;n.call(l,e)}else if(/SELECT/i.test(l.nodeName)){var a=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;a.call(l,e)}else if(l.nodeName.toUpperCase()=="TEXTAREA"){var o=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;o.call(l,e)}else{let u=l;for(;u&&u.contentEditable!=="true";)u=u.parentNode;if(u)u.dispatchEvent(new InputEvent("beforeinput",{inputType:"insertText",data:e})),await $e(1),l.innerText!==e&&(l.innerHTML=ee(e));else{let f=e;if(f.indexOf("data:")==0)f=Ki(f);else{let h=new Blob([f],{type:"text/plain"});f=new File([h],"noname.txt",{type:h.type})}var p=new ClipboardEvent("paste",{target:document.body,clipboardData:new DataTransfer});p.clipboardData.items.add(f),l.dispatchEvent(p)}}t=new Event("input",{bubbles:!0});let d=l._valueTracker;d&&d.setValue(s),l.dispatchEvent(t),t=new Event("change",{bubbles:!0}),l.dispatchEvent(t),pe(l,"input")}async function Lt(l,e=-1){ct=!1;let t;if(e>=0){e===0&&await Rt(l);let r=ni(l);if(r.length===0)return!0;if(r.length===1)t=r[0],ct=!0;else{if(r.length<=e)return!0;t=r[e],r.length===e+1&&(ct=!0)}}else if(t=await Rt(l),!t)return!0;return t}async function Fi(l,e,t=-1){let r=await Lt(l,t);return r===!0?!0:(await Oi(r,e),ct)}async function Ui(l,e=-1){let t=await Lt(l,e);if(t===!0)return!0;if(M=t,!PointerEvent)return t.click();let r={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:1,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var i=new PointerEvent("mouseover",r);t.dispatchEvent(i),i=new PointerEvent("pointerover",r),t.dispatchEvent(i),i=new PointerEvent("mousedown",r),t.dispatchEvent(i),i=new PointerEvent("pointerdown",r),t.dispatchEvent(i),i=new PointerEvent("mouseup",r),t.dispatchEvent(i),i=new PointerEvent("pointerup",r),t.dispatchEvent(i);let s=(n,a)=>{let o;try{o=document.createEvent("TouchEvent"),o.initTouchEvent(a,!0,!0)}catch{try{o=document.createEvent("UIEvent"),o.initUIEvent(a,!0,!0)}catch{o=document.createEvent("Event"),o.initEvent(a,!0,!0)}}try{o.targetTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.touches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.changedTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}]}catch{}n.dispatchEvent(o)};return s(t,"touchstart"),s(t,"touchend"),t.click(),pe(t,`click ${l}`),ct}async function wr(l,e=-1){let t=await Lt(l,e);if(t===!0)return!0;M=t;let r={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:2,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var i=new PointerEvent("mouseover",r);return t.dispatchEvent(i),i=new PointerEvent("pointerover",r),t.dispatchEvent(i),i=new PointerEvent("mousedown",r),t.dispatchEvent(i),i=new PointerEvent("pointerdown",r),t.dispatchEvent(i),i=new PointerEvent("mouseup",r),t.dispatchEvent(i),i=new PointerEvent("pointerup",r),t.dispatchEvent(i),t.click(),t.click(),i=new MouseEvent("dblclick",{...r,view:ye}),t.dispatchEvent(i),pe(t,`dblclick ${l}`),ct}async function Sr(l,e=-1){let t=await Lt(l,e);if(t===!0)return!0;M=t;let r={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:2,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:0,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:3};t.focus();var i=new PointerEvent("mouseover",r);return t.dispatchEvent(i),i=new PointerEvent("pointerover",r),t.dispatchEvent(i),i=new PointerEvent("mousedown",r),t.dispatchEvent(i),i=new PointerEvent("pointerdown",r),t.dispatchEvent(i),i=new PointerEvent("mouseup",r),t.dispatchEvent(i),i=new PointerEvent("pointerup",r),t.dispatchEvent(i),i=new PointerEvent("contextmenu",r),t.dispatchEvent(i),pe(t,`rclick ${l}`),ct}async function Ot(l,e){if(M)if(M.focus(),typeof l.value<"u"){const t=l.selectionStart,r=l.selectionEnd;let i=l.value.substring(0,t)+e+l.value.substring(r,l.value.length);await Oi(l,i),l.selectionStart=t+e.length,l.selectionEnd=t+e.length}else{const t=window.getSelection(),r=t.getRangeAt(0);t.toString()||r.selectNode(l.childNodes.length===1?l.firstChild:l),r.deleteContents(),r.insertNode(document.createTextNode(e)),t.removeAllRanges(),t.addRange(r)}}function fi(l,e,t){if(e=e.replace(/#(j(umpFrom|f)?|from){(.*?)}/,""),It={charset:l,url:e,target:t},e.indexOf("#submitBySearchJumper")!==-1){It={charset:l,url:e.replace("#submitBySearchJumper",""),target:t},Xi();return}const r="searchJumper_form";var i=document.getElementById(r);i||(i=document.createElement("form"),i.id=r,i.style.display="none",document.documentElement.appendChild(i));var s;let n=e.match(/[:%]p{(.*?)}/),a=e;return n?(a=e.replace(n[0],""),n=n[1],i.method="post",s=new URLSearchParams(n)):(i.method="get",s=new URLSearchParams(new URL(a).search)),l&&(i.acceptCharset=l),i.innerHTML=ee(),i.target=t,i.action=a,s.forEach((o,p)=>{let d=document.createElement("input");d.name=p,d.value=o,i.appendChild(d)}),i.submit()}function Ki(l){try{for(var e=l.split(","),t=e[0].match(/:(.*?);/)[1],r=atob(e[1]),i=r.length,s=new Uint8Array(i);i--;)s[i]=r.charCodeAt(i)}catch(a){pe(a)}let n=t.split("/");return n=n.length>1?n[1]:n[0],new File([s],"image."+n,{type:t})}async function qi(l){if(!l||(l.dataset.src&&(l.src=l.dataset.src),!l.src))return null;if(l.src.split("/")[2]==document.domain){let i=getComputedStyle(l);var t=document.createElement("canvas"),r=t.getContext("2d");if(l.complete){t.width=l.naturalWidth||l.width||parseInt(i.width),t.height=l.naturalHeight||l.height||parseInt(i.height),r.drawImage(l,0,0);try{return t.toDataURL("image/png")}catch{return await Ft(l.src)}}else return await new Promise(s=>{l.addEventListener("load",async n=>{t.width=l.naturalWidth||l.width||parseInt(i.width),t.height=l.naturalHeight||l.height||parseInt(i.height),r.drawImage(l,0,0);try{s(t.toDataURL("image/png"))}catch{s(await Ft(l.src))}})})}else return await Ft(l.src)}async function Ft(l){let e=l.split("/");return new Promise(t=>{Be({method:"GET",url:l,responseType:"blob",headers:{origin:e[0]+"//"+e[2],referer:location.href,accept:"*/*"},onload:function(r){try{var i=r.response,s=new FileReader;s.readAsDataURL(i),s.onload=function(n){t(n.target.result)}}catch{t(null)}},onerror:function(){t(null)},ontimeout:function(){t(null)}})})}function Cr(l){let e=getComputedStyle(l),t=getComputedStyle(l,":before").content.replace(/"/g,"");if(!t)return!1;var r=document.createElement("canvas");r.width=l.clientWidth||parseInt(e.lineHeight),r.height=l.clientHeight||parseInt(e.lineHeight);var i=r.getContext("2d");i.font=e.font,i.strokeStyle=e.color||"black",i.fillStyle=e.color||"black",i.textBaseline="top";let s=i.measureText(t);return i.fillText(t,(r.width-s.width)/2,(r.height-parseInt(e.fontSize))/2),r.toDataURL("image/png")}function Tr(l){let e=l.className.trim().replace("fa fa-","").replace(/ /g,"_");if(be[e])return;let t=Cr(l);t=="data:,"||!t||(be[e]=t,q.setItem("cacheIcon",be))}async function mi(l){if(l.nodeName.toUpperCase()=="IMG"){let e=l.src||l.dataset.src;if(e){if(be[e])return;let t=await qi(l);(t=="data:,"||!t)&&(t="fail"),be[e]=t,q.setItem("cacheIcon",be),pe(e+" cached, left "+He.length+" icons")}}else Tr(l);await new Promise(e=>{setTimeout(()=>{e(!0)},1)})}async function Pt(){for(;He.length>0;)await mi(He.shift())}async function Gi(l){if(c.prefConfig.cacheSwitch){let e=He.length>0;await Promise.all([Pt(),Pt(),Pt(),Pt(),Pt()]),e&&(l&&Ce(E("cacheOver")),pe(E("cacheOver")))}}async function Vi(l){if(!et){k.con.classList.add("in-input"),k.con.style.visibility="hidden",k.con.style.display="",k.appendBar();let e=Jt.length>0;for(;Jt.length>0;)await mi(Jt.shift());e&&pe("All font icons cached!")}}function De(){let l=Nt||ke.getPickerStr()||window.getSelection().toString();if(setTimeout(()=>{Nt=""},1),!l){let e=oi(document);if(e&&/^(TEXTAREA|INPUT)$/i.test(e.nodeName)){let t=e.selectionStart,r=e.selectionEnd;(t||r)&&(l=e.value.substring(t,r))}}if(l){if(l=l.trim(),l)return l}else if(M&&M.className==="searchJumper"&&/^MARK$/i.test(M.nodeName))return M.dataset.matched||M.innerText;return""}function Ut(l,e,t){return t||(/\w$/.test(l)?t="(\\b|$)":t=""),new RegExp(l.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g,"\\$1")+t,e)}function gi(l,e,t,r){if(l.indexOf(e+".replace(/")!==-1){let i=l.match(Ut(e,"",`\\.replace\\(/(.*?[^\\\\])/([gimsuyx]*),\\s*["'](.*?[^\\\\])??["']\\)`));return i?(t=t.replace(new RegExp(i[1],i[2]),i[3]||""),l=l.replace(i[0],e),gi(l,e,t,r)):l.replace(Ut(e,"g"),r?r(t):t)}else return l.replace(Ut(e,"g"),r?r(t.replace(/\$/g,"$$$$")):t.replace(/\$/g,"$$$$"))}function it(){let l=De();if(l)return l;if(!le)return Fe||"";let e,t="",r=!le.charset||le.charset=="UTF-8";try{if(le.keywords){let i=le.keywords.split(`
`);for(let s=0;s<i.length;s++){let n=i[s];if(!n||!n.trim())continue;let a=i[s].match(/^(.*?)\.replace\(\//);if(a&&(n=a[1]),r){if(/^\w[\w\|]*$/.test(n)){let o=n.split("|"),p=new URLSearchParams(location.search);for(let d=0;d<o.length&&(t=p.get(o[d]),!t);d++);}else if(/\(.+\)/.test(n)&&n.indexOf("@")!==0)try{e=de.match(new RegExp(n)),e&&(t=e[1]),t&&(t=decodeURIComponent(t))}catch{t=""}}if(!t&&_(document))try{let o=bt(n);o&&(t=o.value||o.innerText)}catch{t=""}if(t&&a&&(t=gi(i[s],n,t)),t)break}}else if(r&&ft.test(le.url)&&!/[#:%]p{/.test(le.url)&&(de.indexOf("?")!=-1&&(e=le.url.match(new RegExp(`[\\?&]([^&]*?)=${di}.*`)),e&&(t=new URLSearchParams(location.search).get(e[1]))),!t&&(e=le.url.match(new RegExp(`https?://[^/]*/(.*)${di}`)),e&&(e=de.match(new RegExp((e[1].replace(/\?/g,"\\?")||location.host.replace(/\./g,"\\.")+"/")+"(.*?)(/|$)")),e&&(t=e[1]),t))))try{t=decodeURIComponent(t)}catch{t=""}if(t==""&&_(document)){let i=_(document).querySelector("input[type=text]:not([readonly]),input:not([type])");i&&(t=i.value)}t&&(Fe=t)}catch(i){pe(i)}return Fe||"";//!localKeywords ? cacheKeywords : localKeywords;
}function Yi(l,e){e=e||document.createElement("div"),l="on"+l;var t=l in e;if(!t){e.setAttribute||(e=document.createElement("div"));var r;e.hasAttribute(l)||(r=!0,e.setAttribute(l,"return;")),t=typeof e[l]=="function",r&&e.removeAttribute(l)}return t}function Mt(){var l="DOMMouseScroll";return Yi("wheel")?l="wheel":Yi("mousewheel")&&(l="mousewheel"),l}let mt=!1,Nt="";function kr(){nt(E("settings"),()=>{ge(Ae,{active:!0,insert:!0})}),nt(E("searchInPage"),()=>{k.showInPage(),k.showInPageSearch()}),nt(E("search"),()=>{k.searchAuto(0,{})}),nt(E("addSearchEngine"),()=>{let x=document.head.querySelector('[rel="search"]');if(x)sr(x.href,(L,$)=>{if(L!="load"){$&&pe($.statusText||$.error||$.response||$);let T=_(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||_(document).querySelector("textarea");yi(T)}});else{let L=_(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||_(document).querySelector("textarea");yi(L)}}),document.addEventListener("searchJumper",x=>{switch(x.detail.action){case"search":x.detail.name?k.searchBySiteName(x.detail.name,x.detail.key||{}):k.searchAuto(x.detail.index,x.detail.key||{});break;case"show":k.setFuncKeyCall(!1),k.showInPage(),(!c.prefConfig.disableInputOnWords||k.inInput||!De())&&k.showSearchInput();break;case"showAll":k.appendBar(),k.showAllSites();break}}),M=_(document);let l=lt.children[0],e=0,t,r=!1,i=x=>{if(clearTimeout(t),k.bar.classList.remove("grabbing"),document.removeEventListener("mouseup",i,!1),document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchend",i,!1),document.removeEventListener("touchmove",n,!1),k.bar.style.marginLeft="",k.bar.style.marginTop="",k.bar.style.transform="",e===1){e=0,k.showAllSites();return}e=0;let L=window.innerWidth||document.documentElement.clientWidth,$=window.innerHeight||document.documentElement.clientHeight,T=L/3,U=$/3,z,B,b,P,D=ht(x),N=dt(x);D<T?(z="left",b=parseInt(k.bar.style.left)>0?parseInt(k.bar.style.left):0):D<T*2?(z="center",b=parseInt(k.bar.style.left)-L/2):(z="right",b=L-parseInt(k.bar.style.left)-k.bar.scrollWidth),N<$/2?(B="top",P=parseInt(k.bar.style.top)):(B="bottom",P=$-parseInt(k.bar.style.top)-k.bar.scrollHeight,P<0&&(P=0)),l.style.cursor="",k.closeOpenType(),k.initPos(z,B,b,P),q.setItem("searchData",c)},s={x:0,y:0},n=x=>{let L=ht(x),$=dt(x);Math.abs(s.x-L)+Math.abs(s.y-$)<50||(e===1&&(clearTimeout(t),l.style.cursor="grabbing",k.bar.style.position="fixed",k.bar.style.marginLeft="0",k.bar.style.marginTop="0",k.bar.style.right="",k.bar.style.bottom="",k.bar.style.transform="unset",k.con.classList.remove("search-jumper-scroll"),k.bar.className="search-jumper-searchBar grabbing"),e=2,k.bar.style.left=L-k.bar.scrollWidth+20+"px",k.bar.style.top=$-k.bar.scrollHeight+20+"px")};if(lt.oncontextmenu=function(x){k.bar.style.display="none",x.preventDefault()},lt.addEventListener("mousedown",x=>{if(r){r=!1;return}if(x.button===2){c.prefConfig.resizePage&&(typeof k.initBodyStyle<"u"&&(_(document).style.cssText=k.initBodyStyle),k.con.classList.remove("resizePage")),document.removeEventListener("mouseup",i,!1),document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchend",i,!1),document.removeEventListener("touchmove",n,!1);return}if(x.preventDefault(),x.stopPropagation(),k.inInput||x.button===1||x.altKey||x.ctrlKey||x.shiftKey||x.metaKey){ge(Ae,{active:!0,insert:!0});return}e=1,s={x:ht(x),y:dt(x)},document.addEventListener("mouseup",i,!1),setTimeout(()=>{e===1&&document.addEventListener("mousemove",n,!1)},100),t=setTimeout(()=>{k.bar.style.display="none",document.removeEventListener("mouseup",i,!1),document.removeEventListener("mousemove",n,!1)},2e3)},!1),lt.addEventListener("touchstart",x=>{x.preventDefault(),x.stopPropagation(),r=!0,e=1,s={x:ht(x),y:dt(x)},document.addEventListener("touchend",i,!1),setTimeout(()=>{e===1&&document.addEventListener("touchmove",n,!1)},100),t=setTimeout(()=>{k.bar.style.display="none",c.prefConfig.resizePage&&(typeof k.initBodyStyle<"u"&&(_(document).style.cssText=k.initBodyStyle),k.con.classList.remove("resizePage")),document.removeEventListener("touchend",i,!1),document.removeEventListener("touchmove",n,!1)},1500)},{passive:!1,capture:!1}),k.bar.addEventListener(Mt(),x=>{if(x.target.parentNode&&(x.target.parentNode.className=="sitelistCon"||x.target.parentNode.parentNode&&x.target.parentNode.parentNode.className=="sitelistCon"))return;let L=k.con.classList;if(L.contains("search-jumper-scroll")&&!(L.contains("search-jumper-left")||L.contains("search-jumper-right"))){var $,T;if(x.type!=="wheel"){var U=0,z=0;typeof x.axis=="number"?x.axis==2?z=x.detail:U=x.detail:typeof x.wheelDeltaY>"u"||x.wheelDeltaY!=0?z=-x.wheelDelta/40:U=-x.wheelDelta/40,T=z,$=U}else $=x.deltaX,T=x.deltaY;x.preventDefault(),x.stopPropagation(),k.con.scrollLeft+=T}},{passive:!1,capture:!1}),c.prefConfig.shortcut&&(c.prefConfig.switchSitesPreKey||c.prefConfig.switchSitesNextKey||c.prefConfig.shortcutKey||c.prefConfig.showAllShortcutKey)){let x=-1,L=!1,$=(T,U,z,B,b,P)=>U&&!T.altKey||z&&!T.ctrlKey||B&&!T.shiftKey||b&&!T.metaKey||(L||(L=(T.key||String.fromCharCode(T.keyCode)).toLowerCase()),P!=L&&P!=T.code)||!c.prefConfig.enableInInput&&x==-1&&(x=1,!z&&!U&&!B&&!b&&Ct(document))?!1:(x=0,T.preventDefault(),T.stopPropagation(),!0);document.addEventListener("mouseenter",T=>{T.target&&!k.contains(T.target)&&(ui=T.target)},!0),document.addEventListener("keydown",T=>{if(T.target.id!=="searchJumperInput"&&(x=-1,L=!1,c.prefConfig.shortcutKey&&$(T,c.prefConfig.callBarAlt,c.prefConfig.callBarCtrl,c.prefConfig.callBarShift,c.prefConfig.callBarMeta,c.prefConfig.shortcutKey)&&(k.setFuncKeyCall(!1),k.showInPage(),(!c.prefConfig.disableInputOnWords||k.inInput||!De())&&k.showSearchInput()),x!=1&&(c.prefConfig.showAllShortcutKey&&$(T,c.prefConfig.showAllAlt,c.prefConfig.showAllCtrl,c.prefConfig.showAllShift,c.prefConfig.showAllMeta,c.prefConfig.showAllShortcutKey)&&(k.appendBar(),k.showAllSites()),le&&k.bar.style.display!=="none"))){if(c.prefConfig.switchSitesPreKey&&$(T,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesPreKey)){k.switchSite();return}c.prefConfig.switchSitesNextKey&&$(T,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesNextKey)&&k.switchSite(!0)}},!0)}let a;if(c.prefConfig.enableInPage){let z=function(b){let P=!1;if(Ct(document))P=!0;else{let D=!1,N=b;for(;N&&(D=N.contentEditable=="true",!(D||N.nodeName.toUpperCase()=="BODY"));)N=N.parentNode;D&&(P=!0)}return P},x=!1,L,$=!1,T;document.addEventListener("selectionchange",b=>{(c.prefConfig.leftMouse||c.prefConfig.middleMouse)&&(window.getSelection().toString()?T=window.getSelection().getRangeAt(0).getBoundingClientRect():T=null)});let U=!1;a=b=>{x&&b.preventDefault(),x=!1,document.removeEventListener("click",a,!0)};let B=b=>{if(U&&b.type==="mousedown"&&b.button===0||b.target.classList&&b.target.classList.contains("search-jumper-btn")||k.contains(b.target)||k.bar.classList.contains("grabbing"))return;let P=z(b.target),D=!c.prefConfig.enableInInput&&P;if(D&&b.type==="dblclick")return;if(c.prefConfig.minPopup==2&&(P?k.con.classList.add("targetInput"):k.con.classList.remove("targetInput")),b.type==="touchstart"){c.prefConfig.selectToShow&&setTimeout(()=>{De()?k.showInPage(!0,b):k.waitForHide(0)},0);return}U=!0,setTimeout(()=>{U=!1},500),x=!1,M=b.target,k.closePopupWindow();let N=!1;if((c.prefConfig.altKey||c.prefConfig.ctrlKey||c.prefConfig.shiftKey||c.prefConfig.metaKey)&&!(c.prefConfig.altKey&&!b.altKey||c.prefConfig.ctrlKey&&!b.ctrlKey||c.prefConfig.shiftKey&&!b.shiftKey||c.prefConfig.metaKey&&!b.metaKey)&&(N=!0),!c.prefConfig.selectToShow&&(b.button===0&&!c.prefConfig.leftMouse||b.button===1&&!c.prefConfig.middleMouse)){k.waitForHide(0);return}let A=b.clientX,Z=b.clientY,ue=!1,te=O=>{Math.abs(A-O.clientX)+Math.abs(Z-O.clientY)>2&&(clearTimeout(L),document.removeEventListener("mousemove",te,!0),O.target.removeEventListener("scroll",w),ue=!0)},w=O=>{clearTimeout(L),document.removeEventListener("mousemove",te,!0),O.target.removeEventListener("scroll",w)},R=O=>{mt=!1,k.contains(O.target)||x?O.preventDefault():setTimeout(()=>{x||(P=z(O.target),D=!c.prefConfig.enableInInput&&P,!D&&(N&&O.button===2||(ue||$)&&O.button===0&&c.prefConfig.selectToShow&&De())?k.showInPage(!0,O):(U=!1,k.waitForHide(0)))},0),clearTimeout(L),document.removeEventListener("mouseup",R,!0),document.removeEventListener("mousemove",te,!0),O.target.removeEventListener("scroll",w)};if(b.type==="dblclick"){De()!==""?(x=!0,mt=!1,document.removeEventListener("mouseup",R,!0),document.removeEventListener("mousemove",te,!0),b.target.removeEventListener("scroll",w),clearTimeout(L),setTimeout(()=>{k.showInPage(!0,b)},200)):($=!0,setTimeout(()=>{$=!1},200));return}L&&clearTimeout(L),L=setTimeout(()=>{mt||M==b.target&&(b.button===1&&!c.prefConfig.middleMouse||b.button===2&&!c.prefConfig.rightMouse||b.button===0&&!c.prefConfig.leftMouse||(c.prefConfig.longPressTile?k.showInPage(!0,b):(k.setFuncKeyCall(!1),k.showInPage()),x=!0))},parseInt(c.prefConfig.longPressTime));let V=!1;if(b.button===2?N&&(V=!0):(b.button===0?c.prefConfig.leftMouse&&(V=!0):b.button===1&&c.prefConfig.middleMouse&&(V=!0),V&&(D?V=!1:T?(b.clientX<T.left||b.clientX>T.left+T.width||b.clientY<T.top||b.clientY>T.top+T.height)&&(V=!1):V=!1)),V)return setTimeout(()=>{mt||k.showInPage(!0,b),document.removeEventListener("mousemove",te,!0),b.target.removeEventListener("scroll",w)},200),x=!0,document.addEventListener("mouseup",R,!0),document.addEventListener("click",a,!0),!1;document.addEventListener("mousemove",te,!0),document.addEventListener("mouseup",R,!0),b.target.addEventListener("scroll",w)};if(document.addEventListener("mousedown",B),document.addEventListener("dblclick",B),c.prefConfig.selectToShow){let b,P,D=N=>{clearTimeout(b),b=setTimeout(()=>{window.getSelection().toString()&&(B(P),document.removeEventListener("selectionchange",D))},300)};document.addEventListener("touchstart",N=>{N.isTrusted!==!1&&(P=N,document.addEventListener("selectionchange",D))})}document.addEventListener("contextmenu",b=>{x&&b.preventDefault(),x=!1})}c.prefConfig.dragToSearch&&!at&&_(document).addEventListener("dragstart",x=>{!x.isTrusted||c.prefConfig.dragAlt&&!x.altKey||c.prefConfig.dragCtrl&&!x.ctrlKey||c.prefConfig.dragShift&&!x.shiftKey||c.prefConfig.dragMeta&&!x.metaKey||!c.prefConfig.enableInInput&&!x.altKey&&!x.ctrlKey&&!x.shiftKey&&!x.metaKey&&Ct(document)||(M=x.target,M.nodeType!==1&&(M=M.parentNode),M.shadowRoot&&(M=M.shadowRoot.activeElement||M),!(M.getAttribute&&M.getAttribute("draggable")=="true")&&(M.parentNode&&M.parentNode.getAttribute&&M.parentNode.getAttribute("draggable")=="true"||(k.waitForHide(0),setTimeout(()=>{Pr(x.clientX,x.clientY)},2),a&&document.removeEventListener("click",a,!0),mt=!0)))}),c.prefConfig.quickAddRule&&document.addEventListener("click",x=>{((x.ctrlKey||x.metaKey)&&x.shiftKey||(x.ctrlKey||x.metaKey)&&x.altKey||x.altKey&&x.shiftKey)&&/^(INPUT|TEXTAREA)$/i.test(x.target.nodeName)&&(/^INPUT$/i.test(x.target.nodeName)&&x.target.type&&x.target.type!="text"&&x.target.type!="search"||yi(x.target))},!0);let o=x=>{setTimeout(()=>{k.refresh()},100)};document.addEventListener("fullscreenchange",x=>{document.fullscreenElement&&(k.bar.style.display="none")});let p=!1,d=x=>{if(p)return;p=!0,setTimeout(()=>{p=!1},300);let L=x.target;if(le&&L)if(L.nodeName&&L.nodeName.toLowerCase&&L.nodeName.toLowerCase()=="a")k.updateCacheKeywords();else{let $=L.parentNode;$&&$.nodeName&&$.nodeName.toLowerCase&&$.nodeName.toLowerCase()=="a"&&k.updateCacheKeywords()}};_(document).addEventListener("auxclick",d,!0),_(document).addEventListener("click",d,!0);let u=function(x){var L=history[x];return function(){var $=L.apply(this,arguments);let T=location.href.slice(0,500);if(de!=T){de=T;var U=new Event("sj_"+x);U.arguments=arguments,window.dispatchEvent(U)}return $}};history.pushState=u("pushState"),history.replaceState=u("replaceState"),window.addEventListener("sj_pushState",o),window.addEventListener("sj_replaceState",o),window.addEventListener("yt-navigate-finish",o),window.addEventListener("securitypolicyviolation",x=>{x.violatedDirective==="form-action"&&Xi()});let f=x=>k.removeMark(x),h=(x,L)=>k.highlight(x,L),m=()=>k.appendBar(),y={childList:!0,characterData:!0,subtree:!0},C=0;new MutationObserver((x,L)=>{if(k.lockWords){if(k.initHighlight&&C>100)return;for(let T of x){if(T.type==="characterData"){let U=T.target.parentNode;if(!U||T.target.previousElementSibling&&T.target.previousElementSibling.className==="searchJumper"||T.target.nextElementSibling&&T.target.nextElementSibling.className==="searchJumper")return;k.checkCharacterData(U),k.initHighlight&&C++}if(T.removedNodes.length&&[].forEach.call(T.removedNodes,U=>{U.nodeType===1&&(U.classList&&U.classList.contains("searchJumper")?f(U):U.children.length&&[].forEach.call(U.querySelectorAll("mark.searchJumper,a.searchJumper,input.searchJumper,textarea.searchJumper"),z=>{f(z)}))}),T.addedNodes.length)for(let U=0;U<T.addedNodes.length;U++){let z=T.addedNodes[U],B;if(z.nodeType===1){if(/^searchJumper$/.test(z.className))continue;B=z}else{if(z.previousElementSibling&&/^searchJumper$/.test(z.previousElementSibling.className))continue;if(z.nextElementSibling&&/^searchJumper$/.test(z.nextElementSibling.className))continue;B=z.parentNode}B&&(setTimeout(()=>{h("insert",B)},0),k.initHighlight&&C++)}}m()}}).observe(_(document),y)}function _i(l,e){if(!l)return"";let t,r;if(e)t=e.replace(/(^https?:\/\/.+)\/[^\/]*$/,"$1"),r=e;else{if(l.charAt(0)=="#")return location.href+l;if(l.charAt(0)=="?")return location.href.replace(/^([^\?#]+).*/,"$1"+l);t=location.protocol+"//"+location.host;let o=document.querySelector("base");r=o?o.href:location.href}let i=r||t;i=i.replace(/(\?|#).*/,""),/https?:\/\/[^\/]+$/.test(i)&&(i=i+"/"),i.indexOf("http")!==0&&(i=t+i);for(var s=/^[^\?#]*\//.exec(i)[0],n=/^\w+\:\/\/\/?[^\/]+/.exec(s)[0],a=/^\w+\:\/\//;l.indexOf("../")===0;)l=l.substr(3),s=s.replace(/\/[^\/]+\/$/,"/");return l=l.replace(/\.\//,""),/^\/\/\/?/.test(l)&&(l=location.protocol+l),a.test(l)?l:(l.charAt(0)=="/"?n:s)+l}function yi(l){if(Te)return;let e,t=location.href;if(l&&l.name)for(e=l.parentNode;e;){if(e.nodeName.toUpperCase()==="FORM"){let s=e.target;if(s&&typeof s=="string"&&s!="_blank"&&s!="_self"&&s!="_parent"&&s!="_top"&&!_(document).querySelector(s)){e=null;break}break}e=e.parentNode}let r=()=>!window.confirm(E("noValidItemAsk"));if(e){t=_i(e.getAttribute("action")||t);let s=[],n=new FormData(e);for(let[a,o]of n)l.name===a?o="%s":o=encodeURIComponent(o),s.push(a+"="+o);if(e.method.toLowerCase()=="post")t+="%p{"+s.join("&")+"}",e.action.indexOf(location.origin)==0&&location.pathname&&location.pathname!=="/"&&(t+=`#from{${location.pathname.slice(1)}}`);else{let a=t.match(/\?(.*)/);a&&(t=t.replace(a[0],""),a[1].split("&").forEach(o=>{let p=o.split("="),d=p[0];if(s.findIndex(f=>f.indexOf(d+"=")===0)!==-1)return;let u=p[1];u==l.value&&(u="%s"),s.push(d+"="+u)})),t+="?"+s.join("&")}}else if(l&&l.value)if(location.href.indexOf(l.value)!==-1)t=location.href.replace(l.value,"%s");else{let s=encodeURIComponent(l.value);if(location.pathname.indexOf(s)!==-1||location.search.indexOf(s)!==-1)t=location.origin+location.pathname.replace(s,"%s")+location.search.replace(s,"%s");else if(s=escape&&escape(l.value),s&&location.pathname.indexOf(s)!==-1||location.search.indexOf(s)!==-1)t=location.origin+location.pathname.replace(s,"%se")+location.search.replace(s,"%se");else if(r())return}else if(r())return;let i=[];[].forEach.call(document.querySelectorAll("link[rel='shortcut icon'],link[rel='icon'],link[rel='fluid-icon'],link[rel='apple-touch-icon']"),s=>{i.indexOf&&i.indexOf(s.href)!==-1||i.push(s.href)}),Qt(document.title.replace(l?l.value:"","").replace(/^\s*[-_]\s*/,""),"",t,i,document.characterSet)}const Zi="https://hoothin.github.io/SearchJumper/jump.html";function Xi(){let l=`${Zi}#jump{url=${encodeURIComponent(It.url)}&charset=${It.charset}}`;It.target=="_self"?location.href=l:ge(l,{active:!0,insert:!0})}function Ir(){if(de.indexOf(Zi)!=-1){let l=de.match(/#jump{url=(.*)&charset=(.*)}/);l&&fi(l[2],decodeURIComponent(l[1]),"_self")}}var Te;async function jr(){if(de.indexOf(Ae)===0||(document.title==="SearchJumper"||document.querySelector('[name="from"][content="SearchJumper"]'))&&document.querySelector('[name="author"][content="Hoothin"]')){Te=document.querySelector('[name="engines"]');let l=document.getElementById("spotlight");if(Te)try{if(Te=Te.getAttribute("content"),Te.indexOf("http")===0){if(l){const r=E("loadingCollection");l.innerText=r,l.setAttribute("spotlight",r)}let t=await new Promise(r=>{Be({method:"GET",url:Te,onload:function(i){var s=null;try{s=JSON.parse(i.responseText),r(s)}catch(n){console.log(n),r(!1)}},onerror:function(i){console.log(i),r(!1)},ontimeout:function(i){console.log(i),r(!1)}})});t?(c.sitesConfig=t,Te=!0):Te=!1}else c.sitesConfig=JSON.parse(decodeURI(Te)),Te=!0}catch{Te=!1}let e=de.indexOf(Ae.replace(/\/config.*/,""))===0||de.indexOf(ii)===0||de.indexOf(or)===0||location.hostname==="localhost";return e&&(et=!!Te||/all(\.html)?$/.test(location.pathname)),l?l.style.display="none":setTimeout(()=>{l=document.getElementById("spotlight"),l&&(l.style.display="none")},500),e}return!1}async function Er(){if(at=await jr(),!at&&c.webdavConfig&&(ot=new cr(c.webdavConfig.host+"/SearchJumper"+(c.webdavConfig.path||"").replace(/^\/*/,"/").replace(/\/*$/,"/"),c.webdavConfig.username,c.webdavConfig.password)),at&&!et){let l,e=!1,t=()=>{l=setTimeout(()=>{e||t()},50),window.postMessage({searchData:c,cacheIcon:be,version:pt.script.version||0,command:"loadConfig"},"*")},r=setTimeout(()=>{e||location.reload()},3e3);document.addEventListener("received",n=>{e=!0,clearTimeout(l),clearTimeout(r),He.length>0&&c.prefConfig.cacheSwitch&&(pe(`Start cache ${He.length} icons!`),Gi())}),document.addEventListener("downloadCache",n=>{Mr()}),document.addEventListener("importCache",n=>{let a=n.detail?n.detail.cacheData:n.cacheData;Nr(a),Ce("Cache imported successfully!")}),document.addEventListener("showSiteAdd",n=>{let a=n.detail?n.detail.site:n.site;a&&(a.url?Qt(a.name,a.description,a.url,a.icon?[a.icon]:[],a.charset,a.kwFilter,a.match,a.hideNotMatch):Qi.open(a))}),t(),document.addEventListener("dataChanged",n=>{t()});let i=(n,a,o,p)=>{window.postMessage({url:n,name:a,status:o,finalUrl:p,command:"verifyResult"},"*")};document.addEventListener("verifyUrl",n=>{let a=n.detail?n.detail.url:n.url,o=n.detail?n.detail.name:n.name;Be({method:"GET",url:a,headers:{referer:a,"User-Agent":navigator.userAgent},onload:function(p){i(a,o,p&&p.status,p&&p.finalUrl)},onerror:function(p){i(a,o,"error","")},ontimeout:function(p){i(a,o,"timeout","")}})});let s=c.prefConfig.cacheSwitch;document.addEventListener("saveConfig",n=>{c=(n.detail?n.detail.searchData:n.searchData)||ye.searchData,q.setItem("searchData",c);let a={},o=be?Object.keys(be).length:0;s==c.prefConfig.cacheSwitch?(c.sitesConfig.forEach(p=>{if(/^[a-z\- ]+$/.test(p.icon||"")||/^http/.test(p.icon)){let d=p.icon.trim().replace(/ /g,"_"),u=be[d];u&&(a[d]=u)}p.sites.forEach(d=>{let u=d.icon;if(u||(u=d.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(u)){let f=be[u];f&&(a[u]=f)}})}),o!==Object.keys(a).length&&(be=a,q.setItem("cacheIcon",a))):(c.sitesConfig.forEach(p=>{if(/^http/.test(p.icon)){let d=be[p.icon];if(d)if(d==="fail"){let u=document.createElement("img");u.src=p.icon,He.push(u)}else a[p.icon]=d}p.sites.forEach(d=>{let u=d.icon;if(u||(u=d.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(u)){let f=be[u];if(f)if(f==="fail"){let h=document.createElement("img");h.src=u,He.push(h)}else a[u]=f}})}),q.setItem("cacheIcon",a),c.prefConfig.cacheSwitch&&(He.length>0&&(Ce(E("startCache")),Gi(!0)),Vi())),s=c.prefConfig.cacheSwitch,(n.notification||n.detail&&n.detail.notification)&&Ce("Configuration imported successfully!")}),document.addEventListener("copyConfig",n=>{let a=c.sitesConfig.filter(o=>o&&!(/^BM/.test(o.type)&&o.icon==="bookmark"));Oe(JSON.stringify(a,null,2)),Ce("Configuration copied successfully!")})}else if(Pi.test(de)){let l=Me(`
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
                `),e,t=0,r=document.createElement("button");r.id="import-btn",r.className="btn Button--secondary Button";let i=document.createElement("button");i.id="filter-btn",i.className="btn Button--secondary Button";let s=document.createElement("h3"),n=document.createElement("div");n.id="import-btns-con",n.appendChild(l),n.appendChild(r),n.appendChild(i),n.appendChild(s),n.addEventListener("click",o=>{e&&(e.style.filter=""),n.classList.add("hide")}),r.innerText=E("import"),r.addEventListener("click",o=>{if(Te||!e)return;let p=e.innerText.trim(),d;if(p){try{d=JSON.parse(p)}catch(u){Ce(u.toString());return}switch(t){case 0:window.confirm(E("importOrNot"))&&(n.parentNode&&n.parentNode.removeChild(n),Dt(()=>{c.sitesConfig=d,c.lastModified=new Date().getTime(),q.setItem("searchData",c),Ce(E("siteAddOver")),k.refreshEngines()},!0));break;case 1:Qt(d.name,"",d.url,d.icon?[d.icon]:[],d.charset,d.kwFilter,d.match,d.hideNotMatch);break;case 2:c.prefConfig.inPageRule||(c.prefConfig.inPageRule={}),Object.keys(d).forEach(u=>{let f=d[u];if(!f)return;if(u.indexOf("@")===0){c.prefConfig.inPageRule[u]=f;return}if(!f.words||f.words.length===0)return;let h="",m=f.sep||"";m?h="$c"+m:(m=" ",f.words.length===1&&f.words[0].indexOf(" ")!==-1&&(m="",h="$o")),c.prefConfig.inPageRule[u]=h+f.words.join(m)}),q.setItem("searchData",c),Ce("Over!");break}}}),i.innerText=E("filter"),i.addEventListener("click",o=>{if(e){n.parentNode&&n.parentNode.removeChild(n);let p=e.innerText.trim(),d;if(!p||p.indexOf("[")!==0)return;try{d=JSON.parse(p),Qi.open(d)}catch(u){Ce(u.toString())}}});let a=o=>{if(o==e&&n.parentNode)return;let p=o.offsetTop+"px",d=o.innerText.trim();if(d){if(s.innerText="",/^\[/.test(d))t=0,n.style.top=p,n.classList.add("filter");else if(/^\{\s*"name"/.test(d))t=1,n.style.top=p,n.classList.remove("filter"),s.innerText=d.match(/"name":\s*"(.*)"/)[1];else if(/^\{/.test(d))t=2,n.style.top=p,n.classList.remove("filter");else return;e&&(e.style.filter=""),o.parentNode.appendChild(n),o.style.filter="blur(5px)",e=o,n.classList.remove("hide")}};window.addEventListener("load",o=>{if(!e){let p=document.querySelector(".highlight>pre");p&&a(p)}}),document.addEventListener("mouseover",o=>{if(Pi.test(de))if(o.target.nodeName==="PRE")a(o.target);else{let p=o.target.children[0];p&&p.nodeName==="PRE"&&a(p)}})}}class Lr{constructor(){this.inited=!1}init(){if(this.inited)return;this.inited=!0;let e=this;this.openList=[],this.filterCss=`
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
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                        transition: all 0.25s ease;
                        border: 0;
                        font-size: initial;
                    }
                    .searchJumperFrame-title {
                        background: #458bd1!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px!important;
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
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
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
                        background-color: black;
                        color: #d5d5d5;
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #245d8f!important;
                      }
                    }
                `,this.filterCssEle=Me(this.filterCss),this.filterFrame=document.createElement("div"),this.filterFrame.id="searchJumperFilter",this.filterFrame.innerHTML=ee(`
                <div class="searchJumperFrame-body">
                    <a href="${Ae}" class="searchJumperFrame-title" target="_blank">
                        <img onerror="this.style.display='none'" width="32px" height="32px" src="${ut}" />${E("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-buttons">
                        <button id="expandAll" type="button">${E("expandAll")}</button>
                        <button id="collapseAll" type="button">${E("collapseAll")}</button>
                    </div>
                    <div class="sitesCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="cancel" type="button">${E("siteCancel")}</button>
                        <button id="selectAll" type="button">${E("selectAll")}</button>
                        <button id="add" type="button">${E("import")}</button>
                    </div>
                </div>
                `),this.sitesCon=this.filterFrame.querySelector(".sitesCon");let t=this.filterFrame.querySelector("#add"),r=this.filterFrame.querySelector("#selectAll"),i=this.filterFrame.querySelector("#expandAll"),s=this.filterFrame.querySelector("#collapseAll"),n=!1;i.addEventListener("click",a=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.setAttribute("open","open")})}),s.addEventListener("click",a=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.removeAttribute("open")})}),r.addEventListener("click",a=>{n=!n,[].forEach.call(this.filterFrame.querySelectorAll("input[type=checkbox]"),o=>{o.checked=n})}),t.addEventListener("click",a=>{Te||Dt(()=>{let o=!1;[].forEach.call(this.filterFrame.querySelectorAll("details"),p=>{let d=p.children[0].children[0],u=e.typeDict[d.title];if(u.type=d.innerText.trim(),u.sites=[],[].forEach.call(p.querySelectorAll('div>[type="checkbox"]'),f=>{if(f.checked){o=!0;let h=e.siteDict[f.parentNode.title],m=f.nextElementSibling;if(!h||!m)return;if(m.value==="0")u.sites.push(h);else{let y=e.searchType(m.value);c.sitesConfig[y].sites.push(h)}}}),u.sites.length){let f=e.searchType(u.type);f===!1?c.sitesConfig.push(u):c.sitesConfig[f].sites=c.sitesConfig[f].sites.concat(u.sites)}}),o&&(c.lastModified=new Date().getTime(),q.setItem("searchData",c),Ce(E("siteAddOver")),k.refreshEngines(),this.close())})}),this.filterFrame.addEventListener("click",a=>{(a.target.id=="searchJumperFilter"||a.target.id=="cancel")&&this.close()})}searchType(e){for(let t=0;t<c.sitesConfig.length;t++)if(c.sitesConfig[t].type==e)return t;return!1}searchUrl(e){for(let t=0;t<c.sitesConfig.length;t++){let r=c.sitesConfig[t].sites;for(let i=0;i<r.length;i++)if(r[i].url.replace(/^https?/,"")==e.replace(/^https?/,""))return!0}return!1}searchName(e){for(let t=0;t<c.sitesConfig.length;t++){let r=c.sitesConfig[t].sites;for(let i=0;i<r.length;i++)if(r[i].name==e){let s=e+"_1";return this.searchName(s)}}return e}anylizeType(e){let t=this,r=document.createElement("details"),i=document.createElement("summary"),s=document.createElement("span");s.title=e.type,s.innerText=e.type,i.appendChild(s);let n=document.createElement("input");n.type="checkbox",i.appendChild(n);let a=document.createElement("button");a.innerText=E("rename"),a.addEventListener("click",p=>{let d=window.prompt(E("rename"),s.innerText);d&&(s.innerText=d)}),i.appendChild(a),r.appendChild(i);for(let p=0;p<this.openList.length;p++)if(this.openList[p]==e.type){r.setAttribute("open","open");break}let o=[];this.typeDict[e.type]=e,e.sites&&e.sites.forEach(p=>{let d=document.createElement("div"),u=document.createElement("span");if(u.innerText=p.name,p.name=t.searchName(p.name),d.appendChild(u),d.title=p.url,r.appendChild(d),t.searchUrl(p.url)){d.classList.add("exist");return}let f=document.createElement("input");f.type="checkbox",f.onclick=y=>{if(!f.checked)n.checked=!1;else{let C=!0;for(let j=0;j<o.length;j++)if(!o[j].checked){C=!1;break}C&&(n.checked=!0)}},d.appendChild(f),d.addEventListener("click",y=>{y.target.nodeName.toUpperCase()=="SPAN"&&f.click()});let h=document.createElement("select"),m=document.createElement("option");m.value=0,m.innerText=E("currentType"),h.appendChild(m);for(let y=0;y<c.sitesConfig.length;y++){let C=c.sitesConfig[y];if(C.type!=e.type){let j=document.createElement("option");j.value=C.type,j.innerText=C.type,h.appendChild(j)}}d.appendChild(h),t.siteDict[p.url]=p,o.push(f)}),o.length==0&&(n.style.display="none",a.style.display="none"),n.addEventListener("click",p=>{o.forEach(d=>{d.checked=n.checked})}),this.sitesCon.appendChild(r)}close(){this.openList=[],[].forEach.call(this.sitesCon.querySelectorAll("details"),e=>{e.hasAttribute("open")&&this.openList.push(e.querySelector("summary").innerText)}),this.filterFrame.parentNode&&this.filterFrame.parentNode.removeChild(this.filterFrame)}open(e){this.init();let t=this;this.siteDict={},this.typeDict={},(!this.filterCssEle||!this.filterCssEle.parentNode)&&(this.filterCssEle=Me(this.filterCss)),document.documentElement.appendChild(this.filterFrame),this.sitesCon.innerHTML=ee(""),e.forEach(r=>{t.anylizeType(r)})}}const Qi=new Lr;var Ie,Je,bi,xi,vi,wi,Kt,qt,Gt,Vt;function Pr(l,e){if(!k||!k.bar)return;let t=k.bar.querySelector(".search-jumper-type.search-jumper-open"),r=()=>{if(document.removeEventListener("dragend",vi,!0),document.removeEventListener("dragenter",wi,!0),Je.parentNode&&(Je.parentNode.removeChild(Je),Ie.style.opacity="",Ie.style.transform=""),mt=!1,clearTimeout(Kt),le&&!le.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||k.con.classList.contains("resizePage")){if(t&&!t.classList.contains("search-jumper-open"))if(t.children[0].onmousedown)t.children[0].onmousedown();else{let f=new PointerEvent("mousedown");t.children[0].dispatchEvent(f)}}else k.bar.style.display="none"};if(!qt&&!Gt&&(Vt=(c.prefConfig.zoomDrag||100)/100,qt=Vt*190,Gt=Vt*190),!Ie){let f=`
                    #dragCon {
                      position: fixed;
                      top: 0;
                      left: 0;
                      transform: scale(${Vt});
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
                `,h=Me(f);bi=[],xi=[],Ie=document.createElement("div"),Ie.id="searchJumperWrapper",Ie.innerHTML=ee(`
                <div class="panel"></div>
                <div class="dragLogo">${pi}</div>
                `),qe||Ie.appendChild(h);const m=6,y=10;let C=Ie.querySelector(".panel"),j=360/m,x=360/y,L=-j/2,$=-x/2,T,U=Ie.querySelector(".dragLogo"),z;U.addEventListener("dragover",A=>{A.preventDefault()},!0),U.addEventListener("dragenter",A=>{clearTimeout(z),T&&(T.style.transform=`rotate(${T.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,T.classList.remove("over")),T=null,U.style.transform="scale(1.35)",A.preventDefault(),clearTimeout(Kt),Kt=setTimeout(()=>{r(),k.appendBar(),k.showAllSites()},1e3)},!0);let B=(A,Z,ue)=>{let te=document.createElement("div");te.className=A;let w=document.createElement("div");w.className="sector-inner";let R=document.createElement("span");w.appendChild(R),te.appendChild(w);let V=`rotate(${Z}deg)`;return R.style.transform=ue,te.style.transform=V+(c.prefConfig.hideDragHistory?"scale(1.2)":""),te.dataset.deg=Z,C.appendChild(te),R.addEventListener("dragover",O=>{O.clientX<50?Je.style.left="0px":O.clientX>document.documentElement.clientWidth-50&&(Je.style.left=document.documentElement.clientWidth-(qt<<1)+"px"),O.clientY<50?Je.style.top="0px":O.clientY>document.documentElement.clientHeight-50&&(Je.style.top=document.documentElement.clientHeight-(Gt<<1)+"px"),O.preventDefault()},!0),R.addEventListener("dragenter",O=>{clearTimeout(z),R.innerText&&(T&&(T.style.transform=`rotate(${T.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,T.classList.remove("over")),U.style.transform="",te.style.transform=`scale(${c.prefConfig.hideDragHistory?"1.6":"1.25"}) ${V}`,te.classList.add("over"),T=te,clearTimeout(Kt))},!0),R};for(let A=0;A<m;A++){let Z=B("sector",L+j*A,`translateX(-10px) translateY(-10px) rotate(${L-j*A}deg)`);bi.push(Z)}for(let A=0;A<y;A++){let Z=B("sector out",$+x*A,`translateX(12px) translateY(-15px) rotate(${$-x*A}deg)`);xi.push(Z)}vi=A=>{r()},Ie.addEventListener("click",A=>{r()}),Ie.addEventListener("drop",A=>{A.target===U?(k.setFuncKeyCall(!1),k.showInPage()):T&&(r(),k.searchBySiteName(T.children[0].dataset.name,A),T.style.transform=`rotate(${T.dataset.deg}deg)`,T.classList.remove("over"),T=null),A.preventDefault()});let b,P,D,N;wi=A=>{clearTimeout(z),Ie.contains(A.target)||(z=setTimeout(()=>{r()},300))},Je=document.createElement("div"),Je.id="dragCon",Je.appendChild(Ie)}k.recoveHistory();let i=k.autoGetFirstType(),s=i.querySelectorAll("a.search-jumper-btn:not(.notmatch)"),n=0,a=()=>{let f=null;for(let h=n;h<s.length;h++){let m=s[h];if(m.style.display!=="none"){f=m,n=h+1;break}}return f};const o=(f,h)=>{f.parentNode.dataset.name=h.dataset.name;let m=document.createElement("p");if(m.innerText=h.dataset.name.substr(0,10).trim(),!/^\w+$/.test(m.innerText)){let j="",x=0;for(let L of m.innerText)if(j+=L,/^\w+$/.test(L)?x++:x+=2,x>10){j+="...";break}m.innerText=j}let y=document.createElement("img");y.style.display="none",f.appendChild(y),f.appendChild(m),y.onload=j=>{y.style.display=""};let C=h.querySelector("img");if(C){let j=C.src||C.dataset.src;j&&(y.src=j)}};bi.forEach((f,h)=>{f.innerHTML=ee();let m=a();if(!m){f.parentNode.parentNode.style.filter="contrast(0.5)";return}f.parentNode.parentNode.style.filter="",o(f,m)});let p=0,d;i.classList.contains("search-jumper-needInPage")?d=k.txtHistorySiteBtns:i.classList.contains("search-jumper-targetImg")?d=k.imgHistorySiteBtns:i.classList.contains("search-jumper-targetAudio")?d=k.audioHistorySiteBtns:i.classList.contains("search-jumper-targetVideo")?d=k.videoHistorySiteBtns:(i.classList.contains("search-jumper-targetLink")||i.classList.contains("search-jumper-targetPage"))&&(d=k.linkHistorySiteBtns),d?(d=d.concat(k.historySiteBtns),d=d.filter((f,h,m)=>m.indexOf(f)===h)):d=k.historySiteBtns;let u=()=>{if(c.prefConfig.reuseDragHistory)return a();if(c.prefConfig.hideDragHistory)return!1;let f=null;for(let h=p;h<d.length;h++){let m=d[h];if(m.style.display!=="none"){f=m,p=h+1;break}}return f};xi.forEach((f,h)=>{let m=new DragEvent("dragleave");f.dispatchEvent(m),f.innerHTML=ee(),f.parentNode.parentNode.style.opacity=.6;let y=u();if(!y)return;let C=y.querySelector("img");C&&C.dataset.src&&(C.src=C.dataset.src,delete C.dataset.src),f.parentNode.parentNode.style.opacity=1,o(f,y)}),Je.style.left=l-qt+"px",Je.style.top=e-Gt+"px",Ie.style.opacity="",Ie.style.transform="",setTimeout(()=>{document.addEventListener("dragend",vi,!0),k.addToShadow(Je),setTimeout(()=>{Ie.style.opacity=1,Ie.style.transform="scale(1)"},10),setTimeout(()=>{getComputedStyle(Ie).zIndex!="2147483647"?r():document.addEventListener("dragenter",wi,!0)},100)},0)}var Q,Yt,Bt,ze,gt,Re,At,$t,er,tr,ir,_t,Zt,Xt,rr;function Qt(l,e,t,r,i,s,n,a){if(self.kwFilter=s,self.charset=i,self.hideNotMatch=a,self.match=n,!Q){let p=Me(`
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
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                        transition: all 0.25s ease;
                        border: 0;
                        font-size: initial;
                    }
                    .searchJumperFrame-title {
                        background: #458bd1!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px!important;
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
                        border-radius: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.23);
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
                        margin-bottom: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperFrame-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
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
                        font-size: 16px;
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
                        background-color: black!important;
                        color: #d5d5d5!important;
                      }
                      .searchJumperFrame-inputs>input:focus,
                      .searchJumperFrame-inputs>textarea:focus,
                      .searchJumperFrame-inputs>select:focus,
                      .searchJumperFrame-body select:focus {
                        background-color: #1e1e1e!important;
                      }
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        border: 1px solid rgb(255 255 255 / 36%);
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #245d8f!important;
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
                `);Q=document.createElement("div"),Q.innerHTML=ee(`
                <div class="searchJumperFrame-body">
                    <a href="${Ae}" class="searchJumperFrame-title" target="_blank" draggable="false">
                        <img width="32px" height="32px" src="${ut}" />${E("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-maxBtn">
                        <svg id="maxBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("maxAddSiteBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                        <svg id="minBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("minAddSiteBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                    </div>
                    <div class="searchJumperFrame-inputs">
                        <div class="searchJumperFrame-input-title">${E("siteName")}</div>
                        <input name="siteName" type="text" />
                        <div class="searchJumperFrame-input-title">${E("siteUrl")}</div>
                        <textarea name="url" type="text"></textarea>
                        <svg id="crawlBtn" class="sideIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${E("crawlInfo")}</title><path d="M385 926.3c-11 0-21.4-4.3-29.2-12l-0.6-0.6c-0.7-0.7-65.6-70.4-108.4-112.7-42.8-42.3-118.6-111.4-119.3-112.1l-0.6-0.5c-15.9-15.7-24.6-36.6-24.5-58.8s9-43.1 25-58.6c28.6-27.7 72.2-31 104.6-8.2l90.5 44-83.1-290.1c-4.9-17.1-4.2-34.9 2.1-51.6 6.3-16.6 17.5-30.5 32.5-40.1 22-14.1 47.7-17.7 70.3-10 22.6 7.7 40.7 26.3 49.5 50.9L431 369.8V176.9c0-43.4 35.3-78.7 78.7-78.7 20.7 0 40.2 7.9 55 22.4 14.8 14.4 23.2 33.8 23.7 54.4v0.2l2.4 165.5L625 229.1l0.1-0.4c8.2-23.2 26.2-41.1 49.4-49.3 23.2-8.2 48.5-5.5 69.4 7.3 15.6 9.6 27.7 24.3 33.9 41.6s6.4 36.3 0.6 53.7L736 409.5l42.9-48.6 0.3-0.3c15.7-16.2 34.4-25.7 54.1-27.3 19.8-1.6 39.1 4.7 56 18.1 33 26.4 40.8 60.1 22.7 97.5l-0.5 1.1-0.6 1c-41.8 65.2-107.1 171.9-115.8 199-12.4 38.6-41 140.7-41.3 141.7l-0.2 0.7-34.5 107.2-0.6 1.2c-6.8 14.3-21.5 23.7-37.4 23.8l-295.9 1.6c0 0.1-0.1 0.1-0.2 0.1z"></path></svg>
                        <div class="searchJumperFrame-input-title">${E("siteDesc")}</div>
                        <textarea name="description" type="text"></textarea>
                        <div class="searchJumperFrame-input-title">${E("siteIcon")}</div>
                        <textarea name="icon" type="text"></textarea>
                        <img class="sideIcon" width="27px" height="27px" />
                    </div>
                    <div class="searchJumperFrame-inputs moreItem">
                        <div class="searchJumperFrame-input-title">${E("siteKeywords")}</div>
                        <input name="siteKeywords" placeholder="kw|key" type="text" />
                        <div class="searchJumperFrame-input-title">${E("siteMatch")}</div>
                        <input name="siteMatch" placeholder="(www|m)\\.google\\.com" type="text" />
                        <div class="searchJumperFrame-input-title">${E("openSelect")}</div>
                        <select name="openSelect">
                            <option value="-1">${E("openInDefault")}</option>
                            <option value="true">${E("openInNewTab")}</option>
                            <option value="false">${E("openInCurrent")}</option>
                        </select>
                    </div>
                    <div class="iconsCon"></div>
                    <div class="searchJumperFrame-input-title">${E("siteType")}</div>
                    <select name="typeSelect">
                    </select>
                    <div class="searchJumperFrame-buttons">
                        <button id="test" type="button">${E("siteTest")}</button>
                        <button id="cancel" type="button">${E("siteCancel")}</button>
                        <button id="add" type="button">${E("siteAdd")}</button>
                    </div>
                </div>
                <div class="searchJumperFrame-crawlBody searchJumperFrame-hide">
                    <a href="${Ae}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${ut}" />${E("addAction")}
                    </a>
                    <svg class="searchJumperFrame-closeBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close crawl</title>${zi}</svg>
                    <div class="actionCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="input" type="button" title="${E("emuInputTips")}">${E("inputAction")}</button>
                        <button id="click" type="button" title="${E("emuClickTips")}">${E("clickAction")}</button>
                        <button id="sleep" type="button" title="${E("emuWaitTips")}">${E("sleepAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="copy" type="button" title="${E("emuCopyTips")}">${E("copyAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="record" type="button" title="${E("emuRecordTips")}">${E("recordAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="loop" type="button" title="${E("emuLoopTips")}">${E("loopAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="submitCrawl" type="button" title="${E("emuStopTips")}">${E("submitCrawl")}</button>
                    </div>
                </div>
                `),qe||Q.appendChild(p);let d=Q.children[0];Yt=Q.querySelector("[name='siteName']"),Bt=Q.querySelector("[name='description']"),ze=Q.querySelector("[name='url']"),gt=Q.querySelector("[name='icon']"),Re=Q.querySelector(".searchJumperFrame-inputs>img"),At=Q.querySelector(".iconsCon"),er=Q.querySelector("#test"),tr=Q.querySelector("#cancel"),ir=Q.querySelector("#add"),$t=Q.querySelector("select[name='typeSelect']"),_t=Q.querySelector("[name='siteKeywords']"),Zt=Q.querySelector("[name='siteMatch']"),Xt=Q.querySelector("select[name='openSelect']");let u=Q.querySelector(".searchJumperFrame-title"),f,h,m=!1,y=I=>{m||(Q.classList.add("draging"),m=!0);let v=I.clientX-f.x+h.x,g=I.clientY-f.y+h.y;d.style.marginLeft=v+"px",d.style.marginTop=g+"px"},C=I=>{I.preventDefault(),I.stopPropagation(),Q.classList.remove("draging"),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",C)};u.addEventListener("mousedown",I=>{I.preventDefault(),I.stopPropagation(),m=!1,f={x:I.clientX,y:I.clientY};let v=getComputedStyle(d);h={x:parseInt(v.marginLeft||0),y:parseInt(v.marginTop||0)},document.addEventListener("mousemove",y),document.addEventListener("mouseup",C)}),Re.onload=I=>{Re.style.display=""},Q.querySelector("#maxBtn").addEventListener("click",I=>{Q.classList.add("maxContent")}),Q.querySelector("#minBtn").addEventListener("click",I=>{Q.classList.remove("maxContent")});for(let I=0;I<c.sitesConfig.length;I++){let v=c.sitesConfig[I],g=document.createElement("option");g.value=I,ci!==""&&ci==I&&(g.selected="selected"),g.innerText=v.type,$t.appendChild(g)}er.addEventListener("click",I=>{if(/#p{/.test(ze.value)){let v=ze.value.match(/#p{(.*)}/);if(!v)return;let g=[];v[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(S=>{if(S=S.trim(),/^loopStart\(\d+\)$/.test(S)){let W=S.match(/loopStart\((.*)\)/);g.push(["@loopStart",W[1]])}else if(S=="loopEnd")g.push(["@loopEnd",""]);else if(S.startsWith("click(")&&S.endsWith(")")){let W=S.slice(6,S.length-1);W&&g.push(["@click",W.replace(/\\([\=&])/g,"$1").trim()])}else if(S.startsWith("dblclick(")&&S.endsWith(")")){let W=S.slice(9,S.length-1);W&&g.push(["@dblclick",W.replace(/\\([\=&])/g,"$1").trim()])}else if(S.startsWith("rclick(")&&S.endsWith(")")){let W=S.slice(7,S.length-1);W&&g.push(["@rclick",W.replace(/\\([\=&])/g,"$1").trim()])}else if(S.startsWith("copy(")&&S.endsWith(")")){let W=S.slice(5,S.length-1);W&&g.push(["@copy",W.replace(/\\([\=&])/g,"$1").trim()])}else if(S.startsWith("call(")&&S.endsWith(")")){let W=S.slice(5,S.length-1);W&&g.push(["@call",W.replace(/\\([\=&])/g,"$1").trim()])}else if(S.startsWith("wait(")&&S.endsWith(")")){let W=S.slice(5,S.length-1);g.push(["@wait",W.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(S)){let W=S.match(/sleep\((.*)\)/);W&&g.push(["@sleep",W[1]])}else if(/^reload\(\d?\)$/.test(S)){let W=S.match(/reload\((.*)\)/);g.push(["@reload",W[1]])}else{S=S.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let W=S.split("SJ^PARAM");if(W.length===2){let H=W[0],K=W[1].replace(/\\([\=&])/g,"$1");g.push([H,K])}else(S.endsWith(".click()")||S.endsWith(".click"))&&g.push(["@"+S.replace(/\.click(\(\))?$/,""),"click"])}}),Ve=g,k.submitAction(g)}else/[:%]p{/.test(ze.value)||i&&i.toLowerCase()!="utf-8"?fi(i,ze.value.replace(/%se?\b/g,"searchJumper"),"_blank"):ge(ze.value.replace(/%se?\b/g,"searchJumper"),{active:!0,insert:!0})}),tr.addEventListener("click",I=>{Q.parentNode&&Q.parentNode.removeChild(Q)}),ir.addEventListener("click",I=>{Te||Dt(()=>{let v=null;for(let g=0;g<c.sitesConfig.length;g++){let S=c.sitesConfig[g];for(let W=0;W<S.sites.length;W++){let H=S.sites[W];if(H.url==ze.value){if(g==parseInt($t.value)){alert("Already added!");return}if(window.confirm(E("siteExist")))v={name:H.name+" - "+S.type,url:`["${H.name}"]`};else return}}}v==null&&(v={name:Yt.value,url:ze.value},gt.value&&gt.value!=ze.value.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")&&(v.icon=gt.value),Bt.value&&Bt.value!=Yt.value&&(v.description=Bt.value),_t.value&&(v.keywords=_t.value),Zt.value&&(v.match=Zt.value),Xt.value&&Xt.value!="-1"&&(v.openInNewTab=Xt.value==="true"),self.charset&&i.toLowerCase()!="utf-8"&&(v.charset=self.charset),self.kwFilter&&(v.kwFilter=self.kwFilter),self.match&&(v.match=self.match),self.hideNotMatch&&(v.hideNotMatch=self.hideNotMatch)),c.sitesConfig[$t.value].sites.push(v),c.lastModified=new Date().getTime(),q.setItem("lastAddType",$t.value),q.setItem("searchData",c),Ce(E("siteAddOver")),Q.parentNode&&Q.parentNode.removeChild(Q),window.postMessage({searchData:c,version:pt.script.version||0,command:"loadConfig"},"*"),k.refreshEngines()})}),rr=Q.querySelector("#crawlBtn");let L=Q.querySelector(".searchJumperFrame-closeBtn"),$=Q.querySelector(".actionCon"),T=Q.querySelector("#input"),U=Q.querySelector("#click"),z=Q.querySelector("#sleep"),B=Q.querySelector("#copy"),b=Q.querySelector("#submitCrawl"),P=Q.querySelector("#record"),D=Q.querySelector("#loop"),N,A=(I,v="",g="")=>{let S=document.createElement("div"),W=I;switch(I){case"input":W=E("inputOutput",[v,g]);break;case"click":W=E("clickOutput",v);break;case"dblclick":W=E("dblclickOutput",v);break;case"rclick":W=E("rclickOutput",v);break;case"copy":W=E("copyOutput",v);break;case"loopStart":W=E("loopStart",g);break;case"loopEnd":W=E("loopEnd");break;case"sleep":W=E("sleepOutput",g);break;default:break}W&&(S.innerHTML=ee(W),S.dataset.type=I,S.dataset.sel=v,S.dataset.val=g,S.draggable="true",S.ondragover=H=>{H.preventDefault()},S.ondragstart=H=>{N=S},S.ondrop=H=>{$.insertBefore(N,S)},S.onclick=H=>{let K=H.target;if(K.nodeName.toUpperCase()=="SPAN")if(K.className=="element")ke.getSelector(F=>{K.innerText=F,K.title=F,Q.style.display="",S.dataset.sel=F}),Q.style.display="none";else{let F=prompt(E("inputNewValue"),K.innerText);F&&(K.innerText=F,K.title=F,S.dataset.val=F)}else confirm(E("deleteConfirm"))&&$.removeChild(S)},S.oncontextmenu=H=>{let K=H.target;if(K.nodeName.toUpperCase()=="SPAN")if(H.preventDefault(),K.className=="element"){let F=prompt("Selector",K.innerText);F&&(K.innerText=F,K.title=F,S.dataset.sel=F)}else{let F=prompt(E("inputNewValue"),K.innerText);F&&(K.innerText=F,K.title=F,S.dataset.val=F)}},$.appendChild(S))},Z=()=>{$.innerHTML=ee();let I=ze.value.match(/#p{(.*)}/);I&&I[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(v=>{if(v=v.trim(),/^loopStart\(\d+\)$/.test(v)){let g=v.match(/loopStart\((.*)\)/);A("loopStart","",g[1])}else if(v=="loopEnd")A("loopEnd");else if(v.startsWith("click(")&&v.endsWith(")")){let g=v.slice(6,v.length-1);g&&A("click",g.replace(/\\([\=&])/g,"$1").trim())}else if(v.startsWith("dblclick(")&&v.endsWith(")")){let g=v.slice(9,v.length-1);g&&A("dblclick",g.replace(/\\([\=&])/g,"$1").trim())}else if(v.startsWith("rclick(")&&v.endsWith(")")){let g=v.slice(7,v.length-1);g&&A("rclick",g.replace(/\\([\=&])/g,"$1").trim())}else if(v.startsWith("copy(")&&v.endsWith(")")){let g=v.slice(5,v.length-1);g&&A("copy",g.replace(/\\([\=&])/g,"$1").trim())}else if(v.startsWith("call(")&&v.endsWith(")")){let g=v.slice(5,v.length-1);g&&A("call","",g.replace(/\\([\=&])/g,"$1").trim())}else if(v.startsWith("wait(")&&v.endsWith(")")){let g=v.slice(5,v.length-1);g&&A("wait","",g.replace(/\\([\=&])/g,"$1").trim())}else if(v.startsWith("open(")&&v.endsWith(")")){let g=v.slice(5,v.length-1);g&&A("open","",g.replace(/\\([\=&])/g,"$1").trim())}else if(/^sleep\(\d+\)$/.test(v)){let g=v.match(/sleep\((.*)\)/);g&&A("sleep","",g[1])}else if(/^reload\(\d?\)$/.test(v)){let g=v.match(/reload\((.*)\)/);A("reload","",g[1])}else{v=v.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let g=v.split("SJ^PARAM");g.length===2?A("input",g[0],g[1].replace(/\\([\=&])/g,"$1")):(v.endsWith(".click()")||v.endsWith(".click"))&&A("click",v.replace(/\.click(\(\))?$/,""))}})},ue=()=>{let I=[];return[].forEach.call($.children,v=>{if(!v)return;let g=v.dataset.sel,S=v.dataset.val||"";switch(v.dataset.type){case"click":I.push(`click(${g.replace(/([=&])/g,"\\$1")})`);break;case"dblclick":I.push(`dblclick(${g.replace(/([=&])/g,"\\$1")})`);break;case"rclick":I.push(`rclick(${g.replace(/([=&])/g,"\\$1")})`);break;case"copy":I.push(`copy(${g.replace(/([=&])/g,"\\$1")})`);break;case"input":I.push(`${g.replace(/([=&])/g,"\\$1")}=${S}`);break;case"sleep":I.push(`sleep(${S})`);break;case"loopEnd":I.push("loopEnd");break;default:I.push(`${v.dataset.type}(${S.replace(/([=&])/g,"\\$1")})`);break}}),I.join("&")};rr.addEventListener("click",I=>{Z(),Q.classList.add("crawling")}),L.addEventListener("click",I=>{Q.classList.remove("crawling")});let te,w,R=I=>{Q.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(I.target.nodeName)||(clearTimeout(w),w=setTimeout(()=>{A("click",ke.geneSelector(I.target,!0))},300)))},V=I=>{Q.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(I.target.nodeName)||(clearTimeout(w),A("dblclick",ke.geneSelector(I.target,!0))))},O=I=>{Q.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(I.target.nodeName)||(I.preventDefault(),clearTimeout(w),A("rclick",ke.geneSelector(I.target,!0))))},ie=I=>{Q.style.display!==""&&A("input",ke.geneSelector(I.target,!0),I.target.value)},ne=I=>{if(Q.style.display==="")return;let v=!1;I.keyCode==27?v=!0:I.keyCode==13&&(I.preventDefault(),I.stopPropagation(),I.target&&I.target.blur&&I.target.blur(),v=!0),v&&(Q.style.display="",document.removeEventListener("keydown",ne,!0),document.removeEventListener("click",R),document.removeEventListener("dblclick",V),document.removeEventListener("contextmenu",O),document.removeEventListener("change",ie))};P.addEventListener("click",I=>{alert(E("startRecord")),Q.style.display="none",setTimeout(()=>{document.addEventListener("keydown",ne,!0),document.addEventListener("click",R),document.addEventListener("dblclick",V),document.addEventListener("contextmenu",O),document.addEventListener("change",ie)},100)});let J=!1;D.addEventListener("click",I=>{if(J)A("loopEnd"),D.innerText=E("loopAction");else{let v=prompt(E("loopTimes"),1);if(!v)return;A("loopStart","",v||"1"),D.innerText=E("loopActionEnd")}J=!J}),T.addEventListener("click",I=>{ke.getSelector(v=>{A("input",v,"%s"),Q.style.display=""},!J),Q.style.display="none"}),B.addEventListener("click",I=>{ke.getSelector(v=>{A("copy",v,"%s"),Q.style.display=""},!J),Q.style.display="none"}),U.addEventListener("dblclick",I=>{clearTimeout(w),I.preventDefault(),I.stopPropagation(),ke.getSelector(v=>{A("dblclick",v),Q.style.display=""},!J),Q.style.display="none"}),U.addEventListener("contextmenu",I=>{clearTimeout(w),I.preventDefault(),I.stopPropagation(),ke.getSelector(v=>{A("rclick",v),Q.style.display=""},!J),Q.style.display="none"}),U.addEventListener("click",I=>{clearTimeout(w),w=setTimeout(()=>{ke.getSelector(v=>{A("click",v),Q.style.display=""},!J),Q.style.display="none"},250)}),z.addEventListener("click",I=>{let v=prompt(E("sleepPrompt"),1e3);v=v&&parseInt(v),v&&A("sleep","",v)}),b.addEventListener("click",I=>{let v=ue();v&&(ze.value=location.href+"#p{"+v+"}"),Q.classList.remove("crawling")})}k.addToShadow(Q),_t.value="",Zt.value="",Yt.value=l||"",Bt.value=e||"",ze.value=t||"",r&&r[0]?(Re.style.display="",t.indexOf(location.origin)===0?(Re.onerror=o=>{Re.onerror=null,gt.value=r[0],Re.src=r[0]},Re.src=location.origin+"/favicon.ico"):(gt.value=r[0],Re.src=r[0])):(Re.style.display="none",Re.src=(/^(showTips:)?https?:/.test(t)?t.split(`
`)[0].replace(/\?.*/,"").replace(/^(showTips:)?(https?:\/\/[^\/]+).*/,"$2"):location.origin)+"/favicon.ico"),At.innerHTML=ee(),r&&r.length>1?(At.style.opacity="",r.forEach(o=>{let p=document.createElement("img");p.src=o,p.addEventListener("click",d=>{gt.value=o,Re.src=o}),p.onload=d=>{p.title=p.naturalWidth+" x "+p.naturalHeight+`
`+o.replace(/.*\/([^\/]+)/,"$1")},At.appendChild(p)})):At.style.opacity=0}function Mr(){let l=document.createElement("a");l.download="searchJumperCache.json",l.target="_blank";let e=[JSON.stringify({sortTypeNames:Le,cacheIcon:be,sortSiteNames:Pe},null,4)],t=new Blob(e,{type:"application/json"});l.href=window.URL.createObjectURL(t),l.click()}function Nr(l){l.cacheIcon&&(be=l.cacheIcon,q.setItem("cacheIcon",be),He=[],c.prefConfig.cacheSwitch=!0,q.setItem("searchData",c)),l.sortTypeNames&&(Le=l.sortTypeNames,q.setItem("sortTypeNames",Le)),l.sortSiteNames&&(Pe=l.sortSiteNames,q.setItem("sortSiteNames",Pe))}function sr(l,e){Be({method:"GET",url:l,headers:{referer:l,origin:l},onload:t=>{let r=t&&t.responseXML&&t.responseXML.querySelector('Url[type="text/html"]');if(!r){e("error",t);return}let i=t.responseXML.querySelector("ShortName"),s=t.responseXML.querySelector("Description"),n=t.responseXML.querySelector("Image"),a=t.responseXML.querySelector("InputEncoding"),o=r.querySelectorAll("Param"),p=i&&i.textContent,d=s&&s.textContent,u=r.getAttribute("template"),f=n&&n.textContent,h=a&&a.textContent;if(o.length>0){let m=[];[].forEach.call(o,y=>{m.push(`${y.getAttribute("name")}=${y.getAttribute("value")}`)}),u+=`%p{${m.join("&")}}`}Qt(p,d,u.replace(/{searchTerms\??}/g,"%s").replace(/{startPage\??}/g,"1").replace(/{count\??}/g,"10").replace(/{startIndex\??}/g,"1").replace(/{startPage\??}/g,"1").replace(/{language\??}/g,"*").replace(/{inputEncoding\??}/g,"UTF-8").replace(/{outputEncoding\??}/g,"UTF-8"),[f],h),e("load",t)},onerror:t=>{e("error",t)},ontimeout:t=>{e("error",t)}})}function Br(){if(location.hostname!=="mycroftproject.com")return;Me(`
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
            `);let l=()=>{let t=document.querySelectorAll("img.icon~a[href^='/install']");if(t.length<=0)return;let r=!1;[].forEach.call(t,i=>{if(i.previousElementSibling&&i.previousElementSibling.classList.contains("searchJumperIcon")||i.previousElementSibling&&i.previousElementSibling.previousElementSibling&&i.previousElementSibling.previousElementSibling.classList.contains("searchJumperIcon"))return;let s=i.href.match(/\?id=(\d+)&basename=(.+?)&/);if(s===null)return;let n=document.createElement("img");n.className="icon searchJumperIcon",n.style.cssText="border: 1px solid #4c4c4c; border-radius: 9px; box-sizing: border-box; margin-right: 4px; cursor: pointer;",n.title="Add to SearchJumper",n.src=ut,i.parentNode.insertBefore(n,i),n.onclick=a=>{r||(r=!0,n.classList.add("searchJumper-loading"),sr(`https://mycroftproject.com/installos.php/${s[1]}/${s[2]}.xml`,(o,p)=>{r=!1,n.classList.remove("searchJumper-loading"),o!="load"&&Ce(p.statusText||p.error)}))}})};l();let e=setInterval(()=>{l()},1e3);window.addEventListener("load",t=>{clearInterval(e),l()})}function Ar(){k=new yr}function $r(){if(et){if(k.appendBar(),k.showAllSites(),setTimeout(()=>{k.con.style.zIndex=0},5),location.hash){let l=location.hash.slice(1);try{l=decodeURIComponent(l)}catch{}k.searchJumperInputKeyWords.value=l}else if(location.search){let l=location.search.slice(1).split("&"),e,t,r;l.forEach(i=>{let s=i.split("="),n=s[0],a=s[1];try{a=decodeURIComponent(a)}catch{}switch(n){case"kw":e=a;break;case"engine":t=a;break;case"self":r=a;break}}),e&&(k.searchJumperInputKeyWords.value=e||""),t&&k.searchBySiteName(t,{},!!r)}if(_(document).style.cssText=`
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
                `,c.prefConfig.bgUrl&&(Ze=c.prefConfig.bgUrl,Ze.length)){_(document).style.backgroundImage=`url("${Ze}")`;return}q.getItem("allPageBg",l=>{l?(Ze=l.url,_(document).style.backgroundImage=`url("${l.base64||Ze}")`):l={url:""},Be({method:"GET",url:"https://global.bing.com/HPImageArchive.aspx?format=js&idx=0&pid=hp&video=1&n=1",onload:function(e){var t=null;try{t=JSON.parse(e.responseText);var r=t.images[0].url;if(/^https?:\/\//.test(r)||(r="https://global.bing.com"+r),Ze=r,r==l.url)return;Be({method:"GET",url:r,responseType:"blob",onload:function(i){var s=i.response,n=new FileReader;n.readAsDataURL(s),n.onload=function(a){var o=a.target.result;l={url:r,base64:o},q.setItem("allPageBg",l)}}}),l.base64||(_(document).style.backgroundImage=`url("${r}")`)}catch(i){console.log(i)}}})})}}async function Wr(){await k.initRun(),kr(),$r()}async function $e(l){await new Promise(e=>{setTimeout(()=>{e()},l)})}async function Dr(){let l=await new Promise(e=>{q.getItem("searchData",t=>{e(t)})});Ee=await new Promise(e=>{q.getItem("cacheKeywords",t=>{e(t||"")})}),xt=await new Promise(e=>{q.getItem("cacheFilter",t=>{e(t||"")})}),li=await new Promise(e=>{q.getItem("disableState",t=>{e(t||!1)})}),tt=await new Promise(e=>{q.getItem("tipsStorage",t=>{e(t||[])})}),Tt=await new Promise(e=>{q.getItem("lastSign",t=>{e(t||!1)})}),q.setItem("lastSign",!1),Ve=await q.getListItem("inPagePostParams",location.hostname),be=await new Promise(e=>{q.getItem("cacheIcon",t=>{e(t||{})})}),Ye=await new Promise(e=>{q.getItem("historySites",t=>{e(t||[])})}),kt=await new Promise(e=>{q.getItem("historyType",t=>{e(t||"")})}),Le=await new Promise(e=>{q.getItem("sortTypeNames",t=>{e(t||{})})}),Pe=await new Promise(e=>{q.getItem("sortSiteNames",t=>{e(t||{})})}),Ne=await new Promise(e=>{q.getItem("globalInPageWords",t=>{e(t||"")})}),_e=await new Promise(e=>{q.getItem("navEnable",t=>{e(typeof t>"u"?!0:t)})}),Ht=await new Promise(e=>{q.getItem("referrer",t=>{e(t||"")})}),zt=await new Promise(e=>{q.getItem("disableHighlight",t=>{e(t||"")})}),Ji=await new Promise(e=>{q.getItem("lastHighlight",t=>{e(t||"")})}),Hi=await new Promise(e=>{q.getItem("allPageNewMode",t=>{e(t||!1)})}),ci=await new Promise(e=>{q.getItem("lastAddType",t=>{e(t||"")})}),l&&(c=l,jt=c.lastModified),c.lastModified||(c.sitesConfig=sitesConfig),c.prefConfig.lang&&c.prefConfig.lang!="0"&&(Ue=c.prefConfig.lang),Ai(),c.prefConfig.firstRun&&q.supportCrossSave()&&(c.prefConfig.firstRun=!1,q.setItem("searchData",c),setTimeout(()=>{q.getItem("searchData",e=>{e.prefConfig.firstRun===!1&&ge(Ni,{active:!0,insert:!0})})},100)),typeof c.prefConfig.customSize>"u"&&(c.prefConfig.customSize=100),typeof c.prefConfig.tilesZoom>"u"&&(c.prefConfig.tilesZoom=100),typeof c.prefConfig.tipsZoom>"u"&&(c.prefConfig.tipsZoom=100),typeof c.prefConfig.typeOpenTime>"u"&&(c.prefConfig.typeOpenTime=250),typeof c.prefConfig.longPressTime>"u"&&(c.prefConfig.longPressTime=500),typeof c.prefConfig.cacheSwitch>"u"&&(c.prefConfig.cacheSwitch=!1),typeof c.prefConfig.noIcons>"u"&&(c.prefConfig.noIcons=!1),typeof c.prefConfig.noAni>"u"&&(c.prefConfig.noAni=!1),typeof c.prefConfig.quickAddRule>"u"&&(c.prefConfig.quickAddRule=!0),typeof c.prefConfig.multiline>"u"&&(c.prefConfig.multiline=2),typeof c.prefConfig.multilineGap>"u"&&(c.prefConfig.multilineGap=1e3),typeof c.prefConfig.historyLength>"u"&&(c.prefConfig.historyLength=0),typeof c.prefConfig.dragToSearch>"u"&&(c.prefConfig.dragToSearch=!0),typeof c.prefConfig.firstFiveWordsColor>"u"&&(c.prefConfig.firstFiveWordsColor=[]),typeof c.prefConfig.inPageWordsStyles>"u"&&(c.prefConfig.inPageWordsStyles=[]),typeof c.prefConfig.rightMouse>"u"&&(c.prefConfig.rightMouse=!0),typeof c.prefConfig.mouseLeaveToHide>"u"&&(c.prefConfig.mouseLeaveToHide=!0),typeof c.prefConfig.currentTypeFirst>"u"&&(c.prefConfig.currentTypeFirst=!0),typeof c.prefConfig.disableAddon>"u"&&(c.prefConfig.disableAddon={}),typeof c.prefConfig.suggestType>"u"&&(Ue==="zh-CN"?c.prefConfig.suggestType="baidu":c.prefConfig.suggestType="google"),typeof c.prefConfig.syncBuild>"u"&&(c.prefConfig.syncBuild=!0),c.prefConfig.minSizeMode&&(c.prefConfig.disableAutoOpen=!1,c.prefConfig.disableTypeOpen=!1),c.prefConfig.configPage?Ae=c.prefConfig.configPage:c.prefConfig.configPage=Ae}function ei(l,e){return l==="*"||l.length==0&&e.length==0?!0:l.length>1&&l[0]=="*"&&e.length==0?!1:l.length>1&&l[0]=="?"||l.length!=0&&e.length!=0&&l[0]==e[0]?ei(l.substring(1),e.substring(1)):l.length>0&&l[0]=="*"?ei(l.substring(1),e)||ei(l,e.substring(1)):!1}if(de.indexOf("#searchJumperMin")!=-1)if(Ri=!0,de.indexOf("#searchJumperMinPost")!=-1)window.history.replaceState(null,"",de.replace(/#searchJumperMin(Post)?/,""));else{if(de.indexOf("#searchJumperMinMobile")!=-1){Object.defineProperty(Object.getPrototypeOf(navigator),"userAgent",{get:function(){return Mi}}),Be({method:"GET",url:location.href,headers:{referer:location.href,"User-Agent":Mi},onload:function(l){document.open(),document.write(l.response),document.close()},onerror:function(){},ontimeout:function(){}});return}window.history.replaceState(null,"",location.href.replace(/#searchJumperMin(Mobile)?/,""))}if(document.title=="SearchJumper Multi")return;var ar=!1,Si,Ci,yt;async function Ti(l){if(ar){l&&l();return}if(ar=!0,Ir(),await Dr(),!li){if(c.prefConfig.blacklist&&c.prefConfig.blacklist.length>0){let e=!1;for(let t=0;t<c.prefConfig.blacklist.length;t++){let r=c.prefConfig.blacklist[t];if(r&&r.indexOf("//")!=0){if(e){/\*\/$/.test(r)&&(e=!1);continue}if(r.indexOf("/*")==0){e=!0;continue}if(r.indexOf("/")==0){let i=r.match(/^\/(.*)\/(\w*)$/);if(i&&new RegExp(i[1],i[2]).test(de))return}else if(ei(r,de))return}}}Ar(),await Er(),Br(),Wr(),l&&l(),yt=document.title}}function Jr(){if(document.hidden){if(k)k.closeShowAll();else return;if(!c.prefConfig.globalSearchNow)return;Si=setInterval(async()=>{let l=Ne;Ne=await q.getItem("globalInPageWords"),(l||"")!=(Ne||"")&&(k.refreshPageWords(),k.navMarks.innerHTML&&(clearInterval(Si),clearInterval(Ci),yt=document.title,Ci=setInterval(()=>{document.title=document.title==yt?"\u{1F6A9}":yt},500)))},parseInt(500+Math.random()*500));return}Ti(async()=>{(at||c.prefConfig.syncBuild)&&(c=await q.getItem("searchData"),k&&c.lastModified&&jt!=c.lastModified&&(k.refreshEngines(),document.dispatchEvent(new Event("dataChanged"))));let l=Ne||"";q.getItem("globalInPageWords",t=>{Ne=t||"",l!=Ne&&k&&k.refreshPageWords()});let e=_e||!1;q.getItem("navEnable",t=>{_e=typeof t>"u"?!0:t,e!=_e&&k&&k.refreshNav()})})}var ki=!1;function Hr(){!document.head||!_(document)||St||li||(c.prefConfig.globalSearchNow&&(clearInterval(Si),clearInterval(Ci),document.hidden?yt=document.title:yt&&(document.title=yt)),!ki&&(ki=!0,setTimeout(()=>{Jr(),ki=!1},500)))}q.getItem("postUrl",l=>{if(l&&l[0].indexOf(location.hostname.replace(/.*\.(\w+\.\w+)/,"$1"))!=-1)q.setItem("postUrl",""),fi(l[1],l[0],"_self");else{if(document.head&&_(document))Ti();else{let e=()=>{document.head&&_(document)?Ti():setTimeout(()=>{e()},10)};e()}document.addEventListener("visibilitychange",Hr)}})}if(document&&document.documentElement)Bi();else{let Ue=()=>{document&&document.documentElement?Bi():setTimeout(()=>{Ue()},10)};Ue()}})();
