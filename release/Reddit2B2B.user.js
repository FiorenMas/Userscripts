// ==UserScript==
// @name             Reddit++
// @namespace        RedditPlusPlus
// @version          2.1.8
// @author           lnm95
// @icon             https://raw.githubusercontent.com/lnm95/redditPlusPlus/main/public/icon/redditPlusPlusIcon.png
// @source           https://github.com/lnm95/redditPlusPlus
// @license          MIT
// @match            *://*.reddit.com/*
// @grant            unsafeWindow
// @grant            GM_getValue
// @grant            GM_setValue
// @grant            GM_deleteValue
// @run-at           document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reddit2B2B.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reddit2B2B.meta.js
// ==/UserScript==
(()=>{var vo={"./src/modules/app.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`faceplate-banner {
  max-width: 1000px !important;
}
.pp_hidden {
  display: none !important;
}
@media (min-width: 1200px) {
  .pp_mainFeed {
    max-width: calc(100vw - var(--flex-nav-width, 0px) - 15px) !important;
  }
}
`,""]);const C=h},"./src/modules/biggerFonts.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`:is(.text-14-scalable):not(.pp_defaultText .text-14-scalable) {
  font-size: var(--pp-biggerFonts-Content) !important;
  line-height: 1.4rem !important;
}
faceplate-hovercard .text-12 {
  font-size: 0.9rem !important;
}
shreddit-composer > div[role='textbox'] {
  font-size: var(--pp-biggerFonts-Content) !important;
  line-height: 1.4rem !important;
}
:is(.text-12):not(.pp_defaultText .text-12) {
  font-size: var(--pp-biggerFonts-Other) !important;
}
shreddit-comment-action-row {
  margin-bottom: 15px !important;
}
`,""]);const C=h},"./src/modules/bookmark.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_bookmark_hiddenButton {
  width: 32px;
  height: 32px;
  position: absolute;
  opacity: 0 !important;
  overflow: hidden;
}
.pp_bookmark_hiddenButton > div {
  padding: 0px !important;
}
button.pp_bookmark_button[aria-pressed='false'] .vote-icon-fill {
  display: none;
}
button.pp_bookmark_button[aria-pressed='true'] .vote-icon-outline {
  display: none;
}
`,""]);const C=h},"./src/modules/collapseAwards.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_awardButton {
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
`,""]);const C=h},"./src/modules/comments/comments.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_muted_avatar {
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
`,""]);const C=h},"./src/modules/comments/hideShare.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`shreddit-comment-share-button {
  display: none !important;
}
`,""]);const C=h},"./src/modules/comments/hideStickyComposer.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`#sticky-comment-composer-wrapper.bottom-0 {
  display: none !important;
}
`,""]);const C=h},"./src/modules/comments/sortButtons.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_sortDropdown_hidden {
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
`,""]);const C=h},"./src/modules/comments/userTags.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_tagsPanel {
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
`,""]);const C=h},"./src/modules/customFeed/customFeed.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_customFeed_masthead_ico {
  width: 50px !important;
  height: 50px !important;
}
`,""]);const C=h},"./src/modules/feed/feedButtons.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_feedPanel {
  width: 100%;
}
.pp_feedPanel > div {
  justify-content: flex-end;
}
.pp_feedPanel_buttons {
  display: flex;
  gap: 4px;
  width: 100%;
  height: 40px;
}
.pp_feedPanel_buttons > a {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
}
.pp_feedPanel_settings_container {
  display: flex;
  align-items: center;
}
.pp_feedPanel_settings {
  color: var(--color-neutral-content-weak);
  border-radius: 18px;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0px 8px;
  position: relative;
  cursor: pointer;
}
.pp_feedPanel_settings:hover {
  background-color: var(--button-color-background-hover);
}
.pp_feedPanel_settings:active {
  background-color: var(--button-color-background-activated);
}
`,""]);const C=h},"./src/modules/feed/feedSettings/feedSettingsWindow.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_feedSettings_overrideSub {
  z-index: 20;
  position: relative;
}
.pp_feedSettings_overrideSub::before {
  border-radius: 16px;
  border: 2px solid #ffc800;
  position: absolute;
  content: '';
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -8px;
  z-index: 15;
  pointer-events: none;
}
.pp_feedSettings_overrideTittle {
  color: #e1b30d !important;
}
.pp_ui_disabled {
  opacity: 0.5;
  filter: grayscale(1);
  pointer-events: none;
}
`,""]);const C=h},"./src/modules/filters/filters.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_hidden_comment > details {
  display: none;
}
.pp_hidden_button {
  position: relative;
  left: -16px;
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
`,""]);const C=h},"./src/modules/filters/filtersWindow.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_filter_list {
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
`,""]);const C=h},"./src/modules/filters/hiddenContent.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_hiddenContent_button {
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
`,""]);const C=h},"./src/modules/header.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`#reddit-logo {
  text-decoration: none;
}
#user-drawer-content {
  max-height: 90vh;
  overflow: auto;
}
.pp_logo {
  width: max-content;
  color: var(--shreddit-color-wordmark);
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -2px;
}
`,""]);const C=h},"./src/modules/images/images.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_image_pointer {
  cursor: pointer;
}
.pp_customLightbox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #cccccc;
}
.pp_customLightbox_background {
  position: absolute;
  width: 100%;
  height: 100%;
}
.pp_customLightbox_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;
}
.pp_customLightbox_target {
  object-fit: scale-down;
  max-width: 100%;
  max-height: 100%;
}
.pp_lightbox_galleryFigure {
  justify-content: center;
}
.pp_lightbox_galleryFigure > img {
  width: min-content;
  max-height: 100%;
}
.pp_lightbox_target {
  cursor: grab;
  box-shadow: 0px 0px 20px 3px #14141456;
}
.pp_lightbox_target:not(.pp_image_drag) {
  transition: transform 0.5s ease-out;
}
.pp_lightbox_target:active {
  cursor: grabbing;
}
`,""]);const C=h},"./src/modules/posts/posts.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_post_tittle {
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
`,""]);const C=h},"./src/modules/posts/postsBackplates.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`article > shreddit-post {
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
`,""]);const C=h},"./src/modules/posts/shareButton.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_post_shareButton .items-center > :is(span):not(.flex) {
  visibility: hidden !important;
  max-width: 0px;
}
.pp_post_shareButton > span > span {
  margin-inline-end: 0px !important;
}
.pp_post_shareButton > button > span > span {
  margin-inline-end: 0px !important;
}
.pp_post_shareButton .text-16 {
  margin-right: 0px !important;
}
`,""]);const C=h},"./src/modules/profileMenu/profileMenu.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,"",""]);const C=h},"./src/modules/profileMenu/profileMenuWindow.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_profileMenuElement_tittleContainer {
  width: 100%;
}
`,""]);const C=h},"./src/modules/redirect.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_redirectContainer {
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
`,""]);const C=h},"./src/modules/scrollToTop.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_scrollToTop_anchor {
  position: absolute;
  top: 0px;
  height: 1000px;
}
.pp_scrollToTop {
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
  transition: padding-bottom 0.2s ease-in, color 0.2s ease-in, opacity 0.5s ease;
  clip-path: inset(0 0 0 8px);
}
.pp_scrollToTop svg {
  padding-left: 8px;
}
.pp_scrollToTop_inverted {
  transform: scale(1, -1);
}
.pp_scrollToTop:hover {
  padding-bottom: 50px !important;
  color: var(--scrollButtonColor);
  transition: padding-bottom 0.2s ease-out, color 0.2s ease-out, opacity 0.5s ease;
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
`,""]);const C=h},"./src/modules/settings/settingsWindow.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_settings_subtittle {
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
`,""]);const C=h},"./src/modules/sidebar/sidebar.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`flex-left-nav-container #pp-settings {
  position: absolute;
  top: 60px;
  z-index: calc(var(--flex-nav-z-index) + 1);
  inset-inline-end: -16px;
}
.pp_sidebar_loadingSection {
  max-height: 0px !important;
  visibility: hidden !important;
}
.pp_sidebar_loadingSection > details {
  max-height: 0px !important;
}
`,""]);const C=h},"./src/modules/sidebar/sidebarSettingsWindow.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_sidebarSettings_sectionTittle {
  width: 100%;
  display: flex;
  align-items: center;
}
.pp_sidebarSettings_section {
  padding: 0rem 3rem;
  gap: 8px;
  align-items: center;
}
.pp_sidebarSettings_section > span {
  text-wrap-mode: nowrap;
  margin-left: 3rem;
}
`,""]);const C=h},"./src/modules/subs/flairBar.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_flair {
  border-radius: 20px;
}
.pp_flairBar {
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
`,""]);const C=h},"./src/modules/subs/flairWindow.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_flairWindow_flair {
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
`,""]);const C=h},"./src/modules/subs/subs.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.masthead > section > div {
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
`,""]);const C=h},"./src/modules/users/userPage.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_user_hiddenPostsMessage {
  padding-left: 1rem;
  display: flex;
  gap: 1rem;
}
`,""]);const C=h},"./src/modules/wideMode.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`@media (min-width: 1392px) {
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
`,""]);const C=h},"./src/utils/UI/button.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_ui_button {
  display: flex;
}
.pp_ui_button_panel {
  gap: 8px;
}
.pp_ui_button_icon {
  display: flex;
}
`,""]);const C=h},"./src/utils/UI/input.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_ui_input_container {
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
`,""]);const C=h},"./src/utils/UI/options.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_ui_options {
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
`,""]);const C=h},"./src/utils/UI/toggle.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_ui_toggle {
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
`,""]);const C=h},"./src/utils/changesObserver.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_changesBannerContainer {
  position: absolute;
  top: 0px;
  width: 900px;
  overflow-y: hidden;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
}
.pp_changesBanner {
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
.pp_changesBanner_active {
  opacity: 1 !important;
}
`,""]);const C=h},"./src/utils/window.less"(d,E,i){"use strict";i.d(E,{A:()=>C});var g=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=i.n(g),S=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(S),h=x()(b());h.push([d.id,`.pp_window_container {
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
`,""]);const C=h},"./node_modules/css-loader/dist/runtime/api.js"(d){"use strict";d.exports=function(E){var i=[];return i.toString=function(){return this.map(function(b){var S="",x=typeof b[5]<"u";return b[4]&&(S+="@supports (".concat(b[4],") {")),b[2]&&(S+="@media ".concat(b[2]," {")),x&&(S+="@layer".concat(b[5].length>0?" ".concat(b[5]):""," {")),S+=E(b),x&&(S+="}"),b[2]&&(S+="}"),b[4]&&(S+="}"),S}).join("")},i.i=function(b,S,x,h,C){typeof b=="string"&&(b=[[null,b,void 0]]);var q={};if(x)for(var te=0;te<this.length;te++){var N=this[te][0];N!=null&&(q[N]=!0)}for(var Ce=0;Ce<b.length;Ce++){var k=[].concat(b[Ce]);x&&q[k[0]]||(typeof C<"u"&&(typeof k[5]>"u"||(k[1]="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {").concat(k[1],"}")),k[5]=C),S&&(k[2]&&(k[1]="@media ".concat(k[2]," {").concat(k[1],"}")),k[2]=S),h&&(k[4]?(k[1]="@supports (".concat(k[4],") {").concat(k[1],"}"),k[4]=h):k[4]="".concat(h)),i.push(k))}},i}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js"(d){"use strict";d.exports=function(E){return E[1]}},"./resources/back.svg"(d){d.exports='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 9.1H4.679l5.487-5.462a.898.898 0 00.003-1.272.898.898 0 00-1.272-.003l-7.032 7a.898.898 0 000 1.275l7.03 7a.896.896 0 001.273-.003.898.898 0 00-.002-1.272l-5.487-5.462h12.82a.9.9 0 000-1.8z"></path></svg>'},"./resources/bookmarkSaved.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.372 1H4.628A1.629 1.629 0 0 0 3 2.628v16.256a1.113 1.113 0 0 0 1.709.941L10 16.479l5.282 3.34A1.12 1.12 0 0 0 17 18.873V2.628A1.63 1.63 0 0 0 15.372 1Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/bookmarkUnsaved.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.114 20A1.117 1.117 0 0 1 3 18.884V2.628A1.629 1.629 0 0 1 4.628 1h10.744A1.63 1.63 0 0 1 17 2.628v16.245a1.12 1.12 0 0 1-1.718.946L10 16.479l-5.291 3.346a1.11 1.11 0 0 1-.595.175Zm.514-17.75a.378.378 0 0 0-.378.378v16.009L10 15l5.75 3.636V2.628a.378.378 0 0 0-.378-.378H4.628Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/comments/bannedUser.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2,7.15,7.08,1.84A2.66,2.66,0,0,1,10,2.3a2.72,2.72,0,0,1,.7,2.91L5.37,10.66s-1,1.11-2.74-.73C1,8.24,2,7.15,2,7.15Z" style="fill: none;stroke: #8a3685;stroke-width: 1.5px"></path><path d="M7.33,8.85l6,6.16a1,1,0,0,0,1.28-.07,1.16,1.16,0,0,0,.15-1.28L8.9,7.37" style="fill: #8a3685; stroke:none"></path></svg>'},"./resources/comments/newUser.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20"><path d="M1.46,1.5S3.49,4.89,7,5.07c1.49.07,3.35.25,4.06.79,1.41,1.09,2.3,2.08,1.74,4.37a4.91,4.91,0,0,1-4.36,3.49C5.08,14,2.89,10.29,2.33,9.35.41,6.12,1.46,1.5,1.46,1.5Z" style="fill:#69b508;stroke:none;stroke-width:0px"></path><path d="M12.5,11.5a3.39,3.39,0,0,1,2,2,3.16,3.16,0,0,1,0,2" style="fill:none;stroke:#69b508;stroke-width:2px"></path></svg>'},"./resources/comments/shareButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.111 12.5a3.701 3.701 0 0 1-1.09 2.41c-.479.47-.928.922-1.378 1.373-.45.45-.894.9-1.368 1.366a3.852 3.852 0 0 1-2.698 1.099 3.852 3.852 0 0 1-2.698-1.099 3.738 3.738 0 0 1-1.116-2.659c0-.997.402-1.953 1.116-2.658.479-.472.928-.923 1.378-1.375.45-.45.893-.9 1.368-1.365A3.936 3.936 0 0 1 9.638 8.59a3.968 3.968 0 0 1 2.24.258c.27-.269.546-.54.812-.806l.131-.13a5.086 5.086 0 0 0-3.182-.624A5.052 5.052 0 0 0 6.732 8.71c-.48.471-.929.922-1.377 1.373-.449.451-.894.9-1.37 1.366A4.982 4.982 0 0 0 2.5 14.992c0 1.328.534 2.602 1.486 3.543A5.13 5.13 0 0 0 7.58 20a5.13 5.13 0 0 0 3.595-1.465c.478-.471.927-.923 1.377-1.374.451-.451.894-.9 1.368-1.366a4.993 4.993 0 0 0 1.263-2.071c.243-.781.288-1.61.132-2.412L14.11 12.5Z" style="fill:currentColor;stroke:none;stroke-width:1px"></path><path d="M16.017 1.467A5.123 5.123 0 0 0 12.422 0a5.123 5.123 0 0 0-3.595 1.467c-.478.471-.926.923-1.377 1.374-.45.451-.894.9-1.367 1.366a4.966 4.966 0 0 0-1.106 1.624 4.907 4.907 0 0 0-.291 2.86l1.2-1.19a3.699 3.699 0 0 1 1.092-2.41c.478-.472.928-.923 1.377-1.374.45-.45.894-.9 1.368-1.366a3.844 3.844 0 0 1 2.698-1.101c1.012 0 1.982.396 2.698 1.101a3.736 3.736 0 0 1 1.116 2.66c0 .996-.401 1.953-1.116 2.658-.478.471-.927.922-1.377 1.373-.45.451-.893.9-1.368 1.367a3.933 3.933 0 0 1-2.014 1.003 3.966 3.966 0 0 1-2.24-.26c-.273.274-.551.549-.818.818l-.123.12a5.087 5.087 0 0 0 3.183.624 5.053 5.053 0 0 0 2.906-1.423c.477-.472.926-.923 1.376-1.375.45-.452.894-.9 1.368-1.365A4.977 4.977 0 0 0 17.5 5.008a4.977 4.977 0 0 0-1.488-3.543l.005.002Z" style="fill:currentColor;stroke:none;stroke-width:1px"></path></svg>'},"./resources/comments/sortButtons/controversial.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><polygon points="6.34 13.21 3.33 9.37 2.46 10.07 5.35 13.73 6.34 13.21" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><polygon points="4.11 13.02 3.11 11.75 0.76 13.47 1.7 14.55 4.11 13.02" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><path d="M5.67,9.62l-.8.66,1,1.32s.54-.31,1.31-.8A12,12,0,0,1,5.67,9.62Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></path><path d="M10.93,3.83A19.94,19.94,0,0,1,8.52,7.08c.57.52,1.29,1.08,1.8,1.46a11.2,11.2,0,0,0,1-1C14.21,4.3,14.7,2.11,14.7,2.11Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></path><polygon points="9.23 13.59 12.52 9.01 13.53 9.81 10.36 14.19 9.23 13.59" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><polygon points="11.61 12.82 12.66 11.36 15.26 13.26 14.28 14.52 11.61 12.82" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><path d="M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z" style="fill:currentColor"></path><path d="M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z" style="fill:none;stroke:none;stroke-miterlimit:10"></path></svg>'},"./resources/comments/sortButtons/old.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="5.28" cy="8.67" r="1" style="fill: currentColor"></circle><circle cx="9.28" cy="8.67" r="1" style="fill: currentColor"></circle><circle cx="12.26" cy="2.08" r="1.32" style="fill: currentColor"></circle><path d="M7.55,5.08c.09-2.83,3-3.59,4-3" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"></path><path d="M4.92,11.7s3,1,5,0" style="fill: blue;stroke: currentColor;stroke-miterlimit: 10"></path><path d="M7.72,5c3.31,0,6,2,6,4.5S11,14,7.72,14s-6-2-6-4.5S4.41,5,7.72,5m0-.5c-3.59,0-6.5,2.24-6.5,5s2.91,5,6.5,5,6.5-2.24,6.5-5-2.91-5-6.5-5Z" style="fill: currentColor"></path><path d="M10.85,5.5A1.56,1.56,0,0,1,13,5.31a1.34,1.34,0,0,1,.24,1.89" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px"></path><path d="M2.18,7a1.55,1.55,0,0,1,.53-2,1.33,1.33,0,0,1,1.86.4" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px"></path></svg>'},"./resources/comments/sortButtons/qa.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="10.77" cy="4.4" r="3" style="fill: currentColor"></circle><path d="M3.54,13.87l0,0a1.07,1.07,0,0,1-.46-1.35L6.4,7.44a1.05,1.05,0,0,1,1.48,0l.58.43c.54.41.74,1,.43,1.42L5,13.93A1.08,1.08,0,0,1,3.54,13.87Z" style="fill: currentColor"></path></svg>'},"./resources/comments/userTags/blockedButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m9.78126,18.09375c-4.41989,0 -8,-3.58011 -8,-8c0,-4.41989 3.58011,-8 8,-8c4.41989,0 8,3.58011 8,8c0,4.41989 -3.58011,8 -8,8z" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m4.43767,4.59392l10.81217,10.93716" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/blockedIcon.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="M3.11,3l7.94,8" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="M7,12.88A5.88,5.88,0,1,1,12.91,7,5.88,5.88,0,0,1,7,12.88Z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/comments/userTags/followedButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m1.56177,7.99265l5.62517,-1.11153l2.68713,-4.92101l3.02542,4.77603l5.28687,1.25651l-4.60571,3.96991l1.43072,5.79091l-5.28229,-2.56852l-4.99233,2.56852l1.09243,-6.03254l-4.26742,-3.72827l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/followedIcon.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m0.43678,5.49532l4.46205,-0.8817l2.13151,-3.90349l2.39985,3.78849l4.1937,0.9967l-3.65339,3.14905l1.13489,4.59352l-4.19007,-2.03743l-3.96007,2.03743l0.86655,-4.78519l-3.38505,-2.95738l0,-0.00001l0.00001,0z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/comments/userTags/likedButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m7.28935,15.93702c-4.80908,-3.55432 -6.52852,-5.80272 -6.54246,-8.55516c-0.0127,-2.50919 2.10985,-4.93093 4.30951,-4.91697c1.09841,0.00698 3.45457,0.93051 4.2889,1.6811c0.42039,0.37819 0.6195,0.3409 1.55543,-0.29133c2.54723,-1.72064 5.03461,-1.75676 6.64556,-0.09648c2.57463,2.65349 2.10589,5.82222 -1.34747,9.10906c-1.836,1.74747 -5.84543,4.84759 -6.26946,4.84759c-0.12903,0 -1.31703,-0.80001 -2.64001,-1.7778l0,0l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/likedIcon.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m5.10986,11.44595c-3.39081,-2.55084 -4.60316,-4.16445 -4.61299,-6.1398c-0.00896,-1.80077 1.48763,-3.53879 3.03857,-3.52877c0.77447,0.00501 2.43577,0.6678 3.02404,1.20648c0.29641,0.27142 0.4368,0.24465 1.09671,-0.20908c1.79601,-1.23486 3.54983,-1.26078 4.68568,-0.06924c1.81534,1.90433 1.48483,4.17844 -0.95008,6.53732c-1.29454,1.25411 -4.12153,3.47898 -4.4205,3.47898c-0.09098,0 -0.92862,-0.57415 -1.86143,-1.27588l0,0l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/comments/userTags/warningButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m1.24313,16.49297l8.78125,-13.75l8.78125,13.75l-17.5625,0z" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m9.875,7.5l0,4.5" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m9.875,14.09375l0,1" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/comments/userTags/warningIcon.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m6.91754,10.29973l0,0.7153" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="m6.91754,5.38201l0,4.06927" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="m0.74313,12.0159l6.28126,-9.83543l6.28126,9.83543l-12.56252,0z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/contentFilter.svg"(d){d.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'},"./resources/deleteButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path></svg>'},"./resources/dragAnchor.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13"><rect y="5.5" width="14" height="2" rx="1"></rect><rect width="14" height="2" rx="1"></rect><rect y="11" width="14" height="2" rx="1"></rect></svg>'},"./resources/feedButtons/feedButtonBest.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.82,1.51l1.43,3.4a.86.86,0,0,0,.66.47l3.62.28A.91.91,0,0,1,15,7.22L12.3,9.62a.84.84,0,0,0-.25.76l.81,3.55a.92.92,0,0,1-1.33,1L8.41,13a.91.91,0,0,0-.82,0L4.47,14.89a.92.92,0,0,1-1.33-1L4,10.38a.84.84,0,0,0-.25-.76L1,7.22a.91.91,0,0,1,.5-1.56l3.62-.28a.86.86,0,0,0,.66-.47l1.43-3.4A.91.91,0,0,1,8.82,1.51Z" style="fill:currentColor; stroke:none"></path></svg>'},"./resources/feedButtons/feedButtonHot.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.49,2.93c.7,1.56,3,2.81,3.69,3.52a5.14,5.14,0,0,1,1.36,5.45c-1.09,3.37-4.49,3.38-6.21,3.38s-4.18-.28-5-3,.8-4.41,1-5,1.06,2.52,2,3.12c1.19.79,2.85,0,2.85-1.18S6.72,7.65,6.44,5.37a10.62,10.62,0,0,1,1-4.9S7.83,1.46,8.49,2.93Z" style="stroke:currentColor;fill:currentColor;stroke-width:0.5px"></path></svg>'},"./resources/feedButtons/feedButtonNew.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,15.5A7.5,7.5,0,1,1,15.5,8,7.5,7.5,0,0,1,8,15.5Zm0-14A6.5,6.5,0,1,0,14.5,8,6.51,6.51,0,0,0,8,1.5Z" style="fill:currentColor;stroke:currentColor;stroke-width:0.5px"></path><path d="M8,2V8l4-2" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/feedButtons/feedButtonRising.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1.1,14.67c1.4-2.8,3.62-6.84,3.62-6.84L9,12.18l4.13-9.94" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="M8.5,4.5l4.68-2.45S14,5.31,14.5,7.5" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'},"./resources/feedButtons/feedButtonTop.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.51,6.56,9.13,1.17a1.61,1.61,0,0,0-2.26,0L1.49,6.56a1,1,0,0,0,.72,1.73H5.52V14A1.28,1.28,0,0,0,6.8,15.3H9.23A1.29,1.29,0,0,0,10.52,14V8.29h3.27A1,1,0,0,0,14.51,6.56Z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'},"./resources/hiddenIco.svg"(d){d.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Hide"><path id="Vector" d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>'},"./resources/imageCloseButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11.273 10l5.363-5.363a.9.9 0 10-1.273-1.273L10 8.727 4.637 3.364a.9.9 0 10-1.273 1.273L8.727 10l-5.363 5.363a.9.9 0 101.274 1.273L10 11.273l5.363 5.363a.897.897 0 001.274 0 .9.9 0 000-1.273L11.275 10h-.002z"></path></svg>'},"./resources/inputClear.svg"(d){d.exports='<svg fill="currentColor" icon-name="clear-outline" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/postUnwrapButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M12.5,18.75A2.36,2.36,0,0,1,10.83,18L2.47,9.53,3.53,8.47,11.9,17a.79.79,0,0,0,1.2,0l8.37-8.5,1.06,1.06L14.17,18A2.36,2.36,0,0,1,12.5,18.75Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10;stroke-width:0px"></path></svg>'},"./resources/profileMenu/comments.svg"(d){d.exports='<svg version="1.1" id="\u0421\u043B\u043E\u0439_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve"><path d="M246,246.8c-18.2,0-33,14.8-33,33c0,18.2,14.8,33,33,33V246.8z M554,312.8c18.2,0,33-14.8,33-33c0-18.2-14.8-33-33-33V312.8 z M284.5,359.3c-18.2,0-33,14.8-33,33c0,18.2,14.8,33,33,33V359.3z M515.5,425.3c18.2,0,33-14.8,33-33c0-18.2-14.8-33-33-33V425.3z M253.2,92V59l-0.2,0L253.2,92z M546.9,92l0.3-33h-0.3V92z M708,255.6l-33-0.2v0.2H708z M708,454.1h-33v0.2L708,454.1z M661.3,569.3 l-23.5-23.2l0,0L661.3,569.3z M546.8,617.7v33h0.2L546.8,617.7z M253.2,617.7v-33c-5.6,0-11.2,1.5-16.1,4.2L253.2,617.7z M92,708H59 c0,11.7,6.2,22.5,16.3,28.5c10.1,5.9,22.6,6,32.8,0.3L92,708z M92,255.6h33l0-0.2L92,255.6z M138.7,140.4l-23.5-23.2l0,0 L138.7,140.4z M246,312.8h308v-66H246V312.8z M284.5,425.3h231v-66h-231V425.3z M253.2,125h293.7V59H253.2V125z M546.6,125 c71.4,0.5,128.9,58.9,128.4,130.3l66,0.5c0.8-107.9-86-196-193.9-196.8L546.6,125z M675,255.6v198.6h66V255.6H675z M675,454.4 c0.3,34.3-13.1,67.3-37.2,91.7l47,46.3c36.4-36.9,56.6-86.7,56.2-138.6L675,454.4z M637.8,546.1c-24.1,24.4-56.9,38.3-91.2,38.6 l0.5,66c51.8-0.4,101.4-21.3,137.7-58.2L637.8,546.1z M546.8,584.7H253.2v66h293.6V584.7z M237,588.9L75.9,679.2l32.3,57.6 l161.2-90.3L237,588.9z M125,708V255.6H59V708H125z M125,255.3c-0.3-34.3,13.1-67.3,37.2-91.7l-47-46.3 C78.8,154.1,58.6,204,59,255.8L125,255.3z M162.2,163.6c24.1-24.4,56.9-38.3,91.2-38.6l-0.5-66c-51.8,0.4-101.4,21.3-137.7,58.2 L162.2,163.6z"></path></svg>'},"./resources/profileMenu/history.svg"(d){d.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5.67541V3C3 2.44772 2.55228 2 2 2C1.44772 2 1 2.44772 1 3V7C1 8.10457 1.89543 9 3 9H7C7.55229 9 8 8.55229 8 8C8 7.44772 7.55229 7 7 7H4.52186C4.54218 6.97505 4.56157 6.94914 4.57995 6.92229C5.621 5.40094 7.11009 4.22911 8.85191 3.57803C10.9074 2.80968 13.173 2.8196 15.2217 3.6059C17.2704 4.3922 18.9608 5.90061 19.9745 7.8469C20.9881 9.79319 21.2549 12.043 20.7247 14.1724C20.1945 16.3018 18.9039 18.1638 17.0959 19.4075C15.288 20.6513 13.0876 21.1909 10.9094 20.9247C8.73119 20.6586 6.72551 19.605 5.27028 17.9625C4.03713 16.5706 3.27139 14.8374 3.06527 13.0055C3.00352 12.4566 2.55674 12.0079 2.00446 12.0084C1.45217 12.0088 0.995668 12.4579 1.04626 13.0078C1.25994 15.3309 2.2082 17.5356 3.76666 19.2946C5.54703 21.3041 8.00084 22.5931 10.6657 22.9188C13.3306 23.2444 16.0226 22.5842 18.2345 21.0626C20.4464 19.541 22.0254 17.263 22.6741 14.6578C23.3228 12.0526 22.9963 9.30013 21.7562 6.91897C20.5161 4.53782 18.448 2.69239 15.9415 1.73041C13.4351 0.768419 10.6633 0.756291 8.14853 1.69631C6.06062 2.47676 4.26953 3.86881 3 5.67541Z" fill="#0F0F0F"></path><path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2344 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.546 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" fill="#0F0F0F"></path></svg>'},"./resources/profileMenu/posts.svg"(d){d.exports='<svg version="1.1" id="\u0421\u043B\u043E\u0439_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve"><style type="text/css"> .st0{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#000000;stroke-width:60;stroke-miterlimit:10;} </style><path class="st0" d="M646.7,657.4h-503c-43.5,0-78.7-35.2-78.7-78.7v-366c0-43.5,35.2-78.7,78.7-78.7h503 c43.5,0,78.7,35.2,78.7,78.7v366C725.4,622.2,690.2,657.4,646.7,657.4z"></path><g><path d="M624.8,223.9H181.5c-15.7,0-28.5,12.7-28.5,28.5v1.9c0,15.7,12.7,28.5,28.5,28.5h443.3c15.7,0,28.5-12.7,28.5-28.5v-1.9 C653.3,236.6,640.5,223.9,624.8,223.9L624.8,223.9z"></path></g><g><path d="M488.7,321.9H177.2c-13.3,0-24.1,10.8-24.1,24.1v10.5c0,13.3,10.8,24.1,24.1,24.1h311.5c13.3,0,24.1-10.8,24.1-24.1V346 C512.8,332.7,502,321.9,488.7,321.9L488.7,321.9z"></path></g><path d="M224.4,578.2c-12.5,0-26.2-0.3-39.4-1.1c-9.2-0.6-17.6-5.8-22.2-13.8c-4.7-8-5-17.8-1-26.1c11.7-24.1,38-64.3,39.1-66 c5.1-7.8,13.7-12.5,23-12.6c9.3-0.1,18,4.4,23.2,12.1l43.2,62.9c5.7,8.3,6.5,19,2,28c-4.4,9-13.4,14.9-23.4,15.5 C267.7,577.2,248.5,578.2,224.4,578.2z"></path><path d="M411.4,578.2c-9.2,0-17.7-4.5-22.9-12.1l-43.2-62.9c-5.7-8.3-6.5-19-2-28s13.4-14.9,23.4-15.5c1.8-0.1,45.3-2.5,83.8,0 c9.2,0.6,17.6,5.8,22.2,13.8c4.7,8,5,17.8,1,26.1c-11.7,24.1-38,64.3-39.1,66c-5.1,7.8-13.7,12.5-23,12.6 C411.6,578.2,411.5,578.2,411.4,578.2z"></path></svg>'},"./resources/profileMenu/saved.svg"(d){d.exports='<svg version="1.1" id="\u0421\u043B\u043E\u0439_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve"><path d="M4.9,19.1c-0.7,0-1.3-0.6-1.3-1.3V3.6c0-0.9,0.8-1.7,1.7-1.7h9.4c0.9,0,1.7,0.8,1.7,1.7v14.2c0,0.7-0.6,1.3-1.3,1.3 c-0.2,0-0.5-0.1-0.7-0.2L10,16.1l-4.5,2.8C5.3,19,5.1,19.1,4.9,19.1L4.9,19.1z M5.3,3.6C5.3,3.6,5.3,3.6,5.3,3.6l0,13.5l4.7-3l4.7,3 V3.6L5.3,3.6z"></path></svg>'},"./resources/profileMenu/settings.svg"(d){d.exports='<svg version="1.1" id="\u0421\u043B\u043E\u0439_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve"><path d="M8.9,19.8c-1.8,0-3.3-1.3-3.5-3.1H2.8c-1,0-1.8-0.8-1.8-1.8V11c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1 c0,0,0.1,0,0.1,0l0.1,0c0.5,0,1-0.3,1.3-0.6s0.5-0.9,0.5-1.4C3.2,7.8,2.4,7,1.4,7c0,0-0.1,0-0.1,0C1.2,7,1.1,7,1.1,6.9 C1,6.9,1,6.8,1,6.7V2.8C1,1.8,1.8,1,2.8,1H7C7.1,1,7.2,1,7.3,1.1c0.1,0.1,0.1,0.2,0,0.3C6.9,2,6.9,2.8,7.3,3.3 c0.3,0.6,0.9,0.9,1.6,0.9c0.3,0,0.7-0.1,1-0.3c0.9-0.5,1.2-1.7,0.6-2.6c-0.1-0.1-0.1-0.2,0-0.3C10.5,1,10.6,1,10.7,1H15 C15,1,15,1,15,1c1,0.1,1.7,0.9,1.7,1.8v2.5c1.7,0.2,3,1.6,3.1,3.3c0.1,1.9-1.3,3.5-3.1,3.7v2.5c0,1-0.8,1.8-1.8,1.8h-2.5 c-0.2,1.7-1.6,3-3.3,3.1C9,19.8,8.9,19.8,8.9,19.8z M2.8,14.9l4,0c0.2,0,0.3,0.1,0.3,0.3v1.2c0.1,0.8,0.8,1.5,1.6,1.6l0.1,0 c0.9,0,1.7-0.7,1.7-1.6l0-1.2c0-0.2,0.1-0.3,0.3-0.3h4l0-4c0-0.2,0.1-0.3,0.3-0.3h1.2c0.8-0.1,1.5-0.8,1.6-1.6 c0-0.5-0.1-0.9-0.4-1.3s-0.7-0.6-1.2-0.6l-1.2,0C15.1,7.1,15,7,15,6.8v-4c0,0-0.1,0-0.1,0h-2.3c-0.2,1.9-1.7,3.4-3.7,3.4 c-1.9,0-3.5-1.5-3.7-3.4H2.8c0,0,0,0,0,0v2.7C4.1,6.1,5,7.4,5,8.9c0,1.5-0.9,2.8-2.2,3.4V14.9z"></path></svg>'},"./resources/profileMenu/upvoted.svg"(d){d.exports='<svg version="1.1" id="\u0421\u043B\u043E\u0439_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path d="M9.1,15H6.9c-1,0-1.7-0.8-1.7-1.8V8.9H2.9c-0.4,0-0.8-0.2-1.1-0.5C1.3,7.8,1.3,6.9,1.9,6.3l4.7-4.7c0.8-0.8,2-0.8,2.8,0 l4.7,4.7c0.3,0.3,0.5,0.7,0.5,1.1c0,0.8-0.7,1.5-1.5,1.4h-2.2v4.4C10.8,14.2,10,15,9.1,15z M5.8,7.7h0.6v5.6c0,0.3,0.2,0.5,0.5,0.5 h2.1c0.3,0,0.5-0.2,0.5-0.5V7.7h3.5c0.2,0,0.3-0.1,0.3-0.3c0-0.1,0-0.2-0.1-0.2l0,0L8.6,2.4c-0.3-0.3-0.8-0.3-1.1,0L2.7,7.2 C2.6,7.2,2.6,7.3,2.6,7.4s0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1L5.8,7.7z"></path></svg>'},"./resources/scrollButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M27.58,27.12,21,20.53a1.42,1.42,0,0,0-2,0l-6.58,6.59a1.41,1.41,0,0,0,1,2.41H26.58A1.41,1.41,0,0,0,27.58,27.12Z" style="fill:currentColor"></path><rect x="5" y="11.75" width="30" height="2.5" style="fill:currentColor"></rect></svg>'},"./resources/settingsArrow.svg"(d){d.exports='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.942 15.442-.884-.884L11.616 10 7.058 5.442l.884-.884 5 5a.624.624 0 0 1 0 .884l-5 5Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'},"./resources/settingsGear.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M 24 4 C 22.423103 4 20.902664 4.1994284 19.451172 4.5371094 A 1.50015 1.50015 0 0 0 18.300781 5.8359375 L 17.982422 8.7382812 C 17.878304 9.6893592 17.328913 10.530853 16.5 11.009766 C 15.672739 11.487724 14.66862 11.540667 13.792969 11.15625 L 13.791016 11.15625 L 11.125 9.9824219 A 1.50015 1.50015 0 0 0 9.4257812 10.330078 C 7.3532865 12.539588 5.7626807 15.215064 4.859375 18.201172 A 1.50015 1.50015 0 0 0 5.4082031 19.845703 L 7.7734375 21.580078 C 8.5457929 22.147918 9 23.042801 9 24 C 9 24.95771 8.5458041 25.853342 7.7734375 26.419922 L 5.4082031 28.152344 A 1.50015 1.50015 0 0 0 4.859375 29.796875 C 5.7625845 32.782665 7.3519262 35.460112 9.4257812 37.669922 A 1.50015 1.50015 0 0 0 11.125 38.015625 L 13.791016 36.841797 C 14.667094 36.456509 15.672169 36.511947 16.5 36.990234 C 17.328913 37.469147 17.878304 38.310641 17.982422 39.261719 L 18.300781 42.164062 A 1.50015 1.50015 0 0 0 19.449219 43.460938 C 20.901371 43.799844 22.423103 44 24 44 C 25.576897 44 27.097336 43.800572 28.548828 43.462891 A 1.50015 1.50015 0 0 0 29.699219 42.164062 L 30.017578 39.261719 C 30.121696 38.310641 30.671087 37.469147 31.5 36.990234 C 32.327261 36.512276 33.33138 36.45738 34.207031 36.841797 L 36.875 38.015625 A 1.50015 1.50015 0 0 0 38.574219 37.669922 C 40.646713 35.460412 42.237319 32.782983 43.140625 29.796875 A 1.50015 1.50015 0 0 0 42.591797 28.152344 L 40.226562 26.419922 C 39.454197 25.853342 39 24.95771 39 24 C 39 23.04229 39.454197 22.146658 40.226562 21.580078 L 42.591797 19.847656 A 1.50015 1.50015 0 0 0 43.140625 18.203125 C 42.237319 15.217017 40.646713 12.539588 38.574219 10.330078 A 1.50015 1.50015 0 0 0 36.875 9.984375 L 34.207031 11.158203 C 33.33138 11.54262 32.327261 11.487724 31.5 11.009766 C 30.671087 10.530853 30.121696 9.6893592 30.017578 8.7382812 L 29.699219 5.8359375 A 1.50015 1.50015 0 0 0 28.550781 4.5390625 C 27.098629 4.2001555 25.576897 4 24 4 z M 24 7 C 24.974302 7 25.90992 7.1748796 26.847656 7.3398438 L 27.035156 9.0644531 C 27.243038 10.963375 28.346913 12.652335 30 13.607422 C 31.654169 14.563134 33.668094 14.673009 35.416016 13.904297 L 37.001953 13.207031 C 38.219788 14.669402 39.183985 16.321182 39.857422 18.130859 L 38.451172 19.162109 C 36.911538 20.291529 36 22.08971 36 24 C 36 25.91029 36.911538 27.708471 38.451172 28.837891 L 39.857422 29.869141 C 39.183985 31.678818 38.219788 33.330598 37.001953 34.792969 L 35.416016 34.095703 C 33.668094 33.326991 31.654169 33.436866 30 34.392578 C 28.346913 35.347665 27.243038 37.036625 27.035156 38.935547 L 26.847656 40.660156 C 25.910002 40.82466 24.973817 41 24 41 C 23.025698 41 22.09008 40.82512 21.152344 40.660156 L 20.964844 38.935547 C 20.756962 37.036625 19.653087 35.347665 18 34.392578 C 16.345831 33.436866 14.331906 33.326991 12.583984 34.095703 L 10.998047 34.792969 C 9.7799772 33.330806 8.8159425 31.678964 8.1425781 29.869141 L 9.5488281 28.837891 C 11.088462 27.708471 12 25.91029 12 24 C 12 22.08971 11.087719 20.290363 9.5488281 19.160156 L 8.1425781 18.128906 C 8.8163325 16.318532 9.7814501 14.667839 11 13.205078 L 12.583984 13.902344 C 14.331906 14.671056 16.345831 14.563134 18 13.607422 C 19.653087 12.652335 20.756962 10.963375 20.964844 9.0644531 L 21.152344 7.3398438 C 22.089998 7.1753403 23.026183 7 24 7 z M 24 16 C 19.599487 16 16 19.59949 16 24 C 16 28.40051 19.599487 32 24 32 C 28.400513 32 32 28.40051 32 24 C 32 19.59949 28.400513 16 24 16 z M 24 19 C 26.779194 19 29 21.220808 29 24 C 29 26.779192 26.779194 29 24 29 C 21.220806 29 19 26.779192 19 24 C 19 21.220808 21.220806 19 24 19 z"></path></svg>'},"./resources/showIco.svg"(d){d.exports='<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#231f20;}</style></defs><g id="show"><path class="cls-1" d="M4,17a1,1,0,0,1-.87-1.5C3.31,15.2,7.52,8,16,8s12.69,7.2,12.87,7.5a1,1,0,1,1-1.74,1C27.1,16.43,23.3,10,16,10S4.91,16.43,4.87,16.5A1,1,0,0,1,4,17Z"></path><path class="cls-1" d="M16,24C7.52,24,3.31,16.8,3.13,16.5a1,1,0,0,1,1.74-1C4.9,15.57,8.7,22,16,22s11.09-6.43,11.13-6.5a1,1,0,0,1,1.74,1C28.69,16.8,24.48,24,16,24Z"></path><path class="cls-1" d="M16,18a2,2,0,1,1,2-2A2,2,0,0,1,16,18Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z"></path></g></svg>'},"./resources/sidebarSubsManager.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-200v-80h480v80zm0-240v-80h480v80zm0-240v-80h480v80zM200-160q-33 0-56.5-23.5T120-240t23.5-56.5T200-320t56.5 23.5T280-240t-23.5 56.5T200-160m0-240q-33 0-56.5-23.5T120-480t23.5-56.5T200-560t56.5 23.5T280-480t-23.5 56.5T200-400m0-240q-33 0-56.5-23.5T120-720t23.5-56.5T200-800t56.5 23.5T280-720t-23.5 56.5T200-640"></path></svg>'},"./resources/subFilter.svg"(d){d.exports='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z" style="stroke:none;stroke-width:0px"></path></svg>'},"./resources/windowCloseButton.svg"(d){d.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14,2h0a.75.75,0,0,0-1.06,0L8.15,6.78a.2.2,0,0,1-.3,0L3.06,2A.75.75,0,0,0,2,2H2A.75.75,0,0,0,2,3.06L6.78,7.85a.2.2,0,0,1,0,.3L2,12.94A.75.75,0,0,0,2,14H2a.75.75,0,0,0,1.06,0L7.85,9.22a.2.2,0,0,1,.3,0L12.94,14A.75.75,0,0,0,14,14h0a.75.75,0,0,0,0-1.06L9.22,8.15a.2.2,0,0,1,0-.3L14,3.06A.75.75,0,0,0,14,2Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10;stroke-width:0px"></path></svg>'}},tn={};function _(d){var E=tn[d];if(E!==void 0)return E.exports;var i=tn[d]={id:d,exports:{}};return vo[d](i,i.exports,_),i.exports}_.n=d=>{var E=d&&d.__esModule?()=>d.default:()=>d;return _.d(E,{a:E}),E},_.d=(d,E)=>{for(var i in E)_.o(E,i)&&!_.o(d,i)&&Object.defineProperty(d,i,{enumerable:!0,get:E[i]})},_.o=(d,E)=>Object.prototype.hasOwnProperty.call(d,E);var Ia={};(()=>{"use strict";var d;(function(e){e.Disabled="Disabled",e.WhenUpvoted="When upvoted",e.Always="Always"})(d||(d={}));var E;(function(e){e.Default="Default behaviour",e.WhenUpvoted="Show when upvoted",e.RemoveCompletely="Remove completely"})(E||(E={}));var i;(function(e){e[e.Comment=0]="Comment",e[e.Post=1]="Post"})(i||(i={}));const g=2e3,b=3600,S=b*24;function x(e){return e*1e3}class h{}class C{}C.Null=function(e){return null},C.EmptyObject=function(e){return{}};class q{constructor(t,n=new h){if(this.refreshed=0,this.databaseKey=t+"_DATABASE",this.refreshKey=t+"_REFRESHED",this.cleanupKey=t+"_CLEANUP",this.isCleanupable=n?.isCleanupable??!1,this.validator=n?.validator??null,this.loader=n?.loader??null,this.factory=n?.factory??C.EmptyObject,this.data=this.refreshData(),this.isCleanupable&&GM_getValue(this.cleanupKey,0)<Date.now()){const o=Object.entries(this.data).length,s=Date.now()-x(S*(1e3/o));this.data=Object.fromEntries(Object.entries(this.data).filter(([r,a])=>a.timestamp>s)),this.refreshed=Date.now(),GM_setValue(this.databaseKey,this.data),GM_setValue(this.refreshKey,this.refreshed),GM_setValue(this.cleanupKey,Date.now()+1e3*b)}}refreshData(){const t=GM_getValue(this.refreshKey,0);return!this.data||this.refreshed<t?(this.refreshed=t,GM_getValue(this.databaseKey,{})):this.data}get(t){this.data=this.refreshData();const n=this.data[t];return n??this.factory(t)}forEach(t){this.data=this.refreshData(),Object.keys(this.data).forEach(n=>{t(n,this.data[n])})}async getWithLoader(t,n=null){this.data=this.refreshData();const o=this.data[t];let s=o??this.factory(t),r=!1;return(this.validator(s)??!0)&&(s=await this.loader(t),this.set(t,s),r=!0),n?.(r),s}set(t,n){this.data=this.refreshData(),n==null?delete this.data[t]:(this.isCleanupable&&(n.timestamp=Date.now()),this.data[t]=n,this.refreshed=Date.now()),GM_setValue(this.databaseKey,this.data),GM_setValue(this.refreshKey,this.refreshed)}wipe(){GM_deleteValue(this.databaseKey),GM_deleteValue(this.refreshKey),GM_deleteValue(this.cleanupKey)}}async function te(e,t){const{seconds:n,color:o}={seconds:3,color:null,...t};let s=await A(()=>document.body?.querySelector("alert-controller")?.shadowRoot?.querySelector("toaster-lite")),r=document.createElement("faceplate-toast");r.classList.add("theme-rpl"),o!=null&&(r.style.backgroundColor=o),r.textContent=e,s?.appendChild(r),setTimeout(()=>{r.setAttribute("_fading","")},n*1e3)}function N(e,t){if(t){const n=new Error().stack;console.log(`Reddit++: ${e}`,n)}else console.log(`Reddit++: ${e}`)}const Ce=2e4,k=10;class Eo{}const pe=[];let ht=!1;async function A(e,t=Ce){let n=e();return n!=null&&n!=null?n:new Promise(o=>{const s=new Eo;s.logExpired=t>=Ce,s.ticksRemaining=t/k,s.requestRO=e,s.process=r=>{const a=e();return a!=null&&a!=null||r?(o(a??null),!0):!1},pe.push(s),ht||wo()})}function wo(){ht=!0;let e=0,t=0,n=!1;const o=setInterval(()=>{if(n){e++;return}if(pe.length>0){let l=function(w){for(;a<pe.length&&w.timeRemaining()>0;){const f=pe[a++];f.ticksRemaining-=s;const u=f.ticksRemaining<=0;f.process(u)?u&&f.logExpired&&N(`Dynamic request expired: ${f.requestRO.toString()}`):pe[r++]=f}a<pe.length?requestIdleCallback(l):(pe.length=r,n=!1)};n=!0,t=0;const s=1+e;let r=0,a=0;requestIdleCallback(l)}else t++,t>50&&(clearInterval(o),ht=!1);e=0},k)}class de{constructor(){this.styleSheets=[],this.styleKeys=new Set,this.sources=[]}register(t){if(!t){N("Trying register an invalid source in CustomCSS");return}this.sources.push(t);for(const n of this.styleSheets)t.adoptedStyleSheets.push(n)}addStyle(t,n=null){if(n!=null){if(this.styleKeys.has(n))return;this.styleKeys.add(n)}const o=new CSSStyleSheet;o.replaceSync(t),this.styleSheets.push(o);for(const s of this.sources)s.adoptedStyleSheets.push(o)}addRule(t){if(!this.rulesStyleSheet){this.rulesStyleSheet=new CSSStyleSheet,this.styleSheets.push(this.rulesStyleSheet);for(const n of this.sources)n.adoptedStyleSheets.push(this.rulesStyleSheet)}this.rulesStyleSheet.insertRule(t,0)}addVar(t,n,o=null){this.addRule(`:root.theme-light { ${t}: ${n} !important;}`),this.addRule(`:root { ${t}: ${o??n};}`)}}const I=new de;I.register(document);var bo=_("./src/modules/customFeed/customFeed.less");const gt=new de;gt.register(document),gt.addStyle(bo.A);let nn=null;function vt(){const e=window.location.href.split("/m/");return e.length>1?e[1].split("/")[0]:null}async function So(e){const t=await A(()=>e.querySelector("custom-feed-header")?.shadowRoot);gt.register(t),(await A(()=>t?.querySelector("img")?.parentElement))?.classList.add("pp_customFeed_masthead_ico"),nn=t?.querySelector(".text-18")?.textContent??null}function c(e,t,n){const o=Qe(t,n);return e.append(o),o}function xe(e,t,n){const o=Qe(t,n);return e.prepend(o),o}function Qe(e,t){const n=document.createElement(e);if(t!=null)if(typeof t=="string")n.classList.add(t);else for(const o of t)n.classList.add(o);return n}var Et;(function(e){e.Grayscale="Grayscale",e.ClassicGradient="Classic gradient",e.ContrastingGradient="Contrasting gradient",e.Random="Random"})(Et||(Et={}));var ce;(function(e){e.Disabled="Disabled",e.Suggestion="Suggestion",e.Forced="Forced"})(ce||(ce={}));var ue;(function(e){e.ProfileName="Profile name",e.Nickname="Nickname",e.Both="Both"})(ue||(ue={}));class R{constructor(t,n=!0){this.name=t,this.defailtValue=n}isEnabled(){const t=Ae.get(this.name);return t??this.defailtValue}isDisabled(){return!this.isEnabled()}switch(t){Ae.set(this.name,t??this.isDisabled())}getChild(t,n=!0){return new R(this.name+t,n)}}class ye{constructor(t,n,o=0){this.name=t,this.values=n,this.defaultIndex=o}get(){const t=Ae.get(this.name);return t??this.values[this.defaultIndex]}getIndex(){return this.values.indexOf(this.get())}isDefault(){return this.get()==this.values[this.defaultIndex]}set(t){Ae.set(this.name,this.values[t])}}class me{constructor(t,n,o){this.name=t,this.defaultValue=n,this.filter=o??(s=>s)}get(){const t=Ae.get(this.name);return t??this.defaultValue}isDefault(){return this.get()==this.defaultValue}set(t){Ae.set(this.name,t)}}function Co(e){return t=>{const n=parseInt(t).toString();return n!="NaN"?n:e.toString()}}function Ue(e){return t=>{const n=Math.abs(parseInt(t)).toString();return n!="NaN"?n:e.toString()}}class xo{constructor(){this.revision=this.getRevision(),this.isDirted=!1,this.API_APP=new me("apiApp",""),this.API_WARNINGS=new R("apiWarnings"),this.WIDE_MODE=new R("wideMode"),this.CONTENT_WIDTH=new me("contentWidth","700",Ue(700)),this.CONTENT_OFFSET=new me("contentOffset","0",Co(0)),this.BIGGER_FONTS=new R("biggerFonts"),this.BIGGER_FONTS_CONTENT_SIZE=new me("biggerFontsContentSize","16",Ue(16)),this.BIGGER_FONTS_OTHER_SIZE=new me("biggerFontsOtherSize","12",Ue(12)),this.SCROLL_TO_TOP=new R("scrollToTop"),this.LIGHTBOX=new R("imageViewer"),this.LIGHTBOX_CLOSE=new R("lightboxClose"),this.LIGHTBOX_NAVIGATION=new R("lightboxNavigation"),this.COLLAPSE_AWARDS=new ye("collapseAwards",Object.values(E),1),this.REDIRECT_MODE=new ye("redirectMode",Object.values(ce),1),this.USER_SEARCH_SHORTCUTS=new R("userSearchShortcuts",!1),this.REMOVE_LEFT_SIDEBAR=new R("removeLeftSidebar",!1),this.REMOVE_RIGHT_SIDEBAR=new R("removeRightSidebar",!1),this.NOTIFY_POPUP=new R("notifyPopup"),this.SHOW_FILTERED_CONTENT=new R("showFilteredContent"),this.FILTERED_CONTENT_MAX_COUNT=new me("filteredContentMaxCount","20",Ue(20)),this.SUB_FILTER=new R("sidebarSubFilter"),this.SIDEBAR_GAMES=new R("sidebarGames"),this.SIDEBAR_CUSTOMS=new R("sidebarCustoms"),this.SIDEBAR_RECENT=new R("sidebarRecent"),this.SIDEBAR_SUBS=new R("sidebarSubs"),this.SIDEBAR_RESOURCES=new R("sidebarResources"),this.SIDEBAR_NAV_BUTTON=new R("sidebarNavigation"),this.FEED_BUTTONS=new R("feedButtons"),this.FLAIR_BAR=new R("flairbar"),this.FLAIR_SHOW_ALWAYS=new R("flairShowAlways",!1),this.COLLAPSE_HIGHLIGHTS=new R("collapseHighlights",!1),this.BACKPLATES=new R("backplates"),this.SELECTABLE_POSTS=new R("selectablePosts"),this.UNWRAP_POST=new R("unwrapPost"),this.SHOW_POST_AUTHOR=new R("showPostAuthor"),this.SAVED_BOOKMARK_POSTS=new ye("savedBookmarkPosts",Object.values(d),1),this.HIDE_COMMUNITY_RECOMMENDATIONS=new R("hideCommunityRecommendations",!1),this.COMMENTS_SORT_BUTTONS=new R("commentSortButtons"),this.COMMENTS_REMEMBER_SORT=new R("commentRememberSort"),this.HIDE_RELATED_POSTS=new R("hideRelatedPosts",!1),this.HIDE_STICKY_COMPOSER=new R("hideStickyComposer",!1),this.UNWRAP_MORE_REPLIES=new R("unwrapMoreReplies",!1),this.USER_INFO=new R("userInfo",!1),this.USERNAME_MODE=new ye("usernameMode",Object.values(ue),0),this.USERNAME_MAX_SIMBOLS=new me("usernameMaxSimbols","50",Ue(50)),this.USER_TAGS=new R("userTags"),this.HIDE_SHARE=new R("hideShare"),this.GHOSTED_COMMENTS=new R("ghostedComments"),this.COLLAPSE_AUTOMODERATOR=new R("collapseAutomoderator"),this.SAVED_BOOKMARK_COMMENTS=new ye("savedBookmarkComments",Object.values(d),1),this.GUIDELINES_COLOR=new ye("guidelinesColor",Object.values(Et),0),this.GUIDELINES_THICK=new R("guidelinesThick",!1),window.addEventListener("storage",t=>{this.isDirt()&&!this.isDirted&&(this.isDirted=!0,document.addEventListener("visibilitychange",()=>{window.location.reload()},{once:!0}))})}getRevision(){return parseInt(localStorage.getItem("pp_settings_s_revision")??"0")}nextRevision(){this.revision++,localStorage.setItem("pp_settings_s_revision",String(this.revision))}isDirt(){return this.getRevision()!=this.revision}}const Ae=new q("SETTINGS",{factory:C.Null}),v=new xo,on=429;let Je=null;async function wt(e){try{if(Je!=null)if(Date.now()>Je)Je=null;else return{status:on,result:null};const t=new Headers({Accept:"text/vnd.reddit.partial+html, text/html;q=0.9","Content-Type":"application/x-www-form-urlencoded"}),n=new URL(`https://www.reddit.com${e}`),o=v.API_APP.get();o!=null&&o.length>0&&(n.search=new URLSearchParams({app:o}).toString());const s=await fetch(n,{credentials:"include",method:"get",headers:t});if(!s.ok){if(N(`${e} request failed with code ${s.status} : ${s.statusText}`),s.status==on){const a=parseInt(s.headers.get("x-ratelimit-reset"));Je=Date.now()+a*1e3+500,v.API_WARNINGS.isEnabled()&&te(`API request hit a limit. Disable "API requests" features or set correct App name or wait ${a} seconds`,{seconds:15})}return{status:s.status,result:null}}const r=await s.json();return{status:s.status,result:r}}catch(t){return N(`${e} request failed with error: ${t}`),{status:"error",result:null}}}const H="none",G="currentColor",sn=document.createElement("div");function U(e,t,n,o){const{viewBox:s,strokeColor:r,fillColor:a}={viewBox:null,strokeColor:G,fillColor:G,...o};sn.innerHTML=e;const l=sn.firstChild;return l.setAttribute("width",`${t}px`),l.setAttribute("height",`${n}px`),s&&l.setAttribute("viewBox",s),l.setAttribute("fill",a),l.setAttribute("stroke",r),l}function se(e,t,n,o,s={}){const r=U(t,n,o,s);return e.append(r),r}function yo(e,t,n,o,s={}){const r=U(t,n,o,s);return e.prepend(r),r}async function Ao(e){return e.childElementCount>0?e:new Promise(t=>{let n=!1;new MutationObserver((s,r)=>{n||(n=!0,r.disconnect(),t(e))}).observe(e,{childList:!0})})}const et=new Map;function tt(e,t,n,o=!0){e&&et.has(e)&&(et.get(e).disconnect(),et.delete(e));const s=n(t);if(s!=null&&s==!0)return;let r=!0;const a=new MutationObserver((l,w)=>{for(const f of l)for(const u of f.addedNodes)if(r&&u instanceof HTMLElement){const p=n(u);p!=null&&p==!0&&(w.disconnect(),r=!1)}});a.observe(t,{childList:!0,subtree:o}),e&&et.set(e,a)}function z(e,t="pp-rendered"){return e==null||e.getAttribute(t)!=null?!0:(e.setAttribute(t,""),!1)}function Oo(e){return document.cookie.split("; ").find(t=>t.startsWith(e))?.split("=")[1]}function Lo(e,t){if(e==t)return!1;const n=e.split("."),o=t.split(".");for(const s of[0,1,2]){const r=parseInt(n[s]),a=parseInt(o[s]);if(r!=a)return r<a}return!1}function rn(e,t,n=10){let o=t*1e3/n,s=setInterval(()=>{e(),o--,o<0&&clearInterval(s)},n)}function an(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}var Mo=_("./resources/bookmarkSaved.svg"),To=_.n(Mo),Bo=_("./resources/bookmarkUnsaved.svg"),Ro=_.n(Bo),Do=_("./src/modules/bookmark.less");const nt=new de;nt.register(document),nt.addStyle(Do.A);function bt(e,t,n=!1,o){const s=v.SAVED_BOOKMARK_COMMENTS.get();if(s==d.Disabled||t==null||e.hasAttribute("pp-bookmark-rendered"))return;const r=t.querySelector(".save-comment-menu-button");let a=o!=null?!0:r.querySelector(".text-body-2")?.textContent=="Remove from saved";const l=e.querySelector("shreddit-comment-action-row").shadowRoot;if(s==d.WhenUpvoted&&(r.addEventListener("click",()=>{bt(e,t,!0,!0)},{once:!0}),l.querySelector("button[upvote]")?.addEventListener("click",()=>{bt(e,t,!0)},{once:!0})),s==d.Always||a||n){e.toggleAttribute("pp-bookmark-rendered",!0),nt.register(l);const w=l.querySelector("button[downvote]"),f=ln(w,r,a);w.parentElement.after(f)}}async function St(e,t=!1,n){const o=v.SAVED_BOOKMARK_POSTS.get();if(o==d.Disabled||e.hasAttribute("pp-bookmark-rendered"))return;const s=await A(()=>e.querySelector("shreddit-post-overflow-menu")?.shadowRoot?.querySelector("rpl-dropdown")?.querySelector("faceplate-menu"),g*2);if(!s)return;let r=s.querySelector("#post-overflow-save");if(!r)return;let a=n!=null?!0:r?.querySelector(".text-body-2")?.textContent=="Remove from saved";if(o==d.WhenUpvoted&&(r.addEventListener("click",()=>{St(e,!0,!0)},{once:!0}),A(()=>e.shadowRoot?.querySelector("button[upvote]")).then(l=>{l?.addEventListener("click",()=>{St(e,!0)},{once:!0})})),o==d.Always||a||t){e.toggleAttribute("pp-bookmark-rendered",!0);const l=e.shadowRoot.querySelector("button[downvote]"),w=Qe("span");w.className="p-0 button-shell overflow-visible font-semibold flex items-center cursor-auto flex flex-row justify-center items-center h-xl font-semibold relative text-label-2 button-secondary button-activated inline-flex items-center",l.parentElement?.parentElement?.parentElement?.after(w);const f=ln(l,r,a);w.append(f)}}function ln(e,t,n){const o=e.cloneNode(!0);o.classList.add("pp_bookmark_button"),o.removeAttribute("disabled"),o.removeAttribute("downvote"),o.removeAttribute("data-action-bar-action");function s(r,a){A(()=>o.querySelector(`rpl-icon[name="${a}"]`)?.shadowRoot?.querySelector("svg"),g).then(l=>{if(!l)return;const w=U(r,16,16);l.replaceWith(w)})}return s(To(),"downvote-fill"),s(Ro(),"downvote"),o.setAttribute("aria-pressed",n.toString()),o.addEventListener("click",()=>{n=!n,o.setAttribute("aria-pressed",n.toString())}),o.append(t),t.classList.add("pp_bookmark_hiddenButton"),o}var Po=_("./src/modules/collapseAwards.less");const Ct=new de;Ct.register(document),Ct.addStyle(Po.A);async function dn(e,t){const n=v.COLLAPSE_AWARDS.get();if(n==E.Default)return;const o=t==i.Comment?()=>e.querySelector("award-button"):()=>e.shadowRoot?.querySelector("award-button");let s=await A(o,g*2);if(s!=null){if(n==E.RemoveCompletely){s.remove();return}if(s.getAttribute("count")=="0"){t==i.Post&&Ct.register(e.shadowRoot);const r=t==i.Comment?e.querySelector("shreddit-comment-action-row")?.shadowRoot:e?.shadowRoot,a=await A(()=>r?.querySelector("button[upvote]"),g);if(a==null)return;s.classList.toggle("pp_awardButton_hidden",ot(a)),s.classList.toggle("pp_awardButton_collapsed",ot(a)),setTimeout(()=>{s.classList.add("pp_awardButton")},500),a.addEventListener("click",()=>{s.classList.toggle("pp_awardButton_hidden",ot(a)),setTimeout(()=>{s.classList.toggle("pp_awardButton_collapsed",ot(a))},10)})}}}function ot(e){return e.getAttribute("aria-pressed")!="true"}class F{}F.COMMENTS_CURRENT_SORT="COMMENTS_CURRENT_SORT",F.SUB_FILTER="SUB_FILTER",F.CONTENT_FILTERS="CONTENT_FILTERS",F.PROFILE_MENU_ELEMENTS="PROFILE_MENU_ELEMENTS";const Z=new q("PREFS");class ka{}class Ua{}function xt(e,t,n){return je.get(e)[n]?.includes(t)??!1}function We(e,t,n,o){const s=je.get(e);let r=s[n];(r==null||r==null)&&(r=[]),o?r.push(t):r=r.filter(a=>a!=t),s[n]=r,je.set(e,s)}function yt(e,t,n,o=!1){const s=c(e,"a","no-decoration");s.href="/r/"+t+"/?f=flair_name%3A%22"+n.text+"%22";const r=c(s,"span",["bg-tone-4","inline-block","truncate","max-w-full","text-12","font-normal","box-border","px-[6px]","pp_flair","leading-4","max-w-full","py-xs","!px-sm","leading-4","h-xl","inline-flex"]);o&&(r.className="bg-tone-4 inline-block truncate max-w-full text-12 font-normal align-text-bottom box-border px-[6px] rounded-5 leading-4  relative top-[-0.25rem] xs:top-[-2px] my-2xs xs:mb-sm py-0 "),r.classList.add(n.color=="light"?"text-global-white":"text-global-black"),r.style.backgroundColor=n.background;for(const a of n.richtext){if(a.e=="text"){const l=document.createTextNode(a.t);r.appendChild(l)}if(a.e=="emoji"){const l=document.createElement("faceplate-img");l.classList.add("flair-image"),l.setAttribute("loading","lazy"),l.setAttribute("width","16"),l.setAttribute("height","16"),l.setAttribute("src",a.u),l.setAttribute("alt",a.a),r.appendChild(l)}}if(n.richtext.length==0){const a=document.createTextNode(n.text);r.appendChild(a)}}var Io=_("./src/modules/subs/flairBar.less");I.addStyle(Io.A);let At=!1;async function cn(e){if(v.FLAIR_BAR.isDisabled())return;let t=await A(()=>e?.querySelector("shreddit-title")?.parentElement,g);if(t==null)return;const n=e?.querySelector("community-highlight-carousel");n!=null&&(t=n);const o=t.parentElement?.querySelector(".pp_flairBar")?.parentElement;o?.remove();const s=Oe();if(s==null)return;const r=await Tt.getWithLoader(s),a=je.get(s);if(r.flairs==null||r.flairs.length==0)return;const l=document.createElement("div");t.before(l);const w=c(l,"div","pp_flairBar");n!=null&&w.classList.add("pp_flairBar_highlights");const f=c(w,"ul",["p-0","m-0","list-none","gap-xs","flex","flex-row","pp_flairBar_list"]);let u=0;for(const W of r.flairs){if(a.hidden!=null&&a.hidden.includes(W.text))continue;const K=c(f,"li","max-w-full");yt(K,s,W),u++}if(u==0){l.remove();return}const p=document.createElement("div");p.classList.add("pp_flairBar_bordersContainer"),l.prepend(p);const m=c(p,"div","pp_flairBar_preBorder"),y=c(m,"div",["pp_flairBar_border","pp_flairBar_border_left"]);y.textContent=" ";const O=c(p,"div","pp_flairBar_preBorder"),M=c(O,"div",["pp_flairBar_border","pp_flairBar_border_right"]);M.textContent=" ";const T=document.createElement("hr");T.classList.add("border-0","border-b-sm","border-solid","border-b-neutral-border-weak"),l.prepend(T);const L=document.createElement("div");L.classList.add("my-xs","mx-2xs0"),l.prepend(L),f.style.left="25px";const P=f.getBoundingClientRect(),j=w.getBoundingClientRect();w.addEventListener("mousemove",W=>{ko(W,f,w)}),P.width>j.width*1.72&&f.classList.add("pp_flairBar_listSmoothed")}function ko(e,t,n){At||(At=!0,requestAnimationFrame(()=>{const o=t.getBoundingClientRect(),s=n.getBoundingClientRect();if(o.width<s.width){t.style.left="25px";return}let r=(e.clientX-(s.x+25))/(s.right-25-(s.x+25));r=Math.max(0,Math.min(r,1)),t.style.left=`${Math.round(25-(o.width-s.width+50)*r)}px`,At=!1}))}var Uo=_("./resources/settingsArrow.svg"),Ot=_.n(Uo),Wo=_("./src/utils/UI/options.less");I.addStyle(Wo.A);function st(e,t,n,o){let s=t;const r=c(e,"div","pp_ui_options"),a=c(r,"div",["pp_ui_options_arrow","pp_ui_options_inversed","button","button-plain","button-medium","px-[var(--rem8)]"]),l=U(Ot(),20,20);a.append(l);const w=c(r,"div","pp_ui_options_container"),f=c(w,"span",["text-secondary","font-normal"]);let u=n[0],p=u.length;for(const P of n)P.length>p&&(u=P,p=P.length);f.textContent=u;const m=f.getBoundingClientRect();f.style.minWidth=`${m.width}px`,f.textContent=n[t];const y=c(w,"span",["pp_ui_options_dots","text-secondary","font-normal"]);y.textContent=L();const O=c(r,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),M=U(Ot(),20,20);O.append(M),a.addEventListener("click",P=>{s--,s<0&&(s=n.length-1),T()}),O.addEventListener("click",P=>{s++,s>=n.length&&(s=0),T()});function T(){f.textContent=n[s],y.textContent=L(),o(s)}function L(){let P=0,j="";for(;P<n.length;)j+=P==s?"\u2022":"\u25E6",P++;return j}return r}var jo=_("./src/utils/UI/toggle.less");I.addStyle(jo.A);function re(e,t,n){const o=c(e,"div","pp_ui_toggle"),s=c(o,"button","pp_ui_toggle_button");s.classList.toggle("pp_ui_toggle_active",t),c(s,"div","pp_ui_toggle_knob");let r=t;return s.addEventListener("click",()=>{r=!r,s.classList.toggle("pp_ui_toggle_active",r),n(r)}),o}var No=_("./resources/windowCloseButton.svg"),Fo=_.n(No),Ho=_("./src/utils/window.less");I.addStyle(Ho.A);let ne=[];function Ko(){for(;ne.length>0;)ne[ne.length-1].close()}class fe{constructor(t,n,o=null){this.tittleContent=t,this.render=n,this.onClose=o}build(){this.container=document.createElement("div"),this.container.classList.add("pp_window_container");let t=!1;this.container.addEventListener("mousedown",a=>{t=a.target==this.container}),this.container.addEventListener("click",a=>{t&&a.target==this.container&&this.close()});const n=c(this.container,"div","pp_window"),o=c(n,"div","pp_window_tittleContainer"),s=c(o,"div",["pp_window_tittle","flex","flex-row"]);this.tittle=c(s,"span",["text-24","font-semibold"]),this.tittle.textContent=this.tittleContent,this.closeButton=c(o,"div",["pp_window_closeButton","flex","items-center"]),this.closeButton=c(this.closeButton,"button",["button","icon","inline-flex","items-center","justify-center","button-small","button-secondary","px-[var(--rem6)]"]),this.closeButton.setAttribute("tittle",`Close ${this.tittleContent}`),this.closeButton.addEventListener("click",a=>{this.close()}),this.closeButton=c(this.closeButton,"span",["flex","items-center","justify-center"]),this.closeButton=c(this.closeButton,"span",["flex"]);const r=U(Fo(),16,16,{strokeColor:H});this.closeButton.append(r),c(n,"hr","border-b-neutral-border-weak"),this.content=c(n,"div","pp_window_content"),c(n,"div","pp_window_footer").textContent=" "}open(t=null){this.container||this.build();for(const n of ne)n.container?.remove();ne.push(this),document.body.appendChild(this.container),document.documentElement.style.overflow="hidden",this.render(this,t)}close(){for(this.container.remove(),ne.splice(ne.findIndex(t=>t==this),1),ne.length<=0&&(document.documentElement.style.overflow="visible");this.content?.firstChild;)this.content.removeChild(this.content.firstChild);if(ne.length>0){const t=ne[ne.length-1];document.body.appendChild(t.container)}this.onClose?.()}}var Go=_("./src/modules/subs/flairWindow.less");I.addStyle(Go.A);const Vo=new fe("Flairs settings",qo,zo);class Wa{}const Xo=["Show","Blur","Hide"];function qo(e,t){const n=c(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=c(n,"div","pp_window_elementsContainer"),s=Tt.get(t.sub);for(const r of s.flairs){const a=c(o,"div",["pp_window_element","pp_flairWindow_flair"]),l=c(a,"div","pp_flairWindow_flairContainer");yt(l,t.sub,r);const w=c(a,"span");w.textContent="Flairs bar:",re(a,!xt(t.sub,r.text,un),y=>{We(t.sub,r.text,un,!y)});const f=c(a,"span");f.textContent="Feed:";const u=xt(t.sub,r.text,Lt),m=xt(t.sub,r.text,Mt)?2:u?1:0;st(a,m,Xo,y=>{We(t.sub,r.text,Lt,!1),We(t.sub,r.text,Mt,!1),y==1&&We(t.sub,r.text,Lt,!0),y==2&&We(t.sub,r.text,Mt,!0)})}}function zo(){const e=document.body.querySelector("#main-content");e&&cn(e)}var $o=_("./src/modules/subs/subs.less");I.addStyle($o.A);const un="hidden",Lt="blured",Mt="banned";class ja{}class Na{}const je=new q("FLAIRS"),Tt=new q("SUBS",{isCleanupable:!0,validator:Zo,loader:Yo});function Zo(e){return e.flairs==null}async function Yo(e){let t={};t.flairs=[];const{status:n,result:o}=await wt(`/r/${e}/api/link_flair_v2.json`);if(o!=null&&o.message==null){for(const s of o){const r={text:s.text,color:s.text_color,background:s.background_color,richtext:s.richtext};t.flairs.push(r)}return t}return t}function Oe(){const e=window.location.href.split("reddit.com/r/");return e.length<2?(N(`Failed to get sub name from: ${window.location.href}`),null):e[1].split("/")[0]}async function Qo(e){await A(()=>e.querySelector("shreddit-feed-error-banner"),g)!=null&&(Jo(e),cn(e),es(e),ts(e))}async function Jo(e){const t=await A(()=>e.parentElement?.parentElement?.querySelector(".masthead"));!t||z(t)||(t.querySelector("section")?.classList.add("pp_mastheadSection"),document.body.addEventListener("click",ns))}async function es(e){if(v.COLLAPSE_HIGHLIGHTS.isDisabled())return;const t=await A(()=>e?.querySelector("community-highlight-carousel")?.shadowRoot?.querySelector("button"),g*5);t?.click()}async function ts(e){if(v.HIDE_COMMUNITY_RECOMMENDATIONS.isDisabled())return;const t=await A(()=>e?.querySelector("in-feed-community-recommendations"),g*5);t?.remove()}function ns(e){const t=e.target;if(!t.matches("shreddit-subreddit-header-buttons")||z(t))return;const n=t.shadowRoot?.querySelector("shreddit-subreddit-overflow-control")?.shadowRoot?.querySelector("faceplate-menu"),o=n?.querySelector("li");if(!n||!o){N("Failed to render subreddit context menu");return}const s=o.cloneNode(!0);w(s,"Flairs settings"),n.prepend(s);const r=Oe();s.addEventListener("click",()=>{Vo.open({sub:r})});const a=document.createElement("a");a.href="https://www.reddit.com/"+t.getAttribute("prefixed-name")+"/about/",a.classList.add("no-underline"),n.prepend(a);const l=o.cloneNode(!0);w(l,"About"),a.prepend(l);function w(f,u){const p=f.querySelector(".text-body-2");p&&(p.textContent=u)}}const os=new fe("Hidden content",ss,rs);function ss(e,t){const n=c(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=c(n,"div","pp_window_elementsContainer");o.style.margin="20px 100px";for(const s of Le)o.prepend(s)}function rs(){for(const e of Le)e.remove()}var is=_("./resources/hiddenIco.svg"),Ne=_.n(is),as=_("./src/modules/filters/hiddenContent.less");I.addStyle(as.A);const Le=new Array;let Me=0,Te=0,Bt=null,$=null,Rt=null,Dt=null,Pt=null;function ls(e){Le.push(e),Me++,Le.length>parseInt(v.FILTERED_CONTENT_MAX_COUNT.get())&&Le.splice(0,1),_n()}function ds(){$!=null&&($.remove(),Le.length=0,Me=0,Te=0)}async function cs(){Dt=await A(()=>document.body.querySelector(".main-container")),Pt=await A(()=>document.body.querySelector("#right-sidebar-contents")),$==null?($=Qe("div",["pp_hiddenContent_button","text-neutral-content-weak"]),se($,Ne(),16,16,{strokeColor:G,fillColor:H}),Rt=c($,"span"),window.addEventListener("resize",e=>{pn()}),$.addEventListener("click",e=>{os.open()})):$.classList.toggle("pp_hiddenContent_button_visible",!1),Dt?.parentElement?.parentElement?.append($),setTimeout(()=>{$.classList.add("pp_hiddenContent_button_visible")},250)}function us(){const t=Me-Te;return t>0?250/t:250}async function _n(){($==null||$.parentElement==null)&&await cs(),Me==1?(Rt.textContent="1 post",Te=1):Te<Me&&Bt==null&&(Bt=setTimeout(()=>{Te++,Rt.textContent=`${Te} posts`,Bt=null,_n()},us())),pn()}function pn(){const e=v.WIDE_MODE.isEnabled(),t=$.getBoundingClientRect().width+10,n=e?Dt.getBoundingClientRect().right:Pt.getBoundingClientRect().right,o=e?Pt.getBoundingClientRect().left:window.innerWidth-16,s=Me.toString().length*3;$.style.left=`${(n+o)/2-(50+s)}px`,$.classList.toggle("pp_hiddenContent_button_visible",o-n>t)}var _s=_("./src/modules/filters/filters.less");I.addStyle(_s.A);var Q;(function(e){e[e.Hide=0]="Hide",e[e.Blur=1]="Blur",e[e.Hightlight=2]="Hightlight"})(Q||(Q={}));const ps=Object.values(Q).slice(0,Object.values(Q).length/2);class ms{}class Fa{}class mn{constructor(){this.hide=!1,this.blur=null}}let rt,It;function fn(e){let t=Z.get(F.CONTENT_FILTERS);Array.isArray(t)||(t=[]);const n=[];for(const o of t)e(o)==!0&&n.push({regExp:new RegExp(o.expression,o.action==Q.Hightlight?"gi":"i"),data:o});return n}async function fs(e){const t=!window.location.href.includes("/comments/");rt||(rt=fn(s=>s.posts==!0));const n=new mn;if(n.isPost=!0,kt(e.querySelector('a[slot="title"]'),rt,n),e.querySelector('a[slot="text-body"]')?.querySelectorAll("p")?.forEach(s=>{kt(s,rt,n)}),t&&n.hide){o();return}if(t){const s=await A(()=>e.getAttribute("pp_flair"),g*3),r=En(e),a=je.get(r);if(s&&s.length>0&&((a.banned?.includes(s)??!1)&&(n.hide=!0),a.blured?.includes(s)??!1)){const w=Tt.get(r).flairs?.find(f=>f.text==s);n.blur==null&&w&&(n.blur={text:s,color:w.background})}}t&&n.hide?o():t&&n.blur!=null&&hn(e,n);async function o(){const s=await A(()=>e.parentElement.nextElementSibling,g);e.remove(),s?.matches("hr")&&s.remove(),v.SHOW_FILTERED_CONTENT.isEnabled()&&ls(e)}}function kt(e,t,n){const o=e?.textContent;if(!(o==null||o.length==0))for(const s of t){if(s.data.action==Q.Blur&&n.blur!=null||s.data.action==Q.Hide&&n.hide)continue;const r=s.regExp.exec(o);if(r!=null&&r.length>0){switch(s.data.action){case Q.Hide:n.hide=!0;break;case Q.Blur:n.blur={text:gs(r),color:s.data.color};break}vs(r,s.data,e)}}}function hs(e,t){It||(It=fn(s=>s.comments==!0));const n=new mn;t.querySelectorAll("p").forEach(s=>{kt(s,It,n)}),n.hide?o():n.blur!=null&&hn(t,n);function o(){e.classList.add("pp_hidden_comment");const s=c(e,"div"),r=c(s,"div",["pp_hidden_button","button","button-plain-weak","button-small"]),a=U(Ne(),16,16,{strokeColor:G,fillColor:H});r.append(a);const l=c(r,"span");l.textContent="Show a hidden comment",r.addEventListener("click",()=>{e.classList.toggle("pp_hidden_comment",!1),s.remove()},{once:!0}),e.prepend(s)}}function gs(e){e.length>1&&e.sort((n,o)=>n.length-o.length);let t=e[0].trim();return t.length>50?`${t.slice(0,48).trimEnd()}...`:t}function hn(e,t){e.classList.add("pp_blured_content_animator"),e.classList.add("pp_blured_content");const n=xe(e,"div","pp_blured_content_area"),o=xe(e.parentElement,"div","pp_blured_button_container"),s=c(o,"div","pp_blured_button");s.style.backgroundColor=t.blur.color+"55",t.isPost&&(s.style.top="20px");const r=c(s,"div","pp_blured_button_content"),a=se(r,Ne(),16,16,{strokeColor:G,fillColor:H}),l=c(r,"span");l.textContent=t.blur.text,n.addEventListener("click",()=>{e.classList.toggle("pp_blured_content",!1),o.remove(),n.remove()},{once:!0})}function vs(e,t,n){let o=n.innerHTML;const s=new Set(e);for(const r of s){const a=o.split(r);if(a.length>1){o=a[0];let l=1;for(;l<a.length;)o+=`<span style="border-radius: 6px; background-color: ${t.color}88;">${r}</span>`,o+=a[l],l++}}n.innerHTML=o}class Ha{}class Ka{}class Es{constructor(){this.canvas=null,this.mouse={x:0,y:0},this.drag={enabled:!1,start:{x:0,y:0},current:{x:0,y:0},scale:1},this.scrollImage=this.scrollImage.bind(this),this.startDrag=this.startDrag.bind(this),this.mouseMove=this.mouseMove.bind(this),this.endDrag=this.endDrag.bind(this)}setImage(t){t!=this.canvas&&(this.canvas&&this.clearImage(),window.addEventListener("wheel",this.scrollImage,{passive:!1}),t.addEventListener("mousedown",this.startDrag),document.addEventListener("mousemove",this.mouseMove),t.addEventListener("mouseup",this.endDrag),t.addEventListener("mouseleave",this.endDrag),t.ondragstart=function(){return!1},this.drag.current={x:0,y:0},this.drag.scale=1,this.canvas=t,this.updateTransform())}clearImage(){window.removeEventListener("wheel",this.scrollImage),this.canvas?.removeEventListener("mousedown",this.startDrag),document.removeEventListener("mousemove",this.mouseMove),this.canvas?.removeEventListener("mouseup",this.endDrag),this.canvas?.removeEventListener("mouseleave",this.endDrag),this.canvas=null}updateTransform(){this.canvas.style.transform=`translate(${this.drag.current.x}px, ${this.drag.current.y}px) scale(${this.drag.scale}, ${this.drag.scale})`}startDrag(t){this.drag.start.x=t.screenX-this.drag.current.x,this.drag.start.y=t.screenY-this.drag.current.y,this.drag.enabled=!0,this.canvas.classList.toggle("pp_image_drag",!0)}mouseMove(t){this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.drag.enabled&&(this.drag.current.x=t.screenX-this.drag.start.x,this.drag.current.y=t.screenY-this.drag.start.y,this.updateTransform())}endDrag(){this.fit(1),this.drag.enabled=!1,this.canvas.classList.toggle("pp_image_drag",!1)}scrollImage(t){const n=Math.max(1,1+Math.log2(this.drag.scale*this.drag.scale)),o=this.drag.scale;this.drag.scale=Math.max(.5,this.drag.scale+-t.deltaY/1e3*n);const s=this.canvas.getBoundingClientRect(),r=s.height/2,a=s.width/2,l=s.y+r,w=s.x+a,f=this.drag.scale/o-1;this.drag.current.y-=Math.min(Math.max(this.mouse.y-l,-r),r)*f,this.drag.current.x-=Math.min(Math.max(this.mouse.x-w,-a),a)*f,t.deltaY>0&&(this.drag.current.y/=1.1,this.drag.current.x/=1.1),this.fit(.33),t.preventDefault()}fit(t){const o=this.canvas.getBoundingClientRect(),s=0-o.left,r=o.right-window.innerWidth+0;s>0&&r<0?this.drag.current.x+=(o.width>window.innerWidth?-r:s)*t:s<0&&r>0&&(this.drag.current.x+=(o.width>window.innerWidth?s:-r)*t);const a=0-o.top,l=o.bottom-window.innerHeight+0;a>0&&l<0?this.drag.current.y+=(o.height>window.innerHeight?-l:a)*t:a<0&&l>0&&(this.drag.current.y+=(o.height>window.innerHeight?a:-l)*t),this.updateTransform()}}const Fe=new Es;var ws=_("./resources/imageCloseButton.svg"),bs=_.n(ws);class Ss{constructor(){this.openned=!1}open(t){this.openned||(this.openned=!0,this.lightbox==null&&this.build(),this.target.src=t,this.background.src=t,Fe.setImage(this.target),document.body.appendChild(this.lightbox))}close(){this.lightbox.remove(),Fe.clearImage(),this.target.src="",this.background.src="",this.container.classList.toggle("pp_image_drag",!1),this.openned=!1}build(){this.lightbox=document.createElement("div"),this.lightbox.classList.add("pp_customLightbox"),this.lightbox.dataset.open=String(!1),this.background=c(this.lightbox,"img",["pp_customLightbox_background","post-background-image-filter","opacity-30","object-cover","scale-[1.2]"]);const t=c(this.lightbox,"button");t.className="absolute top-sm end-sm z-10 opacity-100 button-large px-[calc(var(--rem16)-var(--button-border-width,0px))] button-media items-center justify-center button inline-flex";const n=c(t,"span");n.className="flex items-center justify-center";const o=c(n,"span");o.className="flex items-center gap-xs",se(o,bs(),20,20,{strokeColor:H}),this.container=c(this.lightbox,"div","pp_customLightbox_container"),this.target=c(this.container,"img",["pp_customLightbox_target","pp_lightbox_target"]),this.target.alt="Zoomable image",this.target.ondragstart=function(){return!1},t.addEventListener("click",()=>{this.close()}),v.LIGHTBOX_CLOSE.isEnabled()&&(this.background.classList.add("pp_image_pointer"),this.lightbox.addEventListener("click",s=>{s.target!=this.target&&this.close()}))}}const Ut=new Ss;class Ga{}const gn=new q("USERS",{isCleanupable:!0,validator:Cs,loader:xs});function Cs(e){return e.accountId==null}async function xs(e){let t={};if(e=="[deleted]")return t.banned=!0,t;const{status:n,result:o}=await wt(`/user/${e}/about.json`);return n!=404&&o==null?t:n==404||o.data?.is_suspended==!0||o.data?.is_blocked==!0?(t.banned=!0,t):(t.rating=(o.data?.link_karma??0)+(o.data?.comment_karma??0),o.data?.subreddit?.title&&(t.nick=o.data.subreddit.title),t.created=o.data?.created??0,t.accountId=o.kind+"_"+o.data?.id,t)}function vn(){const e=window.location.href.split("reddit.com/user/");return e.length>1?e[1].split("/")[0]:null}var ys=_("./resources/comments/bannedUser.svg"),As=_.n(ys),Os=_("./resources/comments/newUser.svg"),Ls=_.n(Os);const Ms=S*64,He=[];async function Wt(e,t,n){const o=v.USERNAME_MODE.get();if(v.USER_INFO.isDisabled()&&o==ue.ProfileName)return;const{commentMeta:s,nickName:r,tagsAnchor:a,infoAnchor:l}=n;await new Promise(f=>{He.push(f),He.length==1&&f()});const w=await gn.getWithLoader(e,f=>{if(He.shift(),He.length>0){const u=He[0];u()}});if(o!=ue.ProfileName&&w.nick){const f=parseInt(v.USERNAME_MAX_SIMBOLS.get());if(r.textContent=f<=0||w.nick.length<f?w.nick:w.nick.slice(0,f-2)+"...",o==ue.Both)if(e==r.textContent)r.textContent=`u/${r.textContent}`;else if(t==i.Comment){const u=s?.querySelector("author-flair-event-handler")?.parentElement;if(u){const p=xe(u,"div",["font-bold","text-neutral-content-strong","text-12"]);p.textContent=`u/${e}`,p.style.color="#696969"}}else{const u=xe(r.parentElement,"div");u.textContent=`| u/${e}`,r.after(u)}}if(v.USER_INFO.isEnabled()){const f=document.createElement("div");if(f.classList.add("text-neutral-content-weak","text-12"),w.rating!=null){f.textContent=w.rating<1e4?`${Math.round(w.rating/100)/10}K`:`${Math.round(w.rating/1e3)}K`,l.after(f);const u=document.createElement("span");t==i.Comment?u.classList.add("inline-block","my-0","mx-2xs","text-12","text-neutral-content-weak"):u.classList.add("inline-block","my-0","created-separator","text-neutral-content-weak"),u.textContent="\u2022",f.after(u)}if(w.created!=null&&w.created>Date.now()/1e3-Ms){const u=U(Ls(),20,20,{viewBox:"-2 -2 20 20"});a.before(u)}if(w.banned!=null&&w.banned){const u=U(As(),20,20,{viewBox:"-2 -2 20 20"});a.before(u)}}}var Ts=_("./resources/postUnwrapButton.svg"),Bs=_.n(Ts),Rs=_("./src/modules/posts/posts.less"),Ds=_("./src/modules/posts/postsBackplates.less"),Ps=_("./src/modules/posts/shareButton.less");const it=new de;it.addStyle(Rs.A),it.register(document);const jt=new de;jt.addStyle(Ps.A),jt.register(document);class Va{}const Is=new q("POSTS",{isCleanupable:!0,validator:ks,loader:Us});function ks(e){return e.flair==null}async function Us(e){let t={};const n=e.split(":"),{status:o,result:s}=await wt(`/r/${n[0]}/comments/${n[1]}.json`);if(s!=null&&s.message==null){for(const r of s)for(const a of r.data.children)if(a.kind=="t3")return t.flair={text:a.data.link_flair_text,color:a.data.link_flair_text_color,background:a.data.link_flair_background_color,richtext:a.data.link_flair_richtext},t}return t}v.BACKPLATES.isEnabled()&&it.addStyle(Ds.A);async function he(e){if(z(e))return;const t=await A(()=>e.shadowRoot,g*4);if(!t){N(`${e.getAttribute("permalink")} wasn't loaded properly, waiting for loading...`),new MutationObserver((n,o)=>{he(e),o.disconnect()}).observe(e,{childList:!0});return}if(it.register(t),nt.register(t),Ws(e),fs(e),Ns(e),Fs(e),js(e),St(e),dn(e,i.Post),v.SELECTABLE_POSTS.isEnabled()){const n=e.querySelector('a[slot="full-post-link"]');n?.remove();const o=await A(()=>e.querySelector('a[slot="title"]'),g);o&&(o.classList.add("pp_post_tittle"),n&&n.getAttribute("target")=="_blank"&&o.setAttribute("target","_blank"))}}function En(e){return e.getAttribute("subreddit-prefixed-name").replace("r/","")}async function Ws(e){const t=En(e),n=await A(()=>e.querySelector("shreddit-post-flair"),g),o=await A(()=>n?.querySelector("a"),20);let s="";if(o==null){if(v.FLAIR_SHOW_ALWAYS.isEnabled()&&n){const r=e.getAttribute("permalink")?.split("/");if(r==null||r.length<5){N(`Unable to parse post permalink: ${e.getAttribute("permalink")}`);return}const a=r[2]+":"+r[4],l=await Is.getWithLoader(a);l.flair!=null&&l.flair.text!=null&&yt(n,t,l.flair,!0),s=l.flair?.text??""}}else{const r=o.href?.split("%22");s=r!=null&&r.length>1?decodeURIComponent(r[1]):""}e.setAttribute("pp_flair",s)}async function js(e){if(e.getAttribute("view-context")=="CommentsPage")(await A(()=>e.querySelector(".share-dropdown-menu")))?.classList.add("pp_post_shareButton");else{const t=await A(()=>{const n=e.shadowRoot?.querySelector("shreddit-post-share-button")?.shadowRoot,o=n?.querySelector("button");return n&&o?[n,o]:null});if(t){const[n,o]=t;jt.register(n),o.classList.add("pp_post_shareButton")}}}async function Ns(e){const t=e.getAttribute("author"),n=e.getAttribute("view-context");if(n=="AggregateFeed"||n=="CustomFeed"){if(v.SHOW_POST_AUTHOR.isDisabled())return;const o=await A(()=>e.querySelector('span[slot="credit-bar"]')?.querySelector(".created-separator"),g);if(!o)return;const s=document.createElement("a");s.classList.add("flex","items-center","text-neutral-content","visited:text-neutral-content-weak","a","cursor-pointer","no-visited","no-underline","hover:no-underline"),s.setAttribute("href",`/user/${t}/`),o.before(s);const r=c(s,"div",["text-neutral-content-weak","text-12"]);r.textContent=t;const a=document.createElement("span");a.classList.add("inline-block","my-0","created-separator","text-neutral-content-weak"),a.textContent="\u2022",s.before(a),Wt(t,i.Post,{nickName:r,tagsAnchor:o,infoAnchor:o})}else{const o=await A(()=>e.querySelector('[slot="credit-bar"]'),g),s=await A(()=>o?.querySelector('span[slot="authorName"]')?.querySelector("a")?.querySelector(".whitespace-nowrap"),g),r=o?.querySelector(".created-separator");if(!r||!s)return;Wt(t,i.Post,{nickName:s,tagsAnchor:r,infoAnchor:r})}}async function Fs(e){if(window.location.href.includes("/comments/")){wn(e,!1);return}const t=await A(()=>e.querySelector(".feed-card-text-preview"),g);if(t==null)return;v.SELECTABLE_POSTS.isEnabled()&&t.parentElement.parentElement.removeAttribute("href"),t.classList.remove("feed-card-text-preview");const n=e.querySelector('a[slot="text-body"]');n?.classList.toggle("pointer-events-none",!1);for(const o of t.childNodes)if(o instanceof Element&&o.matches("object")){const s=o.querySelector("a")?.href;if(s!=null){const r=document.createElement("faceplate-img");r.setAttribute("src",s),r.setAttribute("loading","eager"),r.setAttribute("sizes","(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw"),r.className="block w-fit my-0 mx-auto max-w-[100%]",o.replaceWith(r)}}wn(e,!0),Hs(e,t)}async function wn(e,t){v.LIGHTBOX.isDisabled()||(t?await A(()=>e.querySelector("faceplate-img"),g)!=null&&e.querySelectorAll("faceplate-img").forEach(o=>{const s=o.getAttribute("src");let r=o.shadowRoot?.querySelector("img");r?.classList.add("pp_image_pointer"),o.addEventListener("click",()=>{Ut.open(s)})}):e.querySelectorAll('figure[class="rte-media"]').forEach(n=>{const o=n.querySelector("a"),s=o.href;o.removeAttribute("href");let r=n.querySelector("img");r==null&&(r=n.querySelector("shreddit-player-2")),r.classList.add("pp_image_pointer"),o.addEventListener("click",()=>{Ut.open(s)})}))}async function Hs(e,t){const n=await A(()=>e.shadowRoot,g);if(!n)return;const o=t.getBoundingClientRect().height;t.classList.add("pp_post_noWrap");const s=t.getBoundingClientRect().height;if(t.classList.remove("pp_post_noWrap"),s>o+5){const r=c(e,"div","pp_post_unwrapContainer");n.append(r);const a=c(r,"div","pp_post_unwrapButton"),l=U(Bs(),25,25);a.append(l),a.addEventListener("click",()=>{t.classList.add("pp_post_noWrap"),r.remove()},{once:!0})}}var D;(function(e){e[e.Sub=0]="Sub",e[e.Home=1]="Home",e[e.Popular=2]="Popular",e[e.All=3]="All",e[e.Custom=4]="Custom"})(D||(D={}));const Ks=new RegExp("www.reddit.com/user/.*/m/");function Nt(){return window.location.href.includes("?feed=home")||window.location.href=="https://www.reddit.com/"?D.Home:window.location.href.includes("reddit.com/r/popular/")?D.Popular:window.location.href.includes("reddit.com/r/all/")?D.All:Ks.test(window.location.href)?D.Custom:D.Sub}function Xa(e){return e==D.Sub||e==D.Custom}var Gs=_("./src/utils/changesObserver.less");I.addStyle(Gs.A);class Ft{constructor(){this.changes=0}CreateSource(t){return new Xs(this,t)}Reset(){this.changes=0}HasChanges(){return this.changes!=0}OnChange(t){this.changes+=t,this.bannerContainer?.classList.toggle("pp_changesBanner_active",this.HasChanges())}RenderBanner(t){if(this.bannerContainer)t.append(this.bannerContainer),this.bannerContainer.classList.toggle("pp_changesBanner_active",!1);else{this.bannerContainer=c(t,"div","pp_changesBannerContainer");const n=c(this.bannerContainer,"div","pp_changesBanner");n.textContent="Page will be reloaded to apply new settings"}}}class Vs{constructor(t){this.observer=t}}class Xs extends Vs{constructor(t,n){super(t),this.isChanged=!1,this.defaultValue=n}Capture(t){this.defaultValue!=t&&!this.isChanged&&(this.isChanged=!0,this.observer.OnChange(1)),this.defaultValue==t&&this.isChanged&&(this.isChanged=!1,this.observer.OnChange(-1))}}const bn=new Map([[D.Sub,{tittle:"Subreddits",descriptionLabel:"Subreddits",isOverridable:!0,isOptional:!0}],[D.Home,{tittle:"Home",descriptionLabel:"Home",isOverridable:!1,isOptional:!1}],[D.Popular,{tittle:"Popular",descriptionLabel:"r/Popular",isOverridable:!1,isOptional:!1}],[D.All,{tittle:"All",descriptionLabel:"r/All",isOverridable:!1,isOptional:!1}],[D.Custom,{tittle:"Custom feeds",descriptionLabel:"Custom",isOverridable:!0,isOptional:!1}]]);function qs(){if(window.location.href=="https://www.reddit.com/")return!0;if(window.location.href.includes("/?f=flair_name"))return!1;if(window.location.href.includes("?feed=home"))return window.location.href.includes("reddit.com/?feed=home");const e=window.location.href.split("/r/");if(e.length==2)return!e[1].includes("/submit")&&e[1].split("/").length<=2;const t=window.location.href.split("/m/");return t.length==2?t[1].split("/").length<=2:!1}function zs(){Sn();let e=document.location.href;const t=new MutationObserver(n=>{e!==document.location.href&&(e=document.location.href,Sn())});window.addEventListener("load",()=>{const n=document.querySelector("body");n&&(t.disconnect(),t.observe(n,{childList:!0,subtree:!0}))})}function Sn(){if(!qs())return;const e=Nt(),t=lt.get(D[e]),n=Kt.get(e);if(e==D.Sub){const o=Oe();if(!o)return;const s=Ln.get(o),r=Ke.get(o);if(r!=null){if(r.defaultSort==s||!r.redirect)return;document.location.replace(`${document.location.href}${r.defaultSort.toString().toLowerCase()}/`);return}if(!t.redirect)return;if(s!=null&&t.defaultSort!=s){document.location.replace(`${document.location.href}${t.defaultSort.toString().toLowerCase()}/`);return}}if(e==D.Custom){const o=vt(),s=o?Gt.get(o):null;if(s!=null){if(s.defaultSort==n||!s.redirect)return;document.location.replace(`${document.location.href}${s.defaultSort.toString().toLowerCase()}/`);return}}t.defaultSort!=n&&document.location.replace(`https://www.reddit.com${Tn(e,t.defaultSort)}`)}var ee;(function(e){e.Best="Best",e.Hot="Hot",e.New="New",e.Top="Top",e.Rising="Rising"})(ee||(ee={}));function Cn(e){switch(e){case D.All:case D.Custom:return Object.values(ee).filter(t=>t!=ee.Best);default:return Object.values(ee)}}var $s=_("./src/modules/feed/feedSettings/feedSettingsWindow.less");I.addStyle($s.A);const Zs=new fe("Feed sort settings",Qs,Js);class Ys{constructor(){this.key=null,this.database=null,this.data=null,this.area=null}set(t){this.data=t,this.database.set(this.key,t),this.renderArea()}isOverrided(){return this.data!=null}renderArea(){this.area?.classList.toggle("pp_feedSettings_overrideSub",this.isOverrided())}}const at=new Ft,Ht=new Map;function Qs(e,t){at.Reset(),at.RenderBanner(e.content);const n=t.location,o=bn.get(n),s=c(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),r=c(s,"div","pp_window_elementsContainer"),a=lt.get(D[n]),l=new Ys;function w(){return n==D.Custom?`${nn??l.key} custom feed`:`r/${l.key}`}if(o.isOverridable){const m=n==D.Sub;if(l.database=m?Ke:Gt,l.key=m?Oe():vt(),l.database&&l.key){l.data=l.database.get(l.key);const y=c(r,"div","pp_window_element"),O=c(y,"div","pp_settings_propertyHeader"),M=c(O,"div","pp_settings_propertyHeader_tittle");M.textContent=`Override ${w()}`;const T=c(O,"div","pp_settings_propertyHeader_description");T.textContent=`Apply settings to this ${m?"subreddit":"custom feed"} only`;const L=c(y,"div","pp_settings_propertyButtonContainer"),P=c(L,"div","pp_window_controlArea");re(P,l.isOverrided(),j=>{j?l.set({redirect:a.redirect,defaultSort:a.defaultSort,hiddenSort:[...a.hiddenSort]}):l.set(null),f(),p()})}}f();function f(){e.tittle.innerHTML=l.isOverrided()?`Feed sort: <span class="pp_feedSettings_overrideTittle">${w()}</span>`:`Feed sort: ${o.tittle}`}const u=Cn(n);p();function p(){l.area!=null&&(l.area.remove(),l.area=null),l.area=c(s,"div","pp_window_elementsContainer"),l.renderArea();const m=l.isOverrided()?l.data:a;function y(){l.isOverrided()?l.set(m):lt.set(D[n],m)}let O=null;if(o.isOptional){const T=c(l.area,"div","pp_window_element"),L=c(T,"div","pp_settings_propertyHeader"),P=c(L,"div","pp_settings_propertyHeader_tittle");P.textContent="Redirect";const j=c(L,"div","pp_settings_propertyHeader_description");j.innerHTML="By default Reddit loads the latest used sort for subs. That option forces redirect to the <b>Default sort</b>";const W=c(T,"div","pp_settings_propertyButtonContainer"),K=c(W,"div","pp_window_controlArea");re(K,m.redirect,J=>{m.redirect=J,y(),O?.classList.toggle("pp_ui_disabled",!m.redirect)})}{const T=c(l.area,"div","pp_window_element"),L=c(T,"div","pp_settings_propertyHeader"),P=c(L,"div","pp_settings_propertyHeader_tittle");P.textContent="Default sort";const j=c(L,"div","pp_settings_propertyHeader_description");j.innerHTML=`By default Reddit uses <b>${Kt.get(n)}</b> sort for <b>${o.descriptionLabel}</b> feed`;const W=c(T,"div","pp_settings_propertyButtonContainer"),K=c(W,"div","pp_window_controlArea");O=st(K,u.indexOf(m.defaultSort),u,J=>{m.defaultSort=u[J],y()}).parentElement.parentElement.parentElement,O.classList.toggle("pp_ui_disabled",!m.redirect)}const M=c(l.area,"h3","pp_settings_subtittle");M.textContent="Visible buttons",u.forEach(T=>{const L=c(l.area,"div","pp_window_element"),P=c(L,"div","pp_settings_propertyHeader"),j=c(P,"div","pp_settings_propertyHeader_tittle");j.textContent=T,L.classList.add("pp_settings_property_oneLine");const W=c(L,"div","pp_settings_propertyButtonContainer"),K=c(W,"div","pp_window_controlArea"),J=!m.hiddenSort.includes(T);let le;Ht.has(T)?(le=Ht.get(T),le.Capture(J)):(le=at.CreateSource(J),Ht.set(T,le)),re(K,J,Ye=>{Ye?m.hiddenSort=m.hiddenSort.filter(en=>en!=T):m.hiddenSort.push(T),le.Capture(Ye),y()})})}}function Js(){at.HasChanges()&&window.location.reload()}var er=_("./resources/feedButtons/feedButtonBest.svg"),xn=_.n(er),tr=_("./resources/feedButtons/feedButtonHot.svg"),nr=_.n(tr),or=_("./resources/feedButtons/feedButtonNew.svg"),yn=_.n(or),sr=_("./resources/feedButtons/feedButtonRising.svg"),rr=_.n(sr),ir=_("./resources/feedButtons/feedButtonTop.svg"),An=_.n(ir),ar=_("./resources/settingsGear.svg"),On=_.n(ar),lr=_("./src/modules/feed/feedButtons.less");I.addStyle(lr.A);const dr={Best:xn(),Hot:nr(),New:yn(),Top:An(),Rising:rr()};async function cr(e){if(v.FEED_BUTTONS.isDisabled()||window.location.href.includes("/about/")||z(e))return;const t=await A(()=>e.querySelector('shreddit-async-loader[bundlename="shreddit_sort_dropdown"]'),g);if(!t)return;const n=await A(()=>t.querySelector("shreddit-sort-dropdown"),g);if(!n||n.getAttribute("trigger-id")=="comment-sort-button")return;t.classList.add("pp_feedPanel");const o=n.parentElement.parentElement,s=Nt();s==D.Custom&&t.previousElementSibling?.className=="s:invisible"&&t.previousElementSibling.remove();const r=n.querySelector('div[slot="selected-item"]')?.textContent,a=ee[r];n.remove();let l=lt.get(D[s]);if(s==D.Sub){const m=Oe();if(m){const y=Ke.get(m);y&&(l=y),Ln.set(m,a)}}if(s==D.Custom){const m=vt(),y=m?Gt.get(m):null;y!=null&&(l=y)}const w=Cn(s);t.parentElement.className!="flex justify-between flex-wrap mb-xs mt-xs"&&(t.parentElement.style.marginBottom="1rem");const f=xe(o,"div","pp_feedPanel_buttons");for(const m of w){if(l.hiddenSort.includes(m)&&m!=a)continue;const y=c(f,"a",["text-secondary-plain-weak","font-semibold","rounded-full","hover:no-underline","hover:text-secondary-plain","hover:bg-secondary-background-hover","hover:text-secondary-content","active:bg-secondary-background"]);y.href=Tn(s,m);const O=m==a;y.classList.toggle("bg-secondary-background-selected",O),y.classList.toggle("!text-neutral-content-strong",O);const M=c(y,"span",["inline-flex","flex-row","items-center","gap-xs","py-[var(--rem10)]","leading-5","font-14"]);let T=dr[m];if(T!=null){let P=U(T,16,16);M.append(P)}const L=c(M,"span");L.textContent=m}const u=c(o,"div","pp_feedPanel_settings_container"),p=c(u,"div","pp_feedPanel_settings");se(p,On(),18,18),p.addEventListener("click",m=>{Zs.open({location:s})})}class qa{}const Kt=new Map([[D.Home,ee.Best],[D.Popular,ee.Best],[D.All,ee.Hot],[D.Sub,ee.Best],[D.Custom,ee.Hot]]),lt=new q("DEFAULT_FEED_DATA",{factory:function(e){const t=D[e];return{redirect:!bn.get(t).isOptional,defaultSort:Kt.get(t),hiddenSort:[]}}}),Gt=new q("CUSTOM_FEED_DATA",{factory:C.Null}),Ke=new q("SUBS_FEED_DATA",{factory:C.Null}),Ln=new q("SUBS_LATEST_SORT",{factory:C.Null});let dt;async function ur(e){const t=await A(()=>e.querySelector("#subgrid-container"));if(!t){N("Failed to render feed");return}t.querySelectorAll("shreddit-post").forEach(s=>{he(s)});const n=new MutationObserver(s=>{for(const r of s)for(const a of r.addedNodes)a instanceof HTMLElement&&(a.matches("shreddit-post")&&he(a),a.matches("shreddit-feed")&&a.querySelectorAll("shreddit-post").forEach(l=>{he(l)}))});switch(n.observe(t,{childList:!0,subtree:!0}),setTimeout(()=>{n.disconnect()},g),Mn(t),Nt()){case D.Sub:Qo(t);break;case D.Custom:So(t);break}cr(t)}function Mn(e){dt&&dt.disconnect(),dt=new MutationObserver(t=>{for(const n of t)for(const o of n.addedNodes)o instanceof HTMLElement&&(o.matches("faceplate-batch")&&o.querySelectorAll("shreddit-post").forEach(s=>{he(s)}),o.matches("article")&&he(o.querySelector("shreddit-post")))}),dt.observe(e,{childList:!0,subtree:!0})}function Tn(e,t){const n=t.toString().toLowerCase();switch(e){case D.Sub:return`/r/${Oe()}/${n}/`;case D.Home:return`/${n}/?feed=home`;case D.Popular:return`/r/popular/${n}/`;case D.All:return`/r/all/${n}/`;case D.Custom:let o=window.location.href.split("//www.reddit.com");return o.length>=2?`${o[1]}${n}/`:"/404/";default:return"/404/"}}const Vt="DATABASE_VERSION";class Bn{constructor(t,n,o){this.version=t,this.action=n,this.previous=o}check(){const t=GM_getValue(Vt,null);if(t==null){GM_setValue(Vt,this.version);return}Lo(t,this.version)&&(this.previous?.check(),this.action(),GM_setValue(Vt,this.version),te(`Reddit++ was upgraded to ${this.version}`))}}const _r=new Bn("1.0.0",()=>{const e=GM_getValue("SETTINGS_DATABASE",null);if(e==null)return;const t=e.savedBookmark;t!=null&&(e.savedBookmarkPosts=t,e.savedBookmarkComments=t,delete e.savedBookmark);const n=e.savedBookmarkHideUnsaved;n!=null&&(e.savedBookmarkPostsShowAlways=!n,e.savedBookmarkCommentsShowAlways=!n,delete e.savedBookmarkHideUnsaved),GM_setValue("SETTINGS_DATABASE",e)}),pr=new Bn("1.2.0",()=>{const e=GM_getValue("SETTINGS_DATABASE",null);e!=null&&(e.savedBookmarkPosts!=null&&typeof e.savedBookmarkPosts!="string"&&(e.savedBookmarkPosts=(e.savedBookmarkPostsShowAlways==!0?d.Always:e.savedBookmarkPosts==!0?d.WhenUpvoted:d.Disabled).toString()),delete e.savedBookmarkPostsShowAlways,e.savedBookmarkComments!=null&&typeof e.savedBookmarkComments!="string"&&(e.savedBookmarkComments=(e.savedBookmarkCommentsShowAlways==!0?d.Always:e.savedBookmarkComments==!0?d.WhenUpvoted:d.Disabled).toString()),delete e.savedBookmarkCommentsShowAlways,(e.redirectSuggestion!=null||e.redirectForced!=null)&&(e.redirectMode=e.redirectForced==!0?ce.Forced:e.redirectSuggestion==!0?ce.Suggestion:ce.Disabled),delete e.redirectSuggestion,delete e.redirectForced,e.collapseAwards!=null&&typeof e.collapseAwards!="string"&&(e.collapseAwards=(e.collapseAwardsCompletely==!0?E.RemoveCompletely:e.collapseAwards==!0?E.WhenUpvoted:E.Default).toString()),delete e.collapseAwardsCompletely,e.showNames!=null&&typeof e.showNames!="string"&&(e.usernameMode=e.showNames==!0?ue.Nickname:ue.ProfileName,delete e.showNames),GM_setValue("SETTINGS_DATABASE",e),GM_setValue("SETTINGS_REFRESHED",Date.now()));const t=new q("SUBS_SETTINGS");t.forEach((n,o)=>{o.defaultFeed!=null&&o.defaultFeed in ee&&Ke.get(n)==null&&Ke.set(n,{redirect:!0,defaultSort:o.defaultFeed,hiddenSort:[]})}),t.wipe()},_r);var mr=_("./src/modules/biggerFonts.less");I.addStyle(mr.A);function fr(){I.addVar("--pp-biggerFonts-Content",`${v.BIGGER_FONTS_CONTENT_SIZE.get()}px`),I.addVar("--pp-biggerFonts-Other",`${v.BIGGER_FONTS_OTHER_SIZE.get()}px`)}var hr=_("./resources/comments/userTags/blockedButton.svg"),gr=_.n(hr),vr=_("./resources/comments/userTags/blockedIcon.svg"),Er=_.n(vr),wr=_("./resources/comments/userTags/followedButton.svg"),br=_.n(wr),Sr=_("./resources/comments/userTags/followedIcon.svg"),Cr=_.n(Sr),xr=_("./resources/comments/userTags/likedButton.svg"),yr=_.n(xr),Ar=_("./resources/comments/userTags/likedIcon.svg"),Or=_.n(Ar),Lr=_("./resources/comments/userTags/warningButton.svg"),Mr=_.n(Lr),Tr=_("./resources/comments/userTags/warningIcon.svg"),Br=_.n(Tr),Rr=_("./src/modules/comments/userTags.less");const Xt=new de;Xt.register(document);class V{}V.FOLLOWED="Followed",V.LIKED="Liked",V.WARNING="Warning",V.BLOCKED="Blocked";class $a{}const Be=new Map([[V.FOLLOWED,{priority:100,addHint:"Follow",removeHint:"Unfollow",color:"#0b7ed3",icon:Cr(),button:br()}],[V.LIKED,{priority:2,addHint:"Tag as liked",removeHint:"Remove liked tag",color:"#C95A54",icon:Or(),button:yr()}],[V.WARNING,{priority:1,addHint:"Tag as warned",removeHint:"Remove warned tag",color:"#D4A343",icon:Br(),button:Mr()}],[V.BLOCKED,{priority:0,addHint:"Block",removeHint:"Unblock",color:"#663988",icon:Er(),button:gr()}]]);class Za{}const Re=new q("TAGS");async function Rn(e){if(v.USER_TAGS.isDisabled())return;Xt.addStyle(Rr.A,"userTags");const t=e.getAttribute("author");if(t==null)return;const n=Re.get(t),o=await A(()=>e.querySelector('div[pp-anchor="tags"]'),g);if(!o)return;if(o.parentNode.querySelectorAll('svg[userTag="true"]').forEach(r=>{r.remove()}),n.tags!=null)for(const r of n.tags)s(r);function s(r){const a=Be.get(r),l=U(a.icon,20,20,{viewBox:"-4 -4 20 20"});l.setAttribute("userTag","true"),l.style.color=a.color,o.after(l)}}class Dn{getInput(t,n){}run(t,n){let o=gn.get(n);const s={csrf_token:Oo("csrf_token"),operation:this.key,variables:{input:this.getInput(t,o.accountId)}};fetch("https://www.reddit.com/svc/shreddit/graphql",{method:"post",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify(s)}).then(r=>r.json()).then(r=>{r!=null&&r.errors?.message&&te(r.errors.message)})}}class Dr extends Dn{constructor(){super(...arguments),this.key="UpdateProfileFollowState",this.enable="FOLLOWED",this.disable="NONE"}getInput(t,n){return{accountId:n,state:t?this.enable:this.disable}}}class Pr extends Dn{constructor(){super(...arguments),this.key="UpdateRedditorBlockState",this.enable="BLOCKED",this.disable="NONE"}getInput(t,n){return{redditorId:n,blockState:t?this.enable:this.disable}}}const Ir=new Dr,kr=new Pr;class Ya{}const Ur=S+42,Pn="#adadad";function Wr(e,t){if(v.USER_TAGS.isDisabled())return;const n=document.createElement("div");n.classList.add("pp_tagHint_offset"),e.prepend(n);const o=document.createElement("div");o.classList.add("pp_tagHintContainer"),n.prepend(o);const s=c(o,"div","pp_tagHint");s.style.display="none";const r=document.createElement("div");r.classList.add("pp_tagsPanel"),n.after(r),Be.forEach((l,w)=>{a(l,w)});function a(l,w){const f=c(r,"span","pp_tagButton");f.setAttribute("userTag",w);const u=U(l.button,20,20);f.appendChild(u);const p={userTag:w,userId:t,button:f,hint:s};f.addEventListener("click",()=>{jr(p)}),f.addEventListener("mouseenter",()=>{Nr(p)}),f.addEventListener("mouseleave",()=>{Fr(p)})}In(r,t)}function In(e,t){const n=Re.get(t),o=n?.tags??[];e.querySelectorAll(".pp_tagButton").forEach(s=>{const r=s,a=r.getAttribute("userTag"),l=Be.get(a);r.removeAttribute("has-cooldown"),r.removeAttribute("has-blocked"),o.includes(a)?(r.classList.toggle("pp_tagButtonActive",!0),r.style.backgroundColor=l.color,r.style.color="white"):(r.classList.toggle("pp_tagButtonActive",!1),r.style.color=l.color,r.style.removeProperty("background-color"),a==V.BLOCKED&&n.blockCooldown!=null&&Date.now()/1e3<n.blockCooldown&&(r.setAttribute("has-cooldown",""),r.style.color=Pn),a==V.FOLLOWED&&o.includes(V.BLOCKED)&&(r.setAttribute("has-blocked",""),r.style.color=Pn))})}function jr(e){if(e.button.getAttribute("has-cooldown")!=null||e.button.getAttribute("has-blocked")!=null){te("Unable to do this");return}let t=Re.get(e.userId);t.tags==null&&(t.tags=[]);let n=!1;t.tags.includes(e.userTag)?t.tags=t.tags.filter(o=>o!=e.userTag):(t.tags.push(e.userTag),n=!0,e.userTag==V.BLOCKED&&(t.tags=t.tags.filter(o=>o!=V.FOLLOWED))),t.tags.length>1&&t.tags.sort((o,s)=>(Be.get(o)?.priority??0)-(Be.get(s)?.priority??0)),Re.set(e.userId,t),document.body.querySelectorAll(`shreddit-comment[author="${e.userId}"]`).forEach(o=>{Rn(o),n&&e.userTag==V.BLOCKED&&o.setAttribute("collapsed","")}),e.userTag==V.FOLLOWED&&Ir.run(n,e.userId),e.userTag==V.BLOCKED&&(n||(t.blockCooldown=Date.now()/1e3+Ur,Re.set(e.userId,t)),kr.run(n,e.userId)),In(e.button.parentElement,e.userId)}function Nr(e){e.hint.style.removeProperty("display"),e.hint.dataset.target=e.userTag;const t=Re.get(e.userId),n=Be.get(e.userTag),o=(t?.tags??[]).includes(e.userTag);if(e.hint.innerText=o?n.removeHint:n.addHint,e.button.getAttribute("has-cooldown")!=null){const s=Math.round((t.blockCooldown-Date.now()/1e3)/b);e.hint.innerText=`Unable to block for ${s}h after unblocking`}e.button.getAttribute("has-blocked")!=null&&(e.hint.innerText="Unable to follow on blocked user")}function Fr(e){e.hint.dataset?.target==e.userTag&&(e.hint.style.display="none")}var Hr=_("./resources/comments/shareButton.svg"),Kr=_.n(Hr);function Gr(e){let t=e.querySelector("shreddit-overflow-menu").shadowRoot;Xt.register(t);const n=t.querySelector("faceplate-menu"),o=n.querySelector('faceplate-tracker[noun="report"]');if(v.HIDE_SHARE.isEnabled()){let s=o.cloneNode(!0);s.querySelector("span .text-body-2").textContent="Copy link",o.before(s);const r=s.querySelector("svg"),a=U(Kr(),20,20);r.replaceWith(a);const l=e.getAttribute("permalink");s.addEventListener("click",()=>{navigator.clipboard.writeText(`https://www.reddit.com${l}`),te("Link copied")})}Wr(n,e.getAttribute("author"))}function Vr(e){v.UNWRAP_MORE_REPLIES.isDisabled()||e.getAttribute("collapsed")==null&&setTimeout(()=>{kn(e)},150)}function kn(e){for(const t of e.childNodes)if(t instanceof HTMLElement){if(t.matches("faceplate-partial")&&t.getAttribute("src")?.includes("/more-comments/")&&!z(t)){t.click();let n=0;const o=setInterval(()=>{if(n++,t.parentNode==null){clearInterval(o),setTimeout(()=>{kn(e)},50);return}n>60&&(clearInterval(o),N("Unable load more replies"))},100)}if(t.matches("a")&&t.getAttribute("slot")=="more-comments-permalink"){const n=t.querySelector(".text-secondary-weak");n&&(n.textContent="More replies in single thread")}}}var Xr=_("./resources/comments/sortButtons/controversial.svg"),qr=_.n(Xr),zr=_("./resources/comments/sortButtons/old.svg"),$r=_.n(zr),Zr=_("./resources/comments/sortButtons/qa.svg"),Yr=_.n(Zr),Qr=_("./src/modules/comments/sortButtons.less");class Y{}Y.BEST="Best",Y.TOP="Top",Y.NEW="New",Y.CONTROVERSIAL="Controversial",Y.OLD="Old",Y.QA="QA";class Qa{}const Ge="sort=";function De(e,t){return t==="confidence"&&!e.includes("?")?!0:e.includes(`${Ge}${t}`)}const Ve=new Map([[Y.BEST,{icon:xn(),href:"confidence",isCurrent:e=>De(e,"confidence")}],[Y.TOP,{icon:An(),href:"top",isCurrent:e=>De(e,"top")}],[Y.NEW,{icon:yn(),href:"new",isCurrent:e=>De(e,"new")}],[Y.CONTROVERSIAL,{icon:qr(),href:"controversial",isCurrent:e=>De(e,"controversial")}],[Y.OLD,{icon:$r(),href:"old",isCurrent:e=>De(e,"old")}],[Y.QA,{icon:Yr(),href:"qa",isCurrent:e=>De(e,"qa"),overrideName:"Q&A"}]]);let qt=!1;function Un(){let e=Z.get(F.COMMENTS_CURRENT_SORT);return e instanceof Object&&(e=Y.BEST),e}function Wn(){if(v.COMMENTS_REMEMBER_SORT.isEnabled()&&window.location.href.includes("/comments/")&&!window.location.href.includes("/user/")){const e=Ve.get(Un());if(e.isCurrent(window.location.href))return!1;let t=window.location.href;const n=t.includes("?")&&!t.includes(Ge);if(t.includes(Ge)){const o=t.indexOf(Ge);t=t.slice(0,o-1)}return window.location.replace(t+(n?"&":"?")+Ge+e.href),!0}return!1}async function jn(e){if(v.COMMENTS_SORT_BUTTONS.isDisabled())return;I.addStyle(Qr.A,"sortButtons"),qt=!1;const t=await A(()=>e.querySelector("comment-body-header")?.querySelector(".pdp-comments-tree-sort-container"),g);if(!t||z(t))return;Jr(e),t.querySelector("shreddit-sort-dropdown").classList.add("pp_sortDropdown_hidden");let n=Y.BEST;v.COMMENTS_REMEMBER_SORT.isEnabled()?n=Un():Ve.forEach((s,r)=>{s.isCurrent(window.location.href)&&(n=r)}),Ve.forEach((s,r)=>{o(r,s)});function o(s,r){const a=c(t,"div","pp_sortButton");a.classList.toggle("pp_sortButton_active",s==n),a.setAttribute("commentSort",s),a.addEventListener("click",()=>{ti(s)});const l=c(a,"span"),w=U(r.icon,16,16);l.append(w);const f=c(a,"span");f.textContent=r.overrideName!=null?r.overrideName:s}qt=!0}async function Jr(e){const t=await A(()=>e.querySelector("comment-body-header")?.querySelector("pdp-comment-search-input")?.shadowRoot?.querySelector("button")?.querySelector(".text-start"),g);t&&(t.textContent="Search")}let zt=!1;function ei(){zt=!1,qt||jn(document.body)}async function ti(e){if(zt){te("Unable to switch sort while loading comments");return}const t=await A(()=>document.body.querySelector("comment-body-header")?.querySelector(".pdp-comments-tree-sort-container"),g);if(!t)return;const n=Ve.get(e);t.querySelector(`data[value="${n.href.toUpperCase()}"]`).click(),Z.set(F.COMMENTS_CURRENT_SORT,e),zt=!0;const s=setInterval(()=>{n.isCurrent(window.location.href)&&(clearInterval(s),Ve.forEach((r,a)=>{t.querySelector(`div[commentSort="${a}"]`).classList.toggle("pp_sortButton_active",a==e)}))},20)}var ni=_("./src/modules/comments/comments.less"),oi=_("./src/modules/comments/hideShare.less"),si=_("./src/modules/comments/hideStickyComposer.less");let Xe=null,qe=null,ct=null;async function ri(e){I.addStyle(ni.A,"comments"),v.HIDE_SHARE.isEnabled()&&I.addStyle(oi.A,"hideShare"),v.HIDE_STICKY_COMPOSER.isEnabled()&&I.addStyle(si.A,"hideStickyComposer"),Xe!=null?Xe.disconnect():Xe=new IntersectionObserver(t=>{for(const n of t){const o=n.target?.parentElement?.parentElement;n.isIntersecting&&Gn(o)&&(Kn(o),Fn(o),Xe?.unobserve(n.target))}},{threshold:.05}),qe!=null?qe.disconnect():qe=new IntersectionObserver(t=>{for(const n of t){const o=n.target?.parentElement?.parentElement;n.isIntersecting&&Gn(o)&&(Kn(o),qe.unobserve(n.target))}},{threshold:.05}),ct!=null?ct.disconnect():ct=new MutationObserver(t=>{for(const n of t)for(const o of n.addedNodes)if(o instanceof HTMLElement){const s=o.parentElement?.querySelector("shreddit-comment-tree");if(s!=null&&(ii(s),ei()),o.matches("shreddit-comment")&&(o.getAttribute("depth")=="0"?Nn(o):(Hn(o),Fn(o))),v.HIDE_RELATED_POSTS.isEnabled()&&o.matches("h2")&&o.textContent?.includes("Related posts")){const r=o,a=r.nextSibling;r.remove(),a?.remove()}}}),ct.observe(e,{childList:!0,subtree:!0}),jn(e)}function ii(e){e.querySelectorAll('shreddit-comment[depth="0"]').forEach(t=>{Nn(t)})}function Nn(e){z(e)||Xe.observe(e.querySelector("summary"))}function Fn(e){e.querySelectorAll("shreddit-comment").forEach(t=>{Hn(t)})}function Hn(e){z(e)||qe.observe(e.querySelector("summary"))}async function Kn(e){if(e.getAttribute("author")=="[deleted]")return;const t=e.querySelector('div[slot="comment"]'),n=e.querySelector('div[slot="commentMeta"]');if(hs(e,t),v.COLLAPSE_AUTOMODERATOR.isEnabled()){const m=e.getAttribute("author");if(m!=null&&m=="AutoModerator"){e.setAttribute("collapsed","");return}A(()=>{const y=n.querySelector('shreddit-comment-author-modifier-icon[distinguished-as="MODERATOR"]')!=null,O=e.querySelector("shreddit-comment-badges")?.shadowRoot?.querySelector('svg[icon-name="pin-fill"]')!=null;return y&&O?!0:null},g).then(y=>{y&&e.querySelector("details")?.toggleAttribute("open",!1)})}Vr(e);const o=n.querySelector('faceplate-tracker[noun="comment_author"]'),s=o?.parentElement?.parentElement;if(!s||!s.parentElement)return;const r=document.createElement("div");r.setAttribute("pp-anchor","tags");const a=s.parentElement.querySelector(".ml-2xs");a!=null?a.after(r):s.after(r);const l=await A(()=>n?.querySelector('faceplate-tracker[noun="comment_time"]'),g),w=document.createElement("div");w.setAttribute("pp-anchor","info"),l?.before(w),v.GHOSTED_COMMENTS.isEnabled()&&parseInt(e.getAttribute("score")??"0")<0&&(e.querySelector('div[slot="commentAvatar"]').classList.add("pp_muted_avatar"),o.querySelector("a").style.color="#a5a5a5",t.classList.add("pp_muted_content"));const f=t.querySelector('figure[class="rte-media"]');if(f!=null&&v.LIGHTBOX.isEnabled()){const m=f.querySelector("a"),y=m.href;m.removeAttribute("href");let O=f.querySelector("img");O==null&&(O=f.querySelector("shreddit-player")),O.classList.add("pp_image_pointer"),m.addEventListener("click",()=>{Ut.open(y)})}Rn(e);const u=e.getAttribute("author"),p=o.querySelector("a");Wt(u,i.Comment,{commentMeta:n,nickName:p,tagsAnchor:r,infoAnchor:w}),ai(e)}async function ai(e){const t=await Ao(e.querySelector('div[slot="actionRow"]'));dn(e,i.Comment);const n=await A(()=>e.querySelector("shreddit-overflow-menu")?.shadowRoot?.querySelector("rpl-dropdown"));n&&(bt(e,n),n.addEventListener("click",()=>{Gr(e)},{once:!0}))}function Gn(e){return e?.matches("shreddit-comment")??!1}var li=_("./src/modules/images/images.less");let ze=null,ut=[];function di(){if(v.LIGHTBOX.isDisabled())return;I.addStyle(li.A,"images");const e=document.body.querySelector("shreddit-app");new MutationObserver((t,n)=>{for(const o of t){for(const s of o.addedNodes)s instanceof HTMLElement&&s.id=="shreddit-media-lightbox"&&ci(s);for(const s of o.removedNodes)s instanceof HTMLElement&&s.id=="shreddit-media-lightbox"&&(Fe.clearImage(),ze&&(ze.disconnect(),ze=null),ut.length>0&&(ut.forEach(r=>{Vn(r,!1)}),ut=[]))}}).observe(e,{childList:!0})}function ci(e){new MutationObserver((t,n)=>{for(const o of t)for(const s of o.addedNodes)s instanceof HTMLElement&&s.matches("div")&&s.classList.contains("media-lightbox-img")&&(ui(s),n.disconnect()),s instanceof HTMLElement&&s.matches("gallery-carousel")&&(_i(s),n.disconnect())}).observe(e,{childList:!0,subtree:!0})}async function ui(e){const t=await A(()=>e.querySelector(".lightboxed-content")),n=await A(()=>t?.querySelector("img"));if(!(!t||!n)){if(n.parentElement?.matches("zoomable-img")){const o=n.parentElement,s=c(t,"div");s.className=o.className,s.append(n),o.remove()}if(n.classList.toggle("pp_lightbox_target",!0),Fe.setImage(n),v.LIGHTBOX_CLOSE.isEnabled()){const o=e.querySelector('img[role="presentation"]');if(o&&!z(o)){o.classList.toggle("pp_image_pointer",!0);const s=await A(()=>e.parentElement?.parentElement?.querySelector('button[aria-label="Close lightbox"]'));e.querySelector('img[role="presentation"]')?.addEventListener("click",()=>{s?.click()})}}}}async function _i(e){const n=e.querySelector("ul").querySelectorAll("li");ze=new MutationObserver(w=>{for(const f of w)if(f.attributeName=="style"&&f.target instanceof HTMLElement){let u=0,p;if(n.forEach(m=>{m.style.visibility=="visible"&&(u++,p=m)}),u==1){const m=p.querySelector("figure")?.querySelector("img");m&&Fe.setImage(m)}}});const o=await A(()=>e.shadowRoot?.querySelector('span[slot="prevButton"]')?.querySelector("button")),s=await A(()=>e.shadowRoot?.querySelector('span[slot="nextButton"]')?.querySelector("button")),r=await A(()=>e.parentElement?.parentElement?.querySelector('button[aria-label="Close lightbox"]')),a=v.LIGHTBOX_CLOSE.isEnabled(),l=v.LIGHTBOX_NAVIGATION.isEnabled();n.forEach(w=>{ze.observe(w,{attributes:!0});const f=w.querySelector("figure"),u=f?.querySelector("img");Vn(u,!0),ut.push(u),(a||l)&&!z(f)&&(f.classList.toggle("pp_image_pointer",!0),f.addEventListener("click",p=>{if(p.target!=f)return;const m=p.clientX<window.innerWidth/2?o:s;m?.getAttribute("aria-disabled")=="true"?a&&setTimeout(()=>{r?.click()},50):l?m?.click():a&&setTimeout(()=>{r?.click()},50)}))})}function Vn(e,t){e.classList.toggle("pp_lightbox_target",t),e.parentElement?.classList.toggle("pp_lightbox_galleryFigure",t),t||e.removeAttribute("style")}function Xn(e){if(v.REMOVE_RIGHT_SIDEBAR.isEnabled()){e.remove();return}e.className="right-sidebar min-w-0 w-[316px] max-w-[316px] hidden s:block styled-scrollbars xs:sticky xs:top-[56px] xs:max-h-[calc(100vh-var(--shreddit-header-height)-1px)] xs:overflow-y-auto xs:overflow-x-hidden pp_rightSidebar pp_defaultText"}var ge;(function(e){e.Home="home",e.Popular="popular",e.News="news",e.Explore="explore"})(ge||(ge={}));const qn=new Map([[ge.Home,{tittle:"Home"}],[ge.Popular,{tittle:"Popular"}],[ge.News,{tittle:"News",removeById:"news-posts"}],[ge.Explore,{tittle:"Explore"}]]);async function pi(e){e==null&&(e=document.body.querySelector("#left-sidebar-container"));const t=await A(()=>e.querySelector("left-nav-top-section"),g*2);t&&Object.values(ge).forEach(n=>{const o=v.SIDEBAR_NAV_BUTTON.getChild(an(n),!0),s=qn.get(n);t.toggleAttribute(n,o.isEnabled()),s.removeById&&o.isDisabled()&&A(()=>t?.shadowRoot?.querySelector(`#${s.removeById}`),g).then(r=>r?.remove())})}class Ja{}class $e{async Render(t,n){if(z(t))return;t.classList.add("pp_sidebar_loadingSection");const o=await this.GetSectionElements(t);t.classList.remove("pp_sidebar_loadingSection"),n.isDisabled()&&(o.container.remove(),o.bottomLine?.remove())}FindBottomLine(t){let n=t.nextElementSibling;for(;n!=null&&!n.matches("hr");)n=n.nextElementSibling;return n}}class mi extends $e{FindContainer(t,n){let o=null;return t.querySelectorAll("faceplate-expandable-section-helper").forEach(s=>{s.querySelector('summary[aria-controls="multireddits_section"]')!=null&&(o=s)}),o}async GetSectionElements(t){return{container:t,button:t.querySelector('summary[aria-controls="multireddits_section"]'),bottomLine:this.FindBottomLine(t)}}}class fi extends $e{FindContainer(t,n){return t.querySelector('faceplate-tracker[noun="games_drawer"]')}async GetSectionElements(t){return await A(()=>t.querySelector("games-section-badge-wrapper")),{container:t,button:t.querySelector('summary[aria-controls="games_section"]'),bottomLine:this.FindBottomLine(t)}}}class hi extends $e{FindContainer(t,n){let o=t.querySelector("#recent-communities-section");return o==null&&n.id=="recent-communities-section"&&(o=n),o}async GetSectionElements(t){const n=await A(()=>t.querySelector("faceplate-expandable-section-helper")),o=await A(()=>n?.querySelector("summary"));return n.classList.add("pp_defaultText"),{container:n,button:o,bottomLine:t}}}class gi extends $e{FindContainer(t,n){return t.querySelector('summary[aria-controls="RESOURCES"]')}async GetSectionElements(t){return{container:t.parentElement.parentElement,button:t,bottomLine:null}}}var vi=_("./resources/inputClear.svg"),Ei=_.n(vi),wi=_("./src/utils/UI/input.less");const $t=new de;$t.register(document),$t.addStyle(wi.A);function Zt(e,t,n,o,s){const{icon:r,iconConfig:a,cleanButton:l,alignCenter:w,filter:f}={icon:null,iconConfig:{strokeColor:G,fillColor:H},cleanButton:!1,alignCenter:!1,filter:L=>L,...s},u=c(e,"div","pp_ui_input_container"),p=c(u,"div",["pp_ui_input_button","button","button-bordered"]);p.setAttribute("tabindex","0");const m=p.attachShadow({mode:"open"});$t.register(m);const y=c(p,"span",["pp_ui_input_panel","flex","items-center","justify-center"]);if(m.appendChild(y),r!=null){const L=c(y,"span","pp_ui_input_icon");se(L,r,16,16,a)}const O=c(y,"span","pp_ui_input_span");l==!0&&(O.style.marginRight="22px");const M=c(O,"input","pp_ui_input");M.type="text",M.placeholder=t,w==!0&&(M.style.textAlign="center"),n!=null&&n.length>0&&(M.value=n);let T;if(l==!0){const L=c(u,"div","pp_ui_input_clearContainer");T=c(L,"button",["pp_ui_input_clearButton","button-plain"]),T.classList.toggle("pp_hidden",(M.value?.length??0)==0);const P=U(Ei(),16,16);T.append(P),T.addEventListener("click",()=>{M.value=f(""),o(M.value),T?.classList.toggle("pp_hidden",!0)})}return M.addEventListener("input",()=>{const L=f(M.value.trim());o(L),l==!0&&T?.classList.toggle("pp_hidden",L.length==0)}),M.addEventListener("focusout",()=>{const L=f(M.value.trim());L!=M.value&&(M.value=L),l==!0&&T?.classList.toggle("pp_hidden",L.length==0)}),u}var bi=_("./resources/sidebarSubsManager.svg"),Si=_.n(bi),Ci=_("./resources/subFilter.svg"),zn=_.n(Ci);const Yt=new Map;async function xi(e){if(z(e,"pp-sub-filter")||v.SUB_FILTER.isDisabled())return;const t=await A(()=>e.querySelector(".left-nav-manage-communities-link")),n=await A(()=>e.querySelector("left-nav-communities-controller")?.shadowRoot?.querySelector(".items-container"));if(!t||!n)return;Yt.clear(),n.querySelectorAll("left-nav-community-item").forEach(l=>{const w=l.getAttribute("prefixedname")?.replace("r/","")?.toLowerCase()??null;w!=null&&Yt.set(w,l)});let o=Z.get(F.SUB_FILTER);(o==null||o instanceof Object)&&(o="");const s=Zt(e,"Filter",o,l=>{$n(l)},{icon:zn(),iconConfig:{strokeColor:H,fillColor:G},cleanButton:!0,filter:l=>l.trim()});t.style.width="65px",t.style.paddingRight="10px",(await A(()=>t.querySelector(".text-body-2")))?.remove(),t.replaceWith(s),s.prepend(t),A(()=>t.querySelector('rpl-icon[name="settings"]')?.shadowRoot?.querySelector("svg"),g).then(l=>{if(!l)return;const w=U(Si(),20,20);l.replaceWith(w)});const a=s.querySelector(".pp_ui_input_button");a.addEventListener("focus",()=>{t.style.display="none"}),a.addEventListener("focusout",()=>{t.style.display="block"}),$n(o)}function $n(e){Z.set(F.SUB_FILTER,e),Yt.forEach((t,n)=>{n.includes(e.toLowerCase())?t.style.removeProperty("display"):t.style.display="none"})}class yi extends $e{FindContainer(t,n){let o=null;return t.querySelectorAll("faceplate-expandable-section-helper").forEach(s=>{s.querySelector('summary[aria-controls="communities_section"]')!=null&&(o=s)}),o}async GetSectionElements(t){return xi(t),{container:t,button:t.querySelector('summary[aria-controls="communities_section"]'),bottomLine:this.FindBottomLine(t)}}}var ve;(function(e){e.Games="Games",e.Custom="Custom",e.Recent="Recent",e.Subs="Subs",e.Resources="Resources"})(ve||(ve={}));const Zn=new Map([[ve.Games,{tittle:"Games on reddit",setting:v.SIDEBAR_GAMES,renderer:new fi}],[ve.Custom,{tittle:"Custom feeds",setting:v.SIDEBAR_CUSTOMS,renderer:new mi}],[ve.Recent,{tittle:"Recent",setting:v.SIDEBAR_RECENT,renderer:new hi}],[ve.Subs,{tittle:"Communities",setting:v.SIDEBAR_SUBS,renderer:new yi}],[ve.Resources,{tittle:"Resources",setting:v.SIDEBAR_RESOURCES,renderer:new gi}]]);var Ai=_("./src/modules/sidebar/sidebarSettingsWindow.less");I.addStyle(Ai.A);const Oi=new fe("Sidebar settings",Li,Mi),Pe=new Ft;function Li(e,t){Pe.Reset(),Pe.RenderBanner(e.content);const n=c(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=c(n,"div","pp_window_elementsContainer");{const a=c(o,"div","pp_window_element"),l=c(a,"div","pp_settings_propertyHeader"),w=c(l,"div","pp_settings_propertyHeader_tittle");w.textContent="Communities filter",a.classList.add("pp_settings_property_oneLine");const f=c(a,"div","pp_settings_propertyButtonContainer"),u=c(f,"div","pp_window_controlArea"),p=Pe.CreateSource(v.SUB_FILTER.isEnabled());re(u,v.SUB_FILTER.isEnabled(),m=>{v.SUB_FILTER.switch(m),p.Capture(v.SUB_FILTER.isEnabled())})}const s=c(o,"h3","pp_settings_subtittle");s.textContent="Sections",Zn.forEach((a,l)=>{const w=c(o,"div","pp_window_element"),f=c(w,"div","pp_settings_propertyHeader"),u=c(f,"div",["text-12","text-secondary-weak","tracking-widest"]);u.textContent=a.tittle.toUpperCase(),w.classList.add("pp_settings_property_oneLine");const p=c(w,"div","pp_settings_propertyButtonContainer"),m=c(p,"div","pp_window_controlArea"),y=Pe.CreateSource(a.setting.isEnabled());re(m,a.setting.isEnabled(),O=>{a.setting.switch(O),y.Capture(a.setting.isEnabled())})});const r=c(o,"h3","pp_settings_subtittle");r.textContent="Navigation buttons",qn.forEach((a,l)=>{const w=c(o,"div","pp_window_element"),f=c(w,"div","pp_settings_propertyHeader"),u=c(f,"div","pp_settings_propertyHeader_tittle");u.textContent=a.tittle,w.classList.add("pp_settings_property_oneLine");const p=c(w,"div","pp_settings_propertyButtonContainer"),m=c(p,"div","pp_window_controlArea"),y=v.SIDEBAR_NAV_BUTTON.getChild(an(l),!0),O=Pe.CreateSource(y.isEnabled());re(m,y.isEnabled(),M=>{y.switch(M),O.Capture(y.isEnabled())})})}function Mi(){Pe.HasChanges()&&(v.nextRevision(),window.location.reload())}var Ti=_("./src/modules/sidebar/sidebar.less");I.addStyle(Ti.A);async function Bi(e){if(v.REMOVE_LEFT_SIDEBAR.isEnabled()){e.remove();return}e.classList.add("pp_defaultText"),pi(e),Ri(e);const t=new Map(Zn);tt("SIDEBAR",e,n=>{if(t.forEach((o,s,r)=>{const a=o.renderer.FindContainer(e,n);a!=null&&(o.renderer.Render(a,o.setting),r.delete(s))}),t.size==0)return!0})}async function Ri(e){const t=await A(()=>e.querySelector("#flex-left-nav-container"),g*2);if(!t)return;const n=xe(t,"div");n.setAttribute("id","pp-settings");const o=c(n,"rpl-tooltip");o.setAttribute("placement","right"),o.setAttribute("content","Reddit++ sidebar settings"),o.setAttribute("appearance","inverted"),o.style.cssText="--show-delay: 750ms; --hide-delay: 50ms";const s=c(o,"button");s.className=`bg-neutral-background shadow-xs
button-small px-[var(--rem6)]
button-bordered
icon
items-center justify-center
button inline-flex `,s.addEventListener("click",()=>Oi.open());const r=c(s,"span",["flex","items-center","justify-center"]),a=c(r,"span","flex"),l=se(a,On(),16,16)}var Di=_("./src/modules/users/userPage.less");I.addStyle(Di.A);async function Pi(e){const t=await A(()=>e.querySelector("#subgrid-container"),g);t!=null&&(ki(t),Ii(t))}async function Ii(e){const t=await A(()=>e.querySelector("shreddit-feed"),g);t!=null&&(t.querySelectorAll("shreddit-post").forEach(n=>{he(n)}),Mn(t))}async function ki(e){const t=await A(()=>e.querySelector("main")?.querySelector("div"),g),n=t?.lastElementChild?.querySelector(".text-body-1");if(!t||!n||!n.textContent?.includes("hidden"))return;const o=vn(),s=t.querySelector("#profile-feed-tabgroup");Yn(s,"#profile-tab-posts_tab",`/user/${o}/search/?q=&sort=new`),Yn(s,"#profile-tab-comments_tab",`/user/${o}/search/?q=&sort=new&type=comments`)}function Yn(e,t,n){const o=e.querySelector(t);o.href=n;const s=o.querySelector("span .gap-xs");yo(s,zn(),16,16,{strokeColor:H,fillColor:G})}var Ui=_("./src/utils/UI/button.less");I.addStyle(Ui.A);var _e;(function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"})(_e||(_e={}));var ie;(function(e){e[e.Primary=0]="Primary",e[e.Secondary=1]="Secondary",e[e.Plain=2]="Plain",e[e.Bordered=3]="Bordered"})(ie||(ie={}));const Wi=new Map([[_e.Small,"button-small"],[_e.Medium,"button-medium"],[_e.Large,"button-large"]]),ji=new Map([[ie.Primary,"button-primary"],[ie.Secondary,"button-secondary"],[ie.Plain,"button-plain"],[ie.Bordered,"button-bordered"]]);function Qt(e,t,n,o){const{icon:s,iconConfig:r,size:a,variant:l,fullWidth:w,borderRadius:f,containerClasses:u,buttonClasses:p}={icon:null,iconConfig:{strokeColor:G,fillColor:H},size:_e.Medium,variant:ie.Plain,fullWidth:!1,borderRadius:-1,containerClasses:[],buttonClasses:[],...o},m=c(e,"div",["pp_ui_button_container","inline-flex",...u]),y=c(m,"button",["pp_ui_button","button","px-[var(--rem10)]","items-center","justify-center",ji.get(l),Wi.get(a),...p]);w&&(m.classList.add("w-full"),y.classList.add("w-full")),f>=0&&(y.style.borderRadius=`${f}px`);const O=c(y,"span",["pp_ui_button_panel","inline-flex","items-center","justify-center"]);if(s!=null){const M=c(O,"span","pp_ui_button_icon");se(M,s,16,16,r)}if(t!=null){const M=c(O,"span","pp_ui_button_label");M.textContent=t}return y.addEventListener("click",()=>{n()}),m}var Ni=_("./resources/back.svg"),Fi=_.n(Ni);async function Hi(e){const t=await A(()=>e.querySelector("#search-results-page-tabgroup"));if(!t)return;const n=vn(),o=t.parentElement,s=Qt(o,null,()=>{window.location.replace(`/user/${n}/`)},{icon:Fi(),iconConfig:{strokeColor:H,fillColor:G}});o.prepend(s),o.style.gap="8px",o.style.justifyContent="flex-start",Qn(t,"#search-results-page-tab-posts",`/user/${n}/search/?q=&sort=new`),Qn(t,"#search-results-page-tab-comments",`/user/${n}/search/?q=&sort=new&type=comments`)}function Qn(e,t,n){const o=e.querySelector(t);o!=null&&(o.href=n)}var Ki=_("./src/modules/wideMode.less");function Jn(e){return`${parseInt(e)}px`}function Gi(e,t){if(v.WIDE_MODE.isDisabled()&&v.REMOVE_RIGHT_SIDEBAR.isDisabled()||(I.addStyle(Ki.A,"wideMode"),I.addVar("--pp-content-width",Jn(v.CONTENT_WIDTH.get())),I.addVar("--pp-content-offset",Jn(v.CONTENT_OFFSET.get())),t.parentNode==e))return;Xn(t);const n=t.parentElement;let o=!(window.innerWidth>=1392);const s=e.querySelector(".main-container");s.className="main-container gap-lg w-full",tt("WIDEMODE_PAGE",e,r,!1),v.REMOVE_RIGHT_SIDEBAR.isDisabled()&&tt("WIDEMODE_CONTEXT",n,r,!1);function r(l){return(l?.classList?.contains("rounded-[16px]")??!1)&&(l.classList.add("pp_rightSidebar_contextLookup"),window.innerWidth<1392&&l.parentNode!=t.parentNode&&t.after(l)),!1}a(),window.addEventListener("resize",l=>{a()});function a(){window.innerWidth>=1392&&!o&&(v.REMOVE_RIGHT_SIDEBAR.isDisabled()&&e.prepend(t),o=!0),window.innerWidth<1392&&o&&(v.REMOVE_RIGHT_SIDEBAR.isDisabled()&&n.append(t),o=!1)}}var Vi=_("./src/modules/app.less");async function eo(){I.addStyle(Vi.A,"app");const e=await A(()=>document.body.querySelector("shreddit-app")?.querySelector(".grid-container"));if(!e||z(e))return;ds(),Ko(),window.location.href.includes("/user/")&&!window.location.href.includes("/m/")?window.location.href.includes("/search/")?Hi(document.body):Pi(document.body):ur(document.body),di(),ri(document.body);const t=await A(()=>document.body.querySelector("#left-sidebar-container"),g*2);if(!t){N("Failed to render app");return}const n=t.parentElement;n.classList.add("pp_pageContainer"),Bi(t),n.querySelector(".subgrid-container").classList.add("pp_mainFeed");const s=await A(()=>document.body.querySelector("#right-sidebar-container"),g);s!=null&&(Xn(s),Gi(n,s)),fr()}var Xi=_("./resources/contentFilter.svg"),qi=_.n(Xi),zi=_("./resources/deleteButton.svg"),to=_.n(zi),$i=_("./resources/dragAnchor.svg"),no=_.n($i),Zi=_("./src/modules/filters/filtersWindow.less");const Yi=new fe("Content filters",Qi,Ji);I.addStyle(Zi.A);function Qi(e,t){e.container.style.zIndex="11",oo();const n=c(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=c(n,"ul","pp_filter_list");let s=Z.get(F.CONTENT_FILTERS);Array.isArray(s)||(s=[]);for(const u of s)l(u);w();let r=null;o.addEventListener("dragstart",u=>{const p=u.target;p.matches("li")&&u.dataTransfer&&(r=p,r.classList.toggle("pp_filter_dragged",!0),u.dataTransfer.effectAllowed="move")}),o.addEventListener("dragenter",u=>{const p=a(u.target);p!=null&&p!=r&&u.preventDefault()}),o.addEventListener("dragend",u=>{r?.classList.toggle("pp_filter_dragged",!1),r=null}),o.addEventListener("dragover",u=>{const p=a(u.target);p!=null&&p!=r&&u.preventDefault()}),o.addEventListener("drop",u=>{u.preventDefault();const p=a(u.target);if(p==null)return;const m=parseInt(r?.getAttribute("index")??"0"),y=parseInt(p?.getAttribute("index")??"0"),O=s[m];s.splice(m,1),s.splice(y,0,O),f(),m>y?p.before(r):p.after(r);let M=o.firstElementChild,T=0;for(;M?.hasAttribute("filter");)M.setAttribute("index",T.toString()),T++,M=M.nextElementSibling});function a(u){let p=u;for(;!p.hasAttribute("filter")&&p.parentElement!=null;)p=p.parentElement;return p.hasAttribute("filter")?p:null}function l(u,p){const m=c(o,"li","pp_filter_element");m.style.borderColor=W(u.color),m.toggleAttribute("filter",!0),m.setAttribute("index",s.findIndex(X=>X==u).toString()),p?.before(m);const y=c(m,"div"),O=c(y,"div","pp_filter_element_dragAnchor"),M=U(no(),16,16,{strokeColor:H,fillColor:G});O.append(M),O.addEventListener("mousedown",()=>{m.setAttribute("draggable","true")}),O.addEventListener("mouseenter",()=>{m.setAttribute("draggable","true")}),O.addEventListener("mouseleave",()=>{m.setAttribute("draggable","false")});const T=Zt(y,"Regular expression",u.expression,X=>{u.expression=X,f()},{icon:qi()}),L=c(y,"div","pp_filter_element_colorPicker"),P=c(L,"input");P.setAttribute("type","color"),P.setAttribute("value",u.color),P.addEventListener("input",j),P.addEventListener("change",j);function j(X){u.color=X.target.value,m.style.borderColor=W(u.color),f()}function W(X){return u.posts||u.comments?X:`${X}4f`}const K=c(y,"div","pp_filter_element_toggles"),J=c(K,"div"),le=c(J,"span",["text-secondary","font-normal"]);le.textContent="Posts:",re(J,u.posts,X=>{u.posts=X,m.style.borderColor=W(u.color),f()});const Ye=c(K,"div"),en=c(Ye,"span",["text-secondary","font-normal"]);en.textContent="Comments:",re(Ye,u.comments,X=>{u.comments=X,m.style.borderColor=W(u.color),f()});const fo=st(y,u.action,ps,X=>{u.action=X;let Se;switch(u.action){case Q.Hide:Se="#6A51D9";break;case Q.Blur:Se="#5BB3D9";break;case Q.Hightlight:Se="#74CB39";break}!Se&&(u.color=="#6A51D9"||u.color=="#5BB3D9"||u.color=="#74CB39")&&(u.color=Se,m.style.borderColor=W(Se),P.setAttribute("value",Se)),f()}),ho=T.querySelector(".pp_ui_input_button");ho.addEventListener("focus",()=>{L.classList.toggle("pp_hidden",!0),K.classList.toggle("pp_hidden",!0),fo.classList.toggle("pp_hidden",!0)}),ho.addEventListener("focusout",()=>{L.classList.toggle("pp_hidden",!1),K.classList.toggle("pp_hidden",!1),fo.classList.toggle("pp_hidden",!1)});const Da=c(y,"span"),go=c(Da,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),Pa=U(to(),24,24,{strokeColor:H,fillColor:G});go.append(Pa),go.addEventListener("click",()=>{s.splice(s.findIndex(X=>X==u),1),f(),m.remove()})}function w(){const u=Qt(o,"Add a filter",()=>{const p=new ms;p.expression="",p.color="#6A51D9",p.posts=!0,p.comments=!0,p.action=Q.Hide,s.push(p),l(p,u),f(),n.scrollBy(0,200)},{variant:ie.Primary,size:_e.Large,fullWidth:!0,borderRadius:15})}function f(){Z.set(F.CONTENT_FILTERS,s)}}function Ji(){oo()}function oo(){let e=Z.get(F.CONTENT_FILTERS);Array.isArray(e)||(e=[]),e=e.filter(t=>t!=null&&t.expression!=null&&t.expression.length>0),Z.set(F.CONTENT_FILTERS,e)}var ea=_("./resources/showIco.svg"),so=_.n(ea),ta=_("./src/modules/profileMenu/profileMenuWindow.less");I.addStyle(ta.A);const na=new fe("Profile menu elements",oa,sa),_t="profileMenuElement";function oa(e,t){e.container.style.zIndex="11",ro();const n=c(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=c(n,"ul","pp_filter_list");let s=Z.get(F.PROFILE_MENU_ELEMENTS);s=Jt(s);for(const u of s)l(u);w();let r=null;o.addEventListener("dragstart",u=>{const p=u.target;p.matches("li")&&u.dataTransfer&&(r=p,r.classList.toggle("pp_filter_dragged",!0),u.dataTransfer.effectAllowed="move")}),o.addEventListener("dragenter",u=>{const p=a(u.target);p!=null&&p!=r&&u.preventDefault()}),o.addEventListener("dragend",u=>{r?.classList.toggle("pp_filter_dragged",!1),r=null}),o.addEventListener("dragover",u=>{const p=a(u.target);p!=null&&p!=r&&u.preventDefault()}),o.addEventListener("drop",u=>{u.preventDefault();const p=a(u.target);if(!p||!r)return;const m=parseInt(r?.getAttribute("index")??"0"),y=parseInt(p?.getAttribute("index")??"0"),O=s[m];s.splice(m,1),s.splice(y,0,O),f(),m>y?p.before(r):p.after(r);let M=o.firstElementChild,T=0;for(;M?.hasAttribute(_t);)M.setAttribute("index",T.toString()),T++,M=M.nextElementSibling});function a(u){let p=u;for(;!p.hasAttribute(_t)&&p.parentElement!=null;)p=p.parentElement;return p.hasAttribute(_t)?p:null}function l(u,p){const m=c(o,"li","pp_filter_element");m.style.borderColor=L(),m.toggleAttribute(_t,!0),m.setAttribute("index",s.findIndex(W=>W==u).toString()),p?.before(m);const y=c(m,"div"),O=c(y,"div","pp_filter_element_dragAnchor"),M=U(no(),16,16,{strokeColor:H,fillColor:G});O.append(M),O.addEventListener("mousedown",()=>{m.setAttribute("draggable","true")}),O.addEventListener("mouseenter",()=>{m.setAttribute("draggable","true")}),O.addEventListener("mouseleave",()=>{m.setAttribute("draggable","false")});const T=c(y,"div","pp_profileMenuElement_tittleContainer");if(u.element==B.Separator)c(T,"hr");else{const W=c(T,"span");W.textContent=Ee.get(u.element).tittle}function L(){return u.hidden?"#bdbdbd":"#00adff"}const P=u.element==B.Separator;if(P||Ee.get(u.element).isOptional){const W=c(y,"span"),K=c(W,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]);let J=P?se(K,to(),24,24,{strokeColor:H,fillColor:G}):se(K,u.hidden?Ne():so(),18,18,{strokeColor:G,fillColor:H});K.addEventListener("click",()=>{P?(s.splice(s.findIndex(le=>le==u),1),m.remove()):(u.hidden=!u.hidden,m.style.borderColor=L(),J.remove(),J=se(K,u.hidden?Ne():so(),18,18,{strokeColor:G,fillColor:H})),f()})}}function w(){const u=Qt(o,"Add a separator",()=>{const p={};p.element=B.Separator,p.hidden=!1,s.push(p),l(p,u),f(),n.scrollBy(0,200)},{variant:ie.Primary,size:_e.Large,borderRadius:15,fullWidth:!0})}function f(){Z.set(F.PROFILE_MENU_ELEMENTS,s)}}function sa(){ro(),ao()}function ro(){let e=Z.get(F.PROFILE_MENU_ELEMENTS);e=Jt(e);let t=e.length-1;for(;t>=0&&e[t].element==B.Separator;)e.splice(t,1),t--;for(;e[0].element==B.Separator;)e.splice(0,1);let n=0;for(;n<e.length-1;){for(;e[n].element==B.Separator&&e[n+1].element==B.Separator;)e.splice(n+1,1);n++}Z.set(F.PROFILE_MENU_ELEMENTS,e)}var ra=_("./src/modules/settings/settingsWindow.less");I.addStyle(ra.A);const ia=new fe("Reddit++ Settings",aa,la);class ae{}ae.APIRequests={text:"API requests",color:"var(--shreddit-color-wordmark)",link:"https://github.com/lnm95/redditPlusPlus/blob/main/redditAPI.md"},ae.New={text:"New",color:"#2C96C4",link:"https://greasyfork.org/en/scripts/490046-reddit/versions"};let Ie=new Ft;function aa(e,t){document.body.click(),Ie.Reset(),Ie.RenderBanner(e.content);const n=c(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=c(n,"div","pp_window_elementsContainer");f("App name","Unauthenticated API requests are limited to 100 requests per 10 minutes",v.API_APP,[ae.APIRequests]),l("Show request limit warnings",null,v.API_WARNINGS,[ae.APIRequests]),s("Page view"),l("Wide mode","Focus on content by moving the right sidebar to the screen edge",v.WIDE_MODE),f("Content width","Width of the feed and comments in pixels",v.CONTENT_WIDTH),f("Content offset","Horizontal offset of the feed and comments in pixels",v.CONTENT_OFFSET),l("Remove left sidebar",null,v.REMOVE_LEFT_SIDEBAR),l("Remove right sidebar",null,v.REMOVE_RIGHT_SIDEBAR),s("Common enhancements"),a("Profile menu","Hide and replace profile menu elements",na),l("Zoomable lightbox","Open all images in a zoomable lightbox",v.LIGHTBOX),l("Close on background click","Close the lightbox when clicking outside the image",v.LIGHTBOX_CLOSE,[ae.New]),l("Background navigation","Navigate between images by clicking the left or right side of the background",v.LIGHTBOX_NAVIGATION,[ae.New]),l("Scroll to top button",null,v.SCROLL_TO_TOP),f("Content font size","Text size for posts and comments (default: 14px)",v.BIGGER_FONTS_CONTENT_SIZE),f("UI font size","Text size for UI elements (headings, buttons, etc.) (default: 12px)",v.BIGGER_FONTS_OTHER_SIZE),w("Awards","Collapse awards for non-upvoted posts and comments or remove them completely",v.COLLAPSE_AWARDS),w("Redirect","Behavior when visiting old.reddit pages",v.REDIRECT_MODE),s("Content"),a("Filters","Hide posts and comments using regular expressions",Yi),l("Hidden posts history","Show recently hidden posts",v.SHOW_FILTERED_CONTENT),f("History limit","Maximum number of posts in the history",v.FILTERED_CONTENT_MAX_COUNT),s("Users"),l("User info",'Show user karma and a "new user" badge',v.USER_INFO,[ae.APIRequests]),w("Nickname mode","Display nickname instead of the profile name",v.USERNAME_MODE,[ae.APIRequests]),f("Nickname max symbols","Shorten nicknames that exceed this lengt",v.USERNAME_MAX_SIMBOLS),l("User tags","Enable custom user tags (sets via the comment context menu)",v.USER_TAGS),s("Feed page"),l("Feed buttons","Unwrap sorting buttons",v.FEED_BUTTONS),l("Flairs bar","Display available flairs for faster navigation (can be customized per subreddit)",v.FLAIR_BAR),l("Collapse community highlights",null,v.COLLAPSE_HIGHLIGHTS),l("Hide community recommendations","Hides the related communities section in the feed",v.HIDE_COMMUNITY_RECOMMENDATIONS),s("Posts"),l("Soft background","Apply a soft gradient background to hovered posts",v.BACKPLATES),l("Show post's author","Applies to Home and Popular feeds",v.SHOW_POST_AUTHOR),l("Show flairs always","Always display flairs in specific feeds (Home, Popular) and enable flair-based filtering",v.FLAIR_SHOW_ALWAYS,[ae.APIRequests]),l("Selectable text","Allow text selection in posts within the feed",v.SELECTABLE_POSTS),l("Unwrap button","Show an expand button for long-text posts",v.UNWRAP_POST),w("Save bookmarks","Show the save button next to vote buttons",v.SAVED_BOOKMARK_POSTS),s("Comments page"),l("Sort buttons","Unwrap comment sort buttons",v.COMMENTS_SORT_BUTTONS),l("Remember sort","Remember the last used comment sort",v.COMMENTS_REMEMBER_SORT),l("Hide related posts","Hides the related posts section",v.HIDE_RELATED_POSTS),l('Hide sticky "Join the conversation"','Hide the "Join the conversation" bar when scrolling',v.HIDE_STICKY_COMPOSER),s("Comments"),l('Unwrap "more replies"',"Automatically unwrap more replies when it becomes visible",v.UNWRAP_MORE_REPLIES),l("Hide share button","Move the share button to the comment context menu",v.HIDE_SHARE),l("Ghosted comments","Fade comments with a negative score",v.GHOSTED_COMMENTS),l("Collapse pinned","Automatically collapse pinned comments (AutoModerator and moderators)",v.COLLAPSE_AUTOMODERATOR),w("Save bookmarks","Show the save button next to vote buttons",v.SAVED_BOOKMARK_COMMENTS);function s(u){const p=c(o,"h3","pp_settings_subtittle");p.textContent=u}function r(u,p,m=[]){const y=c(o,"div","pp_window_element"),O=c(y,"div","pp_settings_propertyHeader"),M=c(O,"div","pp_settings_propertyHeader_tittle");if(M.textContent=u,p!=null){const L=c(O,"div","pp_settings_propertyHeader_description");L.textContent=p}else y.classList.add("pp_settings_property_oneLine");for(const L of m){const P=c(M,"a","pp_no_decoration");L.link!=null&&L.link.length>0&&P.setAttribute("href",L.link);const j=c(P,"div",["pp_settings_propertyHeader_badge","pp_no_decoration"]);j.textContent=L.text,j.style.color=L.color,j.style.borderColor=L.color}return c(y,"div","pp_settings_propertyButtonContainer")}function a(u,p,m,y=[]){const O=r(u,p,y),M=c(O,"div","pp_window_controlArea"),T=c(M,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),L=U(Ot(),20,20);T.append(L),O.parentElement.style.cursor="pointer",O.parentElement.addEventListener("click",()=>{m.open()})}function l(u,p,m,y=[]){const O=r(u,p,y),M=c(O,"div","pp_window_controlArea"),T=Ie.CreateSource(m.isEnabled());re(M,m.isEnabled(),L=>{m.switch(L),T.Capture(m.isEnabled())})}function w(u,p,m,y=[]){const O=r(u,p,y),M=c(O,"div","pp_window_controlArea"),T=Ie.CreateSource(m.getIndex());st(M,m.getIndex(),m.values,L=>{m.set(L),T.Capture(m.getIndex())})}function f(u,p,m,y=[]){const O=r(u,p,y),M=c(O,"div","pp_window_controlArea"),T=Ie.CreateSource(m.get());Zt(M,m.defaultValue,m.get(),L=>{m.set(L),T.Capture(m.get())},{alignCenter:!0,filter:m.filter})}}function la(){Ie.HasChanges()&&(v.nextRevision(),window.location.reload())}var da=_("./resources/profileMenu/comments.svg"),ca=_.n(da),ua=_("./resources/profileMenu/history.svg"),_a=_.n(ua),pa=_("./resources/profileMenu/posts.svg"),ma=_.n(pa),fa=_("./resources/profileMenu/saved.svg"),ha=_.n(fa),ga=_("./resources/profileMenu/settings.svg"),va=_.n(ga),Ea=_("./resources/profileMenu/upvoted.svg"),wa=_.n(Ea),ba=_("./src/modules/profileMenu/profileMenu.less");I.addStyle(ba.A);var B;(function(e){e[e.Separator=0]="Separator",e[e.VeiwProfile=1]="VeiwProfile",e[e.EditAvatar=2]="EditAvatar",e[e.Drafts=3]="Drafts",e[e.Achievements=4]="Achievements",e[e.Earn=5]="Earn",e[e.Premium=6]="Premium",e[e.DisplayMode=7]="DisplayMode",e[e.LogOut=8]="LogOut",e[e.Advertise=9]="Advertise",e[e.RedditPro=10]="RedditPro",e[e.Settings=11]="Settings",e[e.PlusPlus=12]="PlusPlus",e[e.Saved=13]="Saved",e[e.Upvoted=14]="Upvoted",e[e.Posts=15]="Posts",e[e.Comments=16]="Comments",e[e.History=17]="History"})(B||(B={}));const Ee=new Map([[B.VeiwProfile,{tittle:"View Profile",isOptional:!1,noun:"profile"}],[B.EditAvatar,{tittle:"Edit Avatar",isOptional:!0,noun:"edit_avatar"}],[B.Drafts,{tittle:"Drafts",isOptional:!0,find:e=>e.querySelector("#drafts-list-item")}],[B.Achievements,{tittle:"Achievements",isOptional:!0,find:e=>e.querySelector('faceplate-tracker[source="achievements"]')}],[B.Earn,{tittle:"Earn",isOptional:!0,find:e=>e.querySelector('faceplate-tracker[source="earn"]')}],[B.Premium,{tittle:"Premium",isOptional:!0,noun:"premium_menu"}],[B.DisplayMode,{tittle:"Display Mode",isOptional:!0,noun:"dark_mode"}],[B.LogOut,{tittle:"Log Out",isOptional:!1,find:e=>e.querySelector("user-drawer-logout")}],[B.Advertise,{tittle:"Advertise on Reddit",isOptional:!0,noun:"advertise"}],[B.RedditPro,{tittle:"Try Reddit Pro",isOptional:!0,noun:"try_reddit_pro"}],[B.Settings,{tittle:"Settings",isOptional:!1,noun:"settings"}],[B.PlusPlus,{isCustom:!0,tittle:"Reddit++",icon:va(),isOptional:!1,noun:"pp-settings",action:()=>{ia.open()}}],[B.Saved,{isCustom:!0,tittle:"Saved",icon:ha(),isOptional:!0,noun:"pp-saved",getHref:()=>`${Ze()}saved/`}],[B.Upvoted,{isCustom:!0,tittle:"Upvoted",icon:wa(),isOptional:!0,noun:"pp-upvoted",getHref:()=>`${Ze()}upvoted/`}],[B.Posts,{isCustom:!0,tittle:"Posts",icon:ma(),isOptional:!0,noun:"pp-posts",getHref:()=>`${Ze()}submitted/`}],[B.Comments,{isCustom:!0,tittle:"Comments",icon:ca(),isOptional:!0,noun:"pp-comments",getHref:()=>`${Ze()}comments/`}],[B.History,{isCustom:!0,tittle:"History",icon:_a(),isOptional:!0,noun:"pp-history",getHref:()=>`${Ze()}history/`}]]),Sa=Array(B.VeiwProfile,B.EditAvatar,B.Drafts,B.Achievements,B.Earn,B.Premium,B.DisplayMode,B.LogOut,B.Separator,B.Advertise,B.RedditPro,B.Separator,B.Settings,B.PlusPlus);let pt,io;function Jt(e){return Array.isArray(e)||(e=Ca()),Ee.forEach((t,n)=>{e.find(o=>o.element==n)==null&&e.push({element:n,hidden:!0})}),e}function Ca(){const e=new Array;for(const t of Sa)e.push({element:t,hidden:!1});return e}function Ze(){return io}function ao(){const e=document.getElementById("user-drawer-content");if(!e)return;if(e.classList.toggle("pp_defaultText",!0),e.querySelector('faceplate-tracker[noun="login"]')){xa(e);return}const t=new Array;if(pt)e.querySelectorAll("ul").forEach(a=>a.remove()),e.querySelectorAll("hr").forEach(a=>a.remove());else{const a=e.querySelector('faceplate-tracker[noun="profile"]')?.querySelector("a");a!=null&&(io=a.href);const l=e.querySelector('faceplate-tracker[noun="settings"]')??e.querySelector('faceplate-tracker[noun="login"]');Ee.forEach((f,u)=>{f.isCustom!=null&&f.isCustom&&lo(l,f)});const w=Object.values(B);pt=new Map,e.querySelectorAll("ul").forEach(f=>{for(const u of[...w]){const p=Ee.get(u)?.noun,y=(p!=null?O=>O.querySelector(`faceplate-tracker[noun="${p}"]`):Ee.get(u)?.find)?.(f);y&&(pt.set(u,y),y.remove(),w.splice(w.indexOf(u),1))}for(const u of f.children)t.push(u);f.remove()}),e.querySelectorAll("hr").forEach(f=>f.remove())}let n=Z.get(F.PROFILE_MENU_ELEMENTS);if(n=Jt(n),t.length>0){N(`Detected ${t.length} undefined elements in the Profile menu`);const a=s();for(const l of t)a.append(l);r()}let o=s();for(const a of n)if(!a.hidden)if(a.element==B.Separator)r(),o=s();else{const l=pt.get(a.element);l&&o.append(l)}function s(){return c(e,"ul",["w-100","p-0","m-0","list-none","my-xs"])}function r(){c(e,"hr",["h-px","w-100","bg-neutral-border-weak","border-0"])}}function xa(e){if(z(e,"pp-unloggened"))return;const t=e.querySelector('faceplate-tracker[noun="advertise"]'),n=Ee.get(B.PlusPlus);t&&n&&lo(t,n)}function lo(e,t){let n=e.cloneNode(!0);t.noun&&n.setAttribute("noun",t.noun),e.parentNode.appendChild(n);const o=n.querySelector("a");t.getHref!=null?o.href=t.getHref():o.removeAttribute("href"),A(()=>n.querySelector('rpl-icon[name="settings"]')?.shadowRoot?.querySelector("svg"),g).then(r=>{if(!r)return;const a=U(t.icon,20,20,{strokeColor:H});r.replaceWith(a)});let s=n.querySelector(".text-body-2");s.textContent=t.tittle,t.action&&n.addEventListener("click",()=>{t.action()})}var ya=_("./src/modules/header.less");I.addStyle(ya.A);async function co(e){const t=await A(()=>e.querySelector("reddit-header-large")?.querySelector("nav"));if(!t||z(t))return;const n=await A(()=>e.querySelector("#reddit-logo")),o=c(n,"div","pp_logo");o.textContent="++";const s=await A(()=>t.querySelector('span[data-part="inbox"]')?.parentElement?.parentElement??t.querySelector('span[data-part="primary"]')?.parentElement);s&&(s.classList.add("pp_userPanel"),s.addEventListener("click",()=>{ao()}))}var Aa=_("./src/modules/redirect.less");function Oa(){const e=v.REDIRECT_MODE.get(),t=window.location.href.includes("old.reddit.com");let n=null;t&&(n=window.location.href.replace("old.reddit.com","reddit.com")),e==ce.Forced&&n!=null&&window.location.assign(n),e==ce.Suggestion&&n!=null&&La(n);const o=Wn();return n!=null||o}function La(e){I.addStyle(Aa.A);let t=19;const n=c(document.body,"div","pp_redirectContainer"),o=c(n,"div","pp_redirectBox");o.textContent=`Click here to redirect on compatible page (${t})`,o.addEventListener("click",()=>{window.location.assign(e)});const s=setInterval(()=>{t--,o.textContent=`Click here to redirect on compatible page (${t})`,t<=0&&(clearInterval(s),n.remove())},750)}var Ma=_("./resources/scrollButton.svg"),Ta=_.n(Ma),Ba=_("./src/modules/scrollToTop.less");let oe,mt,we=0,be=!1,ft=null,uo=null;const _o=new MutationObserver(()=>{rn(()=>{ke()},.5)});async function po(){if(v.SCROLL_TO_TOP.isDisabled())return;I.addStyle(Ba.A,"scrollToTop"),ft=await A(()=>document.body.querySelector(".main-container"));const e=await A(()=>document.body.querySelector("#left-sidebar-container"));if(!ft||!e){N("Failed to render scroll to top");return}uo=e.querySelector("#flex-left-nav-contents");const t=ft.parentElement;if(oe)oe.remove(),_o.disconnect(),we=0,be=!1;else{window.addEventListener("resize",()=>{ke()});const o=c(document.body,"div","pp_scrollToTop_anchor");new IntersectionObserver(([r])=>{be=!r.isIntersecting,ke()}).observe(o)}_o.observe(e,{childList:!1,subtree:!1,attributes:!0});const n=e.querySelector("#flex-nav-buttons");n?.addEventListener("click",o=>{rn(()=>{ke()},.5)}),oe=c(t.parentElement,"div","pp_scrollToTop"),mt=U(Ta(),40,40),oe.append(mt),oe.addEventListener("click",()=>{be?(we=window.scrollY,window.scrollTo({top:0,behavior:"smooth"}),be=!1):we>0&&(window.scrollTo({top:we,behavior:"smooth"}),we=0,be=!0),ke()}),ke()}let mo=!0;function ke(){if(!oe||!mt)return;const e=uo?.getBoundingClientRect()?.right??0,t=ft?.getBoundingClientRect()?.left??0,n=t-e,o=60,s=100,r=80;let a=s,l=(e+t)/2-a/2;n>=r+40?(a=Math.min(s,n-20),l=(e+t)/2-a/2):n>=o?(a=Math.max(o,n-10),l=(e+t)/2-a/2):n>=40&&n<o?(a=Math.max(40,n-5),l=e+(n-a)/2):(a=60,l=e-30,oe.style.opacity="0.7"),oe.style.width=`${a}px`,oe.style.left=`${l}px`,n>=40&&(oe.style.opacity=""),mo=document.documentElement.scrollHeight>window.innerHeight&&(be||we>0)&&n>=30;const f=!be&&we>0;oe.classList.toggle("pp_hidden",!mo),mt.classList.toggle("pp_scrollToTop_inverted",f)}Ra();async function Ra(){const e=await A(()=>document.head!=null&&document.body!=null?document.body:null);if(e==null){N("Failed to get document.body");return}let t=document.head.querySelector('meta[name="reddit-plus-plus"]');if(t!=null){te("Reddit++ ran more than once. Check out the userscript manager to disable dublicates.",{seconds:10});return}if(t=document.createElement("meta"),t.setAttribute("name","reddit-plus-plus"),t.setAttribute("version","2.1.8"),document.head.append(t),pr.check(),Oa())return;zs();const n=await A(()=>e.querySelector("shreddit-app"),g);if(n==null||n.getAttribute("devicetype")!="desktop"){N("Reddit++ was stopped for a non compatible page");return}co(e),eo(),po(),tt("CORE",e,o=>{o.matches("reddit-header-large")==!0&&co(o.parentElement);const s=o.matches("shreddit-app")==!0,r=o.parentElement?.matches("shreddit-app")==!0,a=r&&o.classList.contains("grid-container"),l=r&&o.matches("search-dynamic-id-cache-controller")==!0;(s||a||l)&&(eo(),po(),Wn())})}})()})();
