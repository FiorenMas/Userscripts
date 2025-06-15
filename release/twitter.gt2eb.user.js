// ==UserScript==
// @name          GoodTwitter 2 - Electric Boogaloo
// @version       0.0.45
// @author        schwarzkatz
// @license       MIT
// @match         https://twitter.com/*
// @match         https://mobile.twitter.com/*
// @match         https://x.com/*
// @match         https://mobile.x.com/*
// @exclude       https://twitter.com/i/cards/*
// @exclude       https://twitter.com/i/release_notes
// @exclude       https://twitter.com/*/privacy
// @exclude       https://twitter.com/*/tos
// @exclude       https://twitter.com/account/access
// @exclude       https://x.com/i/cards/*
// @exclude       https://x.com/i/release_notes
// @exclude       https://x.com/*/privacy
// @exclude       https://x.com/*/tos
// @exclude       https://x.com/account/access
// @grant         GM_deleteValue
// @grant         GM_getResourceText
// @grant         GM_getResourceURL
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_info
// @grant         GM_xmlhttpRequest
// @connect       api.twitter.com
// @connect       api.x.com
// @resource      css https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/twitter.gt2eb.style.css
// @resource      emojiRegex https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/data/emoji-regex.txt
// @resource      pickrCss https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css
// @require       https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/twitter.gt2eb.i18n.js
// @require       https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/twitter.gt2eb.polyfills.js
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require       https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.es5.min.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/twitter.gt2eb.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/twitter.gt2eb.user.js
// ==/UserScript==
(function(t,c){"use strict";if(u().match(/^login(\?.*)?$/)||!m()&&u().match(/^(\?.*)?$/))return;if(window.location.host.startsWith("mobile."))if(GM_getValue("opt_gt2").mobileRedirect)window.location.href=window.location.href.replace("//mobile.","//");else return;Number.prototype.humanize=function(){let e=this.toString().split(""),a="",l=1;for(let i=e.length-1;i>=0;i--)a=`${e[i]}${a}`,l++%3==0&&i-1>=0&&(a=`,${a}`);return a},Number.prototype.humanizeShort=function(){let e=this.toString();return this>=1e6?(e=e.slice(0,-5),`${e.slice(0,-1)}${e.slice(-1)!=0?`.${e.slice(-1)}`:""}M`):this>=1e4?(e=e.slice(0,-2),`${e.slice(0,-1)}${e.slice(-1)!=0?`.${e.slice(-1)}`:""}K`):this.humanize()},String.prototype.toKebab=function(){let e=this.toString().split("");return e.map((a,l)=>`${l>0&&(!isNaN(a)&&isNaN(e[l-1])||isNaN(a)&&!isNaN(e[l-1])||isNaN(a)&&a==a.toUpperCase())?"-":""}${a.toLowerCase()}`).join("")},String.prototype.replaceAt=function(e,a,l){return`${this.toString().slice(0,e)}${l}${this.toString().slice(e+a)}`},String.prototype.insertAt=function(e,a){return this.toString().replaceAt(e,0,a)};const A="https://abs.twimg.com/sticky/default_profile_images/default_profile.png",I=new RegExp(`(${GM_getResourceText("emojiRegex")})`,"gu");let b=null;function O(){if(b)return b;let e=null;try{for(let a of Array.from(document.querySelectorAll("#react-root ~ script")))if(a.textContent.includes("__INITIAL_STATE__")){let l=a.textContent.match(/__INITIAL_STATE__=(\{.*?\});window/);if(l){let i=JSON.parse(l[1]);e=Object.values(i?.entities?.users?.entities)[0]??null}break}}catch(a){console.error(a)}return e?(b={bannerUrl:e.profile_banner_url,avatarUrl:e.profile_image_url_https,screenName:e.screen_name,name:e.name,id:e.id_str,stats:{tweets:e.statuses_count,followers:e.followers_count,following:e.friends_count}},console.log("user info",b)):(console.error("match of __INITIAL_STATE__ unsuccessful, falling back to default values"),b={bannerUrl:"",avatarUrl:A,screenName:"youarenotloggedin",name:"Anonymous",id:"0",stats:{tweets:0,followers:0,following:0}}),b}function _(){return t("html").attr("lang").trim()}function m(){return document.cookie.match(/twid=u/)}function d(e){let a=_();return a=Object.keys(i18n).includes(a)?a:"en",i18n[Object.keys(i18n[a]).includes(e)?a:"en"][e]}function u(){return window.location.href.replace(/.*?(twitter|x)\.com\//,"")}function v(e){let a={lightning:'<g><path d="M8.98 22.698c-.103 0-.205-.02-.302-.063-.31-.135-.49-.46-.44-.794l1.228-8.527H6.542c-.22 0-.43-.098-.573-.266-.144-.17-.204-.393-.167-.61L7.49 2.5c.062-.36.373-.625.74-.625h6.81c.23 0 .447.105.59.285.142.18.194.415.14.64l-1.446 6.075H19c.29 0 .553.166.678.428.124.262.087.57-.096.796L9.562 22.42c-.146.18-.362.276-.583.276zM7.43 11.812h2.903c.218 0 .425.095.567.26.142.164.206.382.175.598l-.966 6.7 7.313-8.995h-4.05c-.228 0-.445-.105-.588-.285-.142-.18-.194-.415-.14-.64l1.446-6.075H8.864L7.43 11.812z"></path></g>',caret:'<g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g>',tick:'<g><path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path></g>',moon:'<g><path d="M 13.277344 24 C 16.976562 24 20.355469 22.316406 22.597656 19.554688 C 22.929688 19.148438 22.566406 18.550781 22.054688 18.648438 C 16.234375 19.757812 10.886719 15.292969 10.886719 9.417969 C 10.886719 6.03125 12.699219 2.917969 15.644531 1.242188 C 16.097656 0.984375 15.984375 0.296875 15.46875 0.199219 C 14.746094 0.0664062 14.011719 0 13.277344 0 C 6.652344 0 1.277344 5.367188 1.277344 12 C 1.277344 18.625 6.644531 24 13.277344 24 Z M 13.277344 24 "/></g>',x:'<g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g>',google:'<g><path d="M9.827 17.667c-4.82 0-8.873-3.927-8.873-8.747S5.007.173 9.827.173c2.667 0 4.567 1.047 5.993 2.413l-1.687 1.687c-1.027-.96-2.413-1.707-4.307-1.707-3.52 0-6.273 2.84-6.273 6.36s2.753 6.36 6.273 6.36c2.28 0 3.587-.92 4.413-1.747.68-.68 1.132-1.668 1.3-3.008H10v-2.4h7.873c.087.428.127.935.127 1.495 0 1.793-.493 4.013-2.067 5.587-1.54 1.6-3.5 2.453-6.106 2.453zm20.806-5.627c0 3.24-2.533 5.633-5.633 5.633-3.107 0-5.633-2.387-5.633-5.633 0-3.267 2.527-5.633 5.633-5.633 3.1.006 5.633 2.373 5.633 5.633zm-2.466 0c0-2.027-1.467-3.413-3.167-3.413-1.7 0-3.167 1.387-3.167 3.413 0 2.007 1.467 3.413 3.167 3.413 1.7 0 3.167-1.406 3.167-3.413zm15.133-.007c0 3.24-2.527 5.633-5.633 5.633s-5.633-2.387-5.633-5.633c0-3.267 2.527-5.633 5.633-5.633S43.3 8.773 43.3 12.033zm-2.467 0c0-2.027-1.467-3.413-3.167-3.413S34.5 10.007 34.5 12.033c0 2.007 1.467 3.413 3.167 3.413s3.166-1.406 3.166-3.413zm14.5-5.286V16.86c0 4.16-2.453 5.867-5.353 5.867-2.733 0-4.373-1.833-4.993-3.327l2.153-.893c.387.92 1.32 2.007 2.84 2.007 1.853 0 3.007-1.153 3.007-3.307v-.813H52.9c-.553.68-1.62 1.28-2.967 1.28-2.813 0-5.267-2.453-5.267-5.613 0-3.18 2.453-5.652 5.267-5.652 1.347 0 2.413.6 2.967 1.26h.087v-.92h2.346zm-2.173 5.306c0-1.987-1.32-3.433-3.007-3.433-1.707 0-3.007 1.453-3.007 3.433 0 1.96 1.3 3.393 3.007 3.393 1.68 0 3.007-1.426 3.007-3.393zM59.807.78v16.553h-2.473V.78h2.473zm9.886 13.113l1.92 1.28c-.62.92-2.113 2.493-4.693 2.493-3.2 0-5.587-2.473-5.587-5.633 0-3.347 2.413-5.633 5.313-5.633 2.92 0 4.353 2.327 4.82 3.587l.253.64-7.534 3.113c.573 1.133 1.473 1.707 2.733 1.707s2.133-.62 2.773-1.554zm-5.906-2.026l5.033-2.093c-.28-.707-1.107-1.193-2.093-1.193-1.254 0-3.007 1.107-2.94 3.287z"></path></g>',arrow:'<g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g>',location:'<g><path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path><path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path></g>',url:'<g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path></g>',calendar:'<g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g>',balloon:'<g><path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"></path><path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"></path></g>'};return`
      <svg class="gt2-svg" viewBox="0 0 ${e=="google"?74:24} 24">
        ${a[e]}
      </svg>`}function w(e){let a="AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",l=window.document.cookie.match(/ct0=([^;]+)(;|$)/)[1],i={authorization:`Bearer ${a}`,origin:"https://twitter.com",referer:window.location.href,"x-twitter-client-language":_(),"x-csrf-token":l,"x-twitter-active-user":"yes"};return Object.assign(i,e),i}function M(e,a){let l=e;for(let[i,s]of Object.entries(a))typeof s=="object"&&(s=encodeURIComponent(JSON.stringify(s))),l+=`&${i}=${s}`;return`${l.replace("&","?")}`}function $(e,a){GM_xmlhttpRequest({method:"GET",url:M("https://twitter.com/i/api/1.1/statuses/show.json",{id:e,tweet_mode:"extended",trim_user:!0,include_cards:1}),headers:w(),onload:function(l){l.status=="200"?a(JSON.parse(l.response)):console.warn(l)}})}function F(e,a){GM_xmlhttpRequest({method:"GET",url:M("https://twitter.com/i/api/graphql/bRL1YYMraLIBpo1PGLeFcw/TweetDetail",{variables:{focalTweetId:e,includePromotedContent:!1,withBirdwatchNotes:!1,withDownvotePerspective:!1,withReactionsMetadata:!1,withReactionsPerspective:!1,withSuperFollowsTweetFields:!1,withSuperFollowsUserFields:!1,withVoice:!1}}),headers:w(),onload:function(l){l.status=="200"?a(JSON.parse(l.response).data.threaded_conversation_with_injections.instructions.find(i=>i.type=="TimelineAddEntries").entries.find(i=>i.entryId.startsWith("tweet-")).content.itemContent.tweet_results.result.legacy):console.warn(l)}})}function j(e,a){GM_xmlhttpRequest({method:"GET",url:M("https://twitter.com/i/api/graphql/jMaTS-_Ea8vh9rpKggJbCQ/UserByScreenName",{variables:{screen_name:e,withHighlightedLabel:!0}}),headers:w(),onload:function(l){l.status=="200"?a(JSON.parse(l.response)):console.warn(l)}})}function q(e,a,l){GM_xmlhttpRequest({method:"POST",url:M(`https://api.twitter.com/1.1/blocks/${a?"create":"destroy"}.json`,{user_id:e,skip_status:!0}),headers:w(),onload:function(i){i.status=="200"?l():console.warn(i)}})}String.prototype.populateWithEntities=function(e){let a=this.toString(),l=a,i=[];if(e.urls)for(let r of e.urls)i.push({[r.indices[0]]:'<a href="',[r.indices[1]]:`" target="_blank">${r.display_url}</a> `});if(e.user_mentions)for(let r of e.user_mentions){let g=a.slice(r.indices[0],r.indices[0]+1)=="@"?0:1;i.push({[r.indices[0]+g]:`<a href="/${r.screen_name}">`,[r.indices[1]+g]:"</a> "})}if(e.hashtags)for(let r of e.hashtags){let g=a.slice(r.indices[0],r.indices[0]+1)=="#"?0:1;i.push({[r.indices[0]+g]:`<a href="/hashtag/${r.text}">`,[r.indices[1]+g]:"</a> "})}let s,n=0;for(;(s=I.exec(a))!=null;)if(!(s[1].codePointAt(0)<65535)){n++;for(let g in i){let p=Object.entries(i[g]);p[0][1]!='<a href="'&&n==1||p[0][0]>=s.index&&(i[g]={[parseInt(p[0][0])+1]:p[0][1],[parseInt(p[1][0])+1]:p[1][1]})}}i=i.sort((r,g)=>parseInt(Object.keys(r)[0])-parseInt(Object.keys(g)[0]));let o=0;for(let r of i)for(let[g,p]of Object.entries(r))l=l.insertAt(parseInt(g)+o,p),o+=p.length;if(GM_getValue("opt_gt2").expandTcoShortlinks){let r=/href="(https:\/\/t\.co\/[^"]+)"/,g;for(;(g=r.exec(l))!=null;)l=l.replace(new RegExp(`href="${g[1]}"`),`href="${e.urls.find(p=>p.url==g[1]).expanded_url}"`)}return l},String.prototype.replaceEmojis=function(){let e=this.toString().replace(/([\*#0-9])\s\u20E3/ug,"$1\u20E3").replace(/([\*#0-9])\uFE0F/ug,"$1"),a=e,l,i=0;for(;(l=I.exec(e))!=null;){let s=l[1],n=[];for(let r=0;r<s.length;r++)n.push(s.codePointAt(r).toString(16)),s.codePointAt(r)>65535&&r++;n.length>1&&n[1].match(/^FE0F$/i)&&n.pop();let o=`<img src="https://abs-0.twimg.com/emoji/v2/svg/${n.join("-")}.svg" alt="${s}" class="gt2-emoji" />`;a=a.replaceAt(l.index+i,s.length,o),i+=o.length-s.length}return a};const y={forceLatest:!1,biggerPreviews:!1,hideTranslateTweetButton:!1,tweetIconsPullLeft:!1,hidePromoteTweetButton:!1,showMediaWithContentWarnings:!1,showMediaWithContentWarningsSel:7,hideTweetAnalytics:!1,stickySidebars:!0,smallSidebars:!1,hideTrends:!1,leftTrends:!0,show5Trends:!1,legacyProfile:!1,squareAvatars:!1,disableHexagonAvatars:!1,enableQuickBlock:!1,leftMedia:!1,profileMediaRedirect:!1,hideFollowSuggestions:!1,hideFollowSuggestionsSel:7,hideFollowSuggestionsLocSel:3,fontOverride:!1,fontOverrideValue:"Arial",colorOverride:!1,colorOverrideValue:"85, 102, 68",hideMessageBox:!0,rosettaIcons:!1,favoriteLikes:!1,birdIcon:!0,updateNotifications:!0,expandTcoShortlinks:!0,mobileRedirect:!0};if(GM_getValue("opt_gt2")==null&&GM_setValue("opt_gt2",y),JSON.stringify(Object.keys(GM_getValue("opt_gt2")))!=JSON.stringify(Object.keys(y))){let e=GM_getValue("opt_gt2");for(let a of Object.keys(y))Object.keys(e).includes(a)&&delete y[a];for(let a of Object.keys(e))Object.keys(y).includes(a)&&delete e[a];Object.assign(e,y),GM_setValue("opt_gt2",e)}function Y(e){let a=GM_getValue("opt_gt2");a[e]=!a[e],GM_setValue("opt_gt2",a)}function J(){t(".gt2-toggle-settings").length||t(`main section[aria-labelledby=root-header] div[role=tablist],
         main > div > div > div > div:last-child > div[role=tablist],
         main div[data-testid=loggedOutPrivacySection]`).append(`
        <a class="gt2-toggle-settings" href="/settings/gt2">
          <div>
            <span>GoodTwitter2</span>
            ${v("caret")}
          </div>
        </a>
      `)}t("body").on("click",".gt2-toggle-settings",function(e){e.preventDefault(),window.history.pushState({},"",t(this).attr("href")),z(),B()}),t("body").on("click",`main section[aria-labelledby=root-header] div[role=tablist] a:not(.gt2-toggle-settings),
                         main section[aria-labelledby=root-header] div[data-testid=loggedOutPrivacySection] a:not(.gt2-toggle-settings)`,()=>{t(".gt2-settings-header, .gt2-settings").remove()});function f(e,a=""){let l=`${e}Desc`;return`
      <div class="gt2-setting">
        <div>
          <span>${d(e)}</span>
          <div class="gt2-setting-toggle ${GM_getValue("opt_gt2")[e]?"gt2-active":""}" data-setting-name="${e}">
            <div></div>
            <div>
              ${v("tick")}
            </div>
          </div>
        </div>
        ${a}
        ${d(l)?`<span>${d(l)}</span>`:""}
      </div>`}function z(){if(!t(".gt2-settings").length){let e=`
        <div class="gt2-settings-header">
          <div class="gt2-settings-back">
            <div></div>
            ${v("arrow")}
          </div>
          GoodTwitter2 v${GM_info.script.version}
        </div>
        <div class="gt2-settings">
          <div class="gt2-settings-sub-header">${d("settingsHeaderTimeline")}</div>
          ${f("forceLatest")}
          ${f("biggerPreviews")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${d("statsTweets")}</div>
          ${f("hideTranslateTweetButton")}
          ${f("tweetIconsPullLeft")}
          ${f("hidePromoteTweetButton")}
          ${f("showMediaWithContentWarnings",`
            <div data-setting-name="showMediaWithContentWarningsBox" class="gt2-settings-multi-selection ${GM_getValue("opt_gt2").showMediaWithContentWarnings?"":"gt2-hidden"}">
              <div data-setting-name="showMediaWithContentWarningsSel">
                ${["Nudity","Violence","SensitiveContent"].map((l,i)=>{let s=Math.pow(2,i);return`
                    <div>
                      <span>${d(`contentWarning${l}`)}</span>
                      <div class="gt2-setting-toggle ${(GM_getValue("opt_gt2").showMediaWithContentWarningsSel&s)==s?"gt2-active":""}" data-sel="${s}">
                        <div></div>
                        <div>${v("tick")}</div>
                      </div>
                    </div>`}).join("")}
              </div>
            </div>
          `)}
          ${f("hideTweetAnalytics")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${d("settingsHeaderSidebars")}</div>
          ${f("stickySidebars")}
          ${f("smallSidebars")}
          ${f("hideTrends")}
          ${f("leftTrends")}
          ${f("show5Trends")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${d("navProfile")}</div>
          ${f("legacyProfile")}
          ${f("squareAvatars")}
          ${f("disableHexagonAvatars")}
          ${f("enableQuickBlock")}
          ${f("leftMedia")}
          ${f("profileMediaRedirect")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${d("settingsHeaderGlobalLook")}</div>
          ${f("hideFollowSuggestions",`
            <div data-setting-name="hideFollowSuggestionsBox" class="gt2-settings-multi-selection ${GM_getValue("opt_gt2").hideFollowSuggestions?"":"gt2-hidden"}">
              ${d("hideFollowSuggestionsBox").replace("$type$",`
                <div data-setting-name="hideFollowSuggestionsSel">
                  ${["topics","users","navLists"].map((l,i)=>{let s=Math.pow(2,i);return`<div>
                      <span>${d(l)}</span>
                      <div class="gt2-setting-toggle ${(GM_getValue("opt_gt2").hideFollowSuggestionsSel&s)==s?"gt2-active":""}" data-sel="${s}">
                        <div></div>
                        <div>${v("tick")}</div>
                      </div>
                    </div>
                  `}).join("")}
                </div>
              `).replace("$location$",`
                <div data-setting-name="hideFollowSuggestionsLocSel">
                  ${["Timeline","Sidebars"].map((l,i)=>{let s=Math.pow(2,i);return`<div>
                      <span>${d(`settingsHeader${l}`)}</span>
                      <div class="gt2-setting-toggle ${(GM_getValue("opt_gt2").hideFollowSuggestionsLocSel&s)==s?"gt2-active":""}" data-sel="${s}">
                        <div></div>
                        <div>${v("tick")}</div>
                      </div>
                    </div>
                  `}).join("")}
                </div>
              `)}
            </div>
          `)}
          ${f("fontOverride",`
            <div class="gt2-setting-input" data-setting-name="fontOverrideValue">
              <input type="text" value="${GM_getValue("opt_gt2").fontOverrideValue}">
            </div>
          `)}
          ${f("colorOverride",'<div class="gt2-pickr"></div>')}
          ${f("hideMessageBox")}
          ${f("rosettaIcons")}
          ${f("favoriteLikes")}
          ${f("birdIcon")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${d("settingsHeaderOther")}</div>
          ${f("updateNotifications")}
          ${f("expandTcoShortlinks")}
          ${f("mobileRedirect")}
        </div>
      `,a=t("main section[aria-labelledby=detail-header]");a.length?a.prepend(e):t("main > div > div > div").append(`
          <section>${e}</section>
        `),Pickr.create({el:".gt2-pickr",theme:"classic",lockOpacity:!0,useAsButton:!0,appClass:"gt2-color-override-pickr",inline:!0,default:`rgb(${GM_getValue("opt_gt2").colorOverrideValue})`,components:{preview:!0,hue:!0,interaction:{hex:!0,rgba:!0,hsla:!0,hsva:!0,cmyk:!0,input:!0}}}).on("change",l=>{let i=l.toRGBA().toString(0).slice(5,-4);GM_setValue("opt_gt2",Object.assign(GM_getValue("opt_gt2"),{colorOverrideValue:i})),document.documentElement.style.setProperty("--color-override",i)}),P()}}function B(){let e=t("title").html();t("title").html(`${e.startsWith("(")?`${e.split(" ")[0]} `:""}GoodTwitter2 / Twitter`)}t("body").on("click",".gt2-setting-toggle:not(.gt2-disabled)",function(){if(t(this).toggleClass("gt2-active"),t(this).is("[data-setting-name]")){let e=t(this).attr("data-setting-name").trim();Y(e),t("body").toggleClass(`gt2-opt-${e.toKebab()}`)}if(t(this).is("[data-sel]")){let e=t(this).closest("[data-setting-name]").attr("data-setting-name"),a=GM_getValue("opt_gt2");GM_setValue("opt_gt2",Object.assign(a,{[e]:a[e]^parseInt(t(this).attr("data-sel"))}))}P()}),t("body").on("keyup",".gt2-setting-input input",function(){let e=t(this).parent().attr("data-setting-name").trim(),a=t(this).val().trim();GM_setValue("opt_gt2",Object.assign(GM_getValue("opt_gt2"),{[e]:a})),document.documentElement.style.setProperty(`--${e.replace("Value","").toKebab()}`,a)});function P(){t("div[data-setting-name=leftTrends], div[data-setting-name=show5Trends]")[GM_getValue("opt_gt2").hideTrends?"addClass":"removeClass"]("gt2-disabled"),t("[data-setting-name=fontOverrideValue]")[GM_getValue("opt_gt2").fontOverride?"removeClass":"addClass"]("gt2-hidden"),t(".gt2-color-override-pickr")[GM_getValue("opt_gt2").colorOverride?"removeClass":"addClass"]("gt2-hidden"),t("[data-setting-name=hideFollowSuggestionsBox]")[GM_getValue("opt_gt2").hideFollowSuggestions?"removeClass":"addClass"]("gt2-hidden"),t("[data-setting-name=showMediaWithContentWarningsBox]")[GM_getValue("opt_gt2").showMediaWithContentWarnings?"removeClass":"addClass"]("gt2-hidden")}t("body").on("click",".gt2-settings-back",()=>window.history.back());function D(){c('nav > a[href="/home"]',()=>{if(!t(".gt2-nav").length){t("main").before(`
        <nav class="gt2-nav">
          <div class="gt2-nav-left"></div>
          <div class="gt2-nav-center">
            <a href="/home"></a>
          </div>
          <div class="gt2-nav-right">
            <div class="gt2-search"></div>
            <div class="gt2-toggle-navbar-dropdown">
              <img src="${O().avatarUrl.replace(/_(bigger|normal|(reasonably_)?small|\d*x\d+)/,"_bigger")}" />
            </div>
            <div class="gt2-compose">${d("composeNewTweet")}</div>
          </div>
        </nav>
        <div class="gt2-search-overflow-hider"></div>
      `);for(let e of["Home","Notifications","Messages",window.innerWidth<1005?"Explore":null]){if(!e)continue;let a=`nav > a[href^="/${e.toLowerCase()}"]:not([data-testid=AppTabBar_Profile_Link]):not([href$="/lists"])`,l=document.querySelector(a);l&&(document.querySelector(".gt2-nav-left").insertAdjacentHTML("beforeend",l.outerHTML),document.querySelectorAll(".gt2-nav-left [data-testid]").forEach(i=>{i.addEventListener("click",s=>{if(!s.ctrlKey){s.preventDefault();let n=s.target.closest("[data-testid]").dataset.testid;document.querySelector(`nav [data-testid=${n}]`).click()}})}),Q(a,i=>{let s=document.querySelector(`.gt2-nav-left [data-testid=${i.dataset.testid}]`);s&&(s.innerHTML=i.innerHTML,s.firstElementChild.setAttribute("data-gt2-color-override-ignore",""),s.firstElementChild.insertAdjacentHTML("beforeend",`
            <div class="gt2-nav-header">
              ${d(`nav${e}`)}
            </div>
          `))}),t(`.gt2-nav a[href^="/${e.toLowerCase()}"] > div`).append(`
          <div class="gt2-nav-header">
            ${d(`nav${e}`)}
          </div>
        `).attr("data-gt2-color-override-ignore",""))}t(`.gt2-nav a[href^='/${u().split("/")[0]}']`).addClass("active"),t("h1 a[href='/home'] svg").appendTo(".gt2-nav-center a")}})}function Q(e,a){c(e,l=>{let i=l[0];i&&new MutationObserver(s=>{s.forEach(()=>a(i))}).observe(i,{attributes:!0,subtree:!0,childList:!0})})}function R(){c("nav > a[data-testid=AppTabBar_Explore_Link]",()=>{t(".gt2-nav").length||(t("body").prepend(`
        <nav class="gt2-nav">
          <div class="gt2-nav-left"></div>
          <div class="gt2-nav-center">
            <a href="/"></a>
          </div>
          <div class="gt2-nav-right">
            <div class="gt2-search"></div>
          </div>
        </nav>
        <div class="gt2-search-overflow-hider"></div>
      `),t(`nav > a[data-testid=AppTabBar_Explore_Link],
         nav > a[href="/settings"]`).appendTo(".gt2-nav-left"),t(".gt2-nav a[data-testid=AppTabBar_Explore_Link] > div").append(`
        <div class="gt2-nav-header">
          ${d("navExplore")}
        </div>
      `),t('.gt2-nav a[href="/settings"] > div').append(`
        <div class="gt2-nav-header">
          ${t('.gt2-nav a[href="/settings"]').attr("aria-label")}
        </div>
      `),t(`.gt2-nav a[href^='/${u().split("/")[0]}']`).addClass("active"),t("header h1 a[href='/'] svg").appendTo(".gt2-nav-center a"))})}function Z(){let e="div[data-testid=sidebarColumn] > div > div:nth-child(2) > div > div > div > div:nth-child(1)";c(`${e} input[data-testid=SearchBox_Search_Input]`,()=>{t(".gt2-search").empty(),t(e).prependTo(".gt2-search"),t("body").addClass("gt2-search-added")})}function X(e){let a=window.innerWidth,l=".gt2-left-sidebar";(!GM_getValue("opt_gt2").smallSidebars&&a<=1350||GM_getValue("opt_gt2").smallSidebars&&a<=1230)&&(l="div[data-testid=sidebarColumn] > div > div:nth-child(2) > div > div > div"),e.unshift('<div class="gt2-legacy-profile-info"></div>'),c(l,()=>{if(!t(l).find(".gt2-legacy-profile-info").length)for(let i of e.slice().reverse())l.startsWith(".gt2")?t(l).prepend(i):t(`${l} > div:empty:not(.gt2-legacy-profile-info)`).after(i);t(".gt2-dashboard-profile").length>1&&t(".gt2-dashboard-profile").last().remove()})}function K(){let e=O(),a=m()?"href":"data-href";return`
      <div class="gt2-dashboard-profile">
        <a ${a}="/${e.screenName}" class="gt2-banner" style="background-image: ${e.bannerUrl?`url(${e.bannerUrl}/600x200)`:"unset"};"></a>
        <div>
          <a ${a}="/${e.screenName}" class="gt2-avatar">
            <img src="${e.avatarUrl.replace(/_(bigger|normal|(reasonably_)?small|\d*x\d+)/,"_bigger")}"/>
          </a>
          <div class="gt2-user">
            <a ${a}="/${e.screenName}" class="gt2-name">${e.name.replaceEmojis()}</a>
            <a ${a}="/${e.screenName}" class="gt2-screenname">
              @<span >${e.screenName}</span>
            </a>
          </div>
          <div class="gt2-toggle-${m()?"acc-switcher-dropdown":"lo-nightmode"}">
            <div></div>
            ${v(m()?"caret":"moon")}
          </div>
          <div class="gt2-stats">
            <ul>
              <li>
                <a ${a}="/${e.screenName}">
                  <span>${d("statsTweets")}</span>
                  <span>${e.stats.tweets.humanize()}</span>
                </a>
              </li>
              <li>
                <a ${a}="/${e.screenName}/following">
                  <span>${d("statsFollowing")}</span>
                  <span>${e.stats.following.humanize()}</span>
                </a>
              </li>
              <li>
                <a ${a}="/${e.screenName}/followers">
                  <span>${d("statsFollowers")}</span>
                  <span>${e.stats.followers.humanize()}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `}function ee(){let e=GM_info.script.version;return`
      <div class="gt2-sidebar-notice gt2-update-notice">
        <div class="gt2-sidebar-notice-header">
          GoodTwitter 2
          <div class="gt2-sidebar-notice-close">
            <div></div>
            ${v("x")}
          </div>
        </div>
        <div class="gt2-sidebar-notice-content">
          ${v("tick")} ${d("updatedInfo").replace("$version$",`v${e}`)}<br />
          <a
            href="https://github.com/Bl4Cc4t/GoodTwitter2/blob/master/doc/changelog.md#${e.replace(/\./g,"")}"
            target="_blank">
            ${d("updatedInfoChangelog")}
          </a>
        </div>
      </div>
    `}function te(){let e=u().match(/^intent\/(user|follow)/)?u().match(/screen_name=(\w+)/)[1]:u().split("/")[0].split("?")[0].split("#")[0];console.log(`rebuild: ${e}`);let a="div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)";c([`a[href="/${e}/photo" i] img`,`a[href="/${e}/nft" i] img`,`${a} [data-testid=UserDescription] [href="https://support.twitter.com/articles/20169222"]`,`${a} [data-testid=UserDescription] [href="https://support.twitter.com/articles/20169199"]`].join(", "),l=>{t(".gt2-legacy-profile-nav").length&&(t(".gt2-legacy-profile-banner, .gt2-legacy-profile-nav").remove(),t(".gt2-legacy-profile-info").empty());const i={banner:()=>t("a[href$='/header_photo'] img"),avatar:()=>t(a).find("a[href$='/photo'] img, a[href$='/nft'] img").first(),screenName:()=>t(a).find("> [data-testid=UserName] > div:nth-child(1) > div [dir] > span:contains(@):not(:has(> *))").text().slice(1),followsYou:()=>t(a).find("> [data-testid=UserName] > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)"),name:()=>t(a).find("> [data-testid=UserName] > div:nth-child(1) > div > div:nth-child(1) > div"),automated:()=>t(a).find("> [data-testid=UserName] > div:nth-child(2)"),joinDateHTML:()=>t(a).find("div[data-testid=UserProfileHeader_Items] > span:last-child").html(),followingRnd:()=>t(a).find('a[href$="/following"] > span:first-child, > div:not(:first-child) div:nth-child(1) > [role=button]:first-child:last-child > span:first-child').first().text().trim(),followersRnd:()=>t(a).find('a[href$="/followers"] > span:first-child, > div:not(:first-child) div:nth-child(2) > [role=button]:first-child:last-child > span:first-child').first().text().trim(),hasOnlyScreenName:()=>t(a).find("> [data-testid=UserName] > div:nth-child(1) > div > div").length==1,avatarIsHex:()=>t(a).find("a[href$='/nft']").length>0,description:()=>t(a).find("div[data-testid=UserDescription]"),items:()=>t(a).find("div[data-testid=UserProfileHeader_Items]"),fyk:()=>t(a).find("> div:last-child:not(:nth-child(2)) > div:last-child:first-child")};t(".gt2-legacy-profile-banner").length||t("header").before(`
          <div class="gt2-legacy-profile-banner">
            ${i.banner().length?`<img src="${i.banner().attr("src").match(/(\S+)\/\d+x\d+/)[1]}/1500x500" />`:""}
          </div>
          <div class="gt2-legacy-profile-nav">
            <div class="gt2-legacy-profile-nav-left">
              <div class="gt2-legacy-profile-nav-avatar ${i.avatarIsHex()?"gt2-avatar-hex":""}">
                <img src="${i.avatar().length?i.avatar().attr("src").replace(/_(bigger|normal|(reasonably_)?small|\d*x\d+)/,"_400x400"):A}" />
              </div>
              <div>
                <div class="gt2-legacy-profile-name">${i.name().html()}</div>
                <div class="gt2-legacy-profile-screen-name-wrap">
                  ${i.hasOnlyScreenName()?"":`
                    <div class="gt2-legacy-profile-screen-name">
                      @<span>${i.screenName()}</span>
                    </div>
                  `}
                  ${i.followsYou().length?i.followsYou().prop("outerHTML"):""}
                </div>
              </div>
            </div>
            <div class="gt2-legacy-profile-nav-center">
              <a href="/${i.screenName()}" title="">
                <div>${d("statsTweets")}</div>
                <div>0</div>
              </a>
              <a href="/${i.screenName()}/following" title="">
                <div>${d("statsFollowing")}</div>
                <div>${i.followingRnd()||0}</div>
              </a>
              <a href="/${i.screenName()}/followers" title="">
                <div>${d("statsFollowers")}</div>
                <div>${i.followersRnd()||0}</div>
              </a>
              <a href="/${i.screenName()}/likes" title="">
                <div>${d("statsLikes")}</div>
                <div>0</div>
              </a>
              <!--
                <a href="/${i.screenName()}/lists" title="">
                  <div>${d("navLists")}</div>
                  <div></div>
                </a>
                <a href="/${i.screenName()}/moments" title="">
                  <div>${d("statsMoments")}</div>
                  <div></div>
                </a>
              -->
            </div>
            <div class="gt2-legacy-profile-nav-right"></div>
          </div>
        `),j(i.screenName(),s=>{let n=s.data.user,o=n.legacy;c(".gt2-legacy-profile-info > :first",r=>t(r).parent().attr("data-profile-id",n.rest_id));for(let r of[[i.screenName(),"statuses_count"],["following","friends_count"],["followers","followers_count"],["likes","favourites_count"]])t(`.gt2-legacy-profile-nav-center a[href$="/${r[0]}"]`).attr("title",o[r[1]].humanize()).find("div:nth-child(2)").html(o[r[1]].humanizeShort());if(GM_getValue("opt_gt2").expandTcoShortlinks){let r=o.entities.description.urls.concat(o.entities.url?o.entities.url.urls:[]);t('.gt2-legacy-profile-info a[href^="https://t.co"]').each(function(){t(this).attr("href",r.find(g=>g.url==t(this).attr("href").split("?")[0]).expanded_url)})}}),c(`[href="/${u().match(/^intent\/(user|follow)/)?u().match(/screen_name=(\w+)/)[1]:u().split("/")[0].split("?")[0].split("#")[0]}/following" i]`,()=>{t(".gt2-legacy-profile-info").data("alreadyFound",!1),c(".gt2-legacy-profile-info",()=>{t(".gt2-legacy-profile-info .gt2-legacy-profile-screen-name").length||(t(".gt2-legacy-profile-info").append(`
              <div class="gt2-legacy-profile-name"></div>
              <div class="gt2-legacy-profile-screen-name-wrap">
                ${i.hasOnlyScreenName()?"":`
                  <div class="gt2-legacy-profile-screen-name">
                    @<span>${i.screenName()}</span>
                  </div>
                `}
                ${i.followsYou().length?i.followsYou().prop("outerHTML"):""}
              </div>
              ${i.automated().length?`<div class="gt2-legacy-profile-automated">${i.automated().prop("outerHTML")}</div>`:""}
              ${i.description().length?`<div class="gt2-legacy-profile-description">${i.description().parent().html()}</div>`:""}
              <div class="gt2-legacy-profile-items">
                ${i.items().length?i.items().html():""}
              </div>
              ${i.fyk().length?`<div class="gt2-legacy-profile-fyk">${i.fyk().prop("outerHTML")}</div>`:""}
            `),document.querySelector(".gt2-legacy-profile-info .gt2-legacy-profile-name").insertAdjacentHTML("afterbegin",i.name()[0].innerHTML),document.querySelector(".gt2-legacy-profile-info .gt2-legacy-profile-name [data-testid=icon-verified]")?.parentElement?.addEventListener("click",s=>{document.querySelector(`${a} [data-testid=icon-verified]`)?.dispatchEvent(new MouseEvent("click",{bubbles:!0})),c("#layers > div:nth-child(2) > div > div > div:nth-child(2)",n=>{let r=n[0].getBoundingClientRect(),g=s.target.getBoundingClientRect();const p=20;let h=Math.max(p,g.left+g.width/2-r.width/2),C=innerWidth-p,N=g.bottom+10,de=Math.max(p,g.top-10-r.height),ce=innerHeight-p;document.querySelector(".gt2-style-verification")?.remove(),document.head.insertAdjacentHTML("beforebegin",`
                      <style class="gt2-style-verification">
                        #layers > div:nth-child(2) > div > div > div:nth-child(2) {
                          left: ${Math.round(h+r.width<C?h:C)}px !important;
                          top: ${Math.round(N+r.height<ce?N:de)}px !important;
                          position: fixed !important;
                        }
                      </style>
                    `)})}),GM_setValue("hasRun_InsertFYK",!1),c('a[href$="/followers_you_follow"] div[style*=background-image] + img',s=>{GM_getValue("hasRun_InsertFYK")||(t(".gt2-legacy-profile-fyk").html(t(s).parents('a[href$="/followers_you_follow"]').prop("outerHTML")),GM_setValue("hasRun_InsertFYK",!0))}))})}),t(".gt2-legacy-profile-nav-right > div").length||t(a).find("> div:nth-child(1) > div:last-child").detach().appendTo(".gt2-legacy-profile-nav-right")}),c(['body:not([data-gt2-path^="messages"]) [data-testid=empty_state_body_text] > *:not(a):first-child:last-child','[data-testid=emptyState] [href="https://help.twitter.com/rules-and-policies/twitter-rules"]'].join(", "),()=>{let l=t(a).find("> div:nth-child(2) > div > div"),i={screenName:()=>l.find("> div:nth-last-child(1)").text().trim().slice(1),nameHTML:()=>l.find("> div").length>1?l.find("> div:nth-child(1)").html():null};t("body").addClass("gt2-profile-not-found"),t("header").before(`
        <div class="gt2-legacy-profile-banner">
          <img />
        </div>
        <div class="gt2-legacy-profile-nav">
          <div class="gt2-legacy-profile-nav-left">
            <div class="gt2-legacy-profile-nav-avatar">
              <img src="${A}" />
            </div>
            <div>
              <a href="/${i.screenName()}" class="gt2-legacy-profile-name">${i.nameHTML()?i.nameHTML():`@${i.screenName()}`}</a>
              ${i.nameHTML()?`
                <div class="gt2-legacy-profile-screen-name-wrap">
                  <a href="/${i.screenName()}" class="gt2-legacy-profile-screen-name">
                  @<span>${i.screenName()}</span>
                  </a>
                </div>
              `:""}
            </div>
          </div>
          <div class="gt2-legacy-profile-nav-center">
            <a href="/${i.screenName()}">
              <div>${d("statsTweets")}</div>
              <div>0</div>
            </a>
            <a href="/${i.screenName()}/following">
              <div>${d("statsFollowing")}</div>
              <div>0</div>
            </a>
            <a href="/${i.screenName()}/followers">
              <div>${d("statsFollowers")}</div>
              <div>0</div>
            </a>
            <a href="/${i.screenName()}/likes">
              <div>${d("statsLikes")}</div>
              <div>0</div>
            </a>
          </div>
          <div class="gt2-legacy-profile-nav-right"></div>
        </div>
      `),c(".gt2-legacy-profile-info",()=>{t(".gt2-legacy-profile-info").append(`
          <a href="/${i.screenName()}" class="gt2-legacy-profile-name">${i.nameHTML()?i.nameHTML():`@${i.screenName()}`}</a>
          ${i.nameHTML()?`
            <div class="gt2-legacy-profile-screen-name-wrap">
              <a href="/${i.screenName()}" class="gt2-legacy-profile-screen-name">
                @<span>${i.screenName()}</span>
              </a>
            </div>
          `:""}
        `)})})}function ae(){c('body:not([data-switched-to-latest]) [data-testid=ScrollSnap-List] > div:nth-child(2) > [href="/home"][aria-selected=false]',e=>{e[0].click(),document.body.setAttribute("data-switched-to-latest","")})}function ie(){let e=window.innerWidth,a=`section:not(.gt2-trends-handled) div[data-testid=trend]:not(.gt2-trend-wrapped),
                  section[aria-labelledby^=accessible-list]:not(.gt2-trends-handled) a[href="/explore/tabs/for-you"] > div > span:not(.gt2-trend-wrapped)`;c(a,l=>{if(!t(a).parents("section").hasClass("gt2-trends-handled")&&t(a).parents("div[data-testid=sidebarColumn]").length){if(GM_getValue("opt_gt2").hideTrends){t(a).parents("section").parent().parent().remove();return}GM_getValue("opt_gt2").leftTrends&&(!GM_getValue("opt_gt2").smallSidebars&&e>1350||GM_getValue("opt_gt2").smallSidebars&&e>1230)&&(t(".gt2-trends").length&&t(".gt2-trends").remove(),t(a).parents("section").parent().parent().detach().addClass("gt2-trends").appendTo(".gt2-left-sidebar")),t(a).parents("section").addClass("gt2-trends-handled")}t(l).each(function(){let i=t(this).find("> div > div:nth-child(2) > span [dir]");if(i.length){t(this).addClass("gt2-trend-wrapped");let s=i.text(),n=encodeURIComponent(i.text().replace(/%/g,"%25")).replace(/'/g,"%27").replace(/(^\"|\"$)/g,"");i.html(`<a class="gt2-trend" href="/search?q=${s.includes("#")?n:`%22${n}%22`}">${s}</a>`)}})})}function le(e,a,l){GM_xmlhttpRequest({method:"GET",url:M("https://twitter.com/i/api/1.1/friends/following/list.json",{include_profile_interstitial_type:1,include_blocking:1,include_blocked_by:1,include_followed_by:1,include_want_retweets:1,include_mute_edge:1,include_can_dm:1,include_can_media_tag:1,skip_status:1,cursor:-1,user_id:a,count:3,with_total_count:!0}),headers:w(),onload:i=>{if(i.status==200){let s=JSON.parse(i.response),n;s.total_count<4?n=d(`followedBy${s.total_count}`).replace("$p1$",s.users.length>0?s.users[0].name:"").replace("$p2$",s.users.length>1?s.users[1].name:"").replace("$p3$",s.users.length>2?s.users[2].name:""):n=d("followedBy4Plus").replace("$p1$",s.users[0].name).replace("$p2$",s.users[1].name).replace("$nr$",s.total_count-2);let o="";for(let r of s.users)o+=`<img src="${r.profile_image_url_https}" alt="${r.name}" />`;l(`
            <a class="gt2-blocked-profile-followers-you-know" href="/${e}/followers_you_follow">
              ${o}
              <span>
                ${n.replaceEmojis()}
              </span>
            </a>
          `)}else i.status==401&&l("")}})}function se(){let e=u().split("/")[0].split("?")[0].split("#")[0];t("body").addClass("gt2-page-profile-youre-blocked"),j(e,a=>{let l=a.data.user;le(e,l.rest_id,i=>{let s=l.legacy,n=new Date(s.created_at),o={description:s.description.populateWithEntities(s.entities.description).replaceEmojis(),location:s.location!=""?`
                          <div class="gt2-blocked-profile-location">
                            ${v("location")}
                            <span>${s.location.replaceEmojis()}</span>
                          </div>`:null,url:s.url?`
                          <a href="${s.entities.url.urls[0][GM_getValue("opt_gt2").expandTcoShortlinks?"expanded_url":"url"]}" class="gt2-blocked-profile-url">
                            ${v("url")}
                            <span>${s.entities.url.urls[0].display_url}</span>
                          </a>`:null,joinDate:`<div class="gt2-blocked-profile-joined-at">
                          ${v("calendar")}
                          <span>
                            ${d("joinDate").replace("$date$",n.toLocaleDateString(_(),{month:"long",year:"numeric"}))}
                          </span>
                        </div>`,birthday:l.legacy_extended_profile&&l.legacy_extended_profile.birthdate?(()=>{let r=l.legacy_extended_profile.birthdate,g,p=new Date(Date.UTC(r.year||1970,r.month||1,r.day||1));if(r.year&&!r.month&&!r.day)g=d("bornYear").replace("$year$",p.toLocaleDateString(_(),{year:"numeric"}));else{let h={};r.year&&(h.year="numeric"),r.month&&(h.month="long"),r.day&&(h.day="numeric"),g=d("bornDate").replace("$date$",p.toLocaleDateString(_(),h))}return`
                            <div class="gt2-blocked-profile-birthday">
                            ${v("balloon")}
                              <span>${g}</span>
                            </div>`})():null};for(let r of o.description.match(/(@[0-9A-Za-z_]+)/g)||[])o.description=o.description.replace(r,`<a href="/${r.slice(1)}">${r}</a>`);t("a[href$='/header_photo'] + div > div:nth-child(2)").after(`
          <div class="gt2-blocked-profile-description">${o.description}</div>
          <div class="gt2-blocked-profile-items">
            ${o.location?o.location:""}
            ${o.url?o.url:""}
            ${o.birthday?o.birthday:""}
            ${o.joinDate}
          </div>
        `),t('.gt2-blocked-profile-items + div [href$="/following"]').length||t(".gt2-blocked-profile-items").after(`
            <div class="gt2-blocked-profile-ff">
              <a href="/${e}/following">
                <span>${s.friends_count.humanizeShort()}</span> ${d("statsFollowing")}
              </a>
              <a href="/${e}/followers">
                <span>${s.followers_count.humanizeShort()}</span> ${d("statsFollowers")}
              </a>
            </div>
          `),t(".gt2-blocked-profile-items + div").after(i),c(".gt2-legacy-profile-name",()=>{t(".gt2-legacy-profile-info .gt2-legacy-profile-fyk").length||t(".gt2-legacy-profile-info .gt2-legacy-profile-items").append(`
              ${o.description?`<div class="gt2-legacy-profile-description">${o.description}</div>`:""}
              ${o.location?`<div class="gt2-legacy-profile-item">${o.location}</div>`:""}
              ${o.url?`<div class="gt2-legacy-profile-item">${o.url}</div>`:""}
              ${o.birthday?`<div class="gt2-legacy-profile-item">${o.birthday}</div>`:""}
              <div class="gt2-legacy-profile-item">${o.joinDate}</div>
              <div class="gt2-legacy-profile-fyk">${i}</div>
            `)}),c(".gt2-legacy-profile-info > :first",r=>t(r).parent().attr("data-profile-id",l.rest_id))})})}GM_getValue("opt_gt2").hideTranslateTweetButton||c(`[data-testid=tweet] [lang],
                        [data-testid=tweet] + div > div:nth-child(2) [role=link] [lang]`,function(e){let a=t(e);if(a.siblings().length)return;let l=a.attr("lang"),i=_();i=i=="en-GB"?"en":i,l!=i&&l!="und"&&a.first().after(`
          <div class="gt2-translate-tweet">
            ${d("translateTweet")}
          </div>
        `)}),t("body")[0].addEventListener("click",function(e){if(!t(e.target).is(".gt2-translate-tweet, .gt2-legacy-profile-info [data-testid=UserDescription] + [role=button] span"))return;e.preventDefault(),console.log("translating tweet");let a=t(e.target).is(".gt2-translate-tweet")?e.target:t(e.target).parents("[role=button]")[0];if(t(a).parent().find(".gt2-translated-tweet").length){t(a).addClass("gt2-hidden"),t(a).parent().find(".gt2-translated-tweet, .gt2-translated-tweet-info").removeClass("gt2-hidden");return}let l=t(a).parents("article[data-testid=tweet]").length?t(a).parents("article[data-testid=tweet]").find(`> div > div > div > div > div > div:nth-child(1) a[href*='/status/'],
               div[data-testid=tweet] + div > div:nth-child(3) a[href*='/status/']`).attr("href").split("/")[3]:null;t(a).parents("[role=link]").parents("article[data-testid=tweet]").length?$(l,i=>W(a,i.quoted_status_id_str)):t(a).parents("article[data-testid=tweet]").find("[role=link] [lang]").length?$(l,i=>W(a,l,i.quoted_status_id_str)):W(a,l)},!0);function W(e,a,l){let i=t(e).is(".gt2-translate-tweet");GM_setValue("tmp_translatedTweetInfo",d("translatedTweetInfo"));let s=`https://twitter.com/i/api/1.1/strato/column/None/${i?`tweetId=${a}`:`profileUserId=${t(".gt2-legacy-profile-info").data("profile-id")}`},destinationLanguage=None,translationSource=Some(Google),feature=None,timeout=None,onlyCached=None/translation/service/translate${i?"Tweet":"Profile"}`;GM_xmlhttpRequest({method:"GET",url:s,headers:w(i?{referer:`https://twitter.com/i/status/${a}`}:{}),onload:function(n){if(n.status=="200"){let o=JSON.parse(n.response);i||(o=o.profileTranslation),console.log(o);let r=o.translation;if(o.entities){if(l&&o.entities.urls){let g=o.entities.urls.find(p=>p.expanded_url.endsWith(l));g&&(r=r.replace(` ${g.url}`,""),o.entities.urls=o.entities.urls.filter(p=>!p.expanded_url.endsWith(l)))}r=r.populateWithEntities(o.entities)}t(e).addClass("gt2-hidden"),t(e).after(`
            <div class="gt2-translated-tweet-info">
              ${GM_getValue("tmp_translatedTweetInfo").replace("$lang$",o.localizedSourceLanguage).replace("$source$",`
                  <a href="https://translate.google.com">
                    ${v("google")}
                  </a>
                `)}
            </div>
            <div class="gt2-translated-tweet">
              ${r.replaceEmojis()}
            </div>
          `)}else console.error("Error occurred while translating."),console.error(s),console.error(n)}})}if(t("body")[0].addEventListener("click",function(e){t(e.target).is(".gt2-translated-tweet-info")&&(e.preventDefault(),t(e.target).parent().find(".gt2-translated-tweet, .gt2-translated-tweet-info").addClass("gt2-hidden"),t(e.target).prevAll(".gt2-translate-tweet, [role=button]").removeClass("gt2-hidden"))},!0),t("body").on("click",".gt2-nav .gt2-compose",()=>{t("header a[href='/compose/tweet'] > div").click()}),t("body").on("click",".gt2-toggle-navbar-dropdown",()=>{console.log("navbar toggled");let e=O();t("header nav > [data-testid=AppTabBar_More_Menu]").click();let a="div[role=menu][style^='max-height: calc'].r-ipm5af > div > div > div";c(`${a} `,l=>{if(t(a).find("a[href='/explore']").length)return;let i=l[0].querySelector("[role=separator]").parentElement.outerHTML;l[0].insertAdjacentHTML("afterbegin",i);let s=[{sel:`a[href='/${e.screenName}']`,name:"Profile"},{sel:"a[href$='/lists']",name:"Lists"},{sel:"a[href$='/bookmarks']",name:"Bookmarks"},{sel:"a[href$='/communities']",name:"Communities"},{sel:"a[href='/explore']",name:"Explore"}];for(let n of s.reverse()){if(!t("header nav").find(n.sel).length)continue;let o=t("header nav").find(n.sel).clone();o.children().append(`<span>${d(`nav${n.name}`)}</span>`),o.prependTo(a)}document.querySelectorAll(`${a} [aria-expanded=false]`).forEach(n=>{n.click(),n.nextElementSibling.insertAdjacentHTML("afterend",i)}),t('<a href="/logout" class="gt2-toggle-logout">Logout</a>').appendTo(a)})}),t("body").on("click",".gt2-toggle-acc-switcher-dropdown",function(){t("body").addClass("gt2-acc-switcher-active"),t("div[data-testid=SideNav_AccountSwitcher_Button]").click(),t(".gt2-style-acc-switcher-dropdown").remove();let e=t(".gt2-toggle-acc-switcher-dropdown")[0].getBoundingClientRect();t("html").prepend(`
      <style class="gt2-style-acc-switcher-dropdown">
        #layers > div:nth-child(2) > div > div > div:nth-child(2) {
          left: ${Math.round(e.left)-274}px !important;
          top: ${Math.round(e.top)+35}px !important;
        }
      </style>
    `)}),t("body").on("click",":not(.gt2-toggle-acc-switcher-dropdown):not(div[data-testid=SideNav_AccountSwitcher_Button])",function(e){e.target.closest('[d^="M22.25 12c0-1.43-.88"]')||setTimeout(function(){t("a[href='/i/flow/login']").length||(t("body").removeClass("gt2-acc-switcher-active"),document.querySelector(".gt2-style-verification")?.remove())},2e3)}),t("body").on("click","div[data-testid=primaryColumn] > div > div:nth-child(2)",e=>t(e.currentTarget).addClass("gt2-compose-large")),t("body").on("click",".gt2-toggle-lo-nightmode",()=>{let e=document.cookie.match(/night_mode=1/)?0:1;document.cookie="night_mode=; Max-Age=0;";let a=new Date;a.setDate(a.getDate()+500),document.cookie=`night_mode=${e}; expires=${a.toUTCString()}; path=/; domain=.twitter.com`,document.cookie=`night_mode=${e}; expires=${a.toUTCString()}; path=/; domain=.x.com`,window.location.reload()}),t("body").on("click",".gt2-sidebar-notice-close",function(){t(this).parents(".gt2-sidebar-notice").hasClass("gt2-update-notice")&&GM_setValue(`sb_notice_ack_update_${GM_info.script.version}`,!0),t(this).parents(".gt2-sidebar-notice").remove()}),t("body").on("click",'div[data-testid=placementTracking] div[data-testid$="-unblock"]',()=>t("[class^=gt2-blocked-profile]").remove()),t(document).on("click",".gt2-profile-not-found [data-testid=primaryColumn] > div > div:nth-child(2) > div > div > div:nth-child(2) > div[role=button]",()=>t("body").removeClass("gt2-profile-not-found")),t(document).on("mouseover",`.gt2-opt-expand-tco-shortlinks div:not([data-testid=placementTracking]) > div > article[data-testid=tweet]:not(.gt2-tco-expanded),
  .gt2-opt-expand-tco-shortlinks.gt2-page-tweet [data-testid=primaryColumn] section > h1 + div > div > div:nth-child(1) article:not(.gt2-tco-expanded)`,function(){let e=t(this);if(e.addClass("gt2-tco-expanded"),!e.find('a[href^="http://t.co"], a[href^="https://t.co"], [data-testid="card.wrapper"]').length)return;let a=!e.find("time").length&&t("body").is(".gt2-page-tweet")?u().split("/")[2].split("?")[0].split("#")[0]:e.find("time").parent().attr("href").split("/status/")[1];$(a,l=>{e.find('a[href^="http://t.co"], a[href^="https://t.co"]').each(function(){t(this).attr("href",l.entities.urls.find(i=>i.url==t(this).attr("href").split("?")[0]).expanded_url)}),e.find('[data-testid="card.layoutSmall.media"] + *:not(a)').each(function(){t(this).wrap(`<a href="${l.entities.urls.find(i=>i.url==l.cards.players.find(s=>Object.values(s.images)[0].image_url.match(t(this).prev().find("img[src*=card_img]").attr("src").match(/card_img\/(\d+)/)[1])).url).expanded_url}"></a>`)})})}),t(document).on("mouseover",".gt2-opt-expand-tco-shortlinks.gt2-page-profile:not(.gt2-opt-legacy-profile) [data-testid=primaryColumn] > div > div:nth-child(2) > div > div > div:nth-child(1):not(.gt2-tco-expanded), .gt2-opt-expand-tco-shortlinks [data-testid=UserCell]",function(){let e=t(this);if(e.addClass("gt2-tco-expanded"),!e.find('a[href^="http://t.co"], a[href^="https://t.co"]').length)return;let a=e.is("[data-testid=UserCell]")?e.find("> div > div:nth-child(2) > div:nth-child(1) a").attr("href").slice(1):u().split("/")[0].split("?")[0].split("#")[0];j(a,l=>{let i=l.data.user.legacy.entities,s=[];i.description&&s.push(...i.description.urls),i.url&&s.push(...i.url.urls),e.find('a[href^="http://t.co"], a[href^="https://t.co"]').each(function(){t(this).attr("href",s.find(n=>n.url==t(this).attr("href").split("?")[0].split("#")[0]).expanded_url)})})}),GM_getValue("opt_gt2").enableQuickBlock){let e;t("body").on("mouseover",'[data-testid$="-follow"]:not([data-gt2-qb-state])',a=>{let l=t(a.target).parents('[data-testid$="-follow"]');l.attr("data-gt2-qb-state","offer-pending"),e=setTimeout(()=>{l.attr("data-gt2-qb-state","offer"),l.find("> div > span").append(`
    			<span class="gt2-qb-block">${d("qbBlock")}</span>
    			<span class="gt2-qb-blocked">${d("qbBlocked")}</span>
    			<span class="gt2-qb-unblock">${d("qbUnblock")}</span>
  		  `)},3e3)}),t("body").on("click",'[data-testid$="-follow"][data-gt2-qb-state=offer]',a=>{a.stopImmediatePropagation();let l=t(a.target).parents('[data-testid$="-follow"]'),i=l.attr("data-testid").slice(0,-7);q(i,!0,()=>{console.log(`quickblock: ${i}`),l.attr("data-gt2-qb-state","blocked")})}),t("body").on("click",'[data-testid$="-follow"][data-gt2-qb-state=blocked]',a=>{a.stopImmediatePropagation();let l=t(a.target).parents('[data-testid$="-follow"]'),i=l.attr("data-testid").slice(0,-7);q(i,!1,()=>{console.log(`quickunblock: ${i}`),l.removeAttr("data-gt2-qb-state"),l.find("[class^=gt2-qb]").remove()})}),t("body").on("mouseleave",`[data-testid$="-follow"][data-gt2-qb-state^=offer],
								  [data-testid$="-unfollow"][data-gt2-qb-state^=offer]`,a=>{let l=t(a.target).parents('[data-testid$="-follow"]');l.removeAttr("data-gt2-qb-state"),l.find("[class^=gt2-qb]").remove(),clearTimeout(e)})}if(t("body").on("click",'[data-testid$="-follow"]',e=>t(e.target).parents('[data-testid$="-follow"]').attr("data-gt2-just-clicked-follow",1)),t("body").on("mouseleave",'[data-testid$="-unfollow"][data-gt2-just-clicked-follow]',e=>t(e.target).parents('[data-testid$="-unfollow"]').removeAttr("data-gt2-just-clicked-follow")),t("body").on("click",".gt2-legacy-profile-nav-avatar",()=>t("div[data-testid=primaryColumn] > div > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(2)").find('a[href$="/photo"] img, a[href$="/nft"] img').first().click()),c(`[data-testid=tweet] [href^="/"][href*="/photo/1"] [data-testid=tweetPhoto],
                      [data-testid=tweet] [data-testid=previewInterstitial]`,e=>{if(GM_getValue("opt_gt2").showMediaWithContentWarnings&&GM_getValue("opt_gt2").showMediaWithContentWarningsSel<7){let a=t(e).closest("[data-testid=tweet]");if(t(e).closest("[aria-labelledby]").find("> div > div > div > div:nth-child(2)").length){let l=t("body").is(".gt2-page-tweet")?u().split("/")[2].split("?")[0].split("#")[0]:a.find("time").parent().attr("href").split("/status/")[1];F(l,i=>{let s=i.extended_entities.media.filter(n=>n.hasOwnProperty("sensitive_media_warning")).map(n=>["adult_content","graphic_violence","other"].reduce((o,r,g)=>o+(n.sensitive_media_warning[r]?Math.pow(2,g):0),0)).reduce((n,o)=>n|o);console.log(`cw id: ${l}, opt: ${GM_getValue("opt_gt2").showMediaWithContentWarningsSel} score: ${s}`),(s&GM_getValue("opt_gt2").showMediaWithContentWarningsSel)==s&&a.attr("data-gt2-show-media",1)})}}}),GM_getValue("opt_gt2").hideTweetAnalytics&&c('[data-testid=tweet] [href$="/analytics"]',e=>e[0].parentElement.classList.add("gt2-hidden")),t("body").on("click",'[data-testid="accessibilityScreen"] > div:nth-child(3) label [aria-labelledby]',function(){GM_setValue("opt_display_highContrast",!t(this).find("input").is("[checked]")),k()}),c("body:not(.gt2-opt-color-override) [data-testid=SideNav_NewTweet_Button]",e=>{let a=t(e).css("background-color");a!=GM_getValue("opt_display_userColor")&&(GM_setValue("opt_display_userColor",a),k())}),new MutationObserver(e=>{e.forEach(a=>{let l=a.target[a.attributeName]["background-color"];a.oldValue&&l!=""&&(GM_setValue("opt_display_bgColor",l),k())})}).observe(t("body")[0],{attributes:!0,attributeOldValue:!0,attributeFilter:["style"]}),new MutationObserver(e=>{e.forEach(a=>{let l=a.target[a.attributeName]["font-size"],i=a.oldValue?.match(/font-size: (\d+px);/);i&&l!=""&&l!=i[1]&&(GM_setValue("opt_display_fontSize",l),k())})}).observe(t("html")[0],{attributes:!0,attributeOldValue:!0,attributeFilter:["style"]}),GM_getValue("opt_gt2").hideMessageBox&&c('.gt2-opt-hide-message-box [data-testid=DMDrawer] path[d^="M12 19.344l-8.72"]',e=>{console.log("Minimized DMDrawer"),t(e).parents("[role=button]").click()}),GM_getValue("opt_gt2").hideFollowSuggestions){let e=function(a){if(!a)return a;if(a.prev().length){if(a=a.prev(),a.find("article").length)return;a.addClass("gt2-hidden")}else setTimeout(()=>{a=e(a)},100);return a};c(["topics/picker","connect_people","lists/suggested"].filter((a,l)=>(GM_getValue("opt_gt2").hideFollowSuggestionsSel&Math.pow(2,l))==Math.pow(2,l)).map(a=>`[data-testid=primaryColumn] section [href^="/i/${a}"]`).join(", "),a=>{let l=t(a).parents("[data-testid=cellInnerDiv]").addClass("gt2-hidden");l.next().find("div > div:empty").length&&l.next().addClass("gt2-hidden");for(let i=0;i<6;i++)l=e(l)})}c("[data-testid=tweet] [role=group]",e=>t(e).find("[role=button] *").attr("data-gt2-color-override-ignore","")),c('path[d^="M22.5 12.5c0-1.58-.875"]',e=>t(e).parents("svg").attr("data-gt2-color-override-ignore","")),c(`[data-gt2-path-modal="i/display"] div:nth-last-child(2) > div > [role=radiogroup],
                      [data-gt2-path="settings/display"] div:nth-last-child(2) > div > [role=radiogroup]`,e=>{let a=t(e).parents("[aria-labelledby]");a.find("[name*=COLOR_PICKER]").parents("label").parent().find("*").attr("data-gt2-color-override-ignore",""),a.find("[dir]:nth-child(3) + div:not([dir]) > div > div > div[dir] + div *").attr("data-gt2-color-override-ignore","")}),c(`[data-testid=cellInnerDiv] article,
                      [data-testid=cellInnerDiv] a[href^="/i/status/"]`,e=>t(e).parents("[data-testid=cellInnerDiv]").children().attr("data-gt2-divider-add-ignore","")),c('path[d^="M23.61.15c-.375"]',e=>t(e).parents("[role=button]").attr("data-gt2-bell-full-color","")),c('path[d^="M23.24 3.26h-2.425V"]',e=>t(e).parents("[role=button]").removeAttr("data-gt2-bell-full-color",""));function U(){if(t("html").is("[data-minimalscrollbar]"))return 0;let e=t("<div/>").css({position:"absolute",top:"-100px",overflowX:"hidden",overflowY:"scroll"}).prependTo("body"),a=e[0].offsetWidth-e[0].clientWidth;return e.remove(),a}function k(){let e={"rgb(255, 255, 255)":{bg:"#e6ecf0",elem:"rgb(255, 255, 255)",elemSel:"rgb(247, 249, 250)",gray:"rgb(91, 112, 131)",grayDark:"#e6ecf0",grayDark2:"rgb(196, 207, 214)",grayLight:"rgb(101, 119, 134)",navbar:"#ffffff",text:"rgb(20, 23, 26)",text2:"white",shadow:"rgba(101, 119, 134, 0.15)",backdrop:"rgba(0, 0, 0, 0.4)"},"rgb(21, 32, 43)":{bg:"#10171e",elem:"rgb(21, 32, 43)",elemSel:"rgb(25, 39, 52)",gray:"rgb(101, 119, 134)",grayDark:"#38444d",grayDark2:"rgb(61, 84, 102)",grayLight:"rgb(136, 153, 166)",navbar:"#1c2938",text:"rgb(255, 255, 255)",text2:"white",shadow:"rgba(136, 153, 166, 0.15)",backdrop:"rgba(91, 112, 131, 0.4)"},"rgb(0, 0, 0)":{bg:"#000000",elem:"#000000",elemSel:"rgb(21, 24, 28)",gray:"#657786",grayDark:"#38444d",grayDark2:"rgb(47, 51, 54)",grayLight:"rgb(110, 118, 125)",navbar:"rgb(21, 24, 28)",text:"rgb(217, 217, 217)",text2:"white",shadow:"rgba(255, 255, 255, 0.15)",backdrop:"rgba(91, 112, 131, 0.4)"}},a={"rgb(255, 255, 255)":{gray:"rgb(59, 76, 92)",grayDark:"rgb(170, 184, 194)",grayLight:"rgb(59, 76, 92)",text:"rgb(20, 29, 38)"},"rgb(21, 32, 43)":{elemSel:"rgb(24, 36, 48)",gray:"rgb(184, 203, 217)",grayDark:"rgb(56, 68, 88)",grayLight:"rgb(184, 203, 217)",text2:"rgb(15, 20, 25)"},"rgb(0, 0, 0)":{bg:"rgb(5, 5, 5)",elem:"rgb(5, 5, 5)",elemSel:"rgb(14, 16, 18)",gray:"rgb(146, 156, 166)",grayDark:"rgb(61, 65, 69)",grayLight:"rgb(146, 156, 166)",text:"rgb(255, 255, 255)",text2:"rgb(15, 20, 25)"}},l={blue:["29, 161, 242","38, 74, 157","112, 200, 255"],green:["23, 191, 99","9, 102, 51","102, 211, 151"],red:["224, 36, 94","159, 12, 58","240, 152, 179"],redDark:["202, 32, 85","169, 36, 78","216, 137, 161"],yellow:["255, 173, 31","121, 80, 11","255, 203, 112"]};if(GM_getValue("gt2_initialized")==null&&m())c('h2 > a[href="/i/keyboard_shortcuts"] span',()=>{GM_setValue("opt_display_userColor",t('a[href="/i/keyboard_shortcuts"]').css("color")),GM_setValue("opt_display_bgColor",t("body").css("background-color")),GM_setValue("opt_display_highContrast",!1),GM_setValue("opt_display_fontSize",t("html").css("font-size")),GM_setValue("gt2_initialized",!0),window.location.reload()});else{for(let[r,g]of Object.entries(GM_getValue("opt_gt2")))g&&t("body").addClass(`gt2-opt-${r.toKebab()}${typeof g=="number"?`-${g}`:""}`);t("body").removeClass("gt2-acc-switcher-active"),t(".gt2-style").length&&t(".gt2-style, .gt2-style-pickr").remove();let i=GM_getValue("opt_display_bgColor"),s=GM_getValue("opt_display_highContrast"),n=GM_getValue("opt_display_fontSize"),o=GM_getValue("opt_display_userColor");m()||(i=document.cookie.match(/night_mode=1/)?"rgb(21, 32, 43)":document.cookie.match(/night_mode=2/)?"rgb(0, 0, 0)":"rgb(255, 255, 255)",s=!1,n="15px",o="rgb(29, 161, 242)"),i=="rgb(5, 5, 5)"&&(i="rgb(0, 0, 0)"),GM_getValue("opt_gt2").disableHexagonAvatars&&c("#hex-hw-shapeclip-clipconfig path",r=>t(r).parent().html(GM_getValue("opt_gt2").squareAvatars?'<rect cx="100" cy="100" ry="10" rx="10" width="200" height="200"></rect>':'<circle cx="100" cy="100" r="100" />').attr("transform","scale(0.005 0.005)")),t("html").prepend(`
        <style class="gt2-style">
          ${GM_getResourceText("css").replace("--bgColors:$;",Object.entries(Object.assign({},e[i],s?a[i]:{})).map(r=>`--color-${r[0].toKebab()}: ${r[1]};`).join(" ")).replace("--baseColors:$;",Object.entries(l).map(r=>[r[0].toKebab(),r[1][s?i=="rgb(255, 255, 255)"?1:2:0]]).map(r=>`--color-raw-${r[0]}: ${r[1]}; --color-${r[0]}: rgb(${r[1]});`).join(" ")).replace("$userColor",o.slice(4,-1)).replace("$globalFontSize",n).replace("$fontOverride",GM_getValue("opt_gt2").fontOverrideValue).replace("$colorOverride",GM_getValue("opt_gt2").colorOverrideValue).replace("$scrollbarWidth",`${U()}px`)}
        </style>
        <style class="gt2-style-pickr">${GM_getResourceText("pickrCss")}</style>`)}t("gt2-nav").length||(m()?D():R())}t(window).on("resize",()=>{let e=window.innerWidth;!GM_getValue("opt_gt2").smallSidebars&&e<=1350||GM_getValue("opt_gt2").smallSidebars&&e<=1230?t(".gt2-left-sidebar > *").each(function(){t(this).attr("data-gt2-detached-from-left-sidebar",1).detach().insertBefore("div[data-testid=sidebarColumn] > div > div:nth-child(2) > div > div > div > :last-child")}):t("[data-gt2-detached-from-left-sidebar]").each(function(){t(this).removeAttr("data-gt2-detached-from-left-sidebar").detach().appendTo(".gt2-left-sidebar")})}),function(){let e=window.pageYOffset,a=(window.innerWidth-U())/3-15;t(window).on("scroll",()=>{let l=window.pageYOffset;if(e>1500&&l==0&&u().match(/^(?:search\?|explore\/?$)/)){window.scroll(0,e);return}e<l?t("body").addClass("gt2-scrolled-down"):t("body").removeClass("gt2-scrolled-down"),e=l,l>a?t("body").addClass("gt2-scrolled-down-banner"):(t("body").removeClass("gt2-scrolled-down-banner"),t(".gt2-legacy-profile-banner img").css("transform",`translate3d(0px, ${l/a*42}%, 0px)`))})}();function H(e){if(e=e.split("?")[0].split("#")[0],!E(e)){let a=t("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");!a.find("> div:last-child:not(:first-child)").length&&t("body").attr("data-gt2-prev-path")!=e&&t(".gt2-legacy-profile-nav-right > div").appendTo(a)}}function T(e,...a){return a.some(l=>l==e.split("/")[0])}function x(e,a,l){return(a==null?!0:T(e,a))&&e.includes("/")&&l.some(i=>i==(i.includes("/")?e.split("/").slice(1).join("/"):e.split("/")[1]))}function E(e){return x(e,"i",["display","keyboard_shortcuts","flow","lists/add_member","report"])||x(e,"settings",["trends","profile"])||x(e,"compose",["tweet"])||x(e,"account",["add","switch"])||T(e,"search-advanced")||T(e,"intent")||e.match(/\/(photo|video)\/\d\/?$/)}function G(e,a){let l=()=>(a||u()).split("?")[0].split("#")[0],i=(...p)=>T(l(),...p),s=(p,h)=>x(l(),p,h),n=E(l());console.log(`[${e}]${n?" [modal]":""} ${l()}`),t("body").attr(`data-gt2-path${n?"-modal":""}`,l());let o=t("link[hreflang=default][data-rh=true]");o.length&&t("body").attr("data-gt2-path",o.attr("href")),(i("login")||!m()&&i(""))&&window.location.reload(),t("body").hasClass("gt2-css-inserted")||(k(),t("body").addClass("gt2-css-inserted"));let r="main > div > div > div";if(c(r,()=>{t(".gt2-left-sidebar").length||t(r).prepend('<div class="gt2-left-sidebar"></div>'),t(r).find("h1[data-testid=error-detail]").length&&!l().startsWith("settings/gt2")?t("body").addClass("gt2-page-error"):n||t("body").removeClass("gt2-page-error"),i("settings")&&(c('main a[href="/settings/about"]',J),l().startsWith("settings/gt2")&&(z(),B()))}),t("body").attr("data-gt2-prev-path")=="i/moment_maker"&&t(".gt2-nav").remove(),t(".gt2-nav").length||(m()?D():R()),n||(t(".gt2-nav-left > a").removeClass("active"),t(`.gt2-nav-left > a[href^='/${l().split("/")[0]}']`).addClass("active")),i("search","explore")?(t(".gt2-search").empty(),t("body").removeClass("gt2-search-added")):n||Z(),m()||t("body").addClass("gt2-not-logged-in"),ie(),GM_getValue("opt_gt2").hideFollowSuggestions&&(GM_getValue("opt_gt2").hideFollowSuggestionsLocSel&2)==2){let p=GM_getValue("opt_gt2").hideFollowSuggestionsSel;(p&1)==1&&c('div[data-testid=sidebarColumn] section [href^="/i/topics/"]',h=>t(h).parents("section").parent().parent().remove()),(p&2)==2&&c("div[data-testid=sidebarColumn] aside [data-testid=UserCell]",h=>t(h).parents("aside").parent().remove())}if(i("settings")&&!n?l().startsWith("settings/gt2")||(window.innerWidth<1005&&t("main section").remove(),t(".gt2-settings-header, .gt2-settings").remove()):n||t(".gt2-settings-header, .gt2-settings").remove(),s(null,["status"])||l().startsWith("i/web/status/")){t("body").addClass("gt2-page-tweet");let p=location.pathname.match(/\/status\/(\d+)/);p&&$(p[1],h=>{c(`[data-testid=tweet][tabindex="-1"] [href*="${p[1]}"] time`,C=>{window.scroll(0,window.pageYOffset-75),GM_getValue("opt_gt2").hideTweetAnalytics&&C[0].parentElement.parentElement.querySelectorAll(":scope > span").forEach(N=>N.classList.add("gt2-hidden")),h.source&&C[0].parentElement.insertAdjacentHTML("afterend",`<span class="gt2-tweet-source">${h.source}</span>`)})})}else n||t("body").removeClass("gt2-page-tweet");let g=[];!GM_getValue(`sb_notice_ack_update_${GM_info.script.version}`)&&GM_getValue("opt_gt2").updateNotifications&&g.push(ee()),g.push(K()),(!n||s("intent",["user","follow"]))&&(!(i("","explore","home","hashtag","i","messages","notifications","places","search","settings","404")||s(null,["communities","followers","followers_you_follow","following","lists","moments","status","topics"]))||s("intent",["user","follow"])?(t("body").addClass("gt2-page-profile").removeClass("gt2-profile-not-found gt2-page-profile-youre-blocked"),t("[class^=gt2-blocked-profile-]").remove(),t(".gt2-tco-expanded").removeClass("gt2-tco-expanded"),GM_getValue("opt_gt2").legacyProfile&&(t("body").attr("data-gt2-prev-path")!=l()&&t("a[href$='/photo'] img").data("alreadyFound",!1),te()),GM_getValue("opt_gt2").profileMediaRedirect&&l().split("/").length==1&&(!document.body.dataset.hasOwnProperty("gt2PrevPath")||document.body.dataset.gt2PrevPath.split("/")[0]!=l().split("/")[0])&&(c('[href$="/media"][aria-selected=false]',p=>p[0].click()),console.log("redirecting to /media")),GM_getValue("opt_gt2").leftMedia&&(!GM_getValue("opt_gt2").smallSidebars&&window.innerWidth>1350||GM_getValue("opt_gt2").smallSidebars&&window.innerWidth>1230)&&c("[data-testid=sidebarColumn] a:nth-child(1) [data-testid=tweetPhoto]",p=>{t(".gt2-profile-media").length&&t(".gt2-profile-media").remove();let h=t(p).parents("a[role=link]").parent().parent().parent().parent().parent();h.parent().children().length==1&&(h=h.parent()),h.detach().addClass("gt2-profile-media").appendTo(".gt2-left-sidebar")})):(t("body").removeClass("gt2-page-profile"),t(`.gt2-legacy-profile-banner,
           .gt2-legacy-profile-nav,
           .gt2-legacy-profile-info`).remove())),X(g),c(`div[data-testid=placementTracking] div[data-testid$="-unblock"],
                        [data-testid=emptyState] [href="https://support.twitter.com/articles/20172060"]`,se),l().split("/")[0]=="home"?GM_getValue("opt_gt2").forceLatest&&ae():document.body.removeAttribute("data-switched-to-latest"),n||t("body").attr("data-gt2-prev-path",l())}G("init");const V=typeof exportFunction=="function"?exportFunction:e=>e,S=unsafeWindow.wrappedJSObject||unsafeWindow,L=S.History.prototype,re=V(L.pushState,S);L.pushState=V(function(){let e=arguments.length>2?arguments[2].slice(1):"???";H(e),re.apply(this,arguments),G("push",e)},S);const oe=V(L.replaceState,S);L.replaceState=V(function(){let e=arguments.length>2?arguments[2].slice(1):"???";H(e),oe.apply(this,arguments),G("replace",e)},S),window.addEventListener("popstate",function(){H(u()),G("pop",u())});let ne=Range.prototype.selectNodeContents;Range.prototype.selectNodeContents=function(){arguments[0].textContent=arguments[0].textContent.replace(/&t=.*$/,""),ne.apply(this,arguments)}})(jQuery,waitForKeyElements);
