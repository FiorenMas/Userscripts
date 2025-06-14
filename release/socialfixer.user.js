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
var prevent_running=!1;(window.top!=window.self||!location||/[?#&]no_sfx/.test(location.href)||/\/plugins\/|\/(l|ai|morestories)\.php$/.test(location.pathname))&&(prevent_running=!0);var define,exports;const use_Promise_getValue=typeof GM=="object"&&typeof GM.getValue=="function",use_Promise_setValue=typeof GM=="object"&&typeof GM.setValue=="function",use_GM_xmlhttpRequest=typeof GM=="object"&&typeof GM.xmlHttpRequest=="function",GM_xhr=typeof GM=="object"&&typeof GM.xmlHttpRequest=="function"?GM.xmlHttpRequest:GM_xmlhttpRequest;var Extension=function(){var qe={storage:{get:function(v,$e,Ne,Ze){if(typeof v=="string")use_Promise_getValue?GM.getValue(Ze+v,$e).then(Ne):Ne(GM_getValue(Ze+v,$e));else if(typeof v=="object"&&v.length){var We={},rt=v.length;for(let Oe=0;Oe<v.length;Oe++){var at;typeof $e=="object"&&$e.length&&Oe<$e.length&&(at=$e[Oe]),use_Promise_getValue?GM.getValue(Ze+v[Oe],at).then(lt=>We[v[Oe]]=lt).finally(()=>--rt||Ne(We)):We[v[Oe]]=GM_getValue(Ze+v[Oe],at)}use_Promise_getValue||Ne(We)}},set:function(v,$e,Ne,Ze){typeof Ne=="function"||(Ne=()=>{}),setTimeout(function(){use_Promise_setValue?GM.setValue(Ze+v,$e).then(We=>Ne(v,$e,We)).catch(We=>Ne(v,$e,We)):Ne(v,$e,GM_setValue(Ze+v,$e))},0)}},ajax:function(v,$e){const Ne=function(Oe){const lt={};Oe.responseHeaders.split(/\r?\n/).forEach(function(et){const f=et.split(/\s*:\s*/,2);lt[f[0].toLowerCase()]=f[1]}),$e(Oe.responseText,Oe.status,lt)},Ze=v.method||"GET",We=v.timeout||5*X.seconds,rt=v.url||v;if(!rt)return alert("Invalid parameter passed to Extension.ajax"),$e(null);const at={method:Ze,timeout:We,url:rt,onload:Ne};["error","abort","timeout"].forEach(Oe=>at[`on${Oe}`]=()=>Ne({responseText:Oe,status:418,responseHeaders:""})),GM_xhr(at)}};return qe}();const sfx_style=`
.sfx_bubble_note {
  position: fixed;
  min-height: 50px;
  min-width: 150px;
  max-height: 90vh;
  max-width: 50vw;
  margin: 10px;
  font-family: arial;
  background-color: #FFFFE5;
  color: black;
  border: 1px solid #3F5C71;
  font-size: calc(0.7rem * var(--sfx_ui_scale));
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 0 5px #888888;
  z-index: 99999 !important;
  cursor: move;
  overflow: auto;
}
.sfx_bubble_note .sfx_bubble_note_title {
  font-size: calc(0.8rem * var(--sfx_ui_scale));
  font-weight: bold;
  margin: 10px 0;
}
.sfx_bubble_note .sfx_bubble_note_subtitle {
  font-size: calc(0.7rem * var(--sfx_ui_scale));
  font-weight: bold;
  margin: 5px 0;
}
.sfx_bubble_note .sfx_bubble_note_data {
  white-space: pre-wrap;
  font-family: monospace;
  font-size: calc(0.65rem * var(--sfx_ui_scale));
  background-color: #ddd;
  overflow: auto;
  max-height: 50vh;
}
.sfx_bubble_note_top_right {
  right: 0;
  top: 0;
}
.sfx_bubble_note_bottom_right {
  right: 0;
  bottom: 0;
}
.sfx_bubble_note_top_left {
  left: 0;
  top: 0;
}
.sfx_bubble_note_bottom_left {
  left: 0;
  bottom: 0;
}

/* Comment Button */
.sfx_comment_button {
  float: right;
  padding: 4px 8px;
  margin: 4px;
  background-color: #5A74A8 !important;
  border: 1px solid #1A356E;
  color: white;
  font-weight: bold;
  font-size: calc(0.6rem * var(--sfx_ui_scale)) !important;
  line-height: 12px !important;
  border-radius: 3px;
}
.sfx_comment_button_msg {
  float: right;
  display: inline-block;
  padding: 5px 4px;
  color: #9197A3;
}

.sfx_expander_ui {
  max-height: 50ex;
  width: 30em;
  overflow-y: scroll;
}
.sfx_clicked {
  background-color: yellow;
}


#sfx_control_panel {
  position: fixed;
  min-width: 150px;
  max-width: 250px;
  border-radius: 3px;
  background-color: white;
  color: #404040;
  z-index: 201;
  opacity: 0.6;
  font-size: calc(0.6rem * var(--sfx_ui_scale));
  box-shadow: 0 0 5px rgba(105, 118, 136, 0.2), 0 5px 5px rgba(132, 143, 160, 0.2), 0 10px 10px rgba(132, 143, 160, 0.2), 0 20px 20px rgba(132, 143, 160, 0.2), 0 0 5px rgba(105, 118, 136, 0.3);
}
#sfx_control_panel:hover {
  opacity: 1;
}
#sfx_control_panel .sfx_cp_header {
  font-weight: bold;
  cursor: move;
  margin-bottom: 2px;
  font-size: calc(0.45rem * var(--sfx_ui_scale));
  letter-spacing: 1px;
  text-transform: uppercase;
  vertical-align: top;
  padding: 5px;
  border-radius: 3px 3px 0 0;
  text-align: left;
  border: 0;
  color: #fff;
  background: linear-gradient(to right, #2C4372, #3B5998);
}
#sfx_control_panel .sfx_cp_section_label {
  background-color: #eee;
  font-size: calc(0.5rem * var(--sfx_ui_scale));
  font-family: arial,sans serif;
  font-weight: bold;
  padding: 3px;
}
#sfx_control_panel .sfx_cp_section_content {
  margin-bottom: 5px;
}
.sfx_why_cp_filters {
  margin: 5px;
  border: 2px solid grey;
  padding: 5px;
}
.sfx_close_cp_refresh {
  margin-left: 10px;
  margin-right: 2px;
}
.sfx_cp_close_button {
  float: right;
  display: inline-block;
  width: 10px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-weight: normal;
  letter-spacing: 0;
}

*[sfx_update_count]:before {
  display: block;
  border: 2px solid orange;
  border-radius: 5px;
  padding: 5px;
  background-color: white;
  content: "Updates: [" attr(sfx_update_count) "] " attr(sfx_update_tracking);
}

.sfx_insert_step_1 {
  margin: 2px;
  outline: 2px solid red;
}
.sfx_insert_step_2 {
  margin: 2px;
  outline: 2px solid green;
}
.sfx_insert_step_3 {
  margin: 2px;
  outline: 2px solid blue;
}
.sfx_insert_step_4 {
  margin: 2px;
  outline: 2px solid orange;
}
.sfx_insert_step_5 {
  margin: 2px;
  outline: 2px solid purple;
}
.sfx_insert_step_6 {
  margin: 2px;
  outline: 2px solid lime;
}
.sfx_insert_step_7 {
  margin: 2px;
  outline: 2px solid cyan;
}

.sfx_debug_tab {
  opacity: 0.5;
}
.sfx_debug_tab:hover {
  opacity: 1;
}

#sfx_debugger {
  position: fixed;
  bottom: 0;
  right: 0;
  border: 1px solid black;
  background-color: white;
  color: black;
  z-index: 99999;
}
#sfx_debugger_results {
  width: 40vw;
  height: 75vh;
  overflow: auto;
  clear: both;
  font-family: monospace !important;
}
#sfx_debugger_controls {
  border-bottom: 1px solid #333;
}
#sfx_debugger_controls > div {
  margin: 2px;
}
#sfx_debugger_url {
  margin-left: 10px;
  max-width: 400px;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
}
.sfx_debugger_result {
  border: 1px solid #666;
  margin: 8px;
}
.sfx_debugger_subresult {
  border: 1px solid #ccc;
  margin: 3px;
}
.sfx_debugger_subresult:hover {
  background-color: #F2F4FF;
  cursor: pointer;
}
.sfx_debugger_button {
  float: right;
  height: 16px;
  width: 16px;
  cursor: pointer;
  text-align: center;
  padding: 3px;
  margin: 3px;
  font-size: calc(0.8rem * var(--sfx_ui_scale));
  font-weight: bold;
}
.sfx_debugger_button:hover {
  outline: 1px solid #ccc;
}
.sfx_debugger_warning {
  font-weight: bold;
  color: red;
}
.sfx_debugger_text_header {
  color: #666;
  float: right;
  margin: 1px;
}
.sfx_debugger_action {
  cursor: pointer;
  margin-left: 10px;
  display: inline-block;
}
.sfx_debugger_action:hover {
  text-decoration: underline;
}

.sfx_edit_buf_button {
  padding: 4px;
  outline: 2px solid black;
}
.sfx_edit_buf_button .sfx_edit_buf_selected {
  outline: 2px solid red;
}
.sfx_edit_buf_toggle {
  font-weight: normal;
  color: black;
}
.sfx_edit_buf_post_show {
  display: block !important;
  box-shadow: 5px 5px 5px blue, -5px -5px 5px red;
  opacity: 1;
}
.sfx_edit_buf_post_show > ._4-u2 {
  opacity: 1 !important;
}

/*ELEMENTS*/
/* REUSABLE STYLES */
.sfx_info {
  font-size: calc(0.6rem * var(--sfx_ui_scale));
}
input.sfx_input {
  padding-left: 0.2em;
  border: 1px solid #bec4cd;
  border-radius: 2px;
}
/* BUTTONS */
.sfx_button {
  background-color: #4267B2;
  border: 1px solid #4267B2;
  color: white;
  font-size: calc(0.6rem * var(--sfx_ui_scale));
  line-height: 22px;
  cursor: pointer;
  border-radius: 3px;
  padding: 2px 8px;
  font-weight: bold;
}
.sfx_button:hover {
  background-color: #365899;
}
.sfx_button.secondary {
  background-color: #e7e9ef;
  color: #000000;
  border-color: #d7dce5;
}
.sfx_button.secondary:hover {
  background-color: #d0d5e0;
}
.sfx_button.light {
  color: black;
  padding: 5px 8px;
  background-color: #f6f7f9;
  border: 1px solid #ced0d4;
  border-radius: 2px;
}
/* DIALOG BOXES */
.sfx_dialog_title_bar {
  padding: 10px 12px;
  font-weight: bold;
  line-height: 28px;
  min-height: 28px;
  margin: -10px -10px 0;
  border: 0;
  margin-bottom: 10px;
  color: #fff;
  font-size: calc(0.5rem * var(--sfx_ui_scale));
  letter-spacing: 4px;
  text-transform: uppercase;
  vertical-align: top;
  background: linear-gradient(to right, #2C4372, #3B5998 80%);
}
.sfx_dialog_title_bar .sfx_button {
  letter-spacing: normal !important;
  background-color: #253860;
  border: 0;
}
.sfx_dialog_title_bar .sfx_button.secondary {
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 0;
  font-weight: normal;
}
.sfx_dialog {
  z-index: 99999;
  overflow: hidden;
  position: fixed;
  top: 48px;
  left: 20px;
  width: 90vw;
  min-width: 500px;
  max-width: 1000px;
  max-height: 90vh;
  font-family: helvetica, arial, sans-serif;
  transition: height 0.5s linear;
  color: #404040;
  border: 0;
  border-radius: 3px;
  padding: 10px;
  background-color: #E9EBEE;
  box-shadow: 0 0 5px rgba(105, 118, 136, 0.2), 0 5px 5px rgba(132, 143, 160, 0.2), 0 10px 10px rgba(132, 143, 160, 0.2), 0 20px 20px rgba(132, 143, 160, 0.2);
}
#sfx_options_dialog_sections {
  flex: none;
  width: 125px;
}
#sfx_options_dialog_content {
  padding: 10px;
}
#sfx_options_dialog_body {
  background-color: white;
}
.sfx_options_dialog_section {
  padding: 6px 5px 6px 10px;
  background-color: #F6F7F9;
  font-weight: bold;
  margin: 2px;
  cursor: pointer;
}
.sfx_options_dialog_section.selected {
  background-color: #4267B2;
  color: white;
  cursor: auto;
}
/*END ELEMENTS*/

.sfx_data_table {
  border-collapse: collapse;
}
.sfx_data_table th {
  font-weight: bold;
  background-color: #ccc;
  padding: 5px;
  border: 1px solid #666;
}
.sfx_data_table th.sortable {
  cursor: pointer;
}
.sfx_data_table th.sortable:hover {
  text-decoration: underline;
}
.sfx_data_table td {
  padding: 1px 5px;
  border: 1px solid #ddd;
}

html:not(.sfx_hide_show_all) .sfx_hide_hidden {
  display: none !important;
}
.sfx_hide_frame {
  position: absolute;
  z-index: 99999;
  background-color: rgba(0, 255, 0, 0.2);
  outline: 2px solid lime;
  margin: 0 !important;
  font-weight: bold;
  text-align: center;
  color: transparent;
}
.sfx_hide_frame_hidden {
  color: white;
  background-color: rgba(255, 0, 0, 0.2);
  outline: 2px solid red;
}
.sfx_hide_frame_hidden:hover {
  outline: 2px dashed green;
}
.sfx_hide_frame:hover {
  outline: 2px dashed red;
  background-color: rgba(218, 165, 32, 0.5);
  color: black;
  cursor: pointer;
}
.sfx_hide_bubble {
  max-width: 400px;
}
.sfx_hide_bubble > div {
  margin: 10px 0;
}
.sfx_hide_bubble .sfx_button {
  margin-left: auto;
  margin-right: auto;
}
.sfx_hide_bubble label {
  font-weight: normal;
  color: black;
}
.sfx_hide_show_overflow.sfx_hide_show_overflow {
  overflow: visible !important;
}
.sfx_hide_checkmark {
  filter: invert(1);
  background-repeat: no-repeat;
}
[data-hover='hider-tooltip'][data-hider-title]:hover::after {
  color: blue;
  background-color: white;
  font-size: large;
  font-weight: bold;
  line-height: calc(0.75rem * var(--sfx_ui_scale));
  text-transform: none;
  text-align: center;
  content: attr(data-hider-title);
  border: 4px solid blueviolet;
  border-radius: 12px;
  padding: 2px;
  margin: 0px;
  min-width: calc(4rem * var(--sfx_ui_scale));
  width: auto;
  max-width: calc(22rem * var(--sfx_ui_scale));
  height: auto;
  max-height: calc(6rem * var(--sfx_ui_scale));
  position: absolute;
  display: block;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;
  z-index: 200000;
  opacity: 0.75;
}
/* Special adjustment for the tooltips inside the Hide/Show box */
.sfx_hide_bubble [data-hover='hider-tooltip']:hover::after {
  transform: none;
  top: 75%;
  left: 37%;
  right: 33%;
}
/* Position the corner tooltips */
.sfx_hide_bubble [style*=right][style*=bottom]:hover::after {
  transform: translate(calc(-4.5rem * var(--sfx_ui_scale)), calc(-3rem * var(--sfx_ui_scale)));
}
.sfx_hide_bubble [style*=right]:hover::after {
  transform: translate(calc(-4.5rem * var(--sfx_ui_scale)), 0);
}
.sfx_hide_bubble [style*=bottom]:hover::after {
  transform: translate(0, calc(-3rem * var(--sfx_ui_scale)));
}
/* Tooltip delays */
@-webkit-keyframes sfx_tooltip_anim {
  from {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  to {
    opacity: 0.75;
  }
}
@keyframes sfx_tooltip_anim {
  from {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  to {
    opacity: 0.75;
  }
}
[data-hover='hider-tooltip']:not([data-hider-delay]):hover::after {
  -webkit-animation: sfx_tooltip_anim 0.1s;
          animation: sfx_tooltip_anim 0.1s;
}
[data-hover='hider-tooltip'][data-hider-delay='650']:hover::after {
  -webkit-animation: sfx_tooltip_anim 0.65s;
          animation: sfx_tooltip_anim 0.65s;
}
[data-hover='hider-tooltip'][data-hider-delay='1000']:hover::after {
  -webkit-animation: sfx_tooltip_anim 1s;
          animation: sfx_tooltip_anim 1s;
}

#sfx_log_viewer {
  position: fixed;
  bottom: 0;
  right: 0;
  border: 1px solid black;
  background-color: white;
  color: black;
  z-index: 99999;
}
#sfx_log_viewer_entries {
  width: 40vw;
  height: 50vh;
  overflow: auto;
  white-space: pre;
  clear: both;
}
#sfx_log_controls {
  border-bottom: 1px solid #333;
}
.sfx_log_button {
  float: right;
  height: 16px;
  width: 16px;
  cursor: pointer;
  text-align: center;
  padding: 3px;
  margin: 3px;
  font-size: calc(0.8rem * var(--sfx_ui_scale));
  font-weight: bold;
}
.sfx_log_button:hover {
  outline: 1px solid #ccc;
}
.sfx_log_entry {
  font-family: monospace !important;
}

.sfx_hide_read .sfx_post_read:not(.sfx_show_read) > :not(.sfx_read_note) {
  display: none;
}
html:not(.sfx_hide_read) .sfx_read_note > *,
.sfx_hide_read .sfx_post_read.sfx_show_read .sfx_read_show,
.sfx_hide_read .sfx_post_read:not(.sfx_show_read) .sfx_read_hide {
  display: none;
}
.sfx_hide_read .sfx_post_read:not(.sfx_show_read),
.sfx_filter_hidden:not(.sfx_filter_hidden_show) {
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
}
.sfx_read_note {
  margin: 1px;
  font-size: calc(0.5rem * var(--sfx_ui_scale));
  cursor: pointer;
  padding: 0 5px;
  color: var(--primary-text) !important;
}
.sfx_cp_mark_all_read input {
  border-radius: 10px;
  font-size: calc(0.55rem * var(--sfx_ui_scale));
  padding: 2px 3px;
  line-height: 12px;
  font-weight: normal;
}
.sfx_cp_mark_all_read input[disabled="true"] {
  background-color: #eee;
  color: #aaa;
}
html[sfx_context_type=marketplace] #sfx_post_action_tray_container {
  position: relative;
  width: 38%;
  left: 70%;
  top: 2%;
  z-index: 1;
}
#sfx_post_action_tray {
  position: absolute;
  right: 32px;
  top: 1px;
  height: 16px;
  overflow: visible;
}
#sfx_post_action_tray > * {
  display: inline-block;
  width: 16px;
  height: 16px;
  float: right;
  cursor: pointer;
  margin-left: 7px;
  opacity: 0.5;
  font-size: calc(0.8rem * var(--sfx_ui_scale));
  line-height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  color: #b1b5bb;
  z-index: 350;
}
#sfx_post_action_tray > *:hover {
  opacity: 1;
}
.sfx_post_action_menu {
  position: absolute;
  display: none;
  min-width: 150px;
  margin: 2px;
  padding: 4px;
  cursor: pointer;
  background-color: white;
  border: 1px solid #666;
  z-index: 9999;
}
.sfx_post_action_menu > div {
  padding: 4px 2px 4px 10px;
  font-size: calc(0.6rem * var(--sfx_ui_scale));
  font-family: arial, sans-serif;
}
.sfx_post_action_menu > div:hover {
  background-color: #7187B5;
  color: white;
}

.sfx_filter_subscribed {
  opacity: 0.5;
  background-color: #d4ffd3;
}
.sfx_filter_subscribed .sfx_square_add {
  display: none;
}

.sfx_tweak_subscribed {
  opacity: 0.5;
  background-color: #afffbe;
}
.sfx_tweak_subscribed .sfx_square_add {
  display: none;
}

div.sfx_option {
  line-height: 24px;
  vertical-align: middle;
}
div.sfx_option input[type=checkbox]:not(.normal) ~ label {
  float: left;
  margin-right: 5px;
}
.sfx_square_control {
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 3px;
  padding: 0;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  font-weight: bold;
  font-size: calc(1rem * var(--sfx_ui_scale));
  line-height: 20px;
  background-color: #fff;
  color: #4267B2;
  /*
  &:hover {
    opacity:.9;
  }*/
}
.sfx_square_add {
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 3px;
  padding: 0;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  font-weight: bold;
  font-size: calc(1rem * var(--sfx_ui_scale));
  line-height: 20px;
  background-color: #fff;
  color: #4267B2;
  /*
  &:hover {
    opacity:.9;
  }*/
  color: white;
  background-color: #42b72a;
  box-shadow: none;
}
.sfx_square_delete {
  color: #a60000;
  background-color: white;
}
.sfx_dialog input[type=checkbox]:not(.normal) {
  display: none;
}
.sfx_dialog input[type=checkbox]:not(.normal) ~ label {
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 3px;
  padding: 0;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  font-weight: bold;
  font-size: calc(1rem * var(--sfx_ui_scale));
  line-height: 20px;
  background-color: #fff;
  color: #4267B2;
  /*
  &:hover {
    opacity:.9;
  }*/
  box-shadow: inset 0 0 0 2px #3B5998;
  color: white;
}
.sfx_dialog input[type=checkbox]:not(.normal) ~ label:hover {
  opacity: 1;
}
.sfx_dialog input[type=checkbox]:not(.normal):checked ~ label {
  background-color: #3B5998;
  color: #fff;
}
.sfx_dialog input[type=checkbox]:not(.normal):checked ~ label:after {
  content: '\\2714';
  height: 20px;
  width: 20px;
  display: inline-block;
  font-size: calc(1rem * var(--sfx_ui_scale));
  line-height: 20px;
  color: white;
}
/* Options List Table */
.sfx_options_dialog_table {
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid #ccc;
  width: 95%;
  margin-top: 10px;
  margin-bottom: 5px;
}
.sfx_options_dialog_table thead {
  border-bottom: 2px solid #4267B2;
}
.sfx_options_dialog_table thead tr th {
  text-align: left;
  font-weight: bold;
  padding: 3px 5px;
  color: #4267B2;
}
.sfx_options_dialog_table tbody tr:hover td {
  background-color: #E9EBEE;
}
.sfx_options_dialog_table tbody td {
  border-top: 1px solid #ccc;
  padding: 3px;
  vertical-align: top;
}
.sfx_options_dialog_table tbody td.repeat {
  border-top: none;
  visibility: hidden;
}
.sfx_options_dialog_table .sfx_options_dialog_option_highlighted {
  background-color: #afffbe !important;
}
.sfx_options_dialog_table .sfx_options_dialog_option_title {
  font-size: calc(0.55rem * var(--sfx_ui_scale));
  font-weight: bold;
  width: 160px;
  padding-right: 20px;
}
.sfx_options_dialog_table .sfx_options_dialog_option_description {
  font-size: calc(0.6rem * var(--sfx_ui_scale));
  color: #5a5a5a;
}
.sfx_options_dialog_table .sfx_options_dialog_option_action {
  padding-right: 10px;
  padding-left: 10px;
}
.sfx_options_dialog_table .sfx_options_dialog_option_action input[type=checkbox] {
  transform: scale(1.25);
}
.sfx_options_dialog_table .sfx_options_dialog_option_disabled {
  opacity: 0.7;
}
#sfx_options_dialog_actions {
  float: right;
}
/* Dialog Panels */
.sfx_panel {
  padding: 5px;
}
.sfx_panel_title_bar {
  padding: 0 3px;
  color: #4267B2;
  font-weight: bold;
  font-size: calc(0.7rem * var(--sfx_ui_scale));
  line-height: 18px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
}
.sfx_options_dialog_panel {
  padding: 5px;
}
.sfx_options_dialog_panel > div:last-child {
  margin-top: 10px;
}
.sfx_options_dialog_panel .sfx_options_dialog_panel {
  background-color: #e7e9ef;
  margin: 10px 0;
}
.sfx_options_dialog_panel .sfx_options_dialog_panel .sfx_panel_title_bar {
  font-size: calc(0.9rem * var(--sfx_ui_scale));
}
.sfx_options_dialog_panel .sfx_options_dialog_panel_button {
  float: right;
  margin: 5px;
}
/* Filter Styles */
.sfx_options_dialog_filter_conditions,
.sfx_options_dialog_filter_actions {
  margin-top: 0;
}
.sfx_options_dialog_panel_header {
  font-weight: bold;
  margin: 30px 0 10px;
  color: #697688;
  font-size: calc(0.75rem * var(--sfx_ui_scale));
  background-color: #E9EBEE;
  padding: 10px;
}

.sfx_permalink_target [aria-expanded] .S2F_pos_abs {
  opacity: 1;
}
.__fb-dark-mode .sfx_permalink_target [aria-expanded] .S2F_pos_abs {
  filter: invert(100%) contrast(100%);
}

[sfx_photo_tags]:hover::after {
  content: attr(sfx_photo_tags);
  color: white;
  font-size: calc(0.7rem * var(--sfx_ui_scale));
  line-height: calc(0.9rem * var(--sfx_ui_scale));
  font-weight: bold;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #000000;
  border: 1px solid #999;
  margin: 5px;
  padding: 2px;
}
.sfx_photo_tags_text {
  display: none;
}

.sfx_filter_hidden:not(.sfx_filter_hidden_show) > *:not(.sfx_filter_hidden_note) {
  display: none !important;
}
.sfx_filter_hidden_note {
  padding: 0 5px;
  border: 1px dashed #333;
  font-size: calc(0.55rem * var(--sfx_ui_scale));
  opacity: 0.5;
  cursor: pointer;
  margin-top: 2px;
  color: var(--primary-text) !important;
}
.sfx_filter_hidden_note:hover {
  opacity: 1;
}
[sfx_post].sfx_filter_hidden_show .sfx_filter_hider_note {
  display: none;
}
[sfx_post]:not(.sfx_filter_hidden_show) .sfx_filter_hider_nyet {
  display: none;
}

#sfx_control_panel .sfx_filter_tab {
  cursor: pointer;
  padding: 2px 10px 2px 5px;
  background-color: #F6F7F9;
}
#sfx_control_panel .sfx_filter_tab:hover {
  background-color: #5890FF;
}
#sfx_control_panel .sfx_filter_tab:hover .sfx_count {
  color: black;
}
#sfx_control_panel .sfx_filter_tab.sfx_tab_selected {
  background-color: #4267B2;
  color: white;
}
#sfx_control_panel .sfx_filter_tab.sfx_tab_selected .sfx_count {
  color: white;
}
#sfx_control_panel .sfx_filter_tab.sfx_tab_occupied {
  font-weight: bold;
}
#sfx_control_panel .sfx_filter_tab:not(.sfx_tab_occupied):not(.sfx_tab_selected):not(:hover) {
  background-color: #d7dce5;
}
#sfx_control_panel .sfx_count {
  font-style: italic;
  color: #999;
}

.sfx_scroll_pause {
  display: none;
}
/*
 * Posts must be 'visible' during post ID lookup for the injected
 * pointer events to be processed.  This keeps them out of user's
 * sight, and avoids the worst of the page & scrollbar jitter.
 */
.sfx_touch {
  display: block !important;
  position: absolute;
  height: 111px;
  width: 111px;
  overflow: hidden;
  opacity: 0;
}

/* "Sticky" note */
.sfx_sticky_note {
  position: absolute;
  min-height: 14px;
  min-width: 150px;
  right: 100%;
  margin-right: 8px;
  top: 50%;
  font-family: arial;
  background-color: #FFFFE5;
  color: black;
  border: 1px solid #3F5C71;
  font-size: calc(0.6rem * var(--sfx_ui_scale));
  padding: 3px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 0 5px #888888;
  z-index: 9999 !important;
}
.sfx_sticky_note_right {
  left: 100%;
  right: auto;
  margin-left: 8px;
  margin-right: auto;
}
.sfx_sticky_note_left {
  right: 100%;
  left: auto;
  margin-right: 8px;
  margin-left: auto;
}
.sfx_sticky_note_bottom {
  top: 200%;
  right: auto;
  left: -25%;
  margin-top: 8px;
  margin-right: 0;
  margin-left: -3px;
}
.sfx_sticky_note_top {
  top: -100%;
  right: auto;
  left: -25%;
  margin-bottom: 8px;
  margin-right: 0;
  margin-left: -3px;
}
.sfx_sticky_note_arrow_border {
  border-color: transparent transparent transparent #666666;
  border-style: solid;
  border-width: 7px;
  height: 0;
  width: 0;
  position: absolute;
  margin-top: -7px;
  top: 50%;
  right: -15px;
}
.sfx_sticky_note_right .sfx_sticky_note_arrow_border {
  border-color: transparent #666666 transparent transparent;
  top: 50%;
  right: auto;
  left: -15px;
}
.sfx_sticky_note_left .sfx_sticky_note_arrow_border {
  border-color: transparent transparent transparent #666666;
  top: 50%;
  right: -15px;
  left: auto;
}
.sfx_sticky_note_bottom .sfx_sticky_note_arrow_border {
  border-color: transparent transparent #666666 transparent;
  left: 50%;
  right: auto;
  top: -15px;
  margin-left: -7px;
  margin-top: 0;
}
.sfx_sticky_note_top .sfx_sticky_note_arrow_border {
  border-color: #666666 transparent transparent transparent;
  left: 50%;
  right: auto;
  top: auto;
  bottom: -15px;
  margin-left: -7px;
  margin-bottom: 0;
}
.sfx_sticky_note_arrow {
  border-color: transparent transparent transparent #ffa;
  border-style: solid;
  border-width: 7px;
  height: 0;
  width: 0;
  position: absolute;
  top: 50%;
  right: -13px;
  margin-top: -7px;
}
.sfx_sticky_note_right .sfx_sticky_note_arrow {
  border-color: transparent #ffa transparent transparent;
  top: 50%;
  right: auto;
  left: -13px;
}
.sfx_sticky_note_left .sfx_sticky_note_arrow {
  border-color: transparent transparent transparent #ffa;
  top: 50%;
  right: -13px;
  left: auto;
}
.sfx_sticky_note_bottom .sfx_sticky_note_arrow {
  border-color: transparent transparent #ffa transparent;
  left: 50%;
  right: auto;
  top: -13px;
  margin-left: -7px;
  margin-top: 0;
}
.sfx_sticky_note_top .sfx_sticky_note_arrow {
  border-color: #ffa transparent transparent transparent;
  left: 50%;
  right: auto;
  bottom: -13px;
  top: auto;
  margin-left: -7px;
  margin-bottom: 0;
}
.sfx_sticky_note_close {
  float: left;
  width: 9px;
  height: 9px;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  background-image: url("data:image/gif,GIF89a%07%00%07%00%91%00%00%00%00%00%FF%FF%FF%9C%9A%9C%FF%FF%FF!%F9%04%01%00%00%03%00%2C%00%00%00%00%07%00%07%00%00%02%0C%94%86%A6%B3j%C8%5Er%F1%B83%0B%00%3B");
  border: 1px solid transparent;
  float: right;
}
div.sfx_sticky_note_close:hover {
  background-image: url("data:image/gif,GIF89a%07%00%07%00%91%00%00%00%00%00%FF%FF%FF%FF%FF%FF%00%00%00!%F9%04%01%00%00%02%00%2C%00%00%00%00%07%00%07%00%00%02%0C%04%84%A6%B2j%C8%5Er%F1%B83%0B%00%3B");
  border: 1px solid black;
}

.sfx_link {
  text-decoration: underline !important;
  cursor: pointer !important;
}
.sfx_hover_link:hover {
  text-decoration: underline !important;
  cursor: pointer !important;
}
.sfx_clearfix:after {
  clear: both;
  content: '.';
  display: block;
  font-size: 0;
  height: 0;
  line-height: 0;
  visibility: hidden;
}
.sfx_info_icon {
  content: "i";
  position: absolute;
  display: block;
  left: 6px;
  top: 6px;
  width: 20px;
  height: 20px;
  font-size: calc(0.9rem * var(--sfx_ui_scale));
  line-height: 18px;
  text-align: center;
  font-style: italic;
  vertical-align: middle;
  font-family: serif !important;
  font-weight: bold;
  background-color: #5890FF;
  color: white;
  padding: 0;
  border-radius: 20px;
}
.sfx_info {
  background-color: #FFFFE5;
  border: 1px solid #666;
  border-radius: 6px;
  padding: 7px;
  margin: 5px;
  font-family: arial;
  font-size: calc(0.6rem * var(--sfx_ui_scale));
  position: relative;
}
.sfx_info:not(.no_icon) {
  padding-left: 35px;
}
.sfx_info:not(.no_icon)::before {
  content: "i";
  position: absolute;
  display: block;
  left: 6px;
  top: 6px;
  width: 20px;
  height: 20px;
  font-size: calc(0.9rem * var(--sfx_ui_scale));
  line-height: 18px;
  text-align: center;
  font-style: italic;
  vertical-align: middle;
  font-family: serif !important;
  font-weight: bold;
  background-color: #5890FF;
  color: white;
  padding: 0;
  border-radius: 20px;
}
.sfx_highlight {
  background-color: yellow;
  color: black;
}
.sfx_label_value {
  display: table;
  width: 95%;
  margin: 3px;
}
.sfx_label_value > * {
  display: table-cell;
}
.sfx_label_value input.sfx_wide {
  width: 100%;
}
.sfx_label_value > *:first-child {
  font-weight: bold;
  padding-right: 10px;
  width: 1px;
}
.sfx_label_value > .stretch {
  width: 100%;
}
/* A "Help" icon with tooltip */
.sfx-help-icon:after {
  display: inline-block;
  height: 14px;
  width: 14px;
  vertical-align: middle;
  background-color: #7187B5;
  color: white;
  border-radius: 50%;
  content: "?";
  cursor: help;
  text-align: center;
  line-height: 12px;
  font-size: calc(0.6rem * var(--sfx_ui_scale));
  font-weight: bold;
  letter-spacing: normal;
}
/* FLEXBOX */
.sfx-flex-row,
.sfx-flex-column {
  display: flex;
}
.sfx-flex-row > *,
.sfx-flex-column > * {
  flex: auto;
  align-self: auto;
  overflow: auto;
}
.sfx-flex-row,
.sfx-flex-column {
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
}
.sfx-flex-row {
  flex-direction: row;
}
.sfx-flex-column {
  flex-direction: column;
}
.sfx-flex-row-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.sfx-flex-row-container > * {
  margin-right: 5px;
}
.sfx-flex-row-container > *:not(.stretch) {
  flex-shrink: 0 ;
}
.sfx-flex-row-container > .stretch {
  flex-grow: 1;
}
.sfx-flex-row-container > .stretch > .stretch {
  width: 100%;
}

.sfx_unread_errmsg {
  color: #f47;
}


.mark_read_filter {
    background: url('data:image/gif;base64,R0lGODdhEAAQAJAAALG1u////yH5BAEAAAEALAAAAAAQABAAAAIgjI8ZwO0Po1vyndoSVhRy431gJo5MaQJop6KTS5bv+hUAOw==');
}

.mark_read_markit {
    background: url('data:image/gif;base64,R0lGODdhEAAQAJAAALG1u////yH5BAEAAAEALAAAAAAQABAAAAIgjI+pC73Z3DMRTBpvqHrnyyGfJ4lZCFVoqoLrM7pWRxcAOw==');
}

.mark_read_nomark {
    background: url('data:image/gif;base64,R0lGODdhEAAQAJAAALG1u////yH5BAEAAAEALAAAAAAQABAAAAIijI+pC73Z3DMRTBpZ3Rbx/VSQFIijY55cuE7gVZJXBtdGAQA7');
}

.mark_read_wrench {
    background: url('data:image/gif;base64,R0lGODdhEAAQAPUAALq9wra5v/39/bO3vd7f4rS4vvn5+vf3+O7v8P7+/rW4vvz8/bW5v7W5vujp69/h5Nze4fz8/O/w8ezt7/Lz9M3Q1Ly/xbO2vOHj5cDDyPX19srN0e7u8L7BxszP0rS4vbq+w/Hx8re7wLK2vObn6dvd4NPV2MLFycXIzMnM0Pb298vN0bu/xPj4+fn5+dja3cbJzrG1u////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAADIALAAAAAAQABAAAAZyQJlwKEQ8iMihZhMzJZEkRSxgeA4Rg1isRExAkBWtYkEkBJAnrUgwPDBiSJY2tmLLUrECEjCPdV4wWgBECxd9hyhEGIeHBEMUAYxzGXYqfHMDIFkjHlUyLRZzHwQRQi4JRAeXDRNWQyEFARyuRA4StEJBADs=');
}
`,sfx_menu_style=`
/* Make room for the SFX Menu badge */
html[dir=ltr] [role=banner] > :last-child {
  right: 50px;
}
#sfx_badge {
  position: fixed;
  z-index: 350;
  cursor: pointer;
}
#sfx_badge .sfx_sticky_note {
  white-space: nowrap;
}
#sfx_badge:not(:hover)::after {
  opacity: 0.5;
}
#sfx_badge[sfx_notification_count="X"]::after {
  background-color: #b66;
}
#sfx_badge_logo {
  position: relative;
  z-index: 351;
  color: white;
  font-size: calc(0.45rem * var(--sfx_ui_scale));
  text-align: center;
  height: 30px;
  width: 30px;
  border-radius: 16px;
  opacity: 0.5;
  border: 2px solid transparent;
  box-shadow: 3px 3px 3px #1c1c1c;
  background: #2C4166 url(data:image/gif;base64,R0lGODlhFwAXAOYAAJOgv3%2BOr4KRsYWUtIiXt5GfvpmnxZimxJelw5mmxKCuzKCty6GuzKOwzaKvzKe00aWyz09hhFVnilZoi1lrjlxtkGh5mml6m2x9nmt8nW%2BAoW19nnGCo29%2FoHSEpXKCo3yMrH%2BPr4SUs4CProeWtYWUs4mYt4iXtoybuoqZuI6dvI2cupWkwpalwpakwZ2ryKCuy56syaGvzCxBZi1CZy5DaDFGazJHbDFFajNHbDVJbjZKbzhMcThMcDpOczpOcj1RdUBUeEBTd0JWekFVeERYe0VYfElcf1FkhlRniVhqjFxukGFzlGV3mHqLqjBFaTNIbDZLbzlOcv%2F%2F%2FwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAFMALAAAAAAXABcAAAe4gFMzg4SFhoeCh4Y9ShkeHUtSipNNLw%2BXlwxHk4YSmJcQAxQ7nIUlmAcbQ6WGOwuYH6yHEZ8JNrKFHJ8PE4Y1nDUFuyKDOUgCTJxFuw8NERgIlxecGsy7DUSTQArWnxWTNSTdmB7gTuOXATSKTyPMDiBJLA8mN4o4IbswG0CDFgY8FEER9wmFkEJR%2Bh3aQWDXCSi4fqzYlUIHrhkqdgGIcnGGjE8ufHScwQBVkJEzpsSI0cIIyimBAAA7) no-repeat center center;
}
#sfx_badge:hover #sfx_badge_logo {
  opacity: 1;
  border: 2px solid white;
  box-shadow: none;
}
#sfx_badge_menu {
  z-index: 350;
  display: none;
  position: absolute;
  background-color: transparent;
  color: black;
  width: 250px;
}
#sfx_badge_menu.left {
  right: 12px;
}
#sfx_badge_menu.right {
  left: 25px;
}
#sfx_badge_menu.down {
  top: 0;
}
#sfx_badge_menu.up {
  bottom: 15px;
}
#sfx_badge_menu.up #sfx_badge_menu_wrap {
  display: flex;
  flex-direction: column-reverse;
}
#sfx_badge_menu_wrap {
  background-color: white;
  border-radius: 4px;
  border-color: #ddd;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0 0 5px rgba(105, 118, 136, 0.2), 0 5px 5px rgba(132, 143, 160, 0.2), 0 10px 10px rgba(132, 143, 160, 0.2), 0 20px 20px rgba(132, 143, 160, 0.2), 0 0 5px rgba(105, 118, 136, 0.3);
}
.sfx_menu_section {
  margin-bottom: 10px;
}
.sfx_menu_section:last-child {
  margin-bottom: 0;
}
.sfx_menu_section .sfx_menu_section_title {
  color: #3B5998;
  font-size: calc(0.45rem * var(--sfx_ui_scale));
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #bec4cd;
  padding: 0 5px;
}
.sfx_menu_section .sfx_menu_item {
  padding: 3px 5px 3px 15px;
  font-size: calc(0.6rem * var(--sfx_ui_scale));
}
.sfx_menu_section .sfx_menu_item .sfx_news_title {
  font-size: calc(0.6rem * var(--sfx_ui_scale));
  color: #666;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1px 5px;
}
.sfx_menu_section .sfx_menu_item:hover {
  background-color: #7187B5;
  color: white;
}
.sfx_menu_section .sfx_menu_item:hover .sfx_news_title {
  color: white;
}
.sfx_menu_section .sfx_menu_item a.sfx_menu_item_content {
  text-decoration: none;
  color: inherit;
}
#sfx_badge_menu_item_page {
  position: relative;
}

[sfx_notification_count]:not([sfx_notification_count='0'])::after {
  content: attr(sfx_notification_count);
  background-color: #F40008;
  color: white;
  position: absolute;
  display: inline-block;
  top: -3px;
  left: -3px;
  margin: 0 2px -1px 0;
  padding: 2px 1.5px 0;
  line-height: calc(0.7rem * var(--sfx_ui_scale));
  font-size: calc(0.6rem * var(--sfx_ui_scale));
  font-weight: bold;
  border: 1px solid #2C4166;
  border-radius: 3px;
  z-index: 352;
}
.sfx_menu_item span[sfx_notification_count]::after {
  position: static;
}

`;try{var XLib=function(f){f=f||{};/*! Zepto 1.2.0 (generated with Zepto Builder) - zepto event - zeptojs.com/license */var u=function(){var o,r,c,_,m=[],S=m.concat,b=m.filter,R=m.slice,j=window.document,N={},h={},E={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},$=/^\s*<(\w+|!)[^>]*>/,P=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,V=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,W=/^(?:body|html)$/i,G=/([A-Z])/g,ne=["val","css","html","text","data","width","height","offset"],ae=["after","prepend","before","append"],M=j.createElement("table"),F=j.createElement("tr"),w={tr:j.createElement("tbody"),tbody:M,thead:M,tfoot:M,td:F,th:F,"*":j.createElement("div")},x=/complete|loaded|interactive/,g=/^[\w-]*$/,z={},C=z.toString,D={},U,ee,_e,ue=j.createElement("div"),Ae={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},H=Array.isArray||function(a){return a instanceof Array};D.mogrify=a=>typeof a=="string"&&typeof v=="object"&&typeof v.gib_convert=="function"?v.gib_convert(a):a,D.matches=function(a,y){if(!y||!a||a.nodeType!==1)return!1;var L=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(y=D.mogrify(y),L)return L.call(a,y);var Z,re=a.parentNode,de=!re;return de&&(re=ue).appendChild(a),Z=~D.qsa(re,y).indexOf(a),de&&ue.removeChild(a),Z};function A(a){return a==null?String(a):z[C.call(a)]||"object"}function B(a){return A(a)=="function"}function Y(a){return a!=null&&a==a.window}function le(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function ie(a){return A(a)=="object"}function q(a){return ie(a)&&!Y(a)&&Object.getPrototypeOf(a)==Object.prototype}function J(a){var y=!!a&&"length"in a&&a.length,L=c.type(a);return L!="function"&&!Y(a)&&(L=="array"||y===0||typeof y=="number"&&y>0&&y-1 in a)}function se(a){return b.call(a,function(y){return y!=null})}function Q(a){return a.length>0?c.fn.concat.apply([],a):a}U=function(a){return a.replace(/-+(.)?/g,function(y,L){return L?L.toUpperCase():""})};function oe(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}ee=function(a){return b.call(a,function(y,L){return a.indexOf(y)==L})},_e=function(a){return b.call(a,function(y,L){return a.indexOf(y)==L&&a.indexOf(y,L+1)==-1})};function be(a){return a in h?h[a]:h[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function ve(a,y){return typeof y=="number"&&!E[oe(a)]?y+"px":y}function Se(a){var y,L;return N[a]||(y=j.createElement(a),j.body.appendChild(y),L=getComputedStyle(y,"").getPropertyValue("display"),y.parentNode.removeChild(y),L=="none"&&(L="block"),N[a]=L),N[a]}function he(a){return"children"in a?R.call(a.children):c.map(a.childNodes,function(y){if(y.nodeType==1)return y})}function pe(a,y){var L,Z=a?a.length:0;for(L=0;L<Z;L++)this[L]=a[L];this.length=Z,this.selector=y||""}D.fragment=function(a,y,L){var Z,re,de;return P.test(a)&&(Z=c(j.createElement(RegExp.$1))),Z||(a.replace&&(a=a.replace(V,"<$1></$2>")),y===o&&(y=$.test(a)&&RegExp.$1),y in w||(y="*"),de=w[y],de.innerHTML=""+a,Z=c.each(R.call(de.childNodes),function(){de.removeChild(this)})),q(L)&&(re=c(Z),c.each(L,function(xe,Ee){ne.indexOf(xe)>-1?re[xe](Ee):re.attr(xe,Ee)})),Z},D.Z=function(a,y){return new pe(a,y)},D.isZ=function(a){return a instanceof D.Z},D.init=function(a,y){var L;if(a)if(typeof a=="string")if(a=D.mogrify(a),a=a.trim(),a[0]=="<"&&$.test(a))L=D.fragment(a,RegExp.$1,y),a=null;else{if(y!==o)return c(y).find(a);L=D.qsa(j,a)}else{if(B(a))return c(j).ready(a);if(D.isZ(a))return a;if(H(a))L=se(a);else if(ie(a))L=[a],a=null;else if($.test(a))L=D.fragment(a.trim(),RegExp.$1,y),a=null;else{if(y!==o)return c(y).find(a);L=D.qsa(j,a)}}else return D.Z();return D.Z(L,a)},c=function(a,y){return D.init(a,y)};function ge(a,y,L){for(r in y)L&&(q(y[r])||H(y[r]))?(q(y[r])&&!q(a[r])&&(a[r]={}),H(y[r])&&!H(a[r])&&(a[r]=[]),ge(a[r],y[r],L)):y[r]!==o&&(a[r]=y[r])}c.extend=function(a){var y,L=R.call(arguments,1);return typeof a=="boolean"&&(y=a,a=L.shift()),L.forEach(function(Z){ge(a,Z,y)}),a},D.qsa=function(a,y){y=D.mogrify(y);var L,Z=y[0]=="#",re=!Z&&y[0]==".",de=Z||re?y.slice(1):y,xe=g.test(de);return a.getElementById&&xe&&Z?(L=a.getElementById(de))?[L]:[]:a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11?[]:R.call(xe&&!Z&&a.getElementsByClassName?re?a.getElementsByClassName(de):a.getElementsByTagName(y):a.querySelectorAll(y))};function we(a,y){return y==null?c(a):c(a).filter(y)}c.contains=j.documentElement&&j.documentElement.contains?function(a,y){return a!==y&&a.contains(y)}:function(a,y){for(;y&&(y=y.parentNode);)if(y===a)return!0;return!1};function ke(a,y,L,Z){return B(y)?y.call(a,L,Z):y}function Pe(a,y,L){L==null?a.removeAttribute(y):a.setAttribute(y,L)}function Ce(a,y){var L=a.className||"",Z=L&&L.baseVal!==o;if(y===o)return Z?L.baseVal:L;Z?L.baseVal=y:a.className=y}function je(a){try{return a&&(a=="true"||(a=="false"?!1:a=="null"?null:+a+""==a?+a:/^[\[\{]/.test(a)?c.parseJSON(a):a))}catch{return a}}c.type=A,c.isFunction=B,c.isWindow=Y,c.isArray=H,c.isObject=ie,c.isPlainObject=q,c.isEmptyObject=function(a){var y;for(y in a)return!1;return!0},c.isNumeric=function(a){var y=Number(a),L=typeof a;return a!=null&&L!="boolean"&&(L!="string"||a.length)&&!isNaN(y)&&isFinite(y)||!1},c.inArray=function(a,y,L){return m.indexOf.call(y,a,L)},c.camelCase=U,c.dasherize=oe,c.trim=function(a){return a==null?"":String.prototype.trim.call(a)},c.uuid=0,c.support={},c.expr={},c.noop=function(){},c.map=function(a,y){var L,Z=[],re,de;if(J(a))for(re=0;re<a.length;re++)L=y(a[re],re),L!=null&&Z.push(L);else for(de in a)L=y(a[de],de),L!=null&&Z.push(L);return Q(Z)},c.each=function(a,y){var L,Z;if(J(a)){for(L=0;L<a.length;L++)if(y.call(a[L],L,a[L])===!1)return a}else for(Z in a)if(y.call(a[Z],Z,a[Z])===!1)return a;return a},c.grep=function(a,y){return b.call(a,y)},c.cssProp=function(a,y,L){let Z=a.style[U(y)];return(Z===o||/^($|inherit|initial|unset|revert)/i.test(Z))&&(Z=(L||getComputedStyle(a)).getPropertyValue(oe(y))),Z},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,y){z["[object "+y+"]"]=y.toLowerCase()}),c.fn={constructor:D.Z,length:0,forEach:m.forEach,reduce:m.reduce,push:m.push,sort:m.sort,splice:m.splice,indexOf:m.indexOf,concat:function(){var a,y,L=[];for(a=0;a<arguments.length;a++)y=arguments[a],L[a]=D.isZ(y)?y.toArray():y;return S.apply(D.isZ(this)?this.toArray():this,L)},map:function(a){return c(c.map(this,function(y,L){return a.call(y,L,y)}))},slice:function(){return c(R.apply(this,arguments))},ready:function(a){return x.test(j.readyState)&&j.body?a(c):j.addEventListener("DOMContentLoaded",function(){a(c)},{capture:!1,once:!0}),this},get:function(a){return a===o?R.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return m.every.call(this,function(y,L){return a.call(y,L,y)!==!1}),this},filter:function(a){return B(a)?this.not(this.not(a)):c(b.call(this,function(y){return D.matches(y,a)}))},add:function(a,y){return c(ee(this.concat(c(a,y))))},is:function(a){return this.length>0&&D.matches(this[0],a)},not:function(a){var y=[];if(B(a)&&a.call!==o)this.each(function(Z){a.call(this,Z)||y.push(this)});else{var L=typeof a=="string"?this.filter(a):J(a)&&B(a.item)?R.call(a):c(a);this.forEach(function(Z){L.indexOf(Z)<0&&y.push(Z)})}return c(y)},has:function(a){return this.filter(function(){return ie(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!ie(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!ie(a)?a:c(a)},find:function(a){var y,L=this;return a?typeof a=="object"?y=c(a).filter(function(){var Z=this;return m.some.call(L,function(re){return c.contains(re,Z)})}):this.length==1?y=c(D.qsa(this[0],a)):y=this.map(function(){return D.qsa(this,a)}):y=c(),y},probe:function(a){return this.filter(function(){return c(this).is(a)}).add(this.find(a))},closest:function(a,y){var L=[],Z=typeof a=="object"&&c(a);return this.each(function(re,de){for(;de&&!(Z?Z.indexOf(de)>=0:D.matches(de,a));)de=de!==y&&!le(de)&&de.parentNode;de&&L.indexOf(de)<0&&L.push(de)}),c(L)},nearby:function(a,y){return this.parent().closest(a,y)},parents:function(a){for(var y=[],L=this;L.length>0;)L=c.map(L,function(Z){if((Z=Z.parentNode)&&!le(Z)&&y.indexOf(Z)<0)return y.push(Z),Z});return we(y,a)},lineage:function(a){return a=a==o?"*":a,this.filter(function(){return c(this).is(a)}).add(this.parents(a))},parent:function(a){return we(ee(this.pluck("parentNode")),a)},children:function(a){return we(this.map(function(){return he(this)}),a)},contents:function(){return this.map(function(){return this.contentDocument||R.call(this.childNodes)})},siblings:function(a){return we(this.map(function(y,L){return b.call(he(L.parentNode),function(Z){return Z!==L})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(y){return y[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=""),getComputedStyle(this,"").getPropertyValue("display")=="none"&&(this.style.display=Se(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var y=B(a);if(this[0]&&!y)var L=c(a).get(0),Z=L.parentNode||this.length>1;return this.each(function(re){c(this).wrapAll(y?a.call(this,re):Z?L.cloneNode(!0):L)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));for(var y;(y=a.children()).length;)a=y.first();c(a).append(this)}return this},wrapInner:function(a){var y=B(a);return this.each(function(L){var Z=c(this),re=Z.contents(),de=y?a.call(this,L):a;re.length?re.wrapAll(de):Z.append(de)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var y=c(this);(a===o?y.css("display")=="none":a)?y.show():y.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0 in arguments?this.each(function(y){var L=this.innerHTML;c(this).empty().append(ke(this,a,y,L))}):0 in this?this[0].innerHTML:null},text:function(a){return 0 in arguments?this.each(function(y){var L=ke(this,a,y,this.textContent);this.textContent=L==null?"":""+L}):0 in this?this.pluck("textContent").join(""):null},attr:function(a,y){var L;return typeof a=="string"&&!(1 in arguments)?0 in this&&this[0].nodeType==1&&(L=this[0].getAttribute(a))!=null?L:o:this.each(function(Z){if(this.nodeType===1)if(ie(a))for(r in a)Pe(this,r,a[r]);else Pe(this,a,ke(this,y,Z,this.getAttribute(a)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&a.split(" ").forEach(function(y){Pe(this,y)},this)})},prop:function(a,y){return a=Ae[a]||a,1 in arguments?this.each(function(L){this[a]=ke(this,y,L,this[a])}):this[0]&&this[0][a]},removeProp:function(a){return a=Ae[a]||a,this.each(function(){delete this[a]})},data:function(a,y){var L="data-"+a.replace(G,"-$1").toLowerCase(),Z=1 in arguments?this.attr(L,y):this.attr(L);return Z!==null?je(Z):o},val:function(a){return 0 in arguments?(a==null&&(a=""),this.each(function(y){this.value=ke(this,a,y,this.value)})):this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(a){if(a)return this.each(function(L){var Z=c(this),re=ke(this,a,L,Z.offset()),de=Z.offsetParent().offset(),xe={top:re.top-de.top,left:re.left-de.left};Z.css("position")=="static"&&(xe.position="relative"),Z.css(xe)});if(!this.length)return null;if(j.documentElement!==this[0]&&!c.contains(j.documentElement,this[0]))return{top:0,left:0};var y=this[0].getBoundingClientRect();return{left:y.left+window.pageXOffset,top:y.top+window.pageYOffset,width:Math.round(y.width),height:Math.round(y.height)}},css:function(a,y){if(arguments.length<2){var L=this[0];if(!L)return;if(typeof a=="string")return c.cssProp(L,a);if(H(a)){var Z={},re=getComputedStyle(L,"");return c.each(a,function(xe,Ee){Z[Ee]=c.cssProp(L,Ee,re)}),Z}}var de="";if(A(a)=="string")!y&&y!==0?this.each(function(){this.style.removeProperty(oe(a))}):de=oe(a)+":"+ve(a,y);else for(r in a)!a[r]&&a[r]!==0?this.each(function(){this.style.removeProperty(oe(r))}):de+=oe(r)+":"+ve(r,a[r])+";";return this.each(function(){this.style.cssText+=";"+de})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return a?m.some.call(this,function(y){return this.test(Ce(y))},be(a)):!1},addClass:function(a){return a?this.each(function(y){if("className"in this){_=[];var L=Ce(this),Z=ke(this,a,y,L);Z.split(/\s+/g).forEach(function(re){c(this).hasClass(re)||_.push(re)},this),_.length&&Ce(this,L+(L?" ":"")+_.join(" "))}}):this},removeClass:function(a){return this.each(function(y){if("className"in this){if(a===o)return Ce(this,"");_=Ce(this),ke(this,a,y,_).split(/\s+/g).forEach(function(L){_=_.replace(be(L)," ")}),Ce(this,_.trim())}})},toggleClass:function(a,y){return a?this.each(function(L){var Z=c(this),re=ke(this,a,L,Ce(this));re.split(/\s+/g).forEach(function(de){(y===o?!Z.hasClass(de):y)?Z.addClass(de):Z.removeClass(de)})}):this},scrollTop:function(a){if(this.length){var y="scrollTop"in this[0];return a===o?y?this[0].scrollTop:this[0].pageYOffset:this.each(y?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var y="scrollLeft"in this[0];return a===o?y?this[0].scrollLeft:this[0].pageXOffset:this.each(y?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],y=this.offsetParent(),L=this.offset(),Z=W.test(y[0].nodeName)?{top:0,left:0}:y.offset();return L.top-=parseFloat(c(a).css("margin-top"))||0,L.left-=parseFloat(c(a).css("margin-left"))||0,Z.top+=parseFloat(c(y[0]).css("border-top-width"))||0,Z.left+=parseFloat(c(y[0]).css("border-left-width"))||0,{top:L.top-Z.top,left:L.left-Z.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||j.body;a&&!W.test(a.nodeName)&&c(a).css("position")=="static";)a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(a){var y=a.replace(/./,function(L){return L[0].toUpperCase()});c.fn[a]=function(L){var Z,re=this[0];return L===o?Y(re)?re["inner"+y]:le(re)?re.documentElement["scroll"+y]:(Z=this.offset())&&Z[a]:this.each(function(de){re=c(this),re.css(a,ke(this,L,de,re[a]()))})}});function tt(a,y){y(a);for(var L=0,Z=a.childNodes.length;L<Z;L++)tt(a.childNodes[L],y)}return ae.forEach(function(a,y){var L=y%2;c.fn[a]=function(){var Z,re=c.map(arguments,function(Ee){var Re=[];return Z=A(Ee),Z=="array"?(Ee.forEach(function(Me){if(Me.nodeType!==o)return Re.push(Me);if(c.zepto.isZ(Me))return Re=Re.concat(Me.get());Re=Re.concat(D.fragment(Me))}),Re):Z=="object"||Ee==null?Ee:D.fragment(Ee)}),de,xe=this.length>1;return re.length<1?this:this.each(function(Ee,Re){de=L?Re:Re.parentNode,Re=y==0?Re.nextSibling:y==1?Re.firstChild:y==2?Re:null;var Me=c.contains(j.documentElement,de);re.forEach(function(Le){if(xe)Le=Le.cloneNode(!0);else if(!de)return c(Le).remove();de.insertBefore(Le,Re),Me&&tt(Le,function(ye){if(ye.nodeName!=null&&ye.nodeName.toUpperCase()==="SCRIPT"&&(!ye.type||ye.type==="text/javascript")&&!ye.src){var vt=ye.ownerDocument?ye.ownerDocument.defaultView:window;vt.eval.call(vt,ye.innerHTML)}})})})},c.fn[L?a+"To":"insert"+(y?"Before":"After")]=function(Z){return c(Z)[a](this),this}}),D.Z.prototype=pe.prototype=c.fn,D.uniq=ee,D.uniques=_e,D.deserializeValue=je,c.zepto=D,c}();window.Zepto=u,window.$===void 0&&(window.$=u),function(o){var r=1,c,_=Array.prototype.slice,m=o.isFunction,S=function(C){return typeof C=="string"},b={},R={},j="onfocusin"in window,N={focus:"focusin",blur:"focusout"},h={mouseenter:"mouseover",mouseleave:"mouseout"};R.click=R.mousedown=R.mouseup=R.mousemove="MouseEvents";function E(C){return C._zid||(C._zid=r++)}function $(C,D,U,ee){if(D=P(D),D.ns)var _e=V(D.ns);return(b[E(C)]||[]).filter(function(ue){return ue&&(!D.e||ue.e==D.e)&&(!D.ns||_e.test(ue.ns))&&(!U||E(ue.fn)===E(U))&&(!ee||ue.sel==ee)})}function P(C){var D=(""+C).split(".");return{e:D[0],ns:D.slice(1).sort().join(" ")}}function V(C){return new RegExp("(?:^| )"+C.replace(" "," .* ?")+"(?: |$)")}function W(C,D){return C.del&&!j&&C.e in N||!!D}function G(C){return h[C]||j&&N[C]||C}function ne(C,D,U,ee,_e,ue,Ae){var H=E(C),A=b[H]||(b[H]=[]);D.split(/\s/).forEach(function(B){if(B=="ready")return o(document).ready(U);var Y=P(B);Y.fn=U,Y.sel=_e,Y.e in h&&(U=function(ie){var q=ie.relatedTarget;if(!q||q!==this&&!o.contains(this,q))return Y.fn.apply(this,arguments)}),Y.del=ue;var le=ue||U;Y.proxy=function(ie){if(ie=g(ie),!(ie.isImmediatePropagationStopped&&ie.isImmediatePropagationStopped())){ie.data=ee;var q=le.apply(C,ie._args==c?[ie]:[ie].concat(ie._args));return q===!1&&(ie.preventDefault(),ie.stopPropagation()),q}},Y.i=A.length,A.push(Y),"addEventListener"in C&&C.addEventListener(G(Y.e),Y.proxy,W(Y,Ae))})}function ae(C,D,U,ee,_e){var ue=E(C);(D||"").split(/\s/).forEach(function(Ae){$(C,Ae,U,ee).forEach(function(H){delete b[ue][H.i],"removeEventListener"in C&&C.removeEventListener(G(H.e),H.proxy,W(H,_e))})})}o.event={add:ne,remove:ae},o.proxy=function(C,D){var U=2 in arguments&&_.call(arguments,2);if(m(C)){var ee=function(){return C.apply(D,U?U.concat(_.call(arguments)):arguments)};return ee._zid=E(C),ee}else{if(S(D))return U?(U.unshift(C[D],C),o.proxy.apply(null,U)):o.proxy(C[D],C);throw new TypeError("expected function")}},o.fn.bind=function(C,D,U){return this.on(C,D,U)},o.fn.unbind=function(C,D){return this.off(C,D)},o.fn.one=function(C,D,U,ee){return this.on(C,D,U,ee,1)};var M=function(){return!0},F=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,x={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function g(C,D){return(D||!C.isDefaultPrevented)&&(D||(D=C),o.each(x,function(U,ee){var _e=D[U];C[U]=function(){return this[ee]=M,_e&&_e.apply(D,arguments)},C[ee]=F}),C.timeStamp||(C.timeStamp=Date.now()),(D.defaultPrevented!==c?D.defaultPrevented:"returnValue"in D?D.returnValue===!1:D.getPreventDefault&&D.getPreventDefault())&&(C.isDefaultPrevented=M)),C}function z(C){var D,U={originalEvent:C};for(D in C)!w.test(D)&&C[D]!==c&&(U[D]=C[D]);return g(U,C)}o.fn.delegate=function(C,D,U){return this.on(D,C,U)},o.fn.undelegate=function(C,D,U){return this.off(D,C,U)},o.fn.live=function(C,D){return o(document.body).delegate(this.selector,C,D),this},o.fn.die=function(C,D){return o(document.body).undelegate(this.selector,C,D),this},o.fn.on=function(C,D,U,ee,_e){var ue,Ae,H=this;return C&&!S(C)?(o.each(C,function(A,B){H.on(A,D,U,B,_e)}),H):(!S(D)&&!m(ee)&&ee!==!1&&(ee=U,U=D,D=c),(ee===c||U===!1)&&(ee=U,U=c),ee===!1&&(ee=F),H.each(function(A,B){_e&&(ue=function(Y){return ae(B,Y.type,ee),ee.apply(this,arguments)}),D&&(Ae=function(Y){var le,ie=o(Y.target).closest(D,B).get(0);if(ie&&ie!==B)return le=o.extend(z(Y),{currentTarget:ie,liveFired:B}),(ue||ee).apply(ie,[le].concat(_.call(arguments,1)))}),ne(B,C,ee,U,D,Ae||ue)}))},o.fn.off=function(C,D,U){var ee=this;return C&&!S(C)?(o.each(C,function(_e,ue){ee.off(_e,D,ue)}),ee):(!S(D)&&!m(U)&&U!==!1&&(U=D,D=c),U===!1&&(U=F),ee.each(function(){ae(this,C,U,D)}))},o.fn.trigger=function(C,D){return C=S(C)||o.isPlainObject(C)?o.Event(C):g(C),C._args=D,this.each(function(){C.type in N&&typeof this[C.type]=="function"?this[C.type]():"dispatchEvent"in this?this.dispatchEvent(C):o(this).triggerHandler(C,D)})},o.fn.triggerHandler=function(C,D){var U,ee;return this.each(function(_e,ue){U=z(S(C)?o.Event(C):C),U._args=D,U.target=ue,o.each($(ue,C.type||C),function(Ae,H){if(ee=H.proxy(U),U.isImmediatePropagationStopped&&U.isImmediatePropagationStopped())return!1})}),ee},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave pointerdown pointerup pointermove pointerover pointerout pointerenter pointerleave change select keydown keypress keyup error".split(" ").forEach(function(C){o.fn[C]=function(D){return 0 in arguments?this.bind(C,D):this.trigger(C)}}),o.Event=function(C,D){S(C)||(D=C,C=D.type);var U=document.createEvent(R[C]||"Events"),ee=!0;if(D)for(var _e in D)_e=="bubbles"?ee=!!D[_e]:U[_e]=D[_e];return U.initEvent(C,ee,!0),g(U)}}(u);var l=u;(function(){var o={};l.call_counter=function(r,c){c=c||"";var _=r+"("+c+")";o[_]=(o[_]||0)+1,o[_]%50===0&&l.log("X Calls ["+o[_]+": "+_)}})(),l.fn.innerText=function(o,r){return 0 in this?(r=typeof r=="string"?r:" ",l.map(this,function(c){for(var _,m=[],S=o?NodeFilter.SHOW_ALL:NodeFilter.SHOW_TEXT,b=document.createTreeWalker(c,S,o,!1);_=b.nextNode();)m.push(_.nodeValue);return m.join(r)}).join(r).replace(/\n+/g,r)):null},l.fn.shallowText=function(o){return 0 in this?(o=typeof o=="string"?o:" ",l.map(this,function(r){if(!r.childNodes)return"";for(var c=[],_=r.childNodes,m=0;m<_.length;m++){var S=_[m];S.nodeType===3&&c.push(S.nodeValue)}return c.join(o)}).join(o).replace(/\n+/g,o)):null},l.fn.outerHTML=function(){return 0 in this?l("<div>").append(this[0].cloneNode(!0)).html():null},l.fn.tagHTML=function(){return l("<div>").append(this[0].cloneNode(!1)).html().replace(/>.*/,">")},l.fn.select=function(o){if(!(0 in this))return null;var r=this[0];if(window.getSelection&&document.createRange){var c=window.getSelection();setTimeout(function(){var _=document.createRange();_.selectNodeContents(r),c.removeAllRanges(),c.addRange(_),o&&l.clipboard.copy()},1)}},l.fn.isScrolledToBottom=function(){const o=this.find("* > :not(:empty):last-of-type");if(!o.length)return!1;const r=o[0].getBoundingClientRect();return o[0].contains(document.elementFromPoint(r.left,r.top))},l.fn.scrollToBottom=function(){const o=this.find("* > :not(:empty):last-of-type");o.length&&o[0].scrollIntoView(!1)},l.fn.scrollingAppend=function(...o){var r=this.isScrolledToBottom();this.append(...o),r&&this.scrollToBottom()},l.pagecontext=f.pagecontext||!1,l.set=function(){var o="[object Array]",r="[object Function]",c="[object String]",_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,m=/^\w*$/,S=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,b=/\\(\\)?/g,R=/^\d+$/;function j(g){return g==null?"":g+""}function N(g){return!!g&&typeof g=="object"}var h=Object.prototype,E=h.toString,$=9007199254740991;function P(g,z){return g=typeof g=="number"||R.test(g)?+g:-1,z=z??$,g>-1&&g%1==0&&g<z}function V(g,z){var C=typeof g;if(C=="string"&&m.test(g)||C=="number")return!0;if(ae(g))return!1;var D=!_.test(g);return D||z!=null&&g in G(z)}function W(g){return typeof g=="number"&&g>-1&&g%1==0&&g<=$}function G(g){return F(g)?g:Object(g)}function ne(g){if(ae(g))return g;var z=[];return j(g).replace(S,function(C,D,U,ee){z.push(U?ee.replace(b,"$1"):D||C)}),z}var ae=function(g){return N(g)&&W(g.length)&&E.call(g)==o};function M(g){return F(g)&&E.call(g)==r}function F(g){var z=typeof g;return!!g&&(z=="object"||z=="function")}function w(g){return typeof g=="string"||N(g)&&E.call(g)==c}function x(g,z,C){if(g==null)return g;var D=z+"";z=g[D]!=null||V(z,g)?[D]:ne(z);for(var U=-1,ee=z.length,_e=ee-1,ue=g;ue!=null&&++U<ee;){var Ae=z[U];F(ue)&&(U==_e?ue[Ae]=C:ue[Ae]==null&&(ue[Ae]=P(z[U+1])?[]:{})),ue=ue[Ae]}return g}return x}(),l.def=function(o){return typeof o<"u"},l.pubsub_handlers={},l.pubsub_messages={},l.pubsub_persists={},l.publish=function(o,r){r=r||{},(l.pubsub_handlers[o]||[]).forEach(function(c){try{c.call(l,o,r)}catch(_){console.log(`X.publish: ${_} when calling:`,{f:c},`( '${o}',`,r,")",{stack:_.stack.split(`
`)})}}),(!(o in l.pubsub_persists)||l.pubsub_persists[o])&&(l.pubsub_messages[o]||(l.pubsub_messages[o]=[]),l.pubsub_messages[o].push({event:o,data:r}))},l.pubsub_clear_backlog=function(o){delete l.pubsub_messages[o]},l.subscribe_internal=function(o,r,c){var _=typeof o=="string"?[o]:o;_.forEach(function(m){typeof l.pubsub_handlers[m]>"u"&&(l.pubsub_handlers[m]=[]),l.pubsub_handlers[m].push(r),m in l.pubsub_persists?l.pubsub_persists[m]!=c&&console.log(`X.subscribe: subscribers to '${m}' disagree about persistence!`):(l.pubsub_persists[m]=c,c||l.pubsub_clear_backlog(m)),c&&(l.pubsub_messages[m]||[]).forEach(function(S){r.call(l,S.event,S.data)})})},l.subscribe=function(o,r){l.subscribe_internal(o,r,!1)},l.subscribe_backlog=function(o,r){l.subscribe_internal(o,r,!0)},l.unsubscribe=function(o){Object.values(l.pubsub_handlers).forEach(r=>r.forEach((c,_)=>c==o&&delete r[_]))},l.subscribe_once=function(o,r){l.unsubscribe(r),l.subscribe(o,r)},window.addEventListener("message",function(o){o.data.sfx&&o.data.pagecontext!=l.pagecontext&&(o.source==window||o.source==window.unsafeWindow)&&o.origin==location.origin&&l.publish(o.data.message.event,o.data.message.data,!1)});var O=window.localStorage;return l.storage={prefix:null,data:{},set:function(o,r,c,_,m){typeof l.storage.data[o]>"u"&&(l.storage.data[o]={});var S=l.storage.data[o];if(typeof r!="object"&&(typeof _>"u"||typeof _=="function"||_==null))l.storage.set_or_delete(S,r,c);else if(typeof r=="object"&&(typeof c>"u"||typeof c=="function")){m=_,_=c;var b;for(b in r)l.storage.set_or_delete(S,b,r[b])}m!==!1?l.storage.save(o,null,_):typeof _=="function"&&_(o,null)},set_or_delete:function(o,r,c){r in o&&typeof c>"u"?delete o[r]:l.set(o,r,c)},save:function(o,r,c){r==null&&typeof l.storage.data[o]<"u"?r=l.storage.data[o]:l.storage.data[o]=r,Extension.storage.set(o,r,function(_,m,S){var b={time:l.now(),key:_};O.setItem("x-storage",JSON.stringify(b)),typeof c=="function"&&c(_,m,S)},l.storage.prefix!=null?l.storage.prefix+"/":"")},get:function(o,r,c,_){if(_&&typeof o=="string"&&typeof l.storage.data[o]<"u"&&typeof c=="function")return c(l.storage.data[o]);Extension.storage.get(o,r,function(m,S){var b,R;if(!S)if(typeof o=="string")typeof l.storage.data[o]>"u"&&l.storage.update(o,m);else for(R=0;R<o.length;R++)b=o[R],l.storage.update(b,m[b]);typeof c=="function"&&c(m,S)},l.storage.prefix!=null?l.storage.prefix+"/":"")},refresh:function(o,r){typeof l.storage.data[o]<"u"&&l.storage.get(o,null,r,!1)},update:function(o,r){l.storage.data[o]=r}},l.pagecontext||window.addEventListener("storage",function(o){if(o.key=="x-storage"&&o.newValue){var r;try{r=JSON.parse(o.newValue),r.key&&l.storage.refresh(r.key,function(c){l.publish("storage/refresh",{key:r.key,data:c})})}catch(c){console.log("storage event",o,"error",c,"json",r)}}},!0),l.sanitize=function(o){return typeof DOMPurify<"u"?DOMPurify.sanitize(o):o},l.fn.safe_html=function(o){return o=l.sanitize(o),this.each(function(){l(this).html(o)})},l.ajax=function(o,r){Extension.ajax(o,function(c,_,m){m&&/application\/json/.test(m["content-type"])&&(c=JSON.parse(c)),r(c,_)})},l.ajax_dom=function(o,r){l.ajax(o,function(c){var _=l("<div>");try{_.append(c)}catch{}r(_)})},l.css=function(o,r){l.when("head",function(c){o=l.zepto.mogrify(o);var _;if(r&&(_=document.getElementById(r),_)){o?_.textContent=o:l(_).remove();return}_=document.createElement("style"),_.textContent=o,r&&(_.id=r),c.append(_)})},l.inject=function(o,r,c){if(!document||!document.createElement||!document.documentElement||!document.documentElement.appendChild)return!1;var _=document.createElement("script");_.type="text/javascript",r=JSON.stringify(r||{});var m=c?"window."+c+"=":"";return o=m+"("+o.toString()+")("+r+");",c&&(o+='window.postMessage({"sfxready":"'+c+'"} , "*");'),_.text=o,document.documentElement.appendChild(_),_.parentNode.removeChild(_),!0},l.poll=function(o,r,c){l.call_counter("poll",o.toString().substring(10)),r=r||500,c=c||50;var _=0,m=function(){if(!(_++>c))try{o(_)===!1&&setTimeout(m,r)}catch{setTimeout(m,r)}};m()},l.when=function(o,r,c,_){c=c||200,_=_||999999999,l.poll(function(){l.call_counter("when",o);var m=l(o);if(m.length>0)r(m);else return!1},c,_)},l.cookie={get:function(o){try{return unescape(document.cookie.match("(^|;)?"+o+"=([^;]*)(;|$)")[2])}catch{return null}},set:function(){}},l.logs=[],l.log=function(){if(arguments&&arguments.length>0){var o={module:null,color:"black"},r=0,c=arguments[0],_=[];for(typeof c=="object"&&c!=null&&(c.module||c.color)&&(r=1,o.module=c.module||o.module,o.level=c.level||o.level,o.color=c.color||o.color);r<arguments.length;r++)typeof arguments[r]=="object"?_.push(JSON.stringify(arguments[r],null,3)):typeof arguments[r]<"u"&&_.push(arguments[r]);o.log=_,o.timestamp=new Date().getTime(),o.uptime=performance.now(),l.logs.push(o),l.publish("log/entry",o,!1,!1)}},l.logger=function(o,r){var c=r||{};return c.module=o,function(_,m,S,b,R,j,N){l.log.call(l,c,_,m,S,b,R,j,N)}},l.alert=function(o){typeof o=="object"&&(o=JSON.stringify(o,null,3)),alert(o)},l.bind=function(o,r,c,_){return typeof _!="boolean"&&(_=!1),o=l(o)[0],o&&o.addEventListener&&o.addEventListener(r,c,_),o},l.capture=function(o,r,c){return l.bind(o,r,c,!0)},l.unbind=function(o,r,c,_){return typeof _!="boolean"&&(_=!1),o=l(o)[0],o&&o.removeEventListener&&o.removeEventListener(r,c,_),null},l.uncapture=function(o,r,c){return l.unbind(o,r,c,!0)},l.QSA=function(o,r,c){typeof r=="function"&&(c=r,r=o,o=document),l(r,o).each(function(){c(this)})},l.find=function(o){var r=l(o);return r.length>0?r[0]:null},l.target=function(o,r){var c=o.target;return c.nodeType==3&&(c=c.parentNode),r?l(c):c},l.parent=function(o){return o&&o.parentNode?o.parentNode:null},l.clone=function(o){return o&&JSON.parse(JSON.stringify(o))},l.match=function(o,r,c){if(typeof o!="string")return null;var _=o.match(r);if(_&&_.length)if(typeof c=="function"){for(var m=r.global?0:1;m<_.length;m++)c(_[m]);return _}else return _.length>1?_[r.global?0:1]:null;return null},l.htmlEncode=function(o){const r=document.createElement("span");return r.appendChild(document.createTextNode(o)),r.innerHTML},l.time=function(){return Date.now()},l.now=l.time,l.today=function(){var o=new Date;return o.getFullYear()*1e4+(o.getMonth()+1)*100+o.getDate()},l.ago=function(o,r,c,_){r=r||l.now(),typeof c!="boolean"&&(c=!0);var m="",S=r-o,b=S/l.seconds;if(b<60)return"just now";var R=Math.floor(S/l.days);R>0&&(m+=R+" day"+(R>1?"s":"")+" ",S-=R*l.days);var j=Math.floor(S/l.hours);j>0&&(_||!m)&&(m+=j+" "+(c?"hr":"hours")+" ",S-=j*l.hours);var N=Math.floor(S/l.minutes);return N>0&&(!m||_&&R<1)&&(m+=N+" "+(c?"mins":"minutes")+" "),m||(m="a while "),m+"ago"},l.seconds=1e3,l.minutes=l.seconds*60,l.hours=l.minutes*60,l.days=l.hours*24,l.task=function(o,r,c,_){l.storage.get("tasks",{},function(m){typeof m[o]>"u"&&(m[o]={run_on:null});var S=m[o],b=l.now();!S.run_on||S.run_on+r<b?(S.run_on=b,l.storage.set("tasks",o,S,function(){c()})):typeof _=="function"&&_(S.run_on)},!0)},l.semver_compare=function(o,r){for(var c=o.split("."),_=r.split("."),m=0;m<3;m++){var S=Number(c[m]),b=Number(_[m]);if(S>b)return 1;if(b>S)return-1;if(!isNaN(S)&&isNaN(b))return 1;if(isNaN(S)&&!isNaN(b))return-1}return 0},l.ui={click:function(o,r){typeof r!="boolean"&&(r=!0),l(o).each(function(){var c=document.createEvent("MouseEvents");c.initEvent("click",r,!0,window,0),this.dispatchEvent(c)})},keypress:function(o,r,c){c=c||"keypress",l(o).each(function(){var _=document.createEvent("KeyboardEvent");typeof r=="string"&&(r=r.charCodeAt(0)),_.initKeyboardEvent?_.initKeyboardEvent(c,!0,!0,window,r,null,null):_.initKeyEvent&&_.initKeyEvent(c,!0,!0,window,!1,!1,!1,!1,!1,r),this.dispatchEvent(_)})},scroll:function(o,r){var c=l(r||window),_=c.scrollTop();typeof _=="number"&&c.scrollTop(_+o)},pointerover:function(o){o.dispatchEvent(new PointerEvent("pointerover",{bubbles:!0}))},pointerout:function(o){o.dispatchEvent(new PointerEvent("pointerout",{bubbles:!0}))}},l.draggable=function(o,r){var c=l(o);o=c[0],c.attr("draggable",!0);var _=c.find('*[draggable="false"]');_.length>0&&_.css({cursor:"auto"}).mouseenter(function(){c.attr("draggable",!1)}).mouseleave(function(m){c.attr("draggable",!0)}),l.capture(c,"dragstart",function(m){l.draggable.dragend=r,m.dataTransfer.setData("text/plain",o.offsetLeft-m.clientX+","+(o.offsetTop-m.clientY)),l.draggable.target=c})},l.draggable.target=null,l.draggable.dragend=null,l.draggable.handlers={dragover:function(o){if(l.draggable.target)return o.preventDefault(),!1},drop:function(o){if(l.draggable.target){const r=o.dataTransfer.getData("text/plain").split(",").map(_=>parseInt(_)),c=l.draggable.target;if(l.draggable.target=null,!isNaN(r[0])&&!isNaN(r[1])){o.preventDefault();let _=getComputedStyle(c[0]),m=Math.max(0,o.clientX+r[0])-parseFloat(_.marginLeft),S=Math.max(0,o.clientY+r[1])-parseFloat(_.marginTop);return c.css("inset",`${S}px auto auto ${m}px`),typeof l.draggable.dragend=="function"&&l.draggable.dragend(c,m,S),!1}}},dragend:()=>l.draggable.target=null},Object.keys(l.draggable.handlers).forEach(o=>l.capture(window,o,l.draggable.handlers[o])),l.on_attribute_change=function(o,r,c){new MutationObserver(function(_){_.forEach(function(m){(!r||m.attributeName==r&&o.getAttribute(r)!=m.oldValue)&&c(m.attributeName,m.oldValue,m.target[m.attributeName])})}).observe(o,{attributes:!0,attributeOldValue:!0})},l.on_childlist_change=function(o,r){new MutationObserver(function(c){for(var _=0;_<c.length;_++){var m=c[_];if(!(m.type!=="childList"||!m.addedNodes||!m.addedNodes.length))for(var S=m.addedNodes,b=0;b<S.length;b++)r(S[b])}}).observe(o,{childList:!0,subtree:!0})},l.return_false=function(){return!1},l.is_document_ready=function(){return document&&document.readyState?document.readyState=="interactive"||document.readyState=="complete":document&&document.getElementsByTagName&&document.getElementsByTagName("BODY").length>0},l.support_note=function(o,r){typeof l.support_notes>"u"&&(l.support_notes={}),r?l.support_notes[o]={who:o,what:r,when:l.now()}:delete l.support_notes[o]},l.cram=o=>/^\s+$/.test(o)?" ":o.replace(/[\n\r\s]+/g," "),l.trim_cram=o=>l.cram(o).trim(),l.getContentValue=function(o,r){if(!r||!r.content||r.content==="none")return"";var c=r.content||"";return c=c.replace(/\s*attr\(([^)]+)\)\s*/g,function(_,m){var S=o.getAttribute(m);return S?'"'+S+'"':""}),c=c.replace(/"(.*?[^\\])"/g,"$1"),c=c.replace(/\\"/g,'"'),c=c.replace(/^"(.*)"$/,"$1"),/inline/.test(r.display)||(c=" "+c+" "),c},l.getChildrenVisibleText=function(o,r,c,_){if(!o.childNodes||!o.childNodes.length)return"";const m=/flex/.test(c),S=/grid/.test(c),b=m||S,R=b&&/row/.test(_),j=b&&/column/.test(_),N=(R||j)&&/reverse/.test(_),h=!j&&/rtl/.test(r),E=!b&&h||m&&R&&N!=h||m&&j&&N;var $=[];return o.childNodes.forEach(P=>{const V=!b||(P.nodeType==o.TEXT_NODE?-.5:getComputedStyle(P).order);$.push([V,l.getNodeVisibleText(P)])}),b&&($=$.sort((P,V)=>P[0]-V[0])),E&&($=$.reverse()),$.map(P=>P[1]).join("")},l.getNodeVisibleText=function(o,r=[]){if(!o||o.nodeType!==o.ELEMENT_NODE&&o.nodeType!==o.TEXT_NODE)return"";if(o.nodeType===o.TEXT_NODE)return X.cram(o.nodeValue);if(o.nodeName=="use"){const b=document.querySelector(o.getAttribute("xlink:href"));return r.includes(b)?"":l.getNodeVisibleText(b,[...r,b])}var c;const _=getComputedStyle(o),m=(b,R,j)=>_[b]!=="auto"&&(c=parseFloat(_[b]))>R&&c<j;if(_.display==="none"||_.position==="fixed"||_.visibility==="hidden"||_.position==="absolute"||m("width",-1/0,2)||m("height",-1/0,2)||m("opacity",-1/0,.1)||m("fontSize",-1/0,3.5)||_.lineHeight!=="normal"&&m("lineHeight",-1/0,2))return"";var S="";return S+=l.getContentValue(o,getComputedStyle(o,"::before")),S+=l.getChildrenVisibleText(o,_.direction,_.display,_.flexDirection),S+=l.getContentValue(o,getComputedStyle(o,"::after")),/inline/.test(_.display)||(S=" "+S+" "),X.trim_cram(S)},l.clipboard={copy:function(o){try{if(o||(o=window.getSelection().toString()),!o)return;if(navigator&&navigator.clipboard)return navigator.clipboard.writeText(o);document.execCommand&&document.execCommand("copy")}catch(r){l.log("Could not copy text: "+r.toString())}}},l.ready=function(){const o=l.logger("X.ready");var r=[],c=!1,_=function(m){try{o(`start: '${m.label}'`),m.func()}catch(S){o(`ERROR: '${m.label}:'
'${S}'`)}};return function(m,S){if(typeof m>"u"){c=!0,o(`firing ${r.length} queued modules`),r.forEach(_),o(`${r.length} modules started`),delete r;return}if(typeof m=="function"&&(S=m,m="[nameless]"),typeof S=="function"){const b={label:m,func:S};c?_(b):r.push(b)}}}(),l.beforeReady=function(){var o,r=[];return function(c){if(typeof c!="function"){for(o=0;o<r.length;o++)if(r[o](c)===!1)return!1}else r.push(c)}}(),l.query=function(o,r){r=r||!0;var c,_,m=o.split("|"),S=m.length,b=l(m[0]),R=[];for(c=0;c<b.length;c++)R.push(l(b[c]));var j=[],N=null;for(c=1;c<S;c++){if(j=[],N=m[c],N=N.replace(/\((.*?)\)/,function(E,$){return j=($||"").split(/,/),""}),typeof l.fn[N]!="function")throw"Invalid X function: "+N;if(r)for(_=0;_<R.length;_++){var h=R[_];R[_]=l(h)[N].apply(h,j)}else b=b[N].apply(b,j)}return r?R:b},l.sleep=async function(o){await new Promise(r=>setTimeout(r,o*l.seconds))},l},X=XLib();/*!
 * Vue.js v1.0.28
 * (c) 2016 Evan You
 * Released under the MIT License.
 */(function(f,u){typeof exports=="object"&&typeof module<"u"?module.exports=u():typeof define=="function"&&define.amd?define(u):f.Vue=u()})(this,function(){"use strict";function f(e,t,i){if(l(e,t))return void(e[t]=i);if(e._isVue)return void f(e._data,t,i);var n=e.__ob__;if(!n)return void(e[t]=i);if(n.convert(t,i),n.dep.notify(),n.vms)for(var s=n.vms.length;s--;){var d=n.vms[s];d._proxy(t),d._digest()}return i}function u(e,t){if(l(e,t)){delete e[t];var i=e.__ob__;if(!i)return void(e._isVue&&(delete e._data[t],e._digest()));if(i.dep.notify(),i.vms)for(var n=i.vms.length;n--;){var s=i.vms[n];s._unproxy(t),s._digest()}}}function l(e,t){return us.call(e,t)}function O(e){return ps.test(e)}function o(e){var t=(e+"").charCodeAt(0);return t===36||t===95}function r(e){return e==null?"":e.toString()}function c(e){if(typeof e!="string")return e;var t=Number(e);return isNaN(t)?e:t}function _(e){return e==="true"||e!=="false"&&e}function m(e){var t=e.charCodeAt(0),i=e.charCodeAt(e.length-1);return t!==i||t!==34&&t!==39?e:e.slice(1,-1)}function S(e){return e.replace(_s,b)}function b(e,t){return t?t.toUpperCase():""}function R(e){return e.replace(bn,"$1-$2").replace(bn,"$1-$2").toLowerCase()}function j(e){return e.replace(hs,b)}function N(e,t){return function(i){var n=arguments.length;return n?n>1?e.apply(t,arguments):e.call(t,i):e.call(t)}}function h(e,t){t=t||0;for(var i=e.length-t,n=new Array(i);i--;)n[i]=e[i+t];return n}function E(e,t){for(var i=Object.keys(t),n=i.length;n--;)e[i[n]]=t[i[n]];return e}function $(e){return e!==null&&typeof e=="object"}function P(e){return gs.call(e)===ms}function V(e,t,i,n){Object.defineProperty(e,t,{value:i,enumerable:!!n,writable:!0,configurable:!0})}function W(e,t){var i,n,s,d,p,k=function T(){var I=Date.now()-d;I<t&&I>=0?i=setTimeout(T,t-I):(i=null,p=e.apply(s,n),i||(s=n=null))};return function(){return s=this,n=arguments,d=Date.now(),i||(i=setTimeout(k,t)),p}}function G(e,t){for(var i=e.length;i--;)if(e[i]===t)return i;return-1}function ne(e){var t=function i(){if(!i.cancelled)return e.apply(this,arguments)};return t.cancel=function(){t.cancelled=!0},t}function ae(e,t){return e==t||!(!$(e)||!$(t))&&JSON.stringify(e)===JSON.stringify(t)}function M(e){return/native code/.test(e.toString())}function F(e){this.size=0,this.limit=e,this.head=this.tail=void 0,this._keymap=Object.create(null)}function w(){return bt.charCodeAt(Ct+1)}function x(){return bt.charCodeAt(++Ct)}function g(){return Ct>=$n}function z(){for(;w()===Tn;)x()}function C(e){return e===xs||e===ys}function D(e){return ks[e]}function U(e,t){return $s[e]===t}function ee(){for(var e,t=x();!g();)if(e=x(),e===ws)x();else if(e===t)break}function _e(e){for(var t=0,i=e;!g();)if(e=w(),C(e))ee();else if(i===e&&t++,U(i,e)&&t--,x(),t===0)break}function ue(){for(var e=Ct;!g();)if(ot=w(),C(ot))ee();else if(D(ot))_e(ot);else if(ot===En){if(x(),ot=w(),ot!==En){Ye!==Cn&&Ye!==ki||(Ye=Ut);break}x()}else{if(ot===Tn&&(Ye===Sn||Ye===ki)){z();break}Ye===Ut&&(Ye=Sn),x()}return bt.slice(e+1,Ct)||null}function Ae(){for(var e=[];!g();)e.push(H());return e}function H(){var e,t={};return Ye=Ut,t.name=ue().trim(),Ye=ki,e=A(),e.length&&(t.args=e),t}function A(){for(var e=[];!g()&&Ye!==Ut;){var t=ue();if(!t)break;e.push(B(t))}return e}function B(e){if(vs.test(e))return{value:c(e),dynamic:!1};var t=m(e),i=t===e;return{value:i?e:t,dynamic:i}}function Y(e){var t=An.get(e);if(t)return t;bt=e,At={},$n=bt.length,Ct=-1,ot="",Ye=Cn;var i;return bt.indexOf("|")<0?At.expression=bt.trim():(At.expression=ue().trim(),i=Ae(),i.length&&(At.filters=i)),An.put(e,At),At}function le(e){return e.replace(Cs,"\\$&")}function ie(){var e=le(Ve.delimiters[0]),t=le(Ve.delimiters[1]),i=le(Ve.unsafeDelimiters[0]),n=le(Ve.unsafeDelimiters[1]);Gt=new RegExp(i+"((?:.|\\n)+?)"+n+"|"+e+"((?:.|\\n)+?)"+t,"g"),Nn=new RegExp("^"+i+"((?:.|\\n)+?)"+n+"$"),Wt=new F(1e3)}function q(e){Wt||ie();var t=Wt.get(e);if(t)return t;if(!Gt.test(e))return null;for(var i,n,s,d,p,k,T=[],I=Gt.lastIndex=0;i=Gt.exec(e);)n=i.index,n>I&&T.push({value:e.slice(I,n)}),s=Nn.test(i[0]),d=s?i[1]:i[2],p=d.charCodeAt(0),k=p===42,d=k?d.slice(1):d,T.push({tag:!0,value:d.trim(),html:s,oneTime:k}),I=n+i[0].length;return I<e.length&&T.push({value:e.slice(I)}),Wt.put(e,T),T}function J(e,t){return e.length>1?e.map(function(i){return se(i,t)}).join("+"):se(e[0],t,!0)}function se(e,t,i){return e.tag?e.oneTime&&t?'"'+t.$eval(e.value)+'"':Q(e.value,i):'"'+e.value+'"'}function Q(e,t){if(Ss.test(e)){var i=Y(e);return i.filters?"this._applyFilters("+i.expression+",null,"+JSON.stringify(i.filters)+",false)":"("+e+")"}return t?e:"("+e+")"}function oe(e,t,i,n){Se(e,1,function(){t.appendChild(e)},i,n)}function be(e,t,i,n){Se(e,1,function(){Pe(e,t)},i,n)}function ve(e,t,i){Se(e,-1,function(){je(e)},t,i)}function Se(e,t,i,n,s){var d=e.__v_trans;if(!d||!d.hooks&&!$t||!n._isCompiled||n.$parent&&!n.$parent._isCompiled)return i(),void(s&&s());var p=t>0?"enter":"leave";d[p](i,s)}function he(e){return typeof e=="string"&&(e=document.querySelector(e)),e}function pe(e){if(!e)return!1;var t=e.ownerDocument.documentElement,i=e.parentNode;return t===e||t===i||!(!i||i.nodeType!==1||!t.contains(i))}function ge(e,t){var i=e.getAttribute(t);return i!==null&&e.removeAttribute(t),i}function we(e,t){var i=ge(e,":"+t);return i===null&&(i=ge(e,"v-bind:"+t)),i}function ke(e,t){return e.hasAttribute(t)||e.hasAttribute(":"+t)||e.hasAttribute("v-bind:"+t)}function Pe(e,t){t.parentNode.insertBefore(e,t)}function Ce(e,t){t.nextSibling?Pe(e,t.nextSibling):t.parentNode.appendChild(e)}function je(e){e.parentNode.removeChild(e)}function tt(e,t){t.firstChild?Pe(e,t.firstChild):t.appendChild(e)}function a(e,t){var i=e.parentNode;i&&i.replaceChild(t,e)}function y(e,t,i,n){e.addEventListener(t,i,n)}function L(e,t,i){e.removeEventListener(t,i)}function Z(e){var t=e.className;return typeof t=="object"&&(t=t.baseVal||""),t}function re(e,t){Vt&&!/svg$/.test(e.namespaceURI)?e.className=t:e.setAttribute("class",t)}function de(e,t){if(e.classList)e.classList.add(t);else{var i=" "+Z(e)+" ";i.indexOf(" "+t+" ")<0&&re(e,(i+t).trim())}}function xe(e,t){if(e.classList)e.classList.remove(t);else{for(var i=" "+Z(e)+" ",n=" "+t+" ";i.indexOf(n)>=0;)i=i.replace(n," ");re(e,i.trim())}e.className||e.removeAttribute("class")}function Ee(e,t){var i,n;if(Le(e)&&xt(e.content)&&(e=e.content),e.hasChildNodes())for(Re(e),n=t?document.createDocumentFragment():document.createElement("div");i=e.firstChild;)n.appendChild(i);return n}function Re(e){for(var t;t=e.firstChild,Me(t);)e.removeChild(t);for(;t=e.lastChild,Me(t);)e.removeChild(t)}function Me(e){return e&&(e.nodeType===3&&!e.data.trim()||e.nodeType===8)}function Le(e){return e.tagName&&e.tagName.toLowerCase()==="template"}function ye(e,t){var i=Ve.debug?document.createComment(e):document.createTextNode(t?" ":"");return i.__v_anchor=!0,i}function vt(e){if(e.hasAttributes())for(var t=e.attributes,i=0,n=t.length;i<n;i++){var s=t[i].name;if(jn.test(s))return S(s.replace(jn,""))}}function Ft(e,t,i){for(var n;e!==t;)n=e.nextSibling,i(e),e=n;i(t)}function pi(e,t,i,n,s){function d(){if(k++,p&&k>=T.length){for(var I=0;I<T.length;I++)n.appendChild(T[I]);s&&s()}}var p=!1,k=0,T=[];Ft(e,t,function(I){I===t&&(p=!0),T.push(I),ve(I,i,d)})}function xt(e){return e&&e.nodeType===11}function Mi(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function Fi(e,t){var i=e.tagName.toLowerCase(),n=e.hasAttributes();if(Jt.test(i)||$i.test(i)){if(n)return zi(e,t)}else{if(Ge(t,"components",i))return{id:i};var s=n&&zi(e,t);if(s)return s}}function zi(e,t){var i=e.getAttribute("is");if(i!=null){if(Ge(t,"components",i))return e.removeAttribute("is"),{id:i}}else if(i=we(e,"is"),i!=null)return{id:i,dynamic:!0}}function _i(e,t){var i,n,s;for(i in t)n=e[i],s=t[i],l(e,i)?$(n)&&$(s)&&_i(n,s):f(e,i,s);return e}function eo(e,t){var i=Object.create(e||null);return t?E(i,Ii(t)):i}function to(e){if(e.components)for(var t,i=e.components=Ii(e.components),n=Object.keys(i),s=0,d=n.length;s<d;s++){var p=n[s];Jt.test(p)||$i.test(p)||(t=i[p],P(t)&&(i[p]=Be.extend(t)))}}function io(e){var t,i,n=e.props;if(De(n))for(e.props={},t=n.length;t--;)i=n[t],typeof i=="string"?e.props[i]=null:i.name&&(e.props[i.name]=i);else if(P(n)){var s=Object.keys(n);for(t=s.length;t--;)i=n[s[t]],typeof i=="function"&&(n[s[t]]={type:i})}}function Ii(e){if(De(e)){for(var t,i={},n=e.length;n--;){t=e[n];var s=typeof t=="function"?t.options&&t.options.name||t.id:t.name||t.id;s&&(i[s]=t)}return i}return e}function ft(e,t,i){function n(K){var te=Fe[K]||Os;d[K]=te(e[K],t[K],i,K)}to(t),io(t);var s,d={};if(t.extends&&(e=typeof t.extends=="function"?ft(e,t.extends.options,i):ft(e,t.extends,i)),t.mixins)for(var p=0,k=t.mixins.length;p<k;p++){var T=t.mixins[p],I=T.prototype instanceof Be?T.options:T;e=ft(e,I,i)}for(s in e)n(s);for(s in t)l(e,s)||n(s);return d}function Ge(e,t,i,n){if(typeof i=="string"){var s,d=e[t],p=d[i]||d[s=S(i)]||d[s.charAt(0).toUpperCase()+s.slice(1)];return p}}function Ue(){this.id=Rs++,this.subs=[]}function hi(e){Ci=!1,e(),Ci=!0}function ut(e){if(this.value=e,this.dep=new Ue,V(e,"__ob__",this),De(e)){var t=vn?no:oo;t(e,Ai,js),this.observeArray(e)}else this.walk(e)}function no(e,t){e.__proto__=t}function oo(e,t,i){for(var n=0,s=i.length;n<s;n++){var d=i[n];V(e,d,t[d])}}function Ot(e,t){if(e&&typeof e=="object"){var i;return l(e,"__ob__")&&e.__ob__ instanceof ut?i=e.__ob__:Ci&&(De(e)||P(e))&&Object.isExtensible(e)&&!e._isVue&&(i=new ut(e)),i&&t&&i.addVm(t),i}}function Ke(e,t,i){var n=new Ue,s=Object.getOwnPropertyDescriptor(e,t);if(!s||s.configurable!==!1){var d=s&&s.get,p=s&&s.set,k=Ot(i);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var T=d?d.call(e):i;if(Ue.target&&(n.depend(),k&&k.dep.depend(),De(T)))for(var I,K=0,te=T.length;K<te;K++)I=T[K],I&&I.__ob__&&I.__ob__.dep.depend();return T},set:function(T){var I=d?d.call(e):i;T!==I&&(p?p.call(e,T):i=T,k=Ot(T),n.notify())}})}}function so(e){e.prototype._init=function(t){t=t||{},this.$el=null,this.$parent=t.parent,this.$root=this.$parent?this.$parent.$root:this,this.$children=[],this.$refs={},this.$els={},this._watchers=[],this._directives=[],this._uid=Ls++,this._isVue=!0,this._events={},this._eventsCount={},this._isFragment=!1,this._fragment=this._fragmentStart=this._fragmentEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=this._vForRemoving=!1,this._unlinkFn=null,this._context=t._context||this.$parent,this._scope=t._scope,this._frag=t._frag,this._frag&&this._frag.children.push(this),this.$parent&&this.$parent.$children.push(this),t=this.$options=ft(this.constructor.options,t,this),this._updateRef(),this._data={},this._callHook("init"),this._initState(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}}function ro(e){if(e===void 0)return"eof";var t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:case 48:return e;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return t>=97&&t<=122||t>=65&&t<=90?"ident":t>=49&&t<=57?"number":"else"}function ao(e){var t=e.trim();return(e.charAt(0)!=="0"||!isNaN(e))&&(O(t)?m(t):"*"+t)}function Hi(e){function t(){var me=e[K+1];if(te===Qt&&me==="'"||te===Xt&&me==='"')return K++,n="\\"+me,fe[ze](),!0}var i,n,s,d,p,k,T,I=[],K=-1,te=Si,ce=0,fe=[];for(fe[St]=function(){s!==void 0&&(I.push(s),s=void 0)},fe[ze]=function(){s===void 0?s=n:s+=n},fe[Ln]=function(){fe[ze](),ce++},fe[Pn]=function(){if(ce>0)ce--,te=st,fe[ze]();else{if(ce=0,s=ao(s),s===!1)return!1;fe[St]()}};te!=null;)if(K++,i=e[K],i!=="\\"||!t()){if(d=ro(i),T=dt[te],p=T[d]||T.else||Lt,p===Lt||(te=p[0],k=fe[p[1]],k&&(n=p[2],n=n===void 0?i:n,k()===!1)))return;if(te===ei)return I.raw=e,I}}function Bi(e){var t=Dn.get(e);return t||(t=Hi(e),t&&Dn.put(e,t)),t}function yt(e,t){return pt(t).get(e)}function Vi(e,t,i){var n=e;if(typeof t=="string"&&(t=Hi(t)),!t||!$(e))return!1;for(var s,d,p=0,k=t.length;p<k;p++)s=e,d=t[p],d.charAt(0)==="*"&&(d=pt(d.slice(1)).get.call(n,n)),p<k-1?(e=e[d],$(e)||(e={},f(s,d,e))):De(e)?e.$set(d,i):d in e?e[d]=i:f(e,d,i);return!0}function lo(){}function co(e,t){var i=ti.length;return ti[i]=t?e.replace(Bs,"\\n"):e,'"'+i+'"'}function fo(e){var t=e.charAt(0),i=e.slice(1);return Fs.test(i)?e:(i=i.indexOf('"')>-1?i.replace(Fn,qi):i,t+"scope."+i)}function qi(e,t){return ti[t]}function uo(e){Is.test(e),ti.length=0;var t=e.replace(Vs,co).replace(Hs,"");return t=(" "+t).replace(Us,fo).replace(Fn,qi),Ui(t)}function Ui(e){try{return new Function("scope","return "+e+";")}catch{return lo}}function Wi(e){var t=Bi(e);if(t)return function(i,n){Vi(i,t,n)}}function pt(e,t){e=e.trim();var i=Mn.get(e);if(i)return t&&!i.set&&(i.set=Wi(i.exp)),i;var n={exp:e};return n.get=Rt(e)&&e.indexOf("[")<0?Ui("scope."+e):uo(e),t&&(n.set=Wi(e)),Mn.put(e,n),n}function Rt(e){return qs.test(e)&&!Ws.test(e)&&e.slice(0,5)!=="Math."}function po(){ii.length=0,Ei.length=0,ni={},Js={},Ti=!1}function _o(){for(var e=!0;e;)e=!1,Gi(ii),Gi(Ei),ii.length?e=!0:(Dt&&Ve.devtools&&Dt.emit("flush"),po())}function Gi(e){for(var t=0;t<e.length;t++){var i=e[t],n=i.id;ni[n]=null,i.run()}e.length=0}function ho(e){var t=e.id;if(ni[t]==null){var i=e.user?Ei:ii;ni[t]=i.length,i.push(e),Ti||(Ti=!0,Xe(_o))}}function He(e,t,i,n){n&&E(this,n);var s=typeof t=="function";if(this.vm=e,e._watchers.push(this),this.expression=t,this.cb=i,this.id=++Zs,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new nt,this.newDepIds=new nt,this.prevError=null,s)this.getter=t,this.setter=void 0;else{var d=pt(t,this.twoWay);this.getter=d.get,this.setter=d.set}this.value=this.lazy?void 0:this.get(),this.queued=this.shallow=!1}function gi(e,t){var i=void 0,n=void 0;t||(t=Ks,t.clear());var s=De(e),d=$(e);if((s||d)&&Object.isExtensible(e)){if(e.__ob__){var p=e.__ob__.dep.id;if(t.has(p))return;t.add(p)}if(s)for(i=e.length;i--;)gi(e[i],t);else if(d)for(n=Object.keys(e),i=n.length;i--;)gi(e[n[i]],t)}}function Ji(e){return Le(e)&&xt(e.content)}function mi(e,t){var i=t?e:e.trim(),n=zn.get(i);if(n)return n;var s=document.createDocumentFragment(),d=e.match(Qs),p=Xs.test(e),k=er.test(e);if(d||p||k){var T=d&&d[1],I=Te[T]||Te.efault,K=I[0],te=I[1],ce=I[2],fe=document.createElement("div");for(fe.innerHTML=te+e+ce;K--;)fe=fe.lastChild;for(var me;me=fe.firstChild;)s.appendChild(me)}else s.appendChild(document.createTextNode(e));return t||Re(s),zn.put(i,s),s}function Zi(e){if(Ji(e))return mi(e.innerHTML);if(e.tagName==="SCRIPT")return mi(e.textContent);for(var t,i=_t(e),n=document.createDocumentFragment();t=i.firstChild;)n.appendChild(t);return Re(n),n}function _t(e){if(!e.querySelectorAll)return e.cloneNode();var t,i,n,s=e.cloneNode(!0);if(tr){var d=s;if(Ji(e)&&(e=e.content,d=s.content),i=e.querySelectorAll("template"),i.length)for(n=d.querySelectorAll("template"),t=n.length;t--;)n[t].parentNode.replaceChild(_t(i[t]),n[t])}if(ir){if(e.tagName==="TEXTAREA")s.value=e.value;else if(i=e.querySelectorAll("textarea"),i.length)for(n=s.querySelectorAll("textarea"),t=n.length;t--;)n[t].value=i[t].value}return s}function ht(e,t,i){var n,s;return xt(e)?(Re(e),t?_t(e):e):(typeof e=="string"?i||e.charAt(0)!=="#"?s=mi(e,i):(s=In.get(e),s||(n=document.getElementById(e.slice(1)),n&&(s=Zi(n),In.put(e,s)))):e.nodeType&&(s=Zi(e)),s&&t?_t(s):s)}function zt(e,t,i,n,s,d){this.children=[],this.childFrags=[],this.vm=t,this.scope=s,this.inserted=!1,this.parentFrag=d,d&&d.childFrags.push(this),this.unlink=e(t,i,n,s,this);var p=this.single=i.childNodes.length===1&&!i.childNodes[0].__v_anchor;p?(this.node=i.childNodes[0],this.before=go,this.remove=mo):(this.node=ye("fragment-start"),this.end=ye("fragment-end"),this.frag=i,tt(this.node,i),i.appendChild(this.end),this.before=bo,this.remove=vo),this.node.__v_frag=this}function go(e,t){this.inserted=!0;var i=t!==!1?be:Pe;i(this.node,e,this.vm),pe(this.node)&&this.callHook(Ki)}function mo(){this.inserted=!1;var e=pe(this.node),t=this;this.beforeRemove(),ve(this.node,this.vm,function(){e&&t.callHook(Yi),t.destroy()})}function bo(e,t){this.inserted=!0;var i=this.vm,n=t!==!1?be:Pe;Ft(this.node,this.end,function(s){n(s,e,i)}),pe(this.node)&&this.callHook(Ki)}function vo(){this.inserted=!1;var e=this,t=pe(this.node);this.beforeRemove(),pi(this.node,this.end,this.vm,this.frag,function(){t&&e.callHook(Yi),e.destroy()})}function Ki(e){!e._isAttached&&pe(e.$el)&&e._callHook("attached")}function Yi(e){e._isAttached&&!pe(e.$el)&&e._callHook("detached")}function wt(e,t){this.vm=e;var i,n=typeof t=="string";n||Le(t)&&!t.hasAttribute("v-if")?i=ht(t,!0):(i=document.createDocumentFragment(),i.appendChild(t)),this.template=i;var s,d=e.constructor.cid;if(d>0){var p=d+(n?t:Mi(t));s=Hn.get(p),s||(s=kt(i,e.$options,!0),Hn.put(p,s))}else s=kt(i,e.$options,!0);this.linker=s}function Qi(e,t,i){var n=e.node.previousSibling;if(n){for(e=n.__v_frag;!(e&&e.forId===i&&e.inserted||n===t);){if(n=n.previousSibling,!n)return;e=n.__v_frag}return e}}function xo(e){for(var t=-1,i=new Array(Math.floor(e));++t<e;)i[t]=t;return i}function bi(e,t,i,n){return n?n==="$index"?e:n.charAt(0).match(/\w/)?yt(i,n):i[n]:t||i}function Xi(e){var t=e.node;if(e.end)for(;!t.__vue__&&t!==e.end&&t.nextSibling;)t=t.nextSibling;return t.__vue__}function en(e,t,i){for(var n,s,d,p=t?[]:null,k=0,T=e.options.length;k<T;k++)if(n=e.options[k],d=i?n.hasAttribute("selected"):n.selected){if(s=n.hasOwnProperty("_value")?n._value:n.value,!t)return s;p.push(s)}return p}function yo(e,t){for(var i=e.length;i--;)if(ae(e[i],t))return i;return-1}function wo(e,t){var i=t.map(function(n){var s=n.charCodeAt(0);return s>47&&s<58?parseInt(n,10):n.length===1&&(s=n.toUpperCase().charCodeAt(0),s>64&&s<91)?s:Vn[n]});return i=[].concat.apply([],i),function(n){if(i.indexOf(n.keyCode)>-1)return e.call(this,n)}}function ko(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function $o(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Ao(e){return function(t){if(t.target===t.currentTarget)return e.call(this,t)}}function Co(e){if(oi[e])return oi[e];var t=So(e);return oi[e]=oi[t]=t,t}function So(e){e=R(e);var t=S(e),i=t.charAt(0).toUpperCase()+t.slice(1);si||(si=document.createElement("div"));var n,s=qn.length;if(t!=="filter"&&t in si.style)return{kebab:e,camel:t};for(;s--;)if(n=kr[s]+i,n in si.style)return{kebab:qn[s]+e,camel:n}}function Eo(e){var t=[];if(De(e))for(var i=0,n=e.length;i<n;i++){var s=e[i];if(s)if(typeof s=="string")t.push(s);else for(var d in s)s[d]&&t.push(d)}else if($(e))for(var p in e)e[p]&&t.push(p);return t}function tn(e,t,i){if(t=t.trim(),t.indexOf(" ")===-1)return void i(e,t);for(var n=t.split(/\s+/),s=0,d=n.length;s<d;s++)i(e,n[s])}function To(e,t,i){function n(){++d>=s?i():e[d].call(t,n)}var s=e.length,d=0;e[0].call(t,n)}function No(e,t,i){for(var n,s,d,p,k,T,I,K=[],te=i.$options.propsData,ce=Object.keys(t),fe=ce.length;fe--;)s=ce[fe],n=t[s]||Pr,k=S(s),Mr.test(k)&&(I={name:s,path:k,options:n,mode:ri.ONE_WAY,raw:null},d=R(s),(p=we(e,d))===null&&((p=we(e,d+".sync"))!==null?I.mode=ri.TWO_WAY:(p=we(e,d+".once"))!==null&&(I.mode=ri.ONE_TIME)),p!==null?(I.raw=p,T=Y(p),p=T.expression,I.filters=T.filters,O(p)&&!T.filters?I.optimizedLiteral=!0:I.dynamic=!0,I.parentPath=p):((p=ge(e,d))!==null||te&&(p=te[s]||te[k])!==null)&&(I.raw=p),K.push(I));return Oo(K)}function Oo(e){return function(t,i){t._props={};for(var n,s,d,p,k,T=t.$options.propsData,I=e.length;I--;)if(n=e[I],k=n.raw,s=n.path,d=n.options,t._props[s]=n,T&&l(T,s)&&gt(t,n,T[s]),k===null)gt(t,n,void 0);else if(n.dynamic)n.mode===ri.ONE_TIME?(p=(i||t._context||t).$get(n.parentPath),gt(t,n,p)):t._context?t._bindDir({name:"prop",def:Gn,prop:n},null,null,i):gt(t,n,t.$get(n.parentPath));else if(n.optimizedLiteral){var K=m(k);p=K===k?_(c(k)):K,gt(t,n,p)}else p=d.type===Boolean&&(k===""||k===R(n.name))||k,gt(t,n,p)}}function nn(e,t,i,n){var s=t.dynamic&&Rt(t.parentPath),d=i;d===void 0&&(d=jo(e,t)),d=Lo(t,d,e);var p=d!==i;Do(t,d,e)||(d=void 0),s&&!p?hi(function(){n(d)}):n(d)}function gt(e,t,i){nn(e,t,i,function(n){Ke(e,t.path,n)})}function Ro(e,t,i){nn(e,t,i,function(n){e[t.path]=n})}function jo(e,t){var i=t.options;if(!l(i,"default"))return i.type!==Boolean&&void 0;var n=i.default;return $(n),typeof n=="function"&&i.type!==Function?n.call(e):n}function Do(e,t,i){if(!e.options.required&&(e.raw===null||t==null))return!0;var n=e.options,s=n.type,d=!s,p=[];if(s){De(s)||(s=[s]);for(var k=0;k<s.length&&!d;k++){var T=Po(t,s[k]);p.push(T.expectedType),d=T.valid}}if(!d)return!1;var I=n.validator;return!(I&&!I(t))}function Lo(e,t,i){var n=e.options.coerce;return n&&typeof n=="function"?n(t):t}function Po(e,t){var i,n;return t===String?(n="string",i=typeof e===n):t===Number?(n="number",i=typeof e===n):t===Boolean?(n="boolean",i=typeof e===n):t===Function?(n="function",i=typeof e===n):t===Object?(n="object",i=P(e)):t===Array?(n="array",i=De(e)):i=e instanceof t,{valid:i,expectedType:n}}function on(e){ai.push(e),Oi||(Oi=!0,Xe(Mo))}function Mo(){for(var e=document.documentElement.offsetHeight,t=0;t<ai.length;t++)ai[t]();return ai=[],Oi=!1,e}function sn(e,t,i,n){this.id=t,this.el=e,this.enterClass=i&&i.enterClass||t+"-enter",this.leaveClass=i&&i.leaveClass||t+"-leave",this.hooks=i,this.vm=n,this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null,this.justEntered=!1,this.entered=this.left=!1,this.typeCache={},this.type=i&&i.type;var s=this;["enterNextTick","enterDone","leaveNextTick","leaveDone"].forEach(function(d){s[d]=N(s[d],s)})}function Fo(e){if(/svg$/.test(e.namespaceURI)){var t=e.getBoundingClientRect();return!(t.width||t.height)}return!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function kt(e,t,i){var n=i||!t._asComponent?cn(e,t):null,s=n&&n.terminal||pn(e)||!e.hasChildNodes()?null:dn(e.childNodes,t);return function(d,p,k,T,I){var K=h(p.childNodes),te=It(function(){n&&n(d,p,k,T,I),s&&s(d,K,k,T,I)},d);return vi(d,te)}}function It(e,t){t._directives=[];var i=t._directives.length;e();var n=t._directives.slice(i);zo(n);for(var s=0,d=n.length;s<d;s++)n[s]._bind();return n}function zo(e){if(e.length!==0){var t,i,n,s,d={},p=0,k=[];for(t=0,i=e.length;t<i;t++){var T=e[t],I=T.descriptor.def.priority||Br,K=d[I];K||(K=d[I]=[],k.push(I)),K.push(T)}for(k.sort(function(ce,fe){return ce>fe?-1:ce===fe?0:1}),t=0,i=k.length;t<i;t++){var te=d[k[t]];for(n=0,s=te.length;n<s;n++)e[p++]=te[n]}}}function vi(e,t,i,n){function s(d){rn(e,t,d),i&&n&&rn(i,n)}return s.dirs=t,s}function rn(e,t,i){for(var n=t.length;n--;)t[n]._teardown()}function an(e,t,i,n){var s=No(t,i,e),d=It(function(){s(e,n)},e);return vi(e,d)}function ln(e,t,i){var n,s,d=t._containerAttrs,p=t._replacerAttrs;return e.nodeType!==11&&(t._asComponent?(d&&i&&(n=Bt(d,i)),p&&(s=Bt(p,t))):s=Bt(e.attributes,t)),t._containerAttrs=t._replacerAttrs=null,function(k,T,I){var K,te=k._context;te&&n&&(K=It(function(){n(te,T,null,I)},te));var ce=It(function(){s&&s(k,T)},k);return vi(k,ce,te,K)}}function cn(e,t){var i=e.nodeType;return i!==1||pn(e)?i===3&&e.data.trim()?Ho(e,t):null:Io(e,t)}function Io(e,t){if(e.tagName==="TEXTAREA"){if(ge(e,"v-pre")!==null)return Ht;var i=q(e.value);i&&(e.setAttribute(":value",J(i)),e.value="")}var n,s=e.hasAttributes(),d=s&&h(e.attributes);return s&&(n=Jo(e,d,t)),n||(n=Wo(e,t)),n||(n=Go(e,t)),!n&&s&&(n=Bt(d,t)),n}function Ho(e,t){if(e._skip)return Bo;var i=q(e.wholeText);if(!i)return null;for(var n=e.nextSibling;n&&n.nodeType===3;)n._skip=!0,n=n.nextSibling;for(var s,d,p=document.createDocumentFragment(),k=0,T=i.length;k<T;k++)d=i[k],s=d.tag?Vo(d,t):document.createTextNode(d.value),p.appendChild(s);return qo(i,p,t)}function Bo(e,t){je(t)}function Vo(e,t){function i(s){if(!e.descriptor){var d=Y(e.value);e.descriptor={name:s,def:Mt[s],expression:d.expression,filters:d.filters}}}var n;return e.oneTime?n=document.createTextNode(e.value):e.html?(n=document.createComment("v-html"),i("html")):(n=document.createTextNode(" "),i("text")),n}function qo(e,t){return function(i,n,s,d){for(var p,k,T,I=t.cloneNode(!0),K=h(I.childNodes),te=0,ce=e.length;te<ce;te++)p=e[te],k=p.value,p.tag&&(T=K[te],p.oneTime?(k=(d||i).$eval(k),p.html?a(T,ht(k,!0)):T.data=r(k)):i._bindDir(p.descriptor,T,s,d));a(n,I)}}function dn(e,t){for(var i,n,s,d=[],p=0,k=e.length;p<k;p++)s=e[p],i=cn(s,t),n=i&&i.terminal||s.tagName==="SCRIPT"||!s.hasChildNodes()?null:dn(s.childNodes,t),d.push(i,n);return d.length?Uo(d):null}function Uo(e){return function(t,i,n,s,d){for(var p,k,T,I=0,K=0,te=e.length;I<te;K++){p=i[K],k=e[I++],T=e[I++];var ce=h(p.childNodes);k&&k(t,p,n,s,d),T&&T(t,ce,n,s,d)}}}function Wo(e,t){var i=e.tagName.toLowerCase();if(!Jt.test(i)){var n=Ge(t,"elementDirectives",i);return n?fn(e,i,"",t,n):void 0}}function Go(e,t){var i=Fi(e,t);if(i){var n=vt(e),s={name:"component",ref:n,expression:i.id,def:ci.component,modifiers:{literal:!i.dynamic}},d=function(p,k,T,I,K){n&&Ke((I||p).$refs,n,null),p._bindDir(s,k,T,I,K)};return d.terminal=!0,d}}function Jo(e,t,i){if(ge(e,"v-pre")!==null)return Ht;if(e.hasAttribute("v-else")){var n=e.previousElementSibling;if(n&&n.hasAttribute("v-if"))return Ht}for(var s,d,p,k,T,I,K,te,ce,fe,me=0,Ie=t.length;me<Ie;me++)s=t[me],d=s.name.replace(Di,""),(T=d.match(Qn))&&(ce=Ge(i,"directives",T[1]),ce&&ce.terminal&&(!fe||(ce.priority||Vr)>fe.priority)&&(fe=ce,K=s.name,k=un(s.name),p=s.value,I=T[1],te=T[2]));return fe?fn(e,I,p,i,fe,K,te,k):void 0}function Ht(){}function fn(e,t,i,n,s,d,p,k){var T=Y(i),I={name:t,arg:p,expression:T.expression,filters:T.filters,raw:i,attr:d,modifiers:k,def:s};t!=="for"&&t!=="router-view"||(I.ref=vt(e));var K=function(te,ce,fe,me,Ie){I.ref&&Ke((me||te).$refs,I.ref,null),te._bindDir(I,ce,fe,me,Ie)};return K.terminal=!0,K}function Bt(e,t){function i(di,Tt,Nt){var fi=Nt&&Ko(Nt),Je=!fi&&Y(d);Ie.push({name:di,attr:p,raw:k,def:Tt,arg:I,modifiers:K,expression:Je&&Je.expression,filters:Je&&Je.filters,interp:Nt,hasOneTime:fi})}for(var n,s,d,p,k,T,I,K,te,ce,fe,me=e.length,Ie=[];me--;)if(n=e[me],s=p=n.name,d=k=n.value,ce=q(d),I=null,K=un(s),s=s.replace(Di,""),ce)d=J(ce),I=s,i("bind",Mt.bind,ce);else if(Hr.test(s))K.literal=!ji.test(s),i("transition",ci.transition);else if(Yn.test(s))I=s.replace(Yn,""),i("on",Mt.on);else if(ji.test(s))T=s.replace(ji,""),T==="style"||T==="class"?i(T,ci[T]):(I=T,i("bind",Mt.bind));else if(fe=s.match(Qn)){if(T=fe[1],I=fe[2],T==="else")continue;te=Ge(t,"directives",T,!0),te&&i(T,te)}if(Ie.length)return Zo(Ie)}function un(e){var t=Object.create(null),i=e.match(Di);if(i)for(var n=i.length;n--;)t[i[n].slice(1)]=!0;return t}function Zo(e){return function(t,i,n,s,d){for(var p=e.length;p--;)t._bindDir(e[p],i,n,s,d)}}function Ko(e){for(var t=e.length;t--;)if(e[t].oneTime)return!0}function pn(e){return e.tagName==="SCRIPT"&&(!e.hasAttribute("type")||e.getAttribute("type")==="text/javascript")}function _n(e,t){return t&&(t._containerAttrs=hn(e)),Le(e)&&(e=ht(e)),t&&(t._asComponent&&!t.template&&(t.template="<slot></slot>"),t.template&&(t._content=Ee(e),e=Yo(e,t))),xt(e)&&(tt(ye("v-start",!0),e),e.appendChild(ye("v-end",!0))),e}function Yo(e,t){var i=t.template,n=ht(i,!0);if(n){var s=n.firstChild;if(!s)return n;var d=s.tagName&&s.tagName.toLowerCase();return t.replace?(document.body,n.childNodes.length>1||s.nodeType!==1||d==="component"||Ge(t,"components",d)||ke(s,"is")||Ge(t,"elementDirectives",d)||s.hasAttribute("v-for")||s.hasAttribute("v-if")?n:(t._replacerAttrs=hn(s),Qo(e,s),s)):(e.appendChild(n),e)}}function hn(e){if(e.nodeType===1&&e.hasAttributes())return h(e.attributes)}function Qo(e,t){for(var i,n,s=e.attributes,d=s.length;d--;)i=s[d].name,n=s[d].value,t.hasAttribute(i)||qr.test(i)?i==="class"&&!q(n)&&(n=n.trim())&&n.split(/\s+/).forEach(function(p){de(t,p)}):t.setAttribute(i,n)}function gn(e,t){if(t){for(var i,n,s=e._slotContents=Object.create(null),d=0,p=t.children.length;d<p;d++)i=t.children[d],(n=i.getAttribute("slot"))&&(s[n]||(s[n]=[])).push(i);for(n in s)s[n]=mn(s[n],t);if(t.hasChildNodes()){var k=t.childNodes;if(k.length===1&&k[0].nodeType===3&&!k[0].data.trim())return;s.default=mn(t.childNodes,t)}}}function mn(e,t){var i=document.createDocumentFragment();e=h(e);for(var n=0,s=e.length;n<s;n++){var d=e[n];!Le(d)||d.hasAttribute("v-if")||d.hasAttribute("v-for")||(t.removeChild(d),d=ht(d,!0)),i.appendChild(d)}return i}function Xo(e){function t(){}function i(n,s){var d=new He(s,n,null,{lazy:!0});return function(){return d.dirty&&d.evaluate(),Ue.target&&d.depend(),d.value}}Object.defineProperty(e.prototype,"$data",{get:function(){return this._data},set:function(n){n!==this._data&&this._setData(n)}}),e.prototype._initState=function(){this._initProps(),this._initMeta(),this._initMethods(),this._initData(),this._initComputed()},e.prototype._initProps=function(){var n=this.$options,s=n.el,d=n.props;s=n.el=he(s),this._propsUnlinkFn=s&&s.nodeType===1&&d?an(this,s,d,this._scope):null},e.prototype._initData=function(){var n=this.$options.data,s=this._data=n?n():{};P(s)||(s={});var d,p,k=this._props,T=Object.keys(s);for(d=T.length;d--;)p=T[d],k&&l(k,p)||this._proxy(p);Ot(s,this)},e.prototype._setData=function(n){n=n||{};var s=this._data;this._data=n;var d,p,k;for(d=Object.keys(s),k=d.length;k--;)p=d[k],p in n||this._unproxy(p);for(d=Object.keys(n),k=d.length;k--;)p=d[k],l(this,p)||this._proxy(p);s.__ob__.removeVm(this),Ot(n,this),this._digest()},e.prototype._proxy=function(n){if(!o(n)){var s=this;Object.defineProperty(s,n,{configurable:!0,enumerable:!0,get:function(){return s._data[n]},set:function(d){s._data[n]=d}})}},e.prototype._unproxy=function(n){o(n)||delete this[n]},e.prototype._digest=function(){for(var n=0,s=this._watchers.length;n<s;n++)this._watchers[n].update(!0)},e.prototype._initComputed=function(){var n=this.$options.computed;if(n)for(var s in n){var d=n[s],p={enumerable:!0,configurable:!0};typeof d=="function"?(p.get=i(d,this),p.set=t):(p.get=d.get?d.cache!==!1?i(d.get,this):N(d.get,this):t,p.set=d.set?N(d.set,this):t),Object.defineProperty(this,s,p)}},e.prototype._initMethods=function(){var n=this.$options.methods;if(n)for(var s in n)this[s]=N(n[s],this)},e.prototype._initMeta=function(){var n=this.$options._meta;if(n)for(var s in n)Ke(this,s,n[s])}}function es(e){function t(T,I){for(var K,te,ce,fe=I.attributes,me=0,Ie=fe.length;me<Ie;me++)K=fe[me].name,Li.test(K)&&(K=K.replace(Li,""),te=fe[me].value,Rt(te)&&(te+=".apply(this, $arguments)"),ce=(T._scope||T._context).$eval(te,!0),ce._fromParent=!0,T.$on(K.replace(Li),ce))}function i(T,I,K){if(K){var te,ce,fe,me;for(ce in K)if(te=K[ce],De(te))for(fe=0,me=te.length;fe<me;fe++)n(T,I,ce,te[fe]);else n(T,I,ce,te)}}function n(T,I,K,te,ce){var fe=typeof te;if(fe==="function")T[I](K,te,ce);else if(fe==="string"){var me=T.$options.methods,Ie=me&&me[te];Ie&&T[I](K,Ie,ce)}else te&&fe==="object"&&n(T,I,K,te.handler,te)}function s(){this._isAttached||(this._isAttached=!0,this.$children.forEach(d))}function d(T){!T._isAttached&&pe(T.$el)&&T._callHook("attached")}function p(){this._isAttached&&(this._isAttached=!1,this.$children.forEach(k))}function k(T){T._isAttached&&!pe(T.$el)&&T._callHook("detached")}e.prototype._initEvents=function(){var T=this.$options;T._asComponent&&t(this,T.el),i(this,"$on",T.events),i(this,"$watch",T.watch)},e.prototype._initDOMHooks=function(){this.$on("hook:attached",s),this.$on("hook:detached",p)},e.prototype._callHook=function(T){this.$emit("pre-hook:"+T);var I=this.$options[T];if(I)for(var K=0,te=I.length;K<te;K++)I[K].call(this);this.$emit("hook:"+T)}}function ts(){}function it(e,t,i,n,s,d){this.vm=t,this.el=i,this.descriptor=e,this.name=e.name,this.expression=e.expression,this.arg=e.arg,this.modifiers=e.modifiers,this.filters=e.filters,this.literal=this.modifiers&&this.modifiers.literal,this._locked=!1,this._bound=!1,this._listeners=null,this._host=n,this._scope=s,this._frag=d}function is(e){e.prototype._updateRef=function(t){var i=this.$options._ref;if(i){var n=(this._scope||this._context).$refs;t?n[i]===this&&(n[i]=null):n[i]=this}},e.prototype._compile=function(t){var i=this.$options,n=t;if(t=_n(t,i),this._initElement(t),t.nodeType!==1||ge(t,"v-pre")===null){var s=this._context&&this._context.$options,d=ln(t,i,s);gn(this,i._content);var p,k=this.constructor;i._linkerCachable&&(p=k.linker,p||(p=k.linker=kt(t,i)));var T=d(this,t,this._scope),I=p?p(this,t):kt(t,i)(this,t);this._unlinkFn=function(){T(),I(!0)},i.replace&&a(n,t),this._isCompiled=!0,this._callHook("compiled")}},e.prototype._initElement=function(t){xt(t)?(this._isFragment=!0,this.$el=this._fragmentStart=t.firstChild,this._fragmentEnd=t.lastChild,this._fragmentStart.nodeType===3&&(this._fragmentStart.data=this._fragmentEnd.data=""),this._fragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},e.prototype._bindDir=function(t,i,n,s,d){this._directives.push(new it(t,this,i,n,s,d))},e.prototype._destroy=function(t,i){if(this._isBeingDestroyed)return void(i||this._cleanup());var n,s,d=this,p=function(){!n||s||i||d._cleanup()};t&&this.$el&&(s=!0,this.$remove(function(){s=!1,p()})),this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var k,T=this.$parent;for(T&&!T._isBeingDestroyed&&(T.$children.$remove(this),this._updateRef(!0)),k=this.$children.length;k--;)this.$children[k].$destroy();for(this._propsUnlinkFn&&this._propsUnlinkFn(),this._unlinkFn&&this._unlinkFn(),k=this._watchers.length;k--;)this._watchers[k].teardown();this.$el&&(this.$el.__vue__=null),n=!0,p()},e.prototype._cleanup=function(){this._isDestroyed||(this._frag&&this._frag.children.$remove(this),this._data&&this._data.__ob__&&this._data.__ob__.removeVm(this),this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off())}}function ns(e){e.prototype._applyFilters=function(t,i,n,s){var d,p,k,T,I,K,te,ce,fe;for(K=0,te=n.length;K<te;K++)if(d=n[s?te-K-1:K],p=Ge(this.$options,"filters",d.name,!0),p&&(p=s?p.write:p.read||p,typeof p=="function")){if(k=s?[t,i]:[t],I=s?2:1,d.args)for(ce=0,fe=d.args.length;ce<fe;ce++)T=d.args[ce],k[ce+I]=T.dynamic?this.$get(T.value):T.value;t=p.apply(this,k)}return t},e.prototype._resolveComponent=function(t,i){var n;if(n=typeof t=="function"?t:Ge(this.$options,"components",t,!0))if(n.options)i(n);else if(n.resolved)i(n.resolved);else if(n.requested)n.pendingCallbacks.push(i);else{n.requested=!0;var s=n.pendingCallbacks=[i];n.call(this,function(d){P(d)&&(d=e.extend(d)),n.resolved=d;for(var p=0,k=s.length;p<k;p++)s[p](d)},function(d){})}}}function os(e){function t(i){return JSON.parse(JSON.stringify(i))}e.prototype.$get=function(i,n){var s=pt(i);if(s){if(n){var d=this;return function(){d.$arguments=h(arguments);var p=s.get.call(d,d);return d.$arguments=null,p}}try{return s.get.call(this,this)}catch{}}},e.prototype.$set=function(i,n){var s=pt(i,!0);s&&s.set&&s.set.call(this,this,n)},e.prototype.$delete=function(i){u(this._data,i)},e.prototype.$watch=function(i,n,s){var d,p=this;typeof i=="string"&&(d=Y(i),i=d.expression);var k=new He(p,i,n,{deep:s&&s.deep,sync:s&&s.sync,filters:d&&d.filters,user:!s||s.user!==!1});return s&&s.immediate&&n.call(p,k.value),function(){k.teardown()}},e.prototype.$eval=function(i,n){if(Wr.test(i)){var s=Y(i),d=this.$get(s.expression,n);return s.filters?this._applyFilters(d,null,s.filters):d}return this.$get(i,n)},e.prototype.$interpolate=function(i){var n=q(i),s=this;return n?n.length===1?s.$eval(n[0].value)+"":n.map(function(d){return d.tag?s.$eval(d.value):d.value}).join(""):i},e.prototype.$log=function(i){var n=i?yt(this._data,i):this._data;if(n&&(n=t(n)),!i){var s;for(s in this.$options.computed)n[s]=t(this[s]);if(this._props)for(s in this._props)n[s]=t(this[s])}console.log(n)}}function ss(e){function t(p,k,T,I,K,te){k=i(k);var ce=!pe(k),fe=I===!1||ce?K:te,me=!ce&&!p._isAttached&&!pe(p.$el);return p._isFragment?(Ft(p._fragmentStart,p._fragmentEnd,function(Ie){fe(Ie,k,p)}),T&&T()):fe(p.$el,k,p,T),me&&p._callHook("attached"),p}function i(p){return typeof p=="string"?document.querySelector(p):p}function n(p,k,T,I){k.appendChild(p),I&&I()}function s(p,k,T,I){Pe(p,k),I&&I()}function d(p,k,T){je(p),T&&T()}e.prototype.$nextTick=function(p){Xe(p,this)},e.prototype.$appendTo=function(p,k,T){return t(this,p,k,T,n,oe)},e.prototype.$prependTo=function(p,k,T){return p=i(p),p.hasChildNodes()?this.$before(p.firstChild,k,T):this.$appendTo(p,k,T),this},e.prototype.$before=function(p,k,T){return t(this,p,k,T,s,be)},e.prototype.$after=function(p,k,T){return p=i(p),p.nextSibling?this.$before(p.nextSibling,k,T):this.$appendTo(p.parentNode,k,T),this},e.prototype.$remove=function(p,k){if(!this.$el.parentNode)return p&&p();var T=this._isAttached&&pe(this.$el);T||(k=!1);var I=this,K=function(){T&&I._callHook("detached"),p&&p()};if(this._isFragment)pi(this._fragmentStart,this._fragmentEnd,this,this._fragment,K);else{var te=k===!1?d:ve;te(this.$el,this,K)}return this}}function rs(e){function t(n,s,d){var p=n.$parent;if(p&&d&&!i.test(s))for(;p;)p._eventsCount[s]=(p._eventsCount[s]||0)+d,p=p.$parent}e.prototype.$on=function(n,s){return(this._events[n]||(this._events[n]=[])).push(s),t(this,n,1),this},e.prototype.$once=function(n,s){function d(){p.$off(n,d),s.apply(this,arguments)}var p=this;return d.fn=s,this.$on(n,d),this},e.prototype.$off=function(n,s){var d;if(!arguments.length){if(this.$parent)for(n in this._events)d=this._events[n],d&&t(this,n,-d.length);return this._events={},this}if(d=this._events[n],!d)return this;if(arguments.length===1)return t(this,n,-d.length),this._events[n]=null,this;for(var p,k=d.length;k--;)if(p=d[k],p===s||p.fn===s){t(this,n,-1),d.splice(k,1);break}return this},e.prototype.$emit=function(n){var s=typeof n=="string";n=s?n:n.name;var d=this._events[n],p=s||!d;if(d){d=d.length>1?h(d):d;var k=s&&d.some(function(fe){return fe._fromParent});k&&(p=!1);for(var T=h(arguments,1),I=0,K=d.length;I<K;I++){var te=d[I],ce=te.apply(this,T);ce!==!0||k&&!te._fromParent||(p=!0)}}return p},e.prototype.$broadcast=function(n){var s=typeof n=="string";if(n=s?n:n.name,this._eventsCount[n]){var d=this.$children,p=h(arguments);s&&(p[0]={name:n,source:this});for(var k=0,T=d.length;k<T;k++){var I=d[k],K=I.$emit.apply(I,p);K&&I.$broadcast.apply(I,p)}return this}},e.prototype.$dispatch=function(n){var s=this.$emit.apply(this,arguments);if(s){var d=this.$parent,p=h(arguments);for(p[0]={name:n,source:this};d;)s=d.$emit.apply(d,p),d=s?d.$parent:null;return this}};var i=/^hook:/}function as(e){function t(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}e.prototype.$mount=function(i){if(!this._isCompiled)return i=he(i),i||(i=document.createElement("div")),this._compile(i),this._initDOMHooks(),pe(this.$el)?(this._callHook("attached"),t.call(this)):this.$once("hook:attached",t),this},e.prototype.$destroy=function(i,n){this._destroy(i,n)},e.prototype.$compile=function(i,n,s,d){return kt(i,this.$options,!0)(this,i,n,s,d)}}function Be(e){this._init(e)}function ls(e,t,i){return i=i?parseInt(i,10):0,t=c(t),typeof t=="number"?e.slice(i,i+t):e}function cs(e,t,i){if(e=Xn(e),t==null)return e;if(typeof t=="function")return e.filter(t);t=(""+t).toLowerCase();for(var n,s,d,p,k=i==="in"?3:2,T=Array.prototype.concat.apply([],h(arguments,k)),I=[],K=0,te=e.length;K<te;K++)if(n=e[K],d=n&&n.$value||n,p=T.length){for(;p--;)if(s=T[p],s==="$key"&&jt(n.$key,t)||jt(yt(d,s),t)){I.push(n);break}}else jt(n,t)&&I.push(n);return I}function ds(e){function t(k,T,I){var K=n[I];return K&&(K!=="$key"&&($(k)&&"$value"in k&&(k=k.$value),$(T)&&"$value"in T&&(T=T.$value)),k=$(k)?yt(k,K):k,T=$(T)?yt(T,K):T),k===T?0:k>T?d:-d}var i=null,n=void 0;e=Xn(e);var s=h(arguments,1),d=s[s.length-1];typeof d=="number"?(d=d<0?-1:1,s=s.length>1?s.slice(0,-1):s):d=1;var p=s[0];return p?(typeof p=="function"?i=function(k,T){return p(k,T)*d}:(n=Array.prototype.concat.apply([],s),i=function(k,T,I){return I=I||0,I>=n.length-1?t(k,T,I):t(k,T,I)||i(k,T,I+1)}),e.slice().sort(i)):e}function jt(e,t){var i;if(P(e)){var n=Object.keys(e);for(i=n.length;i--;)if(jt(e[n[i]],t))return!0}else if(De(e)){for(i=e.length;i--;)if(jt(e[i],t))return!0}else if(e!=null)return e.toString().toLowerCase().indexOf(t)>-1}function fs(e){function t(n){return new Function("return function "+j(n)+" (options) { this._init(options) }")()}e.options={directives:Mt,elementDirectives:Zr,filters:Yr,transitions:{},components:{},partials:{},replace:!0},e.util=Ds,e.config=Ve,e.set=f,e.delete=u,e.nextTick=Xe,e.compiler=Ur,e.FragmentFactory=wt,e.internalDirectives=ci,e.parsers={path:Ps,text:Es,template:nr,directive:As,expression:Gs},e.cid=0;var i=1;e.extend=function(n){n=n||{};var s=this,d=s.cid===0;if(d&&n._Ctor)return n._Ctor;var p=n.name||s.options.name,k=t(p||"VueComponent");return k.prototype=Object.create(s.prototype),k.prototype.constructor=k,k.cid=i++,k.options=ft(s.options,n),k.super=s,k.extend=s.extend,Ve._assetTypes.forEach(function(T){k[T]=s[T]}),p&&(k.options.components[p]=k),d&&(n._Ctor=k),k},e.use=function(n){if(!n.installed){var s=h(arguments,1);return s.unshift(this),typeof n.install=="function"?n.install.apply(n,s):n.apply(null,s),n.installed=!0,this}},e.mixin=function(n){e.options=ft(e.options,n)},Ve._assetTypes.forEach(function(n){e[n]=function(s,d){return d?(n==="component"&&P(d)&&(d.name||(d.name=s),d=e.extend(d)),this.options[n+"s"][s]=d,d):this.options[n+"s"][s]}}),E(e.transition,Ns)}var us=Object.prototype.hasOwnProperty,ps=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,_s=/-(\w)/g,bn=/([^-])([A-Z])/g,hs=/(?:^|[-_\/])(\w)/g,gs=Object.prototype.toString,ms="[object Object]",De=Array.isArray,vn="__proto__"in{},mt=typeof window<"u"&&Object.prototype.toString.call(window)!=="[object Object]",Dt=mt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,ct=mt&&window.navigator.userAgent.toLowerCase(),bs=ct&&ct.indexOf("trident")>0,Vt=ct&&ct.indexOf("msie 9.0")>0,xn=ct&&ct.indexOf("android")>0,yn=ct&&/iphone|ipad|ipod|ios/.test(ct),xi=void 0,$t=void 0,yi=void 0,qt=void 0;if(mt&&!Vt){var wn=window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0,kn=window.onanimationend===void 0&&window.onwebkitanimationend!==void 0;xi=wn?"WebkitTransition":"transition",$t=wn?"webkitTransitionEnd":"transitionend",yi=kn?"WebkitAnimation":"animation",qt=kn?"webkitAnimationEnd":"animationend"}var Xe=function(){function e(){i=!1;var I=t.slice(0);t.length=0;for(var K=0;K<I.length;K++)I[K]()}var t=[],i=!1,n=void 0;if(typeof Promise<"u"&&M(Promise)){var s=Promise.resolve(),d=function(){};n=function(){s.then(e),yn&&setTimeout(d)}}else if(typeof MutationObserver<"u"){var p=1,k=new MutationObserver(e),T=document.createTextNode(String(p));k.observe(T,{characterData:!0}),n=function(){p=(p+1)%2,T.data=String(p)}}else n=setTimeout;return function(I,K){var te=K?function(){I.call(K)}:I;t.push(te),i||(i=!0,n(e,0))}}(),nt=void 0;typeof Set<"u"&&M(Set)?nt=Set:(nt=function(){this.set=Object.create(null)},nt.prototype.has=function(e){return this.set[e]!==void 0},nt.prototype.add=function(e){this.set[e]=1},nt.prototype.clear=function(){this.set=Object.create(null)});var wi=F.prototype;wi.put=function(e,t){var i,n=this.get(e,!0);return n||(this.size===this.limit&&(i=this.shift()),n={key:e},this._keymap[e]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size++),n.value=t,i},wi.shift=function(){var e=this.head;return e&&(this.head=this.head.newer,this.head.older=void 0,e.newer=e.older=void 0,this._keymap[e.key]=void 0,this.size--),e},wi.get=function(e,t){var i=this._keymap[e];if(i!==void 0)return i===this.tail||(i.newer&&(i===this.head&&(this.head=i.newer),i.newer.older=i.older),i.older&&(i.older.newer=i.newer),i.newer=void 0,i.older=this.tail,this.tail&&(this.tail.newer=i),this.tail=i),t?i:i.value};var bt,At,$n,Ct,ot,Ye,An=new F(1e3),vs=/^in$|^-?\d+/,Cn=0,Ut=1,Sn=2,ki=3,xs=34,ys=39,En=124,ws=92,Tn=32,ks={91:1,123:1,40:1},$s={91:93,123:125,40:41},As=Object.freeze({parseDirective:Y}),Cs=/[-.*+?^${}()|[\]\/\\]/g,Wt=void 0,Gt=void 0,Nn=void 0,Ss=/[^|]\|[^|]/,Es=Object.freeze({compileRegex:ie,parseText:q,tokensToExp:J}),On=["{{","}}"],Rn=["{{{","}}}"],Ve=Object.defineProperties({debug:!1,silent:!1,async:!0,warnExpressionErrors:!0,devtools:!1,_delimitersChanged:!0,_assetTypes:["component","directive","elementDirective","filter","transition","partial"],_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},_maxUpdateCount:100},{delimiters:{get:function(){return On},set:function(e){On=e,ie()},configurable:!0,enumerable:!0},unsafeDelimiters:{get:function(){return Rn},set:function(e){Rn=e,ie()},configurable:!0,enumerable:!0}}),Ts=void 0,Ns=Object.freeze({appendWithTransition:oe,beforeWithTransition:be,removeWithTransition:ve,applyTransition:Se}),jn=/^v-ref:/,Jt=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,$i=/^(slot|partial|component)$/i,Fe=Ve.optionMergeStrategies=Object.create(null);Fe.data=function(e,t,i){return i?e||t?function(){var n=typeof t=="function"?t.call(i):t,s=typeof e=="function"?e.call(i):void 0;return n?_i(n,s):s}:void 0:t?typeof t!="function"?e:e?function(){return _i(t.call(this),e.call(this))}:t:e},Fe.el=function(e,t,i){if(i||!t||typeof t=="function"){var n=t||e;return i&&typeof n=="function"?n.call(i):n}},Fe.init=Fe.created=Fe.ready=Fe.attached=Fe.detached=Fe.beforeCompile=Fe.compiled=Fe.beforeDestroy=Fe.destroyed=Fe.activate=function(e,t){return t?e?e.concat(t):De(t)?t:[t]:e},Ve._assetTypes.forEach(function(e){Fe[e+"s"]=eo}),Fe.watch=Fe.events=function(e,t){if(!t)return e;if(!e)return t;var i={};E(i,e);for(var n in t){var s=i[n],d=t[n];s&&!De(s)&&(s=[s]),i[n]=s?s.concat(d):[d]}return i},Fe.props=Fe.methods=Fe.computed=function(e,t){if(!t)return e;if(!e)return t;var i=Object.create(null);return E(i,e),E(i,t),i};var Os=function(e,t){return t===void 0?e:t},Rs=0;Ue.target=null,Ue.prototype.addSub=function(e){this.subs.push(e)},Ue.prototype.removeSub=function(e){this.subs.$remove(e)},Ue.prototype.depend=function(){Ue.target.addDep(this)},Ue.prototype.notify=function(){for(var e=h(this.subs),t=0,i=e.length;t<i;t++)e[t].update()};var Zt=Array.prototype,Ai=Object.create(Zt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=Zt[e];V(Ai,e,function(){for(var i=arguments.length,n=new Array(i);i--;)n[i]=arguments[i];var s,d=t.apply(this,n),p=this.__ob__;switch(e){case"push":s=n;break;case"unshift":s=n;break;case"splice":s=n.slice(2)}return s&&p.observeArray(s),p.dep.notify(),d})}),V(Zt,"$set",function(e,t){return e>=this.length&&(this.length=Number(e)+1),this.splice(e,1,t)[0]}),V(Zt,"$remove",function(e){if(this.length){var t=G(this,e);return t>-1?this.splice(t,1):void 0}});var js=Object.getOwnPropertyNames(Ai),Ci=!0;ut.prototype.walk=function(e){for(var t=Object.keys(e),i=0,n=t.length;i<n;i++)this.convert(t[i],e[t[i]])},ut.prototype.observeArray=function(e){for(var t=0,i=e.length;t<i;t++)Ot(e[t])},ut.prototype.convert=function(e,t){Ke(this.value,e,t)},ut.prototype.addVm=function(e){(this.vms||(this.vms=[])).push(e)},ut.prototype.removeVm=function(e){this.vms.$remove(e)};var Ds=Object.freeze({defineReactive:Ke,set:f,del:u,hasOwn:l,isLiteral:O,isReserved:o,_toString:r,toNumber:c,toBoolean:_,stripQuotes:m,camelize:S,hyphenate:R,classify:j,bind:N,toArray:h,extend:E,isObject:$,isPlainObject:P,def:V,debounce:W,indexOf:G,cancellable:ne,looseEqual:ae,isArray:De,hasProto:vn,inBrowser:mt,devtools:Dt,isIE:bs,isIE9:Vt,isAndroid:xn,isIOS:yn,get transitionProp(){return xi},get transitionEndEvent(){return $t},get animationProp(){return yi},get animationEndEvent(){return qt},nextTick:Xe,get _Set(){return nt},query:he,inDoc:pe,getAttr:ge,getBindAttr:we,hasBindAttr:ke,before:Pe,after:Ce,remove:je,prepend:tt,replace:a,on:y,off:L,setClass:re,addClass:de,removeClass:xe,extractContent:Ee,trimNode:Re,isTemplate:Le,createAnchor:ye,findRef:vt,mapNodeRange:Ft,removeNodeRange:pi,isFragment:xt,getOuterHTML:Mi,mergeOptions:ft,resolveAsset:Ge,checkComponentAttr:Fi,commonTagRE:Jt,reservedTagRE:$i,warn:Ts}),Ls=0,Dn=new F(1e3),ze=0,St=1,Ln=2,Pn=3,Si=0,Kt=1,Yt=2,Et=3,st=4,Qt=5,Xt=6,ei=7,Lt=8,dt=[];dt[Si]={ws:[Si],ident:[Et,ze],"[":[st],eof:[ei]},dt[Kt]={ws:[Kt],".":[Yt],"[":[st],eof:[ei]},dt[Yt]={ws:[Yt],ident:[Et,ze]},dt[Et]={ident:[Et,ze],0:[Et,ze],number:[Et,ze],ws:[Kt,St],".":[Yt,St],"[":[st,St],eof:[ei,St]},dt[st]={"'":[Qt,ze],'"':[Xt,ze],"[":[st,Ln],"]":[Kt,Pn],eof:Lt,else:[st,ze]},dt[Qt]={"'":[st,ze],eof:Lt,else:[Qt,ze]},dt[Xt]={'"':[st,ze],eof:Lt,else:[Xt,ze]};var Ps=Object.freeze({parsePath:Bi,getPath:yt,setPath:Vi}),Mn=new F(1e3),Ms="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",Fs=new RegExp("^("+Ms.replace(/,/g,"\\b|")+"\\b)"),zs="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",Is=new RegExp("^("+zs.replace(/,/g,"\\b|")+"\\b)"),Hs=/\s/g,Bs=/\n/g,Vs=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,Fn=/"(\d+)"/g,qs=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,Us=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g,Ws=/^(?:true|false|null|undefined|Infinity|NaN)$/,ti=[],Gs=Object.freeze({parseExpression:pt,isSimplePath:Rt}),ii=[],Ei=[],ni={},Js={},Ti=!1,Zs=0;He.prototype.get=function(){this.beforeGet();var e,t=this.scope||this.vm;try{e=this.getter.call(t,t)}catch{}return this.deep&&gi(e),this.preProcess&&(e=this.preProcess(e)),this.filters&&(e=t._applyFilters(e,null,this.filters,!1)),this.postProcess&&(e=this.postProcess(e)),this.afterGet(),e},He.prototype.set=function(e){var t=this.scope||this.vm;this.filters&&(e=t._applyFilters(e,this.value,this.filters,!0));try{this.setter.call(t,t,e)}catch{}var i=t.$forContext;if(i&&i.alias===this.expression){if(i.filters)return;i._withLock(function(){t.$key?i.rawValue[t.$key]=e:i.rawValue.$set(t.$index,e)})}},He.prototype.beforeGet=function(){Ue.target=this},He.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},He.prototype.afterGet=function(){Ue.target=null;for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},He.prototype.update=function(e){this.lazy?this.dirty=!0:this.sync||!Ve.async?this.run():(this.shallow=this.queued?!!e&&this.shallow:!!e,this.queued=!0,ho(this))},He.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||($(e)||this.deep)&&!this.shallow){var t=this.value;this.value=e,this.prevError,this.cb.call(this.vm,e,t)}this.queued=this.shallow=!1}},He.prototype.evaluate=function(){var e=Ue.target;this.value=this.get(),this.dirty=!1,Ue.target=e},He.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},He.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||this.vm._watchers.$remove(this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1,this.vm=this.cb=this.value=null}};var Ks=new nt,Ys={bind:function(){this.attr=this.el.nodeType===3?"data":"textContent"},update:function(e){this.el[this.attr]=r(e)}},zn=new F(1e3),In=new F(1e3),Te={efault:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};Te.td=Te.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],Te.option=Te.optgroup=[1,'<select multiple="multiple">',"</select>"],Te.thead=Te.tbody=Te.colgroup=Te.caption=Te.tfoot=[1,"<table>","</table>"],Te.g=Te.defs=Te.symbol=Te.use=Te.image=Te.text=Te.circle=Te.ellipse=Te.line=Te.path=Te.polygon=Te.polyline=Te.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var Qs=/<([\w:-]+)/,Xs=/&#?\w+?;/,er=/<!--/,tr=function(){if(mt){var e=document.createElement("div");return e.innerHTML="<template>1</template>",!e.cloneNode(!0).firstChild.innerHTML}return!1}(),ir=function(){if(mt){var e=document.createElement("textarea");return e.placeholder="t",e.cloneNode(!0).value==="t"}return!1}(),nr=Object.freeze({cloneNode:_t,parseTemplate:ht}),or={bind:function(){this.el.nodeType===8&&(this.nodes=[],this.anchor=ye("v-html"),a(this.el,this.anchor))},update:function(e){e=r(e),this.nodes?this.swap(e):this.el.innerHTML=e},swap:function(e){for(var t=this.nodes.length;t--;)je(this.nodes[t]);var i=ht(e,!0,!0);this.nodes=h(i.childNodes),Pe(i,this.anchor)}};zt.prototype.callHook=function(e){var t,i;for(t=0,i=this.childFrags.length;t<i;t++)this.childFrags[t].callHook(e);for(t=0,i=this.children.length;t<i;t++)e(this.children[t])},zt.prototype.beforeRemove=function(){var e,t;for(e=0,t=this.childFrags.length;e<t;e++)this.childFrags[e].beforeRemove(!1);for(e=0,t=this.children.length;e<t;e++)this.children[e].$destroy(!1,!0);var i=this.unlink.dirs;for(e=0,t=i.length;e<t;e++)i[e]._watcher&&i[e]._watcher.teardown()},zt.prototype.destroy=function(){this.parentFrag&&this.parentFrag.childFrags.$remove(this),this.node.__v_frag=null,this.unlink()};var Hn=new F(5e3);wt.prototype.create=function(e,t,i){var n=_t(this.template);return new zt(this.linker,this.vm,n,e,t,i)};var sr=700,rr=800,ar=850,lr=1100,cr=1500,dr=1500,fr=1750,ur=2100,pr=2200,_r=2300,hr=0,Bn={priority:pr,terminal:!0,params:["track-by","stagger","enter-stagger","leave-stagger"],bind:function(){var e=this.expression.match(/(.*) (?:in|of) (.*)/);if(e){var t=e[1].match(/\((.*),(.*)\)/);t?(this.iterator=t[1].trim(),this.alias=t[2].trim()):this.alias=e[1].trim(),this.expression=e[2]}if(this.alias){this.id="__v-for__"+ ++hr;var i=this.el.tagName;this.isOption=(i==="OPTION"||i==="OPTGROUP")&&this.el.parentNode.tagName==="SELECT",this.start=ye("v-for-start"),this.end=ye("v-for-end"),a(this.el,this.end),Pe(this.start,this.end),this.cache=Object.create(null),this.factory=new wt(this.vm,this.el)}},update:function(e){this.diff(e),this.updateRef(),this.updateModel()},diff:function(e){var t,i,n,s,d,p,k=e[0],T=this.fromObject=$(k)&&l(k,"$key")&&l(k,"$value"),I=this.params.trackBy,K=this.frags,te=this.frags=new Array(e.length),ce=this.alias,fe=this.iterator,me=this.start,Ie=this.end,di=pe(me),Tt=!K;for(t=0,i=e.length;t<i;t++)k=e[t],s=T?k.$key:null,d=T?k.$value:k,p=!$(d),n=!Tt&&this.getCachedFrag(d,t,s),n?(n.reused=!0,n.scope.$index=t,s&&(n.scope.$key=s),fe&&(n.scope[fe]=s!==null?s:t),(I||T||p)&&hi(function(){n.scope[ce]=d})):(n=this.create(d,ce,t,s),n.fresh=!Tt),te[t]=n,Tt&&n.before(Ie);if(!Tt){var Nt=0,fi=K.length-te.length;for(this.vm._vForRemoving=!0,t=0,i=K.length;t<i;t++)n=K[t],n.reused||(this.deleteCachedFrag(n),this.remove(n,Nt++,fi,di));this.vm._vForRemoving=!1,Nt&&(this.vm._watchers=this.vm._watchers.filter(function(Xr){return Xr.active}));var Je,Pi,ui,Qr=0;for(t=0,i=te.length;t<i;t++)n=te[t],Je=te[t-1],Pi=Je?Je.staggerCb?Je.staggerAnchor:Je.end||Je.node:me,n.reused&&!n.staggerCb?(ui=Qi(n,me,this.id),ui===Je||ui&&Qi(ui,me,this.id)===Je||this.move(n,Pi)):this.insert(n,Qr++,Pi,di),n.reused=n.fresh=!1}},create:function(e,t,i,n){var s=this._host,d=this._scope||this.vm,p=Object.create(d);p.$refs=Object.create(d.$refs),p.$els=Object.create(d.$els),p.$parent=d,p.$forContext=this,hi(function(){Ke(p,t,e)}),Ke(p,"$index",i),n?Ke(p,"$key",n):p.$key&&V(p,"$key",null),this.iterator&&Ke(p,this.iterator,n!==null?n:i);var k=this.factory.create(s,p,this._frag);return k.forId=this.id,this.cacheFrag(e,k,i,n),k},updateRef:function(){var e=this.descriptor.ref;if(e){var t,i=(this._scope||this.vm).$refs;this.fromObject?(t={},this.frags.forEach(function(n){t[n.scope.$key]=Xi(n)})):t=this.frags.map(Xi),i[e]=t}},updateModel:function(){if(this.isOption){var e=this.start.parentNode,t=e&&e.__v_model;t&&t.forceUpdate()}},insert:function(e,t,i,n){e.staggerCb&&(e.staggerCb.cancel(),e.staggerCb=null);var s=this.getStagger(e,t,null,"enter");if(n&&s){var d=e.staggerAnchor;d||(d=e.staggerAnchor=ye("stagger-anchor"),d.__v_frag=e),Ce(d,i);var p=e.staggerCb=ne(function(){e.staggerCb=null,e.before(d),je(d)});setTimeout(p,s)}else{var k=i.nextSibling;k||(Ce(this.end,i),k=this.end),e.before(k)}},remove:function(e,t,i,n){if(e.staggerCb)return e.staggerCb.cancel(),void(e.staggerCb=null);var s=this.getStagger(e,t,i,"leave");if(n&&s){var d=e.staggerCb=ne(function(){e.staggerCb=null,e.remove()});setTimeout(d,s)}else e.remove()},move:function(e,t){t.nextSibling||this.end.parentNode.appendChild(this.end),e.before(t.nextSibling,!1)},cacheFrag:function(e,t,i,n){var s,d=this.params.trackBy,p=this.cache,k=!$(e);n||d||k?(s=bi(i,n,e,d),p[s]||(p[s]=t)):(s=this.id,l(e,s)?e[s]===null&&(e[s]=t):Object.isExtensible(e)&&V(e,s,t)),t.raw=e},getCachedFrag:function(e,t,i){var n,s=this.params.trackBy,d=!$(e);if(i||s||d){var p=bi(t,i,e,s);n=this.cache[p]}else n=e[this.id];return n&&(n.reused||n.fresh),n},deleteCachedFrag:function(e){var t=e.raw,i=this.params.trackBy,n=e.scope,s=n.$index,d=l(n,"$key")&&n.$key,p=!$(t);if(i||d||p){var k=bi(s,d,t,i);this.cache[k]=null}else t[this.id]=null,e.raw=null},getStagger:function(e,t,i,n){n+="Stagger";var s=e.node.__v_trans,d=s&&s.hooks,p=d&&(d[n]||d.stagger);return p?p.call(e,t,i):t*parseInt(this.params[n]||this.params.stagger,10)},_preProcess:function(e){return this.rawValue=e,e},_postProcess:function(e){if(De(e))return e;if(P(e)){for(var t,i=Object.keys(e),n=i.length,s=new Array(n);n--;)t=i[n],s[n]={$key:t,$value:e[t]};return s}return typeof e!="number"||isNaN(e)||(e=xo(e)),e||[]},unbind:function(){if(this.descriptor.ref&&((this._scope||this.vm).$refs[this.descriptor.ref]=null),this.frags)for(var e,t=this.frags.length;t--;)e=this.frags[t],this.deleteCachedFrag(e),e.destroy()}},Ni={priority:ur,terminal:!0,bind:function(){var e=this.el;if(e.__vue__)this.invalid=!0;else{var t=e.nextElementSibling;t&&ge(t,"v-else")!==null&&(je(t),this.elseEl=t),this.anchor=ye("v-if"),a(e,this.anchor)}},update:function(e){this.invalid||(e?this.frag||this.insert():this.remove())},insert:function(){this.elseFrag&&(this.elseFrag.remove(),this.elseFrag=null),this.factory||(this.factory=new wt(this.vm,this.el)),this.frag=this.factory.create(this._host,this._scope,this._frag),this.frag.before(this.anchor)},remove:function(){this.frag&&(this.frag.remove(),this.frag=null),this.elseEl&&!this.elseFrag&&(this.elseFactory||(this.elseFactory=new wt(this.elseEl._context||this.vm,this.elseEl)),this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag),this.elseFrag.before(this.anchor))},unbind:function(){this.frag&&this.frag.destroy(),this.elseFrag&&this.elseFrag.destroy()}},gr={bind:function(){var e=this.el.nextElementSibling;e&&ge(e,"v-else")!==null&&(this.elseEl=e)},update:function(e){this.apply(this.el,e),this.elseEl&&this.apply(this.elseEl,!e)},apply:function(e,t){function i(){e.style.display=t?"":"none"}pe(e)?Se(e,t?1:-1,i,this.vm):i()}},mr={bind:function(){var e=this,t=this.el,i=t.type==="range",n=this.params.lazy,s=this.params.number,d=this.params.debounce,p=!1;if(xn||i||(this.on("compositionstart",function(){p=!0}),this.on("compositionend",function(){p=!1,n||e.listener()})),this.focused=!1,i||n||(this.on("focus",function(){e.focused=!0}),this.on("blur",function(){e.focused=!1,e._frag&&!e._frag.inserted||e.rawListener()})),this.listener=this.rawListener=function(){if(!p&&e._bound){var T=s||i?c(t.value):t.value;e.set(T),Xe(function(){e._bound&&!e.focused&&e.update(e._watcher.value)})}},d&&(this.listener=W(this.listener,d)),this.hasjQuery=typeof jQuery=="function",this.hasjQuery){var k=jQuery.fn.on?"on":"bind";jQuery(t)[k]("change",this.rawListener),n||jQuery(t)[k]("input",this.listener)}else this.on("change",this.rawListener),n||this.on("input",this.listener);!n&&Vt&&(this.on("cut",function(){Xe(e.listener)}),this.on("keyup",function(T){T.keyCode!==46&&T.keyCode!==8||e.listener()})),(t.hasAttribute("value")||t.tagName==="TEXTAREA"&&t.value.trim())&&(this.afterBind=this.listener)},update:function(e){e=r(e),e!==this.el.value&&(this.el.value=e)},unbind:function(){var e=this.el;if(this.hasjQuery){var t=jQuery.fn.off?"off":"unbind";jQuery(e)[t]("change",this.listener),jQuery(e)[t]("input",this.listener)}}},br={bind:function(){var e=this,t=this.el;this.getValue=function(){if(t.hasOwnProperty("_value"))return t._value;var i=t.value;return e.params.number&&(i=c(i)),i},this.listener=function(){e.set(e.getValue())},this.on("change",this.listener),t.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(e){this.el.checked=ae(e,this.getValue())}},vr={bind:function(){var e=this,t=this,i=this.el;this.forceUpdate=function(){t._watcher&&t.update(t._watcher.get())};var n=this.multiple=i.hasAttribute("multiple");this.listener=function(){var d=en(i,n);d=t.params.number?De(d)?d.map(c):c(d):d,t.set(d)},this.on("change",this.listener);var s=en(i,n,!0);(n&&s.length||!n&&s!==null)&&(this.afterBind=this.listener),this.vm.$on("hook:attached",function(){Xe(e.forceUpdate)}),pe(i)||Xe(this.forceUpdate)},update:function(e){var t=this.el;t.selectedIndex=-1;for(var i,n,s=this.multiple&&De(e),d=t.options,p=d.length;p--;)i=d[p],n=i.hasOwnProperty("_value")?i._value:i.value,i.selected=s?yo(e,n)>-1:ae(e,n)},unbind:function(){this.vm.$off("hook:attached",this.forceUpdate)}},xr={bind:function(){function e(){var n=i.checked;return n&&i.hasOwnProperty("_trueValue")?i._trueValue:!n&&i.hasOwnProperty("_falseValue")?i._falseValue:n}var t=this,i=this.el;this.getValue=function(){return i.hasOwnProperty("_value")?i._value:t.params.number?c(i.value):i.value},this.listener=function(){var n=t._watcher.get();if(De(n)){var s=t.getValue(),d=G(n,s);i.checked?d<0&&t.set(n.concat(s)):d>-1&&t.set(n.slice(0,d).concat(n.slice(d+1)))}else t.set(e())},this.on("change",this.listener),i.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(e){var t=this.el;De(e)?t.checked=G(e,this.getValue())>-1:t.hasOwnProperty("_trueValue")?t.checked=ae(e,t._trueValue):t.checked=!!e}},Pt={text:mr,radio:br,select:vr,checkbox:xr},yr={priority:rr,twoWay:!0,handlers:Pt,params:["lazy","number","debounce"],bind:function(){this.checkFilters(),this.hasRead&&this.hasWrite;var e,t=this.el,i=t.tagName;if(i==="INPUT")e=Pt[t.type]||Pt.text;else if(i==="SELECT")e=Pt.select;else{if(i!=="TEXTAREA")return;e=Pt.text}t.__v_model=this,e.bind.call(this),this.update=e.update,this._unbind=e.unbind},checkFilters:function(){var e=this.filters;if(e)for(var t=e.length;t--;){var i=Ge(this.vm.$options,"filters",e[t].name);(typeof i=="function"||i.read)&&(this.hasRead=!0),i.write&&(this.hasWrite=!0)}},unbind:function(){this.el.__v_model=null,this._unbind&&this._unbind()}},Vn={esc:27,tab:9,enter:13,space:32,delete:[8,46],up:38,left:37,right:39,down:40},wr={priority:sr,acceptStatement:!0,keyCodes:Vn,bind:function(){if(this.el.tagName==="IFRAME"&&this.arg!=="load"){var e=this;this.iframeBind=function(){y(e.el.contentWindow,e.arg,e.handler,e.modifiers.capture)},this.on("load",this.iframeBind)}},update:function(e){if(this.descriptor.raw||(e=function(){}),typeof e=="function"){this.modifiers.stop&&(e=ko(e)),this.modifiers.prevent&&(e=$o(e)),this.modifiers.self&&(e=Ao(e));var t=Object.keys(this.modifiers).filter(function(i){return i!=="stop"&&i!=="prevent"&&i!=="self"&&i!=="capture"});t.length&&(e=wo(e,t)),this.reset(),this.handler=e,this.iframeBind?this.iframeBind():y(this.el,this.arg,this.handler,this.modifiers.capture)}},reset:function(){var e=this.iframeBind?this.el.contentWindow:this.el;this.handler&&L(e,this.arg,this.handler)},unbind:function(){this.reset()}},qn=["-webkit-","-moz-","-ms-"],kr=["Webkit","Moz","ms"],Un=/!important;?$/,oi=Object.create(null),si=null,Wn={deep:!0,update:function(e){typeof e=="string"?this.el.style.cssText=e:De(e)?this.handleObject(e.reduce(E,{})):this.handleObject(e||{})},handleObject:function(e){var t,i,n=this.cache||(this.cache={});for(t in n)t in e||(this.handleSingle(t,null),delete n[t]);for(t in e)i=e[t],i!==n[t]&&(n[t]=i,this.handleSingle(t,i))},handleSingle:function(e,t){if(e=Co(e))if(t!=null&&(t+=""),t){var i=Un.test(t)?"important":"";i?(t=t.replace(Un,"").trim(),this.el.style.setProperty(e.kebab,t,i)):this.el.style[e.camel]=t}else this.el.style[e.camel]=""}},$r="http://www.w3.org/1999/xlink",Ar=/^xlink:/,Cr=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,Sr=/^(?:value|checked|selected|muted)$/,Er=/^(?:draggable|contenteditable|spellcheck)$/,Tr={value:"_value","true-value":"_trueValue","false-value":"_falseValue"},Nr={priority:ar,bind:function(){var e=this.arg,t=this.el.tagName;e||(this.deep=!0);var i=this.descriptor,n=i.interp;n&&(i.hasOneTime&&(this.expression=J(n,this._scope||this.vm)),(Cr.test(e)||e==="name"&&(t==="PARTIAL"||t==="SLOT"))&&(this.el.removeAttribute(e),this.invalid=!0))},update:function(e){if(!this.invalid){var t=this.arg;this.arg?this.handleSingle(t,e):this.handleObject(e||{})}},handleObject:Wn.handleObject,handleSingle:function(e,t){var i=this.el,n=this.descriptor.interp;if(this.modifiers.camel&&(e=S(e)),!n&&Sr.test(e)&&e in i){var s=e==="value"&&t==null?"":t;i[e]!==s&&(i[e]=s)}var d=Tr[e];if(!n&&d){i[d]=t;var p=i.__v_model;p&&p.listener()}return e==="value"&&i.tagName==="TEXTAREA"?void i.removeAttribute(e):void(Er.test(e)?i.setAttribute(e,t?"true":"false"):t!=null&&t!==!1?e==="class"?(i.__v_trans&&(t+=" "+i.__v_trans.id+"-transition"),re(i,t)):Ar.test(e)?i.setAttributeNS($r,e,t===!0?"":t):i.setAttribute(e,t===!0?"":t):i.removeAttribute(e))}},Or={priority:cr,bind:function(){if(this.arg){var e=this.id=S(this.arg),t=(this._scope||this.vm).$els;l(t,e)?t[e]=this.el:Ke(t,e,this.el)}},unbind:function(){var e=(this._scope||this.vm).$els;e[this.id]===this.el&&(e[this.id]=null)}},Rr={bind:function(){}},jr={bind:function(){var e=this.el;this.vm.$once("pre-hook:compiled",function(){e.removeAttribute("v-cloak")})}},Mt={text:Ys,html:or,for:Bn,if:Ni,show:gr,model:yr,on:wr,bind:Nr,el:Or,ref:Rr,cloak:jr},Dr={deep:!0,update:function(e){e?typeof e=="string"?this.setClass(e.trim().split(/\s+/)):this.setClass(Eo(e)):this.cleanup()},setClass:function(e){this.cleanup(e);for(var t=0,i=e.length;t<i;t++){var n=e[t];n&&tn(this.el,n,de)}this.prevKeys=e},cleanup:function(e){var t=this.prevKeys;if(t)for(var i=t.length;i--;){var n=t[i];(!e||e.indexOf(n)<0)&&tn(this.el,n,xe)}}},Lr={priority:dr,params:["keep-alive","transition-mode","inline-template"],bind:function(){this.el.__vue__||(this.keepAlive=this.params.keepAlive,this.keepAlive&&(this.cache={}),this.params.inlineTemplate&&(this.inlineTemplate=Ee(this.el,!0)),this.pendingComponentCb=this.Component=null,this.pendingRemovals=0,this.pendingRemovalCb=null,this.anchor=ye("v-component"),a(this.el,this.anchor),this.el.removeAttribute("is"),this.el.removeAttribute(":is"),this.descriptor.ref&&this.el.removeAttribute("v-ref:"+R(this.descriptor.ref)),this.literal&&this.setComponent(this.expression))},update:function(e){this.literal||this.setComponent(e)},setComponent:function(e,t){if(this.invalidatePending(),e){var i=this;this.resolveComponent(e,function(){i.mountComponent(t)})}else this.unbuild(!0),this.remove(this.childVM,t),this.childVM=null},resolveComponent:function(e,t){var i=this;this.pendingComponentCb=ne(function(n){i.ComponentName=n.options.name||(typeof e=="string"?e:null),i.Component=n,t()}),this.vm._resolveComponent(e,this.pendingComponentCb)},mountComponent:function(e){this.unbuild(!0);var t=this,i=this.Component.options.activate,n=this.getCached(),s=this.build();i&&!n?(this.waitingFor=s,To(i,s,function(){t.waitingFor===s&&(t.waitingFor=null,t.transition(s,e))})):(n&&s._updateRef(),this.transition(s,e))},invalidatePending:function(){this.pendingComponentCb&&(this.pendingComponentCb.cancel(),this.pendingComponentCb=null)},build:function(e){var t=this.getCached();if(t)return t;if(this.Component){var i={name:this.ComponentName,el:_t(this.el),template:this.inlineTemplate,parent:this._host||this.vm,_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:!0,_isRouterView:this._isRouterView,_context:this.vm,_scope:this._scope,_frag:this._frag};e&&E(i,e);var n=new this.Component(i);return this.keepAlive&&(this.cache[this.Component.cid]=n),n}},getCached:function(){return this.keepAlive&&this.cache[this.Component.cid]},unbuild:function(e){this.waitingFor&&(this.keepAlive||this.waitingFor.$destroy(),this.waitingFor=null);var t=this.childVM;return!t||this.keepAlive?void(t&&(t._inactive=!0,t._updateRef(!0))):void t.$destroy(!1,e)},remove:function(e,t){var i=this.keepAlive;if(e){this.pendingRemovals++,this.pendingRemovalCb=t;var n=this;e.$remove(function(){n.pendingRemovals--,i||e._cleanup(),!n.pendingRemovals&&n.pendingRemovalCb&&(n.pendingRemovalCb(),n.pendingRemovalCb=null)})}else t&&t()},transition:function(e,t){var i=this,n=this.childVM;switch(n&&(n._inactive=!0),e._inactive=!1,this.childVM=e,i.params.transitionMode){case"in-out":e.$before(i.anchor,function(){i.remove(n,t)});break;case"out-in":i.remove(n,function(){e.$before(i.anchor,t)});break;default:i.remove(n),e.$before(i.anchor,t)}},unbind:function(){if(this.invalidatePending(),this.unbuild(),this.cache){for(var e in this.cache)this.cache[e].$destroy();this.cache=null}}},ri=Ve._propBindingModes,Pr={},Mr=/^[$_a-zA-Z]+[\w$]*$/,Fr=Ve._propBindingModes,Gn={bind:function(){var e=this.vm,t=e._context,i=this.descriptor.prop,n=i.path,s=i.parentPath,d=i.mode===Fr.TWO_WAY,p=this.parentWatcher=new He(t,s,function(T){Ro(e,i,T)},{twoWay:d,filters:i.filters,scope:this._scope});if(gt(e,i,p.value),d){var k=this;e.$once("pre-hook:created",function(){k.childWatcher=new He(e,n,function(T){p.set(T)},{sync:!0})})}},unbind:function(){this.parentWatcher.teardown(),this.childWatcher&&this.childWatcher.teardown()}},ai=[],Oi=!1,li="transition",Jn="animation",Zn=xi+"Duration",Kn=yi+"Duration",Ri=mt&&window.requestAnimationFrame,zr=Ri?function(e){Ri(function(){Ri(e)})}:function(e){setTimeout(e,50)},Qe=sn.prototype;Qe.enter=function(e,t){this.cancelPending(),this.callHook("beforeEnter"),this.cb=t,de(this.el,this.enterClass),e(),this.entered=!1,this.callHookWithCb("enter"),this.entered||(this.cancel=this.hooks&&this.hooks.enterCancelled,on(this.enterNextTick))},Qe.enterNextTick=function(){var e=this;this.justEntered=!0,zr(function(){e.justEntered=!1});var t=this.enterDone,i=this.getCssTransitionType(this.enterClass);this.pendingJsCb?i===li&&xe(this.el,this.enterClass):i===li?(xe(this.el,this.enterClass),this.setupCssCb($t,t)):i===Jn?this.setupCssCb(qt,t):t()},Qe.enterDone=function(){this.entered=!0,this.cancel=this.pendingJsCb=null,xe(this.el,this.enterClass),this.callHook("afterEnter"),this.cb&&this.cb()},Qe.leave=function(e,t){this.cancelPending(),this.callHook("beforeLeave"),this.op=e,this.cb=t,de(this.el,this.leaveClass),this.left=!1,this.callHookWithCb("leave"),this.left||(this.cancel=this.hooks&&this.hooks.leaveCancelled,this.op&&!this.pendingJsCb&&(this.justEntered?this.leaveDone():on(this.leaveNextTick)))},Qe.leaveNextTick=function(){var e=this.getCssTransitionType(this.leaveClass);if(e){var t=e===li?$t:qt;this.setupCssCb(t,this.leaveDone)}else this.leaveDone()},Qe.leaveDone=function(){this.left=!0,this.cancel=this.pendingJsCb=null,this.op(),xe(this.el,this.leaveClass),this.callHook("afterLeave"),this.cb&&this.cb(),this.op=null},Qe.cancelPending=function(){this.op=this.cb=null;var e=!1;this.pendingCssCb&&(e=!0,L(this.el,this.pendingCssEvent,this.pendingCssCb),this.pendingCssEvent=this.pendingCssCb=null),this.pendingJsCb&&(e=!0,this.pendingJsCb.cancel(),this.pendingJsCb=null),e&&(xe(this.el,this.enterClass),xe(this.el,this.leaveClass)),this.cancel&&(this.cancel.call(this.vm,this.el),this.cancel=null)},Qe.callHook=function(e){this.hooks&&this.hooks[e]&&this.hooks[e].call(this.vm,this.el)},Qe.callHookWithCb=function(e){var t=this.hooks&&this.hooks[e];t&&(t.length>1&&(this.pendingJsCb=ne(this[e+"Done"])),t.call(this.vm,this.el,this.pendingJsCb))},Qe.getCssTransitionType=function(e){if(!(!$t||document.hidden||this.hooks&&this.hooks.css===!1||Fo(this.el))){var t=this.type||this.typeCache[e];if(t)return t;var i=this.el.style,n=window.getComputedStyle(this.el),s=i[Zn]||n[Zn];if(s&&s!=="0s")t=li;else{var d=i[Kn]||n[Kn];d&&d!=="0s"&&(t=Jn)}return t&&(this.typeCache[e]=t),t}},Qe.setupCssCb=function(e,t){this.pendingCssEvent=e;var i=this,n=this.el,s=this.pendingCssCb=function(d){d.target===n&&(L(n,e,s),i.pendingCssEvent=i.pendingCssCb=null,!i.pendingJsCb&&t&&t())};y(n,e,s)};var Ir={priority:lr,update:function(e,t){var i=this.el,n=Ge(this.vm.$options,"transitions",e);e=e||"v",t=t||"v",i.__v_trans=new sn(i,e,n,this.vm),xe(i,t+"-transition"),de(i,e+"-transition")}},ci={style:Wn,class:Dr,component:Lr,prop:Gn,transition:Ir},ji=/^v-bind:|^:/,Yn=/^v-on:|^@/,Qn=/^v-([^:]+)(?:$|:(.*)$)/,Di=/\.[^\.]+/g,Hr=/^(v-bind:|:)?transition$/,Br=1e3,Vr=2e3;Ht.terminal=!0;var qr=/[^\w\-:\.]/,Ur=Object.freeze({compile:kt,compileAndLinkProps:an,compileRoot:ln,transclude:_n,resolveSlots:gn}),Li=/^v-on:|^@/;it.prototype._bind=function(){var e=this.name,t=this.descriptor;if((e!=="cloak"||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var i=t.attr||"v-"+e;this.el.removeAttribute(i)}var n=t.def;if(typeof n=="function"?this.update=n:E(this,n),this._setupParams(),this.bind&&this.bind(),this._bound=!0,this.literal)this.update&&this.update(t.raw);else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){var s=this;this.update?this._update=function(T,I){s._locked||s.update(T,I)}:this._update=ts;var d=this._preProcess?N(this._preProcess,this):null,p=this._postProcess?N(this._postProcess,this):null,k=this._watcher=new He(this.vm,this.expression,this._update,{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:d,postProcess:p,scope:this._scope});this.afterBind?this.afterBind():this.update&&this.update(k.value)}},it.prototype._setupParams=function(){if(this.params){var e=this.params;this.params=Object.create(null);for(var t,i,n,s=e.length;s--;)t=R(e[s]),n=S(t),i=we(this.el,t),i!=null?this._setupParamWatcher(n,i):(i=ge(this.el,t),i!=null&&(this.params[n]=i===""||i))}},it.prototype._setupParamWatcher=function(e,t){var i=this,n=!1,s=(this._scope||this.vm).$watch(t,function(d,p){if(i.params[e]=d,n){var k=i.paramWatchers&&i.paramWatchers[e];k&&k.call(i,d,p)}else n=!0},{immediate:!0,user:!1});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(s)},it.prototype._checkStatement=function(){var e=this.expression;if(e&&this.acceptStatement&&!Rt(e)){var t=pt(e).get,i=this._scope||this.vm,n=function(s){i.$event=s,t.call(i,i),i.$event=null};return this.filters&&(n=i._applyFilters(n,null,this.filters)),this.update(n),!0}},it.prototype.set=function(e){this.twoWay&&this._withLock(function(){this._watcher.set(e)})},it.prototype._withLock=function(e){var t=this;t._locked=!0,e.call(t),Xe(function(){t._locked=!1})},it.prototype.on=function(e,t,i){y(this.el,e,t,i),(this._listeners||(this._listeners=[])).push([e,t])},it.prototype._teardown=function(){if(this._bound){this._bound=!1,this.unbind&&this.unbind(),this._watcher&&this._watcher.teardown();var e,t=this._listeners;if(t)for(e=t.length;e--;)L(this.el,t[e][0],t[e][1]);var i=this._paramUnwatchFns;if(i)for(e=i.length;e--;)i[e]();this.vm=this.el=this._watcher=this._listeners=null}};var Wr=/[^|]\|[^|]/;so(Be),Xo(Be),es(Be),is(Be),ns(Be),os(Be),ss(Be),rs(Be),as(Be);var Gr={priority:_r,params:["name"],bind:function(){var e=this.params.name||"default",t=this.vm._slotContents&&this.vm._slotContents[e];t&&t.hasChildNodes()?this.compile(t.cloneNode(!0),this.vm._context,this.vm):this.fallback()},compile:function(e,t,i){if(e&&t){if(this.el.hasChildNodes()&&e.childNodes.length===1&&e.childNodes[0].nodeType===1&&e.childNodes[0].hasAttribute("v-if")){var n=document.createElement("template");n.setAttribute("v-else",""),n.innerHTML=this.el.innerHTML,n._context=this.vm,e.appendChild(n)}var s=i?i._scope:this._scope;this.unlink=t.$compile(e,i,s,this._frag)}e?a(this.el,e):je(this.el)},fallback:function(){this.compile(Ee(this.el,!0),this.vm)},unbind:function(){this.unlink&&this.unlink()}},Jr={priority:fr,params:["name"],paramWatchers:{name:function(e){Ni.remove.call(this),e&&this.insert(e)}},bind:function(){this.anchor=ye("v-partial"),a(this.el,this.anchor),this.insert(this.params.name)},insert:function(e){var t=Ge(this.vm.$options,"partials",e,!0);t&&(this.factory=new wt(this.vm,t),Ni.insert.call(this))},unbind:function(){this.frag&&this.frag.destroy()}},Zr={slot:Gr,partial:Jr},Xn=Bn._postProcess,Kr=/(\d{3})(?=\d)/g,Yr={orderBy:ds,filterBy:cs,limitBy:ls,json:{read:function(e,t){return typeof e=="string"?e:JSON.stringify(e,null,arguments.length>1?t:2)},write:function(e){try{return JSON.parse(e)}catch{return e}}},capitalize:function(e){return e||e===0?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""},uppercase:function(e){return e||e===0?e.toString().toUpperCase():""},lowercase:function(e){return e||e===0?e.toString().toLowerCase():""},currency:function(e,t,i){if(e=parseFloat(e),!isFinite(e)||!e&&e!==0)return"";t=t??"$",i=i??2;var n=Math.abs(e).toFixed(i),s=i?n.slice(0,-1-i):n,d=s.length%3,p=d>0?s.slice(0,d)+(s.length>3?",":""):"",k=i?n.slice(-1-i):"",T=e<0?"-":"";return T+t+p+s.slice(d).replace(Kr,"$1,")+k},pluralize:function(e){var t=h(arguments,1),i=t.length;if(i>1){var n=e%10-1;return n in t?t[n]:t[i-1]}return t[0]+(e===1?"":"s")},debounce:function(e,t){if(e)return t||(t=300),W(e,t)}};return fs(Be),Be.version="1.0.28",setTimeout(function(){Ve.devtools&&Dt&&Dt.emit("init",Be)},0),Be}),Vue.directive("tooltip",function(f){this.el.setAttribute("data-hover","tooltip"),f?(f.content&&(this.el.setAttribute("title",f.content),this.el.setAttribute("data-tooltip-content",f.content)),f.uri&&this.el.setAttribute("data-tooltip-uri",f.uri),this.el.setAttribute("data-tooltip-delay",typeof f.delay<"u"?f.delay:1*X.seconds),f.position&&this.el.setAttribute("data-tooltip-position",f.position),f.align&&this.el.setAttribute("data-tooltip-alignh",f.align),f.icon&&(this.el.className="sfx-help-icon",this.el.setAttribute("data-tooltip-delay",1))):(this.el.setAttribute("data-tooltip-content",this.expression),this.el.setAttribute("title",this.expression),this.el.getAttribute("data-tooltip-delay")==null&&this.el.setAttribute("data-tooltip-delay","1000"))}),Vue.filter("highlight",function(f,u){if(!u)return f==null?"":f.toString();var l=new RegExp(u,"ig");return f.toString().replace(l,function(O){return"<span class='sfx_highlight'>"+O+"</span>"})}),Vue.filter("date",function(f){return new Date(f).toString().replace(/\s*GMT.*/,"")}),Vue.filter("ago",function(f){return X.ago(f)}),Vue.filter("json+",{read:function(f,u){return typeof f=="string"?f:JSON.stringify(f,null,arguments.length>1?u:2)},write:function(f){try{return JSON.parse(f)}catch{return{}}}}),Vue.component("sfx-checkbox",{template:'<span><input id="sfx-cb-{{key}}" type="checkbox" v-on:click="click"/><label for="sfx-cb-{{key}}"></label></span>',props:["key"],activate:function(f){this.$cb=X(this.$el.firstChild),this.$cb.prop("checked",FX.option(this.key)),f()},methods:{click:function(){this.$cb.addClass("sfx_saving"),FX.option(this.key,this.$cb.prop("checked"),!0,function(){this.$cb.removeClass("sfx_saving")})}}});const qe=function(f,u,l,O,o,r){var c=document.createDocumentFragment(),_=function(){},m=new Vue(X.extend({el:c,template:u,data:l,methods:O,computed:o,replace:!1,ready:function(){_(m)}},r));f&&m.$appendTo(f);var S={$view:m,fragment:c,ready:function(b){return m._isReady?b():_=b,S}};return S};var FX=function(){var f=[],u=[],l=[],O=[],o=[],r=[],c=function(M,F,w){!M||!M.length||(M.forEach(function(x){try{x(w)}catch(g){console.log(g),console.log(g.toString()),console.log(g.stack)}}),F&&(M.length=0))},_=!1,m=function(){_||(_=!0,c(l),_=!1,c(u))},S=function(){var M=function(F){var w=history[F];return function(x,g,z){var C=z&&z!=location.href&&!/theater/.test(z),D=w.apply(this,arguments);if(C){var U=new Event(F);U.arguments=arguments,window.dispatchEvent(U)}return D}};window.history.pushState=M("pushState"),window.history.replaceState=M("replaceState")};X.inject(S),window.addEventListener("pushState",m,!1),window.addEventListener("replaceState",m,!1),window.addEventListener("hashchange",m,!1),window.addEventListener("popstate",m,!1);var b={};b.css=function(M){f.push(M)},b.css_dump=function(){if(f.length!=0){var M=f.join("");X.css(M,"sfx_css")}},b.options={},b.is_options_loaded=!1,b.add_option=function(M,F){F=F||{},F.key=M,F.type=F.type||"checkbox",typeof F.default>"u"&&F.type=="checkbox"&&(F.default=!1),this.options[M]=F,typeof F.live=="function"&&b.on_option_live(M,F.live)},b.option_default=function(M){var F=b.options[M];return typeof F<"u"&&typeof F.default<"u"?F.default:null},b.option=function(M,F,w,x){return typeof F<"u"?(X.storage.set("options",M,F,function(){b.fire_option_update(M,F),typeof x=="function"&&x()},w),F):typeof X.storage.data.options<"u"&&typeof X.storage.data.options[M]<"u"?X.storage.data.options[M]:b.option_default(M)},b.attach_options=function(M){M=X(M),M.probe("*[sfx-option]").each(function(F,w){var x=X(w);if(!x.attr("sfx-option-attached")){var g=w.type,z=x.attr("sfx-option");if(!(!z||!b.options[z])){var C=b.option(z);x.attr("sfx-option-attached","true"),g=="checkbox"?(C&&(w.checked=!0),x.click(function(){C=!C,b.option(z,C)})):g=="number"?(C&&(w.value=C),x.change(function(){b.option(z,w.value)})):alert("FX.attach_options - Unhandled input type "+g)}}})},b.save_options=function(M){X.storage.save("options",null,M)},b.options_loaded=function(M){c(o,!1,M),b.css_dump(),b.html_class_dump(),b.is_options_loaded=!0},b.on_options_load=function(M){b.is_options_loaded?M():o.push(M)},b.on_option=function(M,F,w){typeof F=="function"&&(w=F,F=!0),b.on_options_load(function(){b.option(M)==F&&w(b.option(M))})};var R={};b.on_option_update=function(M,F){typeof R[M]>"u"&&(R[M]=[]),R[M].push(F)},b.fire_option_update=function(M,F){var w=R[M];typeof w>"u"||w.forEach(function(x){x(F,M)})},b.on_option_live=function(M,F){if(Array.isArray(M))return M.forEach(w=>b.on_option_live(w,F));b.on_option_update(M,F),b.fire_option_update(M,b.option(M))},b.storage=function(M){return X.storage.data[M]},b.add_html_class=function(M){r.push(M),X.is_document_ready()&&b.html_class_dump()},b.html_class_dump=function(){if(r.length>0){var M=document.getElementsByTagName("HTML")[0];M.className=(M.className?M.className:"")+" "+r.join(" "),r.length=0}},b.on_page_load=function(M){u.push(M)},b.on_page_unload=function(M){l.push(M)},b.on_content_loaded=function(M,F){b.dom_content_loaded?M():F?O.unshift(M):O.push(M)},b.dom_content_loaded=!1,b.fire_content_loaded=function(){var M=function(){b.dom_content_loaded=!0,b.html_class_dump(),c(O,!0),c(u),b.html_class_dump()};X.is_document_ready()?M():window.addEventListener("DOMContentLoaded",function(){M()},{capture:!1,once:!0})},b.domNodeInsertedHandlers=[],b.domNodeRemovedHandlers=[],b.on_content_inserted=M=>b.domNodeInsertedHandlers.push(M),b.on_content_removed=M=>b.domNodeRemovedHandlers.push(M),b.on_content=function(M){b.on_content_inserted(M),b.on_content_loaded(function(){M(X(document.body))})},b.on_selector=function(M,F){var w=function(x){x.probe(M).forEach(function(g){F(X(g))})};b.on_content(w)},b.oneLineLtrim=function(M){return M.replace(/[\n\r]+\s*/g,"")},b.sfx_support_groups=["SocialFixerUserSupport","412712822130938","SocialFixerUsersSupport","413697228741798","327097871787555"],b.context={type:null,id:null},b.on_page_load(function(){if(!b.option("disabled")){var M=function(){X(document.documentElement).attr({sfx_url:window.location.pathname,sfx_context_type:b.context.type,sfx_context_id:b.context.id,sfx_context_permalink:b.context.permalink}),X.support_note("sfx_context",`{ url: ${window.location.pathname}, type: ${b.context.type}, id: ${b.context.id}, permalink: ${b.context.permalink} }`),b.context.type=="groups"&&b.sfx_support_groups.includes(b.context.id)&&X("html").addClass("sfx_support_group")},F=window.location.pathname.replace(/^\/+|\/+$/g,"").split("/");if(!F||!F[0]||F[0]=="home.php")b.context.type="newsfeed",b.context.id=null;else if(F[0]=="marketplace")b.context.type=F[0],b.context.id=F[1]=="category"?F[2]:F[1];else if(F[0]=="messages")b.context.type="messages",b.context.id=F[1]=="t"?F[2]:null;else if(/messenger\.com$/.test(window.location.hostname))b.context.type="messages",b.context.id=F[0]=="t"?F[1]:null;else if(F.length==1||F[1]=="posts")b.context.type="profile",b.context.id=F[0];else if(F[0]=="pg"&&F[2]=="posts")b.context.type="profile",b.context.id=F[1];else if(F[0]=="groups"){if(b.context.type="groups",b.context.id=F[1],/^\d+$/.test(b.context.id)){var w=X('a._5pcq[href^="/groups/"]').attr("href");w?b.context.id=w.split("/")[2]:setTimeout(function(){var g=X('a._5pcq[href^="/groups/"]').attr("href");g&&(b.context.id=g.split("/")[2],M())},2*X.seconds)}}else b.context.type=F[0],b.context.id=F[1];var x=window.location.search.replace(/^\?/,"");b.context.permalink=F[1]=="posts"&&/^\d/.test(F[2])||F[1]=="posts"&&/^pfbid0/.test(F[2])||F[0]=="permalink.php"||/notif_id=/.test(x)||F[0]=="groups"&&(/view=permalink/.test(x)||/multi_permalinks=/.test(x)||F[2]=="posts"||F[2]=="permalink"),M(),X.publish("context/ready"),X.subscribe("context/changed",M)}}),b.reflow=function(M){M&&window.scrollTo(0,3)},b.mutations_disabled=!1,b.disable_mutations=function(){b.mutations_disabled=!0},b.enable_mutations=function(){b.mutations_disabled=!1};const j=/^(?:SCRIPT|LINK|INPUT|BR|STYLE|META|IFRAME|AUDIO|EMBED)$/i,N=/tooltipText/i,h=/none_to_ignore_right_now/,E=/sfx[-_]/,$=/sfx[-_]/,P=M=>M.nodeType!=1||j.test(M.tagName)||N.test(M.className)||M.parentNode&&h.test(M.parentNode.className),V=M=>P(M)||E.test(M.id)||$.test(M.className),W=P,G=M=>V(M)||b.domNodeInsertedHandlers.some(F=>F(X(M))),ne=M=>W(M)||b.domNodeRemovedHandlers.some(F=>F(X(M))),ae=M=>b.mutations_disabled||M.forEach(F=>{F.type==="childList"&&F.addedNodes.forEach(G),F.type==="childList"&&F.removedNodes.forEach(ne)});return X(()=>new MutationObserver(ae).observe(document.body,{childList:!0,subtree:!0})),b}();const v={version:"31.1.0",buildtype:"userscript",releasetype:"",userscript_agent:void 0,user_agent:"Browser: "+navigator.userAgent,instance:"sfx_"+((1+Math.random())*36**6).toString(36).replace(/^1|\..*/g,"")};v.badge_sel="[id=sfx_badge]."+v.instance;const $e=typeof GM<"u"?GM.info:typeof GM_info<"u"?GM_info:null;v.buildtype=="userscript"&&(v.userscript_agent=$e?($e.scriptHandler||"Greasemonkey")+" v:"+($e.version||"unknown"):"unknown-userscript-manager v:unknown",$e&&$e.script&&$e.script.version&&(v.version=$e.script.version)),v.releasetype&&(v.version=`${v.releasetype} ${v.version}`),!v.extension_id&&typeof browser<"u"&&browser.runtime&&(v.extension_id=browser.runtime.id),!v.extension_id&&typeof chrome<"u"&&chrome.runtime&&(v.extension_id=chrome.runtime.id),[["betterfacebook@mattkruse.com","Firefox","Firefox Browser Add-ons"],["d63d1fd3ea8a01224c4baf7c2ce65d59","Firefox","Firefox Browser Add-ons via Orion Browser"],["bhaooomeolkdacolgpkfbfookhomkbei","Edge","Microsoft Edge Add-ons"],["gbhlbkifncomjccjcdjokniojhnojmcn","Chrome (beta build)","Google Chrome Web Store (beta)"],["ifmhoabcaeehkljcfclfiieohkohdgbb","Chrome","Google Chrome Web Store"],["inficfabgpfjiegjgnhmjdagmhlmakoo","Opera","Opera addons"],["safari","Safari","Mac App Store"],["userscript","Userscript",v.userscript_agent],["default","Unknown",`${v.extension_id} from an unknown source`]].find(f=>{if(v.extension_id==f[0]||v.buildtype==f[0]||f[0]=="default")return v.extension_build_target=f[1],v.extension_store_name=f[2],f[1]=="Userscript"&&(v.extension_id=$e&&$e.script?$e.script.name:"Unknown"),!0}),v.buildstr=`${v.version} (${v.buildtype}, ${v.extension_store_name})`,v.is_sfx_element=f=>(f=X(f)[0])&&(/^sfx_/.test(f.id)||Array.from(f.classList).some(u=>/^sfx_/.test(u))),v.Ctrl=/Macintosh|Mac OS X/.test(v.user_agent)?"Command":"Ctrl",v.buildtype!=="userscript"&&typeof chrome<"u"&&chrome.runtime&&typeof chrome.runtime.sendMessage=="function"?v.ajax_cor=function(f,u){const l=function(o){const r={},c=o.xhr||{};if(o.type!="load")return u(o.type,c.status,r);c.responseHeaders&&c.responseHeaders.split(/\r?\n/).forEach(function(_){const m=_.split(/\s*:\s*/,2);r[m[0].toLowerCase()]=m[1]}),u(c.responseText,c.status,r)},O={method:f.method||"GET",timeout:f.timeout||5*X.seconds,url:f.url||f};if(!O.url)return alert("Invalid parameter passed to ajax_cor"),u(null);chrome.runtime.sendMessage({sfx:!0,call:"ajax_cor",request:O},l)}:v.ajax_cor=(f,u)=>u("no background script, use X.ajax()",f),v.fref=function(f,u){for(var l of Object.keys(f||{}))if(u.test(l))return f[l];return{}},v.frefargs=(...f)=>f.flat(1/0).map(u=>u instanceof RegExp?u:u.split(",").map(l=>new RegExp(l))).flat(1/0),v.frefpath=(f,...u)=>v.frefargs(u).reduce((l,O)=>v.fref(l,O),f),v.data_equals=function(f,u){return f===u?!0:f===null||u===null||typeof f!="object"||typeof u!="object"||Object.keys(f).length!=Object.keys(u).length?!1:Object.keys(f).every(l=>v.data_equals(f[l],u[l]))},v.pushy=(f,u)=>(u&&!f.includes(u)&&f.push(u),f),v.bound=(f,u,l,O)=>(typeof f=="string"&&/^\d/.test(f)&&(f=Number(f)),Number.isFinite(f)?f<u?u:f>l?l:f:O),v.port=f=>Object.assign(v,f),v.dbg={},v.pose=f=>Object.assign(v.dbg,f),v.pose({X,FX,SFX:v}),X.ready("xpose_dbg",function(){FX.on_option_live("xpose_dbg",function(f){if(!f)return;let u={X,FX,SFX:v,SFX_dbg:v.dbg},l=window.unsafeWindow||window.globalThis||window;console.log("Social Fixer debug data",u),Object.assign(l,u)})}),X.subscribe("sfx/debug",(f,u)=>FX.option("xpose_dbg",typeof u.on=="boolean"?u.on:!FX.option("xpose_dbg"))),X.ready("aargh_fb_gibberish",function(){v.gib={alinc_flst:{css:"align-content:flex-start"},alini_cent:{css:"align-items:center"},alini_fxnd:{css:"align-items:flex-end"},alini_stre:{css:"align-items:stretch"},alisl_cent:{css:"align-self:center"},bb_1pxdiv:{css:"border-bottom:1px solid var(--divider)"},bb_bt2:{css:"border-bottom:1px solid var(--secondary-button-background)"},bbcol_div:{css:"border-bottom-color:var(--divider)"},bb_dark:{css:"border-bottom-color:var(--always-dark-overlay)"},bbl_rad0:{css:"border-bottom-left-radius:0px"},bbl_rad10:{css:"border-bottom-left-radius:10px"},bbl_rad50:{css:"border-bottom-left-radius:50%"},bbl_radcrd:{css:"border-bottom-left-radius:var(--card-corner-radius)"},bg_accent:{css:"background-color:var(--accent)"},bg_bt2:{css:"background-color:var(--secondary-button-background)"},bg_card:{css:"background-color:var(--card-background)"},bg_cbg:{css:"background-color:var(--comment-background)"},bg_hilit:{css:"background-color:var(--highlight-bg)"},bg_surf:{css:"background-color:var(--surface-background)"},bg_trans:{css:"background-color:transparent"},bot_0:{css:"bottom:0px"},bt_divid:{css:"border-top:1px solid var(--divider)"},btl_rad0:{css:"border-top-left-radius:0px"},bxs_bbox:{css:"box-sizing:border-box"},ch1_none:{css:"display:none",pseudo:":first-child"},col_acc:{css:"color:var(--accent)"},col_bt1:{css:"color:var(--primary-button-text)"},col_btdis:{css:"color:var(--disabled-button-text)"},col_tx1:{css:"color:var(--primary-text)"},col_tx1med:{css:"color:var(--primary-text-on-media)"},col_tx2:{css:"color:var(--secondary-text)"},curs_def:{css:"cursor:default"},curs_not:{css:"cursor:not-allowed"},disp_blok:{css:"display:block"},disp_cont:{css:"display:contents"},disp_flex:{css:"display:flex"},disp_infl:{css:"display:inline-flex"},disp_inlb:{css:"display:inline-block"},disp_inl:{css:"display:inline"},disp_none:{css:"display:none"},empty_none:{css:"display:none",pseudo:":empty"},en_nozi:{css:"z-index:unset",prefix:"\\.GIB:not\\(\\[disabled]\\) +"},fcs_col_ph:{css:"color:var(--placeholder-text)",pseudo:":focus"},ffam_def:{css:"font-family:var(--font-family-default)"},fhd_wide:{css:"max-width:none",media:"max-width:1920px"},flbs_100:{css:"flex-basis:100%"},flbs_inh:{css:"flex-basis:inherit"},fldr_col:{css:"flex-direction:column"},fldr_row:{css:"flex-direction:row"},fldr_rrow:{css:"flex-direction:row-reverse"},flex_0px:{css:"flex-basis:0px"},flex_shr1:{css:"flex-shrink:1"},flex_wrap:{css:"flex-wrap:wrap"},flgr_1:{css:"flex-grow:1"},flsh_0:{css:"flex-shrink:0"},flwr_no:{css:"flex-wrap:nowrap"},font_400:{css:"font-weight:400"},font_600:{css:"font-weight:600"},font_700:{css:"font-weight:700"},font_bold:{css:"font-weight:bold"},hei_100:{css:"height:100%"},hei_100_hh:{css:"height:calc(100vh\\s*-\\s*var(--header-height))"},hei_1:{css:"height:1px"},hei_inh:{css:"height:inherit"},just_cent:{css:"justify-content:center"},just_flst:{css:"justify-content:flex-start"},just_spbt:{css:"justify-content:space-between"},left_0:{css:"left:0px"},list_none:{css:"list-style:none"},mb_0:{css:"margin-bottom:0px"},mb_6:{css:"margin-bottom:6px"},mr_auto:{css:"margin-right:auto"},mw_100:{css:"max-width:100%"},oflx_hid:{css:"overflow-x:hidden"},opac_0:{css:"opacity:0"},opac_1:{css:"opacity:1"},oscrx_cont:{css:"overscroll-behavior-x:contain"},oscry_cont:{css:"overscroll-behavior-y:contain"},outl_none:{css:"outline:none"},ovfa_n:{css:"overflow-anchor:none"},ow_bw:{css:"overflow-wrap:break-word"},padb_12:{css:"padding-bottom:12px"},padl_16:{css:"padding-left:16px"},padt_16:{css:"padding-top:16px"},pos_abs:{css:"position:absolute"},pos_fix:{css:"position:fixed"},pos_rel:{css:"position:relative"},pos_stk:{css:"position:sticky"},ryt_0:{css:"right:0px"},snap_st:{css:"scroll-snap-align:start"},top_0:{css:"top:0px"},top_hdrh:{css:"top:var(--header-height)"},touch_man:{css:"touch-action:manipulation"},trans_n:{css:"transform:none",pseudo:":active"},ttf_eei:{css:"transition-timing-function:var(--fds-animation-enter-exit-in)"},txal_cent:{css:"text-align:center"},txal_left:{css:"text-align:left"},txtr_lower:{css:"text-transform:lowercase"},va_bot:{css:"vertical-align:bottom"},va_mid:{css:"vertical-align:middle"},vis_vis:{css:"visibility:visible"},wid_100:{css:"width:100%"},wid_1:{css:"width:1px"},wid_fit:{css:"width:fit-content"},wid_panel:{css:"width:var(--global-panel-width)"},wsp_pre:{css:"white-space:pre-wrap"},zi_0:{css:"z-index:0"},zi_1:{css:"z-index:1"},zi_2:{css:"z-index:2"}};const f=X.logger("fb_gibberish");v.gib_make_regexes=function(){f("make_regexes start"),Object.values(v.gib).forEach(function(o){let r=o.prefix?o.prefix.replace(/GIB/g,"[a-z0-9]{6,8}"):"",c=o.pseudo||"",_=o.css.replace(/:/,": *").replace(/\(/g,"\\(").replace(/\)/g,"\\)"),m=o.media?"\\.([a-z0-9]{6,8})\\.\\1":"\\.([a-z0-9]{6,8})";o.re=new RegExp(`^${r}${m}${c} *{ *${_}[ ;]*}`),o.media_re=o.media?new RegExp(o.media.replace(/:/g,": *")):/^$/}),f("make_regexes end")},v.gib_find_rule=function(o,r,c){if(o.media_re.test(r)&&o.re.test(c)){let _=RegExp.$1;if(o.gib&&o.gib!=_){let m=X("."+_).length+1,S=o.count||X("."+o.gib).length;o.gib=m>S?_:o.gib,o.count=Math.max(m,S)}else o.gib=_}};const u=o=>o.replace(/^.*\/|\?.*$/g,"");v.gib_find_all=function(o=v.gib){f(`find_all start (n = ${Object.keys(o).length})`);for(let r=0;r<document.styleSheets.length;++r){const c=document.styleSheets[r];try{for(const _ of c.cssRules){let m=_ instanceof CSSMediaRule?Array.from(_.media).join(","):"",S=_ instanceof CSSMediaRule?Array.from(_.cssRules).map(b=>b.cssText).join(" "):_.cssText;Object.values(o).forEach(b=>v.gib_find_rule(b,m,S))}if(c.disabled&&c.ownerNode){const _=c.ownerNode.getAttribute("sfx_name");_&&f(`find_all stylesheet #${r} '${_}' ok`)}}catch(_){const m=c.href?` '${u(c.href)}'`:"";f(`find_all stylesheet #${r}${m} failed: ${_.toString()}`)}}f("find_all end")},v.gib_find_one=o=>v.gib_find_all([o]),v.gib_stylesheet_count=0,v.gib_stylesheet_filenames=[],v.gib_retrieve_stylesheet=o=>{const r=u(o);return v.gib_stylesheet_filenames.includes(r)?Promise.resolve(!0):(v.gib_stylesheet_filenames.push(r),f(`retrieve_stylesheet '${r}'`),new Promise(c=>{X.ajax(o,_=>{let m=`sfx_gib_stylesheet_${v.gib_stylesheet_count++}`;X.css(_,m),X.when(`#${m}`,function(S){S.attr("sfx_name",r);for(const b of document.styleSheets)b.ownerNode&&b.ownerNode.id==m&&(b.disabled=!0,f(`stylesheet '${r}' successfully retrieved`));c(!0)})})}))},v.gib_retrieve_stylesheets=function(){const o=[];for(const r of document.styleSheets)try{r.cssRules[0]}catch{r.href&&o.push(v.gib_retrieve_stylesheet(r.href))}return Promise.all(o)},v.gib_styles_fixed=!1,v.gib_fix_styles=function(){v.gib_styles_fixed||(v.gib_styles_fixed=!0,X("head style[id^=sfx_]").forEach(o=>{ocss=o.textContent,ncss=v.gib_convert(ocss),ncss!=ocss&&(o.textContent=ncss)}))};let l="",O=.5;v.gib_verify=function(){let o=Object.keys(v.gib).length,r=Object.values(v.gib).reduce((_,m)=>_+!!m.gib,0),c=Object.values(v.gib).reduce((_,m)=>_+!!document.querySelector(`.${m.gib}`),0);X.support_note("fb_gibberish",`gibs to find: ${o}; found: ${r}; inuse: ${c}${l}`),f(`verify ${o}:${r}:${c}${l}`),O<10&&(r<o/3||c<o/10)?(setTimeout(()=>v.gib_retrieve_stylesheets().then(()=>{r<o&&v.gib_find_all(),v.gib_verify()}),O*X.seconds),O*=2):v.gib_fix_styles(),l=` (retry, previously ${o}:${r}:${c})`},v.gib_make_regexes(),v.gib_retrieve_stylesheets().then(()=>{v.gib_find_all(),v.gib_verify()}),v.gib_missing=[],v.gib_replace=function(o,r,c,_){if(r in v.gib&&v.gib[r].gib)return v.gib[r].gib;if(r in v.gib){if(f(`replace retrying '${r}'`),v.gib_retrieve_stylesheets(),v.gib_find_one(v.gib[r]),v.gib[r].gib)return v.gib_verify(),f(`replace succeeded '${r}'`),v.gib[r].gib;f(`replace failed '${r}'`),v.gib[r].gib=o}return v.gib_missing[r]||(v.gib_missing[r]={}),v.gib_missing[r][_]=(v.gib_missing[r][_]||0)+1,o},v.gib_convert=o=>o.replace(/S2F_([a-z0-9_]*)/g,v.gib_replace)}),FX.add_option("run_on_apps",{title:"Run On Apps and Games Pages",description:"Run Social Fixer on apps and games pages from apps.facebook.com.",default:!0}),X.beforeReady(function(f){if(/apps.facebook.com/.test(location.href))return f?FX.option("run_on_apps"):!1});var bubble_note_anon_count=0;const Ne=function(f,u){u=u||{},u.position=u.position||"top_right",typeof u.close!="boolean"&&(u.close=!1),typeof u.draggable!="boolean"&&(u.draggable=!0),u.id&&X(`[id=${u.id}]`).remove();const l='id="'+(u.id||`sfx_bubble_note_${++bubble_note_anon_count}`)+'"',O=u.style?` style="${u.style}"`:"",o=` class="sfx_bubble_note sfx_bubble_note_${u.position}`+(u.no_esc?" sfx_bubble_note_no_esc":"")+(u.className?` ${u.className}`:"")+'"',r=X(`<div ${l}${O}${o}>`+(u.close?'<div class="sfx_sticky_note_close"></div>':"")+(u.title?`<div class="sfx_bubble_note_title">${u.title}</div>`:""));return r.append(typeof f=="string"?`<div class="sfx_bubble_note_content">${f}</div>`:f),r.find(".sfx_sticky_note_close, .sfx_button_close").click(function(){typeof u.callback=="function"&&u.callback(r),r.remove()}),FX.on_content_loaded(function(){X(document.body).append(r),u.draggable&&(r.children().attr("draggable","false"),X.draggable(r[0]))}),r};X.subscribe("esc/pressed",()=>{const f=X(".sfx_bubble_note:not(.sfx_bubble_note_no_esc)");f.length&&(X.publish("esc/prevent"),f.remove())});const Ze=function(f,u,l){l=l||{},X.storage.get("messages",{},function(O){if(typeof O[f]>"u")return u+=FX.oneLineLtrim(`
                <div style="margin:15px 0 15px 0;"><input type="checkbox" class="sfx_dont_show" checked> Don't show this message again</div>
                <div><input type="button" class="sfx_button sfx_button_close" value="OK, Got It"></div>
            `),l.close=!0,l.id="sfx_content_message_"+f,l.title=`<div class="sfx_info_icon">i</div>${l.title}`,l.style="padding-left:35px;",l.callback=function(o){o.find(".sfx_dont_show").prop("checked")&&X.storage.set("messages",f,X.now(),function(){})},Ne(u,l)},!0)};X.ready("comment_button",function(){var f="Fix Enter In Comments, Replies & Chat";FX.add_option("comment_button",{title:f,order:1,description:"Use Enter to add a new line instead of submitting comments & replies.",default:!1,live:l}),FX.add_option("comment_button_msgs",{title:f,order:2,description:"Use Enter to add a new line instead of submitting chat / messages.",default:!1,live:l}),FX.add_option("comment_button_ctrl",{title:f,order:3,description:"Use Ctrl+Enter to submit comments, replies & chat / messages.",default:!1,live:l}),FX.add_option("comment_button_emergency",{title:f,order:4,description:"Use alternate method (no Submit buttons; Ctrl+Enter submits).",default:!1,live:l}),FX.add_option("comment_button_hint",{hidden:!0,default:!0});var u=!1;function l(){u=!1}FX.on_options_load(function(){var O=!1,o=0,r=function(G,ne,ae){var M=o;setTimeout(function(){if(!(o>M)){u=!0,$();var F=FX.option("comment_button_emergency")?"disable all 'Fix Enter' options":"enable the 'Use alternate method' option",w=FX.option("comment_button_emergency")?`For now, 'Enter' submits and 'Shift+Enter' makes new lines
(Facebook's normal behavior)`:`Enter will add new lines, Ctrl+Enter will submit,
but there will be no visible comment/reply Submit button`;setTimeout(function(){alert(`Message from Social Fixer: it looks like 'Fix Enter' is failing.

Please ${F}, and watch
the Support group, socialfixer.com/support, for announcements.

No need to report it, you won't be the first.

${w}.`.replace(/\n/g,` 
`))}),X.support_note("comment_button","failing")}},250),O=!0,ne[0].dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,charCode:0,code:"Enter",key:"Enter",keyCode:13,shiftKey:ae,which:13})),O=!1,G.preventDefault(),G.stopPropagation()};const c=[".S2F_outl_none.S2F_disp_flex"].join(","),_=["[id*=placeholder]","[aria-describedby*=placeholder]",".S2F_font_400.S2F_fcs_col_ph",".S2F_pos_abs.S2F_col_tx2"].join(","),m=["[role=button][aria-label].S2F_bg_bt2.S2F_bbl_rad50"].join(","),S=function(G){const ne=G.closest(c);return ne.find(_).length!=0&&ne.find(m).length==0},b=[".S2F_pos_abs ~ * .S2F_col_tx1"].join(","),R=["[role=dialog] form *"].join(","),j=["[role=presentation] *"].join(","),N=["[sfx_post] [role=presentation] *","[role=complementary] [role=presentation] *"].join(","),h=function(G){return G.is(R)&&!G.is(j)?"birthday":G.is(N)?"comment":G.is(b)&&Object.values(G.css(["word-wrap","word-break"])).includes("break-word")?"message":/events\/birthdays/.test(location.pathname)?"birthday":""};v.pose({input_field_source:h});const E=function(G,ne){const ae=X(`[sfx_comment_id="${G}"]`);(ne||S(ae))&&(ae.unbind("focusout",P[G].remove_callback),ae.removeAttr("sfx_comment_id"),X(`[id="sfx_comment_button_${G}"]`).remove(),delete P[G])},$=function(){Object.keys(P).forEach(G=>E(G,!0))};var P={};v.pose({comment_button_data:P,remove_all_comment_buttons:$});var V={comment_button_options:function(){X.publish("menu/options",{highlight_title:f})},comment_button_hint_off:function(){X.storage.set("options","comment_button_hint",!1),X(".sfx_comment_button_hint").remove()},dispatch_enter_event:r},W=0;X.capture(window,"keydown",function(G){if(u)return;if(O){o++;return}var ne=X.target(G,!0);if(!ne.is("[contenteditable=true][role=textbox]"))return;if(FX.option("comment_button_emergency")){G.keyCode==13&&r(G,ne,!G.ctrlKey);return}const ae=h(ne);if(!ae)return;var M=ne.attr("sfx_comment_id");if(!M){for(;X(`[sfx_comment_id="${W}"]`).length;)++W;M=W++,ne.attr("sfx_comment_id",M),P[M]={comment_type:ae,Xtarget:ne}}const F=P[M];if(F){if(["comment_button","comment_button_ctrl","comment_button_hint","comment_button_msgs"].forEach(function(g){var z=FX.option(g);F[g]!=z&&(F[g]=z)}),ae=="comment"||ae=="birthday"){var w=9900+2*M;ne[0].tabIndex=w;var x=ne.closest("form").parent();const g=ae=="birthday"?"Birthday Post":x.closest("[sfx_post] li").length?"Reply":"Comment";x.find("[id^=sfx_comment_button_]").length||setTimeout(()=>{if(!x.find("[id^=sfx_comment_button_]").length&&!S(ne)){var z=FX.oneLineLtrim(`
                <div id="sfx_comment_button_${M}" class="sfx_clearfix">
                  <input v-if="comment_button" class="sfx_comment_button" type="button" value="Submit ${g}" title="${F.comment_button_ctrl?"Click or press Ctrl+Enter to Submit":""}" style="cursor:pointer;" tabIndex="${9901+2*M}" @click="dispatch_enter_event($event, Xtarget, false)">
                  <span v-if="!comment_button && comment_button_hint" class="sfx_comment_button_msg sfx_comment_button_hint">
                    Social Fixer can prevent Enter from submitting comments & replies!<br>
                    <a class="sfx_link" style="color:inherit;" @click="comment_button_options">
                      'Fix Enter' Options
                    </a>
                    &nbsp;&nbsp;
                    <a class="sfx_link" style="color:inherit;" @click="comment_button_hint_off">
                      Don't show this
                    </a>
                  </span>
                </div>
              `);F.remove_callback=()=>setTimeout(()=>E(M),.2*X.seconds),x.bind("focusout",F.remove_callback),qe(x[0],z,F,V)}},.05*X.seconds)}else ae=="message"&&F.comment_button_msgs;G.keyCode!=13||ae!="message"&&!F.comment_button||ae=="message"&&!F.comment_button_msgs||r(G,F.Xtarget,!(F.comment_button_ctrl&&(G.ctrlKey||G.metaKey)))}})})}),X.ready("comment_navigator_nl",function(){const f="Comment Navigator";FX.add_option("navigator_order",{title:f,description:"Try to set comment order to (e.g. 'All' or 'New')",type:"text",default:""}),FX.add_option("navigator_watch",{title:f,description:"Follow Comment Navigator while expanding",default:!1}),FX.add_option("navigator_avoid",{title:f,description:"Words to avoid clicking",type:"text",default:"\\bhide\\b"}),FX.add_option("navigator_close_wait",{hidden:!0,default:15}),X.publish("post/action/add",{section:"wrench",label:"Expand Comments",order:10,message:"post/action/expand"}),X.subscribe("post/action/expand",(w,x)=>F(x.id));const u=["[role=button][aria-expanded=false] > .S2F_font_400","[role=button][id] > .S2F_font_400"].join(","),l=["[role=button].S2F_disp_inl .S2F_alini_cent.S2F_va_mid"].join(","),O=["[role=button]"].join(","),o=["[role=menu] [role=menuitem] .S2F_col_tx1"].join(","),r=["[role=article]"].join(","),c=["[dir=auto] .S2F_col_tx1.S2F_font_600.S2F_touch_man[role=button]:not(.S2F_alini_stre)",":not(.S2F_left_0)+[role=button].S2F_col_tx2 > span > [dir]"].join(","),_=["h2 *","h3 *","h4 *","h5 *","strong *"].join(","),m=[".S2F_bg_bt2.S2F_bbl_rad50[role=button]"].join(","),S=["[aria-label][role=button]"].join(",");var b=1;const R={};v.pose({expand_comments_data:R});const j=function(w){w.state!="FINISH"&&(w.state="FINISH",w.$note.remove(),w.$post.click(),delete R[w.serial])},N=function(){Object.values(R).forEach(w=>{X.publish("esc/prevent"),w.state=="EXPAND"?(P(w,"TIMER","red"),$(w,"ESC pressed, stopping comment expansion")):j(w)})};X.subscribe("esc/pressed",N);const h=function(w,x){!x||!x.$post||x.$post[0].getRootNode()!=document||Object.values(R).forEach(g=>{if(g.$post.attr("sfx_id")==x.sfx_id){if(g.popup_seen){var z=x.$post.find(m);z.length||(z=x.$post.find(S)),z.length?($(g,"Closing excess popup"),z.first().click()):($(g,"CANNOT FIND CLOSE BOX of excess popup"),$(g,"You will have to close it manually"));return}g.popup_seen=!0,g.popup_popped=!0,$(g,"Moving expansion to comments popup"),g.$orig_post=g.$post,g.$post=x.$post,g.dom_id=x.id,g.patience+=2,$(g,"Now expanding in the comments popup")}})};X.subscribe_backlog("post/add",h);const E=w=>((performance.now()-w.start)/X.seconds).toFixed(3),$=function(w,x){x=x.replace(/[ ><\s]+/g," "),w.$log.scrollingAppend(`<br><span style="color:${w.color}">${E(w)} ${x}</span>`),X.publish("log/postdata",{id:w.dom_id,message:x})},P=function(w,x,g){x&&(w.state=x),g&&(w.color=g),w.comments=w.$post.find(r).length;const z=`${E(w)}s, ${w.clicks} clicks, ${w.comments} comments -- ${w.state}`;return w.$stats.text(z).css("color",w.color),z},V=function(w,x,g){const z=x.innerText,C=X(x);return FX.option("navigator_avoid")&&RegExp(FX.option("navigator_avoid"),"i").test(z)?(C.hasClass("sfx_click_avoided")||(C.addClass("sfx_click_avoided"),$(w,`Avoiding '${z}' as directed`)),!1):(!g&&z&&(g=`Clicking '${z}'`),$(w,g),C.click(),++w.clicks,P(w),!0)},W=function(w){const x=X(FX.oneLineLtrim(`
            <label>
                <h2 style="position:absolute;top:calc(2.1rem * var(--sfx_ui_scale));right:calc(0.5rem * var(--sfx_ui_scale))">
                    Close after&nbsp;
                    <input class="sfx_input" type="number" min="0" value="${FX.option("navigator_close_wait")}" style="width: calc(1.75rem * var(--sfx_ui_scale));" sfx-option="navigator_close_wait">
                    s
                </h2>
            </label>
            <label>
                <h2 style="position:absolute;top:calc(2.8rem * var(--sfx_ui_scale));right:calc(0.7rem * var(--sfx_ui_scale));">
                    Follow expansion
                    <input class="sfx_input" type="checkbox" value="${FX.option("navigator_watch")}" sfx-option="navigator_watch">
                </h2>
            </label>
            <div class='sfx_expander_stats'></div>
            <div class='sfx_expander_ui'></div>
        `)),g=`Social Fixer: Expanding post ${w.dom_id}`;w.$note=Ne(x,{title:g,position:"top_right",no_esc:!0,close:!0,callback:function(){j(w)}}),w.$note.find(".sfx_sticky_note_close").css({width:"auto",height:"auto"}).addClass("sfx_button").text("ESC to stop"),FX.attach_options(w.$note),w.$log=w.$note.find(".sfx_expander_ui"),w.$stats=w.$note.find(".sfx_expander_stats"),$(w,`Begin expanding post ${w.dom_id}`),P(w)},G=async function(w,x,g,z){var C;do{if(w.state!="EXPAND")return-1;if(C=g())return C;await X.sleep(.2),x-=.201}while(x>0);return!(C=g())&&z?($(w,z),-1):C},ne=async function(w){const x=w.$post.find(u);!w.comments&&x.length?(V(w,x[0],`Clicking '${x[0].innerText}' to expose post comments`),w.patience=1):$(w,"Comments are already visible")},ae=async function(w){const x=w.patience+.1,g=FX.option("navigator_order").trim();if(!g)return $(w,"No specific comment order is requested");const z=new RegExp(g,"i");var C=[];if(w.patience=0,await G(w,x,()=>(C=w.$post.find(l).closest(O)).length,"No comment order menu found")!=-1){if(C[0].innerText.match(z)){$(w,`Order '${C[0].innerText}' already matches '${g}'`);return}if(V(w,C[0],`Clicking order menu (currently '${C[0].innerText}')`)){var D=X([]);if(await G(w,.5,()=>(D=X(o)).length)!=-1){var U=!1;D.each(function(){const ee=this.innerText;if(ee.match(z)){if(V(w,this,`Menu item '${ee}' matches '${g}', clicking`))return U=!0,w.patience=2,!1}else $(w,`Menu item '${ee}' does not match '${g}', skipping`);return!0}),U||V(w,C[0],"Clicking order menu to put it away")}}}},M=async function(w){var x=1,g=0,z=!0;const C=[],D=5;for(var U,ee=[];z&&w.state=="EXPAND"&&!w.popup_popped;){var _e=w.patience;if(w.patience=0,z=0,await G(w,x+_e,function(){return _e=0,U=w.$post.find(c).not(_),U.length==0&&g>2?-1:U.length==ee.length&&U.toArray().every((ue,Ae)=>ue==ee[Ae])?0:(ee=U,U.length)})==-1)break;++g,P(w),$(w,`Cycle ${g+w.saved_cycles}, expanding: ${U.length} (${w.comments} comments visible)`);for(const ue of U.toArray())if(w.state=="EXPAND"&&ue.getRootNode()==document&&V(w,ue,"")){if(++z,X(ue).addClass("sfx_clicked"),FX.option("navigator_watch")&&ue.scrollIntoView(!1),w.popup_popped)return $(w,"Popup popped up, restarting expansion"),g;await X.sleep(.1)}P(w),C[g]=w.comments+z,C[g-1]==C[g]&&(x=Math.min(x+.5,8)),C[g-D]==C[g]&&(P(w,"FB STALL","red"),$(w,`cycle ${g}, no activity in ${D} cycles, stopping`),w.color="green",$(w,"(you can use Expand Comments again to keep trying)"))}return g},F=async function(w){var x={dom_id:w,start:performance.now(),$post:X("#"+w),state:"EXPAND",serial:b,patience:0,clicks:0,comments:0,color:"black",saved_cycles:0};R[b++]=x,W(x);do x.popup_popped=!1,await ne(x),await ae(x),x.saved_cycles+=await M(x);while(x.popup_popped);x.state=="EXPAND"&&$(x,P(x,"DONE","green")),x.$note.find(".sfx_sticky_note_close").text("ESC to close"),$(x,`ESC to close, or auto-close in ${FX.option("navigator_close_wait")} seconds`),x.$post.find(".sfx_clicked").removeClass("sfx_clicked"),x.$orig_post&&x.$orig_post.find(".sfx_clicked").removeClass("sfx_clicked"),FX.option("navigator_watch")&&(x.$post[0].scrollIntoView(!0),setTimeout(()=>window.scrollBy(0,-150))),X.sleep(FX.option("navigator_close_wait")||.5).then(function(){x.$note.probe(":hover,:active,:focus").length?(P(x,"WAIT","red"),$(x,"Wait for user interaction -- ESC to close")):j(x)})}}),X.ready("control_panel",function(){FX.add_option("control_panel_x",{hidden:!0,default:0}),FX.add_option("control_panel_y",{hidden:!0,default:50}),FX.add_option("control_panel_right",{hidden:!0,default:!1}),FX.add_option("control_panel_bottom",{hidden:!0,default:!1}),FX.add_option("reset_control_panel_position",{title:" Control Panel",section:"Advanced",description:"Reset the position of the Control Panel to the upper left",type:"action",action_text:"Find Control Panel",action_message:"cp/reset_position"});var f,u,l=!1;v.cp_selector=`[id=sfx_control_panel].${v.instance}`;var O,o=function(){X(v.cp_selector).remove(),O={sections:[]},f=!1,u=!1,v.pose({cp_sections:O.sections,cp_created:f,cp_displayed:u,cp_always:l})};o();const r=function(){l=!1,X.publish("cp/hide")};X.subscribe("cp/reset_position",function(){u?O.sections.length?(FX.option("control_panel_x",null,!1),FX.option("control_panel_y",null,!1),FX.option("control_panel_right",null,!1),FX.option("control_panel_bottom",null,!1),X.storage.save("options"),_(null,null,!1)):Ne(FX.oneLineLtrim(`
                    No posts have yet been filtered to a Social Fixer tab.<br>
                    The Control Panel will appear if a post is filtered.<br><br>
                    The following options turn on the CP permanently:<br><br>
                    - General > Mark All Read / Undo<br>
                    - Advanced > Always Show Tab List
                `),{title:"No posts filtered yet",close:!0}):X.publish("cp/show")}),X.subscribe("cp/section/add",function(m,S){O.sections.some(b=>b.id==S.id)||(c(),S.order=S.order||999,O.sections.push(S))}),X.subscribe("cp/hide",()=>(u=!1,X(v.cp_selector).hide())),X.subscribe("cp/show",()=>(u=!0,X(v.cp_selector).show())),X.subscribe("cp/always_show",()=>(l=!0,X.publish("cp/show")));var c=function(){if(!(f||X.find(v.cp_selector))&&!(/\/memories\//.test(location.href)||/\/messages\//.test(location.href))){f=!0;var m=FX.oneLineLtrim(`<div id="sfx_control_panel" class="${v.instance}" style="display:none">
                <div class="sfx_cp_header" v-tooltip="{icon:false,content:'The Social Fixer Control Panel (CP) may contain filter tabs and controls such as Mark All Read &amp; Undo. Click X to disable associated features and hide it. Drag to move.',delay:750}"><span @click="close_cp" class='sfx_cp_close_button'>X</span>SFX Control Panel</div>
                <div class="sfx_cp_data">
                    <div class="sfx_cp_section" v-for="section in sections | orderBy 'order'">
                        <div class="sfx_cp_section_label" v-tooltip="{content:section.help,position:'right',delay:300}">{{{section.name}}}</div>
                        <div class="sfx_cp_section_content" id="{{section.id}}"></div>
                    </div>
                </div>
            </div>
            `),S={close_cp:r};qe(document.body,m,O,S).ready(function(){_(null,null,!1),X.draggable(v.cp_selector,function(b,R,j){_(R,j,!0)})}),l&&X.publish("cp/show")}},_=function(m,S,b){var R=X(v.cp_selector);if(R.length){var j=FX.option("control_panel_right"),N=FX.option("control_panel_bottom"),h=15,E=!1;(typeof m>"u"||m==null||typeof S>"u"||S==null)&&(m=+FX.option("control_panel_x"),S=+FX.option("control_panel_y"),E=!0);var $=R[0].offsetHeight,P=R[0].offsetWidth;m<1&&(m=1),E||(j=window.innerWidth&&m+P>window.innerWidth-h),S<40&&(S=40),E||(N=window.innerHeight&&S+$>window.innerHeight-h),j?R.css({right:0,left:""}):R.css({left:m,right:""}),N?R.css({bottom:0,top:""}):R.css({top:S,bottom:""}),b!==!1&&(FX.option("control_panel_x",m,!1),FX.option("control_panel_y",S,!1),FX.option("control_panel_right",j,!1),FX.option("control_panel_bottom",N,!1),X.storage.save("options"))}};X(window).resize(function(){_()}),X.subscribe_backlog("posts/reset",o)}),X.ready("debug_insertion_order",function(){FX.add_option("debug_show_insertion_order",{section:"Debug",title:"Show Insertion Order",description:"Highlight portions of posts that are lazily inserted after the post appears on the page.",default:!1}),FX.on_option("debug_show_insertion_order",function(){FX.on_content_inserted(function(f){var u=f.closest(".sfx_inserted").attr("sfx_step")||0;u++,f.attr("sfx_step",u),f.addClass("sfx_insert_step_"+u),f.addClass("sfx_inserted")})})}),X.ready("debug_post_html",function(){X.publish("post/action/add",{section:"wrench",label:"Show Post HTML",order:30,message:"post/action/post_html"}),X.subscribe("post/action/post_html",function(f,u){const l=X.htmlEncode(document.getElementById(u.id).outerHTML);var O=FX.oneLineLtrim(`
        <div draggable="false">Click in the box, press ${v.Ctrl}+a to select all, then ${v.Ctrl}+c to copy.</div>
        <div draggable="false">
            <textarea style="white-space:pre-wrap;width:500px;height:250px;overflow:auto;background-color:white;">${l}</textarea>
        </div>
        `);Ne(O,{position:"top_right",title:"Post Debug HTML",close:!0})})}),X.ready("debug_post_update_tracking",function(){FX.add_option("debug_post_update_tracking",{section:"Debug",title:"Track Post Updates",description:"Track how often a post receives DOM updates and display the timing",default:!1}),FX.on_option("debug_post_update_tracking",function(){X.subscribe_backlog("post/add",function(f,u){var l=performance.now();const O=u.$post;var o=O.innerText().length;O.attr("sfx_update_count","0"),O.attr("sfx_update_start",l),O.attr("sfx_update_size",o),O.attr("sfx_update_tracking","")})})}),X.ready("debugger",function(){var f=X.logger("debugger"),u=null,l=null,O=null,o=null,r=0;X.publish("menu/add",{section:"other",item:{html:"Debugger",message:"debugger/open"}}),X.subscribe("debugger/open",function(){f("Debugger opened"),_()});function c(j){return j.replace(/[^\w\d -.#():^~*$"=[\]|]/g,"")}FX.on_content_loaded(function(){var j=!1,N=null;if(/sfx_debugger_query=([^&]+)/.test(location.href)&&(N=decodeURIComponent(RegExp.$1),N=c(N),f("Debugger Query set through url: "+N),S(N),j=!0),/sfx_debugger_property=([^&]+)/.test(location.href)&&(N=decodeURIComponent(RegExp.$1),N=N.replace(/[^\w\d-]/g,""),f("Debugger Property set through url: "+N),b(N),j=!0),/sfx_debugger_delay=([^&]+)/.test(location.href)){var h=+decodeURIComponent(RegExp.$1);f("Debugger delay set through url: "+N),r=h}j&&setTimeout(function(){_(),R()},r)});var _=function(){m(),u.show()},m=function(){u||(u=X(FX.oneLineLtrim(`
      <div id="sfx_debugger">
        <div class="sfx_dialog_title_bar" style="margin:0;">
          <div class="sfx_debugger_button" id="sfx_debugger_close">X</div>
          Social Fixer Debugger
        </div>
        <div id="sfx_debugger_controls">
          <div>CSS Query: <input id="sfx_debugger_query" value=""></div>
          <div>Computed CSS Property: <input id="sfx_debugger_property" value=""></div>
          <div>
            <input type="button" class="sfx_button" value="Run" id="sfx_debugger_run">
            <span id="sfx_debugger_url"></span>
          </div>
        </div>
        <div id="sfx_debugger_results"></div>
      </div>
    `)),X("body").append(u),o=X("#sfx_debugger_results"),X("#sfx_debugger_run").click(function(){R()}),X("#sfx_debugger_close").click(function(){u.hide()}),X("#sfx_debugger_query").val(l).change(function(j){S(X.target(j).value)}),X("#sfx_debugger_property").val(O).change(function(j){b(X.target(j).value)}))},S=function(j){l=(j||"").trim()},b=function(j){O=(j||"").trim()},R=function(){o.html("");var j=null;if(!l)return o.html("No query");try{j=X.query(l)}catch(F){return o.html("Query error: "+F.message)}if(!j.length)return o.html("No results found");var N=location.href.replace(/&.*/,"");N+=/\?/.test(N)?"&":"?",N+="sfx_debugger_query="+encodeURIComponent(l),O&&(N+="&sfx_debugger_property="+encodeURIComponent(O)),X("#sfx_debugger_url").html(`<a href="${N}">${N}</a>`);var h=0,E=100,$,P,V=!1,W=null,G=null,ne=null,ae=function(F){var w=X('<div class="sfx_debugger_text_header"></div>');w.text(F);var x=X('<span class="sfx_debugger_action">Copy</span>');return x.on("click",function(g){return X(g.target.parentNode.nextSibling).select(!0),!1}),w.append(x),w};for($=0;$<j.length&&h<E;$++){if(V=!0,W=X('<div class="sfx_debugger_result sfx_clearfix">'),typeof j[$]=="string")++h<E&&(ne=X('<div class="sfx_debugger_content sfx_debugger_text_content">'),ne.text(j[$]),W.append(ae("[Text]")),W.append(ne),V=!1);else{var M=j[$];for(P=0;P<M.length;P++)++h<E&&(V=!1,G=X('<div class="sfx_debugger_subresult sfx_clearfix">'),ne=X('<div class="sfx_debugger_content sfx_debugger_node_content">'),ne.text(X(M[P]).tagHTML()),G.append(ae("[Node]")),G.append(ne),function(F){G.on("mouseover",function(){F.style.outline="3px solid blue"}),G.on("mouseout",function(){F.style.outline=""}),G.on("click",function(){u.hide(),F.scrollIntoView(!1),setTimeout(function(){F.style.outline="10px solid blue"},500),setTimeout(function(){F.style.outline=""},3e3)})}(M[P]),W.append(G))}V||o.append(W)}h>=E&&o.prepend(`<div class="sfx_debugger_warning">Result count exceeds limit. Showing the first ${E}.</div>`)}}),X.ready("disable_tooltips",function(){FX.add_option("disable_tooltips",{title:"Disable Tooltips",section:"Advanced",description:"If you are an Advanced user and no longer need to see the helpful tooltips that pop up when hovering over some things, you can entirely disable them here.",default:!1}),FX.on_options_load(function(){FX.option("disable_tooltips")&&Vue.directive("tooltip",function(){})})}),X.ready("display_tweaks",function(){FX.add_option("tweaks_enabled",{section:"Display Tweaks",hidden:!0,default:!0}),FX.on_options_load(function(){var f=FX.storage("tweaks");if(!(!f||!f.length||!FX.option("tweaks_enabled")))for(var u=0;u<f.length;u++)X.isObject(f[u])&&f[u].enabled&&!f[u].disabled&&X.css(f[u].css,"sfx_tweak_style_"+u)})}),X.ready("donate",function(){FX.add_option("sfx_option_show_donate2",{section:"Advanced",title:"Show Donate Message",description:"Show a reminder every so often to support Social Fixer development through donations.",default:!0}),FX.on_options_load(function(){X.storage.get("stats",{},function(f){f&&f.installed_on&&X.now()-f.installed_on>5*X.days&&X.userid!="anonymous"&&X.task("sfx_option_show_donate",30*X.days,function(){FX.option("sfx_option_show_donate2")&&X.when(v.badge_sel,function(){X.publish("menu/options",{section:"Donate",data:{sfx_option_show_donate:!0}})})})},!0)})}),X.ready("edit_buffer",function(){FX.add_option("edit_buffer",{section:"Experiments",title:"Find Edit",description:"Find unsaved post / comment / reply edits.",type:"action",action_message:"options/close,edit_buffer/find",action_text:"Find Edit In Progress"});const f=["[data-pagelet*=FeedUnit]","[role=feed]",'[id^="substream"]',"[sfx_post]"].join(","),u=["[contenteditable=true]","[role=region] [aria-label] ~ [role=button].S2F_bg_cbg .S2F_col_tx1"].join(","),l=["[contenteditable=false]"].join(",");var O=function(o){var r=X(o);r.parents(f).toArray().reverse().forEach(c=>c.scrollIntoView()),setTimeout(()=>window.scrollTo(0,r.offset().top-window.innerHeight/2),10)};X.subscribe("edit_buffer/find",function(){var o=-1;const r={},c="sfx_edit_buf_post_show sfx_show_read sfx_filter_hidden_show",_=function(V,W){if(V[0]){const G=V[0].id;W&&!r[G]?(r[G]=c.split(" ").filter(ne=>V.hasClass(ne)).join(" "),V.addClass(c)):W||(V.removeClass(c),G in r&&(V.addClass(r[G]),delete r[G]))}};var m=function(V,W){if(V==-1){X(".sfx_edit_buf_post_show").forEach(G=>_(X(G),!1));return}X(`#sfx_find_edit_dialog [_option_="${V}"]`).toggleClass("sfx_edit_buf_selected",W),_(X(j[V]).closest("[sfx_post]"),W)},S=function(V){var W=X(V.target).attr("_option_");m(o,!1),m(W,!0),O(j[W]),o=W},b=function(){$.leave_visible||m(-1,!1),X("#sfx_find_edit_dialog").remove()},R=function(V){var W=X(V).innerText();return W.length==0?"&middot;":W.length<80?X.htmlEncode(W):X.htmlEncode(W.slice(0,76))+"..."},j=X(u).filter(function(){return this.innerText.length>0&&this.innerText!=`
`&&!X(this).probe(l).length});v.pose({active_buffers:j});var N=j.length,h=N==0?"No edits in progress":N==1?"Click to show this edit":"Click to show one of these edits",E=FX.oneLineLtrim(`
            <div class="sfx_bubble_note sfx_bubble_note_top_right" draggable="true" id="sfx_find_edit_dialog">
                <div class="sfx_bubble_note_title">
                    Find Edit In Progress
                </div>
                <div>
                    ${h}
                </div>
                <br>
                <template v-for="db in dirty_buffers">
                    <template v-if="db.innerText">
                        <div @click="select_buf" draggable="false" _option_="{{$index}}" class="sfx_edit_buf_button">
                            {{{row_content(db)}}}
                        </div>
                        <br>
                    </template>
                </template>
                <span draggable="false">
                    <input type="button" class="sfx_button" value="Done" @click="close_dialog">
                </span>
                <label class="sfx_edit_buf_toggle" @click="leave_visible = !leave_visible"
                       title="Show editing post even if 'Read' / hidden / in other tab">
                    <input type="checkbox" class="sfx_button">
                    Leave post highlighted
                </label>
            </div>
        `),$={dirty_buffers:j,leave_visible:!1},P={row_content:R,select_buf:S,close_dialog:b};qe(document.body,E,$,P).ready(function(){X.draggable("#sfx_find_edit_dialog")})})}),window.addEventListener("keydown",f=>{f.keyCode==27&&(v.prevent_esc=!1,X.publish("esc/pressed"),v.prevent_esc&&(f.preventDefault(),f.stopPropagation()))},{capture:!0}),X.subscribe("esc/prevent",()=>v.prevent_esc=!0),X.ready("external_css",function(){FX.add_option("external_css_url",{section:"Advanced",type:"text",title:"External CSS url",description:"URL of external CSS to be included in the page.  NOTE: browser may require HTTPS, and that server presents MIME type text/css.",default:""}),FX.on_options_load(function(){var f=X.sanitize(FX.option("external_css_url"));f&&X.when("head",function(u){u.append(`<link id="sfx_external_css" rel="stylesheet" type="text/css" href="${f}">`)})})});const We=function(f,u,l){return l==l,!FX.dtsg&&f?(FX.dtsg=f,X.publish("fb_dtsg/ready",{fb_dtsg:f,technique:u,count:l}),!0):!1};FX.dtsg||setTimeout(function(){const u=[{how:"script:initd3",re:RegExp('DTSGInitData",.{0,150}async_get_token":'+'"([A-Z][-_a-z0-9A-Z]{11,65}:[\\d:]{11,19})"')}];Array.from(X("script")).find(l=>/dtsg/i.test(l.textContent)&&u.some(O=>l.textContent.match(O.re)&&We(RegExp.$1,O.how))),FX.dtsg||(X.subscribe("fb_dtsg/eject",(l,O)=>We(O.fb_dtsg,O.technique,O.count)),X.inject(function(){const l=function(m,S,b){return b==b,m?(window.postMessage({sfx:!0,pagecontext:!0,message:{event:"fb_dtsg/eject",data:{fb_dtsg:m,technique:S,count:b}}},"*"),!0):!1};var O=!1,o=!1;const r=window.clearInterval;var c=1;const _=function(){!o&&window.requireLazy&&(o=!0,window.requireLazy(["invariant","DTSGInitData"],function(m,S){S&&S.async_get_token&&(O=l(S.async_get_token,"requireLazy()",c))})),(O||++c>20)&&(r(_.interval),O||l("failed","All techniques"))};_.interval=setInterval(_,.5*1e3)}))},1e3),X.css("html { --sfx_ui_scale:1.2; }","sfx_body_font_css"),X.ready("font_family",function(){FX.add_option("font_family",{section:"General",title:"Font: Custom Font",description:"Set a custom font name using CSS syntax to override the default Facebook fonts. You may add multiple fonts, separated by comma.",type:"text",default:""}),FX.add_option("font_mult",{section:"General",title:"Font: Custom Size",description:"Set a custom text size multiplier from 0.5 to 2.5 (default 1.0).",type:"text",default:""}),FX.add_option("font_ui_mult",{section:"General",title:"Font: Social Fixer Size",description:"Set a custom font size multiplier for Social Fixer interface, from 0.5 to 2.5 (default 1.0).",type:"text",default:""});const f=function(){const u=(c,_)=>(Number(c)||0).toFixed(_||4).replace(/(.)\.?0*$/,"$1"),l=FX.option("font_family"),O=v.bound(FX.option("font_mult"),.5,2.5,1),o=v.bound(FX.option("font_ui_mult"),.5,2.5,1),r=[];if(l&&r.push(`body, body *, #facebook body, #facebook body._-kb { font-family:${l} !important; }`),O!=1){X.css("","sfx_body_font_css");const c=(getComputedStyle(document.documentElement)["font-size"]||"16px").replace(/px/,"");r.push(`html { font-size:${u(O*c)}px; }`)}r.push(`html { --sfx_ui_scale:${u(o*1.2)}; }`),X.css(r.join(`
`),"sfx_body_font_css")};FX.on_option_live(["font_family","font_mult","font_ui_mult"],f)}),X.ready("friend_manager",function(){FX.add_option("friend_tracker",{title:"Friend Manager",description:"Enable Friend Manager (Friends List Tracker)",default:!0}),FX.add_option("friend_tracker_alert_unfriend",{hidden:!0,default:!0}),FX.add_option("friend_tracker_alert_unfriend_count",{hidden:!0,default:3}),FX.add_option("friend_tracker_alert_refriend",{hidden:!0,default:!0}),FX.add_option("friend_tracker_alert_name_change",{hidden:!0,default:!0}),FX.add_option("friend_tracker_update_frequency",{hidden:!0,default:1});var f=X.logger("friend_manager"),u=X.clone(FX.storage("friends")),l=[],O=FX.option("friend_custom_fields");X.subscribe("friends/options",function(R,j){var N=[{key:"alerts",name:"Alerts"},{key:"options",name:"Options"},{key:"list",name:"Friends List"},{key:"details",name:"Friend Details"},{key:"data",name:"Raw Data"}],h=FX.oneLineLtrim(`<div id="sfx_friend_dialog" class="sfx_dialog sfx-flex-column" style="transition: height .01s;">
	<div id="sfx_options_dialog_header" class="sfx_dialog_title_bar" style="cursor:move;" @click="collapse" v-tooltip="{content:'Click to window-shade, drag to move',position:'below'}">
		Friend Manager - Social Fixer ${v.version}
		<div id="sfx_options_dialog_actions" draggable="false" >
			<input draggable="false" type="button" class="sfx_button secondary" @click.stop="close" value="Close">
		</div>
	</div>
	<div id="sfx_options_dialog_body" class="sfx-flex-row" draggable="false">
		<div id="sfx_options_dialog_sections">
			<div v-for="section in sections" @click="select_section(section.key)" class="sfx_options_dialog_section {{selected_section==section.key?'selected':''}}">{{section.name}}</div>
		</div>
		<div id="sfx_options_dialog_content">
			<div class="sfx_options_dialog_content_section">
				<div v-show="selected_section=='options'" style="line-height:32px;">
					<div><sfx-checkbox key="friend_tracker_alert_unfriend"></sfx-checkbox> Track and alert when someone is not present on my Facebook Friends List</div>
					<div>Alert about absent friends after this many absences: <input class="sfx_input" type="number" min="1" max="99" v-model="uf_count" @change="update_uf_count()"/></div>
					<div><sfx-checkbox key="friend_tracker_alert_refriend"></sfx-checkbox> Track and alert when someone reappears on my Facebook Friends List</div>
					<div><sfx-checkbox key="friend_tracker_alert_name_change"></sfx-checkbox> Track and alert when a friend changes their name</div>
					<div>Check for Friends List changes after this many hours: <input class="sfx_input" type="number" min="1" max="999" v-model="frequency" @change="update_frequency()"/></div>
					<div>Update my Friends List and check for changes immediately: <input type="button" @click="check_now()" class="sfx_button" value="Check Now"></div>
				</div>
				<div v-show="selected_section=='alerts'" id="sfx_friend_alerts"></div>
				<div v-show="selected_section=='list'">
					<div v-if="!list_loaded">Loading...</div>
					<div v-if="list_loaded">
						<div style="margin-bottom:3px;">
                            <b>Filter: </b><input class="sfx_input" type="text" v-model="filter">
                            <br>
                            <span v-if="limit < 9999 && nfriends > nlimit">
                                <b>Page: </b>
                                <a @click.prevent="set_page(-1)" class="sfx_link">&lt;&lt;</a>
                                &nbsp;{{page+1}} of {{Math.trunc((nfriends + nlimit - 1) / nlimit)}}&nbsp;
                                <a @click.prevent="set_page(1)" class="sfx_link">&gt;&gt;</a>
                            </span>
                            <span v-else>
                                Showing all {{nfriends}} friends.
                            </span>
                            <b>&nbsp; Friends per page: </b>
                            &middot;&nbsp;
                            <template v-for="value in ['10','50','100','250','500','1000','all']">
                                <a @click.prevent="set_limit(value)" class="sfx_link" v-bind:class="{'sfx_button':(value==limit)}">{{value}}</a> &middot;&nbsp;
                            </template>
                        </div>
						<table class="sfx_data_table">
							<thead>
								<tr>
									<th>&nbsp;</th>
									<th class="sortable" @click="order('name')">Name</th>
									<th class="sortable" @click="order('first')">First</th>
									<th class="sortable" @click="order('last')">Last</th>
									<th class="sortable" @click="order('id')">ID</th>
									<th class="sortable" @click="order('tracker.status')">Status</th>
									<th v-for="field in custom_fields">{{field}}</th>
									<th class="sortable" @click="order('tracker.added_on')">Added</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="f in fm_friends | filterBy filter | orderBy orderkey sortorder | limitBy nlimit (page*nlimit)">
									<td @click="select_user(f.id)"><img src="{{f.photo}}" style="height:48px;width:48px;"></td>
									<td class="sfx_hover_link" style="font-weight:bold;" @click="select_user(f.id)">{{f.name}}</td>
									<td>{{f.first}}</td>
									<td>{{f.last}}</td>
									<td><a href="https://www.facebook.com/{{f.id}}">{{f.id}}</a></td>
									<td>{{f.tracker.status}}</td>
									<td v-for="field in custom_fields">{{f.data[field]}}</td>
									<td>{{f.tracker.added_on | date}}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div v-show="selected_section=='details'">
					<div v-if="!selected_user">
						Click on a friend in the "List" section.
					</div>
					<div v-else>
						<a href="https://www.facebook.com/{{selected_user.id}}"><img src="{{selected_user.photo}}" style="float:left;margin-right:20px;"><span style="font-size:calc(0.72rem * var(--sfx_ui_scale));font-weight:bold;">{{selected_user.name}}</span></a>
						<br style="clear:both;">

						This section will be used for future functionality that will enhance your Friends List even more!

						<!--
						<b>Custom Fields</b> : Fields below are created by you and maintained in the Options tab. You can define any fields, and any value in those fields per user.
						<div v-for="field in custom_fields" style="margin:10px;border:1px solid #ccc;padding:10px;">
							<b>{{field}}</b>: <input v-model="selected_user.data[field]">
						</div>
						-->
					</div>
				</div>
				<div v-show="selected_section=='data'" style="white-space:pre;font-family:monospace;">{{fm_friends | json}}</div>
			</div>
		</div>
	</div>
</div>
`),E={sections:N,selected_section:"alerts",fm_friends:u,nfriends:Object.keys(u).length,list_loaded:!1,orderkey:"name",sortorder:1,filter:"",selected_user:null,custom_fields:X.clone(O),frequency:FX.option("friend_tracker_update_frequency"),uf_count:FX.option("friend_tracker_alert_unfriend_count"),limit:50,nlimit:50,page:0};j&&j.selected&&(E.selected_section=j.selected);var $={select_section:function(P){this.selected_section=P;var V=this;P=="list"&&setTimeout(function(){Vue.nextTick(function(){V.list_loaded=!0})},100)},select_user:function(P){this.selected_user=u[P],this.select_section("details")},order:function(P){this.sortorder=this.orderkey==P?-1*this.sortorder:1,this.orderkey=P},close:function(){X("#sfx_friend_dialog").remove()},check_now:function(){X.publish("friends/update")},update_frequency:function(){FX.option("friend_tracker_update_frequency",E.frequency,!0)},update_uf_count:function(){FX.option("friend_tracker_alert_unfriend_count",E.uf_count,!0)},set_limit:function(P){this.limit=P,this.nlimit=P=="all"?9999:Number(P),this.page=0},set_page:function(P){this.page+=P,this.page<0&&(this.page=0)},collapse:function(){X("#sfx_options_dialog_body").toggle()}};qe(document.body,h,E,$).ready(function(){X.draggable("#sfx_friend_dialog"),Vue.nextTick(function(){_(),b("just now",!0,"#sfx_friend_alerts","sfx_friend_changes_fm"),l.length==0&&$.select_section("list")})})});var o;X.subscribe_backlog("fb_dtsg/ready",(R,j)=>{o=j.fb_dtsg;var N="succeeded";o==="failed"&&(N="failed"),X.support_note("fb_dtsg",`${j.technique} ${N} after ${(performance.now()/X.seconds).toFixed(6)} seconds`)});const r=function(R){if(!o)return f("retrieve_friends 0: no fb_dtsg"),X.support_note("retrieve_friends:0",`fb_dtsg not found: [${o}]`),R(null);var j=FX.oneLineLtrim(`
            https://www.facebook.com/ajax/typeahead/first_degree.php
            ?viewer=${X.userid}
            &__user=${X.userid}
            &filter[0]=user
            &options[0]=friends_only
            &__a=1
            &lazy=0
            &t=${X.now()}
            &fb_dtsg_ag=${o}
        `);X.ajax(j,function(N){if(typeof N!="string")return console.log("retrieve_friends:1: unexpected content type:",typeof N,[{content:N}]),X.support_note("retrieve_friends:1",`unexpected content type '${typeof N}' (see browser console)`),R(null);try{var h=JSON.parse(N.replace(/^[^{}]*/,""));return!h||!h.payload||!h.payload.entries?(console.log("retrieve_friends:2: unexpected JSON content:",[{content:N,json:h}]),X.support_note("retrieve_friends:2","unexpected JSON content (see browser console)"),R(null)):R(h.payload.entries)}catch(E){return console.log("retrieve_friends:3: JSON.parse failed:",[{error:E,content:N,json:h}]),X.support_note("retrieve_friends:3",`JSON.parse failed: ${E} (see browser console)`),R(null)}})},c=function(R){var j=X.now(),N=0,h=0;r(function(E){if(E==null)return R(null);var $,P,V;for($ of E){if(P=$.uid,!Number(P)){X.support_note("update_friends:1","non-numeric UID in FB data");continue}V=u[P],(typeof V>"u"||typeof V.tracker>"u")&&(V={id:$.uid,name:$.text,first:$.firstname,last:$.lastname,photo:$.photo,tracker:{added_on:j,status:"friend",updated_on:j,acknowledged_on:null}},u[P]=V),$.text!=V.name&&(V.old_name=V.name,V.name=$.text,V.first=$.firstname,V.last=$.lastname,V.dirty=!0),V.photo!=$.photo&&(V.photo_dirty=!0,V.photo=$.photo),V.checked_on=j,V.tracker.missing_count=0}for(P in u){if(!Number(P)){X.support_note("update_friends:2","non-numeric UID in FT data"),delete u[P],X.storage.set("friends",P,void 0,null,!1);continue}$=u[P],(!$.id||!$.tracker)&&(++N,$.id=P,$.tracker=$.tracker||{added_on:j,status:"record missing",updated_on:j,acknowledged_on:null},$.dirty=!0);var W=$.tracker;W.added_on==j?$.dirty=!0:j==$.checked_on&&W.status!="friend"?(W.status="refriend",W.updated_on=j,W.acknowledged_on=null,$.dirty=!0):j!==$.checked_on&&(W.status=="friend"||W.status=="refriend")&&(W.missing_count=W.missing_count?W.missing_count+1:1,W.missing_count>=FX.option("friend_tracker_alert_unfriend_count")&&(W.status="unfriended",W.updated_on=j,W.acknowledged_on=null,W.blocked=null),$.dirty=!0),($.dirty||$.photo_dirty)&&($.dirty&&h++,delete $.dirty,delete $.photo_dirty,X.storage.set("friends",P,$,null,!1))}h&&X.storage.save("friends"),typeof R=="function"&&R({total:Object.keys(u).length,changes:h}),X.support_note("update_friends:3",`fr:${Object.keys(u).length} ls:${E.length} ch:${h} em:${N}`)})},_=function(){l.splice(0);for(var R in u){var j=X.clone(u[R]);if(!(!j||!j.tracker)){var N=j.tracker,h=N.updated_on,E=N.acknowledged_on;N.status=="unfriended"&&(!E||E<h)&&FX.option("friend_tracker_alert_unfriend")&&l.push({type:"unfriend",friend:j}),N.status=="refriend"&&FX.option("friend_tracker_alert_refriend")&&l.push({type:"refriend",friend:j}),j.old_name&&FX.option("friend_tracker_alert_name_change")&&l.push({type:"name_change",friend:j})}}},m=function(){X.publish("notify/set",{target:`.${v.instance} [id=sfx_friend_jewel_count]`,parent_target:v.badge_sel,count:l.length})},S=function(){_(),m()},b=function(R,j,N,h){try{X(`[id=${h}]`).remove();const E={fm_alerts:l,ago:R,show_header:j},$=function(G){const ne=u[G.friend.id];G.type=="unfriend"?ne.tracker.acknowledged_on=X.now():G.type=="refriend"?ne.tracker.status="friend":G.type=="name_change"&&(ne.old_names||(ne.old_names=[]),ne.old_names.push(ne.old_name),delete ne.old_name),X.storage.set("friends",ne.id,ne,null,!1)},P=function(){m(),X.storage.save("friends")},V={ok:function(G){$(G),E.fm_alerts.splice(E.fm_alerts.indexOf(G),1),P()},ok_all:function(){for(const G of E.fm_alerts)$(G);E.fm_alerts.splice(0),P()},settings:function(){X.publish("friends/options",{selected:"options"})}},W=FX.oneLineLtrim(`<div id="${h}">
    <div style="max-height:300px;overflow:auto;border-bottom:1px solid rgb(221,223,226);">
	<div v-if="show_header" style="padding:8px 12px 6px 12px;border-bottom:1px solid rgb(221,223,226);">
		<div style="float:right">
			<a @click.prevent="settings">Settings</a>
			<span v-if="fm_alerts.length" role="presentation"> &middot; </span>
			<a v-if="fm_alerts.length" @click.prevent="ok_all" style="font-weight:bold;">Okay All</a>
		</div>
		<div><span style="font-size:calc(0.6rem * var(--sfx_ui_scale));font-weight:bold;">Friend Changes</span> <span style="font-size:calc(0.55rem * var(--sfx_ui_scale));font-style:italic;">(via Social Fixer, updated {{ago}})</span></div>
	</div>
	<div v-for="a in fm_alerts | orderBy 'friend.tracker.updated_on' -1" style="padding:6px 12px;border-bottom:1px solid rgb(221,223,226);">
		<div style="float:right;height:50px;vertical-align:middle;line-height:50px;">
			<span @click="ok(a)" class="sfx_button light">Okay</span>
		</div>
		<img src="{{a.friend.photo}}" style="height:48px;margin-right:10px;display:inline-block;">
		<div style="display:inline-block;height:50px;overflow:hidden;">
			<template v-if="a.type=='name_change'">
				{{a.friend.old_name}}<br>
				is now known as<br>
				<a href="/{{a.friend.id}}" style="font-weight:bold;">{{a.friend.name}}</a><br>
			</template>
			<template v-if="a.type=='unfriend'">
				<a href="/{{a.friend.id}}" style="font-weight:bold;">{{a.friend.name}}</a><br>
				no longer appears on your Facebook Friends List. <span v-show="a.friend.removed" style="color:red;text-decoration:underline;cursor:help;" v-tooltip="This account is not available. This person has either disabled or removed their account, blocked you, or this is a result of a Facebook glitch (which is not uncommon). If they are still your friend but their profile is temporarily unavailable, they will appear as re-friended when it returns.">Account Not Found!</span><br>
				<i>{{a.friend.tracker.updated_on | ago}}</i>
			</template>
			<template v-if="a.type=='refriend'">
				<a href="/{{a.friend.id}}" style="font-weight:bold;">{{a.friend.name}}</a><br>
				is now on your Facebook Friends List again! <br>
				<i>{{a.friend.tracker.updated_on | ago}}</i>
			</template>
		</div>
	</div>
	<div v-if="fm_alerts.length==0" style="line-height:50px;vertical-align:middle;color:rgb(117,117,117);background-color:rgb(246,247,249);text-align:center;">
		No changes
	</div>
    </div>
</div>
`);qe(N,W,E,V)}catch(E){alert(E)}};FX.on_options_load(function(){FX.option("friend_tracker")&&(X.publish("menu/add",{section:"options",item:{html:'<span class="count" id="sfx_friend_jewel_count"></span>Friend Manager',message:"friends/options",tooltip:"Track changes to your Facebook friends list"}}),X.task("friend_update",FX.option("friend_tracker_update_frequency")*X.hours,function(){f("Time to check for Friends List changes"),X.subscribe_backlog("fb_dtsg/ready",function(){c(S)})},S),X.subscribe("friends/update",function(){c(function(R){R===null?alert("Error retrieving or updating friends list"):(S(),alert(`Update Complete.
${R.total} friends and ${R.changes} changes.`))})}))})}),X.ready("hide",function(){FX.add_option("hide_parts_of_page",{section:"General",title:"Hide Things",description:'Under the Wrench menu you will find an item to "Hide/Show Parts of the Page". Use this to hide or show different parts of the page that Social Fixer knows how to process. You can also access this functionality using the button to the right.',type:"action",action_message:"options/close,hide/on",action_text:"Hide Things"}),FX.add_option("hide_parts_of_page_custom",{section:"Debug",title:"Custom Hideables",description:"Define a custom JSON structure to be used instead of the server-side JSON for hideables.",type:"textarea",default:""}),FX.add_option("hide_parts_custom_merge",{section:"Debug",title:"Merge Custom & Standard Hideables",description:"Use both the server-side and custom hideables JSON.",default:!0}),FX.on_options_load(function(){var f={html:"Hide/Show Parts of the Page",message:"hide/on",tooltip:"Select which parts of the page you want to hide so they never show up."};X.publish("menu/add",{section:"actions",item:f});var u=FX.storage("hiddens");!X.isObject(u)&&!X.isArray(u)&&(u={});var l=function(m){var S=X(m.selector);return S.length&&m.parent?S.nearby(m.parent):S};const O="html:not(.sfx_hide_show_all) ";var o,r,c=function(){var m=[];o=[],r=[];for(var S in u){var b=u[S];b.parent?(o.push(b),r.push(b.selector)):b.selector.split(",").forEach(R=>R.length&&m.push(`${O}${R} /* sfx_hider_${b.id} */`))}m.length>0&&X.css(`${m.join(`,
`)} { display:none !important; }`,"sfx_hideables"),r=r.join(",")};c(),FX.on_content(function(m){X(r,m).length&&o.forEach(function(S){X(S.selector,m).nearby(S.parent).addClass(`sfx_hide_hidden sfx_hider_${S.id}`)})});const _=function(){const m=X("#sfx_hide_show_ui");m.length&&(X.publish("hide/off"),X.publish("esc/prevent"),m.remove())};X.subscribe("esc/pressed",_),X.subscribe("hide/on",function(){var m=X(FX.oneLineLtrim(`
                    <div class="sfx_hide_bubble">
                        <span id="sfx_hide_bubble_TL" style="position:absolute; top:0; left:5px; font-size:calc(0.75rem * var(--sfx_ui_scale));" data-hover="hider-tooltip" data-hider-title="Move to top left" data-hider-delay="650">&#x25E4;</span>
                        <span id="sfx_hide_bubble_TR" style="position:absolute; top:0; right:5px; font-size:calc(0.75rem * var(--sfx_ui_scale));" data-hover="hider-tooltip" data-hider-title="Move to top right" data-hider-delay="650">&#x25E5;</span>
                        <span id="sfx_hide_bubble_BL" style="position:absolute; bottom:0; left:5px; font-size:calc(0.75rem * var(--sfx_ui_scale));" data-hover="hider-tooltip" data-hider-title="Move to bottom left" data-hider-delay="650">&#x25E3;</span>
                        <span id="sfx_hide_bubble_BR" style="position:absolute; bottom:0; right:5px; font-size:calc(0.75rem * var(--sfx_ui_scale));" data-hover="hider-tooltip" data-hider-title="Move to bottom right" data-hider-delay="650">&#x25E2;</span>
                        <div class="sfx_hide_bubble_instructions">Mouse over <span style="background-color:#CFC">green shaded</span> areas to see their names; click to hide them.  (Shaded area may be offset from the item it will hide.)</div>
                        <div class="sfx_hide_bubble_instructions">To unhide items, click <span class="mark_read_markit sfx_hide_checkmark">&nbsp;&nbsp;&nbsp;</span><b>Show Hidden Items</b>, then click <span style="background-color:#FCC">red shaded</span> areas.</div>
                        <div class="sfx_hide_bubble_instructions">We update Social Fixer with new hideable areas as Facebook changes. To report new items, post a screenshot (with <span class="mark_read_markit sfx_hide_checkmark">&nbsp;&nbsp;&nbsp;</span><b>Show Hidden Items)</b> onto the <a href="https://SocialFixer.com/support/" target="_blank">Support Group</a>. We need to see <b><i>where</i></b> on the page.</div>
                        <span><input type="button" class="sfx_button sfx_button_done" style="margin:4px" value="Done Hiding"></span>
                        <span style="float:right">
                            <label data-hover="hider-tooltip" data-hider-title="So you can unhide them" data-hider-delay="1000"><input type="checkbox" class="sfx_button sfx_button_show">Show Hidden Items</label>
                            <br><label data-hover="hider-tooltip" data-hider-title="Shrink this box" data-hider-delay="1000"><input type="checkbox" class="sfx_button sfx_button_inst">Hide Instructions</label>
                        </span>
                    </div>
                `)),S=Ne(m,{position:"top_right",style:"min-height:0",title:"Hide/Show Parts of the Page",id:"sfx_hide_show_ui",no_esc:!0});S.find(".sfx_button_done").click(_),S.find(".sfx_button_show").click(function(){X("html").toggleClass("sfx_hide_show_all")}),S.find(".sfx_button_inst").click(function(){S.find(".sfx_hide_bubble_instructions,.sfx_bubble_note_title").toggle()}),S.find("#sfx_hide_bubble_TL").click(function(){S.css({top:0,bottom:"auto",left:0,right:"auto"})}),S.find("#sfx_hide_bubble_TR").click(function(){S.css({top:0,bottom:"auto",left:"auto",right:0})}),S.find("#sfx_hide_bubble_BL").click(function(){S.css({top:"auto",bottom:0,left:0,right:"auto"})}),S.find("#sfx_hide_bubble_BR").click(function(){S.css({top:"auto",bottom:0,left:"auto",right:0})});var b=function($){return`Click to ${!!u[h[$].id]?"Unhide":"Hide"}:

'${X.sanitize(h[$].name)}'`},R=function($,P){if(P){var V="https://matt-kruse.github.io/socialfixerdata/hideable.json";S.find(".sfx_bubble_note_title").append(FX.oneLineLtrim(`
                        <div style="color:red; outline: 2px solid red; margin: 2px; padding: 3px;">
                            Can't access Hide/Show data on:<br>
                            <a href="${V}">${V}</a><br>
                            Is it blocked by the browser, an extension, or your firewall?
                        </div>`))}!$||$.length==0||(X("html").addClass("sfx_hide_show_all"),$.forEach(function(W,G){l(W).forEach(ne=>{const ae=X(ne);ae.addClass("sfx_hide_show_overflow");var M=ne.getBoundingClientRect();ae.removeClass("sfx_hide_show_overflow");var F=M.height,w=M.width;if(!F||!w){W.hollow=!0;return}W.filled=!0,F=Math.max(F,20),w=Math.max(w,20);var x=ae.css("position")=="absolute"&&ae.parent().css("position")=="relative"?"position:relative;":"",g=`data-hover="hider-tooltip" data-hider-title="${b(G)}"`;F>500&&(g+=` data-tooltip-position="${M.left>200?"left":"right"}";`);var z="sfx_hide_frame"+(u[W.id]?" sfx_hide_frame_hidden sfx_hide_hidden":""),C=Math.min(F,window.innerHeight)/1.5,D=`width:${w}px;height:${F}px;font-size:${C}px;line-height:${F}px;display:${ae.css("display")};${x}`,U=X(`<span ${g} class="${z}" style="${D}" sfx_hider_id="${W.id}">X</span>`);U.click(function(ee){ee.preventDefault(),ee.stopPropagation();var _e=!u[W.id];l(W).toggleClass("sfx_hide_hidden",_e),_e?u[W.id]=W:delete u[W.id],X(`[sfx_hider_id="${W.id}"]`).toggleClass("sfx_hide_frame_hidden sfx_hide_hidden",_e).attr("data-hider-title",b(G)),c()}),ae.before(U)})}),X("html").removeClass("sfx_hide_show_all"),X.support_note("Hide/Show old layout hideables",$.filter(W=>W.filled&&W.id<1e4).map(W=>W.id).join(", ")),X.support_note("Hide/Show hollow hideables",$.filter(W=>W.hollow&&!W.filled).map(W=>W.id).join(", ")))},j=FX.option("hide_parts_of_page_custom"),N=FX.option("hide_parts_custom_merge"),h=[];if(j)try{var E=JSON.parse(j);if(E&&E.hideables&&E.hideables.length&&(h=E.hideables,!N))return R(h,!1)}catch($){alert("ERROR Parsing custom JSON: "+$.toString())}et(["hideable","hideables","hiddens"],u,function($){var P=!0;(Object.values($)||[]).forEach(function(V){if(X.isObject(V)){P=!1;var W=!1;h.forEach(function(G){G.id==V.id&&(W=!0)}),W||h.push(V)}}),v.pose({hiddens:u,hideables:h,resolve_hideable:l}),R(h,P)})}),X.subscribe("hide/off",function(){X("html").removeClass("sfx_hide_show_all"),X(".sfx_hide_frame").remove(),X.storage.save("hiddens",u,function(){c()})}),X.task("update_hider_subscriptions",4*X.hours,function(){et(["hideable","hideables","hiddens"],u,function(m,S){S&&c()})})})}),X.ready("logging",function(){var f=X.logger("logging",{color:"#666"}),u=null,l=null,O=0,o=null;X.publish("menu/add",{section:"other",item:{html:"View Log",message:"log/view"}}),X.subscribe("log/view",function(){f("View Log Clicked in Menu"),r()}),X.subscribe("log/entry",function(){u&&m(!0)}),FX.on_content_loaded(function(){if(/sfx_log_filter=([^&]+)/.test(location.href)){var R=RegExp.$1.replace(/[^\w\d -.]/g,"");f("Log Viewer Filter set through url: "+R),_(R)}/sfx_log=true/.test(location.href)&&(f("Log viewer launched via url"),r())});var r=function(){c(),m(!1),u.show()},c=function(){u||(u=X(FX.oneLineLtrim(`
      <div id="sfx_log_viewer">
        <div class="sfx_dialog_title_bar" style="margin:0;">
          <div class="sfx_log_button" id="sfx_log_close" title="Close">X</div>
          Social Fixer Console
        </div>
        <div id="sfx_log_controls">
          Filter: <input id="sfx_log_filter" value="${o?o.source:""}">
        </div>
        <div id="sfx_log_viewer_entries"></div>
      </div>
    `)),X("body").append(u),l=X("#sfx_log_viewer_entries"),X("#sfx_log_close").click(function(){u.hide()}),X("#sfx_log_filter").keyup(function(R){_(X.target(R).value),m(!1)}))},_=function(R){R=(R||"").trim(),R?o=new RegExp(R,"i"):o=null},m=function(R){var j=X.logs,N=[];for(R||(O=0,l.html(""));O<j.length;O++){var h=j[O];h.html||(h.html=b(h)),(!o||o.test(h.module)||o.test(h.html))&&N.push(h.html)}l.append(N.join(""))},S=function(R){return R.toString().replace(/^(\d)$/,"0$1")},b=function(R){var j=R.log.join(","),N=new Date(R.timestamp),h=`${N.getHours()}:${S(N.getMinutes())}:${S(N.getSeconds())} ${(R.uptime/X.seconds).toFixed(4)}`,E=R.color?`color:${R.color};`:"";return`<div class="sfx_log_entry" style="${E}">${h} ${R.module?"["+R.module+"]":""} ${j}</div>`}}),X.beforeReady(function(){const f=["body[class*=LoggedOut]","form#login_form",'form[data-testid*=login][action*="/login/"]',"input[name=login_source]","button[name=login][data-testid*=login]","button[id*=login][data-testid*=login]"].join(",");FX.isNonLoginPage=X(f).length<2,X.publish("login_page/ready")}),X.ready("mark_read",function(){FX.add_option("post_actions",{title:"Post Actions",description:"Add actions to individual posts to Mark them as 'Read', etc.",default:!0}),FX.add_option("show_mark_all_read",{title:"Mark All Read/Undo",description:"Add a Mark All Read button and Undo button to the control panel to Mark all visible posts as 'Read' or undo Marking posts as 'Read'.",default:!1}),FX.add_option("mark_all_read_next",{section:"Advanced",title:"Mark All Read - Next",description:"When Mark All Read is clicked and filter tabs are visible, automatically jump to the next tab with unread stories.",default:!0}),FX.add_option("clear_cache",{title:'Clear "Mark Read" Story Data',section:"Advanced",description:"Clear all cached data about posts' 'Read' status. This will un-Mark all 'Read' posts!",type:"action",action_text:"Clear Data Now",action_message:"cache/clear"}),FX.add_option("clean_cache_frequency",{title:'"Mark Read" Cache Cleaning Frequency',section:"Advanced",description:"Clean the cache of old story data every how many hours?",type:"number",default:24}),FX.add_option("clean_cache_age",{title:'"Mark Read" Cache Cleaning Age',section:"Advanced",description:"When cleaning cached story data, clean post data that is this many days old.",type:"number",default:28}),FX.add_option("hide_mark_read_groups",{title:"Mark Read",description:"Hide posts Marked as 'Read' when viewing Groups.",default:!0}),FX.add_option("hide_mark_read_pages",{title:"Mark Read",description:"Hide posts Marked as 'Read' when viewing a Page or Timeline.",default:!0}),FX.add_option("mark_read_display_message",{title:"Mark Read",description:"Show a note in place of posts hidden because they were Marked as 'Read'.",default:!0}),FX.add_option("mark_read_style",{section:"Advanced",title:"Mark Read Style",description:"CSS style to be applied to posts that are Marked as 'Read'.",type:"text",default:"outline:2px dashed red;",live:f=>X.css(`.sfx_post_read > :not(.sfx_read_note) { ${f} }`,"sfx_mark_read_css")}),function(){var f={};v.pose({postdata_log:f});var u=performance.now();const l=X.logger("postdata"),O=function(o,r){const c=performance.now();var _=f[o]?f[o][0]:c;(!f[o]||_<u)&&(_=c,f[o]=[_],O(o,`Post log starts at page time ${(_/X.seconds).toFixed(6)}`)),f[o].push(((c-_)/X.seconds).toFixed(6)+" "+r)};X.subscribe("log/postdata",function(o,r){const c=r.id||(r.$post?`sfx_post_${r.$post.attr("sfx_post")}`:null);c?O(c,r.message):l(`log from unknown post: '${r.message}'`)}),X.subscribe("log/postdata/get",function(o,r){typeof r.callback=="function"&&r.callback(f[r.id])}),X.subscribe_backlog("posts/reset",()=>u=performance.now())}(),X.subscribe("cache/clear",function(){X.storage.save("postdata",{},function(){alert("Social Fixer: the list of 'Read' posts has been cleared")})}),FX.on_options_load(function(){if(!FX.option("post_actions"))return;const f={html:"Show posts Marked as 'Read'",message:"post/toggle_read_posts",tooltip:"Make posts which are Marked as 'Read' temporarily visible."};X.publish("menu/add",{section:"actions",item:f});var u=!1;X.subscribe("post/toggle_read_posts",function(){u=!u,f.html=u?"Hide posts Marked as 'Read'":"Show posts Marked as 'Read'",X(".sfx_show_read").removeClass("sfx_show_read"),FX.option("mark_read_display_message")||X(".sfx_read_note").remove(),X("html").toggleClass("sfx_hide_read",!u),FX.reflow()}),X.subscribe_backlog("posts/reset",()=>X("html").addClass("sfx_hide_read"));var l=FX.storage("postdata")||{};v.pose({postdata:l});var O=_=>/^-?[1-9][0-9]*$|^pfbid0[1-9A-HJ-NP-Za-km-z]{20,75}l$/.test(_),o=_=>/^[0-9]+$/.test(_);X.task("clean_postdata_cache",FX.option("clean_cache_frequency")*X.hours,function(){var _,m=0;if(l){for(_ in l){var S=l[_],b=S.read_on,R=X.now()-b,j=0;R>FX.option("clean_cache_age")*X.days&&(j=1),O(_)||(j=1),o(S.read_on)||(j=1),S.last_updated&&(delete l[_].last_updated,m++),j&&(delete l[_],m++)}m>0&&X.storage.save("postdata",l)}});var r=function(_){return typeof l[_]>"u"&&(l[_]={}),l[_]},c=!1;FX.on_content_loaded(function(){var _={id:null,sfx_id:"no-ID",$post:null,show:"mark",filters_enabled:FX.option("filters_enabled"),wrench_items:[],filter_items:[]},m={mark_unmark:function(x){var g={sfx_id:_.sfx_id};g.dir=x.shiftKey?"above":x.ctrlKey||x.altKey||x.metaKey?"below":"post",X.publish("post/mark_unmark",g)},action_menu_click:function(x){var g,z={id:_.id,sfx_id:_.sfx_id};if(x.data)for(g in x.data)z[g]=x.data[g];X.publish(x.message,z)}},S=FX.oneLineLtrim(`
            <div id="sfx_post_action_tray_container" class="${v.instance}" sfx_pai="pai_counter">
                <div id="sfx_post_action_tray">
                    <div v-if="show == 'mark'"   @click="mark_unmark($event)" class="mark_read_markit" v-tooltip="Social Fixer: Mark this post as 'Read', so it doesn't appear in your feed anymore. Shift+Click Marks as 'Read' all posts above here; ${v.Ctrl}+Click Marks here and below"></div>
                    <div v-if="show == 'temp'"   @click="mark_unmark($event)" class="mark_read_nomark" v-tooltip="Social Fixer: Temporarily hide this post (it may return on reload, as its Facebook post ID was not found)"></div>
                    <div v-if="show == 'unmark'" @click="mark_unmark($event)" class="mark_read_unmark" v-tooltip="Social Fixer: Un-Mark this post as 'Read', so it may show up in your feed again">X</div>
                    <div v-if="show == 'utmark'" @click="mark_unmark($event)" class="mark_read_unmark" v-tooltip="Social Fixer: Unhide this temporarily hidden post">X</div>
                    <div v-if="wrench_items.length>0" id="sfx_mark_read_wrench" class="mark_read_wrench" v-tooltip="Social Fixer: Post Actions"></div>
                    <div v-if="filter_items.length>0" id="sfx_mark_read_filter" class="mark_read_filter" v-tooltip="Social Fixer: Filtering"></div>
                </div>
                <div v-if="wrench_items.length>0" id="sfx_post_wrench_menu" class="sfx_post_action_menu">
                    <div v-for="item in wrench_items | orderBy 'order'" @click="action_menu_click(item)">{{item.label}}</div>
                </div>
                <div v-if="filter_items.length>0" id="sfx_post_filter_menu" class="sfx_post_action_menu">
                    <div v-for="item in filter_items | orderBy 'order'" @click="action_menu_click(item)">{{item.label}}</div>
                </div>
            </div>
            `),b={posts_marked_read:[]},R=function(x,g){if(!x.hasClass("sfx_post_read")){if(FX.context.type=="groups"&&!FX.option("hide_mark_read_groups")||FX.context.type=="profile"&&!FX.option("hide_mark_read_pages"))return;const C=FX.option("mark_read_display_message"),D=!C&&x.is(".sfx_once");if(C||D){const U=v.filter_extract_field.author(x,{})||"<unknown>";var z="";FX.option("disable_tooltips")||(z=` title="This post may be hidden because it is Marked as 'Read'. Click to toggle visibility. (${D?"It is visible here because this page's address mentions it":"To remove these Read-post notes, see Options > General > Mark Read"})"`);const ee=X(FX.oneLineLtrim(`
                            <div class='sfx_read_note'${z}>
                                <span class='sfx_read_show'>Click to view 'Read' post by ${U}</span>
                                <span class='sfx_read_hide'>Click to hide 'Read' post by ${U}</span>
                            </div>
                        `));ee.click(function(){x.toggleClass("sfx_show_read"),D&&ee.remove()}),x.removeClass("sfx_once").prepend(ee)}x.addClass("sfx_post_read"),X.publish("post/hide_read",{id:x[0].id,$post:x,actor:g})}},j=function(x,g){const z=x.attr("sfx_id");O(z)?x.hasClass("sfx_post_read")||X(`[sfx_id="${x.attr("sfx_id")}"]`).forEach(C=>{R(X(C),g)}):R(x,g)},N=function(x,g){x.hasClass("sfx_post_read")&&(x.removeClass("sfx_post_read sfx_show_read"),x.find(".sfx_read_note").remove(),X.publish("post/unhide_read",{id:x[0].id,$post:x,actor:g}))},h=function(x,g){const z=x.attr("sfx_id");O(z)?x.hasClass("sfx_post_read")&&X(`[sfx_id="${x.attr("sfx_id")}"]`).forEach(C=>{N(X(C),g)}):N(x,g)};const E={post:"user click",all:"Mark All Read",above:"Mark All Read Above (Shift+Click)",below:`Mark All Read Below (${v.Ctrl}+Click)`,undo:"Undo"};X.subscribe(["post/mark_read","post/mark_unread"],function(x,g){const z=x=="post/mark_read",C=g.post||_.$post;if(z==C.hasClass("sfx_post_read"))return;const D=g.sfx_id,U=O(D);if(g.filter||(b.posts_marked_read=[C],b.mark=!z),U){var ee=r(D);z?(ee.read_on=X.now(),l[D]=ee):delete ee.read_on,X.storage.set("postdata",D,ee,null,g.save!==!1)}else z&&X.publish("log/postdata",{$post:C,message:`Marking [${C[0].id}] temporarily read`});E[g.actor||"post"]&&(g.actor=E[g.actor||"post"]),(z?j:h)(C,g.actor),G(C),FX.reflow()}),X.subscribe(["post/mark_all_read","post/mark_unmark"],function(x,g){typeof g.dir>"u"&&(g.dir="all");var z=g.post||_.$post,C=g.dir=="all"||!z||!z.hasClass("sfx_post_read");if(g.actor=g.dir,g.dir=="post"){const H=z.attr("sfx_id"),A=O(H),B=A&&l[H]&&l[H].read_on||!A&&z.hasClass("sfx_post_read");X.publish(B?"post/mark_unread":"post/mark_read",g);return}var D=0,U=0,ee=g.dir=="all"||g.dir=="above",_e=!1,ue=[],Ae=z?+z.attr("sfx_post"):null;z&&g.dir=="above"&&(window.getSelection().removeAllRanges(),setTimeout(function(){z[0].scrollIntoView()},.15*X.seconds)),X(v.selected_tab_selector).each(function(){var H=X(this),A=+H.attr("sfx_post");if(A==Ae&&(g.dir=="above"?(ee=!1,C||(_e=!0)):g.dir=="below"&&(ee=!0)),!ee&&!_e){U++;return}if(_e=!1,C!=H.hasClass("sfx_post_read")){ue.push(H);var B=C?"post/mark_read":"post/mark_unread",Y={sfx_id:H.attr("sfx_id"),save:!1,post:H,actor:g.actor};X.publish(B,Y),D++}}),D>0&&(X.storage.save("postdata"),b.posts_marked_read=ue,b.mark=!C,g.dir=="above"&&!u&&X.publish("filter/tab/scroll_to_top")),C&&U==0&&FX.option("mark_all_read_next")&&X.publish("filter/tab/next")}),X.subscribe("post/undo_mark_read",function(){if(b.posts_marked_read.length>0){var x=b.mark?"post/mark_read":"post/mark_unread";b.posts_marked_read.forEach(function(g){var z=g.attr("sfx_id");X.publish(x,{sfx_id:z,save:!1,post:g,actor:"undo"})}),X.storage.save("postdata"),b.posts_marked_read=[],FX.reflow()}else alert("Nothing to Undo!")});const $=[{name:"filter"},{name:"wrench"}],P=()=>$.forEach(x=>x.shown&&X(`.${v.instance} [id=sfx_post_${x.name}_menu]`).hide(x.shown=!1));v.pai_counter=0;const V=function(x){var g;return(g=x.find(`[id=sfx_post_action_tray_container].${v.instance}`)).length?g:(qe(document.body,S.replace(/pai_counter/,++v.pai_counter),_,m),X(`[id=sfx_post_action_tray_container].${v.instance}:not([sfx_pai="${v.pai_counter}"])`).remove(),$.forEach(function(z){X(`#sfx_mark_read_${z.name}`).click(function(C){C.stopPropagation(),P(),X(`.${v.instance} [id=sfx_post_${z.name}_menu]`).css("right",50-C.offsetX+"px").css("top",5+C.offsetY+"px").show(z.shown=!0)})}),X(`[id=sfx_post_action_tray_container].${v.instance}`))};X(window).click(P);var W=function(x){_.$post=x,_.id=x[0].id;const g=x.attr("sfx_id");_.sfx_id=g;const z=O(g),C=z&&l[g]&&l[g].read_on||!z&&x.hasClass("sfx_post_read");_.show=C&&z?"unmark":C?"utmark":z?"mark":"temp";const D=V(x);if(P(),FX.context.type=="marketplace")x.prepend(D);else{var U=x.children().filter(function(){return!v.is_sfx_element(this)});U.length||(U=x.children()),U.first().append(D)}};v.pose({move_action_tray_to_post:W});var G=function(x){(_.id==null||_.id==x[0].id)&&W(x)},ne=[],ae=!1;const M=/(?:fbid|permalink|multi_permalinks|posts|video|stories|marketplace\/item|view=permalink.*&id)[=/]([\d,]{6,})/,F=function(){const x=decodeURIComponent(window.location.href).match(M);ne=(x?x[1]:"").split(","),ae=/\/pfbid0/.test(window.location.pathname),v.pose({page_permalinks:ne,permalink_regex:M,detect_permalinks:F})};X.subscribe_backlog("posts/reset",F),X.subscribe("post/permalink",function(x,g){g.$post.hasClass("sfx_permalink_post")||(g.$post.addClass("sfx_permalink_post"),X.publish("log/postdata",{id:g.id,$post:g.$post,message:`Marked as permalink by ${g.actor}`}),ne.includes(g.sfx_id)||ne.push(g.sfx_id)),FX.context.permalink||(FX.context.permalink=!0,X.publish("context/changed"))}),X.subscribe_backlog("post/add",function(x,g){const z=g.$post,C=g.sfx_id;var D="sfx_mr_checked";if((ae||ne.includes(C))&&X.publish("post/permalink",{$post:z,id:"",sfx_id:C,actor:"mark_read"}),O(C)&&l[C]&&l[C].read_on){const U=z.hasClass("sfx_popup_post");X.publish("log/postdata",{$post:z,message:`Post ID=${C} was read on ${l[C].read_on}`}),(U||ae||ne.includes(C))&&(X.publish("log/postdata",{$post:z,message:U?"Post is in comment viewer popup":"Post named in permalink: make initially visible"}),D+=" sfx_once sfx_show_read"),j(z,"previous user action")}z.addClass(D),G(z),z.on("mouseenter",function(U){U.altKey||U.metaKey||U.sfx_event||_.$post[0]==z[0]||W(z)})});const w=function(){!c&&FX.option("show_mark_all_read")&&(X.publish("cp/always_show"),c=!0,X.publish("cp/section/add",{name:"Post Controller",order:10,id:"sfx_cp_post_controller",help:"Act on all visible posts at once"}),Vue.nextTick(function(){if(!X.find(`.${v.instance} [id=sfx_cp_post_controller]`)){c=!1;return}var x=FX.oneLineLtrim(`
                            <div class="sfx_cp_mark_all_read" style="text-align:center;">
                                <input type="button" class="sfx_button" value="Mark All Read" @click="mark_all_read">
                                <input type="button" class="sfx_button" v-bind:disabled="!undo.posts_marked_read" value="Undo ({{posts_marked_read.length}})" @click="undo_mark_read">
                            </div>`),g={mark_all_read:()=>X.publish("post/mark_all_read"),undo_mark_read:()=>X.publish("post/undo_mark_read")};qe(`.${v.instance} [id=sfx_cp_post_controller]`,x,b,g)}))};X.subscribe_backlog("posts/reset",()=>(c=!1,w())),w(),X.subscribe_backlog("post/action/add",function(x,g){g.section=="wrench"?_.wrench_items.push(g):g.section=="filter"&&_.filter_items.push(g)}),X.publish("post/action/add",{section:"wrench",label:"Post Data",order:40,message:"post/action/postdata"}),X.subscribe("post/action/postdata",function(x,g){var z=[];X.publish("log/postdata/get",{id:g.id,callback:function(U){z=U}}),z=z.slice(1).map(U=>X.htmlEncode(U)).join("<br>");const C=O(g.sfx_id)&&l[g.sfx_id]?JSON.stringify(l[g.sfx_id],null,3):"{}",D=FX.oneLineLtrim(`
                    <div>This popup shows what Social Fixer remembers about this post.</div>
                    <div class="sfx_bubble_note_data">Post ID: ${g.sfx_id}<br>DOM ID: ${g.id}</div>
                    <div>Data stored for this post:</div>
                    <div class="sfx_bubble_note_data">${C}</div>
                    <div>Processing Log:</div>
                    <div class="sfx_bubble_note_data">${z}</div>
                `);X("[id=sfx_post_data_bubble]").remove(),Ne(D,{position:"top_right",title:"Post Data",id:"sfx_post_data_bubble",close:!0})})})})}),FX.add_option("disabled",{hidden:!0,default:!1}),X.beforeReady(function(f){if(!f)return!1;if(typeof sfx_menu_style<"u"&&X.css(sfx_menu_style,"sfx_menu_style"),FX.option("disabled"))return v.buildstr+=" (DISABLED)",init_wrench(!0),X.when(v.badge_sel,u=>u.attr("sfx_notification_count","X")),FX.fire_content_loaded(),!1;typeof sfx_style<"u"&&X.css(sfx_style,"sfx_style")}),X.ready("menu",function(){init_wrench(!1)});var init_wrench=function(f){FX.add_option("badge_x",{hidden:!0,default:-64}),FX.add_option("badge_y",{hidden:!0,default:5}),FX.add_option("reset_wrench_position",{title:"  Wrench Menu",section:"Advanced",description:"If your wrench menu badge somehow gets positioned so you can't see it, click here to reset its position to the upper right corner.",type:"action",action_text:"Find Wrench Menu",action_message:"menu/reset_position"}),FX.add_option("news_alerts",{title:"Social Fixer News",section:"Advanced",description:"Check for official news or blog posts from the Social Fixer team so you don't miss out on updates, updated filters, important news, etc. (Estimated frequency is one post a week)",default:!0});var u={add:function(N,h){O.sections[N].items.push(h)},remove:function(N,h){for(var E=O.sections[N].items,$=0;$<E.length;$++){var P=E[$];h.message===P.message&&(E.splice($,1),$--)}},click:function(N){N&&X.publish(N)},toggle:function(){var N=X(v.badge_sel),h=N.find("[id=sfx_badge_menu]");if(h.css("display")=="none"){h.css("visibility","hidden"),h.show();var E=document.body.clientWidth||window.innerWidth,$=window.innerHeight,P=N[0].offsetLeft,V=N[0].offsetTop;P<=E/2?h.addClass("right").removeClass("left"):h.addClass("left").removeClass("right"),V<=$/2?h.addClass("down").removeClass("up"):h.addClass("up").removeClass("down"),h.css("visibility","")}else h.hide()},hide:function(){let N=X(`${v.badge_sel} [id=sfx_badge_menu]`);N[0].style.display!=="none"&&(X.publish("esc/prevent"),N.hide())}};const l=function(N){X.publish("notify/set",{target:`.${v.instance} [id=sfx_unread_blog_count]`,parent_target:v.badge_sel,count:N})};var O={sections:{options:{title:"Options",items:[],order:1},actions:{title:"Actions",items:[],order:2},links:{title:"Links",items:[],order:3},debug:{title:"Debug",items:[],order:4},other:{title:"Other",items:[],order:5}},tips:!FX.option("disable_tooltips")},o=FX.oneLineLtrim(`
		<div id="sfx_badge" class="${v.instance}" @click.stop="toggle" v-tooltip="{content:'Drag to move Social Fixer wrench menu badge - ${v.buildstr}',delay:1500}">
			<div id="sfx_badge_menu">
				<div id="sfx_badge_menu_wrap">
					<div v-for="section in sections | orderBy 'order'" class="sfx_menu_section" id="sfx_menu_section_{{$key}}">
						<div v-if="section.items.length" class="sfx_menu_section_title">{{section.title}}</div>
						<div v-for="item in section.items" id="{{item.id}}" class="sfx_menu_item" @click="click(item.message);" title="{{tips ? item.tooltip : ''}}">
							<a v-if="item.url" href="{{item.url}}" target="{{item.target}}" class="sfx_menu_item_content" style="display:block;">{{{item.html}}}</a>
							<div v-else class="sfx_menu_item_content">{{{item.html}}}</div>
						</div>
					</div>
				</div>
			</div>
			<div id="sfx_badge_logo"></div>
		</div>
	`),r=function(N){FX.on_options_load(function(){if(!FX.storage("stats").installed_on){const h=FX.option("badge_x")<0?"left":"right",E=h==="right"?"&larr; ":"",$=h==="left"?" &rarr;":"",P=rt(v.badge_sel,h,E+"Social Fixer is installed! Start here"+$);X.storage.set("stats","installed_on",X.now()),N[0].addEventListener("mouseover",()=>P.remove(),{once:!0})}})},c=!1,_=function(){if(!X.find("body")||!FX.isNonLoginPage)return null;var N=X("[id=sfx_badge]"),h=null;N.length&&(h=N.attr("sfx_buildstr")||"old"),qe("body",o,O,u).ready(function(){b("saved",null,!1),X.draggable(v.badge_sel,function($,P,V){b(P,V,!0)})});var E=X(v.badge_sel);return E.attr("sfx_buildstr",v.buildstr).attr("old_buildstr",h),r(E),c=!0,E},m=function(){!c&&m.tries-- >0&&(FX.isNonLoginPage&&_("check_badge"),setTimeout(m,m.cadence*X.seconds))};m.cadence=.5,m.tries=10/m.cadence,setTimeout(m,m.cadence*X.seconds),FX.on_content_loaded(()=>c||_());const S=X.logger("position_wrench"),b=function(N,h,E,$=!1){if(!X("#sfx_style").length)if($)S("sfx_style     ","missing, giving up"),X.support_note("position_badge","sfx_style was missing");else return S("sfx_style     ","not ready: retry"),setTimeout(()=>b(N,h,E,!0),.2*X.seconds);var P=X(v.badge_sel);if(!P.length&&(P=_(),!P)){S("make_badge()  ","didn't work"),X.support_note("position_badge","make_badge() didn't work");return}const V=document.body.clientWidth||window.innerWidth,W=window.innerHeight;S("document.body ",document.body.clientWidth,document.body.clientHeight),S("window.inner  ",window.innerWidth,window.innerHeight),S("window_size   ",V,W),N=="saved"&&(N=FX.option("badge_x"),h=FX.option("badge_y"),S("previous saved",N,h)),(!Number.isInteger(N)||!Number.isInteger(h))&&(N=FX.option_default("badge_x"),h=FX.option_default("badge_y")),S("integer check ",N,h),N=N<-V?0:N<0?N+V:N,h=h<-W?0:h<0?h+W:h,S("reconstituted ",N,h);const G=P.offset();S("badge_size    ",G.width,G.height),(G.width<5||G.width>100||G.height<5||G.height>100)&&(G.width=G.height=34,S("override size ",G.width,G.height)),N=Math.max(4,Math.min(N,V-G.width)),h=Math.max(4,Math.min(h,W-G.height)),S("kept on-screen",N,h),P.css({left:N,top:h}),E&&(N=N>V/2?N-V:N,h=h>W/2?h-W:h,S("values to save",N,h),FX.option("badge_x",N,!1),FX.option("badge_y",h,!1),X.storage.save("options"))};u.add("links",{id:"sfx_badge_menu_item_page",html:'<span id="sfx_unread_blog_count"></span>Social Fixer News/Blog',url:"https://www.facebook.com/socialfixer",message:"menu/news_clicked"}),u.add("links",{html:"Support Group",url:"https://socialfixer.com/support/"}),f?(u.add("options",{html:'Social Fixer is <span style="color:red;font-weight:bold;">Disabled</span>.<br>Click here to Enable.</span>',message:"menu/enable"}),u.add("other",{html:"Version "+v.buildstr,message:"menu/about_clicked"})):(u.add("options",{html:'Social Fixer Options <span style="font-size:calc(0.5rem * var(--sfx_ui_scale));color:#aaa;">(Ctrl+Shift+X)</span>',message:"menu/options"}),u.add("links",{html:"Donate To Support Development",url:"https://socialfixer.com/donate.html"}),u.add("other",{html:"Version "+v.buildstr,message:"menu/about_clicked"}),u.add("other",{html:"Disable Social Fixer",message:"menu/disable"}));const R=function(){return X.publish("menu/reset_position"),X.when(v.badge_sel,N=>N.click())};if(X(window).keyup(function(N){if(!(!N.ctrlKey||!N.shiftKey||N.key!="x"&&N.key!="X")){if(N.preventDefault(),N.stopPropagation(),f)return R();b("saved",null,!1),X.publish("menu/options")}}),X.subscribe("menu/disable",function(){confirm(`This will disable all Social Fixer functionality, but the wrench will still appear so you can re-enable.

The page will be automatically refreshed after disabling.

Are you sure you want to disable?`)&&X.storage.set("options","disabled",!0,function(){window.location.reload()})}),X.subscribe("menu/enable",function(){X.storage.set("options","disabled",!1,function(){window.location.reload()})}),X.subscribe_backlog("menu/add",function(N,h){u.add(h.section,h.item)}),X.subscribe("menu/remove",function(N,h){u.remove(h.section,h.item)}),X(window).click(u.hide),X.subscribe("esc/pressed",u.hide),window.addEventListener("resize",function(){b("saved",null,!0)}),X.subscribe("menu/reset_position",function(){var N;X.storage.set("options",{badge_x:N,badge_y:N},function(){b("saved",null,!0)})}),X.subscribe("menu/about_clicked",function(){X.publish("menu/options",{section:"About"})}),f){/sfx_options=true/.test(location.href)&&R();return}FX.on_options_load(function(){X.task("news_alerts",1*X.seconds,function(){FX.option("news_alerts")&&X.when(`.${v.instance} [id=sfx_badge_menu_item_page]`,function(N){var h=X.now();X.storage.get("stats",{},function(E){!E||!E.sfx_news_checked_on?X.storage.set("stats","sfx_news_checked_on",h,function(){}):X.ajax("https://matt-kruse.github.io/socialfixerdata/news.json",function($){if(!$||!$.news)return;var P=0,V=null,W=null;const G=N.find("a");if($.news.reverse().forEach(function(ae){ae.time>E.sfx_news_checked_on&&(W=G.attr("href"),G.attr("href",ae.href),V=ae.title,P++)}),l(P),P>0){var ne=X('<div style="text-align:right;font-size:calc(0.55rem * var(--sfx_ui_scale));color:#777;" class="sfx_link sfx_clear_notification_link">clear notification</div>');ne.click(function(){G.attr("href",W),j()}),N.before(ne)}P==1&&V&&N.find(".sfx_menu_item_content").append('<div class="sfx_news_title">'+X.sanitize(V)+"</div>")})})})})});var j=function(){X.storage.set("stats","sfx_news_checked_on",X.now(),function(){l(0),X(".sfx_news_title,.sfx_clear_notification_link").remove()})};X.subscribe("menu/news_clicked",function(){j()})};X.ready("message_links_to_messenger",function(){FX.add_option("messages_open_in_full_window",{title:"Open Messages In Full Tab",description:"Open Facebook chat conversations in their own full browser tabs instead of chat boxes at the bottom.",default:!1});var f=null;const u=function(l){if(!(/\/messages($|\/)/.test(window.location.href)||/(^|\.)messenger\.com$/.test(window.location.hostname))){var O=X.target(l,!0).closest('[role=button],[href*="/messages/t/"]').attr("href");O&&!/#$/.test(O)&&(window.open(O),l.stopPropagation(),l.preventDefault())}};FX.on_option_live("messages_open_in_full_window",function(l){f=X.uncapture(f,"click",u),l&&(f=X.capture(document.documentElement,"click",u))})}),X.ready("most_recent",function(){FX.add_option("auto_switch_to_recent_stories",{title:"Automatically Switch to Most Recent view of the main Newsfeed",description:"Facebook defaults to Top Posts. This option detects this view and automatically switches you to the chronological Most Recent view.",default:!1}),FX.add_option("auto_switch_hide_message",{section:"Advanced",title:"Hide Most Recent switch messages",description:"When automatically switched to the Most Recent news feed, hide the message that appears to inform you of the switch.",default:!1}),FX.add_option("redirect_home_links",{section:"Advanced",title:"Redirect Home Links",description:"Try to keep links to the Home Page in your current view - Most Recent or Top Posts.",default:!0});const f=(u=location.host)=>/(?:^|\.)facebook\.com$/.test(u)&&!/^(?:m|mbasic|apps)\./.test(u);FX.on_options_load(function(){FX.option("redirect_home_links")&&FX.on_content_loaded(function(){X.capture(document.body,"mousedown",function(u){if(u.button||u.altKey||u.ctrlKey||u.metaKey||u.shiftKey)return;var l=X.target(u,!0);l.is("a")||(l=l.closest("a"));const O=l.attr("href"),o=new URL(O,location);f(o.host)&&o.pathname=="/"&&O!="#"&&!o.search&&(l.closest('*[role="main"]').length?(u.preventDefault(),u.stopPropagation(),location="https://www.facebook.com/?sk=h_nor&sfx_switch=true"):FX.option("auto_switch_to_recent_stories")&&(u.preventDefault(),u.stopPropagation(),location="https://www.facebook.com/?sk=h_chr&sfx_switch=true"))})}),FX.on_content_loaded(function(){if(f()&&FX.option("auto_switch_to_recent_stories")){if(/[?&]sfx_switch=true/.test(location.search)&&/sk=h_chr/.test(location.search)){if(!FX.option("auto_switch_hide_message")){const u=FX.option("badge_x")<0?"left":"right",l=rt(v.badge_sel,u,"Auto-switched to Most Recent");setTimeout(function(){l.remove()},3*X.seconds)}return}if(/[?&](?:sfx_options=true|sk=)/.test(location.search)||location.pathname!="/")return;setTimeout(function(){X(document.body).css("opacity","1")},2*X.seconds),X(document.body).css("opacity",".2"),location.href="/?sk=h_chr&sfx_switch=true"}})})}),X.ready("notify",function(){X.subscribe("notify/set",(f,u)=>X.when(u.target,function(l){var O=l.attr("sfx_notification_count")||0,o=+("count"in u?u.count:O||0)+ +("increment"in u?u.increment:0);l.attr("sfx_notification_count",o),u.parent_target&&(O==0&&o>0&&X.publish("notify/increment",{target:u.parent_target}),O>0&&o==0&&X.publish("notify/decrement",{target:u.parent_target}))},200,100)),X.subscribe(["notify/increment","notify/decrement","notify/clear"],function(f,u){const l=u.parent_target,O=u.target;X.publish("notify/set",f==="notify/increment"?{parent_target:l,target:O,increment:1}:f==="notify/decrement"?{parent_target:l,target:O,increment:-1}:f==="notify/clear"?{parent_target:l,target:O,count:0}:{})})}),X.ready("options",function(){FX.add_option("show_filtering_tooltips",{hidden:!0,default:!0}),FX.on_options_load(function(){X.task("update_filter_subscriptions",4*X.hours,function(){et("filters",FX.storage("filters"))}),X.task("update_tweak_subscriptions",4*X.hours,function(){et("tweaks",FX.storage("tweaks"))});var f=[{name:"Search",description:"Options with a title or description matching your search text (at least 3 characters) will appear below."},{name:"General",description:""},{name:"Hide Posts",description:""},{name:"Filters",description:""},{name:"Display Tweaks",description:""},{name:"Advanced",description:""},{name:"Experiments",description:"These features are a work in progress, not fully functional, or possibly confusing to users."},{name:"Data",description:""},{name:"Support",url:"https://matt-kruse.github.io/socialfixerdata/support.html",property:"content_support"},{name:"Donate",url:"https://matt-kruse.github.io/socialfixerdata/donate.html",property:"content_donate"},{name:"About",url:"https://matt-kruse.github.io/socialfixerdata/about.html",property:"content_about"},{name:"Debug",className:"sfx_debug_tab",description:"These are debugging tools to help developers and those needing support. These are not normal features. Play with them if you wish, or visit them if asked to by the Support Team."}],u={action_button:null,show_action_buttons:!0,sections:f,filters:null,show_filtering_tooltips:FX.option("show_filtering_tooltips"),editing_meta:{},editing_filter:null,filter_subscriptions:null,tweak_subscriptions:null,tweaks:null,editing_tweak:null,show_advanced:!1,options:FX.options,user_options:"",user_options_message:null,storage_size:JSON.stringify(X.storage.data).length,supports_download_attribute:"download"in document.createElement("a"),content_about:"Loading...",content_donate:"Loading...",sfx_option_show_donate:!1,content_support:"Loading...",support_notes:null,searchtext:null};X.subscribe("menu/options",function(l,O){O||(O={});try{if(X("#sfx_options_dialog").length)return;f.forEach(function(h){var E=h.name;h.options=[],O.section?h.selected=O.section==E:h.selected=E=="General";for(var $ in FX.options){var P=FX.options[$];(E=="General"&&!P.section||E==P.section)&&(P.newValue=P.value=FX.option(P.key),h.options.push(P)),P.title&&P.title==O.highlight_title&&(P.highlighted=!0)}h.options=h.options.sort(function(V,W){var G=(V.title||"")+" "+(V.order||"")+" "+(V.description||""),ne=(W.title||"")+" "+(W.order||"")+" "+(W.description||"");return G<ne?-1:G>ne?1:0})});const R=Object.values(X.clone(X.storage.data.filters||[])).filter(h=>!!h);u.filters=R;const j=Object.values(X.clone(X.storage.data.tweaks||[])).filter(h=>!!h);u.tweaks=j,X.support_notes&&(u.support_notes=X.support_notes);var o=FX.oneLineLtrim(`<div id="sfx_options_dialog" class="sfx_dialog sfx-flex-column" style="transition: height .01s;">
	<div id="sfx_options_dialog_header" class="sfx_dialog_title_bar" style="cursor:move;" @click="collapse" v-tooltip="{content:'Click to window-shade, drag to move',position:'below'}">
		Social Fixer ${v.version}
		<div id="sfx_options_dialog_actions" v-if="show_action_buttons" draggable="false" >
			<input draggable="false" v-if="action_button=='done_editing_filter'" class="sfx_options_dialog_panel_button sfx_button" type="button" value="Done Editing Filter" @click.stop="close_filter">
			<input draggable="false" v-if="action_button=='done_editing_tweak'" class="sfx_options_dialog_panel_button sfx_button" type="button" value="Done Editing Tweak" @click.stop="close_tweak">
			<input draggable="false" v-if="!action_button" class="sfx_button" type="button" @click.stop="save" value="Save Changes">
			<input draggable="false" type="button" class="sfx_button secondary" @click.stop="cancel" value="Cancel">
		</div>
	</div>
	<div id="sfx_options_dialog_body" class="sfx-flex-row" draggable="false">
		<div id="sfx_options_dialog_sections">
			<template v-for="section in sections">
				<template v-if="section.name=='Search'">
					<div @click="select_section(section)" class="sfx_options_dialog_section {{section.selected?'selected':''}} {{section.className}}"><input class="sfx_input" style="width:90%;" placeholder="Search..." @keyup="search" v-model="searchtext"></div>
				</template>
				<template v-else>
					<div @click="select_section(section)" class="sfx_options_dialog_section {{section.selected?'selected':''}} {{section.className}}">{{section.name}}</div>
				</template>
			</template>
		</div>
		<div id="sfx_options_dialog_content">
			<div v-if="section.selected" v-for="section in sections" class="sfx_options_dialog_content_section">
				<template v-if="section.name=='Filters'">
					<div id="sfx_options_dialog_filters">
					    <div v-if="!editing_filter" class="sfx_options_dialog_filter_list">
					        <div class="">
					            <span class="sfx_button" style="float:right;background-color:green;" onclick="window.open('https://github.com/matt-kruse/SocialFixer/wiki/Post-Filtering#filter-list','SFX_FILTER_HELP','width=1024,height=600');"><b>[?]</b> Open Filter Help</span>
					            Post Filters let you hide posts, put them in tabs, or change their appearance based on their content. They execute in the order below for each post.
					            <br style="clear:both;">
					        </div>
					        <div class="sfx_option" style="margin:10px 10px;font-size:calc(0.7rem * var(--sfx_ui_scale));float:left;">
					            <input id="filters_enabled" type="checkbox" v-model="options.filters_enabled.newValue"/><label for="filters_enabled"></label> Post Filtering enabled
					        </div>
					        <div class="sfx_option" style="margin:10px 10px;font-size:calc(0.7rem * var(--sfx_ui_scale));float:left;">
					            <input id="filters_enabled_pages" type="checkbox" v-model="options.filters_enabled_pages.newValue"/><label for="filters_enabled_pages"></label> Filter on Pages/Timelines
					        </div>
					        <div class="sfx_option" style="margin:10px 10px;font-size:calc(0.7rem * var(--sfx_ui_scale));float:left;">
					            <input id="filters_enabled_groups" type="checkbox" v-model="options.filters_enabled_groups.newValue"/><label for="filters_enabled_groups"></label> Filter in Groups
					        </div>
					        <div class="sfx_options_dialog_panel_header" style="clear:both;">Active Filters</div>
					        <div>
					            <input type="button" class="sfx_button" value="Create A New Filter" @click="add_filter">
					        </div>
					        <table class="sfx_options_dialog_table">
					            <thead>
					            <tr>
					                <th>#</th>
					                <th>Title</th>
					                <th>Description</th>
					                <th style="text-align:center;">Actions</th>
					                <th style="text-align:center;">Stop On<br>Match</th>
					                <th style="text-align:center;">Enabled</th>
					            </tr>
					            </thead>
					            <tbody>
					            <tr v-for="filter in filters" v-bind:class="{'sfx_options_dialog_option_disabled':!filter.enabled}">
					                <td>{{$index + 1}}</td>
					                <td class="sfx_options_dialog_option_title">{{filter.title}}<span v-if="filter.id" style="font-weight:normal;font-style:italic;color:green;margin-top:5px;" v-tooltip="{content:'Click \\'x\\' to unsubscribe',delay:250}"> (Subscribed)</span></td>
					                <td class="sfx_options_dialog_option_description">
					                    {{filter.description}}
					                    <div v-if="filter.id && filter.subscription_last_updated_on" style="font-style:italic;color:#999;margin-top:5px;">Subscription last updated: {{ago(filter.subscription_last_updated_on)}}</div>
					                </td>
					                <td class="sfx_options_dialog_option_action" style="white-space:nowrap;">
					                    <span class="sfx_square_control" v-tooltip="Edit" @click="edit_filter(filter,$index)">&#9998;</span>
					                    <span class="sfx_square_control sfx_square_delete"  v-tooltip="Delete" @click="delete_filter(filter)">&times;</span>
					                    <span class="sfx_square_control" v-tooltip="Move Up (Hold Ctrl to move to top)" @click="up(filter, $event, $index)">&utrif;</span>
					                    <span v-if="$index<filters.length-1" class="sfx_square_control" v-tooltip="Move Down (Hold Ctrl to move to bottom)" @click="down(filter, $event, $index)">&dtrif;</span>
					                </td>
					                <td style="text-align:center;">
					                    <input id="sfx_stop_{{$index}}" type="checkbox" v-model="filter.stop_on_match"/><label for="sfx_stop_{{$index}}" data-tooltip-delay="100" v-tooltip="If a post matches this filter, don't process the filters that follow, to prevent it from being double-processed. For most situations, this should remain checked."></label>
					                </td>
					                <td style="text-align:center;">
					                    <input id="sfx_filter_{{$index}}" type="checkbox" v-model="filter.enabled"/><label for="sfx_filter_{{$index}}"></label>
					                </td>
					            </tr>
					            </tbody>
					        </table>

					        <div v-if="filter_subscriptions">
					            <div class="sfx_options_dialog_panel_header">Filter Subscriptions</div>
					            <div>The pre-defined filters below are available for you to use. These "Filter Subscriptions" will be automatically maintained for you, so as Facebook changes or more keywords are needed to match a specific topic, your filters will be updated without you needing to do anything!</div>
					            <table class="sfx_options_dialog_table">
					                <thead>
					                <tr>
					                    <th>Title</th>
					                    <th>Description</th>
					                    <th>Actions</th>
					                </tr>
					                </thead>
					                <tbody>
					                <tr v-for="filter in filter_subscriptions" v-bind:class="{'sfx_filter_subscribed':filter.subscribed}">
					                    <template v-if="version_check(filter)">
					                    <td class="sfx_options_dialog_option_title">{{filter.title}}<span v-if="filter.subscribed" style="font-weight:900;font-style:italic;color:green;margin-top:5px;" v-tooltip="{content:'To unsubscribe, click \\'x\\' in the Active Filters table above',delay:250}"> (Subscribed)</span></td>
					                    <td class="sfx_options_dialog_option_description">{{filter.description}}</td>
					                    <td class="sfx_options_dialog_option_action">
					                        <span class="sfx_square_add" v-tooltip="Add To My Filters" @click="add_subscription(filter)">+</span>
					                    </td>
					                    </template>
					                </tr>
					                </tbody>
					            </table>
					        </div>
					    </div>

					    <div v-if="editing_filter" class="sfx_options_dialog_panel">
					        <div style="float:right;">
					            <span class="sfx_button" style="background-color:green;" onclick="window.open('https://github.com/matt-kruse/SocialFixer/wiki/Post-Filtering#edit-filter','SFX_FILTER_HELP','width=1024,height=600');"><b>[?]</b> Open Filter Help</span>
					        </div>
					        <div class="sfx_panel_title_bar">
					            Edit Filter
					            <br style="clear:both;">
					        </div>
					        <div class="sfx_info" v-if="editing_filter.id">
					            This filter is a subscription, so its definition is stored on the SocialFixer.com server and updated automatically for you. If you wish to edit this filter, you can do so but it will "break" the subscription and your copy will be local and no longer updated automatically as Facebook changes.
					            <br><input type="button" class="sfx_button" value="Convert to local filter" @click="editing_filter.id=null"/>
					        </div>
					        <div class="sfx_label_value">
					            <div>Title:</div>
					            <div><input class="sfx_wide sfx_input" v-model="editing_filter.title" v-bind:disabled="editing_filter.id"/></div>
					        </div>
					        <div class="sfx_label_value">
					            <div>Description:</div>
					            <div><input class="sfx_wide sfx_input" v-model="editing_filter.description" v-bind:disabled="editing_filter.id"></div>
					        </div>
					        <div class="sfx_options_dialog_filter_conditions sfx_options_dialog_panel">
					            <div class="sfx_panel_title_bar">
					                IF ...
					                <br style="clear:both;">
					            </div>
					            <div v-for="rule in editing_filter.rules">
					                <div class="sfx-flex-row-container">
					                    <div><select v-if="$index>0" v-model="editing_filter.match" v-bind:disabled="editing_filter.id"><option value="ALL" data-tooltip-delay="100" v-tooltip="Choose whether all conditions must be met (AND) or if any of the conditions must be met (OR)">AND<option value="ANY">OR</select></div>
					                    <div><select v-model="rule.target" v-bind:disabled="editing_filter.id" data-tooltip-delay="100" v-tooltip="Which attribute of the post do you want to match on?
See the Filter Help for a full explanation of each type">
					                        <option value="any">Any Post Content</option>
					                        <option value="any+image">Post Text + Caption</option>
					                        <option value="content">Post Text Content</option>
					                        <option value="action">Post Action</option>
					                        <option value="author">Author</option>
					                        <option value="group">Group Posted In</option>
					                        <option value="page">Page Posted By</option>
					                        <option value="app">App/Game Name</option>
					                        <option value="link_url">Link URL</option>
					                        <option value="link_text">Link Text</option>
					                        <!--
					                        <option value="day">Day of the Week</option>
					                        <option value="age">Post Age</option>
					                        -->
					                        <option value="image">Photo Caption</option>
					                        <option value="hashtag">Any Hashtag</option>
					                    </select></div>
					                    <template v-if="rule.target=='day'">
					                        <div style="padding-left:10px;" data-tooltip-delay="100" v-tooltip="Choose which days of the week this filter should be active">
					                            is
					                            <input type="checkbox" class="normal" v-model="rule.condition.day_0" v-bind:disabled="editing_filter.id"> Sun
					                            <input type="checkbox" class="normal" v-model="rule.condition.day_1" v-bind:disabled="editing_filter.id"> Mon
					                            <input type="checkbox" class="normal" v-model="rule.condition.day_2" v-bind:disabled="editing_filter.id"> Tue
					                            <input type="checkbox" class="normal" v-model="rule.condition.day_3" v-bind:disabled="editing_filter.id"> Wed
					                            <input type="checkbox" class="normal" v-model="rule.condition.day_4" v-bind:disabled="editing_filter.id"> Thu
					                            <input type="checkbox" class="normal" v-model="rule.condition.day_5" v-bind:disabled="editing_filter.id"> Fri
					                            <input type="checkbox" class="normal" v-model="rule.condition.day_6" v-bind:disabled="editing_filter.id"> Sat
					                        </div>
					                    </template>
					                    <template v-if="rule.target=='age'">
					                        <div style="padding-left:10px;">
					                            is
					                            <select v-model="rule.operator" v-bind:disabled="editing_filter.id">
					                                <option value="gt">Greater Than</option>
					                                <option value="lt">Less Than</option>
					                            </select>
					                            <input class="sfx_input" type="number" min="1" style="width:40px;" v-model="rule.condition.value" size="3" v-bind:disabled="editing_filter.id">
					                            <select v-model="rule.condition.units" v-bind:disabled="editing_filter.id">
					                                <option value="h">Hours</option>
					                                <option value="d">Days</option>
					                            </select>
					                        </div>
					                    </template>
					                    <template v-if="rule.target!='day' && rule.target!='age'">
					                        <div>
					                            <input type="checkbox" class="normal" v-model="rule.not" v-bind:disabled="editing_filter.id"> NOT
					                        </div>
					                        <div>
					                            <select v-model="rule.operator" v-bind:disabled="editing_filter.id">
					                                <option value="contains">Contains</option>
					                                <option value="equals">Equals Exactly</option>
					                                <option value="startswith">Starts With</option>
					                                <option value="endswith">Ends With</option>
					                                <option value="matches">Matches Regex</option>
					                                <option v-if="rule.target=='any'" value="contains_selector">Matches CSS Selector</option>
					                            </select>
					                        </div>
					                        <div class="stretch" style="white-space:nowrap;">
					                            <span v-if="['matches',].includes(rule.operator)" style="margin-left:10px;font-weight:bold;">/</span>
					                            <input v-if="['contains','equals','startswith','endswith',].includes(rule.operator)" class="stretch sfx_input" v-on:focus="clear_test_regex" v-on:blur="test_regex" v-model="rule.condition.text" v-bind:disabled="editing_filter.id">
					                            <input v-if="['contains_selector',].includes(rule.operator)" class="stretch sfx_input" v-model="rule.condition.text" v-bind:disabled="editing_filter.id">
					                            <input v-if="['matches',].includes(rule.operator)" class="stretch sfx_input" v-model="rule.condition.text" style="max-width:70%;" v-bind:disabled="editing_filter.id">
					                            <div>
					                                <span style="white-space:normal;" v-if="'re'==rule.matcher && ['equals','contains',].includes(rule.operator)">word|or phrase|more of either|...</span>
					                            </div>
					                            <span v-if="['matches',].includes(rule.operator)" style="font-weight:bold;">/</span>
					                            <input class="sfx_input" v-if="['matches',].includes(rule.operator)" v-model="rule.condition.modifier" size="2" v-bind:disabled="editing_filter.id" data-tooltip-delay="100" v-tooltip="Regular Expression modifier, such as 'i' for case-insensitive">
					                            <template v-if="!['matches','contains_selector',].includes(rule.operator)">
					                                <select v-model="rule.condition.modifier" v-bind:disabled="editing_filter.id">
					                                    <option value="i">ignore case</option>
					                                    <option value="I">Match Case</option>
					                                </select>
					                                <select v-model="rule.matcher" v-bind:disabled="editing_filter.id">
					                                    <option value="re">Regular Expression</option>
					                                    <option value="str">Simple String Match</option>
					                                </select>
					                            </template>
					                            <span v-if="['contains',].includes(rule.operator)" style="white-space:nowrap;padding-left:5px;">
					                                <input type="checkbox" class="normal" v-model="rule.match_partial_words" v-bind:disabled="editing_filter.id" data-tooltip-delay="100" v-tooltip="Check this if you want the text to be a partial match. For example, if 'book' should also match 'Facebook'. If unchecked, only whole words will be matched.">
					                                <span v-if="(!editing_filter.id || rule.match_partial_words)"> Match partial words</span>
					                            </span>
					                            <span v-if="['matches',].includes(rule.operator)" class="sfx_link" @click="regex_test(rule.condition)" data-tooltip-delay="100" v-tooltip="Test your regular expression against text to make sure it matches as you expect."> [test]</span>
					                        </div>
					                    </template>
					                    <span v-if="editing_filter.rules.length>1" class="sfx_square_control sfx_square_delete" style="margin:0 10px;" v-tooltip="Delete" @click="delete_rule(rule)">&times;</span>
					                </div>
					            </div>
					            <div v-if="!editing_filter.id">
					                <input type="button" class="sfx_button" value="Add A Condition" @click="add_condition">
					            </div>
					        </div>
					        <div class="sfx_options_dialog_filter_actions sfx_options_dialog_panel">
					            <div class="sfx_panel_title_bar">... THEN</div>
					            <div class="sfx_info" v-if="editing_filter.id && editing_filter.configurable_actions && editing_filter.actions[0].action==''">
					                This Filter Subscription defines the rules above, but the action to take is up to you to define. When updated automatically, the rules above will be updated but your selected actions are personal to you.
					            </div>
					            <div class="sfx_info" v-if="editing_filter.id && editing_filter.configurable_actions && editing_filter.actions[0].action!=''">
					                The Actions to take when this filter subscription matches may be changed. If you change the actions, the criteria above will continue to be updated but your customized actions will not be over-written when the filter updates itself.
					            </div>
					            <div class="sfx-flex-row-container" v-for="action in editing_filter.actions">
					                <select v-model="action.action" v-bind:disabled="editing_filter.id && !editing_filter.configurable_actions" data-tooltip-delay="100" v-tooltip="If the conditions match, what action should be taken on the post?">
					                    <option value=""></option>
					                    <option value="hide">Hide post</option>
					                    <option value="unhide">Unhide post</option>
					                    <option value="read">Mark post 'Read'</option>
					                    <option value="unread">Unmark post 'Read'</option>
					                    <option value="css">Add CSS</option>
					                    <option value="class">Add CSS Class</option>
					                    <option value="replace">Replace text</option>
					                    <option value="move-to-tab">Move post to tab</option>
					                    <option value="copy-to-tab">Copy post to tab</option>
					                </select>
					                <span v-if="action.action=='hide'">
					                    <input type="checkbox" class="normal" v-model="action.show_note"  data-tooltip-delay="100" v-tooltip="This will leave a small note in your feed to let you know that a post was hidden." v-bind:disabled="editing_filter.id && !editing_filter.configurable_actions"> Show a note where the post would have been.
					                    <div v-if="action.show_note"> Optional Custom Reveal Note: <input class="sfx_input" v-model="action.custom_note" size="70" data-tooltip-delay="100" v-tooltip="Customize the click-to-reveal note text." style="margin-bottom:3px"></div>
					                    <div v-if="action.show_note"> Optional Custom Rehide Note: <input class="sfx_input" v-model="action.custom_nyet" size="70" data-tooltip-delay="100" v-tooltip="Customize the click-to-rehide note text."></div>
					                </span>
					                <span v-if="action.action=='css'">
					                    CSS: <input class="sfx_input" v-model="action.content" size="45" v-bind:disabled="editing_filter.id && !editing_filter.configurable_actions">
					                    To Selector: <input class="sfx_input" v-model="action.selector" size="25" data-tooltip-delay="100" v-tooltip="Apply the CSS to the element(s) specified by the selector. To target the whole post container, leave blank." v-bind:disabled="editing_filter.id && !editing_filter.configurable_actions">
					                </span>
					                <span class="stretch" v-if="action.action=='class'">
					                    Class: <input class="sfx_input" v-model="action.content" size="45" v-bind:disabled="editing_filter.id && !editing_filter.configurable_actions" data-tooltip-delay="100" v-tooltip="Add a class name. This is useful in conjunction with a Display Tweak to customize CSS">
					                    To Selector: <input class="sfx_input" v-model="action.selector" size="25" data-tooltip-delay="100" v-tooltip="Apply the class to the element(s) specified by the selector. To target the whole post container, leave blank." v-bind:disabled="editing_filter.id && !editing_filter.configurable_actions">
					                </span>
					                <span v-if="action.action=='replace'">
					                    Find: <input class="sfx_input" v-model="action.find" size="25" v-bind:disabled="editing_filter.id && !editing_filter.configurable_actions">
					                    Replace With: <input class="sfx_input" v-model="action.replace" size="25" v-bind:disabled="editing_filter.id && !editing_filter.configurable_actions">
					                </span>
					                <span v-if="action.action=='move-to-tab' || action.action=='copy-to-tab'">
					                    Tab Name: <input class="sfx_input" v-model="action.tab" size="45" v-bind:disabled="editing_filter.id && !editing_filter.configurable_actions">
					                </span>
					                <span v-if="editing_filter.actions.length>1" class="sfx_square_control sfx_square_delete" style="margin:0 10px;" v-tooltip="Delete" @click="delete_action(action)">&times;</span>
					            </div>
					            <div v-if="!editing_filter.id || editing_filter.configurable_actions">
					                <input type="button" class="sfx_button" value="Add An Action" @click="add_action">
					            </div>
					        </div>
					        <span data-tooltip-delay="100" v-tooltip="Directly move this filter to the given position number">
					            <input type="number" class="sfx_input" min="1" max="{{filters.length}}" v-model="editing_meta.new_number">Filter Order
					        </span>
					        <span data-tooltip-delay="100" v-tooltip="If a post matches this filter, don't process the filters that follow, to prevent it from being double-processed. For most situations, this should remain checked.">
					            <input type="checkbox" class="normal" v-model="editing_filter.stop_on_match">Stop On Match
					        </span>
					        <span data-tooltip-delay="100" v-tooltip="Should this filter be processed at all?">
					            <input type="checkbox" class="normal" v-model="editing_filter.enabled">Enabled
					        </span>
					        <div class="sfx_link" @click="show_advanced=!show_advanced" v-tooltip="{position:'above',content:'View the underlying JSON data structure for this filter. The filter can be edited manually here, or you can paste in filter code from someone else to copy their filter exactly.',delay:500}">{{show_advanced?"Hide Advanced Code &utrif;":"Show Advanced Code &dtrif;"}}</div>
					        <textarea v-if="show_advanced" style="width:90%;height:150px;font-size:calc(0.55rem * var(--sfx_ui_scale));font-family:monospace;" v-model="editing_filter | json+" v-bind:disabled="editing_filter.id"></textarea>
					    </div>
					</div>

				</template>
				<template v-if="section.name=='Data'">
					<div class="sfx_info">Here you can export all of Social Fixer's stored data, including options, filters, and which stories have been read. WARNING: Importing will overwrite your existing settings!</div>
					Total storage space used: {{storage_size | currency '' 0}} bytes<br><br>
					<input type="button" class="sfx_button" value="Save To File" @click="save_to_file()" v-if="supports_download_attribute"> <input type="button" class="sfx_button" value="Load From File" @click="load_from_file()"> <input type="button" class="sfx_button" value="Reset All Data" @click="reset_data()"><br><br>
					<input type="button" class="sfx_button" value="Export To Textbox" @click="populate_user_options()"> <input type="button" class="sfx_button" value="Import From Textbox" @click="import_data_from_textbox()">
					<br><br>
					<div v-if="user_options_message" class="sfx_info">{{user_options_message}}</div>
					<textarea id="sfx_user_data" v-model="user_options|json" style="width:95%;height:50vh;font-family:courier new,monospace;font-size:calc(0.55rem * var(--sfx_ui_scale));"></textarea>
				</template>
				<template v-if="section.name!='Filters'">
					<div v-if="section.description" style="margin-bottom:15px;">{{section.description}}</div>
					<table class="sfx_options_dialog_table">
						<tr v-for="opt in section.options | filterBy !opt.hidden" v-if="!opt.hidden" class="{{opt.highlighted?'sfx_options_dialog_option_highlighted':''}}">
							<td class="sfx_options_dialog_option_title {{($index==0 || section.options[$index-1].title!=opt.title)?'':'repeat'}}">{{{opt.title | highlight searchtext}}}</td>
							<td class="sfx_options_dialog_option_description">{{{opt.description | highlight searchtext}}}
								<input class="sfx_input" v-if="opt.type=='text'" v-model="opt.newValue" style="display:block;width:{{opt.width || '50%'}};"/>
								<input class="sfx_input" v-if="opt.type=='number'" type="number" min="{{opt.min||1}}" max="{{opt.max||999}}" v-model="opt.newValue"/>
								<textarea v-if="opt.type=='textarea'" v-model="opt.newValue" style="display:block;width:95%;height:100px;"></textarea>
							</td>
							<td class="sfx_options_dialog_option_action">
								<template v-if="opt.type=='checkbox'">
									<input id="sfx_option_{{opt.key}}" class="sfx_input" type="checkbox" v-model="opt.newValue"/><label for="sfx_option_{{opt.key}}"></label>
								</template>
								<template v-if="opt.type=='link'">
									<input type="button" data-href="{{opt.url}}" onclick="window.open(this.getAttribute('data-href'));" class="sfx_button" value="GO!">
								</template>
								<template v-if="opt.type=='action'">
									<input type="button" @click="message(opt.action_message)" class="sfx_button" value="{{opt.action_text}}">
								</template>
							</td>
						</tr>
					</table>

					<!-- Custom Section Displays -->
					<template v-if="section.name=='Hide Posts'">
						<b>Easily hide posts from your feed by keyword or phrase.</b>
						<br><br>
						Just enter each keyword or phrase you want to hide on a separate line in the text box. Any post containing one of those words will be hidden, and a small note will be shown in its place. To have more control over filtering, advanced post filtering can be setup in the "Filters" tab.
						<br><br>
						<input type="checkbox" class="normal" v-model="options.hide_posts_show_hidden_message.newValue"> Show a note in place of hidden posts in the news feed
						<br>
						<input type="checkbox" class="normal" v-model="options.hide_posts_show_match.newValue"> Show the word or phrase that matched in the hidden-post note
						<br>
						<input type="checkbox" class="normal" v-model="options.hide_posts_partial.newValue"> Match partial words (example: "the" will also match "them")
						<br>
						<input type="checkbox" class="normal" v-model="options.hide_posts_case_sensitive.newValue"> Match Case
						<br>
						<input type="checkbox" class="normal" v-model="options.hide_posts_caption.newValue"> Also match photo captions
						<br>
						Hide posts with these keywords or phrases (each on its own line):<br>
						<textarea v-model="options.hide_posts_text.newValue" style="width:80%;height:150px;"></textarea>

					</template>
					<template v-if="section.name=='Display Tweaks'">
						<div v-if="!editing_tweak">
						    <div class="">
						        Display Tweaks are small snippets of CSS which change the appearance of the page. They can do anything from changing colors and fonts to hiding parts of the page or completely changing the layout. Advanced users can add their own tweaks, but most users will want to select some from the list of available Tweaks.
						    </div>
						    <div class="sfx_option" style="margin:10px 0;font-size:calc(0.7rem * var(--sfx_ui_scale));"><input id="tweaks_enabled" type="checkbox" v-model="options.tweaks_enabled.newValue" @change="show_current_tweaks()"/><label for="tweaks_enabled"></label> Tweaks enabled</div>
						    <div>
						        <input type="button" class="sfx_button" value="Create A New Tweak" @click="add_tweak">
						    </div>
						    <div v-if="tweaks.length" class="sfx_options_dialog_panel_header">Active Tweaks</div>
						    <table v-if="tweaks.length" class="sfx_options_dialog_table">
						        <thead>
						        <tr>
						            <th>#</th>
						            <th>Title</th>
						            <th>Description</th>
						            <th style="text-align:center;">Actions</th>
						            <th style="text-align:center;">Enabled</th>
						        </tr>
						        </thead>
						        <tbody>
						        <tr v-for="tweak in tweaks" v-if="isObject(tweak)" v-bind:class="{'sfx_options_dialog_option_disabled':!tweak.enabled}">
						            <td>{{$index + 1}}</td>
						            <td class="sfx_options_dialog_option_title">{{tweak.title}}<span v-if="tweak.id" style="font-weight:normal;font-style:italic;color:green;margin-top:5px;" v-tooltip="{content:'Click \\'x\\' to unsubscribe',delay:250}"> (Subscribed)</span></td>
						            <td class="sfx_options_dialog_option_description">
						                {{tweak.description}}
						                <div v-if="tweak.id && tweak.subscription_last_updated_on" style="font-style:italic;color:#999;margin-top:5px;">Subscription last updated: {{ago(tweak.subscription_last_updated_on)}}</div>
						            </td>
						            <td class="sfx_options_dialog_option_action" style="white-space:nowrap;">
						                <span class="sfx_square_control" v-tooltip="Edit" @click="edit_tweak(tweak,$index)">&#9998;</span>
						                <span class="sfx_square_control sfx_square_delete" v-tooltip="Delete" @click="delete_tweak(tweak)">&times;</span>
						            </td>
						            <td>
						                <input id="sfx_tweak_{{$index}}" type="checkbox" @change="toggle_tweak(tweak,$index)" v-model="tweak.enabled"/><label for="sfx_tweak_{{$index}}"></label>
						            </td>
						        </tr>
						        </tbody>
						    </table>

						    <div v-if="tweak_subscriptions">
						        <div class="sfx_options_dialog_panel_header">Available Display Tweaks (Snippets)</div>
						        <div>
						            Below is a list of display tweaks maintained by the Social Fixer team which you may find useful. When you add them to your list, they will be automatically updated to continue functioning if Facebook changes its layout or code.
						        </div>
						        <table class="sfx_options_dialog_table">
						            <thead>
						            <tr>
						                <th>Title</th>
						                <th>Description</th>
						                <th>Add</th>
						            </tr>
						            </thead>
						            <tbody>
						            <tr v-for="tweak in tweak_subscriptions" v-if="isObject(tweak)" v-bind:class="{'sfx_tweak_subscribed':tweak.subscribed}">
						                <template v-if="version_check(tweak)">
						                <td class="sfx_options_dialog_option_title">{{tweak.title}}<span v-if="tweak.subscribed" style="font-weight:900;font-style:italic;color:green;margin-top:5px;" v-tooltip="{content:'To unsubscribe, click \\'x\\' in the Active Tweaks table above',delay:250}"> (Subscribed)</span></td>
						                <td class="sfx_options_dialog_option_description">{{tweak.description}}</td>
						                <td class="sfx_options_dialog_option_action">
						                    <span class="sfx_square_add" v-tooltip="Add To My Tweaks" @click="add_tweak_subscription(tweak)">+</span>
						                </td>
						                </template>
						            </tr>
						            </tbody>
						        </table>
						    </div>
						    <div v-else>
						        Loading Available Tweaks...
						    </div>
						</div>

						<div v-if="editing_tweak" class="sfx_options_dialog_panel">
						    <div class="sfx_panel_title_bar">Edit Tweak</div>
						    <div class="sfx_label_value">
						        <div>Title:</div>
						        <div><input class="sfx_wide" v-model="editing_tweak.title"></div>
						    </div>
						    <div class="sfx_label_value">
						        <div>Description: </div>
						        <div><input class="sfx_wide" v-model="editing_tweak.description"></div>
						    </div>
						    <span data-tooltip-delay="100" v-tooltip="Directly move this tweak to the given position number">
						        <input type="number" class="sfx_input" min="1" max="{{tweaks.length}}" v-model="editing_meta.new_number">Tweak Order
						    </span>
						    <span data-tooltip-delay="100" v-tooltip="Should this tweak be processed at all?">
						        <input type="checkbox" class="normal" v-model="editing_tweak.enabled">Enabled
						    </span>
						    <div>CSS:<br/>
						        <textarea style="width:90%;height:250px;font-size:calc(0.55rem * var(--sfx_ui_scale));font-family:monospace;" v-model="editing_tweak.css"></textarea>
						    </div>
						</div>

					</template>
					<template v-if="section.name=='About'"><div id="sfx_options_content_about">{{{content_about}}}</div></template>
					<template v-if="section.name=='Donate'">
						<div v-if="sfx_option_show_donate" style="margin-bottom:10px;">
							<input id="sfx_option_show_donate" type="checkbox" v-model="options.sfx_option_show_donate.newValue"/><label for="sfx_option_show_donate"></label> Remind me every so often to help support Social Fixer through donations.
						</div>
						<div id="sfx_options_content_donate">{{{content_donate}}}</div>
					</template>
					<template v-if="section.name=='Support'">
						<div style="font-family:monospace;font-size:calc(0.55rem * var(--sfx_ui_scale));border:1px solid #ccc;margin-bottom:5px;padding:7px;">${v.user_agent}<br>Social Fixer ${v.buildstr}
							<br><span>Extension build target: ${v.extension_build_target}</span>
							<br><span>Extension store name: ${v.extension_store_name}</span>
							<br><span>Extension ID: ${v.extension_id}</span>
							<br><span v-if="support_notes"><br>Support Notes:<br>
								<span v-for="note in support_notes">{{note.who}}: {{note.what}}<br></span>
							</span>
						</div>
						<div id="sfx_options_content_support">{{{content_support}}}</div>
					</template>
				</template>
			</div>
		</div>
	</div>
</div>
`),r=function(){X("#sfx_options_dialog").remove()};X.subscribe("options/close",function(){r()});const N=function(){X.storage.set("stats","support",{user_agent:v.user_agent,extension_id:v.extension_id,buildstr:v.buildstr,context:FX.context,support_notes:X.support_notes})};var c=function(){var h,E,$,P={};for($ in FX.options)E=FX.options[$],E.newValue!=E.value&&(E.newValue==E.default?P[$]=h:P[$]=E.newValue);X.storage.data.filters=X.clone(R||[]),X.storage.data.tweaks=X.clone(j||[]),N(),X.storage.set("options",P,function(){X.storage.save("filters",null,function(){X.storage.save("tweaks",null,function(){Object.keys(P).forEach(G=>FX.fire_option_update(G,FX.option(G))),r();const V=FX.option("badge_x")<0?"left":"right";var W=rt(v.badge_sel,V,' Saved!  <b style="color:red;">Reload all Facebook tabs</b> for changes to take effect! ');setTimeout(function(){W.remove()},6*X.seconds)})})})},_=function(h){var E=`<div>${h}<br><br><span class="sfx_button">REFRESH THE PAGE</span> immediately to activate the changes!`;u.show_action_buttons=!1,X("#sfx_options_dialog_body").css("padding","50px").html(E),X("#sfx_options_dialog_body .sfx_button").click(()=>window.location.reload())},m=function(h){var E,$,P=[];this.user_options_message=null;try{$=JSON.parse(h);for(E in $){var V=X.clone($[E]);X.storage.data[E]=V,X.storage.save(E,null,function(){}),P.push(E)}_(`Successfully imported keys: ${P.join(", ")}.`)}catch(W){this.user_options_message="Error importing data: "+W.toString()}},S;if(O&&O.data)for(S in O.data)u[S]=O.data[S];var b={save:c,cancel:function(){this.editing_filter?(this.editing_meta.new&&this.filters.length--,this.action_button=null,this.editing_filter=null,this.editing_meta={}):this.editing_tweak?(this.editing_meta.new&&this.tweaks.length--,this.action_button=null,this.editing_tweak=null,this.editing_meta={}):r()},collapse:function(){X("#sfx_options_dialog_body").toggle()},message:function(h){if(h){var E=h.split(/\s*,\s*/);E&&E.length>0&&E.forEach(function($){X.publish($,{})})}},search:function(){var h=this.sections[0];if(h.options.splice(0,h.options.length),this.searchtext&&this.searchtext.length>2){var E=new RegExp(this.searchtext,"i");for(var $ in FX.options){var P=FX.options[$];(E.test(P.title)||E.test(P.description))&&h.options.push(P)}}},select_section:function(h){this.editing_filter=null,this.action_button=null,f.forEach(function(E){E.selected=!1}),h.selected=!0,X.publish("menu/options/section",h.name)},ago:X.ago,isObject:X.isObject,version_check:function(h){return(!h.min_version||X.semver_compare(v.version,h.min_version)>=0)&&(!h.max_version||X.semver_compare(v.version,h.max_version)<=0)},clear_test_regex:function(h){var E=X(h.target);E.attr("title",null).css("background-color","")},test_regex:function(h){var E=X(h.target);try{new RegExp(E.val()),E.css("background-color","")}catch($){E.css("background-color","#e00"),E.attr("title",$.message)}},save_to_file:function(){N();var h=X('<a style="position:absolute;top:0;left:-10px;visibility:hidden;" aria-hidden="true" tabindex="-1"></a>');h.attr("href","data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(X.storage.data,null,"  "))),h.attr("download",`Social_Fixer_Settings_${X.today()}.txt`),X(document.body).append(h),X.ui.click(h,!1),h.remove()},load_from_file:function(){var h=X('<input type="file" accept="text/*">');h.change(function(E){if(E.target.files&&E.target.files[0]){var $=new FileReader;$.onload=function(P){m.call(this,P.target.result)}.bind(this),$.onerror=function(P){this.user_options_message="Error importing data: "+P.toString()}.bind(this),$.readAsText(E.target.files[0])}}.bind(this)),X.ui.click(h,!1)},populate_user_options:function(){N(),this.user_options=X.clone(X.storage.data),this.user_options_message=null},import_data_from_textbox:function(){m.call(this,X("#sfx_user_data").val())},reset_data:function(){confirm(`Are you sure?

Resetting your data will ERASE all user preferences, "read" story data, installed filters, etc.`)&&(X.storage.save("options",{}),X.storage.save("filters",[]),X.storage.save("tweaks",[]),X.storage.save("hiddens",{}),X.storage.save("postdata",{}),X.storage.save("friends",{}),X.storage.save("stats",{}),X.storage.save("messages",{}),X.storage.save("tasks",{}),_("All data has been reset."))},shuffle_entry:function(h,E,$,P){if(P=typeof P=="function"?P:()=>null,$=v.bound($,0,h.length-1,-1),E!=$&&h[E]&&h[$]){const W=X.clone(h[E]),G=$>E?1:-1;for(var V=E;V!=$;V+=G)h.$set(V,h[V+G]),P(V);h.$set($,W)}},edit_filter:function(h,E){this.editing_filter=X.clone(h),this.editing_meta.number=E+1,this.editing_meta.new_number=E+1,this.editing_meta=X.clone(this.editing_meta),this.action_button="done_editing_filter"},delete_filter:function(h){confirm("Are you sure you want to remove this filter?")&&(this.filters.$remove(h),Oe(u.filter_subscriptions,R))},up:function(h,E,$){this.shuffle_entry(this.filters,$,E.ctrlKey?0:$-1)},down:function(h,E,$){this.shuffle_entry(this.filters,$,E.ctrlKey?this.filters.length-1:$+1)},close_filter:function(){this.editing_filter.updated_on=X.time();var h=this.filters[this.editing_meta.number-1];h.id&&h.configurable_actions&&!h.custom_actions&&(v.data_equals(h.actions,this.editing_filter.actions)||(this.editing_filter.custom_actions=!0));var E=this.editing_meta.number-1,$=this.editing_meta.new_number-1;this.filters.$set(E,this.editing_filter),$!=E&&this.shuffle_entry(this.filters,E,$),this.editing_filter=null,this.action_button=null,this.editing_meta={},Oe(u.filter_subscriptions,R)},add_filter:function(){var h={match:"ALL",enabled:!0,stop_on_match:!0,rules:[{target:"any",operator:"contains",matcher:"re",condition:{modifier:"i"}}],actions:[{action:"hide"}]};h.added_on=X.time(),this.filters.push(h),this.editing_meta.new=!0,this.edit_filter(this.filters[this.filters.length-1],this.filters.length-1)},add_subscription:function(h){var E=X.clone(h);E.enabled=!0,(!E.actions||!E.actions.length)&&(E.actions=[{action:""}],E.configurable_actions=!0),this.filters.push(E),Oe(u.filter_subscriptions,R)},add_condition:function(){this.editing_filter.rules.push({target:"any",operator:"contains",matcher:"re",condition:{modifier:"i"}})},delete_rule:function(h){this.editing_filter.rules.$remove(h)},add_action:function(){let h=this.editing_filter.actions;h.push(X.clone(h[h.length-1])),delete h[h.length-1].action},delete_action:function(h){this.editing_filter.actions.$remove(h)},regex_test:function(h){var E=h.text,$=h.modifier;X.publish("test/regex",{text:E,modifier:$})},edit_tweak:function(h,E){this.editing_tweak=X.clone(h),this.editing_meta.number=E+1,this.editing_meta.new_number=E+1,this.editing_meta=X.clone(this.editing_meta),this.action_button="done_editing_tweak"},tweak_css_on_off:function(h,E){E=E&&this.options.tweaks_enabled.newValue,X.css(E?this.tweaks[h].css:null,"sfx_tweak_style_"+h)},delete_tweak:function(h){confirm("Are you sure you want to remove this tweak?")&&(this.tweaks.$remove(h),this.show_current_tweaks(),Oe(u.tweak_subscriptions,j))},close_tweak:function(){this.editing_tweak.updated_on=X.time();var h=this.editing_meta.number-1,E=this.editing_meta.new_number-1;this.tweaks.$set(h,this.editing_tweak),E!=h&&this.shuffle_entry(this.tweaks,h,E,$=>this.tweak_css_on_off($,X.isObject(this.tweaks[$])&&this.tweaks[$].enabled)),this.tweak_css_on_off(E,this.editing_tweak.enabled),this.editing_tweak=null,this.action_button=null,this.editing_meta={},Oe(u.tweak_subscriptions,j)},add_tweak:function(){var h={title:"",description:"",enabled:!0};h.added_on=X.time();var E=this.tweaks.push(h)-1;this.editing_meta.new=!0,this.edit_tweak(this.tweaks[E],E)},add_tweak_subscription:function(h){var E=X.clone(h);E.enabled=!0;var $=this.tweaks.push(E)-1;Oe(u.tweak_subscriptions,j),this.tweak_css_on_off($,!0)},toggle_tweak:function(h,E){this.tweak_css_on_off(E,X.isObject(h)&&h.enabled)},show_current_tweaks:function(){for(var h=0;h<this.tweaks.length;h++)this.tweak_css_on_off(h,X.isObject(this.tweaks[h])&&this.tweaks[h].enabled);this.tweak_css_on_off(this.tweaks.length,!1)}};qe(document.body,o,u,b).ready(function(){X.draggable("#sfx_options_dialog"),O.section&&X.publish("menu/options/section",O.section)})}catch(R){alert(R)}}),X.subscribe("menu/options/section",function(l,O){f.forEach(function(o){o.name==O&&o.property&&o.url&&X.ajax(o.url,function(r){u[o.property]=X.sanitize(r)})}),O=="Filters"&&lt("filters",u.filters,function(o){u.filter_subscriptions=o,et("filters",u.filters)}),O=="Display Tweaks"&&lt("tweaks",u.tweaks,function(o){u.tweak_subscriptions=o,et("tweaks",u.tweaks)})}),FX.on_content_loaded(function(){/sfx_options=true/.test(location.href)&&X.publish("menu/options")})})}),X.ready("permalink_target",function(){const f=function(){FX.add_option("permalink_target",{section:"Advanced",title:"Scroll To Comment",description:"Scroll into view the comment / reply target of a clicked notification or permalink",order:10,default:!0,live:S}),FX.add_option("permalink_target_css",{section:"Advanced",title:"Scroll To Comment",description:'CSS style to apply to that comment / reply ("this:that;other:etc"; blank for none)',type:"text",order:20,default:"border:3px dashed #4c4;background-color:var(--progress-ring-disabled-foreground);",live:m})};var u="",l="";const O=function(){var R=location.search.replace(/^\?/,"").split("&"),j=R.find(h=>/^reply_comment_id=/.test(h))||R.find(h=>/^comment_id=/.test(h))||R.find(h=>/^ctoken=/.test(h));if(!j)return u="",!1;var N=j.replace(/.*[=_]/,"");return u==N?!1:(u=N,l=`[role=article] a[href*="${j}"]`,!0)},o=function(){X(".sfx_permalink_target").removeClass("sfx_permalink_target")},r=function(){const R=X(l).first().closest("[role=article]");R.length&&(o(),R.addClass("sfx_permalink_target"),setTimeout(()=>{R[0].scrollIntoView();const j=R.offset().top-window.innerHeight/2;window.scrollTo(0,j<0?0:j)},.75*X.seconds))},c=function(){setTimeout(r,1*X.seconds)},_=function(){FX.option("permalink_target")&&document.visibilityState=="visible"&&O()&&X.when(l,c,500,100)};document.addEventListener("visibilitychange",_);const m=function(R){!FX.option("permalink_target")||typeof R!="string"||!/[\S]/.test(R)?R="":R=`.sfx_permalink_target { ${R} }`,X.css(R,"sfx_permalink_target_css")},S=function(R){R?(u="",_()):o(),m(FX.option("permalink_target_css"))};X.subscribe("post/action/permalink_target/scroll_to",r),X.publish("post/action/add",{section:"wrench",label:"Scroll To Comment",order:20,message:"post/action/permalink_target/scroll_to"});const b=function(){u="",_()};f(),FX.on_page_load(b)}),X.ready("photo_tags",function(){FX.add_option("photo_tags",{section:"General",title:"Show Photo Tags",description:"When hovering over a photo, display caption text or tags added by Facebook",default:!1}),FX.on_option("photo_tags",function(){FX.on_selector('img[alt]:not([alt=""]',function(f){setTimeout(()=>{if(f.is("[sfx_post] *")){const u=f.attr("alt");f.closest("a,.S2F_pos_rel,.S2F_disp_infl").attr("sfx_photo_tags",u)}},.5*X.seconds)})})}),X.ready("post_filters",function(){FX.add_option("filters_enabled",{section:"Filters",hidden:!0,default:!0}),FX.add_option("filters_enabled_pages",{section:"Filters",hidden:!0,default:!1}),FX.add_option("filters_enabled_groups",{section:"Filters",hidden:!0,default:!1}),FX.add_option("filters_forced_processing_delay",{type:"number",section:"Advanced",title:"Post Filter Force Delay",description:"The time in ms after which post filtering will be forced even if all the content is not yet available",default:1*X.seconds}),FX.add_option("filter_forced_visible_style",{section:"Advanced",title:"Post Filter Visible Style",description:"CSS style to be applied to filtered posts which have been clicked visible",type:"text",default:"border:2px dashed blue;",live:H=>X.css(`.sfx_filter_hidden > :not(.sfx_filter_hidden_note) { ${H} }`,"sfx_filter_visible_css")}),FX.add_option("hide_posts_text",{hidden:!0,type:"textarea",section:"Hide Posts",title:"Hide Posts Keywords",default:""}),FX.add_option("hide_posts_show_hidden_message",{hidden:!0,section:"Hide Posts",title:"Show hidden post message",default:!0}),FX.add_option("hide_posts_show_match",{hidden:!0,section:"Hide Posts",title:"Show Matching Text",default:!0}),FX.add_option("hide_posts_partial",{hidden:!0,section:"Hide Posts",title:"Match Partial Words",default:!0}),FX.add_option("hide_posts_case_sensitive",{hidden:!0,section:"Hide Posts",title:"Case Sensitive",default:!1}),FX.add_option("hide_posts_caption",{hidden:!0,section:"Hide Posts",title:"Caption",default:!0});const f=" -- Click to reveal post",u=" -- Click to rehide post",l={},O={};v.pose({sfx_post_data:l,sfx_filter_trace:O});var o=performance.now();const r=function(H,A){const B=performance.now();var Y=O[H]?O[H][0]:B;(!O[H]||Y<o)&&(Y=B,O[H]=[Y],r(H,`Filter log for ID ${H} starts at page time ${(Y/X.seconds).toFixed(6)}`)),O[H].push(((B-Y)/X.seconds).toFixed(6)+" "+A)};X.subscribe("log/filter",function(H,A){r(A.id,A.message)}),X.subscribe_backlog("posts/reset",()=>o=performance.now());function c(H){return H.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&")}var _="h4 a[href*='/groups/']";const m=function(){FX.on_options_load(function(){X.unsubscribe(m);var H=+FX.option("filters_forced_processing_delay"),A=!1,B=function(){if(!A){A=!0;var he="By default, post filtering only affects the main Newsfeed.<br>You can change this in Options if you wish.";Ze("filter_disabled_message",he,{title:"Post Filtering Disabled"})}};FX.on_page_unload(function(){A=!1});var Y=X.clone(FX.storage("filters")),le=(FX.option("hide_posts_text")||"").trim();if(le){var ie=c(le).split(/\s*\n\s*/),q="("+ie.join("|")+")";FX.option("hide_posts_partial")||(q="(?:^|\\b|\\W)"+q+"(?:\\W|\\b|$)");var J=FX.option("hide_posts_case_sensitive")?"I":"i",se=FX.option("hide_posts_show_hidden_message");const he="Post Hidden by keyword"+(FX.option("hide_posts_show_match")?": $1":"");var Q={match:"ALL",enabled:!0,stop_on_match:!0,rules:[{target:FX.option("hide_posts_caption")?"any+image":"any",operator:"matches",condition:{text:q,modifier:J}}],actions:[{action:"hide",show_note:se,custom_note:he+f,custom_nyet:he+u}],title:"Hide Posts"};Y.unshift(Q)}const oe=function(he,pe){const ge=(Ce,je)=>(r(pe,"Not filtering post because "+Ce),je||!1);if(he.attr("sfx_filtered"))return l[pe].already_msgd||(ge("it was already filtered"),l[pe].already_msgd=!0),"already";if(!he||!he[0])return ge("it apparently doesn't exist");if(!he[0].childNodes||he[0].childNodes.length==0||!he.innerText())return ge("it is still being downloaded","notyet");if(FX.context.type=="permalink"&&!he.hasClass("sfx_mr_checked"))return ge("it is not yet checked for permalink status","notyet");if(!he.hasClass("sfx_filter_tab_0"))return ge("it is not yet added to initial tabs","notyet");if(FX.context.type!="groups"||FX.context.id=="feed"){var we=he.find(_).last(),ke=we.attr("href")||"",Pe=ke.replace(/.*\/groups\/([^/]*).*/,"$1");FX.sfx_support_groups.includes(Pe)&&he.addClass("sfx_support_post")}return FX.context.type=="groups"&&FX.sfx_support_groups.includes(FX.context.id)&&(he.addClass("sfx_support_post"),FX.option("filters_enabled_groups")&&!FX.option("support_groups_allow_filters"))?(Ze("filter_disabled_in_support_message",FX.oneLineLtrim(`
                        Social Fixer automatically disables filtering in its<br>
                        Support Groups because the problem you're trying to<br>
                        solve might hide the solution you're looking for.`),{title:"Post Filtering Disabled"}),ge("filtering is automatically disabled in Social Fixer Support Groups")):FX.option("filters_enabled")?!Y||!Y.length?ge("there are no filters"):FX.context.type=="profile"&&!FX.option("filters_enabled_pages")?(B(),ge("<b>Options &gt; Filters &gt; Filter on Pages/Timelines</b> is OFF")):FX.context.type=="groups"&&!FX.option("filters_enabled_groups")?(B(),ge("<b>Options &gt; Filters &gt; Filter in Groups</b> is OFF")):(r(pe,"decide_filter_post() says to filter"),!0):ge("<b>Options &gt; Filters &gt; Post Filtering</b> is OFF")},be=function(he){he.attr("sfx_filtered","true"),X.publish("post/filtered",{$post:he})},ve=function(he,pe,ge){const we=oe(he,pe);return we==!0?!0:we=="notyet"?ge>0?"notyet":"forced":(we==!1&&!he.attr("sfx_filtered")&&(r(pe,"Not filtering because decide_filter_post() says not to"),be(he)),!1)};var Se=function(he,pe,ge){typeof ge>"u"&&(ge=5);const we=pe.$post;var ke=pe.id,Pe=pe.sfx_id,Ce=l[ke]={sfx_id:Pe,dom_id:ke,id:ke,next_filter:0};const je=ve(we,ke,ge);if(je==!1)return!1;(je=="notyet"?void 0:je=="forced"?z(we,Ce,Y,!0):z(we,Ce,Y,!1))!==void 0?be(we):(r(ke,"apply_filters() says to try again later"),setTimeout(function(){if(r(ke,"filter_post() ready to try again"),we.attr("sfx_filtered")){r(ke,"Nevermind, it got sfx_filtered in the meantime");return}Se(he,pe,ge-1)},H))};X.subscribe_backlog("post/add",Se)})};X.subscribe_backlog("context/ready",m);var S=function(){return!X(this).is("[sfx_post] [role=article] *")};const b={P:{count:0,msg:"page-wide group insignia"},A:{count:0,msg:"group self-link aria-label"},T:{count:0,msg:"group name text in post"}};function R(H,A,B){return B&&(b[H].count++,X.support_note("group name methods",Object.entries(b).map(Y=>Y[0]+":"+Y[1].count).join(", ")),r(A,`Group name '${B}' found by ${b[H].msg}`)),B||null}const j=["[role=main] h1 a.S2F_font_700[href*='/groups/']:not([href*='/user/'])","[role=main] h2 a.S2F_font_700[href*='/groups/']:not([href*='/user/'])"].join(","),N=["a.S2F_col_tx1[aria-label][href*='/groups/']:not([href*='/user/'])"].join(","),h=[".S2F_bb_1pxdiv"].join(","),E=["h3 a.S2F_col_tx1.S2F_font_600[href*='/groups/']:not([href*='/user/'])","h4 a.S2F_col_tx1.S2F_font_600[href*='/groups/']:not([href*='/user/'])"].join(","),$={G:{count:0,msg:"general Hx B/STRONG element"},L:{count:0,msg:"first viable link"}};function P(H,A,B){return B&&($[H].count++,X.support_note("author name methods",Object.entries($).map(Y=>Y[0]+":"+Y[1].count).join(", ")),r(A,`Author name '${B}' found by ${$[H].msg}`)),B||null}const V=["a.S2F_disp_inl:not([aria-hidden])","img"].join(","),W=["h2","h3","h4"].join(","),G=["b","strong"].join(","),ne=["a[href*='/groups/'][href*='/user/']"].join(","),ae=[".S2F_font_400.S2F_col_tx1 > .S2F_mb_0.S2F_ow_bw"].join(","),M=['[style*="text-align"]'].join(","),F=["a[data-appname]"].join(","),w=["a.S2F_col_tx2.S2F_font_400[href*='/games/']",".S2F_ch1_none ~ a.S2F_col_tx2"].join(",");var x={author:function(H,A){return A.authorContent=[],A.author=null,A.author||H.find(W).find(G).each(function(){if(!X(this).is(ne)&&(A.author=P("G",H[0].id,this.innerText)))return A.authorContent=[this],!1}),A.author||H.find(V).each(function(){if(X(this).is("img"))return!1;if(!this.innerText||!/www\.facebook\.com\//.test(this.href)||/\/(?:help|reel|media|photo|album|video|posts|hashtag|marketplace)\//.test(this.href)||/\/groups\//.test(this.href)&&!/\/user\//.test(this.href))return!0;if(A.author=P("L",H[0].id,this.innerText))return A.authorContent=[this],!1}),A.author},group:function(H,A){return A.group=null,A.group||X(j).each(function(){if(A.group=R("P",H[0].id,this.innerText))return!1}),A.group||H.find(N).each(function(){if(!X(this).parents(h).length&&(A.group=R("A",H[0].id,this.getAttribute("aria-label"))))return!1}),A.group||H.find(E).each(function(){if(A.group=R("T",H[0].id,this.innerText))return!1}),A.group},page:function(H,A){return A.page=null,A.author===void 0&&C(H,A,"author"),A.authorContent&&A.authorContent[0]&&X(A.authorContent[0].childNodes[0]).closest("h2,h4").find("*").each(function(){if(v.frefpath(this,/eac.*rop/,"children","props","children","props","entity","__typename")=="Page")return A.page=A.author,!1}),A.page},link_url:function(H,A){return A.link_url=[],H.find('a[href*="facebook.com/l.php?u="]').filter(S).forEach(function(B){var Y=X(B).attr("href").match(/facebook.com.l.php.u=([^&]*)/);Y&&Y.length>1&&v.pushy(A.link_url,decodeURIComponent(Y[1]))}),A.link_url.length||(A.link_url=null),A.link_url},link_text:function(H,A){return A.link_text=[],H.find('a[href*="facebook.com/l.php?u="]').filter(S).forEach(function(B){v.pushy(A.link_text,X(B).text())}),A.link_text.length||(A.link_text=null),A.link_text},all_content:function(H,A){var B={acceptNode:function(Y){return Y.nodeName=="#text"?NodeFilter.FILTER_ACCEPT:Y.nodeType==Y.ELEMENT_NODE&&(Y.tagName=="FORM"||X(Y).is("[sfx_post] [role=article]")||/^\s*Facebook\s*$/.test(Y.textContent)&&X(Y).is(".S2F_disp_none"))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP}};return A.all_content=H.innerText(B),/\S/.test(A.all_content)||(A.all_content=C(H,A,"content"),/\S/.test(A.all_content)&&(A.all_content+=" [via ${content}]")),A.all_content},content:function(H,A){A.userContent=[],A.content=[];let B=H.find(ae);return B.length||(B=H.find(M)),B.filter(S).forEach(function(Y){A.userContent.push(Y),A.content.push(X(Y).innerText())}),A.content=A.content.join(`
`),A.content},action:function(H,A){const B=X.getNodeVisibleText(H[0])||X.getNodeVisibleText(H[0].lastChild);return A.action=B.replace(/[\n\u00b7].*/s,""),A.actionContent=[],A.action&&X(H[0].lastChild).find("*").each(function(){const Y=this.innerText||"";if(Y.length<=2*A.action.length){if(Y.indexOf(A.action)==0)A.actionContent=[this];else if(A.actionContent)return!1}}),A.action},app:function(H,A){A.app=null;var B;return B||(B=H.find(F).attr("data-appname")),B||H.find(w).each(function(){return!(B=this.innerText)}),B&&(A.app=B),A.app},image:function(H,A){return A.image=[],H.find("img[alt]").filter(S).forEach(function(B){v.pushy(A.image,X(B).attr("alt"))}),A.image.length||(A.image=null),A.image},hashtag:function(H,A){return A.hashtag=[],H.find("a[href*='/hashtag/']").filter(S).forEach(function(B){B.innerText[0]=="#"&&v.pushy(A.hashtag,B.innerText.slice(1))}),A.hashtag.length||(A.hashtag=null),A.hashtag}};v.port({filter_extract_field:x}),v.pose({filter_extract_field:x});function g(H,A,B){for(var Y=H.childNodes,le=0;le<Y.length;le++){var ie=Y[le];if(ie.nodeType==3){var q="";ie.parentNode&&(q=ie.parentNode.getAttribute("sfx_node_text")||"");var J=ie.nodeValue;if(J!=q){var se=J.replace(A,B);se!=J&&(ie.nodeValue=se,ie.parentNode.setAttribute("sfx_node_text",se))}}else g(ie,A,B)}}function z(H,A,B,Y){if(Y&&H.attr("sfx_filtered_forced",!0),!B||B.length==0)return!1;var le=!1;for(r(A.id,`BEGIN Filtering (next_filter=${A.next_filter+1})`),Y&&r(A.id,"Force filtering enabled");A.next_filter<B.length;A.next_filter++){var ie=B[A.next_filter];if(!X.isObject(ie)){r(A.id,`Filter #${A.next_filter+1} is empty, skipping`);continue}if(ie.enabled===!1){r(A.id,`Filter #${A.next_filter+1} (${ie.title}) Disabled`);continue}const J=`Filter #${A.next_filter+1} (${ie.title})`;r(A.id,J);var q=D(H,A,ie,J,Y);if(typeof q>"u"){r(A.id,"END Filtering because a condition could not be tested yet."),le=void 0;break}if(q&&(le=!0,ie.stop_on_match)){r(A.id,'Filter processing stopped because "Stop on Match" is active');break}}return Y&&le===void 0&&(le=!1),le!==void 0&&r(A.id,`END Filtering. Filtered=${le}`),le}function C(H,A,B){return typeof A[B]<"u"?A[B]:typeof x[B]!="function"?A[B]=`\${${B}}`:x[B](H,A)}function D(H,A,B,Y,le){if(!B||!B.rules||!B.rules.length||!B.actions)return!1;var ie=!0,q=!1,J=!1;function se(Q){return Q.replace(/^\s*\|/,"").replace(/\|\|+/g,"|").replace(/\|\s*$/,"")}if(B.rules.forEach(function(Q){if(!(J||!X.isObject(Q)||!Q.condition)){var oe,be,ve,Se,he;try{if(q&&B.match==="ANY"||!ie&&B.match==="ALL")return;var pe=!1;const xe=/^not_/.test(Q.operator||"")||!!Q.not,Ee=(Q.operator||"").replace(/not_/,""),Re=xe?"NOT ":"";if(Ee=="contains_selector"){const Me=Le=>Le.replace(/^(["'`])(.*)\1$/,"$2");r(A.id,` -> Looking for ${Re}selector: ${Q.condition.text}`);var ge=null,we=null,ke=null,Pe=Q.condition.text.replace(/:contains\((.+?)\)\s*$/,function(Le,ye){return ge=Me(ye),""}).replace(/:has-visible-text\((.+?)\)\s*$/,function(Le,ye){return we=Me(ye),""}).replace(/:hidden-within\((.+?)\)\s*$/,function(Le,ye){return ke=Me(ye)+" *",""}),Ce=!1,je=[];try{je=H.find(Pe).filter(S)}catch(Le){r(A.id," -----> Selector lookup failed:"),r(A.id," -----> "+Le)}je.length>0&&(ge||we?(be=new RegExp(ge||we),je.each(function(){return ve=(ge?X(this).innerText():X.getNodeVisibleText(this)).match(be),ve&&(Ce=!0,r(A.id," ---> Matched Text: '"+RegExp.lastMatch+"'")),A.regex_match=ve,!Ce})):ke?(je.each(function(){return X(this).parents(ke).each(function(){return X(this).css("display")=="none"&&(Ce=!0),!Ce}),!Ce}),r(A.id,` ---> ${Ce?"":"not"} found hidden within`)):Ce=!0),(Ce&&!xe||!Ce&&xe)&&(pe=!0),r(A.id,` ---> ${pe?"match!":"no match"}`)}else if(Q.target=="day"){const Me=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var tt=Me.filter((Le,ye)=>Q.condition["day_"+ye]).join(", ");r(A.id,` -> Looking for day(s) of week: ${tt}`);var a=new Date().getDay();Q.condition["day_"+a]&&(pe=!0),r(A.id,` ---> Day of week is ${Me[a]} - ${pe?"match!":"no match"}`)}else if(Q.target=="age"){r(A.id,` -> Looking for post age ${Q.operator} ${Q.condition.value} ${Q.condition.units=="h"?"hours":"days"}`);var y=(H.find("abbr[data-utime]").first().attr("data-utime")||0)*X.seconds;if(y){var L=Q.condition.value;Q.condition.units=="h"&&(L*=X.hours),Q.condition.units=="d"&&(L*=X.days);var Z=X.now()-y;(Q.operator=="gt"&&Z>L||Q.operator=="lt"&&Z<L)&&(pe=!0),r(A.id,` ---> Post age is ${Z}ms and must be ${Q.operator} ${L}ms - ${pe?"match!":"no match"}`)}else r(A.id," ---> Can't detect post time stamp - no match")}else{oe=Q.matcher=="str"?`(${c(Q.condition.text)})`:se(Q.condition.text);var re="";if(Q.target=="any"||Q.target=="any+image"){if(re=C(H,A,"all_content"),Q.target=="any+image"){var de=C(H,A,"image");re=[re,de].flat().join(" ")}}else re=C(H,A,Q.target);if(typeof re>"u")if(le)r(A.id,` ---> Rule target doesn't exist in post: ${Q.target}; no match`),re=null;else{r(A.id,` -----> Rule target doesn't exist (yet): ${Q.target}; defer filtering until later`),J=!0;return}Se=null,he=Q.condition.modifier==="I"?"":"i",re==null?(r(A.id,` -----> Rule target ${Q.target} is null: not trying to match`),pe=!1):Ee=="equals"?Se="^(?:"+oe+")$":Ee=="contains"&&Q.match_partial_words?Se=oe:Ee=="contains"?Se="(?:^|\\b|\\W)(?:"+oe+")(?:\\W|\\b|$)":Ee=="startswith"?Se="^(?:"+oe+")":Ee=="endswith"?Se="(?:"+oe+")$":Ee=="matches"?(Se=oe,he=(Q.condition.modifier||"").replace(/I/,"")):(r(A.id,` -----> Rule operator '${Q.operator}' is invalid: no match`),pe=!1),Se!==null&&(be=new RegExp(Se,he),r(A.id,` -> Testing ${Re}\${${Q.target}}.match(${be.toString()})`),Array.isArray(re)?re.every(Me=>(ve=be.exec(Me))==null):ve=be.exec(re),xe?(pe=ve==null,r(A.id,pe?" ---> NOT present (match succeeds)":` ---> Found Text: '${RegExp.lastMatch}' (match fails)`)):(pe=ve!=null,r(A.id,pe?` ---> Matched Text: '${RegExp.lastMatch}'`:" ---> no match")),A.regex_match=ve)}pe?q=!0:ie&&(ie=!1)}catch(xe){r(A.id," -----> ERROR: "+xe.message)}}}),!J)return!q||B.match=="ALL"&&!ie?!1:(B.actions.forEach(function(Q){U(H,A,Q,B,Y)}),!0)}function U(H,A,B,Y,le){const ie="==:ACTION:==";var q;if(!X.isObject(B))r(A.id,`${ie} action is empty, doing nothing`);else if(B.action=="class")q=B.selector?H.find(B.selector):H,r(A.id,`${ie} applying CSS class '${B.content}'`),q.addClass(B.content);else if(B.action=="css"){q=B.selector?H.find(B.selector):H;var J=(B.content||"").split(/\s*;\s*/);r(A.id,`${ie} applying CSS '${B.content}'`),J.forEach(function(Q){var oe=Q.split(/\s*:\s*/);oe&&oe.length>1&&q.css(oe[0],oe[1])})}else if(B.action=="replace"){r(A.id,`${ie} replacing '${B.find}' with '${B.replace}'`);const Q=new RegExp(B.find,"gi");["author","action","content","all_content"].forEach(oe=>C(H,A,oe)&&(A[oe]=A[oe].replace(Q,B.replace))),A.authorContent.concat(A.actionContent).concat(A.userContent).forEach(oe=>g(oe,Q,B.replace))}else if(B.action=="hide"){if(_e(H))return;H.hasClass("sfx_filter_hidden")?r(A.id,`${ie} would have hidden post (was already hidden)`):(H.addClass("sfx_filter_hidden"),X.publish("post/hide_filt",{$post:H,actor:le}),r(A.id,`${ie} hiding post`),Ae(Y,B,H,A))}else if(B.action=="unhide")H.hasClass("sfx_filter_hidden")?(H.find(".sfx_filter_hidden_note").remove(),H.removeClass("sfx_filter_hidden"),X.publish("post/unhide_filt",{$post:H,actor:le}),r(A.id,`${ie} unhiding post`)):r(A.id,`${ie} would have unhidden post (was not hidden)`);else if(B.action=="read")H.hasClass("sfx_post_read")?r(A.id,`${ie} would have marked post 'Read' (was already 'Read')`):(X.publish("post/mark_read",{post:H,sfx_id:A.sfx_id,save:!0,filter:!0,actor:le}),r(A.id,`${ie} marking post 'Read'`));else if(B.action=="unread")H.hasClass("sfx_post_read")?(X.publish("post/mark_unread",{post:H,sfx_id:A.sfx_id,save:!0,filter:!0,actor:le}),r(A.id,`${ie} unmarking post 'Read'`)):r(A.id,`${ie} would have unmarked post 'Read' (was not 'Read')`);else if(B.action=="move-to-tab"||B.action=="copy-to-tab"){var se=v.std_tabname(ee(B.tab,A.regex_match,H,A));r(A.id,`${ie} ${B.action} '${se}'`),X.publish(`filter/tab/${B.action.slice(0,4)}`,{tab:se,post:H,data:A,actor:le})}}function ee(H,A,B,Y){return typeof H!="string"?"":H.replace(/\$(\d+|\{[0-9A-Za-z_]+(?::[^{}]*)?\})/g,function(le){const ie=le.replace(/\${?([^}]+)}?/,"$1");var[q,J,se,Q]=ie.split(":");se==""&&Q==""&&(se=":");var oe="";return A&&A[q]!=null?oe=A[q]:A&&q=="any"?oe=A.slice(1).find(be=>be):A&&q=="all"?oe=A.slice(1).join(se):(oe=C(B,Y,q),Array.isArray(oe)&&(oe=oe.join(","))),oe=typeof oe=="string"?oe:"",Number.isInteger(Number(J))&&(oe=oe.slice(0,J)),oe})}function _e(H){return!!H.find('a[href*="/socialfixer/"]').length}const ue=function(H){const A=new MutationObserver(function(B){for(const Y of B||[]){for(const le of Y.addedNodes||[])le.nodeType!=H.TEXT_NODE&&H.parentNode.append(le);for(const le of Y.removedNodes||[])le.nodeType==H.TEXT_NODE&&H.append(le),X.support_note("hidden_note","2021-12 layout derangement bug handled")}A.disconnect()});A.observe(H,{childList:!0})},Ae=function(H,A,B,Y){const le=B.hasClass("sfx_permalink_post"),ie=B.hasClass("sfx_popup_post");if(!A.show_note&&!le&&!ie)return;(le||ie)&&(r(Y.id,ie?"Post is in popup: make initially visible":le?"Post named in permalink: make initially visible":"What a surprise"),B.addClass("sfx_filter_hidden_show"));const q=FX.option("disable_tooltips")?"":ie?` title="It is visible here because it's in a comment viewing popup"`:le?` title="It is initially visible here because this page's address mentions it"`:' title="To remove these hidden-post notes, edit Hide Posts or per-filter settings"',J=A.css?` style="${A.css}"`:"",se=A.custom_note?ee(A.custom_note,Y.regex_match,B,Y):`Post hidden by filter "${H.title}"${f}`,Q=A.custom_nyet?ee(A.custom_nyet,Y.regex_match,B,Y):`Post was hidden by filter "${H.title}"${u}`,oe=X(FX.oneLineLtrim(`
            <div class="sfx_filter_hidden_note"${J}${q}>
                <span class="sfx_filter_hider_note">${se}</span>
                <span class="sfx_filter_hider_nyet">${Q}</span>
            </div>
        `));oe.on("click",function(){B.toggleClass("sfx_filter_hidden_show")}),B.attr("sfx_post")==1&&ue(oe[0]),B.prepend(oe)};X.publish("post/action/add",{section:"filter",label:"Edit Filters",message:"menu/options",data:{section:"Filters"}}),X.publish("post/action/add",{section:"filter",label:"Filter Debugger",message:"post/action/filter/debug"}),X.subscribe("post/action/filter/debug",function(H,A){function B(Q){if(typeof Q=="function")return'"[function]"';try{return JSON.stringify(Q,null,3)}catch(oe){return/circular/.test(oe)?'"[circular]"':`"[ERR: ${oe}]"`}}function Y(Q){return`{
    `+Object.keys(Q).filter(oe=>Q[oe]!==void 0).map(oe=>`"${oe}":${B(Q[oe])}`).join(`,
    `)+`
}`}const le=X("#"+A.id);Object.keys(x).forEach(Q=>C(le,l[A.id],Q));var ie=Y(l[A.id],null,3);ie=ie?ie.replace(/\n/g,"<br>"):"No Data";var q=O[A.id],J="No Trace";q&&(J=q.slice(1).map(Q=>X.htmlEncode(Q)).join("<br>").replace(/&lt;b&gt;/g,"<b>").replace(/&lt;\/b&gt;/g,"</b>"));var se=FX.oneLineLtrim(`
            <div>This popup gives details about how this post was processed for filtering.</div>
            <div class="sfx_bubble_note_subtitle">Filtering Trace</div>
            <div class="sfx_bubble_note_data">${J}</div>
            <div class="sfx_bubble_note_subtitle">Raw Extracted Post Data</div>
            <div class="sfx_bubble_note_data">${ie}</div>
        `);Ne(se,{position:"top_right",title:"Post Filtering Debug",close:!0})})}),X.ready("post_tabs",function(){var f={};FX.add_option("always_show_tabs",{section:"Advanced",title:"Always Show Tab List",description:"Always show the list of Tabs in the Control Panel, even if no posts have been moved to tabs yet.",default:!1});const u=w=>w?w.post_count-w.hide_count:0,l=w=>w!="All Posts"&&w!="<Holding Tank>",O=w=>l(w)&&w!="Filtered Feed",o=(w,x)=>w.find(g=>l(g)&&u(f.tabs[g])>=x&&(V(f.tabs[g]),!0));var r=!1;const c=function(){const w=document.querySelector("[sfx_post]")!=null;r&&!w&&X.publish("posts/reset"),r=w,r&&f.seek_initial&&(u(f.selected_tab)?V(f.selected_tab):u(f.tabs["Filtered Feed"])?V(f.tabs["Filtered Feed"]):o(f.sorted(),3))},_=setInterval(c,.5*X.seconds);v.pose({have_posts:r,have_posts_watcher:c,post_watcher_id:_});const m=w=>typeof w=="string"&&w.length?w:"[nameless]";v.port({std_tabname:m});var S=[];const b=function(){FX.option("filters_enabled")&&FX.option("always_show_tabs")&&Object.values(FX.storage("filters")||[]).forEach(w=>X.isObject(w)&&w.enabled&&Object.values(w.actions||[]).forEach(x=>X.isObject(x)&&(x.action=="copy-to-tab"||x.action=="move-to-tab")&&x.tab&&!x.tab.match(/\$(\d+|\{[0-9a-z_:]+\})/)&&v.pushy(S,m(x.tab))))};b(),v.pose({collect_static_tabs:b,tab_staticnames:S});var R,j,N;const h=function(){X("[class*=sfx_filter_tab_]").forEach(w=>{w.classList.forEach(function(x){/^sfx_filter_tab_(\d+)$/.test(x)&&$(RegExp.$1,X(w),1)})})};v.pose({repopulate_tabs:h});const E=function(){f={tab_count:0,tabs:{},selected_tab:null,seek_initial:!0,seek_permalink:!0,sorted:()=>Object.keys(f.tabs).sort((w,x)=>f.tabs[w].order<f.tabs[x].order?-1:1),cp_requested:!1},R=[],j=!1,N=!1,r=!1,v.pose({tab_data:f,tab_index:R}),FX.option("always_show_tabs")&&ae().then(()=>X.publish("cp/always_show")),h()},$=function(w,x,g){const z=f.tabs[R[w]];if(!z)return X.support_note("adj_counts",`post ${x[0].id} in unknown tab number ${w}`);const C=x[0].classList.contains("sfx_post_read"),D=x[0].classList.contains("sfx_filter_hidden"),U=/\d/.test(g);U&&(z.post_count+=g),U&&C&&(z.read_count+=g),U&&(C||D)&&(z.hide_count+=g),g=="R"&&(z.read_count+=C?1:-1),g=="R"&&!D&&(z.hide_count+=C?1:-1),g=="F"&&!C&&(z.hide_count+=D?1:-1)};X.subscribe(["post/hide_read","post/unhide_read"],function(w,x){const g=x.$post,z=w==="post/hide_read",C=`${z?"M":"Unm"}arked 'Read' by: ${x.actor}`;X.publish("log/postdata",{$post:g,message:C}),z&&g.hasClass("sfx_popup_post")&&(X.publish("log/postdata",{$post:g,message:"Keep visible since post is in comment viewer popup"}),g.addClass(" sfx_show_read")),g[0].classList.forEach(function(D){/^sfx_filter_tab_(\d+)$/.test(D)&&$(RegExp.$1,g,"R")})}),X.subscribe(["post/hide_filt","post/unhide_filt"],function(w,x){const g=`${w=="post/hide_filt"?"H":"Unh"}idden by: ${x.actor}`;X.publish("log/postdata",{$post:x.$post,message:g}),x.$post[0].classList.forEach(function(z){/^sfx_filter_tab_(\d+)$/.test(z)&&$(RegExp.$1,x.$post,"F")})});const P=function(w,x={}){w[0].classList.forEach(function(g){/^sfx_filter_tab_(\d+)$/.test(g)&&(Number(RegExp.$1)||x.all_posts)&&($(RegExp.$1,w,-1),w.removeClass(g))})};X.subscribe("post/remove_dom",function(w,x){X.publish("log/postdata",{$post:x.$post,message:"Removed from DOM by FB"}),P(x.$post,{all_posts:!0})}),X.subscribe("post/filtered",function(w,x){x.$post.hasClass("sfx_filter_tab_1")&&(x.$post.removeClass("sfx_filter_tab_1"),$(1,x.$post,-1),F("Filtered Feed",x.$post,"Moved","end of filtering")),f.seek_permalink&&x.$post.hasClass("sfx_permalink_post")&&f.sorted().filter(g=>l(g)).find(g=>{if(x.$post.hasClass(`sfx_filter_tab_${f.tabs[g].number}`))return f.seek_permalink=!1,g!=f.selected_tab.name&&!x.$post.hasClass(`sfx_filter_tab_${f.selected_tab.number}`)&&(V(f.tabs[g]),X.publish("log/postdata",{$post:x.$post,message:`Switched to tab '${g}' to expose this permalink post`})),!0})}),v.selected_tab_selector="";const V=function(w){f.seek_initial=!1,f.selected_tab!=w&&(f.selected_tab&&(f.selected_tab.selected=!1),f.selected_tab=w,w.selected=!0,v.selected_tab_selector=`.sfx_filter_tab_${w.number}`,X.css(`[sfx_post]:not(.sfx_filter_tab_${w.number}):not(.sfx_popup_post) { display: none; }`,"sfx_filter_tabselect"),X.publish("filter/tab/scroll_to_top"))};X.subscribe("filter/tab/next",function(){const w=f.sorted(),x=w.findIndex(g=>f.tabs[g].selected);o([...w.slice(x+1),...w.slice(0,x)],1)});const W=function(){if(X.find(`.${v.instance} [id=sfx_cp_filter_tabs]`))return;X.publish("cp/section/add",{name:'Filter Tabs <span class="sfx_count">(unread / total)</span>',id:"sfx_cp_filter_tabs",order:50,help:`The Filtered Feed shows the filtered view of the feed, with posts removed that have been moved to tabs.

The All Posts view shows every post in the feed, even if it has been filtered to a tab.`});const w=FX.oneLineLtrim(`
            <div class="sfx_cp_tabs" style="max-height:60vh;overflow:auto;">
                <div v-for="tab in tabs | orderBy 'order'" v-if="tab.name!='<Holding Tank>'" class="sfx_filter_tab" v-bind:class="{'sfx_tab_selected':tab.selected,'sfx_tab_occupied':(tab.post_count>tab.read_count)}" @click="select_tab(tab)">
                    {{tab.name}}&#32;
                    <span class="sfx_count">
                        (
                        <span class="sfx_unread_count" v-if="tab.read_count>0">
                            {{tab.post_count-tab.read_count}}/
                        </span>
                        {{tab.post_count}})
                    </span>
                </div>
            </div>
        `),x={select_tab:V};X.when(`.${v.instance} [id=sfx_cp_filter_tabs]`,function(){X.find(`.${v.instance} .sfx_cp_tabs`)||qe(`.${v.instance} [id=sfx_cp_filter_tabs]`,w,f,x)})};var G,ne;const ae=async function(){if(G||(G=new Promise(w=>ne=w)),j)return G;j=!0,W(),X.when(`.${v.instance} [id=sfx_cp_filter_tabs]`,function(){M("All Posts","a"),M("<Holding Tank>","b"),V(M("Filtered Feed","c")),f.seek_initial=!0,S.forEach(w=>M(w)),N=!0,ne&&ne(),j=G=ne=null})},M=function(w,x){if(w=m(w),!f.tabs[w]){const g=f.tab_count++,z=`${x||"z"}-${w}`;Vue.set(f.tabs,w,{name:w,order:z,number:g,selected:!1,post_count:0,read_count:0,hide_count:0}),R[g]=w,!f.cp_requested&&O(w)&&(f.cp_requested=!0,X.publish("cp/show"))}return f.tabs[w]},F=function(w,x,g,z){if(!N){ae().then(()=>F(w,x,g,z));return}const C=M(w),D="sfx_filter_tab_"+C.number;x.hasClass(D)||(x.addClass(D),$(C.number,x,1),X.publish("log/postdata",{$post:x,message:`${g} to tab '${w}' by: ${z}`}))};X.subscribe("filter/tab/scroll_to_top",function(){X(v.selected_tab_selector).each(function(){if(this.getBoundingClientRect().height)return this.scrollIntoView(!0),setTimeout(()=>window.scrollBy(0,-150),.2*X.seconds),!1})}),X.subscribe(["filter/tab/move","filter/tab/copy"],function(w,x){var g="Copied";w=="filter/tab/move"&&(P(x.post),g="Moved"),F(x.tab,x.post,g,x.actor)}),X.subscribe_backlog("post/add",function(w,x){const g=x.$post;F("<Holding Tank>",g,"Added","initial post processing"),F("All Posts",g,"Added","initial post processing")}),X.subscribe_backlog("posts/reset",E),E()}),X.ready("post_font",function(){const f={},u="[sfx_post] *",l="[sfx_post] .S2F_font_400.S2F_col_tx1:not(.S2F_txal_left) *";FX.add_option("post_font_size_2",{section:"General",title:"Font: Post Font Size",description:"Set a custom size (in pixels) for post text, including comments.",type:"number",min:5,default:"",live:O}),FX.add_option("post_font_family_2",{section:"General",title:"Font: Post Font Family",description:"Set a custom font to be used for post text, including comments.",type:"text",default:"",live:O}),FX.add_option("post_comment_font_size_2",{section:"General",title:"Font: Post Comment Font Size",description:"Set a custom size (in pixels) for post comments only.",type:"number",min:5,default:"",live:O}),FX.add_option("post_comment_font_family_2",{section:"General",title:"Font: Post Comment Font Family",description:"Set a custom font for post comments only.",type:"text",default:"",live:O});function O(o,r){f[r]=o;var c=[];+f.post_font_size_2>=5&&c.push(`${u} { font-size: ${f.post_font_size_2}px !important; }`),f.post_font_family_2&&c.push(`${u} { font-family: "${f.post_font_family_2}" !important; }`),+f.post_comment_font_size_2>=5&&c.push(`${l} { font-size: ${f.post_comment_font_size_2}px !important; }`),f.post_comment_font_family_2&&c.push(`${l} { font-family: '${f.post_comment_font_family_2}' !important; }`),X.css(c.join(`
`),"sfx_post_font_css")}}),X.ready("post_processor",async function(){const f=[".S2F_fldr_col [role=main] ~ [role=complementary].S2F_bg_surf > .S2F_just_spbt"].join(","),u=["[role=article]:not(.S2F_pos_rel)","[aria-posinset]","div[aria-describedby].S2F_outl_none:not(.S2F_disp_infl):not(.S2F_zi_0):not(.S2F_pos_rel)","div.S2F_disp_flex.S2F_fldr_row.S2F_pos_rel.S2F_hei_100.S2F_alini_cent.S2F_just_cent",f].join(","),l=['[class*="-mode"].S2F_pos_rel [aria-labelledby] *'].join(","),O=["[aria-labelledby]"].join(","),o="a[aria-label]",r=["[data-pagelet*=Marketplace] .S2F_disp_cont .S2F_vis_vis.S2F_flex_shr1.S2F_flex_0px[style*=width]",".S2F_alinc_flst.S2F_fldr_row.S2F_just_flst.S2F_flex_wrap > .S2F_vis_vis.S2F_flex_shr1.S2F_flex_0px[style*=width]"].join(","),c="a[role=link]",_="[sfx_post]";var m=!0,S=X.logger("post_processor"),b=1,R=10,j=0;FX.add_option("max_post_load_count",{section:"Advanced",title:"Post Loading Pause",description:"How many posts to load before pausing.  To save memory, Facebook clears posts from the top of the page as you scroll down.  Pausing allows you to view posts in Social Fixer filter tabs before they get cleared.",type:"text",default:R,live:q=>R=q||R}),FX.on_content_loaded(function(){FX.on_content_removed(function(q){q.probe("[sfx_post]:not(.sfx_removing)").forEach(J=>X.publish("post/remove_dom",{id:J.id,sfx_id:J.getAttribute("sfx_id"),$post:X(J).addClass("sfx_removing")}))}),FX.on_content_inserted(function(q){q.closest("form").length||V(q)}),V(X(document.body))});const N=function(){m&&(X(_).length==0&&(j=0,b=1,X.pubsub_clear_backlog("post/add"),X.pubsub_clear_backlog("posts/reset"),X.publish("posts/reset")),m=!1)};var h=u,E=o;X.subscribe_backlog("context/ready",function(){FX.context.type=="marketplace"?(h=r,E=c):(h=u,E=o),V(X(document.body))});const $=function(){const q=X(this);return q.is(_)?!1:q.attr("aria-posinset")?!0:q.parents("[sfx_post],[aria-posinset],[role=article]").length||!this.textContent&&q.find("[role=progressbar]").length?!1:!!this.querySelector(E)},P=function(q){const J=X(q);if(J.is(l)){const se=J.nearby(O);return se.addClass("sfx_popup_post"),se[0]}return q},V=q=>q.probe(h).filter($).toArray().map(P).forEach(W);async function W(q){N();const J=q.id||(q.id="sfx_post_"+b);q.setAttribute("sfx_post",b),X.publish("log/postdata",{id:J,message:`processing post id=${J}, sfx_post=${b}`}),ie(X(q),J).then(function(se){q.setAttribute("sfx_id",se),X.publish("log/postdata",{id:J,message:"Calling post/add"}),X.publish("post/add",{id:J,selector:"#"+J,sfx_id:se,$post:X(q)})}),b++,j++,j>=R&&ae()}v.pose({post_selector:h,post_verifier:E,find_and_process_posts:V,process_post:W});const G=["[role=feed] div.S2F_wid_1.S2F_hei_1:empty"].join(","),ne=function(){var q=X(".suspended-feed").closest(".S2F_ovfa_n").parent().children(":empty");return q.length||(q=X(G).parent()),q},ae=function(){var q=ne();if(S(`Max post count (${R}) reached. Loaded ${j}. Trying to prevent infinite scroll.`),!q.length){S("Couldn't identify infinite scroll triggers definitively. Aborting.");return}q.addClass("sfx_scroll_pause");var J=X(`[id=sfx-feed-pager].${v.instance}`);try{J.length||(J=X(`<div id="sfx-feed-pager" class="sfx_info sfx-pager ${v.instance}" style="cursor:pointer;"><b>Post Loading Paused &ndash; Social Fixer ${v.version}</b><br><b><u>Click to continue loading</u></b> about <input class="sfx_input" type="number" min="1" value="${R}" style="width:7ch;" size="4" sfx-option="max_post_load_count"> more posts.<br></div>`),FX.attach_options(J),J.find("input").click(function(){return!1}),J.click(function(){J.remove(),X(".sfx_scroll_pause").removeClass("sfx_scroll_pause"),j=0})),X(".sfx_scroll_pause").last().after(J)}catch(Q){alert(Q)}const se=[".suspended-feed ~ [role=article]"].join(",");X(se).addClass("sfx_scroll_pause")};v.pose({find_infinite_scroll_triggers:ne,pause_infinite_scroll:ae}),FX.on_page_unload(function(){m=!0});const M={bubbles:!0,screenX:100,screenY:100,clientX:100,clientY:100};function F(q){var J=new PointerEvent("pointerover",M);J.sfx_event=!0,q.dispatchEvent(J)}function w(q){var J=new PointerEvent("pointerout",M);J.sfx_event=!0,q.dispatchEvent(J)}const x=['span[id] a.S2F_font_400[role=link][tabindex="0"]:not([href*="/user/"])','span[id] a.S2F_col_tx2[role=link][tabindex="0"]:not([href*="/user/"])'].join(","),g=['a[href*="/post_insights/"].S2F_alini_stre.S2F_bb_dark.S2F_fldr_row'].join(","),z=["a.S2F_trans_n",".S2F_alini_stre > a.S2F_disp_inlb"].join(","),C=!0,D={B:{count:0,msg:"found by marketplace Buy/sell item ID",selector:c,test:()=>FX.context.type=="marketplace",Alt:C},E:{count:0,msg:"found by event-ID",selector:'a[href*="/events/"]:not([href*="/create/"])',Alt:C},D:{count:0,msg:"found by donate-ID",selector:'a[href*="/donate/"]',Alt:C},N:{count:0,msg:"found by post insights",selector:g,Alt:C},C:{count:0,msg:"found by comment link",selector:'[sfx_post] ul a[href*="comment_id="]:not([aria-hidden=true])',Alt:C},S:{count:0,msg:"found by mediaset-ID",selector:z,Alt:C},V:{count:0,msg:"found by page URL"},U:{count:0,msg:"found by JS-URL",selector:"a"},I:{count:0,msg:"found by JS-ID-1"},J:{count:0,msg:"found by JS-ID-2",selector:".S2F_oflx_hid.S2F_btl_rad0"},K:{count:0,msg:"found by JS-ID-3"},M:{count:0,msg:"found by mouseover",selector:x},T:{count:0,msg:"not found: no timestamp",fail:!0,track:[]},P:{count:0,msg:"not found: no permalink",fail:!0,track:[]}},U=[{selector:".S2F_bt_divid,.S2F_mb_6",path:"edb,id"},{selector:"div.S2F_flgr_1",path:"stI"},{selector:"div.S2F_flgr_1",path:"tent"},{selector:"div.S2F_flgr_1",path:"edb.*D"},{selector:"div",path:"dere,__id"},{selector:"div",path:"edb,id"},{selector:"div",path:"erS,edb.*D"},{selector:"div",path:"tor,t_i"}];function ee(q,J,se){return(!se||se==="0")&&(se=null),(se||D[q].fail)&&(D[q].fail?D[q].count--:D[q].count++,"track"in D[q]&&D[q].track.push([J,X("#"+J),X("#"+J)[0].outerHTML]),X.support_note("post ID methods",Object.entries(D).map(Q=>Q[0]+":"+Q[1].count).join(", ")),X.publish("log/postdata",{id:J,message:"ID "+D[q].msg})),se}const _e=q=>{if(Number(q))return q;if(/(ZmVlZGJhY2[a-zA-Z0-9+/]*=*)/.test(q)&&(q=atob(RegExp.$1),/dback:(\d+)/.test(q)))return RegExp.$1},ue=q=>{let J;return U.some(({selector:se,path:Q})=>(q.probe(se).toArray().some(oe=>(id_mine=v.frefpath(oe,"eac.*ibe,etu,end.*rop",Q),J=_e(id_mine),!!J)),!!J)),J};function Ae(q,J,se){if((se=ue(q))&&ee("K",J,se))return se;for(var Q of Array.from(q.find(D.J.selector))){const oe=Q.children[0],be=v.frefpath(oe,"eac.*ibe,hil,hil,hil,pen.*ops,edb","id");try{if(se=atob(be).replace(/\D*/,""),Number(se)&&ee("J",J,se))return se}catch(ve){}}for(Q of Array.from(q.find(D.U.selector))){const oe=v.fref(v.fref(Q.parentElement,/eac.*ibe/).child,/end.*rop/),be=v.fref(oe,/tor.*rl$/),ve=v.fref(oe,/^_*a+d.?id$/i);if((se=/www.facebook.com/.test(be)&&ee("U",J,le(be)))||(se=/^\d{6,}(?:|:\d{1,2})$/.test(ve)&&ee("I",J,`-${ve}`)))return se}return null}function H(q,J,se){return(se=le(location.href))&&ee("V",J,se)?se:null}function A(q,J,se){for(const[oe,be]of Object.entries(D))if(be.Alt&&(!be.test||be.test(q))){for(var Q of Array.from(q.find(be.selector)))if(se=ee(oe,J,le(Q.href)))return se}return null}const B=q=>q&&q!=="#"&&q!==location.href+"#";async function Y(q,J){return new Promise(async function(se){var Q=null;if((Q=Ae(q,J,0))||(Q=H(q,J,0))||(Q=A(q,J,0)))return se(Q);var oe,be=!1;q.addClass("sfx_touch");for(var ve=0;ve<40&&(oe||ve<5);++ve){if(oe||X.publish("log/postdata",{id:J,message:`Look for timestamp (${ve})`}),oe=q.find(D.M.selector)[0],oe){var Se=B(oe.href)?oe.href:oe.getAttribute("href");if(B(Se)&&(X.publish("log/postdata",{id:J,message:`Found href '${Se}' (${ve})`}),Q=ee("M",J,le(Se))))break;if([0,1,3,5,8,11,15,20,25,31,39].includes(ve)){be=!0,F(oe);const he=B(Se)?"better ":"";X.publish("log/postdata",{id:J,message:`Triggering mouseover to find ${he}href (${ve})`}),w(oe)}}if(await X.sleep(.2),Q=Ae(q,J,0))break}be&&(w(oe),X.publish("log/postdata",{id:J,message:"Triggering mouseout"})),setTimeout(()=>q.removeClass("sfx_touch")),Q||ee(oe?"P":"T",J,null),se(Q)})}function le(q){const J=new URL(q,location.origin+location.pathname);let se="";if(/\/groups\/(\d+)($|\/)/.test(J.pathname)&&(se=RegExp.$1),/\/profile\.php/.test(J.href)||/\/groups\/[^/]*\/user\//.test(J.pathname)||/\/donate\/[\d:]{6,}\/$/.test(J.pathname)&&/fundraiser_source=feed/.test(J.search))return null;if(/[/?&=](pfbid0[1-9A-HJ-NP-Za-km-z]{20,75}l)\b/.test(J.href))return RegExp.$1;if(/comment_id=((?:Y29|Q09|Q29)[A-Za-z0-9]{20,75}[=%3Dd]{0,12})(?:$|&)/.test(J.search))try{const Q=atob(decodeURIComponent(RegExp.$1)).toLowerCase();if(/comment:(\d{6,})[:_]/.test(Q))return RegExp.$1}catch{}return(/\/(?:posts|permalink|video|stories|marketplace\/item)\/(\d{6,}(?:|:\d{1,2}))(?:$|\/)/.test(J.pathname)||J.pathname=="/watch/"&&/\bv=(\d{6,})/.test(J.search)||/permalinks?[=:](\d{6,}(?:|:\d{1,2}))(?:$|\D)/.test(J.href)||/(?:fbid|post_id)[=:](\d{6,}(?:|:\d{1,2}))(?:$|\D)/.test(J.href)||/\Wpcb\.(\d{6,}(?:|:\d{1,2}))(?:$|\D)/.test(J.href)||/(?:\d:|\/)(\d{6,}(?:|:\d{1,2}))\/?$/.test(J.pathname)&&RegExp.$1!=se||/[=:/](\d{6,}(?:|:\d{1,2}))(?:$|\/)/.test(J.pathname)&&RegExp.$1!=se||/[=:](\d{6,}(?:|:\d{1,2}))(?:$|\D)/.test(J.href)||/set=[^&?/]*a\.(\d{6,}(?:|:\d{1,2}))/.test(J.search))&&/^(\d+:?\d{0,2})$/.test(RegExp.$1)?RegExp.$1.replace(/:.*/,""):null}async function ie(q,J){try{return Y(q,J).then(function(se){return se=!se||se==="0"?"no-ID":se.replace(/:.*/,""),(RegExp(`(^|\\D)${se}(\\D|$)`).test(decodeURIComponent(location.href))||q.is(f))&&X.publish("post/permalink",{$post:q,id:J,sfx_id:se,actor:"post processor"}),X.publish("log/postdata",{id:J,message:"get_post_id="+se}),se})}catch(se){return X.publish("log/postdata",{id:J,message:"get_post_id failed: "+se.toString()}),"no-ID"}}v.pose({extract_post_id_from_url:le,get_post_id:ie,found_ids:D})}),X.ready("regex_tester",function(){X.subscribe("test/regex",function(f,u){var l=u.text||"",O=u.modifier||"",o=FX.oneLineLtrim(`
        <div draggable="false">Mozilla Developer Network: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">Regular Expressions Documentation</a></div>
        <div draggable="false" class="sfx_label_value">
            <div>Expression: </div>
            <div><input id="sfx_regex_tester_expression" class="sfx_input" size="25" value="${l}"></div>
        </div>
        <div draggable="false" class="sfx_label_value">
            <div>Modifiers: </div>
            <div><input id="sfx_regex_tester_modifier" class="sfx_input" size="5" value="${O}"> [ g i m ]</div>
        </div>
        <div draggable="false"><b>Test String:</b><br>
            <textarea id="sfx_regex_tester_string" style="width:250px;height:75px;"></textarea>
        </div>
        <div draggable="false">
            <input type="button" class="sfx_button" value="Test" onclick="document.getElementById('sfx_regex_tester_results').innerHTML=document.getElementById('sfx_regex_tester_string').value.replace(new RegExp('('+document.getElementById('sfx_regex_tester_expression').value+')',document.getElementById('sfx_regex_tester_modifier').value),'<span style=&quot;background-color:cyan;font-weight:bold;&quot;>$1</span>');">        
        </div>
        <div draggable="false">
            <div><b>Results:</b></div>
            <div id="sfx_regex_tester_results" style="white-space:pre;"></div>
        </div>

    `);Ne(o,{position:"top_right",title:"Regular Expression Tester",close:!0})})}),X.ready("sfx_collision",function(){performance&&performance.timing&&performance.timing.domLoading&&X.now()-performance.timing.domLoading>10*X.seconds||X.when(v.badge_sel,function(f){setTimeout(function(){var u=function(O,o){alert(`WARNING: 2+ copies of Social Fixer are running!
- ${v.buildstr}
- ${O}
For best results, please run only one at a time!
=> Back up settings: http://tiny.cc/sfx-saveprefs
=> Remove extra copies: http://tiny.cc/sfx-only-1
=> Help/Support: https://socialfixer.com/support${o?`
`+o:""}`),X.support_note("sfx_collision",`Other: '${O}'`)},l=f.attr("old_buildstr");f.attr("old_buildstr",null),!/\(disabled\)$/i.test(l)&&l&&l!="old"&&l!=v.buildstr&&u(l)},8*X.seconds)})}),FX.on_options_load(function(){X.storage.get("stats",{},function(f){var u=X.today();u>(f.last_ping||0)&&(f.last_ping=u,X.ajax("https://SocialFixer.com/version.txt",function(){X.storage.set("stats","last_ping",u)}))},!0)}),FX.add_option("stay_on_page",{section:"Experiments",title:"Stay On Page",description:"Prevent the browser from leaving the current Facebook page when you click on a link",default:!1}),X.subscribe_backlog("context/ready",function(){FX.on_options_load(function(){FX.context.type=="messages"||FX.context.id=="settings"||FX.option("stay_on_page")&&setTimeout(function(){X.inject(function(){window.requireLazy(["Run"],function(f){f.onBeforeUnload(function(){return"Social Fixer: Stay On Page is protecting you from leaving this page before you intended to.  Choose whether you want to stay or leave."},!1)})})},1.5*X.seconds)})});const rt=function(f,u,l){u=u=="right"?"right":"left";var O=X(FX.oneLineLtrim(`
        <div class="sfx_sticky_note sfx_sticky_note_${u}" style="visibility:hidden">
            <div>${l}</div>
            <div class="sfx_sticky_note_arrow_border"></div>
            <div class="sfx_sticky_note_arrow"></div>
        </div>
    `)).appendTo(X(f).first());return O.css({marginTop:-(O[0].offsetHeight/2)+"px",visibility:"visible"})};X.ready("storage_check",function(){X.task("storage_check",1*X.days,function(){FX.on_options_load(function(){setTimeout(function(){var f=X.now(),u=null,l=function(O){u=!1;var o="";O&&(o="<br><br>Error: "+O);const r=`<br><br>${v.user_agent}<br>Social Fixer ${v.buildstr}`;Ne("Social Fixer may have trouble saving your settings. If your settings won't stick, please let us know. See 'Support' under Options for contact info."+o+r,{close:!0,title:"Extension Storage Warning",style:"width:300px;"}),X.support_note("storage_check",O)};setTimeout(function(){u===null&&l("Timeout waiting for storage response")},8*X.seconds);try{X.storage.set("storage_check","storage_checked_on",f,function(){try{X.storage.get("storage_check",null,function(O){if(!O||!O.storage_checked_on||Math.abs(f-O.storage_checked_on)>60*X.seconds){var o=null;return O?O.storage_checked_on?Math.abs(f-O.storage_checked_on)>60*X.seconds&&(o="stats.storage_checked_on = "+Math.abs(f-O.storage_checked_on)):o="stats.storage_checked_on doesn't exist":o="No stats",l(o)}u=!0},!1)}catch(O){l(O)}})}catch(O){l(O)}},1e3)})})});const at=function(f){return Object.values(f||[]).some(u=>X.isObject(u)&&!!u.id)},Oe=function(f,u){var l={};Object.values(u||[]).forEach(O=>X.isObject(O)&&O.id&&(l[O.id]=!0)),Object.values(f||[]).forEach(O=>X.isObject(O)&&(O.subscribed=!!l[O.id]))},lt=function(f,u,l){typeof f=="string"&&(f=[f,f,f]);const[O,o,r]=f;X.ajax(`https://matt-kruse.github.io/socialfixerdata/${O}.json`,function(c){c&&c[o]&&c[o].length>0&&Oe(c[o],u),l&&l(c&&c[o]?c[o]:null)})},et=function(f,u,l,O){lt(f,u,function(o){if(!at(u))return l?l(o,!1):null;typeof f=="string"&&(f=[f,f,f]);const[r,c,_]=f;var m=r!==r,S={};for(var b of Object.keys(u)){var R=u[b];X.isObject(R)&&R.id&&(S[R.id]=R)}Object.values(o||[]).forEach(function(j){if(X.isObject(j)){var N=S[j.id];if(N){typeof O=="function"&&(O(j),O(N));var h,E=!1;for(h in j)h=="subscribed"||h=="enabled"||c=="filters"&&h=="actions"&&j.configurable_actions&&N.custom_actions||c=="filters"&&h=="stop_on_match"||v.data_equals(N[h],j[h])||(N[h]=j[h],E=!0);E&&(N.subscription_last_updated_on=X.now(),m=!0)}}}),m&&X.storage.save(_,X.clone(u)),l&&l(o,m)})};v.pose({update_subscribed_items:et}),X.ready("unread_filtered_messages",function(){const f="unread_filtered_messages",u="Check For Filtered Chat";FX.add_option("check_unread_filtered_messages",{title:u,description:"Facebook Messenger does not alert you about chat messages from outside your network. Although mostly spam, there can be hidden gems. This feature alerts you about unread filtered chat messages.",default:!0}),FX.on_option("check_unread_filtered_messages",function(){X.subscribe("unread_filtered_messages/visit",function(){const l=(r,c=0)=>r[c]&&X.when(r[c].selector,_=>(l(r,c+1),r[c].action(_)),.1*X.seconds,50),O=r=>r.first().click();l([{selector:"[role=banner] [role=navigation] [role=button] ~ [aria-hidden=true]",action:O},{selector:"[role=dialog] [role=grid] [role=button].S2F_bg_trans:not(.S2F_bb_dark)",action:O},{selector:"div[role=menuitem]:not([aria-haspopup])",action:O},{selector:"[role=tab] ~ div[role=tab][aria-selected=false]",action:O}])}),X.subscribe_backlog("fb_dtsg/ready",function(l,O){const o=`https://mbasic.facebook.com/messages/?folder=other&fb_dtsg=${O.fb_dtsg}`,r=[{ajax_func:v.ajax_cor,name:"background script ajax"},{ajax_func:X.ajax,name:"content script ajax"}];v.pose({unread_messages_data:r});let c="starting up";const _=X.logger(f),m=R=>(_(R),X.support_note(f,R),c=R),S=(R,j="You have unread filtered chat")=>X.publish("menu/add",{section:"actions",item:{html:`<span id="sfx_unread_jewel_count"></span><span>${j}</span>`,message:"unread_filtered_messages/visit",tooltip:R}}),b=function(R){const j=r[R];var N=0,h=!1;j.ajax_func&&j.ajax_func(o,function(E){if(j.url=o,j.result=E,typeof E!="string")m(`${j.name}: non-string result ('${typeof E}')`);else if(E.length<100)m(`${j.name}: short result: '${E}'`);else if(!/<span/i.test(E))m(`${j.name}: result does not look like HTML`);else if(!/href.{1,40}messages\/\?folder/i.test(E))m(`${j.name}: result does not look like messages site`);else{var $=E.match(/\.([a-zA-Z0-9_]+)\s*{[^}]*font-weight[^:]*:{?[^};]*bold\s*;\s*{?}/);if($&&$.length>1){var P=$[1];$=E.match(RegExp(`<h3[^>]*class=.[^'"]*\\b${P}\\b`,"g")),$&&(N=$.length),h=!0,m(`succeeded by strategy '${j.name} direct parsing'`)}else{m(`${j.name}: class:bold CSS not found`);try{const V=X(`<div>${E}</div>`);X("body").append(V),V.find('h3 > a[href^="/messages"]').forEach(W=>/[6-9]\d\d|[1-9]\d{3,}|bold/i.test(getComputedStyle(W).fontWeight)&&N++),V.remove(),h=!0,m(`succeeded by strategy '${j.name} DOM injection'`)}catch(V){m(`${j.name}: DOM injection failed: '${V}'`)}}}if(N&&(S(`Facebook Messenger does not alert you about chat messages from outside your network, so Social Fixer does! To turn this off: wrench > Options > ${u}`),X.publish("notify/set",{target:`.${v.instance} [id=sfx_unread_jewel_count]`,parent_target:v.badge_sel,count:N})),!h&&r[++R])return b(R);!h&&!r[R]&&(S(`Click to check (automated check failed: ${c})`,u),console.log("SFx: unread_messages failed, debug data follows",{unread_messages_data:r}))})};b(0)})})});var run_modules=function(){X.ready(),FX.css_dump(),FX.fire_content_loaded()};if(!prevent_running){X.beforeReady()!==!1&&run_modules();var bootstrap=function(){X.storage.get(["options","filters","tweaks","hiddens","postdata","friends","stats","tasks","messages"],[{},[],[],{},{},{},{},{},{}],function(f,u){u?(console.log("Social Fixer Preferences could not be loaded from storage."),console.log(u)):X.beforeReady(f)!==!1&&(run_modules(),FX.options_loaded(f))})};X.userid=X.cookie.get("c_user")||"anonymous",X.storage.prefix=X.userid,bootstrap()}}catch(qe){console.log(qe)}
