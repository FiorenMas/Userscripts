// ==UserScript==
// @name                     GoogleGPT 🤖
// @author                   KudoAI
// @namespace                https://kudoai.com
// @version                  2025.6.9.2
// @license                  MIT
// @icon                     https://assets.googlegpt.io/images/icons/app/black/icon48.png?v=12a91c0
// @icon64                   https://assets.googlegpt.io/images/icons/app/black/icon64.png?v=12a91c0
// @compatible               brave
// @compatible               chrome
// @compatible               chromebeta
// @compatible               chromecanary
// @compatible               chromedev
// @compatible               edge
// @compatible               edgebeta
// @compatible               edgecanary
// @compatible               edgedev
// @compatible               fennec
// @compatible               firefox
// @compatible               firefoxbeta
// @compatible               firefoxnightly
// @compatible               ghost
// @compatible               iceraven
// @compatible               ironfox
// @compatible               lemur
// @compatible               librewolf
// @compatible               mises
// @compatible               opera after allowing userscript manager access to search page results in opera://extensions
// @compatible               operaair after allowing userscript manager access to search page results in opera://extensions
// @compatible               operagx after allowing userscript manager access to search page results in opera://extensions
// @compatible               qq
// @compatible               quetta
// @compatible               safari
// @compatible               orion
// @compatible               vivaldi
// @compatible               waterfox
// @compatible               whale
// @match                    *://*.google.com/search*
// @match                    *://*.google.ad/search*
// @match                    *://*.google.ae/search*
// @match                    *://*.google.com.af/search*
// @match                    *://*.google.com.ag/search*
// @match                    *://*.google.com.ai/search*
// @match                    *://*.google.al/search*
// @match                    *://*.google.am/search*
// @match                    *://*.google.co.ao/search*
// @match                    *://*.google.com.ar/search*
// @match                    *://*.google.as/search*
// @match                    *://*.google.at/search*
// @match                    *://*.google.com.au/search*
// @match                    *://*.google.az/search*
// @match                    *://*.google.ba/search*
// @match                    *://*.google.com.bd/search*
// @match                    *://*.google.be/search*
// @match                    *://*.google.bf/search*
// @match                    *://*.google.bg/search*
// @match                    *://*.google.com.bh/search*
// @match                    *://*.google.bi/search*
// @match                    *://*.google.bj/search*
// @match                    *://*.google.com.bn/search*
// @match                    *://*.google.com.bo/search*
// @match                    *://*.google.com.br/search*
// @match                    *://*.google.bs/search*
// @match                    *://*.google.bt/search*
// @match                    *://*.google.co.bw/search*
// @match                    *://*.google.by/search*
// @match                    *://*.google.com.bz/search*
// @match                    *://*.google.ca/search*
// @match                    *://*.google.cd/search*
// @match                    *://*.google.cf/search*
// @match                    *://*.google.cg/search*
// @match                    *://*.google.ch/search*
// @match                    *://*.google.ci/search*
// @match                    *://*.google.co.ck/search*
// @match                    *://*.google.cl/search*
// @match                    *://*.google.cm/search*
// @match                    *://*.google.cn/search*
// @match                    *://*.google.com.co/search*
// @match                    *://*.google.co.cr/search*
// @match                    *://*.google.com.cu/search*
// @match                    *://*.google.cv/search*
// @match                    *://*.google.com.cy/search*
// @match                    *://*.google.cz/search*
// @match                    *://*.google.de/search*
// @match                    *://*.google.dj/search*
// @match                    *://*.google.dk/search*
// @match                    *://*.google.dm/search*
// @match                    *://*.google.com.do/search*
// @match                    *://*.google.dz/search*
// @match                    *://*.google.com.ec/search*
// @match                    *://*.google.ee/search*
// @match                    *://*.google.com.eg/search*
// @match                    *://*.google.es/search*
// @match                    *://*.google.com.et/search*
// @match                    *://*.google.fi/search*
// @match                    *://*.google.com.fj/search*
// @match                    *://*.google.fm/search*
// @match                    *://*.google.fr/search*
// @match                    *://*.google.ga/search*
// @match                    *://*.google.ge/search*
// @match                    *://*.google.gg/search*
// @match                    *://*.google.com.gh/search*
// @match                    *://*.google.com.gi/search*
// @match                    *://*.google.gl/search*
// @match                    *://*.google.gm/search*
// @match                    *://*.google.gr/search*
// @match                    *://*.google.com.gt/search*
// @match                    *://*.google.gy/search*
// @match                    *://*.google.com.hk/search*
// @match                    *://*.google.hn/search*
// @match                    *://*.google.hr/search*
// @match                    *://*.google.ht/search*
// @match                    *://*.google.hu/search*
// @match                    *://*.google.co.id/search*
// @match                    *://*.google.ie/search*
// @match                    *://*.google.co.il/search*
// @match                    *://*.google.im/search*
// @match                    *://*.google.co.in/search*
// @match                    *://*.google.iq/search*
// @match                    *://*.google.is/search*
// @match                    *://*.google.it/search*
// @match                    *://*.google.je/search*
// @match                    *://*.google.com.jm/search*
// @match                    *://*.google.jo/search*
// @match                    *://*.google.co.jp/search*
// @match                    *://*.google.co.ke/search*
// @match                    *://*.google.com.kh/search*
// @match                    *://*.google.ki/search*
// @match                    *://*.google.kg/search*
// @match                    *://*.google.co.kr/search*
// @match                    *://*.google.com.kw/search*
// @match                    *://*.google.kz/search*
// @match                    *://*.google.la/search*
// @match                    *://*.google.com.lb/search*
// @match                    *://*.google.li/search*
// @match                    *://*.google.lk/search*
// @match                    *://*.google.co.ls/search*
// @match                    *://*.google.lt/search*
// @match                    *://*.google.lu/search*
// @match                    *://*.google.lv/search*
// @match                    *://*.google.com.ly/search*
// @match                    *://*.google.co.ma/search*
// @match                    *://*.google.md/search*
// @match                    *://*.google.me/search*
// @match                    *://*.google.mg/search*
// @match                    *://*.google.mk/search*
// @match                    *://*.google.ml/search*
// @match                    *://*.google.com.mm/search*
// @match                    *://*.google.mn/search*
// @match                    *://*.google.ms/search*
// @match                    *://*.google.com.mt/search*
// @match                    *://*.google.mu/search*
// @match                    *://*.google.mv/search*
// @match                    *://*.google.mw/search*
// @match                    *://*.google.com.mx/search*
// @match                    *://*.google.com.my/search*
// @match                    *://*.google.co.mz/search*
// @match                    *://*.google.com.na/search*
// @match                    *://*.google.com.ng/search*
// @match                    *://*.google.com.ni/search*
// @match                    *://*.google.ne/search*
// @match                    *://*.google.nl/search*
// @match                    *://*.google.no/search*
// @match                    *://*.google.com.np/search*
// @match                    *://*.google.nr/search*
// @match                    *://*.google.nu/search*
// @match                    *://*.google.co.nz/search*
// @match                    *://*.google.com.om/search*
// @match                    *://*.google.com.pa/search*
// @match                    *://*.google.com.pe/search*
// @match                    *://*.google.com.pg/search*
// @match                    *://*.google.com.ph/search*
// @match                    *://*.google.com.pk/search*
// @match                    *://*.google.pl/search*
// @match                    *://*.google.pn/search*
// @match                    *://*.google.com.pr/search*
// @match                    *://*.google.ps/search*
// @match                    *://*.google.pt/search*
// @match                    *://*.google.com.py/search*
// @match                    *://*.google.com.qa/search*
// @match                    *://*.google.ro/search*
// @match                    *://*.google.ru/search*
// @match                    *://*.google.rw/search*
// @match                    *://*.google.com.sa/search*
// @match                    *://*.google.com.sb/search*
// @match                    *://*.google.sc/search*
// @match                    *://*.google.se/search*
// @match                    *://*.google.com.sg/search*
// @match                    *://*.google.sh/search*
// @match                    *://*.google.si/search*
// @match                    *://*.google.sk/search*
// @match                    *://*.google.com.sl/search*
// @match                    *://*.google.sn/search*
// @match                    *://*.google.so/search*
// @match                    *://*.google.sm/search*
// @match                    *://*.google.sr/search*
// @match                    *://*.google.st/search*
// @match                    *://*.google.com.sv/search*
// @match                    *://*.google.td/search*
// @match                    *://*.google.tg/search*
// @match                    *://*.google.co.th/search*
// @match                    *://*.google.com.tj/search*
// @match                    *://*.google.tl/search*
// @match                    *://*.google.tm/search*
// @match                    *://*.google.tn/search*
// @match                    *://*.google.to/search*
// @match                    *://*.google.com.tr/search*
// @match                    *://*.google.tt/search*
// @match                    *://*.google.com.tw/search*
// @match                    *://*.google.co.tz/search*
// @match                    *://*.google.com.ua/search*
// @match                    *://*.google.co.ug/search*
// @match                    *://*.google.co.uk/search*
// @match                    *://*.google.com.uy/search*
// @match                    *://*.google.co.uz/search*
// @match                    *://*.google.com.vc/search*
// @match                    *://*.google.co.ve/search*
// @match                    *://*.google.vg/search*
// @match                    *://*.google.co.vi/search*
// @match                    *://*.google.com.vn/search*
// @match                    *://*.google.vu/search*
// @match                    *://*.google.ws/search*
// @match                    *://*.google.rs/search*
// @match                    *://*.google.co.za/search*
// @match                    *://*.google.co.zm/search*
// @match                    *://*.google.co.zw/search*
// @match                    *://*.google.cat/search*
// @match                    *://github.com/*/googlegpt*
// @include                  https://auth0.openai.com
// @connect                  am.aifree.site
// @connect                  api.binjie.fun
// @connect                  api.openai.com
// @connect                  api11.gptforlove.com
// @connect                  cdn.jsdelivr.net
// @connect                  chat-share.kudoai.workers.dev
// @connect                  chatai.mixerbox.com
// @connect                  chatgpt.com
// @connect                  fanyi.sogou.com
// @connect                  googlegpt.io
// @connect                  raw.githubusercontent.com
// @require                  https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.8.1/dist/chatgpt.min.js#sha256-/71AK4V0/J40zINYEriMeEWGIZ8qfyWMQu76ui3SBNs=
// @require                  https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha256-dppVXeVTurw1ozOPNE3XqhYmDJPOosfbKQcHyQSE58w=
// @require                  https://cdn.jsdelivr.net/npm/json5@2.2.3/dist/index.min.js#sha256-S7ltnVPzgKyAGBlBG4wQhorJqYTehj5WQCrADCKJufE=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@88bcc7b/assets/js/components/chatbot/buttons.js#sha256-aZlxmH1b2UdwQrZ/1zZQbaTATtQ8yQKhWR4qd/utC3Y=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@0329ace/assets/js/components/chatbot/icons.js#sha256-p89CrELJj8rguE8M4IjdMA4CYwX7iid+RNzvX3oOT2A=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@31b78fe/assets/js/components/chatbot/menus.js#sha256-Bj0pz4oKLEzoaJxiqtddJ4E5VtMbpDB2sqoE4kDBfSs=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@97173cc/assets/js/components/chatbot/replyBubble.js#sha256-sOVj/ESmlNMLCA13w2ZzqP5hVtcnqlQpbY9yvkFWNek=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@f10be07/assets/js/components/chatbot/tooltip.js#sha256-u01988VokQnOZmjIIIPRN2mLJtaID/I8G77iMNcDOp8=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@bb5451a/assets/js/lib/chatbot/api.js#sha256-nCFc1tcSAfGJT260Sn07YGEczKPrhXdj8UlrKi+ac8M=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@ecaeb55/assets/js/lib/chatbot/feedback.js#sha256-9Hm3fBS96DtWFdT5VwGDGvwZMpYIRfxGAQRaCGECeqA=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@f4da9d4/assets/js/lib/chatbot/log.js#sha256-kjt26UXbx44I0/iDOf50F/LbRtsYcSwMHrexImR4D5A=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@199128d/assets/js/lib/chatbot/prompts.js#sha256-6U2C3dVLpYixR3UCNABCfvNpRa/9gJZYR8fElXmhGVk=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@9b048ff/assets/js/lib/chatbot/session.js#sha256-S6MOdBjx8Hci4GDvYl4JlhSdrDk2oaRLU9DrdxyiIss=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@3732152/assets/js/lib/chatbot/ui.js#sha256-j2G0yOX1nHMYmwhV9oLlycdX05oZHLxqCW4voSfbchQ=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@b1e28ff/assets/js/lib/chatbot/userscript.js#sha256-SytCWuD3YOcYFDaVfpF8Pq67zDbV8cZcIENz+0zpZ40=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@9b048ff/assets/js/lib/dom.js/dist/dom.min.js#sha256-IGNj9Eoecq7QgY7SAs75wONajgN9Wg0NmCjKTCfu9CY=
// @require                  https://cdn.jsdelivr.net/npm/generate-ip@2.4.4/dist/generate-ip.min.js#sha256-aQQKAQcMgCu8IpJp9HKs387x0uYxngO+Fb4pc5nSF4I=
// @require                  https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js#sha256-g3pvpbDHNrUrveKythkPMF2j/J7UFoHbUyFQcFe1yEY=
// @require                  https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js#sha256-n0UwfFeU7SR6DQlfOmLlLvIhWmeyMnIDp/2RmVmuedE=
// @require                  https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js#sha256-e1fUJ6xicGd9r42DgN7SzHMzb5FJoWe44f4NbvZmBK4=
// @require                  https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js#sha256-Ffq85bZYmLMrA/XtJen4kacprUwNbYdxEKd0SqhHqJQ=
// @resource ggptIconBlack   https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@9db3bda/assets/images/icons/googlegpt/black/icon64.png.b64#sha256-yiTqggYRNsWcJtyIUDzFrPqrL3yeTaPCrEGAW0QFuPM=
// @resource ggptIconWhite   https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@9db3bda/assets/images/icons/googlegpt/white/icon64.png.b64#sha256-BYRq92cF5knykaKnmNi1U4CrwBC/jK1V+MGfH4NGui4=
// @resource ggptLSlogo      https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@9db3bda/assets/images/logos/googlegpt/flat/black-green/logo480x64.png.b64#sha256-fzSZhLVQQolCLWYr/h29NWfR1Yl4glHv1TcsveYYv+U=
// @resource ggptDSlogo      https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@9db3bda/assets/images/logos/googlegpt/flat/white-green/logo480x64.png.b64#sha256-3qRdGKhF3pojDqVVh/5kODIg7QvYbbLf4zFkEh5xoGc=
// @resource hljsCSS         https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/railscasts.min.css#sha256-nMf0Oxaj3sYJiwGCsfqNpGnBbcofnzk+zz3xTxtdLEQ=
// @resource rpgCSS          https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/gray.min.css#sha256-48sEWzNUGUOP04ur52G5VOfGZPSnZQfrF3szUr4VaRs=
// @resource rpwCSS          https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/white.min.css#sha256-6xBXczm7yM1MZ/v0o1KVFfJGehHk47KJjq8oTktH4KE=
// @grant                    GM_getValue
// @grant                    GM_setValue
// @grant                    GM_deleteValue
// @grant                    GM_cookie
// @grant                    GM_registerMenuCommand
// @grant                    GM_unregisterMenuCommand
// @grant                    GM_getResourceText
// @grant                    GM_xmlhttpRequest
// @grant                    GM.xmlHttpRequest
// @noframes
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/googlegpt.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/googlegpt.meta.js
// @homepageURL              https://www.googlegpt.io
// @supportURL               https://support.googlegpt.io
// @contributionURL          https://github.com/sponsors/KudoAI
// ==/UserScript==
(async()=>{window.env={browser:{language:chatgpt.getUserLanguage()},scriptManager:{name:(()=>{try{return GM_info.scriptHandler}catch{return"unknown"}})(),version:(()=>{try{return GM_info.version}catch{return"unknown"}})()}},["Chromium","Firefox","Chrome","Edge","Brave","Mobile"].forEach(e=>env.browser[`is${e=="Firefox"?"FF":e}`]=chatgpt.browser["is"+e]()),env.browser.isPortrait=env.browser.isMobile&&innerWidth<innerHeight,env.browser.isPhone=env.browser.isMobile&&innerWidth<=480,env.userLocale=location.hostname.endsWith(".com")?"us":location.hostname.split(".").pop(),env.scriptManager.supportsStreaming=/Tampermonkey|ScriptCat/.test(env.scriptManager.name),env.scriptManager.supportsTooltips=env.scriptManager.name=="Tampermonkey"&&parseInt(env.scriptManager.version.split(".")[0])>=5,window.inputEvents={},["down","move","up"].forEach(e=>inputEvents[e]=(window.PointerEvent?"pointer":env.browser.isMobile?"touch":"mouse")+e),window.xhr=typeof GM<"u"&&GM.xmlHttpRequest||GM_xmlhttpRequest,window.app={version:GM_info.script.version,chatgptjsVer:/chatgpt\.js@([\d.]+)/.exec(GM_info.scriptMetaStr)[1],commitHashes:{app:"2d42fcb",aiweb:"2a51ece"}},app.urls={resourceHost:`https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@${app.commitHashes.app}`};const S={app:await new Promise(e=>xhr({method:"GET",url:`${app.urls.resourceHost}/assets/data/app.json`,onload:t=>e(JSON.parse(t.responseText))})),msgs:await new Promise(e=>{const t=app.urls.resourceHost+"/greasemonkey/_locales/",o=(env.browser.language?env.browser.language.replace("-","_"):"en")+"/";let a=t+o+"messages.json",n=0;function s(){xhr({method:"GET",url:a,onload:d})}function d(i){try{const l=JSON.parse(i.responseText),c={};for(const r in l)typeof l[r]=="object"&&"message"in l[r]&&(c[r]=l[r].message);e(c)}catch{if(n++,n==3)return e({});a=env.browser.language.includes("-")&&n==1?a.replace(/(_locales\/[^_]+)_[^_]+(\/)/,"$1$2"):t+"en/messages.json",s()}}s()})};Object.assign(app,{...S.app,urls:{...app.urls,...S.app.urls},msgs:S.msgs}),app.urls.aiwebAssets=app.urls.aiwebAssets.replace("@latest",`@${app.commitHashes.aiweb}`),app.alerts={waitingResponse:`${app.msgs.alert_waitingFor} ${app.name} ${app.msgs.alert_response}...`,login:`${app.msgs.alert_login} @ `,checkCloudflare:`${app.msgs.alert_checkCloudflare} @ `,tooManyRequests:`${app.msgs.alert_tooManyRequests}.`,parseFailed:`${app.msgs.alert_parseFailed}.`,proxyNotWorking:`${app.msgs.mode_proxy} ${app.msgs.alert_notWorking}.`,apiNotWorking:`API ${app.msgs.alert_notWorking}.`,suggestProxy:`${app.msgs.alert_try} ${app.msgs.alert_switchingOn} ${app.msgs.mode_proxy}`,suggestDiffAPI:`${app.msgs.alert_try} ${app.msgs.alert_selectingDiff} API`,suggestOpenAI:`${app.msgs.alert_try} ${app.msgs.alert_switchingOff} ${app.msgs.mode_proxy}`},app.katexDelimiters=await new Promise(e=>xhr({method:"GET",onload:t=>e(JSON.parse(t.responseText)),url:`${app.urls.aiwebAssets}/data/katex-delimiters.json`})),window.apis=Object.assign(Object.create(null),await new Promise(e=>xhr({method:"GET",onload:t=>e(JSON5.parse(t.responseText)),url:`${app.urls.aiwebAssets}/data/ai-chat-apis.json5`}))),apis.AIchatOS.userID="#/chat/"+Date.now(),window.config={},window.settings={load(...e){e.flat().forEach(o=>config[o]=GM_getValue(`${app.configKeyPrefix}_${o}`,t(o)));function t(o){const a=settings.controls?.[o];return a?.defaultVal??(a?.type=="slider"?100:a?.type=="toggle")}},save(e,t){GM_setValue(`${app.configKeyPrefix}_${e}`,t),config[e]=t}},settings.load("debugMode"),log.debug("Initializing settings..."),Object.assign(settings,{controls:{proxyAPIenabled:{type:"toggle",icon:"sunglasses",defaultVal:!1,label:app.msgs.menuLabel_proxyAPImode,helptip:app.msgs.helptip_proxyAPImode},preferredAPI:{type:"modal",icon:"lightning",defaultVal:!1,label:`${app.msgs.menuLabel_preferred} API`,helptip:app.msgs.helptip_preferredAPI},streamingDisabled:{type:"toggle",icon:"signalStream",defaultVal:!1,label:app.msgs.mode_streaming,helptip:app.msgs.helptip_streamingMode},autoGet:{type:"toggle",icon:"speechBalloonLasso",defaultVal:!0,label:app.msgs.menuLabel_autoAnswer,helptip:app.msgs.helptip_autoGetAnswers},autoSummarize:{type:"toggle",icon:"summarize",defaultVal:!1,label:app.msgs.menuLabel_autoSummarizeResults,helptip:app.msgs.helptip_autoSummarizeResults},autoFocusChatbarDisabled:{type:"toggle",mobile:!1,icon:"caretsInward",defaultVal:!0,label:app.msgs.menuLabel_autoFocusChatbar,helptip:app.msgs.helptip_autoFocusChatbar},autoScroll:{type:"toggle",mobile:!1,icon:"arrowsDown",defaultVal:!1,label:`${app.msgs.mode_autoScroll} (${app.msgs.menuLabel_whenStreaming})`,helptip:app.msgs.helptip_autoScroll},rqDisabled:{type:"toggle",icon:"speechBalloons",defaultVal:!1,label:`${app.msgs.menuLabel_show} ${app.msgs.menuLabel_relatedQueries}`,helptip:app.msgs.helptip_showRelatedQueries},prefixEnabled:{type:"toggle",icon:"slash",defaultVal:!1,label:`${app.msgs.menuLabel_require} "/" ${app.msgs.menuLabel_beforeQuery}`,helptip:app.msgs.helptip_prefixMode},suffixEnabled:{type:"toggle",icon:"questionMark",defaultVal:!1,label:`${app.msgs.menuLabel_require} "?" ${app.msgs.menuLabel_afterQuery}`,helptip:app.msgs.helptip_suffixMode},widerSidebar:{type:"toggle",mobile:!1,icon:"widescreenTall",defaultVal:!1,label:app.msgs.menuLabel_widerSidebar,helptip:app.msgs.helptip_widerSidebar},stickySidebar:{type:"toggle",mobile:!1,icon:"sidebar",defaultVal:!1,label:app.msgs.menuLabel_stickySidebar,helptip:app.msgs.helptip_stickySidebar},anchored:{type:"toggle",mobile:!1,icon:"anchor",defaultVal:!1,label:app.msgs.mode_anchor,helptip:app.msgs.helptip_anchorMode},bgAnimationsDisabled:{type:"toggle",icon:"sparkles",defaultVal:!1,label:`${app.msgs.menuLabel_background} ${app.msgs.menuLabel_animations}`,helptip:app.msgs.helptip_bgAnimations},fgAnimationsDisabled:{type:"toggle",icon:"sparkles",defaultVal:!1,label:`${app.msgs.menuLabel_foreground} ${app.msgs.menuLabel_animations}`,helptip:app.msgs.helptip_fgAnimations},replyLang:{type:"prompt",icon:"languageChars",label:app.msgs.menuLabel_replyLanguage,helptip:app.msgs.helptip_replyLanguage},scheme:{type:"modal",icon:"scheme",label:app.msgs.menuLabel_colorScheme,helptip:app.msgs.helptip_colorScheme},debugMode:{type:"toggle",icon:"bug",defaultVal:!1,label:app.msgs.mode_debug,helptip:app.msgs.helptip_debugMode},about:{type:"modal",icon:"questionMarkCircle",label:`${app.msgs.menuLabel_about} ${app.name}...`}}}),Object.assign(config,{lineHeightRatio:env.browser.isMobile?1.357:1.375,maxFontSize:24,minFontSize:11}),settings.load(Object.keys(settings.controls),"expanded","fontSize","minimized","notFirstRun"),config.replyLang||settings.save("replyLang",env.browser.language),config.fontSize||settings.save("fontSize",env.browser.isMobile?14:14.0423),env.scriptManager.supportsStreaming||settings.save("streamingDisabled",!0),!config.notFirstRun&&env.browser.isMobile&&settings.save("autoGet",!0),settings.save("notFirstRun",!0),log.debug(`Success! config = ${log.prettifyObj(config)}`);const z={apply(e){this.styleNode||document.head.append(this.styleNode=dom.create.style()),this.styleNode.textContent=this.styles[e]},selectors:{btn:{get after(){return this.shared.split(",").map(e=>`${e}::after`).join(", ")},get before(){return this.shared.split(",").map(e=>`${e}::before`).join(", ")},get hover(){return this.shared.split(",").map(e=>`${e}:hover`).join(", ")},get hoverAfter(){return this.hover.split(",").map(e=>`${e}::after`).join(", ")},get hoverBefore(){return this.hover.split(",").map(e=>`${e}::before`).join(", ")},get hoverSVG(){return this.hover.split(",").map(e=>`${e} svg`).join(", ")},modal:`body:has(#${app.slug}) .modal-buttons button`,modalPrimary:`body:has(#${app.slug}) .primary-modal-btn`,get shared(){return`${this.modal},${this.standby}`},get span(){return this.shared.split(",").map(e=>`${e} span`).join(", ")},standby:`button.${app.slug}-standby-btn`,get svg(){return this.shared.split(",").map(e=>`${e} svg`).join(", ")}}},styles:{get lines(){const{selectors:e}=z;return`

                /* General button styles */
                ${e.btn.shared} {
                  --content-color: ${env.ui.app.scheme=="light"?"0,0,0":"255,255,255"};
                  --side-line-fill: linear-gradient(rgb(var(--content-color)), rgb(var(--content-color))) ;
                  --skew: skew(-13deg) ; --counter-skew: skew(13deg) ; --btn-svg-zoom: scale(1.2) ;
                  --btn-transition: 0.1s ease all ;
                    position: relative ; border-width: 1px ; cursor: crosshair ;
                    border: 1px solid rgb(var(--content-color)) ;
                    background: /* side lines */
                        var(--side-line-fill) left / 2px 50% no-repeat,
                        var(--side-line-fill) right / 2px 50% no-repeat ;
                    background-position-y: 81% ;
                    background-color: #ffffff00 ; /* clear bg */
                    color: rgba(var(--content-color), ${env.ui.app.scheme=="light"?.85:1}) ;
                    font-size: 0.8em ; font-family: "Roboto", sans-serif ; text-transform: uppercase }
                ${e.btn.svg} {
                    stroke: rgba(var(--content-color), ${env.ui.app.scheme=="light"?.65:1}) ;
                    ${config.fgAnimationsDisabled?"":`transition: var(--btn-transition) ;
                           -webkit-transition: var(--btn-transition) ; -moz-transition: var(--btn-transition) ;
                           -o-transition: var(--btn-transition) ; -ms-transition: var(--btn-transition)`}}
                ${e.btn.span} { font-weight: 600 ; display: inline-block } /* text */
                ${e.btn.before}, ${e.btn.after} { /* top/bottom lines */
                    content: "" ; position: absolute ; background: rgb(var(--content-color)) ;
                    ${config.fgAnimationsDisabled?"":`transition: var(--btn-transition) ;
                           -webkit-transition: var(--btn-transition) ; -moz-transition: var(--btn-transition) ;
                           -o-transition: var(--btn-transition) ; -ms-transition: var(--btn-transition)`}}
                ${e.btn.before} { top: 0 ; left: 10% ; width: 65% ; height: 1px } /* top line */
                ${e.btn.after} { bottom: 0 ; right: 10% ; width: 80% ; height: 1px } /* bottom line */
                ${e.btn.hover} {
                    color: rgb(var(--content-color)) ;
                    background: /* extend side lines */
                        var(--side-line-fill) left / 2px 100% no-repeat,
                        var(--side-line-fill) right / 2px 100% no-repeat !important }
                ${e.btn.hoverBefore} { left: 0 ; width: 20px } /* top line on hover */
                ${e.btn.hoverAfter} { right: 0 ; width: 20px } /* bottom line on hover */
                ${e.btn.hoverSVG} { transform: var(--btn-svg-zoom) ; stroke: rgba(var(--content-color),1) }

                /* Modal styles */
                .${modals.class} { border-radius: 0 !important } /* square the corners to match the buttons */

                /* Modal button styles */
                ${e.btn.modal} {
                  --modal-btn-y-offset: 2px ; --glow-color: #a0fdff ;
                  --modal-btn-zoom: scale(1.075) ;
                  --modal-btn-transition: transform 0.1s ease, background 0.2s ease, box-shadow 5s ease ;
                    ${config.fgAnimationsDisabled?`transition: none ;
                            -webkit-transition: none ; -moz-transition: none ;
                            -o-transition: none ; -ms-transition: none`:`transition: var(--modal-btn-transition) ;
                            -webkit-transition: var(--modal-btn-transition) ;
                            -moz-transition: var(--modal-btn-transition) ;
                            -o-transition: var(--modal-btn-transition) ;
                            -ms-transition: var(--modal-btn-transition)`}}
                ${e.btn.modalPrimary} {
                    ${env.ui.app.scheme=="dark"?"background-color: white !important ; color: black":"background-color: black !important ; color: white"}}
                ${e.btn.modal}:nth-child(odd) {
                    transform: translateY(calc(-1 * var(--modal-btn-y-offset))) }
                ${e.btn.modal}:nth-child(even) {
                    transform: translateY(var(--modal-btn-y-offset)) }
                ${e.btn.modal}:nth-child(odd):hover {
                    transform: translateY(calc(-1 * var(--modal-btn-y-offset))) ${env.browser.isMobile?"":"var(--modal-btn-zoom)"}}
                ${e.btn.modal}:nth-child(even):hover {
                    transform: translateY(var(--modal-btn-y-offset)) ${env.browser.isMobile?"":"var(--modal-btn-zoom)"}}
                ${e.btn.modal}:hover { /* add glow */
                    background-color: var(--glow-color) !important ;
                    box-shadow: 2px 1px 30px var(--glow-color) ;
                       -webkit-box-shadow: 2px 1px 30px var(--glow-color) ;
                       -moz-box-shadow: 2px 1px 30px var(--glow-color) }

                /* Standby button styles */
                ${e.btn.standby} {
                  --standby-btn-transition: transform 0.18s ease, background 0.2s ease ;
                    font-size: 11px ; width: 80% ; height: 51px ; margin-bottom: 16px }
                ${e.btn.standby}:nth-child(odd) { margin-right: 20% ; margin-left: 15px }
                ${e.btn.standby}:nth-child(even) { margin-left: 20% ; margin-bottom: 19px }
                ${e.btn.standby}:hover {
                    border : 1px rgba(var(--content-color), ${env.ui.app.scheme=="dark"?"1) solid":"0.6) dotted"}}`}}};window.update={replyPreMaxHeight(){const e=app.div.querySelector(".reply-pre"),t=app.div.querySelector(`.${app.slug}-related-queries`),o=innerHeight-t?.offsetHeight-328,a=innerHeight-309;e&&(e.style.maxHeight=config.stickySidebar?t?.offsetHeight>0?`${o}px`:`${a}px`:config.anchored?`${a-(config.expanded?115:365)}px`:"none")},appBottomPos(){app.div.style.bottom=`${config.minimized?22-app.div.offsetHeight:-33}px`},appStyle(){const e=env.ui.app.scheme=="dark"&&!config.bgAnimationsDisabled,t=config.fgAnimationsDisabled||env.browser.isMobile;modals.stylize(),app.styles?.isConnected||document.head.append(app.styles||=dom.create.style()),app.styles.textContent=`:root {
                  --app-bg-color-light-scheme: white ; --app-bg-color-dark-scheme: #1f1f1f ;
                  --pre-bg-color-light-scheme: #b7b7b736 ; --pre-bg-color-dark-scheme: #3a3a3a ;
                  --reply-header-bg-color-light-scheme: #d7d4d4 ;
                  --reply-header-bg-color-dark-scheme: ${e?"#0e0e0e24":"#545454"};
                  --reply-header-fg-color-light-scheme: white ; --reply-header-fg-color-dark-scheme: white ;
                  --chatbar-btn-hover-color-light-scheme: #638ed4 ; --chatbar-btn-hover-color-dark-scheme: white ;
                  --font-color-light-scheme: #4e4e4e ; --font-color-dark-scheme: #e3e3e3 ;
                  --app-border: ${e?"none":`1px solid #${env.ui.app.scheme=="light"?"dadce0":"3b3b3b"}`};
                  --app-gradient-bg: linear-gradient(180deg, ${env.ui.app.scheme=="dark"?"#99a8a6 -245px, black 185px":"#b6ebff -163px, white 65px"}) ;
                  --app-shadow: 0 2px 3px rgb(0,0,0,0.06) ;
                  --app-hover-shadow-light-scheme: 0 9px 28px rgba(0,0,0,0.09) ;
                  --app-hover-shadow-dark-scheme: 0 9px 28px rgba(0,0,0,0.39) ;
                  --app-anchored-shadow: 0 15px 52px rgb(0,0,${env.ui.app.scheme=="light"?"7,0.06":"11,0.22"}) ;
                  --app-transition: opacity 0.5s ease, transform 0.5s ease, /* for 1st fade-in */
                                    bottom 0.1s cubic-bezier(0,0,0.2,1), /* smoothen Anchor Y min/restore */
                                    width 0.167s cubic-bezier(0,0,0.2,1) ; /* smoothen Anchor X expand/shrink */
                  --app-shadow-transition: box-shadow 0.15s ease ; /* for app:hover to not trigger on hover-off */
                  --standby-btn-zoom: scale(1.055) ; --standby-btn-transition: all 0.18s ease ;
                  --btn-transition: transform 0.15s ease, /* for hover-zoom */
                                    opacity 0.25s ease-in-out ; /* + btn-zoom-fade-out + .app-hover-only shows */
                  --font-size-slider-thumb-transition: transform 0.05s ease ; /* for hover-zoom */
                  --reply-pre-transition: max-height 0.167s cubic-bezier(0, 0, 0.2, 1) ; /* for Anchor changes */
                  --rq-transition: opacity 0.55s ease, transform 0.1s ease !important ; /* for fade-in + hover-zoom */
                  --fade-in-less-transition: opacity 0.2s ease } /* used by Font Size slider + Pin menu */.fade-in { opacity: 0 ; transform: translateY(10px) }
                .fade-in-less { opacity: 0 ;
                    transition: var(--fade-in-less-transition) ;
                       -webkit-transition: var(--fade-in-less-transition) ;
                       -moz-transition: var(--fade-in-less-transition) ;
                       -o-transition: var(--fade-in-less-transition) ;
                       -ms-transition: var(--fade-in-less-transition) }
                .fade-in.active, .fade-in-less.active { opacity: 1 ; transform: translateY(0) }
                @keyframes btn-zoom-fade-out {
                    0% { opacity: 1 } 55% { opacity: 0.25 ; transform: scale(1.85) }
                    75% { opacity: 0.05 ; transform: scale(2.15) } 100% { opacity: 0 ; transform: scale(6.85) }}
                @keyframes icon-scroll { 0% { transform: translateX(0) } 100% { transform: translateX(-14px) }}
                @keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }}
                @keyframes rotate { from { transform: rotate(0deg) } to { transform: rotate(360deg) }}
                @keyframes spinY { 0% { transform: rotateY(0deg) } 100% { transform: rotateY(360deg) }}.no-user-select {
                   -webkit-user-select: none ; -moz-user-select: none ;
                   -ms-user-select: none ; user-select: none }
                .no-mobile-tap-outline { outline: none ; -webkit-tap-highlight-color: transparent }
                /* stylize scrollbars in Chromium/Safari */
                    #${app.slug} *::-webkit-scrollbar { width: 7px }
                    #${app.slug} *::-webkit-scrollbar-thumb { background: #cdcdcd }
                    #${app.slug} *::-webkit-scrollbar-thumb:hover { background: #a6a6a6 }
                    #${app.slug} *::-webkit-scrollbar-track { background: none }
                #${app.slug} * { scrollbar-width: thin } /* make scrollbars thin in Firefox */
                .cursor-overlay { /* for fontSizeSlider.createAppend() drag listeners to show resize cursor everywhere */
                    position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ;
                    z-index: 9999 ; cursor: ew-resize }
                #${app.slug} { /* main app div */
                    color: var(--font-color-${env.ui.app.scheme}-scheme) ;
                    background: var(--app-bg-color-${env.ui.app.scheme}-scheme) ;
                    position: sticky ; z-index: 101 ; padding: ${env.browser.isFF?20:22}px 26px 6px 26px ;
                    ${env.browser.isMobile?"":"margin-top: 55px ;"} /* add top margin on desktop */
                    border-radius: 8px ; height: fit-content ;
                    width: ${env.browser.isMobile?"auto":"319px"};
                    ${env.browser.isMobile?"margin: 8px 0 8px":"margin-bottom: 30px"}; /* add vertical margins */
                    word-wrap: break-word ; white-space: pre-wrap ;
                    transition: var(--app-transition) ;
                       -webkit-transition: var(--app-transition) ; -moz-transition: var(--app-transition) ;
                       -o-transition: var(--app-transition) ; -ms-transition: var(--app-transition) }
                #${app.slug}:has(.${app.slug}-alert) { /* app alerts */
                    border: var(--app-border) ; box-shadow: var(--app-shadow) ;
                    -webkit-box-shadow: var(--app-shadow) ; -moz-box-shadow: var(--app-shadow) ;
                    ${config.bgAnimationsDisabled?`background: var(--app-bg-color-${env.ui.app.scheme}-scheme)`:"background-image: var(--app-gradient-bg)"}}
                #${app.slug}:has(.${app.slug}-alert):hover, #${app.slug}:has(.${app.slug}-alert):active {
                    box-shadow: var(--app-hover-shadow-${env.ui.app.scheme}-scheme) ;
                    transition: var(--app-shadow-transition) ;
                       -webkit-transition: var(--app-shadow-transition) ;
                       -moz-transition: var(--app-shadow-transition) ;
                       -o-transition: var(--app-shadow-transition) ;
                       -ms-transition: var(--app-shadow-transition) }
                ${env.browser.isPhone?"":env.ui.app.scheme!=env.ui.site.scheme?`#${app.slug}:hover, #${app.slug}:active {
                            box-shadow: var(--app-hover-shadow-${env.ui.app.scheme}-scheme) ;
                            transition: var(--app-shadow-transition) ;
                               -webkit-transition: var(--app-shadow-transition) ;
                               -moz-transition: var(--app-shadow-transition) ;
                               -o-transition: var(--app-shadow-transition) ;
                               -ms-transition: var(--app-shadow-transition) }`:""}
                #${app.slug} .app-hover-only { /* hide app-hover-only elems */
                    position: absolute ; left: -9999px ; opacity: 0 ; /* using position to support transitions */
                    width: 0 } /* to support width calcs */
                /* show app-hover-only elems on hover + Font Size button when slider visible */
                #${app.slug}:hover .app-hover-only, #${app.slug}:active .app-hover-only,
                    #${app.slug}:has([id$=font-size-slider-track].active) [id$=font-size-btn] {
                        position: relative ; left: auto ; width: auto ; opacity: 1 }
                #${app.slug} p { margin: 0 }
                #${app.slug} .alert-link {
                    color: ${env.ui.app.scheme=="light"?"#190cb0":"white ; text-decoration: underline"}}
                .${app.slug}-name {
                    font-size: 1.35rem ; font-weight: 700 ; text-decoration: none ;
                    color: ${env.ui.app.scheme=="dark"?"white":"black"} !important }
                .byline { /* header byline */
                    font-size: 12px ; margin-left: 7px ; color: #aaa ;
                  --byline-transition: 0.15s ease-in-out ; transition: var(--byline-transition) ;
                       -webkit-transition: var(--byline-transition) ; -moz-transition: var(--byline-transition) ;
                       -o-transition: var(--byline-transition) ; -ms-transition: var(--byline-transition) }
                .byline a, .byline a:visited { color: #aaa ; text-decoration: none !important }
                .byline a:hover {
                    color: ${env.ui.app.scheme=="dark"?"white":"black"};
                    transition: var(--byline-transition) ;
                       -webkit-transition: var(--byline-transition) ; -moz-transition: var(--byline-transition) ;
                       -o-transition: var(--byline-transition) ; -ms-transition: var(--byline-transition) }
                #${app.slug}-header-btns { display: flex ; direction: rtl ; gap: 2px ; float: right }
                .${app.slug}-header-btn {
                    float: right ; cursor: pointer ; position: relative ; top: 6px ;
                    ${env.ui.app.scheme=="dark"?"fill: white ; stroke: white":"fill: #adadad ; stroke: #adadad"}}
                .${app.slug}-header-btn:hover svg { /* highlight/zoom header button on hover */
                    ${env.ui.app.scheme=="dark"?"fill: #d9d9d9 ; stroke: #d9d9d9":"fill: black ; stroke: black"};
                    ${env.browser.isMobile?"":"transform: scale(1.285)"}}
                ${config.fgAnimationsDisabled?"":`.${app.slug}-header-btn, .${app.slug}-header-btn svg { /* smooth header button fade-in + hover-zoom */
                    transition: var(--btn-transition) ;
                       -webkit-transition: var(--btn-transition) ; -moz-transition: var(--btn-transition) ;
                       -o-transition: var(--btn-transition) ; -ms-transition: var(--btn-transition) }`}
                .${app.slug}-header-btn:active {
                    ${env.ui.app.scheme=="dark"?"fill: #999999 ; stroke: #999999":"fill: #638ed4 ; stroke: #638ed4"}}
                #${app.slug}-logo, .${app.slug}-header-btn svg {
                    filter: drop-shadow(${env.ui.app.scheme=="dark"?"#7171714d 10px":"#aaaaaa21 7px"} 7px 3px) }
                #${app.slug} .loading {
                    padding-bottom: 15px ; color: #b6b8ba ; fill: #b6b8ba ;
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite }
                #${app.slug} section.loading { padding: 15px 0 14px 5px } /* pad loading status when sending replies */
                #${app.slug}-font-size-slider-track {
                    width: 98% ; height: 7px ; margin: 3px auto ${env.browser.isPhone?-6:-11}px ;
                    padding: 15px 0 ; background-color: #ccc ; box-sizing: content-box; background-clip: content-box ;
                   -webkit-background-clip: content-box }
                #${app.slug}-font-size-slider-track::before { /* to add finger cursor to unpadded core only */
                    content: "" ; position: absolute ; top: 10px ; left: 0 ; right: 0 ;
                    height: calc(100% - 20px) ; cursor: pointer }
                #${app.slug}-font-size-slider-tip {
                    z-index: 1 ; position: absolute ; bottom: 20px ;
                    border-left: 4.5px solid transparent ; border-right: 4.5px solid transparent ;
                    border-bottom: 16px solid #ccc }
                #${app.slug}-font-size-slider-thumb {
                    z-index: 2 ; width: 7px ; height: 25px ; border-radius: 30% ; position: relative ;
                    top: -7.5px ; cursor: ew-resize ;
                    background-color: ${env.ui.app.scheme=="dark"?"white":"#4a4a4a"};
                  --shadow: rgba(0,0,0,0.21) 1px 1px 9px 0 ;
                        box-shadow: var(--shadow) ; -webkit-box-shadow: var(--shadow) ; -moz-box-shadow: var(--shadow) ;
                    ${t?"":`transition: var(--font-size-slider-thumb-transition) 
                       -webkit-transition: var(--font-size-slider-thumb-transition) ;
                       -moz-transition: var(--font-size-slider-thumb-transition) ;
                       -o-transition: var(--font-size-slider-thumb-transition) ;
                       -ms-transition: var(--font-size-slider-thumb-transition)`}}
                ${env.browser.isMobile?"":`#${app.slug}-font-size-slider-thumb:hover { transform: scale(1.125) }`}
                .${app.slug}-standby-btns { margin: 20px 0 -14px }
                .${app.slug}-standby-btn {
                  --skew: skew(-13deg) ; --counter-skew: skew(13deg) ;
                  --content-color: ${env.ui.app.scheme=="dark"?"white":"black"};
                    display: flex ; align-items: center ; justify-content: center ; gap: 8px ;
                    width: 90% ; height: 51px ; margin-bottom: 9px ; padding: 12px 0 ;
                    cursor: pointer ; transform: var(--skew) ; border: 1px solid var(--content-color) ;
                    background: none ; box-shadow: #aaaaaa12 7px 7px 3px 0px ; color: var(--content-color) ;
                    ${config.fgAnimationsDisabled?"":`will-change: transform ;
                           transition: var(--standby-btn-transition) ;
                               -webkit-transition: var(--standby-btn-transition) ;
                               -moz-transition: var(--standby-btn-transition) ;
                               -o-transition: var(--standby-btn-transition) ;
                               -ms-transition: var(--standby-btn-transition)`}}
                .${app.slug}-standby-btn:hover {
                    color: var(--content-color) ;
                    transform: var(--skew) ${env.browser.isMobile?"":"var(--standby-btn-zoom)"}}
                .${app.slug}-standby-btn > span { transform: var(--counter-skew) }
                .${app.slug}-standby-btn > svg {
                    position: relative ; stroke: var(--content-color) ; fill: stroke: var(--content-color) ;
                    transform: var(--counter-skew) }
                .${app.slug}-standby-btn:nth-child(odd) { margin-right: 10% }
                .${app.slug}-standby-btn:nth-child(even) { margin-left: 10% ; margin-bottom: 19px }
                .${app.slug}-standby-btn:first-of-type svg { /* Query button icon */
                    width: 11px ; height: 11px ; top: -1.5px ; right: -1.5px }
                .${app.slug}-standby-btn:nth-of-type(2) svg { /* Summarize button icon */
                    width: 17.5px ; height: 17.5px }#${app.slug} .reply-tip {
                    content: "" ; position: relative ; border: 7px solid transparent ;
                    float: left ; margin: 3px -15px 0 0 ;
                    left: ${env.browser.isMobile?12:6}px ; /* positioning */
                    border-bottom-style: solid ; border-bottom-width: 20px ; border-top: 0 ; border-bottom-color:
                        ${e?"#0000":`var(--reply-header-bg-color-${env.ui.app.scheme}-scheme)`}}
                #${app.slug} .reply-header {
                    display: flex ; align-items: center ; position: relative ; box-sizing: border-box ; width: 100% ;
                    top: 16px ; padding: 16px 14px ; height: 18px ; border-radius: 12px 12px 0 0 ;
                    ${env.ui.app.scheme=="light"?"border-bottom: 1px solid white":e?"border: 1px solid ; border-bottom-color: transparent":""};
                    background: var(--reply-header-bg-color-${env.ui.app.scheme}-scheme) ;
                    color:      var(--reply-header-fg-color-${env.ui.app.scheme}-scheme) ;
                    fill:       var(--reply-header-fg-color-${env.ui.app.scheme}-scheme) ;
                    stroke:     var(--reply-header-fg-color-${env.ui.app.scheme}-scheme) }
                #${app.slug} .reply-header-txt { flex-grow: 1 ; font-size: 12px ; font-family: monospace }
                #${app.slug} .reply-header-btns { margin: 3.5px -5px 0 }
                #${app.slug} .reply-pre {
                    font-size: ${config.fontSize}px ; white-space: pre-wrap ; min-width: 0 ;
                    line-height: ${config.fontSize*config.lineHeightRatio}px ; overscroll-behavior: contain ;
                    position: relative ; z-index: 1 ; /* allow top-margin to overlap header in light scheme */
                    margin: ${env.ui.app.scheme=="light"?13:15}px 0 0 0 ; padding: 1em 1em 0 1em ;
                    border-radius: 0 0 12px 12px ; overflow: auto ;
                    ${config.bgAnimationsDisabled?`background: var(--pre-bg-color-${env.ui.app.scheme}-scheme) ;
                         color: var(--font-color-${env.ui.app.scheme}-scheme)`:env.ui.app.scheme=="dark"?"background: #2b3a40cf ; color: var(--font-color-dark-scheme) ; border: 1px solid white":`background: var(--pre-bg-color-light-scheme) ;
                            color: var(--font-color-light-scheme) ; border: none`};
                    ${config.fgAnimationsDisabled?"":`transition: var(--reply-pre-transition) ;
                            -webkit-transition: var(--reply-pre-transition) ;
                            -moz-transition: var(--reply-pre-transition) ;
                            -o-transition: var(--reply-pre-transition) ;
                            -ms-transition: var(--reply-pre-transition)`}}
                #${app.slug} .reply-pre a, #${app.slug} .reply-pre a:visited { color: #4495d4 }
                #${app.slug} .reply-pre a:hover { color: ${env.ui.app.scheme=="dark"?"white":"#28a017"}}
                #${app.slug} .code-header {
                    display: flex ; direction: rtl ; gap: 9px ; align-items: center ;
                    height: 11px ; margin: 3px -2px 0 }
                #${app.slug} .code-header btn { cursor: pointer }
                #${app.slug} .code-header svg { height: 13px ; width: 13px ; fill: white }#${app.slug} .reply-pre h1 { font-size: 1.25em }
                #${app.slug} .reply-pre h2 { font-size: 1.1em } /* size headings */
                #${app.slug} .reply-pre ol { margin: -5px 0 -8px 7px ; padding-left: 1.58em }
                #${app.slug} .reply-pre ul { /* reduce v-spacing, indent */
                    margin: -10px 0 -6px ; padding-left: 1.5em }
                #${app.slug} .reply-pre li { /* reduce v-spacing, show hollow bullets */
                    margin: -8px 0 ; list-style: circle }
                #${app.slug} .reply-pre ul ul { margin-top: 0 } /* push sub-lists down */
                #${app.slug} .reply-pre ul ul > li { list-style: disc } /* fill sub-bullets */#${app.slug} ${GM_getResourceText("hljsCSS").replace(/\/\*[^*]+\*\//g,"").trim().replace(/([,}])(.)(?![^{]*\})/g,`$1#${app.slug} $2`)} /* scope selectors to app */
                #${app.slug} pre:has(> code) { padding: 0 } /* remove padded border around code blocks */
                #${app.slug} code { font-size: 0.85em } /* shrink code vs. regular text */.katex-html { display: none } /* hide unrendered math */#${app.slug}-chatbar {
                    border: solid 1px ${e?"#aaa":env.ui.app.scheme=="dark"?"#777":"#555"};
                    border-radius: 12px 13px 12px 0 ; margin: 12px 0 15px 0 ; padding: 13px 55px 13px 10px ;
                    position: relative ; z-index: 555 ; color: ${env.ui.app.scheme=="dark"?"#eee":"#222"};
                    height: 16px ; max-height: 200px ; resize: none ;
                    background: ${env.ui.app.scheme=="light"?"#eeeeee9e":`#515151${config.bgAnimationsDisabled?"":"9e"}`};
                    ${env.ui.app.scheme=="dark"?"":`--chatbar-inset-shadow: 0 1px 2px rgba(15,17,17,0.1) inset ;
                        box-shadow: var(--chatbar-inset-shadow) ; -webkit-box-shadow: var(--chatbar-inset-shadow) ;
                       -moz-box-shadow: var(--chatbar-inset-shadow) ;`}
                        transition: box-shadow 0.15s ease ;
                           -webkit-transition: box-shadow 0.15s ease ; -moz-transition: box-shadow 0.15s ease ;
                           -o-transition: box-shadow 0.15s ease ; -ms-transition: box-shadow 0.15s ease }
                ${e?"":`#${app.slug}-chatbar:hover:not(:focus) {
                      --chatbar-hover-inset-shadow: 0 ${env.ui.app.scheme=="dark"?"3px 2px":"1px 7px"} rgba(15,17,17,0.15) inset ;
                        box-shadow: var(--chatbar-hover-inset-shadow) ;
                       -webkit-box-shadow: var(--chatbar-hover-inset-shadow) ;
                       -moz-box-shadow: var(--chatbar-hover-inset-shadow) ;
                        transition: box-shadow 0.25s ease ;
                           -webkit-transition: box-shadow 0.25s ease ; -moz-transition: box-shadow 0.25s ease ;
                           -o-transition: box-shadow 0.25s ease ; -ms-transition: box-shadow 0.25s ease }`}
                #${app.slug}-chatbar:focus-visible { /* fallback outline chatbar + reduce inset shadow on focus */
                    outline: -webkit-focus-ring-color auto 1px ;
                    ${e?"":`--inset-shadow: 0 ${env.ui.app.scheme=="dark"?"3px -1px":"1px 2px"} rgba(0,0,0,0.3) inset ;
                        box-shadow: var(--inset-shadow) ; -webkit-box-shadow: var(--inset-shadow) ;
                       -moz-box-shadow: var(--inset-shadow)`}}
                .${app.slug}-chatbar-btn {
                    z-index: 560 ; border: none ; float: right ; position: relative ; background: none ;
                    cursor: pointer ; bottom: ${env.browser.isFF?50:55}px ;
                    ${env.ui.app.scheme=="dark"?"color: #aaa ; fill: #aaa ; stroke: #aaa":"color: lightgrey ; fill: lightgrey ; stroke: lightgrey"}}
                .${app.slug}-chatbar-btn:hover {
                    color:  var(--chatbar-btn-hover-color-${env.ui.app.scheme}-scheme) ;
                    fill:   var(--chatbar-btn-hover-color-${env.ui.app.scheme}-scheme) ;
                    stroke: var(--chatbar-btn-hover-color-${env.ui.app.scheme}-scheme) }.${app.slug}-related-queries {
                    display: flex ; flex-wrap: wrap ; width: 100% ; margin-bottom: 19px ; padding: 0 5px }
                .${app.slug}-related-query {
                    font-size: ${env.browser.isMobile?1:.81}em ; cursor: pointer ; will-change: transform ;
                    box-sizing: border-box ; width: fit-content ; max-width: 100% ; /* confine to outer div */
                    margin: 5px 12px 7px 0 ; padding: 8px 12px 8px 13px ;
                    color: ${env.ui.app.scheme=="dark"?config.bgAnimationsDisabled?"#ccc":"#f2f2f2":"#767676"};
                    background: ${env.ui.app.scheme=="dark"?"#7e7e7e4f":"#fdfdfdb0"};
                    border: 1px solid ${env.ui.app.scheme=="dark"?config.bgAnimationsDisabled?"#5f5f5f":"#777":"#e1e1e1"};
                    border-radius: 0 13px 12px 13px ; flex: 0 0 auto ;
                  --rq-shadow: 1px 4px 8px -6px rgba(169,169,169,0.75) ; box-shadow: var(--rq-shadow) ;
                       -webkit-box-shadow: var(--rq-shadow) ; -moz-box-shadow: var(--rq-shadow) ;
                    ${t?"":`transition: var(--rq-transition) ;
                       -webkit-transition: var(--rq-transition) ; -moz-transition: var(--rq-transition) ;
                       -o-transition: var(--rq-transition) ; -ms-transition: var(--rq-transition)`}}
                .${app.slug}-related-query:hover, .${app.slug}-related-query:focus {
                    ${config.fgAnimationsDisabled?"":"transform: scale(1.055) !important ;"}
                    background: ${env.ui.app.scheme=="dark"?"#a2a2a270":"#dae5ffa3 ; color: #000000a8 ; border-color: #a3c9ff"}}
                .${app.slug}-related-query svg { /* related query icon */
                    float: left ; margin: -0.09em 6px 0 0 ;
                    color: ${env.ui.app.scheme=="dark"?"#aaa":"#c1c1c1"}}
                .${app.slug}-chatbar-btn {
                    z-index: 560 ;
                    border: none ; float: right ; position: relative ; background: none ; cursor: pointer ;
                    bottom: ${(env.browser.isFF?46:49)+(env.ui.site.hasSidebar?3:2)}px ;
                    ${env.ui.app.scheme=="dark"?"color: #aaa ; fill: #aaa ; stroke: #aaa":"color: lightgrey ; fill: lightgrey ; stroke: lightgrey"}}
                .${app.slug}-chatbar-btn:hover {
                    color:  var(--chatbar-btn-hover-color-${env.ui.app.scheme}-scheme) ;
                    fill:   var(--chatbar-btn-hover-color-${env.ui.app.scheme}-scheme) ;
                    stroke: var(--chatbar-btn-hover-color-${env.ui.app.scheme}-scheme) }#${app.slug} footer {
                    position: relative ; text-align: right ; font-size: 0.75rem ; line-height: 1.43em ;
                    right: -54px ; margin: ${env.browser.isFF?1:-2}px -32px 12px }
                #${app.slug} footer * { color: #aaa ; text-decoration: none }
                #${app.slug} footer a:hover { color: ${env.ui.app.scheme=="dark"?"white":"black"}}.chatgpt-notif {
                    fill: white ; stroke: white ; font-size: 25px !important ; padding: 13px 14px 13px 13px !important }
                .notif-close-btn { display: none !important } /* hide notif close btn */
                .${app.slug}-menu {
                    position: absolute ; z-index: 12250 ;
                    padding: 3.5px 5px !important ; font-family: "Source Sans Pro", sans-serif ; font-size: 12px }.${app.slug}-menu ul { margin: 0 ; padding: 0 ; list-style: none }
                .${app.slug}-menu-item { padding: 0 5px ; line-height: 20.5px }
                .${app.slug}-menu-item:not(.${app.slug}-menu-header):hover {
                    cursor: pointer ; background: white ; color: black ; fill: black }#${app.slug}.wider { min-width: 455px }
                #${app.slug}.wider ~ div { min-width: 508px } /* expand side snippets */
                #center_col:has(~ div #${app.slug}.wider),
                    #center_col:has(~ div #${app.slug}.wider) div {
                        max-width: 516px } /* shrink center column/children */
                div:has(> #${app.slug}.wider) { /* shift sidebar left to align w/ skinnier center column */
                    position: relative ; left: -136px }#${app.slug}.sticky { position: sticky ; top: 87px }
                #${app.slug}.sticky ~ * { display: none }#${app.slug}.anchored {
                    position: fixed ; bottom: -7px ; right: 35px ; width: 388px ; z-index: 8888 ;
                    border: var(--app-border) ; box-shadow: var(--app-anchored-shadow) ;
                    ${config.bgAnimationsDisabled?`background: var(--app-bg-color-${env.ui.app.scheme}-scheme)`:"background-image: var(--app-gradient-bg)"}}
                #${app.slug}.expanded { width: 528px !important }
                #${app.slug}.anchored .anchored-hidden { display: none } /* hide non-Anchor elems in mode */
                #${app.slug}:not(.anchored) .anchored-only { display: none } /* hide Anchor elems outside mode */@media (hover: none) {
                    #${app.slug} .app-hover-only { /* show app-hover-only elems */
                        position: relative ; left: auto ; width: auto ; opacity: 1 }
                }@media screen and (max-width: 480px) {
                    #${app.slug} #${app.slug}-logo { /* header logo... */
                        top: 0 ; width: calc(100% - 154px) } /* remove y-pos, widen till btns */
                    #${app.slug} .byline { display: none !important } /* hide byline */
                    #${app.slug} [class*=reply-tip] { display: none } /* hide reply tip */
                    .${app.slug}-related-queries { padding: 0 } /* remove RQ parent padding */
                }`,z.apply(config.theme)},bylineVisibility(){if(env.browser.isPhone)return;const e={byline:app.div.querySelector(".byline")};if(!e.byline)return;Object.assign(e,{appPrefix:app.div.querySelector("#app-prefix"),btns:app.div.querySelectorAll(`#${app.slug}-header-btns > btn`),logo:app.div.querySelector(`#${app.slug}-logo`)});const t=getComputedStyle(app.div),o={appDiv:app.div.getBoundingClientRect().width,appDivXpadding:parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)};Object.entries(e).forEach(([n,s])=>o[n]=dom.get.computedWidth(s));const a=o.appDiv-o.appDivXpadding-o.appPrefix-o.logo-o.btns-16;Object.assign(e.byline.style,o.byline>a?{position:"absolute",left:"-9999px",opacity:0}:{position:"",left:"",opacity:1})},chatbarWidth(){const e=app.div.querySelector(`#${app.slug}-chatbar`);e&&(e.style.width=`${env.browser.isMobile?81.4:config.anchored?config.expanded?87.4:83.3:config.widerSidebar?env.ui.site.hasSidebar?85.4:85.9:env.ui.site.hasSidebar?79.3:80.1}%`)},async footerContent(){const e=await get.json("https://cdn.jsdelivr.net/gh/KudoAI/ads-library/advertisers/index.json").catch(l=>log.error(l.message));if(!e)return;let t;for(const[l,c]of d(i(Object.entries(e))))if(c.campaigns.text){t=l;break}if(!t)return;const o=await get.json(`https://cdn.jsdelivr.net/gh/KudoAI/ads-library/advertisers/${t}/text/campaigns.json`).catch(l=>log.error(l.message));if(!o)return;const a=new RegExp(app.name.toLowerCase(),"i"),n=(()=>{const l=new Date,c=l.getFullYear(),r=String(l.getMonth()+1).padStart(2,"0"),g=String(l.getDate()).padStart(2,"0");return c+r+g})();let s=!1;for(const[l,c]of d(i(Object.entries(o))))if(c.active&&(!c.endDate||n<=c.endDate)){for(const[g,m]of d(i(Object.entries(c.adGroups)))){if(/^self$/i.test(g)&&!a.test(l)||a.test(l)&&!/^self$/i.test(g)||m.active==!1||m.targetBrowsers&&!m.targetBrowsers.some(f=>new RegExp(f,"i").test(navigator.userAgent))||m.targetLocations&&(!env.userLocale||!m.targetLocations.some(f=>f.includes(env.userLocale)||env.userLocale.includes(f))))continue;const p=m.ads.filter(f=>f.active!=!1);if(!p.length)continue;const u=p[Math.floor(chatgpt.randomFloat()*p.length)];let b=u.destinationURL||m.destinationURL||c.destinationURL||"";if(b.includes("http")){const[f,y]=b.split("?"),v=new URLSearchParams(y||"");v.set("utm_source",app.name.toLowerCase()),v.set("utm_content","app_footer_link"),b=`${f}?${v.toString()}`}const h=b?dom.create.anchor(b):dom.create.elem("span");app.footerContent.replaceWith(h),app.footerContent=h,app.footerContent.textContent=u.text,app.footerContent.setAttribute("title",u.tooltip||""),s=!0;break}if(s)break}function d(l){let c=l.length,r,g;for(;c!=0;)g=Math.floor(chatgpt.randomFloat()*c),c-=1,r=l[c],l[c]=l[g],l[g]=r;return l}function i(l){let c=[...l],r=c.length-1;return l.forEach(([g,m])=>{if(m.boost){const p=parseInt(m.boost)/100,u=Math.ceil(r/(1-p))*p-1;for(let b=0;b<u;b++)c.push([g,m]);r+=u}}),c}},replyPrefix(){const e=app.div.querySelector("pre p");if(!e)return;const t=env.ui.app.scheme=="dark"&&!config.bgAnimationsDisabled&&!/shuffle|summarize/.test(get.reply.src),o=e.textContent.startsWith(">> ");t&&!o?e.prepend(">> "):!t&&o&&(e.textContent=e.textContent.replace(/^>> /,""))},risingParticles(){["sm","med","lg"].forEach(e=>document.querySelectorAll(`[id*=particles-${e}]`).forEach(t=>t.id=config.bgAnimationsDisabled?`particles-${e}-off`:`${env.ui.app.scheme=="dark"?"white":"gray"}-particles-${e}`))},rqVisibility(){const e=app.div.querySelector(`.${app.slug}-related-queries`);e&&(e.style.display=config.rqDisabled||config.anchored?"none":"flex")},scheme(e){env.ui.app.scheme=e,$.googlegpt.update(),icons.app.googlegpt.update(),update.appStyle(),update.risingParticles(),update.replyPrefix(),modals.settings.updateSchemeStatus()}},window.toggle={anchorMode(e=""){const t=config.anchored;let o=!1;if(e=="on"||!e&&!config.anchored?(settings.save("anchored",!0),["sticky","wider"].forEach(a=>{config[`${a}Sidebar`]&&(toggle.sidebar(a),o=!0)})):(settings.save("anchored",!1),config.expanded&&(toggle.expandedMode("off"),o=!0)),t!=config.anchored){if(app.div.classList.toggle("anchored",config.anchored),update.rqVisibility(),update.replyPreMaxHeight(),update.chatbarWidth(),getComputedStyle(app.div).transitionProperty.includes("width")&&app.div.addEventListener("transitionend",function a(n){n.propertyName=="width"&&(update.bylineVisibility(),app.div.removeEventListener("transitionend",a))}),modals.settings.get()){const a=document.querySelector("[id*=anchor] input");a.checked!=config.anchored&&modals.settings.toggle.switch(a)}feedback.notify(`${app.msgs.mode_anchor} ${menus.toolbar.state.words[+config.anchored]}`,null,o?2.75:null)}},animations(e){const t=`${e}AnimationsDisabled`;if(settings.save(t,!config[t]),update.appStyle(),e=="bg"&&(update.risingParticles(),update.replyPrefix()),e=="fg"&&modals.settings.get()){const o=document.querySelector("#about-settings-entry > span > div");o.innerHTML=modals.settings.aboutContent[config.fgAnimationsDisabled?"short":"long"],o.style.float=config.fgAnimationsDisabled?"right":""}feedback.notify(`${settings.controls[t].label} ${menus.toolbar.state.words[+!config[t]]}`)},autoGen(e){const t=["get","summarize"],o=`auto${log.toTitleCase(e)}`;let a=!1;if(settings.save(o,!config[o]),config[o]){const n=t[+(e==t[0])];config[`auto${log.toTitleCase(n)}`]&&(toggle.autoGen(n),a=!0),["prefix","suffix"].forEach(s=>{config[`${s}Enabled`]&&(toggle.manualGen(s),a=!0)})}if(feedback.notify(`${settings.controls[o].label} ${menus.toolbar.state.words[+config[o]]}`,null,a?2.75:null),modals.settings.get()){const n=document.querySelector(`[id*=${o}] input`);n.checked!=config[o]&&modals.settings.toggle.switch(n)}},expandedMode(e=""){const t=e=="on"||!e&&!config.expanded;settings.save("expanded",t),app.div.classList.toggle("expanded",t),config.minimized&&toggle.minimized("off"),update.chatbarWidth(),getComputedStyle(app.div).transitionProperty.includes("width")&&app.div.addEventListener("transitionend",function a(n){n.propertyName=="width"&&(update.bylineVisibility(),app.div.removeEventListener("transitionend",a))});const o=app.div.querySelector(`#${app.slug}-arrows-btn`);o&&o.firstChild.replaceWith(icons.create({key:`arrowsDiagonal${config.expanded?"In":"Out"}`,size:17}))},manualGen(e){const t=`${e}Enabled`;let o=!1;if(settings.save(t,!config[t]),config[t]&&["get","summarize"].forEach(a=>{config[`auto${log.toTitleCase(a)}`]&&(toggle.autoGen(a),o=!0)}),feedback.notify(`${settings.controls[t].label} ${menus.toolbar.state.words[+config[t]]}`,null,o?2.75:null),modals.settings.get()){const a=document.querySelector(`[id*=${t}] input`);a.checked!=config[t]&&modals.settings.toggle.switch(a)}},minimized(e=""){const t=e=="on"||!e&&!config.minimized;settings.save("minimized",t);const o=app.div.querySelector("[id$=chevron-btn]");o&&(o.textContent="",o.append(icons.create({key:`chevron${config.minimized?"Up":"Down"}`,size:22,style:"position: relative ; top: -1px"})),o.onclick=()=>{app.div.querySelector("[id$=font-size-slider-track]")?.classList.contains("active")&&fontSizeSlider.toggle("off"),toggle.minimized()}),update.appBottomPos(),tooltip.toggle("off")},proxyMode(){if(settings.save("proxyAPIenabled",!config.proxyAPIenabled),feedback.notify(`${app.msgs.menuLabel_proxyAPImode} ${menus.toolbar.state.words[+config.proxyAPIenabled]}`),menus.toolbar.refresh(),modals.settings.get()){const t=document.querySelector("[id*=proxy] input"),o=document.querySelector("[id*=preferredAPI]"),a=document.querySelector("[id*=streaming] input");t.checked!=config.proxyAPIenabled&&modals.settings.toggle.switch(t),o.classList.toggle("active",config.proxyAPIenabled),o.style.pointerEvents=config.proxyAPIenabled?"":"none",(a.checked&&!config.proxyAPIenabled||!a.checked&&config.proxyAPIenabled&&!config.streamingDisabled)&&modals.settings.toggle.switch(a)}const e=app.div.querySelector(`#${app.slug} .api-btn`);e&&(e.style.pointerEvents=config.proxyAPIenabled?"":"none"),app.div.querySelector(`.${app.slug}-alert`)&&get.reply({msgs:app.msgChain,src:get.reply.src})},relatedQueries(){settings.save("rqDisabled",!config.rqDisabled),update.rqVisibility(),!config.rqDisabled&&!app.div.querySelector(`.${app.slug}-related-queries`)&&get.related(app.msgChain[app.msgChain.length-1]?.content||C).then(e=>show.related(e)).catch(e=>{log.error(e.message),api.tryNew(get.related)}),update.replyPreMaxHeight(),feedback.notify(`${app.msgs.menuLabel_relatedQueries} ${menus.toolbar.state.words[+!config.rqDisabled]}`)},sidebar(e,t=""){const o=e+"Sidebar",a=config.stickySidebar;let n=!1;if(t=="on"||!t&&!config[o]?(e=="sticky"&&config.anchored&&(toggle.anchorMode(),n=!0),settings.save(o,!0)):settings.save(o,!1),app.div.classList.toggle(e,config[o]),update.replyPreMaxHeight(),update.bylineVisibility(),update.chatbarWidth(),e=="wider"&&document.querySelectorAll(`#${app.slug} svg.widescreenTall, #${app.slug} svg.widescreenWide`).forEach(s=>s.replaceWith(icons.create({key:`widescreen${config.widerSidebar?"Wide":"Tall"}`}))),modals.settings.get()){const s=document.querySelector(`[id*=${e}] input`);s.checked^config[`${e}Sidebar`]&&modals.settings.toggle.switch(s)}e=="sticky"&&a==config.stickySidebar||feedback.notify(`${app.msgs[`menuLabel_${e}Sidebar`]||log.toTitleCase(e)+" Sidebar"} ${menus.toolbar.state.words[+config[o]]}`,null,n?2.75:null)},streaming(){if(env.scriptManager.supportsStreaming)if(config.proxyAPIenabled)settings.save("streamingDisabled",!config.streamingDisabled),feedback.notify(`${settings.controls.streamingDisabled.label} ${menus.toolbar.state.words[+!config.streamingDisabled]}`);else{let e=`${settings.controls.streamingDisabled.label} ${app.msgs.alert_isCurrentlyOnlyAvailBy} ${app.msgs.alert_switchingOn} ${app.msgs.mode_proxy}. (${app.msgs.alert_openAIsupportSoon}!)`;const t=app.msgs.alert_switchingOn;e=e.replace(t,`<a class="alert-link" href="#">${t}</a>`);const o=modals.alert(`${app.msgs.mode_streaming} ${app.msgs.alert_unavailable}`,e);o.querySelector('[href="#"]').onclick=()=>{o.querySelector(".modal-close-btn").click(),toggle.proxyMode()}}else{const e=env.browser.isFF?"https://addons.mozilla.org/firefox/addon/scriptcat/":env.browser.isEdge?"https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh":"https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf";modals.alert(`${settings.controls.streamingDisabled.label} ${app.msgs.alert_unavailable}`,`${settings.controls.streamingDisabled.label} ${app.msgs.alert_isOnlyAvailFor} <a target="_blank" rel="noopener" href="https://tampermonkey.net">Tampermonkey</a> ${app.msgs.about_and} <a target="_blank" rel="noopener" href="${e}">ScriptCat</a>. (${app.msgs.alert_userscriptMgrNoStream}.)`)}}},window.get={json(e){return new Promise((t,o)=>{let a=0;(function s(d){xhr({method:"GET",url:d,onload:i=>{i.status==404&&a<1?(a++,s(d.endsWith(".json")?d+"5":d.slice(0,-1))):n(i,t,o)},onerror:i=>o(new Error(`LOAD ERROR: ${i.message}`))})})(e);function n(s,d,i){if(s.status>=300){const l=s.status>=300&&s.status<400?"REDIRECT":s.status>=400&&s.status<500?"CLIENT":"SERVER";return i(new Error(`${l} ERROR: ${s.status}`))}try{d(JSON5.parse(s.responseText))}catch(l){i(new Error(`PARSE ERROR: ${l.message}`))}}})},async related(e){if(get.related.status="waiting",get.related.triedAPIs=get.related.triedAPIs||[],get.related.attemptCnt=get.related.attemptCnt||1,get.related.api=api.pick(get.related),!get.related.api)return;get.related.api=="OpenAI"&&(config.openAIkey=await Promise.race([session.getOAItoken(),new Promise(n=>setTimeout(n,3e3))]));const t=get.related.api;get.related.query=e,get.related.timeout=setTimeout(()=>{get.related.status!="done"&&get.related.api==t&&get.related.triedAPIs.length!=Object.keys(apis).length&&api.tryNew(get.related,"timeout")},7e3);const o=get.related.api;let a=prompts.create("relatedQueries",{prevQuery:e,mods:"all"});return a=prompts.augment(a,{api:o}),new Promise(n=>{const s=apis[o].method,d=api.createReqData(o,[{role:"user",content:a}]),i={headers:api.createHeaders(o),method:s,responseType:"text",onerror:l=>{log.error(l),api.tryNew(get.related)},onload:l=>api.process.text(l,{caller:get.related,callerAPI:o}).then(n),url:apis[o].endpoints?.completions||apis[o].endpoint};s=="POST"?i.data=JSON.stringify(d):s=="GET"&&(i.url+=`?q=${d}`),xhr(i)})},async reply({msgs:e,src:t=null}){get.reply.src=t,show.reply.updatedAPIinHeader=!1;const o=app.div.querySelector(`.${app.slug}-related-queries`),a=icons.create({key:"arrowsCyclic",size:15});let n;if(a.style.cssText="position: relative ; top: 2px ; margin-right: 6px",app.div.querySelector(".reply-pre")?(/regen|summarize/i.test(t)||o?.remove(),app.div.querySelector("footer").textContent="",n=app.div.querySelector("section"),n.style.margin="3px 0 -10px",n.textContent=app.alerts.waitingResponse,a.style.animation="rotate 1s infinite cubic-bezier(0, 1.05, 0.79, 0.44)"):(feedback.appAlert("waitingResponse"),n=app.div.querySelector(`.${app.slug}-alert`),a.style.animation="rotate 2s infinite linear"),n.classList.add("loading","no-user-select"),n.prepend(a),e=structuredClone(e),e.length>3&&(e=e.slice(-3)),e.forEach(r=>{r.role=="assistant"&&r.content.length>250&&(r.content=r.content.substring(0,250)+"...")}),get.reply.status="waiting",get.reply.triedAPIs=get.reply.triedAPIs||[],get.reply.attemptCnt=get.reply.attemptCnt||1,get.reply.api=config.proxyAPIenabled?api.pick(get.reply):"OpenAI",!get.reply.api)return feedback.appAlert(`${config.preferredAPI?"api":"proxy"}NotWorking`,`suggest${config.preferredAPI?"DiffAPI":"OpenAI"}`);if(!config.proxyAPIenabled)config.openAIkey=await Promise.race([session.getOAItoken(),new Promise(r=>setTimeout(r,3e3))]);else{const r=get.reply.api;clearTimeout(get.reply.timeout),get.reply.timeout=get.reply.timeout=setTimeout(()=>{config.proxyAPIenabled&&get.reply.status!="done"&&!get.reply.sender&&get.reply.api==r&&get.reply.triedAPIs.length!=Object.keys(apis).length-1&&api.tryNew(get.reply,"timeout")},(config.streamingDisabled?10:7*(config.preferredAPI?2:1))*1e3)}const s=get.reply.api,d=e[e.length-1];d.content=prompts.augment(d.content,{api:s,caller:get.reply});const i=apis[s].method,l=api.createReqData(s,e),c={headers:api.createHeaders(s),method:i,responseType:config.streamingDisabled||!config.proxyAPIenabled?"text":"stream",onerror:r=>{log.error(r),config.proxyAPIenabled?api.tryNew(get.reply):feedback.appAlert(config.openAIkey?["OpenAI","notWorking","suggestProxy"]:"login")},onload:r=>api.process.text(r,{caller:get.reply,callerAPI:s}),onloadstart:r=>api.process.stream(r,{caller:get.reply,callerAPI:s}),url:apis[s].endpoints?.completions||apis[s].endpoint};i=="POST"?c.data=JSON.stringify(l):i=="GET"&&(c.url+=`?q=${l}`),xhr(c),!config.rqDisabled&&!o&&get.reply.attemptCnt==1&&get.related(app.msgChain[app.msgChain.length-1].content).then(r=>show.related(r)).catch(r=>{log.error(r.message),api.tryNew(get.related)}),update.footerContent()}},window.show={async codeCornerBtns(){app.div.querySelector("code")&&(window.codeLangData||=await get.json(`${app.urls.aiwebAssets}/data/code-languages.json`).catch(e=>log.error(e.message)),app.div.querySelectorAll("code").forEach(e=>{if(e.querySelector("[id$=copy-btn]"))return;const t=dom.create.elem("div",{class:"code-header"}),o=buttons.reply.bubble.copy.cloneNode(!0);o.style.cssText="",Object.entries(buttons.reply.bubble.copy.listeners).forEach(([s,d])=>o[s]=d);const a=dom.create.elem("btn",{id:`${app.slug}-download-btn`}),n={download:icons.create({key:"download"}),downloaded:icons.create({key:"checkmarkDouble"})};Object.entries(n).forEach(([s,d])=>{d.id=`${app.slug}-${s}-icon`,["width","height"].forEach(i=>d.setAttribute(i,15))}),a.append(n.download),a.onclick=s=>{if(!a.firstChild.matches("[id$=download-icon]"))return;a.style.cursor="default",a.firstChild.replaceWith(n.downloaded.cloneNode(!0)),tooltip.update(s.currentTarget),setTimeout(()=>{a.firstChild.replaceWith(n.download.cloneNode(!0)),a.style.cursor="pointer",a.matches(":hover")&&a.dispatchEvent(new Event("mouseenter"))},1e4);const d=a.closest("code"),i={hljsSlug:/language-(\w+)/.exec(d.className)?.[1]};if(i.hljsSlug&&window.codeLangData){for(const[m,p]of Object.entries(window.codeLangData))if(p.hljsSlug==i.hljsSlug){[i.name,i.fileExtension]=[m,p.fileExtension];break}}const l=d.textContent.replace(/^>> /,"").trim()+`
`,c=dom.create.anchor(URL.createObjectURL(new Blob([l],{type:"text/plain"}))),r=new Date,g=[r.getFullYear(),String(r.getMonth()+1).padStart(2,"0"),String(r.getDate()).padStart(2,"0")].join("-");c.download=`${app.slug}_${i.name.toLowerCase()||"code"}_${g}_${Date.now().toString(36)}${i.fileExtension?"."+i.fileExtension:""}`,document.body.append(c),c.click(),c.remove(),URL.revokeObjectURL(c.href)},a.onmouseenter=a.onmouseleave=tooltip.toggle,t.append(o,a),e.prepend(t)}))},related(e){if(log.caller="show.related()",get.reply.status=="waiting")return setTimeout(()=>show.related(e),500,e);const t=app.div.querySelector(`#${app.slug} .reply-pre`)?.textContent.trim();if(!/shuffle|summarize/i.test(get.reply.src)&&!get.related.replyIsQuestion&&/[?？]/.test(t))log.debug("Re-getting related queries to answer reply question..."),get.related.replyIsQuestion=!0,get.related(t).then(o=>show.related(o)).catch(o=>{log.error(o.message),api.tryNew(get.related)});else if(e&&!app.div.querySelector(`.${app.slug}-related-queries`)){const o=dom.create.elem("div",{class:`${app.slug}-related-queries anchored-hidden`});app.div.append(o),e.forEach((a,n)=>{const s=dom.create.elem("div",{title:app.msgs.tooltip_sendRelatedQuery,tabindex:0,class:`${app.slug}-related-query fade-in no-user-select no-mobile-tap-outline`});s.textContent=a,s.prepend(icons.create({key:"arrowDownRight"})),o.append(s),setTimeout(()=>{s.classList.add("active"),s.onclick=s.onkeydown=d=>{const i=[" ","Spacebar","Enter","Return"],l=[32,13];if(i.includes(d.key)||l.includes(d.keyCode)||d.type=="click"){d.preventDefault();const c=app.div.querySelector("textarea");if(!c)return;const r=d.target.textContent;c.value=r,/\[[^[\]]+\]/.test(r)?(c.focus(),ui.addListeners.replySection.chatbarAutoSizer(),c.setSelectionRange(r.indexOf("["),r.indexOf("]")+1)):c.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0}))}}},(n+1)*50)}),update.replyPreMaxHeight(),get.related.replyIsQuestion=null}},reply({content:e,standby:t=!1,apiUsed:o=null}){show.reply.shareURL=null,tooltip.toggle("off");const a=app.div.querySelector("[id$=regen-btn]")?.firstChild;if(a?.style?.animation){a.style.animation=a.style.cursor="";const r=a.closest("btn");r.matches(":hover")&&r.dispatchEvent(new Event("mouseenter"))}if(!app.div.querySelector(".reply-pre")){app.div.textContent="",dom.addRisingParticles(app.div);const r=dom.create.elem("div",{class:"app-header",style:"margin: -8px 0 0 0"});app.div.append(r);const g=dom.create.elem("span",{id:"app-prefix",class:"no-user-select",style:`margin-right: -2px ; font-size: ${env.browser.isMobile?"1.7rem":"1.1rem"}`});g.textContent="\u{1F916} ",r.append(g);const m=$.googlegpt.create();m.width=env.browser.isMobile?177:env.browser.isFF?124:122,m.style.cssText=`position: relative ; top: ${env.browser.isMobile?4:env.browser.isFF?3:2}px`+(env.browser.isMobile?"; margin-left: 1px":"");const p=dom.create.anchor(app.urls.app,m);p.classList.add(`${app.slug}-name`,"no-user-select"),r.append(p);const u=dom.create.elem("div",{id:`${app.slug}-header-btns`,class:"no-mobile-tap-outline",style:"margin-top: 1px"});if(r.append(u),!env.browser.isMobile){var n=dom.create.elem("btn",{id:`${app.slug}-chevron-btn`,class:`${app.slug}-header-btn anchored-only`,style:"margin: -3.5px 1px 0 11px"});n.append(icons.create({key:`chevron${config.minimized?"Up":"Down"}`,size:22,style:"position: relative ; top: -1px"})),u.append(n)}const b=dom.create.elem("btn",{id:`${app.slug}-about-btn`,class:`${app.slug}-header-btn`,style:`margin-top: ${env.browser.isMobile?.25:-.15}rem`});b.append(icons.create({key:"questionMarkCircle"})),u.append(b);const h=dom.create.elem("btn",{id:`${app.slug}-settings-btn`,class:`${app.slug}-header-btn`,style:`margin: ${env.browser.isMobile?6:0}px 10px 0 4.5px`});if(h.append(icons.create({key:"sliders",size:17})),u.append(h),!t){var s=dom.create.elem("btn",{id:`${app.slug}-font-size-btn`,class:`${app.slug}-header-btn app-hover-only`,style:`margin: ${env.browser.isMobile?5:-2}px 9px 0 0`});s.append(icons.create({key:"fontSize"})),u.append(s)}if(!env.browser.isMobile){var d=dom.create.elem("btn",{id:`${app.slug}-pin-btn`,class:`${app.slug}-header-btn app-hover-only`,style:"margin: -1.55px 9.5px 0 0"});d.append(icons.create({key:"pin",size:16.5,style:"position: relative ; top: 2px"})),u.append(d);var i=dom.create.elem("btn",{id:`${app.slug}-wsb-btn`,class:`${app.slug}-header-btn app-hover-only anchored-hidden`,style:"margin: -0.5px 12px 0 0"});i.append(icons.create({key:`widescreen${config.widerSidebar?"Wide":"Tall"}`})),u.append(i);var l=dom.create.elem("btn",{id:`${app.slug}-arrows-btn`,class:`${app.slug}-header-btn app-hover-only anchored-only`,style:"margin: 0 11.5px 0 0"});l.append(icons.create({key:`arrowsDiagonal${config.expanded?"In":"Out"}`,size:17})),u.append(l)}if(ui.addListeners.btns.appHeader(),!env.browser.isMobile){const f=dom.create.elem("span",{class:"byline no-user-select"});f.textContent="by ",f.append(dom.create.anchor(app.urls.publisher,"KudoAI")),r.querySelector(`.${app.slug}-name`).insertAdjacentElement("afterend",f),update.bylineVisibility()}if(t){const f=dom.create.elem("div",{class:`${app.slug}-standby-btns`,style:"will-change: transform"});["query","summarize"].forEach(y=>{const v={node:dom.create.elem("button",{class:`${app.slug}-standby-btn no-mobile-tap-outline`}),icon:icons.create({key:y=="query"?"send":"summarize"}),textSpan:dom.create.elem("span")};v.textSpan.textContent=y=="query"?`${app.msgs.btnLabel_sendSearchQueryTo} ${app.name}`:app.msgs.tooltip_summarizeResults,v.node.onclick=()=>{show.reply.userInteracted=!0,show.reply.chatbarFocused=!1,app.msgChain.push({role:"user",content:y=="summarize"?prompts.create("summarizeResults"):new URL(location.href).searchParams.get("q")}),get.reply({msgs:app.msgChain,src:y})},v.node.append(v.icon,v.textSpan),f.append(v.node)}),app.div.append(f)}else replyBubble.insert()}if(!app.div.querySelector(`#${app.slug}-chatbar`)){const r=app.div.querySelector("section")||dom.create.elem("section");r.className.includes("loading")&&(r.textContent=r.className=r.style="");const g=dom.create.elem("form"),m=dom.create.elem("div"),p=dom.create.elem("textarea",{id:`${app.slug}-chatbar`,rows:1,placeholder:`${app.msgs[t?"placeholder_askSomethingElse":"tooltip_sendReply"]}...`});m.append(p),g.append(m),r.append(g),app.div.querySelector(".reply-bubble, [class*=standby-btns]").after(r),["send","shuffle","summarize"].forEach((u,b)=>{if(u=="summarize"&&app.div.querySelector("[class*=standby-btn]"))return;const h=dom.create.elem("button",{id:`${app.slug}-${u}-btn`,class:`${app.slug}-chatbar-btn no-mobile-tap-outline`});h.style.right=`${b==0?3:b==1?-3:-5}px`,h.append(icons.create({key:u,size:u=="send"?14:18})),m.append(h)}),app.footer=app.div.querySelector("footer")||dom.create.elem("footer"),app.footer.append(app.footerContent),app.div.querySelector("footer")||app.div.append(app.footer),ui.addListeners.replySection(),env.browser.isMobile&&show.reply.userInteracted&&(document.body.scrollTop=0,document.documentElement.scrollTop=0)}if(!t){if(!show.reply.updatedAPIinHeader){let p=function(u,b,{speed:h=1}={}){b.textContent="";let f=0;(function y(){f<u.length&&(b.textContent+=u[f],f++,setTimeout(y,50/h))})()};var c=p;show.reply.updatedAPIinHeader=!0;const g=app.div.querySelector(".reply-header-txt"),m=dom.create.elem("span",{class:"api-btn",style:"cursor: pointer"});m.textContent="\u29BF",m.onmouseenter=m.onmouseleave=m.onclick=menus.hover.toggle,m.style.pointerEvents=config.proxyAPIenabled?"":"none",g.replaceChildren(m,` API ${app.msgs.componentLabel_used}: `,dom.create.elem("b")),setTimeout(()=>p(o,g.lastChild,{speed:1.5}),150)}const r=app.div.querySelector(".reply-pre");try{r.innerHTML=marked.parse(e)}catch(g){log.error(g.message)}hljs.highlightAll(),r.querySelectorAll("code").forEach(g=>{g.innerHTML=g.innerHTML.replace(/;\s*/g,";<br>")}),update.replyPrefix(),[r,...r.querySelectorAll("*")].forEach(g=>renderMathInElement(g,{delimiters:app.katexDelimiters,throwOnError:!1})),config.stickySidebar&&update.replyPreMaxHeight(),config.autoScroll&&!env.browser.isMobile&&config.proxyAPIenabled&&!config.streamingDisabled&&(config.stickySidebar||config.anchored?r.scrollTop=r.scrollHeight:scrollBy({top:app.div.querySelector(`#${app.slug}-chatbar`).getBoundingClientRect().bottom-innerHeight+13}))}!show.reply.chatbarFocused&&!env.browser.isMobile&&(!config.autoFocusChatbarDisabled&&(config.anchored||app.div.offsetHeight<innerHeight-app.div.getBoundingClientRect().top)||config.autoFocusChatbarDisabled&&config.anchored&&show.reply.userInteracted)&&(app.div.querySelector(`#${app.slug}-chatbar`).focus(),show.reply.chatbarFocused=!0),config.anchored&&update.appBottomPos(),update.chatbarWidth(),show.reply.userInteracted=!1}},window.fontSizeSlider={fadeInDelay:5,hWheelDistance:10,createAppend(){fontSizeSlider.cursorOverlay=dom.create.elem("div",{class:"cursor-overlay"});const e=dom.create.elem("div",{id:`${app.slug}-font-size-slider-track`,class:"fade-in-less",style:"display: none"}),t=dom.create.elem("div",{title:Math.floor(config.fontSize*10)/10+"px",id:`${app.slug}-font-size-slider-thumb`}),o=dom.create.elem("div",{id:`${app.slug}-font-size-slider-tip`});e.append(t,o),app.div.insertBefore(e,app.div.querySelector(`.${app.slug}-tooltip,.reply-bubble`)),setTimeout(()=>{const i=(config.fontSize-config.minFontSize)/(config.maxFontSize-config.minFontSize)*(e.offsetWidth-t.offsetWidth);t.style.left=i+"px"},fontSizeSlider.fadeInDelay);let a=!1,n,s;t.addEventListener(inputEvents.down,i=>{i.button==0&&(i.preventDefault(),a=!0,n=i.clientX,s=t.offsetLeft,document.body.appendChild(fontSizeSlider.cursorOverlay))}),document.addEventListener(inputEvents.move,i=>{a&&d(s+i.clientX-n)}),document.addEventListener(inputEvents.up,()=>{a=!1,fontSizeSlider.cursorOverlay?.isConnected&&fontSizeSlider.cursorOverlay.remove()}),env.browser.isMobile||(e.onwheel=i=>{i.preventDefault(),d(t.offsetLeft-Math.sign(i.deltaY)*fontSizeSlider.hWheelDistance)}),e.addEventListener(inputEvents.down,i=>{if(i.button!=0)return;i.preventDefault();const l=i.clientX||i.touches?.[0]?.clientX;d(l-e.getBoundingClientRect().left-t.offsetWidth/2),a=!0,n=l,s=t.offsetLeft,document.body.appendChild(fontSizeSlider.cursorOverlay)});function d(i){const l=e.offsetWidth-t.offsetWidth;i<0&&(i=0),i>l&&(i=l),t.style.left=i+"px";const c=app.div.querySelector(".reply-pre"),r=i/l,g=config.minFontSize+r*(config.maxFontSize-config.minFontSize);c.style.fontSize=g+"px",c.style.lineHeight=g*config.lineHeightRatio+"px",settings.save("fontSize",g),t.title=Math.floor(config.fontSize*10)/10+"px"}return e},toggle(e=""){const t=document.getElementById(`${app.slug}-font-size-slider-track`)||fontSizeSlider.createAppend(),o=app.div.querySelector(".reply-tip"),a=document.getElementById(`${app.slug}-font-size-slider-tip`);if(e=="on"||!e&&t.style.display=="none"){const n=document.getElementById(`${app.slug}-font-size-btn`),s={appDiv:app.div.getBoundingClientRect(),btnSpan:n.getBoundingClientRect()};a.style.right=`${s.appDiv.right-(s.btnSpan.left+s.btnSpan.right)/2-35.5}px`,t.style.display=a.style.display="",o&&(o.style.display="none"),setTimeout(()=>t.classList.add("active"),fontSizeSlider.fadeInDelay)}else(e=="off"||!e&&t.style.display!="none")&&(t.classList.remove("active"),o&&(o.style.display=""),a.style.display=t.style.display="none")}};const $={googlegpt:{create(){const e=dom.create.elem("img",{id:`${app.slug}-logo`,class:"no-mobile-tap-outline"});return $.googlegpt.update(e),e},update(...e){e=e.flat(),e.length||(e=document.querySelectorAll(`#${app.slug}-logo`)),e.forEach(t=>t.src=GM_getResourceText(`ggpt${env.ui.app.scheme=="dark"?"DS":"LS"}logo`))}}};if(window.modals={stack:[],class:`${app.slug}-modal`,about(){const e=`text-transform: uppercase ; font-size: 16px ; font-weight: bold ;color: ${env.ui.app.scheme=="dark"?"white":"#494141"}`,t=modals.alert(`${app.symbol} ${app.msgs.appName}`,`<span style="${e}">\u{1F9E0} ${app.msgs.about_author}:</span> <a href="${app.author[0].url}">${app.author[0].name}</a> ${app.msgs.about_and} <a href="${app.urls.contributors}">${app.msgs.about_contributors}</a>
<span style="${e}">\u{1F3F7}\uFE0F ${app.msgs.about_version}:</span> <span class="about-em">${app.version}</span>
<span style="${e}">\u{1F4DC} ${app.msgs.about_openSourceCode}:</span> <a href="${app.urls.github}" target="_blank" rel="nopener">`+app.urls.github+`</a>
<span style="${e}">\u{1F680} ${app.msgs.about_latestChanges}:</span> <a href="${app.urls.github}/commits" target="_blank" rel="nopener">${app.urls.github}/commits</a>
<span style="${e}">\u26A1 ${app.msgs.about_poweredBy}:</span> <a href="${app.urls.chatgptjs}" target="_blank" rel="noopener">chatgpt.js</a> v${app.chatgptjsVer}`,[function(){userscript.updateCheck()},function(){},function(){},function(){}],"",585),o=$.googlegpt.create();return o.width=405,o.style.cssText=`max-width: 98% ; margin: 15px ${env.browser.isMobile?"auto":"14.5%"} -1px`,t.firstChild.nextSibling.before(o),t.querySelector("h2").remove(),t.querySelector("p").style.cssText=`overflow-wrap: anywhere ; line-height: 1.55 ;margin: ${env.browser.isPhone?"21px 0 -20px":"15px 0 -28px 17px"}`,t.querySelectorAll("button").forEach(a=>{a.style.cssText="height: 50px ; min-width: 136px",/support|rate|extensions/i.test(a.textContent)&&(a.replaceWith(a=a.cloneNode(!0)),a.onclick=()=>modals.safeWinOpen(a.textContent.includes(app.msgs.btnLabel_getSupport)?app.urls.support:a.textContent.includes(app.msgs.btnLabel_rateUs)?app.urls.review.g2:app.urls.relatedExtensions)),/updates/i.test(a.textContent)?a.textContent=`\u{1F680} ${app.msgs.btnLabel_checkForUpdates}`:/support/i.test(a.textContent)?a.textContent=`\u{1F9E0} ${app.msgs.btnLabel_getSupport}`:/rate/i.test(a.textContent)?a.textContent=`\u2B50 ${app.msgs.btnLabel_rateUs}`:/extensions/i.test(a.textContent)?a.textContent=`\u{1F916} ${app.msgs.btnLabel_moreAIextensions}`:a.style.display="none"}),t},alert(e="",t="",o="",a="",n=""){const s=chatgpt.alert(e,t,o,a,n),d=document.getElementById(s).firstChild;return this.init(d),d},api(){const e=[app.msgs.menuLabel_random,...Object.keys(apis).filter(a=>a!="OpenAI")].map(a=>{function n(){if(settings.save("preferredAPI",a==app.msgs.menuLabel_random?!1:a),modals.settings.get()){const s=document.querySelector("[id*=preferredAPI] > span");s.textContent!=a&&(s.textContent=a)}feedback.notify(`${app.msgs.menuLabel_preferred} API ${app.msgs.menuLabel_saved.toLowerCase()}`,`${config.anchored?"top":"bottom"}-right`),app.div.querySelector(`.${app.slug}-alert`)&&config.proxyAPIenabled&&get.reply({msgs:app.msgChain,src:get.reply.src})}return Object.defineProperty(n,"name",{value:a.toLowerCase()}),n}),t=modals.alert(`${app.msgs.menuLabel_preferred} API:`,"",e,"",503);t.querySelector("h2").style.justifySelf="center";const o=t.querySelector(".modal-buttons");return o.style.cssText=` /* y-pad, gridify */
                margin: 18px 0px 14px !important ; display: grid ; grid-template-columns: repeat(3, 1fr) ; gap: 10px`,o.querySelectorAll("button").forEach((a,n)=>{n==0?a.style.display="none":a.classList.toggle("primary-modal-btn",config.preferredAPI.toLowerCase()==a.textContent.toLowerCase()||a.textContent==app.msgs.menuLabel_random&&!config.preferredAPI)}),t},handlers:{dismiss:{click(e){const t=e.target;(t==e.currentTarget||t.closest("[class*=-close-btn]"))&&modals.hide((t.closest("[class*=-modal-bg]")||t).firstChild)},key(e){(e.key.startsWith("Esc")||e.keyCode==27)&&modals.hide(document.querySelector("[class$=-modal]"))}},drag:{mousedown(e){if(e.button!=0||!/auto|default/.test(getComputedStyle(e.target).cursor))return;modals.draggingModal=e.currentTarget,e.preventDefault(),Object.assign(modals.draggingModal.style,{transform:"scale(1.05)",willChange:"transform",transition:"0.1s","-webkit-transition":"0.1s","-moz-transition":"0.1s","-o-transition":"0.1s","-ms-transition":"0.1s"}),document.body.style.cursor="grabbing",[...modals.draggingModal.children].forEach(o=>o.style.pointerEvents="none"),["mousemove","mouseup"].forEach(o=>document.addEventListener(o,modals.handlers.drag[o]));const t=modals.draggingModal.getBoundingClientRect();modals.handlers.drag.offsetX=e.clientX-t.left+21,modals.handlers.drag.offsetY=e.clientY-t.top+12},mousemove(e){if(modals.draggingModal){const t=e.clientX-modals.handlers.drag.offsetX,o=e.clientY-modals.handlers.drag.offsetY;Object.assign(modals.draggingModal.style,{left:`${t}px`,top:`${o}px`})}},mouseup(){Object.assign(modals.draggingModal.style,{cursor:"inherit",transform:"scale(1)",willChange:"auto",transition:"inherit","-webkit-transition":"inherit","-moz-transition":"inherit","-o-transition":"inherit","-ms-transition":"inherit"}),document.body.style.cursor="",[...modals.draggingModal.children].forEach(e=>e.style.pointerEvents=""),["mousemove","mouseup"].forEach(e=>document.removeEventListener(e,modals.handlers.drag[e])),modals.draggingModal=null}}},hide(e){const t=e?.parentNode;t&&(t.style.animation="modal-zoom-fade-out 0.165s ease-out",t.onanimationend=()=>t.remove())},init(e){this.styles||this.stylize(),e.classList.add("no-user-select",this.class),e.parentNode.classList.add(`${this.class}-bg`),e.onwheel=e.ontouchmove=t=>t.preventDefault(),e.onmousedown=this.handlers.drag.mousedown,e.parentNode.className.includes("chatgpt-modal")||[e.parentNode,e.querySelector("[class*=-close-btn]")].forEach(o=>o.onclick=this.handlers.dismiss.click),dom.addRisingParticles(e),setTimeout(()=>{e.parentNode.style.backgroundColor=`rgba(67,70,72,${env.ui.app.scheme=="dark"?.62:.33})`,e.parentNode.classList.add("animated")},100)},observeRemoval(e,t,o){const a=e.parentNode;new MutationObserver(([n],s)=>{n.removedNodes.forEach(d=>{if(d==a){if(modals.stack[0].includes(o||t)){modals.stack.shift();const i=modals.stack[0];i&&(modals.stack.shift(),modals.open(i))}s.disconnect()}})}).observe(a.parentNode,{childList:!0,subtree:!0})},open(e,t){const o=t?modals[e][t]():(modals[e].show||modals[e])();o&&(settings.controls[e]?.type!="prompt"&&(this.stack.unshift(t?`${e}_${t}`:e),log.debug(`Modal stack: ${JSON.stringify(modals.stack)}`)),this.init(o),this.observeRemoval(o,e,t),modals.handlers.dismiss.key.added||(document.addEventListener("keydown",modals.handlers.dismiss.key),modals.handlers.dismiss.key.added=!0))},replyLang(){for(;;){let e=prompt(`${app.msgs.prompt_updateReplyLang}:`,config.replyLang);if(e==null)break;if(!/\d/.test(e)){e=e.length<4||e.includes("-")?e.toUpperCase():log.toTitleCase(e),settings.save("replyLang",e||env.browser.language),modals.alert(`${app.msgs.alert_langUpdated}!`,`${app.name} ${app.msgs.alert_willReplyIn} ${e||app.msgs.alert_yourSysLang}.`,"","",330),modals.settings.get()&&(document.querySelector("#replyLang-settings-entry span").textContent=e);break}}},safeWinOpen(e){open(e,"_blank","noopener")},scheme(){const e=modals.alert(`${app.name} ${app.msgs.menuLabel_colorScheme.toLowerCase()}:`,"",[function(){},function(){},function(){}]);e.querySelector("h2").style.justifySelf="center",e.querySelector(".modal-buttons").style.cssText="justify-content: center ; margin: 20px 0 9px !important";const t={light:"\u2600\uFE0F",dark:"\u{1F318}",auto:"\u{1F317}"};e.querySelectorAll("button").forEach(a=>{const n=a.textContent.toLowerCase();a.classList.toggle("primary-modal-btn",config.scheme==a.textContent.toLowerCase()||a.textContent=="Auto"&&!config.scheme),Object.prototype.hasOwnProperty.call(t,n)?a.textContent=`${t[n]} ${app.msgs["scheme_"+n]||app.msgs["menuLabel_"+n]||n.toUpperCase()}`:a.style.display="none",a.replaceWith(a=a.cloneNode(!0)),a.onclick=()=>{const s=n=="auto"?ui.getScheme():n;settings.save("scheme",n=="auto"?!1:s),e.querySelectorAll("button").forEach(d=>d.classList.remove("primary-modal-btn")),a.classList.add("primary-modal-btn"),a.style.cssText="pointer-events: none",setTimeout(()=>{a.style.pointerEvents="auto"},100),update.scheme(s),o(n)}});function o(a){feedback.notify(`${app.msgs.menuLabel_colorScheme}: `+(a=="light"?app.msgs.scheme_light||"Light":a=="dark"?app.msgs.scheme_dark||"Dark":app.msgs.menuLabel_auto).toUpperCase());const n=document.querySelectorAll(".chatgpt-notif");n[n.length-1].append(icons.create({key:a=="light"?"sun":a=="dark"?"moon":"arrowsCyclic",style:"width: 23px ; height: 23px ; position: relative ; top: 1px ; margin-left: 6px"}))}return e},settings:{createAppend(){const e=dom.create.elem("div"),t=dom.create.elem("div",{id:`${app.slug}-settings`});e.append(t);const o=Object.keys(settings.controls).filter(p=>!(env.browser.isMobile&&settings.controls[p].mobile==!1)),a=icons.app.googlegpt.create();a.style.cssText+=`width: ${env.browser.isPortrait?64:65}px ;margin: 13px 0 ${env.browser.isPortrait?"-35":"-27"}px ;position: relative ; top: -42px ; ${env.browser.isPortrait?"left: 6px":""}`;const n=dom.create.elem("div",{id:`${app.slug}-settings-title`}),s=icons.create({key:"sliders"}),d=dom.create.elem("h4");s.style.cssText+=`
                    width: 21px ; height: 21px ; position: relative ; top: 2.5px ; right: 12px`,d.textContent=app.msgs.menuLabel_settings,d.prepend(s),n.append(d);const i=[],l=30,c=dom.create.elem("div"),r=env.browser.isMobile&&(env.browser.isPortrait||o.length<8)?1:2,g=Math.floor(o.length/2);for(let p=0;p<r;p++)i.push(dom.create.elem("ul"));c.style.width="95%",r>1&&(c.style.cssText+=`display: flex ; padding: 11px 0 13px ; gap: ${l/2}px`,i[0].style.cssText=`padding-right: ${l/2}px`),o.forEach((p,u)=>{const b=settings.controls[p],h=dom.create.elem("li",{id:`${p}-settings-entry`,title:b.helptip||""}),f=dom.create.elem("label");f.textContent=b.label,h.append(f),i[env.browser.isPortrait?0:+(u>=g)].append(h);const y=icons.create({key:b.icon});if(y.style.cssText="position: relative ;"+(/proxy/i.test(p)?"top: 3px ; left: -0.5px ; margin-right: 9px":/preferred/i.test(p)?"top: 3.5px ; margin-right: 7.5px":/streaming/i.test(p)?"top: 3px ; left: 0.5px ; margin-right: 9px":/auto(?:get|focus)/i.test(p)?"top: 4.5px ; margin-right: 7px":/summarize/i.test(p)?"top: 3.5px ; left: -5px ; margin-right: 3px ; height: 17.5px":/autoscroll/i.test(p)?"top: 3.5px ; left: -1.5px ; margin-right: 6px":/^rq/.test(p)?"top: 2.5px ; left: 0.5px ; margin-right: 9px ; transform: scaleY(-1)":/prefix/i.test(p)?"top: 2.5px ; left: 0.5px ; margin-right: 9px":/suffix/i.test(p)?"top: 4px ; left: -1.5px ; margin-right: 7px":/sidebar/i.test(p)?"top: 4px ; left: -1.5px ; margin-right: 7.5px":/anchor/i.test(p)?"top: 3px ; left: -2.5px ; margin-right: 5.5px":/animation/i.test(p)?"top: 3px ; left: -1.5px ; margin-right: 6.5px":/replylang/i.test(p)?"top: 3px ; left: -1.5px ; margin-right: 9px":/scheme/i.test(p)?"top: 2.5px ; left: -1.5px ; margin-right: 8px":/debug/i.test(p)?"top: 3.5px ; left: -1.5px ; margin-right: 8px":/about/i.test(p)?"top: 3px ; left: -3px ; margin-right: 5.5px":""),h.prepend(y),p.includes("Animation")&&(y[`${p.startsWith("fg")?"last":"first"}Child`].style.fill="none"),b.type=="toggle"){const v=dom.create.elem("input",{type:"checkbox",disabled:!0,style:"display: none"});v.checked=config[p]^p.includes("Disabled")&&!(p=="streamingDisabled"&&!config.proxyAPIenabled);const x=dom.create.elem("span",{class:"track"}),k=dom.create.elem("span",{class:"knob"});x.append(k),h.append(v,x),setTimeout(()=>modals.settings.toggle.updateStyles(v),155),h.onclick=()=>{p=="streamingDisabled"&&(!env.scriptManager.supportsStreaming||!config.proxyAPIenabled)||modals.settings.toggle.switch(v);const w=/get|summarize/i.exec(p),_=/(?:suf|pre)fix/i.exec(p);p.includes("proxy")?toggle.proxyMode():p.includes("streaming")?toggle.streaming():p.includes("rq")?toggle.relatedQueries():w?toggle.autoGen(w[0].toLowerCase()):_?toggle.manualGen(_[0].toLowerCase()):p.includes("Sidebar")?toggle.sidebar(p.replace("Sidebar","")):p.includes("anchor")?toggle.anchorMode():p.includes("bgAnimation")?toggle.animations("bg"):p.includes("fgAnimation")?toggle.animations("fg"):(settings.save(p,!config[p]),feedback.notify(`${settings.controls[p].label} ${menus.toolbar.state.words[+(p.includes("Disabled")^config[p])]}`))}}else{h.classList.add("active");const v=dom.create.elem("span",{style:`float: right ; font-size: 11px ; margin-top: 3px ;${p!="about"?"text-transform: uppercase !important":""}`});({about:()=>{const x=dom.create.elem("div"),k="&emsp;&emsp;&emsp;&emsp;&emsp;";modals.settings.aboutContent={short:`v${GM_info.script.version}`,long:`${app.msgs.about_version}: <span class="about-em">v${GM_info.script.version+k}</span>${app.msgs.about_poweredBy} <span class="about-em">chatgpt.js</span>${k}`};for(let w=0;w<7;w++)modals.settings.aboutContent.long+=modals.settings.aboutContent.long;x.innerHTML=modals.settings.aboutContent[config.fgAnimationsDisabled?"short":"long"],x.style.float=config.fgAnimationsDisabled?"right":"",v.append(x),h.onclick=()=>modals.open("about")},preferredAPI:()=>{v.textContent=config.preferredAPI||app.msgs.menuLabel_random,h.onclick=()=>modals.open("api"),h.classList.toggle("active",config.proxyAPIenabled),h.style.pointerEvents=config.proxyAPIenabled?"":"none"},replyLang:()=>{v.textContent=config.replyLang,h.onclick=()=>modals.open("replyLang")},scheme:()=>{modals.settings.updateSchemeStatus(v),h.onclick=()=>modals.open("scheme")}})[p]?.(),h.append(v)}}),c.append(...i);const m=dom.create.elem("div",{title:app.msgs.tooltip_close,class:`${app.slug}-modal-close-btn no-mobile-tap-outline`});return m.append(icons.create({key:"x"})),t.append(a,n,m,c),document.body.append(e),e},get(){return document.getElementById(`${app.slug}-settings`)},show(){const e=modals.settings.get()?.parentNode||modals.settings.createAppend();if(e.style.display="",env.browser.isMobile){const t=e.querySelector(`#${app.slug}-settings`),o=.93*innerWidth/t.offsetWidth;t.style.transform=`scale(${o})`}return e.firstChild},toggle:{switch(e){e.checked=!e.checked,modals.settings.toggle.updateStyles(e)},updateStyles(e){const t=e.parentNode,o=t.querySelector("span"),a=o.querySelector("span");requestAnimationFrame(()=>{o.style.backgroundColor=e.checked?"#ad68ff":"#ccc",o.style.boxShadow=e.checked?"2px 1px 9px #d8a9ff":"none",a.style.transform=e.checked?"translateX(14px) translateY(0)":"translateX(0)",t.classList.toggle("active",e.checked)})}},updateSchemeStatus(e=null){e||=document.querySelector("#scheme-settings-entry span"),e&&(e.textContent="",e.append(document.createTextNode(app.msgs[/dark|light/.test(config.scheme)?`scheme_${config.scheme}`:"menuLabel_auto"]),icons.create({size:12,key:config.scheme=="dark"?"moon":config.scheme=="light"?"sun":"arrowsCyclic"})))}},shareChat(e){const t=modals.alert(`${log.toTitleCase(app.msgs.btnLabel_convo)} ${app.msgs.tooltip_page} ${app.msgs.alert_generated.toLowerCase()}!`,`<a target="_blank" rel="noopener" href="${e}">${e}</a>`,[function(){navigator.clipboard.writeText(e).then(()=>feedback.notify(app.msgs.notif_copiedToClipboard))},function(){modals.safeWinOpen(e)},function(){xhr({method:"GET",url:e,onload:d=>{const i=d.responseText,l=dom.create.anchor(URL.createObjectURL(new Blob([i],{type:"text/html"})));l.download=i.match(/<title>([^<]+)<\/title>/i)[1].replace(/\s*[—|/]+\s*/g," ").replace(/\.{2,}/g,"").toLowerCase().trim().replace(/\s+/g,"-")+".html",document.body.append(l),l.click(),l.remove(),URL.revokeObjectURL(l.href)},onerror:d=>log.error("Failed to download chat:",d)})}]),o=t.querySelector("h2"),a=icons.create({key:"speechBalloons"});a.style.cssText=`height: 23px ; width: 23px ; position: relative ; top: 5px ; right: 8px ;fill: ${env.ui.app.scheme=="dark"?"white":"black"}`,o.prepend(a);const n=t.querySelectorAll("button");return n[0].style.display="none",env.browser.language.startsWith("en")||n.forEach(s=>{/copy/i.test(s.textContent)?s.textContent=`${app.msgs.tooltip_copy} URL`:/visit/i.test(s.textContent)?s.textContent=app.msgs.btnLabel_visitPage:/download/i.test(s.textContent)&&(s.textContent=`${app.msgs.btnLabel_download} ${log.toTitleCase(app.msgs.btnLabel_convo)}`)}),t.style.wordBreak="break-all",t.querySelector("h2").style.justifySelf="center",t.querySelector("p").style.cssText="text-align: center ; margin: 10px 0 -22px",t.querySelector(".modal-buttons").style.cssText="justify-content: center",t},stylize(){this.styles||document.head.append(this.styles=dom.create.elem("style")),this.styles.textContent=`:root {
                  --modal-btn-zoom: scale(1.055) ; --modal-btn-transition: transform 0.15s ease ;
                  --settings-li-transition: transform 0.1s ease ; /* for Settings entry hover-zoom */
                  --fg-transition: opacity 0.65s cubic-bezier(0.165,0.84,0.44,1), /* fade-in */
                                     transform 0.55s cubic-bezier(0.165,0.84,0.44,1) !important ; /* move-in */
                  --bg-transition: background-color 0.25s ease !important } /* dim */@keyframes modal-zoom-fade-out {0% { opacity: 1 } 50% { opacity: 0.25 ; transform: scale(1.05) }100% { opacity: 0 ; transform: scale(1.35) }}.chatgpt-modal > div {padding: 17px 20px 24px 20px !important ;background-color: white ; color: #202124 }.chatgpt-modal p { margin: 14px 0 -29px 4px ; font-size: 1.28em ; line-height: 1.57 }.modal-buttons {margin: 42px 4px ${env.browser.isMobile?"2px 4px":"-3px -4px"} !important ; width: 100% }.chatgpt-modal button {min-width: 113px ; padding: ${env.browser.isMobile?"5px":"4px 15px"} !important ;cursor: pointer ; border-radius: 0 !important ; height: 39px ;border: 1px solid `+(env.ui.app.scheme=="dark"?"white":"black")+" !important }.primary-modal-btn { background: black !important ; color: white !important }.chatgpt-modal button:hover { background-color: #9cdaff !important ; color: black !important }"+(env.ui.app.scheme=="dark"?".chatgpt-modal > div, .chatgpt-modal button:not(.primary-modal-btn) {color: white !important }.primary-modal-btn { background: hsl(186 100% 69%) !important ; color: black !important }.chatgpt-modal a { color: #00cfff !important }.chatgpt-modal button:hover {background-color: #00cfff !important ; color: black !important }":"")+`.${modals.class} { display: grid ; place-items: center }[class*=modal-close-btn] {position: absolute !important ; float: right ; top: 14px !important ; right: 16px !important ;cursor: pointer ; width: 33px ; height: 33px ; border-radius: 20px }[class*=modal-close-btn] path {${env.ui.app.scheme=="dark"?"stroke: white ; fill: white":"stroke: #9f9f9f ; fill: #9f9f9f"}}`+(env.ui.app.scheme=="dark"?"[class*=modal-close-btn]:hover path { stroke: black ; fill: black }":"")+`[class*=modal-close-btn]:hover { background-color: #f2f2f2 }[class*=modal-close-btn] svg { margin: 11.5px }[class*=-modal] h2 {font-size: 1.65rem ; line-height: 32px ; padding: 0 ; margin: 9px 0 -3px !important ;${env.browser.isMobile?"text-align: center":"justify-self: start"}}[class*=-modal] p { justify-self: start ; font-size: 20px }[class*=-modal] button {
                    color: ${env.ui.app.scheme=="dark"?"white":"black"};
                    font-size: 12px !important ; background: none }[class*=-modal-bg] {pointer-events: auto ;position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ;display: flex ; justify-content: center ; align-items: center ; z-index: 9999 ;transition: var(--bg-transition) ; /* dim */
                        -webkit-transition: var(--bg-transition) ; -moz-transition: var(--bg-transition) ;
                        -o-transition: var(--bg-transition) ; -ms-transition: var(--bg-transition) }[class*=-modal-bg].animated > div {z-index: 13456 ; opacity: 0.98 ; transform: translateX(0) translateY(0) }[class$=-modal] {position: absolute ;opacity: 0 ;background-image: linear-gradient(180deg, ${env.ui.app.scheme=="dark"?"#99a8a6 -200px, black 200px":"#b6ebff -296px, white 171px"}) ;border: 1px solid ${env.ui.app.scheme=="dark"?"white":"#b5b5b5"} !important ;color: ${env.ui.app.scheme=="dark"?"white":"black"};transform: translateX(-3px) translateY(7px) ;transition: var(--fg-transition) ; /* fade-in + move-in */
                        -webkit-transition: var(--fg-transition) ; -moz-transition: var(--fg-transition) ;
                        -o-transition: var(--fg-transition) ; -ms-transition:  var(--fg-transition) }
                    ${env.browser.isMobile?"":"[class$=-modal] button:hover { transform: var(--modal-btn-zoom) }"}
                    ${config.fgAnimationsDisabled?"":`[class$=-modal] button {
                        ${env.browser.isMobile?"":"will-change: transform ;"}
                        transition: var(--modal-btn-transition) ;
                           -webkit-transition: var(--modal-btn-transition) ;
                           -moz-transition: var(--modal-btn-transition) ;
                           -o-transition: var(--modal-btn-transition) ;
                           -ms-transition: var(--modal-btn-transition) }`}#${app.slug}-settings {
                    min-width: ${env.browser.isPortrait?288:698}px ; max-width: 75vw ; word-wrap: break-word ;
                    margin: 12px 23px ; border-radius: 15px ;
                    ${env.ui.app.scheme=="dark"?"stroke: white ; fill: white":"stroke: black ; fill: black"};
                  --shadow: 0 30px 60px rgba(0,0,0,0.12) ;
                        box-shadow: var(--shadow) ; -webkit-box-shadow: var(--shadow) ; -moz-box-shadow: var(--shadow) }#${app.slug}-settings-title {font-weight: bold ; line-height: 19px ; text-align: center ;margin: 0 -6px ${env.browser.isPortrait?2:-15}px 0 }#${app.slug}-settings-title h4 {font-size: ${env.browser.isPortrait?22:29}px ; font-weight: bold ;margin: 0 0 ${env.browser.isPortrait?9:27}px }#${app.slug}-settings ul {list-style: none ; padding: 0 ; margin-bottom: 2px ;width: ${env.browser.isPortrait?100:50}% }`+(env.browser.isPhone?"":`#${app.slug}-settings ul:first-of-type {border-right: 1px dotted ${env.ui.app.scheme=="dark"?"white":"black"}}`)+`#${app.slug}-settings li {color: ${env.ui.app.scheme=="dark"?"rgb(255,255,255,0.65)":"rgba(0,0,0,0.45)"};fill: ${env.ui.app.scheme=="dark"?"rgb(255,255,255,0.65)":"rgba(0,0,0,0.45)"};stroke: ${env.ui.app.scheme=="dark"?"rgb(255,255,255,0.65)":"rgba(0,0,0,0.45)"};height: 24px ; padding: 6px 10px ; font-size: 13.5px ;border-bottom: 1px dotted ${env.ui.app.scheme=="dark"?"white":"black"};border-radius: 3px ;${config.fgAnimationsDisabled||env.browser.isMobile?"":`transition: var(--settings-li-transition) ;
                            -webkit-transition: var(--settings-li-transition) ;
                            -moz-transition: var(--settings-li-transition) ;
                            -o-transition: var(--settings-li-transition) ;
                            -ms-transition: var(--settings-li-transition)`}}#${app.slug}-settings li.active {color: ${env.ui.app.scheme=="dark"?"rgb(255,255,255)":"rgba(0,0,0)"};fill: ${env.ui.app.scheme=="dark"?"rgb(255,255,255)":"rgba(0,0,0)"};stroke: ${env.ui.app.scheme=="dark"?"rgb(255,255,255)":"rgba(0,0,0)"}}#${app.slug}-settings li label { padding-right: 20px }#${app.slug}-settings li:last-of-type { border-bottom: none }#${app.slug}-settings li, #${app.slug}-settings li label { cursor: pointer }#${app.slug}-settings li:hover {background: rgba(100,149,237,0.88) ; color: white ; fill: white ; stroke: white ;${env.browser.isMobile?"":"transform: scale(1.15)"}}#${app.slug}-settings li > input { float: right } /* pos toggles */
                 #${app.slug}-settings li > .track {
                    position: relative ; left: -1px ; bottom: -5.5px ; float: right ;
                    background-color: #ccc ; width: 26px ; height: 13px ; border-radius: 28px ;
                    ${config.fgAnimationsDisabled?"":`transition: 0.4s ; -webkit-transition: 0.4s ; -moz-transition: 0.4s ;
                            -o-transition: 0.4s ; -ms-transition: 0.4s`}}
                 #${app.slug}-settings li .knob {
                    position: absolute ; left: 1px ; bottom: 1px ; content: "" ;
                    background-color: white ; width: 11px ; height: 11px ; border-radius: 28px ;
                    ${config.fgAnimationsDisabled?"":`transition: 0.2s ; -webkit-transition: 0.2s ; -moz-transition: 0.2s ;
                            -o-transition: 0.2s ; -ms-transition: 0.2s`}}#scheme-settings-entry > span { margin: 3px -2px 0 }#scheme-settings-entry > span > svg {position: relative ; top: 2px ; margin-left: 4px }`+(config.fgAnimationsDisabled?"":"#scheme-settings-entry svg[class*=arrowsCyclic],.chatgpt-notif svg[class*=arrowsCyclic] { animation: rotate 5s linear infinite }")+`#about-settings-entry span { color: ${env.ui.app.scheme=="dark"?"#28ee28":"green"}}#about-settings-entry > span {width: ${env.browser.isPortrait?"15vw":"95px"}; height: 20px ; overflow: hidden ;${env.browser.isPortrait?"position: relative ; bottom: 3px ;":""}${config.fgAnimationsDisabled?"":"mask-image: linear-gradient(to right, transparent, black 20%, black 89%, transparent) ;-webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 89%, transparent)"}}#about-settings-entry > span > div {text-wrap: nowrap ; ${config.fgAnimationsDisabled?"":"animation: ticker linear 60s infinite"}}@keyframes ticker { 0% { transform: translateX(100%) } 100% { transform: translateX(-2000%) }}.about-em { color: ${env.ui.app.scheme=="dark"?"white":"green"} !important }`},update:{width:377,available(){const e=modals.alert(`\u{1F680} ${app.msgs.alert_updateAvail}!`,`${app.msgs.alert_newerVer} ${app.name} (v${app.latestVer}) ${app.msgs.alert_isAvail}!  <a target="_blank" rel="noopener" style="font-size: 0.97rem" href="${app.urls.github}/commits/main/greasemonkey/${app.slug}.user.js">${app.msgs.link_viewChanges}</a>`,function(){modals.safeWinOpen(`${app.urls.update.gm}?t=${Date.now()}`)},"",modals.update.width);if(!env.browser.language.startsWith("en")){const t=e.querySelectorAll("button");t[1].textContent=app.msgs.btnLabel_update,t[0].textContent=app.msgs.btnLabel_dismiss}return e},unavailable(){return modals.alert(`${app.msgs.alert_upToDate}!`,`${app.name} (v${app.version}) ${app.msgs.alert_isUpToDate}!`,"","",modals.update.width)}}},menus.toolbar.register(),/udm=2(?:&|$)/.test(location.search))return log.debug("Exited from Google Images");if(env.ui={app:{scheme:config.scheme||ui.getScheme()},site:{hasSidebar:!!document.querySelector("[class*=kp-]"),scheme:ui.getScheme()}},app.div=dom.create.elem("div",{id:app.slug,class:"fade-in"}),z.apply(config.theme),ui.addListeners.appDiv(),["anchored","expanded","sticky","wider"].forEach(e=>(config[e]||config[`${e}Sidebar`])&&app.div.classList.add(e)),update.appStyle(),["rpg","rpw"].forEach(e=>document.head.append(dom.create.style(GM_getResourceText(`${e}CSS`)))),location.host=="github.com"){const e=[...document.querySelectorAll(".markdown-alert")].find(t=>t.textContent.includes("Greasy Fork"));return e?e.style.display="none":void 0}app.centerCol=document.querySelector("#center_col")||document.querySelector("#main"),(env.browser.isMobile?app.centerCol:document.getElementById("rhs")||(()=>{const e=dom.create.elem("div");return app.centerCol.insertAdjacentElement("afterend",e),e})()).prepend(app.div),setTimeout(()=>app.div.classList.add("active"),100),/udm=50(?:&|$)/.test(location.search)?(toggle.anchorMode("on"),env.browser.isMobile||(dom.get.loadedElem(`#${app.slug}-pin-btn`).then(e=>e.style.display="none"),document.head.append(dom.create.style("li#anchored-settings-entry { display: none }")))):document.addEventListener(inputEvents.down,e=>{let t=e.target;for(;t&&!t.href;)t=t.parentElement;if(!t)return;t.removeAttribute("ping"),t.getAttribute("onmousedown")?.includes("rwt(")&&(t.removeAttribute("onmousedown"),env.browser.isChrome&&e.stopImmediatePropagation());let o=a(t);o&&(t.href=o,o=a(t),o&&(t.href=o));function a(n){if(!n.protocol.startsWith("http"))return;let s;if((n.hostname.startsWith("www.google.")||n.hostname==location.hostname)&&["/url","/local_url","/searchurl/rr.html","/linkredirect"].includes(n.pathname)){if(s=/[?&](?:q|url|dest)=((?:https?|ftp)[%:][^&]+)/.exec(n.search),s)return decodeURIComponent(s[1]);if(s=/[?&](?:q|url)=((?:%2[Ff]|\/)[^&]+)/.exec(n.search),s)return n.origin+decodeURIComponent(s[1]);if(s=/[#&]url=(https?[:%][^&]+)/.exec(n.hash),s)return decodeURIComponent(s[1])}if(n.hostname=="googleweblight.com"&&n.pathname=="/fp"&&(s=/[?&]u=((?:https?|ftp)[%:][^&]+)/.exec(n.search),s))return decodeURIComponent(s[1])}},!0),setTimeout(()=>document.querySelectorAll('a[href^="https://www.amazon."]').forEach(e=>{const t=new URL(e.href);t.searchParams.set("tag","kudo-ai-20"),e.href=t.toString()}),1500),app.footerContent=dom.create.anchor(app.urls.discuss,app.msgs.link_shareFeedback),app.msgChain=[];const C=new URL(location.href).searchParams.get("q");config.autoGet||config.autoSummarize||(config.prefixEnabled||config.suffixEnabled)&&[config.prefixEnabled&&location.href.includes("q=%2F"),config.suffixEnabled&&/q=.*?(?:%3F|？|%EF%BC%9F)(?:&|$)/.test(location.href)].filter(Boolean).length==config.prefixEnabled+config.suffixEnabled?(app.msgChain.push({time:Date.now(),role:"user",content:config.autoSummarize?prompts.create("summarizeResults"):C}),get.reply({msgs:app.msgChain,src:"query"})):(show.reply({standby:!0}),config.rqDisabled||get.related(C).then(e=>show.related(e)).catch(e=>{log.error(e.message),api.tryNew(get.related)}));const A=new MutationObserver(()=>{const e=document.getElementById("rhs");e&&(e.prepend(app.div),A.disconnect())});A.observe(document.body,{subtree:!0,childList:!0}),setTimeout(()=>A.disconnect(),5e3)})();
