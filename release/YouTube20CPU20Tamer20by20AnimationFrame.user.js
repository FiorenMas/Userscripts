// ==UserScript==
// @name                YouTube CPU Tamer by AnimationFrame
// @name:ja             YouTube CPU Tamer by AnimationFrame
// @name:zh-TW          YouTube CPU Tamer by AnimationFrame
// @namespace           http://tampermonkey.net/
// @version             2024.05.13.0
// @license             MIT License
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @match               https://www.youtube.com/live_chat*
// @match               https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-cpu-tamper-by-animationframe.webp
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page

// @description         Reduce Browser's Energy Impact for playing YouTube Video
// @description:en      Reduce Browser's Energy Impact for playing YouTube Video
// @description:ja      YouTubeビデオのエネルギーインパクトを減らす
// @description:zh-TW   減少YouTube影片所致的能源消耗
// @description:zh-CN   减少YouTube影片所致的能源消耗

// @description:ko      YouTube 비디오 재생 시 브라우저의 에너지 영향을 줄입니다.
// @description:ru      Снижает энергетическое воздействие браузера при воспроизведении видео на YouTube.
// @description:af      Verminder die energie-impak van die blaaier vir YouTube-video speel
// @description:az      YouTube videolarını oynamaq üçün Brauzer enerji təsirini azaldır
// @description:id      Kurangi Dampak Energi Browser untuk memutar Video YouTube
// @description:ms      Kurangkan Impak Tenaga Pelayar untuk memainkan Video YouTube
// @description:bs      Smanji energetski uticaj preglednika za reprodukciju YouTube videa
// @description:ca      Redueix l'impacte energètic del navegador per reproduir vídeos de YouTube
// @description:cs      Snížit energetický dopad prohlížeče při přehrávání videí na YouTube
// @description:da      Reducer browserens energipåvirkning for at afspille YouTube-video
// @description:de      Reduzieren Sie die Energieauswirkungen des Browsers für die Wiedergabe von YouTube-Videos
// @description:et      Vähendage YouTube'i video esitamiseks brauseri energiamõju
// @description:es      Reduzca el impacto energético del navegador al reproducir videos de YouTube
// @description:eu      Gutxitu nabigatzeko energiaren eragina YouTube bideoak erreproduzitzeko
// @description:fr      Réduire l'impact énergétique du navigateur lors de la lecture de vidéos YouTube
// @description:gl      Reduzca o impacto enerxético do navegador para reproducir vídeos de YouTube
// @description:hr      Smanjite energetski utjecaj preglednika za reprodukciju YouTube videa
// @description:zu      Qaqalitsha Umbono We-Energy we-Browser ukuze udlale i-Video ye-YouTube
// @description:is      Minkaðu orkuáhrif vafra til að spila YouTube myndband
// @description:it      Riduci l'impatto energetico del browser per la riproduzione di video di YouTube
// @description:sw      Punguza Athari ya Nishati ya Kivinjari kwa kucheza Video za YouTube
// @description:lv      Samaziniet pārlūkprogrammas enerģijas ietekmi YouTube video atskaņošanai
// @description:lt      Sumažinkite naršyklės energijos poveikį žaidžiant „YouTube“ vaizdo įrašus
// @description:hu      Csökkentse a böngésző energiaterhelését a YouTube videó lejátszásához
// @description:nl      Verminder de energie-impact van de browser bij het afspelen van YouTube-video's
// @description:uz      YouTube videoni tinglash uchun brauzer energiyasi ta'sirini kamaytirish
// @description:pl      Zmniejsz zużycie energii przeglądarki podczas odtwarzania filmów na YouTube
// @description:pt      Reduza o Impacto Energético do Navegador ao reproduzir Vídeos do YouTube
// @description:pt-BR   Reduza o Impacto Energético do Navegador ao reproduzir Vídeos do YouTube
// @description:ro      Reduceți impactul energetic al browser-ului pentru redarea videoclipurilor YouTube
// @description:sq      Zvogëlo ndikimin e energjisë të shfletuesit për luajtjen e video YouTube
// @description:sk      Znížte energetický dopad prehliadača pri prehrávaní videí na YouTube
// @description:sl      Zmanjšajte energijski vpliv brskalnika pri predvajanju videoposnetkov YouTube
// @description:sr      Smanjite energetski uticaj pregledača za reprodukciju YouTube videa
// @description:fi      Vähennä selaimen energiankulutusta YouTube-videoiden toistossa
// @description:sv      Minska webbläsarens energipåverkan för att spela YouTube-video
// @description:vi      Giảm tác động năng lượng của trình duyệt khi phát Video YouTube
// @description:tr      YouTube Videolarını Oynatırken Tarayıcının Enerji Etkisini Azaltın
// @description:be      Змяншыце энергетычны ўплыў браўзара на прайграванне YouTube-відэа
// @description:bg      Намалете енергийния влияние на браузъра при възпроизвеждане на видео в YouTube
// @description:ky      YouTube видеонун ойнотуусунан башкаруу үчүн браузердеги энергиялык турмуштарды көмүштөштүрүү
// @description:kk      YouTube-дың браузерде көрсету мүмкіндігін көмеге қысқартыңыз
// @description:mk      Намалете ја енергетската присутност на пребарувачот за репродукција на YouTube видео
// @description:mn      YouTube видеогийг тоглуулж буй хөтөчийн энерги хүчинг буурах
// @description:uk      Зменште енергетичний вплив браузера на відтворення відео на YouTube
// @description:el      Μειώστε την ενεργειακή επίδραση του προγράμματος περιήγησης για την αναπαραγωγή βίντεο στο YouTube
// @description:hy      Փոքրանալիքայինը դանդարեցրեք բրաուզերի էներգիայի ազդեցությունը YouTube վիդեոների ներածման դեպքում
// @description:ur      یوٹیوب ویڈیو کھیلنے کے لئے براؤزر کی توانائی پر اثر کم کریں
// @description:ar      تقليل تأثير استهلاك الطاقة لمتصفح تشغيل مقاطع فيديو يوتيوب
// @description:fa      کاهش تأثیر انرژی مرورگر برای پخش ویدئوی یوتیوب
// @description:ne      युट्युब भिडियो खेल्नका लागि ब्राउजरको ऊर्जा प्रभाव कम गर्नुहोस्
// @description:mr      YouTube व्हिडिओ चालवण्यासाठी ब्राउझरचे ऊर्जाचे प्रभाव कमी करा
// @description:hi      यूट्यूब वीडियो चलाने के लिए ब्राउज़र की ऊर्जा प्रभाव को कम करें
// @description:as      YouTube ভিডিঅ' প্ৰশ্ন কৰা ব্ৰাউজাৰৰ শক্তিৰ প্ৰভাৱ কমিয়া দিব
// @description:bn      YouTube ভিডিও চালাতে ব্রাউজারের শক্তি প্রভাব কমান
// @description:pa      YouTube ਵਿਡੀਓ ਚਲਾਉਣ ਲਈ ਬਰਾਉਜ਼ਰ ਦੀ ਊਰਜਾ ਪ੍ਰਭਾਵ ਘਟਾਓ
// @description:gu      YouTube વિડિઓ ચલાવવા માટે બ્રાઉઝરનું ઊર્જા પ્રભાવ ઘટાડો
// @description:or      YouTube ଭିଡିଓ ଚାଲାନ୍ତୁ ପାଇଁ ବ୍ରାଉଜରର ଶକ୍ତି ପ୍ରଭାବ କମାନ୍ତୁ
// @description:ta      யூடியூப் வீடியோவை இயக்குவதற்கான உலாவியின் மிக்க விளைவுகளை குறைக்கவும்
// @description:te      YouTube వీడియోను ప్రసారం చేయడానికి బ్రౌజర్ యొక్క శక్తి ప్రభావాన్ని తగ్గించుకోండి
// @description:kn      YouTube ವೀಡಿಯೊಗಳನ್ನು ಪ್ರದರ್ಶಿಸಲು ಬ್ರೌಸರ್ ಯನ್ನು ಉಪಯೋಗಿಸುವಾಗ ಶಕ್ತಿ ಪ್ರಭಾವವನ್ನು ಕಡಿಮೆಗೊಳಿಸಿ
// @description:ml      YouTube വീഡിയോ പ്രവർത്തിപ്പിക്കുവാൻ ബ്രൗസർയുടെ പ്രഭാവം കുറയ്ക്കുക
// @description:si      YouTube වීඩියෝ චාරිකා කිරීම සඳහා බ්‍රවුසරයේ ඊම්ජි බලන්න
// @description:th      ลดผลกระทบทางพลังงานของเบราว์เซอร์ในการเล่นวิดีโอ YouTube
// @description:lo      ບຣາຣິໂຄດລາວເອີ້ນໃນການເພີ່ມເວັບວຽກຂອງ YouTube ສຳ ລັບການຂະໜາດໃນການເພີ່ມເວັບວຽກ
// @description:my      YouTube ဗီဒီယိုများကို ဖွင့်ရန် Browser အတွက် Energy Impact ကိုအနိုင်ရန်
// @description:ka      YouTube ვიდეოების დაკვრებისას ბრაუზერის ენერგიის შეცვლა
// @description:am      YouTube ቪዲዮዎችን ለመቀነስ የባህሪውን አርእስት ግንኙነት ማድረግ
// @description:km      បង្កើតការធ្វើបរិមាណលំអិតរបស់ការកំណត់ការដាក់នៅលើសម្ពាធរបស់ប្រព័ន្ធបញ្ចូលបន្ទាត់ YouTube
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20AnimationFrame.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20AnimationFrame.meta.js
// ==/UserScript==
(()=>{"use strict";const t=this instanceof Window?this:window,e="nzsxclvflluv";if(t[e])throw new Error("Duplicated Userscript Calling");t[e]=!0;const n=(async()=>{})().constructor,o=((t,e)=>{const o=(n,o)=>{t=n,e=o};return class extends n{constructor(n=o){super(n),n===o&&(this.resolve=t,this.reject=e)}}})();if(!(()=>{try{const t=document.createElement("canvas");return!(!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}catch(t){return!1}})())throw new Error("Your browser does not support GPU Acceleration. YouTube CPU Tamer by AnimationFrame is skipped.");const r=(()=>{window.__j6YiAc__=1,document.addEventListener("timeupdate",(()=>{window.__j6YiAc__=Date.now()}),!0);let t=-1;try{t=top.__j6YiAc__}catch(t){}return t>=1?()=>top.__j6YiAc__:()=>window.__j6YiAc__})();(async t=>{const e=requestAnimationFrame;try{let o=16;const r="vanillajs-iframe-v1";let i=document.getElementById(r),a=null;if(!i){i=document.createElement("iframe"),i.id=r;const l="function"==typeof webkitCancelAnimationFrame&&"undefined"==typeof kagi?i.src=URL.createObjectURL(new Blob([],{type:"text/html"})):null;i.sandbox="allow-same-origin";let c=document.createElement("noscript");for(c.appendChild(i);!document.documentElement&&o-- >0;)await new n(e);document.documentElement.appendChild(c),l&&n.resolve().then((()=>URL.revokeObjectURL(l))),a=e=>{const n=o=>{o&&t.removeEventListener("DOMContentLoaded",n,!1),o=c,c=t=a=0,e?e((()=>o.remove()),200):o.remove()};e&&"loading"===document.readyState?t.addEventListener("DOMContentLoaded",n,!1):n()}}for(;!i.contentWindow&&o-- >0;)await new n(e);const l=i.contentWindow;if(!l)throw"window is not found.";try{const{requestAnimationFrame:e,setInterval:o,setTimeout:r,clearInterval:i,clearTimeout:c}=l,s={requestAnimationFrame:e,setInterval:o,setTimeout:r,clearInterval:i,clearTimeout:c};for(let e in s)s[e]=s[e].bind(t);return a&&n.resolve(s.setTimeout).then(a),s}catch(t){return a&&a(),null}}catch(t){return console.warn(t),null}})(t).then((e=>{if(!e)return null;const{requestAnimationFrame:i,setTimeout:a,setInterval:l,clearTimeout:c,clearInterval:s}=e;let d=null;const m=(()=>{const t=document.createElement("a-f");if(!("onanimationiteration"in t))return t=>i(d=t);t.id="a-f";let e=null;if(t.onanimationiteration=function(){null!==e&&(e(),e=null)},!document.getElementById("afscript")){const t=document.createElement("style");t.id="afscript",t.textContent="\n          @keyFrames aF1 {\n            0% {\n              order: 0;\n            }\n            100% {\n              order: 1;\n            }\n          }\n          #a-f[id] {\n            visibility: collapse !important;\n            position: fixed !important;\n            display: block !important;\n            top: -100px !important;\n            left: -100px !important;\n            margin:0 !important;\n            padding:0 !important;\n            outline:0 !important;\n            border:0 !important;\n            z-index:-1 !important;\n            width: 0px !important;\n            height: 0px !important;\n            contain: strict !important;\n            pointer-events: none !important;\n            animation: 1ms steps(2, jump-none) 0ms infinite alternate forwards running aF1 !important;\n          }\n        ",(document.head||document.documentElement).appendChild(t)}return document.documentElement.insertBefore(t,document.documentElement.firstChild),t=>e=d=t})();(()=>{let e,i;e=i={resolved:!0};let d=0;const u=async t=>{await new n(m),t.resolved=!0;const e=++d;return e>9e9&&(d=9),t.resolve(e),e},p=new Set,w=async(t,n)=>{try{const a=Date.now();if(a-r()<800&&a-n.dt<800){const t=n.cid;p.add(t);const r=await(async()=>{const t=e.resolved?null:e,n=i.resolved?null:i;let r=0;if(t&&n){const e=await t,o=await n;r=e>o&&e-o<8e9?e:o}else{const a=t?null:e=new o,l=n?null:i=new o;n?await n:t&&await t,a&&(r=await u(a)),l&&(r=await u(l))}return r})();if(!p.delete(t)||r===n.lastExecution)return;n.lastExecution=r}n.dt=a,t()}catch(t){throw console.error(t),t}},f=t=>(e,n=0,...o)=>{if("function"==typeof e){const r={dt:Date.now()};return r.cid=t(w,n,o.length>0?e.bind(null,...o):e,r)}return t(e,n,...o)};t.setTimeout=f(a),t.setInterval=f(l);const v=t=>e=>{e&&(p.delete(e)||t(e))};t.clearTimeout=v(c),t.clearInterval=v(s);try{t.setTimeout.toString=a.toString.bind(a),t.setInterval.toString=l.toString.bind(l),t.clearTimeout.toString=c.toString.bind(c),t.clearInterval.toString=s.toString.bind(s)}catch(t){console.warn(t)}})();let u=null;l((()=>{u===d?null!==u&&(u(),d=u=null):u=d}),125)}))})();