// ==UserScript==
// @name               Google & baidu Switcher (ALL in One)
// @name:en            Search Engine Assistant
// @name:zh-CN         优雅的搜索引擎助手
// @name:zh-TW         優雅的搜索引擎助手
// @name:ru            Поисковый помощник
// @name:ja            優雅な検索エンジン助手
// @version            2024.06.01.1
// @author             F9y4ng
// @description        "Elegant Search Engine Assistant" facilite le passage d'un moteur de recherche à l'autre, prend en charge la personnalisation des moteurs de recherche couramment utilisés, la mise en évidence des mots-clés, la suppression de la redirection des liens de recherche, la protection des publicités des résultats de recherche, le réglage des paramètres visuels, Duckduckgo, Yandex, Sogou, Ecosia, You, Startpage, Brave, etc.
// @description:en     "Elegant search engine assistant" facilitates users to jump between different search engines; supports custom commonly used search engines and search keyword highlighting effects; provides advanced functions such as removing search link redirection, blocking search results advertisements, etc.; it is compatible with well-known search engines such as Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Ecosia, You, Startpage, Brave, etc.
// @description:zh-CN  “优雅的搜索引擎助手”方便用户在不同的搜索引擎之间跳转；支持自定义常用搜索引擎、关键词高亮渲染效果；还提供去除搜索链接重定向、屏蔽搜索结果广告、可视化参数设置、及自动更新检测等高级功能；兼容多个知名搜索引擎，如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Ecosia、You、Startpage、Brave等。
// @description:zh-TW  「優雅的搜索引擎助手」方便用戶在不同的搜索引擎之間跳轉；支持自定義常用搜索引擎、關鍵詞高亮渲染效果；還提供去除搜索鏈接重定嚮、屏蔽搜索結果廣告、可視化參數設置、及自動更新檢測等高級功能；兼容多個知名搜索引擎，如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Ecosia、You、Startpage、Brave等。
// @description:ru     "Поисковый помощник" облегчает пользователям переход между различными поисковыми системами; поддерживает пользовательские широко используемые поисковые системы и эффекты подсветки ключевых слов; предоставляет расширенные функции, такие как удаление перенаправления поисковых ссылок, блокирование рекламы результатов поиска и т.д.; он совместим с известными поисковыми системами, такими как Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Ecosia, You, Startpage, brave и т.д.
// @description:ja     “優雅な検索エンジン助手”は、ユーザが異なる検索エンジン間でジャンプすることを容易にし、カスタム常用検索エンジン、検索キーワードのハイライト効果をサポートし、検索リンクのリダイレクト除去、検索結果広告の遮蔽、可視化パラメータ設定、自動更新検出などの高度な機能を提供し、Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Ecosia、You、Startpage、Braveなどの複数の有名な検索エンジンに対応する。
// @namespace          https://openuserjs.org/scripts/f9y4ng/Google_baidu_Switcher_(ALL_in_One)
// @icon               https://img.icons8.com/stickers/48/search-in-cloud.png
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @require            https://update.greasyfork.org/scripts/460897/1277476/gbCookies.js?SRI#sha256-Sv+EuBerch8z/6LvAU0m/ufvjmqB1Q/kbQrX7zAvOPk=
// @match              *://www.baidu.com/*
// @match              *://image.baidu.com/search*
// @match              *://kaifa.baidu.com/searchPage*
// @match              *://*.bing.com/*search*
// @match              *://duckduckgo.com/*
// @match              *://*.sogou.com/*
// @match              *://www.wuzhuiso.com/s*
// @match              *://www.so.com/s*
// @match              *://image.so.com/*
// @match              *://so.toutiao.com/search*
// @match              *://yandex.com/*search*
// @match              *://yandex.ru/*search*
// @match              *://www.ecosia.org/*
// @match              *://search.yahoo.com/search*
// @match              *://images.search.yahoo.com/search*
// @match              *://you.com/search*
// @match              *://www.startpage.com/*
// @match              *://search.brave.com/*
// @match              *://yep.com/*
// @match              *://swisscows.com/*
// @include            *://*.google.*/search*
// @exclude            *://www.google.com/sorry*
// @exclude            *://www.baidu.com/link*
// @exclude            *://www.sogou.com/link*
// @exclude            *://www.so.com/link*
// @exclude            *://so.toutiao.com/search/jump*
// @connect            baidu.com
// @connect            bing.com
// @connect            sogou.com
// @connect            so.com
// @connect            search.yahoo.com
// @connect            greasyfork.org
// @connect            openuserjs.org
// @connect            githubusercontent.com
// @connect            favicon.yandex.net
// @compatible         edge 兼容Tampermonkey, Violentmonkey
// @compatible         Chrome 兼容Tampermonkey, Violentmonkey
// @compatible         Firefox 兼容Greasemonkey, Tampermonkey, Violentmonkey
// @compatible         Opera 兼容Tampermonkey, Violentmonkey
// @compatible         Safari 兼容Tampermonkey, Userscripts
// @note               {"CN":"修正Google搜索分页链接开新窗口的问题。","EN":"Fixed the issue where Google search pagination links opened in a new window."}
// @note               {"CN":"修正一些已知问题，优化代码，优化样式。","EN":"Fixed known issues, optimize code and style."}
// @grant              GM_getValue
// @grant              GM.getValue
// @grant              GM_setValue
// @grant              GM.setValue
// @grant              GM_listValues
// @grant              GM.listValues
// @grant              GM_deleteValue
// @grant              GM.deleteValue
// @grant              GM_openInTab
// @grant              GM.openInTab
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_unregisterMenuCommand
// @grant              GM_xmlhttpRequest
// @grant              GM.xmlHttpRequest
// @license            GPL-3.0-only
// @create             2015-10-07
// @copyright          2015-2024, F9y4ng
// @run-at             document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E4BC98E99B85E79A84E6909CE7B4A2E5BC95E6938EE58AA9E6898B.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E4BC98E99B85E79A84E6909CE7B4A2E5BC95E6938EE58AA9E6898B.meta.js
// ==/UserScript==
