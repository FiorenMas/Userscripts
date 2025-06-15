// ==UserScript==
// @name        Twitterᴾˡᵘˢ
// @namespace   https://github.com/Pixmi/twitter-plus
// @version     0.4.8
// @author      Pixmi
// @homepage    https://github.com/Pixmi/twitter-plus
// @supportURL  https://github.com/Pixmi/twitter-plus/issues
// @icon        https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @match       https://x.com/*
// @match       https://twitter.com/*
// @match       https://mobile.twitter.com/*
// @match       https://pbs.twimg.com/media/*
// @require     https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @grant       GM_registerMenuCommand
// @license     MPL-2.0
// @noframes
// @compatible  Chrome
// @compatible  Firefox
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/TwitterE1B4BECBA1E1B598CBA2.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/TwitterE1B4BECBA1E1B598CBA2.meta.js
// ==/UserScript==
GM_addStyle(`
iframe#twitter_plus_setting {
    max-width: 300px !important;
    max-height: 300px !important;
}`),function(){"use strict";const r=i=>{let e=i.match(/https:\/\/(pbs\.twimg\.com\/media\/[a-zA-Z0-9\-\_]+)(\?format=|.)(jpg|jpeg|png|webp)/);return e?(e[3]=="webp"&&(e[3]="jpg"),e[2]=="?format="||!/name=orig/.test(i)?`https://${e[1]}.${e[3]}?name=orig`:!1):!1},a=window.location.href;if(a.includes("twimg.com")){let i=r(a);i&&window.location.replace(i)}if(a.includes("twitter.com")||a.includes("x.com")){if(!document.evaluate('//div[@id="react-root"]',document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue)return!1;const c=GM_getValue("MAX_HASHTAGS",20),u=GM_getValue("OUT_HASHTAGS","#tag1,#tag2").split(","),g=s=>[s.dataset.testid=="tweet",s.dataset.testid=="tweetPhoto",s.className=="css-175oi2r r-1pi2tsx r-u8s1d r-13qz1uu"].some(l=>l),m=(s,l)=>{for(const d of s){const n=d.target;if(g(n)){if(n.nodeName=="ARTICLE")try{const t=Array.from(n.querySelectorAll('a[href^="/hashtag/"]'),o=>o.textContent);if(t.length>=c||t.some(o=>u.find(_=>_==o)))throw n}catch(t){t instanceof HTMLElement&&(t.closest('div[data-testid="cellInnerDiv"]').style.display="none");continue}for(const t of n.querySelectorAll("img")){let o=r(t.src);o&&(t.src=o)}}}};new MutationObserver(m).observe(document.body,{attributes:!0,childList:!0,subtree:!0})}}(),GM_registerMenuCommand("Setting",()=>config.open());const config=new GM_config({id:"twitter_plus_setting",css:`
        #twitter_plus_setting_wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        #twitter_plus_setting_section_0 {
            flex: 1;
        }
        #twitter_plus_setting_buttons_holder {
            text-align: center;
        }
        .config_var {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem !important;
        }
    `,title:"Remove Spam",fields:{MAX_HASHTAGS:{label:"When exceeding how many hashtags?",type:"number",title:"input 0 to disable",min:0,max:100,default:20},OUT_HASHTAGS:{label:"When containing which hashtags?",type:"textarea",title:"Must include # and separated by commas.",default:"#tag1,#tag2"}},events:{init:()=>{config.set("MAX_HASHTAGS",GM_getValue("MAX_HASHTAGS",20)),config.set("OUT_HASHTAGS",GM_getValue("OUT_HASHTAGS","#tag1,#tag2"))},save:()=>{GM_setValue("OUT_HASHTAGS",config.get("OUT_HASHTAGS")),GM_setValue("MAX_HASHTAGS",config.get("MAX_HASHTAGS")),config.close()}}});
