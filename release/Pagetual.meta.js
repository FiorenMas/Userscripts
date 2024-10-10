// ==UserScript==
// @name         Pagetual
// @name:zh-CN   东方永页机
// @name:zh-TW   東方永頁機
// @name:ja      東方永頁機
// @name:ko      東方永頁機
// @name:pt-BR   Pagetual
// @name:ru      Pagetual
// @name:de      Pagetual
// @name:es      Pagetual
// @name:fr      Pagetual
// @name:it      Pagetual
// @name:id      Pagetual
// @name:th      Pagetual
// @name:nb      Pagetual
// @name:sv      Pagetual
// @name:sr      Pagetual
// @name:sk      Pagetual
// @name:hu      Pagetual
// @name:ro      Pagetual
// @name:fi      Pagetual
// @name:el      Pagetual
// @name:eo      Pagetual
// @name:bg      Pagetual
// @name:cs      Pagetual
// @name:vi      Pagetual
// @name:pl      Pagetual
// @name:uk      Pagetual
// @name:tr      Pagetual
// @name:nl      Pagetual
// @name:da      Pagetual
// @name:fr-CA   Pagetual
// @namespace    hoothin
// @version      1.9.37.108
// @description  Perpetual pages - powerful auto-pager script. Auto fetching next paginated web pages and inserting into current page for infinite scroll. Support thousands of web sites without any rule.
// @description:zh-CN  终极自动翻页 - 加载并拼接下一分页内容至当前页尾，智能适配任意网页
// @description:zh-TW  終極自動翻頁 - 加載並拼接下一分頁內容至當前頁尾，智能適配任意網頁
// @description:pt-BR  Páginas infinitas - um poderoso script de paginação automática. Carrega automaticamente as próximas páginas da web paginadas e as insere na página atual para rolagem infinita. Suporta milhares de sites sem nenhuma regra.
// @description:ja     Webページを自動で読み込み継ぎ足し表示を行うブラウザ拡張です、次のページ付けされた Web ページの自動読み込みと現在のページへの挿入 ルールなしで何千もの Web サイトをサポートします。
// @description:ko     페이지가 매겨진 다음 웹 페이지를 자동으로 로드하고 현재 페이지에 삽입합니다. 규칙 없이 수천 개의 웹 사이트를 지원합니다.
// @description:ru     Автоматическая подгрузка следующих страниц и вставка их содержимого в текущую страницу. Поддерживает тысячи сайтов даже с настройками по умолчанию.
// @description:de     Automatisches Laden der nächsten paginierten Webseiten und Einfügen in die aktuelle Seite. Unterstützen Sie Tausende von Websites ohne Regeln.
// @description:es     Carga automática de las siguientes páginas web paginadas e inserción en la página actual. Admite miles de sitios web sin ninguna regla.
// @description:fr     Chargement automatique des pages Web paginées suivantes et insertion dans la page en cours. Prend en charge des milliers de sites Web sans aucune règle.
// @description:it     Caricamento automatico delle pagine Web impaginate successive e inserimento nella pagina corrente. Supporta migliaia di siti web senza alcuna regola.
// @description:id     Pengambilan otomatis halaman web yang dipaginasi berikutnya dan penyisipan ke halaman saat ini untuk pengguliran tak terbatas. Mendukung ribuan situs web tanpa aturan apa pun.
// @description:th     ดึงหน้าเว็บแบบแบ่งหน้าถัดไปโดยอัตโนมัติและแทรกลงในหน้าปัจจุบันเพื่อเลื่อนแบบไม่มีที่สิ้นสุด รองรับเว็บไซต์หลายพันแห่งโดยไม่มีกฎเกณฑ์ใดๆ
// @description:nb     Henter automatisk neste paginerte nettsider og setter inn på gjeldende side for uendelig rulling. Støtt tusenvis av nettsider uten noen regel.
// @description:sv     Hämtar automatiskt nästa paginerade webbsidor och infogar på aktuell sida för oändlig rullning. Stöd tusentals webbplatser utan några regler.
// @description:sr     Аутоматско преузимање следећих пагинираних веб страница и уметање у тренутну страницу за бесконачно померање. Подржите хиљаде веб локација без икаквог правила.
// @description:sk     Samodejno pridobivanje naslednjih paginiranih spletnih strani in vstavljanje v trenutno stran za neskončno drsenje. Podprite na tisoče spletnih mest brez pravil.
// @description:hu     A következő oldalszámozott weboldalak automatikus lekérése és beszúrása az aktuális oldalra a végtelen görgetés érdekében. Több ezer webhely támogatása szabály nélkül.
// @description:ro     Preluare automată a următoarelor pagini web paginate și inserare în pagina curentă pentru defilare infinită. Suportă mii de site-uri web fără nicio regulă.
// @description:fi     Hakee automaattisesti seuraavat sivutetut verkkosivut ja lisäämällä nykyiselle sivulle loputonta vieritystä. Tukee tuhansia web-sivustoja ilman sääntöjä.
// @description:el     Αυτόματη ανάκτηση επόμενων σελιδοποιημένων ιστοσελίδων και εισαγωγή στην τρέχουσα σελίδα για άπειρη κύλιση. Υποστηρίξτε χιλιάδες ιστοσελίδες χωρίς κανένα κανόνα.
// @description:eo     Aŭtomate alportado de sekvaj paĝigitaj retpaĝoj kaj enmetado en nunan paĝon por senfina movo. Subtenu milojn da retejoj sen ajna regulo.
// @description:bg     Автоматично извличане на следващите уеб страници с пагиниране и вмъкване в текущата страница за безкрайно превъртане. Поддържайте хиляди уеб сайтове без никакви правила.
// @description:cs     Automatické načítání dalších stránkovaných webových stránek a vkládání do aktuální stránky pro nekonečné posouvání. Podporujte tisíce webových stránek bez jakýchkoli pravidel.
// @description:vi     Tự động tìm các trang web được phân trang tiếp theo và chèn vào trang hiện tại để cuộn vô hạn. Hỗ trợ hàng ngàn trang web mà không cần bất kỳ quy tắc nào.
// @description:pl     Automatyczne pobieranie kolejnych stron internetowych z podziałem na strony i wstawianie ich do bieżącej strony w celu nieskończonego przewijania. Obsługa tysięcy stron internetowych bez żadnej reguły.
// @description:uk     Автоматичне отримання наступних веб-сторінок із розбивкою на сторінки та вставка на поточну сторінку для нескінченного прокручування. Підтримка тисяч веб-сайтів без будь-яких правил.
// @description:tr     Sonraki sayfalı web sayfalarını otomatik olarak getirme ve sonsuz kaydırma için geçerli sayfaya ekleme. Hiçbir kural olmadan binlerce web sitesini destekleyin.
// @description:nl     Automatisch ophalen van volgende gepagineerde webpagina's en invoegen in huidige pagina voor oneindig scrollen. Ondersteun duizenden websites zonder enige regel.
// @description:da     Automatisk hentning af næste paginerede websider og indsættelse på nuværende side for uendelig rulning. Støt tusindvis af websteder uden nogen regler.
// @description:fr-CA  Récupération automatique des pages Web paginées suivantes et insertion dans la page actuelle pour un défilement infini. Prise en charge de milliers de sites Web sans aucune règle.
// @author       hoothin
// @license      MPL-2.0
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEUAAAD3VU33VU32VEz8U073VU32VU33VU32VUz0Uk/3VE32VU32VUz2VU32VU32VU32VU33VU33U0z2VU34Wkv3VE32VUz/mpj/nJj2VUz2VU32VE33VEz2VU32VU32VUz3VE32VEz3VE3/mZf2Vkz2VU3/mpilFFolAAAAJXRSTlMA3Lp/GvTBT5YQLuawZ/DOyZwlPQeKc21N04+FX1bqpm9DNoB4T68ePwAAAitJREFUWMPt1tuasiAUBuCFCG5Rs3QybTPV1/1f4v/3PDkyIojn8x5qBrI+ltAfh32/yysmBKvyXb+njb6bDL9kzTd5SzjDAsYT8nFoGSxYe6BVqoNDp2jFDit25BRgVUAODB4YWcETWVTwVNGiGN5iWtBgg4YMCpsoI38dNunmmWyxUTvbPwwbsYR0fIzZLQ0pTG8eieRmBLMmpdH9uimQEf6TNRnXXKLZHixpJtywLzOgMHtFCqdM64DahHRnOE1dsrekm9wr2WtLcAlpdHwcp1pAJySXYnERclzp4+v19jXdmcTvQUJtz+ZaI4i05/V/UGYrCxbaAsOYoNfIKEQxpqQuzCgJJJ/3f42O8ywEZuMVWi/8hODxGj3GW2b0udkbGULLDOjimAG0S3fLGlBnXQM9irG1CiQdVQi0dqQsOSDlyEEz7Vy9OxxfR71VCXsSB23jMrKJYZXSjw57sqgLn5Z0wolsOCz0RyJkyeYjgz7pwwVq20eboZwtVUl2EnN5gJ50dQZFdryATvABRTr/tJXkUMdaAK5pwtCapwtFLskguwuyMh/Sd9WChQ4sIvIUYSk3PYqQvCQlOC04IfN7PkdjOyRKWhdKXMmiAFt9i3sJ5jxoRuR0vqAghxxwHuqfQE5OHGDKOrwEnqs1DgAZ2e4Eev1d45TN7JfhrQLKgfwMFYAsvp33dXII073aVQLI2gN5S58lfmGnKKFtah7nkgnBZB7zlP7Y/QNiTM6sYNzawwAAAABJRU5ErkJggg==
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_deleteValue
// @grant        GM_info
// @grant        GM_setClipboard
// @grant        GM.xmlHttpRequest
// @grant        GM.registerMenuCommand
// @grant        GM.notification
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.addStyle
// @grant        GM.openInTab
// @grant        GM.deleteValue
// @grant        GM.info
// @grant        GM.setClipboard
// @homepage     https://github.com/hoothin/UserScripts/tree/master/Pagetual
// @supportURL   https://github.com/hoothin/UserScripts/issues
// @connect      wedata.net
// @connect      githubusercontent.com
// @connect      ghproxy.com
// @connect      ghp.ci
// @connect      hoothin.github.io
// @run-at       document-end
// @connect      *
// @contributionURL      https://ko-fi.com/hoothin
// @contributionAmount   1
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pagetual.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pagetual.meta.js
// ==/UserScript==
