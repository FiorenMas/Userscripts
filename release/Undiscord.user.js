// ==UserScript==
// @name            Undiscord
// @version         5.2.3
// @author          victornpb
// @homepageURL     https://github.com/victornpb/undiscord
// @supportURL      https://github.com/victornpb/undiscord/discussions
// @match           https://*.discord.com/app
// @match           https://*.discord.com/channels/*
// @match           https://*.discord.com/login
// @license         MIT
// @namespace       https://github.com/victornpb/deleteDiscordMessages
// @icon            https://victornpb.github.io/undiscord/images/icon128.png
// @contributionURL https://www.buymeacoffee.com/vitim
// @grant           none
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Undiscord.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Undiscord.meta.js
// ==/UserScript==
(function(){"use strict";const ie="5.2.3";var ne=`
/* undiscord window */
#undiscord.browser { box-shadow: var(--elevation-stroke), var(--elevation-high); overflow: hidden; }
#undiscord.container,
#undiscord .container { background-color: var(--background-secondary); border-radius: 8px; box-sizing: border-box; cursor: default; flex-direction: column; }
#undiscord .header { background-color: var(--background-tertiary); height: 48px; align-items: center; min-height: 48px; padding: 0 16px; display: flex; color: var(--header-secondary); cursor: grab; }
#undiscord .header .icon { color: var(--interactive-normal); margin-right: 8px; flex-shrink: 0; width: 24; height: 24; }
#undiscord .header .icon:hover { color: var(--interactive-hover); }
#undiscord .header h3 { font-size: 16px; line-height: 20px; font-weight: 500; font-family: var(--font-display); color: var(--header-primary); flex-shrink: 0; margin-right: 16px; }
#undiscord .spacer { flex-grow: 1; }
#undiscord .header .vert-divider { width: 1px; height: 24px; background-color: var(--background-modifier-accent); margin-right: 16px; flex-shrink: 0; }
#undiscord legend,
#undiscord label { color: var(--header-secondary); font-size: 12px; line-height: 16px; font-weight: 500; text-transform: uppercase; cursor: default; font-family: var(--font-display); margin-bottom: 8px; }
#undiscord .multiInput { display: flex; align-items: center; font-size: 16px; box-sizing: border-box; width: 100%; border-radius: 3px; color: var(--text-normal); background-color: var(--input-background); border: none; transition: border-color 0.2s ease-in-out 0s; }
#undiscord .multiInput :first-child { flex-grow: 1; }
#undiscord .multiInput button:last-child { margin-right: 4px; }
#undiscord .input { font-size: 16px; box-sizing: border-box; width: 100%; border-radius: 3px; color: var(--text-normal); background-color: var(--input-background); border: none; transition: border-color 0.2s ease-in-out 0s; padding: 10px; height: 40px; }
#undiscord fieldset { margin-top: 16px; }
#undiscord .input-wrapper { display: flex; align-items: center; font-size: 16px; box-sizing: border-box; width: 100%; border-radius: 3px; color: var(--text-normal); background-color: var(--input-background); border: none; transition: border-color 0.2s ease-in-out 0s; }
#undiscord input[type="text"],
#undiscord input[type="search"],
#undiscord input[type="password"],
#undiscord input[type="datetime-local"],
#undiscord input[type="number"],
#undiscord input[type="range"] { font-size: 16px; box-sizing: border-box; width: 100%; border-radius: 3px; color: var(--text-normal); background-color: var(--input-background); border: none; transition: border-color 0.2s ease-in-out 0s; padding: 10px; height: 40px; }
#undiscord .divider,
#undiscord hr { border: none; margin-bottom: 24px; padding-bottom: 4px; border-bottom: 1px solid var(--background-modifier-accent); }
#undiscord .sectionDescription { margin-bottom: 16px; color: var(--header-secondary); font-size: 14px; line-height: 20px; font-weight: 400; }
#undiscord a { color: var(--text-link); text-decoration: none; }
#undiscord .btn,
#undiscord button { position: relative; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; box-sizing: border-box; background: none; border: none; border-radius: 3px; font-size: 14px; font-weight: 500; line-height: 16px; padding: 2px 16px; user-select: none; /* sizeSmall */     width: 60px; height: 32px; min-width: 60px; min-height: 32px; /* lookFilled colorPrimary */     color: rgb(255, 255, 255); background-color: var(--button-secondary-background); }
#undiscord .sizeMedium { width: 96px; height: 38px; min-width: 96px; min-height: 38px; }
#undiscord .sizeMedium.icon { width: 38px; min-width: 38px; }
#undiscord sup { vertical-align: top; }
/* lookFilled colorPrimary */
#undiscord .accent { background-color: var(--brand-experiment); }
#undiscord .danger { background-color: var(--button-danger-background); }
#undiscord .positive { background-color: var(--button-positive-background); }
#undiscord .info { font-size: 12px; line-height: 16px; padding: 8px 10px; color: var(--text-muted); }
/* Scrollbar */
#undiscord .scroll::-webkit-scrollbar { width: 8px; height: 8px; }
#undiscord .scroll::-webkit-scrollbar-corner { background-color: transparent; }
#undiscord .scroll::-webkit-scrollbar-thumb { background-clip: padding-box; border: 2px solid transparent; border-radius: 4px; background-color: var(--scrollbar-thin-thumb); min-height: 40px; }
#undiscord .scroll::-webkit-scrollbar-track { border-color: var(--scrollbar-thin-track); background-color: var(--scrollbar-thin-track); border: 2px solid var(--scrollbar-thin-track); }
/* fade scrollbar */
#undiscord .scroll::-webkit-scrollbar-thumb,
#undiscord .scroll::-webkit-scrollbar-track { visibility: hidden; }
#undiscord .scroll:hover::-webkit-scrollbar-thumb,
#undiscord .scroll:hover::-webkit-scrollbar-track { visibility: visible; }
/**** functional classes ****/
#undiscord.redact .priv { display: none !important; }
#undiscord.redact x:not(:active) { color: transparent !important; background-color: var(--primary-700) !important; cursor: default; user-select: none; }
#undiscord.redact x:hover { position: relative; }
#undiscord.redact x:hover::after { content: "Redacted information (Streamer mode: ON)"; position: absolute; display: inline-block; top: -32px; left: -20px; padding: 4px; width: 150px; font-size: 8pt; text-align: center; white-space: pre-wrap; background-color: var(--background-floating); -webkit-box-shadow: var(--elevation-high); box-shadow: var(--elevation-high); color: var(--text-normal); border-radius: 5px; pointer-events: none; }
#undiscord.redact [priv] { -webkit-text-security: disc !important; }
#undiscord :disabled { display: none; }
/**** layout and utility classes ****/
#undiscord,
#undiscord * { box-sizing: border-box; }
#undiscord .col { display: flex; flex-direction: column; }
#undiscord .row { display: flex; flex-direction: row; align-items: center; }
#undiscord .mb1 { margin-bottom: 8px; }
#undiscord .log { margin-bottom: 0.25em; }
#undiscord .log-debug { color: inherit; }
#undiscord .log-info { color: #00b0f4; }
#undiscord .log-verb { color: #72767d; }
#undiscord .log-warn { color: #faa61a; }
#undiscord .log-error { color: #f04747; }
#undiscord .log-success { color: #43b581; }
`,se=`
/**** Undiscord Button ****/
#undicord-btn { position: relative; width: auto; height: 24px; margin: 0 8px; cursor: pointer; color: var(--interactive-normal); flex: 0 0 auto; }
#undicord-btn progress { position: absolute; top: 23px; left: -4px; width: 32px; height: 12px; display: none; }
#undicord-btn.running { color: var(--button-danger-background) !important; }
#undicord-btn.running progress { display: block; }
/**** Undiscord Interface ****/
#undiscord { position: fixed; z-index: 100; top: 58px; right: 10px; display: flex; flex-direction: column; width: 800px; height: 80vh; min-width: 610px; max-width: 100vw; min-height: 448px; max-height: 100vh; color: var(--text-normal); border-radius: 4px; background-color: var(--background-secondary); box-shadow: var(--elevation-stroke), var(--elevation-high); will-change: top, left, width, height; }
#undiscord .header .icon { cursor: pointer; }
#undiscord .window-body { height: calc(100% - 48px); }
#undiscord .sidebar { overflow: hidden scroll; overflow-y: auto; width: 270px; min-width: 250px; height: 100%; max-height: 100%; padding: 8px; background: var(--background-secondary); }
#undiscord .sidebar legend,
#undiscord .sidebar label { display: block; width: 100%; }
#undiscord .main { display: flex; max-width: calc(100% - 250px); background-color: var(--background-primary); flex-grow: 1; }
#undiscord.hide-sidebar .sidebar { display: none; }
#undiscord.hide-sidebar .main { max-width: 100%; }
#undiscord #logArea { font-family: Consolas, Liberation Mono, Menlo, Courier, monospace; font-size: 0.75rem; overflow: auto; padding: 10px; user-select: text; flex-grow: 1; flex-grow: 1; cursor: auto; }
#undiscord .tbar { padding: 8px; background-color: var(--background-secondary-alt); }
#undiscord .tbar button { margin-right: 4px; margin-bottom: 4px; }
#undiscord .footer { cursor: se-resize; padding-right: 30px; }
#undiscord .footer #progressPercent { padding: 0 1em; font-size: small; color: var(--interactive-muted); flex-grow: 1; }
.resize-handle { position: absolute; bottom: -15px; right: -15px; width: 30px; height: 30px; transform: rotate(-45deg); background: repeating-linear-gradient(0, var(--background-modifier-accent), var(--background-modifier-accent) 1px, transparent 2px, transparent 4px); cursor: nwse-resize; }
/**** Elements ****/
#undiscord summary { font-size: 16px; font-weight: 500; line-height: 20px; position: relative; overflow: hidden; margin-bottom: 2px; padding: 6px 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis; color: var(--interactive-normal); border-radius: 4px; flex-shrink: 0; }
#undiscord fieldset { padding-left: 8px; }
#undiscord legend a { float: right; text-transform: initial; }
#undiscord progress { height: 8px; margin-top: 4px; flex-grow: 1; }
#undiscord .importJson { display: flex; flex-direction: row; }
#undiscord .importJson button { margin-left: 5px; width: fit-content; }
`,re=`
[name^="grab-"] { position: absolute; --size: 6px; --corner-size: 16px; --offset: -1px; z-index: 9; }
[name^="grab-"]:hover{ background: rgba(128,128,128,0.1); }
[name="grab-t"] { top: 0px; left: var(--corner-size); right: var(--corner-size); height: var(--size); margin-top: var(--offset); cursor: ns-resize; }
[name="grab-r"] { top: var(--corner-size); bottom: var(--corner-size); right: 0px; width: var(--size); margin-right: var(--offset); 
  cursor: ew-resize; }
[name="grab-b"] { bottom: 0px; left: var(--corner-size); right: var(--corner-size); height: var(--size); margin-bottom: var(--offset); cursor: ns-resize; }
[name="grab-l"] { top: var(--corner-size); bottom: var(--corner-size); left: 0px; width: var(--size); margin-left: var(--offset); cursor: ew-resize; }
[name="grab-tl"] { top: 0px; left: 0px; width: var(--corner-size); height: var(--corner-size); margin-top: var(--offset); margin-left: var(--offset); cursor: nwse-resize; }
[name="grab-tr"] { top: 0px; right: 0px; width: var(--corner-size); height: var(--corner-size); margin-top: var(--offset); margin-right: var(--offset); cursor: nesw-resize; }
[name="grab-br"] { bottom: 0px; right: 0px; width: var(--corner-size); height: var(--corner-size); margin-bottom: var(--offset); margin-right: var(--offset); cursor: nwse-resize; }
[name="grab-bl"] { bottom: 0px; left: 0px; width: var(--corner-size); height: var(--corner-size); margin-bottom: var(--offset); margin-left: var(--offset); cursor: nesw-resize; }
`,oe=`
<div id="undicord-btn" tabindex="0" role="button" aria-label="Delete Messages" title="Delete Messages with Undiscord">
    <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
        <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path>
    </svg>
    <progress></progress>
</div>
`,ae=`
<div id="undiscord" class="browser container redact" style="display:none;">
    <div class="header">
        <svg class="icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
            <path fill="currentColor"
                d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
            </path>
        </svg>
        <h3>Undiscord</h3>
        <div class="vert-divider"></div>
        <span> Bulk delete messages</span>
        <div class="spacer"></div>
        <div id="hide" class="icon" aria-label="Close" role="button" tabindex="0">
            <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                </path>
            </svg>
        </div>
    </div>
    <div class="window-body" style="display: flex; flex-direction: row;">
        <div class="sidebar scroll">
            <details open>
                <summary>General</summary>
                <fieldset>
                    <legend>
                        Author ID
                        <a href="{{WIKI}}/authorId" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="multiInput">
                        <div class="input-wrapper">
                            <input class="input" id="authorId" type="text" priv>
                        </div>
                        <button id="getAuthor">me</button>
                    </div>
                </fieldset>
                <hr>
                <fieldset>
                    <legend>
                        Server ID
                        <a href="{{WIKI}}/guildId" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="multiInput">
                        <div class="input-wrapper">
                            <input class="input" id="guildId" type="text" priv>
                        </div>
                        <button id="getGuild">current</button>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        Channel ID
                        <a href="{{WIKI}}/channelId" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="multiInput mb1">
                        <div class="input-wrapper">
                            <input class="input" id="channelId" type="text" priv>
                        </div>
                        <button id="getChannel">current</button>
                    </div>
                    <div class="sectionDescription">
                        <label class="row"><input id="includeNsfw" type="checkbox">This is a NSFW channel</label>
                    </div>
                </fieldset>
            </details>
            <details>
                <summary>Wipe Archive</summary>
                <fieldset>
                    <legend>
                        Import index.json
                        <a href="{{WIKI}}/importJson" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="input-wrapper">
                        <input type="file" id="importJsonInput" accept="application/json,.json" style="width:100%";>
                    </div>
                    <div class="sectionDescription">
                        <br>
                        After requesting your data from discord, you can import it here.<br>
                        Select the "messages/index.json" file from the discord archive.
                    </div>
                </fieldset>
            </details>
            <hr>
            <details>
                <summary>Filter</summary>
                <fieldset>
                    <legend>
                        Search
                        <a href="{{WIKI}}/filters" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="input-wrapper">
                        <input id="search" type="text" placeholder="Containing text" priv>
                    </div>
                    <div class="sectionDescription">
                        Only delete messages that contain the text
                    </div>
                    <div class="sectionDescription">
                        <label><input id="hasLink" type="checkbox">has: link</label>
                    </div>
                    <div class="sectionDescription">
                        <label><input id="hasFile" type="checkbox">has: file</label>
                    </div>
                    <div class="sectionDescription">
                        <label><input id="includePinned" type="checkbox">Include pinned</label>
                    </div>
                </fieldset>
                <hr>
                <fieldset>
                    <legend>
                        Pattern
                        <a href="{{WIKI}}/pattern" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="sectionDescription">
                        Delete messages that match the regular expression
                    </div>
                    <div class="input-wrapper">
                        <span class="info">/</span>
                        <input id="pattern" type="text" placeholder="regular expression" priv>
                        <span class="info">/</span>
                    </div>
                </fieldset>
            </details>
            <details>
                <summary>Messages interval</summary>
                <fieldset>
                    <legend>
                        Interval of messages
                        <a href="{{WIKI}}/messageId" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="multiInput mb1">
                        <div class="input-wrapper">
                            <input id="minId" type="text" placeholder="After a message" priv>
                        </div>
                        <button id="pickMessageAfter">Pick</button>
                    </div>
                    <div class="multiInput">
                        <div class="input-wrapper">
                            <input id="maxId" type="text" placeholder="Before a message" priv>
                        </div>
                        <button id="pickMessageBefore">Pick</button>
                    </div>
                    <div class="sectionDescription">
                        Specify an interval to delete messages.
                    </div>
                </fieldset>
            </details>
            <details>
                <summary>Date interval</summary>
                <fieldset>
                    <legend>
                        After date
                        <a href="{{WIKI}}/dateRange" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="input-wrapper mb1">
                        <input id="minDate" type="datetime-local" title="Messages posted AFTER this date">
                    </div>
                    <legend>
                        Before date
                        <a href="{{WIKI}}/dateRange" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="input-wrapper">
                        <input id="maxDate" type="datetime-local" title="Messages posted BEFORE this date">
                    </div>
                    <div class="sectionDescription">
                        Delete messages that were posted between the two dates.
                    </div>
                    <div class="sectionDescription">
                        * Filtering by date doesn't work if you use the "Messages interval".
                    </div>
                </fieldset>
            </details>
            <hr>
            <details>
                <summary>Advanced settings</summary>
                <fieldset>
                    <legend>
                        Search delay
                        <a href="{{WIKI}}/delay" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="input-wrapper">
                        <input id="searchDelay" type="range" value="30000" step="100" min="100" max="60000">
                        <div id="searchDelayValue"></div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        Delete delay
                        <a href="{{WIKI}}/delay" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="input-wrapper">
                        <input id="deleteDelay" type="range" value="1000" step="50" min="50" max="10000">
                        <div id="deleteDelayValue"></div>
                    </div>
                    <br>
                    <div class="sectionDescription">
                        This will affect the speed in which the messages are deleted.
                        Use the help link for more information.
                    </div>
                </fieldset>
                <hr>
                <fieldset>
                    <legend>
                        Authorization Token
                        <a href="{{WIKI}}/authToken" title="Help" target="_blank" rel="noopener noreferrer">help</a>
                    </legend>
                    <div class="multiInput">
                        <div class="input-wrapper">
                            <input class="input" id="token" type="password" autocomplete="dont" priv>
                        </div>
                        <button id="getToken">fill</button>
                    </div>
                </fieldset>
            </details>
            <hr>
            <div></div>
            <div class="info">
                Undiscord {{VERSION}}
                <br> victornpb
            </div>
        </div>
        <div class="main col">
            <div class="tbar col">
                <div class="row">
                    <button id="toggleSidebar" class="sizeMedium icon">\u2630</button>
                    <button id="start" class="sizeMedium danger" style="width: 150px;" title="Start the deletion process">\u25B6\uFE0E Delete</button>
                    <button id="stop" class="sizeMedium" title="Stop the deletion process" disabled>\u{1F6D1} Stop</button>
                    <button id="clear" class="sizeMedium">Clear log</button>
                    <label class="row" title="Hide sensitive information on your screen for taking screenshots">
                        <input id="redact" type="checkbox" checked> Streamer mode
                    </label>
                </div>
                <div class="row">
                    <progress id="progressBar" style="display:none;"></progress>
                </div>
            </div>
            <pre id="logArea" class="logarea scroll">
                <div class="" style="background: var(--background-mentioned); padding: .5em;">Notice: Undiscord may be working slower than usual and<wbr>require multiple attempts due to a recent Discord update.<br>We're working on a fix, and we thank you for your patience.</div>
                <center>
                    <div>Star <a href="{{HOME}}" target="_blank" rel="noopener noreferrer">this project</a> on GitHub!</div>
                    <div><a href="{{HOME}}/discussions" target="_blank" rel="noopener noreferrer">Issues or help</a></div>
                </center>
            </pre>
            <div class="tbar footer row">
                <div id="progressPercent"></div>
                <span class="spacer"></span>
                <label>
                    <input id="autoScroll" type="checkbox" checked> Auto scroll
                </label>
                <div class="resize-handle"></div>
            </div>
        </div>
    </div>
</div>

`;const o={debug(){return m?m("debug",arguments):console.debug.apply(console,arguments)},info(){return m?m("info",arguments):console.info.apply(console,arguments)},verb(){return m?m("verb",arguments):console.log.apply(console,arguments)},warn(){return m?m("warn",arguments):console.warn.apply(console,arguments)},error(){return m?m("error",arguments):console.error.apply(console,arguments)},success(){return m?m("success",arguments):console.info.apply(console,arguments)}};var m;const de=t=>m=t,T=async t=>new Promise(e=>setTimeout(e,t)),S=t=>`${t/36e5|0}h ${t%36e5/6e4|0}m ${t%6e4/1e3|0}s`,le=t=>String(t).replace(/[&<"']/g,e=>({"&":"&amp;","<":"&lt;",'"':"&quot;","'":"&#039;"})[e]),b=t=>`<x>${le(t)}</x>`,ce=t=>t.filter(e=>e[1]!==void 0).map(e=>e[0]+"="+encodeURIComponent(e[1])).join("&"),ue=async t=>new Promise(e=>setTimeout(()=>e(window.confirm(t)),10)),j=t=>/:/.test(t)?(new Date(t).getTime()-14200704e5)*Math.pow(2,22):t,he=(t,e,i=!1)=>t.replace(/\{\{([\w_]+)\}\}/g,(s,n)=>e[n]||(i?"":s)),F="[UNDISCORD]";class pe{options={authToken:null,authorId:null,guildId:null,channelId:null,minId:null,maxId:null,content:null,hasLink:null,hasFile:null,includeNsfw:null,includePinned:null,pattern:null,searchDelay:null,deleteDelay:null,maxAttempt:2,askForConfirmation:!0};state={running:!1,delCount:0,failCount:0,grandTotal:0,offset:0,iterations:0,_seachResponse:null,_messagesToDelete:[],_skippedMessages:[]};stats={startTime:new Date,throttledCount:0,throttledTotalTime:0,lastPing:null,avgPing:null,etr:0};onStart=void 0;onProgress=void 0;onStop=void 0;resetState(){this.state={running:!1,delCount:0,failCount:0,grandTotal:0,offset:0,iterations:0,_seachResponse:null,_messagesToDelete:[],_skippedMessages:[]},this.options.askForConfirmation=!0}async runBatch(e){if(this.state.running)return o.error("Already running!");o.info(`Runnning batch with queue of ${e.length} jobs`);for(let i=0;i<e.length;i++){const s=e[i];if(o.info("Starting job...",`(${i+1}/${e.length})`),this.options={...this.options,...s},await this.run(!0),!this.state.running)break;o.info("Job ended.",`(${i+1}/${e.length})`),this.resetState(),this.options.askForConfirmation=!1,this.state.running=!0}o.info("Batch finished."),this.state.running=!1}async run(e=!1){if(this.state.running&&!e)return o.error("Already running!");this.state.running=!0,this.stats.startTime=new Date,o.success(`
Started at ${this.stats.startTime.toLocaleString()}`),o.debug(`authorId = "${b(this.options.authorId)}"`,`guildId = "${b(this.options.guildId)}"`,`channelId = "${b(this.options.channelId)}"`,`minId = "${b(this.options.minId)}"`,`maxId = "${b(this.options.maxId)}"`,`hasLink = ${!!this.options.hasLink}`,`hasFile = ${!!this.options.hasFile}`),this.onStart&&this.onStart(this.state,this.stats);do{if(this.state.iterations++,o.verb("Fetching messages..."),await this.search(),await this.filterResponse(),o.verb(`Grand total: ${this.state.grandTotal}`,`(Messages in current page: ${this.state._seachResponse.messages.length}`,`To be deleted: ${this.state._messagesToDelete.length}`,`Skipped: ${this.state._skippedMessages.length})`,`offset: ${this.state.offset}`),this.printStats(),this.calcEtr(),o.verb(`Estimated time remaining: ${S(this.stats.etr)}`),this.state._messagesToDelete.length>0){if(await this.confirm()===!1){this.state.running=!1;break}await this.deleteMessagesFromList()}else if(this.state._skippedMessages.length>0){const i=this.state.offset;this.state.offset+=this.state._skippedMessages.length,o.verb("There's nothing we can delete on this page, checking next page..."),o.verb(`Skipped ${this.state._skippedMessages.length} out of ${this.state._seachResponse.messages.length} in this page.`,`(Offset was ${i}, ajusted to ${this.state.offset})`)}else{if(o.verb("Ended because API returned an empty page."),o.verb("[End state]",this.state),e)break;this.state.running=!1}o.verb(`Waiting ${(this.options.searchDelay/1e3).toFixed(2)}s before next page...`),await T(this.options.searchDelay)}while(this.state.running);this.stats.endTime=new Date,o.success(`Ended at ${this.stats.endTime.toLocaleString()}! Total time: ${S(this.stats.endTime.getTime()-this.stats.startTime.getTime())}`),this.printStats(),o.debug(`Deleted ${this.state.delCount} messages, ${this.state.failCount} failed.
`),this.onStop&&this.onStop(this.state,this.stats)}stop(){this.state.running=!1,this.onStop&&this.onStop(this.state,this.stats)}calcEtr(){this.stats.etr=this.options.searchDelay*Math.round(this.state.grandTotal/25)+(this.options.deleteDelay+this.stats.avgPing)*this.state.grandTotal}async confirm(){if(!this.options.askForConfirmation)return!0;o.verb("Waiting for your confirmation...");const e=this.state._messagesToDelete.map(s=>`${s.author.username}#${s.author.discriminator}: ${s.attachments.length?"[ATTACHMENTS]":s.content}`).join(`
`);return await ue(`Do you want to delete ~${this.state.grandTotal} messages? (Estimated time: ${S(this.stats.etr)})(The actual number of messages may be less, depending if you're using filters to skip some messages)

---- Preview ----
`+e)?(o.verb("OK"),this.options.askForConfirmation=!1,!0):(o.error("Aborted by you!"),!1)}async search(){let e;this.options.guildId==="@me"?e=`https://discord.com/api/v9/channels/${this.options.channelId}/messages/`:e=`https://discord.com/api/v9/guilds/${this.options.guildId}/messages/`;let i;try{this.beforeRequest(),i=await fetch(e+"search?"+ce([["author_id",this.options.authorId||void 0],["channel_id",(this.options.guildId!=="@me"?this.options.channelId:void 0)||void 0],["min_id",this.options.minId?j(this.options.minId):void 0],["max_id",this.options.maxId?j(this.options.maxId):void 0],["sort_by","timestamp"],["sort_order","desc"],["offset",this.state.offset],["has",this.options.hasLink?"link":void 0],["has",this.options.hasFile?"file":void 0],["content",this.options.content||void 0],["include_nsfw",this.options.includeNsfw?!0:void 0]]),{headers:{Authorization:this.options.authToken}}),this.afterRequest()}catch(n){throw this.state.running=!1,o.error("Search request threw an error:",n),n}if(i.status===202){let n=(await i.json()).retry_after*1e3;return n=n||this.stats.searchDelay,this.stats.throttledCount++,this.stats.throttledTotalTime+=n,o.warn(`This channel isn't indexed yet. Waiting ${n}ms for discord to index it...`),await T(n),await this.search()}if(!i.ok)if(i.status===429){let n=(await i.json()).retry_after*1e3;return n=n||this.stats.searchDelay,this.stats.throttledCount++,this.stats.throttledTotalTime+=n,this.stats.searchDelay+=n,n=this.stats.searchDelay,o.warn(`Being rate limited by the API for ${n}ms! Increasing search delay...`),this.printStats(),o.verb(`Cooling down for ${n*2}ms before retrying...`),await T(n*2),await this.search()}else throw this.state.running=!1,o.error(`Error searching messages, API responded with status ${i.status}!
`,await i.json()),i;const s=await i.json();return this.state._seachResponse=s,console.log(F,"search",s),s}async filterResponse(){const e=this.state._seachResponse,i=e.total_results;i>this.state.grandTotal&&(this.state.grandTotal=i);const s=e.messages.map(u=>u.find(d=>d.hit===!0));let n=s;n=n.filter(u=>u.type===0||u.type>=6&&u.type<=21),n=n.filter(u=>u.pinned?this.options.includePinned:!0);try{const u=new RegExp(this.options.pattern,"i");n=n.filter(d=>u.test(d.content))}catch(u){o.warn("Ignoring RegExp because pattern is malformed!",u)}const l=s.filter(u=>!n.find(d=>d.id===u.id));this.state._messagesToDelete=n,this.state._skippedMessages=l,console.log(F,"filterResponse",this.state)}async deleteMessagesFromList(){for(let e=0;e<this.state._messagesToDelete.length;e++){const i=this.state._messagesToDelete[e];if(!this.state.running)return o.error("Stopped by you!");o.debug(`[${this.state.delCount+1}/${this.state.grandTotal}] <sup>${new Date(i.timestamp).toLocaleString()}</sup> <b>${b(i.author.username+"#"+i.author.discriminator)}</b>: <i>${b(i.content).replace(/\n/g,"\u21B5")}</i>`+(i.attachments.length?b(JSON.stringify(i.attachments)):""),`<sup>{ID:${b(i.id)}}</sup>`);let s=0;for(;s<this.options.maxAttempt&&await this.deleteMessage(i)==="RETRY";)s++,o.verb(`Retrying in ${this.options.deleteDelay}ms... (${s}/${this.options.maxAttempt})`),await T(this.options.deleteDelay);this.calcEtr(),this.onProgress&&this.onProgress(this.state,this.stats),await T(this.options.deleteDelay)}}async deleteMessage(e){const i=`https://discord.com/api/v9/channels/${e.channel_id}/messages/${e.id}`;let s;try{this.beforeRequest(),s=await fetch(i,{method:"DELETE",headers:{Authorization:this.options.authToken}}),this.afterRequest()}catch(n){return o.error("Delete request throwed an error:",n),o.verb("Related object:",b(JSON.stringify(e))),this.state.failCount++,"FAILED"}if(!s.ok)if(s.status===429){const n=(await s.json()).retry_after*1e3;return this.stats.throttledCount++,this.stats.throttledTotalTime+=n,this.options.deleteDelay=n,o.warn(`Being rate limited by the API for ${n}ms! Adjusted delete delay to ${this.options.deleteDelay}ms.`),this.printStats(),o.verb(`Cooling down for ${n*2}ms before retrying...`),await T(n*2),"RETRY"}else{const n=await s.text();try{const l=JSON.parse(n);return s.status===400&&l.code===50083?(o.warn("Error deleting message (Thread is archived). Will increment offset so we don't search this in the next page..."),this.state.offset++,this.state.failCount++,"FAIL_SKIP"):(o.error(`Error deleting message, API responded with status ${s.status}!`,l),o.verb("Related object:",b(JSON.stringify(e))),this.state.failCount++,"FAILED")}catch{o.error(`Fail to parse JSON. API responded with status ${s.status}!`,n)}}return this.state.delCount++,"OK"}#e=0;beforeRequest(){this.#e=Date.now()}afterRequest(){this.stats.lastPing=Date.now()-this.#e,this.stats.avgPing=this.stats.avgPing>0?this.stats.avgPing*.9+this.stats.lastPing*.1:this.stats.lastPing}printStats(){o.verb(`Delete delay: ${this.options.deleteDelay}ms, Search delay: ${this.options.searchDelay}ms`,`Last Ping: ${this.stats.lastPing}ms, Average Ping: ${this.stats.avgPing|0}ms`),o.verb(`Rate Limited: ${this.stats.throttledCount} times.`,`Total time throttled: ${S(this.stats.throttledTotalTime)}.`)}}const B=0,M=1,A=2,L=4,P=8,ge=M+L,me=M+P,fe=A+L,ve=A+P;class be{constructor({elm:e,moveHandle:i,options:s}){this.options=V({enabledDrag:!0,enabledResize:!0,minWidth:200,maxWidth:1/0,minHeight:100,maxHeight:1/0,dragAllowX:!0,dragAllowY:!0,resizeAllowX:!0,resizeAllowY:!0,draggingClass:"drag",useMouseEvents:!0,useTouchEvents:!0,createHandlers:!0},s),Object.assign(this,s),s=void 0,e.style.position="fixed",this.drag_m=new w(e,i,B,this.options),this.options.createHandlers&&(this.el_t=k("div",{name:"grab-t"},e),this.drag_t=new w(e,this.el_t,M,this.options),this.el_r=k("div",{name:"grab-r"},e),this.drag_r=new w(e,this.el_r,P,this.options),this.el_b=k("div",{name:"grab-b"},e),this.drag_b=new w(e,this.el_b,A,this.options),this.el_l=k("div",{name:"grab-l"},e),this.drag_l=new w(e,this.el_l,L,this.options),this.el_tl=k("div",{name:"grab-tl"},e),this.drag_tl=new w(e,this.el_tl,ge,this.options),this.el_tr=k("div",{name:"grab-tr"},e),this.drag_tr=new w(e,this.el_tr,me,this.options),this.el_br=k("div",{name:"grab-br"},e),this.drag_br=new w(e,this.el_br,ve,this.options),this.el_bl=k("div",{name:"grab-bl"},e),this.drag_bl=new w(e,this.el_bl,fe,this.options))}}class w{constructor(e,i,s,n){Object.assign(this,n),n=void 0,this._targetElm=e,this._handleElm=i;let l=window.innerWidth,u=window.innerHeight,d,p,E,I,x,y;const f=(c,g,v)=>c<g?g:c>v?v:c;let C=s===B?(c,g)=>{const v=c-d,D=g-p,_=f(E+D,0,u-y),$=f(I+v,0,l-x);this._targetElm.style.top=_+"px",this._targetElm.style.left=$+"px"}:(c,g)=>{c=f(c,0,l),g=f(g,0,u);const v=c-d,D=g-p,_=s&L?-1:1,$=s&M?-1:1,J=this.maxWidth-x,X=this.minWidth-x,G=this.maxHeight-y,Q=this.minHeight-y,Le=E+f(D*$,Q,G)*$,He=I+f(v*_,X,J)*_,ee=x+f(v*_,X,J),te=y+f(D*$,Q,G);s&M&&(this._targetElm.style.top=Le+"px",this._targetElm.style.height=te+"px"),s&A&&(this._targetElm.style.height=te+"px"),s&L&&(this._targetElm.style.left=He+"px",this._targetElm.style.width=ee+"px"),s&P&&(this._targetElm.style.width=ee+"px")};function z(c){const g=c.type==="touchstart";if(c.buttons===1||c.which===1||g){c.preventDefault();const v=g?c.touches[0].clientX:c.clientX,D=g?c.touches[0].clientY:c.clientY;d=v,p=D,l=window.innerWidth,u=window.innerHeight,E=this._targetElm.offsetTop,I=this._targetElm.offsetLeft,x=this._targetElm.clientWidth,y=this._targetElm.clientHeight,this.useMouseEvents&&(document.addEventListener("mousemove",this._dragMoveHandler),document.addEventListener("mouseup",this._dragEndHandler)),this.useTouchEvents&&(document.addEventListener("touchmove",this._dragMoveHandler,{passive:!1}),document.addEventListener("touchend",this._dragEndHandler)),this._targetElm.classList.add(this.draggingClass)}}function Se(c){c.preventDefault();let g,v;if(c.type==="touchmove"){const _=c.touches[0];g=_.clientX,v=_.clientY}else{if((c.buttons||c.which)!==1){this._dragEndHandler();return}g=c.clientX,v=c.clientY}C(g,v)}function Me(c){this.useMouseEvents&&(document.removeEventListener("mousemove",this._dragMoveHandler),document.removeEventListener("mouseup",this._dragEndHandler)),this.useTouchEvents&&(document.removeEventListener("touchmove",this._dragMoveHandler),document.removeEventListener("touchend",this._dragEndHandler)),this._targetElm.classList.remove(this.draggingClass)}this._dragStartHandler=z.bind(this),this._dragMoveHandler=Se.bind(this),this._dragEndHandler=Me.bind(this),this.enable()}enable(){this.destroy(),this.useMouseEvents&&this._handleElm.addEventListener("mousedown",this._dragStartHandler),this.useTouchEvents&&this._handleElm.addEventListener("touchstart",this._dragStartHandler,{passive:!1})}destroy(){this._targetElm.classList.remove(this.draggingClass),this.useMouseEvents&&(this._handleElm.removeEventListener("mousedown",this._dragStartHandler),document.removeEventListener("mousemove",this._dragMoveHandler),document.removeEventListener("mouseup",this._dragEndHandler)),this.useTouchEvents&&(this._handleElm.removeEventListener("touchstart",this._dragStartHandler),document.removeEventListener("touchmove",this._dragMoveHandler),document.removeEventListener("touchend",this._dragEndHandler))}}function k(t="div",e,i){const s=document.createElement(t);return e&&Object.entries(e).forEach(([n,l])=>s.setAttribute(n,l)),i&&i.appendChild(s),s}function V(t,e){function i(n){return n!==null&&typeof n=="object"}function s(n,l){return Object.prototype.hasOwnProperty.call(n,l)}if(i(e))for(let n in t)s(t,n)&&s(e,n)&&e[n]!==void 0&&(i(t[n])?V(t[n],e[n]):t[n]=e[n]);return t}function N(t){const e=document.createElement("div");return e.innerHTML=t,e.removeChild(e.firstElementChild)}function R(t){const e=document.createElement("style");return e.appendChild(document.createTextNode(t)),document.head.appendChild(e),e}const we=`
body.undiscord-pick-message [data-list-id="chat-messages"] {
  background-color: var(--background-secondary-alt);
  box-shadow: inset 0 0 0px 2px var(--button-outline-brand-border);
}

body.undiscord-pick-message [id^="message-content-"]:hover {
  cursor: pointer;
  cursor: cell;
  background: var(--background-message-automod-hover);
}
body.undiscord-pick-message [id^="message-content-"]:hover::after {
  position: absolute;
  top: calc(50% - 11px);
  left: 4px;
  z-index: 1;
  width: 65px;
  height: 22px;
  line-height: 22px;
  font-family: var(--font-display);
  background-color: var(--button-secondary-background);
  color: var(--header-secondary);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  border-radius: 3px;
  content: 'This \u{1F449}';
}
body.undiscord-pick-message.before [id^="message-content-"]:hover::after {
  content: 'Before \u{1F446}';
}
body.undiscord-pick-message.after [id^="message-content-"]:hover::after {
  content: 'After \u{1F447}';
}
`,W={init(){R(we)},grab(t){return new Promise((e,i)=>{document.body.classList.add("undiscord-pick-message"),t&&document.body.classList.add(t);function s(n){const l=n.target.closest('[id^="message-content-"]');if(l){n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),t&&document.body.classList.remove(t),document.body.classList.remove("undiscord-pick-message"),document.removeEventListener("click",s);try{e(l.id.match(/message-content-(\d+)/)[1])}catch{e(null)}}}document.addEventListener("click",s)})}};window.messagePicker=W;function xe(){window.dispatchEvent(new Event("beforeunload"));const t=document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage;try{return JSON.parse(t.token)}catch{return o.info("Could not automatically detect Authorization Token in local storage!"),o.info("Attempting to grab token using webpack"),(window.webpackChunkdiscord_app.push([[""],{},e=>{window.m=[];for(let i in e.c)window.m.push(e.c[i])}]),window.m).find(e=>e?.exports?.default?.getToken!==void 0).exports.default.getToken()}}function U(){const t=document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage;return JSON.parse(t.user_id_cache)}function Z(){const t=location.href.match(/channels\/([\w@]+)\/(\d+)/);if(t)return t[1];alert(`Could not find the Guild ID!
Please make sure you are on a Server or DM.`)}function K(){const t=location.href.match(/channels\/([\w@]+)\/(\d+)/);if(t)return t[2];alert(`Could not find the Channel ID!
Please make sure you are on a Channel or DM.`)}function Y(){try{return xe()}catch(t){o.verb(t),o.error("Could not automatically detect Authorization Token!"),o.info("Please make sure Undiscord is up to date"),o.debug('Alternatively, you can try entering a Token manually in the "Advanced Settings" section.')}return""}const H="[UNDISCORD]",ye="https://github.com/victornpb/undiscord",ke="https://github.com/victornpb/undiscord/wiki",h=new pe;W.init();const a={undiscordWindow:null,undiscordBtn:null,logArea:null,autoScroll:null,progressMain:null,progressIcon:null,percent:null},r=t=>a.undiscordWindow.querySelector(t);function Ie(){R(ne),R(se),R(re);const t=he(ae,{VERSION:ie,HOME:ye,WIKI:ke});a.undiscordWindow=N(t),document.body.appendChild(a.undiscordWindow),new be({elm:a.undiscordWindow,moveHandle:r(".header")}),a.undiscordBtn=N(oe),a.undiscordBtn.onclick=l;function e(){const d=document.querySelector("#app-mount [class^=toolbar]");d&&d.appendChild(a.undiscordBtn)}e();const i=document.querySelector("#app-mount");let s=null;new MutationObserver((d,p)=>{s||(s=setTimeout(()=>{s=null,i.contains(a.undiscordBtn)||e()},3e3))}).observe(i,{attributes:!1,childList:!0,subtree:!0});function l(){a.undiscordWindow.style.display!=="none"?(a.undiscordWindow.style.display="none",a.undiscordBtn.style.color="var(--interactive-normal)"):(a.undiscordWindow.style.display="",a.undiscordBtn.style.color="var(--interactive-active)")}a.logArea=r("#logArea"),a.autoScroll=r("#autoScroll"),a.progressMain=r("#progressBar"),a.progressIcon=a.undiscordBtn.querySelector("progress"),a.percent=r("#progressPercent"),r("#hide").onclick=l,r("#toggleSidebar").onclick=()=>a.undiscordWindow.classList.toggle("hide-sidebar"),r("button#start").onclick=De,r("button#stop").onclick=Te,r("button#clear").onclick=()=>a.logArea.innerHTML="",r("button#getAuthor").onclick=()=>r("input#authorId").value=U(),r("button#getGuild").onclick=()=>{(r("input#guildId").value=Z())==="@me"&&(r("input#channelId").value=K())},r("button#getChannel").onclick=()=>{r("input#channelId").value=K(),r("input#guildId").value=Z()},r("#redact").onchange=()=>{a.undiscordWindow.classList.toggle("redact")&&alert(`This mode will attempt to hide personal information, so you can screen share / take screenshots.
Always double check you are not sharing sensitive information!`)},r("#pickMessageAfter").onclick=async()=>{alert(`Select a message on the chat.
The message below it will be deleted.`),l();const d=await W.grab("after");d&&(r("input#minId").value=d),l()},r("#pickMessageBefore").onclick=async()=>{alert(`Select a message on the chat.
The message above it will be deleted.`),l();const d=await W.grab("before");d&&(r("input#maxId").value=d),l()},r("button#getToken").onclick=()=>r("input#token").value=Y(),r("input#searchDelay").onchange=d=>{const p=parseInt(d.target.value);p&&(h.options.searchDelay=p)},r("input#deleteDelay").onchange=d=>{const p=parseInt(d.target.value);p&&(h.options.deleteDelay=p)},r("input#searchDelay").addEventListener("input",d=>{r("div#searchDelayValue").textContent=d.target.value+"ms"}),r("input#deleteDelay").addEventListener("input",d=>{r("div#deleteDelayValue").textContent=d.target.value+"ms"});const u=r("input#importJsonInput");u.onchange=async()=>{const d=u.files;if(d.length===0)return o.warn("No file selected.");const p=r("input#channelId"),E=r("input#guildId");E.value="@me",r("input#authorId").value=U();try{const x=await d[0].text(),y=JSON.parse(x),f=Object.keys(y);p.value=f.join(","),o.info(`Loaded ${f.length} channels.`)}catch(I){o.error("Error parsing file!",I)}},de(_e),Ee()}function _e(t="",e){a.logArea.insertAdjacentHTML("beforeend",`<div class="log log-${t}">${Array.from(e).map(i=>typeof i=="object"?JSON.stringify(i,i instanceof Error&&Object.getOwnPropertyNames(i)):i).join("	")}</div>`),a.autoScroll.checked&&a.logArea.querySelector("div:last-child").scrollIntoView(!1),t==="error"&&console.error(H,...Array.from(e))}function Ee(){h.onStart=(t,e)=>{console.log(H,"onStart",t,e),r("#start").disabled=!0,r("#stop").disabled=!1,a.undiscordBtn.classList.add("running"),a.progressMain.style.display="block",a.percent.style.display="block"},h.onProgress=(t,e)=>{let i=t.grandTotal;const s=t.delCount+t.failCount;i=Math.max(i,s,0);const n=s>=0&&i?Math.round(s/i*100)+"%":"",l=S(Date.now()-e.startTime.getTime()),u=S(e.etr);a.percent.innerHTML=`${n} (${s}/${i}) Elapsed: ${l} Remaining: ${u}`,a.progressIcon.value=s,a.progressMain.value=s,i?(a.progressIcon.setAttribute("max",i),a.progressMain.setAttribute("max",i)):(a.progressIcon.removeAttribute("value"),a.progressMain.removeAttribute("value"),a.percent.innerHTML="...");const d=r("input#searchDelay");d.value=h.options.searchDelay,r("div#searchDelayValue").textContent=h.options.searchDelay+"ms";const p=r("input#deleteDelay");p.value=h.options.deleteDelay,r("div#deleteDelayValue").textContent=h.options.deleteDelay+"ms"},h.onStop=(t,e)=>{console.log(H,"onStop",t,e),r("#start").disabled=!1,r("#stop").disabled=!0,a.undiscordBtn.classList.remove("running"),a.progressMain.style.display="none",a.percent.style.display="none"}}async function De(){console.log(H,"startAction");const t=r("input#authorId").value.trim(),e=r("input#guildId").value.trim(),i=r("input#channelId").value.trim().split(/\s*,\s*/),s=r("input#includeNsfw").checked,n=r("input#search").value.trim(),l=r("input#hasLink").checked,u=r("input#hasFile").checked,d=r("input#includePinned").checked,p=r("input#pattern").value,E=r("input#minId").value.trim(),I=r("input#maxId").value.trim(),x=r("input#minDate").value.trim(),y=r("input#maxDate").value.trim(),f=parseInt(r("input#searchDelay").value.trim()),q=parseInt(r("input#deleteDelay").value.trim()),O=r("input#token").value.trim()||Y();if(O){if(!e)return o.error('You must fill the "Server ID" field!');if(a.logArea.innerHTML="",h.resetState(),h.options={...h.options,authToken:O,authorId:t,guildId:e,channelId:i.length===1?i[0]:void 0,minId:E||x,maxId:I||y,content:n,hasLink:l,hasFile:u,includeNsfw:s,includePinned:d,pattern:p,searchDelay:f,deleteDelay:q},i.length>1){const C=i.map(z=>({guildId:e,channelId:z}));try{await h.runBatch(C)}catch(z){o.error("CoreException",z)}}else try{await h.run()}catch(C){o.error("CoreException",C),h.stop()}}}function Te(){console.log(H,"stopAction"),h.stop()}Ie()})();
