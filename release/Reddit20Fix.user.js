// ==UserScript==
// @name         Reddit Fix
// @namespace    http://tampermonkey.net/
// @version      1.9.8
// @author       Bum
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @match        https://www.reddit.com/*
// @match        https://new.reddit.com/*
// @grant        GM_addStyle
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reddit20Fix.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reddit20Fix.meta.js
// ==/UserScript==
var holdTopicsInMemory="false",commentEffects="false",originalBehavior="false",topicLimitInDom=70,lastScrollTop=0,scrollTopWhenREmoved=-1,menuButtonWasAdded=!1,subsToHide="",removeBorderRadius=!1,hideRecentSection=!1,customFeedState="open",hidePromotedlinks=!0,lastTopicRemovedTime=new Date().getTime();localStorage.getItem("removeBorderRadius")!=null&&(removeBorderRadius=localStorage.getItem("removeBorderRadius")),localStorage.getItem("holdTopicsInMemory")!=null&&(holdTopicsInMemory=localStorage.getItem("holdTopicsInMemory")),localStorage.getItem("commentEffects")!=null&&(commentEffects=localStorage.getItem("commentEffects")),localStorage.getItem("originalBehavior")!=null&&(originalBehavior=localStorage.getItem("originalBehavior")),localStorage.getItem("subsToHide")!=null&&(subsToHide=localStorage.getItem("subsToHide")),localStorage.getItem("hidePromotedlinks")!=null&&(hidePromotedlinks=localStorage.getItem("hidePromotedlinks")),localStorage.getItem("hideRecentSection")!=null&&(hideRecentSection=localStorage.getItem("hideRecentSection")),localStorage.getItem("customFeedState")!=null&&(customFeedState=localStorage.getItem("customFeedState"));var topicsInMemory=[],isAPop=!1,maxOffset=0;(function(){"use strict";function n(o){const t=(document.getElementById("GM_addStyle")||function(){const a=document.createElement("style");return a.type="text/css",a.id="GM_addStyle",document.head.appendChild(a),a}()).sheet;t.insertRule(o,(t.rules||t.cssRules||[]).length)}function p(o){const t=(document.getElementById("GM_addStyle")||function(){const r=document.createElement("style");return r.type="text/css",r.id="GM_addStyle",document.head.appendChild(r),r}()).sheet;for(var a=0;a<t.cssRules.length;a++)t.cssRules[a].selectorText==o&&t.deleteRule(a)}h(removeBorderRadius),f(hideRecentSection),m(hidePromotedlinks),l(),commentEffects=="false"&&(n('img[src*="flame"]{display:none;}'),n('div[aria-role="presentation"]{box-shadow:none !important;background : transparent !important;}')),n(".wwHbgRV0ZXGp5CHHlpo5u{display:block !important;}"),n("._1Q2mF3u7v9hBVu_4bkC7R4{display:block !important;}"),n("._3hUbl08LBz2mbXjy0iYhOS,._3b8u2OJXaSDdBWoRB7zUoK {height: 50px !important;width: 100% !important; bottom: 0 !important;}"),n("._3UEq__yL-82zX4EyuluREz,.gUpEQXQu8G8UvISmBIPsj,._1RZSSlyqzokrcxh0ESwE2e{display:none !important;}"),n(".vLH0XV-l8Y4mNGUvw4HHy{display:none !important;}"),n(".eI6Ep6BNFA5DZjPWNVb4,._2XQ3ZY6qCbEm9_WtvLLFru{display:none !important;}"),n(".fixmodal {position:fixed;background-color:rgba(0, 0, 0, 0.5);height:100%;width:100%;top:0;left:0;display:none; z-index: 1000;}"),n("#fixPopup {padding:5px;text-align:center;}"),n(".fixmodalWrap {margin: 50px auto; position:relative;width: fit-content;} ");var v=window.screen.height-200;n("#fixPopup img {max-height:"+v+"px;}"),n("._2f5uYHvlfzs2DngQsiCdvB {height: 50px !important;width: 100% !important; position: relative !important; bottom: 50px !important;}"),n('.videoFixIcon {margin: 50px auto; background: url("https://www.pngall.com/white-play-png")} '),n(".expandDivCaption {padding: 5px!important; white-space: pre-wrap !important;max-height: max-content !important; display: inline-block !important; overflow-wrap: break-word !important;} "),n(".expandSpanCaption{height: auto !important; position: absolute !important; bottom: 0;} "),n(".expandDisableClick{pointer-events: none; } "),n(".expandEnableClick{pointer-events: auto; !important; } "),n(".expandGarbageRedditCaptions{position:relative !important; } "),window.addEventListener("scroll",B(T,300));function B(o,i){var t=Date.now();return function(){t+i-Date.now()<0&&(o(),t=Date.now())}}function b(o,i){return'<a class="M2Hk_S2yvXpsNPfZMBMur customRedditFixMenu" id = "'+o+'" ><div class="_1lwNBHmCQJObvqs1fXKSYR" style="margin-right: 0px;">'+i+"</div></a>"}function s(o,i,t){return o=="true"||o==!0?'  <span style="width: 100%;"><input type="checkbox" checked id="'+i+'" name="'+t+'" /> '+t+"</span>":'<span style="width: 100%;"><input type="checkbox" id="'+i+'" name="'+t+'" /> '+t+"</span>"}function C(){$("#redditFixReloadAll").remove(),$("#redditFixReload25").remove()}function x(){var o=$("._2pUO1Sfe7WlIHvq6goN3Pz");o.find(".customRedditFixMenu").length>0||(o.append(b("redditFixReloadAll","Reload All")),$("#redditFixReloadAll").click(function(){for(var i=topicsInMemory.length-1;i>=0;--i){var t=topicsInMemory.pop(i);$(".rpBJOHq2PR60pnwJlUyP0").prepend(t)}maxOffset=$(document).height()}),o.append(b("redditFixReload25","Reload 25")),$("#redditFixReload25").click(function(){var i=topicsInMemory.length;i>25&&(i=25);for(var t=0;t<25;++t){var a=topicsInMemory.pop(t);$(".rpBJOHq2PR60pnwJlUyP0").prepend(a)}maxOffset=$(document).height()}))}function k(){if(!($('[aria-controls="multireddits_section"]').length>0)){setTimeout(k,300);return}let i=$('[aria-controls="multireddits_section"]').closest("faceplate-expandable-section-helper");i.bind("click",function(){$(this).is("[open]")?(customFeedState="open",localStorage.setItem("customFeedState","open")):(localStorage.setItem("customFeedState",""),customFeedState="")}),customFeedState==""&&i.removeAttr("open")}function u(){if(!($(".subgrid-container").length>0)||$(".observerIsAttached").length==1){setTimeout(u,300);return}l(),$(".subgrid-container").addClass("observerIsAttached");var i={attributes:!1,childList:!0,subtree:!0},t=$(".subgrid-container").first().get(0),a={attributes:!1,childList:!0,subtree:!0},r=function(P,U){for(var E of P)E.addedNodes.forEach(function(H){$(H).find("article.w-full")&&l()})},g=new MutationObserver(r);g.observe(t,i)}function y(){$(".fixmodal").fadeOut("fast"),document.removeEventListener("click",y)}function _(){u()}let S=location.href;setInterval(()=>{location.href!==S&&(S=location.href,_())},500),$(document).on("mousedown","._15nNdGlBIgryHV04IfAfpA",function(o){return $(this).parent().toggleClass("expandSpanCaption"),$(this).toggleClass("expandDivCaption"),$(".DraftEditor-root").length>0&&$(this).parent().toggleClass("expandGarbageRedditCaptions"),o.stopPropagation(),o.preventDefault(),o.cancelBubble=!0,o.stopImmediatePropagation(),!1});var w=!1;$("img").on("keyup keydown",function(o){w=o.ctrlKey}),$("img").on("click",function(){if(w)return e.stopPropagation(),e.preventDefault(),e.cancelBubble=!0,e.stopImmediatePropagation(),!1}),$(document).on("mousedown","._3b8u2OJXaSDdBWoRB7zUoK,._3hUbl08LBz2mbXjy0iYhOS,._2f5uYHvlfzs2DngQsiCdvB",function(o){$(".fixmodal").fadeIn("fast"),$("#fixPopup img").remove(),$("#fixPopup iframe").remove();var i=$(this).parent().find("iframe");if(i.length>0){var t=i.clone();t.appendTo("#fixPopup"),t.css({width:"800px","max-height":v+"px"})}else{var a=$(this).parent().find("img").attr("src");$('<img src="'+a+'" alt="image3" />').appendTo("#fixPopup")}return setTimeout(()=>{document.addEventListener("click",y)},100),o.stopPropagation(),o.preventDefault(),o.cancelBubble=!0,o.stopImmediatePropagation(),!1}),u(),k();function T(){if(originalBehavior!="true"){holdTopicsInMemory=="true"&&x();var o=$(document).scrollTop();o>maxOffset&&(lastScrollTop=o,maxOffset=0)}}$("body").append('<div class="fixmodal"> <div class="fixmodalWrap"><div id="fixPopup"></div> </div></div>'),n(`
.container__menu {
                /* Absolute position */
                position: absolute;

                /* Reset */
                list-style: none;
                margin: 0;
                padding: 0;
                display: none;

                /* Misc */
                border: 1px solid #cbd5e0;
                border-radius: 0.25rem;
                background-color: #f7fafc;
            }
`),n(`
    .open {
    display: block;
    z-index: 9999;
}
`),n(`
.container__item {
                padding: 0.5rem 1rem;
                white-space: nowrap;
                cursor: pointer;
    color: black;
            }
`),n(`
 .container__item:hover {
                background-color: #bee3f8;
            }
`),n(`
.container__divider {
                border-bottom: 1px solid #cbd5e0;
                height: 1px;
            }
`),$("body").append(`
    <ul id="redditfixShowImage" class="container__menu">
                    <li class="container__item">Show Image</li>
                </ul>
                `);var d=$("#redditfixShowImage"),R,I,c=null;$(document).mousemove(function(o){R=o.pageX,I=o.pageY}),$(document).on("mousedown",function(o){if($(event.target).is("img")){let i=function(t){if(d.hasClass("open")&&d.removeClass("open"),$(t.target).attr("src").toUpperCase().indexOf("BLUR=")>=0){d.css({top:I,left:R}).addClass("open"),t.preventDefault(),c=t.target;return}};$(this).on("contextmenu",i),d.click(function(t){t.stopPropagation()}),$(document).click(function(){d.hasClass("open")&&d.removeClass("open")}),$(".container__item").click(function(){var t=$(c).attr("src"),a=/^.*\/(.*)\.?(.*)?\?/g,r=a.exec(t);if(t.toUpperCase().indexOf("EXTERNAL")>=0){var g=$(c).parents(".STit0dLageRsa2yR4te_b").parent().find(".styled-outbound-link");$(c).attr("src",g.attr("href"))}else $(c).attr("src","https://i.redd.it/"+r[1]);$(c).attr("style","filter:none; width: auto; height: 100%;"),d.removeClass("open")})}});function M(){var o=`
    <div class="Layout-sc-nxg1ff-0 jA-dUUY"><div class="Layout-sc-nxg1ff-0 dDnLci">
    <div class="Layout-sc-nxg1ff-0 bYXYej">
    <div class="InjectLayout-sc-588ddc-0 iETGeJ">
    <button class="ScCoreButton-sc-1qn4ixc-0 enhanceButton jGqsfG ScButtonIcon-sc-o7ndmn-0 fNzXyu"  style="
    background: url(https://i.imgur.com/kWu713g.png);
    background-size: 22px;
    z-index:999;
    background-repeat: no-repeat;
    background-position: center; width: 25px;
    height: 25px; top: 60px; right: 60px; position:fixed;" ></button>
  </div>
  </div>
  <div aria-label="Whispers" role="button" data-click-out-id="threads-box" data-a-target="threads-box-closed" class="Layout-sc-nxg1ff-0 emWtQg InjectLayout-sc-588ddc-0 kgrtoC whispers-threads-box__container"></div></div></div>

    `,i=`
    <div class="enhancecontainer" style="display:none;">

    </div>
    `;$("body").append(i),$(".enhancecontainer").append('<div class="tw-border-t tw-mg-t-1 tw-mg-x-05 tw-pd-b-1 customEnhanceMenu"" ></div><div class="tw-mg-y-05 tw-pd-x-05" style="width: 100%;"><p class="tw-c-text-alt-2 tw-font-size-6 tw-strong tw-upcase" style="color: var(--color-text-alt-2)!important;    font-size: var(--font-size-6)!important;    font-weight: 600!important;    text-transform: uppercase!important;">Reddit enhance</p></div>'),$(".enhancecontainer").append(s(commentEffects,"redditFixCheckBoxBackground","Remove comment effects")),$("#redditFixCheckBoxBackground").click(function(){var t=$(this);t.prop("checked")?(t.removeClass("_1L5kUnhRYhUJ4TkMbOTKkI"),localStorage.setItem("commentEffects",!1),commentEffects="false"):(t.addClass("_1L5kUnhRYhUJ4TkMbOTKkI"),localStorage.setItem("commentEffects",!0),commentEffects="true")}),$(".enhancecontainer").append(s(holdTopicsInMemory,"fixRedditKeepTopicsInMemory","Save topics in ram")),$("#fixRedditKeepTopicsInMemory").click(function(){var t=$(this);t.prop("checked")?(localStorage.setItem("holdTopicsInMemory",!0),holdTopicsInMemory="true",x()):(localStorage.setItem("holdTopicsInMemory",!1),holdTopicsInMemory="false",C())}),$(".enhancecontainer").append(s(originalBehavior,"fixRedditoriginalBehavior","Original behavior")),$("#fixRedditoriginalBehavior").click(function(){var t=$(this);t.prop("checked")?(localStorage.setItem("originalBehavior",!0),originalBehavior="true"):(t.addClass("_1L5kUnhRYhUJ4TkMbOTKkI"),localStorage.setItem("originalBehavior",!1),originalBehavior="false")}),$(".enhancecontainer").append(s(hidePromotedlinks,"fixhidePromotedlinks","Hide promoted links")),$("#fixhidePromotedlinks").click(function(){var t=$(this);t.prop("checked")?(localStorage.setItem("hidePromotedlinks",!0),m(!0),hidePromotedlinks="true"):(t.addClass("_1L5kUnhRYhUJ4TkMbOTKkI"),localStorage.setItem("hidePromotedlinks",!1),m(!1),hidePromotedlinks="false")}),$(".enhancecontainer").append(s(removeBorderRadius,"fixremoveBorderRadius","Remove border radius")),$("#fixremoveBorderRadius").click(function(){var t=$(this);t.prop("checked")?(localStorage.setItem("removeBorderRadius",!0),h(!0),removeBorderRadius="true"):(t.addClass("_1L5kUnhRYhUJ4TkMbOTKkI"),localStorage.setItem("removeBorderRadius",!1),h(!1),removeBorderRadius="false")}),$(".enhancecontainer").append(s(hideRecentSection,"fixHideRecentSection","Hide recent section")),$("#fixHideRecentSection").click(function(){var t=$(this);t.prop("checked")?(localStorage.setItem("hideRecentSection",!0),f(!0)):(localStorage.setItem("hideRecentSection",!1),f(!1))}),$(".enhancecontainer").append('<span style="margin-top: 10px;">Hide subreddit from appearing in feed. If you remove subs you have to restart. If you add just click save, no need to restart.</span>'),$(".enhancecontainer").append(`
        <textarea id="fixHideSubreddits" name="fixHideSubreddits" rows="3" cols="40" style = "flex:1">`+subsToHide+`</textarea>
        `),$(".enhancecontainer").append(" <button type='button' id='fixSaveSubredditsHidden' style = 'background:darkgreen; flex: 2'>Save</button> "),$(".enhancecontainer").append(`<div class="tw-border-t tw-mg-t-1 tw-mg-x-05 tw-pd-b-1 customEnhanceMenu"" ></div><div class="tw-mg-y-05 tw-pd-x-05" style="width: 100%;"><p class="tw-c-text-alt-2 tw-font-size-6 tw-strong tw-upcase"

style="color: var(--color-text-alt-2)!important;
    font-size: smaller;line-height: 1.4;
    margin-top: 6px;">Any subreddit containing this word will be hidden from your feed. This is Case Sensitive. Write the exact subreddit name if you only target that subreddit. Use ; to separate keywords. Example: funny;tiktok;celebrity</p></div>`),$("body").append(o),$(".enhanceButton").click(function(){$(".enhancecontainer").toggle()}),$("#fixSaveSubredditsHidden").click(function(){subsToHide=$("#fixHideSubreddits").val(),localStorage.setItem("subsToHide",subsToHide),l()})}function m(o){o=="true"||o==!0?n(".promotedlink{display: none !important;}"):p(".promotedlink")}function f(o){o=="true"||o==!0?n("reddit-recent-pages{display: none !important;}"):p("reddit-recent-pages")}function h(o){o=="true"||o==!0?n("*:not(.shreddit-subreddit-icon__icon){border-radius: 0 !important;}"):p(":not(.shreddit-subreddit-icon__icon)")}function l(){var o=subsToHide.split(";");let i=0;for(;i<o.length;){let t=$("a[href*='"+o[i]+"']").closest("article");$(t).closest("hr").remove(),$(t).remove(),i++}}M(),n(".enhanceButton:hover{    background-color:var(--color-background-button-text-hover) !important;}"),n(`
    .enhancecontainer {
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: #393939;
    padding: 10px;
    width: 200px;
    position: fixed;
    right: 100px;
    z-index: 100;
    margin-top: 66px;
    width: 500px;
    height: auto;
    top: 0;
}
    `),n(`
    input.enhancCheck[type=checkbox] + label {
  display: block;
    cursor: pointer;
    height: fit-content;
    flex: 1 0 35%;
    margin-top: 5px;
}
`),n(`
    input.enhancCheck[type=checkbox] {
  display: none;
}`),n(`
    ._1L5kUnhRYhUJ4TkMbOTKkI{
    background: green !important;
    }

    `),n(`
    #redditFixCheckBoxBackground,#fixRedditKeepTopicsInMemory,#fixRedditoriginalBehavior{
    background: red;
    }

    `),n(` input.enhancCheck[type=checkbox] + label:before {
  content: "\\2714";
  border: 0.1em solid #fff;
  border-radius: 0.2em;
  display: inline-block;
  width: 1em;
  height: 1em;
  padding-left: 0.2em;
  padding-bottom: 0.3em;
  margin-right: 0.2em;
  vertical-align: bottom;
  color: transparent;
}`),n(`input.enhancCheck[type=checkbox]:checked + label:before {
  background-color: #ED820A;
  border-color:white;
  color: #fff;
}`)})();
