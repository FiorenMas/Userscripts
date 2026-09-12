// ==UserScript==
// @name                     GoogleGPT 🤖
// @author                   KudoAI
// @namespace                https://kudoai.org
// @version                  2026.8.4
// @license                  MIT
// @icon                     data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22170.667%22%20height=%22170.667%22%3E%3Cstyle%3E:root%7B--fill:%23000%7D@media%20(prefers-color-scheme:dark)%7B:root%7B--fill:%23fff%7D%7D%3C/style%3E%3Cpath%20fill=%22var(--fill)%22%20d=%22M82.346%20159.79c-18.113-1.815-31.78-9.013-45.921-24.184C23.197%20121.416%2017.333%20106.18%2017.333%2086c0-21.982%205.984-36.245%2021.87-52.131C55.33%2017.74%2069.27%2011.867%2091.416%2011.867c17.574%200%2029.679%203.924%2044.309%2014.363l8.57%206.116-8.705%208.705-8.704%208.704-4.288-3.608c-13.91-11.704-35.932-14.167-53.085-5.939-3.4%201.631-9.833%206.601-14.297%2011.045C44.669%2061.753%2040.95%2070.811%2040.95%2086c0%2014.342%203.594%2023.555%2013.26%2033.995%2019.088%2020.618%2048.46%2022.539%2070.457%204.608l5.333-4.348%2011.333%203.844c6.234%202.114%2011.54%203.857%2011.791%203.873.252.015-2.037%203.008-5.087%206.65-6.343%207.577-20.148%2017.217-30.493%2021.295-8.764%203.454-23.358%205.06-35.198%203.873zM92%2086.333V74.667h60.648l-11.41%2011.41-11.411%2011.41-18.914.257L92%2098z%22/%3E%3C/svg%3E
// @icon64                   data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22170.667%22%20height=%22170.667%22%3E%3Cstyle%3E:root%7B--fill:%23000%7D@media%20(prefers-color-scheme:dark)%7B:root%7B--fill:%23fff%7D%7D%3C/style%3E%3Cpath%20fill=%22var(--fill)%22%20d=%22M82.346%20159.79c-18.113-1.815-31.78-9.013-45.921-24.184C23.197%20121.416%2017.333%20106.18%2017.333%2086c0-21.982%205.984-36.245%2021.87-52.131C55.33%2017.74%2069.27%2011.867%2091.416%2011.867c17.574%200%2029.679%203.924%2044.309%2014.363l8.57%206.116-8.705%208.705-8.704%208.704-4.288-3.608c-13.91-11.704-35.932-14.167-53.085-5.939-3.4%201.631-9.833%206.601-14.297%2011.045C44.669%2061.753%2040.95%2070.811%2040.95%2086c0%2014.342%203.594%2023.555%2013.26%2033.995%2019.088%2020.618%2048.46%2022.539%2070.457%204.608l5.333-4.348%2011.333%203.844c6.234%202.114%2011.54%203.857%2011.791%203.873.252.015-2.037%203.008-5.087%206.65-6.343%207.577-20.148%2017.217-30.493%2021.295-8.764%203.454-23.358%205.06-35.198%203.873zM92%2086.333V74.667h60.648l-11.41%2011.41-11.411%2011.41-18.914.257L92%2098z%22/%3E%3C/svg%3E
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
// @include                  https://auth0.openai.com
// @connect                  api.binjie.fun
// @connect                  api.openai.com
// @connect                  cdn.jsdelivr.net
// @connect                  chatai.mixerbox.com
// @connect                  chatgpt.com
// @connect                  fanyi.sogou.com
// @connect                  scriptcat.org
// @require                  https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4.15.6/dist/chatgpt.min.js#sha256-zp2Wy06WHvPDCRWgIE/ZHNT0cLqAGIsgleJjfDEITjw=
// @require                  https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha256-dppVXeVTurw1ozOPNE3XqhYmDJPOosfbKQcHyQSE58w=
// @require                  https://cdn.jsdelivr.net/npm/json5@2.2.3/dist/index.min.js#sha256-S7ltnVPzgKyAGBlBG4wQhorJqYTehj5WQCrADCKJufE=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@ecb4f6c/assets/js/chatbot/components/buttons.js#sha256-glNCv6mQlMJHrss2tRV468C90QxGiXsvH9kfps+TzF0=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@91cc2fa/assets/js/chatbot/components/icons.js#sha256-7bTahdPLjGeX65AKB1ZAlEekAufktiEbhEdK44kg9F4=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@ecb4f6c/assets/js/chatbot/components/menus.js#sha256-aZEyfzXiRz5oYxy7ifrnGP1mS91xjkYmAGB1wjvdm3M=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@ecb4f6c/assets/js/chatbot/components/replyBubble.js#sha256-QfrKIzw/8K/k6SjFQbdD9s3ECXmeRXpiy9EHjV+MW2w=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@ecb4f6c/assets/js/chatbot/components/tooltip.js#sha256-1KtSaANaSrMGL3J/jf5TJkamTZEwPngsLM/0ZZ1cT3k=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@91cc2fa/assets/js/chatbot/lib/api.js#sha256-hzgG16HINwrl5FJRWXbOc6pO+kWo+KORnFB6WNYPa1g=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@91cc2fa/assets/js/chatbot/lib/feedback.js#sha256-OEgiMJiOom/bTuVxW+G55ip8P8gY0oUVQLuMNyI7kTA=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@91cc2fa/assets/js/chatbot/lib/log.js#sha256-7KUrE8HKKkH8HRz9WrJ2yyaYl0+KGRqiv8tm9B3WFDQ=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@91cc2fa/assets/js/chatbot/lib/prompts.js#sha256-DlKK1fIwWDz4s2LlnjXbKi5QjVap4fALd+SP7QYzWLQ=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@7270b09/assets/js/chatbot/lib/session.js#sha256-wYbdO1/Ce4oA0v7KEFznpQbRycqxhPNz3PqgfrWa8KA=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@ecb4f6c/assets/js/chatbot/lib/string.js#sha256-uY2JSeThjdEUhYecBMcd+csc9WlSJN/D/Y/MTYdx5SQ=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@657dcba/assets/js/chatbot/lib/themes.js#sha256-NSiOkXoRC/fF8zdmnbIk9XL5tKWWP5MU2NOfdJ9G0NU=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@91cc2fa/assets/js/chatbot/lib/ui.js#sha256-vya/4Vvi+dX7PjMo2yz/IeBsle9N6OIaqXkPFxNnz1M=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@ecb4f6c/assets/js/chatbot/lib/userscript.js#sha256-B4x6WpMQVvl3qUVQnDP++8oGIWtF+FiiwzeH8P3aQkE=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/userscripts@ff2baba/assets/js/lib/css.js/dist/css.min.js#sha256-zf9s8C0cZ/i+gnaTIUxa0+RpDYpsJVlyuV5L2q4KUdA=
// @require                  https://cdn.jsdelivr.net/gh/adamlui/userscripts@eee77ce/assets/js/lib/dom.js/dist/dom.min.js#sha256-nTc2by3ZAz6AR7B8fOqjloJNETvjAepe15t2qlghMDo=
// @require                  https://cdn.jsdelivr.net/npm/generate-ip@2.9.3/dist/generate-ip.min.js#sha256-Gc0DiKRgViBsekorFfyw5MGVRiTa8ZjAZc8+H9r0msQ=
// @require                  https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js#sha256-g3pvpbDHNrUrveKythkPMF2j/J7UFoHbUyFQcFe1yEY=
// @require                  https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js#sha256-n0UwfFeU7SR6DQlfOmLlLvIhWmeyMnIDp/2RmVmuedE=
// @require                  https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js#sha256-e1fUJ6xicGd9r42DgN7SzHMzb5FJoWe44f4NbvZmBK4=
// @require                  https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js#sha256-Ffq85bZYmLMrA/XtJen4kacprUwNbYdxEKd0SqhHqJQ=
// @require                  https://unpkg.com/tone@15.1.22/build/Tone.js#sha256-4pCVL6Q9mnp4AYKoPG/M9E15y3riy6EC7x8rnZgSTiI=
// @resource ggptIconBlack   https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@9db3bda/assets/images/icons/googlegpt/black/icon64.png.b64#sha256-yiTqggYRNsWcJtyIUDzFrPqrL3yeTaPCrEGAW0QFuPM=
// @resource ggptIconWhite   https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@9db3bda/assets/images/icons/googlegpt/white/icon64.png.b64#sha256-BYRq92cF5knykaKnmNi1U4CrwBC/jK1V+MGfH4NGui4=
// @resource ggptLSlogo      https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@9db3bda/assets/images/logos/googlegpt/flat/black-green/logo480x64.png.b64#sha256-fzSZhLVQQolCLWYr/h29NWfR1Yl4glHv1TcsveYYv+U=
// @resource ggptDSlogo      https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@9db3bda/assets/images/logos/googlegpt/flat/white-green/logo480x64.png.b64#sha256-3qRdGKhF3pojDqVVh/5kODIg7QvYbbLf4zFkEh5xoGc=
// @resource hljsCSS         https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/railscasts.min.css#sha256-nMf0Oxaj3sYJiwGCsfqNpGnBbcofnzk+zz3xTxtdLEQ=
// @resource rpgCSS          https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/gray.min.css#sha256-48sEWzNUGUOP04ur52G5VOfGZPSnZQfrF3szUr4VaRs=
// @resource rpwCSS          https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/white.min.css#sha256-6xBXczm7yM1MZ/v0o1KVFfJGehHk47KJjq8oTktH4KE=
// @grant                    GM_getValue
// @grant                    GM_setValue
// @grant                    GM_registerMenuCommand
// @grant                    GM_unregisterMenuCommand
// @grant                    GM_getResourceText
// @grant                    GM_xmlhttpRequest
// @grant                    GM.xmlHttpRequest
// @antifeature              ads
// @noframes
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/googlegpt.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/googlegpt.meta.js
// @homepageURL              https://googlegpt.kudoai.org
// @supportURL               https://github.com/KudoAI/googlegpt/issues
// @contributionURL          https://github.com/sponsors/KudoAI
// ==/UserScript==
(async()=>{"use strict";window.env={browser:{language:chatgpt.getUserLanguage()},scriptManager:{name:(()=>{try{return GM_info.scriptHandler}catch{return"unknown"}})(),version:(()=>{try{return GM_info.version}catch{return"unknown"}})()},xhr:typeof GM<"u"&&GM.xmlHttpRequest||GM_xmlhttpRequest},["Chromium","Firefox","Chrome","Edge","Brave","Mobile"].forEach(e=>env.browser[`is${e=="Firefox"?"FF":e}`]=chatgpt.browser[`is${e}`]()),Object.assign(env.browser,{get isCompact(){return innerWidth<=480}}),env.userLocale=location.hostname.endsWith(".com")?"us":location.hostname.split(".").pop(),env.scriptManager.supportsStreaming=/Tampermonkey|ScriptCat/.test(env.scriptManager.name),env.scriptManager.supportsTooltips=env.scriptManager.name=="Tampermonkey"&&parseInt(env.scriptManager.version.split(".")[0])>=5,window.app={version:GM_info.script.version,chatgptjsVer:/chatgpt\.js@([\d.]+)/.exec(GM_info.scriptMetaStr)[1],commitHashes:{app:"9c34ce3",aiweb:"cd6272e"}},app.urls={resourceHost:`https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@${app.commitHashes.app}`};const S={app:await new Promise(e=>env.xhr({method:"GET",url:`${app.urls.resourceHost}/assets/data/app.json`,onload:({responseText:t})=>e(JSON.parse(t))})),msgs:await new Promise(e=>{const t=`${app.urls.resourceHost}/greasemonkey/_locales`,o=env.browser.language?env.browser.language.replace("-","_"):"en";let a=`${t}/${o}/messages.json`,s=0;function n(){env.xhr({method:"GET",url:a,onload:c})}function c(p){try{const d=JSON.parse(p.responseText),i={};for(const l in d)typeof d[l]=="object"&&"message"in d[l]&&(i[l]=d[l].message);e(i)}catch{if(s++,s==3)return e({});a=env.browser.language.includes("-")&&s==1?a.replace(/(_locales\/[^_]+)_[^_]+(\/)/,"$1$2"):`${t}/en/messages.json`,n()}}n()})};Object.assign(app,{...S.app,urls:{...app.urls,...S.app.urls},msgs:S.msgs}),app.urls.aiwebAssets=app.urls.aiwebAssets.replace("@latest",`@${app.commitHashes.aiweb}`),app.alerts={waitingResponse:`${app.msgs.alert_waitingFor} ${app.name} ${app.msgs.alert_response}...`,login:`${app.msgs.alert_login} @ `,checkCloudflare:`${app.msgs.alert_checkCloudflare} @ `,tooManyRequests:`${app.msgs.alert_tooManyRequests}.`,parseFailed:`${app.msgs.alert_parseFailed}.`,proxyNotWorking:`${app.msgs.mode_proxy} ${app.msgs.alert_notWorking}.`,apiNotWorking:`API ${app.msgs.alert_notWorking}.`,suggestProxy:`${app.msgs.alert_try} ${app.msgs.alert_switchingOn} ${app.msgs.mode_proxy}`,suggestDiffAPI:`${app.msgs.alert_try} ${app.msgs.alert_selectingDiff} API`,suggestOpenAI:`${app.msgs.alert_try} ${app.msgs.alert_switchingOff} ${app.msgs.mode_proxy}`},app.katexDelimiters=await new Promise(e=>env.xhr({method:"GET",onload:({responseText:t})=>e(JSON.parse(t)),url:`${app.urls.aiwebAssets}/data/katex-delimiters.json`})),app.apis=Object.assign(Object.create(null),await new Promise(e=>env.xhr({method:"GET",url:`${app.urls.aiwebAssets}/data/ai-chat-apis.json5`,onload:({responseText:t})=>e(Object.fromEntries(Object.entries(JSON5.parse(t)).filter(([,o])=>!o.disabled)))}))),app.apis.AIchatOS.userID=`#/chat/${Date.now()}`,app.inputEvents={},["down","move","up"].forEach(e=>app.inputEvents[e]=`${window.PointerEvent?"pointer":env.browser.isMobile?"touch":"mouse"}action`),app.config??={},window.settings={load(...e){e.flat().forEach(o=>app.config[o]=t(o,GM_getValue(`${app.configKeyPrefix}_${o}`,void 0)));function t(o,a){const s=settings.controls?.[o];return a!=null&&(s?.type=="toggle"&&typeof a!="boolean"||s?.type=="slider"&&isNaN(parseFloat(a)))&&(a=void 0),a??s?.defaultVal??(s?.type=="slider"?100:!1)}},save(e,t){GM_setValue(`${app.configKeyPrefix}_${e}`,t),app.config[e]=t},typeIsEnabled(e){const t=/disabled|hidden/i;return t.test(e)&&!t.test(this.controls[e]?.label||"")?!app.config[e]:app.config[e]}},settings.load("debugMode"),log.debug("Initializing settings..."),Object.assign(settings,{controls:{proxyAPIenabled:{type:"toggle",icon:"sunglasses",defaultVal:!1,label:app.msgs.menuLabel_proxyAPImode,helptip:app.msgs.helptip_proxyAPImode},preferredAPI:{type:"modal",icon:"lightning",defaultVal:!1,label:`${app.msgs.menuLabel_preferred} API`,helptip:app.msgs.helptip_preferredAPI},streamingDisabled:{type:"toggle",icon:"signalStream",defaultVal:!1,label:app.msgs.mode_streaming,helptip:app.msgs.helptip_streamingMode},autoGet:{type:"toggle",icon:"speechBalloonLasso",defaultVal:!0,label:app.msgs.menuLabel_autoAnswer,helptip:app.msgs.helptip_autoGetAnswers},autoSummarize:{type:"toggle",icon:"summarize",defaultVal:!1,label:app.msgs.menuLabel_autoSummarizeResults,helptip:app.msgs.helptip_autoSummarizeResults},autoFocusChatbarDisabled:{type:"toggle",mobile:!1,icon:"caretsInward",defaultVal:!0,label:app.msgs.menuLabel_autoFocusChatbar,helptip:app.msgs.helptip_autoFocusChatbar},autoScroll:{type:"toggle",mobile:!1,icon:"arrowsDown",defaultVal:!1,label:`${app.msgs.mode_autoScroll} (${app.msgs.menuLabel_whenStreaming})`,helptip:app.msgs.helptip_autoScroll},rqDisabled:{type:"toggle",icon:"speechBalloons",defaultVal:!1,label:`${app.msgs.menuLabel_show} ${app.msgs.menuLabel_relatedQueries}`,helptip:app.msgs.helptip_showRelatedQueries},prefixEnabled:{type:"toggle",icon:"slash",defaultVal:!1,label:`${app.msgs.menuLabel_require} "/" ${app.msgs.menuLabel_beforeQuery}`,helptip:app.msgs.helptip_prefixMode},suffixEnabled:{type:"toggle",icon:"questionMark",defaultVal:!1,label:`${app.msgs.menuLabel_require} "?" ${app.msgs.menuLabel_afterQuery}`,helptip:app.msgs.helptip_suffixMode},widerSidebar:{type:"toggle",mobile:!1,icon:"widescreenTall",defaultVal:!1,label:app.msgs.menuLabel_widerSidebar,helptip:app.msgs.helptip_widerSidebar},stickySidebar:{type:"toggle",mobile:!1,icon:"sidebar",defaultVal:!1,label:app.msgs.menuLabel_stickySidebar,helptip:app.msgs.helptip_stickySidebar},anchored:{type:"toggle",mobile:!1,icon:"anchor",defaultVal:!1,label:app.msgs.mode_anchor,helptip:app.msgs.helptip_anchorMode},bgAnimationsDisabled:{type:"toggle",icon:"sparkles",defaultVal:!1,label:`${app.msgs.menuLabel_background} ${app.msgs.menuLabel_animations}`,helptip:app.msgs.helptip_bgAnimations},fgAnimationsDisabled:{type:"toggle",icon:"sparkles",defaultVal:!1,label:`${app.msgs.menuLabel_foreground} ${app.msgs.menuLabel_animations}`,helptip:app.msgs.helptip_fgAnimations},replyLang:{type:"prompt",icon:"languageChars",label:app.msgs.menuLabel_replyLanguage,helptip:app.msgs.helptip_replyLanguage},scheme:{type:"modal",icon:"scheme",label:app.msgs.menuLabel_colorScheme,helptip:app.msgs.helptip_colorScheme},debugMode:{type:"toggle",icon:"bug",defaultVal:!1,label:app.msgs.mode_debug,helptip:app.msgs.helptip_debugMode},about:{type:"modal",icon:"questionMarkCircle",label:`${app.msgs.menuLabel_about} ${app.name}...`}}}),Object.assign(app.config,{lineHeightRatio:env.browser.isMobile?1.357:1.375,maxFontSize:24,minFontSize:11}),settings.load(Object.keys(settings.controls),"expanded","fontSize","minimized","aiSafetyWarned"),app.config.replyLang||settings.save("replyLang",env.browser.language),app.config.fontSize||settings.save("fontSize",env.browser.isMobile?14:14.0423),env.scriptManager.supportsStreaming||settings.save("streamingDisabled",!0),log.debug(`Success! app.config = ${log.prettifyObj(app.config)}`),window.update={appBottomPos(){app.div.style.bottom=`${app.config.minimized?22-app.div.offsetHeight:-33}px`},appStyle(){const{scheme:e}=env.ui.app,t=e=="dark"&&!app.config.bgAnimationsDisabled;modals.stylize(),app.styles?.isConnected||document.head.append(app.styles||=dom.create.style()),app.styles.textContent=`:root {
                  --app-bg-color-light-scheme: white ; --app-bg-color-dark-scheme: #1f1f1f ;
                  --pre-bg-color-light-scheme: #b7b7b736 ; --pre-bg-color-dark-scheme: #3a3a3a ;
                  --reply-header-bg-color-light-scheme: #d7d4d4 ;
                  --reply-header-bg-color-dark-scheme: ${t?"#0e0e0e24":"#545454"};
                  --reply-header-fg-color-light-scheme: white ; --reply-header-fg-color-dark-scheme: white ;
                  --chatbar-btn-color-light-scheme: lightgrey ; --chatbar-btn-color-dark-scheme: #fff ;
                  --chatbar-btn-hover-color-light-scheme: #638ed4 ; --chatbar-btn-hover-color-dark-scheme: #fff ;
                  --font-color-light-scheme: #4e4e4e ; --font-color-dark-scheme: #e3e3e3 ;
                  --app-border: ${t?"none":`1px solid #${e=="light"?"dadce0":"3b3b3b"}`};
                  --app-gradient-bg: linear-gradient(180deg, ${e=="dark"?"#99a8a6 -245px, black 185px":"#b6ebff -163px, white 65px"}) ;
                  --app-anchored-shadow: 0 15px 52px rgb(0,0,${e=="light"?"7,0.06":"11,0.22"}) ;
                  --app-transition: opacity 0.5s ease, transform 0.5s ease, /* for 1st fade-in */
                                    bottom 0.1s cubic-bezier(0,0,0.2,1), /* smoothen Anchor Y min/restore */
                                    width 0.167s cubic-bezier(0,0,0.2,1) ; /* smoothen Anchor X expand/shrink */
                  --standby-btn-zoom: scale(1.015) ; --standby-btn-transition: all 0.18s ease ;
                  --btn-transition: transform 0.15s ease, /* for hover-zoom */
                                    opacity 0.25s ease-in-out ; /* + btn-zoom-fade-out + .app-hover-only shows */
                  --font-size-slider-thumb-transition: transform 0.05s ease ; /* for hover-zoom */
                  --reply-pre-transition: max-height 0.167s cubic-bezier(0, 0, 0.2, 1) ; /* for Anchor changes */
                  --rq-transition: opacity 0.55s ease, transform 0.1s ease !important ; /* for fade-in + hover-zoom */
                  --fade-in-transition: opacity 0.4s ease ;
                  --fade-in-less-transition: opacity 0.2s ease } /* used by Font Size slider + Pin menu */.fade-in {
                    opacity: 0 ; transform: translateY(10px) ;
                    transition: var(--fade-in-less-transition) ;
                       -webkit-transition: var(--fade-in-transition) ;
                       -moz-transition: var(--fade-in-transition) ;
                       -o-transition: var(--fade-in-transition) ;
                       -ms-transition: var(--fade-in-transition)
                }
                .fade-in-less {
                    opacity: 0 ;
                    transition: var(--fade-in-less-transition) ;
                       -webkit-transition: var(--fade-in-less-transition) ;
                       -moz-transition: var(--fade-in-less-transition) ;
                       -o-transition: var(--fade-in-less-transition) ;
                       -ms-transition: var(--fade-in-less-transition)
                }
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
                    color: var(--font-color-${e}-scheme) ;
                    background: var(--app-bg-color-${e}-scheme) ;
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
                    border: var(--app-border) ; background-image: var(--app-gradient-bg) }
                #${app.slug} .app-hover-only { /* hide app-hover-only elems */
                    position: absolute ; left: -9999px ; opacity: 0 ; /* using position to support transitions */
                    width: 0 } /* to support width calcs */
                /* show app-hover-only elems on hover + Font Size button when slider visible */
                #${app.slug}:hover .app-hover-only, #${app.slug}:active .app-hover-only,
                    #${app.slug}:has([id$=font-size-slider-track].active) [id$=font-size-btn] {
                        position: relative ; left: auto ; width: auto ; opacity: 1 }
                #${app.slug} p { margin: 0 }
                #${app.slug} .alert-link {
                    color: ${e=="light"?"#190cb0":"white ; text-decoration: underline"}}
                .${app.slug}-name {
                    font-size: 1.35rem ; font-weight: 700 ; text-decoration: none ;
                    color: ${e=="dark"?"white":"black"} !important }
                .byline { /* header byline */
                    font-size: 12px ; margin-left: 7px ; color: #aaa ;
                  --byline-transition: 0.15s ease-in-out ; transition: var(--byline-transition) ;
                       -webkit-transition: var(--byline-transition) ; -moz-transition: var(--byline-transition) ;
                       -o-transition: var(--byline-transition) ; -ms-transition: var(--byline-transition) }
                .byline a, .byline a:visited { color: #aaa ; text-decoration: none !important }
                .byline a:hover {
                    color: ${e=="dark"?"white":"black"};
                    transition: var(--byline-transition) ;
                       -webkit-transition: var(--byline-transition) ; -moz-transition: var(--byline-transition) ;
                       -o-transition: var(--byline-transition) ; -ms-transition: var(--byline-transition) }
                #${app.slug}-header-btns { display: flex ; direction: rtl ; gap: 2px ; float: right }
                .${app.slug}-header-btn {
                    float: right ; cursor: pointer ; position: relative ; top: 6px ;
                    ${e=="dark"?"fill: white ; stroke: white":"fill: #adadad ; stroke: #adadad"}}
                .${app.slug}-header-btn:hover svg { /* highlight/zoom header button on hover */
                    ${e=="dark"?"fill: #d9d9d9 ; stroke: #d9d9d9":"fill: black ; stroke: black"};
                    ${env.browser.isMobile?"":"transform: scale(1.285)"}}
                ${app.config.fgAnimationsDisabled?"":`.${app.slug}-header-btn, .${app.slug}-header-btn svg { /* smooth header button fade-in + hover-zoom */
                    transition: var(--btn-transition) ;
                       -webkit-transition: var(--btn-transition) ; -moz-transition: var(--btn-transition) ;
                       -o-transition: var(--btn-transition) ; -ms-transition: var(--btn-transition) }`}
                .${app.slug}-header-btn:active {
                    ${e=="dark"?"fill: #999999 ; stroke: #999999":"fill: #638ed4 ; stroke: #638ed4"}}
                #${app.slug}-logo, .${app.slug}-header-btn svg {
                    filter: drop-shadow(${e=="dark"?"#7171714d 10px":"#aaaaaa21 7px"} 7px 3px) }
                #${app.slug} .loading {
                    padding-bottom: 15px ; color: #b6b8ba ; fill: #b6b8ba ;
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite }
                #${app.slug} section.loading { padding: 15px 0 14px 5px } /* pad loading status when sending replies */
                #${app.slug}-font-size-slider-track {
                    width: 98% ; height: 7px ; margin: 3px auto ${env.browser.isCompact?-6:-11}px ;
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
                    background-color: ${e=="dark"?"white":"#4a4a4a"};
                  --shadow: rgba(0,0,0,0.21) 1px 1px 9px 0 ;
                        box-shadow: var(--shadow) ; -webkit-box-shadow: var(--shadow) ; -moz-box-shadow: var(--shadow) ;
                    ${app.config.fgAnimationsDisabled?"":`transition: var(--font-size-slider-thumb-transition) 
                       -webkit-transition: var(--font-size-slider-thumb-transition) ;
                       -moz-transition: var(--font-size-slider-thumb-transition) ;
                       -o-transition: var(--font-size-slider-thumb-transition) ;
                       -ms-transition: var(--font-size-slider-thumb-transition)`}}
                ${env.browser.isMobile?"":`#${app.slug}-font-size-slider-thumb:hover { transform: scale(1.125) }`}
                .${app.slug}-standby-btns { margin: 20px 0 -14px }
                .${app.slug}-standby-btn {
                  --skew: skew(-13deg) ; --counter-skew: skew(13deg) ; border-radius: 8px ;
                  --content-color: ${e=="dark"?"white":"black"};
                    display: flex ; align-items: center ; justify-content: center ; gap: 8px ;
                    width: 90% ; height: 51px ; margin-bottom: 9px ; padding: 12px 0 ;
                    cursor: pointer ; transform: var(--skew) ; border: 1px solid var(--content-color) ;
                    background: none ; box-shadow: #aaaaaa12 7px 7px 3px 0px ; color: var(--content-color) ;
                    ${app.config.fgAnimationsDisabled?"":`will-change: transform ;
                           transition: var(--standby-btn-transition) ;
                               -webkit-transition: var(--standby-btn-transition) ;
                               -moz-transition: var(--standby-btn-transition) ;
                               -o-transition: var(--standby-btn-transition) ;
                               -ms-transition: var(--standby-btn-transition)`}}
                .${app.slug}-standby-btn:hover {
                    color: var(--content-color) ; border-radius: 2px ; transform: var(--skew) var(--standby-btn-zoom) }
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
                        ${t?"#0000":`var(--reply-header-bg-color-${e}-scheme)`}}
                #${app.slug} .reply-header {
                    display: flex ; align-items: center ; position: relative ; box-sizing: border-box ; width: 100% ;
                    top: 16px ; padding: 16px 14px ; height: 18px ; border-radius: 12px 12px 0 0 ;
                    ${e=="light"?"border-bottom: 1px solid white":t?"border: 1px solid ; border-bottom-color: transparent":""};
                    background: var(--reply-header-bg-color-${e}-scheme) ;
                    color:      var(--reply-header-fg-color-${e}-scheme) ;
                    fill:       var(--reply-header-fg-color-${e}-scheme) ;
                    stroke:     var(--reply-header-fg-color-${e}-scheme) }
                #${app.slug} .reply-header-txt { flex-grow: 1 ; font-size: 12px ; font-family: monospace }
                #${app.slug} .reply-header-btns { margin: 3.5px -5px 0 }
                #${app.slug} .reply-pre {
                    font-size: ${app.config.fontSize}px ; white-space: pre-wrap ; min-width: 0 ;
                    line-height: ${app.config.fontSize*app.config.lineHeightRatio}px ; overscroll-behavior: contain ;
                    position: relative ; z-index: 1 ; /* allow top-margin to overlap header in light scheme */
                    margin: ${e=="light"?13:15}px 0 0 0 ; padding: 1em 1em 0 1em ;
                    border-radius: 0 0 12px 12px ; overflow: auto ;
                    ${app.config.bgAnimationsDisabled?`background: var(--pre-bg-color-${e}-scheme) ;
                         color: var(--font-color-${e}-scheme)`:e=="dark"?"background: #2b3a40cf ; color: var(--font-color-dark-scheme) ; border: 1px solid white":`background: var(--pre-bg-color-light-scheme) ;
                            color: var(--font-color-light-scheme) ; border: none`};
                    ${app.config.fgAnimationsDisabled?"":`transition: var(--reply-pre-transition) ;
                            -webkit-transition: var(--reply-pre-transition) ;
                            -moz-transition: var(--reply-pre-transition) ;
                            -o-transition: var(--reply-pre-transition) ;
                            -ms-transition: var(--reply-pre-transition)`}}
                #${app.slug} .reply-pre a, #${app.slug} .reply-pre a:visited { color: #4495d4 }
                #${app.slug} .reply-pre a:hover { color: ${e=="dark"?"white":"#28a017"}}
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
                    border: solid 1px ${t?"#aaa":e=="dark"?"#777":"#555"};
                    border-radius: 12px 13px 12px 0 ; margin: 12px 0 15px 0 ; padding: 13px 55px 13px 10px ;
                    position: relative ; z-index: 555 ; color: ${e=="dark"?"#eee":"#222"};
                    height: 16px ; max-height: 200px ; resize: none ;
                    background: ${e=="light"?"#eeeeee9e":`#515151${app.config.bgAnimationsDisabled?"":"9e"}`};
                    ${e=="dark"?"":`--chatbar-inset-shadow: 0 1px 2px rgba(15,17,17,0.1) inset ;
                        box-shadow: var(--chatbar-inset-shadow) ; -webkit-box-shadow: var(--chatbar-inset-shadow) ;
                       -moz-box-shadow: var(--chatbar-inset-shadow) ;`}
                        transition: box-shadow 0.15s ease ;
                           -webkit-transition: box-shadow 0.15s ease ; -moz-transition: box-shadow 0.15s ease ;
                           -o-transition: box-shadow 0.15s ease ; -ms-transition: box-shadow 0.15s ease }
                ${t?"":` /* chatbar hover styles */
                    #${app.slug}-chatbar:hover:not(:focus),
                    div:has(.${app.slug}-chatbar-btn:hover) #${app.slug}-chatbar:not(:focus) {
                        outline: ${e=="light"?"black":"white"} auto 5px ;
                      --chatbar-hover-inset-shadow: 0 ${e=="dark"?"3px 2px":"1px 7px"} rgba(15,17,17,0.15) inset ;
                        box-shadow: var(--chatbar-hover-inset-shadow) ;
                       -webkit-box-shadow: var(--chatbar-hover-inset-shadow) ;
                       -moz-box-shadow: var(--chatbar-hover-inset-shadow) ;
                        transition: box-shadow 0.25s ease ;
                           -webkit-transition: box-shadow 0.25s ease ; -moz-transition: box-shadow 0.25s ease ;
                           -o-transition: box-shadow 0.25s ease ; -ms-transition: box-shadow 0.25s ease }`}
                #${app.slug}-chatbar:focus-visible { /* fallback outline chatbar + reduce inset shadow on focus */
                    outline: -webkit-focus-ring-color auto 1px ;
                    ${t?"":`--inset-shadow: 0 ${e=="dark"?"3px -1px":"1px 2px"} rgba(0,0,0,0.3) inset ;
                        box-shadow: var(--inset-shadow) ;
                       -webkit-box-shadow: var(--inset-shadow) ; -moz-box-shadow: var(--inset-shadow)`}
                }
                .${app.slug}-chatbar-btn {
                    z-index: 560 ; border: none ; float: right ; position: relative ; background: none ;
                    cursor: pointer ; bottom: ${env.browser.isFF?47:52}px ;
                    transform: scale(1.05) ; margin-right: 3px ; /* zoom 'em a bit */
                    color:  var(--chatbar-btn-color-${e}-scheme) ;
                    fill:   var(--chatbar-btn-color-${e}-scheme) ;
                    stroke: var(--chatbar-btn-color-${e}-scheme)
                }
                .${app.slug}-chatbar-btn:hover {
                    color:  var(--chatbar-btn-hover-color-${e}-scheme) ;
                    fill:   var(--chatbar-btn-hover-color-${e}-scheme) ;
                    stroke: var(--chatbar-btn-hover-color-${e}-scheme)
                }.${app.slug}-related-queries {
                    display: flex ; flex-wrap: wrap ; width: 100% ; margin-bottom: 19px ; padding: 0 5px }
                .${app.slug}-related-query {
                    font-size: ${env.browser.isMobile?1:.81}em ; cursor: pointer ; will-change: transform ;
                    box-sizing: border-box ; width: fit-content ; max-width: 100% ; /* confine to outer div */
                    margin: 5px 12px 7px 0 ; padding: 8px 12px 8px 13px ;
                    color: ${e=="dark"?app.config.bgAnimationsDisabled?"#ccc":"#f2f2f2":"#767676"};
                    background: ${e=="dark"?"#7e7e7e4f":"#fdfdfdb0"};
                    border: 1px solid ${e=="dark"?app.config.bgAnimationsDisabled?"#5f5f5f":"#777":"#d2d2d2"};
                    border-radius: 0 13px 12px 13px ; flex: 0 0 auto ;
                  --rq-shadow: 1px 4px 8px -6px rgba(169,169,169,0.75) ; box-shadow: var(--rq-shadow) ;
                       -webkit-box-shadow: var(--rq-shadow) ; -moz-box-shadow: var(--rq-shadow) ;
                    ${app.config.fgAnimationsDisabled?"":`transition: var(--rq-transition) ;
                       -webkit-transition: var(--rq-transition) ; -moz-transition: var(--rq-transition) ;
                       -o-transition: var(--rq-transition) ; -ms-transition: var(--rq-transition)`}}
                .${app.slug}-related-query:hover, .${app.slug}-related-query:focus {
                    ${app.config.fgAnimationsDisabled?"":"transform: scale(1.055) !important ;"}
                    background: ${e=="dark"?"#a2a2a270":"#dae5ffa3 ; color: #000000a8 ; border-color: #a3c9ff"}}
                .${app.slug}-related-query svg { /* related query icon */
                    float: left ; margin: -0.09em 6px 0 0 ;
                    color: ${e=="dark"?"#aaa":"#c1c1c1"}}#${app.slug} footer {
                    position: relative ; text-align: right ; font-size: 0.75rem ; line-height: 1.43em ;
                    right: -54px ; margin: ${env.browser.isFF?1:-2}px -32px 12px }
                #${app.slug} footer * { color: #aaa ; text-decoration: none }
                #${app.slug} footer a:hover { color: ${e=="dark"?"white":"black"}}.chatgpt-notif {
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
                    ${app.config.bgAnimationsDisabled?`background: var(--app-bg-color-${e}-scheme)`:"background-image: var(--app-gradient-bg)"}}
                #${app.slug}.expanded { width: 528px !important }
                #${app.slug}.anchored .anchored-hidden { display: none } /* hide non-Anchor elems in mode */
                #${app.slug}:not(.anchored) .anchored-only { display: none } /* hide Anchor elems outside mode */@media (hover: none) {
                    #${app.slug} .app-hover-only { /* show app-hover-only elems */
                        position: relative ; left: auto ; width: auto ; opacity: 1 }
                    #${app.slug} *:hover { transform: none !important } /* disable hover fx */
                }@media screen and (max-width: 480px) {
                    #${app.slug} #${app.slug}-logo { /* header logo... */
                        top: 0 ; width: calc(100% -154px) } /* remove y-pos, widen till btns */
                    #${app.slug} .byline { display: none !important } /* hide byline */
                    #${app.slug} [class*=reply-tip] { display: none } /* hide reply tip */
                    .${app.slug}-related-queries { padding: 0 } /* remove RQ parent padding */
                }`,themes.apply(app.config.theme)},bylineVisibility(){if(env.browser.isCompact)return;const e={byline:app.div.querySelector(".byline")};if(!e.byline)return;Object.assign(e,{appPrefix:app.div.querySelector("#app-prefix"),btns:app.div.querySelectorAll(`#${app.slug}-header-btns > btn`),logo:app.div.querySelector(`#${app.slug}-logo`)});const t=getComputedStyle(app.div),o={appDiv:app.div.getBoundingClientRect().width,appDivXpadding:parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)};Object.entries(e).forEach(([s,n])=>o[s]=dom.get.computedWidth(n));const a=o.appDiv-o.appDivXpadding-o.appPrefix-o.logo-o.btns-16;Object.assign(e.byline.style,o.byline>a?{position:"absolute",left:"-9999px",opacity:0}:{position:"",left:"",opacity:1})},chatbarWidth(){const e=app.div.querySelector(`#${app.slug}-chatbar`);e&&(e.style.width=`${env.browser.isMobile?81.4:app.config.anchored?app.config.expanded?87.4:83.3:app.config.widerSidebar?env.ui.site.hasSidebar?85.4:85.9:env.ui.site.hasSidebar?79.3:80.1}%`)},async footerContent(){const e=await get.json("https://cdn.jsdelivr.net/gh/KudoAI/ads-library/advertisers/index.json").catch(d=>log.error(d.message));if(!e)return;let t;for(const[d,i]of c(p(Object.entries(e))))if(i.campaigns.text){t=d;break}if(!t)return;const o=await get.json(`https://cdn.jsdelivr.net/gh/KudoAI/ads-library/advertisers/${t}/text/campaigns.json`).catch(d=>log.error(d.message));if(!o)return;const a=new RegExp(app.name.toLowerCase(),"i"),s=(()=>{const d=new Date,i=d.getFullYear(),l=String(d.getMonth()+1).padStart(2,"0"),g=String(d.getDate()).padStart(2,"0");return i+l+g})();let n=!1;for(const[d,i]of c(p(Object.entries(o))))if(!(!(i.active&&(!i.endDate||s<=i.endDate))||i.excludedApps?.some(g=>new RegExp(g,"i").test(app.name)))){for(const[g,u]of c(p(Object.entries(i.adGroups)))){if(/^self$/i.test(g)&&!a.test(d)||a.test(d)&&!/^self$/i.test(g)||u.active==!1||u.targetBrowsers&&!u.targetBrowsers.some(b=>new RegExp(b,"i").test(navigator.userAgent))||u.targetLocations&&(!env.userLocale||!u.targetLocations.some(b=>b.includes(env.userLocale)||env.userLocale.includes(b))))continue;const r=u.ads.filter(b=>b.active!=!1);if(!r.length)continue;const h=r[Math.floor(chatgpt.randomFloat()*r.length)];let f=h.destinationURL||u.destinationURL||i.destinationURL||"";if(f.includes("http")){const[b,x]=f.split("?"),y=new URLSearchParams(x||"");y.set("utm_source",app.name.toLowerCase()),y.set("utm_content","app_footer_link"),f=`${b}?${y.toString()}`}const m=f?dom.create.anchor(f):dom.create.elem("span");app.footerContent.replaceWith(m),app.footerContent=m,app.footerContent.textContent=h.text,app.footerContent.setAttribute("title",h.tooltip||""),n=!0;break}if(n)break}function c(d){let i=d.length,l,g;for(;i!=0;)g=Math.floor(chatgpt.randomFloat()*i),i-=1,l=d[i],d[i]=d[g],d[g]=l;return d}function p(d){let i=[...d],l=i.length-1;return d.forEach(([g,u])=>{if(u.boost){const r=parseInt(u.boost)/100,h=Math.ceil(l/(1-r))*r-1;for(let f=0;f<h;f++)i.push([g,u]);l+=h}}),i}},replyPrefix(){const e=app.div.querySelector("pre p");if(!e)return;const t=env.ui.app.scheme=="dark"&&!app.config.bgAnimationsDisabled&&!/shuffle|summarize/.test(get.reply.src),o=e.textContent.startsWith(">> ");t&&!o?e.prepend(">> "):!t&&o&&(e.textContent=e.textContent.replace(/^>> /,""))},risingParticles(){["sm","med","lg"].forEach(e=>document.querySelectorAll(`[id*=particles-${e}]`).forEach(t=>t.id=app.config.bgAnimationsDisabled?`particles-${e}-off`:`${env.ui.app.scheme=="dark"?"white":"gray"}-particles-${e}`))},rqVisibility(){const e=app.div.querySelector(`.${app.slug}-related-queries`);e&&(e.style.display=app.config.rqDisabled||app.config.anchored?"none":"flex")},scheme(e){env.ui.app.scheme=e,$.googlegpt.update(),icons.googlegpt.update(),update.appStyle(),update.risingParticles(),update.replyPrefix(),modals.settings.updateSchemeStatus()}},window.toggle={anchorMode(e="",{persist:t=!0}={}){const o=app.config.anchored;let a=!1;if(e=="on"||!e&&!app.config.anchored?(t?settings.save("anchored",!0):app.config.anchored=!0,["sticky","wider"].forEach(s=>{app.config[`${s}Sidebar`]&&(toggle.sidebar(s),a=!0)})):(t?settings.save("anchored",!1):app.config.anchored=!1,app.config.expanded&&(toggle.expandedMode("off"),a=!0)),o!=app.config.anchored){if(app.div.classList.toggle("anchored",app.config.anchored),update.rqVisibility(),replyBubble.updateMaxHeight(),update.chatbarWidth(),getComputedStyle(app.div).transitionProperty.includes("width")&&app.div.addEventListener("transitionend",function s(n){n.propertyName=="width"&&(update.bylineVisibility(),app.div.removeEventListener("transitionend",s))}),modals.settings.get()){const s=document.querySelector("[id*=anchor] input");s.checked!=app.config.anchored&&modals.settings.toggle.switch(s)}t&&feedback.notify(`${app.msgs.mode_anchor} ${menus.toolbar.state.words[+app.config.anchored]}`,void 0,a?2.75:void 0)}},animations(e){const t=`${e}AnimationsDisabled`;if(settings.save(t,!app.config[t]),update.appStyle(),e=="bg"&&(update.risingParticles(),update.replyPrefix()),e=="fg"&&modals.settings.get()){const o=document.querySelector("#about-settings-entry > span > div");o.innerHTML=modals.settings.aboutContent[app.config.fgAnimationsDisabled?"short":"long"],o.style.float=app.config.fgAnimationsDisabled?"right":""}feedback.notify(`${settings.controls[t].label} ${menus.toolbar.state.words[+!app.config[t]]}`)},autoGen(e){const t=["get","summarize"],o=`auto${string.toTitleCase(e)}`;let a=!1;if(settings.save(o,!app.config[o]),app.config[o]){const s=t[+(e==t[0])];app.config[`auto${string.toTitleCase(s)}`]&&(toggle.autoGen(s),a=!0),["prefix","suffix"].forEach(n=>{app.config[`${n}Enabled`]&&(toggle.manualGen(n),a=!0)}),app.div.querySelector(`button[class*=standby]:has(svg.${e=="get"?"send":"summarize"})`)?.click()}if(feedback.notify(`${settings.controls[o].label} ${menus.toolbar.state.words[+app.config[o]]}`,void 0,a?2.75:void 0),modals.settings.get()){const s=document.querySelector(`[id*=${o}] input`);s.checked!=app.config[o]&&modals.settings.toggle.switch(s)}},expandedMode(e=""){const t=e=="on"||!e&&!app.config.expanded;settings.save("expanded",t),app.div.classList.toggle("expanded",t),app.config.minimized&&toggle.minimized("off"),update.chatbarWidth(),getComputedStyle(app.div).transitionProperty.includes("width")&&app.div.addEventListener("transitionend",function a(s){s.propertyName=="width"&&(update.bylineVisibility(),app.div.removeEventListener("transitionend",a))});const o=app.div.querySelector(`#${app.slug}-arrows-btn`);o&&o.firstChild.replaceWith(icons.create({key:`arrowsDiagonal${app.config.expanded?"In":"Out"}`,size:17}))},manualGen(e){const t=`${e}Enabled`;let o=!1;if(settings.save(t,!app.config[t]),app.config[t]&&["get","summarize"].forEach(a=>{app.config[`auto${string.toTitleCase(a)}`]&&(toggle.autoGen(a),o=!0)}),feedback.notify(`${settings.controls[t].label} ${menus.toolbar.state.words[+app.config[t]]}`,void 0,o?2.75:void 0),modals.settings.get()){const a=document.querySelector(`[id*=${t}] input`);a.checked!=app.config[t]&&modals.settings.toggle.switch(a)}},minimized(e=""){const t=e=="on"||!e&&!app.config.minimized;settings.save("minimized",t);const o=app.div.querySelector("[id$=chevron-btn]");o&&(o.textContent="",o.append(icons.create({key:`chevron${app.config.minimized?"Up":"Down"}`,size:22,style:"position: relative ; top: -1px"})),o.onclick=()=>{app.div.querySelector("[id$=font-size-slider-track]")?.classList.contains("active")&&fontSizeSlider.toggle("off"),toggle.minimized()}),update.appBottomPos(),tooltip.toggle("off")},proxyMode(){if(settings.save("proxyAPIenabled",!app.config.proxyAPIenabled),feedback.notify(`${app.msgs.menuLabel_proxyAPImode} ${menus.toolbar.state.words[+app.config.proxyAPIenabled]}`),menus.toolbar.refresh(),modals.settings.get()){const t=document.querySelector("[id*=proxy] input"),o=document.querySelector("[id*=preferredAPI]"),a=document.querySelector("[id*=streaming] input");t.checked!=app.config.proxyAPIenabled&&modals.settings.toggle.switch(t),o.classList.toggle("active",app.config.proxyAPIenabled),o.style.pointerEvents=app.config.proxyAPIenabled?"":"none",(a.checked&&!app.config.proxyAPIenabled||!a.checked&&app.config.proxyAPIenabled&&!app.config.streamingDisabled)&&modals.settings.toggle.switch(a)}const e=app.div.querySelector(`#${app.slug} .api-btn`);e&&(e.style.pointerEvents=app.config.proxyAPIenabled?"":"none"),app.div.querySelector(`.${app.slug}-alert`)&&get.reply({msgs:app.msgChain,src:get.reply.src})},relatedQueries(){settings.save("rqDisabled",!app.config.rqDisabled),update.rqVisibility(),!app.config.rqDisabled&&!app.div.querySelector(`.${app.slug}-related-queries`)&&get.related(app.msgChain[app.msgChain.length-1]?.content||C).then(e=>show.related(e)).catch(e=>{log.error(e.message),api.tryNew({caller:get.related})}),replyBubble.updateMaxHeight(),feedback.notify(`${app.msgs.menuLabel_relatedQueries} ${menus.toolbar.state.words[+!app.config.rqDisabled]}`)},sidebar(e,t=""){const o=e+"Sidebar",a=app.config.stickySidebar;let s=!1;if(t=="on"||!t&&!app.config[o]?(e=="sticky"&&app.config.anchored&&(toggle.anchorMode(),s=!0),settings.save(o,!0)):settings.save(o,!1),app.div.classList.toggle(e,app.config[o]),replyBubble.updateMaxHeight(),update.bylineVisibility(),update.chatbarWidth(),e=="wider"&&document.querySelectorAll(`#${app.slug} svg.widescreenTall, #${app.slug} svg.widescreenWide`).forEach(n=>n.replaceWith(icons.create({key:`widescreen${app.config.widerSidebar?"Wide":"Tall"}`}))),modals.settings.get()){const n=document.querySelector(`[id*=${e}] input`);n.checked!=app.config[`${e}Sidebar`]&&modals.settings.toggle.switch(n)}e=="sticky"&&a==app.config.stickySidebar||feedback.notify(`${app.msgs[`menuLabel_${e}Sidebar`]||string.toTitleCase(e)+" Sidebar"} ${menus.toolbar.state.words[+app.config[o]]}`,void 0,s?2.75:void 0)},streaming(){if(env.scriptManager.supportsStreaming)if(app.config.proxyAPIenabled)settings.save("streamingDisabled",!app.config.streamingDisabled),feedback.notify(`${settings.controls.streamingDisabled.label} ${menus.toolbar.state.words[+!app.config.streamingDisabled]}`);else{let e=`${settings.controls.streamingDisabled.label} ${app.msgs.alert_isCurrentlyOnlyAvailBy} ${app.msgs.alert_switchingOn} ${app.msgs.mode_proxy}. (${app.msgs.alert_openAIsupportSoon}!)`;const t=app.msgs.alert_switchingOn;e=e.replace(t,`<a class="alert-link" href="#">${t}</a>`);const o=modals.alert(`${app.msgs.mode_streaming} ${app.msgs.alert_unavailable}`,e);o.querySelector('[href="#"]').onclick=()=>{o.querySelector(".modal-close-btn")?.click(),toggle.proxyMode()}}else{const e=env.browser.isFF?"https://addons.mozilla.org/firefox/addon/scriptcat/":env.browser.isEdge?"https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh":"https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf";modals.alert(`${settings.controls.streamingDisabled.label} ${app.msgs.alert_unavailable}`,`${settings.controls.streamingDisabled.label} ${app.msgs.alert_isOnlyAvailFor} <a target="_blank" rel="noopener" href="https://tampermonkey.net">Tampermonkey</a> ${app.msgs.about_and} <a target="_blank" rel="noopener" href="${e}">ScriptCat</a>. (${app.msgs.alert_userscriptMgrNoStream}.)`)}}},window.get={json(e){return new Promise((t,o)=>{let a=0;s(e);function s(c){env.xhr({method:"GET",url:c,onload:({responseText:p,status:d})=>{if(d>=300&&d!=404){const i=d<400?"REDIRECT":d<500?"CLIENT":"SERVER";return o(new Error(`${i} ERROR: ${d}`))}try{t(c.endsWith(".json")?JSON.parse(p):JSON5.parse(p))}catch(i){a<1?n():o(new Error(`PARSE ERROR: ${i.message}`))}},onerror:p=>{a<1?n():o(new Error(`LOAD ERROR: ${p.message}`))}})}function n(){a++,s(e.endsWith(".json")?e+"5":e.slice(0,-1))}})},async related(e){if(get.related.status="waiting",get.related.triedAPIs=get.related.triedAPIs||[],get.related.attemptCnt=get.related.attemptCnt||1,get.related.api=api.pick(get.related),!get.related.api)return;get.related.api=="OpenAI"&&(app.config.openAIkey=await Promise.race([session.getOAItoken(),new Promise(s=>setTimeout(s,3e3))]));const t=get.related.api;get.related.query=e,get.related.timeout=setTimeout(()=>{get.related.status!="done"&&get.related.api==t&&get.related.triedAPIs.length!=Object.keys(app.apis).length&&api.tryNew({caller:get.related,reason:"timeout"})},7e3);const o=get.related.api;let a=prompts.create("relatedQueries",{prevQuery:e,mods:"all"});return a=prompts.augment(a,{api:o}),new Promise(s=>{const n=app.apis[o].method,c=api.createReqData({api:o,msgs:[{role:"user",content:a}]}),p={headers:api.createHeaders(o),method:n,responseType:"text",onerror:d=>{log.error(d),api.tryNew({caller:get.related})},onload:d=>api.process.text(d,{caller:get.related,callerAPI:o}).then(s),url:app.apis[o].endpoints?.completions||app.apis[o].endpoint};n=="POST"?p.data=JSON.stringify(c):n=="GET"&&(p.url+=`?q=${c}`),env.xhr(p)})},async reply({msgs:e,src:t=null}){get.reply.src=t,show.reply.updatedAPIinHeader=!1;const o=app.div.querySelector(`.${app.slug}-related-queries`),a=icons.create({key:"arrowsCyclic",size:15});let s;if(a.style.cssText="position: relative ; top: 2px ; margin-right: 6px",app.div.querySelector(".reply-pre")?(/regen|summarize/i.test(t)||o?.remove(),app.div.querySelector("footer").textContent="",s=app.div.querySelector("section"),s.style.margin="3px 0 -10px",s.textContent=app.alerts.waitingResponse,a.style.animation="rotate 1s infinite cubic-bezier(0, 1.05, 0.79, 0.44)"):(feedback.appAlert("waitingResponse"),s=app.div.querySelector(`.${app.slug}-alert`),a.style.animation="rotate 2s infinite linear"),s.classList.add("loading","no-user-select"),s.prepend(a),e=structuredClone(e),e.length>3&&(e=e.slice(-3)),e.forEach(l=>{l.role=="assistant"&&l.content.length>250&&(l.content=l.content.substring(0,250)+"...")}),get.reply.status="waiting",get.reply.triedAPIs=get.reply.triedAPIs||[],get.reply.attemptCnt=get.reply.attemptCnt||1,get.reply.api=app.config.proxyAPIenabled?api.pick(get.reply):"OpenAI",!get.reply.api)return feedback.appAlert(`${app.config.preferredAPI?"api":"proxy"}NotWorking`,`suggest${app.config.preferredAPI?"DiffAPI":"OpenAI"}`);if(!app.config.proxyAPIenabled)app.config.openAIkey=await Promise.race([session.getOAItoken(),new Promise(l=>setTimeout(l,3e3))]);else{const l=get.reply.api;clearTimeout(get.reply.timeout),get.reply.timeout=get.reply.timeout=setTimeout(()=>{app.config.proxyAPIenabled&&get.reply.status!="done"&&!get.reply.sender&&get.reply.api==l&&get.reply.triedAPIs.length!=Object.keys(app.apis).length-1&&api.tryNew({caller:get.reply,reason:"timeout"})},((app.config.streamingDisabled?10:7*(app.config.preferredAPI?2:1))+(l=="AIchatOS"?5:0))*1e3)}const n=get.reply.api,c=e[e.length-1];c.content=prompts.augment(c.content,{api:n,caller:get.reply});const p=app.apis[n].method,d=api.createReqData({api:n,msgs:e}),i={headers:api.createHeaders(n),method:p,responseType:app.config.streamingDisabled||!app.config.proxyAPIenabled?"text":"stream",onerror:l=>{log.error(l),app.config.proxyAPIenabled?api.tryNew({caller:get.reply}):feedback.appAlert(app.config.openAIkey?["OpenAI","apiNotWorking","suggestProxy"]:"login")},onload:l=>api.process.text(l,{caller:get.reply,callerAPI:n}),onloadstart:l=>api.process.stream(l,{caller:get.reply,callerAPI:n}),url:app.apis[n].endpoints?.completions||app.apis[n].endpoint};p=="POST"?i.data=JSON.stringify(d):p=="GET"&&(i.url+=`?q=${d}`),env.xhr(i),!app.config.rqDisabled&&!o&&get.reply.attemptCnt==1&&get.related(app.msgChain[app.msgChain.length-1].content).then(l=>show.related(l)).catch(l=>{log.error(l.message),api.tryNew({caller:get.related})}),update.footerContent()}},window.show={async codeCornerBtns(){app.div.querySelector("code")&&(window.codeLangData||=await get.json(`${app.urls.aiwebAssets}/data/code-languages.json`).catch(e=>log.error(e.message)),app.div.querySelectorAll("code").forEach(e=>{if(e.querySelector("[id$=copy-btn]"))return;const t=dom.create.elem("div",{class:"code-header"}),o=buttons.reply.bubble.copy.cloneNode(!0);o.style.cssText="",Object.entries(buttons.reply.bubble.copy.listeners).forEach(([n,c])=>o[n]=c);const a=dom.create.elem("btn",{id:`${app.slug}-download-btn`}),s={download:icons.create({key:"download"}),downloaded:icons.create({key:"checkmarkDouble"})};Object.entries(s).forEach(([n,c])=>{c.id=`${app.slug}-${n}-icon`,["width","height"].forEach(p=>c.setAttribute(p,15))}),a.append(s.download),a.onclick=({currentTarget:n})=>{if(!a.firstChild.matches("[id$=download-icon]"))return;a.style.cursor="default",a.firstChild.replaceWith(s.downloaded.cloneNode(!0)),tooltip.update(n),setTimeout(()=>{a.firstChild.replaceWith(s.download.cloneNode(!0)),a.style.cursor="pointer",a.matches(":hover")&&a.dispatchEvent(new Event("mouseenter"))},1e4);const c=a.closest("code"),p={hljsSlug:/language-(\w+)/.exec(c.className)?.[1]};if(p.hljsSlug&&window.codeLangData){for(const[r,h]of Object.entries(window.codeLangData))if(h.hljsSlug==p.hljsSlug){[p.name,p.fileExtension]=[r,h.fileExtension];break}}const d=c.textContent.replace(/^>> /,"").trim()+`
`,i=new Date().toISOString().split("T")[0],l=`${app.slug}_${p.name.toLowerCase()||"code"}_${i}_${Date.now().toString(36)}${p.fileExtension?"."+p.fileExtension:""}`,g=URL.createObjectURL(new Blob([d],{type:"text/plain"})),u=dom.create.anchor(g,"",{download:l,style:"display: none"});document.body.append(u),u.click(),u.remove(),URL.revokeObjectURL(g)},a.onmouseenter=a.onmouseleave=tooltip.toggle,t.append(o,a),e.prepend(t)}))},related(e){if(log.caller="show.related()",get.reply.status=="waiting")return setTimeout(()=>show.related(e),500,e);const t=app.div.querySelector(`#${app.slug} .reply-pre`)?.textContent.trim();if(!/shuffle|summarize/i.test(get.reply.src)&&!get.related.replyIsQuestion&&/[?？]/.test(t))log.debug("Re-getting related queries to answer reply question..."),get.related.replyIsQuestion=!0,get.related(t).then(o=>show.related(o)).catch(o=>{log.error(o.message),api.tryNew({caller:get.related})});else if(e&&!app.div.querySelector(`.${app.slug}-related-queries`)){const o=dom.create.elem("div",{class:`${app.slug}-related-queries anchored-hidden`});app.div.append(o),e.forEach((a,s)=>{const n=dom.create.elem("div",{title:app.msgs.tooltip_sendRelatedQuery,tabindex:0,class:`${app.slug}-related-query fade-in no-user-select no-mobile-tap-outline`});n.textContent=a,n.prepend(icons.create({key:"arrowDownRight"})),o.append(n),setTimeout(()=>{n.classList.add("active"),n.onclick=n.onkeydown=c=>{const p=[" ","Spacebar","Enter","Return"],d=[32,13];if(p.includes(c.key)||d.includes(c.keyCode)||c.type=="click"){c.preventDefault();const i=app.div.querySelector("textarea");if(!i)return;const l=c.target.textContent;i.value=l,/\[[^[\]]+\]/.test(l)?(i.focus(),ui.addListeners.replySection.chatbarAutoSizer(),i.setSelectionRange(l.indexOf("["),l.indexOf("]")+1)):(i.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0})),get.related(l).then(g=>show.related(g)).catch(g=>{log.error(g.message),api.tryNew({caller:get.related})}))}}},(s+1)*50)}),replyBubble.updateMaxHeight(),get.related.replyIsQuestion=null}},reply({content:e,standby:t=!1,apiUsed:o=null}){show.reply.shareURL=null,tooltip.toggle("off");const a=app.div.querySelector("[id$=regen-btn]")?.firstChild;if(a?.style?.animation){a.style.animation=a.style.cursor="";const i=a.closest("btn");i.matches(":hover")&&i.dispatchEvent(new Event("mouseenter"))}if(!app.div.querySelector(".reply-pre")){app.div.textContent="",css.addRisingParticles(app.div);const i=dom.create.elem("div",{class:"app-header",style:"margin: -8px 0 0 0"});app.div.append(i);const l=dom.create.elem("span",{id:"app-prefix",class:"no-user-select",style:`margin-right: -2px ; font-size: ${env.browser.isMobile?"1.7rem":"1.1rem"}`});l.textContent="\u{1F916} ",i.append(l);const g=$.googlegpt.create();g.width=env.browser.isMobile?177:env.browser.isFF?124:122,g.style.cssText=`position: relative ; top: ${env.browser.isMobile?4:env.browser.isFF?3:2}px`+(env.browser.isMobile?"; margin-left: 1px":"");const u=dom.create.anchor(app.urls.app,g);u.classList.add(`${app.slug}-name`,"no-user-select"),i.append(u);const r=dom.create.elem("div",{id:`${app.slug}-header-btns`,class:"no-mobile-tap-outline",style:"margin-top: 1px"});if(i.append(r),!env.browser.isMobile){var s=dom.create.elem("btn",{id:`${app.slug}-chevron-btn`,class:`${app.slug}-header-btn anchored-only`,style:"margin: -3.5px 1px 0 11px"});s.append(icons.create({key:`chevron${app.config.minimized?"Up":"Down"}`,size:22,style:"position: relative ; top: -1px"})),r.append(s)}const h=dom.create.elem("btn",{id:`${app.slug}-about-btn`,class:`${app.slug}-header-btn`,style:`margin-top: ${env.browser.isMobile?.25:-.15}rem`});h.append(icons.create({key:"questionMarkCircle"})),r.append(h);const f=dom.create.elem("btn",{id:`${app.slug}-settings-btn`,class:`${app.slug}-header-btn`,style:`margin: ${env.browser.isMobile?6:0}px 10px 0 4.5px`});if(f.append(icons.create({key:"sliders",size:17})),r.append(f),!t){var n=dom.create.elem("btn",{id:`${app.slug}-font-size-btn`,class:`${app.slug}-header-btn app-hover-only`,style:`margin: ${env.browser.isMobile?5:-2}px 9px 0 0`});n.append(icons.create({key:"fontSize"})),r.append(n)}if(!env.browser.isMobile){var c=dom.create.elem("btn",{id:`${app.slug}-pin-btn`,class:`${app.slug}-header-btn app-hover-only`,style:"margin: -1.55px 9.5px 0 0"});c.append(icons.create({key:"pin",size:16.5,style:"position: relative ; top: 2px"})),r.append(c);var p=dom.create.elem("btn",{id:`${app.slug}-wsb-btn`,class:`${app.slug}-header-btn app-hover-only anchored-hidden`,style:"margin: -0.5px 12px 0 0"});p.append(icons.create({key:`widescreen${app.config.widerSidebar?"Wide":"Tall"}`})),r.append(p);var d=dom.create.elem("btn",{id:`${app.slug}-arrows-btn`,class:`${app.slug}-header-btn app-hover-only anchored-only`,style:"margin: 0 11.5px 0 0"});d.append(icons.create({key:`arrowsDiagonal${app.config.expanded?"In":"Out"}`,size:17})),r.append(d)}if(ui.addListeners.btns.appHeader(),!env.browser.isMobile){const m=dom.create.elem("span",{class:"byline no-user-select",textContent:"by "});m.append(dom.create.anchor(app.urls.publisher,"KudoAI")),i.querySelector(`.${app.slug}-name`).insertAdjacentElement("afterend",m),update.bylineVisibility()}if(t){const m=dom.create.elem("div",{class:`${app.slug}-standby-btns`,style:"will-change: transform"});["query","summarize"].forEach(b=>{const x={node:dom.create.elem("button",{class:`${app.slug}-standby-btn no-mobile-tap-outline`}),icon:icons.create({key:b=="query"?"send":"summarize"}),textSpan:dom.create.elem("span")};x.textSpan.textContent=b=="query"?`${app.msgs.btnLabel_sendSearchQueryTo} ${app.name}`:app.msgs.tooltip_summarizeResults,x.node.onclick=()=>{show.reply.userInteracted=!0,show.reply.chatbarFocused=!1,app.msgChain.push({role:"user",content:b=="summarize"?prompts.create("summarizeResults"):new URL(location.href).searchParams.get("q")}),get.reply({msgs:app.msgChain,src:b})},x.node.append(x.icon,x.textSpan),m.append(x.node)}),app.div.append(m)}else replyBubble.insert()}if(!app.div.querySelector(`#${app.slug}-chatbar`)){const i=app.div.querySelector("section")||dom.create.elem("section");i.className.includes("loading")&&(i.textContent=i.className=i.style="");const l=dom.create.elem("form"),g=dom.create.elem("div"),u=dom.create.elem("textarea",{id:`${app.slug}-chatbar`,rows:1,placeholder:`${app.msgs[t?"placeholder_askSomethingElse":"tooltip_sendReply"]}...`});g.append(u),l.append(g),i.append(l),app.div.querySelector(".reply-bubble, [class*=standby-btns]").after(i),["send","shuffle","summarize"].forEach((r,h)=>{if(r=="summarize"&&app.div.querySelector("[class*=standby-btn]"))return;const f=dom.create.elem("button",{id:`${app.slug}-${r}-btn`,class:`${app.slug}-chatbar-btn no-mobile-tap-outline`});f.style.right=`${h===0?3:h==1?-3:-5}px`,f.append(icons.create({key:r,size:r=="send"?14:18})),g.append(f)}),app.footer=app.div.querySelector("footer")||dom.create.elem("footer"),app.footer.append(app.footerContent),app.div.querySelector("footer")||app.div.append(app.footer),ui.addListeners.replySection(),env.browser.isMobile&&show.reply.userInteracted&&(document.body.scrollTop=0,document.documentElement.scrollTop=0)}if(!t){if(!show.reply.updatedAPIinHeader){let u=function(r,h,{speed:f=1}={}){h.textContent="";let m=0;(function b(){m<r.length&&(h.textContent+=r[m],m++,setTimeout(b,50/f))})()};show.reply.updatedAPIinHeader=!0;const l=app.div.querySelector(".reply-header-txt"),g=dom.create.elem("span",{class:"api-btn",style:"cursor: pointer",textContent:"\u29BF"});g.onmouseenter=g.onmouseleave=g.onclick=menus.hover.toggle,g.style.pointerEvents=app.config.proxyAPIenabled?"":"none",l.replaceChildren(g,` API ${app.msgs.componentLabel_used}: `,dom.create.elem("b")),setTimeout(()=>u(o,l.lastChild,{speed:1.5}),150)}const i=app.div.querySelector(".reply-pre");try{i.innerHTML=marked.parse(e)}catch(l){log.error(l.message)}hljs.highlightAll(),i.querySelectorAll("code").forEach(l=>{l.innerHTML=l.innerHTML.replace(/;\s*/g,";<br>")}),update.replyPrefix(),[i,...i.querySelectorAll("*")].forEach(l=>renderMathInElement(l,{delimiters:app.katexDelimiters,throwOnError:!1})),app.config.stickySidebar&&replyBubble.updateMaxHeight(),app.config.autoScroll&&!env.browser.isMobile&&app.config.proxyAPIenabled&&!app.config.streamingDisabled&&(app.config.stickySidebar||app.config.anchored?i.scrollTop=i.scrollHeight:scrollBy({top:app.div.querySelector(`#${app.slug}-chatbar`).getBoundingClientRect().bottom-innerHeight+13}))}!show.reply.chatbarFocused&&!env.browser.isMobile&&(!app.config.autoFocusChatbarDisabled&&(app.config.anchored||app.div.offsetHeight<innerHeight-app.div.getBoundingClientRect().top)||app.config.autoFocusChatbarDisabled&&app.config.anchored&&show.reply.userInteracted)&&(app.div.querySelector(`#${app.slug}-chatbar`).focus(),show.reply.chatbarFocused=!0),app.config.anchored&&update.appBottomPos(),update.chatbarWidth(),show.reply.userInteracted=!1}},window.fontSizeSlider={fadeInDelay:5,hWheelDistance:10,createAppend(){fontSizeSlider.cursorOverlay=dom.create.elem("div",{class:"cursor-overlay"});const e=dom.create.elem("div",{id:`${app.slug}-font-size-slider-track`,class:"fade-in-less",style:"display: none"}),t=dom.create.elem("div",{title:Math.floor(app.config.fontSize*10)/10+"px",id:`${app.slug}-font-size-slider-thumb`}),o=dom.create.elem("div",{id:`${app.slug}-font-size-slider-tip`});e.append(t,o),app.div.insertBefore(e,app.div.querySelector(`.${app.slug}-tooltip,.reply-bubble`)),setTimeout(()=>{const p=(app.config.fontSize-app.config.minFontSize)/(app.config.maxFontSize-app.config.minFontSize)*(e.offsetWidth-t.offsetWidth);t.style.left=p+"px"},fontSizeSlider.fadeInDelay);let a=!1,s,n;t.addEventListener(app.inputEvents.down,p=>{p.button==0&&(p.preventDefault(),a=!0,s=p.clientX,n=t.offsetLeft,document.body.append(fontSizeSlider.cursorOverlay))}),document.addEventListener(app.inputEvents.move,({clientX:p})=>{a&&c(n+p-s)}),document.addEventListener(app.inputEvents.up,()=>{a=!1,fontSizeSlider.cursorOverlay?.isConnected&&fontSizeSlider.cursorOverlay.remove()}),env.browser.isMobile||(e.onwheel=p=>{p.preventDefault(),c(t.offsetLeft-Math.sign(p.deltaY)*fontSizeSlider.hWheelDistance)}),e.addEventListener(app.inputEvents.down,p=>{if(p.button!=0)return;p.preventDefault();const d=p.clientX||p.touches?.[0]?.clientX;c(d-e.getBoundingClientRect().left-t.offsetWidth/2),a=!0,s=d,n=t.offsetLeft,document.body.append(fontSizeSlider.cursorOverlay)});function c(p){const d=e.offsetWidth-t.offsetWidth;p<0&&(p=0),p>d&&(p=d),t.style.left=p+"px";const i=app.div.querySelector(".reply-pre"),l=p/d,g=app.config.minFontSize+l*(app.config.maxFontSize-app.config.minFontSize);i.style.fontSize=g+"px",i.style.lineHeight=g*app.config.lineHeightRatio+"px",settings.save("fontSize",g),t.title=Math.floor(app.config.fontSize*10)/10+"px"}return e},toggle(e=""){const t=document.getElementById(`${app.slug}-font-size-slider-track`)||fontSizeSlider.createAppend(),o=app.div.querySelector(".reply-tip"),a=document.getElementById(`${app.slug}-font-size-slider-tip`);if(e=="on"||!e&&t.style.display=="none"){const s=document.getElementById(`${app.slug}-font-size-btn`),n={appDiv:app.div.getBoundingClientRect(),btnSpan:s.getBoundingClientRect()};a.style.right=`${n.appDiv.right-(n.btnSpan.left+n.btnSpan.right)/2-35.5}px`,t.style.display=a.style.display="",o&&(o.style.display="none"),setTimeout(()=>t.classList.add("active"),fontSizeSlider.fadeInDelay)}else(e=="off"||!e&&t.style.display!="none")&&(t.classList.remove("active"),o&&(o.style.display=""),a.style.display=t.style.display="none")}};const $={googlegpt:{create(){const e=dom.create.elem("img",{id:`${app.slug}-logo`,class:"no-mobile-tap-outline"});return $.googlegpt.update(e),e},update(...e){e=e.flat(),e.length||(e=document.querySelectorAll(`#${app.slug}-logo`)),e.forEach(t=>t.src=GM_getResourceText(`ggpt${env.ui.app.scheme=="dark"?"DS":"LS"}logo`))}}};window.modals={stack:[],class:`${app.slug}-modal`,about(){const e=`text-transform: uppercase ; font-size: 16px ; font-weight: bold ;color: ${env.ui.app.scheme=="dark"?"white":"#494141"}`,t=modals.alert(`${app.symbol} ${app.msgs.appName}`,`<span style="${e}">\u{1F9E0} ${app.msgs.about_author}:</span> <a href="${app.author[0].url}" target="_blank" rel="nopener">${app.author[0].name}</a> ${app.msgs.about_and} <a href="${app.urls.contributors}" target="_blank" rel="nopener">${app.msgs.about_contributors}</a>
<span style="${e}">\u{1F3F7}\uFE0F ${app.msgs.about_version}:</span> <span class="about-em">${app.version}</span>
<span style="${e}">\u{1F4DC} ${app.msgs.about_openSourceCode}:</span> <a href="${app.urls.github}" target="_blank" rel="nopener">${app.urls.github}</a>
<span style="${e}">\u{1F680} ${app.msgs.about_latestChanges}:</span> <a href="${app.urls.github}/commits" target="_blank" rel="nopener">${app.urls.github}/commits</a>
<span style="${e}">\u26A1 ${app.msgs.about_poweredBy}:</span> <a href="${app.urls.chatgptjs}" target="_blank" rel="noopener">chatgpt.js</a> v${app.chatgptjsVer}`,[function(){userscript.updateCheck()},function(){},function(){modals.open("feedback")},function(){}],"",629),o=$.googlegpt.create();return o.width=405,o.style.cssText=`max-width: 98% ; margin: 15px ${env.browser.isMobile?"auto":"14.5%"} -1px`,t.firstChild.nextElementSibling.before(o),t.querySelector("h2").remove(),t.querySelector("p").style.cssText=`
                overflow-wrap: anywhere ; line-height: 1.55 ; white-space: pre-wrap ;
                margin: ${env.browser.isCompact?"21px 0 -20px":"15px 0 -28px 17px"}`,t.querySelectorAll("button").forEach(a=>{a.style.cssText="height: 50px ; min-width: 136px",/support|extensions/i.test(a.textContent)&&(a.replaceWith(a=a.cloneNode(!0)),a.onclick=()=>modals.safeWinOpen(a.textContent.includes(app.msgs.btnLabel_getSupport)?app.urls.support:app.urls.relatedExtensions)),/updates/i.test(a.textContent)?a.textContent=`\u{1F680} ${app.msgs.btnLabel_checkForUpdates}`:/support/i.test(a.textContent)?a.textContent=`\u{1F9E0} ${app.msgs.btnLabel_getSupport}`:/rate/i.test(a.textContent)?a.textContent=`\u2B50 ${app.msgs.btnLabel_rateUs}`:/extensions/i.test(a.textContent)?a.textContent=`\u{1F916} ${app.msgs.btnLabel_moreAIextensions}`:a.style.display="none"}),t},alert(e="",t="",o="",a="",s=""){const n=chatgpt.alert(e,t,o,a,s),c=document.getElementById(n).firstChild;return this.init(c),c},api(){const e=[app.msgs.menuLabel_random,...Object.keys(app.apis).filter(a=>a!="OpenAI")].map(a=>{function s(){if(settings.save("preferredAPI",a==app.msgs.menuLabel_random?!1:a),modals.settings.get()){const n=document.querySelector("[id*=preferredAPI] > span");n.textContent!=a&&(n.textContent=a)}feedback.notify(`${app.msgs.menuLabel_preferred} API ${app.msgs.menuLabel_saved.toLowerCase()}`,`${app.config.anchored?"top":"bottom"}-right`),app.div.querySelector(`.${app.slug}-alert`)&&app.config.proxyAPIenabled&&get.reply({msgs:app.msgChain,src:get.reply.src})}return Object.defineProperty(s,"name",{value:a.toLowerCase()}),s}),t=modals.alert(`${app.msgs.menuLabel_preferred} API:`,"",e,"",503);t.querySelector("h2").style.justifySelf="center";const o=t.querySelector(".modal-buttons");return o.style.cssText=`margin: 18px 0px 4px !important ; ${env.browser.isCompact?"":"flex-wrap: wrap ; justify-content: center ; gap: 9px"}`,o.querySelectorAll("button").forEach((a,s)=>{s===0?a.style.display="none":a.classList.toggle("primary-modal-btn",app.config.preferredAPI&&app.config.preferredAPI.toLowerCase()==a.textContent.toLowerCase()||a.textContent==app.msgs.menuLabel_random&&!app.config.preferredAPI)}),t},feedback(){let e=[function(){},function(){},function(){},function(){}];modals.stack[0]!="about"&&e.push(function(){});const t=modals.alert(`${app.msgs.alert_choosePlatform}:`,"",e,"",456);t.style.display="inline-table",t.querySelector("h2").style.justifySelf="center";const o=t.querySelector(".modal-buttons");return env.browser.isCompact||(o.style.cssText="flex-wrap: wrap ; justify-content: center ; gap: 3px"),e=o.querySelectorAll("button"),e.forEach((a,s)=>{s===0&&(a.style.display="none"),s==e.length-1&&a.classList.remove("primary-modal-btn"),a.style.marginTop=a.style.marginBottom="5px",a.replaceWith(a=a.cloneNode(!0)),a.onclick=()=>modals.safeWinOpen(a.textContent=="Linkedin"?app.urls.review.linkedin:a.textContent=="Saashub"?app.urls.review.saashub:a.textContent=="Scriptcat"?app.urls.review.scriptcat:a.textContent=="Trustpilot"?app.urls.review.trustpilot:app.urls.discuss)}),t},handlers:{dismiss:{click(e){const t=e.target,o=document.querySelector(`#${app.slug}-settings > img`);if(o){const a=o.getBoundingClientRect();if(e.clientX>=a.left&&e.clientX<=a.right&&e.clientY>=a.top&&e.clientY<=a.bottom)return}(t==e.currentTarget||t.closest("[class*=-close-btn]"))&&modals.hide((t.closest("[class*=-modal-bg]")||t).firstChild)},key(e){(e.key.startsWith("Esc")||e.keyCode==27)&&modals.hide(document.querySelector("[class$=-modal]"))}},drag:{mousedown(e){if(e.button!=0||!/auto|default/.test(getComputedStyle(e.target).cursor)||e.target.closest("ul"))return;modals.draggingModal=e.currentTarget,e.preventDefault(),Object.assign(modals.draggingModal.style,{transform:"scale(1.05)",transition:"0.1s","-webkit-transition":"0.1s","-moz-transition":"0.1s","-o-transition":"0.1s","-ms-transition":"0.1s"}),document.body.style.cursor="grabbing",[...modals.draggingModal.children].forEach(o=>o.style.pointerEvents="none"),["mousemove","mouseup"].forEach(o=>document.addEventListener(o,modals.handlers.drag[o]));const t=modals.draggingModal.getBoundingClientRect();modals.handlers.drag.offsetX=e.clientX-t.left+21,modals.handlers.drag.offsetY=e.clientY-t.top+12},mousemove(e){if(modals.draggingModal){const t=e.clientX-modals.handlers.drag.offsetX,o=e.clientY-modals.handlers.drag.offsetY;Object.assign(modals.draggingModal.style,{left:`${t}px`,top:`${o}px`})}},mouseup(){Object.assign(modals.draggingModal.style,{cursor:"inherit",transform:"scale(1)",transition:"inherit","-webkit-transition":"inherit","-moz-transition":"inherit","-o-transition":"inherit","-ms-transition":"inherit"}),document.body.style.cursor="",[...modals.draggingModal.children].forEach(e=>e.style.pointerEvents=""),["mousemove","mouseup"].forEach(e=>document.removeEventListener(e,modals.handlers.drag[e])),modals.draggingModal=null}}},hide(e){const t=e?.parentNode;t&&(t.style.animation="modal-zoom-fade-out 0.165s ease-out",t.onanimationend=()=>t.remove())},init(e){this.stylize(),e.classList.add("no-user-select",this.class),e.parentNode.classList.add(`${this.class}-bg`),e.onwheel=e.ontouchmove=t=>t.preventDefault(),e.onmousedown=this.handlers.drag.mousedown,e.parentNode.className.includes("chatgpt-modal")||[e.parentNode,e.querySelector("[class*=-close-btn]")].forEach(o=>o.onclick=this.handlers.dismiss.click),css.addRisingParticles(e),setTimeout(()=>{e.parentNode.style.backgroundColor=`rgba(67,70,72,${env.ui.app.scheme=="dark"?.62:.33})`,e.parentNode.classList.add("animated")},100)},observeRemoval(e,t,o){const a=e.parentNode;new MutationObserver(([s],n)=>s.removedNodes.forEach(c=>{if(c===a){if(modals.stack[0].includes(o||t)){modals.stack.shift();const p=modals.stack[0];p&&(modals.stack.shift(),modals.open(p))}n.disconnect()}})).observe(a.parentNode,{childList:!0,subtree:!0})},open(e,t){const o=t?modals[e][t]():(modals[e].show||modals[e])();o&&(settings.controls[e]?.type!="prompt"&&(this.stack.unshift(t?`${e}_${t}`:e),log.debug(`Modal stack: ${JSON.stringify(modals.stack)}`)),this.init(o),this.observeRemoval(o,e,t),modals.handlers.dismiss.key.added||(document.addEventListener("keydown",modals.handlers.dismiss.key),modals.handlers.dismiss.key.added=!0))},replyLang(){let e=prompt(`${app.msgs.prompt_updateReplyLang}:`,app.config.replyLang);e!=null&&(/\d/.test(e)||(e=e.length<4||e.includes("-")?e.toUpperCase():string.toTitleCase(e),settings.save("replyLang",e||env.browser.language),modals.alert(`${app.msgs.alert_langUpdated}!`,`${app.name} ${app.msgs.alert_willReplyIn} ${e||app.msgs.alert_yourSysLang}.`,"","",330),modals.settings.get()&&(document.querySelector("#replyLang-settings-entry span").textContent=e)))},safeWinOpen(e){open(e,"_blank","noopener")},scheme(){const e=modals.alert(`${app.name} ${app.msgs.menuLabel_colorScheme.toLowerCase()}:`,"",[function(){},function(){},function(){}]);e.querySelector("h2").style.justifySelf="center",e.querySelector(".modal-buttons").style.cssText=`
                justify-content: center ; margin: 20px 0 9px !important`;const t={light:"\u2600\uFE0F",dark:"\u{1F318}",auto:"\u{1F317}"};e.querySelectorAll("button").forEach(a=>{const s=a.textContent.toLowerCase();a.classList.toggle("primary-modal-btn",app.config.scheme==a.textContent.toLowerCase()||a.textContent=="Auto"&&!app.config.scheme),Object.prototype.hasOwnProperty.call(t,s)?a.textContent=`${t[s]} ${app.msgs["scheme_"+s]||app.msgs["menuLabel_"+s]||s.toUpperCase()}`:a.style.display="none",a.replaceWith(a=a.cloneNode(!0)),a.onclick=()=>{const n=s=="auto"?ui.getScheme():s;settings.save("scheme",s=="auto"?!1:n),e.querySelectorAll("button").forEach(c=>c.classList.remove("primary-modal-btn")),a.classList.add("primary-modal-btn"),a.style.cssText="pointer-events: none",setTimeout(()=>{a.style.pointerEvents="auto"},100),update.scheme(n),o(s)}});function o(a){feedback.notify(`${app.msgs.menuLabel_colorScheme}: ${(a=="light"?app.msgs.scheme_light||"Light":a=="dark"?app.msgs.scheme_dark||"Dark":app.msgs.menuLabel_auto).toUpperCase()}`);const s=document.querySelectorAll(".chatgpt-notif");s[s.length-1].append(icons.create({key:a=="light"?"sun":a=="dark"?"moon":"arrowsCyclic",style:"width: 23px ; height: 23px ; position: relative ; top: 1px ; margin-left: 6px"}))}return e},settings:{createAppend(){const e=dom.create.elem("div"),t=dom.create.elem("div",{id:`${app.slug}-settings`});e.append(t);const o=Object.keys(settings.controls).filter(r=>!(env.browser.isMobile&&settings.controls[r].mobile==!1)),a=icons.googlegpt.create();a.style.cssText+=`width: ${env.browser.isCompact?64:65}px ;
                                               margin: 13px 0 ${env.browser.isCompact?"-35":"-27"}px ;
                                               position: relative ; top: -42px ; ${env.browser.isCompact?"left: 6px":""}`;const s=dom.create.elem("div",{id:`${app.slug}-settings-title`}),n=icons.create({key:"sliders"}),c=dom.create.elem("h4",{textContent:app.msgs.menuLabel_settings});n.style.cssText+=`
                    width: 21px ; height: 21px ; position: relative ; top: 2.5px ; right: 12px`,c.prepend(n),s.append(c);const p=[],d=30,i=dom.create.elem("div"),l=env.browser.isMobile&&(env.browser.isCompact||o.length<8)?1:2,g=Math.floor(o.length/2);for(let r=0;r<l;r++)p.push(dom.create.elem("ul"));i.style.width="95%",l>1&&(i.style.cssText+=`display: flex ; padding: 11px 0 13px ; gap: ${d/2}px`,p[0].style.cssText=`padding-right: ${d/2}px`),o.forEach((r,h)=>{const f=settings.controls[r],m=dom.create.elem("li",{id:`${r}-settings-entry`,title:f.helptip||""}),b=dom.create.elem("label",{textContent:f.label});m.append(b),p[env.browser.isCompact?0:+(h>=g)].append(m);const x=icons.create({key:f.icon});if(x.style.cssText="position: relative ;"+(/proxy/i.test(r)?"top: 3px ; left: -0.5px ; margin-right: 9px":/preferred/i.test(r)?"top: 3.5px ; margin-right: 7.5px":/streaming/i.test(r)?"top: 3px ; left: 0.5px ; margin-right: 9px":/auto(?:get|focus)/i.test(r)?"top: 4.5px ; margin-right: 7px":/summarize/i.test(r)?"top: 3.5px ; left: -5px ; margin-right: 3px ; height: 17.5px":/autoscroll/i.test(r)?"top: 3.5px ; left: -1.5px ; margin-right: 6px":/^rq/.test(r)?"top: 2.5px ; left: 0.5px ; margin-right: 9px ; transform: scaleY(-1)":/prefix/i.test(r)?"top: 2.5px ; left: 0.5px ; margin-right: 9px":/suffix/i.test(r)?"top: 4px ; left: -1.5px ; margin-right: 7px":/sidebar/i.test(r)?"top: 4px ; left: -1.5px ; margin-right: 7.5px":/anchor/i.test(r)?"top: 3px ; left: -2.5px ; margin-right: 5.5px":/animation/i.test(r)?"top: 3px ; left: -1.5px ; margin-right: 6.5px":/replylang/i.test(r)?"top: 3px ; left: -1.5px ; margin-right: 9px":/scheme/i.test(r)?"top: 2.5px ; left: -1.5px ; margin-right: 8px":/debug/i.test(r)?"top: 3.5px ; left: -1.5px ; margin-right: 8px":/about/i.test(r)?"top: 3px ; left: -3px ; margin-right: 5.5px":""),m.prepend(x),r.includes("Animation")&&(x[`${r.startsWith("fg")?"last":"first"}Child`].style.fill="none"),f.type=="toggle"){const y=dom.create.elem("input",{type:"checkbox",disabled:!0,style:"display: none"});y.checked=settings.typeIsEnabled(r)&&!(r=="streamingDisabled"&&!app.config.proxyAPIenabled);const v=dom.create.elem("span",{class:"track"}),k=dom.create.elem("span",{class:"knob"});v.append(k),m.append(y,v),setTimeout(()=>modals.settings.toggle.updateStyles(y),155),m.onclick=()=>{r=="streamingDisabled"&&(!env.scriptManager.supportsStreaming||!app.config.proxyAPIenabled)||modals.settings.toggle.switch(y);const w=/get|summarize/i.exec(r),A=/(?:suf|pre)fix/i.exec(r);r.includes("proxy")?toggle.proxyMode():r.includes("streaming")?toggle.streaming():r.includes("rq")?toggle.relatedQueries():w?toggle.autoGen(w[0].toLowerCase()):A?toggle.manualGen(A[0].toLowerCase()):r.includes("Sidebar")?toggle.sidebar(r.replace("Sidebar","")):r.includes("anchor")?toggle.anchorMode():r.includes("bgAnimation")?toggle.animations("bg"):r.includes("fgAnimation")?toggle.animations("fg"):(settings.save(r,!app.config[r]),feedback.notify(`${settings.controls[r].label} ${menus.toolbar.state.words[+(r.includes("Disabled")!=app.config[r])]}`))}}else{m.classList.add("active");const y=dom.create.elem("span",{style:`float: right ; font-size: 11px ; margin-top: 3px ;${r!="about"?"text-transform: uppercase !important":""}`});({about:()=>{const v=dom.create.elem("div"),k="&emsp;&emsp;&emsp;&emsp;&emsp;";modals.settings.aboutContent={short:`v${GM_info.script.version}`,long:`${app.msgs.about_version}: <span class="about-em">v${GM_info.script.version+k}</span>${app.msgs.about_poweredBy} <span class="about-em">chatgpt.js</span>${k}`};for(let w=0;w<7;w++)modals.settings.aboutContent.long+=modals.settings.aboutContent.long;v.innerHTML=modals.settings.aboutContent[app.config.fgAnimationsDisabled?"short":"long"],v.style.float=app.config.fgAnimationsDisabled?"right":"",y.append(v),m.onclick=()=>modals.open("about")},preferredAPI:()=>{y.textContent=app.config.preferredAPI||app.msgs.menuLabel_random,m.onclick=()=>modals.open("api"),m.classList.toggle("active",app.config.proxyAPIenabled),m.style.pointerEvents=app.config.proxyAPIenabled?"":"none"},replyLang:()=>{y.textContent=app.config.replyLang,m.onclick=()=>modals.open("replyLang")},scheme:()=>{modals.settings.updateSchemeStatus(y),m.onclick=()=>modals.open("scheme")}})[r]?.(),m.append(y)}}),i.append(...p);const u=dom.create.elem("div",{title:app.msgs.tooltip_close,class:`${app.slug}-modal-close-btn no-mobile-tap-outline`});return u.append(icons.create({key:"x",size:11})),t.append(a,s,u,i),document.body.append(e),e},get(){return document.getElementById(`${app.slug}-settings`)},show(){modals.settings.stylize();const e=modals.settings.get()?.parentNode||modals.settings.createAppend();if(e.style.display="",env.browser.isCompact){const t=e.querySelector(`#${app.slug}-settings`);modals.settings.scaleRatio||=.93*innerWidth/t.scrollWidth,t.style.transform=`scale(${modals.settings.scaleRatio})`}return e.firstChild},stylize(){const{scheme:e}=env.ui.app;this.styles?.isConnected||document.head.append(this.styles||=dom.create.style()),this.styles.textContent=`
                    #${app.slug}-settings {
                        min-width: ${env.browser.isCompact?288:698}px ; max-width: 75vw ; word-wrap: break-word ;
                        margin: 12px 23px ; border-radius: 15px ;
                        ${e=="dark"?"stroke: white ; fill: white":"stroke: black ; fill: black"};
                      --shadow: 0 30px 60px rgba(0,0,0,0.12) ; box-shadow: var(--shadow) ;
                           -webkit-box-shadow: var(--shadow) ; -moz-box-shadow: var(--shadow)
                    }
                    #${app.slug}-settings-title {
                        font-weight: bold ; line-height: 19px ; text-align: center ;
                        margin: 0 -6px ${env.browser.isCompact?2:-15}px 0
                    }
                    #${app.slug}-settings-title h4 {
                        font-size: ${env.browser.isCompact?22:29}px ; font-weight: bold ;
                        margin: 0 0 ${env.browser.isCompact?9:27}px
                    }
                    #${app.slug}-settings ul {
                        align-content: center ; /* for symmetrized gaps when odd num of entries */
                        list-style: none ; padding: 0 ; margin-bottom: 2px ; /* hide bullets, close bottom gap */
                        width: ${env.browser.isCompact?100:50}% /* set width based on column cnt */
                    }
                    ${env.browser.isCompact?"":`#${app.slug}-settings ul:first-of-type { /* color desktop middle sep */
                        border-right: 1px dotted ${e=="dark"?"white":"black"}}`}
                    #${app.slug}-settings li {
                        color: ${e=="dark"?"rgb(255,255,255,0.65)":"rgba(0,0,0,0.45)"};
                        fill: ${e=="dark"?"rgb(255,255,255,0.65)":"rgba(0,0,0,0.45)"};
                        stroke: ${e=="dark"?"rgb(255,255,255,0.65)":"rgba(0,0,0,0.45)"};
                        height: 24px ; padding: 6px 10px ; font-size: 13.5px ;
                        border-bottom: 1px dotted ${e=="dark"?"white":"black"}; /* add separators */
                        border-radius: 3px ; /* slightly round highlight strip */
                        ${app.config.fgAnimationsDisabled||env.browser.isMobile?"":`transition: var(--settings-li-transition) ;
                                -webkit-transition: var(--settings-li-transition) ;
                                -moz-transition: var(--settings-li-transition) ;
                                -o-transition: var(--settings-li-transition) ;
                                -ms-transition: var(--settings-li-transition)`}
                    }
                    #${app.slug}-settings li.active {
                        color: ${e=="dark"?"rgb(255,255,255)":"rgba(0,0,0)"};
                        fill: ${e=="dark"?"rgb(255,255,255)":"rgba(0,0,0)"};
                        stroke: ${e=="dark"?"rgb(255,255,255)":"rgba(0,0,0)"}
                    }
                    #${app.slug}-settings li label { padding-right: 20px } /* right-pad labels so toggles don't hug */
                    #${app.slug}-settings li:last-of-type { border-bottom: none } /* remove last bottom-border */
                    #${app.slug}-settings :where(li, li label) { cursor: pointer } /* add finger on hover */
                    #${app.slug}-settings li:hover {
                        background: rgba(100,149,237,0.88) ; color: white ; fill: white ; stroke: white ;
                        ${env.browser.isMobile?"":"transform: scale(1.15)"}
                    }
                    #${app.slug}-settings li > input { float: right } /* pos toggles */
                    #${app.slug}-settings li > .track {
                        position: relative ; left: -1px ; bottom: -5.5px ; float: right ;
                        background-color: #ccc ; width: 26px ; height: 13px ; border-radius: 28px ;
                        ${app.config.fgAnimationsDisabled?"":`transition: 0.4s ; -webkit-transition: 0.4s ; -moz-transition: 0.4s ;
                                -o-transition: 0.4s ; -ms-transition: 0.4s`}
                    }
                    #${app.slug}-settings li .knob {
                        position: absolute ; left: 1px ; bottom: 1px ; content: "" ;
                        background-color: white ; width: 11px ; height: 11px ; border-radius: 28px ;
                        ${app.config.fgAnimationsDisabled?"":`transition: 0.2s ; -webkit-transition: 0.2s ; -moz-transition: 0.2s ;
                                -o-transition: 0.2s ; -ms-transition: 0.2s`}
                    }
                    #scheme-settings-entry > span { margin: 3px -2px 0 } /* align Scheme status */
                    #scheme-settings-entry > span > svg { /* v-align/left-pad Scheme status icon */
                        position: relative ; top: 2px ; margin-left: 4px }
                    ${app.config.fgAnimationsDisabled?"":`#scheme-settings-entry svg[class*=arrowsCyclic],
                                .chatgpt-notif svg[class*=arrowsCyclic] { animation: rotate 5s linear infinite }`}
                    #about-settings-entry span { color: ${e=="dark"?"#28ee28":"green"}}
                    #about-settings-entry > span { /* outer About status span */
                        width: ${env.browser.isCompact?"15vw":"95px"}; height: 20px ; overflow: hidden ;
                        ${env.browser.isCompact?"position: relative ; bottom: 3px ;":""} /* v-align */
                        ${app.config.fgAnimationsDisabled?"":`mask-image: linear-gradient(
                                    to right, transparent, black 20%, black 89%, transparent) ;
                        -webkit-mask-image: linear-gradient(
                                    to right, transparent, black 20%, black 89%, transparent) ;`}
                    }
                    #about-settings-entry > span > div {
                        text-wrap: nowrap ;
                        ${app.config.fgAnimationsDisabled?"":"animation: ticker linear 75s infinite"}
                    }
                    @keyframes ticker { 0% { transform: translateX(100%) } 100% { transform: translateX(-2000%) }}
                    .about-em { color: ${e=="dark"?"white":"green"} !important }`},toggle:{switch(e){e.checked=!e.checked,modals.settings.toggle.updateStyles(e)},updateStyles(e){const t=e.parentNode,o=t.querySelector("span"),a=o.querySelector("span");requestAnimationFrame(()=>{o.style.backgroundColor=e.checked?"#ad68ff":"#ccc",o.style.boxShadow=e.checked?"2px 1px 9px #d8a9ff":"none",a.style.transform=e.checked?"translateX(14px) translateY(0)":"translateX(0)",t.classList.toggle("active",e.checked)})}},updateSchemeStatus(e=null){e||=document.querySelector("#scheme-settings-entry span"),e&&(e.textContent="",e.append(document.createTextNode(app.msgs[/dark|light/.test(app.config.scheme)?`scheme_${app.config.scheme}`:"menuLabel_auto"]),icons.create({size:12,key:app.config.scheme=="dark"?"moon":app.config.scheme=="light"?"sun":"arrowsCyclic"})))}},shareChat(e){const t=modals.alert(`${string.toTitleCase(app.msgs.btnLabel_convo)} ${app.msgs.tooltip_page} ${app.msgs.alert_generated.toLowerCase()}!`,`<a target="_blank" rel="noopener" href="${e}">${e}</a>`,[function(){navigator.clipboard.writeText(e).then(()=>feedback.notify(app.msgs.notif_copiedToClipboard))},function(){modals.safeWinOpen(e)},function(){env.xhr({method:"GET",url:e,onload:({responseText:c})=>{const p=c.match(/<title>([^<]+)<\/title>/i)[1].replace(/\s*[—|/]+\s*/g," ").replace(/\.{2,}/g,"").toLowerCase().trim().replace(/\s+/g,"-")+".html",d=URL.createObjectURL(new Blob([c],{type:"text/html"})),i=dom.create.anchor(d,"",{download:p,style:"display: none"});document.body.append(i),i.click(),i.remove(),URL.revokeObjectURL(d)},onerror:c=>log.error("Failed to download chat:",c)})}]),o=t.querySelector("h2"),a=icons.create({key:"speechBalloons"});a.style.cssText=`height: 23px ; width: 23px ; position: relative ; top: 5px ; right: 8px ;
                                       fill: ${env.ui.app.scheme=="dark"?"white":"black"}`,o.prepend(a);const s=t.querySelectorAll("button");return s[0].style.display="none",env.browser.language.startsWith("en")||s.forEach(n=>{/copy/i.test(n.textContent)?n.textContent=`${app.msgs.tooltip_copy} URL`:/visit/i.test(n.textContent)?n.textContent=app.msgs.btnLabel_visitPage:/download/i.test(n.textContent)&&(n.textContent=`${app.msgs.btnLabel_download} ${string.toTitleCase(app.msgs.btnLabel_convo)}`)}),t.style.wordBreak="break-all",t.querySelector("h2").style.justifySelf="center",t.querySelector("p").style.cssText="text-align: center ; margin: 10px 0 -22px",t.querySelector(".modal-buttons").style.cssText="justify-content: center",t},stylize(){const{scheme:e}=env.ui.app;this.styles?.isConnected||document.head.append(this.styles||=dom.create.style()),this.styles.textContent=`:root {
                  --modal-btn-zoom: scale(1.055) ; --modal-btn-transition: transform 0.15s ease ;
                  --settings-li-transition: transform 0.1s ease ; /* for Settings entry hover-zoom */
                  --fg-transition: opacity 0.65s cubic-bezier(0.165,0.84,0.44,1), /* fade-in */
                                   transform 0.55s cubic-bezier(0.165,0.84,0.44,1) !important ; /* move-in */
                  --bg-transition: background-color 0.25s ease !important } /* dim */@keyframes modal-zoom-fade-out {
                    0% { opacity: 1 } 50% { opacity: 0.25 ; transform: scale(1.05) }
                    100% { opacity: 0 ; transform: scale(1.35) }
                }
                .chatgpt-modal ~ .chatgpt-modal { display: none !important } /* for Google */
                .chatgpt-modal > div {
                    opacity: 0.98 ; background-color: white ; color: #202124 ;
                    padding: ${env.browser.isCompact?"31px":"25px 31px"}!important
                }
                .chatgpt-modal p { margin: 14px 0 -29px 4px ; font-size: 1.28em ; line-height: 1.57 }
                .modal-buttons {
                    margin: 42px 4px ${env.browser.isMobile?"2px 4px":"-3px -4px"} !important ; width: 100% }
                .chatgpt-modal button { /* this.alert() buttons */
                    min-width: 113px ; padding: ${env.browser.isMobile?"5px":"4px 15px"} !important ;
                    cursor: pointer ; border-radius: 0 !important ; height: 39px ;
                    border: 1px solid ${e=="dark"?"white":"black"}!important }
                .primary-modal-btn { background: black !important ; color: white !important }
                .chatgpt-modal button:hover {
                  --btn-shadow: ${e=="light"?"2px 1px 43px #00cfff70":"2px 1px 54px #00cfff"};
                    color: inherit !important ; /* remove color hack */
                    background-color: rgb(${e=="light"?"192 223 227 / 5%":"43 156 171 / 43%"}) !important
                }
                ${e=="dark"?`.chatgpt-modal > div, .chatgpt-modal button:not(.primary-modal-btn) {
                        color: white !important }
                    .primary-modal-btn { background: #00cfff !important ; color: black !important }
                    .chatgpt-modal a { color: #00cfff !important }`:""}
                .${modals.class} { display: grid ; place-items: center } /* for centered icon/logo */
                [class*=modal-close-btn] {
                    position: absolute !important ; float: right ; top: 14px !important ; right: 16px !important ;
                    cursor: pointer ; width: 33px ; height: 33px ; border-radius: 20px
                }
                [class*=modal-close-btn] path {${e=="dark"?"stroke: white ; fill: white":"stroke: #9f9f9f ; fill: #9f9f9f"}}
                ${e=="dark"?"[class*=modal-close-btn]:hover path { stroke: black ; fill: black }":""}
                [class*=modal-close-btn]:hover { background-color: #f2f2f2 } /* hover underlay */
                [class*=modal-close-btn] svg { margin: 11.5px } /* center SVG for hover underlay */
                [class*=-modal] h2 {
                    font-size: 1.65rem ; line-height: 32px ; padding: 0 ; margin: 9px 0 -3px !important ;
                    ${env.browser.isMobile?"text-align: center":"justify-self: start"}} /* left-align on desktop */
                [class*=-modal] p { justify-self: start ; font-size: 20px }
                [class*=-modal] button {
                    color: ${e=="dark"?"white":"black"}; font-size: 12px !important ; background: none }
                [class*=-modal-bg] {
                    display: flex !important ; opacity: 1 ; background: transparent /* for Google */
                    pointer-events: auto ; /* override any disabling from site modals */
                    position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ; /* expand to full view-port */
                    display: flex ; justify-content: center ; align-items: center ; z-index: 9999 ; /* align */
                    transition: var(--bg-transition) ; /* dim */
                       -webkit-transition: var(--bg-transition) ; -moz-transition: var(--bg-transition) ;
                       -o-transition: var(--bg-transition) ; -ms-transition: var(--bg-transition) }
                [class*=-modal-bg].animated > div {
                    z-index: 13456 ; opacity: 0.98 ; transform: translateX(0) translateY(0) }
                [class$=-modal] { /* native modals + chatgpt.alert()s */
                    position: absolute ; /* to be click-draggable */
                    opacity: 0 ; /* to fade-in */
                    background-image: linear-gradient(180deg, ${e=="dark"?"#99a8a6 -200px, black 200px":"#b6ebff -296px, white 171px"}) ;
                    border: 1px solid ${e=="dark"?"white":"#b5b5b5"} !important ;
                    color: ${e=="dark"?"white":"black"};
                    transform: translateX(-3px) translateY(7px) ; /* offset to move-in from */
                    transition: var(--fg-transition) ; /* fade-in + move-in */
                       -webkit-transition: var(--fg-transition) ; -moz-transition: var(--fg-transition) ;
                       -o-transition: var(--fg-transition) ; -ms-transition:  var(--fg-transition) }
                    ${env.browser.isMobile?"":"[class$=-modal] button:hover { transform: var(--modal-btn-zoom) }"}
                    ${app.config.fgAnimationsDisabled?"":`[class$=-modal] button {
                        ${env.browser.isMobile?"":"will-change: transform ;"}
                        transition: var(--modal-btn-transition) ;
                           -webkit-transition: var(--modal-btn-transition) ;
                           -moz-transition: var(--modal-btn-transition) ;
                           -o-transition: var(--modal-btn-transition) ;
                           -ms-transition: var(--modal-btn-transition) }`}`},update:{width:377,available(){const e=modals.alert(`\u{1F680} ${app.msgs.alert_updateAvail}!`,`${app.msgs.alert_newerVer} ${app.name} (v${app.latestVer}) ${app.msgs.alert_isAvail}!  <a target="_blank" rel="noopener" style="font-size: 0.97rem" href="${app.urls.github}/commits/main/greasemonkey/${app.slug}.user.js">${app.msgs.link_viewChanges}</a>`,function(){modals.safeWinOpen(`${app.urls.download.gm}?t=${Date.now()}`)},"",modals.update.width);if(!env.browser.language.startsWith("en")){const t=e.querySelectorAll("button");t[1].textContent=app.msgs.btnLabel_update,t[0].textContent=app.msgs.btnLabel_dismiss}return e},unavailable(){return modals.alert(`${app.msgs.alert_upToDate}!`,`${app.name} (v${app.version}) ${app.msgs.alert_isUpToDate}!`,"","",modals.update.width)}}},menus.toolbar.register(),env.ui={app:{scheme:app.config.scheme||ui.getScheme()},site:{hasSidebar:!!document.querySelector("[class*=kp-]"),scheme:ui.getScheme()}},app.config.aiSafetyWarned||(modals.alert(`\u26A0\uFE0F ${app.msgs.alert_importantNotice}:`,`<b>${app.name}</b> ${app.msgs.alert_poweredByAI}:

\u2022 <b>${app.msgs.alert_aiCanMakeMistakes}</b> - ${app.msgs.alert_alwaysVerifyInfo}
\u2022 <b>${app.msgs.alert_doubleCheckDecisions}</b> - ${app.msgs.alert_dontRelySolelyOnAI}
\u2022 <b>${app.msgs.alert_notAsub}</b> - ${app.msgs.alert_forProMedOrLegalMatters}

${app.msgs.alert_useResponsibly}!`,null,null,388),settings.save("aiSafetyWarned",!0)),app.div=dom.create.elem("div",{id:app.slug,class:"fade-in"}),themes.apply(app.config.theme),ui.addListeners.appDiv(),["anchored","expanded","sticky","wider"].forEach(e=>(app.config[e]||app.config[`${e}Sidebar`])&&app.div.classList.add(e)),update.appStyle(),["rpg","rpw"].forEach(e=>document.head.append(dom.create.style(GM_getResourceText(`${e}CSS`)))),app.centerCol=document.querySelector("#center_col")||document.querySelector("#main"),(env.browser.isMobile?app.centerCol:document.getElementById("rhs")||(()=>{const e=dom.create.elem("div");return app.centerCol.insertAdjacentElement("afterend",e),e})()).prepend(app.div),setTimeout(()=>app.div.classList.add("active"),100),/udm=(?:2|28|39|50)(?:&|$)/.test(location.search)?(toggle.anchorMode("on",{persist:!1}),env.browser.isMobile||(dom.get.loadedElem(`#${app.slug}-pin-btn`).then(e=>e.style.display="none"),document.head.append(dom.create.style("li#anchored-settings-entry { display: none }")))):document.addEventListener(app.inputEvents.down,e=>{let t=e.target;for(;t&&!t.href;)t=t.parentElement;if(!t)return;t.removeAttribute("ping"),t.getAttribute("onmousedown")?.includes("rwt(")&&(t.removeAttribute("onmousedown"),env.browser.isChrome&&e.stopImmediatePropagation());let o=a(t);o&&(t.href=o,o=a(t),o&&(t.href=o));function a(s){if(!s.protocol.startsWith("http"))return;let n;if((s.hostname.startsWith("www.google.")||s.hostname==location.hostname)&&["/url","/local_url","/searchurl/rr.html","/linkredirect"].includes(s.pathname)){if(n=/[?&](?:q|url|dest)=((?:https?|ftp)[%:][^&]+)/.exec(s.search),n)return decodeURIComponent(n[1]);if(n=/[?&](?:q|url)=((?:%2[Ff]|\/)[^&]+)/.exec(s.search),n)return s.origin+decodeURIComponent(n[1]);if(n=/[#&]url=(https?[:%][^&]+)/.exec(s.hash),n)return decodeURIComponent(n[1])}if(s.hostname=="googleweblight.com"&&s.pathname=="/fp"&&(n=/[?&]u=((?:https?|ftp)[%:][^&]+)/.exec(s.search),n))return decodeURIComponent(n[1])}},!0),app.footerContent=dom.create.anchor(app.urls.discuss,app.msgs.link_shareFeedback),app.msgChain=[];const C=new URL(location.href).searchParams.get("q");app.config.autoGet||app.config.autoSummarize||(app.config.prefixEnabled||app.config.suffixEnabled)&&[app.config.prefixEnabled&&location.href.includes("q=%2F"),app.config.suffixEnabled&&/q=.*?(?:%3F|？|%EF%BC%9F)(?:&|$)/.test(location.href)].filter(Boolean).length==app.config.prefixEnabled+app.config.suffixEnabled?(app.msgChain.push({time:Date.now(),role:"user",content:app.config.autoSummarize?prompts.create("summarizeResults"):C}),get.reply({msgs:app.msgChain,src:"query"})):(show.reply({standby:!0}),app.config.rqDisabled||get.related(C).then(e=>show.related(e)).catch(e=>{log.error(e.message),api.tryNew({caller:get.related})}));const z=new MutationObserver(()=>{const e=document.getElementById("rhs");e&&(e.prepend(app.div),z.disconnect())});z.observe(document.body,{subtree:!0,childList:!0}),setTimeout(()=>z.disconnect(),5e3)})();
