// ==UserScript==
// @name         4chan XT
// @version      2.24.1
// @minGMVer     1.14
// @minFFVer     78
// @namespace    4chan-XT
// @license      MIT; https://github.com/TuxedoTako/4chan-xt/blob/project-XT/LICENSE
// @include      https://boards.4chan.org/*
// @include      https://sys.4chan.org/*
// @include      https://www.4chan.org/*
// @include      https://i.4cdn.org/*
// @include      https://is.4chan.org/*
// @include      https://is2.4chan.org/*
// @include      https://erischan.org/*
// @include      https://www.erischan.org/*
// @include      https://fufufu.moe/*
// @include      https://kakashinenpo.com/*
// @include      https://www.kakashinenpo.com/*
// @include      https://kissu.moe/*
// @include      https://www.kissu.moe/*
// @include      https://original.kissu.moe/*
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
// @exclude      https://www.4chan.org/advertise
// @exclude      https://www.4chan.org/advertise?*
// @exclude      https://www.4chan.org/donate
// @exclude      https://www.4chan.org/donate?*
// @exclude      https://www.4chan.org/
// @connect      4chan.org
// @connect      4channel.org
// @connect      4cdn.org
// @connect      4chenz.github.io
// @connect      archive.4plebs.org
// @connect      warosu.org
// @connect      desuarchive.org
// @connect      boards.fireden.net
// @connect      arch.b4k.dev
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
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/4chanXT.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/4chanXT.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACVBMVEUAAGcAAABmzDNZt9VtAAAAAXRSTlMAQObYZgAAAF5JREFUeNrtkTESABAQxPD/R6tsE2dUGYUtFJvLDKf93KevHJAjpBorAQWSBIKqFASC4G0pCAkm4GfaEvgYXl0T6HBaE97f0vmnfYHbZOMLZCx9ISdKWwjOWZSC8GYm4SUGwfYgqI4AAAAASUVORK5CYII=
// @license      MIT
// ==/UserScript==
(function(){"use strict";var $t={version:"2.24.1",date:"2025-05-17T18:20:00Z"},z={name:"4chan XT",path:"4chan-XT",fork:"TuxedoTako",page:"https://github.com/TuxedoTako/4chan-xt",downloads:"https://github.com/TuxedoTako/4chan-xt/releases",oldVersions:"https://raw.githubusercontent.com/ccd0/4chan-x/",faq:"https://github.com/TuxedoTako/4chan-xt/wiki/Frequently-Asked-Questions",upstreamFaq:"https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions",captchaFAQ:"https://github.com/ccd0/4chan-x/wiki/Captcha-FAQ",cssGuide:"https://github.com/ccd0/4chan-x/wiki/Styling-Guide",license:"https://github.com/TuxedoTako/4chan-xt/blob/project-XT/LICENSE",changelog:"https://github.com/TuxedoTako/4chan-xt/blob/project-XT/CHANGELOG.md",issues:"https://github.com/TuxedoTako/4chan-xt/issues",newIssue:"https://github.com/TuxedoTako/4chan-xt/issues",newIssueMaxLength:8181,alternatives:"https://www.4chan-x.net/4chan_alternatives.html",appid:"lacclbnghgdicfifcamcmcnilckjamag",appidGecko:"4chan-x@4chan-x.net",recaptchaKey:"6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc",min:{chrome:"90",firefox:"78",greasemonkey:"1.14"}};const l=Object.create(null),c={VERSION:$t.version,VERSION_DATE:new Date($t.date),NAMESPACE:z.name,sites:Object.create(null),boards:Object.create(null)},oe=function(){const e={"&":"&amp;","'":"&#039;",'"':"&quot;","<":"&lt;",">":"&gt;"},t=/[&"'<>]/g,i=function(s){return e[s]},n=function(s){return s.toString().replace(t,i)};return n.cat=function(s){let r="";for(let a=0;a<s.length;a++)r+=s[a].innerHTML;return r},n}(),m=document,w=m.documentElement,ut=console,kt=function(){return w};class N{static initClass(){this.Post=new N("Post"),this.Thread=new N("Thread"),this.CatalogThread=new N("Catalog Thread"),this.CatalogThreadNative=new N("Catalog Thread")}constructor(t){this.type=t,this.keys=[]}push({name:t,cb:i}){return this[t]||this.keys.push(t),this[t]=i}execute(t,i=this.keys,n=!1){let s;if(!(t.callbacksExecuted&&!n)){t.callbacksExecuted=!0;for(var r of i)try{this[r]?.call(t)}catch(a){s||(s=[]),s.push({message:['"',r,'" crashed on node ',this.type," No.",t.ID," (",t.board,")."].join(""),error:a,html:t.nodes?.root?.outerHTML})}if(s)return D.handleErrors(s)}}}N.initClass();var Kt=`/* Board title rice */
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
}`,Xt=["0.jpg","1.jpg","2.jpg","4.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","24.jpg","25.jpg","26.jpg","28.jpg","29.jpg","33.jpg","38.jpg","39.jpg","43.jpg","44.jpg","45.jpg","46.jpg","47.jpg","52.jpg","54.jpg","57.jpg","59.jpg","60.jpg","61.jpg","64.jpg","66.jpg","67.jpg","69.jpg","71.jpg","72.jpg","76.jpg","77.jpg","81.jpg","82.jpg","83.jpg","84.jpg","88.jpg","90.jpg","91.jpg","96.jpg","98.jpg","99.jpg","100.jpg","104.jpg","106.jpg","116.jpg","119.jpg","137.jpg","140.jpg","148.jpg","149.jpg","150.jpg","154.jpg","156.jpg","157.jpg","158.jpg","159.jpg","161.jpg","162.jpg","164.jpg","165.jpg","166.jpg","167.jpg","168.jpg","169.jpg","170.jpg","171.jpg","172.jpg","173.jpg","174.jpg","175.jpg","176.jpg","178.jpg","179.jpg","180.jpg","181.jpg","182.jpg","183.jpg","186.jpg","189.jpg","190.jpg","192.jpg","193.jpg","194.jpg","197.jpg","198.jpg","200.jpg","201.jpg","202.jpg","203.jpg","205.jpg","206.jpg","207.jpg","208.jpg","210.jpg","213.jpg","214.jpg","215.jpg","216.jpg","218.jpg","219.jpg","220.jpg","221.jpg","222.jpg","223.jpg","224.jpg","227.jpg","0.png","1.png","2.png","3.png","5.png","6.png","9.png","10.png","11.png","12.png","14.png","16.png","19.png","20.png","21.png","22.png","23.png","24.png","26.png","27.png","28.png","29.png","30.png","31.png","32.png","33.png","34.png","37.png","39.png","40.png","41.png","42.png","43.png","44.png","45.png","48.png","49.png","50.png","51.png","52.png","53.png","57.png","58.png","59.png","64.png","66.png","67.png","68.png","69.png","70.png","71.png","72.png","76.png","78.png","79.png","81.png","82.png","85.png","86.png","87.png","89.png","95.png","98.png","100.png","101.png","102.png","105.png","106.png","107.png","109.png","110.png","111.png","112.png","113.png","114.png","115.png","116.png","118.png","119.png","120.png","121.png","122.png","123.png","126.png","128.png","130.png","134.png","136.png","138.png","139.png","140.png","142.png","145.png","146.png","149.png","150.png","151.png","152.png","153.png","154.png","155.png","156.png","157.png","158.png","159.png","160.png","163.png","164.png","165.png","166.png","167.png","168.png","169.png","170.png","171.png","172.png","173.png","174.png","178.png","179.png","180.png","181.png","182.png","184.png","186.png","188.png","190.png","192.png","193.png","194.png","195.png","196.png","197.png","198.png","200.png","202.png","203.png","205.png","206.png","207.png","209.png","212.png","213.png","214.png","216.png","217.png","218.png","219.png","220.png","221.png","222.png","223.png","224.png","225.png","226.png","229.png","231.png","232.png","233.png","234.png","235.png","237.png","238.png","239.png","240.png","241.png","242.png","244.png","245.png","246.png","247.png","248.png","249.png","250.png","253.png","254.png","255.png","256.png","257.png","258.png","259.png","260.png","262.png","268.png","0.gif","1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","12.gif","13.gif","14.gif","15.gif","16.gif","18.gif","19.gif","20.gif","21.gif","22.gif","23.gif","24.gif","28.gif","29.gif","30.gif","33.gif","34.gif","35.gif","36.gif","37.gif","39.gif","40.gif","42.gif","44.gif","45.gif","46.gif","48.gif","50.gif","52.gif","54.gif","55.gif","57.gif","58.gif","59.gif","60.gif","61.gif","63.gif","64.gif","66.gif","67.gif","68.gif","69.gif","70.gif","72.gif","73.gif","75.gif","76.gif","77.gif","78.gif","80.gif","81.gif","82.gif","83.gif","86.gif","87.gif","88.gif","92.gif","93.gif","94.gif","95.gif","96.gif","97.gif","98.gif","99.gif","100.gif","101.gif","102.gif","103.gif","104.gif","105.gif","106.gif","108.gif","109.gif","110.gif","111.gif","112.gif","113.gif","115.gif","116.gif","117.gif","118.gif","119.gif","120.gif","122.gif","123.gif","124.gif","127.gif","129.gif","130.gif","131.gif","134.gif","135.gif","136.gif","138.gif","139.gif","141.gif","144.gif","146.gif","148.gif","149.gif","153.gif","154.gif","155.gif","157.gif","158.gif","159.gif","160.gif","161.gif","162.gif","164.gif","166.gif","167.gif","168.gif","169.gif","170.gif","171.gif","172.gif","173.gif","174.gif","175.gif","176.gif","177.gif","178.gif","181.gif","182.gif","183.gif","185.gif","186.gif","187.gif","188.gif","189.gif","190.gif","191.gif","192.gif","193.gif","195.gif","196.gif","197.gif","200.gif","201.gif","202.gif","203.gif","204.gif","205.gif","206.gif","207.gif","208.gif","209.gif","210.gif","211.gif","212.gif","213.gif","214.gif","215.gif","216.gif","217.gif","219.gif","220.gif","221.gif","222.gif","224.gif","225.gif","226.gif","227.gif","228.gif","230.gif","232.gif","233.gif","234.gif","235.gif","238.gif","240.gif","241.gif","243.gif","244.gif","245.gif","246.gif","247.gif","249.gif","250.gif","251.gif","253.gif"];const ge={main:{Miscellaneous:{"JSON Index":[!0,"Replace the original board index with one supporting searching, sorting, infinite scrolling, and a catalog mode."],[`Use ${z.name} Catalog`]:[!0,`Link to ${z.name}'s catalog instead of the native 4chan one.`,1],"Index Refresh Notifications":[!1,"Show a notice at the top of the page when the index is refreshed.",1],"Follow Cursor":[!0,"Image Hover and Quote Preview move with the mouse cursor."],"Open Threads in New Tab":[!1,`Make links to threads in the index / ${z.name} catalog open in a new tab.`],"External Catalog":[!1,"Link to external catalog instead of the internal one."],"Catalog Links":[!1,"Add toggle link in header menu to turn Navigation links into links to each board's catalog."],"Announcement Hiding":[!0,"Add button to hide 4chan announcements."],"Desktop Notifications":[!0,`Enables desktop notifications across various ${z.name} features.`],"404 Redirect":[!0,"Redirect dead threads and images to the archives."],"Archive Report":[!0,"Enable reporting posts to supported archives."],"Exempt Archives from Encryption":[!1,"Permit loading content from, and warningless redirects to, HTTP-only archives from HTTPS pages."],Keybinds:[!0,"Bind actions to keyboard shortcuts."],"Time Formatting":[!0,'Localize and format timestamps. Has more options on the "Advanced" tab.'],"Comment Expansion":[!0,"Expand comments that are too long to display on the index. Not applicable with JSON Index."],"File Info Formatting":[!0,"Reformat the file information."],"Thread Expansion":[!0,"Add buttons to expand threads."],"Index Navigation":[!1,"Add buttons to navigate between threads."],"Reply Navigation":[!1,"Add buttons to navigate to top / bottom of thread."],"Unique ID and Capcode Navigation":[!1,"Add buttons to navigate to posts having the same unique ID or capcode."],"Custom Board Titles":[!0,"Allow editing of the board title and subtitle by ctrl/\u2318+clicking them."],"Persistent Custom Board Titles":[!1,"Force custom board titles to be persistent, even if the board titles are updated.",1],"Show Updated Notifications":[!0,`Show notifications when ${z.name} is successfully updated.`],"Color User IDs":[!0,"Assign unique colors to user IDs on boards that use them"],"Count Posts by ID":[!0,"Display number of posts in the thread when hovering over an ID."],"Remove Spoilers":[!1,"Remove all spoilers in text."],"Reveal Spoilers":[!1,"Indicate spoilers if Remove Spoilers is enabled, or make the text appear hovered if Remove Spoiler is disabled."],"Normalize URL":[!0,"Rewrite the URL of the current page, removing slugs and excess slashes, and changing /res/ to /thread/."],"Disable Autoplaying Sounds":[!1,"Prevent sounds on the page from autoplaying."],"Disable Native Extension":[!0,`${z.name} is NOT designed to work with the native extension.`],"Enable Native Flash Embedding":[!0,"Activate the native extension's Flash embedding if the native extension is disabled."],"Export History":[!0,"Export last read, your posts, etc. when exporting the setting"],"Ask to Export History":[!0,"Ask if history should be exported when settings are exported."],"Scroll Markers":[!0,'Mark your posts and replies to them on the scroll bar. Relies on the "Highlight Posts Quoting You" and "Highlight Own Posts" settings']},Linkification:{Linkify:[!0,"Convert text into links where applicable."],"Link Title":[!0,"Replace the link of a supported site with its actual title.",1],"Link Title in the catalog":[!1,"Replace the link of a supported site with its actual title in the catalog too. Speed up performance for boards that have many embeds (e.g /vt/) if turned off",2],"Cover Preview":[!0,"Show preview of supported links on hover.",1],Embedding:[!0,"Embed supported services. Note: Some services don't work on HTTPS.",1],"Auto-embed":[!1,"Auto-embed Linkify Embeds.",2],"Floating Embeds":[!1,"Embed content in a frame that remains in place when the page is scrolled.",2]},Filtering:{Anonymize:[!1,"Make everyone Anonymous."],Filter:[!0,"Self-moderation placebo."],"Filtered Backlinks":[!1,"When enabled, shows backlinks to filtered posts with a line-through decoration. Otherwise, hides the backlinks.",1],"Filter in Native Catalog":[!0,"Apply 4chan X filters in native catalog.",1],"MD5 Quick Filter Notifications":[!0,"Show notification when quick filtering MD5s using the button or keybind.",1],"MD5 Quick Filter in the Catalog":[!0,"Quick filter by MD5 when clicking a thumbnail in the catalog and holding Shift. Disabling falls back on just hiding the thread.",1],"MD5 Quick Filter in Threads":[!0,"Quick filter by MD5 when clicking a thumbnail in a thread while holding shift.",1],"Recursive Hiding":[!0,"Hide replies of hidden posts, recursively."],"Thread Hiding Buttons":[!0,"Add buttons to hide entire threads."],"Reply Hiding Buttons":[!0,"Add buttons to hide single replies."],Stubs:[!0,"Show stubs of hidden threads / replies."],"Filter Reason":[!0,"Show the reason the post was hidden in the stub. If disabled, you can hover over the stub to see the reason."]},"Images and Videos":{"Image Expansion":[!0,"Expand images / videos."],"Image Hover":[!0,"Show full image / video on mouseover."],"Image Hover in Catalog":[!0,`Show full image / video on mouseover in ${z.name} catalog.`],Gallery:[!0,"Adds a simple and cute image gallery. Has more options in the gallery menu."],"Fullscreen Gallery":[!1,"Open gallery in fullscreen mode.",1],"PDF in Gallery":[!1,"Show PDF files in gallery.",1],Sauce:[!0,"Add sauce links to images."],"WEBM Metadata":[!0,"Add link to fetch title metadata from webm videos."],"Reveal Spoiler Thumbnails":[!1,"Replace spoiler thumbnails with the original image."],"Replace GIF":[!1,"Replace gif thumbnails with the actual image."],"Replace JPG":[!1,"Replace jpg thumbnails with the actual image."],"Replace PNG":[!1,"Replace png thumbnails with the actual image."],"Replace WEBM":[!1,"Replace webm, mp4, and ogv thumbnails with the actual video. Probably will degrade browser performance ;)"],"Image Prefetching":[!0,"Add a shortcut icon to the header to turn on image preloading."],"Fappe Tyme":[!0,"Hide posts without images when header menu item is checked. *hint* *hint*"],"Werk Tyme":[!0,"Hide all post images when header menu item is checked."],Autoplay:[!0,"Videos begin playing immediately when opened."],"Restart when Opened":[!1,"Restart GIFs and WebMs when you hover over or expand them."],"Show Controls":[!0,"Show controls on videos expanded inline."],"Click Passthrough":[!1,"Clicks on videos trigger your browser's default behavior. Videos can be contracted with button / dragging to the left.",1],"Allow Sound":[!0,"Open videos with the sound unmuted."],"Mouse Wheel Volume":[!0,"Adjust volume of videos with the mouse wheel over the thumbnail/filename/gallery."],"Loop in New Tab":[!0,"Loop videos opened in their own tabs."],"Volume in New Tab":[!0,`Apply ${z.name} mute and volume settings to videos opened in their own tabs.`],"Enable sound posts":[!0,"Enable loading audio from [sound=] file names. This audio is fetched from third parties."]},Menu:{Menu:[!0,"Add a drop-down menu to posts."],"Report Link":[!0,"Add a report link to the menu.",1],"Copy Text Link":[!0,"Add a link to copy the post's text.",1],"Thread Hiding Link":[!0,"Add a link to hide entire threads.",1],"Reply Hiding Link":[!0,"Add a link to hide single replies.",1],"Delete Link":[!0,"Add post and image deletion links to the menu.",1],"Archive Link":[!0,"Add an archive link to the menu.",1],"Edit Link":[!0,"Add a link to edit the image in Tegaki, /i/'s painting program. Requires Quick Reply.",1],"Download Link":[!1,"Add a download with original filename link to the menu.",1]},Monitoring:{"Thread Updater":[!0,'Fetch and insert new replies. Has more options in the header menu and the "Advanced" tab.'],"Unread Count":[!0,"Show the unread posts count in the tab title."],"Quoted Title":[!1,"Change the page title to reflect you've been quoted.",1],"Hide Unread Count at (0)":[!1,"Hide the unread posts count in the tab title when it reaches 0.",1],"Unread Favicon":[!0,"Show a different favicon when there are unread posts."],"Unread Line":[!0,"Show a line to distinguish read posts from unread ones."],"Remember Last Read Post":[!0,"Remember how far you've read after you close the thread."],"Scroll to Last Read Post":[!0,"Scroll back to the last read post when reopening a thread.",1],"Unread Line in Index":[!1,"Show a line between read and unread posts in threads in the index.",1],"Remove Thread Excerpt":[!1,"Replace the excerpt of the thread in the tab title with the board title."],"Thread Stats":[!0,"Display reply and image count."],"IP Count in Stats":[!0,"Display the unique IP count in the thread stats.",1],"Page Count in Stats":[!0,"Display the page count in the thread stats.",1],"Purge Position":[!1,"Update stats more often and add purge position when a thread is close to getting purged, for anons who manage general threads.",2],"Updater and Stats in Header":[!0,"Places the thread updater and thread stats in the header instead of floating them."],"Thread Watcher":[!0,"Bookmark threads. Has more options in the thread watcher menu."],"Fixed Thread Watcher":[!0,"Makes the thread watcher scroll with the page.",1],"Persistent Thread Watcher":[!1,"The thread watcher will be visible when the page is loaded.",1],"Mark New IPs":[!1,"Label each post from a new IP with the thread's current IP count."],"Reply Pruning":[!0,"Add option in header menu to hide old replies in long threads. Activated by default in stickies."],"Prune All Threads":[!1,"Activate Reply Pruning by default in all threads.",1]},"Posting and Captchas":{"Quick Reply":[!0,"All-in-one form to reply, create threads, automate dumping and more."],"Persistent QR":[!1,"The Quick reply won't disappear after posting.",1],"Auto Hide QR":[!0,"Automatically hide the quick reply when posting.",2],"Open Post in New Tab":[!0,"Open new threads in a new tab, and open replies in a new tab if you're not already in the thread.",1],"Remember QR Size":[!1,"Remember the size of the Quick reply.",1],"Remember Spoiler":[!1,"Remember the spoiler state, instead of resetting after posting.",1],"Randomize Filename":[!1,"Set the filename to a random timestamp within the past year. Disabled on /f/.",1],"Show New Thread Option in Threads":[!0,"Show the option to post a new / different thread from inside a thread.",1],"Show Upload Progress":[!0,"Track progress of file uploads as percentage in submit button.",1],Cooldown:[!0,"Indicate the remaining time before posting again.",1],"Posting Success Notifications":[!0,"Show notifications on successful post creation or file uploading.",1],"Auto-load captcha":[!1,"Automatically load the captcha in the QR even if your post is empty.",1],"Post on Captcha Completion":[!1,"Submit the post immediately when the captcha is completed.",1],"Avoid OffscreenCanvas":[!1,'Do not use OffscreenCanvas when converting images, workaround for <a href="https://github.com/TuxedoTako/4chan-xt/issues/132">this LibreWolf bug</a>',1],"Force Noscript Captcha":[!1,"Use the non-Javascript fallback captcha even if Javascript is enabled."],"Pass Link":[!1,"Add a 4chan Pass login link to the bottom of the page."]},"Quote Links":{"Quote Backlinks":[!0,"Add quote backlinks."],"OP Backlinks":[!0,"Add backlinks to the OP.",1],"Bottom Backlinks":[!1,"Place backlinks at the bottom of posts.",1],"Quote Inlining":[!0,"Inline quoted post on click."],"Inline Cross-thread Quotes Only":[!1,"Don't inline quote links when the posts are visible in the thread.",1],"Quote Hash Navigation":[!1,"Include an extra link after quotes for autoscrolling to quoted posts.",1],"Forward Hiding":[!0,"Hide original posts of inlined backlinks.",1],"Quote Previewing":[!0,"Show quoted post on hover."],"Quote Highlighting":[!0,"Highlight the previewed post.",1],"Resurrect Quotes":[!0,"Link dead quotes to the archives, and support inlining/previewing of archive links like quote links."],"Remember Your Posts":[!0,"Remember your posting history."],"Mark Quotes of You":[!0,"Add '(You)' to quotes linking to your posts.",1],"Highlight Posts Quoting You":[!0,"Highlights any posts that contain a quote to your post.",1],"Highlight Own Posts":[!0,"Highlights own posts.",1],"Mark OP Quotes":[!0,"Add '(OP)' to OP quotes."],"Mark Cross-thread Quotes":[!0,"Add '(Cross-thread)' to cross-threads quotes."],"Quote Threading":[!0,"Add option in header menu to thread conversations."]}},imageExpansion:{"Fit width":[!0,""],"Fit height":[!1,""],"Scroll into view":[!0,"Scroll down when expanding images to bring the full image into view."],"Expand spoilers":[!0,"Expand all images along with spoilers."],"Expand videos":[!0,"Expand all images also expands videos."],"Expand from here":[!1,"Expand all images only from current position to thread end."],"Expand thread only":[!1,"In index, expand all images only within the current thread."],"Advance on contract":[!1,"Advance to next post when contracting an expanded image."]},gallery:{"Hide Thumbnails":[!1],"Fit Width":[!0],"Fit Height":[!0],"Stretch to Fit":[!1],"Scroll to Post":[!0],"Slide Delay":[6]},"Default Volume":1,threadWatcher:{"Current Board":[!1,"Only show watched threads from the current board."],"Auto Update Thread Watcher":[!0,"Periodically check status of watched threads."],"Auto Watch":[!0,"Automatically watch threads you start."],"Auto Watch Reply":[!0,"Automatically watch threads you reply to."],"Auto Prune":[!1,"Automatically remove dead threads."],"Show Page":[!0,"Show what page watched threads are on."],"Show Unread Count":[!0,"Show number of unread posts in watched threads."],"Show Site Prefix":[!0,"When multiple sites are shown in the thread watcher, add a prefix to board names to distinguish them."],"Require OP Quote Link":[!1,"For purposes of thread watcher highlighting, only consider posts with a quote link to the OP as replies to the OP."]},filter:{general:"",postID:`# Highlight dubs on [s4s]:
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
[external-text:"FAQ","${z.faq}"]`,QR:{"QR.personas":'#options:"sage";boards:jp;always',sjisPreview:!1},jsWhitelist:"",captchaLanguage:"",time:"%m/%d/%y(%a)%H:%M:%S",timeLocale:"",RelativeTime:"Hover",backlink:">>%id",pastedname:"file",fileInfo:"%l %d (%p%s, %r%g)",favicon:"ferongr",usercss:Kt,hotkeys:{"Toggle board list":["Ctrl+b","Toggle the full board list."],"Toggle header":["Shift+h","Toggle the auto-hide option of the header."],"Open empty QR":["q","Open QR without post number inserted."],"Open QR":["Shift+q","Open QR with post number inserted."],"Open settings":["Alt+o","Open Settings."],Close:["Esc","Close dialogs or notifications."],"Spoiler tags":["Ctrl+s","Insert spoiler tags."],"Code tags":["Alt+c","Insert code tags."],"Eqn tags":["Alt+e","Insert eqn tags."],"Math tags":["Alt+m","Insert math tags."],"SJIS tags":["Alt+a","Insert SJIS tags."],"Toggle sage":["Alt+s","Toggle sage in options field."],"Toggle Cooldown":["Alt+Comma","Toggle custom cooldown timer."],"Post from URL":["Alt+l","Post from URL."],"Add new post":["Alt+n","Add new post to the QR dump list."],"Submit QR":["Ctrl+Enter","Submit post."],Watch:["w","Watch thread."],Update:["r","Update the thread / refresh the index."],"Update thread watcher":["Shift+r","Manually refresh thread watcher."],"Toggle thread watcher":["t","Toggle visibility of thread watcher."],"Toggle threading":["Shift+t","Toggle threading."],"Mark thread read":["Ctrl+0",'Mark thread read from index (requires "Unread Line in Index").'],"Expand image":["Shift+e","Expand selected image."],"Expand images":["e","Expand all images."],"Open Gallery":["g","Opens the gallery."],"Next Gallery Image":["Right","Go to the next image in gallery mode."],"Previous Gallery Image":["Left","Go to the previous image in gallery mode."],"Advance Gallery":["Enter","Go to next image or, if Autoplay is off, play video."],Pause:["p","Pause/play videos in the gallery."],Slideshow:["Ctrl+Right","Toggle the gallery slideshow mode."],"Rotate image clockwise":["Shift+Right","Rotate image clockwise in gallery."],"Rotate image anticlockwise":["Shift+Left","Rotate image anticlockwise in gallery."],"Download Gallery Image":["Shift+j","Download current image in gallery."],fappeTyme:["f","Toggle Fappe Tyme."],werkTyme:["Shift+w","Toggle Werk Tyme."],"Front page":["1","Jump to front page."],"Open front page":["Shift+1","Open front page in a new tab."],"Next page":["Ctrl+Right","Jump to the next page."],"Previous page":["Ctrl+Left","Jump to the previous page."],"Paged mode":["Alt+1","Open the index in paged mode."],"Infinite scrolling mode":["Alt+2","Open the index in infinite scrolling mode."],"All pages mode":["Alt+3","Open the index in all threads mode."],"Open catalog":["Shift+c","Open the catalog of the current board."],"Search form":["Ctrl+Alt+s","Focus the search field on the board index."],"Cycle sort type":["Alt+x","Cycle through index sort types."],"Next thread":["Ctrl+Down","See next thread."],"Previous thread":["Ctrl+Up","See previous thread."],"Expand thread":["Ctrl+e","Expand thread."],"Open thread":["o","Open thread in current tab."],"Open thread tab":["Shift+o","Open thread in new tab."],"Next reply":["j","Select next reply."],"Previous reply":["k","Select previous reply."],"Deselect reply":["Shift+d","Deselect reply."],Hide:["x","Hide thread."],"Quick Filter MD5":["5","Add the MD5 of the selected image to the filter list."],"Previous Post Quoting You":["Alt+Up","Scroll to the previous post that quotes you."],"Next Post Quoting You":["Alt+Down","Scroll to the next post that quotes you."]},updater:{checkbox:{Beep:[!1,"Beep on new post to completely read thread."],"Beep Quoting You":[!1,"Beep on new post quoting you."],"Auto Scroll":[!1,"Scroll updated posts into view. Only enabled at bottom of page."],"Bottom Scroll":[!1,"Always scroll to the bottom, not the first new post. Useful for event threads."],"Scroll BG":[!1,"Auto-scroll background tabs."],"Auto Update":[!0,"Automatically fetch new posts."],"Optional Increase":[!1,"Increase the intervals between updates on threads without new posts."]},Interval:5},customCooldown:0,customCooldownEnabled:!0,"Thread Quotes":!1,"Max Replies":1e3,"Autohiding Scrollbar":!1,position:{"embedding.position":"top: 50px; right: 0px;","thread-stats.position":"bottom: 0px; right: 0px;","updater.position":"bottom: 0px; left: 0px;","thread-watcher.position":"top: 50px; left: 0px;","qr.position":"top: 50px; right: 0px;"},fourchanImageHost:"i.4cdn.org",hiddenPSAList:[{}],knownBanners:Xt.join(","),passMessageClosed:!1,PSAseen:[[]],XEmbedder:"fxt",fxtLang:"",fxtUrl:"https://api.fxtwitter.com",fxtMaxReplies:5,beepSource:"",beepVolume:1},Xe=(e,t,i=!0)=>{let n=0,s=null,r=null,a=null;const h=function(){return n=Date.now(),t.apply(r,a)};return function(){if(a=arguments,r=this,i&&n<Date.now()-e){h();return}s!==null&&clearTimeout(s),s=setTimeout(h,e)}},S=()=>Object.create(null);S.clone=function(e){if(typeof e!="object"||e===null)return e;if(e instanceof Array){const n=[];for(let s=0,r=e.length;s<r;s++)n.push(S.clone(e[s]));return n}else{const n=Object.create(null);for(var t in e){var i=e[t];n[t]=S.clone(i)}return n}},S.json=e=>S.clone(JSON.parse(e));const ie=1e3,Le=ie*60,Oe=Le*60,Ge=Oe*24,ft=window.GM_xmlhttpRequest?"userscript":"crx",Ot={stubCloneTopNav:()=>{window.cloneTopNav=function(){}},disableNativeExtension:()=>{try{const e=JSON.parse(localStorage.getItem("4chan-settings"))||{};if(e.disableAll)return;e.disableAll=!0,localStorage.setItem("4chan-settings",JSON.stringify(e))}catch{Object.defineProperty(window,"Config",{value:{disableAll:!0}})}},disableNativeExtensionNoStorage:()=>{Object.defineProperty(window,"Config",{value:{disableAll:!0}})},prettyPrint:({id:e})=>{window.prettyPrint?.(function(){},document.getElementById(e).parentNode)},exposeVersion:({buildDate:e,version:t})=>{const i=+e;Object.defineProperty(window,"fourchanXT",{value:Object.freeze({version:t,get buildDate(){return new Date(i)}}),writable:!1})},initMain:()=>{document.documentElement.classList.add("js-enabled"),window.FCX={}},initFlash:()=>{JSON.parse(localStorage["4chan-settings"]||"{}").disableAll&&window.SWFEmbed.init()},initFlashNoStorage:()=>{window.SWFEmbed.init()},setThreadId:()=>{window.Main.tid=location.pathname.split(/\/+/)[3]},fourChanPrettyPrintListener:()=>{window.addEventListener("prettyprint",e=>window.dispatchEvent(new CustomEvent("prettyprint:cb",{detail:{ID:e.detail.ID,i:e.detail.i,html:window.prettyPrintOne(e.detail.html)}})),!1)},fourChanMathjaxListener:()=>{window.addEventListener("mathjax",function(e){window.MathJax?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,e.target]):(document.querySelector('script[src^="//cdn.mathjax.org/"]')||(window.loadMathJax(),window.loadMathJax=function(){}),e.target.classList.contains("postMessage")||document.querySelector('script[src^="//cdn.mathjax.org/"]').addEventListener("load",()=>window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,e.target]),!1))},!1)},disable4chanIdHl:()=>{window.clickable_ids=!1;for(var e of document.querySelectorAll(".posteruid, .capcode"))e.removeEventListener("click",window.idClick,!1)},initTinyBoard:({boardID:e,threadID:t})=>{t=+t;const i=document.querySelector('form[name="post"]');window.$(document).ajaxComplete(function(r,a,h){let u;if(h.url!==i.action||!(u=+a.responseJSON?.id))return;const f={boardID:e,threadID:t,postID:u};try{const{redirect:g,noko:b}=a.responseJSON;g&&n!=null&&!n&&!b&&(f.redirect=g)}catch{}r=new CustomEvent("QRPostSuccessful",{bubbles:!0,detail:f}),document.dispatchEvent(r)});var n=window.tb_settings?.ajax?.always_noko_replies;let s;((s=window.tb_settings||(window.tb_settings={})).ajax||(s.ajax={})).always_noko_replies=!0},setupCaptcha:({recaptchaKey:e})=>{const t=function(){const{classList:i}=document.documentElement,n=document.querySelector("#qr .captcha-container");n.dataset.widgetID=window.grecaptcha.render(n,{sitekey:e,theme:i.contains("tomorrow")||i.contains("spooky")||i.contains("dark-captcha")?"dark":"light",callback(s){window.dispatchEvent(new CustomEvent("captcha:success",{detail:s}))}})};if(window.grecaptcha)t();else{const i=window.onRecaptchaLoaded;if(window.onRecaptchaLoaded=function(){t(),i()},!document.head.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]')){const n=document.createElement("script");n.src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit",document.head.appendChild(n)}}},resetCaptcha:()=>{window.grecaptcha.reset(document.querySelector("#qr .captcha-container").dataset.widgetID)},setupTCaptcha:({boardID:e,threadID:t,autoLoad:i})=>{const{TCaptcha:n}=window;n.init(document.querySelector("#qr .captcha-container"),e,+t),n.setErrorCb(s=>window.dispatchEvent(new CustomEvent("CreateNotification",{detail:{type:"warning",content:""+s}}))),i==="1"&&n.load(e,t)},destroyTCaptcha:()=>{window.TCaptcha.destroy()},TCaptchaClearChallenge:()=>{window.TCaptcha.clearChallenge()},setupQR:()=>{window.FCX.oekakiCB=()=>window.Tegaki.flatten().toBlob(function(e){const t=`oekaki-${Date.now()}`;window.FCX.oekakiLatest=t,document.dispatchEvent(new CustomEvent("QRSetFile",{bubbles:!0,detail:{file:e,name:window.FCX.oekakiName,source:t}}))}),window.Tegaki&&(document.querySelector("#qr .oekaki").hidden=!1)},qrTegakiDraw:()=>{const{Tegaki:e,FCX:t}=window;e.bg&&e.destroy(),t.oekakiName="tegaki.png",e.open({onDone:t.oekakiCB,onCancel(){e.bgColor="#ffffff"},width:+document.querySelector("#qr [name=oekaki-width]").value,height:+document.querySelector("#qr [name=oekaki-height]").value,bgColor:document.querySelector("#qr [name=oekaki-bg]").checked?document.querySelector("#qr [name=oekaki-bgcolor]").value:"transparent"})},qrTegakiLoad:()=>{const{Tegaki:e,FCX:t}=window,i=document.getElementById("qr-filename").value.replace(/\.\w+$/,"")+".png",{source:n}=document.getElementById("file-n-submit").dataset,s=a=>document.dispatchEvent(new CustomEvent("CreateNotification",{bubbles:!0,detail:{type:"warning",content:a,lifetime:20}}));var r=function(a){a&&this.removeEventListener("QRMetadata",r,!1);const h=document.getElementById("selected");if(!h?.dataset.type)return s("No file to edit.");if(!/^(image|video)\//.test(h.dataset.type))return s("Not an image.");if(!h.dataset.height)return s("Metadata not available.");if(h.dataset.height==="loading"){h.addEventListener("QRMetadata",r,!1);return}e.bg&&e.destroy(),t.oekakiName=i,e.open({onDone:t.oekakiCB,onCancel(){e.bgColor="#ffffff"},width:+h.dataset.width,height:+h.dataset.height,bgColor:"transparent"});const u=document.createElement("canvas");u.width=u.naturalWidth=+h.dataset.width,u.height=u.naturalHeight=+h.dataset.height,u.hidden=!0,document.body.appendChild(u),u.addEventListener("QRImageDrawn",function(){this.remove(),e.onOpenImageLoaded.call(this)},!1),u.dispatchEvent(new CustomEvent("QRDrawFile",{bubbles:!0}))};e.bg&&e.onDoneCb===t.oekakiCB&&n===t.oekakiLatest?(t.oekakiName=i,e.resume()):r()},testNativeExtension:(e={})=>(window.Parser?.postMenuIcon&&(e.enabled="true"),e)},o=(e,t=document.body)=>t.querySelector(e);o.id=e=>m.getElementById(e),o.ready=function(e){if(m.readyState!=="loading"){o.queueTask(e);return}var t=function(){o.off(m,"DOMContentLoaded",t),e()};o.on(m,"DOMContentLoaded",t)},o.formData=function(e){if(e instanceof HTMLFormElement)return new FormData(e);const t=new FormData;for(var i in e){var n=e[i];n&&(typeof n=="object"&&"newName"in n?t.append(i,n,n.newName):t.append(i,n))}return t},o.extend=function(e,t){for(var i in t){var n=t[i];e[i]=n}},o.hasOwn=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.getOwn=function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]},o.ajax=function(){let e=XMLHttpRequest;if(window.wrappedJSObject&&!XMLHttpRequest.wrappedJSObject)try{e=XPCNativeWrapper(window.wrappedJSObject.XMLHttpRequest)}catch{}return function(t,i={}){i.responseType==null&&(i.responseType="json"),i.type||(i.type=i.form&&"post"||"get"),t=t.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4channel|4cdn)\.org)\/adv\//,"$1//adv/");const{onloadend:n,timeout:s,responseType:r,withCredentials:a,type:h,onprogress:u,form:f,headers:g}=i,b=new e;try{b.open(h,t,!0);const R=g||{};for(var I in R){var T=R[I];b.setRequestHeader(I,T)}o.extend(b,{onloadend:n,timeout:s,responseType:r,withCredentials:a}),o.extend(b.upload,{onprogress:u}),o.on(b,"error",function(){b.status||ut.warn(`${z.name} failed to load: ${t}`)}),b.send(f)}catch(R){if(R.result!==2153644038)throw R;b.onloadend=n,o.queueTask(o.event,"error",null,b),o.queueTask(o.event,"loadend",null,b)}return b}}(),o.lastModified=S(),o.whenModified=function(e,t,i,n={}){let s;const{timeout:r,ajax:a}=n,h=S();return(s=o.lastModified[t]?.[e])!=null&&(h["If-Modified-Since"]=s),(a||o.ajax)(e,{onloadend(){return(o.lastModified[t]||(o.lastModified[t]=S()))[e]=this.getResponseHeader("Last-Modified"),i.call(this)},timeout:r,headers:h})},function(){const e=S();return o.cache=function(t,i,n={}){let s;const{ajax:r}=n;if(s=e[t])return s.callbacks?s.callbacks.push(i):o.queueTask(()=>i.call(s,{isCached:!0})),s;const a=function(){this.status||delete e[t];for(i of this.callbacks)(h=>o.queueTask(()=>h.call(this,{isCached:!1})))(i);return delete this.callbacks};return s=(r||o.ajax)(t,{onloadend:a}),s.callbacks=[i],e[t]=s},o.cleanCache=function(t){for(var i in e)t(i)&&delete e[i]}}(),o.cb={checked(){if(o.hasOwn(l,this.name))return o.set(this.name,this.checked),l[this.name]=this.checked},value(){if(o.hasOwn(l,this.name))return o.set(this.name,this.value.trim()),l[this.name]=this.value}},o.asap=function(e,t){return e()?t():setTimeout(o.asap,25,e,t)},o.onExists=function(e,t,i){let n;if(n=o(t,e)){i(n);return}var s=new MutationObserver(function(){(n=o(t,e))&&(s.disconnect(),i(n))});s.observe(e,{childList:!0,subtree:!0})},o.addStyle=function(e,t,i="head"){const n=o.el("style",{textContent:e});return t!=null&&(n.id=t),o.onExists(w,i,()=>o.add(m.head,n)),n},o.addCSP=function(e){const t=o.el("meta",{httpEquiv:"Content-Security-Policy",content:e});if(m.head)return o.add(m.head,t),o.rm(t);{const i=o.add(w||m,o.el("head"));return o.add(i,t),o.rm(i)}},o.x=function(e,t){return t||(t=m.body),m.evaluate(e,t,null,8,null).singleNodeValue},o.X=function(e,t){return t||(t=m.body),m.evaluate(e,t,null,7,null)},o.addClass=function(e,...t){e.classList.add(...t)},o.rmClass=function(e,...t){e.classList.remove(...t)},o.toggleClass=(e,t)=>e.classList.toggle(t),o.hasClass=(e,t)=>e.classList.contains(t),o.rm=e=>e?.remove(),o.rmAll=e=>e.textContent=null,o.tn=e=>m.createTextNode(e),o.frag=()=>m.createDocumentFragment(),o.nodes=function(e){if(!(e instanceof Array))return e;const t=o.frag();for(var i of e)t.appendChild(i);return t},o.add=(e,t)=>e.appendChild(o.nodes(t)),o.prepend=(e,t)=>e.insertBefore(o.nodes(t),e.firstChild),o.after=(e,t)=>e.parentNode.insertBefore(o.nodes(t),e.nextSibling),o.before=(e,t)=>e.parentNode.insertBefore(o.nodes(t),e),o.replace=(e,t)=>e.parentNode.replaceChild(o.nodes(t),e),o.el=function(e,t,i){const n=m.createElement(e);return t&&o.extend(n,t),i&&o.extend(n,i),n},o.on=function(e,t,i){for(var n of t.split(" "))e.addEventListener(n,i,!1)},o.off=function(e,t,i){for(var n of t.split(" "))e.removeEventListener(n,i,!1)},o.one=function(e,t,i){var n=function(s){return o.off(e,t,n),i.call(this,s)};return o.on(e,t,n)},o.event=function(e,t,i=m){return globalThis.chrome?.extension||t!=null&&typeof cloneInto=="function"&&(t=cloneInto(t,m.defaultView)),i.dispatchEvent(new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t}))},function(){if(!(!/PaleMoon\//.test(navigator.userAgent)||+GM_info?.version?.split(".")[0]<2||typeof cloneInto<"u"))try{return new CustomEvent("x",{detail:{}})}catch{const i={Object:unsafeWindow.Object,Array:unsafeWindow.Array};var e=function(n){let s;if(n!=null&&typeof n=="object"&&(s=i[n.constructor.name])){const h=new s;for(var r in n){var a=n[r];h[r]=e(a)}return h}else return n};return o.event=(n,s,r=m)=>r.dispatchEvent(new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:e(s)}))}}(),o.modifiedClick=e=>e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||e.button!==0,globalThis.chrome?.extension?o.open=e=>window.open(e,"_blank"):o.open=GM?.openInTab!=null?GM.openInTab:typeof GM_openInTab<"u"&&GM_openInTab!==null?GM_openInTab:e=>window.open(e,"_blank"),o.debounce=function(e,t){let i=0,n=null,s=null,r=null;const a=function(){return i=Date.now(),t.apply(s,r)};return function(){return r=arguments,s=this,i<Date.now()-e?a():(clearTimeout(n),n=setTimeout(a,e))}},o.queueTask=function(){const e=[],t=function(){const[i,...n]=e.shift();i(...n)};return function(){e.push(arguments),Promise.resolve().then(t)}}(),o.global=async function(e,t){if(ft==="crx"&&chrome.runtime.getManifest().manifest_version===3)return o.eventPageRequest({type:"runInPageContext",fn:e,data:t});if(w){const i=o.el("script",{textContent:`(${Ot[e]})(document.currentScript.dataset);`});return t&&o.extend(i.dataset,t),o.add(m.head||w,i),o.rm(i),i.dataset}else{try{Ot[e](t)}catch(i){console.error(i)}return t}},o.bytesToString=function(e){let t=0;for(;e>=1024;)e/=1024,t++;return e=t>1?Math.round(e*100)/100:Math.round(e),`${e} ${["B","KB","MB","GB"][t]}`},o.minmax=(e,t,i)=>e<t?t:e>i?i:e,o.hasAudio=e=>e.mozHasAudio||!!e.webkitAudioDecodedByteCount||e.nextElementSibling?.tagName==="AUDIO",o.luma=e=>e[0]*.299+e[1]*.587+e[2]*.114,o.unescape=function(e){return e==null?e:e.replace(/<[^>]*>/g,"").replace(/&(amp|#039|quot|lt|gt|#44);/g,t=>({"&amp;":"&","&#039;":"'","&quot;":'"',"&lt;":"<","&gt;":">","&#44;":","})[t])},o.isImage=e=>/\.(jpe?g|jfif|png|gif|bmp|webp|avif|jxl)$/i.test(e),o.isVideo=e=>/\.(webm|mp4|ogv)$/i.test(e),o.engine=function(){if(/Edge\//.test(navigator.userAgent))return"edge";if(/Chrome\//.test(navigator.userAgent))return"blink";if(/WebKit\//.test(navigator.userAgent))return"webkit";if(/Gecko\/|Goanna/.test(navigator.userAgent))return"gecko"}(),o.hasStorage=function(){try{return localStorage.getItem(c.NAMESPACE+"hasStorage")==="true"?!0:(localStorage.setItem(c.NAMESPACE+"hasStorage","true"),localStorage.getItem(c.NAMESPACE+"hasStorage")==="true")}catch{return!1}}(),o.item=function(e,t){const i=S();return i[e]=t,i},o.oneItemSugar=e=>function(t,i,n){return typeof t=="string"?e(o.item(t,i),n):e(t,i)},o.syncing=S(),o.securityCheck=function(e){if(location.protocol!=="https:")return delete e["Redirect to HTTPS"]},GM?.deleteValue!=null&&window.BroadcastChannel&&(typeof GM_addValueChangeListener>"u"||GM_addValueChangeListener===null)?(o.syncChannel=new BroadcastChannel(c.NAMESPACE+"sync"),o.on(o.syncChannel,"message",e=>(()=>{const t=[];for(var i in e.data){var n,s=e.data[i];(n=o.syncing[i])&&t.push(n(S.json(JSON.stringify(s)),i))}return t})()),o.sync=(e,t)=>o.syncing[e]=t,o.forceSync=function(){},o.delete=function(e,t){let i;e instanceof Array||(e=[e]),Promise.all(e.map(n=>GM.deleteValue(c.NAMESPACE+n))).then(function(){const n=S();for(i of e)n[i]=void 0;o.syncChannel.postMessage(n),t?.()})},o.get=o.oneItemSugar(function(e,t){const i=Object.keys(e);return Promise.all(i.map(n=>GM.getValue(c.NAMESPACE+n))).then(function(n){for(let r=0;r<n.length;r++){var s=n[r];s&&(e[i[r]]=S.json(s))}return t(e)})}),o.set=o.oneItemSugar(function(e,t){return o.securityCheck(e),Promise.all((()=>{const i=[];for(var n in e){var s=e[n];i.push(GM.setValue(c.NAMESPACE+n,JSON.stringify(s)))}return i})()).then(function(){return o.syncChannel.postMessage(e),t?.()})}),o.clear=e=>GM.listValues().then(t=>o.delete(t.map(i=>i.replace(c.NAMESPACE,"")),e)).catch(()=>o.delete(Object.keys(l).concat(["previousversion","QR Size","QR.persona"]),e))):(typeof GM_deleteValue<"u"&&GM_deleteValue!==null?(o.getValue=GM_getValue,o.listValues=()=>GM_listValues()):o.hasStorage?(o.getValue=e=>localStorage.getItem(e),o.listValues=()=>(()=>{const e=[];for(var t in localStorage)t.slice(0,c.NAMESPACE.length)===c.NAMESPACE&&e.push(t);return e})()):(o.getValue=function(){},o.listValues=()=>[]),typeof GM_addValueChangeListener<"u"&&GM_addValueChangeListener!==null?(o.setValue=GM_setValue,o.deleteValue=GM_deleteValue):typeof GM_deleteValue<"u"&&GM_deleteValue!==null?(o.oldValue=S(),o.setValue=function(e,t){if(GM_setValue(e,t),e in o.syncing&&(o.oldValue[e]=t,o.hasStorage))return localStorage.setItem(e,t)},o.deleteValue=function(e){if(GM_deleteValue(e),e in o.syncing&&(delete o.oldValue[e],o.hasStorage))return localStorage.removeItem(e)},o.hasStorage||(o.cantSync=!0)):o.hasStorage?(o.oldValue=S(),o.setValue=function(e,t){return e in o.syncing&&(o.oldValue[e]=t),localStorage.setItem(e,t)},o.deleteValue=function(e){return e in o.syncing&&delete o.oldValue[e],localStorage.removeItem(e)}):(o.setValue=function(){},o.deleteValue=function(){},o.cantSync=o.cantSet=!0),typeof GM_addValueChangeListener<"u"&&GM_addValueChangeListener!==null?(o.sync=(e,t)=>o.syncing[e]=GM_addValueChangeListener(c.NAMESPACE+e,function(i,n,s,r){if(r)return s!==void 0&&(s=S.json(s)),t(s,e)}),o.forceSync=function(){}):typeof GM_deleteValue<"u"&&GM_deleteValue!==null||o.hasStorage?(o.sync=function(e,t){return e=c.NAMESPACE+e,o.syncing[e]=t,o.oldValue[e]=o.getValue(e)},function(){const e=function({key:t,newValue:i}){let n;if(n=o.syncing[t])return i!=null?i===o.oldValue[t]?void 0:(o.oldValue[t]=i,n(S.json(i),t.slice(c.NAMESPACE.length))):o.oldValue[t]==null?void 0:(delete o.oldValue[t],n(void 0,t.slice(c.NAMESPACE.length)))};return o.on(window,"storage",e),o.forceSync=function(t){return t=c.NAMESPACE+t,e({key:t,newValue:o.getValue(t)})}}()):(o.sync=function(){},o.forceSync=function(){}),o.delete=function(e){e instanceof Array||(e=[e]);for(var t of e)o.deleteValue(c.NAMESPACE+t)},o.get=o.oneItemSugar((e,t)=>o.queueTask(o.getSync,e,t)),o.getSync=function(e,t){for(var i in e){var n;if(n=o.getValue(c.NAMESPACE+i))try{e[i]=S.json(n)}catch(s){if(!/^(?:undefined)*$/.test(n))throw s}}return t(e)},o.set=o.oneItemSugar(function(e,t){return o.securityCheck(e),o.queueTask(function(){for(var i in e){var n=e[i];o.setValue(c.NAMESPACE+i,JSON.stringify(n))}return t?.()})}),o.clear=function(e){o.delete(Object.keys(l)),o.delete(["previousversion","QR Size","QR.persona"]);try{o.delete(o.listValues().map(t=>t.replace(c.NAMESPACE,"")))}catch{}return e?.()});var F={url(e,t,...i){let n,s;if((s=c.sites[t.siteID])&&(n=o.getOwn(s.urls,e)))return n(t,...i)},threadExcerpt(e){const{OP:t}=e,i=`/${decodeURIComponent(e.board.ID)}/ - `+(t.info.subject?.trim()||t.commentDisplay().replace(/\n+/g," // ")||t.file?.name||`No.${t}`);return i.length>73?`${i.slice(0,70)}...`:i},threadFromRoot(e){if(e==null)return null;const{board:t}=e.dataset;return c.threads.get(`${t?encodeURIComponent(t):c.BOARD.ID}.${e.id.match(/\d*$/)[0]}`)},threadFromNode(e){return F.threadFromRoot(o.x(`ancestor-or-self::${c.SITE.xpath.thread}`,e))},postFromRoot(e){if(e==null)return null;const t=c.posts.get(e.dataset.fullID),i=e.dataset.clone;return i?t.clones[+i]:t},postFromNode(e){return F.postFromRoot(o.x(`ancestor-or-self::${c.SITE.xpath.postContainer}[1]`,e))},postDataFromLink(e){let t,i,n;return e.dataset.postID?({boardID:t,threadID:n,postID:i}=e.dataset,n||(n=0)):([t,n,i]=e.href.match(c.SITE.regexp.quotelink).slice(1),i||(i=n)),{boardID:t,threadID:+n,postID:+i}},allQuotelinksLinkingTo(e){const t=[],{posts:i}=c,{fullID:n}=e,s=function(h,u){t.push(...h.nodes[u]||[]);for(var f of h.clones)t.push(...f.nodes[u]||[])};if(i.forEach(function(h){if(h.quotes.includes(n))return s(h,"quotelinks")}),l["Quote Backlinks"])for(var r of e.quotes){var a;(a=i.get(r))&&s(a,"backlinks")}return t.filter(function(h){const{boardID:u,postID:f}=F.postDataFromLink(h);return u===e.board.ID&&f===e.ID})}};const we=Symbol("isEscaped"),Zt=new Set(["area","base","br","col","embed","hr","img","input","link","meta","source","track","wbr"]),He=Symbol("hFragment");function y(e,t,...i){let n=e===He?"":`<${e}`;if(t)for(const[r,a]of Object.entries(t))!a&&a!==0||(n+=` ${r}`,a!==!0&&(n+=`="${oe(a.toString())}"`));e!==He&&(n+=">");const s=e!==He&&Zt.has(e);if(s){if(i.length)throw new TypeError(`${e} is a void html element and can't have child elements`)}else for(const r of i)if(!(r==null||r==="")){if(r instanceof Object&&"innerHTML"in r&&r[we]){n+=r.innerHTML;continue}n+=oe(r.toString())}return!s&&e!==He&&(n+=`</${e}>`),{innerHTML:n,[we]:!0}}const Ze="\xA0|\xA0",eo=y("div",{id:"fourchanx-settings",class:"dialog"},y("nav",null,y("div",{class:"sections-list"}),y("p",{class:"imp-exp-result warning"}),y("div",{class:"credits"},y("a",{href:"javascript:;",class:"export"},"Export"),Ze,y("a",{href:"javascript:;",class:"import"},"Import"),Ze,y("a",{href:"javascript:;",class:"reset"},"Reset Settings"),Ze,y("input",{type:"file",hidden:!0,accept:".json,application/json"}),y("a",{href:z.page,target:"_blank"},z.name),Ze,y("a",{href:z.changelog,target:"_blank"},c.VERSION),Ze,y("a",{href:z.issues,target:"_blank"},"Issues"),Ze,y("a",{href:"javascript:;",class:"close",title:"Close"},"\u2715"))),y("div",{class:"section-container"},y("section",null)));var to=`<div class="warning"><code>Filter</code> is disabled.</div>
<p>
  Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">regular expressions</a>, one per line.<br>
  Lines starting with a <code>#</code> will be ignored.<br>
  For example, <code>/weeaboo/i</code> will filter posts containing the string \`<code>weeaboo</code>\`, case-insensitive.<br>
  MD5 and Unique ID filtering use exact string matching, not regular expressions.
</p>
<ul>You can use these settings with each regular expression, separate them with semicolons:
  <li>
    Per boards, separate them with commas. It is global if not specified. Use <code>sfw</code> and <code>nsfw</code> to reference all worksafe or not-worksafe boards.<br>
    For example: <code>boards:a,jp;</code>.<br>
    To specify boards on a particular site, put the beginning of the domain and a slash character before the list.<br>
    Any initial <code>www.</code> should not be included, and all 4chan domains are considered <code>4chan.org</code>.<br>
    For example: <code>boards:4:a,jp,sama:a,z;</code>.<br>
    An asterisk can be used to specify all boards on a site.<br>
    For example: <code>boards:4:*;</code>.<br>
  </li>
  <li>
    Show a custom reason in the stub. If not given, the type and regex will be shown.<br>
    For example: <code>reason:This is bait;</code>
  </li>
  <li>
    Select boards to be excluded from the filter. The syntax is the same as for the <code>boards:</code> option above.<br>
    For example: <code>exclude:vg,v;</code>.
  </li>
  <li>
    Filter OPs only along with their threads (\`only\`) or replies only (\`no\`).<br>
    For example: <code>op:only;</code> or <code>op:no;</code>.
  </li>
  <li>
    Filter only posts with files (\`only\`) or only posts without files (\`no\`).<br>
    For example: <code>file:only;</code> or <code>file:no;</code>.
  </li>
  <li>
    Overrule the \`Show Stubs\` setting if specified: create a stub (\`yes\`) or not (\`no\`).<br>
    For example: <code>stub:yes;</code> or <code>stub:no;</code>.
  </li>
  <li>
    Highlight instead of hiding. You can specify a class name to use with a userstyle.<br>
    For example: <code>highlight;</code> or <code>highlight:wallpaper;</code>.
  </li>
  <li>
    Highlighted OPs will have their threads put on top of the board index by default.<br>
    For example: <code>top:yes;</code> or <code>top:no;</code>.
  </li>
  <li>Show a desktop notification instead of hiding: <code>notify;</code>.</li>
  <li>Hide all posts from this poster: <code>poster;</code>.</li>
  <li>Recursively hide replies: <code>replies;</code>.</li>
  <li>Hide anyway even if highlighting. The highlight class will be applied to the stub: <code>hide;</code>.</li>
  <li>
    Filters in the "General" section apply to multiple fields, by default <code>subject,name,filename,comment</code>.<br>
    The fields can be specified with the <code>type</code> option, separated by commas.<br>
    For example: <code id="filterTypes"></code>.<br>
    Types can also be combined with a <code>+</code> sign; this indicates the filter applies to the given fields joined by newlines.<br>
    For example: <code>type:filename+filesize+dimensions;</code>.<br>
  </li>
</ul>`,oo=`<div class="warning"><code>Sauce</code> is disabled.</div>
<input id="sauce-doc-expand" type="checkbox" hidden>
<div id="sauce-doc">
  <label for="sauce-doc-expand">[expand]</label>
  <div>These parameters will be replaced by their corresponding values in the URL and displayed text:</div>
  <ul>
    <li><code>%IMG</code>: Full image URL for GIF, JPG, and PNG; thumbnail URL for other types.</li>
    <li><code>%URL</code>: Full image URL.</li>
    <li><code>%TURL</code>: Thumbnail URL.</li>
    <li><code>%name</code>: Original file name.</li>
    <li><code>%board</code>: Current board.</li>
    <li><code>%MD5</code>: MD5 hash in base64.</li>
    <li><code>%sMD5</code>: MD5 hash in base64 using <code>-</code> and <code>_</code>.</li>
    <li><code>%hMD5</code>: MD5 hash in hexadecimal.</li>
    <li><code>%$0</code>: Matched regular expression within the filename.</li>
    <li><code>%$1</code>, <code>%$2</code>, <code>%$3</code>, ... : Subexpressions within the matched regular expression.</li>
    <li><code>%%</code>, <code>%semi</code>: Literal <code>%</code> and <code>;</code>.</li>
  </ul>
  <div>Lines starting with a <code>#</code> will be ignored.</div>
  <div>You can specify a display text by appending <code>;text:[text]</code> to the URL.</div>
  <div>You can specify the applicable boards/sites by appending <code>;boards:[board1],[board2]</code>. See the Filter guide for details.</div>
  <div>You can specify the applicable file types by appending <code>;types:[extension1],[extension2]</code>.</div>
  <div>You can specify a regular expression the filename must match by appending <code>;regexp:[regular expression]</code>.</div>
</div>
<textarea hidden name="sauces" class="field" spellcheck="false"></textarea>`,io=`<fieldset>
  <legend>Archives</legend>
  <div class="warning" data-feature="404 Redirect"><code>404 Redirect</code> is disabled.</div>
  <select id="archive-board-select"></select>
  <table id="archive-table">
    <thead>
      <th>Thread redirection</th>
      <th>Thread fetching</th>
      <th>Post fetching</th>
      <th>File redirection</th>
    </thead>
    <tbody></tbody>
  </table>
  <br>
  <div>
    <b>Archive Lists</b>: Each line below should be an archive list in <a href="https://github.com/4chenz/archives.json/blob/gh-pages/CONTRIBUTING.md" target="_blank">this format</a> or a URL to load an archive list from.<br>
    Archive properties can be overriden by another item with the same <code>uid</code> (or if absent, its <code>name</code>).
  </div>
  <textarea hidden name="archiveLists" class="field" spellcheck="false"></textarea>
  <button id="update-archives">Update now</button> Last updated: <time id="lastarchivecheck"></time> <label><input type="checkbox" name="archiveAutoUpdate"> Auto-update</label>
</fieldset>

<fieldset>
  <legend>External Catalog</legend>
  <div class="warning" data-feature="External Catalog"><code>External Catalog</code> is disabled. This will be used only as a fallback.</div>
  <div>
    URLs of external catalog sites, where <code>%board</code> is to be replaced by the board name.<br>
    Each URL should be followed by <code>;boards:</code> and optionally <code>;exclude:</code> and a list of supported/excluded boards in the format explained in the Filter guide.
  </div>
  <textarea hidden name="externalCatalogURLs" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>Override 4chan Image Host</legend>
  <div>Change 4chan image links to this domain. Leave blank for no change.</div>
  <div><input name="fourchanImageHost" class="field" spellcheck="false" list="list-fourchanImageHost"></div>
  <datalist id="list-fourchanImageHost"></datalist>
</fieldset>

<fieldset>
  <legend>Captcha Language</legend>
  <div>Choose from <a href="https://developers.google.com/recaptcha/docs/language" target="_blank">list of language codes</a>. Leave blank to autoselect.</div>
  <div><input name="captchaLanguage" class="field" spellcheck="false"></div>
</fieldset>

<fieldset>
  <legend>Custom Board Navigation</legend>
  <div><textarea hidden name="boardnav" class="field" spellcheck="false"></textarea></div>
  <span class="note">New lines will be converted into spaces.</span><br><br>
  <div class="note">In the following examples for /g/, <code>g</code> can be changed to a different board ID (<code>a</code>, <code>b</code>, etc...), the current board (<code>current</code>), or the Twitter link (<code>@</code>).</div>
  <div>Board link: <code>g</code></div>
  <div>Archive link: <code>g-archive</code></div>
  <div>Internal archive link: <code>g-expired</code></div>
  <div>Title link: <code>g-title</code></div>
  <div>Board link (Replace with title when on that board): <code>g-replace</code></div>
  <div>Full text link: <code>g-full</code></div>
  <div>Custom text link: <code>g-text:&quot;Install Gentoo&quot;</code></div>
  <div>Index-only link: <code>g-index</code></div>
  <div>Catalog-only link: <code>g-catalog</code></div>
  <div>Index mode: <code>g-mode:&quot;infinite scrolling&quot;</code></div>
  <div>Index sort: <code>g-sort:&quot;creation date rev&quot;</code></div>
  <div>External link: <code>external-text:&quot;Google&quot;,&quot;http://www.google.com&quot;</code></div>
  <div>Open in new tab: <code>g-nt</code></div>
  <div>Combinations are possible: <code>g-index-text:&quot;Technology Index&quot;</code></div>
  <div>Full board list toggle: <code>toggle-all</code></div>
  <br>
  <div class="note">
    <code>[ toggle-all ] [current-title] [g-title / a-title / jp-title] [x / wsg / h] [t-text:&quot;Piracy&quot;]</code><br>
    will give you<br>
    <code>[ + ] [Technology] [Technology / Anime & Manga / Otaku Culture] [x / wsg / h] [Piracy]</code><br>
    if you are on /g/.
  </div>
  <div class="note">
    For custom styling, you can wrap groups or individual links in <code>{{</code> and <code>}}</code>, to wrap them in
    a span. You can also add classes in double quotes right after the {{. For example: <br />
    <code>[g-title] {{"favorites"[a-title / jp-title]}}</code><br />
    Results in:<br />
    <code>[&lt;a [...] &gt;Technology&lt;/a&gt;] &lt;span class="favorites"&gt;[&lt;a [...] &gt;Anime &amp;amp;
      Manga&lt;/a&gt; / &lt;a [...] &gt;Otaku Culture&lt;/a&gt;]&lt;/span&gt;</code>
  </div>
</fieldset>

<fieldset>
  <legend>
    Time Formatting
    <span class="warning" data-feature="Time Formatting">is disabled, relative time setting still applies.</span>
  </legend>
  <div><input name="time" class="field" spellcheck="false">: <span class="time-preview"></span></div>
  <div>Supported <a href="http://man7.org/linux/man-pages/man1/date.1.html" target="_blank">format specifiers</a>:</div>
  <div>Day: <code>%a</code>, <code>%A</code>, <code>%d</code>, <code>%e</code></div>
  <div>Month: <code>%m</code>, <code>%b</code>, <code>%B</code>, <code>%n</code> (Not zero padded)</div>
  <div>Year: <code>%y</code>, <code>%Y</code></div>
  <div>Hour: <code>%k</code>, <code>%H</code>, <code>%l</code>, <code>%I</code>, <code>%p</code>, <code>%P</code></div>
  <div>Minute: <code>%M</code></div>
  <div>Second: <code>%S</code></div>
  <div>Literal <code>%</code>: <code>%%</code></div>
  <div><a href="https://www.w3.org/International/articles/language-tags/" target="_blank">Language tag</a>: <input name="timeLocale" class="field" spellcheck="false"></div>
  <div>Relative time, like "3 minutes ago":
    <select name="RelativeTime">
      <option value="No">Disabled</option>
      <option value="Hover">Show when hovering on the date</option>
      <option value="Show">Show relative time, and time and date on hover</option>
      <option value="Both">Show both timestamp and relative date</option>
      <option value="BothRelativeFirst">Show both relative date and timestamp</option>
    </select>
  </div>
</fieldset>

<fieldset>
  <legend>Quote Backlinks formatting <span class="warning" data-feature="Quote Backlinks">is disabled.</span></legend>
  <div><input name="backlink" class="field" spellcheck="false">: <span class="backlink-preview"></span></div>
</fieldset>

<fieldset>
  <legend>Default pasted content filename</legend>
  <div><input name="pastedname" class="field" spellcheck="false">.png</div>
</fieldset>

<fieldset>
  <legend>File Info Formatting <span class="warning" data-feature="File Info Formatting">is disabled.</span></legend>
  <div><input name="fileInfo" class="field" spellcheck="false">: <span class="file-info file-info-preview"></span></div>
  <div>Link: <code>%l</code> (truncated), <code>%L</code> (untruncated), <code>%T</code> (4chan filename)</div>
  <div>Filename: <code>%n</code> (truncated), <code>%N</code> (untruncated), <code>%t</code> (4chan filename)</div>
  <div>Download button: <code>%d</code></div>
  <div>Quick filter MD5: <code>%f</code></div>
  <div>Spoiler indicator: <code>%p</code></div>
  <div>Size: <code>%B</code> (Bytes), <code>%K</code> (KB), <code>%M</code> (MB), <code>%s</code> (4chan default)</div>
  <div>Resolution: <code>%r</code> (Displays &#039;PDF&#039; for PDF files)</div>
  <div>Tag: <code>%g</code>
  <div>Literal <code>%</code>: <code>%%</code></div>
</fieldset>

<fieldset>
  <legend>Quick Reply Personas</legend>
  <textarea hidden class="personafield field" name="QR.personas" spellcheck="false"></textarea>
  <p>
    One item per line.<br>
    Items will be added in the relevant input&#039;s auto-completion list.<br>
    Password items will always be used, since there is no password input.<br>
    Lines starting with a <code>#</code> will be ignored.
  </p>
  <ul>You can use these settings with each item, separate them with semicolons:
    <li>Possible items are: <code>name</code>, <code>options</code> (or equivalently <code>email</code>), <code>subject</code> and <code>password</code>.</li>
    <li>Wrap values of items with quotes, like this: <code>options:&quot;sage&quot;</code>.</li>
    <li>Force values as defaults with the <code>always</code> keyword, for example: <code>options:&quot;sage&quot;;always</code>.</li>
    <li>Select specific boards for an item, separated with commas, for example: <code>options:&quot;sage&quot;;boards:jp;always</code>.</li>
  </ul>
</fieldset>

<fieldset>
  <legend>Unread Favicon <span class="warning" data-feature="Unread Favicon">is disabled.</span></legend>
  <select name="favicon">
    <option value="ferongr">ferongr</option>
    <option value="xat-">xat-</option>
    <option value="4chanJS">4chanJS</option>
    <option value="Mayhem">Mayhem</option>
    <option value="Original">Original</option>
    <option value="Metro">Metro</option>
  </select>
  <span class="favicon-preview"></span>
</fieldset>

<fieldset>
  <legend>Thread Updater <span class="warning" data-feature="Thread Updater">is disabled.</span></legend>
  <div>
    Interval: <input type="number" name="Interval" class="field" min="1"> seconds
  </div>
</fieldset>

<fieldset>
    <legend>Custom Cooldown Time</legend>
    <div>
        Seconds: <input type="number" name="customCooldown" class="field" min="0">
    </div>
</fieldset>

<fieldset>
  <legend>
    <label><input type="checkbox" name="Custom CSS"> Custom CSS</label>
  </legend>
  <div>For more information about customizing 4chan X&#039;s CSS, see the <a href="https://github.com/ccd0/4chan-x/wiki/Styling-Guide" target="_blank">styling guide</a>.</div>
  <button id="apply-css">Apply CSS</button>
  <textarea hidden name="usercss" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>Javascript Whitelist</legend>
  <div>
    Sources from which Javascript is allowed to be loaded by <a href="http://content-security-policy.com/#source_list" target="_blank">Content Security Policy</a>.<br>
    Lines starting with a <code>#</code> will be ignored. Remove or comment out all lines to allow everything.
  </div>
  <textarea hidden name="jsWhitelist" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>Known Banners</legend>
  <div>List of known banners, used for click-to-change feature.</div>
  <textarea hidden name="knownBanners" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>X (formerly Twitter) embeds</legend>
  <div>Only applies if embeds are enabled in the main settings</div>
  <label>Service to use for embeds
    <select name="XEmbedder">
      <option value="fxt">FxTwitter</option>
      <option value="tf">Twitframe</option>
    </select>
  </label><br />
  <label>
    Language to translate FxTwitter embeds to, as a two character ISO code, like <code>en</code>.
    Leave empty for no translation.
    <input name="fxtLang" maxlength="2" class="field" />
  </label><br />
  <label>FxTwitter endpoint <input name="fxtUrl" type="url" class="field" /></label><br />
  <label>FxTwitter maximum amount of replies include
    <input name="fxtMaxReplies" type="number" min="0" step="1" max="100" class="field" />
  </label>
</fieldset>

<fieldset>
  <legend>Thread updater sound</legend>
  <label>
    Sound volume, between 0 and 1:
    <input name="beepVolume" type="number" min=".01" max="1" step=".01" class="field" />
  </label><br />
  <label>
    Sound url. Can be a base64 one starting with <code>data:</code>. Leave empty for the default beep.
    <input type="string" name="beepSource" class="field wide" />
  </label>
</fieldset>`,no=`<div class="warning"><code>Keybinds</code> are disabled.</div>
<div>Allowed keys: <kbd>a-z</kbd>, <kbd>0-9</kbd>, <kbd>Ctrl</kbd>, <kbd>Shift</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>, <kbd>Enter</kbd>, <kbd>Esc</kbd>, <kbd>Up</kbd>, <kbd>Down</kbd>, <kbd>Right</kbd>, <kbd>Left</kbd>.</div>
<div>Press <kbd>Backspace</kbd> to disable a keybind.</div>
<table><tbody>
  <tr><th>Actions</th><th>Keybinds</th></tr>
</tbody></table>
<button type="button" id="reset-keys">Reset keybinds</button>`,so=`<select name="filter">
  <option value="guide">Guide</option>
  <option value="general">General</option>
  <option value="postID">Post number</option>
  <option value="name">Name</option>
  <option value="uniqueID">Unique ID</option>
  <option value="tripcode">Tripcode</option>
  <option value="capcode">Capcode</option>
  <option value="pass">Pass Date</option>
  <option value="email">Email</option>
  <option value="subject">Subject</option>
  <option value="comment">Comment</option>
  <option value="flag">Flag</option>
  <option value="filename">Filename</option>
  <option value="dimensions">Image dimensions</option>
  <option value="filesize">Filesize</option>
  <option value="MD5">Image MD5</option>
  </select>
<div></div>`,ro=`<form id="export-form">
  <div class="move">Export settings</div>
  <label><input name="history" type="checkbox" />Export history (last read, your posts, etc)</label><br />
  <label><input name="ask" type="checkbox" checked />Ask every time.</label><br />
  <button type="submit">Export</button>
  <button type="button" id="cancel-export">Cancel</button>
</form>`;const L=(e,t=m.body)=>Array.from(t.querySelectorAll(e));var de={init(){if(!(!(this.useFaster=/\S/.test(l.fourchanImageHost))||c.SITE.software!=="yotsuba"||!["index","thread"].includes(c.VIEW)))return N.Post.push({name:"Image Host Rewriting",cb:this.node})},suggestions:["i.4cdn.org","is2.4chan.org"],host(){return l.fourchanImageHost.trim()||"i.4cdn.org"},flashHost(){return"i.4cdn.org"},thumbHost(){return"i.4cdn.org"},test(e){return e==="i.4cdn.org"||de.regex.test(e)},regex:/^is\d*\.4chan(?:nel)?\.org$/,node(){if(this.isClone)return;const e=de.host();return this.file&&de.test(this.file.url.split("/")[2])&&!/\.swf$/.test(this.file.url)&&(this.file.link.hostname=e,this.file.thumbLink&&(this.file.thumbLink.hostname=e),this.file.url=this.file.link.href),de.fixLinks(L("a",this.nodes.comment))},fixLinks(e){for(var t of e)if(de.test(t.hostname)&&!/\.swf$/.test(t.pathname)){var i=de.host();t.hostname!==i&&(t.hostname=i)}}},ao=`:root.burichan {
  --xt-background: #D6DAF0;
  --xt-border: #B7C5D9;
  --xt-border-field-focus: #98E;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-header-dialog-bg: rgba(214, 218, 240, 0.98);
  --xt-notification-size: 11pt;
  --xt-header-dialog-fg: #89A;
  --xt-header-link: #34345C;
  --xt-dead-link: #34345C;
  --xt-qr-link-border: rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);
  --xt-qr-bg: linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent;
  --xt-menu-fg: #000;
  --xt-entry-size: 12pt;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-link-hover-bg: #D9DDF3;
  --xt-unread: rgba(214, 218, 240, 0.5);
}

/* Anonymize */
:root.burichan.anonymize $site$info$name::before {
  font-size: 12pt;
}`,lo=`:root.futaba {
  --xt-background: #F0E0D6;
  --xt-border: #D9BFB7;
  --xt-border-field-focus: #EA8;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-notification-size: 11pt;
  --xt-header-dialog-fg: #B86;
  --xt-dead-link: #00E;
  --xt-header-dialog-bg: rgba(240,224,214,0.98);
  --xt-header-link: #800000;
  --xt-qr-link-border: rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);
  --xt-qr-bg: linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent;
  --xt-entry-size: 12pt;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(240, 224, 214, 0.5);
  --xt-watcher: #800000;

  --xt-fxt-fg: #800000;
}

/* Anonymize */
:root.futaba.anonymize $site$info$name::before {
  font-size: 12pt;
}`,co="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAMBQTFRFAAAAAEmSADyHADN6CEOPKmWmADiKNV6lZoO5E2asU3u8B02hXYTAFXK8BEakS3i7MGS0E1mwZYzHSHjCYIrLIGDICFPDHXrIFWnBEGDDdZzWB1G2UYHMH4DPBU60EYrSSX7PGofXfajkeaPgQHzVSoHSDmHLF3vRjLbtea3sa6rsXJ3oSaHrYZXhW5blIKzwPZrqVozbKp7sRonfHpjoJ4vhRHrQLn/eNXnaJ33fNnHMJGvUFG3ZI2THBlPGAU2+9r1cgwAAACh0Uk5TAAcRGSIrO0RQUF9qdnl5hISEiaSoqqqxssnPz9DY2ery+vv7/P39/p/dKS0AAACXSURBVHjaXdDZEoIwDAXQVMuiIFrcd1FQWSqiouD6/38ltVNkel+SnMnkIfAPwrrZBB5Ft3uzlZs9Bnyuewml9HzLnwISP4hSZz4clxujVkNBAETAVeVNpy9BW8BdhpcMbw6oPPphoE027g80u8s21HUQ5gzMvX9gYGXH+EIK8MLotMUAeLpbElTAIo0dC1hqwIth4MoTvt45DOQxQMWhAAAAAElFTkSuQmCC",ho="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAMBQTFRFAAAAgICAzDMzzDMz0i0tzjEx0i0t0S4u0C8v1Csr1Ssr1Csr1Csr0ykp1Ckp0yws1Soq1Soq0i0t1Soq1Csr1Csr1Ckp1ikp1Skp1ikp1ikp1ikp1ygo1ygo1ygo1igo1ygo1ygo1ygo2Ccn2Ccn+enp9+Pj9t7e9NHR9MzM8bu78LS076ys65ub65WV6YqK6ImJ54KC5XR05G5u4V9f4FRU3UhI3UVF3UFB3Dw82jU12S8v2Soq2Ccn2CYm2CQklRbHSwAAACV0Uk5TAAIFChEaIicxO0JNWWNqb3R4iZmboaettLzF1t3j6evt8/f7/Ut/7/wAAAC+SURBVHjaTcfRVoJAFIXhPaGZJqQVGIgWDFYWUZnkqOw57/9Wji4Xy++/OGfDUddBGMdh0FM46Yymmo6ejjtwulHBs2LSBbxHXgg9DDOKtZZ0RyT3EZNmv91Z7uttbWyCZzGfdbkWWS/Kt7LJkMvva7VYiZj3748vq5HK3/JnuRJrqk31L3OEbHYuko2LE/RntK6z+QDqLmMrHynAe2r3y9gDcJOSLEg9iwYKQD+hTh+Gvn/bu8LRfRIF7m0dAEgnJl0bT2c0AAAAAElFTkSuQmCC",uo="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAAXNSR0IArs4c6QAAAC1QTFRF////8vn9zOX2v9/0s9jxptLvmsztjcXrgL/pdLjmZ7LkWqviTaXgQZ7dNJjb3UEC1wAAAFpJREFUeNpjeAcFDMiMV+egjKd5EMbzBs06MOOQgpIOiPFGSUFJ9dw7hjfKQIaS6DuGV0IgBhNQ6gaQodIHZLxrUlDSegdiPE5QswMz3l3WewdhvNgHYmDYDgDke1tpAZA/swAAAABJRU5ErkJggg==",fo="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAAXNSR0IArs4c6QAAAMxJREFUeNqFkdENhSAMRRu/bUz4dBMGYA1GYQs/+XQFB3AFV3AO+q634SU+TR4NxdjT20IFa7hciFqnc25zm06tIQoj3Q1axbqpzU1NKyOOjLtasuyGsBAZd/EFFuHDNltoOKkDq6x9ZWT8XhkugBd8u0qIyFeKLtQoVuAzUSJV0DPlBFkbcxNObKZNp3iYKsQKEOgAzdT4AgJLpg7QO8AS3uZh61uJ3mQh8NJkiF4gscn1eU3pGtjQeDxUf2oi8vPUt2FxRPdhMfp33B/2Tf349B8MPAAAAABJRU5ErkJggg==",po="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAjVBMVEWn3gCo3gSr3w2t4BSu4Bav4Ri35C+45DK45DO55DXA50rA50vB50zC6E/D6FTF6VjG6VvL62vN7G/P7XbQ7XfW74vY8JDa8ZTe8qDe8qLf86Pi9Kzj9K7k9LHp9sDp98Lq98Ps+Mr0++L5/O75/fD6/fH6/fL6/fP7/fT7/fb8/ff8/vj8/vn+/v7///91X4cfAAAAcklEQVR42o3M2xKBUACF4aVQckrIuRJK6H//x2sme4/MuPDfre9i6c/Cc3U5Dj87BuAxsXvGu6JvIIXEHRWwNHCHQNrCzkAFkbSBg4EM8i+Yw7PXBa3zRfuxVyf/Bis7nKwGKAcWxgC8prI5Sc315OlnDfzpDar2S9/oAAAAAElFTkSuQmCC",go="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAAXNSR0IArs4c6QAAACpQTFRFAAAAaWlpubm5zc3PycrL7u7uCxAX/v7/2NnasbK1gYSIWFxhLTI4GR4lkI5WFQAAAAd0Uk5TADicvur2/XGJAcwAAACHSURBVHjaY2BgEPKcosgABEyzz97ZqQBkWOWeOXNtMVBg2Z67d09nKTBI5lRM8Ww/NpFB+054eXn52U0MPrfKgWDtEYa5N0GMuTcRDJ/bIMbeIwzaZ5aXl1fd3cQgefLs9MqzQO1MuyPDK+5kKzAwWO8Kr7i2GWTpmvaKkwoMQCAUXqrIwAAAoI46gu0lGAYAAAAASUVORK5CYII=",mo="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAoJJREFUeNqlk8trU1sYxX/7cc7JSWqb1Da59iEpXr0ovdxcQcSJFnxMxaGOHDv1D1H/AsWhOlJwogPRsVAFJ+KjSqpto/akycnZ57W3AVEQOnPB4oPF+taafB9/CnH55qtOd7hT/yksz9TXrl88vMYuuHLnVef15u9erZS6dmRvc8U5R54Zzi656Gq3u/rbpnOA49maWfGKJo4fUrOWPtEWxzAesh5P4ck6j7p/1R+vixUtobAwVXUcWpS0W7BnARpmg/WtPnZUkAYlMjM5cRzTmp6nNTtPP1NsG8kglwzH9KqKoRLIMaNCICb38c9Sk370lSzP0aIYcubfWcI5zdQE1BR8+OLIckd/JAkCmJ8ALCxOQlHCqJjm5KEa35ISfenA4MaxE8dWXg4sA5OOG0P+bwu2YkFZOhACTwEK6j6cqDEOgKqewFq3quOdnWhj8yO3795DKcPpcxdY3L9MWBVoIZj0ILFgHRRALKARQlpaHPQ1QJYmfN56S1EYHjy8xUx9ieOd4xw+eJRu5LA4NDn7WyGBFGggcRaERPfkTGdhlPL5/UekckS9HltzPd51X6KrAb7vUwmaVMO91EJNZ+lvOu02zgrWBxn6edw6v/ZiA+kfQSiNVIJ0EGCLKmEeoKsV8tRRFB5ah3za3GZnkPBtMI/nBae0RfC1nMFvHEBpHz8MCXyfiYoaTw9PSXxPMr0nZLoWEkpFNhq3R4K5RoF2pcM52LdwEF/lnFluoaVACoGSDhx4WhJ4iszC0zcJoyRnlCbMjgO1SQ0mHpE5iE0J2ZD/FmrgHO7XJZdAxv03ll4sMSYnMUOkDBDbyXbbRKYNAFCpVKJGo7HKLtjN+8fv/B2VaRzENkpWcwAAAABJRU5ErkJggg==",bo="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAMBQTFRFAAAAAAAAAAAAAAAAAAAAAAAAd3KIAAAAEQ4RAwULzs7oAAcM2NbmlIfG5+P4vbPyAAAAAAAAAgkQ7Or4DA8YAAAAERASAwsSubXX3tn07+/3AwwUDCY15OD2XV1nS1BaEzJEZ3iOECs9IFBtaGx7RGmCJVl50Mr48fD4bmuk9vb7xM/jWYGf/f77+fj75+H839v719P2x737uKv2harYe6HSSJfLaoS/RZLDQo28Poe1O4CsLWeKSlpzJ1p+FzxSneqjOwAAAC10Uk5TAAYNEBkbL0tZXmNrcHmJjI2aoqqqrLS6u87m6Onr7e7w8vX5+vr6+/39/v7+2FamfQAAALBJREFUeNpljesaQkAYhHdRLKWSjjqIQrRyKFlK939X2bX1p+/P+80888wAAERJgi1+j2hYFqKPwJ+xW1c2gq32qnojAyAtngU5LEemWxZvTegSEQ7T/FHVNEE79hivVD8/8zJR6k/Dte5n+ZCtUKs3wHGS+SoVbG8X4DBJjwhyfQpwHEQXYnfOxL0l160+bwriyNSYNeT+UihKR2EJz/YcmYN1mMjQIEe3CkX4xf99ABzOEyTh/fKEAAAAAElFTkSuQmCC",vo="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAALRQTFRFcDk5Wx0doj09mSIi/Pv77/Dw6ezs29ra1tLSwrq6wGVlpF1di1ZWjSkpfhER9fT04ubm68zM19LSw7S02aqqzqamvqurwaGhsJOTunR0s3FxqW5uo2xsmm9vtGJimWNjkVxcuUpKtEZGsDU1pSoqeTk5rBIScCkprQsLlxAQpAEBnQICaxUVlAICiAEBYg8PewQEgAEBdQICbAICWwICtpycyHl5p4eHqAAAYQkJXQoKVgAAewTIdwAAADV0Uk5TmZ+or/39/f39/f39/f39/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v5oWOIfAAAAuElEQVR42kXKwS4DYRhA0fPPfKrtpM0sOpsmiCDdef9H8ABWhE0RDWo61dEIHcTC3Z3kRn5W+q++il83xp46pOo0ygaa7d0A7W4vmvfFMR4Hs+s1VR2pWmdgmUMefzJZUUCYpwTtot8yLyOlLP+SvyDpksiTLu8gI7mP7meRSNMaSWT5ZwIMIZIVJlWt3Nl2h9Eb9TB+83rE7VDo9/HxHM1NqxsJ++BkOcPDtImL88Km2BQFHGwuvwGKmzk9p5YkgwAAAABJRU5ErkJggg==",Ao="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAF1QTFRFAAAAMzMzLi5GZGx0BQUFXmhxJScqOz1DXWNoa3F3a290k5melJaara+xlpeY8PHx4eLi29zc1dbWz8/Px8fHv7+/t7e4rq+vpqepnZ6ejo6OhISEfX5+d3d3YGBgwIwa3gAAAA90Uk5TAAULITE2YX6anqrW3vD+JUDspAAAAK5JREFUeNpNz0luwzAMBVA5ieMOiQbOouTc/5il2kXzueLDBwimlC77f66xb99WpVrTZpBtT+naSTKxeXHs/hmgnSd1PdvJw78CWitQsFBlEFyAowzM7hadX2i5ZNap2ZvDApCqTao0RaUFNHDwhKEes4BHl+5MJ0/JC2SKo4NVo6xHgJ06OCiOw+MWMPUlL+pdS33et7eGw/O4pHg2I0KtpdjjHntk//jLcdtSSj+AHw++3ZKWJwAAAABJRU5ErkJggg==",xo="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAMBQTFRFAAAA/wAA/1UA/2YAxlUcdHR0Lhcu62IUKioqcHBwFBQUdnZ2GxIb8WoH82cGc3l5c3NzEhge82gGHBwc9GcFHhkZcXFxJBwZc3Nz8WcFeXNuGxsb8mkFdHR08GkFVi0TlnBZ7mgIHhwecHBwHBoadHR0c3NzGhga8WgFGxkZc3Nz8WcFc3Nz8WgFc3NzGRga8WgFc3N08WkFGxka8WgFdHR0GxkadHR0GxoadHR0GhgZ8WkE8WgE8WgFdHR0GxkaZ7hqxgAAAD10Uk5TAAEDBQkLCw0YGRkcHCQqKiorLC4vMzRbXV5fYGFjZnZ5hYmLkpadnZ+hoqPU1dXV1tjZ2dzi4uPj8/P09Vap/bMAAACRSURBVHjaVc/XEoIwEAXQjYqKGrFXLNg7ILGb5P//ys1IhmQfz869swtQWXUJmFO7h+OiBU/53raJBVIm/YIN4SzomJF9k7KzX9KQYCll/HOsEwXlBTYq4Dzy8wju0tNwHeYQqo944ij47lq4USBeG4+yaIqlKQgRzwNcG3Aa/Q/TkUMDIIPbZeCAMe66Z77/A+q6ElNsGDWuAAAAAElFTkSuQmCC",wo="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAMBQTFRF/2cA/2YA/2YA/2YA/2YA/2YA/2YA/////vby/eXW/N3K/NvJ/NnD/NjI/c+6+8uq/MKr+sKi+r6g+rme/LWY+qZ6+aNv/5Ux/48v/4ss/oos/Yos/4ol/Ikr+IFU/oMp/IIo94Iz9n88+XlK+IAo/n0l/Hwk9X0s93ot+Xok/XUh+nMg9m889HEg92k2+msc+2Qa/2YA/mYA/WUA+WAY91wj+lQU+00O+E0O/0kD/UcK+0cK+UYK/kEH/EAH/jwEfj1KkQAAAAd0Uk5TSFrk5+rt9gISbbcAAACaSURBVHjaTcE5igJRFIbR779v6K4OTaTNxFAQdP+LEMElOOEQiGBJvUHRoDxHClN6605h2NELe813fPv3CCEDoFTwRBAegESVVxSONm5yHDRkPEHky+0n1fY4LiY3ku1PKi5B6awxQ9ssIYDrLmD4h+wVgAKGRYCPxvBoUs+Dw/AO2F9Fi18B4q3Sepzo1WrLpC9pKdyM3io/AdrDMCk60CjnAAAAAElFTkSuQmCC",yo="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAGBQTFRFAAAAAID/CI/4gsr/BpH5CJH5BpL5arz7BZL6Z7r8BpP7BZH6BpH6JZ76B5L6BpH6BZD6/v//9Pr/5fP+2O7+wOL+veH9rtr9p9f9a7z8Y7j8T7D8O6f7JJ37GJj7BZH6dIRsvAAAABF0Uk5TAAYiKyyAiJCTlK6+0dfy+fzQvCOfAAAAmUlEQVR42l2PbQ+CMAyEC8KciBsbUxl7uf//L21HoobnQ5Neer2WhH6cjZlVTwfdaLGAsapr/YQvkygj/lDstwAKmFyB5SIDOTifKpcduNIMrGHf6muNwRc8yCC7DCQuxe0wTUhAeANVhGZZ49OXWDZf2aKA5Hlpds5H4NZiqySWVFqsjPzQp9PvxzPKorFo6YVBy/t6ICL6AH4DE9XqS58KAAAAAElFTkSuQmCC",ko="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAAXNSR0IArs4c6QAAABVQTFRF////Zz6lZEGlY0KlZUKkZEGlZEGltJNrJQAAAAZ0Uk5TASVPXWV9PfYTqwAAAD5JREFUeNpjYEiDAAZmGIMtjQEEUBksCW74GBi6WGGMsEQgIy0BiAXAjLS0RAYQIw0kwABiJjEwQBgKDAwMAD4aF9kc7HdHAAAAAElFTkSuQmCC",Co="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAAXNSR0IArs4c6QAAALNJREFUeNpjQAKMUFpQSIoJwudlB1NzLy47yMXEwMRgdFASrEJmJ0/vTAYWBpXThlCd8QsYTngx8B8IYwBrZWBiWBKqeEZ2SzoDM8x0keOS8a9LwPJQJT5rGXaDNUABC8OWMpGLEowIFfYHLyuHrYApYWTQPKFsdphhSQZMhOekDwNDcwfTKQ2w6xk5d8YzMDOxnbC33szMCNLQ2sPAxMDEYHh5wfMYsCZBqDd5pfl4sXgeAOR+JWx65NE5AAAAAElFTkSuQmCC",Io="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAAXNSR0IArs4c6QAAACxJREFUeNpj+M+AHzIQVEBYxX98JFEKSHPlf8IK/hNW8J+AAlLdMCgCihAEAJBiCAfi8KAsAAAAAElFTkSuQmCC",So="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAL1QTFRFAAAAAFX/AAAqAFv/ABxVAEr/ACeFAFf/AB1NAFb/ADCbAFD/A1v/AFT/AD68ADqzAEniAln/AD69AEPEBVj6AD7BAkjSD2L/CVHeD2L/GWj8EVvnMXb/GmbzKnH8KHH8U4n/Qn/6GGb9NHf8WIz4Zpf+Zpf2b576//7+//78+/r59Pb97PH/7e/34Or/5On22OP/2eP2ytj6wdL5ssn/tMf4qMH/nbr8mLb4kbP6g639daP/dqL3SIP+KnL+KsPlKgAAACh0Uk5TAAYGDhIfLjU1PkBDVFhfYWl2d36Rk6CmsLjFx9nZ3unu8PL5+/39/kamH9cAAADJSURBVHjaHcjLUoNAEAXQ248hQ0gCxIVW8f8f5d4yVlyICwTm0W0lZ3mItMFWDwNjXgFAh05p/jlf+sP7MzhO3bUNMiyOEAiQyGS2xVM+5lPHOzSny9405H6ffpvCldei1Mfg8vaVYQa23CC1avT5ilAdWtJ3myfMPO3gCjC2rNVuxjC/l0ekorSLM6rkZ1g+UBkfQW4EgUuJ1UsrK9dwbBTYSlg3yK0r516jABRfEvFSi49CHwTgOqpbWlxAtimAPyHPayKAzf4BWmNnf7ZivjUAAAAASUVORK5CYII=",Eo="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAAIdZUKh6sLlLkLmr4LmsAMp88NrdYVW3MZj7Acstkrt9s1e5E7vN5EfI9JvdtKwuBijp5kpbl30eiDt8aG1uqRr7qTyNehxM+k4PCy3enB3OTg6Ovv9PXw+fz////L9U5WAAAAAXRSTlMAQObYZgAAAIFJREFUeNplz90OwiAMBWAQpAoyxclkP3je/y0H2AQXz0WT8100rRD6kNI9/cRroemQL3hXhoujZYj4OHoAmBvYGcBISwbWBvfXCrytnIDUQMkbsBpagMA7zhtQdyTFQAmIG7IkYniiZuh3XGsPqoOZkMOJOpAcLqUzNFGGu/57fwc1hgtp0mVSyQAAAABJRU5ErkJggg==",To="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAF1QTFRFAAAAAKqqAMaOAL+VALyUALmNAMGTALySAL6RAL2OALyNAMCPAL+PALyPAL2PAL+QALyQAL2QAL6PAL+PAL+QAL6PAL+QAL+PAL6PAL6PAL6QAL6PAL6PAL6PAL6PbycyeQAAAB50Uk5TAAMJDBMdISozNkFJUFttd36ImKqvtL/Iz9zn7/b6+V1hqgAAAKZJREFUeNotyEF2gzAMQMFvyZZJ0sf9zwkpNRhJ3TDLKTzeP8b1PagFEuirwVLmrB/jGPCyOPRly6zyKfdAlHszU0U8UChCZEIiM6hKOCpaMlCsMZzWxQf3EZrWy7wIq5VxRirS1QdBa315cyrZa7mciQlcZ+Uevb2uRCT3P0chu8q8l1XPbSYKLl2Jtd/bCSjgtdXFcv/lifDWNL978gTuWo49APgHoehXKFGk4JYAAAAASUVORK5CYII=",Do="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAYBQTFRFAAAAAAAAAFUAJ04UFDsAKFENTnosIU4LO1gUM1URN2ccRm4dOmodaZI2P2seK2ULeZ9MO24VYIgtXIorPXMUI1oIYY0vS40kg65KhaJuZIg+epxVm8ZZYIswNXUPSXIhQ4AaPYQSPYIQpNRlUIAlg6xJTHMyjLpJeKRFmcZbcqA3ksJQPIUNcKA8osCClcRZZ5Mzcp4/m8RjpdRljrtgXp4sRpUSXKcpYqMwk8JVrdtpaKsxga1GjbtVVqcfjbtNocxngrpEt+Zyab02vu53pdFkXqwqotJilcZUzPKTrNV2tb1mq9hnqdlZUKMX7u7uzf6CzP2By/yAzfeOyPd+xfR8wfB6v+52uuhzweJ1tuVvx8fHtOFvsuBrwddyt9iEseJesNtvrdxkpNJhv8JsnNdboNFfotFYpcxposJxm8dco7aFm8BjvatpiMtOkMJOmbFyiMFKlbNlvZ1ghb1Afb5BjqxffJJbe4doUagXxWFTzEVR1zZP4i9QW2hGWmFP8o8FIgAAAE90Uk5TAAIGDQ0TFxcaHiUsNT1FR0pKWmRkZmdpa2trb3V1eH2IjZOVlpqdnp+ipqqtsrO7ws3O2dra2tzd4OHj5ujo7e/x8/P1+Pj6+/z8/P39/a8ykJsAAADdSURBVHjaY4AARg4VXU1tMUYGMGDnFzByjYmISvLlYwADUTWvsAAgiErQYgILSHoGgEFgvp8OWJMeiBdaHh+QVmkGUsJkkliRGZATXR8QXiICUsCTV+RfFxCaXRYQmC4IEmA1DSvICI8NBeqzYQfxuZitgDYkhQQ5aXIC+dK2Fiy8xj7uqaUG8mBncPI4KzFyaBiWFvpkeYCNYBB3UzDPCQ5KiUu2dhMGCTA5OCpK5VbXVkWo61uCncrNxcDtXVNbHGRvJ8cABUxWkcWhLoYesgwwIKEsI8DGpCrEAABv9i67kptWHQAAAABJRU5ErkJggg==",Ro="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAAXNSR0IArs4c6QAAADBQTFRFAAAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/////+Dg/8DA/7Cw/1BQ/0BA/xsb/wAABceraAAAAAh0Uk5TABAwQFBgcIDN7a/fAAAAS0lEQVR42mPAAoTNy8uLDRkYWP+DQQCDPoTxicEfwvjKUP///8/7//9/BzF+dL+HMrqgjJ/n////DlL8D6QYrh1hIIOwGcgKLHYDAI8wSVRb1KCAAAAAAElFTkSuQmCC",Bo=`/* General */
.dialog {
  background-color: var(--xt-background);
  border-color: var(--xt-border);
}
.field:focus,
.field.focus {
  border-color: var(--xt-border-field-focus);
}

/* 4chan style fixes */
:root:not(.oneechan).highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid var(--xt-border-highlight) !important;
}
:root:not(.oneechan).highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed var(--xt-border-highlight) !important;
}

/* Header */
#header-bar.dialog {
  background-color: var(--xt-header-dialog-bg);
}
:root:not(.fixed) #header-bar, #notifications {
  font-size: var(--xt-notification-size, 9pt);
}
#header-bar, #notifications {
  color: var(--xt-header-dialog-fg);
}
#board-list a, #shortcuts a {
  color: var(--xt-header-link, unset);
}

/* Settings */
#fourchanx-settings fieldset, .section-main div::before {
  border-color: var(--xt-border);
}
.suboption-list > div:last-of-type {
  background-color: var(--xt-background);
}

/* Catalog */
:root.catalog-hover-expand .catalog-container:hover > .post {
  background-color: var(--xt-background);
}
:root.werkTyme .catalog-thread:not(:hover),
:root.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.catalog-hover-expand .catalog-container:hover > .post,
:root.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: var(--xt-border);
}

/* Quote */
.backlink.deadlink {
  color: var(--xt-dead-link) !important;
}
.inline {
  border-color: var(--xt-border);
  background-color: var(--xt-inline, rgba(255, 255, 255, .14));
}

/* Fappe and Werk Tyme */
.indicator {
  color: var(--xt-background);
}

/* QR */
#dump-list::-webkit-scrollbar-thumb {
  background-color: var(--xt-background);
  border-color: var(--xt-border);
}
.qr-preview {
  background-color: var(--xt-qr-preview-bg, rgba(0, 0, 0, .15));
}
.qr-link {
  border-color: var(--xt-qr-link-border);
  background: var(--xt-qr-bg);
}
.qr-link:hover {
  background: var(--xt-link-hover-bg, var(--xt-background));
}

/* Menu */
#menu {
  color: var(--xt-menu-fg, var(--xt-header-link));
}
.entry {
  font-size: var(--xt-entry-size, 10pt);
}
.focused.entry {
  background: var(--xt-entry-focus-bg);
}

/* Unread */
.unread-mark-read {
  background-color: var(--xt-unread);
}

/* Thread Watcher */
.replies-quoting-you > a, #watcher-link.replies-quoting-you, .last-page > a > .watcher-page {
  color: var(--xt-watcher-quoting-you, #F00) !important;
}

/* Moved from style.css */

/* Highlighting */
.qphl {
  outline: 2px solid var(--xt-qphl, rgba(216, 94, 49, .8));
}
:root.highlight-you .quotesYou$site$highlightable$op,
:root.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid var(--xt-border-highlight);
}
:root.highlight-own .yourPost$site$highlightable$op,
:root.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed var(--xt-border-highlight) ;
}
.filter-highlight$site$highlightable$op,
.filter-highlight$site$highlightable$reply {
  box-shadow: inset 5px 0 var(--xt-filter-highlight, rgba(221, 0, 0, .5));
}
:root.highlight-own .yourPost > $site$sideArrows,
:root.highlight-you .quotesYou > $site$sideArrows,
.filter-highlight > $site$sideArrows {
  color: var(--xt-highlight-side-arrow, rgba(221, 0, 0, .8));
}

:root:not(.werkTyme) .catalog-thread.filter-highlight .catalog-thumb,
:root.werkTyme .catalog-thread.filter-highlight:not(:hover),
:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.filter-highlight,
:root.werkTyme.catalog-hover-expand .catalog-thread.filter-highlight > .catalog-container:hover > .catalog-post,
:root.catalog $site$catalog$thread.filter-highlight$site$highlightable$catalog {
  box-shadow: 0 0 3px 3px var(--xt-highlight-shadow, rgba(255, 0, 0, .5));
}
:root:not(.werkTyme) .catalog-thread.watched .catalog-thumb,
:root:root.werkTyme .catalog-thread.watched:not(:hover),
:root:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.watched,
:root.werkTyme.catalog-hover-expand .catalog-thread.watched > .catalog-container:hover > .catalog-post {
  border: 2px solid var(--xt-watched-border, rgba(255, 0, 0, .75));
}

.unread-line {
  border-color: var(--xt-unread-line, rgb(255,0,0));
}

:root.tomorrow,
:root.spooky {
  color-scheme: dark;
}

:root.tomorrow .field,
:root.spooky .field {
  background-color: unset;
  color: unset;
  border-color: unset;
}

:root.tomorrow input[type="button"],
:root.spooky input[type="button"] {
  filter: brightness(80%);
}`,Lo=`:root.photon {
  --xt-background: #DDD;
  --xt-border: #CCC;
  --xt-border-field-focus: #EA8;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-header-dialog-bg: rgba(221, 221, 221, 0.98);
  --xt-header-dialog-fg: #333;
  --xt-dead-link: #F60;
  --xt-qr-link-border: rgb(206, 206, 206) rgb(206, 206, 206) rgb(191, 191, 191);
  --xt-qr-bg: linear-gradient(#ECECEC, #DDD) repeat scroll 0% 0% transparent;
  --xt-menu-fg: #333;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(221, 221, 221, 0.5);
  --xt-watcher-quoting-you: #00F;
  --xt-watcher: #333;

  --xt-fxt-fg: #333;
}

/* 4chan style fixes */
:root.photon #arc-list tr:nth-of-type(odd) span.quote {
  color: #C0E17A;
}`,No=`#g-recaptcha,
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
}`,Po=`:root.spooky {
  --xt-background: #171526;
  --xt-link-hover-bg: #1A1829;
  --xt-border: #707070;
  --xt-border-field-focus: #98E;
  --xt-border-highlight: rgba(145, 182, 214, .8);
  --xt-header-dialog-bg: rgba(23, 21, 38, 0.98);
  --xt-header-dialog-fg: #C49756;
  --xt-header-link: #FE9600;
  --xt-dead-link: #FE9600;
  --xt-qr-link-border: rgb(8, 6, 23) rgb(8, 6, 23) rgb(0, 0, 8);
  --xt-qr-bg: linear-gradient(#262435, #171526) repeat scroll 0% 0% transparent;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(23, 21, 38, 0.5);
  --xt-watcher: #fe9600;

  --xt-unread-line: rgb(197, 200, 198);
  --xt-filter-highlight: rgba(145, 182, 214, .5);
  --xt-qphl: rgba(145, 182, 214, .8);
  --xt-highlight-side-arrow: rgb(155, 185, 210);

  --xt-fxt-fg: #f0f8ffd1;
}

/* 4chan style fixes */
:root.spooky #arc-list span.quote {
  color: #634C2C;
}

:root.spooky.shortcut-icons .native-settings {
  background-image: url('//s.4cdn.org/image/favicon-ws.ico');
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
:root.spooky #qr select {
  border-color: rgb(40, 41, 42);
  background: unset;
}
:root.spooky #qr-filename {
  color: rgb(197,200,198);
}

/* Unread */
:root.spooky .unread-line {
  visibility: visible;
  opacity: 1;
}`,Mo=`/* General */
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
.field {
  background-color: #FFF;
  padding: 2px 4px 3px;
  border: 1px solid #CCC;
  box-sizing: border-box;
  color: #333;
  font: 13px sans-serif;
  outline: none;
  margin: 0px;
  transition: color .25s, border-color .25s;
}
.field::placeholder {
  color: #AAA;
  opacity: 1;
}
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
  unicode-bidi: isolate;
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
#qr,
#export-dialog {
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
#export-dialog {
  z-index: 1001;
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
  padding: 4px;
  font-size: 13px;
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
  justify-content: right;
}
:root.centered-links #header-bar {
  text-align: center;
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
.fixed.bottom-header #header-bar .menu-button .icon {
  transform: rotate(180deg) translateY(-.125em);
}
.fixed #header-bar.autohide:not(:hover) {
  box-shadow: none;
  transition: all .8s .6s cubic-bezier(.55, .055, .675, .19);
}
.fixed.top-header #header-bar.autohide:not(:hover) {
  margin-bottom: -1em;
  transform: translateY(-100%);
}
.fixed.bottom-header #header-bar.autohide:not(:hover) {
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
#board-list a {
  text-decoration: none;
  padding: 1px;
}
#shortcuts:empty {
  display: none;
}
.dead-thread,
.disabled:not(.replies-quoting-you) {
  opacity: .45;
}
#shortcuts {
  float: right;
  display: flex;
  gap: 4px;
}
#shortcuts .icon {
  font-size: 14px;
}
:root.autohiding-scrollbar #shortcuts {
  margin-right: 12px;
}
:root.shortcut-icons .native-settings {
  font-size: 0;
  color: transparent;
  display: inline-block;
  vertical-align: top;
  height: 14px;
  width: 14px;
  background: url('//s.4cdn.org/image/favicon.ico') -1px -1px no-repeat;
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
  padding: 6px 5px 6px 20px;
  display: flex;
  gap: 5px;
  align-items: center;
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
  order: 1;
}
.message {
  overflow-wrap: break-word;
  box-sizing: border-box;
  padding: 0 5px;
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
  box-sizing: border-box;
}
#overlay {
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
#fourchanx-settings {
  box-sizing: border-box;
  box-shadow: 0 0 15px rgba(0, 0, 0, .15);
  height: 600px;
  max-height: 100%;
  width: 900px;
  max-width: 100%;
  margin: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
}
#fourchanx-settings > nav {
  padding: 2px 2px 8px;
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
  flex: 1;
  position: relative;
  overflow: auto;
  padding-right: 5px;
  overscroll-behavior: contain;
}
.sections-list {
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
.section-advanced .field.wide {
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
  position: relative;
  left: -1.5em;
}
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
.catalog-stats > .menu-button > .icon {
  height: 10px;
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
.preview-summary,
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
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.catalog-reply > * {
  padding: 3px;
  overflow: hidden;
  flex: none;
}
.catalog-reply > span {
  font-style: italic;
  font-weight: bold;
}
.catalog-reply-excerpt {
  flex: 1 1 auto;
}
.catalog-post .prettyprinted {
  max-width: 100%;
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
:root.fixed-watcher #thread-watcher {
  position: fixed;
}
:root.fixed-watcher #watched-threads {
  max-height: calc(100vh - 75px);
}
:root:not(.fixed-watcher) #watched-threads:not(:hover) {
  max-height: 210px;
  overflow-y: hidden;
}
#thread-watcher > .move {
  padding-top: 3px;
  display: flex;
  align-items: center;
  gap: 3px;
}
#watched-threads > div {
  padding-left: 3px;
  padding-right: 3px;
}
#watched-threads .watcher-link {
  max-width: 250px;
  display: inline-flex;
  flex-direction: row;
}
#watched-threads .watcher-page,
#watched-threads .watcher-unread {
  flex: 0 0 auto;
  margin-right: 2px;
}
#watched-threads .watcher-title {
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin-left: auto;
}
.watch-thread-link {
  width: 18px;
  height: 18px;
  background: none;
  border: none;
  padding: 2px;
  opacity: 0.2;
  filter: none;
  cursor: pointer;
  color: var(--xt-watcher, #000);
}
.watch-thread-link.watched {
  opacity: 1;
}
:root.oneechan .watch-thread-link > svg {
  display: none;
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
  text-decoration: underline dashed;
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
#qp .preview-summary {
  display: block;
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
.expanded-image > .post > .file > .fileThumb {
  display: flex;
  flex-direction: column;
}
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
.expanded-image > .post > .file > .fileThumb > audio {
  height: 30px;
  width: 100%;
  min-width: 300px;
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
  display: none !important;
}

/* Index/Reply Navigation */
#navlinks {
  top: 25px;
  right: 10px;
}
:root.catalog-mode #navlinks {
  display: none;
}
:root.highlight-own .yourPost$site$highlightable$op::after,
:root.highlight-you .quotesYou$site$highlightable$op::after,
.filter-highlight$site$highlightable$op::after {
  content: "";
  display: block;
  clear: both;
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
.stub .stub-icon,
.stub-subject {
  margin-right: 1ch;
}
.stub-replies {
  margin-left: 1ch;
}
.stub-reasons::before { content: ' ('; }
.stub-reasons::after { content: ')'; }
.stub-reason:not(:last-of-type)::after { content: ' & '; }
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
.remove {
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
  max-height: calc(100vh - 75px);
  overflow: hidden auto;
}
.qr-link-container {
  text-align: center;
  margin: 16px 0;
}
.qr-link-container-bottom {
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
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
  display: flex;
  flex-direction: row;
}
.persona .field {
  flex: 1;
  width: 0;
}
#qr.forced-anon :is(input[data-name="name"]:not(.force-show), input[data-name="sub"]:not(.force-show)),
#qr.reply-to-thread input[data-name="sub"]:not(.force-show),
body:not(.board_f) #qr select[name="filetag"],
#qr.reply-to-thread select[name="filetag"],
#qr:not(.has-sjis) #sjis-toggle,
#qr:not(.has-math) #tex-preview-button,
#qr.tex-preview .textarea > :not(#tex-preview),
#qr:not(.tex-preview) #tex-preview {
  display: none;
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
.textarea {
  position: relative;
  display: flex;
}
#qr textarea.field {
  height: 14.8em;
  min-height: 9em;
  min-width: 300px;
  resize: both;
}
#qr.has-captcha textarea.field {
  height: 9em;
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
input.field.tripped:not(:hover):not(:focus) {
  color: transparent !important;
  text-shadow: none !important;
}

#qr > .move {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#qr > .move label {
  display: inline-flex;
  align-items: center;
}
#qr > .move .close {
  order: 2;
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
#overlay.media-preview {
  display: flex;
  overflow: auto;
  align-items: center;
}
#overlay.media-preview :is(img, video) {
  margin: auto;
}
#overlay.media-preview video {
  max-height: 100%;
  max-width: 100%;
}

/* File Input, Submit Button, Oekaki */
#file-n-submit, #qr .oekaki {
  display: flex;
  align-items: stretch;
  margin-top: 1px;
}
#qr-file-button, #qr-draw-button {
  width: 15%;
}
#file-n-submit input[type="submit"] {
  width: 25%;
}
#qr-filename-container {
  flex: 1 1 auto;
  width: 0;
  display: flex;
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
  flex: 1 1 auto;
  width: 0;
  display: flex;
  align-items: center;
}
#qr .oekaki > label > span {
  margin: 0 3px;
}
#qr .oekaki > label > input {
  flex: 1 1 auto;
  width: 0;
}
#qr .oekaki-bg {
  position: relative;
  display: inline-block;
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
  flex: none;
  margin: 0;
  margin-right: 3px;
}
#qr:not(.has-spoiler) #qr-spoiler-label,
#file-n-submit:not(.has-file) :is(#qr-spoiler-label, #qr-randomize, #qr-restore-name),
#file-n-submit:not(.has-image) #qr-jpg,
#file-n-submit:not(.has-image):not(.has-video) #qr-view,
#file-n-submit.has-file :is(#paste-area, #url-button),
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
.checkbox-letter, #paste-area, #url-button, #custom-cooldown-button, #dump-button, #split-post {
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
  overflow: auto;
  white-space: nowrap;
  width: 248px;
  max-height: 248px;
  min-height: 90px;
  max-width: 100%;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.qr-preview {
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
  transition: opacity .25s ease-in-out, transform .25s ease-in-out;
  vertical-align: top;
  background-size: cover;
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
  transform: scale(.8);
}
.qr-preview.over {
  border-color: #fff;
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
.qr-preview:only-of-type > .remove {
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
  font-size: 1.5em;
  position: absolute;
  bottom: 20px;
  right: 10px;
  transform: translateY(calc(-50% - .75em));
}
#file-n-submit {
  display: flex;
  flex-direction: column;
}
#file-n-submit .row {
  display: flex;
  flex-direction: row;
}
#file-n-submit .row.space {
  justify-content: space-between;
}
#qr-actions {
  align-items: center;
  gap: 6px;
  padding: 0 3px;
}
#qr-actions .qr-action-button {
  display: inline-flex;
  align-items: center;
}

/* Menu */
.menu-button {
  position: relative;
  cursor: pointer;
}
.postInfo > .menu-button {
  margin: 0 4px;
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
.entry input[type="checkbox"],
.entry input[type="radio"] {
  margin: 0px;
  position: relative;
  top: 2px;
}
.entry input[type="number"] {
  width: 4.5em;
}
.entry.has-shortcut-text,
.entry.has-submenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.entry .shortcut-text {
  opacity: 0.5;
  font-size: 70%;
  margin-left: 5px;
}
.menu-indicator {
  pointer-events: none;
  position: relative;
  right: -7px;
}
.left .menu-indicator > .icon {
  transform: rotate(180deg);
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
  padding: 1px 4px;
  position: fixed;
}
#embedding.empty {
  display: none;
}
#embedding > .move {
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}

/* Gallery */
#a-gallery {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  background: rgba(0,0,0,0.7);
}
.gal-viewport {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex: 1 1 auto;
  overflow: hidden;
}
.gal-thumbnails {
  flex: 0 0 150px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
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
  flex: 0 0 20px;
  position: relative;
  cursor: pointer;
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.3);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
}
.gal-prev:hover,
.gal-next:hover {
  opacity: 1;
}
.gal-image {
  flex: 1 0 auto;
  display: flex;
  align-items: flex-start;
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
  display: flex;
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
  flex: none;
}
.gal-fit-width .gal-image img,
.gal-fit-width .gal-image video {
  max-width: 100%;
}
.gal-fit-height .gal-image img,
.gal-fit-height .gal-image video {
  max-height: calc(100vh - 25px);
}
.gal-image iframe {
  width: 100%;
  height: 100%;
}
.gal-buttons {
  font-size: 1.5em;
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
.gal-buttons.gal-playing > .gal-start,
.gal-buttons:not(.gal-playing) > .gal-stop {
  display: none;
}
.gal-labels {
  position: fixed;
  bottom: 6px;
  display: flex;
  flex-direction: column;
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
:root.gallery-open.fixed #header-bar:not(.autohide) {
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

/* PSA */
.fcx-announcement {
  text-align: center;
}
.fcx-announcement a {
  text-decoration: underline;
}

.spin > .icon {
  animation: spin 2s infinite linear;
}

/* To not scroll posts behind the header */
div.post {
  overflow: auto;
  scroll-margin-top: 30px;
}

/* (you) markers on the scrollbar */
.post-scroll-marker {
  border: none;
  padding: 0;
  position: fixed;
  right: -5px;
  background-color: var(
    --xt-scroll-maker-you, 
    var(--xt-border-highlight, currentColor)
  );
  border-radius: 3px;
  width: 10px;
  min-height: 5px;
  top: calc(var(--top) * 1vh);
  height: calc(var(--height) * 1vh);
}

.post-scroll-marker.you-scroll-marker {
  opacity: 50%;
}

.scroll-marker-container {
  display: contents;
}`,Fo=`:root.tomorrow {
  --xt-background: #282A2E;
  --xt-border: #111;
  --xt-border-field-focus: rgb(129, 162, 190);
  --xt-border-highlight: rgba(145, 182, 214, .8);
  --xt-header-dialog-bg: rgba(40,42,46,0.9);
  --xt-header-dialog-fg: #C5C8C6;
  --xt-header-link: #81A2BE;
  --xt-dead-link: #81A2BE;
  --xt-inline: rgba(0, 0, 0, .14);
  --xt-qr-preview-bg: rgba(255, 255, 255, .15);
  --xt-qr-link-border: rgb(25, 27, 31) rgb(25, 27, 31) rgb(10, 12, 16);
  --xt-qr-bg: linear-gradient(#37393D, #282A2E) repeat scroll 0% 0% transparent;
  --xt-menu-fg: #C5C8C6;
  --xt-entry-focus-bg: rgba(0, 0, 0, .33);
  --xt-unread: rgba(40, 42, 46, 0.5);
  --xt-watcher: #c5c8c6;

  --xt-unread-line: rgb(197, 200, 198);
  --xt-filter-highlight: rgba(145, 182, 214, .5);
  --xt-highlight-shadow: rgba(64, 192, 255, .7);
  --xt-watched-border: rgb(64, 192, 255);
  --xt-qphl: rgba(145, 182, 214, .8);
  --xt-highlight-side-arrow: rgb(155, 185, 210);

  --xt-fxt-fg: #c5c8c6;
}

/* 4chan style fixes */
:root.tomorrow #arc-list span.quote {
  color: #B5BD68;
}

:root.tomorrow #header-bar a, :root.tomorrow #notifications a {
  color: #81A2BE;
}
:root.tomorrow.shortcut-icons .native-settings {
  background-image: url('//s.4cdn.org/image/favicon-ws.ico');
}


:root.tomorrow #qr .field {
  background-color: rgb(26, 27, 29);
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
}
:root.tomorrow #qr .field:focus,
:root.tomorrow #qr .field.focus {
  border-color: var(--xt-border-field-focus) !important;
  background-color: rgb(30,32,36);
}
:root.tomorrow #qr select {
  border-color: rgb(40, 41, 42);
  background: unset;
}
:root.tomorrow #qr select > option {
  background-color: var(--xt-background);
}
:root.tomorrow #qr-filename {
  color: rgb(197,200,198);
}`,$o=`#captcha-cnt {
  height: auto;
}
:root:not(.js-enabled) #form {
  display: block;
}
#bd > div[style], #bd > div[style] > * {
  height: auto !important;
  margin: 0 !important;
  font-size: 0;
}`,Oo=`:root.yotsuba-b {
  --xt-background: #D6DAF0;
  --xt-link-hover-bg: #D9DDF3;
  --xt-border: #B7C5D9;
  --xt-border-field-focus: #98E;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-header-dialog-bg: rgba(214,218,240,0.98);
  --xt-header-dialog-fg: #89A;
  --xt-header-link: #34345C;
  --xt-dead-link: #34345C;
  --xt-qr-link-border: rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);
  --xt-qr-bg: linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent;
  --xt-menu-fg: #000;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(214, 218, 240, 0.5);
}`,Ho=`:root.yotsuba {
  --xt-background: #F0E0D6;
  --xt-border: #D9BFB7;
  --xt-border-field-focus: #EA8;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-header-dialog-bg: rgba(240,224,214,0.98);
  --xt-header-dialog-fg: #B86;
  --xt-header-link: #800000;
  --xt-dead-link: #00E;
  --xt-qr-link-border: rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);
  --xt-qr-bg: linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(240, 224, 214, 0.5);
  --xt-watcher: #800000;

  --xt-fxt-fg: #800000;
}`;const qo=e=>`/* Link Title Favicons */
`+e.map(({name:t,data:i})=>`.linkify.${t}::before {
  content: "";
  background: transparent url('data:image/png;base64,${i}') center left no-repeat!important;
  padding-left: 18px;
}
`).join("");var Uo=`/* Icons */
svg.icon {
  height: 1em;
  width: 1em;
  display: inline-flex;
  vertical-align: -.125em;
}
/* Override catalog.css */
:root.catalog svg.icon {
  position: static;
}
:root.shortcut-icons #shortcuts .icon--alt-text,
:root:not(.shortcut-icons) .shortcut .icon {
  display: none;
}
:root.shortcut-icons .shortcut.brackets-wrap::before,
:root.shortcut-icons .shortcut.brackets-wrap::after {
  display: none;
}
@keyframes spin {
  100% {transform:rotate(1turn)}
}`,jo=`:root {
  --xt-fxt-bg: var(--xt-background);
  --xt-fxt-border: var(--xt-border);
}

.fxt-card {
  color: var(--xt-fxt-fg, #000);
  background-color: var(--xt-fxt-bg, #D6DAF0);
  padding: 16px;
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-radius: 12px;
  gap: 8px;
  width: 550px;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  grid-template-rows: max-content max-content max-content;
  grid-template-areas:
    "meta meta"
    "content content"
    "stats stats"
}
.fxt-meta {
  display: flex;
  flex-direction: row;
  gap: 8px;
  grid-area: meta;
}
.fxt-meta_profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.fxt-meta_avatar {
  display: flex;
  align-items: center;
}
.fxt-meta_profile img {
  height: 48px;
  width: 48px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: var(--xt-fxt-border, #B7C5D9);
}
.fxt-meta_author {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.fxt-meta_author_username {
  font-weight: bold;
}
.fxt-stats_meta {
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 8px;
}
.fxt-stats_meta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.fxt-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  grid-area: content;
}
.fxt-text {
  white-space: pre-wrap;
  word-break: break-word;
}
.fxt-poll {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.fxt-choice {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 75%;
  height: 24px;
}
.fxt-choice.highlight {
  font-weight: bold;
}

.fxt-choice_label {
  margin-left: 6px;
  z-index: 1;
}
.fxt-choice_percentage {
  margin-right: 6px;
  z-index: 1;
}
.fxt-choice .fxt-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  border-radius: 4px;
  background-color: currentColor;
  opacity: .3;
  z-index: 0;
}

.fxt-total-votes {
  font-size: 75%;
  opacity: .5;
}
.fxt-media {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
}
.fxt-media_container {
  --maxHeightMedia: 300px;
}
.fxt-media_container :is(img, video) {
  display: block;
  width: 100%;
  height: 100%;
  max-height: var(--maxHeightMedia);
  max-width: none;
  object-fit: contain;
  object-position: center;
}
.fxt-media_container {
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  aspect-ratio: 16 / 9;
}
.fxt-media_container .fxt-media:only-child {
  grid-column: span 2 / auto;
  grid-row: span 2 / auto;
}
.fxt-media_contains_3 .fxt-media:first-child {
  grid-row: span 2 / auto;
}
.fxt-media_contains_3 .fxt-media :is(img, video) {
  max-height: calc(var(--maxHeightMedia) / 2);
}
.fxt-media_contains_3 .fxt-media:first-child :is(img, video) {
  max-height: calc(var(--maxHeightMedia) + 4px);
  /* weird spacing even though img/video has block... */
}
.fxt-media_video {
  background-color: #000;
}
.fxt-tweet-quote {
  width: fit-content;
  padding: 8px;
}
.fxt-tweet-quote .fxt-meta_profile img {
  height: 24px;
  width: 24px;
}
.fxt-tweet-quote .fxt-meta_author {
  font-size: 80%;
}
.fxt-tweet-quote .fxt-meta {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 4px;
}
.fxt-community_note {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-radius: .25rem;
}
.fxt-community_note-header {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .25rem .5rem;
  background-color: var(--xt-fxt-border, #B7C5D9);
}
.fxt-community_note-text {
  padding: .5rem;
  white-space: pre-wrap;
}
.fxt-tweet-reply {
  grid-template-areas:
    "meta meta"
    "line content"
    "line stats"
}
.fxt-tweet-reply::before {
  grid-area: line;
  content: '';
  display: block;
  background-color: var(--xt-fxt-border, #B7C5D9);
  height: calc(100% + 18px);
  width: 5px;
  margin: auto;
  position: relative;
  top: -5px;
}
.fxt-stats {
  grid-area: stats;
}
.fxt-reply_container>.fxt-tweet-reply,
.fxt-reply_container+.fxt-tweet-original {
  border: 0;
  border-radius: 0;
  padding-top: 8px;
  padding-bottom: 8px;
}
.fxt-reply_container>.fxt-tweet-reply:first-child {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-bottom: 0;
}
.fxt-reply_container>.fxt-tweet-reply:not(:first-child) {
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-top: 0;
  border-bottom: 0;
}
.fxt-reply_container+.fxt-tweet-original {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-top: 0;
}
.fxt-text_translated-label,
.fxt-stats {
  color: var(--xt-dead-link);
}
.fxt-card:is(.warning, .loading) {
  display: flex;
}
.fxt-card_container {
  max-block-size: 90dvh;
  overflow: hidden auto;
  scrollbar-width: thin;
  width: fit-content;
}`;const et={boards:Mo+Bo+Ho+Oo+lo+ao+Fo+Lo+Po+Uo+jo+qo([{name:"audio",data:co},{name:"bitchute",data:ho},{name:"clyp",data:uo},{name:"dailymotion",data:fo},{name:"gfycat",data:po},{name:"gist",data:go},{name:"image",data:mo},{name:"installgentoo",data:bo},{name:"liveleak",data:vo},{name:"pastebin",data:Ao},{name:"peertube",data:xo},{name:"soundcloud",data:wo},{name:"streamable",data:yo},{name:"twitchtv",data:ko},{name:"twitter",data:Co},{name:"video",data:Io},{name:"vidlii",data:So},{name:"vimeo",data:Eo},{name:"vine",data:To},{name:"vocaroo",data:Do},{name:"youtube",data:Ro}]),report:No,www:$o,sub:function(e){var t={site:c.SITE.selectors};return e.replace(/\$[\w\$]+/g,function(i){for(var n=i.slice(1).split("$"),s=t,r=0;r<n.length;r++){if(typeof s!="object")return":not(*)";s=o.getOwn(s,n[r])}return typeof s!="string"?":not(*)":s})}},pt={init(){if(l["Custom CSS"])return this.addStyle()},addStyle(){return this.style=o.addStyle(et.sub(l.usercss),"custom-css","#fourchanx-css")},rmStyle(){if(this.style)return o.rm(this.style),delete this.style},update(){return this.style?this.style.textContent=et.sub(l.usercss):this.addStyle()}},Vo="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z",Qo=512,Wo=512,zo="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z",_o=576,Jo=512,Go="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z",Yo=512,Ko=512,Xo="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z",Zo=512,ei=512,ti="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z",oi=512,ii=512,ni="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z",si=512,ri=512,ai="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z",li=448,di=512,ci="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z",hi=512,ui=512,fi="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z",pi=384,gi=512,mi="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",bi=512,vi=512,Ai="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z",xi=640,wi=512,yi="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z",ki=512,Ci=512,Ii="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z",Si=512,Ei=512,Ti="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z",Di=512,Ri=512,Bi="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z",Li=576,Ni=512,Pi="M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z",Mi=512,Fi=512,$i="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",Oi=512,Hi=512,qi="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z",Ui=256,ji=512,Vi="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z",Qi=256,Wi=512,zi="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z",_i=320,Ji=512,Gi="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z",Yi=512,Ki=512,Xi="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",Zi=384,en=512,tn="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z",on=512,nn=512,sn="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z",rn=448,an=512,ln="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z",dn=448,cn=512,hn="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM152 232H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z",un=448,fn=512,pn="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z",gn=384,mn=512,bn="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z",vn=384,An=512,xn="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z",wn=384,yn=512,kn="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z",Cn=384,In=512,ne=(e,t,i)=>`<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 ${t} ${i}"><path d="${e}" fill="currentColor" /></svg>`,Ct={image:ne(Vo,Qo,Wo),eye:ne(zo,_o,Jo),expand:ne(Go,Yo,Ko),comment:ne(Xo,Zo,ei),refresh:ne(ti,oi,ii),wrench:ne(ni,si,ri),bolt:ne(ai,li,di),link:ne(Ai,xi,wi),pencil:ne(ci,hi,ui),clipboard:ne(fi,pi,gi),clock:ne(mi,bi,vi),shuffle:ne(yi,ki,Ci),undo:ne(Ii,Si,Ei),download:ne(Ti,Di,Ri),bookOpen:ne(Bi,Li,Ni),shrink:ne(Pi,Mi,Fi),heart:ne($i,Oi,Hi),caretRight:ne(qi,Ui,ji),caretLeft:ne(Vi,Qi,Wi),caretDown:ne(zi,_i,Ji),scissors:ne(Gi,Yi,Ki),xmark:ne(Xi,Zi,en),arrowRightLong:ne(tn,on,nn),plus:ne(sn,rn,an),squarePlus:ne(ln,dn,cn),squareMinus:ne(hn,un,fn),play:ne(pn,gn,mn),stop:ne(bn,vn,An),arrowUpLong:ne(xn,wn,yn),arrowDownLong:ne(kn,Cn,In)};var q={set(e,t,i){const n=Ct[t];if(!n)throw new Error(`Icon "${t}" not found.`);i?e.innerHTML=`<span class="icon--alt-text">${oe(i)}</span>${n}`:e.innerHTML=n},get(e){return Ct[e]},raw(e){return{innerHTML:Ct[e],[we]:!0}}},Sn=`<div class="move">
  <label>
    <input type="checkbox" id="autohide" title="Auto-hide">
    Quick Reply
  </label>
  <a href="javascript:;" class="close" title="Close">\u2715</a>
  <select data-name="thread" title="Create a new thread / Reply">
    <option value="new">New thread</option>
  </select>
</div>
<form>
  <div class="persona">
    <button type="button" id="sjis-toggle" class="qr-button" title="Toggle Mona font">\u2200</button>
    <button type="button" id="tex-preview-button" class="qr-button" title="Preview TeX">T<sub>E</sub>X</button>
    <input name="name" data-name="name" list="list-name" placeholder="Name" class="field" size="1">
    <input name="email" data-name="email" list="list-email" placeholder="Options" class="field" size="1">
    <input name="sub" data-name="sub" list="list-sub" placeholder="Subject" class="field" size="1" maxlength="100">
  </div>
  <div class="textarea">
    <textarea data-name="com" placeholder="Comment" class="field"></textarea>
    <span id="char-count"></span>
    <div id="tex-preview"></div>
  </div>
  <div id="dump-list-container">
    <div id="dump-list"></div>
    <a id="add-post" href="javascript:;" title="Add a post">+</a>
  </div>
  <div class="oekaki" hidden>
    <input type="button" id="qr-draw-button" class="qr-button" value="Draw">
    <label><span>Width:</span><input name="oekaki-width" value="400" type="number" class="field" size="1"></label>
    <label><span>Height:</span><input name="oekaki-height" value="400" type="number" class="field" size="1"></label>
    <span class="oekaki-bg" title="Background Color"><input name="oekaki-bg" type="checkbox" checked><input name="oekaki-bgcolor" type="color" value="#ffffff"></span>
  </div>
  <div id="file-n-submit">
    <span id="qr-file" class="row">
      <input type="button" id="qr-file-button" class="qr-button" value="Files">
      <span id="qr-filename-container" class="field">
        <span id="qr-no-file">No selected file</span>
        <input id="qr-filename" data-name="filename" spellcheck="false">
        <label id="qr-spoiler-label">
          <input type="checkbox" id="qr-file-spoiler" title="Spoiler image">
          <a class="checkbox-letter">S</a>
        </label>
      </span>
    </span>
    <span id="qr-actions-container" class="row space">
      <span id="qr-actions" class="row">
        <a href="javascript:;" id="qr-oekaki-button" class="qr-action-button" title="Edit in Tegaki">\u270E\uFE0E</a>
        <a href="javascript:;" id="qr-jpg" class="qr-action-button" title="Compress to jpg">C</a>
        <a href="javascript:;" id="qr-view" class="qr-action-button" title="Preview">V</a>
        <a href="javascript:;" id="qr-randomize" class="qr-action-button" title="Randomize filename">R</a>
        <a href="javascript:;" id="qr-restore-name" class="qr-action-button" title="Reset filename">U</a>
        <a href="javascript:;" id="qr-filerm" class="qr-action-button" title="Remove file">\u2715</a>
        <a href="javascript:;" id="url-button" class="qr-action-button" title="Post from URL">\u{1F517}\uFE0E</a>
        <a href="javascript:;" hidden id="paste-area" class="qr-action-button" title="Select to paste images" tabindex="-1" contentEditable="true">\u{1F4CB}\uFE0E</a>
        <a href="javascript:;" id="custom-cooldown-button" class="qr-action-button" title="Toggle custom cooldown" class="disabled">\u{1F552}\uFE0E</a>
        <a href="javascript:;" id="split-post" class="qr-action-button" title="Split into multiple posts" hidden>\u2702\uFE0F</a>
        <a href="javascript:;" id="dump-button" class="qr-action-button" title="Dump list">\u2795\uFE0E</a>
      </span>
      <input class="qr-button" type="submit">
    </span>
  </div>
  <select data-default="4" name="filetag">
    <option value="0">Hentai</option>
    <option value="6">Porn</option>
    <option value="1">Japanese</option>
    <option value="2">Anime</option>
    <option value="3">Game</option>
    <option value="5">Loop</option>
    <option value="4" selected>Other</option>
  </select>
  <input type="file" multiple>
</form>
<datalist id="list-name"></datalist>
<datalist id="list-email"></datalist>
<datalist id="list-sub"></datalist>`,En="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///9zBQC/AADpDAP/gID/q6voCwJJTwpOAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC",Tn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR42q1TOwrCQBB9s0FRtJI0WoqFtSLYegoP4gVSeJsUHsHSI3iFeIqRXXgwrhlXwYHHhLwPTB7B36abBCV+0pA4DUBQUNZYQptGtW3jtoKyxgoe0yrBCoyZfL/5ioQ3URZOXW9I341l3oo+NXEZiW4CEuIzvPECopED4OaZ3RNmeAm4u+a8Jr5f17VyVoL8fr8qcltzwlyyj2iqcgPOQ9ExkHAITgD75bYBe0A5S4H/P9htuWMF3QXoQpwaKeT+lnsC6JE5I6aq6fEAAAAASUVORK5CYII=",Dn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///8AcH4AtswA2PJ55fKi6fIA1/FtpPADAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC",Rn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4y2NgoBq4/vE/HJOsBiRQUIfA2AzBqQYqUfn00/9FLz+BaQxDCKqBmX7jExijKEDSDJPHrnnbGQhGV4RmOFwdVkNwhQMheYwQxhaIi7b9Z9A3gWAQm2BUoQOgRhgA8o7j1ozLC4LCyAZcx6kZI5qg4kLKqggDFFWxJySsUQVzlb4pwgAJaTRvokcVNgOqOv8zcHBCsL07DgNg8YsczzA5MxtUL+DMD8g0slxI/H8GQ/P/DJKyeKIRpglXZsIiBwBhP5O+VbI/JgAAAABJRU5ErkJggg==",Bn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///8oeQBJ3ABV/wHM/7Lu/+ZU/gAqUP3dAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC",Ln="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVQ4y2NgoBYI+cfwH4ZJVgMS0KhEYGyG4FQDkzjzf9P/d/+fgWl0QwiqgSkI/c8IxsgKkDXD5LFq9rwDweiK0A2HqcNqCK5wICSPEcLYAtH+AMN/IXMIBrEJRie6OEgjDAC5x3FqxuUFNiEUA67j1IweTTBxBQ1puAG86jgSEraogskJWSBcwCGF5k30qMJmgMFEhv/MXBAs5oLDAFj8IsczTE7UEeECbhU8+QGZRpaTi2b4L2zF8J9TGk80wjThykzY5AAW/2O1C2mIbgAAAABJRU5ErkJggg==",Nn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAG1BMVEX+AACLkZFub2yfaF3zZGIAAAD/AAD/iYr/zs8IPcF6AAAABXRSTlMAeprJ7xzg6IEAAABZSURBVAjXY2DABKGBSkqioQwMrGmpxsZhaQEMDGFpIa5pqSCRtPDSNJBIaGh5eShQDYOye0V7iREKAyQFYoiCFAcyILQDGcGmEEZYkGoqiMHKysAQEICwGwAAjBmBqhYlagAAAABJRU5ErkJggg==",Pn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAPFBMVEUAAACEgoBva2ilamDxcG7IaWYgFBNOSEf//f0PDQwBAAA7LCwAAAD/AAD+hIX+m5z+zc5HAADPAAAGAADl032uAAAADHRSTlMAzNv0/vz+6v3+7ALrmfyXAAAAaUlEQVQY042PyxKAIAhFAc1eV7T6/3/N8VXOtAgWwBm4ANEPA8AswpySXHvvYZLlpBNrh9pDtcSqAQ1BUTVIjNUQY5icmwfglmXNgE0d6QBF9GigrU0A9LoM53U1kFzk6SBQuWfD/vHqDUCpBmVKTTM4AAAAAElFTkSuQmCC",Mn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAACRjop4dXVpZ2tdcI9dfKdisfMAAAAumMN9xv+s2/+PADT2AAAAB3RSTlMAepGdv83v3HIc4QAAAFxJREFUCNdjYMAE5YXKRuLlDAzsHe2uIRUdBQwMFR1l6R3tIJGOyukdIJHy8lkry4FqGEwzV62aFozMUAFJOQEZ4iDFhQwI7UBGaTiEUVFs3g5isLMzMBQUIOwGAJRlIu9hk08QAAAAAElFTkSuQmCC",Fn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAACAgYVlc4ljsu4AAAAAAAAAAAAumMODyP6b1P6e1f/g8v89msgSIiwNFxwbPU3tQYj5AAAABnRSTlMAxej+9VTmD9ciAAAAZElEQVQI12NgwARpiUKKYmkMDGzlZUpK6eUJDAzp5clm5WUgkfKMtnKQSFpa54o0oBoGJYvZO88+gjJu7wMyhIBS2SCGGFDxaxADpP32NjAjSe0bSFd6epIaWISNjYEhJRVhNwAGlyJpYtcvcAAAAABJRU5ErkJggg==",$n="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUfJSCRi5Frbm9dn19082KR/30AAABmzDOq/5vZ/9Gt/vt2AAAABnRSTlMAe5rJ7/4vxEp4AAAAWUlEQVQI12NgwARpiUpKYmkMDGzlZcbG6eUJDAzp5Slu5WUgkfLUsHKQSFpaRGsaUA2DsmvnjBAjFAZICsQQAylOZEBoBzKSzSCM9CS1MhCDjY2BISEBYTcAtgAcKSK2vuIAAAAASUVORK5CYII=",On="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAACBj39tfm1qj2RepFlu2VQAAQAAAAAAAABmyzOX/oSr/pus/pzk/98PGgtatC4CBAI1ENblAAAACHRSTlMA09/p9v77ig0SBcQAAABnSURBVBjTjY9LDsAgCEQRsR2xWu9/2hK/adJFYQG8wABEPwyAYzNnSatjjPAiviWLhPCqI1R7HBrQdCmGBrEETTmnUAq/QMm5dODHyAQOXXR1zLUGsIEI7lonMGfeHQTq9xw4P159AIxSBSC53km7AAAAAElFTkSuQmCC",Hn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4AZ2R4WqEMBCEFy1yiJQQ14gcIhIuFBFR+qPQ93+v66QMksrlTwMfkZ2ZZbMKTgVqYIDl3YAbeCM31lJP/Zul4MAEPJjBQGNDLGsz8PQ6aqLAP5PTdd1WlmU09mSKtdTDRgrkzspJPKq6RxMahfj9yhOzQEZwZAwfzrk1ox3MXibIN8hO4MAjeV72CemJGWblnRsOYOdoGw0jebB20BPAwKzUQPlrFhrXFw1Wagu9yuzZwINzVAZCURRL+gRr7Wd8Vtqg4Th/lsUmewyk9WQ/A7NiwJz5VV/GmO+MNjMrFvh/NPDMigHTaeJN09a27ZHRJmalBg54CgfvAGYSLpoHjlmpuAwFdzDy7oGS/qIpM9UPFGg1b1kUlssAAAAASUVORK5CYII=",qn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4AYWSQWq0QBCFCw0SRIK0PQ4hiIhEZBhEySLyewUPEMgqR/JIXiDhzz7kKKYePIZajEzDRxfV9dWU3SO6IiVWUsVxT5R75Y4gTmwNnUh4kCulUiuV8sjChDjmKtaUcHgmHsnNrMPh0IVhiMIjKZGzNXDoyhMzF7C89z2KtFGD+FoNXEUKZdgpaPM8P++cDXTtBDca7EyQK8+bXTufYBccuvLAG26UnqN1LCgI4g/lm7zTgSux4vk0J8rnKw3+m1//pBPbBrVyGZVNmiAITviEtm3t+D+2QcJx7GUxlN4594K4ZY75Xzh0JVWqnad6TdP0H+LRNBjHcYNDV5xS32qwaC4my7Lwn6guu5QoomgbdFmWDYhnM8E8zxscuhLzPWtKA/dGqUizrityX9M0YX+DQ1ciXobnP6vgfmTOM7Znnk70B58pPaEvx+epAAAAAElFTkSuQmCC",Un="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4AZ3RUWqEMBSF4ftQZAhSREQJIiIXpQwi+tSldkFdWPsLhyEE0ocKH2Fyzg1mNJ4KAQ1arTUeeJMH6qwTUJmCHjMcC6KKtbSIylzdXpl18J/k4fdTpUFmPLOOa9bGe+P4+n5RYYfLXuiMsAlXofBxK2QXpvwN/jqg+AY91vR+pStk+apZe0fEhhMXDhUmWXEoO9WNmrWAzvRPq7jnB2jvUGfWTEgPcJzZFTbZk/0Tnh5QI+af6lVGvq/Do2atwVL4VJ+3QrZo1lr4Pw5wzVqDWaV7SUvHrZDNmrWAHq7g0rphkS3LXDMBVqFGhxGT1gGdDFnWaab6BRmXRvbxDmYiAAAAAElFTkSuQmCC",jn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQElEQVR4AY2SQUrEQBBFS9CMNFEkhAQdYmiCIUgcZlYGc4VsBcGVF/AuWXme4F7RtXiVWF9+Y9MYtOHRTdX/NZWaEj2RYpQTJeEdK4fKPuA7DjSGXiQkU0qlUqxySmFMEsYsNSU8zEmK4OwdEbmkKCclYoGmolfWCGyenh1O0EJE2gXNWpFC2S0IGrCQ29EbdPCPAmEHmXIxByf8hDAPD71yzAnXypatbSgoAN8Pyju5h4deMUrqJk1z+0uBN+/XX+gxfoFK2QafUJO2aRq//Q+/QIx2wr+Kwq0rusrP/QKf9MTCtbQLf9U1wNvYnz3qug45S68kSvVXgbPbx3nvYPXNOI7cRPWySukK+DcGCvA+urqZ3RmGAbmSXjFK5rpwW8nhWVJP04TYa9/3uO/goVciDiPlZhW8c8ZAHuRSeqIv32FK/GYGL8YAAAAASUVORK5CYII=",Vn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4AZ3RUWqEMBSF4ftQZAihDCKKiAQJShERQx+6o662e2p/4TCEQF468BEm95yLovFr4PBEq9PjgTd5wBcZp6559AiIWDAq6KXV3aJMUMfDOsTf7Mf/XaFBAvYiE9W16b74/vl8UeBAlKOSmWAzUiXwcavMkrrFE9QXVJ+gx5q9XvUVivmqrr1jxIYLCacCs6y6S8psGNU1hw4Bu4JHuUB3pzJBHZcviLiKV9jkyO4vxHyBx1h+qlcY5b2Wj+raE0vlU33dKrNFXWsR/7EgqmtPBIXuIw+dt8osqGsOPaIGSeeGRbZiFtVxsAYeHSbMOgd0MhSzTp3mD4RaQX4aW3NMAAAAAElFTkSuQmCC",Qn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4AYWS0UqFQBCGhziImNRBRImDmUgiIaF0kWSP4AMEXXXTE/QiPpL3UdR19Crb/PAvLEtyFj5mmfn/cdxd0RUokbJXEsZYCZUd4D72NBG8wkKmlEqtVMoFhTFJmKuoKelBTVIkjbNE5IainJTIeZqaXjkg8fp+Z7GCjiLQbWgOihTKsCFowUZtoNef4HgDf4JMuTbe8n/Br8NDr5zxhBul52i3FBQE+xflmzzTA69ESmpPmubunwZfztc/6IncBrXSe7/QkK5tW3f8H7dBjHH8q6Kwt033V6Hb4JeeWPgsq42rugfYZ92psWscRwMPvZIo9bEGD2+F2YUnBizLwpeoXnYpbQM34kAB9peP58aueZ4NPPRKxPusaRoYG6UizbquyH1O04T4RA+8EvAwUr6sgjFnDuReLaUn+ANygUa7+9SCWgAAAABJRU5ErkJggg==",Wn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAD/AABnZ2f///8nFk05AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC",zn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAAD/AABmZmYA/wBD99DBAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=",_n="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAAul8NnZ2f////82iC9AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC",Jn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAAAul8NnZ2f/AAD7B+mqAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=",Gn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUBAAAAAABmzDNlyjJnZ2f///+6o7dfAAAAAXRSTlMAQObYZgAAAERJREFUeF6NjkEKADEIA51o///lJZfQxUsHITogWi8AvwZJuxmYa25xDooBLEwOWFTYAsYVhdorLZt9Ng9xCUTCUCQ2H3F4ANrZ2WNiAAAAAElFTkSuQmCC",Yn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAABmzDNmZmb/AAC8/wCMAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=",Kn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX/////AAD///8AAABBZmS3AAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=",Xn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR42q1RwQnAMAjMu5M4guAKXa4j5dUROo5tipSDcrFChUONd0di2m/hEGVOHDyIPufgwAFASDkpoSzmBrkJ2UMyR9LsJ3rvrqo3Rt1YMIMhhNnOxLMnoMFBxHyJAr2IOBFzA8U+6pLBdmEJTA0aMVjpDd6Loks0s5HZNwYx8tfZCZ0kll7ORffZAAAAAElFTkSuQmCC",Zn="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX///8ul8P///8AAACaqgkzAAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=",es="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAABBQcHFx4KISoNLToaVW4oKCgul8M4ODg7OzvBwcH///8uS/CdAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2NWw6AIBAD1eILZO5/XI0UAgm7H9tOsu0yGWAQSOoFijHOxOANGqm/LczpOaXs4gISrPZ+gc2+hO5w2xdwgOjBFUIF+sEJrhUl9JFr+badFwR+BfqlmGUJAAAAAElFTkSuQmCC",ts="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX///9mzDP///8AAACT0n1lAAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=",os="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAAECAIQIAgWLAsePA8oKCg4ODg6dB07OztmzDPBwcH///+rsf3XAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2NWw6AIBAD1eIDhbn/cTVSCCTsfmw7ybbLZIBBIKkXKKU0E4M3aKT+tjCn5xiziwuIsNr7BTb7ErrDZV/AAaIHdwgV6AcnuFaU0Eeu5dt2XiUyBjCQ2bIrAAAAAElFTkSuQmCC",is="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAC/AABrZQDiAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==",ns="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAC/AAD///8dAAApAABsAAAHAAA4AACQAAAsAABMCpCvAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=",ss="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAAA1/GhpCidAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==",rs="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAAA1/H///8AISUALzQAeokACAkAQEcAorYAMTcE9WFNAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=",as="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAABV/wErM5hwAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==",ls="iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAABV/wH///8NKAASOAAwkQADCgAZTABAwQATOwC5e3VGAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=",ds="R0lGODlhEAAQAKECAAAAAP8AAP///////yH5BAEKAAIALAAAAAAQABAAAAIvlI+pq+D9DAgUoFkPDlbs7lFZKIJOJJ3MyraoB14jFpOcVMpzrnF3OKlZYsMWowAAOw==",cs="R0lGODlhEAAQAJEAAAAAAP///9vb2////yH5BAEAAAMALAAAAAAQABAAAAIvnI+pq+D9DBAUoFkPFnbs7lFZKIJOJJ3MyraoB14jFpOcVMpzrnF3OKlZYsMWowAAOw==",pe={init(){return o.asap(()=>m.head&&(pe.el=o('link[rel="shortcut icon"]',m.head)),pe.initAsap)},set(e){if(pe.status=e,pe.el)return pe.el.href=pe[e],o.add(m.head,pe.el)},initAsap(){pe.el.type="image/x-icon";const{href:e}=pe.el;if(pe.isSFW=/ws\.ico$/.test(e),pe.default=e,pe.switch(),pe.status)return pe.set(pe.status)},switch(){let e={ferongr:[En,Tn,Dn,Rn,Bn,Ln],"xat-":[Nn,Pn,Mn,Fn,$n,On],Mayhem:[Hn,qn,Un,jn,Vn,Qn],"4chanJS":[Wn,zn,_n,Jn,Gn,Yn],Original:[Kn,Xn,Zn,es,ts,os],Metro:[is,ns,ss,rs,as,ls]};e=o.getOwn(e,l.favicon);const t=pe,i="data:image/png;base64,";let n=0;for(;e[n];)e[n]=i+e[n++];return[t.unreadDead,t.unreadDeadY,t.unreadSFW,t.unreadSFWY,t.unreadNSFW,t.unreadNSFWY]=e,t.update()},update(){return this.isSFW?(this.unread=this.unreadSFW,this.unreadY=this.unreadSFWY):(this.unread=this.unreadNSFW,this.unreadY=this.unreadNSFWY)},SFW:"//s.4cdn.org/image/favicon-ws.ico",NSFW:"//s.4cdn.org/image/favicon.ico",dead:`data:image/gif;base64,${ds}`,logo:`data:image/png;base64,${cs}`};const Ht={init(){if(!(c.SITE.software!=="yotsuba"||m.cookie.indexOf("pass_enabled=1")>=0)){if(l["Force Noscript Captcha"]&&D.jsEnabled){o.ready(this.noscript);return}l.captchaLanguage.trim()&&(["boards.4chan.org","boards.4channel.org"].includes(location.hostname)?o.onExists(w,"#captchaFormPart",e=>o.onExists(e,'iframe[src^="https://www.google.com/recaptcha/"]',this.iframe)):o.onExists(w,'iframe[src^="https://www.google.com/recaptcha/"]',this.iframe))}},noscript(){let e,t,i;if(!((t=o("#g-recaptcha"))&&(e=o("noscript",t.parentNode))))return;const n=o.el("span",{id:"captcha-forced-noscript"});o.replace(e,n),o.rm(t);const s=function(){n.innerHTML=e.textContent,this.iframe(o('iframe[src^="https://www.google.com/recaptcha/"]',n))};(i=o("#togglePostFormLink a, #form-link"))?o.on(i,"click",s):s()},iframe(e){let t;if(t=l.captchaLanguage.trim()){const i=/[?&]hl=/.test(e.src)?e.src.replace(/([?&]hl=)[^&]*/,"$1"+encodeURIComponent(t)):e.src+`&hl=${encodeURIComponent(t)}`;e.src!==i&&(e.src=i)}}},Ve={init(){if(m.cookie.indexOf("pass_enabled=1")>=0||!(this.isEnabled=!!o("#t-root")||!o.id("postForm")))return;const e=o.el("div",{className:"captcha-root"});this.nodes={root:e},o.addClass(d.nodes.el,"has-captcha","captcha-t"),o.after(d.nodes.com.parentNode,e)},moreNeeded(){},getThread(){return{boardID:c.BOARD.ID,threadID:d.posts[0].thread==="new"?"0":""+d.posts[0].thread}},setup(e){this.isEnabled&&(this.nodes.container||(this.nodes.container=o.el("div",{className:"captcha-container"}),o.prepend(this.nodes.root,this.nodes.container),Ve.currentThread=Ve.getThread(),Ve.currentThread.autoLoad=l["Auto-load captcha"]?"1":"0",o.global("setupTCaptcha",Ve.currentThread)),e&&o("#t-resp").focus())},destroy(){!this.isEnabled||!this.nodes.container||(o.global("destroyTCaptcha"),o.rm(this.nodes.container),delete this.nodes.container)},updateThread(){if(!this.isEnabled)return;const{boardID:e,threadID:t}=Ve.currentThread||{},i=Ve.getThread();(i.boardID!==e||i.threadID!==t)&&(Ve.destroy(),Ve.setup())},getOne(){let e,t={};if(this.nodes.container)for(var i of["t-response","t-challenge"])t[i]=o(`[name='${i}']`,this.nodes.container).value;return!t["t-response"]&&!((e=o("#t-msg"))&&/Verification not required/i.test(e.textContent))&&(t=null),t},setUsed(){this.isEnabled&&this.nodes.container&&o.global("TCaptchaClearChallenge")},occupied(){return!!this.nodes.container}};class De{constructor(t,i,n=!1){if(this.changes=[],this.onSync=this.onSync.bind(this),this.key=t,this.initData(l[this.key]),o.sync(this.key,this.onSync),n||this.clean(),!!i){var s=()=>{o.off(m,"4chanXInitFinished",s),this.sync=i};o.on(m,"4chanXInitFinished",s)}}initData(t){let i;if(this.data=t,this.data.boards){let n;({boards:i,lastChecked:n}=this.data),this.data["4chan.org"]={boards:i,lastChecked:n},delete this.data.boards,delete this.data.lastChecked}return this.data[c.SITE.ID]||(this.data[c.SITE.ID]={boards:S()})}save(t,i){return t(),this.changes.push(t),o.get(this.key,{boards:S()},n=>{if(!this.changes.length)return;const s=(n[this.key].version||0)>(this.data.version||0);if(s){this.initData(n[this.key]);for(t of this.changes)t()}return this.changes=[],this.data.version=(this.data.version||0)+1,o.set(this.key,this.data,()=>(s&&this.sync?.(),i?.()))})}forceSync(t){return o.get(this.key,{boards:S()},i=>{if((i[this.key].version||0)>(this.data.version||0)){this.initData(i[this.key]);for(var n of this.changes)n();this.sync?.()}return t?.()})}delete({siteID:t,boardID:i,threadID:n,postID:s},r){t||(t=c.SITE.ID),this.data[t]&&this.save(()=>{if(s){if(!this.data[t].boards[i]?.[n])return;delete this.data[t].boards[i][n][s],this.deleteIfEmpty({siteID:t,boardID:i,threadID:n})}else if(n){if(!this.data[t].boards[i])return;delete this.data[t].boards[i][n],this.deleteIfEmpty({siteID:t,boardID:i})}else delete this.data[t].boards[i]},r)}deleteIfEmpty({siteID:t,boardID:i,threadID:n}){this.data[t]&&(n?Object.keys(this.data[t].boards[i][n]).length||(delete this.data[t].boards[i][n],this.deleteIfEmpty({siteID:t,boardID:i})):Object.keys(this.data[t].boards[i]).length||delete this.data[t].boards[i])}set(t,i){this.save(()=>{this.setUnsafe(t)},i)}setUnsafe({siteID:t,boardID:i,threadID:n,postID:s,val:r}){t||(t=c.SITE.ID),this.data[t]||(this.data[t]={boards:S()});const a=this.data[t].boards;if(s!==void 0){let h;((h=a[i]||(a[i]=S()))[n]||(h[n]=S()))[s]=r}else n!==void 0?(a[i]||(a[i]=S()))[n]=r:a[i]=r}extend({siteID:t,boardID:i,threadID:n,postID:s,val:r},a){this.save(()=>{const h=this.get({siteID:t,boardID:i,threadID:n,postID:s,defaultValue:S()});for(var u in r){var f=r[u];typeof f>"u"?delete h[u]:h[u]=f}this.setUnsafe({siteID:t,boardID:i,threadID:n,postID:s,val:h})},a)}setLastChecked(t="lastChecked"){this.save(()=>{this.data[t]=Date.now()})}get({siteID:t,boardID:i,threadID:n,postID:s,defaultValue:r}){let a,h;if(t||(t=c.SITE.ID),a=this.data[t]?.boards[i]){let u;if(n==null)if(s!=null){for(u=0;u<a.length;u++)if(s in u){h=u[s];break}}else h=a;else(u=a[n])&&(h=s!=null?u[s]:u)}return h||r}clean(){let t,i;const n=c.SITE.ID;for(t in this.data[n].boards)this.deleteIfEmpty({siteID:n,boardID:t});const s=Date.now();if(s-2*Oe>=(i=this.data[n].lastChecked||0)||i>s){this.data[n].lastChecked=s;for(t in this.data[n].boards)this.ajaxClean(t)}}ajaxClean(t){const i=this,n=c.SITE.ID,s=c.SITE.urls.threadsListJSON?.({siteID:n,boardID:t});s&&o.cache(s,function(){if(this.status!==200)return;const r=c.SITE.urls.archiveListJSON?.({siteID:n,boardID:t});if(!r)return i.ajaxCleanParse(t,this.response);const a=this.response;o.cache(r,function(){this.status!==200&&(c.SITE.archivedBoardsKnown||this.status!==404)||i.ajaxCleanParse(t,a,this.response)})})}ajaxCleanParse(t,i,n){let s,r;const a=c.SITE.ID;if(!(s=this.data[a].boards[t]))return;const h=S();if(i)for(var u of i)for(var f of u.threads)r=f.no,r in s&&(h[r]=s[r]);if(n)for(r of n)r in s&&(h[r]=s[r]);this.data[a].boards[t]=h,this.deleteIfEmpty({siteID:a,boardID:t}),o.set(this.key,this.data)}onSync(t){(t.version||0)<=(this.data.version||0)||(this.initData(t),this.sync?.())}}De.keys=["hiddenThreads","hiddenPosts","hiddenPosterIds","lastReadPosts","yourPosts","watchedThreads","watcherLastModified","customTitles"];class rt{constructor(){this.keys=[]}push(t,i){t=`${t}`,this[t]||this.keys.push(t),this[t]=i}insert(t,i,n=(s,r)=>+s<+r){const s=t.toString();if(s in this)return this[s]=i,this.keys.indexOf(s);const r=this.keys.length;if(!r||n(this.lastKey(),t))return this.push(t,i),r;let a=this.keys.findIndex(h=>!n(h,t));return a===-1?this.push(t,i):(this[s]=i,this.keys.splice(a,0,s)),a}insertAt(t,i,n){this[t]=n,this.keys.splice(i,0,t)}rm(t){let i;t=`${t}`,(i=this.keys.indexOf(t))!==-1&&(this.keys.splice(i,1),delete this[t])}forEach(t){for(var i of this.keys)t(this[i])}get(t){if(t!=="keys")return o.getOwn(this,t)}lastKey(){return this.keys[this.keys.length-1]}last(){return this.keys.length?this[this.keys.length-1]:void 0}}class Ye{toString(){return this.ID}constructor(t,i){this.board=i,this.ID=+t,this.threadID=this.ID,this.boardID=this.board.ID,this.siteID=c.SITE.ID,this.fullID=`${this.board}.${this.ID}`,this.posts=new rt,this.isDead=!1,this.isHidden=!1,this.isSticky=!1,this.isClosed=!1,this.isArchived=!1,this.postLimit=!1,this.fileLimit=!1,this.lastPost=0,this.ipCount=void 0,this.json=null,this.OP=null,this.catalogView=null,this.nodes={root:null},this.board.threads.push(this.ID,this),c.threads.push(this.fullID,this)}setPage(t){let i;const{info:n,reply:s}=this.OP.nodes;if((i=o(".page-num",n))||(i=o.el("span",{className:"page-num"}),o.replace(s.parentNode.previousSibling,[o.tn(" "),i,o.tn(" ")])),i.title=`This thread is on page ${t} in the original index.`,i.textContent=`[${t}]`,this.catalogView)return this.catalogView.nodes.pageCount.textContent=t}setCount(t,i,n){if(!this.catalogView)return;const s=this.catalogView.nodes[`${t}Count`];return s.textContent=i,(n?o.addClass:o.rmClass)(s,"warning")}setStatus(t,i){const n=`is${t}`;if(this[n]!==i&&(this[n]=i,!!this.OP))return this.setIcon("Sticky",this.isSticky),this.setIcon("Closed",this.isClosed&&!this.isArchived),this.setIcon("Archived",this.isArchived)}setIcon(t,i){const n=t.toLowerCase();let s=o(`.${n}Icon`,this.OP.nodes.info);if(!!s===i)return;if(!i){o.rm(s.previousSibling),o.rm(s),this.catalogView&&o.rm(o(`.${n}Icon`,this.catalogView.nodes.icons));return}s=o.el("img",{src:`${c.SITE.Build.staticPath}${n}${c.SITE.Build.gifIcon}`,alt:t,title:t,className:`${n}Icon retina`}),c.BOARD.ID==="f"&&(s.style.cssText="height: 18px; width: 18px;");const r=t!=="Sticky"&&this.isSticky?o(".stickyIcon",this.OP.nodes.info):o(".page-num",this.OP.nodes.info)||this.OP.nodes.quote;if(o.after(r,[o.tn(" "),s]),!!this.catalogView)return(t==="Sticky"&&this.isClosed?o.prepend:o.add)(this.catalogView.nodes.icons,s.cloneNode())}kill(){return this.isDead=!0}collect(){let t=0;if(this.posts.forEach(function(i){return i.clones.length?t++:i.collect()}),!t)return c.threads.rm(this.fullID),this.board.threads.rm(this)}}class hs{toString(){return this.ID}constructor(t,i){this.thread=i,this.ID=this.thread.ID,this.board=this.thread.board;const{post:n}=this.thread.OP.nodes;this.nodes={root:t,thumb:o(".catalog-thumb",n),icons:o(".catalog-icons",n),postCount:o(".post-count",n),fileCount:o(".file-count",n),pageCount:o(".page-count",n),replies:null},this.thread.catalogView=this}}const us=function(e,t){const i=o.el("div",{className:"dialog",id:e});o.extend(i,t),i.style.cssText=l[`${e}.position`];const n=o(".move",i);o.on(n,"touchstart mousedown",fs);for(var s of n.children)s.tagName&&o.on(s,"touchstart mousedown",r=>r.stopPropagation());return i};var gt=function(){let e,t;return gt=class{static initClass(){e=null,t=null}constructor(n){this.setPosition=this.setPosition.bind(this),this.close=this.close.bind(this),this.keybinds=this.keybinds.bind(this),this.onFocus=this.onFocus.bind(this),this.addEntry=this.addEntry.bind(this),this.type=n,o.on(m,"AddMenuEntry",({detail:s})=>{if(s.type===this.type)return delete s.open,this.addEntry(s)}),this.entries=[]}makeMenu(){const n=o.el("div",{className:"dialog",id:"menu",tabIndex:0});return n.dataset.type=this.type,o.on(n,"click",s=>s.stopPropagation()),o.on(n,"keydown",this.keybinds),n}toggle(n,s,r){if(n.preventDefault(),n.stopPropagation(),e){const a=t;if(e.close(),a===s)return}if(this.entries.length)return this.open(s,r)}open(n,s){let r;const a=this.menu=this.makeMenu();e=this,t=n,this.entries.sort((h,u)=>h.order-u.order);for(r of this.entries)this.insertEntry(r,a,s);return o.addClass(t,"active"),o.on(m,"click CloseMenu",this.close),o.on(m,"scroll",this.setPosition),o.on(window,"resize",this.setPosition),o.after(n,a),this.setPosition(),r=o(".entry",a),this.focus(r),a.focus()}setPosition(){const n=this.menu.getBoundingClientRect(),s=t.getBoundingClientRect(),r=w.clientHeight,a=w.clientWidth,[h,u]=s.top+s.height+n.height<r?[`${s.bottom}px`,""]:["",`${r-s.top}px`],[f,g]=s.left+n.width<a?[`${s.left}px`,""]:["",`${a-s.right}px`];return o.extend(this.menu.style,{top:h,right:g,bottom:u,left:f}),this.menu.classList.toggle("left",g)}insertEntry(n,s,r){let a;if(typeof n.open=="function")try{if(!n.open(r))return}catch(u){D.handleErrors({message:`Error in building the ${this.type} menu.`,error:u});return}if(o.add(s,n.el),!!n.subEntries){(a=o(".submenu",n.el))&&o.rm(a),a=o.el("div",{className:"dialog submenu"});for(var h of n.subEntries)this.insertEntry(h,a,r);o.add(n.el,a)}}close(){return o.rm(this.menu),delete this.menu,o.rmClass(t,"active"),e=null,t=null,o.off(m,"click scroll CloseMenu",this.close),o.off(m,"scroll",this.setPosition),o.off(window,"resize",this.setPosition)}findNextEntry(n,s){const r=[...n.parentNode.children];return r.sort((a,h)=>a.style.order-h.style.order),r[r.indexOf(n)+s]}keybinds(n){let s,r,a,h=o(".focused",this.menu);for(;s=o(".focused",h);)h=s;switch(n.keyCode){case 27:t.focus(),this.close();break;case 13:case 32:h.click();break;case 38:(r=this.findNextEntry(h,-1))&&this.focus(r);break;case 40:(r=this.findNextEntry(h,1))&&this.focus(r);break;case 39:if((a=o(".submenu",h))&&(r=a.firstElementChild)){let u;for(;u=this.findNextEntry(r,-1);)r=u;this.focus(r)}break;case 37:(r=o.x('parent::*[contains(@class,"submenu")]/parent::*',h))&&this.focus(r);break;default:return}return n.preventDefault(),n.stopPropagation()}onFocus(n){return n.stopPropagation(),this.focus(n.target)}focus(n){let s,r;for(;s=o.x('parent::*/child::*[contains(@class,"focused")]',n);)o.rmClass(s,"focused");for(s of L(".focused",n))o.rmClass(s,"focused");if(o.addClass(n,"focused"),!(r=o(".submenu",n)))return;const a=r.getBoundingClientRect(),h=n.getBoundingClientRect(),u=w.clientHeight,f=w.clientWidth,[g,b]=h.top+a.height<u?["0px","auto"]:["auto","0px"],[I,T]=h.right+a.width<f-150?["100%","auto"]:["auto","100%"],{style:R}=r;return R.top=g,R.bottom=b,R.left=I,R.right=T}addEntry(n){return this.parseEntry(n),this.entries.push(n)}parseEntry(n){const{el:s,subEntries:r}=n;if(o.addClass(s,"entry"),o.on(s,"focus mouseover",this.onFocus),s.style.order=n.order||100,!r)return;o.addClass(s,"has-submenu");for(var a of r)this.parseEntry(a);const h=o.el("span",{className:"menu-indicator"});q.set(h,"caretRight"),o.add(s,h)}},gt.initClass(),gt}(),fs=function(e){let t;if(e.type==="mousedown"&&e.button!==0)return;e.preventDefault(),(t=e.type==="touchstart")&&(e=e.changedTouches[e.changedTouches.length-1]);const i=o.x('ancestor::div[contains(@class,"dialog")][1]',this),n=i.getBoundingClientRect(),s=w.clientHeight,r=w.clientWidth,a={id:i.id,style:i.style,dx:e.clientX-n.left,dy:e.clientY-n.top,height:s-n.height,width:r-n.width,screenHeight:s,screenWidth:r,isTouching:t};return[a.topBorder,a.bottomBorder]=l["Header auto-hide"]||!l["Fixed Header"]?[0,0]:l["Bottom Header"]?[0,x.bar.getBoundingClientRect().height]:[x.bar.getBoundingClientRect().height,0],t?(a.identifier=e.identifier,a.move=ps.bind(a),a.up=gs.bind(a),o.on(m,"touchmove",a.move),o.on(m,"touchend touchcancel",a.up)):(a.move=qt.bind(a),a.up=Ut.bind(a),o.on(m,"mousemove",a.move),o.on(m,"mouseup",a.up))},ps=function(e){for(var t of e.changedTouches)if(t.identifier===this.identifier){qt.call(this,t);return}},qt=function(e){const{clientX:t,clientY:i}=e;let n=t-this.dx;n=n<10?0:this.width-n<10?"":n/this.screenWidth*100+"%";let s=i-this.dy;s=s<10+this.topBorder?this.topBorder+"px":this.height-s<10+this.bottomBorder?"":s/this.screenHeight*100+"%";const r=n===""?0:"",a=s===""?this.bottomBorder+"px":"",{style:h}=this;h.left=n,h.right=r,h.top=s,h.bottom=a},gs=function(e){for(var t of e.changedTouches)if(t.identifier===this.identifier){Ut.call(this);return}},Ut=function(){if(this.isTouching?(o.off(m,"touchmove",this.move),o.off(m,"touchend touchcancel",this.up)):(o.off(m,"mousemove",this.move),o.off(m,"mouseup",this.up)),this.style.length===2)o.set(`${this.id}.position`,this.style.cssText);else{const{left:e,right:t,top:i,bottom:n}=this.style;let s="";e&&(s+=`left:${e};`),t&&(s+=`right:${t};`),i&&(s+=`top:${i};`),n&&(s+=`bottom:${n};`),o.set(`${this.id}.position`,s)}};const It=function({root:e,el:t,latestEvent:i,endEvents:n,height:s,width:r,cb:a,noRemove:h}){const u=e.getBoundingClientRect(),f={root:e,el:t,style:t.style,isImage:["IMG","VIDEO"].includes(t.nodeName),cb:a,endEvents:n,latestEvent:i,clientHeight:w.clientHeight,clientWidth:w.clientWidth,height:s,width:r,noRemove:h,clientX:(u.left+u.right)/2,clientY:(u.top+u.bottom)/2};return f.hover=ms.bind(f),f.hoverend=bs.bind(f),f.hover(f.latestEvent),new MutationObserver(function(){if(t.parentNode)return f.hover(f.latestEvent)}).observe(t,{childList:!0}),o.on(e,n,f.hoverend),o.x('ancestor::div[contains(@class,"inline")][1]',e)&&o.on(m,"keydown",f.hoverend),o.on(e,"mousemove",f.hover),f.workaround=function(g){if(!e.contains(g.target))return f.hoverend(g)},o.on(w,"mousemove",f.workaround)};It.padding=25;var ms=function(e){this.latestEvent=e;const t=(this.height||this.el.offsetHeight)+It.padding,i=this.width||this.el.offsetWidth,{clientX:n,clientY:s}=l["Follow Cursor"]?e:this,r=this.isImage?Math.max(0,s*(this.clientHeight-t)/this.clientHeight):Math.max(0,Math.min(this.clientHeight-t,s-120));let a=this.clientWidth/2;this.isImage||(a=Math.max(a,this.clientWidth-400));let h=(n<=a?n:this.clientWidth-n)+45;this.isImage&&(h=Math.min(h,this.clientWidth-i)),h+="px";const[u,f]=n<=a?[h,""]:["",h],{style:g}=this;return g.top=r+"px",g.left=u,g.right=f},bs=function(e){if(!(e.type==="keydown"&&e.keyCode!==13||e.target.nodeName==="TEXTAREA")&&(this.noRemove||o.rm(this.el),o.off(this.root,this.endEvents,this.hoverend),o.off(m,"keydown",this.hoverend),o.off(this.root,"mousemove",this.hover),o.off(w,"mousemove",this.workaround),this.cb))return this.cb.call(this)};const te={dialog:us,Menu:gt,hover:It,checkbox:function(e,t,i){i==null&&(i=l[e]);const n=o.el("label"),s=o.el("input",{type:"checkbox",name:e,checked:i});return o.add(n,[s,o.tn(` ${t}`)]),n}};var Re={init(){switch(c.VIEW){case"index":if(!l["Index Navigation"])return;break;case"thread":if(!l["Reply Navigation"])return;break;default:return}const e=o.el("span",{id:"navlinks"}),t=o.el("a",{textContent:"\u25B2",className:"navlinks-navlink navlink-prev",href:"javascript:;"}),i=o.el("a",{textContent:"\u25BC",className:"navlinks-navlink navlink-next",href:"javascript:;"});q.set(t,"arrowUpLong"),q.set(i,"arrowDownLong"),o.on(t,"click",this.prev),o.on(i,"click",this.next),o.add(e,[t,o.tn(" "),i]);var n=function(){return o.off(m,"4chanXInitFinished",n),o.add(m.body,e)};return o.on(m,"4chanXInitFinished",n)},prev(){return c.VIEW==="thread"?window.scrollTo(0,0):Re.scroll(-1)},next(){return c.VIEW==="thread"?window.scrollTo(0,m.body.scrollHeight):Re.scroll(1)},getThread(){if(c.VIEW==="thread")return c.threads.get(`${c.BOARD}.${c.THREADID}`).nodes.root;if(!o.hasClass(w,"catalog-mode"))for(var e of L(c.SITE.selectors.thread)){var t=F.threadFromRoot(e);if(!(t.isHidden&&!t.stub)&&x.getTopOf(e)>=-e.getBoundingClientRect().height)return e}},scroll(e){let t;m.activeElement?.blur();let i=Re.getThread();if(!i)return;const n=e===1?"following":"preceding";if(t=o.x(`${n}-sibling::${c.SITE.xpath.thread}[not(@hidden)][1]`,i)){const r=x.getTopOf(i);(e===1&&r<5||e===-1&&r>-5)&&(i=t)}const s=x.getTopOf(i)+w.clientHeight-m.body.getBoundingClientRect().bottom;if(s>0&&(m.body.style.marginBottom=`${s}px`),x.scrollTo(i),s>0&&!Re.haveExtra)return Re.haveExtra=!0,o.on(m,"scroll",Re.removeExtra)},removeExtra(){const e=w.clientHeight-m.body.getBoundingClientRect().bottom;return e>0?m.body.style.marginBottom=`${e}px`:(m.body.style.marginBottom="",delete Re.haveExtra,o.off(m,"scroll",Re.removeExtra))}},be={init(){if(!["index","thread"].includes(c.VIEW)||!l["Image Expansion"]&&!l["Image Hover"]&&!l["Image Hover in Catalog"]&&!l.Gallery||(o.sync("Allow Sound",function(i){l["Allow Sound"]=i,be.inputs&&(be.inputs.unmute.checked=i)}),o.sync("Default Volume",function(i){l["Default Volume"]=i,be.inputs&&(be.inputs.volume.value=i)}),l["Mouse Wheel Volume"]&&N.Post.push({name:"Mouse Wheel Volume",cb:this.node}),c.SITE.noAudio?.(c.BOARD)))return;l["Mouse Wheel Volume"]&&N.CatalogThread.push({name:"Mouse Wheel Volume",cb:this.catalogNode});const e=te.checkbox("Allow Sound","Allow Sound");e.title=ge.main["Images and Videos"]["Allow Sound"][1];const t=o.el("label",{title:"Default volume for videos."});return o.extend(t,{innerHTML:'<input name="Default Volume" type="range" min="0" max="1" step="0.01" value="'+oe(l["Default Volume"])+'"> Volume'}),this.inputs={unmute:e.firstElementChild,volume:t.firstElementChild},o.on(this.inputs.unmute,"change",o.cb.checked),o.on(this.inputs.volume,"change",o.cb.value),x.menu.addEntry({el:e,order:200}),x.menu.addEntry({el:t,order:201})},setup(e){return e.muted=!l["Allow Sound"],e.volume=l["Default Volume"],o.on(e,"volumechange",be.change)},change(){const{muted:e,volume:t}=this,i={"Allow Sound":!e,"Default Volume":t};for(var n in i){var s=i[n];l[n]===s&&delete i[n]}if(o.set(i),o.extend(l,i),be.inputs)return be.inputs.unmute.checked=!e,be.inputs.volume.value=t},node(){if(!c.SITE.noAudio?.(this.board))for(var e of this.files)e.isVideo&&(e.thumb&&o.on(e.thumb,"wheel",be.wheel.bind(x.hover)),o.on(o(".file-info",e.text)||e.link,"wheel",be.wheel.bind(e.thumbLink)))},catalogNode(){if(this.thread.OP.files[0]?.isVideo)return o.on(this.nodes.thumb,"wheel",be.wheel.bind(x.hover))},wheel(e){let t;if(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||!(t=o("video:not([data-md5])",this))||t.muted||!o.hasAudio(t))return;let i=t.volume+.1;return e.deltaY<0&&(i*=1.1),e.deltaY>0&&(i/=1.1),t.volume=o.minmax(i-.1,0,1),e.preventDefault()}};const vs={setupSync(e,t){t.addEventListener("playing",()=>{e.currentTime=t.currentTime%e.duration,e.play()}),t.addEventListener("play",()=>{e.currentTime=t.currentTime%e.duration,e.play()}),t.addEventListener("pause",()=>{e.pause()}),t.addEventListener("seeked",()=>{e.currentTime=t.currentTime%e.duration}),t.addEventListener("ratechange",()=>{e.currentTime=t.currentTime,e.playbackRate=t.playbackRate}),t.addEventListener("waiting",()=>{e.currentTime=t.currentTime%e.duration,e.pause()}),t.addEventListener("canplay",()=>{t.currentTime<.1&&(e.currentTime=0)},{once:!0})}};var Q={init(){if(this.enabled=l["Image Expansion"]&&["index","thread"].includes(c.VIEW))return this.EAI=o.el("a",{className:"expand-all-shortcut",title:"Expand All Images",href:"javascript:;"}),q.set(this.EAI,"expand","Expand All Images"),o.on(this.EAI,"click",this.cb.toggleAll),x.addShortcut("expand-all",this.EAI,520),o.on(m,"scroll visibilitychange",this.cb.playVideos),this.videoControls=o.el("span",{className:"video-controls"}),o.extend(this.videoControls,{innerHTML:' <a href="javascript:;" title="You can also contract the video by dragging it to the left.">contract</a>'}),N.Post.push({name:"Image Expansion",cb:this.node})},node(){if(!(!this.file||!this.file.isImage&&!this.file.isVideo)){if(o.on(this.file.thumbLink,"click",Q.cb.toggle),this.isClone){if(this.file.isExpanding)return Q.contract(this),Q.expand(this);if(this.file.isExpanded&&this.file.isVideo)return be.setup(this.file.fullImage),Q.setupVideoCB(this),Q.setupVideo(this,!this.origin.file.fullImage?.paused||this.origin.file.wasPlaying,this.file.fullImage.controls)}else if(Q.on&&!this.isHidden&&!this.isFetchedQuote&&(l["Expand spoilers"]||!this.file.isSpoiler)&&(l["Expand videos"]||!this.file.isVideo))return Q.expand(this)}},cb:{toggle(e){if(o.modifiedClick(e))return;const t=F.postFromNode(this),{file:i}=t;if(!(i.isExpanded&&ee.onControls(e)))return e.preventDefault(),!l.Autoplay&&i.fullImage?.paused?i.fullImage.play():Q.toggle(t)},toggleAll(){let e;o.event("CloseMenu");const t=Re.getThread(),i=function(n){const{file:s}=n;if(!(!s||!s.isImage&&!s.isVideo||!w.contains(n.nodes.root))&&!(Q.on&&(!l["Expand spoilers"]&&s.isSpoiler||!l["Expand videos"]&&s.isVideo||l["Expand from here"]&&x.getTopOf(s.thumb)<0||l["Expand thread only"]&&c.VIEW==="index"&&!t?.contains(s.thumb))))return o.queueTask(e,n)};return(Q.on=o.hasClass(Q.EAI,"expand-all-shortcut"))?(Q.EAI.className="contract-all-shortcut",Q.EAI.title="Contract All Images",q.set(Q.EAI,"shrink","Contract All Images"),e=Q.expand):(Q.EAI.className="expand-all-shortcut",Q.EAI.title="Expand All Images",q.set(Q.EAI,"expand","Expand All Images"),e=Q.contract),c.posts.forEach(function(n){for(n of[n,...n.clones])i(n)})},playVideos(){return c.posts.forEach(function(e){for(e of[e,...e.clones]){var{file:t}=e;if(!(!t||!t.isVideo||!t.isExpanded)){var i=t.fullImage,n=o.hasAudio(i)&&!i.muted||x.isNodeVisible(i);n&&t.wasPlaying?(delete t.wasPlaying,i.play()):!n&&!i.paused&&(t.wasPlaying=!0,i.pause())}}})},setFitness(){return o[this.checked?"addClass":"rmClass"](w,this.name.toLowerCase().replace(/\s+/g,"-"))}},toggle(e){if(!e.file.isExpanding&&!e.file.isExpanded){e.file.scrollIntoView=l["Scroll into view"],Q.expand(e);return}if(Q.contract(e),l["Advance on contract"]){let t=e.nodes.root;for(;(t=o.x("following::div[contains(@class,'postContainer')][1]",t))&&!(!o(".stub",t)&&t.offsetHeight!==0););if(t)return x.scrollTo(t)}},contract(e){let t,i,n,s;const{file:r}=e;(i=r.fullImage)&&(t=x.getTopOf(i)+i.getBoundingClientRect().height,n=m.body.clientHeight,{scrollY:s}=window),o.rmClass(e.nodes.root,"expanded-image"),o.rmClass(r.thumb,"expanding"),o.rm(r.videoControls),r.thumbLink.href=r.url,r.thumbLink.target="_blank";for(var a of["isExpanding","isExpanded","videoControls","wasPlaying","scrollIntoView"])delete r[a];if(i){if(w.contains(i)&&(t<=0?window.scrollBy(0,s-window.scrollY+m.body.clientHeight-n):x.scrollToIfNeeded(e.nodes.root),window.scrollX>0&&window.scrollBy(-window.scrollX,0)),o.off(i,"error",Q.error),ee.pushCache(i),r.isVideo){ee.pause(i);for(var h in Q.videoCB){var u=Q.videoCB[h];o.off(i,h,u)}}l["Restart when Opened"]&&ee.rewind(r.thumb),delete r.fullImage,o.queueTask(function(){if(!(r.isExpanding||r.isExpanded)&&(o.rmClass(i,"full-image"),!i.id))return o.rm(i)}),r.audio&&(r.audio.remove(),delete r.audio,r.audioSlider&&(r.audioSlider.remove(),delete r.audioSlider))}},expand(e,t){const{file:i}=e,{thumb:n,thumbLink:s,isVideo:r}=i;if(e.isHidden||i.isExpanding||i.isExpanded)return;let a;if(o.addClass(n,"expanding"),i.isExpanding=!0,i.fullImage?a=i.fullImage:ee.cache?.dataset.fileID===`${e.fullID}.${i.index}`?(a=i.fullImage=ee.popCache(),o.on(a,"error",Q.error),l["Restart when Opened"]&&a.id!=="ihover"&&ee.rewind(a),a.removeAttribute("id")):(a=i.fullImage=o.el(r?"video":"img"),a.dataset.fileID=`${e.fullID}.${i.index}`,o.on(a,"error",Q.error),a.src=t||i.url),a.className="full-image",o.after(n,a),r&&(i.videoControls||(i.videoControls=Q.videoControls.cloneNode(!0),o.add(i.text,i.videoControls)),s.removeAttribute("href"),s.removeAttribute("target"),a.loop=!0,be.setup(a),Q.setupVideoCB(e)),r?a.readyState>=a.HAVE_METADATA?Q.completeExpand(e):o.on(a,"loadedmetadata",()=>Q.completeExpand(e)):o.asap(()=>a.naturalHeight,()=>Q.completeExpand(e)),l["Enable sound posts"]&&l["Allow Sound"]){const h=i.name.match(/\[sound=([^\]]+)]/i);if(h){let u=decodeURIComponent(h[1]);u.startsWith("http")||(u=`https://${u}`);const f=o.el("audio",{src:u});be.setup(f),r&&(vs.setupSync(a,f),a.controls=!1),f.loop=!0,f.controls=l["Show Controls"],f.autoplay=l.Autoplay,o.after(a,f),i.audio=f}}},completeExpand(e){const{file:t}=e;if(!t.isExpanding)return;const i=x.getTopOf(t.thumb)+t.thumb.getBoundingClientRect().height,n=m.body.clientHeight,{scrollY:s}=window;if(o.addClass(e.nodes.root,"expanded-image"),o.rmClass(t.thumb,"expanding"),t.isExpanded=!0,delete t.isExpanding,w.contains(e.nodes.root)&&i<=0&&window.scrollBy(0,s-window.scrollY+m.body.clientHeight-n),t.scrollIntoView){delete t.scrollIntoView;const r=Math.min(w.clientHeight-t.fullImage.getBoundingClientRect().bottom-25,x.getBottomOf(t.fullImage));r<0&&window.scrollBy(0,Math.min(-r,x.getTopOf(t.fullImage)))}if(t.isVideo)return Q.setupVideo(e,l.Autoplay,l["Show Controls"])},setupVideo(e,t,i){const{audio:n}=e.file,s=e.file.fullImage;if(!t&&!n){s.controls=i;return}s.controls=!1,o.asap(()=>w.contains(s),function(){!m.hidden&&x.isNodeVisible(s)?s.play():e.file.wasPlaying=!0}),s.controls=i&&!n},videoCB:function(){let e=!1;return{mouseover(){return e=!1},mousedown(t){if(t.button===0)return e=!0},mouseup(t){if(t.button===0)return e=!1},mouseout(t){if((t.buttons&1||e)&&t.clientX<=this.getBoundingClientRect().left)return Q.toggle(F.postFromNode(this))}}}(),setupVideoCB(e){for(var t in Q.videoCB){var i=Q.videoCB[t];o.on(e.file.fullImage,t,i)}if(e.file.videoControls)return o.on(e.file.videoControls.firstElementChild,"click",()=>Q.toggle(e))},error(){const e=F.postFromNode(this);if(o.rm(this),delete e.file.fullImage,!(!e.file.isExpanding&&!e.file.isExpanded))return ee.decodeError(this,e.file)||ee.isFromArchive(this)?Q.contract(e):ee.error(this,e,e.file,10*ie,function(t){if((e.file.isExpanding||e.file.isExpanded)&&(Q.contract(e),t))return Q.expand(e,t)})},menu:{init(){if(!Q.enabled)return;const e=o.el("span",{textContent:"Image Expansion",className:"image-expansion-link"}),{createSubEntry:t}=Q.menu,i=[];for(var n in ge.imageExpansion){var s=ge.imageExpansion[n];i.push(t(n,s[1]))}return x.menu.addEntry({el:e,order:105,subEntries:i})},createSubEntry(e,t){const i=te.checkbox(e,e);i.title=t;const n=i.firstElementChild;return["Fit width","Fit height"].includes(e)&&o.on(n,"change",Q.cb.setFitness),o.event("change",null,n),o.on(n,"change",o.cb.checked),{el:i}}}};class ye{toString(){return this.ID}constructor(t,i,n,s={}){if(t===void 0&&i===void 0&&n===void 0)return;if(this.root=t,this.thread=i,this.board=n,o.extend(this,s),this.ID=+t.id.match(/\d*$/)[0],this.postID=this.ID,this.threadID=this.thread.ID,this.boardID=this.board.ID,this.siteID=c.SITE.ID,this.fullID=`${this.board}.${this.ID}`,this.context=this,this.isReply=this.ID!==this.threadID,t.dataset.fullID=this.fullID,this.nodes=this.parseNodes(t),!this.isReply){this.thread.OP=this;for(var r of["isSticky","isClosed","isArchived"]){var a;(a=c.SITE.selectors.icons[r])&&(this.thread[r]=!!o(a,this.nodes.info))}this.thread.isArchived&&(this.thread.isClosed=!0,this.thread.kill())}const h=this.nodes.name?.textContent,u=this.nodes.tripcode?.textContent;if(this.info={subject:this.nodes.subject?.textContent||void 0,name:h,email:this.nodes.email?decodeURIComponent(this.nodes.email.href.replace(/^mailto:/,"")):void 0,tripcode:u,uniqueID:this.nodes.uniqueID?.textContent,capcode:this.nodes.capcode?.textContent.replace("## ",""),pass:this.nodes.pass?.title.match(/\d*$/)[0],flagCode:this.nodes.flag?.className.match(/flag-(\w+)/)?.[1].toUpperCase(),flagCodeTroll:this.nodes.flag?.className.match(/bfl-(\w+)/)?.[1].toUpperCase(),flag:this.nodes.flag?.title,date:this.nodes.date?c.SITE.parseDate(this.nodes.date):void 0,nameBlock:l.Anonymize?"Anonymous":`${h||""} ${u||""}`.trim()},this.info.capcode&&(this.info.nameBlock+=` ## ${this.info.capcode}`),this.info.uniqueID&&(this.info.nameBlock+=` (ID: ${this.info.uniqueID})`),this.parseComment(),this.parseQuotes(),this.parseFiles(),this.isDead=!1,this.isHidden=!1,this.clones=[],c.posts.get(this.fullID)){this.isRebuilt=!0,this.clones=c.posts.get(this.fullID).clones;for(var f of this.clones)f.origin=this}!this.isFetchedQuote&&this.ID>this.thread.lastPost&&(this.thread.lastPost=this.ID),this.ID<this.thread.lastPost&&c.VIEW==="thread"?(this.board.posts.insert(this.ID,this),this.thread.posts.insert(this.ID,this),c.posts.insert(this.fullID,this,g=>+g.split(".")[1]<this.ID)):(this.board.posts.push(this.ID,this),this.thread.posts.push(this.ID,this),c.posts.push(this.fullID,this))}parseNodes(t){const i=c.SITE.selectors,n=o(i.post,t)||t,s=o(i.infoRoot,n),r={root:t,bottom:this.isReply||!c.SITE.isOPContainerThread?t:o(i.opBottom,t),post:n,info:s,comment:o(i.comment,n),quotelinks:[],archivelinks:[],embedlinks:[],backlinks:n.getElementsByClassName("backlink"),uniqueIDRoot:void 0,uniqueID:void 0};for(var a in i.info){var h=i.info[a];r[a]=o(h,s)}return c.SITE.parseNodes?.(this,r),r.uniqueIDRoot||(r.uniqueIDRoot=r.uniqueID),r}parseComment(){let t;return this.nodes.comment.normalize(),this.nodes.commentClean=t=this.nodes.comment.cloneNode(!0),c.SITE.cleanComment?.(t),this.info.comment=this.nodesToText(t)}commentDisplay(){const t=this.nodes.commentClean.cloneNode(!0);return!l["Remove Spoilers"]&&!l["Reveal Spoilers"]&&this.cleanSpoilers(t),c.SITE.cleanCommentDisplay?.(t),this.nodesToText(t).trim().replace(/\s+$/gm,"")}commentOrig(){const t=this.nodes.commentClean.cloneNode(!0);return c.SITE.insertTags?.(t),this.nodesToText(t)}nodesToText(t){let i,n="";const s=o.X(".//br|.//text()",t);let r=0;for(;i=s.snapshotItem(r++);)n+=i.data||`
`;return n}cleanSpoilers(t){const i=L(c.SITE.selectors.spoiler,t);for(var n of i)o.replace(n,o.tn("[spoiler]"))}parseQuotes(){this.quotes=[];for(var t of L(c.SITE.selectors.quotelink,this.nodes.comment))this.parseQuote(t)}parseQuote(t){const i=t.href.match(c.SITE.regexp.quotelink);if(!i&&(!this.isClone||!t.dataset.postID)||(this.nodes.quotelinks.push(t),this.isClone))return;const n=`${i[1]}.${i[3]}`;this.quotes.includes(n)||this.quotes.push(n)}parseFiles(){let t;this.files=[];const i=this.fileRoots();let n=0;for(let r=0;r<i.length;r++){var s=i[r];(t=this.parseFile(s))&&(t.index=n++,t.docIndex=r,this.files.push(t))}if(this.files.length)return this.file=this.files[0]}fileRoots(){if(c.SITE.selectors.multifile){const t=L(c.SITE.selectors.multifile,this.nodes.root);if(t.length)return t}return[this.nodes.root]}parseFile(t){const i={isDead:!1};for(var n in c.SITE.selectors.file){var s=c.SITE.selectors.file[n];i[n]=o(s,t)}if(i.thumbLink=i.thumb?.parentNode,!(i.text&&i.link)||!c.SITE.parseFile(this,i))return;o.extend(i,{url:i.link.href,isImage:o.isImage(i.link.href),isVideo:o.isVideo(i.link.href)});let r=+i.size.match(/[\d.]+/)[0],a=["B","KB","MB","GB"].indexOf(i.size.match(/\w+$/)[0]);for(;a-- >0;)r*=1024;return i.sizeInBytes=r,i}kill(t=!1,i=0){let n;if(t){if(this.isDead||this.files[i].isDead)return;this.files[i].isDead=!0,o.addClass(this.nodes.root,"deleted-file")}else{if(this.isDead)return;this.isDead=!0,o.rmClass(this.nodes.root,"deleted-file"),o.addClass(this.nodes.root,"deleted-post")}if((n=o("strong.warning",this.nodes.info))||(n=o.el("strong",{className:"warning"}),o.after(o("input",this.nodes.info),n)),n.textContent=t?"[File deleted]":"[Deleted]",!this.isClone){for(var s of this.clones)s.kill(t,i);if(!t)for(var r of F.allQuotelinksLinkingTo(this))o.hasClass(r,"deadlink")||(o.add(r,ye.deadMark.cloneNode(!0)),o.addClass(r,"deadlink"))}}markAsFromArchive(){let t=o("strong.warning",this.nodes.info);if(t||(t=o.el("strong",{className:"warning"}),o.after(o("input",this.nodes.info),t)),t.textContent="[Deleted, restored from external archive]",o.addClass(this.nodes.root,"from-archive"),!this.isClone){for(var i of this.clones)i.markAsFromArchive();for(var n of F.allQuotelinksLinkingTo(this))o.addClass(n,"from-archive-link")}}resurrect(){this.isDead=!1,o.rmClass(this.nodes.root,"deleted-post","from-archive");const t=o("strong.warning",this.nodes.info);if(this.files.some(s=>s.isDead)?(o.addClass(this.nodes.root,"deleted-file"),t.textContent="[File deleted]"):o.rm(t),!this.isClone){for(var i of this.clones)i.resurrect();for(var n of F.allQuotelinksLinkingTo(this))o.hasClass(n,"deadlink")&&o.rm(o(".qmark-dead",n)),o.rmClass(n,"deadlink","from-archive-link")}}collect(){c.posts.rm(this.fullID),this.thread.posts.rm(this),this.board.posts.rm(this)}addClone(t,i){return N.Post.execute(this),new at(this,t,i)}rmClone(t){this.clones.splice(t,1);for(var i of this.clones.slice(t))i.nodes.root.dataset.clone=t++}setCatalogOP(t){this.nodes.root.classList.toggle("catalog-container",t),this.nodes.root.classList.toggle("opContainer",!t),this.nodes.post.classList.toggle("catalog-post",t),this.nodes.post.classList.toggle("op",!t),this.nodes.post.style.left=this.nodes.post.style.right=null}}ye.deadMark=(()=>{const e=document.createElement("span");return e.textContent="\xA0(Dead)",e.className="qmark-dead",e})();class at extends ye{constructor(t,i,n){super(),this.isClone=!0;let s,r,a;this.origin=t,this.context=i;for(a of["ID","postID","threadID","boardID","siteID","fullID","board","thread","info","quotes","isReply"])this[a]=this.origin[a];const{nodes:h}=this.origin,u=n?this.cloneWithoutVideo(h.root):h.root.cloneNode(!0);for(var f of[u,...L("[id]",u)])f.id+=`_${at.suffix}`;at.suffix++;for(var g of L(".inline",u))o.rm(g);for(var b of L(".inlined",u))o.rmClass(b,"inlined");this.nodes=this.parseNodes(u),u.hidden=!1,o.rmClass(u,"forwarded"),o.rmClass(this.nodes.post,"highlight"),this.isReply||(this.setCatalogOP(!1),o.rm(o(".catalog-link",this.nodes.post)),o.rm(o(".catalog-stats",this.nodes.post)),o.rm(o(".catalog-replies",this.nodes.post))),this.parseQuotes(),this.quotes=[...this.origin.quotes],this.files=[],this.origin.files.length&&(r=this.fileRoots());for(var I of this.origin.files){s={...I};var T=r[s.docIndex];for(a in c.SITE.selectors.file){var R=c.SITE.selectors.file[a];s[a]=o(R,T)}s.thumbLink=s.thumb?.parentNode,s.thumbLink&&(s.fullImage=o(".full-image",s.thumbLink)),s.videoControls=o(".video-controls",s.text),s.videoThumb&&(s.thumb.muted=!0),this.files.push(s)}return this.files.length&&(this.file=this.files[0],this.file.thumb&&n&&Q.contract(this)),this.origin.isDead&&(this.isDead=!0),u.dataset.clone=this.origin.clones.push(this)-1,this}cloneWithoutVideo(t){if(t.tagName==="VIDEO"&&!t.dataset.md5)return[];if(t.nodeType===Node.ELEMENT_NODE&&o("video",t)){const n=t.cloneNode(!1);for(var i of t.childNodes)o.add(n,this.cloneWithoutVideo(i));return n}else return t.cloneNode(!0)}}at.suffix=0;var fe={cbs:[],init(){let e;if(c.SITE.software!=="yotsuba")return;const t=Date.now();if(t-2*Oe>=(e=l.boardConfig.lastChecked||0)||e>t)return o.ajax(`${location.protocol}//a.4cdn.org/boards.json`,{onloadend:this.load});{const{boards:i}=l.boardConfig;return this.set(i)}},load(){let e;if(this.status===200&&this.response&&this.response.boards){e=S();for(var t of this.response.boards)e[t.board]=t;o.set("boardConfig",{boards:e,lastChecked:Date.now()})}else{({boards:e}=l.boardConfig);const i=(()=>{switch(this.status){case 0:return"Connection Error";case 200:return"Invalid Data";default:return`Error ${this.statusText} (${this.status})`}})();new G("warning",`Failed to load board configuration. ${i}`,20)}return fe.set(e)},set(e){this.boards=e;for(var t in c.boards){var i=c.boards[t];i.config=this.boards[t]||{}}for(var n of this.cbs)o.queueTask(n)},ready(e){return this.boards?e():this.cbs.push(e)},sfwBoards(e){return(()=>{const t=[],i=this.boards||l.boardConfig.boards;for(var n in i){var s=i[n];!!s.ws_board===e&&t.push(n)}return t})()},isSFW(e){return!!(this.boards||l.boardConfig.boards)[e]?.ws_board},domain(e){return"boards.4chan.org"},isArchived(e){const t=(this.boards||l.boardConfig.boards)[e];return!t||t.is_archived},noAudio(e){if(c.SITE.software!=="yotsuba")return!1;const t=this.boards||l.boardConfig.boards;return t&&t[e]&&!t[e].webm_audio},title(e){return(this.boards||l.boardConfig.boards)?.[e]?.title||""}},he={init(){if(!(!["index","thread"].includes(c.VIEW)||!l.Menu))return this.button=o.el("a",{className:"menu-button",href:"javascript:;"}),q.set(this.button,"caretDown"),this.menu=new te.Menu("post"),N.Post.push({name:"Menu",cb:this.node}),N.CatalogThread.push({name:"Menu",cb:this.catalogNode})},node(){if(this.isClone){const e=o(".menu-button",this.nodes.info);o.rmClass(e,"active"),o.rm(o(".dialog",this.nodes.info)),he.makeButton(this,e);return}return o.add(this.nodes.info,he.makeButton(this))},catalogNode(){return o.after(this.nodes.icons,he.makeButton(this.thread.OP))},makeButton(e,t){return t||(t=he.button.cloneNode(!0)),o.on(t,"click",function(i){return he.menu.toggle(i,this,e)}),t}},Ie={recursives:new Map,init(){["index","thread"].includes(c.VIEW)&&N.Post.push({name:"Recursive",cb:this.node})},node(){if(!(this.isClone||this.isFetchedQuote))for(var e of this.quotes){const i=Ie.recursives.get(e);if(i)for(var t=0;t<i.recursives.length;t++)i.recursives[t](this,...i.args[t])}},add(e,t,...i){let n=Ie.recursives.get(t.fullID);n||(n={recursives:[],args:[]},Ie.recursives.set(t.fullID,n)),n.recursives.push(e),n.args.push(i)},rm(e,t){const i=Ie.recursives.get(t.fullID);if(i)for(let n=i.recursives.length-1;n>=0;--n)i.recursives[n]===e&&(i.recursives.splice(n,1),i.args.splice(n,1))},apply(e,t,...i){const{fullID:n}=t;c.posts.forEach(function(s){s.quotes.includes(n)&&e(s,...i)})},applyAndAdd(e,t,...i){Ie.apply(e,t,...i),this.add(e,t,...i)}},O={db:void 0,posterIdDb:void 0,init(){!["index","thread"].includes(c.VIEW)||!l["Reply Hiding Buttons"]&&!(l.Menu&&l["Reply Hiding Link"])||(l["Reply Hiding Buttons"]&&o.addClass(w,"reply-hide"),this.db=new De("hiddenPosts"),this.posterIdDb=new De("hiddenPosterIds"),N.Post.push({name:"Reply Hiding",cb:this.node}))},isHidden(e,t,i){return!!(O.db&&O.db.get({boardID:e,threadID:t,postID:i}))},node(){if(!this.isReply||this.isClone||this.isFetchedQuote)return;let e=O.db.get({boardID:this.board.ID,threadID:this.thread.ID,postID:this.ID});if(!e&&this.info.uniqueID){const n=O.posterIdDb.get({boardID:this.board.ID,threadID:this.thread.ID});n&&this.info.uniqueID in n&&(e=n[this.info.uniqueID],e.thisPost=!0)}if(e&&(e.thisPost?O.hide(this,e.makeStub,e.hideRecursively,"Hidden manually"):O.hideRecursive(this,e.makeStub)),!l["Reply Hiding Buttons"])return;const t=O.makeButton(this,"hide"),i=c.SITE.selectors.sideArrows;if(i){const n=o(i,this.nodes.root);o.replace(n.firstChild,t),n.className="replacedSideArrows"}else o.prepend(this.nodes.info,t)},menu:{post:void 0,async init(){if(!["index","thread"].includes(c.VIEW)||!l.Menu||!l["Reply Hiding Link"])return;await new Promise(u=>fe.ready(u));let e=o.el("a",{textContent:"Apply",href:"javascript:;"});o.on(e,"click",O.menu.hide);const t=[{el:e},{el:te.checkbox("thisPost","This post",!0)},{el:te.checkbox("replies","Hide replies",l["Recursive Hiding"])},{el:te.checkbox("makeStub","Make stub",l.Stubs)}];c.BOARD.config.user_ids&&t.push({el:te.checkbox("byId","By poster id",!1)}),he.menu.addEntry({el:o.el("div",{className:"hide-reply-link",textContent:"Hide"}),order:20,open(u){return!u.isReply||u.isClone||u.isHidden?!1:(O.menu.post=u,!0)},subEntries:t});const i=o.el("a",{textContent:"Apply",href:"javascript:;"});o.on(i,"click",O.menu.show);const n=te.checkbox("thisPost","This post",!1),s=te.checkbox("replies","Show replies",!1),r=o.el("a",{textContent:"Hide stub",href:"javascript:;"});o.on(r,"click",O.menu.hideStub);const a=[{el:i},{el:n},{el:s}];let h;c.BOARD.config.user_ids&&(h=te.checkbox("byId","By poster id",!1),a.push({el:h})),he.menu.addEntry({el:o.el("div",{className:"show-reply-link",textContent:"Show"}),order:20,open(u){if(!u.isReply||u.isClone||!u.isHidden)return!1;const f=O.db.get({boardID:u.board.ID,threadID:u.thread.ID,postID:u.ID});return f?(O.menu.post=u,n.firstChild.checked=u.isHidden,s.firstChild.checked=f.hideRecursively??l["Recursive Hiding"],h&&(h.firstChild.checked=f.byId),!0):!1},subEntries:a}),he.menu.addEntry({el:r,order:15,open(u){return!u.isReply||u.isClone||!u.isHidden||!O.db.get({boardID:u.board.ID,threadID:u.thread.ID,postID:u.ID})?!1:O.menu.post=u}})},hide(){const e=this.parentNode,t=o("input[name=thisPost]",e).checked,i=o("input[name=replies]",e).checked,n=o("input[name=makeStub]",e).checked,s=o("input[name=byId]",e)?.checked,{post:r}=O.menu;if(!(!t&&!i&&!s)){if(t?O.hide(r,n,i,"Hidden manually"):i&&O.hideRecursive(r,n),s){const a=`Hidden because of poster ID ${r.info.uniqueID}`;c.posts.forEach(u=>{u.info.uniqueID===r.info.uniqueID&&u!==r&&(O.hide(u,n,i,a),O.saveHiddenState(u,!0,t,n,i,s))});const h=O.posterIdDb.get({boardID:r.boardID,threadID:r.threadID,defaultValue:S()});r.info.uniqueID in h||(h[r.info.uniqueID]={makeStub:n,hideRecursively:i},O.posterIdDb.set({boardID:r.boardID,threadID:r.threadID,val:h}))}O.saveHiddenState(r,!0,t,n,i,s),o.event("CloseMenu")}},show(){const e=this.parentNode,t=o("input[name=thisPost]",e).checked,i=o("input[name=replies]",e).checked,n=o("input[name=byId]",e)?.checked,{post:s}=O.menu,{boardID:r,threadID:a,postID:h}=s;if(!t&&!i&&!n)return;if(t?O.show(s,i):i&&(Ie.apply(O.show,s,!0),Ie.rm(O.hide,s)),n){c.posts.forEach(g=>{if(g.info.uniqueID===s.info.uniqueID&&g!==s){O.show(g,i);const b=O.db.get({boardID:r,threadID:a,postID:h});b&&O.saveHiddenState(s,!(t&&i),!t,b.makeStub,!i,n)}});const f=O.posterIdDb.get({boardID:r,threadID:a});f&&s.info.uniqueID in f&&(delete f[s.info.uniqueID],O.posterIdDb.set({boardID:r,threadID:a,val:f}))}const u=O.db.get({boardID:r,threadID:a,postID:h});u&&O.saveHiddenState(s,!(t&&i),!t,u.makeStub,!i,n),o.event("CloseMenu")},hideStub(){let e;const{post:t}=O.menu;(e=O.db.get({boardID:t.board.ID,threadID:t.thread.ID,postID:t.ID}))&&(O.show(t,e.hideRecursively),O.hide(t,!1,e.hideRecursively),O.saveHiddenState(t,!0,!0,!1,e.hideRecursively,e.byId)),o.event("CloseMenu")}},makeButton(e,t){const i=o.el("span",{className:"stub-icon"}),n=o.el("a",{className:`${t}-post-button ${t}-reply-button`,href:"javascript:;"});return q.set(i,t==="hide"?"squareMinus":"squarePlus"),o.add(n,i),o.on(n,"click",O.toggle),n},saveHiddenState(e,t,i,n,s,r){const a={boardID:e.board.ID,threadID:e.thread.ID,postID:e.ID};t?(a.val={thisPost:i!==!1,makeStub:n,hideRecursively:s,byId:r},O.db.set(a)):O.db.delete(a)},toggle(){const e=F.postFromNode(this);e.isHidden?O.show(e):O.hide(e,void 0,void 0,"Hidden manually"),O.saveHiddenState(e,e.isHidden)},hide(e,t=l.Stubs,i=l["Recursive Hiding"],n){if(e.isHidden)return;e.isHidden=!0,i&&O.hideRecursive(e,t);for(var s of F.allQuotelinksLinkingTo(e))o.addClass(s,"filtered");if(!t){e.nodes.root.hidden=!0;return}e.nodes.stub=o.el("div",{className:"stub"});const r=O.makeButton(e,"show");o.add(r,o.el("span",{className:"stub-name",textContent:e.info.nameBlock}));let a=e.filterResults?.reasons||[];if(n&&(a=[...a,n]),l["Filter Reason"]&&a.length){const h=o.el("span",{className:"stub-reasons"});o.add(h,a.map(u=>o.el("span",{className:"stub-reason",textContent:u}))),r.appendChild(h)}o.add(e.nodes.stub,r),!l["Filter Reason"]&&a&&(e.nodes.stub.title=a.join(" & ")),l.Menu&&o.add(e.nodes.stub,he.makeButton(e)),o.prepend(e.nodes.root,e.nodes.stub)},hideRecursive(e,t){Ie.applyAndAdd(O.hide,e,t,!0,`Hidden recursively from ${e.ID}`)},show(e,t=l["Recursive Hiding"]){e.nodes.stub?(o.rm(e.nodes.stub),delete e.nodes.stub):e.nodes.root.hidden=!1,e.isHidden=!1,t&&(Ie.apply(O.show,e,!0),Ie.rm(O.hide,e));for(var i of F.allQuotelinksLinkingTo(e))o.rmClass(i,"filtered")}},Ae={INTERVAL:3e4,init(){if((["index","thread","archive"].includes(c.VIEW)&&["Show","Both","BothRelativeFirst"].includes(l.RelativeTime)||p.enabled)&&(this.flush(),o.on(m,"visibilitychange PostsInserted",this.flush)),l.RelativeTime!=="No")return N.Post.push({name:"Relative Post Dates",cb:this.node})},node(){if(!this.info.date)return;const e=this.nodes.date;if(l.RelativeTime==="Hover"){o.on(e,"mouseover",()=>Ae.hover(this));return}if(!this.isClone)return l.RelativeTime==="Show"&&(e.dataset.fullTime=e.textContent,e.title=e.textContent),Ae.update(this)},relative(e,t,i,n){let s,r;if((s=e/Ge)>=1){const h=t.getFullYear()-i.getFullYear();let u=t.getMonth()-i.getMonth();const f=t.getDate()-i.getDate();h>1?(s=h-(u<0||u===0&&f<0),r="year"):h===1&&(u>0||u===0&&f>=0)?(s=h,r="year"):(u=u+12*h)>1?(s=u-(f<0),r="month"):u===1&&f>=0?(s=u,r="month"):r="day"}else(s=e/Oe)>=1?r="hour":(s=e/Le)>=1?r="minute":(s=Math.max(0,e)/ie,r="second");const a=Math.round(s);return n?r=r==="month"?"mo":r[0]:a!==1&&(r+="s"),n?`${a}${r}`:`${a} ${r} ago`},stale:[],timeout:void 0,flush(){if(m.hidden)return;const e=new Date;for(var t of Ae.stale)Ae.update(t,e);Ae.stale=[],clearTimeout(Ae.timeout),Ae.timeout=setTimeout(Ae.flush,Ae.INTERVAL)},hover(e){const{date:t}=e.info,i=new Date,n=i-t;e.nodes.date.title=Ae.relative(n,i,t)},update(e,t=new Date){let i,n;const s=e instanceof ye;s?({date:n}=e.info,i=!1):(n=new Date(+e.dataset.utc),i=!!e.dataset.abbrev);const r=t-n,a=Ae.relative(r,t,n,i);if(s)for(var h of[e].concat(e.clones)){const u=h.nodes.date;if(l.RelativeTime==="Show")u.textContent=a;else{let f=u.dataset.fullTime;f||(f=u.textContent,u.dataset.fullTime=f),u.textContent=l.RelativeTime==="Both"?`${f}, ${a}`:`${a}, ${f}`}}else e.firstChild.textContent=a;Ae.setOwnTimeout(r,e)},setOwnTimeout(e,t){const i=e<Le?ie-(e+ie/2)%ie:e<Oe?Le-(e+Le/2)%Le:e<Ge?Oe-(e+Oe/2)%Oe:Ge-(e+Ge/2)%Ge;setTimeout(Ae.markStale,i,t)},markStale(e){Ae.stale.includes(e)||e instanceof ye&&!c.posts.get(e.fullID)||e instanceof Element&&!w.contains(e)||Ae.stale.push(e)}},As=`<div class="move">
  Thread Watcher <a class="refresh" title="Check threads" href="javascript:;" title="refresh"></a>
  <span id="watcher-status"></span>
  <a class="menu-button" href="javascript:;"></a>
  <a class="close" href="javascript:;">\xD7</a>
</div>
<div id="watched-threads"></div>`;class tt{toString(){return this.ID}constructor(t){this.ID=t,this.boardID=this.ID,this.siteID=c.SITE.ID,this.threads=new rt,this.posts=new rt,this.config=fe.boards?.[this.ID]||{},c.boards[this]=this}cooldowns(){const t=(this.config||{}).cooldowns||{},i={thread:t.threads||0,reply:t.replies||0,image:t.images||0,thread_global:300};if(m.cookie.indexOf("pass_enabled=1")>=0)for(var n of["reply","image"])i[n]=Math.ceil(i[n]/2);return i}}const St={init(){return o.on(m,"QRPostSuccessful",e=>{if(e.detail.redirect)return this.event=e,this.delays=0,o.queueTask(()=>{if(e===this.event&&this.delays===0)return location.href=e.detail.redirect})})},delays:0,delay(){if(!this.event)return null;const e=this.event;return this.delays++,()=>{if(e===this.event&&(this.delays--,this.delays===0))return location.href=e.detail.redirect}}};var Ee={init(){if(!(c.VIEW!=="index"||!l["Comment Expansion"]||l["JSON Index"]))return N.Post.push({name:"Comment Expansion",cb:this.node})},node(){let e;if(e=o(".abbr > a:not([onclick])",this.nodes.comment))return o.on(e,"click",Ee.cb)},callbacks:[],cb(e){return e.preventDefault(),Ee.expand(F.postFromNode(this))},expand(e){let t;if(e.nodes.longComment&&!e.nodes.longComment.parentNode){o.replace(e.nodes.shortComment,e.nodes.longComment),e.nodes.comment=e.nodes.longComment;return}if(t=o(".abbr > a",e.nodes.comment))return t.textContent=`Post No.${e} Loading...`,o.cache(c.SITE.urls.threadJSON({boardID:e.boardID,threadID:e.threadID}),function(){return Ee.parse(this,t,e)})},contract(e){if(!e.nodes.shortComment)return;const t=o(".abbr > a",e.nodes.shortComment);return t.textContent="here",o.replace(e.nodes.longComment,e.nodes.shortComment),e.nodes.comment=e.nodes.shortComment},parse(e,t,i){let n,s;const{status:r}=e;if(![200,304].includes(r)){t.textContent=r?`Error ${e.statusText} (${r})`:"Connection Error";return}const{posts:a}=e.response;(s=a[0].custom_spoiler)&&(c.SITE.Build.spoilerRange[c.BOARD]=s);for(n of a)if(n.no===i.ID)break;if(n.no!==i.ID){t.textContent=`Post No.${i} not found.`;return}const{comment:h}=i.nodes,u=h.cloneNode(!1);u.innerHTML=n.com;for(var f of L(".quotelink",u)){var g=f.getAttribute("href");g[0]!=="/"&&(g[0]==="#"?f.href=`${t.pathname.split(/\/+/).splice(0,4).join("/")}${g}`:f.href=`${t.pathname.split(/\/+/).splice(0,3).join("/")}/${g}`)}i.nodes.shortComment=h,o.replace(h,u),i.nodes.comment=i.nodes.longComment=u,i.parseComment(),i.parseQuotes();for(var b of Ee.callbacks)b.call(i)}};const Te={init(){Te.container=o.el("div",{classList:"scroll-marker-container"}),w.insertAdjacentElement("afterbegin",Te.container),o.on(Te.container,"click",e=>{const{postId:t}=e.target.dataset;t&&x.scrollTo(c.posts[t].nodes.root)}),new ResizeObserver(Te.markScroll).observe(w)},container:void 0,markers:void 0,markScroll:Xe(100,()=>{if(!l["Scroll Markers"]){Te.container.innerText="",Te.markers=void 0;return}const e=new Map;c.posts?.forEach(i=>{const n=i.nodes.root;let s=!1;if(o.hasClass(n,"quotesYou"))s=!0;else if(!o.hasClass(n,"yourPost"))return;const r=n.getBoundingClientRect();e.set(`${i.boardID}.${i.ID}`,{classList:`post-scroll-marker ${s?"reply":"you"}-scroll-marker`,ariaLabel:`Jump to ${s?"reply to ":""} my post`,top:((r.top+window.scrollY)/w.scrollHeight*100).toFixed(1),height:Math.max(1,r.height/w.scrollHeight*100).toFixed(1)})});let t;for(const[i,n]of e){let r=Te.markers?.get(i)?.el;r||(r=o.el("button",{type:"button"}),t?t.insertAdjacentElement("afterend",r):o.add(Te.container,r)),r.classList=n.classList,r.style.setProperty("--top",n.top),r.style.setProperty("--height",n.height),r.dataset.postId=i,n.el=r,t=r,document.createElement("button")}if(Te.markers)for(const[i,{el:n}]of Te.markers)e.has(i)||n.remove();Te.markers=e},!1)};var Z={init(){l["Remember Your Posts"]&&(this.db=new De("yourPosts"),o.sync("Remember Your Posts",e=>l["Remember Your Posts"]=e),o.on(m,"QRPostSuccessful",function(e){const t=St.delay();return o.get("Remember Your Posts",l["Remember Your Posts"],function(i){if(!i["Remember Your Posts"])return;const{boardID:n,threadID:s,postID:r}=e.detail;return Z.db.set({boardID:n,threadID:s,postID:r,val:!0},t)})}),["index","thread","archive"].includes(c.VIEW)&&(l["Highlight Own Posts"]&&o.addClass(w,"highlight-own"),l["Highlight Posts Quoting You"]&&o.addClass(w,"highlight-you"),l["Comment Expansion"]&&Ee.callbacks.push(this.node),this.mark=o.el("span",{textContent:"\xA0(You)",className:"qmark-you"}),N.Post.push({name:"Mark Quotes of You",cb:this.node}),Z.menu.init()))},isYou(e){return!!Z.db?.get({boardID:e.boardID,threadID:e.threadID,postID:e.ID})},node(){if(!this.isClone&&(Z.isYou(this)&&(o.addClass(this.nodes.root,"yourPost"),Te.markScroll()),!!this.quotes.length))for(var e of this.nodes.quotelinks)Z.db.get(F.postDataFromLink(e))&&(l["Mark Quotes of You"]&&o.add(e,Z.mark.cloneNode(!0)),o.addClass(e,"you"),o.addClass(this.nodes.root,"quotesYou"))},menu:{init(){const e=o.el("label",{className:"toggle-you"},{innerHTML:'<input type="checkbox"> You'}),t=o("input",e);o.on(t,"change",Z.menu.toggle),he.menu?.addEntry({el:e,order:80,open(i){return Z.menu.post=i.origin||i,t.checked=Z.isYou(i),!0}})},toggle(){const{post:e}=Z.menu,t={boardID:e.board.ID,threadID:e.thread.ID,postID:e.ID,val:!0};this.checked?Z.db.set(t):Z.db.delete(t);for(var i of[e].concat(e.clones))i.nodes.root.classList.toggle("yourPost",this.checked);for(var n of F.allQuotelinksLinkingTo(e))if(this.checked?l["Mark Quotes of You"]&&o.add(n,Z.mark.cloneNode(!0)):o.rm(o(".qmark-you",n)),n.classList.toggle("you",this.checked),o.hasClass(n,"quotelink")){var s=F.postFromNode(n).nodes.root;s.classList.toggle("quotesYou",!!o(".quotelink.you",s))}Te.markScroll()}},cb:{seek(e){let t,i,n;const{highlight:s}=c.SITE.classes;if((t=o(`.${s}`))&&o.rmClass(t,s),!Z.lastRead||!w.contains(Z.lastRead)||!o.hasClass(Z.lastRead,"quotesYou")){if(!(i=Z.lastRead=o(".quotesYou"))){new G("warning","No posts are currently quoting you, loser.",20);return}if(Z.cb.scroll(i))return}else i=Z.lastRead;const r=`${e}::div[contains(@class,'quotesYou')]`;for(;i=(n=o.X(r,i)).snapshotItem(e==="preceding"?n.snapshotLength-1:0);)if(Z.cb.scroll(i))return;const a=L(".quotesYou");return Z.cb.scroll(a[e==="following"?0:a.length-1])},scroll(e){const t=F.postFromRoot(e);if(t.nodes.post.getBoundingClientRect().height){if(Z.lastRead=e,location.href=F.url("post",t),x.scrollTo(t.nodes.post),t.isReply){const i=`${c.SITE.selectors.postContainer}${c.SITE.selectors.highlightable.reply}`;let n=t.nodes.root;n.matches(i)||(n=o(i,n)),o.addClass(n,c.SITE.classes.highlight)}return!0}else return!1}}};class Et{constructor(t){if(this.length=0,t)for(var i of t)this.push(i)}push(t){let i,{ID:n}=t;if(n||(n=t.id),this[n])return;const{last:s}=this;return this[n]=i={prev:s,next:null,data:t,ID:n},i.prev=s,this.last=s?s.next=i:this.first=i,this.length++}before(t,i){if(i.next===t||i===t)return;this.rmi(i);const{prev:n}=t;return t.prev=i,i.next=t,i.prev=n,n?n.next=i:this.first=i}after(t,i){if(i.prev===t||i===t)return;this.rmi(i);const{next:n}=t;return t.next=i,i.prev=t,i.next=n,n?n.prev=i:this.last=i}prepend(t){const{first:i}=this;if(!(t===i||!this[t.ID]))return this.rmi(t),t.next=i,i?i.prev=t:this.last=t,this.first=t,delete t.prev}shift(){return this.rm(this.first.ID)}order(){let t;const i=[t=this.first];for(;t=t.next;)i.push(t);return i}rm(t){const i=this[t];if(i)return delete this[t],this.length--,this.rmi(i),delete i.next,delete i.prev}rmi(t){const{prev:i,next:n}=t;return i?i.next=n:this.first=n,n?n.prev=i:this.last=i}}var A={init(){if(!(c.VIEW!=="thread"||!l["Unread Count"]&&!l["Unread Favicon"]&&!l["Unread Line"]&&!l["Remember Last Read Post"]&&!l["Desktop Notifications"]&&!l["Quote Threading"]))return l["Remember Last Read Post"]&&(o.sync("Remember Last Read Post",e=>l["Remember Last Read Post"]=e),this.db=new De("lastReadPosts",this.sync)),this.hr=o.el("hr",{id:"unread-line",className:"unread-line"}),this.posts=new Set,this.postsQuotingYou=new Set,this.order=new Et,this.position=null,N.Thread.push({name:"Unread",cb:this.node}),N.Post.push({name:"Unread",cb:this.addPost})},node(){A.thread=this,A.title=m.title,A.lastReadPost=A.db?.get({boardID:this.board.ID,threadID:this.ID})||0,A.readCount=0;for(var e of this.posts.keys)+e<=A.lastReadPost&&A.readCount++;o.one(m,"4chanXInitFinished",A.ready),o.on(m,"PostsInserted",A.onUpdate),o.on(m,"ThreadUpdate",function(i){if(i.detail[404])return A.update()});const t=o.el("a",{href:"javascript:;",className:"unread-reset",textContent:"Mark all unread"});return o.on(t,"click",A.reset),x.menu.addEntry({el:t,order:70})},ready(){if(l["Remember Last Read Post"]&&l["Scroll to Last Read Post"]&&A.scroll(),A.setLine(!0),A.read(),A.update(),o.on(m,"scroll visibilitychange",A.read),l["Unread Line"])return o.on(m,"visibilitychange",A.setLine)},positionPrev(){return A.position?A.position.prev:A.order.last},scroll(){let e;if((e=location.hash.match(/\d+/))&&e[0]in A.thread.posts)return;let t=A.positionPrev();for(;t;){var{bottom:i}=t.data.nodes;if(!i.getBoundingClientRect().height)t=t.prev;else{x.scrollToIfNeeded(i,!0);break}}},reset(){if(A.lastReadPost!=null)return A.posts=new Set,A.postsQuotingYou=new Set,A.order=new Et,A.position=null,A.lastReadPost=0,A.readCount=0,A.thread.posts.forEach(e=>A.addPost.call(e)),o.forceSync("Remember Last Read Post"),l["Remember Last Read Post"]&&(!A.thread.isDead||A.thread.isArchived)&&A.db.set({boardID:A.thread.board.ID,threadID:A.thread.ID,val:0}),A.updatePosition(),A.setLine(),A.update()},sync(){if(A.lastReadPost==null)return;const e=A.db.get({boardID:A.thread.board.ID,threadID:A.thread.ID,defaultValue:0});if(A.lastReadPost>=e)return;A.lastReadPost=e;const t=A.thread.posts.keys;for(let n=A.readCount,s=t.length;n<s;n++){var i=+t[n];if(!A.thread.posts.get(i).isFetchedQuote){if(i>A.lastReadPost)break;A.posts.delete(i),A.postsQuotingYou.delete(i)}A.readCount++}return A.updatePosition(),A.setLine(),A.update()},addPost(){if(!(this.isFetchedQuote||this.isClone)&&(A.order.push(this),!(this.ID<=A.lastReadPost||this.isHidden||Z.isYou(this))))return A.posts.add(A.posts.last=this.ID),A.addPostQuotingYou(this),A.position!=null?A.position:A.position=A.order[this.ID]},addPostQuotingYou(e){for(var t of e.nodes.quotelinks)if(Z.db?.get(F.postDataFromLink(t))){A.postsQuotingYou.add(A.postsQuotingYou.last=e.ID),A.openNotification(e);return}},openNotification(e,t=" replied to you"){if(!x.areNotificationsEnabled)return;const i=new Notification(`${e.info.nameBlock}${t}`,{body:e.commentDisplay(),icon:pe.logo});return i.onclick=function(){return x.scrollToIfNeeded(e.nodes.bottom,!0),window.focus()},i.onshow=()=>setTimeout(()=>i.close(),7*ie)},onUpdate(){return o.queueTask(function(){return A.setLine(),A.read(),A.update()})},readSinglePost(e){const{ID:t}=e;if(A.posts.has(t))return A.posts.delete(t),A.postsQuotingYou.delete(t),A.updatePosition(),A.saveLastReadPost(),A.update()},read:Xe(100,function(e){if(!A.posts.size&&A.readCount!==A.thread.posts.keys.length&&A.saveLastReadPost(),m.hidden||!A.posts.size)return;let t=0;for(;A.position;){var{ID:i,data:n}=A.position,{bottom:s}=n.nodes;if(s.getBoundingClientRect().height&&x.getBottomOf(s)<=-1)break;t++,A.posts.delete(i),A.postsQuotingYou.delete(i),A.position=A.position.next}if(t&&(A.updatePosition(),A.saveLastReadPost(),e))return A.update()}),updatePosition(){for(;A.position&&!A.posts.has(A.position.ID);)A.position=A.position.next},saveLastReadPost:Xe(2*ie,function(){let e;if(o.forceSync("Remember Last Read Post"),!l["Remember Last Read Post"]||!A.db)return;const t=A.thread.posts.keys;for(let i=A.readCount,n=t.length;i<n;i++){if(e=+t[i],!A.thread.posts.get(e).isFetchedQuote){if(A.posts.has(e))break;A.lastReadPost=e}A.readCount++}if(!(A.thread.isDead&&!A.thread.isArchived))return A.db.set({boardID:A.thread.board.ID,threadID:A.thread.ID,val:A.lastReadPost})}),setLine(e){if(l["Unread Line"]){if(A.hr.hidden||m.hidden||e===!0){const t=A.linePosition;if(A.linePosition=A.positionPrev()){if(A.linePosition!==t){let i=A.linePosition.data.nodes.bottom;i.nextSibling?.tagName==="BR"&&(i=i.nextSibling),o.after(i,A.hr)}}else o.rm(A.hr)}return A.hr.hidden=A.linePosition===A.order.last}},update(){const e=A.posts.size,t=A.postsQuotingYou.size;if(l["Unread Count"]){const i=l["Quoted Title"]&&t?"(!) ":"",n=e||!l["Hide Unread Count at (0)"]?`(${e}) `:"",s=A.thread.isDead?A.title.replace("-",A.thread.isArchived?"- Archived -":"- 404 -"):A.title;m.title=`${i}${n}${s}`}if(A.saveThreadWatcherCount(),l["Unread Favicon"]&&c.SITE.software==="yotsuba"){const{isDead:i}=A.thread;return pe.set(t?i?"unreadDeadY":"unreadY":e?i?"unreadDead":"unread":i?"dead":"default")}},saveThreadWatcherCount:Xe(2*ie,function(){if(o.forceSync("Remember Last Read Post"),l["Remember Last Read Post"]&&(!A.thread.isDead||A.thread.isArchived)){let e;const t=!l["Require OP Quote Link"]&&Z.isYou(A.thread.OP)?A.posts:A.postsQuotingYou;if(!t.size)t.last=0;else if(!t.has(t.last)){t.last=0,e=A.thread.posts.keys;for(let i=e.length-1;i>=0;i--)if(t.has(+e[i])){t.last=e[i];break}}return v.update(c.SITE.ID,A.thread.board.ID,A.thread.ID,{last:A.thread.lastPost,isDead:A.thread.isDead,isArchived:A.thread.isArchived,unread:A.posts.size,quotingYou:t.last||0})}})},ve={statuses:S(),init(){c.VIEW==="index"&&l["Thread Expansion"]&&(l["JSON Index"]?o.on(m,"IndexRefreshInternal",this.onIndexRefresh):N.Thread.push({name:"Expand Thread",cb(){ve.setButton(this)}}))},setButton(e){if(!e.nodes.root)return;const t=o("a.summary",e.nodes.root);t&&(t.textContent=c.SITE.Build.summaryText("+",...t.textContent.match(/\d+/g)),t.style.cursor="pointer",o.on(t,"click",ve.cbToggle))},disconnect(e){if(!(c.VIEW==="thread"||!l["Thread Expansion"])){for(var t in ve.statuses){var i,n=ve.statuses[t];(i=n.req)&&(delete n.req,i.abort()),delete ve.statuses[t]}e||o.off(m,"IndexRefreshInternal",this.onIndexRefresh)}},onIndexRefresh(){ve.disconnect(!0),c.BOARD.threads.forEach(e=>ve.setButton(e))},cbToggle(e){o.modifiedClick(e)||(e.preventDefault(),ve.toggle(F.threadFromNode(this)))},cbToggleBottom(e){if(o.modifiedClick(e))return;e.preventDefault();const t=F.threadFromNode(this);o.rm(this);const{bottom:i}=t.nodes.root.getBoundingClientRect();return ve.toggle(t),window.scrollBy(0,t.nodes.root.getBoundingClientRect().bottom-i)},toggle(e){if(!e.nodes.root)return;const t=o("a.summary",e.nodes.root);t&&(e.ID in ve.statuses?ve.contract(e,t,e.nodes.root):ve.expand(e,t))},expand(e,t){let i;ve.statuses[e]=i={},t.textContent=c.SITE.Build.summaryText("...",...t.textContent.match(/\d+/g)),i.req=o.cache(c.SITE.urls.threadJSON({boardID:e.board.ID,threadID:e.ID}),function(){this===i.req&&(delete i.req,ve.parse(this,e,t))}),i.numReplies=L(c.SITE.selectors.replyOriginal,e.nodes.root).length},contract(e,t,i){let n;const s=ve.statuses[e];if(delete ve.statuses[e],n=s.req){delete s.req,n.abort(),t&&(t.textContent=c.SITE.Build.summaryText("+",...t.textContent.match(/\d+/g)));return}let r=L(".thread > .replyContainer",i);s.numReplies&&(r=r.slice(0,-s.numReplies));let a=0,h=0;for(var u of r){if(l["Quote Inlining"])for(var f;f=o(".inlined",u);)f.click();a++,"file"in F.postFromRoot(u)&&h++,o.rm(u)}p.enabled&&o.event("PostsRemoved",null,t.parentNode),t.textContent=c.SITE.Build.summaryText("+",a,h),o.rm(o(".summary-bottom",i))},parse(e,t,i){let n;if(![200,304].includes(e.status)){i.textContent=e.status?`Error ${e.statusText} (${e.status})`:"Connection Error";return}c.SITE.Build.spoilerRange[t.board]=e.response.posts[0].custom_spoiler;const s=[],r=[];let a=0;for(var h of e.response.posts){var u;if(h.no!==t.ID){if((u=t.posts.get(h.no))&&!u.isFetchedQuote){"file"in u&&a++,{root:n}=u.nodes,r.push(n);continue}n=c.SITE.Build.postFromObject(h,t.board.ID),u=new ye(n,t,t.board),"file"in u&&a++,s.push(u),r.push(n)}}D.callbackNodes("Post",s),o.after(i,r),o.event("PostsInserted",null,i.parentNode);const f=r.length;if(i.textContent=c.SITE.Build.summaryText("-",f,a),n){const g=i.cloneNode(!0);g.classList.add("summary-bottom"),o.on(g,"click",ve.cbToggleBottom),o.after(n,g)}}},ce={lastReadPost:S(),hr:S(),markReadLink:S(),init(){if(!(c.VIEW!=="index"||!l["Remember Last Read Post"]||!l["Unread Line in Index"]))return this.enabled=!0,this.db=new De("lastReadPosts",this.sync),N.Thread.push({name:"Unread Line in Index",cb:this.node}),o.on(m,"IndexRefreshInternal",this.onIndexRefresh),o.on(m,"PostsInserted PostsRemoved",this.onPostsInserted)},node(){if(ce.lastReadPost[this.fullID]=ce.db.get({boardID:this.board.ID,threadID:this.ID})||0,!p.enabled)return ce.update(this)},onIndexRefresh(e){if(!e.detail.isCatalog)return(()=>{const t=[];for(var i of e.detail.threadIDs){var n=c.threads.get(i);t.push(ce.update(n))}return t})()},onPostsInserted(e){if(e.target===p.root)return;const t=F.threadFromNode(e.target);if(!t||t.nodes.root!==e.target)return;const i=!!ce.hr[t.fullID]?.parentNode;if(ce.update(t),l["Scroll to Last Read Post"]&&e.type==="PostsInserted"&&!i&&ce.hr[t.fullID]?.parentNode)return x.scrollToIfNeeded(ce.hr[t.fullID],!0)},sync(){return c.threads.forEach(function(e){const t=ce.db.get({boardID:e.board.ID,threadID:e.ID})||0;if(t!==ce.lastReadPost[e.fullID]&&(ce.lastReadPost[e.fullID]=t,e.nodes.root?.parentNode))return ce.update(e)})},update(e){let t;const i=ce.lastReadPost[e.fullID];let n=0,s=0,r=null;e.posts.forEach(function(f){if(f.isReply&&e.nodes.root.contains(f.nodes.root)){if(n++,f.ID<=i)return s++;if((!r||f.ID<r.ID)&&!f.isHidden&&!Z.isYou(f))return r=f}});let a=ce.hr[e.fullID];r&&(s||i===e.OP.ID&&(!o(c.SITE.selectors.summary,e.nodes.root)||e.ID in ve.statuses))?(a||(a=ce.hr[e.fullID]=o.el("hr",{className:"unread-line"})),o.before(r.nodes.root,a)):o.rm(a);const h=n?r||!s:p.enabled?e.lastPost>i:e.OP.ID>i;e.nodes.root.classList.toggle("unread-thread",h);let u=ce.markReadLink[e.fullID];return u||(u=ce.markReadLink[e.fullID]=o.el("a",{className:"unread-mark-read brackets-wrap",href:"javascript:;",textContent:"Mark Read"}),o.on(u,"click",ce.markRead)),(t=o(c.SITE.selectors.threadDivider,e.nodes.root))?o.before(t,u):o.add(e.nodes.root,u)},markRead(){const e=F.threadFromNode(this);return ce.lastReadPost[e.fullID]=e.lastPost,ce.db.set({boardID:e.board.ID,threadID:e.ID,val:e.lastPost}),o.rm(ce.hr[e.fullID]),e.nodes.root.classList.remove("unread-thread"),v.update(c.SITE.ID,e.board.ID,e.ID,{last:e.lastPost,unread:0,quotingYou:0})}},v={init(){let e;if(this.enabled=l["Thread Watcher"]){switch(this.shortcut=e=o.el("a",{id:"watcher-link",title:"Thread Watcher",href:"javascript:;"}),q.set(this.shortcut,"eye","Watcher"),this.db=new De("watchedThreads",this.refresh,!0),this.dbLM=new De("watcherLastModified",null,!0),this.dialog=te.dialog("thread-watcher",{innerHTML:As}),this.status=o("#watcher-status",this.dialog),this.list=this.dialog.lastElementChild,this.refreshButton=o(".refresh",this.dialog),this.menuButton=o(".menu-button",this.dialog),this.closeButton=o(".move > .close",this.dialog),this.unreaddb=A.db||ce.db||new De("lastReadPosts"),this.unreadEnabled=l["Remember Last Read Post"],q.set(this.refreshButton,"refresh"),q.set(this.menuButton,"caretDown"),q.set(this.closeButton,"xmark"),o.on(m,"QRPostSuccessful",this.cb.post),o.on(e,"click",this.toggleWatcher),o.on(this.refreshButton,"click",this.buttonFetchAll),o.on(this.closeButton,"click",this.toggleWatcher),this.menu.addHeaderMenuEntry(),o.onExists(w,"body",this.addDialog),c.VIEW){case"index":o.on(m,"IndexUpdate",this.cb.onIndexUpdate);break;case"thread":o.on(m,"ThreadUpdate",this.cb.onThreadRefresh);break}if(l["Fixed Thread Watcher"]&&o.addClass(w,"fixed-watcher"),l["Persistent Thread Watcher"]||(o.addClass(v.shortcut,"disabled"),this.dialog.hidden=!0),x.addShortcut("watcher",e,510),v.initLastModified(),v.fetchAuto(),o.on(window,"visibilitychange focus",()=>o.queueTask(v.fetchAuto)),l.Menu&&p.enabled&&he.menu.addEntry({el:o.el("a",{href:"javascript:;",className:"has-shortcut-text"},{innerHTML:'<span></span><span class="shortcut-text">Alt+click</span>'}),order:6,open({thread:t}){return l["Index Mode"]!=="catalog"?!1:(this.el.firstElementChild.textContent=v.isWatched(t)?"Unwatch":"Watch",this.cb&&o.off(this.el,"click",this.cb),this.cb=function(){return o.event("CloseMenu"),v.toggle(t,!0)},o.on(this.el,"click",this.cb),!0)}}),!!["index","thread"].includes(c.VIEW))return N.Post.push({name:"Thread Watcher",cb:this.node}),N.CatalogThread.push({name:"Thread Watcher",cb:this.catalogNode})}},isWatched(e){return!!v.db?.get({boardID:e.board.ID,threadID:e.ID})},isWatchedRaw(e,t){return!!v.db?.get({boardID:e,threadID:t})},setToggler(e,t){return e.classList.toggle("watched",t),e.title=`${t?"Unwatch":"Watch"} Thread`},node(){let e;if(this.isReply)return;this.isClone?e=o(".watch-thread-link",this.nodes.info):(e=o.el("button",{type:"button",className:"watch-thread-link"}),q.set(e,"heart"),o.before(o("input",this.nodes.info),e));const t=c.SITE.ID,i=this.board.ID,n=this.thread.ID,s=v.db.get({siteID:t,boardID:i,threadID:n});if(v.setToggler(e,!!s),o.on(e,"click",v.cb.toggle),s&&s.excerpt==null)return o.queueTask(()=>v.update(t,i,n,{excerpt:F.threadExcerpt(this.thread)}))},catalogNode(){return v.isWatched(this.thread)&&o.addClass(this.nodes.root,"watched"),o.on(this.nodes.root,"mousedown click",e=>{if(!(e.button!==0||!e.altKey))return e.type==="click"&&v.toggle(this.thread,!0),e.preventDefault()})},addDialog(){if(D.isThisPageLegit())return v.build(),o.prepend(m.body,v.dialog)},toggleWatcher(){return o.toggleClass(v.shortcut,"disabled"),v.dialog.hidden=!v.dialog.hidden},cb:{openAll(){if(!o.hasClass(this,"disabled")){for(var e of L("a.watcher-link",v.list))o.open(e.href);o.event("CloseMenu")}},openUnread(){if(!o.hasClass(this,"disabled")){for(var e of L(".replies-unread > a.watcher-link",v.list))o.open(e.href);o.event("CloseMenu")}},openDeads(){if(!o.hasClass(this,"disabled")){for(var e of L(".dead-thread.replies-unread > a.watcher-link",v.list))o.open(e.href);o.event("CloseMenu")}},clear(){if(!confirm("Delete ALL threads from watcher?"))return;const e=v.getAll();for(let t=0,i=e.length;t<i;t++){const{siteID:n,boardID:s,threadID:r}=e[t];v.db.delete({siteID:n,boardID:s,threadID:r})}v.refresh(!0),o.event("CloseMenu")},pruneDeads(){if(!o.hasClass(this,"disabled")){for(var{siteID:e,boardID:t,threadID:i,data:n}of v.getAll())n.isDead&&v.db.delete({siteID:e,boardID:t,threadID:i});v.refresh(!0),o.event("CloseMenu")}},pruneReadDeads(){if(!o.hasClass(this,"disabled")){for(var{siteID:e,boardID:t,threadID:i,data:n}of v.getAll())n.isDead&&!n.unread&&v.db.delete({siteID:e,boardID:t,threadID:i});v.refresh(!0),o.event("CloseMenu")}},dismiss(){for(var{siteID:e,boardID:t,threadID:i,data:n}of v.getAll())n.quotingYou&&v.update(e,t,i,{dismiss:n.quotingYou||0});o.event("CloseMenu")},toggle(){const{thread:e}=F.postFromNode(this);v.toggle(e,!0)},rm(){const{siteID:e}=this.parentNode.dataset,[t,i]=this.parentNode.dataset.fullID.split(".");v.rm(e,t,+i,void 0,!0)},post(e){const{boardID:t,threadID:i,postID:n}=e.detail,s=St.delay();n===i?l["Auto Watch"]&&v.addRaw(t,i,{},s,!0):l["Auto Watch Reply"]&&v.add(c.threads.get(t+"."+i)||new Ye(i,c.boards[t]||new tt(t)),s,!0)},onIndexUpdate(e){const{db:t}=v,i=c.SITE.ID,n=c.BOARD.ID;let s=0;for(var r in t.data[i].boards[n]){var a=t.data[i].boards[n][r];if(!a?.isDead&&!e.detail.threads.includes(`${n}.${r}`)){if(!e.detail.threads.some(h=>+h.split(".")[1]>r))continue;l["Auto Prune"]||!(a&&typeof a=="object")?(t.delete({boardID:n,threadID:r}),s++):v.fetchStatus({siteID:i,boardID:n,threadID:r,data:a})}}if(s)return v.refresh()},onThreadRefresh(e){const t=c.threads.get(e.detail.threadID);if(!(!e.detail[404]||!v.isWatched(t)))return v.add(t)}},requests:[],fetched:0,fetch(e,{siteID:t,force:i},n,s){v.requests.length===0&&(v.status.textContent="...",o.addClass(v.refreshButton,"spin"));const r=function(){if(!this.finished)return this.finished=!0,v.fetched++,v.fetched===v.requests.length?v.clearRequests():v.status.textContent=`${Math.round(v.fetched/v.requests.length*100)}%`,s.apply(this,n)},a=t===c.SITE.ID?o.ajax:xe.ajax;i&&delete o.lastModified.ThreadWatcher?.[e];const h=o.whenModified(e,"ThreadWatcher",r,{timeout:Le,ajax:a});return v.requests.push(h)},clearRequests(){return v.requests=[],v.fetched=0,v.status.textContent="",o.rmClass(v.refreshButton,"spin")},abort(){delete v.syncing;for(var e of v.requests)e.finished||(e.finished=!0,e.abort());return v.clearRequests()},initLastModified(){const e=o.lastModified.ThreadWatcher||(o.lastModified.ThreadWatcher=S());for(var t in v.dbLM.data){var i=v.dbLM.data[t];for(var n in i.boards){var s=i.boards[n];if(v.db.get({siteID:t,boardID:n}))for(var r in s){var a=s[r];e[r]=a}else v.dbLM.delete({siteID:t,boardID:n})}}},fetchAuto(){let e;if(clearTimeout(v.timeout),!l["Auto Update Thread Watcher"])return;const{db:t}=v,i=l["Show Page"]||v.unreadEnabled&&l["Show Unread Count"]?5*Le:2*Oe,n=Date.now();return(n-i>=(e=t.data.lastChecked||0)||e>n)&&!m.hidden&&m.hasFocus()&&v.fetchAllStatus(i),v.timeout=setTimeout(v.fetchAuto,i)},buttonFetchAll(){return v.syncing||v.requests.length?v.abort():v.fetchAllStatus()},fetchAllStatus(e=0){v.status.textContent="...",o.addClass(v.refreshButton,"spin"),v.syncing=!0;const t=[v.db,v.unreaddb,Z.db].filter(n=>n);let i=0;return t.map(n=>n.forceSync(function(){if(++i===t.length){let r;if(!v.syncing)return;if(delete v.syncing,0>(r=Date.now()-(v.db.data.lastChecked||0))||r>=e){let a;const{db:h}=v,u=Date.now(),f=!(u-2*Oe<(a=h.data.lastChecked2||0)&&a<=u),g=v.getAll(!0);for(var s of g)v.fetchBoard(s,f);h.setLastChecked(),f&&h.setLastChecked("lastChecked2")}if(v.fetched===v.requests.length)return v.clearRequests()}}))},fetchBoard(e,t){if(!e.some(g=>!g.data.isDead))return;let i=!1;for(var n of e){var{data:s}=n;!s.isDead&&s.last!==-1&&(l["Show Page"]&&s.page==null&&(i=!0),s.modified==null&&(i=n.force=!0))}const{siteID:r,boardID:a}=e[0],h=c.sites[r];if(!h)return;const u=t&&h.threadModTimeIgnoresSage?"catalogJSON":"threadsListJSON",f=h.urls[u]?.({siteID:r,boardID:a});if(f)return v.fetch(f,{siteID:r,force:i},[e,f],v.parseBoard)},parseBoard(e,t){let i,n;if(this.status!==200)return;const{siteID:s,boardID:r}=e[0],a=this.getResponseHeader("Last-Modified");v.dbLM.extend({siteID:s,boardID:r,val:o.item(t,a)});const h=S();let u=0,f=0,g=null;try{u=this.response[0]?.threads.length||0;for(let k=0;k<this.response.length;k++){i=this.response[k];for(var b of i.threads)h[b.no]={page:k+1,index:f,modified:b.last_modified,replies:b.replies},f++,(g==null||b.no<g)&&(g=b.no)}}catch{for(n of e)v.fetchStatus(n)}for(n of e){var{threadID:I,data:T}=n;if(h[I]){var R,B,P;if({page:i,index:R,modified:B,replies:P}=h[I],l["Show Page"]){var X=c.sites[s].isPrunedByAge?.({siteID:s,boardID:r})?I===g:R>=f-u;v.update(s,r,I,{page:i,lastPage:X})}v.unreadEnabled&&l["Show Unread Count"]&&(B!==T.modified||P!=null&&P!==T.replies)&&((n.newData||(n.newData={})).modified=B,v.fetchStatus(n))}else v.fetchStatus(n)}},fetchStatus(e){const{siteID:t,boardID:i,threadID:n,data:s,force:r}=e,a=c.sites[t]?.urls.threadJSON?.({siteID:t,boardID:i,threadID:n});if(a&&!(s.isDead&&!r)&&s.last!==-1)return v.fetch(a,{siteID:t,force:r},[e],v.parseStatus)},parseStatus(e,t){let i,n,{siteID:s,boardID:r,threadID:a,data:h,newData:u,force:f}=e;const g=c.sites[s];if(this.status===200&&this.response){let B;n=this.response.posts[this.response.posts.length-1].no;const P=this.response.posts.length-1;if(i=B=!!(this.response.posts[0].archived||t),i&&l["Auto Prune"]){v.rm(s,r,a);return}if(n===h.last&&i===h.isDead&&B===h.isArchived)return;const X=v.unreaddb.get({siteID:s,boardID:r,threadID:a,defaultValue:0});let k=h.unread||0,M=h.quotingYou||0;const K=!!Z.db?.get({siteID:s,boardID:r,threadID:a,postID:a});for(var b of this.response.posts)if(!(b.no<=(h.last||0)||b.no<=X)&&!Z.db?.get({siteID:s,boardID:r,threadID:a,postID:b.no})){var I=!1;if(!l["Require OP Quote Link"]&&K)I=!0;else if(Z.db&&b.com){var T,R=g.regexp.quotelinkHTML;for(R.lastIndex=0;T=R.exec(b.com);)if(Z.db.get({siteID:s,boardID:T[1]?encodeURIComponent(T[1]):r,threadID:T[2]||a,postID:T[3]||T[2]||a})){I=!0;break}}(!k||!M&&I)&&V.isHidden(g.Build.parseJSON(b,{siteID:s,boardID:r}))||(k++,I&&(M=b.no))}return u||(u={}),o.extend(u,{last:n,replies:P,isDead:i,isArchived:B,unread:k,quotingYou:M}),v.update(s,r,a,u)}else if(this.status===404){const B=c.sites[s]?.urls.archivedThreadJSON?.({siteID:s,boardID:r,threadID:a});return!t&&B?v.fetch(B,{siteID:s,force:f},[e,!0],v.parseStatus):g.mayLackJSON&&h.last==null?v.update(s,r,a,{last:-1}):v.update(s,r,a,{isDead:!0})}},getAll(e){const t=[];for(var i in v.db.data){var n=v.db.data[i];for(var s in n.boards){var r,a=n.boards[s];if(!(l["Current Board"]&&(i!==c.SITE.ID||s!==c.BOARD.ID))){e&&t.push(r=[]);for(var h in a){var u=a[h];u&&typeof u=="object"&&(e?r:t).push({siteID:i,boardID:s,threadID:h,data:u})}}}}return t},makeLine(e,t,i,n){let s;const r=o.el("a",{textContent:"\u2715",href:"javascript:;"});q.set(r,"xmark"),o.on(r,"click",v.cb.rm);let{excerpt:a,isArchived:h}=n;a||(a=`/${t}/ - No.${i}`),l["Show Site Prefix"]&&(a=v.prefixes[e]+a);const u=o.el("a",{href:c.sites[e]?.urls.thread({siteID:e,boardID:t,threadID:i},h)||"",title:a,className:"watcher-link"});if(l["Show Page"]&&n.page!=null&&(s=o.el("span",{textContent:`[${n.page}]`,className:"watcher-page"}),o.add(u,s)),v.unreadEnabled&&l["Show Unread Count"]&&n.unread!=null){const I=o.el("span",{textContent:`(${n.unread})`,className:"watcher-unread"});o.add(u,I)}const f=o.el("span",{textContent:a,className:"watcher-title"});o.add(u,f);const g=o.el("div"),b=`${t}.${i}`;return g.dataset.fullID=b,g.dataset.siteID=e,c.VIEW==="thread"&&b===`${c.BOARD}.${c.THREADID}`&&o.addClass(g,"current"),n.isDead&&o.addClass(g,"dead-thread"),l["Show Page"]&&(n.lastPage&&o.addClass(g,"last-page"),n.page!=null&&(g.dataset.page=n.page)),v.unreadEnabled&&l["Show Unread Count"]&&(n.unread===0&&o.addClass(g,"replies-read"),n.unread&&o.addClass(g,"replies-unread"),(n.quotingYou||0)>(n.dismiss||0)&&o.addClass(g,"replies-quoting-you")),o.add(g,[r,o.tn(" "),u]),g},setPrefixes(e){const t=S();for(var{siteID:i}of e)if(!(i in t)){for(var n=0,s="",r=Object.keys(t);r.length>0;){n++,s=i.slice(0,n);var a=[];for(var h of r)h.slice(0,n)===s?a.push(h):t[h].length<n&&(t[h]=h.slice(0,n));r=a}t[i]=s}return v.prefixes=t},build(){const e=[],t=v.getAll();v.setPrefixes(t);for(var{siteID:i,boardID:n,threadID:s,data:r}of t){var a;r.excerpt==null&&i===c.SITE.ID&&(a=c.threads.get(`${n}.${s}`))&&a.OP&&v.db.extend({boardID:n,threadID:s,val:{excerpt:F.threadExcerpt(a)}}),e.push(v.makeLine(i,n,s,r))}const{list:h}=v;return o.rmAll(h),o.add(h,e),v.refreshIcon()},refresh(e){if(v.build(),c.threads.forEach(function(t){const i=v.isWatched(t);if(t.OP)for(var n of[t.OP,...t.OP.clones]){var s;(s=o(".watch-thread-link",n.nodes.info))&&v.setToggler(s,i)}if(t.catalogView)return t.catalogView.nodes.root.classList.toggle("watched",i)}),l["Pin Watched Threads"])return o.event("SortIndex",{deferred:!(e&&l["Index Mode"]==="catalog")})},refreshIcon(){for(var e of["replies-unread","replies-quoting-you"])v.shortcut.classList.toggle(e,!!o(`.${e}`,v.dialog))},update(e,t,i,n){let s,r,a,h;if(!(s=v.db?.get({siteID:e,boardID:t,threadID:i})))return;if(n.isDead&&l["Auto Prune"]){v.rm(e,t,i);return}if(n.isDead||n.last===-1)for(r of["isArchived","page","lastPage","unread","quotingyou"])r in n||(n[r]=void 0);n.last!=null&&n.last<s.last&&(n.modified=void 0);let u=0;for(r in n)h=n[r],s[r]!==h&&u++;if(u)if(v.db.extend({siteID:e,boardID:t,threadID:i,val:n}),a=o(`#watched-threads > [data-site-i-d='${e}'][data-full-i-d='${t}.${i}']`,v.dialog)){const f=v.makeLine(e,t,i,s);return o.replace(a,f),v.refreshIcon()}else return v.refresh()},set404(e,t,i){let n;return(n=v.db?.get({boardID:e,threadID:t}))?l["Auto Prune"]?(v.db.delete({boardID:e,threadID:t}),i()):n.isDead&&!(n.isArchived!=null||n.page!=null||n.lastPage!=null||n.unread!=null||n.quotingYou!=null)?i():v.db.extend({boardID:e,threadID:t,val:{isDead:!0,isArchived:void 0,page:void 0,lastPage:void 0,unread:void 0,quotingYou:void 0}},i):i()},toggle(e,t){const i=c.SITE.ID,n=e.board.ID,s=e.ID;return v.db.get({boardID:n,threadID:s})?v.rm(i,n,s,void 0,t):v.add(e,void 0,t)},add(e,t,i){const n={},s=c.SITE.ID,r=e.board.ID,a=e.ID;if(e.isDead){if(l["Auto Prune"]&&v.db.get({boardID:r,threadID:a})){v.rm(s,r,a,t);return}n.isDead=!0}return e.OP&&(n.excerpt=F.threadExcerpt(e)),v.addRaw(r,a,n,t,i)},addRaw(e,t,i,n,s){const r=v.db.get({boardID:e,threadID:t,defaultValue:S()});delete r.last,delete r.modified,o.extend(r,i),v.db.set({boardID:e,threadID:t,val:r},n),v.refresh(s);const a={siteID:c.SITE.ID,boardID:e,threadID:t,data:i,force:!0};if(l["Show Page"]&&!i.isDead)return v.fetchBoard([a]);if(v.unreadEnabled&&l["Show Unread Count"])return v.fetchStatus(a)},rm(e,t,i,n,s){return v.db.delete({siteID:e,boardID:t,threadID:i},n),v.refresh(s)},menu:{init(){if(!l["Thread Watcher"])return;const e=this.menu=new te.Menu("thread watcher");return o.on(o(".menu-button",v.dialog),"click",function(t){return e.toggle(t,this,v)}),this.addMenuEntries()},addHeaderMenuEntry(){if(c.VIEW!=="thread")return;const e=o.el("a",{href:"javascript:;"});return x.menu.addEntry({el:e,order:60,open(){const[t,i,n]=v.db.get({boardID:c.BOARD.ID,threadID:c.THREADID})?["unwatch-thread","watch-thread","Unwatch thread"]:["watch-thread","unwatch-thread","Watch thread"];return o.addClass(e,t),o.rmClass(e,i),e.textContent=n,!0}}),o.on(e,"click",()=>v.toggle(c.threads.get(`${c.BOARD}.${c.THREADID}`),!0))},addMenuEntries(){const e=function(){return this.el.classList.toggle("disabled",!o(".dead-thread",v.list)),!0},t=[{text:"Open all threads",cb:v.cb.openAll,open(){return this.el.classList.toggle("disabled",!v.list.firstElementChild),!0}},{text:"Clear all threads",cb:v.cb.clear,open(){return this.el.classList.toggle("disabled",!v.list.firstElementChild),!0}},{text:"Open unread threads",cb:v.cb.openUnread,open(){return this.el.classList.toggle("disabled",!o(".replies-unread",v.list)),!0}},{text:"Open unread dead threads",cb:v.cb.openDeads,open:e},{text:"Prune all dead threads",cb:v.cb.pruneDeads,open:e},{text:"Prune read dead threads",cb:v.cb.pruneReadDeads,open:e},{text:"Dismiss posts quoting you",title:"Unhighlight the thread watcher icon and threads until there are new replies quoting you.",cb:v.cb.dismiss,open(){return this.el.classList.toggle("disabled",!o.hasClass(v.shortcut,"replies-quoting-you")),!0}}];for(var{text:i,title:n,cb:s,open:r}of t){var a={el:o.el("a",{textContent:i,href:"javascript:;"})};n&&(a.el.title=n),o.on(a.el,"click",s),a.open=r.bind(a),this.menu.addEntry(a)}for(var h in ge.threadWatcher){var u=ge.threadWatcher[h];this.addCheckbox(h,u[1])}},addCheckbox(e,t){const i={type:"thread watcher",el:te.checkbox(e,e.replace(" Thread Watcher",""))};i.el.title=t;const n=i.el.firstElementChild;return e==="Show Unread Count"&&!v.unreadEnabled&&(n.disabled=!0,o.addClass(i.el,"disabled"),i.el.title+=`
[Remember Last Read Post is disabled.]`),o.on(n,"change",o.cb.checked),["Current Board","Show Page","Show Unread Count","Show Site Prefix"].includes(e)&&o.on(n,"change",()=>v.refresh()),["Show Page","Show Unread Count","Auto Update Thread Watcher"].includes(e)&&o.on(n,"change",v.fetchAuto),this.menu.addEntry(i)}}};const xs=e=>{let t=(e.comment||"").split(/(\n|\[\/?(?:b|spoiler|code|moot|banned|fortune(?: color="#\w+")?|i|red|green|blue)\])/);t=t.map((a,h)=>{if(h%2===1){var u=Qe.archiveTags[a.replace(/\ .*\]/,"]")];return typeof u=="function"?u(a):u}else{var f=a[0]===">";return a=a.replace(/(\[\/?[a-z]+):lit(\])/g,"$1$2").split(/(>>(?:>\/[a-z\d]+\/)?\d+)/g).map((g,b)=>b%2?`<span class="deadlink">${oe(g)}</span>`:oe(g)).join(""),{innerHTML:f?`<span class="quote">${a}</span>`:a}}}),t={innerHTML:oe.cat(t),[we]:!0};const i={ID:e.num,threadID:e.thread_num,boardID:e.board.shortname,isReply:e.num!==e.thread_num,fileDeleted:!1,info:{subject:e.title,email:e.email,name:e.name||"",tripcode:e.trip,capcode:(()=>{switch(e.capcode){case"M":return"Mod";case"A":return"Admin";case"D":return"Developer";case"V":return"Verified";case"F":return"Founder";case"G":return"Manager"}})(),uniqueID:e.poster_hash,flagCode:e.poster_country,flagCodeTroll:e.troll_country_code,flag:e.poster_country_name||e.troll_country_name,dateUTC:e.timestamp,dateText:e.fourchan_date,commentHTML:t},file:null,extra:null};if(i.info.capcode&&delete i.info.uniqueID,e.media&&+e.media.banned)i.fileDeleted=!0;else if(e.media?.media_filename){let{thumb_link:a}=e.media;a?.[0]==="/"&&(a=url.split("/",3).join("/")+a),Y.securityCheck(a)||(a="");let h=Y.to("file",{boardID:i.boardID,filename:e.media.media_orig});Y.securityCheck(h)||(h=""),i.file={name:e.media.media_filename,url:h||(i.boardID==="f"?`${location.protocol}//${de.flashHost()}/${i.boardID}/${encodeURIComponent(oe(e.media.media_filename))}`:`${location.protocol}//${de.host()}/${i.boardID}/${e.media.media_orig}`),height:e.media.media_h,width:e.media.media_w,MD5:e.media.media_hash,size:o.bytesToString(e.media.media_size),thumbURL:a||`${location.protocol}//${de.thumbHost()}/${i.boardID}/${e.media.preview_orig}`,theight:e.media.preview_h,twidth:e.media.preview_w,isSpoiler:e.media.spoiler==="1"},/\.pdf$/.test(i.file.url)||(i.file.dimensions=`${i.file.width}x${i.file.height}`),i.boardID==="f"&&e.media.exif&&(i.file.tag=JSON.parse(e.media.exif).Tag)}i.extra=S();const n=c.boards[i.boardID]||new tt(i.boardID),s=c.threads.get(`${i.boardID}.${i.threadID}`)||new Ye(i.threadID,n),r=new ye(c.SITE.Build.post(i),s,n);return r.resurrect(),r.markAsFromArchive(),r.file&&(r.file.thumbURL=i.file.thumbURL),D.callbackNodes("Post",[r]),r};var U={init(){if(c.VIEW!=="thread"||!l["Reply Pruning"])return;this.container=o.frag(),this.summary=o.el("span",{hidden:!0,className:"summary"}),this.summary.style.cursor="pointer",o.on(this.summary,"click",()=>(this.inputs.enabled.checked=!this.inputs.enabled.checked,o.event("change",null,this.inputs.enabled)));const e=te.checkbox("Prune Replies","Show Last",l["Prune All Threads"]),t=o.el("span",{title:"Maximum number of replies to show."},{innerHTML:' <input type="number" name="Max Replies" min="0" step="1" value="'+oe(l["Max Replies"])+'" class="field">'});return o.prepend(t,e),this.inputs={enabled:e.firstElementChild,replies:t.lastElementChild},this.setEnabled.call(this.inputs.enabled),o.on(this.inputs.enabled,"change",this.setEnabled),o.on(this.inputs.replies,"change",o.cb.value),x.menu.addEntry({el:t,order:190}),N.Thread.push({name:"Reply Pruning",cb:this.node})},position:0,hidden:0,hiddenFiles:0,total:0,totalFiles:0,setEnabled(){const e=se.input;return this.checked&&e?.checked&&(e.checked=!1,o.event("change",null,e)),U.active=this.checked},showIfHidden(e){if(U.container&&o(`#${e}`,U.container))return U.inputs.enabled.checked=!1,o.event("change",null,U.inputs.enabled)},node(){let e;return U.thread=this,this.isSticky&&(U.active=U.inputs.enabled.checked=!0,se.input&&(l["Thread Quotes"]=se.input.checked=!1)),this.posts.forEach(function(t){if(t.isReply&&(U.total++,t.file))return U.totalFiles++}),U.active&&/^#p\d+$/.test(location.hash)&&1<=(e=this.posts.keys.indexOf(location.hash.slice(2)))&&e<1+Math.max(U.total-+l["Max Replies"],0)&&(U.active=U.inputs.enabled.checked=!1),o.after(this.OP.nodes.root,U.summary),o.on(U.inputs.enabled,"change",U.update),o.on(U.inputs.replies,"change",U.update),o.on(m,"ThreadUpdate",U.updateCount),o.on(m,"ThreadUpdate",U.update),U.update()},updateCount(e){if(!e.detail[404])for(var t of e.detail.newPosts)U.total++,c.posts.get(t).file&&U.totalFiles++},update(){let e,t,i;const n=U.hidden,s=U.active?Math.max(U.total-+l["Max Replies"],0):0,r=m.body.clientHeight-window.scrollY,{posts:a}=U.thread;if(U.hidden<s){for(;U.hidden<s&&U.position<a.keys.length;)if(i=a.get(a.keys[U.position++]),i.isReply&&!i.isFetchedQuote){for(;(t=U.summary.nextSibling)&&t!==i.nodes.root;)o.add(U.container,t);o.add(U.container,i.nodes.root),U.hidden++,i.file&&U.hiddenFiles++}}else if(U.hidden>s){const h=o.frag();for(;U.hidden>s&&U.position>0;)if(i=a.get(a.keys[--U.position]),i.isReply&&!i.isFetchedQuote){for(;(t=U.container.lastChild)&&t!==i.nodes.root;)o.prepend(h,t);o.prepend(h,i.nodes.root),U.hidden--,i.file&&U.hiddenFiles--}o.after(U.summary,h),o.event("PostsInserted",null,U.summary.parentNode)}if(U.summary.textContent=U.active?c.SITE.Build.summaryText("+",U.hidden,U.hiddenFiles):c.SITE.Build.summaryText("-",U.total,U.totalFiles),U.summary.hidden=U.total<=+l["Max Replies"],n!==s&&(e=x.getTopOf(o(".board")))<0)return window.scrollBy(0,Math.max(m.body.clientHeight-r,window.scrollY+e)-window.scrollY)}},se={init(){!l["Quote Threading"]||c.VIEW!=="thread"||(this.controls=o.el("label",{innerHTML:'<input id="threadingControl" name="Thread Quotes" type="checkbox"> Threading'}),this.threadNewLink=o.el("span",{className:"brackets-wrap threadnewlink",hidden:!0}),o.extend(this.threadNewLink,{innerHTML:'<a href="javascript:;">Thread New Posts</a>'}),this.input=o("input",this.controls),this.input.checked=l["Thread Quotes"],o.on(this.input,"change",this.setEnabled),o.on(this.input,"change",this.rethread),o.on(this.threadNewLink.firstElementChild,"click",this.rethread),o.on(m,"4chanXInitFinished",()=>{this.ready=!0}),x.menu.addEntry(this.entry={el:this.controls,order:99}),N.Thread.push({name:"Quote Threading",cb:this.setThread}),N.Post.push({name:"Quote Threading",cb:this.node}))},parent:S(),children:S(),inserted:S(),toggleThreading(){this.setThreadingState(!l["Thread Quotes"])},setThreadingState(e){this.input.checked=e,this.setEnabled.call(this.input),this.rethread.call(this.input)},setEnabled(){if(this.checked){o.set("Prune All Threads",!1);const e=U.inputs?.enabled;e?.checked&&(e.checked=!1,o.event("change",null,e))}o.cb.checked.call(this)},setThread(){se.thread=this,o.asap(()=>!l["Thread Updater"]||o(".navLinksBot > .updatelink"),function(){let e;(e=o(".navLinksBot"))&&o.add(e,[o.tn(" "),se.threadNewLink])})},node(){let e;if(this.isFetchedQuote||this.isClone||!this.isReply)return;const t=new Set;let i=null;for(var n of this.quotes)(e=c.posts.get(n))&&!e.isFetchedQuote&&e.isReply&&e.ID<this.ID&&(t.add(e.ID),(!i||e.ID>i.ID)&&(i=e));if(!i)return;let s=i;for(;s=se.parent[s.fullID];)t.delete(s.ID);t.size===1&&(se.parent[this.fullID]=i)},descendants(e){let t,i=[e];if(t=se.children[e.fullID])for(var n of t)i=i.concat(se.descendants(n));return i},insert(e){let t,i;if(!(l["Thread Quotes"]&&(t=se.parent[e.fullID])&&!se.inserted[e.fullID]))return!1;const n=se.descendants(e);if(!A.posts.has(t.ID)&&function(){for(var g of n)if(A.posts.has(g.ID))return!0}())return se.threadNewLink.hidden=!1,!1;const{order:s}=A,r=se.children[t.fullID]||(se.children[t.fullID]=[]),a=t.nodes.threadContainer||o.el("div",{className:"threadContainer"}),h=[e.nodes.root];e.nodes.threadContainer&&h.push(e.nodes.threadContainer);let u=r.length;for(let g=r.length-1;g>=0;g--){var f=r[g];f.ID>=e.ID&&u--}if(u!==r.length){const g=r[u];for(i of n)s.before(s[g.ID],s[i.ID]);r.splice(u,0,e),o.before(g.nodes.root,h)}else{let g,b=t;for(;(g=se.children[b.fullID])&&g.length;)b=g[g.length-1];for(let I=n.length-1;I>=0;I--)i=n[I],s.after(s[b.ID],s[i.ID]);r.push(e),o.add(a,h)}return se.inserted[e.fullID]=!0,t.nodes.threadContainer||(t.nodes.threadContainer=a,o.addClass(t.nodes.root,"threadOP"),o.after(t.nodes.root,a)),!0},rethread(){if(!se.ready)return;const{thread:e}=se,{posts:t}=e;if(se.threadNewLink.hidden=!0,l["Thread Quotes"])t.forEach(se.insert);else{const i=[];A.order=new Et,se.inserted=S(),t.forEach(function(n){n.isFetchedQuote||(A.order.push(n),n.isReply&&i.push(n.nodes.root),se.children[n.fullID]&&(delete se.children[n.fullID],o.rmClass(n.nodes.root,"threadOP"),o.rm(n.nodes.threadContainer),delete n.nodes.threadContainer))}),o.add(e.nodes.root,i)}A.position=A.order.first,A.updatePosition(),A.setLine(!0),A.read(),A.update()}};const mt={restore(){const e=Y.to("threadJSON",{boardID:c.boardID,threadID:c.threadID});if(!e){new G("warning","No archive found",3);return}(e.startsWith("https://")||l["Exempt Archives from Encryption"])&&xe.ajax(e,{onloadend(){if(this.status<200||this.status>=400){const r=oe(new URL(e).origin);new G("error",o.el("div",{innerHTML:`There was an error while fetching from the archive. See the console for details.<br />Some archive check the browser first before checking content, you might need to open the archive first to get past the browser check: <a href="${r}" target="_blank">${r}</a><br />If that doesn't work, try a different archive under Settings > Advanced > Archives > Thread fetching.`})),console.error(this);return}let i=0;const n=this.response[c.threadID.toString()].posts;for(const[r,a]of Object.entries(n))mt.insert(a)[1]&&++i;let s;i===0?s="No removed posts found":i===1?s="1 post restored":s=`${i} posts restored`,new G("info",s,3)}})},init(){if(c.VIEW!=="thread")return;const e=o.el("a",{href:"javascript:;",textContent:"Restore from archive"});o.on(e,"click",()=>{mt.restore(),x.menu.close()}),x.menu.addEntry({el:e,order:10})},insert(e){const t=`${e.board.shortname}.${e.num}`;if(c.posts.keys.includes(t))return[void 0,!1];let i=!1;const n=xs(e);if(n.resurrect(),n.markAsFromArchive(),n.threadID===c.threadID&&c.VIEW==="thread"){const s=c.posts.insert(t,n,r=>+r.split(".")[1]<n.ID);l["Thread Quotes"]?n.thread.nodes.root.insertAdjacentElement("beforeend",n.root):c.posts.get(c.posts.keys[s-1]).root.insertAdjacentElement("afterend",n.root),se.insert(n),i=!0;for(const r of F.allQuotelinksLinkingTo(n))r.href=`#p${n.ID}`}return[n,i]}};class Qe{constructor(t,i,n,s,r){let a,h;if(this.boardID=t,this.threadID=i,this.postID=n,this.root=s,this.quoter=r,a=c.posts.get(`${this.boardID}.${this.postID}`)){this.insert(a);return}if((a=p.replyData?.[`${this.boardID}.${this.postID}`])&&(h=c.threads.get(`${this.boardID}.${this.threadID}`))){const u=c.boards[this.boardID];a=new ye(c.SITE.Build.postFromObject(a,this.boardID),h,u,{isFetchedQuote:!0}),D.callbackNodes("Post",[a]),this.insert(a);return}if(this.root.textContent=`Loading post No.${this.postID}...`,this.threadID){const u=this;o.cache(c.SITE.urls.threadJSON({boardID:this.boardID,threadID:this.threadID}),function({isCached:f}){return u.fetchedPost(this,f)})}else this.archivedPost()}insert(t){if(!this.root.parentNode)return;this.quoter||(this.quoter=t);const i=t.addClone(this.quoter.context,o.hasClass(this.root,"dialog"));D.callbackNodes("Post",[i]);const{nodes:n}=i;o.rmAll(n.root),o.add(n.root,n.post);const s=[...i.nodes.quotelinks,...i.nodes.backlinks];for(var r of s){var{boardID:a,postID:h}=F.postDataFromLink(r);h===this.quoter.ID&&a===this.quoter.board.ID&&o.addClass(r,"forwardlink")}if(i.nodes.flag&&!(Qe.flagCSS||(Qe.flagCSS=o('link[href^="//s.4cdn.org/css/flags."]')))){const u=o('link[href^="//s.4cdn.org/css/"]')?.href.match(/\d+(?=\.css$)|$/)[0]||Date.now();Qe.flagCSS=o.el("link",{rel:"stylesheet",href:`//s.4cdn.org/css/flags.${u}.css`}),o.add(m.head,Qe.flagCSS)}return o.rmAll(this.root),o.add(this.root,n.root),o.event("PostsInserted",null,this.root)}fetchedPost(t,i){let n;if(n=c.posts.get(`${this.boardID}.${this.postID}`)){this.insert(n);return}const{status:s}=t;if(s!==200){if(s&&this.archivedPost())return;o.addClass(this.root,"warning"),this.root.textContent=s===404?`Thread No.${this.threadID} 404'd.`:s?`Error ${t.statusText} (${t.status}).`:"Connection Error";return}const{posts:r}=t.response;c.SITE.Build.spoilerRange[this.boardID]=r[0].custom_spoiler;for(n of r)if(n.no===this.postID)break;if(n.no!==this.postID){if(i){const u=c.SITE.urls.threadJSON({boardID:this.boardID,threadID:this.threadID});o.cleanCache(g=>g===u);const f=this;o.cache(u,function(){return f.fetchedPost(this,!1)});return}if(this.archivedPost())return;o.addClass(this.root,"warning"),this.root.textContent=`Post No.${this.postID} was not found.`;return}const a=c.boards[this.boardID]||new tt(this.boardID),h=c.threads.get(`${this.boardID}.${this.threadID}`)||new Ye(this.threadID,a);return n=new ye(c.SITE.Build.postFromObject(n,this.boardID),h,a,{isFetchedQuote:!0}),D.callbackNodes("Post",[n]),this.insert(n)}archivedPost(){let t;if(!l["Resurrect Quotes"]||!(t=Y.to("post",{boardID:this.boardID,postID:this.postID})))return!1;const i=Y.data.post[this.boardID],n=/^https:\/\//.test(t)||location.protocol==="http:";if(n||l["Exempt Archives from Encryption"]){const s=this;return xe.cache(t,function(){if(!n&&this.response?.media){const{media:a}=this.response;for(var r in a)/_link$/.test(r)&&(o.getOwn(a,r)?.match(/^http:\/\//)||delete a[r])}return s.parseArchivedPost(this.response,t,i)}),!0}return!1}parseArchivedPost(t,i,n){let s;if(s=c.posts.get(`${this.boardID}.${this.postID}`)){this.insert(s);return}if(t==null){o.addClass(this.root,"warning"),this.root.textContent=`Error fetching Post No.${this.postID} from ${n.name}.`;return}if(t.error){o.addClass(this.root,"warning"),this.root.textContent=t.error;return}return this.insert(mt.insert(t)[0])}}Qe.archiveTags={"\n":{innerHTML:"<br>"},"[b]":{innerHTML:"<b>"},"[/b]":{innerHTML:"</b>"},"[spoiler]":{innerHTML:"<s>"},"[/spoiler]":{innerHTML:"</s>"},"[code]":{innerHTML:'<pre class="prettyprint">'},"[/code]":{innerHTML:"</pre>"},"[moot]":{innerHTML:'<div style="padding:5px;margin-left:.5em;border-color:#faa;border:2px dashed rgba(255,0,0,.1);border-radius:2px">'},"[/moot]":{innerHTML:"</div>"},"[banned]":{innerHTML:'<strong style="color: red;">'},"[/banned]":{innerHTML:"</strong>"},"[fortune]"(e){return{innerHTML:'<span class="fortune" style="color:'+oe(e.match(/#\w+|$/)[0])+'"><b>'}},"[/fortune]":{innerHTML:"</b></span>"},"[i]":{innerHTML:'<span class="mu-i">'},"[/i]":{innerHTML:"</span>"},"[red]":{innerHTML:'<span class="mu-r">'},"[/red]":{innerHTML:"</span>"},"[green]":{innerHTML:'<span class="mu-g">'},"[/green]":{innerHTML:"</span>"},"[blue]":{innerHTML:'<span class="mu-b">'},"[/blue]":{innerHTML:"</span>"}};var ot={init(){if(l["Quote Previewing"]&&(c.VIEW==="archive"&&o.on(m,"mouseover",function(e){if(e.target.nodeName==="A"&&o.hasClass(e.target,"quotelink"))return ot.mouseover.call(e.target,e)}),!!["index","thread"].includes(c.VIEW)))return l["Comment Expansion"]&&Ee.callbacks.push(this.node),N.Post.push({name:"Quote Previewing",cb:this.node})},node(){for(var e of this.nodes.quotelinks.concat([...this.nodes.backlinks],this.nodes.archivelinks))o.on(e,"mouseover",ot.mouseover)},mouseover(e){let t;if(o.hasClass(this,"inlined")&&!o.hasClass(w,"catalog-mode")||!m.contains(this))return;const{boardID:i,threadID:n,postID:s}=F.postDataFromLink(this),r=o.el("div",{id:"qp",className:"dialog"});if(o.add(x.hover,r),new Qe(i,n,s,r,F.postFromNode(this)),te.hover({root:this,el:r,latestEvent:e,endEvents:"mouseout click",cb:ot.mouseout}),l["Quote Highlighting"]&&(t=c.posts.get(`${i}.${s}`))){const h=[t].concat(t.clones);h.pop();for(var a of h)o.addClass(a.nodes.post,"qphl")}},mouseout(){let e;if(!(e=this.el.firstElementChild))return;o.event("PostsRemoved",null,x.hover);let i=F.postFromRoot(e).origin;if(i.rmClone(e.dataset.clone),!!l["Quote Highlighting"])for(i of[i].concat(i.clones))o.rmClass(i.nodes.post,"qphl")}},ws=`<span class="brackets-wrap indexlink"><a href="#index">Index</a></span> 
<span class="brackets-wrap cataloglink"><a href="#catalog">Catalog</a></span> 
<span class="brackets-wrap archlistlink"><a href="./archive">Archive</a></span> 
<span class="brackets-wrap bottomlink"><a href="#bottom">Bottom</a></span> 
<span class="brackets-wrap" id="index-last-refresh"><a href="javascript:;"><time title="Last index refresh">...</time></a></span> 
<input type="search" id="index-search" class="field" placeholder="Search">
<a id="index-search-clear" href="javascript:;" title="Clear search">\xD7</a>
<span id="hidden-label" hidden> &mdash; <span id="hidden-count"></span> <span id="hidden-toggle">[<a href="javascript:;">Show</a>]</span></span>
<span id="index-options">
  <input type="checkbox" id="index-rev" name="Reverse Sort" title="Reverse sort order">
  <span id="lastlong-options" hidden>
    <input type="text" title="Minimum letter count (without image)">
    <input type="text" title="Minimum letter count (with image)">
  </span>
  <select id="index-sort" name="Index Sort">
    <option disabled>Index Sort</option>
    <option value="bump">Bump order</option>
    <option value="lastreply">Last reply</option>
    <option value="lastlong">Last long reply</option>
    <option value="birth">Creation date</option>
    <option value="replycount">Reply count</option>
    <option value="filecount">File count</option>
    <option value="activity">Posts per minute</option>
  </select>
  <select id="index-size" name="Index Size">
    <option disabled>Image Size</option>
    <option value="small">Small</option>
    <option value="large">Large</option>
  </select>
  <select id="index-mode" name="Index Mode">
    <option disabled>Index Mode</option>
    <option value="paged">Paged</option>
    <option value="infinite">Infinite scrolling</option>
    <option value="all pages">All threads</option>
    <option value="catalog">Catalog</option>
  </select>
</span>`,ys=`<div class="prev">
  <a>
    <button disabled>Previous</button>
  </a>
</div>
<div class="pages"></div>
<div class="next">
  <a>
    <button disabled>Next</button>
  </a>
</div>
<div class="pages cataloglink">
  <a href="./catalog">Catalog</a>
</div>`,p={showHiddenThreads:!1,changed:{},enabledOn({siteID:e,boardID:t}){return l["JSON Index"]&&c.sites[e].software==="yotsuba"&&t!=="f"},init(){let e,t,i;if(c.VIEW!=="index"||(o.one(m,"4chanXInitFinished",this.cb.initFinished),o.on(m,"PostsInserted",this.cb.postsInserted),!this.enabledOn(c.BOARD)))return;this.enabled=!0,N.Post.push({name:"Index Page Numbers",cb:this.node}),N.CatalogThread.push({name:"Catalog Features",cb:this.catalogNode}),this.search=history.state?.searched||"",history.state?.mode&&(l["Index Mode"]=history.state?.mode),this.currentSort=history.state?.sort,this.currentSort||(this.currentSort=typeof l["Index Sort"]=="object"?l["Index Sort"][c.BOARD.ID]||"bump":l["Index Sort"]),this.currentPage=this.getCurrentPage(),this.processHash(),o.addClass(w,"index-loading",`${l["Index Mode"].replace(/\ /g,"-")}-mode`),o.on(window,"popstate",this.cb.popstate),o.on(m,"scroll",this.scroll),o.on(m,"SortIndex",this.cb.resort),this.button=o.el("a",{title:"Refresh",href:"javascript:;"}),q.set(this.button,"refresh","Refresh"),o.on(this.button,"click",()=>p.update()),x.addShortcut("index-refresh",this.button,590);const n=[];this.inputs=t=S();for(i in ge.Index){var s=ge.Index[i];if(s instanceof Array){var r=te.checkbox(i,`${i[0]}${i.slice(1).toLowerCase()}`);r.title=s[1],n.push({el:r}),e=r.firstChild,o.on(e,"change",o.cb.checked),t[i]=e}}o.on(t["Show Replies"],"change",this.cb.replies),o.on(t["Catalog Hover Expand"],"change",this.cb.hover),o.on(t["Pin Watched Threads"],"change",this.cb.resort),o.on(t["Anchor Hidden Threads"],"change",this.cb.resort);const a=function(g){if(e=o.getOwn(t,g.target.name))return e.checked=g.target.checked,o.event("change",null,e)};o.on(m,"OpenSettings",()=>o.on(o.id("fourchanx-settings"),"change",a));const h=te.checkbox("Per-Board Sort Type","Per-board sort type",typeof l["Index Sort"]=="object");h.title="Set the sorting order of each board independently.",o.on(h.firstChild,"change",this.cb.perBoardSort),n.splice(3,0,{el:h}),x.menu.addEntry({el:o.el("span",{textContent:"Index Navigation"}),order:100,subEntries:n}),this.navLinks=o.el("div",{className:"navLinks json-index"}),o.extend(this.navLinks,{innerHTML:ws}),o(".cataloglink a",this.navLinks).href=re.catalog(),fe.isArchived(c.BOARD.ID)||(o(".archlistlink",this.navLinks).hidden=!0),o.on(o("#index-last-refresh a",this.navLinks),"click",this.cb.refreshFront),this.searchInput=o("#index-search",this.navLinks),this.setupSearch(),o.on(this.searchInput,"input",this.onSearchInput),o.on(o("#index-search-clear",this.navLinks),"click",this.clearSearch),q.set(o("#index-search-clear",this.navLinks),"xmark"),this.hideLabel=o("#hidden-label",this.navLinks),o.on(o("#hidden-toggle a",this.navLinks),"click",this.cb.toggleHiddenThreads),this.selectRev=o("#index-rev",this.navLinks),this.selectMode=o("#index-mode",this.navLinks),this.selectSort=o("#index-sort",this.navLinks),this.selectSize=o("#index-size",this.navLinks),o.on(this.selectRev,"change",this.cb.sort),o.on(this.selectMode,"change",this.cb.mode),o.on(this.selectSort,"change",this.cb.sort),o.on(this.selectSize,"change",o.cb.value),o.on(this.selectSize,"change",this.cb.size);for(var u of[this.selectMode,this.selectSize])u.value=l[u.name];this.selectRev.checked=/-rev$/.test(p.currentSort),this.selectSort.value=p.currentSort.replace(/-rev$/,""),this.lastLongOptions=o("#lastlong-options",this.navLinks),this.lastLongInputs=L("input",this.lastLongOptions),this.lastLongThresholds=[0,0],this.lastLongOptions.hidden=this.selectSort.value!=="lastlong";for(let g=0;g<this.lastLongInputs.length;g++){e=this.lastLongInputs[g],o.on(e,"change",this.cb.lastLongThresholds);var f=l[`Last Long Reply Thresholds ${g}`];e.value=this.lastLongThresholds[g]=typeof f=="object"?f[c.BOARD.ID]??100:f}return this.root=o.el("div",{className:"board json-index"}),o.on(this.root,"click",this.cb.hoverToggle),this.cb.size(),this.cb.hover(),this.pagelist=o.el("div",{className:"pagelist json-index"}),o.extend(this.pagelist,{innerHTML:ys}),o(".cataloglink a",this.pagelist).href=re.catalog(),o.on(this.pagelist,"click",this.cb.pageNav),this.update(!0),o.onExists(w,"title + *",()=>m.title=m.title.replace(/\ -\ Page\ \d+/,"")),o.onExists(w,".board > .thread > .postContainer, .board + *",function(){let g;c.SITE.Build.hat=o(".board > .thread > img:first-child"),c.SITE.Build.hat&&(c.BOARD.threads.forEach(function(R){if(R.nodes.root)return o.prepend(R.nodes.root,c.SITE.Build.hat.cloneNode(!1))}),o.addClass(w,"hats-enabled"),o.addStyle(`.catalog-thread::after {background-image: url(${c.SITE.Build.hat.src});}`));const b=o(".board");o.replace(b,p.root),p.loaded&&o.event("PostsInserted",null,p.root);try{m.implementation.createDocument(null,null,null).appendChild(b)}catch{}for(g of L(".navLinks"))o.rm(g);o.rm(o.id("ctrl-top"));const I=o.id("delform").previousElementSibling;o.before(I,o.el("hr")),o.before(I,p.navLinks);const T=o("#index-last-refresh time",p.navLinks);if(T.dataset.utc)return Ae.update(T)}),D.ready(function(){let g;return(g=o(".pagelist"))&&o.replace(g,p.pagelist),o.rmClass(w,"index-loading")})},scroll(){if(p.req||!p.liveThreadData||l["Index Mode"]!=="infinite"||window.scrollY<=w.scrollHeight-(300+window.innerHeight))return;p.pageNum==null&&(p.pageNum=p.currentPage);const e=++p.pageNum;if(e>p.pagesNum)return p.endNotice();const t=p.threadsOnPage(e);return p.buildStructure(t)},endNotice:function(){let e=!1;const t=()=>e=!1;return function(){if(!e)return e=!0,new G("info","Last page reached.",2),setTimeout(t,3*ie)}}(),menu:{init(){if(!(c.VIEW!=="index"||!l.Menu||!l["Thread Hiding Link"]||!p.enabledOn(c.BOARD)))return he.menu.addEntry({el:o.el("a",{href:"javascript:;",className:"has-shortcut-text"},{innerHTML:'<span></span><span class="shortcut-text">Shift+click</span>'}),order:20,open({thread:e}){return l["Index Mode"]!=="catalog"?!1:(this.el.firstElementChild.textContent=e.isHidden?"Unhide":"Hide",this.cb&&o.off(this.el,"click",this.cb),this.cb=function(){return o.event("CloseMenu"),p.toggleHide(e)},o.on(this.el,"click",this.cb),!0)}})}},node(){if(!(this.isReply||this.isClone||p.threadPosition[this.ID]==null))return this.thread.setPage(Math.floor(p.threadPosition[this.ID]/p.threadsNumPerPage)+1)},catalogNode(){return o.on(this.nodes.root,"click",e=>{e.button!==0||!e.shiftKey||(e.preventDefault(),getSelection().removeAllRanges(),l["MD5 Quick Filter in the Catalog"]&&e.target.classList.contains("catalog-thumb")?V.quickFilterMD5.call(this.thread.OP):p.toggleHide(this.thread))})},toggleHide(e){if(p.showHiddenThreads){if(W.show(e),!W.db.get({boardID:e.board.ID,threadID:e.ID}))return}else W.hide(e);return W.saveHiddenState(e)},cycleSortType(){let e;const t=p.selectSort.options.filter(n=>!n.disabled);for(e=0;e<t.length;e++){var i=t[e];if(i.selected)break}return t[(e+1)%t.length].selected=!0,o.event("change",null,p.selectSort)},cb:{initFinished(){return p.initFinishedFired=!0,o.queueTask(()=>p.cb.postsInserted())},postsInserted(){if(!p.initFinishedFired)return;let e=0;if(c.posts.forEach(function(t){if(!t.isFetchedQuote&&!t.indexRefreshSeen&&w.contains(t.nodes.root))return t.indexRefreshSeen=!0,e++}),e)return o.event("IndexRefresh")},toggleHiddenThreads(){return o("#hidden-toggle a",p.navLinks).textContent=(p.showHiddenThreads=!p.showHiddenThreads)?"Hide":"Show",p.sort(),p.buildIndex()},mode(){return p.pushState({mode:this.value}),p.pageLoad(!1)},sort(){const e=p.selectRev.checked?p.selectSort.value+"-rev":p.selectSort.value;return p.pushState({sort:e}),p.pageLoad(!1)},resort(e){if(p.changed.order=!0,!e?.detail?.deferred)return p.pageLoad(!1)},perBoardSort(){l["Index Sort"]=this.checked?S():"",p.saveSort();for(let e=0;e<2;e++)l[`Last Long Reply Thresholds ${e}`]=this.checked?S():"",p.saveLastLongThresholds(e)},lastLongThresholds(){const e=[...this.parentNode.children].indexOf(this),t=+this.value;if(!Number.isFinite(t)){this.value=p.lastLongThresholds[e];return}return p.lastLongThresholds[e]=t,p.saveLastLongThresholds(e),p.changed.order=!0,p.pageLoad(!1)},size(e){if(l["Index Mode"]!=="catalog"?(o.rmClass(p.root,"catalog-small"),o.rmClass(p.root,"catalog-large")):l["Index Size"]==="small"?(o.addClass(p.root,"catalog-small"),o.rmClass(p.root,"catalog-large")):(o.addClass(p.root,"catalog-large"),o.rmClass(p.root,"catalog-small")),e)return p.buildIndex()},replies(){return p.buildIndex()},hover(){return w.classList.toggle("catalog-hover-expand",l["Catalog Hover Expand"])},hoverToggle(e){if(l["Catalog Hover Toggle"]&&o.hasClass(w,"catalog-mode")&&!o.modifiedClick(e)&&!o.x("ancestor-or-self::a",e.target)){let t;const i=p.inputs["Catalog Hover Expand"];if(i.checked=!i.checked,o.event("change",null,i),t=F.threadFromNode(e.target))return p.cb.catalogReplies.call(t),p.cb.hoverAdjust.call(t.OP.nodes)}},popstate(e){if(e?.state){const{searched:t,mode:i,sort:n}=e.state,s=p.getCurrentPage();return p.setState({search:t,mode:i,sort:n,page:s}),p.pageLoad(!1)}else{const t=p.processHash();return l["Refreshed Navigation"]&&t?p.update():p.pageLoad()}},pageNav(e){let t;if(!o.modifiedClick(e)){switch(e.target.nodeName){case"BUTTON":e.target.blur(),t=e.target.parentNode;break;case"A":t=e.target;break;default:return}if(t.textContent!=="Catalog")return e.preventDefault(),p.userPageNav(+t.pathname.split(/\/+/)[2]||1)}},refreshFront(){return p.pushState({page:1}),p.update()},catalogReplies(){if(l["Show Replies"]&&o.hasClass(w,"catalog-hover-expand")&&!this.catalogView.nodes.replies)return p.buildCatalogReplies(this)},hoverAdjust(){let e;if(!o.hasClass(w,"catalog-hover-expand"))return;const t=this.post.getBoundingClientRect();if(e=o.minmax(0,-t.left,w.clientWidth-t.right)){const{style:i}=this.post;return i.left=`${e}px`,i.right=`${-e}px`,o.one(this.root,"mouseleave",()=>i.left=i.right=null)}}},scrollToIndex(){return x.scrollToIfNeeded(p.navLinks.getBoundingClientRect().height?p.navLinks:p.root)},getCurrentPage(){return+window.location.pathname.split(/\/+/)[2]||1},userPageNav(e){return p.pushState({page:e}),l["Refreshed Navigation"]?p.update():p.pageLoad()},hashCommands:{mode:{paged:"paged","infinite-scrolling":"infinite",infinite:"infinite","all-threads":"all pages","all-pages":"all pages",catalog:"catalog"},sort:{"bump-order":"bump","last-reply":"lastreply","last-long-reply":"lastlong","creation-date":"birth","reply-count":"replycount","file-count":"filecount","posts-per-minute":"activity"}},processHash(){let e=location.href.match(/#.*/)?.[0]||"";const t={replace:!0},i=e.slice(1).split("/"),n=[];for(var s of i){var r,a;(r=o.getOwn(p.hashCommands.mode,s))?t.mode=r:s==="index"?(t.mode=l["Previous Index Mode"],t.page=1):(a=o.getOwn(p.hashCommands.sort,s.replace(/-rev$/,"")))?(t.sort=a,/-rev$/.test(s)&&(t.sort+="-rev")):/^s=/.test(s)?t.search=decodeURIComponent(s.slice(2)).replace(/\+/g," ").trim():n.push(s)}return e=n.join("/"),e&&(t.hash=`#${e}`),p.pushState(t),i.length-n.length},pushState(e){let{search:t,hash:i,replace:n}=e,s=history.state?.oldpage;t!=null&&t!==p.search&&(e.page=t?1:s||1,t?p.search||(s=p.currentPage):s=void 0),p.setState(e);const r=p.currentPage===1?`/${c.BOARD}/`:`/${c.BOARD}/${p.currentPage}`;return i||(i=""),history[n?"replaceState":"pushState"]({mode:l["Index Mode"],sort:p.currentSort,searched:p.search,oldpage:s},"",`${location.protocol}//${location.host}${r}${i}`)},setState({search:e,mode:t,sort:i,page:n,hash:s}){if(e!=null&&e!==p.search&&(p.changed.search=!0,p.search=e),t!=null&&t!==l["Index Mode"]&&(p.changed.mode=!0,l["Index Mode"]=t,o.set("Index Mode",t),t!=="catalog"&&l["Previous Index Mode"]!==t&&(l["Previous Index Mode"]=t,o.set("Previous Index Mode",t))),i!=null&&i!==p.currentSort&&(p.changed.sort=!0,p.currentSort=i,p.saveSort()),["all pages","catalog"].includes(l["Index Mode"])&&(n=1),n!=null&&n!==p.currentPage&&(p.changed.page=!0,p.currentPage=n),s!=null)return p.changed.hash=!0},savePerBoard(e,t){return typeof l[e]=="object"?l[e][c.BOARD.ID]=t:l[e]=t,o.set(e,l[e])},saveSort(){return p.savePerBoard("Index Sort",p.currentSort)},saveLastLongThresholds(e){return p.savePerBoard(`Last Long Reply Thresholds ${e}`,p.lastLongThresholds[e])},pageLoad(e=!0){if(!p.liveThreadData)return;let{threads:t,order:i,search:n,mode:s,sort:r,page:a,hash:h}=p.changed;return t||(t=n),i||(i=r),(t||i)&&p.sort(),t&&p.buildPagelist(),n&&p.setupSearch(),s&&p.setupMode(),r&&p.setupSort(),(t||s||a||i)&&p.buildIndex(),(t||a)&&p.setPage(),e&&!h&&p.scrollToIndex(),p.changed={}},setupMode(){for(var e of["paged","infinite","all pages","catalog"])o[e===l["Index Mode"]?"addClass":"rmClass"](w,`${e.replace(/\ /g,"-")}-mode`);return p.selectMode.value=l["Index Mode"],p.cb.size(),p.showHiddenThreads=!1,o("#hidden-toggle a",p.navLinks).textContent="Show"},setupSort(){return p.selectRev.checked=/-rev$/.test(p.currentSort),p.selectSort.value=p.currentSort.replace(/-rev$/,""),p.lastLongOptions.hidden=p.selectSort.value!=="lastlong"},getPagesNum(){return p.search?Math.ceil(p.sortedThreadIDs.length/p.threadsNumPerPage):p.pagesNum},getMaxPageNum(){return Math.max(1,p.getPagesNum())},buildPagelist(){const e=o(".pages",p.pagelist),t=p.getMaxPageNum();if(e.childElementCount!==t){const n=[];for(let s=1,r=t;s<=r;s++){var i=o.el("a",{textContent:s,href:s===1?"./":s});n.push(o.tn("["),i,o.tn("] "))}return o.rmAll(e),o.add(e,n)}},setPage(){let e,t;const i=p.currentPage,n=p.getMaxPageNum(),s=o(".pages",p.pagelist),r=s.previousElementSibling.firstElementChild,a=s.nextElementSibling.firstElementChild;let h=Math.max(i-1,1);if(r.href=h===1?"./":h,r.firstElementChild.disabled=h===i,h=Math.min(i+1,n),a.href=h===1?"./":h,a.firstElementChild.disabled=h===i,t=o("strong",s)){if(+t.textContent===i)return;o.replace(t,t.firstChild)}else t=o.el("strong");if(e=s.children[i-1])return o.before(e,t),o.add(t,e)},updateHideLabel(){if(!p.hideLabel)return;let e=0;for(var t of p.liveThreadIDs)p.isHidden(t)&&e++;if(!e){p.hideLabel.hidden=!0,p.showHiddenThreads&&p.cb.toggleHiddenThreads();return}return p.hideLabel.hidden=!1,o("#hidden-count",p.navLinks).textContent=e===1?"1 hidden thread":`${e} hidden threads`},update(e){let t;if((t=p.req)&&(delete p.req,t.abort()),l["Index Refresh Notifications"]?(p.notice||(p.notice=new G("info","Refreshing index...")),p.nTimeout||(p.nTimeout=setTimeout(()=>{p.notice&&(p.notice.el.lastElementChild.textContent+=" (disable JSON Index if this takes too long)")},3*ie))):p.nTimeout||(p.nTimeout=setTimeout(()=>p.notice||(p.notice=new G("info","Refreshing index... (disable JSON Index if this takes too long)")),3*ie)),!e&&m.readyState!=="loading"&&!o(".board + *")){location.reload();return}return p.req=o.whenModified(c.SITE.urls.catalogJSON({boardID:c.BOARD.ID}),"Index",p.load),o.addClass(p.button,"spin")},load(){let e;if(this!==p.req)return;o.rmClass(p.button,"spin");const{notice:t,nTimeout:i}=p;if(i&&clearTimeout(i),delete p.nTimeout,delete p.req,delete p.notice,![200,304].includes(this.status)){e=`Index refresh failed. ${this.status?`Error ${this.statusText} (${this.status})`:"Connection Error"}`,t?(t.setType("warning"),t.el.lastElementChild.textContent=e,setTimeout(t.close,ie)):new G("warning",e,1);return}try{this.status===200?p.parse(this.response):this.status===304&&p.pageLoad()}catch(s){e=s,ut.error(`Index failure: ${e.message}`,e.stack),t?(t.setType("error"),t.el.lastElementChild.textContent="Index refresh failed.",setTimeout(t.close,ie)):new G("error","Index refresh failed.",1);return}t&&(l["Index Refresh Notifications"]?(t.setType("success"),t.el.lastElementChild.textContent="Index refreshed!",setTimeout(t.close,ie)):t.close());const n=o("#index-last-refresh time",p.navLinks);return n.dataset.utc=Date.parse(this.getResponseHeader("Last-Modified")),Ae.update(n)},parse(e){return o.cleanCache(t=>/^https?:\/\/a\.4cdn\.org\//.test(t)),p.parseThreadList(e),p.changed.threads=!0,p.pageLoad()},parseThreadList(e){p.pagesNum=e.length,p.threadsNumPerPage=e[0]?.threads.length||1,p.liveThreadData=e.reduce((r,a)=>r.concat(a.threads),[]),p.liveThreadIDs=p.liveThreadData.map(r=>r.no),p.liveThreadDict=S(),p.threadPosition=S(),p.parsedThreads=S(),p.replyData=S();for(let r=0;r<p.liveThreadData.length;r++){var t,i,n=p.liveThreadData[r];if(p.liveThreadDict[n.no]=n,p.threadPosition[n.no]=r,p.parsedThreads[n.no]=t=c.SITE.Build.parseJSON(n,c.BOARD),i=V.test(t),t.isOnTop=i.top,t.isHidden=i.hide||W.isHidden(t.boardID,t.threadID),n.last_replies)for(var s of n.last_replies)p.replyData[`${c.BOARD}.${s.no}`]=s}p.liveThreadData[0]&&(c.SITE.Build.spoilerRange[c.BOARD.ID]=p.liveThreadData[0].custom_spoiler),c.BOARD.threads.forEach(function(r){if(!p.liveThreadIDs.includes(r.ID))return r.collect()}),o.event("IndexUpdate",{threads:p.liveThreadIDs.map(r=>`${c.BOARD}.${r}`)})},isHidden(e){let t;return(t=c.BOARD.threads.get(e))&&t.OP&&!t.OP.isFetchedQuote?t.isHidden:p.parsedThreads[e].isHidden},isHiddenReply(e,t){return O.isHidden(c.BOARD.ID,e,t.no)||V.isHidden(c.SITE.Build.parseJSON(t,c.BOARD))},buildThreads(e,t,i){let n;const s=[],r=[];let a=[];for(var h of e){var u,f;try{var g,b=p.liveThreadDict[h];if(f=c.BOARD.threads.get(h)){var I=f.json!==b&&JSON.stringify(f.json)!==JSON.stringify(b);I&&(f.setCount("post",b.replies+1,b.bumplimit),f.setCount("file",b.images+!!b.ext,b.imagelimit),f.setStatus("Sticky",!!b.sticky),f.setStatus("Closed",!!b.closed)),f.catalogView&&(o.rm(f.catalogView.nodes.replies),f.catalogView.nodes.replies=null)}else f=new Ye(h,c.BOARD),r.push(f);var T=b.last_replies&&b.last_replies.length?b.last_replies[b.last_replies.length-1].no:h;if(T>f.lastPost&&(f.lastPost=T),f.json=b,s.push(f),(g=f.OP)&&!g.isFetchedQuote)g.setCatalogOP(t),f.setPage(Math.floor(p.threadPosition[h]/p.threadsNumPerPage)+1);else{var R=p.parsedThreads[h];u=c.SITE.Build.post(R),g=new ye(u,f,c.BOARD),g.filterResults=R.filterResults,a.push(g)}(!t||!f.nodes.root)&&c.SITE.Build.thread(f,b,i)}catch(B){n||(n=[]),n.push({message:`Parsing of Thread No.${f} failed. Thread will be skipped.`,error:B,html:u?.outerHTML})}}return n&&D.handleErrors(n),i&&(a=a.concat(p.buildReplies(s))),D.callbackNodes("Thread",r),D.callbackNodes("Post",a),p.updateHideLabel(),o.event("IndexRefreshInternal",{threadIDs:s.map(B=>B.fullID),isCatalog:t}),s},buildReplies(e){let t;const i=[];for(var n of e){var s;if(s=p.liveThreadDict[n.ID].last_replies){var r=[];for(var a of s){var h,u;if((u=n.posts.get(a.no))&&!u.isFetchedQuote){r.push(u.nodes.root);continue}r.push(h=c.SITE.Build.postFromObject(a,n.board.ID));try{i.push(new ye(h,n,n.board))}catch(f){t||(t=[]),t.push({message:`Parsing of Post No.${a.no} failed. Post will be skipped.`,error:f,html:h?.outerHTML})}}o.add(n.nodes.root,r)}}return t&&D.handleErrors(t),i},buildCatalogViews(e){const t=[];for(var i of e)if(!i.catalogView){var{ID:n}=i,s=Math.floor(p.threadPosition[n]/p.threadsNumPerPage)+1,r=c.SITE.Build.catalogThread(i,p.liveThreadDict[n],s);t.push(new hs(r,i))}D.callbackNodes("CatalogThread",t)},sizeCatalogViews(e){const t=l["Index Size"]==="small"?150:250;for(var i of e){var{thumb:n}=i.catalogView.nodes,{width:s,height:r}=n.dataset;if(s){var a=t/Math.max(s,r);n.style.width=s*a+"px",n.style.height=r*a+"px"}}},buildCatalogReplies(e){let t;const{nodes:i}=e.catalogView;if(!(t=p.liveThreadDict[e.ID].last_replies))return;const n=[];for(var s of t)if(!p.isHiddenReply(e.ID,s)){var r=c.SITE.Build.catalogReply(e,s);Ae.update(o("time",r)),o.on(o(".catalog-reply-preview",r),"mouseover",ot.mouseover),n.push(r)}i.replies=o.el("div",{className:"catalog-replies"}),o.add(i.replies,n),o.add(e.OP.nodes.post,i.replies)},sort(){let e;const{liveThreadIDs:t,liveThreadData:i}=p;if(!i)return;const n=new Date().getTime()/1e3,s=p.currentSort.replace(/-rev$/,"");if(p.sortedThreadIDs=(()=>{switch(s){case"lastreply":case"lastlong":var r=i.some(f=>f.last_replies?.length),a=function(f){if(!r)return f.last_modified;const g=f.last_replies||[];for(let T=g.length-1;T>=0;T--){var b=g[T];if(!p.isHiddenReply(f.no,b)){if(s==="lastreply")return b;var I=b.com?c.SITE.Build.parseComment(b.com).replace(/[^a-z]/ig,"").length:0;if(I>=p.lastLongThresholds[+!!b.ext])return b}}return f.omitted_posts&&f.last_replies?.length?f.last_replies[0]:f},h=S();for(var u of i)h[u.no]=a(u).no;return[...i].sort((f,g)=>h[g.no]-h[f.no]).map(f=>f.no);case"bump":return t;case"birth":return[...t].sort((f,g)=>g-f);case"replycount":return[...i].sort((f,g)=>g.replies-f.replies).map(f=>f.no);case"filecount":return[...i].sort((f,g)=>g.images-f.images).map(f=>f.no);case"activity":return[...i].sort((f,g)=>(n-f.time)/(f.replies+1)-(n-g.time)/(g.replies+1)).map(f=>f.no);default:return t}})(),/-rev$/.test(p.currentSort)&&p.sortedThreadIDs.reverse(),p.search&&(e=p.querySearch(p.search))&&(p.sortedThreadIDs=e),p.sortOnTop(r=>r.isSticky),p.sortOnTop(r=>r.isOnTop||l["Pin Watched Threads"]&&v.isWatchedRaw(r.boardID,r.threadID)),l["Anchor Hidden Threads"])return p.sortOnTop(r=>!p.isHidden(r.threadID))},sortOnTop(e){const t=[],i=[];for(var n of p.sortedThreadIDs)(e(p.parsedThreads[n])?t:i).push(n);return p.sortedThreadIDs=t.concat(i)},buildIndex(){let e;if(p.liveThreadData){switch(l["Index Mode"]){case"all pages":e=p.sortedThreadIDs;break;case"catalog":e=p.sortedThreadIDs.filter(t=>!p.isHidden(t)!==p.showHiddenThreads);break;default:e=p.threadsOnPage(p.currentPage)}delete p.pageNum,o.rmAll(p.root),o.rmAll(x.hover),p.loaded&&p.root.parentNode&&o.event("PostsRemoved",null,p.root),l["Index Mode"]==="catalog"?p.buildCatalog(e):p.buildStructure(e)}},threadsOnPage(e){const t=p.threadsNumPerPage,i=t*(e-1);return p.sortedThreadIDs.slice(i,i+t)},buildStructure(e){const t=p.buildThreads(e,!1,l["Show Replies"]),i=[];for(var n of t)i.push(n.nodes.root,o.el("hr"));o.add(p.root,i),p.root.parentNode&&o.event("PostsInserted",null,p.root),p.loaded=!0},buildCatalog(e){let t=0;const i=e.length;let n=null;var s=function(){if(n&&!n.parentNode)return;const r=t>0&&p.root.parentNode?i:t+30;return n=p.buildCatalogPart(e.slice(t,r))[0],t=r,t<i?o.queueTask(s):(p.root.parentNode&&o.event("PostsInserted",null,p.root),p.loaded=!0)};s()},buildCatalogPart(e){const t=p.buildThreads(e,!0);p.buildCatalogViews(t),p.sizeCatalogViews(t);const i=[];for(var n of t)n.OP.setCatalogOP(!0),o.add(n.catalogView.nodes.root,n.OP.nodes.root),i.push(n.catalogView.nodes.root),o.on(n.catalogView.nodes.root,"mouseenter",p.cb.catalogReplies.bind(n)),o.on(n.OP.nodes.root,"mouseenter",p.cb.hoverAdjust.bind(n.OP.nodes));return o.add(p.root,i),i},clearSearch(){return p.searchInput.value="",p.onSearchInput(),p.searchInput.focus()},setupSearch(){return p.searchInput.value=p.search,p.search?p.searchInput.dataset.searching=1:p.searchInput.removeAttribute("data-searching")},onSearchInput(){const e=p.searchInput.value.trim();if(e!==p.search)return p.pushState({search:e,replace:!!e==!!p.search}),p.pageLoad(!1)},querySearch(e){let t,i;if(i=e.match(/^([\w+]+):\/(.*)\/(\w*)$/)){let n;try{n=RegExp(i[2],i[3])}catch{return[]}return p.sortedThreadIDs.filter(s=>n.test(V.values(i[1],p.parsedThreads[s]).join(`
`)))}if(t=e.toLowerCase().match(/\S+/g))return p.sortedThreadIDs.filter(n=>p.searchMatch(p.parsedThreads[n],t))},searchMatch(e,t){const{info:i,file:n}=e;i.comment==null&&(i.comment=c.SITE.Build.parseComment(i.commentHTML.innerHTML));let s=[];for(var r of["comment","subject","name","tripcode"])r in i&&s.push(i[r]);n&&s.push(n.name),s=s.join(" ").toLowerCase();for(var a of t)if(s.indexOf(a)===-1)return!1;return!0}},W={init(){if(!(!["index","catalog"].includes(c.VIEW)||!l["Thread Hiding Buttons"]&&!(l.Menu&&l["Thread Hiding Link"])&&!l["JSON Index"]))return this.db=new De("hiddenThreads"),c.VIEW==="catalog"?this.catalogWatch():(this.catalogSet(c.BOARD),o.on(m,"IndexRefreshInternal",this.onIndexRefresh),l["Thread Hiding Buttons"]&&o.addClass(w,"thread-hide"),N.Post.push({name:"Thread Hiding",cb:this.node}))},catalogSet(e){if(!o.hasStorage||c.SITE.software!=="yotsuba")return;const t=W.db.get({boardID:e.ID,defaultValue:S()});for(var i in t)t[i]=!0;return localStorage.setItem(`4chan-hide-t-${e}`,JSON.stringify(t))},catalogWatch(){if(!(!o.hasStorage||c.SITE.software!=="yotsuba"))return this.hiddenThreads=JSON.parse(localStorage.getItem(`4chan-hide-t-${c.BOARD}`))||{},D.ready(()=>new MutationObserver(W.catalogSave).observe(o.id("threads"),{attributes:!0,subtree:!0,attributeFilter:["style"]}))},catalogSave(){let e;const t=JSON.parse(localStorage.getItem(`4chan-hide-t-${c.BOARD}`))||{};for(e in t)o.hasOwn(W.hiddenThreads,e)||W.db.set({boardID:c.BOARD.ID,threadID:e,val:{makeStub:l.Stubs}});for(e in W.hiddenThreads)o.hasOwn(t,e)||W.db.delete({boardID:c.BOARD.ID,threadID:e});return W.hiddenThreads=t},isHidden(e,t){return!!(W.db&&W.db.get({boardID:e,threadID:t}))},node(){let e;this.isReply||this.isClone||this.isFetchedQuote||(l["Thread Hiding Buttons"]&&o.prepend(this.nodes.root,W.makeButton(this.thread,"hide")),(e=W.db.get({boardID:this.board.ID,threadID:this.ID}))&&W.hide(this.thread,e.makeStub,"Hidden manually"))},onIndexRefresh(){return c.BOARD.threads.forEach(function(e){const{root:t}=e.nodes;e.isHidden&&e.stub&&!t.contains(e.stub)&&W.makeStub(e,t)})},menu:{init(){if(c.VIEW!=="index"||!l.Menu||!l["Thread Hiding Link"])return;let e=o.el("div",{className:"hide-thread-link",textContent:"Hide"});const t=o.el("a",{textContent:"Apply",href:"javascript:;"});o.on(t,"click",W.menu.hide);const i=te.checkbox("Stubs","Make stub");he.menu.addEntry({el:e,order:20,open({thread:s,isReply:r}){return r||s.isHidden||l["JSON Index"]&&l["Index Mode"]==="catalog"?!1:(W.menu.thread=s,!0)},subEntries:[{el:t},{el:i}]}),e=o.el("a",{className:"show-thread-link",textContent:"Show",href:"javascript:;"}),o.on(e,"click",W.menu.show),he.menu.addEntry({el:e,order:20,open({thread:s,isReply:r}){return r||!s.isHidden||l["JSON Index"]&&l["Index Mode"]==="catalog"?!1:(W.menu.thread=s,!0)}});const n=o.el("a",{textContent:"Hide stub",href:"javascript:;"});return o.on(n,"click",W.menu.hideStub),he.menu.addEntry({el:n,order:15,open({thread:s,isReply:r}){return r||!s.isHidden||l["JSON Index"]&&l["Index Mode"]==="catalog"?!1:W.menu.thread=s}})},hide(){const e=o("input",this.parentNode).checked,{thread:t}=W.menu;return W.hide(t,e,"Hidden manually"),W.saveHiddenState(t,e),o.event("CloseMenu")},show(){const{thread:e}=W.menu;return W.show(e),W.saveHiddenState(e),o.event("CloseMenu")},hideStub(){const{thread:e}=W.menu;W.show(e),W.hide(e,!1),W.saveHiddenState(e,!1),o.event("CloseMenu")}},makeButton(e,t){const i=o.el("span",{className:"stub-icon"}),n=o.el("a",{className:`${t}-post-button ${t}-thread-button`,href:"javascript:;"});return q.set(i,t==="hide"?"squareMinus":"squarePlus"),o.add(n,i),n.dataset.fullID=e.fullID,o.on(n,"click",W.toggle),n},makeStub(e,t,i){let n,s,r=L(c.SITE.selectors.replyOriginal,t).length;(n=o(c.SITE.selectors.summary,t))&&(r+=+n.textContent.match(/\d+/));const a=W.makeButton(e,"show"),{nameBlock:h,subject:u}=e.OP.info;u&&o.add(a,o.el("span",{className:"stub-subject",textContent:u})),o.add(a,o.el("span",{className:"stub-name",textContent:h})),o.add(a,o.el("span",{className:"stub-replies",textContent:`(${r} repl${r===1?"y":"ies"})`}));let f=e.OP.filterResults?.reasons||[];if(i&&(f=[...f,i]),l["Filter Reason"]&&f.length){const g=o.el("span",{className:"stub-reasons"});o.add(g,f.map(b=>o.el("span",{className:"stub-reason",textContent:b}))),a.appendChild(g)}if(e.stub=o.el("div",{className:"stub"}),l.Menu?o.add(e.stub,[a,he.makeButton(e.OP)]):o.add(e.stub,a),!l["Filter Reason"]&&f&&(e.stub.title=f.join(" & ")),o.prepend(t,e.stub),s=o(c.SITE.selectors.threadDivider,t))return o.addClass(s,"threadDivider")},saveHiddenState(e,t){return e.isHidden?W.db.set({boardID:e.board.ID,threadID:e.ID,val:{makeStub:t}}):W.db.delete({boardID:e.board.ID,threadID:e.ID}),W.catalogSet(e.board)},toggle(e){return e instanceof Ye||(e=c.threads.get(this.dataset.fullID)),e.isHidden?W.show(e):W.hide(e,void 0,"Hidden manually"),W.saveHiddenState(e)},hide(e,t=l.Stubs,i){if(e.isHidden)return;const n=e.nodes.root;if(e.isHidden=!0,p.updateHideLabel(),e.catalogView&&!p.showHiddenThreads&&(o.rm(e.catalogView.nodes.root),o.event("PostsRemoved",null,p.root)),!t)return n.hidden=!0;W.makeStub(e,n,i)},show(e){e.stub&&(o.rm(e.stub),delete e.stub);const t=e.nodes.root;if(t.hidden=e.isHidden=!1,p.updateHideLabel(),e.catalogView&&l["Index Mode"]==="catalog"){const{root:i}=e.catalogView.nodes;if(p.showHiddenThreads)o.rm(i),o.event("PostsRemoved",null,p.root);else{let n=p.sortedThreadIDs.indexOf(e.ID)-1;for(;;){if(n<0){o(".board").insertAdjacentElement("afterbegin",i);break}const s=m.getElementById(`t${p.sortedThreadIDs[n]}`);if(s){s.insertAdjacentElement("afterend",i);break}--n}o.event("PostsInserted",null,p.root)}}}},it={init(){if(!(!l["Fappe Tyme"]&&!l["Werk Tyme"]||!["index","thread","archive"].includes(c.VIEW))){this.nodes={},this.enabled={fappe:!1,werk:l.werk};for(var e of["Fappe","Werk"])if(l[`${e} Tyme`]){var t=e.toLowerCase(),i=te.checkbox(t,`${e} Tyme`,!1);i.title=`${e} Tyme`,this.nodes[t]=i.firstElementChild,l[t]&&this.set(t,!0),o.on(this.nodes[t],"change",this.toggle.bind(this,t)),x.menu.addEntry({el:i,order:97});var n=o.el("span",{className:"indicator",textContent:e[0],title:`${e} Tyme active`});o.on(n,"click",function(){const s=o.getOwn(it.nodes,this.parentNode.id.replace("shortcut-",""));return s.checked=!s.checked,o.event("change",null,s)}),x.addShortcut(t,n,410)}return l["Werk Tyme"]&&o.sync("werk",this.set.bind(this,"werk")),N.Post.push({name:"Fappe Tyme",cb:this.node}),N.CatalogThread.push({name:"Werk Tyme",cb:this.catalogNode})}},node(){return this.nodes.root.classList.toggle("noFile",!this.files.length)},catalogNode(){const e=this.thread.OP.files[0];if(!e)return;const t=o.el("div",{textContent:e.name,className:"werkTyme-filename"});return o.add(this.nodes.thumb.parentNode,t)},set(e,t){return this.enabled[e]=this.nodes[e].checked=t,o[`${t?"add":"rm"}Class`](w,`${e}Tyme`)},toggle(e){if(this.set(e,!this.enabled[e]),e==="werk")return o.cb.checked.call(this.nodes[e])}},ks=`<div class="gal-viewport">
  <span class="gal-buttons">
    <a href="javascript:;" class="gal-start" title="Start slideshow"><i></i></a>
    <a href="javascript:;" class="gal-stop" title="Stop slideshow"><i></i></a>
    <a href="javascript:;" class="menu-button"><i></i></a>
    <a href="javascript:;" class="gal-close">\xD7</a>
  </span>
  <div class="gal-labels">
    <span class="gal-count">
      <span class="count"></span> / <span class="total"></span>
    </span>
    <a class="gal-name" target="_blank"></a>
    <span class="gal-sauce"></span>
  </div>
  <div class="gal-prev"></div>
  <div class="gal-image">
    <a href="javascript:;"><img></a>
  </div>
  <div class="gal-next"></div>
</div>
<div class="gal-thumbnails"></div>`,Me={init(){let e;if(!["index","thread"].includes(c.VIEW)||!l.Sauce)return;o.addClass(w,"show-sauce");const t=[];for(e of l.sauces.split(`
`)){var i;e[0]!=="#"&&(i=this.parseLink(e))&&t.push(i)}if(t.length)return this.links=t,this.link=o.el("a",{target:"_blank",className:"sauce"}),N.Post.push({name:"Sauce",cb:this.node})},parseLink(e){if(!(e=e.trim()))return null;const t=S(),i=e.split(/;(?=(?:text|boards|types|regexp|sandbox):?)/);for(let r=0;r<i.length;r++){var n=i[r];if(r===0)t.url=n;else{var s=n.match(/^(\w*):?(.*)$/);t[s[1]]=s[2]}}if(t.text||(t.text=t.url.match(/(\w+)\.\w+\//)?.[1]||"?"),"boards"in t&&(t.boards=V.parseBoards(t.boards)),"regexp"in t)try{let r;(r=t.regexp.match(/^\/(.*)\/(\w*)$/))?t.regexp=RegExp(r[1],r[2]):t.regexp=RegExp(t.regexp)}catch(r){return new G("warning",[o.tn("Invalid regexp for Sauce link:"),o.el("br"),o.tn(e),o.el("br"),o.tn(r.message)],60),null}return t},createSauceLink(e,t,i){let n,s,r;const a=i.url.match(/[^.]*$/)[0],h=S();if(o.extend(h,e),h.boards&&!h.boards[`${t.siteID}/${t.boardID}`]&&!h.boards[`${t.siteID}/*`]||h.types&&(r=a,!h.types.split(",").includes(r))||h.regexp&&!(s=i.name.match(h.regexp)))return null;const u=[];for(var f of["url","text"])h[f]=h[f].replace(/%(T?URL|IMG|[sh]?MD5|board|name|%|semi|\$\d+)/g,function(g,b){let I;if(b[0]==="$"){if(!s)return g;I=s[b.slice(1)]||""}else if(I=Me.formatters[b](t,i,a),I==null)return u.push(b),"";return f==="url"&&!["%","semi"].includes(b)&&(/^javascript:/i.test(h.url)&&(I=JSON.stringify(I)),I=encodeURIComponent(I)),I});return c.SITE.areMD5sDeferred?.(t.board)&&u.length&&!u.filter(g=>!/^.?MD5$/.test(g)).length?(n=Me.link.cloneNode(!1),n.dataset.skip="1",n):u.length?null:(n=Me.link.cloneNode(!1),n.href=h.url,n.textContent=h.text,/^javascript:/i.test(h.url)&&n.removeAttribute("target"),n)},node(){if(!this.isClone)for(var e of this.files)Me.file(this,e)},file(e,t){let i,n;const s=[],r=[];for(i of Me.links)(n=Me.createSauceLink(i,e,t))&&(s.push(o.tn(" "),n),n.dataset.skip&&r.push([i,n]));if(o.add(t.text,s),r.length){var a=new MutationObserver(function(){if(t.text.dataset.md5){for([i,n]of r){var h;(h=Me.createSauceLink(i,e,t))&&o.replace(n,h)}return a.disconnect()}});return a.observe(t.text,{attributes:!0})}},formatters:{TURL(e,t){return t.thumbURL},URL(e,t){return t.url},IMG(e,t,i){return["gif","jpg","jpeg","png"].includes(i)?t.url:t.thumbURL},MD5(e,t){return t.MD5},sMD5(e,t){return t.MD5?.replace(/[+/=]/g,i=>({"+":"-","/":"_","=":""})[i])},hMD5(e,t){if(t.MD5)return Array.from(atob(t.MD5),i=>i.charCodeAt(0).toString(16).padStart(2,"0")).join("")},board(e){return e.board.ID},name(e,t){return t.name},"%"(){return"%"},semi(){return";"}}},C={init(){if(!(this.enabled=l.Gallery&&["index","thread"].includes(c.VIEW)))return;this.delay=l["Slide Delay"];const e=o.el("a",{href:"javascript:;",title:"Gallery"});return q.set(e,"image","Gallery"),o.on(e,"click",this.cb.toggle),x.addShortcut("gallery",e,530),N.Post.push({name:"Gallery",cb:this.node})},node(){return(()=>{const e=[];for(var t of this.files)t.thumb&&(C.nodes&&(C.generateThumb(this,t),C.nodes.total.textContent=C.images.length),!l["Image Expansion"]&&(c.SITE.software!=="tinyboard"||!D.jsEnabled)?e.push(o.on(t.thumbLink,"click",C.cb.image)):e.push(void 0));return e})()},build(e){let t,i;const{cb:n}=C;l["Fullscreen Gallery"]&&(o.one(m,"fullscreenchange mozfullscreenchange webkitfullscreenchange",()=>o.on(m,"fullscreenchange mozfullscreenchange webkitfullscreenchange",n.close)),w.mozRequestFullScreen?.(),w.webkitRequestFullScreen?.(Element.ALLOW_KEYBOARD_INPUT)),C.images=[];const s=C.nodes={};C.fileIDs=S(),C.slideshow=!1,s.el=t=o.el("div",{id:"a-gallery"}),o.extend(t,{innerHTML:ks});const r={buttons:".gal-buttons",frame:".gal-image",name:".gal-name",count:".count",total:".total",sauce:".gal-sauce",thumbs:".gal-thumbnails",next:".gal-image a",current:".gal-image img"};for(var a in r){var h=r[a];s[a]=o(h,t)}const u=o(".menu-button",t);s.menu=new te.Menu("gallery"),o.on(s.frame,"click",n.blank),l["Mouse Wheel Volume"]&&o.on(s.frame,"wheel",be.wheel),o.on(s.next,"click",n.click),o.on(s.name,"click",ee.download);const f=o(".gal-prev",t),g=o(".gal-next",t),b=o(".gal-start",t),I=o(".gal-stop",t),T=o(".gal-close",t);o.on(f,"click",n.prev),o.on(g,"click",n.next),o.on(b,"click",n.start),o.on(I,"click",n.stop),o.on(T,"click",n.close),o.on(u,"click",function(M){return s.menu.toggle(M,this,c)}),q.set(u,"caretDown"),q.set(b,"play"),q.set(I,"stop"),q.set(T,"xmark"),q.set(f,"caretLeft"),q.set(g,"caretRight");for(var R of C.menu.createSubEntries())R.order=0,s.menu.addEntry(R);o.on(m,"keydown",n.keybinds),l.Keybinds&&o.off(m,"keydown",ae.keydown),o.on(window,"resize",C.cb.setHeight);for(var B of L(c.SITE.selectors.file.thumb)){var P;if(P=F.postFromNode(B)){for(var X of P.files)if(X.thumb&&(C.generateThumb(P,X),!e&&C.fileIDs[`${P.fullID}.${X.index}`])){var k=X.thumbLink;x.getTopOf(k)+k.getBoundingClientRect().height>=0&&(e=k)}}}return o.addClass(w,"gallery-open"),o.add(m.body,t),s.thumbs.scrollTop=0,s.current.parentElement.scrollTop=0,e&&(i=o(`[href='${e.href}']`,s.thumbs)),i||(i=C.images[C.images.length-1]),i&&C.open(i),w.style.overflow="hidden",s.total.textContent=C.images.length},generateThumb(e,t){if(e.isClone||e.isHidden||!t||!t.thumb||!t.isImage&&!t.isVideo&&!l["PDF in Gallery"]||C.fileIDs[`${e.fullID}.${t.index}`])return;C.fileIDs[`${e.fullID}.${t.index}`]=!0;const i=o.el("a",{className:"gal-thumb",href:t.url,target:"_blank",title:t.name});i.dataset.id=C.images.length,i.dataset.post=e.fullID,i.dataset.file=t.index;const n=t.thumb.cloneNode(!1);return n.style.cssText="",o.add(i,n),o.on(i,"click",C.cb.open),C.images.push(i),o.add(C.nodes.thumbs,i)},load(e,t){const i=e.href.match(/\w*$/),n=o.getOwn({webm:"video",mp4:"video",ogv:"video",pdf:"iframe"},i)||"img",s=o.el(n);return o.extend(s.dataset,e.dataset),o.on(s,"error",t),s.src=e.href,s},open(e){let t,i,n;const{nodes:s}=C,r=+s.current.dataset.id,a=+e.dataset.id;if((t=C.images[r])&&o.rmClass(t,"gal-highlight"),o.addClass(e,"gal-highlight"),s.thumbs.scrollTop=e.offsetTop+e.offsetHeight/2-s.thumbs.clientHeight/2,C.cache?.dataset.id===""+a?(i=C.cache,o.off(i,"error",C.cacheError),o.on(i,"error",C.error)):i=C.load(e,C.error),o.off(s.current,"error",C.error),ee.pause(s.current),o.replace(s.current,i),s.current=i,i.nodeName==="VIDEO"&&(i.loop=!0,be.setup(i),l.Autoplay&&i.play(),l["Show Controls"]&&(i.controls=!0)),w.classList.toggle("gal-pdf",i.nodeName==="IFRAME"),C.cb.setHeight(),s.count.textContent=+e.dataset.id+1,s.name.download=s.name.textContent=e.title,s.name.href=e.href,s.frame.scrollTop=0,s.next.focus(),o.rmAll(s.sauce),l.Sauce&&Me.links&&(n=c.posts.get(i.dataset.post))){const f=[];for(var h of Me.links){var u;(u=Me.createSauceLink(h,n,n.files[+i.dataset.file]))&&f.push(o.tn(" "),u)}o.add(s.sauce,f)}if(C.slideshow&&(a>r||r===C.images.length-1&&a===0)?C.setupTimer():C.cb.stop(),l["Scroll to Post"]&&(n=c.posts.get(i.dataset.post))&&x.scrollTo(n.nodes.root),isNaN(r)||a===(r+1)%C.images.length)return C.cache=C.load(C.images[(a+1)%C.images.length],C.cacheError)},error(){if(this.error?.code===MediaError.MEDIA_ERR_DECODE)return new G("error","Corrupt or unplayable video",30);if(ee.isFromArchive(this))return;const e=c.posts.get(this.dataset.post),t=e.files[+this.dataset.file];return ee.error(this,e,t,null,i=>{if(i&&(C.images[+this.dataset.id].href=i,C.nodes.current===this))return this.src=i})},cacheError(){return delete C.cache},cleanupTimer(){clearTimeout(C.timeoutID);const{current:e}=C.nodes;return o.off(e,"canplaythrough load",C.startTimer),o.off(e,"ended",C.cb.next)},startTimer(){return C.timeoutID=setTimeout(C.checkTimer,C.delay*ie)},setupTimer(){C.cleanupTimer();const{current:e}=C.nodes,t=e.nodeName==="VIDEO";return t&&e.play(),(t?e.readyState>=4:e.complete)||e.nodeName==="IFRAME"?C.startTimer():o.on(e,t?"canplaythrough":"load",C.startTimer)},checkTimer(){const{current:e}=C.nodes;return e.nodeName==="VIDEO"&&!e.paused?(o.on(e,"ended",C.cb.next),e.loop=!1):C.cb.next()},cb:{keybinds(e){let t;if(!(t=ae.keyCode(e)))return;const i=(()=>{switch(t){case l.Close:case l["Open Gallery"]:return C.cb.close;case l["Next Gallery Image"]:return C.cb.next;case l["Advance Gallery"]:return C.cb.advance;case l["Previous Gallery Image"]:return C.cb.prev;case l.Pause:return C.cb.pause;case l.Slideshow:return C.cb.toggleSlideshow;case l["Rotate image anticlockwise"]:return C.cb.rotateLeft;case l["Rotate image clockwise"]:return C.cb.rotateRight;case l["Download Gallery Image"]:return C.cb.download}})();if(i)return e.stopPropagation(),e.preventDefault(),i()},open(e){if(e&&e.preventDefault(),this)return C.open(this)},image(e){return e.preventDefault(),e.stopPropagation(),C.build(this)},prev(){return C.cb.open.call(C.images[+C.nodes.current.dataset.id-1]||C.images[C.images.length-1])},next(){return C.cb.open.call(C.images[+C.nodes.current.dataset.id+1]||C.images[0])},click(e){if(!ee.onControls(e))return e.preventDefault(),C.cb.advance()},advance(){return!l.Autoplay&&C.nodes.current.paused?C.nodes.current.play():C.cb.next()},toggle(){return(C.nodes?C.cb.close:C.build)()},blank(e){if(e.target===this)return C.cb.close()},toggleSlideshow(){return C.cb[C.slideshow?"stop":"start"]()},download(){return o(".gal-name").click()},pause(){C.cb.stop();const{current:e}=C.nodes;if(e.nodeName==="VIDEO")return e[e.paused?"play":"pause"]()},start(){return o.addClass(C.nodes.buttons,"gal-playing"),C.slideshow=!0,C.setupTimer()},stop(){if(!C.slideshow)return;C.cleanupTimer();const{current:e}=C.nodes;return e.nodeName==="VIDEO"&&(e.loop=!0),o.rmClass(C.nodes.buttons,"gal-playing"),C.slideshow=!1},rotateLeft(){return C.cb.rotate(270)},rotateRight(){return C.cb.rotate(90)},rotate:Xe(100,function(e){const{current:t}=C.nodes;if(t.nodeName!=="IFRAME")return t.dataRotate=((t.dataRotate||0)+e)%360,t.style.transform=`rotate(${t.dataRotate}deg)`,C.cb.setHeight()}),close(){return o.off(C.nodes.current,"error",C.error),ee.pause(C.nodes.current),o.rm(C.nodes.el),o.rmClass(w,"gallery-open"),l["Fullscreen Gallery"]&&(o.off(m,"fullscreenchange mozfullscreenchange webkitfullscreenchange",C.cb.close),m.mozCancelFullScreen?.(),m.webkitExitFullscreen?.()),delete C.nodes,delete C.fileIDs,w.style.overflow="",o.off(m,"keydown",C.cb.keybinds),l.Keybinds&&o.on(m,"keydown",ae.keydown),o.off(window,"resize",C.cb.setHeight),clearTimeout(C.timeoutID)},setFitness(){return(this.checked?o.addClass:o.rmClass)(w,`gal-${this.name.toLowerCase().replace(/\s+/g,"-")}`)},setHeight:Xe(100,function(){let e,t,i;const{current:n,frame:s}=C.nodes,{style:r}=n;if(l["Stretch to Fit"]&&(e=c.posts.get(n.dataset.post)?.files[+n.dataset.file].dimensions)){const[a,h]=e.split("x");let u=s.clientWidth,f=w.clientHeight-25;(n.dataRotate||0)%180===90&&([u,f]=[f,u]),i=Math.min(f,h/a*u),r.minHeight=i+"px",r.minWidth=a/h*i+"px"}else r.minHeight=r.minWidth="";return(n.dataRotate||0)%180===90?(r.maxWidth=l["Fit Height"]?`${w.clientHeight-25}px`:"none",r.maxHeight=l["Fit Width"]?`${s.clientWidth}px`:"none",t=(n.clientWidth-n.clientHeight)/2,r.margin=`${t}px ${-t}px`):r.maxWidth=r.maxHeight=r.margin=""}),setDelay(){return C.delay=+this.value}},menu:{init(){if(!C.enabled)return;const e=o.el("span",{textContent:"Gallery",className:"gallery-link"});return x.menu.addEntry({el:e,order:105,subEntries:C.menu.createSubEntries()})},createSubEntry(e){const t=te.checkbox(e,e),i=t.firstElementChild;return["Hide Thumbnails","Fit Width","Fit Height"].includes(e)&&o.on(i,"change",C.cb.setFitness),o.event("change",null,i),o.on(i,"change",o.cb.checked),["Hide Thumbnails","Fit Width","Fit Height","Stretch to Fit"].includes(e)&&o.on(i,"change",C.cb.setHeight),{el:t}},createSubEntries(){const e=["Hide Thumbnails","Fit Width","Fit Height","Stretch to Fit","Scroll to Post"].map(n=>C.menu.createSubEntry(n)),t=o.el("label",{innerHTML:'Slide Delay: <input type="number" name="Slide Delay" min="0" step="any" class="field">'}),i=t.firstElementChild;return i.value=C.delay,o.on(i,"change",C.cb.setDelay),o.on(i,"change",o.cb.value),e.push({el:t}),e}}},Cs=`<div class="move">
  <a href="javascript:;" class="jump" title="Jump to post">\u2192</a>
  <a href="javascript:;" class="close" title="Close">\xD7</a>
</div>
<div id="media-embed"><div></div></div>`,qe={init(){if(!(!["index","thread","archive"].includes(c.VIEW)||!l.Linkify))return l["Comment Expansion"]&&Ee.callbacks.push(this.node),N.Post.push({name:"Linkify",cb:this.node}),j.init()},node(){let e;if(this.isClone)return j.events(this);if(!qe.regString.test(this.info.comment))return;for(e of L("a",this.nodes.comment))c.SITE.isLinkified?.(e)&&(o.addClass(e,"linkify"),de.useFaster&&de.fixLinks([e]),j.process(e,this));const t=qe.process(this.nodes.comment);de.useFaster&&de.fixLinks(t);for(e of t)j.process(e,this)},process(e){let t;const i=/[^\s"]+/g,n=/[\s"]/,s=o.X(".//br|.//text()",e);let r=0;const a=[];for(;e=s.snapshotItem(r++);){var h,{data:u}=e;if(!(!u||e.parentElement.nodeName==="A"))for(;h=i.exec(u);){var{index:f}=h,g=e,b=h[0];if((t=f+b.length)===u.length){var I;for(i.lastIndex=0;I=s.snapshotItem(r++);){var T;if(I.nodeName==="BR"||I.parentElement.nodeName==="P"&&!I.previousSibling){var R,B;if((R=b.match(/(https?:\/\/)?([a-z\d-]+\.)*[a-z\d-]+$/i))&&(B=s.snapshotItem(r)?.data?.match(/^(\.[a-z\d-]+)*\//i))&&(R[0]+B[0]).search(qe.regString)===0)continue;break}if(I.parentElement.nodeName==="A"&&!qe.regString.test(b))break;if(g=I,{data:u}=I,T=n.exec(u)){b+=u.slice(0,T.index),i.lastIndex=t=T.index,r--;break}else({length:t}=u),b+=u}}if(qe.regString.test(b)&&a.push(qe.makeRange(e,g,f,t)),!i.lastIndex||e!==g)break}}for(r=a.length;r--;)a[r]=qe.makeLink(a[r]);return a},regString:new RegExp('((https?|mailto|git|magnet|ftp|irc):([a-z\\d%/?])|([-a-z\\d]+[.])+(aero|asia|biz|cat|com|coop|dance|info|int|jobs|mobi|moe|museum|name|net|org|post|pro|tel|travel|xxx|xyz|edu|gov|mil|[a-z]{2})([:/]|(?![^\\s"]))|[\\d]{1,3}\\.[\\d]{1,3}\\.[\\d]{1,3}\\.[\\d]{1,3}|[-\\w\\d.@]+@[a-z\\d.-]+\\.[a-z\\d])',"i"),makeRange(e,t,i,n){const s=document.createRange();return s.setStart(e,i),s.setEnd(t,n),s},makeLink(e){let t,i,n=e.toString(),s=n.search(qe.regString);if(s>0){for(n=n.slice(s);e.startOffset+s>=e.startContainer.data.length;)s--;s&&e.setStart(e.startContainer,e.startOffset+s)}for(s=0;/[)\]}>.,]/.test(t=n.charAt(n.length-(1+s)))&&!(!/[.,]/.test(t)&&!(n.match(/[()\[\]{}<>]/g).length%2));)s++;if(s){for(n=n.slice(0,-s);e.endOffset-s<0;)s--;s&&e.setEnd(e.endContainer,e.endOffset-s)}/((mailto|magnet):|.+:\/\/)/.test(n)||(n=(/@/.test(n)?"mailto:":"http://")+n),(i=n.match(/^(https?:\/\/[^/]*%[0-9a-f]{2})(.*)$/i))&&(n=i[1].replace(/%([0-9a-f]{2})/ig,function(a,h){return h==="25"?a:String.fromCharCode(parseInt(h,16))})+i[2]);const r=o.el("a",{className:"linkify",rel:"noreferrer noopener",target:"_blank",href:n});return o.add(r,e.extractContents()),e.insertNode(r),r}},ue={init(){!["index","thread","archive"].includes(c.VIEW)||!l["Time Formatting"]||N.Post.push({name:"Time Formatting",cb:this.node})},node(){if(!this.info.date||this.isClone)return;const{textContent:e}=this.nodes.date;this.nodes.date.textContent=e.match(/^\s*/)[0]+ue.format(this.info.date)+e.match(/\s*$/)[0]},format(e,t=l.time){return t.replace(/%(.)/g,function(i,n){return o.hasOwn(ue.formatters,n)?ue.formatters[n].call(e):i})},zeroPad(e){return e<10?`0${e}`:e},formatterCache:new Map,formatters:{a(){let e=ue.formatterCache.get("a");return e||(e=Intl.DateTimeFormat(l.timeLocale||void 0,{weekday:"short"}),ue.formatterCache.set("a",e)),e.format(this)},A(){let e=ue.formatterCache.get("A");return e||(e=Intl.DateTimeFormat(l.timeLocale||void 0,{weekday:"long"}),ue.formatterCache.set("A",e)),e.format(this)},b(){let e=ue.formatterCache.get("b");return e||(e=Intl.DateTimeFormat(l.timeLocale||void 0,{month:"short"}),ue.formatterCache.set("b",e)),e.format(this)},B(){let e=ue.formatterCache.get("B");return e||(e=Intl.DateTimeFormat(l.timeLocale||void 0,{month:"long"}),ue.formatterCache.set("B",e)),e.format(this)},d(){return ue.zeroPad(this.getDate())},e(){return this.getDate()},H(){return ue.zeroPad(this.getHours())},I(){return ue.zeroPad(this.getHours()%12||12)},k(){return this.getHours()},l(){return this.getHours()%12||12},m(){return ue.zeroPad(this.getMonth()+1)},n(){return this.getMonth()+1},M(){return ue.zeroPad(this.getMinutes())},p(){let e=ue.formatterCache.get("p");return e||(e=Intl.DateTimeFormat(l.timeLocale||void 0,{hour:"numeric",hour12:!0}),ue.formatterCache.set("p",e)),e.formatToParts(this).find(i=>i.type==="dayPeriod").value},P(){return ue.formatters.p.call(this).toLowerCase()},S(){return ue.zeroPad(this.getSeconds())},y(){return this.getFullYear().toString().slice(2)},Y(){return this.getFullYear()},"%"(){return"%"}}};function Is(e){const t=o.el("div",{innerHTML:'<blockquote class="twitter-tweet">Loading&hellip;</blockquote>'}),i=l.fxtLang?`/${l.fxtLang}`:"",n=+l.fxtMaxReplies;return xe.cachePromise(`${l.fxtUrl}/${e.dataset.uid}${i}`).then(async s=>{if(s.status===404){t.textContent="404: tweet not found";return}const{tweet:r}=s.response;function a(k){return k.media?.all?.map(M=>{switch(M.type){case"photo":return y("div",{class:"fxt-media"},y("a",{href:M.url,target:"_blank",referrerpolicy:"no-referrer"},y("img",{src:M.url,alt:M.altText,width:M.width,height:M.height,referrerpolicy:"no-referrer"})));case"video":case"gif":return y("div",{class:"fxt-media"},y("video",{controls:!0,width:M.width,height:M.height,poster:M.thumbnail_url,preload:"meta"},y("source",{src:M.url,type:M.format})));default:console.warn(`FxTwitter media type ${M.type} not recognized`)}})||[]}function h(k){return ue.format(new Date(k.created_at))}function u(k){let M=0,K=-1;return k.poll.choices.forEach((J,ke)=>{J.percentage>M&&(M=J.percentage,K=ke)}),y("div",{class:"fxt-poll"},...k.poll.choices.map((J,ke)=>y("div",{class:`fxt-choice ${ke===K?"highlight":""}`},y("span",{class:"fxt-choice_label"},J.label),y("span",{class:"fxt-choice_percentage"},J.percentage,"%"),y("div",{class:"fxt-bar",style:`width: ${J.percentage}%`}))),y("div",{class:"total-votes"},k.poll.total_votes.toLocaleString()," votes"))}function f(k){return!k?.translation?.target_lang||k?.translation?.source_lang===k?.translation?.target_lang?"":y(He,null,y("hr",null),y("p",null,"Translated from ",k.translation.source_lang_en),y("p",{lang:k.translation.target_lang},...b(k.translation.text)))}function g(k){return y("div",{class:"fxt-meta"},y("a",{class:"fxt-meta_profile",href:k.author.url,title:k.author.description,target:"_blank",referrerpolicy:"no-referrer"},y("div",{class:"fxt-meta_avatar"},y("img",{src:k.author.avatar_url,referrerpolicy:"no-referrer"})),y("div",{class:"fxt-meta_author"},y("span",{class:"fxt-meta_author_username"},k.author.name),y("span",{class:"fxt-meta_author_account"},"@",k.author.screen_name))),y("a",{href:k.url,title:"Open tweet in a new tab",target:"_blank",referrerpolicy:"no-referrer"},q.raw("link")))}function b(k){const M=[];let K=0;for(const J of k.matchAll(/(?:@|\#)\w+/g))M.push(k.slice(K,J.index),y("a",{href:`https://x.com/${J[0].startsWith("#")?"hashtag/":""}${J[0].slice(1)}`,target:"_blank",referrerpolicy:"no-referrer"},J[0])),K=J.index+J[0].length;return M.push(k.slice(K)),M}function I(k){const M=[];let K=0;if(k.entities)for(const J of k.entities)J.ref.url&&(K<J.fromIndex&&M.push(...b(k.text.slice(K,J.fromIndex))),M.push(y("a",{href:J.ref.url,target:"_blank",referrerpolicy:"no-referrer"},k.text.slice(J.fromIndex,J.toIndex))),K=J.toIndex);return K<k.text.length-1&&M.push(...b(k.text.slice(K))),y("div",{class:"fxt-community_note"},y("div",{class:"fxt-community_note-header"},"Community Note"),y("div",{class:"fxt-community_note-text"},...M))}async function T(k){return y("div",{class:"fxt-quote_container"},await B(k,"quote"))}async function R(k){const M=[];let K=0;for(;k.replying_to&&k.replying_to_status&&K<n;){const J=`${l.fxtUrl}/${k.replying_to}/status/${k.replying_to_status}`;try{k=(await xe.cachePromise(J)).response.tweet;const Se=await B(k,"reply");M.unshift(Se),K++}catch(ke){console.error(`Error fetching/rendering reply tweet: ${ke.message}`),console.log(k);const Se=`${l.fxtUrl}/${k.replying_to}/status/${k.replying_to_status}`;return y("div",{class:"fxt-reply_container"},y("article",{class:"fxt-card fxt-tweet-reply"},y("div",{class:"fxt-content warning"},"Failed trying to load ",y("a",{href:Se,target:"_blank",referrerpolicy:"no-referrer"},Se),y("br",null),"This tweet has probably been deleted or removed.",y("br",null),"This also breaks the reply chain, so you may want to view the original tweet.")))}}return y("div",{class:"fxt-reply_container"},...M)}async function B(k,M){const K=a(k),J=k?.quote?await T(k.quote):"",ke=k?.poll?u(k):"",Se=h(k),je=i?f(k):"",Be=k.community_note?I(k.community_note):"";return y("article",{class:`fxt-card fxt-tweet-${M}`},g(k),y("div",{class:"fxt-content"},y("div",{class:"fxt-text",lang:k.lang},...b(k.text),je),(K.length||ke)&&y("div",{class:`fxt-media_container ${k.media?.all?.length>1?"fxt-media-multiple":""}`},ke,...K),Be,J),y("div",{class:"fxt-stats"},y("div",{class:"fxt-stats_time"},Se),y("div",{class:"fxt-stats_meta"},y("span",{class:"fxt-likes"},q.raw("comment"),k.replies.toLocaleString()),y("span",{class:"fxt-reposts"},q.raw("shuffle"),k.retweets.toLocaleString()),y("span",{class:"fxt-replies"},q.raw("heart"),k.likes.toLocaleString()))))}async function P(k){const M=await B(k,"original"),K=k.replying_to?await R(k):"";return y(He,null,K,M)}const X=await P(r);t.innerHTML=X.innerHTML;for(const k of t.getElementsByClassName("fxt-text"))qe.process(k);t.style.resize=null,t.classList.add("fxt-card_container"),t.style.height=null,t.style.width=null,t.style.overflow=null}),t}var j={init(){if(!(!["index","thread","archive"].includes(c.VIEW)||!l.Linkify||!l.Embedding&&!l["Link Title"]&&!l["Cover Preview"])){this.types=S();for(var e of this.ordered_types)this.types[e.key]=e;l.Embedding&&c.VIEW!=="archive"&&(this.dialog=te.dialog("embedding",{innerHTML:Cs}),this.media=o("#media-embed",this.dialog),o.one(m,"4chanXInitFinished",this.ready),o.on(m,"IndexRefreshInternal",()=>c.posts.forEach(function(t){for(t of[t,...t.clones])for(var i of t.nodes.embedlinks)j.cb.catalogRemove.call(i)}))),j.shouldFetchTitles()&&o.on(m,"4chanXInitFinished PostsInserted",function(){for(const t of Object.values(j.types))t.title?.batchSize&&j.flushTitles(t.title)})}},events(e){let t,i,n;if(c.VIEW!=="archive"){if(l.Embedding)for(i=0,n=e.nodes.embedlinks=L(".embedder",e.nodes.comment);t=n[i++];)o.on(t,"click",j.cb.click),o.hasClass(t,"embedded")&&j.cb.toggle.call(t);if(l["Cover Preview"]){for(i=0,n=L(".linkify",e.nodes.comment);t=n[i++];){var s;(s=j.services(t))&&j.preview(s)}return}}},process(e,t){let i;if(!(!l.Embedding&&!l["Link Title"]&&!l["Cover Preview"])&&!o.x("ancestor::pre",e)&&(i=j.services(e))&&(i.post=t,l.Embedding&&c.VIEW!=="archive"&&j.embed(i),j.shouldFetchTitles()&&j.title(i),l["Cover Preview"]&&c.VIEW!=="archive"))return j.preview(i)},services(e){const{href:t}=e;for(var i of j.ordered_types){var n;if(n=i.regExp.exec(t))return{key:i.key,uid:n[1],options:n[2],link:e}}},embed(e){const{key:t,uid:i,options:n,link:s,post:r}=e,{href:a}=s;o.addClass(s,t.toLowerCase());const h=o.el("a",{className:"embedder",href:"javascript:;"},{innerHTML:"(<span>un</span>embed)"}),u={key:t,uid:i,options:n,href:a};for(var f in u){var g=u[f];h.dataset[f]=g}if(o.on(h,"click",j.cb.click),o.after(s,[o.tn(" "),h]),r.nodes.embedlinks.push(h),l["Auto-embed"]&&!l["Floating Embeds"]&&!r.isFetchedQuote)return o.hasClass(w,"catalog-mode")?o.addClass(h,"embed-removed"):j.cb.toggle.call(h)},ready(){if(!D.isThisPageLegit())return;o.addClass(j.dialog,"empty");const e=o(".close",j.dialog),t=o(".jump",j.dialog);return o.on(e,"click",j.closeFloat),o.on(o(".move",j.dialog),"mousedown",j.dragEmbed),o.on(t,"click",function(){if(w.contains(j.lastEmbed))return x.scrollTo(j.lastEmbed)}),q.set(t,"arrowRightLong"),q.set(e,"xmark"),o.add(m.body,j.dialog)},closeFloat(){return delete j.lastEmbed,o.addClass(j.dialog,"empty"),o.replace(j.media.firstChild,o.el("div"))},dragEmbed(){const{style:e}=j.media;if(j.dragEmbed.mouseup){o.off(m,"mouseup",j.dragEmbed),j.dragEmbed.mouseup=!1,e.pointerEvents="";return}return o.on(m,"mouseup",j.dragEmbed),j.dragEmbed.mouseup=!0,e.pointerEvents="none"},title(e){let t;const{key:i,uid:n,options:s,link:r,post:a}=e;if(t=j.types[i].title)if(o.addClass(r,i.toLowerCase()),t.batchSize){if((t.queue||(t.queue=[])).push(e),t.queue.length>=t.batchSize)return j.flushTitles(t)}else return xe.cache(t.api(n),function(){return j.cb.title(this,e)})},flushTitles(e){let t;const{queue:i}=e;if(!i?.length)return;e.queue=[];const n=function(){for(t of i)j.cb.title(this,t)};return xe.cache(e.api(i.map(s=>s.uid)),n)},preview(e){let t;const{key:i,uid:n,link:s}=e;if(t=j.types[i].preview)return o.on(s,"mouseover",function(r){const a=t.url(n),{height:h}=t,u=o.el("img",{src:a,id:"ihover"});return u.setAttribute("referrerpolicy","no-referrer"),o.add(x.hover,u),te.hover({root:s,el:u,latestEvent:r,endEvents:"mouseout click",height:h})})},cb:{click(e){if(e.preventDefault(),!o.hasClass(this,"embedded")&&(l["Floating Embeds"]||o.hasClass(w,"catalog-mode"))){let t;return(t=j.media.firstChild)?(o.replace(t,j.cb.embed(this)),j.lastEmbed=F.postFromNode(this).nodes.root,o.rmClass(j.dialog,"empty")):void 0}else return j.cb.toggle.call(this)},toggle(){return o.hasClass(this,"embedded")?o.rm(this.nextElementSibling):o.after(this,j.cb.embed(this)),o.toggleClass(this,"embedded")},embed(e){let t,i;const n=o.el("div",{className:"media-embed"});return o.add(n,t=(i=j.types[e.dataset.key]).el(e)),t.style.cssText=i.style!=null?i.style:"border: none; width: 640px; height: 360px;",n},catalogRemove(){const e=o.hasClass(w,"catalog-mode");if(e&&o.hasClass(this,"embedded")||!e&&o.hasClass(this,"embed-removed"))return j.cb.toggle.call(this),o.toggleClass(this,"embed-removed")},title(e,t){let i;const{key:n,uid:s,options:r,link:a,post:h}=t,u=j.types[n].title;let{status:f}=e;if([200,304].includes(f)&&u.status&&(f=u.status(e.response)[0]),!!f){i=`[${n}] ${(()=>{switch(f){case 200:case 304:return i=u.text(e.response,s),typeof i=="string"?i:i=a.textContent;case 404:return"Not Found";case 403:case 401:return"Forbidden or Private";default:return`${f}'d`}})()}`,a.dataset.original=a.textContent,a.textContent=i;for(var g of h.clones)for(var b of L("a.linkify",g.nodes.comment))b.href===a.href&&(b.dataset.original==null&&(b.dataset.original=b.textContent),b.textContent=i)}}},ordered_types:[{key:"audio",regExp:/^[^?#]+\.(?:mp3|m4a|oga|wav|flac)(?:[?#]|$)/i,style:"",el(e){return o.el("audio",{controls:!0,preload:"auto",src:e.dataset.href})}},{key:"image",regExp:/^[^?#]+\.(?:gif|png|jpg|jpeg|bmp|webp)(?::\w+)?(?:[?#]|$)/i,style:"",el(e){const t=oe(e.dataset.href);return o.el("div",{innerHTML:`<a target="_blank" href="${t}"><img src="${t}" style="max-width: 80vw; max-height: 80vh;"></a>`})}},{key:"video",regExp:/^[^?#]+\.(?:og[gv]|webm|mp4)(?:[?#]|$)/i,style:"max-width: 80vw; max-height: 80vh;",el(e){const t=o.el("video",{hidden:!0,controls:!0,preload:"auto",src:e.dataset.href,loop:de.test(e.dataset.href.split("/")[2])});return o.on(t,"loadedmetadata",function(){return t.videoHeight===0&&t.parentNode?o.replace(t,j.types.audio.el(e)):t.hidden=!1}),t}},{key:"PeerTube",regExp:/^(\w+:\/\/[^\/]+\/videos\/watch\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12})(.*)/,el(e){let t;const i=(t=e.dataset.options.match(/[?&](start=\w+)/))?`?${t[1]}`:"",n=o.el("iframe",{src:e.dataset.uid.replace("/videos/watch/","/videos/embed/")+i});return n.setAttribute("allowfullscreen","true"),n}},{key:"BitChute",regExp:/^\w+:\/\/(?:www\.)?bitchute\.com\/video\/([\w\-]+)/,el(e){const t=o.el("iframe",{src:`https://www.bitchute.com/embed/${e.dataset.uid}/`});return t.setAttribute("allowfullscreen","true"),t}},{key:"Clyp",regExp:/^\w+:\/\/(?:www\.)?clyp\.it\/(\w{8})/,style:"border: 0; width: 640px; height: 160px;",el(e){return o.el("iframe",{src:`https://clyp.it/${e.dataset.uid}/widget`})},title:{api(e){return`https://api.clyp.it/oembed?url=https://clyp.it/${e}`},text(e){return e.title}}},{key:"Dailymotion",regExp:/^\w+:\/\/(?:(?:www\.)?dailymotion\.com\/(?:embed\/)?video|dai\.ly)\/([A-Za-z0-9]+)[^?]*(.*)/,el(e){let t;const i=(t=e.dataset.options.match(/[?&](start=\d+)/))?`?${t[1]}`:"",n=o.el("iframe",{src:`//www.dailymotion.com/embed/video/${e.dataset.uid}${i}`});return n.setAttribute("allowfullscreen","true"),n},title:{api(e){return`https://api.dailymotion.com/video/${e}`},text(e){return e.title}},preview:{url(e){return`https://www.dailymotion.com/thumbnail/video/${e}`},height:240}},{key:"Gfycat",regExp:/^\w+:\/\/(?:www\.)?gfycat\.com\/(?:iframe\/)?(\w+)/,el(e){const t=o.el("iframe",{src:`//gfycat.com/ifr/${e.dataset.uid}`});return t.setAttribute("allowfullscreen","true"),t}},{key:"Gist",regExp:/^\w+:\/\/gist\.github\.com\/[\w\-]+\/(\w+)/,style:"",el:function(){let e=0;return function(t){const i=o.el("pre",{hidden:!0,id:`gist-embed-${e++}`});return xe.cache(`https://api.github.com/gists/${t.dataset.uid}`,function(){return i.textContent=Object.values(this.response.files)[0].content,i.className="prettyprint",o.global("prettyPrint",{id:i.id}),i.hidden=!1}),i}}(),title:{api(e){return`https://api.github.com/gists/${e}`},text({files:e}){for(var t in e)if(e.hasOwnProperty(t))return t}}},{key:"InstallGentoo",regExp:/^\w+:\/\/paste\.installgentoo\.com\/view\/(?:raw\/|download\/|embed\/)?(\w+)/,el(e){return o.el("iframe",{src:`https://paste.installgentoo.com/view/embed/${e.dataset.uid}`})}},{key:"LiveLeak",regExp:/^\w+:\/\/(?:\w+\.)?liveleak\.com\/.*\?.*[tif]=(\w+)/,el(e){const t=o.el("iframe",{src:`https://www.liveleak.com/e/${e.dataset.uid}`});return t.setAttribute("allowfullscreen","true"),t}},{key:"Loopvid",regExp:/^\w+:\/\/(?:www\.)?loopvid.appspot.com\/#?((?:pf|kd|lv|gd|gh|db|dx|nn|cp|wu|ig|ky|mf|m2|pc|1c|pi|ni|wl|ko|mm|ic|gc)\/[\w\-\/]+(?:,[\w\-\/]+)*|fc\/\w+\/\d+|https?:\/\/.+)/,style:"max-width: 80vw; max-height: 80vh;",el(e){const t=o.el("video",{controls:!0,preload:"auto",loop:!0});if(/^http/.test(e.dataset.uid))return o.add(t,o.el("source",{src:e.dataset.uid})),t;const[i,n,s]=e.dataset.uid.match(/(\w+)\/(.*)/),r=(()=>{switch(n){case"gd":case"wu":case"fc":return[""];case"gc":return["giant","fat","zippy"];default:return[".webm",".mp4"]}})();for(var a of s.split(","))for(var h of r){var u=`${a}${h}`,f=(()=>{switch(n){case"pf":return[`https://kastden.org/_loopvid_media/pf/${u}`,`https://web.archive.org/web/2/http://a.pomf.se/${u}`];case"kd":return[`https://kastden.org/loopvid/${u}`];case"lv":return[`https://lv.kastden.org/${u}`];case"gd":return[`https://docs.google.com/uc?export=download&id=${u}`];case"gh":return[`https://googledrive.com/host/${u}`];case"db":return[`https://dl.dropboxusercontent.com/u/${u}`];case"dx":return[`https://dl.dropboxusercontent.com/${u}`];case"nn":return[`https://kastden.org/_loopvid_media/nn/${u}`];case"cp":return[`https://copy.com/${u}`];case"wu":return[`http://webmup.com/${u}/vid.webm`];case"ig":return[`https://i.imgur.com/${u}`];case"ky":return[`https://kastden.org/_loopvid_media/ky/${u}`];case"mf":return[`https://kastden.org/_loopvid_media/mf/${u}`,`https://web.archive.org/web/2/https://d.maxfile.ro/${u}`];case"m2":return[`https://kastden.org/_loopvid_media/m2/${u}`];case"pc":return[`https://kastden.org/_loopvid_media/pc/${u}`,`https://web.archive.org/web/2/http://a.pomf.cat/${u}`];case"1c":return[`http://b.1339.cf/${u}`];case"pi":return[`https://kastden.org/_loopvid_media/pi/${u}`,`https://web.archive.org/web/2/https://u.pomf.is/${u}`];case"ni":return[`https://kastden.org/_loopvid_media/ni/${u}`,`https://web.archive.org/web/2/https://u.nya.is/${u}`];case"wl":return[`http://webm.land/media/${u}`];case"ko":return[`https://kordy.kastden.org/loopvid/${u}`];case"mm":return[`https://kastden.org/_loopvid_media/mm/${u}`,`https://web.archive.org/web/2/https://my.mixtape.moe/${u}`];case"ic":return[`https://media.8ch.net/file_store/${u}`];case"fc":return[`//${de.host()}/${u}.webm`];case"gc":return[`https://${h}.gfycat.com/${a}.webm`]}})();for(var g of f)o.add(t,o.el("source",{src:g}))}return t}},{key:"Openings.moe",regExp:/^\w+:\/\/openings.moe\/\?video=([^.&=]+)/,style:"width: 1280px; height: 720px; max-width: 80vw; max-height: 80vh;",el(e){const t=o.el("iframe",{src:`https://openings.moe/?video=${e.dataset.uid}`});return t.setAttribute("allowfullscreen","true"),t}},{key:"Pastebin",regExp:/^\w+:\/\/(?:\w+\.)?pastebin\.com\/(?!u\/)(?:[\w.]+(?:\/|\?i\=))?(\w+)/,el(e){return o.el("iframe",{src:`//pastebin.com/embed_iframe/${e.dataset.uid}`})}},{key:"SoundCloud",regExp:/^\w+:\/\/(?:www\.)?(?:soundcloud\.com\/|snd\.sc\/)([\w\-\/]+)/,style:"border: 0; width: 500px; height: 400px;",el(e){return o.el("iframe",{src:`https://w.soundcloud.com/player/?visual=true&show_comments=false&url=https%3A%2F%2Fsoundcloud.com%2F${encodeURIComponent(e.dataset.uid)}`})},title:{api(e){return`${location.protocol}//soundcloud.com/oembed?format=json&url=https%3A%2F%2Fsoundcloud.com%2F${encodeURIComponent(e)}`},text(e){return e.title}}},{key:"StrawPoll",regExp:/^\w+:\/\/(?:www\.)?strawpoll\.me\/(?:embed_\d+\/)?(\d+(?:\/r)?)/,style:"border: 0; width: 600px; height: 406px;",el(e){return o.el("iframe",{src:`https://www.strawpoll.me/embed_1/${e.dataset.uid}`})}},{key:"Streamable",regExp:/^\w+:\/\/(?:www\.)?streamable\.com\/(\w+)/,el(e){const t=o.el("iframe",{src:`https://streamable.com/o/${e.dataset.uid}`});return t.setAttribute("allowfullscreen","true"),t},title:{api(e){return`https://api.streamable.com/oembed?url=https://streamable.com/${e}`},text(e){return e.title}}},{key:"TwitchTV",regExp:/^\w+:\/\/(?:www\.|secure\.|clips\.|m\.)?twitch\.tv\/(\w[^#\&\?]*)/,el(e){let t,i=e.dataset.href.match(/^\w+:\/\/(?:(clips\.)|\w+\.)?twitch\.tv\/(?:\w+\/)?(clip\/)?(\w[^#\&\?]*)/);if(i[1]||i[2])t=`//clips.twitch.tv/embed?clip=${i[3]}&parent=${location.hostname}`;else{let s;i=e.dataset.uid.match(/(\w+)(?:\/(?:v\/)?(\d+))?/),t=`//player.twitch.tv/?${i[2]?`video=v${i[2]}`:`channel=${i[1]}`}&autoplay=false&parent=${location.hostname}`,(s=e.dataset.href.match(/\bt=(\w+)/))&&(t+=`&time=${s[1]}`)}const n=o.el("iframe",{src:t});return n.setAttribute("allowfullscreen","true"),n}},{key:"Twitter",regExp:/^\w+:\/\/(?:www\.|mobile\.)?(?:(?:(?:fx|vx)?twitter|(?:fixup|fixv)?x|twittpr|xcancel)\.com|nitter\.\w+.\w+)\/(\w+\/status\/\d+)/,style:"border: none; width: 550px; height: 250px; overflow: hidden; resize: both;",el(e){if(l.XEmbedder==="tf"){const n=o.el("iframe");o.on(n,"load",function(){return this.contentWindow.postMessage({element:"t",query:"height"},"https://twitframe.com")});var t=function(s){if(s.source===n.contentWindow&&s.origin==="https://twitframe.com")return o.off(window,"message",t),(i||n).style.height=`${+o.minmax(s.data.height,250,.8*w.clientHeight)}px`};if(o.on(window,"message",t),n.src=`https://twitframe.com/show?url=https://twitter.com/${e.dataset.uid}`,o.engine==="gecko"){n.style.cssText="border: none; width: 100%; height: 100%;";var i=o.el("div");return o.add(i,n),i}else return n}return Is(e)}},{key:"VidLii",regExp:/^\w+:\/\/(?:www\.)?vidlii\.com\/watch\?v=(\w{11})/,style:"border: none; width: 640px; height: 392px;",el(e){const t=o.el("iframe",{src:`https://www.vidlii.com/embed?v=${e.dataset.uid}&a=0`});return t.setAttribute("allowfullscreen","true"),t}},{key:"Vimeo",regExp:/^\w+:\/\/(?:www\.)?vimeo\.com\/(\d+)/,el(e){const t=o.el("iframe",{src:`//player.vimeo.com/video/${e.dataset.uid}?wmode=opaque`});return t.setAttribute("allowfullscreen","true"),t},title:{api(e){return`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${e}`},text(e){return e.title}}},{key:"Vine",regExp:/^\w+:\/\/(?:www\.)?vine\.co\/v\/(\w+)/,style:"border: none; width: 500px; height: 500px;",el(e){return o.el("iframe",{src:`https://vine.co/v/${e.dataset.uid}/card`})}},{key:"Vocaroo",regExp:/^\w+:\/\/(?:(?:www\.|old\.)?vocaroo\.com|voca\.ro)\/((?:i\/)?\w+)/,style:"",el(e){const t=o.el("iframe");return t.width=300,t.height=60,t.setAttribute("frameborder",0),t.src=`https://vocaroo.com/embed/${e.dataset.uid.replace(/^i\//,"")}?autoplay=0`,t}},{key:"YouTube",regExp:/^\w+:\/\/(?:youtu.be\/|[\w.]*youtube[\w.]*\/.*(?:v=|\bembed\/|\bv\/|shorts\/|live\/|watch\/))([\w\-]{11})(.*)/,el(e){let t=e.dataset.options.match(/\b(?:star)?t\=(\w+)/);t&&(t=t[1]),t&&!/^\d+$/.test(t)&&(t+=" 0h0m0s",t=3600*t.match(/(\d+)h/)[1]+60*t.match(/(\d+)m/)[1]+1*t.match(/(\d+)s/)[1]);const i=o.el("iframe",{src:`//www.youtube.com/embed/${e.dataset.uid}?rel=0&wmode=opaque${t?"&start="+t:""}`});return i.setAttribute("allowfullscreen","true"),i},title:{api(e){return`https://www.youtube.com/oembed?url=https%3A//www.youtube.com/watch%3Fv%3D${e}&format=json`},text(e){return e.title},status(e){if(e.error){const t=e.error.match(/^(\d*)\s*(.*)/);return[+t[1],t[2]]}else return[200,"OK"]}},preview:{url(e){return`https://img.youtube.com/vi/${e}/0.jpg`},height:360}}],shouldFetchTitles(){return l["Link Title"]?l["Link Title in the catalog"]?!0:c.VIEW!=="catalog"&&!(c.VIEW==="index"&&l["Index Mode"]==="catalog"):!1}},Ss="UklGRjQDAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAc21wbDwAAABBAAADAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkYXRhzAIAAGMms8em0tleMV4zIpLVo8nhfSlcPR102Ki+5JspVEkdVtKzs+K1NEhUIT7DwKrcy0g6WygsrM2k1NpiLl0zIY/WpMrjgCdbPhxw2Kq+5Z4qUkkdU9K1s+K5NkVTITzBwqnczko3WikrqM+l1NxlLF0zIIvXpsnjgydZPhxs2ay95aIrUEkdUdC3suK8N0NUIjq+xKrcz002WioppdGm091pK1w0IIjYp8jkhydXPxxq2K295aUrTkoeTs65suK+OUFUIzi7xqrb0VA0WSoootKm0t5tKlo1H4TYqMfkiydWQBxm16+85actTEseS8y7seHAPD9TIza5yKra01QyWSson9On0d5wKVk2H4DYqcfkjidUQB1j1rG75KsvSkseScu8seDCPz1TJDW2yara1FYxWSwnm9Sn0N9zKVg2H33ZqsXkkihSQR1g1bK65K0wSEsfR8i+seDEQTxUJTOzy6rY1VowWC0mmNWoz993KVc3H3rYq8TklSlRQh1d1LS647AyR0wgRMbAsN/GRDpTJTKwzKrX1l4vVy4lldWpzt97KVY4IXbUr8LZljVPRCxhw7W3z6ZISkw1VK+4sMWvXEhSPk6buay9sm5JVkZNiLWqtrJ+TldNTnquqbCwilZXU1BwpKirrpNgWFhTaZmnpquZbFlbVmWOpaOonHZcXlljhaGhpZ1+YWBdYn2cn6GdhmdhYGN3lp2enIttY2Jjco+bnJuOdGZlZXCImJqakHpoZ2Zug5WYmZJ/bGlobX6RlpeSg3BqaW16jZSVkoZ0bGtteImSk5KIeG5tbnaFkJKRinxxbm91gY2QkIt/c3BwdH6Kj4+LgnZxcXR8iI2OjIR5c3J0e4WLjYuFe3VzdHmCioyLhn52dHR5gIiKioeAeHV1eH+GiYqHgXp2dnh9hIiJh4J8eHd4fIKHiIeDfXl4eHyBhoeHhH96eHmA",E={init(){let e;if(this.audio=o.el("audio"),o.engine!=="gecko"&&(this.audio.src=this.beep),o.on(this.audio,"error",()=>{new G("error",this.audio.error.message||"Error when trying to play thread updater beep.",15)}),c.VIEW!=="thread"||!l["Thread Updater"])return;this.enabled=!0,l["Updater and Stats in Header"]?(this.dialog=e=o.el("span",{id:"updater"}),o.extend(e,{innerHTML:'<span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>'}),x.addShortcut("updater",e,100)):(this.dialog=e=te.dialog("updater",{innerHTML:'<div class="move"></div><span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>'}),o.addClass(w,"float"),o.ready(()=>o.add(m.body,e))),this.checkPostCount=0,this.timer=o("#update-timer",e),this.status=o("#update-status",e),o.on(this.timer,"click",this.update),o.on(this.status,"click",this.update);const t=o.el("span",{className:"brackets-wrap updatelink"});o.extend(t,{innerHTML:'<a href="javascript:;">Update</a>'}),D.ready(function(){let r;if(r=o(".navLinksBot"))return o.add(r,[o.tn(" "),t])}),o.on(t.firstElementChild,"click",this.update);const i=[];for(const r in ge.updater.checkbox){var n=ge.updater.checkbox[r];const a=te.checkbox(r,r);a.title=n[1];var s=a.firstElementChild;o.on(s,"change",o.cb.checked),s.name==="Scroll BG"?(o.on(s,"change",this.cb.scrollBG),this.cb.scrollBG()):s.name==="Auto Update"&&o.on(s,"change",this.setInterval),i.push({el:a})}return this.settings=o.el("span",{innerHTML:'<a href="javascript:;">Interval</a>'}),o.on(this.settings,"click",this.intervalShortcut),i.push({el:this.settings}),x.menu.addEntry(this.entry={el:o.el("span",{textContent:"Updater"}),order:110,subEntries:i}),N.Thread.push({name:"Thread Updater",cb:this.node})},node(){return E.thread=this,E.root=this.nodes.root,E.outdateCount=0,E.postIDs=[],E.fileIDs=[],this.posts.forEach(function(e){if(E.postIDs.push(e.ID),e.file)return E.fileIDs.push(e.ID)}),E.cb.interval.call(o.el("input",{value:l.Interval})),o.on(m,"QRPostSuccessful",E.cb.checkpost),o.on(m,"visibilitychange",E.cb.visibility),E.setInterval()},beep:`data:audio/wav;base64,${Ss}`,playBeep(e=!0){const{audio:t}=E,i=l.beepSource||E.beep;t.src!==i&&(t.src=i),t.volume=Math.max(.01,Math.min(+l.beepVolume,1)),t.paused?t.play():e&&o.one(t,"ended",E.playBeep)},cb:{checkpost(e){if(e.detail.threadID===E.thread.ID)return E.postID=e.detail.postID,E.checkPostCount=0,E.outdateCount=0,E.setInterval()},visibility(){if(!m.hidden&&(E.outdateCount=0,E.seconds>E.interval))return E.setInterval()},scrollBG(){return E.scrollBG=l["Scroll BG"]?()=>!0:()=>!m.hidden},interval(e){let t=parseInt(this.value,10);if(t<1&&(t=1),E.interval=this.value=t,e)return o.cb.value.call(this)},load(){if(this===E.req)switch(this.status){case 200:return E.parse(this),E.thread.isArchived?E.kill():E.setInterval();case 404:return o.ajax(c.SITE.urls.catalogJSON({boardID:E.thread.board.ID}),{onloadend(){let e;if(this.status===200){e=!0;for(var t of this.response)for(var i of t.threads)if(i.no===E.thread.ID){e=!1;break}}else e=!1;e?E.kill():E.error(this)}});default:return E.error(this)}}},kill(){return E.thread.kill(),E.setInterval(),o.event("ThreadUpdate",{404:!0,threadID:E.thread.fullID})},error(e){if(e.status===304&&E.set("status",""),E.setInterval(),e.status){if(e.status!==304)return E.set("status",`${e.statusText} (${e.status})`,"warning")}else return E.set("status","Connection Error","warning")},setInterval(){if(clearTimeout(E.timeoutID),E.thread.isDead){E.set("status",E.thread.isArchived?"Archived":"404","warning"),E.set("timer","");return}if(E.postID&&E.checkPostCount<5){E.set("timer","...","loading"),E.timeoutID=setTimeout(E.update,++E.checkPostCount*ie);return}if(!l["Auto Update"]){E.set("timer","Update");return}const{interval:e}=E;if(l["Optional Increase"]){const t=m.hidden?10:5,i=Math.min(E.outdateCount,t),n=(Math.floor(e*.1)||1)*i*i;E.seconds=o.minmax(n,e,300)}else E.seconds=e;return E.timeout()},intervalShortcut(){$.open("Advanced");const e=o.id("fourchanx-settings");return o("input[name=Interval]",e).focus()},set(e,t,i){let n;const s=E[e];return(n=s.firstChild)?n.data=t:s.textContent=t,s.className=i??(t===""?"empty":"")},timeout(){return E.seconds?(E.set("timer",E.seconds),E.timeoutID=setTimeout(E.timeout,1e3)):(E.outdateCount++,E.update()),E.seconds--},update(){let e;return clearTimeout(E.timeoutID),E.set("timer","...","loading"),(e=E.req)&&(delete E.req,e.abort()),E.req=o.whenModified(c.SITE.urls.threadJSON({boardID:E.thread.board.ID,threadID:E.thread.ID}),"ThreadUpdater",E.cb.load,{timeout:Le})},updateThreadStatus(e,t){if(E.thread[`is${e}`]===t||(E.thread.setStatus(e,t),e==="Closed"&&E.thread.isArchived))return;const i=e==="Sticky"?t?"now a sticky":"not a sticky anymore":t?"now closed":"not closed anymore";return new G("info",`The thread is ${i}.`,30)},parse(e){let t,i,n;const s=e.response.posts,r=s[0],a=E.thread,{board:h}=a,u=E.postIDs[E.postIDs.length-1];if(s[s.length-1].no<u&&new Date(e.getResponseHeader("Last-Modified"))-a.posts.get(u).info.date<30*ie)return;c.SITE.Build.spoilerRange[h]=r.custom_spoiler,a.setStatus("Archived",!!r.archived),E.updateThreadStatus("Sticky",!!r.sticky),E.updateThreadStatus("Closed",!!r.closed),a.postLimit=!!r.bumplimit,a.fileLimit=!!r.imagelimit,r.unique_ips&&(a.ipCount=r.unique_ips);const f=[],g=[],b=[],I=[];for(var T of s)if(t=T.no,g.push(t),T.fsize&&b.push(t),!(t<=u)){if((n=a.posts.get(t))&&!n.isFetchedQuote){n.resurrect();continue}I.push(`${h}.${t}`);var R=c.SITE.Build.postFromObject(T,h.ID);f.push(new ye(R,a,h)),E.postID===t&&delete E.postID}const B=[];for(t of E.postIDs)g.includes(t)||(a.posts.get(t).kill(),B.push(`${h}.${t}`));E.postIDs=g;const P=[];for(t of E.fileIDs)b.includes(t)||B.includes(`${h}.${t}`)||(a.posts.get(t).kill(!0),P.push(`${h}.${t}`));if(E.fileIDs=b,!f.length)E.set("status","");else{E.set("status",`+${f.length}`,"new"),E.outdateCount=0;const X=A.posts?.size,k=A.postsQuotingYou?.size;D.callbackNodes("Post",f),(m.hidden||!m.hasFocus())&&(l["Beep Quoting You"]&&A.postsQuotingYou?.size>k?(E.playBeep(),l.Beep&&E.playBeep()):l.Beep&&A.posts?.size>0&&X===0&&E.playBeep());const M=l["Auto Scroll"]&&E.scrollBG()&&E.root.getBoundingClientRect().bottom-w.clientHeight<25;let K=null;for(n of f)se.insert(n)||(K||(K=n.nodes.root),o.add(E.root,n.nodes.root));o.event("PostsInserted",null,E.root),M&&(l["Bottom Scroll"]?window.scrollTo(0,m.body.clientHeight):K&&x.scrollTo(K))}return r.unique_ips&&(i=o.id("unique-ips"))&&(i.textContent=r.unique_ips,i.previousSibling.textContent=i.previousSibling.textContent.replace(/\b(?:is|are)\b/,r.unique_ips===1?"is":"are"),i.nextSibling.textContent=i.nextSibling.textContent.replace(/\bposters?\b/,r.unique_ips===1?"poster":"posters")),o.event("ThreadUpdate",{404:!1,threadID:a.fullID,newPosts:I,deletedPosts:B,deletedFiles:P,postCount:r.replies+1,fileCount:r.images+!!r.fsize,ipCount:r.unique_ips})}},ae={init(){if(l.Keybinds){for(var e in ge.hotkeys)o.sync(e,ae.sync);var t=function(){o.off(m,"4chanXInitFinished",t),o.on(m,"keydown",ae.keydown);for(var i of L("[accesskey]"))i.removeAttribute("accesskey")};return o.on(m,"4chanXInitFinished",t)}},sync(e,t){return l[t]=e},keydown(e){let t,i,n,s,r;if(!(t=ae.keyCode(e)))return;const{target:a}=e;if(["INPUT","TEXTAREA"].includes(a.nodeName)&&(!/(Esc|Alt|Ctrl|Meta|Shift\+\w{2,})/.test(t)||/^Alt\+(\d|Up|Down|Left|Right)$/.test(t)))return;["index","thread"].includes(c.VIEW)&&(n=Re.getThread(),i=F.threadFromRoot(n));let h=!1;if(t===l["Toggle board list"]&&l["Custom Board Navigation"]&&(x.toggleBoardList(),h=!0),t===l["Toggle header"]&&(x.toggleBarVisibility(),h=!0),t===l["Open empty QR"]&&d.postingIsEnabled&&(ae.qr(),h=!0),t===l["Open QR"]&&d.postingIsEnabled&&n&&(ae.qr(n),h=!0),t===l["Open settings"]&&($.open(),h=!0),t===l.Close){if($.dialog)$.close();else if((r=L(".notification")).length)for(var u of r)o(".close",u).click();else d.nodes?.preview?d.closePreview():d.nodes&&!(d.nodes.el.hidden||window.getComputedStyle(d.nodes.form).display==="none")?l["Persistent QR"]?d.hide():d.close():j.lastEmbed&&j.closeFloat();h=!0}if(t===l["Spoiler tags"]&&a.nodeName==="TEXTAREA"&&(ae.tags("spoiler",a),h=!0),t===l["Code tags"]&&a.nodeName==="TEXTAREA"&&(ae.tags("code",a),h=!0),t===l["Eqn tags"]&&a.nodeName==="TEXTAREA"&&(ae.tags("eqn",a),h=!0),t===l["Math tags"]&&a.nodeName==="TEXTAREA"&&(ae.tags("math",a),h=!0),t===l["SJIS tags"]&&a.nodeName==="TEXTAREA"&&(ae.tags("sjis",a),h=!0),t===l["Toggle sage"]&&d.nodes&&!d.nodes.el.hidden&&(ae.sage(),h=!0),t===l["Toggle Cooldown"]&&d.nodes&&!d.nodes.el.hidden&&o.hasClass(d.nodes.fileSubmit,"custom-cooldown")&&(d.toggleCustomCooldown(),h=!0),t===l["Post from URL"]&&d.postingIsEnabled&&(d.handleUrl(""),h=!0),t===l["Add new post"]&&d.postingIsEnabled&&(d.addPost(),h=!0),t===l["Submit QR"]&&d.nodes&&!d.nodes.el.hidden&&!d.status()&&(d.submit(),h=!0),t===l.Update)switch(c.VIEW){case"thread":E.enabled&&E.update(),h=!0;break;case"index":p.enabled&&p.update(),h=!0}if(t===l.Watch&&v.enabled&&i&&(v.toggle(i),h=!0),t===l["Update thread watcher"]&&v.enabled&&(v.buttonFetchAll(),h=!0),t===l["Toggle thread watcher"]&&v.enabled&&(v.toggleWatcher(),h=!0),t===l["Toggle threading"]&&se.ready&&(se.toggleThreading(),h=!0),t===l["Mark thread read"]&&c.VIEW==="index"&&i&&ce.enabled&&(ce.markRead.call(n),h=!0),t===l["Expand image"]&&Q.enabled&&n){var f=F.postFromNode(ae.post(n));f.file&&(Q.toggle(f),h=!0)}if(t===l["Expand images"]&&Q.enabled&&(Q.cb.toggleAll(),h=!0),t===l["Open Gallery"]&&C.enabled&&(C.cb.toggle(),h=!0),t===l.fappeTyme&&it.nodes?.fappe&&(it.toggle("fappe"),h=!0),t===l.werkTyme&&it.nodes?.werk&&(it.toggle("werk"),h=!0),t===l["Front page"]&&(p.enabled?p.userPageNav(1):location.href=`/${c.BOARD}/`,h=!0),t===l["Open front page"]&&(o.open(`${location.origin}/${c.BOARD}/`),h=!0),t===l["Next page"]&&c.VIEW==="index"&&!c.SITE.isOnePage?.(c.BOARD)){if(p.enabled){if(!["paged","infinite"].includes(l["Index Mode"]))return;o(".next button",p.pagelist).click()}else o(c.SITE.selectors.nav.next)?.click();h=!0}if(t===l["Previous page"]&&c.VIEW==="index"&&!c.SITE.isOnePage?.(c.BOARD)){if(p.enabled){if(!["paged","infinite"].includes(l["Index Mode"]))return;o(".prev button",p.pagelist).click()}else o(c.SITE.selectors.nav.prev)?.click();h=!0}if(t===l["Search form"]&&c.VIEW==="index"){var g=p.enabled?p.searchInput:c.SITE.selectors.searchBox?o(c.SITE.selectors.searchBox):void 0;g&&(x.scrollToIfNeeded(g),g.focus(),h=!0)}t===l["Paged mode"]&&p.enabledOn(c.BOARD)&&(location.href=c.VIEW==="index"?"#paged":`/${c.BOARD}/#paged`),t===l["Infinite scrolling mode"]&&p.enabledOn(c.BOARD)&&(location.href=c.VIEW==="index"?"#infinite":`/${c.BOARD}/#infinite`),t===l["All pages mode"]&&p.enabledOn(c.BOARD)&&(location.href=c.VIEW==="index"?"#all-pages":`/${c.BOARD}/#all-pages`),t===l["Open catalog"]&&(s=re.catalog())&&(location.href=s),t===l["Cycle sort type"]&&p.enabled&&(p.cycleSortType(),h=!0),t===l["Next thread"]&&c.VIEW==="index"&&n&&(Re.scroll(1),h=!0),t===l["Previous thread"]&&c.VIEW==="index"&&n&&(Re.scroll(-1),h=!0),t===l["Expand thread"]&&c.VIEW==="index"&&n&&(ve.toggle(i),x.scrollTo(n),h=!0),t===l["Open thread"]&&c.VIEW==="index"&&n&&(ae.open(i),h=!0),t===l["Open thread tab"]&&c.VIEW==="index"&&n&&(ae.open(i,!0),h=!0),t===l["Next reply"]&&n&&(ae.hl(1,n),h=!0),t===l["Previous reply"]&&n&&(ae.hl(-1,n),h=!0),t===l["Deselect reply"]&&n&&(ae.hl(0,n),h=!0),t===l.Hide&&i&&W.db&&(x.scrollTo(n),W.toggle(i),h=!0),t===l["Quick Filter MD5"]&&n&&(f=ae.post(n),ae.hl(1,n),V.quickFilterMD5.call(f,e),h=!0),t===l["Previous Post Quoting You"]&&n&&Z.db&&(Z.cb.seek("preceding"),h=!0),t===l["Next Post Quoting You"]&&n&&Z.db&&(Z.cb.seek("following"),h=!0),h&&(e.preventDefault(),e.stopPropagation())},keyCode(e){let t=(()=>{let i;switch(i=e.keyCode){case 8:return"";case 13:return"Enter";case 27:return"Esc";case 32:return"Space";case 37:return"Left";case 38:return"Up";case 39:return"Right";case 40:return"Down";case 188:return"Comma";case 190:return"Period";case 191:return"Slash";case 59:case 186:return"Semicolon";default:return 48<=i&&i<=57||65<=i&&i<=90?String.fromCharCode(i).toLowerCase():96<=i&&i<=105?String.fromCharCode(i-48):null}})();return t&&(e.altKey&&(t="Alt+"+t),e.ctrlKey&&(t="Ctrl+"+t),e.metaKey&&(t="Meta+"+t),e.shiftKey&&(t="Shift+"+t)),t},post(e){const t=c.SITE.selectors;return o(`${t.postContainer}${t.highlightable.reply}.${c.SITE.classes.highlight}`,e)||o(`${c.SITE.isOPContainerThread?t.thread:t.postContainer}${t.highlightable.op}`,e)},qr(e){return d.open(),e!=null&&d.quote.call(ae.post(e)),d.nodes.com.focus()},tags(e,t){fe.ready(function(){const{config:a}=c.BOARD;if(!(()=>{switch(e){case"spoiler":return!!a.spoilers;case"code":return!!a.code_tags;case"math":case"eqn":return!!a.math_tags;case"sjis":return!!a.sjis_tags}})())return new G("warning",`[${e}] tags are not supported on /${c.BOARD}/.`,20)});const{value:i}=t,n=t.selectionStart,s=t.selectionEnd;t.value=i.slice(0,n)+`[${e}]`+i.slice(n,s)+`[/${e}]`+i.slice(s);const r=`[${e}]`.length+s;return t.setSelectionRange(r,r),o.event("input",null,t)},sage(){const e=/sage/i.test(d.nodes.email.value);return d.nodes.email.value=e?"":"sage"},open(e,t){if(c.VIEW!=="index")return;const i=F.url("thread",e);return t?o.open(i):location.href=i},hl(e,t){const i=`${c.SITE.selectors.postContainer}${c.SITE.selectors.highlightable.reply}`,{highlight:n}=c.SITE.classes,s=o(`${i}.${n}`,t);if(!e){s&&o.rmClass(s,n);return}if(s){const{height:h}=s.getBoundingClientRect();if(x.getTopOf(s)>=-h&&x.getBottomOf(s)>=-h){let u;const{root:f}=F.postFromNode(s).nodes,g=e===1?"following":"preceding";if(!(u=o.x(`${g}-sibling::${c.SITE.xpath.replyContainer}[not(@hidden) and not(child::div[@class='stub'])][1]`,f)))return;u.matches(i)||(u=o(i,u)),x.scrollToIfNeeded(u,e===1),o.addClass(u,n),o.rmClass(s,n);return}o.rmClass(s,n)}const r=L(i,t);e===-1&&r.reverse();for(var a of r)if(e===1&&x.getTopOf(a)>0||e===-1&&x.getBottomOf(a)>0){o.addClass(a,n);return}}};const le={cache:{init(){return o.on(m,"SaveCaptcha",e=>this.saveAPI(e.detail)),o.on(m,"NoCaptcha",e=>this.noCaptcha(e.detail))},captchas:[],getCount(){return this.captchas.length},neededRaw(){return!(this.haveCookie()||this.captchas.length||d.req||this.submitCB)&&(d.posts.length>1||l["Auto-load captcha"]||!d.posts[0].isOnlyQuotes()||d.posts[0].file)},needed(){return this.neededRaw()&&o.event("LoadCaptcha")},haveCookie(){return/\b_ct=/.test(m.cookie)&&d.posts[0].thread!=="new"},getOne(){let e;return delete this.prerequested,this.clear(),(e=this.captchas.shift())?(this.count(),e):null},request(e){if(!(!this.submitCB&&o.event("RequestCaptcha",{isReply:e})))return t=>(this.submitCB=t,this.updateCount())},abort(){if(this.submitCB)return delete this.submitCB,o.event("AbortCaptcha"),this.updateCount()},saveAPI(e){let t;return(t=this.submitCB)?(delete this.submitCB,t(e),this.updateCount()):this.save(e)},noCaptcha(e){let t;if(t=this.submitCB)return(!this.haveCookie()||e?.error)&&(d.error(e?.error||"Failed to retrieve captcha."),d.captcha.setup(m.activeElement===d.nodes.status)),delete this.submitCB,t(),this.updateCount()},save(e){let t;if(t=this.submitCB){this.abort(),t(e);return}return this.captchas.push(e),this.captchas.sort((i,n)=>i.timeout-n.timeout),this.count()},clear(){if(this.captchas.length){let t;const i=Date.now();for(t=0;t<this.captchas.length;t++){var e=this.captchas[t];if(e.timeout>i)break}if(t)return this.captchas=this.captchas.slice(t),this.count()}},count(){return clearTimeout(this.timer),this.captchas.length&&(this.timer=setTimeout(this.clear.bind(this),this.captchas[0].timeout-Date.now())),this.updateCount()},updateCount(){return o.event("CaptchaCount",this.captchas.length)}},replace:Ht,t:Ve,v2:{lifetime:2*Le,init(){if(m.cookie.indexOf("pass_enabled=1")>=0||!(this.isEnabled=!!o("#g-recaptcha, #captcha-forced-noscript")||!o.id("postForm")))return;(this.noscript=l["Force Noscript Captcha"]||!D.jsEnabled)&&o.addClass(d.nodes.el,"noscript-captcha"),le.cache.init(),o.on(m,"CaptchaCount",this.count.bind(this));const e=o.el("div",{className:"captcha-root"});o.extend(e,{innerHTML:'<div class="captcha-counter"><a href="javascript:;"></a></div>'});const t=o(".captcha-counter > a",e);return this.nodes={root:e,counter:t},this.count(),o.addClass(d.nodes.el,"has-captcha","captcha-v2"),o.after(d.nodes.com.parentNode,e),o.on(t,"click",this.toggle.bind(this)),o.on(t,"keydown",i=>{if(ae.keyCode(i)==="Space")return this.toggle(),i.preventDefault(),i.stopPropagation()}),o.on(window,"captcha:success",()=>o.queueTask(()=>this.save(!1)))},timeouts:{},prevNeeded:0,noscriptURL(){let e,t=`https://www.google.com/recaptcha/api/fallback?k=${z.recaptchaKey}`;return(e=l.captchaLanguage.trim())&&(t+=`&hl=${encodeURIComponent(e)}`),t},moreNeeded(){return o.queueTask(()=>{const e=le.cache.needed();return e&&!this.prevNeeded&&this.setup(d.cooldown.auto&&m.activeElement===d.nodes.status),this.prevNeeded=e})},toggle(){return this.nodes.container&&!this.timeouts.destroy?this.destroy():this.setup(!0,!0)},setup(e,t){if(!(!this.isEnabled||!le.cache.needed()&&!t)){if(e&&(o.addClass(d.nodes.el,"focus"),this.nodes.counter.focus()),this.timeouts.destroy)return clearTimeout(this.timeouts.destroy),delete this.timeouts.destroy,this.reload();if(this.nodes.container){o.queueTask(()=>{let i;if(this.nodes.container&&m.activeElement===this.nodes.counter&&(i=o('iframe[src^="https://www.google.com/recaptcha/"]',this.nodes.container)))return i.focus(),d.focus()});return}return this.nodes.container=o.el("div",{className:"captcha-container"}),o.prepend(this.nodes.root,this.nodes.container),new MutationObserver(this.afterSetup.bind(this)).observe(this.nodes.container,{childList:!0,subtree:!0}),this.noscript?this.setupNoscript():this.setupJS()}},setupNoscript(){const e=o.el("iframe",{id:"qr-captcha-iframe",scrolling:"no",src:this.noscriptURL()}),t=o.el("div"),i=o.el("textarea");return o.add(t,i),o.add(this.nodes.container,[e,t])},setupJS(){o.global("setupCaptcha",{recaptchaKey:z.recaptchaKey})},afterSetup(e){for(var t of e)for(var i of t.addedNodes){var n,s;(n=o.x('./descendant-or-self::iframe[starts-with(@src, "https://www.google.com/recaptcha/")]',i))&&this.setupIFrame(n),(s=o.x("./descendant-or-self::textarea",i))&&this.setupTextArea(s)}},setupIFrame(e){let t;if(w.contains(e)&&(le.replace.iframe(e),o.addClass(d.nodes.el,"captcha-open"),this.fixQRPosition(),o.on(e,"load",this.fixQRPosition),m.activeElement===this.nodes.counter&&e.focus(),["blink","edge"].includes(o.engine)&&(t=e.parentNode,L("#qr .captcha-container > div > div:first-of-type").includes(t))))return o.on(e.parentNode,"scroll",function(){return this.scrollTop=0})},fixQRPosition(){if(d.nodes.el.getBoundingClientRect().bottom>w.clientHeight)return d.nodes.el.style.top="",d.nodes.el.style.bottom="0px"},setupTextArea(e){return o.one(e,"input",()=>this.save(!0))},destroy(){if(this.isEnabled&&(delete this.timeouts.destroy,o.rmClass(d.nodes.el,"captcha-open"),this.nodes.container))return o.global("resetCaptcha"),o.rm(this.nodes.container),delete this.nodes.container},getOne(e){return le.cache.getOne(e)},save(e,t){le.cache.save({response:t||o("textarea",this.nodes.container).value,timeout:Date.now()+this.lifetime});const i=m.activeElement?.nodeName==="IFRAME"&&/https?:\/\/www\.google\.com\/recaptcha\//.test(m.activeElement.src);if(le.cache.needed()?(i&&(d.cooldown.auto||l["Post on Captcha Completion"]?this.nodes.counter.focus():d.nodes.status.focus()),this.reload()):(e?this.destroy():this.timeouts.destroy==null&&(this.timeouts.destroy=setTimeout(this.destroy.bind(this),3*ie)),i&&d.nodes.status.focus()),l["Post on Captcha Completion"]&&!d.cooldown.auto)return d.submit()},count(){const e=le.cache.getCount(),t=le.cache.submitCB?"...":"";return this.nodes.counter.textContent=`Captchas: ${e}${t}`,this.moreNeeded()},reload(){if(o('iframe[src^="https://www.google.com/recaptcha/api/fallback?"]',this.nodes.container))return this.destroy(),this.setup(!1,!0);o.global("resetCaptcha")},occupied(){return!!this.nodes.container&&!this.timeouts.destroy}}};var d={postingIsEnabled:!1,captcha:void 0,min_width:0,min_height:0,max_width:0,max_height:0,max_size:0,max_size_video:0,max_comment:0,max_width_video:0,max_height_video:0,max_duration_video:0,forcedAnon:!1,spoiler:!1,link:void 0,post:void 0,posts:void 0,nodes:void 0,shortcut:void 0,hasFocus:!1,req:void 0,selected:void 0,mimeTypes:["image/jpeg","image/png","image/gif","application/pdf","application/vnd.adobe.flash.movie","application/x-shockwave-flash","video/webm","video/mp4"],validExtension:/\.(jpe?g|png|gif|pdf|swf|webm|mp4)$/i,typeFromExtension:{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",pdf:"application/pdf",swf:"application/vnd.adobe.flash.movie",webm:"video/webm",mp4:"video/mp4"},extensionFromType:{"image/jpeg":"jpg","image/png":"png","image/gif":"gif","application/pdf":"pdf","application/vnd.adobe.flash.movie":"swf","application/x-shockwave-flash":"swf","video/webm":"webm","video/mp4":"mp4"},init(){let e;l["Quick Reply"]&&(this.posts=[],o.on(m,"4chanXInitFinished",()=>fe.ready(d.initReady)),N.Post.push({name:"Quick Reply",cb:this.node}),this.shortcut=e=o.el("a",{className:"disabled",title:"Quick Reply",href:"javascript:;"}),q.set(this.shortcut,"comment","Quick Reply"),o.on(e,"click",function(){d.postingIsEnabled&&(l["Persistent QR"]||!d.nodes||d.nodes.el.hidden?(d.open(),d.nodes.com.focus()):d.close())}),x.addShortcut("qr",e,540),window.addEventListener("message",t=>{t.data?.twister?.error&&d.error(o.el("div",{innerHTML:t.data.twister.error}))}))},initReady(){let e;const t=o("#g-recaptcha, #captcha-forced-noscript")?"v2":"t";d.captcha=le[t],d.postingIsEnabled=!0;const{config:i}=c.BOARD,n=(s,r)=>+(i[s]??r);if(d.min_width=n("min_image_width",1),d.min_height=n("min_image_height",1),d.max_width=d.max_height=1e4,d.max_size=n("max_filesize",4194304),d.max_size_video=n("max_webm_filesize",d.max_size),d.max_comment=n("max_comment_chars",2e3),d.max_width_video=d.max_height_video=2048,d.max_duration_video=n("max_webm_duration",120),d.forcedAnon=!!i.forced_anon,d.spoiler=!!i.spoilers,e=o.id("togglePostFormLink")){const s=o.el("h1",{className:"qr-link-container"});o.extend(s,{innerHTML:`<a href="javascript:;" class="qr-link">${c.VIEW==="thread"?"Reply to Thread":"Start a Thread"}</a>`}),d.link=s.firstElementChild,o.on(s.firstChild,"click",function(){return d.open(),d.nodes.com.focus()}),o.before(e,s),e.firstElementChild.textContent="Original Form"}if(c.VIEW==="thread"){let s;const r=o.el("div",{className:"brackets-wrap qr-link-container-bottom"});o.extend(r,{innerHTML:'<a href="javascript:;" class="qr-link-bottom">Reply to Thread</a>'}),o.on(r.firstElementChild,"click",function(){return d.open(),d.nodes.com.focus()}),(s=o(".navLinksBot"))&&o.prepend(s,r)}if(o.on(m,"QRGetFile",d.getFile),o.on(m,"QRDrawFile",d.drawFile),o.on(m,"QRSetFile",d.setFile),o.on(m,"paste",d.paste),o.on(m,"dragover",d.dragOver),o.on(m,"drop",d.dropFile),o.on(m,"dragstart dragend",d.drag),o.on(m,"IndexRefreshInternal",d.generatePostableThreadsList),o.on(m,"ThreadUpdate",d.statusCheck),!!l["Persistent QR"]&&(d.open(),l["Auto Hide QR"]))return d.hide()},statusCheck(){if(!d.nodes)return;const{thread:e}=d.posts[0];return e!=="new"&&c.threads.get(`${c.BOARD}.${e}`).isDead?d.abort():d.status()},node(){if(o.on(this.nodes.quote,"click",d.quote),this.isFetchedQuote)return d.generatePostableThreadsList()},open(){if(d.nodes)d.nodes.el.hidden&&d.captcha.setup(),d.nodes.el.hidden=!1,d.unhide();else try{d.dialog()}catch(e){delete d.nodes,D.handleErrors({message:"Quick Reply dialog creation crashed.",error:e});return}return o.rmClass(d.shortcut,"disabled")},close(){if(d.req){d.abort();return}d.nodes.el.hidden=!0,d.cleanNotifications(),d.blur(),o.rmClass(d.nodes.el,"dump"),o.addClass(d.shortcut,"disabled"),new d.post(!0);for(var e of d.posts.splice(0,d.posts.length-1))e.delete();return d.cooldown.auto=!1,d.status(),d.captcha.destroy()},focus(){return o.queueTask(function(){if(!d.inBubble())return d.hasFocus=m.activeElement&&d.nodes.el.contains(m.activeElement),d.nodes.el.classList.toggle("focus",d.hasFocus)})},inBubble(){const e=L('iframe[src^="https://www.google.com/recaptcha/api2/frame"]');return e.includes(m.activeElement)||e.some(t=>getComputedStyle(t).visibility!=="hidden"&&t.getBoundingClientRect().bottom>0)},hide(){return d.blur(),o.addClass(d.nodes.el,"autohide"),d.nodes.autohide.checked=!0},unhide(){return o.rmClass(d.nodes.el,"autohide"),d.nodes.autohide.checked=!1},toggleHide(){return this.checked?d.hide():d.unhide()},blur(){if(d.nodes.el.contains(m.activeElement))return m.activeElement.blur()},toggleSJIS(e){return e.preventDefault(),l.sjisPreview=!l.sjisPreview,o.set("sjisPreview",l.sjisPreview),d.nodes.el.classList.toggle("sjis-preview",l.sjisPreview)},texPreviewShow(){return o.hasClass(d.nodes.el,"tex-preview")?d.texPreviewHide():(o.addClass(d.nodes.el,"tex-preview"),d.nodes.texPreview.textContent=d.nodes.com.value,o.event("mathjax",null,d.nodes.texPreview))},texPreviewHide(){return o.rmClass(d.nodes.el,"tex-preview")},addPost(){const e=d.nodes&&!d.nodes.el.hidden;return d.open(),e&&(o.addClass(d.nodes.el,"dump"),new d.post(!0)),d.nodes.com.focus()},setCustomCooldown(e){return l.customCooldownEnabled=e,d.cooldown.customCooldown=e,d.nodes.customCooldown.classList.toggle("disabled",!e)},toggleCustomCooldown(){const e=o.hasClass(d.nodes.customCooldown,"disabled");return d.setCustomCooldown(e),o.set("customCooldownEnabled",e)},error(e,t){let i;d.open(),typeof e=="string"?i=o.tn(e):(i=e,i.removeAttribute("style"));const n=new G("warning",i);if(d.notifications.push(n),x.areNotificationsEnabled){if(m.hidden||!(t||m.hasFocus())){const s=new Notification(i.textContent,{body:i.textContent,icon:pe.logo});if(s.onclick=()=>window.focus(),o.engine!=="gecko")return s.onclose=()=>n.close(),s.onshow=()=>setTimeout(function(){return s.onclose=null,s.close()},7*ie)}}else if(m.hidden&&!d.cooldown.auto)return alert(i.textContent)},connectionError(){return o.el("span",{innerHTML:'Connection error while posting. [<a href="'+oe(z.upstreamFaq)+'#connection-errors" target="_blank">More info</a>]'})},notifications:[],cleanNotifications(){for(var e of d.notifications)e.close();return d.notifications=[]},status(){let e,t;if(!d.nodes)return;const{thread:i}=d.posts[0];i!=="new"&&c.threads.get(`${c.BOARD}.${i}`).isDead&&(t="Dead",e=!0,d.cooldown.auto=!1),t=d.req?d.req.progress:d.cooldown.seconds||t;const{status:n}=d.nodes;return n.value=t?d.cooldown.auto?`Auto ${t}`:t:"Submit",n.disabled=e||!1,n.disabled},openPost(){if(d.open(),d.selected.isLocked){const e=d.posts.indexOf(d.selected);return(d.posts[e+1]||new d.post).select(),o.addClass(d.nodes.el,"dump"),d.cooldown.auto=!0}},quote(e){let t;if(e?.preventDefault(),!d.postingIsEnabled)return;const i=m.getSelection(),n=F.postFromNode(this),{root:s}=n.nodes,r=new Range;r.selectNode(s);let a=n.board.ID===c.BOARD.ID?`>>${n}
`:`>>>/${n.board}/${n}
`;for(let B=0;B<i.rangeCount;B++)try{var h,u;if(t=i.getRangeAt(B),t.compareBoundaryPoints(Range.START_TO_START,r)<0&&t.setStartBefore(s),t.compareBoundaryPoints(Range.END_TO_END,r)>0&&t.setEndAfter(s),!t.toString().trim())continue;var f=t.cloneContents(),g=t.commonAncestorContainer;o.x('ancestor-or-self::*[self::s or contains(@class,"removed-spoiler")]',g)&&(o.prepend(f,o.tn("[spoiler]")),o.add(f,o.tn("[/spoiler]"))),(h=o.x('ancestor-or-self::pre[contains(@class,"prettyprint")]',g))&&(o.prepend(f,o.tn("[code]")),o.add(f,o.tn("[/code]")));for(u of L(h?"br":".prettyprint br",f))o.replace(u,o.tn(`
`));for(u of L("br",f))u!==f.lastChild&&o.replace(u,o.tn(`
>`));c.SITE.insertTags?.(f);for(u of L(".linkify[data-original]",f))o.replace(u,o.tn(u.dataset.original));for(u of L(".embedder",f))u.previousSibling?.nodeValue===" "&&o.rm(u.previousSibling),o.rm(u);a+=`>${f.textContent.trim()}
`}catch{}d.openPost();const{com:b,thread:I}=d.nodes;b.value||(I.value=F.threadFromNode(this));const T=d.selected.isOnlyQuotes(),R=b.selectionStart;return b.value=b.value.slice(0,R)+a+b.value.slice(b.selectionEnd),t=R+a.length,b.setSelectionRange(t,t),b.focus(),T&&(d.selected.quotedText=b.value),d.selected.save(b),d.selected.save(I)},characterCount(){const e=d.nodes.charCount,t=d.nodes.com.value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length;e.textContent=t.toString(),e.hidden=t<d.max_comment/2;const i=d.nodes.splitPost;return i.hidden=t<d.max_comment,(t>d.max_comment?o.addClass:o.rmClass)(e,"warning")},splitPost(){if(d.selected.isLocked||d.nodes.com.value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length<d.max_comment)return;const t=d.nodes.com.value;let i=0,n=0;const s=d.posts.indexOf(d.selected);d.selected.setComment("");for(const f of t.split(`
`)){const g=f.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length+1;if(g+i>d.max_comment)new d.post(!0).setComment(f),i=g,n++;else{const b=[d.selected.com,f].filter(I=>I!==null).join(`
`);d.selected.setComment(b),i+=g}}const r=d.posts.length-n,a=d.posts.splice(r,n);d.posts.splice(s+1,0,...a);const h=[...d.nodes.dumpList.children],u=h.splice(r,n);h.splice(s+1,0,...u);for(const f of h)d.nodes.dumpList.appendChild(f);d.nodes.el.classList.add("dump")},getFile(){return o.event("QRFile",d.selected?.file)},drawFile(e){const t=d.selected?.file;if(!t||!/^(image|video)\//.test(t.type))return;const i=/^video\//.test(t),n=o.el(i?"video":"img");return o.on(n,"error",()=>d.openError()),o.on(n,i?"loadeddata":"load",function(){return e.target.getContext("2d").drawImage(n,0,0),URL.revokeObjectURL(n.src),o.event("QRImageDrawn",null,e.target)}),n.src=URL.createObjectURL(t)},openError(){const e=o.el("div");return o.extend(e,{innerHTML:'Could not open file. [<a href="'+oe(z.upstreamFaq)+'#error-reading-metadata" target="_blank">More info</a>]'}),d.error(e)},setFile(e){const{file:t,name:i,source:n}=e.detail;return i!=null&&(t.name=i),n!=null&&(t.source=n),d.open(),d.handleFiles([t])},drag(e){const t=e.type==="dragstart"?o.off:o.on;return t(m,"dragover",d.dragOver),t(m,"drop",d.dropFile)},dragOver(e){return e.preventDefault(),e.dataTransfer.dropEffect="copy"},dropFile(e){if(e.dataTransfer.files.length)return e.preventDefault(),d.open(),d.handleFiles(e.dataTransfer.files)},paste(e){if(!e.clipboardData.items)return;let t=null,i=-1;for(var n of e.clipboardData.items){var s;if(n.kind==="file"&&(s=n.getAsFile())){var r=2*+(s.size<=d.max_size)+ +(s.type==="image/png");r>i&&(t=s,i=r)}}if(t){const{type:a}=t,h=new Blob([t],{type:a});h.name=`${l.pastedname}.${o.getOwn(d.extensionFromType,a)||"jpg"}`,d.open(),d.handleFiles([h])}},pasteFF(){const{pasteArea:e}=d.nodes;if(!e.childNodes.length)return;const t=L("img",e);o.rmAll(e);for(var i of t){var n,{src:s}=i;if(n=s.match(/data:(image\/(\w+));base64,(.+)/)){var r=atob(n[3]),a=new Uint8Array(r.length);for(let u=0;u<r.length;u++)a[u]=r.charCodeAt(u);var h=new Blob([a],{type:n[1]});h.name=`${l.pastedname}.${n[2]}`,d.handleFiles([h])}else/^https?:\/\//.test(s)&&d.handleUrl(s)}},handleUrl(e){d.open();const{selected:t}=d;t.preventAutoPost(),xe.permission(function(){const i=prompt("Enter a URL:",e);i&&(d.nodes.fileButton.focus(),xe.file(i,function(n){n&&!/^text\//.test(n.type)?(t.setFile(n),o.addClass(d.nodes.el,"dump")):d.error("Can't load file.")}))})},handleFiles(e){if(this!==d&&(e=[...this.files],this.value=null),!!e.length){d.cleanNotifications();for(var t of e)d.handleFile(t,e.length);if(o.addClass(d.nodes.el,"dump"),m.activeElement===d.nodes.fileButton&&o.hasClass(d.nodes.fileSubmit,"has-file"))return d.nodes.filename.focus()}},handleFile(e,t){let i;const n=/^text\//.test(e.type);return t===1?i=d.selected:(i=d.posts[d.posts.length-1],(n?i.com||i.pasting:i.file)&&(i=new d.post)),i[n?"pasteText":"setFile"](e)},openFileInput(){if(!d.nodes.fileButton.disabled)return d.nodes.fileInput.click(),d.nodes.fileButton.focus()},generatePostableThreadsList(){if(!d.nodes)return;const e=d.nodes.thread,t=[e.firstElementChild];for(var i of c.BOARD.threads.keys)t.push(o.el("option",{value:i,textContent:`Thread ${i}`}));const n=e.value;if(o.rmAll(e),o.add(e,t),e.value=n,e.value!==n)return e.value=c.VIEW==="thread"?c.THREADID:"new",(c.VIEW==="thread"?o.addClass:o.rmClass)(d.nodes.el,"reply-to-thread")},dialog(){let e,t,i,n;d.nodes=i={el:e=te.dialog("qr",{innerHTML:Sn})};const s=(b,I)=>i[b]=o(I,e);s("move",".move"),s("autohide","#autohide"),s("close",".close"),s("thread","select"),s("form","form"),s("sjisToggle","#sjis-toggle"),s("texButton","#tex-preview-button"),s("name","[data-name=name]"),s("email","[data-name=email]"),s("sub","[data-name=sub]"),s("com","[data-name=com]"),s("charCount","#char-count"),s("texPreview","#tex-preview"),s("dumpList","#dump-list"),s("addPost","#add-post"),s("oekaki",".oekaki"),s("drawButton","#qr-draw-button"),s("randomizeButton","#qr-randomize"),s("compress","#qr-jpg"),s("view","#qr-view"),s("restoreNameButton","#qr-restore-name"),s("fileSubmit","#file-n-submit"),s("fileButton","#qr-file-button"),s("noFile","#qr-no-file"),s("filename","#qr-filename"),s("spoiler","#qr-file-spoiler"),s("oekakiButton","#qr-oekaki-button"),s("fileRM","#qr-filerm"),s("urlButton","#url-button"),s("pasteArea","#paste-area"),s("customCooldown","#custom-cooldown-button"),s("dumpButton","#dump-button"),s("status","[type=submit]"),s("flashTag","[name=filetag]"),s("fileInput","[type=file]"),s("splitPost","#split-post");const{config:r}=c.BOARD,{classList:a}=d.nodes.el;a.toggle("forced-anon",d.forcedAnon),a.toggle("has-spoiler",d.spoiler),a.toggle("has-sjis",!!r.sjis_tags),a.toggle("has-math",!!r.math_tags),a.toggle("sjis-preview",!!r.sjis_tags&&l.sjisPreview),a.toggle("show-new-thread-option",l["Show New Thread Option in Threads"]),parseInt(l.customCooldown,10)>0&&(o.addClass(d.nodes.fileSubmit,"custom-cooldown"),o.get("customCooldownEnabled",l.customCooldownEnabled,function({customCooldownEnabled:b}){return d.setCustomCooldown(b),o.sync("customCooldownEnabled",d.setCustomCooldown)})),d.flagsInput(),o.on(i.autohide,"change",d.toggleHide),o.on(i.close,"click",d.close),o.on(i.status,"click",d.submit),o.on(i.form,"submit",d.submit),o.on(i.sjisToggle,"click",d.toggleSJIS),o.on(i.texButton,"mousedown",d.texPreviewShow),o.on(i.texButton,"mouseup",d.texPreviewHide),o.on(i.addPost,"click",()=>new d.post(!0)),o.on(i.drawButton,"click",d.oekaki.draw),o.on(i.fileButton,"click",d.openFileInput),o.on(i.noFile,"click",d.openFileInput),o.on(i.randomizeButton,"click",()=>{d.selected.randomizeName()}),o.on(i.compress,"click",async()=>{d.handleFiles([await d.convert(d.selected.file)])}),o.on(i.view,"click",d.preview),o.on(i.restoreNameButton,"click",()=>{d.selected.restoreName()}),o.on(i.filename,"focus",function(){return o.addClass(this.parentNode,"focus")}),o.on(i.filename,"blur",function(){return o.rmClass(this.parentNode,"focus")}),o.on(i.spoiler,"change",()=>d.selected.nodes.spoiler.click()),o.on(i.oekakiButton,"click",d.oekaki.button),o.on(i.fileRM,"click",()=>d.selected.rmFile()),o.on(i.urlButton,"click",()=>d.handleUrl("")),o.on(i.customCooldown,"click",d.toggleCustomCooldown),o.on(i.dumpButton,"click",()=>i.el.classList.toggle("dump")),o.on(i.fileInput,"change",d.handleFiles),o.on(i.splitPost,"click",d.splitPost),window.addEventListener("focus",d.focus,!0),window.addEventListener("blur",d.focus,!0),o.on(m,"click",d.focus),o.engine==="gecko"&&!window.DataTransferItemList&&(i.pasteArea.hidden=!1),new MutationObserver(d.pasteFF).observe(i.pasteArea,{childList:!0});const h=["thread","name","email","sub","com","filename","flag"];let u=0;const f=function(){d.selected.save(this)};for(;n=h[u++];){var g;(g=i[n])&&(t=g.nodeName==="SELECT"?"change":"input",o.on(i[n],t,f))}l["Remember QR Size"]&&(o.get("QR Size","",b=>i.com.style.cssText=b["QR Size"]),o.on(i.com,"mouseup",function(b){b.button===0&&o.set("QR Size",this.style.cssText)})),d.generatePostableThreadsList(),d.persona.load(),new d.post(!0),d.status(),d.cooldown.setup(),d.captcha.init(),o.add(m.body,e),d.captcha.setup(),d.oekaki.setup(),o.event("QRDialogCreation",null,e),q.set(i.oekakiButton,"pencil"),q.set(i.urlButton,"link"),q.set(i.pasteArea,"clipboard"),q.set(i.customCooldown,"clock"),q.set(i.randomizeButton,"shuffle"),q.set(i.compress,"shrink"),q.set(i.view,"eye"),q.set(i.restoreNameButton,"undo"),q.set(i.splitPost,"scissors"),q.set(i.fileRM,"xmark"),q.set(i.close,"xmark"),q.set(i.dumpButton,"squarePlus"),q.set(i.addPost,"plus")},flags(){const e=o.el("select",{name:"flag",className:"flagSelector"}),t=(s,r)=>o.add(e,o.el("option",{value:s,textContent:r}));t("0",c.BOARD.config.country_flags?"Geographic Location":"None");for(var i in c.BOARD.config.board_flags){var n=c.BOARD.config.board_flags[i];t(i,n)}return e},flagsInput(){const{nodes:e}=d;if(e&&(e.flag&&(o.rm(e.flag),delete e.flag),c.BOARD.config.board_flags)){const t=d.flags();return t.dataset.name="flag",t.dataset.default="0",e.flag=t,o.add(e.form,t)}},submit(e){let t,i,n;e?.preventDefault();const s=e?.shiftKey;if(d.req){d.abort();return}if(o.forceSync("cooldowns"),d.cooldown.seconds)if(s)d.cooldown.clear();else{d.cooldown.auto=!d.cooldown.auto,d.status();return}const r=d.posts[0];delete r.quotedText,r.forceSave();let a=r.thread;const h=c.BOARD.threads.get(a);if(c.BOARD.ID==="f"&&a==="new"&&(n=d.nodes.flashTag.value),a==="new"?(a=null,c.BOARD.config.require_subject&&!r.sub?i="New threads require a subject.":!c.BOARD.config.text_only&&!r.file&&(i="No file selected.")):c.BOARD.threads.get(a).isClosed?i="You can't reply to this thread anymore.":!r.com&&!r.file?i="No comment or file.":r.file&&h.fileLimit&&(i="Max limit of image replies has been reached."),c.BOARD.ID==="r9k"&&!r.com?.match(/[a-z-]/i)&&(i||(i="Original comment required.")),d.captcha.isEnabled&&!(d.captcha===le.v2&&/\b_ct=/.test(m.cookie)&&a)&&!(i&&!s)&&(t=d.captcha.getOne(!!a),d.captcha===le.v2&&(t||(t=le.cache.request(!!a))),t||(i="No valid captcha.",d.captcha.setup(!d.cooldown.auto||m.activeElement===d.nodes.status))),d.cleanNotifications(),i&&!s){d.cooldown.auto=!1,d.status(),d.error(i);return}d.cooldown.auto=d.posts.length>1,r.lock();const u={MAX_FILE_SIZE:d.max_size,mode:"regist",pwd:d.persona.getPassword(),resto:a,name:d.forcedAnon?void 0:r.name,email:r.email,sub:!d.forcedAnon&&!a?r.sub:void 0,com:r.com,upfile:r.file,filetag:n,spoiler:r.spoiler,flag:r.flag},f={responseType:"document",withCredentials:!0,onloadend:d.response,form:o.formData(u)};l["Show Upload Progress"]&&(f.onprogress=function(b){if(this===d.req?.upload)return b.loaded<b.total?d.req.progress=`${Math.round(b.loaded/b.total*100)}%`:(d.req.isUploadFinished=!0,d.req.progress="..."),d.status()});let g=function(b){if(b!=null)if(d.currentCaptcha=b,d.captcha===le.v2)b.challenge!=null?(f.form.append("recaptcha_challenge_field",b.challenge),f.form.append("recaptcha_response_field",b.response)):f.form.append("g-recaptcha-response",b.response);else for(var I in b){var T=b[I];f.form.append(I,T)}d.req=o.ajax(`https://sys.${location.hostname.split(".")[1]}.org/${c.BOARD}/post`,f),d.req.progress="..."};typeof t=="function"?(d.req={progress:"...",abort(){d.captcha===le.v2&&le.cache.abort(),g=null}},t(function(b){if(d.captcha===le.v2&&le.cache.haveCookie()){if(g?.(),b)return le.cache.save(b)}else b?g?.(b):(delete d.req,r.unlock(),d.cooldown.auto=!!le.cache.getCount(),d.status())})):g(t),d.status()},response(){let e,t;if(this!==d.req)return;delete d.req;const i=d.posts[0];if(i.unlock(),t=this.response?.getElementById("errmsg")){const I=o("a",t);I&&(I.target="_blank")}else(e=!this.response||this.response.title!=="Post successful!")?(t=d.connectionError(),d.captcha===le.v2&&d.currentCaptcha&&le.cache.save(d.currentCaptcha)):this.status!==200&&(t=`Error ${this.statusText} (${this.status})`);if(e||d.captcha.setUsed?.(),delete d.currentCaptcha,t){let I;if(d.errorCount=(d.errorCount||0)+1,/captcha|verification/i.test(t.textContent))/mistyped/i.test(t.textContent)?t="You mistyped the CAPTCHA, or the CAPTCHA malfunctioned.":/expired/i.test(t.textContent)&&(t="This CAPTCHA is no longer valid because it has expired."),d.cooldown.auto=!1;else if(e)d.errorCount>=5?d.cooldown.auto=!1:(d.cooldown.auto=d.captcha.isEnabled||e,d.cooldown.addDelay(i,2));else if(t.textContent&&(I=t.textContent.match(/\d+\s+(?:minute|second)/gi))&&!/duplicate|hour/i.test(t.textContent)){d.cooldown.auto=!/have\s+been\s+muted/i.test(t.textContent);let T=0;for(var n of I)T+=(/minute/i.test(n)?60:1)*+n.match(/\d+/)[0];/muted/i.test(t.textContent)?d.cooldown.addMute(T):d.cooldown.addDelay(i,T)}else d.cooldown.auto=!1;d.captcha.setup(d.cooldown.auto&&[d.nodes.status,m.body].includes(m.activeElement)),d.status(),d.error(t);return}delete d.errorCount;const s=o("h1",this.response);let[r,a,h]=s.nextSibling.textContent.match(/thread:(\d+),no:(\d+)/);h=+h,a=+a||h;const u=a!==h;o.event("QRPostSuccessful",{boardID:c.BOARD.ID,threadID:a,postID:h}),o.event("QRPostSuccessful_",{boardID:c.BOARD.ID,threadID:a,postID:h});const f=d.posts.length-1;d.cooldown.auto=f&&u;const g=!function(){for(var I of d.posts.slice(1))if(I.thread===i.thread)return!0}();f?(i.rm(),d.captcha.setup(m.activeElement===d.nodes.status)):l["Persistent QR"]?(i.rm(),l["Auto Hide QR"]?d.hide():d.blur()):d.close(),d.cleanNotifications(),l["Posting Success Notifications"]&&d.notifications.push(new G("success",s.textContent,5)),d.cooldown.add(a,h);const b=a===h?`${window.location.origin}/${c.BOARD}/thread/${a}`:a!==c.THREADID&&g&&l["Open Post in New Tab"]?`${window.location.origin}/${c.BOARD}/thread/${a}#p${h}`:void 0;if(b){const I=l["Open Post in New Tab"]||f?()=>o.open(b):()=>location.href=b;a===h?d.waitForThread(b,I):I()}d.status()},waitForThread(e,t){let i=0;var n=function(){o.ajax(e,{onloadend(){return i++,i>=6||this.status===200?t():setTimeout(n,i*ie)},responseType:"text",type:"HEAD"})};n()},abort(){let e;(e=d.req)&&!d.req.isUploadFinished&&(delete d.req,e.abort(),d.captcha===le.v2&&d.currentCaptcha&&le.cache.save(d.currentCaptcha),delete d.currentCaptcha,d.posts[0].unlock(),d.cooldown.auto=!1,d.notifications.push(new G("info","QR upload aborted.",5))),d.status()},getMaxSize(e){let t=d.max_size;return e.type.startsWith("video/")&&(t=Math.min(t,d.max_size_video)),t},async convert(e,t="jpeg",i){const n=i?.maxSize||this.getMaxSize(e),s=i?.img||await createImageBitmap(e),r=i?.width||s.width,a=i?.height||s.height,h=e.name.replace(/\.[a-z]+$/i,"."+t),u="image/"+t;let f,g;window.OffscreenCanvas&&!l["Avoid OffscreenCanvas"]?(f=new OffscreenCanvas(r,a),g=(T,R)=>f.convertToBlob({type:T,quality:R})):(f=o.el("canvas",{width:r,height:a}),g=(T,R)=>new Promise(B=>{f.toBlob(B,T,R)}));let b,I=.9;f.getContext("2d").drawImage(s,0,0,r,a);do b=new File([await g(u,I)],h,{type:u}),I-=.1;while(t==="jpeg"&&b.size>n&&I>=.1);return b.size>=e.size&&b.type===e.type?(new G("warning","New jpeg file isn't smaller than the old one, so it won't be used.",3),e):b},previewUrl:void 0,preview(){if(d.selected.file){if(d.nodes.preview=o.el("div",{id:"overlay",className:"media-preview"}),o.add(m.body,d.nodes.preview),d.previewUrl=URL.createObjectURL(d.selected.file),d.selected.file.type.startsWith("video/")){const e=o.el("video",{controls:!0,src:d.previewUrl,autoplay:!0});o.add(d.nodes.preview,e),e.focus()}else o.add(d.nodes.preview,o.el("img",{src:d.previewUrl}));d.nodes.preview.addEventListener("click",e=>{e.target.tagName!=="VIDEO"&&d.closePreview()})}},closePreview(){d.nodes.preview.remove(),URL.revokeObjectURL(d.previewUrl)},cooldown:{seconds:0,delays:{deletion:60},maxDelay:0,isSetup:!1,auto:!1,data:{},init(){l["Quick Reply"]&&(this.data=l.cooldowns,this.changes=S(),o.sync("cooldowns",this.sync))},setup(){o.extend(d.cooldown.delays,c.BOARD.cooldowns()),d.cooldown.maxDelay=0;for(var e in d.cooldown.delays){var t=d.cooldown.delays[e];["thread","thread_global"].includes(e)||(d.cooldown.maxDelay=Math.max(d.cooldown.maxDelay,t))}d.cooldown.isSetup=!0,d.cooldown.start()},start(){const{data:e}=d.cooldown;!l.Cooldown||!d.cooldown.isSetup||d.cooldown.isCounting||Object.keys(e[c.BOARD.ID]||{}).length+Object.keys(e.global||{}).length<=0||(d.cooldown.isCounting=!0,d.cooldown.count())},sync(e){d.cooldown.data=e||S(),d.cooldown.start()},add(e,t){if(!l.Cooldown)return;const i=Date.now(),n=c.BOARD.ID;d.cooldown.set(n,i,{threadID:e,postID:t}),e===t&&d.cooldown.set("global",i,{boardID:n,threadID:e,postID:t}),d.cooldown.save(),d.cooldown.start()},addDelay(e,t){if(!l.Cooldown)return;const i=d.cooldown.categorize(e);i.delay=t,d.cooldown.set(c.BOARD.ID,Date.now(),i),d.cooldown.save(),d.cooldown.start()},addMute(e){l.Cooldown&&(d.cooldown.set(c.BOARD.ID,Date.now(),{type:"mute",delay:e}),d.cooldown.save(),d.cooldown.start())},delete(e){let t;if(!d.cooldown.data)return;const i=d.cooldown.data[e.board.ID]||(d.cooldown.data[e.board.ID]=S());for(var n in i)t=i[n],t.delay==null&&t.threadID===e.thread.ID&&t.postID===e.ID&&d.cooldown.set(e.board.ID,n,null);d.cooldown.save()},secondsDeletion(e){if(!d.cooldown.data||!l.Cooldown)return 0;const t=d.cooldown.data[e.board.ID]||S();for(var i in t){var n=t[i];if(n.delay==null&&n.threadID===e.thread.ID&&n.postID===e.ID){var s=d.cooldown.delays.deletion-Math.floor((Date.now()-i)/ie);return Math.max(s,0)}}return 0},categorize(e){return e.thread==="new"?{type:"thread"}:{type:e.file?"image":"reply",threadID:+e.thread}},mergeChange(e,t,i,n){n?(e[t]||(e[t]=S()))[i]=n:t in e&&(delete e[t][i],Object.keys(e[t]).length===0&&delete e[t])},set(e,t,i){d.cooldown.mergeChange(d.cooldown.data,e,t,i),(d.cooldown.changes[e]||(d.cooldown.changes[e]=S()))[t]=i},save(){const{changes:e}=d.cooldown;Object.keys(e).length&&o.get("cooldowns",S(),function({cooldowns:t}){for(var i in d.cooldown.changes){for(var n in d.cooldown.changes[i]){var s=d.cooldown.changes[i][n];d.cooldown.mergeChange(t,i,n,s)}d.cooldown.data=t}o.set("cooldowns",t,()=>d.cooldown.changes=S())})},clear(){d.cooldown.data=S(),d.cooldown.changes=S(),d.cooldown.auto=!1,d.cooldown.update(),o.queueTask(o.delete,"cooldowns")},update(){let e;if(!d.cooldown.isCounting)return;let t=!1,i=0;const n=Date.now(),{type:s,threadID:r}=d.cooldown.categorize(d.posts[0]);let a=0;if(l.Cooldown)for(var h of[c.BOARD.ID,"global"]){var u=d.cooldown.data[h]||(d.cooldown.data[h]=S());for(var f in u){e=u[f],f=+f;var g=Math.floor((n-f)/ie);if(g<0){d.cooldown.set(h,f,null),t=!0;continue}if(e.delay!=null){e.delay<=g?(d.cooldown.set(h,f,null),t=!0):(e.type===s&&e.threadID===r||e.type==="mute")&&(a=Math.max(a,e.delay-g));continue}var b=e.threadID!==e.postID?d.cooldown.maxDelay:d.cooldown.delays[h==="global"?"thread_global":"thread"];if(d.cooldown.customCooldown&&(b=Math.max(b,parseInt(l.customCooldown,10))),b<=g){d.cooldown.set(h,f,null),t=!0;continue}if(s==="thread"==(e.threadID===e.postID)&&e.boardID!==c.BOARD.ID){var I=h==="global"?"_global":"";a=Math.max(a,d.cooldown.delays[s+I]-g),d.cooldown.customCooldown&&(a=Math.max(a,parseInt(l.customCooldown,10)-g))}}i+=Object.keys(u).length}t&&d.cooldown.save,i?(clearTimeout(d.cooldown.timeout),d.cooldown.timeout=setTimeout(d.cooldown.count,ie)):delete d.cooldown.isCounting;const T=a!==d.cooldown.seconds;d.cooldown.seconds=a,T&&d.status()},count(){d.cooldown.update(),d.cooldown.seconds===0&&d.cooldown.auto&&!d.req&&d.submit()}},oekaki:{menu:{init(){if(!["index","thread"].includes(c.VIEW)||!l.Menu||!l["Edit Link"]||!l["Quick Reply"])return;const e=o.el("a",{className:"edit-link",href:"javascript:;",textContent:"Edit image"});o.on(e,"click",this.editFile),he.menu.addEntry({el:e,order:90,open(t){d.oekaki.menu.post=t;const{file:i}=t;return d.postingIsEnabled&&!!i&&(i.isImage||i.isVideo)}})},editFile(){const{post:e}=d.oekaki.menu;d.quote.call(e.nodes.post);const{isVideo:t}=e.file,i=e.file.fullImage?.currentTime||0;return xe.file(e.file.url,function(n){if(!n)d.error("Can't load file.");else if(t){const s=o.el("video");o.on(s,"loadedmetadata",function(){o.on(s,"seeked",function(){const r=o.el("canvas",{width:s.videoWidth,height:s.videoHeight});r.getContext("2d").drawImage(s,0,0),r.toBlob(function(a){a.name=e.file.name.replace(/\.\w+$/,"")+".png",d.handleFiles([a]),d.oekaki.edit()})}),s.currentTime=i}),o.on(s,"error",()=>d.openError()),s.src=URL.createObjectURL(n)}else n.name=e.file.name,d.handleFiles([n]),d.oekaki.edit()})}},setup(){o.global("setupQR")},load(e){if(o('script[src^="//s.4cdn.org/js/tegaki"]',m.head))e();else{const t=o.el("link",{rel:"stylesheet",href:`//s.4cdn.org/css/tegaki.${Date.now()}.css`}),i=o.el("script",{src:`//s.4cdn.org/js/tegaki.min.${Date.now()}.js`});let n=0;const s=function(){++n===2&&e()};o.on(t,"load",s),o.on(i,"load",s),o.add(m.head,[t,i])}},draw(){return o.global("qrTegakiDraw")},button(){d.selected.file?d.oekaki.edit():d.oekaki.toggle()},edit(){d.oekaki.load(()=>o.global("qrTegakiLoad"))},toggle(){d.oekaki.load(()=>d.nodes.oekaki.hidden=!d.nodes.oekaki.hidden)}},persona:{always:{},types:{name:[],email:[],sub:[]},init(){if(!(!l["Quick Reply"]&&(!l.Menu||!l["Delete Link"])))for(var e of l["QR.personas"].split(`
`))d.persona.parseItem(e.trim())},parseItem(e){if(e[0]==="#")return;const t=e.match(/(name|options|email|subject|password):"(.*)"/i);if(!t)return;let i,[n,s,r]=t;e=e.replace(n,"");const a=e.match(/boards:([^;]+)/i)?.[1].toLowerCase()||"global";if(!(a!=="global"&&(i=c.BOARD.ID,!a.split(",").includes(i)))){if(s==="password"){d.persona.pwd=r;return}s==="options"&&(s="email"),s==="subject"&&(s="sub"),/always/i.test(e)&&(d.persona.always[s]=r),d.persona.types[s].includes(r)||d.persona.types[s].push(r)}},load(){for(var e in d.persona.types){var t=d.persona.types[e],i=o(`#list-${e}`,d.nodes.el);for(var n of t)n&&o.add(i,o.el("option",{textContent:n}))}},getPassword(){let e;return d.persona.pwd!=null?d.persona.pwd:(e=m.cookie.match(/4chan_pass=([^;]+)/))?decodeURIComponent(e[1]):""},get(e){o.get("QR.persona",{},({"QR.persona":t})=>e(t))},set(e){o.get("QR.persona",{},function({"QR.persona":t}){t={name:e.name,flag:e.flag},o.set("QR.persona",t)})}}};class Es{constructor(t){this.select=this.select.bind(this);const i=o.el("a",{className:"qr-preview",draggable:!0,href:"javascript:;"});o.extend(i,{innerHTML:`<a href="javascript:;" class="remove" title="Remove">${q.get("xmark")}</a><label class="qr-preview-spoiler"><input type="checkbox"> Spoiler</label><span id="qr-preview-comment"></span><br /><span id="qr-preview-name"></span>`});const[n,s,r,,a]=i.childNodes;this.nodes={el:i,rm:n,spoiler:s.firstChild,span:r,spanFileName:a},o.on(i,"click",this.select),o.on(this.nodes.rm,"click",g=>{g.stopPropagation(),this.rm()}),o.on(this.nodes.spoiler,"change",g=>(this.spoiler=g.target.checked,this===d.selected&&(d.nodes.spoiler.checked=this.spoiler),this.preventAutoPost()));for(var h of L("label",i))o.on(h,"click",g=>g.stopPropagation());o.add(d.nodes.dumpList,i);for(var u of["dragStart","dragEnter","dragLeave","dragOver","dragEnd","drop"])o.on(i,u.toLowerCase(),this[u]);this.thread=c.VIEW==="thread"?c.THREADID:"new";const f=d.posts[d.posts.length-1];d.posts.push(this),this.nodes.spoiler.checked=this.spoiler=f&&l["Remember Spoiler"]?f.spoiler:!1,d.persona.get(g=>{this.name="name"in d.persona.always?d.persona.always.name:f?f.name:g.name,this.email="email"in d.persona.always?d.persona.always.email:"",this.sub="sub"in d.persona.always?d.persona.always.sub:"",d.nodes.flag&&(this.flag=(()=>{if(f)return f.flag;if(g.flag&&g.flag in c.BOARD.config.board_flags)return g.flag})()),d.selected===this&&this.load()}),t&&this.select(),this.unlock(),d.captcha.moreNeeded()}rm(){this.delete();const t=d.posts.indexOf(this);d.posts.length===1?(new d.post(!0),o.rmClass(d.nodes.el,"dump")):this===d.selected&&(d.posts[t-1]||d.posts[t+1]).select(),d.posts.splice(t,1),d.status(),d.captcha.updateThread?.()}delete(){o.rm(this.nodes.el),URL.revokeObjectURL(this.URL),this.dismissErrors()}lock(t=!0){if(this.isLocked=t,this===d.selected){for(var i of["thread","name","email","sub","com","fileButton","filename","spoiler","flag"]){var n;(n=d.nodes[i])&&(n.disabled=t)}this.nodes.rm.style.visibility=t?"hidden":"",this.nodes.spoiler.disabled=t,this.nodes.el.draggable=!t}}unlock(){this.lock(!1)}select(){d.selected&&(d.selected.nodes.el.removeAttribute("id"),d.selected.forceSave()),d.selected=this,this.lock(this.isLocked),this.nodes.el.id="selected";const t=this.nodes.el.getBoundingClientRect(),i=this.nodes.el.parentNode.getBoundingClientRect();this.nodes.el.parentNode.scrollLeft+=t.left+t.width/2-i.left-i.width/2,this.load()}load(){for(var t of["thread","name","email","sub","com","filename","flag"]){var i;(i=d.nodes[t])&&(i.value=this[t]||i.dataset.default||"")}(this.thread!=="new"?o.addClass:o.rmClass)(d.nodes.el,"reply-to-thread"),this.showFileData(),d.characterCount()}save(t,i){if(t.type==="checkbox"){this.spoiler=t.checked;return}const{name:n}=t.dataset;if(!["thread","name","email","sub","com","filename","flag"].includes(n))return;const s=this[n]||t.dataset.default||null;switch(this[n]=t.value||t.dataset.default||null,n){case"thread":(this.thread!=="new"?o.addClass:o.rmClass)(d.nodes.el,"reply-to-thread"),d.status(),d.captcha.updateThread?.();break;case"com":this.updateComment();break;case"filename":if(!this.file)return;this.saveFilename(),this.updateFilename();break;case"name":case"flag":this[n]!==s&&d.persona.set(this);break}i||this.preventAutoPost()}forceSave(){if(this===d.selected)for(var t of["thread","name","email","sub","com","filename","spoiler","flag"]){var i;(i=d.nodes[t])&&this.save(i,!0)}}preventAutoPost(){d.cooldown.auto&&this===d.posts[0]&&(d.cooldown.update(),d.cooldown.seconds<=5&&(d.cooldown.auto=!1))}setComment(t){return this.com=t||null,this===d.selected&&(d.nodes.com.value=this.com),this.updateComment()}updateComment(){this===d.selected&&d.characterCount(),this.nodes.span.textContent=this.com,d.captcha.moreNeeded()}isOnlyQuotes(){return(this.com||"").trim()===(this.quotedText||"").trim()}static rmErrored(t){t.stopPropagation();for(let r=d.posts.length-1;r>=0;r--){var i,n=d.posts[r];if(i=n.errors){for(var s of i)if(w.contains(s)){n.rm();break}}}}error(t,i,n){const s=o.el("div",{className:t});o.extend(s,{innerHTML:i+(n?` [<a href="${oe(n)}" target="_blank">More info</a>]`:"")+'<br>[<a href="javascript:;">delete post</a>] [<a href="javascript:;">delete all</a>]'}),(this.errors||(this.errors=[])).push(s);const[r,a]=L("a",s);o.on(s,"click",()=>{d.posts.includes(this)&&this.select()}),o.on(r,"click",h=>{h.stopPropagation(),d.posts.includes(this)&&this.rm()}),o.on(a,"click",d.post.rmErrored),d.error(s,!0)}fileError(t,i){this.error("file-error",`${this.filename}: ${t}`,i)}dismissErrors(t=()=>!0){if(this.errors)for(var i of this.errors)w.contains(i)&&t(i)&&i.parentNode.previousElementSibling.click()}async validateFile(t){if(location.hostname.endsWith("4chan.org")&&!d.mimeTypes.includes(t.type))if(t.type.startsWith("image/")){const n=`The ${t.type.slice(6)} image was converted to png.`;t=await d.convert(t,"png"),new G("info",n,3)}else throw new Error("Unsupported file type.");const i=d.getMaxSize(t);if(t.type.startsWith("image/")){let n=await createImageBitmap(t);const{width:s,height:r}=n;let a=s,h=r;if(a>d.max_width&&(h=Math.round(h*(d.max_width/a)),a=d.max_width),h>d.max_height&&(a=Math.round(a*(d.max_height/h)),h=d.max_height),(a!==s||h!==r)&&(t=await d.convert(t,t.type==="image/jpeg"?"jpeg":"png",{width:a,height:h,img:n}),n=void 0,new G("warning",`Image was too large got shrunk from ${s} * ${r} to ${a} * ${h}.It might have lost animation.`)),t.size>i){const u=t.size;t=await d.convert(t,"jpeg",{maxSize:i,img:n}),new G("warning",`Image was too large (${o.bytesToString(u)}) and got converted to jpg (${o.bytesToString(t.size)}). It might have lost transparency or animation.`)}}else if(t.size>i)throw new Error(`File too large (file: ${o.bytesToString(t.size)}, max: ${o.bytesToString(i)}).`);return t}async setFile(t){try{this.file=t,this.filename=t.name,this.originalName=t.name,this.file=await this.validateFile(t),this.originalName=t.name,l["Randomize Filename"]&&c.BOARD.ID!=="f"&&!this.file.name.toLowerCase().includes("[sound=")?this.randomizeName(!1):this.filename=this.file.name,this.filesize=o.bytesToString(this.file.size),o.addClass(this.nodes.el,"has-file","has-"+this.file.type.split("/")[0]),d.captcha.moreNeeded(),URL.revokeObjectURL(this.URL),this.saveFilename(),this===d.selected?this.showFileData():this.updateFilename(),this.rmMetadata(),this.nodes.el.dataset.type=this.file.type,this.nodes.el.style.backgroundImage="",/^(image|video)\//.test(this.file.type)?(this.nodes.spanFileName.textContent="",this.readFile()):this.nodes.spanFileName.textContent=this.file.name.match(/\.([^\.]+)$/)[1]}catch(i){console.error(i),this.fileError(i?.message||i||"unknown error when setting a file")}this.preventAutoPost()}randomizeName(t=!0){this.filename=`${Date.now()*1e3-Math.floor(Math.random()*365*Ge*1e3)}`;const i=this.file.name.match(d.validExtension);i&&(this.filename+=i[0]),t&&(d.nodes.filename.value=this.filename)}restoreName(){d.nodes.filename.value=this.filename=this.originalName}readFile(){const t=/^video\//.test(this.file.type),i=o.el(t?"video":"img");if(t&&!i.canPlayType(this.file.type))return;const n=t?"loadeddata":"load";var s=()=>{o.off(i,n,s),o.off(i,"error",r),this.checkDimensions(i),this.setThumbnail(i),o.event("QRMetadata",null,this.nodes.el)},r=()=>{o.off(i,n,s),o.off(i,"error",r),this.fileError(`Corrupt ${t?"video":"image"} or error reading metadata.`,z.upstreamFaq+"#error-reading-metadata"),URL.revokeObjectURL(i.src),this.nodes.el.removeAttribute("data-height"),o.event("QRMetadata",null,this.nodes.el)};this.nodes.el.dataset.height="loading",o.on(i,n,s),o.on(i,"error",r),i.src=URL.createObjectURL(this.file)}checkDimensions(t){let i,n;if(t.tagName==="IMG")({height:i,width:n}=t),this.nodes.el.dataset.height=i,this.nodes.el.dataset.width=n,(i>d.max_height||n>d.max_width)&&this.fileError(`Image too large (image: ${i}x${n}px, max: ${d.max_height}x${d.max_width}px)`),(i<d.min_height||n<d.min_width)&&this.fileError(`Image too small (image: ${i}x${n}px, min: ${d.min_height}x${d.min_width}px)`);else{const{videoHeight:s,videoWidth:r,duration:a}=t;this.nodes.el.dataset.height=s,this.nodes.el.dataset.width=r,this.nodes.el.dataset.duration=a;const h=Math.min(d.max_height,d.max_height_video),u=Math.min(d.max_width,d.max_width_video);(s>h||r>u)&&this.fileError(`Video too large (video: ${s}x${r}px, max: ${h}x${u}px)`),(s<d.min_height||r<d.min_width)&&this.fileError(`Video too small (video: ${s}x${r}px, min: ${d.min_height}x${d.min_width}px)`),isFinite(a)?a>d.max_duration_video&&this.fileError(`Video too long (video: ${a}s, max: ${d.max_duration_video}s)`):this.fileError("Video lacks duration metadata (try remuxing)"),fe.noAudio(c.BOARD.ID)&&o.hasAudio(t)&&this.fileError("Audio not allowed")}}setThumbnail(t){let i,n;const s=t.tagName==="VIDEO";let r=90*2*window.devicePixelRatio;if(this.file.type==="image/gif"&&(r*=3),s)i=t.videoHeight,n=t.videoWidth;else if({height:i,width:n}=t,i<r||n<r){this.URL=t.src,this.nodes.el.style.backgroundImage=`url(${this.URL})`;return}i<=n?(n=r/i*n,i=r):(i=r/n*i,n=r);const a=o.el("canvas");a.height=i,a.width=n;const h=()=>{a.getContext("2d").drawImage(t,0,0,n,i),URL.revokeObjectURL(t.src),a.toBlob(u=>{this.URL=URL.createObjectURL(u),this.nodes.el.style.backgroundImage=`url(${this.URL})`})};s?(t.currentTime=0,t.addEventListener("seeked",h)):h()}rmFile(){this.isLocked||(delete this.file,delete this.filename,delete this.filesize,this.nodes.el.removeAttribute("title"),d.nodes.filename.removeAttribute("title"),this.rmMetadata(),this.nodes.el.style.backgroundImage="",o.rmClass(this.nodes.el,"has-file","has-image","has-video"),this.showFileData(),URL.revokeObjectURL(this.URL),this.dismissErrors(t=>o.hasClass(t,"file-error")),this.preventAutoPost())}rmMetadata(){for(var t of["type","height","width","duration"])this.nodes.el.removeAttribute(`data-${t}`)}saveFilename(){this.file.newName=(this.filename||"").replace(/[/\\]/g,"-"),d.validExtension.test(this.filename)||(this.file.newName+=`.${o.getOwn(d.extensionFromType,this.file.type)||"jpg"}`)}updateFilename(){const t=`${this.filename} (${this.filesize})`;this.nodes.el.title=t,this===d.selected&&(d.nodes.filename.title=t)}showFileData(){this.file?(this.updateFilename(),d.nodes.filename.value=this.filename,o.addClass(d.nodes.oekaki,"has-file"),o.addClass(d.nodes.fileSubmit,"has-file","has-"+this.file.type.split("/")[0])):(o.rmClass(d.nodes.oekaki,"has-file"),o.rmClass(d.nodes.fileSubmit,"has-file","has-image","has-video")),this.file?.source!=null?d.nodes.fileSubmit.dataset.source=this.file.source:d.nodes.fileSubmit.removeAttribute("data-source"),d.nodes.spoiler.checked=this.spoiler}pasteText(t){this.pasting=!0,this.preventAutoPost();const i=new FileReader;i.onload=n=>{const{result:s}=n.target;this.setComment(this.com?`${this.com}
${s}`:s),delete this.pasting},i.readAsText(t)}dragStart(t){const{left:i,top:n}=this.getBoundingClientRect();t.dataTransfer.setDragImage(this,t.clientX-i,t.clientY-n),o.addClass(this,"drag")}dragEnd(){o.rmClass(this,"drag")}dragEnter(){o.addClass(this,"over")}dragLeave(){o.rmClass(this,"over")}dragOver(t){t.preventDefault(),t.dataTransfer.dropEffect="move"}drop(){if(o.rmClass(this,"over"),!this.draggable)return;const t=o(".drag",this.parentNode),i=a=>{for(let h=0;h<a.parentNode.children.length;h++)if(a.parentNode.children[h]===a)return h;return-1},n=i(t),s=i(this);if(d.posts[n].isLocked||d.posts[s].isLocked)return;(n<s?o.after:o.before)(this,t);const r=d.posts.splice(n,1)[0];d.posts.splice(s,0,r),d.status(),d.captcha.updateThread?.()}}d.post=Es;var xe={binary(e,t,i=S()){e=e.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4channel|4cdn)\.org)\/adv\//,"$1//adv/");const n=function(){return o.ajax(e,{headers:i,responseType:"arraybuffer",onloadend(){return this.status&&this.response?t(new Uint8Array(this.response),this.getAllResponseHeaders()):t(null)}})};if(typeof window.GM_xmlhttpRequest>"u"||window.GM_xmlhttpRequest===null){n();return}const s={method:"GET",anonymous:!0,url:e,headers:i,responseType:"arraybuffer",overrideMimeType:"text/plain; charset=x-user-defined",onload(r){let a;if(r.response instanceof ArrayBuffer)a=new Uint8Array(r.response);else{const h=r.responseText;a=new Uint8Array(h.length);let u=0;for(;u<h.length;)a[u]=h.charCodeAt(u),u++}return t(a,r.responseHeaders)},onerror(){return t(null)},onabort(){return t(null)}};try{return(GM?.xmlHttpRequest||GM_xmlhttpRequest)(s)}catch{return n()}},file(e,t){return xe.binary(e,function(i,n){if(i==null)return t(null);let s=e.match(/([^\/?#]+)\/*(?:$|[?#])/)?.[1];const r=n.match(/Content-Type:\s*(.*)/i)?.[1],a=n.match(/Content-Disposition:\s*(.*)/i)?.[1];let h=r?.match(/[^;]*/)[0]||"application/octet-stream";const u=a?.match(/\bfilename\s*=\s*"((\\"|[^"])+)"/i)?.[1]||r?.match(/\bname\s*=\s*"((\\"|[^"])+)"/i)?.[1];u&&(s=u.replace(/\\"/g,'"')),/^text\/plain;\s*charset=x-user-defined$/i.test(h)&&(h=o.getOwn(d.typeFromExtension,s.match(/[^.]*$/)[0].toLowerCase())||"application/octet-stream"),t(new File([i],s,{type:h}))})},Request:function(){const e=class{static initClass(){this.prototype.status=0,this.prototype.statusText="",this.prototype.response=null,this.prototype.responseHeaderString=null}getResponseHeader(i){if(this.responseHeaders==null&&this.responseHeaderString!=null){this.responseHeaders=S();for(var n of this.responseHeaderString.split(`\r
`)){var s;if((s=n.indexOf(":"))>=0){var r=n.slice(0,s).trim().toLowerCase(),a=n.slice(s+1).trim();this.responseHeaders[r]=a}}}return this.responseHeaders?.[i.toLowerCase()]??null}abort(){}onloadend(){}};return e.initClass(),e}(),ajax(e,t={}){let i,{onloadend:n,timeout:s,responseType:r,headers:a}=t;r==null&&(r="json");const h=new xe.Request;if(h.onloadend=n,window.GM?.xmlHttpRequest==null&&window.GM_xmlhttpRequest==null)return o.ajax(e,t);const u={method:"GET",anonymous:!0,url:e,headers:a,timeout:s,onload(f){try{let g=f.responseText;if(r==="json")try{g=JSON.parse(f.responseText)}catch(b){console.error(b),console.error(f)}o.extend(h,{url:e,headers:a,response:g,status:f.status,statusText:f.statusText,responseHeaderString:f.responseHeaders})}catch{}return h.onloadend()},onerror(){return h.onloadend()},onabort(){return h.onloadend()},ontimeout(){return h.onloadend()}};try{i=(GM?.xmlHttpRequest||GM_xmlhttpRequest)(u)}catch{return o.ajax(e,t)}return i&&typeof i.abort=="function"&&(h.abort=function(){try{return i.abort()}catch{}}),h},ajaxPromise(e,t={}){return new Promise(i=>xe.ajax(e,{...t,onloadend(){i(this)}}))},cache(e,t){return o.cache(e,t,{ajax:xe.ajax})},cachePromise(e){return new Promise(t=>{xe.cache(e,function(){t(this)})})},permission(e,t,i){return e()}},ee={pause(e){if(e.nodeName==="VIDEO")return e.pause(),o.off(e,"volumechange",be.change),e.muted=!0},rewind(e){if(e.nodeName==="VIDEO"){if(e.readyState>=e.HAVE_METADATA)return e.currentTime=0}else if(/\.gif$/.test(e.src))return o.queueTask(()=>e.src=e.src)},pushCache(e){return ee.cache=e,o.on(e,"error",ee.cacheError)},popCache(){const e=ee.cache;return o.off(e,"error",ee.cacheError),delete ee.cache,e},cacheError(){if(ee.cache===this)return delete ee.cache},decodeError(e,t){let i;return e.error?.code!==MediaError.MEDIA_ERR_DECODE?!1:((i=o(".warning",t.thumb.parentNode))||(i=o.el("div",{className:"warning"}),o.after(t.thumb,i)),i.textContent="Error: Corrupt or unplayable video",!0)},isFromArchive(e){return c.SITE.software==="yotsuba"&&!de.test(e.src.split("/")[2])},error(e,t,i,n,s){let r;const a=i.url.split("/");let h=null;if(c.SITE.software==="yotsuba"&&l["404 Redirect"]&&(h=Y.to("file",{boardID:t.board.ID,filename:a[a.length-1]})),(!h||!Y.securityCheck(h))&&(h=null),(t.isDead||i.isDead)&&!ee.isFromArchive(e))return s(h);if(n!=null&&(r=setTimeout(()=>s(h),n)),t.isDead||i.isDead)return;const u=function(){if(!ee.isFromArchive(e))return n!=null&&clearTimeout(r),s(h)},f=c.SITE.urls.threadJSON?.(t);if(f){var g=function(b){let I,T;if(this.status===404){let R;!b&&(R=c.SITE.urls.archivedThreadJSON?.(t))?o.ajax(R,{onloadend(){return g.call(this,!0)}}):t.kill(!t.isClone,i.index)}if(this.status!==200)return u();for(T of this.response.posts)if(T.no===t.ID)break;return T.no!==t.ID?(t.kill(),u()):(I=i.docIndex,c.SITE.Build.parseJSON(T,t.board).filesDeleted.includes(I)?(t.kill(!0),u()):h=i.url)};return o.ajax(f,{onloadend(){return g.call(this)}})}},onControls(e){return l["Show Controls"]&&l["Click Passthrough"]&&e.target.nodeName==="VIDEO"||e.target.controls&&e.target.getBoundingClientRect().bottom-e.clientY<35},download(e){if(this.protocol==="blob:")return!0;e.preventDefault();const{href:t,download:i}=this;return xe.file(t,function(n){if(n){const s=o.el("a",{href:URL.createObjectURL(n),download:i,hidden:!0});return o.add(m.body,s),s.click(),o.rm(s)}else return new G("warning",`Could not download ${t}`,20)})}};const Ts=y("div",{class:"box-inner"},y("div",{class:"boxbar"},y("h2",null,"Trouble buying a 4chan Pass? (a message from 4chan X)",y("a",{href:"javascript:;",style:"text-decoration: none; float: right; margin-right: 4px;",title:"Close"},"\xD7"))),y("div",{class:"boxcontent"},"Check the 4chan X wiki for ",y("a",{href:`${z.captchaFAQ}#alternatives`,target:"_blank",rel:"noopener"},"alternative solutions"),".")),Ds={init(){if(l.passMessageClosed)return;const e=o.el("div",{className:"box-outer top-box"},Ts);e.style.cssText="padding-bottom: 0;";const t=o("a",e);return o.on(t,"click",function(){return o.rm(e),o.set("passMessageClosed",!0)}),o.ready(function(){let i;return(i=o.id("hd"))?o.after(i,e):o.prepend(m.body,e)})}};var Rs=`<legend><label><input id="archive-report-enabled" type="checkbox">Report illegal content to archives</label></legend>
<label for="archive-report-reason">Details</label>
<textarea id="archive-report-reason" disabled>Illegal content</textarea>
<button id="archive-report-submit" hidden>Submit</button>`,Ne={init(){let e;if(e=location.search.match(/\bno=(\d+)/))return le.replace.init(),this.postID=+e[1],o.ready(this.ready)},ready(){return o.addStyle(et.report),l["Archive Report"]&&Ne.archive(),new MutationObserver(function(){return Ne.fit('iframe[src^="https://www.google.com/recaptcha/api2/frame"]'),Ne.fit("body")}).observe(m.body,{childList:!0,attributes:!0,subtree:!0}),Ne.fit("body")},fit(e){let t;if(!((t=o(e,w))&&getComputedStyle(t).visibility!=="hidden"))return;const i=t.getBoundingClientRect().bottom-w.clientHeight+8;if(i>0)return window.resizeBy(0,i)},archive(){let e,t;if(!(t=Y.report(c.BOARD.ID)).length)return;const i=o("form"),n=o.id("reportTypes"),s=o("h3"),r=o.el("fieldset",{id:"archive-report",hidden:!0},{innerHTML:Rs}),a=o("#archive-report-enabled",r),h=o("#archive-report-reason",r),u=o("#archive-report-submit",r);if(o.on(a,"change",function(){return h.disabled=!this.checked}),i&&n?(r.hidden=!o('[value="31"]',n).checked,o.on(n,"change",function(f){return r.hidden=f.target.value!=="31",Ne.fit("body")}),o.after(n,r),Ne.fit("body"),o.one(i,"submit",function(f){if(!r.hidden&&a.checked)return f.preventDefault(),Ne.archiveSubmit(t,h.value,g=>(this.action="#archiveresults="+encodeURIComponent(JSON.stringify(g)),this.submit()))})):s&&(r.hidden=/Report submitted!/.test(s.textContent),o.on(a,"change",function(){return u.hidden=!this.checked}),o.after(s,r),o.on(u,"click",()=>Ne.archiveSubmit(t,h.value,Ne.archiveResults))),e=location.hash.match(/^#archiveresults=(.*)$/))try{return Ne.archiveResults(JSON.parse(decodeURIComponent(e[1])))}catch{}},archiveSubmit(e,t,i){const n=o.formData({board:c.BOARD.ID,num:Ne.postID,reason:t}),s=[];for(var[r,a]of e)(function(h,u){return o.ajax(u,{onloadend(){if(s.push([h,this.response||{error:""}]),s.length===e.length)return i(s)},form:n})})(r,a)},archiveResults(e){const t=o.id("archive-report");for(var[i,n]of e){var s=o.el("h3",{className:"archive-report-response"});"success"in n?(o.addClass(s,"archive-report-success"),s.textContent=`${i}: ${n.success}`):(o.addClass(s,"archive-report-error"),s.textContent=`${i}: ${n.error||"Error reporting post."}`),t?o.before(t,s):o.add(m.body,s)}}};const Bs={init(){if(l["Remember Your Posts"])return o.ready(this.ready)},ready(){if(m.title!=="Post successful!")return;let[e,t,i]=o("h1").nextSibling.textContent.match(/thread:(\d+),no:(\d+)/);return i=+i,t=+t||i,new De("yourPosts").set({boardID:c.BOARD.ID,threadID:t,postID:i,val:!0})}};function Ls(e,t,i,n,s,r,a,h,u,f,g,b,I,T,R,B,P,X,k,M,K,J,ke){const Se=[y("span",{class:`name${n?" capcode":""}`},r)];a&&Se.push(" ",y("span",{class:"postertrip"},a)),h&&Se.push(" ",y("span",{title:`Pass user since ${h}`,class:"n-pu"})),n&&Se.push(" ",y("strong",{class:`capcode hand id_${u}`,title:`Highlight posts by ${f}`},"## ",n));const je=s?[" ",y("a",{href:`mailto:${s}`,class:"useremail"},...Se)]:Se;J==="f"&&!t.isReply||I||je.push(" "),I&&je.push(y("img",{src:`${g}${u}icon${b}`,alt:`${n} Icon`,title:`This user is ${I}.`,class:"identityIcon retina"})),T&&!n&&je.push(y("span",{class:`posteruid id_${T}`},"(ID: ",y("span",{class:"hand",title:"Highlight posts by this ID"},T),")")),B&&je.push(" ",y("span",{title:R,class:`flag flag-${B.toLowerCase()}`})),P&&je.push(" ",y("span",{title:R,class:`bfl bfl-${P.toLowerCase()}`}));const Be=[y("a",{href:M,title:"Link to this post"},"No."),y("a",{href:K,title:"Reply to this post"},e)];if(t.isSticky){const Je=`${g}sticky${b}`;Be.push(" "),J==="f"?Be.push(y("img",{src:Je,alt:"Sticky",title:"Sticky",style:"height: 18px; width: 18px;"})):Be.push(y("img",{src:Je,alt:"Sticky",title:"Sticky",class:"stickyIcon retina"}))}if(t.isClosed&&!t.isArchived){Be.push(" ");const Je=`${g}closed${b}`;J==="f"?Be.push(y("img",{src:Je,alt:"Closed",title:"Closed",style:"height: 18px; width: 18px;"})):Be.push(y("img",{src:Je,alt:"Closed",title:"Closed",class:"closedIcon retina"}))}return t.isArchived&&Be.push(" ",y("img",{src:`${g}archived${b}`,alt:"Archived",title:"Archived",class:"archivedIcon retina"})),!t.isReply&&c.VIEW==="index"&&Be.push(" \xA0 ",y("span",null,"[",y("a",{href:`/${J}/thread/${ke}`,class:"replylink"},"Reply"),"]")),y("div",{class:"postInfo desktop",id:`pi${e}`},y("input",{type:"checkbox",name:e,value:"delete"})," ",...!t.isReply||J==="f"||i?[y("span",{class:"subject"},i)," "]:[],y("span",{class:`nameBlock${n?` capcode${n}`:""}`},...je)," ",y("span",{class:"dateTime","data-utc":X},k)," ",y("span",{class:`postNum${J===" f"&&!t.isReply?"":" desktop"}`},...Be))}function Ns(e,t,i,n,s,r,a,h,u){if(e){const f=[];return i==="f"?f.push(y("div",{class:"fileInfo","data-md5":e.MD5},y("span",{class:"fileText",id:`fT${t}`},"File: ",y("a",{"data-width":e.width,"data-height":e.height,href:n,target:"_blank"},e.name),"-(",e.size,", ",e.dimensions,e.tag?", "+e.tag:"",")"))):f.push(y("div",{class:"fileText",id:`fT${t}`,title:e.isSpoiler?e.name:null},"File: ",y("a",{title:e.name===s||e.isSpoiler?null:e.name,href:n,target:"_blank"},e.isSpoiler?"Spoiler Image":s),` (${e.size}, ${e.dimensions||"PDF"})`),y("a",{class:`fileThumb${e.isSpoiler?" imgspoiler":""}`,href:n,target:"_blank","data-m":e.hasDownscale?"":null},y("img",{src:r,alt:e.size,"data-md5":e.MD5,style:`height: ${e.isSpoiler?"100":e.theight}px; width: ${e.isSpoiler?"100":e.twidth}px;`,loading:"lazy"}))),y("div",{class:"file",id:`f${t}`},...f)}else if(a.fileDeleted)return y("div",{class:"file",id:`f${t}`},y("span",{class:"fileThumb"},y("img",{src:`${h}filedeleted-res${u}`,alt:"File deleted.",class:"fileDeletedRes retina"})));return{innerHTML:"",[we]:!0}}function Ps(e,t,i,n,s,r,a,h,u){return y(He,null,y("a",{class:"catalog-link",href:`/${e.board}/thread/${e.ID}`},i?y("img",{src:t,class:`catalog-thumb ${i}`}):y("img",{src:t,class:"catalog-thumb","data-width":n.tn_w,"data-height":n.tn_h})),y("div",{class:"catalog-stats"},y("span",{title:"Posts / Files / Page"},y("span",{class:`post-count${n.bumplimit?" warning":""}`},s)," / ",y("span",{class:`file-count${n.imagelimit?" warning":""}`},r)," / ",y("span",{class:"page-count"},a)),y("span",{class:"catalog-icons"},e.isSticky?y("img",{src:`${h}sticky${u}`,class:"stickyIcon",title:"Sticky"}):"",e.isClosed?y("img",{src:`${h}closed${u}`,class:"closedIcon",title:"Closed"}):"")))}const nt={isOPContainerThread:!1,hasIPCount:!0,archivedBoardsKnown:!0,urls:{thread({boardID:e,threadID:t}){return`${location.protocol}//${fe.domain(e)}/${e}/thread/${t}`},post({postID:e}){return`#p${e}`},index({boardID:e}){return`${location.protocol}//${fe.domain(e)}/${e}/`},catalog({boardID:e}){if(e!=="f")return`${location.protocol}//${fe.domain(e)}/${e}/catalog`},archive({boardID:e}){if(fe.isArchived(e))return`${location.protocol}//${fe.domain(e)}/${e}/archive`},threadJSON({boardID:e,threadID:t}){return`${location.protocol}//a.4cdn.org/${e}/thread/${t}.json`},threadsListJSON({boardID:e}){return`${location.protocol}//a.4cdn.org/${e}/threads.json`},archiveListJSON({boardID:e}){return fe.isArchived(e)?`${location.protocol}//a.4cdn.org/${e}/archive.json`:""},catalogJSON({boardID:e}){return`${location.protocol}//a.4cdn.org/${e}/catalog.json`},file({boardID:e},t){const i=e==="f"?de.flashHost():de.host();return`${location.protocol}//${i}/${e}/${t}`},thumb({boardID:e},t){return`${location.protocol}//${de.thumbHost()}/${e}/${t}`}},isPrunedByAge({boardID:e}){return e==="f"},areMD5sDeferred({boardID:e}){return e==="f"},isOnePage({boardID:e}){return e==="f"},noAudio({boardID:e}){return fe.noAudio(e)},selectors:{board:".board",thread:".thread",threadDivider:".board > hr",summary:"a.summary",postContainer:".postContainer",replyOriginal:".replyContainer:not([data-clone])",sideArrows:"div.sideArrows",post:".post",infoRoot:".postInfo",info:{subject:".subject",name:".name",email:".useremail",tripcode:".postertrip",uniqueIDRoot:".posteruid",uniqueID:".posteruid > .hand",capcode:".capcode.hand",pass:".n-pu",flag:".flag, .bfl",date:".dateTime",nameBlock:".nameBlock",quote:".postNum > a:nth-of-type(2)",reply:".replylink"},icons:{isSticky:".stickyIcon",isClosed:".closedIcon",isArchived:".archivedIcon"},file:{text:".file > :first-child",link:".fileText > a",thumb:"a.fileThumb > [data-md5]"},thumbLink:"a.fileThumb",highlightable:{op:".opContainer",reply:" > .reply",catalog:""},comment:".postMessage",spoiler:"s",quotelink:":not(pre) > .quotelink",catalog:{board:"#threads",thread:".thread",thumb:".thumb"},boardList:"#boardNavDesktop > .boardList",boardListBottom:"#boardNavDesktopFoot > .boardList",styleSheet:"link[title=switch]",psa:"#globalMessage",psaTop:"#globalToggle",searchBox:"#search-box",nav:{prev:".prev > form > [type=submit]",next:".next > form > [type=submit]"}},classes:{highlight:"highlight"},xpath:{thread:'div[contains(concat(" ",@class," ")," thread ")]',postContainer:'div[contains(@class,"postContainer")]',replyContainer:'div[contains(@class,"replyContainer")]'},regexp:{quotelink:new RegExp("^https?://boards\\.4chan(?:nel)?\\.org/+([^/]+)/+thread/+(\\d+)(?:[/?][^#]*)?(?:#p(\\d+))?$"),quotelinkHTML:/<a [^>]*\bhref="(?:(?:\/\/boards\.4chan(?:nel)?\.org)?\/([^\/]+)\/thread\/)?(\d+)?(?:#p(\d+))?"/g,pass:/^https?:\/\/www\.4chan(?:nel)?\.org\/+pass(?:$|[?#])/,captcha:/^https?:\/\/sys\.4chan(?:nel)?\.org\/+captcha(?:$|[?#])/},bgColoredEl(){return o.el("div",{className:"reply"})},isThisPageLegit(){return["boards.4chan.org","boards.4channel.org"].includes(location.hostname)&&m.doctype&&!o('link[href*="favicon-status.ico"]',m.head)&&!["4chan - Temporarily Offline","4chan - Error","504 Gateway Time-out","MathJax Equation Source"].includes(m.title)},is404(){return["4chan - Temporarily Offline","4chan - 404 Not Found"].includes(m.title)||c.VIEW==="thread"&&o(".board")&&!o(".opContainer")},isIncomplete(){return["index","thread"].includes(c.VIEW)&&!o(".board + *")},isBoardlessPage(e){return["www.4chan.org","www.4channel.org"].includes(e.hostname)},isAuxiliaryPage(e){return!["boards.4chan.org","boards.4channel.org"].includes(e.hostname)},isFileURL(e){return de.test(e.hostname)},initAuxiliary(){switch(location.hostname){case"www.4chan.org":case"www.4channel.org":nt.regexp.pass.test(location.href)?Ds.init():(o.onExists(w,"body",()=>o.addStyle(et.www)),le.replace.init());return;case"sys.4chan.org":case"sys.4channel.org":var e=location.pathname.split(/\/+/);if(e[2]==="imgboard.php"){let t;/\bmode=report\b/.test(location.search)?Ne.init():(t=location.search.match(/\bres=(\d+)/))&&o.ready(function(){if(l["404 Redirect"]&&o.id("errmsg")?.textContent==="Error: Specified thread does not exist.")return Y.navigate("thread",{boardID:c.BOARD.ID,postID:+t[1]})})}else e[2]==="post"&&Bs.init();return}},scriptData(){for(var e of L("script:not([src])",m.head))if(/\bcooldowns *=/.test(e.textContent))return e.textContent;return""},parseThreadMetadata(e){let t;const i=this.scriptData();if(e.postLimit=/\bbumplimit *= *1\b/.test(i),e.fileLimit=/\bimagelimit *= *1\b/.test(i),e.ipCount=(t=i.match(/\bunique_ips *= *(\d+)\b/))?+t[1]:void 0,c.BOARD.ID==="f"&&e.OP.file){const{file:n}=e.OP;return o.ajax(this.urls.threadJSON({boardID:"f",threadID:e.ID}),{timeout:Le,onloadend(){if(this.response)return n.text.dataset.md5=n.MD5=this.response.posts[0].md5}})}},parseNodes(e,t){if(e.boardID==="f")return(()=>{const i=[];for(var n of["Sticky","Closed"]){var s;(s=o(`img[alt=${n}]`,t.info))&&i.push(o.addClass(s,`${n.toLowerCase()}Icon`,"retina"))}return i})()},parseDate(e){return new Date(e.dataset.utc*1e3)},parseFile(e,t){let i;const{text:n,link:s,thumb:r}=t;if(!(i=s.nextSibling?.textContent.match(/\(([\d.]+ [KMG]?B).*\)/)))return!1;if(o.extend(t,{name:n.title||s.title||s.textContent,size:i[1],dimensions:i[0].match(/\d+x\d+/)?.[0],tag:i[0].match(/,[^,]*, ([a-z]+)\)/i)?.[1],MD5:n.dataset.md5}),r&&(o.extend(t,{thumbURL:r.src,MD5:r.dataset.md5,isSpoiler:o.hasClass(r.parentNode,"imgspoiler")}),t.isSpoiler)){let a;t.thumbURL=(a=s.href.match(/\d+(?=\.\w+$)/))?`${location.protocol}//${de.thumbHost()}/${e.board}/${a[0]}s.jpg`:void 0}return!0},cleanComment(e){let t;if(t=o(".abbr",e)){for(var i of L(".abbr + br, .exif",e))o.rm(i);for(let s=0;s<2;s++){var n;(n=t.previousSibling)&&n.nodeName==="BR"&&o.rm(n)}return o.rm(t)}},cleanCommentDisplay(e){let t;return(t=o("b",e))&&/^Rolled /.test(t.textContent)&&o.rm(t),o.rm(o(".fortune",e))},insertTags(e){let t;for(t of L("s, .removed-spoiler",e))o.replace(t,[o.tn("[spoiler]"),...t.childNodes,o.tn("[/spoiler]")]);for(t of L(".prettyprint",e))o.replace(t,[o.tn("[code]"),...t.childNodes,o.tn("[/code]")])},hasCORS(e){return e.split("/").slice(0,3).join("/")===location.protocol+"//a.4cdn.org"},sfwBoards(e){return fe.sfwBoards(e)},uidColor(e){let t=0,i=0;for(;i<8;)t=(t<<5)-t+e.charCodeAt(i++);return t>>8&16777215},isLinkified(e){return de.test(e.hostname)},testNativeExtension(){return o.global("testNativeExtension",{})},transformBoardList(){let e;const t=[],i=()=>o.el("span",{className:"spacer"}),n=o.X(".//a|.//text()[not(ancestor::a)]",o(nt.selectors.boardList));let s=0;for(;e=n.snapshotItem(s++);)switch(e.nodeName){case"#text":for(var r of e.nodeValue){var a=o.el("span",{textContent:r});r===" "&&(a.className="space"),r==="]"&&t.push(i()),t.push(a),r==="["&&t.push(i())}break;case"A":var h=e.cloneNode(!0);t.push(h);break}return t},Build:{staticPath:"//s.4cdn.org/image/",gifIcon:window.devicePixelRatio>=2?"@2x.gif":".gif",spoilerRange:Object.create(null),shortFilename(e){const t=e.match(/\.?[^\.]*$/)[0];return e.length-t.length>30?`${e.match(/(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^]){0,25}/)[0]}(...)${t}`:e},spoilerThumb(e){let t;return(t=this.spoilerRange[e])?`${this.staticPath}spoiler-${e}${Math.floor(1+t*Math.random())}.png`:`${this.staticPath}spoiler.png`},sameThread(e,t){return c.VIEW==="thread"&&c.BOARD.ID===e&&c.THREADID===+t},threadURL(e,t){return e!==c.BOARD.ID?`//${fe.domain(e)}/${e}/thread/${t}`:c.VIEW!=="thread"||+t!==c.THREADID?`/${e}/thread/${t}`:""},postURL(e,t,i){return`${this.threadURL(e,t)}#p${i}`},parseJSON(e,{siteID:t,boardID:i}){const n={ID:e.no,postID:e.no,threadID:e.resto||e.no,boardID:i,siteID:t,isReply:!!e.resto,isSticky:!!e.sticky,isClosed:!!e.closed,isArchived:!!e.archived,threadReplies:e.replies,threadImages:e.images,fileDeleted:!!e.filedeleted,filesDeleted:e.filedeleted?[0]:[]};n.info={subject:o.unescape(e.sub),email:o.unescape(e.email),name:o.unescape(e.name)||"",tripcode:e.trip,pass:e.since4pass!=null?`${e.since4pass}`:void 0,uniqueID:e.id,flagCode:e.country,flagCodeTroll:e.board_flag,flag:o.unescape(e.country_name||e.flag_name),dateUTC:e.time,dateText:e.now,commentHTML:{innerHTML:e.com||"",[we]:!0}},e.capcode&&(n.info.capcode=e.capcode.replace(/_highlight$/,"").replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),n.capcodeHighlight=/_highlight$/.test(e.capcode),delete n.info.uniqueID),n.files=[],e.ext&&(n.file=this.parseJSONFile(e,{siteID:t,boardID:i}),n.files.push(n.file)),n.extra=S();for(var s in e)s[0]==="x"&&(n.extra[s]=e[s]);return n},parseJSONFile(e,{siteID:t,boardID:i}){const n=c.sites[t],s=n.software==="yotsuba"&&i==="f"?`${encodeURIComponent(e.filename)}${e.ext}`:`${e.tim}${e.ext}`,r={name:o.unescape(e.filename)+e.ext,url:n.urls.file({siteID:t,boardID:i},s),height:e.h,width:e.w,MD5:e.md5,size:o.bytesToString(e.fsize),thumbURL:n.urls.thumb({siteID:t,boardID:i},`${e.tim}s.jpg`),theight:e.tn_h,twidth:e.tn_w,isSpoiler:!!e.spoiler,tag:e.tag,hasDownscale:!!e.m_img};return e.h!=null&&!/\.pdf$/.test(r.url)&&(r.dimensions=`${r.width}x${r.height}`),r},parseComment(e){return e=e.replace(/<br\b[^<]*>/gi,`
`).replace(/\n\n<span\b[^<]* class="abbr"[^]*$/i,"").replace(/<[^>]*>/g,""),o.unescape(e)},parseCommentDisplay(e){if(!l["Remove Spoilers"]&&!l["Reveal Spoilers"]){let t;for(;(t=e.replace(/<s>(?:(?!<\/?s>).)*<\/s>/g,"[spoiler]"))!==e;)e=t}return e=e.replace(/^<b\b[^<]*>Rolled [^<]*<\/b>/i,"").replace(/<span\b[^<]* class="fortune"[^]*$/i,""),this.parseComment(e).trim().replace(/\s+$/gm,"")},postFromObject(e,t){const i=this.parseJSON(e,{boardID:t,siteID:c.SITE.ID});return this.post(i)},post(e){const{ID:t,threadID:i,boardID:n,file:s}=e,{subject:r,email:a,name:h,tripcode:u,capcode:f,pass:g,uniqueID:b,flagCode:I,flagCodeTroll:T,flag:R,dateUTC:B,dateText:P,commentHTML:X}=e.info,{staticPath:k,gifIcon:M}=this;let K,J,ke;if(f)if(ke=f.toLowerCase(),f==="Founder")J="the Founder",K="4chan's Founder";else if(f==="Verified")J="Verified Users",K="";else{const Yt=o.getOwn({Admin:"Administrator",Mod:"Moderator"},f)||f;J=`${Yt}s`,K=`a 4chan ${Yt}`}const Se=this.threadURL(n,i),je=`${Se}#p${t}`,Be=this.sameThread(n,i)?`javascript:quote('${+t}');`:`${Se}#q${t}`,Je=Ls(t,e,r,f,a,h,u,g,ke,J,k,M,K,b,R,I,T,B,P,je,Be,n,i);let Lt,Wt,zt,_t;s&&(Lt=/^https?:(?=\/\/i\.4cdn\.org\/)/,Wt=s.url.replace(Lt,""),zt=this.shortFilename(s.name),_t=s.isSpoiler?this.spoilerThumb(n):s.thumbURL.replace(Lt,""));const Jt=Ns(s,t,n,Wt,zt,_t,e,k,M),Gt=e.isReply?"reply":"op",Nt=e.isReply?[Je,Jt]:[Jt,Je];Nt.push(y("blockquote",{class:"postMessage",id:`m${t}`},X)),!e.isReply&&e.threadReplies!=null&&Nt.push(y("span",{class:"summary preview-summary"},this.summaryText("",e.threadReplies,e.threadImages,!0)));const zs=y(He,null,e.isReply?y("div",{class:"sideArrows",id:`sa${t}`},">>"):"",y("div",{id:`p${t}`,class:`post ${Gt}${e.capcodeHighlight?" highlightPost":""}`},...Nt)),Pt=o.el("div",{className:`postContainer ${Gt}Container`,id:`pc${t}`});o.extend(Pt,zs);for(var yt of L(".quotelink",Pt)){var Mt=yt.getAttribute("href");if(Mt[0]==="#")this.sameThread(n,i)||(yt.href=this.threadURL(n,i)+Mt);else{var Ft;(Ft=yt.href.match(nt.regexp.quotelink))&&this.sameThread(Ft[1],Ft[2])&&(yt.href=Mt.match(/(#[^#]*)?$/)[0]||"#")}}return Pt},summaryText(e,t,i,n=!1){let s="";return e&&(s+=`${e} `),s+=`${t} post${t==1?"":"s"}`,+i&&(s+=` and ${i} image repl${i>1?"ies":"y"}`),n?s:`${s} ${e==="-"?"shown":"omitted"}.`},summary(e,t,i,n){return o.el("a",{className:"summary",textContent:this.summaryText("",i,n),href:`/${e}/thread/${t}`})},thread(e,t,i){let n;if((n=e.nodes.root)?o.rmAll(n):e.nodes.root=n=o.el("div",{className:"thread",id:`t${t.no}`}),this.hat&&o.add(n,this.hat.cloneNode(!1)),o.add(n,e.OP.nodes.root),t.omitted_posts||!i&&t.replies){const[s,r]=i?[t.omitted_posts,t.images-t.last_replies.filter(h=>!!h.ext).length]:[t.replies,t.images],a=this.summary(e.board.ID,t.no,s,r);o.add(n,a)}return n},catalogThread(e,t,i){let n,s,r;const{staticPath:a,gifIcon:h}=this,{tn_w:u,tn_h:f}=t;if(t.spoiler&&!l["Reveal Spoiler Thumbnails"]){let B;r=`${a}spoiler`,(B=this.spoilerRange[e.board])&&(r+=`-${e.board}`+Math.floor(1+B*Math.random())),r+=".png",s="spoiler-file",n="--tn-w: 100; --tn-h: 100;"}else if(t.filedeleted)r=`${a}filedeleted-res${h}`,s="deleted-file";else if(e.OP.file){r=e.OP.file.thumbURL;const B=250/Math.max(u,f);n=`--tn-w: ${u*B}; --tn-h: ${f*B};`}else r=`${a}nofile.png`,s="no-file";const g=t.replies+1,b=t.images+!!t.ext,I=o.el("div",Ps(e,r,s,t,g,b,i,a,h));o.before(e.OP.nodes.info,[...I.childNodes]);for(var T of L("br",e.OP.nodes.comment))T.previousSibling&&T.previousSibling.nodeName==="BR"&&o.addClass(T,"extra-linebreak");const R=o.el("div",{className:"thread catalog-thread",id:`t${e}`});return e.OP.highlights&&o.addClass(R,...e.OP.highlights),e.OP.file||o.addClass(R,"noFile"),R.style.cssText=n||"",R},catalogReply(e,t){let i="";t.com&&(i=this.parseCommentDisplay(t.com).replace(/>>\d+/g,"").trim().replace(/\n+/g," // ")),t.ext&&(i||(i=`${o.unescape(t.filename)}${t.ext}`)),t.com&&(i||(i=o.unescape(t.com.replace(/<br\b[^<]*>/gi," // ")))),i||(i="\xA0"),i.length>73&&(i=`${i.slice(0,70)}...`);const n=this.postURL(e.board.ID,e.ID,t.no);return o.el("div",{className:"catalog-reply"},y(He,null,y("span",null,y("time",{"data-utc":t.time*1e3,"data-abbrev":"1"},"..."),": "),y("a",{class:"catalog-reply-excerpt",href:n},i),y("a",{class:"catalog-reply-preview",href:n},"...")))}}},Tt={isOPContainerThread:!0,mayLackJSON:!0,threadModTimeIgnoresSage:!0,disabledFeatures:["Resurrect Quotes","Quick Reply Personas","Quick Reply","Cooldown","Report Link","Delete Link","Edit Link","Quote Inlining","Quote Previewing","Quote Backlinks","File Info Formatting","Image Expansion","Image Expansion (Menu)","Comment Expansion","Thread Expansion","Favicon","Quote Threading","Thread Updater","Banner","Flash Features","Reply Pruning"],detect(){for(var e of L("script:not([src])",m.head)){var t;if(t=e.textContent.match(/\bvar configRoot=(".*?")/)){var i=S();try{var n=JSON.parse(t[1]);n[0]==="/"?i.root=location.origin+n:/^https?:/.test(n)&&(i.root=n)}catch{}return i}}return!1},awaitBoard(e){if(o.id("react-ui")){const t=this.selectors=Object.create(this.selectors);return t.boardFor={index:".page-container"},t.thread='div[id^="thread_"]',D.mounted(e)}else return e()},urls:{thread({siteID:e,boardID:t,threadID:i},n){return`${l.siteProperties[e]?.root||`http://${e}/`}${t}/${n?"archive/":""}res/${i}.html`},post({postID:e}){return`#${e}`},index({siteID:e,boardID:t}){return`${l.siteProperties[e]?.root||`http://${e}/`}${t}/`},catalog({siteID:e,boardID:t}){return`${l.siteProperties[e]?.root||`http://${e}/`}${t}/catalog.html`},threadJSON({siteID:e,boardID:t,threadID:i},n){const s=l.siteProperties[e]?.root;return s?`${s}${t}/${n?"archive/":""}res/${i}.json`:""},archivedThreadJSON(e){return Tt.urls.threadJSON(e,!0)},threadsListJSON({siteID:e,boardID:t}){const i=l.siteProperties[e]?.root;return i?`${i}${t}/threads.json`:""},archiveListJSON({siteID:e,boardID:t}){const i=l.siteProperties[e]?.root;return i?`${i}${t}/archive/archive.json`:""},catalogJSON({siteID:e,boardID:t}){const i=l.siteProperties[e]?.root;return i?`${i}${t}/catalog.json`:""},file({siteID:e,boardID:t},i){return`${l.siteProperties[e]?.root||`http://${e}/`}${t}/${i}`},thumb(e,t){return Tt.urls.file(e,t)}},selectors:{board:'form[name="postcontrols"]',thread:'input[name="board"] ~ div[id^="thread_"]',threadDivider:'div[id^="thread_"] > hr:last-child',summary:".omitted",postContainer:'div[id^="reply_"]:not(.hidden)',opBottom:".op",replyOriginal:'div[id^="reply_"]:not(.hidden)',infoRoot:".intro",info:{subject:".subject",name:".name",email:".email",tripcode:".trip",uniqueID:".poster_id",capcode:".capcode",flag:".flag",date:"time",nameBlock:"label",quote:'a[href*="#q"]',reply:'a[href*="/res/"]:not([href*="#"])'},icons:{isSticky:".fa-thumb-tack",isClosed:".fa-lock"},file:{text:".fileinfo",link:".fileinfo > a",thumb:"a > .post-image"},thumbLink:".file > a",multifile:".files > .file",highlightable:{op:" > .op",reply:".reply",catalog:" > .thread"},comment:".body",spoiler:".spoiler",quotelink:'a[onclick*="highlightReply("]',catalog:{board:"#Grid",thread:".mix",thumb:".thread-image"},boardList:".boardlist",boardListBottom:".boardlist.bottom",styleSheet:"#stylesheet",psa:".blotter",nav:{prev:".pages > form > [value=Previous]",next:".pages > form > [value=Next]"}},classes:{highlight:"highlighted"},xpath:{thread:'div[starts-with(@id,"thread_")]',postContainer:'div[starts-with(@id,"reply_") or starts-with(@id,"thread_")]',replyContainer:'div[starts-with(@id,"reply_")]'},regexp:{quotelink:new RegExp("/([^/]+)/res/(\\d+)(?:\\.\\w+)?#(\\d+)$"),quotelinkHTML:/<a [^>]*\bhref="[^"]*\/([^\/]+)\/res\/(\d+)(?:\.\w+)?#(\d+)"/g},Build:{parseJSON(e,t){const i=nt.Build.parseJSON(e,t);if(e.ext==="deleted"&&(delete i.file,o.extend(i,{files:[],fileDeleted:!0,filesDeleted:[0]})),e.extra_files){let s;for(let r=0;r<e.extra_files.length;r++){var n=e.extra_files[r];n.ext==="deleted"?i.filesDeleted.push(r):(s=nt.Build.parseJSONFile(e,t),i.files.push(s))}i.files.length&&(i.file=i.files[0])}return i},parseComment(e){return e=e.replace(/<br\b[^<]*>/gi,`
`).replace(/<[^>]*>/g,""),o.unescape(e)}},bgColoredEl(){return o.el("div",{className:"post reply"})},isFileURL(e){return/\/src\/[^\/]+/.test(e.pathname)},preParsingFixes(e){let t;if(t=o('a > input[name="board"]',e))return o.before(t.parentNode,t)},parseNodes(e,t){let i;if(t.uniqueID)return;let n="",s=t.nameBlock.nextSibling;for(;s&&s.nodeType===3;)n+=s.textContent,s=s.nextSibling;if(i=n.match(/(\s*ID:\s*)(\S+)/)){let r;t.info.normalize();let{nextSibling:a}=t.nameBlock;return a=a.splitText(i[1].length),a.splitText(i[2].length),t.uniqueID=r=o.el("span",{className:"poster_id"}),o.replace(a,r),o.add(r,a)}},parseDate(e){let t=Date.parse(e.getAttribute("datetime")?.trim());if(!isNaN(t))return new Date(t);if(t=Date.parse(e.textContent.trim()+" UTC"),!isNaN(t))return new Date(t)},parseFile(e,t){let i,n;const{text:s,link:r,thumb:a}=t;if(o.x(`ancestor::${this.xpath.postContainer}[1]`,s)!==e.nodes.root||!(n=r.nextSibling?.textContent.includes("(")?r.nextSibling:r.nextElementSibling)||!(i=n.textContent.match(/\((.*,\s*)?([\d.]+ ?[KMG]?B).*\)/)))return!1;const h=o(".postfilename",s);return o.extend(t,{name:h?h.title||h.textContent:r.pathname.match(/[^/]*$/)[0],size:i[2],dimensions:i[0].match(/\d+x\d+/)?.[0]}),a&&o.extend(t,{thumbURL:/\/static\//.test(a.src)&&o.isImage(r.href)?r.href:a.src,isSpoiler:/^Spoiler/i.test(i[1]||"")||r.textContent==="Spoiler Image"}),!0},isThumbExpanded(e){return o.hasClass(e.thumb.parentNode,"expanded")||e.thumb.parentNode.dataset.expanded==="true"},isLinkified(e){return/\bnofollow\b/.test(e.rel)},catalogPin(e){return e.dataset.sticky="true"}},We={tinyboard:Tt,yotsuba:nt};var ze={init(){if(!(!["index","thread","archive"].includes(c.VIEW)||!l["File Info Formatting"]))return N.Post.push({name:"File Info Formatting",cb:this.node})},node(){if(!this.file)return;if(this.isClone){let i;for(i of L(".file-info .download-button",this.file.text))o.on(i,"click",ee.download);for(i of L(".file-info .quick-filter-md5",this.file.text))o.on(i,"click",V.quickFilterMD5);return}const e=o.el("span",{className:"fileText-original"});o.prepend(this.file.link.parentNode,e),o.add(e,[this.file.link.previousSibling,this.file.link,this.file.link.nextSibling]);const t=o.el("span",{className:"file-info"});return ze.format(l.fileInfo,this,t),o.prepend(this.file.text,t)},format(e,t,i){let n;const s=[];e.replace(/%(.)|[^%]+/g,function(r,a){return s.push(o.hasOwn(ze.formatters,a)?ze.formatters[a].call(t):{innerHTML:oe(r)}),""}),o.extend(i,{innerHTML:oe.cat(s)});for(n of L(".download-button",i))o.on(n,"click",ee.download);for(n of L(".quick-filter-md5",i))o.on(n,"click",V.quickFilterMD5)},formatters:{t(){return{innerHTML:oe(this.file.url.match(/[^/]*$/)[0]),[we]:!0}},T(){return y("a",{href:this.file.url,target:"_blank"},ze.formatters.t.call(this))},l(){return y("a",{href:this.file.url,target:"_blank"},ze.formatters.n.call(this))},L(){return y("a",{href:this.file.url,target:"_blank"},ze.formatters.N.call(this))},n(){const e=this.file.name,t=We.yotsuba.Build.shortFilename(this.file.name,this.isReply);return e===t?{innerHTML:oe(e),[we]:!0}:y("span",{class:"fnswitch"},y("span",{class:"fntrunc"},t),y("span",{class:"fnfull"},e))},N(){return{innerHTML:oe(this.file.name),[we]:!0}},d(){return y("a",{href:this.file.url,download:this.file.name,class:"download-button"},q.raw("download"))},f(){return{innerHTML:`<a href="javascript:;" class="quick-filter-md5">${q.get("xmark")}</a>`,[we]:!0}},p(){return{innerHTML:this.file.isSpoiler?"Spoiler, ":"",[we]:!0}},s(){return{innerHTML:oe(this.file.size),[we]:!0}},B(){return{innerHTML:Math.round(this.file.sizeInBytes)+" Bytes",[we]:!0}},K(){return{innerHTML:Math.round(this.file.sizeInBytes/1024)+" KB",[we]:!0}},M(){return{innerHTML:Math.round(this.file.sizeInBytes/1048576*100)/100+" MB",[we]:!0}},r(){return{innerHTML:oe(this.file.dimensions||"PDF"),[we]:!0}},g(){return{innerHTML:this.file.tag?", "+oe(this.file.tag):"",[we]:!0}},"%"(){return{innerHTML:"%",[we]:!0}}}},$={dialog:void 0,init(){const e=o.el("a",{className:"settings-link",title:`${z.name} Settings`,href:"javascript:;"});q.set(e,"wrench","Settings"),o.on(e,"click",$.open),x.addShortcut("settings",e,820);const t=this.addSection;t("Main",this.main),t("Filter",this.filter),t("Sauce",this.sauce),t("Advanced",this.advanced),t("Keybinds",this.keybinds),o.on(m,"AddSettingsSection",$.addSection),o.on(m,"OpenSettings",i=>$.open(i.detail)),c.SITE.software==="yotsuba"&&l["Disable Native Extension"]&&(o.hasStorage?o.global("disableNativeExtension"):o.global("disableNativeExtensionNoStorage"))},open(e){let t,i;if($.dialog)return;o.event("CloseMenu"),$.dialog=t=o.el("div",{id:"overlay"},eo),o.on(o(".export",t),"click",$.export),o.on(o(".import",t),"click",$.import),o.on(o(".reset",t),"click",$.reset),o.on(o("input",t),"change",$.onImport);const n=[];for(var s of $.sections){var r=o.el("a",{className:`tab-${s.hyphenatedTitle}`,textContent:s.title,href:"javascript:;"});o.on(r,"click",$.openSection.bind(s)),n.push(r,o.tn(" | ")),s.title===e&&(i=r)}n.pop(),o.add(o(".sections-list",t),n),e!=="none"&&(i||n[0]).click(),q.set(o(".close",t),"xmark"),o.on(o(".close",t),"click",$.close),o.on(window,"beforeunload",$.close),o.on(t,"click",()=>{m.activeElement?.tagName==="INPUT"||m.activeElement?.tagName==="TEXTAREA"||$.close()}),o.on(t.firstElementChild,"click",a=>a.stopPropagation()),o.add(m.body,t),n[0].focus(),o.event("OpenSettings",null,t)},close(){$.dialog&&(m.activeElement?.blur(),o.rm($.dialog),delete $.dialog)},sections:[],addSection(e,t){typeof e!="string"&&({title:e,open:t}=e.detail);const i=e.toLowerCase().replace(/\s+/g,"-");$.sections.push({title:e,hyphenatedTitle:i,open:t})},openSection(){let e;(e=o(".tab-selected",$.dialog))&&o.rmClass(e,"tab-selected"),o.addClass(o(`.tab-${this.hyphenatedTitle}`,$.dialog),"tab-selected");const t=o("section",$.dialog);o.rmAll(t),t.className=`section-${this.hyphenatedTitle}`,this.open(t,c),t.scrollTop=0,o.event("OpenSettings",null,t)},warnings:{localStorage(e){if(o.cantSync){const t=o.cantSet?"save your settings":"synchronize settings between tabs";e(o.el("li",{textContent:`${z.name} needs local storage to ${t}.
Enable it on boards.${location.hostname.split(".")[1]}.org in your browser's privacy settings (may be listed as part of "local data" or "cookies").`}))}},ads(e){o.onExists(w,".adg-rects > .desktop",t=>o.onExists(t,"iframe",function(){const i=Y.to("thread",{boardID:"qa",threadID:362590});e(o.el("li",y(He,null,"To protect yourself from ",y("a",{href:i,target:"_blank"},"malicious ads"),", you should ",y("a",{href:"https://github.com/gorhill/uBlock#ublock-origin",target:"_blank"},"block ads")," on 4chan.")))}))}},main(e){let t;const i=o.el("fieldset",{hidden:!0},{innerHTML:"<legend>Warnings</legend><ul></ul>"}),n=function(T){o.add(o("ul",i),T),i.hidden=!1};for(t in $.warnings){var s=$.warnings[t];s(n)}o.add(e,i);const r=S(),a=S(),h=function(T,R){const B=[T],P=[];for(t in R){var X=R[t];if(X instanceof Array){var k=X[1],M=o.el("div",{innerHTML:`<label><input type="checkbox" name="${t}">${t}</label><span class="description">: ${k}</span>`});M.dataset.name=t;var K=o("input",M);o.on(K,"change",o.cb.checked),o.on(K,"change",function(){this.parentNode.parentNode.dataset.checked=this.checked}),r[t]=l[t],a[t]=K;var J=X[2]||0;if(B.length<=J){var ke=o.el("div",{className:"suboption-list"});o.add(B[B.length-1].lastElementChild,ke),B[J]=ke}else B.length>J+1&&B.splice(J+1,B.length-(J+1));P.push(o.add(B[J],M))}}return P};for(var u in ge.main){var f=ge.main[u],g=o.el("fieldset",{innerHTML:`<legend>${u}</legend>`});h(g,f),u==="Posting and Captchas"&&o.add(g,o.el("p",{innerHTML:'For more info on captcha options and issues, see the <a href="'+z.captchaFAQ+'" target="_blank">captcha FAQ</a>.'})),o.add(e,g)}h(o('div[data-name="JSON Index"] > .suboption-list',e),ge.Index),o.get(r,function(T){for(t in T){var R=T[t];a[t].checked=R,a[t].parentNode.parentNode.dataset.checked=R}});const b=o.el("div",{innerHTML:'<button></button><span class="description">: Clear manually-hidden threads and posts on all boards. Reload the page to apply.'}),I=o("button",b);o.get({hiddenThreads:S(),hiddenPosts:S()},function({hiddenThreads:T,hiddenPosts:R}){let B,P,X,k,M=0;for(P in T)if(X=T[P],P!=="boards")for(P in X.boards)B=X.boards[P],M+=Object.keys(B).length;for(P in T.boards)B=T.boards[P],M+=Object.keys(B).length;for(P in R)if(X=R[P],P!=="boards")for(P in X.boards){B=X.boards[P];for(P in B)k=B[P],M+=Object.keys(k).length}for(P in R.boards){B=R.boards[P];for(P in B)k=B[P],M+=Object.keys(k).length}I.textContent=`Hidden: ${M}`}),o.on(I,"click",function(){this.textContent="Hidden: 0",o.get("hiddenThreads",S(),function({hiddenThreads:T}){if(o.hasStorage&&c.SITE.software==="yotsuba"){let R;for(R in T["4chan.org"]?.boards)localStorage.removeItem(`4chan-hide-t-${R}`);for(R in T.boards)localStorage.removeItem(`4chan-hide-t-${R}`)}o.delete(["hiddenThreads","hiddenPosts"])})}),o('input[name="Stubs"]',e).closest("fieldset").insertAdjacentElement("beforeend",b)},isExportModalOpen:!1,async export(){let e=l["Export History"],t=!1;if(l["Ask to Export History"]){if($.isExportModalOpen)return;const n=te.dialog("export-dialog",{innerHTML:ro}),s=o("form",n),{history:r,ask:a}=s.elements;r.checked=l["Export History"],o.add(m.body,n);const h=o(".export",$.dialog).getBoundingClientRect();if(n.style.top=`${h.y+h.height}px`,n.style.left=`${h.x}px`,$.isExportModalOpen=!0,await new Promise(u=>{const f=()=>{n.remove(),u(),$.isExportModalOpen=!1};o.on(s,"submit",g=>{g.preventDefault(),e=r.checked,o.set("Export History",e),o.set("Ask to Export History",a.checked),f()}),o.on(o("#cancel-export",n),"click",()=>{t=!0,f()})}),t)return}const i=S();o.extend(i,l),e||(delete i.hiddenThreads,delete i.hiddenPosts,delete i.hiddenPosterIds,delete i.lastReadPosts,delete i.yourPosts,delete i.watchedThreads,delete i.cooldowns,delete i["Index Sort"]),o.get(i,function(n){delete n.boardConfig,$.downloadExport({version:c.VERSION,date:Date.now(),Conf:n})})},downloadExport(e){const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),n=o.el("a",{download:`${z.name} v${c.VERSION}-${e.date}.json`,href:i}),s=o(".imp-exp-result",$.dialog);o.rmAll(s),o.add(s,n),n.click()},import(){o("input[type=file]",this.parentNode).click()},onImport(){let e;if(!(e=this.files[0]))return;this.value=null;const t=o(".imp-exp-result");if(!confirm("Your current settings will be entirely overwritten, are you sure?")){t.textContent="Import aborted.";return}const i=new FileReader;i.onload=function(n){try{$.loadSettings(S.json(n.target.result),function(s){s?t.textContent="Import failed due to an error.":confirm("Import successful. Reload now?")&&window.location.reload()})}catch(s){const r=s;t.textContent="Import failed due to an error.",ut.error(r.stack)}},i.readAsText(e)},upgrade(e,t){let i,n,s;const r=S(),a=(f,g)=>e[f]=r[f]=g;if(i=t[0]==='"')try{t=JSON.parse(t)}catch{}const h=t.replace(/^XT /i,"").replace(/\d+/g,f=>f.padStart(5,"0"));if(i){for(n in e)if(s=e[n],typeof s=="string")try{var u=JSON.parse(s);a(n,u)}catch{}}return h<"00001.00014.00016.00001"&&e.archiveLists!=null&&a("archiveLists",e.archiveLists.replace("https://mayhemydg.github.io/archives.json/archives.json","https://nstepien.github.io/archives.json/archives.json")),h<"00001.00014.00016.00007"&&e.sauces!=null&&a("sauces",e.sauces.replace(/https:\/\/www\.deviantart\.com\/gallery\/#\/d%\$1%\$2;regexp:\/\^\\w\+_by_\\w\+\[_-\]d\(\[\\da-z\]\{6\}\)\\b\|\^d\(\[\\da-z\]\{6\}\)-\[\\da-z\]\{8\}-\//g,'javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/').replace(/\/\/imgops\.com\/%URL/g,"//imgops.com/start?url=%URL")),h<"00001.00014.00017.00002"&&e.jsWhitelist!=null&&a("jsWhitelist",e.jsWhitelist+`

https://hcaptcha.com
https://*.hcaptcha.com`),h<"00001.00014.00020.00004"&&e.archiveLists!=null&&a("archiveLists",e.archiveLists.replace("https://nstepien.github.io/archives.json/archives.json","https://4chenz.github.io/archives.json/archives.json")),h<"00001.00014.00022.00003"&&e.sauces&&(a("sauces",e.sauces.replace(/^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(IMG|T?URL)&safe=off(?=$|;)/mg,"https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off")),h==="00001.00014.00022.00002"&&!/\bsbisrc=/.test(e.sauces)&&a("sauces",e.sauces.replace(/^#?\s*https:\/\/lens\.google\.com\/uploadbyurl\?url=%(IMG|T?URL)(?=$|;)/m,"https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off"))),h<"00002.00003.00001.00000"&&e.boardnav&&a("boardnav",e.boardnav.replace('[external-text:"FAQ","4chan XT"]',`[external-text:"FAQ","${z.faq}"]`)),h<"00002.00003.00006.00000"&&a("RelativeTime",e["Relative Post Dates"]?e["Relative Date Title"]?"Hover":"Show":"No"),h==="00002.00009.00000.00000"&&(a("XEmbedder",e["Embed Tweets inline with fxTwitter"]?"fxt":"tf"),a("fxtMaxReplies",e["Resolve Tweet Replies"]?e["Resolve all Tweet Replies"]?100:1:0),a("fxtLang",e["Translate non-English Tweets to English"]?"en":"")),r},loadSettings(e,t){e.version!==c.VERSION&&$.upgrade(e.Conf,e.version),o.clear(function(i){if(i)return t(i);o.set(e.Conf,t)})},reset(){confirm("Your current settings will be entirely wiped, are you sure?")&&o.clear(function(e){e?o(".imp-exp-result").textContent="Import failed due to an error.":confirm("Reset successful. Reload now?")&&window.location.reload()})},filter(e){o.extend(e,{innerHTML:so});const t=o("select",e);o.on(t,"change",$.selectFilter),$.selectFilter.call(t)},selectFilter(){let e;const t=this.nextElementSibling;if((e=this.value)!=="guide"){if(!o.hasOwn(ge.filter,e))return;o.rmAll(t);const n=o.el("textarea",{name:e,className:"field",spellcheck:!1});o.on(n,"change",o.cb.value),o.get(e,l[e],function(s){n.value=s[e],o.add(t,n)});return}const i=Object.keys(ge.filter).filter(n=>n!=="general").join(",\u200B");o.extend(t,{innerHTML:to}),o("#filterTypes",t).textContent=`type:\u200B${i};`,o(".warning",t).hidden=l.Filter},sauce(e){o.extend(e,{innerHTML:oo}),o(".warning",e).hidden=l.Sauce;const t=o("textarea",e);o.get("sauces",l.sauces,function(i){t.value=i.sauces,t.hidden=!1}),o.on(t,"change",o.cb.value)},advanced(e){let t,i;o.extend(e,{innerHTML:io});for(var n of L(".warning",e))n.hidden=l[n.dataset.feature];const s=S();for(t of L("[name]",e))s[t.name]=t;o.on(s.archiveLists,"change",function(){o.set("lastarchivecheck",0),l.lastarchivecheck=0,o.id("lastarchivecheck").textContent="never"});const r=S();for(i in s)if(t=s[i],!["Interval","Custom CSS","timeLocale"].includes(i)){r[i]=l[i];var a=t.nodeName==="SELECT"||["checkbox","radio"].includes(t.type)||t.nodeName==="TEXTAREA"&&!(i in $)?"change":"input";o.on(t,a,o.cb[t.type==="checkbox"?"checked":"value"]),i in $&&o.on(t,a,$[i])}o.get(r,function(X){for(var k in X){var M=X[k];t=s[k],t[t.type==="checkbox"?"checked":"value"]=M,t.hidden=!1,k in $&&$[k].call(t)}});const h=o.id("list-fourchanImageHost");for(var u of de.suggestions)o.add(h,o.el("option",{textContent:u}));const f=s.Interval,g=s["Custom CSS"],b=o("#apply-css",e),I=s.timeLocale;f.value=l.Interval,g.checked=l["Custom CSS"],s.usercss.disabled=!l["Custom CSS"],b.disabled=!l["Custom CSS"],I.value=l.timeLocale,o.on(f,"change",E.cb.interval),o.on(g,"change",$.togglecss),o.on(b,"click",()=>pt.update()),o.on(I,"change",$.setTimeLocale);const T=S();for(i of["archives","selectedArchives","lastarchivecheck"])T[i]=l[i];o.get(T,function(X){o.extend(l,X),Y.selectArchives(),$.addArchiveTable(e)});const R=o("#archive-board-select",e),B=o("#archive-table",e),P=o("#update-archives",e);o.on(R,"change",function(){o("tbody > :not([hidden])",B).hidden=!0,o(`tbody > .${this.value}`,B).hidden=!1}),o.on(P,"click",()=>Y.update(()=>$.addArchiveTable(e))),o.on(s.beepVolume,"change",()=>{E.playBeep(!1)}),o.on(s.beepSource,"change",()=>{E.playBeep(!1)})},addArchiveTable(e){let t,i;o("#lastarchivecheck",e).textContent=l.lastarchivecheck===0?"never":new Date(l.lastarchivecheck).toLocaleString();const n=o("#archive-board-select",e),s=o("#archive-table",e),r=o("tbody",e);o.rmAll(n),o.rmAll(r);const a=S();for(var{uid:h,name:u,boards:f,files:g,software:b}of l.archives)if(["fuuka","foolfuuka"].includes(b))for(t of f){i=a[t]||(a[t]={thread:[],threadJSON:[],post:[],file:[]}),i.threadJSON||(i.threadJSON=[]);var I=[h??u,u];i.thread.push(I),b==="foolfuuka"&&(i.post.push(I),i.threadJSON.push(I)),g.includes(t)&&i.file.push(I)}const T=[],R=[];for(t of Object.keys(a).sort()){var B=o.el("tr",{className:`board-${t}`});B.hidden=t!==c.BOARD.ID,R.push(o.el("option",{textContent:`/${t}/`,value:`board-${t}`,selected:t===c.BOARD.ID})),i=a[t];for(var P of["thread","threadJSON","post","file"])o.add(B,$.addArchiveCell(t,i,P));T.push(B)}if(T.length===0){n.hidden=s.hidden=!0;return}n.hidden=s.hidden=!1,c.BOARD.ID in a||(T[0].hidden=!1),o.add(n,R),o.add(r,T);for(t in l.selectedArchives){var X=l.selectedArchives[t];for(var k in X){var M,K=X[k];(M=o(`select[data-boardid='${t}'][data-type='${k}']`,r))&&(M.value=JSON.stringify(K),M.value||(M.value=M.firstChild.value))}}},addArchiveCell(e,t,i){const{length:n}=t[i],s=o.el("td",{className:"archive-cell"});if(!n)return s.textContent="--",s;const r=[];let a=0;for(;a<n;){var h=t[i][a++];r.push(o.el("option",{value:JSON.stringify(h[0]),textContent:h[1]}))}o.extend(s,{innerHTML:"<select></select>"});const u=s.firstElementChild;return(u.disabled=n===1)||(u.setAttribute("data-boardid",e),u.setAttribute("data-type",i),o.on(u,"change",$.saveSelectedArchive)),o.add(u,r),s},saveSelectedArchive(){o.get("selectedArchives",l.selectedArchives,({selectedArchives:e})=>{(e[this.dataset.boardid]||(e[this.dataset.boardid]=S()))[this.dataset.type]=JSON.parse(this.value),o.set("selectedArchives",e),l.selectedArchives=e,Y.selectArchives()})},boardnav(){x.generateBoardList(this.value)},time(){this.nextElementSibling.textContent=ue.format(new Date,this.value)},timeLocale(){$.time.call(o("[name=time]",$.dialog))},backlink(){this.nextElementSibling.textContent=this.value.replace(/%(?:id|%)/g,e=>({"%id":"123456789","%%":"%"})[e])},fileInfo(){const e={isReply:!0,file:{url:`//${de.host()}/g/1334437723720.jpg`,name:"d9bb2efc98dd0df141a94399ff5880b7.jpg",size:"276 KB",sizeInBytes:282624,dimensions:"1280x720",isImage:!0,isVideo:!1,isSpoiler:!0,tag:"Loop"}};ze.format(this.value,e,this.nextElementSibling)},favicon(){pe.switch(),c.VIEW==="thread"&&l["Unread Favicon"]&&A.update();const e=this.nextElementSibling.children,t=pe,i=[t.SFW,t.unreadSFW,t.unreadSFWY,t.NSFW,t.unreadNSFW,t.unreadNSFWY,t.dead,t.unreadDead,t.unreadDeadY];for(let s=0;s<i.length;s++){var n=i[s];e[s]||o.add(this.nextElementSibling,o.el("img")),e[s].src=n}},togglecss(){(o("textarea[name=usercss]",o.x("ancestor::fieldset[1]",this)).disabled=o.id("apply-css").disabled=!this.checked)?pt.rmStyle():pt.addStyle(),o.cb.checked.call(this)},setTimeLocale(e){const t=e.target;try{t.value!==""&&new Intl.DateTimeFormat(t.value),t.setCustomValidity(""),ue.formatterCache.clear(),o.cb.value.call(t),$.timeLocale.call(t)}catch{t.setCustomValidity("Locale not recognized"),t.reportValidity()}},keyBindInputs:S(),keybinds(e){let t;o.extend(e,{innerHTML:no}),o(".warning",e).hidden=l.Keybinds;const i=o("tbody",e),n=S(),s=$.keyBindInputs;for(t in ge.hotkeys){var r=ge.hotkeys[t],a=o.el("tr",{innerHTML:`<td>${r[1]}</td><td><input class="field"></td>`}),h=o("input",a);h.name=t,h.spellcheck=!1,n[t]=l[t],s[t]=h,o.on(h,"keydown",$.keybind),o.add(i,a)}o.get(n,function(u){for(t in u){var f=u[t];s[t].value=f}}),o.on(o("#reset-keys",e),"click",$.resetKeybinds)},keybind(e){if(e.keyCode===9)return;e.preventDefault(),e.stopPropagation();const t=ae.keyCode(e);t!=null&&(this.value=t,o.cb.value.call(this))},resetKeybinds(){if(!confirm("Are you sure you want to reset the keybinds?"))return;const e=Object.fromEntries(Object.entries(ge.hotkeys).map(([t,i])=>[t,i[0]]));o.set(e,()=>{Object.assign(l,e);for(const[t,i]of Object.entries(e))$.keyBindInputs[t].value=i})}},V={filters:new Map,init(){if(!(!["index","thread","catalog"].includes(c.VIEW)||!l.Filter)&&!(c.VIEW==="catalog"&&!l["Filter in Native Catalog"])){l["Filtered Backlinks"]||o.addClass(w,"hide-backlinks");for(var e in ge.filter)for(var t of l[e].split(`
`)){let n,s,r,a=!0,h=0,u=!1,f=!1,g,b=!1,I=!1,T=!1,R=l.Stubs;if(t[0]==="#")continue;const B=t.match(/\/(.*)\/(\w*)/);if(!B)continue;if(e==="uniqueID"||e==="MD5")s=B[1];else try{s=RegExp(B[1],B[2])}catch(k){new G("warning",[o.tn(`Invalid ${e} filter:`),o.el("br"),o.tn(t),o.el("br"),o.tn(k.message)],60);continue}const P=t.length>B[0].length?t.replace(B[0],""):"";if(P){u=this.parseBoards(P.match(/(?:^|;)\s*boards:([^;]+)/)?.[1]),f=this.parseBoards(P.match(/(?:^|;)\s*exclude:([^;]+)/)?.[1]);const k=P.match(/(?:^|;)\s*op:(no|only)/)?.[1]||"";h=o.getOwn({no:1,only:2},k)||0;const M=P.match(/(?:^|;)\s*file:(no|only)/)?.[1]||"";h=h|(o.getOwn({no:4,only:8},M)||0),R=(()=>{switch(P.match(/(?:^|;)\s*stub:(yes|no)/)?.[1]){case"yes":return!0;case"no":return!1;default:return l.Stubs}})(),T=/(?:^|;)\s*notify/.test(P);const K=P.match(/(?:^|;)\s*highlight(?::([\w-]+))?/);K&&(n=K[1]||"filter-highlight",r=(P.match(/(?:^|;)\s*top:(yes|no)/)?.[1]||"yes")==="yes",a=/(?:^|;)\s*hide(?:[;:]|$)/.test(P)),a=a||!(n||T),g=P.match(/(?:^|;)\s*reason:([^;$]+)/)?.[1],b=/(?:^|;)\s*poster(?:[;:]|$)/.test(P),I=/(?:^|;)\s*replies(?:[;:]|$)/.test(P)}const X={regexp:s,boards:u,excludes:f,mask:h,hide:a,stub:R,hl:n,top:r,noti:T,reason:g,poster:b,replies:I};if(e==="general"){const k=P.match(/(?:^|;)\s*type:([^;]*)/)?.[1].split(",")||["subject","name","filename","comment"];for(var i of k)this.filters.get(i)?.push(X)??this.filters.set(i,[X])}else this.filters.get(e)?.push(X)??this.filters.set(e,[X])}if(this.filters.size){for(const n of["MD5","uniqueID"]){const s=this.filters.get(n);if(!s)continue;const r=new Map;for(const a of s)r.get(a.regexp)?.push(a)??r.set(a.regexp,[a]);this.filters.set(n,r)}return c.VIEW==="catalog"?V.catalog():N.Post.push({name:"Filter",cb:this.node})}}},parseBoards(e){let t;if(!e)return!1;if(t=V.parseBoardsMemo[e])return t;t=S();let i="";for(var n of e.split(",")){n.includes(":")&&([i,n]=n.split(":").slice(-2));for(var s in c.sites){var r=c.sites[s];if(s.slice(0,i.length)===i)if(["nsfw","sfw"].includes(n))for(var a of r.sfwBoards?.(n==="sfw")||[])t[`${s}/${a}`]=!0;else t[`${s}/${encodeURIComponent(n)}`]=!0}}return V.parseBoardsMemo[e]=t,t},parseBoardsMemo:S(),test(e,t=!0){if(e.filterResults)return e.filterResults;let i=!1,n=!0,s,r=!1,a=!1,h=!1,u=!1,f;Z.isYou(e)&&(t=!1);let g=e.isReply?2:1;g=g|(e.file?4:8);const b=`${e.siteID}/${e.boardID}`,I=`${e.siteID}/*`;for(const T of V.filters.keys())for(const R of V.values(T,e)){const B=V.filters.get(T),P=Array.isArray(B)?B:B.get(R);if(!P)continue;const X=T==="uniqueID"||T==="MD5";for(const k of P)k.boards&&!(k.boards[b]||k.boards[I])||k.excludes&&(k.excludes[b]||k.excludes[I])||k.mask&g||(X?k.regexp!==R:!k.regexp.test(R))||(k.hide&&t&&(i=!0,n&&({stub:n}=k,(f||(f=[])).push(k.reason||`Filtered ${T} ${k.regexp}`))),k.hl&&!s?.includes(k.hl)&&(s||(s=[])).push(k.hl),r||({top:r}=k),k.noti&&(a=!0),k.poster&&(h=!0),k.replies&&(u=!0))}return e.filterResults={hide:i,stub:n,hl:s,top:r,noti:a,poster:h,replies:u,reasons:f},e.filterResults},node(){if(this.isClone||!this.isReply&&!this.thread.nodes.root)return;const{hide:e,stub:t,hl:i,noti:n,poster:s,replies:r}=V.test(this,!this.isFetchedQuote&&(this.isReply||c.VIEW==="index"));let a;if(s&&this.info.uniqueID){a=`Hidden because it's the same poster as ${this.ID} (${this.filterResults.reasons})`;const{uniqueID:h}=this.info,u={regexp:h,boards:!1,excludes:!1,mask:0,hide:e,stub:t,replies:r,hl:i?.[0],reason:a},f=V.filters.get("uniqueID");f?f.get(h)?.push(u)??f.set(h,[u]):V.filters.set("uniqueID",new Map().set(h,[u]))}if(e&&(this.isReply?(O.hide(this,t),r&&Ie.applyAndAdd(O.hide,this,t,void 0,`Hidden recursively from ${this.ID}`),s&&this.info.uniqueID&&c.posts.forEach(h=>{h.info.uniqueID===this.info.uniqueID&&h!==this&&(O.hide(h,t,r,a),r&&Ie.applyAndAdd(O.hide,h,t,void 0,`Hidden recursively from ${h.ID}`))})):W.hide(this.thread,t)),i&&(this.highlights=i,o.addClass(this.nodes.root,...i),this.isReply)){const h=(u,...f)=>{o.addClass(u.nodes.root,...f)};r&&Ie.applyAndAdd(h,this,...i),s&&this.info.uniqueID&&c.posts.forEach(u=>{u.info.uniqueID===this.info.uniqueID&&u!==this&&(o.addClass(u.nodes.root,...i),r&&Ie.applyAndAdd(h,u,...i))})}n&&A.posts&&this.ID>A.lastReadPost&&!Z.isYou(this)&&A.openNotification(this," triggered a notification filter"),this.file?.thumbLink&&o.on(this.file.thumbLink,"click",h=>{!h.shiftKey||!l["MD5 Quick Filter in Threads"]||(V.quickFilterMD5.call(this),h.preventDefault(),h.stopImmediatePropagation())})},catalog(){let e;if(e=c.SITE.urls.catalogJSON?.(c.BOARD))return V.catalogData=S(),o.ajax(e,{onloadend:V.catalogParse}),N.CatalogThreadNative.push({name:"Filter",cb:this.catalogNode})},catalogParse(){if(![200,404].includes(this.status)){new G("warning",`Failed to fetch catalog JSON data. ${this.status?`Error ${this.statusText} (${this.status})`:"Connection Error"}`,1);return}for(var e of this.response)for(var t of e.threads)V.catalogData[t.no]=t;c.BOARD.threads.forEach(function(i){if(i.catalogViewNative)return V.catalogNode.call(i.catalogViewNative)})},catalogNode(){if(this.boardID!==c.BOARD.ID||!V.catalogData[this.ID]||Z.db?.get({siteID:c.SITE.ID,boardID:this.boardID,threadID:this.ID,postID:this.ID}))return;const{hide:e,hl:t,top:i}=V.test(c.SITE.Build.parseJSON(V.catalogData[this.ID],this));e&&(this.nodes.root.hidden=!0),t&&(this.highlights=t,o.addClass(this.nodes.root,...t)),i&&(o.prepend(this.nodes.root.parentNode,this.nodes.root),c.SITE.catalogPin?.(this.nodes.root))},isHidden(e){return!!V.test(e).hide},valueF:{postID(e){return[`${e.ID}`]},name(e){return e.info.name===void 0?[]:[e.info.name]},uniqueID(e){return[e.info.uniqueID||""]},tripcode(e){return e.info.tripcode===void 0?[]:[e.info.tripcode]},capcode(e){return e.info.capcode===void 0?[]:[e.info.capcode]},pass(e){return[e.info.pass]},email(e){return[e.info.email]},subject(e){return[e.info.subject||(e.isReply?void 0:"")]},comment(e){return e.info.comment==null&&(e.info.comment=c.sites[e.siteID]?.Build?.parseComment?.(e.info.commentHTML.innerHTML)),[e.info.comment]},flag(e){return e.info.flag===void 0?[]:[e.info.flag]},filename(e){return e.files.map(t=>t.name)},dimensions(e){return e.files.map(t=>t.dimensions)},filesize(e){return e.files.map(t=>t.size)},MD5(e){return e.files.map(t=>t.MD5)}},values(e,t){return o.hasOwn(V.valueF,e)?V.valueF[e](t).filter(i=>i!=null):[e.split("+").map(function(i){let n;return(n=o.getOwn(V.valueF,i))?n(t).map(s=>s||"").join(`
`):""}).join(`
`)]},addFilter(e,t,i){if(o.hasOwn(ge.filter,e))return o.get(e,l[e],function(n){let s=n[e];return s=s?`${s}
${t}`:t,o.set(e,s,i)})},removeFilters(e,t,i){return o.get(e,l[e],function(n){let s=n[e];const a=(Array.isArray(t)?t:[...t.values()].flat()).map(V.escape).join("|");return s=s.replace(RegExp(`(?:$
|^)(?:${a})$`,"mg"),""),o.set(e,s,i)})},showFilters(e){$.open("Filter");const t=o(".section-container"),i=o("select[name=filter]",t);return i.value=e,$.selectFilter.call(i),o.onExists(t,"textarea",function(n){const s=n.textLength;return n.setSelectionRange(s,s),n.focus()})},quickFilterMD5(){const e=this instanceof ye?this:F.postFromNode(this),t=e.files.filter(r=>r.MD5);if(!t.length)return;const i=t.map(r=>`/${r.MD5}/`).join(`
`);V.addFilter("MD5",i);const n=e.origin||e;if(n.isReply?O.hide(n,void 0,void 0,t.map(r=>`Filtered MD5 ${r.MD5}`).join(" & ")):c.VIEW==="index"&&W.hide(n.thread),!l["MD5 Quick Filter Notifications"]){e.nodes.post.getBoundingClientRect().height&&new G("info","MD5 filtered.",2);return}let{notice:s}=V.quickFilterMD5;if(s)s.filters.push(i),s.posts.push(n),o("span",s.el).textContent=`${s.filters.length} MD5s filtered.`,s.resetTimer();else{const r=o.el("div",{innerHTML:'<span>MD5 filtered.</span> [<a href="javascript:;">show</a>] [<a href="javascript:;">undo</a>]'});s=V.quickFilterMD5.notice=new G("info",r,10,()=>delete V.quickFilterMD5.notice),s.filters=[i],s.posts=[n];const a=L("a",r);o.on(a[0],"click",V.quickFilterCB.show.bind(s)),o.on(a[1],"click",V.quickFilterCB.undo.bind(s))}},quickFilterCB:{show(){return V.showFilters("MD5"),this.close()},undo(){V.removeFilters("MD5",this.filters);for(var e of this.posts)e.isReply?O.show(e):c.VIEW==="index"&&W.show(e.thread);return this.close()}},escape(e){return e.replace(/\/|\\|\^|\$|\n|\.|\(|\)|\{|\}|\[|\]|\?|\*|\+|\|/g,t=>t===`
`?"\\n":`\\${t}`)},menu:{init(){if(!["index","thread"].includes(c.VIEW)||!l.Menu||!l.Filter)return;const t={el:o.el("div",{textContent:"Filter"}),order:50,open(n){return V.menu.post=n,!0},subEntries:[]};for(var i of[["Name","name"],["Unique ID","uniqueID"],["Tripcode","tripcode"],["Capcode","capcode"],["Pass Date","pass"],["Email","email"],["Subject","subject"],["Comment","comment"],["Flag","flag"],["Filename","filename"],["Image dimensions","dimensions"],["Filesize","filesize"],["Image MD5","MD5"]])t.subEntries.push(V.menu.createSubEntry(i[0],i[1]));return he.menu.addEntry(t)},createSubEntry(e,t){const i=o.el("a",{href:"javascript:;",textContent:e});return i.dataset.type=t,o.on(i,"click",V.menu.makeFilter),{el:i,open(n){return V.values(t,n).length}}},makeFilter(){const{type:e}=this.dataset,i=V.values(e,V.menu.post).map(n=>["uniqueID","MD5"].includes(e)?`/${n}/`:`/^${V.escape(n)}$/`).join(`
`);return V.addFilter(e,i,()=>V.showFilters(e))}}},lt={defaultProperties:{"4chan.org":{software:"yotsuba"},"4channel.org":{canonical:"4chan.org"},"4cdn.org":{canonical:"4chan.org"},"notso.smuglo.li":{canonical:"smuglo.li"},"smugloli.net":{canonical:"smuglo.li"},"smug.nepu.moe":{canonical:"smuglo.li"}},init(e){o.extend(l.siteProperties,lt.defaultProperties);let t=lt.resolve();t&&o.hasOwn(We,l.siteProperties[t].software)&&(this.set(t),e()),o.onExists(w,"body",()=>{for(var i in We){var n;if(n=We[i].detect?.()){n.software=i,t=location.hostname.replace(/^www\./,"");var s=l.siteProperties[t]||(l.siteProperties[t]=S()),r=0;for(var a in n)s[a]!==n[a]&&(s[a]=n[a],r++);r&&o.set("siteProperties",l.siteProperties),c.SITE||(this.set(t),e());return}}})},resolve(e=location){let{hostname:t}=e;for(;t&&!o.hasOwn(l.siteProperties,t);)t=t.replace(/^[^.]*\.?/,"");if(t){let i;(i=l.siteProperties[t].canonical)&&(t=i)}return t},parseURL(e){const t=lt.resolve(e);return D.parseURL(c.sites[t],e)},set(e){for(var t in l.siteProperties){var i,n=l.siteProperties[t];if(!n.canonical){var{software:s}=n;!s||!o.hasOwn(We,s)||(c.sites[t]=i=Object.create(We[s]),o.extend(i,{ID:t,siteID:t,properties:n,software:s}))}}return c.SITE=c.sites[e]}},re={init(){if(c.SITE.software==="yotsuba"&&(l["External Catalog"]||l["JSON Index"])&&!(l["JSON Index"]&&c.VIEW==="index")){const e=(()=>{switch(c.VIEW){case"thread":case"archive":return".navLinks.desktop > a";case"catalog":return".navLinks > :first-child > a";case"index":return"#ctrl-top > a, .cataloglink > a"}})();o.ready(function(){for(var t of L(e)){var i;switch(t.pathname.replace(/\/+/g,"/")){case`/${c.BOARD}/`:l["JSON Index"]&&(t.textContent="Index"),t.href=re.index();break;case`/${c.BOARD}/catalog`:t.href=re.catalog();break}if(c.VIEW==="catalog"&&(i=re.catalog())!==c.SITE.urls.catalog?.(c.BOARD)){var n=t.parentNode.cloneNode(!0),s=n.firstElementChild;s.href=i,s.textContent=s.hostname===location.hostname?`${z.name} Catalog`:"External Catalog",o.after(t.parentNode,[o.tn(" "),n])}}})}if(c.SITE.software==="yotsuba"&&l["JSON Index"]&&l[`Use ${z.name} Catalog`]&&N.Post.push({name:"Catalog Link Rewrite",cb:this.node}),this.enabled=l["Catalog Links"]){let e;re.el=e=te.checkbox("Header catalog links","Catalog Links"),e.id="toggleCatalog";const t=o("input",e);return o.on(t,"change",this.toggle),o.sync("Header catalog links",re.set),x.menu.addEntry({el:e,order:95})}},node(){for(var e of L("a",this.nodes.comment)){var t;(t=e.href.match(/^https?:\/\/(boards\.4chan(?:nel)?\.org\/[^\/]+)\/catalog(#s=.*)?/))&&(e.href=`//${t[1]}/${t[2]||"#catalog"}`)}},toggle(){return o.event("CloseMenu"),o.set("Header catalog links",this.checked),re.set(this.checked)},set(e){return l["Header catalog links"]=e,re.setLinks(x.boardList),re.setLinks(x.bottomBoardList),re.el.title=`Turn catalog links ${e?"off":"on"}.`,o("input",re.el).checked=e},setLinks(e){if(!(re.enabled??l["Catalog Links"])||!e)return;const t=/(?:index)?(?:\.\w+)?$/;for(var i of L("a:not([data-only])",e)){var{siteID:n,boardID:s}=i.dataset;if(!n||!s){var r;if({siteID:n,boardID:s,VIEW:r}=lt.parseURL(i),!n||!s||!["index","catalog"].includes(r)||!i.dataset.indexOptions&&i.href.replace(t,"")!==(F.url(r,{siteID:n,boardID:s})||"").replace(t,""))continue;o.extend(i.dataset,{siteID:n,boardID:s})}var a={siteID:n,boardID:s},h=l["Header catalog links"]?re.catalog(a):F.url("index",a);h&&(i.href=h,i.dataset.indexOptions&&h.split("#")[0]===F.url("index",a)&&(i.href+=(i.hash?"/":"#")+i.dataset.indexOptions))}},externalParse(){re.externalList=S();for(var e of l.externalCatalogURLs.split(`
`))if(e[0]!=="#"){var t=e.split(";")[0],i=V.parseBoards(e.match(/;boards:([^;]+)/)?.[1]||"*"),n=V.parseBoards(e.match(/;exclude:([^;]+)/)?.[1])||S();for(var s in i)!n[s]&&!n[s.split("/")[0]+"/*"]&&(re.externalList[s]=t)}},external({siteID:e,boardID:t}){re.externalList||re.externalParse();const i=re.externalList[`${e}/${t}`]||re.externalList[`${e}/*`];if(i)return i.replace(/%board/g,t)},jsonIndex(e,t){return c.SITE.ID===e.siteID&&c.BOARD.ID===e.boardID&&c.VIEW==="index"?t:F.url("index",e)+t},catalog(e=c.BOARD){let t,i;return l["External Catalog"]&&(t=re.external(e))?t:p.enabledOn(e)&&l[`Use ${z.name} Catalog`]?re.jsonIndex(e,"#catalog"):(i=F.url("catalog",e))?i:re.external(e)},index(e=c.BOARD){return p.enabledOn(e)?re.jsonIndex(e,"#index"):F.url("index",e)}},x={init(){o.onExists(w,"body",()=>{if(D.isThisPageLegit())return o.add(this.bar,[this.noticesRoot,this.toggle]),o.prepend(m.body,this.bar),o.add(m.body,x.hover),this.setBarPosition(l["Bottom Header"])}),this.menu=new te.Menu("header");const e=o.el("span",{className:"menu-button"});q.set(e,"caretDown","Menu");const t=te.checkbox,i=t("Fixed Header","Fixed Header"),n=t("Header auto-hide","Auto-hide header"),s=t("Header auto-hide on scroll","Auto-hide header on scroll"),r=t("Bottom Header","Bottom header"),a=t("Centered links","Centered links"),h=t("Custom Board Navigation","Custom board navigation"),u=t("Bottom Board List","Hide bottom board list"),f=t("Shortcut Icons","Shortcut Icons"),g=o.el("a",{textContent:"Edit custom board navigation",href:"javascript:;"});if(this.barFixedToggler=i.firstElementChild,this.scrollHeaderToggler=s.firstElementChild,this.barPositionToggler=r.firstElementChild,this.linkJustifyToggler=a.firstElementChild,this.headerToggler=n.firstElementChild,this.footerToggler=u.firstElementChild,this.shortcutToggler=f.firstElementChild,this.customNavToggler=h.firstElementChild,o.on(e,"click",this.menuToggle),o.on(this.headerToggler,"change",this.toggleBarVisibility),o.on(this.barFixedToggler,"change",this.toggleBarFixed),o.on(this.barPositionToggler,"change",this.toggleBarPosition),o.on(this.scrollHeaderToggler,"change",this.toggleHideBarOnScroll),o.on(this.linkJustifyToggler,"change",this.toggleLinkJustify),o.on(this.footerToggler,"change",this.toggleFooterVisibility),o.on(this.shortcutToggler,"change",this.toggleShortcutIcons),o.on(this.customNavToggler,"change",this.toggleCustomNav),o.on(g,"click",this.editCustomNav),this.setBarFixed(l["Fixed Header"]),this.setHideBarOnScroll(l["Header auto-hide on scroll"]),this.setBarVisibility(l["Header auto-hide"]),this.setLinkJustify(l["Centered links"]),this.setShortcutIcons(l["Shortcut Icons"]),this.setFooterVisibility(l["Bottom Board List"]),o.sync("Fixed Header",this.setBarFixed),o.sync("Header auto-hide on scroll",this.setHideBarOnScroll),o.sync("Bottom Header",this.setBarPosition),o.sync("Shortcut Icons",this.setShortcutIcons),o.sync("Header auto-hide",this.setBarVisibility),o.sync("Centered links",this.setLinkJustify),o.sync("Bottom Board List",this.setFooterVisibility),this.addShortcut("menu",e,900),this.menu.addEntry({el:o.el("span",{textContent:"Header"}),order:107,subEntries:[{el:i},{el:n},{el:s},{el:r},{el:a},{el:u},{el:f},{el:h},{el:g}]}),o.on(m,"CreateNotification",this.createNotification),this.setBoardList(),o.onExists(w,`${c.SITE.selectors.boardList} + *`,x.generateFullBoardList),D.ready(function(){let b;if(c.SITE.software==="yotsuba"&&!(b=o.id("boardNavDesktopFoot"))){let T;if(!(T=o.id("absbot")))return;b=o.id("boardNavDesktop").cloneNode(!0),b.id="boardNavDesktopFoot",o("#navtopright",b).id="navbotright",o("#settingsWindowLink",b).id="settingsWindowLinkBot",o.before(T,b),o.global("stubCloneTopNav")}if(x.bottomBoardList=o(c.SITE.selectors.boardListBottom)){for(var I of L("a",x.bottomBoardList))I.hostname===location.hostname&&I.pathname.split("/")[1]===c.BOARD.ID&&(I.className="current");return re.setLinks(x.bottomBoardList)}}),c.SITE.software==="yotsuba"&&(c.VIEW==="catalog"||!l["Disable Native Extension"])){const b=o.el("a",{href:"javascript:;"});c.VIEW==="catalog"?(b.title=b.textContent="Catalog Settings",q.set(b,"bookOpen","Catalog Settings"),this.addShortcut("native",b,810)):(b.title=b.textContent="4chan Settings",b.className="native-settings",this.addShortcut("native",b,810)),o.on(b,"click",()=>o.id("settingsWindowLink").click())}return this.enableDesktopNotifications()},bar:o.el("div",{id:"header-bar"}),noticesRoot:o.el("div",{id:"notifications"}),shortcuts:o.el("span",{id:"shortcuts"}),hover:o.el("div",{id:"hoverUI"}),toggle:o.el("div",{id:"scroll-marker"}),setBoardList(){let e;x.boardList=e=o.el("span",{id:"board-list"}),o.extend(e,{innerHTML:'<span id="custom-board-list"></span><span id="full-board-list" hidden><span class="hide-board-list-container brackets-wrap"><a href="javascript:;" class="hide-board-list-button">&nbsp;-&nbsp;</a></span> <span class="boardList"></span></span>'});const t=o(".hide-board-list-button",e);return o.on(t,"click",x.toggleBoardList),o.prepend(x.bar,[x.boardList,x.shortcuts]),x.setCustomNav(l["Custom Board Navigation"]),x.generateBoardList(l.boardnav),o.sync("Custom Board Navigation",x.setCustomNav),o.sync("boardnav",x.generateBoardList)},generateFullBoardList(){let e;c.SITE.transformBoardList?e=c.SITE.transformBoardList():e=[...o(c.SITE.selectors.boardList).cloneNode(!0).childNodes];const t=o(".boardList",x.boardList);o.add(t,e);for(var i of L("a",t))i.hostname===location.hostname&&i.pathname.split("/")[1]===c.BOARD.ID&&(i.className="current");return re.setLinks(t)},generateBoardList(e){const t=o("#custom-board-list",x.boardList);if(o.rmAll(t),!e)return;e=e.replace(/(\r\n|\n|\r)/g," ");const i=e.split(/(\{\{(?:"[^"]+")?|\}\})/),n=[];let s=t;return i.forEach(r=>{if(r.startsWith("{{")){const a=o.el("span");o.add(s,a),n.push(a),s=a,r.length>2&&(a.className=r.slice(3,-1))}else if(r==="}}")n.pop(),s=n.length>0?n[n.length-1]:t;else{const a=/[\w@]+(-(all|title|replace|full|index|catalog|archive|expired|nt|(mode|sort|text):"[^"]+"(,"[^"]+")?))*|[^\w@]+/g;(r.match(a)||[]).map(u=>x.mapCustomNavigation(u)).forEach(u=>s.appendChild(u))}}),re.setLinks(t)},mapCustomNavigation(e){let t,i,n,s;if(/^[^\w@]/.test(e))return o.tn(e);let r=s=null;e=e.replace(/-text:"([^"]+)"(?:,"([^"]+)")?/g,function(u,f,g){return r=f,s=g,""});let a=[];if(e=e.replace(/-(?:mode|sort):"([^"]+)"/g,function(u,f){return a.push(f.toLowerCase().replace(/\ /g,"-")),""}),a=a.join("/"),/^toggle-all/.test(e))return t=o.el("a",{className:"show-board-list-button",textContent:r||"+",href:"javascript:;"}),o.on(t,"click",x.toggleBoardList),t;if(/^external/.test(e))return t=o.el("a",{href:s||"javascript:;",textContent:r||"+",className:"external"}),/-nt/.test(e)&&(t.target="_blank",t.rel="noopener"),t;let h=e.split("-")[0];if(h==="current")if(["boards.4chan.org","boards.4channel.org"].includes(location.hostname))h=c.BOARD.ID;else return t=o.el("a",{href:`/${c.BOARD.ID}/`,textContent:r||decodeURIComponent(c.BOARD.ID),className:"current"}),/-nt/.test(e)&&(t.target="_blank",t.rel="noopener"),/-index/.test(e)?t.dataset.only="index":/-catalog/.test(e)?(t.dataset.only="catalog",t.href+="catalog.html"):/-(archive|expired)/.test(e)&&(t=t.firstChild),t;if(t=function(){let u;return h==="@"?o.el("a",{href:"https://twitter.com/4chan",title:"4chan Twitter",className:"navSmall",textContent:"@"}):(t=o.el("a",{href:`//${fe.domain(h)}/${h}/`,textContent:h,title:fe.title(h)}),["catalog","archive"].includes(c.VIEW)&&(u=F.url(c.VIEW,{siteID:"4chan.org",boardID:h}))&&(t.href=u),t.hostname===location.hostname&&h===c.BOARD.ID&&(t.className="current"),t)}(),t.textContent=/-title/.test(e)||/-replace/.test(e)&&t.hostname===location.hostname&&h===c.BOARD.ID?t.title||t.textContent:/-full/.test(e)?`/${h}/`+(t.title?` - ${t.title}`:""):r||h,n=e.match(/-(index|catalog)/)){const u=re[n[1]]({siteID:"4chan.org",boardID:h});if(u)t.dataset.only=n[1],t.href=u,n[1]==="catalog"&&o.addClass(t,"catalog");else return t.firstChild}if(l["JSON Index"]&&a&&(t.dataset.indexOptions=a,["boards.4chan.org","boards.4channel.org"].includes(t.hostname)&&t.pathname.split("/")[2]===""&&(t.href+=(t.hash?"/":"#")+a)),/-archive/.test(e))if(i=Y.to("board",{boardID:h}))t.href=i;else return t.firstChild;if(/-expired/.test(e))if(fe.isArchived(h))t.href=`//${fe.domain(h)}/${h}/archive`;else return t.firstChild;return/-nt/.test(e)&&(t.target="_blank",t.rel="noopener"),t},toggleBoardList(){const{bar:e}=x,t=o("#custom-board-list",e),i=o("#full-board-list",e),n=!i.hidden;return t.hidden=!n,i.hidden=n},setLinkJustify(e){return x.linkJustifyToggler.checked=e,e?o.addClass(w,"centered-links"):o.rmClass(w,"centered-links")},toggleLinkJustify(){o.event("CloseMenu");const e=this.nodeName==="INPUT"?this.checked:void 0;return x.setLinkJustify(e),o.set("Centered links",e)},setBarFixed(e){return x.barFixedToggler.checked=e,e?(o.addClass(w,"fixed"),o.addClass(x.bar,"dialog")):(o.rmClass(w,"fixed"),o.rmClass(x.bar,"dialog"))},toggleBarFixed(){return o.event("CloseMenu"),x.setBarFixed(this.checked),l["Fixed Header"]=this.checked,o.set("Fixed Header",this.checked)},setShortcutIcons(e){return x.shortcutToggler.checked=e,e?o.addClass(w,"shortcut-icons"):o.rmClass(w,"shortcut-icons")},toggleShortcutIcons(){return o.event("CloseMenu"),x.setShortcutIcons(this.checked),l["Shortcut Icons"]=this.checked,o.set("Shortcut Icons",this.checked)},setBarVisibility(e){return x.headerToggler.checked=e,o.event("CloseMenu"),(e?o.addClass:o.rmClass)(x.bar,"autohide"),(e?o.addClass:o.rmClass)(w,"autohide")},toggleBarVisibility(){const e=this.nodeName==="INPUT"?this.checked:!o.hasClass(x.bar,"autohide");l["Header auto-hide"]=e,o.set("Header auto-hide",e),x.setBarVisibility(e);const t=`The header bar will ${e?"automatically hide itself.":"remain visible."}`;return new G("info",t,2)},setHideBarOnScroll(e){if(x.scrollHeaderToggler.checked=e,e){o.on(window,"scroll",x.hideBarOnScroll);return}return o.off(window,"scroll",x.hideBarOnScroll),o.rmClass(x.bar,"scroll"),x.bar.classList.toggle("autohide",l["Header auto-hide"])},toggleHideBarOnScroll(){const e=this.checked;return o.cb.checked.call(this),x.setHideBarOnScroll(e)},hideBarOnScroll(){const e=window.pageYOffset;return e>(x.previousOffset||0)?o.addClass(x.bar,"autohide","scroll"):o.rmClass(x.bar,"autohide","scroll"),x.previousOffset=e},setBarPosition(e){x.barPositionToggler&&(x.barPositionToggler.checked=e),o.event("CloseMenu");const t=e?["bottom-header","top-header","after"]:["top-header","bottom-header","add"];return o.addClass(w,t[0]),o.rmClass(w,t[1]),o[t[2]](x.bar,x.noticesRoot)},toggleBarPosition(){return o.cb.checked.call(this),x.setBarPosition(this.checked)},setFooterVisibility(e){return x.footerToggler.checked=e,w.classList.toggle("hide-bottom-board-list",e)},toggleFooterVisibility(){o.event("CloseMenu");const e=this.nodeName==="INPUT"?this.checked:o.hasClass(w,"hide-bottom-board-list");x.setFooterVisibility(e),o.set("Bottom Board List",e);const t=e?"The bottom navigation will now be hidden.":"The bottom navigation will remain visible.";return new G("info",t,2)},setCustomNav(e){x.customNavToggler.checked=e;const t=o("#custom-board-list",x.bar),i=o("#full-board-list",x.bar),n=o(".hide-board-list-container",i);return[t.hidden,i.hidden,n.hidden]=e?[!1,!0,!1]:[!0,!1,!0]},toggleCustomNav(){return o.cb.checked.call(this),x.setCustomNav(this.checked)},editCustomNav(){$.open("Advanced");const e=o.id("fourchanx-settings");return o("[name=boardnav]",e).focus()},scrollTo(e,t=!1,i=!1){let n,s;if(e.offsetParent){if(t){if(s=x.getBottomOf(e),l["Fixed Header"]&&l["Header auto-hide on scroll"]&&l["Bottom header"]&&({height:n}=x.bar.getBoundingClientRect(),s<=0?x.isHidden()||(s+=n):x.isHidden()&&(s-=n)),!i||s<0)return window.scrollBy(0,-s)}else if(s=x.getTopOf(e),l["Fixed Header"]&&l["Header auto-hide on scroll"]&&!l["Bottom header"]&&({height:n}=x.bar.getBoundingClientRect(),s>=0?x.isHidden()||(s+=n):x.isHidden()&&(s-=n)),!i||s<0)return window.scrollBy(0,s)}},scrollToIfNeeded(e,t){return x.scrollTo(e,t,!0)},getTopOf(e){let{top:t}=e.getBoundingClientRect();if(l["Fixed Header"]&&!l["Bottom Header"]){const i=x.toggle.getBoundingClientRect();t-=i.top+i.height}return t},getBottomOf(e){const{clientHeight:t}=w;let i=t-e.getBoundingClientRect().bottom;if(l["Fixed Header"]&&l["Bottom Header"]){const n=x.toggle.getBoundingClientRect();i-=t-n.bottom+n.height}return i},isNodeVisible(e){if(m.hidden||!w.contains(e))return!1;const{height:t}=e.getBoundingClientRect();return x.getTopOf(e)+t>=0&&x.getBottomOf(e)+t>=0},isHidden(){const{top:e}=x.bar.getBoundingClientRect();return l["Bottom header"]?e===w.clientHeight:e<0},addShortcut(e,t,i){const n=o.el("span",{id:`shortcut-${e}`,className:"shortcut brackets-wrap"});o.add(n,t),n.dataset.index=i.toString();for(var s of L("[data-index]",x.shortcuts))if(+s.dataset.index>+i){o.before(s,n);return}return o.add(x.shortcuts,n)},rmShortcut(e){return o.rm(e.parentElement)},menuToggle(e){return x.menu.toggle(e,this,c)},createNotification(e){const{type:t,content:i,lifetime:n}=e.detail;return new G(t,i,n)},areNotificationsEnabled:!1,enableDesktopNotifications(){let e;if(!window.Notification||!l["Desktop Notifications"])return;switch(Notification.permission){case"granted":x.areNotificationsEnabled=!0;return;case"denied":return}const t=o.el("span",{innerHTML:`${z.name} needs your permission to show desktop notifications. [<a href="${oe(z.upstreamFaq)}#why-is-4chan-x-asking-for-permission-to-show-desktop-notifications" target="_blank">FAQ</a>]<br><button>Authorize</button> or <button>Disable</button>`}),[i,n]=L("button",t);return o.on(i,"click",()=>Notification.requestPermission(function(s){if(x.areNotificationsEnabled=s==="granted",s!=="default")return e.close()})),o.on(n,"click",function(){return o.set("Desktop Notifications",!1),e.close()}),e=new G("info",t)}};class G{constructor(t,i,n,s){this.add=this.add.bind(this),this.close=this.close.bind(this),this.timeout=n,this.onclose=s,this.el=o.el("div",{innerHTML:`<a href="javascript:;" class="close" title="Close">${q.get("xmark")}</a><div class="message"></div>`}),this.el.style.opacity=0,this.setType(t),o.on(this.el.firstElementChild,"click",this.close),typeof i=="string"&&(i=o.tn(i)),o.add(this.el.lastElementChild,i),o.ready(this.add)}setType(t){this.el.className=`notification ${t}`}add(){if(!this.closed){if(m.hidden){o.on(m,"visibilitychange",this.add);return}o.off(m,"visibilitychange",this.add),o.add(x.noticesRoot,this.el),this.el.clientHeight,this.el.style.opacity=1,this.timeout&&(this.timeoutId=setTimeout(this.close,this.timeout*ie))}}close(){this.timeoutId&&clearTimeout(this.timeoutId),this.closed=!0,o.off(m,"visibilitychange",this.add),o.rm(this.el),this.onclose?.()}resetTimer(){this.timeout&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(this.close,this.timeout*ie))}}var Ms=[{uid:3,name:"4plebs",domain:"archive.4plebs.org",http:!0,https:!0,software:"foolfuuka",boards:["adv","f","hr","mlpol","mo","o","pol","s4s","sp","tg","trv","tv","x"],files:["adv","f","hr","mlpol","mo","o","pol","s4s","sp","tg","trv","tv","x"],reports:!0},{uid:10,name:"warosu",domain:"warosu.org",http:!1,https:!0,software:"fuuka",boards:["3","biz","cgl","ck","diy","fa","ic","jp","lit","sci","vr","vt"],files:["3","biz","cgl","ck","diy","fa","ic","jp","lit","sci","vr","vt"],search:["biz","cgl","ck","diy","fa","ic","jp","lit","sci","vr","vt"]},{uid:23,name:"Desuarchive",domain:"desuarchive.org",http:!0,https:!0,software:"foolfuuka",boards:["a","aco","an","c","cgl","co","d","fit","g","his","int","k","m","mlp","mu","q","qa","r9k","tg","trash","vr","wsg"],files:["a","aco","an","c","cgl","co","d","fit","g","his","int","k","m","mlp","mu","q","qa","r9k","tg","trash","vr"],reports:!0},{uid:24,name:"fireden.net",domain:"boards.fireden.net",http:!1,https:!0,software:"foolfuuka",boards:["cm","co","ic","sci","vip","y"],files:["cm","co","ic","sci","vip","y"],search:["cm","co","ic","sci","y"]},{uid:25,name:"not arch.b4k.co",domain:"arch.b4k.dev",http:!0,https:!0,software:"foolfuuka",boards:["g","mlp","qb","v","vg","vm","vmg","vp","vrpg","vst"],files:["qb","v","vg","vm","vmg","vp","vrpg","vst"],search:["qb","v","vg","vm","vmg","vp","vrpg","vst"]},{uid:29,name:"Archived.Moe",domain:"archived.moe",http:!0,https:!0,software:"foolfuuka",boards:["3","a","aco","adv","an","asp","b","bant","biz","c","can","cgl","ck","cm","co","cock","con","d","diy","e","f","fa","fap","fit","fitlit","g","gd","gif","h","hc","his","hm","hr","i","ic","int","jp","k","lgbt","lit","m","mlp","mlpol","mo","mtv","mu","n","news","o","out","outsoc","p","po","pol","pw","q","qa","qb","qst","r","r9k","s","s4s","sci","soc","sp","spa","t","tg","toy","trash","trv","tv","u","v","vg","vint","vip","vm","vmg","vp","vr","vrpg","vst","vt","w","wg","wsg","wsr","x","xs","y"],files:["can","cock","con","fap","fitlit","gd","mlpol","mo","mtv","outsoc","po","q","qb","qst","spa","vint","vip"],search:["aco","adv","an","asp","b","bant","biz","c","can","cgl","ck","cm","cock","con","d","diy","e","f","fap","fitlit","gd","gif","h","hc","his","hm","hr","i","ic","lgbt","lit","mlpol","mo","mtv","n","news","o","out","outsoc","p","po","pw","q","qa","qst","r","s","soc","spa","trv","u","vint","vip","vrpg","w","wg","wsg","wsr","x","y"],reports:!0},{uid:30,name:"TheBArchive.com",domain:"thebarchive.com",http:!0,https:!0,software:"foolfuuka",boards:["b","bant"],files:["b","bant"],reports:!0},{uid:31,name:"Archive Of Sins",domain:"archiveofsins.com",http:!0,https:!0,software:"foolfuuka",boards:["h","hc","hm","i","lgbt","r","s","soc","t","u"],files:["h","hc","hm","i","lgbt","r","s","soc","t","u"],reports:!0},{uid:36,name:"palanq.win",domain:"archive.palanq.win",http:!1,https:!0,software:"foolfuuka",boards:["bant","c","con","e","i","n","news","out","p","pw","qst","toy","vip","vp","vt","w","wg","wsr"],files:["bant","c","e","i","n","news","out","p","pw","qst","toy","vip","vp","vt","w","wg","wsr"],reports:!0},{uid:37,name:"Eientei",domain:"eientei.xyz",http:!1,https:!0,software:"Eientei",boards:["3","i","sci","xs"],files:["3","i","sci","xs"],reports:!0}],Y={archives:Ms,data:null,init(){if(this.selectArchives(),l.archiveAutoUpdate){const e=Date.now();(e-2*Ge>=l.lastarchivecheck||l.lastarchivecheck>e)&&this.update()}},selectArchives(){const e={thread:new Map,threadJSON:new Map,post:new Map,file:new Map},t=S();for(const r of l.archives){for(var i of["boards","files"])r[i]instanceof Array||(r[i]=[]);const{uid:a,name:h,boards:u,files:f,software:g}=r;if(["fuuka","foolfuuka"].includes(g)){t[JSON.stringify(a??h)]=r;for(const b of u)e.thread.has(b)||e.thread.set(b,r),!e.file.has(b)&&f.includes(b)&&e.file.set(b,r),g==="foolfuuka"&&(e.threadJSON.has(b)||e.threadJSON.set(b,r),e.post.has(b)||e.post.set(b,r))}}for(const r in l.selectedArchives){var n=l.selectedArchives[r];for(const[a,h]of Object.entries(n)){var s;(s=t[JSON.stringify(h)])&&o.hasOwn(e,a)&&(a==="file"?s.files:s.boards).includes(r)&&e[a].set(r,s)}}Y.data=e},update(e){let t;const i=[],n=[];let s=0;for(t of l.archiveLists.split(`
`))t[0]!=="#"&&(t=t.trim(),t&&i.push(t));const r=(u,f,g)=>new G("warning",`Error ${f} archive data from
${u}
${g}`,20),a=u=>function(){if(this.status!==200)return r(i[u],"fetching",this.status?`Error ${this.statusText} (${this.status})`:"Connection Error");let{response:f}=this;if(f instanceof Array||(f=[f]),n[u]=f,s++,s===i.length)return Y.parse(n,e)};if(i.length)for(let u=0;u<i.length;u++)if(t=i[u],["[","{"].includes(t[0])){var h;try{h=JSON.parse(t)}catch(f){r(t,"parsing",f.message);continue}a(u).call({status:200,response:h})}else xe.ajax(t,{onloadend:a(u)});else Y.parse([],e)},parse(e,t){const i=[],n=S();for(var s of e)for(var r of s){var a=JSON.stringify(r.uid??r.name);a in n?o.extend(n[a],r):(n[a]=S.clone(r),i.push(r))}const h={archives:i,lastarchivecheck:Date.now()};return o.set(h),o.extend(l,h),Y.selectArchives(),t?.()},to(e,t){const i=(["search","board"].includes(e)?Y.data.thread:Y.data[e]).get(t.boardID);return i?Y[e](i,t):""},protocol(e){let{protocol:t}=location;return o.getOwn(e,t.slice(0,-1))||(t=t==="https:"?"http:":"https:"),`${t}//`},thread(e,{boardID:t,threadID:i,postID:n}){let s=i?`${t}/thread/${i}`:`${t}/post/${n}`;return e.software==="foolfuuka"&&(s+="/"),i&&n&&(s+=e.software==="foolfuuka"?`#${n}`:`#p${n}`),`${Y.protocol(e)}${e.domain}/${s}`},threadJSON(e,{boardID:t,threadID:i}){return`${Y.protocol(e)}${e.domain}/_/api/chan/thread/?board=${t}&num=${i}`},post(e,{boardID:t,postID:i}){const s=`${Y.protocol(e)}${e.domain}/_/api/chan/post/?board=${t}&num=${i}`;return Y.securityCheck(s)?s:""},file(e,{boardID:t,filename:i}){if(!i)return"";if(t==="f")i=encodeURIComponent(o.unescape(decodeURIComponent(i)));else if(/[sm]\.jpg$/.test(i))return"";if(e.name.endsWith("arch.b4k.co")){const[n,s]=i.split(".");n.length>13&&(i=`${n.slice(0,-3)}.${s}`)}return`${Y.protocol(e)}${e.domain}/${t}/full_image/${i}`},board(e,{boardID:t}){return`${Y.protocol(e)}${e.domain}/${t}/`},search(e,{boardID:t,type:i,value:n}){i=i==="name"?"username":i==="MD5"?"image":i,i==="capcode"?n=o.getOwn({Developer:"dev",Verified:"ver"},n)||n.toLowerCase():i==="image"&&(n=n.replace(/[+/=]/g,r=>({"+":"-","/":"_","=":""})[r])),n=encodeURIComponent(n);const s=e.software==="foolfuuka"?`${t}/search/${i}/${n}/`:i==="image"?`${t}/image/${n}`:`${t}/?task=search2&search_${i}=${n}`;return`${Y.protocol(e)}${e.domain}/${s}`},report(e){const t=[];for(var i of l.archives){var{software:n,https:s,reports:r,boards:a,name:h,domain:u}=i;n==="foolfuuka"&&s&&r&&a instanceof Array&&a.includes(e)&&t.push([h,`https://${u}/_/api/chan/offsite_report/`])}return t},securityCheck(e){return/^https:\/\//.test(e)||location.protocol==="http:"||l["Exempt Archives from Encryption"]},navigate(e,t,i){Y.data||Y.init();const n=Y.to(e,t);if(n&&(Y.securityCheck(n)||confirm(`Redirect to ${n}?

Your connection will not be encrypted.`)))return location.replace(n);if(i)return location.replace(i)}};class Fs{toString(){return this.ID}constructor(t){this.nodes={root:t,thumb:o(c.SITE.selectors.catalog.thumb,t)},this.siteID=c.SITE.ID,this.boardID=this.nodes.thumb.parentNode.pathname.split(/\/+/)[1],this.board=c.boards[this.boardID]||new tt(this.boardID),this.ID=this.threadID=+(t.dataset.id||t.id).match(/\d*$/)[0],this.thread=this.board.threads.get(this.ID)||new Ye(this.ID,this.board)}}const $s={init(){if(l.Anonymize)return o.addClass(w,"anonymize")}};var bt={init(){if(["index","thread"].includes(c.VIEW)&&(l["Image Hover"]&&N.Post.push({name:"Image Hover",cb:this.node}),l["Image Hover in Catalog"]))return N.CatalogThread.push({name:"Image Hover",cb:this.catalogNode})},node(){return this.files.filter(e=>(e.isImage||e.isVideo)&&e.thumb).map(e=>o.on(e.thumb,"mouseover",bt.mouseover(this,e)))},catalogNode(){const e=this.thread.OP.files[0];if(!(!e||!e.isImage&&!e.isVideo))return o.on(this.nodes.thumb,"mouseover",bt.mouseover(this.thread.OP,e))},mouseover(e,t){return function(i){let n,s,r;if(!w.contains(this))return;const{isVideo:a}=t;if(t.isExpanding||t.isExpanded||c.SITE.isThumbExpanded?.(t))return;const h=bt.error(e,t);if(ee.cache?.dataset.fileID===`${e.fullID}.${t.index}`?(n=ee.popCache(),o.on(n,"error",h)):(n=o.el(a?"video":"img"),n.dataset.fileID=`${e.fullID}.${t.index}`,o.on(n,"error",h),n.src=t.url),l["Restart when Opened"]&&(ee.rewind(n),ee.rewind(this)),n.id="ihover",o.add(x.hover,n),a&&(n.loop=!0,n.controls=!1,be.setup(n),l.Autoplay&&(n.play(),this.nodeName==="VIDEO"&&(this.currentTime=n.currentTime))),t.dimensions){[r,s]=t.dimensions.split("x").map(b=>+b);const u=w.clientWidth,f=w.clientHeight-te.hover.padding,g=Math.min(1,u/r,f/s);r*=g,s*=g,n.style.maxWidth=`${r}px`,n.style.maxHeight=`${s}px`}return te.hover({root:this,el:n,latestEvent:i,endEvents:"mouseout click",height:s,width:r,noRemove:!0,cb(){return o.off(n,"error",h),ee.pushCache(n),ee.pause(n),o.rm(n),n.removeAttribute("style")}})}},error(e,t){return function(){if(!ee.decodeError(this,t))return ee.error(this,e,t,3*ie,i=>i?this.src=i+(this.src===i?"?"+Date.now():""):o.rm(this))}}},Pe={init(){if(!["index","thread","archive"].includes(c.VIEW))return;const e=l["Replace JPG"]||l["Replace PNG"]||l["Replace GIF"]||l["Replace WEBM"];if(!l["Image Prefetching"]&&!e||(N.Post.push({name:"Image Replace",cb:this.node}),o.on(m,"PostsInserted",function(){if(Pe.prefetchEnabled||e)return c.posts.forEach(Pe.prefetchAll)}),l["Replace WEBM"]&&o.on(m,"scroll visibilitychange 4chanXInitFinished PostsInserted",this.playVideos),!l["Image Prefetching"]||!["index","thread"].includes(c.VIEW)))return;const t=o.el("a",{href:"javascript:;",title:"Prefetch Images",className:"disabled"});return q.set(t,"bolt","Prefetch"),o.on(t,"click",this.toggle),x.addShortcut("prefetch",t,525)},node(){if(!this.isClone)for(var e of this.files)l["Replace WEBM"]&&e.isVideo&&Pe.replaceVideo(this,e),Pe.prefetch(this,e)},replaceVideo(e,t){const{thumb:i}=t,n=o.el("video",{preload:"none",loop:!0,muted:!0,poster:i.src||i.dataset.src,textContent:i.alt,className:i.className});n.setAttribute("muted","muted"),n.dataset.md5=i.dataset.md5;for(var s of["height","width","maxHeight","maxWidth"])n.style[s]=i.style[s];return n.src=t.url,o.replace(i,n),t.thumb=n,t.videoThumb=!0},prefetch(e,t){let i,n;const{isImage:s,isVideo:r,thumb:a,url:h}=t;if(t.isPrefetched||!(s||r)||e.isHidden||e.thread.isHidden)return;r?n="WEBM":(n=h.match(/\.([^.]+)$/)?.[1].toUpperCase(),n==="JPEG"&&(n="JPG"));const u=l[`Replace ${n}`]&&!/spoiler/.test(a.src||a.dataset.src);if(!u&&!Pe.prefetchEnabled||o.hasClass(w,"catalog-mode")||![e,...e.clones].some(g=>w.contains(g.nodes.root)))return;if(t.isPrefetched=!0,t.videoThumb){for(i of e.clones)i.file.thumb.preload="auto";a.preload="auto",o.engine==="gecko"&&o.on(a,"loadeddata",function(){return this.removeAttribute("poster")});return}const f=o.el(s?"img":"video");return r&&(f.preload="auto"),u&&s&&o.on(f,"load",function(){for(i of e.clones)i.file.thumb.src=h;return a.src=h}),f.src=h},prefetchAll(e){for(var t of e.files)Pe.prefetch(e,t)},toggle(){Pe.prefetchEnabled=!Pe.prefetchEnabled,this.classList.toggle("disabled",!Pe.prefetchEnabled),Pe.prefetchEnabled&&c.posts.forEach(Pe.prefetchAll)},playVideos(){const e=o.id("qp")?.firstElementChild;return c.posts.forEach(function(t){for(t of[t,...t.clones])for(var i of t.files)if(i.videoThumb){var{thumb:n}=i;x.isNodeVisible(n)||t.nodes.root===e?n.play():n.pause()}})}},vt={init(){if(!(!l["WEBM Metadata"]||!["index","thread"].includes(c.VIEW)))return N.Post.push({name:"WEBM Metadata",cb:this.node})},node(){for(let i=0;i<this.files.length;i++){var e=this.files[i];if(/webm$/i.test(e.url)){var t;this.isClone?t=o(".webm-title",e.text):(t=o.el("span",{className:"webm-title"}),t.dataset.index=i,o.extend(t,{innerHTML:'<a href="javascript:;"></a>'}),o.add(e.text,[o.tn(" "),t])),t.children.length===1&&o.one(t.lastElementChild,"mouseover focus",vt.load)}}},load(){o.rmClass(this.parentNode,"error"),o.addClass(this.parentNode,"loading");const{index:e}=this.parentNode.dataset;return xe.binary(F.postFromNode(this).files[+e].url,t=>{if(o.rmClass(this.parentNode,"loading"),t!=null){const i=vt.parse(t),n=o.el("span",{textContent:i||""});return i==null&&o.addClass(this.parentNode,"not-found"),o.before(this,n),this.parentNode.tabIndex=0,m.activeElement===this&&this.parentNode.focus(),this.tabIndex=-1}else return o.addClass(this.parentNode,"error"),o.one(this,"click",vt.load)},{Range:"bytes=0-9999"})},parse(e){const t=function(){let a=e[i++],h=0;for(;a<128>>h;)h++;for(a^=128>>h;h--&&i<e.length;)a=a<<8^e[i++];return a};for(var i=0;i<e.length;){var n=t(),s=t();if(n===15273){for(var r="";s--&&i<e.length;)r+=String.fromCharCode(e[i++]);return decodeURIComponent(escape(r))}else[139690087,88713574].includes(n)||(i+=s)}return null}};const Os={init(){if(!(!["index","thread","archive"].includes(c.VIEW)||!l["Reveal Spoiler Thumbnails"]))return N.Post.push({name:"Reveal Spoiler Thumbnails",cb:this.node})},node(){if(!this.isClone){for(var e of this.files)if(e.thumb&&e.isSpoiler){var{thumb:t}=e;t.removeAttribute("style"),t.style.maxHeight=t.style.maxWidth=this.isReply?"125px":"250px",t.src?t.src=e.thumbURL:t.dataset.src=e.thumbURL}}}},Hs={init(){if(c.SITE.software!=="yotsuba"||!["index","thread"].includes(c.VIEW)||!l.Menu||!l["Archive Link"])return;const t={el:o.el("div",{textContent:"Archive"}),order:60,open({ID:n,thread:s,board:r}){return!!Y.to("thread",{postID:n,threadID:s.ID,boardID:r.ID})},subEntries:[]};for(var i of[["Post","post"],["Name","name"],["Tripcode","tripcode"],["Capcode","capcode"],["Subject","subject"],["Flag","country"],["Filename","filename"],["Image MD5","MD5"]])t.subEntries.push(this.createSubEntry(i[0],i[1]));return he.menu.addEntry(t)},createSubEntry(e,t){const i=o.el("a",{textContent:e,target:"_blank"});return{el:i,open:t==="post"?function({ID:s,thread:r,board:a}){return i.href=Y.to("thread",{postID:s,threadID:r.ID,boardID:a.ID}),!0}:function(s){const r=t==="country"&&s.info.flagCodeTroll?"troll_country":t,a=t==="country"?s.info.flagCode||s.info.flagCodeTroll?.toLowerCase():V.values(t,s)[0];return a?(i.href=Y.to("search",{boardID:s.board.ID,type:r,value:a,isSearch:!0}),!0):!1}}}};var At={init(){if(!["index","thread"].includes(c.VIEW)||!l.Menu||!l["Copy Text Link"])return;const e=o.el("a",{className:"copy-text-link",href:"javascript:;",textContent:"Copy Text"});return o.on(e,"click",At.copy),he.menu.addEntry({el:e,order:12,open(t){return At.text=(t.origin||t).commentOrig(),!0}})},copy(){const e=o.el("textarea",{className:"copy-text-element",value:At.text});o.add(m.body,e),e.select();try{m.execCommand("copy")}catch{}return o.rm(e)}},_={auto:[S(),S()],init(){if(!["index","thread"].includes(c.VIEW)||!l.Menu||!l["Delete Link"])return;const e=o.el("div",{className:"delete-link",textContent:"Delete"}),t=o.el("a",{className:"delete-post",href:"javascript:;"}),i=o.el("a",{className:"delete-file",href:"javascript:;"});this.nodes={menu:e.firstChild,links:[t,i]};const n={el:t,open(){return t.textContent=_.linkText(!1),o.on(t,"click",_.toggle),!0}},s={el:i,open({file:r}){return!r||r.isDead?!1:(i.textContent=_.linkText(!0),o.on(i,"click",_.toggle),!0)}};return he.menu.addEntry({el:e,order:40,open(r){return r.isDead?!1:(_.post=r,_.nodes.menu.textContent=_.menuText(),_.cooldown.start(r),!0)},subEntries:[n,s]})},menuText(){let e;return(e=_.cooldown.seconds[_.post.fullID])?`Delete (${e})`:"Delete"},linkText(e){let t=e?"File":"Post";return _.auto[+e][_.post.fullID]&&(t=`Deleting ${t.toLowerCase()}...`),t},toggle(){const{post:e}=_,t=o.hasClass(this,"delete-file"),i=_.auto[+t];if(i[e.fullID]?delete i[e.fullID]:i[e.fullID]=!0,this.textContent=_.linkText(t),!_.cooldown.seconds[e.fullID])return _.delete(e,t)},delete(e,t){const i=_.nodes.links[+t];delete _.auto[+t][e.fullID],e.fullID===_.post.fullID&&o.off(i,"click",_.toggle);const n={mode:"usrdel",onlyimgdel:t,pwd:d.persona.getPassword()};return n[+e.ID]="delete",o.ajax(o.id("delform").action.replace(`/${c.BOARD}/`,`/${e.board}/`),{responseType:"document",withCredentials:!0,onloadend(){return _.load(i,e,t,this.response)},form:o.formData(n)})},load(e,t,i,n){let s;if(!n){new G("warning","Connection error, please retry.",20),t.fullID===_.post.fullID&&o.on(e,"click",_.toggle);return}if(e.textContent=_.linkText(i),n.title==="4chan - Banned"){const r=o.el("span",{innerHTML:'You can&#039;t delete posts because you are <a href="//www.4chan.org/banned" target="_blank">banned</a>.'});return new G("warning",r,20)}else if(s=n.getElementById("errmsg")){if(new G("warning",s.textContent,20),t.fullID===_.post.fullID&&o.on(e,"click",_.toggle),d.cooldown.data&&l.Cooldown&&/\bwait\b/i.test(s.textContent))return _.cooldown.start(t,5),_.auto[+i][t.fullID]=!0,_.nodes.links[+i].textContent=_.linkText(i)}else if(i||d.cooldown.delete(t),n.title==="Updating index..."&&(t.origin||t).kill(i),t.fullID===_.post.fullID)return e.textContent="Deleted"},cooldown:{seconds:S(),start(e,t){if(_.cooldown.seconds[e.fullID]==null&&(t==null&&(t=d.cooldown.secondsDeletion(e)),t>0))return _.cooldown.seconds[e.fullID]=t,_.cooldown.count(e)},count(e){if(e.fullID===_.post.fullID&&(_.nodes.menu.textContent=_.menuText()),_.cooldown.seconds[e.fullID]>0&&l.Cooldown)_.cooldown.seconds[e.fullID]--,setTimeout(_.cooldown.count,1e3,e);else{delete _.cooldown.seconds[e.fullID];for(var t of[!1,!0])_.auto[+t][e.fullID]&&_.delete(e,t)}}}};const qs={init(){if(!["index","thread"].includes(c.VIEW)||!l.Menu||!l["Download Link"])return;const e=o.el("a",{className:"download-link",textContent:"Download file"});return o.on(e,"click",ee.download),he.menu.addEntry({el:e,order:100,open({file:t}){return t?(e.href=t.url,e.download=t.name,!0):!1}})}};var st={init(){if(!["index","thread"].includes(c.VIEW)||!l.Menu||!l["Report Link"])return;const e=o.el("a",{className:"report-link",href:"javascript:;",textContent:"Report"});return o.on(e,"click",st.report),he.menu.addEntry({el:e,order:10,open(t){return st.url=`//sys.${location.hostname.split(".")[1]}.org/${t.board}/imgboard.php?mode=report&no=${t}`,m.cookie.indexOf("pass_enabled=1")>=0?st.dims="width=350,height=275":st.dims="width=400,height=550",!0}})},report(){const{url:e,dims:t}=st,i=Date.now(),n=`toolbar=0,scrollbars=1,location=0,status=1,menubar=0,resizable=1,${t}`;return window.open(e,i,n)}},xt={init(){if(l["Disable Autoplaying Sounds"]){o.addClass(w,"anti-autoplay");for(var e of L("audio[autoplay]",w))this.stop(e);return window.addEventListener("loadstart",t=>this.stop(t.target),!0),N.Post.push({name:"Disable Autoplaying Sounds",cb:this.node}),o.ready(()=>this.process(m.body))}},stop(e){if(e.autoplay&&(e.pause(),e.autoplay=!1,!e.controls))return e.controls=!0,o.addClass(e,"controls-added")},node(){return xt.process(this.nodes.comment)},process(e){for(var t of L('iframe[src*="youtube"][src*="autoplay=1"]',e))xt.processVideo(t,"src");for(var i of L('object[data*="youtube"][data*="autoplay=1"]',e))xt.processVideo(i,"data")},processVideo(e,t){return e[t]=e[t].replace(/\?autoplay=1&?/,"?").replace("&autoplay=1",""),window.getComputedStyle(e).display==="none"&&(e.style.display="block"),o.addClass(e,"autoplay-removed")}},me={init(){if(l["Custom Board Titles"]&&(this.db=new De("customTitles",null,!0)),o.asap(()=>m.body,()=>o.asap(()=>o("hr"),me.ready)),c.BOARD.ID!=="f")return D.ready(()=>o.queueTask(me.load))},ready(){const e=o(".boardBanner"),{children:t}=e;if(c.VIEW==="thread"&&l["Remove Thread Excerpt"]&&me.setTitle(t[1].textContent),t[0].title="Click to change",o.on(t[0],"click",me.cb.toggle),l["Custom Board Titles"]&&(me.custom(t[1]),t[2]))return me.custom(t[2])},load(){const e=o.id("bannerCnt");if(!e.firstChild){const t=o.el("img",{alt:"4chan",src:"//s.4cdn.org/image/title/"+e.dataset.src});return o.add(e,t)}},setTitle(e){return A.title!=null?(A.title=e,A.update()):m.title=e},cb:{toggle(){me.choices?.length||(me.choices=l.knownBanners.split(",").slice());const e=Math.floor(me.choices.length*Math.random()),t=me.choices.splice(e,1);return o("img",this.parentNode).src=`//s.4cdn.org/image/title/${t}`},click(e){if(!(!e.ctrlKey&&!e.metaKey)){me.original[this.className]==null&&(me.original[this.className]=this.cloneNode(!0)),this.contentEditable=!0;for(var t of L("br",this))o.replace(t,o.tn(`
`));return this.focus()}},keydown(e){if(e.stopPropagation(),!e.shiftKey&&e.keyCode===13)return this.blur()},blur(){for(var e of L("br",this))o.replace(e,o.tn(`
`));return(this.textContent=this.textContent.replace(/\n*$/,""))?(this.contentEditable=!1,me.db.set({boardID:c.BOARD.ID,threadID:this.className,val:{title:this.textContent,orig:me.original[this.className].textContent}})):(o.rmAll(this),o.add(this,[...me.original[this.className].cloneNode(!0).childNodes]),me.db.delete({boardID:c.BOARD.ID,threadID:this.className}))}},original:S(),custom(e){let t;const{className:i}=e;e.title=`Ctrl/\u2318+click to edit board ${i.slice(5).toLowerCase()}`,e.spellcheck=!1;for(var n of["click","keydown","blur"])o.on(e,n,me.cb[n]);if(t=me.db.get({boardID:c.BOARD.ID,threadID:i}))return l["Persistent Custom Board Titles"]||t.orig===e.textContent?(me.original[i]=e.cloneNode(!0),e.textContent=t.title):me.db.delete({boardID:c.BOARD.ID,threadID:i})}},jt={init(){if(c.BOARD.ID==="f"&&l["Enable Native Flash Embedding"])return o.ready(jt.initReady)},initReady(){o.hasStorage?o.global("initFlash"):(c.VIEW==="thread"&&o.global("setThreadId"),o.global("initFlashNoStorage"))}},dt={init(){if(!(c.SITE.software!=="yotsuba"||!["index","thread","archive"].includes(c.VIEW)))return fe.ready(this.initBoard),D.ready(this.initReady)},initBoard(){if(c.BOARD.config.code_tags&&(o.on(window,"prettyprint:cb",function(e){let t,i;if((t=c.posts.get(e.detail.ID))&&(i=L(".prettyprint",t.nodes.comment)[+e.detail.i])&&!o.hasClass(i,"prettyprinted"))return i.innerHTML=e.detail.html,o.addClass(i,"prettyprinted")}),o.global("fourChanPrettyPrintListener"),N.Post.push({name:"Parse [code] tags",cb:dt.code}),c.posts.forEach(function(e){if(e.callbacksExecuted)return N.Post.execute(e,["Parse [code] tags"],!0)}),Ee.callbacks.push(dt.code)),c.BOARD.config.math_tags)return o.global("fourChanMathjaxListener"),N.Post.push({name:"Parse [math] tags",cb:dt.math}),c.posts.forEach(function(e){if(e.callbacksExecuted)return N.Post.execute(e,["Parse [math] tags"],!0)}),Ee.callbacks.push(dt.math)},initReady(){return o.global("disable4chanIdHl")},code(){if(!this.isClone)return o.ready(()=>{const e=L(".prettyprint",this.nodes.comment);for(let i=0;i<e.length;i++){var t=e[i];o.hasClass(t,"prettyprinted")||o.event("prettyprint",{ID:this.fullID,i,html:t.innerHTML},window)}})},math(){let e;if(/\[(math|eqn)\]/.test(this.nodes.comment.textContent)){if((e=L("wbr",this.nodes.comment)).length){for(var t of e)o.rm(t);this.nodes.comment.normalize()}var i=()=>{if(w.contains(this.nodes.comment))return o.off(m,"PostsInserted",i),o.event("mathjax",null,this.nodes.comment)};return o.on(m,"PostsInserted",i),i()}}},Dt={init(){if(!(!["index","thread"].includes(c.VIEW)||!l["Color User IDs"]))return this.ids=S(),this.ids.Heaven=[0,0,0,"#fff"],N.Post.push({name:"Color User IDs",cb:this.node})},node(){let e,t;if(this.isClone||!((t=this.info.uniqueID)&&(e=this.nodes.uniqueID)))return;const i=Dt.ids[t]||Dt.compute(t),{style:n}=e;return n.color=i[3],n.backgroundColor=`rgb(${i[0]},${i[1]},${i[2]})`,o.addClass(e,"painted")},compute(e){const t=c.SITE.uidColor?c.SITE.uidColor(e):parseInt(e,16),i=[t>>16&255,t>>8&255,t&255];return i.push(o.luma(i)>125?"#000":"#fff"),this.ids[e]=i}},_e={init(){if(["index","thread"].includes(c.VIEW))return N.Post.push({name:"Highlight by User ID",cb:this.node})},uniqueID:null,node(){if(this.nodes.uniqueIDRoot&&o.on(this.nodes.uniqueIDRoot,"click",_e.click(this)),this.nodes.capcode&&o.on(this.nodes.capcode,"click",_e.click(this)),!this.isClone)return _e.set(this)},set(e){const t=(e.info.uniqueID||e.info.capcode)===_e.uniqueID;return o[t?"addClass":"rmClass"](e.nodes.post,"highlight")},click(e){return function(){const t=e.info.uniqueID||e.info.capcode;return _e.uniqueID=_e.uniqueID===t?null:t,c.posts.forEach(_e.set)}}},ct={init(){if(!(c.VIEW!=="thread"||!l["Count Posts by ID"]))return N.Thread.push({name:"Count Posts by ID",cb(){return ct.thread=this}}),N.Post.push({name:"Count Posts by ID",cb:this.node})},node(){if(this.nodes.uniqueID&&this.thread===ct.thread)return o.on(this.nodes.uniqueID,"mouseover",ct.count)},count(){const{uniqueID:e}=F.postFromNode(this).info;let t=0;return ct.thread.posts.forEach(function(i){if(i.info.uniqueID===e)return t++}),this.title=`${t} post${t===1?"":"s"} by this ID`}},Ke={init(){if(!(c.SITE.software!=="yotsuba"||!["index","thread"].includes(c.VIEW)))return N.Post.push({name:"Mod Contact Links",cb:this.node})},node(){let e;if(this.isClone||!o.hasOwn(Ke.specific,this.info.capcode))return;const t=o.el("span",{className:"contact-links brackets-wrap"});if(o.extend(t,Ke.template(this.info.capcode)),o.after(this.nodes.capcode,t),(e=this.info.comment.match(/This thread was moved to >>>\/(\w+)\//))&&o.hasOwn(Ke.moveNote,e[1])){const i=o.el("div",{className:"move-note"});return o.extend(i,Ke.moveNote[e[1]]),o.add(this.nodes.post,i)}},template(e){return{innerHTML:'<a href="https://www.4chan.org/feedback" target="_blank">feedback</a>'+Ke.specific[e]().innerHTML}},specific:{Mod(){return{innerHTML:' <a href="https://www.4chan-x.net/4chan-irc.html" target="_blank">IRC</a>'}},Manager(){return Ke.specific.Mod()},Developer(){return{innerHTML:' <a href="https://github.com/4chan" target="_blank">github</a>'}},Admin(){return{innerHTML:' <a href="https://twitter.com/hiroyuki_ni" target="_blank">twitter</a>'}}},moveNote:{qa:{innerHTML:'Moving a thread to /qa/ does not imply mods will read it. If you wish to contact mods, use <a href="https://www.4chan.org/feedback" target="_blank">feedback</a><span class="invisible"> (https://www.4chan.org/feedback)</span> or <a href="https://www.4chan-x.net/4chan-irc.html" target="_blank">IRC</a><span class="invisible"> (https://www.4chan-x.net/4chan-irc.html)</span>.'}}};const Us={init(){if(!l["Normalize URL"])return;let e=location.pathname.split(/\/+/);if(c.SITE.software==="yotsuba")switch(c.VIEW){case"thread":e[2]="thread",e=e.slice(0,4);break;case"index":e=e.slice(0,3);break}if(e=e.join("/"),location.pathname!==e)return history.replaceState(history.state,"",`${location.protocol}//${location.host}${e}${location.hash}`)}};var Ue={init(){if(!(!l["Unique ID and Capcode Navigation"]||!["index","thread"].includes(c.VIEW)))return this.buttons=this.makeButtons(),q.set(this.buttons.firstChild,"arrowUpLong"),q.set(this.buttons.lastChild,"arrowDownLong"),N.Post.push({name:"Post Jumper",cb:this.node})},node(){if(this.isClone){for(var e of L(".postJumper",this.nodes.info))Ue.addListeners(e);return}if(this.nodes.uniqueIDRoot&&Ue.addButtons(this,"uniqueID"),this.nodes.capcode)return Ue.addButtons(this,"capcode")},addButtons(e,t){const i=e.info[t],n=Ue.buttons.cloneNode(!0);return o.extend(n.dataset,{type:t,value:i}),o.after(e.nodes[t+(t==="capcode"?"":"Root")],n),Ue.addListeners(n)},addListeners(e){return o.on(e.firstChild,"click",Ue.buttonClick),o.on(e.lastChild,"click",Ue.buttonClick)},buttonClick(){let e;const t=o.hasClass(this,"prev")?-1:1;if(e=Ue.find(this.parentNode,t))return Ue.scroll(this.parentNode,e)},find(e,t){const{type:i,value:n}=e.dataset,s=`span[contains(@class,"postJumper") and @data-value="${n}" and @data-type="${i}"]`,r=t<0?"preceding":"following";let a=e;for(;a=o.x(`${r}::${s}`,a);)if(a.getBoundingClientRect().height)return a;if((a=o.x(`(//${s})[${t<0?"last()":"1"}]`))&&a.getBoundingClientRect().height)return a;for(;(a=o.x(`${r}::${s}`,a))&&a!==e;)if(a.getBoundingClientRect().height)return a;return null},makeButtons(){const e="\u23EB",t="\u23EC",i="prev",n="next",s=o.el("span",{className:"postJumper"});return o.extend(s,{innerHTML:'<a href="javascript:;" class="'+oe(i)+'">'+oe(e)+'</a><a href="javascript:;" class="'+oe(n)+'">'+oe(t)+"</a>"}),s},scroll(e,t){const i=e.getBoundingClientRect().top,n=t.getBoundingClientRect().top;return window.scrollBy(0,n-i)}};const js={init(){let e;if(c.SITE.software==="yotsuba"&&c.BOARD.ID==="qa"){const t={innerHTML:'Stay in touch with your <a href="https://www.4chan-x.net/qa_friends.html" target="_blank" rel="noopener">/qa/ friends</a>!'};e=o.el("div",{className:"fcx-announcement"},t),o.onExists(w,".boardBanner",i=>o.after(i,e))}if("samachan.org"in l.siteProperties&&!l.PSAseen.includes("samachan"))return e=o.el("span",{innerHTML:'<a href="https://sushigirl.us/yakuza/res/776.html" target="_blank" rel="noopener">Looking for a new home?<br>Some former Samachan users are regrouping on SushiChan.</a><br>(a message from 4chan X)'}),D.ready(function(){return new G("info",e),l.PSAseen.push("samachan"),o.set("PSAseen",l.PSAseen)})}};var Ce={init(){if(!(!l["Announcement Hiding"]||!c.SITE.selectors.psa))return o.addClass(w,"hide-announcement"),o.onExists(w,c.SITE.selectors.psa,this.setup),o.ready(function(){if(!o(c.SITE.selectors.psa))return o.rmClass(w,"hide-announcement")})},setup(e){let t,i;Ce.psa=e,Ce.text=e.dataset.utc??e.innerHTML,c.SITE.selectors.psaTop&&(i=o(c.SITE.selectors.psaTop)?.previousElementSibling)&&i.nodeName==="HR"&&(Ce.hr=i),Ce.content=o.el("div");const n={el:o.el("a",{textContent:"Show announcement",className:"show-announcement",href:"javascript:;"}),order:50,open(){return e.hidden}};return x.menu.addEntry(n),o.on(n.el,"click",Ce.toggle),Ce.btn=t=o.el("a",{title:"Mark announcement as read and hide.",className:"hide-announcement-button",href:"javascript:;",textContent:"\u2796\uFE0E"}),q.set(t,"squareMinus"),o.on(t,"click",Ce.toggle),e.firstChild?.tagName==="HR"?o.after(e.firstChild,t):o.prepend(e,t),Ce.sync(l.hiddenPSAList),o.rmClass(w,"hide-announcement"),o.sync("hiddenPSAList",Ce.sync)},toggle(){const e=o.hasClass(this,"hide-announcement-button"),t=function(i){return e?i[c.SITE.ID]=Ce.text:delete i[c.SITE.ID]};return t(l.hiddenPSAList),Ce.sync(l.hiddenPSAList),o.get("hiddenPSAList",l.hiddenPSAList,function({hiddenPSAList:i}){return t(i),o.set("hiddenPSAList",i)})},sync(e){const{psa:t,content:i}=Ce;t.hidden=e[c.SITE.ID]===Ce.text,t.hidden?o.add(i,[...t.childNodes]):o.add(t,[...i.childNodes]),Ce.hr&&(Ce.hr.hidden=t.hidden)}},Rt={init(){if(l["Reveal Spoilers"]&&o.addClass(w,"reveal-spoilers"),!!l["Remove Spoilers"]&&(N.Post.push({name:"Reveal Spoilers",cb:this.node}),c.VIEW==="archive"))return o.ready(()=>Rt.unspoiler(o.id("arc-list")))},node(){return Rt.unspoiler(this.nodes.comment)},unspoiler(e){const t=L(c.SITE.selectors.spoiler,e);for(var i of t){var n=o.el("span",{className:"removed-spoiler"});o.replace(i,n),o.add(n,[...i.childNodes])}}},Bt={init(){if(!(c.VIEW!=="index"||!l["Open Threads in New Tab"]))return N.Post.push({name:"Thread Links",cb:this.node}),N.CatalogThread.push({name:"Thread Links",cb:this.catalogNode})},node(){if(!(this.isReply||this.isClone))return Bt.process(this.nodes.reply)},catalogNode(){return Bt.process(this.nodes.thumb.parentNode)},process(e){return e.target="_blank"}};const Vs={init(){if(c.SITE.software==="tinyboard"&&c.VIEW==="thread")return D.ready(()=>o.global("initTinyBoard",{boardID:c.BOARD.ID,threadID:c.THREADID.toString()}))}};var Fe={init(){if(!(c.SITE.software!=="yotsuba"||c.VIEW!=="thread"||!l["Mark New IPs"]))return N.Thread.push({name:"Mark New IPs",cb:this.node})},node(){return Fe.ipCount=this.ipCount,Fe.postCount=this.posts.keys.length,o.on(m,"ThreadUpdate",Fe.onUpdate)},onUpdate(e){let t;const{ipCount:i,postCount:n,newPosts:s,deletedPosts:r}=e.detail;if(i!=null){switch(i-Fe.ipCount){case n-Fe.postCount+r.length:var a=Fe.ipCount;for(t of s)Fe.markNew(c.posts.get(t),++a);break;case-r.length:for(t of s)Fe.markOld(c.posts.get(t));break}return Fe.ipCount=i,Fe.postCount=n}},markNew(e,t){const i=Math.floor(t/10)%10===1?"th":["st","nd","rd"][t%10-1]||"th",n=o.el("span",{className:"ip-counter",textContent:`(${t})`});return e.nodes.nameBlock.title=`This is the ${t}${i} IP in the thread.`,o.add(e.nodes.nameBlock,[o.tn(" "),n]),o.addClass(e.nodes.root,"new-ip")},markOld(e){return e.nodes.nameBlock.title="Not the first post from this IP.",o.addClass(e.nodes.root,"old-ip")}},H={postCount:0,fileCount:0,postIndex:0,init(){let e;if(c.VIEW!=="thread"||!l["Thread Stats"])return;l["Page Count in Stats"]&&(this[c.SITE.isPrunedByAge?.(c.BOARD)?"showPurgePos":"showPage"]=!0);const t={innerHTML:'<span id="post-count">?</span> / <span id="file-count">?</span>'+(l["IP Count in Stats"]&&c.SITE.hasIPCount?' / <span id="ip-count">?</span>':"")+(l["Page Count in Stats"]?' / <span id="page-count">?</span>':"")};let i="Posts / Files";return l["IP Count in Stats"]&&c.SITE.hasIPCount&&(i+=" / IPs"),l["Page Count in Stats"]&&(this.showPurgePos?i+=" / Purge Position":(i+=" / Page",l["Purge Position"]&&(i+=" (Purge Position)"))),l["Updater and Stats in Header"]?(this.dialog=e=o.el("span",{id:"thread-stats",title:i}),o.extend(e,t),x.addShortcut("stats",e,200)):(this.dialog=e=te.dialog("thread-stats",{innerHTML:'<div class="move" title="'+oe(i)+'">'+t.innerHTML+"</div>"}),o.addClass(w,"float"),o.ready(()=>o.add(m.body,e))),this.postCountEl=o("#post-count",e),this.fileCountEl=o("#file-count",e),this.ipCountEl=o("#ip-count",e),this.pageCountEl=o("#page-count",e),this.pageCountEl&&o.on(this.pageCountEl,"click",H.fetchPage),N.Thread.push({name:"Thread Stats",cb:this.node})},node(){return H.thread=this,H.count(),H.update(),H.fetchPage(),o.on(m,"PostsInserted",()=>o.queueTask(H.onPostsInserted)),o.on(m,"ThreadUpdate",H.onUpdate)},count(){const{posts:e}=H.thread,t=e.keys.length;for(let n=H.postIndex,s=t;n<s;n++){var i=e.get(e.keys[n]);i.isFetchedQuote||(H.postCount++,H.fileCount+=i.files.length)}H.postIndex=t},onUpdate(e){if(e.detail[404])return;const{postCount:t,fileCount:i}=e.detail;if(o.extend(H,{postCount:t,fileCount:i}),H.postIndex=H.thread.posts.keys.length,H.update(),H.showPage&&H.pageCountEl.textContent!=="1")return H.fetchPage()},onPostsInserted(){if(!(H.thread.posts.keys.length<=H.postIndex)&&(H.count(),H.update(),H.showPage&&H.pageCountEl.textContent!=="1"))return H.fetchPage()},update(){const{thread:e,postCountEl:t,fileCountEl:i,ipCountEl:n}=H;if(t.textContent=H.postCount,i.textContent=H.fileCount,n)if(e.ipCount)n.textContent=e.ipCount;else if(c.BOARD?.config.user_ids){const s=new Set;c.posts.forEach(r=>{s.add(r.info.uniqueID)}),n.textContent=s.size}else n.textContent="?";t.classList.toggle("warning",e.postLimit&&!e.isSticky),i.classList.toggle("warning",e.fileLimit&&!e.isSticky)},fetchPage(){if(H.pageCountEl){if(clearTimeout(H.timeout),H.thread.isDead){H.pageCountEl.textContent="Dead",o.addClass(H.pageCountEl,"warning");return}H.timeout=setTimeout(H.fetchPage,l["Purge Position"]&&H.pageCountEl.classList.contains("warning")?5*ie:2*Le),o.whenModified(c.SITE.urls.threadsListJSON(H.thread),"ThreadStats",H.onThreadsLoad)}},onThreadsLoad(){if(this.status===200){let e,t;if(H.showPurgePos){let i=1;for(e of this.response)for(t of e.threads)t.no<H.thread.ID&&i++;H.pageCountEl.textContent=i,H.pageCountEl.classList.toggle("warning",i===1)}else{let i,n=i=0;for(e of this.response)i+=e.threads.length;for(let s=0;s<this.response.length;s++){e=this.response[s];for(t of e.threads){if(t.no===H.thread.ID){H.pageCountEl.textContent=s+1;const r=n>=i-this.response[0].threads.length;H.pageCountEl.classList.toggle("warning",r),r&&l["Purge Position"]&&(H.pageCountEl.textContent+=` (${i-n-1})`),H.lastPageUpdate=new Date(t.last_modified*ie),H.retry();return}n++}}}}else this.status===304&&H.retry()},retry(){!H.showPage||H.pageCountEl.textContent==="1"||c.SITE.threadModTimeIgnoresSage||H.thread.posts.get(H.thread.lastPost).info.date<=H.lastPageUpdate||(clearTimeout(H.timeout),H.timeout=setTimeout(H.fetchPage,5*ie))}};const Qs={init(){if(!(c.SITE.software!=="yotsuba"||!l["Pass Link"]))return D.ready(this.ready)},ready(){let e;if(!(e=o.id("styleSelector")))return;const t=o.el("span",{className:"brackets-wrap pass-link-container"});return o.extend(t,{innerHTML:'<a href="javascript:;">4chan Pass</a>'}),o.on(t.firstElementChild,"click",()=>window.open(`//sys.${location.hostname.split(".")[1]}.org/auth`,Date.now(),"width=500,height=280,toolbar=0")),o.before(e.previousSibling,[t,o.tn("\xA0\xA0")])}};var $e={init(){if(!(!["index","thread"].includes(c.VIEW)||!l["Quote Inlining"]))return l["Comment Expansion"]&&Ee.callbacks.push(this.node),N.Post.push({name:"Quote Inlining",cb:this.node})},node(){const{process:e}=$e,{isClone:t}=this;for(var i of this.nodes.quotelinks.concat([...this.nodes.backlinks],this.nodes.archivelinks))e(i,t)},process(e,t){return l["Quote Hash Navigation"]&&(t||o.after(e,$e.qiQuote(e,o.hasClass(e,"filtered")))),o.on(e,"click",$e.toggle)},qiQuote(e,t){let i="hashlink";return t&&(i+=" filtered"),o.el("a",{className:i,textContent:"#",href:e.href})},toggle(e){if(o.modifiedClick(e))return;const{boardID:t,threadID:i,postID:n}=F.postDataFromLink(this);if(l["Inline Cross-thread Quotes Only"]&&c.VIEW==="thread"&&c.posts.get(`${t}.${n}`)?.nodes.root.offsetParent||o.hasClass(w,"catalog-mode"))return;e.preventDefault();const s=F.postFromNode(this),{context:r}=s;if(o.hasClass(this,"inlined"))$e.rm(this,t,i,n,r);else{if(o.x(`ancestor::div[@data-full-i-d='${t}.${n}']`,this))return;$e.add(this,t,i,n,r,s)}return this.classList.toggle("inlined")},findRoot(e,t){return t?o.x('ancestor::*[parent::*[contains(@class,"post")]][1]',e):o.x("ancestor-or-self::*[parent::blockquote][1]",e)},add(e,t,i,n,s,r){let a;const h=o.hasClass(e,"backlink"),u=o.el("div",{className:"inline"});u.dataset.fullID=`${t}.${n}`;const f=$e.findRoot(e,h);o.after(f,u);const g=o.x('ancestor::*[contains(@class,"postContainer")][1]',f);if(o.addClass(g,"hasInline"),new Qe(t,i,n,u,r),!!((a=c.posts.get(`${t}.${n}`))&&s.thread===a.thread)&&(h&&l["Forward Hiding"]&&(o.addClass(a.nodes.root,"forwarded"),a.forwarded++||(a.forwarded=1)),!!A.posts))return A.readSinglePost(a)},rm(e,t,i,n,s){let r,a;const h=o.hasClass(e,"backlink");let u=$e.findRoot(e,h);u=o.x(`following-sibling::div[@data-full-i-d='${t}.${n}'][1]`,u);const f=o.x('ancestor::*[contains(@class,"postContainer")][1]',u),{parentNode:g}=u;if(o.rm(u),o.event("PostsRemoved",null,g),o(".inline",f)||o.rmClass(f,"hasInline"),!(r=u.firstElementChild))return;const b=c.posts.get(`${t}.${n}`);for(b.rmClone(r.dataset.clone),l["Forward Hiding"]&&h&&s.thread===c.threads.get(`${t}.${i}`)&&!--b.forwarded&&(delete b.forwarded,o.rmClass(b.nodes.root,"forwarded"));a=o(".inlined",r);)({boardID:t,threadID:i,postID:n}=F.postDataFromLink(a)),$e.rm(a,t,i,n,s),o.rmClass(a,"inlined")}},wt={containers:S(),init(){if(!(!["index","thread"].includes(c.VIEW)||!l["Quote Backlinks"]))return(this.bottomBacklinks=l["Bottom Backlinks"])&&o.addClass(w,"bottom-backlinks"),N.Post.push({name:"Quote Backlinking Part 1",cb:this.firstNode}),N.Post.push({name:"Quote Backlinking Part 2",cb:this.secondNode})},firstNode(){if(this.isClone||!this.quotes.length||this.isRebuilt)return;const e=l["Mark Quotes of You"]&&Z.isYou(this),t=o.el("a",{href:c.SITE.Build.postURL(this.board.ID,this.thread.ID,this.ID),className:this.isHidden?"filtered backlink":"backlink",textContent:l.backlink.replace(/%(?:id|%)/g,g=>({"%id":this.ID,"%%":"%"})[g])});e&&o.add(t,Z.mark.cloneNode(!0));for(var i of this.quotes){var n,s=[wt.getContainer(i)];if((n=c.posts.get(i))&&n.nodes.backlinkContainer)for(var r of n.clones)s.push(r.nodes.backlinkContainer);for(var a of s){var h=t.cloneNode(!0),u=a.firstChild?[o.tn(" "),h]:[h];if(l["Quote Previewing"]&&o.on(h,"mouseover",ot.mouseover),l["Quote Inlining"]&&(o.on(h,"click",$e.toggle),l["Quote Hash Navigation"])){var f=$e.qiQuote(h,o.hasClass(h,"filtered"));u.push(f)}o.add(a,u)}}},secondNode(){if(this.isClone&&(this.origin.isReply||l["OP Backlinks"])){this.nodes.backlinkContainer=o(".container",this.nodes.post);return}if(!this.isReply&&!l["OP Backlinks"])return;const e=wt.getContainer(this.fullID);return this.nodes.backlinkContainer=e,wt.bottomBacklinks?o.add(this.nodes.post,e):o.add(this.nodes.info,e)},getContainer(e){return this.containers[e]||(this.containers[e]=o.el("span",{className:"container"}))}},Vt={init(){if(!(!["index","thread"].includes(c.VIEW)||!l["Mark Cross-thread Quotes"]))return l["Comment Expansion"]&&Ee.callbacks.push(this.node),this.mark=o.el("span",{textContent:"\xA0(Cross-thread)",className:"qmark-ct"}),N.Post.push({name:"Mark Cross-thread Quotes",cb:this.node})},node(){if(this.isClone&&this.thread===this.context.thread)return;const{board:e,thread:t}=this.context;for(var i of this.nodes.quotelinks){var{boardID:n,threadID:s}=F.postDataFromLink(i);s&&(this.isClone&&o.rm(o(".qmark-ct",i)),n===e.ID&&s!==t.ID&&o.add(i,Vt.mark.cloneNode(!0)))}}},Qt={init(){if(!(!["index","thread"].includes(c.VIEW)||!l["Mark OP Quotes"]))return l["Comment Expansion"]&&Ee.callbacks.push(this.node),this.mark=o.el("span",{textContent:"\xA0(OP)",className:"qmark-op"}),N.Post.push({name:"Mark OP Quotes",cb:this.node})},node(){let e,t,i;if(this.isClone&&this.thread===this.context.thread||!(i=this.quotes).length)return;const{quotelinks:n}=this.nodes;if(this.isClone&&i.includes(this.thread.fullID))for(e=0;t=n[e++];)o.rm(o(".qmark-op",t));const{fullID:s}=this.context.thread;if(i.includes(s))for(e=0;t=n[e++];){var{boardID:r,postID:a}=F.postDataFromLink(t);`${r}.${a}`===s&&o.add(t,Qt.mark.cloneNode(!0))}}};const Ws={init(){if(!(!["index","thread"].includes(c.VIEW)||!l["Reply Hiding Buttons"]&&(!l.Menu||!l["Reply Hiding Link"])&&!l.Filter))return N.Post.push({name:"Strike-through Quotes",cb:this.node})},node(){if(!this.isClone)for(var e of this.nodes.quotelinks){var{boardID:t,postID:i}=F.postDataFromLink(e);c.posts.get(`${t}.${i}`)?.isHidden&&o.addClass(e,"filtered")}}};var ht={init(){if(!(!["index","thread"].includes(c.VIEW)||!l["Resurrect Quotes"]))return o.addClass(w,"resurrect-quotes"),l["Comment Expansion"]&&Ee.callbacks.push(this.node),N.Post.push({name:"Resurrect Quotes",cb:this.node})},node(){if(this.isClone){this.nodes.archivelinks=L("a.linkify.quotelink",this.nodes.comment);return}for(var e of L("a.linkify",this.nodes.comment))ht.parseArchivelink.call(this,e);for(var t of L(".deadlink",this.nodes.comment))ht.parseDeadlink.call(this,t)},parseArchivelink(e){let t;if(!(t=e.pathname.match(/^\/([^/]+)\/thread\/S?(\d+)\/?$/))||["boards.4chan.org","boards.4channel.org"].includes(e.hostname))return;const i=t[1],n=t[2],s=e.hash.match(/^#[pq]?(\d+)$|$/)[1]||n;if(Y.to("post",{boardID:i,postID:s}))return o.addClass(e,"quotelink"),o.extend(e.dataset,{boardID:i,threadID:n,postID:s}),this.nodes.archivelinks.push(e)},parseDeadlink(e){let t,i,n,s;if(o.hasClass(e.parentNode,"prettyprint")){ht.fixDeadlink(e);return}const r=e.textContent;if(!(s=r.match(/\d+$/)?.[0]))return;if(s[0]==="0"){ht.fixDeadlink(e);return}const a=(i=r.match(/^>>>\/([a-z\d]+)/))?i[1]:this.board.ID,h=`${a}.${s}`;if(n=c.posts.get(h))n.isDead?(t=o.el("a",{href:c.SITE.Build.postURL(a,n.thread.ID,s),className:"quotelink deadlink",textContent:r}),o.add(t,ye.deadMark.cloneNode(!0)),o.extend(t.dataset,{boardID:a,threadID:n.thread.ID,postID:s})):t=o.el("a",{href:c.SITE.Build.postURL(a,n.thread.ID,s),className:"quotelink",textContent:r});else{const u=Y.to("thread",{boardID:a,threadID:0,postID:s}),f=Y.to("post",{boardID:a,postID:s});(u||f)&&(t=o.el("a",{href:u||"javascript:;",className:"deadlink",textContent:r}),o.add(t,ye.deadMark.cloneNode(!0)),f&&(o.addClass(t,"quotelink"),o.extend(t.dataset,{boardID:a,postID:s})))}if(this.quotes.includes(h)||this.quotes.push(h),!t){o.add(e,ye.deadMark.cloneNode(!0));return}if(o.replace(e,t),o.hasClass(t,"quotelink"))return this.nodes.quotelinks.push(t)},fixDeadlink(e){let t;if(!(t=e.previousSibling)||t.nodeName==="BR"){const i=o.el("span",{className:"quote"});o.before(e,i),o.add(i,e)}return o.replace(e,[...e.childNodes])}},D={init(){if(location.hostname==="www.4chan.org"||location.search.includes("__cf"))return;try{let s=window;if(`${z.name} antidup`in s)return;s[`${z.name} antidup`]=!0}catch{}try{if(window.frameElement&&["","about:blank"].includes(window.frameElement.src))return}catch{}if(w&&o.hasClass(w,"fourchan-x"))return;o.asap(kt,function(){o.addClass(w,"fourchan-xt","fourchan-x","seaweedchan"),o.engine&&o.addClass(w,`ua-${o.engine}`),fe.ready(()=>{c.BOARD?.config.ws_board!=null&&o.addClass(w,c.BOARD.config.ws_board?"ws":"nws")})});try{o.global("exposeVersion",{version:c.VERSION,buildDate:c.VERSION_DATE.getTime().toString()})}catch(s){console.error(s)}o.on(m,"4chanXInitFinished",function(){return D.expectInitFinished?delete D.expectInitFinished:(new G("error",`Error: Multiple copies of ${z.name} or 4chan X are enabled.`),o.addClass(w,"tainted"))});var e=function(){return m.removeEventListener("mounted",e,!0),D.isMounted=!0,D.mountedCBs.map(s=>(()=>{try{return s()}catch{}})())};m.addEventListener("mounted",e,!0);var t=function(s,r){if(r instanceof Array)l[s]=S.clone(r[0]);else if(typeof r=="object")for(var a in r)t(a,r[a]);else l[s]=r};location.hostname==="boards.4chan.org"&&o.asap(kt,()=>o.onExists(w,"iframe[srcdoc]",o.rm)),t(null,ge);for(var i of De.keys)l[i]=S();l.customTitles=S.clone({"4chan.org":{boards:{qa:{boardTitle:{orig:"/qa/ - Question & Answer",title:"/qa/ - 2D/Random"}}}}}),l.boardConfig={boards:S()},l.archives=Y.archives,l.selectedArchives=S(),l.cooldowns=S(),l["Index Sort"]=S();for(let s=0;s<2;s++)l[`Last Long Reply Thresholds ${s}`]=S();l.siteProperties=S(),l["Except Archives from Encryption"]=!1,l["JSON Navigation"]=!0,l["Oekaki Links"]=!0,l["Show Name and Subject"]=!1,l["QR Shortcut"]=!0,l["Bottom QR Link"]=!0,l["Toggleable Thread Watcher"]=!0,l.siteSoftware="",l["Use Faster Image Host"]="true",l["Captcha Fixes"]=!0,l.captchaServiceDomain="",l.captchaServiceKey=S(),/\.4chan(?:nel)?\.org$/.test(location.hostname)&&!We.yotsuba.regexp.pass.test(location.href)&&!We.yotsuba.regexp.captcha.test(location.href)&&!L("script:not([src])",m).filter(s=>/this\[/.test(s.textContent)).length&&(o.getSync||o.get)({jsWhitelist:l.jsWhitelist},({jsWhitelist:s})=>{const r=s.replace(/^#.*$/mg,"").replace(/[\s;]+/g," ").trim();/\S/.test(r)&&o.addCSP(`script-src ${r}`)});const n=S();for(const s in l)n[s]=void 0;n.previousversion=void 0,(o.getSync||o.get)(n,function(s){o.asap(kt,function(){o.cantSet||(s.previousversion==null?(D.isFirstRun=!0,D.ready(function(){return o.set("previousversion",c.VERSION),$.open()})):s.previousversion!==c.VERSION&&D.upgrade(s));for(const r in l)l[r]=s[r]??l[r];lt.init(D.initFeatures)})})},upgrade(e){const{previousversion:t}=e,i=$.upgrade(e,t);return e.previousversion=i.previousversion=c.VERSION,o.set(i,function(){if(e["Show Updated Notifications"]??!0){const n=o.el("span",{innerHTML:`${z.name} has been updated to <a href="${z.changelog}" target="_blank">version ${c.VERSION}</a>.`});return new G("info",n,15)}})},parseURL(e=c.SITE,t=location){const i={};if(!e||(i.siteID=e.ID,e.isBoardlessPage?.(t)))return i;const n=t.pathname.split(/\/+/);return i.boardID=n[1],e.isFileURL(t)?i.VIEW="file":e.isAuxiliaryPage?.(t)||(["thread","res"].includes(n[2])?(i.VIEW="thread",i.threadID=i.THREADID=+n[3].replace(/\.\w+$/,"")):n[2]==="archive"&&n[3]==="res"?(i.VIEW="thread",i.threadID=i.THREADID=+n[4].replace(/\.\w+$/,""),i.threadArchived=!0):/^(?:catalog|archive)(?:\.\w+)?$/.test(n[2])?i.VIEW=n[2].replace(/\.\w+$/,""):/^(?:index|\d*)(?:\.\w+)?$/.test(n[2])&&(i.VIEW="index")),i},initFeatures(){if(o.global("initMain"),D.jsEnabled=o.hasClass(w,"js-enabled"),o.extend(c,D.parseURL()),c.boardID&&(c.BOARD=new tt(c.boardID)),!c.VIEW){c.SITE.initAuxiliary?.();return}if(c.VIEW==="file"){o.asap(()=>m.readyState!=="loading",function(){let i;if(c.SITE.software==="yotsuba"&&l["404 Redirect"]&&c.SITE.is404?.()){const n=location.pathname.split(/\/+/);return Y.navigate("file",{boardID:c.BOARD.ID,filename:n[n.length-1]})}else(i=o("video"))&&(l["Volume in New Tab"]&&be.setup(i),l["Loop in New Tab"]&&(i.loop=!0,i.controls=!0,i.play()))});return}c.threads=new rt,c.posts=new rt,o.onExists(w,"body",D.initStyle);for(var[e,t]of D.features)if(!(c.SITE.disabledFeatures&&c.SITE.disabledFeatures.includes(e)))try{t.init()}catch(i){D.handleErrors({message:`"${e}" initialization crashed.`,error:i})}return o.ready(D.initReady)},initStyle(){if(!D.isThisPageLegit())return;const e=o("link[href*=mobile]",m.head);return e&&(e.disabled=!0),w.dataset.host=location.host,o.addClass(w,`sw-${c.SITE.software}`),o.addClass(w,c.VIEW==="thread"?"thread-view":c.VIEW),o.onExists(w,".ad-cnt, .adg-rects > .desktop",t=>o.onExists(t,"img, iframe",()=>o.addClass(w,"ads-loaded"))),l["Autohiding Scrollbar"]&&o.addClass(w,"autohiding-scrollbar"),o.ready(function(){if(m.body.clientHeight>w.clientHeight&&window.innerWidth===w.clientWidth!==l["Autohiding Scrollbar"])return l["Autohiding Scrollbar"]=!l["Autohiding Scrollbar"],o.set("Autohiding Scrollbar",l["Autohiding Scrollbar"]),o.toggleClass(w,"autohiding-scrollbar")}),o.addStyle(et.sub(et.boards),"fourchanx-css"),D.bgColorStyle=o.el("style",{id:"fourchanx-bgcolor-css"}),D.setClass()},setClass(){let e,t,i;const n=["yotsuba","yotsuba-b","futaba","burichan","photon","tomorrow","spooky"];if(c.SITE.software==="yotsuba"&&c.VIEW==="catalog"&&(e=o.id("base-css"))&&(t=e.href.match(/catalog_(\w+)/)?.[1].replace("_new","").replace(/_+/g,"-"),n.includes(t))){o.addClass(w,t);return}t=e=i=null;const s=function(){if(c.SITE.software==="yotsuba"){o.rmClass(w,t),t=null;for(var a of i)if(a.href===e?.href){t=a.title.toLowerCase().replace("new","").trim().replace(/\s+/g,"-"),t==="_special"&&(t=a.href.match(/[a-z]*(?=[^/]*$)/)[0]),n.includes(t)||(t=null);break}if(t){o.addClass(w,t),o.rm(D.bgColorStyle);return}}const h=c.SITE.bgColoredEl();h.style.position="absolute",h.style.visibility="hidden",o.add(m.body,h);let u=window.getComputedStyle(h).backgroundColor;o.rm(h);const f=u.match(/[\d.]+/g);if(!/^rgb\(/.test(u)){const b=window.getComputedStyle(m.body);u=`${b.backgroundColor} ${b.backgroundImage} ${b.backgroundRepeat} ${b.backgroundPosition}`}let g=`.dialog, .suboption-list > div:last-of-type, :root.catalog-hover-expand .catalog-container:hover > .post {
  background: ${u};
}
.unread-mark-read {
  background-color: rgba(${f.slice(0,3).join(", ")}, ${.5*(f[3]||1)});
}`;return o.luma(f)<100&&(g+=".watch-thread-link { --xt-watcher: #c8c8c8 }"),D.bgColorStyle.textContent=g,o.after(o.id("fourchanx-css"),D.bgColorStyle)};if(o.onExists(m.head,c.SITE.selectors.styleSheet,function(a){return e=a,c.SITE.software==="yotsuba"&&(i=L('link[rel="alternate stylesheet"]',m.head)),new MutationObserver(s).observe(e,{attributes:!0,attributeFilter:["href"]}),o.on(e,"load",s),s()}),!e){for(var r of L('link[rel="stylesheet"]',m.head))o.on(r,"load",s);return s()}},initReady(){if(c.SITE.is404?.()){c.VIEW==="thread"&&v.set404(c.BOARD.ID,c.THREADID,function(){if(l["404 Redirect"])return Y.navigate("thread",{boardID:c.BOARD.ID,threadID:c.THREADID,postID:+location.hash.match(/\d+/)},`/${c.BOARD}/`)});return}if(c.SITE.isIncomplete?.()){const e=o.el("div",{innerHTML:'The page didn&#039;t load completely.<br>Some features may not work unless you <a href="javascript:;">reload</a>.'});o.on(o("a",e),"click",()=>location.reload()),new G("warning",e)}c.VIEW==="catalog"?D.initCatalog():p.enabled?(D.expectInitFinished=!0,o.event("4chanXInitFinished")):c.SITE.awaitBoard?c.SITE.awaitBoard(D.initThread):D.initThread()},initThread(){let e;const t=c.SITE.selectors;if(e=o(t.boardFor?.[c.VIEW]||t.board)){const i=[],n=[],s=[];try{c.SITE.preParsingFixes?.(e)}catch{}D.addThreadsObserver=new MutationObserver(D.addThreads),D.addPostsObserver=new MutationObserver(D.addPosts),D.addThreadsObserver.observe(e,{childList:!0}),D.parseThreads(L(t.thread,e),i,n,s),s.length&&D.handleErrors(s),c.VIEW==="thread"&&(c.threadArchived&&(i[0].isArchived=!0,i[0].kill()),c.SITE.parseThreadMetadata?.(i[0])),setTimeout(()=>{D.callbackNodes("Thread",i),D.callbackNodesDB("Post",n,function(){for(var r of n)se.insert(r);D.expectInitFinished=!0,o.event("4chanXInitFinished")})},0)}else D.expectInitFinished=!0,o.event("4chanXInitFinished")},parseThreads(e,t,i,n){for(var s of e){var r=(()=>{let f;return(f=s.dataset.board)?(f=encodeURIComponent(f),c.boards[f]||new tt(f)):c.BOARD})(),a=+s.id.match(/\d*$/)[0];if(!a||r.threads.get(a)?.nodes.root)return;var h=new Ye(a,r);h.nodes.root=s,t.push(h);var u=L(c.SITE.selectors.postContainer,s);c.SITE.isOPContainerThread&&u.unshift(s),D.parsePosts(u,h,i,n),D.addPostsObserver.observe(s,{childList:!0})}},parsePosts(e,t,i,n){for(var s of e)if(!(s.dataset.fullID&&c.posts.get(s.dataset.fullID))&&o(c.SITE.selectors.comment,s))try{i.push(new ye(s,t,t.board))}catch(r){n.push({message:`Parsing of Post No.${s.id.match(/\d+/)} failed. Post will be skipped.`,error:r,html:s.outerHTML})}},addThreads(e){const t=[];for(var i of e)for(var n of i.addedNodes)n.nodeType===Node.ELEMENT_NODE&&n.matches(c.SITE.selectors.thread)&&t.push(n);if(!t.length)return;const s=[],r=[],a=[];D.parseThreads(t,s,r,a),a.length&&D.handleErrors(a),D.callbackNodes("Thread",s),D.callbackNodesDB("Post",r,()=>o.event("PostsInserted",null,e[0].target))},addPosts(e){let t;const i=[],n=[],s=[],r=[];for(var a of e){t=F.threadFromRoot(a.target);var h=[];for(var u of a.addedNodes)u.nodeType===Node.ELEMENT_NODE&&(u.matches(c.SITE.selectors.postContainer)||(u=o(c.SITE.selectors.postContainer,u)))&&h.push(u);var f=s.length;D.parsePosts(h,t,s,r),s.length>f&&!i.includes(t)&&i.push(t);var g=!1;for(var b of a.removedNodes)if(F.postFromRoot(b)?.nodes.root===b&&!w.contains(b)){g=!0;break}g&&!n.includes(t)&&n.push(t)}r.length&&D.handleErrors(r),D.callbackNodesDB("Post",s,function(){for(t of i)o.event("PostsInserted",null,t.nodes.root);for(t of n)o.event("PostsRemoved",null,t.nodes.root)})},initCatalog(){let e;const t=c.SITE.selectors.catalog;if(t&&(e=o(t.board))){const i=[],n=[];D.addCatalogThreadsObserver=new MutationObserver(D.addCatalogThreads),D.addCatalogThreadsObserver.observe(e,{childList:!0}),D.parseCatalogThreads(L(t.thread,e),i,n),n.length&&D.handleErrors(n),D.callbackNodes("CatalogThreadNative",i)}return D.expectInitFinished=!0,o.event("4chanXInitFinished")},parseCatalogThreads(e,t,i){for(var n of e)try{var s=new Fs(n);s.thread.catalogViewNative?.nodes.root!==n&&(s.thread.catalogViewNative=s,t.push(s))}catch(r){i.push({message:`Parsing of Catalog Thread No.${(n.dataset.id||n.id).match(/\d+/)} failed. Thread will be skipped.`,error:r,html:n.outerHTML})}},addCatalogThreads(e){const t=[];for(var i of e)for(var n of i.addedNodes)n.nodeType===Node.ELEMENT_NODE&&n.matches(c.SITE.selectors.catalog.thread)&&t.push(n);if(!t.length)return;const s=[],r=[];return D.parseCatalogThreads(t,s,r),r.length&&D.handleErrors(r),D.callbackNodes("CatalogThreadNative",s)},callbackNodes(e,t){let i,n=0;const s=N[e];for(;i=t[n++];)s.execute(i)},callbackNodesDB(e,t,i){let n=0;const s=N[e],r=function(){let h;return(h=t[n])?(s.execute(h),++n%250):!1};var a=function(){for(;r(););if(!t[n]){i&&i();return}setTimeout(a,0)};a()},handleErrors(e){let t;if(m.body&&o.hasClass(m.body,"fourchan_x")&&!o.hasClass(w,"tainted")&&(new G("error",`Error: Multiple copies of ${z.name} or 4chan X are enabled.`),o.addClass(w,"tainted")),c.SITE.testNativeExtension&&!o.hasClass(w,"tainted")&&c.SITE.testNativeExtension().then(({enabled:s})=>{if(s&&(o.addClass(w,"tainted"),l["Disable Native Extension"]&&!D.isFirstRun)){const r=o.el("div",{innerHTML:'Failed to disable the native extension. You may need to <a href="'+oe(z.upstreamFaq)+'#blocking-native-extension" target="_blank">block it</a>.'});new G("error",r)}}),e instanceof Array?e.length===1&&(t=e[0]):t=e,t){new G("error",D.parseError(t,D.reportLink([t])),15);return}const i=o.el("div",{innerHTML:`${e.length} errors occurred.${D.reportLink(e).innerHTML} [<a href="javascript:;">show</a>]`});o.on(i.lastElementChild,"click",function(){return[this.textContent,n.hidden]=this.textContent==="show"?["hide",!1]:["show",!0]});var n=o.el("div",{hidden:!0});for(t of e)o.add(n,D.parseError(t));return new G("error",[i,n],30)},parseError(e,t){ut.error(e.message,e.error.stack);const i=o.el("div",{innerHTML:oe(e.message)+(t?t.innerHTML:"")}),n=o.el("div",{textContent:`${e.error.name||"Error"}: ${e.error.message||"see console for details"}`}),s=e.error.stack?.match(/\d+(?=:\d+\)?$)/mg)?.join().replace(/^/," at ")||"",r=o.el("div",{textContent:`(${z.name} ${z.fork} v${c.VERSION} ${ft} on ${o.engine}${s})`});return[i,n,r]},reportLink(e){let t;const i=e[0];let n=i.message;e.length>1&&(n+=` (+${e.length-1} other errors)`);let s="";const r=function(h){if(encodeURIComponent(n+s+h+`
`).length<=z.newIssueMaxLength-z.newIssue.replace(/%(title|details)/,"").length)return s+=h+`
`};return r(`[Please describe the steps needed to reproduce this error.]

Script: ${z.name} ${z.fork} v${c.VERSION} ${ft}
URL: ${location.href}
User agent: ${navigator.userAgent}`),ft==="userscript"&&(t=(()=>{if(typeof GM<"u"&&GM!==null)return GM.info;if(typeof GM_info<"u"&&GM_info!==null)return GM_info})())&&r(`Userscript manager: ${t.scriptHandler} ${t.version}`),r(`
`+i.error),i.error.stack&&r(i.error.stack.replace(i.error.toString(),"").trim()),i.html&&r("\n`"+i.html+"`"),s=s.replace(/file:\/{3}.+\//g,""),{innerHTML:`<span class="report-error"> [<a href="${z.newIssue.replace("%title",encodeURIComponent(n)).replace("%details",encodeURIComponent(s))}" target="_blank">report</a>]</span>`}},isThisPageLegit(){return"thisPageIsLegit"in D||(D.thisPageIsLegit=c.SITE.isThisPageLegit?c.SITE.isThisPageLegit():!/^[45]\d\d\b/.test(document.title)&&!/\.(?:json|rss)$/.test(location.pathname)),D.thisPageIsLegit},ready(e){return o.ready(function(){if(D.isThisPageLegit())return e()})},mounted(e){return D.isMounted?e():D.mountedCBs.push(e)},mountedCBs:[],features:[["Board Configuration",fe],["Normalize URL",Us],["Delay Redirect on Post",St],["Captcha Configuration",Ht],["Image Host Rewriting",de],["Redirect",Y],["Header",x],["Catalog Links",re],["Settings",$],["Index Generator",p],["Disable Autoplay",xt],["Announcement Hiding",Ce],["Fourchan thingies",dt],["Tinyboard Glue",Vs],["Color User IDs",Dt],["Highlight by User ID",_e],["Count Posts by ID",ct],["Custom CSS",pt],["Thread Links",Bt],["Linkify",qe],["Reveal Spoilers",Rt],["Resurrect Quotes",ht],["Filter",V],["Thread Hiding Buttons",W],["Reply Hiding Buttons",O],["Recursive",Ie],["Strike-through Quotes",Ws],["Quick Reply Personas",d.persona],["Quick Reply",d],["Cooldown",d.cooldown],["Post Jumper",Ue],["Pass Link",Qs],["Menu",he],["Index Generator (Menu)",p.menu],["Report Link",st],["Copy Text Link",At],["Thread Hiding (Menu)",W.menu],["Reply Hiding (Menu)",O.menu],["Delete Link",_],["Filter (Menu)",V.menu],["Edit Link",d.oekaki.menu],["Download Link",qs],["Archive Link",Hs],["Quote Inlining",$e],["Quote Previewing",ot],["Quote Backlinks",wt],["Mark Quotes of You",Z],["Mark OP Quotes",Qt],["Mark Cross-thread Quotes",Vt],["Anonymize",$s],["Time Formatting",ue],["Relative Post Dates",Ae],["File Info Formatting",ze],["Fappe Tyme",it],["Gallery",C],["Gallery (menu)",C.menu],["Sauce",Me],["Image Expansion",Q],["Image Expansion (Menu)",Q.menu],["Reveal Spoiler Thumbnails",Os],["Image Loading",Pe],["Image Hover",bt],["Volume Control",be],["WEBM Metadata",vt],["Comment Expansion",Ee],["Thread Expansion",ve],["Favicon",pe],["Unread",A],["Unread Line in Index",ce],["Quote Threading",se],["Thread Stats",H],["Thread Updater",E],["Thread Watcher",v],["Thread Watcher (Menu)",v.menu],["Mark New IPs",Fe],["Index Navigation",Re],["Keybinds",ae],["Banner",me],["Announcements",js],["Flash Features",jt],["Reply Pruning",U],["Mod Contact Links",Ke],["Restore deleted posts from archive",mt],["Mark posts on scroll bar",Te]]};return o.ready(()=>D.init()),D})();
