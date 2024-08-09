// ==UserScript==
// @name         Pagetual
// @name:zh-CN   东方永页机
// @name:zh-TW   東方永頁機
// @name:ja      東方永頁機
// @name:ko      東方永頁機
// @name:ru      Pagetual
// @name:de      Pagetual
// @name:es      Pagetual
// @name:fr      Pagetual
// @name:it      Pagetual
// @namespace    hoothin
// @version      1.9.37.89
// @description  Perpetual pages - powerful auto-pager script. Auto fetching next paginated web pages and inserting into current page for infinite scroll. Support thousands of web sites without any rule.
// @description:zh-CN  终极自动翻页 - 加载并拼接下一分页内容至当前页尾，智能适配任意网页
// @description:zh-TW  終極自動翻頁 - 加載並拼接下一分頁內容至當前頁尾，智能適配任意網頁
// @description:ja     Webページを自動で読み込み継ぎ足し表示を行うブラウザ拡張です、次のページ付けされた Web ページの自動読み込みと現在のページへの挿入 ルールなしで何千もの Web サイトをサポートします。
// @description:ko     페이지가 매겨진 다음 웹 페이지를 자동으로 로드하고 현재 페이지에 삽입합니다. 규칙 없이 수천 개의 웹 사이트를 지원합니다.
// @description:ru     Автоматическая подгрузка следующих страниц и вставка их содержимого в текущую страницу. Поддерживает тысячи сайтов даже с настройками по умолчанию.
// @description:de     Automatisches Laden der nächsten paginierten Webseiten und Einfügen in die aktuelle Seite. Unterstützen Sie Tausende von Websites ohne Regeln.
// @description:es     Carga automática de las siguientes páginas web paginadas e inserción en la página actual. Admite miles de sitios web sin ninguna regla.
// @description:fr     Chargement automatique des pages Web paginées suivantes et insertion dans la page en cours. Prend en charge des milliers de sites Web sans aucune règle.
// @description:it     Caricamento automatico delle pagine Web impaginate successive e inserimento nella pagina corrente. Supporta migliaia di siti web senza alcuna regola.
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
// @connect      hoothin.github.io
// @run-at       document-end
// @connect      *
// @contributionURL      https://ko-fi.com/hoothin
// @contributionAmount   1
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pagetual.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pagetual.meta.js
// ==/UserScript==
