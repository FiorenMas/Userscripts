// ==UserScript==
// @name             Reddit++
// @namespace        RedditPlusPlus
// @version          1.1.0
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
(()=>{var ao={"./src/modules/app.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`faceplate-banner {
  max-width: 1000px !important;
}
.pp_hidden {
  display: none;
}
`,""]);const S=f},"./src/modules/biggerFonts.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`:is(.text-14):not(.pp_defaultText .text-14) {
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
`,""]);const S=f},"./src/modules/bookmark.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_bookmark_hiddenButton {
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
`,""]);const S=f},"./src/modules/collapseAwards.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_awardButton {
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
`,""]);const S=f},"./src/modules/comments/comments.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_muted_avatar {
  opacity: 0.5;
}
.pp_muted_content {
  color: var(--pp-color-muted-conent);
  transition: color 0.2s;
}
.pp_muted_content:hover {
  color: var(--pp-color-muted-conent-hover);
}
:root {
  --pp-color-muted-conent: #a5a5a5;
  --pp-color-muted-conent-hover: #636363;
}
:root.theme-dark {
  --pp-color-muted-conent: #595959 !important;
  --pp-color-muted-conent-hover: #adadad !important;
}
`,""]);const S=f},"./src/modules/comments/hideShare.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`shreddit-comment-share-button {
  display: none !important;
}
`,""]);const S=f},"./src/modules/comments/sortButtons.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_sortDropdown_hidden {
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
`,""]);const S=f},"./src/modules/comments/userTags.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_tagsPanel {
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
`,""]);const S=f},"./src/modules/feed/feedButtons.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_feedPanel {
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
`,""]);const S=f},"./src/modules/filters/filters.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_hidden_comment > [slot='commentAvatar'] {
  display: none;
}
.pp_hidden_comment > [slot='commentMeta'] {
  display: none;
}
.pp_hidden_comment > [slot='comment'] {
  display: none;
}
.pp_hidden_comment > [slot='actionRow'] {
  display: none;
}
.pp_hidden_button {
  position: relative;
  left: -32px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  width: fit-content;
  gap: 8px;
  background-color: var(--color-neutral-background);
}
.pp_blured_content {
  filter: opacity(50%) saturate(50%) blur(6px);
  max-height: 40px !important;
  user-select: none;
  cursor: pointer;
  overflow-y: hidden;
}
.pp_blured_content_area {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
}
.pp_blured_content:hover {
  filter: opacity(75%) saturate(75%) blur(4px);
}
.pp_blured_content_animator {
  max-height: 9999px;
  transition: max-height 1s ease-in, filter 0.2s ease;
}
.pp_blured_button_container {
  display: flex;
  justify-content: center;
  max-height: 0px;
}
.pp_blured_button {
  border-radius: 8px;
  z-index: 1;
  pointer-events: none;
  position: relative;
  top: 6px;
  height: 100%;
  max-width: 75%;
  box-shadow: 0px 0px 0px 2px #ffffff61;
}
.pp_blured_button_content {
  display: flex;
  align-items: center;
  padding: 0px 16px;
  gap: 6px;
  color: #ffffff;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}
.pp_blured_button_content > svg {
  min-width: 16px;
}
.pp_blured_button_content > span {
  display: block;
  overflow: hidden;
  padding: 6px;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  font-weight: 500;
  text-overflow: ellipsis;
}
`,""]);const S=f},"./src/modules/filters/filtersWindow.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_filter_list {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 20px 40px;
  gap: 0.5rem;
  list-style: none;
}
.pp_filter_element {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  border: solid 2px;
  border-radius: 15px;
  box-shadow: var(--filterShadowColor) 0px 2px 4px 0px;
}
:root {
  --filterShadowColor: #d9d9d9;
}
:root.theme-dark {
  --filterShadowColor: #5d5d5d !important;
}
.pp_filter_dragged {
  opacity: 0.25;
}
.pp_filter_element > div {
  width: 100%;
  padding: 0px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.pp_filter_element_dragAnchor {
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  height: 40px;
  color: #8a8f91;
}
.pp_window_elementsContainer > .pp_filter_element:hover {
  background-color: var(--color-neutral-background-hover);
}
.pp_filter_element_colorPicker {
  cursor: pointer;
  width: 36px;
  height: 40px;
  margin: 2px;
}
.pp_filter_element_colorPicker > input {
  height: 100%;
}
.pp_filter_element_toggles {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.pp_filter_element_toggles > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.pp_filter_element_toggles > div > span {
  text-wrap-mode: nowrap;
}
.pp_filter_addButton {
  height: 3rem;
  border-radius: 15px;
}
`,""]);const S=f},"./src/modules/filters/hiddenContent.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_hiddenContent_button {
  position: fixed;
  width: fit-content;
  height: 50px;
  bottom: -100px;
  border-radius: 12px;
  border: solid 2px var(--color-button-secondary-background);
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0px 16px;
  cursor: pointer;
  user-select: none;
  transition: bottom 0.4s ease, background 0.15s ease;
}
.pp_hiddenContent_button:hover {
  background: var(--color-button-secondary-background);
  border-color: transparent;
}
.pp_hiddenContent_button:active {
  background: var(--button-color-background-activated);
  border-color: transparent;
}
.pp_hiddenContent_button > svg {
  min-width: 16px;
}
.pp_hiddenContent_button > span {
  font-weight: 500;
  text-wrap-mode: nowrap;
}
.pp_hiddenContent_button_visible {
  visibility: visible;
  bottom: 20px;
}
:root {
  --pp-backgroundButton: #848d9233;
  --pp-backgroundButtonActive: #e5ebee6e;
}
:root.theme-dark {
  --pp-backgroundButton: #3f484d33 !important;
}
`,""]);const S=f},"./src/modules/header.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`#reddit-logo {
  text-decoration: none;
}
.pp_logo {
  width: max-content;
  color: var(--shreddit-color-wordmark);
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -2px;
}
`,""]);const S=f},"./src/modules/notifications.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`click-card > div[slot='content'] {
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
`,""]);const S=f},"./src/modules/posts/posts.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_post_shareButton :is(span):not(.flex) {
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
`,""]);const S=f},"./src/modules/posts/postsBackplates.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`article > shreddit-post {
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
:root {
  --stickiedColor: #0e8a001c;
  --stickiedHoverColor: #18900b3d;
}
:root.theme-dark {
  --stickiedColor: #0e8a001c !important;
  --stickiedHoverColor: #18900b3d !important;
}
`,""]);const S=f},"./src/modules/redirect.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_redirectContainer {
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
`,""]);const S=f},"./src/modules/scrollToTop.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_scrollToTop {
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
  opacity: 1;
  transition: padding-bottom 0.2s ease-in, color 0.2s ease-in, opacity 1s ease;
}
.pp_scrollToTop_inverted {
  transform: scale(1, -1);
}
.pp_scrollToTop_hidden {
  opacity: 0 !important;
}
.pp_scrollToTop_hidden::before {
  opacity: 0 !important;
}
.pp_scrollToTop:hover {
  padding-bottom: 50px !important;
  color: var(--scrollButtonColor);
  transition: padding-bottom 0.2s ease-out, color 0.2s ease-out, opacity 1s ease;
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
:root {
  --scrollLineColor: #e5ebee6e;
  --scrollLineTransparentColor: #e5ebee00;
  --scrollButtonColor: #c9d1d4c2;
}
:root.theme-dark {
  --scrollLineColor: #3f484d33 !important;
  --scrollLineTransparentColor: #30343600 !important;
  --scrollButtonColor: #969a9c !important;
}
`,""]);const S=f},"./src/modules/settings/settingsWindow.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_settings_subtittle {
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
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
}
.pp_no_decoration {
  text-decoration: none;
}
.pp_no_decoration:visited {
  text-decoration: none;
}
.pp_no_decoration:hover {
  text-decoration: none;
}
.pp_no_decoration:active {
  text-decoration: none;
}
.pp_settings_propertyHeader_badge {
  font-size: 12px;
  margin: 0px 0px 0px 8px;
  padding: 0px 4px;
  border: 1px solid;
  border-radius: 4px;
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
`,""]);const S=f},"./src/modules/sidebar/sidebar.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_sidebar_loadingSection {
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
`,""]);const S=f},"./src/modules/subs/flairBar.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_flairBar {
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
:root {
  --color-neutral-background-transparent: #fff0;
}
:root.theme-dark {
  --color-neutral-background-transparent: #0b141600 !important;
}
`,""]);const S=f},"./src/modules/subs/flairWindow.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_flairWindow_flair {
  padding: 0rem 3rem;
  gap: 8px;
  align-items: center;
}
.pp_flairWindow_flair > span {
  text-wrap-mode: nowrap;
  margin-left: 3rem;
}
.pp_flairWindow_flairContainer {
  width: 100%;
  display: flex;
  align-items: center;
}
.pp_flairWindow_columnTittle {
  margin: 20px 57px 10px 40px;
}
`,""]);const S=f},"./src/modules/subs/subs.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.masthead > section > div {
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
`,""]);const S=f},"./src/modules/wideMode.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`@media (min-width: 1392px) {
  .pp_pageContainer {
    margin-right: 300px;
    --flex-nav-width: 272px !important;
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
`,""]);const S=f},"./src/utils/UI/input.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_ui_input_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pp_ui_input_button {
  border-color: var(--color-neutral-border-weak);
  color: var(--color-secondary-weak);
  font-weight: 400;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  color: var(--color-secondary-plain);
}
.pp_ui_input_button:hover {
  background: var(--color-input-secondary-hover) !important;
}
.pp_ui_input_button:focus {
  border-color: var(--color-neutral-content-weak) !important;
}
.pp_ui_input_panel {
  width: 100%;
  margin: 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
}
.pp_ui_input_icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_ui_input_span {
  width: 100%;
}
.pp_ui_input {
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
.pp_ui_input_clearContainer {
  position: relative;
  width: 0px;
}
.pp_ui_input_clearButton {
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
`,""]);const S=f},"./src/utils/UI/options.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_ui_options {
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pp_ui_options_container {
  position: relative;
  display: flex;
  justify-content: center;
}
.pp_ui_options_container > span {
  width: max-content;
  text-align: center;
}
.pp_ui_options_dots {
  position: absolute;
  top: 10px;
  font-size: 20px;
  pointer-events: none;
}
.pp_ui_options_arrow {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}
.pp_ui_options_inversed {
  transform: scale(-1, 1);
}
`,""]);const S=f},"./src/utils/UI/toggle.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_ui_toggle {
  float: right;
  position: relative;
}
.pp_ui_toggle_active {
  justify-content: flex-end !important;
  background-color: #0079d3 !important;
}
.pp_ui_toggle_button {
  position: relative;
  cursor: pointer;
  user-select: none;
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
.pp_ui_toggle_knob {
  height: 19.5px;
  width: 19.5px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s linear;
  border-radius: 57%;
}
:root {
  --checkBox-background: #1a1a1b1a;
}
:root.theme-dark {
  --checkBox-background: #81818152 !important;
}
`,""]);const S=f},"./src/utils/imageViewer.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_imageViewable {
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
`,""]);const S=f},"./src/utils/window.less":(a,c,i)=>{"use strict";i.d(c,{A:()=>S});var v=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=i.n(v),E=i("./node_modules/css-loader/dist/runtime/api.js"),b=i.n(E),f=b()(g());f.push([a.id,`.pp_window_container {
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
.pp_window_controlArea {
  width: 200px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_window_scrollContent {
  overflow-y: scroll;
}
`,""]);const S=f},"./node_modules/css-loader/dist/runtime/api.js":a=>{"use strict";a.exports=function(c){var i=[];return i.toString=function(){return this.map(function(g){var E="",b=typeof g[5]<"u";return g[4]&&(E+="@supports (".concat(g[4],") {")),g[2]&&(E+="@media ".concat(g[2]," {")),b&&(E+="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {")),E+=c(g),b&&(E+="}"),g[2]&&(E+="}"),g[4]&&(E+="}"),E}).join("")},i.i=function(g,E,b,f,S){typeof g=="string"&&(g=[[null,g,void 0]]);var ue={};if(b)for(var _e=0;_e<this.length;_e++){var Ae=this[_e][0];Ae!=null&&(ue[Ae]=!0)}for(var pe=0;pe<g.length;pe++){var k=[].concat(g[pe]);b&&ue[k[0]]||(typeof S<"u"&&(typeof k[5]>"u"||(k[1]="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {").concat(k[1],"}")),k[5]=S),E&&(k[2]&&(k[1]="@media ".concat(k[2]," {").concat(k[1],"}")),k[2]=E),f&&(k[4]?(k[1]="@supports (".concat(k[4],") {").concat(k[1],"}"),k[4]=f):k[4]="".concat(f)),i.push(k))}},i}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":a=>{"use strict";a.exports=function(c){return c[1]}},"./resources/bookmarkSaved.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.372 1H4.628A1.629 1.629 0 0 0 3 2.628v16.256a1.113 1.113 0 0 0 1.709.941L10 16.479l5.282 3.34A1.12 1.12 0 0 0 17 18.873V2.628A1.63 1.63 0 0 0 15.372 1Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/bookmarkUnsaved.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.114 20A1.117 1.117 0 0 1 3 18.884V2.628A1.629 1.629 0 0 1 4.628 1h10.744A1.63 1.63 0 0 1 17 2.628v16.245a1.12 1.12 0 0 1-1.718.946L10 16.479l-5.291 3.346a1.11 1.11 0 0 1-.595.175Zm.514-17.75a.378.378 0 0 0-.378.378v16.009L10 15l5.75 3.636V2.628a.378.378 0 0 0-.378-.378H4.628Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/comments/bannedUser.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2,7.15,7.08,1.84A2.66,2.66,0,0,1,10,2.3a2.72,2.72,0,0,1,.7,2.91L5.37,10.66s-1,1.11-2.74-.73C1,8.24,2,7.15,2,7.15Z" style="fill: none;stroke: #8a3685;stroke-width: 1.5px"></path><path d="M7.33,8.85l6,6.16a1,1,0,0,0,1.28-.07,1.16,1.16,0,0,0,.15-1.28L8.9,7.37" style="fill: #8a3685; stroke:none"></path></svg>'},"./resources/comments/newUser.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20"><path d="M1.46,1.5S3.49,4.89,7,5.07c1.49.07,3.35.25,4.06.79,1.41,1.09,2.3,2.08,1.74,4.37a4.91,4.91,0,0,1-4.36,3.49C5.08,14,2.89,10.29,2.33,9.35.41,6.12,1.46,1.5,1.46,1.5Z" style="fill:#69b508;stroke:none;stroke-width:0px"></path><path d="M12.5,11.5a3.39,3.39,0,0,1,2,2,3.16,3.16,0,0,1,0,2" style="fill:none;stroke:#69b508;stroke-width:2px"></path></svg>'},"./resources/comments/shareButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.111 12.5a3.701 3.701 0 0 1-1.09 2.41c-.479.47-.928.922-1.378 1.373-.45.45-.894.9-1.368 1.366a3.852 3.852 0 0 1-2.698 1.099 3.852 3.852 0 0 1-2.698-1.099 3.738 3.738 0 0 1-1.116-2.659c0-.997.402-1.953 1.116-2.658.479-.472.928-.923 1.378-1.375.45-.45.893-.9 1.368-1.365A3.936 3.936 0 0 1 9.638 8.59a3.968 3.968 0 0 1 2.24.258c.27-.269.546-.54.812-.806l.131-.13a5.086 5.086 0 0 0-3.182-.624A5.052 5.052 0 0 0 6.732 8.71c-.48.471-.929.922-1.377 1.373-.449.451-.894.9-1.37 1.366A4.982 4.982 0 0 0 2.5 14.992c0 1.328.534 2.602 1.486 3.543A5.13 5.13 0 0 0 7.58 20a5.13 5.13 0 0 0 3.595-1.465c.478-.471.927-.923 1.377-1.374.451-.451.894-.9 1.368-1.366a4.993 4.993 0 0 0 1.263-2.071c.243-.781.288-1.61.132-2.412L14.11 12.5Z" style="fill:currentColor;stroke:none;stroke-width:1px"></path><path d="M16.017 1.467A5.123 5.123 0 0 0 12.422 0a5.123 5.123 0 0 0-3.595 1.467c-.478.471-.926.923-1.377 1.374-.45.451-.894.9-1.367 1.366a4.966 4.966 0 0 0-1.106 1.624 4.907 4.907 0 0 0-.291 2.86l1.2-1.19a3.699 3.699 0 0 1 1.092-2.41c.478-.472.928-.923 1.377-1.374.45-.45.894-.9 1.368-1.366a3.844 3.844 0 0 1 2.698-1.101c1.012 0 1.982.396 2.698 1.101a3.736 3.736 0 0 1 1.116 2.66c0 .996-.401 1.953-1.116 2.658-.478.471-.927.922-1.377 1.373-.45.451-.893.9-1.368 1.367a3.933 3.933 0 0 1-2.014 1.003 3.966 3.966 0 0 1-2.24-.26c-.273.274-.551.549-.818.818l-.123.12a5.087 5.087 0 0 0 3.183.624 5.053 5.053 0 0 0 2.906-1.423c.477-.472.926-.923 1.376-1.375.45-.452.894-.9 1.368-1.365A4.977 4.977 0 0 0 17.5 5.008a4.977 4.977 0 0 0-1.488-3.543l.005.002Z" style="fill:currentColor;stroke:none;stroke-width:1px"></path></svg>'},"./resources/comments/sortButtons/controversial.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><polygon points="6.34 13.21 3.33 9.37 2.46 10.07 5.35 13.73 6.34 13.21" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><polygon points="4.11 13.02 3.11 11.75 0.76 13.47 1.7 14.55 4.11 13.02" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><path d="M5.67,9.62l-.8.66,1,1.32s.54-.31,1.31-.8A12,12,0,0,1,5.67,9.62Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></path><path d="M10.93,3.83A19.94,19.94,0,0,1,8.52,7.08c.57.52,1.29,1.08,1.8,1.46a11.2,11.2,0,0,0,1-1C14.21,4.3,14.7,2.11,14.7,2.11Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></path><polygon points="9.23 13.59 12.52 9.01 13.53 9.81 10.36 14.19 9.23 13.59" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><polygon points="11.61 12.82 12.66 11.36 15.26 13.26 14.28 14.52 11.61 12.82" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><path d="M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z" style="fill:currentColor"></path><path d="M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z" style="fill:none;stroke:none;stroke-miterlimit:10"></path></svg>'},"./resources/comments/sortButtons/old.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="5.28" cy="8.67" r="1" style="fill: currentColor"></circle><circle cx="9.28" cy="8.67" r="1" style="fill: currentColor"></circle><circle cx="12.26" cy="2.08" r="1.32" style="fill: currentColor"></circle><path d="M7.55,5.08c.09-2.83,3-3.59,4-3" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"></path><path d="M4.92,11.7s3,1,5,0" style="fill: blue;stroke: currentColor;stroke-miterlimit: 10"></path><path d="M7.72,5c3.31,0,6,2,6,4.5S11,14,7.72,14s-6-2-6-4.5S4.41,5,7.72,5m0-.5c-3.59,0-6.5,2.24-6.5,5s2.91,5,6.5,5,6.5-2.24,6.5-5-2.91-5-6.5-5Z" style="fill: currentColor"></path><path d="M10.85,5.5A1.56,1.56,0,0,1,13,5.31a1.34,1.34,0,0,1,.24,1.89" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px"></path><path d="M2.18,7a1.55,1.55,0,0,1,.53-2,1.33,1.33,0,0,1,1.86.4" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px"></path></svg>'},"./resources/comments/sortButtons/qa.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="10.77" cy="4.4" r="3" style="fill: currentColor"></circle><path d="M3.54,13.87l0,0a1.07,1.07,0,0,1-.46-1.35L6.4,7.44a1.05,1.05,0,0,1,1.48,0l.58.43c.54.41.74,1,.43,1.42L5,13.93A1.08,1.08,0,0,1,3.54,13.87Z" style="fill: currentColor"></path></svg>'},"./resources/comments/userTags/blockedButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m9.78126,18.09375c-4.41989,0 -8,-3.58011 -8,-8c0,-4.41989 3.58011,-8 8,-8c4.41989,0 8,3.58011 8,8c0,4.41989 -3.58011,8 -8,8z" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m4.43767,4.59392l10.81217,10.93716" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/blockedIcon.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="M3.11,3l7.94,8" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="M7,12.88A5.88,5.88,0,1,1,12.91,7,5.88,5.88,0,0,1,7,12.88Z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/comments/userTags/followedButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m1.56177,7.99265l5.62517,-1.11153l2.68713,-4.92101l3.02542,4.77603l5.28687,1.25651l-4.60571,3.96991l1.43072,5.79091l-5.28229,-2.56852l-4.99233,2.56852l1.09243,-6.03254l-4.26742,-3.72827l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/followedIcon.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m0.43678,5.49532l4.46205,-0.8817l2.13151,-3.90349l2.39985,3.78849l4.1937,0.9967l-3.65339,3.14905l1.13489,4.59352l-4.19007,-2.03743l-3.96007,2.03743l0.86655,-4.78519l-3.38505,-2.95738l0,-0.00001l0.00001,0z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/comments/userTags/likedButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m7.28935,15.93702c-4.80908,-3.55432 -6.52852,-5.80272 -6.54246,-8.55516c-0.0127,-2.50919 2.10985,-4.93093 4.30951,-4.91697c1.09841,0.00698 3.45457,0.93051 4.2889,1.6811c0.42039,0.37819 0.6195,0.3409 1.55543,-0.29133c2.54723,-1.72064 5.03461,-1.75676 6.64556,-0.09648c2.57463,2.65349 2.10589,5.82222 -1.34747,9.10906c-1.836,1.74747 -5.84543,4.84759 -6.26946,4.84759c-0.12903,0 -1.31703,-0.80001 -2.64001,-1.7778l0,0l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/likedIcon.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m5.10986,11.44595c-3.39081,-2.55084 -4.60316,-4.16445 -4.61299,-6.1398c-0.00896,-1.80077 1.48763,-3.53879 3.03857,-3.52877c0.77447,0.00501 2.43577,0.6678 3.02404,1.20648c0.29641,0.27142 0.4368,0.24465 1.09671,-0.20908c1.79601,-1.23486 3.54983,-1.26078 4.68568,-0.06924c1.81534,1.90433 1.48483,4.17844 -0.95008,6.53732c-1.29454,1.25411 -4.12153,3.47898 -4.4205,3.47898c-0.09098,0 -0.92862,-0.57415 -1.86143,-1.27588l0,0l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/comments/userTags/warningButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m1.24313,16.49297l8.78125,-13.75l8.78125,13.75l-17.5625,0z" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m9.875,7.5l0,4.5" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m9.875,14.09375l0,1" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/warningIcon.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m6.91754,10.29973l0,0.7153" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="m6.91754,5.38201l0,4.06927" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="m0.74313,12.0159l6.28126,-9.83543l6.28126,9.83543l-12.56252,0z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/contentFilter.svg":a=>{a.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'},"./resources/deleteButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path></svg>'},"./resources/dragAnchor.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13"><rect y="5.5" width="14" height="2" rx="1"></rect><rect width="14" height="2" rx="1"></rect><rect y="11" width="14" height="2" rx="1"></rect></svg>'},"./resources/feedButtons/feedButtonBest.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.82,1.51l1.43,3.4a.86.86,0,0,0,.66.47l3.62.28A.91.91,0,0,1,15,7.22L12.3,9.62a.84.84,0,0,0-.25.76l.81,3.55a.92.92,0,0,1-1.33,1L8.41,13a.91.91,0,0,0-.82,0L4.47,14.89a.92.92,0,0,1-1.33-1L4,10.38a.84.84,0,0,0-.25-.76L1,7.22a.91.91,0,0,1,.5-1.56l3.62-.28a.86.86,0,0,0,.66-.47l1.43-3.4A.91.91,0,0,1,8.82,1.51Z" style="fill:currentColor; stroke:none"></path></svg>'},"./resources/feedButtons/feedButtonBest_empty.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.82,1.51l1.43,3.4a.86.86,0,0,0,.66.47l3.62.28A.91.91,0,0,1,15,7.22L12.3,9.62a.84.84,0,0,0-.25.76l.81,3.55a.92.92,0,0,1-1.33,1L8.41,13a.91.91,0,0,0-.82,0L4.47,14.89a.92.92,0,0,1-1.33-1L4,10.38a.84.84,0,0,0-.25-.76L1,7.22a.91.91,0,0,1,.5-1.56l3.62-.28a.86.86,0,0,0,.66-.47l1.43-3.4A.91.91,0,0,1,8.82,1.51Z" style="fill:none; stroke:currentColor"></path></svg>'},"./resources/feedButtons/feedButtonHot.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.49,2.93c.7,1.56,3,2.81,3.69,3.52a5.14,5.14,0,0,1,1.36,5.45c-1.09,3.37-4.49,3.38-6.21,3.38s-4.18-.28-5-3,.8-4.41,1-5,1.06,2.52,2,3.12c1.19.79,2.85,0,2.85-1.18S6.72,7.65,6.44,5.37a10.62,10.62,0,0,1,1-4.9S7.83,1.46,8.49,2.93Z" style="stroke:currentColor;fill:currentColor;stroke-width:0.5px"></path></svg>'},"./resources/feedButtons/feedButtonNew.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,15.5A7.5,7.5,0,1,1,15.5,8,7.5,7.5,0,0,1,8,15.5Zm0-14A6.5,6.5,0,1,0,14.5,8,6.51,6.51,0,0,0,8,1.5Z" style="fill:currentColor;stroke:currentColor;stroke-width:0.5px"></path><path d="M8,2V8l4-2" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/feedButtons/feedButtonRising.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1.1,14.67c1.4-2.8,3.62-6.84,3.62-6.84L9,12.18l4.13-9.94" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="M8.5,4.5l4.68-2.45S14,5.31,14.5,7.5" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/feedButtons/feedButtonTop.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.51,6.56,9.13,1.17a1.61,1.61,0,0,0-2.26,0L1.49,6.56a1,1,0,0,0,.72,1.73H5.52V14A1.28,1.28,0,0,0,6.8,15.3H9.23A1.29,1.29,0,0,0,10.52,14V8.29h3.27A1,1,0,0,0,14.51,6.56Z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/hiddenIco.svg":a=>{a.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Hide"><path id="Vector" d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>'},"./resources/imageCloseButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="m33.16001,9.52439l-2.37671,-2.37671l-10.691,10.691l-10.691,-10.691l-2.37671,2.37671l10.691,10.691l-10.691,10.691l2.37671,2.37671l10.691,-10.691l10.691,10.691l2.37671,-2.37671l-10.691,-10.691l10.691,-10.691z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/inputClear.svg":a=>{a.exports='<svg fill="currentColor" icon-name="clear-outline" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/postUnwrapButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M12.5,18.75A2.36,2.36,0,0,1,10.83,18L2.47,9.53,3.53,8.47,11.9,17a.79.79,0,0,0,1.2,0l8.37-8.5,1.06,1.06L14.17,18A2.36,2.36,0,0,1,12.5,18.75Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10;stroke-width:0px"></path></svg>'},"./resources/scrollButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M27.58,27.12,21,20.53a1.42,1.42,0,0,0-2,0l-6.58,6.59a1.41,1.41,0,0,0,1,2.41H26.58A1.41,1.41,0,0,0,27.58,27.12Z" style="fill:currentColor"></path><rect x="5" y="11.75" width="30" height="2.5" style="fill:currentColor"></rect></svg>'},"./resources/settingsArrow.svg":a=>{a.exports='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.942 15.442-.884-.884L11.616 10 7.058 5.442l.884-.884 5 5a.624.624 0 0 1 0 .884l-5 5Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/settingsButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.07,2.25a.33.33,0,0,1,.33.33V6.72h1.25a2.11,2.11,0,0,1,0,4.21H15.4v4.14a.33.33,0,0,1-.33.33H10.93v1.25a2.11,2.11,0,0,1-4.21,0V15.4H2.58a.33.33,0,0,1-.33-.33v-3A3.51,3.51,0,0,0,4.49,8.82,3.48,3.48,0,0,0,2.25,5.57v-3a.33.33,0,0,1,.33-.33H5.34a3.49,3.49,0,0,0,7,0h2.76m0-1.25H10.75A2.24,2.24,0,1,1,6.9,1H2.58A1.58,1.58,0,0,0,1,2.58v4a2.24,2.24,0,1,1,0,4.47v4a1.58,1.58,0,0,0,1.58,1.58H5.47a3.36,3.36,0,0,0,6.71,0h2.89a1.58,1.58,0,0,0,1.58-1.58V12.18a3.36,3.36,0,0,0,0-6.71V2.58A1.58,1.58,0,0,0,15.07,1Z"></path></svg>'},"./resources/subFilter.svg":a=>{a.exports='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z" style="stroke:none;stroke-width:0px"></path></svg>'},"./resources/windowCloseButton.svg":a=>{a.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14,2h0a.75.75,0,0,0-1.06,0L8.15,6.78a.2.2,0,0,1-.3,0L3.06,2A.75.75,0,0,0,2,2H2A.75.75,0,0,0,2,3.06L6.78,7.85a.2.2,0,0,1,0,.3L2,12.94A.75.75,0,0,0,2,14H2a.75.75,0,0,0,1.06,0L7.85,9.22a.2.2,0,0,1,.3,0L12.94,14A.75.75,0,0,0,14,14h0a.75.75,0,0,0,0-1.06L9.22,8.15a.2.2,0,0,1,0-.3L14,3.06A.75.75,0,0,0,14,2Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10;stroke-width:0px"></path></svg>'}},mt={};function p(a){var c=mt[a];if(c!==void 0)return c.exports;var i=mt[a]={id:a,exports:{}};return ao[a](i,i.exports,p),i.exports}p.n=a=>{var c=a&&a.__esModule?()=>a.default:()=>a;return p.d(c,{a:c}),c},p.d=(a,c)=>{for(var i in c)p.o(c,i)&&!p.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:c[i]})},p.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c);var Ar={};(()=>{"use strict";async function c(e,t=0){return new Promise(o=>{let n=e();if(n!=null)return o(n);let s=t/10;const r=setInterval(()=>{n=e();let l=!1;if(t>0&&(s--,s<0&&(l=!0)),n!=null||l)return clearInterval(r),o(n)},10)})}function i(e,t,o=!0){const n=t(e);if(n!=null&&n==!0)return;let s=new MutationObserver(r=>{for(const l of r)for(const d of l.addedNodes)if(s&&d instanceof HTMLElement){const w=t(d);w!=null&&w==!0&&(s.disconnect(),s=null)}});s.observe(e,{childList:!0,subtree:o})}function v(e,t="pp-rendered"){return e==null||e.getAttribute(t)!=null?!0:(e.setAttribute(t,""),!1)}function g(e){return document.cookie.split("; ").find(t=>t.startsWith(e))?.split("=")[1]}function E(e,t){if(e==t)return!1;const o=e.split("."),n=t.split(".");for(const s of[0,1,2]){const r=parseInt(o[s]),l=parseInt(n[s]);if(r!=l)return r<l}return!1}function b(e,t,o=10){let n=t*1e3/o,s=setInterval(()=>{e(),n--,n<0&&clearInterval(s)},o)}async function f(e,t){const{seconds:o,color:n}={seconds:3,color:null,...t};let s=await c(()=>document.body?.querySelector("alert-controller")?.shadowRoot?.querySelector("toaster-lite")),r=document.createElement("faceplate-toast");r.classList.add("theme-rpl"),n!=null&&(r.style.backgroundColor=n),r.textContent=e,s.appendChild(r),setTimeout(()=>{r.setAttribute("_fading","")},o*1e3)}function S(e){console.log(`Reddit++: ${e}`)}const ue="DATABASE_VERSION";class _e{constructor(t,o,n=null){this.version=t,this.action=o,this.previous=n}check(){const t=GM_getValue(ue,null);(t==null||E(t,this.version))&&(this.previous?.check(),this.action(),GM_setValue(ue,this.version),f(`Reddit++ was upgraded to ${this.version}`))}}const Ae=new _e("1.0.0",()=>{const e=GM_getValue("SETTINGS_DATABASE",null);if(e==null)return;const t=e.savedBookmark;t!=null&&(e.savedBookmarkPosts=t,e.savedBookmarkComments=t,delete e.savedBookmark);const o=e.savedBookmarkHideUnsaved;o!=null&&(e.savedBookmarkPostsShowAlways=!o,e.savedBookmarkCommentsShowAlways=!o,delete e.savedBookmarkHideUnsaved),GM_setValue("SETTINGS_DATABASE",e)});var pe=p("./src/modules/wideMode.less");class k{constructor(){this.rootStylesheet=new CSSStyleSheet,this.styleSheets=[this.rootStylesheet],this.styleKeys=new Set,this.sources=[],this.registry(document)}registry(t){this.sources.push(t);for(const o of this.styleSheets)t.adoptedStyleSheets.push(o)}addStyle(t,o=null){if(o!=null){if(this.styleKeys.has(o))return;this.styleKeys.add(o)}const n=new CSSStyleSheet;n.replaceSync(t),this.styleSheets.push(n);for(const s of this.sources)s.adoptedStyleSheets.push(n)}addRule(t){this.rootStylesheet.insertRule(t,0)}addVar(t,o,n=null){this.addRule(`:root.theme-light { ${t}: ${o} !important;}`),this.addRule(`:root { ${t}: ${n??o};}`)}}const B=new k;class yr{}const ht={isComment:!0},je={isComment:!1},I=2e3,lo=15,Fe=60*60,Ne=Fe*24;function co(e){return e*1e3}class uo{}class Q{constructor(t,o=new uo){if(this.databaseKey=t+"_DATABASE",this.refreshKey=t+"_REFRESHED",this.cleanupKey=t+"_CLEANUP",this.isCleanupable=o?.isCleanupable??!1,this.validator=o?.validator??null,this.loader=o?.loader??null,this.refresh(),this.isCleanupable&&GM_getValue(this.cleanupKey,0)<Date.now()){const n=Object.entries(this.data).length,s=Date.now()-co(Ne*(1e3/n));this.data=Object.fromEntries(Object.entries(this.data).filter(([r,l])=>l.timestamp>s)),this.refreshed=Date.now(),GM_setValue(this.databaseKey,this.data),GM_setValue(this.refreshKey,this.refreshed),GM_setValue(this.cleanupKey,Date.now()+1e3*Fe)}}refresh(){const t=GM_getValue(this.refreshKey,0);(this.data==null||this.refreshed<t)&&(this.refreshed=t,this.data=GM_getValue(this.databaseKey,{}))}get(t){this.refresh();const o=this.data[t];return o??{}}async getWithLoader(t,o=null){this.refresh();const n=this.data[t];let s=n??{},r=!1;return this.validator(s)&&(s=await this.loader(t),this.set(t,s),r=!0),o?.(r),s}set(t,o){this.refresh(),this.isCleanupable&&(o.timestamp=Date.now()),this.data[t]=o,this.refreshed=Date.now(),GM_setValue(this.databaseKey,this.data),GM_setValue(this.refreshKey,this.refreshed)}}var W;(function(e){e[e.Sub=0]="Sub",e[e.Home=1]="Home",e[e.Popular=2]="Popular",e[e.All=3]="All"})(W||(W={}));function _o(){return window.location.href.includes("?feed=home")||window.location.href=="https://www.reddit.com/"?W.Home:window.location.href.includes("reddit.com/r/popular/")?W.Popular:window.location.href.includes("reddit.com/r/all/")?W.All:W.Sub}function fe(e){const t=["Hot","New","Top","Rising"];return e==W.Home||e==W.Popular?["Best"].concat(t):t}class O{constructor(t,o=!0){this.name=t,this.defailtValue=o}isEnabled(){const t=oe.get(this.name);return t instanceof Object?this.defailtValue:t}isDisabled(){return!this.isEnabled()}switch(t=null){oe.set(this.name,t??this.isDisabled())}getChild(t,o=!0){return new O(this.name+t,o)}}class ye{constructor(t,o,n=0){this.name=t,this.values=o,this.defaultIndex=n}get(){const t=oe.get(this.name);return t instanceof Object?this.values[this.defaultIndex]:t}getIndex(){return this.values.indexOf(this.get())}isDefault(){return this.get()==this.values[this.defaultIndex]}set(t){oe.set(this.name,this.values[t])}}class me{constructor(t,o,n=null){this.name=t,this.defaultValue=o,this.filter=n??(s=>s)}get(){const t=oe.get(this.name);return t instanceof Object?this.defaultValue:t}isDefault(){return this.get()==this.defaultValue}set(t){oe.set(this.name,t)}}function po(e){return t=>{const o=parseInt(t).toString();return o!="NaN"?o:e.toString()}}function Ke(e){return t=>{const o=Math.abs(parseInt(t)).toString();return o!="NaN"?o:e.toString()}}class fo{constructor(){this.revision=this.getRevision(),this.isDirted=!1,this.API_APP=new me("apiApp",""),this.API_WARNINGS=new O("apiWarnings"),this.WIDE_MODE=new O("wideMode"),this.CONTENT_WIDTH=new me("contentWidth","700",Ke(700)),this.CONTENT_OFFSET=new me("contentOffset","0",po(0)),this.BIGGER_FONTS=new O("biggerFonts"),this.SCROLL_TO_TOP=new O("scrollToTop"),this.IMAGE_VIEWER=new O("imageViewer"),this.COLLAPSE_AWARDS=new O("collapseAwards"),this.COLLAPSE_AWARDS_COMPLETELY=new O("collapseAwardsCompletely",!1),this.REDIRECT_SUGGESTION=new O("redirectSuggestion"),this.REDIRECT_FORCED=new O("redirectForced",!1),this.NOTIFY_POPUP=new O("notifyPopup"),this.SHOW_FILTERED_CONTENT=new O("showFilteredContent"),this.FILTERED_CONTENT_MAX_COUNT=new me("filteredContentMaxCount","20",Ke(20)),this.SUB_FILTER=new O("sidebarSubFilter"),this.SIDEBAR_CUSTOMS=new O("sidebarCustoms"),this.SIDEBAR_RECENT=new O("sidebarRecent"),this.SIDEBAR_SUBS=new O("sidebarSubs"),this.SIDEBAR_RESOURCES=new O("sidebarResources"),this.DEFAULT_FEED_HOME=new ye("defaultFeedHome",fe(W.Home),0),this.DEFAULT_FEED_POPULAR=new ye("defaultFeedPopular",fe(W.Popular),1),this.DEFAULT_FEED_ALL=new ye("defaultFeedAll",fe(W.All),0),this.DEFAULT_FEED_SUB=new ye("defaultFeedSub",fe(W.Sub),0),this.FEED_BUTTONS=new O("feedButtons"),this.FLAIR_BAR=new O("flairbar"),this.FLAIR_SHOW_ALWAYS=new O("flairShowAlways",!1),this.COLLAPSE_HIGHLIGHTS=new O("collapseHighlights",!1),this.BACKPLATES=new O("backplates"),this.SELECTABLE_POSTS=new O("selectablePosts"),this.UNWRAP_POST=new O("unwrapPost"),this.SHOW_POST_AUTHOR=new O("showPostAuthor"),this.SAVED_BOOKMARK_POSTS=new O("savedBookmarkPosts"),this.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS=new O("savedBookmarkPostsShowAlways",!1),this.COMMENTS_SORT_BUTTONS=new O("commentSortButtons"),this.COMMENTS_REMEMBER_SORT=new O("commentRememberSort"),this.UNWRAP_MORE_REPLIES=new O("unwrapMoreReplies",!1),this.USER_INFO=new O("userInfo",!1),this.SHOW_NAMES=new O("showNames",!1),this.USERNAME_MAX_SIMBOLS=new me("usernameMaxSimbols","50",Ke(50)),this.USER_TAGS=new O("userTags"),this.HIDE_SHARE=new O("hideShare"),this.GHOSTED_COMMENTS=new O("ghostedComments"),this.COLLAPSE_AUTOMODERATOR=new O("collapseAutomoderator"),this.SAVED_BOOKMARK_COMMENTS=new O("savedBookmarkComments"),this.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS=new O("savedBookmarkCommentsShowAlways",!1),this.HIDE_RELATED_POSTS=new O("hideRelatedPosts",!1),window.addEventListener("storage",t=>{this.isDirt()&&!this.isDirted&&(this.isDirted=!0,document.addEventListener("visibilitychange",()=>{window.location.reload()},{once:!0}))})}getRevision(){return parseInt(localStorage.getItem("pp_settings_s_revision")??"0")}nextRevision(){this.revision++,localStorage.setItem("pp_settings_s_revision",String(this.revision))}isDirt(){return this.getRevision()!=this.revision}}const oe=new Q("SETTINGS"),_=new fo;function gt(e){return`${parseInt(e)}px`}function mo(e,t){if(_.WIDE_MODE.isDisabled()||(B.addStyle(pe.A,"wideMode"),B.addVar("--pp-content-width",gt(_.CONTENT_WIDTH.get())),B.addVar("--pp-content-offset",gt(_.CONTENT_OFFSET.get())),t.parentNode==e))return;t.className="right-sidebar min-w-0 w-[316px] max-w-[316px] hidden s:block styled-scrollbars xs:sticky xs:top-[56px] xs:max-h-[calc(100vh-var(--shreddit-header-height)-1px)] xs:overflow-y-auto xs:overflow-x-hidden pp_rightSidebar";const o=t.parentElement;let n=!(window.innerWidth>=1392);const s=e.querySelector(".main-container");s.className="main-container gap-lg w-full",i(e,r,!1),i(o,r,!1);function r(d){return d.classList.contains("rounded-[16px]")&&(d.classList.add("pp_rightSidebar_contextLookup"),window.innerWidth<1392&&d.parentNode!=t.parentNode&&t.after(d)),!1}l(),window.addEventListener("resize",d=>{l()});function l(){window.innerWidth>=1392&&!n&&(e.prepend(t),n=!0),window.innerWidth<1392&&n&&(o.append(t),n=!1)}}var ho=p("./src/modules/app.less"),go=p("./src/modules/sidebar/sidebar.less");class q{}q.COMMENTS_CURRENT_SORT="COMMENTS_CURRENT_SORT",q.SUB_FILTER="SUB_FILTER",q.CONTENT_FILTERS="CONTENT_FILTERS";const z=new Q("PREFS");var vo=p("./resources/subFilter.svg"),Eo=p.n(vo);const Z="none",Y="currentColor";class Or{}const vt=document.createElement("div");function P(e,t,o,n){const{viewBox:s,strokeColor:r,fillColor:l}={viewBox:null,strokeColor:Y,fillColor:Y,...n};vt.innerHTML=e;const d=vt.firstChild;return d.setAttribute("width",`${t}px`),d.setAttribute("height",`${o}px`),s!=null&&d.setAttribute("viewBox",`0 0 ${s.w} ${s.h}`),d.setAttribute("fill",l),d.setAttribute("stroke",r),d}function He(e,t,o,n,s={}){const r=P(t,o,n,s);return e.append(r),r}function Br(e,t,o,n,s={}){const r=P(t,o,n,s);return e.prepend(r),r}function u(e,t,o=null){const n=Ve(t,o);return e.append(n),n}function Et(e,t,o=null){const n=Ve(t,o);return e.prepend(n),n}function Ve(e,t=null){const o=document.createElement(e);if(t!=null)if(typeof t=="string"&&t)o.classList.add(t);else for(const n of t)o.classList.add(n);return o}var wo=p("./resources/inputClear.svg"),So=p.n(wo),bo=p("./src/utils/UI/input.less");B.addStyle(bo.A);function qe(e,t,o,n,s){const{icon:r,iconConfig:l,cleanButton:d,alignCenter:w,filter:m}={icon:null,iconConfig:{strokeColor:Y,fillColor:Z},cleanButton:!1,alignCenter:!1,filter:L=>L,...s},T=u(e,"div","pp_ui_input_container"),h=u(T,"div",["pp_ui_input_button","button","button-bordered"]);h.setAttribute("tabindex","0");const C=h.attachShadow({mode:"open"});B.registry(C);const x=u(h,"span",["pp_ui_input_panel","flex","items-center","justify-center"]);if(C.appendChild(x),r!=null){const L=u(x,"span","pp_ui_input_icon");He(L,r,16,16,l)}const A=u(x,"span","pp_ui_input_span");d==!0&&(A.style.marginRight="22px");const y=u(A,"input","pp_ui_input");y.type="text",y.placeholder=t,w==!0&&(y.style.textAlign="center"),o!=null&&o.length>0&&(y.value=o);let M=null;if(d==!0){const L=u(T,"div","pp_ui_input_clearContainer");M=u(L,"button",["pp_ui_input_clearButton","button-plain"]),M.classList.toggle("pp_hidden",(y.value?.length??0)==0);const D=P(So(),16,16);M.append(D),M.addEventListener("click",()=>{y.value=m(""),n(y.value),M.classList.toggle("pp_hidden",!0)})}return y.addEventListener("input",()=>{const L=m(y.value.trim());n(L),d==!0&&M.classList.toggle("pp_hidden",L.length==0)}),y.addEventListener("focusout",()=>{const L=m(y.value.trim());L!=y.value&&(y.value=L),d==!0&&M.classList.toggle("pp_hidden",L.length==0)}),T}let he=null;async function xo(e){if(v(e,"pp-sub-filter"))return;const t=await c(()=>e.querySelector(".left-nav-create-community-button"));he!=null?he.clear():he=new Map,e.querySelector("left-nav-communities-controller").shadowRoot.querySelectorAll("left-nav-community-item").forEach(d=>{he.set(d.getAttribute("prefixedname").replace("r/","").toLowerCase(),d)});let n=z.get(q.SUB_FILTER);(n==null||n instanceof Object)&&(n="");const s=qe(e,"Filter",n,d=>{wt(d)},{icon:Eo(),iconConfig:{strokeColor:Z,fillColor:Y},cleanButton:!0,filter:d=>d.trim()});t.style.width="65px",(await c(()=>t.querySelector(".text-14"))).remove(),t.replaceWith(s),s.prepend(t);const l=s.querySelector(".pp_ui_input_button");l.addEventListener("focus",()=>{t.style.display="none"}),l.addEventListener("focusout",()=>{t.style.display="block"}),wt(n)}function wt(e){z.set(q.SUB_FILTER,e),he.forEach((t,o)=>{o.includes(e.toLowerCase())?t.style.removeProperty("display"):t.style.display="none"})}B.addStyle(go.A);let St=!1;function Co(e){e.classList.add("pp_defaultText"),i(e,t=>{const o=t.matches("faceplate-expandable-section-helper")?t:e.querySelector("faceplate-expandable-section-helper");if(o==null)return;const n=e.querySelector('summary[aria-controls="multireddits_section"]');if(n!=null)return Oe(o,_.SIDEBAR_CUSTOMS,async()=>{const s=await c(()=>o.getAttribute("open"));return{container:o,button:n,hr:o.nextElementSibling}}),!0}),i(e,t=>{const o=t.matches("faceplate-expandable-section-helper")?t:e.querySelector("faceplate-expandable-section-helper");if(o==null)return;const n=e.querySelector('summary[aria-controls="communities_section"]');if(n!=null)return xo(o),Oe(o,_.SIDEBAR_SUBS,async()=>{const s=await c(()=>o.getAttribute("open"));let r=o.nextElementSibling;for(;r!=null&&!r.matches("hr");)r=r.nextElementSibling;return{container:o,button:n,hr:r}}),!0}),i(e,t=>{let o=e.querySelector("reddit-recent-pages");if(o==null&&t.matches("reddit-recent-pages")&&(o=t),o!=null)return Oe(o,_.SIDEBAR_RECENT,async()=>{const n=await c(()=>{const r=o.shadowRoot?.querySelector("faceplate-expandable-section-helper");return r?.getAttribute("open")!=null?r:null}),s=await c(()=>n?.querySelector("summary"));return B.registry(o.shadowRoot),n.classList.add("pp_defaultText"),{container:n,button:s,hr:o.querySelector("hr")}}),!0}),St||(St=!0,i(e,t=>{const o=e.querySelector('summary[aria-controls="RESOURCES"]');if(o!=null){const n=o.parentElement.parentElement,s={container:n,button:o,hr:null};return Oe(n,_.SIDEBAR_RESOURCES,()=>s),!0}}))}class Tr{}async function Oe(e,t,o){if(v(e))return;e.classList.add("pp_sidebar_loadingSection");const n=await o();if(e.classList.remove("pp_sidebar_loadingSection"),t.isEnabled()){const s=t.getChild("Collapsed",!1),r=n.container.querySelector("details");s.isEnabled()&&(n.container.toggleAttribute("open",!1),r.classList.add("pp_sidebar_collapsedSection")),n.button.addEventListener("click",l=>{const d=l.currentTarget;setTimeout(()=>{const w=d.getAttribute("aria-expanded")==="false";s.switch(w)},10),r.classList.toggle("pp_sidebar_collapsedSection",!1)})}else n.container.remove(),n.hr?.remove()}var Ao=p("./src/modules/biggerFonts.less");_.BIGGER_FONTS.isEnabled()&&B.addStyle(Ao.A);function Lr(){}var yo=p("./resources/imageCloseButton.svg"),Oo=p.n(yo),Bo=p("./src/utils/imageViewer.less");B.addStyle(Bo.A);class Mr{}class Dr{}class To{constructor(){this.openned=!1,this.viewer=null,this.container=null,this.image=null,this.mouse={x:0,y:0},this.drag={enabled:!1,start:{x:0,y:0},current:{x:0,y:0},scale:1},this.scrollImage=this.scrollImage.bind(this),this.startDrag=this.startDrag.bind(this),this.mouseMove=this.mouseMove.bind(this),this.endDrag=this.endDrag.bind(this)}open(t){this.openned||(this.openned=!0,this.viewer==null&&this.build(),this.image.src=t,window.addEventListener("wheel",this.scrollImage,{passive:!1}),this.image.addEventListener("mousedown",this.startDrag),document.addEventListener("mousemove",this.mouseMove),this.image.addEventListener("mouseup",this.endDrag),this.image.addEventListener("mouseleave",this.endDrag),this.drag.current={x:0,y:0},this.drag.scale=1,this.updateTransform(),document.body.appendChild(this.viewer))}close(){this.viewer.remove(),this.drag.enabled=!1,this.container.classList.toggle("pp_imageViewer_drag",!1),window.removeEventListener("wheel",this.scrollImage),this.image.removeEventListener("mousedown",this.startDrag),document.removeEventListener("mousemove",this.mouseMove),this.image.removeEventListener("mouseup",this.endDrag),this.image.removeEventListener("mouseleave",this.endDrag),this.openned=!1}build(){this.viewer=document.createElement("div"),this.viewer.classList.add("pp_imageViewer"),this.viewer.dataset.open=String(!1);const t=u(this.viewer,"div","pp_imageViewer_closeButton"),o=P(Oo(),40,40);t.appendChild(o),this.container=u(this.viewer,"div","pp_imageViewer_imageContainer"),this.image=u(this.container,"img","pp_imageViewer_image"),this.image.alt="Comment image",this.image.ondragstart=function(){return!1},this.viewer.addEventListener("click",n=>{n.target!=this.image&&this.close()}),t.addEventListener("click",()=>{this.close()})}updateTransform(){this.container.style.transform=`translate(${this.drag.current.x}px, ${this.drag.current.y}px) scale(${this.drag.scale}, ${this.drag.scale})`}startDrag(t){this.drag.start.x=t.screenX-this.drag.current.x,this.drag.start.y=t.screenY-this.drag.current.y,this.drag.enabled=!0,this.container.classList.toggle("pp_imageViewer_drag",!0)}mouseMove(t){this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.drag.enabled&&(this.drag.current.x=t.screenX-this.drag.start.x,this.drag.current.y=t.screenY-this.drag.start.y,this.updateTransform())}endDrag(){this.fit(1),this.drag.enabled=!1,this.container.classList.toggle("pp_imageViewer_drag",!1)}scrollImage(t){const o=Math.max(1,1+Math.log2(this.drag.scale*this.drag.scale)),n=this.drag.scale;this.drag.scale=Math.max(.5,this.drag.scale+-t.deltaY/1e3*o);const s=this.image.getBoundingClientRect(),r=s.height/2,l=s.width/2,d=s.y+r,w=s.x+l,m=this.drag.scale/n-1;this.drag.current.y-=Math.min(Math.max(this.mouse.y-d,-r),r)*m,this.drag.current.x-=Math.min(Math.max(this.mouse.x-w,-l),l)*m,t.deltaY>0&&(this.drag.current.y/=1.1,this.drag.current.x/=1.1),this.fit(.33),t.preventDefault()}fit(t){const n=this.image.getBoundingClientRect(),s=0-n.left,r=n.right-window.innerWidth+0;s>0&&r<0?this.drag.current.x+=(n.width>window.innerWidth?-r:s)*t:s<0&&r>0&&(this.drag.current.x+=(n.width>window.innerWidth?s:-r)*t);const l=0-n.top,d=n.bottom-window.innerHeight+0;l>0&&d<0?this.drag.current.y+=(n.height>window.innerHeight?-d:l)*t:l<0&&d>0&&(this.drag.current.y+=(n.height>window.innerHeight?l:-d)*t),this.updateTransform()}}const Xe=new To,bt=429;let Be=null;async function Ge(e){try{if(Be!=null)if(Date.now()>Be)Be=null;else return{status:bt,result:null};const t=new Headers({Accept:"text/vnd.reddit.partial+html, text/html;q=0.9","Content-Type":"application/x-www-form-urlencoded"}),o=new URL(`https://www.reddit.com${e}`),n=_.API_APP.get();n!=null&&n.length>0&&(o.search=new URLSearchParams({app:n}).toString());const s=await fetch(o,{credentials:"include",method:"get",headers:t});if(!s.ok){if(S(`${e} request failed with code ${s.status} : ${s.statusText}`),s.status==bt){const l=parseInt(s.headers.get("x-ratelimit-reset"));Be=Date.now()+l*1e3+500,_.API_WARNINGS.isEnabled()&&f(`API request hit a limit. Disable "API requests" features or set correct App name or wait ${l} seconds`,{seconds:15})}return{status:s.status,result:null}}const r=await s.json();return{status:s.status,result:r}}catch(t){return S(`${e} request failed with error: ${t}`),{status:"error",result:null}}}var Lo=p("./src/modules/bookmark.less"),Mo=p("./resources/bookmarkSaved.svg"),Do=p.n(Mo),Ro=p("./resources/bookmarkUnsaved.svg"),Po=p.n(Ro);B.addStyle(Lo.A);function xt(e,t=!1){if(_.SAVED_BOOKMARK_COMMENTS.isDisabled())return;const n=(e.querySelector("shreddit-overflow-menu")?.shadowRoot?.querySelector("faceplate-dropdown-menu")).querySelector(".save-comment-menu-button"),s=n.querySelector(".text-14");n.addEventListener("click",()=>{xt(e,!0)});let r=s.textContent=="Remove from saved";if(t&&(r=!0),r||t||_.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS.isEnabled()){const l=e.querySelector("shreddit-comment-action-row")?.shadowRoot?.querySelector("button[downvote]");B.registry(e.querySelector("shreddit-comment-action-row")?.shadowRoot);const d=l.cloneNode(!0);l.after(d);let w=d.querySelector("svg");w=Te(w,r),d.addEventListener("click",()=>{r=!r,w=Te(w,r)}),d.append(n),n.classList.add("pp_bookmark_hiddenButton")}}async function $e(e,t=!1,o=void 0){if(_.SAVED_BOOKMARK_POSTS.isDisabled())return;const n=await c(()=>e.querySelector("shreddit-post-overflow-menu")?.shadowRoot?.querySelector("faceplate-dropdown-menu")?.querySelector("faceplate-menu"),3e3);if(n==null)return;let s=!0,r=null;if(n.querySelectorAll("li").forEach(d=>{const w=d.querySelector(".text-14");w.textContent=="Save"&&(s=!1),(w.textContent=="Save"||w.textContent=="Remove from saved")&&(r=d)}),r==null){const d=e.shadowRoot?.querySelector("button[upvote]"),w=e.shadowRoot?.querySelector("button[bookmark]");w.className=d.className,w.classList.add("pp_bookmark_post");return}if(r.addEventListener("click",()=>{$e(e,!0,!0)}),(e.shadowRoot?.querySelector("button[upvote]")).addEventListener("click",()=>{$e(e,!0)}),o!=null&&(s=o),s||t||_.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS.isEnabled()){const d=e.shadowRoot?.querySelector("button[downvote]"),w=d.cloneNode(!0);w.classList.add("pp_bookmark_post"),w.removeAttribute("disabled"),w.removeAttribute("downvote"),w.setAttribute("bookmark",""),d.after(w);let m=w.querySelector("svg");m=Te(m,s),w.addEventListener("click",()=>{s=!s,m=Te(m,s)}),w.append(r),r.classList.add("pp_bookmark_hiddenButton")}}function Te(e,t){const o=P(t?Do():Po(),20,20);return o.setAttribute("width","16px"),o.setAttribute("height","16px"),e.replaceWith(o),o}var Ct=p("./src/modules/collapseAwards.less");B.addStyle(Ct.A);async function At(e,t){if(_.COLLAPSE_AWARDS.isDisabled())return;B.addStyle(Ct.A,"collapseAwards");const o=t.isComment?e.querySelector("award-button"):e.shadowRoot.querySelector("award-button");if(o!=null){if(_.COLLAPSE_AWARDS_COMPLETELY.isEnabled()){o.remove();return}if(o.getAttribute("count")=="0"){t.isComment||B.registry(e.shadowRoot);const n=t.isComment?e.querySelector("shreddit-comment-action-row")?.shadowRoot:e?.shadowRoot,s=await c(()=>n?.querySelector("button[upvote]"),I);if(s==null)return;o.classList.toggle("pp_awardButton_hidden",Le(s)),o.classList.toggle("pp_awardButton_collapsed",Le(s)),setTimeout(()=>{o.classList.add("pp_awardButton")},500),s.addEventListener("click",()=>{o.classList.toggle("pp_awardButton_hidden",Le(s)),setTimeout(()=>{o.classList.toggle("pp_awardButton_collapsed",Le(s))},10)})}}}function Le(e){return e.getAttribute("aria-pressed")!="true"}var ko=p("./src/modules/subs/flairBar.less");B.addStyle(ko.A);async function yt(e){if(_.FLAIR_BAR.isDisabled())return;let t=await c(()=>e?.querySelector("shreddit-title")?.parentElement,I);if(t==null)return;const o=e?.querySelector("community-highlight-carousel");o!=null&&(t=o);const n=t.parentElement?.querySelector(".pp_flairBar")?.parentElement;n?.remove();const s=Re(),r=await et.getWithLoader(s),l=ge.get(s);if(r.flairs==null||r.flairs.length==0)return;const d=document.createElement("div");t.before(d);const w=u(d,"div","pp_flairBar");o!=null&&w.classList.add("pp_flairBar_highlights");const m=u(w,"ul",["p-0","m-0","list-none","gap-xs","flex","flex-row","pp_flairBar_list"]);let T=0;for(const R of r.flairs){if(l.hidden!=null&&l.hidden.includes(R.text))continue;const j=u(m,"li","max-w-full");ot(j,s,R),T++}if(T==0){d.remove();return}const h=document.createElement("div");h.classList.add("pp_flairBar_bordersContainer"),d.prepend(h);const C=u(h,"div","pp_flairBar_preBorder"),x=u(C,"div",["pp_flairBar_border","pp_flairBar_border_left"]);x.textContent=" ";const A=u(h,"div","pp_flairBar_preBorder"),y=u(A,"div",["pp_flairBar_border","pp_flairBar_border_right"]);y.textContent=" ";const M=document.createElement("hr");M.classList.add("border-0","border-b-sm","border-solid","border-b-neutral-border-weak"),d.prepend(M);const L=document.createElement("div");L.classList.add("my-xs","mx-2xs0"),d.prepend(L),m.style.left="25px";const D=m.getBoundingClientRect(),U=w.getBoundingClientRect();w.addEventListener("mousemove",R=>{Io(R,m,w)}),D.width>U.width*1.72&&m.classList.add("pp_flairBar_listSmoothed")}function Io(e,t,o){const n=t.getBoundingClientRect(),s=o.getBoundingClientRect();if(n.width<s.width){t.style.left="25px";return}let r=(e.clientX-(s.x+25))/(s.right-25-(s.x+25));r=Math.max(0,Math.min(r,1)),t.style.left=`${Math.round(25-(n.width-s.width+50)*r)}px`}var Uo=p("./src/modules/subs/subs.less"),Wo=p("./resources/settingsArrow.svg"),ze=p.n(Wo),jo=p("./src/utils/UI/options.less");B.addStyle(jo.A);function Ze(e,t,o,n){let s=t;const r=u(e,"div","pp_ui_options"),l=u(r,"div",["pp_ui_options_arrow","pp_ui_options_inversed","button","button-plain","button-medium","px-[var(--rem8)]"]),d=P(ze(),20,20);l.append(d);const w=u(r,"div","pp_ui_options_container"),m=u(w,"span",["text-secondary","font-normal"]);let T=o[0],h=T.length;for(const D of o)D.length>h&&(T=D,h=D.length);m.textContent=T;const C=m.getBoundingClientRect();m.style.minWidth=`${C.width}px`,m.textContent=o[t];const x=u(w,"span",["pp_ui_options_dots","text-secondary","font-normal"]);x.textContent=L();const A=u(r,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),y=P(ze(),20,20);A.append(y),l.addEventListener("click",D=>{s--,s<0&&(s=o.length-1),M()}),A.addEventListener("click",D=>{s++,s>=o.length&&(s=0),M()});function M(){m.textContent=o[s],x.textContent=L(),n(s)}function L(){let D=0,U="";for(;D<o.length;)U+=D==s?"\u2022":"\u25E6",D++;return U}return r}var Fo=p("./src/utils/UI/toggle.less");B.addStyle(Fo.A);function Me(e,t,o){const n=u(e,"div","pp_ui_toggle"),s=u(n,"button","pp_ui_toggle_button");s.classList.toggle("pp_ui_toggle_active",t),u(s,"div","pp_ui_toggle_knob");let r=t;return s.addEventListener("click",()=>{r=!r,s.classList.toggle("pp_ui_toggle_active",r),o(r)}),n}var No=p("./src/utils/window.less"),Ko=p("./resources/windowCloseButton.svg"),Ho=p.n(Ko);B.addStyle(No.A);let $=[];function Vo(){for(;$.length>0;)$[$.length-1].close()}class De{constructor(t,o,n=null){this.tittle=t,this.render=o,this.onClose=n,this.container=null,this.content=null,this.closeButton=null}build(){this.container=document.createElement("div"),this.container.classList.add("pp_window_container");let t=!1;this.container.addEventListener("mousedown",l=>{t=l.target==this.container}),this.container.addEventListener("click",l=>{t&&l.target==this.container&&this.close()});const o=u(this.container,"div","pp_window"),n=u(o,"div","pp_window_tittleContainer");let s=u(n,"div",["pp_window_tittle","flex","flex-row"]);s=u(s,"span",["text-24","font-semibold"]),s.textContent=this.tittle,this.closeButton=u(n,"div",["pp_window_closeButton","flex","items-center"]),this.closeButton=u(this.closeButton,"button",["button","icon","inline-flex","items-center","justify-center","button-small","button-secondary","px-[var(--rem6)]"]),this.closeButton.setAttribute("tittle",`Close ${this.tittle}`),this.closeButton.addEventListener("click",l=>{this.close()}),this.closeButton=u(this.closeButton,"span",["flex","items-center","justify-center"]),this.closeButton=u(this.closeButton,"span",["flex"]);const r=P(Ho(),16,16,{strokeColor:Z});this.closeButton.append(r),u(o,"hr","border-b-neutral-border-weak"),this.content=u(o,"div","pp_window_content"),u(o,"div","pp_window_footer").textContent=" "}open(t=null){this.container==null&&this.build();for(const o of $)o.container.remove();$.push(this),document.body.appendChild(this.container),document.body.style.overflow="hidden",this.render(this,t)}close(){for(this.container.remove(),$.splice($.findIndex(t=>t==this),1),$.length<=0&&(document.body.style.overflow="visible");this.content.firstChild;)this.content.removeChild(this.content.lastChild);if($.length>0){const t=$[$.length-1];document.body.appendChild(t.container)}this.onClose!=null&&this.onClose()}}var qo=p("./src/modules/subs/flairWindow.less");B.addStyle(qo.A);const Xo=new De("Flairs settings",$o,zo);class Rr{}const Go=["Show","Blur","Hide"];function $o(e,t){const o=u(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),n=u(o,"div","pp_window_elementsContainer"),s=et.get(t.sub);for(const r of s.flairs){const l=u(n,"div",["pp_window_element","pp_flairWindow_flair"]),d=u(l,"div","pp_flairWindow_flairContainer");ot(d,t.sub,r);const w=u(l,"span");w.textContent="Flairs bar:",Me(l,!tt(t.sub,r.text,Ot),x=>{ve(t.sub,r.text,Ot,!x)});const m=u(l,"span");m.textContent="Feed:";const T=tt(t.sub,r.text,Ye),C=tt(t.sub,r.text,Qe)?2:T?1:0;Ze(l,C,Go,x=>{ve(t.sub,r.text,Ye,!1),ve(t.sub,r.text,Qe,!1),x==1&&ve(t.sub,r.text,Ye,!0),x==2&&ve(t.sub,r.text,Qe,!0)})}}function zo(){const e=document.body.querySelector("#main-content");yt(e)}B.addStyle(Uo.A);const Ot="hidden",Ye="blured",Qe="banned";class Pr{}class kr{}class Ir{}const Je=new Q("SUBS_SETTINGS"),ge=new Q("FLAIRS"),et=new Q("SUBS",{isCleanupable:!0,validator:Zo,loader:Yo});function Zo(e){return e.flairs==null}async function Yo(e){let t={flairs:[]};const{status:o,result:n}=await Ge(`/r/${e}/api/link_flair_v2.json`);if(n!=null&&n.message==null){for(const s of n){const r={text:s.text,color:s.text_color,background:s.background_color,richtext:s.richtext};t.flairs.push(r)}return t}return t}function Re(){const e=window.location.href.split("reddit.com/r/");return e.length>1?e[1].split("/")[0]:null}async function Qo(e){await c(()=>e.querySelector("shreddit-feed-error-banner"),I)!=null&&(Jo(e),yt(e),en(e))}async function Jo(e){const t=await c(()=>e.parentElement.parentElement.querySelector(".masthead"));v(t)||(t.querySelector("section").classList.add("pp_mastheadSection"),document.body.addEventListener("click",tn))}async function en(e){if(_.COLLAPSE_HIGHLIGHTS.isDisabled())return;const t=await c(()=>e?.querySelector("community-highlight-carousel")?.shadowRoot?.querySelector("button"),I*5);t?.click()}function tn(e){const t=e.target;if(t.matches("shreddit-subreddit-header-buttons")!=!0||v(t))return;const o=t.shadowRoot.querySelector("shreddit-subreddit-overflow-control").shadowRoot.querySelector("faceplate-menu"),n=o.querySelector("li"),s=n.cloneNode(!0);s.querySelector(".text-14").textContent="Flairs settings",o.prepend(s);const r=Re();s.addEventListener("click",()=>{Xo.open({sub:r})});const l=document.createElement("a");l.href="https://www.reddit.com/"+t.getAttribute("prefixed-name")+"/about/",l.classList.add("no-underline"),o.prepend(l);const d=n.cloneNode(!0);d.querySelector(".text-14").textContent="About",l.prepend(d)}class Ur{}class Wr{}function tt(e,t,o){return ge.get(e)[o]?.includes(t)??!1}function ve(e,t,o,n){const s=ge.get(e);let r=s[o];(r==null||r==null)&&(r=[]),n?r.push(t):r=r.filter(l=>l!=t),s[o]=r,ge.set(e,s)}function ot(e,t,o,n=!1){const s=u(e,"a","no-decoration");s.href="/r/"+t+"/?f=flair_name%3A%22"+o.text+"%22";const r=u(s,"span",["bg-tone-4","inline-block","truncate","max-w-full","text-12","font-normal","box-border","px-[6px]","rounded-[20px]","leading-4","max-w-full","py-xs","!px-sm","leading-4","h-xl","inline-flex"]);n&&(r.className="bg-tone-4 inline-block truncate max-w-full text-12 font-normal align-text-bottom box-border px-[6px] rounded-[20px] leading-4  relative top-[-0.25rem] xs:top-[-2px] my-2xs xs:mb-sm py-0 "),r.classList.add(o.color=="light"?"text-global-white":"text-global-black"),r.style.backgroundColor=o.background;for(const l of o.richtext){if(l.e=="text"){const d=document.createTextNode(l.t);r.appendChild(d)}if(l.e=="emoji"){const d=document.createElement("faceplate-img");d.classList.add("flair-image"),d.setAttribute("loading","lazy"),d.setAttribute("width","16"),d.setAttribute("height","16"),d.setAttribute("src",l.u),d.setAttribute("alt",l.a),r.appendChild(d)}}if(o.richtext.length==0){const l=document.createTextNode(o.text);r.appendChild(l)}}class jr{}const Bt=new Q("USERS",{isCleanupable:!0,validator:on,loader:nn});function on(e){return e.accountId==null}async function nn(e){let t={};const{status:o,result:n}=await Ge(`/user/${e}/about.json`);return o!=404&&n==null?t:o==404||n.data?.is_suspended==!0||n.data?.is_blocked==!0?(t.banned=!0,t):(t.rating=(n.data?.link_karma??0)+(n.data?.comment_karma??0)/2,n.data?.subreddit?.title&&(t.nick=n.data.subreddit.title),t.created=n.data?.created??0,t.accountId=n.kind+"_"+n.data?.id,t)}var sn=p("./resources/comments/newUser.svg"),rn=p.n(sn),an=p("./resources/comments/bannedUser.svg"),ln=p.n(an);const dn=Ne*64;let Pe=!1;async function nt(e,t,o,n,s){if(_.USER_INFO.isDisabled()&&_.SHOW_NAMES.isDisabled())return;await c(()=>Pe?null:!0),Pe=!0;const r=await Bt.getWithLoader(e,l=>{l?setTimeout(()=>{Pe=!1},16+Math.random()*32):Pe=!1});if(_.SHOW_NAMES.isEnabled()&&r.nick!=null&&r.nick){const l=parseInt(_.USERNAME_MAX_SIMBOLS.get());t.textContent=l<=0||r.nick.length<l?r.nick:r.nick.slice(0,l-2)+"..."}if(_.USER_INFO.isEnabled()){const l=document.createElement("div");if(l.classList.add("text-neutral-content-weak","text-12"),r.rating!=null){l.textContent=r.rating<1e4?`${Math.round(r.rating/100)/10}K`:`${Math.round(r.rating/1e3)}K`,n.after(l);const d=document.createElement("span");s.isComment?d.classList.add("inline-block","my-0","mx-2xs","text-12","text-neutral-content-weak"):d.classList.add("inline-block","my-0","created-separator","text-neutral-content-weak"),d.textContent="\u2022",l.after(d)}if(r.created!=null&&r.created>Date.now()/1e3-dn){const d=P(rn(),20,20);d.setAttribute("viewBox","-2 -2 20 20"),o.before(d)}if(r.banned!=null&&r.banned){const d=P(ln(),20,20);d.setAttribute("viewBox","-2 -2 20 20"),o.before(d)}}}var cn=p("./src/modules/posts/posts.less"),un=p("./src/modules/posts/postsBackplates.less"),_n=p("./resources/postUnwrapButton.svg"),pn=p.n(_n),fn=p("./src/modules/filters/filters.less"),mn=p("./resources/hiddenIco.svg"),st=p.n(mn),hn=p("./src/modules/filters/hiddenContent.less");const gn=new De("Hidden content",vn,En);function vn(e,t){const o=u(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),n=u(o,"div","pp_window_elementsContainer");n.style.margin="20px 100px";for(const s of ne)n.prepend(s)}function En(){for(const e of ne)e.remove()}B.addStyle(hn.A);const ne=new Array;let se=0,re=0,rt=null,K=null,it=null,at=null,lt=null;function wn(e){ne.push(e),se++,ne.length>parseInt(_.FILTERED_CONTENT_MAX_COUNT.get())&&ne.splice(0,1),Tt()}function Sn(){K!=null&&(K.remove(),ne.length=0,se=0,re=0)}async function bn(){at=await c(()=>document.body.querySelector(".main-container")),lt=await c(()=>document.body.querySelector("#right-sidebar-contents"));const e=at.parentElement;if(K==null){K=Ve("div",["pp_hiddenContent_button","text-neutral-content-weak"]);const t=He(K,st(),16,16,{strokeColor:Y,fillColor:Z});it=u(K,"span"),window.addEventListener("resize",o=>{Lt()}),K.addEventListener("click",o=>{gn.open()})}else K.classList.toggle("pp_hiddenContent_button_visible",!1);e.parentElement.append(K),setTimeout(()=>{K.classList.add("pp_hiddenContent_button_visible")},250)}function xn(){const t=se-re;return t>0?250/t:250}async function Tt(){(K==null||K.parentElement==null)&&await bn(),se==1?(it.textContent="1 post",re=1):re<se&&rt==null&&(rt=setTimeout(()=>{re++,it.textContent=`${re} posts`,rt=null,Tt()},xn())),Lt()}function Lt(){const e=_.WIDE_MODE.isEnabled(),t=K.getBoundingClientRect().width+10,o=e?at.getBoundingClientRect().right:lt.getBoundingClientRect().right,n=e?lt.getBoundingClientRect().left:window.innerWidth-16,s=se.toString().length*3;K.style.left=`${(o+n)/2-(50+s)}px`,K.classList.toggle("pp_hiddenContent_button_visible",n-o>t)}B.addStyle(fn.A);var H;(function(e){e[e.Hide=0]="Hide",e[e.Blur=1]="Blur",e[e.Hightlight=2]="Hightlight"})(H||(H={}));const Cn=Object.values(H).slice(0,Object.values(H).length/2);class An{}class Fr{}class Mt{constructor(){this.hide=!1,this.blur=null}}let ke=null,dt=null;function Dt(e){let t=z.get(q.CONTENT_FILTERS);t instanceof Array||(t=[]);const o=[];for(const n of t)e(n)==!0&&o.push({regExp:new RegExp(n.expression,n.action==H.Hightlight?"gi":"i"),data:n});return o}async function yn(e){const t=!window.location.href.includes("/comments/");ke==null&&(ke=Dt(s=>s.posts==!0));const o=new Mt;if(o.isPost=!0,ct(e.querySelector('a[slot="title"]'),ke,o),e.querySelector('a[slot="text-body"]')?.querySelectorAll("p")?.forEach(s=>{ct(s,ke,o)}),t&&o.hide){n();return}if(t){const s=await c(()=>e.hasAttribute("pp_flair")?e:null),r=e.getAttribute("pp_flair"),l=Pt(e),d=ge.get(l);if(r.length>0&&((d.banned?.includes(r)??!1)&&(o.hide=!0),d.blured?.includes(r)??!1)){const m=et.get(l).flairs.find(T=>T.text==r);o.blur==null&&(o.blur={text:r,color:m.background})}}t&&o.hide?n():t&&o.blur!=null&&Rt(e,o);async function n(){const s=await c(()=>e.parentElement.nextElementSibling,I);e.remove(),s?.remove(),_.SHOW_FILTERED_CONTENT.isEnabled()&&wn(e)}}function ct(e,t,o){const n=e?.textContent;if(!(n==null||n.length==0))for(const s of t){if(s.data.action==H.Blur&&o.blur!=null||s.data.action==H.Hide&&o.hide)continue;const r=s.regExp.exec(n);if(r!=null&&r.length>0){switch(s.data.action){case H.Hide:o.hide=!0;break;case H.Blur:o.blur={text:Bn(r),color:s.data.color};break}Tn(r,s.data,e)}}}function On(e,t){dt==null&&(dt=Dt(s=>s.comments==!0));const o=new Mt;t.querySelectorAll("p").forEach(s=>{ct(s,dt,o)}),o.hide?n():o.blur!=null&&Rt(t,o);function n(){e.classList.add("pp_hidden_comment");const s=u(e,"div"),r=u(s,"div",["pp_hidden_button","button","button-plain-weak","button-small"]),l=P(st(),16,16,{strokeColor:Y,fillColor:Z});r.append(l);const d=u(r,"span");d.textContent="Show a hidden comment",r.addEventListener("click",()=>{e.classList.toggle("pp_hidden_comment",!1),s.remove()},{once:!0}),e.prepend(s)}}function Bn(e){e.length>1&&e.sort((o,n)=>o.length-n.length);let t=e[0].trim();return t.length>50?`${t.slice(0,48).trimEnd()}...`:t}function Rt(e,t){e.classList.add("pp_blured_content_animator"),e.classList.add("pp_blured_content");const o=Et(e,"div","pp_blured_content_area"),n=Et(e.parentElement,"div","pp_blured_button_container"),s=u(n,"div","pp_blured_button");s.style.backgroundColor=t.blur.color+"55",t.isPost&&(s.style.top="20px");const r=u(s,"div","pp_blured_button_content"),l=He(r,st(),16,16,{strokeColor:Y,fillColor:Z}),d=u(r,"span");d.textContent=t.blur.text,o.addEventListener("click",()=>{e.classList.toggle("pp_blured_content",!1),n.remove(),o.remove()},{once:!0})}function Tn(e,t,o){let n=o.innerHTML;const s=new Set(e);for(const r of s){const l=n.split(r);if(l.length>1){n=l[0];let d=1;for(;d<l.length;)n+=`<span style="border-radius: 6px; background-color: ${t.color}88;">${r}</span>`,n+=l[d],d++}}o.innerHTML=n}class Nr{}const Ln=new Q("POSTS",{isCleanupable:!0,validator:Mn,loader:Dn});function Mn(e){return e.flair==null}async function Dn(e){let t={flair:null};const o=e.split(":"),{status:n,result:s}=await Ge(`/r/${o[0]}/comments/${o[1]}.json`);if(s!=null&&s.message==null){for(const r of s)for(const l of r.data.children)if(l.kind=="t3")return t.flair={text:l.data.link_flair_text,color:l.data.link_flair_text_color,background:l.data.link_flair_background_color,richtext:l.data.link_flair_richtext},t}return t}B.addStyle(cn.A),_.BACKPLATES.isEnabled()&&B.addStyle(un.A);async function Ee(e){if(v(e))return;Rn(e),yn(e),Pn(e),In(e),Un(e),kn(e),$e(e),await c(()=>e.shadowRoot?.querySelector("award-button"),I)!=null&&At(e,je),_.SELECTABLE_POSTS.isEnabled()&&(e.querySelector('a[slot="full-post-link"]')?.remove(),(await c(()=>e.querySelector('a[slot="title"]'),I))?.classList?.add("pp_post_tittle"))}function Pt(e){return e.getAttribute("subreddit-prefixed-name").replace("r/","")}async function Rn(e){const t=Pt(e),o=await c(()=>e.querySelector("shreddit-post-flair"),I),n=await c(()=>o?.querySelector("a"),lo);let s="";if(n==null){if(_.FLAIR_SHOW_ALWAYS.isEnabled()){const r=e.getAttribute("permalink")?.split("/");if(r==null||r.length<5){S(`Unable to parse post permalink: ${e.getAttribute("permalink")}`);return}const l=r[2]+":"+r[4],d=await Ln.getWithLoader(l);d.flair!=null&&d.flair.text!=null&&ot(o,t,d.flair,!0),s=d.flair.text}}else{const r=n.href?.split("%22");s=r!=null&&r.length>1?decodeURIComponent(r[1]):""}e.setAttribute("pp_flair",s)}async function Pn(e){const t=await c(()=>e.shadowRoot);B.registry(e.shadowRoot)}async function kn(e){const t=await c(()=>e.shadowRoot?.querySelector("shreddit-post-share-button")?.shadowRoot?.querySelector("button"));B.registry(t.parentNode.parentNode),t.classList.add("pp_post_shareButton")}async function In(e){const t=e.getAttribute("author");if(e.getAttribute("view-context")=="AggregateFeed"){if(_.SHOW_POST_AUTHOR.isDisabled())return;const o=await c(()=>e.querySelector('span[slot="credit-bar"]')?.querySelector(".created-separator"),I),n=document.createElement("a");n.classList.add("flex","items-center","text-neutral-content","visited:text-neutral-content-weak","a","cursor-pointer","no-visited","no-underline","hover:no-underline"),n.setAttribute("href",`/user/${t}/`),o.before(n);const s=u(n,"div",["text-neutral-content-weak","text-12"]);s.textContent=t;const r=document.createElement("span");r.classList.add("inline-block","my-0","created-separator","text-neutral-content-weak"),r.textContent="\u2022",n.before(r),nt(t,s,o,o,je)}else{const o=await c(()=>e.querySelector('[slot="credit-bar"]'),I),n=await c(()=>o.querySelector('span[slot="authorName"]')?.querySelector("a")?.querySelector(".whitespace-nowrap"),I),s=o.querySelector(".created-separator");if(s==null)return;nt(t,n,s,s,je)}}async function Un(e){if(window.location.href.includes("/comments/")){kt(e,!1);return}const t=await c(()=>e.querySelector(".feed-card-text-preview"),I);if(t==null)return;_.SELECTABLE_POSTS.isEnabled()&&t.parentElement.parentElement.removeAttribute("href"),t.classList.remove("feed-card-text-preview"),e.querySelector('a[slot="text-body"]').classList.toggle("pointer-events-none",!1);for(const n of t.childNodes)if(n instanceof Element&&n.matches("object")){const s=n.querySelector("a")?.href;if(s!=null){const r=document.createElement("faceplate-img");r.setAttribute("src",s),r.setAttribute("loading","eager"),r.setAttribute("sizes","(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw"),r.className="block w-fit my-0 mx-auto max-w-[100%]",n.replaceWith(r)}}kt(e,!0),Wn(e,t)}async function kt(e,t){_.IMAGE_VIEWER.isDisabled()||(t?await c(()=>e.querySelector("faceplate-img"),I)!=null&&e.querySelectorAll("faceplate-img").forEach(n=>{const s=n.getAttribute("src");let r=n.shadowRoot?.querySelector("img");r?.classList.add("pp_imageViewable"),n.addEventListener("click",()=>{Xe.open(s)})}):e.querySelectorAll('figure[class="rte-media"]').forEach(o=>{const n=o.querySelector("a"),s=n.getAttribute("href");n.removeAttribute("href");let r=o.querySelector("img");r==null&&(r=o.querySelector("shreddit-player-2")),r.classList.add("pp_imageViewable"),n.addEventListener("click",()=>{Xe.open(s)})}))}async function Wn(e,t){const o=await c(()=>e.shadowRoot,I),n=t.getBoundingClientRect().height;t.classList.add("pp_post_noWrap");const s=t.getBoundingClientRect().height;if(t.classList.remove("pp_post_noWrap"),s>n+5){const r=u(e,"div","pp_post_unwrapContainer");e.shadowRoot.append(r);const l=u(r,"div","pp_post_unwrapButton"),d=P(pn(),25,25);l.append(d),l.addEventListener("click",()=>{t.classList.add("pp_post_noWrap"),r.remove()},{once:!0})}}var jn=p("./src/modules/feed/feedButtons.less"),Fn=p("./resources/feedButtons/feedButtonBest_empty.svg"),Nn=p.n(Fn),Kn=p("./resources/feedButtons/feedButtonBest.svg"),Ie=p.n(Kn),Hn=p("./resources/feedButtons/feedButtonHot.svg"),Vn=p.n(Hn),qn=p("./resources/feedButtons/feedButtonNew.svg"),It=p.n(qn),Xn=p("./resources/feedButtons/feedButtonRising.svg"),Gn=p.n(Xn),$n=p("./resources/feedButtons/feedButtonTop.svg"),Ut=p.n($n);function zn(e){switch(e){case W.Home:return _.DEFAULT_FEED_HOME;case W.Popular:return _.DEFAULT_FEED_POPULAR;case W.All:return _.DEFAULT_FEED_ALL;default:return _.DEFAULT_FEED_SUB}}function Zn(){return window.location.href=="https://www.reddit.com/"?!0:window.location.href.includes("/?f=flair_name")?!1:window.location.href.includes("?feed=home")?window.location.href.includes("reddit.com/?feed=home"):window.location.href.split("/r/")[1].split("/").length<3}function Yn(e,t){if(e==W.Sub){const n=Je.get(Re());if(n.defaultFeed!=null)return n.defaultFeed==t}const o=zn(e);return!o.isDefault()&&o.get()==t}B.addStyle(jn.A);const Qn={Best:Ie(),Hot:Vn(),New:It(),Top:Ut(),Rising:Gn()},Jn=["inline-flex","flex-col","text-neutral-content-weak","font-semibold","rounded-full","hover:no-underline","hover:bg-secondary-background-hover","hover:text-secondary-content","active:bg-secondary-background","pl-[var(--rem16)]","pr-[var(--rem16)]"];async function es(e,t){if(_.FEED_BUTTONS.isDisabled()||v(e))return;const o=t?.querySelector('div[slot="selected-item"]')?.textContent;t?.remove();const n=_o();let s=null,r=null;if(n!=W.Sub){const w=await c(()=>e.querySelector("shreddit-layout-event-setter")?.parentElement);w.classList.add("pp_feedButtonsContainer"),s=document.createElement("div"),s.classList.add("flex","mx-md","shrink-0","pp_feedContainer"),w.prepend(s),n==W.Home?r=m=>`/${m.toLowerCase()}/?feed=home`:r=m=>`/r/${n==W.Popular?"popular":"all"}/${m.toLowerCase()}/`}else{const w=await c(()=>e.querySelector('a[slot="page-3"]')?.parentElement?.parentElement);s=document.createElement("div"),s.classList.add("flex","mx-md","shrink-0","pp_feedContainer"),w.before(s),w.remove();const m=Re();r=D=>`/r/${m}/${D.toLowerCase()}/`;const T=s.parentElement;T.classList.toggle("justify-between",!1),T.classList.toggle("flex-wrap",!1),T.classList.toggle("pp_feedPanel",!0);const h=document.createElement("div");h.classList.add("pp_feedPanel_space"),s.after(h);let C=Je.get(m);const x=C.defaultFeed==null?o==_.DEFAULT_FEED_SUB.get():o==C.defaultFeed,A=document.createElement("div");A.classList.add("pp_defaultFeed_mark");let y=P(x?Ie():Nn(),16,16);A.append(y),h.after(A);const M=u(A,"div","pp_defaultFeed_mark_hint"),L=u(M,"span");L.textContent=x?`${o} is default feed for r/${m}`:`Set ${o} as default feed for r/${m}`,x||A.addEventListener("click",()=>{const D=P(Ie(),16,16);y.replaceWith(D),L.textContent=`${o} is default feed for r/${m}`,C.defaultFeed=o,Je.set(m,C)},{once:!0})}const l=fe(n),d=Zn();for(const w of l){const m=u(s,"a",Jn);m.href=r(w);const T=w==o;m.classList.toggle("bg-secondary-background-selected",T),m.classList.toggle("!text-neutral-content-strong",T);const h=u(m,"span",["inline-flex","flex-row","items-center","gap-xs","py-[var(--rem10)]","leading-5","font-14","pp_feedButton"]);let C=Qn[w];if(C!=null){let A=P(C,16,16);h.append(A)}const x=u(h,"span");x.textContent=w,d&&Yn(n,w)&&m.click()}}let Ue=null;async function ts(e){const t=await c(()=>e.querySelector("#subgrid-container"));t.querySelectorAll("shreddit-post").forEach(r=>{Ee(r)});const o=new MutationObserver(r=>{for(const l of r)for(const d of l.addedNodes)d instanceof HTMLElement&&d.matches("shreddit-post")&&Ee(d)});o.observe(t,{childList:!0,subtree:!0}),setTimeout(()=>{o.disconnect()},I),Wt(t),Qo(t);const n=await c(()=>t.querySelector("shreddit-sort-dropdown"),I);(n==null||n.getAttribute("trigger-id")=="comment-sort-button")&&!window.location.href.includes("/about/")||es(t,n)}function Wt(e){Ue?.disconnect(),Ue=new MutationObserver(t=>{for(const o of t)for(const n of o.addedNodes)n instanceof HTMLElement&&(n.matches("faceplate-batch")&&n.querySelectorAll("shreddit-post").forEach(s=>{Ee(s)}),n.matches("article")&&Ee(n.querySelector("shreddit-post")))}),Ue.observe(e,{childList:!0,subtree:!0})}var os=p("./src/modules/comments/hideShare.less"),ns=p("./src/modules/comments/comments.less");class jt{getInput(t,o){}run(t,o){let n=Bt.get(o);const s={csrf_token:g("csrf_token"),operation:this.key,variables:{input:this.getInput(t,n.accountId)}};fetch("https://www.reddit.com/svc/shreddit/graphql",{method:"post",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify(s)}).then(r=>r.json()).then(r=>{r!=null&&r.errors?.message&&f(r.errors.message)})}}class ss extends jt{constructor(){super(...arguments),this.key="UpdateProfileFollowState",this.enable="FOLLOWED",this.disable="NONE"}getInput(t,o){return{accountId:o,state:t?this.enable:this.disable}}}class rs extends jt{constructor(){super(...arguments),this.key="UpdateRedditorBlockState",this.enable="BLOCKED",this.disable="NONE"}getInput(t,o){return{redditorId:o,blockState:t?this.enable:this.disable}}}const is=new ss,as=new rs;var ls=p("./resources/comments/userTags/followedIcon.svg"),ds=p.n(ls),cs=p("./resources/comments/userTags/likedIcon.svg"),us=p.n(cs),_s=p("./resources/comments/userTags/warningIcon.svg"),ps=p.n(_s),fs=p("./resources/comments/userTags/blockedIcon.svg"),ms=p.n(fs),hs=p("./resources/comments/userTags/followedButton.svg"),gs=p.n(hs),vs=p("./resources/comments/userTags/likedButton.svg"),Es=p.n(vs),ws=p("./resources/comments/userTags/warningButton.svg"),Ss=p.n(ws),bs=p("./resources/comments/userTags/blockedButton.svg"),xs=p.n(bs),Cs=p("./src/modules/comments/userTags.less");class F{}F.FOLLOWED="Followed",F.LIKED="Liked",F.WARNING="Warning",F.BLOCKED="Blocked";class Kr{}const ie=new Map([[F.FOLLOWED,{priority:100,addHint:"Follow",removeHint:"Unfollow",color:"#0b7ed3",icon:ds(),button:gs()}],[F.LIKED,{priority:2,addHint:"Tag as liked",removeHint:"Remove liked tag",color:"#C95A54",icon:us(),button:Es()}],[F.WARNING,{priority:1,addHint:"Tag as warned",removeHint:"Remove warned tag",color:"#D4A343",icon:ps(),button:Ss()}],[F.BLOCKED,{priority:0,addHint:"Block",removeHint:"Unblock",color:"#663988",icon:ms(),button:xs()}]]);class Hr{}const ae=new Q("TAGS");async function Ft(e){if(_.USER_TAGS.isDisabled())return;B.addStyle(Cs.A,"userTags");const t=e.getAttribute("author");if(t==null)return;const o=ae.get(t),n=await c(()=>e.querySelector('div[pp-anchor="tags"]'),I);if(n==null){S("Unable to render userTags");return}if(n.parentNode.querySelectorAll('svg[userTag="true"]').forEach(r=>{r.remove()}),o.tags!=null)for(const r of o.tags)s(r);function s(r){const l=ie.get(r),d=P(l.icon,20,20);d.setAttribute("userTag","true"),d.setAttribute("viewBox","-4 -4 20 20"),d.style.color=l.color,n.after(d)}}class Vr{}const As=Ne+42,Nt="#adadad";function ys(e,t){if(_.USER_TAGS.isDisabled())return;const o=document.createElement("div");o.classList.add("pp_tagHint_offset"),e.prepend(o);const n=document.createElement("div");n.classList.add("pp_tagHintContainer"),o.prepend(n);const s=u(n,"div","pp_tagHint");s.style.display="none";const r=document.createElement("div");r.classList.add("pp_tagsPanel"),o.after(r),ie.forEach((d,w)=>{l(d,w)});function l(d,w){const m=u(r,"span","pp_tagButton");m.setAttribute("userTag",w);const T=P(d.button,20,20);m.appendChild(T);const h={userTag:w,userId:t,button:m,hint:s};m.addEventListener("click",()=>{Os(h)}),m.addEventListener("mouseenter",()=>{Bs(h)}),m.addEventListener("mouseleave",()=>{Ts(h)})}Kt(r,t)}function Kt(e,t){const o=ae.get(t),n=o?.tags??[];e.querySelectorAll(".pp_tagButton").forEach(s=>{const r=s.getAttribute("userTag"),l=ie.get(r);s.removeAttribute("has-cooldown"),s.removeAttribute("has-blocked"),n.includes(r)?(s.classList.toggle("pp_tagButtonActive",!0),s.style.backgroundColor=l.color,s.style.color="white"):(s.classList.toggle("pp_tagButtonActive",!1),s.style.color=l.color,s.style.removeProperty("background-color"),r==F.BLOCKED&&o.blockCooldown!=null&&Date.now()/1e3<o.blockCooldown&&(s.setAttribute("has-cooldown",""),s.style.color=Nt),r==F.FOLLOWED&&n.includes(F.BLOCKED)&&(s.setAttribute("has-blocked",""),s.style.color=Nt))})}function Os(e){if(e.button.getAttribute("has-cooldown")!=null||e.button.getAttribute("has-blocked")!=null){f("Unable to do this");return}let t=ae.get(e.userId);t.tags==null&&(t.tags=[]);let o=!1;t.tags.includes(e.userTag)?t.tags=t.tags.filter(n=>n!=e.userTag):(t.tags.push(e.userTag),o=!0,e.userTag==F.BLOCKED&&(t.tags=t.tags.filter(n=>n!=F.FOLLOWED))),t.tags.length>1&&t.tags.sort((n,s)=>ie.get(n).priority-ie.get(s).priority),ae.set(e.userId,t),document.body.querySelectorAll(`shreddit-comment[author="${e.userId}"]`).forEach(n=>{Ft(n),o&&e.userTag==F.BLOCKED&&n.setAttribute("collapsed","")}),e.userTag==F.FOLLOWED&&is.run(o,e.userId),e.userTag==F.BLOCKED&&(o||(t.blockCooldown=Date.now()/1e3+As,ae.set(e.userId,t)),as.run(o,e.userId)),Kt(e.button.parentElement,e.userId)}function Bs(e){e.hint.style.display=null,e.hint.dataset.target=e.userTag;const t=ae.get(e.userId),o=ie.get(e.userTag),n=(t?.tags??[]).includes(e.userTag);if(e.hint.innerText=n?o.removeHint:o.addHint,e.button.getAttribute("has-cooldown")!=null){const s=Math.round((t.blockCooldown-Date.now()/1e3)/Fe);e.hint.innerText=`Unable to block for ${s}h after unblocking`}e.button.getAttribute("has-blocked")!=null&&(e.hint.innerText="Unable to follow on blocked user")}function Ts(e){e.hint.dataset?.target==e.userTag&&(e.hint.style.display="none")}var Ls=p("./resources/comments/shareButton.svg"),Ms=p.n(Ls);function Ds(e){document.body.click();let t=e.querySelector("shreddit-overflow-menu").shadowRoot;B.registry(t);const o=t.querySelector("faceplate-menu"),n=o.querySelector('faceplate-tracker[noun="report"]');if(_.HIDE_SHARE.isEnabled()){let r=n.cloneNode(!0);r.querySelector("span .text-14").textContent="Copy link",n.before(r);const l=r.querySelector("svg"),d=P(Ms(),20,20);l.replaceWith(d);const w=e.getAttribute("permalink");r.addEventListener("click",()=>{navigator.clipboard.writeText(`https://www.reddit.com${w}`),f("Link copied")})}t.querySelector("button").addEventListener("click",()=>{document.body.click()}),ys(o,e.getAttribute("author"))}var Rs=p("./src/modules/comments/sortButtons.less"),Ps=p("./resources/comments/sortButtons/controversial.svg"),ks=p.n(Ps),Is=p("./resources/comments/sortButtons/old.svg"),Us=p.n(Is),Ws=p("./resources/comments/sortButtons/qa.svg"),js=p.n(Ws);class V{}V.BEST="Best",V.TOP="Top",V.NEW="New",V.CONTROVERSIAL="Controversial",V.OLD="Old",V.QA="QA";class qr{}const we="sort=";function le(e,t){return t==="confidence"&&!e.includes("?")?!0:e.includes(`${we}${t}`)}const Se=new Map([[V.BEST,{icon:Ie(),href:"confidence",isCurrent:e=>le(e,"confidence")}],[V.TOP,{icon:Ut(),href:"top",isCurrent:e=>le(e,"top")}],[V.NEW,{icon:It(),href:"new",isCurrent:e=>le(e,"new")}],[V.CONTROVERSIAL,{icon:ks(),href:"controversial",isCurrent:e=>le(e,"controversial")}],[V.OLD,{icon:Us(),href:"old",isCurrent:e=>le(e,"old")}],[V.QA,{icon:js(),href:"qa",isCurrent:e=>le(e,"qa"),overrideName:"Q&A"}]]);let ut=!1;function Ht(){let e=z.get(q.COMMENTS_CURRENT_SORT);return e instanceof Object&&(e=V.BEST),e}function Vt(){if(_.COMMENTS_REMEMBER_SORT.isEnabled()&&window.location.href.includes("/comments/")){const e=Se.get(Ht());if(e.isCurrent(window.location.href))return!1;let t=window.location.href;const o=t.includes("?")&&!t.includes(we);if(t.includes(we)){const n=t.indexOf(we);t=t.slice(0,n-1)}return window.location.replace(t+(o?"&":"?")+we+e.href),!0}return!1}async function qt(e){if(_.COMMENTS_SORT_BUTTONS.isDisabled())return;B.addStyle(Rs.A,"sortButtons"),ut=!1;const t=await c(()=>e.querySelector("comment-body-header")?.querySelector(".pdp-comments-tree-sort-container"),I);if(t==null||v(t))return;Fs(e),t.querySelector("shreddit-sort-dropdown").classList.add("pp_sortDropdown_hidden");let o;_.COMMENTS_REMEMBER_SORT.isEnabled()?o=Ht():Se.forEach((s,r)=>{s.isCurrent(window.location.href)&&(o=r)}),Se.forEach((s,r)=>{n(r,s)});function n(s,r){const l=u(t,"div","pp_sortButton");l.classList.toggle("pp_sortButton_active",s==o),l.setAttribute("commentSort",s),l.addEventListener("click",()=>{Ks(s)});const d=u(l,"span"),w=P(r.icon,16,16);d.append(w);const m=u(l,"span");m.textContent=r.overrideName!=null?r.overrideName:s}ut=!0}async function Fs(e){const t=await c(()=>e.querySelector("comment-body-header")?.querySelector("pdp-comment-search-input")?.shadowRoot?.querySelector(".pr-xs"),I);t!=null&&(t.textContent="Search")}let _t=!1;function Ns(){_t=!1,ut||qt(document.body)}async function Ks(e){if(_t){f("Unable to switch sort while loading comments");return}const t=await c(()=>document.body.querySelector("comment-body-header")?.querySelector(".pdp-comments-tree-sort-container"),I),o=Se.get(e);t.querySelector(`data[value="${o.href.toUpperCase()}"]`).click(),z.set(q.COMMENTS_CURRENT_SORT,e),_t=!0;const s=setInterval(()=>{o.isCurrent(window.location.href)&&(clearInterval(s),Se.forEach((r,l)=>{t.querySelector(`div[commentSort="${l}"]`).classList.toggle("pp_sortButton_active",l==e)}))},20)}function Xt(e){if(!_.UNWRAP_MORE_REPLIES.isDisabled()&&e.getAttribute("collapsed")==null){for(const t of e.childNodes)if(t instanceof HTMLElement){if(t.matches("faceplate-partial")&&t.getAttribute("src")?.includes("/more-comments/")&&!v(t)){t.click();let o=0;const n=setInterval(()=>{if(o++,t.parentNode==null){clearInterval(n),setTimeout(()=>{Xt(e)},50);return}o>60&&(clearInterval(n),S("Unable load more replies"))},100)}t.matches("a")&&t.getAttribute("slot")=="more-comments-permalink"&&(t.querySelector(".text-secondary-weak").textContent="More replies in single thread")}}}let be=null,xe=null,We=null;async function Hs(e){B.addStyle(ns.A,"comments"),_.HIDE_SHARE.isEnabled()&&B.addStyle(os.A,"hideShare"),be!=null?be.disconnect():be=new IntersectionObserver(t=>{for(const o of t)o.isIntersecting&&(Zt(o.target.parentElement),$t(o.target.parentElement),be.unobserve(o.target))},{threshold:.05}),xe!=null?xe.disconnect():xe=new IntersectionObserver(t=>{for(const o of t)o.isIntersecting&&(Zt(o.target.parentElement),xe.unobserve(o.target))},{threshold:.05}),We!=null?We.disconnect():We=new MutationObserver(t=>{for(const o of t)for(const n of o.addedNodes)if(n instanceof HTMLElement){const s=n.parentElement?.querySelector("shreddit-comment-tree");if(s!=null&&(Vs(s),Ns()),n.matches("shreddit-comment")&&(n.getAttribute("depth")=="0"?Gt(n):(zt(n),$t(n))),_.HIDE_RELATED_POSTS.isEnabled()&&n.matches("h2")&&n.textContent.includes("Related posts")){const r=n,l=r.nextSibling;r.remove(),l.remove()}}}),We.observe(e,{childList:!0,subtree:!0}),qt(e)}function Vs(e){e.querySelectorAll('shreddit-comment[depth="0"]').forEach(t=>{Gt(t)})}function Gt(e){v(e)||be.observe(e.querySelector('div[slot="commentMeta"]'))}function $t(e){e.querySelectorAll("shreddit-comment").forEach(t=>{zt(t)})}function zt(e){v(e)||xe.observe(e.querySelector('div[slot="commentMeta"]'))}async function Zt(e){const t=e.querySelector('div[slot="comment"]');if(On(e,t),_.COLLAPSE_AUTOMODERATOR.isEnabled()){const h=e.getAttribute("author");if(h!=null&&h=="AutoModerator"){e.setAttribute("collapsed","");return}const C=e.querySelector('div[slot="commentMeta"]')?.querySelector('shreddit-comment-author-modifier-icon[distinguished-as="MODERATOR"]')!=null,x=e.querySelector("shreddit-comment-badges")?.shadowRoot?.querySelector('svg[icon-name="pin-fill"]')!=null;if(C&&x){e.setAttribute("collapsed","");return}}setTimeout(()=>{Xt(e)},150);const o=e.querySelector('div[slot="commentMeta"]').querySelector('faceplate-hovercard[data-id="user-hover-card"]');if(o==null)return;const n=document.createElement("div");n.setAttribute("pp-anchor","tags");const s=o.parentElement.querySelector(".ml-2xs");s!=null?s.after(n):o.after(n);const r=await c(()=>o.parentElement.querySelector("time")?.parentElement?.parentElement,I),l=document.createElement("div");l.setAttribute("pp-anchor","info"),r?.before(l),_.GHOSTED_COMMENTS.isEnabled()&&parseInt(e.getAttribute("score"))<0&&(e.querySelector('div[slot="commentAvatar"]').classList.add("pp_muted_avatar"),e.querySelector('faceplate-tracker[noun="comment_author"]').querySelector("a").style.color="#a5a5a5",t.classList.add("pp_muted_content"));const d=t.querySelector('figure[class="rte-media"]');if(d!=null&&_.IMAGE_VIEWER.isEnabled()){const h=d.querySelector("a"),C=h.getAttribute("href");h.removeAttribute("href");let x=d.querySelector("img");x==null&&(x=d.querySelector("shreddit-player-2")),x.classList.add("pp_imageViewable"),h.addEventListener("click",()=>{Xe.open(C)})}At(e,ht),Ft(e);const w=e.getAttribute("author"),m=e.querySelector('faceplate-tracker[noun="comment_author"]').querySelector("a");nt(w,m,n,l,ht);const T=await c(()=>e.querySelector("shreddit-overflow-menu")?.shadowRoot?.querySelector("faceplate-dropdown-menu"));xt(e),T.addEventListener("click",()=>{Ds(e)},{once:!0})}var qs=p("./src/modules/scrollToTop.less"),Xs=p("./resources/scrollButton.svg"),Gs=p.n(Xs);const $s=1e3;let Ce=null,pt=null,de=0,Xr=!1,J=!1,ft=null,Yt=null;function zs(){if(_.SCROLL_TO_TOP.isDisabled())return;B.addStyle(qs.A,"scrollToTop"),ft=document.body.querySelector(".main-container");const e=ft.parentElement,t=document.body.querySelector("#left-sidebar-container");new MutationObserver(r=>{b(()=>{ce()},.5)}).observe(t,{childList:!1,subtree:!1,attributes:!0}),Yt=t.querySelector("#flex-left-nav-contents"),t.querySelector("#flex-nav-buttons").addEventListener("click",r=>{b(()=>{ce()},.5)}),Ce=u(e.parentElement,"div","pp_scrollToTop"),pt=P(Gs(),40,40),Ce.append(pt),Ce.addEventListener("click",()=>{J?(de=window.scrollY,window.scrollTo({top:0,behavior:"smooth"}),J=!1):de>0&&(window.scrollTo({top:de,behavior:"smooth"}),de=0,J=!0),ce()}),window.addEventListener("resize",r=>{ce()});let s=!1;window.addEventListener("scroll",r=>{J=window.scrollY>$s,J!=s&&(s=J,ce())}),ce()}function ce(){const e=Yt.getBoundingClientRect().right,t=ft.getBoundingClientRect().left;Ce.style.left=`${(e+t)/2-50}px`;const o=!(t-e>116&&(J||de>0)),n=!J&&de>0;Ce.classList.toggle("pp_scrollToTop_hidden",o),pt.classList.toggle("pp_scrollToTop_inverted",n)}async function Zs(e){const t=await c(()=>e.querySelector("#subgrid-container")?.querySelector("shreddit-feed"));t.querySelectorAll("shreddit-post").forEach(o=>{Ee(o)}),Wt(t)}async function Qt(){B.addStyle(ho.A,"app");const e=await c(()=>document.body.querySelector("shreddit-app")?.querySelector(".grid-container"));if(v(e))return;Sn(),Vo(),window.location.href.includes("/user/")?Zs(document.body):ts(document.body),Hs(document.body);const t=await c(()=>document.body.querySelector("#left-sidebar-container"),3e3);Co(t);const o=t.parentElement;o.classList.add("pp_pageContainer"),o.querySelector(".subgrid-container").classList.add("pp_mainFeed");const s=await c(()=>document.body.querySelector("#right-sidebar-container"));s.classList.add("pp_rightSidebar"),s.classList.toggle("styled-scrollbars",!0),mo(o,s),zs()}var Ys=p("./src/modules/header.less"),Qs=p("./src/modules/notifications.less");_.NOTIFY_POPUP.isEnabled()&&B.addStyle(Qs.A);function Js(e){e.querySelectorAll('div[data-testid="notification-item"]').forEach(t=>{const o=t.querySelector('div[data-testid="title"]'),n=t.querySelector(".text-secondary-plain");if(n.textContent.includes("replied")){n.textContent=n.textContent.split("replied")[0];const r=document.createElement("div");o.after(r);const l=u(r,"span",["text-secondary-weak","font-normal"]);let d=t.parentElement.getAttribute("href");d=d.replace("https://reddit.com/r/",""),d=d.split("/")[0],l.textContent=`replied in r/${d}`}const s=t.querySelector("faceplate-number");if(s!=null){const r=document.createElement("span");r.textContent=" ago",s.after(r)}})}var er=p("./resources/dragAnchor.svg"),tr=p.n(er),or=p("./resources/deleteButton.svg"),nr=p.n(or),sr=p("./resources/contentFilter.svg"),rr=p.n(sr),ir=p("./src/modules/filters/filtersWindow.less");const ar=new De("Content filters",lr,dr);B.addStyle(ir.A);function lr(e,t){e.container.style.zIndex="11",Jt();const o=u(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),n=u(o,"ul","pp_filter_list");let s=z.get(q.CONTENT_FILTERS);s instanceof Array||(s=[]);for(const h of s)w(h);m();let r=null;n.addEventListener("dragstart",h=>{r=h.target,r.classList.toggle("pp_filter_dragged",!0),h.dataTransfer.effectAllowed="move"});let l=null;n.addEventListener("dragenter",h=>{const C=d(h.target);C!=null&&C!=r&&(h.preventDefault(),l=C)}),n.addEventListener("dragend",h=>{r.classList.toggle("pp_filter_dragged",!1),r=null}),n.addEventListener("dragover",h=>{const C=d(h.target);C!=null&&C!=r&&h.preventDefault()}),n.addEventListener("drop",h=>{h.preventDefault();const C=d(h.target);if(C==null)return;const x=parseInt(r.getAttribute("index")),A=parseInt(C.getAttribute("index")),y=s[x];s.splice(x,1),s.splice(A,0,y),T(),x>A?C.before(r):C.after(r);let M=n.firstElementChild,L=0;for(;M.hasAttribute("filter");)M.setAttribute("index",L.toString()),L++,M=M.nextElementSibling});function d(h){let C=h;for(;!C.hasAttribute("filter")&&C.parentElement!=null;)C=C.parentElement;return C.hasAttribute("filter")?C:null}function w(h,C=null){const x=u(n,"li","pp_filter_element");x.style.borderColor=j(h.color),x.toggleAttribute("filter",!0),x.setAttribute("index",s.findIndex(N=>N==h).toString()),C?.before(x);const A=u(x,"div"),y=u(A,"div","pp_filter_element_dragAnchor"),M=P(tr(),16,16,{strokeColor:Z,fillColor:Y});y.append(M),y.addEventListener("mousedown",()=>{x.setAttribute("draggable","true")}),y.addEventListener("mouseenter",()=>{x.setAttribute("draggable","true")}),y.addEventListener("mouseleave",()=>{x.setAttribute("draggable","false")});const L=qe(A,"Regular expression",h.expression,N=>{h.expression=N,T()},{icon:rr()}),D=u(A,"div","pp_filter_element_colorPicker"),U=u(D,"input");U.setAttribute("type","color"),U.setAttribute("value",h.color),U.addEventListener("input",R),U.addEventListener("change",R);function R(N){h.color=N.target.value,x.style.borderColor=j(h.color),T()}function j(N){return h.posts||h.comments?N:`${N}4f`}const G=u(A,"div","pp_filter_element_toggles"),oo=u(G,"div"),Sr=u(oo,"span",["text-secondary","font-normal"]);Sr.textContent="Posts:",Me(oo,h.posts,N=>{h.posts=N,x.style.borderColor=j(h.color),T()});const no=u(G,"div"),br=u(no,"span",["text-secondary","font-normal"]);br.textContent="Comments:",Me(no,h.comments,N=>{h.comments=N,x.style.borderColor=j(h.color),T()});const so=Ze(A,h.action,Cn,N=>{h.action=N;let te=null;switch(h.action){case H.Hide:te="#6A51D9";break;case H.Blur:te="#5BB3D9";break;case H.Hightlight:te="#74CB39";break}te!=null&&(h.color=="#6A51D9"||h.color=="#5BB3D9"||h.color=="#74CB39")&&(h.color=te,x.style.borderColor=j(te),U.setAttribute("value",te)),T()}),ro=L.querySelector(".pp_ui_input_button");ro.addEventListener("focus",()=>{D.classList.toggle("pp_hidden",!0),G.classList.toggle("pp_hidden",!0),so.classList.toggle("pp_hidden",!0)}),ro.addEventListener("focusout",()=>{D.classList.toggle("pp_hidden",!1),G.classList.toggle("pp_hidden",!1),so.classList.toggle("pp_hidden",!1)});const xr=u(A,"span"),io=u(xr,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),Cr=P(nr(),24,24,{strokeColor:Z,fillColor:Y});io.append(Cr),io.addEventListener("click",()=>{s.splice(s.findIndex(N=>N==h),1),T(),x.remove()})}function m(){const h=u(n,"div",["pp_filter_addButton","button","button-primary","inline-flex","items-center","justify-center"]),C=u(h,"span",["flex","items-center","justify-center"]),x=u(C,"span",["flex","items-center","gap-xs"]);x.textContent="Add a filter",h.addEventListener("click",()=>{const A=new An;A.expression="",A.color="#6A51D9",A.posts=!0,A.comments=!0,A.action=H.Hide,s.push(A),w(A,h),T(),o.scrollBy(0,200)})}function T(){z.set(q.CONTENT_FILTERS,s)}}function dr(){Jt()}function Jt(){let e=z.get(q.CONTENT_FILTERS);e instanceof Array||(e=[]),e=e.filter(t=>t!=null&&t.expression!=null&&t.expression.length>0),z.set(q.CONTENT_FILTERS,e)}var cr=p("./src/modules/settings/settingsWindow.less");B.addStyle(cr.A);const ur=new De("Reddit++ Settings",_r,pr);class X{}X.APIRequests={text:"API requests",color:"var(--shreddit-color-wordmark)",link:"https://github.com/lnm95/redditPlusPlus/blob/main/redditAPI.md"},X.New={text:"New",color:"#2C96C4",link:"https://greasyfork.org/en/scripts/490046-reddit/versions"};let ee=0;function _r(e,t){document.body.click(),ee=0;const o=u(e.content,"div","pp_settings_changesBannerContainer"),n=u(o,"div","pp_settings_changesBanner");n.textContent="Page will be reloaded to apply new settings";const s=u(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),r=u(s,"div","pp_window_elementsContainer");h("App name","Without authorization API requests will be limited by 100 per 10 minutes","Unauthorized",_.API_APP,[X.APIRequests]),m("Show the requests limit warnings",null,_.API_WARNINGS,[X.APIRequests]),l("Common"),m("Wide mode","Make focus on the content by replacing the right sidebar to screen border",_.WIDE_MODE),h("Content width","Width of the feed and comments in pixels",_.CONTENT_WIDTH.defaultValue,_.CONTENT_WIDTH),h("Content offset","Offset of the feed and comments in pixels",_.CONTENT_OFFSET.defaultValue,_.CONTENT_OFFSET),m("Bigger fonts","Make fonts bigger for better reading",_.BIGGER_FONTS),m("Scroll to top button",null,_.SCROLL_TO_TOP),m("Image viewer","Open (zoom) images instead default redirect behaviour",_.IMAGE_VIEWER),m("Redirect suggestion","Show the suggestion to redirect from old.reddit to modern pages",_.REDIRECT_SUGGESTION),m("Redirect forced","Automatically redirect from old.reddit to modern pages",_.REDIRECT_FORCED),m("Collapse Awards","Automatic collapse the award's button for none upvoted posts and comments",_.COLLAPSE_AWARDS),m("Remove Awards","Remove the award's buttons completely",_.COLLAPSE_AWARDS_COMPLETELY),l("Content"),w("Filters","Hide posts and comments by regular expressions",ar,[X.New]),m("Hidden posts history","Allows to show latest hidden posts",_.SHOW_FILTERED_CONTENT,[X.New]),h("Hidden posts history limit","Max count of posts in history window",_.FILTERED_CONTENT_MAX_COUNT.defaultValue,_.FILTERED_CONTENT_MAX_COUNT,[X.New]),l("Left sidebar"),m("Sub filter","Tool for find subs on sidebar by name",_.SUB_FILTER),m("Show Custom feeds",null,_.SIDEBAR_CUSTOMS),m("Show Recent",null,_.SIDEBAR_RECENT),m("Show Communities",null,_.SIDEBAR_SUBS),m("Show Resources",null,_.SIDEBAR_RESOURCES),l("Default feeds"),T("Home",null,_.DEFAULT_FEED_HOME),T("Popular",null,_.DEFAULT_FEED_POPULAR),T("All",null,_.DEFAULT_FEED_ALL),T("Subreddit's",null,_.DEFAULT_FEED_SUB),l("Users"),m("User info",`Show user's karma and "new user" mark`,_.USER_INFO,[X.APIRequests]),m("Show nicknames","Use user's nicknames instead profile names",_.SHOW_NAMES,[X.APIRequests]),h("Nickname max symbols","Make nicknames with too many symbols shorter",_.USERNAME_MAX_SIMBOLS.defaultValue,_.USERNAME_MAX_SIMBOLS,[X.New]),m("User tags","Enable custom tags (sets via comment's context menu)",_.USER_TAGS),l("Feed"),m("Feed buttons","Unwrap feed sorting buttons",_.FEED_BUTTONS),m("Flairs bar","Display available flairs to faster navigation. Specific flairs may be hidden via subreddit's flairs settings",_.FLAIR_BAR),m("Show flairs always","Show flairs for posts in specific feeds (Home, Popular and All) and filter posts by flairs.",_.FLAIR_SHOW_ALWAYS,[X.APIRequests,X.New]),m("Collapse community highlights",null,_.COLLAPSE_HIGHLIGHTS),m("Selectable text","Make a text selectable when posts viewed in feed",_.SELECTABLE_POSTS),m("Unwrap button","Show the unwrap button for long-text posts in feed",_.UNWRAP_POST),m("Soft background","Make the background of posts with soft gradient color",_.BACKPLATES),m("Show post's author","Relates to Home, Popular and All feeds",_.SHOW_POST_AUTHOR),m("Show bookmark","Show the bookmark button for saved and upvoted posts",_.SAVED_BOOKMARK_POSTS),m("Show bookmark always","Show the bookmark button for all posts",_.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS),l("Comments"),m("Sort buttons","Unwrap the comment's sort buttons",_.COMMENTS_SORT_BUTTONS),m("Remember sort","Remember latest used comment's sort",_.COMMENTS_REMEMBER_SORT),m('Unwrap "more replies"',"Automatically unwrap more replies when it becomes visible",_.UNWRAP_MORE_REPLIES),m("Hide share button","Replace the share button to comment's context menu",_.HIDE_SHARE),m("Ghosted comments","Make comments ghosted when comment's rating below zero",_.GHOSTED_COMMENTS),m("Collapse unwanted","Automatic collapse all automoderator and mod's pinned comments",_.COLLAPSE_AUTOMODERATOR),m("Show bookmark","Show the bookmark button for saved comments",_.SAVED_BOOKMARK_COMMENTS),m("Show bookmark always","Show the bookmark button for all comments",_.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS),m("Hide related posts",null,_.HIDE_RELATED_POSTS);function l(x){const A=u(r,"h3","pp_settings_subtittle");A.textContent=x}function d(x,A,y=[]){const M=u(r,"div","pp_window_element"),L=u(M,"div","pp_settings_propertyHeader"),D=u(L,"div","pp_settings_propertyHeader_tittle");if(D.textContent=x,A!=null){const R=u(L,"div","pp_settings_propertyHeader_description");R.textContent=A}else M.classList.add("pp_settings_property_oneLine");for(const R of y){const j=u(D,"a","pp_no_decoration");R.link!=null&&R.link.length>0&&j.setAttribute("href",R.link);const G=u(j,"div",["pp_settings_propertyHeader_badge","pp_no_decoration"]);G.textContent=R.text,G.style.color=R.color,G.style.borderColor=R.color}return u(M,"div","pp_settings_propertyButtonContainer")}function w(x,A,y,M=[]){const L=d(x,A,M),D=u(L,"div","pp_window_controlArea"),U=u(D,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),R=P(ze(),20,20);U.append(R),L.parentElement.style.cursor="pointer",L.parentElement.addEventListener("click",()=>{y.open()})}function m(x,A,y,M=[]){const L=d(x,A,M),D=u(L,"div","pp_window_controlArea");let U=!1;Me(D,y.isEnabled(),R=>{y.switch(R),ee+=U?-1:1,U=!U,C()})}function T(x,A,y,M=[]){const L=d(x,A,M),D=u(L,"div","pp_window_controlArea"),U=y.getIndex();let R=!1;Ze(D,y.getIndex(),y.values,j=>{y.set(j),j!=U&&!R&&(R=!0,ee++),j==U&&R&&(R=!1,ee--),C()})}function h(x,A,y,M,L=[]){const D=d(x,A,L),U=u(D,"div","pp_window_controlArea"),R=M.get();let j=!1;qe(U,y,M.get(),G=>{M.set(G),G!=R&&!j&&(j=!0,ee++),G==R&&j&&(j=!1,ee--),C()},{alignCenter:!0,filter:M.filter})}function C(){o.classList.toggle("pp_settings_changesBanner_active",ee>0)}}function pr(){ee>0&&(_.nextRevision(),window.location.reload())}var fr=p("./resources/settingsButton.svg"),mr=p.n(fr);B.addStyle(Ys.A);let eo=!1;async function to(e){const t=await c(()=>e.querySelector("reddit-header-large")?.querySelector("nav"));if(v(t))return;const o=await c(()=>t.childNodes.item(4));o.classList.add("pp_userPanel"),o.addEventListener("click",()=>{hr()},{once:!0}),_.NOTIFY_POPUP.isEnabled()&&!eo&&(eo=!0,i(document.body,r=>{r.getAttribute("data-id")=="notification-container-element"&&!v(r)&&Js(r)}));const n=e.querySelector("#reddit-logo"),s=u(n,"div","pp_logo");s.textContent="++"}function hr(){let e=document.getElementById("user-drawer-content");if(e.querySelector('faceplate-tracker[noun="pp-settings"]')!=null)return;let t=e.querySelector('faceplate-tracker[noun="settings"]');t==null&&(t=e.querySelector('faceplate-tracker[noun="login"]'));let o=t.cloneNode(!0);o.setAttribute("noun","pp-settings"),t.parentNode.appendChild(o),o.querySelector("a").removeAttribute("href");const n=o.querySelector("svg"),s=P(mr(),20,20,{strokeColor:Z});n.replaceWith(s);let r=o.querySelector(".text-14");r.textContent="Reddit++",o.addEventListener("click",()=>{ur.open()})}var gr=p("./src/modules/redirect.less");function vr(){const e=window.location.href.includes("old.reddit.com"),t=window.location.href.includes("new.reddit.com");let o=null;e&&(o=window.location.href.replace("old.reddit.com","reddit.com")),t&&(o=window.location.href.replace("new.reddit.com","reddit.com")),_.REDIRECT_FORCED.isEnabled()&&o!=null&&window.location.assign(o),_.REDIRECT_SUGGESTION.isEnabled()&&o!=null&&Er(o);const n=Vt();return o!=null||n}function Er(e){B.addStyle(gr.A);let t=19;const o=u(document.body,"div","pp_redirectContainer"),n=u(o,"div","pp_redirectBox");n.textContent=`Click here to redirect on compatible page (${t})`,n.addEventListener("click",()=>{window.location.assign(e)});const s=setInterval(()=>{t--,n.textContent=`Click here to redirect on compatible page (${t})`,t<=0&&(clearInterval(s),o.remove())},750)}wr();async function wr(){const e=await c(()=>document.head!=null&&document.body!=null?document.body:null);let t=document.head.querySelector('meta[name="reddit-plus-plus"]');if(t!=null){f("Reddit++ runned more that one times. Check out userscript manager to disable dublicates.",{seconds:10});return}if(t=document.createElement("meta"),t.setAttribute("name","reddit-plus-plus"),t.setAttribute("version","1.1.0"),document.head.append(t),Ae.check(),vr())return;const o=await c(()=>e.querySelector("shreddit-app"),I);if(o==null||o.getAttribute("devicetype")!="desktop"){S("Reddit++ was stopped for a non compatible page");return}to(e),Qt(),i(e,n=>{n.matches("reddit-header-large")==!0&&to(n.parentElement);const s=n.matches("shreddit-app")==!0,r=n.classList.contains("grid-container")&&n.parentElement.matches("shreddit-app")==!0;(s||r)&&(Qt(),Vt())})}})()})();
