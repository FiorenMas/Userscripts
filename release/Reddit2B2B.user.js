// ==UserScript==
// @name             Reddit++
// @namespace        RedditPlusPlus
// @version          1.0.26
// @author           lnm95
// @icon             data:image/png;base64,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
// @source           https://github.com/lnm95/redditPlusPlus
// @license          MIT
// @match            *://*.reddit.com/*
// @grant            unsafeWindow
// @grant            GM_getValue
// @grant            GM_setValue
// @run-at           document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reddit2B2B.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reddit2B2B.meta.js
// ==/UserScript==
(()=>{var vt={"./src/modules/app.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`faceplate-banner {
  max-width: 1000px !important;
}
.pp_hidden {
  display: none;
}
`,""]);const E=m},"./src/modules/biggerFonts.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`:is(.text-14):not(.pp_defaultText .text-14) {
  font-size: 1rem !important;
  line-height: 1.4rem !important;
}
faceplate-hovercard .text-12 {
  font-size: 0.9rem !important;
}
shreddit-composer > div[role='textbox'] {
  font-size: 1rem !important;
  line-height: 1.4rem !important;
}
shreddit-comment-action-row {
  margin-bottom: 15px !important;
}
`,""]);const E=m},"./src/modules/bookmark.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_bookmark_hiddenButton {
  width: 32px;
  height: 32px;
  position: absolute;
  opacity: 0 !important;
  overflow: hidden;
}
.pp_bookmark_hiddenButton > div {
  padding: 0px !important;
}
.pp_bookmark_post {
  margin-right: 5px !important;
}
`,""]);const E=m},"./src/modules/collapseAwards.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_awardButton {
  max-width: 100px;
  opacity: 1;
  transition: all 0.5s !important;
}
.pp_awardButton_hidden {
  display: none;
}
.pp_awardButton_collapsed {
  max-width: 0px !important;
  opacity: 0 !important;
  visibility: hidden !important;
}
`,""]);const E=m},"./src/modules/comments/comments.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_muted_avatar {
  opacity: 0.5;
}
.pp_muted_content {
  color: var(--pp-color-muted-conent);
  transition: color 0.2s;
}
.pp_muted_content:hover {
  color: var(--pp-color-muted-conent-hover);
}
:root.theme-light {
  --pp-color-muted-conent: #a5a5a5 !important;
  --pp-color-muted-conent-hover: #636363 !important;
}
:root {
  --pp-color-muted-conent: #595959;
  --pp-color-muted-conent-hover: #adadad;
}
`,""]);const E=m},"./src/modules/comments/hideShare.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`shreddit-comment-share-button {
  display: none !important;
}
`,""]);const E=m},"./src/modules/comments/sortButtons.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_sortDropdown_hidden {
  display: none;
}
.pp_sortButton {
  color: var(--color-neutral-content-weak);
  font: var(--font-button-sm);
  text-wrap: nowrap;
  border-radius: 32px;
  height: 32px;
  padding-left: 10px;
  padding-right: 14px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 5px;
}
.pp_sortButton > span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_sortButton:hover {
  background-color: var(--color-button-plain-background-hover) !important;
}
.pp_sortButton_active {
  color: var(--color-neutral-content-strong) !important;
  background-color: var(--color-secondary-background-selected);
}
`,""]);const E=m},"./src/modules/comments/userTags.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_tagsPanel {
  display: flex;
  justify-content: space-around;
  width: auto;
  border-bottom: solid 1px var(--color-neutral-border-weak);
  padding: 4px;
  gap: 8px;
  margin-bottom: 4px;
}
.pp_tagButton {
  cursor: pointer;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  height: 45px;
  padding: 4px 20px;
  margin: 0px 0px;
  color: var(--color-neutral-border-weak);
  border-radius: 5px;
}
.pp_tagButton svg {
  width: 20px;
  transition: transform 0.15s;
}
.pp_tagButton:hover svg {
  transform: scale(1.2, 1.2);
  transition: transform 0.3s;
}
.pp_tagButton:hover {
  background-color: var(--color-neutral-background-hover);
}
.pp_tagButtonActive:hover {
  opacity: 0.8;
}
.pp_tagHint_offset {
  left: 50%;
  position: absolute;
}
.pp_tagHintContainer {
  display: flex;
  justify-content: center;
  position: fixed;
}
.pp_tagHint {
  display: flex;
  align-items: center;
  position: absolute;
  top: -35px;
  height: 25px;
  padding: 0px 12px;
  color: var(--color-neutral-background-weak);
  font: var(--font-small);
  background-color: var(--color-neutral-content-strong);
  border-radius: 5px;
}
`,""]);const E=m},"./src/modules/feed/feedButtons.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_feedPanel {
  flex-direction: row;
}
.pp_feedPanel_space {
  width: 100%;
}
.pp_defaultFeed_mark {
  color: var(--color-neutral-content-weak);
  border-radius: 18px;
  display: flex;
  align-items: center;
  margin: 0px 5px 9px 5px;
  padding: 0px 8px;
  position: relative;
  cursor: pointer;
}
.pp_defaultFeed_mark:hover {
  background-color: var(--button-color-background-hover);
}
.pp_defaultFeed_mark:active {
  background-color: var(--button-color-background-activated);
}
.pp_defaultFeed_mark_hint {
  display: none;
  position: absolute;
  top: -32px;
  left: 16px;
}
.pp_defaultFeed_mark:hover > .pp_defaultFeed_mark_hint {
  display: block !important;
}
.pp_defaultFeed_mark_hint > span {
  color: #c7c7c7;
  background-color: rgba(0, 0, 0, 0.712);
  text-wrap-mode: nowrap;
  border-radius: 18px;
  padding: 4px 8px;
  position: relative;
  left: -50%;
}
.pp_feedButtonsContainer {
  justify-content: space-between;
  height: 40px !important;
}
.pp_feedButton {
  gap: 0.25rem !important;
}
.pp_feedContainer {
  gap: 0.25rem;
  height: 40px;
}
`,""]);const E=m},"./src/modules/header.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`#reddit-logo {
  text-decoration: none;
}
.pp_logo {
  width: max-content;
  color: var(--shreddit-color-wordmark);
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -2px;
}
`,""]);const E=m},"./src/modules/notifications.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`click-card > div[slot='content'] {
  width: 410px !important;
  max-width: 410px !important;
}
click-card > div[slot='content'] > div {
  max-height: 550px !important;
}
notification-item > a {
  width: 100% !important;
}
div[data-testid='notification-item'] > .flex {
  padding: 0rem 0rem 0.5rem 0.5rem !important;
  width: 100%;
}
div[data-testid='notification-item'] > div > div > button {
  display: none !important;
}
div[data-testid='body'] {
  font-size: 1rem !important;
  line-height: 1.1rem !important;
  padding-top: 0.5rem;
}
`,""]);const E=m},"./src/modules/posts/posts.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_post_shareButton :is(span):not(.flex) {
  visibility: hidden !important;
  max-width: 0px;
}
.pp_post_shareButton .text-16 {
  margin-right: 0px !important;
}
.pp_post_tittle {
  text-decoration: none !important;
}
.pp_post_noWrap {
  line-clamp: 999;
  -webkit-line-clamp: 999;
}
.pp_post_unwrapContainer {
  position: relative;
  height: 0px;
  bottom: 0px;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
}
.pp_post_unwrapButton {
  position: relative;
  background-color: var(--color-button-secondary-background);
  width: 46px;
  height: 46px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: var(--color-button-secondary-text);
  margin-right: 15px;
  pointer-events: fill !important;
  z-index: 10;
}
`,""]);const E=m},"./src/modules/posts/postsBackplates.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`article > shreddit-post {
  background-color: #00000000 !important;
  padding-top: 10px !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}
article > shreddit-post::before {
  border-radius: 15px !important;
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  background: linear-gradient(var(--color-neutral-background-hover), var(--color-neutral-background));
  transition: opacity 0.2s;
}
article > shreddit-post:hover::before {
  opacity: 1;
}
shreddit-post[gold-count]:not(shreddit-post[gold-count='']) {
  background-image: linear-gradient(rgba(255, 214, 53, 0.2), rgba(255, 214, 53, 0)) !important;
}
shreddit-post[gold-count]:not(shreddit-post[gold-count=''])::before {
  background: linear-gradient(#fbed2966, var(--color-neutral-background)) !important;
}
.stickied::after {
  border-radius: 15px !important;
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  z-index: -2;
  background: linear-gradient(var(--stickiedColor), var(--color-neutral-background)) !important;
}
.stickied::before {
  background: linear-gradient(var(--stickiedHoverColor), var(--color-neutral-background)) !important;
}
:root.theme-light {
  --stickiedColor: #0e8a001c !important;
  --stickiedHoverColor: #18900b3d !important;
}
:root {
  --stickiedColor: #0e8a001c;
  --stickiedHoverColor: #18900b3d;
}
`,""]);const E=m},"./src/modules/redirect.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_redirectContainer {
  position: fixed;
  bottom: 70px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 100;
}
.pp_redirectBox {
  background: #000000bf;
  width: 600px;
  height: 70px;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
`,""]);const E=m},"./src/modules/scrollToTop.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_scrollToTop {
  position: fixed;
  width: 100px;
  height: 100%;
  bottom: 0px;
  background: linear-gradient(0deg, var(--scrollLineColor) 1%, var(--scrollLineTransparentColor) 30%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  cursor: pointer;
  color: var(--scrollLineTransparentColor);
  transition: all 0.2s ease-in;
}
.pp_scrollToTop_inverted {
  transform: scale(1, -1);
}
.pp_scrollToTop_hidden {
  visibility: hidden;
}
.pp_scrollToTop_hidden::before {
  visibility: hidden;
}
.pp_scrollToTop:hover {
  padding-bottom: 50px !important;
  color: var(--scrollButtonColor);
  transition: all 0.2s ease-out;
}
.pp_scrollToTop::before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  background: linear-gradient(0deg, var(--scrollLineColor) 5%, var(--scrollLineTransparentColor) 50%);
  transition: opacity 0.2s ease-in;
}
.pp_scrollToTop:hover::before {
  opacity: 1;
  transition: opacity 0.2s ease-out;
}
:root.theme-light {
  --scrollLineColor: #e5ebee6e !important;
  --scrollLineTransparentColor: #e5ebee00 !important;
  --scrollButtonColor: #c9d1d4c2 !important;
}
:root {
  --scrollLineColor: #3f484d33;
  --scrollLineTransparentColor: #30343600;
  --scrollButtonColor: #969a9c;
}
`,""]);const E=m},"./src/modules/settings/settingsWindow.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_settings_subtittle {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  min-height: 20px;
  color: #7c7c7c;
  text-transform: uppercase;
  border-bottom: 1px solid #edeff1;
  margin-top: 1rem;
  padding: 0rem 3rem;
}
.pp_settings_property_oneLine {
  height: 2.25rem !important;
}
.pp_settings_propertyHeader {
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  justify-content: center;
}
.pp_settings_propertyHeader_tittle {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
}
.pp_settings_propertyHeader_description {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #7c7c7c;
}
.pp_settings_propertyButtonContainer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
}
.pp_settings_changesBannerContainer {
  position: absolute;
  top: 0px;
  width: 900px;
  overflow-y: hidden;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
}
.pp_settings_changesBanner {
  display: flex;
  justify-content: center;
  margin: 2rem 15%;
  padding: 1rem;
  border-radius: 15px;
  background-color: #ffd40017;
  border: solid 1px #ffd400;
  color: #d7b300;
  font-weight: 500;
}
.pp_settings_changesBanner_active {
  opacity: 1 !important;
}
.pp_settings_arrowArea {
  width: 200px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pp_settings_arrow {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_settings_arrowLeft {
  transform: scale(-1, 1);
}
`,""]);const E=m},"./src/modules/sidebar/sidebar.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_sidebar_loadingSection {
  max-height: 0px !important;
  visibility: hidden !important;
}
.pp_sidebar_loadingSection > details {
  max-height: 0px !important;
}
.pp_sidebar_collapsedSection {
  max-height: 43px !important;
  overflow-y: hidden !important;
}
`,""]);const E=m},"./src/modules/sidebar/subFilter.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_subFilter_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
}
.pp_subFilter {
  border-color: var(--color-neutral-border-weak);
  color: var(--color-secondary-weak);
  font-weight: 400;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  color: var(--color-secondary-plain);
}
.pp_subFilter:hover {
  background: var(--color-input-secondary-hover) !important;
}
.pp_subFilter:focus {
  border-color: var(--color-neutral-content-weak) !important;
}
.pp_subFilter_span {
  width: 100%;
  margin: 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
}
.pp_subFilter_span > span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_subFilter_input {
  width: 100%;
  background: 0 0;
  border: none;
  outline: 0;
  text-overflow: ellipsis;
  color: var(--color-neutral-content-strong);
  font: inherit;
  padding: 0px;
  margin: 0px;
}
.pp_pp_subFilter_clearContainer {
  position: relative;
  width: 0px;
}
.pp_subFilter_clear {
  position: relative;
  right: 40px;
  top: 4px;
  border-radius: 32px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`,""]);const E=m},"./src/modules/subs/flairBar.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_flairBar {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.pp_flairBar_highlights {
  padding-bottom: 10px;
}
.pp_flairBar_list {
  margin-top: 5px !important;
  flex-wrap: nowrap !important;
  position: relative;
}
.pp_flairBar_listSmoothed {
  transition: left 0.1s ease-out;
}
.pp_flairBar_bordersContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.pp_flairBar_preBorder {
  width: 20px;
}
.pp_flairBar_border {
  z-index: 1;
  position: absolute;
  height: 40px;
  width: 20px;
  margin-top: 5px;
  background: linear-gradient(var(--flair-border-orientation), var(--color-neutral-background), 60%, var(--color-neutral-background-transparent));
}
.pp_flairBar_border_left {
  --flair-border-orientation: 90deg;
}
.pp_flairBar_border_right {
  --flair-border-orientation: 270deg;
}
:root.theme-light {
  --color-neutral-background-transparent: #fff0 !important;
}
:root {
  --color-neutral-background-transparent: #0b141600;
}
`,""]);const E=m},"./src/modules/subs/flairWindow.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_flairWindow_flairContainer {
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 3rem;
}
.pp_flairWindow_columnTittle {
  margin: 20px 57px 10px 40px;
}
`,""]);const E=m},"./src/modules/subs/subs.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.masthead > section > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.masthead > section > div > div:last-child {
  align-self: flex-end;
}
.pp_mastheadSection {
  top: -3rem;
}
.pp_mastheadSection > div {
  gap: 1rem;
}
`,""]);const E=m},"./src/modules/wideMode.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`@media (min-width: 1392px) {
  .pp_pageContainer {
    margin-right: 300px;
  }
  .pp_mainFeed {
    width: var(--pp-content-width) !important;
    position: relative;
    left: var(--pp-content-offset);
  }
  .pp_mainFeed > div > main {
    max-width: var(--pp-content-width) !important;
  }
  .pp_rightSidebar {
    grid-column-start: 3;
    order: 10;
  }
  #right-sidebar-container {
    position: fixed;
    right: 0px;
    margin: 15px 10px 0px 0px;
  }
  .pp_rightSidebar_contextLookup {
    grid-column-start: 3;
    order: 10;
    position: fixed;
    right: 0px;
    margin: 15px 10px 0px 0px;
  }
}
`,""]);const E=m},"./src/utils/checkbox.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_checkBox_container {
  float: right;
  position: relative;
}
.pp_checkBox_buttonActive {
  justify-content: flex-end !important;
  background-color: #0079d3 !important;
}
.pp_checkBox_button {
  position: relative;
  cursor: pointer;
  overflow: visible;
  display: flex;
  justify-content: start;
  background: transparent;
  background-color: var(--checkBox-background);
  padding: initial;
  height: 24px;
  width: 37.5px;
  border-radius: 100px;
  border: 2px solid transparent;
  transition: background-color 0.2s linear;
}
.pp_checkBox_knob {
  height: 19.5px;
  width: 19.5px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s linear;
  border-radius: 57%;
}
.pp_checkBox_panelArea {
  width: 200px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
:root.theme-light {
  --checkBox-background: #1a1a1b1a !important;
}
:root {
  --checkBox-background: #81818152;
}
`,""]);const E=m},"./src/utils/imageViewer.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_imageViewable {
  cursor: pointer;
}
.pp_imageViewer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 10;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: #000000b3;
}
.pp_imageViewer_closeButton {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50px;
  z-index: 11;
  right: 50px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: #ffffff9c;
  background-color: #00000069;
  border-radius: 30px;
}
.pp_imageViewer_closeButton:hover {
  color: #ffffffc7;
}
.pp_imageViewer_imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;
}
.pp_imageViewer_imageContainer:not(.pp_imageViewer_drag) {
  transition: transform 0.5s;
}
.pp_imageViewer_image {
  cursor: grab;
  object-fit: scale-down;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0px 0px 20px 3px #14141485;
}
.pp_imageViewer_image:active {
  cursor: grabbing;
}
`,""]);const E=m},"./src/utils/window.less":(l,c,i)=>{"use strict";i.d(c,{A:()=>E});var h=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(h),g=i("./node_modules/css-loader/dist/runtime/api.js"),v=i.n(g),m=v()(a());m.push([l.id,`.pp_window_container {
  cursor: pointer;
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000b3;
}
.pp_window {
  cursor: auto;
  display: flex;
  flex-direction: column;
  width: 900px;
  height: fit-content;
  min-height: 200px;
  max-height: 75%;
  border-radius: 15px;
  background-color: var(--color-neutral-background);
  box-shadow: 0px 0px 50px 0px #00000070;
}
.pp_window_tittleContainer {
  height: 48px;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.pp_window_tittle {
  margin-left: 1rem;
}
.pp_window_closeButton {
  margin: 1rem;
}
.pp_window_content {
  display: flex;
  flex-direction: column;
  overflow-y: overlay;
}
.pp_window_footer {
  height: 2rem;
  min-height: 2rem;
}
.pp_window_elementsContainer {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 20px 40px;
  gap: 0.5rem;
}
.pp_window_element {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 3rem;
}
.pp_window_elementsContainer > .pp_window_element:hover {
  background-color: var(--color-neutral-background-hover);
  border-radius: 15px;
}
.pp_window_scrollContent {
  overflow-y: scroll;
}
`,""]);const E=m},"./node_modules/css-loader/dist/runtime/api.js":l=>{"use strict";l.exports=function(c){var i=[];return i.toString=function(){return this.map(function(a){var g="",v=typeof a[5]<"u";return a[4]&&(g+="@supports (".concat(a[4],") {")),a[2]&&(g+="@media ".concat(a[2]," {")),v&&(g+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),g+=c(a),v&&(g+="}"),a[2]&&(g+="}"),a[4]&&(g+="}"),g}).join("")},i.i=function(a,g,v,m,E){typeof a=="string"&&(a=[[null,a,void 0]]);var K={};if(v)for(var F=0;F<this.length;F++){var te=this[F][0];te!=null&&(K[te]=!0)}for(var oe=0;oe<a.length;oe++){var B=[].concat(a[oe]);v&&K[B[0]]||(typeof E<"u"&&(typeof B[5]>"u"||(B[1]="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {").concat(B[1],"}")),B[5]=E),g&&(B[2]&&(B[1]="@media ".concat(B[2]," {").concat(B[1],"}")),B[2]=g),m&&(B[4]?(B[1]="@supports (".concat(B[4],") {").concat(B[1],"}"),B[4]=m):B[4]="".concat(m)),i.push(B))}},i}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":l=>{"use strict";l.exports=function(c){return c[1]}},"./resources/bookmarkSaved.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.372 1H4.628A1.629 1.629 0 0 0 3 2.628v16.256a1.113 1.113 0 0 0 1.709.941L10 16.479l5.282 3.34A1.12 1.12 0 0 0 17 18.873V2.628A1.63 1.63 0 0 0 15.372 1Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/bookmarkUnsaved.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.114 20A1.117 1.117 0 0 1 3 18.884V2.628A1.629 1.629 0 0 1 4.628 1h10.744A1.63 1.63 0 0 1 17 2.628v16.245a1.12 1.12 0 0 1-1.718.946L10 16.479l-5.291 3.346a1.11 1.11 0 0 1-.595.175Zm.514-17.75a.378.378 0 0 0-.378.378v16.009L10 15l5.75 3.636V2.628a.378.378 0 0 0-.378-.378H4.628Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/comments/bannedUser.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2,7.15,7.08,1.84A2.66,2.66,0,0,1,10,2.3a2.72,2.72,0,0,1,.7,2.91L5.37,10.66s-1,1.11-2.74-.73C1,8.24,2,7.15,2,7.15Z" style="fill: none;stroke: #8a3685;stroke-width: 1.5px"></path><path d="M7.33,8.85l6,6.16a1,1,0,0,0,1.28-.07,1.16,1.16,0,0,0,.15-1.28L8.9,7.37" style="fill: #8a3685; stroke:none"></path></svg>'},"./resources/comments/newUser.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20"><path d="M1.46,1.5S3.49,4.89,7,5.07c1.49.07,3.35.25,4.06.79,1.41,1.09,2.3,2.08,1.74,4.37a4.91,4.91,0,0,1-4.36,3.49C5.08,14,2.89,10.29,2.33,9.35.41,6.12,1.46,1.5,1.46,1.5Z" style="fill:#69b508;stroke:none;stroke-width:0px"></path><path d="M12.5,11.5a3.39,3.39,0,0,1,2,2,3.16,3.16,0,0,1,0,2" style="fill:none;stroke:#69b508;stroke-width:2px"></path></svg>'},"./resources/comments/shareButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.111 12.5a3.701 3.701 0 0 1-1.09 2.41c-.479.47-.928.922-1.378 1.373-.45.45-.894.9-1.368 1.366a3.852 3.852 0 0 1-2.698 1.099 3.852 3.852 0 0 1-2.698-1.099 3.738 3.738 0 0 1-1.116-2.659c0-.997.402-1.953 1.116-2.658.479-.472.928-.923 1.378-1.375.45-.45.893-.9 1.368-1.365A3.936 3.936 0 0 1 9.638 8.59a3.968 3.968 0 0 1 2.24.258c.27-.269.546-.54.812-.806l.131-.13a5.086 5.086 0 0 0-3.182-.624A5.052 5.052 0 0 0 6.732 8.71c-.48.471-.929.922-1.377 1.373-.449.451-.894.9-1.37 1.366A4.982 4.982 0 0 0 2.5 14.992c0 1.328.534 2.602 1.486 3.543A5.13 5.13 0 0 0 7.58 20a5.13 5.13 0 0 0 3.595-1.465c.478-.471.927-.923 1.377-1.374.451-.451.894-.9 1.368-1.366a4.993 4.993 0 0 0 1.263-2.071c.243-.781.288-1.61.132-2.412L14.11 12.5Z" style="fill:currentColor;stroke:none;stroke-width:1px"></path><path d="M16.017 1.467A5.123 5.123 0 0 0 12.422 0a5.123 5.123 0 0 0-3.595 1.467c-.478.471-.926.923-1.377 1.374-.45.451-.894.9-1.367 1.366a4.966 4.966 0 0 0-1.106 1.624 4.907 4.907 0 0 0-.291 2.86l1.2-1.19a3.699 3.699 0 0 1 1.092-2.41c.478-.472.928-.923 1.377-1.374.45-.45.894-.9 1.368-1.366a3.844 3.844 0 0 1 2.698-1.101c1.012 0 1.982.396 2.698 1.101a3.736 3.736 0 0 1 1.116 2.66c0 .996-.401 1.953-1.116 2.658-.478.471-.927.922-1.377 1.373-.45.451-.893.9-1.368 1.367a3.933 3.933 0 0 1-2.014 1.003 3.966 3.966 0 0 1-2.24-.26c-.273.274-.551.549-.818.818l-.123.12a5.087 5.087 0 0 0 3.183.624 5.053 5.053 0 0 0 2.906-1.423c.477-.472.926-.923 1.376-1.375.45-.452.894-.9 1.368-1.365A4.977 4.977 0 0 0 17.5 5.008a4.977 4.977 0 0 0-1.488-3.543l.005.002Z" style="fill:currentColor;stroke:none;stroke-width:1px"></path></svg>'},"./resources/comments/sortButtons/controversial.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><polygon points="6.34 13.21 3.33 9.37 2.46 10.07 5.35 13.73 6.34 13.21" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><polygon points="4.11 13.02 3.11 11.75 0.76 13.47 1.7 14.55 4.11 13.02" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><path d="M5.67,9.62l-.8.66,1,1.32s.54-.31,1.31-.8A12,12,0,0,1,5.67,9.62Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></path><path d="M10.93,3.83A19.94,19.94,0,0,1,8.52,7.08c.57.52,1.29,1.08,1.8,1.46a11.2,11.2,0,0,0,1-1C14.21,4.3,14.7,2.11,14.7,2.11Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></path><polygon points="9.23 13.59 12.52 9.01 13.53 9.81 10.36 14.19 9.23 13.59" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><polygon points="11.61 12.82 12.66 11.36 15.26 13.26 14.28 14.52 11.61 12.82" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><path d="M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z" style="fill:currentColor"></path><path d="M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z" style="fill:none;stroke:none;stroke-miterlimit:10"></path></svg>'},"./resources/comments/sortButtons/old.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="5.28" cy="8.67" r="1" style="fill: currentColor"></circle><circle cx="9.28" cy="8.67" r="1" style="fill: currentColor"></circle><circle cx="12.26" cy="2.08" r="1.32" style="fill: currentColor"></circle><path d="M7.55,5.08c.09-2.83,3-3.59,4-3" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"></path><path d="M4.92,11.7s3,1,5,0" style="fill: blue;stroke: currentColor;stroke-miterlimit: 10"></path><path d="M7.72,5c3.31,0,6,2,6,4.5S11,14,7.72,14s-6-2-6-4.5S4.41,5,7.72,5m0-.5c-3.59,0-6.5,2.24-6.5,5s2.91,5,6.5,5,6.5-2.24,6.5-5-2.91-5-6.5-5Z" style="fill: currentColor"></path><path d="M10.85,5.5A1.56,1.56,0,0,1,13,5.31a1.34,1.34,0,0,1,.24,1.89" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px"></path><path d="M2.18,7a1.55,1.55,0,0,1,.53-2,1.33,1.33,0,0,1,1.86.4" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px"></path></svg>'},"./resources/comments/sortButtons/qa.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="10.77" cy="4.4" r="3" style="fill: currentColor"></circle><path d="M3.54,13.87l0,0a1.07,1.07,0,0,1-.46-1.35L6.4,7.44a1.05,1.05,0,0,1,1.48,0l.58.43c.54.41.74,1,.43,1.42L5,13.93A1.08,1.08,0,0,1,3.54,13.87Z" style="fill: currentColor"></path></svg>'},"./resources/comments/userTags/blockedButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m9.78126,18.09375c-4.41989,0 -8,-3.58011 -8,-8c0,-4.41989 3.58011,-8 8,-8c4.41989,0 8,3.58011 8,8c0,4.41989 -3.58011,8 -8,8z" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m4.43767,4.59392l10.81217,10.93716" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/blockedIcon.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="M3.11,3l7.94,8" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="M7,12.88A5.88,5.88,0,1,1,12.91,7,5.88,5.88,0,0,1,7,12.88Z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/comments/userTags/followedButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m1.56177,7.99265l5.62517,-1.11153l2.68713,-4.92101l3.02542,4.77603l5.28687,1.25651l-4.60571,3.96991l1.43072,5.79091l-5.28229,-2.56852l-4.99233,2.56852l1.09243,-6.03254l-4.26742,-3.72827l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/followedIcon.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m0.43678,5.49532l4.46205,-0.8817l2.13151,-3.90349l2.39985,3.78849l4.1937,0.9967l-3.65339,3.14905l1.13489,4.59352l-4.19007,-2.03743l-3.96007,2.03743l0.86655,-4.78519l-3.38505,-2.95738l0,-0.00001l0.00001,0z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/comments/userTags/likedButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m7.28935,15.93702c-4.80908,-3.55432 -6.52852,-5.80272 -6.54246,-8.55516c-0.0127,-2.50919 2.10985,-4.93093 4.30951,-4.91697c1.09841,0.00698 3.45457,0.93051 4.2889,1.6811c0.42039,0.37819 0.6195,0.3409 1.55543,-0.29133c2.54723,-1.72064 5.03461,-1.75676 6.64556,-0.09648c2.57463,2.65349 2.10589,5.82222 -1.34747,9.10906c-1.836,1.74747 -5.84543,4.84759 -6.26946,4.84759c-0.12903,0 -1.31703,-0.80001 -2.64001,-1.7778l0,0l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/likedIcon.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m5.10986,11.44595c-3.39081,-2.55084 -4.60316,-4.16445 -4.61299,-6.1398c-0.00896,-1.80077 1.48763,-3.53879 3.03857,-3.52877c0.77447,0.00501 2.43577,0.6678 3.02404,1.20648c0.29641,0.27142 0.4368,0.24465 1.09671,-0.20908c1.79601,-1.23486 3.54983,-1.26078 4.68568,-0.06924c1.81534,1.90433 1.48483,4.17844 -0.95008,6.53732c-1.29454,1.25411 -4.12153,3.47898 -4.4205,3.47898c-0.09098,0 -0.92862,-0.57415 -1.86143,-1.27588l0,0l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/comments/userTags/warningButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m1.24313,16.49297l8.78125,-13.75l8.78125,13.75l-17.5625,0z" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m9.875,7.5l0,4.5" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m9.875,14.09375l0,1" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/warningIcon.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m6.91754,10.29973l0,0.7153" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="m6.91754,5.38201l0,4.06927" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="m0.74313,12.0159l6.28126,-9.83543l6.28126,9.83543l-12.56252,0z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/feedButtons/feedButtonBest.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.82,1.51l1.43,3.4a.86.86,0,0,0,.66.47l3.62.28A.91.91,0,0,1,15,7.22L12.3,9.62a.84.84,0,0,0-.25.76l.81,3.55a.92.92,0,0,1-1.33,1L8.41,13a.91.91,0,0,0-.82,0L4.47,14.89a.92.92,0,0,1-1.33-1L4,10.38a.84.84,0,0,0-.25-.76L1,7.22a.91.91,0,0,1,.5-1.56l3.62-.28a.86.86,0,0,0,.66-.47l1.43-3.4A.91.91,0,0,1,8.82,1.51Z" style="fill:currentColor; stroke:none"></path></svg>'},"./resources/feedButtons/feedButtonBest_empty.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.82,1.51l1.43,3.4a.86.86,0,0,0,.66.47l3.62.28A.91.91,0,0,1,15,7.22L12.3,9.62a.84.84,0,0,0-.25.76l.81,3.55a.92.92,0,0,1-1.33,1L8.41,13a.91.91,0,0,0-.82,0L4.47,14.89a.92.92,0,0,1-1.33-1L4,10.38a.84.84,0,0,0-.25-.76L1,7.22a.91.91,0,0,1,.5-1.56l3.62-.28a.86.86,0,0,0,.66-.47l1.43-3.4A.91.91,0,0,1,8.82,1.51Z" style="fill:none; stroke:currentColor"></path></svg>'},"./resources/feedButtons/feedButtonHot.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.49,2.93c.7,1.56,3,2.81,3.69,3.52a5.14,5.14,0,0,1,1.36,5.45c-1.09,3.37-4.49,3.38-6.21,3.38s-4.18-.28-5-3,.8-4.41,1-5,1.06,2.52,2,3.12c1.19.79,2.85,0,2.85-1.18S6.72,7.65,6.44,5.37a10.62,10.62,0,0,1,1-4.9S7.83,1.46,8.49,2.93Z" style="stroke:currentColor;fill:currentColor;stroke-width:0.5px"></path></svg>'},"./resources/feedButtons/feedButtonNew.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,15.5A7.5,7.5,0,1,1,15.5,8,7.5,7.5,0,0,1,8,15.5Zm0-14A6.5,6.5,0,1,0,14.5,8,6.51,6.51,0,0,0,8,1.5Z" style="fill:currentColor;stroke:currentColor;stroke-width:0.5px"></path><path d="M8,2V8l4-2" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/feedButtons/feedButtonRising.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1.1,14.67c1.4-2.8,3.62-6.84,3.62-6.84L9,12.18l4.13-9.94" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="M8.5,4.5l4.68-2.45S14,5.31,14.5,7.5" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/feedButtons/feedButtonTop.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.51,6.56,9.13,1.17a1.61,1.61,0,0,0-2.26,0L1.49,6.56a1,1,0,0,0,.72,1.73H5.52V14A1.28,1.28,0,0,0,6.8,15.3H9.23A1.29,1.29,0,0,0,10.52,14V8.29h3.27A1,1,0,0,0,14.51,6.56Z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/imageCloseButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="m33.16001,9.52439l-2.37671,-2.37671l-10.691,10.691l-10.691,-10.691l-2.37671,2.37671l10.691,10.691l-10.691,10.691l2.37671,2.37671l10.691,-10.691l10.691,10.691l2.37671,-2.37671l-10.691,-10.691l10.691,-10.691z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/postUnwrapButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M12.5,18.75A2.36,2.36,0,0,1,10.83,18L2.47,9.53,3.53,8.47,11.9,17a.79.79,0,0,0,1.2,0l8.37-8.5,1.06,1.06L14.17,18A2.36,2.36,0,0,1,12.5,18.75Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10;stroke-width:0px"></path></svg>'},"./resources/scrollButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M27.58,27.12,21,20.53a1.42,1.42,0,0,0-2,0l-6.58,6.59a1.41,1.41,0,0,0,1,2.41H26.58A1.41,1.41,0,0,0,27.58,27.12Z" style="fill:currentColor"></path><rect x="5" y="11.75" width="30" height="2.5" style="fill:currentColor"></rect></svg>'},"./resources/settingsArrow.svg":l=>{l.exports='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.942 15.442-.884-.884L11.616 10 7.058 5.442l.884-.884 5 5a.624.624 0 0 1 0 .884l-5 5Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/settingsButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.07,2.25a.33.33,0,0,1,.33.33V6.72h1.25a2.11,2.11,0,0,1,0,4.21H15.4v4.14a.33.33,0,0,1-.33.33H10.93v1.25a2.11,2.11,0,0,1-4.21,0V15.4H2.58a.33.33,0,0,1-.33-.33v-3A3.51,3.51,0,0,0,4.49,8.82,3.48,3.48,0,0,0,2.25,5.57v-3a.33.33,0,0,1,.33-.33H5.34a3.49,3.49,0,0,0,7,0h2.76m0-1.25H10.75A2.24,2.24,0,1,1,6.9,1H2.58A1.58,1.58,0,0,0,1,2.58v4a2.24,2.24,0,1,1,0,4.47v4a1.58,1.58,0,0,0,1.58,1.58H5.47a3.36,3.36,0,0,0,6.71,0h2.89a1.58,1.58,0,0,0,1.58-1.58V12.18a3.36,3.36,0,0,0,0-6.71V2.58A1.58,1.58,0,0,0,15.07,1Z"></path></svg>'},"./resources/subFilter.svg":l=>{l.exports='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z" style="stroke:none;stroke-width:0px"></path></svg>'},"./resources/subFilterClear.svg":l=>{l.exports='<svg fill="currentColor" icon-name="clear-outline" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/windowCloseButton.svg":l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14,2h0a.75.75,0,0,0-1.06,0L8.15,6.78a.2.2,0,0,1-.3,0L3.06,2A.75.75,0,0,0,2,2H2A.75.75,0,0,0,2,3.06L6.78,7.85a.2.2,0,0,1,0,.3L2,12.94A.75.75,0,0,0,2,14H2a.75.75,0,0,0,1.06,0L7.85,9.22a.2.2,0,0,1,.3,0L12.94,14A.75.75,0,0,0,14,14h0a.75.75,0,0,0,0-1.06L9.22,8.15a.2.2,0,0,1,0-.3L14,3.06A.75.75,0,0,0,14,2Z"></path></svg>'}},We={};function _(l){var c=We[l];if(c!==void 0)return c.exports;var i=We[l]={id:l,exports:{}};return vt[l](i,i.exports,_),i.exports}_.n=l=>{var c=l&&l.__esModule?()=>l.default:()=>l;return _.d(c,{a:c}),c},_.d=(l,c)=>{for(var i in c)_.o(c,i)&&!_.o(l,i)&&Object.defineProperty(l,i,{enumerable:!0,get:c[i]})},_.o=(l,c)=>Object.prototype.hasOwnProperty.call(l,c);var en={};(()=>{"use strict";async function c(e,t=0){return new Promise(o=>{let s=e();if(s!=null)return o(s);let n=t/10;const r=setInterval(()=>{s=e();let u=!1;if(t>0&&(n--,n<0&&(u=!0)),s!=null||u)return clearInterval(r),o(s)},10)})}function i(e,t,o=!0){const s=t(e);if(s!=null&&s==!0)return;let n=new MutationObserver(r=>{for(const u of r)for(const d of u.addedNodes)if(n&&d instanceof HTMLElement){const f=t(d);f!=null&&f==!0&&(n.disconnect(),n=null)}});n.observe(e,{childList:!0,subtree:o})}function h(e,t="pp-rendered"){return e==null||e.getAttribute(t)!=null?!0:(e.setAttribute(t,""),!1)}function a(e,t,o=null){const s=document.createElement(t);if(o!=null)if(typeof o=="string"&&o)s.classList.add(o);else for(const n of o)s.classList.add(n);return e.append(s),s}function g(e){return document.cookie.split("; ").find(t=>t.startsWith(e))?.split("=")[1]}function v(e,t){if(e==t)return!1;const o=e.split("."),s=t.split(".");for(const n of[0,1,2]){const r=parseInt(o[n]),u=parseInt(s[n]);if(r!=u)return r<u}return!1}class m{}const E=3e3;async function K(e,t={}){let o=await c(()=>document.body?.querySelector("alert-controller")?.shadowRoot?.querySelector("toaster-lite")),s=document.createElement("faceplate-toast");s.classList.add("theme-rpl"),t.color!=null&&(s.style.backgroundColor=t.color),s.textContent=e,o.appendChild(s),setTimeout(()=>{s.setAttribute("_fading","")},t?.time??E)}function F(e){console.log(`Reddit++: ${e}`)}const te="DATABASE_VERSION";class oe{constructor(t,o,s=null){this.version=t,this.action=o,this.previous=s}check(){const t=GM_getValue(te,null);(t==null||v(t,this.version))&&(this.previous?.check(),this.action(),GM_setValue(te,this.version),K(`Reddit++ was upgraded to ${this.version}`))}}const B=new oe("1.0.0",()=>{const e=GM_getValue("SETTINGS_DATABASE",null);if(e==null)return;const t=e.savedBookmark;t!=null&&(e.savedBookmarkPosts=t,e.savedBookmarkComments=t,delete e.savedBookmark);const o=e.savedBookmarkHideUnsaved;o!=null&&(e.savedBookmarkPostsShowAlways=!o,e.savedBookmarkCommentsShowAlways=!o,delete e.savedBookmarkHideUnsaved),GM_setValue("SETTINGS_DATABASE",e)});var Et=_("./src/modules/wideMode.less");class wt{constructor(){this.rootStylesheet=new CSSStyleSheet,this.styleSheets=[this.rootStylesheet],this.styleKeys=new Set,this.sources=[],this.registry(document)}registry(t){this.sources.push(t);for(const o of this.styleSheets)t.adoptedStyleSheets.push(o)}addStyle(t,o=null){if(o!=null){if(this.styleKeys.has(o))return;this.styleKeys.add(o)}const s=new CSSStyleSheet;s.replaceSync(t),this.styleSheets.push(s);for(const n of this.sources)n.adoptedStyleSheets.push(s)}addRule(t){this.rootStylesheet.insertRule(t,0)}addVar(t,o,s=null){this.addRule(`:root.theme-light { ${t}: ${o} !important;}`),this.addRule(`:root { ${t}: ${s??o};}`)}}const x=new wt;class tn{}const je={isComment:!0},xe={isComment:!1},O=2e3,ye=60*60,Ae=ye*24;class St{}class H{constructor(t,o=new St){if(this.databaseKey=t+"_DATABASE",this.refreshKey=t+"_REFRESHED",this.cleanupKey=t+"_CLEANUP",this.isCleanupable=o?.isCleanupable??!1,this.validator=o?.validator??null,this.loader=o?.loader??null,this.refresh(),this.isCleanupable&&GM_getValue(this.cleanupKey,0)<Date.now()){const s=Date.now()-2e3*Ae;this.data=Object.fromEntries(Object.entries(this.data).filter(([n,r])=>r.timestamp>s)),this.refreshed=Date.now(),GM_setValue(this.databaseKey,this.data),GM_setValue(this.refreshKey,this.refreshed),GM_setValue(this.cleanupKey,Date.now()+1e3*ye)}}refresh(){const t=GM_getValue(this.refreshKey,0);(this.data==null||this.refreshed<t)&&(this.refreshed=t,this.data=GM_getValue(this.databaseKey,{}))}get(t){this.refresh();const o=this.data[t];return o??{}}async getWithLoader(t,o=null){this.refresh();const s=this.data[t];let n=s??{},r=!1;return this.validator(n)&&(n=await this.loader(t),this.set(t,n),r=!0),o?.(r),n}set(t,o){this.refresh(),this.isCleanupable&&(o.timestamp=Date.now()),this.data[t]=o,this.refreshed=Date.now(),GM_setValue(this.databaseKey,this.data),GM_setValue(this.refreshKey,this.refreshed)}}var T;(function(e){e[e.Sub=0]="Sub",e[e.Home=1]="Home",e[e.Popular=2]="Popular",e[e.All=3]="All"})(T||(T={}));function bt(){return window.location.href.includes("?feed=home")||window.location.href=="https://www.reddit.com/"?T.Home:window.location.href.includes("reddit.com/r/popular/")?T.Popular:window.location.href.includes("reddit.com/r/all/")?T.All:T.Sub}function se(e){const t=["Hot","New","Top","Rising"];return e==T.Home||e==T.Popular?["Best"].concat(t):t}class b{constructor(t,o=!0){this.name=t,this.defailtValue=o}isEnabled(){const t=pe.get(this.name);return t instanceof Object?this.defailtValue:t}isDisabled(){return!this.isEnabled()}switch(t=null){pe.set(this.name,t??this.isDisabled())}getChild(t,o=!0){return new b(this.name+t,o)}}class z{constructor(t,o,s=0){this.name=t,this.values=o,this.defaultIndex=s}get(){const t=pe.get(this.name);return t instanceof Object?this.values[this.defaultIndex]:t}isDefault(){return this.get()==this.values[this.defaultIndex]}switch(t){let o=this.values.indexOf(this.get())+t;o<0&&(o=this.values.length-1),o>=this.values.length&&(o=0),pe.set(this.name,this.values[o])}}class xt{constructor(){this.revision=this.getRevision(),this.WIDE_MODE=new b("wideMode"),this.CONTENT_WIDTH=new z("contentWidth",["650px","700px","750px","800px","900px","1000px"],1),this.CONTENT_OFFSET=new z("contentOffset",["-1000px","-900px","-800px","-700px","-600px","-500px","-400px","-300px","-200px","-100px","0px","100px","200px","300px","400px","500px","600px","700px","800px","900px","1000px"],10),this.BIGGER_FONTS=new b("biggerFonts"),this.NOTIFY_POPUP=new b("notifyPopup"),this.REDIRECT_SUGGESTION=new b("redirectSuggestion"),this.REDIRECT_FORCED=new b("redirectForced",!1),this.SUB_FILTER=new b("sidebarSubFilter"),this.SIDEBAR_CUSTOMS=new b("sidebarCustoms"),this.SIDEBAR_RECENT=new b("sidebarRecent"),this.SIDEBAR_SUBS=new b("sidebarSubs"),this.SIDEBAR_RESOURCES=new b("sidebarResources"),this.SCROLL_TO_TOP=new b("scrollToTop"),this.COLLAPSE_AWARDS=new b("collapseAwards"),this.COLLAPSE_AWARDS_COMPLETELY=new b("collapseAwardsCompletely",!1),this.IMAGE_VIEWER=new b("imageViewer"),this.DEFAULT_FEED_HOME=new z("defaultFeedHome",se(T.Home),0),this.DEFAULT_FEED_POPULAR=new z("defaultFeedPopular",se(T.Popular),1),this.DEFAULT_FEED_ALL=new z("defaultFeedAll",se(T.All),0),this.DEFAULT_FEED_SUB=new z("defaultFeedSub",se(T.Sub),0),this.FEED_BUTTONS=new b("feedButtons"),this.FLAIR_BAR=new b("flairbar"),this.COLLAPSE_HIGHLIGHTS=new b("collapseHighlights",!1),this.BACKPLATES=new b("backplates"),this.SELECTABLE_POSTS=new b("selectablePosts"),this.UNWRAP_POST=new b("unwrapPost"),this.SHOW_POST_AUTHOR=new b("showPostAuthor"),this.SAVED_BOOKMARK_POSTS=new b("savedBookmarkPosts"),this.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS=new b("savedBookmarkPostsShowAlways",!1),this.COMMENTS_SORT_BUTTONS=new b("commentSortButtons"),this.COMMENTS_REMEMBER_SORT=new b("commentRememberSort"),this.UNWRAP_MORE_REPLIES=new b("unwrapMoreReplies",!1),this.USER_INFO=new b("userInfo"),this.USER_TAGS=new b("userTags"),this.SHOW_NAMES=new b("showNames"),this.HIDE_SHARE=new b("hideShare"),this.GHOSTED_COMMENTS=new b("ghostedComments"),this.COLLAPSE_AUTOMODERATOR=new b("collapseAutomoderator"),this.SAVED_BOOKMARK_COMMENTS=new b("savedBookmarkComments"),this.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS=new b("savedBookmarkCommentsShowAlways",!1),this.HIDE_RELATED_POSTS=new b("hideRelatedPosts",!1),window.addEventListener("storage",t=>{this.isDirt()&&document.addEventListener("visibilitychange",()=>{window.location.reload()},{once:!0})})}getRevision(){return parseInt(localStorage.getItem("pp_settings_s_revision")??"0")}nextRevision(){this.revision++,localStorage.setItem("pp_settings_s_revision",String(this.revision))}isDirt(){return this.getRevision()!=this.revision}}const pe=new H("SETTINGS"),p=new xt;function yt(e,t){if(p.WIDE_MODE.isDisabled()||(x.addStyle(Et.A,"wideMode"),x.addVar("--pp-content-width",p.CONTENT_WIDTH.get()),x.addVar("--pp-content-offset",p.CONTENT_OFFSET.get()),t.parentNode==e))return;const o=t.parentElement;let s=!(window.innerWidth>=1392);const n=e.querySelector(".main-container");n.className="main-container gap-lg w-full",i(e,r,!1),i(o,r,!1);function r(d){return d.classList.contains("rounded-[16px]")&&(d.classList.add("pp_rightSidebar_contextLookup"),window.innerWidth<1392&&d.parentNode!=t.parentNode&&t.after(d)),!1}u(),window.addEventListener("resize",d=>{u()});function u(){window.innerWidth>=1392&&!s&&(e.prepend(t),s=!0),window.innerWidth<1392&&s&&(o.append(t),s=!1)}}var At=_("./src/modules/app.less"),Ct=_("./src/modules/sidebar/sidebar.less"),Bt=_("./src/modules/sidebar/subFilter.less");const Ce="none",Be="currentColor";class on{}class sn{constructor(){this.strokeColor=Be,this.fillColor=Ce}}function L(e,t,o,s={}){const n=document.createElement("div");n.innerHTML=e;const r=n.firstChild;return r.setAttribute("width",`${t}px`),r.setAttribute("height",`${o}px`),s.viewBox!=null&&r.setAttribute("viewBox",`0 0 ${s.viewBox.w} ${s.viewBox.h}`),r.setAttribute("fill",s?.fillColor??Be),r.setAttribute("stroke",s?.strokeColor??Be),r}class Z{}Z.COMMENTS_CURRENT_SORT="COMMENTS_CURRENT_SORT",Z.SUB_FILTER="SUB_FILTER";const me=new H("PREFS");var Ot=_("./resources/subFilter.svg"),Tt=_.n(Ot),Lt=_("./resources/subFilterClear.svg"),Mt=_.n(Lt);x.addStyle(Bt.A);let ne;async function Dt(e){if(h(e,"pp-sub-filter"))return;const t=a(e,"div","pp_subFilter_container"),o=await c(()=>e.querySelector(".left-nav-create-community-button"));o.style.width="65px",(await c(()=>o.querySelector(".text-14"))).remove(),o.replaceWith(t),t.append(o);const n=a(t,"div",["pp_subFilter","button","button-bordered"]);n.setAttribute("tabindex","0");const r=n.attachShadow({mode:"open"});x.registry(r);const u=a(n,"span",["flex","items-center","justify-center","pp_subFilter_span"]);r.appendChild(u);const d=a(u,"span",["flex","items-center","justify-center"]),f=L(Tt(),16,16);d.append(f);const w=a(u,"div",["label-container","without-label"]),y=a(w,"span",["input-container","activated"]),S=a(y,"input","pp_subFilter_input");S.type="text",S.placeholder="Filter";const C=a(t,"div","pp_pp_subFilter_clearContainer"),A=a(C,"button",["pp_subFilter_clear","button-plain","pp_hidden"]),M=L(Mt(),16,16);A.append(M),n.addEventListener("focus",()=>{o.style.display="none"}),n.addEventListener("focusout",()=>{o.style.display="block"}),S.addEventListener("input",()=>{const D=S.value.trim().toLowerCase();Oe(D),A.classList.toggle("pp_hidden",D.length==0)}),A.addEventListener("click",()=>{S.value="",Oe(""),A.classList.toggle("pp_hidden",!0)}),ne?.clear(),ne=new Map,e.querySelector("left-nav-communities-controller").shadowRoot.querySelectorAll("left-nav-community-item").forEach(D=>{ne.set(D.getAttribute("prefixedname").replace("r/","").toLowerCase(),D)});const R=me.get(Z.SUB_FILTER);R instanceof Object||(S.value=R,Oe(R),A.classList.toggle("pp_hidden",R.length==0))}function Oe(e){me.set(Z.SUB_FILTER,e),ne.forEach((t,o)=>{o.includes(e)?t.style.removeProperty("display"):t.style.display="none"})}x.addStyle(Ct.A);let Fe=!1;function Rt(e){e.classList.add("pp_defaultText"),i(e,t=>{const o=t.matches("faceplate-expandable-section-helper")?t:e.querySelector("faceplate-expandable-section-helper");if(o==null)return;const s=e.querySelector('summary[aria-controls="multireddits_section"]');if(s!=null)return fe(o,p.SIDEBAR_CUSTOMS,async()=>{const n=await c(()=>o.getAttribute("open"));return{container:o,button:s,hr:o.nextElementSibling}}),!0}),i(e,t=>{const o=t.matches("faceplate-expandable-section-helper")?t:e.querySelector("faceplate-expandable-section-helper");if(o==null)return;const s=e.querySelector('summary[aria-controls="communities_section"]');if(s!=null)return Dt(o),fe(o,p.SIDEBAR_SUBS,async()=>{const n=await c(()=>o.getAttribute("open"));let r=o.nextElementSibling;for(;r!=null&&!r.matches("hr");)r=r.nextElementSibling;return{container:o,button:s,hr:r}}),!0}),i(e,t=>{let o=e.querySelector("reddit-recent-pages");if(o==null&&t.matches("reddit-recent-pages")&&(o=t),o!=null)return fe(o,p.SIDEBAR_RECENT,async()=>{const s=await c(()=>{const r=o.shadowRoot?.querySelector("faceplate-expandable-section-helper");return r?.getAttribute("open")!=null?r:null}),n=await c(()=>s?.querySelector("summary"));return x.registry(o.shadowRoot),s.classList.add("pp_defaultText"),{container:s,button:n,hr:o.querySelector("hr")}}),!0}),Fe||(Fe=!0,i(e,t=>{const o=e.querySelector('summary[aria-controls="RESOURCES"]');if(o!=null){const s=o.parentElement.parentElement,n={container:s,button:o,hr:null};return fe(s,p.SIDEBAR_RESOURCES,()=>n),!0}}))}class nn{}async function fe(e,t,o){if(h(e))return;e.classList.add("pp_sidebar_loadingSection");const s=await o();if(e.classList.remove("pp_sidebar_loadingSection"),t.isEnabled()){const n=t.getChild("Collapsed",!1),r=s.container.querySelector("details");n.isEnabled()&&(s.container.toggleAttribute("open",!1),r.classList.add("pp_sidebar_collapsedSection")),s.button.addEventListener("click",u=>{const d=u.currentTarget;setTimeout(()=>{const f=d.getAttribute("aria-expanded")==="false";n.switch(f)},10),r.classList.toggle("pp_sidebar_collapsedSection",!1)})}else s.container.remove(),s.hr?.remove()}var Pt=_("./src/modules/biggerFonts.less");p.BIGGER_FONTS.isEnabled()&&x.addStyle(Pt.A);function rn(){}var kt=_("./resources/imageCloseButton.svg"),It=_.n(kt),Ut=_("./src/utils/imageViewer.less");x.addStyle(Ut.A);class an{}class ln{}class Wt{constructor(){this.openned=!1,this.viewer=null,this.container=null,this.image=null,this.mouse={x:0,y:0},this.drag={enabled:!1,start:{x:0,y:0},current:{x:0,y:0},scale:1},this.scrollImage=this.scrollImage.bind(this),this.startDrag=this.startDrag.bind(this),this.mouseMove=this.mouseMove.bind(this),this.endDrag=this.endDrag.bind(this)}open(t){this.openned||(this.openned=!0,this.viewer==null&&this.build(),this.image.src=t,window.addEventListener("wheel",this.scrollImage,{passive:!1}),this.image.addEventListener("mousedown",this.startDrag),document.addEventListener("mousemove",this.mouseMove),this.image.addEventListener("mouseup",this.endDrag),this.image.addEventListener("mouseleave",this.endDrag),this.drag.current={x:0,y:0},this.drag.scale=1,this.updateTransform(),document.body.appendChild(this.viewer))}close(){this.viewer.remove(),this.drag.enabled=!1,this.container.classList.toggle("pp_imageViewer_drag",!1),window.removeEventListener("wheel",this.scrollImage),this.image.removeEventListener("mousedown",this.startDrag),document.removeEventListener("mousemove",this.mouseMove),this.image.removeEventListener("mouseup",this.endDrag),this.image.removeEventListener("mouseleave",this.endDrag),this.openned=!1}build(){this.viewer=document.createElement("div"),this.viewer.classList.add("pp_imageViewer"),this.viewer.dataset.open=String(!1);const t=a(this.viewer,"div","pp_imageViewer_closeButton"),o=L(It(),40,40);t.appendChild(o),this.container=a(this.viewer,"div","pp_imageViewer_imageContainer"),this.image=a(this.container,"img","pp_imageViewer_image"),this.image.alt="Comment image",this.image.ondragstart=function(){return!1},this.viewer.addEventListener("click",s=>{s.target!=this.image&&this.close()}),t.addEventListener("click",()=>{this.close()})}updateTransform(){this.container.style.transform=`translate(${this.drag.current.x}px, ${this.drag.current.y}px) scale(${this.drag.scale}, ${this.drag.scale})`}startDrag(t){this.drag.start.x=t.screenX-this.drag.current.x,this.drag.start.y=t.screenY-this.drag.current.y,this.drag.enabled=!0,this.container.classList.toggle("pp_imageViewer_drag",!0)}mouseMove(t){this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.drag.enabled&&(this.drag.current.x=t.screenX-this.drag.start.x,this.drag.current.y=t.screenY-this.drag.start.y,this.updateTransform())}endDrag(){this.fit(1),this.drag.enabled=!1,this.container.classList.toggle("pp_imageViewer_drag",!1)}scrollImage(t){const o=Math.max(1,1+Math.log2(this.drag.scale*this.drag.scale)),s=this.drag.scale;this.drag.scale=Math.max(.5,this.drag.scale+-t.deltaY/1e3*o);const n=this.image.getBoundingClientRect(),r=n.height/2,u=n.width/2,d=n.y+r,f=n.x+u,w=this.drag.scale/s-1;this.drag.current.y-=Math.min(Math.max(this.mouse.y-d,-r),r)*w,this.drag.current.x-=Math.min(Math.max(this.mouse.x-f,-u),u)*w,t.deltaY>0&&(this.drag.current.y/=1.1,this.drag.current.x/=1.1),this.fit(.33),t.preventDefault()}fit(t){const s=this.image.getBoundingClientRect(),n=0-s.left,r=s.right-window.innerWidth+0;n>0&&r<0?this.drag.current.x+=(s.width>window.innerWidth?-r:n)*t:n<0&&r>0&&(this.drag.current.x+=(s.width>window.innerWidth?n:-r)*t);const u=0-s.top,d=s.bottom-window.innerHeight+0;u>0&&d<0?this.drag.current.y+=(s.height>window.innerHeight?-d:u)*t:u<0&&d>0&&(this.drag.current.y+=(s.height>window.innerHeight?u:-d)*t),this.updateTransform()}}const Te=new Wt;var jt=_("./src/modules/bookmark.less"),Ft=_("./resources/bookmarkSaved.svg"),Kt=_.n(Ft),Nt=_("./resources/bookmarkUnsaved.svg"),Ht=_.n(Nt);x.addStyle(jt.A);function Ke(e,t=!1){if(p.SAVED_BOOKMARK_COMMENTS.isDisabled())return;const s=(e.querySelector("shreddit-overflow-menu")?.shadowRoot?.querySelector("faceplate-dropdown-menu")).querySelector(".save-comment-menu-button"),n=s.querySelector(".text-14");s.addEventListener("click",()=>{Ke(e,!0)});let r=n.textContent=="Remove from saved";if(t&&(r=!0),r||t||p.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS.isEnabled()){const u=e.querySelector("shreddit-comment-action-row")?.shadowRoot?.querySelector("button[downvote]");x.registry(e.querySelector("shreddit-comment-action-row")?.shadowRoot);const d=u.cloneNode(!0);u.after(d);let f=d.querySelector("svg");f=he(f,r),d.addEventListener("click",()=>{r=!r,f=he(f,r)}),d.append(s),s.classList.add("pp_bookmark_hiddenButton")}}async function Le(e,t=!1,o=void 0){if(p.SAVED_BOOKMARK_POSTS.isDisabled())return;const s=await c(()=>e.querySelector("shreddit-post-overflow-menu")?.shadowRoot?.querySelector("faceplate-dropdown-menu")?.querySelector("faceplate-menu"),3e3);if(s==null)return;let n=!0,r=null;if(s.querySelectorAll("li").forEach(d=>{const f=d.querySelector(".text-14");f.textContent=="Save"&&(n=!1),(f.textContent=="Save"||f.textContent=="Remove from saved")&&(r=d)}),r==null){const d=e.shadowRoot?.querySelector("button[upvote]"),f=e.shadowRoot?.querySelector("button[bookmark]");f.className=d.className,f.classList.add("pp_bookmark_post");return}if(r.addEventListener("click",()=>{Le(e,!0,!0)}),(e.shadowRoot?.querySelector("button[upvote]")).addEventListener("click",()=>{Le(e,!0)}),o!=null&&(n=o),n||t||p.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS.isEnabled()){const d=e.shadowRoot?.querySelector("button[downvote]"),f=d.cloneNode(!0);f.classList.add("pp_bookmark_post"),f.removeAttribute("disabled"),f.removeAttribute("downvote"),f.setAttribute("bookmark",""),d.after(f);let w=f.querySelector("svg");w=he(w,n),f.addEventListener("click",()=>{n=!n,w=he(w,n)}),f.append(r),r.classList.add("pp_bookmark_hiddenButton")}}function he(e,t){const o=L(t?Kt():Ht(),20,20);return o.setAttribute("width","16px"),o.setAttribute("height","16px"),e.replaceWith(o),o}var Ne=_("./src/modules/collapseAwards.less");x.addStyle(Ne.A);async function He(e,t){if(p.COLLAPSE_AWARDS.isDisabled())return;x.addStyle(Ne.A,"collapseAwards");const o=t.isComment?e.querySelector("award-button"):e.shadowRoot.querySelector("award-button");if(o!=null){if(p.COLLAPSE_AWARDS_COMPLETELY.isEnabled()){o.remove();return}if(o.getAttribute("count")=="0"){t.isComment||x.registry(e.shadowRoot);const s=t.isComment?e.querySelector("shreddit-comment-action-row")?.shadowRoot:e?.shadowRoot,n=await c(()=>s?.querySelector("button[upvote]"),O);if(n==null)return;o.classList.toggle("pp_awardButton_hidden",ge(n)),o.classList.toggle("pp_awardButton_collapsed",ge(n)),setTimeout(()=>{o.classList.add("pp_awardButton")},500),n.addEventListener("click",()=>{o.classList.toggle("pp_awardButton_hidden",ge(n)),setTimeout(()=>{o.classList.toggle("pp_awardButton_collapsed",ge(n))},10)})}}}function ge(e){return e.getAttribute("aria-pressed")!="true"}class dn{}class cn{}function Ve(e,t,o){const s=a(e,"a","no-decoration");s.href="/r/"+t+"/?f=flair_name%3A%22"+o.text+"%22";const n=a(s,"span",["bg-tone-4","inline-block","truncate","max-w-full","text-12","font-normal","box-border","px-[6px]","rounded-[20px]","leading-4","max-w-full","py-xs","!px-sm","leading-4","h-xl","inline-flex"]);n.classList.add(o.color=="light"?"text-global-white":"text-global-black"),n.style.backgroundColor=o.background;for(const r of o.richtext){if(r.e=="text"){const u=document.createTextNode(r.t);n.appendChild(u)}if(r.e=="emoji"){const u=document.createElement("faceplate-img");u.classList.add("flair-image"),u.setAttribute("loading","lazy"),u.setAttribute("width","16"),u.setAttribute("height","16"),u.setAttribute("src",r.u),u.setAttribute("alt",r.a),n.appendChild(u)}}if(o.richtext.length==0){const r=document.createTextNode(o.text);n.appendChild(r)}}var Vt=_("./src/modules/subs/flairBar.less");x.addStyle(Vt.A);async function qe(e){if(p.FLAIR_BAR.isDisabled())return;let t=await c(()=>e?.querySelector("shreddit-title")?.parentElement,O);if(t==null)return;const o=e?.querySelector("community-highlight-carousel");o!=null&&(t=o);const s=t.parentElement?.querySelector(".pp_flairBar")?.parentElement;s?.remove();const n=ve(),r=await Xe.getWithLoader(n),u=re.get(n);if(r.flairs==null||r.flairs.length==0)return;const d=document.createElement("div");t.before(d);const f=a(d,"div","pp_flairBar");o!=null&&f.classList.add("pp_flairBar_highlights");const w=a(f,"ul",["p-0","m-0","list-none","gap-xs","flex","flex-row","pp_flairBar_list"]);let y=0;for(const W of r.flairs){if(u.hidden!=null&&u.hidden.includes(W.text))continue;const G=a(w,"li","max-w-full");Ve(G,n,W),y++}if(y==0){d.remove();return}const S=document.createElement("div");S.classList.add("pp_flairBar_bordersContainer"),d.prepend(S);const C=a(S,"div","pp_flairBar_preBorder"),A=a(C,"div",["pp_flairBar_border","pp_flairBar_border_left"]);A.textContent=" ";const M=a(S,"div","pp_flairBar_preBorder"),I=a(M,"div",["pp_flairBar_border","pp_flairBar_border_right"]);I.textContent=" ";const R=document.createElement("hr");R.classList.add("border-0","border-b-sm","border-solid","border-b-neutral-border-weak"),d.prepend(R);const D=document.createElement("div");D.classList.add("my-xs","mx-2xs0"),d.prepend(D),w.style.left="25px";const P=w.getBoundingClientRect(),q=f.getBoundingClientRect();f.addEventListener("mousemove",W=>{qt(W,w,f)}),P.width>q.width*1.72&&w.classList.add("pp_flairBar_listSmoothed")}function qt(e,t,o){const s=t.getBoundingClientRect(),n=o.getBoundingClientRect();if(s.width<n.width){t.style.left="25px";return}let r=(e.clientX-(n.x+25))/(n.right-25-(n.x+25));r=Math.max(0,Math.min(r,1)),t.style.left=`${Math.round(25-(s.width-n.width+50)*r)}px`}var Gt=_("./src/modules/subs/subs.less"),Xt=_("./src/utils/window.less"),$t=_("./src/utils/checkbox.less"),zt=_("./resources/windowCloseButton.svg"),Zt=_.n(zt);x.addStyle(Xt.A),x.addStyle($t.A);class Ge{constructor(t,o,s=null){this.tittle=t,this.render=o,this.onClose=s,this.container=null,this.content=null,this.closeButton=null}build(){this.container=document.createElement("div"),this.container.classList.add("pp_window_container"),this.container.addEventListener("click",r=>{r.target==this.container&&this.close()});const t=a(this.container,"div","pp_window"),o=a(t,"div","pp_window_tittleContainer");let s=a(o,"div",["pp_window_tittle","flex","flex-row"]);s=a(s,"span",["text-24","font-semibold"]),s.textContent=this.tittle,this.closeButton=a(o,"div",["pp_window_closeButton","flex","items-center"]),this.closeButton=a(this.closeButton,"button",["button","icon","inline-flex","items-center","justify-center","button-small","button-secondary","px-[var(--rem6)]"]),this.closeButton.setAttribute("tittle",`Close ${this.tittle}`),this.closeButton.addEventListener("click",r=>{this.close()}),this.closeButton=a(this.closeButton,"span",["flex","items-center","justify-center"]),this.closeButton=a(this.closeButton,"span",["flex"]);const n=L(Zt(),16,16,{strokeColor:Ce});this.closeButton.append(n),a(t,"hr","border-b-neutral-border-weak"),this.content=a(t,"div","pp_window_content"),a(t,"div","pp_window_footer").textContent=" "}open(t=null){for(this.container==null&&this.build();this.content.firstChild;)this.content.removeChild(this.content.lastChild);this.render(this,t),document.body.appendChild(this.container),document.body.style.overflow="hidden"}close(){this.container.remove(),document.body.style.overflow="visible",this.onClose!=null&&this.onClose()}}var Yt=_("./src/modules/subs/flairWindow.less");x.addStyle(Yt.A);const Qt=new Ge("Flairs settings",Jt,eo);class un{}function Jt(e,t){const o=a(e.content,"div",["pp_window_element","pp_flairWindow_columnTittle"]),s=a(o,"div","pp_checkBox_panelArea"),n=a(s,"div",["text-14","font-semibold","mb-xs"]);n.textContent="Flairs bar:";const r=a(o,"div","pp_checkBox_panelArea"),u=a(r,"div",["text-14","font-semibold","mb-xs"]);u.textContent="Feed:";const d=a(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),f=a(d,"div","pp_window_elementsContainer"),w=Xe.get(t.sub);for(const y of w.flairs){let M=function(I){const R=a(S,"div","pp_checkBox_panelArea"),D=a(R,"div","pp_checkBox_container"),P=a(D,"button","pp_checkBox_button"),q=!(A[I]?.includes(y.text)??!1);P.classList.toggle("pp_checkBox_buttonActive",q);const W=a(P,"div","pp_checkBox_knob");P.addEventListener("click",G=>{const j=re.get(t.sub);let X=j[I]?.includes(y.text)??!1;if(P.classList.toggle("pp_checkBox_buttonActive",X),X)j[I]=j[I].filter($=>$!=y.text);else{const $=j[I]??[];$.push(y.text),j[I]=$}re.set(t.sub,j)})};const S=a(f,"div","pp_window_element"),C=a(S,"div","pp_flairWindow_flairContainer"),A=re.get(t.sub);M(to),M(oo),Ve(C,t.sub,y)}}function eo(){const e=document.body.querySelector("#main-content");qe(e)}x.addStyle(Gt.A);const to="hidden",oo="banned";class _n{}class pn{}class mn{}const Me=new H("SUBS_SETTINGS"),re=new H("FLAIRS"),Xe=new H("SUBS",{isCleanupable:!0,validator:so,loader:no});function so(e){return e.flairs==null}async function no(e){let t={};const s=await(await fetch(`https://www.reddit.com/r/${e}/api/link_flair_v2.json?raw_json=1`,{cache:"no-cache",method:"get"})).json(),n=[];if(s!=null&&s.message==null){for(const r of s){const u={text:r.text,color:r.text_color,background:r.background_color,richtext:r.richtext};n.push(u)}return t.flairs=n,t}else return t.flairs=n,F(`Unable to load r/${e} flairs data`),t}function ve(){const e=window.location.href.split("reddit.com/r/");return e.length>1?e[1].split("/")[0]:null}async function ro(e){e.querySelector("shreddit-feed-error-banner")!=null&&(io(e),qe(e),ao(e))}async function io(e){const t=await c(()=>e.parentElement.parentElement.querySelector(".masthead"));h(t)||(t.querySelector("section").classList.add("pp_mastheadSection"),document.body.addEventListener("click",lo))}async function ao(e){if(p.COLLAPSE_HIGHLIGHTS.isDisabled())return;const t=await c(()=>e?.querySelector("community-highlight-carousel")?.shadowRoot?.querySelector("button"),O);t?.click()}function lo(e){const t=e.target;if(t.matches("shreddit-subreddit-header-buttons")!=!0||h(t))return;const o=t.shadowRoot.querySelector("shreddit-subreddit-overflow-control").shadowRoot.querySelector("faceplate-menu"),s=o.querySelector("li"),n=s.cloneNode(!0);n.querySelector(".text-14").textContent="Flairs settings",o.prepend(n);const r=ve();n.addEventListener("click",()=>{Qt.open({sub:r})});const u=document.createElement("a");u.href="https://www.reddit.com/"+t.getAttribute("prefixed-name")+"/about/",u.classList.add("no-underline"),o.prepend(u);const d=s.cloneNode(!0);d.querySelector(".text-14").textContent="About",u.prepend(d)}class fn{}const $e=new H("USERS",{isCleanupable:!0,validator:co,loader:uo});function co(e){return e.accountId==null}async function uo(e){let t={};try{const o=await fetch(`https://oauth.reddit.com/user/${e}/about.json`,{cache:"no-cache",method:"get"});if(!o.ok)return F(`Failed to load user (${e}) data with code ${o.status} : ${o.statusText}`),t;const s=await o.json();return s.data?.is_suspended==!0||s.data?.is_blocked==!0?(t.banned=!0,t):(t.rating=(s.data?.link_karma??0)+(s.data?.comment_karma??0)/2,s.data?.subreddit?.title&&(t.nick=s.data.subreddit.title),t.created=s.data?.created??0,t.accountId=s.kind+"_"+s.data?.id,t)}catch(o){return F(`Failed to load user (${e}) data with error ${o}`),t}}var _o=_("./resources/comments/newUser.svg"),po=_.n(_o),mo=_("./resources/comments/bannedUser.svg"),fo=_.n(mo);const ho=Ae*64;let Ee=!1;async function De(e,t,o,s,n){if(p.USER_INFO.isDisabled())return;await c(()=>Ee?null:!0),Ee=!0;const r=await $e.getWithLoader(e,d=>{d?setTimeout(()=>{Ee=!1},150+Math.random()*100):Ee=!1});p.SHOW_NAMES.isEnabled()&&r.nick!=null&&r.nick&&(t.textContent=r.nick);const u=document.createElement("div");if(u.classList.add("text-neutral-content-weak","text-12"),r.rating!=null){u.textContent=r.rating<1e4?`${Math.round(r.rating/100)/10}K`:`${Math.round(r.rating/1e3)}K`,s.after(u);const d=document.createElement("span");n.isComment?d.classList.add("inline-block","my-0","mx-2xs","text-12","text-neutral-content-weak"):d.classList.add("inline-block","my-0","created-separator","text-neutral-content-weak"),d.textContent="\u2022",u.after(d)}if(r.created!=null&&r.created>Date.now()/1e3-ho){const d=L(po(),20,20);d.setAttribute("viewBox","-2 -2 20 20"),o.before(d)}if(r.banned!=null&&r.banned){const d=L(fo(),20,20);d.setAttribute("viewBox","-2 -2 20 20"),o.before(d)}}var go=_("./src/modules/posts/posts.less"),vo=_("./src/modules/posts/postsBackplates.less"),Eo=_("./resources/postUnwrapButton.svg"),wo=_.n(Eo);x.addStyle(go.A),p.BACKPLATES.isEnabled()&&x.addStyle(vo.A);async function ie(e){if(h(e))return;So(e),bo(e),yo(e),Ao(e),xo(e),Le(e),await c(()=>e.shadowRoot?.querySelector("award-button"),O)!=null&&He(e,xe),p.SELECTABLE_POSTS.isEnabled()&&(e.querySelector('a[slot="full-post-link"]')?.remove(),(await c(()=>e.querySelector('a[slot="title"]'),O))?.classList?.add("pp_post_tittle"))}async function So(e){if(window.location.href.includes("/comments/"))return;const t=e.getAttribute("subreddit-prefixed-name").replace("r/",""),o=re.get(t),s=await c(()=>e.querySelector("shreddit-post-flair")?.querySelector("a"),O);if(s!=null){const n=decodeURIComponent(s.href.split("%22")[1]);if(o.banned!=null&&o.banned.includes(n)){const r=await c(()=>e.parentElement.nextElementSibling,O);e.remove(),r?.remove()}}}async function bo(e){const t=await c(()=>e.shadowRoot);x.registry(e.shadowRoot)}async function xo(e){const t=await c(()=>e.shadowRoot?.querySelector("shreddit-post-share-button")?.shadowRoot?.querySelector("button"));x.registry(t.parentNode.parentNode),t.classList.add("pp_post_shareButton")}async function yo(e){const t=e.getAttribute("author");if(e.getAttribute("view-context")=="AggregateFeed"){if(p.SHOW_POST_AUTHOR.isDisabled())return;const o=await c(()=>e.querySelector('span[slot="credit-bar"]')?.querySelector(".created-separator"),O),s=document.createElement("a");s.classList.add("flex","items-center","text-neutral-content","visited:text-neutral-content-weak","a","cursor-pointer","no-visited","no-underline","hover:no-underline"),s.setAttribute("href",`/user/${t}/`),o.before(s);const n=a(s,"div",["text-neutral-content-weak","text-12"]);n.textContent=t;const r=document.createElement("span");r.classList.add("inline-block","my-0","created-separator","text-neutral-content-weak"),r.textContent="\u2022",s.before(r),De(t,n,o,o,xe)}else{const o=await c(()=>e.querySelector('[slot="credit-bar"]'),O),s=await c(()=>o.querySelector('span[slot="authorName"]')?.querySelector("a")?.querySelector(".whitespace-nowrap"),O),n=o.querySelector(".created-separator");if(n==null)return;De(t,s,n,n,xe)}}async function Ao(e){if(window.location.href.includes("/comments/")){ze(e,!1);return}const t=await c(()=>e.querySelector(".feed-card-text-preview"),O);if(t==null)return;p.SELECTABLE_POSTS.isEnabled()&&t.parentElement.parentElement.removeAttribute("href"),t.classList.remove("feed-card-text-preview"),e.querySelector('a[slot="text-body"]').classList.toggle("pointer-events-none",!1);for(const s of t.childNodes)if(s instanceof Element&&s.matches("object")){const n=s.querySelector("a")?.href;if(n!=null){const r=document.createElement("faceplate-img");r.setAttribute("src",n),r.setAttribute("loading","eager"),r.setAttribute("sizes","(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw"),r.className="block w-fit my-0 mx-auto max-w-[100%]",s.replaceWith(r)}}ze(e,!0),Co(e,t)}async function ze(e,t){p.IMAGE_VIEWER.isDisabled()||(t?await c(()=>e.querySelector("faceplate-img"),O)!=null&&e.querySelectorAll("faceplate-img").forEach(s=>{const n=s.getAttribute("src");console.log("post img => "+n);let r=s.shadowRoot?.querySelector("img");r?.classList.add("pp_imageViewable"),s.addEventListener("click",()=>{Te.open(n)})}):e.querySelectorAll('figure[class="rte-media"]').forEach(o=>{const s=o.querySelector("a"),n=s.getAttribute("href");s.removeAttribute("href");let r=o.querySelector("img");r==null&&(r=o.querySelector("shreddit-player-2")),r.classList.add("pp_imageViewable"),s.addEventListener("click",()=>{Te.open(n)})}))}async function Co(e,t){const o=await c(()=>e.shadowRoot,O),s=t.getBoundingClientRect().height;t.classList.add("pp_post_noWrap");const n=t.getBoundingClientRect().height;if(t.classList.remove("pp_post_noWrap"),n>s+5){const r=a(e,"div","pp_post_unwrapContainer");e.shadowRoot.append(r);const u=a(r,"div","pp_post_unwrapButton"),d=L(wo(),25,25);u.append(d),u.addEventListener("click",()=>{t.classList.add("pp_post_noWrap"),r.remove()},{once:!0})}}var Bo=_("./src/modules/feed/feedButtons.less"),Oo=_("./resources/feedButtons/feedButtonBest_empty.svg"),To=_.n(Oo),Lo=_("./resources/feedButtons/feedButtonBest.svg"),we=_.n(Lo),Mo=_("./resources/feedButtons/feedButtonHot.svg"),Do=_.n(Mo),Ro=_("./resources/feedButtons/feedButtonNew.svg"),Ze=_.n(Ro),Po=_("./resources/feedButtons/feedButtonRising.svg"),ko=_.n(Po),Io=_("./resources/feedButtons/feedButtonTop.svg"),Ye=_.n(Io);function Uo(e){switch(e){case T.Home:return p.DEFAULT_FEED_HOME;case T.Popular:return p.DEFAULT_FEED_POPULAR;case T.All:return p.DEFAULT_FEED_ALL;default:return p.DEFAULT_FEED_SUB}}function Wo(){return window.location.href=="https://www.reddit.com/"?!0:window.location.href.includes("/?f=flair_name")?!1:window.location.href.includes("?feed=home")?window.location.href.includes("reddit.com/?feed=home"):window.location.href.split("/r/")[1].split("/").length<3}function jo(e,t){if(e==T.Sub){const s=Me.get(ve());if(s.defaultFeed!=null)return s.defaultFeed==t}const o=Uo(e);return!o.isDefault()&&o.get()==t}x.addStyle(Bo.A);const Fo={Best:we(),Hot:Do(),New:Ze(),Top:Ye(),Rising:ko()},Ko=["inline-flex","flex-col","text-neutral-content-weak","font-semibold","rounded-full","hover:no-underline","hover:bg-secondary-background-hover","hover:text-secondary-content","active:bg-secondary-background","pl-[var(--rem16)]","pr-[var(--rem16)]"];async function No(e,t){if(p.FEED_BUTTONS.isDisabled()||h(e))return;const o=t?.querySelector('div[slot="selected-item"]')?.textContent;t?.remove();const s=bt();let n=null,r=null;if(s!=T.Sub){const f=await c(()=>e.querySelector("shreddit-layout-event-setter")?.parentElement);f.classList.add("pp_feedButtonsContainer"),n=document.createElement("div"),n.classList.add("flex","mx-md","shrink-0","pp_feedContainer"),f.prepend(n),s==T.Home?r=w=>`/${w.toLowerCase()}/?feed=home`:r=w=>`/r/${s==T.Popular?"popular":"all"}/${w.toLowerCase()}/`}else{const f=await c(()=>e.querySelector('a[slot="page-3"]')?.parentElement?.parentElement);n=document.createElement("div"),n.classList.add("flex","mx-md","shrink-0","pp_feedContainer"),f.before(n),f.remove();const w=ve();r=P=>`/r/${w}/${P.toLowerCase()}/`;const y=n.parentElement;y.classList.toggle("justify-between",!1),y.classList.toggle("flex-wrap",!1),y.classList.toggle("pp_feedPanel",!0);const S=document.createElement("div");S.classList.add("pp_feedPanel_space"),n.after(S);let C=Me.get(w);const A=C.defaultFeed==null?o==p.DEFAULT_FEED_SUB.get():o==C.defaultFeed,M=document.createElement("div");M.classList.add("pp_defaultFeed_mark");let I=L(A?we():To(),16,16);M.append(I),S.after(M);const R=a(M,"div","pp_defaultFeed_mark_hint"),D=a(R,"span");D.textContent=A?`${o} is default feed for r/${w}`:`Set ${o} as default feed for r/${w}`,A||M.addEventListener("click",()=>{const P=L(we(),16,16);I.replaceWith(P),D.textContent=`${o} is default feed for r/${w}`,C.defaultFeed=o,Me.set(w,C)},{once:!0})}const u=se(s),d=Wo();for(const f of u){const w=a(n,"a",Ko);w.href=r(f);const y=f==o;w.classList.toggle("bg-secondary-background-selected",y),w.classList.toggle("!text-neutral-content-strong",y);const S=a(w,"span",["inline-flex","flex-row","items-center","gap-xs","py-[var(--rem10)]","leading-5","font-14","pp_feedButton"]);let C=Fo[f];if(C!=null){let M=L(C,16,16);S.append(M)}const A=a(S,"span");A.textContent=f,d&&jo(s,f)&&w.click()}}let Se=null;async function Ho(e){const t=await c(()=>e.querySelector("#subgrid-container"));t.querySelectorAll("shreddit-post").forEach(r=>{ie(r)});const o=new MutationObserver(r=>{for(const u of r)for(const d of u.addedNodes)d instanceof HTMLElement&&d.matches("shreddit-post")&&ie(d)});o.observe(t,{childList:!0,subtree:!0}),setTimeout(()=>{o.disconnect()},O),Qe(t),ro(t);const s=await c(()=>t.querySelector("shreddit-sort-dropdown"),O);(s==null||s.getAttribute("trigger-id")=="comment-sort-button")&&!window.location.href.includes("/about/")||No(t,s)}function Qe(e){Se?.disconnect(),Se=new MutationObserver(t=>{for(const o of t)for(const s of o.addedNodes)s instanceof HTMLElement&&(s.matches("faceplate-batch")&&s.querySelectorAll("shreddit-post").forEach(n=>{ie(n)}),s.matches("article")&&ie(s.querySelector("shreddit-post")))}),Se.observe(e,{childList:!0,subtree:!0})}var Vo=_("./src/modules/comments/hideShare.less"),qo=_("./src/modules/comments/comments.less");class Je{getInput(t,o){}run(t,o){let s=$e.get(o);const n={csrf_token:g("csrf_token"),operation:this.key,variables:{input:this.getInput(t,s.accountId)}};fetch("https://www.reddit.com/svc/shreddit/graphql",{method:"post",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify(n)}).then(r=>r.json()).then(r=>{r!=null&&r.errors?.message&&K(r.errors.message)})}}class Go extends Je{constructor(){super(...arguments),this.key="UpdateProfileFollowState",this.enable="FOLLOWED",this.disable="NONE"}getInput(t,o){return{accountId:o,state:t?this.enable:this.disable}}}class Xo extends Je{constructor(){super(...arguments),this.key="UpdateRedditorBlockState",this.enable="BLOCKED",this.disable="NONE"}getInput(t,o){return{redditorId:o,blockState:t?this.enable:this.disable}}}const $o=new Go,zo=new Xo;var Zo=_("./resources/comments/userTags/followedIcon.svg"),Yo=_.n(Zo),Qo=_("./resources/comments/userTags/likedIcon.svg"),Jo=_.n(Qo),es=_("./resources/comments/userTags/warningIcon.svg"),ts=_.n(es),os=_("./resources/comments/userTags/blockedIcon.svg"),ss=_.n(os),ns=_("./resources/comments/userTags/followedButton.svg"),rs=_.n(ns),is=_("./resources/comments/userTags/likedButton.svg"),as=_.n(is),ls=_("./resources/comments/userTags/warningButton.svg"),ds=_.n(ls),cs=_("./resources/comments/userTags/blockedButton.svg"),us=_.n(cs),_s=_("./src/modules/comments/userTags.less");class k{}k.FOLLOWED="Followed",k.LIKED="Liked",k.WARNING="Warning",k.BLOCKED="Blocked";class hn{}const Y=new Map([[k.FOLLOWED,{priority:100,addHint:"Follow",removeHint:"Unfollow",color:"#0b7ed3",icon:Yo(),button:rs()}],[k.LIKED,{priority:2,addHint:"Tag as liked",removeHint:"Remove liked tag",color:"#C95A54",icon:Jo(),button:as()}],[k.WARNING,{priority:1,addHint:"Tag as warned",removeHint:"Remove warned tag",color:"#D4A343",icon:ts(),button:ds()}],[k.BLOCKED,{priority:0,addHint:"Block",removeHint:"Unblock",color:"#663988",icon:ss(),button:us()}]]);class gn{}const Q=new H("TAGS");async function et(e){if(p.USER_TAGS.isDisabled())return;x.addStyle(_s.A,"userTags");const t=e.getAttribute("author");if(t==null)return;const o=Q.get(t),s=await c(()=>e.querySelector('div[pp-anchor="tags"]'),O);if(s==null){F("Unable to render userTags");return}if(s.parentNode.querySelectorAll('svg[userTag="true"]').forEach(r=>{r.remove()}),o.tags!=null)for(const r of o.tags)n(r);function n(r){const u=Y.get(r),d=L(u.icon,20,20);d.setAttribute("userTag","true"),d.setAttribute("viewBox","-4 -4 20 20"),d.style.color=u.color,s.after(d)}}class vn{}const ps=Ae+42,tt="#adadad";function ms(e,t){if(p.USER_TAGS.isDisabled())return;const o=document.createElement("div");o.classList.add("pp_tagHint_offset"),e.prepend(o);const s=document.createElement("div");s.classList.add("pp_tagHintContainer"),o.prepend(s);const n=a(s,"div","pp_tagHint");n.style.display="none";const r=document.createElement("div");r.classList.add("pp_tagsPanel"),o.after(r),Y.forEach((d,f)=>{u(d,f)});function u(d,f){const w=a(r,"span","pp_tagButton");w.setAttribute("userTag",f);const y=L(d.button,20,20);w.appendChild(y);const S={userTag:f,userId:t,button:w,hint:n};w.addEventListener("click",()=>{fs(S)}),w.addEventListener("mouseenter",()=>{hs(S)}),w.addEventListener("mouseleave",()=>{gs(S)})}ot(r,t)}function ot(e,t){const o=Q.get(t),s=o?.tags??[];e.querySelectorAll(".pp_tagButton").forEach(n=>{const r=n.getAttribute("userTag"),u=Y.get(r);n.removeAttribute("has-cooldown"),n.removeAttribute("has-blocked"),s.includes(r)?(n.classList.toggle("pp_tagButtonActive",!0),n.style.backgroundColor=u.color,n.style.color="white"):(n.classList.toggle("pp_tagButtonActive",!1),n.style.color=u.color,n.style.removeProperty("background-color"),r==k.BLOCKED&&o.blockCooldown!=null&&Date.now()/1e3<o.blockCooldown&&(n.setAttribute("has-cooldown",""),n.style.color=tt),r==k.FOLLOWED&&s.includes(k.BLOCKED)&&(n.setAttribute("has-blocked",""),n.style.color=tt))})}function fs(e){if(e.button.getAttribute("has-cooldown")!=null||e.button.getAttribute("has-blocked")!=null){K("Unable to do this");return}let t=Q.get(e.userId);t.tags==null&&(t.tags=[]);let o=!1;t.tags.includes(e.userTag)?t.tags=t.tags.filter(s=>s!=e.userTag):(t.tags.push(e.userTag),o=!0,e.userTag==k.BLOCKED&&(t.tags=t.tags.filter(s=>s!=k.FOLLOWED))),t.tags.length>1&&t.tags.sort((s,n)=>Y.get(s).priority-Y.get(n).priority),Q.set(e.userId,t),document.body.querySelectorAll(`shreddit-comment[author="${e.userId}"]`).forEach(s=>{et(s),o&&e.userTag==k.BLOCKED&&s.setAttribute("collapsed","")}),e.userTag==k.FOLLOWED&&$o.run(o,e.userId),e.userTag==k.BLOCKED&&(o||(t.blockCooldown=Date.now()/1e3+ps,Q.set(e.userId,t)),zo.run(o,e.userId)),ot(e.button.parentElement,e.userId)}function hs(e){e.hint.style.display=null,e.hint.dataset.target=e.userTag;const t=Q.get(e.userId),o=Y.get(e.userTag),s=(t?.tags??[]).includes(e.userTag);if(e.hint.innerText=s?o.removeHint:o.addHint,e.button.getAttribute("has-cooldown")!=null){const n=Math.round((t.blockCooldown-Date.now()/1e3)/ye);e.hint.innerText=`Unable to block for ${n}h after unblocking`}e.button.getAttribute("has-blocked")!=null&&(e.hint.innerText="Unable to follow on blocked user")}function gs(e){e.hint.dataset?.target==e.userTag&&(e.hint.style.display="none")}var vs=_("./resources/comments/shareButton.svg"),Es=_.n(vs);function ws(e){document.body.click();let t=e.querySelector("shreddit-overflow-menu").shadowRoot;x.registry(t);const o=t.querySelector("faceplate-menu"),s=o.querySelector('faceplate-tracker[noun="report"]');if(p.HIDE_SHARE.isEnabled()){let r=s.cloneNode(!0);r.querySelector("span .text-14").textContent="Copy link",s.before(r);const u=r.querySelector("svg"),d=L(Es(),20,20);u.replaceWith(d);const f=e.getAttribute("permalink");r.addEventListener("click",()=>{navigator.clipboard.writeText(`https://www.reddit.com${f}`),K("Link copied")})}t.querySelector("button").addEventListener("click",()=>{document.body.click()}),ms(o,e.getAttribute("author"))}var Ss=_("./src/modules/comments/sortButtons.less"),bs=_("./resources/comments/sortButtons/controversial.svg"),xs=_.n(bs),ys=_("./resources/comments/sortButtons/old.svg"),As=_.n(ys),Cs=_("./resources/comments/sortButtons/qa.svg"),Bs=_.n(Cs);class U{}U.BEST="Best",U.TOP="Top",U.NEW="New",U.CONTROVERSIAL="Controversial",U.OLD="Old",U.QA="QA";class En{}const ae="sort=";function J(e,t){return t==="confidence"&&!e.includes("?")?!0:e.includes(`${ae}${t}`)}const le=new Map([[U.BEST,{icon:we(),href:"confidence",isCurrent:e=>J(e,"confidence")}],[U.TOP,{icon:Ye(),href:"top",isCurrent:e=>J(e,"top")}],[U.NEW,{icon:Ze(),href:"new",isCurrent:e=>J(e,"new")}],[U.CONTROVERSIAL,{icon:xs(),href:"controversial",isCurrent:e=>J(e,"controversial")}],[U.OLD,{icon:As(),href:"old",isCurrent:e=>J(e,"old")}],[U.QA,{icon:Bs(),href:"qa",isCurrent:e=>J(e,"qa"),overrideName:"Q&A"}]]);let Re=!1;function st(){let e=me.get(Z.COMMENTS_CURRENT_SORT);return e instanceof Object&&(e=U.BEST),e}function nt(){if(p.COMMENTS_REMEMBER_SORT.isEnabled()&&window.location.href.includes("/comments/")){const e=le.get(st());if(e.isCurrent(window.location.href))return!1;let t=window.location.href;const o=t.includes("?")&&!t.includes(ae);if(t.includes(ae)){const s=t.indexOf(ae);t=t.slice(0,s-1)}return window.location.replace(t+(o?"&":"?")+ae+e.href),!0}return!1}async function rt(e){if(p.COMMENTS_SORT_BUTTONS.isDisabled())return;x.addStyle(Ss.A,"sortButtons"),Re=!1;const t=await c(()=>e.querySelector("comment-body-header")?.querySelector(".pdp-comments-tree-sort-container"),O);if(t==null||h(t))return;Os(e),t.querySelector("shreddit-sort-dropdown").classList.add("pp_sortDropdown_hidden");let o;p.COMMENTS_REMEMBER_SORT.isEnabled()?o=st():le.forEach((n,r)=>{n.isCurrent(window.location.href)&&(o=r)}),le.forEach((n,r)=>{s(r,n)});function s(n,r){const u=a(t,"div","pp_sortButton");u.classList.toggle("pp_sortButton_active",n==o),u.setAttribute("commentSort",n),u.addEventListener("click",()=>{Ls(n)});const d=a(u,"span"),f=L(r.icon,16,16);d.append(f);const w=a(u,"span");w.textContent=r.overrideName!=null?r.overrideName:n}Re=!0}async function Os(e){const t=await c(()=>e.querySelector("comment-body-header")?.querySelector("pdp-comment-search-input")?.shadowRoot?.querySelector(".pr-xs"),O);t!=null&&(t.textContent="Search")}let Pe=!1;function Ts(){Pe=!1,Re||rt(document.body)}async function Ls(e){if(Pe){K("Unable to switch sort while loading comments");return}const t=await c(()=>document.body.querySelector("comment-body-header")?.querySelector(".pdp-comments-tree-sort-container"),O),o=le.get(e);t.querySelector(`data[value="${o.href.toUpperCase()}"]`).click(),me.set(Z.COMMENTS_CURRENT_SORT,e),Pe=!0;const n=setInterval(()=>{o.isCurrent(window.location.href)&&(clearInterval(n),le.forEach((r,u)=>{t.querySelector(`div[commentSort="${u}"]`).classList.toggle("pp_sortButton_active",u==e)}))},20)}function it(e){if(!p.UNWRAP_MORE_REPLIES.isDisabled()&&e.getAttribute("collapsed")==null){for(const t of e.childNodes)if(t instanceof HTMLElement){if(t.matches("faceplate-partial")&&t.getAttribute("src")?.includes("/more-comments/")&&!h(t)){t.click();let o=0;const s=setInterval(()=>{if(o++,t.parentNode==null){clearInterval(s),setTimeout(()=>{it(e)},50);return}o>60&&(clearInterval(s),F("Unable load more replies"))},100)}t.matches("a")&&t.getAttribute("slot")=="more-comments-permalink"&&(t.querySelector(".text-secondary-weak").textContent="More replies in single thread")}}}let de=null,ce=null,be=null;async function Ms(e){x.addStyle(qo.A,"comments"),p.HIDE_SHARE.isEnabled()&&x.addStyle(Vo.A,"hideShare"),de!=null?de.disconnect():de=new IntersectionObserver(t=>{for(const o of t)o.isIntersecting&&(ct(o.target.parentElement),lt(o.target.parentElement),de.unobserve(o.target))},{threshold:.05}),ce!=null?ce.disconnect():ce=new IntersectionObserver(t=>{for(const o of t)o.isIntersecting&&(ct(o.target.parentElement),ce.unobserve(o.target))},{threshold:.05}),be!=null?be.disconnect():be=new MutationObserver(t=>{for(const o of t)for(const s of o.addedNodes)if(s instanceof HTMLElement){const n=s.parentElement?.querySelector("shreddit-comment-tree");if(n!=null&&(Ds(n),Ts()),s.matches("shreddit-comment")&&(s.getAttribute("depth")=="0"?at(s):(dt(s),lt(s))),p.HIDE_RELATED_POSTS.isEnabled()&&s.matches("h2")&&s.textContent.includes("Related posts")){const r=s,u=r.nextSibling;r.remove(),u.remove()}}}),be.observe(e,{childList:!0,subtree:!0}),rt(e)}function Ds(e){e.querySelectorAll('shreddit-comment[depth="0"]').forEach(t=>{at(t)})}function at(e){h(e)||de.observe(e.querySelector('div[slot="commentMeta"]'))}function lt(e){e.querySelectorAll("shreddit-comment").forEach(t=>{dt(t)})}function dt(e){h(e)||ce.observe(e.querySelector('div[slot="commentMeta"]'))}async function ct(e){const t=e.querySelector('div[slot="comment"]');if(p.COLLAPSE_AUTOMODERATOR.isEnabled()){const S=e.getAttribute("author");if(S!=null&&S=="AutoModerator"){e.setAttribute("collapsed","");return}const C=e.querySelector('div[slot="commentMeta"]')?.querySelector('shreddit-comment-author-modifier-icon[distinguished-as="MODERATOR"]')!=null,A=e.querySelector("shreddit-comment-badges")?.shadowRoot?.querySelector('svg[icon-name="pin-fill"]')!=null;if(C&&A){e.setAttribute("collapsed","");return}}setTimeout(()=>{it(e)},150);const o=e.querySelector('div[slot="commentMeta"]').querySelector('faceplate-hovercard[data-id="user-hover-card"]');if(o==null)return;const s=document.createElement("div");s.setAttribute("pp-anchor","tags");const n=o.parentElement.querySelector(".ml-2xs");n!=null?n.after(s):o.after(s);const r=await c(()=>o.parentElement.querySelector("time")?.parentElement?.parentElement,O),u=document.createElement("div");u.setAttribute("pp-anchor","info"),r?.before(u),p.GHOSTED_COMMENTS.isEnabled()&&parseInt(e.getAttribute("score"))<0&&(e.querySelector('div[slot="commentAvatar"]').classList.add("pp_muted_avatar"),e.querySelector('faceplate-tracker[noun="comment_author"]').querySelector("a").style.color="#a5a5a5",t.classList.add("pp_muted_content"));const d=t.querySelector('figure[class="rte-media"]');if(d!=null&&p.IMAGE_VIEWER.isEnabled()){const S=d.querySelector("a"),C=S.getAttribute("href");S.removeAttribute("href");let A=d.querySelector("img");A==null&&(A=d.querySelector("shreddit-player-2")),A.classList.add("pp_imageViewable"),S.addEventListener("click",()=>{Te.open(C)})}He(e,je),et(e);const f=e.getAttribute("author"),w=e.querySelector('faceplate-tracker[noun="comment_author"]').querySelector("a");De(f,w,s,u,je);const y=await c(()=>e.querySelector("shreddit-overflow-menu")?.shadowRoot?.querySelector("faceplate-dropdown-menu"));Ke(e),y.addEventListener("click",()=>{ws(e)},{once:!0})}var Rs=_("./src/modules/scrollToTop.less"),Ps=_("./resources/scrollButton.svg"),ks=_.n(Ps);const Is=1e3;let ue=null,ke=null,ee=0,ut=!1,N=!1,_t=null;function Us(){if(p.SCROLL_TO_TOP.isDisabled())return;x.addStyle(Rs.A,"scrollToTop");const e=document.body.querySelector(".main-container").parentElement;_t=document.body.querySelector(".main-container"),ue=a(e.parentElement,"div","pp_scrollToTop"),ke=L(ks(),40,40),ue.append(ke),ue.addEventListener("click",()=>{N?(ee=window.scrollY,window.scrollTo({top:0,behavior:"smooth"}),N=!1):ee>0&&(window.scrollTo({top:ee,behavior:"smooth"}),ee=0,N=!0),Ie()}),window.addEventListener("resize",o=>{pt()});let t=!1;setInterval(()=>{N=window.scrollY>Is,N!=t&&(t=N,Ie())},330),pt()}function pt(){ut=window.innerWidth>1490;const e=_t.getBoundingClientRect();ue.style.left=`${(300+e.left)/2-50}px`,Ie()}function Ie(){const e=!(ut&&(N||ee>0)),t=!N&&ee>0;ue.classList.toggle("pp_scrollToTop_hidden",e),ke.classList.toggle("pp_scrollToTop_inverted",t)}async function Ws(e){const t=await c(()=>e.querySelector("#subgrid-container")?.querySelector("shreddit-feed"));t.querySelectorAll("shreddit-post").forEach(o=>{ie(o)}),Qe(t)}async function mt(){x.addStyle(At.A,"app");const e=await c(()=>document.body.querySelector("shreddit-app")?.querySelector(".grid-container"));if(h(e))return;window.location.href.includes("/user/")?Ws(document.body):Ho(document.body),Ms(document.body);const t=await c(()=>document.body.querySelector("#left-sidebar-container"),3e3);Rt(t);const o=t.parentElement;o.classList.add("pp_pageContainer"),o.querySelector(".subgrid-container").classList.add("pp_mainFeed");const n=await c(()=>document.body.querySelector("#right-sidebar-container"));n.classList.add("pp_rightSidebar"),n.classList.toggle("styled-scrollbars",!0),yt(o,n),Us()}var js=_("./src/modules/header.less"),Fs=_("./src/modules/notifications.less");p.NOTIFY_POPUP.isEnabled()&&x.addStyle(Fs.A);function Ks(e){e.querySelectorAll('div[data-testid="notification-item"]').forEach(t=>{const o=t.querySelector('div[data-testid="title"]'),s=t.querySelector(".text-secondary-plain");if(s.textContent.includes("replied")){s.textContent=s.textContent.split("replied")[0];const r=document.createElement("div");o.after(r);const u=a(r,"span",["text-secondary-weak","font-normal"]);let d=t.parentElement.getAttribute("href");d=d.replace("https://reddit.com/r/",""),d=d.split("/")[0],u.textContent=`replied in r/${d}`}const n=t.querySelector("faceplate-number");if(n!=null){const r=document.createElement("span");r.textContent=" ago",n.after(r)}})}var Ns=_("./src/modules/settings/settingsWindow.less"),Hs=_("./resources/settingsArrow.svg"),ft=_.n(Hs);x.addStyle(Ns.A);const Vs=new Ge("Reddit++ Settings",qs,Gs);let V=0;function qs(e,t){document.body.click(),V=0;const o=a(e.content,"div","pp_settings_changesBannerContainer"),s=a(o,"div","pp_settings_changesBanner");s.textContent="Page will be reloaded to apply new settings";const n=a(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),r=a(n,"div","pp_window_elementsContainer");d("Wide mode","Make focus on the content by replacing right sidebar to screen border",p.WIDE_MODE),f("Content width",null,p.CONTENT_WIDTH),f("Content offset",null,p.CONTENT_OFFSET),d("Bigger fonts","Make fonts bigger for better reading",p.BIGGER_FONTS),d("Better notify popup","Make notify popup a bit larger and remove useless button",p.NOTIFY_POPUP),d("Redirect suggestion","Show suggestion to redirect from old.reddit and new.reddit to compatible pages",p.REDIRECT_SUGGESTION),d("Redirect forced","Automatically redirect to compatible pages",p.REDIRECT_FORCED),u("Left sidebar"),d("Sub filter","Tool for find subs on sidebar by name",p.SUB_FILTER),d("Show Custom feeds",null,p.SIDEBAR_CUSTOMS),d("Show Recent",null,p.SIDEBAR_RECENT),d("Show Communities",null,p.SIDEBAR_SUBS),d("Show Resources",null,p.SIDEBAR_RESOURCES),u("Common"),d("Scroll to top button",null,p.SCROLL_TO_TOP),d("Collapse Awards","Automatic collapse the award's button for none upvoted posts and comments",p.COLLAPSE_AWARDS),d("Remove Awards","Remove the award's buttons completely",p.COLLAPSE_AWARDS_COMPLETELY),d("Image viewer","Open (zoom) images instead default redirect behaviour",p.IMAGE_VIEWER),u("Default feeds"),f("Home",null,p.DEFAULT_FEED_HOME),f("Popular",null,p.DEFAULT_FEED_POPULAR),f("All",null,p.DEFAULT_FEED_ALL),f("Subreddit's",null,p.DEFAULT_FEED_SUB),u("Feed"),d("Feed buttons","Unwrap feed sorting buttons",p.FEED_BUTTONS),d("Flairs bar","Display available flairs to faster navigation. Specific flairs may be hidden via subreddit's flairs settings",p.FLAIR_BAR),d("Collapse community highlights",null,p.COLLAPSE_HIGHLIGHTS),d("Selectable text","Make a text selectable when posts viewed in feed",p.SELECTABLE_POSTS),d("Unwrap button","Show the unwrap button for long-text posts in feed",p.UNWRAP_POST),d("Soft background","Make the background of posts with soft gradient color",p.BACKPLATES),d("Show post's author","Relates to Home, Popular and All feeds",p.SHOW_POST_AUTHOR),d("Show bookmark","Show the bookmark button for saved and upvoted posts",p.SAVED_BOOKMARK_POSTS),d("Show bookmark always","Show the bookmark button for all posts",p.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS),u("Comments"),d("Sort buttons","Unwrap the comment's sort buttons",p.COMMENTS_SORT_BUTTONS),d("Remember sort","Remember latest used comment's sort",p.COMMENTS_REMEMBER_SORT),d('Unwrap "more replies"',"Automatically unwrap more replies when it becomes visible",p.UNWRAP_MORE_REPLIES),d("User info",`Show user's karma and "new user" mark`,p.USER_INFO),d("User tags","Enable custom tags (sets via comment's context menu)",p.USER_TAGS),d("Show nicknames","Use user's nicknames instead profile names",p.SHOW_NAMES),d("Hide share button","Replace the share button to comment's context menu",p.HIDE_SHARE),d("Ghosted comments","Make comments ghosted when comment's rating below zero",p.GHOSTED_COMMENTS),d("Collapse unwanted","Automatic collapse all automoderator and mod's pinned comments",p.COLLAPSE_AUTOMODERATOR),d("Show bookmark","Show the bookmark button for saved comments",p.SAVED_BOOKMARK_COMMENTS),d("Show bookmark always","Show the bookmark button for all comments",p.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS),d("Hide related posts",null,p.HIDE_RELATED_POSTS);function u(w){const y=a(r,"h3","pp_settings_subtittle");y.textContent=w}function d(w,y,S){const C=a(r,"div","pp_window_element"),A=a(C,"div","pp_settings_propertyHeader"),M=a(A,"div","pp_settings_propertyHeader_tittle");if(M.textContent=w,y!=null){const G=a(A,"div","pp_settings_propertyHeader_description");G.textContent=y}else C.classList.add("pp_settings_property_oneLine");const I=a(C,"div","pp_settings_propertyButtonContainer"),R=a(I,"div","pp_checkBox_panelArea"),D=a(R,"div","pp_checkBox_container"),P=a(D,"button","pp_checkBox_button");P.classList.toggle("pp_checkBox_buttonActive",S.isEnabled());const q=a(P,"div","pp_checkBox_knob");let W=!1;P.addEventListener("click",G=>{const j=S.isEnabled();P.classList.toggle("pp_checkBox_buttonActive",!j),S.switch(),V+=W?-1:1,W=!W,o.classList.toggle("pp_settings_changesBanner_active",V>0)})}function f(w,y,S){const C=a(r,"div","pp_window_element"),A=a(C,"div","pp_settings_propertyHeader"),M=a(A,"div","pp_settings_propertyHeader_tittle");if(M.textContent=w,y!=null){const _e=a(A,"div","pp_settings_propertyHeader_description");_e.textContent=y}else C.classList.add("pp_settings_property_oneLine");const I=a(C,"div","pp_settings_propertyButtonContainer"),R=a(I,"div","pp_settings_arrowArea"),D=a(R,"div",["pp_settings_arrow","pp_settings_arrowLeft","button","button-plain","button-medium","px-[var(--rem8)]"]),P=L(ft(),20,20);D.append(P);const q=a(R,"div",["text-secondary","font-normal"]);q.textContent=S.get();const W=a(R,"div",["pp_settings_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),G=L(ft(),20,20);W.append(G);const j=S.get();let X=!1;D.addEventListener("click",_e=>{$(-1)}),W.addEventListener("click",_e=>{$(1)});function $(_e){S.switch(_e);const Ue=S.get();q.textContent=Ue,Ue!=j&&!X&&(X=!0,V++),Ue==j&&X&&(X=!1,V--),o.classList.toggle("pp_settings_changesBanner_active",V>0)}}}function Gs(){V>0&&(p.nextRevision(),window.location.reload())}var Xs=_("./resources/settingsButton.svg"),$s=_.n(Xs);x.addStyle(js.A);let ht=!1;async function gt(e){const t=await c(()=>e.querySelector("reddit-header-large")?.querySelector("nav"));if(h(t))return;const o=await c(()=>t.childNodes.item(4));o.classList.add("pp_userPanel"),o.addEventListener("click",()=>{zs()},{once:!0}),p.NOTIFY_POPUP.isEnabled()&&!ht&&(ht=!0,i(document.body,r=>{r.getAttribute("data-id")=="notification-container-element"&&!h(r)&&Ks(r)}));const s=e.querySelector("#reddit-logo"),n=a(s,"div","pp_logo");n.textContent="++"}function zs(){let e=document.getElementById("user-drawer-content");if(e.querySelector('faceplate-tracker[noun="pp-settings"]')!=null)return;let t=e.querySelector('faceplate-tracker[noun="settings"]');t==null&&(t=e.querySelector('faceplate-tracker[noun="login"]'));let o=t.cloneNode(!0);o.setAttribute("noun","pp-settings"),t.parentNode.appendChild(o),o.querySelector("a").removeAttribute("href");const s=o.querySelector("svg"),n=L($s(),20,20,{strokeColor:Ce});s.replaceWith(n);let r=o.querySelector(".text-14");r.textContent="Reddit++",o.addEventListener("click",()=>{Vs.open()})}var Zs=_("./src/modules/redirect.less");function Ys(){const e=window.location.href.includes("old.reddit.com"),t=window.location.href.includes("new.reddit.com");let o=null;e&&(o=window.location.href.replace("old.reddit.com","reddit.com")),t&&(o=window.location.href.replace("new.reddit.com","reddit.com")),p.REDIRECT_FORCED.isEnabled()&&o!=null&&window.location.assign(o),p.REDIRECT_SUGGESTION.isEnabled()&&o!=null&&Qs(o);const s=nt();return o!=null||s}function Qs(e){x.addStyle(Zs.A);let t=19;const o=a(document.body,"div","pp_redirectContainer"),s=a(o,"div","pp_redirectBox");s.textContent=`Click here to redirect on compatible page (${t})`,s.addEventListener("click",()=>{window.location.assign(e)});const n=setInterval(()=>{t--,s.textContent=`Click here to redirect on compatible page (${t})`,t<=0&&(clearInterval(n),o.remove())},750)}Js();async function Js(){const e=await c(()=>document.head!=null&&document.body!=null?document.body:null);let t=document.head.querySelector('meta[name="reddit-plus-plus"]');if(t!=null){K("Reddit++ runned more that one times. Check out userscript manager to disable dublicates.",{time:1e4});return}if(t=document.createElement("meta"),t.setAttribute("name","reddit-plus-plus"),t.setAttribute("version","1.0.26"),document.head.append(t),B.check(),Ys())return;const o=await c(()=>e.querySelector("shreddit-app"),O);if(o==null||o.getAttribute("devicetype")!="desktop"){F("Reddit++ was stopped for a non compatible page");return}gt(e),mt(),i(e,s=>{s.matches("reddit-header-large")==!0&&gt(s.parentElement);const n=s.matches("shreddit-app")==!0,r=s.classList.contains("grid-container")&&s.parentElement.matches("shreddit-app")==!0;(n||r)&&(mt(),nt())})}})()})();
