// ==UserScript==
// @name         4chan X
// @version      1.14.22.5
// @minGMVer     1.14
// @minFFVer     26
// @namespace    4chan-X
// @license      MIT; https://github.com/ccd0/4chan-x/blob/master/LICENSE 
// @include      http://boards.4chan.org/*
// @include      https://boards.4chan.org/*
// @include      http://sys.4chan.org/*
// @include      https://sys.4chan.org/*
// @include      http://www.4chan.org/*
// @include      https://www.4chan.org/*
// @include      http://boards.4channel.org/*
// @include      https://boards.4channel.org/*
// @include      http://sys.4channel.org/*
// @include      https://sys.4channel.org/*
// @include      http://www.4channel.org/*
// @include      https://www.4channel.org/*
// @include      http://i.4cdn.org/*
// @include      https://i.4cdn.org/*
// @include      http://is.4chan.org/*
// @include      https://is.4chan.org/*
// @include      http://is2.4chan.org/*
// @include      https://is2.4chan.org/*
// @include      http://is.4channel.org/*
// @include      https://is.4channel.org/*
// @include      http://is2.4channel.org/*
// @include      https://is2.4channel.org/*
// @include      https://erischan.org/*
// @include      https://www.erischan.org/*
// @include      https://fufufu.moe/*
// @include      https://gnfos.com/*
// @include      https://himasugi.blog/*
// @include      https://www.himasugi.blog/*
// @include      https://kakashinenpo.com/*
// @include      https://www.kakashinenpo.com/*
// @include      https://kissu.moe/*
// @include      https://www.kissu.moe/*
// @include      https://lainchan.org/*
// @include      https://www.lainchan.org/*
// @include      https://merorin.com/*
// @include      https://ota-ch.com/*
// @include      https://www.ota-ch.com/*
// @include      https://ponyville.us/*
// @include      https://www.ponyville.us/*
// @include      https://smuglo.li/*
// @include      https://notso.smuglo.li/*
// @include      https://smugloli.net/*
// @include      https://smug.nepu.moe/*
// @include      https://sportschan.org/*
// @include      https://www.sportschan.org/*
// @include      https://sushigirl.us/*
// @include      https://www.sushigirl.us/*
// @include      https://tvch.moe/*
// @exclude      http://www.4chan.org/advertise
// @exclude      https://www.4chan.org/advertise
// @exclude      http://www.4chan.org/advertise?*
// @exclude      https://www.4chan.org/advertise?*
// @exclude      http://www.4chan.org/donate
// @exclude      https://www.4chan.org/donate
// @exclude      http://www.4chan.org/donate?*
// @exclude      https://www.4chan.org/donate?*
// @exclude      http://www.4channel.org/advertise
// @exclude      https://www.4channel.org/advertise
// @exclude      http://www.4channel.org/advertise?*
// @exclude      https://www.4channel.org/advertise?*
// @exclude      http://www.4channel.org/donate
// @exclude      https://www.4channel.org/donate
// @exclude      http://www.4channel.org/donate?*
// @exclude      https://www.4channel.org/donate?*
// @connect      4chan.org
// @connect      4channel.org
// @connect      4cdn.org
// @connect      4chenz.github.io
// @connect      archive.4plebs.org
// @connect      warosu.org
// @connect      desuarchive.org
// @connect      boards.fireden.net
// @connect      arch.b4k.co
// @connect      archived.moe
// @connect      thebarchive.com
// @connect      archiveofsins.com
// @connect      archive.palanq.win
// @connect      eientei.xyz
// @connect      api.clyp.it
// @connect      api.dailymotion.com
// @connect      api.github.com
// @connect      soundcloud.com
// @connect      api.streamable.com
// @connect      vimeo.com
// @connect      www.youtube.com
// @connect      *
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @run-at       document-start
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACVBMVEUAAGcAAABmzDNZt9VtAAAAAXRSTlMAQObYZgAAAF5JREFUeNrtkTESABAQxPD/R6tsE2dUGYUtFJvLDKf93KevHJAjpBorAQWSBIKqFASC4G0pCAkm4GfaEvgYXl0T6HBaE97f0vmnfYHbZOMLZCx9ISdKWwjOWZSC8GYm4SUGwfYgqI4AAAAASUVORK5CYII=
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/4chan20X.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/4chan20X.meta.js
// ==/UserScript==
(function(){"use strict";var r,N,lt,dt,ct,ut,Ee,oe,Te,F,Y,ye,ft,ht,de,Zt,pt,be,je,fe,gt,bt,Re,Ae,Ke,Fe,Be,nt,ot,ue,mt,vt,He,H,L,At,wt,xt,_,De,re,yt,kt,X,Pe,It,Z,Ct,ie,Dt,St,Oe,Et,J,Tt,Rt,Bt,Pt,Mt,ae,Me,Nt,Xe,Lt,y,Ft,Ot,Ze,qt,_e,jt,ke,se,Ht,$e,me,ne,Ue,Ut,et,Vt,Qt,Wt,le,Ve,we,_t,qe,rt,zt,Se,he,Gt,Yt,Qe,pe,it,Jt,$,te,We,Ie,f,T,ze,I,E,tt,p;f=Object.create(null),ze=console,I=document,E=I.documentElement,tt=function(){return E=I.documentElement},p={VERSION:"1.14.22.5",NAMESPACE:"4chan X.",sites:Object.create(null),boards:Object.create(null)},T=function(){var t,s,o,e;return e={"&":"&amp;","'":"&#039;",'"':"&quot;","<":"&lt;",">":"&gt;"},s=String.prototype.replace,o=/[&"'<>]/g,t=function(n){return e[n]},function(n){return s.call(n,o,t)}}(),T.cat=function(t){var s,o,e;for(s="",o=0,e=t.length;o<e;o++)s+=t[o].innerHTML;return s},de=function(){var t;return t={main:{Miscellaneous:{"Redirect to HTTPS":[!0,"Redirect to the HTTPS version of 4chan."],"JSON Index":[!0,"Replace the original board index with one supporting searching, sorting, infinite scrolling, and a catalog mode."],"Use 4chan X Catalog":[!0,"Link to 4chan X's catalog instead of the native 4chan one.",1],"Index Refresh Notifications":[!1,"Show a notice at the top of the page when the index is refreshed.",1],"Follow Cursor":[!0,"Image Hover and Quote Preview move with the mouse cursor."],"Open Threads in New Tab":[!1,"Make links to threads in the index / 4chan X catalog open in a new tab."],"External Catalog":[!1,"Link to external catalog instead of the internal one."],"Catalog Links":[!1,"Add toggle link in header menu to turn Navigation links into links to each board's catalog."],"Announcement Hiding":[!0,"Add button to hide 4chan announcements."],"Desktop Notifications":[!0,"Enables desktop notifications across various 4chan X features."],"404 Redirect":[!0,"Redirect dead threads and images to the archives."],"Archive Report":[!0,"Enable reporting posts to supported archives."],"Exempt Archives from Encryption":[!0,"Permit loading content from, and warningless redirects to, HTTP-only archives from HTTPS pages."],Keybinds:[!0,"Bind actions to keyboard shortcuts."],"Time Formatting":[!0,"Localize and format timestamps."],"Relative Post Dates":[!0,'Display dates like "3 minutes ago". Tooltip shows the timestamp.'],"Relative Date Title":[!0,"Show Relative Post Date only when hovering over dates.",1],"Comment Expansion":[!0,"Expand comments that are too long to display on the index. Not applicable with JSON Index."],"File Info Formatting":[!0,"Reformat the file information."],"Thread Expansion":[!0,"Add buttons to expand threads."],"Index Navigation":[!1,"Add buttons to navigate between threads."],"Reply Navigation":[!1,"Add buttons to navigate to top / bottom of thread."],"Unique ID and Capcode Navigation":[!1,"Add buttons to navigate to posts having the same unique ID or capcode."],"Custom Board Titles":[!0,"Allow editing of the board title and subtitle by ctrl/\u2318+clicking them."],"Persistent Custom Board Titles":[!1,"Force custom board titles to be persistent, even if the board titles are updated.",1],"Show Updated Notifications":[!0,"Show notifications when 4chan X is successfully updated."],"Color User IDs":[!0,"Assign unique colors to user IDs on boards that use them"],"Count Posts by ID":[!0,"Display number of posts in the thread when hovering over an ID."],"Remove Spoilers":[!1,"Remove all spoilers in text."],"Reveal Spoilers":[!1,"Indicate spoilers if Remove Spoilers is enabled, or make the text appear hovered if Remove Spoiler is disabled."],"Normalize URL":[!0,"Rewrite the URL of the current page, removing slugs and excess slashes, and changing /res/ to /thread/."],"Work around CORB Bug":[!0,"Leave this checked until your garbage browser is fixed."],"Disable Autoplaying Sounds":[!1,"Prevent sounds on the page from autoplaying."],"Disable Native Extension":[!0,"4chan X is NOT designed to work with the native extension."],"Enable Native Flash Embedding":[!0,"Activate the native extension's Flash embedding if the native extension is disabled."]},Linkification:{Linkify:[!0,"Convert text into links where applicable."],"Link Title":[!0,"Replace the link of a supported site with its actual title.",1],"Cover Preview":[!0,"Show preview of supported links on hover.",1],Embedding:[!0,"Embed supported services. Note: Some services don't work on HTTPS.",1],"Auto-embed":[!1,"Auto-embed Linkify Embeds.",2],"Floating Embeds":[!1,"Embed content in a frame that remains in place when the page is scrolled.",2]},Filtering:{Anonymize:[!1,"Make everyone Anonymous."],Filter:[!0,"Self-moderation placebo."],"Filtered Backlinks":[!1,"When enabled, shows backlinks to filtered posts with a line-through decoration. Otherwise, hides the backlinks.",1],"Filter in Native Catalog":[!0,"Apply 4chan X filters in native catalog.",1],"MD5 Quick Filter Notifications":[!0,"Show notification when quick filtering MD5s using the button or keybind.",1],"Recursive Hiding":[!0,"Hide replies of hidden posts, recursively."],"Thread Hiding Buttons":[!0,"Add buttons to hide entire threads."],"Reply Hiding Buttons":[!0,"Add buttons to hide single replies."],Stubs:[!0,"Show stubs of hidden threads / replies."]},"Images and Videos":{"Image Expansion":[!0,"Expand images / videos."],"Image Hover":[!0,"Show full image / video on mouseover."],"Image Hover in Catalog":[!0,"Show full image / video on mouseover in 4chan X catalog."],Gallery:[!0,"Adds a simple and cute image gallery. Has more options in the gallery menu."],"Fullscreen Gallery":[!1,"Open gallery in fullscreen mode.",1],"PDF in Gallery":[!1,"Show PDF files in gallery.",1],Sauce:[!0,"Add sauce links to images."],"WEBM Metadata":[!0,"Add link to fetch title metadata from webm videos."],"Reveal Spoiler Thumbnails":[!1,"Replace spoiler thumbnails with the original image."],"Replace GIF":[!1,"Replace gif thumbnails with the actual image."],"Replace JPG":[!1,"Replace jpg thumbnails with the actual image."],"Replace PNG":[!1,"Replace png thumbnails with the actual image."],"Replace WEBM":[!1,"Replace webm, mp4, and ogv thumbnails with the actual video. Probably will degrade browser performance ;)"],"Image Prefetching":[!0,"Add a shortcut icon to the header to turn on image preloading."],"Fappe Tyme":[!0,"Hide posts without images when header menu item is checked. *hint* *hint*"],"Werk Tyme":[!0,"Hide all post images when header menu item is checked."],Autoplay:[!0,"Videos begin playing immediately when opened."],"Restart when Opened":[!1,"Restart GIFs and WebMs when you hover over or expand them."],"Show Controls":[!0,"Show controls on videos expanded inline."],"Click Passthrough":[!1,"Clicks on videos trigger your browser's default behavior. Videos can be contracted with button / dragging to the left.",1],"Allow Sound":[!0,"Open videos with the sound unmuted."],"Mouse Wheel Volume":[!0,"Adjust volume of videos with the mouse wheel over the thumbnail/filename/gallery."],"Loop in New Tab":[!0,"Loop videos opened in their own tabs."],"Volume in New Tab":[!0,"Apply 4chan X mute and volume settings to videos opened in their own tabs."]},Menu:{Menu:[!0,"Add a drop-down menu to posts."],"Report Link":[!0,"Add a report link to the menu.",1],"Copy Text Link":[!0,"Add a link to copy the post's text.",1],"Thread Hiding Link":[!0,"Add a link to hide entire threads.",1],"Reply Hiding Link":[!0,"Add a link to hide single replies.",1],"Delete Link":[!0,"Add post and image deletion links to the menu.",1],"Archive Link":[!0,"Add an archive link to the menu.",1],"Edit Link":[!0,"Add a link to edit the image in Tegaki, /i/'s painting program. Requires Quick Reply.",1],"Download Link":[!1,"Add a download with original filename link to the menu.",1]},Monitoring:{"Thread Updater":[!0,'Fetch and insert new replies. Has more options in the header menu and the "Advanced" tab.'],"Unread Count":[!0,"Show the unread posts count in the tab title."],"Quoted Title":[!1,"Change the page title to reflect you've been quoted.",1],"Hide Unread Count at (0)":[!1,"Hide the unread posts count in the tab title when it reaches 0.",1],"Unread Favicon":[!0,"Show a different favicon when there are unread posts."],"Unread Line":[!0,"Show a line to distinguish read posts from unread ones."],"Remember Last Read Post":[!0,"Remember how far you've read after you close the thread."],"Scroll to Last Read Post":[!0,"Scroll back to the last read post when reopening a thread.",1],"Unread Line in Index":[!1,"Show a line between read and unread posts in threads in the index.",1],"Remove Thread Excerpt":[!1,"Replace the excerpt of the thread in the tab title with the board title."],"Thread Stats":[!0,"Display reply and image count."],"IP Count in Stats":[!0,"Display the unique IP count in the thread stats.",1],"Page Count in Stats":[!0,"Display the page count in the thread stats.",1],"Updater and Stats in Header":[!0,"Places the thread updater and thread stats in the header instead of floating them."],"Thread Watcher":[!0,"Bookmark threads. Has more options in the thread watcher menu."],"Fixed Thread Watcher":[!0,"Makes the thread watcher scroll with the page.",1],"Persistent Thread Watcher":[!1,"The thread watcher will be visible when the page is loaded.",1],"Mark New IPs":[!1,"Label each post from a new IP with the thread's current IP count."],"Reply Pruning":[!0,"Add option in header menu to hide old replies in long threads. Activated by default in stickies."],"Prune All Threads":[!1,"Activate Reply Pruning by default in all threads.",1]},"Posting and Captchas":{"Quick Reply":[!0,"All-in-one form to reply, create threads, automate dumping and more."],"Persistent QR":[!1,"The Quick reply won't disappear after posting.",1],"Auto Hide QR":[!0,"Automatically hide the quick reply when posting.",2],"Open Post in New Tab":[!0,"Open new threads in a new tab, and open replies in a new tab if you're not already in the thread.",1],"Remember QR Size":[!1,"Remember the size of the Quick reply.",1],"Remember Spoiler":[!1,"Remember the spoiler state, instead of resetting after posting.",1],"Randomize Filename":[!1,"Set the filename to a random timestamp within the past year. Disabled on /f/.",1],"Show New Thread Option in Threads":[!0,"Show the option to post a new / different thread from inside a thread.",1],"Show Upload Progress":[!0,"Track progress of file uploads as percentage in submit button.",1],Cooldown:[!0,"Indicate the remaining time before posting again.",1],"Posting Success Notifications":[!0,"Show notifications on successful post creation or file uploading.",1],"Auto-load captcha":[!1,"Automatically load the captcha in the QR even if your post is empty.",1],"Post on Captcha Completion":[!1,"Submit the post immediately when the captcha is completed.",1],"Force Noscript Captcha":[!1,"Use the non-Javascript fallback captcha even if Javascript is enabled."],"Pass Link":[!1,"Add a 4chan Pass login link to the bottom of the page."]},"Quote Links":{"Quote Backlinks":[!0,"Add quote backlinks."],"OP Backlinks":[!0,"Add backlinks to the OP.",1],"Bottom Backlinks":[!1,"Place backlinks at the bottom of posts.",1],"Quote Inlining":[!0,"Inline quoted post on click."],"Inline Cross-thread Quotes Only":[!1,"Don't inline quote links when the posts are visible in the thread.",1],"Quote Hash Navigation":[!1,"Include an extra link after quotes for autoscrolling to quoted posts.",1],"Forward Hiding":[!0,"Hide original posts of inlined backlinks.",1],"Quote Previewing":[!0,"Show quoted post on hover."],"Quote Highlighting":[!0,"Highlight the previewed post.",1],"Resurrect Quotes":[!0,"Link dead quotes to the archives, and support inlining/previewing of archive links like quote links."],"Remember Your Posts":[!0,"Remember your posting history."],"Mark Quotes of You":[!0,"Add '(You)' to quotes linking to your posts.",1],"Highlight Posts Quoting You":[!0,"Highlights any posts that contain a quote to your post.",1],"Highlight Own Posts":[!0,"Highlights own posts.",1],"Mark OP Quotes":[!0,"Add '(OP)' to OP quotes."],"Mark Cross-thread Quotes":[!0,"Add '(Cross-thread)' to cross-threads quotes."],"Quote Threading":[!0,"Add option in header menu to thread conversations."]}},imageExpansion:{"Fit width":[!0,""],"Fit height":[!1,""],"Scroll into view":[!0,"Scroll down when expanding images to bring the full image into view."],"Expand spoilers":[!0,"Expand all images along with spoilers."],"Expand videos":[!0,"Expand all images also expands videos."],"Expand from here":[!1,"Expand all images only from current position to thread end."],"Expand thread only":[!1,"In index, expand all images only within the current thread."],"Advance on contract":[!1,"Advance to next post when contracting an expanded image."]},gallery:{"Hide Thumbnails":[!1],"Fit Width":[!0],"Fit Height":[!0],"Stretch to Fit":[!1],"Scroll to Post":[!0],"Slide Delay":[6]},"Default Volume":1,threadWatcher:{"Current Board":[!1,"Only show watched threads from the current board."],"Auto Update Thread Watcher":[!0,"Periodically check status of watched threads."],"Auto Watch":[!0,"Automatically watch threads you start."],"Auto Watch Reply":[!0,"Automatically watch threads you reply to."],"Auto Prune":[!1,"Automatically remove dead threads."],"Show Page":[!0,"Show what page watched threads are on."],"Show Unread Count":[!0,"Show number of unread posts in watched threads."],"Show Site Prefix":[!0,"When multiple sites are shown in the thread watcher, add a prefix to board names to distinguish them."],"Require OP Quote Link":[!1,"For purposes of thread watcher highlighting, only consider posts with a quote link to the OP as replies to the OP."]},filter:{general:"",postID:`# Highlight dubs on [s4s]:
#/(\\d)\\1$/;highlight;top:no;boards:s4s`,name:`# Filter any namefags:
#/^(?!Anonymous$)/`,uniqueID:`# Filter a specific ID:
#/Txhvk1Tl/`,tripcode:`# Filter any tripfag
#/^!/`,capcode:`# Set a custom class for mods:
#/Mod$/;highlight:mod;op:yes
# Set a custom class for admins:
#/Admin$/;highlight:admin;op:yes`,pass:`# Filter anyone using since4pass:
#/./`,email:"",subject:`# Filter Generals on /v/:
#/general/i;boards:v;op:only`,comment:`# Filter Stallman copypasta on /g/:
#/what you're refer+ing to as linux/i;boards:g
# Filter posts with 20 or more quote links:
#/(?:>>\\d(?:(?!>>\\d)[^])*){20}/
# Filter posts like T H I S / H / I / S:
#/^>?\\s?\\w\\s?(\\w)\\s?(\\w)\\s?(\\w).*$[\\s>]+\\1[\\s>]+\\2[\\s>]+\\3/im`,flag:"",filename:"",dimensions:`# Highlight potential wallpapers:
#/1920x1080/;op:yes;highlight;top:no;boards:w,wg`,filesize:"",MD5:""},sauces:`# Known filename formats:
https://www.pixiv.net/member_illust.php?mode=medium&illust_id=%$1;regexp:/^(\\d+)_p\\d+/
javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/
https://imgur.com/%$1;regexp:/^(?![a-zA-Z][a-z]{6})(?![A-Z]{7})(?!\\d{7})([\\da-zA-Z]{7})(?: \\(\\d+\\))?\\.\\w+$/
https://flickr.com/photo.gne?id=%$1;regexp:/^(\\d+)_[\\da-f]{10}(?:_\\w)*\\b/
https://www.facebook.com/photo.php?fbid=%$1;regexp:/^\\d+_(\\d+)_\\d+_[no]\\b/

# Reverse image search:
https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%IMG&safe=off
https://yandex.com/images/search?rpt=imageview&url=%IMG
#//tineye.com/search?url=%IMG
#//www.bing.com/images/search?q=imgurl:%IMG&view=detailv2&iss=sbi#enterInsights
#https://lens.google.com/uploadbyurl?url=%IMG;text:lens

# Specialized reverse image search:
//iqdb.org/?url=%IMG
https://trace.moe/?auto&url=%IMG;text:wait
#//3d.iqdb.org/?url=%IMG
#//saucenao.com/search.php?url=%IMG

# "View Same" in archives:
http://eye.swfchan.com/search/?q=%name;types:swf
#https://desuarchive.org/_/search/image/%sMD5/
#https://archive.4plebs.org/_/search/image/%sMD5/
#https://boards.fireden.net/_/search/image/%sMD5/
#https://foolz.fireden.net/_/search/image/%sMD5/

# Other tools:
#http://exif.regex.info/exif.cgi?imgurl=%URL
#//imgops.com/start?url=%URL;types:gif,jpg,png
#//www.gif-explode.com/%URL;types:gif`,FappeT:{werk:!1},"Custom CSS":!0,Index:{"Index Mode":"paged","Previous Index Mode":"paged","Index Size":"small","Show Replies":[!0,'Show replies in the index, and also in the catalog if "Catalog hover expand" is checked.'],"Catalog Hover Expand":[!1,"Expand the comment and show more details when you hover over a thread in the catalog."],"Catalog Hover Toggle":[!0,'Turn "Catalog hover expand" on and off by clicking in the catalog.'],"Pin Watched Threads":[!1,"Move watched threads to the start of the index."],"Anchor Hidden Threads":[!0,"Move hidden threads to the end of the index."],"Refreshed Navigation":[!1,"Refresh index when navigating through pages."]},Header:{"Fixed Header":!0,"Header auto-hide":!1,"Header auto-hide on scroll":!1,"Bottom Header":!1,"Centered links":!1,"Header catalog links":!1,"Bottom Board List":!0,"Shortcut Icons":!0,"Custom Board Navigation":!0},archives:{archiveLists:"https://4chenz.github.io/archives.json/archives.json",lastarchivecheck:0,archiveAutoUpdate:!0},externalCatalogURLs:"//catalog.neet.tv/%board/;boards:4chan.org:3,a,adv,an,asp,biz,c,cgl,ck,cm,co,diy,f,fa,fit,g,gd,his,i,int,jp,k,lgbt,lit,m,mlp,mu,n,news,o,out,p,po,pol,s4s,sci,sp,tg,toy,trv,tv,v,vg,vip,vp,vr,w,wg,wsg,wsr,x",boardnav:`[ toggle-all ]
[current-index-text:"Index"
current-catalog-text:"Catalog"
current-expired-text:"Expired"
current-archive-text:"Archive"]
[external-text:"FAQ","https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions"]`,QR:{"QR.personas":'#options:"sage";boards:jp;always',sjisPreview:!1},jsWhitelist:`http://s.4cdn.org
https://s.4cdn.org
http://www.google.com
https://www.google.com
https://www.gstatic.com
http://cdn.mathjax.org
https://cdn.mathjax.org
https://cdnjs.cloudflare.com
https://hcaptcha.com
https://*.hcaptcha.com
'self'
'unsafe-inline'
'unsafe-eval'`,captchaLanguage:"",time:"%m/%d/%y(%a)%H:%M:%S",timeLocale:"",backlink:">>%id",pastedname:"file",fileInfo:"%l %d (%p%s, %r%g)",favicon:"ferongr",usercss:`/* Board title rice */
div.boardTitle {
  font-weight: 400 !important;
}
:root.yotsuba div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(100,0,0,0.6);
}
:root.yotsuba-b div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(105,10,15,0.6);
}
:root.photon div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(0,74,153,0.6);
}
:root.tomorrow div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(167,170,168,0.6);
}
`,hotkeys:{"Toggle board list":["Ctrl+b","Toggle the full board list."],"Toggle header":["Shift+h","Toggle the auto-hide option of the header."],"Open empty QR":["q","Open QR without post number inserted."],"Open QR":["Shift+q","Open QR with post number inserted."],"Open settings":["Alt+o","Open Settings."],Close:["Esc","Close dialogs or notifications."],"Spoiler tags":["Ctrl+s","Insert spoiler tags."],"Code tags":["Alt+c","Insert code tags."],"Eqn tags":["Alt+e","Insert eqn tags."],"Math tags":["Alt+m","Insert math tags."],"SJIS tags":["Alt+a","Insert SJIS tags."],"Toggle sage":["Alt+s","Toggle sage in options field."],"Toggle Cooldown":["Alt+Comma","Toggle custom cooldown timer."],"Post from URL":["Alt+l","Post from URL."],"Add new post":["Alt+n","Add new post to the QR dump list."],"Submit QR":["Ctrl+Enter","Submit post."],Watch:["w","Watch thread."],Update:["r","Update the thread / refresh the index."],"Update thread watcher":["Shift+r","Manually refresh thread watcher."],"Toggle thread watcher":["t","Toggle visibility of thread watcher."],"Toggle threading":["Shift+t","Toggle threading."],"Mark thread read":["Ctrl+0",'Mark thread read from index (requires "Unread Line in Index").'],"Expand image":["Shift+e","Expand selected image."],"Expand images":["e","Expand all images."],"Open Gallery":["g","Opens the gallery."],"Next Gallery Image":["Right","Go to the next image in gallery mode."],"Previous Gallery Image":["Left","Go to the previous image in gallery mode."],"Advance Gallery":["Enter","Go to next image or, if Autoplay is off, play video."],Pause:["p","Pause/play videos in the gallery."],Slideshow:["Ctrl+Right","Toggle the gallery slideshow mode."],"Rotate image clockwise":["Shift+Right","Rotate image clockwise in gallery."],"Rotate image anticlockwise":["Shift+Left","Rotate image anticlockwise in gallery."],"Download Gallery Image":["Shift+j","Download current image in gallery."],fappeTyme:["f","Toggle Fappe Tyme."],werkTyme:["Shift+w","Toggle Werk Tyme."],"Front page":["1","Jump to front page."],"Open front page":["Shift+1","Open front page in a new tab."],"Next page":["Ctrl+Right","Jump to the next page."],"Previous page":["Ctrl+Left","Jump to the previous page."],"Paged mode":["Alt+1","Open the index in paged mode."],"Infinite scrolling mode":["Alt+2","Open the index in infinite scrolling mode."],"All pages mode":["Alt+3","Open the index in all threads mode."],"Open catalog":["Shift+c","Open the catalog of the current board."],"Search form":["Ctrl+Alt+s","Focus the search field on the board index."],"Cycle sort type":["Alt+x","Cycle through index sort types."],"Next thread":["Ctrl+Down","See next thread."],"Previous thread":["Ctrl+Up","See previous thread."],"Expand thread":["Ctrl+e","Expand thread."],"Open thread":["o","Open thread in current tab."],"Open thread tab":["Shift+o","Open thread in new tab."],"Next reply":["j","Select next reply."],"Previous reply":["k","Select previous reply."],"Deselect reply":["Shift+d","Deselect reply."],Hide:["x","Hide thread."],"Quick Filter MD5":["5","Add the MD5 of the selected image to the filter list."],"Previous Post Quoting You":["Alt+Up","Scroll to the previous post that quotes you."],"Next Post Quoting You":["Alt+Down","Scroll to the next post that quotes you."]},updater:{checkbox:{Beep:[!1,"Beep on new post to completely read thread."],"Beep Quoting You":[!1,"Beep on new post quoting you."],"Auto Scroll":[!1,"Scroll updated posts into view. Only enabled at bottom of page."],"Bottom Scroll":[!1,"Always scroll to the bottom, not the first new post. Useful for event threads."],"Scroll BG":[!1,"Auto-scroll background tabs."],"Auto Update":[!0,"Automatically fetch new posts."],"Optional Increase":[!1,"Increase the intervals between updates on threads without new posts."]},Interval:5},customCooldown:0,customCooldownEnabled:!0,"Thread Quotes":!1,"Max Replies":1e3,"Autohiding Scrollbar":!1,position:{"embedding.position":"top: 50px; right: 0px;","thread-stats.position":"bottom: 0px; right: 0px;","updater.position":"bottom: 0px; left: 0px;","thread-watcher.position":"top: 50px; left: 0px;","qr.position":"top: 50px; right: 0px;"},fourchanImageHost:"i.4cdn.org",hiddenPSAList:[{}],knownBanners:"0.jpg,1.jpg,2.jpg,4.jpg,6.jpg,7.jpg,8.jpg,9.jpg,10.jpg,11.jpg,12.jpg,13.jpg,14.jpg,16.jpg,17.jpg,18.jpg,19.jpg,20.jpg,21.jpg,22.jpg,24.jpg,25.jpg,26.jpg,28.jpg,29.jpg,33.jpg,38.jpg,39.jpg,43.jpg,44.jpg,45.jpg,46.jpg,47.jpg,52.jpg,54.jpg,57.jpg,59.jpg,60.jpg,61.jpg,64.jpg,66.jpg,67.jpg,69.jpg,71.jpg,72.jpg,76.jpg,77.jpg,81.jpg,82.jpg,83.jpg,84.jpg,88.jpg,90.jpg,91.jpg,96.jpg,98.jpg,99.jpg,100.jpg,104.jpg,106.jpg,116.jpg,119.jpg,137.jpg,140.jpg,148.jpg,149.jpg,150.jpg,154.jpg,156.jpg,157.jpg,158.jpg,159.jpg,161.jpg,162.jpg,164.jpg,165.jpg,166.jpg,167.jpg,168.jpg,169.jpg,170.jpg,171.jpg,172.jpg,173.jpg,174.jpg,175.jpg,176.jpg,178.jpg,179.jpg,180.jpg,181.jpg,182.jpg,183.jpg,186.jpg,189.jpg,190.jpg,192.jpg,193.jpg,194.jpg,197.jpg,198.jpg,200.jpg,201.jpg,202.jpg,203.jpg,205.jpg,206.jpg,207.jpg,208.jpg,210.jpg,213.jpg,214.jpg,215.jpg,216.jpg,218.jpg,219.jpg,220.jpg,221.jpg,222.jpg,223.jpg,224.jpg,227.jpg,0.png,1.png,2.png,3.png,5.png,6.png,9.png,10.png,11.png,12.png,14.png,16.png,19.png,20.png,21.png,22.png,23.png,24.png,26.png,27.png,28.png,29.png,30.png,31.png,32.png,33.png,34.png,37.png,39.png,40.png,41.png,42.png,43.png,44.png,45.png,48.png,49.png,50.png,51.png,52.png,53.png,57.png,58.png,59.png,64.png,66.png,67.png,68.png,69.png,70.png,71.png,72.png,76.png,78.png,79.png,81.png,82.png,85.png,86.png,87.png,89.png,95.png,98.png,100.png,101.png,102.png,105.png,106.png,107.png,109.png,110.png,111.png,112.png,113.png,114.png,115.png,116.png,118.png,119.png,120.png,121.png,122.png,123.png,126.png,128.png,130.png,134.png,136.png,138.png,139.png,140.png,142.png,145.png,146.png,149.png,150.png,151.png,152.png,153.png,154.png,155.png,156.png,157.png,158.png,159.png,160.png,163.png,164.png,165.png,166.png,167.png,168.png,169.png,170.png,171.png,172.png,173.png,174.png,178.png,179.png,180.png,181.png,182.png,184.png,186.png,188.png,190.png,192.png,193.png,194.png,195.png,196.png,197.png,198.png,200.png,202.png,203.png,205.png,206.png,207.png,209.png,212.png,213.png,214.png,216.png,217.png,218.png,219.png,220.png,221.png,222.png,223.png,224.png,225.png,226.png,229.png,231.png,232.png,233.png,234.png,235.png,237.png,238.png,239.png,240.png,241.png,242.png,244.png,245.png,246.png,247.png,248.png,249.png,250.png,253.png,254.png,255.png,256.png,257.png,258.png,259.png,260.png,262.png,268.png,0.gif,1.gif,2.gif,3.gif,4.gif,5.gif,6.gif,7.gif,8.gif,9.gif,10.gif,12.gif,13.gif,14.gif,15.gif,16.gif,18.gif,19.gif,20.gif,21.gif,22.gif,23.gif,24.gif,28.gif,29.gif,30.gif,33.gif,34.gif,35.gif,36.gif,37.gif,39.gif,40.gif,42.gif,44.gif,45.gif,46.gif,48.gif,50.gif,52.gif,54.gif,55.gif,57.gif,58.gif,59.gif,60.gif,61.gif,63.gif,64.gif,66.gif,67.gif,68.gif,69.gif,70.gif,72.gif,73.gif,75.gif,76.gif,77.gif,78.gif,80.gif,81.gif,82.gif,83.gif,86.gif,87.gif,88.gif,92.gif,93.gif,94.gif,95.gif,96.gif,97.gif,98.gif,99.gif,100.gif,101.gif,102.gif,103.gif,104.gif,105.gif,106.gif,108.gif,109.gif,110.gif,111.gif,112.gif,113.gif,115.gif,116.gif,117.gif,118.gif,119.gif,120.gif,122.gif,123.gif,124.gif,127.gif,129.gif,130.gif,131.gif,134.gif,135.gif,136.gif,138.gif,139.gif,141.gif,144.gif,146.gif,148.gif,149.gif,153.gif,154.gif,155.gif,157.gif,158.gif,159.gif,160.gif,161.gif,162.gif,164.gif,166.gif,167.gif,168.gif,169.gif,170.gif,171.gif,172.gif,173.gif,174.gif,175.gif,176.gif,177.gif,178.gif,181.gif,182.gif,183.gif,185.gif,186.gif,187.gif,188.gif,189.gif,190.gif,191.gif,192.gif,193.gif,195.gif,196.gif,197.gif,200.gif,201.gif,202.gif,203.gif,204.gif,205.gif,206.gif,207.gif,208.gif,209.gif,210.gif,211.gif,212.gif,213.gif,214.gif,215.gif,216.gif,217.gif,219.gif,220.gif,221.gif,222.gif,224.gif,225.gif,226.gif,227.gif,228.gif,230.gif,232.gif,233.gif,234.gif,235.gif,238.gif,240.gif,241.gif,243.gif,244.gif,245.gif,246.gif,247.gif,249.gif,250.gif,251.gif,253.gif",passMessageClosed:!1,"Prerequest Captcha":!1,PSAseen:[[]]},t}.call(this),Te={boards:`/*!
 *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
@font-face {
  font-family: FontAwesome;
  src: url('data:application/font-woff;base64,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') format('woff');
  font-weight: 400;
  font-style: normal;
}
.fa-glass:before {content: "\\f000";}
.fa-music:before {content: "\\f001";}
.fa-search:before {content: "\\f002";}
.fa-envelope-o:before {content: "\\f003";}
.fa-heart:before {content: "\\f004";}
.fa-star:before {content: "\\f005";}
.fa-star-o:before {content: "\\f006";}
.fa-user:before {content: "\\f007";}
.fa-film:before {content: "\\f008";}
.fa-th-large:before {content: "\\f009";}
.fa-th:before {content: "\\f00a";}
.fa-th-list:before {content: "\\f00b";}
.fa-check:before {content: "\\f00c";}
.fa-remove:before, .fa-close:before, .fa-times:before {content: "\\f00d";}
.fa-search-plus:before {content: "\\f00e";}
.fa-search-minus:before {content: "\\f010";}
.fa-power-off:before {content: "\\f011";}
.fa-signal:before {content: "\\f012";}
.fa-gear:before, .fa-cog:before {content: "\\f013";}
.fa-trash-o:before {content: "\\f014";}
.fa-home:before {content: "\\f015";}
.fa-file-o:before {content: "\\f016";}
.fa-clock-o:before {content: "\\f017";}
.fa-road:before {content: "\\f018";}
.fa-download:before {content: "\\f019";}
.fa-arrow-circle-o-down:before {content: "\\f01a";}
.fa-arrow-circle-o-up:before {content: "\\f01b";}
.fa-inbox:before {content: "\\f01c";}
.fa-play-circle-o:before {content: "\\f01d";}
.fa-rotate-right:before, .fa-repeat:before {content: "\\f01e";}
.fa-refresh:before {content: "\\f021";}
.fa-list-alt:before {content: "\\f022";}
.fa-lock:before {content: "\\f023";}
.fa-flag:before {content: "\\f024";}
.fa-headphones:before {content: "\\f025";}
.fa-volume-off:before {content: "\\f026";}
.fa-volume-down:before {content: "\\f027";}
.fa-volume-up:before {content: "\\f028";}
.fa-qrcode:before {content: "\\f029";}
.fa-barcode:before {content: "\\f02a";}
.fa-tag:before {content: "\\f02b";}
.fa-tags:before {content: "\\f02c";}
.fa-book:before {content: "\\f02d";}
.fa-bookmark:before {content: "\\f02e";}
.fa-print:before {content: "\\f02f";}
.fa-camera:before {content: "\\f030";}
.fa-font:before {content: "\\f031";}
.fa-bold:before {content: "\\f032";}
.fa-italic:before {content: "\\f033";}
.fa-text-height:before {content: "\\f034";}
.fa-text-width:before {content: "\\f035";}
.fa-align-left:before {content: "\\f036";}
.fa-align-center:before {content: "\\f037";}
.fa-align-right:before {content: "\\f038";}
.fa-align-justify:before {content: "\\f039";}
.fa-list:before {content: "\\f03a";}
.fa-dedent:before, .fa-outdent:before {content: "\\f03b";}
.fa-indent:before {content: "\\f03c";}
.fa-video-camera:before {content: "\\f03d";}
.fa-photo:before, .fa-image:before, .fa-picture-o:before {content: "\\f03e";}
.fa-pencil:before {content: "\\f040";}
.fa-map-marker:before {content: "\\f041";}
.fa-adjust:before {content: "\\f042";}
.fa-tint:before {content: "\\f043";}
.fa-edit:before, .fa-pencil-square-o:before {content: "\\f044";}
.fa-share-square-o:before {content: "\\f045";}
.fa-check-square-o:before {content: "\\f046";}
.fa-arrows:before {content: "\\f047";}
.fa-step-backward:before {content: "\\f048";}
.fa-fast-backward:before {content: "\\f049";}
.fa-backward:before {content: "\\f04a";}
.fa-play:before {content: "\\f04b";}
.fa-pause:before {content: "\\f04c";}
.fa-stop:before {content: "\\f04d";}
.fa-forward:before {content: "\\f04e";}
.fa-fast-forward:before {content: "\\f050";}
.fa-step-forward:before {content: "\\f051";}
.fa-eject:before {content: "\\f052";}
.fa-chevron-left:before {content: "\\f053";}
.fa-chevron-right:before {content: "\\f054";}
.fa-plus-circle:before {content: "\\f055";}
.fa-minus-circle:before {content: "\\f056";}
.fa-times-circle:before {content: "\\f057";}
.fa-check-circle:before {content: "\\f058";}
.fa-question-circle:before {content: "\\f059";}
.fa-info-circle:before {content: "\\f05a";}
.fa-crosshairs:before {content: "\\f05b";}
.fa-times-circle-o:before {content: "\\f05c";}
.fa-check-circle-o:before {content: "\\f05d";}
.fa-ban:before {content: "\\f05e";}
.fa-arrow-left:before {content: "\\f060";}
.fa-arrow-right:before {content: "\\f061";}
.fa-arrow-up:before {content: "\\f062";}
.fa-arrow-down:before {content: "\\f063";}
.fa-mail-forward:before, .fa-share:before {content: "\\f064";}
.fa-expand:before {content: "\\f065";}
.fa-compress:before {content: "\\f066";}
.fa-plus:before {content: "\\f067";}
.fa-minus:before {content: "\\f068";}
.fa-asterisk:before {content: "\\f069";}
.fa-exclamation-circle:before {content: "\\f06a";}
.fa-gift:before {content: "\\f06b";}
.fa-leaf:before {content: "\\f06c";}
.fa-fire:before {content: "\\f06d";}
.fa-eye:before {content: "\\f06e";}
.fa-eye-slash:before {content: "\\f070";}
.fa-warning:before, .fa-exclamation-triangle:before {content: "\\f071";}
.fa-plane:before {content: "\\f072";}
.fa-calendar:before {content: "\\f073";}
.fa-random:before {content: "\\f074";}
.fa-comment:before {content: "\\f075";}
.fa-magnet:before {content: "\\f076";}
.fa-chevron-up:before {content: "\\f077";}
.fa-chevron-down:before {content: "\\f078";}
.fa-retweet:before {content: "\\f079";}
.fa-shopping-cart:before {content: "\\f07a";}
.fa-folder:before {content: "\\f07b";}
.fa-folder-open:before {content: "\\f07c";}
.fa-arrows-v:before {content: "\\f07d";}
.fa-arrows-h:before {content: "\\f07e";}
.fa-bar-chart-o:before, .fa-bar-chart:before {content: "\\f080";}
.fa-twitter-square:before {content: "\\f081";}
.fa-facebook-square:before {content: "\\f082";}
.fa-camera-retro:before {content: "\\f083";}
.fa-key:before {content: "\\f084";}
.fa-gears:before, .fa-cogs:before {content: "\\f085";}
.fa-comments:before {content: "\\f086";}
.fa-thumbs-o-up:before {content: "\\f087";}
.fa-thumbs-o-down:before {content: "\\f088";}
.fa-star-half:before {content: "\\f089";}
.fa-heart-o:before {content: "\\f08a";}
.fa-sign-out:before {content: "\\f08b";}
.fa-linkedin-square:before {content: "\\f08c";}
.fa-thumb-tack:before {content: "\\f08d";}
.fa-external-link:before {content: "\\f08e";}
.fa-sign-in:before {content: "\\f090";}
.fa-trophy:before {content: "\\f091";}
.fa-github-square:before {content: "\\f092";}
.fa-upload:before {content: "\\f093";}
.fa-lemon-o:before {content: "\\f094";}
.fa-phone:before {content: "\\f095";}
.fa-square-o:before {content: "\\f096";}
.fa-bookmark-o:before {content: "\\f097";}
.fa-phone-square:before {content: "\\f098";}
.fa-twitter:before {content: "\\f099";}
.fa-facebook-f:before, .fa-facebook:before {content: "\\f09a";}
.fa-github:before {content: "\\f09b";}
.fa-unlock:before {content: "\\f09c";}
.fa-credit-card:before {content: "\\f09d";}
.fa-feed:before, .fa-rss:before {content: "\\f09e";}
.fa-hdd-o:before {content: "\\f0a0";}
.fa-bullhorn:before {content: "\\f0a1";}
.fa-bell:before {content: "\\f0f3";}
.fa-certificate:before {content: "\\f0a3";}
.fa-hand-o-right:before {content: "\\f0a4";}
.fa-hand-o-left:before {content: "\\f0a5";}
.fa-hand-o-up:before {content: "\\f0a6";}
.fa-hand-o-down:before {content: "\\f0a7";}
.fa-arrow-circle-left:before {content: "\\f0a8";}
.fa-arrow-circle-right:before {content: "\\f0a9";}
.fa-arrow-circle-up:before {content: "\\f0aa";}
.fa-arrow-circle-down:before {content: "\\f0ab";}
.fa-globe:before {content: "\\f0ac";}
.fa-wrench:before {content: "\\f0ad";}
.fa-tasks:before {content: "\\f0ae";}
.fa-filter:before {content: "\\f0b0";}
.fa-briefcase:before {content: "\\f0b1";}
.fa-arrows-alt:before {content: "\\f0b2";}
.fa-group:before, .fa-users:before {content: "\\f0c0";}
.fa-chain:before, .fa-link:before {content: "\\f0c1";}
.fa-cloud:before {content: "\\f0c2";}
.fa-flask:before {content: "\\f0c3";}
.fa-cut:before, .fa-scissors:before {content: "\\f0c4";}
.fa-copy:before, .fa-files-o:before {content: "\\f0c5";}
.fa-paperclip:before {content: "\\f0c6";}
.fa-save:before, .fa-floppy-o:before {content: "\\f0c7";}
.fa-square:before {content: "\\f0c8";}
.fa-navicon:before, .fa-reorder:before, .fa-bars:before {content: "\\f0c9";}
.fa-list-ul:before {content: "\\f0ca";}
.fa-list-ol:before {content: "\\f0cb";}
.fa-strikethrough:before {content: "\\f0cc";}
.fa-underline:before {content: "\\f0cd";}
.fa-table:before {content: "\\f0ce";}
.fa-magic:before {content: "\\f0d0";}
.fa-truck:before {content: "\\f0d1";}
.fa-pinterest:before {content: "\\f0d2";}
.fa-pinterest-square:before {content: "\\f0d3";}
.fa-google-plus-square:before {content: "\\f0d4";}
.fa-google-plus:before {content: "\\f0d5";}
.fa-money:before {content: "\\f0d6";}
.fa-caret-down:before {content: "\\f0d7";}
.fa-caret-up:before {content: "\\f0d8";}
.fa-caret-left:before {content: "\\f0d9";}
.fa-caret-right:before {content: "\\f0da";}
.fa-columns:before {content: "\\f0db";}
.fa-unsorted:before, .fa-sort:before {content: "\\f0dc";}
.fa-sort-down:before, .fa-sort-desc:before {content: "\\f0dd";}
.fa-sort-up:before, .fa-sort-asc:before {content: "\\f0de";}
.fa-envelope:before {content: "\\f0e0";}
.fa-linkedin:before {content: "\\f0e1";}
.fa-rotate-left:before, .fa-undo:before {content: "\\f0e2";}
.fa-legal:before, .fa-gavel:before {content: "\\f0e3";}
.fa-dashboard:before, .fa-tachometer:before {content: "\\f0e4";}
.fa-comment-o:before {content: "\\f0e5";}
.fa-comments-o:before {content: "\\f0e6";}
.fa-flash:before, .fa-bolt:before {content: "\\f0e7";}
.fa-sitemap:before {content: "\\f0e8";}
.fa-umbrella:before {content: "\\f0e9";}
.fa-paste:before, .fa-clipboard:before {content: "\\f0ea";}
.fa-lightbulb-o:before {content: "\\f0eb";}
.fa-exchange:before {content: "\\f0ec";}
.fa-cloud-download:before {content: "\\f0ed";}
.fa-cloud-upload:before {content: "\\f0ee";}
.fa-user-md:before {content: "\\f0f0";}
.fa-stethoscope:before {content: "\\f0f1";}
.fa-suitcase:before {content: "\\f0f2";}
.fa-bell-o:before {content: "\\f0a2";}
.fa-coffee:before {content: "\\f0f4";}
.fa-cutlery:before {content: "\\f0f5";}
.fa-file-text-o:before {content: "\\f0f6";}
.fa-building-o:before {content: "\\f0f7";}
.fa-hospital-o:before {content: "\\f0f8";}
.fa-ambulance:before {content: "\\f0f9";}
.fa-medkit:before {content: "\\f0fa";}
.fa-fighter-jet:before {content: "\\f0fb";}
.fa-beer:before {content: "\\f0fc";}
.fa-h-square:before {content: "\\f0fd";}
.fa-plus-square:before {content: "\\f0fe";}
.fa-angle-double-left:before {content: "\\f100";}
.fa-angle-double-right:before {content: "\\f101";}
.fa-angle-double-up:before {content: "\\f102";}
.fa-angle-double-down:before {content: "\\f103";}
.fa-angle-left:before {content: "\\f104";}
.fa-angle-right:before {content: "\\f105";}
.fa-angle-up:before {content: "\\f106";}
.fa-angle-down:before {content: "\\f107";}
.fa-desktop:before {content: "\\f108";}
.fa-laptop:before {content: "\\f109";}
.fa-tablet:before {content: "\\f10a";}
.fa-mobile-phone:before, .fa-mobile:before {content: "\\f10b";}
.fa-circle-o:before {content: "\\f10c";}
.fa-quote-left:before {content: "\\f10d";}
.fa-quote-right:before {content: "\\f10e";}
.fa-spinner:before {content: "\\f110";}
.fa-circle:before {content: "\\f111";}
.fa-mail-reply:before, .fa-reply:before {content: "\\f112";}
.fa-github-alt:before {content: "\\f113";}
.fa-folder-o:before {content: "\\f114";}
.fa-folder-open-o:before {content: "\\f115";}
.fa-smile-o:before {content: "\\f118";}
.fa-frown-o:before {content: "\\f119";}
.fa-meh-o:before {content: "\\f11a";}
.fa-gamepad:before {content: "\\f11b";}
.fa-keyboard-o:before {content: "\\f11c";}
.fa-flag-o:before {content: "\\f11d";}
.fa-flag-checkered:before {content: "\\f11e";}
.fa-terminal:before {content: "\\f120";}
.fa-code:before {content: "\\f121";}
.fa-mail-reply-all:before, .fa-reply-all:before {content: "\\f122";}
.fa-star-half-empty:before, .fa-star-half-full:before, .fa-star-half-o:before {content: "\\f123";}
.fa-location-arrow:before {content: "\\f124";}
.fa-crop:before {content: "\\f125";}
.fa-code-fork:before {content: "\\f126";}
.fa-unlink:before, .fa-chain-broken:before {content: "\\f127";}
.fa-question:before {content: "\\f128";}
.fa-info:before {content: "\\f129";}
.fa-exclamation:before {content: "\\f12a";}
.fa-superscript:before {content: "\\f12b";}
.fa-subscript:before {content: "\\f12c";}
.fa-eraser:before {content: "\\f12d";}
.fa-puzzle-piece:before {content: "\\f12e";}
.fa-microphone:before {content: "\\f130";}
.fa-microphone-slash:before {content: "\\f131";}
.fa-shield:before {content: "\\f132";}
.fa-calendar-o:before {content: "\\f133";}
.fa-fire-extinguisher:before {content: "\\f134";}
.fa-rocket:before {content: "\\f135";}
.fa-maxcdn:before {content: "\\f136";}
.fa-chevron-circle-left:before {content: "\\f137";}
.fa-chevron-circle-right:before {content: "\\f138";}
.fa-chevron-circle-up:before {content: "\\f139";}
.fa-chevron-circle-down:before {content: "\\f13a";}
.fa-html5:before {content: "\\f13b";}
.fa-css3:before {content: "\\f13c";}
.fa-anchor:before {content: "\\f13d";}
.fa-unlock-alt:before {content: "\\f13e";}
.fa-bullseye:before {content: "\\f140";}
.fa-ellipsis-h:before {content: "\\f141";}
.fa-ellipsis-v:before {content: "\\f142";}
.fa-rss-square:before {content: "\\f143";}
.fa-play-circle:before {content: "\\f144";}
.fa-ticket:before {content: "\\f145";}
.fa-minus-square:before {content: "\\f146";}
.fa-minus-square-o:before {content: "\\f147";}
.fa-level-up:before {content: "\\f148";}
.fa-level-down:before {content: "\\f149";}
.fa-check-square:before {content: "\\f14a";}
.fa-pencil-square:before {content: "\\f14b";}
.fa-external-link-square:before {content: "\\f14c";}
.fa-share-square:before {content: "\\f14d";}
.fa-compass:before {content: "\\f14e";}
.fa-toggle-down:before, .fa-caret-square-o-down:before {content: "\\f150";}
.fa-toggle-up:before, .fa-caret-square-o-up:before {content: "\\f151";}
.fa-toggle-right:before, .fa-caret-square-o-right:before {content: "\\f152";}
.fa-euro:before, .fa-eur:before {content: "\\f153";}
.fa-gbp:before {content: "\\f154";}
.fa-dollar:before, .fa-usd:before {content: "\\f155";}
.fa-rupee:before, .fa-inr:before {content: "\\f156";}
.fa-cny:before, .fa-rmb:before, .fa-yen:before, .fa-jpy:before {content: "\\f157";}
.fa-ruble:before, .fa-rouble:before, .fa-rub:before {content: "\\f158";}
.fa-won:before, .fa-krw:before {content: "\\f159";}
.fa-bitcoin:before, .fa-btc:before {content: "\\f15a";}
.fa-file:before {content: "\\f15b";}
.fa-file-text:before {content: "\\f15c";}
.fa-sort-alpha-asc:before {content: "\\f15d";}
.fa-sort-alpha-desc:before {content: "\\f15e";}
.fa-sort-amount-asc:before {content: "\\f160";}
.fa-sort-amount-desc:before {content: "\\f161";}
.fa-sort-numeric-asc:before {content: "\\f162";}
.fa-sort-numeric-desc:before {content: "\\f163";}
.fa-thumbs-up:before {content: "\\f164";}
.fa-thumbs-down:before {content: "\\f165";}
.fa-youtube-square:before {content: "\\f166";}
.fa-youtube:before {content: "\\f167";}
.fa-xing:before {content: "\\f168";}
.fa-xing-square:before {content: "\\f169";}
.fa-youtube-play:before {content: "\\f16a";}
.fa-dropbox:before {content: "\\f16b";}
.fa-stack-overflow:before {content: "\\f16c";}
.fa-instagram:before {content: "\\f16d";}
.fa-flickr:before {content: "\\f16e";}
.fa-adn:before {content: "\\f170";}
.fa-bitbucket:before {content: "\\f171";}
.fa-bitbucket-square:before {content: "\\f172";}
.fa-tumblr:before {content: "\\f173";}
.fa-tumblr-square:before {content: "\\f174";}
.fa-long-arrow-down:before {content: "\\f175";}
.fa-long-arrow-up:before {content: "\\f176";}
.fa-long-arrow-left:before {content: "\\f177";}
.fa-long-arrow-right:before {content: "\\f178";}
.fa-apple:before {content: "\\f179";}
.fa-windows:before {content: "\\f17a";}
.fa-android:before {content: "\\f17b";}
.fa-linux:before {content: "\\f17c";}
.fa-dribbble:before {content: "\\f17d";}
.fa-skype:before {content: "\\f17e";}
.fa-foursquare:before {content: "\\f180";}
.fa-trello:before {content: "\\f181";}
.fa-female:before {content: "\\f182";}
.fa-male:before {content: "\\f183";}
.fa-gittip:before, .fa-gratipay:before {content: "\\f184";}
.fa-sun-o:before {content: "\\f185";}
.fa-moon-o:before {content: "\\f186";}
.fa-archive:before {content: "\\f187";}
.fa-bug:before {content: "\\f188";}
.fa-vk:before {content: "\\f189";}
.fa-weibo:before {content: "\\f18a";}
.fa-renren:before {content: "\\f18b";}
.fa-pagelines:before {content: "\\f18c";}
.fa-stack-exchange:before {content: "\\f18d";}
.fa-arrow-circle-o-right:before {content: "\\f18e";}
.fa-arrow-circle-o-left:before {content: "\\f190";}
.fa-toggle-left:before, .fa-caret-square-o-left:before {content: "\\f191";}
.fa-dot-circle-o:before {content: "\\f192";}
.fa-wheelchair:before {content: "\\f193";}
.fa-vimeo-square:before {content: "\\f194";}
.fa-turkish-lira:before, .fa-try:before {content: "\\f195";}
.fa-plus-square-o:before {content: "\\f196";}
.fa-space-shuttle:before {content: "\\f197";}
.fa-slack:before {content: "\\f198";}
.fa-envelope-square:before {content: "\\f199";}
.fa-wordpress:before {content: "\\f19a";}
.fa-openid:before {content: "\\f19b";}
.fa-institution:before, .fa-bank:before, .fa-university:before {content: "\\f19c";}
.fa-mortar-board:before, .fa-graduation-cap:before {content: "\\f19d";}
.fa-yahoo:before {content: "\\f19e";}
.fa-google:before {content: "\\f1a0";}
.fa-reddit:before {content: "\\f1a1";}
.fa-reddit-square:before {content: "\\f1a2";}
.fa-stumbleupon-circle:before {content: "\\f1a3";}
.fa-stumbleupon:before {content: "\\f1a4";}
.fa-delicious:before {content: "\\f1a5";}
.fa-digg:before {content: "\\f1a6";}
.fa-pied-piper-pp:before {content: "\\f1a7";}
.fa-pied-piper-alt:before {content: "\\f1a8";}
.fa-drupal:before {content: "\\f1a9";}
.fa-joomla:before {content: "\\f1aa";}
.fa-language:before {content: "\\f1ab";}
.fa-fax:before {content: "\\f1ac";}
.fa-building:before {content: "\\f1ad";}
.fa-child:before {content: "\\f1ae";}
.fa-paw:before {content: "\\f1b0";}
.fa-spoon:before {content: "\\f1b1";}
.fa-cube:before {content: "\\f1b2";}
.fa-cubes:before {content: "\\f1b3";}
.fa-behance:before {content: "\\f1b4";}
.fa-behance-square:before {content: "\\f1b5";}
.fa-steam:before {content: "\\f1b6";}
.fa-steam-square:before {content: "\\f1b7";}
.fa-recycle:before {content: "\\f1b8";}
.fa-automobile:before, .fa-car:before {content: "\\f1b9";}
.fa-cab:before, .fa-taxi:before {content: "\\f1ba";}
.fa-tree:before {content: "\\f1bb";}
.fa-spotify:before {content: "\\f1bc";}
.fa-deviantart:before {content: "\\f1bd";}
.fa-soundcloud:before {content: "\\f1be";}
.fa-database:before {content: "\\f1c0";}
.fa-file-pdf-o:before {content: "\\f1c1";}
.fa-file-word-o:before {content: "\\f1c2";}
.fa-file-excel-o:before {content: "\\f1c3";}
.fa-file-powerpoint-o:before {content: "\\f1c4";}
.fa-file-photo-o:before, .fa-file-picture-o:before, .fa-file-image-o:before {content: "\\f1c5";}
.fa-file-zip-o:before, .fa-file-archive-o:before {content: "\\f1c6";}
.fa-file-sound-o:before, .fa-file-audio-o:before {content: "\\f1c7";}
.fa-file-movie-o:before, .fa-file-video-o:before {content: "\\f1c8";}
.fa-file-code-o:before {content: "\\f1c9";}
.fa-vine:before {content: "\\f1ca";}
.fa-codepen:before {content: "\\f1cb";}
.fa-jsfiddle:before {content: "\\f1cc";}
.fa-life-bouy:before, .fa-life-buoy:before, .fa-life-saver:before, .fa-support:before, .fa-life-ring:before {content: "\\f1cd";}
.fa-circle-o-notch:before {content: "\\f1ce";}
.fa-ra:before, .fa-resistance:before, .fa-rebel:before {content: "\\f1d0";}
.fa-ge:before, .fa-empire:before {content: "\\f1d1";}
.fa-git-square:before {content: "\\f1d2";}
.fa-git:before {content: "\\f1d3";}
.fa-y-combinator-square:before, .fa-yc-square:before, .fa-hacker-news:before {content: "\\f1d4";}
.fa-tencent-weibo:before {content: "\\f1d5";}
.fa-qq:before {content: "\\f1d6";}
.fa-wechat:before, .fa-weixin:before {content: "\\f1d7";}
.fa-send:before, .fa-paper-plane:before {content: "\\f1d8";}
.fa-send-o:before, .fa-paper-plane-o:before {content: "\\f1d9";}
.fa-history:before {content: "\\f1da";}
.fa-circle-thin:before {content: "\\f1db";}
.fa-header:before {content: "\\f1dc";}
.fa-paragraph:before {content: "\\f1dd";}
.fa-sliders:before {content: "\\f1de";}
.fa-share-alt:before {content: "\\f1e0";}
.fa-share-alt-square:before {content: "\\f1e1";}
.fa-bomb:before {content: "\\f1e2";}
.fa-soccer-ball-o:before, .fa-futbol-o:before {content: "\\f1e3";}
.fa-tty:before {content: "\\f1e4";}
.fa-binoculars:before {content: "\\f1e5";}
.fa-plug:before {content: "\\f1e6";}
.fa-slideshare:before {content: "\\f1e7";}
.fa-twitch:before {content: "\\f1e8";}
.fa-yelp:before {content: "\\f1e9";}
.fa-newspaper-o:before {content: "\\f1ea";}
.fa-wifi:before {content: "\\f1eb";}
.fa-calculator:before {content: "\\f1ec";}
.fa-paypal:before {content: "\\f1ed";}
.fa-google-wallet:before {content: "\\f1ee";}
.fa-cc-visa:before {content: "\\f1f0";}
.fa-cc-mastercard:before {content: "\\f1f1";}
.fa-cc-discover:before {content: "\\f1f2";}
.fa-cc-amex:before {content: "\\f1f3";}
.fa-cc-paypal:before {content: "\\f1f4";}
.fa-cc-stripe:before {content: "\\f1f5";}
.fa-bell-slash:before {content: "\\f1f6";}
.fa-bell-slash-o:before {content: "\\f1f7";}
.fa-trash:before {content: "\\f1f8";}
.fa-copyright:before {content: "\\f1f9";}
.fa-at:before {content: "\\f1fa";}
.fa-eyedropper:before {content: "\\f1fb";}
.fa-paint-brush:before {content: "\\f1fc";}
.fa-birthday-cake:before {content: "\\f1fd";}
.fa-area-chart:before {content: "\\f1fe";}
.fa-pie-chart:before {content: "\\f200";}
.fa-line-chart:before {content: "\\f201";}
.fa-lastfm:before {content: "\\f202";}
.fa-lastfm-square:before {content: "\\f203";}
.fa-toggle-off:before {content: "\\f204";}
.fa-toggle-on:before {content: "\\f205";}
.fa-bicycle:before {content: "\\f206";}
.fa-bus:before {content: "\\f207";}
.fa-ioxhost:before {content: "\\f208";}
.fa-angellist:before {content: "\\f209";}
.fa-cc:before {content: "\\f20a";}
.fa-shekel:before, .fa-sheqel:before, .fa-ils:before {content: "\\f20b";}
.fa-meanpath:before {content: "\\f20c";}
.fa-buysellads:before {content: "\\f20d";}
.fa-connectdevelop:before {content: "\\f20e";}
.fa-dashcube:before {content: "\\f210";}
.fa-forumbee:before {content: "\\f211";}
.fa-leanpub:before {content: "\\f212";}
.fa-sellsy:before {content: "\\f213";}
.fa-shirtsinbulk:before {content: "\\f214";}
.fa-simplybuilt:before {content: "\\f215";}
.fa-skyatlas:before {content: "\\f216";}
.fa-cart-plus:before {content: "\\f217";}
.fa-cart-arrow-down:before {content: "\\f218";}
.fa-diamond:before {content: "\\f219";}
.fa-ship:before {content: "\\f21a";}
.fa-user-secret:before {content: "\\f21b";}
.fa-motorcycle:before {content: "\\f21c";}
.fa-street-view:before {content: "\\f21d";}
.fa-heartbeat:before {content: "\\f21e";}
.fa-venus:before {content: "\\f221";}
.fa-mars:before {content: "\\f222";}
.fa-mercury:before {content: "\\f223";}
.fa-intersex:before, .fa-transgender:before {content: "\\f224";}
.fa-transgender-alt:before {content: "\\f225";}
.fa-venus-double:before {content: "\\f226";}
.fa-mars-double:before {content: "\\f227";}
.fa-venus-mars:before {content: "\\f228";}
.fa-mars-stroke:before {content: "\\f229";}
.fa-mars-stroke-v:before {content: "\\f22a";}
.fa-mars-stroke-h:before {content: "\\f22b";}
.fa-neuter:before {content: "\\f22c";}
.fa-genderless:before {content: "\\f22d";}
.fa-facebook-official:before {content: "\\f230";}
.fa-pinterest-p:before {content: "\\f231";}
.fa-whatsapp:before {content: "\\f232";}
.fa-server:before {content: "\\f233";}
.fa-user-plus:before {content: "\\f234";}
.fa-user-times:before {content: "\\f235";}
.fa-hotel:before, .fa-bed:before {content: "\\f236";}
.fa-viacoin:before {content: "\\f237";}
.fa-train:before {content: "\\f238";}
.fa-subway:before {content: "\\f239";}
.fa-medium:before {content: "\\f23a";}
.fa-yc:before, .fa-y-combinator:before {content: "\\f23b";}
.fa-optin-monster:before {content: "\\f23c";}
.fa-opencart:before {content: "\\f23d";}
.fa-expeditedssl:before {content: "\\f23e";}
.fa-battery-4:before, .fa-battery:before, .fa-battery-full:before {content: "\\f240";}
.fa-battery-3:before, .fa-battery-three-quarters:before {content: "\\f241";}
.fa-battery-2:before, .fa-battery-half:before {content: "\\f242";}
.fa-battery-1:before, .fa-battery-quarter:before {content: "\\f243";}
.fa-battery-0:before, .fa-battery-empty:before {content: "\\f244";}
.fa-mouse-pointer:before {content: "\\f245";}
.fa-i-cursor:before {content: "\\f246";}
.fa-object-group:before {content: "\\f247";}
.fa-object-ungroup:before {content: "\\f248";}
.fa-sticky-note:before {content: "\\f249";}
.fa-sticky-note-o:before {content: "\\f24a";}
.fa-cc-jcb:before {content: "\\f24b";}
.fa-cc-diners-club:before {content: "\\f24c";}
.fa-clone:before {content: "\\f24d";}
.fa-balance-scale:before {content: "\\f24e";}
.fa-hourglass-o:before {content: "\\f250";}
.fa-hourglass-1:before, .fa-hourglass-start:before {content: "\\f251";}
.fa-hourglass-2:before, .fa-hourglass-half:before {content: "\\f252";}
.fa-hourglass-3:before, .fa-hourglass-end:before {content: "\\f253";}
.fa-hourglass:before {content: "\\f254";}
.fa-hand-grab-o:before, .fa-hand-rock-o:before {content: "\\f255";}
.fa-hand-stop-o:before, .fa-hand-paper-o:before {content: "\\f256";}
.fa-hand-scissors-o:before {content: "\\f257";}
.fa-hand-lizard-o:before {content: "\\f258";}
.fa-hand-spock-o:before {content: "\\f259";}
.fa-hand-pointer-o:before {content: "\\f25a";}
.fa-hand-peace-o:before {content: "\\f25b";}
.fa-trademark:before {content: "\\f25c";}
.fa-registered:before {content: "\\f25d";}
.fa-creative-commons:before {content: "\\f25e";}
.fa-gg:before {content: "\\f260";}
.fa-gg-circle:before {content: "\\f261";}
.fa-tripadvisor:before {content: "\\f262";}
.fa-odnoklassniki:before {content: "\\f263";}
.fa-odnoklassniki-square:before {content: "\\f264";}
.fa-get-pocket:before {content: "\\f265";}
.fa-wikipedia-w:before {content: "\\f266";}
.fa-safari:before {content: "\\f267";}
.fa-chrome:before {content: "\\f268";}
.fa-firefox:before {content: "\\f269";}
.fa-opera:before {content: "\\f26a";}
.fa-internet-explorer:before {content: "\\f26b";}
.fa-tv:before, .fa-television:before {content: "\\f26c";}
.fa-contao:before {content: "\\f26d";}
.fa-500px:before {content: "\\f26e";}
.fa-amazon:before {content: "\\f270";}
.fa-calendar-plus-o:before {content: "\\f271";}
.fa-calendar-minus-o:before {content: "\\f272";}
.fa-calendar-times-o:before {content: "\\f273";}
.fa-calendar-check-o:before {content: "\\f274";}
.fa-industry:before {content: "\\f275";}
.fa-map-pin:before {content: "\\f276";}
.fa-map-signs:before {content: "\\f277";}
.fa-map-o:before {content: "\\f278";}
.fa-map:before {content: "\\f279";}
.fa-commenting:before {content: "\\f27a";}
.fa-commenting-o:before {content: "\\f27b";}
.fa-houzz:before {content: "\\f27c";}
.fa-vimeo:before {content: "\\f27d";}
.fa-black-tie:before {content: "\\f27e";}
.fa-fonticons:before {content: "\\f280";}
.fa-reddit-alien:before {content: "\\f281";}
.fa-edge:before {content: "\\f282";}
.fa-credit-card-alt:before {content: "\\f283";}
.fa-codiepie:before {content: "\\f284";}
.fa-modx:before {content: "\\f285";}
.fa-fort-awesome:before {content: "\\f286";}
.fa-usb:before {content: "\\f287";}
.fa-product-hunt:before {content: "\\f288";}
.fa-mixcloud:before {content: "\\f289";}
.fa-scribd:before {content: "\\f28a";}
.fa-pause-circle:before {content: "\\f28b";}
.fa-pause-circle-o:before {content: "\\f28c";}
.fa-stop-circle:before {content: "\\f28d";}
.fa-stop-circle-o:before {content: "\\f28e";}
.fa-shopping-bag:before {content: "\\f290";}
.fa-shopping-basket:before {content: "\\f291";}
.fa-hashtag:before {content: "\\f292";}
.fa-bluetooth:before {content: "\\f293";}
.fa-bluetooth-b:before {content: "\\f294";}
.fa-percent:before {content: "\\f295";}
.fa-gitlab:before {content: "\\f296";}
.fa-wpbeginner:before {content: "\\f297";}
.fa-wpforms:before {content: "\\f298";}
.fa-envira:before {content: "\\f299";}
.fa-universal-access:before {content: "\\f29a";}
.fa-wheelchair-alt:before {content: "\\f29b";}
.fa-question-circle-o:before {content: "\\f29c";}
.fa-blind:before {content: "\\f29d";}
.fa-audio-description:before {content: "\\f29e";}
.fa-volume-control-phone:before {content: "\\f2a0";}
.fa-braille:before {content: "\\f2a1";}
.fa-assistive-listening-systems:before {content: "\\f2a2";}
.fa-asl-interpreting:before, .fa-american-sign-language-interpreting:before {content: "\\f2a3";}
.fa-deafness:before, .fa-hard-of-hearing:before, .fa-deaf:before {content: "\\f2a4";}
.fa-glide:before {content: "\\f2a5";}
.fa-glide-g:before {content: "\\f2a6";}
.fa-signing:before, .fa-sign-language:before {content: "\\f2a7";}
.fa-low-vision:before {content: "\\f2a8";}
.fa-viadeo:before {content: "\\f2a9";}
.fa-viadeo-square:before {content: "\\f2aa";}
.fa-snapchat:before {content: "\\f2ab";}
.fa-snapchat-ghost:before {content: "\\f2ac";}
.fa-snapchat-square:before {content: "\\f2ad";}
.fa-pied-piper:before {content: "\\f2ae";}
.fa-first-order:before {content: "\\f2b0";}
.fa-yoast:before {content: "\\f2b1";}
.fa-themeisle:before {content: "\\f2b2";}
.fa-google-plus-circle:before, .fa-google-plus-official:before {content: "\\f2b3";}
.fa-fa:before, .fa-font-awesome:before {content: "\\f2b4";}
.fa-handshake-o:before {content: "\\f2b5";}
.fa-envelope-open:before {content: "\\f2b6";}
.fa-envelope-open-o:before {content: "\\f2b7";}
.fa-linode:before {content: "\\f2b8";}
.fa-address-book:before {content: "\\f2b9";}
.fa-address-book-o:before {content: "\\f2ba";}
.fa-vcard:before, .fa-address-card:before {content: "\\f2bb";}
.fa-vcard-o:before, .fa-address-card-o:before {content: "\\f2bc";}
.fa-user-circle:before {content: "\\f2bd";}
.fa-user-circle-o:before {content: "\\f2be";}
.fa-user-o:before {content: "\\f2c0";}
.fa-id-badge:before {content: "\\f2c1";}
.fa-drivers-license:before, .fa-id-card:before {content: "\\f2c2";}
.fa-drivers-license-o:before, .fa-id-card-o:before {content: "\\f2c3";}
.fa-quora:before {content: "\\f2c4";}
.fa-free-code-camp:before {content: "\\f2c5";}
.fa-telegram:before {content: "\\f2c6";}
.fa-thermometer-4:before, .fa-thermometer:before, .fa-thermometer-full:before {content: "\\f2c7";}
.fa-thermometer-3:before, .fa-thermometer-three-quarters:before {content: "\\f2c8";}
.fa-thermometer-2:before, .fa-thermometer-half:before {content: "\\f2c9";}
.fa-thermometer-1:before, .fa-thermometer-quarter:before {content: "\\f2ca";}
.fa-thermometer-0:before, .fa-thermometer-empty:before {content: "\\f2cb";}
.fa-shower:before {content: "\\f2cc";}
.fa-bathtub:before, .fa-s15:before, .fa-bath:before {content: "\\f2cd";}
.fa-podcast:before {content: "\\f2ce";}
.fa-window-maximize:before {content: "\\f2d0";}
.fa-window-minimize:before {content: "\\f2d1";}
.fa-window-restore:before {content: "\\f2d2";}
.fa-times-rectangle:before, .fa-window-close:before {content: "\\f2d3";}
.fa-times-rectangle-o:before, .fa-window-close-o:before {content: "\\f2d4";}
.fa-bandcamp:before {content: "\\f2d5";}
.fa-grav:before {content: "\\f2d6";}
.fa-etsy:before {content: "\\f2d7";}
.fa-imdb:before {content: "\\f2d8";}
.fa-ravelry:before {content: "\\f2d9";}
.fa-eercast:before {content: "\\f2da";}
.fa-microchip:before {content: "\\f2db";}
.fa-snowflake-o:before {content: "\\f2dc";}
.fa-superpowers:before {content: "\\f2dd";}
.fa-wpexplorer:before {content: "\\f2de";}
.fa-meetup:before {content: "\\f2e0";}
.fa::before {
  font-family: FontAwesome;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  text-decoration: inherit;
  speak: none;
  display: inline-block;
  font-size: 13px;
  visibility: visible;
}
:root:not(.shortcut-icons) #shortcuts .fa::before {
  display: none;
}
:root.shortcut-icons #shortcuts .fa::before {
  font-size: 15px !important;
  margin-top: -3px !important;
  position: relative;
  top: 1px;
}
:root.shortcut-icons #shortcuts .fa, .menu-button .fa {
  font-size: 0;
  visibility: hidden;
}
:root.shortcut-icons .shortcut.brackets-wrap::after,
:root.shortcut-icons .shortcut.brackets-wrap::before {
  display: none;
}
:root.shortcut-icons #shortcuts a .fa,
.menu-button .fa,
.hide-reply-button .fa,
.hide-thread-button .fa {
  display: inline;
}
.fa-spin::before {
  -webkit-animation:spin 2s infinite linear;
  -moz-animation:spin 2s infinite linear;
  -o-animation:spin 2s infinite linear;
  animation:spin 2s infinite linear;
}
@-moz-keyframes spin {
  0% {-moz-transform:rotate(0deg);}
  100% {-moz-transform:rotate(359deg);}
}
@-webkit-keyframes spin {
  0% {-webkit-transform:rotate(0deg);}
  100% {-webkit-transform:rotate(359deg);}
}
@keyframes spin {
  0% {transform:rotate(0deg);}
  100% {transform:rotate(359deg);}
}
/* General */
.dialog {
  border: 1px solid;
  display: block;
  background-color: inherit;
}
.dialog:not(#qr):not(#thread-watcher):not(#header-bar) {
  box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
}
#qr,
#thread-watcher {
  box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.25);
}
.captcha-img,
.field {
  background-color: #FFF;
  border: 1px solid #CCC;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #333;
  font: 13px sans-serif;
  outline: none;
  transition: color .25s, border-color .25s;
}
.field::-moz-placeholder {
  color: #AAA;
  font-size: 13px;
  opacity: 1;
}
.captch-img:hover,
.field:hover {
  border-color: #999;
}
.field:hover, .field:focus, .field.focus {
  color: #000;
}
.field[disabled] {
  background-color: #F2F2F2;
  color: #888;
}
.field::-webkit-search-decoration {
  display: none;
}
.move {
  cursor: move;
  overflow: hidden;
}
label {
  cursor: pointer;
}
a[href="javascript:;"] {
  text-decoration: none;
}
.warning {
  color: red;
}
:root.sw-yotsuba #boardNavDesktop, :root.sw-yotsuba #boardNavMobile {
  display: none !important;
}
:root.hide-bottom-board-list $site$boardListBottom {
  display: none;
}
body.hasDropDownNav{
  margin-top: 5px;
}
:root:not(.keyboard-focus) a {
  outline: none;
}
.painted {
  border-radius: 3px;
  padding: 0px 2px;
}
[hidden] {
  display: none !important;
}
/* 4chan style fixes */
/* overrides 4chan CSS on div.opContainer, div.op */
:root.sw-yotsuba .opContainer, :root.sw-yotsuba .op {
  display: block;
  overflow: visible;
}
:root.sw-yotsuba .reply > .file > .fileText {
  margin: 0 20px;
}
:root.sw-yotsuba #arc-list span.quote {
  color: #789922;
}
:root.sw-yotsuba .fileText a {
  unicode-bidi: -moz-isolate;
  unicode-bidi: -webkit-isolate;
}
:root.sw-yotsuba #g-recaptcha {
  min-height: 78px;
  height: auto;
}
:root.sw-yotsuba:not(.js-enabled) #postForm {
  display: table;
}
:root.sw-yotsuba #captchaContainerAlt td:nth-child(2) {
  display: table-cell !important;
}
:root.sw-yotsuba canvas#tegaki-canvas {
  background: none;
}
/* Disable obnoxious captcha fade-in. */
:root.sw-yotsuba > body > div:last-of-type {
  transition: none !important;
}
/* Fix captcha scrolling to top of page. */
:root.sw-yotsuba > body > div[style*=" top: -10000px;"] {
  visibility: hidden !important;
}
/* Make long filenames wrap properly: https://github.com/ccd0/4chan-x/issues/1082 */
:root.sw-yotsuba .post > .file {
  /* currently nonstandard but may be added: https://lists.w3.org/Archives/Public/www-style/2016Mar/0352.html, https://bugzilla.mozilla.org/show_bug.cgi?id=1296042 */
  word-break: break-word;
}
:root.sw-yotsuba:not(.ua-webkit):not(.ua-blink) .fileText {
  word-wrap: break-word;
  max-width: calc(100vw - 90px);
}
:root.sw-yotsuba > body.is_catalog .thread > a > img {
  display: inline-block;
}
/* Links to NSFW boards */
:root.sw-yotsuba .nwsb {
  display: inline;
}
:root.sw-yotsuba .fileText {
  max-width: auto;
  white-space: normal;
}
/* Ads */
:root.sw-yotsuba .ad-cnt > *, :root.sw-yotsuba .adg-rects > *, :root.sw-yotsuba .bsa-cnt {
  height: auto !important;
}
:root.sw-yotsuba:not(.ads-loaded) hr.abovePostForm,
:root.sw-yotsuba:not(.ads-loaded) .adg-rects > hr,
:root.sw-yotsuba #adg-ol + hr,
:root.sw-yotsuba .danbo-slot:empty {
  display: none;
}
:root.sw-yotsuba .adg-rects {
  margin: 0;
  font-size: 0;
}
:root.sw-yotsuba div.center[style] {
  display: none !important;
}
/* Tinyboard / vichan conflicts */
#menu > .hide-thread-link {
  width: auto;
  height: auto;
  overflow: visible;
  background-image: none;
}
#menu label.entry {
  display: block;
}
#fourchanx-settings label {
  display: inline;
}
.intro a[href="javascript:;"],
#menu a {
  margin: 0;
}
.gal-buttons.gal-buttons a {
  font-size: inherit;
}
:root.sw-tinyboard.fixed.top-header:not(.autohide) .boardlist,
:root.sw-tinyboard.fixed.top-header:not(.autohide) .bar.top {
  position: static;
}
:root.sw-tinyboard.fixed.top-header:not(.autohide) div.pages.top {
  top: auto;
  bottom: 0;
}
:root.sw-tinyboard.fixed.top-header.autohide .boardlist,
:root.sw-tinyboard.fixed.top-header.autohide .bar.top {
  z-index: 3;
}
/* Tinyboard site style conflicts */
:root[data-host="fufufu.moe"].fixed.top-header:not(.autohide) div.pages.top {
  top: 26px;
  bottom: auto;
}
:root[data-host="merorin.com"].fixed.top-header:not(.autohide) span.settings {
  top: 26px;
}
:root[data-host="fufufu.moe"]:not(.fixed) #header-bar {
  margin-top: 38px;
}
:root[data-host="lainchan.org"]:not(.fixed) #header-bar {
  margin-top: 17px;
}
:root[data-host="smuglo.li"]:not(.fixed) #header-bar {
  margin-top: 8px;
}
/* Anti-autoplay */
audio.controls-added {
  display: block;
  margin: auto;
  white-space: normal;
}
:root.anti-autoplay div.embed {
  position: static;
  width: auto;
  height: auto;
  text-align: center;
}
:root.anti-autoplay .autoplay-removed {
  visibility: visible !important;
  min-width: 640px;
  min-height: 360px;
}
/* fixed, z-index */
#overlay,
#qp, #ihover,
#navlinks, .fixed #header-bar,
:root.float #updater,
:root.float #thread-stats,
#qr {
  position: fixed;
}
#overlay {
  z-index: 999;
}
#qp, #ihover {
  z-index: 60;
}
#menu, .gal-buttons {
  z-index: 50;
}
#updater, #thread-stats {
  z-index: 40;
}
:root.fixed #header-bar, #notifications {
  z-index: 35;
}
#a-gallery {
  z-index: 30;
}
#navlinks {
  z-index: 25;
}
#qr {
  z-index: 20;
}
#embedding {
  z-index: 11;
}
:root.fixed-watcher #thread-watcher {
  z-index: 10;
}
:root.fixed:not(.gallery-open) #header-bar:not(:hover) {
  z-index: 8;
}
#thread-watcher {
  z-index: 5;
}
/* Header */
.fixed.top-header body {
  padding-top: 2em;
}
.fixed.bottom-header body {
  padding-bottom: 2em;
}
.fixed #header-bar {
  right: 0;
  left: 0;
  padding: 3px 4px 4px;
  font-size: 12px;
}
.fixed.top-header #header-bar {
  top: 0;
}
.fixed.bottom-header #header-bar {
  bottom: 0;
}
#header-bar {
  border-width: 0;
  transition: all .1s .05s ease-in-out;
}
:root.fixed #header-bar {
  box-shadow: -5px 1px 10px rgba(0, 0, 0, 0.20);
}
:root.centered-links #shortcuts {
  width: 300px;
  text-align: right;
}
:root.centered-links #header-bar {
  text-align: center;
}
#custom-board-list {
  font-size: 13px;
  vertical-align: middle;
}
#full-board-list {
  vertical-align: middle;
}
:root.centered-links #custom-board-list {
  position: relative;
  left: 150px;
}
.fixed.top-header #header-bar {
  border-bottom-width: 1px;
}
.fixed.bottom-header #header-bar {
  box-shadow: 0 -1px 2px rgba(0, 0, 0, .15);
  border-top-width: 1px;
}
.fixed.bottom-header #header-bar .menu-button i {
  border-top: none;
  border-bottom: 6px solid;
}
.fixed #header-bar.autohide:not(:hover) {
  box-shadow: none;
  transition: all .8s .6s cubic-bezier(.55, .055, .675, .19);
}
.fixed.top-header #header-bar.autohide:not(:hover) {
  margin-bottom: -1em;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}
.fixed.bottom-header #header-bar.autohide:not(:hover) {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}
#scroll-marker {
  left: 0;
  right: 0;
  height: 10px;
  position: absolute;
}
#header-bar:not(.autohide) #scroll-marker {
  pointer-events: none;
}
#header-bar #scroll-marker {
  display: none;
}
.fixed #header-bar #scroll-marker {
  display: block;
}
.fixed.top-header #header-bar #scroll-marker {
  top: 100%;
}
.fixed.bottom-header #header-bar #scroll-marker {
  bottom: 100%;
}
#board-list a, #shortcuts a:not(.entry) {
  text-decoration: none;
  padding: 1px;
}
#shortcuts:empty {
  display: none;
}
.brackets-wrap::before {
  content: "\\00a0[";
}
.brackets-wrap::after {
  content: "]\\00a0";
}
.dead-thread,
.disabled:not(.replies-quoting-you) {
  opacity: .45;
}
#shortcuts {
  float: right;
}
:root.autohiding-scrollbar #shortcuts {
  margin-right: 12px;
}
.shortcut {
  margin-left: 3px;
  vertical-align: middle;
}
:root.shortcut-icons .native-settings {
  font-size: 0;
  color: transparent;
  display: inline-block;
  vertical-align: top;
  height: 12px;
  width: 14px;
  background: url('//s.4cdn.org/image/favicon.ico') 0px -1px no-repeat;
}
#navbotright,
#navtopright {
  display: none;
}
#toggleMsgBtn {
  display: none !important;
}
.current,
:root.sw-yotsuba div#boardNavDesktopFoot a.current {
  font-weight: bold;
}
@media (min-width: 1300px) {
  :root.sw-yotsuba.fixed:not(.centered-links) #header-bar {
    white-space: nowrap;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #board-list {
    -webkit-flex: auto;
    flex: auto;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list {
    display: -webkit-flex;
    display: flex;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) .hide-board-list-container {
    -webkit-flex: none;
    flex: none;
    margin-right: 5px;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList {
    -webkit-flex: auto;
    flex: auto;
    display: -webkit-flex;
    display: flex;
    width: 0px; /* XXX Fixes Edge not shrinking the board list below default size when needed */
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > a,
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > span:not(.space):not(.spacer) {
    -webkit-flex: none;
    flex: none;
    padding: .17em;
    margin: -.17em -.32em;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > span {
    pointer-events: none;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > span.space {
    -webkit-flex: 0 .63 .63em;
    flex: 0 .63 .63em;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > span.spacer {
    -webkit-flex: 0 .38 .38em;
    flex: 0 .38 .38em;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #shortcuts {
    float: initial;
    -webkit-flex: none;
    flex: none;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }
}
/* 4chan X link brackets */
.brackets-wrap::before {
  content: "[";
}
.brackets-wrap::after {
  content: "]";
}
/* Notifications */
#notifications {
  position: fixed;
  top: 0;
  height: 0;
  text-align: center;
  right: 0;
  left: 0;
  visibility: visible;
}
#notifications:empty {
  display: none;
}
:root.fixed.top-header:not(.gallery-open) #header-bar #notifications,
:root.fixed.top-header #header-bar.autohide #notifications {
  position: absolute;
  top: 100%;
}
.notification {
  color: #FFF;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
  border-radius: 2px;
  margin: 1px auto;
  width: 550px;
  max-width: 100%;
  position: relative;
  transition: all .25s ease-in-out;
}
.notification.error {
  background-color: hsla(0, 100%, 38%, .9);
}
.notification.warning {
  background-color: hsla(36, 100%, 38%, .9);
}
.notification.info {
  background-color: hsla(200, 100%, 38%, .9);
}
.notification.success {
  background-color: hsla(104, 100%, 38%, .9);
}
.notification a {
  color: white;
}
.notification > .close {
  padding: 7px;
  top: 0px;
  right: 5px;
  position: absolute;
}
.notification > .fa-times::before {
  font-size: 11px !important;
}
.message {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 6px 20px;
  max-height: 200px;
  width: 100%;
  overflow: auto;
  white-space: pre-line;
}
.message a {
  text-decoration: underline;
}
:root.tainted .report-error {
  display: none;
}
/* Settings */
:root.fourchan-x body {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#overlay {
  background-color: rgba(0, 0, 0, .5);
  display: -webkit-flex;
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
#fourchanx-settings {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0 0 15px rgba(0, 0, 0, .15);
  height: 600px;
  max-height: 100%;
  width: 900px;
  max-width: 100%;
  margin: auto;
  padding: 5px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}
#fourchanx-settings > nav {
  padding: 2px 2px 8px;
  display: -webkit-flex;
  display: flex;
}
#fourchanx-settings > nav a {
  text-decoration: underline;
}
#fourchanx-settings > nav a.close {
  text-decoration: none;
  padding: 0 2px;
  margin: 0;
}
.section-container {
  -webkit-flex: 1;
  flex: 1;
  position: relative;
  overflow: auto;
  padding-right: 5px;
  overscroll-behavior: contain;
}
.sections-list {
  -webkit-flex: 1;
  flex: 1;
}
.export, .import, .reset {
  cursor: pointer;
  text-decoration: none !important;
}
.tab-selected {
  font-weight: 700;
}
.section-sauce ul,
.section-advanced ul {
  list-style: none;
  margin: 0;
}
.section-sauce ul {
  padding: 8px;
}
.section-advanced ul {
  padding: 0px;
}
.section-sauce li,
.section-advanced li {
  padding-left: 4px;
}
.section-main ul {
  margin: 0;
  padding: 0 0 0 16px;
}
.section-main li {
  white-space: pre-line;
  list-style: disc;
}
.section-main li:not(:first-of-type) {
  margin-top: 4px;
}
.section-main label {
  text-decoration: underline;
}
div[data-checked="false"] > .suboption-list {
  display: none;
}
.suboption-list {
  position: relative;
}
.suboption-list::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: .7em;
  width: 0;
  height: 100%;
  border-left: 1px solid;
}
.suboption-list > div {
  position: relative;
  padding-left: 1.4em;
}
.suboption-list > div::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: .7em;
  width: .7em;
  height: .6em;
  border-left: 1px solid;
  border-bottom: 1px solid;
}
#fourchanx-settings .section-main p {
  margin: .5em 0 0;
}
.section-filter ul {
  padding: 0;
}
.section-filter li {
  margin: 10px 40px;
  list-style: disc;
}
.section-filter textarea {
  height: 500px;
}
.section-main a, .section-filter a, .section-advanced a {
  text-decoration: underline;
}
#sauce-doc-expand:not(:checked) ~ #sauce-doc {
  max-height: 130px;
  overflow: auto;
}
#sauce-doc > label {
  float: right;
  margin: 0 5px;
}
/* XXX for OneeChan */
#sauce-doc-expand + .riceCheck {
  display: none;
}
.section-sauce textarea {
  height: 430px;
}
.section-advanced .field[name="boardnav"] {
  width: 100%;
}
.section-advanced textarea {
  height: 150px;
}
.section-advanced textarea[name="archiveLists"],
.section-advanced textarea[name="externalCatalogURLs"],
.section-advanced textarea[name="knownBanners"] {
  height: 75px;
}
.section-advanced .archive-cell {
  min-width: 160px;
  text-align: center;
}
.section-advanced #archive-board-select {
  position: absolute;
}
.section-advanced .note {
  font-size: 0.8em;
  font-style: italic;
  margin-left: 10px;
}
.section-advanced .note code {
  font-style: normal;
  font-size: 11px;
}
.favicon-preview > img {
    vertical-align: middle;
}
.favicon-preview > img:nth-of-type(3n+1) {
    margin-left: 4px;
}
.section-keybinds .field {
  font-family: monospace;
}
#fourchanx-settings fieldset {
  border: 1px solid;
  border-radius: 3px;
  padding: 0.35em 0.625em 0.75em;
  margin: 0px 2px;
}
#fourchanx-settings legend {
  font-weight: 700;
  color: inherit;
}
#fourchanx-settings textarea {
  font-family: monospace;
  width: 100%;
  resize: vertical;
}
#fourchanx-settings code {
  color: #000;
  background-color: #FFF;
  padding: 0 2px;
}
#fourchanx-settings th {
  text-align: center;
  font-weight: bold;
}
#fourchanx-settings p {
  margin: 1em 0px;
}
#fourchanx-settings table {
  margin: auto;
}
/* Index */
:root.index-loading .navLinks:not(.json-index),
:root.index-loading .board:not(.json-index),
:root.index-loading .pagelist:not(.json-index),
:root.infinite-mode .pagelist,
:root.all-pages-mode .pagelist,
:root.catalog-mode .pagelist,
:root:not(.catalog-mode) .indexlink,
:root.catalog-mode .cataloglink,
:root:not(.catalog-mode) #hidden-label,
:root:not(.catalog-mode) #index-size {
  display: none;
}
#index-search {
  padding-right: 1.5em;
  width: 100px;
  transition: color .25s, border-color .25s, width .25s;
}
#index-search:focus,
#index-search[data-searching] {
  width: 200px;
}
#index-search-clear {
  color: gray;
  display: inline-block;
  position: relative;
  left: -1em;
  width: 0;
}
/* \`\`::-webkit-*'' selectors break selector lists on Firefox. */
#index-search::-webkit-search-cancel-button {
  display: none;
}
#index-search:not([data-searching]) + #index-search-clear {
  display: none;
}
#index-options {
  float: right;
}
#lastlong-options {
  display: inline-block;
  vertical-align: middle;
  height: 28px;
  margin: -14px 0;
}
#lastlong-options > input {
  padding: 0;
  border: 0 !important;
  text-align: center;
  background: transparent;
  display: block;
  font-size: 12px;
  height: 12px;
  width: 30px;
  margin: 1px 0;
}
.summary {
  text-decoration: none;
}
/* Catalog */
:root.catalog-mode .board {
  text-align: center;
}
.catalog-thread {
  display: inline-block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid transparent;
  word-wrap: break-word;
  vertical-align: top;
  position: relative;
}
/* overrides 4chan CSS on div.thread */
.catalog-thread.catalog-thread {
  margin: 2px;
}
.catalog-small > .catalog-thread {
  width: 165px;
  height: 320px;
}
.catalog-large > .catalog-thread {
  width: 270px;
  height: 410px;
}
:root.catalog-hover-expand .catalog-thread:hover {
  z-index: 1;
}
.catalog-container {
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  bottom: 0;
}
.catalog-container:not(:hover),
:root:not(.catalog-hover-expand) .catalog-container {
  overflow: hidden;
}
.catalog-post {
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  border: 1px solid transparent;
  padding-top: 20px;
}
/* overrides inline CSS from Index.cb.hoverAdjust */
:root:not(.catalog-hover-expand) .catalog-post {
  left: 0 !important;
  right: 0 !important;
}
/* overrides 4chan CSS on div.post */
.catalog-post.catalog-post {
  margin: -21px -1px -1px;
  overflow: visible;
}
.catalog-thread.noFile > * > .catalog-post {
  margin-top: -7px;
  padding-top: 6px;
}
:root.catalog-hover-expand .catalog-container:hover > .catalog-post {
  margin-left: -61px;
  margin-right: -61px;
}
:root.catalog-hover-expand .catalog-container:hover > * > :not(.catalog-replies) {
  padding-left: 2px;
  padding-right: 2px;
}
.catalog-link {
  display: block;
  position: relative;
}
.catalog-thumb {
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  vertical-align: top;
}
.catalog-thumb.spoiler-file {
  width: 100px;
  height: 100px;
}
.catalog-thumb.deleted-file {
  width: 127px;
  height: 13px;
  padding: 20px 11px;
}
.catalog-thumb.no-file {
  width: 77px;
  height: 13px;
  padding: 20px 36px;
}
.catalog-icons > img,
.catalog-stats > .menu-button {
  width: 1em;
  height: 1em;
  margin: 0;
  vertical-align: text-top;
  padding-left: 2px;
}
.catalog-stats > .menu-button {
  font-weight: normal;
}
.catalog-stats > .menu-button > i::before {
  line-height: 11px;
}
.catalog-stats {
  font-size: 10px;
  font-weight: 700;
  padding-top: 2px;
}
.catalog-stats > [title] {
  cursor: help;
}
.catalog-post > .postMessage {
  margin: 0;
  padding-bottom: .3em;
}
.catalog-container:not(:hover) > * > .file,
.catalog-container:not(:hover) > * > .postInfo > :not(.subject),
.catalog-container:not(:hover) > * > .catalog-replies,
.catalog-container:not(:hover) .extra-linebreak,
.catalog-container:not(:hover) .abbr,
:root:not(.catalog-hover-expand) .catalog-container > * > .file,
:root:not(.catalog-hover-expand) .catalog-container > * > .postInfo > :not(.subject),
:root:not(.catalog-hover-expand) .catalog-container > * > .catalog-replies,
:root:not(.catalog-hover-expand) .catalog-container .extra-linebreak,
:root:not(.catalog-hover-expand) .catalog-container .abbr,
.catalog-thread > .catalog-container > :not(.catalog-post),
.catalog-post > .file > :not(.fileText),
.catalog-post > * > .fileText > :not(:first-child),
.catalog-post > .postInfo > :not(.subject):not(.nameBlock):not(.dateTime),
.catalog-post > .postInfo > .nameBlock > .contact-links,
.catalog-post > * > * > .posteruid,
.catalog-post > * > * > .postJumper,
:root.bottom-backlinks .catalog-post > .container,
.post:not(.catalog-post) > .catalog-link,
.post:not(.catalog-post) > .catalog-stats,
.post:not(.catalog-post) > .catalog-replies {
  display: none;
}
.catalog-post > .file {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  min-height: 20px;
  background-color: inherit;
}
.catalog-post > * > .fileText {
  position: relative;
  padding: 2px;
  background-color: inherit;
}
.catalog-small .catalog-post > * .fileText {
  font-size: 10px;
}
.catalog-post > * > .fileText:not(:hover) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.catalog-post > * > .fileText:hover {
  z-index: 1;
}
/* overrides 4chan CSS on div.post div.postInfo */
.catalog-post > .postInfo.postInfo {
  width: auto;
}
.catalog-post > * > .subject {
  display: block;
}
.catalog-post > * > .dateTime {
  display: inline-block;
  font-style: italic;
}
:root.catalog-hover-expand .catalog-container:hover > * > * > .nameBlock,
:root.catalog-hover-expand .catalog-container:hover > * > * > .dateTime,
:root.catalog-hover-expand .catalog-container:hover > * > .postMessage:not(:empty) {
  padding-top: .3em;
}
.catalog-post .extra-linebreak {
  content: ''; /* makes this work in Blink/WebKit */
  display: block;
  margin-top: .3em;
}
.catalog-reply {
  text-align: left;
  white-space: nowrap;
  border-top: 1px solid transparent;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: stretch;
  align-items: stretch;
}
.catalog-reply > * {
  padding: 3px;
  overflow: hidden;
  -webkit-flex: none;
  flex: none;
}
.catalog-reply > span {
  font-style: italic;
  font-weight: bold;
}
.catalog-reply-excerpt {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
}
.catalog-post .prettyprinted {
  max-width: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.catalog-post .MathJax_Display {
  text-align: center !important;
}
.catalog-container:not(:hover) .exif,
:root:not(.catalog-hover-expand) .catalog-container .exif {
  display: none !important;
}
.catalog-post > * > .exif {
  border-collapse: collapse;
}
:root.catalog-hover-expand .catalog-container:hover .exif[style*="display: block;"] {
  display: inline-block !important;
}
.catalog-post > * > .exif,
.catalog-post > * > .exif > tbody {
  background-color: inherit;
}
.catalog-post > * > .exif,
.catalog-post > * > .exif td {
  min-width: 0;
}
.catalog-post > * > .exif td {
  padding-top: 1px;
}
:root.hats-enabled .catalog-thread::after {
  content: '';
  pointer-events: none;
  position: absolute;
  background-size: contain;
}
:root.hats-enabled .catalog-small > .catalog-thread::after {
  left: -8px;
  top: -59px;
  width: 96px;
  height: 96px;
}
:root.hats-enabled:not(.werkTyme) .catalog-small > .catalog-thread:not(.noFile)::after {
  left: calc(67px - .3px * var(--tn-w));
}
:root.hats-enabled .catalog-large > .catalog-thread::after {
  left: -15px;
  top: -98px;
  width: 160px;
  height: 160px;
}
:root.hats-enabled:not(.werkTyme) .catalog-large > .catalog-thread:not(.noFile)::after {
  left: calc(110px - .5px * var(--tn-w));
}
/* Copy Text Link's textarea element */
textarea.copy-text-element {
  height: 0;
  width: 0;
  position: absolute;
  top: -10000px;
}
/* Announcement Hiding */
:root.hide-announcement $site$psa {
  display: none;
}
.hide-announcement-button {
  opacity: 0.4;
  float: left;
}
/* Unread */
.unread-line {
  margin: 0;
  border-color: rgb(255,0,0);
}
.unread-line + br {
  display: none;
}
.unread-mark-read {
  float: right;
  clear: both;
  width: 100%;
  text-align: right;
}
:not(.unread-thread) > .unread-mark-read {
  display: none;
}
/* Thread Updater */
#updater {
  background: none;
  border: none;
  box-shadow: none;
}
#updater > .move {
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  z-index: -1;
}
#updater > div:last-child {
  text-align: center;
}
#updater input[type="number"] {
  width: 4em;
}
:root.float #updater {
  padding: 0px 3px;
}
:root:not(.float).shortcut-icons #updater {
  display: inline-block;
  min-width: 12pt;
  text-align: right;
}
.new {
  color: limegreen;
}
#update-status:not(.empty) + #update-timer:not(.empty):not(.loading) {
  margin-left: 5px;
}
#update-timer {
  cursor: pointer;
}
/* Thread Watcher */
#thread-watcher {
  position: absolute;
}
#thread-watcher {
  padding-bottom: 3px;
  padding-left: 3px;
  white-space: nowrap;
  min-width: 146px;
}
#watched-threads {
  overflow-x: hidden;
  overflow-y: auto;
}
#thread-watcher .refresh {
  padding: 0px 3px;
}
:root.fixed-watcher #thread-watcher {
  position: fixed;
}
:root.fixed-watcher #watched-threads {
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 85vh;
  max-height: calc(100vh - 75px);
}
:root:not(.fixed-watcher) #watched-threads:not(:hover) {
  max-height: 210px;
  overflow-y: hidden;
}
#thread-watcher > .move {
  padding-top: 3px;
}
#watched-threads > div {
  padding-left: 3px;
  padding-right: 3px;
}
#watched-threads .watcher-link {
  max-width: 250px;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
#watched-threads .watcher-page,
#watched-threads .watcher-unread {
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-right: 2px;
}
#watched-threads .watcher-title {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
}
#watched-threads .watcher-title:not(:first-child) {
  margin-left: 2px;
}
.replies-quoting-you > a, #watcher-link.replies-quoting-you, .last-page > a > .watcher-page {
  color: #F00;
}
#thread-watcher a {
  text-decoration: none;
}
#thread-watcher .move > .close {
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 0px 4px;
}
.watch-thread-link {
  padding-top: 18px;
  width: 18px;
  height: 0px;
  display: inline-block;
  background-repeat: no-repeat;
  opacity: 0.2;
  position: relative;
  top: 1px;
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(0,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
.watch-thread-link.watched {
  opacity: 1;
}
/* Thread Stats */
#thread-stats {
  background: none;
  border: none;
  box-shadow: none;
}
:root.float #thread-stats > .move > :not(#page-count) {
  pointer-events: none;
}
:root.float #thread-stats {
  padding: 0px 3px;
}
#page-count {
  cursor: pointer;
}
/* Quote */
.hashlink::before {
  content: ' ';
  visibility: hidden;
}
.inline + .hashlink {
  display: none !important;
}
:root.resurrect-quotes .deadlink {
  text-decoration: none !important;
}
.catalog-post .qmark-ct {
  display: none;
}
.backlink.deadlink:not(.forwardlink),
.quotelink.deadlink:not(.forwardlink) {
  text-decoration: underline !important;
}
:root:not(.catalog-mode) .inlined {
  opacity: .5;
}
#qp input, .forwarded {
  display: none;
}
.quotelink.forwardlink,
.backlink.forwardlink {
  text-decoration: none;
  border-bottom: 1px dashed;
}
.filtered {
  text-decoration: underline line-through;
}
:root.hide-backlinks .backlink.filtered,
:root.hide-backlinks .backlink.filtered + .hashlink.filtered {
  display: none;
}
.postNum + .container::before {
  content: " ";
}
:root.bottom-backlinks .container {
  display: block;
  clear: both;
  margin: 0 4px;
}
:root.bottom-backlinks .backlink {
  font-size: 90%;
}
.inline {
  border: 1px solid;
  display: table;
  margin: 2px 0;
}
.container ~ .inline {
  margin-left: 20px;
}
:root.catalog-mode .inline {
  display: none;
}
.inline .post {
  border: 0 !important;
  background-color: transparent !important;
  display: table !important;
  margin: 0 !important;
  padding: 1px 2px !important;
}
#qp > .opContainer::after {
  content: '';
  clear: both;
  display: table;
}
#qp .post {
  border: none;
  margin: 0;
  padding: 2px 2px 5px;
}
#qp img {
  max-height: 80vh;
  max-width: 50vw;
}
/* Quote Threading */
.threadContainer {
  margin-left: 20px;
  border-left: 1px solid rgba(128,128,128,.3);
}
.threadOP {
  clear: both;
}
/* File */
.fileText-original,
.fnswitch:hover > .fntrunc,
.fnswitch:not(:hover) > .fnfull,
.expanded-image > .post > .file > .fileThumb > video[data-md5],
.expanded-image > .post > .file > .fileThumb > img[data-md5] {
  display: none;
}
.full-image[data-file-i-d] {
  display: none;
  cursor: pointer;
}
.expanded-image > .post > .file > .fileThumb > .full-image {
  display: inline;
}
.expanded-image {
  clear: left;
}
.expanding {
  opacity: .5;
}
:root.fit-height .full-image {
  max-height: 100vh;
}
:root.fit-height.fixed .full-image {
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 93vh;
  max-height: calc(100vh - 35px);
}
:root.fit-width .full-image {
  max-width: 100%;
}
:root.ua-gecko.fit-width .full-image {
  width: 100%;
}
.fileThumb > .warning {
  clear: both;
}
#ihover {
  pointer-events: none;
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 95vh;
  max-height: calc(100vh - 25px);
  max-width: 100vw;
}
/* WEBM Metadata */
.webm-title > a::before {
  content: "title";
  text-decoration: underline;
}
.webm-title.loading > a::after {
  content: "...";
}
.webm-title.error > a:hover::before,
.webm-title.error > a:focus::before {
  content: "error";
  text-decoration: none;
}
.webm-title > span {
  cursor: text;
}
.webm-title.not-found > span::before {
  content: "not found";
}
.webm-title:not(:hover):not(:focus) > span,
.webm-title:hover > span + a,
.webm-title:focus > span + a {
  display: none;
}
/* Volume control */
input[name="Default Volume"] {
  width: 4em;
  height: 1ex;
  vertical-align: middle;
  margin: 0px;
}
/* Fappe and Werk Tyme */
:root.fappeTyme $site$replyOriginal.noFile,
:root.fappeTyme $site$replyOriginal.noFile + br {
  display: none;
}
:root.werkTyme $site$thumbLink,
:root.werkTyme $site$file$thumb,
:root.werkTyme .catalog-thumb:not(.deleted-file):not(.no-file),
:root:not(.werkTyme) .werkTyme-filename {
  display: none;
}
.werkTyme-filename {
  font-weight: bold;
  font-size: 110%;
}
:root.werkTyme .catalog-link {
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  padding: 8px;
  text-align: center;
}
:root.werkTyme .catalog-thumb {
  box-shadow: none;
  padding: 0;
  vertical-align: middle;
}
.indicator {
  background: rgba(255,0,0,0.8);
  font-weight: bold;
  display: inline-block;
  min-width: 9px;
  padding: 0px 2px;
  margin: 0 1px;
  text-align: center;
  color: white;
  border-radius: 2px;
  cursor: pointer;
}
:root:not(.fappeTyme) #shortcut-fappe,
:root:not(.werkTyme) #shortcut-werk {
  display: none;
}
/* Index/Reply Navigation */
#navlinks {
  font-size: 16px;
  top: 25px;
  right: 10px;
}
:root.catalog-mode #navlinks {
  display: none;
}
/* Highlighting */
.qphl {
  outline: 2px solid rgba(216, 94, 49, .8);
}
:root.highlight-you .quotesYou$site$highlightable$op,
:root.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(221, 0, 0, .8);
}
:root.highlight-own .yourPost$site$highlightable$op,
:root.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(221, 0, 0, .8);
}
.filter-highlight$site$highlightable$op,
.filter-highlight$site$highlightable$reply {
  box-shadow: inset 5px 0 rgba(221, 0, 0, .5);
}
:root.highlight-own .yourPost > $site$sideArrows,
:root.highlight-you .quotesYou > $site$sideArrows,
.filter-highlight > $site$sideArrows {
  color: rgba(221, 0, 0, .8);
}
:root.highlight-own .yourPost$site$highlightable$op::after,
:root.highlight-you .quotesYou$site$highlightable$op::after,
.filter-highlight$site$highlightable$op::after {
  content: "";
  display: block;
  clear: both;
}
:root:not(.werkTyme) .catalog-thread.filter-highlight .catalog-thumb,
:root.werkTyme .catalog-thread.filter-highlight:not(:hover),
:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.filter-highlight,
:root.werkTyme.catalog-hover-expand .catalog-thread.filter-highlight > .catalog-container:hover > .catalog-post,
:root.catalog $site$catalog$thread.filter-highlight$site$highlightable$catalog {
  box-shadow: 0 0 3px 3px rgba(255, 0, 0, .5);
}
:root:not(.werkTyme) .catalog-thread.watched .catalog-thumb,
:root:root.werkTyme .catalog-thread.watched:not(:hover),
:root:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.watched,
:root.werkTyme.catalog-hover-expand .catalog-thread.watched > .catalog-container:hover > .catalog-post {
  border: 2px solid rgba(255, 0, 0, .75);
}
/* Spoiler text */
:root.reveal-spoilers $site$spoiler,
:root.reveal-spoilers $site$spoiler > a {
  color: white !important;
}
:root.reveal-spoilers .removed-spoiler::before {
  content: "[spoiler]";
}
:root.reveal-spoilers .removed-spoiler::after {
  content: "[/spoiler]";
}
/* Thread & Reply Hiding */
.hide-thread-button,
.hide-reply-button {
  float: left;
  margin-right: 4px;
  padding: 2px;
}
$site$infoRoot a.hide-reply-button {
  margin-right: 6px;
  padding: 0;
}
.replacedSideArrows {
  float: left;
}
.hide-thread-button:not(:hover),
.hide-reply-button:not(:hover) {
  opacity: 0.4;
}
.threadContainer .hide-reply-button {
  margin-left: 2px !important;
  position: relative;
  left: 1px;
}
.hide-thread-button {
  margin-top: -1px;
  width: 11px;
}
.stub ~ :not(.threadDivider) {
  display: none !important;
}
.stub input {
  display: inline-block;
}
$site$thread[hidden] + hr {
  display: none;
}
:root.reply-hide $site$sideArrows {
  display: none;
}
:root.sw-yotsuba.thread-hide .party-hat {
  left: 19px;
}
/* Anonymize */
:root.anonymize $site$info$name,
:root.sw-yotsuba.anonymize .post-author:not([class*=capcode]) {
  font-size: 0;
}
:root.anonymize $site$info$tripcode,
:root.sw-yotsuba.anonymize .n-pu {
  display: none;
}
:root.anonymize $site$info$name::before,
:root.sw-yotsuba.anonymize .post-author:not([class*=capcode])::before {
  content: "Anonymous";
  font-size: 10pt;
}
:root.sw-yotsuba.anonymize .flashListing .name::before,
:root.sw-yotsuba.anonymize .post-last > .post-author:not([class*=capcode])::before {
  font-size: 9pt;
}
/* QR */
:root.hide-original-post-form #togglePostFormLink,
#qr.autohide:not(.focus):not(:hover):not(:active) > form,
:root.thread-view #qr:not(.show-new-thread-option) select[data-name="thread"],
#file-n-submit:not(.has-file) #qr-filerm {
  display: none;
}
:root.hide-original-post-form #postForm {
  display: none !important;
}
#qr select,
#qr-filename-container > a,
.remove,
.captcha-img {
  cursor: pointer;
}
#qr {
  position: fixed;
  padding: 1px;
  border: 1px solid transparent;
  min-width: 300px;
  border-radius: 3px 3px 0 0;
}
#qr > form {
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 85vh;
  max-height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
}
#qrtab {
  border-radius: 3px 3px 0 0;
}
#qrtab {
  margin-bottom: 1px;
}
#qr .close {
  float: right;
  padding: 0 3px;
}
.qr-link-container {
  text-align: center;
  margin: 16px 0;
}
.qr-link-container-bottom {
  width: 200px;
  position: absolute;
  left: -100px;
  margin-left: 50%;
  text-align: center;
}
.qr-link {
  border-radius: 3px;
  padding: 6px 10px 5px;
  font-weight: bold;
  vertical-align: middle;
  border-style: solid;
  border-width: 1px;
  font-size: 10pt;
}
.qr-link-container + #togglePostFormLink {
  font-size: 10pt;
  font-weight: normal;
  margin: -8px 0 3.5px;
}
.persona {
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.persona .field {
  -webkit-flex: 1;
  flex: 1;
  width: 0;
}
#qr.forced-anon input[data-name="name"]:not(.force-show),
#qr.forced-anon input[data-name="sub"]:not(.force-show),
#qr.reply-to-thread input[data-name="sub"]:not(.force-show),
body:not(.board_f) #qr select[name="filetag"],
#qr.reply-to-thread select[name="filetag"],
#qr:not(.has-sjis) #sjis-toggle,
#qr:not(.has-math) #tex-preview-button,
#qr.tex-preview .textarea > :not(#tex-preview),
#qr:not(.tex-preview) #tex-preview {
  display: none;
}
.persona button {
  -webkit-flex: 0 0 23px;
  flex: 0 0 23px;
  -webkit-align-self: stretch;
  align-self: stretch;
  border: 1px solid #BBB;
  padding: 0;
  background: linear-gradient(to bottom, #F8F8F8, #DCDCDC) no-repeat;
  color: #000;
}
#qr.sjis-preview #sjis-toggle, #qr.tex-preview #tex-preview-button {
  background: #DCDCDC;
}
#sjis-toggle, #qr.sjis-preview textarea.field {
  font-family: "IPAMonaPGothic","Mona","MS PGothic",monospace;
  font-size: 16px;
  line-height: 17px;
}
#tex-preview-button {
  font-size: 10px;
}
#tex-preview {
  white-space: pre-line;
}
#qr textarea.field {
  height: 14.8em;
  min-height: 9em;
}
#qr.has-captcha textarea.field {
  height: 9em;
}
input.field.tripped:not(:hover):not(:focus) {
  color: transparent !important;
  text-shadow: none !important;
}
#qr textarea {
  min-width: 300px;
  resize: both;
}
.field {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0px;
  padding: 2px 4px 3px;
}
#qr label input[type="checkbox"] {
  position: relative;
  top: 2px;
}
/* Recaptcha v2 */
#qr .captcha-root {
  position: relative;
}
#qr .captcha-container > div {
  margin: auto;
  width: 304px;
}
/* XXX scrollable with scroll bar hidden; prevents scroll on space press */
:root.ua-blink #qr .captcha-container > div,
:root.ua-edge #qr .captcha-container > div {
  overflow: hidden;
}
:root.ua-blink #qr .captcha-container > div > div:first-of-type,
:root.ua-edge #qr .captcha-container > div > div:first-of-type {
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 30px;
  height: 99%;
  width: 100%;
}
#qr .captcha-counter {
  display: block;
  width: 100%;
  text-align: center;
  pointer-events: none;
}
#qr.captcha-open .captcha-counter {
  position: absolute;
  bottom: 3px;
}
#qr .captcha-counter > a {
  pointer-events: auto;
  display: inline-block; /* XXX https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8851747/ */
}
#qr:not(.captcha-open) .captcha-counter > a {
  display: block;
  width: 100%;
}
#qr.captcha-v2 #qr-captcha-iframe {
  width: 302px;
  height: 423px;
  border: 0;
  display: block;
  margin: auto;
}
.goog-bubble-content {
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
}
.goog-bubble-content iframe {
  position: static !important;
}
/* File Input, Submit Button, Oekaki */
#file-n-submit, #qr .oekaki {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: stretch;
  align-items: stretch;
  height: 25px;
  margin-top: 1px;
}
#file-n-submit > input, #qr-draw-button {
  background: linear-gradient(to bottom, #F8F8F8, #DCDCDC) no-repeat;
  border: 1px solid #BBB;
  border-radius: 2px;
  height: 100%;
}
#qr-file-button, #qr-draw-button {
  width: 15%;
}
#file-n-submit input[type="submit"] {
  width: 25%;
}
#qr-filename-container {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  position: relative;
  padding: 1px;
}
input#qr-filename {
  border: none !important;
  background: none !important;
  outline: none;
}
#qr-filename,
.has-file #qr-no-file {
  display: none;
}
#qr-no-file,
.has-file #qr-filename {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0px; /* XXX Fixes filename not shrinking to allow space for buttons in Edge */
  display: inline-block;
  padding: 0;
  padding-left: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#qr-no-file {
  color: #AAA;
}
#qr .oekaki.has-file {
  display: none;
}
#qr .oekaki > label {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  height: 100%;
}
#qr .oekaki > label > span {
  margin: 0 3px;
}
#qr .oekaki > label > input {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0;
  height: 100%;
}
#qr .oekaki-bg {
  position: relative;
  display: inline-block;
  height: 100%;
  width: 10%;
  margin-left: 3px;
}
#qr .oekaki-bg > * {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
}
#qr .oekaki-bg > :not([name="oekaki-bgcolor"]) {
  z-index: 1;
}
#qr [name="oekaki-bgcolor"] {
  height: 100%;
  width: 100%;
  border: none;
  padding: 0;
}
#qr [name="oekaki-bg"]:not(:checked) ~ [name="oekaki-bgcolor"] {
  visibility: hidden;
}
#qr input[type="file"] {
  visibility: hidden;
  position: absolute;
}
/* Spoiler Checkbox, QR Icons */
#qr-filename-container > label, #qr-filename-container > a {
  -webkit-flex: none;
  flex: none;
  margin: 0;
  margin-right: 3px;
}
#qr:not(.has-spoiler) #qr-spoiler-label,
#file-n-submit:not(.has-file) #qr-spoiler-label,
.has-file #paste-area,
.has-file #url-button,
#file-n-submit:not(.custom-cooldown) #custom-cooldown-button {
  display: none;
}
#qr-filename-container > label {
  position: relative;
}
#qr-filename-container input[type="checkbox"] {
  margin: 0;
}
.checkbox-letter {
  font-size: 13px;
  font-weight: bold;
}
#qr-filename-container label:not(:hover) > input[type="checkbox"]:not(:focus):not(:checked),
#qr-filename-container label:not(:hover) > input[type="checkbox"]:not(:focus):not(:checked) ~ :not(.checkbox-letter),
#qr-filename-container label:hover > .checkbox-letter,
input[type="checkbox"]:focus ~ .checkbox-letter,
input[type="checkbox"]:checked ~ .checkbox-letter {
  /* not displayed but still focusable */
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.checkbox-letter, #paste-area, #url-button, #custom-cooldown-button, #dump-button {
  opacity: 0.6;
}
#paste-area {
  font-size: 0;
}
#paste-area:focus {
  opacity: 1;
}
#custom-cooldown-button.disabled {
  opacity: 0.27;
}
/* Thread and Flash Tag Select */
#qr select {
  background: white;
  border: 1px solid #CCC;
}
#qr select[data-name="thread"] {
  float: right;
}
#qr > form > select {
  margin-top: 1px;
}
/* Dumping UI */
.dump #dump-list-container {
  display: block;
}
#dump-list-container {
  display: none;
  position: relative;
  overflow-y: hidden;
  margin-top: 1px;
}
#dump-list {
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
  width: 248px;
  max-height: 248px;
  min-height: 90px;
  max-width: 100%;
  min-width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
#dump-list:hover {
  overflow-x: auto;
}
.qr-preview {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  counter-increment: thumbnails;
  cursor: move;
  display: inline-block;
  height: 90px;
  width: 90px;
  padding: 2px;
  opacity: .5;
  overflow: hidden;
  position: relative;
  text-shadow: 0 0 2px #000;
  -webkit-transition: opacity .25s ease-in-out, -webkit-transform .25s ease-in-out;
  transition: opacity .25s ease-in-out, transform .25s ease-in-out, -webkit-transform .25s ease-in-out;
  vertical-align: top;
  background-size: cover;
  -webkit-flex: none;
  flex: none;
}
.qr-preview:hover,
.qr-preview:focus {
  opacity: .9;
}
.qr-preview::before {
  content: counter(thumbnails);
  color: #fff;
  position: absolute;
  top: 3px;
  right: 3px;
  text-shadow: 0 0 3px #000, 0 0 8px #000;
}
.qr-preview#selected {
  opacity: 1;
}
.qr-preview.drag {
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  -webkit-transform: scale(.8);
  transform: scale(.8);
}
.qr-preview.over {
  border-color: #fff;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0.9;
  z-index: 10;
}
.qr-preview > span {
  color: #fff;
}
.remove {
  background: none;
  color: #e00;
  padding: 1px;
}
a:only-of-type > .remove {
  display: none;
}
.remove:hover::after {
  content: " Remove";
}
.qr-preview:not(.has-file) label,
#qr:not(.has-spoiler) .qr-preview-spoiler {
  display: none;
}
.qr-preview > label {
  background: rgba(0,0,0,.5);
  color: #fff;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  text-align: center;
}
.qr-preview > label > input {
  margin: 0;
}
#add-post {
  cursor: pointer;
  font-size: 2em;
  position: absolute;
  bottom: 20px;
  right: 10px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.textarea {
  position: relative;
  display: -webkit-flex;
  display: flex;
}
#char-count {
  color: #000;
  background: hsla(0, 0%, 100%, .5);
  font-size: 8pt;
  position: absolute;
  bottom: 1px;
  right: 1px;
  pointer-events: none;
}
#char-count.warning {
  color: red;
}
/* Menu */
.menu-button:not(.fa-bars) {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
#header-bar .menu-button i {
  border-top:   6px solid;
  border-right: 4px solid transparent;
  border-left:  4px solid transparent;
  display: inline-block;
  margin: 2px;
  vertical-align: middle;
}
.postInfo > .menu-button,
#thread-watcher .menu-button {
  width: 18px;
  height: 15px;
  text-align: center;
}
#menu {
  position: fixed;
  outline: none;
  font-weight: normal;
}
#menu, .submenu {
  border-radius: 3px;
  padding-top: 1px;
  padding-bottom: 3px;
}
.entry {
  cursor: pointer;
  display: block;
  outline: none;
  padding: 2px 10px;
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  min-width: 70px;
  text-align: left;
  text-shadow: none;
  font-size: 10pt;
}
.left>.entry.has-submenu {
  padding-right: 17px !important;
}
.entry input[type="checkbox"],
.entry input[type="radio"] {
  margin: 0px;
  position: relative;
  top: 2px;
}
.entry input[type="number"] {
  width: 4.5em;
}
.entry.has-shortcut-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.entry .shortcut-text {
  opacity: 0.5;
  font-size: 70%;
  margin-left: 5px;
}
.has-submenu::after {
  content: "";
  border-left: .5em solid;
  border-top: .3em solid transparent;
  border-bottom: .3em solid transparent;
  display: inline-block;
  margin: .3em;
  position: absolute;
  right: 3px;
}
.left .has-submenu::after {
  border-left: 0;
  border-right: .5em solid;
}
.submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: -1px;
  margin-left: 0px;
  margin-top: -2px;
}
.focused > .submenu {
  display: block;
}
.imp-exp-result {
  position: absolute;
  text-align: center;
  margin: auto;
  right: 0px;
  left: 0px;
  width: 200px;
}
/* Custom Board Titles */
.boardTitle, .boardSubtitle {
  white-space: pre-line;
}
.boardTitle[contenteditable="true"],
.boardSubtitle[contenteditable="true"] {
  cursor: text !important;
}
/* Embedding */
.embedder:not(.embedded) > span {
  display: none;
}
#embedding {
  padding: 1px 4px 1px 4px;
  position: fixed;
}
#embedding.empty {
  display: none;
}
#embedding > div:first-child {
  display: -webkit-flex;
  display: flex;
}
#embedding .move {
  -webkit-flex: 1;
  flex: 1;
}
#embedding .jump {
  margin: -1px 4px;
  text-decoration: none;
}
/* Gallery */
#a-gallery {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  background: rgba(0,0,0,0.7);
}
.gal-viewport {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: stretch;
  align-items: stretch;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
}
.gal-thumbnails {
  -webkit-flex: 0 0 150px;
  flex: 0 0 150px;
  overflow-y: auto;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  align-items: stretch;
  text-align: center;
  background: rgba(0,0,0,.5);
  border-left: 1px solid #222;
}
.gal-hide-thumbnails .gal-thumbnails {
  display: none;
}
.gal-thumb img,
.gal-thumb video {
  max-width: 125px;
  max-height: 125px;
  height: auto;
  width: auto;
}
.gal-thumb {
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 3px;
  line-height: 0;
  transition: background .2s linear;
}
.gal-highlight {
  background: rgba(0, 190, 255,.8);
}
.gal-prev {
  border-right: 1px solid #222;
}
.gal-next {
  border-left: 1px solid #222;
}
.gal-prev,
.gal-next {
  -webkit-flex: 0 0 20px;
  flex: 0 0 20px;
  position: relative;
  cursor: pointer;
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.3);
}
.gal-prev:hover,
.gal-next:hover {
  opacity: 1;
}
.gal-prev::after,
.gal-next::after {
  position: absolute;
  top: 48.6%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  display: inline-block;
  border-top: 11px solid transparent;
  border-bottom: 11px solid transparent;
  content: "";
}
.gal-prev::after {
  border-right: 12px solid #fff;
  right: 5px;
}
.gal-next::after {
  border-left: 12px solid #fff;
  right: 3px;
}
.gal-image {
  -webkit-flex: 1 0 auto;
  flex: 1 0 auto;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  overflow: hidden;
  /* Flex > Non-Flex child max-width and overflow fix (Firefox only?) */
  width: 1%;
}
:root:not(.gal-fit-height):not(.gal-pdf) .gal-image {
  overflow-y: scroll !important;
}
:root:not(.gal-fit-width):not(.gal-pdf) .gal-image {
  overflow-x: scroll !important;
}
.gal-image a {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  margin: auto;
  line-height: 0;
  max-width: 100%;
}
:root.gal-pdf .gal-image a {
  width: 100%;
  height: 100%;
}
.gal-image img,
.gal-image video {
  -webkit-flex: none;
  flex: none;
}
.gal-fit-width .gal-image img,
.gal-fit-width .gal-image video {
  max-width: 100%;
}
.gal-fit-height .gal-image img,
.gal-fit-height .gal-image video {
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 95vh;
  max-height: calc(100vh - 25px);
}
.gal-image iframe {
  width: 100%;
  height: 100%;
}
.gal-buttons {
  font-size: 2em;
  margin-right: 3px;
  padding-left: 7px;
  padding-right: 7px;
  top: 5px;
}
:root.gal-pdf .gal-buttons {
  top: 40px;
  background: rgba(0,0,0,0.6) !important;
  border-radius: 3px;
}
.gal-buttons a {
  color: #ffffff;
  text-shadow: 0px 0px 1px #000000;
}
.gal-buttons i {
  display: inline-block;
  margin: 2px;
  position: relative;
}
.gal-start i {
  border-left:   10px solid;
  border-top:    6px solid transparent;
  border-bottom: 6px solid transparent;
  bottom: 1px;
}
.gal-stop i {
  border: 5px solid;
  bottom: 2px;
}
.gal-buttons.gal-playing > .gal-start,
.gal-buttons:not(.gal-playing) > .gal-stop {
  display: none;
}
.gal-buttons .menu-button i {
  border-top:   10px solid;
  border-right:  6px solid transparent;
  border-left:   6px solid transparent;
  bottom: 2px;
  vertical-align: baseline;
}
.gal-labels {
  position: fixed;
  bottom: 6px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}
:root:not(.show-sauce) .gal-sauce {
  display: none;
}
.gal-name,
.gal-count,
.gal-sauce {
  background: rgba(0,0,0,0.6) !important;
  border-radius: 3px;
  padding: 1px 5px 2px 5px;
  margin-top: 3px;
  color: #ffffff !important;
  text-decoration: none !important;
}
.gal-sauce a {
  color: #ffffff !important;
}
.gal-name:hover,
.gal-buttons a:hover,
.gal-sauce a:hover {
  color: rgb(95, 95, 101) !important;
}
:root.gal-pdf .gal-buttons a:hover {
  color: rgb(204, 204, 204) !important;
}
.gal-buttons,
.gal-labels {
  position: fixed;
  right: 195px;
}
.gal-hide-thumbnails .gal-buttons,
.gal-hide-thumbnails .gal-labels {
  right: 44px;
}
:root:not(.gal-fit-width):not(.gal-pdf) .gal-labels {
  bottom: 23px !important;
}
:root.gal-fit-height:not(.gal-pdf):not(.gal-hide-thumbnails) .gal-buttons,
:root.gal-fit-height:not(.gal-pdf):not(.gal-hide-thumbnails) .gal-labels {
  right: 178px !important;
}
:root.gal-hide-thumbnails.gal-fit-height:not(.gal-pdf) .gal-buttons,
:root.gal-hide-thumbnails.gal-fit-height:not(.gal-pdf) .gal-labels {
  right: 28px !important;
}
:root.gallery-open.fixed #header-bar:not(.autohide),
:root.gallery-open.fixed #header-bar:not(.autohide) #shortcuts .fa::before {
  visibility: hidden;
}
/* Mod Contact Links */
.contact-links {
  margin-left: 2px;
}
.move-note > a {
  text-decoration: underline;
}
.invisible {
  font-size: 0;
}
/* PostJumper */
.postJumper > .prev,
.postJumper > .next {
  font-size: 120%;
}
/* PSA */
.fcx-announcement {
  text-align: center;
}
.fcx-announcement a {
  text-decoration: underline;
}
/* General */
:root.yotsuba .dialog {
  background-color: #F0E0D6;
  border-color: #D9BFB7;
}
:root.yotsuba .field:focus,
:root.yotsuba .field.focus {
  border-color: #EA8;
}
/* 4chan style fixes */
:root.yotsuba.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(221, 0, 0, .8) !important;
}
:root.yotsuba.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(221, 0, 0, .8) !important;
}
/* Header */
:root.yotsuba #header-bar.dialog {
  background-color: rgba(240,224,214,0.98);
}
:root.yotsuba:not(.fixed) #header-bar, :root.yotsuba #notifications {
  font-size: 9pt;
}
:root.yotsuba #header-bar, :root.yotsuba #notifications {
  color: #B86;
}
:root.yotsuba #board-list a, :root.yotsuba #shortcuts a  {
  color: #800000;
}
/* Settings */
:root.yotsuba #fourchanx-settings fieldset, :root.yotsuba .section-main div::before {
  border-color: #D9BFB7;
}
:root.yotsuba .suboption-list > div:last-of-type {
  background-color: #F0E0D6;
}
/* Catalog */
:root.yotsuba.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #F0E0D6;
}
:root.yotsuba.werkTyme .catalog-thread:not(:hover),
:root.yotsuba.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.yotsuba.catalog-hover-expand .catalog-container:hover > .post,
:root.yotsuba.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #D9BFB7;
}
/* Quote */
:root.yotsuba .backlink.deadlink {
  color: #00E !important;
}
:root.yotsuba .inline {
  border-color: #D9BFB7;
  background-color: rgba(255, 255, 255, .14);
}
/* Fappe and Werk Tyme */
:root.yotsuba .indicator {
  color: #F0E0D6;
}
/* QR */
.yotsuba #dump-list::-webkit-scrollbar-thumb {
  background-color: #F0E0D6;
  border-color: #D9BFB7;
}
:root.yotsuba .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.yotsuba .qr-link {
  border-color: rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);
  background: linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent;
}
:root.yotsuba .qr-link:hover {
  background: #F0E0D6;
}
/* Menu */
:root.yotsuba #menu {
  color: #800000;
}
:root.yotsuba .entry {
  font-size: 10pt;
}
:root.yotsuba .focused.entry {
  background: rgba(255, 255, 255, .33);
}
/* Unread */
:root.yotsuba .unread-mark-read {
  background-color: rgba(240,224,214,0.5);
}
/* Thread Watcher */
:root.yotsuba .replies-quoting-you > a, :root.yotsuba #watcher-link.replies-quoting-you, :root.yotsuba .last-page > a > .watcher-page {
  color: #F00;
}
/* Watcher Favicon */
:root.yotsuba .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(128,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
/* General */
:root.yotsuba-b .dialog {
  background-color: #D6DAF0;
  border-color: #B7C5D9;
}
:root.yotsuba-b .field:focus,
:root.yotsuba-b .field.focus {
  border-color: #98E;
}
/* 4chan style fixes */
:root.yotsuba-b.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(221, 0, 0, .8) !important;
}
:root.yotsuba-b.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(221, 0, 0, .8) !important;
}
/* Header */
:root.yotsuba-b #header-bar.dialog {
  background-color: rgba(214,218,240,0.98);
}
:root.yotsuba-b:not(.fixed) #header-bar, :root.yotsuba-b #notifications {
  font-size: 9pt;
}
:root.yotsuba-b #header-bar, :root.yotsuba-b #notifications {
  color: #89A;
}
:root.yotsuba-b #board-list a, :root.yotsuba-b #shortcuts a {
  color: #34345C;
}
/* Settings */
:root.yotsuba-b #fourchanx-settings fieldset, :root.yotsuba-b .section-main div::before {
  border-color: #B7C5D9;
}
:root.yotsuba-b .suboption-list > div:last-of-type {
  background-color: #D6DAF0;
}
/* Catalog */
:root.yotsuba-b.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #D6DAF0;
}
:root.yotsuba-b.werkTyme .catalog-thread:not(:hover),
:root.yotsuba-b.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.yotsuba-b.catalog-hover-expand .catalog-container:hover > .post,
:root.yotsuba-b.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #B7C5D9;
}
/* Quote */
:root.yotsuba-b .backlink.deadlink {
  color: #34345C !important;
}
:root.yotsuba-b .inline {
  border-color: #B7C5D9;
  background-color: rgba(255, 255, 255, .14);
}
/* Fappe and Werk Tyme */
:root.yotsuba-b .indicator {
  color: #D6DAF0;
}
/* QR */
.yotsuba-b #dump-list::-webkit-scrollbar-thumb {
  background-color: #D6DAF0;
  border-color: #B7C5D9;
}
:root.yotsuba-b .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.yotsuba-b .qr-link {
  border-color: rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);
  background: linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent;
}
:root.yotsuba-b .qr-link:hover {
  background: #D9DDF3;
}
/* Menu */
:root.yotsuba-b #menu {
  color: #000;
}
:root.yotsuba-b .entry {
  font-size: 10pt;
}
:root.yotsuba-b .focused.entry {
  background: rgba(255, 255, 255, .33);
}
/* Unread */
:root.yotsuba-b .unread-mark-read {
  background-color: rgba(214,218,240,0.5);
}
/* Thread Watcher */
:root.yotsuba-b .replies-quoting-you > a, :root.yotsuba-b #watcher-link.replies-quoting-you {
  color: #F00;
}
/* Watcher Favicon */
:root.yotsuba-b .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(0,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
/* General */
:root.futaba .dialog {
  background-color: #F0E0D6;
  border-color: #D9BFB7;
}
:root.futaba .field:focus,
:root.futaba .field.focus {
  border-color: #EA8;
}
/* Header */
:root.futaba #header-bar.dialog {
  background-color: rgba(240,224,214,0.98);
}
:root.futaba:not(.fixed) #header-bar, :root.futaba #notifications {
  font-size: 11pt;
}
:root.futaba #header-bar, :root.futaba #notifications {
  color: #B86;
}
:root.futaba #header-bar a, :root.futaba #notifications a {
  color: #800000;
}
/* Settings */
:root.futaba #fourchanx-settings fieldset, :root.futaba .section-main div::before {
  border-color: #D9BFB7;
}
:root.futaba .suboption-list > div:last-of-type {
  background-color: #F0E0D6;
}
/* Catalog */
:root.futaba.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #F0E0D6;
}
:root.futaba.werkTyme .catalog-thread:not(:hover),
:root.futaba.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.futaba.catalog-hover-expand .catalog-container:hover > .post,
:root.futaba.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #D9BFB7;
}
/* Quote */
:root.futaba .backlink.deadlink {
  color: #00E !important;
}
:root.futaba .inline {
  border-color: #D9BFB7;
  background-color: rgba(255, 255, 255, .14);
}
/* Fappe and Werk Tyme */
:root.futaba .indicator {
  color: #F0E0D6;
}
/* Anonymize */
:root.futaba.anonymize $site$info$name::before {
  font-size: 12pt;
}
/* QR */
.futaba #dump-list::-webkit-scrollbar-thumb {
  background-color: #F0E0D6;
  border-color: #D9BFB7;
}
:root.futaba .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.futaba .qr-link {
  border-color: rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);
  background: linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent;
}
:root.futaba .qr-link:hover {
  background: #F0E0D6;
}
/* Menu */
:root.futaba #menu {
  color: #800000;
}
:root.futaba .entry {
  font-size: 12pt;
}
:root.futaba .focused.entry {
  background: rgba(255, 255, 255, .33);
}
/* Unread */
:root.futaba .unread-mark-read {
  background-color: rgba(240,224,214,0.5);
}
/* Thread Watcher */
:root.futaba .replies-quoting-you > a, :root.futaba #watcher-link.replies-quoting-you, :root.futaba .last-page > a > .watcher-page {
  color: #F00;
}
/* Watcher Favicon */
:root.futaba .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(128,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
/* General */
:root.burichan .dialog {
  background-color: #D6DAF0;
  border-color: #B7C5D9;
}
:root.burichan .field:focus,
:root.burichan .field.focus {
  border-color: #98E;
}
/* Header */
:root.burichan #header-bar.dialog {
  background-color: rgba(214,218,240,0.98);
}
:root.burichan:not(.fixed) #header-bar, :root.burichan #header-bar #notifications {
  font-size: 11pt;
}
:root.burichan #header-bar, :root.burichan #header-bar #notifications {
  color: #89A;
}
:root.burichan #header-bar a, :root.burichan #header-bar #notifications a {
  color: #34345C;
}
/* Settings */
:root.burichan #fourchanx-settings fieldset, :root.burichan .section-main div::before {
  border-color: #B7C5D9;
}
:root.burichan .suboption-list > div:last-of-type {
  background-color: #D6DAF0;
}
/* Catalog */
:root.burichan.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #D6DAF0;
}
:root.burichan.werkTyme .catalog-thread:not(:hover),
:root.burichan.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.burichan.catalog-hover-expand .catalog-container:hover > .post,
:root.burichan.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #B7C5D9;
}
/* Quote */
:root.burichan .backlink.deadlink {
  color: #34345C !important;
}
:root.burichan .inline {
  border-color: #B7C5D9;
  background-color: rgba(255, 255, 255, .14);
}
/* Fappe and Werk Tyme */
:root.burichan .indicator {
  color: #D6DAF0;
}
/* Anonymize */
:root.burichan.anonymize $site$info$name::before {
  font-size: 12pt;
}
/* QR */
.burichan #dump-list::-webkit-scrollbar-thumb {
  background-color: #D6DAF0;
  border-color: #B7C5D9;
}
:root.burichan .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.burichan .qr-link {
  border-color: rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);
  background: linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent;
}
:root.burichan .qr-link:hover {
  background: #D9DDF3;
}
/* Menu */
:root.burichan #menu {
  color: #000000;
}
:root.burichan .entry {
  font-size: 12pt;
}
:root.burichan .focused.entry {
  background: rgba(255, 255, 255, .33);
}
/* Unread */
:root.burichan .unread-mark-read {
  background-color: rgba(214,218,240,0.5);
}
/* Thread Watcher */
:root.burichan .replies-quoting-you > a, :root.burichan #watcher-link.replies-quoting-you, :root.burichan .last-page > a > .watcher-page {
  color: #F00;
}
/* Watcher Favicon */
:root.burichan .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(0,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
/* General */
:root.tomorrow .dialog {
  background-color: #282A2E;
  border-color: #111;
}
/* 4chan style fixes */
:root.tomorrow #arc-list span.quote {
  color: #B5BD68;
}
:root.tomorrow.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(145, 182, 214, .8) !important;
}
:root.tomorrow.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(145, 182, 214, .8) !important;
}
/* Header */
:root.tomorrow #header-bar.dialog {
  background-color: rgba(40,42,46,0.9);
}
:root.tomorrow:not(.fixed) #header-bar, :root.tomorrow #notifications {
  font-size: 9pt;
}
:root.tomorrow #header-bar, :root.tomorrow #notifications {
  color: #C5C8C6;
}
:root.tomorrow #header-bar a, :root.tomorrow #notifications a {
  color: #81A2BE;
}
:root.tomorrow.shortcut-icons .native-settings {
  background-image: url('//s.4cdn.org/image/favicon-ws.ico');
}
/* Settings */
:root.tomorrow #fourchanx-settings fieldset, :root.tomorrow .section-main div::before {
  border-color: #111;
}
:root.tomorrow .suboption-list > div:last-of-type {
  background-color: #282A2E;
}
/* Catalog */
:root.tomorrow.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #282A2E;
}
:root.tomorrow.werkTyme .catalog-thread:not(:hover),
:root.tomorrow.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.tomorrow.catalog-hover-expand .catalog-container:hover > .post,
:root.tomorrow.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #111;
}
/* Quote */
:root.tomorrow .backlink.deadlink {
  color: #81A2BE !important;
}
:root.tomorrow .inline {
  border-color: #111;
  background-color: rgba(0, 0, 0, .14);
}
/* Fappe and Werk Tyme */
:root.tomorrow .indicator {
  color: #282A2E;
}
/* Highlighting */
:root.tomorrow .qphl {
  outline: 2px solid rgba(145, 182, 214, .8);
}
:root.tomorrow.highlight-you .quotesYou$site$highlightable$op,
:root.tomorrow.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(145, 182, 214, .8);
}
:root.tomorrow.highlight-own .yourPost$site$highlightable$op,
:root.tomorrow.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(145, 182, 214, .8);
}
:root.tomorrow .filter-highlight$site$highlightable$op,
:root.tomorrow .filter-highlight$site$highlightable$reply {
  box-shadow: inset 5px 0 rgba(145, 182, 214, .5);
}
:root.tomorrow.highlight-own .yourPost > $site$sideArrows,
:root.tomorrow.highlight-you .quotesYou > $site$sideArrows,
:root.tomorrow .filter-highlight > $site$sideArrows {
  color: rgb(155, 185, 210);
}
:root.tomorrow .catalog-thread.filter-highlight .catalog-thumb,
:root.tomorrow.werkTyme .catalog-thread.filter-highlight:not(:hover),
:root.tomorrow.werkTyme:not(.catalog-hover-expand) .catalog-thread.filter-highlight,
:root.tomorrow.werkTyme.catalog-hover-expand .catalog-thread.filter-highlight > .catalog-container:hover > .catalog-post {
  box-shadow: 0 0 3px 3px rgba(64, 192, 255, .7);
}
:root.tomorrow .catalog-thread.watched .catalog-thumb,
:root.tomorrow.werkTyme .catalog-thread.watched:not(:hover),
:root.tomorrow.werkTyme:not(.catalog-hover-expand) .catalog-thread.watched,
:root.tomorrow.werkTyme.catalog-hover-expand .catalog-thread.watched > .catalog-container:hover > .catalog-post {
  border: 2px solid rgb(64, 192, 255);
}
/* QR */
.tomorrow #dump-list::-webkit-scrollbar-thumb {
  background-color: #282A2E;
  border-color: #111;
}
:root.tomorrow .qr-preview {
  background-color: rgba(255, 255, 255, .15);
}
:root.tomorrow #qr .field {
  background-color: rgb(26, 27, 29);
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
}
:root.tomorrow #qr .field:focus,
:root.tomorrow #qr .field.focus {
  border-color: rgb(129, 162, 190) !important;
  background-color: rgb(30,32,36);
}
:root.tomorrow .persona button {
  background: linear-gradient(to bottom, #2E3035, #222427) no-repeat;
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
  outline: none;
}
:root.tomorrow .persona button::-moz-focus-inner {
  border: none;
}
:root.tomorrow .persona button:focus {
  border-color: rgb(129, 162, 190);
}
:root.tomorrow #qr.sjis-preview #sjis-toggle,
:root.tomorrow #qr.tex-preview #tex-preview-button {
  background: rgb(26, 27, 29);
}
:root.tomorrow #qr select,
:root.tomorrow #file-n-submit > input,
:root.tomorrow #qr-draw-button {
  border-color: rgb(40, 41, 42);
}
:root.tomorrow #qr-filename {
  color: rgb(197,200,198);
}
:root.tomorrow .qr-link {
  border-color: rgb(25, 27, 31) rgb(25, 27, 31) rgb(10, 12, 16);
  background: linear-gradient(#37393D, #282A2E) repeat scroll 0% 0% transparent;
}
:root.tomorrow .qr-link:hover {
  background: #282A2E;
}
/* Menu */
:root.tomorrow #menu {
  color: #C5C8C6;
}
:root.tomorrow .entry {
  font-size: 10pt;
}
:root.tomorrow .focused.entry {
  background: rgba(0, 0, 0, .33);
}
/* Unread */
:root.tomorrow .unread-line {
  border-color: rgb(197, 200, 198);
}
:root.tomorrow .unread-mark-read {
  background-color: rgba(40,42,46,0.5);
}
/* Thread Watcher */
:root.tomorrow .replies-quoting-you > a, :root.tomorrow #watcher-link.replies-quoting-you, :root.tomorrow .last-page > a > .watcher-page {
  color: #F00 !important;
}
/* Watcher Favicon */
:root.tomorrow .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(197,200,198)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
/* General */
:root.photon .dialog {
  background-color: #DDD;
  border-color: #CCC;
}
:root.photon .field:focus,
:root.photon .field.focus {
  border-color: #EA8;
}
/* 4chan style fixes */
:root.photon #arc-list tr:nth-of-type(odd) span.quote {
  color: #C0E17A;
}
:root.photon.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(221, 0, 0, .8) !important;
}
:root.photon.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(221, 0, 0, .8) !important;
}
/* Header */
:root.photon #header-bar.dialog {
  background-color: rgba(221,221,221,0.98);
}
:root.photon:not(.fixed) #header-bar, :root.photon #notifications {
  font-size: 9pt;
}
:root.photon #header-bar, :root.photon #notifications {
  color: #333;
}
:root.photon #header-bar a, :root.photon #notifications a {
  color: #FF6600;
}
/* Settings */
:root.photon #fourchanx-settings fieldset, :root.photon .section-main div::before {
  border-color: #CCC;
}
:root.photon .suboption-list > div:last-of-type {
  background-color: #DDD;
}
/* Catalog */
:root.photon.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #DDD;
}
:root.photon.werkTyme .catalog-thread:not(:hover),
:root.photon.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.photon.catalog-hover-expand .catalog-container:hover > .post,
:root.photon.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #CCC;
}
/* Quote */
:root.photon .backlink.deadlink {
  color: #F60 !important;
}
:root.photon .inline {
  border-color: #CCC;
  background-color: rgba(255, 255, 255, .14);
}
/* Fappe and Werk Tyme */
:root.photon .indicator {
  color: #DDD;
}
/* QR */
.photon #dump-list::-webkit-scrollbar-thumb {
  background-color: #DDD;
  border-color: #CCC;
}
:root.photon .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.photon .qr-link {
  border-color: rgb(206, 206, 206) rgb(206, 206, 206) rgb(191, 191, 191);
  background: linear-gradient(#ECECEC, #DDD) repeat scroll 0% 0% transparent;
}
:root.photon .qr-link:hover {
  background: #DDDDDD;
}
/* Menu */
:root.photon #menu {
  color: #333;
}
:root.photon .entry {
  font-size: 10pt;
}
:root.photon .focused.entry {
  background: rgba(255, 255, 255, .33);
}
/* Unread */
:root.photon .unread-mark-read {
  background-color: rgba(221,221,221,0.5);
}
/* Thread Watcher */
:root.photon .replies-quoting-you > a, :root.photon #watcher-link.replies-quoting-you, :root.photon .last-page > a > .watcher-page {
  color: #00F !important;
}
/* Watcher Favicon */
:root.photon .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(51,51,51)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
/* General */
:root.spooky .dialog {
  background-color: #171526;
  border-color: #707070;
}
:root.spooky .field:focus,
:root.spooky .field.focus {
  border-color: #98E;
}
/* 4chan style fixes */
:root.spooky #arc-list span.quote {
  color: #634C2C;
}
:root.spooky.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(145, 182, 214, .8) !important;
}
:root.spooky.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(145, 182, 214, .8) !important;
}
/* Header */
:root.spooky #header-bar.dialog {
  background-color: rgba(23,21,38,0.98);
}
:root.spooky:not(.fixed) #header-bar, :root.spooky #notifications {
  font-size: 9pt;
}
:root.spooky #header-bar, :root.spooky #notifications {
  color: #C49756;
}
:root.spooky #board-list a, :root.spooky #shortcuts a {
  color: #FE9600;
}
:root.spooky.shortcut-icons .native-settings {
  background-image: url('//s.4cdn.org/image/favicon-ws.ico');
}
/* Settings */
:root.spooky #fourchanx-settings fieldset, :root.spooky .section-main div::before {
  border-color: #707070;
}
:root.spooky .suboption-list > div:last-of-type {
  background-color: #171526;
}
/* Catalog */
:root.spooky.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #171526;
}
:root.spooky.werkTyme .catalog-thread:not(:hover),
:root.spooky.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.spooky.catalog-hover-expand .catalog-container:hover > .post,
:root.spooky.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #707070;
}
/* Quote */
:root.spooky .backlink.deadlink {
  color: #FE9600 !important;
}
:root.spooky .inline {
  border-color: #707070;
  background-color: rgba(255, 255, 255, .14);
}
/* Fappe and Werk Tyme */
:root.spooky .indicator {
  color: #171526;
}
/* Highlighting */
:root.spooky .qphl {
  outline: 2px solid rgba(145, 182, 214, .8);
}
:root.spooky.highlight-you .quotesYou$site$highlightable$op,
:root.spooky.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(145, 182, 214, .8);
}
:root.spooky.highlight-own .yourPost$site$highlightable$op,
:root.spooky.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(145, 182, 214, .8);
}
:root.spooky .filter-highlight$site$highlightable$op,
:root.spooky .filter-highlight$site$highlightable$reply {
  box-shadow: inset 5px 0 rgba(145, 182, 214, .5);
}
:root.spooky.highlight-own .yourPost > $site$sideArrows,
:root.spooky.highlight-you .quotesYou > $site$sideArrows,
:root.spooky .filter-highlight > $site$sideArrows {
  color: rgb(155, 185, 210);
}
/* QR */
.spooky #dump-list::-webkit-scrollbar-thumb {
  background-color: #171526;
  border-color: #707070;
}
:root.spooky .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.spooky #qr .field {
  background-color: rgb(26, 27, 29);
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
}
:root.spooky #qr .field:focus,
:root.spooky #qr .field.focus {
  border-color: rgb(254, 150, 0) !important;
  background-color: rgb(30,32,36);
}
:root.spooky .persona button {
  background: linear-gradient(to bottom, #2E3035, #222427) no-repeat;
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
  outline: none;
}
:root.spooky .persona button::-moz-focus-inner {
  border: none;
}
:root.spooky .persona button:focus {
  border-color: rgb(254, 150, 0);
}
:root.spooky #qr.sjis-preview #sjis-toggle,
:root.spooky #qr.tex-preview #tex-preview-button {
  background: rgb(26, 27, 29);
}
:root.spooky #qr select,
:root.spooky #file-n-submit > input,
:root.spooky #qr-draw-button {
  border-color: rgb(40, 41, 42);
}
:root.spooky #qr-filename {
  color: rgb(197,200,198);
}
:root.spooky .qr-link {
  border-color: rgb(8, 6, 23) rgb(8, 6, 23) rgb(0, 0, 8);
  background: linear-gradient(#262435, #171526) repeat scroll 0% 0% transparent;
}
:root.spooky .qr-link:hover {
  background: #1A1829;
}
/* Menu */
:root.spooky #menu {
  color: #FE9600;
}
:root.spooky .entry {
  font-size: 10pt;
}
:root.spooky .focused.entry {
  background: rgba(255, 255, 255, .33);
}
/* Unread */
:root.spooky .unread-line {
  border-color: rgb(197, 200, 198);
  visibility: visible;
  opacity: 1;
}
:root.spooky .unread-mark-read {
  background-color: rgba(23,21,38,0.5);
}
/* Thread Watcher */
:root.spooky .replies-quoting-you > a, :root.spooky #watcher-link.replies-quoting-you, :root.spooky .last-page > a > .watcher-page {
  color: #F00 !important;
}
/* Watcher Favicon */
:root.spooky .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(254,150,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
/* Link Title Favicons */
.linkify.audio::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAitJREFUOE9jYCAWKJWwavr0KyXWb/FIbDtUFFyzJx6nVofE2Xo5nXsj0rqPNSR0nVkR2Hjmgmfd+U9Otdf+m5Vf/6+SfeU/R9ChVVgNYDRtlfJuuPA/rPfe/4QpD/6nznj0P27Kw/9unff/69Xf+69c/+C/SO7N/0z+OAxgMmmRCe++/r9i3ev/KWvf/vdY8PK/bt/9/wrNV3/IN5y/IVt1YqNg4pGTTP4HsbuA2bhZ2qvpyn+xjIObxAp3VwqlrgngLFyryVy5nhPmZJHANS2cwYexG8BmVC/pWn3hP4NZlzWuQDJI3dIiFnUUuwEsQAOcq87jNcC7fHeLUtJxHF4AGmBWeAavAWH1+1rUUk7giAWjOknllON4DXAs2NEiG4/DBQxAF/CFHfrPYI4jDFSLuJVjNrUJhB/B7gIGo1pJRt99GAZYJK7wLJ1z7Xzl4vu/7aqv/GRBj0bjqAX2qb0nJ7mXH17C4HcUxQA+hymWtSue/C5a9up/9Ozn/7Vr7v1nRY7GqMb91T3b3v6vWvPmf/S0p/9ZQk+DDLCBRSOz06Jqk+o7/21nvfqvsebDf7kZL/5zBaxphkezd+OFn7HzXvz3Wvjmv9a8N//5Ek//ZTBpVYUrMG2X5wjcdl68+uI/wa5Lr3hSNjczGFeywOVZ/bbcVGp//F9izfv/Ql03f3P4LC/HSEQquYwMFnUCDJ7dzBhyjGZNQpye89M5gpfnMvtNUyE2h4PUAQBovvT7lyNljwAAAABJRU5ErkJggg==') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.bitchute::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAadQTFRFAAAAwzw8xDs7cY6O0iws0ysrtF9f0Sws1CwsyzU1zTIy1igoyzQ01icnY7i4t0hI0S4u0ysr1Soq1ikp1ikp1Soq0ysr0S4uu0VFzjEx1Csr1ygo2Ccn2Ccn1ygo1CoqzjExzjAw1Skp2Ccn2Ccn1ikp0TAwxzY21Soq1SoqyzQ00iws1ygo1ygo0yws1Soq1Skp1igo1igo1igo1igo1igo1igo1Coq1Soq0C0t1ygo1ygo0S4unV5e1Csr1ygo1ygo1CsruUdHxzg41Skp1ygo1CsryTU10C4u1igo1ycn1ygo0i0txjo60S0t1ikp1ygo1ikp1Cws1Coq1Coq0yws0S0tyzQ00iws1Soq0ysr0i0txDs72Ccn2CUl2CYm2CQk3EFB2S8v2zw82jY24FZW3D0931FR3EBA3UND8LS04FVV7qys4V9f4WBg+erq766u9t7e7qqq2Ckp54KC9+Pj6pSU+Ojo5XNz9NHR6YqK8bu765ub5G5u9M3N6ImJ88vL5XV165eX3UVF6pWV3UhI2Soq2jU12Coq2jQ02Cgo2Sws////FaxLuAAAAF10Uk5TAAAAAAAAAAAAAAAAAAAAASJnoLy9oWolAhBz1vr72XgTGKf8/a4cCpuiDVvz9mS6xOvy9vzg6aGsPOToRAFv9fh2Awm07XgIMd765UEDOsfemVhhY00nBommbCkEI8horgAAAL5JREFUKBUFwbFKA0EUQNF7387sMq4EmzRpLSSdIBYKFv6Af2prnSYkRT4gWFgkCBJQ0EIFdcZzBCeqqh4qdk7VW2ChPusw02sAYKU7z7wEAAA2piQKFbrWSHazc1J0XWs5pdxPDykcVX+7Y9UxUsSo+s7PibqPFBRV/C5qi4i/UkrJrc7L47Bt4ZWnUaMCAE9GSrtKBQD2fR+bnAEAeOn7dUTOwApe35bDsPz0zsniQlV98IN0tJ3f6P0XAMA/kxou7OXCdnoAAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.clyp::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAwUExURTSY22ey5E2l4KbS75rM7Y3F64C/6f///8zl9nS45r/f9PL5/UGe3bPY8Vqr4v///wNjrzUAAAABYktHRA8YugDZAAAAB3RJTUUH4AINEi85AIH95AAAAE9JREFUCNdjYMAGGBWgDGYHCM2a3hkAZmi0dzSBaKaO9o5moCqmLiCjYzNQyw4QowIodQzI6E0AKcpo72gE6+Jyb1kAMehUA9RktgdYbQYAjGIVNGGXBJkAAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.dailymotion::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQBk3ff6/trp+kKO5wZt3xx54q7P9Ozz/IS17zOG5WKh653E8sbc9/GbbcoAAABZSURBVAjXY2BAASyhDhAGc9oECMOjyAAiESEEYrBYpLWBGcwHxcvBjDDxHelghpF0yDQwY3kVgweEUeEQDWbMEepqAjO8FMsLIeYsU8o+BrbCdWboTAe4AwALXxWGjW41FwAAAABJRU5ErkJggg==') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.gfycat::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAjVBMVEWn3gCo3gSr3w2t4BSu4Bav4Ri35C+45DK45DO55DXA50rA50vB50zC6E/D6FTF6VjG6VvL62vN7G/P7XbQ7XfW74vY8JDa8ZTe8qDe8qLf86Pi9Kzj9K7k9LHp9sDp98Lq98Ps+Mr0++L5/O75/fD6/fH6/fL6/fP7/fT7/fb8/ff8/vj8/vn+/v7///91X4cfAAAAcklEQVR42o3M2xKBUACF4aVQckrIuRJK6H//x2sme4/MuPDfre9i6c/Cc3U5Dj87BuAxsXvGu6JvIIXEHRWwNHCHQNrCzkAFkbSBg4EM8i+Yw7PXBa3zRfuxVyf/Bis7nKwGKAcWxgC8prI5Sc315OlnDfzpDar2S9/oAAAAAElFTkSuQmCC') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.gist::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABblBMVEXc3NykpKTW1tbb29ugoKCdnZ0AAAACAgIEDRcKCgoMDAwODg4QIzYRDAoTExMUDwwVAg0WICsaEw8aGhoiCBklGxUmERwwKCQ7LSU7Ozs8LSZFLyNINi1JNyxJNy1KSklMOi5VR1FXV1daQTRkZGRseYZwU0F4eHh7dnR8bWV/YE6IdGiKcGCKkJaNgYeNjY2RdGOScWCUcWCZmZmhoaGkpKSoqKirfmaurq6xsbG1tbW6urq+vr7AbmzBb23CwsLGxsbHx8fHyMjJycnJysrMzMzOiYbPi4fQ0NDRoYbT09PU1NTW1tbY2NjZqIzZ2dnb29vd3d3f39/i4uLktZrk5OTl5eXm5ubn5+fo6Ojq6urs7OzttKLu7u7wuqbw8PDx8fHz8/P4+Pj5+fn7uZj8vpz9ya79ybD/tZf/upr/wZ//w6H/xKH/xaL/xrH/yqj/y7T/zqv/z7D/07D/17n/2Lv/2Lz/3L//38n/4Mk3Q/ZuAAAABnRSTlMSFcbGzc5MNKFvAAAA1klEQVQoz2NgYPZHAswMDEwRSclwkBTBxOARn4gE4j0YXBOiJNUDg7y8Ar1UlOITXBkcY73Z2Li42dg42dn4wmIdGeyjQ7nZoEA4PNqewSZKlw0O9KJsGKwjBdl4ZeWkJGQUhNjEIq0ZrMI5+D0ri7Jz8itCRAXCrRgsQ3mUy+xicrPSbfO0REItGSyCVaVL3ONSU9LcCtQUgy0YzIJ85M1LizMzCsv9xF2CzBhMAwN99TV1DI0MtDWcAgNNGUycA5CAswkDi5kDwrMOZiwMjKzGSICVEQDhZj0UQV7PewAAAABJRU5ErkJggg==') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.image::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAs5JREFUOE+lk/tvi1EYx98/xT8gW4REIpGFMEQWl2FiM9ZMZhm2xRAyOsmujFFmdFRHu0tWm87UypxStr69zPauN5e5rHVp3IYhbOvHy+wHEQlxkm+ek+d8nm9OznkeSfrfldmgJC7QyUlTymsJTfuTZ25z4HdWYwyLreYhtpgekGPw0+kKvo1Eo+IXRSIiEhkWZuc9tqnsJD9EqTUopCxjSGTpB0iueczSo1HyW8cpsExQ1DbxI2pt45j9cXpexul4FEd79RnZphAa/SD7WvuFtO6UItbU9LC+YQxNI2w0wwYT5LRAdhOU3oBTIXC9gXP3oUSGgz2vST3gYHejR0jptT1C332f8yrUEYHrz8CgxDnpm6DKCUfc0KnmXa/AEVPPwnDcD0cvetA2uYRk67Ive/lpjO7YBO1PPuF8Df3vwf4cbNE4tqdw7YVq8HYyHx6FvhE1hkMEg8HDUqvFkjT4aIjMqkqyqkswDSrcfBfH+Q561YLAZ/B+BLda6FXlU/cPv0AoEPhuoP1h4Av7Wbh9E/Py15NWWUjeSR3nZDfeN+N0DY9hG/7K1eGP3P0S5/EYRFUF/IOTBrUXHPm9fT6mr1xEwupkZqxbzLyiDJYUZ5NSnkdqdSHpxyrYdFpPgdmAsdfJwPMI/Yr65bf7tZLGGBQ7DNdJWFtIYvoOZmbuZE7OXpIKKli86zAr9p9gTVktWTVnKTI2U95uRWe3U2IJUDbVB5p6hVm5x5m9Vc/cnedZUNzC8lILaQesZBy6hEZ3maKzgvJWFzVWD9XtXvVGQbSWASFtMATVRlJIKbOTWtlJXaeXepuPM1f6MNp9GLt8mLvvYLmp0OhQ2Fwvk6m7xaqDTvY0eYWUVtcnllXfYlGpnfklVuraHHg8HjxuN+6fktUHlWWZPaZeUo/ILK0UKttBcbNbSB9GP0yLxWJJUxoZGUn80zD9C/vXQ/4NHY10h3M1zmQAAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.installgentoo::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABcVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3dIYAAAAAAAAAAAAbGh4BBAcCBgoBBgoCBwsCCQ/QzucCCA7MyuXZ1eUBBQmTh8fo5/i9svIAAADh3vQAAAACCA0CCQ8CCQ4DDBQbGCUDChDr6vgAAAAAAAAREBIDCxK6tdfe2fTv7/cDCxIDDBQEDRUHDhgMJjXk4PZdXWdLUFoUNEYOKDgSMUMRLUBneI4eTGj08/QmW3onW3rTzvfOx/giU3IiVHMkWHdEaYJobHv3+PokWHpua6TNy9xZgZ+1quz8/foQKj0XPFInWn0nW38tZ4o6fqg8gq48grA9hrU/i7pAhrNAiLdBjLtEjr1FksNIjr5Il8pImMtKWnNqhL97odKFqti5q/q5rPq60+nCt/vLw/vPx/jV0vHY0/rc1/rg2/vh3fzn4fzu6/vx8vf19Pv19Pz49/v5+Pv8/Pv8/fr9/vv+/frziVtUAAAAT3RSTlMABQYHCAoNDhARGRobL0ZOV1xdXV5fYGBmZnB0eX2MjZSaoaGio6mqqqustLq7zubo6Ojo6evt7u/x8fLy9/f4+Pj5+vr6+vr6+/39/v7+XKgUSwAAAMhJREFUKM9jYGDg4OZmZgABKINT1dBAhBHIYFMxMBIDisjbhoZbCTExsCu5hoeY8DEwcOkEx8fY6MqpucTGB0izglVEplcU5/gmRYWBVQDNMK+s0hN3SvMyBpsBNJxXw0NfwTEjVQZqHQMHj5RfWW5mliSEC7TPzK6yJD/bXZQRzGdXcisqLy309okA2Q4Eis4peQWmstqBCdGW/CABraC45ERBBs3A6Fh/AbAKTwsHa34QZW8NVsGuLqwswQSjQICTmYMFQaEDAAF8JHLfKGswAAAAAElFTkSuQmCC') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.liveleak::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAlNJREFUGBkFwU2LVmUYAODrPu8Z5x1xSpRBXQyFoLsBE+wfiO5atJOgnf9DUPwFgtGinUgEaQsRhHYuMtpEiEWuG5iNjuOcj+c8z911xXcXL/68c3Dw1fzhg0QgEQAAEYGUKXFie9vxlSs/xk/rdavjGEkmkWSih65z4osv9GfOiK6LzEyZ2uGh4dUrmzs72ddlUUhkoiMr4PT167589Mh6c1N0nSRlqrX67dat+PDyZXRT19m5edPnt28rGFHxMcJ6d9fprS1/37tneP3aemPD1uamUydPOru3p5DdGOH0tWsu3LhhxIQJM2qEpRT/Pn3q/du3AhARSmvGTH0lplKMrVkiYpVpQaJlighzhDkzhmEA0fcWoqAfyaFW4zTlgCABxlrNmY4ylUzLsiREprFWc0T2M+ZSjKWY0AEaltZUjJixZJIpuk5pTWlNP2BYFvOyKJkCAKU1tTXHrZlqVWolUxdhxsfVSj9FmJfFMM9GdICGGa01HyMstYpMIFPJVNDPmYZSTOPoOEKHzNRlKpmWWh1j6TpLa2SKTKVWU6Z+Qolwdm/P9QcPZKa2LH69e9eIMs+WCL/cv2/98CGZPrt61am+V9APq1X89eyZ/968obVYaiXT4dGREgG+vnPHeHgYMsH2+fP+efEihtVKv7SWw/6+9/v7KYLMhIywTJPamvOXLomukyRsrNf+ePzYkpl9dJ3SWgSCSCQCfz5/7pMLF2yfO6eLiAQcHRz4/cmT+HR7O+Ob3d0fNt69+7a2BiICQCJbA0EgE5lpvbXl1OXL3/8Pfax4+6SjSukAAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.pastebin::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAB1FBMVEUAAAAAAAAAAABWYWwAAABbY3BbYm5dZnFdZXJeZnMEBAQHCAhYYGpdZnFdZnBgaHIlJyomKCooKi09QkdESU5eZGtdYmhdYmleY2lrcXdqb3Rqb3Rqb3SSmJ+SlJeWmJutr7GtrrCWm6ChpKhbW1tmZmZvb290dHR3d3d4eHh5eXl6enp8fHx+gIJ/f3+CgoKDg4OEhISFhYWHh4eKioqKjI2Li4uMjIyOjo6Pj4+QkJCRkZGSkpKUlJSVl5mWlpaYmZqZm52ampqbm5ucnJydnZ2enp6fn5+hoaGioqKkpKSkpaalpaWmp6mmp6qnqauoqKioqquoqq2qqqqrrK2srKysra6srrCsrrGurq6vr6+wsLCxsbGysrKztLa0tLS1t7m2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr7AwMDAwsTBwcHExcfFxcXFxsnGxsbHx8fIyMjJycnMzMzNzc3Ozs7O0NLPz8/Q0NDR0dHR09XT09PV1dXV1dbV1tfV19rW1tbX19fX19jY2tzZ2dnZ2tva2tra3N3a3N7c3Nze3t7f39/f4OHg4ODi4uLl5+jm5ubs7Ozs7e3u7u7v7+/v8PDw8PDx8fHy8vLz8/P29vYSoLMZAAAAJHRSTlMABAUGCwsNHCAiLzMzMzZEYGJwgIuOnJycnqmqq9bc3+/w8fkZ0N/uAAAA/klEQVQoU2NgYGDl5YMDdgYGBmZZ3964CYFtIR3e9Q7K/AwMHI55KfaFmcHWMy3K3MwlGRg4wz0zdYpcorRbNbL0LaWAAp3ts2umV8wo6MupTauQBgqUG03VL7W3sfZSb1erAgm02M+yzYrVCXUy6zapAQlUx/dEdyX3J3ZHVUYVywAF8o2rDNN1Go2jzGLMokAC2QbuSc42mXmaOXop9iAtCXrJ5qXWjT59Abl2ESJAAX/tSIMMiyrrqQ3T6uS5gQK6kSqpqkUermGTexQFmYACflqR+hlWZSamzQpCLEDPsSmVVDT1TJw0JUhOAMRnYOARFRMTE5cQF+ZiBPIAII5B3EVG0b4AAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.peertube::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABIFBMVEUhHyAAAABzPBnxaA3CWBEnJSYbGRptbW16enpzc3PTayWhb04hHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyApIh+0UhMfHiBWMhvsZg7zaQ0hHyAhHyAXHCHzaQ3xaA3xaA3xaA3xaA0hHyAhHyDxaA3xaA3xaA3xaA3xaA3xaA0oJickIiMdGxwUEhPxaA3xaA3xaA1sbGxwcHB3d3eFhYXxaA3xaA3xaA1zc3Nzc3Nzc3Nzc3Nzc3PxaA3xaA3xaA1zc3Nzc3NtdHjxaA3xaA1yc3STcFnvaA/yaAxzc3N4c2/FbDFzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3MhHyDxaA1zc3MAAAAfljyVAAAAXHRSTlMAAAAAAAAAAAAAAAAZkjMBHOLXYArj8p0u2VsJ1XaGL/OhKyXc1WEN2gwk2/SjKgEYiS4B/tYFGosqAdleAxzj12ML9Z8s850rJWbYeYMs1F8Koiri1V0MGZY0AYbIBFIAAAABYktHRAH/Ai3eAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wYXFBUVX81QWQAAAKxJREFUGNNVz9UWgkAQANDBtdbu7lZsxe7ubpH//wxBPKDzNvdMAmi0Oj0QQgAYjCazBX7BStvsDqHoAzTtdLklf+Dx+vwICRAIhsKRaCyOvpAwJ6Up8pXOZHOIAFm+UCzJEQuvMhWrIFBUa/WGkodmq40Ad7q9/kDFwnA05lpYYCbT2ZykFvxQDhhmuVpvcvxaHra7vfp72KflcMSYEOB0vlyx+By+3R9PMSfe+P0enM1454kAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDYtMjRUMDM6MjE6MjEtMDc6MDDse6MAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA2LTI0VDAzOjIxOjIxLTA3OjAwnSYbvAAAAABJRU5ErkJggg==') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.soundcloud::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVQ4y5WTy2pUQRCGv2rbzDjJeAlIBmOyipGIIJqFEBDElwh4yULGeRFXPoEIBl/AvQ/gC2RnxCAoxijiwks852S6+3dxzslcHJCpTXVX11/Xv0097gLPgVNMJxnQNfX4zsqleWbnpoMf/oa9d988MM9MC/rp+E0a+A0dsVobMNMCOO8B6McRoABJI+A6gJmN3D2A8jgEBCEkSEMBrcrsDAzDWWn3AjgKFaDMmgRqniGFgsaDp1jrLOngDf1XT1D+A1dFc4MKAkkiCVKjjVu7g9+4Rzx4i1u6hjXbuMWr0O5QPNvCu7IaCZwEKQukLGDrm5x8uI0tr6MkiGlkiv7yLfzN+6S5i6QsIMABkEfcxhbWWYMkVAOjxvYAjc3HNHrbKI9VBQBFwF25XQKSBjqIf1YBuAurEMrczgDygD6/x2LCpFLXLUyQ+PoldphhBhYfIX09XU1+Flaukz7uYqs3SHs7cG4BmTsmkBUF9mmXEwa28BNLPaQPLepuNcbGSWQquQC2/Kdcox1FUGkcB0ykck1nA2+wTzMs8stGnP4rbWGw74EuS/GFQWfK7/wF6P4F7fzIAYkdmdEAAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.streamable::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABXFBMVEUPkPoNj/qExv0PkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoNj/oPkPoNj/oNj/qExv0PkPpruvwPkPornfoVk/opnPpnufwPkPqExv0Nj/oPkPoNj/oPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoOj/opnPsVk/oMjvoOkPoTkfo6pPsblfo3ovva7v7////v9/5Sr/whmPry+f5htvze8P7W7P5itvyl1v0imPu84P3o9P50v/zN6P73+/8lmvs8pfs+pfsKjvr9/v9EqfsNj/oom/v8/v9nufxAp/tJq/sQkPrb7v6t2f0IjPoclvr6/f9luPwUkvrp9f7h8f5ruvy/4f4kmftpuvwxoPum1v32+/8jmfpMrPvu9/7z+f9UsPs7pPv8/f/4/P9oufwalfpDqPsMj/ounvtVsPsnm/qzfQQ9AAAALXRSTlMAAAAggMzw0IYkBPb4iAamsgZ+jPwogpDO1vTYlPoulL4KivyUCiqO1PL01i67tUAWAAAAAWJLR0Q4oAel1gAAAAd0SU1FB+MGFxMuDXVcMbIAAADdSURBVBjTY2AAAmYWVjY2dg5OBgZGJiCXi4VbFwx4ePlAAlz8unAgIAgUENJFAsJMDMw8unp6+gaGRsYmpoa6IqIMYrp6ZuYWllbW5hY2toZ64gwSurp29g6OTs4urm7uHrqSDGy6nhZeet5WPr5+/gGBelJAgSCLYL+Q0LBw3YjIKKAAu250TGxcvE1CYlJySqquNAOHrl9aukVGZla2RU6uoZ4MA6esrl9evnWBYWFRMdBaOQYGXmSHyQNdyieA4CsogjzHpyQL4SqrqIJ9y8Cgpq6hqaWtogPyPgDmvSxRxBWM9AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNi0yNFQwMjo0NjoxMy0wNzowMCKUvXUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDYtMjRUMDI6NDY6MTMtMDc6MDBTyQXJAAAAAElFTkSuQmCC') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.twitchtv::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAYUExURf///2RBpWRBpWRBpWRBpWRBpWRBpf///+zQyUYAAAAGdFJOUwFdZX0lTzs4r5oAAAABYktHRAcWYYjrAAAAB3RJTUUH4AINEi42iSXRNAAAAD1JREFUCNdjYEiDAAZGGIMtjQEEUBlMCWoEGci6mGEMsxQgIy0BiB3AjLS0FAYQIw0kwABipoI1AhkBQBIAFCIXxiHgq80AAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.twitter::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAEsUExURf///1Cf21Gg3FGi31Gh3VKj4FGh3lKj4VKk4lKl41Ol5FOn51Sp6VSo6FOn5lCf21Gg3FGh3VGi31Gi31Gh3lGg3FGg3FGg3FGg3FGh3lGg3FGi31Kk4lKj4FGh3lGi31Kk4lGh3lGg3FGh3lOm5FOm5VGi31Kj4VSo6FGi31Gh3VGg3FKj4FOn51Gi31So6FWr7VOl5FGi31On51Sq6lKk4lOo51Sp6VOm5FSq61Ws7VOn51Oo51Sq61Ol5FOm5FSq61Wr7VOo51On51Sr7FWs7VSp6lGg3FGh3VOm5FWr7VSp6lKj4VOm5FSo6FSr7FWs7VWs7VWr7VSq6lOo51Om5FOo51So6FOm5VOl5FSq61Ws7VSr7FSp6lSp6VWs7lWr7VKk4lSq6v///6E3MNsAAABVdFJOUwAAAAAAAAAAAAAAAAAAAB0Ii+3xnBVTJhfsMKb+qTEp9GwBF/7lLAbo0m4pLkUTdvk2Ev3+EZnOBo/3Z8ffCRzH/D0OqPxiLnvx3UI8m9n1++GwXQZNS29BAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+ACDRIwBwy67tEAAADKSURBVBjTY2BAB4xogIGRH8IQEBQSFhEVE2eQkJQC8ZmkQ8PCI2Rk5RjkIxUUlRgZlVWioqNjYlXVGNQ14iI1tbR14qLj4+MTdJkZ9PQNosJCE0OjgPz4KEMWBiPjhPiEmKQokIJ4E1MmBmazhHg4MGdlYmCzsLSC8ROsmRkZmFht4Eps7ViADmOzd4DyHZ2YmYACTOzOLmATXd04mIBOd/eQ9owFCXh5c7KB/MLi4+vnHxAYFBzCwcYEEmBi5uLm4eHl42RmAnsSAMZBLgZiFUQ5AAAAAElFTkSuQmCC') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.video::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAxgDGAP8nNqN7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gMZBjQQLEEqGwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAA5SURBVDjLY2AYaMDIwMDwn1JD/lPCZhpwL+B1wf///ykzgBhDiAoDfIYQZQAjIyP5BuDTPJqQqAQAvW0ZAMk8+EEAAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.vidlii::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAACvlBMVEUCWv8HXf8AWv8AAAD///8AVP+bqP8AWv8AVO4AOqUAGkgAyf8APa0AL4QABAsASdEAVv8AUv8AUv8AVP8AWP8BWv8JXv8RYv8QYv8DW/8DXP8xdv9RiP9Af/8IXf8AKP8KXv8JXf8NYf8aaf8ATP0UZP0AVf8AT/8AT/8AVv8ATedvnPVAf/8AT/sYZvl0o/8PYf8udf8aa/8FXf8AVf8AOrRBe/Nvn/8AUv0aaPkXZ/8ATv8AKYQZYuwIXf8ca/wTZP8ASP8AED0HUNwZaf8xdPwDWv8AAAAAQMRcjvQAU/8AMZssb/Jmmf8AU/8AJXsRW+dSif8AUv8AAAAASdQtdP8ATv8AQ/8AQv8APbtKgfQud/8XZ/8TZP8FXP8AKIIcZO4wdP8AF08KU95tnv4gafhZi/Rnl/ZzofcocP8AAAAAQ8Q4efRwnvVmlvVcjvgrcfsAQsQAOK0APrwAQcUEStMLXPgDWv8AHE8APLEARdIAQ80ASeEAVf8AOJkAAAAAAAAAAAAABBMAJJIAY/9rmP+vxv90n/+buPv29/7C1P+zx/n///2Crv/7+fjs8f++z/f///3l6fX9/f/L2fj9/P5ilv9Nh/3h6f6vyf/D0vT///2lwP/Z5Pf3+P9OiP9klvr9/Puzyf+QsPX//fnW4v/k6vfv8/86ev94pfj///uRtf/y8vby9f9Fgv9EgPzt7/jj7f8mcf+eufj///x1pP/Z4fT///52pf9Uivv09fnV4v8ncf64yvj7+/6vxPX///yyyf9ynvr6+vvG1/8ocv3O2/fz9v53ofX8+/nb5v+YuPz//vy0yv8vdP3e5/fn7v/p7PX09//b5P7///6eu/9Df/zq7vjc5//I1vT//v3+/v////9+q/9Tivnn6fPy8/rW4fzI1/2qwv6YtPT8+fX39/jz9PqJrveTsvqfpuxrAAAAhXRSTlMAAAAAAAAAAAAAAAAAAAAABSlERA45nrSzP3TZ7e12Ao2LusMcrJYhFwaR/uhCwP/x5tZzBWHy+n3OvA8u17jmpwgPrOz5jAF2+3FA7PdYG8fuPQaX5jAGAV/39MCmdy/e/RGz/vj5/f/rAXj4//z13n52i5qmmFQ1lqOQaTgIBAYKEAYAKGjtAgAAAKNJREFUGBkFwT0uRGEYBtD3ZJ77uT8iGrXCAixCr7OCyRA2oCKqiUYkOgoJwhqUbMAKLEChVYhk4pxswvcWfFGVEbYtuJutqir9Ibc0uh0+V+mf5gY69yN2PzKJiTjCg8qa3uLRAJpKM9AMoL1VOi9zJ4CQ9z0jwHX+RAwAURUxAMSB/L7u35wCGlKaHrDkPGVmwhlc6FN6l1iHKxupn+djAPgHrEwa+qrzy0oAAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.vimeo::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAAIdZUKh6sLlLkLmr4LmsAMp88NrdYVW3MZj7Acstkrt9s1e5E7vN5EfI9JvdtKwuBijp5kpbl30eiDt8aG1uqRr7qTyNehxM+k4PCy3enB3OTg6Ovv9PXw+fz////L9U5WAAAAAXRSTlMAQObYZgAAAIFJREFUeNplz90OwiAMBWAQpAoyxclkP3je/y0H2AQXz0WT8100rRD6kNI9/cRroemQL3hXhoujZYj4OHoAmBvYGcBISwbWBvfXCrytnIDUQMkbsBpagMA7zhtQdyTFQAmIG7IkYniiZuh3XGsPqoOZkMOJOpAcLqUzNFGGu/57fwc1hgtp0mVSyQAAAABJRU5ErkJggg==') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.vine::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAHCUExURQAAAAC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+j////54tRLAAAACUdFJOUwAAAEK+9/e+QQIDAwEqzskfUZmUNHz2mrT++V1w+f5tCanNFUDwfEjtjAyyvg027Hki27QMBJzaHE/1+FkNsN0iZvv6bxyAlB589lQeyud0KB8PQO+ZBUrc+eXgcRG/3CoATe316Wxw/P6BAgBt+fp4IAwh0d4zM9q7Fm76qi605EMSrvfX/PRtAivF9IAJNMLxhA2KYlJ9AAAAAWJLR0SVCGB6gwAAAAd0SU1FB+ACDRI2MOJd7FgAAADrSURBVBjTLY9VWwJgGEPfiYWBha2YYHcHditgd3d3odjdivvBfgK727nYsyPiCrw03j6+fv6AaAMCgyAI1lElJBQSFh6hBxDJqOiY2Lh4SEKiIQlITmFqWrqRJkhGJrOA7Bzm5uUXsBBSVMySUpSVs6KyqrqmFmKuY30D0NjU3NLa1t6h9jvZ1Q30WGi19fb1KzAwyKFhYGSUY+MTkwpMTXNmFpibX+Di0rICWFldW9/A5tb2zu7ePtTrg0MeHePklPYzuDRw7uDF5RWvbwC32O0d7x8en55f4DHF6xv5/vHp6f/k6/vH+evuf1LAObptvSvrAAAAAElFTkSuQmCC') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.vocaroo::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAw9JREFUOE9jYMABuMwYmCyTJKUCGlSnFSy02TTzeOyCiQcDViX26qVz2TAyYtWmEMwuoZ3M7V40LcB79pHkc0svpvzY8jD//87nxf+3Pyn8v/ZO8v+VNyP/2mZJumI1QCWSI8232Hjumitlfw5+qPp/9l8TCt76JP//xkdx/wsXWCzjtWFkwTCkbWFe9plPk/+ga4Txz/xt/D/hkN//gMXif21a+NbyWjIwoRiy6GDT5rP/mlFsPfyp5n/NpOj/22+0gMUXXIz/H7hC/L/bFKFbPDZMrHAD5H35OPt2J9zacDv/f3V7xv9FhwrBGubsT/1//Pjx/1GJ/mD+/nfl/1v3Ovy3KRJNQbHdOlXCvOO03/+pm1P/v3v37n90hhtYw9HPtf8Xb2v937cmHswHeWPRxYj/LvkK3igGKARwicTO07118H3V/5kbi/4vPZMJtK3s/6YH2f+Pfq1B8VbjWrdnMu5s4nAD9CNFhKwz5DTUvLl419zKvAcLtG1P84BRl/b/5M/6/6f/NPzf/qzo84yj0Uus0xUU4Zor54bm9+4OfZG02OCuoAMTb9ZkC9ull1Nvrr2Z+XvRpaRfc65H/68F+jl9svEhzyLFWoccWVc+eyTHq/twydjlKRln7jX9bNMkMJnbhoFRL1xCqmKx6/yi2fYXa/c5/e846PV/5fW0/7OPx/yfcjzop34ulxdGGvDuU8mMXaX507lBuiN6ueadmQeT/p/93vf/1O+G//sP5fw/eL3o/5JLif8zVxs+Tlir9S26UyeFQQvJGBE7FvaFZ9LfN+1y+WjbItSb3GmXvXd15v8zroH/HxgE/D+aGPx/18vi/z07PeZNPRKxe/Kh0Ae8toxscCO4zBkYXArk9C1SxJUYjBkYPPIVtbbuTftz3cz//2O9wP/75iSAXdO72/dt2HL5F6YlfBW4MiJYXMiBiW3t7azHBx+V/t89N+H/8a+1//e9K/9attDp5LQjYX8SuvVL8RoAkmxa65299Erq1FnHo0qrl7t4BddriIs4MrM3rfWcFd+pGwVSAwBZ0bKP8yrZPAAAAABJRU5ErkJggg==') center left no-repeat!important;
  padding-left: 18px;
}
.linkify.youtube::before {
  content: "";
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAABIklEQVQoz53LvUrDUBjG8bOoOammSf1IoBSvoCB4JeIqOHgBLt6AIMRBBQelWurQ2kERnMRBsBUcIp5FJSBI5oQsJVkkUHh8W0o5nhaFHvjBgef/Mq+Q46RJBMkI/vE+aOus956tnEswIZe1LV0QyJ5sE2GzgZfVMtRNIdiDpccEssdlB1mW4bvTwdvWJtRdErM7U+8S/FJykCRJX5qm+KpVce8UMNLRLbulz4iSjTAMh6Iowsd5BeNadp3nUF0VlxAEwZBotXC0Usa4ll3meZdA1iguwvf9vpvDA2wvmKgYGtSud8suDB4TyGr2PF49D/vra9jRZ1BVdknMzgwuCGSnZEObwu6sBnVTCHZiaC7BhFx2PKdxUidiAH/4lLo9Mv0DELVs9qsOHXwAAAAASUVORK5CYII=') center left no-repeat!important;
  padding-left: 18px;
}
/* XXX Moved to end of stylesheet to avoid breaking whole stylesheet in Maxthon. */
@supports (text-decoration-style: dashed) or (-moz-text-decoration-style: dashed) {
  .quotelink.forwardlink,
  .backlink.forwardlink {
    text-decoration: underline;
    -moz-text-decoration-style: dashed;
    text-decoration-style: dashed;
    border-bottom: none;
  }
}
`,report:`#g-recaptcha,
:root:not(.js-enabled) #captchaContainerAlt {
  height: auto;
}
#captchaContainerAlt td:nth-child(2) {
  display: table-cell !important;
}
/* Archive reports */
#archive-report {
  padding: 3px;
}
#archive-report-enabled {
  vertical-align: middle;
}
#archive-report > label {
  display: block;
}
#archive-report-reason {
  display: block;
  width: 98%;
}
.archive-report-success {
  color: green;
}
.archive-report-error {
  color: red;
}`,www:`#captcha-cnt {
  height: auto;
}
:root:not(.js-enabled) #form {
  display: block;
}
#bd > div[style], #bd > div[style] > * {
  height: auto !important;
  margin: 0 !important;
  font-size: 0;
}
`,sub:function(t){var s={site:p.SITE.selectors};return t.replace(/\$[\w\$]+/g,function(o){for(var e=o.slice(1).split("$"),n=s,i=0;i<e.length;i++){if(typeof n!="object")return":not(*)";n=r.getOwn(n,e[i])}return typeof n!="string"?":not(*)":n})}},r=function(){var t,s=[].slice,o=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1};return t=function(e,n){return n==null&&(n=I.body),n.querySelector(e)},t.DAY=24*(t.HOUR=60*(t.MINUTE=60*(t.SECOND=1e3))),t.id=function(e){return I.getElementById(e)},t.ready=function(e){var n;if(I.readyState!=="loading"){t.queueTask(e);return}return n=function(){return t.off(I,"DOMContentLoaded",n),e()},t.on(I,"DOMContentLoaded",n)},t.formData=function(e){var n,i,a;if(e instanceof HTMLFormElement)return new FormData(e);n=new FormData;for(i in e)a=e[i],a&&(typeof a=="object"&&"newName"in a?n.append(i,a,a.newName):n.append(i,a));return n},t.extend=function(e,n){var i,a;for(i in n)a=n[i],e[i]=a},t.dict=function(){return Object.create(null)},t.dict.clone=function(e){var n,i,a,l,d,c,u;if(typeof e!="object"||e===null)return e;if(e instanceof Array){for(n=[],i=a=0,c=e.length;a<c;i=a+=1)n.push(t.dict.clone(e[i]));return n}else{d=Object.create(null);for(l in e)u=e[l],d[l]=t.dict.clone(u);return d}},t.dict.json=function(e){return t.dict.clone(JSON.parse(e))},t.hasOwn=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.getOwn=function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]},t.ajax=function(){var e;return window.wrappedJSObject&&!XMLHttpRequest.wrappedJSObject?e=XPCNativeWrapper(window.wrappedJSObject.XMLHttpRequest):e=XMLHttpRequest,function(n,i){var a,l,d,c,u,h,g,m,b,v,A,w,x;i==null&&(i={}),i.responseType==null&&(i.responseType="json"),i.type||(i.type=i.form&&"post"||"get"),n=n.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4channel|4cdn)\.org)\/adv\//,"$1//adv/"),u=i.onloadend,v=i.timeout,b=i.responseType,x=i.withCredentials,A=i.type,h=i.onprogress,l=i.form,d=i.headers,g=new e;try{g.open(A,n,!0),m=d||{};for(c in m)w=m[c],g.setRequestHeader(c,w);t.extend(g,{onloadend:u,timeout:v,responseType:b,withCredentials:x}),t.extend(g.upload,{onprogress:h}),t.on(g,"error",function(){if(!g.status)return ze.warn("4chan X failed to load: "+n)}),g.send(l)}catch(k){if(a=k,a.result!==2153644038)throw a;g.onloadend=u,t.queueTask(t.event,"error",null,g),t.queueTask(t.event,"loadend",null,g)}return g}}(),t.lastModified=t.dict(),t.whenModified=function(e,n,i,a){var l,d,c,u,h,g,m,b;return a==null&&(a={}),m=a.timeout,l=a.ajax,c=[],t.engine==="blink"&&c.push("s="+n),e.split("/")[2]==="a.4cdn.org"&&c.push("t="+Date.now()),b=e,c.length&&(e+="?"+c.join("&")),d=t.dict(),(g=(h=t.lastModified[n])!=null?h[b]:void 0)!=null&&(d["If-Modified-Since"]=g),u=(l||t.ajax)(e,{onloadend:function(){var v;return((v=t.lastModified)[n]||(v[n]=t.dict()))[b]=this.getResponseHeader("Last-Modified"),i.call(this)},timeout:m,headers:d}),u},function(){var e;return e=t.dict(),t.cache=function(n,i,a){var l,d,c;return a==null&&(a={}),l=a.ajax,(c=e[n])?(c.callbacks?c.callbacks.push(i):t.queueTask(function(){return i.call(c,{isCached:!0})}),c):(d=function(){var u,h,g,m;for(this.status||delete e[n],m=this.callbacks,u=function(b){return function(v){return t.queueTask(function(){return v.call(b,{isCached:!1})})}}(this),h=0,g=m.length;h<g;h++)i=m[h],u(i);return delete this.callbacks},c=(l||t.ajax)(n,{onloadend:d}),c.callbacks=[i],e[n]=c)},t.cleanCache=function(n){var i;for(i in e)n(i)&&delete e[i]}}(),t.cb={checked:function(){if(t.hasOwn(f,this.name))return t.set(this.name,this.checked),f[this.name]=this.checked},value:function(){if(t.hasOwn(f,this.name))return t.set(this.name,this.value.trim()),f[this.name]=this.value}},t.asap=function(e,n){return e()?n():setTimeout(t.asap,25,e,n)},t.onExists=function(e,n,i){var a,l;return(a=t(n,e))?i(a):(l=new MutationObserver(function(){if(a=t(n,e))return l.disconnect(),i(a)}),l.observe(e,{childList:!0,subtree:!0}))},t.addStyle=function(e,n,i){var a;return i==null&&(i="head"),a=t.el("style",{textContent:e}),n!=null&&(a.id=n),t.onExists(E,i,function(){return t.add(I.head,a)}),a},t.addCSP=function(e){var n,i;return i=t.el("meta",{httpEquiv:"Content-Security-Policy",content:e}),I.head?(t.add(I.head,i),t.rm(i)):(n=t.add(E||I,t.el("head")),t.add(n,i),t.rm(n))},t.x=function(e,n){return n||(n=I.body),I.evaluate(e,n,null,8,null).singleNodeValue},t.X=function(e,n){return n||(n=I.body),I.evaluate(e,n,null,7,null)},t.addClass=function(){var e,n,i,a,l;for(i=arguments[0],n=2<=arguments.length?s.call(arguments,1):[],a=0,l=n.length;a<l;a++)e=n[a],i.classList.add(e)},t.rmClass=function(){var e,n,i,a,l;for(i=arguments[0],n=2<=arguments.length?s.call(arguments,1):[],a=0,l=n.length;a<l;a++)e=n[a],i.classList.remove(e)},t.toggleClass=function(e,n){return e.classList.toggle(n)},t.hasClass=function(e,n){return o.call(e.classList,n)>=0},t.rm=function(e){return e?.remove()},t.rmAll=function(e){return e.textContent=null},t.tn=function(e){return I.createTextNode(e)},t.frag=function(){return I.createDocumentFragment()},t.nodes=function(e){var n,i,a,l;if(!(e instanceof Array))return e;for(n=t.frag(),i=0,a=e.length;i<a;i++)l=e[i],n.appendChild(l);return n},t.add=function(e,n){return e.appendChild(t.nodes(n))},t.prepend=function(e,n){return e.insertBefore(t.nodes(n),e.firstChild)},t.after=function(e,n){return e.parentNode.insertBefore(t.nodes(n),e.nextSibling)},t.before=function(e,n){return e.parentNode.insertBefore(t.nodes(n),e)},t.replace=function(e,n){return e.parentNode.replaceChild(t.nodes(n),e)},t.el=function(e,n,i){var a;return a=I.createElement(e),n&&t.extend(a,n),i&&t.extend(a,i),a},t.on=function(e,n,i){var a,l,d,c;for(c=n.split(" "),l=0,d=c.length;l<d;l++)a=c[l],e.addEventListener(a,i,!1)},t.off=function(e,n,i){var a,l,d,c;for(c=n.split(" "),l=0,d=c.length;l<d;l++)a=c[l],e.removeEventListener(a,i,!1)},t.one=function(e,n,i){var a;return a=function(l){return t.off(e,n,a),i.call(this,l)},t.on(e,n,a)},t.event=function(e,n,i){return i==null&&(i=I),n!=null&&typeof cloneInto=="function"&&(n=cloneInto(n,I.defaultView)),i.dispatchEvent(new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n}))},function(){var e,n,i,a;if(/PaleMoon\//.test(navigator.userAgent)&&+(typeof GM_info<"u"&&GM_info!==null&&(i=GM_info.version)!=null?i.split(".")[0]:void 0)>=2&&typeof cloneInto>"u")try{return new CustomEvent("x",{detail:{}})}catch(l){return n=l,a={Object:unsafeWindow.Object,Array:unsafeWindow.Array},e=function(d){var c,u,h,g;if(d!=null&&typeof d=="object"&&(c=a[d.constructor.name])){h=new c;for(u in d)g=d[u],h[u]=e(g);return h}else return d},t.event=function(d,c,u){return u==null&&(u=I),u.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:e(c)}))}}}(),t.modifiedClick=function(e){return e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||e.button!==0},t.open=(typeof GM<"u"&&GM!==null?GM.openInTab:void 0)!=null?GM.openInTab:typeof GM_openInTab<"u"&&GM_openInTab!==null?GM_openInTab:function(e){return window.open(e,"_blank")},t.debounce=function(e,n){var i,a,l,d,c;return l=0,c=null,d=null,i=null,a=function(){return l=Date.now(),n.apply(d,i)},function(){return i=arguments,d=this,l<Date.now()-e?a():(clearTimeout(c),c=setTimeout(a,e))}},t.queueTask=function(){var e,n,i;return i=[],e=function(){var a,l,d;return d=i.shift(),l=d[0],a=Array.prototype.slice.call(d,1),l.apply(l,a)},window.MessageChannel?(n=new MessageChannel,n.port1.onmessage=e,function(){return i.push(arguments),n.port2.postMessage(null)}):function(){return i.push(arguments),setTimeout(e,0)}}(),t.global=function(e,n){var i;if(E)return i=t.el("script",{textContent:"("+e+").call(document.currentScript.dataset);"}),n&&t.extend(i.dataset,n),t.add(I.head||E,i),t.rm(i),i.dataset;try{e.call(n)}catch{}return n},t.bytesToString=function(e){var n;for(n=0;e>=1024;)e/=1024,n++;return e=n>1?Math.round(e*100)/100:Math.round(e),e+" "+["B","KB","MB","GB"][n]},t.minmax=function(e,n,i){return e<n?n:e>i?i:e},t.hasAudio=function(e){return e.mozHasAudio||!!e.webkitAudioDecodedByteCount},t.luma=function(e){return e[0]*.299+e[1]*.587+e[2]*.114},t.unescape=function(e){return e==null?e:e.replace(/<[^>]*>/g,"").replace(/&(amp|#039|quot|lt|gt|#44);/g,function(n){return{"&amp;":"&","&#039;":"'","&quot;":'"',"&lt;":"<","&gt;":">","&#44;":","}[n]})},t.isImage=function(e){return/\.(jpe?g|jfif|png|gif|bmp|webp|avif|jxl)$/i.test(e)},t.isVideo=function(e){return/\.(webm|mp4|ogv)$/i.test(e)},t.engine=function(){if(/Edge\//.test(navigator.userAgent))return"edge";if(/Chrome\//.test(navigator.userAgent))return"blink";if(/WebKit\//.test(navigator.userAgent))return"webkit";if(/Gecko\/|Goanna/.test(navigator.userAgent))return"gecko"}(),t.platform="userscript",t.hasStorage=function(){try{return localStorage.getItem(p.NAMESPACE+"hasStorage")==="true"?!0:(localStorage.setItem(p.NAMESPACE+"hasStorage","true"),localStorage.getItem(p.NAMESPACE+"hasStorage")==="true")}catch{return!1}}(),t.item=function(e,n){var i;return i=t.dict(),i[e]=n,i},t.oneItemSugar=function(e){return function(n,i,a){return typeof n=="string"?e(t.item(n,i),a):e(n,i)}},t.syncing=t.dict(),t.securityCheck=function(e){if(location.protocol!=="https:")return delete e["Redirect to HTTPS"]},(typeof GM<"u"&&GM!==null?GM.deleteValue:void 0)!=null&&window.BroadcastChannel&&(typeof GM_addValueChangeListener>"u"||GM_addValueChangeListener===null)?(t.syncChannel=new BroadcastChannel(p.NAMESPACE+"sync"),t.on(t.syncChannel,"message",function(e){var n,i,a,l,d;a=e.data,l=[];for(i in a)d=a[i],(n=t.syncing[i])&&l.push(n(t.dict.json(JSON.stringify(d)),i));return l}),t.sync=function(e,n){return t.syncing[e]=n},t.forceSync=function(){},t.delete=function(e,n){var i;return e instanceof Array||(e=[e]),Promise.all(function(){var a,l,d;for(d=[],a=0,l=e.length;a<l;a++)i=e[a],d.push(GM.deleteValue(p.NAMESPACE+i));return d}()).then(function(){var a,l,d,c;for(a=t.dict(),l=0,c=e.length;l<c;l++)d=e[l],a[d]=void 0;return t.syncChannel.postMessage(a),typeof n=="function"?n():void 0})},t.get=t.oneItemSugar(function(e,n){var i,a;return a=Object.keys(e),Promise.all(function(){var l,d,c;for(c=[],l=0,d=a.length;l<d;l++)i=a[l],c.push(GM.getValue(p.NAMESPACE+i));return c}()).then(function(l){var d,c,u,h;for(d=c=0,u=l.length;c<u;d=++c)h=l[d],h&&(e[a[d]]=t.dict.json(h));return n(e)})}),t.set=t.oneItemSugar(function(e,n){var i,a;return t.securityCheck(e),Promise.all(function(){var l;l=[];for(i in e)a=e[i],l.push(GM.setValue(p.NAMESPACE+i,JSON.stringify(a)));return l}()).then(function(){return t.syncChannel.postMessage(e),typeof n=="function"?n():void 0})}),t.clear=function(e){return GM.listValues().then(function(n){return t.delete(n.map(function(i){return i.replace(p.NAMESPACE,"")}),e)}).catch(function(){return t.delete(Object.keys(f).concat(["previousversion","QR Size","QR.persona"]),e)})}):((typeof GM_deleteValue>"u"||GM_deleteValue===null)&&(t.perProtocolSettings=!0),typeof GM_deleteValue<"u"&&GM_deleteValue!==null?(t.getValue=GM_getValue,t.listValues=function(){return GM_listValues()}):t.hasStorage?(t.getValue=function(e){return localStorage.getItem(e)},t.listValues=function(){var e,n;n=[];for(e in localStorage)e.slice(0,p.NAMESPACE.length)===p.NAMESPACE&&n.push(e);return n}):(t.getValue=function(){},t.listValues=function(){return[]}),typeof GM_addValueChangeListener<"u"&&GM_addValueChangeListener!==null?(t.setValue=GM_setValue,t.deleteValue=GM_deleteValue):typeof GM_deleteValue<"u"&&GM_deleteValue!==null?(t.oldValue=t.dict(),t.setValue=function(e,n){if(GM_setValue(e,n),e in t.syncing&&(t.oldValue[e]=n,t.hasStorage))return localStorage.setItem(e,n)},t.deleteValue=function(e){if(GM_deleteValue(e),e in t.syncing&&(delete t.oldValue[e],t.hasStorage))return localStorage.removeItem(e)},t.hasStorage||(t.cantSync=!0)):t.hasStorage?(t.oldValue=t.dict(),t.setValue=function(e,n){return e in t.syncing&&(t.oldValue[e]=n),localStorage.setItem(e,n)},t.deleteValue=function(e){return e in t.syncing&&delete t.oldValue[e],localStorage.removeItem(e)}):(t.setValue=function(){},t.deleteValue=function(){},t.cantSync=t.cantSet=!0),typeof GM_addValueChangeListener<"u"&&GM_addValueChangeListener!==null?(t.sync=function(e,n){return t.syncing[e]=GM_addValueChangeListener(p.NAMESPACE+e,function(i,a,l,d){if(d)return l!==void 0&&(l=t.dict.json(l)),n(l,e)})},t.forceSync=function(){}):typeof GM_deleteValue<"u"&&GM_deleteValue!==null||t.hasStorage?(t.sync=function(e,n){return e=p.NAMESPACE+e,t.syncing[e]=n,t.oldValue[e]=t.getValue(e)},function(){var e;return e=function(n){var i,a,l;if(a=n.key,l=n.newValue,!!(i=t.syncing[a]))return l!=null?l===t.oldValue[a]?void 0:(t.oldValue[a]=l,i(t.dict.json(l),a.slice(p.NAMESPACE.length))):t.oldValue[a]==null?void 0:(delete t.oldValue[a],i(void 0,a.slice(p.NAMESPACE.length)))},t.on(window,"storage",e),t.forceSync=function(n){return n=p.NAMESPACE+n,e({key:n,newValue:t.getValue(n)})}}()):(t.sync=function(){},t.forceSync=function(){}),t.delete=function(e){var n,i,a;for(e instanceof Array||(e=[e]),n=0,a=e.length;n<a;n++)i=e[n],t.deleteValue(p.NAMESPACE+i)},t.get=t.oneItemSugar(function(e,n){return t.queueTask(t.getSync,e,n)}),t.getSync=function(e,n){var i,a,l;for(a in e)if(l=t.getValue(p.NAMESPACE+a))try{e[a]=t.dict.json(l)}catch(d){if(i=d,!/^(?:undefined)*$/.test(l))throw i}return n(e)},t.set=t.oneItemSugar(function(e,n){return t.securityCheck(e),t.queueTask(function(){var i,a;for(i in e)a=e[i],t.setValue(p.NAMESPACE+i,JSON.stringify(a));return typeof n=="function"?n():void 0})}),t.clear=function(e){t.delete(Object.keys(f)),t.delete(["previousversion","QR Size","QR.persona"]);try{t.delete(t.listValues().map(function(n){return n.replace(p.NAMESPACE,"")}))}catch{}return typeof e=="function"?e():void 0}),t}.call(this),N=function(){var t,s=[].slice;return t=function(o,e){return e==null&&(e=I.body),s.call(e.querySelectorAll(o))},t}.call(this),be=function(){var t,s;return t={binary:function(o,e,n){var i,a;if(n==null&&(n=r.dict()),o=o.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4channel|4cdn)\.org)\/adv\//,"$1//adv/"),i=function(){return r.ajax(o,{headers:n,responseType:"arraybuffer",onloadend:function(){return this.status&&this.response?e(new Uint8Array(this.response),this.getAllResponseHeaders()):e(null)}})},!((typeof GM<"u"&&GM!==null?GM.xmlHttpRequest:void 0)!=null||typeof GM_xmlhttpRequest<"u"&&GM_xmlhttpRequest!==null)){i();return}a={method:"GET",url:o,headers:n,responseType:"arraybuffer",overrideMimeType:"text/plain; charset=x-user-defined",onload:function(l){var d,c,u;if(l.response instanceof ArrayBuffer)d=new Uint8Array(l.response);else for(u=l.responseText,d=new Uint8Array(u.length),c=0;c<u.length;)d[c]=u.charCodeAt(c),c++;return e(d,l.responseHeaders)},onerror:function(){return e(null)},onabort:function(){return e(null)}};try{return((typeof GM<"u"&&GM!==null?GM.xmlHttpRequest:void 0)||GM_xmlhttpRequest)(a)}catch{return i()}},file:function(o,e){return t.binary(o,function(n,i){var a,l,d,c,u,h,g,m,b,v,A;return n==null?e(null):(h=(g=o.match(/([^\/?#]+)\/*(?:$|[?#])/))!=null?g[1]:void 0,d=(m=i.match(/Content-Type:\s*(.*)/i))!=null?m[1]:void 0,l=(b=i.match(/Content-Disposition:\s*(.*)/i))!=null?b[1]:void 0,u=d?.match(/[^;]*/)[0]||"application/octet-stream",c=(l!=null&&(v=l.match(/\bfilename\s*=\s*"((\\"|[^"])+)"/i))!=null?v[1]:void 0)||(d!=null&&(A=d.match(/\bname\s*=\s*"((\\"|[^"])+)"/i))!=null?A[1]:void 0),c&&(h=c.replace(/\\"/g,'"')),/^text\/plain;\s*charset=x-user-defined$/i.test(u)&&(u=r.getOwn(y.typeFromExtension,h.match(/[^.]*$/)[0].toLowerCase())||"application/octet-stream"),a=new Blob([n],{type:u}),a.name=h,e(a))})},Request:s=function(){function o(){}return o.prototype.status=0,o.prototype.statusText="",o.prototype.response=null,o.prototype.responseHeaderString=null,o.prototype.getResponseHeader=function(e){var n,i,a,l,d,c,u,h,g;if(this.responseHeaders==null&&this.responseHeaderString!=null)for(this.responseHeaders=r.dict(),c=this.responseHeaderString.split(`\r
`),a=0,d=c.length;a<d;a++)n=c[a],(i=n.indexOf(":"))>=0&&(l=n.slice(0,i).trim().toLowerCase(),g=n.slice(i+1).trim(),this.responseHeaders[l]=g);return(u=(h=this.responseHeaders)!=null?h[e.toLowerCase()]:void 0)!=null?u:null},o.prototype.abort=function(){},o.prototype.onloadend=function(){},o}(),ajax:function(o,e){var n,i,a,l,d,c,u;if(e==null&&(e={}),l=e.onloadend,u=e.timeout,c=e.responseType,a=e.headers,c==null&&(c="json"),!((typeof GM<"u"&&GM!==null?GM.xmlHttpRequest:void 0)!=null||typeof GM_xmlhttpRequest<"u"&&GM_xmlhttpRequest!==null))return r.ajax(o,e);d=new t.Request,d.onloadend=l,n={method:"GET",url:o,headers:a,timeout:u,onload:function(h){var g;try{g=function(){switch(c){case"json":return h.responseText?JSON.parse(h.responseText):null;default:return h.responseText}}(),r.extend(d,{response:g,status:h.status,statusText:h.statusText,responseHeaderString:h.responseHeaders})}catch{}return d.onloadend()},onerror:function(){return d.onloadend()},onabort:function(){return d.onloadend()},ontimeout:function(){return d.onloadend()}};try{i=((typeof GM<"u"&&GM!==null?GM.xmlHttpRequest:void 0)||GM_xmlhttpRequest)(n)}catch{return r.ajax(o,e)}return i&&typeof i.abort=="function"&&(d.abort=function(){try{return i.abort()}catch{}}),d},cache:function(o,e){return r.cache(o,e,{ajax:t.ajax})},permission:function(o){return o()}},t}.call(this),Ee=function(){var t;return t=function(){s.prototype.toString=function(){return this.ID};function s(o){var e;this.ID=o,this.boardID=this.ID,this.siteID=p.SITE.ID,this.threads=new qe,this.posts=new qe,this.config=((e=oe.boards)!=null?e[this.ID]:void 0)||{},p.boards[this]=this}return s.prototype.cooldowns=function(){var o,e,n,i,a,l;if(e=(this.config||{}).cooldowns||{},o={thread:e.threads||0,reply:e.replies||0,image:e.images||0,thread_global:300},I.cookie.indexOf("pass_enabled=1")>=0)for(l=["reply","image"],n=0,a=l.length;n<a;n++)i=l[n],o[i]=Math.ceil(o[i]/2);return o},s}(),t}.call(this),F=function(){var t;return t=function(){s.Post=new s("Post"),s.Thread=new s("Thread"),s.CatalogThread=new s("Catalog Thread"),s.CatalogThreadNative=new s("Catalog Thread");function s(o){this.type=o,this.keys=[]}return s.prototype.push=function(o){var e,n;return n=o.name,e=o.cb,this[n]||this.keys.push(n),this[n]=e},s.prototype.execute=function(o,e,n){var i,a,l,d,c,u,h,g;if(e==null&&(e=this.keys),n==null&&(n=!1),!(o.callbacksExecuted&&!n)){for(o.callbacksExecuted=!0,l=0,d=e.length;l<d;l++){c=e[l];try{(u=this[c])!=null&&u.call(o)}catch(m){i=m,a||(a=[]),a.push({message:['"',c,'" crashed on node ',this.type," No.",o.ID," (",o.board,")."].join(""),error:i,html:(h=o.nodes)!=null&&(g=h.root)!=null?g.outerHTML:void 0})}}if(a)return Z.handleErrors(a)}},s}(),t}.call(this),ft=function(){var t;return t=function(){s.prototype.toString=function(){return this.ID};function s(o,e){var n;this.thread=e,this.ID=this.thread.ID,this.board=this.thread.board,n=this.thread.OP.nodes.post,this.nodes={root:o,thumb:r(".catalog-thumb",n),icons:r(".catalog-icons",n),postCount:r(".post-count",n),fileCount:r(".file-count",n),pageCount:r(".page-count",n),replies:null},this.thread.catalogView=this}return s}(),t}.call(this),ht=function(){var t;return t=function(){s.prototype.toString=function(){return this.ID};function s(o){this.nodes={root:o,thumb:r(p.SITE.selectors.catalog.thumb,o)},this.siteID=p.SITE.ID,this.boardID=this.nodes.thumb.parentNode.pathname.split(/\/+/)[1],this.board=p.boards[this.boardID]||new Ee(this.boardID),this.ID=this.threadID=+(o.dataset.id||o.id).match(/\d*$/)[0],this.thread=this.board.threads.get(this.ID)||new Se(this.ID,this.board)}return s}(),t}.call(this),Zt=function(){var t,s=function(o,e){return function(){return o.apply(e,arguments)}};return t=function(){function o(e,n,i){this.target=e,this.origin=n,this.cb=i??{},this.onMessage=s(this.onMessage,this),this.send=s(this.send,this),r.on(window,"message",this.onMessage)}return o.prototype.targetWindow=function(){return this.target instanceof window.HTMLIFrameElement?this.target.contentWindow:this.target},o.prototype.send=function(e){return this.targetWindow().postMessage(""+p.NAMESPACE+JSON.stringify(e),this.origin)},o.prototype.onMessage=function(e){var n,i,a;if(e.source===this.targetWindow()&&e.origin===this.origin&&typeof e.data=="string"&&e.data.slice(0,p.NAMESPACE.length)===p.NAMESPACE){n=JSON.parse(e.data.slice(p.NAMESPACE.length));for(i in n)a=n[i],r.hasOwn(this.cb,i)&&this.cb[i](a)}},o}(),t}.call(this),fe=function(){var t,s=function(o,e){return function(){return o.apply(e,arguments)}};return t=function(){o.keys=["hiddenThreads","hiddenPosts","lastReadPosts","yourPosts","watchedThreads","watcherLastModified","customTitles"];function o(e,n,i){var a;this.key=e,this.onSync=s(this.onSync,this),this.initData(f[this.key]),r.sync(this.key,this.onSync),i||this.clean(),n&&(a=function(l){return function(){return r.off(I,"4chanXInitFinished",a),l.sync=n}}(this),r.on(I,"4chanXInitFinished",a))}return o.prototype.initData=function(e){var n,i,a,l,d;return this.data=e,this.data.boards&&(d=this.data,i=d.boards,a=d.lastChecked,this.data["4chan.org"]={boards:i,lastChecked:a},delete this.data.boards,delete this.data.lastChecked),(n=this.data)[l=p.SITE.ID]||(n[l]={boards:r.dict()})},o.prototype.changes=[],o.prototype.save=function(e,n){return e(),this.changes.push(e),r.get(this.key,{boards:r.dict()},function(i){return function(a){var l,d,c,u;if(i.changes.length){if(c=(a[i.key].version||0)>(i.data.version||0),c)for(i.initData(a[i.key]),u=i.changes,l=0,d=u.length;l<d;l++)e=u[l],e();return i.changes=[],i.data.version=(i.data.version||0)+1,r.set(i.key,i.data,function(){return c&&typeof i.sync=="function"&&i.sync(),typeof n=="function"?n():void 0})}}}(this))},o.prototype.forceSync=function(e){return r.get(this.key,{boards:r.dict()},function(n){return function(i){var a,l,d,c;if((i[n.key].version||0)>(n.data.version||0)){for(n.initData(i[n.key]),c=n.changes,l=0,d=c.length;l<d;l++)a=c[l],a();typeof n.sync=="function"&&n.sync()}return typeof e=="function"?e():void 0}}(this))},o.prototype.delete=function(e,n){var i,a,l,d;if(l=e.siteID,i=e.boardID,d=e.threadID,a=e.postID,l||(l=p.SITE.ID),!!this.data[l])return this.save(function(c){return function(){var u;return a?(u=c.data[l].boards[i])!=null&&u[d]?(delete c.data[l].boards[i][d][a],c.deleteIfEmpty({siteID:l,boardID:i,threadID:d})):void 0:d?c.data[l].boards[i]?(delete c.data[l].boards[i][d],c.deleteIfEmpty({siteID:l,boardID:i})):void 0:delete c.data[l].boards[i]}}(this),n)},o.prototype.deleteIfEmpty=function(e){var n,i,a;if(i=e.siteID,n=e.boardID,a=e.threadID,!!this.data[i]){if(a){if(!Object.keys(this.data[i].boards[n][a]).length)return delete this.data[i].boards[n][a],this.deleteIfEmpty({siteID:i,boardID:n})}else if(!Object.keys(this.data[i].boards[n]).length)return delete this.data[i].boards[n]}},o.prototype.set=function(e,n){return this.save(function(i){return function(){return i.setUnsafe(e)}}(this),n)},o.prototype.setUnsafe=function(e){var n,i,a,l,d,c,u,h,g;return u=e.siteID,d=e.boardID,h=e.threadID,c=e.postID,g=e.val,u||(u=p.SITE.ID),(n=this.data)[u]||(n[u]={boards:r.dict()}),c!==void 0?((i=(a=this.data[u].boards)[d]||(a[d]=r.dict()))[h]||(i[h]=r.dict()))[c]=g:h!==void 0?((l=this.data[u].boards)[d]||(l[d]=r.dict()))[h]=g:this.data[u].boards[d]=g},o.prototype.extend=function(e,n){var i,a,l,d,c;return l=e.siteID,i=e.boardID,d=e.threadID,a=e.postID,c=e.val,this.save(function(u){return function(){var h,g,m;g=u.get({siteID:l,boardID:i,threadID:d,postID:a,defaultValue:r.dict()});for(h in c)m=c[h],typeof m>"u"?delete g[h]:g[h]=m;return u.setUnsafe({siteID:l,boardID:i,threadID:d,postID:a,val:g})}}(this),n)},o.prototype.setLastChecked=function(e){return e==null&&(e="lastChecked"),this.save(function(n){return function(){return n.data[e]=Date.now()}}(this))},o.prototype.get=function(e){var n,i,a,l,d,c,u,h,g,m,b,v;if(g=e.siteID,a=e.boardID,b=e.threadID,u=e.postID,l=e.defaultValue,g||(g=p.SITE.ID),i=(h=this.data[g])!=null?h.boards[a]:void 0)if(b==null)if(u!=null){for(m=d=0,c=i.length;d<c;m=++d)if(n=i[m],u in m){v=m[u];break}}else v=i;else(m=i[b])&&(v=u!=null?m[u]:m);return v||l},o.prototype.clean=function(){var e,n,i,a,l,d;l=p.SITE.ID,i=this.data[l].boards;for(e in i)d=i[e],this.deleteIfEmpty({siteID:l,boardID:e});if(n=Date.now(),!(n-2*r.HOUR<(a=this.data[l].lastChecked||0)&&a<=n)){this.data[l].lastChecked=n;for(e in this.data[l].boards)this.ajaxClean(e)}},o.prototype.ajaxClean=function(e){var n,i,a,l;if(a=this,i=p.SITE.ID,l=typeof(n=p.SITE.urls).threadsListJSON=="function"?n.threadsListJSON({siteID:i,boardID:e}):void 0,!!l)return r.cache(l,function(){var d,c,u;if(this.status===200)return d=typeof(c=p.SITE.urls).archiveListJSON=="function"?c.archiveListJSON({siteID:i,boardID:e}):void 0,d?(u=this.response,r.cache(d,function(){if(this.status===200||!p.SITE.archivedBoardsKnown&&this.status===404)return a.ajaxCleanParse(e,u,this.response)})):a.ajaxCleanParse(e,this.response)})},o.prototype.ajaxCleanParse=function(e,n,i){var a,l,d,c,u,h,g,m,b,v,A,w,x;if(A=p.SITE.ID,!!(l=this.data[A].boards[e])){if(x=r.dict(),n)for(d=0,h=n.length;d<h;d++)for(b=n[d],v=b.threads,c=0,g=v.length;c<g;c++)w=v[c],a=w.no,a in l&&(x[a]=l[a]);if(i)for(u=0,m=i.length;u<m;u++)a=i[u],a in l&&(x[a]=l[a]);return this.data[A].boards[e]=x,this.deleteIfEmpty({siteID:A,boardID:e}),r.set(this.key,this.data)}},o.prototype.onSync=function(e){if((e.version||0)>(this.data.version||0))return this.initData(e),typeof this.sync=="function"?this.sync():void 0},o}(),t}.call(this),nt=function(){var t,s=[].slice;return t=function(){function o(e,n,i,a,l){var d,c,u,h,g;if(this.boardID=e,this.threadID=n,this.postID=i,this.root=a,this.quoter=l,c=p.posts.get(this.boardID+"."+this.postID)){this.insert(c);return}if((c=(u=X.replyData)!=null?u[this.boardID+"."+this.postID]:void 0)&&(g=p.threads.get(this.boardID+"."+this.threadID))){d=p.boards[this.boardID],c=new ae(p.SITE.Build.postFromObject(c,this.boardID),g,d,{isFetchedQuote:!0}),Z.callbackNodes("Post",[c]),this.insert(c);return}this.root.textContent="Loading post No."+this.postID+"...",this.threadID?(h=this,r.cache(p.SITE.urls.threadJSON({boardID:this.boardID,threadID:this.threadID}),function(m){var b;return b=m.isCached,h.fetchedPost(this,b)})):this.archivedPost()}return o.prototype.insert=function(e){var n,i,a,l,d,c,u,h,g,m,b;if(this.root.parentNode){for(this.quoter||(this.quoter=e),i=e.addClone(this.quoter.context,r.hasClass(this.root,"dialog")),Z.callbackNodes("Post",[i]),c=i.nodes,r.rmAll(c.root),r.add(c.root,c.post),g=i.nodes.quotelinks.concat(s.call(i.nodes.backlinks)),l=0,d=g.length;l<d;l++)h=g[l],m=H.postDataFromLink(h),n=m.boardID,u=m.postID,u===this.quoter.ID&&n===this.quoter.board.ID&&r.addClass(h,"forwardlink");return i.nodes.flag&&!(o.flagCSS||(o.flagCSS=r('link[href^="//s.4cdn.org/css/flags."]')))&&(a=((b=r('link[href^="//s.4cdn.org/css/"]'))!=null?b.href.match(/\d+(?=\.css$)|$/)[0]:void 0)||Date.now(),o.flagCSS=r.el("link",{rel:"stylesheet",href:"//s.4cdn.org/css/flags."+a+".css"}),r.add(I.head,o.flagCSS)),r.rmAll(this.root),r.add(this.root,c.root),r.event("PostsInserted",null,this.root)}},o.prototype.fetchedPost=function(e,n){var i,a,l,d,c,u,h,g,m;if(c=p.posts.get(this.boardID+"."+this.postID)){this.insert(c);return}if(h=e.status,h!==200){if(h&&this.archivedPost())return;r.addClass(this.root,"warning"),this.root.textContent=h===404?"Thread No."+this.threadID+" 404'd.":h?"Error "+e.statusText+" ("+e.status+").":"Connection Error";return}for(u=e.response.posts,p.SITE.Build.spoilerRange[this.boardID]=u[0].custom_spoiler,l=0,d=u.length;l<d&&(c=u[l],c.no!==this.postID);l++);if(c.no!==this.postID){if(n){i=p.SITE.urls.threadJSON({boardID:this.boardID,threadID:this.threadID}),r.cleanCache(function(b){return b===i}),g=this,r.cache(i,function(){return g.fetchedPost(this,!1)});return}if(this.archivedPost())return;r.addClass(this.root,"warning"),this.root.textContent="Post No."+this.postID+" was not found.";return}return a=p.boards[this.boardID]||new Ee(this.boardID),m=p.threads.get(this.boardID+"."+this.threadID)||new Se(this.threadID,a),c=new ae(p.SITE.Build.postFromObject(c,this.boardID),m,a,{isFetchedQuote:!0}),Z.callbackNodes("Post",[c]),this.insert(c)},o.prototype.archivedPost=function(){var e,n,i,a;return!f["Resurrect Quotes"]||!(a=ne.to("post",{boardID:this.boardID,postID:this.postID}))?!1:(e=ne.data.post[this.boardID],n=/^https:\/\//.test(a)||location.protocol==="http:",n||f["Exempt Archives from Encryption"]?(i=this,be.cache(a,function(){var l,d,c,u;if(!n&&((c=this.response)!=null&&c.media)){d=this.response.media;for(l in d)/_link$/.test(l)&&((u=r.getOwn(d,l))!=null&&u.match(/^http:\/\//)||delete d[l])}return i.parseArchivedPost(this.response,a,e)}),!0):!1)},o.prototype.parseArchivedPost=function(e,n,i){var a,l,d,c,u,h,g,m,b,v,A,w,x,k;if(m=p.posts.get(this.boardID+"."+this.postID)){this.insert(m);return}if(e==null){r.addClass(this.root,"warning"),this.root.textContent="Error fetching Post No."+this.postID+" from "+i.name+".";return}if(e.error){r.addClass(this.root,"warning"),this.root.textContent=e.error;return}return l=(e.comment||"").split(/(\n|\[\/?(?:b|spoiler|code|moot|banned|fortune(?: color="#\w+")?|i|red|green|blue)\])/),l=function(){var C,D,S;for(S=[],c=C=0,D=l.length;C<D;c=++C)A=l[c],c%2===1?(v=this.archiveTags[A.replace(/\ .*\]/,"]")],typeof v=="function"?S.push(v(A)):S.push(v)):(d=A[0]===">",A=A.replace(/(\[\/?[a-z]+):lit(\])/g,"$1$2"),A=function(){var R,B,M,P;for(M=A.split(/(>>(?:>\/[a-z\d]+\/)?\d+)/g),P=[],u=R=0,B=M.length;R<B;u=++R)w=M[u],P.push({innerHTML:u%2?'<span class="deadlink">'+T(w)+"</span>":T(w)});return P}(),A={innerHTML:d?'<span class="quote">'+T.cat(A)+"</span>":T.cat(A)},S.push(A));return S}.call(this),l={innerHTML:T.cat(l)},this.threadID=+e.thread_num,g={ID:this.postID,threadID:this.threadID,boardID:this.boardID,isReply:this.postID!==this.threadID},g.info={subject:e.title,email:e.email,name:e.name||"",tripcode:e.trip,capcode:function(){switch(e.capcode){case"M":return"Mod";case"A":return"Admin";case"D":return"Developer";case"V":return"Verified";case"F":return"Founder";case"G":return"Manager"}}(),uniqueID:e.poster_hash,flagCode:e.poster_country,flagCodeTroll:e.troll_country_code,flag:e.poster_country_name||e.troll_country_name,dateUTC:e.timestamp,dateText:e.fourchan_date,commentHTML:l},g.info.capcode&&delete g.info.uniqueID,e.media&&+e.media.banned?g.fileDeleted=!0:(b=e.media)!=null&&b.media_filename&&(k=e.media.thumb_link,k?.[0]==="/"&&(k=n.split("/",3).join("/")+k),ne.securityCheck(k)||(k=""),h=ne.to("file",{boardID:this.boardID,filename:e.media.media_orig}),ne.securityCheck(h)||(h=""),g.file={name:e.media.media_filename,url:h||(this.boardID==="f"?location.protocol+"//"+re.flashHost()+"/"+this.boardID+"/"+encodeURIComponent(T(e.media.media_filename)):location.protocol+"//"+re.host()+"/"+this.boardID+"/"+e.media.media_orig),height:e.media.media_h,width:e.media.media_w,MD5:e.media.media_hash,size:r.bytesToString(e.media.media_size),thumbURL:k||location.protocol+"//"+re.thumbHost()+"/"+this.boardID+"/"+e.media.preview_orig,theight:e.media.preview_h,twidth:e.media.preview_w,isSpoiler:e.media.spoiler==="1"},/\.pdf$/.test(g.file.url)||(g.file.dimensions=g.file.width+"x"+g.file.height),this.boardID==="f"&&e.media.exif&&(g.file.tag=JSON.parse(e.media.exif).Tag)),g.extra=r.dict(),a=p.boards[this.boardID]||new Ee(this.boardID),x=p.threads.get(this.boardID+"."+this.threadID)||new Se(this.threadID,a),m=new ae(p.SITE.Build.post(g),x,a,{isFetchedQuote:!0}),m.kill(),m.file&&(m.file.thumbURL=g.file.thumbURL),Z.callbackNodes("Post",[m]),this.insert(m)},o.prototype.archiveTags={"\n":{innerHTML:"<br>"},"[b]":{innerHTML:"<b>"},"[/b]":{innerHTML:"</b>"},"[spoiler]":{innerHTML:"<s>"},"[/spoiler]":{innerHTML:"</s>"},"[code]":{innerHTML:'<pre class="prettyprint">'},"[/code]":{innerHTML:"</pre>"},"[moot]":{innerHTML:'<div style="padding:5px;margin-left:.5em;border-color:#faa;border:2px dashed rgba(255,0,0,.1);border-radius:2px">'},"[/moot]":{innerHTML:"</div>"},"[banned]":{innerHTML:'<strong style="color: red;">'},"[/banned]":{innerHTML:"</strong>"},"[fortune]":function(e){return{innerHTML:'<span class="fortune" style="color:'+T(e.match(/#\w+|$/)[0])+'"><b>'}},"[/fortune]":{innerHTML:"</b></span>"},"[i]":{innerHTML:'<span class="mu-i">'},"[/i]":{innerHTML:"</span>"},"[red]":{innerHTML:'<span class="mu-r">'},"[/red]":{innerHTML:"</span>"},"[green]":{innerHTML:'<span class="mu-g">'},"[/green]":{innerHTML:"</span>"},"[blue]":{innerHTML:'<span class="mu-b">'},"[/blue]":{innerHTML:"</span>"}},o}(),t}.call(this),J=function(){var t,s=function(o,e){return function(){return o.apply(e,arguments)}};return t=function(){function o(e,n,i,a){this.timeout=i,this.onclose=a,this.close=s(this.close,this),this.add=s(this.add,this),this.el=r.el("div",{innerHTML:'<a href="javascript:;" class="close fa fa-times" title="Close"></a><div class="message"></div>'}),this.el.style.opacity=0,this.setType(e),r.on(this.el.firstElementChild,"click",this.close),typeof n=="string"&&(n=r.tn(n)),r.add(this.el.lastElementChild,n),r.ready(this.add)}return o.prototype.setType=function(e){return this.el.className="notification "+e},o.prototype.add=function(){if(!this.closed){if(I.hidden){r.on(I,"visibilitychange",this.add);return}if(r.off(I,"visibilitychange",this.add),r.add(L.noticesRoot,this.el),this.el.clientHeight,this.el.style.opacity=1,this.timeout)return setTimeout(this.close,this.timeout*r.SECOND)}},o.prototype.close=function(){return this.closed=!0,r.off(I,"visibilitychange",this.add),r.rm(this.el),typeof this.onclose=="function"?this.onclose():void 0},o}(),t}.call(this),ae=function(){var t,s=[].indexOf||function(o){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===o)return e;return-1};return t=function(){o.prototype.toString=function(){return this.ID};function o(e,n,i,a){var l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P;if(this.thread=n,this.board=i,a==null&&(a={}),r.extend(this,a),this.ID=+e.id.match(/\d*$/)[0],this.postID=this.ID,this.threadID=this.thread.ID,this.boardID=this.board.ID,this.siteID=p.SITE.ID,this.fullID=this.board+"."+this.ID,this.context=this,this.isReply=this.ID!==this.threadID,e.dataset.fullID=this.fullID,this.nodes=this.parseNodes(e),!this.isReply){for(this.thread.OP=this,m=["isSticky","isClosed","isArchived"],d=0,h=m.length;d<h;d++)u=m[d],(P=p.SITE.selectors.icons[u])&&(this.thread[u]=!!r(P,this.nodes.info));this.thread.isArchived&&(this.thread.isClosed=!0,this.thread.kill())}if(this.info={subject:((b=this.nodes.subject)!=null?b.textContent:void 0)||void 0,name:(x=this.nodes.name)!=null?x.textContent:void 0,email:this.nodes.email?decodeURIComponent(this.nodes.email.href.replace(/^mailto:/,"")):void 0,tripcode:(k=this.nodes.tripcode)!=null?k.textContent:void 0,uniqueID:(C=this.nodes.uniqueID)!=null?C.textContent:void 0,capcode:(D=this.nodes.capcode)!=null?D.textContent.replace("## ",""):void 0,pass:(S=this.nodes.pass)!=null?S.title.match(/\d*$/)[0]:void 0,flagCode:(R=this.nodes.flag)!=null&&(B=R.className.match(/flag-(\w+)/))!=null?B[1].toUpperCase():void 0,flagCodeTroll:(M=this.nodes.flag)!=null&&(v=M.className.match(/bfl-(\w+)/))!=null?v[1].toUpperCase():void 0,flag:(A=this.nodes.flag)!=null?A.title:void 0,date:this.nodes.date?p.SITE.parseDate(this.nodes.date):void 0},f.Anonymize?this.info.nameBlock="Anonymous":this.info.nameBlock=((this.info.name||"")+" "+(this.info.tripcode||"")).trim(),this.info.capcode&&(this.info.nameBlock+=" ## "+this.info.capcode),this.info.uniqueID&&(this.info.nameBlock+=" (ID: "+this.info.uniqueID+")"),this.parseComment(),this.parseQuotes(),this.parseFiles(),this.isDead=!1,this.isHidden=!1,this.clones=[],p.posts.get(this.fullID))for(this.isRebuilt=!0,this.clones=p.posts.get(this.fullID).clones,w=this.clones,c=0,g=w.length;c<g;c++)l=w[c],l.origin=this;!this.isFetchedQuote&&this.ID>this.thread.lastPost&&(this.thread.lastPost=this.ID),this.board.posts.push(this.ID,this),this.thread.posts.push(this.ID,this),p.posts.push(this.fullID,this)}return o.prototype.parseNodes=function(e){var n,i,a,l,d,c,u,h;u=p.SITE.selectors,d=r(u.post,e)||e,i=r(u.infoRoot,d),l={root:e,bottom:this.isReply||!p.SITE.isOPContainerThread?e:r(u.opBottom,e),post:d,info:i,comment:r(u.comment,d),quotelinks:[],archivelinks:[],embedlinks:[]},c=u.info;for(a in c)h=c[a],l[a]=r(h,i);return typeof(n=p.SITE).parseNodes=="function"&&n.parseNodes(this,l),l.uniqueIDRoot||(l.uniqueIDRoot=l.uniqueID),r.engine==="edge"?Object.defineProperty(l,"backlinks",{configurable:!0,enumerable:!0,get:function(){return d.getElementsByClassName("backlink")}}):l.backlinks=d.getElementsByClassName("backlink"),l},o.prototype.parseComment=function(){var e,n;return this.nodes.comment.normalize(),this.nodes.commentClean=n=this.nodes.comment.cloneNode(!0),typeof(e=p.SITE).cleanComment=="function"&&e.cleanComment(n),this.info.comment=this.nodesToText(n)},o.prototype.commentDisplay=function(){var e,n;return n=this.nodes.commentClean.cloneNode(!0),f["Remove Spoilers"]||f["Reveal Spoilers"]||this.cleanSpoilers(n),typeof(e=p.SITE).cleanCommentDisplay=="function"&&e.cleanCommentDisplay(n),this.nodesToText(n).trim().replace(/\s+$/gm,"")},o.prototype.commentOrig=function(){var e,n;return n=this.nodes.commentClean.cloneNode(!0),typeof(e=p.SITE).insertTags=="function"&&e.insertTags(n),this.nodesToText(n)},o.prototype.nodesToText=function(e){var n,i,a,l;for(l="",a=r.X(".//br|.//text()",e),n=0;i=a.snapshotItem(n++);)l+=i.data||`
`;return l},o.prototype.cleanSpoilers=function(e){var n,i,a,l;for(l=N(p.SITE.selectors.spoiler,e),n=0,i=l.length;n<i;n++)a=l[n],r.replace(a,r.tn("[spoiler]"))},o.prototype.parseQuotes=function(){var e,n,i,a;for(this.quotes=[],a=N(p.SITE.selectors.quotelink,this.nodes.comment),e=0,n=a.length;e<n;e++)i=a[e],this.parseQuote(i)},o.prototype.parseQuote=function(e){var n,i;if(i=e.href.match(p.SITE.regexp.quotelink),!!(i||this.isClone&&e.dataset.postID)&&(this.nodes.quotelinks.push(e),!this.isClone&&(n=i[1]+"."+i[3],s.call(this.quotes,n)<0)))return this.quotes.push(n)},o.prototype.parseFiles=function(){var e,n,i,a,l,d,c;for(this.files=[],a=this.fileRoots(),l=0,e=d=0,c=a.length;d<c;e=++d)i=a[e],(n=this.parseFile(i))&&(n.index=l++,n.docIndex=e,this.files.push(n));if(this.files.length)return this.file=this.files[0]},o.prototype.fileRoots=function(){var e;return p.SITE.selectors.multifile&&(e=N(p.SITE.selectors.multifile,this.nodes.root),e.length)?e:[this.nodes.root]},o.prototype.parseFile=function(e){var n,i,a,l,d,c,u;n={},a=p.SITE.selectors.file;for(i in a)d=a[i],n[i]=r(d,e);if(n.thumbLink=(l=n.thumb)!=null?l.parentNode:void 0,!!(n.text&&n.link)&&p.SITE.parseFile(this,n)){for(r.extend(n,{url:n.link.href,isImage:r.isImage(n.link.href),isVideo:r.isVideo(n.link.href)}),c=+n.size.match(/[\d.]+/)[0],u=["B","KB","MB","GB"].indexOf(n.size.match(/\w+$/)[0]);u-- >0;)c*=1024;return n.sizeInBytes=c,n}},o.deadMark=r.el("span",{textContent:"\xA0(Dead)",className:"qmark-dead"}),o.prototype.kill=function(e,n){var i,a,l,d,c,u,h,g,m;if(n==null&&(n=0),e){if(this.isDead||this.files[n].isDead)return;this.files[n].isDead=!0,r.addClass(this.nodes.root,"deleted-file")}else{if(this.isDead)return;this.isDead=!0,r.rmClass(this.nodes.root,"deleted-file"),r.addClass(this.nodes.root,"deleted-post")}if((m=r("strong.warning",this.nodes.info))||(m=r.el("strong",{className:"warning"}),r.after(r("input",this.nodes.info),m)),m.textContent=e?"[File deleted]":"[Deleted]",!this.isClone){for(h=this.clones,a=0,d=h.length;a<d;a++)i=h[a],i.kill(e,n);if(!e)for(g=H.allQuotelinksLinkingTo(this),l=0,c=g.length;l<c;l++)u=g[l],!r.hasClass(u,"deadlink")&&(r.add(u,o.deadMark.cloneNode(!0)),r.addClass(u,"deadlink"))}},o.prototype.resurrect=function(){var e,n,i,a,l,d,c,u,h;if(this.isDead=!1,r.rmClass(this.nodes.root,"deleted-post"),h=r("strong.warning",this.nodes.info),this.files.some(function(g){return g.isDead})?(r.addClass(this.nodes.root,"deleted-file"),h.textContent="[File deleted]"):r.rm(h),!this.isClone){for(c=this.clones,n=0,a=c.length;n<a;n++)e=c[n],e.resurrect();for(u=H.allQuotelinksLinkingTo(this),i=0,l=u.length;i<l;i++)d=u[i],r.hasClass(d,"deadlink")&&(r.rm(r(".qmark-dead",d)),r.rmClass(d,"deadlink"))}},o.prototype.collect=function(){return p.posts.rm(this.fullID),this.thread.posts.rm(this),this.board.posts.rm(this)},o.prototype.addClone=function(e,n){return F.Post.execute(this),new o.Clone(this,e,n)},o.prototype.rmClone=function(e){var n,i,a,l;for(this.clones.splice(e,1),l=this.clones.slice(e),i=0,a=l.length;i<a;i++)n=l[i],n.nodes.root.dataset.clone=e++},o.prototype.setCatalogOP=function(e){return this.nodes.root.classList.toggle("catalog-container",e),this.nodes.root.classList.toggle("opContainer",!e),this.nodes.post.classList.toggle("catalog-post",e),this.nodes.post.classList.toggle("op",!e),this.nodes.post.style.left=this.nodes.post.style.right=null},o}(),t}.call(this),function(){var t=function(e,n){for(var i in n)s.call(n,i)&&(e[i]=n[i]);function a(){this.constructor=e}return a.prototype=n.prototype,e.prototype=new a,e.__super__=n.prototype,e},s={}.hasOwnProperty,o=[].slice;ae.Clone=function(e){t(n,e),n.prototype.isClone=!0;function n(){var i;return i=Object.create(ae.Clone.prototype),i.construct.apply(i,arguments),i}return n.prototype.construct=function(i,a,l){var d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W,z,V,K,G,ee,ge;for(this.origin=i,this.context=a,O=["ID","postID","threadID","boardID","siteID","fullID","board","thread","info","quotes","isReply"],g=0,k=O.length;g<k;g++)w=O[g],this[w]=this.origin[w];for(P=this.origin.nodes,G=l?this.cloneWithoutVideo(P.root):P.root.cloneNode(!0),(d=ae.Clone).suffix||(d.suffix=0),j=[G].concat(o.call(N("[id]",G))),v=0,C=j.length;v<C;v++)M=j[v],M.id+="_"+ae.Clone.suffix;for(ae.Clone.suffix++,U=N(".inline",G),A=0,D=U.length;A<D;A++)m=U[A],r.rm(m);for(W=N(".inlined",G),x=0,S=W.length;x<S;x++)b=W[x],r.rmClass(b,"inlined");for(this.nodes=this.parseNodes(G),G.hidden=!1,r.rmClass(G,"forwarded"),r.rmClass(this.nodes.post,"highlight"),this.isReply||(this.setCatalogOP(!1),r.rm(r(".catalog-link",this.nodes.post)),r.rm(r(".catalog-stats",this.nodes.post)),r.rm(r(".catalog-replies",this.nodes.post))),this.parseQuotes(),this.quotes=o.call(this.origin.quotes),this.files=[],this.origin.files.length&&(h=this.fileRoots()),z=this.origin.files,B=0,R=z.length;B<R;B++){q=z[B],c={};for(w in q)ge=q[w],c[w]=ge;u=h[c.docIndex],V=p.SITE.selectors.file;for(w in V)ee=V[w],c[w]=r(ee,u);c.thumbLink=(K=c.thumb)!=null?K.parentNode:void 0,c.thumbLink&&(c.fullImage=r(".full-image",c.thumbLink)),c.videoControls=r(".video-controls",c.text),c.videoThumb&&(c.thumb.muted=!0),this.files.push(c)}return this.files.length&&(this.file=this.files[0],this.file.thumb&&l&&De.contract(this)),this.origin.isDead&&(this.isDead=!0),G.dataset.clone=this.origin.clones.push(this)-1},n.prototype.cloneWithoutVideo=function(i){var a,l,d,c,u;if(i.tagName==="VIDEO"&&!i.dataset.md5)return[];if(i.nodeType===Node.ELEMENT_NODE&&r("video",i)){for(l=i.cloneNode(!1),u=i.childNodes,d=0,c=u.length;d<c;d++)a=u[d],r.add(l,this.cloneWithoutVideo(a));return l}else return i.cloneNode(!0)},n}(ae)}.call(this),$e=function(){var t;return t=function(){function s(o){var e,n,i;if(this.length=0,o)for(e=0,i=o.length;e<i;e++)n=o[e],this.push(n)}return s.prototype.push=function(o){var e,n,i;if(e=o.ID,e||(e=o.id),!this[e])return i=this.last,this[e]=n={prev:i,next:null,data:o,ID:e},n.prev=i,this.last=i?i.next=n:this.first=n,this.length++},s.prototype.before=function(o,e){var n;if(!(e.next===o||e===o))return this.rmi(e),n=o.prev,o.prev=e,e.next=o,e.prev=n,n?n.next=e:this.first=e},s.prototype.after=function(o,e){var n;if(!(e.prev===o||e===o))return this.rmi(e),n=o.next,o.next=e,e.prev=o,e.next=n,n?n.prev=e:this.last=e},s.prototype.prepend=function(o){var e;if(e=this.first,!(o===e||!this[o.ID]))return this.rmi(o),o.next=e,e?e.prev=o:this.last=o,this.first=o,delete o.prev},s.prototype.shift=function(){return this.rm(this.first.ID)},s.prototype.order=function(){var o,e;for(e=[o=this.first];o=o.next;)e.push(o);return e},s.prototype.rm=function(o){var e;if(e=this[o],!!e)return delete this[o],this.length--,this.rmi(e),delete e.next,delete e.prev},s.prototype.rmi=function(o){var e,n;return n=o.prev,e=o.next,n?n.next=e:this.first=e,e?e.prev=n:this.last=n},s}(),t}.call(this),_t=function(){var t;return t=function(){function s(){this.elements=r.dict(),this.size=0}return s.prototype.has=function(o){return o in this.elements},s.prototype.add=function(o){if(!this.elements[o])return this.elements[o]=!0,this.size++},s.prototype.delete=function(o){if(this.elements[o])return delete this.elements[o],this.size--},s}(),"Set"in window||(window.Set=t),t}.call(this),qe=function(){var t,s=[].slice;return t=function(){function o(){this.keys=[]}return o.prototype.push=function(e,n){return e=""+e,this[e]||this.keys.push(e),this[e]=n},o.prototype.rm=function(e){var n;if(e=""+e,(n=this.keys.indexOf(e))!==-1)return this.keys.splice(n,1),delete this[e]},o.prototype.forEach=function(e){var n,i,a,l;for(l=s.call(this.keys),n=0,a=l.length;n<a;n++)i=l[n],e(this[i])},o.prototype.get=function(e){if(e!=="keys")return r.getOwn(this,e)},o}(),t}.call(this),Se=function(){var t;return t=function(){s.prototype.toString=function(){return this.ID};function s(o,e){this.board=e,this.ID=+o,this.threadID=this.ID,this.boardID=this.board.ID,this.siteID=p.SITE.ID,this.fullID=this.board+"."+this.ID,this.posts=new qe,this.isDead=!1,this.isHidden=!1,this.isSticky=!1,this.isClosed=!1,this.isArchived=!1,this.postLimit=!1,this.fileLimit=!1,this.lastPost=0,this.ipCount=void 0,this.json=null,this.OP=null,this.catalogView=null,this.nodes={root:null},this.board.threads.push(this.ID,this),p.threads.push(this.fullID,this)}return s.prototype.setPage=function(o){var e,n,i,a;if(i=this.OP.nodes,n=i.info,a=i.reply,(e=r(".page-num",n))||(e=r.el("span",{className:"page-num"}),r.replace(a.parentNode.previousSibling,[r.tn(" "),e,r.tn(" ")])),e.title="This thread is on page "+o+" in the original index.",e.textContent="["+o+"]",this.catalogView)return this.catalogView.nodes.pageCount.textContent=o},s.prototype.setCount=function(o,e,n){var i;if(this.catalogView)return i=this.catalogView.nodes[o+"Count"],i.textContent=e,(n?r.addClass:r.rmClass)(i,"warning")},s.prototype.setStatus=function(o,e){var n;if(n="is"+o,this[n]!==e&&(this[n]=e,!!this.OP))return this.setIcon("Sticky",this.isSticky),this.setIcon("Closed",this.isClosed&&!this.isArchived),this.setIcon("Archived",this.isArchived)},s.prototype.setIcon=function(o,e){var n,i,a;if(a=o.toLowerCase(),n=r("."+a+"Icon",this.OP.nodes.info),!!n!==e){if(!e){r.rm(n.previousSibling),r.rm(n),this.catalogView&&r.rm(r("."+a+"Icon",this.catalogView.nodes.icons));return}if(n=r.el("img",{src:""+p.SITE.Build.staticPath+a+p.SITE.Build.gifIcon,alt:o,title:o,className:a+"Icon retina"}),p.BOARD.ID==="f"&&(n.style.cssText="height: 18px; width: 18px;"),i=o!=="Sticky"&&this.isSticky?r(".stickyIcon",this.OP.nodes.info):r(".page-num",this.OP.nodes.info)||this.OP.nodes.quote,r.after(i,[r.tn(" "),n]),!!this.catalogView)return(o==="Sticky"&&this.isClosed?r.prepend:r.add)(this.catalogView.nodes.icons,n.cloneNode())}},s.prototype.kill=function(){return this.isDead=!0},s.prototype.collect=function(){var o;if(o=0,this.posts.forEach(function(e){return e.clones.length?o++:e.collect()}),!o)return p.threads.rm(this.fullID),this.board.threads.rm(this)},s}(),t}.call(this),le={},function(){var t=[].indexOf||function(s){for(var o=0,e=this.length;o<e;o++)if(o in this&&this[o]===s)return o;return-1};le.tinyboard={isOPContainerThread:!0,mayLackJSON:!0,threadModTimeIgnoresSage:!0,disabledFeatures:["Resurrect Quotes","Quick Reply Personas","Quick Reply","Cooldown","Report Link","Delete Link","Edit Link","Quote Inlining","Quote Previewing","Quote Backlinks","File Info Formatting","Image Expansion","Image Expansion (Menu)","Comment Expansion","Thread Expansion","Favicon","Quote Threading","Thread Updater","Banner","Flash Features","Reply Pruning"],detect:function(){var s,o,e,n,i,a,l;for(i=N("script:not([src])",I.head),s=0,o=i.length;s<o;s++)if(l=i[s],e=l.textContent.match(/\bvar configRoot=(".*?")/)){n=r.dict();try{a=JSON.parse(e[1]),a[0]==="/"?n.root=location.origin+a:/^https?:/.test(a)&&(n.root=a)}catch{}return n}return!1},awaitBoard:function(s){var o,e;return(o=r.id("react-ui"))?(e=this.selectors=Object.create(this.selectors),e.boardFor={index:".page-container"},e.thread='div[id^="thread_"]',Z.mounted(s)):s()},urls:{thread:function(s,o){var e,n,i,a;return i=s.siteID,e=s.boardID,a=s.threadID,""+(((n=f.siteProperties[i])!=null?n.root:void 0)||"http://"+i+"/")+e+"/"+(o?"archive/":"")+"res/"+a+".html"},post:function(s){var o;return o=s.postID,"#"+o},index:function(s){var o,e,n;return n=s.siteID,o=s.boardID,""+(((e=f.siteProperties[n])!=null?e.root:void 0)||"http://"+n+"/")+o+"/"},catalog:function(s){var o,e,n;return n=s.siteID,o=s.boardID,""+(((e=f.siteProperties[n])!=null?e.root:void 0)||"http://"+n+"/")+o+"/catalog.html"},threadJSON:function(s,o){var e,n,i,a,l;return a=s.siteID,e=s.boardID,l=s.threadID,i=(n=f.siteProperties[a])!=null?n.root:void 0,i?""+i+e+"/"+(o?"archive/":"")+"res/"+l+".json":""},archivedThreadJSON:function(s){return le.tinyboard.urls.threadJSON(s,!0)},threadsListJSON:function(s){var o,e,n,i;return i=s.siteID,o=s.boardID,n=(e=f.siteProperties[i])!=null?e.root:void 0,n?""+n+o+"/threads.json":""},archiveListJSON:function(s){var o,e,n,i;return i=s.siteID,o=s.boardID,n=(e=f.siteProperties[i])!=null?e.root:void 0,n?""+n+o+"/archive/archive.json":""},catalogJSON:function(s){var o,e,n,i;return i=s.siteID,o=s.boardID,n=(e=f.siteProperties[i])!=null?e.root:void 0,n?""+n+o+"/catalog.json":""},file:function(s,o){var e,n,i;return i=s.siteID,e=s.boardID,""+(((n=f.siteProperties[i])!=null?n.root:void 0)||"http://"+i+"/")+e+"/"+o},thumb:function(s,o){return le.tinyboard.urls.file(s,o)}},selectors:{board:'form[name="postcontrols"]',thread:'input[name="board"] ~ div[id^="thread_"]',threadDivider:'div[id^="thread_"] > hr:last-child',summary:".omitted",postContainer:'div[id^="reply_"]:not(.hidden)',opBottom:".op",replyOriginal:'div[id^="reply_"]:not(.hidden)',infoRoot:".intro",info:{subject:".subject",name:".name",email:".email",tripcode:".trip",uniqueID:".poster_id",capcode:".capcode",flag:".flag",date:"time",nameBlock:"label",quote:'a[href*="#q"]',reply:'a[href*="/res/"]:not([href*="#"])'},icons:{isSticky:".fa-thumb-tack",isClosed:".fa-lock"},file:{text:".fileinfo",link:".fileinfo > a",thumb:"a > .post-image"},thumbLink:".file > a",multifile:".files > .file",highlightable:{op:" > .op",reply:".reply",catalog:" > .thread"},comment:".body",spoiler:".spoiler",quotelink:'a[onclick*="highlightReply("]',catalog:{board:"#Grid",thread:".mix",thumb:".thread-image"},boardList:".boardlist",boardListBottom:".boardlist.bottom",styleSheet:"#stylesheet",psa:".blotter",nav:{prev:".pages > form > [value=Previous]",next:".pages > form > [value=Next]"}},classes:{highlight:"highlighted"},xpath:{thread:'div[starts-with(@id,"thread_")]',postContainer:'div[starts-with(@id,"reply_") or starts-with(@id,"thread_")]',replyContainer:'div[starts-with(@id,"reply_")]'},regexp:{quotelink:/\/([^\/]+)\/res\/(\d+)(?:\.\w+)?#(\d+)$/,quotelinkHTML:/<a [^>]*\bhref="[^"]*\/([^\/]+)\/res\/(\d+)(?:\.\w+)?#(\d+)"/g},Build:{parseJSON:function(s,o){var e,n,i,a,l,d,c;if(d=le.yotsuba.Build.parseJSON(s,o),s.ext==="deleted"&&(delete d.file,r.extend(d,{files:[],fileDeleted:!0,filesDeleted:[0]})),s.extra_files){for(c=s.extra_files,i=a=0,l=c.length;a<l;i=++a)e=c[i],e.ext==="deleted"?d.filesDeleted.push(i):(n=le.yotsuba.Build.parseJSONFile(s,o),d.files.push(n));d.files.length&&(d.file=d.files[0])}return d},parseComment:function(s){return s=s.replace(/<br\b[^<]*>/gi,`
`).replace(/<[^>]*>/g,""),r.unescape(s)}},bgColoredEl:function(){return r.el("div",{className:"post reply"})},isFileURL:function(s){return/\/src\/[^\/]+/.test(s.pathname)},preParsingFixes:function(s){var o;if(o=r('a > input[name="board"]',s))return r.before(o.parentNode,o)},parseNodes:function(s,o){var e,n,i,a,l;if(!o.uniqueID){for(a="",i=o.nameBlock.nextSibling;i&&i.nodeType===3;)a+=i.textContent,i=i.nextSibling;if(e=a.match(/(\s*ID:\s*)(\S+)/))return o.info.normalize(),n=o.nameBlock.nextSibling,n=n.splitText(e[1].length),n.splitText(e[2].length),o.uniqueID=l=r.el("span",{className:"poster_id"}),r.replace(n,l),r.add(l,n)}},parseDate:function(s){var o,e;if(o=Date.parse((e=s.getAttribute("datetime"))!=null?e.trim():void 0),!isNaN(o))return new Date(o);if(o=Date.parse(s.textContent.trim()+" UTC"),!isNaN(o))return new Date(o)},parseFile:function(s,o){var e,n,i,a,l,d,c,u;return c=o.text,i=o.link,u=o.thumb,r.x("ancestor::"+this.xpath.postContainer+"[1]",c)!==s.nodes.root||!(n=t.call((l=i.nextSibling)!=null?l.textContent:void 0,"(")>=0?i.nextSibling:i.nextElementSibling)||!(e=n.textContent.match(/\((.*,\s*)?([\d.]+ ?[KMG]?B).*\)/))?!1:(a=r(".postfilename",c),r.extend(o,{name:a?a.title||a.textContent:i.pathname.match(/[^\/]*$/)[0],size:e[2],dimensions:(d=e[0].match(/\d+x\d+/))!=null?d[0]:void 0}),u&&r.extend(o,{thumbURL:/\/static\//.test(u.src)&&r.isImage(i.href)?i.href:u.src,isSpoiler:/^Spoiler/i.test(e[1]||"")||i.textContent==="Spoiler Image"}),!0)},isThumbExpanded:function(s){return r.hasClass(s.thumb.parentNode,"expanded")||s.thumb.parentNode.dataset.expanded==="true"},isLinkified:function(s){return/\bnofollow\b/.test(s.rel)},catalogPin:function(s){return s.dataset.sticky="true"}}}.call(this),function(){var t=[].slice;le.yotsuba={isOPContainerThread:!1,hasIPCount:!0,archivedBoardsKnown:!0,urls:{thread:function(s){var o,e;return o=s.boardID,e=s.threadID,location.protocol+"//"+oe.domain(o)+"/"+o+"/thread/"+e},post:function(s){var o;return o=s.postID,"#p"+o},index:function(s){var o;return o=s.boardID,location.protocol+"//"+oe.domain(o)+"/"+o+"/"},catalog:function(s){var o;if(o=s.boardID,o!=="f")return location.protocol+"//"+oe.domain(o)+"/"+o+"/catalog"},archive:function(s){var o;if(o=s.boardID,oe.isArchived(o))return location.protocol+"//"+oe.domain(o)+"/"+o+"/archive"},threadJSON:function(s){var o,e;return o=s.boardID,e=s.threadID,location.protocol+"//a.4cdn.org/"+o+"/thread/"+e+".json"},threadsListJSON:function(s){var o;return o=s.boardID,location.protocol+"//a.4cdn.org/"+o+"/threads.json"},archiveListJSON:function(s){var o;return o=s.boardID,oe.isArchived(o)?location.protocol+"//a.4cdn.org/"+o+"/archive.json":""},catalogJSON:function(s){var o;return o=s.boardID,location.protocol+"//a.4cdn.org/"+o+"/catalog.json"},file:function(s,o){var e,n;return e=s.boardID,n=e==="f"?re.flashHost():re.host(),location.protocol+"//"+n+"/"+e+"/"+o},thumb:function(s,o){var e;return e=s.boardID,location.protocol+"//"+re.thumbHost()+"/"+e+"/"+o}},isPrunedByAge:function(s){var o;return o=s.boardID,o==="f"},areMD5sDeferred:function(s){var o;return o=s.boardID,o==="f"},isOnePage:function(s){var o;return o=s.boardID,o==="f"},noAudio:function(s){var o;return o=s.boardID,oe.noAudio(o)},selectors:{board:".board",thread:".thread",threadDivider:".board > hr",summary:".summary",postContainer:".postContainer",replyOriginal:".replyContainer:not([data-clone])",sideArrows:"div.sideArrows",post:".post",infoRoot:".postInfo",info:{subject:".subject",name:".name",email:".useremail",tripcode:".postertrip",uniqueIDRoot:".posteruid",uniqueID:".posteruid > .hand",capcode:".capcode.hand",pass:".n-pu",flag:".flag, .bfl",date:".dateTime",nameBlock:".nameBlock",quote:".postNum > a:nth-of-type(2)",reply:".replylink"},icons:{isSticky:".stickyIcon",isClosed:".closedIcon",isArchived:".archivedIcon"},file:{text:".file > :first-child",link:".fileText > a",thumb:"a.fileThumb > [data-md5]"},thumbLink:"a.fileThumb",highlightable:{op:".opContainer",reply:" > .reply",catalog:""},comment:".postMessage",spoiler:"s",quotelink:":not(pre) > .quotelink",catalog:{board:"#threads",thread:".thread",thumb:".thumb"},boardList:"#boardNavDesktop > .boardList",boardListBottom:"#boardNavDesktopFoot > .boardList",styleSheet:"link[title=switch]",psa:"#globalMessage",psaTop:"#globalToggle",searchBox:"#search-box",nav:{prev:".prev > form > [type=submit]",next:".next > form > [type=submit]"}},classes:{highlight:"highlight"},xpath:{thread:'div[contains(concat(" ",@class," ")," thread ")]',postContainer:'div[contains(@class,"postContainer")]',replyContainer:'div[contains(@class,"replyContainer")]'},regexp:{quotelink:/^https?:\/\/boards\.4chan(?:nel)?\.org\/+([^\/]+)\/+thread\/+(\d+)(?:[\/?][^#]*)?(?:#p(\d+))?$/,quotelinkHTML:/<a [^>]*\bhref="(?:(?:\/\/boards\.4chan(?:nel)?\.org)?\/([^\/]+)\/thread\/)?(\d+)?(?:#p(\d+))?"/g,pass:/^https?:\/\/www\.4chan(?:nel)?\.org\/+pass(?:$|[?#])/,captcha:/^https?:\/\/sys\.4chan(?:nel)?\.org\/+captcha(?:$|[?#])/},bgColoredEl:function(){return r.el("div",{className:"reply"})},isThisPageLegit:function(){var s,o;return((s=location.hostname)==="boards.4chan.org"||s==="boards.4channel.org")&&I.doctype&&!r('link[href*="favicon-status.ico"]',I.head)&&(o=I.title)!=="4chan - Temporarily Offline"&&o!=="4chan - Error"&&o!=="504 Gateway Time-out"&&o!=="MathJax Equation Source"},is404:function(){var s;return(s=I.title)==="4chan - Temporarily Offline"||s==="4chan - 404 Not Found"||p.VIEW==="thread"&&r(".board")&&!r(".opContainer")},isIncomplete:function(){var s;return((s=p.VIEW)==="index"||s==="thread")&&!r(".board + *")},isBoardlessPage:function(s){var o;return(o=s.hostname)==="www.4chan.org"||o==="www.4channel.org"},isAuxiliaryPage:function(s){var o;return(o=s.hostname)!=="boards.4chan.org"&&o!=="boards.4channel.org"},isFileURL:function(s){return re.test(s.hostname)},initAuxiliary:function(){var s,o;switch(location.hostname){case"www.4chan.org":case"www.4channel.org":le.yotsuba.regexp.pass.test(location.href)?Pt.init():(r.onExists(E,"body",function(){return r.addStyle(Te.www)}),Y.replace.init());break;case"sys.4chan.org":case"sys.4channel.org":o=location.pathname.split(/\/+/),o[2]==="imgboard.php"?/\bmode=report\b/.test(location.search)?Vt.init():(s=location.search.match(/\bres=(\d+)/))&&r.ready(function(){var e;if(f["404 Redirect"]&&((e=r.id("errmsg"))!=null?e.textContent:void 0)==="Error: Specified thread does not exist.")return ne.navigate("thread",{boardID:p.BOARD.ID,postID:+s[1]})}):o[2]==="post"&&Lt.init()}},scriptData:function(){var s,o,e,n;for(e=N("script:not([src])",I.head),s=0,o=e.length;s<o;s++)if(n=e[s],/\bcooldowns *=/.test(n.textContent))return n.textContent;return""},parseThreadMetadata:function(s){var o,e,n;if(n=this.scriptData(),s.postLimit=/\bbumplimit *= *1\b/.test(n),s.fileLimit=/\bimagelimit *= *1\b/.test(n),s.ipCount=(e=n.match(/\bunique_ips *= *(\d+)\b/))?+e[1]:void 0,p.BOARD.ID==="f"&&s.OP.file)return o=s.OP.file,r.ajax(this.urls.threadJSON({boardID:"f",threadID:s.ID}),{timeout:r.MINUTE,onloadend:function(){if(this.response)return o.text.dataset.md5=o.MD5=this.response.posts[0].md5}})},parseNodes:function(s,o){var e,n,i,a,l,d;if(s.boardID==="f"){for(a=["Sticky","Closed"],l=[],n=0,i=a.length;n<i;n++)d=a[n],(e=r("img[alt="+d+"]",o.info))&&l.push(r.addClass(e,d.toLowerCase()+"Icon","retina"));return l}},parseDate:function(s){return new Date(s.dataset.utc*1e3)},parseFile:function(s,o){var e,n,i,a,l,d,c,u;return c=o.text,n=o.link,u=o.thumb,(e=(a=n.nextSibling)!=null?a.textContent.match(/\(([\d.]+ [KMG]?B).*\)/):void 0)?(r.extend(o,{name:c.title||n.title||n.textContent,size:e[1],dimensions:(l=e[0].match(/\d+x\d+/))!=null?l[0]:void 0,tag:(d=e[0].match(/,[^,]*, ([a-z]+)\)/i))!=null?d[1]:void 0,MD5:c.dataset.md5}),u&&(r.extend(o,{thumbURL:u.src,MD5:u.dataset.md5,isSpoiler:r.hasClass(u.parentNode,"imgspoiler")}),o.isSpoiler&&(o.thumbURL=(i=n.href.match(/\d+(?=\.\w+$)/))?location.protocol+"//"+re.thumbHost()+"/"+s.board+"/"+i[0]+"s.jpg":void 0)),!0):!1},cleanComment:function(s){var o,e,n,i,a,l,d,c;if(o=r(".abbr",s)){for(c=N(".abbr + br, .exif",s),i=0,l=c.length;i<l;i++)d=c[i],r.rm(d);for(n=a=0;a<2;n=++a)(e=o.previousSibling)&&e.nodeName==="BR"&&r.rm(e);return r.rm(o)}},cleanCommentDisplay:function(s){var o;return(o=r("b",s))&&/^Rolled /.test(o.textContent)&&r.rm(o),r.rm(r(".fortune",s))},insertTags:function(s){var o,e,n,i,a,l,d;for(l=N("s, .removed-spoiler",s),o=0,n=l.length;o<n;o++)a=l[o],r.replace(a,[r.tn("[spoiler]")].concat(t.call(a.childNodes),[r.tn("[/spoiler]")]));for(d=N(".prettyprint",s),e=0,i=d.length;e<i;e++)a=d[e],r.replace(a,[r.tn("[code]")].concat(t.call(a.childNodes),[r.tn("[/code]")]))},hasCORS:function(s){return s.split("/").slice(0,3).join("/")===location.protocol+"//a.4cdn.org"},sfwBoards:function(s){return oe.sfwBoards(s)},uidColor:function(s){var o,e;for(e=0,o=0;o<8;)e=(e<<5)-e+s.charCodeAt(o++);return e>>8&16777215},isLinkified:function(s){return re.test(s.hostname)},testNativeExtension:function(){return r.global(function(){if(window.Parser.postMenuIcon)return this.enabled="true"})},transformBoardList:function(){var s,o,e,n,i,a,l,d,c,u,h;for(d=[],u=function(){return r.el("span",{className:"spacer"})},n=r.X(".//a|.//text()[not(ancestor::a)]",r(le.yotsuba.selectors.boardList)),e=0;l=n.snapshotItem(e++);)switch(l.nodeName){case"#text":for(c=l.nodeValue,i=0,a=c.length;i<a;i++)o=c[i],h=r.el("span",{textContent:o}),o===" "&&(h.className="space"),o==="]"&&d.push(u()),d.push(h),o==="["&&d.push(u());break;case"A":s=l.cloneNode(!0),d.push(s)}return d}}}.call(this),function(){var t,s=[].slice;t={staticPath:"//s.4cdn.org/image/",gifIcon:window.devicePixelRatio>=2?"@2x.gif":".gif",spoilerRange:r.dict(),shortFilename:function(o){var e;return e=o.match(/\.?[^\.]*$/)[0],o.length-e.length>30?o.match(/(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^]){0,25}/)[0]+"(...)"+e:o},spoilerThumb:function(o){var e;return(e=t.spoilerRange[o])?t.staticPath+"spoiler-"+o+Math.floor(1+e*Math.random())+".png":t.staticPath+"spoiler.png"},sameThread:function(o,e){return p.VIEW==="thread"&&p.BOARD.ID===o&&p.THREADID===+e},threadURL:function(o,e){return o!==p.BOARD.ID?"//"+oe.domain(o)+"/"+o+"/thread/"+e:p.VIEW!=="thread"||+e!==p.THREADID?"/"+o+"/thread/"+e:""},postURL:function(o,e,n){return t.threadURL(o,e)+"#p"+n},parseJSON:function(o,e){var n,i,a,l;l=e.siteID,n=e.boardID,a={ID:o.no,postID:o.no,threadID:o.resto||o.no,boardID:n,siteID:l,isReply:!!o.resto,isSticky:!!o.sticky,isClosed:!!o.closed,isArchived:!!o.archived,fileDeleted:!!o.filedeleted,filesDeleted:o.filedeleted?[0]:[]},a.info={subject:r.unescape(o.sub),email:r.unescape(o.email),name:r.unescape(o.name)||"",tripcode:o.trip,pass:o.since4pass!=null?""+o.since4pass:void 0,uniqueID:o.id,flagCode:o.country,flagCodeTroll:o.board_flag,flag:r.unescape(o.country_name||o.flag_name),dateUTC:o.time,dateText:o.now,commentHTML:{innerHTML:o.com||""}},o.capcode&&(a.info.capcode=o.capcode.replace(/_highlight$/,"").replace(/_/g," ").replace(/\b\w/g,function(d){return d.toUpperCase()}),a.capcodeHighlight=/_highlight$/.test(o.capcode),delete a.info.uniqueID),a.files=[],o.ext&&(a.file=le.yotsuba.Build.parseJSONFile(o,{siteID:l,boardID:n}),a.files.push(a.file)),a.extra=r.dict();for(i in o)i[0]==="x"&&(a.extra[i]=o[i]);return a},parseJSONFile:function(o,e){var n,i,a,l,d;return d=e.siteID,n=e.boardID,l=p.sites[d],i=l.software==="yotsuba"&&n==="f"?""+encodeURIComponent(o.filename)+o.ext:""+o.tim+o.ext,a={name:r.unescape(o.filename)+o.ext,url:l.urls.file({siteID:d,boardID:n},i),height:o.h,width:o.w,MD5:o.md5,size:r.bytesToString(o.fsize),thumbURL:l.urls.thumb({siteID:d,boardID:n},o.tim+"s.jpg"),theight:o.tn_h,twidth:o.tn_w,isSpoiler:!!o.spoiler,tag:o.tag,hasDownscale:!!o.m_img},o.h!=null&&!/\.pdf$/.test(a.url)&&(a.dimensions=a.width+"x"+a.height),a},parseComment:function(o){return o=o.replace(/<br\b[^<]*>/gi,`
`).replace(/\n\n<span\b[^<]* class="abbr"[^]*$/i,"").replace(/<[^>]*>/g,""),r.unescape(o)},parseCommentDisplay:function(o){var e;if(!(f["Remove Spoilers"]||f["Reveal Spoilers"]))for(;(e=o.replace(/<s>(?:(?!<\/?s>).)*<\/s>/g,"[spoiler]"))!==o;)o=e;return o=o.replace(/^<b\b[^<]*>Rolled [^<]*<\/b>/i,"").replace(/<span\b[^<]* class="fortune"[^]*$/i,""),t.parseComment(o).trim().replace(/\s+$/gm,"")},postFromObject:function(o,e){var n;return n=t.parseJSON(o,{boardID:e,siteID:p.SITE.ID}),t.post(n)},post:function(o){var e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W,z,V,K,G,ee,ge,ve,Ne,xe,Q,Ce,Le,Ge;for(e=o.ID,xe=o.threadID,n=o.boardID,v=o.file,G=o.info,Ne=G.subject,b=G.email,q=G.name,Q=G.tripcode,i=G.capcode,O=G.pass,Ce=G.uniqueID,C=G.flagCode,D=G.flagCodeTroll,k=G.flag,m=G.dateUTC,g=G.dateText,u=G.commentHTML,ve=t.staticPath,S=t.gifIcon,i&&(l=i.toLowerCase(),i==="Founder"?(c="the Founder",a="4chan's Founder"):i==="Verified"?(c="Verified Users",a=""):(d=r.getOwn({Admin:"Administrator",Mod:"Moderator"},i)||i,c=d+"s",a="a 4chan "+d)),Le=t.threadURL(n,xe),W=Le+"#p"+e,K=t.sameThread(n,xe)?"javascript:quote('"+ +e+"');":Le+"#q"+e,U={innerHTML:'<div class="postInfo desktop" id="pi'+T(e)+'"><input type="checkbox" name="'+T(e)+'" value="delete"> '+(!o.isReply||n==="f"||Ne?'<span class="subject">'+T(Ne||"")+"</span> ":"")+'<span class="nameBlock'+(i?" capcode"+T(i):"")+'">'+(b?'<a href="mailto:'+T(encodeURIComponent(b).replace(/%40/g,"@"))+'" class="useremail">':"")+'<span class="name'+(i?" capcode":"")+'">'+T(q)+"</span>"+(Q?' <span class="postertrip">'+T(Q)+"</span>":"")+(O?' <span title="Pass user since '+T(O)+'" class="n-pu"></span>':"")+(i?' <strong class="capcode hand id_'+T(l)+'" title="Highlight posts by '+T(c)+'">## '+T(i)+"</strong>":"")+(b?"</a>":"")+(n==="f"&&!o.isReply||a?"":" ")+(a?' <img src="'+T(ve)+T(l)+"icon"+T(S)+'" alt="'+T(i)+' Icon" title="This user is '+T(a)+'." class="identityIcon retina">':"")+(Ce&&!i?' <span class="posteruid id_'+T(Ce)+'">(ID: <span class="hand" title="Highlight posts by this ID">'+T(Ce)+"</span>)</span>":"")+(C?' <span title="'+T(k)+'" class="flag flag-'+T(C.toLowerCase())+'"></span>':"")+(D?' <span title="'+T(k)+'" class="bfl bfl-'+T(D.toLowerCase())+'"></span>':"")+'</span> <span class="dateTime" data-utc="'+T(m)+'">'+T(g)+'</span> <span class="postNum'+(n==="f"&&!o.isReply?"":" desktop")+'"><a href="'+T(W)+'" title="Link to this post">No.</a><a href="'+T(K)+'" title="Reply to this post">'+T(e)+"</a>"+(o.isSticky?' <img src="'+T(ve)+"sticky"+T(S)+'" alt="Sticky" title="Sticky"'+(n==="f"?' style="height: 18px; width: 18px;"':' class="stickyIcon retina"')+">":"")+(o.isClosed&&!o.isArchived?' <img src="'+T(ve)+"closed"+T(S)+'" alt="Closed" title="Closed"'+(n==="f"?' style="height: 18px; width: 18px;"':' class="closedIcon retina"')+">":"")+(o.isArchived?' <img src="'+T(ve)+"archived"+T(S)+'" alt="Archived" title="Archived" class="archivedIcon retina">':"")+(!o.isReply&&p.VIEW==="index"?' &nbsp; <span>[<a href="/'+T(n)+"/thread/"+T(xe)+'" class="replylink">Reply</a>]</span>':"")+"</span></div>"},v&&(z=/^https?:(?=\/\/i\.4cdn\.org\/)/,x=v.url.replace(z,""),ge=t.shortFilename(v.name),w=v.isSpoiler?t.spoilerThumb(n):v.thumbURL.replace(z,"")),A={innerHTML:v?'<div class="file" id="f'+T(e)+'">'+(n==="f"?'<div class="fileInfo" data-md5="'+T(v.MD5)+'"><span class="fileText" id="fT'+T(e)+'">File: <a data-width="'+T(v.width)+'" data-height="'+T(v.height)+'" href="'+T(x)+'" target="_blank">'+T(v.name)+"</a>-("+T(v.size)+", "+T(v.dimensions)+(v.tag?", "+T(v.tag):"")+")</span></div>":'<div class="fileText" id="fT'+T(e)+'"'+(v.isSpoiler?' title="'+T(v.name)+'"':"")+">File: <a"+(v.name===ge||v.isSpoiler?"":' title="'+T(v.name)+'"')+' href="'+T(x)+'" target="_blank">'+(v.isSpoiler?"Spoiler Image":T(ge))+"</a> ("+T(v.size)+", "+T(v.dimensions||"PDF")+')</div><a class="fileThumb'+(v.isSpoiler?" imgspoiler":"")+'" href="'+T(x)+'" target="_blank"'+(v.hasDownscale?" data-m":"")+'><img src="'+T(w)+'" alt="'+T(v.size)+'" data-md5="'+T(v.MD5)+'" style="height: '+T(v.isSpoiler?100:v.theight)+"px; width: "+T(v.isSpoiler?100:v.twidth)+'px;"loading="lazy"></a>')+"</div>":o.fileDeleted?'<div class="file" id="f'+T(e)+'"><span class="fileThumb"><img src="'+T(ve)+"filedeleted-res"+T(S)+'" alt="File deleted." class="fileDeletedRes retina"></span></div>':""},j=o.isReply?"reply":"op",Ge={innerHTML:(o.isReply?'<div class="sideArrows" id="sa'+T(e)+'">&gt;&gt;</div>':"")+'<div id="p'+T(e)+'" class="post '+T(j)+(o.capcodeHighlight?" highlightPost":"")+'">'+(o.isReply?U.innerHTML+A.innerHTML:A.innerHTML+U.innerHTML)+'<blockquote class="postMessage" id="m'+T(e)+'">'+u.innerHTML+"</blockquote></div>"},h=r.el("div",{className:"postContainer "+j+"Container",id:"pc"+e}),r.extend(h,Ge),ee=N(".quotelink",h),B=0,M=ee.length;B<M;B++)V=ee[B],R=V.getAttribute("href"),R[0]==="#"?t.sameThread(n,xe)||(V.href=t.threadURL(n,xe)+R):(P=V.href.match(le.yotsuba.regexp.quotelink))&&t.sameThread(P[1],P[2])&&(V.href=R.match(/(#[^#]*)?$/)[0]||"#");return h},summaryText:function(o,e,n){var i;return i="",o&&(i+=o+" "),i+=e+" post"+(e>1?"s":""),+n&&(i+=" and "+n+" image repl"+(n>1?"ies":"y")),i+=" "+(o==="-"?"shown":"omitted")+"."},summary:function(o,e,n,i){return r.el("a",{className:"summary",textContent:t.summaryText("",n,i),href:"/"+o+"/thread/"+e})},thread:function(o,e,n){var i,a,l,d,c;return(d=o.nodes.root)?r.rmAll(d):o.nodes.root=d=r.el("div",{className:"thread",id:"t"+e.no}),t.hat&&r.add(d,t.hat.cloneNode(!1)),r.add(d,o.OP.nodes.root),(e.omitted_posts||!n&&e.replies)&&(l=n?[e.omitted_posts,e.images-e.last_replies.filter(function(u){return!!u.ext}).length]:[e.replies,e.images],a=l[0],i=l[1],c=t.summary(o.board.ID,e.no,a,i),r.add(d,c)),d},catalogThread:function(o,e,n){var i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D;for(k=t.staticPath,c=t.gifIcon,D=e.tn_w,C=e.tn_h,e.spoiler&&!f["Reveal Spoiler Thumbnails"]?(x=k+"spoiler",(w=t.spoilerRange[o.board])&&(x+="-"+o.board+Math.floor(1+w*Math.random())),x+=".png",h="spoiler-file",l="--tn-w: 100; --tn-h: 100;"):e.filedeleted?(x=k+"filedeleted-res"+c,h="deleted-file"):o.OP.file?(x=o.OP.file.thumbURL,b=250/Math.max(D,C),l="--tn-w: "+D*b+"; --tn-h: "+C*b+";"):(x=k+"nofile.png",h="no-file"),m=e.replies+1,d=e.images+!!e.ext,a=r.el("div",{innerHTML:'<a class="catalog-link" href="/'+T(o.board)+"/thread/"+T(o.ID)+'"><img src="'+T(x)+'"'+(h?' class="catalog-thumb '+T(h)+'"':' class="catalog-thumb" data-width="'+T(e.tn_w)+'" data-height="'+T(e.tn_h)+'"')+'></a><div class="catalog-stats"><span title="Posts / Files / Page"><span class="post-count'+(e.bumplimit?" warning":"")+'">'+T(m)+'</span> / <span class="file-count'+(e.imagelimit?" warning":"")+'">'+T(d)+'</span> / <span class="page-count">'+T(n)+'</span></span><span class="catalog-icons">'+(o.isSticky?'<img src="'+T(k)+"sticky"+T(c)+'" class="stickyIcon" title="Sticky">':"")+(o.isClosed?'<img src="'+T(k)+"closed"+T(c)+'" class="closedIcon" title="Closed">':"")+"</span></div>"}),r.before(o.OP.nodes.info,s.call(a.childNodes)),v=N("br",o.OP.nodes.comment),u=0,g=v.length;u<g;u++)i=v[u],i.previousSibling&&i.previousSibling.nodeName==="BR"&&r.addClass(i,"extra-linebreak");return A=r.el("div",{className:"thread catalog-thread",id:"t"+o}),o.OP.highlights&&r.addClass.apply(r,[A].concat(s.call(o.OP.highlights))),o.OP.file||r.addClass(A,"noFile"),A.style.cssText=l||"",A},catalogReply:function(o,e){var n,i;return n="",e.com&&(n=t.parseCommentDisplay(e.com).replace(/>>\d+/g,"").trim().replace(/\n+/g," // ")),e.ext&&(n||(n=""+r.unescape(e.filename)+e.ext)),e.com&&(n||(n=r.unescape(e.com.replace(/<br\b[^<]*>/gi," // ")))),n||(n="\xA0"),n.length>73&&(n=n.slice(0,70)+"..."),i=t.postURL(o.board.ID,o.ID,e.no),r.el("div",{className:"catalog-reply"},{innerHTML:'<span><time data-utc="'+T(e.time*1e3)+'" data-abbrev="1">...</time>: </span><a class="catalog-reply-excerpt" href="'+T(i)+'">'+T(n)+'</a><a class="catalog-reply-preview" href="'+T(i)+'">...</a>'})}},le.yotsuba.Build=t}.call(this),rt=function(){var t;return t={defaultProperties:{"4chan.org":{software:"yotsuba"},"4channel.org":{canonical:"4chan.org"},"4cdn.org":{canonical:"4chan.org"},"notso.smuglo.li":{canonical:"smuglo.li"},"smugloli.net":{canonical:"smuglo.li"},"smug.nepu.moe":{canonical:"smuglo.li"}},init:function(s){var o;return r.extend(f.siteProperties,t.defaultProperties),o=t.resolve(),o&&r.hasOwn(le,f.siteProperties[o].software)&&(this.set(o),s()),r.onExists(E,"body",function(e){return function(){var n,i,a,l,d,c,u;for(u in le)if(l=typeof(n=le[u]).detect=="function"?n.detect():void 0){l.software=u,o=location.hostname.replace(/^www\./,""),c=(i=f.siteProperties)[o]||(i[o]=r.dict()),a=0;for(d in l)c[d]!==l[d]&&(c[d]=l[d],a++);a&&r.set("siteProperties",f.siteProperties),p.SITE||(e.set(o),s());return}}}(this))},resolve:function(s){var o,e;for(s==null&&(s=location),e=s.hostname;e&&!r.hasOwn(f.siteProperties,e);)e=e.replace(/^[^.]*\.?/,"");return e&&(o=f.siteProperties[e].canonical)&&(e=o),e},parseURL:function(s){var o;return o=t.resolve(s),Z.parseURL(p.sites[o],s)},set:function(s){var o,e,n,i,a;n=f.siteProperties;for(o in n)e=n[o],!e.canonical&&(a=e.software,a&&r.hasOwn(le,a)&&(p.sites[o]=i=Object.create(le[a]),r.extend(i,{ID:o,siteID:o,properties:e,software:a})));return p.SITE=p.sites[s]}},t}.call(this),ne=function(){var t,s=[].indexOf||function(o){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===o)return e;return-1};return t={archives:[{uid:3,name:"4plebs",domain:"archive.4plebs.org",http:!0,https:!0,software:"foolfuuka",boards:["adv","f","hr","mlpol","mo","o","pol","s4s","sp","tg","trv","tv","x"],files:["adv","f","hr","mlpol","mo","o","pol","s4s","sp","tg","trv","tv","x"],reports:!0},{uid:10,name:"warosu",domain:"warosu.org",http:!1,https:!0,software:"fuuka",boards:["3","biz","cgl","ck","diy","fa","ic","jp","lit","sci","vr","vt"],files:["3","biz","cgl","ck","diy","fa","ic","jp","lit","sci","vr","vt"],search:["biz","cgl","ck","diy","fa","ic","jp","lit","sci","vr","vt"]},{uid:23,name:"Desuarchive",domain:"desuarchive.org",http:!0,https:!0,software:"foolfuuka",boards:["a","aco","an","c","cgl","co","d","fit","g","his","int","k","m","mlp","mu","q","qa","r9k","tg","trash","vr","wsg"],files:["a","aco","an","c","cgl","co","d","fit","g","his","int","k","m","mlp","mu","q","qa","r9k","tg","trash","vr"],reports:!0},{uid:24,name:"fireden.net",domain:"boards.fireden.net",http:!1,https:!0,software:"foolfuuka",boards:["cm","co","ic","sci","vip","y"],files:["cm","co","ic","sci","vip","y"],search:["cm","co","ic","sci","y"]},{uid:25,name:"arch.b4k.co",domain:"arch.b4k.co",http:!0,https:!0,software:"foolfuuka",boards:["g","mlp","qb","v","vg","vm","vmg","vp","vrpg","vst"],files:["qb","v","vg","vm","vmg","vp","vrpg","vst"],search:["qb","v","vg","vm","vmg","vp","vrpg","vst"]},{uid:29,name:"Archived.Moe",domain:"archived.moe",http:!0,https:!0,software:"foolfuuka",boards:["3","a","aco","adv","an","asp","b","bant","biz","c","can","cgl","ck","cm","co","cock","con","d","diy","e","f","fa","fap","fit","fitlit","g","gd","gif","h","hc","his","hm","hr","i","ic","int","jp","k","lgbt","lit","m","mlp","mlpol","mo","mtv","mu","n","news","o","out","outsoc","p","po","pol","pw","q","qa","qb","qst","r","r9k","s","s4s","sci","soc","sp","spa","t","tg","toy","trash","trv","tv","u","v","vg","vint","vip","vm","vmg","vp","vr","vrpg","vst","vt","w","wg","wsg","wsr","x","xs","y"],files:["can","cock","con","fap","fitlit","gd","mlpol","mo","mtv","outsoc","po","q","qb","qst","spa","vint","vip"],search:["aco","adv","an","asp","b","bant","biz","c","can","cgl","ck","cm","cock","con","d","diy","e","f","fap","fitlit","gd","gif","h","hc","his","hm","hr","i","ic","lgbt","lit","mlpol","mo","mtv","n","news","o","out","outsoc","p","po","pw","q","qa","qst","r","s","soc","spa","trv","u","vint","vip","vrpg","w","wg","wsg","wsr","x","y"],reports:!0},{uid:30,name:"TheBArchive.com",domain:"thebarchive.com",http:!0,https:!0,software:"foolfuuka",boards:["b","bant"],files:["b","bant"],reports:!0},{uid:31,name:"Archive Of Sins",domain:"archiveofsins.com",http:!0,https:!0,software:"foolfuuka",boards:["h","hc","hm","i","lgbt","r","s","soc","t","u"],files:["h","hc","hm","i","lgbt","r","s","soc","t","u"],reports:!0},{uid:36,name:"palanq.win",domain:"archive.palanq.win",http:!1,https:!0,software:"foolfuuka",boards:["bant","c","con","e","i","n","news","out","p","pw","qst","toy","vip","vp","vt","w","wg","wsr"],files:["bant","c","e","i","n","news","out","p","pw","qst","toy","vip","vp","vt","w","wg","wsr"],reports:!0},{uid:37,name:"Eientei",domain:"eientei.xyz",http:!1,https:!0,software:"Eientei",boards:["3","i","sci","xs"],files:["3","i","sci","xs"],reports:!0}],init:function(){var o,e;if(this.selectArchives(),f.archiveAutoUpdate&&(o=Date.now(),!(o-2*r.DAY<(e=f.lastarchivecheck)&&e<=o)))return this.update()},selectArchives:function(){var o,e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B;for(w={thread:r.dict(),post:r.dict(),file:r.dict()},e=r.dict(),k=f.archives,c=0,m=k.length;c<m;c++){for(a=k[c],C=["boards","files"],u=0,b=C.length;u<b;u++)h=C[u],a[h]instanceof Array||(a[h]=[]);if(B=a.uid,A=a.name,i=a.boards,l=a.files,S=a.software,!(S!=="fuuka"&&S!=="foolfuuka"))for(e[JSON.stringify(B??A)]=a,g=0,v=i.length;g<v;g++)n=i[g],n in w.thread||(w.thread[n]=a),n in w.post||S!=="foolfuuka"||(w.post[n]=a),n in w.file||s.call(l,n)<0||(w.file[n]=a)}D=f.selectedArchives;for(n in D){x=D[n];for(R in x)d=x[R],(o=e[JSON.stringify(d)])&&r.hasOwn(w,R)&&(i=R==="file"?o.files:o.boards,s.call(i,n)>=0&&(w[R][n]=o))}return t.data=w},update:function(o){var e,n,i,a,l,d,c,u,h,g,m,b,v,A,w;for(w=[],v=[],h=0,g=f.archiveLists.split(`
`),a=0,d=g.length;a<d;a++)A=g[a],A[0]!=="#"&&(A=A.trim(),A&&w.push(A));if(n=function(x,k,C){return new J("warning","Error "+k+` archive data from
`+x+`
`+C,20)},u=function(x){return function(){var k;if(this.status!==200)return n(w[x],"fetching",this.status?"Error "+this.statusText+" ("+this.status+")":"Connection Error");if(k=this.response,k instanceof Array||(k=[k]),v[x]=k,h++,h===w.length)return t.parse(v,o)}},w.length)for(i=l=0,c=w.length;l<c;i=++l)if(A=w[i],(m=A[0])==="["||m==="{"){try{b=JSON.parse(A)}catch(x){e=x,n(A,"parsing",e.message);continue}u(i).call({status:200,response:b})}else be.ajax(A,{onloadend:u(i)});else t.parse([],o)},parse:function(o,e){var n,i,a,l,d,c,u,h,g,m,b;for(i=[],n=r.dict(),d=0,u=o.length;d<u;d++)for(m=o[d],c=0,h=m.length;c<h;c++)a=m[c],b=JSON.stringify((g=a.uid)!=null?g:a.name),b in n?r.extend(n[b],a):(n[b]=r.dict.clone(a),i.push(a));return l={archives:i,lastarchivecheck:Date.now()},r.set(l),r.extend(f,l),t.selectArchives(),typeof e=="function"?e():void 0},to:function(o,e){var n;return n=(o==="search"||o==="board"?t.data.thread:t.data[o])[e.boardID],n?t[o](n,e):""},protocol:function(o){var e;return e=location.protocol,r.getOwn(o,e.slice(0,-1))||(e=e==="https:"?"http:":"https:"),e+"//"},thread:function(o,e){var n,i,a,l;return n=e.boardID,l=e.threadID,a=e.postID,i=l?n+"/thread/"+l:n+"/post/"+a,o.software==="foolfuuka"&&(i+="/"),l&&a&&(i+=o.software==="foolfuuka"?"#"+a:"#p"+a),""+t.protocol(o)+o.domain+"/"+i},post:function(o,e){var n,i,a,l;return n=e.boardID,i=e.postID,a=t.protocol(o),l=""+a+o.domain+"/_/api/chan/post/?board="+n+"&num="+i,t.securityCheck(l)?l:""},file:function(o,e){var n,i;if(n=e.boardID,i=e.filename,!i)return"";if(n==="f")i=encodeURIComponent(r.unescape(decodeURIComponent(i)));else if(/[sm]\.jpg$/.test(i))return"";return""+t.protocol(o)+o.domain+"/"+n+"/full_image/"+i},board:function(o,e){var n;return n=e.boardID,""+t.protocol(o)+o.domain+"/"+n+"/"},search:function(o,e){var n,i,a,l;return n=e.boardID,a=e.type,l=e.value,a=a==="name"?"username":a==="MD5"?"image":a,a==="capcode"?l=r.getOwn({Developer:"dev",Verified:"ver"},l)||l.toLowerCase():a==="image"&&(l=l.replace(/[+\/=]/g,function(d){return{"+":"-","/":"_","=":""}[d]})),l=encodeURIComponent(l),i=o.software==="foolfuuka"?n+"/search/"+a+"/"+l+"/":a==="image"?n+"/image/"+l:n+"/?task=search2&search_"+a+"="+l,""+t.protocol(o)+o.domain+"/"+i},report:function(o){var e,n,i,a,l,d,c,u,h,g,m;for(m=[],u=f.archives,l=0,d=u.length;l<d;l++)e=u[l],g=e.software,a=e.https,h=e.reports,n=e.boards,c=e.name,i=e.domain,g==="foolfuuka"&&a&&h&&n instanceof Array&&s.call(n,o)>=0&&m.push([c,"https://"+i+"/_/api/chan/offsite_report/"]);return m},securityCheck:function(o){return/^https:\/\//.test(o)||location.protocol==="http:"||f["Exempt Archives from Encryption"]},navigate:function(o,e,n){var i;if(t.data||t.init(),i=t.to(o,e),i&&(t.securityCheck(i)||confirm("Redirect to "+i+`?

Your connection will not be encrypted.`)))return location.replace(i);if(n)return location.replace(n)}},t}.call(this),lt=function(){var t;return t={init:function(){if(f.Anonymize)return r.addClass(E,"anonymize")}},t}.call(this),ue=function(){var t,s=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1},o=[].slice;return t={filters:r.dict(),init:function(){var e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W,z,V,K;if(((S=p.VIEW)==="index"||S==="thread"||S==="catalog")&&f.Filter&&!(p.VIEW==="catalog"&&!f["Filter in Native Catalog"])){f["Filtered Backlinks"]||r.addClass(E,"hide-backlinks");for(v in de.filter)for(R=f[v].split(`
`),g=0,A=R.length;g<A;g++)if(x=R[g],x[0]!=="#"&&(U=x.match(/\/(.*)\/(\w*)/))){if(c=x.replace(U[0],""),i=this.parseBoards((B=c.match(/(?:^|;)\s*boards:([^;]+)/))!=null?B[1]:void 0),l=this.parseBoards((M=c.match(/(?:^|;)\s*exclude:([^;]+)/))!=null?M[1]:void 0),m=v==="uniqueID"||v==="MD5")U=U[1];else try{U=RegExp(U[1],U[2])}catch(G){a=G,new J("warning",[r.tn("Invalid "+v+" filter:"),r.el("br"),r.tn(x),r.el("br"),r.tn(a.message)],60);continue}if(D=((P=c.match(/(?:^|;)\s*op:(no|only)/))!=null?P[1]:void 0)||"",k=r.getOwn({no:1,only:2},D)||0,d=((q=c.match(/(?:^|;)\s*file:(no|only)/))!=null?q[1]:void 0)||"",k=k|(r.getOwn({no:4,only:8},d)||0),W=function(){var G;switch((G=c.match(/(?:^|;)\s*stub:(yes|no)/))!=null?G[1]:void 0){case"yes":return!0;case"no":return!1;default:return f.Stubs}}(),C=/(?:^|;)\s*notify/.test(c),(h=/(?:^|;)\s*highlight/.test(c))&&(h=((O=c.match(/(?:^|;)\s*highlight:([\w-]+)/))!=null?O[1]:void 0)||"filter-highlight",z=((j=c.match(/(?:^|;)\s*top:(yes|no)/))!=null?j[1]:void 0)||"yes",z=z==="yes"),v==="general"&&((K=c.match(/(?:^|;)\s*type:([^;]*)/))?K=K[1].split(","):K=["subject","name","filename","comment"]),u=!(h||C),c={isstring:m,regexp:U,boards:i,excludes:l,mask:k,hide:u,stub:W,hl:h,top:z,noti:C},v==="general")for(b=0,w=K.length;b<w;b++)V=K[b],((e=this.filters)[V]||(e[V]=[])).push(c);else((n=this.filters)[v]||(n[v]=[])).push(c)}if(Object.keys(this.filters).length)return p.VIEW==="catalog"?t.catalog():F.Post.push({name:"Filter",cb:this.node})}},parseBoards:function(e){var n,i,a,l,d,c,u,h,g,m,b,v,A,w;if(!e)return!1;if(a=t.parseBoardsMemo[e])return a;for(a=r.dict(),A="",h=e.split(","),l=0,c=h.length;l<c;l++){n=h[l],s.call(n,":")>=0&&(g=n.split(":").slice(-2),A=g[0],n=g[1]),m=p.sites;for(w in m)if(v=m[w],w.slice(0,A.length)===A)if(n==="nsfw"||n==="sfw")for(b=(typeof v.sfwBoards=="function"?v.sfwBoards(n==="sfw"):void 0)||[],d=0,u=b.length;d<u;d++)i=b[d],a[w+"/"+i]=!0;else a[w+"/"+encodeURIComponent(n)]=!0}return t.parseBoardsMemo[e]=a,a},parseBoardsMemo:r.dict(),test:function(e,n){var i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S;if(n==null&&(n=!0),e.filterResults)return e.filterResults;l=!1,C=!0,d=void 0,D=!1,v=!1,se.isYou(e)&&(n=!1),b=e.isReply?2:1,b=b|(e.file?4:8),i=e.siteID+"/"+e.boardID,k=e.siteID+"/*";for(h in t.filters)for(A=t.values(h,e),c=0,g=A.length;c<g;c++)for(S=A[c],w=t.filters[h],u=0,m=w.length;u<m;u++)a=w[u],!(a.boards&&!(a.boards[i]||a.boards[k])||a.excludes&&(a.excludes[i]||a.excludes[k])||a.mask&b||(a.isstring?a.regexp!==S:!a.regexp.test(S)))&&(a.hide?n&&(l=!0,C&&(C=a.stub)):(d&&(x=a.hl,s.call(d,x)>=0)||(d||(d=[])).push(a.hl),D||(D=a.top),a.noti&&(v=!0)));return l?{hide:l,stub:C}:{hl:d,top:D,noti:v}},node:function(){var e,n,i,a,l,d;if(!this.isClone&&(a=t.test(this,!this.isFetchedQuote&&(this.isReply||p.VIEW==="index")),e=a.hide,l=a.stub,n=a.hl,d=a.top,i=a.noti,e?this.isReply?Me.hide(this,l):he.hide(this.thread,l):n&&(this.highlights=n,r.addClass.apply(r,[this.nodes.root].concat(o.call(n)))),i&&te.posts&&this.ID>te.lastReadPost&&!se.isYou(this)))return te.openNotification(this," triggered a notification filter")},catalog:function(){var e,n;if(n=typeof(e=p.SITE.urls).catalogJSON=="function"?e.catalogJSON(p.BOARD):void 0)return t.catalogData=r.dict(),r.ajax(n,{onloadend:t.catalogParse}),F.CatalogThreadNative.push({name:"Filter",cb:this.catalogNode})},catalogParse:function(){var e,n,i,a,l,d,c,u,h;if((c=this.status)!==200&&c!==404){new J("warning","Failed to fetch catalog JSON data. "+(this.status?"Error "+this.statusText+" ("+this.status+")":"Connection Error"),1);return}for(u=this.response,e=0,a=u.length;e<a;e++)for(d=u[e],h=d.threads,i=0,l=h.length;i<l;i++)n=h[i],t.catalogData[n.no]=n;p.BOARD.threads.forEach(function(g){if(g.catalogViewNative)return t.catalogNode.call(g.catalogViewNative)})},catalogNode:function(){var e,n,i,a,l,d;if(this.boardID===p.BOARD.ID&&t.catalogData[this.ID]&&!((a=se.db)!=null&&a.get({siteID:p.SITE.ID,boardID:this.boardID,threadID:this.ID,postID:this.ID}))){if(l=t.test(p.SITE.Build.parseJSON(t.catalogData[this.ID],this)),n=l.hide,i=l.hl,d=l.top,n)return this.nodes.root.hidden=!0;if(i&&(this.highlights=i,r.addClass.apply(r,[this.nodes.root].concat(o.call(i)))),d)return r.prepend(this.nodes.root.parentNode,this.nodes.root),typeof(e=p.SITE).catalogPin=="function"?e.catalogPin(this.nodes.root):void 0}},isHidden:function(e){return!!t.test(e).hide},valueF:{postID:function(e){return[""+e.ID]},name:function(e){return[e.info.name]},uniqueID:function(e){return[e.info.uniqueID||""]},tripcode:function(e){return[e.info.tripcode]},capcode:function(e){return[e.info.capcode]},pass:function(e){return[e.info.pass]},email:function(e){return[e.info.email]},subject:function(e){return[e.info.subject||(e.isReply?void 0:"")]},comment:function(e){var n,i,a;return[(n=e.info).comment!=null?n.comment:n.comment=(i=p.sites[e.siteID])!=null&&(a=i.Build)!=null&&typeof a.parseComment=="function"?a.parseComment(e.info.commentHTML.innerHTML):void 0]},flag:function(e){return[e.info.flag]},filename:function(e){return e.files.map(function(n){return n.name})},dimensions:function(e){return e.files.map(function(n){return n.dimensions})},filesize:function(e){return e.files.map(function(n){return n.size})},MD5:function(e){return e.files.map(function(n){return n.MD5})}},values:function(e,n){return r.hasOwn(t.valueF,e)?t.valueF[e](n).filter(function(i){return i!=null}):[e.split("+").map(function(i){var a;return(a=r.getOwn(t.valueF,i))?a(n).map(function(l){return l||""}).join(`
`):""}).join(`
`)]},addFilter:function(e,n,i){if(r.hasOwn(de.filter,e))return r.get(e,f[e],function(a){var l;return l=a[e],l=l?l+`
`+n:n,r.set(e,l,i)})},removeFilters:function(e,n,i){return r.get(e,f[e],function(a){var l;return l=a[e],n=n.map(t.escape).join("|"),l=l.replace(RegExp(`(?:$
|^)(?:`+n+")$","mg"),""),r.set(e,l,i)})},showFilters:function(e){var n,i;return we.open("Filter"),n=r(".section-container"),i=r("select[name=filter]",n),i.value=e,we.selectFilter.call(i),r.onExists(n,"textarea",function(a){var l;return l=a.textLength,a.setSelectionRange(l,l),a.focus()})},quickFilterMD5:function(){var e,n,i,a,l,d,c;if(c=H.postFromNode(this),e=c.files.filter(function(u){return u.MD5}),!!e.length){if(n=e.map(function(u){return"/"+u.MD5+"/"}).join(`
`),t.addFilter("MD5",n),d=c.origin||c,d.isReply?Me.hide(d):p.VIEW==="index"&&he.hide(d.thread),!f["MD5 Quick Filter Notifications"]){c.nodes.post.getBoundingClientRect().height&&new J("info","MD5 filtered.",2);return}return l=t.quickFilterMD5.notice,l?(l.filters.push(n),l.posts.push(d),r("span",l.el).textContent=l.filters.length+" MD5s filtered."):(a=r.el("div",{innerHTML:'<span>MD5 filtered.</span> [<a href="javascript:;">show</a>] [<a href="javascript:;">undo</a>]'}),l=t.quickFilterMD5.notice=new J("info",a,void 0,function(){return delete t.quickFilterMD5.notice}),l.filters=[n],l.posts=[d],i=N("a",a),r.on(i[0],"click",t.quickFilterCB.show.bind(l)),r.on(i[1],"click",t.quickFilterCB.undo.bind(l)))}},quickFilterCB:{show:function(){return t.showFilters("MD5"),this.close()},undo:function(){var e,n,i,a;for(t.removeFilters("MD5",this.filters),a=this.posts,e=0,n=a.length;e<n;e++)i=a[e],i.isReply?Me.show(i):p.VIEW==="index"&&he.show(i.thread);return this.close()}},escape:function(e){return e.replace(/\/|\\|\^|\$|\n|\.|\(|\)|\{|\}|\[|\]|\?|\*|\+|\|/g,function(n){return n===`
`?"\\n":n==="\\"?"\\\\":"\\"+n})},menu:{init:function(){var e,n,i,a,l,d,c;if(((l=p.VIEW)==="index"||l==="thread")&&f.Menu&&f.Filter){for(e=r.el("div",{textContent:"Filter"}),n={el:e,order:50,open:function(u){return t.menu.post=u,!0},subEntries:[]},d=[["Name","name"],["Unique ID","uniqueID"],["Tripcode","tripcode"],["Capcode","capcode"],["Pass Date","pass"],["Email","email"],["Subject","subject"],["Comment","comment"],["Flag","flag"],["Filename","filename"],["Image dimensions","dimensions"],["Filesize","filesize"],["Image MD5","MD5"]],i=0,a=d.length;i<a;i++)c=d[i],n.subEntries.push(t.menu.createSubEntry(c[0],c[1]));return ie.menu.addEntry(n)}},createSubEntry:function(e,n){var i;return i=r.el("a",{href:"javascript:;",textContent:e}),i.dataset.type=n,r.on(i,"click",t.menu.makeFilter),{el:i,open:function(a){return t.values(n,a).length}}},makeFilter:function(){var e,n,i;return n=this.dataset.type,i=t.values(n,t.menu.post),e=i.map(function(a){var l;return l=n==="uniqueID"||n==="MD5"?a:t.escape(a),n==="uniqueID"||n==="MD5"?"/"+l+"/":"/^"+l+"$/"}).join(`
`),t.addFilter(n,e,function(){return t.showFilters(n)})}}},t}.call(this),Me=function(){var t;return t={init:function(){var s;if(!((s=p.VIEW)!=="index"&&s!=="thread"||!f["Reply Hiding Buttons"]&&!(f.Menu&&f["Reply Hiding Link"])))return f["Reply Hiding Buttons"]&&r.addClass(E,"reply-hide"),this.db=new fe("hiddenPosts"),F.Post.push({name:"Reply Hiding",cb:this.node})},isHidden:function(s,o,e){return!!(t.db&&t.db.get({boardID:s,threadID:o,postID:e}))},node:function(){var s,o,e,n;if(!(!this.isReply||this.isClone||this.isFetchedQuote)&&((o=t.db.get({boardID:this.board.ID,threadID:this.thread.ID,postID:this.ID}))&&(o.thisPost?t.hide(this,o.makeStub,o.hideRecursively):(me.apply(t.hide,this,o.makeStub,!0),me.add(t.hide,this,o.makeStub,!0))),!!f["Reply Hiding Buttons"]))return s=t.makeButton(this,"hide"),(e=p.SITE.selectors.sideArrows)?(n=r(e,this.nodes.root),r.replace(n.firstChild,s),n.className="replacedSideArrows"):r.prepend(this.nodes.info,s)},menu:{init:function(){var s,o,e,n,i,a,l;if(!((i=p.VIEW)!=="index"&&i!=="thread"||!f.Menu||!f["Reply Hiding Link"]))return o=r.el("div",{className:"hide-reply-link",textContent:"Hide"}),s=r.el("a",{textContent:"Apply",href:"javascript:;"}),r.on(s,"click",t.menu.hide),l=$.checkbox("thisPost","This post",!0),a=$.checkbox("replies","Hide replies",f["Recursive Hiding"]),n=$.checkbox("makeStub","Make stub",f.Stubs),ie.menu.addEntry({el:o,order:20,open:function(d){return!d.isReply||d.isClone||d.isHidden?!1:(t.menu.post=d,!0)},subEntries:[{el:s},{el:l},{el:a},{el:n}]}),o=r.el("div",{className:"show-reply-link",textContent:"Show"}),s=r.el("a",{textContent:"Apply",href:"javascript:;"}),r.on(s,"click",t.menu.show),l=$.checkbox("thisPost","This post",!1),a=$.checkbox("replies","Show replies",!1),e=r.el("a",{textContent:"Hide stub",href:"javascript:;"}),r.on(e,"click",t.menu.hideStub),ie.menu.addEntry({el:o,order:20,open:function(d){var c;return!d.isReply||d.isClone||!d.isHidden||!(c=t.db.get({boardID:d.board.ID,threadID:d.thread.ID,postID:d.ID}))?!1:(t.menu.post=d,l.firstChild.checked=d.isHidden,a.firstChild.checked=c?.hideRecursively!=null?c.hideRecursively:f["Recursive Hiding"],!0)},subEntries:[{el:s},{el:l},{el:a}]}),ie.menu.addEntry({el:e,order:15,open:function(d){var c;return!d.isReply||d.isClone||!d.isHidden||!(c=t.db.get({boardID:d.board.ID,threadID:d.thread.ID,postID:d.ID}))?!1:t.menu.post=d}})},hide:function(){var s,o,e,n,i;if(o=this.parentNode,i=r("input[name=thisPost]",o).checked,n=r("input[name=replies]",o).checked,s=r("input[name=makeStub]",o).checked,e=t.menu.post,i)t.hide(e,s,n);else if(n)me.apply(t.hide,e,s,!0),me.add(t.hide,e,s,!0);else return;return t.saveHiddenState(e,!0,i,s,n),r.event("CloseMenu")},show:function(){var s,o,e,n,i;if(o=this.parentNode,i=r("input[name=thisPost]",o).checked,n=r("input[name=replies]",o).checked,e=t.menu.post,i)t.show(e,n);else if(n)me.apply(t.show,e,!0),me.rm(t.hide,e,!0);else return;return(s=t.db.get({boardID:e.board.ID,threadID:e.thread.ID,postID:e.ID}))&&t.saveHiddenState(e,!(i&&n),!i,s.makeStub,!n),r.event("CloseMenu")},hideStub:function(){var s,o;o=t.menu.post,(s=t.db.get({boardID:o.board.ID,threadID:o.thread.ID,postID:o.ID}))&&(t.show(o,s.hideRecursively),t.hide(o,!1,s.hideRecursively),t.saveHiddenState(o,!0,!0,!1,s.hideRecursively)),r.event("CloseMenu")}},makeButton:function(s,o){var e,n;return n=r.el("span",{className:"fa fa-"+(o==="hide"?"minus":"plus")+"-square-o",textContent:""}),e=r.el("a",{className:o+"-reply-button",href:"javascript:;"}),r.add(e,n),r.on(e,"click",t.toggle),e},saveHiddenState:function(s,o,e,n,i){var a;return a={boardID:s.board.ID,threadID:s.thread.ID,postID:s.ID},o?(a.val={thisPost:e!==!1,makeStub:n,hideRecursively:i},t.db.set(a)):t.db.delete(a)},toggle:function(){var s;return s=H.postFromNode(this),t[s.isHidden?"show":"hide"](s),t.saveHiddenState(s,s.isHidden)},hide:function(s,o,e){var n,i,a,l,d;if(o==null&&(o=f.Stubs),e==null&&(e=f["Recursive Hiding"]),!s.isHidden){for(s.isHidden=!0,e&&(me.apply(t.hide,s,o,!0),me.add(t.hide,s,o,!0)),d=H.allQuotelinksLinkingTo(s),i=0,a=d.length;i<a;i++)l=d[i],r.addClass(l,"filtered");if(!o){s.nodes.root.hidden=!0;return}return n=t.makeButton(s,"show"),r.add(n,r.tn(" "+s.info.nameBlock)),s.nodes.stub=r.el("div",{className:"stub"}),r.add(s.nodes.stub,n),f.Menu&&r.add(s.nodes.stub,ie.makeButton(s)),r.prepend(s.nodes.root,s.nodes.stub)}},show:function(s,o){var e,n,i,a;for(o==null&&(o=f["Recursive Hiding"]),s.nodes.stub?(r.rm(s.nodes.stub),delete s.nodes.stub):s.nodes.root.hidden=!1,s.isHidden=!1,o&&(me.apply(t.show,s,!0),me.rm(t.hide,s)),a=H.allQuotelinksLinkingTo(s),e=0,n=a.length;e<n;e++)i=a[e],r.rmClass(i,"filtered")}},t}.call(this),me=function(){var t,s=[].slice,o=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1};return t={recursives:r.dict(),init:function(){var e;if(!((e=p.VIEW)!=="index"&&e!=="thread"))return F.Post.push({name:"Recursive",cb:this.node})},node:function(){var e,n,i,a,l,d,c,u,h,g;if(!(this.isClone||this.isFetchedQuote)){for(h=this.quotes,n=0,a=h.length;n<a;n++)if(c=h[n],d=t.recursives[c])for(g=d.recursives,e=i=0,l=g.length;i<l;e=++i)u=g[e],u.apply(null,[this].concat(s.call(d.args[e])))}},add:function(){var e,n,i,a,l,d;return d=arguments[0],l=arguments[1],e=3<=arguments.length?s.call(arguments,2):[],a=(n=t.recursives)[i=l.fullID]||(n[i]={recursives:[],args:[]}),a.recursives.push(d),a.args.push(e)},rm:function(e,n){var i,a,l,d,c,u;if(d=t.recursives[n.fullID])for(u=d.recursives,i=a=0,l=u.length;a<l;i=++a)c=u[i],c===e&&(d.recursives.splice(i,1),d.args.splice(i,1))},apply:function(){var e,n,i,a;return a=arguments[0],i=arguments[1],e=3<=arguments.length?s.call(arguments,2):[],n=i.fullID,p.posts.forEach(function(l){if(o.call(l.quotes,n)>=0)return a.apply(null,[l].concat(s.call(e)))})}},t}.call(this),he=function(){var t;return t={init:function(){var s;if(!((s=p.VIEW)!=="index"&&s!=="catalog"||!f["Thread Hiding Buttons"]&&!(f.Menu&&f["Thread Hiding Link"])&&!f["JSON Index"]))return this.db=new fe("hiddenThreads"),p.VIEW==="catalog"?this.catalogWatch():(this.catalogSet(p.BOARD),r.on(I,"IndexRefreshInternal",this.onIndexRefresh),f["Thread Hiding Buttons"]&&r.addClass(E,"thread-hide"),F.Post.push({name:"Thread Hiding",cb:this.node}))},catalogSet:function(s){var o,e;if(r.hasStorage&&p.SITE.software==="yotsuba"){o=t.db.get({boardID:s.ID,defaultValue:r.dict()});for(e in o)o[e]=!0;return localStorage.setItem("4chan-hide-t-"+s,JSON.stringify(o))}},catalogWatch:function(){if(r.hasStorage&&p.SITE.software==="yotsuba")return this.hiddenThreads=JSON.parse(localStorage.getItem("4chan-hide-t-"+p.BOARD))||{},Z.ready(function(){return new MutationObserver(t.catalogSave).observe(r.id("threads"),{attributes:!0,subtree:!0,attributeFilter:["style"]})})},catalogSave:function(){var s,o;s=JSON.parse(localStorage.getItem("4chan-hide-t-"+p.BOARD))||{};for(o in s)r.hasOwn(t.hiddenThreads,o)||t.db.set({boardID:p.BOARD.ID,threadID:o,val:{makeStub:f.Stubs}});for(o in t.hiddenThreads)r.hasOwn(s,o)||t.db.delete({boardID:p.BOARD.ID,threadID:o});return t.hiddenThreads=s},isHidden:function(s,o){return!!(t.db&&t.db.get({boardID:s,threadID:o}))},node:function(){var s;if(!(this.isReply||this.isClone||this.isFetchedQuote)&&(f["Thread Hiding Buttons"]&&r.prepend(this.nodes.root,t.makeButton(this.thread,"hide")),s=t.db.get({boardID:this.board.ID,threadID:this.ID})))return t.hide(this.thread,s.makeStub)},onIndexRefresh:function(){return p.BOARD.threads.forEach(function(s){var o;if(o=s.nodes.root,s.isHidden&&s.stub&&!o.contains(s.stub))return t.makeStub(s,o)})},menu:{init:function(){var s,o,e,n;if(!(p.VIEW!=="index"||!f.Menu||!f["Thread Hiding Link"]))return o=r.el("div",{className:"hide-thread-link",textContent:"Hide"}),s=r.el("a",{textContent:"Apply",href:"javascript:;"}),r.on(s,"click",t.menu.hide),n=$.checkbox("Stubs","Make stub"),ie.menu.addEntry({el:o,order:20,open:function(i){var a,l;return l=i.thread,a=i.isReply,a||l.isHidden||f["JSON Index"]&&f["Index Mode"]==="catalog"?!1:(t.menu.thread=l,!0)},subEntries:[{el:s},{el:n}]}),o=r.el("a",{className:"show-thread-link",textContent:"Show",href:"javascript:;"}),r.on(o,"click",t.menu.show),ie.menu.addEntry({el:o,order:20,open:function(i){var a,l;return l=i.thread,a=i.isReply,a||!l.isHidden||f["JSON Index"]&&f["Index Mode"]==="catalog"?!1:(t.menu.thread=l,!0)}}),e=r.el("a",{textContent:"Hide stub",href:"javascript:;"}),r.on(e,"click",t.menu.hideStub),ie.menu.addEntry({el:e,order:15,open:function(i){var a,l;return l=i.thread,a=i.isReply,a||!l.isHidden||f["JSON Index"]&&f["Index Mode"]==="catalog"?!1:t.menu.thread=l}})},hide:function(){var s,o;return s=r("input",this.parentNode).checked,o=t.menu.thread,t.hide(o,s),t.saveHiddenState(o,s),r.event("CloseMenu")},show:function(){var s;return s=t.menu.thread,t.show(s),t.saveHiddenState(s),r.event("CloseMenu")},hideStub:function(){var s;s=t.menu.thread,t.show(s),t.hide(s,!1),t.saveHiddenState(s,!1),r.event("CloseMenu")}},makeButton:function(s,o){var e;return e=r.el("a",{className:o+"-thread-button",href:"javascript:;"}),r.extend(e,{innerHTML:'<span class="fa fa-'+(o==="hide"?"minus":"plus")+'-square"></span>'}),e.dataset.fullID=s.fullID,r.on(e,"click",t.toggle),e},makeStub:function(s,o){var e,n,i,a;if(n=N(p.SITE.selectors.replyOriginal,o).length,(i=r(p.SITE.selectors.summary,o))&&(n+=+i.textContent.match(/\d+/)),e=t.makeButton(s,"show"),r.add(e,r.tn(" "+s.OP.info.nameBlock+" ("+(n===1?"1 reply":n+" replies")+")")),s.stub=r.el("div",{className:"stub"}),f.Menu?r.add(s.stub,[e,ie.makeButton(s.OP)]):r.add(s.stub,e),r.prepend(o,s.stub),a=r(p.SITE.selectors.threadDivider,o))return r.addClass(a,"threadDivider")},saveHiddenState:function(s,o){return s.isHidden?t.db.set({boardID:s.board.ID,threadID:s.ID,val:{makeStub:o}}):t.db.delete({boardID:s.board.ID,threadID:s.ID}),t.catalogSet(s.board)},toggle:function(s){return s instanceof Se||(s=p.threads.get(this.dataset.fullID)),s.isHidden?t.show(s):t.hide(s),t.saveHiddenState(s)},hide:function(s,o){var e;if(o==null&&(o=f.Stubs),!s.isHidden)return e=s.nodes.root,s.isHidden=!0,X.updateHideLabel(),s.catalogView&&!X.showHiddenThreads&&(r.rm(s.catalogView.nodes.root),r.event("PostsRemoved",null,X.root)),o?t.makeStub(s,e):e.hidden=!0},show:function(s){var o;if(s.stub&&(r.rm(s.stub),delete s.stub),o=s.nodes.root,o.hidden=s.isHidden=!1,X.updateHideLabel(),s.catalogView&&X.showHiddenThreads)return r.rm(s.catalogView.nodes.root),r.event("PostsRemoved",null,X.root)}},t}.call(this),oe=function(){var t;return t={cbs:[],init:function(){var s,o,e;if(p.SITE.software==="yotsuba")return o=Date.now(),o-2*r.HOUR<(e=f.boardConfig.lastChecked||0)&&e<=o?(s=f.boardConfig.boards,this.set(s)):r.ajax(location.protocol+"//a.4cdn.org/boards.json",{onloadend:this.load})},load:function(){var s,o,e,n,i,a;if(this.status===200&&this.response&&this.response.boards){for(o=r.dict(),a=this.response.boards,n=0,i=a.length;n<i;n++)s=a[n],o[s.board]=s;r.set("boardConfig",{boards:o,lastChecked:Date.now()})}else o=f.boardConfig.boards,e=function(){switch(this.status){case 0:return"Connection Error";case 200:return"Invalid Data";default:return"Error "+this.statusText+" ("+this.status+")"}}.call(this),new J("warning","Failed to load board configuration. "+e,20);return t.set(o)},set:function(s){var o,e,n,i,a,l,d;this.boards=s,l=p.boards;for(o in l)e=l[o],e.config=this.boards[o]||{};for(d=this.cbs,i=0,a=d.length;i<a;i++)n=d[i],r.queueTask(n)},ready:function(s){return this.boards?s():this.cbs.push(s)},sfwBoards:function(s){var o,e,n,i;n=this.boards||f.boardConfig.boards,i=[];for(o in n)e=n[o],!!e.ws_board===s&&i.push(o);return i},isSFW:function(s){var o;return!!((o=(this.boards||f.boardConfig.boards)[s])!=null&&o.ws_board)},domain:function(s){return"boards."+(t.isSFW(s)?"4channel":"4chan")+".org"},isArchived:function(s){var o;return o=(this.boards||f.boardConfig.boards)[s],!o||o.is_archived},noAudio:function(s){var o;return p.SITE.software!=="yotsuba"?!1:(o=this.boards||f.boardConfig.boards,o&&o[s]&&!o[s].webm_audio)},title:function(s){var o,e;return((o=this.boards||f.boardConfig.boards)!=null&&(e=o[s])!=null?e.title:void 0)||""}},t}.call(this),H=function(){var t,s=[].slice,o=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1};return t={url:function(){var e,n,i,a,l;if(l=arguments[0],e=arguments[1],n=3<=arguments.length?s.call(arguments,2):[],(a=p.sites[e.siteID])&&(i=r.getOwn(a.urls,l)))return i.apply(null,[e].concat(s.call(n)))},threadExcerpt:function(e){var n,i,a,l;return n=e.OP,i="/"+decodeURIComponent(e.board.ID)+"/ - "+(((a=n.info.subject)!=null?a.trim():void 0)||n.commentDisplay().replace(/\n+/g," // ")||((l=n.file)!=null?l.name:void 0)||"No."+n),i.length>73?i.slice(0,70)+"...":i},threadFromRoot:function(e){var n;return e==null?null:(n=e.dataset.board,p.threads.get((n?encodeURIComponent(n):p.BOARD.ID)+"."+e.id.match(/\d*$/)[0]))},threadFromNode:function(e){return t.threadFromRoot(r.x("ancestor-or-self::"+p.SITE.xpath.thread,e))},postFromRoot:function(e){var n,i;return e==null?null:(i=p.posts.get(e.dataset.fullID),n=e.dataset.clone,n?i.clones[+n]:i)},postFromNode:function(e){return t.postFromRoot(r.x("ancestor-or-self::"+p.SITE.xpath.postContainer+"[1]",e))},postDataFromLink:function(e){var n,i,a,l,d,c;return e.dataset.postID?(l=e.dataset,n=l.boardID,c=l.threadID,a=l.postID,c||(c=0)):(i=e.href.match(p.SITE.regexp.quotelink),d=i.slice(1),n=d[0],c=d[1],a=d[2],a||(a=c)),{boardID:n,threadID:+c,postID:+a}},allQuotelinksLinkingTo:function(e){var n,i,a,l,d,c,u,h,g;if(h=[],d=p.posts,n=e.fullID,i=function(m,b){var v,A,w,x;for(h.push.apply(h,m.nodes[b]),x=m.clones,A=0,w=x.length;A<w;A++)v=x[A],h.push.apply(h,v.nodes[b])},d.forEach(function(m){if(o.call(m.quotes,n)>=0)return i(m,"quotelinks")}),f["Quote Backlinks"])for(g=e.quotes,a=0,l=g.length;a<l;a++)u=g[a],(c=d.get(u))&&i(c,"backlinks");return h.filter(function(m){var b,v,A;return A=t.postDataFromLink(m),b=A.boardID,v=A.postID,b===e.board.ID&&v===e.ID})}},t}.call(this),L=function(){var t,s=[].slice;return t={init:function(){var o,e,n,i,a,l,d,c,u,h,g,m;return r.onExists(E,"body",function(b){return function(){if(Z.isThisPageLegit())return r.add(b.bar,[b.noticesRoot,b.toggle]),r.prepend(I.body,b.bar),r.add(I.body,t.hover),b.setBarPosition(f["Bottom Header"])}}(this)),this.menu=new $.Menu("header"),h=r.el("span",{className:"menu-button"}),r.extend(h,{innerHTML:"<i></i>"}),n=$.checkbox,o=n("Fixed Header","Fixed Header"),c=n("Header auto-hide","Auto-hide header"),g=n("Header auto-hide on scroll","Auto-hide header on scroll"),e=n("Bottom Header","Bottom header"),u=n("Centered links","Centered links"),a=n("Custom Board Navigation","Custom board navigation"),d=n("Bottom Board List","Hide bottom board list"),m=n("Shortcut Icons","Shortcut Icons"),l=r.el("a",{textContent:"Edit custom board navigation",href:"javascript:;"}),this.barFixedToggler=o.firstElementChild,this.scrollHeaderToggler=g.firstElementChild,this.barPositionToggler=e.firstElementChild,this.linkJustifyToggler=u.firstElementChild,this.headerToggler=c.firstElementChild,this.footerToggler=d.firstElementChild,this.shortcutToggler=m.firstElementChild,this.customNavToggler=a.firstElementChild,r.on(h,"click",this.menuToggle),r.on(this.headerToggler,"change",this.toggleBarVisibility),r.on(this.barFixedToggler,"change",this.toggleBarFixed),r.on(this.barPositionToggler,"change",this.toggleBarPosition),r.on(this.scrollHeaderToggler,"change",this.toggleHideBarOnScroll),r.on(this.linkJustifyToggler,"change",this.toggleLinkJustify),r.on(this.footerToggler,"change",this.toggleFooterVisibility),r.on(this.shortcutToggler,"change",this.toggleShortcutIcons),r.on(this.customNavToggler,"change",this.toggleCustomNav),r.on(l,"click",this.editCustomNav),this.setBarFixed(f["Fixed Header"]),this.setHideBarOnScroll(f["Header auto-hide on scroll"]),this.setBarVisibility(f["Header auto-hide"]),this.setLinkJustify(f["Centered links"]),this.setShortcutIcons(f["Shortcut Icons"]),this.setFooterVisibility(f["Bottom Board List"]),r.sync("Fixed Header",this.setBarFixed),r.sync("Header auto-hide on scroll",this.setHideBarOnScroll),r.sync("Bottom Header",this.setBarPosition),r.sync("Shortcut Icons",this.setShortcutIcons),r.sync("Header auto-hide",this.setBarVisibility),r.sync("Centered links",this.setLinkJustify),r.sync("Bottom Board List",this.setFooterVisibility),this.addShortcut("menu",h,900),this.menu.addEntry({el:r.el("span",{textContent:"Header"}),order:107,subEntries:[{el:o},{el:c},{el:g},{el:e},{el:u},{el:d},{el:m},{el:a},{el:l}]}),r.on(window,"load popstate",t.hashScroll),r.on(I,"CreateNotification",this.createNotification),this.setBoardList(),r.onExists(E,p.SITE.selectors.boardList+" + *",t.generateFullBoardList),Z.ready(function(){var b,v,A,w,x,k;if(p.SITE.software==="yotsuba"&&!(A=r.id("boardNavDesktopFoot"))){if(!(v=r.id("absbot")))return;A=r.id("boardNavDesktop").cloneNode(!0),A.id="boardNavDesktopFoot",r("#navtopright",A).id="navbotright",r("#settingsWindowLink",A).id="settingsWindowLinkBot",r.before(v,A),r.global(function(){return window.cloneTopNav=function(){}})}if(t.bottomBoardList=r(p.SITE.selectors.boardListBottom)){for(k=N("a",t.bottomBoardList),w=0,x=k.length;w<x;w++)b=k[w],b.hostname===location.hostname&&b.pathname.split("/")[1]===p.BOARD.ID&&(b.className="current");return ye.setLinks(t.bottomBoardList)}}),p.SITE.software==="yotsuba"&&(p.VIEW==="catalog"||!f["Disable Native Extension"])&&(i=r.el("a",{href:"javascript:;"}),p.VIEW==="catalog"?(i.title=i.textContent="Catalog Settings",i.className="fa fa-book"):(i.title=i.textContent="4chan Settings",i.className="native-settings"),r.on(i,"click",function(){return r.id("settingsWindowLink").click()}),this.addShortcut("native",i,810)),this.enableDesktopNotifications()},bar:r.el("div",{id:"header-bar"}),noticesRoot:r.el("div",{id:"notifications"}),shortcuts:r.el("span",{id:"shortcuts"}),hover:r.el("div",{id:"hoverUI"}),toggle:r.el("div",{id:"scroll-marker"}),setBoardList:function(){var o,e;return t.boardList=o=r.el("span",{id:"board-list"}),r.extend(o,{innerHTML:'<span id="custom-board-list"></span><span id="full-board-list" hidden><span class="hide-board-list-container brackets-wrap"><a href="javascript:;" class="hide-board-list-button">&nbsp;-&nbsp;</a></span> <span class="boardList"></span></span>'}),e=r(".hide-board-list-button",o),r.on(e,"click",t.toggleBoardList),r.prepend(t.bar,[t.boardList,t.shortcuts]),t.setCustomNav(f["Custom Board Navigation"]),t.generateBoardList(f.boardnav),r.sync("Custom Board Navigation",t.setCustomNav),r.sync("boardnav",t.generateBoardList)},generateFullBoardList:function(){var o,e,n,i,a,l;for(p.SITE.transformBoardList?a=p.SITE.transformBoardList():a=s.call(r(p.SITE.selectors.boardList).cloneNode(!0).childNodes),e=r(".boardList",t.boardList),r.add(e,a),l=N("a",e),n=0,i=l.length;n<i;n++)o=l[n],o.hostname===location.hostname&&o.pathname.split("/")[1]===p.BOARD.ID&&(o.className="current");return ye.setLinks(e)},generateBoardList:function(o){var e,n,i,a;if(e=r("#custom-board-list",t.boardList),r.rmAll(e),!!o)return o=o.replace(/(\r\n|\n|\r)/g," "),i=/[\w@]+(-(all|title|replace|full|index|catalog|archive|expired|nt|(mode|sort|text):"[^"]+"(,"[^"]+")?))*|[^\w@]+/g,n=function(){var l,d,c,u;for(c=o.match(i),u=[],l=0,d=c.length;l<d;l++)a=c[l],u.push(t.mapCustomNavigation(a));return u}(),r.add(e,n),ye.setLinks(e)},mapCustomNavigation:function(o){var e,n,i,a,l,d,c,u,h,g;if(/^[^\w@]/.test(o))return r.tn(o);if(u=h=null,o=o.replace(/-text:"([^"]+)"(?:,"([^"]+)")?/g,function(m,b,v){return u=b,h=v,""}),a=[],o=o.replace(/-(?:mode|sort):"([^"]+)"/g,function(m,b){return a.push(b.toLowerCase().replace(/\ /g,"-")),""}),a=a.join("/"),/^toggle-all/.test(o))return e=r.el("a",{className:"show-board-list-button",textContent:u||"+",href:"javascript:;"}),r.on(e,"click",t.toggleBoardList),e;if(/^external/.test(o))return e=r.el("a",{href:h||"javascript:;",textContent:u||"+",className:"external"}),/-nt/.test(o)&&(e.target="_blank",e.rel="noopener"),e;if(n=o.split("-")[0],n==="current")if((d=location.hostname)==="boards.4chan.org"||d==="boards.4channel.org")n=p.BOARD.ID;else return e=r.el("a",{href:"/"+p.BOARD.ID+"/",textContent:u||decodeURIComponent(p.BOARD.ID),className:"current"}),/-nt/.test(o)&&(e.target="_blank",e.rel="noopener"),/-index/.test(o)?e.dataset.only="index":/-catalog/.test(o)?(e.dataset.only="catalog",e.href+="catalog.html"):/-(archive|expired)/.test(o)&&(e=e.firstChild),e;if(e=function(){var m,b;return n==="@"?r.el("a",{href:"https://twitter.com/4chan",title:"4chan Twitter",textContent:"@"}):(e=r.el("a",{href:"//"+oe.domain(n)+"/"+n+"/",textContent:n,title:oe.title(n)}),((m=p.VIEW)==="catalog"||m==="archive")&&(b=H.url(p.VIEW,{siteID:"4chan.org",boardID:n}))&&(e.href=b),e.hostname===location.hostname&&n===p.BOARD.ID&&(e.className="current"),e)}(),e.textContent=/-title/.test(o)||/-replace/.test(o)&&e.hostname===location.hostname&&n===p.BOARD.ID?e.title||e.textContent:/-full/.test(o)?"/"+n+"/"+(e.title?" - "+e.title:""):u||n,l=o.match(/-(index|catalog)/))if(g=ye[l[1]]({siteID:"4chan.org",boardID:n}),g)e.dataset.only=l[1],e.href=g,l[1]==="catalog"&&r.addClass(e,"catalog");else return e.firstChild;if(f["JSON Index"]&&a&&(e.dataset.indexOptions=a,((c=e.hostname)==="boards.4chan.org"||c==="boards.4channel.org")&&e.pathname.split("/")[2]===""&&(e.href+=(e.hash?"/":"#")+a)),/-archive/.test(o))if(i=ne.to("board",{boardID:n}))e.href=i;else return e.firstChild;if(/-expired/.test(o))if(oe.isArchived(n))e.href="//"+oe.domain(n)+"/"+n+"/archive";else return e.firstChild;return/-nt/.test(o)&&(e.target="_blank",e.rel="noopener"),n==="@"&&r.addClass(e,"navSmall"),e},toggleBoardList:function(){var o,e,n,i;return o=t.bar,e=r("#custom-board-list",o),n=r("#full-board-list",o),i=!n.hidden,e.hidden=!i,n.hidden=i},setLinkJustify:function(o){return t.linkJustifyToggler.checked=o,o?r.addClass(E,"centered-links"):r.rmClass(E,"centered-links")},toggleLinkJustify:function(){var o;return r.event("CloseMenu"),o=this.nodeName==="INPUT"?this.checked:void 0,t.setLinkJustify(o),r.set("Centered links",o)},setBarFixed:function(o){return t.barFixedToggler.checked=o,o?(r.addClass(E,"fixed"),r.addClass(t.bar,"dialog")):(r.rmClass(E,"fixed"),r.rmClass(t.bar,"dialog"))},toggleBarFixed:function(){return r.event("CloseMenu"),t.setBarFixed(this.checked),f["Fixed Header"]=this.checked,r.set("Fixed Header",this.checked)},setShortcutIcons:function(o){return t.shortcutToggler.checked=o,o?r.addClass(E,"shortcut-icons"):r.rmClass(E,"shortcut-icons")},toggleShortcutIcons:function(){return r.event("CloseMenu"),t.setShortcutIcons(this.checked),f["Shortcut Icons"]=this.checked,r.set("Shortcut Icons",this.checked)},setBarVisibility:function(o){return t.headerToggler.checked=o,r.event("CloseMenu"),(o?r.addClass:r.rmClass)(t.bar,"autohide"),(o?r.addClass:r.rmClass)(E,"autohide")},toggleBarVisibility:function(){var o,e;return o=this.nodeName==="INPUT"?this.checked:!r.hasClass(t.bar,"autohide"),f["Header auto-hide"]=o,r.set("Header auto-hide",o),t.setBarVisibility(o),e="The header bar will "+(o?"automatically hide itself.":"remain visible."),new J("info",e,2)},setHideBarOnScroll:function(o){if(t.scrollHeaderToggler.checked=o,o){r.on(window,"scroll",t.hideBarOnScroll);return}return r.off(window,"scroll",t.hideBarOnScroll),r.rmClass(t.bar,"scroll"),t.bar.classList.toggle("autohide",f["Header auto-hide"])},toggleHideBarOnScroll:function(){var o;return o=this.checked,r.cb.checked.call(this),t.setHideBarOnScroll(o)},hideBarOnScroll:function(){var o;return o=window.pageYOffset,o>(t.previousOffset||0)?r.addClass(t.bar,"autohide","scroll"):r.rmClass(t.bar,"autohide","scroll"),t.previousOffset=o},setBarPosition:function(o){var e,n;return(n=t.barPositionToggler)!=null&&(n.checked=o),r.event("CloseMenu"),e=o?["bottom-header","top-header","after"]:["top-header","bottom-header","add"],r.addClass(E,e[0]),r.rmClass(E,e[1]),r[e[2]](t.bar,t.noticesRoot)},toggleBarPosition:function(){return r.cb.checked.call(this),t.setBarPosition(this.checked)},setFooterVisibility:function(o){return t.footerToggler.checked=o,E.classList.toggle("hide-bottom-board-list",o)},toggleFooterVisibility:function(){var o,e;return r.event("CloseMenu"),o=this.nodeName==="INPUT"?this.checked:r.hasClass(E,"hide-bottom-board-list"),t.setFooterVisibility(o),r.set("Bottom Board List",o),e=o?"The bottom navigation will now be hidden.":"The bottom navigation will remain visible.",new J("info",e,2)},setCustomNav:function(o){var e,n,i,a;return t.customNavToggler.checked=o,n=r("#custom-board-list",t.bar),i=r("#full-board-list",t.bar),e=r(".hide-board-list-container",i),a=o?[!1,!0,!1]:[!0,!1,!0],n.hidden=a[0],i.hidden=a[1],e.hidden=a[2],a},toggleCustomNav:function(){return r.cb.checked.call(this),t.setCustomNav(this.checked)},editCustomNav:function(){var o;return we.open("Advanced"),o=r.id("fourchanx-settings"),r("[name=boardnav]",o).focus()},hashScroll:function(o){var e,n;if(o){if(o.state)return;history.state||history.replaceState({},"")}if((n=location.hash.slice(1))&&(et.showIfHidden(n),e=r.id(n)))return r.queueTask(function(){return t.scrollTo(e)})},scrollTo:function(o,e,n){var i,a;if(o.offsetParent){if(e){if(a=t.getBottomOf(o),f["Fixed Header"]&&f["Header auto-hide on scroll"]&&f["Bottom header"]&&(i=t.bar.getBoundingClientRect().height,a<=0?t.isHidden()||(a+=i):t.isHidden()&&(a-=i)),!(n&&a>=0))return window.scrollBy(0,-a)}else if(a=t.getTopOf(o),f["Fixed Header"]&&f["Header auto-hide on scroll"]&&!f["Bottom header"]&&(i=t.bar.getBoundingClientRect().height,a>=0?t.isHidden()||(a+=i):t.isHidden()&&(a-=i)),!(n&&a>=0))return window.scrollBy(0,a)}},scrollToIfNeeded:function(o,e){return t.scrollTo(o,e,!0)},getTopOf:function(o){var e,n;return n=o.getBoundingClientRect().top,f["Fixed Header"]&&!f["Bottom Header"]&&(e=t.toggle.getBoundingClientRect(),n-=e.top+e.height),n},getBottomOf:function(o){var e,n,i;return n=E.clientHeight,e=n-o.getBoundingClientRect().bottom,f["Fixed Header"]&&f["Bottom Header"]&&(i=t.toggle.getBoundingClientRect(),e-=n-i.bottom+i.height),e},isNodeVisible:function(o){var e;return I.hidden||!E.contains(o)?!1:(e=o.getBoundingClientRect().height,t.getTopOf(o)+e>=0&&t.getBottomOf(o)+e>=0)},isHidden:function(){var o;return o=t.bar.getBoundingClientRect().top,f["Bottom header"]?o===E.clientHeight:o<0},addShortcut:function(o,e,n){var i,a,l,d,c;for(c=r.el("span",{id:"shortcut-"+o,className:"shortcut brackets-wrap"}),r.add(c,e),c.dataset.index=n,d=N("[data-index]",t.shortcuts),i=0,l=d.length;i<l;i++)if(a=d[i],+a.dataset.index>+n){r.before(a,c);return}return r.add(t.shortcuts,c)},rmShortcut:function(o){return r.rm(o.parentElement)},menuToggle:function(o){return t.menu.toggle(o,this,p)},createNotification:function(o){var e,n,i,a,l;return a=o.detail,l=a.type,e=a.content,n=a.lifetime,i=new J(l,e,n)},areNotificationsEnabled:!1,enableDesktopNotifications:function(){var o,e,n,i,a;if(window.Notification&&f["Desktop Notifications"]){switch(Notification.permission){case"granted":t.areNotificationsEnabled=!0;return;case"denied":return}return n=r.el("span",{innerHTML:'4chan X needs your permission to show desktop notifications. [<a href="https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions#why-is-4chan-x-asking-for-permission-to-show-desktop-notifications" target="_blank">FAQ</a>]<br><button>Authorize</button> or <button>Disable</button>'}),a=N("button",n),o=a[0],e=a[1],r.on(o,"click",function(){return Notification.requestPermission(function(l){if(t.areNotificationsEnabled=l==="granted",l!=="default")return i.close()})}),r.on(e,"click",function(){return r.set("Desktop Notifications",!1),i.close()}),i=new J("info",n)}}},t}.call(this),X=function(){var t,s=[].slice,o=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1};return t={showHiddenThreads:!1,changed:{},enabledOn:function(e){var n,i;return i=e.siteID,n=e.boardID,f["JSON Index"]&&p.sites[i].software==="yotsuba"&&n!=="f"},init:function(){var e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M;if(p.VIEW==="index"&&(r.one(I,"4chanXInitFinished",this.cb.initFinished),r.on(I,"PostsInserted",this.cb.postsInserted),!!this.enabledOn(p.BOARD))){this.enabled=!0,F.Post.push({name:"Index Page Numbers",cb:this.node}),F.CatalogThread.push({name:"Catalog Features",cb:this.catalogNode}),this.search=((b=history.state)!=null?b.searched:void 0)||"",(v=history.state)!=null&&v.mode&&(f["Index Mode"]=(A=history.state)!=null?A.mode:void 0),this.currentSort=(w=history.state)!=null?w.sort:void 0,this.currentSort||(this.currentSort=typeof f["Index Sort"]=="object"?f["Index Sort"][p.BOARD.ID]||"bump":f["Index Sort"]),this.currentPage=this.getCurrentPage(),this.processHash(),r.addClass(E,"index-loading",f["Index Mode"].replace(/\ /g,"-")+"-mode"),r.on(window,"popstate",this.cb.popstate),r.on(I,"scroll",this.scroll),r.on(I,"SortIndex",this.cb.resort),this.button=r.el("a",{className:"fa fa-refresh",title:"Refresh",href:"javascript:;",textContent:"Refresh Index"}),r.on(this.button,"click",function(){return t.update()}),L.addShortcut("index-refresh",this.button,590),n=[],this.inputs=l=r.dict(),x=de.Index;for(m in x)e=x[m],e instanceof Array&&(u=$.checkbox(m,""+m[0]+m.slice(1).toLowerCase()),u.title=e[1],n.push({el:u}),a=u.firstChild,r.on(a,"change",r.cb.checked),l[m]=a);for(r.on(l["Show Replies"],"change",this.cb.replies),r.on(l["Catalog Hover Expand"],"change",this.cb.hover),r.on(l["Pin Watched Threads"],"change",this.cb.resort),r.on(l["Anchor Hidden Threads"],"change",this.cb.resort),M=function(P){if(a=r.getOwn(l,P.target.name))return a.checked=P.target.checked,r.event("change",null,a)},r.on(I,"OpenSettings",function(){return r.on(r.id("fourchanx-settings"),"change",M)}),R=$.checkbox("Per-Board Sort Type","Per-board sort type",typeof f["Index Sort"]=="object"),R.title="Set the sorting order of each board independently.",r.on(R.firstChild,"change",this.cb.perBoardSort),n.splice(3,0,{el:R}),L.menu.addEntry({el:r.el("span",{textContent:"Index Navigation"}),order:100,subEntries:n}),this.navLinks=r.el("div",{className:"navLinks json-index"}),r.extend(this.navLinks,{innerHTML:'<span class="brackets-wrap indexlink"><a href="#index">Index</a></span> <span class="brackets-wrap cataloglink"><a href="#catalog">Catalog</a></span> <span class="brackets-wrap archlistlink"><a href="./archive">Archive</a></span> <span class="brackets-wrap bottomlink"><a href="#bottom">Bottom</a></span> <span class="brackets-wrap" id="index-last-refresh"><a href="javascript:;"><time title="Last index refresh">...</time></a></span> <input type="search" id="index-search" class="field" placeholder="Search"><a id="index-search-clear" href="javascript:;" title="Clear search">\xD7</a><span id="hidden-label" hidden> &mdash; <span id="hidden-count"></span> <span id="hidden-toggle">[<a href="javascript:;">Show</a>]</span></span><span id="index-options"><input type="checkbox" id="index-rev" name="Reverse Sort" title="Reverse sort order"><span id="lastlong-options" hidden><input type="text" title="Minimum letter count (without image)"><input type="text" title="Minimum letter count (with image)"></span><select id="index-sort" name="Index Sort"><option disabled>Index Sort</option><option value="bump">Bump order</option><option value="lastreply">Last reply</option><option value="lastlong">Last long reply</option><option value="birth">Creation date</option><option value="replycount">Reply count</option><option value="filecount">File count</option><option value="activity">Posts per minute</option></select><select id="index-size" name="Index Size"><option disabled>Image Size</option><option value="small">Small</option><option value="large">Large</option></select><select id="index-mode" name="Index Mode"><option disabled>Index Mode</option><option value="paged">Paged</option><option value="infinite">Infinite scrolling</option><option value="all pages">All threads</option><option value="catalog">Catalog</option></select></span>'}),r(".cataloglink a",this.navLinks).href=ye.catalog(),oe.isArchived(p.BOARD.ID)||(r(".archlistlink",this.navLinks).hidden=!0),r.on(r("#index-last-refresh a",this.navLinks),"click",this.cb.refreshFront),this.searchInput=r("#index-search",this.navLinks),this.setupSearch(),r.on(this.searchInput,"input",this.onSearchInput),r.on(r("#index-search-clear",this.navLinks),"click",this.clearSearch),this.hideLabel=r("#hidden-label",this.navLinks),r.on(r("#hidden-toggle a",this.navLinks),"click",this.cb.toggleHiddenThreads),this.selectRev=r("#index-rev",this.navLinks),this.selectMode=r("#index-mode",this.navLinks),this.selectSort=r("#index-sort",this.navLinks),this.selectSize=r("#index-size",this.navLinks),r.on(this.selectRev,"change",this.cb.sort),r.on(this.selectMode,"change",this.cb.mode),r.on(this.selectSort,"change",this.cb.sort),r.on(this.selectSize,"change",r.cb.value),r.on(this.selectSize,"change",this.cb.size),k=[this.selectMode,this.selectSize],d=0,h=k.length;d<h;d++)S=k[d],S.value=f[S.name];for(this.selectRev.checked=/-rev$/.test(t.currentSort),this.selectSort.value=t.currentSort.replace(/-rev$/,""),this.lastLongOptions=r("#lastlong-options",this.navLinks),this.lastLongInputs=N("input",this.lastLongOptions),this.lastLongThresholds=[0,0],this.lastLongOptions.hidden=this.selectSort.value!=="lastlong",C=this.lastLongInputs,i=c=0,g=C.length;c<g;i=++c)a=C[i],r.on(a,"change",this.cb.lastLongThresholds),B=f["Last Long Reply Thresholds "+i],a.value=this.lastLongThresholds[i]=typeof B=="object"?(D=B[p.BOARD.ID])!=null?D:100:B;return this.root=r.el("div",{className:"board json-index"}),r.on(this.root,"click",this.cb.hoverToggle),this.cb.size(),this.cb.hover(),this.pagelist=r.el("div",{className:"pagelist json-index"}),r.extend(this.pagelist,{innerHTML:'<div class="prev"><a><button disabled>Previous</button></a></div><div class="pages"></div><div class="next"><a><button disabled>Next</button></a></div><div class="pages cataloglink"><a href="./catalog">Catalog</a></div>'}),r(".cataloglink a",this.pagelist).href=ye.catalog(),r.on(this.pagelist,"click",this.cb.pageNav),this.update(!0),r.onExists(E,"title + *",function(){return I.title=I.title.replace(/\ -\ Page\ \d+/,"")}),r.onExists(E,".board > .thread > .postContainer, .board + *",function(){var P,q,O,j,U,W,z;p.SITE.Build.hat=r(".board > .thread > img:first-child"),p.SITE.Build.hat&&(p.BOARD.threads.forEach(function(V){if(V.nodes.root)return r.prepend(V.nodes.root,p.SITE.Build.hat.cloneNode(!1))}),r.addClass(E,"hats-enabled"),r.addStyle(".catalog-thread::after {background-image: url("+p.SITE.Build.hat.src+");}")),P=r(".board"),r.replace(P,t.root),t.loaded&&r.event("PostsInserted",null,t.root);try{I.implementation.createDocument(null,null,null).appendChild(P)}catch{}for(U=N(".navLinks"),j=0,O=U.length;j<O;j++)q=U[j],r.rm(q);if(r.rm(r.id("ctrl-top")),z=r.id("delform").previousElementSibling,r.before(z,r.el("hr")),r.before(z,t.navLinks),W=r("#index-last-refresh time",t.navLinks),W.dataset.utc)return Ue.update(W)}),Z.ready(function(){var P;return(P=r(".pagelist"))&&r.replace(P,t.pagelist),r.rmClass(E,"index-loading")})}},scroll:function(){var e,n;if(!(t.req||!t.liveThreadData||f["Index Mode"]!=="infinite"||window.scrollY<=E.scrollHeight-(300+window.innerHeight)))return t.pageNum==null&&(t.pageNum=t.currentPage),e=++t.pageNum,e>t.pagesNum?t.endNotice():(n=t.threadsOnPage(e),t.buildStructure(n))},endNotice:function(){var e,n;return e=!1,n=function(){return e=!1},function(){if(!e)return e=!0,new J("info","Last page reached.",2),setTimeout(n,3*r.SECOND)}}(),menu:{init:function(){if(p.VIEW==="index"&&f.Menu&&f["Thread Hiding Link"]&&t.enabledOn(p.BOARD))return ie.menu.addEntry({el:r.el("a",{href:"javascript:;",className:"has-shortcut-text"},{innerHTML:'<span></span><span class="shortcut-text">Shift+click</span>'}),order:20,open:function(e){var n;return n=e.thread,f["Index Mode"]!=="catalog"?!1:(this.el.firstElementChild.textContent=n.isHidden?"Unhide":"Hide",this.cb&&r.off(this.el,"click",this.cb),this.cb=function(){return r.event("CloseMenu"),t.toggleHide(n)},r.on(this.el,"click",this.cb),!0)}})}},node:function(){if(!(this.isReply||this.isClone||t.threadPosition[this.ID]==null))return this.thread.setPage(Math.floor(t.threadPosition[this.ID]/t.threadsNumPerPage)+1)},catalogNode:function(){return r.on(this.nodes.root,"mousedown click",function(e){return function(n){if(n.button===0&&n.shiftKey)return n.type==="click"&&t.toggleHide(e.thread),n.preventDefault()}}(this))},toggleHide:function(e){if(t.showHiddenThreads){if(he.show(e),!he.db.get({boardID:e.board.ID,threadID:e.ID}))return}else he.hide(e);return he.saveHiddenState(e)},cycleSortType:function(){var e,n,i,a,l;for(l=s.call(t.selectSort.options).filter(function(d){return!d.disabled}),e=n=0,i=l.length;n<i&&(a=l[e],!a.selected);e=++n);return l[(e+1)%l.length].selected=!0,r.event("change",null,t.selectSort)},cb:{initFinished:function(){return t.initFinishedFired=!0,r.queueTask(function(){return t.cb.postsInserted()})},postsInserted:function(){var e;if(t.initFinishedFired&&(e=0,p.posts.forEach(function(n){if(!n.isFetchedQuote&&!n.indexRefreshSeen&&E.contains(n.nodes.root))return n.indexRefreshSeen=!0,e++}),e))return r.event("IndexRefresh")},toggleHiddenThreads:function(){return r("#hidden-toggle a",t.navLinks).textContent=(t.showHiddenThreads=!t.showHiddenThreads)?"Hide":"Show",t.sort(),t.buildIndex()},mode:function(){return t.pushState({mode:this.value}),t.pageLoad(!1)},sort:function(){var e;return e=t.selectRev.checked?t.selectSort.value+"-rev":t.selectSort.value,t.pushState({sort:e}),t.pageLoad(!1)},resort:function(e){var n;if(t.changed.order=!0,!(e!=null&&(n=e.detail)!=null&&n.deferred))return t.pageLoad(!1)},perBoardSort:function(){var e,n;for(f["Index Sort"]=this.checked?r.dict():"",t.saveSort(),e=n=0;n<2;e=++n)f["Last Long Reply Thresholds "+e]=this.checked?r.dict():"",t.saveLastLongThresholds(e)},lastLongThresholds:function(){var e,n;if(e=s.call(this.parentNode.children).indexOf(this),n=+this.value,!Number.isFinite(n)){this.value=t.lastLongThresholds[e];return}return t.lastLongThresholds[e]=n,t.saveLastLongThresholds(e),t.changed.order=!0,t.pageLoad(!1)},size:function(e){if(f["Index Mode"]!=="catalog"?(r.rmClass(t.root,"catalog-small"),r.rmClass(t.root,"catalog-large")):f["Index Size"]==="small"?(r.addClass(t.root,"catalog-small"),r.rmClass(t.root,"catalog-large")):(r.addClass(t.root,"catalog-large"),r.rmClass(t.root,"catalog-small")),e)return t.buildIndex()},replies:function(){return t.buildIndex()},hover:function(){return E.classList.toggle("catalog-hover-expand",f["Catalog Hover Expand"])},hoverToggle:function(e){var n,i;if(f["Catalog Hover Toggle"]&&r.hasClass(E,"catalog-mode")&&!r.modifiedClick(e)&&!r.x("ancestor-or-self::a",e.target)&&(n=t.inputs["Catalog Hover Expand"],n.checked=!n.checked,r.event("change",null,n),i=H.threadFromNode(e.target)))return t.cb.catalogReplies.call(i),t.cb.hoverAdjust.call(i.OP.nodes)},popstate:function(e){var n,i,a,l,d,c;return e?.state?(l=e.state,d=l.searched,n=l.mode,c=l.sort,a=t.getCurrentPage(),t.setState({search:d,mode:n,sort:c,page:a}),t.pageLoad(!1)):(i=t.processHash(),f["Refreshed Navigation"]&&i?t.update():t.pageLoad())},pageNav:function(e){var n;if(!r.modifiedClick(e)){switch(e.target.nodeName){case"BUTTON":e.target.blur(),n=e.target.parentNode;break;case"A":n=e.target;break;default:return}if(n.textContent!=="Catalog")return e.preventDefault(),t.userPageNav(+n.pathname.split(/\/+/)[2]||1)}},refreshFront:function(){return t.pushState({page:1}),t.update()},catalogReplies:function(){if(f["Show Replies"]&&r.hasClass(E,"catalog-hover-expand")&&!this.catalogView.nodes.replies)return t.buildCatalogReplies(this)},hoverAdjust:function(){var e,n,i;if(r.hasClass(E,"catalog-hover-expand")&&(e=this.post.getBoundingClientRect(),i=r.minmax(0,-e.left,E.clientWidth-e.right)))return n=this.post.style,n.left=i+"px",n.right=-i+"px",r.one(this.root,"mouseleave",function(){return n.left=n.right=null})}},scrollToIndex:function(){return L.scrollToIfNeeded(t.navLinks.getBoundingClientRect().height?t.navLinks:t.root)},getCurrentPage:function(){return+window.location.pathname.split(/\/+/)[2]||1},userPageNav:function(e){return t.pushState({page:e}),f["Refreshed Navigation"]?t.update():t.pageLoad()},hashCommands:{mode:{paged:"paged","infinite-scrolling":"infinite",infinite:"infinite","all-threads":"all pages","all-pages":"all pages",catalog:"catalog"},sort:{"bump-order":"bump","last-reply":"lastreply","last-long-reply":"lastlong","creation-date":"birth","reply-count":"replycount","file-count":"filecount","posts-per-minute":"activity"}},processHash:function(){var e,n,i,a,l,d,c,u,h,g;for(i=((u=location.href.match(/#.*/))!=null?u[0]:void 0)||"",g={replace:!0},n=i.slice(1).split("/"),l=[],a=0,d=n.length;a<d;a++)e=n[a],(c=r.getOwn(t.hashCommands.mode,e))?g.mode=c:e==="index"?(g.mode=f["Previous Index Mode"],g.page=1):(h=r.getOwn(t.hashCommands.sort,e.replace(/-rev$/,"")))?(g.sort=h,/-rev$/.test(e)&&(g.sort+="-rev")):/^s=/.test(e)?g.search=decodeURIComponent(e.slice(2)).replace(/\+/g," ").trim():l.push(e);return i=l.join("/"),i&&(g.hash="#"+i),t.pushState(g),n.length-l.length},pushState:function(e){var n,i,a,l,d,c;return c=e.search,n=e.hash,d=e.replace,i=(l=history.state)!=null?l.oldpage:void 0,c!=null&&c!==t.search&&(e.page=c?1:i||1,c?t.search||(i=t.currentPage):i=void 0),t.setState(e),a=t.currentPage===1?"/"+p.BOARD+"/":"/"+p.BOARD+"/"+t.currentPage,n||(n=""),history[d?"replaceState":"pushState"]({mode:f["Index Mode"],sort:t.currentSort,searched:t.search,oldpage:i},"",location.protocol+"//"+location.host+a+n)},setState:function(e){var n,i,a,l,d,c;if(d=e.search,i=e.mode,c=e.sort,a=e.page,n=e.hash,d!=null&&d!==t.search&&(t.changed.search=!0,t.search=d),i!=null&&i!==f["Index Mode"]&&(t.changed.mode=!0,f["Index Mode"]=i,r.set("Index Mode",i),i==="catalog"||f["Previous Index Mode"]===i||(f["Previous Index Mode"]=i,r.set("Previous Index Mode",i))),c!=null&&c!==t.currentSort&&(t.changed.sort=!0,t.currentSort=c,t.saveSort()),((l=f["Index Mode"])==="all pages"||l==="catalog")&&(a=1),a!=null&&a!==t.currentPage&&(t.changed.page=!0,t.currentPage=a),n!=null)return t.changed.hash=!0},savePerBoard:function(e,n){return typeof f[e]=="object"?f[e][p.BOARD.ID]=n:f[e]=n,r.set(e,f[e])},saveSort:function(){return t.savePerBoard("Index Sort",t.currentSort)},saveLastLongThresholds:function(e){return t.savePerBoard("Last Long Reply Thresholds "+e,t.lastLongThresholds[e])},pageLoad:function(e){var n,i,a,l,d,c,u,h;if(e==null&&(e=!0),!!t.liveThreadData)return d=t.changed,h=d.threads,a=d.order,c=d.search,i=d.mode,u=d.sort,l=d.page,n=d.hash,h||(h=c),a||(a=u),(h||a)&&t.sort(),h&&t.buildPagelist(),c&&t.setupSearch(),i&&t.setupMode(),u&&t.setupSort(),(h||i||l||a)&&t.buildIndex(),(h||l)&&t.setPage(),e&&!n&&t.scrollToIndex(),n&&L.hashScroll(),t.changed={}},setupMode:function(){var e,n,i,a;for(a=["paged","infinite","all pages","catalog"],e=0,n=a.length;e<n;e++)i=a[e],r[i===f["Index Mode"]?"addClass":"rmClass"](E,i.replace(/\ /g,"-")+"-mode");return t.selectMode.value=f["Index Mode"],t.cb.size(),t.showHiddenThreads=!1,r("#hidden-toggle a",t.navLinks).textContent="Show"},setupSort:function(){return t.selectRev.checked=/-rev$/.test(t.currentSort),t.selectSort.value=t.currentSort.replace(/-rev$/,""),t.lastLongOptions.hidden=t.selectSort.value!=="lastlong"},getPagesNum:function(){return t.search?Math.ceil(t.sortedThreadIDs.length/t.threadsNumPerPage):t.pagesNum},getMaxPageNum:function(){return Math.max(1,t.getPagesNum())},buildPagelist:function(){var e,n,i,a,l,d,c;if(d=r(".pages",t.pagelist),a=t.getMaxPageNum(),d.childElementCount!==a){for(l=[],n=i=1,c=a;i<=c;n=i+=1)e=r.el("a",{textContent:n,href:n===1?"./":n}),l.push(r.tn("["),e,r.tn("] "));return r.rmAll(d),r.add(d,l)}},setPage:function(){var e,n,i,a,l,d,c,u;if(l=t.currentPage,i=t.getMaxPageNum(),d=r(".pages",t.pagelist),c=d.previousSibling.firstChild,a=d.nextSibling.firstChild,n=Math.max(l-1,1),c.href=n===1?"./":n,c.firstChild.disabled=n===l,n=Math.min(l+1,i),a.href=n===1?"./":n,a.firstChild.disabled=n===l,u=r("strong",d)){if(+u.textContent===l)return;r.replace(u,u.firstChild)}else u=r.el("strong");if(e=d.children[l-1])return r.before(e,u),r.add(u,e)},updateHideLabel:function(){var e,n,i,a,l;if(t.hideLabel){for(e=0,a=t.liveThreadIDs,n=0,i=a.length;n<i;n++)l=a[n],t.isHidden(l)&&e++;if(!e){t.hideLabel.hidden=!0,t.showHiddenThreads&&t.cb.toggleHiddenThreads();return}return t.hideLabel.hidden=!1,r("#hidden-count",t.navLinks).textContent=e===1?"1 hidden thread":e+" hidden threads"}},update:function(e){var n;if((n=t.req)&&(delete t.req,n.abort()),f["Index Refresh Notifications"]?(t.notice||(t.notice=new J("info","Refreshing index...")),t.nTimeout||(t.nTimeout=setTimeout(function(){var i;return(i=t.notice)!=null?i.el.lastElementChild.textContent+=" (disable JSON Index if this takes too long)":void 0},3*r.SECOND))):t.nTimeout||(t.nTimeout=setTimeout(function(){return t.notice||(t.notice=new J("info","Refreshing index... (disable JSON Index if this takes too long)"))},3*r.SECOND)),!e&&I.readyState!=="loading"&&!r(".board + *")){location.reload();return}return t.req=r.whenModified(p.SITE.urls.catalogJSON({boardID:p.BOARD.ID}),"Index",t.load),r.addClass(t.button,"fa-spin")},load:function(){var e,n,i,a,l;if(this===t.req){if(r.rmClass(t.button,"fa-spin"),i=t.notice,n=t.nTimeout,n&&clearTimeout(n),delete t.nTimeout,delete t.req,delete t.notice,(a=this.status)!==200&&a!==304){e="Index refresh failed. "+(this.status?"Error "+this.statusText+" ("+this.status+")":"Connection Error"),i?(i.setType("warning"),i.el.lastElementChild.textContent=e,setTimeout(i.close,r.SECOND)):new J("warning",e,1);return}try{this.status===200?t.parse(this.response):this.status===304&&t.pageLoad()}catch(d){e=d,ze.error("Index failure: "+e.message,e.stack),i?(i.setType("error"),i.el.lastElementChild.textContent="Index refresh failed.",setTimeout(i.close,r.SECOND)):new J("error","Index refresh failed.",1);return}return i&&(f["Index Refresh Notifications"]?(i.setType("success"),i.el.lastElementChild.textContent="Index refreshed!",setTimeout(i.close,r.SECOND)):i.close()),l=r("#index-last-refresh time",t.navLinks),l.dataset.utc=Date.parse(this.getResponseHeader("Last-Modified")),Ue.update(l)}},parse:function(e){return r.cleanCache(function(n){return/^https?:\/\/a\.4cdn\.org\//.test(n)}),t.parseThreadList(e),t.changed.threads=!0,t.pageLoad()},parseThreadList:function(e){var n,i,a,l,d,c,u,h,g,m,b,v,A;for(t.pagesNum=e.length,t.threadsNumPerPage=((g=e[0])!=null?g.threads.length:void 0)||1,t.liveThreadData=e.reduce(function(w,x){return w.concat(x.threads)},[]),t.liveThreadIDs=t.liveThreadData.map(function(w){return w.no}),t.liveThreadDict=r.dict(),t.threadPosition=r.dict(),t.parsedThreads=r.dict(),t.replyData=r.dict(),m=t.liveThreadData,a=l=0,c=m.length;l<c;a=++l)if(i=m[a],t.liveThreadDict[i.no]=i,t.threadPosition[i.no]=a,t.parsedThreads[i.no]=h=p.SITE.Build.parseJSON(i,p.BOARD),h.filterResults=A=ue.test(h),h.isOnTop=A.top,h.isHidden=A.hide||he.isHidden(h.boardID,h.threadID),i.last_replies)for(b=i.last_replies,d=0,u=b.length;d<u;d++)v=b[d],t.replyData[p.BOARD+"."+v.no]=v;t.liveThreadData[0]&&(p.SITE.Build.spoilerRange[p.BOARD.ID]=t.liveThreadData[0].custom_spoiler),p.BOARD.threads.forEach(function(w){var x;if(x=w.ID,o.call(t.liveThreadIDs,x)<0)return w.collect()}),r.event("IndexUpdate",{threads:function(){var w,x,k,C;for(k=t.liveThreadIDs,C=[],x=0,w=k.length;x<w;x++)n=k[x],C.push(p.BOARD+"."+n);return C}()})},isHidden:function(e){var n;return(n=p.BOARD.threads.get(e))&&n.OP&&!n.OP.isFetchedQuote?n.isHidden:t.parsedThreads[e].isHidden},isHiddenReply:function(e,n){return Me.isHidden(p.BOARD.ID,e,n.no)||ue.isHidden(p.SITE.Build.parseJSON(n,p.BOARD))},buildThreads:function(e,n,i){var a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D;for(D=[],v=[],b=[],h=0,m=e.length;h<m;h++){a=e[h];try{C=t.liveThreadDict[a],(k=p.BOARD.threads.get(a))?(u=k.json!==C&&JSON.stringify(k.json)!==JSON.stringify(C),u&&(k.setCount("post",C.replies+1,C.bumplimit),k.setCount("file",C.images+!!C.ext,C.imagelimit),k.setStatus("Sticky",!!C.sticky),k.setStatus("Closed",!!C.closed)),k.catalogView&&(r.rm(k.catalogView.nodes.replies),k.catalogView.nodes.replies=null)):(k=new Se(a,p.BOARD),v.push(k)),g=C.last_replies&&C.last_replies.length?C.last_replies[C.last_replies.length-1].no:a,g>k.lastPost&&(k.lastPost=g),k.json=C,D.push(k),(l=k.OP)&&!l.isFetchedQuote?(l.setCatalogOP(n),k.setPage(Math.floor(t.threadPosition[a]/t.threadsNumPerPage)+1)):(A=t.parsedThreads[a],w=p.SITE.Build.post(A),l=new ae(w,k,p.BOARD),l.filterResults=A.filterResults,b.push(l)),n&&k.nodes.root||p.SITE.Build.thread(k,C,i)}catch(S){d=S,c||(c=[]),c.push({message:"Parsing of Thread No."+k+" failed. Thread will be skipped.",error:d,html:w?.outerHTML})}}return c&&Z.handleErrors(c),i&&(b=b.concat(t.buildReplies(D))),Z.callbackNodes("Thread",v),Z.callbackNodes("Post",b),t.updateHideLabel(),r.event("IndexRefreshInternal",{threadIDs:function(){var S,R,B;for(B=[],S=0,R=D.length;S<R;S++)x=D[S],B.push(x.fullID);return B}(),isCatalog:n}),D},buildReplies:function(e){var n,i,a,l,d,c,u,h,g,m,b,v,A;for(v=[],l=0,u=e.length;l<u;l++)if(A=e[l],!!(c=t.liveThreadDict[A.ID].last_replies)){for(m=[],d=0,h=c.length;d<h;d++){if(n=c[d],(b=A.posts.get(n.no))&&!b.isFetchedQuote){m.push(b.nodes.root);continue}m.push(g=p.SITE.Build.postFromObject(n,A.board.ID));try{v.push(new ae(g,A,A.board))}catch(w){i=w,a||(a=[]),a.push({message:"Parsing of Post No."+n.no+" failed. Post will be skipped.",error:i,html:g?.outerHTML})}}r.add(A.nodes.root,m)}return a&&Z.handleErrors(a),v},buildCatalogViews:function(e){var n,i,a,l,d,c,u;for(i=[],a=0,l=e.length;a<l;a++)u=e[a],!u.catalogView&&(n=u.ID,d=Math.floor(t.threadPosition[n]/t.threadsNumPerPage)+1,c=p.SITE.Build.catalogThread(u,t.liveThreadDict[n],d),i.push(new ft(c,u)));Z.callbackNodes("CatalogThread",i)},sizeCatalogViews:function(e){var n,i,a,l,d,c,u,h,g;for(c=f["Index Size"]==="small"?150:250,i=0,a=e.length;i<a;i++)u=e[i],h=u.catalogView.nodes.thumb,d=h.dataset,g=d.width,n=d.height,g&&(l=c/Math.max(g,n),h.style.width=g*l+"px",h.style.height=n*l+"px")},buildCatalogReplies:function(e){var n,i,a,l,d,c,u;if(d=e.catalogView.nodes,!!(a=t.liveThreadDict[e.ID].last_replies)){for(c=[],i=0,l=a.length;i<l;i++)n=a[i],!t.isHiddenReply(e.ID,n)&&(u=p.SITE.Build.catalogReply(e,n),Ue.update(r("time",u)),r.on(r(".catalog-reply-preview",u),"mouseover",_e.mouseover),c.push(u));d.replies=r.el("div",{className:"catalog-replies"}),r.add(d.replies,c),r.add(e.OP.nodes.post,d.replies)}},sort:function(){var e,n,i,a,l,d,c,u,h;if(a=t.liveThreadIDs,i=t.liveThreadData,!!i&&(h=new Date().getTime()/1e3,d=t.currentSort.replace(/-rev$/,""),t.sortedThreadIDs=function(){var g,m;switch(d){case"lastreply":case"lastlong":for(l=i.some(function(b){var v;return(v=b.last_replies)!=null?v.length:void 0}),e=function(b){var v,A,w,x,k,C;if(!l)return b.last_modified;for(k=b.last_replies||[],v=A=k.length-1;A>=0;v=A+=-1)if(x=k[v],!t.isHiddenReply(b.no,x)&&(d==="lastreply"||(w=x.com?p.SITE.Build.parseComment(x.com).replace(/[^a-z]/ig,"").length:0,w>=t.lastLongThresholds[+!!x.ext])))return x;return b.omitted_posts&&((C=b.last_replies)!=null&&C.length)?b.last_replies[0]:b},n=r.dict(),g=0,m=i.length;g<m;g++)c=i[g],n[c.no]=e(c).no;return s.call(i).sort(function(b,v){return n[v.no]-n[b.no]}).map(function(b){return b.no});case"bump":return a;case"birth":return s.call(a).sort(function(b,v){return v-b});case"replycount":return s.call(i).sort(function(b,v){return v.replies-b.replies}).map(function(b){return b.no});case"filecount":return s.call(i).sort(function(b,v){return v.images-b.images}).map(function(b){return b.no});case"activity":return s.call(i).sort(function(b,v){return(h-b.time)/(b.replies+1)-(h-v.time)/(v.replies+1)}).map(function(b){return b.no});default:return a}}(),/-rev$/.test(t.currentSort)&&(t.sortedThreadIDs=s.call(t.sortedThreadIDs).reverse()),t.search&&(u=t.querySearch(t.search))&&(t.sortedThreadIDs=u),t.sortOnTop(function(g){return g.isSticky}),t.sortOnTop(function(g){return g.isOnTop||f["Pin Watched Threads"]&&pe.isWatchedRaw(g.boardID,g.threadID)}),f["Anchor Hidden Threads"]))return t.sortOnTop(function(g){return!t.isHidden(g.threadID)})},sortOnTop:function(e){var n,i,a,l,d,c;for(c=[],i=[],d=t.sortedThreadIDs,a=0,l=d.length;a<l;a++)n=d[a],(e(t.parsedThreads[n])?c:i).push(n);return t.sortedThreadIDs=c.concat(i)},buildIndex:function(){var e;if(t.liveThreadData){switch(f["Index Mode"]){case"all pages":e=t.sortedThreadIDs;break;case"catalog":e=t.sortedThreadIDs.filter(function(n){return!t.isHidden(n)!==t.showHiddenThreads});break;default:e=t.threadsOnPage(t.currentPage)}delete t.pageNum,r.rmAll(t.root),r.rmAll(L.hover),t.loaded&&t.root.parentNode&&r.event("PostsRemoved",null,t.root),f["Index Mode"]==="catalog"?t.buildCatalog(e):t.buildStructure(e)}},threadsOnPage:function(e){var n,i;return n=t.threadsNumPerPage,i=n*(e-1),t.sortedThreadIDs.slice(i,i+n)},buildStructure:function(e){var n,i,a,l,d;for(d=t.buildThreads(e,!1,f["Show Replies"]),a=[],n=0,i=d.length;n<i;n++)l=d[n],a.push(l.nodes.root,r.el("hr"));r.add(t.root,a),t.root.parentNode&&r.event("PostsInserted",null,t.root),t.loaded=!0},buildCatalog:function(e){var n,i,a,l;i=0,a=e.length,l=null,n=function(){var d;if(!(l&&!l.parentNode))return d=i>0&&t.root.parentNode?a:i+30,l=t.buildCatalogPart(e.slice(i,d))[0],i=d,i<a?r.queueTask(n):(t.root.parentNode&&r.event("PostsInserted",null,t.root),t.loaded=!0)},n()},buildCatalogPart:function(e){var n,i,a,l,d;for(d=t.buildThreads(e,!0),t.buildCatalogViews(d),t.sizeCatalogViews(d),a=[],n=0,i=d.length;n<i;n++)l=d[n],l.OP.setCatalogOP(!0),r.add(l.catalogView.nodes.root,l.OP.nodes.root),a.push(l.catalogView.nodes.root),r.on(l.catalogView.nodes.root,"mouseenter",t.cb.catalogReplies.bind(l)),r.on(l.OP.nodes.root,"mouseenter",t.cb.hoverAdjust.bind(l.OP.nodes));return r.add(t.root,a),a},clearSearch:function(){return t.searchInput.value="",t.onSearchInput(),t.searchInput.focus()},setupSearch:function(){return t.searchInput.value=t.search,t.search?t.searchInput.dataset.searching=1:t.searchInput.removeAttribute("data-searching")},onSearchInput:function(){var e;if(e=t.searchInput.value.trim(),e!==t.search)return t.pushState({search:e,replace:!!e==!!t.search}),t.pageLoad(!1)},querySearch:function(e){var n,i,a;if(i=e.match(/^([\w+]+):\/(.*)\/(\w*)$/)){try{a=RegExp(i[2],i[3])}catch{return[]}return t.sortedThreadIDs.filter(function(l){return a.test(ue.values(i[1],t.parsedThreads[l]).join(`
`))})}if(n=e.toLowerCase().match(/\S+/g))return t.sortedThreadIDs.filter(function(l){return t.searchMatch(t.parsedThreads[l],n)})},searchMatch:function(e,n){var i,a,l,d,c,u,h,g,m,b;for(a=e.info,i=e.file,a.comment==null&&(a.comment=p.SITE.Build.parseComment(a.commentHTML.innerHTML)),b=[],m=["comment","subject","name","tripcode"],l=0,h=m.length;l<h;l++)d=m[l],d in a&&b.push(a[d]);for(i&&b.push(i.name),b=b.join(" ").toLowerCase(),u=0,g=n.length;u<g;u++)if(c=n[u],b.indexOf(c)===-1)return!1;return!0}},t}.call(this),Mt=function(){var t;return t={init:function(){var s;this.toBlob(),r.global(this.toBlob),(s=Element.prototype).matches||(s.matches=Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector)},toBlob:function(){HTMLCanvasElement.prototype.toBlob||(HTMLCanvasElement.prototype.toBlob=function(s,o,e){var n,i,a,l,d,c,u;for(u=this.toDataURL(o,e),n=atob(u.slice(u.indexOf(",")+1)),l=n.length,c=new Uint8Array(l),i=a=0,d=l;a<d;i=a+=1)c[i]=n.charCodeAt(i);return s(new Blob([c],{type:o||"image/png"}))})}},t}.call(this),we=function(){var t,s=[].slice,o=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1};return t={init:function(){var e,n;if(n=r.el("a",{className:"settings-link fa fa-wrench",textContent:"Settings",title:"4chan X Settings",href:"javascript:;"}),r.on(n,"click",t.open),L.addShortcut("settings",n,820),e=this.addSection,e("Main",this.main),e("Filter",this.filter),e("Sauce",this.sauce),e("Advanced",this.advanced),e("Keybinds",this.keybinds),r.on(I,"AddSettingsSection",t.addSection),r.on(I,"OpenSettings",function(i){return t.open(i.detail)}),p.SITE.software==="yotsuba"&&f["Disable Native Extension"])return r.hasStorage?r.global(function(){var i;try{return i=JSON.parse(localStorage.getItem("4chan-settings"))||{},i.disableAll?void 0:(i.disableAll=!0,localStorage.setItem("4chan-settings",JSON.stringify(i)))}catch{return Object.defineProperty(window,"Config",{value:{disableAll:!0}})}}):r.global(function(){return Object.defineProperty(window,"Config",{value:{disableAll:!0}})})},open:function(e){var n,i,a,l,d,c,u,h;if(!t.dialog){for(r.event("CloseMenu"),t.dialog=n=r.el("div",{id:"overlay"},{innerHTML:'<div id="fourchanx-settings" class="dialog"><nav><div class="sections-list"></div><p class="imp-exp-result warning"></p><div class="credits"><a class="export">Export</a>&nbsp|&nbsp<a class="import">Import</a>&nbsp|&nbsp<a class="reset">Reset Settings</a>&nbsp|&nbsp<input type="file" hidden><a href="https://www.4chan-x.net/" target="_blank">4chan X</a>&nbsp|&nbsp<a href="https://github.com/ccd0/4chan-x/blob/master/CHANGELOG.md" target="_blank">'+T(p.VERSION)+'</a>&nbsp|&nbsp<a href="https://github.com/ccd0/4chan-x/issues" target="_blank">Issues</a>&nbsp|&nbsp<a href="javascript:;" class="close fa fa-times" title="Close"></a></div></nav><div class="section-container"><section></section></div></div>'}),r.on(r(".export",n),"click",t.export),r.on(r(".import",n),"click",t.import),r.on(r(".reset",n),"click",t.reset),r.on(r("input",n),"change",t.onImport),d=[],c=t.sections,i=0,a=c.length;i<a;i++)u=c[i],l=r.el("a",{className:"tab-"+u.hyphenatedTitle,textContent:u.title,href:"javascript:;"}),r.on(l,"click",t.openSection.bind(u)),d.push(l,r.tn(" | ")),u.title===e&&(h=l);return d.pop(),r.add(r(".sections-list",n),d),e!=="none"&&(h||d[0]).click(),r.on(r(".close",n),"click",t.close),r.on(window,"beforeunload",t.close),r.on(n,"click",t.close),r.on(n.firstElementChild,"click",function(g){return g.stopPropagation()}),r.add(I.body,n),r.event("OpenSettings",null,n)}},close:function(){var e;if(t.dialog)return(e=I.activeElement)!=null&&e.blur(),r.rm(t.dialog),delete t.dialog},sections:[],addSection:function(e,n){var i,a;return typeof e!="string"&&(a=e.detail,e=a.title,n=a.open),i=e.toLowerCase().replace(/\s+/g,"-"),t.sections.push({title:e,hyphenatedTitle:i,open:n})},openSection:function(){var e,n;return(n=r(".tab-selected",t.dialog))&&r.rmClass(n,"tab-selected"),r.addClass(r(".tab-"+this.hyphenatedTitle,t.dialog),"tab-selected"),e=r("section",t.dialog),r.rmAll(e),e.className="section-"+this.hyphenatedTitle,this.open(e,p),e.scrollTop=0,r.event("OpenSettings",null,e)},warnings:{localStorage:function(e){var n;if(r.cantSync)return n=r.cantSet?"save your settings":"synchronize settings between tabs",e(r.el("li",{textContent:"4chan X needs local storage to "+n+`.
Enable it on boards.`+location.hostname.split(".")[1]+`.org in your browser's privacy settings (may be listed as part of "local data" or "cookies").`}))},ads:function(e){return r.onExists(E,".adg-rects > .desktop",function(n){return r.onExists(n,"iframe",function(){var i;return i=ne.to("thread",{boardID:"qa",threadID:362590}),e(r.el("li",{innerHTML:'To protect yourself from <a href="'+T(i)+'" target="_blank">malicious ads</a>, you should <a href="https://github.com/gorhill/uBlock#ublock-origin" target="_blank">block ads</a> on 4chan.'}))})})}},main:function(e){var n,i,a,l,d,c,u,h,g,m,b,v,A,w;w=r.el("fieldset",{hidden:!0},{innerHTML:"<legend>Warnings</legend><ul></ul>"}),i=function(x){return r.add(r("ul",w),x),w.hidden=!1},b=t.warnings;for(h in b)A=b[h],A(i);r.add(e,w),u=r.dict(),c=r.dict(),n=function(x,k){var C,D,S,R,B,M,P,q;S=[x],q=[];for(h in k)C=k[h],C instanceof Array&&(R=C[1],B=r.el("div",{innerHTML:'<label><input type="checkbox" name="'+T(h)+'">'+T(h)+'</label><span class="description">: '+T(R)+"</span>"}),B.dataset.name=h,M=r("input",B),r.on(M,"change",r.cb.checked),r.on(M,"change",function(){return this.parentNode.parentNode.dataset.checked=this.checked}),u[h]=f[h],c[h]=M,P=C[2]||0,S.length<=P?(D=r.el("div",{className:"suboption-list"}),r.add(S[S.length-1].lastElementChild,D),S[P]=D):S.length>P+1&&S.splice(P+1,S.length-(P+1)),q.push(r.add(S[P],B)));return q},v=de.main;for(g in v)m=v[g],d=r.el("fieldset",{innerHTML:"<legend>"+T(g)+"</legend>"}),n(d,m),g==="Posting and Captchas"&&r.add(d,r.el("p",{innerHTML:'For more info on captcha options and issues, see the <a href="https://github.com/ccd0/4chan-x/wiki/Captcha-FAQ" target="_blank">captcha FAQ</a>.'})),r.add(e,d);return n(r('div[data-name="JSON Index"] > .suboption-list',e),de.Index),r.engine!=="gecko"&&(r('div[data-name="Remember QR Size"]',e).hidden=!0),(r.perProtocolSettings||location.protocol!=="https:")&&(r('div[data-name="Redirect to HTTPS"]',e).hidden=!0),r.platform!=="crx"&&(r('div[data-name="Work around CORB Bug"]',e).hidden=!0),r.get(u,function(x){var k;for(h in x)k=x[h],c[h].checked=k,c[h].parentNode.parentNode.dataset.checked=k}),l=r.el("div",{innerHTML:'<button></button><span class="description">: Clear manually-hidden threads and posts on all boards. Reload the page to apply.'}),a=r("button",l),r.get({hiddenThreads:r.dict(),hiddenPosts:r.dict()},function(x){var k,C,D,S,R,B,M,P,q,O,j;R=x.hiddenThreads,S=x.hiddenPosts,D=0;for(k in R)if(O=R[k],k!=="boards"){B=O.boards;for(k in B)C=B[k],D+=Object.keys(C).length}M=R.boards;for(k in M)C=M[k],D+=Object.keys(C).length;for(k in S)if(O=S[k],k!=="boards"){P=O.boards;for(k in P){C=P[k];for(k in C)j=C[k],D+=Object.keys(j).length}}q=S.boards;for(k in q){C=q[k];for(k in C)j=C[k],D+=Object.keys(j).length}return a.textContent="Hidden: "+D}),r.on(a,"click",function(){return this.textContent="Hidden: 0",r.get("hiddenThreads",r.dict(),function(x){var k,C,D;if(C=x.hiddenThreads,r.hasStorage&&p.SITE.software==="yotsuba"){for(k in(D=C["4chan.org"])!=null?D.boards:void 0)localStorage.removeItem("4chan-hide-t-"+k);for(k in C.boards)localStorage.removeItem("4chan-hide-t-"+k)}return r.delete(["hiddenThreads","hiddenPosts"])})}),r.after(r('input[name="Stubs"]',e).parentNode.parentNode,l)},export:function(){var e;return e=r.dict(),r.extend(e,f),r.get(e,function(n){return delete n.boardConfig,t.downloadExport({version:p.VERSION,date:Date.now(),Conf:n})})},downloadExport:function(e){var n,i,a,l;return i=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),l=URL.createObjectURL(i),n=r.el("a",{download:"4chan X v"+p.VERSION+"-"+e.date+".json",href:l}),a=r(".imp-exp-result",t.dialog),r.rmAll(a),r.add(a,n),n.click()},import:function(){return r("input[type=file]",this.parentNode).click()},onImport:function(){var e,n,i;if(e=this.files[0]){if(this.value=null,n=r(".imp-exp-result"),!confirm("Your current settings will be entirely overwritten, are you sure?")){n.textContent="Import aborted.";return}return i=new FileReader,i.onload=function(a){var l;try{return t.loadSettings(r.dict.json(a.target.result),function(d){if(d)return n.textContent="Import failed due to an error.";if(confirm("Import successful. Reload now?"))return window.location.reload()})}catch(d){return l=d,n.textContent="Import failed due to an error.",ze.error(l.stack)}},i.readAsText(e)}},convertFrom:{loadletter:function(e){var n,i,a,l,d,c,u,h,g,m;a=function(b,v){var A,w;for(w in v)A=v[w],A&&(b.Conf[A]=b.Conf[w]),delete b.Conf[w];return b},e=a(e,{"Disable 4chan's extension":"Disable Native Extension","Comment Auto-Expansion":"","Remove Slug":"","Always HTTPS":"Redirect to HTTPS","Check for Updates":"","Recursive Filtering":"Recursive Hiding","Reply Hiding":"Reply Hiding Buttons","Thread Hiding":"Thread Hiding Buttons","Show Stubs":"Stubs","Image Auto-Gif":"Replace GIF","Expand All WebM":"Expand videos","Reveal Spoilers":"Reveal Spoiler Thumbnails","Expand From Current":"Expand from here","Current Page":"Page Count in Stats","Current Page Position":"","Alternative captcha":"Use Recaptcha v1","Alt index captcha":"Use Recaptcha v1 on Index","Auto Submit":"Post on Captcha Completion","Open Reply in New Tab":"Open Post in New Tab","Remember QR size":"Remember QR Size","Remember Subject":"","Quote Inline":"Quote Inlining","Quote Preview":"Quote Previewing","Indicate OP quote":"Mark OP Quotes","Indicate You quote":"Mark Quotes of You","Indicate Cross-thread Quotes":"Mark Cross-thread Quotes",uniqueid:"uniqueID",mod:"capcode",email:"",country:"flag",md5:"MD5",openEmptyQR:"Open empty QR",openQR:"Open QR",openOptions:"Open settings",close:"Close",spoiler:"Spoiler tags",sageru:"Toggle sage",code:"Code tags",sjis:"SJIS tags",submit:"Submit QR",watch:"Watch",update:"Update",unreadCountTo0:"",expandAllImages:"Expand images",expandImage:"Expand image",zero:"Front page",nextPage:"Next page",previousPage:"Previous page",nextThread:"Next thread",previousThread:"Previous thread",expandThread:"Expand thread",openThreadTab:"Open thread",openThread:"Open thread tab",nextReply:"Next reply",previousReply:"Previous reply",hide:"Hide",Scrolling:"Auto Scroll",Verbose:""}),"Always CDN"in e.Conf&&(e.Conf.fourchanImageHost=e.Conf["Always CDN"]?"i.4cdn.org":"",delete e.Conf["Always CDN"]),e.Conf.sauces=e.Conf.sauces.replace(/\$\d/g,function(b){switch(b){case"$1":return"%TURL";case"$2":return"%URL";case"$3":return"%MD5";case"$4":return"%board";default:return b}}),d=de.hotkeys;for(l in d)m=d[l],l in e.Conf&&(e.Conf[l]=e.Conf[l].replace(/ctrl|alt|meta/g,function(b){return""+b[0].toUpperCase()+b.slice(1)}).replace(/(^|.+\+)[A-Z]$/g,function(b){return"Shift+"+b.slice(0,-1)+b.slice(-1).toLowerCase()}));if(e.WatchedThreads){e.Conf.watchedThreads=r.dict.clone({"4chan.org":{boards:{}}}),c=e.WatchedThreads;for(i in c){g=c[i];for(h in g)u=g[h],((n=e.Conf.watchedThreads["4chan.org"].boards)[i]||(n[i]=r.dict()))[h]={excerpt:u.textContent}}}return e}},upgrade:function(e,n){var i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W,z,V,K,G,ee,ge,ve,Ne,xe,Q,Ce,Le,Ge,at,st,Ye,Kt,Xt;if(c=r.dict(),Q=function(ce,Je){return e[ce]=c[ce]=Je},Ce=function(ce,Je){if(e[ce]==null)return Q(ce,Je)},a=function(ce){if(e.sauces!=null&&(ce=ce.filter(function(Je){return e.sauces.indexOf(Je.match(/[^#;\s]+|$/)[0])<0}),ce.length))return Q("sauces",e.sauces+`

`+ce.join(`
`))},i=function(ce){if(e.usercss==null&&Q("usercss",de.usercss),e.usercss.indexOf(ce)<0)return Q("usercss",ce+`

`+e.usercss)},h=n[0]==='"')try{n=JSON.parse(n)}catch{}if(u=n.replace(/\d+/g,function(ce){return("0000"+ce).slice(-5)}),u<"00001.00013.00014.00008"){for(A in e)if(Ye=e[A],typeof Ye=="string"&&typeof f[A]!="string"&&A!=="Index Sort"&&A!=="Last Long Reply Thresholds 0"&&A!=="Last Long Reply Thresholds 1"){h=!0;break}}if(h){for(A in e)if(Ye=e[A],typeof Ye=="string")try{Kt=JSON.parse(Ye),Q(A,Kt)}catch{}}if(u<"00001.00011.00008.00000"&&(e["Fixed Thread Watcher"]==null&&Q("Fixed Thread Watcher",(O=e["Toggleable Thread Watcher"])!=null?O:!0),e["Exempt Archives from Encryption"]==null&&Q("Exempt Archives from Encryption",(j=e["Except Archives from Encryption"])!=null?j:!1)),u<"00001.00011.00010.00001"&&e.selectedArchives!=null){st={Moe:0,"4plebs Archive":3,"Nyafuu Archive":4,"Love is Over":5,"Rebecca Black Tech":8,warosu:10,fgts:15,not4plebs:22,DesuStorage:23,"fireden.net":24,disabled:null},z=e.selectedArchives;for(l in z){q=z[l];for(at in q)P=q[at],r.hasOwn(st,P)&&(q[at]=st[P])}Q("selectedArchives",e.selectedArchives)}if(u<"00001.00011.00016.00000"&&(xe=de.usercss.match(/\/\* Board title rice \*\/(?:\n.+)*/)[0])&&e.usercss!=null&&e.usercss.indexOf(xe)<0&&Q("usercss",xe+`

`+e.usercss),u<"00001.00011.00017.00000")for(V=["Persistent QR","Color User IDs","Fappe Tyme","Werk Tyme","Highlight Posts Quoting You","Highlight Own Posts"],b=0,k=V.length;b<k;b++)A=V[b],e[A]==null&&Q(A,A==="Persistent QR");if(u<"00001.00011.00017.00006"&&e.sauces!=null&&Q("sauces",e.sauces.replace(/^(#?\s*)http:\/\/iqdb\.org\//mg,"$1//iqdb.org/")),u<"00001.00011.00019.00003"&&!t.dialog&&r.queueTask(function(){return t.warnings.ads(function(ce){return new J("warning",s.call(ce.childNodes))})}),u<"00001.00011.00020.00003"){K={"Inline Cross-thread Quotes Only":!1,"Pass Link":!0};for(A in K)Xt=K[A],e[A]==null&&Q(A,Xt)}if(u<"00001.00011.00021.00003"&&e["Remember Your Posts"]==null&&Q("Remember Your Posts",(G=e["Mark Quotes of You"])!=null?G:!0),u<"00001.00011.00022.00000"&&e.sauces!=null&&(Q("sauces",e.sauces.replace(/^(#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(?:IMG|URL))%3Fs\.jpg/mg,"$1")),Q("sauces",e.sauces.replace(/^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(?:IMG|T?URL)(?=$|;)/mg,"$&&safe=off"))),u<"00001.00011.00022.00002"&&e["Use Recaptcha v1 in Reports"]==null&&e["Use Recaptcha v1"]&&!e["Use Recaptcha v2 in Reports"]&&Q("Use Recaptcha v1 in Reports",!0),u<"00001.00011.00024.00000"&&e["JSON Navigation"]!=null&&e["JSON Index"]==null&&Q("JSON Index",e["JSON Navigation"]),u<"00001.00011.00026.00000"&&(e["Oekaki Links"]!=null&&e["Edit Link"]==null&&Q("Edit Link",e["Oekaki Links"]),e["Inline Cross-thread Quotes Only"]==null&&Q("Inline Cross-thread Quotes Only",!0)),u<"00001.00011.00030.00000"&&e["Quote Threading"]&&e["Thread Quotes"]==null&&Q("Thread Quotes",!0),u<"00001.00011.00032.00000"&&(e.sauces!=null&&Q("sauces",e.sauces.replace(/^(#?\s*)http:\/\/3d\.iqdb\.org\//mg,"$1//3d.iqdb.org/")),a(["#https://desustorage.org/_/search/image/%sMD5/","#https://boards.fireden.net/_/search/image/%sMD5/","#https://foolz.fireden.net/_/search/image/%sMD5/","#//www.gif-explode.com/%URL;types:gif"])),u<"00001.00011.00035.00000"&&a(["https://whatanime.ga/?auto&url=%IMG;text:wait"]),u<"00001.00012.00000.00000"&&(e["Exempt Archives from Encryption"]==null&&Q("Exempt Archives from Encryption",!1),e["Show New Thread Option in Threads"]==null&&Q("Show New Thread Option in Threads",!1),e["Show Name and Subject"]&&i("#qr .persona .field {display: block !important;}"),e["QR Shortcut"]===!1&&i("#shortcut-qr {display: none;}"),e["Bottom QR Link"]===!1&&i(".qr-link-container-bottom {display: none;}")),u<"00001.00012.00000.00006"&&e.sauces!=null&&Q("sauces",e.sauces.replace(/^(#?\s*)https:\/\/(?:desustorage|cuckchan)\.org\//mg,"$1https://desuarchive.org/")),u<"00001.00012.00001.00000"&&e["Persistent Thread Watcher"]==null&&e["Toggleable Thread Watcher"]!=null&&Q("Persistent Thread Watcher",!e["Toggleable Thread Watcher"]),u<"00001.00012.00003.00000")for(ee=["Image Hover in Catalog","Auto Watch","Auto Watch Reply"],v=0,C=ee.length;v<C;v++)A=ee[v],Ce(A,!1);if(u<"00001.00013.00001.00002"&&a(["#//www.bing.com/images/search?q=imgurl:%IMG&view=detailv2&iss=sbi#enterInsights"]),u<"00001.00013.00005.00000"&&(e.sauces!=null&&Q("sauces",e.sauces.replace(/^(#?\s*)http:\/\/regex\.info\/exif\.cgi/mg,"$1http://exif.regex.info/exif.cgi")),a(de.sauces.match(/# Known filename formats:(?:\n.+)*|$/)[0].split(`
`))),u<"00001.00013.00007.00002"&&Ce("Require OP Quote Link",!0),u<"00001.00013.00008.00000"&&Ce("Download Link",!0),u<"00001.00013.00009.00003"&&e.jsWhitelist!=null&&(B=e.jsWhitelist.split(`
`),o.call(B,"https://cdnjs.cloudflare.com")<0&&o.call(B,"https://cdn.mathjax.org")>=0&&Q("jsWhitelist",e.jsWhitelist+`

https://cdnjs.cloudflare.com`)),u<"00001.00014.00000.00006"&&e.siteSoftware!=null&&Q("siteSoftware",e.siteSoftware+`
4cdn.org yotsuba`),u<"00001.00014.00003.00002"&&e.sauces!=null&&Q("sauces",e.sauces.replace(/^(#?\s*)https:\/\/whatanime\.ga\//mg,"$1https://trace.moe/")),u<"00001.00014.00004.00004"&&e.siteSoftware!=null&&!/^4channel\.org yotsuba$/m.test(e.siteSoftware)&&Q("siteSoftware",e.siteSoftware+`
4channel.org yotsuba`),u<"00001.00014.00005.00000"){for(ge=fe.keys,w=0,D=ge.length;w<D;w++)g=ge[w],(ve=e[g])!=null&&ve.boards&&(Ne=e[g],d=Ne.boards,x=Ne.lastChecked,e[g]["4chan.org"]={boards:d,lastChecked:x},delete e[g].boards,delete e[g].lastChecked,Q(g,e[g]));if(e.siteSoftware!=null&&e.siteProperties==null){for(Le=r.dict(),U=e.siteSoftware.split(`
`),M=0,S=U.length;M<S;M++)R=U[M],W=R.split(" "),m=W[0],Ge=W[1],Le[m]={software:Ge};Q("siteProperties",Le)}}return u<"00001.00014.00006.00006"&&e.sauces!=null&&Q("sauces",e.sauces.replace(/\/\/%\$1\.deviantart\.com\/gallery\/#\/d%\$2;regexp:\/\^\\w\+_by_\(\\w\+\)-d\(\[\\da-z\]\+\)\//g,"//www.deviantart.com/gallery/#/d%$1%$2;regexp:/^\\w+_by_\\w+[_-]d([\\da-z]{6})\\b|^d([\\da-z]{6})-[\\da-z]{8}-/")),u<"00001.00014.00008.00000"&&e.sauces!=null&&Q("sauces",e.sauces.replace(/https:\/\/www\.yandex\.com\/images\/search/g,"https://yandex.com/images/search")),u<"00001.00014.00009.00000"&&e.sauces!=null&&(Q("sauces",e.sauces.replace(/^(#?\s*)(?:http:)?\/\/(www\.pixiv\.net|www\.deviantart\.com|imgur\.com|flickr\.com)\//mg,"$1https://$2/")),Q("sauces",e.sauces.replace(/https:\/\/yandex\.com\/images\/search\?rpt=imageview&img_url=%IMG/g,"https://yandex.com/images/search?rpt=imageview&url=%IMG"))),u<"00001.00014.00009.00001"&&e["Use Faster Image Host"]!=null&&e.fourchanImageHost==null&&Q("fourchanImageHost",e["Use Faster Image Host"]?"i.4cdn.org":""),u<"00001.00014.00010.00001"&&e["Filter in Native Catalog"]==null&&Q("Filter in Native Catalog",!1),u<"00001.00014.00012.00008"&&e.boardnav==null&&Q("boardnav",`[ toggle-all ]
a-replace
c-replace
g-replace
k-replace
v-replace
vg-replace
vr-replace
ck-replace
co-replace
fit-replace
jp-replace
mu-replace
sp-replace
tv-replace
vp-replace
[external-text:"FAQ","https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions"]`),u<"00001.00014.00016.00001"&&e.archiveLists!=null&&Q("archiveLists",e.archiveLists.replace("https://mayhemydg.github.io/archives.json/archives.json","https://nstepien.github.io/archives.json/archives.json")),u<"00001.00014.00016.00007"&&e.sauces!=null&&Q("sauces",e.sauces.replace(/https:\/\/www\.deviantart\.com\/gallery\/#\/d%\$1%\$2;regexp:\/\^\\w\+_by_\\w\+\[_-\]d\(\[\\da-z\]\{6\}\)\\b\|\^d\(\[\\da-z\]\{6\}\)-\[\\da-z\]\{8\}-\//g,'javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/').replace(/\/\/imgops\.com\/%URL/g,"//imgops.com/start?url=%URL")),u<"00001.00014.00017.00002"&&e.jsWhitelist!=null&&Q("jsWhitelist",e.jsWhitelist+`

https://hcaptcha.com
https://*.hcaptcha.com`),u<"00001.00014.00020.00004"&&e.archiveLists!=null&&Q("archiveLists",e.archiveLists.replace("https://nstepien.github.io/archives.json/archives.json","https://4chenz.github.io/archives.json/archives.json")),u<"00001.00014.00022.00003"&&(e.sauces!=null&&(Q("sauces",e.sauces.replace(/^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(IMG|T?URL)&safe=off(?=$|;)/mg,"https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off")),u==="00001.00014.00022.00002"&&!/\bsbisrc=/.test(e.sauces)&&Q("sauces",e.sauces.replace(/^#?\s*https:\/\/lens\.google\.com\/uploadbyurl\?url=%(IMG|T?URL)(?=$|;)/m,"https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off"))),a(["#https://lens.google.com/uploadbyurl?url=%IMG;text:lens"])),c},loadSettings:function(e,n){return e.version.split(".")[0]==="2"?e=t.convertFrom.loadletter(e):e.version!==p.VERSION&&t.upgrade(e.Conf,e.version),r.clear(function(i){return i?n(i):r.set(e.Conf,n)})},reset:function(){if(confirm("Your current settings will be entirely wiped, are you sure?"))return r.clear(function(e){if(e)return r(".imp-exp-result").textContent="Import failed due to an error.";if(confirm("Reset successful. Reload now?"))return window.location.reload()})},filter:function(e){var n;return r.extend(e,{innerHTML:'<select name="filter"><option value="guide">Guide</option><option value="general">General</option><option value="postID">Post number</option><option value="name">Name</option><option value="uniqueID">Unique ID</option><option value="tripcode">Tripcode</option><option value="capcode">Capcode</option><option value="pass">Pass Date</option><option value="email">Email</option><option value="subject">Subject</option><option value="comment">Comment</option><option value="flag">Flag</option><option value="filename">Filename</option><option value="dimensions">Image dimensions</option><option value="filesize">Filesize</option><option value="MD5">Image MD5</option></select><div></div>'}),n=r("select",e),r.on(n,"change",t.selectFilter),t.selectFilter.call(n)},selectFilter:function(){var e,n,i,a;if(e=this.nextElementSibling,(i=this.value)!=="guide"){if(!r.hasOwn(de.filter,i))return;r.rmAll(e),a=r.el("textarea",{name:i,className:"field",spellcheck:!1}),r.on(a,"change",r.cb.value),r.get(i,f[i],function(l){return a.value=l[i],r.add(e,a)});return}return n=Object.keys(de.filter).filter(function(l){return l!=="general"}).map(function(l,d){return{innerHTML:(d?",":"")+"<wbr>"+T(l)}}),r.extend(e,{innerHTML:'<div class="warning"><code>Filter</code> is disabled.</div><p>Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">regular expressions</a>, one per line.<br>Lines starting with a <code>#</code> will be ignored.<br>For example, <code>/weeaboo/i</code> will filter posts containing the string `<code>weeaboo</code>`, case-insensitive.<br>MD5 and Unique ID filtering use exact string matching, not regular expressions.</p><ul>You can use these settings with each regular expression, separate them with semicolons:<li>Per boards, separate them with commas. It is global if not specified. Use <code>sfw</code> and <code>nsfw</code> to reference all worksafe or not-worksafe boards.<br>For example: <code>boards:a,jp;</code>.<br>To specify boards on a particular site, put the beginning of the domain and a slash character before the list.<br>Any initial <code>www.</code> should not be included, and all 4chan domains are considered <code>4chan.org</code>.<br>For example: <code>boards:4:a,jp,sama:a,z;</code>.<br>An asterisk can be used to specify all boards on a site.<br>For example: <code>boards:4:*;</code>.<br></li><li>Select boards to be excluded from the filter. The syntax is the same as for the <code>boards:</code> option above.<br>For example: <code>exclude:vg,v;</code>.</li><li>Filter OPs only along with their threads (`only`) or replies only (`no`).<br>For example: <code>op:only;</code> or <code>op:no;</code>.</li><li>Filter only posts with files (`only`) or only posts without files (`no`).<br>For example: <code>file:only;</code> or <code>file:no;</code>.</li><li>Overrule the `Show Stubs` setting if specified: create a stub (`yes`) or not (`no`).<br>For example: <code>stub:yes;</code> or <code>stub:no;</code>.</li><li>Highlight instead of hiding. You can specify a class name to use with a userstyle.<br>For example: <code>highlight;</code> or <code>highlight:wallpaper;</code>.</li><li>Highlighted OPs will have their threads put on top of the board index by default.<br>For example: <code>top:yes;</code> or <code>top:no;</code>.</li><li>Show a desktop notification instead of hiding.<br>For example: <code>notify;</code>.</li><li>Filters in the "General" section apply to multiple fields, by default <code>subject,name,filename,comment</code>.<br>The fields can be specified with the <code>type</code> option, separated by commas.<br>For example: <code>type:'+T.cat(n)+";</code>.<br>Types can also be combined with a <code>+</code> sign; this indicates the filter applies to the given fields joined by newlines.<br>For example: <code>type:filename+filesize+dimensions;</code>.<br></li></ul>"}),r(".warning",e).hidden=f.Filter},sauce:function(e){var n;return r.extend(e,{innerHTML:'<div class="warning"><code>Sauce</code> is disabled.</div><input id="sauce-doc-expand" type="checkbox" hidden><div id="sauce-doc"><label for="sauce-doc-expand">[expand]</label><div>These parameters will be replaced by their corresponding values in the URL and displayed text:</div><ul><li><code>%IMG</code>: Full image URL for GIF, JPG, and PNG; thumbnail URL for other types.</li><li><code>%URL</code>: Full image URL.</li><li><code>%TURL</code>: Thumbnail URL.</li><li><code>%name</code>: Original file name.</li><li><code>%board</code>: Current board.</li><li><code>%MD5</code>: MD5 hash in base64.</li><li><code>%sMD5</code>: MD5 hash in base64 using <code>-</code> and <code>_</code>.</li><li><code>%hMD5</code>: MD5 hash in hexadecimal.</li><li><code>%$0</code>: Matched regular expression within the filename.</li><li><code>%$1</code>, <code>%$2</code>, <code>%$3</code>, ... : Subexpressions within the matched regular expression.</li><li><code>%%</code>, <code>%semi</code>: Literal <code>%</code> and <code>;</code>.</li></ul><div>Lines starting with a <code>#</code> will be ignored.</div><div>You can specify a display text by appending <code>;text:[text]</code> to the URL.</div><div>You can specify the applicable boards/sites by appending <code>;boards:[board1],[board2]</code>. See the Filter guide for details.</div><div>You can specify the applicable file types by appending <code>;types:[extension1],[extension2]</code>.</div><div>You can specify a regular expression the filename must match by appending <code>;regexp:[regular expression]</code>.</div></div><textarea hidden name="sauces" class="field" spellcheck="false"></textarea>'}),r(".warning",e).hidden=f.Sauce,n=r("textarea",e),r.get("sauces",f.sauces,function(i){return n.value=i.sauces,n.hidden=!1}),r.on(n,"change",r.cb.value)},advanced:function(e){var n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W;for(r.extend(e,{innerHTML:'<fieldset><legend>Archives</legend><div class="warning" data-feature="404 Redirect"><code>404 Redirect</code> is disabled.</div><select id="archive-board-select"></select><table id="archive-table"><thead><th>Thread redirection</th><th>Post fetching</th><th>File redirection</th></thead><tbody></tbody></table><br><div><b>Archive Lists</b>: Each line below should be an archive list in <a href="https://github.com/MayhemYDG/archives.json/blob/gh-pages/CONTRIBUTING.md" target="_blank">this format</a> or a URL to load an archive list from.<br>Archive properties can be overriden by another item with the same <code>uid</code> (or if absent, its <code>name</code>).</div><textarea hidden name="archiveLists" class="field" spellcheck="false"></textarea><button id="update-archives">Update now</button> Last updated: <time id="lastarchivecheck"></time> <label><input type="checkbox" name="archiveAutoUpdate"> Auto-update</label></fieldset><fieldset><legend>External Catalog</legend><div class="warning" data-feature="External Catalog"><code>External Catalog</code> is disabled. This will be used only as a fallback.</div><div>URLs of external catalog sites, where <code>%board</code> is to be replaced by the board name.<br>Each URL should be followed by <code>;boards:</code> and optionally <code>;exclude:</code> and a list of supported/excluded boards in the format explained in the Filter guide.</div><textarea hidden name="externalCatalogURLs" class="field" spellcheck="false"></textarea></fieldset><fieldset><legend>Override 4chan Image Host</legend><div>Change 4chan image links to this domain. Leave blank for no change.</div><div><input name="fourchanImageHost" class="field" spellcheck="false" list="list-fourchanImageHost"></div><datalist id="list-fourchanImageHost"></datalist></fieldset><fieldset><legend>Captcha Language</legend><div>Choose from <a href="https://developers.google.com/recaptcha/docs/language" target="_blank">list of language codes</a>. Leave blank to autoselect.</div><div><input name="captchaLanguage" class="field" spellcheck="false"></div></fieldset><fieldset><legend>Custom Board Navigation</legend><div><textarea hidden name="boardnav" class="field" spellcheck="false"></textarea></div><span class="note">New lines will be converted into spaces.</span><br><br><div class="note">In the following examples for /g/, <code>g</code> can be changed to a different board ID (<code>a</code>, <code>b</code>, etc...), the current board (<code>current</code>), or the Twitter link (<code>@</code>).</div><div>Board link: <code>g</code></div><div>Archive link: <code>g-archive</code></div><div>Internal archive link: <code>g-expired</code></div><div>Title link: <code>g-title</code></div><div>Board link (Replace with title when on that board): <code>g-replace</code></div><div>Full text link: <code>g-full</code></div><div>Custom text link: <code>g-text:&quot;Install Gentoo&quot;</code></div><div>Index-only link: <code>g-index</code></div><div>Catalog-only link: <code>g-catalog</code></div><div>Index mode: <code>g-mode:&quot;infinite scrolling&quot;</code></div><div>Index sort: <code>g-sort:&quot;creation date rev&quot;</code></div><div>External link: <code>external-text:&quot;Google&quot;,&quot;http://www.google.com&quot;</code></div><div>Open in new tab: <code>g-nt</code></div><div>Combinations are possible: <code>g-index-text:&quot;Technology Index&quot;</code></div><div>Full board list toggle: <code>toggle-all</code></div><br><div class="note"><code>[ toggle-all ] [current-title] [g-title / a-title / jp-title] [x / wsg / h] [t-text:&quot;Piracy&quot;]</code><br>will give you<br><code>[ + ] [Technology] [Technology / Anime & Manga / Otaku Culture] [x / wsg / h] [Piracy]</code><br>if you are on /g/.</div></fieldset><fieldset><legend>Time Formatting <span class="warning" data-feature="Time Formatting">is disabled.</span></legend><div><input name="time" class="field" spellcheck="false">: <span class="time-preview"></span></div><div>Supported <a href="http://man7.org/linux/man-pages/man1/date.1.html" target="_blank">format specifiers</a>:</div><div>Day: <code>%a</code>, <code>%A</code>, <code>%d</code>, <code>%e</code></div><div>Month: <code>%m</code>, <code>%b</code>, <code>%B</code></div><div>Year: <code>%y</code>, <code>%Y</code></div><div>Hour: <code>%k</code>, <code>%H</code>, <code>%l</code>, <code>%I</code>, <code>%p</code>, <code>%P</code></div><div>Minute: <code>%M</code></div><div>Second: <code>%S</code></div><div>Literal <code>%</code>: <code>%%</code></div><div><a href="https://www.w3.org/International/articles/language-tags/" target="_blank">Language tag</a>: <input name="timeLocale" class="field" spellcheck="false"></div></fieldset><fieldset><legend>Quote Backlinks formatting <span class="warning" data-feature="Quote Backlinks">is disabled.</span></legend><div><input name="backlink" class="field" spellcheck="false">: <span class="backlink-preview"></span></div></fieldset><fieldset><legend>Default pasted content filename</legend><div><input name="pastedname" class="field" spellcheck="false">.png</div></fieldset><fieldset><legend>File Info Formatting <span class="warning" data-feature="File Info Formatting">is disabled.</span></legend><div><input name="fileInfo" class="field" spellcheck="false">: <span class="file-info file-info-preview"></span></div><div>Link: <code>%l</code> (truncated), <code>%L</code> (untruncated), <code>%T</code> (4chan filename)</div><div>Filename: <code>%n</code> (truncated), <code>%N</code> (untruncated), <code>%t</code> (4chan filename)</div><div>Download button: <code>%d</code></div><div>Quick filter MD5: <code>%f</code></div><div>Spoiler indicator: <code>%p</code></div><div>Size: <code>%B</code> (Bytes), <code>%K</code> (KB), <code>%M</code> (MB), <code>%s</code> (4chan default)</div><div>Resolution: <code>%r</code> (Displays &#039;PDF&#039; for PDF files)</div><div>Tag: <code>%g</code><div>Literal <code>%</code>: <code>%%</code></div></fieldset><fieldset><legend>Quick Reply Personas</legend><textarea hidden class="personafield field" name="QR.personas" spellcheck="false"></textarea><p>One item per line.<br>Items will be added in the relevant input&#039;s auto-completion list.<br>Password items will always be used, since there is no password input.<br>Lines starting with a <code>#</code> will be ignored.</p><ul>You can use these settings with each item, separate them with semicolons:<li>Possible items are: <code>name</code>, <code>options</code> (or equivalently <code>email</code>), <code>subject</code> and <code>password</code>.</li><li>Wrap values of items with quotes, like this: <code>options:&quot;sage&quot;</code>.</li><li>Force values as defaults with the <code>always</code> keyword, for example: <code>options:&quot;sage&quot;;always</code>.</li><li>Select specific boards for an item, separated with commas, for example: <code>options:&quot;sage&quot;;boards:jp;always</code>.</li></ul></fieldset><fieldset><legend>Unread Favicon <span class="warning" data-feature="Unread Favicon">is disabled.</span></legend><select name="favicon"><option value="ferongr">ferongr</option><option value="xat-">xat-</option><option value="4chanJS">4chanJS</option><option value="Mayhem">Mayhem</option><option value="Original">Original</option><option value="Metro">Metro</option></select><span class="favicon-preview"></span></fieldset><fieldset><legend>Thread Updater <span class="warning" data-feature="Thread Updater">is disabled.</span></legend><div>Interval: <input type="number" name="Interval" class="field" min="1"> seconds</div></fieldset><fieldset><legend>Custom Cooldown Time</legend><div>Seconds: <input type="number" name="customCooldown" class="field" min="0"></div></fieldset><fieldset><legend><label><input type="checkbox" name="Custom CSS"> Custom CSS</label></legend><div>For more information about customizing 4chan X&#039;s CSS, see the <a href="https://github.com/ccd0/4chan-x/wiki/Styling-Guide" target="_blank">styling guide</a>.</div><button id="apply-css">Apply CSS</button><textarea hidden name="usercss" class="field" spellcheck="false"></textarea></fieldset><fieldset><legend>Javascript Whitelist</legend><div>Sources from which Javascript is allowed to be loaded by <a href="http://content-security-policy.com/#source_list" target="_blank">Content Security Policy</a>.<br>Lines starting with a <code>#</code> will be ignored.</div><textarea hidden name="jsWhitelist" class="field" spellcheck="false"></textarea></fieldset><fieldset><legend>Known Banners</legend><div>List of known banners, used for click-to-change feature.</div><textarea hidden name="knownBanners" class="field" spellcheck="false"></textarea></fieldset>'}),R=N(".warning",e),m=0,A=R.length;m<A;m++)W=R[m],W.hidden=f[W.dataset.feature];for(c=r.dict(),B=N("[name]",e),b=0,w=B.length;b<w;b++)d=B[b],c[d.name]=d;r.on(c.archiveLists,"change",function(){return r.set("lastarchivecheck",0),f.lastarchivecheck=0,r.id("lastarchivecheck").textContent="never"}),h=r.dict();for(S in c)d=c[S],S!=="Interval"&&S!=="Custom CSS"&&(h[S]=f[S],l=d.nodeName==="SELECT"||(M=d.type)==="checkbox"||M==="radio"||d.nodeName==="TEXTAREA"&&!(S in t)?"change":"input",r.on(d,l,r.cb[d.type==="checkbox"?"checked":"value"]),S in t&&r.on(d,l,t[S]));for(r.get(h,function(z){var V,K;for(V in z)K=z[V],d=c[V],d[d.type==="checkbox"?"checked":"value"]=K,d.hidden=!1,V in t&&t[V].call(d)}),C=r.id("list-fourchanImageHost"),P=re.suggestions,v=0,x=P.length;v<x;v++)j=P[v],r.add(C,r.el("option",{textContent:j}));for(u=c.Interval,a=c["Custom CSS"],n=r("#apply-css",e),u.value=f.Interval,a.checked=f["Custom CSS"],c.usercss.disabled=!f["Custom CSS"],n.disabled=!f["Custom CSS"],r.on(u,"change",Qe.cb.interval),r.on(a,"change",t.togglecss),r.on(n,"click",function(){return je.update()}),g=r.dict(),q=["archives","selectedArchives","lastarchivecheck"],D=0,k=q.length;D<k;D++)S=q[D],g[S]=f[S];return r.get(g,function(z){return r.extend(f,z),ne.selectArchives(),t.addArchiveTable(e)}),i=r("#archive-board-select",e),O=r("#archive-table",e),U=r("#update-archives",e),r.on(i,"change",function(){return r("tbody > :not([hidden])",O).hidden=!0,r("tbody > ."+this.value,O).hidden=!1}),r.on(U,"click",function(){return ne.update(function(){return t.addArchiveTable(e)})})},addArchiveTable:function(e){var n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W,z,V,K,G,ee;for(r("#lastarchivecheck",e).textContent=f.lastarchivecheck===0?"never":new Date(f.lastarchivecheck).toLocaleString(),d=r("#archive-board-select",e),V=r("#archive-table",e),K=r("tbody",e),r.rmAll(d),r.rmAll(K),n=r.dict(),B=f.archives,b=0,w=B.length;b<w;b++)if(M=B[b],ee=M.uid,S=M.name,c=M.boards,h=M.files,z=M.software,!(z!=="fuuka"&&z!=="foolfuuka"))for(v=0,x=c.length;v<x;v++)a=c[v],R=n[a]||(n[a]={thread:[],post:[],file:[]}),i=[ee??S,S],R.thread.push(i),z==="foolfuuka"&&R.post.push(i),o.call(h,a)>=0&&R.file.push(i);for(U=[],l=[],P=Object.keys(n).sort(),A=0,k=P.length;A<k;A++){for(a=P[A],j=r.el("tr",{className:"board-"+a}),j.hidden=a!==p.BOARD.ID,l.push(r.el("option",{textContent:"/"+a+"/",value:"board-"+a,selected:a===p.BOARD.ID})),R=n[a],q=["thread","post","file"],D=0,C=q.length;D<C;D++)m=q[D],r.add(j,t.addArchiveCell(a,R,m));U.push(j)}if(U.length===0){d.hidden=V.hidden=!0;return}d.hidden=V.hidden=!1,p.BOARD.ID in n||(U[0].hidden=!1),r.add(d,l),r.add(K,U),O=f.selectedArchives;for(a in O){u=O[a];for(G in u)g=u[G],(W=r("select[data-boardid='"+a+"'][data-type='"+G+"']",K))&&(W.value=JSON.stringify(g),W.value||(W.value=W.firstChild.value))}},addArchiveCell:function(e,n,i){var a,l,d,c,u,h;if(d=n[i].length,h=r.el("td",{className:"archive-cell"}),!d)return h.textContent="--",h;for(c=[],l=0;l<d;)a=n[i][l++],c.push(r.el("option",{value:JSON.stringify(a[0]),textContent:a[1]}));return r.extend(h,{innerHTML:"<select></select>"}),u=h.firstElementChild,(u.disabled=d===1)||(u.setAttribute("data-boardid",e),u.setAttribute("data-type",i),r.on(u,"change",t.saveSelectedArchive)),r.add(u,c),h},saveSelectedArchive:function(){return r.get("selectedArchives",f.selectedArchives,function(e){return function(n){var i,a;return a=n.selectedArchives,(a[i=e.dataset.boardid]||(a[i]=r.dict()))[e.dataset.type]=JSON.parse(e.value),r.set("selectedArchives",a),f.selectedArchives=a,ne.selectArchives()}}(this))},boardnav:function(){return L.generateBoardList(this.value)},time:function(){return this.nextElementSibling.textContent=it.format(this.value,new Date)},timeLocale:function(){return t.time.call(r("[name=time]",t.dialog))},backlink:function(){return this.nextElementSibling.textContent=this.value.replace(/%(?:id|%)/g,function(e){return{"%id":"123456789","%%":"%"}[e]})},fileInfo:function(){var e;return e={isReply:!0,file:{url:"//"+re.host()+"/g/1334437723720.jpg",name:"d9bb2efc98dd0df141a94399ff5880b7.jpg",size:"276 KB",sizeInBytes:276*1024,dimensions:"1280x720",isImage:!0,isVideo:!1,isSpoiler:!0,tag:"Loop"}},ot.format(this.value,e,this.nextElementSibling)},favicon:function(){var e,n,i,a,l,d,c;for(Be.switch(),p.VIEW==="thread"&&f["Unread Favicon"]&&te.update(),a=this.nextElementSibling.children,e=Be,c=[e.SFW,e.unreadSFW,e.unreadSFWY,e.NSFW,e.unreadNSFW,e.unreadNSFWY,e.dead,e.unreadDead,e.unreadDeadY],n=l=0,d=c.length;l<d;n=++l)i=c[n],a[n]||r.add(this.nextElementSibling,r.el("img")),a[n].src=i},togglecss:function(){return(r("textarea[name=usercss]",r.x("ancestor::fieldset[1]",this)).disabled=r.id("apply-css").disabled=!this.checked)?je.rmStyle():je.addStyle(),r.cb.checked.call(this)},keybinds:function(e){var n,i,a,l,d,c,u,h;r.extend(e,{innerHTML:'<div class="warning"><code>Keybinds</code> are disabled.</div><div>Allowed keys: <kbd>a-z</kbd>, <kbd>0-9</kbd>, <kbd>Ctrl</kbd>, <kbd>Shift</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>, <kbd>Enter</kbd>, <kbd>Esc</kbd>, <kbd>Up</kbd>, <kbd>Down</kbd>, <kbd>Right</kbd>, <kbd>Left</kbd>.</div><div>Press <kbd>Backspace</kbd> to disable a keybind.</div><table><tbody><tr><th>Actions</th><th>Keybinds</th></tr></tbody></table>'}),r(".warning",e).hidden=f.Keybinds,u=r("tbody",e),l=r.dict(),a=r.dict(),c=de.hotkeys;for(d in c)n=c[d],h=r.el("tr",{innerHTML:"<td>"+T(n[1])+'</td><td><input class="field"></td>'}),i=r("input",h),i.name=d,i.spellcheck=!1,l[d]=f[d],a[d]=i,r.on(i,"keydown",t.keybind),r.add(u,h);return r.get(l,function(g){var m;for(d in g)m=g[d],a[d].value=m})},keybind:function(e){var n;if(e.keyCode!==9&&(e.preventDefault(),e.stopPropagation(),(n=Pe.keyCode(e))!=null))return this.value=n,r.cb.value.call(this)}},t}.call(this),zt=function(){return zt}.call(this),$=function(){var t,s,o,e,n,i,a,l,d,c,u,h,g=function(b,v){return function(){return b.apply(v,arguments)}},m=[].slice;return e=function(b,v){var A,w,x,k,C,D;for(w=r.el("div",{className:"dialog",id:b}),r.extend(w,v),w.style.cssText=f[b+".position"],C=r(".move",w),r.on(C,"touchstart mousedown",a),D=C.children,x=0,k=D.length;x<k;x++)A=D[x],A.tagName&&r.on(A,"touchstart mousedown",function(S){return S.stopPropagation()});return w},t=function(){var b,v;b=null,v=null;function A(w){this.type=w,this.addEntry=g(this.addEntry,this),this.onFocus=g(this.onFocus,this),this.keybinds=g(this.keybinds,this),this.close=g(this.close,this),this.setPosition=g(this.setPosition,this),r.on(I,"AddMenuEntry",function(x){return function(k){var C;if(C=k.detail,C.type===x.type)return delete C.open,x.addEntry(C)}}(this)),this.entries=[]}return A.prototype.makeMenu=function(){var w;return w=r.el("div",{className:"dialog",id:"menu",tabIndex:0}),w.dataset.type=this.type,r.on(w,"click",function(x){return x.stopPropagation()}),r.on(w,"keydown",this.keybinds),w},A.prototype.toggle=function(w,x,k){var C;if(w.preventDefault(),w.stopPropagation(),!(b&&(C=v,b.close(),C===x))&&this.entries.length)return this.open(x,k)},A.prototype.open=function(w,x){var k,C,D,S,R;for(S=this.menu=this.makeMenu(),b=this,v=w,this.entries.sort(function(B,M){return B.order-M.order}),R=this.entries,C=0,D=R.length;C<D;C++)k=R[C],this.insertEntry(k,S,x);return r.addClass(v,"active"),r.on(I,"click CloseMenu",this.close),r.on(I,"scroll",this.setPosition),r.on(window,"resize",this.setPosition),r.after(w,S),this.setPosition(),k=r(".entry",S),this.focus(k),S.focus()},A.prototype.setPosition=function(){var w,x,k,C,D,S,R,B,M,P,q,O;return B=this.menu.getBoundingClientRect(),x=v.getBoundingClientRect(),k=window.scrollY+x.top,w=window.scrollX+x.left,D=E.clientHeight,S=E.clientWidth,M=x.top+x.height+B.height<D?[x.bottom+"px",""]:["",D-x.top+"px"],O=M[0],C=M[1],P=x.left+B.width<S?[x.left+"px",""]:["",S-x.right+"px"],R=P[0],q=P[1],r.extend(this.menu.style,{top:O,right:q,bottom:C,left:R}),this.menu.classList.toggle("left",q)},A.prototype.insertEntry=function(w,x,k){var C,D,S,R,B,M;if(typeof w.open=="function")try{if(!w.open(k))return}catch(P){C=P,Z.handleErrors({message:"Error in building the "+this.type+" menu.",error:C});return}if(r.add(x,w.el),!!w.subEntries){for((M=r(".submenu",w.el))&&r.rm(M),M=r.el("div",{className:"dialog submenu"}),R=w.subEntries,D=0,S=R.length;D<S;D++)B=R[D],this.insertEntry(B,M,k);r.add(w.el,M)}},A.prototype.close=function(){return r.rm(this.menu),delete this.menu,r.rmClass(v,"active"),b=null,v=null,r.off(I,"click scroll CloseMenu",this.close),r.off(I,"scroll",this.setPosition),r.off(window,"resize",this.setPosition)},A.prototype.findNextEntry=function(w,x){var k;return k=m.call(w.parentNode.children),k.sort(function(C,D){return C.style.order-D.style.order}),k[k.indexOf(w)+x]},A.prototype.keybinds=function(w){var x,k,C,D,S;for(x=r(".focused",this.menu);D=r(".focused",x);)x=D;switch(w.keyCode){case 27:v.focus(),this.close();break;case 13:case 32:x.click();break;case 38:(k=this.findNextEntry(x,-1))&&this.focus(k);break;case 40:(k=this.findNextEntry(x,1))&&this.focus(k);break;case 39:if((S=r(".submenu",x))&&(k=S.firstElementChild)){for(;C=this.findNextEntry(k,-1);)k=C;this.focus(k)}break;case 37:(k=r.x('parent::*[contains(@class,"submenu")]/parent::*',x))&&this.focus(k);break;default:return}return w.preventDefault(),w.stopPropagation()},A.prototype.onFocus=function(w){return w.stopPropagation(),this.focus(w.target)},A.prototype.focus=function(w){for(var x,k,C,D,S,R,B,M,P,q,O,j,U,W,z,V;S=r.x('parent::*/child::*[contains(@class,"focused")]',w);)r.rmClass(S,"focused");for(P=N(".focused",w),R=0,M=P.length;R<M;R++)S=P[R],r.rmClass(S,"focused");if(r.addClass(w,"focused"),!!(z=r(".submenu",w)))return U=z.getBoundingClientRect(),D=w.getBoundingClientRect(),k=E.clientHeight,C=E.clientWidth,q=D.top+U.height<k?["0px","auto"]:["auto","0px"],V=q[0],x=q[1],O=D.right+U.width<C-150?["100%","auto"]:["auto","100%"],B=O[0],j=O[1],W=z.style,W.top=V,W.bottom=x,W.left=B,W.right=j},A.prototype.addEntry=function(w){return this.parseEntry(w),this.entries.push(w)},A.prototype.parseEntry=function(w){var x,k,C,D,S;if(x=w.el,D=w.subEntries,r.addClass(x,"entry"),r.on(x,"focus mouseover",this.onFocus),x.style.order=w.order||100,!!D)for(r.addClass(x,"has-submenu"),k=0,C=D.length;k<C;k++)S=D[k],this.parseEntry(S)},A}(),a=function(b){var v,A,w,x,k,C,D;if(!(b.type==="mousedown"&&b.button!==0))return b.preventDefault(),(A=b.type==="touchstart")&&(b=b.changedTouches[b.changedTouches.length-1]),v=r.x('ancestor::div[contains(@class,"dialog")][1]',this),x=v.getBoundingClientRect(),C=E.clientHeight,D=E.clientWidth,w={id:v.id,style:v.style,dx:b.clientX-x.left,dy:b.clientY-x.top,height:C-x.height,width:D-x.width,screenHeight:C,screenWidth:D,isTouching:A},k=f["Header auto-hide"]||!f["Fixed Header"]?[0,0]:f["Bottom Header"]?[0,L.bar.getBoundingClientRect().height]:[L.bar.getBoundingClientRect().height,0],w.topBorder=k[0],w.bottomBorder=k[1],A?(w.identifier=b.identifier,w.move=h.bind(w),w.up=u.bind(w),r.on(I,"touchmove",w.move),r.on(I,"touchend touchcancel",w.up)):(w.move=n.bind(w),w.up=i.bind(w),r.on(I,"mousemove",w.move),r.on(I,"mouseup",w.up))},h=function(b){var v,A,w,x;for(w=b.changedTouches,v=0,A=w.length;v<A;v++)if(x=w[v],x.identifier===this.identifier){n.call(this,x);return}},n=function(b){var v,A,w,x,k,C,D;return A=b.clientX,w=b.clientY,x=A-this.dx,x=x<10?0:this.width-x<10?"":x/this.screenWidth*100+"%",D=w-this.dy,D=D<10+this.topBorder?this.topBorder+"px":this.height-D<10+this.bottomBorder?"":D/this.screenHeight*100+"%",k=x===""?0:"",v=D===""?this.bottomBorder+"px":"",C=this.style,C.left=x,C.right=k,C.top=D,C.bottom=v},u=function(b){var v,A,w,x;for(w=b.changedTouches,v=0,A=w.length;v<A;v++)if(x=w[v],x.identifier===this.identifier){i.call(this);return}},i=function(){return this.isTouching?(r.off(I,"touchmove",this.move),r.off(I,"touchend touchcancel",this.up)):(r.off(I,"mousemove",this.move),r.off(I,"mouseup",this.up)),r.set(this.id+".position",this.style.cssText)},c=function(b){var v,A,w,x,k,C,D,S,R,B,M;return B=b.root,A=b.el,k=b.latestEvent,w=b.endEvents,x=b.height,M=b.width,v=b.cb,C=b.noRemove,S=B.getBoundingClientRect(),D={root:B,el:A,style:A.style,isImage:(R=A.nodeName)==="IMG"||R==="VIDEO",cb:v,endEvents:w,latestEvent:k,clientHeight:E.clientHeight,clientWidth:E.clientWidth,height:x,width:M,noRemove:C,clientX:(S.left+S.right)/2,clientY:(S.top+S.bottom)/2},D.hover=l.bind(D),D.hoverend=d.bind(D),D.hover(D.latestEvent),new MutationObserver(function(){if(A.parentNode)return D.hover(D.latestEvent)}).observe(A,{childList:!0}),r.on(B,w,D.hoverend),r.x('ancestor::div[contains(@class,"inline")][1]',B)&&r.on(I,"keydown",D.hoverend),r.on(B,"mousemove",D.hover),D.workaround=function(P){if(!B.contains(P.target))return D.hoverend(P)},r.on(E,"mousemove",D.workaround)},c.padding=25,l=function(b){var v,A,w,x,k,C,D,S,R,B,M,P;return this.latestEvent=b,w=(this.height||this.el.offsetHeight)+c.padding,P=this.width||this.el.offsetWidth,C=f["Follow Cursor"]?b:this,v=C.clientX,A=C.clientY,M=this.isImage?Math.max(0,A*(this.clientHeight-w)/this.clientHeight):Math.max(0,Math.min(this.clientHeight-w,A-120)),B=this.clientWidth/2,this.isImage||(B=Math.max(B,this.clientWidth-400)),k=(v<=B?v:this.clientWidth-v)+45,this.isImage&&(k=Math.min(k,this.clientWidth-P)),k+="px",D=v<=B?[k,""]:["",k],x=D[0],S=D[1],R=this.style,R.top=M+"px",R.left=x,R.right=S},d=function(b){if(!(b.type==="keydown"&&b.keyCode!==13||b.target.nodeName==="TEXTAREA")&&(this.noRemove||r.rm(this.el),r.off(this.root,this.endEvents,this.hoverend),r.off(I,"keydown",this.hoverend),r.off(this.root,"mousemove",this.hover),r.off(E,"mousemove",this.workaround),this.cb))return this.cb.call(this)},o=function(b,v,A){var w,x;return A==null&&(A=f[b]),x=r.el("label"),w=r.el("input",{type:"checkbox",name:b,checked:A}),r.add(x,[w,r.tn(" "+v)]),x},s={dialog:e,Menu:t,hover:c,checkbox:o},s}.call(this),Fe=function(){var t;return t={init:function(){var s,o,e,n,i,a,l,d;if((f["Fappe Tyme"]||f["Werk Tyme"])&&((a=p.VIEW)==="index"||a==="thread"||a==="archive")){for(this.nodes={},this.enabled={fappe:!1,werk:f.werk},l=["Fappe","Werk"],o=0,i=l.length;o<i;o++)d=l[o],f[d+" Tyme"]&&(n=d.toLowerCase(),s=$.checkbox(n,d+" Tyme",!1),s.title=d+" Tyme",this.nodes[n]=s.firstElementChild,f[n]&&this.set(n,!0),r.on(this.nodes[n],"change",this.toggle.bind(this,n)),L.menu.addEntry({el:s,order:97}),e=r.el("span",{className:"indicator",textContent:d[0],title:d+" Tyme active"}),r.on(e,"click",function(){var c;return c=r.getOwn(t.nodes,this.parentNode.id.replace("shortcut-","")),c.checked=!c.checked,r.event("change",null,c)}),L.addShortcut(n,e,410));return f["Werk Tyme"]&&r.sync("werk",this.set.bind(this,"werk")),F.Post.push({name:"Fappe Tyme",cb:this.node}),F.CatalogThread.push({name:"Werk Tyme",cb:this.catalogNode})}},node:function(){return this.nodes.root.classList.toggle("noFile",!this.files.length)},catalogNode:function(){var s,o;if(s=this.thread.OP.files[0],!!s)return o=r.el("div",{textContent:s.name,className:"werkTyme-filename"}),r.add(this.nodes.thumb.parentNode,o)},set:function(s,o){return this.enabled[s]=this.nodes[s].checked=o,r[(o?"add":"rm")+"Class"](E,s+"Tyme")},toggle:function(s){if(this.set(s,!this.enabled[s]),s==="werk")return r.cb.checked.call(this.nodes[s])}},t}.call(this),He=function(){var t;return t={init:function(){var s,o;if(this.enabled=f.Gallery&&((o=p.VIEW)==="index"||o==="thread"))return this.delay=f["Slide Delay"],s=r.el("a",{href:"javascript:;",title:"Gallery",className:"fa fa-picture-o",textContent:"Gallery"}),r.on(s,"click",this.cb.toggle),L.addShortcut("gallery",s,530),F.Post.push({name:"Gallery",cb:this.node})},node:function(){var s,o,e,n,i;for(n=this.files,i=[],o=0,e=n.length;o<e;o++)s=n[o],s.thumb&&(t.nodes&&(t.generateThumb(this,s),t.nodes.total.textContent=t.images.length),f["Image Expansion"]||p.SITE.software==="tinyboard"&&Z.jsEnabled?i.push(void 0):i.push(r.on(s.thumbLink,"click",t.cb.image)));return i},build:function(s){var o,e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R;e=t.cb,f["Fullscreen Gallery"]&&(r.one(I,"fullscreenchange mozfullscreenchange webkitfullscreenchange",function(){return r.on(I,"fullscreenchange mozfullscreenchange webkitfullscreenchange",e.close)}),typeof E.mozRequestFullScreen=="function"&&E.mozRequestFullScreen(),typeof E.webkitRequestFullScreen=="function"&&E.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)),t.images=[],v=t.nodes={},t.fileIDs=r.dict(),t.slideshow=!1,v.el=n=r.el("div",{id:"a-gallery"}),r.extend(n,{innerHTML:'<div class="gal-viewport"><span class="gal-buttons"><a href="javascript:;" class="gal-start" title="Start slideshow"><i></i></a><a href="javascript:;" class="gal-stop" title="Stop slideshow"><i></i></a><a href="javascript:;" class="menu-button"><i></i></a><a href="javascript:;" class="gal-close">\xD7</a></span><div class="gal-labels"><span class="gal-count"><span class="count"></span> / <span class="total"></span></span><a class="gal-name" target="_blank"></a><span class="gal-sauce"></span></div><div class="gal-prev"></div><div class="gal-image"><a href="javascript:;"><img></a></div><div class="gal-next"></div></div><div class="gal-thumbnails"></div>'}),x={buttons:".gal-buttons",frame:".gal-image",name:".gal-name",count:".count",total:".total",sauce:".gal-sauce",thumbs:".gal-thumbnails",next:".gal-image a",current:".gal-image img"};for(u in x)R=x[u],v[u]=r(R,n);for(b=r(".menu-button",n),v.menu=new $.Menu("gallery"),r.on(v.frame,"click",e.blank),f["Mouse Wheel Volume"]&&r.on(v.frame,"wheel",Ie.wheel),r.on(v.next,"click",e.click),r.on(v.name,"click",_.download),r.on(r(".gal-prev",n),"click",e.prev),r.on(r(".gal-next",n),"click",e.next),r.on(r(".gal-start",n),"click",e.start),r.on(r(".gal-stop",n),"click",e.stop),r.on(r(".gal-close",n),"click",e.close),r.on(b,"click",function(B){return v.menu.toggle(B,this,p)}),k=t.menu.createSubEntries(),l=0,h=k.length;l<h;l++)i=k[l],i.order=0,v.menu.addEntry(i);for(r.on(I,"keydown",e.keybinds),f.Keybinds&&r.off(I,"keydown",Pe.keydown),r.on(window,"resize",t.cb.setHeight),C=N(p.SITE.selectors.file.thumb),d=0,g=C.length;d<g;d++)if(w=C[d],!!(A=H.postFromNode(w)))for(D=A.files,c=0,m=D.length;c<m;c++)a=D[c],a.thumb&&(t.generateThumb(A,a),!s&&t.fileIDs[A.fullID+"."+a.index]&&(o=a.thumbLink,L.getTopOf(o)+o.getBoundingClientRect().height>=0&&(s=o)));return r.addClass(E,"gallery-open"),r.add(I.body,n),v.thumbs.scrollTop=0,v.current.parentElement.scrollTop=0,s&&(S=r("[href='"+s.href+"']",v.thumbs)),S||(S=t.images[t.images.length-1]),S&&t.open(S),E.style.overflow="hidden",v.total.textContent=t.images.length},generateThumb:function(s,o){var e,n;if(!(s.isClone||s.isHidden)&&o&&o.thumb&&(o.isImage||o.isVideo||f["PDF in Gallery"])&&!t.fileIDs[s.fullID+"."+o.index])return t.fileIDs[s.fullID+"."+o.index]=!0,e=r.el("a",{className:"gal-thumb",href:o.url,target:"_blank",title:o.name}),e.dataset.id=t.images.length,e.dataset.post=s.fullID,e.dataset.file=o.index,n=o.thumb.cloneNode(!1),n.style.cssText="",r.add(e,n),r.on(e,"click",t.cb.open),t.images.push(e),r.add(t.nodes.thumbs,e)},load:function(s,o){var e,n,i;return n=s.href.match(/\w*$/),e=r.getOwn({webm:"video",mp4:"video",ogv:"video",pdf:"iframe"},n)||"img",i=r.el(e),r.extend(i.dataset,s.dataset),r.on(i,"error",o),i.src=s.href,i},open:function(s){var o,e,n,i,a,l,d,c,u,h,g,m,b;if(c=t.nodes,u=+c.current.dataset.id,l=+s.dataset.id,(o=t.images[u])&&r.rmClass(o,"gal-highlight"),r.addClass(s,"gal-highlight"),c.thumbs.scrollTop=s.offsetTop+s.offsetHeight/2-c.thumbs.clientHeight/2,((g=t.cache)!=null?g.dataset.id:void 0)===""+l?(e=t.cache,r.off(e,"error",t.cacheError),r.on(e,"error",t.error)):e=t.load(s,t.error),r.off(c.current,"error",t.error),_.pause(c.current),r.replace(c.current,e),c.current=e,e.nodeName==="VIDEO"&&(e.loop=!0,Ie.setup(e),f.Autoplay&&e.play(),f["Show Controls"]&&_.addControls(e)),E.classList.toggle("gal-pdf",e.nodeName==="IFRAME"),t.cb.setHeight(),c.count.textContent=+s.dataset.id+1,c.name.download=c.name.textContent=s.title,c.name.href=s.href,c.frame.scrollTop=0,c.next.focus(),r.rmAll(c.sauce),f.Sauce&&Ve.links&&(h=p.posts.get(e.dataset.post))){for(b=[],m=Ve.links,n=0,i=m.length;n<i;n++)a=m[n],(d=Ve.createSauceLink(a,h,h.files[+e.dataset.file]))&&b.push(r.tn(" "),d);r.add(c.sauce,b)}if(t.slideshow&&(l>u||u===t.images.length-1&&l===0)?t.setupTimer():t.cb.stop(),f["Scroll to Post"]&&(h=p.posts.get(e.dataset.post))&&L.scrollTo(h.nodes.root),isNaN(u)||l===(u+1)%t.images.length)return t.cache=t.load(t.images[(l+1)%t.images.length],t.cacheError)},error:function(){var s,o,e;if(((e=this.error)!=null?e.code:void 0)===MediaError.MEDIA_ERR_DECODE)return new J("error","Corrupt or unplayable video",30);if(!_.isFromArchive(this))return o=p.posts.get(this.dataset.post),s=o.files[+this.dataset.file],_.error(this,o,s,null,function(n){return function(i){if(i&&(t.images[+n.dataset.id].href=i,t.nodes.current===n))return n.src=i}}(this))},cacheError:function(){return delete t.cache},cleanupTimer:function(){var s;return clearTimeout(t.timeoutID),s=t.nodes.current,r.off(s,"canplaythrough load",t.startTimer),r.off(s,"ended",t.cb.next)},startTimer:function(){return t.timeoutID=setTimeout(t.checkTimer,t.delay*r.SECOND)},setupTimer:function(){var s,o;return t.cleanupTimer(),s=t.nodes.current,o=s.nodeName==="VIDEO",o&&s.play(),(o?s.readyState>=4:s.complete)||s.nodeName==="IFRAME"?t.startTimer():r.on(s,o?"canplaythrough":"load",t.startTimer)},checkTimer:function(){var s;return s=t.nodes.current,s.nodeName==="VIDEO"&&!s.paused?(r.on(s,"ended",t.cb.next),s.loop=!1):t.cb.next()},cb:{keybinds:function(s){var o,e;if((e=Pe.keyCode(s))&&(o=function(){switch(e){case f.Close:case f["Open Gallery"]:return t.cb.close;case f["Next Gallery Image"]:return t.cb.next;case f["Advance Gallery"]:return t.cb.advance;case f["Previous Gallery Image"]:return t.cb.prev;case f.Pause:return t.cb.pause;case f.Slideshow:return t.cb.toggleSlideshow;case f["Rotate image anticlockwise"]:return t.cb.rotateLeft;case f["Rotate image clockwise"]:return t.cb.rotateRight;case f["Download Gallery Image"]:return t.cb.download}}(),!!o))return s.stopPropagation(),s.preventDefault(),o()},open:function(s){if(s&&s.preventDefault(),this)return t.open(this)},image:function(s){return s.preventDefault(),s.stopPropagation(),t.build(this)},prev:function(){return t.cb.open.call(t.images[+t.nodes.current.dataset.id-1]||t.images[t.images.length-1])},next:function(){return t.cb.open.call(t.images[+t.nodes.current.dataset.id+1]||t.images[0])},click:function(s){if(!_.onControls(s))return s.preventDefault(),t.cb.advance()},advance:function(){return!f.Autoplay&&t.nodes.current.paused?t.nodes.current.play():t.cb.next()},toggle:function(){return(t.nodes?t.cb.close:t.build)()},blank:function(s){if(s.target===this)return t.cb.close()},toggleSlideshow:function(){return t.cb[t.slideshow?"stop":"start"]()},download:function(){var s;return s=r(".gal-name"),s.click()},pause:function(){var s;if(t.cb.stop(),s=t.nodes.current,s.nodeName==="VIDEO")return s[s.paused?"play":"pause"]()},start:function(){return r.addClass(t.nodes.buttons,"gal-playing"),t.slideshow=!0,t.setupTimer()},stop:function(){var s;if(t.slideshow)return t.cleanupTimer(),s=t.nodes.current,s.nodeName==="VIDEO"&&(s.loop=!0),r.rmClass(t.nodes.buttons,"gal-playing"),t.slideshow=!1},rotateLeft:function(){return t.cb.rotate(270)},rotateRight:function(){return t.cb.rotate(90)},rotate:r.debounce(100,function(s){var o;if(o=t.nodes.current,o.nodeName!=="IFRAME")return o.dataRotate=((o.dataRotate||0)+s)%360,o.style.transform="rotate("+o.dataRotate+"deg)",t.cb.setHeight()}),close:function(){return r.off(t.nodes.current,"error",t.error),_.pause(t.nodes.current),r.rm(t.nodes.el),r.rmClass(E,"gallery-open"),f["Fullscreen Gallery"]&&(r.off(I,"fullscreenchange mozfullscreenchange webkitfullscreenchange",t.cb.close),typeof I.mozCancelFullScreen=="function"&&I.mozCancelFullScreen(),typeof I.webkitExitFullscreen=="function"&&I.webkitExitFullscreen()),delete t.nodes,delete t.fileIDs,E.style.overflow="",r.off(I,"keydown",t.cb.keybinds),f.Keybinds&&r.on(I,"keydown",Pe.keydown),r.off(window,"resize",t.cb.setHeight),clearTimeout(t.timeoutID)},setFitness:function(){return(this.checked?r.addClass:r.rmClass)(E,"gal-"+this.name.toLowerCase().replace(/\s+/g,"-"))},setHeight:r.debounce(100,function(){var s,o,e,n,i,a,l,d,c,u,h,g,m,b;return c=t.nodes,e=c.current,i=c.frame,m=e.style,f["Stretch to Fit"]&&(n=(u=p.posts.get(e.dataset.post))!=null?u.files[+e.dataset.file].dimensions:void 0)?(h=n.split("x"),b=h[0],a=h[1],o=i.clientWidth,s=E.clientHeight-25,(e.dataRotate||0)%180===90&&(g=[s,o],o=g[0],s=g[1]),d=Math.min(s,a/b*o),m.minHeight=d+"px",m.minWidth=b/a*d+"px"):m.minHeight=m.minWidth="",(e.dataRotate||0)%180===90?(m.maxWidth=f["Fit Height"]?E.clientHeight-25+"px":"none",m.maxHeight=f["Fit Width"]?i.clientWidth+"px":"none",l=(e.clientWidth-e.clientHeight)/2,m.margin=l+"px "+-l+"px"):m.maxWidth=m.maxHeight=m.margin=""}),setDelay:function(){return t.delay=+this.value}},menu:{init:function(){var s;if(t.enabled)return s=r.el("span",{textContent:"Gallery",className:"gallery-link"}),L.menu.addEntry({el:s,order:105,subEntries:t.menu.createSubEntries()})},createSubEntry:function(s){var o,e;return e=$.checkbox(s,s),o=e.firstElementChild,(s==="Hide Thumbnails"||s==="Fit Width"||s==="Fit Height")&&r.on(o,"change",t.cb.setFitness),r.event("change",null,o),r.on(o,"change",r.cb.checked),(s==="Hide Thumbnails"||s==="Fit Width"||s==="Fit Height"||s==="Stretch to Fit")&&r.on(o,"change",t.cb.setHeight),{el:e}},createSubEntries:function(){var s,o,e,n;return n=function(){var i,a,l,d;for(l=["Hide Thumbnails","Fit Width","Fit Height","Stretch to Fit","Scroll to Post"],d=[],i=0,a=l.length;i<a;i++)e=l[i],d.push(t.menu.createSubEntry(e));return d}(),o=r.el("label",{innerHTML:'Slide Delay: <input type="number" name="Slide Delay" min="0" step="any" class="field">'}),s=o.firstElementChild,s.value=t.delay,r.on(s,"change",t.cb.setDelay),r.on(s,"change",r.cb.value),n.push({el:o}),n}}},t}.call(this),_=function(){var t,s=[].indexOf||function(o){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===o)return e;return-1};return t={pause:function(o){if(o.nodeName==="VIDEO")return o.pause(),r.off(o,"volumechange",Ie.change),o.muted=!0},rewind:function(o){if(o.nodeName==="VIDEO"){if(o.readyState>=o.HAVE_METADATA)return o.currentTime=0}else if(/\.gif$/.test(o.src))return r.queueTask(function(){return o.src=o.src})},pushCache:function(o){return t.cache=o,r.on(o,"error",t.cacheError)},popCache:function(){var o;return o=t.cache,r.off(o,"error",t.cacheError),delete t.cache,o},cacheError:function(){if(t.cache===this)return delete t.cache},decodeError:function(o,e){var n,i;return((i=o.error)!=null?i.code:void 0)!==MediaError.MEDIA_ERR_DECODE?!1:((n=r(".warning",e.thumb.parentNode))||(n=r.el("div",{className:"warning"}),r.after(e.thumb,n)),n.textContent="Error: Corrupt or unplayable video",!0)},isFromArchive:function(o){return p.SITE.software==="yotsuba"&&!re.test(o.src.split("/")[2])},error:function(o,e,n,i,a){var l,d,c,u,h,g,m;if(u=n.url.split("/"),m=null,p.SITE.software==="yotsuba"&&f["404 Redirect"]&&(m=ne.to("file",{boardID:e.board.ID,filename:u[u.length-1]})),m&&ne.securityCheck(m)||(m=null),(e.isDead||n.isDead)&&!t.isFromArchive(o))return a(m);if(i!=null&&(g=setTimeout(function(){return a(m)},i)),!(e.isDead||n.isDead)&&(c=function(){if(!t.isFromArchive(o))return i!=null&&clearTimeout(g),a(m)},h=typeof(l=p.SITE.urls).threadJSON=="function"?l.threadJSON(e):void 0,!!h))return d=function(b){var v,A,w,x,k,C,D;if(this.status===404&&(!b&&(v=typeof(A=p.SITE.urls).archivedThreadJSON=="function"?A.archivedThreadJSON(e):void 0)?r.ajax(v,{onloadend:function(){return d.call(this,!0)}}):e.kill(!e.isClone,n.index)),this.status!==200)return c();for(C=this.response.posts,w=0,x=C.length;w<x&&(k=C[w],k.no!==e.ID);w++);return k.no!==e.ID?(e.kill(),c()):(D=n.docIndex,s.call(p.SITE.Build.parseJSON(k,e.board).filesDeleted,D)>=0?(e.kill(!0),c()):m=n.url)},r.ajax(h,{onloadend:function(){return d.call(this)}})},addControls:function(o){var e;return e=function(){var n;return r.off(o,"mouseover",e),n=new Date().getTime(),r.asap(function(){return r.engine!=="gecko"||o.readyState>=3&&o.currentTime<=Math.max(.1,o.duration-.5)||new Date().getTime()>=n+1e3},function(){return o.controls=!0})},r.on(o,"mouseover",e)},onControls:function(o){return f["Show Controls"]&&f["Click Passthrough"]&&o.target.nodeName==="VIDEO"||o.target.controls&&o.target.getBoundingClientRect().bottom-o.clientY<35},download:function(o){var e,n,i;return this.protocol==="blob:"?!0:(o.preventDefault(),i=this,n=i.href,e=i.download,be.file(n,function(a){var l;return a?(l=r.el("a",{href:URL.createObjectURL(a),download:e,hidden:!0}),r.add(I.body,l),l.click(),r.rm(l)):new J("warning","Could not download "+n,20)}))}},t}.call(this),De=function(){var t,s=[].slice;return t={init:function(){var o;if(this.enabled=f["Image Expansion"]&&((o=p.VIEW)==="index"||o==="thread"))return this.EAI=r.el("a",{className:"expand-all-shortcut fa fa-expand",textContent:"EAI",title:"Expand All Images",href:"javascript:;"}),r.on(this.EAI,"click",this.cb.toggleAll),L.addShortcut("expand-all",this.EAI,520),r.on(I,"scroll visibilitychange",this.cb.playVideos),this.videoControls=r.el("span",{className:"video-controls"}),r.extend(this.videoControls,{innerHTML:' <a href="javascript:;" title="You can also contract the video by dragging it to the left.">contract</a>'}),F.Post.push({name:"Image Expansion",cb:this.node})},node:function(){var o;if(this.file&&(this.file.isImage||this.file.isVideo)){if(r.on(this.file.thumbLink,"click",t.cb.toggle),this.isClone){if(this.file.isExpanding)return t.contract(this),t.expand(this);if(this.file.isExpanded&&this.file.isVideo)return Ie.setup(this.file.fullImage),t.setupVideoCB(this),t.setupVideo(this,!((o=this.origin.file.fullImage)!=null&&o.paused)||this.origin.file.wasPlaying,this.file.fullImage.controls)}else if(t.on&&!this.isHidden&&!this.isFetchedQuote&&(f["Expand spoilers"]||!this.file.isSpoiler)&&(f["Expand videos"]||!this.file.isVideo))return t.expand(this)}},cb:{toggle:function(o){var e,n,i;if(!r.modifiedClick(o)&&(n=H.postFromNode(this),e=n.file,!(e.isExpanded&&_.onControls(o))))return o.preventDefault(),!f.Autoplay&&((i=e.fullImage)!=null&&i.paused)?e.fullImage.play():t.toggle(n)},toggleAll:function(){var o,e,n;return r.event("CloseMenu"),e=Oe.getThread(),n=function(i){var a;if(a=i.file,!!(a&&(a.isImage||a.isVideo)&&E.contains(i.nodes.root))&&!(t.on&&(!f["Expand spoilers"]&&a.isSpoiler||!f["Expand videos"]&&a.isVideo||f["Expand from here"]&&L.getTopOf(a.thumb)<0||f["Expand thread only"]&&p.VIEW==="index"&&!e?.contains(a.thumb))))return r.queueTask(o,i)},(t.on=r.hasClass(t.EAI,"expand-all-shortcut"))?(t.EAI.className="contract-all-shortcut fa fa-compress",t.EAI.title="Contract All Images",o=t.expand):(t.EAI.className="expand-all-shortcut fa fa-expand",t.EAI.title="Expand All Images",o=t.contract),p.posts.forEach(function(i){var a,l,d;for(d=[i].concat(s.call(i.clones)),a=0,l=d.length;a<l;a++)i=d[a],n(i)})},playVideos:function(){return p.posts.forEach(function(o){var e,n,i,a,l,d;for(a=[o].concat(s.call(o.clones)),n=0,i=a.length;n<i;n++)o=a[n],e=o.file,e&&e.isVideo&&e.isExpanded&&(l=e.fullImage,d=r.hasAudio(l)&&!l.muted||L.isNodeVisible(l),d&&e.wasPlaying?(delete e.wasPlaying,l.play()):!d&&!l.paused&&(e.wasPlaying=!0,l.pause()))})},setFitness:function(){return r[this.checked?"addClass":"rmClass"](E,this.name.toLowerCase().replace(/\s+/g,"-"))}},toggle:function(o){var e;if(!(o.file.isExpanding||o.file.isExpanded)){o.file.scrollIntoView=f["Scroll into view"],t.expand(o);return}if(t.contract(o),f["Advance on contract"]){for(e=o.nodes.root;(e=r.x("following::div[contains(@class,'postContainer')][1]",e))&&(r(".stub",e)||e.offsetHeight===0););if(e)return L.scrollTo(e)}},contract:function(o){var e,n,i,a,l,d,c,u,h,g,m,b,v;for(l=o.file,(i=l.fullImage)&&(b=L.getTopOf(i),e=b+i.getBoundingClientRect().height,u=I.body.clientHeight,m=window.scrollY),r.rmClass(o.nodes.root,"expanded-image"),r.rmClass(l.thumb,"expanding"),r.rm(l.videoControls),l.thumbLink.href=l.url,l.thumbLink.target="_blank",h=["isExpanding","isExpanded","videoControls","wasPlaying","scrollIntoView"],d=0,c=h.length;d<c;d++)v=h[d],delete l[v];if(i){if(E.contains(i)&&(e<=0?window.scrollBy(0,m-window.scrollY+I.body.clientHeight-u):L.scrollToIfNeeded(o.nodes.root),window.scrollX>0&&window.scrollBy(-window.scrollX,0)),r.off(i,"error",t.error),_.pushCache(i),l.isVideo){_.pause(i),g=t.videoCB;for(a in g)n=g[a],r.off(i,a,n)}return f["Restart when Opened"]&&_.rewind(l.thumb),delete l.fullImage,r.queueTask(function(){if(!(l.isExpanding||l.isExpanded)&&(r.rmClass(i,"full-image"),!i.id))return r.rm(i)})}},expand:function(o,e){var n,i,a,l,d,c;if(i=o.file,d=i.thumb,c=i.thumbLink,a=i.isVideo,!(o.isHidden||i.isExpanding||i.isExpanded))return r.addClass(d,"expanding"),i.isExpanding=!0,i.fullImage?n=i.fullImage:((l=_.cache)!=null?l.dataset.fileID:void 0)===o.fullID+"."+i.index?(n=i.fullImage=_.popCache(),r.on(n,"error",t.error),f["Restart when Opened"]&&n.id!=="ihover"&&_.rewind(n),n.removeAttribute("id")):(n=i.fullImage=r.el(a?"video":"img"),n.dataset.fileID=o.fullID+"."+i.index,r.on(n,"error",t.error),n.src=e||i.url),n.className="full-image",r.after(d,n),a&&(i.videoControls||(i.videoControls=t.videoControls.cloneNode(!0),r.add(i.text,i.videoControls)),c.removeAttribute("href"),c.removeAttribute("target"),n.loop=!0,Ie.setup(n),t.setupVideoCB(o)),a?n.readyState>=n.HAVE_METADATA?t.completeExpand(o):r.on(n,"loadedmetadata",function(){return t.completeExpand(o)}):r.asap(function(){return n.naturalHeight},function(){return t.completeExpand(o)})},completeExpand:function(o){var e,n,i,a,l;if(n=o.file,!!n.isExpanding&&(e=L.getTopOf(n.thumb)+n.thumb.getBoundingClientRect().height,a=I.body.clientHeight,l=window.scrollY,r.addClass(o.nodes.root,"expanded-image"),r.rmClass(n.thumb,"expanding"),n.isExpanded=!0,delete n.isExpanding,E.contains(o.nodes.root)&&e<=0&&window.scrollBy(0,l-window.scrollY+I.body.clientHeight-a),n.scrollIntoView&&(delete n.scrollIntoView,i=Math.min(E.clientHeight-n.fullImage.getBoundingClientRect().bottom-25,L.getBottomOf(n.fullImage)),i<0&&window.scrollBy(0,Math.min(-i,L.getTopOf(n.fullImage)))),n.isVideo))return t.setupVideo(o,f.Autoplay,f["Show Controls"])},setupVideo:function(o,e,n){var i;if(i=o.file.fullImage,!e){i.controls=n;return}if(i.controls=!1,r.asap(function(){return E.contains(i)},function(){return!I.hidden&&L.isNodeVisible(i)?i.play():o.file.wasPlaying=!0}),n)return _.addControls(i)},videoCB:function(){var o;return o=!1,{mouseover:function(){return o=!1},mousedown:function(e){if(e.button===0)return o=!0},mouseup:function(e){if(e.button===0)return o=!1},mouseout:function(e){if((e.buttons&1||o)&&e.clientX<=this.getBoundingClientRect().left)return t.toggle(H.postFromNode(this))}}}(),setupVideoCB:function(o){var e,n,i;i=t.videoCB;for(n in i)e=i[n],r.on(o.file.fullImage,n,e);if(o.file.videoControls)return r.on(o.file.videoControls.firstElementChild,"click",function(){return t.toggle(o)})},error:function(){var o;if(o=H.postFromNode(this),r.rm(this),delete o.file.fullImage,!!(o.file.isExpanding||o.file.isExpanded))return _.decodeError(this,o.file)||_.isFromArchive(this)?t.contract(o):_.error(this,o,o.file,10*r.SECOND,function(e){if((o.file.isExpanding||o.file.isExpanded)&&(t.contract(o),e))return t.expand(o,e)})},menu:{init:function(){var o,e,n,i,a,l;if(t.enabled){n=r.el("span",{textContent:"Image Expansion",className:"image-expansion-link"}),e=t.menu.createSubEntry,l=[],a=de.imageExpansion;for(i in a)o=a[i],l.push(e(i,o[1]));return L.menu.addEntry({el:n,order:105,subEntries:l})}},createSubEntry:function(o,e){var n,i;return i=$.checkbox(o,o),i.title=e,n=i.firstElementChild,(o==="Fit width"||o==="Fit height")&&r.on(n,"change",t.cb.setFitness),r.event("change",null,n),r.on(n,"change",r.cb.checked),{el:i}}}},t}.call(this),re=function(){var t;return t={init:function(){var s;if((this.useFaster=/\S/.test(f.fourchanImageHost))&&p.SITE.software==="yotsuba"&&((s=p.VIEW)==="index"||s==="thread"))return F.Post.push({name:"Image Host Rewriting",cb:this.node})},suggestions:["i.4cdn.org","is2.4chan.org"],host:function(){return f.fourchanImageHost.trim()||"i.4cdn.org"},flashHost:function(){return"i.4cdn.org"},thumbHost:function(){return"i.4cdn.org"},test:function(s){return s==="i.4cdn.org"||t.regex.test(s)},regex:/^is\d*\.4chan(?:nel)?\.org$/,node:function(){var s;if(!this.isClone)return s=t.host(),this.file&&t.test(this.file.url.split("/")[2])&&!/\.swf$/.test(this.file.url)&&(this.file.link.hostname=s,this.file.thumbLink&&(this.file.thumbLink.hostname=s),this.file.url=this.file.link.href),t.fixLinks(N("a",this.nodes.comment))},fixLinks:function(s){var o,e,n,i;for(e=0,n=s.length;e<n;e++)i=s[e],t.test(i.hostname)&&!/\.swf$/.test(i.pathname)&&(o=t.host(),i.hostname!==o&&(i.hostname=o))}},t}.call(this),yt=function(){var t;return t={init:function(){var s;if(!((s=p.VIEW)!=="index"&&s!=="thread")&&(f["Image Hover"]&&F.Post.push({name:"Image Hover",cb:this.node}),f["Image Hover in Catalog"]))return F.CatalogThread.push({name:"Image Hover",cb:this.catalogNode})},node:function(){var s,o,e,n,i;for(n=this.files,i=[],o=0,e=n.length;o<e;o++)s=n[o],(s.isImage||s.isVideo)&&s.thumb&&i.push(r.on(s.thumb,"mouseover",t.mouseover(this,s)));return i},catalogNode:function(){var s;if(s=this.thread.OP.files[0],!!(s&&(s.isImage||s.isVideo)))return r.on(this.nodes.thumb,"mouseover",t.mouseover(this.thread.OP,s))},mouseover:function(s,o){return function(e){var n,i,a,l,d,c,u,h,g,m,b,v;if(E.contains(this)&&(d=o.isVideo,!(o.isExpanding||o.isExpanded||typeof(n=p.SITE).isThumbExpanded=="function"&&n.isThumbExpanded(o))))return a=t.error(s,o),((h=_.cache)!=null?h.dataset.fileID:void 0)===s.fullID+"."+o.index?(i=_.popCache(),r.on(i,"error",a)):(i=r.el(d?"video":"img"),i.dataset.fileID=s.fullID+"."+o.index,r.on(i,"error",a),i.src=o.url),f["Restart when Opened"]&&(_.rewind(i),_.rewind(this)),i.id="ihover",r.add(L.hover,i),d&&(i.loop=!0,i.controls=!1,Ie.setup(i),f.Autoplay&&(i.play(),this.nodeName==="VIDEO"&&(this.currentTime=i.currentTime))),o.dimensions&&(g=function(){var A,w,x,k;for(x=o.dimensions.split("x"),k=[],A=0,w=x.length;A<w;A++)v=x[A],k.push(+v);return k}(),b=g[0],l=g[1],u=E.clientWidth,c=E.clientHeight-$.hover.padding,m=Math.min(1,u/b,c/l),b*=m,l*=m,i.style.maxWidth=b+"px",i.style.maxHeight=l+"px"),$.hover({root:this,el:i,latestEvent:e,endEvents:"mouseout click",height:l,width:b,noRemove:!0,cb:function(){return r.off(i,"error",a),_.pushCache(i),_.pause(i),r.rm(i),i.removeAttribute("style")}})}},error:function(s,o){return function(){if(!_.decodeError(this,o))return _.error(this,s,o,3*r.SECOND,function(e){return function(n){return n?e.src=n+(e.src===n?"?"+Date.now():""):r.rm(e)}}(this))}}},t}.call(this),kt=function(){var t,s=[].slice;return t={init:function(){var o,e,n,i;if(!((e=p.VIEW)!=="index"&&e!=="thread"&&e!=="archive")&&(i=f["Replace JPG"]||f["Replace PNG"]||f["Replace GIF"]||f["Replace WEBM"],!!(f["Image Prefetching"]||i)&&(F.Post.push({name:"Image Replace",cb:this.node}),r.on(I,"PostsInserted",function(){if(t.prefetchEnabled||i)return p.posts.forEach(t.prefetchAll)}),f["Replace WEBM"]&&r.on(I,"scroll visibilitychange 4chanXInitFinished PostsInserted",this.playVideos),!!(f["Image Prefetching"]&&((n=p.VIEW)==="index"||n==="thread")))))return o=r.el("a",{href:"javascript:;",title:"Prefetch Images",className:"fa fa-bolt disabled",textContent:"Prefetch"}),r.on(o,"click",this.toggle),L.addShortcut("prefetch",o,525)},node:function(){var o,e,n,i;if(!this.isClone)for(i=this.files,e=0,n=i.length;e<n;e++)o=i[e],f["Replace WEBM"]&&o.isVideo&&t.replaceVideo(this,o),t.prefetch(this,o)},replaceVideo:function(o,e){var n,i,a,l,d,c;for(d=e.thumb,c=r.el("video",{preload:"none",loop:!0,muted:!0,poster:d.src||d.dataset.src,textContent:d.alt,className:d.className}),c.setAttribute("muted","muted"),c.dataset.md5=d.dataset.md5,l=["height","width","maxHeight","maxWidth"],i=0,a=l.length;i<a;i++)n=l[i],c.style[n]=d.style[n];return c.src=e.url,r.replace(d,c),e.thumb=c,e.videoThumb=!0},prefetch:function(o,e){var n,i,a,l,d,c,u,h,g,m,b,v;if(l=e.isImage,d=e.isVideo,m=e.thumb,v=e.url,!(e.isPrefetched||!(l||d)||o.isHidden||o.thread.isHidden)&&(d?b="WEBM":(b=(u=v.match(/\.([^.]+)$/))!=null?u[1].toUpperCase():void 0,b==="JPEG"&&(b="JPG")),g=f["Replace "+b]&&!/spoiler/.test(m.src||m.dataset.src),!!(g||t.prefetchEnabled)&&!r.hasClass(E,"catalog-mode")&&[o].concat(s.call(o.clones)).some(function(A){return E.contains(A.nodes.root)}))){if(e.isPrefetched=!0,e.videoThumb){for(h=o.clones,a=0,c=h.length;a<c;a++)n=h[a],n.file.thumb.preload="auto";m.preload="auto",r.engine==="gecko"&&r.on(m,"loadeddata",function(){return this.removeAttribute("poster")});return}return i=r.el(l?"img":"video"),d&&(i.preload="auto"),g&&l&&r.on(i,"load",function(){var A,w,x;for(x=o.clones,A=0,w=x.length;A<w;A++)n=x[A],n.file.thumb.src=v;return m.src=v}),i.src=v}},prefetchAll:function(o){var e,n,i,a;for(a=o.files,n=0,i=a.length;n<i;n++)e=a[n],t.prefetch(o,e)},toggle:function(){t.prefetchEnabled=!t.prefetchEnabled,this.classList.toggle("disabled",!t.prefetchEnabled),t.prefetchEnabled&&p.posts.forEach(t.prefetchAll)},playVideos:function(){var o,e;return o=(e=r.id("qp"))!=null?e.firstElementChild:void 0,p.posts.forEach(function(n){var i,a,l,d,c,u,h,g;for(u=[n].concat(s.call(n.clones)),a=0,d=u.length;a<d;a++)for(n=u[a],h=n.files,l=0,c=h.length;l<c;l++)i=h[l],i.videoThumb&&(g=i.thumb,L.isNodeVisible(g)||n.nodes.root===o?g.play():g.pause())})}},t}.call(this),Dt=function(){var t;return t={init:function(){var s;if(f["WEBM Metadata"]&&((s=p.VIEW)==="index"||s==="thread"))return F.Post.push({name:"WEBM Metadata",cb:this.node})},node:function(){var s,o,e,n,i,a;for(a=this.files,e=n=0,i=a.length;n<i;e=++n)o=a[e],/webm$/i.test(o.url)&&(this.isClone?s=r(".webm-title",o.text):(s=r.el("span",{className:"webm-title"}),s.dataset.index=e,r.extend(s,{innerHTML:'<a href="javascript:;"></a>'}),r.add(o.text,[r.tn(" "),s])),s.children.length===1&&r.one(s.lastElementChild,"mouseover focus",t.load))},load:function(){var s;return r.rmClass(this.parentNode,"error"),r.addClass(this.parentNode,"loading"),s=this.parentNode.dataset.index,be.binary(H.postFromNode(this).files[+s].url,function(o){return function(e){var n,i;return r.rmClass(o.parentNode,"loading"),e!=null?(i=t.parse(e),n=r.el("span",{textContent:i||""}),i==null&&r.addClass(o.parentNode,"not-found"),r.before(o,n),o.parentNode.tabIndex=0,I.activeElement===o&&o.parentNode.focus(),o.tabIndex=-1):(r.addClass(o.parentNode,"error"),r.one(o,"click",t.load))}}(this),{Range:"bytes=0-9999"})},parse:function(s){var o,e,n,i,a;for(n=function(){var l,d;for(d=s[e++],l=0;d<128>>l;)l++;for(d^=128>>l;l--&&e<s.length;)d=d<<8^s[e++];return d},e=0;e<s.length;)if(o=n(),i=n(),o===15273){for(a="";i--&&e<s.length;)a+=String.fromCharCode(s[e++]);return decodeURIComponent(escape(a))}else o!==139690087&&o!==88713574&&(e+=i);return null}},t}.call(this),Wt=function(){var t;return t={init:function(){var s;if(((s=p.VIEW)==="index"||s==="thread"||s==="archive")&&f["Reveal Spoiler Thumbnails"])return F.Post.push({name:"Reveal Spoiler Thumbnails",cb:this.node})},node:function(){var s,o,e,n,i;if(!this.isClone)for(n=this.files,o=0,e=n.length;o<e;o++)s=n[o],s.thumb&&s.isSpoiler&&(i=s.thumb,i.removeAttribute("style"),i.style.maxHeight=i.style.maxWidth=this.isReply?"125px":"250px",i.src?i.src=s.thumbURL:i.dataset.src=s.thumbURL)}},t}.call(this),Ve=function(){var t,s=[].indexOf||function(o){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===o)return e;return-1};return t={init:function(){var o,e,n,i,a,l,d;if(((l=p.VIEW)==="index"||l==="thread")&&f.Sauce){for(r.addClass(E,"show-sauce"),a=[],d=f.sauces.split(`
`),o=0,e=d.length;o<e;o++)n=d[o],n[0]!=="#"&&(i=this.parseLink(n))&&a.push(i);if(a.length)return this.links=a,this.link=r.el("a",{target:"_blank",className:"sauce"}),F.Post.push({name:"Sauce",cb:this.node})}},parseLink:function(o){var e,n,i,a,l,d,c,u,h,g;if(!(o=o.trim()))return null;for(c=r.dict(),u=o.split(/;(?=(?:text|boards|types|regexp|sandbox):?)/),n=i=0,a=u.length;i<a;n=++i)d=u[n],n===0?c.url=d:(l=d.match(/^(\w*):?(.*)$/),c[l[1]]=l[2]);if(c.text||(c.text=((h=c.url.match(/(\w+)\.\w+\//))!=null?h[1]:void 0)||"?"),"boards"in c&&(c.boards=ue.parseBoards(c.boards)),"regexp"in c)try{(g=c.regexp.match(/^\/(.*)\/(\w*)$/))?c.regexp=RegExp(g[1],g[2]):c.regexp=RegExp(c.regexp)}catch(m){return e=m,new J("warning",[r.tn("Invalid regexp for Sauce link:"),r.el("br"),r.tn(o),r.el("br"),r.tn(e.message)],60),null}return c},createSauceLink:function(o,e,n){var i,a,l,d,c,u,h,g,m,b;if(l=n.url.match(/[^.]*$/)[0],m=r.dict(),r.extend(m,o),!(!m.boards||m.boards[e.siteID+"/"+e.boardID]||m.boards[e.siteID+"/*"])||!(!m.types||s.call(m.types.split(","),l)>=0)||!(!m.regexp||(h=n.name.match(m.regexp))))return null;for(g=[],b=["url","text"],d=0,u=b.length;d<u;d++)c=b[d],m[c]=m[c].replace(/%(T?URL|IMG|[sh]?MD5|board|name|%|semi|\$\d+)/g,function(v,A){var w;if(A[0]==="$"){if(!h)return v;w=h[A.slice(1)]||""}else if(w=t.formatters[A](e,n,l),w==null)return g.push(A),"";return c==="url"&&A!=="%"&&A!=="semi"&&(/^javascript:/i.test(m.url)&&(w=JSON.stringify(w)),w=encodeURIComponent(w)),w});return typeof(a=p.SITE).areMD5sDeferred=="function"&&a.areMD5sDeferred(e.board)&&g.length&&!g.filter(function(v){return!/^.?MD5$/.test(v)}).length?(i=t.link.cloneNode(!1),i.dataset.skip="1",i):g.length?null:(i=t.link.cloneNode(!1),i.href=m.url,i.textContent=m.text,/^javascript:/i.test(m.url)&&i.removeAttribute("target"),i)},node:function(){var o,e,n,i;if(!this.isClone)for(i=this.files,e=0,n=i.length;e<n;e++)o=i[e],t.file(this,o)},file:function(o,e){var n,i,a,l,d,c,u,h;for(d=[],h=[],u=t.links,n=0,i=u.length;n<i;n++)a=u[n],(l=t.createSauceLink(a,o,e))&&(d.push(r.tn(" "),l),l.dataset.skip&&h.push([a,l]));if(r.add(e.text,d),h.length)return c=new MutationObserver(function(){var g,m,b,v;if(e.text.dataset.md5){for(g=0,m=h.length;g<m;g++)v=h[g],a=v[0],l=v[1],(b=t.createSauceLink(a,o,e))&&r.replace(l,b);return c.disconnect()}}),c.observe(e.text,{attributes:!0})},formatters:{TURL:function(o,e){return e.thumbURL},URL:function(o,e){return e.url},IMG:function(o,e,n){return n==="gif"||n==="jpg"||n==="jpeg"||n==="png"?e.url:e.thumbURL},MD5:function(o,e){return e.MD5},sMD5:function(o,e){var n;return(n=e.MD5)!=null?n.replace(/[+\/=]/g,function(i){return{"+":"-","/":"_","=":""}[i]}):void 0},hMD5:function(o,e){var n;if(e.MD5)return function(){var i,a,l,d;for(l=atob(e.MD5),d=[],i=0,a=l.length;i<a;i++)n=l[i],d.push(("0"+n.charCodeAt(0).toString(16)).slice(-2));return d}().join("")},board:function(o){return o.board.ID},name:function(o,e){return e.name},"%":function(){return"%"},semi:function(){return";"}}},t}.call(this),Ie=function(){var t;return t={init:function(){var s,o,e,n;if(((o=p.VIEW)==="index"||o==="thread")&&(f["Image Expansion"]||f["Image Hover"]||f["Image Hover in Catalog"]||f.Gallery)&&(r.sync("Allow Sound",function(i){var a;return f["Allow Sound"]=i,(a=t.inputs)!=null?a.unmute.checked=i:void 0}),r.sync("Default Volume",function(i){var a;return f["Default Volume"]=i,(a=t.inputs)!=null?a.volume.value=i:void 0}),f["Mouse Wheel Volume"]&&F.Post.push({name:"Mouse Wheel Volume",cb:this.node}),!(typeof(s=p.SITE).noAudio=="function"&&s.noAudio(p.BOARD))))return f["Mouse Wheel Volume"]&&F.CatalogThread.push({name:"Mouse Wheel Volume",cb:this.catalogNode}),e=$.checkbox("Allow Sound","Allow Sound"),e.title=de.main["Images and Videos"]["Allow Sound"][1],n=r.el("label",{title:"Default volume for videos."}),r.extend(n,{innerHTML:'<input name="Default Volume" type="range" min="0" max="1" step="0.01" value="'+T(f["Default Volume"])+'"> Volume'}),this.inputs={unmute:e.firstElementChild,volume:n.firstElementChild},r.on(this.inputs.unmute,"change",r.cb.checked),r.on(this.inputs.volume,"change",r.cb.value),L.menu.addEntry({el:e,order:200}),L.menu.addEntry({el:n,order:201})},setup:function(s){return s.muted=!f["Allow Sound"],s.volume=f["Default Volume"],r.on(s,"volumechange",t.change)},change:function(){var s,o,e,n,i,a;n=this,e=n.muted,a=n.volume,s={"Allow Sound":!e,"Default Volume":a};for(o in s)i=s[o],f[o]===i&&delete s[o];if(r.set(s),r.extend(f,s),t.inputs)return t.inputs.unmute.checked=!e,t.inputs.volume.value=a},node:function(){var s,o,e,n,i;if(!(typeof(s=p.SITE).noAudio=="function"&&s.noAudio(this.board)))for(i=this.files,e=0,n=i.length;e<n;e++)o=i[e],o.isVideo&&(o.thumb&&r.on(o.thumb,"wheel",t.wheel.bind(L.hover)),r.on(r(".file-info",o.text)||o.link,"wheel",t.wheel.bind(o.thumbLink)))},catalogNode:function(){var s;if(s=this.thread.OP.files[0],!!s?.isVideo)return r.on(this.nodes.thumb,"wheel",t.wheel.bind(L.hover))},wheel:function(s){var o,e;if(!(s.shiftKey||s.altKey||s.ctrlKey||s.metaKey)&&(o=r("video:not([data-md5])",this))&&!(o.muted||!r.hasAudio(o)))return e=o.volume+.1,s.deltaY<0&&(e*=1.1),s.deltaY>0&&(e/=1.1),o.volume=r.minmax(e-.1,0,1),s.preventDefault()}},t}.call(this),Re=function(){var t,s=[].slice;return t={init:function(){var o,e,n,i,a;if(((n=p.VIEW)==="index"||n==="thread"||n==="archive")&&f.Linkify&&(f.Embedding||f["Link Title"]||f["Cover Preview"])){for(this.types=r.dict(),i=this.ordered_types,o=0,e=i.length;o<e;o++)a=i[o],this.types[a.key]=a;if(f.Embedding&&p.VIEW!=="archive"&&(this.dialog=$.dialog("embedding",{innerHTML:'<div><div class="move"></div><a href="javascript:;" class="jump" title="Jump to post">\u2192</a><a href="javascript:;" class="close" title="Close">\xD7</a></div><div id="media-embed"><div></div></div>'}),this.media=r("#media-embed",this.dialog),r.one(I,"4chanXInitFinished",this.ready),r.on(I,"IndexRefreshInternal",function(){return p.posts.forEach(function(l){var d,c,u,h,g,m,b;for(m=[l].concat(s.call(l.clones)),c=0,h=m.length;c<h;c++)for(l=m[c],b=l.nodes.embedlinks,u=0,g=b.length;u<g;u++)d=b[u],t.cb.catalogRemove.call(d)})})),f["Link Title"])return r.on(I,"4chanXInitFinished PostsInserted",function(){var l,d,c,u;d=t.types;for(l in d)u=d[l],(c=u.title)!=null&&c.batchSize&&t.flushTitles(u.title)})}},events:function(o){var e,n,i,a;if(p.VIEW!=="archive"){if(f.Embedding)for(i=0,a=o.nodes.embedlinks=N(".embedder",o.nodes.comment);n=a[i++];)r.on(n,"click",t.cb.click),r.hasClass(n,"embedded")&&t.cb.toggle.call(n);if(f["Cover Preview"])for(i=0,a=N(".linkify",o.nodes.comment);n=a[i++];)(e=t.services(n))&&t.preview(e)}},process:function(o,e){var n;if((f.Embedding||f["Link Title"]||f["Cover Preview"])&&!r.x("ancestor::pre",o)&&(n=t.services(o))&&(n.post=e,f.Embedding&&p.VIEW!=="archive"&&t.embed(n),f["Link Title"]&&t.title(n),f["Cover Preview"]&&p.VIEW!=="archive"))return t.preview(n)},services:function(o){var e,n,i,a,l,d;for(e=o.href,l=t.ordered_types,n=0,i=l.length;n<i;n++)if(d=l[n],a=d.regExp.exec(e))return{key:d.key,uid:a[1],options:a[2],link:o}},embed:function(o){var e,n,i,a,l,d,c,u,h,g;i=o.key,h=o.uid,d=o.options,a=o.link,c=o.post,n=a.href,r.addClass(a,i.toLowerCase()),e=r.el("a",{className:"embedder",href:"javascript:;"},{innerHTML:"(<span>un</span>embed)"}),u={key:i,uid:h,options:d,href:n};for(l in u)g=u[l],e.dataset[l]=g;if(r.on(e,"click",t.cb.click),r.after(a,[r.tn(" "),e]),c.nodes.embedlinks.push(e),f["Auto-embed"]&&!f["Floating Embeds"]&&!c.isFetchedQuote)return r.hasClass(E,"catalog-mode")?r.addClass(e,"embed-removed"):t.cb.toggle.call(e)},ready:function(){if(Z.isThisPageLegit())return r.addClass(t.dialog,"empty"),r.on(r(".close",t.dialog),"click",t.closeFloat),r.on(r(".move",t.dialog),"mousedown",t.dragEmbed),r.on(r(".jump",t.dialog),"click",function(){if(E.contains(t.lastEmbed))return L.scrollTo(t.lastEmbed)}),r.add(I.body,t.dialog)},closeFloat:function(){return delete t.lastEmbed,r.addClass(t.dialog,"empty"),r.replace(t.media.firstChild,r.el("div"))},dragEmbed:function(){var o;if(o=t.media.style,t.dragEmbed.mouseup){r.off(I,"mouseup",t.dragEmbed),t.dragEmbed.mouseup=!1,o.pointerEvents="";return}return r.on(I,"mouseup",t.dragEmbed),t.dragEmbed.mouseup=!0,o.pointerEvents="none"},title:function(o){var e,n,i,a,l,d;if(e=o.key,d=o.uid,i=o.options,n=o.link,a=o.post,!!(l=t.types[e].title))if(r.addClass(n,e.toLowerCase()),l.batchSize){if((l.queue||(l.queue=[])).push(o),l.queue.length>=l.batchSize)return t.flushTitles(l)}else return be.cache(l.api(d),function(){return t.cb.title(this,o)})},flushTitles:function(o){var e,n,i;if(i=o.queue,!!i?.length)return o.queue=[],e=function(){var a,l,d;for(l=0,d=i.length;l<d;l++)a=i[l],t.cb.title(this,a)},be.cache(o.api(function(){var a,l,d;for(d=[],a=0,l=i.length;a<l;a++)n=i[a],d.push(n.uid);return d}()),e)},preview:function(o){var e,n,i,a;if(e=o.key,a=o.uid,n=o.link,!!(i=t.types[e].preview))return r.on(n,"mouseover",function(l){var d,c,u;return u=i.url(a),c=i.height,d=r.el("img",{src:u,id:"ihover"}),r.add(L.hover,d),$.hover({root:n,el:d,latestEvent:l,endEvents:"mouseout click",height:c})})},cb:{click:function(o){var e;return o.preventDefault(),!r.hasClass(this,"embedded")&&(f["Floating Embeds"]||r.hasClass(E,"catalog-mode"))?(e=t.media.firstChild)?(r.replace(e,t.cb.embed(this)),t.lastEmbed=H.postFromNode(this).nodes.root,r.rmClass(t.dialog,"empty")):void 0:t.cb.toggle.call(this)},toggle:function(){return r.hasClass(this,"embedded")?r.rm(this.nextElementSibling):r.after(this,t.cb.embed(this)),r.toggleClass(this,"embedded")},embed:function(o){var e,n,i;return e=r.el("div",{className:"media-embed"}),r.add(e,n=(i=t.types[o.dataset.key]).el(o)),n.style.cssText=i.style!=null?i.style:"border: none; width: 640px; height: 360px;",e},catalogRemove:function(){var o;if(o=r.hasClass(E,"catalog-mode"),o&&r.hasClass(this,"embedded")||!o&&r.hasClass(this,"embed-removed"))return t.cb.toggle.call(this),r.toggleClass(this,"embed-removed")},title:function(o,e){var n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C;if(l=e.key,C=e.uid,g=e.options,u=e.link,m=e.post,w=t.types[l].title,x=o.status,(x===200||x===304)&&w.status&&(x=w.status(o.response)[0]),!!x)for(k="["+l+"] "+function(){switch(x){case 200:case 304:return k=w.text(o.response,C),typeof k=="string"?k:k=u.textContent;case 404:return"Not Found";case 403:case 401:return"Forbidden or Private";default:return x+"'d"}}(),u.dataset.original=u.textContent,u.textContent=k,v=m.clones,i=0,d=v.length;i<d;i++)for(b=v[i],A=N("a.linkify",b.nodes.comment),a=0,c=A.length;a<c;a++)h=A[a],h.href===u.href&&((n=h.dataset).original==null&&(n.original=h.textContent),h.textContent=k)}},ordered_types:[{key:"audio",regExp:/^[^?#]+\.(?:mp3|m4a|oga|wav|flac)(?:[?#]|$)/i,style:"",el:function(o){return r.el("audio",{controls:!0,preload:"auto",src:o.dataset.href})}},{key:"image",regExp:/^[^?#]+\.(?:gif|png|jpg|jpeg|bmp|webp)(?::\w+)?(?:[?#]|$)/i,style:"",el:function(o){return r.el("div",{innerHTML:'<a target="_blank" href="'+T(o.dataset.href)+'"><img src="'+T(o.dataset.href)+'" style="max-width: 80vw; max-height: 80vh;"></a>'})}},{key:"video",regExp:/^[^?#]+\.(?:og[gv]|webm|mp4)(?:[?#]|$)/i,style:"max-width: 80vw; max-height: 80vh;",el:function(o){var e;return e=r.el("video",{hidden:!0,controls:!0,preload:"auto",src:o.dataset.href,loop:re.test(o.dataset.href.split("/")[2])}),r.on(e,"loadedmetadata",function(){return e.videoHeight===0&&e.parentNode?r.replace(e,t.types.audio.el(o)):e.hidden=!1}),e}},{key:"PeerTube",regExp:/^(\w+:\/\/[^\/]+\/videos\/watch\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12})(.*)/,el:function(o){var e,n,i;return n=(i=o.dataset.options.match(/[?&](start=\w+)/))?"?"+i[1]:"",e=r.el("iframe",{src:o.dataset.uid.replace("/videos/watch/","/videos/embed/")+n}),e.setAttribute("allowfullscreen","true"),e}},{key:"BitChute",regExp:/^\w+:\/\/(?:www\.)?bitchute\.com\/video\/([\w\-]+)/,el:function(o){var e;return e=r.el("iframe",{src:"https://www.bitchute.com/embed/"+o.dataset.uid+"/"}),e.setAttribute("allowfullscreen","true"),e}},{key:"Clyp",regExp:/^\w+:\/\/(?:www\.)?clyp\.it\/(\w{8})/,style:"border: 0; width: 640px; height: 160px;",el:function(o){return r.el("iframe",{src:"https://clyp.it/"+o.dataset.uid+"/widget"})},title:{api:function(o){return"https://api.clyp.it/oembed?url=https://clyp.it/"+o},text:function(o){return o.title}}},{key:"Dailymotion",regExp:/^\w+:\/\/(?:(?:www\.)?dailymotion\.com\/(?:embed\/)?video|dai\.ly)\/([A-Za-z0-9]+)[^?]*(.*)/,el:function(o){var e,n,i;return n=(i=o.dataset.options.match(/[?&](start=\d+)/))?"?"+i[1]:"",e=r.el("iframe",{src:"//www.dailymotion.com/embed/video/"+o.dataset.uid+n}),e.setAttribute("allowfullscreen","true"),e},title:{api:function(o){return"https://api.dailymotion.com/video/"+o},text:function(o){return o.title}},preview:{url:function(o){return"https://www.dailymotion.com/thumbnail/video/"+o},height:240}},{key:"Gfycat",regExp:/^\w+:\/\/(?:www\.)?gfycat\.com\/(?:iframe\/)?(\w+)/,el:function(o){var e;return e=r.el("iframe",{src:"//gfycat.com/ifr/"+o.dataset.uid}),e.setAttribute("allowfullscreen","true"),e}},{key:"Gist",regExp:/^\w+:\/\/gist\.github\.com\/[\w\-]+\/(\w+)/,style:"",el:function(){var o;return o=0,function(e){var n;return n=r.el("pre",{hidden:!0,id:"gist-embed-"+o++}),be.cache("https://api.github.com/gists/"+e.dataset.uid,function(){return n.textContent=Object.values(this.response.files)[0].content,n.className="prettyprint",r.global(function(){return typeof window.prettyPrint=="function"?window.prettyPrint(function(){},document.getElementById(document.currentScript.dataset.id).parentNode):void 0},{id:n.id}),n.hidden=!1}),n}}(),title:{api:function(o){return"https://api.github.com/gists/"+o},text:function(o){var e,n;n=o.files;for(e in n)if(n.hasOwnProperty(e))return e}}},{key:"InstallGentoo",regExp:/^\w+:\/\/paste\.installgentoo\.com\/view\/(?:raw\/|download\/|embed\/)?(\w+)/,el:function(o){return r.el("iframe",{src:"https://paste.installgentoo.com/view/embed/"+o.dataset.uid})}},{key:"LiveLeak",regExp:/^\w+:\/\/(?:\w+\.)?liveleak\.com\/.*\?.*[tif]=(\w+)/,el:function(o){var e;return e=r.el("iframe",{src:"https://www.liveleak.com/e/"+o.dataset.uid}),e.setAttribute("allowfullscreen","true"),e}},{key:"Loopvid",regExp:/^\w+:\/\/(?:www\.)?loopvid.appspot.com\/#?((?:pf|kd|lv|gd|gh|db|dx|nn|cp|wu|ig|ky|mf|m2|pc|1c|pi|ni|wl|ko|mm|ic|gc)\/[\w\-\/]+(?:,[\w\-\/]+)*|fc\/\w+\/\d+|https?:\/\/.+)/,style:"max-width: 80vw; max-height: 80vh;",el:function(o){var e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C;if(i=r.el("video",{controls:!0,preload:"auto",loop:!0}),/^http/.test(o.dataset.uid))return r.add(i,r.el("source",{src:o.dataset.uid})),i;for(v=o.dataset.uid.match(/(\w+)\/(.*)/),e=v[0],a=v[1],b=v[2],x=function(){switch(a){case"gd":case"wu":case"fc":return[""];case"gc":return["giant","fat","zippy"];default:return[".webm",".mp4"]}}(),A=b.split(","),l=0,u=A.length;l<u;l++)for(m=A[l],d=0,h=x.length;d<h;d++)for(w=x[d],n=""+m+w,C=function(){switch(a){case"pf":return["https://kastden.org/_loopvid_media/pf/"+n,"https://web.archive.org/web/2/http://a.pomf.se/"+n];case"kd":return["https://kastden.org/loopvid/"+n];case"lv":return["https://lv.kastden.org/"+n];case"gd":return["https://docs.google.com/uc?export=download&id="+n];case"gh":return["https://googledrive.com/host/"+n];case"db":return["https://dl.dropboxusercontent.com/u/"+n];case"dx":return["https://dl.dropboxusercontent.com/"+n];case"nn":return["https://kastden.org/_loopvid_media/nn/"+n];case"cp":return["https://copy.com/"+n];case"wu":return["http://webmup.com/"+n+"/vid.webm"];case"ig":return["https://i.imgur.com/"+n];case"ky":return["https://kastden.org/_loopvid_media/ky/"+n];case"mf":return["https://kastden.org/_loopvid_media/mf/"+n,"https://web.archive.org/web/2/https://d.maxfile.ro/"+n];case"m2":return["https://kastden.org/_loopvid_media/m2/"+n];case"pc":return["https://kastden.org/_loopvid_media/pc/"+n,"https://web.archive.org/web/2/http://a.pomf.cat/"+n];case"1c":return["http://b.1339.cf/"+n];case"pi":return["https://kastden.org/_loopvid_media/pi/"+n,"https://web.archive.org/web/2/https://u.pomf.is/"+n];case"ni":return["https://kastden.org/_loopvid_media/ni/"+n,"https://web.archive.org/web/2/https://u.nya.is/"+n];case"wl":return["http://webm.land/media/"+n];case"ko":return["https://kordy.kastden.org/loopvid/"+n];case"mm":return["https://kastden.org/_loopvid_media/mm/"+n,"https://web.archive.org/web/2/https://my.mixtape.moe/"+n];case"ic":return["https://media.8ch.net/file_store/"+n];case"fc":return["//"+re.host()+"/"+n+".webm"];case"gc":return["https://"+w+".gfycat.com/"+m+".webm"]}}(),c=0,g=C.length;c<g;c++)k=C[c],r.add(i,r.el("source",{src:k}));return i}},{key:"Openings.moe",regExp:/^\w+:\/\/openings.moe\/\?video=([^.&=]+)/,style:"width: 1280px; height: 720px; max-width: 80vw; max-height: 80vh;",el:function(o){var e;return e=r.el("iframe",{src:"https://openings.moe/?video="+o.dataset.uid}),e.setAttribute("allowfullscreen","true"),e}},{key:"Pastebin",regExp:/^\w+:\/\/(?:\w+\.)?pastebin\.com\/(?!u\/)(?:[\w.]+(?:\/|\?i\=))?(\w+)/,el:function(o){var e;return e=r.el("iframe",{src:"//pastebin.com/embed_iframe.php?i="+o.dataset.uid})}},{key:"SoundCloud",regExp:/^\w+:\/\/(?:www\.)?(?:soundcloud\.com\/|snd\.sc\/)([\w\-\/]+)/,style:"border: 0; width: 500px; height: 400px;",el:function(o){return r.el("iframe",{src:"https://w.soundcloud.com/player/?visual=true&show_comments=false&url=https%3A%2F%2Fsoundcloud.com%2F"+encodeURIComponent(o.dataset.uid)})},title:{api:function(o){return location.protocol+"//soundcloud.com/oembed?format=json&url=https%3A%2F%2Fsoundcloud.com%2F"+encodeURIComponent(o)},text:function(o){return o.title}}},{key:"StrawPoll",regExp:/^\w+:\/\/(?:www\.)?strawpoll\.me\/(?:embed_\d+\/)?(\d+(?:\/r)?)/,style:"border: 0; width: 600px; height: 406px;",el:function(o){return r.el("iframe",{src:"https://www.strawpoll.me/embed_1/"+o.dataset.uid})}},{key:"Streamable",regExp:/^\w+:\/\/(?:www\.)?streamable\.com\/(\w+)/,el:function(o){var e;return e=r.el("iframe",{src:"https://streamable.com/o/"+o.dataset.uid}),e.setAttribute("allowfullscreen","true"),e},title:{api:function(o){return"https://api.streamable.com/oembed?url=https://streamable.com/"+o},text:function(o){return o.title}}},{key:"TwitchTV",regExp:/^\w+:\/\/(?:www\.|secure\.|clips\.|m\.)?twitch\.tv\/(\w[^#\&\?]*)/,el:function(o){var e,n,i,a;return n=o.dataset.href.match(/^\w+:\/\/(?:(clips\.)|\w+\.)?twitch\.tv\/(?:\w+\/)?(clip\/)?(\w[^#\&\?]*)/),n[1]||n[2]?a="//clips.twitch.tv/embed?clip="+n[3]+"&parent="+location.hostname:(n=o.dataset.uid.match(/(\w+)(?:\/(?:v\/)?(\d+))?/),a="//player.twitch.tv/?"+(n[2]?"video=v"+n[2]:"channel="+n[1])+"&autoplay=false&parent="+location.hostname,(i=o.dataset.href.match(/\bt=(\w+)/))&&(a+="&time="+i[1])),e=r.el("iframe",{src:a}),e.setAttribute("allowfullscreen","true"),e}},{key:"Twitter",regExp:/^\w+:\/\/(?:www\.|mobile\.)?twitter\.com\/(\w+\/status\/\d+)/,style:"border: none; width: 550px; height: 250px; overflow: hidden; resize: both;",el:function(o){var e,n,i;return n=r.el("iframe"),r.on(n,"load",function(){return this.contentWindow.postMessage({element:"t",query:"height"},"https://twitframe.com")}),i=function(a){if(a.source===n.contentWindow&&a.origin==="https://twitframe.com")return r.off(window,"message",i),(e||n).style.height=+r.minmax(a.data.height,250,.8*E.clientHeight)+"px"},r.on(window,"message",i),n.src="https://twitframe.com/show?url=https://twitter.com/"+o.dataset.uid,r.engine==="gecko"?(n.style.cssText="border: none; width: 100%; height: 100%;",e=r.el("div"),r.add(e,n),e):n}},{key:"VidLii",regExp:/^\w+:\/\/(?:www\.)?vidlii\.com\/watch\?v=(\w{11})/,style:"border: none; width: 640px; height: 392px;",el:function(o){var e;return e=r.el("iframe",{src:"https://www.vidlii.com/embed?v="+o.dataset.uid+"&a=0"}),e.setAttribute("allowfullscreen","true"),e}},{key:"Vimeo",regExp:/^\w+:\/\/(?:www\.)?vimeo\.com\/(\d+)/,el:function(o){var e;return e=r.el("iframe",{src:"//player.vimeo.com/video/"+o.dataset.uid+"?wmode=opaque"}),e.setAttribute("allowfullscreen","true"),e},title:{api:function(o){return"https://vimeo.com/api/oembed.json?url=https://vimeo.com/"+o},text:function(o){return o.title}}},{key:"Vine",regExp:/^\w+:\/\/(?:www\.)?vine\.co\/v\/(\w+)/,style:"border: none; width: 500px; height: 500px;",el:function(o){return r.el("iframe",{src:"https://vine.co/v/"+o.dataset.uid+"/card"})}},{key:"Vocaroo",regExp:/^\w+:\/\/(?:(?:www\.|old\.)?vocaroo\.com|voca\.ro)\/((?:i\/)?\w+)/,style:"",el:function(o){var e;return e=r.el("iframe"),e.width=300,e.height=60,e.setAttribute("frameborder",0),e.src="https://vocaroo.com/embed/"+o.dataset.uid.replace(/^i\//,"")+"?autoplay=0",e}},{key:"YouTube",regExp:/^\w+:\/\/(?:youtu.be\/|[\w.]*youtube[\w.]*\/.*(?:v=|\bembed\/|\bv\/))([\w\-]{11})(.*)/,el:function(o){var e,n;return n=o.dataset.options.match(/\b(?:star)?t\=(\w+)/),n&&(n=n[1]),n&&!/^\d+$/.test(n)&&(n+=" 0h0m0s",n=3600*n.match(/(\d+)h/)[1]+60*n.match(/(\d+)m/)[1]+1*n.match(/(\d+)s/)[1]),e=r.el("iframe",{src:"//www.youtube.com/embed/"+o.dataset.uid+"?rel=0&wmode=opaque"+(n?"&start="+n:"")}),e.setAttribute("allowfullscreen","true"),e},title:{api:function(o){return"https://www.youtube.com/oembed?url=https%3A//www.youtube.com/watch%3Fv%3D"+o+"&format=json"},text:function(o){return o.title},status:function(o){var e;return o.error?(e=o.error.match(/^(\d*)\s*(.*)/),[+e[1],e[2]]):[200,"OK"]}},preview:{url:function(o){return"https://img.youtube.com/vi/"+o+"/0.jpg"},height:360}}]},t}.call(this),It=function(){var t;return t={init:function(){var s;if(!((s=p.VIEW)!=="index"&&s!=="thread"&&s!=="archive"||!f.Linkify))return f["Comment Expansion"]&&Ae.callbacks.push(this.node),F.Post.push({name:"Linkify",cb:this.node}),Re.init()},node:function(){var s,o,e,n,i,a,l,d;if(this.isClone)return Re.events(this);if(t.regString.test(this.info.comment)){for(d=N("a",this.nodes.comment),o=0,n=d.length;o<n;o++)a=d[o],typeof(s=p.SITE).isLinkified=="function"&&s.isLinkified(a)&&(r.addClass(a,"linkify"),re.useFaster&&re.fixLinks([a]),Re.process(a,this));for(l=t.process(this.nodes.comment),re.useFaster&&re.fixLinks(l),e=0,i=l.length;e<i;e++)a=l[e],Re.process(a,this)}},process:function(s){var o,e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x;for(w=/[^\s"]+/g,A=/[\s"]/,v=r.X(".//br|.//text()",s),i=0,d=[];s=v.snapshotItem(i++);)if(o=s.data,!(!o||s.parentElement.nodeName==="A"))for(;m=w.exec(o);){if(a=m.index,n=s,x=m[0],(l=a+x.length)===o.length)for(w.lastIndex=0;b=v.snapshotItem(i++);){if(b.nodeName==="BR"||b.parentElement.nodeName==="P"&&!b.previousSibling){if((c=x.match(/(https?:\/\/)?([a-z\d-]+\.)*[a-z\d-]+$/i))&&(u=(h=v.snapshotItem(i))!=null&&(g=h.data)!=null?g.match(/^(\.[a-z\d-]+)*\//i):void 0)&&(c[0]+u[0]).search(t.regString)===0)continue;break}if(b.parentElement.nodeName==="A"&&!t.regString.test(x))break;if(n=b,o=b.data,e=A.exec(o)){x+=o.slice(0,e.index),w.lastIndex=l=e.index,i--;break}else l=o.length,x+=o}if(t.regString.test(x)&&d.push(t.makeRange(s,n,a,l)),!(w.lastIndex&&s===n))break}for(i=d.length;i--;)d[i]=t.makeLink(d[i]);return d},regString:/((https?|mailto|git|magnet|ftp|irc):([a-z\d%\/?])|([-a-z\d]+[.])+(aero|asia|biz|cat|com|coop|dance|info|int|jobs|mobi|moe|museum|name|net|org|post|pro|tel|travel|xxx|xyz|edu|gov|mil|[a-z]{2})([:\/]|(?![^\s"]))|[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}|[-\w\d.@]+@[a-z\d.-]+\.[a-z\d])/i,makeRange:function(s,o,e,n){var i;return i=document.createRange(),i.setStart(s,e),i.setEnd(o,n),i},makeLink:function(s){var o,e,n,i,a;if(a=s.toString(),n=a.search(t.regString),n>0){for(a=a.slice(n);s.startOffset+n>=s.startContainer.data.length;)n--;n&&s.setStart(s.startContainer,s.startOffset+n)}for(n=0;/[)\]}>.,]/.test(i=a.charAt(a.length-(1+n)))&&(/[.,]/.test(i)||a.match(/[()\[\]{}<>]/g).length%2);)n++;if(n){for(a=a.slice(0,-n);s.endOffset-n<0;)n--;n&&s.setEnd(s.endContainer,s.endOffset-n)}return/((mailto|magnet):|.+:\/\/)/.test(a)||(a=(/@/.test(a)?"mailto:":"http://")+a),(e=a.match(/^(https?:\/\/[^\/]*%[0-9a-f]{2})(.*)$/i))&&(a=e[1].replace(/%([0-9a-f]{2})/ig,function(l,d){return d==="25"?l:String.fromCharCode(parseInt(d,16))})+e[2]),o=r.el("a",{className:"linkify",rel:"noreferrer noopener",target:"_blank",href:a}),r.add(o,s.extractContents()),s.insertNode(o),o}},t}.call(this),ct=function(){var t;return t={init:function(){var s,o,e,n,i,a,l;if(p.SITE.software==="yotsuba"&&((i=p.VIEW)==="index"||i==="thread")&&f.Menu&&f["Archive Link"]){for(s=r.el("div",{textContent:"Archive"}),o={el:s,order:60,open:function(d){var c,u,h;return c=d.ID,h=d.thread,u=d.board,!!ne.to("thread",{postID:c,threadID:h.ID,boardID:u.ID})},subEntries:[]},a=[["Post","post"],["Name","name"],["Tripcode","tripcode"],["Capcode","capcode"],["Subject","subject"],["Flag","country"],["Filename","filename"],["Image MD5","MD5"]],e=0,n=a.length;e<n;e++)l=a[e],o.subEntries.push(this.createSubEntry(l[0],l[1]));return ie.menu.addEntry(o)}},createSubEntry:function(s,o){var e,n;return e=r.el("a",{textContent:s,target:"_blank"}),n=o==="post"?function(i){var a,l,d;return a=i.ID,d=i.thread,l=i.board,e.href=ne.to("thread",{postID:a,threadID:d.ID,boardID:l.ID}),!0}:function(i){var a,l,d;return l=o==="country"&&i.info.flagCodeTroll?"troll_country":o,d=o==="country"?i.info.flagCode||((a=i.info.flagCodeTroll)!=null?a.toLowerCase():void 0):ue.values(o,i)[0],d?(e.href=ne.to("search",{boardID:i.board.ID,type:l,value:d,isSearch:!0}),!0):!1},{el:e,open:n}}},t}.call(this),pt=function(){var t;return t={init:function(){var s,o;if(((o=p.VIEW)==="index"||o==="thread")&&f.Menu&&f["Copy Text Link"])return s=r.el("a",{className:"copy-text-link",href:"javascript:;",textContent:"Copy Text"}),r.on(s,"click",t.copy),ie.menu.addEntry({el:s,order:12,open:function(e){return t.text=(e.origin||e).commentOrig(),!0}})},copy:function(){var s;s=r.el("textarea",{className:"copy-text-element",value:t.text}),r.add(I.body,s),s.select();try{I.execCommand("copy")}catch{}return r.rm(s)}},t}.call(this),gt=function(){var t;return t={auto:[r.dict(),r.dict()],init:function(){var s,o,e,n,i,a;if(((a=p.VIEW)==="index"||a==="thread")&&f.Menu&&f["Delete Link"])return s=r.el("div",{className:"delete-link",textContent:"Delete"}),n=r.el("a",{className:"delete-post",href:"javascript:;"}),o=r.el("a",{className:"delete-file",href:"javascript:;"}),this.nodes={menu:s.firstChild,links:[n,o]},i={el:n,open:function(){return n.textContent=t.linkText(!1),r.on(n,"click",t.toggle),!0}},e={el:o,open:function(l){var d;return d=l.file,!d||d.isDead?!1:(o.textContent=t.linkText(!0),r.on(o,"click",t.toggle),!0)}},ie.menu.addEntry({el:s,order:40,open:function(l){return l.isDead?!1:(t.post=l,t.nodes.menu.textContent=t.menuText(),t.cooldown.start(l),!0)},subEntries:[i,e]})},menuText:function(){var s;return(s=t.cooldown.seconds[t.post.fullID])?"Delete ("+s+")":"Delete"},linkText:function(s){var o;return o=s?"File":"Post",t.auto[+s][t.post.fullID]&&(o="Deleting "+o.toLowerCase()+"..."),o},toggle:function(){var s,o,e;if(e=t.post,o=r.hasClass(this,"delete-file"),s=t.auto[+o],s[e.fullID]?delete s[e.fullID]:s[e.fullID]=!0,this.textContent=t.linkText(o),!t.cooldown.seconds[e.fullID])return t.delete(e,o)},delete:function(s,o){var e,n;return n=t.nodes.links[+o],delete t.auto[+o][s.fullID],s.fullID===t.post.fullID&&r.off(n,"click",t.toggle),e={mode:"usrdel",onlyimgdel:o,pwd:y.persona.getPassword()},e[+s.ID]="delete",r.ajax(r.id("delform").action.replace("/"+p.BOARD+"/","/"+s.board+"/"),{responseType:"document",withCredentials:!0,onloadend:function(){return t.load(n,s,o,this.response)},form:r.formData(e)})},load:function(s,o,e,n){var i,a;if(!n){new J("warning","Connection error, please retry.",20),o.fullID===t.post.fullID&&r.on(s,"click",t.toggle);return}if(s.textContent=t.linkText(e),n.title==="4chan - Banned")return i=r.el("span",{innerHTML:'You can&#039;t delete posts because you are <a href="//www.4chan.org/banned" target="_blank">banned</a>.'}),new J("warning",i,20);if(a=n.getElementById("errmsg")){if(new J("warning",a.textContent,20),o.fullID===t.post.fullID&&r.on(s,"click",t.toggle),y.cooldown.data&&f.Cooldown&&/\bwait\b/i.test(a.textContent))return t.cooldown.start(o,5),t.auto[+e][o.fullID]=!0,t.nodes.links[+e].textContent=t.linkText(e)}else if(e||y.cooldown.delete(o),n.title==="Updating index..."&&(o.origin||o).kill(e),o.fullID===t.post.fullID)return s.textContent="Deleted"},cooldown:{seconds:r.dict(),start:function(s,o){if(t.cooldown.seconds[s.fullID]==null&&(o==null&&(o=y.cooldown.secondsDeletion(s)),o>0))return t.cooldown.seconds[s.fullID]=o,t.cooldown.count(s)},count:function(s){var o,e,n,i;if(s.fullID===t.post.fullID&&(t.nodes.menu.textContent=t.menuText()),t.cooldown.seconds[s.fullID]>0&&f.Cooldown)t.cooldown.seconds[s.fullID]--,setTimeout(t.cooldown.count,1e3,s);else for(delete t.cooldown.seconds[s.fullID],i=[!1,!0],e=0,n=i.length;e<n;e++)o=i[e],t.auto[+o][s.fullID]&&t.delete(s,o)}}},t}.call(this),bt=function(){var t;return t={init:function(){var s,o;if(((o=p.VIEW)==="index"||o==="thread")&&f.Menu&&f["Download Link"])return s=r.el("a",{className:"download-link",textContent:"Download file"}),r.on(s,"click",_.download),ie.menu.addEntry({el:s,order:100,open:function(e){var n;return n=e.file,n?(s.href=n.url,s.download=n.name,!0):!1}})}},t}.call(this),ie=function(){var t;return t={init:function(){var s;if(((s=p.VIEW)==="index"||s==="thread")&&f.Menu)return this.button=r.el("a",{className:"menu-button",href:"javascript:;"}),r.extend(this.button,{innerHTML:'<i class="fa fa-angle-down"></i>'}),this.menu=new $.Menu("post"),F.Post.push({name:"Menu",cb:this.node}),F.CatalogThread.push({name:"Menu",cb:this.catalogNode})},node:function(){var s;if(this.isClone){s=r(".menu-button",this.nodes.info),r.rmClass(s,"active"),r.rm(r(".dialog",this.nodes.info)),t.makeButton(this,s);return}return r.add(this.nodes.info,t.makeButton(this))},catalogNode:function(){return r.after(this.nodes.icons,t.makeButton(this.thread.OP))},makeButton:function(s,o){return o||(o=t.button.cloneNode(!0)),r.on(o,"click",function(e){return t.menu.toggle(e,this,s)}),o}},t}.call(this),Qt=function(){var t;return t={init:function(){var s,o;if(((o=p.VIEW)==="index"||o==="thread")&&f.Menu&&f["Report Link"])return s=r.el("a",{className:"report-link",href:"javascript:;",textContent:"Report"}),r.on(s,"click",t.report),ie.menu.addEntry({el:s,order:10,open:function(e){return t.url="//sys."+location.hostname.split(".")[1]+".org/"+e.board+"/imgboard.php?mode=report&no="+e,I.cookie.indexOf("pass_enabled=1")>=0?t.dims="width=350,height=275":t.dims="width=400,height=550",!0}})},report:function(){var s,o,e,n;return n=t.url,s=t.dims,o=Date.now(),e="toolbar=0,scrollbars=1,location=0,status=1,menubar=0,resizable=1,"+s,window.open(n,o,e)}},t}.call(this),dt=function(){var t;return t={init:function(){var s,o,e,n;if(f["Disable Autoplaying Sounds"]){for(r.addClass(E,"anti-autoplay"),n=N("audio[autoplay]",E),o=0,e=n.length;o<e;o++)s=n[o],this.stop(s);return window.addEventListener("loadstart",function(i){return function(a){return i.stop(a.target)}}(this),!0),F.Post.push({name:"Disable Autoplaying Sounds",cb:this.node}),r.ready(function(i){return function(){return i.process(I.body)}}(this))}},stop:function(s){if(s.autoplay&&(s.pause(),s.autoplay=!1,!s.controls))return s.controls=!0,r.addClass(s,"controls-added")},node:function(){return t.process(this.nodes.comment)},process:function(s){var o,e,n,i,a,l,d,c;for(d=N('iframe[src*="youtube"][src*="autoplay=1"]',s),o=0,i=d.length;o<i;o++)e=d[o],t.processVideo(e,"src");for(c=N('object[data*="youtube"][data*="autoplay=1"]',s),n=0,a=c.length;n<a;n++)l=c[n],t.processVideo(l,"data")},processVideo:function(s,o){return s[o]=s[o].replace(/\?autoplay=1&?/,"?").replace("&autoplay=1",""),window.getComputedStyle(s).display==="none"&&(s.style.display="block"),r.addClass(s,"autoplay-removed")}},t}.call(this),ut=function(){var t,s=[].slice;return t={init:function(){if(f["Custom Board Titles"]&&(this.db=new fe("customTitles",null,!0)),r.asap(function(){return I.body},function(){return r.asap(function(){return r("hr")},t.ready)}),p.BOARD.ID!=="f")return Z.ready(function(){return r.queueTask(t.load)})},ready:function(){var o,e;if(o=r(".boardBanner"),e=o.children,p.VIEW==="thread"&&f["Remove Thread Excerpt"]&&t.setTitle(e[1].textContent),e[0].title="Click to change",r.on(e[0],"click",t.cb.toggle),f["Custom Board Titles"]&&(t.custom(e[1]),e[2]))return t.custom(e[2])},load:function(){var o,e;if(o=r.id("bannerCnt"),!o.firstChild)return e=r.el("img",{alt:"4chan",src:"//s.4cdn.org/image/title/"+o.dataset.src}),r.add(o,e)},setTitle:function(o){return te.title!=null?(te.title=o,te.update()):I.title=o},cb:{toggle:function(){var o,e,n;return(n=t.choices)!=null&&n.length||(t.choices=f.knownBanners.split(",").slice()),e=Math.floor(t.choices.length*Math.random()),o=t.choices.splice(e,1),r("img",this.parentNode).src="//s.4cdn.org/image/title/"+o},click:function(o){var e,n,i,a,l,d;if(o.ctrlKey||o.metaKey){for((e=t.original)[l=this.className]==null&&(e[l]=this.cloneNode(!0)),this.contentEditable=!0,d=N("br",this),i=0,a=d.length;i<a;i++)n=d[i],r.replace(n,r.tn(`
`));return this.focus()}},keydown:function(o){if(o.stopPropagation(),!o.shiftKey&&o.keyCode===13)return this.blur()},blur:function(){var o,e,n,i;for(i=N("br",this),e=0,n=i.length;e<n;e++)o=i[e],r.replace(o,r.tn(`
`));return(this.textContent=this.textContent.replace(/\n*$/,""))?(this.contentEditable=!1,t.db.set({boardID:p.BOARD.ID,threadID:this.className,val:{title:this.textContent,orig:t.original[this.className].textContent}})):(r.rmAll(this),r.add(this,s.call(t.original[this.className].cloneNode(!0).childNodes)),t.db.delete({boardID:p.BOARD.ID,threadID:this.className}))}},original:r.dict(),custom:function(o){var e,n,i,a,l,d;for(e=o.className,o.title="Ctrl/\u2318+click to edit board "+e.slice(5).toLowerCase(),o.spellcheck=!1,d=["click","keydown","blur"],a=0,l=d.length;a<l;a++)i=d[a],r.on(o,i,t.cb[i]);if(n=t.db.get({boardID:p.BOARD.ID,threadID:e}))return f["Persistent Custom Board Titles"]||n.orig===o.textContent?(t.original[e]=o.cloneNode(!0),o.textContent=n.title):t.db.delete({boardID:p.BOARD.ID,threadID:e})}},t}.call(this),ye=function(){var t;return t={init:function(){var s,o,e;if(p.SITE.software==="yotsuba"&&(f["External Catalog"]||f["JSON Index"])&&!(f["JSON Index"]&&p.VIEW==="index")&&(e=function(){switch(p.VIEW){case"thread":case"archive":return".navLinks.desktop > a";case"catalog":return".navLinks > :first-child > a";case"index":return"#ctrl-top > a, .cataloglink > a"}}(),r.ready(function(){var n,i,a,l,d,c,u,h;for(h=N(e),l=0,d=h.length;l<d;l++){switch(c=h[l],c.pathname.replace(/\/+/g,"/")){case"/"+p.BOARD+"/":f["JSON Index"]&&(c.textContent="Index"),c.href=t.index();break;case"/"+p.BOARD+"/catalog":c.href=t.catalog()}p.VIEW==="catalog"&&(a=t.catalog())!==(typeof(n=p.SITE.urls).catalog=="function"?n.catalog(p.BOARD):void 0)&&(i=c.parentNode.cloneNode(!0),u=i.firstElementChild,u.href=a,u.textContent=u.hostname===location.hostname?"4chan X Catalog":"External Catalog",r.after(c.parentNode,[r.tn(" "),i]))}})),p.SITE.software==="yotsuba"&&f["JSON Index"]&&f["Use 4chan X Catalog"]&&F.Post.push({name:"Catalog Link Rewrite",cb:this.node}),this.enabled=f["Catalog Links"])return t.el=s=$.checkbox("Header catalog links","Catalog Links"),s.id="toggleCatalog",o=r("input",s),r.on(o,"change",this.toggle),r.sync("Header catalog links",t.set),L.menu.addEntry({el:s,order:95})},node:function(){var s,o,e,n,i;for(i=N("a",this.nodes.comment),o=0,e=i.length;o<e;o++)s=i[o],(n=s.href.match(/^https?:\/\/(boards\.4chan(?:nel)?\.org\/[^\/]+)\/catalog(#s=.*)?/))&&(s.href="//"+n[1]+"/"+(n[2]||"#catalog"))},toggle:function(){return r.event("CloseMenu"),r.set("Header catalog links",this.checked),t.set(this.checked)},set:function(s){return f["Header catalog links"]=s,t.setLinks(L.boardList),t.setLinks(L.bottomBoardList),t.el.title="Turn catalog links "+(s?"off":"on")+".",r("input",t.el).checked=s},setLinks:function(s){var o,e,n,i,a,l,d,c,u,h,g,m,b;if(((d=t.enabled)!=null?d:f["Catalog Links"])&&s)for(m=/(?:index)?(?:\.\w+)?$/,c=N("a:not([data-only])",s),a=0,l=c.length;a<l;a++){if(e=c[a],u=e.dataset,g=u.siteID,i=u.boardID,!(g&&i)){if(h=rt.parseURL(e),g=h.siteID,i=h.boardID,o=h.VIEW,!(g&&i&&(o==="index"||o==="catalog")&&(e.dataset.indexOptions||e.href.replace(m,"")===(H.url(o,{siteID:g,boardID:i})||"").replace(m,""))))continue;r.extend(e.dataset,{siteID:g,boardID:i})}n={siteID:g,boardID:i},b=f["Header catalog links"]?t.catalog(n):H.url("index",n),b&&(e.href=b,e.dataset.indexOptions&&b.split("#")[0]===H.url("index",n)&&(e.href+=(e.hash?"/":"#")+e.dataset.indexOptions))}},externalParse:function(){var s,o,e,n,i,a,l,d,c,u;for(t.externalList=r.dict(),l=f.externalCatalogURLs.split(`
`),n=0,i=l.length;n<i;n++)if(a=l[n],a[0]!=="#"){u=a.split(";")[0],o=ue.parseBoards(((d=a.match(/;boards:([^;]+)/))!=null?d[1]:void 0)||"*"),e=ue.parseBoards((c=a.match(/;exclude:([^;]+)/))!=null?c[1]:void 0)||r.dict();for(s in o)e[s]||e[s.split("/")[0]+"/*"]||(t.externalList[s]=u)}},external:function(s){var o,e,n;if(n=s.siteID,o=s.boardID,t.externalList||t.externalParse(),e=t.externalList[n+"/"+o]||t.externalList[n+"/*"],e)return e.replace(/%board/g,o)},jsonIndex:function(s,o){return p.SITE.ID===s.siteID&&p.BOARD.ID===s.boardID&&p.VIEW==="index"?o:H.url("index",s)+o},catalog:function(s){var o,e;return s==null&&(s=p.BOARD),f["External Catalog"]&&(o=t.external(s))?o:X.enabledOn(s)&&f["Use 4chan X Catalog"]?t.jsonIndex(s,"#catalog"):(e=H.url("catalog",s))?e:t.external(s)},index:function(s){return s==null&&(s=p.BOARD),X.enabledOn(s)?t.jsonIndex(s,"#index"):H.url("index",s)}},t}.call(this),je=function(){var t;return t={init:function(){if(f["Custom CSS"])return this.addStyle()},addStyle:function(){return this.style=r.addStyle(Te.sub(f.usercss),"custom-css","#fourchanx-css")},rmStyle:function(){if(this.style)return r.rm(this.style),delete this.style},update:function(){return this.style?this.style.textContent=Te.sub(f.usercss):this.addStyle()}},t}.call(this),Ae=function(){var t;return t={init:function(){if(!(p.VIEW!=="index"||!f["Comment Expansion"]||f["JSON Index"]))return F.Post.push({name:"Comment Expansion",cb:this.node})},node:function(){var s;if(s=r(".abbr > a:not([onclick])",this.nodes.comment))return r.on(s,"click",t.cb)},callbacks:[],cb:function(s){return s.preventDefault(),t.expand(H.postFromNode(this))},expand:function(s){var o;if(s.nodes.longComment&&!s.nodes.longComment.parentNode){r.replace(s.nodes.shortComment,s.nodes.longComment),s.nodes.comment=s.nodes.longComment;return}if(o=r(".abbr > a",s.nodes.comment))return o.textContent="Post No."+s+" Loading...",r.cache(p.SITE.urls.threadJSON({boardID:s.boardID,threadID:s.threadID}),function(){return t.parse(this,o,s)})},contract:function(s){var o;if(s.nodes.shortComment)return o=r(".abbr > a",s.nodes.shortComment),o.textContent="here",r.replace(s.nodes.longComment,s.nodes.shortComment),s.nodes.comment=s.nodes.shortComment},parse:function(s,o,e){var n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C;if(C=s.status,C!==200&&C!==304){o.textContent=C?"Error "+s.statusText+" ("+C+")":"Connection Error";return}for(v=s.response.posts,(k=v[0].custom_spoiler)&&(p.SITE.Build.spoilerRange[p.BOARD]=k),d=0,h=v.length;d<h&&(b=v[d],b.no!==e.ID);d++);if(b.no!==e.ID){o.textContent="Post No."+e+" not found.";return}for(a=e.nodes.comment,i=a.cloneNode(!1),i.innerHTML=b.com,w=N(".quotelink",i),c=0,g=w.length;c<g;c++)A=w[c],l=A.getAttribute("href"),l[0]!=="/"&&(l[0]==="#"?A.href=""+o.pathname.split(/\/+/).splice(0,4).join("/")+l:A.href=o.pathname.split(/\/+/).splice(0,3).join("/")+"/"+l);for(e.nodes.shortComment=a,r.replace(a,i),e.nodes.comment=e.nodes.longComment=i,e.parseComment(),e.parseQuotes(),x=t.callbacks,u=0,m=x.length;u<m;u++)n=x[u],n.call(e)}},t}.call(this),Ke=function(){var t,s=[].slice;return t={statuses:r.dict(),init:function(){if(p.VIEW==="index"&&f["Thread Expansion"])return f["JSON Index"]?r.on(I,"IndexRefreshInternal",this.onIndexRefresh):F.Thread.push({name:"Expand Thread",cb:function(){return t.setButton(this)}})},setButton:function(o){var e,n;if(o.nodes.root&&(e=r(".summary",o.nodes.root)))return e.textContent=(n=p.SITE.Build).summaryText.apply(n,["+"].concat(s.call(e.textContent.match(/\d+/g)))),e.style.cursor="pointer",r.on(e,"click",t.cbToggle)},disconnect:function(o){var e,n,i,a;if(!(p.VIEW==="thread"||!f["Thread Expansion"])){n=t.statuses;for(a in n)i=n[a],(e=i.req)&&(delete i.req,e.abort()),delete t.statuses[a];if(!o)return r.off(I,"IndexRefreshInternal",this.onIndexRefresh)}},onIndexRefresh:function(){return t.disconnect(!0),p.BOARD.threads.forEach(function(o){return t.setButton(o)})},cbToggle:function(o){if(!r.modifiedClick(o))return o.preventDefault(),t.toggle(H.threadFromNode(this))},cbToggleBottom:function(o){var e,n;if(!r.modifiedClick(o))return o.preventDefault(),n=H.threadFromNode(this),r.rm(this),e=n.nodes.root.getBoundingClientRect().bottom,t.toggle(n),window.scrollBy(0,n.nodes.root.getBoundingClientRect().bottom-e)},toggle:function(o){var e;if(o.nodes.root&&(e=r(".summary",o.nodes.root)))return o.ID in t.statuses?t.contract(o,e,o.nodes.root):t.expand(o,e)},expand:function(o,e){var n,i;return t.statuses[o]=i={},e.textContent=(n=p.SITE.Build).summaryText.apply(n,["..."].concat(s.call(e.textContent.match(/\d+/g)))),i.req=r.cache(p.SITE.urls.threadJSON({boardID:o.board.ID,threadID:o.ID}),function(){if(this===i.req)return delete i.req,t.parse(this,o,e)}),i.numReplies=N(p.SITE.selectors.replyOriginal,o.nodes.root).length},contract:function(o,e,n){var i,a,l,d,c,u,h,g,m,b;if(b=t.statuses[o],delete t.statuses[o],c=b.req){delete b.req,c.abort(),e&&(e.textContent=(h=p.SITE.Build).summaryText.apply(h,["+"].concat(s.call(e.textContent.match(/\d+/g)))));return}for(g=N(".thread > .replyContainer",n),b.numReplies&&(g=g.slice(0,-b.numReplies)),u=0,i=0,a=0,d=g.length;a<d;a++){if(m=g[a],f["Quote Inlining"])for(;l=r(".inlined",m);)l.click();u++,"file"in H.postFromRoot(m)&&i++,r.rm(m)}return X.enabled&&r.event("PostsRemoved",null,e.parentNode),e.textContent=p.SITE.Build.summaryText("+",u,i),r.rm(r(".summary-bottom",n))},parse:function(o,e,n){var i,a,l,d,c,u,h,g,m,b,v,A;if((b=o.status)!==200&&b!==304){n.textContent=o.status?"Error "+o.statusText+" ("+o.status+")":"Connection Error";return}for(p.SITE.Build.spoilerRange[e.board]=o.response.posts[0].custom_spoiler,h=[],m=[],a=0,v=o.response.posts,l=0,d=v.length;l<d;l++)if(u=v[l],u.no!==e.ID){if((c=e.posts.get(u.no))&&!c.isFetchedQuote){"file"in c&&a++,A=c.nodes.root,m.push(A);continue}A=p.SITE.Build.postFromObject(u,e.board.ID),c=new ae(A,e,e.board),"file"in c&&a++,h.push(c),m.push(A)}if(Z.callbackNodes("Post",h),r.after(n,m),r.event("PostsInserted",null,n.parentNode),g=m.length,n.textContent=p.SITE.Build.summaryText("-",g,a),A)return i=n.cloneNode(!0),i.classList.add("summary-bottom"),r.on(i,"click",t.cbToggleBottom),r.after(A,i)}},t}.call(this),ot=function(){var t;return t={init:function(){var s;if(!((s=p.VIEW)!=="index"&&s!=="thread"&&s!=="archive"||!f["File Info Formatting"]))return F.Post.push({name:"File Info Formatting",cb:this.node})},node:function(){var s,o,e,n,i,a,l,d,c;if(this.file){if(this.isClone){for(d=N(".file-info .download-button",this.file.text),o=0,i=d.length;o<i;o++)s=d[o],r.on(s,"click",_.download);for(c=N(".file-info .quick-filter-md5",this.file.text),n=0,a=c.length;n<a;n++)s=c[n],r.on(s,"click",ue.quickFilterMD5);return}return l=r.el("span",{className:"fileText-original"}),r.prepend(this.file.link.parentNode,l),r.add(l,[this.file.link.previousSibling,this.file.link,this.file.link.nextSibling]),e=r.el("span",{className:"file-info"}),t.format(f.fileInfo,this,e),r.prepend(this.file.text,e)}},format:function(s,o,e){var n,i,a,l,d,c,u,h;for(c=[],s.replace(/%(.)|[^%]+/g,function(g,m){return c.push(r.hasOwn(t.formatters,m)?t.formatters[m].call(o):{innerHTML:T(g)}),""}),r.extend(e,{innerHTML:T.cat(c)}),u=N(".download-button",e),i=0,l=u.length;i<l;i++)n=u[i],r.on(n,"click",_.download);for(h=N(".quick-filter-md5",e),a=0,d=h.length;a<d;a++)n=h[a],r.on(n,"click",ue.quickFilterMD5)},formatters:{t:function(){return{innerHTML:T(this.file.url.match(/[^/]*$/)[0])}},T:function(){return{innerHTML:'<a href="'+T(this.file.url)+'" target="_blank">'+t.formatters.t.call(this).innerHTML+"</a>"}},l:function(){return{innerHTML:'<a href="'+T(this.file.url)+'" target="_blank">'+t.formatters.n.call(this).innerHTML+"</a>"}},L:function(){return{innerHTML:'<a href="'+T(this.file.url)+'" target="_blank">'+t.formatters.N.call(this).innerHTML+"</a>"}},n:function(){var s,o;return s=this.file.name,o=le.yotsuba.Build.shortFilename(this.file.name,this.isReply),s===o?{innerHTML:T(s)}:{innerHTML:'<span class="fnswitch"><span class="fntrunc">'+T(o)+'</span><span class="fnfull">'+T(s)+"</span></span>"}},N:function(){return{innerHTML:T(this.file.name)}},d:function(){return{innerHTML:'<a href="'+T(this.file.url)+'" download="'+T(this.file.name)+'" class="fa fa-download download-button"></a>'}},f:function(){return{innerHTML:'<a href="javascript:;" class="fa fa-times quick-filter-md5"></a>'}},p:function(){return{innerHTML:this.file.isSpoiler?"Spoiler, ":""}},s:function(){return{innerHTML:T(this.file.size)}},B:function(){return{innerHTML:T(Math.round(this.file.sizeInBytes))+" Bytes"}},K:function(){return{innerHTML:T(Math.round(this.file.sizeInBytes/1024))+" KB"}},M:function(){return{innerHTML:T(Math.round(this.file.sizeInBytes/1048576*100)/100)+" MB"}},r:function(){return{innerHTML:T(this.file.dimensions||"PDF")}},g:function(){return{innerHTML:this.file.tag?", "+T(this.file.tag):""}},"%":function(){return{innerHTML:"%"}}}},t}.call(this),mt=function(){var t;return t={init:function(){if(p.BOARD.ID==="f"&&f["Enable Native Flash Embedding"])return r.ready(t.initReady)},initReady:function(){return r.hasStorage?r.global(function(){if(JSON.parse(localStorage["4chan-settings"]||"{}").disableAll)return window.SWFEmbed.init()}):(p.VIEW==="thread"&&r.global(function(){return window.Main.tid=location.pathname.split(/\/+/)[3]}),r.global(function(){return window.SWFEmbed.init()}))}},t}.call(this),vt=function(){var t;return t={init:function(){var s;if(p.SITE.software==="yotsuba"&&((s=p.VIEW)==="index"||s==="thread"||s==="archive"))return oe.ready(this.initBoard),Z.ready(this.initReady)},initBoard:function(){if(p.BOARD.config.code_tags&&(r.on(window,"prettyprint:cb",function(s){var o,e;if((o=p.posts.get(s.detail.ID))&&(e=N(".prettyprint",o.nodes.comment)[+s.detail.i])&&!r.hasClass(e,"prettyprinted"))return e.innerHTML=s.detail.html,r.addClass(e,"prettyprinted")}),r.global(function(){return window.addEventListener("prettyprint",function(s){return window.dispatchEvent(new CustomEvent("prettyprint:cb",{detail:{ID:s.detail.ID,i:s.detail.i,html:window.prettyPrintOne(s.detail.html)}}))},!1)}),F.Post.push({name:"Parse [code] tags",cb:t.code}),p.posts.forEach(function(s){if(s.callbacksExecuted)return F.Post.execute(s,["Parse [code] tags"],!0)}),Ae.callbacks.push(t.code)),p.BOARD.config.math_tags)return r.global(function(){return window.addEventListener("mathjax",function(s){if(window.MathJax)return window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,s.target]);if(document.querySelector('script[src^="//cdn.mathjax.org/"]')||(window.loadMathJax(),window.loadMathJax=function(){}),!s.target.classList.contains("postMessage"))return document.querySelector('script[src^="//cdn.mathjax.org/"]').addEventListener("load",function(){return window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,s.target])},!1)},!1)}),F.Post.push({name:"Parse [math] tags",cb:t.math}),p.posts.forEach(function(s){if(s.callbacksExecuted)return F.Post.execute(s,["Parse [math] tags"],!0)}),Ae.callbacks.push(t.math)},initReady:function(){return r.global(function(){var s,o,e,n;for(window.clickable_ids=!1,n=document.querySelectorAll(".posteruid, .capcode"),s=0,o=n.length;s<o;s++)e=n[s],e.removeEventListener("click",window.idClick,!1)})},code:function(){if(!this.isClone)return r.ready(function(s){return function(){var o,e,n,i,a;for(a=N(".prettyprint",s.nodes.comment),o=e=0,n=a.length;e<n;o=++e)i=a[o],r.hasClass(i,"prettyprinted")||r.event("prettyprint",{ID:s.fullID,i:o,html:i.innerHTML},window)}}(this))},math:function(){var s,o,e,n,i;if(/\[(math|eqn)\]/.test(this.nodes.comment.textContent)){if((i=N("wbr",this.nodes.comment)).length){for(o=0,e=i.length;o<e;o++)n=i[o],r.rm(n);this.nodes.comment.normalize()}return s=function(a){return function(){if(E.contains(a.nodes.comment))return r.off(I,"PostsInserted",s),r.event("mathjax",null,a.nodes.comment)}}(this),r.on(I,"PostsInserted",s),s()}}},t}.call(this),At=function(){var t;return t={init:function(){var s;if(((s=p.VIEW)==="index"||s==="thread")&&f["Color User IDs"])return this.ids=r.dict(),this.ids.Heaven=[0,0,0,"#fff"],F.Post.push({name:"Color User IDs",cb:this.node})},node:function(){var s,o,e,n;if(!(this.isClone||!((n=this.info.uniqueID)&&(o=this.nodes.uniqueID))))return s=t.ids[n]||t.compute(n),e=o.style,e.color=s[3],e.backgroundColor="rgb("+s[0]+","+s[1]+","+s[2]+")",r.addClass(o,"painted")},compute:function(s){var o,e;return o=p.SITE.uidColor?p.SITE.uidColor(s):parseInt(s,16),e=[o>>16&255,o>>8&255,o&255],e.push(r.luma(e)>125?"#000":"#fff"),this.ids[s]=e}},t}.call(this),wt=function(){var t;return t={init:function(){var s;if(!((s=p.VIEW)!=="index"&&s!=="thread"))return F.Post.push({name:"Highlight by User ID",cb:this.node})},uniqueID:null,node:function(){if(this.nodes.uniqueIDRoot&&r.on(this.nodes.uniqueIDRoot,"click",t.click(this)),this.nodes.capcode&&r.on(this.nodes.capcode,"click",t.click(this)),!this.isClone)return t.set(this)},set:function(s){var o;return o=(s.info.uniqueID||s.info.capcode)===t.uniqueID,r[o?"addClass":"rmClass"](s.nodes.post,"highlight")},click:function(s){return function(){var o;return o=s.info.uniqueID||s.info.capcode,t.uniqueID=t.uniqueID===o?null:o,p.posts.forEach(t.set)}}},t}.call(this),xt=function(){var t;return t={init:function(){if(p.VIEW==="thread"&&f["Count Posts by ID"])return F.Thread.push({name:"Count Posts by ID",cb:function(){return t.thread=this}}),F.Post.push({name:"Count Posts by ID",cb:this.node})},node:function(){if(this.nodes.uniqueID&&this.thread===t.thread)return r.on(this.nodes.uniqueID,"mouseover",t.count)},count:function(){var s,o;return o=H.postFromNode(this).info.uniqueID,s=0,t.thread.posts.forEach(function(e){if(e.info.uniqueID===o)return s++}),this.title=s+" post"+(s===1?"":"s")+" by this ID"}},t}.call(this),Pe=function(){var t;return t={init:function(){var s,o;if(f.Keybinds){for(s in de.hotkeys)r.sync(s,t.sync);return o=function(){var e,n,i,a;for(r.off(I,"4chanXInitFinished",o),r.on(I,"keydown",t.keydown),a=N("[accesskey]"),e=0,n=a.length;e<n;e++)i=a[e],i.removeAttribute("accesskey")},r.on(I,"4chanXInitFinished",o)}},sync:function(s,o){return f[o]=s},keydown:function(s){var o,e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S;if((a=t.keyCode(s))&&(C=s.target,!(((h=C.nodeName)==="INPUT"||h==="TEXTAREA")&&!(/(Esc|Alt|Ctrl|Meta|Shift\+\w{2,})/.test(a)&&!/^Alt\+(\d|Up|Down|Left|Right)$/.test(a))))){switch(((g=p.VIEW)==="index"||g==="thread")&&(S=Oe.getThread(),D=H.threadFromRoot(S)),a){case f["Toggle board list"]:if(!f["Custom Board Navigation"])return;L.toggleBoardList();break;case f["Toggle header"]:L.toggleBarVisibility();break;case f["Open empty QR"]:if(!y.postingIsEnabled)return;t.qr();break;case f["Open QR"]:if(!(y.postingIsEnabled&&S))return;t.qr(S);break;case f["Open settings"]:we.open();break;case f.Close:if(we.dialog)we.close();else if((c=N(".notification")).length)for(i=0,l=c.length;i<l;i++)d=c[i],r(".close",d).click();else if(y.nodes&&!(y.nodes.el.hidden||window.getComputedStyle(y.nodes.form).display==="none"))f["Persistent QR"]?y.hide():y.close();else if(Re.lastEmbed)Re.closeFloat();else return;break;case f["Spoiler tags"]:if(C.nodeName!=="TEXTAREA")return;t.tags("spoiler",C);break;case f["Code tags"]:if(C.nodeName!=="TEXTAREA")return;t.tags("code",C);break;case f["Eqn tags"]:if(C.nodeName!=="TEXTAREA")return;t.tags("eqn",C);break;case f["Math tags"]:if(C.nodeName!=="TEXTAREA")return;t.tags("math",C);break;case f["SJIS tags"]:if(C.nodeName!=="TEXTAREA")return;t.tags("sjis",C);break;case f["Toggle sage"]:if(!(y.nodes&&!y.nodes.el.hidden))return;t.sage();break;case f["Toggle Cooldown"]:if(!(y.nodes&&!y.nodes.el.hidden&&r.hasClass(y.nodes.fileSubmit,"custom-cooldown")))return;y.toggleCustomCooldown();break;case f["Post from URL"]:if(!y.postingIsEnabled)return;y.handleUrl("");break;case f["Add new post"]:if(!y.postingIsEnabled)return;y.addPost();break;case f["Submit QR"]:if(!(y.nodes&&!y.nodes.el.hidden))return;y.status()||y.submit();break;case f.Update:switch(p.VIEW){case"thread":if(!Qe.enabled)return;Qe.update();break;case"index":if(!X.enabled)return;X.update();break;default:return}break;case f.Watch:if(!(pe.enabled&&D))return;pe.toggle(D);break;case f["Update thread watcher"]:if(!pe.enabled)return;pe.buttonFetchAll();break;case f["Toggle thread watcher"]:if(!pe.enabled)return;pe.toggleWatcher();break;case f["Toggle threading"]:if(!ke.ready)return;ke.toggleThreading();break;case f["Mark thread read"]:if(!(p.VIEW==="index"&&D&&We.enabled))return;We.markRead.call(S);break;case f["Expand image"]:if(!(De.enabled&&S))return;u=H.postFromNode(t.post(S)),u.file&&De.toggle(u);break;case f["Expand images"]:if(!De.enabled)return;De.cb.toggleAll();break;case f["Open Gallery"]:if(!He.enabled)return;He.cb.toggle();break;case f.fappeTyme:if(!((m=Fe.nodes)!=null&&m.fappe))return;Fe.toggle("fappe");break;case f.werkTyme:if(!((b=Fe.nodes)!=null&&b.werk))return;Fe.toggle("werk");break;case f["Front page"]:X.enabled?X.userPageNav(1):location.href="/"+p.BOARD+"/";break;case f["Open front page"]:r.open(location.origin+"/"+p.BOARD+"/");break;case f["Next page"]:if(!(p.VIEW==="index"&&!(typeof(o=p.SITE).isOnePage=="function"&&o.isOnePage(p.BOARD))))return;if(X.enabled){if((v=f["Index Mode"])!=="paged"&&v!=="infinite")return;r(".next button",X.pagelist).click()}else(A=r(p.SITE.selectors.nav.next))!=null&&A.click();break;case f["Previous page"]:if(!(p.VIEW==="index"&&!(typeof(e=p.SITE).isOnePage=="function"&&e.isOnePage(p.BOARD))))return;if(X.enabled){if((w=f["Index Mode"])!=="paged"&&w!=="infinite")return;r(".prev button",X.pagelist).click()}else(x=r(p.SITE.selectors.nav.prev))!=null&&x.click();break;case f["Search form"]:if(p.VIEW!=="index"||(k=X.enabled?X.searchInput:p.SITE.selectors.searchBox?r(p.SITE.selectors.searchBox):void 0,!k))return;L.scrollToIfNeeded(k),k.focus();break;case f["Paged mode"]:if(!X.enabledOn(p.BOARD))return;location.href=p.VIEW==="index"?"#paged":"/"+p.BOARD+"/#paged";break;case f["Infinite scrolling mode"]:if(!X.enabledOn(p.BOARD))return;location.href=p.VIEW==="index"?"#infinite":"/"+p.BOARD+"/#infinite";break;case f["All pages mode"]:if(!X.enabledOn(p.BOARD))return;location.href=p.VIEW==="index"?"#all-pages":"/"+p.BOARD+"/#all-pages";break;case f["Open catalog"]:if(!(n=ye.catalog()))return;location.href=n;break;case f["Cycle sort type"]:if(!X.enabled)return;X.cycleSortType();break;case f["Next thread"]:if(!(p.VIEW==="index"&&S))return;Oe.scroll(1);break;case f["Previous thread"]:if(!(p.VIEW==="index"&&S))return;Oe.scroll(-1);break;case f["Expand thread"]:if(!(p.VIEW==="index"&&S))return;Ke.toggle(D),L.scrollTo(S);break;case f["Open thread"]:if(!(p.VIEW==="index"&&S))return;t.open(D);break;case f["Open thread tab"]:if(!(p.VIEW==="index"&&S))return;t.open(D,!0);break;case f["Next reply"]:if(!S)return;t.hl(1,S);break;case f["Previous reply"]:if(!S)return;t.hl(-1,S);break;case f["Deselect reply"]:if(!S)return;t.hl(0,S);break;case f.Hide:if(!(D&&he.db))return;L.scrollTo(S),he.toggle(D);break;case f["Quick Filter MD5"]:if(!S)return;u=t.post(S),t.hl(1,S),ue.quickFilterMD5.call(u,s);break;case f["Previous Post Quoting You"]:if(!(S&&se.db))return;se.cb.seek("preceding");break;case f["Next Post Quoting You"]:if(!(S&&se.db))return;se.cb.seek("following");break;default:return}return s.preventDefault(),s.stopPropagation()}},keyCode:function(s){var o,e;return e=function(){switch(o=s.keyCode){case 8:return"";case 13:return"Enter";case 27:return"Esc";case 32:return"Space";case 37:return"Left";case 38:return"Up";case 39:return"Right";case 40:return"Down";case 188:return"Comma";case 190:return"Period";case 191:return"Slash";case 59:case 186:return"Semicolon";default:return 48<=o&&o<=57||65<=o&&o<=90?String.fromCharCode(o).toLowerCase():96<=o&&o<=105?String.fromCharCode(o-48).toLowerCase():null}}(),e&&(s.altKey&&(e="Alt+"+e),s.ctrlKey&&(e="Ctrl+"+e),s.metaKey&&(e="Meta+"+e),s.shiftKey&&(e="Shift+"+e)),e},post:function(s){var o;return o=p.SITE.selectors,r(""+o.postContainer+o.highlightable.reply+"."+p.SITE.classes.highlight,s)||r(""+(p.SITE.isOPContainerThread?o.thread:o.postContainer)+o.highlightable.op,s)},qr:function(s){return y.open(),s!=null&&y.quote.call(t.post(s)),y.nodes.com.focus()},tags:function(s,o){var e,n,i,a;return oe.ready(function(){var l,d;if(l=p.BOARD.config,d=function(){switch(s){case"spoiler":return!!l.spoilers;case"code":return!!l.code_tags;case"math":case"eqn":return!!l.math_tags;case"sjis":return!!l.sjis_tags}}(),!d)return new J("warning","["+s+"] tags are not supported on /"+p.BOARD+"/.",20)}),a=o.value,i=o.selectionStart,n=o.selectionEnd,o.value=a.slice(0,i)+("["+s+"]")+a.slice(i,n)+("[/"+s+"]")+a.slice(n),e=("["+s+"]").length+n,o.setSelectionRange(e,e),r.event("input",null,o)},sage:function(){var s;return s=/sage/i.test(y.nodes.email.value),y.nodes.email.value=s?"":"sage"},open:function(s,o){var e;if(p.VIEW==="index")return e=H.url("thread",s),o?r.open(e):location.href=e},hl:function(s,o){var e,n,i,a,l,d,c,u,h,g,m;if(g=""+p.SITE.selectors.postContainer+p.SITE.selectors.highlightable.reply,i=p.SITE.classes.highlight,c=r(g+"."+i,o),!s){c&&r.rmClass(c,i);return}if(c){if(n=c.getBoundingClientRect().height,L.getTopOf(c)>=-n&&L.getBottomOf(c)>=-n){if(m=H.postFromNode(c).nodes.root,e=s===1?"following":"preceding",!(d=r.x(e+"-sibling::"+p.SITE.xpath.replyContainer+"[not(@hidden) and not(child::div[@class='stub'])][1]",m)))return;d.matches(g)||(d=r(g,d)),L.scrollToIfNeeded(d,s===1),r.addClass(d,i),r.rmClass(c,i);return}r.rmClass(c,i)}for(u=N(g,o),s===-1&&u.reverse(),a=0,l=u.length;a<l;a++)if(h=u[a],s===1&&L.getTopOf(h)>0||s===-1&&L.getBottomOf(h)>0){r.addClass(h,i);return}}},t}.call(this),St=function(){var t;return t={init:function(){var s;if(p.SITE.software==="yotsuba"&&((s=p.VIEW)==="index"||s==="thread"))return F.Post.push({name:"Mod Contact Links",cb:this.node})},node:function(){var s,o,e;if(!(this.isClone||!r.hasOwn(t.specific,this.info.capcode))&&(s=r.el("span",{className:"contact-links brackets-wrap"}),r.extend(s,t.template(this.info.capcode)),r.after(this.nodes.capcode,s),(e=this.info.comment.match(/This thread was moved to >>>\/(\w+)\//))&&r.hasOwn(t.moveNote,e[1])))return o=r.el("div",{className:"move-note"}),r.extend(o,t.moveNote[e[1]]),r.add(this.nodes.post,o)},template:function(s){return{innerHTML:'<a href="https://www.4chan.org/feedback" target="_blank">feedback</a>'+t.specific[s]().innerHTML}},specific:{Mod:function(){return{innerHTML:' <a href="https://www.4chan-x.net/4chan-irc.html" target="_blank">IRC</a>'}},Manager:function(){return t.specific.Mod()},Developer:function(){return{innerHTML:' <a href="https://github.com/4chan" target="_blank">github</a>'}},Admin:function(){return{innerHTML:' <a href="https://twitter.com/hiroyuki_ni" target="_blank">twitter</a>'}}},moveNote:{qa:{innerHTML:'Moving a thread to /qa/ does not imply mods will read it. If you wish to contact mods, use <a href="https://www.4chan.org/feedback" target="_blank">feedback</a><span class="invisible"> (https://www.4chan.org/feedback)</span> or <a href="https://www.4chan-x.net/4chan-irc.html" target="_blank">IRC</a><span class="invisible"> (https://www.4chan-x.net/4chan-irc.html)</span>.'}}},t}.call(this),Oe=function(){var t;return t={init:function(){var s,o,e,n;switch(p.VIEW){case"index":if(!f["Index Navigation"])return;break;case"thread":if(!f["Reply Navigation"])return;break;default:return}return n=r.el("span",{id:"navlinks"}),e=r.el("a",{textContent:"\u25B2",href:"javascript:;"}),o=r.el("a",{textContent:"\u25BC",href:"javascript:;"}),r.on(e,"click",this.prev),r.on(o,"click",this.next),r.add(n,[e,r.tn(" "),o]),s=function(){return r.off(I,"4chanXInitFinished",s),r.add(I.body,n)},r.on(I,"4chanXInitFinished",s)},prev:function(){return p.VIEW==="thread"?window.scrollTo(0,0):t.scroll(-1)},next:function(){return p.VIEW==="thread"?window.scrollTo(0,I.body.scrollHeight):t.scroll(1)},getThread:function(){var s,o,e,n,i;if(p.VIEW==="thread")return p.threads.get(p.BOARD+"."+p.THREADID).nodes.root;if(!r.hasClass(E,"catalog-mode")){for(e=N(p.SITE.selectors.thread),s=0,o=e.length;s<o;s++)if(i=e[s],n=H.threadFromRoot(i),!(n.isHidden&&!n.stub)&&L.getTopOf(i)>=-i.getBoundingClientRect().height)return i}},scroll:function(s){var o,e,n,i,a,l;if((i=I.activeElement)!=null&&i.blur(),a=t.getThread(),!!a&&(o=s===1?"following":"preceding",(n=r.x(o+"-sibling::"+p.SITE.xpath.thread+"[not(@hidden)][1]",a))&&(l=L.getTopOf(a),(s===1&&l<5||s===-1&&l>-5)&&(a=n)),e=L.getTopOf(a)+E.clientHeight-I.body.getBoundingClientRect().bottom,e>0&&(I.body.style.marginBottom=e+"px"),L.scrollTo(a),e>0&&!t.haveExtra))return t.haveExtra=!0,r.on(I,"scroll",t.removeExtra)},removeExtra:function(){var s;return s=E.clientHeight-I.body.getBoundingClientRect().bottom,s>0?I.body.style.marginBottom=s+"px":(I.body.style.marginBottom="",delete t.haveExtra,r.off(I,"scroll",t.removeExtra))}},t}.call(this),Et=function(){var t;return t={init:function(){var s;if(f["Normalize URL"]){if(s=location.pathname.split(/\/+/),p.SITE.software==="yotsuba")switch(p.VIEW){case"thread":s[2]="thread",s=s.slice(0,4);break;case"index":s=s.slice(0,3)}if(s=s.join("/"),location.pathname!==s)return history.replaceState(history.state,"",location.protocol+"//"+location.host+s+location.hash)}}},t}.call(this),Tt=function(){var t,s=[].indexOf||function(o){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===o)return e;return-1};return t={init:function(){var o,e;if(p.SITE.software==="yotsuba"&&p.BOARD.ID==="qa"&&(o={innerHTML:'Stay in touch with your <a href="https://www.4chan-x.net/qa_friends.html" target="_blank" rel="noopener">/qa/ friends</a>!'},e=r.el("div",{className:"fcx-announcement"},o),r.onExists(E,".boardBanner",function(n){return r.after(n,e)})),"samachan.org"in f.siteProperties&&s.call(f.PSAseen,"samachan")<0)return e=r.el("span",{innerHTML:'<a href="https://sushigirl.us/yakuza/res/776.html" target="_blank" rel="noopener">Looking for a new home?<br>Some former Samachan users are regrouping on SushiChan.</a><br>(a message from 4chan X)'}),Z.ready(function(){return new J("info",e),f.PSAseen.push("samachan"),r.set("PSAseen",f.PSAseen)})}},t}.call(this),Rt=function(){var t,s=[].slice;return t={init:function(){if(f["Announcement Hiding"]&&p.SITE.selectors.psa)return r.addClass(E,"hide-announcement"),r.onExists(E,p.SITE.selectors.psa,this.setup),r.ready(function(){if(!r(p.SITE.selectors.psa))return r.rmClass(E,"hide-announcement")})},setup:function(o){var e,n,i,a,l,d;return t.psa=o,t.text=(a=o.dataset.utc)!=null?a:o.innerHTML,p.SITE.selectors.psaTop&&(i=(l=r(p.SITE.selectors.psaTop))!=null?l.previousElementSibling:void 0)&&i.nodeName==="HR"&&(t.hr=i),t.content=r.el("div"),n={el:r.el("a",{textContent:"Show announcement",className:"show-announcement",href:"javascript:;"}),order:50,open:function(){return o.hidden}},L.menu.addEntry(n),r.on(n.el,"click",t.toggle),t.btn=e=r.el("a",{title:"Mark announcement as read and hide.",className:"hide-announcement-button fa fa-minus-square",href:"javascript:;"}),r.on(e,"click",t.toggle),((d=o.firstChild)!=null?d.tagName:void 0)==="HR"?r.after(o.firstChild,e):r.prepend(o,e),t.sync(f.hiddenPSAList),r.rmClass(E,"hide-announcement"),r.sync("hiddenPSAList",t.sync)},toggle:function(){var o,e;return o=r.hasClass(this,"hide-announcement-button"),e=function(n){return o?n[p.SITE.ID]=t.text:delete n[p.SITE.ID]},e(f.hiddenPSAList),t.sync(f.hiddenPSAList),r.get("hiddenPSAList",f.hiddenPSAList,function(n){var i;return i=n.hiddenPSAList,e(i),r.set("hiddenPSAList",i)})},sync:function(o){var e,n,i;return n=t.psa,e=t.content,n.hidden=o[p.SITE.ID]===t.text,n.hidden?r.add(e,s.call(n.childNodes)):r.add(n,s.call(e.childNodes)),(i=t.hr)!=null?i.hidden=n.hidden:void 0}},t}.call(this),Pt=function(){var t;return t={init:function(){var s,o;if(!f.passMessageClosed)return o=r.el("div",{className:"box-outer top-box"},{innerHTML:'<div class="box-inner"><div class="boxbar"><h2>Trouble buying a 4chan Pass? (a message from 4chan X) <a href="javascript:;" style="text-decoration: none; float: right; margin-right: 4px;" title="Close">\xD7</a></h2></div><div class="boxcontent">Check the 4chan X wiki for <a href="https://github.com/ccd0/4chan-x/wiki/Captcha-FAQ#alternatives" target="_blank" rel="noopener">alternative solutions</a>.</div></div>'}),o.style.cssText="padding-bottom: 0;",s=r("a",o),r.on(s,"click",function(){return r.rm(o),r.set("passMessageClosed",!0)}),r.ready(function(){var e;return(e=r.id("hd"))?r.after(e,o):r.prepend(I.body,o)})}},t}.call(this),Nt=function(){var t;return t={init:function(){var s;if(f["Unique ID and Capcode Navigation"]&&((s=p.VIEW)==="index"||s==="thread"))return this.buttons=this.makeButtons(),F.Post.push({name:"Post Jumper",cb:this.node})},node:function(){var s,o,e,n;if(this.isClone){for(n=N(".postJumper",this.nodes.info),o=0,e=n.length;o<e;o++)s=n[o],t.addListeners(s);return}if(this.nodes.uniqueIDRoot&&t.addButtons(this,"uniqueID"),this.nodes.capcode)return t.addButtons(this,"capcode")},addButtons:function(s,o){var e,n;return n=s.info[o],e=t.buttons.cloneNode(!0),r.extend(e.dataset,{type:o,value:n}),r.after(s.nodes[o+(o==="capcode"?"":"Root")],e),t.addListeners(e)},addListeners:function(s){return r.on(s.firstChild,"click",t.buttonClick),r.on(s.lastChild,"click",t.buttonClick)},buttonClick:function(){var s,o;if(s=r.hasClass(this,"prev")?-1:1,o=t.find(this.parentNode,s))return t.scroll(this.parentNode,o)},find:function(s,o){var e,n,i,a,l,d;for(i=s.dataset,a=i.type,l=i.value,d='span[contains(@class,"postJumper") and @data-value="'+l+'" and @data-type="'+a+'"]',e=o<0?"preceding":"following",n=s;n=r.x(e+"::"+d,n);)if(n.getBoundingClientRect().height)return n;if((n=r.x("(//"+d+")["+(o<0?"last()":"1")+"]"))&&n.getBoundingClientRect().height)return n;for(;(n=r.x(e+"::"+d,n))&&n!==s;)if(n.getBoundingClientRect().height)return n;return null},makeButtons:function(){var s,o,e,n,i;return o="\u23EB",s="\u23EC",n="prev",e="next",i=r.el("span",{className:"postJumper"}),r.extend(i,{innerHTML:'<a href="javascript:;" class="'+T(n)+'">'+T(o)+'</a><a href="javascript:;" class="'+T(e)+'">'+T(s)+"</a>"}),i},scroll:function(s,o){var e,n;return n=s.getBoundingClientRect().top,e=o.getBoundingClientRect().top,window.scrollBy(0,e-n)}},t}.call(this),Ue=function(){var t,s=[].indexOf||function(o){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===o)return e;return-1};return t={INTERVAL:r.MINUTE/2,init:function(){var o;if((((o=p.VIEW)==="index"||o==="thread"||o==="archive")&&f["Relative Post Dates"]&&!f["Relative Date Title"]||X.enabled)&&(this.flush(),r.on(I,"visibilitychange PostsInserted",this.flush)),f["Relative Post Dates"])return F.Post.push({name:"Relative Post Dates",cb:this.node})},node:function(){var o;if(this.info.date){if(o=this.nodes.date,f["Relative Date Title"]){r.on(o,"mouseover",function(e){return function(){return t.hover(e)}}(this));return}if(!this.isClone)return o.title=o.textContent,t.update(this)}},relative:function(o,e,n,i){var a,l,d,c,u,h;return u=(d=o/r.DAY)>=1?(h=e.getFullYear()-n.getFullYear(),l=e.getMonth()-n.getMonth(),a=e.getDate()-n.getDate(),h>1?(d=h-(l<0||l===0&&a<0),"year"):h===1&&(l>0||l===0&&a>=0)?(d=h,"year"):(l=l+12*h)>1?(d=l-(a<0),"month"):l===1&&a>=0?(d=l,"month"):"day"):(d=o/r.HOUR)>=1?"hour":(d=o/r.MINUTE)>=1?"minute":(d=Math.max(0,o)/r.SECOND,"second"),c=Math.round(d),i?u=u==="month"?"mo":u[0]:c!==1&&(u+="s"),i?""+c+u:c+" "+u+" ago"},stale:[],flush:function(){var o,e,n,i,a;if(!I.hidden){for(i=new Date,a=t.stale,e=0,n=a.length;e<n;e++)o=a[e],t.update(o,i);return t.stale=[],clearTimeout(t.timeout),t.timeout=setTimeout(t.flush,t.INTERVAL)}},hover:function(o){var e,n,i;return e=o.info.date,i=new Date,n=i-e,o.nodes.date.title=t.relative(n,i,e)},update:function(o,e){var n,i,a,l,d,c,u,h,g;if(d=o instanceof ae,d?(i=o.info.date,n=!1):(i=new Date(+o.dataset.utc),n=!!o.dataset.abbrev),e||(e=new Date),a=e-i,h=t.relative(a,e,i,n),d)for(u=[o].concat(o.clones),l=0,c=u.length;l<c;l++)g=u[l],g.nodes.date.firstChild.textContent=h;else o.firstChild.textContent=h;return t.setOwnTimeout(a,o)},setOwnTimeout:function(o,e){var n;return n=o<r.MINUTE?r.SECOND-(o+r.SECOND/2)%r.SECOND:o<r.HOUR?r.MINUTE-(o+r.MINUTE/2)%r.MINUTE:o<r.DAY?r.HOUR-(o+r.HOUR/2)%r.HOUR:r.DAY-(o+r.DAY/2)%r.DAY,setTimeout(t.markStale,n,e)},markStale:function(o){if(!(s.call(t.stale,o)>=0)&&!(o instanceof ae&&!p.posts.get(o.fullID))&&!(o instanceof Element&&!E.contains(o)))return t.stale.push(o)}},t}.call(this),Ut=function(){var t,s=[].slice;return t={init:function(){if(f["Reveal Spoilers"]&&r.addClass(E,"reveal-spoilers"),!!f["Remove Spoilers"]&&(F.Post.push({name:"Reveal Spoilers",cb:this.node}),p.VIEW==="archive"))return r.ready(function(){return t.unspoiler(r.id("arc-list"))})},node:function(){return t.unspoiler(this.nodes.comment)},unspoiler:function(o){var e,n,i,a,l;for(l=N(p.SITE.selectors.spoiler,o),e=0,n=l.length;e<n;e++)a=l[e],i=r.el("span",{className:"removed-spoiler"}),r.replace(a,i),r.add(i,s.call(a.childNodes))}},t}.call(this),Vt=function(){var t;return t={init:function(){var s;if(s=location.search.match(/\bno=(\d+)/))return Y.replace.init(),this.postID=+s[1],r.ready(this.ready)},ready:function(){return r.addStyle(Te.report),f["Archive Report"]&&t.archive(),new MutationObserver(function(){return t.fit('iframe[src^="https://www.google.com/recaptcha/api2/frame"]'),t.fit("body")}).observe(I.body,{childList:!0,attributes:!0,subtree:!0}),t.fit("body")},fit:function(s){var o,e;if((e=r(s,E))&&getComputedStyle(e).visibility!=="hidden"&&(o=e.getBoundingClientRect().bottom-E.clientHeight+8,o>0))return window.resizeBy(0,o)},archive:function(){var s,o,e,n,i,a,l,d,c;if((c=ne.report(p.BOARD.ID)).length&&(e=r("form"),d=r.id("reportTypes"),i=r("h3"),o=r.el("fieldset",{id:"archive-report",hidden:!0},{innerHTML:'<legend><label><input id="archive-report-enabled" type="checkbox">Report illegal content to archives</label></legend><label for="archive-report-reason">Details</label><textarea id="archive-report-reason" disabled>Illegal content</textarea><button id="archive-report-submit" hidden>Submit</button>'}),s=r("#archive-report-enabled",o),a=r("#archive-report-reason",o),l=r("#archive-report-submit",o),r.on(s,"change",function(){return a.disabled=!this.checked}),e&&d?(o.hidden=!r('[value="31"]',d).checked,r.on(d,"change",function(u){return o.hidden=u.target.value!=="31",t.fit("body")}),r.after(d,o),t.fit("body"),r.one(e,"submit",function(u){if(!o.hidden&&s.checked)return u.preventDefault(),t.archiveSubmit(c,a.value,function(h){return function(g){return h.action="#archiveresults="+encodeURIComponent(JSON.stringify(g)),h.submit()}}(this))})):i&&(o.hidden=/Report submitted!/.test(i.textContent),r.on(s,"change",function(){return l.hidden=!this.checked}),r.after(i,o),r.on(l,"click",function(){return t.archiveSubmit(c,a.value,t.archiveResults)})),n=location.hash.match(/^#archiveresults=(.*)$/)))try{return t.archiveResults(JSON.parse(decodeURIComponent(n[1])))}catch{}},archiveSubmit:function(s,o,e){var n,i,a,l,d,c,u,h;for(i=r.formData({board:p.BOARD.ID,num:t.postID,reason:o}),u=[],n=function(g,m){return r.ajax(m,{onloadend:function(){if(u.push([g,this.response||{error:""}]),u.length===s.length)return e(u)},form:i})},a=0,l=s.length;a<l;a++)c=s[a],d=c[0],h=c[1],n(d,h)},archiveResults:function(s){var o,e,n,i,a,l,d;for(o=r.id("archive-report"),e=0,n=s.length;e<n;e++)l=s[e],a=l[0],d=l[1],i=r.el("h3",{className:"archive-report-response"}),"success"in d?(r.addClass(i,"archive-report-success"),i.textContent=a+": "+d.success):(r.addClass(i,"archive-report-error"),i.textContent=a+": "+(d.error||"Error reporting post.")),o?r.before(o,i):r.add(I.body,i)}},t}.call(this),Gt=function(){var t;return t={init:function(){if(p.VIEW==="index"&&f["Open Threads in New Tab"])return F.Post.push({name:"Thread Links",cb:this.node}),F.CatalogThread.push({name:"Thread Links",cb:this.catalogNode})},node:function(){if(!(this.isReply||this.isClone))return t.process(this.nodes.reply)},catalogNode:function(){return t.process(this.nodes.thumb.parentNode)},process:function(s){return s.target="_blank"}},t}.call(this),it=function(){var t;return t={init:function(){var s;if(((s=p.VIEW)==="index"||s==="thread"||s==="archive")&&f["Time Formatting"])return F.Post.push({name:"Time Formatting",cb:this.node})},node:function(){var s;if(!(!this.info.date||this.isClone))return s=this.nodes.date.textContent,this.nodes.date.textContent=s.match(/^\s*/)[0]+t.format(f.time,this.info.date)+s.match(/\s*$/)[0]},format:function(s,o){return s.replace(/%(.)/g,function(e,n){return r.hasOwn(t.formatters,n)?t.formatters[n].call(o):e})},day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],month:["January","February","March","April","May","June","July","August","September","October","November","December"],localeFormat:function(s,o,e){if(f.timeLocale)try{return Intl.DateTimeFormat(f.timeLocale,o).format(s)}catch{}return e},localeFormatPart:function(s,o,e,n){var i;if(f.timeLocale)try{return i=Intl.DateTimeFormat(f.timeLocale,o).formatToParts(s),i.map(function(a){return a.type===e?a.value:""}).join("")}catch{}return n},zeroPad:function(s){return s<10?"0"+s:s},formatters:{a:function(){return t.localeFormat(this,{weekday:"short"},t.day[this.getDay()].slice(0,3))},A:function(){return t.localeFormat(this,{weekday:"long"},t.day[this.getDay()])},b:function(){return t.localeFormat(this,{month:"short"},t.month[this.getMonth()].slice(0,3))},B:function(){return t.localeFormat(this,{month:"long"},t.month[this.getMonth()])},d:function(){return t.zeroPad(this.getDate())},e:function(){return this.getDate()},H:function(){return t.zeroPad(this.getHours())},I:function(){return t.zeroPad(this.getHours()%12||12)},k:function(){return this.getHours()},l:function(){return this.getHours()%12||12},m:function(){return t.zeroPad(this.getMonth()+1)},M:function(){return t.zeroPad(this.getMinutes())},p:function(){return t.localeFormatPart(this,{hour:"numeric",hour12:!0},"dayperiod",this.getHours()<12?"AM":"PM")},P:function(){return t.formatters.p.call(this).toLowerCase()},S:function(){return t.zeroPad(this.getSeconds())},y:function(){return this.getFullYear().toString().slice(2)},Y:function(){return this.getFullYear()},"%":function(){return"%"}}},t}.call(this),Jt=function(){var t;return t={init:function(){if(p.SITE.software==="tinyboard"&&p.VIEW==="thread")return Z.ready(function(){return r.global(function(){var s,o,e,n,i,a,l,d;return i=document.currentScript.dataset,o=i.boardID,d=i.threadID,d=+d,e=document.querySelector('form[name="post"]'),window.$(document).ajaxComplete(function(c,u,h){var g,m,b,v,A,w;if(h.url===e.action&&(b=+((A=u.responseJSON)!=null?A.id:void 0))){g={boardID:o,threadID:d,postID:b};try{w=u.responseJSON,v=w.redirect,m=w.noko,v&&typeof n<"u"&&n!==null&&!n&&!m&&(g.redirect=v)}catch{}return c=new CustomEvent("QRPostSuccessful",{bubbles:!0,detail:g}),document.dispatchEvent(c)}}),n=(a=window.tb_settings)!=null&&(l=a.ajax)!=null?l.always_noko_replies:void 0,((s=window.tb_settings||(window.tb_settings={})).ajax||(s.ajax={})).always_noko_replies=!0},{boardID:p.BOARD.ID,threadID:p.THREADID})})}},t}.call(this),Be=function(){var t;return t={init:function(){return r.asap(function(){return I.head&&(t.el=r('link[rel="shortcut icon"]',I.head))},t.initAsap)},set:function(s){if(t.status=s,t.el)return t.el.href=t[s],r.add(I.head,t.el)},initAsap:function(){var s;if(t.el.type="image/x-icon",s=t.el.href,t.isSFW=/ws\.ico$/.test(s),t.default=s,t.switch(),t.status)return t.set(t.status)},switch:function(){var s,o,e,n;for(e={ferongr:["iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///9zBQC/AADpDAP/gID/q6voCwJJTwpOAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR42q1TOwrCQBB9s0FRtJI0WoqFtSLYegoP4gVSeJsUHsHSI3iFeIqRXXgwrhlXwYHHhLwPTB7B36abBCV+0pA4DUBQUNZYQptGtW3jtoKyxgoe0yrBCoyZfL/5ioQ3URZOXW9I341l3oo+NXEZiW4CEuIzvPECopED4OaZ3RNmeAm4u+a8Jr5f17VyVoL8fr8qcltzwlyyj2iqcgPOQ9ExkHAITgD75bYBe0A5S4H/P9htuWMF3QXoQpwaKeT+lnsC6JE5I6aq6fEAAAAASUVORK5CYII=","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///8AcH4AtswA2PJ55fKi6fIA1/FtpPADAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4y2NgoBq4/vE/HJOsBiRQUIfA2AzBqQYqUfn00/9FLz+BaQxDCKqBmX7jExijKEDSDJPHrnnbGQhGV4RmOFwdVkNwhQMheYwQxhaIi7b9Z9A3gWAQm2BUoQOgRhgA8o7j1ozLC4LCyAZcx6kZI5qg4kLKqggDFFWxJySsUQVzlb4pwgAJaTRvokcVNgOqOv8zcHBCsL07DgNg8YsczzA5MxtUL+DMD8g0slxI/H8GQ/P/DJKyeKIRpglXZsIiBwBhP5O+VbI/JgAAAABJRU5ErkJggg==","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///8oeQBJ3ABV/wHM/7Lu/+ZU/gAqUP3dAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVQ4y2NgoBYI+cfwH4ZJVgMS0KhEYGyG4FQDkzjzf9P/d/+fgWl0QwiqgSkI/c8IxsgKkDXD5LFq9rwDweiK0A2HqcNqCK5wICSPEcLYAtH+AMN/IXMIBrEJRie6OEgjDAC5x3FqxuUFNiEUA67j1IweTTBxBQ1puAG86jgSEraogskJWSBcwCGF5k30qMJmgMFEhv/MXBAs5oLDAFj8IsczTE7UEeECbhU8+QGZRpaTi2b4L2zF8J9TGk80wjThykzY5AAW/2O1C2mIbgAAAABJRU5ErkJggg=="],"xat-":["iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAG1BMVEX+AACLkZFub2yfaF3zZGIAAAD/AAD/iYr/zs8IPcF6AAAABXRSTlMAeprJ7xzg6IEAAABZSURBVAjXY2DABKGBSkqioQwMrGmpxsZhaQEMDGFpIa5pqSCRtPDSNJBIaGh5eShQDYOye0V7iREKAyQFYoiCFAcyILQDGcGmEEZYkGoqiMHKysAQEICwGwAAjBmBqhYlagAAAABJRU5ErkJggg==","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAPFBMVEUAAACEgoBva2ilamDxcG7IaWYgFBNOSEf//f0PDQwBAAA7LCwAAAD/AAD+hIX+m5z+zc5HAADPAAAGAADl032uAAAADHRSTlMAzNv0/vz+6v3+7ALrmfyXAAAAaUlEQVQY042PyxKAIAhFAc1eV7T6/3/N8VXOtAgWwBm4ANEPA8AswpySXHvvYZLlpBNrh9pDtcSqAQ1BUTVIjNUQY5icmwfglmXNgE0d6QBF9GigrU0A9LoM53U1kFzk6SBQuWfD/vHqDUCpBmVKTTM4AAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAACRjop4dXVpZ2tdcI9dfKdisfMAAAAumMN9xv+s2/+PADT2AAAAB3RSTlMAepGdv83v3HIc4QAAAFxJREFUCNdjYMAE5YXKRuLlDAzsHe2uIRUdBQwMFR1l6R3tIJGOyukdIJHy8lkry4FqGEwzV62aFozMUAFJOQEZ4iDFhQwI7UBGaTiEUVFs3g5isLMzMBQUIOwGAJRlIu9hk08QAAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAACAgYVlc4ljsu4AAAAAAAAAAAAumMODyP6b1P6e1f/g8v89msgSIiwNFxwbPU3tQYj5AAAABnRSTlMAxej+9VTmD9ciAAAAZElEQVQI12NgwARpiUKKYmkMDGzlZUpK6eUJDAzp5clm5WUgkfKMtnKQSFpa54o0oBoGJYvZO88+gjJu7wMyhIBS2SCGGFDxaxADpP32NjAjSe0bSFd6epIaWISNjYEhJRVhNwAGlyJpYtcvcAAAAABJRU5ErkJggg==","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUfJSCRi5Frbm9dn19082KR/30AAABmzDOq/5vZ/9Gt/vt2AAAABnRSTlMAe5rJ7/4vxEp4AAAAWUlEQVQI12NgwARpiUpKYmkMDGzlZcbG6eUJDAzp5Slu5WUgkfLUsHKQSFpaRGsaUA2DsmvnjBAjFAZICsQQAylOZEBoBzKSzSCM9CS1MhCDjY2BISEBYTcAtgAcKSK2vuIAAAAASUVORK5CYII=","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAACBj39tfm1qj2RepFlu2VQAAQAAAAAAAABmyzOX/oSr/pus/pzk/98PGgtatC4CBAI1ENblAAAACHRSTlMA09/p9v77ig0SBcQAAABnSURBVBjTjY9LDsAgCEQRsR2xWu9/2hK/adJFYQG8wABEPwyAYzNnSatjjPAiviWLhPCqI1R7HBrQdCmGBrEETTmnUAq/QMm5dODHyAQOXXR1zLUGsIEI7lonMGfeHQTq9xw4P159AIxSBSC53km7AAAAAElFTkSuQmCC"],Mayhem:["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"],"4chanJS":["iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAD/AABnZ2f///8nFk05AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAAD/AABmZmYA/wBD99DBAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAAul8NnZ2f////82iC9AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAAAul8NnZ2f/AAD7B+mqAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUBAAAAAABmzDNlyjJnZ2f///+6o7dfAAAAAXRSTlMAQObYZgAAAERJREFUeF6NjkEKADEIA51o///lJZfQxUsHITogWi8AvwZJuxmYa25xDooBLEwOWFTYAsYVhdorLZt9Ng9xCUTCUCQ2H3F4ANrZ2WNiAAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAABmzDNmZmb/AAC8/wCMAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII="],Original:["iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX/////AAD///8AAABBZmS3AAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR42q1RwQnAMAjMu5M4guAKXa4j5dUROo5tipSDcrFChUONd0di2m/hEGVOHDyIPufgwAFASDkpoSzmBrkJ2UMyR9LsJ3rvrqo3Rt1YMIMhhNnOxLMnoMFBxHyJAr2IOBFzA8U+6pLBdmEJTA0aMVjpDd6Loks0s5HZNwYx8tfZCZ0kll7ORffZAAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX///8ul8P///8AAACaqgkzAAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAABBQcHFx4KISoNLToaVW4oKCgul8M4ODg7OzvBwcH///8uS/CdAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2NWw6AIBAD1eILZO5/XI0UAgm7H9tOsu0yGWAQSOoFijHOxOANGqm/LczpOaXs4gISrPZ+gc2+hO5w2xdwgOjBFUIF+sEJrhUl9JFr+badFwR+BfqlmGUJAAAAAElFTkSuQmCC","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX///9mzDP///8AAACT0n1lAAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAAECAIQIAgWLAsePA8oKCg4ODg6dB07OztmzDPBwcH///+rsf3XAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2NWw6AIBAD1eIDhbn/cTVSCCTsfmw7ybbLZIBBIKkXKKU0E4M3aKT+tjCn5xiziwuIsNr7BTb7ErrDZV/AAaIHdwgV6AcnuFaU0Eeu5dt2XiUyBjCQ2bIrAAAAAElFTkSuQmCC"],Metro:["iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAC/AABrZQDiAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAC/AAD///8dAAApAABsAAAHAAA4AACQAAAsAABMCpCvAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAAA1/GhpCidAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAAA1/H///8AISUALzQAeokACAkAQEcAorYAMTcE9WFNAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAABV/wErM5hwAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==","iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAABV/wH///8NKAASOAAwkQADCgAZTABAwQATOwC5e3VGAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII="]},e=r.getOwn(e,f.favicon),s=t,n="data:image/png;base64,",o=0;e[o];)e[o]=n+e[o++];return s.unreadDead=e[0],s.unreadDeadY=e[1],s.unreadSFW=e[2],s.unreadSFWY=e[3],s.unreadNSFW=e[4],s.unreadNSFWY=e[5],s.update()},update:function(){return this.isSFW?(this.unread=this.unreadSFW,this.unreadY=this.unreadSFWY):(this.unread=this.unreadNSFW,this.unreadY=this.unreadNSFWY)},SFW:"//s.4cdn.org/image/favicon-ws.ico",NSFW:"//s.4cdn.org/image/favicon.ico",dead:"data:image/gif;base64,R0lGODlhEAAQAKECAAAAAP8AAP///////yH5BAEKAAIALAAAAAAQABAAAAIvlI+pq+D9DAgUoFkPDlbs7lFZKIJOJJ3MyraoB14jFpOcVMpzrnF3OKlZYsMWowAAOw==",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAACVBMVEUAAGcAAABmzDNZt9VtAAAAAXRSTlMAQObYZgAAAGlJREFUWMPtlkEKADEIA/tJP9lXLttQto2yHxgDHozTi0ToGK2WKZZ+HAQQMZc+xBwI4EZ+wAC2IfPuSIDOZJrSZQEAX9eVJhhwIuUYAnQe8rhAEMAZlTI2MID9f5Clyh0JeE1V1ZEAvB4qDfwuJTSGRAAAAABJRU5ErkJggg=="},t}.call(this),Ct=function(){var t;return t={init:function(){if(p.SITE.software==="yotsuba"&&p.VIEW==="thread"&&f["Mark New IPs"])return F.Thread.push({name:"Mark New IPs",cb:this.node})},node:function(){return t.ipCount=this.ipCount,t.postCount=this.posts.keys.length,r.on(I,"ThreadUpdate",t.onUpdate)},onUpdate:function(s){var o,e,n,i,a,l,d,c,u,h,g;if(g=s.detail,i=g.ipCount,h=g.postCount,u=g.newPosts,o=g.deletedPosts,i!=null){switch(i-t.ipCount){case h-t.postCount+o.length:for(n=t.ipCount,a=0,d=u.length;a<d;a++)e=u[a],t.markNew(p.posts.get(e),++n);break;case-o.length:for(l=0,c=u.length;l<c;l++)e=u[l],t.markOld(p.posts.get(e))}return t.ipCount=i,t.postCount=h}},markNew:function(s,o){var e,n;return n=Math.floor(o/10)%10===1?"th":["st","nd","rd"][o%10-1]||"th",e=r.el("span",{className:"ip-counter",textContent:"("+o+")"}),s.nodes.nameBlock.title="This is the "+o+n+" IP in the thread.",r.add(s.nodes.nameBlock,[r.tn(" "),e]),r.addClass(s.nodes.root,"new-ip")},markOld:function(s){return s.nodes.nameBlock.title="Not the first post from this IP.",r.addClass(s.nodes.root,"old-ip")}},t}.call(this),et=function(){var t;return t={init:function(){var s,o;if(p.VIEW==="thread"&&f["Reply Pruning"])return this.container=r.frag(),this.summary=r.el("span",{hidden:!0,className:"summary"}),this.summary.style.cursor="pointer",r.on(this.summary,"click",function(e){return function(){return e.inputs.enabled.checked=!e.inputs.enabled.checked,r.event("change",null,e.inputs.enabled)}}(this)),o=$.checkbox("Prune Replies","Show Last",f["Prune All Threads"]),s=r.el("span",{title:"Maximum number of replies to show."},{innerHTML:' <input type="number" name="Max Replies" min="0" step="1" value="'+T(f["Max Replies"])+'" class="field">'}),r.prepend(s,o),this.inputs={enabled:o.firstElementChild,replies:s.lastElementChild},this.setEnabled.call(this.inputs.enabled),r.on(this.inputs.enabled,"change",this.setEnabled),r.on(this.inputs.replies,"change",r.cb.value),L.menu.addEntry({el:s,order:190}),F.Thread.push({name:"Reply Pruning",cb:this.node})},position:0,hidden:0,hiddenFiles:0,total:0,totalFiles:0,setEnabled:function(){var s;return s=ke.input,this.checked&&s?.checked&&(s.checked=!1,r.event("change",null,s)),t.active=this.checked},showIfHidden:function(s){if(t.container&&r("#"+s,t.container))return t.inputs.enabled.checked=!1,r.event("change",null,t.inputs.enabled)},node:function(){var s;return t.thread=this,this.isSticky&&(t.active=t.inputs.enabled.checked=!0,ke.input&&(f["Thread Quotes"]=ke.input.checked=!1)),this.posts.forEach(function(o){if(o.isReply&&(t.total++,o.file))return t.totalFiles++}),t.active&&/^#p\d+$/.test(location.hash)&&1<=(s=this.posts.keys.indexOf(location.hash.slice(2)))&&s<1+Math.max(t.total-+f["Max Replies"],0)&&(t.active=t.inputs.enabled.checked=!1),r.after(this.OP.nodes.root,t.summary),r.on(t.inputs.enabled,"change",t.update),r.on(t.inputs.replies,"change",t.update),r.on(I,"ThreadUpdate",t.updateCount),r.on(I,"ThreadUpdate",t.update),t.update()},updateCount:function(s){var o,e,n,i;if(!s.detail[404])for(i=s.detail.newPosts,e=0,n=i.length;e<n;e++)o=i[e],t.total++,p.posts.get(o).file&&t.totalFiles++},update:function(){var s,o,e,n,i,a,l,d;if(e=t.hidden,n=t.active?Math.max(t.total-+f["Max Replies"],0):0,a=I.body.clientHeight-window.scrollY,d=t.thread.posts,t.hidden<n){for(;t.hidden<n&&t.position<d.keys.length;)if(l=d.get(d.keys[t.position++]),l.isReply&&!l.isFetchedQuote){for(;(i=t.summary.nextSibling)&&i!==l.nodes.root;)r.add(t.container,i);r.add(t.container,l.nodes.root),t.hidden++,l.file&&t.hiddenFiles++}}else if(t.hidden>n){for(o=r.frag();t.hidden>n&&t.position>0;)if(l=d.get(d.keys[--t.position]),l.isReply&&!l.isFetchedQuote){for(;(i=t.container.lastChild)&&i!==l.nodes.root;)r.prepend(o,i);r.prepend(o,l.nodes.root),t.hidden--,l.file&&t.hiddenFiles--}r.after(t.summary,o),r.event("PostsInserted",null,t.summary.parentNode)}if(t.summary.textContent=t.active?p.SITE.Build.summaryText("+",t.hidden,t.hiddenFiles):p.SITE.Build.summaryText("-",t.total,t.totalFiles),t.summary.hidden=t.total<=+f["Max Replies"],e!==n&&(s=L.getTopOf(r(".board")))<0)return window.scrollBy(0,Math.max(I.body.clientHeight-a,window.scrollY+s)-window.scrollY)}},t}.call(this),Yt=function(){var t;return t={postCount:0,fileCount:0,postIndex:0,init:function(){var s,o,e,n;if(!(p.VIEW!=="thread"||!f["Thread Stats"]))return f["Page Count in Stats"]&&(this[typeof(s=p.SITE).isPrunedByAge=="function"&&s.isPrunedByAge(p.BOARD)?"showPurgePos":"showPage"]=!0),e={innerHTML:'<span id="post-count">?</span> / <span id="file-count">?</span>'+(f["IP Count in Stats"]&&p.SITE.hasIPCount?' / <span id="ip-count">?</span>':"")+(f["Page Count in Stats"]?' / <span id="page-count">?</span>':"")},n="Posts / Files",f["IP Count in Stats"]&&p.SITE.hasIPCount&&(n+=" / IPs"),f["Page Count in Stats"]&&(n+=this.showPurgePos?" / Purge Position":" / Page"),f["Updater and Stats in Header"]?(this.dialog=o=r.el("span",{id:"thread-stats",title:n}),r.extend(o,e),L.addShortcut("stats",o,200)):(this.dialog=o=$.dialog("thread-stats",{innerHTML:'<div class="move" title="'+T(n)+'">'+e.innerHTML+"</div>"}),r.addClass(E,"float"),r.ready(function(){return r.add(I.body,o)})),this.postCountEl=r("#post-count",o),this.fileCountEl=r("#file-count",o),this.ipCountEl=r("#ip-count",o),this.pageCountEl=r("#page-count",o),this.pageCountEl&&r.on(this.pageCountEl,"click",t.fetchPage),F.Thread.push({name:"Thread Stats",cb:this.node})},node:function(){return t.thread=this,t.count(),t.update(),t.fetchPage(),r.on(I,"PostsInserted",function(){return r.queueTask(t.onPostsInserted)}),r.on(I,"ThreadUpdate",t.onUpdate)},count:function(){var s,o,e,n,i,a,l;for(i=t.thread.posts,e=i.keys.length,s=o=a=t.postIndex,l=e;o<l;s=o+=1)n=i.get(i.keys[s]),n.isFetchedQuote||(t.postCount++,t.fileCount+=n.files.length);return t.postIndex=e},onUpdate:function(s){var o,e,n;if(!s.detail[404]&&(n=s.detail,e=n.postCount,o=n.fileCount,r.extend(t,{postCount:e,fileCount:o}),t.postIndex=t.thread.posts.keys.length,t.update(),t.showPage&&t.pageCountEl.textContent!=="1"))return t.fetchPage()},onPostsInserted:function(){if(t.thread.posts.keys.length>t.postIndex&&(t.count(),t.update(),t.showPage&&t.pageCountEl.textContent!=="1"))return t.fetchPage()},update:function(){var s,o,e,n,i;return i=t.thread,e=t.postCountEl,s=t.fileCountEl,o=t.ipCountEl,e.textContent=t.postCount,s.textContent=t.fileCount,o!=null&&(o.textContent=(n=i.ipCount)!=null?n:"?"),e.classList.toggle("warning",i.postLimit&&!i.isSticky),s.classList.toggle("warning",i.fileLimit&&!i.isSticky)},fetchPage:function(){if(t.pageCountEl){if(clearTimeout(t.timeout),t.thread.isDead){t.pageCountEl.textContent="Dead",r.addClass(t.pageCountEl,"warning");return}return t.timeout=setTimeout(t.fetchPage,2*r.MINUTE),r.whenModified(p.SITE.urls.threadsListJSON(t.thread),"ThreadStats",t.onThreadsLoad)}},onThreadsLoad:function(){var s,o,e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D;if(this.status===200)if(t.showPurgePos){for(v=1,A=this.response,o=0,i=A.length;o<i;o++)for(m=A[o],w=m.threads,e=0,a=w.length;e<a;e++)D=w[e],D.no<t.thread.ID&&v++;return t.pageCountEl.textContent=v,t.pageCountEl.classList.toggle("warning",v===1)}else{for(s=h=0,x=this.response,n=0,l=x.length;n<l;n++)m=x[n],h+=m.threads.length;for(k=this.response,b=u=0,d=k.length;u<d;b=++u)for(m=k[b],C=m.threads,g=0,c=C.length;g<c;g++){if(D=C[g],D.no===t.thread.ID){t.pageCountEl.textContent=b+1,t.pageCountEl.classList.toggle("warning",s>=h-this.response[0].threads.length),t.lastPageUpdate=new Date(D.last_modified*r.SECOND),t.retry();return}s++}}else if(this.status===304)return t.retry()},retry:function(){if(t.showPage&&t.pageCountEl.textContent!=="1"&&!p.SITE.threadModTimeIgnoresSage&&t.thread.posts.get(t.thread.lastPost).info.date>t.lastPageUpdate)return clearTimeout(t.timeout),t.timeout=setTimeout(t.fetchPage,5*r.SECOND)}},t}.call(this),Qe=function(){var t,s=[].indexOf||function(o){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===o)return e;return-1};return t={init:function(){var o,e,n,i,a,l,d,c;if(!(p.VIEW!=="thread"||!f["Thread Updater"])){this.enabled=!0,this.audio=r.el("audio"),r.engine!=="gecko"&&(this.audio.src=this.beep),f["Updater and Stats in Header"]?(this.dialog=l=r.el("span",{id:"updater"}),r.extend(l,{innerHTML:'<span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>'}),L.addShortcut("updater",l,100)):(this.dialog=l=$.dialog("updater",{innerHTML:'<div class="move"></div><span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>'}),r.addClass(E,"float"),r.ready(function(){return r.add(I.body,l)})),this.checkPostCount=0,this.timer=r("#update-timer",l),this.status=r("#update-status",l),r.on(this.timer,"click",this.update),r.on(this.status,"click",this.update),c=r.el("span",{className:"brackets-wrap updatelink"}),r.extend(c,{innerHTML:'<a href="javascript:;">Update</a>'}),Z.ready(function(){var u;if(u=r(".navLinksBot"))return r.add(u,[r.tn(" "),c])}),r.on(c.firstElementChild,"click",this.update),d=[],a=de.updater.checkbox;for(i in a)o=a[i],e=$.checkbox(i,i),e.title=o[1],n=e.firstElementChild,r.on(n,"change",r.cb.checked),n.name==="Scroll BG"?(r.on(n,"change",this.cb.scrollBG),this.cb.scrollBG()):n.name==="Auto Update"&&r.on(n,"change",this.setInterval),d.push({el:e});return this.settings=r.el("span",{innerHTML:'<a href="javascript:;">Interval</a>'}),r.on(this.settings,"click",this.intervalShortcut),d.push({el:this.settings}),L.menu.addEntry(this.entry={el:r.el("span",{textContent:"Updater"}),order:110,subEntries:d}),F.Thread.push({name:"Thread Updater",cb:this.node})}},node:function(){return t.thread=this,t.root=this.nodes.root,t.outdateCount=0,t.postIDs=[],t.fileIDs=[],this.posts.forEach(function(o){if(t.postIDs.push(o.ID),o.file)return t.fileIDs.push(o.ID)}),t.cb.interval.call(r.el("input",{value:f.Interval})),r.on(I,"QRPostSuccessful",t.cb.checkpost),r.on(I,"visibilitychange",t.cb.visibility),t.setInterval()},beep:"data:audio/wav;base64,UklGRjQDAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAc21wbDwAAABBAAADAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkYXRhzAIAAGMms8em0tleMV4zIpLVo8nhfSlcPR102Ki+5JspVEkdVtKzs+K1NEhUIT7DwKrcy0g6WygsrM2k1NpiLl0zIY/WpMrjgCdbPhxw2Kq+5Z4qUkkdU9K1s+K5NkVTITzBwqnczko3WikrqM+l1NxlLF0zIIvXpsnjgydZPhxs2ay95aIrUEkdUdC3suK8N0NUIjq+xKrcz002WioppdGm091pK1w0IIjYp8jkhydXPxxq2K295aUrTkoeTs65suK+OUFUIzi7xqrb0VA0WSoootKm0t5tKlo1H4TYqMfkiydWQBxm16+85actTEseS8y7seHAPD9TIza5yKra01QyWSson9On0d5wKVk2H4DYqcfkjidUQB1j1rG75KsvSkseScu8seDCPz1TJDW2yara1FYxWSwnm9Sn0N9zKVg2H33ZqsXkkihSQR1g1bK65K0wSEsfR8i+seDEQTxUJTOzy6rY1VowWC0mmNWoz993KVc3H3rYq8TklSlRQh1d1LS647AyR0wgRMbAsN/GRDpTJTKwzKrX1l4vVy4lldWpzt97KVY4IXbUr8LZljVPRCxhw7W3z6ZISkw1VK+4sMWvXEhSPk6buay9sm5JVkZNiLWqtrJ+TldNTnquqbCwilZXU1BwpKirrpNgWFhTaZmnpquZbFlbVmWOpaOonHZcXlljhaGhpZ1+YWBdYn2cn6GdhmdhYGN3lp2enIttY2Jjco+bnJuOdGZlZXCImJqakHpoZ2Zug5WYmZJ/bGlobX6RlpeSg3BqaW16jZSVkoZ0bGtteImSk5KIeG5tbnaFkJKRinxxbm91gY2QkIt/c3BwdH6Kj4+LgnZxcXR8iI2OjIR5c3J0e4WLjYuFe3VzdHmCioyLhn52dHR5gIiKioeAeHV1eH+GiYqHgXp2dnh9hIiJh4J8eHd4fIKHiIeDfXl4eHyBhoeHhH96eHmA",playBeep:function(){var o;return o=t.audio,o.src||(o.src=t.beep),o.paused?o.play():r.one(o,"ended",t.playBeep)},cb:{checkpost:function(o){if(o.detail.threadID===t.thread.ID)return t.postID=o.detail.postID,t.checkPostCount=0,t.outdateCount=0,t.setInterval()},visibility:function(){if(!I.hidden&&(t.outdateCount=0,t.seconds>t.interval))return t.setInterval()},scrollBG:function(){return t.scrollBG=f["Scroll BG"]?function(){return!0}:function(){return!I.hidden}},interval:function(o){var e;if(e=parseInt(this.value,10),e<1&&(e=1),t.interval=this.value=e,o)return r.cb.value.call(this)},load:function(){if(this===t.req)switch(this.status){case 200:return t.parse(this),t.thread.isArchived?t.kill():t.setInterval();case 404:return r.ajax(p.SITE.urls.catalogJSON({boardID:t.thread.board.ID}),{onloadend:function(){var o,e,n,i,a,l,d,c,u;if(this.status===200){for(o=!0,d=this.response,e=0,i=d.length;e<i;e++)for(l=d[e],c=l.threads,n=0,a=c.length;n<a;n++)if(u=c[n],u.no===t.thread.ID){o=!1;break}}else o=!1;return o?t.kill():t.error(this)}});default:return t.error(this)}}},kill:function(){return t.thread.kill(),t.setInterval(),r.event("ThreadUpdate",{404:!0,threadID:t.thread.fullID})},error:function(o){if(o.status===304&&t.set("status",""),t.setInterval(),o.status){if(o.status!==304)return t.set("status",o.statusText+" ("+o.status+")","warning")}else return t.set("status","Connection Error","warning")},setInterval:function(){var o,e,n,i;if(clearTimeout(t.timeoutID),t.thread.isDead){t.set("status",t.thread.isArchived?"Archived":"404","warning"),t.set("timer","");return}if(t.postID&&t.checkPostCount<5){t.set("timer","...","loading"),t.timeoutID=setTimeout(t.update,++t.checkPostCount*r.SECOND);return}if(!f["Auto Update"]){t.set("timer","Update");return}return e=t.interval,f["Optional Increase"]?(i=I.hidden?10:5,n=Math.min(t.outdateCount,i),o=(Math.floor(e*.1)||1)*n*n,t.seconds=r.minmax(o,e,300)):t.seconds=e,t.timeout()},intervalShortcut:function(){var o;return we.open("Advanced"),o=r.id("fourchanx-settings"),r("input[name=Interval]",o).focus()},set:function(o,e,n){var i,a;return i=t[o],(a=i.firstChild)?a.data=e:i.textContent=e,i.className=n??(e===""?"empty":"")},timeout:function(){return t.seconds?(t.set("timer",t.seconds),t.timeoutID=setTimeout(t.timeout,1e3)):(t.outdateCount++,t.update()),t.seconds--},update:function(){var o;return clearTimeout(t.timeoutID),t.set("timer","...","loading"),(o=t.req)&&(delete t.req,o.abort()),t.req=r.whenModified(p.SITE.urls.threadJSON({boardID:t.thread.board.ID,threadID:t.thread.ID}),"ThreadUpdater",t.cb.load,{timeout:r.MINUTE})},updateThreadStatus:function(o,e){var n,i;if((i=t.thread["is"+o]!==e)&&(t.thread.setStatus(o,e),!(o==="Closed"&&t.thread.isArchived)))return n=o==="Sticky"?e?"now a sticky":"not a sticky anymore":e?"now closed":"not closed anymore",new J("info","The thread is "+n+".",30)},parse:function(o){var e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W,z,V,K,G,ee,ge,ve;if(M=o.response.posts,n=M[0],ee=t.thread,i=ee.board,q=t.postIDs,v=q[q.length-1],!(M[M.length-1].no<v&&new Date(o.getResponseHeader("Last-Modified"))-ee.posts.get(v).info.date<30*r.SECOND)){for(p.SITE.Build.spoilerRange[i]=n.custom_spoiler,ee.setStatus("Archived",!!n.archived),t.updateThreadStatus("Sticky",!!n.sticky),t.updateThreadStatus("Closed",!!n.closed),ee.postLimit=!!n.bumplimit,ee.fileLimit=!!n.imagelimit,n.unique_ips!=null&&(ee.ipCount=n.unique_ips),P=[],h=[],d=[],D=[],u=0,A=M.length;u<A;u++)if(B=M[u],e=B.no,h.push(e),B.fsize&&d.push(e),!(e<=v)){if((R=ee.posts.get(e))&&!R.isFetchedQuote){R.resurrect();continue}D.push(i+"."+e),S=p.SITE.Build.postFromObject(B,i.ID),P.push(new ae(S,ee,i)),t.postID===e&&delete t.postID}for(l=[],O=t.postIDs,m=0,w=O.length;m<w;m++)e=O[m],s.call(h,e)<0&&(ee.posts.get(e).kill(),l.push(i+"."+e));for(t.postIDs=h,a=[],j=t.fileIDs,b=0,x=j.length;b<x;b++)e=j[b],!(s.call(d,e)>=0||(U=i+"."+e,s.call(l,U)>=0))&&(ee.posts.get(e).kill(!0),a.push(i+"."+e));if(t.fileIDs=d,!P.length)t.set("status","");else{for(t.set("status","+"+P.length,"new"),t.outdateCount=0,ge=(W=te.posts)!=null?W.size:void 0,ve=(z=te.postsQuotingYou)!=null?z.size:void 0,Z.callbackNodes("Post",P),(I.hidden||!I.hasFocus())&&(f["Beep Quoting You"]&&((V=te.postsQuotingYou)!=null?V.size:void 0)>ve?(t.playBeep(),f.Beep&&t.playBeep()):f.Beep&&((K=te.posts)!=null?K.size:void 0)>0&&ge===0&&t.playBeep()),G=f["Auto Scroll"]&&t.scrollBG()&&t.root.getBoundingClientRect().bottom-E.clientHeight<25,c=null,C=0,k=P.length;C<k;C++)R=P[C],ke.insert(R)||(c||(c=R.nodes.root),r.add(t.root,R.nodes.root));r.event("PostsInserted",null,t.root),G&&(f["Bottom Scroll"]?window.scrollTo(0,I.body.clientHeight):c&&L.scrollTo(c))}return n.unique_ips!=null&&(g=r.id("unique-ips"))&&(g.textContent=n.unique_ips,g.previousSibling.textContent=g.previousSibling.textContent.replace(/\b(?:is|are)\b/,n.unique_ips===1?"is":"are"),g.nextSibling.textContent=g.nextSibling.textContent.replace(/\bposters?\b/,n.unique_ips===1?"poster":"posters")),r.event("ThreadUpdate",{404:!1,threadID:ee.fullID,newPosts:D,deletedPosts:l,deletedFiles:a,postCount:n.replies+1,fileCount:n.images+!!n.fsize,ipCount:n.unique_ips})}}},t}.call(this),pe=function(){var t,s=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1},o=[].slice;return t={init:function(){var e,n;if(this.enabled=f["Thread Watcher"]){switch(this.shortcut=n=r.el("a",{id:"watcher-link",textContent:"Watcher",title:"Thread Watcher",href:"javascript:;",className:"fa fa-eye"}),this.db=new fe("watchedThreads",this.refresh,!0),this.dbLM=new fe("watcherLastModified",null,!0),this.dialog=$.dialog("thread-watcher",{innerHTML:'<div class="move">Thread Watcher <a class="refresh fa fa-refresh" title="Check threads" href="javascript:;"></a><span id="watcher-status"></span><a class="menu-button" href="javascript:;"><i class="fa fa-angle-down"></i></a><a class="close" href="javascript:;">\xD7</a></div><div id="watched-threads"></div>'}),this.status=r("#watcher-status",this.dialog),this.list=this.dialog.lastElementChild,this.refreshButton=r(".refresh",this.dialog),this.closeButton=r(".move > .close",this.dialog),this.unreaddb=te.db||We.db||new fe("lastReadPosts"),this.unreadEnabled=f["Remember Last Read Post"],r.on(I,"QRPostSuccessful",this.cb.post),r.on(n,"click",this.toggleWatcher),r.on(this.refreshButton,"click",this.buttonFetchAll),r.on(this.closeButton,"click",this.toggleWatcher),this.menu.addHeaderMenuEntry(),r.onExists(E,"body",this.addDialog),p.VIEW){case"index":r.on(I,"IndexUpdate",this.cb.onIndexUpdate);break;case"thread":r.on(I,"ThreadUpdate",this.cb.onThreadRefresh)}if(f["Fixed Thread Watcher"]&&r.addClass(E,"fixed-watcher"),f["Persistent Thread Watcher"]||(r.addClass(t.shortcut,"disabled"),this.dialog.hidden=!0),L.addShortcut("watcher",n,510),t.initLastModified(),t.fetchAuto(),r.on(window,"visibilitychange focus",function(){return r.queueTask(t.fetchAuto)}),f.Menu&&X.enabled&&ie.menu.addEntry({el:r.el("a",{href:"javascript:;",className:"has-shortcut-text"},{innerHTML:'<span></span><span class="shortcut-text">Alt+click</span>'}),order:6,open:function(i){var a;return a=i.thread,f["Index Mode"]!=="catalog"?!1:(this.el.firstElementChild.textContent=t.isWatched(a)?"Unwatch":"Watch",this.cb&&r.off(this.el,"click",this.cb),this.cb=function(){return r.event("CloseMenu"),t.toggle(a)},r.on(this.el,"click",this.cb),!0)}}),!((e=p.VIEW)!=="index"&&e!=="thread"))return F.Post.push({name:"Thread Watcher",cb:this.node}),F.CatalogThread.push({name:"Thread Watcher",cb:this.catalogNode})}},isWatched:function(e){var n;return!!((n=t.db)!=null&&n.get({boardID:e.board.ID,threadID:e.ID}))},isWatchedRaw:function(e,n){var i;return!!((i=t.db)!=null&&i.get({boardID:e,threadID:n}))},setToggler:function(e,n){return e.classList.toggle("watched",n),e.title=(n?"Unwatch":"Watch")+" Thread"},node:function(){var e,n,i,a,l;if(!this.isReply&&(this.isClone?l=r(".watch-thread-link",this.nodes.info):(l=r.el("a",{href:"javascript:;",className:"watch-thread-link"}),r.before(r("input",this.nodes.info),l)),i=p.SITE.ID,e=this.board.ID,a=this.thread.ID,n=t.db.get({siteID:i,boardID:e,threadID:a}),t.setToggler(l,!!n),r.on(l,"click",t.cb.toggle),n&&n.excerpt==null))return r.queueTask(function(d){return function(){return t.update(i,e,a,{excerpt:H.threadExcerpt(d.thread)})}}(this))},catalogNode:function(){return t.isWatched(this.thread)&&r.addClass(this.nodes.root,"watched"),r.on(this.nodes.root,"mousedown click",function(e){return function(n){if(n.button===0&&n.altKey)return n.type==="click"&&t.toggle(e.thread),n.preventDefault()}}(this))},addDialog:function(){if(Z.isThisPageLegit())return t.build(),r.prepend(I.body,t.dialog)},toggleWatcher:function(){return r.toggleClass(t.shortcut,"disabled"),t.dialog.hidden=!t.dialog.hidden},cb:{openAll:function(){var e,n,i,a;if(!r.hasClass(this,"disabled")){for(a=N("a.watcher-link",t.list),n=0,i=a.length;n<i;n++)e=a[n],r.open(e.href);return r.event("CloseMenu")}},openUnread:function(){var e,n,i,a;if(!r.hasClass(this,"disabled")){for(a=N(".replies-unread > a.watcher-link",t.list),n=0,i=a.length;n<i;n++)e=a[n],r.open(e.href);return r.event("CloseMenu")}},openDeads:function(){var e,n,i,a;if(!r.hasClass(this,"disabled")){for(a=N(".dead-thread > a.watcher-link",t.list),n=0,i=a.length;n<i;n++)e=a[n],r.open(e.href);return r.event("CloseMenu")}},pruneDeads:function(){var e,n,i,a,l,d,c,u;if(!r.hasClass(this,"disabled")){for(l=t.getAll(),i=0,a=l.length;i<a;i++)d=l[i],c=d.siteID,e=d.boardID,u=d.threadID,n=d.data,n.isDead&&t.db.delete({siteID:c,boardID:e,threadID:u});return t.refresh(),r.event("CloseMenu")}},dismiss:function(){var e,n,i,a,l,d,c,u;for(l=t.getAll(),i=0,a=l.length;i<a;i++)d=l[i],c=d.siteID,e=d.boardID,u=d.threadID,n=d.data,n.quotingYou&&t.update(c,e,u,{dismiss:n.quotingYou||0});return r.event("CloseMenu")},toggle:function(){var e;return e=H.postFromNode(this).thread,t.toggle(e)},rm:function(){var e,n,i,a;return i=this.parentNode.dataset.siteID,n=this.parentNode.dataset.fullID.split("."),e=n[0],a=n[1],t.rm(i,e,+a)},post:function(e){var n,i,a,l,d;if(l=e.detail,n=l.boardID,d=l.threadID,a=l.postID,i=Xe.delay(),a===d){if(f["Auto Watch"])return t.addRaw(n,d,{},i)}else if(f["Auto Watch Reply"])return t.add(p.threads.get(n+"."+d)||new Se(d,p.boards[n]||new Ee(n)),i)},onIndexUpdate:function(e){var n,i,a,l,d,c,u,h;a=t.db,u=p.SITE.ID,n=p.BOARD.ID,l=0,d=a.data[u].boards[n];for(h in d)i=d[h],!i?.isDead&&(c=n+"."+h,s.call(e.detail.threads,c)<0)&&e.detail.threads.some(function(g){return+g.split(".")[1]>h})&&(f["Auto Prune"]||!(i&&typeof i=="object")?(a.delete({boardID:n,threadID:h}),l++):t.fetchStatus({siteID:u,boardID:n,threadID:h,data:i}));if(l)return t.refresh()},onThreadRefresh:function(e){var n;if(n=p.threads.get(e.detail.threadID),!!(e.detail[404]&&t.isWatched(n)))return t.add(n)}},requests:[],fetched:0,fetch:function(e,n,i,a){var l,d,c,u,h,g;return g=n.siteID,d=n.force,t.requests.length===0&&(t.status.textContent="...",r.addClass(t.refreshButton,"fa-spin")),c=function(){if(!this.finished)return this.finished=!0,t.fetched++,t.fetched===t.requests.length?t.clearRequests():t.status.textContent=Math.round(t.fetched/t.requests.length*100)+"%",a.apply(this,i)},l=g===p.SITE.ID?r.ajax:be.ajax,d&&(u=r.lastModified.ThreadWatcher)!=null&&delete u[e],h=r.whenModified(e,"ThreadWatcher",c,{timeout:r.MINUTE,ajax:l}),t.requests.push(h)},clearRequests:function(){return t.requests=[],t.fetched=0,t.status.textContent="",r.rmClass(t.refreshButton,"fa-spin")},abort:function(){var e,n,i,a;for(delete t.syncing,i=t.requests,e=0,n=i.length;e<n;e++)a=i[e],!a.finished&&(a.finished=!0,a.abort());return t.clearRequests()},initLastModified:function(){var e,n,i,a,l,d,c,u,h,g;d=(e=r.lastModified).ThreadWatcher||(e.ThreadWatcher=r.dict()),c=t.dbLM.data;for(h in c){i=c[h],u=i.boards;for(n in u)if(a=u[n],t.db.get({siteID:h,boardID:n}))for(g in a)l=a[g],d[g]=l;else t.dbLM.delete({siteID:h,boardID:n})}},fetchAuto:function(){var e,n,i,a;if(clearTimeout(t.timeout),!!f["Auto Update Thread Watcher"])return e=t.db,n=f["Show Page"]||t.unreadEnabled&&f["Show Unread Count"]?5*r.MINUTE:2*r.HOUR,i=Date.now(),i-n<(a=e.data.lastChecked||0)&&a<=i||I.hidden||!I.hasFocus()||t.fetchAllStatus(n),t.timeout=setTimeout(t.fetchAuto,n)},buttonFetchAll:function(){return t.syncing||t.requests.length?t.abort():t.fetchAllStatus()},fetchAllStatus:function(e){var n,i,a,l,d,c;for(e==null&&(e=0),t.status.textContent="...",r.addClass(t.refreshButton,"fa-spin"),t.syncing=!0,i=[t.db,t.unreaddb,se.db].filter(function(u){return u}),d=0,c=[],a=0,l=i.length;a<l;a++)n=i[a],c.push(n.forceSync(function(){var u,h,g,m,b,v,A,w,x;if(++d===i.length){if(!t.syncing)return;if(delete t.syncing,!(0<=(w=Date.now()-(t.db.data.lastChecked||0))&&w<e)){for(g=t.db,A=Date.now(),m=!(A-2*r.HOUR<(x=g.data.lastChecked2||0)&&x<=A),h=t.getAll(!0),b=0,v=h.length;b<v;b++)u=h[b],t.fetchBoard(u,m);g.setLastChecked(),m&&g.setLastChecked("lastChecked2")}if(t.fetched===t.requests.length)return t.clearRequests()}}));return c},fetchBoard:function(e,n){var i,a,l,d,c,u,h,g,m,b,v,A;if(e.some(function(w){return!w.data.isDead})){for(d=!1,c=0,u=e.length;c<u;c++)b=e[c],l=b.data,!l.isDead&&l.last!==-1&&(f["Show Page"]&&l.page==null&&(d=!0),l.modified==null&&(d=b.force=!0));if(h=e[0],m=h.siteID,a=h.boardID,g=p.sites[m],!!g&&(A=n&&g.threadModTimeIgnoresSage?"catalogJSON":"threadsListJSON",v=typeof(i=g.urls)[A]=="function"?i[A]({siteID:m,boardID:a}):void 0,!!v))return t.fetch(v,{siteID:m,force:d},[e,v],t.parseBoard)}},parseBoard:function(e,n){var i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W,z,V,K,G;if(this.status===200){P=e[0],z=P.siteID,a=P.boardID,k=this.getResponseHeader("Last-Modified"),t.dbLM.extend({siteID:z,boardID:a,val:r.item(n,k)}),G=r.dict(),M=0,S=0,R=null;try{for(M=((q=this.response[0])!=null?q.threads.length:void 0)||0,O=this.response,d=h=0,v=O.length;h<v;d=++h)for(B=O[d],j=B.threads,g=0,A=j.length;g<A;g++)u=j[g],G[u.no]={page:d+1,index:S,modified:u.last_modified,replies:u.replies},S++,(R==null||u.no<R)&&(R=u.no)}catch{for(m=0,w=e.length;m<w;m++)V=e[m],t.fetchStatus(V)}for(C=0,x=e.length;C<x;C++)V=e[C],K=V.threadID,l=V.data,G[K]?(U=G[K],B=U.page,c=U.index,D=U.modified,W=U.replies,f["Show Page"]&&(b=typeof(i=p.sites[z]).isPrunedByAge=="function"&&i.isPrunedByAge({siteID:z,boardID:a})?K===R:c>=S-M,t.update(z,a,K,{page:B,lastPage:b})),t.unreadEnabled&&f["Show Unread Count"]&&(D!==l.modified||W!=null&&W!==l.replies)&&((V.newData||(V.newData={})).modified=D,t.fetchStatus(V))):t.fetchStatus(V)}},fetchStatus:function(e){var n,i,a,l,d,c,u,h;if(c=e.siteID,i=e.boardID,u=e.threadID,a=e.data,l=e.force,h=(d=p.sites[c])!=null&&typeof(n=d.urls).threadJSON=="function"?n.threadJSON({siteID:c,boardID:i,threadID:u}):void 0,!!h&&!(a.isDead&&!l)&&a.last!==-1)return t.fetch(h,{siteID:c,force:l},[e],t.parseStatus)},parseStatus:function(e,n){var i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W;if(O=e.siteID,l=e.boardID,j=e.threadID,d=e.data,w=e.newData,c=e.force,q=p.sites[O],this.status===200&&this.response){if(m=this.response.posts[this.response.posts.length-1].no,P=this.response.posts.length-1,h=u=!!(this.response.posts[0].archived||n),h&&f["Auto Prune"]){t.rm(O,l,j);return}if(m===d.last&&h===d.isDead&&u===d.isArchived)return;for(b=t.unreaddb.get({siteID:O,boardID:l,threadID:j,defaultValue:0}),U=d.unread||0,C=d.quotingYou||0,W=!!((D=se.db)!=null&&D.get({siteID:O,boardID:l,threadID:j,postID:j})),S=this.response.posts,g=0,v=S.length;g<v;g++)if(x=S[g],x.no>(d.last||0)&&x.no>b&&!((R=se.db)!=null&&R.get({siteID:O,boardID:l,threadID:j,postID:x.no}))){if(k=!1,!f["Require OP Quote Link"]&&W)k=!0;else if(se.db&&x.com){for(M=q.regexp.quotelinkHTML,M.lastIndex=0;A=M.exec(x.com);)if(se.db.get({siteID:O,boardID:A[1]?encodeURIComponent(A[1]):l,threadID:A[2]||j,postID:A[3]||A[2]||j})){k=!0;break}}(!U||!C&&k)&&ue.isHidden(q.Build.parseJSON(x,{siteID:O,boardID:l}))||(U++,k&&(C=x.no))}return w||(w={}),r.extend(w,{last:m,replies:P,isDead:h,isArchived:u,unread:U,quotingYou:C}),t.update(O,l,j,w)}else if(this.status===404)return i=(B=p.sites[O])!=null&&typeof(a=B.urls).archivedThreadJSON=="function"?a.archivedThreadJSON({siteID:O,boardID:l,threadID:j}):void 0,!n&&i?t.fetch(i,{siteID:O,force:c},[e,!0],t.parseStatus):q.mayLackJSON&&d.last==null?t.update(O,l,j,{last:-1}):t.update(O,l,j,{isDead:!0})},getAll:function(e){var n,i,a,l,d,c,u,h,g,m;n=[],c=t.db.data;for(h in c){a=c[h],u=a.boards;for(i in u)if(m=u[i],!(f["Current Board"]&&(h!==p.SITE.ID||i!==p.BOARD.ID))){e&&n.push(l=[]);for(g in m)d=m[g],d&&typeof d=="object"&&(e?l:n).push({siteID:h,boardID:i,threadID:g,data:d})}}return n},makeLine:function(e,n,i,a){var l,d,c,u,h,g,m,b,v,A;return A=r.el("a",{className:"fa fa-times",href:"javascript:;"}),r.on(A,"click",t.cb.rm),c=a.excerpt,h=a.isArchived,c||(c="/"+n+"/ - No."+i),f["Show Site Prefix"]&&(c=t.prefixes[e]+c),g=r.el("a",{href:((b=p.sites[e])!=null?b.urls.thread({siteID:e,boardID:n,threadID:i},h):void 0)||"",title:c,className:"watcher-link"}),f["Show Page"]&&a.page!=null&&(m=r.el("span",{textContent:"["+a.page+"]",className:"watcher-page"}),r.add(g,m)),t.unreadEnabled&&f["Show Unread Count"]&&a.unread!=null&&(l=r.el("span",{textContent:"("+a.unread+")",className:"watcher-unread"}),r.add(g,l)),v=r.el("span",{textContent:c,className:"watcher-title"}),r.add(g,v),d=r.el("div"),u=n+"."+i,d.dataset.fullID=u,d.dataset.siteID=e,p.VIEW==="thread"&&u===p.BOARD+"."+p.THREADID&&r.addClass(d,"current"),a.isDead&&r.addClass(d,"dead-thread"),f["Show Page"]&&(a.lastPage&&r.addClass(d,"last-page"),a.page!=null&&(d.dataset.page=a.page)),t.unreadEnabled&&f["Show Unread Count"]&&(a.unread===0&&r.addClass(d,"replies-read"),a.unread&&r.addClass(d,"replies-unread"),(a.quotingYou||0)>(a.dismiss||0)&&r.addClass(d,"replies-quoting-you")),r.add(d,[A,r.tn(" "),g]),d},setPrefixes:function(e){var n,i,a,l,d,c,u,h,g,m,b;for(g=r.dict(),a=0,c=e.length;a<c;a++)if(m=e[a].siteID,!(m in g)){for(d=0,h="",n=Object.keys(g);n.length>0;){for(d++,h=m.slice(0,d),i=[],l=0,u=n.length;l<u;l++)b=n[l],b.slice(0,d)===h?i.push(b):g[b].length<d&&(g[b]=b.slice(0,d));n=i}g[m]=h}return t.prefixes=g},build:function(){var e,n,i,a,l,d,c,u,h,g,m;for(d=[],m=t.getAll(),t.setPrefixes(m),i=0,a=m.length;i<a;i++)c=m[i],u=c.siteID,e=c.boardID,g=c.threadID,n=c.data,n.excerpt==null&&u===p.SITE.ID&&(h=p.threads.get(e+"."+g))&&h.OP&&t.db.extend({boardID:e,threadID:g,val:{excerpt:H.threadExcerpt(h)}}),d.push(t.makeLine(u,e,g,n));return l=t.list,r.rmAll(l),r.add(l,d),t.refreshIcon()},refresh:function(){if(t.build(),p.threads.forEach(function(e){var n,i,a,l,d,c;if(n=t.isWatched(e),e.OP)for(d=[e.OP].concat(o.call(e.OP.clones)),i=0,a=d.length;i<a;i++)l=d[i],(c=r(".watch-thread-link",l.nodes.info))&&t.setToggler(c,n);if(e.catalogView)return e.catalogView.nodes.root.classList.toggle("watched",n)}),f["Pin Watched Threads"])return r.event("SortIndex",{deferred:f["Index Mode"]!=="catalog"})},refreshIcon:function(){var e,n,i,a;for(a=["replies-unread","replies-quoting-you"],n=0,i=a.length;n<i;n++)e=a[n],t.shortcut.classList.toggle(e,!!r("."+e,t.dialog))},update:function(e,n,i,a){var l,d,c,u,h,g,m,b,v,A;if(l=(b=t.db)!=null?b.get({siteID:e,boardID:n,threadID:i}):void 0){if(a.isDead&&f["Auto Prune"]){t.rm(e,n,i);return}if(a.isDead||a.last===-1)for(v=["isArchived","page","lastPage","unread","quotingyou"],d=0,u=v.length;d<u;d++)c=v[d],c in a||(a[c]=void 0);a.last!=null&&a.last<l.last&&(a.modified=void 0),g=0;for(c in a)A=a[c],l[c]!==A&&g++;if(g)return t.db.extend({siteID:e,boardID:n,threadID:i,val:a}),(h=r("#watched-threads > [data-site-i-d='"+e+"'][data-full-i-d='"+n+"."+i+"']",t.dialog))?(m=t.makeLine(e,n,i,l),r.replace(h,m),t.refreshIcon()):t.refresh()}},set404:function(e,n,i){var a,l;return(a=(l=t.db)!=null?l.get({boardID:e,threadID:n}):void 0)?f["Auto Prune"]?(t.db.delete({boardID:e,threadID:n}),i()):a.isDead&&!(a.isArchived!=null||a.page!=null||a.lastPage!=null||a.unread!=null||a.quotingYou!=null)?i():t.db.extend({boardID:e,threadID:n,val:{isDead:!0,isArchived:void 0,page:void 0,lastPage:void 0,unread:void 0,quotingYou:void 0}},i):i()},toggle:function(e){var n,i,a;return i=p.SITE.ID,n=e.board.ID,a=e.ID,t.db.get({boardID:n,threadID:a})?t.rm(i,n,a):t.add(e)},add:function(e,n){var i,a,l,d;if(a={},l=p.SITE.ID,i=e.board.ID,d=e.ID,e.isDead){if(f["Auto Prune"]&&t.db.get({boardID:i,threadID:d})){t.rm(l,i,d,n);return}a.isDead=!0}return e.OP&&(a.excerpt=H.threadExcerpt(e)),t.addRaw(i,d,a,n)},addRaw:function(e,n,i,a){var l,d;if(l=t.db.get({boardID:e,threadID:n,defaultValue:r.dict()}),delete l.last,delete l.modified,r.extend(l,i),t.db.set({boardID:e,threadID:n,val:l},a),t.refresh(),d={siteID:p.SITE.ID,boardID:e,threadID:n,data:i,force:!0},f["Show Page"]&&!i.isDead)return t.fetchBoard([d]);if(t.unreadEnabled&&f["Show Unread Count"])return t.fetchStatus(d)},rm:function(e,n,i,a){return t.db.delete({siteID:e,boardID:n,threadID:i},a),t.refresh()},menu:{init:function(){var e;if(f["Thread Watcher"])return e=this.menu=new $.Menu("thread watcher"),r.on(r(".menu-button",t.dialog),"click",function(n){return e.toggle(n,this,t)}),this.addMenuEntries()},addHeaderMenuEntry:function(){var e;if(p.VIEW==="thread")return e=r.el("a",{href:"javascript:;"}),L.menu.addEntry({el:e,order:60,open:function(){var n,i,a,l;return i=t.db.get({boardID:p.BOARD.ID,threadID:p.THREADID})?["unwatch-thread","watch-thread","Unwatch thread"]:["watch-thread","unwatch-thread","Watch thread"],n=i[0],a=i[1],l=i[2],r.addClass(e,n),r.rmClass(e,a),e.textContent=l,!0}}),r.on(e,"click",function(){return t.toggle(p.threads.get(p.BOARD+"."+p.THREADID))})},addMenuEntries:function(){var e,n,i,a,l,d,c,u,h,g,m,b;for(i=[],i.push({text:"Open all threads",cb:t.cb.openAll,open:function(){return this.el.classList.toggle("disabled",!t.list.firstElementChild),!0}}),i.push({text:"Open unread threads",cb:t.cb.openUnread,open:function(){return this.el.classList.toggle("disabled",!r(".replies-unread",t.list)),!0}}),i.push({text:"Open dead threads",cb:t.cb.openDeads,open:function(){return this.el.classList.toggle("disabled",!r(".dead-thread",t.list)),!0}}),i.push({text:"Prune dead threads",cb:t.cb.pruneDeads,open:function(){return this.el.classList.toggle("disabled",!r(".dead-thread",t.list)),!0}}),i.push({text:"Dismiss posts quoting you",title:"Unhighlight the thread watcher icon and threads until there are new replies quoting you.",cb:t.cb.dismiss,open:function(){return this.el.classList.toggle("disabled",!r.hasClass(t.shortcut,"replies-quoting-you")),!0}}),l=0,d=i.length;l<d;l++)h=i[l],m=h.text,b=h.title,e=h.cb,u=h.open,a={el:r.el("a",{textContent:m,href:"javascript:;"})},b&&(a.el.title=b),r.on(a.el,"click",e),a.open=u.bind(a),this.menu.addEntry(a);g=de.threadWatcher;for(c in g)n=g[c],this.addCheckbox(c,n[1])},addCheckbox:function(e,n){var i,a;return i={type:"thread watcher",el:$.checkbox(e,e.replace(" Thread Watcher",""))},i.el.title=n,a=i.el.firstElementChild,e==="Show Unread Count"&&!t.unreadEnabled&&(a.disabled=!0,r.addClass(i.el,"disabled"),i.el.title+=`
[Remember Last Read Post is disabled.]`),r.on(a,"change",r.cb.checked),(e==="Current Board"||e==="Show Page"||e==="Show Unread Count"||e==="Show Site Prefix")&&r.on(a,"change",t.refresh),(e==="Show Page"||e==="Show Unread Count"||e==="Auto Update Thread Watcher")&&r.on(a,"change",t.fetchAuto),this.menu.addEntry(i)}}},t}.call(this),te=function(){var t;return t={init:function(){if(p.VIEW==="thread"&&(f["Unread Count"]||f["Unread Favicon"]||f["Unread Line"]||f["Remember Last Read Post"]||f["Desktop Notifications"]||f["Quote Threading"]))return f["Remember Last Read Post"]&&(r.sync("Remember Last Read Post",function(s){return f["Remember Last Read Post"]=s}),this.db=new fe("lastReadPosts",this.sync)),this.hr=r.el("hr",{id:"unread-line",className:"unread-line"}),this.posts=new Set,this.postsQuotingYou=new Set,this.order=new $e,this.position=null,F.Thread.push({name:"Unread",cb:this.node}),F.Post.push({name:"Unread",cb:this.addPost})},node:function(){var s,o,e,n,i,a;for(t.thread=this,t.title=I.title,t.lastReadPost=((n=t.db)!=null?n.get({boardID:this.board.ID,threadID:this.ID}):void 0)||0,t.readCount=0,i=this.posts.keys,o=0,e=i.length;o<e;o++)s=i[o],+s<=t.lastReadPost&&t.readCount++;return r.one(I,"4chanXInitFinished",t.ready),r.on(I,"PostsInserted",t.onUpdate),r.on(I,"ThreadUpdate",function(l){if(l.detail[404])return t.update()}),a=r.el("a",{href:"javascript:;",className:"unread-reset",textContent:"Mark all unread"}),r.on(a,"click",t.reset),L.menu.addEntry({el:a,order:70})},ready:function(){if(f["Remember Last Read Post"]&&f["Scroll to Last Read Post"]&&t.scroll(),t.setLine(!0),t.read(),t.update(),r.on(I,"scroll visibilitychange",t.read),f["Unread Line"])return r.on(I,"visibilitychange",t.setLine)},positionPrev:function(){return t.position?t.position.prev:t.order.last},scroll:function(){var s,o,e;if(!((o=location.hash.match(/\d+/))&&o[0]in t.thread.posts))for(e=t.positionPrev();e;)if(s=e.data.nodes.bottom,!s.getBoundingClientRect().height)e=e.prev;else{L.scrollToIfNeeded(s,!0);break}},reset:function(){if(t.lastReadPost!=null)return t.posts=new Set,t.postsQuotingYou=new Set,t.order=new $e,t.position=null,t.lastReadPost=0,t.readCount=0,t.thread.posts.forEach(function(s){return t.addPost.call(s)}),r.forceSync("Remember Last Read Post"),f["Remember Last Read Post"]&&(!t.thread.isDead||t.thread.isArchived)&&t.db.set({boardID:t.thread.board.ID,threadID:t.thread.ID,val:0}),t.updatePosition(),t.setLine(),t.update()},sync:function(){var s,o,e,n,i,a,l;if(t.lastReadPost!=null&&(n=t.db.get({boardID:t.thread.board.ID,threadID:t.thread.ID,defaultValue:0}),t.lastReadPost<n)){for(t.lastReadPost=n,i=t.thread.posts.keys,o=e=a=t.readCount,l=i.length;e<l;o=e+=1){if(s=+i[o],!t.thread.posts.get(s).isFetchedQuote){if(s>t.lastReadPost)break;t.posts.delete(s),t.postsQuotingYou.delete(s)}t.readCount++}return t.updatePosition(),t.setLine(),t.update()}},addPost:function(){if(!(this.isFetchedQuote||this.isClone)&&(t.order.push(this),!(this.ID<=t.lastReadPost||this.isHidden||se.isYou(this))))return t.posts.add(t.posts.last=this.ID),t.addPostQuotingYou(this),t.position!=null?t.position:t.position=t.order[this.ID]},addPostQuotingYou:function(s){var o,e,n,i,a;for(i=s.nodes.quotelinks,o=0,e=i.length;o<e;o++)if(n=i[o],!!((a=se.db)!=null&&a.get(H.postDataFromLink(n)))){t.postsQuotingYou.add(t.postsQuotingYou.last=s.ID),t.openNotification(s);return}},openNotification:function(s,o){var e;if(o==null&&(o=" replied to you"),!!L.areNotificationsEnabled)return e=new Notification(""+s.info.nameBlock+o,{body:s.commentDisplay(),icon:Be.logo}),e.onclick=function(){return L.scrollToIfNeeded(s.nodes.bottom,!0),window.focus()},e.onshow=function(){return setTimeout(function(){return e.close()},7*r.SECOND)}},onUpdate:function(){return r.queueTask(function(){return t.setLine(),t.read(),t.update()})},readSinglePost:function(s){var o;if(o=s.ID,!!t.posts.has(o))return t.posts.delete(o),t.postsQuotingYou.delete(o),t.updatePosition(),t.saveLastReadPost(),t.update()},read:r.debounce(100,function(s){var o,e,n,i,a;if(!t.posts.size&&t.readCount!==t.thread.posts.keys.length&&t.saveLastReadPost(),!(I.hidden||!t.posts.size)){for(n=0;t.position&&(a=t.position,o=a.ID,i=a.data,e=i.nodes.bottom,!e.getBoundingClientRect().height||L.getBottomOf(e)>-1);)n++,t.posts.delete(o),t.postsQuotingYou.delete(o),t.position=t.position.next;if(n&&(t.updatePosition(),t.saveLastReadPost(),s))return t.update()}}),updatePosition:function(){for(;t.position&&!t.posts.has(t.position.ID);)t.position=t.position.next},saveLastReadPost:r.debounce(2*r.SECOND,function(){var s,o,e,n,i,a;if(r.forceSync("Remember Last Read Post"),!!(f["Remember Last Read Post"]&&t.db)){for(n=t.thread.posts.keys,o=e=i=t.readCount,a=n.length;e<a;o=e+=1){if(s=+n[o],!t.thread.posts.get(s).isFetchedQuote){if(t.posts.has(s))break;t.lastReadPost=s}t.readCount++}if(!(t.thread.isDead&&!t.thread.isArchived))return t.db.set({boardID:t.thread.board.ID,threadID:t.thread.ID,val:t.lastReadPost})}}),setLine:function(s){var o,e,n;if(f["Unread Line"])return(t.hr.hidden||I.hidden||s===!0)&&(e=t.linePosition,(t.linePosition=t.positionPrev())?t.linePosition!==e&&(o=t.linePosition.data.nodes.bottom,((n=o.nextSibling)!=null?n.tagName:void 0)==="BR"&&(o=o.nextSibling),r.after(o,t.hr)):r.rm(t.hr)),t.hr.hidden=t.linePosition===t.order.last},update:function(){var s,o,e,n,i,a;if(s=t.posts.size,o=t.postsQuotingYou.size,f["Unread Count"]&&(a=f["Quoted Title"]&&o?"(!) ":"",n=s||!f["Hide Unread Count at (0)"]?"("+s+") ":"",i=t.thread.isDead?t.title.replace("-",t.thread.isArchived?"- Archived -":"- 404 -"):t.title,I.title=""+a+n+i),t.saveThreadWatcherCount(),f["Unread Favicon"]&&p.SITE.software==="yotsuba")return e=t.thread.isDead,Be.set(o?e?"unreadDeadY":"unreadY":s?e?"unreadDead":"unread":e?"dead":"default")},saveThreadWatcherCount:r.debounce(2*r.SECOND,function(){var s,o,e,n,i;if(r.forceSync("Remember Last Read Post"),f["Remember Last Read Post"]&&(!t.thread.isDead||t.thread.isArchived)){if(n=!f["Require OP Quote Link"]&&se.isYou(t.thread.OP)?t.posts:t.postsQuotingYou,!n.size)n.last=0;else if(!n.has(n.last)){for(n.last=0,e=t.thread.posts.keys,s=o=i=e.length-1;o>=0;s=o+=-1)if(n.has(+e[s])){n.last=e[s];break}}return pe.update(p.SITE.ID,t.thread.board.ID,t.thread.ID,{last:t.thread.lastPost,isDead:t.thread.isDead,isArchived:t.thread.isArchived,unread:t.posts.size,quotingYou:n.last||0})}})},t}.call(this),We=function(){var t;return t={lastReadPost:r.dict(),hr:r.dict(),markReadLink:r.dict(),init:function(){if(p.VIEW==="index"&&f["Remember Last Read Post"]&&f["Unread Line in Index"])return this.enabled=!0,this.db=new fe("lastReadPosts",this.sync),F.Thread.push({name:"Unread Line in Index",cb:this.node}),r.on(I,"IndexRefreshInternal",this.onIndexRefresh),r.on(I,"PostsInserted PostsRemoved",this.onPostsInserted)},node:function(){if(t.lastReadPost[this.fullID]=t.db.get({boardID:this.board.ID,threadID:this.ID})||0,!X.enabled)return t.update(this)},onIndexRefresh:function(s){var o,e,n,i,a,l;if(!s.detail.isCatalog){for(n=s.detail.threadIDs,i=[],o=0,e=n.length;o<e;o++)l=n[o],a=p.threads.get(l),i.push(t.update(a));return i}},onPostsInserted:function(s){var o,e,n,i;if(s.target!==X.root&&(n=H.threadFromNode(s.target),!(!n||n.nodes.root!==s.target)&&(i=!!((o=t.hr[n.fullID])!=null&&o.parentNode),t.update(n),f["Scroll to Last Read Post"]&&s.type==="PostsInserted"&&!i&&((e=t.hr[n.fullID])!=null&&e.parentNode))))return L.scrollToIfNeeded(t.hr[n.fullID],!0)},sync:function(){return p.threads.forEach(function(s){var o,e;if(o=t.db.get({boardID:s.board.ID,threadID:s.ID})||0,o!==t.lastReadPost[s.fullID]&&(t.lastReadPost[s.fullID]=o,(e=s.nodes.root)!=null&&e.parentNode))return t.update(s)})},update:function(s){var o,e,n,i,a,l,d,c;return a=t.lastReadPost[s.fullID],c=0,d=0,e=null,s.posts.forEach(function(u){if(u.isReply&&s.nodes.root.contains(u.nodes.root)){if(c++,u.ID<=a)return d++;if((!e||u.ID<e.ID)&&!u.isHidden&&!se.isYou(u))return e=u}}),i=t.hr[s.fullID],e&&(d||a===s.OP.ID&&(!r(p.SITE.selectors.summary,s.nodes.root)||s.ID in Ke.statuses))?(i||(i=t.hr[s.fullID]=r.el("hr",{className:"unread-line"})),r.before(e.nodes.root,i)):r.rm(i),n=c?e||!d:X.enabled?s.lastPost>a:s.OP.ID>a,s.nodes.root.classList.toggle("unread-thread",n),l=t.markReadLink[s.fullID],l||(l=t.markReadLink[s.fullID]=r.el("a",{className:"unread-mark-read brackets-wrap",href:"javascript:;",textContent:"Mark Read"}),r.on(l,"click",t.markRead)),(o=r(p.SITE.selectors.threadDivider,s.nodes.root))?r.before(o,l):r.add(s.nodes.root,l)},markRead:function(){var s;return s=H.threadFromNode(this),t.lastReadPost[s.fullID]=s.lastPost,t.db.set({boardID:s.board.ID,threadID:s.ID,val:s.lastPost}),r.rm(t.hr[s.fullID]),s.nodes.root.classList.remove("unread-thread"),pe.update(p.SITE.ID,s.board.ID,s.ID,{last:s.lastPost,unread:0,quotingYou:0})}},t}.call(this),Y={},function(){Y.cache={init:function(){return r.on(I,"SaveCaptcha",function(t){return function(s){return t.saveAPI(s.detail)}}(this)),r.on(I,"NoCaptcha",function(t){return function(s){return t.noCaptcha(s.detail)}}(this))},captchas:[],getCount:function(){return this.captchas.length},neededRaw:function(){return!(this.haveCookie()||this.captchas.length||y.req||this.submitCB)&&(y.posts.length>1||f["Auto-load captcha"]||!y.posts[0].isOnlyQuotes()||y.posts[0].file)},needed:function(){return this.neededRaw()&&r.event("LoadCaptcha")},prerequest:function(){if(f["Prerequest Captcha"])return r.queueTask(function(t){return function(){var s;if(!t.prerequested&&t.neededRaw()&&!r.event("LoadCaptcha")&&!y.captcha.occupied()&&y.cooldown.seconds<=60&&y.selected===y.posts[y.posts.length-1]&&!y.selected.isOnlyQuotes()&&(s=y.selected.thread!=="new",!r.event("RequestCaptcha",{isReply:s})))return t.prerequested=!0,t.submitCB=function(o){if(o)return t.save(o)},t.updateCount()}}(this))},haveCookie:function(){return/\b_ct=/.test(I.cookie)&&y.posts[0].thread!=="new"},getOne:function(){var t;return delete this.prerequested,this.clear(),(t=this.captchas.shift())?(this.count(),t):null},request:function(t){if(!(!this.submitCB&&r.event("RequestCaptcha",{isReply:t})))return function(s){return function(o){return s.submitCB=o,s.updateCount()}}(this)},abort:function(){if(this.submitCB)return delete this.submitCB,r.event("AbortCaptcha"),this.updateCount()},saveAPI:function(t){var s;return(s=this.submitCB)?(delete this.submitCB,s(t),this.updateCount()):this.save(t)},noCaptcha:function(t){var s;if(s=this.submitCB)return(!this.haveCookie()||t?.error)&&(y.error(t?.error||"Failed to retrieve captcha."),y.captcha.setup(I.activeElement===y.nodes.status)),delete this.submitCB,s(),this.updateCount()},save:function(t){var s;if(s=this.submitCB){this.abort(),s(t);return}return this.captchas.push(t),this.captchas.sort(function(o,e){return o.timeout-e.timeout}),this.count()},clear:function(){var t,s,o,e,n,i;if(this.captchas.length){for(n=Date.now(),i=this.captchas,s=o=0,e=i.length;o<e&&(t=i[s],!(t.timeout>n));s=++o);if(s)return this.captchas=this.captchas.slice(s),this.count()}},count:function(){return clearTimeout(this.timer),this.captchas.length&&(this.timer=setTimeout(this.clear.bind(this),this.captchas[0].timeout-Date.now())),this.updateCount()},updateCount:function(){return r.event("CaptchaCount",this.captchas.length)}}}.call(this),function(){Y.replace={init:function(){var t;if(p.SITE.software==="yotsuba"&&I.cookie.indexOf("pass_enabled=1")<0){if(f["Force Noscript Captcha"]&&Z.jsEnabled){r.ready(Y.replace.noscript);return}if(f.captchaLanguage.trim())return(t=location.hostname)==="boards.4chan.org"||t==="boards.4channel.org"?r.onExists(E,"#captchaFormPart",function(s){return r.onExists(s,'iframe[src^="https://www.google.com/recaptcha/"]',Y.replace.iframe)}):r.onExists(E,'iframe[src^="https://www.google.com/recaptcha/"]',Y.replace.iframe)}},noscript:function(){var t,s,o,e,n;if((o=r("#g-recaptcha"))&&(s=r("noscript",o.parentNode)))return e=r.el("span",{id:"captcha-forced-noscript"}),r.replace(s,e),r.rm(o),t=function(){return e.innerHTML=s.textContent,Y.replace.iframe(r('iframe[src^="https://www.google.com/recaptcha/"]',e))},(n=r("#togglePostFormLink a, #form-link"))?r.on(n,"click",t):t()},iframe:function(t){var s,o;(s=f.captchaLanguage.trim())&&(o=/[?&]hl=/.test(t.src)?t.src.replace(/([?&]hl=)[^&]*/,"$1"+encodeURIComponent(s)):t.src+("&hl="+encodeURIComponent(s)),t.src!==o&&(t.src=o))}}}.call(this),function(){Y.t={init:function(){var t;if(!(I.cookie.indexOf("pass_enabled=1")>=0)&&(this.isEnabled=!!r("#t-root")||!r.id("postForm")))return t=r.el("div",{className:"captcha-root"}),this.nodes={root:t},r.addClass(y.nodes.el,"has-captcha","captcha-t"),r.after(y.nodes.com.parentNode,t)},moreNeeded:function(){},getThread:function(){var t,s;return t=p.BOARD.ID,y.posts[0].thread==="new"?s="0":s=""+y.posts[0].thread,{boardID:t,threadID:s}},setup:function(t){if(this.isEnabled&&(this.nodes.container||(this.nodes.container=r.el("div",{className:"captcha-container"}),r.prepend(this.nodes.root,this.nodes.container),Y.t.currentThread=Y.t.getThread(),r.global(function(){var s;return s=document.querySelector("#qr .captcha-container"),window.TCaptcha.init(s,this.boardID,+this.threadID),window.TCaptcha.setErrorCb(function(o){return window.dispatchEvent(new CustomEvent("CreateNotification",{detail:{type:"warning",content:""+o}}))})},Y.t.currentThread)),t))return r("#t-resp").focus()},destroy:function(){if(this.isEnabled&&this.nodes.container)return r.global(function(){return window.TCaptcha.destroy()}),r.rm(this.nodes.container),delete this.nodes.container},updateThread:function(){var t,s,o,e;if(this.isEnabled&&(o=Y.t.currentThread||{},t=o.boardID,e=o.threadID,s=Y.t.getThread(),!(s.boardID===t&&s.threadID===e)))return Y.t.destroy(),Y.t.setup()},getOne:function(){var t,s,o,e,n,i;if(i={},this.nodes.container)for(n=["t-response","t-challenge"],s=0,e=n.length;s<e;s++)o=n[s],i[o]=r("[name='"+o+"']",this.nodes.container).value;return!i["t-response"]&&!((t=r("#t-msg"))&&/Verification not required/i.test(t.textContent))&&(i=null),i},setUsed:function(){if(this.isEnabled&&this.nodes.container)return r.global(function(){return window.TCaptcha.clearChallenge()})},occupied:function(){return!!this.nodes.container}}}.call(this),function(){var t=[].indexOf||function(s){for(var o=0,e=this.length;o<e;o++)if(o in this&&this[o]===s)return o;return-1};Y.v2={lifetime:2*r.MINUTE,init:function(){var s,o;if(!(I.cookie.indexOf("pass_enabled=1")>=0)&&(this.isEnabled=!!r("#g-recaptcha, #captcha-forced-noscript")||!r.id("postForm")))return(this.noscript=f["Force Noscript Captcha"]||!Z.jsEnabled)&&r.addClass(y.nodes.el,"noscript-captcha"),Y.cache.init(),r.on(I,"CaptchaCount",this.count.bind(this)),o=r.el("div",{className:"captcha-root"}),r.extend(o,{innerHTML:'<div class="captcha-counter"><a href="javascript:;"></a></div>'}),s=r(".captcha-counter > a",o),this.nodes={root:o,counter:s},this.count(),r.addClass(y.nodes.el,"has-captcha","captcha-v2"),r.after(y.nodes.com.parentNode,o),r.on(s,"click",this.toggle.bind(this)),r.on(s,"keydown",function(e){return function(n){if(Pe.keyCode(n)==="Space")return e.toggle(),n.preventDefault(),n.stopPropagation()}}(this)),r.on(window,"captcha:success",function(e){return function(){return r.queueTask(function(){return e.save(!1)})}}(this))},timeouts:{},prevNeeded:0,noscriptURL:function(){var s,o;return o="https://www.google.com/recaptcha/api/fallback?k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc",(s=f.captchaLanguage.trim())&&(o+="&hl="+encodeURIComponent(s)),o},moreNeeded:function(){return r.queueTask(function(s){return function(){var o;return o=Y.cache.needed(),o&&!s.prevNeeded&&s.setup(y.cooldown.auto&&I.activeElement===y.nodes.status),s.prevNeeded=o}}(this))},toggle:function(){return this.nodes.container&&!this.timeouts.destroy?this.destroy():this.setup(!0,!0)},setup:function(s,o){if(this.isEnabled&&(Y.cache.needed()||o)){if(s&&(r.addClass(y.nodes.el,"focus"),this.nodes.counter.focus()),this.timeouts.destroy)return clearTimeout(this.timeouts.destroy),delete this.timeouts.destroy,this.reload();if(this.nodes.container){r.queueTask(function(e){return function(){var n;if(e.nodes.container&&I.activeElement===e.nodes.counter&&(n=r('iframe[src^="https://www.google.com/recaptcha/"]',e.nodes.container)))return n.focus(),y.focus()}}(this));return}return this.nodes.container=r.el("div",{className:"captcha-container"}),r.prepend(this.nodes.root,this.nodes.container),new MutationObserver(this.afterSetup.bind(this)).observe(this.nodes.container,{childList:!0,subtree:!0}),this.noscript?this.setupNoscript():this.setupJS()}},setupNoscript:function(){var s,o,e;return o=r.el("iframe",{id:"qr-captcha-iframe",scrolling:"no",src:this.noscriptURL()}),s=r.el("div"),e=r.el("textarea"),r.add(s,e),r.add(this.nodes.container,[o,s])},setupJS:function(){return r.global(function(){var s,o,e;if(o=function(){var n,i;return n=document.documentElement.classList,i=document.querySelector("#qr .captcha-container"),i.dataset.widgetID=window.grecaptcha.render(i,{sitekey:"6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc",theme:n.contains("tomorrow")||n.contains("spooky")||n.contains("dark-captcha")?"dark":"light",callback:function(a){return window.dispatchEvent(new CustomEvent("captcha:success",{detail:a}))}})},window.grecaptcha)return o();if(s=window.onRecaptchaLoaded,window.onRecaptchaLoaded=function(){return o(),s()},!document.head.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]'))return e=document.createElement("script"),e.src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit",document.head.appendChild(e)})},afterSetup:function(s){var o,e,n,i,a,l,d,c,u;for(o=0,i=s.length;o<i;o++)for(l=s[o],c=l.addedNodes,n=0,a=c.length;n<a;n++)d=c[n],(e=r.x('./descendant-or-self::iframe[starts-with(@src, "https://www.google.com/recaptcha/")]',d))&&this.setupIFrame(e),(u=r.x("./descendant-or-self::textarea",d))&&this.setupTextArea(u)},setupIFrame:function(s){var o,e;if(E.contains(s)&&(Y.replace.iframe(s),r.addClass(y.nodes.el,"captcha-open"),this.fixQRPosition(),r.on(s,"load",this.fixQRPosition),I.activeElement===this.nodes.counter&&s.focus(),((o=r.engine)==="blink"||o==="edge")&&(e=s.parentNode,t.call(N("#qr .captcha-container > div > div:first-of-type"),e)>=0)))return r.on(s.parentNode,"scroll",function(){return this.scrollTop=0})},fixQRPosition:function(){if(y.nodes.el.getBoundingClientRect().bottom>E.clientHeight)return y.nodes.el.style.top="",y.nodes.el.style.bottom="0px"},setupTextArea:function(s){return r.one(s,"input",function(o){return function(){return o.save(!0)}}(this))},destroy:function(){if(this.isEnabled&&(delete this.timeouts.destroy,r.rmClass(y.nodes.el,"captcha-open"),this.nodes.container))return r.global(function(){var s;return s=document.querySelector("#qr .captcha-container"),window.grecaptcha.reset(s.dataset.widgetID)}),r.rm(this.nodes.container),delete this.nodes.container},getOne:function(s){return Y.cache.getOne(s)},save:function(s,o){var e,n,i;if(Y.cache.save({response:o||r("textarea",this.nodes.container).value,timeout:Date.now()+this.lifetime}),n=((i=I.activeElement)!=null?i.nodeName:void 0)==="IFRAME"&&/https?:\/\/www\.google\.com\/recaptcha\//.test(I.activeElement.src),Y.cache.needed()?(n&&(y.cooldown.auto||f["Post on Captcha Completion"]?this.nodes.counter.focus():y.nodes.status.focus()),this.reload()):(s?this.destroy():(e=this.timeouts).destroy==null&&(e.destroy=setTimeout(this.destroy.bind(this),3*r.SECOND)),n&&y.nodes.status.focus()),f["Post on Captcha Completion"]&&!y.cooldown.auto)return y.submit()},count:function(){var s,o;return s=Y.cache.getCount(),o=Y.cache.submitCB?"...":"",this.nodes.counter.textContent="Captchas: "+s+o,this.moreNeeded()},reload:function(){return r('iframe[src^="https://www.google.com/recaptcha/api/fallback?"]',this.nodes.container)?(this.destroy(),this.setup(!1,!0)):r.global(function(){var s;return s=document.querySelector("#qr .captcha-container"),window.grecaptcha.reset(s.dataset.widgetID)})},occupied:function(){return!!this.nodes.container&&!this.timeouts.destroy}}}.call(this),Bt=function(){var t;return t={init:function(){if(p.SITE.software==="yotsuba"&&f["Pass Link"])return Z.ready(this.ready)},ready:function(){var s,o;if(o=r.id("styleSelector"))return s=r.el("span",{className:"brackets-wrap pass-link-container"}),r.extend(s,{innerHTML:'<a href="javascript:;">4chan Pass</a>'}),r.on(s.firstElementChild,"click",function(){return window.open("//sys."+location.hostname.split(".")[1]+".org/auth",Date.now(),"width=500,height=280,toolbar=0")}),r.before(o.previousSibling,[s,r.tn("\xA0\xA0")])}},t}.call(this),Xe=function(){var t;return t={init:function(){return r.on(I,"QRPostSuccessful",function(s){return function(o){if(o.detail.redirect)return s.event=o,s.delays=0,r.queueTask(function(){if(o===s.event&&s.delays===0)return location.href=o.detail.redirect})}}(this))},delays:0,delay:function(){var s;return this.event?(s=this.event,this.delays++,function(o){return function(){if(s===o.event&&(o.delays--,o.delays===0))return location.href=s.detail.redirect}}(this)):null}},t}.call(this),Lt=function(){var t;return t={init:function(){if(f["Remember Your Posts"])return r.ready(this.ready)},ready:function(){var s,o,e,n,i;if(I.title==="Post successful!")return n=r("h1").nextSibling.textContent.match(/thread:(\d+),no:(\d+)/),s=n[0],i=n[1],e=n[2],e=+e,i=+i||e,o=new fe("yourPosts"),o.set({boardID:p.BOARD.ID,threadID:i,postID:e,val:!0})}},t}.call(this),y=function(){var t,s=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1},o=[].slice;return t={mimeTypes:["image/jpeg","image/png","image/gif","application/pdf","application/vnd.adobe.flash.movie","application/x-shockwave-flash","video/webm","video/mp4"],validExtension:/\.(jpe?g|png|gif|pdf|swf|webm|mp4)$/i,typeFromExtension:{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",pdf:"application/pdf",swf:"application/vnd.adobe.flash.movie",webm:"video/webm",mp4:"video/mp4"},extensionFromType:{"image/jpeg":"jpg","image/png":"png","image/gif":"gif","application/pdf":"pdf","application/vnd.adobe.flash.movie":"swf","application/x-shockwave-flash":"swf","video/webm":"webm","video/mp4":"mp4"},init:function(){var e;if(f["Quick Reply"])return this.posts=[],r.on(I,"4chanXInitFinished",function(){return oe.ready(t.initReady)}),F.Post.push({name:"Quick Reply",cb:this.node}),this.shortcut=e=r.el("a",{className:"fa fa-comment-o disabled",textContent:"QR",title:"Quick Reply",href:"javascript:;"}),r.on(e,"click",function(){if(t.postingIsEnabled)return f["Persistent QR"]||!t.nodes||t.nodes.el.hidden?(t.open(),t.nodes.com.focus()):t.close()}),L.addShortcut("qr",e,540)},initReady:function(){var e,n,i,a,l,d,c;if(e=r("#g-recaptcha, #captcha-forced-noscript")?"v2":"t",t.captcha=Y[e],t.postingIsEnabled=!0,n=p.BOARD.config,c=function(u,h){var g;return+((g=n[u])!=null?g:h)},t.min_width=c("min_image_width",1),t.min_height=c("min_image_height",1),t.max_width=t.max_height=1e4,t.max_size=c("max_filesize",4194304),t.max_size_video=c("max_webm_filesize",t.max_size),t.max_comment=c("max_comment_chars",2e3),t.max_width_video=t.max_height_video=2048,t.max_duration_video=c("max_webm_duration",120),t.forcedAnon=!!n.forced_anon,t.spoiler=!!n.spoilers,(d=r.id("togglePostFormLink"))&&(i=r.el("h1",{className:"qr-link-container"}),r.extend(i,{innerHTML:'<a href="javascript:;" class="qr-link">'+(p.VIEW==="thread"?"Reply to Thread":"Start a Thread")+"</a>"}),t.link=i.firstElementChild,r.on(i.firstChild,"click",function(){return t.open(),t.nodes.com.focus()}),r.before(d,i),d.firstElementChild.textContent="Original Form"),p.VIEW==="thread"&&(a=r.el("div",{className:"brackets-wrap qr-link-container-bottom"}),r.extend(a,{innerHTML:'<a href="javascript:;" class="qr-link-bottom">Reply to Thread</a>'}),r.on(a.firstElementChild,"click",function(){return t.open(),t.nodes.com.focus()}),(l=r(".navLinksBot"))&&r.prepend(l,a)),r.on(I,"QRGetFile",t.getFile),r.on(I,"QRDrawFile",t.drawFile),r.on(I,"QRSetFile",t.setFile),r.on(I,"paste",t.paste),r.on(I,"dragover",t.dragOver),r.on(I,"drop",t.dropFile),r.on(I,"dragstart dragend",t.drag),r.on(I,"IndexRefreshInternal",t.generatePostableThreadsList),r.on(I,"ThreadUpdate",t.statusCheck),!!f["Persistent QR"]&&(t.open(),f["Auto Hide QR"]))return t.hide()},statusCheck:function(){var e;if(t.nodes)return e=t.posts[0].thread,e!=="new"&&p.threads.get(p.BOARD+"."+e).isDead?t.abort():t.status()},node:function(){if(r.on(this.nodes.quote,"click",t.quote),this.isFetchedQuote)return t.generatePostableThreadsList()},open:function(){var e;if(t.nodes)t.nodes.el.hidden&&t.captcha.setup(),t.nodes.el.hidden=!1,t.unhide();else try{t.dialog()}catch(n){e=n,delete t.nodes,Z.handleErrors({message:"Quick Reply dialog creation crashed.",error:e});return}return r.rmClass(t.shortcut,"disabled")},close:function(){var e,n,i,a;if(t.req){t.abort();return}for(t.nodes.el.hidden=!0,t.cleanNotifications(),t.blur(),r.rmClass(t.nodes.el,"dump"),r.addClass(t.shortcut,"disabled"),new t.post(!0),a=t.posts.splice(0,t.posts.length-1),e=0,n=a.length;e<n;e++)i=a[e],i.delete();return t.cooldown.auto=!1,t.status(),t.captcha.destroy()},focus:function(){return r.queueTask(function(){if(!t.inBubble())return t.hasFocus=I.activeElement&&t.nodes.el.contains(I.activeElement),t.nodes.el.classList.toggle("focus",t.hasFocus)})},inBubble:function(){var e,n;return e=N('iframe[src^="https://www.google.com/recaptcha/api2/frame"]'),n=I.activeElement,s.call(e,n)>=0||e.some(function(i){return getComputedStyle(i).visibility!=="hidden"&&i.getBoundingClientRect().bottom>0})},hide:function(){return t.blur(),r.addClass(t.nodes.el,"autohide"),t.nodes.autohide.checked=!0},unhide:function(){return r.rmClass(t.nodes.el,"autohide"),t.nodes.autohide.checked=!1},toggleHide:function(){return this.checked?t.hide():t.unhide()},blur:function(){if(t.nodes.el.contains(I.activeElement))return I.activeElement.blur()},toggleSJIS:function(e){return e.preventDefault(),f.sjisPreview=!f.sjisPreview,r.set("sjisPreview",f.sjisPreview),t.nodes.el.classList.toggle("sjis-preview",f.sjisPreview)},texPreviewShow:function(){return r.hasClass(t.nodes.el,"tex-preview")?t.texPreviewHide():(r.addClass(t.nodes.el,"tex-preview"),t.nodes.texPreview.textContent=t.nodes.com.value,r.event("mathjax",null,t.nodes.texPreview))},texPreviewHide:function(){return r.rmClass(t.nodes.el,"tex-preview")},addPost:function(){var e;return e=t.nodes&&!t.nodes.el.hidden,t.open(),e&&(r.addClass(t.nodes.el,"dump"),new t.post(!0)),t.nodes.com.focus()},setCustomCooldown:function(e){return f.customCooldownEnabled=e,t.cooldown.customCooldown=e,t.nodes.customCooldown.classList.toggle("disabled",!e)},toggleCustomCooldown:function(){var e;return e=r.hasClass(t.nodes.customCooldown,"disabled"),t.setCustomCooldown(e),r.set("customCooldownEnabled",e)},error:function(e,n){var i,a,l;if(t.open(),typeof e=="string"?i=r.tn(e):(i=e,i.removeAttribute("style")),a=new J("warning",i),t.notifications.push(a),L.areNotificationsEnabled){if((I.hidden||!(n||I.hasFocus()))&&(l=new Notification(i.textContent,{body:i.textContent,icon:Be.logo}),l.onclick=function(){return window.focus()},r.engine!=="gecko"))return l.onclose=function(){return a.close()},l.onshow=function(){return setTimeout(function(){return l.onclose=null,l.close()},7*r.SECOND)}}else if(I.hidden&&!t.cooldown.auto)return alert(i.textContent)},connectionError:function(){return r.el("span",{innerHTML:'Connection error while posting. [<a href="https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions#connection-errors" target="_blank">More info</a>]'})},notifications:[],cleanNotifications:function(){var e,n,i,a;for(a=t.notifications,e=0,n=a.length;e<n;e++)i=a[e],i.close();return t.notifications=[]},status:function(){var e,n,i,a;if(t.nodes)return i=t.posts[0].thread,i!=="new"&&p.threads.get(p.BOARD+"."+i).isDead&&(a="Dead",e=!0,t.cooldown.auto=!1),a=t.req?t.req.progress:t.cooldown.seconds||a,n=t.nodes.status,n.value=a?t.cooldown.auto?"Auto "+a:a:"Submit",n.disabled=e||!1},openPost:function(){var e;if(t.open(),t.selected.isLocked)return e=t.posts.indexOf(t.selected),(t.posts[e+1]||new t.post).select(),r.addClass(t.nodes.el,"dump"),t.cooldown.auto=!0},quote:function(e){var n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B,M,P,q,O,j,U,W,z,V,K,G;if(e?.preventDefault(),!!t.postingIsEnabled){for(z=I.getSelection(),D=H.postFromNode(this),W=D.nodes.root,S=new Range,S.selectNode(W),V=D.board.ID===p.BOARD.ID?">>"+D+`
`:">>>/"+D.board+"/"+D+`
`,c=h=0,B=z.rangeCount;0<=B?h<B:h>B;c=0<=B?++h:--h)try{if(R=z.getRangeAt(c),R.compareBoundaryPoints(Range.START_TO_START,S)<0&&R.setStartBefore(W),R.compareBoundaryPoints(Range.END_TO_END,S)>0&&R.setEndAfter(W),!R.toString().trim())continue;for(d=R.cloneContents(),n=R.commonAncestorContainer,r.x('ancestor-or-self::*[self::s or contains(@class,"removed-spoiler")]',n)&&(r.prepend(d,r.tn("[spoiler]")),r.add(d,r.tn("[/spoiler]"))),(u=r.x('ancestor-or-self::pre[contains(@class,"prettyprint")]',n))&&(r.prepend(d,r.tn("[code]")),r.add(d,r.tn("[/code]"))),M=N(u?"br":".prettyprint br",d),g=0,b=M.length;g<b;g++)k=M[g],r.replace(k,r.tn(`
`));for(P=N("br",d),m=0,v=P.length;m<v;m++)k=P[m],k!==d.lastChild&&r.replace(k,r.tn(`
>`));for(typeof(i=p.SITE).insertTags=="function"&&i.insertTags(d),q=N(".linkify[data-original]",d),x=0,A=q.length;x<A;x++)k=q[x],r.replace(k,r.tn(k.dataset.original));for(O=N(".embedder",d),C=0,w=O.length;C<w;C++)k=O[C],((j=k.previousSibling)!=null?j.nodeValue:void 0)===" "&&r.rm(k.previousSibling),r.rm(k);V+=">"+d.textContent.trim()+`
`}catch{}return t.openPost(),U=t.nodes,l=U.com,K=U.thread,l.value||(K.value=H.threadFromNode(this)),G=t.selected.isOnlyQuotes(),a=l.selectionStart,l.value=l.value.slice(0,a)+V+l.value.slice(l.selectionEnd),R=a+V.length,l.setSelectionRange(R,R),l.focus(),G&&(t.selected.quotedText=l.value),t.selected.save(l),t.selected.save(K)}},characterCount:function(){var e,n;return n=t.nodes.charCount,e=t.nodes.com.value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length,n.textContent=e,n.hidden=e<t.max_comment/2,(e>t.max_comment?r.addClass:r.rmClass)(n,"warning")},getFile:function(){var e;return r.event("QRFile",(e=t.selected)!=null?e.file:void 0)},drawFile:function(e){var n,i,a,l;if(i=(l=t.selected)!=null?l.file:void 0,!!(i&&/^(image|video)\//.test(i.type)))return a=/^video\//.test(i),n=r.el(a?"video":"img"),r.on(n,"error",function(){return t.openError()}),r.on(n,a?"loadeddata":"load",function(){return e.target.getContext("2d").drawImage(n,0,0),URL.revokeObjectURL(n.src),r.event("QRImageDrawn",null,e.target)}),n.src=URL.createObjectURL(i)},openError:function(){var e;return e=r.el("div"),r.extend(e,{innerHTML:'Could not open file. [<a href="https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions#error-reading-metadata" target="_blank">More info</a>]'}),t.error(e)},setFile:function(e){var n,i,a,l;return a=e.detail,n=a.file,i=a.name,l=a.source,i!=null&&(n.name=i),l!=null&&(n.source=l),t.open(),t.handleFiles([n])},drag:function(e){var n;return n=e.type==="dragstart"?r.off:r.on,n(I,"dragover",t.dragOver),n(I,"drop",t.dropFile)},dragOver:function(e){return e.preventDefault(),e.dataTransfer.dropEffect="copy"},dropFile:function(e){if(e.dataTransfer.files.length)return e.preventDefault(),t.open(),t.handleFiles(e.dataTransfer.files)},paste:function(e){var n,i,a,l,d,c,u,h,g,m;if(e.clipboardData.items){for(i=null,h=-1,u=e.clipboardData.items,d=0,c=u.length;d<c;d++)l=u[d],l.kind==="file"&&(a=l.getAsFile())&&(g=2*(a.size<=t.max_size)+(a.type==="image/png"),g>h&&(i=a,h=g));i&&(m=i.type,n=new Blob([i],{type:m}),n.name=f.pastedname+"."+(r.getOwn(t.extensionFromType,m)||"jpg"),t.open(),t.handleFiles([n]),r.addClass(t.nodes.el,"dump"))}},pasteFF:function(){var e,n,i,a,l,d,c,u,h,g,m,b,v;if(m=t.nodes.pasteArea,!!m.childNodes.length)for(l=N("img",m),r.rmAll(m),c=0,h=l.length;c<h;c++)if(d=l[c],v=d.src,g=v.match(/data:(image\/(\w+));base64,(.+)/)){for(i=atob(g[3]),e=new Uint8Array(i.length),a=u=0,b=i.length;0<=b?u<b:u>b;a=0<=b?++u:--u)e[a]=i.charCodeAt(a);n=new Blob([e],{type:g[1]}),n.name=f.pastedname+"."+g[2],t.handleFiles([n])}else/^https?:\/\//.test(v)&&t.handleUrl(v)},handleUrl:function(e){return t.open(),t.selected.preventAutoPost(),be.permission(function(){var n;if(n=prompt("Enter a URL:",e),n!==null)return t.nodes.fileButton.focus(),be.file(n,function(i){return i&&!/^text\//.test(i.type)?t.handleFiles([i]):t.error("Can't load file.")})})},handleFiles:function(e){var n,i,a;if(this!==t&&(e=o.call(this.files),this.value=null),!!e.length){for(t.cleanNotifications(),i=0,a=e.length;i<a;i++)n=e[i],t.handleFile(n,e.length);if(e.length!==1&&r.addClass(t.nodes.el,"dump"),I.activeElement===t.nodes.fileButton&&r.hasClass(t.nodes.fileSubmit,"has-file"))return t.nodes.filename.focus()}},handleFile:function(e,n){var i,a;return i=/^text\//.test(e.type),n===1?a=t.selected:(a=t.posts[t.posts.length-1],(i?a.com||a.pasting:a.file)&&(a=new t.post)),a[i?"pasteText":"setFile"](e)},openFileInput:function(){if(!t.nodes.fileButton.disabled)return t.nodes.fileInput.click(),t.nodes.fileButton.focus()},generatePostableThreadsList:function(){var e,n,i,a,l,d,c;if(t.nodes){for(i=t.nodes.thread,a=[i.firstElementChild],l=p.BOARD.threads.keys,e=0,n=l.length;e<n;e++)d=l[e],a.push(r.el("option",{value:d,textContent:"Thread "+d}));if(c=i.value,r.rmAll(i),r.add(i,a),i.value=c,i.value!==c)return i.value=p.VIEW==="thread"?p.THREADID:"new",(p.VIEW==="thread"?r.addClass:r.rmClass)(t.nodes.el,"reply-to-thread")}},dialog:function(){var e,n,i,a,l,d,c,u,h,g,m;for(t.nodes=h={el:i=$.dialog("qr",{innerHTML:'<div class="move"><label><input type="checkbox" id="autohide" title="Auto-hide">Quick Reply</label><a href="javascript:;" class="close" title="Close">\xD7</a><select data-name="thread" title="Create a new thread / Reply"><option value="new">New thread</option></select></div><form><div class="persona"><button type="button" id="sjis-toggle" title="Toggle Mona font">\u2200</button><button type="button" id="tex-preview-button" title="Preview TeX">T<sub>E</sub>X</button><input name="name" data-name="name" list="list-name" placeholder="Name" class="field" size="1"><input name="email" data-name="email" list="list-email" placeholder="Options" class="field" size="1"><input name="sub" data-name="sub" list="list-sub" placeholder="Subject" class="field" size="1"></div><div class="textarea"><textarea data-name="com" placeholder="Comment" class="field"></textarea><span id="char-count"></span><div id="tex-preview"></div></div><div id="dump-list-container"><div id="dump-list"></div><a id="add-post" href="javascript:;" title="Add a post">+</a></div><div class="oekaki" hidden><input type="button" id="qr-draw-button" value="Draw"><label><span>Width:</span><input name="oekaki-width" value="400" type="number" class="field" size="1"></label><label><span>Height:</span><input name="oekaki-height" value="400" type="number" class="field" size="1"></label><span class="oekaki-bg" title="Background Color"><input name="oekaki-bg" type="checkbox" checked><input name="oekaki-bgcolor" type="color" value="#ffffff"></span></div><div id="file-n-submit"><input type="button" id="qr-file-button" value="Files"><span id="qr-filename-container" class="field"><span id="qr-no-file">No selected file</span><input id="qr-filename" data-name="filename" spellcheck="false"><label id="qr-spoiler-label"><input type="checkbox" id="qr-file-spoiler" title="Spoiler image"><a class="checkbox-letter">S</a></label><a id="qr-oekaki-button" title="Edit in Tegaki"><i class="fa fa-edit"></i></a><a href="javascript:;" id="qr-filerm" title="Remove file"><i class="fa fa-times-circle"></i></a><a id="url-button" title="Post from URL"><i class="fa fa-link"></i></a><a hidden id="paste-area" title="Select to paste images" class="fa fa-clipboard" tabindex="-1" contentEditable="true"></a><a id="custom-cooldown-button" title="Toggle custom cooldown" class="disabled"><i class="fa fa-clock-o"></i></a><a id="dump-button" title="Dump list"><i class="fa fa-plus-square"></i></a></span><input type="submit"></div><select data-default="4" name="filetag"><option value="0">Hentai</option><option value="6">Porn</option><option value="1">Japanese</option><option value="2">Anime</option><option value="3">Game</option><option value="5">Loop</option><option value="4" selected>Other</option></select><input type="file" multiple></form><datalist id="list-name"></datalist><datalist id="list-email"></datalist><datalist id="list-sub"></datalist> '})},m=function(b,v){return h[b]=r(v,i)},m("move",".move"),m("autohide","#autohide"),m("close",".close"),m("thread","select"),m("form","form"),m("sjisToggle","#sjis-toggle"),m("texButton","#tex-preview-button"),m("name","[data-name=name]"),m("email","[data-name=email]"),m("sub","[data-name=sub]"),m("com","[data-name=com]"),m("charCount","#char-count"),m("texPreview","#tex-preview"),m("dumpList","#dump-list"),m("addPost","#add-post"),m("oekaki",".oekaki"),m("drawButton","#qr-draw-button"),m("fileSubmit","#file-n-submit"),m("fileButton","#qr-file-button"),m("noFile","#qr-no-file"),m("filename","#qr-filename"),m("spoiler","#qr-file-spoiler"),m("oekakiButton","#qr-oekaki-button"),m("fileRM","#qr-filerm"),m("urlButton","#url-button"),m("pasteArea","#paste-area"),m("customCooldown","#custom-cooldown-button"),m("dumpButton","#dump-button"),m("status","[type=submit]"),m("flashTag","[name=filetag]"),m("fileInput","[type=file]"),n=p.BOARD.config,e=t.nodes.el.classList,e.toggle("forced-anon",t.forcedAnon),e.toggle("has-spoiler",t.spoiler),e.toggle("has-sjis",!!n.sjis_tags),e.toggle("has-math",!!n.math_tags),e.toggle("sjis-preview",!!n.sjis_tags&&f.sjisPreview),e.toggle("show-new-thread-option",f["Show New Thread Option in Threads"]),parseInt(f.customCooldown,10)>0&&(r.addClass(t.nodes.fileSubmit,"custom-cooldown"),r.get("customCooldownEnabled",f.customCooldownEnabled,function(b){var v;return v=b.customCooldownEnabled,t.setCustomCooldown(v),r.sync("customCooldownEnabled",t.setCustomCooldown)})),t.flagsInput(),r.on(h.autohide,"change",t.toggleHide),r.on(h.close,"click",t.close),r.on(h.status,"click",t.submit),r.on(h.form,"submit",t.submit),r.on(h.sjisToggle,"click",t.toggleSJIS),r.on(h.texButton,"mousedown",t.texPreviewShow),r.on(h.texButton,"mouseup",t.texPreviewHide),r.on(h.addPost,"click",function(){return new t.post(!0)}),r.on(h.drawButton,"click",t.oekaki.draw),r.on(h.fileButton,"click",t.openFileInput),r.on(h.noFile,"click",t.openFileInput),r.on(h.filename,"focus",function(){return r.addClass(this.parentNode,"focus")}),r.on(h.filename,"blur",function(){return r.rmClass(this.parentNode,"focus")}),r.on(h.spoiler,"change",function(){return t.selected.nodes.spoiler.click()}),r.on(h.oekakiButton,"click",t.oekaki.button),r.on(h.fileRM,"click",function(){return t.selected.rmFile()}),r.on(h.urlButton,"click",function(){return t.handleUrl("")}),r.on(h.customCooldown,"click",t.toggleCustomCooldown),r.on(h.dumpButton,"click",function(){return h.el.classList.toggle("dump")}),r.on(h.fileInput,"change",t.handleFiles),window.addEventListener("focus",t.focus,!0),window.addEventListener("blur",t.focus,!0),r.on(I,"click",t.focus),r.engine==="gecko"&&!window.DataTransferItemList&&(h.pasteArea.hidden=!1),new MutationObserver(t.pasteFF).observe(h.pasteArea,{childList:!0}),d=["thread","name","email","sub","com","filename","flag"],l=0,g=function(){return t.selected.save(this)};c=d[l++];)(u=h[c])&&(a=u.nodeName==="SELECT"?"change":"input",r.on(h[c],a,g));return r.engine==="gecko"&&f["Remember QR Size"]&&(r.get("QR Size","",function(b){return h.com.style.cssText=b["QR Size"]}),r.on(h.com,"mouseup",function(b){if(b.button===0)return r.set("QR Size",this.style.cssText)})),t.generatePostableThreadsList(),t.persona.load(),new t.post(!0),t.status(),t.cooldown.setup(),t.captcha.init(),r.add(I.body,i),t.captcha.setup(),t.oekaki.setup(),r.event("QRDialogCreation",null,i)},flags:function(){var e,n,i,a,l;i=r.el("select",{name:"flag",className:"flagSelector"}),e=function(d,c){return r.add(i,r.el("option",{value:d,textContent:c}))},e("0",p.BOARD.config.country_flags?"Geographic Location":"None"),n=p.BOARD.config.board_flags;for(l in n)a=n[l],e(l,a);return i},flagsInput:function(){var e,n;if(n=t.nodes,!!n&&(n.flag&&(r.rm(n.flag),delete n.flag),p.BOARD.config.board_flags))return e=t.flags(),e.dataset.name="flag",e.dataset.default="0",n.flag=e,r.add(n.form,e)},submit:function(e){var n,i,a,l,d,c,u,h,g,m,b;if(e?.preventDefault(),d=e?.shiftKey,t.req){t.abort();return}if(r.forceSync("cooldowns"),t.cooldown.seconds)if(d)t.cooldown.clear();else{t.cooldown.auto=!t.cooldown.auto,t.status();return}if(h=t.posts[0],delete h.quotedText,h.forceSave(),b=h.thread,m=p.BOARD.threads.get(b),p.BOARD.ID==="f"&&b==="new"&&(l=t.nodes.flashTag.value),b==="new"?(b=null,p.BOARD.config.require_subject&&!h.sub?a="New threads require a subject.":p.BOARD.config.text_only||h.file||(a="No file selected.")):p.BOARD.threads.get(b).isClosed?a="You can't reply to this thread anymore.":h.com||h.file?h.file&&m.fileLimit&&(a="Max limit of image replies has been reached."):a="No comment or file.",p.BOARD.ID==="r9k"&&!((g=h.com)!=null&&g.match(/[a-z-]/i))&&(a||(a="Original comment required.")),t.captcha.isEnabled&&!(t.captcha===Y.v2&&/\b_ct=/.test(I.cookie)&&b)&&!(a&&!d)&&(n=t.captcha.getOne(!!b),t.captcha===Y.v2&&(n||(n=Y.cache.request(!!b))),n||(a="No valid captcha.",t.captcha.setup(!t.cooldown.auto||I.activeElement===t.nodes.status))),t.cleanNotifications(),a&&!d){t.cooldown.auto=!1,t.status(),t.error(a);return}return t.cooldown.auto=t.posts.length>1,h.lock(),c={MAX_FILE_SIZE:t.max_size,mode:"regist",pwd:t.persona.getPassword(),resto:b,name:t.forcedAnon?void 0:h.name,email:h.email,sub:t.forcedAnon||b?void 0:h.sub,com:h.com,upfile:h.file,filetag:l,spoiler:h.spoiler,flag:h.flag},u={responseType:"document",withCredentials:!0,onloadend:t.response,form:r.formData(c)},f["Show Upload Progress"]&&(u.onprogress=function(v){var A;if(this===((A=t.req)!=null?A.upload:void 0))return v.loaded<v.total?t.req.progress=Math.round(v.loaded/v.total*100)+"%":(t.req.isUploadFinished=!0,t.req.progress="..."),t.status()}),i=function(v){var A,w;if(v!=null)if(t.currentCaptcha=v,t.captcha===Y.v2)v.challenge!=null?(u.form.append("recaptcha_challenge_field",v.challenge),u.form.append("recaptcha_response_field",v.response)):u.form.append("g-recaptcha-response",v.response);else for(A in v)w=v[A],u.form.append(A,w);return t.req=r.ajax("https://sys."+location.hostname.split(".")[1]+".org/"+p.BOARD+"/post",u),t.req.progress="..."},typeof n=="function"?(t.req={progress:"...",abort:function(){return t.captcha===Y.v2&&Y.cache.abort(),i=null}},n(function(v){if(t.captcha===Y.v2&&Y.cache.haveCookie()){if(typeof i=="function"&&i(),v)return Y.cache.save(v)}else return v?typeof i=="function"?i(v):void 0:(delete t.req,h.unlock(),t.cooldown.auto=!!Y.cache.getCount(),t.status())})):i(n),t.status()},response:function(){var e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S,R,B;if(this===t.req){if(delete t.req,A=t.posts[0],A.unlock(),(l=(k=this.response)!=null?k.getElementById("errmsg"):void 0)?(C=r("a",l))!=null&&(C.target="_blank"):(a=!this.response||this.response.title!=="Post successful!")?(l=t.connectionError(),t.captcha===Y.v2&&t.currentCaptcha&&Y.cache.save(t.currentCaptcha)):this.status!==200&&(l="Error "+this.statusText+" ("+this.status+")"),a||typeof(i=t.captcha).setUsed=="function"&&i.setUsed(),delete t.currentCaptcha,l){if(t.errorCount=(t.errorCount||0)+1,/captcha|verification/i.test(l.textContent)||a)/mistyped/i.test(l.textContent)?l="You mistyped the CAPTCHA, or the CAPTCHA malfunctioned.":/expired/i.test(l.textContent)&&(l="This CAPTCHA is no longer valid because it has expired."),t.errorCount>=5?t.cooldown.auto=!1:(t.cooldown.auto=t.captcha.isEnabled||a,t.cooldown.addDelay(A,2));else if(l.textContent&&(m=l.textContent.match(/\d+\s+(?:minute|second)/gi))&&!/duplicate|hour/i.test(l.textContent)){for(t.cooldown.auto=!/have\s+been\s+muted/i.test(l.textContent),R=0,u=0,g=m.length;u<g;u++)b=m[u],R+=(/minute/i.test(b)?60:1)*+b.match(/\d+/)[0];/muted/i.test(l.textContent)?t.cooldown.addMute(R):t.cooldown.addDelay(A,R)}else t.cooldown.auto=!1;t.captcha.setup(t.cooldown.auto&&((D=I.activeElement)===t.nodes.status||D===I.body)),t.status(),t.error(l);return}return delete t.errorCount,d=r("h1",this.response),S=d.nextSibling.textContent.match(/thread:(\d+),no:(\d+)/),n=S[0],B=S[1],w=S[2],w=+w,B=+B||w,c=B!==w,r.event("QRPostSuccessful",{boardID:p.BOARD.ID,threadID:B,postID:w}),r.event("QRPostSuccessful_",{boardID:p.BOARD.ID,threadID:B,postID:w}),x=t.posts.length-1,t.cooldown.auto=x&&c,h=!function(){var M,P,q,O;for(O=t.posts.slice(1),M=0,P=O.length;M<P;M++)if(q=O[M],q.thread===A.thread)return!0}(),x?(A.rm(),t.captcha.setup(I.activeElement===t.nodes.status)):f["Persistent QR"]?(A.rm(),f["Auto Hide QR"]?t.hide():t.blur()):t.close(),t.cleanNotifications(),f["Posting Success Notifications"]&&t.notifications.push(new J("success",d.textContent,5)),t.cooldown.add(B,w),e=B===w?window.location.origin+"/"+p.BOARD+"/thread/"+B:B!==p.THREADID&&h&&f["Open Post in New Tab"]?window.location.origin+"/"+p.BOARD+"/thread/"+B+"#p"+w:void 0,e&&(v=f["Open Post in New Tab"]||x?function(){return r.open(e)}:function(){return location.href=e},B===w?t.waitForThread(e,v):v()),t.status()}},waitForThread:function(e,n){var i,a;return i=0,a=function(){return r.ajax(e,{onloadend:function(){return i++,i>=6||this.status===200?n():setTimeout(a,i*r.SECOND)},responseType:"text",type:"HEAD"})},a()},abort:function(){var e;return(e=t.req)&&!t.req.isUploadFinished&&(delete t.req,e.abort(),t.captcha===Y.v2&&t.currentCaptcha&&Y.cache.save(t.currentCaptcha),delete t.currentCaptcha,t.posts[0].unlock(),t.cooldown.auto=!1,t.notifications.push(new J("info","QR upload aborted.",5))),t.status()}},t}.call(this),function(){y.cooldown={seconds:0,delays:{deletion:60},init:function(){if(f["Quick Reply"])return this.data=f.cooldowns,this.changes=r.dict(),r.sync("cooldowns",this.sync)},setup:function(){var t,s,o;r.extend(y.cooldown.delays,p.BOARD.cooldowns()),y.cooldown.maxDelay=0,s=y.cooldown.delays;for(o in s)t=s[o],o!=="thread"&&o!=="thread_global"&&(y.cooldown.maxDelay=Math.max(y.cooldown.maxDelay,t));return y.cooldown.isSetup=!0,y.cooldown.start()},start:function(){var t;if(t=y.cooldown.data,!!(f.Cooldown&&y.cooldown.isSetup&&!y.cooldown.isCounting&&Object.keys(t[p.BOARD.ID]||{}).length+Object.keys(t.global||{}).length>0))return y.cooldown.isCounting=!0,y.cooldown.count()},sync:function(t){return y.cooldown.data=t||r.dict(),y.cooldown.start()},add:function(t,s){var o,e;if(f.Cooldown)return e=Date.now(),o=p.BOARD.ID,y.cooldown.set(o,e,{threadID:t,postID:s}),t===s&&y.cooldown.set("global",e,{boardID:o,threadID:t,postID:s}),y.cooldown.save(),y.cooldown.start()},addDelay:function(t,s){var o;if(f.Cooldown)return o=y.cooldown.categorize(t),o.delay=s,y.cooldown.set(p.BOARD.ID,Date.now(),o),y.cooldown.save(),y.cooldown.start()},addMute:function(t){if(f.Cooldown)return y.cooldown.set(p.BOARD.ID,Date.now(),{type:"mute",delay:t}),y.cooldown.save(),y.cooldown.start()},delete:function(t){var s,o,e,n,i;if(y.cooldown.data){e=(s=y.cooldown.data)[i=t.board.ID]||(s[i]=r.dict());for(n in e)o=e[n],o.delay==null&&o.threadID===t.thread.ID&&o.postID===t.ID&&y.cooldown.set(t.board.ID,n,null);return y.cooldown.save()}},secondsDeletion:function(t){var s,o,e,n;if(!(y.cooldown.data&&f.Cooldown))return 0;o=y.cooldown.data[t.board.ID]||r.dict();for(n in o)if(s=o[n],s.delay==null&&s.threadID===t.thread.ID&&s.postID===t.ID)return e=y.cooldown.delays.deletion-Math.floor((Date.now()-n)/r.SECOND),Math.max(e,0);return 0},categorize:function(t){return t.thread==="new"?{type:"thread"}:{type:t.file?"image":"reply",threadID:+t.thread}},mergeChange:function(t,s,o,e){if(e)return(t[s]||(t[s]=r.dict()))[o]=e;if(s in t&&(delete t[s][o],Object.keys(t[s]).length===0))return delete t[s]},set:function(t,s,o){var e;return y.cooldown.mergeChange(y.cooldown.data,t,s,o),((e=y.cooldown.changes)[t]||(e[t]=r.dict()))[s]=o},save:function(){var t;if(t=y.cooldown.changes,!!Object.keys(t).length)return r.get("cooldowns",r.dict(),function(s){var o,e,n,i,a;o=s.cooldowns;for(i in y.cooldown.changes){n=y.cooldown.changes[i];for(e in n)a=n[e],y.cooldown.mergeChange(o,i,e,a);y.cooldown.data=o}return r.set("cooldowns",o,function(){return y.cooldown.changes=r.dict()})})},clear:function(){return y.cooldown.data=r.dict(),y.cooldown.changes=r.dict(),y.cooldown.auto=!1,y.cooldown.update(),r.queueTask(r.delete,"cooldowns")},update:function(){var t,s,o,e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x;if(y.cooldown.isCounting){if(h=!1,l=0,d=Date.now(),c=y.cooldown.categorize(y.posts[0]),w=c.type,A=c.threadID,m=0,f.Cooldown)for(u=[p.BOARD.ID,"global"],n=0,i=u.length;n<i;n++){g=u[n],o=(t=y.cooldown.data)[g]||(t[g]=r.dict());for(b in o){if(s=o[b],b=+b,e=Math.floor((d-b)/r.SECOND),e<0){y.cooldown.set(g,b,null),h=!0;continue}if(s.delay!=null){s.delay<=e?(y.cooldown.set(g,b,null),h=!0):(s.type===w&&s.threadID===A||s.type==="mute")&&(m=Math.max(m,s.delay-e));continue}if(a=s.threadID!==s.postID?y.cooldown.maxDelay:y.cooldown.delays[g==="global"?"thread_global":"thread"],y.cooldown.customCooldown&&(a=Math.max(a,parseInt(f.customCooldown,10))),a<=e){y.cooldown.set(g,b,null),h=!0;continue}w==="thread"==(s.threadID===s.postID)&&s.boardID!==p.BOARD.ID&&(v=g==="global"?"_global":"",m=Math.max(m,y.cooldown.delays[w+v]-e),y.cooldown.customCooldown&&(m=Math.max(m,parseInt(f.customCooldown,10)-e)))}l+=Object.keys(o).length}if(h&&y.cooldown.save,l?(clearTimeout(y.cooldown.timeout),y.cooldown.timeout=setTimeout(y.cooldown.count,r.SECOND)):delete y.cooldown.isCounting,x=m!==y.cooldown.seconds,y.cooldown.seconds=m,x)return y.status()}},count:function(){if(y.cooldown.update(),y.cooldown.seconds===0&&y.cooldown.auto&&!y.req)return y.submit()}}}.call(this),function(){y.oekaki={menu:{init:function(){var t,s;if(((s=p.VIEW)==="index"||s==="thread")&&f.Menu&&f["Edit Link"]&&f["Quick Reply"])return t=r.el("a",{className:"edit-link",href:"javascript:;",textContent:"Edit image"}),r.on(t,"click",this.editFile),ie.menu.addEntry({el:t,order:90,open:function(o){var e;return y.oekaki.menu.post=o,e=o.file,y.postingIsEnabled&&!!e&&(e.isImage||e.isVideo)}})},editFile:function(){var t,s,o,e;return o=y.oekaki.menu.post,y.quote.call(o.nodes.post),s=o.file.isVideo,t=((e=o.file.fullImage)!=null?e.currentTime:void 0)||0,be.file(o.file.url,function(n){var i;return n?s?(i=r.el("video"),r.on(i,"loadedmetadata",function(){return r.on(i,"seeked",function(){var a;return a=r.el("canvas",{width:i.videoWidth,height:i.videoHeight}),a.getContext("2d").drawImage(i,0,0),a.toBlob(function(l){return l.name=o.file.name.replace(/\.\w+$/,"")+".png",y.handleFiles([l]),y.oekaki.edit()})}),i.currentTime=t}),r.on(i,"error",function(){return y.openError()}),i.src=URL.createObjectURL(n)):(n.name=o.file.name,y.handleFiles([n]),y.oekaki.edit()):y.error("Can't load file.")})}},setup:function(){return r.global(function(){var t;if(t=window.FCX,t.oekakiCB=function(){return window.Tegaki.flatten().toBlob(function(s){var o;return o="oekaki-"+Date.now(),t.oekakiLatest=o,document.dispatchEvent(new CustomEvent("QRSetFile",{bubbles:!0,detail:{file:s,name:t.oekakiName,source:o}}))})},window.Tegaki)return document.querySelector("#qr .oekaki").hidden=!1})},load:function(t){var s,o,e,n;return r('script[src^="//s.4cdn.org/js/tegaki"]',I.head)?t():(n=r.el("link",{rel:"stylesheet",href:"//s.4cdn.org/css/tegaki."+Date.now()+".css"}),e=r.el("script",{src:"//s.4cdn.org/js/tegaki.min."+Date.now()+".js"}),s=0,o=function(){if(++s===2)return t()},r.on(n,"load",o),r.on(e,"load",o),r.add(I.head,[n,e]))},draw:function(){return r.global(function(){var t,s;return s=window.Tegaki,t=window.FCX,s.bg&&s.destroy(),t.oekakiName="tegaki.png",s.open({onDone:t.oekakiCB,onCancel:function(){return s.bgColor="#ffffff"},width:+document.querySelector("#qr [name=oekaki-width]").value,height:+document.querySelector("#qr [name=oekaki-height]").value,bgColor:document.querySelector("#qr [name=oekaki-bg]").checked?document.querySelector("#qr [name=oekaki-bgcolor]").value:"transparent"})})},button:function(){return y.selected.file?y.oekaki.edit():y.oekaki.toggle()},edit:function(){return y.oekaki.load(function(){return r.global(function(){var t,s,o,e,n,i;return s=window.Tegaki,t=window.FCX,n=document.getElementById("qr-filename").value.replace(/\.\w+$/,"")+".png",i=document.getElementById("file-n-submit").dataset.source,e=function(a){return document.dispatchEvent(new CustomEvent("CreateNotification",{bubbles:!0,detail:{type:"warning",content:a,lifetime:20}}))},o=function(a){var l,d;if(a&&this.removeEventListener("QRMetadata",o,!1),d=document.getElementById("selected"),!d?.dataset.type)return e("No file to edit.");if(!/^(image|video)\//.test(d.dataset.type))return e("Not an image.");if(!d.dataset.height)return e("Metadata not available.");if(d.dataset.height==="loading"){d.addEventListener("QRMetadata",o,!1);return}return s.bg&&s.destroy(),t.oekakiName=n,s.open({onDone:t.oekakiCB,onCancel:function(){return s.bgColor="#ffffff"},width:+d.dataset.width,height:+d.dataset.height,bgColor:"transparent"}),l=document.createElement("canvas"),l.width=l.naturalWidth=+d.dataset.width,l.height=l.naturalHeight=+d.dataset.height,l.hidden=!0,document.body.appendChild(l),l.addEventListener("QRImageDrawn",function(){return this.remove(),s.onOpenImageLoaded.call(this)},!1),l.dispatchEvent(new CustomEvent("QRDrawFile",{bubbles:!0}))},s.bg&&s.onDoneCb===t.oekakiCB&&i===t.oekakiLatest?(t.oekakiName=n,s.resume()):o()})})},toggle:function(){return y.oekaki.load(function(){return y.nodes.oekaki.hidden=!y.nodes.oekaki.hidden})}}}.call(this),function(){var t=[].indexOf||function(s){for(var o=0,e=this.length;o<e;o++)if(o in this&&this[o]===s)return o;return-1};y.persona={always:{},types:{name:[],email:[],sub:[]},init:function(){var s,o,e,n;if(f["Quick Reply"]||f.Menu&&f["Delete Link"])for(n=f["QR.personas"].split(`
`),s=0,e=n.length;s<e;s++)o=n[s],y.persona.parseItem(o.trim())},parseItem:function(s){var o,e,n,i,a,l,d;if(s[0]!=="#"&&(e=s.match(/(name|options|email|subject|password):"(.*)"/i))&&(n=e,e=n[0],l=n[1],d=n[2],s=s.replace(e,""),o=((i=s.match(/boards:([^;]+)/i))!=null?i[1].toLowerCase():void 0)||"global",!(o!=="global"&&(a=p.BOARD.ID,t.call(o.split(","),a)<0)))){if(l==="password"){y.persona.pwd=d;return}if(l==="options"&&(l="email"),l==="subject"&&(l="sub"),/always/i.test(s)&&(y.persona.always[l]=d),t.call(y.persona.types[l],d)<0)return y.persona.types[l].push(d)}},load:function(){var s,o,e,n,i,a,l;i=y.persona.types;for(a in i)for(s=i[a],n=r("#list-"+a,y.nodes.el),o=0,e=s.length;o<e;o++)l=s[o],l&&r.add(n,r.el("option",{textContent:l}))},getPassword:function(){var s;return y.persona.pwd!=null?y.persona.pwd:(s=I.cookie.match(/4chan_pass=([^;]+)/))?decodeURIComponent(s[1]):""},get:function(s){return r.get("QR.persona",{},function(o){var e;return e=o["QR.persona"],s(e)})},set:function(s){return r.get("QR.persona",{},function(o){var e;return e=o["QR.persona"],e={name:s.name,flag:s.flag},r.set("QR.persona",e)})}}}.call(this),function(){var t=function(e,n){return function(){return e.apply(n,arguments)}},s=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1},o=[].slice;y.post=function(){function e(n){this.select=t(this.select,this);var i,a,l,d,c,u,h,g,m,b;for(i=r.el("a",{className:"qr-preview",draggable:!0,href:"javascript:;"}),r.extend(i,{innerHTML:'<a class="remove fa fa-times-circle" title="Remove"></a><label class="qr-preview-spoiler"><input type="checkbox"> Spoiler</label><span></span>'}),this.nodes={el:i,rm:i.firstChild,spoiler:r(".qr-preview-spoiler input",i),span:i.lastChild},r.on(i,"click",this.select),r.on(this.nodes.rm,"click",function(v){return function(A){return A.stopPropagation(),v.rm()}}(this)),r.on(this.nodes.spoiler,"change",function(v){return function(A){return v.spoiler=A.target.checked,v===y.selected&&(y.nodes.spoiler.checked=v.spoiler),v.preventAutoPost()}}(this)),m=N("label",i),l=0,u=m.length;l<u;l++)c=m[l],r.on(c,"click",function(v){return v.stopPropagation()});for(r.add(y.nodes.dumpList,i),b=["dragStart","dragEnter","dragLeave","dragOver","dragEnd","drop"],d=0,h=b.length;d<h;d++)a=b[d],r.on(i,a.toLowerCase(),this[a]);this.thread=p.VIEW==="thread"?p.THREADID:"new",g=y.posts[y.posts.length-1],y.posts.push(this),this.nodes.spoiler.checked=this.spoiler=g&&f["Remember Spoiler"]?g.spoiler:!1,y.persona.get(function(v){return function(A){if(v.name="name"in y.persona.always?y.persona.always.name:g?g.name:A.name,v.email="email"in y.persona.always?y.persona.always.email:"",v.sub="sub"in y.persona.always?y.persona.always.sub:"",y.nodes.flag&&(v.flag=g?g.flag:A.flag&&A.flag in p.BOARD.config.board_flags?A.flag:void 0),y.selected===v)return v.load()}}(this)),n&&this.select(),this.unlock(),y.captcha.moreNeeded()}return e.prototype.rm=function(){var n,i;return this.delete(),i=y.posts.indexOf(this),y.posts.length===1?(new y.post(!0),r.rmClass(y.nodes.el,"dump")):this===y.selected&&(y.posts[i-1]||y.posts[i+1]).select(),y.posts.splice(i,1),y.status(),typeof(n=y.captcha).updateThread=="function"?n.updateThread():void 0},e.prototype.delete=function(){return r.rm(this.nodes.el),URL.revokeObjectURL(this.URL),this.dismissErrors()},e.prototype.lock=function(n){var i,a,l,d,c;if(n==null&&(n=!0),this.isLocked=n,this===y.selected){for(c=["thread","name","email","sub","com","fileButton","filename","spoiler","flag"],i=0,a=c.length;i<a;i++)l=c[i],(d=y.nodes[l])&&(d.disabled=n);return this.nodes.rm.style.visibility=n?"hidden":"",this.nodes.spoiler.disabled=n,this.nodes.el.draggable=!n}},e.prototype.unlock=function(){return this.lock(!1)},e.prototype.select=function(){var n,i;return y.selected&&(y.selected.nodes.el.removeAttribute("id"),y.selected.forceSave()),y.selected=this,this.lock(this.isLocked),this.nodes.el.id="selected",n=this.nodes.el.getBoundingClientRect(),i=this.nodes.el.parentNode.getBoundingClientRect(),this.nodes.el.parentNode.scrollLeft+=n.left+n.width/2-i.left-i.width/2,this.load()},e.prototype.load=function(){var n,i,a,l,d;for(d=["thread","name","email","sub","com","filename","flag"],n=0,i=d.length;n<i;n++)a=d[n],(l=y.nodes[a])&&(l.value=this[a]||l.dataset.default||"");return(this.thread!=="new"?r.addClass:r.rmClass)(y.nodes.el,"reply-to-thread"),this.showFileData(),y.characterCount()},e.prototype.save=function(n,i){var a,l,d;if(n.type==="checkbox"){this.spoiler=n.checked;return}if(l=n.dataset.name,!(l!=="thread"&&l!=="name"&&l!=="email"&&l!=="sub"&&l!=="com"&&l!=="filename"&&l!=="flag")){switch(d=this[l]||n.dataset.default||null,this[l]=n.value||n.dataset.default||null,l){case"thread":(this.thread!=="new"?r.addClass:r.rmClass)(y.nodes.el,"reply-to-thread"),y.status(),typeof(a=y.captcha).updateThread=="function"&&a.updateThread();break;case"com":this.updateComment();break;case"filename":if(!this.file)return;this.saveFilename(),this.updateFilename();break;case"name":case"flag":this[l]!==d&&y.persona.set(this)}if(!i)return this.preventAutoPost()}},e.prototype.forceSave=function(){var n,i,a,l,d;if(this===y.selected)for(d=["thread","name","email","sub","com","filename","spoiler","flag"],n=0,i=d.length;n<i;n++)a=d[n],(l=y.nodes[a])&&this.save(l,!0)},e.prototype.preventAutoPost=function(){if(y.cooldown.auto&&this===y.posts[0]&&(y.cooldown.update(),y.cooldown.seconds<=5))return y.cooldown.auto=!1},e.prototype.setComment=function(n){return this.com=n||null,this===y.selected&&(y.nodes.com.value=this.com),this.updateComment()},e.prototype.updateComment=function(){if(this===y.selected&&y.characterCount(),this.nodes.span.textContent=this.com,y.captcha.moreNeeded(),y.captcha===Y.v2)return Y.cache.prerequest()},e.prototype.isOnlyQuotes=function(){return(this.com||"").trim()===(this.quotedText||"").trim()},e.rmErrored=function(n){var i,a,l,d,c,u,h;for(n.stopPropagation(),h=y.posts,l=h.length-1;l>=0;l+=-1)if(u=h[l],a=u.errors){for(d=0,c=a.length;d<c;d++)if(i=a[d],!!E.contains(i)){u.rm();break}}},e.prototype.error=function(n,i,a){var l,d,c,u;return l=r.el("div",{className:n}),r.extend(l,{innerHTML:T(i)+(a?' [<a href="'+T(a)+'" target="_blank">More info</a>]':"")+'<br>[<a href="javascript:;">delete post</a>] [<a href="javascript:;">delete all</a>]'}),(this.errors||(this.errors=[])).push(l),d=N("a",l),c=d[0],u=d[1],r.on(l,"click",function(h){return function(){if(s.call(y.posts,h)>=0)return h.select()}}(this)),r.on(c,"click",function(h){return function(g){if(g.stopPropagation(),s.call(y.posts,h)>=0)return h.rm()}}(this)),r.on(u,"click",y.post.rmErrored),y.error(l,!0)},e.prototype.fileError=function(n,i){return this.error("file-error",this.filename+": "+n,i)},e.prototype.dismissErrors=function(n){var i,a,l,d;if(n==null&&(n=function(){return!0}),this.errors)for(d=this.errors,a=0,l=d.length;a<l;a++)i=d[a],E.contains(i)&&n(i)&&i.parentNode.previousElementSibling.click()},e.prototype.setFile=function(n){var i,a;return this.file=n,f["Randomize Filename"]&&p.BOARD.ID!=="f"?(this.filename=""+(Date.now()*1e3-Math.floor(Math.random()*365*r.DAY*1e3)),(i=this.file.name.match(y.validExtension))&&(this.filename+=i[0])):this.filename=this.file.name,this.filesize=r.bytesToString(this.file.size),this.checkSize(),r.addClass(this.nodes.el,"has-file"),y.captcha.moreNeeded(),URL.revokeObjectURL(this.URL),this.saveFilename(),this===y.selected?this.showFileData():this.updateFilename(),this.rmMetadata(),this.nodes.el.dataset.type=this.file.type,this.nodes.el.style.backgroundImage="",a=this.file.type,s.call(y.mimeTypes,a)<0?this.fileError("Unsupported file type."):/^(image|video)\//.test(this.file.type)&&this.readFile(),this.preventAutoPost()},e.prototype.checkSize=function(){var n;if(n=y.max_size,/^video\//.test(this.file.type)&&(n=Math.min(n,y.max_size_video)),this.file.size>n)return this.fileError("File too large (file: "+this.filesize+", max: "+r.bytesToString(n)+").")},e.prototype.readFile=function(){var n,i,a,l,d;if(a=/^video\//.test(this.file.type),n=r.el(a?"video":"img"),!(a&&!n.canPlayType(this.file.type)))return i=a?"loadeddata":"load",d=function(c){return function(){return r.off(n,i,d),r.off(n,"error",l),c.checkDimensions(n),c.setThumbnail(n),r.event("QRMetadata",null,c.nodes.el)}}(this),l=function(c){return function(){return r.off(n,i,d),r.off(n,"error",l),c.fileError("Corrupt "+(a?"video":"image")+" or error reading metadata.","https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions#error-reading-metadata"),URL.revokeObjectURL(n.src),c.nodes.el.removeAttribute("data-height"),r.event("QRMetadata",null,c.nodes.el)}}(this),this.nodes.el.dataset.height="loading",r.on(n,i,d),r.on(n,"error",l),n.src=URL.createObjectURL(this.file)},e.prototype.checkDimensions=function(n){var i,a,l,d,c,u,h;if(n.tagName==="IMG"){if(a=n.height,h=n.width,this.nodes.el.dataset.height=a,this.nodes.el.dataset.width=h,(a>y.max_height||h>y.max_width)&&this.fileError("Image too large (image: "+a+"x"+h+"px, max: "+y.max_height+"x"+y.max_width+"px)"),a<y.min_height||h<y.min_width)return this.fileError("Image too small (image: "+a+"x"+h+"px, min: "+y.min_height+"x"+y.min_width+"px)")}else if(c=n.videoHeight,u=n.videoWidth,i=n.duration,this.nodes.el.dataset.height=c,this.nodes.el.dataset.width=u,this.nodes.el.dataset.duration=i,l=Math.min(y.max_height,y.max_height_video),d=Math.min(y.max_width,y.max_width_video),(c>l||u>d)&&this.fileError("Video too large (video: "+c+"x"+u+"px, max: "+l+"x"+d+"px)"),(c<y.min_height||u<y.min_width)&&this.fileError("Video too small (video: "+c+"x"+u+"px, min: "+y.min_height+"x"+y.min_width+"px)"),isFinite(i)?i>y.max_duration_video&&this.fileError("Video too long (video: "+i+"s, max: "+y.max_duration_video+"s)"):this.fileError("Video lacks duration metadata (try remuxing)"),oe.noAudio(p.BOARD.ID)&&r.hasAudio(n))return this.fileError("Audio not allowed")},e.prototype.setThumbnail=function(n){var i,a,l,d,c;if(l=n.tagName==="VIDEO",d=90*2*window.devicePixelRatio,this.file.type==="image/gif"&&(d*=3),l)a=n.videoHeight,c=n.videoWidth;else if(a=n.height,c=n.width,a<d||c<d){this.URL=n.src,this.nodes.el.style.backgroundImage="url("+this.URL+")";return}return a<=c?(c=d/a*c,a=d):(a=d/c*a,c=d),i=r.el("canvas"),i.height=a,i.width=c,i.getContext("2d").drawImage(n,0,0,c,a),URL.revokeObjectURL(n.src),i.toBlob(function(u){return function(h){return u.URL=URL.createObjectURL(h),u.nodes.el.style.backgroundImage="url("+u.URL+")"}}(this))},e.prototype.rmFile=function(){if(!this.isLocked)return delete this.file,delete this.filename,delete this.filesize,this.nodes.el.removeAttribute("title"),y.nodes.filename.removeAttribute("title"),this.rmMetadata(),this.nodes.el.style.backgroundImage="",r.rmClass(this.nodes.el,"has-file"),this.showFileData(),URL.revokeObjectURL(this.URL),this.dismissErrors(function(n){return r.hasClass(n,"file-error")}),this.preventAutoPost()},e.prototype.rmMetadata=function(){var n,i,a,l;for(l=["type","height","width","duration"],i=0,a=l.length;i<a;i++)n=l[i],this.nodes.el.removeAttribute("data-"+n)},e.prototype.saveFilename=function(){if(this.file.newName=(this.filename||"").replace(/[\/\\]/g,"-"),!y.validExtension.test(this.filename))return this.file.newName+="."+(r.getOwn(y.extensionFromType,this.file.type)||"jpg")},e.prototype.updateFilename=function(){var n;if(n=this.filename+" ("+this.filesize+")",this.nodes.el.title=n,this===y.selected)return y.nodes.filename.title=n},e.prototype.showFileData=function(){var n;return this.file?(this.updateFilename(),y.nodes.filename.value=this.filename,r.addClass(y.nodes.oekaki,"has-file"),r.addClass(y.nodes.fileSubmit,"has-file")):(r.rmClass(y.nodes.oekaki,"has-file"),r.rmClass(y.nodes.fileSubmit,"has-file")),((n=this.file)!=null?n.source:void 0)!=null?y.nodes.fileSubmit.dataset.source=this.file.source:y.nodes.fileSubmit.removeAttribute("data-source"),y.nodes.spoiler.checked=this.spoiler},e.prototype.pasteText=function(n){var i;return this.pasting=!0,this.preventAutoPost(),i=new FileReader,i.onload=function(a){return function(l){var d;return d=l.target.result,a.setComment(a.com?a.com+`
`+d:d),delete a.pasting}}(this),i.readAsText(n)},e.prototype.dragStart=function(n){var i,a,l;return a=this.getBoundingClientRect(),i=a.left,l=a.top,n.dataTransfer.setDragImage(this,n.clientX-i,n.clientY-l),r.addClass(this,"drag")},e.prototype.dragEnd=function(){return r.rmClass(this,"drag")},e.prototype.dragEnter=function(){return r.addClass(this,"over")},e.prototype.dragLeave=function(){return r.rmClass(this,"over")},e.prototype.dragOver=function(n){return n.preventDefault(),n.dataTransfer.dropEffect="move"},e.prototype.drop=function(){var n,i,a,l,d,c;if(r.rmClass(this,"over"),!!this.draggable&&(i=r(".drag",this.parentNode),a=function(u){return o.call(u.parentNode.children).indexOf(u)},d=a(i),l=a(this),!(y.posts[d].isLocked||y.posts[l].isLocked)))return(d<l?r.after:r.before)(this,i),c=y.posts.splice(d,1)[0],y.posts.splice(l,0,c),y.status(),typeof(n=y.captcha).updateThread=="function"?n.updateThread():void 0},e}()}.call(this),Ft=function(){var t;return t={containers:r.dict(),init:function(){var s;if(!((s=p.VIEW)!=="index"&&s!=="thread"||!f["Quote Backlinks"]))return(this.bottomBacklinks=f["Bottom Backlinks"])&&r.addClass(E,"bottom-backlinks"),F.Post.push({name:"Quote Backlinking Part 1",cb:this.firstNode}),F.Post.push({name:"Quote Backlinking Part 2",cb:this.secondNode})},firstNode:function(){var s,o,e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x;if(!(this.isClone||!this.quotes.length||this.isRebuilt))for(m=f["Mark Quotes of You"]&&se.isYou(this),s=r.el("a",{href:p.SITE.Build.postURL(this.board.ID,this.thread.ID,this.ID),className:this.isHidden?"filtered backlink":"backlink",textContent:f.backlink.replace(/%(?:id|%)/g,function(k){return function(C){return{"%id":k.ID,"%%":"%"}[C]}}(this))}),m&&r.add(s,se.mark.cloneNode(!0)),w=this.quotes,a=0,c=w.length;a<c;a++){if(A=w[a],n=[t.getContainer(A)],(v=p.posts.get(A))&&v.nodes.backlinkContainer)for(x=v.clones,l=0,u=x.length;l<u;l++)o=x[l],n.push(o.nodes.backlinkContainer);for(d=0,h=n.length;d<h;d++)e=n[d],g=s.cloneNode(!0),b=e.firstChild?[r.tn(" "),g]:[g],f["Quote Previewing"]&&r.on(g,"mouseover",_e.mouseover),f["Quote Inlining"]&&(r.on(g,"click",Ze.toggle),f["Quote Hash Navigation"]&&(i=Ze.qiQuote(g,r.hasClass(g,"filtered")),b.push(i))),r.add(e,b)}},secondNode:function(){var s;if(this.isClone&&(this.origin.isReply||f["OP Backlinks"])){this.nodes.backlinkContainer=r(".container",this.nodes.post);return}if(this.isReply||f["OP Backlinks"])return s=t.getContainer(this.fullID),this.nodes.backlinkContainer=s,t.bottomBacklinks?r.add(this.nodes.post,s):r.add(this.nodes.info,s)},getContainer:function(s){var o;return(o=this.containers)[s]||(o[s]=r.el("span",{className:"container"}))}},t}.call(this),Ot=function(){var t;return t={init:function(){var s;if(!((s=p.VIEW)!=="index"&&s!=="thread"||!f["Mark Cross-thread Quotes"]))return f["Comment Expansion"]&&Ae.callbacks.push(this.node),this.mark=r.el("span",{textContent:"\xA0(Cross-thread)",className:"qmark-ct"}),F.Post.push({name:"Mark Cross-thread Quotes",cb:this.node})},node:function(){var s,o,e,n,i,a,l,d,c,u;if(!(this.isClone&&this.thread===this.context.thread))for(a=this.context,s=a.board,c=a.thread,l=this.nodes.quotelinks,e=0,n=l.length;e<n;e++)i=l[e],d=H.postDataFromLink(i),o=d.boardID,u=d.threadID,u&&(this.isClone&&r.rm(r(".qmark-ct",i)),o===s.ID&&u!==c.ID&&r.add(i,t.mark.cloneNode(!0)))}},t}.call(this),Ze=function(){var t,s=[].slice;return t={init:function(){var o;if(!((o=p.VIEW)!=="index"&&o!=="thread"||!f["Quote Inlining"]))return f["Comment Expansion"]&&Ae.callbacks.push(this.node),F.Post.push({name:"Quote Inlining",cb:this.node})},node:function(){var o,e,n,i,a,l;for(a=t.process,e=this.isClone,l=this.nodes.quotelinks.concat(s.call(this.nodes.backlinks),this.nodes.archivelinks),o=0,n=l.length;o<n;o++)i=l[o],a(i,e)},process:function(o,e){return f["Quote Hash Navigation"]&&(e||r.after(o,t.qiQuote(o,r.hasClass(o,"filtered")))),r.on(o,"click",t.toggle)},qiQuote:function(o,e){var n;return n="hashlink",e&&(n+=" filtered"),r.el("a",{className:n,textContent:"#",href:o.href})},toggle:function(o){var e,n,i,a,l,d,c;if(!r.modifiedClick(o)&&(l=H.postDataFromLink(this),e=l.boardID,c=l.threadID,i=l.postID,!(f["Inline Cross-thread Quotes Only"]&&p.VIEW==="thread"&&((d=p.posts.get(e+"."+i))!=null&&d.nodes.root.offsetParent))&&!r.hasClass(E,"catalog-mode"))){if(o.preventDefault(),a=H.postFromNode(this),n=a.context,r.hasClass(this,"inlined"))t.rm(this,e,c,i,n);else{if(r.x("ancestor::div[@data-full-i-d='"+e+"."+i+"']",this))return;t.add(this,e,c,i,n,a)}return this.classList.toggle("inlined")}},findRoot:function(o,e){return e?r.x('ancestor::*[parent::*[contains(@class,"post")]][1]',o):r.x("ancestor-or-self::*[parent::blockquote][1]",o)},add:function(o,e,n,i,a,l){var d,c,u,h,g;if(c=r.hasClass(o,"backlink"),d=r.el("div",{className:"inline"}),d.dataset.fullID=e+"."+i,g=t.findRoot(o,c),r.after(g,d),h=r.x('ancestor::*[contains(@class,"postContainer")][1]',g),r.addClass(h,"hasInline"),new nt(e,n,i,d,l),!!((u=p.posts.get(e+"."+i))&&a.thread===u.thread)&&(c&&f["Forward Hiding"]&&(r.addClass(u.nodes.root,"forwarded"),u.forwarded++||(u.forwarded=1)),!!te.posts))return te.readSinglePost(u)},rm:function(o,e,n,i,a){var l,d,c,u,h,g,m,b;if(c=r.hasClass(o,"backlink"),b=t.findRoot(o,c),b=r.x("following-sibling::div[@data-full-i-d='"+e+"."+i+"'][1]",b),g=r.x('ancestor::*[contains(@class,"postContainer")][1]',b),u=b.parentNode,r.rm(b),r.event("PostsRemoved",null,u),r(".inline",g)||r.rmClass(g,"hasInline"),!!(l=b.firstElementChild))for(h=p.posts.get(e+"."+i),h.rmClone(l.dataset.clone),f["Forward Hiding"]&&c&&a.thread===p.threads.get(e+"."+n)&&!--h.forwarded&&(delete h.forwarded,r.rmClass(h.nodes.root,"forwarded"));d=r(".inlined",l);)m=H.postDataFromLink(d),e=m.boardID,n=m.threadID,i=m.postID,t.rm(d,e,n,i,a),r.rmClass(d,"inlined")}},t}.call(this),qt=function(){var t,s=[].indexOf||function(o){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===o)return e;return-1};return t={init:function(){var o;if(!((o=p.VIEW)!=="index"&&o!=="thread"||!f["Mark OP Quotes"]))return f["Comment Expansion"]&&Ae.callbacks.push(this.node),this.mark=r.el("span",{textContent:"\xA0(OP)",className:"qmark-op"}),F.Post.push({name:"Mark OP Quotes",cb:this.node})},node:function(){var o,e,n,i,a,l,d,c,u;if(!(this.isClone&&this.thread===this.context.thread)&&(d=this.quotes).length){if(l=this.nodes.quotelinks,this.isClone&&(c=this.thread.fullID,s.call(d,c)>=0))for(n=0;a=l[n++];)r.rm(r(".qmark-op",a));if(e=this.context.thread.fullID,!(s.call(d,e)<0))for(n=0;a=l[n++];)u=H.postDataFromLink(a),o=u.boardID,i=u.postID,o+"."+i===e&&r.add(a,t.mark.cloneNode(!0))}}},t}.call(this),_e=function(){var t,s=[].slice;return t={init:function(){var o;if(f["Quote Previewing"]&&(p.VIEW==="archive"&&r.on(I,"mouseover",function(e){if(e.target.nodeName==="A"&&r.hasClass(e.target,"quotelink"))return t.mouseover.call(e.target,e)}),!((o=p.VIEW)!=="index"&&o!=="thread")))return f["Comment Expansion"]&&Ae.callbacks.push(this.node),F.Post.push({name:"Quote Previewing",cb:this.node})},node:function(){var o,e,n,i;for(i=this.nodes.quotelinks.concat(s.call(this.nodes.backlinks),this.nodes.archivelinks),o=0,e=i.length;o<e;o++)n=i[o],r.on(n,"mouseover",t.mouseover)},mouseover:function(o){var e,n,i,a,l,d,c,u,h,g;if(!(r.hasClass(this,"inlined")&&!r.hasClass(E,"catalog-mode")||!I.contains(this))&&(h=H.postDataFromLink(this),e=h.boardID,g=h.threadID,d=h.postID,u=r.el("div",{id:"qp",className:"dialog"}),r.add(L.hover,u),new nt(e,g,d,u,H.postFromNode(this)),$.hover({root:this,el:u,latestEvent:o,endEvents:"mouseout click",cb:t.mouseout}),f["Quote Highlighting"]&&(a=p.posts.get(e+"."+d))))for(c=[a].concat(a.clones),c.pop(),n=0,i=c.length;n<i;n++)l=c[n],r.addClass(l.nodes.post,"qphl")},mouseout:function(){var o,e,n,i,a,l;if((l=this.el.firstElementChild)&&(r.event("PostsRemoved",null,L.hover),o=H.postFromRoot(l),i=o.origin,i.rmClone(l.dataset.clone),!!f["Quote Highlighting"]))for(a=[i].concat(i.clones),e=0,n=a.length;e<n;e++)i=a[e],r.rmClass(i.nodes.post,"qphl")}},t}.call(this),jt=function(){var t;return t={init:function(){var s;if(((s=p.VIEW)==="index"||s==="thread")&&(f["Reply Hiding Buttons"]||f.Menu&&f["Reply Hiding Link"]||f.Filter))return F.Post.push({name:"Strike-through Quotes",cb:this.node})},node:function(){var s,o,e,n,i,a,l,d;if(!this.isClone)for(a=this.nodes.quotelinks,o=0,e=a.length;o<e;o++)i=a[o],l=H.postDataFromLink(i),s=l.boardID,n=l.postID,(d=p.posts.get(s+"."+n))!=null&&d.isHidden&&r.addClass(i,"filtered")}},t}.call(this),ke=function(){var t;return t={init:function(){if(f["Quote Threading"]&&p.VIEW==="thread")return this.controls=r.el("label",{innerHTML:'<input id="threadingControl" name="Thread Quotes" type="checkbox"> Threading'}),this.threadNewLink=r.el("span",{className:"brackets-wrap threadnewlink",hidden:!0}),r.extend(this.threadNewLink,{innerHTML:'<a href="javascript:;">Thread New Posts</a>'}),this.input=r("input",this.controls),this.input.checked=f["Thread Quotes"],r.on(this.input,"change",this.setEnabled),r.on(this.input,"change",this.rethread),r.on(this.threadNewLink.firstElementChild,"click",this.rethread),r.on(I,"4chanXInitFinished",function(s){return function(){return s.ready=!0}}(this)),L.menu.addEntry(this.entry={el:this.controls,order:99}),F.Thread.push({name:"Quote Threading",cb:this.setThread}),F.Post.push({name:"Quote Threading",cb:this.node})},parent:r.dict(),children:r.dict(),inserted:r.dict(),toggleThreading:function(){return this.setThreadingState(!f["Thread Quotes"])},setThreadingState:function(s){return this.input.checked=s,this.setEnabled.call(this.input),this.rethread.call(this.input)},setEnabled:function(){var s,o;return this.checked&&(r.set("Prune All Threads",!1),s=(o=et.inputs)!=null?o.enabled:void 0,s?.checked&&(s.checked=!1,r.event("change",null,s))),r.cb.checked.call(this)},setThread:function(){return t.thread=this,r.asap(function(){return!f["Thread Updater"]||r(".navLinksBot > .updatelink")},function(){var s;if(s=r(".navLinksBot"))return r.add(s,[r.tn(" "),t.threadNewLink])})},node:function(){var s,o,e,n,i,a,l,d;if(!(this.isFetchedQuote||this.isClone||!this.isReply)){for(a=new Set,e=null,d=this.quotes,o=0,n=d.length;o<n;o++)l=d[o],(i=p.posts.get(l))&&!i.isFetchedQuote&&i.isReply&&i.ID<this.ID&&(a.add(i.ID),(!e||i.ID>e.ID)&&(e=i));if(e){for(s=e;s=t.parent[s.fullID];)a.delete(s.ID);if(a.size===1)return t.parent[this.fullID]=e}}},descendants:function(s){var o,e,n,i,a;if(a=[s],e=t.children[s.fullID])for(n=0,i=e.length;n<i;n++)o=e[n],a=a.concat(t.descendants(o));return a},insert:function(s){var o,e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k;if(!(f["Thread Quotes"]&&(v=t.parent[s.fullID])&&!t.inserted[s.fullID]))return!1;if(i=t.descendants(s),!te.posts.has(v.ID)&&function(){var C,D,S;for(C=0,D=i.length;C<D;C++)if(S=i[C],te.posts.has(S.ID))return!0}())return t.threadNewLink.hidden=!1,!1;for(b=te.order,n=(o=t.children)[h=v.fullID]||(o[h]=[]),x=v.nodes.threadContainer||r.el("div",{className:"threadContainer"}),m=[s.nodes.root],s.nodes.threadContainer&&m.push(s.nodes.threadContainer),a=n.length,l=n.length-1;l>=0;l+=-1)e=n[l],e.ID>=s.ID&&a--;if(a!==n.length){for(g=n[a],d=0,u=i.length;d<u;d++)k=i[d],b.before(b[g.ID],b[k.ID]);n.splice(a,0,s),r.before(g.nodes.root,m)}else{for(A=v;(w=t.children[A.fullID])&&w.length;)A=w[w.length-1];for(c=i.length-1;c>=0;c+=-1)k=i[c],b.after(b[A.ID],b[k.ID]);n.push(s),r.add(x,m)}return t.inserted[s.fullID]=!0,v.nodes.threadContainer||(v.nodes.threadContainer=x,r.addClass(v.nodes.root,"threadOP"),r.after(v.nodes.root,x)),!0},rethread:function(){var s,o,e;if(t.ready)return e=t.thread,o=e.posts,t.threadNewLink.hidden=!0,f["Thread Quotes"]?o.forEach(t.insert):(s=[],te.order=new $e,t.inserted=r.dict(),o.forEach(function(n){if(!n.isFetchedQuote&&(te.order.push(n),n.isReply&&s.push(n.nodes.root),t.children[n.fullID]))return delete t.children[n.fullID],r.rmClass(n.nodes.root,"threadOP"),r.rm(n.nodes.threadContainer),delete n.nodes.threadContainer}),r.add(e.nodes.root,s)),te.position=te.order.first,te.updatePosition(),te.setLine(!0),te.read(),te.update()}},t}.call(this),se=function(){var t;return t={init:function(){var s;if(f["Remember Your Posts"]&&(this.db=new fe("yourPosts"),r.sync("Remember Your Posts",function(o){return f["Remember Your Posts"]=o}),r.on(I,"QRPostSuccessful",function(o){var e;return e=Xe.delay(),r.get("Remember Your Posts",f["Remember Your Posts"],function(n){var i,a,l,d;if(n["Remember Your Posts"])return l=o.detail,i=l.boardID,d=l.threadID,a=l.postID,t.db.set({boardID:i,threadID:d,postID:a,val:!0},e)})}),!((s=p.VIEW)!=="index"&&s!=="thread"&&s!=="archive")))return f["Highlight Own Posts"]&&r.addClass(E,"highlight-own"),f["Highlight Posts Quoting You"]&&r.addClass(E,"highlight-you"),f["Comment Expansion"]&&Ae.callbacks.push(this.node),this.mark=r.el("span",{textContent:"\xA0(You)",className:"qmark-you"}),F.Post.push({name:"Mark Quotes of You",cb:this.node}),t.menu.init()},isYou:function(s){var o;return!!((o=t.db)!=null&&o.get({boardID:s.boardID,threadID:s.threadID,postID:s.ID}))},node:function(){var s,o,e,n;if(!this.isClone&&(t.isYou(this)&&r.addClass(this.nodes.root,"yourPost"),!!this.quotes.length))for(n=this.nodes.quotelinks,s=0,o=n.length;s<o;s++)e=n[s],t.db.get(H.postDataFromLink(e))&&(f["Mark Quotes of You"]&&r.add(e,t.mark.cloneNode(!0)),r.addClass(e,"you"),r.addClass(this.nodes.root,"quotesYou"))},menu:{init:function(){var s,o,e;return o=r.el("label",{className:"toggle-you"},{innerHTML:'<input type="checkbox"> You'}),s=r("input",o),r.on(s,"change",t.menu.toggle),(e=ie.menu)!=null?e.addEntry({el:o,order:80,open:function(n){return t.menu.post=n.origin||n,s.checked=t.isYou(n),!0}}):void 0},toggle:function(){var s,o,e,n,i,a,l,d,c,u,h;for(l=t.menu.post,o={boardID:l.board.ID,threadID:l.thread.ID,postID:l.ID,val:!0},this.checked?t.db.set(o):t.db.delete(o),u=[l].concat(l.clones),e=0,i=u.length;e<i;e++)s=u[e],s.nodes.root.classList.toggle("yourPost",this.checked);for(h=H.allQuotelinksLinkingTo(l),n=0,a=h.length;n<a;n++)d=h[n],this.checked?f["Mark Quotes of You"]&&r.add(d,t.mark.cloneNode(!0)):r.rm(r(".qmark-you",d)),d.classList.toggle("you",this.checked),r.hasClass(d,"quotelink")&&(c=H.postFromNode(d).nodes.root,c.classList.toggle("quotesYou",!!r(".quotelink.you",c)))}},cb:{seek:function(s){var o,e,n,i,a,l;if(o=p.SITE.classes.highlight,(e=r("."+o))&&r.rmClass(e,o),t.lastRead&&E.contains(t.lastRead)&&r.hasClass(t.lastRead,"quotesYou"))n=t.lastRead;else{if(!(n=t.lastRead=r(".quotesYou"))){new J("warning","No posts are currently quoting you, loser.",20);return}if(t.cb.scroll(n))return}for(l=s+"::div[contains(@class,'quotesYou')]";n=(a=r.X(l,n)).snapshotItem(s==="preceding"?a.snapshotLength-1:0);)if(t.cb.scroll(n))return;return i=N(".quotesYou"),t.cb.scroll(i[s==="following"?0:i.length-1])},scroll:function(s){var o,e,n;return e=H.postFromRoot(s),e.nodes.post.getBoundingClientRect().height?(t.lastRead=s,location.href=H.url("post",e),L.scrollTo(e.nodes.post),e.isReply&&(n=""+p.SITE.selectors.postContainer+p.SITE.selectors.highlightable.reply,o=e.nodes.root,o.matches(n)||(o=r(n,o)),r.addClass(o,p.SITE.classes.highlight)),!0):!1}}},t}.call(this),Ht=function(){var t,s=[].indexOf||function(e){for(var n=0,i=this.length;n<i;n++)if(n in this&&this[n]===e)return n;return-1},o=[].slice;return t={init:function(){var e;if(!((e=p.VIEW)!=="index"&&e!=="thread"||!f["Resurrect Quotes"]))return r.addClass(E,"resurrect-quotes"),f["Comment Expansion"]&&Ae.callbacks.push(this.node),F.Post.push({name:"Resurrect Quotes",cb:this.node})},node:function(){var e,n,i,a,l,d,c,u;if(this.isClone){this.nodes.archivelinks=N("a.linkify.quotelink",this.nodes.comment);return}for(c=N("a.linkify",this.nodes.comment),n=0,a=c.length;n<a;n++)d=c[n],t.parseArchivelink.call(this,d);for(u=N(".deadlink",this.nodes.comment),i=0,l=u.length;i<l;i++)e=u[i],t.parseDeadlink.call(this,e)},parseArchivelink:function(e){var n,i,a,l,d;if((i=e.pathname.match(/^\/([^\/]+)\/thread\/S?(\d+)\/?$/))&&!((l=e.hostname)==="boards.4chan.org"||l==="boards.4channel.org")&&(n=i[1],d=i[2],a=e.hash.match(/^#[pq]?(\d+)$|$/)[1]||d,ne.to("post",{boardID:n,postID:a})))return r.addClass(e,"quotelink"),r.extend(e.dataset,{boardID:n,threadID:d,postID:a}),this.nodes.archivelinks.push(e)},parseDeadlink:function(e){var n,i,a,l,d,c,u,h,g,m;if(r.hasClass(e.parentNode,"prettyprint")){t.fixDeadlink(e);return}if(u=e.textContent,!!(c=(m=u.match(/\d+$/))!=null?m[0]:void 0)){if(c[0]==="0"){t.fixDeadlink(e);return}if(i=(l=u.match(/^>>>\/([a-z\d]+)/))?l[1]:this.board.ID,h=i+"."+c,(d=p.posts.get(h))?d.isDead?(n=r.el("a",{href:p.SITE.Build.postURL(i,d.thread.ID,c),className:"quotelink deadlink",textContent:u}),r.add(n,ae.deadMark.cloneNode(!0)),r.extend(n.dataset,{boardID:i,threadID:d.thread.ID,postID:c})):n=r.el("a",{href:p.SITE.Build.postURL(i,d.thread.ID,c),className:"quotelink",textContent:u}):(g=ne.to("thread",{boardID:i,threadID:0,postID:c}),a=ne.to("post",{boardID:i,postID:c}),(g||a)&&(n=r.el("a",{href:g||"javascript:;",className:"deadlink",textContent:u}),r.add(n,ae.deadMark.cloneNode(!0)),a&&(r.addClass(n,"quotelink"),r.extend(n.dataset,{boardID:i,postID:c})))),s.call(this.quotes,h)<0&&this.quotes.push(h),!n){r.add(e,ae.deadMark.cloneNode(!0));return}if(r.replace(e,n),r.hasClass(n,"quotelink"))return this.nodes.quotelinks.push(n)}},fixDeadlink:function(e){var n,i;return(!(n=e.previousSibling)||n.nodeName==="BR")&&(i=r.el("span",{className:"quote"}),r.before(e,i),r.add(i,e)),r.replace(e,o.call(e.childNodes))}},t}.call(this),Z=function(){var t,s=[].indexOf||function(o){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===o)return e;return-1};return t={init:function(){var o,e,n,i,a,l,d,c,u,h,g,m,b;try{if(b=window,r.platform==="crx"&&(b=b.wrappedJSObject||b),"4chan X antidup"in b)return;b["4chan X antidup"]=!0}catch{}try{if(window.frameElement&&((h=window.frameElement.src)===""||h==="about:blank"))return}catch{}if(!(E&&r.hasClass(E,"fourchan-x"))){for(r.asap(tt,function(){if(r.addClass(E,"fourchan-x","seaweedchan"),r.engine)return r.addClass(E,"ua-"+r.engine)}),r.on(I,"4chanXInitFinished",function(){return t.expectInitFinished?delete t.expectInitFinished:(new J("error","Error: Multiple copies of 4chan X are enabled."),r.addClass(E,"tainted"))}),u=function(){var v,A,w,x,k;for(I.removeEventListener("mounted",u,!0),t.isMounted=!0,x=t.mountedCBs,k=[],A=0,w=x.length;A<w;A++){v=x[A];try{k.push(v())}catch{}}return k},I.addEventListener("mounted",u,!0),e=function(v,A){var w,x;if(A instanceof Array)f[v]=r.dict.clone(A[0]);else if(typeof A=="object")for(w in A)x=A[w],e(w,x);else f[v]=A},((g=location.hostname)==="boards.4chan.org"||g==="boards.4channel.org")&&(r.global(function(){var v;return v=String.fromCharCode,String.fromCharCode=function(){if(document.body)String.fromCharCode=v;else if(document.currentScript&&!document.currentScript.src)throw Error();return v.apply(this,arguments)}}),r.asap(tt,function(){return r.onExists(E,"iframe[srcdoc]",r.rm)})),e(null,de),m=fe.keys,a=0,c=m.length;a<c;a++)o=m[a],f[o]=r.dict();for(f.customTitles=r.dict.clone({"4chan.org":{boards:{qa:{boardTitle:{orig:"/qa/ - Question & Answer",title:"/qa/ - 2D/Random"}}}}}),f.boardConfig={boards:r.dict()},f.archives=ne.archives,f.selectedArchives=r.dict(),f.cooldowns=r.dict(),f["Index Sort"]=r.dict(),n=l=0;l<2;n=++l)f["Last Long Reply Thresholds "+n]=r.dict();f.siteProperties=r.dict(),f["Except Archives from Encryption"]=!1,f["JSON Navigation"]=!0,f["Oekaki Links"]=!0,f["Show Name and Subject"]=!1,f["QR Shortcut"]=!0,f["Bottom QR Link"]=!0,f["Toggleable Thread Watcher"]=!0,f.siteSoftware="",f["Use Faster Image Host"]="true",f["Captcha Fixes"]=!0,f.captchaServiceDomain="",f.captchaServiceKey=r.dict(),/\.4chan(?:nel)?\.org$/.test(location.hostname)&&!le.yotsuba.regexp.pass.test(location.href)&&!le.yotsuba.regexp.captcha.test(location.href)&&!N("script:not([src])",I).filter(function(v){return/this\[/.test(v.textContent)}).length&&(r.getSync||r.get)({jsWhitelist:f.jsWhitelist},function(v){var A;return A=v.jsWhitelist,r.addCSP("script-src "+A.replace(/^#.*$/mg,"").replace(/[\s;]+/g," ").trim())}),i=r.dict();for(d in f)i[d]=void 0;return i.previousversion=void 0,(r.getSync||r.get)(i,function(v){var A;if(!r.perProtocolSettings&&/\.4chan(?:nel)?\.org$/.test(location.hostname)&&((A=v["Redirect to HTTPS"])!=null?A:f["Redirect to HTTPS"])&&location.protocol!=="https:"){location.replace("https://"+location.host+location.pathname+location.search+location.hash);return}return r.asap(tt,function(){var w,x;r.cantSet||(v.previousversion==null?(t.isFirstRun=!0,t.ready(function(){return r.set("previousversion",p.VERSION),we.open()})):v.previousversion!==p.VERSION&&t.upgrade(v));for(d in f)x=f[d],f[d]=(w=v[d])!=null?w:x;return rt.init(t.initFeatures)})})}},upgrade:function(o){var e,n;return n=o.previousversion,e=we.upgrade(o,n),o.previousversion=e.previousversion=p.VERSION,r.set(e,function(){var i,a;if((a=o["Show Updated Notifications"])==null||a)return i=r.el("span",{innerHTML:'4chan X has been updated to <a href="https://github.com/ccd0/4chan-x/blob/master/CHANGELOG.md" target="_blank">version '+T(p.VERSION)+"</a>."}),new J("info",i,15)})},parseURL:function(o,e){var n,i,a;return o==null&&(o=p.SITE),e==null&&(e=location),i={},!o||(i.siteID=o.ID,typeof o.isBoardlessPage=="function"&&o.isBoardlessPage(e))||(n=e.pathname.split(/\/+/),i.boardID=n[1],o.isFileURL(e)?i.VIEW="file":typeof o.isAuxiliaryPage=="function"&&o.isAuxiliaryPage(e)||((a=n[2])==="thread"||a==="res"?(i.VIEW="thread",i.threadID=i.THREADID=+n[3].replace(/\.\w+$/,"")):n[2]==="archive"&&n[3]==="res"?(i.VIEW="thread",i.threadID=i.THREADID=+n[4].replace(/\.\w+$/,""),i.threadArchived=!0):/^(?:catalog|archive)(?:\.\w+)?$/.test(n[2])?i.VIEW=n[2].replace(/\.\w+$/,""):/^(?:index|\d*)(?:\.\w+)?$/.test(n[2])&&(i.VIEW="index"))),i},initFeatures:function(){var o,e,n,i,a,l,d,c;if(r.global(function(){return document.documentElement.classList.add("js-enabled"),window.FCX={}}),t.jsEnabled=r.hasClass(E,"js-enabled"),typeof r.ajaxPageInit=="function"&&r.ajaxPageInit(),r.extend(p,t.parseURL()),p.boardID&&(p.BOARD=new Ee(p.boardID)),!p.VIEW){typeof(o=p.SITE).initAuxiliary=="function"&&o.initAuxiliary();return}if(p.VIEW==="file"){r.asap(function(){return I.readyState!=="loading"},function(){var u,h,g;if(p.SITE.software==="yotsuba"&&f["404 Redirect"]&&(typeof(u=p.SITE).is404=="function"&&u.is404()))return h=location.pathname.split(/\/+/),ne.navigate("file",{boardID:p.BOARD.ID,filename:h[h.length-1]});if((g=r("video"))&&(f["Volume in New Tab"]&&Ie.setup(g),f["Loop in New Tab"]))return g.loop=!0,g.controls=!1,g.play(),_.addControls(g)});return}for(p.threads=new qe,p.posts=new qe,r.onExists(E,"body",t.initStyle),d=t.features,i=0,a=d.length;i<a;i++)if(c=d[i],l=c[0],n=c[1],!(p.SITE.disabledFeatures&&s.call(p.SITE.disabledFeatures,l)>=0))try{n.init()}catch(u){e=u,t.handleErrors({message:'"'+l+'" initialization crashed.',error:e})}return r.ready(t.initReady)},initStyle:function(){var o,e;if(t.isThisPageLegit())return(e=r("link[href*=mobile]",I.head))!=null&&(e.disabled=!0),E.dataset.host=location.host,r.addClass(E,"sw-"+p.SITE.software),r.addClass(E,p.VIEW==="thread"?"thread-view":p.VIEW),r.onExists(E,".ad-cnt, .adg-rects > .desktop",function(n){return r.onExists(n,"img, iframe",function(){return r.addClass(E,"ads-loaded")})}),f["Autohiding Scrollbar"]&&r.addClass(E,"autohiding-scrollbar"),r.ready(function(){if(I.body.clientHeight>E.clientHeight&&window.innerWidth===E.clientWidth!==f["Autohiding Scrollbar"])return f["Autohiding Scrollbar"]=!f["Autohiding Scrollbar"],r.set("Autohiding Scrollbar",f["Autohiding Scrollbar"]),r.toggleClass(E,"autohiding-scrollbar")}),r.addStyle(Te.sub(Te.boards),"fourchanx-css"),t.bgColorStyle=r.el("style",{id:"fourchanx-bgcolor-css"}),o=!1,r.on(I,"mousedown",function(){return o=!1}),r.on(I,"keydown",function(n){if(n.keyCode===9)return o=!0}),window.addEventListener("focus",function(){return E.classList.toggle("keyboard-focus",o)},!0),t.setClass()},setClass:function(){var o,e,n,i,a,l,d,c,u,h;if(e=["yotsuba","yotsuba-b","futaba","burichan","photon","tomorrow","spooky"],p.SITE.software==="yotsuba"&&p.VIEW==="catalog"&&(i=r.id("base-css"))&&(c=(a=i.href.match(/catalog_(\w+)/))!=null?a[1].replace("_new","").replace(/_+/g,"-"):void 0,s.call(e,c)>=0)){r.addClass(E,c);return}if(c=i=h=null,d=function(){var g,m,b,v,A,w,x,k;if(p.SITE.software==="yotsuba"){for(r.rmClass(E,c),c=null,v=0,A=h.length;v<A;v++)if(k=h[v],k.href===i?.href){c=k.title.toLowerCase().replace("new","").trim().replace(/\s+/g,"-"),c==="_special"&&(c=k.href.match(/[a-z]*(?=[^\/]*$)/)[0]),s.call(e,c)<0&&(c=null);break}if(c){r.addClass(E,c),r.rm(t.bgColorStyle);return}}return b=p.SITE.bgColoredEl(),b.style.position="absolute",b.style.visibility="hidden",r.add(I.body,b),g=window.getComputedStyle(b).backgroundColor,r.rm(b),w=g.match(/[\d.]+/g),/^rgb\(/.test(g)||(x=window.getComputedStyle(I.body),g=x.backgroundColor+" "+x.backgroundImage+" "+x.backgroundRepeat+" "+x.backgroundPosition),m=`.dialog, .suboption-list > div:last-of-type, :root.catalog-hover-expand .catalog-container:hover > .post {
  background: `+g+`;
}
.unread-mark-read {
  background-color: rgba(`+w.slice(0,3).join(", ")+", "+.5*(w[3]||1)+`);
}`,r.luma(w)<100&&(m+=`.watch-thread-link {
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(200,200,200)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}`),t.bgColorStyle.textContent=m,r.after(r.id("fourchanx-css"),t.bgColorStyle)},r.onExists(I.head,p.SITE.selectors.styleSheet,function(g){return i=g,p.SITE.software==="yotsuba"&&(h=N('link[rel="alternate stylesheet"]',I.head)),new MutationObserver(d).observe(i,{attributes:!0,attributeFilter:["href"]}),r.on(i,"load",d),d()}),!i){for(l=N('link[rel="stylesheet"]',I.head),o=0,n=l.length;o<n;o++)u=l[o],r.on(u,"load",d);return d()}},initReady:function(){var o,e,n;if(typeof(o=p.SITE).is404=="function"&&o.is404()){p.VIEW==="thread"&&pe.set404(p.BOARD.ID,p.THREADID,function(){if(f["404 Redirect"])return ne.navigate("thread",{boardID:p.BOARD.ID,threadID:p.THREADID,postID:+location.hash.match(/\d+/)},"/"+p.BOARD+"/")});return}return typeof(e=p.SITE).isIncomplete=="function"&&e.isIncomplete()&&(n=r.el("div",{innerHTML:'The page didn&#039;t load completely.<br>Some features may not work unless you <a href="javascript:;">reload</a>.'}),r.on(r("a",n),"click",function(){return location.reload()}),new J("warning",n)),p.VIEW==="catalog"?t.initCatalog():X.enabled?(t.expectInitFinished=!0,r.event("4chanXInitFinished")):p.SITE.awaitBoard?p.SITE.awaitBoard(t.initThread):t.initThread()},initThread:function(){var o,e,n,i,a,l,d,c;if(d=p.SITE.selectors,n=r(((l=d.boardFor)!=null?l[p.VIEW]:void 0)||d.board)){c=[],a=[],i=[];try{typeof(o=p.SITE).preParsingFixes=="function"&&o.preParsingFixes(n)}catch{}return t.addThreadsObserver=new MutationObserver(t.addThreads),t.addPostsObserver=new MutationObserver(t.addPosts),t.addThreadsObserver.observe(n,{childList:!0}),t.parseThreads(N(d.thread,n),c,a,i),i.length&&t.handleErrors(i),p.VIEW==="thread"&&(p.threadArchived&&(c[0].isArchived=!0,c[0].kill()),typeof(e=p.SITE).parseThreadMetadata=="function"&&e.parseThreadMetadata(c[0])),t.callbackNodes("Thread",c),t.callbackNodesDB("Post",a,function(){var u,h,g;for(u=0,h=a.length;u<h;u++)g=a[u],ke.insert(g);return t.expectInitFinished=!0,r.event("4chanXInitFinished")})}else return t.expectInitFinished=!0,r.event("4chanXInitFinished")},parseThreads:function(o,e,n,i){var a,l,d,c,u,h,g,m,b;for(d=0,c=o.length;d<c;d++){if(b=o[d],l=(a=b.dataset.board)?(a=encodeURIComponent(a),p.boards[a]||new Ee(a)):p.BOARD,m=+b.id.match(/\d*$/)[0],!m||(h=l.threads.get(m))!=null&&h.nodes.root)return;g=new Se(m,l),g.nodes.root=b,e.push(g),u=N(p.SITE.selectors.postContainer,b),p.SITE.isOPContainerThread&&u.unshift(b),t.parsePosts(u,g,n,i),t.addPostsObserver.observe(b,{childList:!0})}},parsePosts:function(o,e,n,i){var a,l,d,c;for(l=0,d=o.length;l<d;l++)if(c=o[l],!(c.dataset.fullID&&p.posts.get(c.dataset.fullID))&&r(p.SITE.selectors.comment,c))try{n.push(new ae(c,e,e.board))}catch(u){a=u,i.push({message:"Parsing of Post No."+c.id.match(/\d+/)+" failed. Post will be skipped.",error:a,html:c.outerHTML})}},addThreads:function(o){var e,n,i,a,l,d,c,u,h,g,m;for(g=[],n=0,a=o.length;n<a;n++)for(u=o[n],h=u.addedNodes,i=0,l=h.length;i<l;i++)d=h[i],d.nodeType===Node.ELEMENT_NODE&&d.matches(p.SITE.selectors.thread)&&g.push(d);if(g.length)return m=[],c=[],e=[],t.parseThreads(g,m,c,e),e.length&&t.handleErrors(e),t.callbackNodes("Thread",m),t.callbackNodesDB("Post",c,function(){return r.event("PostsInserted",null,o[0].target)})},addPosts:function(o){var e,n,i,a,l,d,c,u,h,g,m,b,v,A,w,x,k,C,D,S;for(D=[],S=[],v=[],i=[],a=0,c=o.length;a<c;a++){for(A=o[a],C=H.threadFromRoot(A.target),b=[],w=A.addedNodes,l=0,u=w.length;l<u;l++)m=w[l],m.nodeType===Node.ELEMENT_NODE&&(m.matches(p.SITE.selectors.postContainer)||(m=r(p.SITE.selectors.postContainer,m)))&&b.push(m);for(g=v.length,t.parsePosts(b,C,v,i),v.length>g&&s.call(D,C)<0&&D.push(C),e=!1,x=A.removedNodes,d=0,h=x.length;d<h;d++)if(n=x[d],((k=H.postFromRoot(n))!=null?k.nodes.root:void 0)===n&&!E.contains(n)){e=!0;break}e&&s.call(S,C)<0&&S.push(C)}return i.length&&t.handleErrors(i),t.callbackNodesDB("Post",v,function(){var R,B,M,P;for(M=0,R=D.length;M<R;M++)C=D[M],r.event("PostsInserted",null,C.nodes.root);for(P=0,B=S.length;P<B;P++)C=S[P],r.event("PostsRemoved",null,C.nodes.root)})},initCatalog:function(){var o,e,n,i;return n=p.SITE.selectors.catalog,n&&(o=r(n.board))&&(i=[],e=[],t.addCatalogThreadsObserver=new MutationObserver(t.addCatalogThreads),t.addCatalogThreadsObserver.observe(o,{childList:!0}),t.parseCatalogThreads(N(n.thread,o),i,e),e.length&&t.handleErrors(e),t.callbackNodes("CatalogThreadNative",i)),t.expectInitFinished=!0,r.event("4chanXInitFinished")},parseCatalogThreads:function(o,e,n){var i,a,l,d,c,u;for(a=0,l=o.length;a<l;a++){u=o[a];try{c=new ht(u),((d=c.thread.catalogViewNative)!=null?d.nodes.root:void 0)!==u&&(c.thread.catalogViewNative=c,e.push(c))}catch(h){i=h,n.push({message:"Parsing of Catalog Thread No."+(u.dataset.id||u.id).match(/\d+/)+" failed. Thread will be skipped.",error:i,html:u.outerHTML})}}},addCatalogThreads:function(o){var e,n,i,a,l,d,c,u,h,g;for(h=[],n=0,a=o.length;n<a;n++)for(c=o[n],u=c.addedNodes,i=0,l=u.length;i<l;i++)d=u[i],d.nodeType===Node.ELEMENT_NODE&&d.matches(p.SITE.selectors.catalog.thread)&&h.push(d);if(h.length)return g=[],e=[],t.parseCatalogThreads(h,g,e),e.length&&t.handleErrors(e),t.callbackNodes("CatalogThreadNative",g)},callbackNodes:function(o,e){var n,i,a;for(i=0,n=F[o];a=e[i++];)n.execute(a)},callbackNodesDB:function(o,e,n){var i,a,l,d;return l=0,i=F[o],a=function(){var c;return(c=e[l])?(i.execute(c),++l%25):!1},d=function(){for(;a(););if(!e[l]){n&&n();return}return setTimeout(d,0)},d()},handleErrors:function(o){var e,n,i,a,l,d,c;if(I.body&&r.hasClass(I.body,"fourchan_x")&&!r.hasClass(E,"tainted")&&(new J("error","Error: Multiple copies of 4chan X are enabled."),r.addClass(E,"tainted")),p.SITE.testNativeExtension&&!r.hasClass(E,"tainted")&&(n=p.SITE.testNativeExtension().enabled,n&&(r.addClass(E,"tainted"),f["Disable Native Extension"]&&!t.isFirstRun&&(c=r.el("div",{innerHTML:'Failed to disable the native extension. You may need to <a href="https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions#blocking-native-extension" target="_blank">block it</a>.'}),new J("error",c)))),o instanceof Array?o.length===1&&(i=o[0]):i=o,i){new J("error",t.parseError(i,t.reportLink([i])),15);return}for(e=r.el("div",{innerHTML:T(o.length)+" errors occurred."+t.reportLink(o).innerHTML+' [<a href="javascript:;">show</a>]'}),r.on(e.lastElementChild,"click",function(){var u;return u=this.textContent==="show"?["hide",!1]:["show",!0],this.textContent=u[0],d.hidden=u[1],u}),d=r.el("div",{hidden:!0}),a=0,l=o.length;a<l;a++)i=o[a],r.add(d,t.parseError(i));return new J("error",[e,d],30)},parseError:function(o,e){var n,i,a,l,d,c;return ze.error(o.message,o.error.stack),l=r.el("div",{innerHTML:T(o.message)+(e?e.innerHTML:"")}),i=r.el("div",{textContent:(o.error.name||"Error")+": "+(o.error.message||"see console for details")}),a=((d=o.error.stack)!=null&&(c=d.match(/\d+(?=:\d+\)?$)/mg))!=null?c.join().replace(/^/," at "):void 0)||"",n=r.el("div",{textContent:"(4chan X ccd0 v"+p.VERSION+" "+r.platform+" on "+r.engine+a+")"}),[l,i,n]},reportLink:function(o){var e,n,i,a,l,d;return n=o[0],l=n.message,o.length>1&&(l+=" (+"+(o.length-1)+" other errors)"),i="",e=function(c){if(!(encodeURIComponent(l+i+c+`
`).length>8143))return i+=c+`
`},e(`[Please describe the steps needed to reproduce this error.]

Script: 4chan X ccd0 v`+p.VERSION+" "+r.platform+`
URL: `+location.href+`
User agent: `+navigator.userAgent),r.platform==="userscript"&&(a=typeof GM<"u"&&GM!==null?GM.info:typeof GM_info<"u"&&GM_info!==null?GM_info:void 0)&&e("Userscript manager: "+a.scriptHandler+" "+a.version),e(`
`+n.error),n.error.stack&&e(n.error.stack.replace(n.error.toString(),"").trim()),n.html&&e("\n`"+n.html+"`"),i=i.replace(/file:\/{3}.+\//g,""),d="https://github.com/ccd0/4chan-x/issues".replace("%title",encodeURIComponent(l)).replace("%details",encodeURIComponent(i)),{innerHTML:'<span class="report-error"> [<a href="'+T(d)+'" target="_blank">report</a>]</span>'}},isThisPageLegit:function(){return"thisPageIsLegit"in t||(t.thisPageIsLegit=p.SITE.isThisPageLegit?p.SITE.isThisPageLegit():!/^[45]\d\d\b/.test(document.title)&&!/\.(?:json|rss)$/.test(location.pathname)),t.thisPageIsLegit},ready:function(o){return r.ready(function(){if(t.isThisPageLegit())return o()})},mounted:function(o){return t.isMounted?o():t.mountedCBs.push(o)},mountedCBs:[],features:[["Polyfill",Mt],["Board Configuration",oe],["Normalize URL",Et],["Delay Redirect on Post",Xe],["Captcha Configuration",Y.replace],["Image Host Rewriting",re],["Redirect",ne],["Header",L],["Catalog Links",ye],["Settings",we],["Index Generator",X],["Disable Autoplay",dt],["Announcement Hiding",Rt],["Fourchan thingies",vt],["Tinyboard Glue",Jt],["Color User IDs",At],["Highlight by User ID",wt],["Count Posts by ID",xt],["Custom CSS",je],["Thread Links",Gt],["Linkify",It],["Reveal Spoilers",Ut],["Resurrect Quotes",Ht],["Filter",ue],["Thread Hiding Buttons",he],["Reply Hiding Buttons",Me],["Recursive",me],["Strike-through Quotes",jt],["Quick Reply Personas",y.persona],["Quick Reply",y],["Cooldown",y.cooldown],["Post Jumper",Nt],["Pass Link",Bt],["Menu",ie],["Index Generator (Menu)",X.menu],["Report Link",Qt],["Copy Text Link",pt],["Thread Hiding (Menu)",he.menu],["Reply Hiding (Menu)",Me.menu],["Delete Link",gt],["Filter (Menu)",ue.menu],["Edit Link",y.oekaki.menu],["Download Link",bt],["Archive Link",ct],["Quote Inlining",Ze],["Quote Previewing",_e],["Quote Backlinks",Ft],["Mark Quotes of You",se],["Mark OP Quotes",qt],["Mark Cross-thread Quotes",Ot],["Anonymize",lt],["Time Formatting",it],["Relative Post Dates",Ue],["File Info Formatting",ot],["Fappe Tyme",Fe],["Gallery",He],["Gallery (menu)",He.menu],["Sauce",Ve],["Image Expansion",De],["Image Expansion (Menu)",De.menu],["Reveal Spoiler Thumbnails",Wt],["Image Loading",kt],["Image Hover",yt],["Volume Control",Ie],["WEBM Metadata",Dt],["Comment Expansion",Ae],["Thread Expansion",Ke],["Favicon",Be],["Unread",te],["Unread Line in Index",We],["Quote Threading",ke],["Thread Stats",Yt],["Thread Updater",Qe],["Thread Watcher",pe],["Thread Watcher (Menu)",pe.menu],["Mark New IPs",Ct],["Index Navigation",Oe],["Keybinds",Pe],["Banner",ut],["Announcements",Tt],["Flash Features",mt],["Reply Pruning",et],["Mod Contact Links",St]]},t}.call(this),Z.init()})();
