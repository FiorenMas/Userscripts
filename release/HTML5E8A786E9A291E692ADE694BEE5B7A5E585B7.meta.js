// ==UserScript==
// @name       HTML5视频播放工具
// @name:en	   HTML5 Video Playing Tools
// @name:it    Strumenti di riproduzione video HTML5
// @description 视频截图；切换画中画；缓存视频；万能网页全屏；添加快捷键：快进、快退、暂停/播放、音量、下一集、切换(网页)全屏、上下帧、播放速度。支持视频站点：油管、TED、优.土、QQ、B站、西瓜视频、爱奇艺、A站、PPTV、芒果TV、咪咕视频、新浪、微博、网易[娱乐、云课堂、新闻]、搜狐、风行、百度云视频等；直播：twitch、斗鱼、YY、虎牙、龙珠、战旗。可增加自定义站点
// @description:en Enable hotkeys for HTML5 playback: video screenshot; enable/disable picture-in-picture; copy cached video; send any video to full screen or browser window size; fast forward, rewind, pause/play, volume, skip to next video, skip to previous or next frame, set playback speed. Video sites supported: YouTube, TED, Youku, QQ.com, bilibili, ixigua, iQiyi, support mainstream video sites in mainland China; Live broadcasts: Twitch, Douyu.com, YY.com, Huya.com. Custom sites can be added
// @description:it Abilita tasti di scelta rapida per riproduzione HTML5: screenshot del video; abilita/disabilita picture-in-picture; copia il video nella cache; manda qualsiasi video a schermo intero o a dimensione finestra del browser; avanzamento veloce, riavvolgimento, pausa/riproduzione, imposta velocità di riproduzione. Siti video supportati: YouTube, TED, Supporto dei siti video mainstream nella Cina continentale. È possibile aggiungere siti personalizzati
// @homepage https://bbs.kafan.cn/thread-2093014-1-1.html
// @match    https://*.qq.com/*
// @exclude  https://user.qzone.qq.com/*
// @match    https://www.weiyun.com/video_*
// @match    https://v.youku.com/v_play/*
// @match    https://v.youku.com/v_show/id_*
// @match    https://vku.youku.com/live/*
// @match    https://video.tudou.com/v/*
// @match    https://www.iqiyi.com/*
// @match    https://live.bilibili.com/*
// @match    https://www.bilibili.com/*
// @match    https://www.ixigua.com/*
// @match    https://www.toutiao.com/video/*
// @match    https://www.acfun.cn/*
// @match    https://live.acfun.cn/live/*
// @match    http://v.pptv.com/show/*
// @match    https://v.pptv.com/show/*
// @match    https://www.miguvideo.com/*
// @match    https://tv.sohu.com/*
// @match    https://film.sohu.com/album/*
// @match    https://www.mgtv.com/*
// @version    1.9.9
// @match    https://pan.baidu.com/*
// @match    https://yun.baidu.com/*
// @match    https://*.163.com/*
// @match    https://*.icourse163.org/*
// @match    http://video.sina.*/*
// @match    https://video.sina.*/*
// @match    http://k.sina.*/*
// @match    https://k.sina.*/*
// @match    https://weibo.com/*
// @match    https://*.weibo.com/*
// @match    https://pan.baidu.com/*
// @match    https://yun.baidu.com/*
// @match    http://v.ifeng.com/*
// @match    https://v.ifeng.com/*
// @match    http://news.mtime.com/*
// @match    http://video.mtime.com/*
// @GM_info
// @match    https://www.youtube.com/*
// @match    https://www.ted.com/talks/*
// @match    https://www.twitch.tv/*

// @match    https://www.yy.com/*
// @match    https://www.huya.com/*
// @match    https://v.douyu.com/*
// @match    https://www.douyu.com/*
// @match    https://live.douyin.com/*
// @match    https://www.douyin.com/*

// @match    https://www.longzhu.com/*
// @match    https://www.zhanqi.tv/*
// @run-at     document-start
// @require    https://cdn.staticfile.org/vue/2.6.11/vue.min.js
// @require    https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js
// @grant      GM_addStyle
// @include    */play*
// @include    *play/*
// @grant      window.onurlchange
// @grant      unsafeWindow
// @grant      GM_download
// @grant      GM_openInTab
// @grant      GM_notification
// @grant      GM_registerMenuCommand
// @grant      GM_setValue
// @grant      GM_getValue
// @namespace  https://greasyfork.org/users/7036
// @license    MIT
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/HTML5E8A786E9A291E692ADE694BEE5B7A5E585B7.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/HTML5E8A786E9A291E692ADE694BEE5B7A5E585B7.meta.js
// ==/UserScript==
