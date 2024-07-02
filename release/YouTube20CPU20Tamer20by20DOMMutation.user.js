// ==UserScript==
// @name                YouTube CPU Tamer by DOMMutation
// @name:ja             YouTube CPU Tamer by DOMMutation
// @name:zh-TW          YouTube CPU Tamer by DOMMutation
// @namespace           http://tampermonkey.net/
// @version             2024.05.26.1
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
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20DOMMutation.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20CPU20Tamer20by20DOMMutation.meta.js
// ==/UserScript==
(t=>{"use strict";const e=this instanceof Window?this:window,n="nzsxclvflluv";if(e[n])throw new Error("Duplicated Userscript Calling");e[n]=!0;const r=(async()=>{})().constructor,o=((t,e)=>{const n=(n,r)=>{t=n,e=r};return class extends r{constructor(r=n){super(r),r===n&&(this.resolve=t,this.reject=e)}}})(),{_setAttribute:i,_insertBefore:l}=(()=>{let t=Element.prototype.setAttribute;try{t=ShadyDOM.nativeMethods.setAttribute||t}catch(t){}let e=Node.prototype.insertBefore;try{e=ShadyDOM.nativeMethods.insertBefore||e}catch(t){}return{_setAttribute:t,_insertBefore:e}})();(async t=>{const e=requestAnimationFrame;try{let n=16;const o="vanillajs-iframe-v1";let i=document.getElementById(o),l=null;if(!i){i=document.createElement("iframe"),i.id=o;const a="function"==typeof webkitCancelAnimationFrame&&"undefined"==typeof kagi?i.src=URL.createObjectURL(new Blob([],{type:"text/html"})):null;i.sandbox="allow-same-origin";let s=document.createElement("noscript");for(s.appendChild(i);!document.documentElement&&n-- >0;)await new r(e);document.documentElement.appendChild(s),a&&r.resolve().then((()=>URL.revokeObjectURL(a))),l=e=>{const n=r=>{r&&t.removeEventListener("DOMContentLoaded",n,!1),r=s,s=t=l=0,e?e((()=>r.remove()),200):r.remove()};e&&"loading"===document.readyState?t.addEventListener("DOMContentLoaded",n,!1):n()}}for(;!i.contentWindow&&n-- >0;)await new r(e);const a=i.contentWindow;if(!a)throw"window is not found.";try{const{requestAnimationFrame:e,setInterval:n,setTimeout:o,clearInterval:i,clearTimeout:s}=a,c={requestAnimationFrame:e,setInterval:n,setTimeout:o,clearInterval:i,clearTimeout:s};for(let e in c)c[e]=c[e].bind(t);return l&&r.resolve(c.setTimeout).then(l),c}catch(t){return l&&l(),null}}catch(t){return console.warn(t),null}})(e).then((t=>{if(!t)return null;const{setTimeout:n,setInterval:a,clearTimeout:s,clearInterval:c}=t,u=(()=>{let t=document.getElementById("d-m");t||(t=document.createElementNS("http://www.w3.org/2000/svg","defs"),t.id="d-m",l.call(document.documentElement,t,document.documentElement.firstChild));const e=t;e._setAttribute=i;let n,r=0;for(;e.hasAttribute(n=`dm-${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`););const o=n;let a=null;return new MutationObserver((()=>{null!==a&&(r>8&&(r=0),a(),a=null)})).observe(document,{childList:!0,subtree:!0,attributes:!0}),t=>(a||e._setAttribute(o,++r),a=t)})();(()=>{let t,i;t=i={resolved:!0};let l=0;const d=async t=>{await new r(u),t.resolved=!0;const e=++l;return e>9e9&&(l=9),t.resolve(e),e},m=new Set,w=async(e,n)=>{try{const r=Date.now();if(r-n.dt<800){const e=n.cid;m.add(e);const r=await(async()=>{const e=t.resolved?null:t,n=i.resolved?null:i;let r=0;if(e&&n){const t=await e,o=await n;r=t>o&&t-o<8e9?t:o}else{const l=e?null:t=new o,a=n?null:i=new o;n?await n:e&&await e,l&&(r=await d(l)),a&&(r=await d(a))}return r})();if(!m.delete(e)||r===n.lastExecution)return;n.lastExecution=r}n.dt=r,e()}catch(t){throw console.error(t),t}},v=t=>(e,n=0,...r)=>{if("function"==typeof e){const o={dt:Date.now()};return o.cid=t(w,n,r.length>0?e.bind(null,...r):e,o)}return t(e,n,...r)};e.setTimeout=v(n),e.setInterval=v(a);const f=t=>e=>{e&&(m.delete(e)||t(e))};e.clearTimeout=f(s),e.clearInterval=f(c);try{e.setTimeout.toString=n.toString.bind(n),e.setInterval.toString=a.toString.bind(a),e.clearTimeout.toString=s.toString.bind(s),e.clearInterval.toString=c.toString.bind(c)}catch(t){console.warn(t)}})()}))})();