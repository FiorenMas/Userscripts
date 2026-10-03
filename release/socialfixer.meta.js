// ==UserScript==
//
//  ////////////////////////////////////
//  //                                //
//  //  IF YOU ARE SEEING THIS (not   //
//  //  in the Userscript manager),   //
//  //  your Userscript manager AKA   //
//  //  'monkey' is malfunctioning.   //
//  //                                //
//  //  See socialfixer.com/ujs-help  //
//  //                                //
//  ////////////////////////////////////
//
// @name           Social Fixer for Facebook
// @namespace      http://userscripts.org/users/864169999
// @include        /^https:\/\/facebook\.com\//
// @include        /^https:\/\/[^\/]*\.facebook\.com\//
// @include        /^https:\/\/[^\/]*\.messenger\.com\//
// @exclude        /^https:\/\/[^\/]*(channel|static)[^\/]*facebook\.com\//
// @exclude        /^https:\/\/[^\/]*facebook\.com\/.*(ai.php|morestories.php|generic.php|xti.php|plugins|connect|ajax|sound_iframe|l.php\?u)/
// @exclude        /^https:\/\/[^\/]*\.facebook\.com\/help/
// @exclude        /^https:\/\/[^\/]*\.facebook\.com\/support/
// @exclude        /^https:\/\/[^\/]*\.facebook\.com\/saved/
// @connect        www.facebook.com
// @connect        mbasic.facebook.com
// @connect        socialfixer.com
// @connect        matt-kruse.github.io
// @connect        fbcdn.net
// @run-at         document-start
// @inject-into    content
// @noframes
// @version        31.1.0
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/socialfixer.user.js
// @supportURL     https://socialfixer.com/support
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM.xmlHttpRequest
// @grant          unsafeWindow
// ==/UserScript==
