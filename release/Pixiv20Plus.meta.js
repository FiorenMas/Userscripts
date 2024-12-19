// ==UserScript==
// @name        Pixiv Plus
// @name:zh-CN  Pixiv 增强
// @name:zh-TW  Pixiv 增強
// @namespace   https://github.com/Ahaochan/Tampermonkey
// @version     0.8.6
// @icon        https://www.pixiv.net/favicon.ico
// @description Focus on immersive experience, 1. Block ads, directly access popular pictures 2. Use user to enter the way to search 3. Search pid and uid 4. Display original image and size, picture rename, download original image | gif map | Zip|multiple map zip 5. display artist id, artist background image 6. auto load comment 7. dynamic markup work type 8. remove redirection 9. single page sort 10. control panel select desired function github: https:/ /github.com/Ahaochan/Tampermonkey, welcome to star and fork.
// @description:ja    没入型体験に焦点を当てる、1.人気の写真に直接アクセスする広告をブロックする2.検索する方法を入力するためにユーザーを使用する3.検索pidとuid 4.元の画像とサイズを表示する Zip | multiple map zip 5.アーティストID、アーティストの背景画像を表示します。6.自動ロードコメントを追加します。7.動的マークアップ作業タイプを指定します。8.リダイレクトを削除します。9.シングルページソート10.コントロールパネルを選択します。github：https：/ /github.com/Ahaochan/Tampermonkey、スターとフォークへようこそ。
// @description:zh-CN 专注沉浸式体验，1.屏蔽广告,直接访问热门图片 2.使用users入り的方式搜索 3.搜索pid和uid 4.显示原图及尺寸，图片重命名，下载原图|gif图|动图帧zip|多图zip 5.显示画师id、画师背景图 6.自动加载评论 7.对动态标记作品类型 8.去除重定向 9.单页排序 10.控制面板选择想要的功能 github:https://github.com/Ahaochan/Tampermonkey，欢迎star和fork。
// @description:zh-TW 專注沉浸式體驗，1.屏蔽廣告,直接訪問熱門圖片2.使用users入り的方式搜索3.搜索pid和uid 4.顯示原圖及尺寸，圖片重命名，下載原圖|gif圖|動圖幀zip|多圖zip 5.顯示畫師id、畫師背景圖6.自動加載評論7.對動態標記作品類型8.去除重定向9.單頁排序10.控制面板選擇想要的功能github:https:/ /github.com/Ahaochan/Tampermonkey，歡迎star和fork。
// @author      Ahaochan
// @include     http*://www.pixiv.net*
// @match       http://www.pixiv.net/
// @connect     i.pximg.net
// @connect     i-f.pximg.net
// @connect     i-cf.pximg.net
// @license     GPL-3.0
// @supportURL  https://github.com/Ahaochan/Tampermonkey
// @grant       unsafeWindow
// @grant       GM.xmlHttpRequest
// @grant       GM.setClipboard
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_setClipboard
// @grant       GM_setValue
// @grant       GM_getValue
// @require     https://cdn.bootcdn.net/ajax/libs/jquery/2.2.4/jquery.min.js
// @require     https://cdn.bootcss.com/jszip/3.1.4/jszip.min.js
// @require     https://cdn.bootcss.com/FileSaver.js/1.3.2/FileSaver.min.js
// @require     https://greasyfork.org/scripts/2963-gif-js/code/gifjs.js?version=8596
// @require     https://greasyfork.org/scripts/375359-gm4-polyfill-1-0-1/code/gm4-polyfill-101.js?version=652238
// @run-at      document-end
// @noframes
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pixiv20Plus.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pixiv20Plus.meta.js
// ==/UserScript==
