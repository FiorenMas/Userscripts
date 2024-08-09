// ==UserScript==
// @name         Image Downloader
// @name:zh-CN   图片下载器
// @name:zh-TW   图片下载器
// @name:ja   画像ダウンローダー
// @name:ko   이미지 다운로더
// @name:de   Image Downloader
// @name:es   Image Downloader
// @name:eo   Image Downloader
// @name:fr   Image Downloader
// @name:it   Image Downloader
// @name:ru   Image Downloader
// @name:vi   Image Downloader
// @name:pt-BR   Image Downloader
// @name:id   Image Downloader
// @name:ar   Image Downloader
// @name:bg   Image Downloader
// @name:cs   Image Downloader
// @name:tr   Image Downloader
// @name:el   Image Downloader
// @name:hu   Image Downloader
// @name:th   Image Downloader
// @namespace       http://tampermonkey.net/
// @description     Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:zh-CN   可以在绝大多数网站提取并批量下载图片。抓取能力大提升！现在可以抓取，H5游戏素材（4399），图库网站（千库网、包图网），漫画网站（腾讯漫画、b站漫画），文库网站（道客巴巴、豆丁），以及其他右键失效或者图片不能另存的网站，用脚本均可以提取并下载。额外功能：zip下载/自动大图。详细见脚本描述(目前适合chrome/firefox+tampermonkey，其他组合多少有问题）
// @description:zh-TW   可以在绝大多数网站提取并批量下载图片。抓取能力大提升！现在可以抓取，H5游戏素材（4399），图库网站（千库网、包图网），漫画网站（腾讯漫画、b站漫画），文库网站（道客巴巴、豆丁），以及其他右键失效或者图片不能另存的网站，用脚本均可以提取并下载。额外功能：zip下载/自动大图。详细见脚本描述(目前适合chrome/firefox+tampermonkey，其他组合多少有问题）
// @description:ja      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:ko      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:de      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:es      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:eo      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:fr      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:it      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:ru      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:vi      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:pt-BR   Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:id      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:ar      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:bg      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:cs      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:tr      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:el      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:hu      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @description:th      Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @version         2.90
// @author          桃源隐叟-The hide oldman in taoyuan mountain
// @connect  *
// @connect  *://*/*
// @grant   GM_openInTab
// @grant   GM_registerMenuCommand
// @grant   GM_setValue
// @grant   GM_getValue
// @grant   GM_deleteValue
// @grant   GM_xmlhttpRequest
// @grant   GM_download
// @require https://unpkg.com/hotkeys-js@3.9.4/dist/hotkeys.min.js
// @require https://cdn.bootcdn.net/ajax/libs/jszip/3.7.1/jszip.min.js
// @require https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @run-at  document-end
// @match   *://*/*
// @include *
// @match   https://www.bilibili.com/
// @match   https://588ku.com/
// @homepageURL https://github.com/taoyuancun123/modifyText/blob/master/modifyText.js
// @supportURL  https://greasyfork.org/zh-CN/scripts/419894/feedback
// @run-at      document-start
// @license GPLv3
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Image20Downloader.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Image20Downloader.meta.js
// ==/UserScript==
