// ==UserScript==
// @name               圖片全載Next
// @name:en            Full Picture Load
// @version            2025.6.1
// @author             德克斯DEX
// @match              *://*/*
// @connect            *
// @exclude            *.youtube.com*
// @exclude            *docs.google.com*
// @exclude            *google*/maps/*
// @exclude            *mail.google.com*
// @exclude            *accounts.google.com*
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAtFBMVEVEREAAAABEREBEREAuuaIzqpkvr58yiHgzhnY6kYM7mYI4kog4s6A2tpo0r544ooo2nY40sJw0sp00rZg1sJw0sZ0zsp01sZw0sZw0rZk1sJw1sZw1rZk0sp00rpk1sp01sZs1rpk1rpk0sp01spw1sJ00rZo1rZk1rpo0r5k0sJw0sZ01r5o0sZw0rpk0sp01sZ01sJw1spw1r5k1sp01sZw0sZ01sZw1rpk1sp01sZw1r5pUzpTcAAAAOXRSTlMAAAUGCw8QERIUFxgbHB0hIieqq6yvtLa3vb/AwMHCxMXFxsfIyc3Oz+zt7vDx8fL4+Pn5+vr7/v7AEFI4AAABR0lEQVR42qWT11bDMAxApbhsmm5KKVD2KiUQwpD1///FkZcSmh4e8FOsex3LsgymPy6ISkRyA4FlWMRXomIyQOg/SbyKAmSOE2Ip02UOYxf/DILNjOOEWLnAEAqio0MMAzJjTAZh1p0SrYCIuu0cMZc9JbENXLa1NWGdI1nWeQuXGPzBTdzC8ws52UI5MwchrA/VTOuTEP9fFyTG7E+R9q8JLsbW1UHzU8HHrCuU1fyToDlB43xRqMUgfc+/KA77fZrWSH/47zPlzOcpJxG8u32r/OEg5SRCqO/WTeT3+5oTuP4LxrXnd5F7waZ+wM5c+NVeujMRrDYMYueE+VK5E5r3uzOb7TbvHH7f/1pP/L8nU9u38Nwyy8OZdjfwY+ZnmPinp28y3mglNeERDJYy/9A3GYVS+GMPMB+uyL67/qO68Mb8MurBD7foVTtvIbtnAAAAAElFTkSuQmCC
// @license            MIT
// @namespace          https://greasyfork.org/users/20361
// @grant              GM_xmlhttpRequest
// @grant              GM.xmlHttpRequest
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_unregisterMenuCommand
// @grant              GM.unregisterMenuCommand
// @grant              GM_openInTab
// @grant              GM.openInTab
// @grant              GM_getValue
// @grant              GM.getValue
// @grant              GM_setValue
// @grant              GM.setValue
// @grant              GM_listValues
// @grant              GM.listValues
// @grant              GM_deleteValue
// @grant              GM.deleteValue
// @grant              GM_getResourceText
// @grant              GM.getResourceText
// @grant              GM_addElement
// @grant              GM.addElement
// @grant              unsafeWindow
// @grant              window.close
// @grant              window.onurlchange
// @run-at             document-end
// @noframes
// @require            https://cdn.jsdelivr.net/gh/skofkyo/AutoPager@e95dd3100f3fbc57116b379e43a7277019381200/CustomPictureDownload/js/JSZip.js
// @resource           ajaxHookerJS https://cdn.jsdelivr.net/gh/skofkyo/AutoPager@6e02d72caad898a610022408b696ab5e11adaab6/CustomPictureDownload/js/ajaxHooker.js
// @resource           JqueryJS https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// @resource           FancyboxV5JS https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0.36/dist/fancybox/fancybox.umd.js
// @resource           FancyboxV5Css https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0.36/dist/fancybox/fancybox.css
// @resource           FancyboxV3JS https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js
// @resource           FancyboxV3Css https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css
// @resource           ViewerJs https://cdn.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.js
// @resource           ViewerJsCss https://cdn.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.css
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E59C96E78987E585A8E8BC89FancyboxV5.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E59C96E78987E585A8E8BC89FancyboxV5.meta.js
// ==/UserScript==
